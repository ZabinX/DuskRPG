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
 * Feb-2013 Michael Zucchi - modernised java, factory method/loader and script
 * wrappers.
 */
package duskz.server.entity;

import duskz.protocol.EntityUpdateMessage;
import duskz.protocol.Wearing;
import duskz.server.DuskEngine;
import duskz.server.Script;
import java.io.File;
import java.io.IOException;
import java.io.RandomAccessFile;

/*
 All code copyright Tom Weingarten (captaint@home.com) 2000
 Tom Weingarten makes no assurances as to the reliability or
 functionality of this code. Use at your own risk.

 You are free to edit or redistribute this code or any portion
 at your wish, under the condition that you do not edit or
 remove this license, and accompany it with all redistributions.
 */
//0-Ordinary Item
//1-Weapon
//2-Armor
//3-Food
//4-Drink
/**
 * An Item is an object that can be picked up, worn, and used. It can be of type
 * Ordinary Item, Weapon, Armor, Food, or Drink.
 *
 * @author Tom Weingarten
 */
public class Item extends DuskObject {

	public static final int ORDINARY = 0;
	public static final int WEAPON = 1;
	public static final int ARMOR = 2;
	public static final int FOOD = 3;
	public static final int DRINK = 4;
	public static final int CONTAINER = 5;
	private String strOnGetScript = null,
		strOnDropScript = null;
	public String strOnUseScript = null,
		strOnWearScript = null,
		strOnUnWearScript = null;
	public int intCost,
		intType = -1,
		intKind = -1,
		intMod,
		intUses = -1,
		intRange = 1;
	int intImage;
	int intWeight;				// How much this object weighs
	int intSize;				// Amount of space this object takes up
	int intCapacity;			// How many items can this container hold
	int intWeightLimit;			// How much weight can this container hold
	public long lngDurability = -1;
	Item itmNext = null;

	public Item(long lngID, String name) {
		super(lngID, name);
	}

	boolean isOrdinaryItem() {
		if (intType == ORDINARY) {
			return true;
		}
		return false;
	}

	boolean isWeapon() {
		if (intType == WEAPON) {
			return true;
		}
		return false;
	}

	boolean isArmor() {
		if (intType == ARMOR) {
			return true;
		}
		return false;
	}

	boolean isFood() {
		if (intType == FOOD) {
			return true;
		}
		return false;
	}

	boolean isDrink() {
		if (intType == DRINK) {
			return true;
		}
		return false;
	}

	boolean isContainer() {
		if (intType == CONTAINER) {
			return true;
		}
		return false;
	}

	int range() {
		return intRange;
	}

	@Override
	public int getImage() {
		return intImage;
	}

	@Override
	public byte getType() {
		return ITEM;
	}

	@Override
	public int getEntityType() {
		if (isFood())
			return EntityUpdateMessage.TYPE_FOOD;
		if (isDrink())
			return EntityUpdateMessage.TYPE_DRINK;
		if (isWeapon())
			return EntityUpdateMessage.TYPE_WEAPON;
		if (isArmor())
			return EntityUpdateMessage.TYPE_ARMOUR;
		if (isContainer())
			return EntityUpdateMessage.TYPE_CONTAINER;

		return EntityUpdateMessage.TYPE_ITEM;
	}

	/**
	 * type of kind as from Wearing
	 *
	 * @return
	 */
	public int getWearLocation() {
		int kind;

		if (isArmor()) {
			kind = 1 + intKind;
		} else if (isWeapon()) {
			kind = Wearing.WIELD;
		} else {
			kind = Wearing.INVENTORY;
		}
		return kind;
	}

	/*
	 **	This method formats the Item for saving.
	 **	It generates a String that can later be passed
	 **	to fromString for populating a new Item.
	 */
	public String toString() {
		return "[strName:" + name
			+ "::strDescription:" + description
			+ "::strOnUseScript:" + strOnUseScript
			+ "::strOnWearScript:" + strOnWearScript
			+ "::strOnUnWearScript:" + strOnUnWearScript
			+ "::strOnGetScript:" + strOnGetScript
			+ "::strOnDropScript:" + strOnDropScript
			+ "::intCost:" + intCost
			+ "::intType:" + intType
			+ "::intKind:" + intKind
			+ "::intMod:" + intMod
			+ "::intImage:" + intImage
			+ "::intUses:" + intUses
			+ "::intRange:" + intRange
			+ "::lngDurability:" + lngDurability
			+ "]";
	}

	public static Item getItem(long id, String inName) throws IOException {
		Item itmStore = null;
		RandomAccessFile rafItemDef = null;
		String strStore = "Error reading file";
		try {
			File fileTest = new File("defItems/" + inName.toLowerCase());
			if (!fileTest.exists()) {
				return null;
			}
			rafItemDef = new RandomAccessFile("defItems/" + inName.toLowerCase(), "r");
			//itmStore = new Item(this);
			itmStore = new Item(id, inName);
			itmStore.description = "a " + inName; //default description is name
			strStore = rafItemDef.readLine();
			while (!(strStore == null || strStore.equals("."))) {
				// FIXME: use enums
				if (strStore.equalsIgnoreCase("type")) {
					strStore = rafItemDef.readLine();
					if (strStore.equalsIgnoreCase("item")) {
						itmStore.intType = 0;
					} else if (strStore.equalsIgnoreCase("weapon")) {
						itmStore.intType = 1;
					} else if (strStore.equalsIgnoreCase("armor")) {
						itmStore.intType = 2;
					} else if (strStore.equalsIgnoreCase("food")) {
						itmStore.intType = 3;
					} else if (strStore.equalsIgnoreCase("drink")) {
						itmStore.intType = 4;
					}
				} else if (strStore.equalsIgnoreCase("kind")) {
					strStore = rafItemDef.readLine();
					if (strStore.equalsIgnoreCase("arms")) {
						itmStore.intKind = 0;
					} else if (strStore.equalsIgnoreCase("legs")) {
						itmStore.intKind = 1;
					} else if (strStore.equalsIgnoreCase("torso")) {
						itmStore.intKind = 2;
					} else if (strStore.equalsIgnoreCase("waist")) {
						itmStore.intKind = 3;
					} else if (strStore.equalsIgnoreCase("neck")) {
						itmStore.intKind = 4;
					} else if (strStore.equalsIgnoreCase("skull")) {
						itmStore.intKind = 5;
					} else if (strStore.equalsIgnoreCase("eyes")) {
						itmStore.intKind = 6;
					} else if (strStore.equalsIgnoreCase("hands")) {
						itmStore.intKind = 7;
					}
				} else if (strStore.equalsIgnoreCase("description")) {
					itmStore.description = rafItemDef.readLine();
				} else if (strStore.equalsIgnoreCase("cost")) {
					itmStore.intCost = Integer.parseInt(rafItemDef.readLine());
				} else if (strStore.equalsIgnoreCase("durability")) {
					itmStore.lngDurability = Long.parseLong(rafItemDef.readLine());
				} else if (strStore.equalsIgnoreCase("uses")) {
					itmStore.intUses = Integer.parseInt(rafItemDef.readLine());
				} else if (strStore.equalsIgnoreCase("mod")) {
					itmStore.intMod = Integer.parseInt(rafItemDef.readLine());
				} else if (strStore.equalsIgnoreCase("range")) {
					itmStore.intRange = Integer.parseInt(rafItemDef.readLine());
				} else if (strStore.equalsIgnoreCase("image")) {
					itmStore.intImage = Integer.parseInt(rafItemDef.readLine());
				} else if (strStore.equalsIgnoreCase("onuse")) {
					itmStore.strOnUseScript = rafItemDef.readLine();
				} else if (strStore.equalsIgnoreCase("onwear")) {
					itmStore.strOnWearScript = rafItemDef.readLine();
				} else if (strStore.equalsIgnoreCase("onunwear")) {
					itmStore.strOnUnWearScript = rafItemDef.readLine();
				} else if (strStore.equalsIgnoreCase("onget")) {
					itmStore.strOnGetScript = rafItemDef.readLine();
				} else if (strStore.equalsIgnoreCase("ondrop")) {
					itmStore.strOnDropScript = rafItemDef.readLine();
				}
				strStore = rafItemDef.readLine();
			}
		} catch (NumberFormatException ex) {
			throw new IOException("Parsing: " + strStore, ex);
		} catch (NullPointerException ex) {
			throw new IOException(ex);
		} finally {
			if (rafItemDef != null) {
				rafItemDef.close();
			}
		}
		return itmStore;
	}

	public void onGetItem(DuskEngine eng, LivingThing trigger) {
		if (strOnGetScript != null) {
			try {
				Script script = new Script("scripts/" + strOnGetScript, eng, false);
				script.varVariables.addVariable("trigger", trigger);
				script.varVariables.addVariable("itemname", name);
				script.varVariables.addVariable("mod", intMod);
				script.runScript();
				script.close();
			} catch (Exception e) {
				eng.log.printError("While running onGet script(" + strOnGetScript + ") for item \"" + name + "\"", e);
			}
		}
	}

	public void onDropItem(DuskEngine eng, LivingThing trigger) {
		if (strOnDropScript != null) {
			try {
				Script script = new Script("scripts/" + strOnDropScript, eng, false);
				script.varVariables.clearVariables();
				script.varVariables.addVariable("trigger", trigger);
				script.varVariables.addVariable("itemname", name);
				script.varVariables.addVariable("mod", intMod);
				script.runScript();
				script.close();
			} catch (Exception e) {
				eng.log.printError("While running onDrop script(" + strOnDropScript + ") for item \"" + name + "\"", e);
			}
		}
	}
}
