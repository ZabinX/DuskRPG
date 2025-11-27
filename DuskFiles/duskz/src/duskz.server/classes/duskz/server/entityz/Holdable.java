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

import java.io.BufferedWriter;
import java.io.IOException;

/**
 * Base class for all items.
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public abstract class Holdable extends Thing {

	int cost;
	//int image;
	int volume;
	int weight;
	String onGet, onDrop;
	int uses = -1;
	String onUse;

	Holdable(Game game) {
		super(game);
	}

	abstract public int getWearing();

	public String getUnits() {
		return "gp";
	}

	@Override
	public void look(Active viewer) {
		viewer.chatMessage("You see " + description + ".");
	}

	@Override
	void setProperty(String name, String value) {
		switch (name) {
			case "cost":
				cost = Integer.parseInt(value);
				break;
			case "weight":
				weight = Integer.parseInt(value);
				break;
			case "volume":
				volume = Integer.parseInt(value);
				break;
			case "onGet": // FIXME: use conventions to find script from name
				onGet = value;
				break;
			case "onDrop": // FIXME: use conventions to find script from name
				onDrop = value;
				break;
			case "uses":
				uses = Integer.parseInt(value);
				break;
			case "onUse": // FIXME: use conventions to find script from name
				onUse = value;
				break;
			default:
				super.setProperty(name, value);
		}
	}

	@Override
	protected void writeProperties(BufferedWriter out) throws IOException {
		writeProperty(out, "name", name);
		writeProperty(out, "description", description);
		//writeProperty(out, "map", map.name);
		//writeProperty(out, "x", x);
		//writeProperty(out, "y", y);
		writeProperty(out, "image", image);

		writeProperty(out, "cost", cost);
		writeProperty(out, "weight", weight);
		writeProperty(out, "volume", volume);
		writeProperty(out, "onGet", onGet);
		writeProperty(out, "onDrop", onDrop);

		if (uses != -1)
			writeProperty(out, "uses", uses);
		writeProperty(out, "onUse", onUse);
	}
}
