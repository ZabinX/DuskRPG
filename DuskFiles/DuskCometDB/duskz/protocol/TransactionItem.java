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
/**
 * Changes
 */
package duskz.protocol;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;

/**
 * Represents a transaction item (buy/sell) for server protocol.
 *
 * @author notzed
 */
public class TransactionItem implements Comparable<TransactionItem> {
	
	// From wearing
	public int type;
	public String name;
	public int count;
	public int cost;
	public String units;

	public TransactionItem() {
	}

	public TransactionItem(int type, String name, int count, int cost, String units) {
		this.type = type;
		this.name = name;
		this.count = count;
		this.cost = cost;
		this.units = units;
	}

	public String getName() {
		return name;
	}

	public int getCount() {
		return count;
	}

	public int getCost() {
		return cost;
	}

	public String getCostText() {
		return cost + " " + units;
	}
	
	public String getUnits() {
		return units;
	}

	@Override
	public String toString() {
		return cost + ") " + name + "[" + count + "]";
	}

	@Override
	public int compareTo(TransactionItem t) {
		return name.compareTo(t.name);
	}

	public void send(DataOutputStream ostream) throws IOException {
		ostream.writeUTF(name);
		ostream.writeInt(count);
		ostream.writeInt(cost);
		ostream.writeUTF(units);
	}

	public void receive(DataInputStream istream) throws IOException {
		name = istream.readUTF();
		count = istream.readInt();
		cost = istream.readInt();
		units = istream.readUTF();
	}
}

