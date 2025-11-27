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
 * Feb-2013 Michael Zucchi - Moved to new object structure/clean up.
 */
/**
 * a Faction represents a group of mobs.
 *
 * @author Tom Weingarten
 */
package duskz.server.entityz;

import duskz.map.TileMap;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.HashMap;

/**
 * Faction is a group of mobs. TODO: should it override/merge the normal group thing
 */
public class Faction {

	final public String name;
	/**
	 * This is keyed on both player names and clans. Seems it should be two
	 * separate tables
	 */
	private final HashMap<String, Relation> relations = new HashMap<>();
	private Game game;
	private boolean changed = false;

	public Faction(String name, Game game) {
		this.name = name;
		this.game = game;
	}

	public void load() throws IOException {
		// FIXME: chagne faction format
		File file = new File(game.getRoot(), "factions/" + name);
		try (BufferedReader br = new BufferedReader(new FileReader(file))) {
			String line = br.readLine();
			while (line != null && !line.equals(".")) {
				if (line.equalsIgnoreCase("relation")) {
					Relation r = new Relation(br.readLine(), Double.valueOf(br.readLine()));
					relations.put(r.name, r);
				}
				line = br.readLine();
			}
		}
	}

	synchronized void saveFactionData() {
		/*
		 ** Only save faction data if it has changed.
		 */
		if (!changed) {
			return;
		}
		File file = new File(game.getRoot(), "factions/" + name);
		try (BufferedWriter bw = new BufferedWriter(new FileWriter(file))) {
			for (Relation r : relations.values()) {
				bw.write("relation\n" + r.name + "\n" + r.level + "\n");
			}
			bw.write(".\n");
			changed = false;
		} catch (IOException e) {
			//game.log.printError("saveFactionData()", e);
		}
	}

	double getRelationValue(String name) {
		Relation r = relations.get(name.toLowerCase());

		return r != null ? r.level : 0;
	}

	Relation getRelation(String name) {
		return relations.get(name.toLowerCase());
	}

	boolean updateRelation(String name, int delta) {
		Relation rel = getRelation(name);

		if (rel == null) {
			rel = new Relation(name, 0);
			relations.put(name, rel);
		}

		return rel.updateRelation(delta);
	}

	void killedByEnemy(Mobile died, Active killer) {
		if (game.isPreference(Game.PREF_AI)) {
			int delta = killer.getCP() - died.getCP();

			changed |= updateRelation(killer.name, delta);

			if (killer.clan != null && !killer.clan.equals("none")) {
				changed |= updateRelation(killer.clan, delta);
			}
		}
	}

	void runAI(Mobile mob) {
		if (!game.isPreference(Game.PREF_AI)) {
			mob.canSeePlayer = false;
			return;
		}

		//Battle AI (inside Battle class)
		if (mob.isFighting()) {
			return;
		}

		// FIXME: can this be moved to DuskEngine somehow?

		//Default AI
		int intConfidence = 0;
		Active enemy = null;
		double enemyrelation = 0;
		boolean visiblePlayer = false;
		for (TileMap<Thing>.MapData md : mob.map.range(mob.x, mob.y, game.viewRange - 1)) {
			for (Thing o : md.entities) {
				if (o.getType() == Thing.TYPE_MOBILE || o.getType() == Thing.TYPE_PLAYER) {
					Active lt = (Active) o;

					if (mob.onCanSeeActive(lt) && mob.canSee(lt.x, lt.y)) {
						if (o.getType() == Thing.TYPE_PLAYER) {
							visiblePlayer = true;
							double relation = getRelationValue(lt.name);
							if (!(lt.clan == null || lt.clan.equals("none"))) {
								relation = (relation + getRelationValue(lt.clan)) / 2;
							}
							if (relation < 0 && (enemy == null || enemyrelation < relation)) {
								enemy = lt;
								enemyrelation = relation;
							}
							intConfidence += relation * lt.getTP();
							System.out.printf("mob '%s' can see player '%s' relation %f confidence=%d\n", mob.name, lt.name, relation, intConfidence);
							System.out.printf("  player points total = %d armour %d damage %d cmponent %f\n", lt.getTP(), lt.getArmourMod(), lt.getDamageMod(), relation * lt.getTP());
						} else {
							double relation;

							Mobile m = (Mobile) lt;
							if (m.name.equals(mob.name)) {
								relation = m.groupRelation;
							} else {
								relation = getRelationValue(m.name);
							}
							intConfidence += relation * m.getTP();
							if (relation < 0 && (enemy == null || enemyrelation > relation)) {
								enemy = m;
								enemyrelation = relation;
							}
							intConfidence += relation * lt.getTP();
							System.out.printf("mob '%s' can see mob '%s' relation %f confidence=%d\n", mob.name, lt.name, relation, intConfidence);
							System.out.printf("  player points total = %d armour %d damage %d component %f\n", lt.getTP(), lt.getArmourMod(), lt.getDamageMod(), relation * lt.getTP());
						}
					}
				}
			}
		}
		mob.canSeePlayer = visiblePlayer;
		if (!visiblePlayer) {
			return;
		}
		if (enemy != null) {
			double delta = (mob.getTP() + intConfidence) * mob.bravery * -1 * enemyrelation;
			int enemycp = enemy.getTP();
			//Fight/flee
			if (enemycp < delta) {
				if (enemycp > delta - (delta * 0.1 * Math.random())) {
					return;
				}
				//Fight
				if (enemy.distanceL1(mob) <= mob.getRangeWithBonus()) {
					System.out.println(mob.name + " close enough, going into battle distance: " + enemy.distanceL1(mob) + " range: " + mob.getRangeWithBonus());
					// close enough to attack, so stop moving
					mob.clearMoveQueue();
					mob.createBattle(enemy);
					/*
					 try {
					 // TODO: just call duskEngine.newBattle directly?
					 Commands.parseCommand(mob, game, "a " + enemy.name);
					 } catch (Exception e) {
					 game.log.printError("runAI():" + mob.name + " had an error attacking " + enemy.name, e);
					 }*/
				} else {
					System.out.println("Mob ai: move to enemy " + enemy.name + " " + enemy.x + "," + enemy.y);
					mob.travelTo(enemy.x, enemy.y, false);
				}
			} else {
				if (enemycp < delta + (delta * 0.1 * Math.random())) {
					return;
				}
				//Flee
				int destX = mob.x + Integer.signum(mob.x - enemy.x) * game.viewRange;
				int destY = mob.y + Integer.signum(mob.y - enemy.y) * game.viewRange;
				System.out.println("Mob ai: flee from " + enemy.name + " " + destX + "," + destY);
				mob.travelTo(destX, destY, true);
			}
		}

		//If no enemies
		if ((int) (Math.random() * 25) == 1) {
			if ((int) (Math.random() * 2) == 1) {
				if ((int) (Math.random() * 2) == 1) {
					mob.enqueueMove("e");
				} else {
					mob.enqueueMove("w");
				}
			} else {
				if ((int) (Math.random() * 2) == 1) {
					mob.enqueueMove("s");
				} else {
					mob.enqueueMove("n");
				}
			}
		}
	}

	/**
	 * a Relation represents a feeling held by one faction for another faction, a
	 * player, or a clan. The mob AI bases it's decisions around Relations.
	 *
	 * @author Tom Weingarten
	 */
	static class Relation {

		String name;
		double level = 2; //-1 to 1

		Relation(String inName, double inLevel) {
			name = inName.toLowerCase();
			level = inLevel;
		}

		/**
		 *
		 * Uses an optimized form of the function:
		 * ((1.03^delta) + (1.03^-delta)) / (2 + (1.03^delta) + (1.03^-delta))
		 *
		 * But I don't know why ...
		 *
		 * @param delta
		 * @returns true if the level changes
		 */
		boolean updateRelation(int delta) {
			double old = level;

			if (delta == 0) {
				level -= (.5) * (1D + level);
			} else if (delta > 0) {
				level -= ((((Math.pow(1.03, delta)) / (Math.pow(1.03, delta) + 2))) / 2) * (1 + level);
			} else {
				level -= ((Math.pow(1.03, (-1 * delta)) / (Math.pow(1.03, (-1 * delta)) + 2)) / 2) * (1 + level);
			}

			return old != level;
		}

		@Override
		public String toString() {
			return "Relation '" + name + "' = " + level;
		}
	}
}
