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
 */
package duskz.server;

import duskz.protocol.DuskProtocol;
import duskz.protocol.ListMessage;
import duskz.server.entity.Mob;
import duskz.server.entity.LivingThing;
import duskz.server.entity.Item;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;

/**
 * Battle represents a fight between two sides comprised of LivingThings.
 *
 * TODO: Remove the general chat stuff and use specific message types where appropriate
 *
 * @author Tom Weingarten
 */
public class Battle implements DuskProtocol {

	private ArrayList<LivingThing> vctSide1 = new ArrayList<>(),
			vctSide2 = new ArrayList<>();
	DuskEngine engGame;
	boolean blnRunning = true,
			blnPlayerSide1 = false,
			blnPlayerSide2 = false;
	private HashMap<Long, LinkedList<String>> commands = new HashMap<>();

	Battle(LivingThing inpla1, LivingThing inpla2, DuskEngine inengGame) {
		LivingThing thnFront1,
				thnFront2;
		try {
			engGame = inengGame;
			thnFront2 = inpla2;
			while (thnFront2 != null) {
				blnPlayerSide2 = addToBattle(2, vctSide2, vctSide1, thnFront2, blnPlayerSide2, blnPlayerSide1);
				//addToBattle(thnFront2, 2);
				thnFront2 = thnFront2.getFollowing();
			}
			thnFront2 = inpla2.getMaster();
			while (thnFront2 != null) {
				blnPlayerSide2 = addToBattle(2, vctSide2, vctSide1, thnFront2, blnPlayerSide2, blnPlayerSide1);
				//addToBattle(thnFront2, 2);
				thnFront2 = thnFront2.getMaster();
			}
			thnFront2 = inpla2;
			thnFront1 = inpla1;
			while (thnFront1 != null) {
				//addToBattle(thnFront1, 1);
				blnPlayerSide1 = addToBattle(1, vctSide1, vctSide2, thnFront1, blnPlayerSide1, blnPlayerSide2);
				thnFront1 = thnFront1.getFollowing();
			}
			thnFront1 = inpla1.getMaster();
			while (thnFront1 != null) {
				blnPlayerSide1 = addToBattle(1, vctSide1, vctSide2, thnFront1, blnPlayerSide1, blnPlayerSide2);
				//addToBattle(thnFront1, 1);
				thnFront1 = thnFront1.getMaster();
			}
			thnFront1 = inpla1;
			engGame.chatMessage(inpla1.map, "-" + inpla1.name + " has attacked " + inpla2.name, inpla1.x, inpla1.y, "default");
			inpla1.startBattle(inpla2);
			inpla2.startBattle(inpla1);
		} catch (Exception e) {
			blnRunning = false;
			engGame.log.printError("Battle()", e);
		}
	}

	public static LivingThing getEnemy(LivingThing lt) {
		if (lt.battleSide == 1) {
			return (LivingThing) lt.battle.vctSide2.get(0);
		} else if (lt.battleSide == 2) {
			return (LivingThing) lt.battle.vctSide1.get(0);
		} else {
			return null;
		}
	}

	public void addToBattle(LivingThing lt, int side) {
		if (side == 1) {
			blnPlayerSide1 = addToBattle(1, vctSide1, vctSide2, lt, blnPlayerSide1, blnPlayerSide2);
		} else {
			blnPlayerSide2 = addToBattle(2, vctSide2, vctSide1, lt, blnPlayerSide2, blnPlayerSide1);
		}
	}

	boolean addToBattle(int sideid, ArrayList<LivingThing> side, ArrayList<LivingThing> opponents, LivingThing thnAdded, boolean playerSide, boolean playerOpponent) {
		if (thnAdded.isPlayer()) {
			if (playerOpponent) {
				if (thnAdded.clan.equals("none")) {
					thnAdded.chatMessage("Players who are not in clans cannot fight other players.");
					thnAdded.removeFromGroup();
					return playerSide;
				}
				LivingThing thnStore = side.get(0);
				if (thnStore.clan.equals("none")) {
					thnAdded.chatMessage("Players who are not in clans cannot fight other players.");
					thnAdded.removeFromGroup();
					return playerSide;
				}
			}
			playerSide = true;
			if (engGame.blnMusic) {
				thnAdded.playMusic(1);
			}
		}
		chatMessage(thnAdded.name + " has joined the battle.");
		side.add(thnAdded);
		thnAdded.enterBattle(this, sideid);

		for (LivingThing lt : side) {
			if (lt.highlight) {
				lt.updateFlag(thnAdded.ID, 1);
			}
			if (thnAdded.highlight) {
				thnAdded.updateFlag(lt.ID, 1);
			}
		}
		for (LivingThing lt : opponents) {
			if (lt.highlight) {
				lt.updateFlag(thnAdded.ID, 2);
			}
			if (thnAdded.highlight) {
				thnAdded.updateFlag(lt.ID, 2);
			}
		}
		return playerSide;
	}

	String attack(LivingThing attackor, LivingThing attackee, int range, String s) {
		// The farther away the target, the harder they are to hit.
		// The more skilled the attecker is in ranged combat, the less range affects ability to hit.
		// The farther away the target, the easier it is for them to dodge.
		// The more skilled the attecker is in ranged combat, the harder it is for the target to dodge.
		int r2 = 0;
		if (range > 1) {
//			r2= thnAttacking.getSkill("ranged combat") - (int)((range * range - 1) * (double)(100/engGame.viewrange));
			r2 = attackor.getSkill("ranged combat");
		} else {
			r2 = attackor.getSkill("close combat");
		}
		if (r2 < 0) {
			s += attackor.name + " missed.";
			hitMessage(attackee.getID(), 0, attackee.hp, attackee.maxhp, attackor.getID(), "Missed!");
		} else if (dodge(attackor, attackee, r2)) {
			s += attackee.name + " dodged " + attackor.name + "'s attack";
			hitMessage(attackee.getID(), 0, attackee.hp, attackee.maxhp, attackor.getID(), "Dodged!");
		} else {
			if (engGame.battlesound != -1) {
				engGame.playSound(attackor.map, engGame.battlesound, attackee.x, attackee.y);
			}
			int i = damRoll(attackor, attackee, range);
			if (i < 0) {
				i = 0;
			}
			s += attackor.name + " did " + i + " to " + attackee.name;
			attackee.hp -= i;
			attackor.damageDone += i;
			attackor.weaponDam(i);
			attackee.armorDam(i);

			hitMessage(attackee.getID(), i, attackee.hp, attackee.maxhp, attackor.getID(), "Hit!");
		}
		return s;
	}

	/**
	 * Attack everything in side1 against side2
	 *
	 * @param list1
	 * @param list2
	 * @return true if the battle continues
	 */
	boolean attackSide(ArrayList<LivingThing> list1, ArrayList<LivingThing> list2) {
		int range;
		LivingThing target;
		String msg;

		checkCommands(list1, list2);
		if (list1.isEmpty()) {
			endBattle();
			return false;
		}

		for (LivingThing attackor : list1) {
			msg = "";
			if (attackor.isMob()) {
				Mob mobStore = (Mob) attackor;
				mobStore.onBattle(engGame);
			}

			range = Integer.MAX_VALUE;
			target = null;
			attackor.isMoveable = true;
			for (LivingThing t : list2) {
				int distance = attackor.distance(t);
				if (distance < range) {
					range = distance;
					target = t;
				}
				/*
				 They are allowed to move until they are at a range of 1 or less with any target
				 */
				t.isMoveable = true;
				if (attackor.adjacent(t)) {
					attackor.isMoveable = false;
					t.isMoveable = false;
				}
			}

			/*
			 End the battle if the closest target is off of the screen.
			 */
			if (range > engGame.viewrange) {
				endBattle();
				return false;
			}
			if (range > attackor.getRangeWithBonus()) {
				msg = attackor.name + " is out of range.\n";
				if (attackor.isMob() && !attackor.hasPendingMoves()) // if mob, try to go to the enemy to fight them
				{
					attackor.goTo(target.x, target.y, false);
				}
			} else {
				if (attackor.isMob())
					attackor.clearMoveQueue();
				msg = attack(attackor, target, range, msg);
				if (((Math.random() * 100) + 1) < attackor.getSkill("double attack")) {
					msg += ",";
					msg = attack(attackor, target, range, msg);
				}
				if (((Math.random() * 100) + 1) < attackor.getSkill("triple attack")) {
					msg += ",";
					msg = attack(attackor, target, range, msg);
				}
				if (((Math.random() * 100) + 1) < attackor.getSkill("quadruple attack")) {
					msg += ",";
					msg = attack(attackor, target, range, msg);
				}
				msg += ".";
			}
			chatMessage(msg);
		}
		return true;
	}

	int damRoll(LivingThing attacker, LivingThing thnAttacked, int range) {
		int attackerTotal = attacker.stre + attacker.strebon;
		return (int) (((double) (attackerTotal) / 2) * (Math.random() + 0.5) * (attacker.getDamModWithBonus() / 100) - (thnAttacked.getArmorModWithBonus()));
	}

	boolean dodge(LivingThing attacker, LivingThing thnAttacked, int attackModifier) {
		int attackedTotal = thnAttacked.dext + thnAttacked.dextbon;
		if (attackedTotal > 100) {
			attackedTotal = 100;
		}
		int attackerTotal = attacker.dext + attacker.dextbon + attackModifier;
		if (attackerTotal > 100) {
			attackerTotal = 100 + attackModifier;
		}
		return ((Math.random() * 100) < ((thnAttacked.getSkill("Dodge") * .75) + (.25 * (attackedTotal - attackerTotal))));
	}

	void endBattle(ArrayList<LivingThing> list) {
		for (LivingThing lt : list) {
			lt.clearFlags();
			lt.battle = null;
			lt.battleSide = 0;
			lt.isMoveable = true;
			lt.updateInfo();
			lt.updateStats();
			lt.updateActions();
			lt.playMusic(0);
		}
	}

	void endBattle() {
		blnRunning = false;
		chatMessage("You have won the battle.");
		endBattle(vctSide1);
		endBattle(vctSide2);
	}

	void flee(LivingThing thnStore, ArrayList<LivingThing> list, ArrayList<LivingThing> opponents) {
		thnStore.clearFlags();

		updateFlagsSelf(vctSide1, 0);
		updateFlagsSelf(vctSide2, 0);

		if (thnStore.getFollowing() != null && thnStore.getFollowing().isPet()) {
			if (thnStore.getMaster() != null) {
				thnStore.getMaster().setFollowing(thnStore.getFollowing().getFollowing());
			}
			if (thnStore.getFollowing().getFollowing() != null) {
				thnStore.getFollowing().getFollowing().setMaster(thnStore.getMaster());
			}
		} else {
			if (thnStore.getMaster() != null) {
				thnStore.getMaster().setFollowing(thnStore.getFollowing());
			}
			if (thnStore.getFollowing() != null) {
				thnStore.getFollowing().setMaster(thnStore.getMaster());
			}
		}
		list.remove(thnStore);
		thnStore.chatBattle("You have fled from battle");
		splitMoney(thnStore, (int) (thnStore.cash * engGame.gpfleemod), opponents);
		splitExp(thnStore, (int) (thnStore.exp * engGame.expfleemod), opponents);
		thnStore.leaveBattle();
		thnStore.updateInfo();
		thnStore.updateStats();
		thnStore.updateActions();
		thnStore.playMusic(0);
		if (thnStore.getFollowing() != null && thnStore.getFollowing().isPet()) {
			list.remove(thnStore.getFollowing());
			updateFlags(vctSide1, thnStore.getFollowing().ID, 0);
			updateFlags(vctSide2, thnStore.getFollowing().ID, 0);
			thnStore.getFollowing().leaveBattle();
		}
		if (vctSide2.size() == 0 || vctSide1.size() == 0) {
			endBattle();
			return;
		}
	}

	void splitMoney(LivingThing thnStore, int money, ArrayList<LivingThing> opponents) {
		if (money == 0) {
			return;
		}
		thnStore.chatBattle("You have lost " + money + " gp.");
		// FIXME: atm's need transactions!
		thnStore.cash -= money;
		int i,
				i2 = 0;
		LivingThing thnStore2;
		try {
			/*
			 for (i=0;i<vctStore.size();i++)
			 {
			 thnStore2 = (LivingThing)vctStore.elementAt(i);
			 // added  "|| thnStore2.isPet()"
			 if (thnStore2.isPlayer() || thnStore2.isPet())
			 {
			 i2++;
			 }
			 }
			 i2 = money/i2;
			 */
			i2 = money / opponents.size();
			for (i = 0; i < opponents.size(); i++) {
				thnStore2 = (LivingThing) opponents.get(i);
				thnStore2.cash += i2;
				if (thnStore2.isPlayer() && i2 != 0) {
					thnStore2.chatMessage("\tYou get " + i2 + " gp.");
				}
			}
		} catch (Exception e) {
			engGame.log.printError("splitMoney()", e);
		}
	}

	void splitExp(LivingThing thnFront, int exp, ArrayList<LivingThing> opponents) {
		thnFront.chatBattle("You have lost " + exp + " exp.");
		thnFront.exp -= exp;
		double tp,
				sidepoints = 0;
		//LivingThing thnFront;
		//if (thnFront.bytSide == 1) {
		//	thnFront = vctSide1.get(0);
		//} else {
		//	thnFront = vctSide2.get(0);
		//}
		int i,
				i2 = 0;
		LivingThing thnStore2;

		tp = thnFront.getTotalPoints();
		thnFront.damageDone = 0;
		for (i = 0; i < opponents.size(); i++) {
			thnStore2 = (LivingThing) opponents.get(i);
// added  "|| thnStore2.isPet()"
// and changed "thnStore.getTotalPoints()" to "thnStore2.getTotalPoints()"
//			if (thnStore2.isPlayer() || thnStore2.isPet())
//			{
			sidepoints += thnStore2.getTotalPoints();
//			}
		}
		try {
			for (i = 0; i < opponents.size(); i++) {
				i2 = 0;
				thnStore2 = (LivingThing) opponents.get(i);
				if (!thnStore2.isMob()) {
					if (thnStore2.damageDone > thnFront.maxhp) {
						thnStore2.damageDone = thnFront.maxhp;
					}
					i2 = (int) (engGame.expgainmod
							* (((tp / sidepoints)
							+ (2 * (thnStore2.damageDone / (double) thnFront.maxhp) * (tp / (double) thnStore2.getTotalPoints()))) / 3));
					thnStore2.chatMessage("You get " + i2 + " exp.");
					thnStore2.exp += i2;
				}
				thnStore2.damageDone = 0;
			}
		} catch (Exception e) {
			engGame.log.printError("splitExp()", e);
		}
	}

	void chatMessage(ArrayList<LivingThing> side1, ArrayList<LivingThing> side2, String strStore) {
		LivingThing thnStore = null;
		//String strStore2 = null;
		//if (!side2.isEmpty()) {
		//	thnStore = (LivingThing) side2.get(0);
		//	strStore2 = thnStore.name + " has " + thnStore.getCharacterPoints() + "cp and " + thnStore.hp + "/" + thnStore.maxhp + "hp.";
		//}
		for (int i = 0; i < side1.size(); i++) {
			thnStore = (LivingThing) side1.get(i);
			if (thnStore.isPlayer()) {
				//thnStore.send(MessageType.UpdateBattle, strStore2 + "\n");
				//thnStore.send(MessageType.LogBattle, strStore + "\n");
				thnStore.chatBattle(strStore);
			} else if (thnStore.isPet()) {
				if (thnStore.getMaster().battle != thnStore.battle) {
					//thnStore.getMaster().send(MessageType.UpdateBattle, "From " + thnStore.name + ": " + strStore2 + "\n");
					//thnStore.getMaster().send(MessageType.LogBattle, "From " + thnStore.name + ": " + strStore + "\n");
					thnStore.chatBattle(strStore);
				}
			}
		}
	}

	void chatMessage(String strStore) {
		chatMessage(vctSide1, vctSide2, strStore);
		chatMessage(vctSide2, vctSide1, strStore);
	}

	void battleMessage(ArrayList<LivingThing> side1, ListMessage lm) {
		for (LivingThing thnStore : side1) {
			if (thnStore.isPlayer()) {
				thnStore.send(lm);
			} else if (thnStore.isPet()) {
				if (thnStore.getMaster().battle != thnStore.battle) {
					thnStore.send(lm);
				}
			}
		}
	}

	/**
	 * New battle interface with more detailed messages
	 *
	 * @param type
	 * @param msg
	 */
	void battleMessage(ListMessage msg) {
		battleMessage(vctSide1, msg);
		battleMessage(vctSide2, msg);
	}

	void hitMessage(long targetid, int delta, int targethp, int targettotalhp, long fromid, String what) {
		ListMessage lm = new ListMessage(MSG_BATTLE_UPDATE);

		lm.add(FIELD_BATTLE_TARGET, targetid);
		lm.add(FIELD_BATTLE_DAMAGE, delta);
		lm.add(FIELD_BATTLE_HP, targethp);
		lm.add(FIELD_BATTLE_MAXHP, targettotalhp);
		lm.add(FIELD_BATTLE_SOURCE, fromid);
		lm.add(FIELD_BATTLE_WHAT, what);
		battleMessage(lm);
	}

	/**
	 * Add a command to a current battle
	 *
	 * @param lt
	 * @param cmd
	 */
	public void addCommand(LivingThing lt, String cmd) {
		synchronized (commands) {
			LinkedList<String> clist = commands.get(lt.ID);
			if (clist == null) {
				clist = new LinkedList<>();
				commands.put(lt.ID, clist);
			}
			clist.add(cmd);
		}
	}

	/**
	 * Add an expidited command to the current battle. i.e. flee
	 *
	 * @param lt
	 * @param cmd
	 */
	public void addFirstCommand(LivingThing lt, String cmd) {
		synchronized (commands) {
			LinkedList<String> clist = commands.get(lt.ID);
			if (clist == null) {
				clist = new LinkedList<>();
				commands.put(lt.ID, clist);
			}
			clist.addFirst(cmd);
		}
	}

	void checkCommands(ArrayList<LivingThing> list, ArrayList<LivingThing> opponents) {
		for (LivingThing lt : list) {
			String cmd = null;
			synchronized (commands) {
				LinkedList<String> clist = commands.get(lt.ID);
				if (clist != null) {
					cmd = clist.removeFirst();
				}
			}
			if (cmd != null) {
				if (cmd.equalsIgnoreCase("flee")) {
					flee(lt, list, opponents);
				} else if (cmd.startsWith("cast ")) {
					cmd = cmd.substring(5, cmd.length());
					lt.castSpell(cmd);
				} else if (cmd.startsWith("use ")) {
					cmd = cmd.substring(4, cmd.length());
					lt.useItem(cmd, -1);
				} else if (cmd.startsWith("eat ")) {
					cmd = cmd.substring(4, cmd.length());
					lt.useItem(cmd, Item.FOOD);
				} else if (cmd.startsWith("drink ")) {
					cmd = cmd.substring(6, cmd.length());
					lt.useItem(cmd, Item.DRINK);
				}
			}
		}
	}

	void update(ArrayList<LivingThing> list) {
		for (LivingThing lt : list) {
			if (lt.isPlayer()) {
				lt.updateInfo();
				lt.updateStats();
			}
		}
	}

	void update() {
		update(vctSide1);
		update(vctSide2);
	}

	void updateFlags(ArrayList<LivingThing> list, long ID, int flag) {
		for (LivingThing lt : list) {
			lt.updateFlag(ID, flag);
		}
	}

	void updateFlagsSelf(ArrayList<LivingThing> list, int flag) {
		for (LivingThing lt : list) {
			lt.updateFlag(lt.ID, flag);
		}
	}

	void checkDeath(ArrayList<LivingThing> vctSide1, ArrayList<LivingThing> vctSide2) {
		// FIXME: verify this works.  this protects the second call 
		if (vctSide1.isEmpty() || vctSide2.isEmpty())
			return;

		LivingThing thnFront1 = vctSide1.get(0);
		LivingThing thnFront2 = vctSide2.get(0);

		if (thnFront2.hp < 1 || !thnFront2.isWorking) {
			vctSide2.remove(0);

			System.out.println(thnFront2 + " died\nRemaining in fight:");
			for (LivingThing lt : vctSide2) {
				System.out.println(" " + lt);
			}

			thnFront2.clearFlags();
			updateFlags(vctSide1, thnFront2.ID, 0);
			updateFlags(vctSide2, thnFront2.ID, 0);
			if (thnFront2.isPlayer()) {
				thnFront2.removeFromGroup();
				chatMessage(thnFront2.name + " is killed.");
				thnFront2.chatBattle("You have died.");
				splitMoney(thnFront2, (int) (thnFront2.cash * engGame.gplosemod), vctSide1);
				splitExp(thnFront2, (int) (thnFront2.exp * engGame.explosemod), vctSide1);
				thnFront2.leaveBattle();
				thnFront2.updateInfo();
				thnFront2.updateStats();
				thnFront2.updateActions();
				thnFront2.playMusic(0);
				engGame.chatMessage(thnFront2.name + " has been killed by " + thnFront1.name, "default");
				if (engGame.scrOnDeath != null && thnFront2.isWorking) {
					engGame.scrOnDeath.varVariables.clearVariables();
					engGame.scrOnDeath.varVariables.addVariable("trigger", thnFront2);
					engGame.scrOnDeath.varVariables.addVariable("killer", thnFront1);
					engGame.scrOnDeath.runScript();
				}
				if (thnFront2.getFollowing() != null && thnFront2.getFollowing().isPet()) {
					vctSide2.remove(thnFront2.getFollowing());
					updateFlags(vctSide1, thnFront2.getFollowing().ID, 0);
					updateFlags(vctSide2, thnFront2.getFollowing().ID, 0);
					thnFront2.getFollowing().leaveBattle();
					thnFront2.getFollowing().damageDone = 0;
					thnFront2.getFollowing().changeLocBypass(thnFront2.map, thnFront2.x, thnFront2.y);
				}
			} else if (thnFront2.isMob()) {
				Mob mob = (Mob) thnFront2;
				chatMessage(thnFront2.name + " is killed.");
				splitMoney(thnFront2, (int) (thnFront2.cash), vctSide1);
				splitExp(thnFront2, 0, vctSide1);
				/**
				 * FIXME: Mobs are not fully removed from the game when they die.
				 * This seems very questionable, shouldn't they just be changed
				 * to "dead"?
				 */
				mob.leaveBattle();
				//		if (mob.blnOneUse) {
				//			engGame.removeDuskObject(mob);
				//		} else {
				//			//engGame.removeDuskObject(mob);
				//			// Marks mob as "dead"
				//			mob.leaveBattle();
				//		}
				for (LivingThing lt : vctSide1) {
					if (!lt.isPet()) {
						try {
							mob.fctFaction.killedBy(mob, lt);
						} catch (Exception e) {
							engGame.log.printError("Battle.run():While updating faction for mob " + mob.name, e);
						}
					}
				}
				if (thnFront1.isPlayer()) {
					Item itmStore;
					for (GiveItem gitStore : mob.vctGiveItems) {
						if (Math.random() < gitStore.dblProbability) {
							itmStore = engGame.getItem(gitStore.strItemName);
							if (itmStore != null) {
								// FIXME: giveItem() on livingthing?
								thnFront1.chatMessage("You got a " + gitStore.strItemName + ".");
								thnFront1.itemList.addElement(itmStore);
								itmStore.onGetItem(engGame, thnFront1);
								thnFront1.updateItems();
							}
						}
					}
				}
			} else if (thnFront2.isPet()) {
				chatMessage(thnFront2.name + " is wounded.");
				thnFront2.chatMessage("You have been wounded.");
				splitMoney(thnFront2, (int) (thnFront2.cash * engGame.gplosemod), vctSide1);
				splitExp(thnFront2, (int) (thnFront2.exp * engGame.explosemod), vctSide1);
				thnFront2.leaveBattle();
			}
			//if (!vctSide2.isEmpty()) {
			//	thnFront2 = vctSide2.get(0);
			//}
		}
	}

	public void run() {
		if (!attackSide(vctSide1, vctSide2)) {
			return;
		}
		if (!attackSide(vctSide2, vctSide1)) {
			return;
		}

		checkDeath(vctSide1, vctSide2);
		checkDeath(vctSide2, vctSide1);

		if (vctSide2.isEmpty() || vctSide1.isEmpty()) {
			endBattle();
			return;
		}
		update();
	}
}
