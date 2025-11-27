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

import java.util.List;

/**
 * A game provided shop.
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class GameShop extends Shop {

	public GameShop(Game game) {
		super(game);
	}

	@Override
	void setProperty(String name, String value) {
		// train is just an alias at the moment
		if (name.equals("train"))
			name = "item";

		super.setProperty(name, value);
	}

	@Override
	public int getType() {
		return TYPE_GAME_SHOP;
	}

	@Override
	public void buy(Active buyer, String what, int quantity) {
		Holdable h = items.get(what);

		if (h == null) {
			buyer.chatMessage(name + " doesn't sell those.");
			return;
		}
		if (h instanceof Training) {
			Training t = (Training) h;
			if (!buyer.addExp(-h.cost * quantity)) {
				buyer.chatMessage("You can't afford that many.");
			} else {
				switch (t.skill) {
					case "hp":
						buyer.addStat(Active.STAT_HPMAX, quantity * 10);
						buyer.chatMessage("You're magically able to withstand more damage.");
						break;
					case "mp":
						buyer.addStat(Active.STAT_MPMAX, quantity * 10);
						buyer.chatMessage("You're magically able to cast more magic.");
						break;
					case "int":
						buyer.addStat(Active.STAT_INT, quantity);
						buyer.chatMessage("You begin to think clearer.");
						break;
					case "str":
						buyer.addStat(Active.STAT_STR, quantity);
						buyer.chatMessage("You feel stronger.");
						break;
					case "dex":
						buyer.addStat(Active.STAT_DEX, quantity);
						buyer.chatMessage("You gain an extra spring in your step.");
						break;
					case "wis":
						buyer.addStat(Active.STAT_WIS, quantity);
						buyer.chatMessage("You feel wiser.");
						break;
					case "con":
						buyer.addStat(Active.STAT_CON, quantity);
						buyer.chatMessage("You feel better equipped to face the world.");
						break;
					default:
						buyer.chatMessage("BUG: I don't know how to train " + t.skill);
						buyer.addExp(h.cost * quantity);
						break;
				}
			}
		} else {
			if (buyer.getGold() < h.cost * quantity) {
				buyer.chatMessage("You can't afford that many.");
			} else {
				while (quantity > 0) {
					Holdable s = game.createItem(what);

					if (buyer.addGold(-h.cost)) {
						buyer.addItem(s);
					}
					quantity -= 1;
				}
			}
		}
	}

	@Override
	public void sell(Active customer, List<Holdable> items) {
		// TODO: I really want to look up the item somewhere to see what
		// this shop will buy the items for ...?

		for (Holdable h : items) {
			if (customer.removeItem(h)) {
				customer.addGold(h.cost / 2);
			}
		}
	}
}
