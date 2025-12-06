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
package duskz.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Iterator;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Slight abuse of iterators and autoclosable and iterable to be able to iterate
 * through properties easily.
 *
 * Used as:
 * try (PropertyLoader pl = new PropertyLoader(file)) {
 * for (PropertyEntry pe: pl) {
 * }
 * }
 *
 * FIXME: maye just change to PropertyReader and use a readEntry() interface
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class PropertyLoader implements Iterable<PropertyLoader.PropertyEntry>, AutoCloseable {

	BufferedReader reader;

	public PropertyLoader(File src) throws FileNotFoundException {
		reader = new BufferedReader(new FileReader(src));
	}

	/**
	 * Should only be called once for a given property loader.
	 *
	 * @return
	 */
	@Override
	public Iterator<PropertyEntry> iterator() {
		return new PropertyIterator(reader);
	}

	@Override
	public void close() throws IOException {
		if (reader != null)
			reader.close();
	}

	static class PropertyIterator implements Iterator<PropertyEntry> {

		BufferedReader reader;
		String name;
		PropertyEntry entry = new PropertyEntry();

		public PropertyIterator(BufferedReader reader) {
			this.reader = reader;
		}

		@Override
		public boolean hasNext() {
			try {
				if (reader == null)
					return false;

				if (name != null)
					return true;

				do {
					String line = reader.readLine();

					if (line == null)
						return false;
					else if (!line.startsWith("#")) {
						int c = line.indexOf('=');

						if (c != -1) {
							entry.value = line.substring(c + 1).trim();
							entry.name = name = line.substring(0, c).trim();
						} else {
							System.out.println("unparsable property line: " + line);
						}
					}
				} while (name == null);

				return true;
			} catch (IOException ex) {
				Logger.getLogger(PropertyLoader.class.getName()).log(Level.SEVERE, null, ex);
				return false;
			}
		}

		@Override
		public PropertyEntry next() {
			if (name == null)
				if (!hasNext()) {
					throw new IndexOutOfBoundsException();
				}

			name = null;
			return entry;
		}

		@Override
		public void remove() {
			throw new UnsupportedOperationException("Not supported yet.");
		}
	}

	public static class PropertyEntry {

		public String name;
		public String value;

		public int asInteger(int def) {
			try {
				return Integer.valueOf(value);
			} catch (NumberFormatException x) {
				return def;
			}
		}
	}

	public static void main(String[] args) throws IOException {
		File file = new File("mobs");
		try (PropertyLoader pl = new PropertyLoader(file)) {
			for (PropertyEntry pe : pl) {
				System.out.println("entry: '" + pe.name + "' " + pe.value);
			}
		}

	}
}
