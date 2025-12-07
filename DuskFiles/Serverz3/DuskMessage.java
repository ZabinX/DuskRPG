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
import java.io.PrintStream;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

/**
 * This is the base class and most of the implementation of a re-usable
 * message encoding and decoding class.
 *
 * It encodes the data to a tagged binary format so that it may be decoded
 * with no knowledge of the semantics of the content, and yet still provide
 * a relatively efficient access.
 *
 * The semantics of the dusk protocol are stored in DuskProtocol.
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class DuskMessage implements java.io.Serializable {

	// A list of any type of message including another list.
	protected static final byte TC_LIST = 0;
	// no args
	protected static final byte TC_NOTIFY = 1;
	// byte args
	protected static final byte TC_BYTE = 2;
	protected static final byte TC_INTEGER = 3;
	protected static final byte TC_LONG = 4;
	protected static final byte TC_FLOAT = 5;
	protected static final byte TC_STRING = 6;
	protected static final byte TC_STRING_LIST = 7;
	// Generic messages targetted to a specific entity
	protected static final byte TC_ENTITY_LIST = 8;
	protected static final byte TC_ENTITY_NOTIFY = 9;
	protected static final byte TC_ENTITY_BYTE = 10;
	protected static final byte TC_ENTITY_INTEGER = 11;
	protected static final byte TC_ENTITY_LONG = 12;
	protected static final byte TC_ENTITY_FLOAT = 13;
	protected static final byte TC_ENTITY_STRING = 14;
	protected static final byte TC_ENTITY_STRING_LIST = 15;
	// More specific messages for easier use and/or performance
	// Should be used sparingly as changes are not hideable
	// TODO: have a think about whether i really some of these as
	// the overhead is only 2 bytes per field.
	protected static final byte TC_MAP = 16;
	protected static final byte TC_ENTITY_UPDATE = 17;
	protected static final byte TC_TRANSACTION = 18;
	/**
	 * The name is sent as a byte, allowing 256 different
	 * attributes per message type.
	 */
	public int name;

	public DuskMessage() {
	}

	public DuskMessage(int name) {
		this.name = name;
	}

	public void send(DataOutputStream ostream) throws IOException {
		ostream.writeByte(name);
	}

	public void receive(DataInputStream istream) throws IOException {
		name = istream.readByte();
	}

	protected void format(PrintStream out, String s) {
		out.printf("%s%s name=%d\n", s, getClass().getSimpleName(), name);
	}

	final public void format(PrintStream out) {
		try {
			Class c = Class.forName("duskz.protocol.DuskProtocol");
			for (Field f : c.getDeclaredFields()) {
				if (f.getName().startsWith("MSG_")) {
					if (f.getInt(c) == name) {
						System.out.print(f.getName());
						System.out.print(" ");
					}
				}
			}
		} catch (Exception x) {
		}
		format(out, "");
	}

	/**
	 * Must return a unique id from the field constants of DuskMessage which
	 * identifies the source object class.
	 *
	 * @return
	 */
	public byte getType() {
		return TC_NOTIFY;
	}

	static public DuskMessage createForType(int type) {
		switch (type) {
			case TC_LIST:
				return new ListMessage();
			case TC_NOTIFY:
				return new DuskMessage();
			case TC_BYTE:
				return new DuskMessage.ByteMessage();
			case TC_INTEGER:
				return new DuskMessage.IntegerMessage();
			case TC_LONG:
				return new DuskMessage.LongMessage();
			case TC_FLOAT:
				return new DuskMessage.FloatMessage();
			case TC_STRING:
				return new DuskMessage.StringMessage();
			case TC_STRING_LIST:
				return new DuskMessage.StringListMessage();
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

	static public DuskMessage create(int name) {
		return new DuskMessage(name);
	}

	static public ByteMessage create(int name, byte value) {
		return new ByteMessage(name, value);
	}

	static public IntegerMessage create(int name, int value) {
		return new IntegerMessage(name, value);
	}

	static public LongMessage create(int name, long value) {
		return new LongMessage(name, value);
	}

	static public FloatMessage create(int name, float value) {
		return new FloatMessage(name, value);
	}

	static public StringMessage create(int name, String value) {
		return new StringMessage(name, value);
	}

	static public StringListMessage create(int name, List<String> value) {
		return new StringListMessage(name, value);
	}

	public static class ByteMessage extends DuskMessage {

		public byte value;

		public ByteMessage() {
		}

		public ByteMessage(int name) {
			super(name);
		}

		public ByteMessage(int name, byte value) {
			super(name);
			this.value = value;
		}

		@Override
		public void send(DataOutputStream ostream) throws IOException {
			super.send(ostream);
			ostream.writeByte(value);
		}

		@Override
		public void receive(DataInputStream istream) throws IOException {
			super.receive(istream);
			value = istream.readByte();
		}

		@Override
		public byte getType() {
			return TC_BYTE;
		}

		@Override
		protected void format(PrintStream out, String s) {
			out.printf("%s%s name=%d value=%d\n", s, getClass().getSimpleName(), name, value);
		}
	}

	public static class IntegerMessage extends DuskMessage implements java.io.Serializable {

		public int value;

		public IntegerMessage() {
		}

		public IntegerMessage(int name) {
			super(name);
		}

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

		@Override
		protected void format(PrintStream out, String s) {
			out.printf("%s%s name=%d value=%d\n", s, getClass().getSimpleName(), name, value);
		}
	}

	public static class LongMessage extends DuskMessage implements java.io.Serializable {

		public long value;

		public LongMessage() {
		}

		public LongMessage(int name) {
			super(name);
		}

		public LongMessage(int name, long value) {
			super(name);
			this.value = value;
		}

		@Override
		public void send(DataOutputStream ostream) throws IOException {
			super.send(ostream);
			ostream.writeLong(value);
		}

		@Override
		public void receive(DataInputStream istream) throws IOException {
			super.receive(istream);
			value = istream.readLong();
		}

		@Override
		public byte getType() {
			return TC_LONG;
		}

		@Override
		protected void format(PrintStream out, String s) {
			out.printf("%s%s name=%d value=%d\n", s, getClass().getSimpleName(), name, value);
		}
	}

	public static class FloatMessage extends DuskMessage implements java.io.Serializable {

		public float value;

		public FloatMessage() {
		}

		public FloatMessage(int name) {
			super(name);
		}

		public FloatMessage(int name, float value) {
			super(name);
			this.value = value;
		}

		@Override
		public void send(DataOutputStream ostream) throws IOException {
			super.send(ostream);
			ostream.writeFloat(value);
		}

		@Override
		public void receive(DataInputStream istream) throws IOException {
			super.receive(istream);
			value = istream.readFloat();
		}

		@Override
		public byte getType() {
			return TC_FLOAT;
		}

		@Override
		protected void format(PrintStream out, String s) {
			out.printf("%s%s name=%d value=%f\n", s, getClass().getSimpleName(), name, value);
		}
	}

	public static class StringMessage extends DuskMessage implements java.io.Serializable {

		public String value;

		public StringMessage() {
		}

		public StringMessage(int name) {
			super(name);
		}

		public StringMessage(int name, String value) {
			super(name);
			this.value = value;
		}

		@Override
		public String toString() {
			return value;
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

		@Override
		protected void format(PrintStream out, String s) {
			out.printf("%s%s name=%d value=%s\n", s, getClass().getSimpleName(), name, value);
		}
	}

	public static class StringListMessage extends DuskMessage implements java.io.Serializable {

		public final List<String> value;

		public StringListMessage() {
			value = new ArrayList<>();
		}

		public StringListMessage(int name) {
			super(name);
			value = new ArrayList<>();
		}

		public StringListMessage(int name, List<String> value) {
			super(name);
			this.value = value;
		}

		public void add(String v) {
			value.add(v);
		}

		@Override
		public void send(DataOutputStream ostream) throws IOException {
			super.send(ostream);
			ostream.writeShort(value.size());
			for (String s : value) {
				ostream.writeUTF(s);
			}
		}

		@Override
		public void receive(DataInputStream istream) throws IOException {
			super.receive(istream);
			int len = istream.readShort() & 0xffff;

			for (int i = 0; i < len; i++)
				value.add(istream.readUTF());
		}

		@Override
		public byte getType() {
			return TC_STRING_LIST;
		}

		@Override
		protected void format(PrintStream out, String s) {
			out.printf("%s%s name=%d value= {\n", s, getClass().getSimpleName(), name);
			for (String v : value) {
				out.printf("%s  '%s'\n", s, v);
			}
			out.printf("%s}\n", s);
		}
	}
}