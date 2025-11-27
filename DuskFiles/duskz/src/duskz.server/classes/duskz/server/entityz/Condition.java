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

import java.util.Objects;

/**
 * Conditions are *user-visible* things that occur for a time,
 * they can invoke scripts for start/occurance/finish.
 *
 * Scripts and code can use other mechanisms for hidden values.
 *
 * Script actions are located by convention based on the name.
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class Condition {

	/**
	 * Name of description.
	 */
	public String name;
	/**
	 * Long description
	 */
	//public String description;
	/**
	 * Total duration (left, after reload) of condition
	 */
	int duration;
	/**
	 * How many ticks between triggering an occurance, <= 0 to disable
	 */
	int rate = 1;
	/**
	 * Start of condition, -1 means new condition.
	 */
	int start = -1;
	int end = -1;

	public Condition() {
	}

	public Condition(String name, int duration) {
		this.name = name;
		this.duration = duration;
	}

	public Condition(String name, int duration, int rate) {
		this.name = name;
		this.duration = duration;
		this.rate = rate;
	}

	void onStart(Active host) {
		host.game.onCondition(host, this, "start");
	}

	void onOccurance(Active host) {
		host.game.onCondition(host, this, "tick");
	}

	void onEnd(Active host) {
		host.game.onCondition(host, this, "end");
	}

	@Override
	public boolean equals(Object obj) {
		if (obj instanceof Condition) {
			Condition c = (Condition) obj;

			return c.name.equals(name);
		} else
			return false;
	}

	@Override
	public int hashCode() {
		int hash = 3;
		hash = 17 * hash + Objects.hashCode(this.name);
		return hash;
	}
}
