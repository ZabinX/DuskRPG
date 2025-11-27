/*
 * This file is part of DuskZ, a graphical mud engine.
 *
 * Copyright (C) 2013 Michael Zucchi <notzed@gmail.com>
 *
 * DuskZ is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * DuskZ is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with DuskZ; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */
package duskz.tool;

import java.awt.image.BufferedImage;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintStream;
import java.util.jar.Attributes;
import java.util.jar.JarEntry;
import java.util.jar.JarInputStream;
import java.util.jar.JarOutputStream;
import java.util.jar.Manifest;
import javax.imageio.ImageIO;

/**
 * Convert a few basic files
 */
public class Convert {

	static void usage() {
		System.err.println("""
                      Usage: Convert cmd [args]
						client <rc> <game>
                            convert old client image files in <rc>/<game>/* to jar format <game>.jar
                        map-client <map.jar> playersprites sprites <client.jar>
                            extract client info from combined map jar
                      """);
		System.exit(1);
	}

	static void addImage(Manifest man, String name, int gid0, BufferedImage image) {
		Attributes a = new Attributes();
		int size = image.getHeight();
		int count = image.getWidth() / size;

		a.putValue("name_0", name);
		a.putValue("gid_0", String.valueOf(gid0));
		a.putValue("count_0", String.valueOf(count));
		a.putValue("source_0", String.format("%s/%04d.png", name, gid0));
		a.putValue("width_0", String.valueOf(size));
		a.putValue("height_0", String.valueOf(size));

		System.out.printf("%s: %d images @ %dx%d\n", name, count, size, size);

		a.putValue("count", "1");
		man.getEntries().put(name, a);
	}

	static void copyStream(InputStream is, OutputStream os) throws IOException {
		byte[] buf = new byte[4096];
		int len;

		while ((len = is.read(buf)) > 0) {
			os.write(buf, 0, len);
		}
	}

	public static void main(String[] args) throws IOException {
		//args = new String[]{"client", "rc", "somedusk"};
		//args = new String[] { "map-client", "tileset.jar", "rc/somedusk/images/players.gif", "rc/somedusk/images/sprites.gif", "nowhere.jar" };
		if (args.length < 1) {
			usage();
		}

		String cmd = args[0];
		switch (cmd) {
		case "client": {
			String rc = args[1];
			String game = args[2];
			File dir = new File(rc, game);
			String[] srcs = {"images/map.gif", "images/players.gif", "images/sprites.gif"};
			BufferedImage[] images = new BufferedImage[srcs.length];
			String[] names = {"tiles", "players", "sprites"};
			int[] gid0 = {0, 0, 0};
			Manifest man = new Manifest();

			for (int i = 0; i < srcs.length; i++) {
				images[i] = ImageIO.read(new File(dir, srcs[i]));
				addImage(man, names[i], gid0[i], images[i]);
			}

			try (JarOutputStream jos = new JarOutputStream(new FileOutputStream(game + ".jar"), man)) {
				for (int i = 0; i < names.length; i++) {
					JarEntry je = new JarEntry(names[i] + "/");
					jos.putNextEntry(je);
					jos.closeEntry();
				}
				for (int i = 0; i < names.length; i++) {
					JarEntry ze = new JarEntry(String.format("%s/%04d.png", names[i], gid0[i]));
					jos.putNextEntry(ze);
					ImageIO.write(images[i], "png", jos);
					jos.closeEntry();
				}
			}

			break;
		}
		case "map-client": {
			String map = args[1];
			String[] srcs = new String[]{args[2], args[3]};

			String client = args[4];
			final String[] names = {"players", "sprites"};
			final String[] fields = {"name", "gid", "count", "width", "height"};
			int[] gid0 = {0, 0};
			BufferedImage[] images = new BufferedImage[srcs.length];

			try (JarInputStream jis = new JarInputStream(new FileInputStream(map))) {
				Manifest src = jis.getManifest();
				Manifest dst = new Manifest();

				// copy tiles, but rename soiurce
				{
					Attributes a = src.getAttributes("tilesets");
					Attributes b = new Attributes();
					int count = Integer.parseInt(a.getValue("count"));

					for (int i = 0; i < count; i++) {
						for (String field: fields) {
							b.putValue(field + "_" + i, a.getValue(i + "_" + field));
						}
						b.putValue("source_" + i, String.format("tiles/%04d.png", Integer.valueOf(a.getValue(i + "_gid"))));
					}

					b.putValue("count", a.getValue("count"));
					dst.getEntries().put("tiles", b);
				}

				for (int i = 0; i < srcs.length; i++) {
					images[i] = ImageIO.read(new File(srcs[i]));
					addImage(dst, names[i], gid0[i], images[i]);
				}

				try (JarOutputStream jos = new JarOutputStream(new FileOutputStream(client), dst)) {
					JarEntry se;

					// copy everything?
					while ((se = jis.getNextJarEntry()) != null) {
						String n = se.getName();
						if (n.matches("tiles/tiles_\\d+\\.png")) {
							JarEntry de = new JarEntry(String.format("tiles/%04d.png", Integer.valueOf(n.substring(12, n.length() - 4))));
							jos.putNextEntry(de);
						} else {
							jos.putNextEntry(se);
						}
						copyStream(jis, jos);
						jos.closeEntry();
					}

					// write sprites/etc
					for (String name: names) {
						JarEntry je = new JarEntry(name + "/");
						jos.putNextEntry(je);
						jos.closeEntry();
					}
					for (int i = 0; i < names.length; i++) {
						JarEntry ze = new JarEntry(String.format("%s/%04d.png", names[i], gid0[i]));
						jos.putNextEntry(ze);
						ImageIO.write(images[i], "png", jos);
						jos.closeEntry();
					}
				}
			}
			break;
		}
		default:
			usage();
			break;

		}

	}

	public static void junk(String[] args) throws IOException {
		File src = new File("/home/notzed/src/DuskRPG/DuskFiles/Dusk2.7.3");
		File dst = new File("/home/notzed/dusk/game");

		PrintStream o = new PrintStream(new File(dst, "mobs.new"));

		try (BufferedReader is = new BufferedReader(new FileReader(new File(src, "mobs")))) {
			while (true) {
				String m = is.readLine();

				if (m == null || !m.trim().equals("mob2.3"))
					break;

				String name = is.readLine();
				int x = Integer.valueOf(is.readLine());
				int y = Integer.valueOf(is.readLine());

				o.println("type.Mobile=" + name);
				o.println("map=dusk");
				o.println("x=" + x);
				o.println("y=" + y);
				o.println("=end");
			}
		}
		o.close();
	}
}
