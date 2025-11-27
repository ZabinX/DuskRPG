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
package duskz.server.entityz;

import duskz.map.Location;
import duskz.map.TileMap;

/**
 * This is a wrapper for the player object, which is passed to scripts.
 *
 * Defines a cleaner external interface, and the intention is that this
 * is a safer sandboxed set of interfaces.
 *
 * TODO: this is probably where i want the commands to live too simply
 * for a matter of maintainability
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class PlayerCommands {
	private final Game game;

	final private Player p;

	public PlayerCommands(Game game, Player p) {
		this.game = game;
		this.p = p;
	}

	public void chat(String msg) {
		p.chatMessage(msg);
	}

	public String getString(String name, String def) {
		return p.variables.getString(name, def);
	}

	public String getString(String name) {
		return p.variables.getString(name, null);
	}

	public void setString(String name, String value) {
		p.variables.put(name, value);
	}

	public void setInt(String name, int value) {
		p.variables.put(name, value);
	}

	public int getInt(String name, int def) {
		return p.variables.getInteger(name, def);
	}

	public int getInt(String name) {
		return p.variables.getInteger(name, 0);
	}

	/**
	 * Jump to a location
	 * @param mapName
	 * @param mapAlias
	 * @return true if the jump happened.
	 */
	public boolean jumpTo(String mapName, String mapAlias) {
		System.out.println("script: jumpto(" + mapName + ", " + mapAlias + ")");
		TileMap<Thing> map = game.getMap(mapName);

		if (map != null) {
			Location l = map.locationForAlias(mapAlias);

			if (l != null) {
				return p.jumpTo(map, l.x, l.y);
			}
		}
		return false;
	}
}
