/*
 * This file is part of DuskZ, a graphical mud engine.
 *
 * Copyright (C) 2000 Tom Weingarten <captaint@home.com>
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
package duskz.server;

/**
 * This class defines all constants used throughout the code system.
 *
 * @Author Lee Templeton (Lone Wolf)
 */
//TODO: Move all commonly used variables to here
public interface Constants {
	// DUSKENGINE Section

	static final int MIN = 0;
	static final int MAX = 1;
	// DUSKOBJECT Section
	static final int NUMBER = 0;
	static final int STRING = 1;
	static final int LIVING_THING = 2;
	static final int ITEM = 3;
	// ATTRIBUTE Section
	static final int MAIN = 0;
	static final int SECONDARY = 1;
	static final int BONUS = 2;
	static final int ALL = 100;
	// ITEM Section
	static final int ORDINARY_ITEM = 0;
	static final int WEAPON = 1;
	static final int ARMOR = 2;
	static final int FOOD = 3;
	static final int DRINK = 4;
	static final int RANGED = 5;
	static final int CONTAINER = 6;
	// CAP Section
	static final int STAT_CAP = 100;
	static final int SKILL_CAP = 100;
	static final int MAX_CAP = 200;
	// Strings
	static final String CONFIG_FILE_NAME = "prefs";
	static final String CONFIG_FILE_DIR = "conf/";
}
