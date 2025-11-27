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
/**
 * Changes
 * Feb-2013 Michael Zucchi - modernised java, big refactor.
 * Mar-2013 Michael Zucchi - changed server protocol
 */
package duskz.server.entityz;

import duskz.protocol.DuskMessage;
import duskz.protocol.ListMessage;
import duskz.protocol.Wearing;
import static duskz.protocol.Wearing.*;

/**
 * Equipment contains all the Items a LivingThing is wearing.
 *
 * @author Tom Weingarten
 */
public class Equipment {

	// Must match Wearing
	public static final String[] USER_NAMES = {
		"wield2", "arms2", "legs2", "torso2", "waist2", "neck2", "skull2", "eyes2", "hands2"
	};
	public static final float[] ARMOUR_MOD = {
		0f, 0.05f, 0.05f, 0.40f, 0.15f, 0.05f, 0.20f, 0.05f, 0.05f
	};
	private Wearable[] worn = new Wearable[WEARING_COUNT];

	/**
	 * Encode for network.
	 *
	 * @return
	 */
	public String toEntity() {
		StringBuilder sb = new StringBuilder();

		for (int i = 0; i < worn.length; i++) {
			Wearable item = worn[i];
			if (item != null)
				sb.append(item.name).append('\n');
			else
				sb.append("none\n");
		}
		return sb.toString();
	}

	public DuskMessage toMessage(int msgid) {
		ListMessage msg = new ListMessage(msgid);

		for (int i = 0; i < worn.length; i++) {
			Wearable item = worn[i];
			if (item != null)
				msg.add(i, item.name);
		}

		return msg;
	}

	public Wearable getWorn(int where) {
		return worn[where];
	}
	
	public int getWornIndex(String what) {
		for (int i=0;i<worn.length;i++) {
			Wearable item = worn[i];
			
			if (item != null && what.equalsIgnoreCase(item.name))
				return i;
		}
		return -1;
	}

	public boolean isWearing(String what) {
		for (Wearable item : worn) {
			if (item != null && what.equalsIgnoreCase(item.name))
				return true;
		}
		return false;
	}

	/**
	 * Where a sepecific item
	 *
	 * @param where
	 * @param item if null, the item at position 'where' is removed, if any
	 * @return
	 */
	public Wearable wear(int where, Wearable item) {
		if (item != null) {
			if (item.getWearing() != where) {
				// FIXME: cachable exception?
				throw new RuntimeException("can't wear an item " + item.name
						+ " type " + item.getClass().getSimpleName()
						+ " at " + Wearing.wornNames[where]
						+ " should be " + Wearing.wornNames[item.getWearing()]);
			}
		}
		Wearable old = worn[where];

		worn[where] = item;
		return old;
	}

	/**
	 * Unwear item at specific location
	 *
	 * @param where
	 * @return item if worn
	 */
	public Wearable unwear(int where) {
		Wearable old = worn[where];

		worn[where] = null;
		return old;
	}
	
	/**
	 * Unwear an item of a sepcific name
	 *
	 * @param name
	 * @return item if worn
	 */
	public Wearable unwearByName(String name) {
		for (int i = 0; i < worn.length; i++) {
			Wearable item = worn[i];

			if (item != null && name.equalsIgnoreCase(item.name)) {
				worn[i] = null;
				return item;
			}
		}
		return null;
	}

	/**
	 * Convert to wield type index
	 *
	 * @param where
	 * @return
	 */
	public static int toIndex(String where) {
		switch (where.toLowerCase()) {
			case "wielded":
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
		return -1;
	}

	public int armourCount() {
		int count = 0;
		for (int i = ARMS; i < worn.length; i++) {
			if (worn[i] != null)
				count++;
		}
		return count;
	}

	public int armourMod() {
		int mod = 0;

		for (int i = 0; i < worn.length; i++) {
			Wearable item = worn[i];

			if (item != null) {
				mod += ARMOUR_MOD[i] * item.mod;
			}
		}
		return mod;
	}

	/**
	 * Damage the specified item if it exists
	 *
	 * @param damage
	 * @return the weapon if it was destroyed
	 */
	public Wearable damageItem(int index, int damage) {
		Wearable item = worn[index];

		if (item != null && item.durability != -1) {
			item.durability -= damage;
			if (item.durability < 0) {
				worn[index] = null;
				return item;
			}
		}
		return null;
	}
	// TODO: load/save functions here too?
}
