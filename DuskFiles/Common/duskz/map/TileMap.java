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
package duskz.map;

//import duskz.server.entityz.Thing;
import duskz.util.PropertyLoader;
import duskz.util.PropertyLoader.PropertyEntry;
import duskz.util.Maths;
import java.io.DataInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.RandomAccessFile;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;
import java.util.Objects;
import java.util.PriorityQueue;
import java.util.zip.GZIPInputStream;

/**
 * Low level map management and helpers.
 * <p>
 * Some of the helpers provide higher level functionality like path finding.
 *
 * @author notzed
 */
public class TileMap<Thing extends Locatable> implements Iterable<TileMap.MapData> {

	/**
	 * Name of map for referencing
	 */
	public final String name;
	/**
	 * Size
	 */
	private int rows, cols;
	/**
	 * Tile map
	 */
	private short tiles[];
	/**
	 * Index of Entities by location.
	 */
	private HashMap<Location, LinkedList<Thing>> entities = new HashMap<>();
	//private Thing entities[];
	/**
	 * Aliases for locations, by location and name
	 */
	private HashMap<Location, String> aliases = new HashMap<>();
	private HashMap<String, Location> aliasesByName = new HashMap<>();
	/**
	 * Scripts for locations
	 */
	private HashMap<Location, String> ableScript = new HashMap<>();
	private HashMap<Location, String> visibleScript = new HashMap<>();
	private HashMap<Location, String> actionScript = new HashMap<>();
	/**
	 * Aliases for jumps. These are implicit actions on a location
	 */
	private HashMap<Location, String> jumpTable = new HashMap<>();
	/**
	 * Layers
	 */
	private int groundLayer;
	private TileLayer layers[] = new TileLayer[0];
	/**
	 * privileges for each cell. This appears to be unimplemented in Dusk so
	 * isn't here either.
	 */
	protected short privs[];
	/**
	 * Ownership for each cell. This appears to be unimplemented in Dusk so
	 * isn't here either.
	 */
	protected int owner[];
	/**
	 * Flags for iterators
	 */
	public final static int SKIP_START = 1;
	public final static int SKIP_END = 2;

	/**
	 * Create a new empty map of the given size
	 *
	 * @param cols
	 * @param rows
	 */
	public TileMap(String name, int cols, int rows) {
		this.name = name;
		this.rows = rows;
		this.cols = cols;

		tiles = new short[rows * cols];
		//entities = new Thing[rows * cols];
	}

	public int getRows() {
		return rows;
	}

	public int getCols() {
		return cols;
	}

	public int getLayerCount() {
		return layers.length;
	}

	public int getGroundLayer() {
		return groundLayer;
	}

	/** FIXME: only saves old 'shortmap' format */
	public void saveMap(File path) throws IOException {
		path.delete();
		try (RandomAccessFile rafFile = new RandomAccessFile(path, "rw")) {
			rafFile.writeInt(cols);
			rafFile.writeInt(rows);
			for (int x = 0; x < cols; x++) {
				for (int y = 0; y < rows; y++) {
					rafFile.writeShort(getTile(x, y));
				}
			}
		}
	}

	static class TileLayer {

		int x, y;
		int width, height;
		private short[] tiles;

		public TileLayer(int x, int y, int width, int height) {
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
			this.tiles = new short[width * height];
		}

		public TileLayer(int x, int y, int width, int height, short[] tiles) {
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
			this.tiles = tiles;
		}

		public boolean inside(int tx, int ty) {
			tx -= this.x;
			ty -= this.y;
			return tx >= 0 && tx < width
				&& ty >= 0 && ty < height;
		}

		public short getTile(int tx, int ty) {
			tx -= this.x;
			ty -= this.y;
			if (tx >= 0 && tx < width
				&& ty >= 0 && ty < height) {
				return tiles[tx + ty * width];
			} else
				return 0;
		}
	}
	public static final int FORMAT_BYTE = 0;
	public static final int FORMAT_SHORT = 1;
	// 'mapz'
	// TODO: gzip?
	public static final int MAGIC_LAYERED = 0x6d61707a;

	/**
	 * Load just the map part of a map.
	 * <p>
	 * TODO: sort something out with the alias stuff and loadLayered()
	 *
	 * @param is
	 * @param name
	 * @return
	 * @throws IOException
	 */
	public static TileMap loadLayeredMap(InputStream is, String name) throws IOException {
		TileMap map;

		try (DataInputStream mapFile = new DataInputStream((is))) {
			int magic = mapFile.readInt();
			int version = mapFile.readInt();
			int flags = mapFile.readInt();
			int cols = mapFile.readInt();
			int rows = mapFile.readInt();
			int groundLayer = mapFile.readInt();
			int layerCount = mapFile.readInt();

			if (magic != MAGIC_LAYERED
				|| version != 0) {
				throw new IOException("Invalid format/magic/unknown version");
			}

			System.out.println("Load map: " + name);
			System.out.printf(" size: %dx%d\n", cols, rows);
			System.out.printf(" groundLayer: %d\n", groundLayer);
			System.out.printf(" layerCount: %d\n", layerCount);

			map = new TileMap(name, cols, rows);

			map.groundLayer = groundLayer;
			map.layers = new TileLayer[layerCount];
			for (int l = 0; l < layerCount; l++) {
				int tx = mapFile.readInt();
				int ty = mapFile.readInt();
				int twidth = mapFile.readInt();
				int theight = mapFile.readInt();
				TileLayer tl;

				System.out.printf("  layer %2d: at %3d,%3d size %3dx%3d\n", l, tx, ty, twidth, theight);
				if (l == groundLayer)
					tl = new TileLayer(tx, ty, twidth, theight, map.tiles);
				else
					tl = new TileLayer(tx, ty, twidth, theight);

				map.layers[l] = tl;

				for (int i = 0; i < twidth * theight; i++) {
					tl.tiles[i] = mapFile.readShort();
				}
			}
		}
		return map;
	}

	/**
	 * Load a layered map. Format is:
	 * magic: int
	 * version: int 0
	 * flags: int (0 - short)
	 * width: int must contain all layers
	 * height: int must contain all layers
	 * layer ground: int index of ground layer, ground layer must be same size as map
	 * layer count: int
	 * then layer count {
	 * layer x: int
	 * layer y: int
	 * layer width: int
	 * layer height: int
	 * layer data: short width*height in row major format
	 * }
	 *
	 * @param path
	 * @return
	 * @throws IOException
	 */
	public static TileMap loadLayered(File path) throws IOException {
		TileMap map;

		try (DataInputStream mapFile = new DataInputStream(new GZIPInputStream(new FileInputStream(path)))) {
			int magic = mapFile.readInt();
			int version = mapFile.readInt();
			int flags = mapFile.readInt();
			int cols = mapFile.readInt();
			int rows = mapFile.readInt();
			int groundLayer = mapFile.readInt();
			int layerCount = mapFile.readInt();

			if (magic != MAGIC_LAYERED
				|| version != 0) {
				throw new IOException("Invalid format/magic/unknown version");
			}

			System.out.println("Load map: " + path);
			System.out.printf(" size: %dx%d\n", cols, rows);
			System.out.printf(" groundLayer: %d\n", groundLayer);
			System.out.printf(" layerCount: %d\n", layerCount);

			map = new TileMap(path.getName(), cols, rows);

			map.groundLayer = groundLayer;
			map.layers = new TileLayer[layerCount];
			for (int l = 0; l < layerCount; l++) {
				int tx = mapFile.readInt();
				int ty = mapFile.readInt();
				int twidth = mapFile.readInt();
				int theight = mapFile.readInt();
				TileLayer tl;

				System.out.printf("  layer %2d: at %3d,%3d size %3dx%3d\n", l, tx, ty, twidth, theight);
				if (l == groundLayer)
					tl = new TileLayer(tx, ty, twidth, theight, map.tiles);
				else
					tl = new TileLayer(tx, ty, twidth, theight);

				map.layers[l] = tl;

				for (int i = 0; i < twidth * theight; i++) {
					tl.tiles[i] = mapFile.readShort();
				}
			}
		}

		// Format is alias.x.y=name
		File aliasPath = new File(path.getParentFile(), path.getName() + ".alias");
		try (PropertyLoader pl = new PropertyLoader(aliasPath)) {
			for (PropertyEntry pe: pl) {
				String[] line = pe.name.split("\\.");
				int x = Integer.valueOf(line[0]);
				int y = Integer.valueOf(line[1]);
				Location l = new Location(x, y);

				switch (line[2]) {
				case "alias":
					map.aliases.put(l, pe.value);
					map.aliasesByName.put(pe.value, l);
					break;
				//case "script":
				//	map.seeScript.put(l, pe.value);
				//	map.moveScript.put(l, pe.value);
				//	map.locationActionScript.put(l, pe.value);
				//	break;
				case "visible":
					map.visibleScript.put(l, pe.value);
					break;
				case "able":
					map.ableScript.put(l, pe.value);
					break;
				case "action":
					map.actionScript.put(l, pe.value);
					break;
				case "goto":
					map.jumpTable.put(l, pe.value);
					break;
				}
			}
		} catch (NullPointerException | IndexOutOfBoundsException x) {
			throw new IOException("Error in map alias file " + aliasPath);
		} catch (FileNotFoundException x) {
			// don't care
		}

		return map;
	}

	public void saveAlias(File path) throws IOException {
		File tmp = new File(path.getParentFile(), path.getName() + ".alias~");
		File file = new File(path.getParentFile(), path.getName() + ".alias");

		// how do i preserve comments?
		throw new UnsupportedOperationException("Not implemented yet");
	}

	// Map in row major format (i.e. more efficient)
	public static TileMap loadMapX(File path) throws IOException {
		TileMap map;

		try (DataInputStream mapFile = new DataInputStream(new FileInputStream(path))) {
			int cols = mapFile.readInt();
			int rows = mapFile.readInt();
			map = new TileMap(path.getName(), cols, rows);
			for (int y = 0; y < rows; y++) {
				for (int x = 0; x < cols; x++) {
					map.setTile(x, y, mapFile.readShort());
				}
			}

			map.layers = new TileLayer[1];
			map.layers[0] = new TileLayer(0, 0, cols, rows, map.tiles);
		}
		return map;
	}

	public static TileMap loadMap(File path, int format) throws IOException {
		TileMap map;

		try (RandomAccessFile mapFile = new RandomAccessFile(path, "r")) {
			int cols = mapFile.readInt();
			int rows = mapFile.readInt();
			map = new TileMap(path.getName(), cols, rows);
			for (int x = 0; x < cols; x++) {
				for (int y = 0; y < rows; y++) {
					if (format == FORMAT_BYTE)
						map.setTile(x, y, mapFile.readByte());
					else
						map.setTile(x, y, mapFile.readShort() + 1);
				}
			}
			map.layers = new TileLayer[1];
			map.layers[0] = new TileLayer(0, 0, cols, rows, map.tiles);
		}
		return map;
	}

	/**
	 * Create a new map
	 *
	 * @param newcols
	 * @param newrows
	 * @return
	 */
	public synchronized void resize(int newcols, int newrows) {
		short[] ntiles = new short[newcols * newrows];
		//Thing[] nentities = new Thing[newcols * newrows];

		int rx = Math.min(newcols, cols);
		int ry = Math.min(newrows, rows);

		for (int y = 0; y < ry; y++) {
			for (int x = 0; x < rx; x++) {
				int indexa = x + y * cols;
				int indexb = x + y * newcols;

				ntiles[indexb] = tiles[indexa];
				//nentities[indexb] = entities[indexa];
			}
		}

		tiles = ntiles;
		//entities = nentities;
		cols = newcols;
		rows = newrows;
	}

	public boolean inside(int x, int y) {
		return x >= 0 && x < cols
			&& y >= 0 && y < rows;
	}

	public boolean inside(int layer, int x, int y) {
		return x >= 0 && x < cols
			&& y >= 0 && y < rows;
	}

	/**
	 * Calculate if the layer is empty over the given region
	 *
	 * @param layer
	 * @param x
	 * @param y
	 * @param width
	 * @param height
	 * @return
	 */
	public boolean empty(int layer, int x, int y, int width, int height) {
		TileLayer tl = layers[layer];

		for (int ty = y; ty < y + height; ty++) {
			for (int tx = x; tx < x + width; tx++) {
				if (tl.getTile(tx, ty) != 0)
					return false;
			}
		}
		return true;
	}

	/**
	 * Get the region bounded by the supplied coordinates.
	 * If the region is all empty, then null is returned.
	 *
	 * @param layer
	 * @param x
	 * @param y
	 * @param width
	 * @param height
	 * @param region if supplied use this array otherwise allocate one
	 * @return
	 */
	public short[] getRegion(int layer, int tx, int ty, int width, int height, short[] region) {
		TileLayer tl = layers[layer];
		if (region == null)
			region = new short[width * height];
		boolean empty = true;

		for (int y = 0; y < height; y++) {
			for (int x = 0; x < width; x++) {
				short t = tl.getTile(tx + x, ty + y);

				region[x + width * y] = t;

				empty &= t == 0;
			}
		}
		if (empty)
			return null;
		else
			return region;
	}

	public void setTile(int x, int y, int t) {
		tiles[x + y * cols] = (short)t;
	}

	public short getTile(int x, int y) {
		return tiles[x + y * cols];
	}

	public short getTile(int layer, int x, int y) {
		return layers[layer].getTile(x, y);
	}

	public synchronized List<Thing> getEntities(int x, int y, List<Thing> list) {
		if (list == null)
			list = new ArrayList<>();
		//Thing o = entities[x + y * cols];
		//while (o != null) {
		//	list.add(o);
		//	o = o.getNext();
		//}
		LinkedList<Thing> ll = entities.get(new Location(x, y));
		if (ll != null)
			list.addAll(ll);

		return list;
	}

	public synchronized List<Thing> getEntities(Location l, List<Thing> list) {
		if (list == null)
			list = new ArrayList<>();
		//Thing o = entities[x + y * cols];
		//while (o != null) {
		//	list.add(o);
		//	o = o.getNext();
		//}
		LinkedList<Thing> ll = entities.get(l);
		if (ll != null)
			list.addAll(ll);

		return list;
	}

	public synchronized void addEntity(Thing o) {
		if (inside(o.getX(), o.getY())) {
			//int index = o.x + o.y * cols;
			//entities[index] = Thing.append(entities[index], o);
			Location l = new Location(o.getX(), o.getY());
			LinkedList<Thing> ll = entities.get(l);
			if (ll == null) {
				ll = new LinkedList<>();
				entities.put(l, ll);
			}
			if (ll.contains(o)) {
				System.out.println("adding the same thing twice: " + o);
			} else {
				ll.add(o);
			}
		}
	}

	public synchronized void removeEntity(Thing o) {
		if (inside(o.getX(), o.getY())) {
			//int index = o.x + o.y * cols;
			//entities[index] = Thing.remove(entities[index], o);
			Location l = new Location(o.getX(), o.getY());
			LinkedList<Thing> ll = entities.get(l);
			ll.remove(o);
			if (ll.isEmpty()) {
				entities.remove(l);
			}
		}
	}

	public synchronized void moveEntity(Thing o, int x, int y) {
		if (inside(x, y)) {
			removeEntity(o);
			o.setX(x);
			o.setY(y);
			addEntity(o);
		}
	}

	/**
	 * Get an iterable over a range - allows foreach support
	 *
	 * @param x0
	 * @param y0
	 * @param x1
	 * @param y1
	 * @return
	 */
	public Iterable<TileMap.MapData> range(int x0, int y0, int x1, int y1) {
		return new MapIterable(x0, y0, x1, y1);
	}

	/**
	 * Get an iterable over a range with a given centre and radius
	 *
	 * @param x
	 * @param y
	 * @param radius
	 * @return
	 */
	public Iterable<TileMap.MapData> range(int x, int y, int radius) {
		return new MapIterable(x - radius, y - radius, x + radius + 1, y + radius + 1);
	}

	/**
	 * Get an iterable which will iterate over the looking path
	 *
	 * @param sx
	 * @param sy
	 * @param ex
	 * @param ey
	 * @param flags SKIP_END, SKIP_START to skip end/start locations
	 * (UNIMPLEMENTED)
	 * @return
	 */
	public Iterable<MapData> look(int sx, int sy, int ex, int ey, int flags) {
		return new LookIterable(sx, sy, ex, ey, flags);
	}

	public Iterable<MapData> look(int sx, int sy, int ex, int ey) {
		return new LookIterable(sx, sy, ex, ey, 0);
	}

	public Iterable<MoveData> move(int sx, int sy, int ex, int ey, int flags, MoveListener l) {
		return new MoveIterable(sx, sy, ex, ey, flags, l);
	}

	public Location locationForAlias(String name) {
		// FIXME: aliases need to be global!
		return aliasesByName.get(name);
	}

	public String aliasForLocation(int x, int y) {
		return aliases.get(new Location(x, y));
	}

	public String locationAbleScript(int x, int y) {
		return ableScript.get(new Location(x, y));
	}

	public String locationVisibleScript(int x, int y) {
		return visibleScript.get(new Location(x, y));
	}

	public String locationActionScript(int x, int y) {
		return actionScript.get(new Location(x, y));
	}

	public String jumpAlias(int x, int y) {
		return jumpTable.get(new Location(x, y));
	}

	public void setJumpAlias(int tx, int ty, String alias) {
		jumpTable.put(new Location(tx, ty), alias);
	}

	public void setAlias(int x, int y, String alias) {
		Location l = new Location(x, y);

		if (alias == null || alias.equals("")) {
			alias = aliases.remove(l);
			if (alias != null)
				aliasesByName.remove(alias);
		} else {
			aliases.put(l, alias);
			aliasesByName.put(alias, l);
		}
	}

	@Override
	public boolean equals(Object obj) {
		if (obj instanceof TileMap) {
			return name.equals(((TileMap)obj).name);
		} else
			return false;
	}

	@Override
	public int hashCode() {
		int hash = 7;
		hash = 97 * hash + Objects.hashCode(this.name);
		return hash;
	}

	private class MapIterable implements Iterable<TileMap.MapData> {

		int x0, y0, x1, y1;

		public MapIterable(int x0, int y0, int x1, int y1) {
			this.x0 = x0;
			this.y0 = y0;
			this.x1 = x1;
			this.y1 = y1;
		}

		@Override
		public Iterator<TileMap.MapData> iterator() {
			return new MapIterator(x0, y0, x1, y1);
		}
	}

	private class LookIterable implements Iterable<MapData> {

		int sx, sy, ex, ey;
		int flags;

		public LookIterable(int sx, int sy, int ex, int ey, int flags) {
			this.sx = sx;
			this.sy = sy;
			this.ex = ex;
			this.ey = ey;
			this.flags = flags;
		}

		@Override
		public Iterator<MapData> iterator() {
			return new LookIterator(sx, sy, ex, ey, flags);
		}
	}

	private class MoveIterable implements Iterable<MoveData> {

		int sx, sy, ex, ey;
		int flags;
		MoveListener l;

		public MoveIterable(int sx, int sy, int ex, int ey, int flags, MoveListener l) {
			this.sx = sx;
			this.sy = sy;
			this.ex = ex;
			this.ey = ey;
			this.flags = flags;
			this.l = l;
		}

		@Override
		public Iterator<MoveData> iterator() {
			return new MoveIterator(sx, sy, ex, ey, flags, l);
		}
	}

	public Iterator<TileMap.MapData> getIterator(int x0, int y0, int x1, int y1) {
		return new MapIterator(x0, y0, x1, y1);
	}

	@Override
	public Iterator<TileMap.MapData> iterator() {
		return getIterator(0, 0, cols, rows);
	}

	public class MapData extends Location {

		public final List<Thing> entities = new ArrayList<>();
		// Tileid of ground layer
		public short tile;
		// Tileid of visible layers in correct order
		public short[] layers = new short[TileMap.this.layers.length];
		// lessen gc load by re-using
		//private Location l = new Location(0, 0);

		protected void setData(int x, int y) {
			this.x = x;
			this.y = y;
			//l.x = x;
			//l.y = y;
			this.entities.clear();
			if (inside(x, y)) {
				this.tile = getTile(x, y);
				getEntities(this, this.entities);
			} else {
				this.tile = 0;
			}
			for (int l = 0; l < layers.length; l++) {
				layers[l] = TileMap.this.layers[l].getTile(x, y);
			}
		}
	}

	public class MoveData extends MapData {

		public String direction;
	}

	private class MapIterator implements Iterator<TileMap.MapData> {

		int x0, y0, x1, y1;
		int x, y;
		MapData data = new MapData();

		public MapIterator(int x0, int y0, int x1, int y1) {
			this.x0 = Maths.clamp(x0, 0, cols);
			this.y0 = Maths.clamp(y0, 0, rows);
			this.x1 = Maths.clamp(x1, 0, cols);
			this.y1 = Maths.clamp(y1, 0, rows);
			this.x = -1;
			this.y = -1;
		}

		@Override
		public boolean hasNext() {
			return (x + 1) < x1
				|| (y + 1) < y1;
		}

		@Override
		public MapData next() {
			// FIXME: this needs to iterate in x first then y
			if (x == -1) {
				x = x0;
				y = y0;
			} else if (y + 1 < y1) {
				y++;
			} else {
				y = y0;
				x++;
			}

			data.setData(x, y);

			return data;
		}

		@Override
		public void remove() {
			throw new UnsupportedOperationException("Not supported yet.");
		}
	}

	/**
	 * Implements an iterator which follows a 'looking' path
	 * <p>
	 * TODO: it should probably use Bresenhams line algorithm
	 */
	private class LookIterator implements Iterator<MapData> {

		int x, y;
		final int sx, sy;
		final int ex, ey;
		int flags;
		boolean there = false;
		MapData data = new MapData();

		public LookIterator(int sx, int sy, int ex, int ey, int flags) {
			this.x = sx;
			this.y = sy;
			this.sx = sx;
			this.sy = sy;
			this.ex = ex;
			this.ey = ey;
			this.flags = flags;

			diffx = Math.abs(ex - sx);
			diffy = Math.abs(ey - sy);
			stepx = Integer.signum(ex - sx);
			stepy = Integer.signum(ey - sy);
			err = diffx - diffy;
		}

		@Override
		public boolean hasNext() {
			return !there;
		}
		// Bresenham algorithm data, from wikipedia
		int diffx, diffy;
		int stepx, stepy;
		int err;

		void lineStep() {
			int e2 = 2 * err;
			if (e2 > -diffy) {
				err -= diffy;
				x += stepx;
			}
			if (e2 < diffx) {
				err += diffx;
				y += stepy;
			}
		}

		@Override
		public MapData next() {
			there = x == ex && y == ey;

			// FIXME: impelement?
			//if ((flags & SKIP_START) != 0 && sx == x && sy == y) {
			//	lineStep();
			//}
			data.setData(x, y);

			if (!there) {
				lineStep();
			}
			return data;
		}

		public MapData nextOld() {
			there = x == ex && y == ey;

			data.setData(x, y);

			if (!there) {
				int stepx = Integer.signum(ex - y);
				int stepy = Integer.signum(ey - y);
				int dx = Math.abs(ex - x);
				int dy = Math.abs(ey - y);

				if (dx > dy) {
					x += stepx;
				} else if (dx < dy) {
					y += stepy;
				} else {
					x += stepx;
					y += stepy;
				}
			}

			return data;
		}

		@Override
		public void remove() {
			throw new UnsupportedOperationException("Not supported yet.");
		}
	}

	public interface MoveListener {

		public boolean canMoveto(TileMap.MapData md);
	}

	/**
	 * Iterator for movement.
	 */
	private static class MoveInfo implements Comparable<MoveInfo> {

		int x, y;
		float cost;
		float estimate;
		String direction;
		MoveInfo parent;

		public MoveInfo(int x, int y, float cost, String direction) {
			this.x = x;
			this.y = y;
			this.cost = cost;
			this.direction = direction;
		}

		@Override
		public boolean equals(Object obj) {
			MoveInfo o = (MoveInfo)obj;

			return x == o.x && y == o.y;
		}

		@Override
		public int hashCode() {
			int hash = 5;
			hash = 59 * hash + this.x;
			hash = 59 * hash + this.y;
			return hash;
		}

		@Override
		public int compareTo(MoveInfo o) {
			return Float.compare(cost, o.cost);
		}
	}

	/**
	 * An iterator which steps through the individual moves to get to a
	 * destination.
	 * <p>
	 * Implemented using A* algorithm, so can handle obstructions.
	 * <p>
	 * TODO: Limit the search space.
	 */
	private class MoveIterator implements Iterator<MoveData> {

		int x, y;
		final int sx, sy;
		final int ex, ey;
		int flags;
		boolean there = false;
		private final MoveListener l;
		// quick hack version
		Iterator<MoveInfo> iterator;
		MoveData data = new MoveData();

		public MoveIterator(int sx, int sy, int ex, int ey, int flags, MoveListener l) {
			this.x = sx;
			this.y = sy;
			this.sx = sx;
			this.sy = sy;
			this.ex = ex;
			this.ey = ey;
			this.flags = flags;
			this.l = l;

			// A* requires the whole path to be calculated ahead of time.
			List<MoveInfo> path = findPath();

			System.out.printf("Finding path from %d,%d to %d,%d: ", sx, sy, ex, ey);

			if (path != null) {
				for (MoveInfo mi: path) {
					System.out.print(" ");
					System.out.print(mi.direction);
				}
				System.out.println();

				if (!path.isEmpty() && (flags & SKIP_END) != 0) {
					path.remove(path.size() - 1);
				}

				iterator = path.iterator();
			} else {
				System.out.println("No path found!");
			}
		}

		float estimateCost(int sx, int sy, int ex, int ey) {
			return (float)Math.sqrt((ex - sx) * (ex - sx) + (ey - sy) * (ey - sy));
		}

		List<MoveInfo> constructPath(List<MoveInfo> list, MoveInfo n) {
			if (list == null)
				list = new ArrayList<>();

			if (n.parent != null) {
				constructPath(list, n.parent);
				list.add(n);
			}

			return list;
		}

		void moveIf(List<MoveInfo> list, int x, int y, float cost, String dir) {
			data.setData(x, y);

			if (l.canMoveto(data)) {
				list.add(new MoveInfo(x, y, cost + 1, dir));
			}
		}

		List<MoveInfo> getNeighbours(MoveInfo n) {
			List<MoveInfo> list = new ArrayList<>(4);

			moveIf(list, n.x + 1, n.y, n.cost, "e");
			moveIf(list, n.x - 1, n.y, n.cost, "w");
			moveIf(list, n.x, n.y + 1, n.cost, "s");
			moveIf(list, n.x, n.y - 1, n.cost, "n");

			return list;
		}

		// A* algorithm from here:
		//http://www.peachpit.com/articles/article.aspx?p=101142&seqNum=2
		public List<MoveInfo> findPath() {

			PriorityQueue<MoveInfo> openList = new PriorityQueue();
			HashSet<MoveInfo> closedList = new HashSet<>();

			MoveInfo startNode = new MoveInfo(sx, sy, 0, null);
			startNode.estimate = estimateCost(sx, sy, ex, ey);
			startNode.parent = null;
			openList.add(startNode);

			while (!openList.isEmpty()) {
				MoveInfo node = openList.poll();
				if (node.x == ex && node.y == ey) {
					// construct the path from start to goal
					return constructPath(null, node);
				}

				List<MoveInfo> neighbors = getNeighbours(node);
				for (int i = 0; i < neighbors.size(); i++) {
					MoveInfo nnode = neighbors.get(i);
					boolean isOpen = openList.contains(nnode);
					boolean isClosed = closedList.contains(nnode);
					float costFromStart = node.cost + 1;

					// check if the neighbor node has not been
					// traversed or if a shorter path to this
					// neighbor node is found.
					if ((!isOpen && !isClosed)
						|| costFromStart < nnode.cost) {
						nnode.parent = node;
						nnode.cost = costFromStart;
						nnode.estimate = estimateCost(nnode.x, nnode.y, ex, ey);
						if (isClosed) {
							closedList.remove(nnode);
						}
						if (!isOpen) {
							openList.add(nnode);
						}
					}
				}
				closedList.add(node);
			}

			// no path found
			return null;
		}

		@Override
		public boolean hasNext() {
			if (iterator != null)
				return iterator.hasNext();
			else
				return false;
		}

		@Override
		public MoveData next() {
			MoveInfo mi = iterator.next();

			data.setData(mi.x, mi.y);
			data.direction = mi.direction;

			return data;
		}

		@Override
		public void remove() {
			throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
		}
	}
}
