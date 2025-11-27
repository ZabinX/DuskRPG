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
 * A player provided shop, the list of items can be exhausted.
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class PlayerShop extends Shop {

	/**
	 * Gold in till (it appears unused in previous game?)
	 */
	private long gold;
	/**
	 * Owner of shop
	 */
	private Player owner;

	public PlayerShop(Game game) {
		super(game);
	}

	@Override
	public int getType() {
		return TYPE_PLAYER_SHOP;
	}

	private void buy(Active buyer, List<Holdable> all) {
		for (Holdable h : all) {
			items.remove(h);
			buyer.addItem(h);
		}
		inventoryChanged = game.getClock();
	}

	@Override
	public void buy(Active buyer, String what, int quantity) {
		List<Holdable> all = items.getAll(what, quantity);

		if (all.isEmpty()) {
			buyer.chatMessage(name + " doesn't have that for sale.");
		} else if (all.size() < quantity) {
			buyer.chatMessage(name + " doesn't have that many to sell.");
		} else if (buyer == owner) {
			buy(buyer, all);
		} else if (buyer.addGold(-all.get(0).cost * quantity * 3 / 4)) {
			gold += all.get(0).cost * quantity * 3 / 4;
			buy(buyer, all);
		} else {
			buyer.chatMessage("You can't afford that.");
		}
	}

	@Override
	public void sell(Active customer, List<Holdable> all) {
		if (owner != customer)
			customer.chatMessage("You cannot sell to this shop.");
		else {
			for (Holdable h : all) {
				items.add(h);
				customer.removeItem(h);
			}
			inventoryChanged = game.getClock();
		}
	}
}
