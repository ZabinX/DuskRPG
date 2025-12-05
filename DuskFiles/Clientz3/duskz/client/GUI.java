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

import duskz.protocol.TransactionItem;
import java.util.List;

/**
 * Interface for all gui interactions.
 *
 * To implement a different frontend toolkit, simply pass this to the Dusk
 * constructor.
 *
 * @author notzed
 */
public interface GUI {

	/**
	 * Init, should be called before anything else
	 */
	public void setGame(Dusk aThis);

	/**
	 * Clear output log, i.e. start of game
	 */
	public void logClear();

	/**
	 * Log something to the log window
	 *
	 * @param txt
	 */
	public GUI log(String txt, Object... args);
	// Init/login

	public void showLogin();

	public void loginOk();

	public void chooseRace(String prompt, List<String> races);

	/**
	 * Show the shop window
	 *
	 * @param title
	 * @param buyList
	 * @param sellList
	 */
	public void enterShop(String title, List<TransactionItem> buyList, List<TransactionItem> sellList);

	/**
	 * Update the buy list whilst in the shop
	 *
	 * @param buyList
	 */
	public void setBuyList(List<TransactionItem> buyList);

	/**
	 * Update the sell list whilst in the shop
	 *
	 * @param sellList
	 */
	public void setSellList(List<TransactionItem> sellList);

	/**
	 * Close the shop window
	 */
	public void exitShop();

	/**
	 * Open the equipment window
	 *
	 * @param worn
	 */
	public void manageEquipment(Equipment worn);

	/**
	 * Update the won list, i.e. if in inventory/equipment screen
	 *
	 * @param worn
	 */
	public void setEquipment(Equipment worn);

	// Misc high level functions
	public void visitFile(String file, String text, boolean canSave);

	// TODO: parse the content
	public void setStats(String stats);

	/**
	 * Set hp/mp etc status.
	 *
	 * @param status
	 */
	public void setStatus(Status status);

	public void setTakeList(List<Entity> list);

	public void setDropList(List<String> list);

	public void setActionList(List<String> list);

	public void setAttackList(List<Entity> list);

	public void setLookList(List<Entity> list);

	// setup/map
	public void setImages(String rc);

	/**
	 * Update the map.
	 *
	 * @param map Source map
	 */
	public void updateMap(ClientMap map);

	/**
	 * Display or log some damage
	 * TODO: use a servermessage for the details
	 * @param e
	 * @param angle angle to attacker
	 * @param locx
	 * @param locy
	 * @param delta how much damage
	 * @param how how it was caused
	 */
	public void damageEntity(Entity e, double angle, double locx, double locy, int delta, String how);
}
