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

import duskz.protocol.TransactionMessage;
import java.util.ArrayList;
import java.util.List;

/**
 * A list of holdables.
 *
 * Original game had table by type, but that seems somewhat pointless overhead.
 *
 * This is a bit of a mis-mash right now just trying to get the code working
 *
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class Inventory {

	// do i need a name index?  rarely accessed, short list, who cares
	final private ArrayList<Holdable> items = new ArrayList<>();

	public TransactionMessage createTransactionMessage(int name, float scale) {
		TransactionMessage msg = new TransactionMessage(name);

		// TODO: count occurances here for player inventory?

		for (Holdable h : items) {
			// FIXME: how to represent skills

			int cost = (int) (h.cost * scale);
			
			msg.add(h.getWearing(), h.name, 1, cost, h.getUnits());
		}

		return msg;
	}

	public void describeTo(Active viewer) {
		if (items.isEmpty())
			viewer.chatMessage("Nothing at the moment.");
		else {
			// hack: shopping list
			for (Holdable h : items) {
				viewer.chatMessage(String.format("%-20s %s", h.name, h.description));
			}
		}
	}

	/**
	 * Return the first item of the given type
	 * @param key
	 * @return 
	 */
	public Holdable get(String key) {
		for (Holdable h : items) {
			if (key.equalsIgnoreCase(h.name))
				return h;
		}
		return null;
	}

	public void add(Holdable h) {
		items.add(h);
	}

	public boolean remove(Holdable h) {
		return items.remove(h);
	}

	public List<Holdable> getAll(String key, int maximum) {
		ArrayList<Holdable> list = new ArrayList<>();
		for (Holdable h : items) {
			if (h.name.equalsIgnoreCase(key)) {
				list.add(h);
				if (list.size() >= maximum)
					break;
			}
		}
		return list;
	}

	public boolean contains(Holdable h) {
		return items.contains(h);
	}
}
