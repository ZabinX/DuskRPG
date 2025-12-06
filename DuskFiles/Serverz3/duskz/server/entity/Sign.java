/*
 * This file is part of DuskZ, a graphical mud engine.
 *
 * Copyright (C) 2000 Tom Weingarten <captaint@home.com>
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

import duskz.protocol.EntityUpdateMessage;
import duskz.server.DuskEngine;

/**
 * Represents a sign object. A sign contains a string message and can be viewed
 * by LivingThings.
 *
 * @author Tom Weingarten
 */
public class Sign extends DuskObject {

	public String strMessage;
	private final DuskEngine eng;

	public Sign(DuskEngine eng, String name, String msg, int locx, int locy, long lngID) {
		super(lngID, name);
		strMessage = msg;
		x = locx;
		y = locy;
		this.eng = eng;
	}

	@Override
	public byte getType() {
		return SIGN;
	}

	@Override
	public int getImage() {
		return eng.signimage;
	}

	@Override
	public int getEntityType() {
		return EntityUpdateMessage.TYPE_SIGN;
	}
}
