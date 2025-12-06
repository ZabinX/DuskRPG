/*
 * This file is part of DuskZ, a graphical mud engine.
 *
 * Copyright (C) 2013 Michael Zucchi <notzed@gmail.com>
 *
 * DuskZ is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * DuskZ is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with DuskZ.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Changes
 */
package duskz.client.fx;

import duskz.client.DataManager;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Consumer;
import java.util.jar.JarInputStream;
import java.util.jar.Manifest;
import javafx.geometry.Rectangle2D;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.image.PixelReader;
import javafx.scene.image.WritableImage;

/**
 * Data manager for JavaFX - loads images into Image nodes and helpers
 * to create positioned tiles.
 */
public class DataManagerFX extends DataManager {

	HashMap<Integer, AnimSetFX> animset = new HashMap<>();

	public DataManagerFX(String source) {
		super(source);
	}

	public boolean isAnimRoot(int id) {
		return animset.containsKey(id);
	}

	public AnimSetFX getAnimSet(int id) {
		return animset.get(id);
	}

	@Override
	protected void scanManifest(Manifest man, Map<String, Consumer<JarInputStream>> handle) {
		super.scanManifest(man, handle);

		handle.put("titles/anim", jis -> {
			try (BufferedReader is = new BufferedReader(new InputStreamReader(jis))) {
				String line;
				PropParser prop = new PropParser();

				while ((line = is.readLine()) != null) {
					if (!prop.setInput(line))
						continue;

					if (!prop.getProperty().startsWith("anim."))
						continue;

					AnimSetFX anim = new AnimSetFX(prop.getProperty().substring(5));
					List<Rectangle2D> rects = new ArrayList<>();
					while (!prop.eof()) {
						int tileid = prop.nextInt();
						int time = 250;

						if (prop.nextChar(':')) {
							time = prop.nextInt();
						}

						if (anim.root == -1)
							anim.root = tileid;
						rects.add(createTile(tileid, 0, 0, 64, 64).getViewport());

						if (!prop.nextChar(','))
							break;
					}
					if (anim.root != -1) {
						anim.tiles = rects.toArray(new Rectangle2D[rects.size()]);
						animset.put(anim.root, anim);
					}
				}
			} catch (IOException ex) {
				ex.printStackTrace();
			}
		});
	}

	static class PropParser {

		String input;
		String prop;
		int eq;
		int index;

		public boolean setInput(String input) {
			this.input = input;

			eq = input.indexOf("=");
			if (eq > 0) {
				index = eq + 1;
				prop = input.substring(0, eq);
				return true;
			} else {
				prop = null;
				return false;
			}
		}

		public String getProperty() {
			return prop;
		}

		public boolean eof() {
			return index == -1 || index >= input.length();
		}

		public int nextInt() {
			int val = 0;
			while (!eof()) {
				char c = input.charAt(index);
				if (Character.isDigit(c)) {
					val = val * 10 + Character.digit(c, 10);
					index++;
				} else {
					return val;
				}
			}
			return val;
		}

		public boolean nextChar(char c) {
			if (!eof() && input.charAt(index) == c) {
				index++;
				return true;
			}
			return false;
		}
	}

	@Override
	protected ImageSet createImageSet() {
		return new ImageSetFX();
	}

	public void updateTile(ImageView iv, int tileid) {
		if (tileid == 0) {
			iv.setVisible(false);
			return;
		}
		iv.setVisible(true);

		ImageSet[] tiles = sets.get("tiles");
		for (int i = 0; i < tiles.length; i++) {
			ImageSetFX is = (ImageSetFX)tiles[i];
			if (tileid >= is.gid && tileid < is.gid + is.count) {
				iv.setImage(is.tiles[tileid - is.gid]);
				iv.setTranslateY(-(is.height - 32));
				return;
			}
		}
	}

	/**
	 * Create a tile image and align it to the baseline of the map tile.
	 * <p>
	 * This assumes the tiles are the same width but height may vary
	 *
	 * @param tileid
	 * @param tilex
	 * @param tiley
	 * @param tilewidth
	 * @param tileheight
	 * @return
	 */
	public ImageView createTile(int tileid, int tilex, int tiley, int tilewidth, int tileheight) {
		try {
			ImageSet[] tiles = sets.get("tiles");
			for (int i = 0; i < tiles.length; i++) {
				ImageSetFX is = (ImageSetFX)tiles[i];
				if (tileid >= is.gid && tileid < is.gid + is.count) {
					ImageView iv = new ImageView(is.tiles[tileid - is.gid]);
					iv.relocate(tilex * tilewidth, tiley * tileheight - (is.height - tileheight));
					return iv;
				}
			}
		} catch (Exception x) {
			x.printStackTrace();
		}
		System.out.println("No such tile: " + tileid);
		// Broken image?
		return new ImageView();
	}

	public ImageView createSprite(String set, int tileid, int tilex, int tiley, int tilewidth, int tileheight) {
		try {
			ImageSet[] tiles = sets.get(set);
			for (int i = 0; i < tiles.length; i++) {
				ImageSetFX is = (ImageSetFX)tiles[i];
				if (tileid >= is.gid && tileid < is.gid + is.count) {
					ImageView iv = new ImageView(is.tiles[tileid - is.gid]);

					if (is.height != tileheight) {
						double scale = (double)tileheight / is.height;
						iv.setScaleX(scale);
						iv.setScaleY(scale);
					}
					iv.setTranslateX(tilex * tilewidth - tilewidth * 0.5);
					iv.setTranslateY(tiley * tileheight - tileheight * 0.5);
					return iv;
				}
			}
		} catch (Exception x) {
			x.printStackTrace();
		}
		System.out.println("No such tile: " + tileid);
		// Broken image?
		return new ImageView();
	}

	public class AnimSetFX {

		public String name;
		public int root = -1;
		public Rectangle2D[] tiles;
		public int rate = 250;

		public AnimSetFX(String name) {
			this.name = name;
		}
	}

	public class ImageSetFX extends ImageSet {

		Image image;
		public Image[] tiles;

		public ImageSetFX() {
		}

		@Override
		public void load(InputStream is) throws IOException {
			System.out.println("Load tileset " + name + " gid " + gid + " count " + count);
			image = new Image(is);

			tiles = new Image[count];
			PixelReader reader = image.getPixelReader();
			for (int i = 0; i < count; i++) {
				tiles[i] = new WritableImage(reader, i * width, 0, width, height);
			}
		}
	}
}
