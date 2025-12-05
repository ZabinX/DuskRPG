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
package duskz.map;

/**
 * Track position.
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class Location {

	public int x;
	public int y;

	public Location() {
	}

	public Location(int x, int y) {
		this.x = x;
		this.y = y;
	}

	@Override
	public boolean equals(Object obj) {
		if (obj instanceof Location) {
			Location l = (Location) obj;
			return l.x == x && l.y == y;
		} else
			return false;
	}

	@Override
	public int hashCode() {
		int hash = 3;
		hash = 97 * hash + this.x;
		hash = 97 * hash + this.y;
		return hash;
	}

	public class Global extends Location {

		public TileMap map;

		public Global(TileMap map, int x, int y) {
			super(x, y);

			this.map = map;
		}

		public Global(TileMap map, Location l) {
			super(l.x, l.y);

			this.map = map;
		}
	}
}
