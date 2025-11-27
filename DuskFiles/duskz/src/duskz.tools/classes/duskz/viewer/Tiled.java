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
/**
 * Changes
 */
package duskz.viewer;

import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Unmarshaller;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintStream;
import java.io.StringReader;
import java.net.URI;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.Charset;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.jar.Attributes;
import java.util.jar.JarEntry;
import java.util.jar.JarOutputStream;
import java.util.jar.Manifest;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.zip.GZIPInputStream;
import java.util.zip.GZIPOutputStream;
import javax.imageio.ImageIO;
import javax.imageio.stream.ImageInputStream;
import javax.imageio.stream.MemoryCacheImageInputStream;
import duskz.map.io.*;
import java.util.Map.Entry;

/**
 * Tiled loader/converter. This is only experimental at this stage.
 *
 * @author notzed
 */
public class Tiled {

	static byte[] map64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".getBytes(Charset.forName("US-ASCII"));
	static byte[] unmap64 = new byte[256];
	public static final int MAGIC_LAYERED = 0x6d61707a;

	static {
		for (int i = 0; i < 256; i++)
			unmap64[i] = -1;
		for (int i = 0; i < 64; i++) {
			unmap64[map64[i]] = (byte) i;
		}
	}
	// gzip and base64 result

	static String encodeArray(byte[] data) throws IOException {
		ByteArrayOutputStream os = new ByteArrayOutputStream();
		GZIPOutputStream gz = new GZIPOutputStream(os);

		gz.write(data);
		gz.close();
		return encodeBytes(os.toByteArray());
	}

	static InputStream decodeArray(String s) throws IOException {
		ByteArrayInputStream is = new ByteArrayInputStream(decodeBytes(s));
		GZIPInputStream gz = new GZIPInputStream(is);

		return gz;
	}

	static int getCode(StringReader sr) throws IOException {
		int v;

		do {
			v = sr.read();
			if (v == -1)
				return -1;
			if (v == '=')
				return -1;
			v = unmap64[v];
		} while (v == -1);
		return v;
	}

	static byte[] decodeBytes(String s) throws IOException {
		ByteBuffer dec = ByteBuffer.allocate(s.length());
		StringReader sr = new StringReader(s);
		int a, b, c, d;
		do {
			a = getCode(sr);
			b = getCode(sr);
			c = getCode(sr);
			d = getCode(sr);

			if (a == -1) {
				// Truncated input
			} else if (b == -1) {
				// Truncated input
			} else if (c == -1) {
				// one encoded value
				dec.put((byte) ((a << 2) | (b >> 4)));
			} else if (d == -1) {
				// 2 encoded valus
				dec.put((byte) ((a << 2) | (b >> 4)));
				dec.put((byte) ((b << 4) | (c >> 2)));
			} else {
				dec.put((byte) ((a << 2) | (b >> 4)));
				dec.put((byte) ((b << 4) | (c >> 2)));
				dec.put((byte) ((c << 6) | d));
			}
		} while (d != -1);

		return Arrays.copyOf(dec.array(), dec.position());
	}

	static String encodeBytes(byte[] bytes) {
		// Convert to base64
		ByteBuffer enc = ByteBuffer.allocate(bytes.length * 4);
		int i = 0;
		int line = 0;
		while (i < bytes.length) {
			int a = bytes[i++];
			int b = 0;
			int c = 0;
			int count = 2;

			if (i < bytes.length) {
				b = bytes[i++];
				count = 3;
			}
			if (i < bytes.length) {
				c = bytes[i++];
				count = 4;
			}

			enc.put(map64[(a >> 2) & 63]);
			enc.put(map64[((a << 4) & 0x30) | ((b >> 4) & 15)]);
			if (count > 2)
				enc.put(map64[((b << 2) & 0x3c) | ((c >> 6) & 3)]);
			else
				enc.put((byte) '=');
			if (count > 3)
				enc.put(map64[c & 63]);
			else
				enc.put((byte) '=');

			line += 4;
			if (line >= 72) {
				enc.put((byte) 10);
				line = 0;
			}
		}
		return new String(enc.array(), 0, enc.position(), Charset.forName("us-ascii"));
	}

	static String encodeImage(BufferedImage image) throws IOException {
		ByteArrayOutputStream os = new ByteArrayOutputStream();

		ImageIO.write(image, "png", os);
		os.close();
		return encodeBytes(os.toByteArray());
	}

	static BufferedImage decodeImage(String enc) throws IOException {
		byte[] data = decodeBytes(enc);
		InputStream is = new ByteArrayInputStream(data);

		return ImageIO.read(is);
	}

	/*
	 static void testexport() throws IOException {
	 File path = new File("/home/notzed/src/DuskRPG/DuskFiles/Dusk2.7.3/shortmap");

	 TileMap map = TileMap.loadMap(path, TileMap.FORMAT_SHORT);
	 int width = map.getCols();
	 int height = map.getRows();
	 int len = width * height;


	 System.out.println("Map size: " + width + "," + height);

	 duskz.io.tiled.Map tmap = new duskz.io.tiled.Map();

	 tmap.setWidth(width);
	 tmap.setHeight(height);
	 tmap.setOrientation("orthogonal");
	 tmap.setVersion("1.0");
	 tmap.setTilewidth(32);
	 tmap.setTileheight(32);

	 Tileset tset = new Tileset();
	 tmap.getTileset().add(tset);

	 tset.setTileheight(32);
	 tset.setTilewidth(32);
	 tset.setFirstgid(0);
	 tset.setName("dusk-map");

	 // Add tile set
	 BufferedImage tiles = ImageIO.read(new File("/home/notzed/src/DuskRPG/DuskFiles/Dusk2.7.3/www/rc/somedusk/images/map.png"));
	 int tileWidth = 32;
	 int tileHeight = 32;
	 int imageWidth = tiles.getWidth();
	 for (int x = 0; x * tileWidth < imageWidth; x++) {
	 BufferedImage tile = tiles.getSubimage(x * tileWidth, 0, tileWidth, tileHeight);

	 Image timage = new Image();
	 Data idata = new Data();

	 idata.setEncoding("base64");
	 idata.setvalue(encodeImage(tile));
	 timage.setData(idata);
	 timage.setFormat("png");

	 Tile ttile = new Tile();
	 ttile.setId(x);
	 ttile.setImage(timage);

	 tset.getTile().add(ttile);
	 }

	 // Add layer
	 Layer layer = new Layer();

	 tmap.getLayerOrObjectgroup().add(layer);

	 layer.setName("base");
	 layer.setVisible(1);
	 layer.setOpacity(1);
	 layer.setWidth(map.getCols());
	 layer.setHeight(map.getRows());

	 Data d = new Data();

	 layer.setData(d);

	 d.setCompression("gzip");
	 d.setEncoding("base64");

	 // First convert to ints
	 ByteBuffer bb = ByteBuffer.allocate(len * 4).order(ByteOrder.LITTLE_ENDIAN);

	 for (int y = 0; y < height; y++) {
	 for (int x = 0; x < width; x++) {
	 bb.putInt(map.getTile(x, y));
	 }
	 }
	 bb.rewind();

	 d.setvalue(encodeArray(bb.array()));
	 //d.setvalue("dummy");

	 try {
	 JAXBContext jc = JAXBContext.newInstance(Map.class);
	 //Unmarshaller u = jc.createUnmarshaller();
	 //Object element = u.unmarshal(new File("foo.xml"));
	 Marshaller m = jc.createMarshaller();

	 m.setProperty("jaxb.formatted.output", true);


	 m.marshal(tmap, new File("/home/notzed/tiled-test.tmx"));

	 } catch (JAXBException ex) {
	 Logger.getLogger(Tiled.class.getName()).log(Level.SEVERE, null, ex);
	 }
	 System.out.println("done");

	 }
	 */
	static class TileInfo {

		int id;
		// Script names
		String move;
		String see;
		String action;
		// animation meta-data
		List<String> anim = new ArrayList<>();
	}

	static class AnimGroup {

		String name;
		int rate = 250;
		HashMap<String, List<AnimInfo>> sets = new HashMap<>();
	}

	static class AnimInfo implements Comparable<AnimInfo> {

		int tileid;
		int seq;

		@Override
		public int compareTo(AnimInfo t) {
			return Integer.compare(seq, t.seq);
		}
	}

	static void testimport(File src, File dst) throws IOException {
		try {
			JAXBContext jc = JAXBContext.newInstance(Map.class);
			Unmarshaller u = jc.createUnmarshaller();
			Map tmap = (Map) u.unmarshal(src);

			System.out.println("Loaded map size: " + tmap.getWidth() + "x" + tmap.getHeight());

			Manifest man = new Manifest();

			List<TileInfo> tileInfo = new ArrayList<>();
			int tid = 0;

			// Create manifest entires for tileset
			if (true) {
				int setid = 0;

				Attributes a = new Attributes();

				for (Tileset ts : tmap.getTileset()) {
					int gid0 = ts.getFirstgid();

					if (ts.getSource() != null) {
						URI uri = src.toURI().resolve(ts.getSource());

						ts = (Tileset) u.unmarshal(new File(uri));
					}
					if (!ts.getTile().isEmpty()) {
						Tile tt = ts.getTile().get(0);
						BufferedImage image = decodeImage(tt.getImage().getData().getvalue());

						int twidth = image.getWidth();
						int theight = image.getHeight();

						a.putValue(setid + "_name", ts.getName());
						a.putValue(setid + "_gid", String.valueOf(gid0));
						a.putValue(setid + "_count", String.valueOf(ts.getTile().size()));
						a.putValue(setid + "_source", "tiles/tiles_" + gid0 + ".png");
						a.putValue(setid + "_width", String.valueOf(twidth));
						a.putValue(setid + "_height", String.valueOf(theight));
						setid++;

						tid = 0;
						// Add itle info
						for (Tile ttile : ts.getTile()) {
							TileInfo ti = new TileInfo();

							// assume tid.id == tile id?
							if (tid != ttile.getId()) {
								System.out.println("shit tile id mismatch: " + tid + "!= " + ttile.getId());
							}
							ti.id = gid0 + tid;
							tid++;

							if (ttile.getProperties() != null) {
								for (Property p : ttile.getProperties().getProperty()) {
									switch (p.getName()) {
										case "move":
											ti.move = p.getValue();
											break;
										case "see":
											ti.see = p.getValue();
											break;
										case "action":
											ti.action = p.getValue();
											break;
										case "anim":
											ti.anim.add(p.getValue());
											break;
									}
								}
							}
							if (ti.move != null && ti.see == null) {
								ti.see = ti.move;
							}
							tileInfo.add(ti);
						}

					}

				}
				a.putValue("count", String.valueOf(setid));
				man.getEntries().put("tilesets", a);
			}

			JarOutputStream jos = new JarOutputStream(new FileOutputStream(dst), man);
			{
				String[] dirs = {"maps/", "tiles/"};
				for (String d : dirs) {
					JarEntry je = new JarEntry(d);
					jos.putNextEntry(je);
					jos.closeEntry();
				}
			}
			{
				int tileWidth = tmap.getTilewidth();
				int tileHeight = tmap.getTileheight();

				for (java.lang.Object o : tmap.getLayerOrObjectgroup()) {
					if (o instanceof Objectgroup) {
						Objectgroup og = (Objectgroup) o;
						for (duskz.map.io.Object oo : og.getObject()) {
							int ox = oo.getX() / tileWidth;
							int oy = oo.getY() / tileHeight;
							int ow = oo.getWidth() / tileWidth;
							int oh = oo.getHeight() / tileHeight;

							if (oo.getProperties() != null) {
								for (Property op : oo.getProperties().getProperty()) {
									String name = op.getName();
									String value = op.getValue();
									switch (name) {
										case "alias":
										case "goto":
										case "able":
										case "visible":
											for (int y = 0; y < oh; y++) {
												for (int x = 0; x < ow; x++) {
													System.out.printf("%d.%d.%s=%s\n", ox + x, oy + y, name, value);
												}
											}
											break;
									}
								}
							}
						}
					}
				}
			}

			{
				//TileMap map = new TileMap("main", tmap.getWidth(), tmap.getHeight());
				int lid = 0;

				int nlayers = 0;
				int groundid = 0;
				int mwidth = 0;
				int mheight = 0;
				// TODO: take layer size as max of all
				for (java.lang.Object o : tmap.getLayerOrObjectgroup()) {
					if (o instanceof Layer) {
						Layer l = (Layer) o;

						if (l.getName() != null && l.getName().equals("ground")) {
							mwidth = l.getWidth();
							mheight = l.getHeight();
							groundid = nlayers;
						}

						nlayers++;
					}
				}

				// Write layered map
				JarEntry je = new JarEntry("maps/main");
				jos.putNextEntry(je);

				{
					DataOutputStream dos = new DataOutputStream(jos);
					dos.writeInt(MAGIC_LAYERED);
					dos.writeInt(0);
					dos.writeInt(0);
					dos.writeInt(mwidth);
					dos.writeInt(mheight);
					dos.writeInt(groundid);
					dos.writeInt(nlayers);

					int layerid = 0;
					for (java.lang.Object o : tmap.getLayerOrObjectgroup()) {
						if (o instanceof Layer) {
							Layer l = (Layer) o;
							int lwidth = l.getWidth();
							int lheight = l.getHeight();
							int len = l.getWidth() * l.getHeight();
							int layer[] = new int[len];

							// Read in layer and perform some optimisation on it
							try (ImageInputStream dis = new MemoryCacheImageInputStream(decodeArray(l.getData().getvalue()))) {
								dis.setByteOrder(ByteOrder.LITTLE_ENDIAN);
								for (int i = 0; i < len; i++) {
									layer[i] = dis.readInt();
								}

							}

							// Find bounds of used squares (if not ground layer)
							int minx = lwidth - 1;
							int maxx = 0;
							int miny = lheight - 1;
							int maxy = 0;

							if (layerid != groundid) {
								for (int y = 0; y < lheight; y++) {
									for (int x = 0; x < lwidth; x++) {
										if (layer[x + y * lwidth] != 0) {
											minx = Math.min(x, minx);
											miny = Math.min(y, miny);
											maxx = Math.max(x, maxx);
											maxy = Math.max(y, maxy);
										}
									}
								}
							} else {
								minx = 0;
								maxx = lwidth - 1;
								miny = 0;
								maxy = lheight - 1;
							}

							System.out.printf("Writing layer %d '%s' at %d,%d size %d,%d\n",
									layerid, l.getName(), minx, miny, maxx - minx + 1, maxy - miny + 1);

							// Write out used area
							dos.writeInt(minx);
							dos.writeInt(miny);
							dos.writeInt(maxx - minx + 1);
							dos.writeInt(maxy - miny + 1);
							for (int y = miny; y <= maxy; y++) {
								for (int x = minx; x <= maxx; x++) {
									dos.writeShort(layer[x + y * lwidth]);
								}
							}
						}

						layerid++;
					}
					dos.flush();
				}
				jos.closeEntry();
			}

			// Add tile script names
			{
				JarEntry je = new JarEntry("tiles/scripts");
				jos.putNextEntry(je);
				PrintStream ps = new PrintStream(jos);
				for (TileInfo ti : tileInfo) {
					if (ti.move != null && !ti.move.equals("false")) {
						ps.format("move.%d=%s\n", ti.id, ti.move);
					}
					if (ti.see != null && !ti.see.equals("false")) {
						ps.format("see.%d=%s\n", ti.id, ti.see);
					}
					if (ti.action != null) {
						ps.format("action.%d=%s\n", ti.id, ti.action);
					}
				}
				ps.flush();
				jos.closeEntry();
			}

			{
				JarEntry je = new JarEntry("tiles/anim");
				jos.putNextEntry(je);
				PrintStream ps = new PrintStream(jos);
				HashMap<String, AnimGroup> anims = new HashMap<>();
				for (TileInfo ti : tileInfo) {
					for (String a : ti.anim) {
						// group,set,seq,[,time]
						String[] as = a.split(",");
						if (as != null && as.length > 2) {
							String key = as[0].trim();
							String setkey = as[1].trim();
							AnimGroup ag = anims.get(key);
							if (ag == null) {
								ag = new AnimGroup();
								ag.name = key;
								anims.put(key, ag);
							}
							AnimInfo ai = new AnimInfo();
							ai.tileid = ti.id;
							ai.seq = Integer.valueOf(as[2]);
							if (as.length > 3 && ai.tileid == 0) {
								ag.rate = Integer.valueOf(as[3]);
							}
							List<AnimInfo> set = ag.sets.get(setkey);
							if (set == null) {
								set = new ArrayList<>();
								ag.sets.put(setkey, set);
							}
							set.add(ai);
						}
					}
				}
				for (Entry<String, AnimGroup> ae : anims.entrySet()) {
					AnimGroup ag = ae.getValue();
					String key = ae.getKey();

					ps.format("anim.%s=%d", key, ag.rate);
					// default timing

					for (Entry<String, List<AnimInfo>> as : ag.sets.entrySet()) {
						List<AnimInfo> set = as.getValue();
						boolean first = true;

						ps.format(";");
						Collections.sort(set);
						for (AnimInfo a : set) {
							if (!first)
								ps.print(",");
							first = false;
							ps.format("%d", a.tileid);
						}
					}
					ps.println();
				}
				ps.flush();
				jos.closeEntry();
			}

			// Build tileset manifest - nope in manifest
			if (false) {
				int setid = 0;
				JarEntry je = new JarEntry("tiles/manifest");
				jos.putNextEntry(je);
				PrintStream ps = new PrintStream(jos);
				for (Tileset ts : tmap.getTileset()) {
					int gid0 = ts.getFirstgid();

					if (ts.getSource() != null) {
						URI uri = src.toURI().resolve(ts.getSource());

						ts = (Tileset) u.unmarshal(new File(uri));
					}
					if (!ts.getTile().isEmpty()) {
						Tile tt = ts.getTile().get(0);
						BufferedImage image = decodeImage(tt.getImage().getData().getvalue());

						int twidth = image.getWidth();
						int theight = image.getHeight();

						ps.format("tiles.%d.name=%s\n", setid, ts.getName());
						ps.format("tiles.%s.width=%d\n", setid, twidth);
						ps.format("tiles.%s.height=%d\n", setid, theight);
						ps.format("tiles.%s.source=tiles-%d.png\n", setid, gid0);
						ps.format("tiles.%s.firstGid=%d\n", setid, gid0);
						setid++;
					}

				}
				ps.format("tiles.count=%d\n", setid);
				ps.flush();
				jos.closeEntry();
			}

			for (Tileset ts : tmap.getTileset()) {
				int gid0 = ts.getFirstgid();

				if (ts.getSource() != null) {
					URI uri = src.toURI().resolve(ts.getSource());

					ts = (Tileset) u.unmarshal(new File(uri));
				}


				int twidth = 0, theight = 0;
				BufferedImage tmp = null;
				Graphics2D gg = null;

				System.out.println("found tileset: " + ts.getName());

				int ntiles = ts.getTile().size();

				int i = 0;
				for (Tile tt : ts.getTile()) {
					BufferedImage image = decodeImage(tt.getImage().getData().getvalue());

					if (tmp == null) {
						twidth = image.getWidth();
						theight = image.getHeight();
						tmp = new BufferedImage(ntiles * twidth, theight, BufferedImage.TYPE_INT_ARGB);
						gg = tmp.createGraphics();
					} else if (image.getWidth() != twidth || image.getHeight() != theight) {
						System.out.println("Image tiles differ in size\n");
					}

					gg.drawImage(image, (i++) * twidth, 0, null);
				}

				if (tmp != null) {
					//ImageIO.write(tmp, "png", new File("/home/notzed/tiled-tiles-" + twidth + "x" + theight + ".png"));

					JarEntry ze = new JarEntry("tiles/tiles_" + gid0 + ".png");
					jos.putNextEntry(ze);
					ImageIO.write(tmp, "png", jos);
					jos.closeEntry();
				}
			}
			jos.close();

		} catch (JAXBException ex) {
			Logger.getLogger(Tiled.class.getName()).log(Level.SEVERE, null, ex);
		}
	}
	/*
	 static void tiledToDusk(File src, File dst) throws IOException {
	 try {
	 JAXBContext jc = JAXBContext.newInstance(Map.class);
	 Unmarshaller u = jc.createUnmarshaller();
	 Map tmap = (Map) u.unmarshal(src);

	 System.out.println("Loaded map size: " + tmap.getWidth() + "x" + tmap.getHeight());

	 List<TileInfo> tileInfo = new ArrayList<>();
	 int tid = 0;

	 // TODO: write out tileset info somewhere


	 TileMap map = new TileMap(dst.getName(), tmap.getWidth(), tmap.getHeight());

	 int lid = 0;

	 int nlayers = 0;
	 int groundid = 0;
	 int twidth = 0;
	 int theight = 0;
	 for (Object o : tmap.getLayerOrObjectgroup()) {
	 if (o instanceof Layer) {
	 Layer l = (Layer) o;

	 if (l.getName() != null && l.getName().equals("ground")) {
	 twidth = l.getWidth();
	 theight = l.getHeight();
	 groundid = nlayers;
	 }

	 nlayers++;
	 }
	 }

	 if (twidth == 0 || theight == 0)
	 throw new IOException("Couldn't find a layer called 'ground'");

	 System.out.printf("Found %d layers\n", nlayers);
	 System.out.printf("Ground on layer %d\n", groundid);
	 // Create map
	 try (DataOutputStream dos = new DataOutputStream(new FileOutputStream(dst))) {
	 // Write header
	 dos.writeInt(TileMap.MAGIC_LAYERED);
	 dos.writeInt(0);
	 dos.writeInt(0);
	 dos.writeInt(twidth);
	 dos.writeInt(theight);
	 dos.writeInt(groundid);
	 dos.writeInt(nlayers);

	 int layerid = 0;
	 for (Object o : tmap.getLayerOrObjectgroup()) {
	 if (o instanceof Layer) {
	 Layer l = (Layer) o;
	 int lwidth = l.getWidth();
	 int lheight = l.getHeight();
	 int len = l.getWidth() * l.getHeight();
	 int layer[] = new int[len];

	 // Read in layer and perform some optimisation on it
	 try (ImageInputStream dis = new MemoryCacheImageInputStream(decodeArray(l.getData().getvalue()))) {
	 dis.setByteOrder(ByteOrder.LITTLE_ENDIAN);
	 for (int i = 0; i < len; i++) {
	 layer[i] = dis.readInt();
	 }

	 }

	 // Find bounds of used squares (if not ground layer)
	 int minx = lwidth - 1;
	 int maxx = 0;
	 int miny = lheight - 1;
	 int maxy = 0;

	 if (layerid != groundid) {
	 for (int y = 0; y < lheight; y++) {
	 for (int x = 0; x < lwidth; x++) {
	 if (layer[x + y * lwidth] != 0) {
	 minx = Math.min(x, minx);
	 miny = Math.min(y, miny);
	 maxx = Math.max(x, maxx);
	 maxy = Math.max(y, maxy);
	 }
	 }
	 }
	 } else {
	 minx = 0;
	 maxx = lwidth - 1;
	 miny = 0;
	 maxy = lheight - 1;
	 }

	 System.out.printf("Writing layer %d '%s' at %d,%d size %d,%d\n",
	 layerid, l.getName(), minx, miny, maxx - minx + 1, maxy - miny + 1);

	 // Write out used area
	 dos.writeInt(minx);
	 dos.writeInt(miny);
	 dos.writeInt(maxx - minx + 1);
	 dos.writeInt(maxy - miny + 1);
	 for (int y = miny; y <= maxy; y++) {
	 for (int x = minx; x <= maxx; x++) {
	 dos.writeShort(layer[x + y * lwidth]);
	 }
	 }
	 }

	 layerid++;
	 }
	 }

	 } catch (JAXBException ex) {
	 Logger.getLogger(Tiled.class.getName()).log(Level.SEVERE, null, ex);
	 }
	 }
	 * */
	// test load/save itled format map

	public static void main(String[] args) throws IOException {
		testimport(new File("/home/notzed/dusk/maps/main.tmx"),
				new File("/home/notzed/house.jar"));
		//tiledToDusk(new File("/home/notzed/test-map.tmx"),
		//		new File("/home/notzed/test-map.bin"));
		//tiledToDusk(new File("/home/notzed/dusk/maps/dusk.tmx"),
		//		new File("/home/notzed/dusk/game/defMaps/dusk"));
		//tiledToDusk(new File("/home/notzed/dusk/maps/do-drop-inn.tmx"),
		//		new File("/home/notzed/src/DuskRPG/DuskFiles/DuskX/defMaps/do-drop-inn"));
		//testexport();
		//tiledToDusk(new File("/home/notzed/dusk/maps/main.tmx"),
		//		new File("/home/notzed/dusk/game/defMaps/main"));
	}
}
