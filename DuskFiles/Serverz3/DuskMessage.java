import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.List;

public class DuskMessage {

    // Type constants for different message types
    protected static final byte TC_NOTIFY = 1;
    protected static final byte TC_INTEGER = 3;
    protected static final byte TC_STRING = 6;
    protected static final byte TC_LIST = 0;
    protected static final byte TC_MAP = 16;

    public int name;

    public DuskMessage() {}

    public DuskMessage(int name) {
        this.name = name;
    }

    public void send(DataOutputStream ostream) throws IOException {
        ostream.writeByte(name);
    }

    public void receive(DataInputStream istream) throws IOException {
        name = istream.readByte();
    }

    public void format(PrintStream out, String s) {
        out.printf("%s%s name=%d\n", s, getClass().getSimpleName(), name);
    }

    public byte getType() {
        return TC_NOTIFY;
    }

    public static DuskMessage createForType(int type) {
        switch (type) {
            case TC_NOTIFY:
                return new DuskMessage();
            case TC_INTEGER:
                return new IntegerMessage();
            case TC_STRING:
                return new StringMessage();
            case TC_LIST:
                return new ListMessage();
            case TC_MAP:
                return new MapMessage();
            default:
                return null;
        }
    }

    public void sendMessage(DataOutputStream ostream) throws IOException {
        ostream.writeByte(getType());
        send(ostream);
    }

    public static DuskMessage receiveMessage(DataInputStream istream) throws IOException {
        int tc = istream.read();
        DuskMessage a = createForType(tc);
        if (a == null)
            throw new IOException("Unknown message tc: " + tc);
        a.receive(istream);
        return a;
    }

    // Inner classes for specific message types
    public static class IntegerMessage extends DuskMessage {
        public int value;

        public IntegerMessage() {}

        public IntegerMessage(int name, int value) {
            super(name);
            this.value = value;
        }

        @Override
        public void send(DataOutputStream ostream) throws IOException {
            super.send(ostream);
            ostream.writeInt(value);
        }

        @Override
        public void receive(DataInputStream istream) throws IOException {
            super.receive(istream);
            value = istream.readInt();
        }

        @Override
        public byte getType() {
            return TC_INTEGER;
        }
    }

    public static class StringMessage extends DuskMessage {
        public String value;

        public StringMessage() {}

        public StringMessage(int name, String value) {
            super(name);
            this.value = value;
        }

        @Override
        public void send(DataOutputStream ostream) throws IOException {
            super.send(ostream);
            ostream.writeUTF(value);
        }

        @Override
        public void receive(DataInputStream istream) throws IOException {
            super.receive(istream);
            value = istream.readUTF();
        }

        @Override
        public byte getType() {
            return TC_STRING;
        }
    }
}
