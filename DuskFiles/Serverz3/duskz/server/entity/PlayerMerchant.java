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
package duskz.server.entity;

import duskz.protocol.EntityUpdateMessage;
import duskz.server.DuskEngine;
import duskz.server.ItemList;

/**
 * Merchant represents a non-mobile entity where This merchant holds/sells items
 * for the player that owns it The owner can give and take items and gp from it.
 * The merchant will only be able to sell items it has been given. And only the
 * number it has been given.
 *
 * @author Wildern
 */
public class PlayerMerchant extends DuskObject {

	DuskEngine engGame;
	public ItemList vctItems;
	// FIXME: not public!!
	public long cash;
	public String strOwner;

	public PlayerMerchant(DuskEngine inGame) {
		super(inGame.getID(), "Merchant");
		engGame = inGame;
	}

	@Override
	public int getImage() {
		return engGame.merchantimage;
	}

	@Override
	public byte getType() {
		return PLAYER_MARCHANT;
	}

	@Override
	public int getEntityType() {
		return EntityUpdateMessage.TYPE_PLAYER_SHOP;
	}

	public long contains(String strStore) {
		if (vctItems.contains(strStore)) {
			return vctItems.get(strStore).size();
		}
		return 0;
	}

	public void add(Item itmStore) {
		vctItems.addElement(itmStore);
	}

	public Item remove(String strStore) {
		return vctItems.removeElement(strStore);
	}
}
