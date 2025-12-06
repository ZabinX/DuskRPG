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
 * Feb-2013 Michael Zucchi - Modernisation, fixed some locking issues
 */
package duskz.server;

import duskz.server.entity.Mob;
import duskz.server.entity.LivingThing;
import java.util.Iterator;

public class TickThread implements Runnable {

	DuskEngine game;
	long now = System.currentTimeMillis(),
			delay = 0;
	int tick = 0;

	TickThread(DuskEngine inGame) {
		this.game = inGame;
	}

	public void run() {
		while (true) {
			try {
				//1000 milliseconds(1 second) per tick
				delay = 1000L - (System.currentTimeMillis() - now);
				if (delay > 0) {
					Thread.currentThread().sleep(delay);
				}
				now = System.currentTimeMillis();

				// FIXME: similar code is also in DuskEngine, all unlocked??

				synchronized (game.mobList) {
					for (Mob mob : game.mobList) {
						// FIXME: remove magic number!!
						if (mob.x == -6) {
							mob.hp++;
							if (mob.hp > -1) {
								mob.changeLocBypass(mob.map, mob.originalX, mob.originalY);
								mob.hp = mob.maxhp;
							}
						} else {
							try {
								if (game.blnAI && mob.blnCanSeePlayer && (mob.fctFaction != null)) {
									mob.fctFaction.runAI(mob);
								}
							} catch (Exception e) {
								mob.blnCanSeePlayer = false;
								game.log.printError("TickThread.run():While trying to runAI for mob \"" + mob.name + "\".", e);
							}
							mob.moveTick();
						}
					}
				}
				for (LivingThing lt : game.checkConditionList) {
					for (Iterator<Condition> it = lt.conditions.iterator(); it.hasNext();) {
						Condition cond = it.next();
						if (cond.ticksPast >= cond.occurance) {
							cond.onOccurance(game, lt);
							if (cond.duration > 0) {
								cond.duration--;
							}
							if (cond.duration == 0) {
								cond.onEnd(game, lt);
								it.remove();
							}
							cond.ticksPast = 1;
						} else {
							cond.ticksPast++;
						}
					}
				}

				if (tick > 120) {
					tick = 0;
				}
				tick++;
			} catch (Exception e) {
				game.log.printError("ThreadTicks.run()", e);
			}
		}
	}
}