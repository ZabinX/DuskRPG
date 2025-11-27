/*
 * This file is part of DuskZ, a graphical mud engine.
 *
 * Copyright (C) 2000 Tom Weingarten <captaint@home.com>
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
package duskz.server.entityz;

import java.io.BufferedWriter;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.util.HashMap;
import java.util.Map.Entry;

/**
 * Maps tracks per-user variables. Available for arbitrary script use.
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class VariableList {

	private HashMap<String, Object> map = new HashMap<>();

	public void put(String name, int v) {
		map.put(name, v);
		System.out.println("put integer " + name + " = " + v + " ? " + map.get(name));
	}

	public void put(String name, long v) {
		map.put(name, v);
	}

	public void put(String name, double v) {
		map.put(name, v);
	}

	public void put(String name, String v) {
		map.put(name, v);
	}

	public int getInteger(String name, int def) {
		Number x = (Number) map.get(name);
		System.out.println("getInteger " + name + " = " + x);
		if (x != null)
			return x.intValue();
		else
			return def;
	}

	public long getLong(String name, long def) {
		Number x = (Number) map.get(name);
		if (x != null)
			return x.longValue();
		else
			return def;
	}

	public double getDouble(String name, double def) {
		Number x = (Number) map.get(name);
		if (x != null)
			return x.doubleValue();
		else
			return def;
	}

	public String getString(String name, String def) {
		String x = (String) map.get(name);
		if (x != null)
			return x;
		else
			return def;
	}

	/**
	 * Set a property value as created by writeProperties
	 *
	 * @param name will be"varDouble", "varInteger", etc.
	 * @param value will be name:value
	 */
	public boolean setProperty(String name, String value) {
		int col = value.indexOf(':');

		if (col > 0) {
			String vname = value.substring(0, col);

			value = value.substring(col + 1);

			switch (name) {
				case "var.Integer":
					map.put(vname, Integer.valueOf(value));
					break;
				case "var.Long":
					map.put(vname, Long.valueOf(value));
					break;
				case "var.Double":
					map.put(vname, Double.valueOf(value));
					break;
				case "var.String":
					put(vname, value);
					break;
				default:
					return false;
			}
			return true;
		}
		return false;
	}

	public void writeProperties(BufferedWriter out) throws IOException {
		for (Entry<String, Object> entry : map.entrySet()) {
			out.write("var.");
			out.write(entry.getValue().getClass().getSimpleName());
			out.write('=');
			out.write(entry.getKey());
			out.write(':');
			out.write(String.valueOf(entry.getValue()));
			out.write('\n');
		}
	}

	public static void main(String[] args) throws IOException {
		VariableList v = new VariableList();

		v.put("int", 1);
		v.put("long", 1L);
		v.put("double", 1.0);
		v.put("string", "some string");

		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		v.writeProperties(bw);
		bw.flush();

		VariableList v2 = new VariableList();
		v2.setProperty("var.Double", "shit:99.0");
		v2.writeProperties(bw);
		bw.flush();

		System.out.println("shit = " + v2.getDouble("shit", -1));

	}
}
