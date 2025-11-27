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
 * Feb-2013 Michael Zucchi - Pretty major cleanup and parameterisation of code.
 * Mar-2013 Michael Zucchi - changed server protocol
 * Mar-2013 Michael Zucchi - big refactor, moved most of the logic to Active
 *
 */
package duskz.server.entityz;

import duskz.protocol.DuskProtocol;
import duskz.protocol.ListMessage;
import java.util.ArrayList;

/**
 * Battle represents a fight between two sides comprised of Actives.
 *
 * TODO: Remove the general chat stuff and use specific message types where appropriate
 *
 * @author Tom Weingarten
 */
public class Battle implements DuskProtocol {

	private ArrayList<Active> side1 = new ArrayList<>(),
			side2 = new ArrayList<>();
	private Game game;
	private boolean fighting = true,
			playerInSide1 = false,
			playerInSide2 = false;
	/**
	 * Track players who left during this turn
	 */
	private ArrayList<Active> left = new ArrayList<>();
	/**
	 * Players who joined during the last turn
	 */
	private ArrayList<Active> joined = new ArrayList<>();

	public Battle(Game game, Active inpla1, Active inpla2) {
		try {
			this.game = game;

			for (Active a : inpla2.getPackMembers()) {
				playerInSide2 = addToBattle(2, side2, side1, a, playerInSide2, playerInSide1);
			}
			for (Active a : inpla1.getPackMembers()) {
				playerInSide1 = addToBattle(1, side1, side2, a, playerInSide1, playerInSide2);
			}

			inpla1.localisedChat("-" + inpla1.name + " has attacked " + inpla2.name);
			//	FIXME: inpla1.startBattle(inpla2);
			//	inpla2.startBattle(inpla1);
		} catch (Exception e) {
			fighting = false;
			System.out.println("erorr in battle new: " + e);
			//	game.log.printError("Battle()", e);
		}
	}

	public boolean isFighting() {
		return fighting;
	}

	public int getSide(Active thing) {
		if (side1.contains(thing))
			return 1;
		if (side2.contains(thing))
			return 2;
		return 0;
	}

	/*
	 * Used in scripts
	 */
	public static Active getEnemy(Active lt) {
		return null;
		//	if (lt.battleSide == 1) {
		//		return (Active) lt.battle.vctSide2.get(0);
		//	} else if (lt.battleSide == 2) {
		//		return (Active) lt.battle.vctSide1.get(0);
		//	} else {
		//		return null;
		//	}
	}

	public void addToBattle(Active lt, int side) {
		if (side == 1) {
			playerInSide1 = addToBattle(1, side1, side2, lt, playerInSide1, playerInSide2);
		} else {
			playerInSide2 = addToBattle(2, side2, side1, lt, playerInSide2, playerInSide1);
		}
	}

	boolean addToBattle(int sideid, ArrayList<Active> side, ArrayList<Active> opponents, Active added, boolean playerSide, boolean playerOpponent) {
		if (added.isPlayer()) {
			// This is already checked: do I need to do it again??
			// FIXME: yes i do, or some variation of it.

			/*
			 if (playerOpponent) {
			 if (added.clan.equals("none")) {
			 added.chatMessage("Players who are not in clans cannot fight other players.");
			 added.removeFromGroup();
			 return playerSide;
			 }
			 Active thnStore = side.get(0);
			 if (thnStore.clan.equals("none")) {
			 added.chatMessage("Players who are not in clans cannot fight other players.");
			 added.removeFromGroup();
			 return playerSide;
			 }
			 }*/
			playerSide = true;
			// FIXME: put in enterBattle?
			//if (game.blnMusic) {
			//	added.playMusic(1);
			//}
		}
		chatMessage(added.name + " has joined the battle.");
		side.add(added);

		added.enterBattle(this);

		joined.add(added);

		return playerSide;
	}

	/**
	 * Attack everything in side1 against side2
	 *
	 * @param list1
	 * @param list2
	 * @return true if the battle continues
	 */
	boolean attackSide(ArrayList<Active> list1, ArrayList<Active> list2, ArrayList<Active> fled) {
		int range;
		Active target;
		StringBuilder msg = new StringBuilder();

		checkCommands(list1, list2, fled);
		if (list1.isEmpty()) {
			endBattle();
			return false;
		}

		for (Active attackor : list1) {
			msg.setLength(0);

			// run attackEnemy script, now in attackor.attack()
			//attackor.onFight();

			/**
			 * Find the nearest target.
			 *
			 * Allow them to move if they are not in
			 * direct contact with any opponent.
			 *
			 * TODO: should this use the attack range instead?
			 *
			 */
			range = Integer.MAX_VALUE;
			target = null;
			for (Active t : list2) {
				int distance = attackor.distanceL1(t);
				if (distance < range) {
					range = distance;
					target = t;
				}
			}
			attackor.setMoveable(range > 1);

			/*
			 End the battle if the closest target is off of the screen.
			 */
			if (range > game.viewRange) {
				endBattle();
				return false;
			}

			attackor.attack(this, target, range);
		}
		return true;
	}

	void endBattle(ArrayList<Active> list) {
		for (Active lt : list) {
			lt.endBattle();
		}
	}

	void endBattle() {
		fighting = false;
		chatMessage("You have won the battle.");
		endBattle(side1);
		endBattle(side2);
	}

	void flee(Active thing, ArrayList<Active> list, ArrayList<Active> opponents, ArrayList<Active> fled) {
		fled.add(thing);
		list.remove(thing);

		thing.fleeBattle(this, opponents);

		if (side2.size() == 0 || side1.size() == 0) {
			endBattle();
			return;
		}
	}

	void chatMessage(ArrayList<Active> side1, ArrayList<Active> side2, String msg) {
		for (Active a : side1) {
			a.chatBattle(msg);
		}
	}

	void chatMessage(String strStore) {
		chatMessage(side1, side2, strStore);
		chatMessage(side2, side1, strStore);
	}

	void battleMessage(ArrayList<Active> side1, ListMessage lm) {
		for (Active a : side1) {
			a.send(lm);
			//} else if (a.isPet()) {
			//	if (a.getMaster().battle != a.battle) {
		}
	}

	/**
	 * New battle interface with more detailed messages
	 *
	 * @param type
	 * @param msg
	 */
	void battleMessage(ListMessage msg) {
		battleMessage(side1, msg);
		battleMessage(side2, msg);
	}

	void hitMessage(Active attackor, Active attackee, int delta, String what) {
		ListMessage lm = new ListMessage(MSG_BATTLE_UPDATE);

		lm.add(FIELD_BATTLE_TARGET, attackee.ID);
		lm.add(FIELD_BATTLE_DAMAGE, delta);
		lm.add(FIELD_BATTLE_HP, attackee.getHP());
		lm.add(FIELD_BATTLE_MAXHP, attackee.getHPMax());
		lm.add(FIELD_BATTLE_SOURCE, attackor.ID);
		lm.add(FIELD_BATTLE_WHAT, what);
		battleMessage(lm);
	}

	void checkCommands(ArrayList<Active> list, ArrayList<Active> opponents, ArrayList<Active> fled) {
		for (Active lt : list) {
			String[] argv = lt.pollBattleCommand();

			if (argv != null) {
				switch (argv[0]) {
					case "flee":
						flee(lt, list, opponents, fled);
						break;
					case "cast":
						lt.castCommand(argv[1]);
						break;
					case "use":
						lt.useCommand(argv[1]);
						break;
					case "eat":
						lt.eatCommand(argv[1]);
						break;
					case "drink":
						lt.drinkCommand(argv[1]);
						break;
				}
			}
		}
	}

	void checkDeath(ArrayList<Active> list1, ArrayList<Active> list2, ArrayList<Active> killed) {
		// FIXME: verify this works.  this protects the second call 
		if (list1.isEmpty() || list2.isEmpty())
			return;

		Active front1 = list1.get(0);
		Active front2 = list2.get(0);

		if (front2.getHP() <= 0 || !front2.isAlive()) {
			list2.remove(0);

			killed.add(front2);

			front2.killedBattle(this, front1, list1);
		}
	}

	void endTurn(ArrayList<Active> list1, ArrayList<Active> joined, ArrayList<Active> left) {
		for (Active a : list1) {
			a.endBattleTurn(this, joined, left);
		}
	}

	public void run() {

		if (!attackSide(side1, side2, left)) {
			return;
		}
		if (!attackSide(side2, side1, left)) {
			return;
		}

		checkDeath(side1, side2, left);
		checkDeath(side2, side1, left);

		if (side2.isEmpty() || side1.isEmpty()) {
			endBattle();
			return;
		}

		endTurn(side1, joined, left);
		endTurn(side2, joined, left);
	}

	/**
	 * Must only be called from a battle callback or internally
	 *
	 * @param thing
	 */
	void removeParticipant(Active thing) {
		side1.remove(thing);
		side2.remove(thing);
		left.remove(thing);
	}
}
