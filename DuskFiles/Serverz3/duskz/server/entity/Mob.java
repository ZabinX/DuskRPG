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
/**
 * Changes
 * Feb-2013 Michael Zucchi - modernised java, script wrapper,
 * loader function.
 */
package duskz.server.entity;

import duskz.protocol.Wearing;
import duskz.server.Condition;
import duskz.server.DuskEngine;
import duskz.server.Faction;
import duskz.server.GiveItem;
import duskz.server.ItemList;
import duskz.server.Log;
import duskz.server.Script;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

/**
 * Mob(mobile) is the class of non-player moving entities.
 *
 * @author Tom Weingarten
 */
public class Mob extends LivingThing {

	final public List<GiveItem> vctGiveItems = new ArrayList<>();
	//Mob level
	public int level = -1;
	//AI
	public double dblBravery = 0, //0 to 1, -1 makes mob always flee
			dblGroupRelation = 0;  //-1 to 1
	public String strOnBattle = null;
	//Faction
	public Faction fctFaction;
	public boolean blnOneUse = false;
	public boolean blnCanSeePlayer = false;

	//new Mob
	public Mob(String strType, int locx, int locy, DuskEngine inEngine)
			throws Exception {
		super(inEngine.getID(), strType);
		noChannel = -1;
		game = inEngine;
		Type = 1;
		race = strType;
		x = locx;
		y = locy;
		originalX = x;
		originalY = y;
		wornItems = new Equipment();
		itemList = new ItemList();
		battle = null;
		loadMobFile(strType.toLowerCase());
		hp = maxhp;
		mp = maxmp;
		isSleeping = false;
		isLoaded = true;
	}

	//new Mob w/ levels (provided for pre-2.3 compatibility)
	public Mob(String strType, int level, int locx, int locy, DuskEngine inEngine)
			throws Exception {
		super(inEngine.getID(), strType);
		noChannel = -1;
		game = inEngine;
		Type = 1;
		race = strType;
		x = locx;
		y = locy;
		originalX = x;
		originalY = y;
		wornItems = new Equipment();
		itemList = new ItemList();
		battle = null;
		this.level = level;
		loadMobFile(strType.toLowerCase());
		maxhp = maxhp * level;
		maxmp = maxmp * level;
		stre = stre * level;
		inte = inte * level;
		wisd = wisd * level;
		dext = dext * level;
		cons = cons * level;
		hp = maxhp * level;
		mp = maxmp * level;
		isSleeping = false;
		isLoaded = true;
	}

	@Override
	public void leaveBattle() {
		super.leaveBattle();
		if (blnOneUse) {
			game.removeDuskObject(this);
		} else {
			game.mobKilled(this);
			// FIXME: need a game.mobKilled() function
			// FIXME: this magic number is used in TickThread and DuskEngine
			x = -6;
			y = -6;
			hp = game.mobrespawnspeed;//seconds till respawn
		}
	}

	public void loadMobFile(String type) throws FileNotFoundException, IOException {
		String line;
		// perform case insenitive lookup to match windows filesystem
		// TODO: put in util class or fix game files
		Optional<Path> path = Files.find(Path.of("defMobs"), 1, (t, a)-> t.getFileName().toString().toLowerCase().equals(type)).findAny();
		if (path.isPresent()) {
			try (RandomAccessFile file = new RandomAccessFile(path.get().toFile(), "r")) {
				while (!((line = file.readLine()) == null || line.equals("."))) {
					try {
						parseMobFile(file, line);
					} catch (NumberFormatException x) {
						throw new IOException("Problem parsing mob " + path + " on field " + line, x);
					}
				}
				if (fctFaction == null) {
					game.log.printMessage(Log.DEBUG, "no faction found for mob \"" + name + "\"");
				}
			}
		} else {
			throw new FileNotFoundException("defMobs/" + type);
		}
		System.out.println("mob loaded: " + name);
		System.out.print("onBattle: ");
		System.out.println(strOnBattle);
	}

	private void parseMobFile(RandomAccessFile in, String strStore) throws IOException, NumberFormatException {
		switch (strStore.toLowerCase()) {
			case "skill":
				strStore = in.readLine();
				int value = Byte.parseByte(in.readLine());
				addToSkill(strStore, value);
				game.log.printMessage(Log.DEBUG, strStore + "=" + value);
				break;
			case "condition":
				Condition cndStore = game.getCondition(in.readLine());
				cndStore.ticksPast = Integer.parseInt(in.readLine());
				cndStore.duration = Integer.parseInt(in.readLine());
				addCondition(cndStore);
				game.log.printMessage(Log.DEBUG, "condition \"" + cndStore.name + "\"");
				break;
			case "giveitem":
				String strItem = in.readLine();
				double dblChance = Double.valueOf(in.readLine()).doubleValue();
				vctGiveItems.add(new GiveItem(strItem, dblChance));
				game.log.printMessage(Log.DEBUG, name + " gives a \"" + strItem + "\" " + (100 * dblChance) + "% of the time.");
				break;
			case "item":
				Item itmStore = game.getItem(in.readLine());
				if (itmStore != null) {
					itmStore.lngDurability = Long.parseLong(in.readLine());
					itmStore.intUses = Integer.parseInt(in.readLine());
					itemList.addElement(itmStore);
				}
				break;
			case "clan":
				clan = in.readLine();
				break;
			case "race":
				race = in.readLine();
				break;
			case "title":
				title = in.readLine();
				break;
			case "description":
				description = in.readLine();
				break;
				// Mobs are assigned locations separately
				/*
			case "map":
				map = game.maps.get(in.readLine());
				break;
			case "x":
				x = Integer.parseInt(in.readLine());
				break;
			case "y":
				y = Integer.parseInt(in.readLine());
				break;*/
			case "maxhp":
				maxhp = Integer.parseInt(in.readLine());
				break;
			case "maxmp":
				maxmp = Integer.parseInt(in.readLine());
				break;
			case "stre":
				stre = Integer.parseInt(in.readLine());
				break;
			case "inte":
				inte = Integer.parseInt(in.readLine());
				break;
			case "dext":
				dext = Integer.parseInt(in.readLine());
				break;
			case "cons":
				cons = Integer.parseInt(in.readLine());
				break;
			case "wisd":
				wisd = Integer.parseInt(in.readLine());
				break;
			case "image":
				imageid = Integer.parseInt(in.readLine());
				break;
			case "bravery":
				dblBravery = Double.valueOf(in.readLine()).doubleValue();
				break;
			case "grouprelation":
				dblGroupRelation = Double.valueOf(in.readLine()).doubleValue();
				break;
			case "wield":
				parseWear(in, Wearing.WIELD);
				break;
			case "arms":
				parseWear(in, Wearing.ARMS);
				break;
			case "legs":
				parseWear(in, Wearing.LEGS);
				break;
			case "torso":
				parseWear(in, Wearing.TORSO);
				break;
			case "waist":
				parseWear(in, Wearing.WAIST);
				break;
			case "neck":
				parseWear(in, Wearing.NECK);
				break;
			case "skull":
				parseWear(in, Wearing.SKULL);
				break;
			case "eyes":
				parseWear(in, Wearing.EYES);
				break;
			case "hands":
				parseWear(in, Wearing.HANDS);
				break;
			case "faction":
				String strFaction = in.readLine();
				fctFaction = game.getFaction(strFaction);
				if (fctFaction != null) {
					game.log.printMessage(Log.DEBUG, "faction=\"" + fctFaction.strName + "\"");
				} else {
					game.log.printMessage(Log.DEBUG, "no faction found for \"" + strFaction + "\"");
				}
				break;
			case "onbattle":
				strOnBattle = in.readLine();
				break;
			case "nofollow":
				noFollow = true;
				break;
		}
		//	engGame.log.printError("parseMobFile():Parsing \"" + strStore + "\" from " + name + "'s file", e);
	}

	public void onBattle(DuskEngine engGame) {
		Script.exec("scripts/" + strOnBattle, engGame, this);
	}
}