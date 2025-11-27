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

import duskz.map.TileMap;
import duskz.protocol.Wearing;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Convert old things to new things
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class Converter {

	static void add(BufferedWriter dst, String name, String value) {
	}

	public static class PropWriter extends BufferedWriter {

		public PropWriter(Writer out) {
			super(out);
		}

		void add(String name, String value) throws IOException {
			append(name);
			append("=");
			append(value);
			append('\n');
		}
	}

	static void addWear(String name, BufferedReader in, PropWriter dst) throws IOException {
		dst.add(name, in.readLine().toLowerCase() + "," + in.readLine() + "," + in.readLine());
	}

	static boolean parsePlayer(String type, BufferedReader in, PropWriter dst) throws IOException {
		switch (type.toLowerCase()) {
			case "timestamp":
			case "privs":
			case "clan":
			case "race":
			case "title":
			case "description":
			case "map":
			case "x":
			case "y":
			case "hp":
			case "maxhp":
			case "mp":
			case "maxmp":
			case "cash":
			case "exp":
			case "image":
				dst.add(type, in.readLine());
				break;
			case "petname": // but it has pet too?  which one?
			case "pet":
				dst.add("pet", in.readLine());
				break;
			case "master":
				dst.add(type, in.readLine());
				break;
			case "skill":
				dst.add(type, in.readLine() + "," + in.readLine());
				//type = in.readLine();
				//addToSkill(type, Byte.parseByte(in.readLine()));
				break;
			case "condition": {
				// name,passed,duration
				dst.add(type, in.readLine() + "," + in.readLine() + "," + in.readLine());
				// FIXME: i/o to Condition
				//	Condition cndStore = game.getCondition(in.readLine());
				//	cndStore.ticksPast = Integer.parseInt(in.readLine());
				//	cndStore.duration = Integer.parseInt(in.readLine());
				//	if (cndStore.duration < -1) { // only necessary to repair
				//		cndStore.duration = -1; // after bug fix, can go away
				//	}
				//	addCondition(cndStore);
				break;
			}
			case "item": {
				dst.add(type, in.readLine());
				//Item itmStore = game.getItem(in.readLine());
				//if (itmStore != null) {
				//	itemList.addElement(itmStore);
				//}
				break;
			}
			case "item2": {
				addWear("item", in, dst);
				//for compatibility. Will be replaced with item later
				//Item itmStore = game.getItem(in.readLine());
				//if (itmStore != null) {
				//	itmStore.lngDurability = Long.parseLong(in.readLine());
				//	itmStore.intUses = Integer.parseInt(in.readLine());
				//	itemList.addElement(itmStore);
				//}
				break;
			}

			case "sp":
				dst.add("mp", in.readLine());
				break;
			case "maxsp":
				dst.add("maxmp", in.readLine());
				break;
			case "stre":
			case "str":
				dst.add("str", in.readLine());
				break;
			case "inte":
			case "int":
				dst.add("int", in.readLine());
				break;
			case "dext":
				dst.add("dex", in.readLine());
				break;
			case "cons":
				dst.add("con", in.readLine());
				break;
			case "wisd":
				dst.add("wis", in.readLine());
				break;
			// FIXME: do i need these 'old' versions?
			case "wield":
			case "arms":
			case "legs":
			case "torso":
			case "waist":
			case "neck":
			case "skull":
			case "eyes":
			case "hands":
				dst.add(type.toLowerCase(), in.readLine() + ",,");
				break;
			case "wield2":
				addWear("wield", in, dst);
				break;
			case "arms2":
				addWear("arms", in, dst);
				break;
			case "legs2":
				addWear("legs", in, dst);
				break;
			case "torso2":
				addWear("torso", in, dst);
				break;
			case "waist2":
				addWear("waist", in, dst);
				break;
			case "neck2":
				addWear("neck", in, dst);
				break;
			case "skull2":
				addWear("skull", in, dst);
				break;
			case "eyes2":
				addWear("eyes", in, dst);
				break;
			case "hands2":
				addWear("hands", in, dst);
				break;
			case "nofollow":
				dst.add(type, "true");
				break;
			case "nopopup":
			case "audiooff":
			case "coloroff":
				break;
			case "nochannel":
				dst.add(type, in.readLine());
				break;
			default:
				return false;
		}
		return true;
	}

	static boolean parseMob(String type, BufferedReader in, PropWriter dst) throws IOException {
		// everything in player, plus ...


		switch (type.toLowerCase()) {
			case "bravery":
			case "grouprelation":
			case "faction":
				dst.add(type, in.readLine());
				break;
			case "giveitem":
				dst.add(type, in.readLine().toLowerCase() + "," + in.readLine());
				break;
			case "givegp":
				dst.add("givegold", in.readLine());
				break;
			// nice: mob format is different ...
			case "wield":
			case "arms":
			case "legs":
			case "torso":
			case "waist":
			case "neck":
			case "skull":
			case "eyes":
			case "hands":
				addWear(type.toLowerCase(), in, dst);
				break;
			case "onbattle":
				dst.add("onBattle", in.readLine());
				break;
			default:
				return false;
		}
		return true;
	}

	static boolean parseRace(String type, BufferedReader in, PropWriter dst) throws IOException {
		switch (type) {
			case "hp":
			case "mp":
			case "image":
				dst.add(type, in.readLine());
				break;
			case "stre":
			case "str":
				dst.add("str", in.readLine());
				break;
			case "inte":
			case "int":
				dst.add("int", in.readLine());
				break;
			case "dext":
				dst.add("dex", in.readLine());
				break;
			case "cons":
				dst.add("con", in.readLine());
				break;
			case "wisd":
				dst.add("wis", in.readLine());
				break;
			// i don't think these are used.
			case "range":
			case "hp_limit":
			case "mp_limit":
			case "exp_limit":
			case "stre_limit":
			case "inte_limit":
			case "dext_limit":
			case "cons_limit":
			case "wisd_limit":
			default:
				return false;
		}
		return true;
	}

	static void convertPlayer(File src, File dst) throws IOException {
		System.out.println("converting: " + src);
		try (BufferedReader in = new BufferedReader(new FileReader(src));
				PropWriter out = new PropWriter(new FileWriter(dst))) {
			String line;

			out.add("name", src.getName());
			if (!src.getName().equals("default"))
				out.add("password", in.readLine());

			while ((line = in.readLine()) != null) {
				line = line.trim();
				if (line.equals("."))
					break;
				if (line.equals("") || line.startsWith("#"))
					continue;
				if (!parsePlayer(line, in, out)) {
					System.out.println(" unknown parameter: " + line);
				}
			}
		}
		//	engGame.log.printError("parseUserFile():Parsing \"" + strStore + "\" from " + entityName + "'s file", e);
	}

	static void convertMob(File src, File dst) throws IOException {
		System.out.println("converting: " + src);
		try (BufferedReader in = new BufferedReader(new FileReader(src));
				PropWriter out = new PropWriter(new FileWriter(dst))) {
			String line;

			out.add("name", src.getName());

			while ((line = in.readLine()) != null) {
				line = line.trim();
				if (line.equals("."))
					break;
				if (line.equals("") || line.startsWith("#"))
					continue;
				if (!(parseMob(line, in, out)
						|| parsePlayer(line, in, out))) {
					System.out.println(" unknown parameter: " + line);
				}
			}
		}
		//	engGame.log.printError("parseUserFile():Parsing \"" + strStore + "\" from " + entityName + "'s file", e);
	}

	static void convertRace(File src, File dst) throws IOException {
		System.out.println("converting: " + src);
		try (BufferedReader in = new BufferedReader(new FileReader(src));
				PropWriter out = new PropWriter(new FileWriter(dst))) {
			String line;

			out.add("name", src.getName());

			while ((line = in.readLine()) != null) {
				line = line.trim();
				if (line.equals("."))
					break;
				if (line.equals("") || line.startsWith("#"))
					continue;
				if (!parseRace(line, in, out)) {
					System.out.println(" unknown parameter: " + line);
				}
			}
		}
	}

	static boolean parseItem(String type, BufferedReader in, Holdable item) throws IOException {
		switch (type) {
			case "type":
				// discard type
				in.readLine();
				break;
			case "description":
				item.description = in.readLine();
				break;
			case "kind":
				String w = in.readLine().toLowerCase();
				switch (w) {
					case "arms":
						((Armour) item).worn = Wearing.ARMS;
						break;
					case "legs":
						((Armour) item).worn = Wearing.LEGS;
						break;
					case "torso":
						((Armour) item).worn = Wearing.TORSO;
						break;
					case "waist":
						((Armour) item).worn = Wearing.WAIST;
						break;
					case "neck":
						((Armour) item).worn = Wearing.NECK;
						break;
					case "skull":
						((Armour) item).worn = Wearing.SKULL;
						break;
					case "eyes":
						((Armour) item).worn = Wearing.EYES;
						break;
					case "hands":
						((Armour) item).worn = Wearing.HANDS;
						break;
					default:
						System.out.println("  unknown armour location: " + w);
						break;
				}
				break;
			case "cost":
				item.cost = Integer.valueOf(in.readLine());
				break;
			case "durability":
				((Wearable) item).durability = Long.valueOf(in.readLine());
				break;
			case "uses":
				item.uses = Integer.valueOf(in.readLine());
				break;
			case "mod": {
				int mod = Integer.valueOf(in.readLine());
				if (item instanceof Wearable) {
					((Wearable) item).mod = mod;
				} else if (mod != 0) {
					System.out.println(" setting mod on non-wearable item = " + mod);
				}
				break;
			}
			case "range":
				((Weapon) item).range = Integer.valueOf(in.readLine());
				break;
			case "image":
				item.image = Integer.valueOf(in.readLine());
				break;
			case "onuse":
				item.onUse = in.readLine();
				break;
			case "onwear":
				((Wearable) item).onWear = in.readLine();
				break;
			case "onunwear":
				((Wearable) item).onUnwear = in.readLine();
				break;
			case "onget":
				item.onGet = in.readLine();
				break;
			case "ondrop":
				item.onDrop = in.readLine();
				break;
			default:
				return false;
		}
		return true;
	}	//	engGame.log.printError("parseUserFile():Parsing \"" + strStore + "\" from " + entityName + "'s file", e);

	static void convertItem(File src, File dst) throws IOException {
		System.out.println("converting: " + src);
		String type = null;
		// First find type
		try (BufferedReader in = new BufferedReader(new FileReader(src))) {
			String line;

			while ((line = in.readLine()) != null) {
				if (line.toLowerCase().equals("type")) {
					type = in.readLine().trim().toLowerCase();
				}
			}
		}
		if (type == null)
			type = "item";
		//type = armor
		//type = drink
		//type = food
		//type = item
		//type = weapon

		Holdable item;
		switch (type) {
			case "armor":
				item = new Armour(null);
				break;
			case "drink":
				item = new Drink(null);
				break;
			case "food":
				item = new Food(null);
				break;
			case "item":
				item = new Item(null);
				break;
			case "weapon":
				item = new Weapon(null);
				break;
			default:
				System.out.println("unknown type: " + type);
				return;
		}

		//System.out.println(" type = " + type);

		// hang on, items don't have an x/y when saved ...
		TileMap mainmap = new TileMap("main", 0, 0);

		try (BufferedReader in = new BufferedReader(new FileReader(src));
				BufferedWriter out = new BufferedWriter(new FileWriter(dst))) {
			String line;

			item.name = src.getName();

			while ((line = in.readLine()) != null) {
				line = line.trim();
				if (line.equals("."))
					break;
				if (line.equals("") || line.startsWith("#"))
					continue;
				if (!parseItem(line.toLowerCase(), in, item)) {
					System.out.println(" unknown parameter: " + line);
				}
			}

			item.map = mainmap;

			out.append("type.");
			out.append(item.getClass().getSimpleName());
			out.append("=");
			out.append(item.name);
			out.append('\n');

			item.writeProperties(out);

			out.append("=end");
		}
	}

	static public void main(String[] args) {
		File old = new File("/home/notzed/src/DuskRPG/DuskFiles/DuskX");
		File game = new File("/home/notzed/dusk/game");

		if (true) {
			for (File f : new File(old, "users").listFiles()) {
				try {
					convertPlayer(f, new File(game, "players/" + f.getName()));
				} catch (IOException ex) {
					Logger.getLogger(Converter.class.getName()).log(Level.SEVERE, null, ex);
				}
			}
			for (File f : new File(old, "defMobs").listFiles()) {
				try {
					convertMob(f, new File(game, "defMobs/" + f.getName()));
				} catch (IOException ex) {
					Logger.getLogger(Converter.class.getName()).log(Level.SEVERE, null, ex);
				}
			}
			for (File f : new File(old, "defRaces").listFiles()) {
				try {
					convertRace(f, new File(game, "defRaces/" + f.getName()));
				} catch (IOException ex) {
					Logger.getLogger(Converter.class.getName()).log(Level.SEVERE, null, ex);
				}
			}
		}
		for (File f : new File(old, "defItems").listFiles()) {
			try {
				convertItem(f, new File(game, "defItems/" + f.getName()));
			} catch (Exception ex) {
				ex.printStackTrace(System.out);
			}
		}
	}
}
