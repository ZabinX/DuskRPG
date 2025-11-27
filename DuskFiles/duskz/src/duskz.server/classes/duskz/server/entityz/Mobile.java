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
import java.io.BufferedWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedList;

/**
 * Non player character
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class Mobile extends Active {

	/**
	 * Home location for mobile
	 */
	int homeX, homeY;
	/**
	 * Items given when killed by a player
	 */
	ArrayList<GiveItem> giveItems = new ArrayList<>();
	double bravery;
	double groupRelation;
	Faction faction;
	boolean canSeePlayer;
	// causes respawn on first tick
	int respawn = 1;

	public Mobile(Game game) {
		super(game);
	}

	// onBattle script
	@Override
	public int getType() {
		return TYPE_MOBILE;
	}

	@Override
	public boolean isAlive() {
		if (respawn > 0)
			return false;
		return super.isAlive();
	}

	@Override
	void setProperty(String name, String value) {
		switch (name) {
			case "faction":
				this.faction = game.getFaction(value);
				break;
			case "giveitem": {
				int c = value.indexOf(',');
				if (c > 0) {
					giveItems.add(new GiveItem(value.substring(0, c), Double.valueOf(value.substring(c + 1))));
				}
				break;
			}
			case "bravery":
				bravery = Double.valueOf(value);
				break;
			case "grouprelation":
				groupRelation = Double.valueOf(value);
				break;
			default:
				super.setProperty(name, value);
		}
	}

	@Override
	protected void writeProperties(BufferedWriter out) throws IOException {
		super.writeProperties(out);
		if (faction != null)
			writeProperty(out, "faction", faction.name);
		writeProperty(out, "bravery", bravery);
		writeProperty(out, "grouprelation", groupRelation);
		for (GiveItem gi : giveItems) {
			writeProperty(out, "giveitem", gi.name + "," + String.valueOf(gi.probability));
		}
	}

	// FIXME: need some way of verifying loading, this isn't quite useful
	// because loaded isn't called for load() only reconstruct()
	@Override
	protected void loaded() throws IOException {
		homeX = x;
		homeY = y;
		if (faction == null)
			//throw new IOException("Missing faction on " + name);
			System.out.println("Missing faction on " + name);
		/*
		 setStat(STAT_HP, getHPMax());
		 setStat(STAT_MP, getMPMax());

		 // debug
		 System.out.println("dump of loaded mob:");
		 BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		 writeProperties(bw);
		 bw.flush();*/
	}

	// FIXME: this is a hack as mobiles don't have a race.
	// race is common to pet and player only ...?
	public int getStat(int key) {
		return stats[key] + bonus[key];
	}

	@Override
	protected boolean canAttackEnemy(Active enemy) {
		switch (enemy.getType()) {
			case TYPE_PLAYER: {
				Player nme = (Player) enemy;

				if (nme.visitingShop() != null) {
					return false;
				}

				break;
			}
			case TYPE_MOBILE:
				// free for all?
				// FIXME: can mobiles attackEnemy mobiles?  check ai logic
				break;
			case TYPE_PET:
				return false;
		}
		return super.canAttackEnemy(enemy);
	}

	@Override
	public void send(DuskMessage msg) {
		// don't care except for debugging?
	}

	@Override
	public void chatMessage(Active from, String clan, String msg) {
		// don't care except for debugging?
		System.out.println("mob: " + name + "=" + msg);
	}

	@Override
	protected boolean moveTo(int newx, int newy, int newstep) {
		// So, this I just don't get, shouldn't it already be checked in the 'can move to' stuff somewhere?
		// This checks that the mob doesn't go out of it's home area
		// Maybe it's so that path finding works
		if (Math.abs(newx - homeX) > game.viewRange
				|| Math.abs(newy - homeY) > game.viewRange)
			return false;

		return super.moveTo(newx, newy, newstep);
	}

	/**
	 * Noop, mob weapons invincible
	 *
	 * @param amount
	 */
	@Override
	public void weaponDamage(int amount) {
		// noop
	}

	@Override
	public void armourDamage(int damage) {
		// noop
	}

	/**
	 * Enemy out of range, mob will try to get closer to target,
	 * if they are not already moving.
	 *
	 * @param target
	 */
	@Override
	public void attack(Battle battle, Active target, int range) {
		// FIXME: Invoke "onBatte"

		if (range > getRangeWithBonus()) {
			battle.chatMessage(name + " is out of range, moving closer.  distance=" + range + " range=" + getRangeWithBonus() + " moveable=" + isMoveable());
			travelTo(target.x, target.y, false);
		} else {
			clearMoveQueue();
			super.attack(battle, target, range);
		}
	}

	@Override
	public void killedBattle(Battle battle, Active winner, ArrayList<Active> opponents) {
		chatMessage(this.name + " is killed.");
		splitMoney(1, opponents);
		splitExp(0, opponents);

		// FIXME: respawnspeed
		respawn = 100;
		map.removeEntity(this);
		endBattle();

		for (Active a : opponents) {
			switch (a.getType()) {
				case TYPE_PET:
					break;
				case TYPE_PLAYER:
				case TYPE_MOBILE:
					if (faction != null) {
						faction.killedByEnemy(this, a);
					}
					break;
			}
		}
		if (winner.isPlayer()) {
			System.out.println("Player won, checking give items");
			for (GiveItem gi : giveItems) {
				System.out.println(" item " + gi.name + " prob " + gi.probability);
				if (Math.random() < gi.probability) {
					Holdable h = game.createItem(gi.name);

					winner.chatMessage("You got a " + h.name + ".");
					winner.addItem(h);
				}
			}
		}
	}

	@Override
	public void endBattle() {
		super.endBattle();
	}

	@Override
	public void sayCommand(String text) {
		localisedChat("Mob " + name + " says: " + text);
	}

	void respawn() {
		respawn = 0;
		x = homeX;
		y = homeY;
		setStat(STAT_HP, getHPMax());
		setStat(STAT_MP, getMPMax());

		map.addEntity(this);
	}

	@Override
	public void tick(int tick) {

		if (respawn == 1) {
			respawn();
		} else if (respawn > 0) {
			respawn -= 1;
			return;
		}

		LinkedList l;

		if (tick % 4 == 0) {
			if (faction != null && canSeePlayer) {
				faction.runAI(this);
			}
		}

		super.tick(tick);
	}

	@Override
	public void visibilityTick(int tick) {
		if (respawn > 0)
			return;

		boolean seePlayer = false;

		for (TileMap<Thing>.MapData md : map.range(x, y, game.viewRange)) {
			if (!md.entities.isEmpty() && canSee(md.x, md.y)) {
				for (Thing thing : md.entities) {
					if (thing instanceof Player)
						seePlayer = true;
				}
			}
		}
		canSeePlayer = seePlayer;
	}

	static class GiveItem {

		String name;
		double probability;

		public GiveItem(String name, double probability) {
			this.name = name;
			this.probability = probability;
		}
	}
}
