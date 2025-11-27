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

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

/**
 * Manages things, indices thereof, etc.
 *
 * Ideally it should be possible to implement different ways including
 * live disk backing.
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class ThingTable<T extends Thing> {

	// By name index
	final private HashMap<String, HashSet<T>> byName = new HashMap<>();
	// By id index
	final private HashMap<Long, T> byID = new HashMap<>();
	// backing store
	private final File path;

	public ThingTable(File path) {
		this.path = path;
	}

	void restoreState(Game game, File prototypeBase) {
		Thing.ThingResolver resolver = new Thing.PrototypeResolver(prototypeBase);
		
		try (BufferedReader in = new BufferedReader(new FileReader(path))) {
			T thing;

			while ((thing = (T) Thing.restoreState(game, in, resolver)) != null) {
				add(thing);
			}
		} catch (IOException ex) {
			ex.printStackTrace();
		}
	}
	void restoreState(Game game) {
		Thing.ThingResolver resolver = new Thing.EmptyResolver();
		
		try (BufferedReader in = new BufferedReader(new FileReader(path))) {
			T thing;

			while ((thing = (T) Thing.restoreState(game, in, resolver)) != null) {
				add(thing);
			}
		} catch (IOException ex) {
			ex.printStackTrace();
		}
	}

	void saveState(Game game) {
		try (BufferedWriter out = new BufferedWriter(new FileWriter(path))) {

			for (T o : byID.values()) {
				Thing.saveState(o, out);
			}
		} catch (IOException ex) {
		}
	}

	// Shoudln't be allowed for concurrency reasons
	@Deprecated
	public Collection<T> values() {
		return byID.values();
	}
	
	public void add(T thing) {
		HashSet<T> set = byName.get(thing.name);
		if (set == null) {
			set = new HashSet<>();
			byName.put(thing.name, set);
		}
		set.add(thing);
		byID.put(thing.ID, thing);
	}

	public void remove(T thing) {
		HashSet<T> set = byName.get(thing.name);

		set.remove(thing);
		if (set.isEmpty())
			byName.remove(thing.name);

		byID.remove(thing.ID);
	}

	/**
	 * Get the thing with the given id.
	 *
	 * @param id
	 * @return
	 */
	public T get(long id) {
		return byID.get(id);
	}

	/**
	 * Get the first item with the given name
	 *
	 * @param name
	 * @return
	 */
	public T get(String name) {
		HashSet<T> set = byName.get(name);

		if (set != null)
			return set.iterator().next();
		else
			return null;
	}

	/**
	 * Get all items with the same name
	 *
	 * @param name
	 * @return
	 */
	public Set<T> getAll(String name) {
		return byName.get(name);
	}
}
