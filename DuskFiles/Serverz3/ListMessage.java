import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class ListMessage extends DuskMessage {

    public final List<DuskMessage> value;

    public ListMessage() {
        value = new ArrayList<>();
    }

    public ListMessage(int name) {
        super(name);
        value = new ArrayList<>();
    }

    public void add(DuskMessage msg) {
        value.add(msg);
    }

    @Override
    public void send(DataOutputStream ostream) throws IOException {
        super.send(ostream);
        ostream.writeShort(value.size());
        for (DuskMessage a : value) {
            a.sendMessage(ostream);
        }
    }

    @Override
    public void receive(DataInputStream istream) throws IOException {
        super.receive(istream);
        int len = istream.readShort() & 0xffff;
        for (int i = 0; i < len; i++) {
            value.add(DuskMessage.receiveMessage(istream));
        }
    }

    @Override
    public byte getType() {
        return TC_LIST;
    }
}
