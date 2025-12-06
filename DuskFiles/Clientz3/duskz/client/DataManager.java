/*
 * This file is part of DuskZ, a graphical mud engine.
 *
 * Copyright (C) 2013 Michael Zucchi <notzed@gmail.com>
 *
 * DuskZ is free software: you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation, either version 2
 * of the License, or (at your option) any later version.
 *
 * DuskZ is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with DuskZ; if not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Changes
 */
package duskz.client;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;
import java.util.jar.Attributes;
import java.util.jar.JarEntry;
import java.util.jar.JarInputStream;
import java.util.jar.Manifest;

/**
 * Utility for loading/managing client game images.
 * <p>
 */
public class DataManager {

	String source;
	protected Map<String, ImageSet[]> sets = new HashMap<>();

	public DataManager(String source) {
		this.source = source;
	}

	public String getSource() {
		return source;
	}

	public ImageSet[] getImageSet(String type) {
		return sets.getOrDefault(type, new ImageSet[0]);
	}

	public void load() throws IOException {
		ImageSet set = createImageSet();
		set.name = "tiles";
		set.source = source + "/map.png";
		set.gid = 0;
		set.count = 1024;
		set.width = 32;
		set.height = 32;
		set.load(new FileInputStream(set.source));
		sets.put("tiles", new ImageSet[]{set});
	}

	private int getInt(Attributes a, int index, String name) {
		try {
			return Integer.parseInt(a.getValue(name + index));
		} catch (NumberFormatException x) {
			return -1;
		}
	}

	protected ImageSet createImageSet() {
		return new ImageSet();
	}

	/**
	 * Scan manifest for information of interest.
	 *
	 * @param man
	 * @return a predicate that might process a jar entry, it returns true if it was processed.
	 */
	protected void scanManifest(Manifest man, Map<String, Consumer<JarInputStream>> handle) {
		String[] names = new String[]{"tiles", "sprites", "players"};

		for (String name: names) {
			Attributes a = man.getAttributes(name);
			int count = Integer.parseInt(a.getValue("count"));
			ImageSet[] list = new ImageSet[count];

			for (int i = 0; i < count; i++) {
				ImageSet set = createImageSet();

				set.name = a.getValue("name_" + i);
				set.source = a.getValue("source_" + i);
				set.gid = getInt(a, i, "gid_");
				set.count = getInt(a, i, "count_");
				set.width = getInt(a, i, "width_");
				set.height = getInt(a, i, "height_");

				list[i] = set;
				handle.put(set.source, jis -> {
					try {
						set.load(jis);
					} catch (IOException ex) {
						ex.printStackTrace();
					}
				});
			}
			sets.put(name, list);
		}
	}

	public class ImageSet {

		public String name;
		public String source;
		public int gid;
		public int count;
		public int width;
		public int height;

		public ImageSet() {
		}

		public void load(InputStream is) throws IOException {
		}
	}
}
