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
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.List;

/**
 * DuskMessage for a list of named value
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class ListMessage extends DuskMessage {

	final public List<DuskMessage> value;

	ListMessage() {
		value = new ArrayList<>();
	}

	public ListMessage(int name) {
		super(name);
		value = new ArrayList<>();
	}

	public void add(DuskMessage a) {
		value.add(a);
	}

	public void add(int name, byte value) {
		this.value.add(DuskMessage.create(name, value));
	}

	public void add(int name, int value) {
		this.value.add(DuskMessage.create(name, value));
	}

	public void add(int name, long value) {
		this.value.add(DuskMessage.create(name, value));
	}

	public void add(int name, String value) {
		this.value.add(DuskMessage.create(name, value));
	}

	public void add(long id, int name, int value) {
		this.value.add(DuskMessage.create(id, name, value));
	}
	public void add(long id, int name, String value) {
		this.value.add(DuskMessage.create(id, name, value));
	}

	public DuskMessage.StringListMessage add(int name, List<String> value) {
		StringListMessage a = DuskMessage.create(name, value);
		this.value.add(a);
		return a;
	}

	public DuskMessage get(int name) {
		int len = value.size();
		for (int i = 0; i < len; i++) {
			DuskMessage a = value.get(i);
			if (a.name == name)
				return a;
		}
		return null;
	}

	public byte getByte(int name) {
		return ((ByteMessage) get(name)).value;
	}

	public int getInteger(int name) {
		DuskMessage m = get(name);
		
		if (m instanceof IntegerMessage)
			return ((IntegerMessage)m).value;
		else if (m instanceof EntityIntegerMessage) {
			return ((EntityIntegerMessage)m).value;
		}
		throw new ClassCastException(m.getClass().getName() + " not IntegerMessage");
	}

	public long getLong(int name) {
		return ((LongMessage) get(name)).value;
	}

	public String getString(int name) {
		return ((StringMessage) get(name)).value;
	}

	public List<String> getStringList(int name) {
		return ((StringListMessage) get(name)).value;
	}

	public byte getByte(int name, byte def) {
		DuskMessage a = get(name);

		if (a == null || a.getType() != TC_BYTE)
			return def;

		return ((ByteMessage) a).value;
	}

	public int getInteger(int name, int def) {
		DuskMessage a = get(name);

		if (a == null || a.getType() != TC_INTEGER)
			return def;
		return ((IntegerMessage) a).value;
	}

	public long getLong(int name, long def) {
		DuskMessage a = get(name);

		if (a == null || a.getType() != TC_INTEGER)
			return def;
		return ((LongMessage) a).value;
	}

	public String getString(int name, String def) {
		DuskMessage a = get(name);

		if (a == null || a.getType() != TC_STRING)
			return def;
		return ((StringMessage) a).value;
	}

	public List<String> getStringList(int name, List<String> def) {
		DuskMessage a = get(name);

		if (a == null || a.getType() != TC_STRING_LIST)
			return def;
		return ((StringListMessage) a).value;
	}

	public DuskMessage getMessage(int name) {
		return get(name);
	}

	@Override
	public void send(DataOutputStream ostream) throws IOException {
		super.send(ostream);
		ostream.writeShort(value.size());
		for (DuskMessage a : value) {
			ostream.writeByte(a.getType());
			a.send(ostream);
		}
	}

	@Override
	public void receive(DataInputStream istream) throws IOException {
		super.receive(istream);

		int len = istream.readShort();
		for (int i = 0; i < len; i++) {
			value.add(receiveMessage(istream));
		}
	}

	@Override
	public byte getType() {
		return TC_LIST;
	}

	@Override
	protected void format(PrintStream out, String s) {
		out.printf("%s%s name=%d value = {\n", s, getClass().getSimpleName(), name);
		for (DuskMessage dm : value) {
			dm.format(out, s + "\t");
		}
		out.printf("%s}\n", s);
	}
}

