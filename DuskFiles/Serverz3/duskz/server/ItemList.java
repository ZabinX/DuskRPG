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
 * Feb-2013 Michael Zucchi - attempt at cleanup using modern collections.
 */
package duskz.server;

import duskz.server.entity.Item;
import java.util.HashMap;
import java.util.LinkedList;

/**
 * Holds all items, keyed by the item type.
 */
public class ItemList extends HashMap<String, LinkedList<Item>> {

	public boolean contains(String strItemName) {
		return containsKey(strItemName.toLowerCase());
	}

	public void addElement(Item item) {
		String key = item.name.toLowerCase();
		if (contains(key)) {
			get(key).push(item);
		} else {
			LinkedList<Item> list = new LinkedList<>();
			list.push(item);
			put(key, list);
		}
	}

	public Item removeElement(String name) {
		name = name.toLowerCase();
		LinkedList<Item> list = get(name);
		if (list != null && !list.isEmpty()) {
			Item item = list.pop();
			if (list.isEmpty()) {
				remove(name);
			}
			return item;
		}
		return null;
	}

	/*
	 **	This method formats the ItemList for sending to the client
	 **	for display of the player's inventory to the player.
	 */
	public String print() {
		StringBuilder invBuffer = new StringBuilder();
		for (String name : keySet()) {
			LinkedList<Item> list = get(name);
			Item item = list.element();

			invBuffer.append("").append((char) 3).append(list.size()).append(" ").append(item.name).append("\n");
		}
		return invBuffer.toString();
	}

	/*
	 **	This method formats the ItemList for saving.
	 **	It generates a String that can later be passed
	 **	to fromString for populating a new ItemList.
	 */
	public String toString() {
		StringBuilder invBuffer = new StringBuilder();
		for (String name : keySet()) {
			LinkedList<Item> list = get(name);

			for (Item item : list) {
				invBuffer.append(item.toString()).append("/\n");
			}
		}
		return invBuffer.toString();
	}
}
