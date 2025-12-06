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
 * Feb-2013 Michael Zucchi - encapsulated a bunch of code out of Dusk
 * to track the status.
 */
package duskz.client;

import duskz.protocol.DuskMessage;
import duskz.protocol.DuskMessage.IntegerMessage;
import duskz.protocol.DuskProtocol;
import duskz.protocol.ListMessage;
import java.io.IOException;

/**
 * Current player information
 *
 * @author notzed
 */
public class Status implements DuskProtocol {

	long id;
	// Attack range
	int range = 1;
	int hp, maxhp;
	int mp, maxmp;
	int locx, locy;

	public void updateStatus(ListMessage lm) throws IOException {
		// FIXME: int/dex and all that junk
		for (DuskMessage a : lm.value) {
			switch (a.name) {
				case FIELD_INFO_HP:
					hp = ((IntegerMessage) a).value;
					break;
				case FIELD_INFO_MAXHP:
					maxhp = ((IntegerMessage) a).value;
					break;
				case FIELD_INFO_MP:
					mp = ((IntegerMessage) a).value;
					break;
				case FIELD_INFO_MAXMP:
					maxmp = ((IntegerMessage) a).value;
					break;
				case FIELD_INFO_RANGE:
					range = ((IntegerMessage) a).value;
					break;
			}
		}
	}

	public void updateLocation(int x, int y) {
		locx = x;
		locy = y;
	}

	@Override
	public String toString() {
		return "HP: " + hp + "/" + maxhp + " MP: " + mp + "/" + maxmp + " Loc: " + locx + "/" + locy;
	}

	public int distance(Entity e) {
		return Math.abs(locx - e.locx) + Math.abs(locy - e.locy);
	}

	public boolean canLook(Entity e) {
		return true;
	}

	public boolean canTake(Entity e) {
		return e.intType == 1
				&& (distance(e) < 2);
	}

	public boolean canAttack(Entity e) {
		// Ugh, i'm not sure what the types were, but i think it just meant 'any living thing'.
		// Dunno why the server doesn't send this message to the client anyway
		System.out.printf("can attack test %s type %s distance %d range %d\n",
			e.name, e.intType, distance(e), range);
		return e.ID != id
//				&& ((e.intType == 0 || e.intType == 1 || e.intType == 4)
				&& ((e.intType == 0 || e.intType == 1 || e.intType == 2)
				&& (distance(e) <= range));
	}
}
