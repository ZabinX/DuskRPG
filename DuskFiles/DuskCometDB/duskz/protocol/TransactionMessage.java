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
 * A list of for buy or sell items.
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class TransactionMessage extends DuskMessage {

	public final List<TransactionItem> items;

	TransactionMessage() {
		items = new ArrayList<>();
	}

	public TransactionMessage(int name) {
		super(name);
		items = new ArrayList<>();
	}

	public TransactionMessage(int name, List<TransactionItem> items) {
		super(name);
		this.items = items;
	}

	public void add(TransactionItem item) {
		items.add(item);
	}

	public void add(int type, String name, int count, int cost, String units) {
		items.add(new TransactionItem(type, name, count, cost, units));
	}

	@Override
	public void send(DataOutputStream ostream) throws IOException {
		super.send(ostream);
		ostream.writeShort(items.size());
		for (TransactionItem item : items) {
			item.send(ostream);
		}
	}

	@Override
	public void receive(DataInputStream istream) throws IOException {
		super.receive(istream);
		int count = istream.readShort();
		for (int i = 0; i < count; i++) {
			TransactionItem item = new TransactionItem();
			item.receive(istream);
			items.add(item);
		}
	}

	@Override
	public byte getType() {
		return TC_TRANSACTION;
	}

	@Override
	protected void format(PrintStream out, String s) {
		out.printf("%s%s name=%d value= {\n", s, getClass().getSimpleName(), name);
		for (TransactionItem v : items) {
			out.printf("%s  %d '%s' %d %s\n", s, v.count, v.name, v.cost, v.units);
		}
		out.printf("%s}\n", s);
	}
}
