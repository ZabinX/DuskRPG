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
 * Sign
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
class Sign extends Thing {

	public Sign(Game game) {
		super(game);
	}

	@Override
	public int getType() {
		return TYPE_SIGN;
	}

	@Override
	void writeState(BufferedWriter out) throws IOException {
		super.writeState(out);
		writeProperty(out, "description", description);
	}

	@Override
	public void look(Active viewer) {
		viewer.chatMessage("The sign says " + description + ".");
	}
}
