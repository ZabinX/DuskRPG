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
 * DuskMessage for a client view map update.
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class MapMessage extends DuskMessage {

	public short x;
	public short y;
	public short width;
	public short height;
	// TODO: decide whether i want a ground layer, or entities to contain the layer they're rendered on
	// Latter is more flexible.
	public short groundLayer;
	public short[] map;
	public short[] mapAlpha;
	public short[] mapAlpha2;


	public MapMessage() {
	}

	public MapMessage(int name, int width, int height, int locx, int locy, int groundLayer, short[] map, short[] mapAlpha, short[] mapAlpha2) {
		super(name);

		this.x = (short) locx;
		this.y = (short) locy;
		this.width = (short) width;
		this.height = (short) height;
		this.groundLayer = (short)groundLayer;
		this.map = map;
		this.mapAlpha = mapAlpha;
		this.mapAlpha2 = mapAlpha2;
	}

	@Override
	public void send(DataOutputStream ostream) throws IOException {
		super.send(ostream);
		ostream.writeShort(x);
		ostream.writeShort(y);
		ostream.writeShort(width);
		ostream.writeShort(height);
		ostream.writeShort(groundLayer);
		for (int i = 0; i < width * height; i++)
			ostream.writeShort(map[i]);
		for (int i = 0; i < width * height; i++)
			ostream.writeShort(mapAlpha[i]);
		for (int i = 0; i < width * height; i++)
			ostream.writeShort(mapAlpha2[i]);
	}

	@Override
	public void receive(DataInputStream istream) throws IOException {
		int len;

		super.receive(istream);
		x = istream.readShort();
		y = istream.readShort();
		width = istream.readShort();
		height = istream.readShort();
		groundLayer = istream.readShort();
		len = width * height;
		map = new short[len];
		mapAlpha = new short[len];
		mapAlpha2 = new short[len];
		for (int i = 0; i < len; i++) {
			map[i] = istream.readShort();
		}
		for (int i = 0; i < len; i++) {
			mapAlpha[i] = istream.readShort();
		}
		for (int i = 0; i < len; i++) {
			mapAlpha2[i] = istream.readShort();
		}
	}

	@Override
	public byte getType() {
		return TC_MAP;
	}
}
