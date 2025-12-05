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
package duskz.client;

import duskz.protocol.MapMessage;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map.Entry;

/**
 * Client map has a fixed set of tiles for the background. And then a bunch of
 * entities roaming across it.
 *
 * I experimented here with a different implementation to the server map in that
 * the entities by location uses a hash table rather than an array. This allows
 * me to reference them by absolute coordinates which simplifies a lot of the
 * code.
 *
 * @author notzed
 */
public class ClientMap {

	/**
	 * Offset of map (top-left corner)
	 */
	public int offx, offy;
	/**
	 * Which level is currently the ground level
	 */
	private int groundLevel;
	/**
	 * Tile indices for images
	 */
	short[][] levels;
	/**
	 * Entities by id
	 */
	private HashMap<Long, Entity> entityByID = new HashMap<>();
	/**
	 * Entities by name
	 * TODO: If names do not need unique 'numbers' then this
	 * index can be completely removed.
	 */
	private HashMap<String, List<Entity>> entityByName = new HashMap<>();
	/**
	 * Enities by location. Location is encoded as ( y << 16) | x
	 */
	private HashMap<Integer, List<Entity>> entityByLocation = new HashMap<>();
	/**
	 * Width of map shown
	 */
	public final int cols;
	/**
	 * Height of map shown
	 */
	public final int rows;

	public ClientMap(int cols, int rows) {
		this.cols = cols;
		this.rows = rows;

		levels = new short[1][cols * rows];
		groundLevel = 0;
	}

	public Collection<Entity> getEntities() {
		return entityByID.values();
	}

	public Collection<Entity> getEntities(int x, int y) {
		return entityByLocation.get(locationKey(x, y));
	}

	public int getTile(int x, int y) {
		return levels[groundLevel][x + y * cols];
	}

	public int getTile(int level, int x, int y) {
		return levels[level][x + y * cols];
	}

	public int getGroundLevel() {
		return groundLevel;
	}

	public int getLevelCount() {
		return levels.length;
	}

	private Integer locationKey(int x, int y) {
		return (y << 16) | x;
	}

	private Integer locationKey(Entity e) {
		return (e.locy << 16) | e.locx;
	}

	public int mapToLocalX(int x) {
		return x - offx;
	}

	public int mapToLocalY(int y) {
		return y - offy;
	}

	private void addLocation(Entity e) {
		// Index by absolute location.
		Integer loc = locationKey(e);
		List<Entity> bypos = entityByLocation.get(loc);
		if (bypos == null) {
			bypos = new ArrayList<>();
			entityByLocation.put(loc, bypos);
		}
		bypos.add(e);
	}

	private void removeLocation(Entity e) {
		Integer loc = locationKey(e);
		List<Entity> bypos = entityByLocation.get(loc);

		if (bypos == null || !bypos.remove(e))
			throw new RuntimeException("Entity not in location index");

		if (bypos.isEmpty())
			entityByLocation.remove(loc);
	}

	public synchronized void addEntity(Entity e) {
		if (entityByID.containsKey(e.ID)) {
			throw new RuntimeException("entity already in table " + e.ID + " " + e.name);
		}

		entityByID.put(e.ID, e);

		// Add byname index, and re-number if required
		List<Entity> byname = entityByName.get(e.getSimpleName());
		if (byname == null) {
			byname = new ArrayList<>();
			entityByName.put(e.getSimpleName(), byname);
		}
		byname.add(e);
		//for (int i = 0; i < byname.size(); i++)
		//	byname.get(i).intNum = i;

		addLocation(e);
	}

	public synchronized void moveEntity(Entity e, int tox, int toy) {
		removeLocation(e);
		e.locx = tox;
		e.locy = toy;
		addLocation(e);
	}

	public synchronized void removeEntity(Entity e) {
		removeEntity(e.ID);
	}

	public synchronized void removeEntity(long id) {
		Entity e = entityByID.remove(id);

		if (e == null) {
			System.out.println("removeEntity: no such entity " + id);
			return;
		}

		List<Entity> byname = entityByName.get(e.getSimpleName());
		byname.remove(e);
		if (byname.isEmpty()) {
			entityByName.remove(e.getSimpleName());
		} else {
			//for (int i = 0; i < byname.size(); i++)
			//	byname.get(i).intNum = i;
		}

		removeLocation(e);
	}

	public synchronized Entity getEntity(long id) {
		return entityByID.get(id);
	}

	boolean inside(int x, int y) {
		int lx = x - offx;
		int ly = y - offy;

		return lx >= 0 && lx < cols
				&& ly >= 0 && ly < rows;
	}

	//public synchronized void updateTiles(int offx, int offy, short[] tiles) throws IOException {
	public synchronized void updateTiles(MapMessage mm) throws IOException {

		//for (int x = 0; x < cols; x++) {
		//	for (int y = 0; y < rows; y++) {
		//		setTile(x, y, Short.parseShort(instream.readLine()));
		//	}
		//}
		if (mm.width != cols || mm.height != rows) {
			throw new IOException("Protocol error incorrect map size");
		}

		//System.out.printf("Got map update %dx%d size %dx%dx%d\n", mm.x, mm.y, mm.width, mm.height, mm.layerCount);

		this.levels = mm.map;
		this.groundLevel = mm.groundLayer;
		this.offx = mm.x - (cols - 1) / 2;
		this.offy = mm.y - (rows - 1) / 2;

		// Prune out of range thingies
		List<Entity> removing = new ArrayList<>();
		for (Entry<Integer, List<Entity>> es : entityByLocation.entrySet()) {
			int ex = es.getKey() & 0xffff;
			int ey = (es.getKey() >> 16) & 0xffff;

			System.out.printf("check inside %d,%d = %s\n", ex, ey, inside(ex, ey));

			if (!inside(ex, ey)) {
				removing.addAll(es.getValue());
			}
		}

		// TODO: this could be optimised
		// TODO: does the server need to know this
		if (!removing.isEmpty()) {
			System.out.println("offset: " + this.offx + "," + this.offy);
			for (Entity e : removing) {
				System.out.println("removing out of range :" + e);
				removeEntity(e);
			}
		}
	}
}
