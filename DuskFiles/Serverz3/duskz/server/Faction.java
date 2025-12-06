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
package duskz.server;

import duskz.server.entity.TileMap.MapData;
import duskz.server.entity.Mob;
import duskz.server.entity.LivingThing;
import duskz.server.entity.DuskObject;
import java.io.*;
import java.util.Vector;
import java.lang.Math;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Optional;

/**
 * a Faction represents a group of mobs.
 *
 * @author Tom Weingarten
 */
public class Faction {

	final public String strName;
	Vector vctRelations;
	DuskEngine game;
	boolean blnHasChanged = false;

	public Faction(String inName, DuskEngine inGame) {
		strName = inName;
		game = inGame;
		vctRelations = new Vector(0);
		parseFactionData();
	}

	void parseFactionData() {
		RandomAccessFile rafFile = null;
		try {
			// perform case insenitive lookup to match windows filesystem
			String key = strName.toLowerCase();
			Optional<Path> path = Files.find(Path.of("factions"), 1, (t, a) -> t.getFileName().toString().toLowerCase().equals(key)).findAny();
			if (path.isPresent()) {
				rafFile = new RandomAccessFile(path.get().toFile(), "r");
				String strStore = rafFile.readLine();
				while (!(strStore == null || strStore.equals("."))) {
					if (strStore.equalsIgnoreCase("relation")) {
						vctRelations.addElement(new Relation(rafFile.readLine().toLowerCase(), Double.valueOf(rafFile.readLine()).doubleValue()));
					}
					strStore = rafFile.readLine();
				}
				rafFile.close();
			} else {
				throw new FileNotFoundException("factions/" + key);
			}
		} catch (Exception e) {
			game.log.printError("parseFactionData()", e);
		}
	}

	synchronized void saveFactionData() {
		/*
		 ** Only save faction data if it has changed.
		 */
		if (!blnHasChanged) {
			return;
		}
		int i;
		RandomAccessFile rafFile;
		try {
			rafFile = new RandomAccessFile("factions/" + strName, "rw");
			Relation relStore;
			for (i = 0; i < vctRelations.size(); i++) {
				relStore = (Relation)vctRelations.elementAt(i);
				rafFile.writeBytes("relation\n" + relStore.strName.toLowerCase() + "\n" + relStore.dblLevel + "\n");
			}
			rafFile.writeBytes(".\n");
			rafFile.close();
		} catch (Exception e) {
			game.log.printError("saveFactionData()", e);
		}
		blnHasChanged = false;
	}

	double getRelationValue(String strName) {
		Relation relStore;
		for (int i = 0; i < vctRelations.size(); i++) {
			relStore = (Relation)vctRelations.elementAt(i);
			if (strName.equalsIgnoreCase(relStore.strName)) {
				if (i > 100) {
					vctRelations.removeElementAt(i);
					vctRelations.insertElementAt(relStore, 0);
				}
				return relStore.dblLevel;
			}
		}
		return 0; //if no set relation, impartial
	}

	Relation getRelation(String strName) {
		Relation relStore;
		for (int i = 0; i < vctRelations.size(); i++) {
			relStore = (Relation)vctRelations.elementAt(i);
			if (strName.equalsIgnoreCase(relStore.strName)) {
				if (i > 100) {
					vctRelations.removeElementAt(i);
					vctRelations.insertElementAt(relStore, 0);
				}
				return relStore;
			}
		}
		return null;
	}

	void killedBy(LivingThing thnStore, LivingThing thnAttacker) {
		if (game.blnAI) {
			double dblOldLevel;
			Relation relStore = getRelation(thnAttacker.name);
			if (relStore == null) {
				relStore = new Relation(thnAttacker.name, 0);
				vctRelations.addElement(relStore);
				dblOldLevel = 2;
			} else {
				dblOldLevel = relStore.dblLevel;
			}
			int delta = thnAttacker.getCharacterPoints() - thnStore.getCharacterPoints();
			/*	Uses an optimized form of the function:
			 ((1.03^delta) + (1.03^-delta)) / (2 + (1.03^delta) + (1.03^-delta))
			 */
			if (delta == 0) {
				relStore.dblLevel -= (.5) * (1D + relStore.dblLevel);
			} else if (delta > 0) {
				relStore.dblLevel -= ((((Math.pow(1.03, delta)) / (Math.pow(1.03, delta) + 2))) / 2) * (1 + relStore.dblLevel);
			} else {
				relStore.dblLevel -= ((Math.pow(1.03, (-1 * delta)) / (Math.pow(1.03, (-1 * delta)) + 2)) / 2) * (1 + relStore.dblLevel);
			}
			if (!(thnAttacker.clan == null || thnAttacker.clan.equals("none"))) {
				relStore = getRelation(thnAttacker.clan);
				if (relStore == null) {
					relStore = new Relation(thnAttacker.clan, 0);
					vctRelations.addElement(relStore);
				}
				if (delta == 0) {
					relStore.dblLevel -= (.5) * (1 + relStore.dblLevel);
				} else if (delta > 0) {
					relStore.dblLevel -= ((((Math.pow(1.03, delta)) / (Math.pow(1.03, delta) + 1)) + 1) / 2) * (1 + relStore.dblLevel);
				} else {
					relStore.dblLevel -= ((((Math.pow(1.03, (-1 * delta))) / (Math.pow(1.03, (-1 * delta) + 1))) + 1) / 2) * (1 + relStore.dblLevel);
				}
			}
			if (relStore.dblLevel != dblOldLevel) {
				blnHasChanged = true;
			}
		}
	}

	void runAI(Mob mob) {
		if (!game.blnAI) {
			mob.blnCanSeePlayer = false;
			return;
		}

		//Battle AI (inside Battle class)
		if (mob.battle != null) {
			return;
		}

		// FIXME: can this be moved to DuskEngine somehow?
		//Default AI
		int intConfidence = 0;
		LivingThing enemy = null;
		Mob mobStore;
		double enemyrelation = 0;
		boolean visiblePlayer = false;
		for (MapData md: mob.map.range(mob.x, mob.y, game.viewrange - 1)) {
			for (DuskObject o: md.entities) {
				if (o.isLivingThing()) {
					LivingThing lt = (LivingThing)o;
					boolean visible = game.canSeeLivingThing(mob, lt);

					if (visible && game.canSeeTo(mob, lt.x, lt.y)) {
						if (lt.isPlayer()) {
							visiblePlayer = true;
							double relation = getRelationValue(lt.name);
							if (!(lt.clan == null || lt.clan.equals("none"))) {
								relation = (relation + getRelationValue(lt.clan)) / 2;
							}
							if (relation < 0) {
								if (enemy == null) {
									enemy = lt;
									enemyrelation = relation;
								} else {
									if (enemyrelation < relation) {
										enemy = lt;
										enemyrelation = relation;
									}
								}
							}
							intConfidence += relation * lt.getTotalPoints();
							System.out.printf("mob '%s' can see player '%s' relation %f confidence=%d\n", mob.name, lt.name, relation, intConfidence);
							System.out.printf("  player points total = %d armour %d damage %d component %f\n", lt.getTotalPoints(), lt.getArmorMod(), lt.getDamMod(), relation * lt.getTotalPoints());
						}
						if (lt.isMob()) {
							double relation;

							mobStore = (Mob)lt;
							if (mobStore.name.equals(mob.name)) {
								relation = mobStore.dblGroupRelation;
							} else {
								relation = getRelationValue(mobStore.name);
							}
							intConfidence += relation * mobStore.getTotalPoints();
							if (relation < 0) {
								if (enemy == null) {
									enemy = mobStore;
									enemyrelation = relation;
								} else {
									if (enemyrelation > relation) {
										enemy = mobStore;
										enemyrelation = relation;
									}
								}
							}
							intConfidence += relation * lt.getTotalPoints();
							System.out.printf("mob '%s' can see mob '%s' relation %f confidence=%d\n", mob.name, lt.name, relation, intConfidence);
							System.out.printf("  player points total = %d armour %d damage %d component %f\n", lt.getTotalPoints(), lt.getArmorMod(), lt.getDamMod(), relation * lt.getTotalPoints());
						}
					}
				}
			}
		}
		if (!visiblePlayer) {
			mob.blnCanSeePlayer = false;
			return;
		}
		mob.blnCanSeePlayer = true;
		if (enemy != null) {
			double delta = (mob.getTotalPoints() + intConfidence) * mob.dblBravery * -1 * enemyrelation;
			int enemycp = enemy.getTotalPoints();
			//Fight/flee
			if (enemycp < delta) {
				if (enemycp > delta - (delta * 0.1 * Math.random())) {
					return;
				}
				//Fight
				if (enemy.tileDistance(mob) <= mob.getRangeWithBonus()) {
					System.out.println(mob.name + " close enough, going into battle distance: " + enemy.distance(mob) + " range: " + mob.getRangeWithBonus());
					// close enough to attack, so stop moving
					mob.clearMoveQueue();
					game.newBattle(mob, enemy);
					/*
					 try {
					 // TODO: just call duskEngine.newBattle directly?
					 Commands.parseCommand(mob, game, "a " + enemy.name);
					 } catch (Exception e) {
					 game.log.printError("runAI():" + mob.name + " had an error attacking " + enemy.name, e);
					 }*/
				} else {
					mob.goTo(enemy.x, enemy.y, false);
				}
			} else {
				if (enemycp < delta + (delta * 0.1 * Math.random())) {
					return;
				}
				//Flee
				int destX;
				int destY;
				if (enemy.x > mob.x) {
					destX = mob.x - game.viewrange;
				} else {
					destX = mob.x + game.viewrange;
				}
				if (enemy.y > mob.y) {
					destY = mob.y - game.viewrange;
				} else {
					destY = mob.y + game.viewrange;
				}
				mob.goTo(destX, destY, true);
			}
		}

		//If no enemies
		if ((int)(Math.random() * 25) == 1) {
			if ((int)(Math.random() * 2) == 1) {
				if ((int)(Math.random() * 2) == 1) {
					mob.moveE();
				} else {
					mob.moveW();
				}
			} else {
				if ((int)(Math.random() * 2) == 1) {
					mob.moveS();
				} else {
					mob.moveN();
				}
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
class Relation {

	String strName;
	double dblLevel = 0; //-1 to 1

	Relation(String inName, double inLevel) {
		strName = inName;
		dblLevel = inLevel;
	}
}
