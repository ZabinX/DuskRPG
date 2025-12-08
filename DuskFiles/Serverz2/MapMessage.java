import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;

public class MapMessage extends DuskMessage {

    public int width;
    public int height;
    public short[][] map;
    public short[][] mapAlpha;
    public short[][] mapAlpha2;

    public MapMessage() {}

    public MapMessage(int name, int width, int height, short[][] map, short[][] mapAlpha, short[][] mapAlpha2) {
        super(name);
        this.width = width;
        this.height = height;
        this.map = map;
        this.mapAlpha = mapAlpha;
        this.mapAlpha2 = mapAlpha2;
    }

    @Override
    public void send(DataOutputStream ostream) throws IOException {
        super.send(ostream);
        ostream.writeInt(width);
        ostream.writeInt(height);

        // Serialize map data in column-major order
        for (int i = 0; i < width; i++) {
            for (int i2 = 0; i2 < height; i2++) {
                ostream.writeShort(map[i][i2]);
            }
        }
        for (int i = 0; i < width; i++) {
            for (int i2 = 0; i2 < height; i2++) {
                ostream.writeShort(mapAlpha[i][i2]);
            }
        }
        for (int i = 0; i < width; i++) {
            for (int i2 = 0; i2 < height; i2++) {
                ostream.writeShort(mapAlpha2[i][i2]);
            }
        }
    }

    @Override
    public void receive(DataInputStream istream) throws IOException {
        super.receive(istream);
        width = istream.readInt();
        height = istream.readInt();

        map = new short[width][height];
        mapAlpha = new short[width][height];
        mapAlpha2 = new short[width][height];

        // Deserialize map data in column-major order
        for (int i = 0; i < width; i++) {
            for (int i2 = 0; i2 < height; i2++) {
                map[i][i2] = istream.readShort();
            }
        }
        for (int i = 0; i < width; i++) {
            for (int i2 = 0; i2 < height; i2++) {
                mapAlpha[i][i2] = istream.readShort();
            }
        }
        for (int i = 0; i < width; i++) {
            for (int i2 = 0; i2 < height; i2++) {
                mapAlpha2[i][i2] = istream.readShort();
            }
        }
    }

    @Override
    public byte getType() {
        return TC_MAP;
    }
}
