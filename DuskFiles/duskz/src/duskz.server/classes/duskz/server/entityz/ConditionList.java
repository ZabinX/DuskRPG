/*
 * This file is part of DuskZ, a graphical mud engine.
 *
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

import java.io.BufferedWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class ConditionList {

	private final HashMap<String, Condition> conditions = new HashMap<>();
	private final List<Condition> endedConditions = new ArrayList<>();

	/* ***************
	 * Conditions
	 * ***************/
	public synchronized void setCondition(Condition c) {
		Condition old = conditions.put(c.name.toLowerCase(), c);
		c.start = -1;

		if (old != null)
			endedConditions.add(old);
	}

	public List<String> getActiveConditions() {
		return new ArrayList<>(conditions.keySet());
	}

	/**
	 * Clear a condition by name.
	 *
	 * @param name
	 * @return true if there are no active conditions
	 */
	public synchronized boolean clearCondition(String name) {
		Condition old = conditions.remove(name.toLowerCase());
		if (old != null) {
			endedConditions.add(old);
		}
		return conditions.isEmpty();
	}

	/**
	 * Iterate through all conditions running their actions.
	 *
	 * This also handles starting, occurance, and ending conditions
	 *
	 * @return true if the set of active conditions changed.
	 */
	public synchronized boolean checkConditions(Active host, int tick) {
		Condition[] list = conditions.values().toArray(new Condition[conditions.size()]);
		boolean changed = false;

		// End the pending ones
		for (Condition c : endedConditions) {
			c.onEnd(host);
			changed = true;
		}
		endedConditions.clear();

		for (Condition c : list) {
			if (c.start == -1) {
				c.start = tick;
				c.end = tick + c.duration;
				c.onStart(host);
				changed = true;
			}
			if (c.rate > 0 && ((tick - c.start) % c.rate) == 0) {
				c.onOccurance(host);
			}
			if (tick >= c.end) {
				conditions.remove(c.name);
				c.onEnd(host);
				changed = true;
			}
		}

		return changed;
	}

	/**
	 * i/o
	 */
	public boolean setProperty(String name, String value) {
		if (name.equals("condition")) {
			int c1 = value.indexOf(',');
			int c2 = value.indexOf(',', c1 + 1);

			Condition c = new Condition();
			c.name = value.substring(0, c1);
			c.duration = Integer.valueOf(value.substring(c1 + 1, c2));
			c.rate = Integer.valueOf(value.substring(c2 + 1));

			conditions.put(c.name.toLowerCase(), c);
			return true;
		}
		return false;
	}

	public void writeProperties(BufferedWriter out) throws IOException {
		for (Condition c : conditions.values()) {
			out.write("condition=");

			// FIXME: i need the duration remaining, which is now - start?
			out.write(c.name);
			out.write(',');
			out.write(String.valueOf(c.duration));
			out.write(',');
			out.write(String.valueOf(c.rate));
			out.write('\n');
		}
	}
}
