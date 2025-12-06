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
 * Feb-2013 Michael Zucchi - modernised java.
 */
package duskz.server.entity;

import duskz.protocol.EntityUpdateMessage;
import duskz.server.DuskEngine;
import java.io.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Merchant represents a non-mobile entity where players can buy/sell items and
 * pets or train.
 *
 * @author Tom Weingarten
 */
public class Merchant extends DuskObject {

	DuskEngine engGame;
	public final List<String> items = new ArrayList<>();

	public Merchant(DuskEngine inGame) {
		super(inGame.getID(), "Merchant");
		engGame = inGame;
	}

	@Override
	public int getImage() {
		return engGame.merchantimage;
	}

	@Override
	public byte getType() {
		return MERCHANT;
	}

	@Override
	public int getEntityType() {
		return EntityUpdateMessage.TYPE_GAME_SHOP;
	}

	public boolean contains(String item) {
		return items.contains(item);
	}

	public void remove(String item) {
		items.remove(item);
	}

	public void pet(LivingThing thnMaster) {
		try {
			if (thnMaster.following != null && thnMaster.following.isPet()) {
				thnMaster.chatMessage("You are only allowed 1 pet.");
				return;
			}
			if (thnMaster.cash >= engGame.petcost) {
				thnMaster.cash -= engGame.petcost;
			} else {
				thnMaster.chatMessage("You can't afford a pet.");
				return;
			}
			if (thnMaster.isPet()) {
				thnMaster.chatMessage("You ARE a pet!");
				return;

			}

			thnMaster.chatMessage("The developer hasn't implemented pets yet!, see Merchangt.java line 90");
			if (true)return;

			// FIXME: requires query system.  Use callbacks?
			/*
			thnMaster.halt();
			thnMaster.chatMessage("Enter a name for your pet:");
			String strName = thnMaster.instream.readLine().trim();
			File filCheck = new File("pets/" + strName.toLowerCase());
			File filCheck2 = new File("users/" + strName.toLowerCase());
			while (filCheck.exists() || filCheck2.exists()
					|| !engGame.isGoodName(strName)) {
				thnMaster.chatMessage("That name is already taken or has invalid characters, please enter another:");
				strName = thnMaster.instream.readLine().trim();
				filCheck = new File("pets/" + strName.toLowerCase());
				filCheck2 = new File("users/" + strName.toLowerCase());
			}
			thnMaster.chatMessage("Choose a type of pet:");
			File filPetTypes = new File("defPets");
			String strList[] = filPetTypes.list();
			for (int i = 0; i < strList.length; i++) {
				thnMaster.chatMessage(strList[i]);
			}
			String strStore = thnMaster.instream.readLine().trim();
			filCheck = new File("defPets/" + strStore);
			while (strStore.equals("") || !filCheck.exists()) {
				thnMaster.chatMessage("That is not a valid pet type:");
				strStore = thnMaster.instream.readLine().trim();
				filCheck = new File("defPets/" + strStore);
			}
			thnMaster.following = new LivingThing(strName, strStore, thnMaster, engGame);
			*/
		} catch (Exception e) {
			engGame.log.printError("Merchant.pet()", e);
		} finally {
			//thnMaster.proceed();
		}
	}

	public void train(String how, int quantity, LivingThing lt) {
		quantity = Math.min(quantity, 100);

		if (lt.exp < engGame.traincost * quantity) {
			lt.chatMessage("Sorry, you don't have enough experience points.");
			return;
		}

		switch (how.toLowerCase()) {
			case "hp":
				lt.exp -= engGame.traincost * quantity;
				lt.maxhp += 10 * quantity;
				lt.hp += 10 * quantity;
				lt.updateInfo();
				break;
			case "mp":
				lt.exp -= engGame.traincost * quantity;
				lt.maxmp += 10 * quantity;
				lt.mp += 10 * quantity;
				lt.updateInfo();
				break;
			case "strength":
				if (lt.stre + quantity > lt.stre_limit) {
					quantity = lt.stre_limit - lt.stre;
				}
				lt.exp -= engGame.traincost * quantity;
				lt.stre += quantity;
				break;
			case "intelligence":
				if (lt.inte + quantity > lt.inte_limit) {
					quantity = lt.inte_limit - lt.inte;
				}
				lt.exp -= engGame.traincost * quantity;
				lt.inte += quantity;
				break;
			case "wisdom":
				if (lt.wisd + quantity > lt.wisd_limit) {
					quantity = lt.wisd_limit - lt.wisd;
				}
				lt.exp -= engGame.traincost * quantity;
				lt.wisd += quantity;
				break;
			case "constitution":
				if (lt.cons + quantity > lt.cons_limit) {
					quantity = lt.cons_limit - lt.cons;
				}
				lt.exp -= engGame.traincost * quantity;
				lt.cons += quantity;
				break;
			case "dexterity":
				if (lt.dext + quantity > lt.dext_limit) {
					quantity = lt.dext_limit - lt.dext;
				}
				lt.exp -= engGame.traincost * quantity;
				lt.dext += quantity;
				break;
			default:
				int skillLeft = 100 - lt.getSkill(how);
				if (quantity > skillLeft) {
					quantity = skillLeft;
				}
				if (lt.addToSkill(how, (byte) quantity)) {
					lt.exp -= quantity * engGame.traincost;
				} else {
					return;
				}
		}
		lt.updateStats();
	}
}
