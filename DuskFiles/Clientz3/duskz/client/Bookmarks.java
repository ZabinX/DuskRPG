/*
 * This file is part of DuskZ, a graphical mud engine.
 *
 * Copyright (C) 2013 Michael Zucchi <notzed@gmail.com>
 *
 * DuskZ is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * DuskZ is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with DuskZ.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Changes
 */
package duskz.client;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.NoSuchFileException;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.ArrayList;
import java.util.List;

/**
 * Bookmark format is host:port
 *
 * TODO: store username too?
 *
 * @author notzed
 */
public class Bookmarks {

	List<Bookmark> bookmarks = new ArrayList<>();

	public List<Bookmark> getBookmarks() {
		return bookmarks;
	}

	public void setBookmarks(List<Bookmark> bookmarks) {
		this.bookmarks = bookmarks;
	}

	public Bookmarks() {
	}

	public void load(String path) throws IOException {
		try (BufferedReader br = Files.newBufferedReader(Paths.get(path), Charset.forName("UTF-8"))) {
			String l;

			while ((l = br.readLine()) != null) {
				try {
					bookmarks.add(Bookmark.valueOf(l));
				} catch (NumberFormatException ex) {
				}
			}
		} catch (NoSuchFileException x) {
			// ignore it
		}
	}

	public void save(String path) throws IOException {
		try (BufferedWriter br = Files.newBufferedWriter(Paths.get(path), Charset.forName("UTF-8"), StandardOpenOption.CREATE,
				StandardOpenOption.WRITE, StandardOpenOption.TRUNCATE_EXISTING)) {
			for (Bookmark b : bookmarks) {
				b.write(br);
			}
		}
	}

	public static class Bookmark {

		public String host;
		public int port;

		public Bookmark(String host, int port) {
			this.host = host;
			this.port = port;
		}

		public static Bookmark valueOf(String v) {
			int p = v.indexOf(':');
			if (p != -1) {
				return new Bookmark(v.substring(0, p), Integer.valueOf(v.substring(p + 1)));
			} else {
				return new Bookmark(v, 7400);
			}
		}

		private void write(BufferedWriter br) throws IOException {
			br.write(host);
			br.write(':');
			br.write(Integer.toString(port));
			br.write('\n');
		}

		@Override
		public String toString() {
			return host + ":" + port;
		}
	}
}
