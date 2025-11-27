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

import duskz.protocol.Wearing;

/**
 * This is a pseudo-object that can only be held by a game-shop
 * and represents training.
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class Training extends Holdable {

	String skill;

	public Training(Game game) {
		super(game);
	}

	@Override
	public String getUnits() {
		return "exp";
	}
	
	@Override
	void setProperty(String name, String value) {
		switch (name) {
			case "skill":
				skill = value;
				break;
			default:
				super.setProperty(name, value);
				break;
		}
	}

	@Override
	public int getWearing() {
		// TODO: maybe add a training class
		return Wearing.INVENTORY;
	}

	@Override
	public int getType() {
		return TYPE_TRAINING;
	}
}
