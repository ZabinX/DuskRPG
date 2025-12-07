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
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;

public class MapMessage extends DuskMessage {
	public short x;
	public short y;
	public short width;
	public short height;
	public short[][][] map;

	public MapMessage() {
	}

	public MapMessage(byte name, int x, int y, int width, int height) {
		super(name);
		this.x = (short)x;
		this.y = (short)y;
		this.width = (short)width;
		this.height = (short)height;
		this.map = new short[3][width][height];
	}

	@Override
	public void receive(DataInputStream istream) throws IOException {
		super.receive(istream);
		x = istream.readShort();
		y = istream.readShort();
		width = istream.readShort();
		height = istream.readShort();
		map = new short[3][width][height];
		for (int l = 0; l < 3; l++) {
			for (int i = 0; i < width; i++) {
				for (int j = 0; j < height; j++) {
					map[l][i][j] = istream.readShort();
				}
			}
		}
	}

	@Override
	public void send(DataOutputStream out) throws IOException {
		super.send(out);
		out.writeShort(x);
		out.writeShort(y);
		out.writeShort(width);
		out.writeShort(height);
		for (int l = 0; l < 3; l++) {
			for (int j = 0; j < height; j++) {
				for (int i = 0; i < width; i++) {
					out.writeShort(map[l][i][j]);
				}
			}
		}
	}

	public void writeMap(short[][][] layers, int x, int y) {
		int mapWidth = layers[0].length;
		int mapHeight = layers[0][0].length;
	
		for (int l = 0; l < 3; l++) {
			for (int j = 0; j < height; j++) {
				for (int i = 0; i < width; i++) {
					int sourceX = x + i;
					int sourceY = y + j;
	
					if (sourceX >= 0 && sourceX < mapWidth && sourceY >= 0 && sourceY < mapHeight) {
						map[l][i][j] = layers[l][sourceX][sourceY];
					} else {
						map[l][i][j] = 0; // Or some other default/empty tile value
					}
				}
			}
		}
	}

	public void readMap(short[][][] layers) {
		for (int l = 0; l < 3; l++) {
			for (int j = 0; j < height; j++) {
				for (int i = 0; i < width; i++) {
					layers[l][i][j] = map[l][i][j];
				}
			}
		}
	}

	@Override
	public byte getType() {
		return TC_MAP;
	}
}
