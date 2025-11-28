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


/**
 * Constants for wearing locations.
 *
 * @author notzed
 */
public interface Wearing {

	/**
	 * Non-wearable item
	 */
	public static final int INVENTORY = -1;
	/**
	 * Wieldable
	 */
	public static final int WIELD = 0;
	/**
	 * Armour on arms
	 */
	public static final int ARMS = 1;
	/**
	 * Armour on legs
	 */
	public static final int LEGS = 2;
	/**
	 * Armour on body
	 */
	public static final int TORSO = 3;
	/**
	 * Armour belt
	 */
	public static final int WAIST = 4;
	/**
	 * Armour on neck
	 */
	public static final int NECK = 5;
	/**
	 * Armour on head
	 */
	public static final int SKULL = 6;
	/**
	 * Saftey goggles
	 */
	public static final int EYES = 7;
	/**
	 * Gloves
	 */
	public static final int HANDS = 8;
	//
	public static final int WEARING_COUNT = 9;
	public static final String[] wornTitles = {
		"Wielded", "Arms", "Legs", "Torso", "Waist", "Neck", "Skull", "Eyes", "Hands"
	};
	/**
	 * Field wornNames as on the server
	 */
	public static final String[] wornNames = {
		"wield", "arms", "legs", "torso", "waist", "neck", "skull", "eyes", "hands"
	};

	public static int getCode(String name) {
		switch (name) {
			case "wield":
				return WIELD;
			case "arms":
				return ARMS;
			case "legs":
				return LEGS;
			case "torso":
				return TORSO;
			case "waist":
				return WAIST;
			case "neck":
				return NECK;
			case "skull":
				return SKULL;
			case "eyes":
				return EYES;
			case "hands":
				return HANDS;
		}
		return INVENTORY;
	}
}
