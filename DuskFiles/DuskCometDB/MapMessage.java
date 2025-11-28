import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;

public class MapMessage extends DuskMessage {
	public int x;
	public int y;
	public short tiles[][];
	public short tilesAlpha[][];
	public short tilesAlpha2[][];

	public MapMessage() {
	}

	public MapMessage(int name, int x, int y, short tiles[][], short tilesAlpha[][], short tilesAlpha2[][]) {
		super(name);
		this.x = x;
		this.y = y;
		this.tiles = tiles;
		this.tilesAlpha = tilesAlpha;
		this.tilesAlpha2 = tilesAlpha2;
	}

	@Override
	public void send(DataOutputStream ostream) throws IOException {
		super.send(ostream);
		ostream.writeInt(x);
		ostream.writeInt(y);
		int w = tiles.length;
		int h = tiles[0].length;
		ostream.writeShort(w);
		ostream.writeShort(h);
		for (int i = 0; i < w; i++) {
			for (int j = 0; j < h; j++) {
				ostream.writeShort(tiles[i][j]);
			}
		}
		for (int i = 0; i < w; i++) {
			for (int j = 0; j < h; j++) {
				ostream.writeShort(tilesAlpha[i][j]);
			}
		}
		for (int i = 0; i < w; i++) {
			for (int j = 0; j < h; j++) {
				ostream.writeShort(tilesAlpha2[i][j]);
			}
		}
	}

	@Override
	public void receive(DataInputStream istream) throws IOException {
		super.receive(istream);
		x = istream.readInt();
		y = istream.readInt();
		int w = istream.readShort();
		int h = istream.readShort();
		tiles = new short[w][h];
		tilesAlpha = new short[w][h];
		tilesAlpha2 = new short[w][h];
		for (int i = 0; i < w; i++) {
			for (int j = 0; j < h; j++) {
				tiles[i][j] = istream.readShort();
			}
		}
		for (int i = 0; i < w; i++) {
			for (int j = 0; j < h; j++) {
				tilesAlpha[i][j] = istream.readShort();
			}
		}
		for (int i = 0; i < w; i++) {
			for (int j = 0; j < h; j++) {
				tilesAlpha2[i][j] = istream.readShort();
			}
		}
	}

	@Override
	public byte getType() {
		return TC_MAP;
	}
}