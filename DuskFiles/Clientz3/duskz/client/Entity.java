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
 * Feb-2013 Michael Zucchi - some helper/accessors.
 */
package duskz.client;

import duskz.protocol.DuskProtocol;
import duskz.protocol.EntityUpdateMessage;
import java.util.ArrayList;
import java.util.List;

public class Entity {

	public String name;
	public int locx,
			locy;
	public int intType,
			intNum = 0,
			intStep = -1,
			intImage = 0,
			intTicks,
			intMoveDirection = -1,
			/*intMoveDirection
			 0 north
			 1 south
			 2 west
			 3 east
			 */
			flags = 0;
	List<String> conditions = new ArrayList<>(0);
	/*flags
	 0 none
	 1 ally
	 2 enemy
	 */
	long ID;
	Entity entNext = null;

	public Entity(String instrName, long inID, int inintLocX, int inintLocY, int inImage, int inStep, int inintType) {
		name = instrName;
		ID = inID;
		locx = inintLocX;
		locy = inintLocY;
		intImage = inImage;
		intStep = inStep;
		intType = inintType;
	}

	public Entity(EntityUpdateMessage msg) {
		name = msg.entityName;
		locx = msg.x;
		locy = msg.y;
		ID = msg.id;
		intType = msg.entityType;
		intImage = msg.image;
		intStep = msg.imageStep;
	}

	/**
	 * Returns name without status attributes
	 *
	 * @return
	 */
	public String getSimpleName() {
		int i = name.lastIndexOf(">");
		if (i != -1) {
			return name.substring(i + 1);
		} else {
			return name;
		}
	}

	public String getIndexedName() {
		return intNum == 0 ? name : intNum + "." + name;
	}

	@Override
	public String toString() {

		return "[Entity " + ID + ", " + name + ", " + locx + ", " + locy + "]";
	}

	public String getTitle() {
		if (conditions.isEmpty() && flags == 0)
			return name;

		StringBuilder sb = new StringBuilder(name);

		sb.append('<');
		boolean first = true;
		for (String c : conditions) {
			if (!first) {
				sb.append(", ");
			}
			first = false;
			sb.append(c);
		}

		if ((flags & DuskProtocol.ENTITY_FLAG_SLEEPING) != 0) {
			if (!first) {
				sb.append(", ");
			}
			sb.append("sleeping");
		}

		sb.append('>');

		return sb.toString();
	}
}
