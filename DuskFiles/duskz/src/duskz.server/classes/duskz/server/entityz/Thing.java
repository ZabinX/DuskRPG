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

import duskz.map.Locatable;
import duskz.map.TileMap;
import duskz.util.PropertyLoader;
import duskz.protocol.DuskMessage;
import duskz.protocol.EntityUpdateMessage;
import duskz.util.PropertyLoader.PropertyEntry;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.Comparator;

/**
 * Base object for all dusk things
 *
 * Handles common fields, creation and typeing, and i/o.
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public abstract class Thing implements Cloneable, Locatable {

	/**
	 * Every non-abstract sub-class of thing needs a unique
	 * number. Used to simplify some code decisions.
	 */
	public static final int TYPE_PLAYER = 0;
	public static final int TYPE_PET = 1;
	public static final int TYPE_MOBILE = 2;
	public static final int TYPE_SIGN = 3;
	public static final int TYPE_PROP = 4;
	public static final int TYPE_GAME_SHOP = 5;
	public static final int TYPE_PLAYER_SHOP = 6;
	public static final int TYPE_ITEM = 7;
	public static final int TYPE_FOOD = 8;
	public static final int TYPE_DRINK = 9;
	public static final int TYPE_WEAPON = 10;
	public static final int TYPE_ARMOUR = 11;
	public static final int TYPE_CONTAINER = 12;
	public static final int TYPE_TRAINING = 13;
	public final static Comparator<Thing> cmpName = new Comparator<Thing>() {
		@Override
		public int compare(Thing o1, Thing o2) {
			return o1.name.compareTo(o2.name);
		}
	};
	protected final Game game;
	/**
	 * Game unique id
	 */
	public final long ID;
	/**
	 * Name
	 */
	public String name;
	/**
	 * Description
	 */
	public String description = null;
	/**
	 * Hide the name from players.
	 *
	 * boolean isHideName;
	 * /**
	 * Map object belongs to
	 */
	public TileMap<Thing> map;
	/**
	 * Location on map
	 */
	public int x, y;
	/**
	 * Current image id. TODO: players get images from race instead.
	 */
	protected int image;
	//
	static long nextid = 1;
	static Integer idlock = new Integer(0);

	/**
	 * Create a new globally unique id
	 *
	 * @return
	 */
	public static long createID() {
		synchronized (idlock) {
			return nextid++;
		}
	}

	public Thing(Game game) {
		this.ID = createID();
		this.game = game;
	}

	/*
	 *
	 */
	@Override
	public boolean equals(Object obj) {
		if (obj instanceof Thing) {
			return ((Thing) obj).ID == ID;
		} else
			return false;
	}

	@Override
	public int hashCode() {
		int hash = 3;
		hash = 61 * hash + (int) (this.ID ^ (this.ID >>> 32));
		return hash;
	}

	@Override
	public int getX() {
		return x;
	}

	@Override
	public int getY() {
		return y;
	}

	@Override
	public void setX(int x) {
		this.x = x;
	}

	@Override
	public void setY(int y) {
		this.y = y;
	}

	public int getImage() {
		return image;
	}

	/**
	 * For efficient decision making, return TYPE_* types
	 *
	 * @return
	 */
	public abstract int getType();

	/**
	 * Calculate the l1 or manhatten distance to another thing
	 *
	 * @param other
	 * @return
	 */
	public int distanceL1(Thing other) {
		return Math.abs(other.x - x) + Math.abs(other.y - y);
	}

	/**
	 * Create an EntityUpdate message with the given name
	 *
	 * @param msg
	 * @return
	 */
	public DuskMessage createUpdateMessage(int name) {
		EntityUpdateMessage en = new EntityUpdateMessage();

		en.name = name;
		en.id = ID;
		en.entityName = this.name;
		en.entityType = (byte) getType();
		en.x = (short) x;
		en.y = (short) y;
		en.image = (short) this.getImage();
		en.imageStep = -1;

		return en;
	}

	/**
	 * Used by loader to read descriptor files
	 *
	 * @param name
	 * @param value
	 */
	void setProperty(String name, String value) {
		switch (name) {
			case "name":
				this.name = value;
				break;
			case "description":
				this.description = value;
				break;
			case "map":
				this.map = game.getMap(value);
				break;
			case "x":
				this.x = Integer.parseInt(value);
				break;
			case "y":
				this.y = Integer.parseInt(value);
				break;
			case "image":
				this.image = Integer.parseInt(value);
				break;
			default:
				//System.out.println("unknown property: " + name + " on class " + getClass().getSimpleName());
				break;
		}
	}
	// FIXME: move to a PropertyWriter class

	protected void writeProperty(BufferedWriter out, String name, String value) throws IOException {
		if (value != null) {
			out.write(name);
			out.write('=');
			out.write(value);
			out.write('\n');
		}
	}

	protected void writeProperty(BufferedWriter out, String name, int value) throws IOException {
		writeProperty(out, name, String.valueOf(value));
	}

	protected void writeProperty(BufferedWriter out, String name, long value) throws IOException {
		writeProperty(out, name, String.valueOf(value));
	}

	protected void writeProperty(BufferedWriter out, String name, double value) throws IOException {
		writeProperty(out, name, String.valueOf(value));
	}

	/**
	 * Write out the object properties, i.e. for saving the entire object.
	 *
	 * @param out
	 * @throws IOException
	 */
	protected void writeProperties(BufferedWriter out) throws IOException {
		writeProperty(out, "name", name);
		writeProperty(out, "description", description);
		writeProperty(out, "map", map.name);
		writeProperty(out, "x", x);
		writeProperty(out, "y", y);
		writeProperty(out, "image", image);
	}

	/**
	 * Write out live game state - parameters which allow an instance of the object
	 * to be restored later.
	 *
	 * For mobs it will be their location, for players it is nothing as they are
	 * always stored in full separately.
	 *
	 * The default implementation saves out the name and location.
	 *
	 * @param out
	 * @throws IOException
	 */
	void writeState(BufferedWriter out) throws IOException {
		writeProperty(out, "name", name);
		writeProperty(out, "x", x);
		writeProperty(out, "y", y);
	}

	void writeHeader(BufferedWriter out) throws IOException {
		out.append("type.");
		out.append(getClass().getSimpleName());
		out.append('=');
		out.append(name);
		out.append('\n');
	}

	void writeFooter(BufferedWriter out) throws IOException {
		out.append("=end\n");
	}

	/**
	 * Save the state to a stream in a way which can also restore the same object.
	 * this will call writeState which should write out volatile fields, it doesn't
	 * need to write out fields that are loaded from a prototype.
	 *
	 * @param out
	 * @throws IOException
	 */
	public static void saveState(Thing thing, BufferedWriter out) throws IOException {
		thing.writeHeader(out);
		thing.writeState(out);
		thing.writeFooter(out);
	}

	static Thing createThing(Game game, String type) throws ClassNotFoundException {
		try {
			Class<Thing> c = (Class<Thing>) Class.forName("duskz.server.entityz." + type);
			return c.getConstructor(Game.class).newInstance(game);
		} catch (Exception ex) {
			ex.printStackTrace();
			throw new ClassNotFoundException("Failed", ex);
		}
	}

	public interface ThingResolver {

		Thing resolve(Game game, String klass, String name);
	}

	public static class PrototypeResolver implements ThingResolver {

		File base;

		/**
		 * Create a new thing resolver which loads a prototype
		 * from a file.
		 *
		 * @param base
		 */
		public PrototypeResolver(File base) {
			this.base = base;
		}

		@Override
		public Thing resolve(Game game, String klass, String name) {
			Thing thing = null;
			try {
				thing = createThing(game, klass);
				thing.name = name;
				thing.load(new File(base, name));
			} catch (ClassNotFoundException | IOException ex) {
				System.out.println("Cannot load prototype: " + ex);
			}
			return thing;
		}
	}

	public static class EmptyResolver implements ThingResolver {

		/**
		 * Create a new resolver which just instantiates an empty
		 * object.
		 */
		public EmptyResolver() {
		}

		@Override
		public Thing resolve(Game game, String klass, String name) {
			Thing thing = null;
			try {
				thing = createThing(game, klass);
				thing.name = name;
			} catch (ClassNotFoundException ex) {
				System.out.println("Cannot load prototype: " + ex);
			}
			return thing;
		}
	}
	// todo this might need to load some object prototype first

	public static Thing restoreState(Game game, BufferedReader in, ThingResolver resolve) throws IOException {
		String line;
		Thing thing = null;

		while ((line = in.readLine()) != null) {
			line = line.trim();
			int col = line.indexOf('=');

			if (thing == null) {
				if (line.startsWith("type.") && col > 0) {
					String type = line.substring(5, col);
					String name = line.substring(col + 1);

					thing = resolve.resolve(game, type, name);
				} else {
					continue;
				}
			} else if (line.equals("=end")) {
				break;
			} else if (col > 0) {
				String name = line.substring(0, col);
				String value = line.substring(col + 1);
				try {
					thing.setProperty(name, value);
				} catch (NumberFormatException ex) {
				}
			}
		}
		if (thing != null)
			thing.loaded();
		return thing;
	}

	/**
	 * Save whole state to file
	 *
	 * @param path
	 * @throws IOException
	 */
	public void save(File path) throws IOException {
		// Write to temp file first, and if ok, overwrite old one
		File tmp = new File(path.getParentFile(), path.getName() + "~");

		try (BufferedWriter out = new BufferedWriter(new FileWriter(tmp))) {
			writeHeader(out);
			// writeProperty(getFileVersion()?))
			writeProperties(out);
			writeFooter(out);
		}

		Files.move(tmp.toPath(), path.toPath(), StandardCopyOption.ATOMIC_MOVE, StandardCopyOption.REPLACE_EXISTING);
	}

	/**
	 * Load whole state from a file
	 *
	 * This works with the typed fields as well as not.
	 *
	 * @param path
	 * @throws IOException
	 */
	public void load(File path) throws IOException {
		try (PropertyLoader pl = new PropertyLoader(path)) {
			for (PropertyEntry pe : pl) {
				if (pe.name.startsWith("type.")) {
					if (pe.name.startsWith("type." + getClass().getSimpleName())) {
						continue;
					} else {
						throw new IOException("Trying to load " + pe.name.substring(5) + " into " + getClass().getSimpleName());
					}
				} else if (pe.name.equals("=end")) {
					break;
				}
				try {
					setProperty(pe.name, pe.value);
				} catch (NumberFormatException ex) {
				}
			}
		}
	}

	/**
	 * Called after an object has been fully loaded or restored.
	 * Can validate/setup stuff.
	 */
	protected void loaded() throws IOException {
	}

	public void look(Active viewer) {
		if (description != null)
			viewer.chatMessage("You see " + description + ".");
		else
			viewer.chatMessage("You see nothing special.");
	}
}
