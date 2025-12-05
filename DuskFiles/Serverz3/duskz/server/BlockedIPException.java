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
package duskz.server;

/**
 * IP is blocked
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class BlockedIPException extends Exception {

	public BlockedIPException(String message) {
		super(message);
	}

}
