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
package duskz.protocol;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;

/**
 * An entity update.
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class EntityUpdateMessage extends DuskMessage.EntityMessage {

	// This need to be kept in sync with Thing
	public static final int TYPE_PLAYER = 0;
	public static final int TYPE_PET = 1;
	public static final int TYPE_MOBILE = 2;
	public static final int TYPE_SIGN = 3;
	public static final int TYPE_PROP = 4;
	public static final int TYPE_GAME_SHOP = 5;
	public static final int TYPE_PLAYER_SHOP = 6;
	public static final int TYPE_ITEM = 7;
	public static final int TYPE_FOOD = 8;
	public static final int TYPE_DRINK = 9;
	public static final int TYPE_WEAPON = 10;
	public static final int TYPE_ARMOUR = 11;
	public static final int TYPE_CONTAINER = 12;
	
	public String entityName;
	public byte entityType;
	public short x;
	public short y;
	public short image;
	public short imageStep;

	@Override
	public void send(DataOutputStream ostream) throws IOException {
		super.send(ostream);
		ostream.writeLong(id);
		ostream.writeUTF(entityName);
		ostream.writeByte(entityType);
		ostream.writeShort(x);
		ostream.writeShort(y);
		ostream.writeShort(image);
		ostream.writeShort(imageStep);
	}

	@Override
	public void receive(DataInputStream istream) throws IOException {
		super.receive(istream);
		id = istream.readLong();
		entityName = istream.readUTF();
		entityType = istream.readByte();
		x = istream.readShort();
		y = istream.readShort();
		image = istream.readShort();
		imageStep = istream.readShort();
	}

	@Override
	public byte getType() {
		return TC_ENTITY_UPDATE;
	}
}
