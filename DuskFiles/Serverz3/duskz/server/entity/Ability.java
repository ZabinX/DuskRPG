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
/**
 * Changes
 */
package duskz.server.entity;

/**
 * Base class for trained attributes.
 *
 * Training goes up to 100.
 *
 * FIXME: there's something major wrong with abilities!!
 *
 * @author notzed
 */
public class Ability {

	private int ability;
	public final String name;

	public Ability(String name) {
		this.name = name;
	}

	public Ability(int ability, String name) {
		ability = Math.max(ability, 0);
		ability = Math.min(ability, 100);
		this.ability = ability;
		this.name = name;
	}

	public void setAbility(int ability) {
		ability = Math.max(ability, 0);
		ability = Math.min(ability, 100);
		this.ability = ability;
	}

	/**
	 * Train an ability.
	 *
	 * @param delta
	 * @return true if the ability was increased, false if it is already at maximum
	 */
	public boolean train(int delta) {
		if (ability < 100) {
			setAbility(ability + delta);
			return true;
		}
		return false;
	}

	public int getAbility() {
		return ability;
	}
}
