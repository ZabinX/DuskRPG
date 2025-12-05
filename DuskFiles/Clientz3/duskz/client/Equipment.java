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

import duskz.protocol.DuskMessage;
import duskz.protocol.DuskMessage.StringMessage;
import duskz.protocol.ListMessage;
import duskz.protocol.TransactionItem;
import static duskz.protocol.Wearing.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * This is a bit junk.
 * FIXME: merge with inventory "sell list"
 *
 * @author notzed
 */
public class Equipment  {

	/**
	 * Worn items
	 */
	public String[] worn = new String[WEARING_COUNT];
	/**
	 * Available items for wearing
	 */
	public List<String>[] available = new List[WEARING_COUNT];
	/**
	 * All items
	 */
	public List<String> all = new ArrayList<>();
	/**
	 * Where is item wearable at?
	 * FIXME: maybe i should just store them in a structure
	 */
	HashMap<String, Integer> wearableAt = new HashMap<>();

	public Equipment() {
		for (int i = 0; i < available.length; i++)
			available[i] = new ArrayList<>();
	}

	public int canWearAt(String what) {
		Integer i = wearableAt.get(what);

		if (i == null)
			return -1;
		return i;
	}

	/**
	 * Returns where what is worn at, if at all.
	 *
	 * @param what
	 * @return -1 if not worn
	 */
	public int wearingAt(String what) {
		for (int i = 0; i < worn.length; i++)
			if (worn[i].equals(what))
				return i;
		return -1;
	}

	public void updateWorn(ListMessage lm) {
		for (int i=0;i<worn.length;i++)
			worn[i] = "none";

		for (DuskMessage dm: lm.value) {
			StringMessage sm = (StringMessage) dm;

			worn[sm.name] = sm.value;
		}
	}
	public void updateAvailable(ListMessage lm) {
		all.clear();
		for (int i = 0; i < available.length; i++)
			available[i].clear();
		wearableAt.clear();

		for (DuskMessage dm: lm.value) {
			StringMessage sm = (StringMessage) dm;

			// remap to local id;
			int i = sm.name; //sm.name - 1;
			if (i >= 0 && i < available.length) {
				available[i].add(sm.value);
				wearableAt.put(sm.value, i);
			}
			all.add(sm.value);
		}
	}

	public void updateAvailable(List<TransactionItem> list) {
		all.clear();
		for (int i = 0; i < available.length; i++)
			available[i].clear();
		wearableAt.clear();

		for (TransactionItem item: list) {
			if (item.type >= 0 && item.type < available.length) {
				available[item.type].add(item.name);
				wearableAt.put(item.name, item.type);
			}
			all.add(item.name);
		}

	}
}
