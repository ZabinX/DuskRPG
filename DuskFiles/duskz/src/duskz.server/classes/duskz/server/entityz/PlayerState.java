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

import duskz.map.TileMap;
import duskz.protocol.DuskMessage;
import duskz.protocol.DuskProtocol;
import static duskz.protocol.DuskProtocol.FIELD_ENTITY_FLAGS;
import static duskz.protocol.DuskProtocol.MSG_UPDATE_ENTITY;
import duskz.protocol.EntityListMessage;
import duskz.protocol.ListMessage;
import duskz.protocol.MapMessage;
import java.util.ArrayList;
import java.util.HashMap;

/**
 * This tracks the state of the player client, to optimise network transfers.
 *
 * Each integer field contains the last tick the item was changed, this is
 * to allow for polled clients.
 *
 * The map update reqiures more information, so the location of the last update
 * is recorded.
 *
 * TODO: pets need most of this monitored too
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class PlayerState implements DuskProtocol {

	Player player;
	/**
	 * Slowly changing stats, str, dex, etc.
	 */
	protected int stats;
	/**
	 * hp/mp, gold or exp changed
	 */
	protected int score;
	/**
	 * Condition list changed
	 */
	protected int conditions;
	/**
	 * Skill list/level changed
	 */
	protected int skills;
	/**
	 * Spell list/level changed
	 */
	protected int spells;
	/**
	 * Item list changed
	 */
	protected int inventory;
	/**
	 * worn items changed
	 */
	protected int worn;
	/**
	 * something affecting actions changed
	 */
	protected int actions;
	/**
	 * Last updated location
	 */
	TileMap<Thing> map;
	int x;
	int y;
	/**
	 * If we were last over a shop
	 */
	Shop overShop;
	/**
	 * All visible things
	 */
	final HashMap<Long, VisibleThing> visibleThings = new HashMap<>();
	/*
	 * Last update tick
	 */
	int lastUpdate = -1;

	public PlayerState(Player player) {
		this.player = player;
	}

	/**
	 * Send the player all updates since last tick
	 *
	 * @param player
	 */
	public void updatePlayer(int tick) {
		boolean moved = player.x != x || player.y != y || player.map != map;

		x = player.x;
		y = player.y;
		map = player.map;

		updateVisibleThings(tick);

		if (moved) {
			updateMap();
			updateCheckShop();
		} else if (overShop != null && overShop.inventoryChanged >= lastUpdate) {
			player.send(overShop.createTransactionMessage(MSG_UPDATE_MERCHANT));
		}

		if (actions >= lastUpdate)
			updateActions();

		if (worn >= lastUpdate)
			updateWorn();

		if (inventory >= lastUpdate)
			updateInventory();

		if (conditions >= lastUpdate)
			updateConditions();

		lastUpdate = tick;
	}

	void updateMap() {
		int r = player.game.viewRange;

		System.out.printf("update map %d,%d map %s\n", x, y, map.name);

		int width = r * 2 + 1;
		int height = r * 2 + 1;
		short[] tiles = null;
		int nlayers = map.getLayerCount();
		int nused = 0;
		short[][] layers = new short[nlayers][];
		int groundLayer = 0;
		for (int l = 0; l < nlayers; l++) {
			if (tiles == null)
				tiles = new short[width * height];

			short[] visible = map.getRegion(l, x - r, y - r, width, height, tiles);

			if (visible != null) {
				tiles = null;

				if (l == map.getGroundLayer())
					groundLayer = nused;

				layers[nused++] = visible;
			}
		}

		player.send(new MapMessage(MSG_UPDATE_MAP, width, height, x, y, groundLayer, nused, layers));
	}

	/**
	 * Check if the player is on a shop square, and if so update the client
	 * state and send off the shop details. If the player has left a shop
	 * square, then send a leaving update.
	 */
	void updateCheckShop() {
		Shop thing = player.visitingShop();

		if (thing != null) {
			overShop = thing;
			player.send(overShop.createTransactionMessage(MSG_UPDATE_MERCHANT));
		} else if (overShop != null) {
			player.send(DuskMessage.create(MSG_EXIT_MERCHANT));
			overShop = null;
		}
	}

	void updateActions() {
		DuskMessage.StringListMessage list = new DuskMessage.StringListMessage(MSG_UPDATE_ACTIONS);

		if (player.isFighting()) {
			list.add("flee");
		} else {
			if (player.isSleeping()) {
				list.add("wake");
			} else {
				list.add("sleep");
			}
		}
		player.send(list);
	}

	void updateWorn() {
		player.send(player.wornItems.toMessage(MSG_EQUIPMENT));
	}

	void updateInventory() {
		// FIXME: make player item sale price ratio adjustable
		player.send(player.inventory.createTransactionMessage(MSG_INVENTORY, 0.5f));
	}

	void updateConditions() {
	}

	/**
	 * Update the visibleThings list, and queue updates to the client.
	 *
	 * Note that this is the ONLY way that visibleThings should ever be changed.
	 */
	void updateVisibleThings(int tick) {
		HashMap<Long, VisibleThing> left = (HashMap<Long, VisibleThing>) visibleThings.clone();
		ArrayList<VisibleThing> newlyVisible = new ArrayList<>();

		//System.out.println("checking visible range");

		// FIXME: I think this is missing something here, i.e. some sort of object visibility check

		for (TileMap<Thing>.MapData md : map.range(x, y, player.game.viewRange)) {
			if (!md.entities.isEmpty() && player.canSee(md.x, md.y)) {
				for (Thing thing : md.entities) {
					VisibleThing here = left.remove(thing.ID);
					if (here == null) {
						newlyVisible.add(new VisibleThing(thing));
					} else {
						here.updateIfChanged(tick);
					}
				}
			}
		}

		for (VisibleThing thing : newlyVisible) {
			// Add thing to client
			//send(thing.thing.createUpdateMessage(MSG_ADD_ENTITY));
			visibleThings.put(thing.thing.ID, thing);
			thing.updateIfChanged(tick);
		}
		// anything left over must be removed
		for (long id : left.keySet()) {
			player.send(DuskMessage.EntityMessage.create(id, MSG_REMOVE_ENTITY));
			visibleThings.remove(id);
		}
	}

	private void addStat(ListMessage lm, int field, int index) {
		int total = player.getStat(index);
		int bonus = player.getBonus(index);
		addStat(lm, field, total - bonus, bonus);
	}

	private void addStat(ListMessage lm, int field, int base, int bonus) {
		lm.add(field, base);
		lm.add(field, bonus);
	}

	protected ListMessage buildStats(int msg) {
		ListMessage lm = new ListMessage(msg);

		lm.add(FIELD_INFO_CASH, player.getGold());
		lm.add(FIELD_INFO_EXP, player.getExp());
		addStat(lm, FIELD_INFO_STR, Active.STAT_STR);
		addStat(lm, FIELD_INFO_INT, Active.STAT_INT);
		addStat(lm, FIELD_INFO_DEX, Active.STAT_DEX);
		addStat(lm, FIELD_INFO_CON, Active.STAT_CON);
		addStat(lm, FIELD_INFO_WIS, Active.STAT_WIS);
		addStat(lm, FIELD_INFO_DAM, player.getDamageMod(), player.getBonus(Active.STAT_DAMAGE));
		addStat(lm, FIELD_INFO_ARC, player.getArmourMod(), player.getBonus(Active.STAT_ARC));

		// What else?

		return lm;
	}

	class VisibleThing {

		Thing thing;
		int clientX = -10;
		int clientY = -10;

		public VisibleThing(Thing thing) {
			this.thing = thing;
		}

		public void updateIfChanged(int tick) {
			int dx = thing.x - clientX;
			int dy = thing.y - clientY;
			DuskMessage msg = null;

			clientX = thing.x;
			clientY = thing.y;

			/*
			 if (thing instanceof Active
			 && ((Active) thing).isStateChanged(tick)) {
			 System.out.println("sending remove/add for changed entity");
			 // FIXME: this should just update the flags or whatever
			 player.send(DuskMessage.EntityMessage.create(thing.ID, MSG_REMOVE_ENTITY));
			 player.send(thing.createUpdateMessage(MSG_ADD_ENTITY));
			 return;
			 }*/

			if (dx != 0 || dy != 0) {
				System.out.println("Thing " + thing.name + " moved: " + dx + ", " + dy);

				// TODO: rather than relative move, send the specific location/faceing direction?

				if (dx == 0) {
					if (dy == 1) {
						msg = DuskMessage.create(thing.ID, MSG_MOVE, (byte) 's');
					} else if (dy == -1) {
						msg = DuskMessage.create(thing.ID, MSG_MOVE, (byte) 'n');
					}
				}
				if (dy == 0) {
					if (dx == 1) {
						msg = DuskMessage.create(thing.ID, MSG_MOVE, (byte) 'e');
					} else if (dx == -1) {
						msg = DuskMessage.create(thing.ID, MSG_MOVE, (byte) 'w');
					}
				}
				if (msg == null) {
					// Need to remove it first to move it further
					player.send(DuskMessage.EntityMessage.create(thing.ID, MSG_REMOVE_ENTITY));
					msg = thing.createUpdateMessage(MSG_ADD_ENTITY);
				}

				player.send(msg);
			}

			// FIXME: this could include location?
			if (thing instanceof Active) {
				Active a = (Active) thing;

				if (a.flagsChanged >= lastUpdate
						|| a.conditionsChanged >= lastUpdate) {
					EntityListMessage elm = new EntityListMessage(thing.ID, MSG_UPDATE_ENTITY);

					if (a.flagsChanged >= lastUpdate) {
						int flags = 0;
						if (a.isFighting()) {
							flags = a.getBattleSide();
						}
						if (a.isSleeping())
							flags |= ENTITY_FLAG_SLEEPING;

						elm.add(FIELD_ENTITY_FLAGS, flags);
					}

					if (a.conditionsChanged >= lastUpdate) {
						elm.add(FIELD_ENTITY_CONDITIONS, a.getActiveConditions());
					}

					player.send(elm);
				}
			}
		}
	}
}
