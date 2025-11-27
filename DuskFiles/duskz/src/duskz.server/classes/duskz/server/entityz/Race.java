/*
 * This file is part of DuskZ, a graphical mud engine.
 *
 * Copyright (C) 2000 Tom Weingarten <captaint@home.com>
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

import duskz.util.PropertyLoader;
import static duskz.server.entityz.Active.STAT_CON;
import static duskz.server.entityz.Active.STAT_DEX;
import static duskz.server.entityz.Active.STAT_HP;
import static duskz.server.entityz.Active.STAT_HPMAX;
import static duskz.server.entityz.Active.STAT_INT;
import static duskz.server.entityz.Active.STAT_MP;
import static duskz.server.entityz.Active.STAT_MPMAX;
import static duskz.server.entityz.Active.STAT_STR;
import static duskz.server.entityz.Active.STAT_WIS;
import duskz.util.PropertyLoader.PropertyEntry;
import java.io.File;
import java.io.IOException;

/**
 * Meta-data about race
 *
 * Races adjust the base values of attributes.
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class Race {

	public String name;
	public int image;
	// Uses STAT_* constants from Active
	public int stats[] = new int[12];

	Race() {
	}

	boolean setProperty(String name, String value) {
		switch (name) {
			case "name":
				this.name = value;
				break;
			case "image":
				image = Integer.valueOf(value);
				break;
			case "hp":
				stats[STAT_HP] = Integer.valueOf(value);
				break;
			case "maxhp":
				stats[STAT_HPMAX] = Integer.valueOf(value);
				break;
			case "mp":
				stats[STAT_MP] = Integer.valueOf(value);
				break;
			case "maxmp":
				stats[STAT_MPMAX] = Integer.valueOf(value);
				break;
			case "str":
				stats[STAT_STR] = Integer.valueOf(value);
				break;
			case "int":
				stats[STAT_INT] = Integer.valueOf(value);
				break;
			case "dex":
				stats[STAT_DEX] = Integer.valueOf(value);
				break;
			case "con":
				stats[STAT_CON] = Integer.valueOf(value);
				break;
			case "wis":
				stats[STAT_WIS] = Integer.valueOf(value);
				break;
			default:
				return false;
		}
		return true;
	}

	public static Race loadRace(File file) throws IOException {
		Race r = new Race();

		r.name = file.getName();
		try (PropertyLoader pl = new PropertyLoader(file)) {
			for (PropertyEntry pe: pl) {
				r.setProperty(pe.name, pe.value);
			}
		}
		
		return r;
	}
}
