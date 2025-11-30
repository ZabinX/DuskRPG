package duskz.protocol;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;

public class MapMessage extends DuskMessage {
	public int x;
	public int y;
	public int width;
	public int height;
	public short[][][] map;

	public MapMessage() {
	}

	public MapMessage(byte name, int x, int y, int width, int height) {
		super(name);
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
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
			for (int j = 0; j < height; j++) {
				for (int i = 0; i < width; i++) {
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
		for (int l = 0; l < 3; l++) {
			for (int j = 0; j < height; j++) {
				for (int i = 0; i < width; i++) {
					map[l][i][j] = layers[l][x+i][y+j];
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
