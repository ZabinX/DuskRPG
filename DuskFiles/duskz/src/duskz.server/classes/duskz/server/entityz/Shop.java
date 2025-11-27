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
import java.util.List;

/**
 * Shops contain sellable items
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public abstract class Shop extends Thing {

	Inventory items = new Inventory();
	/**
	 * Tick of last inventory change.
	 */
	int inventoryChanged;

	Shop(Game game) {
		super(game);
	}

	@Override
	void setProperty(String name, String value) {
		switch (name) {
			case "item":
				Holdable h = game.createItem(value);
				if (h != null) {
					System.out.println(this.name + " sells " + h.name);
					items.add(h);
				} else
					game.log.printf(Log.ERROR, "Shop: %s, unkown item: %s", this.name, value);
				break;
			default:
				super.setProperty(name, value);
		}
	}

	/**
	 * Create a transactionmessage representing the shop stores.
	 *
	 * @param name
	 * @return
	 */
	public TransactionMessage createTransactionMessage(int name) {
		return items.createTransactionMessage(name, 1);
	}

	@Override
	public void look(Active viewer) {
		if (description != null)
			viewer.chatMessage("You see " + name + ", " + description);
		else
			viewer.chatMessage("You see " + name);
		viewer.chatMessage("Currently for sale:");

		items.describeTo(viewer);

		/*
		 * 					} else if (objStore.isPlayerMerchant()) {
		 lt.chatMessage("You see a merchant that sells");
		 PlayerMerchant pmrStore = (PlayerMerchant) objStore;
		 boolean blnEmptyMerchant = true;
		 for (LinkedList<Item> list : pmrStore.vctItems.values()) {
		 Item item = (Item) list.element();
		 cmdline = item.name;
		 String strSpacer = "\t";
		 if (cmdline.length() < 11) {
		 strSpacer = "\t\t";
		 }
		 lt.chatMessage("\t" + cmdline + strSpacer + item.description);
		 blnEmptyMerchant = false;
		 }
		 if (blnEmptyMerchant) {
		 lt.chatMessage("\tNothing at the moment.");
		 }
		 } else if (objStore.isMerchant()) {
		 lt.chatMessage("You see a merchant that sells");
		 Merchant mrcStore = (Merchant) objStore;
		 boolean blnEmptyMerchant = true;
		 for (String item : mrcStore.items) {
		 Item itmStore = game.getItem(item);
		 if (itmStore != null) {
		 String strSpacer = "\t";
		 if (item.length() < 11) {
		 strSpacer = "\t\t";
		 }
		 lt.chatMessage("\t" + item + strSpacer + itmStore.description);
		 blnEmptyMerchant = false;
		 } else {
		 if (item.equals("pet")) {
		 lt.chatMessage("\tpets.");
		 blnEmptyMerchant = false;
		 } else {
		 item = item.substring(6, item.length());
		 lt.chatMessage("\ttraining in " + item);
		 blnEmptyMerchant = false;
		 }
		 }
		 }
		 if (blnEmptyMerchant) {
		 lt.chatMessage("\tNothing.");
		 }
		 return null;
		 }

		 */
	}

	abstract public void buy(Active buyer, String what, int quantity);

	abstract public void sell(Active customer, List<Holdable> items);
}
