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
 * Feb-2013 Michael Zucchi - modernised java, clean up script commands.
 */
package duskz.server;

import duskz.server.entity.LivingThing;
import java.io.IOException;
import java.io.RandomAccessFile;

/**
 * Condition describes a temporary or permanent effect.
 *
 * @author Tom Weingarten
 */
public class Condition {

	public final String name;
	public int duration = -1, //number of occurances till end. -1 = infinity
			occurance = 1, //number of ticks per occurance
			ticksPast = 0; //how many ticks since last occurance
	public boolean display = true; //should the player be able to see the condition
	// Script names
	private String onStartScript = null,
			onOccuranceScript = null,
			onEndScript = null;

	public Condition(String name) {
		this.name = name;
	}

	public static Condition getCondition(String name) throws IOException {
		String s;
		Condition store = new Condition(name);

		try (RandomAccessFile rafConditionDef = new RandomAccessFile("defConditions/" + name.toLowerCase(), "r")) {
			s = rafConditionDef.readLine();
			while (!(s == null || s.equals("."))) {
				switch (s.toLowerCase()) {
					case "duration":
						store.duration = Integer.parseInt(rafConditionDef.readLine());
						break;
					case "occurance":
						store.occurance = Integer.parseInt(rafConditionDef.readLine());
						break;
					case "onstart":
						store.onStartScript = rafConditionDef.readLine();
						break;
					case "onoccurance":
						store.onOccuranceScript = rafConditionDef.readLine();
						break;
					case "onend":
						store.onEndScript = rafConditionDef.readLine();
						break;
					case "nodisplay":
						store.display = false;
						break;
				}
				s = rafConditionDef.readLine();
			}
		}
		return store;
	}

	void runScript(DuskEngine engGame, LivingThing trigger, String script) {
		if (script != null) {
			try {
				Script scrStore = new Script("scripts/" + script, engGame, false);
				scrStore.varVariables.addVariable("trigger", trigger);
				scrStore.varVariables.addVariable("condition", name);
				scrStore.runScript();
				scrStore.close();
			} catch (Exception e) {
				engGame.log.printError("Condition.onStart() for condition \"" + name + "\"", e);
			}
		}
	}

	public void onStart(DuskEngine engGame, LivingThing trigger) {
		runScript(engGame, trigger, onStartScript);
	}

	public void onOccurance(DuskEngine engGame, LivingThing trigger) {
		runScript(engGame, trigger, onOccuranceScript);
	}

	public void onEnd(DuskEngine engGame, LivingThing trigger) {
		runScript(engGame, trigger, onEndScript);
	}
}