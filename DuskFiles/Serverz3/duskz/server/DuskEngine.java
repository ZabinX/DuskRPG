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
 * Feb-2013 Michael Zucchi - general cleanup, modernisation, refactoring,
 * abstracting, fixing synchronisation issues.
 * Mar-2013 Michael Zucchi - changed server protocol
 */
package duskz.server;

import duskz.protocol.DuskMessage;
import duskz.protocol.DuskProtocol;
import duskz.server.entity.TileMap;
import duskz.server.entity.Mob;
import duskz.server.entity.Merchant;
import duskz.server.entity.Sign;
import duskz.server.entity.Item;
import duskz.server.entity.Prop;
import duskz.server.entity.DuskObject;
import duskz.server.entity.PlayerMerchant;
import duskz.server.entity.LivingThing;
import duskz.protocol.TransactionItem;
import duskz.protocol.TransactionMessage;
import duskz.protocol.Wearing;
import java.io.*;
import java.io.PrintStream;
import java.io.FileOutputStream;
import java.net.Socket;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.StringTokenizer;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map.Entry;
import java.util.Vector;
import java.util.Optional;
import java.util.Properties;

/**
 * DuskEngine is the center of the Dusk game.
 *
 * @author Tom Weingarten
 */
public class DuskEngine implements Runnable, DuskProtocol {
	//Logger

	public Log log;
	//Prefs:
	public int port = 7400,
		trackerport = 7401,
		maxconnections = 0,
		petcost = 100,
		merchantimage,
		signimage,
		battlesound = -1,
		mobrespawnspeed,
		viewrange = 5,
		oldviewrange = 0,
		mapsize = 11,
		titlecap = 0,
		noChannelMax = 600, // defalut 600=10 minutes
		namecap = 20, //default 20
		messagecap = 120, //default 120
		changeRaceCpLimit = 100, //default 100cp
		logLevel = Log.ERROR,
		traincost = 100,
		expgainmod = 10;
	double gplosemod = 1D / 16D, //default 1/16
		explosemod = 1D / 16D,
		gpfleemod = 1D / 64D, //default 1/64
		expfleemod = 1D / 64D;
	public long lngMobTicks = 1000, //default 1000 milliseconds(1 second) per tick
		lngPlayerTicks = 250, //default 250 milliseconds(1/4 second) per tick
		floodLimit = 1000;	//default 1000 milliseconds(1 second) btw messages
	public String trackername = "Just Some World.",
		site = "none",
		strRCAddress,
		strRCName,
		strLogFile = null,
		strMusicAddress;
	public boolean blnMusic = false,
		blnLineOfSight = false,
		blnAI = false,
		blnIPF = false,
		tracker = true,
		blnSavingGame = false,
		blnShuttingDown = false;
	// FIXME: Not public
	public Script scrCanSeeLivingThing = null,
		scrCanMoveThroughLivingThing = null,
		scrCanAttack = null,
		scrOnStart = null,
		scrOnDeath = null,
		scrOnLogOut = null;
	//End Prefs
	public final static String version = "3.0 dev";
	public final Date datStart = new Date(System.currentTimeMillis());
	//public int MapRows,
	//		MapColumns;
	//public short shrMap[][];
	//protected short shrMapOwnerPrivs[][];
	//protected int intMapOwnerID[][];
	//protected Config IDtoName;
	//public TileMap map;
	public final HashMap<String, TileMap> maps = new HashMap<>();
	protected int MapRows,
		MapColumns;
	protected short shrMap[][];
	protected short shrMapAlpha[][];
	protected short shrMapAlpha2[][];
	final public List<Battle> battleList = new ArrayList<>();
	// Indices of various Entities
	final public HashSet<Merchant> merchantList = new HashSet<>();
	/**
	 * List of mobs in game.
	 * access must be synchronised.
	 */
	final public List<Mob> mobList = new ArrayList<>();
	// TODO: although this is maintained, nobody access it
	final public List<Item> itemList = new ArrayList<>();
	final public List<Sign> signList = new ArrayList<>();
	final public List<Prop> propList = new ArrayList<>();
	final public List<LivingThing> petList = new ArrayList<>();
	// tile actions, keyed by tile id
	final public HashMap<Integer, Script> tileCanSee = new HashMap<>();
	final public HashMap<Integer, Script> tileCanMove = new HashMap<>();
	final public HashMap<Integer, Script> tileAction = new HashMap<>();
	//
	final public HashMap<String, Faction> factionMap = new HashMap<>();
	final public HashMap<String, SpellGroup> spellGroupList = new HashMap<>();
	/**
	 * Automatic temporary bans
	 */
	final private HashMap<String, Long> bannedIPMap = new HashMap<>();
	final public HashSet<LivingThing> checkConditionList = new HashSet<>();
	// FIXME: This shouldn't be public
	// FIXME: Requires synchronised access!
	public final HashMap<String, LivingThing> playersByName = new HashMap<>();
	VariableSet varVariables;
	/**
	 * Tracks login failures for a given address
	 */
	final private HashMap<String, Integer> failureAddress = new HashMap<>();
	private long nextid = 0;
	boolean blnVariableListChanged = false,
		blnMapHasChanged = false,
		blnMobListChanged = false,
		blnSignListChanged = false,
		blnMerchantListChanged = false,
		blnPropListChanged = false;

	public DuskEngine() {
		RandomAccessFile rafFile = null;
		varVariables = new VariableSet();
		log = new Log(System.out);

		try {
			int x = 0,
				y = 0;
			String line;

			loadPrefs();

			// Load Map
			File newmap = new File("shortmap");
			if (newmap.exists())
			{
				rafFile = new RandomAccessFile("shortmap", "r");
				log.printMessage(Log.INFO,"Loading Map...");
				int magicNumber = rafFile.readInt();
				if (magicNumber == 0xD5D002) { // V3 map
					log.printMessage(Log.INFO,"Loading V3 map...");
					MapColumns = rafFile.readInt();
					MapRows = rafFile.readInt();
					log.printMessage(Log.VERBOSE,MapColumns + "/" + MapRows);
					shrMap = new short[MapColumns][MapRows];
					shrMapAlpha = new short[MapColumns][MapRows];
					shrMapAlpha2 = new short[MapColumns][MapRows];
					for (int i=0;i<MapColumns;i++) {
						for (int i2=0;i2<MapRows;i2++) {
							shrMap[i][i2] = rafFile.readShort();
						}
					}
					for (int i=0;i<MapColumns;i++) {
						for (int i2=0;i2<MapRows;i2++) {
							shrMapAlpha[i][i2] = rafFile.readShort();
						}
					}
					for (int i=0;i<MapColumns;i++) {
						for (int i2=0;i2<MapRows;i2++) {
							shrMapAlpha2[i][i2] = rafFile.readShort();
						}
					}
				} else if (magicNumber == 0xD5D001) { // V2 map
					log.printMessage(Log.INFO,"Loading V2 map...");
					MapColumns = rafFile.readInt();
					MapRows = rafFile.readInt();
					log.printMessage(Log.VERBOSE,MapColumns + "/" + MapRows);
					shrMap = new short[MapColumns][MapRows];
					shrMapAlpha = new short[MapColumns][MapRows];
					shrMapAlpha2 = new short[MapColumns][MapRows]; // Initialize with zeros
					for (int i=0;i<MapColumns;i++) {
						for (int i2=0;i2<MapRows;i2++) {
							shrMap[i][i2] = rafFile.readShort();
						}
					}
					for (int i=0;i<MapColumns;i++) {
						for (int i2=0;i2<MapRows;i2++) {
							shrMapAlpha[i][i2] = rafFile.readShort();
							shrMapAlpha2[i][i2] = 0;
						}
					}
				} else { // V1 map
					log.printMessage(Log.INFO,"Loading V1 map...");
					MapColumns = magicNumber;
					MapRows = rafFile.readInt();
					log.printMessage(Log.VERBOSE,MapColumns + "/" + MapRows);
					shrMap = new short[MapColumns][MapRows];
					shrMapAlpha = new short[MapColumns][MapRows]; // Initialize with zeros
					shrMapAlpha2 = new short[MapColumns][MapRows]; // Initialize with zeros
					for (int i=0;i<MapColumns;i++) {
						for (int i2=0;i2<MapRows;i2++) {
							shrMap[i][i2] = rafFile.readShort();
							shrMapAlpha[i][i2] = 0;
							shrMapAlpha2[i][i2] = 0;
						}
					}
				}
				rafFile.close();
			}else
			{
				rafFile = new RandomAccessFile("map", "r");
				log.printMessage(Log.INFO,"Converting old map to new short format...");
				MapColumns = rafFile.readInt();
				MapRows = rafFile.readInt();
				log.printMessage(Log.VERBOSE,"Map size: "+MapColumns + "/" + MapRows);
				shrMap = new short[MapColumns][MapRows];
				for (int i=0;i<MapColumns;i++)
				{
					for (int i2=0;i2<MapRows;i2++)
					{
						shrMap[i][i2] = rafFile.readByte();
					}
				}
				rafFile.close();
			}
			TileMap map = new TileMap("main", MapColumns, MapRows, 3);
			map.layers.add(new duskz.map.Layer(shrMap));
			map.layers.add(new duskz.map.Layer(shrMapAlpha));
			map.layers.add(new duskz.map.Layer(shrMapAlpha2));
			maps.put("main", map);

			log.printMessage(Log.INFO, "Map Loaded...");

			// Loading Map tile priviledges
			/*
			 File mapprivs = new File("shortmap.privs");
			 if (mapprivs.exists()) {
			 rafFile = new RandomAccessFile("shortmap.privs", "r");
			 log.printMessage(Log.INFO, "Loading Map Tile Privs...");
			 int PrivsColumns = rafFile.readInt();
			 int PrivsRows = rafFile.readInt();
			 if (PrivsColumns != MapColumns || PrivsRows != MapRows) {
			 log.printMessage(Log.ERROR, "Map privs array size (" + PrivsColumns + "/" + PrivsRows + ") does not match map size (" + MapColumns + "/" + MapRows + ")");
			 }
			 log.printMessage(Log.ALWAYS, PrivsColumns + "/" + PrivsRows);
			 shrMapOwnerPrivs = new short[PrivsColumns][PrivsRows];
			 for (x = 0; x < PrivsColumns; x++) {
			 for (y = 0; y < PrivsRows; y++) {
			 shrMapOwnerPrivs[x][y] = rafFile.readShort();
			 }
			 }
			 rafFile.close();
			 }

			 // Loading Map tile ownership
			 File mapowners = new File("shortmap.owner");
			 File ownerlist = new File("tile_owner_list");
			 if (mapowners.exists() && ownerlist.exists()) {
			 IDtoName = new Config(this, "tile_owner_list");
			 rafFile = new RandomAccessFile("shortmap.owner", "r");
			 log.printMessage(Log.INFO, "Loading Map Tile Ownership...");
			 int OwnColumns = rafFile.readInt();
			 int OwnRows = rafFile.readInt();
			 if (OwnColumns != MapColumns || OwnRows != MapRows) {
			 log.printMessage(Log.ERROR, "Map ownership array size (" + OwnColumns + "/" + OwnRows + ") does not match map size (" + MapColumns + "/" + MapRows + ")");
			 }
			 log.printMessage(Log.ALWAYS, OwnColumns + "/" + OwnRows);
			 intMapOwnerID = new int[OwnColumns][OwnRows];
			 for (x = 0; x < OwnColumns; x++) {
			 for (y = 0; y < OwnRows; y++) {
			 intMapOwnerID[x][y] = rafFile.readInt();
			 }
			 }
			 rafFile.close();
			 }*/
			// FIXME: use some sort of common file format or at least conventions
			// between all these state files.
			// Load Merchants
			try {
				rafFile = new RandomAccessFile("merchants", "r");
				Merchant mrcStore;
				log.printMessage(Log.INFO, "Loading Merchants...");
				line = rafFile.readLine();
				while (!(line == null || line.equals(""))) {
					mrcStore = new Merchant(this);
					mrcStore.x = Integer.parseInt(line);
					mrcStore.y = Integer.parseInt(rafFile.readLine());
					line = rafFile.readLine();
					while (line != null && !line.equals("") && !line.equalsIgnoreCase("end")) {
						mrcStore.items.add(line);
						line = rafFile.readLine();
					}
                    addDuskObject(maps.get("main"), mrcStore);
					line = rafFile.readLine();
				}
				rafFile.close();
			} catch (Exception e) {
				log.printError("DuskEngine():While loading merchants", e);
			}

			// Load Mobs
			try {
				LivingThing thnStore;
				rafFile = new RandomAccessFile("mobs", "r");
				log.printMessage(Log.INFO, "Loading Mobs...");
				line = rafFile.readLine();
				while (line != null) {
					if (line.equals("")) {
						break;
					}
					if (line.equals("mob2.3"))
					{
						line = rafFile.readLine();
						thnStore = new Mob(line, Integer.parseInt(rafFile.readLine()), Integer.parseInt(rafFile.readLine()), this);
					} else {
						thnStore = new Mob(line, Integer.parseInt(rafFile.readLine()), Integer.parseInt(rafFile.readLine()), Integer.parseInt(rafFile.readLine()), this);
					}
                    addDuskObject(maps.get("main"), thnStore);
					line = rafFile.readLine();
				}
				rafFile.close();
			} catch (Exception e) {
				log.printError("DuskEngine():While loading mobs", e);
			}

			// Load signs
			try {
				Sign sgnStore;
				rafFile = new RandomAccessFile("signs", "r");
				log.printMessage(Log.INFO, "Loading Signs...");
				line = rafFile.readLine();
				while (!(line == null || line.equals(""))) {
					sgnStore = new Sign(this, "sign", line, Integer.parseInt(rafFile.readLine()), Integer.parseInt(rafFile.readLine()), getID());
                    addDuskObject(maps.get("main"), sgnStore);
					line = rafFile.readLine();
				}
				rafFile.close();
			} catch (Exception e) {
				log.printError("DuskEngine():While loading signs", e);
			}

			// Load props
			try {
				Prop prpStore;
				rafFile = new RandomAccessFile("props", "r");
				log.printMessage(Log.INFO, "Loading Props...");
				line = rafFile.readLine();
				while (!(line == null || line.equals(""))) {
					prpStore = getProp(line);
					if (prpStore != null) {
						prpStore.x = Integer.parseInt(rafFile.readLine());
						prpStore.y = Integer.parseInt(rafFile.readLine());
                        addDuskObject(maps.get("main"), prpStore);
					}
					line = rafFile.readLine();
				}
				rafFile.close();
			} catch (Exception e) {
				log.printError("DuskEngine():While loading props", e);
			}

			// Load global variables
			String strVarName;
			int intType;
			String strObject;
			double dblObject;
			rafFile = new RandomAccessFile("globals", "r");
			log.printMessage(Log.INFO, "Loading Global Variables...");
			strVarName = rafFile.readLine();
			while (!(strVarName == null || strVarName.equals(""))) {
				intType = Integer.parseInt(rafFile.readLine());
				switch (intType) {
				case 0: {
					dblObject = (double)Double.parseDouble(rafFile.readLine());
					varVariables.addVariable(strVarName, dblObject);
					log.printMessage(Log.VERBOSE, strVarName + " = " + dblObject);
					break;
				}
				case 1: {
					strObject = rafFile.readLine();
					varVariables.addVariable(strVarName, strObject);
					log.printMessage(Log.VERBOSE, strVarName + " = '" + strObject + "'");
					break;
				}
				}
				strVarName = rafFile.readLine();
			}
			rafFile.close();

			//Start onBoot script
			try {
				Script scrOnBoot = new Script("conf/onBoot", this, true);
				scrOnBoot.runScript();
				scrOnBoot.close();
				log.printMessage(Log.INFO, "Ran onBoot script.");
			} catch (Exception e) {
				log.printError("DuskEngine():Failed to run onBoot script, maybe it doesn't exist? (Not a fatal error)", e);
				log.printMessage(Log.ALWAYS, "To create an onBoot script, type \"view conf onBoot\" in game as a high or master god.");
			}
		} catch (Exception e) {
			log.printError("DuskEngine()", e);
		}
	}

	public boolean isGoodIP(String strIP) {
		RandomAccessFile rafFile = null;
		try {
			// Why isn't this cached?
			String strBlockedIP;
			String key = strIP.toLowerCase();
			rafFile = new RandomAccessFile("conf/blockedIP", "r");
			strBlockedIP = rafFile.readLine();
			while (strBlockedIP != null) {
				if (key.indexOf(strBlockedIP) != -1) {
					rafFile.close();
					return false;
				}
				strBlockedIP = rafFile.readLine();
			}
			rafFile.close();

			return !isBanned(key);
		} catch (Exception e) {
			log.printError("isGoodIP():Checking for bad IP address", e);
			return false;
		}
	}

	public boolean isGoodName(String strName) {
		if (strName == null) {
			return false;
		}
		if (strName.equals("")
			|| strName.length() > namecap
			|| strName.toLowerCase().equals("god")
			|| strName.toLowerCase().equals("default")) {
			return false;
		}

		String strValid = "0123456789][_'#";
		char[] letters = strName.toCharArray();
		char[] validChars = strValid.toCharArray();
		boolean blnValid = true;

		for (int n = 0; n < letters.length; n++) {
			if (!Character.isLetter(letters[n])) {
				blnValid = false;
				for (int i = 0; i < validChars.length; i++) {
					if (letters[n] == validChars[i]) {
						blnValid = true;
					}
				}
			}
		}
		if (!blnValid) {
			return false;
		}

		RandomAccessFile rafFile = null;
		try {
			String strDirtyWord;
			String strLowerCaseName = strName.toLowerCase();
			rafFile = new RandomAccessFile("conf/dirtyWordFile", "r");
			strDirtyWord = rafFile.readLine();
			while (strDirtyWord != null) {
				if (strLowerCaseName.indexOf(strDirtyWord) != -1) {
					rafFile.close();
					return false;
				}
				strDirtyWord = rafFile.readLine();
			}
			rafFile.close();
		} catch (Exception e) {
			log.printError("isGoodName():" + strName + " had an error checking for bad name", e);
			return false;
		}
		return true;
	}

	synchronized void loadPrefs() {
		Config settings = new Config(this, "conf/prefs");
		//Load Prefs
		strLogFile = settings.getString("LogFileName", strLogFile);
		if (strLogFile != null) {
			try {
				log = new Log(new PrintStream(new FileOutputStream(strLogFile, true), true));
			} catch (Exception e) {
				log = new Log(System.out);
				log.printError("loadPrefs():Opening log file \"" + strLogFile + "\"", e);
			}
		} else {
			log = new Log(System.out);
		}
		log.printMessage(Log.INFO, "Loading Preferences...");

		logLevel = settings.getInt("LoggingLevel", logLevel);
		log.setLogLevel(logLevel);

		port = settings.getInt("Port", port);
		tracker = settings.getBoolean("Tracker", tracker);
		trackerport = settings.getInt("TrackerPort", trackerport);
		trackername = settings.getString("TrackerName", trackername);
		site = settings.getString("TrackerSite", site);
		strRCAddress = settings.getString("RCAddress", strRCAddress);
		strRCName = settings.getString("RCName", strRCName);
		maxconnections = settings.getInt("MaxConnections", maxconnections);
		blnMusic = settings.getBoolean("Music", blnMusic);
		blnAI = settings.getBoolean("Ai", blnAI);
		blnLineOfSight = settings.getBoolean("LineOfSight", blnLineOfSight);
		blnIPF = settings.getBoolean("UniqueIPFilter", blnIPF);
		changeRaceCpLimit = settings.getInt("ChangeRaceCPLimit", changeRaceCpLimit);
		petcost = settings.getInt("PetCost", petcost);
		messagecap = settings.getInt("MessageCap", messagecap);
		namecap = settings.getInt("NameCap", namecap);
		titlecap = settings.getInt("TitleCap", titlecap);
		noChannelMax = settings.getInt("NoChannelMax", noChannelMax);
		merchantimage = settings.getInt("MerchantImage", merchantimage);
		signimage = settings.getInt("SignImage", signimage);
		battlesound = settings.getInt("BattleSound", battlesound);
		mobrespawnspeed = -1 * settings.getInt("MobReSpawnSpeed", mobrespawnspeed);
		traincost = settings.getInt("TrainCost", traincost);
		expgainmod = settings.getInt("ExpGainMod", expgainmod);
		gplosemod = settings.getDouble("GpLoseMod", gplosemod);
		explosemod = settings.getDouble("ExpLoseMod", explosemod);
		gpfleemod = settings.getDouble("GpFleeMod", gpfleemod);
		expfleemod = settings.getDouble("ExpFleeMod", expfleemod);
		viewrange = settings.getInt("ViewRange", viewrange);
		lngMobTicks = settings.getLong("MobTicks", lngMobTicks);
		lngPlayerTicks = settings.getLong("PlayerTicks", lngPlayerTicks);
		if (viewrange != oldviewrange) {
			oldviewrange = viewrange;
			mapsize = 1 + (2 * viewrange);
			for (LivingThing thnStore: playersByName.values()) {
				thnStore.initMap();
			}
		}
		//Load Triggered Scripts

		// FIXME: all this 'synchronized' stuff is busted to shit, you can't lock on something
		// that might be null or will be replaced by a new object.
		try {
			if (scrCanSeeLivingThing != null) {
				synchronized (scrCanSeeLivingThing) {
					scrCanSeeLivingThing.close();
					scrCanSeeLivingThing = new Script("conf/canSeeLivingThing", this, true);
				}
			} else {
				scrCanSeeLivingThing = new Script("conf/canSeeLivingThing", this, true);
			}
		} catch (Exception e) {
			scrCanSeeLivingThing = null;
		}
		try {
			if (scrCanMoveThroughLivingThing != null) {
				synchronized (scrCanMoveThroughLivingThing) {
					scrCanMoveThroughLivingThing.close();
					scrCanMoveThroughLivingThing = new Script("conf/canMoveThroughLivingThing", this, true);
				}
			} else {
				scrCanMoveThroughLivingThing = new Script("conf/canMoveThroughLivingThing", this, true);
			}
		} catch (Exception e) {
			scrCanMoveThroughLivingThing = null;
		}
		try {
			if (scrCanAttack != null) {
				synchronized (scrCanAttack) {
					scrCanAttack.close();
					scrCanAttack = new Script("conf/canAttack", this, true);
				}
			} else {
				scrCanAttack = new Script("conf/canAttack", this, true);
			}
		} catch (Exception e) {
			scrCanAttack = null;
		}
		try {
			if (scrOnStart != null) {
				synchronized (scrOnStart) {
					scrOnStart.close();
					scrOnStart = new Script("conf/onStart", this, true);
				}
			} else {
				scrOnStart = new Script("conf/onStart", this, true);
			}
		} catch (Exception e) {
			scrOnStart = null;
		}
		try {
			if (scrOnDeath != null) {
				synchronized (scrOnDeath) {
					scrOnDeath.close();
					scrOnDeath = new Script("conf/onDeath", this, true);
				}
			} else {
				scrOnDeath = new Script("conf/onDeath", this, true);
			}
		} catch (Exception e) {
			scrOnDeath = null;
		}
		try {
			if (scrOnLogOut != null) {
				synchronized (scrOnLogOut) {
					scrOnLogOut.close();
					scrOnLogOut = new Script("conf/onLogOut", this, true);
				}
			} else {
				scrOnLogOut = new Script("conf/onLogOut", this, true);
			}
		} catch (Exception e) {
			scrOnLogOut = null;
		}

		File f = new File("tileScriptMap");
		if (f.exists()) {
			// Load tile scripts throuhg indirection
			try {
				Properties props = new Properties();
				try (FileInputStream fis = new FileInputStream(f)) {
					props.load(fis);

					for (Entry e: props.entrySet()) {
						String key = (String)e.getKey();
						String val = (String)e.getValue();

						HashMap<Integer, Script> target = null;
						String path = null;
						String id = null;
						if (key.startsWith("move.")) {
							target = tileCanMove;
							path = "defTileScripts/";
							id = key.substring(5);
						} else if (key.startsWith("see.")) {
							target = tileCanSee;
							path = "defTileActions/";
							id = key.substring(4);
						} else if (key.startsWith("action.")) {
							target = tileAction;
							path = "defTileSeeScripts/";
							id = key.substring(7);
						}
						if (target != null) {
							try {
								target.put(Integer.valueOf(id), new Script(path + val, this, true));
							} catch (Exception x) {
							}
						}
					}
				}
			} catch (IOException x) {
			}
		} else {
			// Load Tile Scripts
			loadTileScripts(tileCanMove, "defTileScripts/");
			loadTileScripts(tileAction, "defTileActions/");
			loadTileScripts(tileCanSee, "defTileSeeScripts/");
		}
	}

	void loadTileScripts(HashMap<Integer, Script> scripts, String path) {
		try {
			int i;
			for (Script s: scripts.values()) {
				s.close();
			}
			scripts.clear();
			// FIXME: just try to load known tile sizes, we know how many tiles we have
			for (i = 0; true; i++) {
				try {
					scripts.put(i, new Script(path + i, this, true));
				} catch (Exception e) {
					System.out.println("Loaded tile scripts " + path + " until: " + i);
					break;
				}
			}
		} catch (Exception e) {
		}
	}

	@Deprecated
	public synchronized long getID() {
		nextid++;
		return nextid;
	}

	@Deprecated
	public void chatMessage(String msg, String from) {
		from = from.toLowerCase();
		log.printMessage(Log.ALWAYS, msg);
		for (LivingThing lt: playersByName.values()) {
			if (!lt.ignoreList.contains(from)) {
				lt.chatMessage(msg);
			}
		}
	}

	/**
	 * Sends a chat message to other players within visible range.
	 *
	 * @param map
	 * @param inMessage
	 * @param locx
	 * @param locy
	 * @param strFrom
	 */
	// FIXME: move somewhere better
	@Deprecated
	public void chatMessage(TileMap map, String inMessage, int locx, int locy, String strFrom) {
		strFrom = strFrom.toLowerCase();
		LivingThing thnStore;
		log.printMessage(Log.ALWAYS, inMessage);

		for (TileMap.MapData md: map.range(locx, locy, viewrange)) {
			for (DuskObject o: md.entities) {
				if (o.isLivingThing()) {
					thnStore = (LivingThing)o;
					if (thnStore.isPlayer()
						&& !thnStore.ignoreList.contains(strFrom)) {
						thnStore.chatMessage(inMessage);
					}
				}
			}
		}
	}

	@Deprecated
	public void chatMessage(String msg, String clan, String from) {
		from = from.toLowerCase();
		log.printMessage(Log.ALWAYS, msg);
		for (LivingThing lt: playersByName.values()) {
			if (lt.clan.equals(clan)
				&& !lt.ignoreList.contains(from)) {
				lt.chatMessage(msg);
			}
		}
	}

	// FIXME: move to livinghting?
	// only ever called on a player source
	@Deprecated
	public void refreshEntities(LivingThing refresh) {
		LinkedList<DuskObject> newEntities = new LinkedList<>();

		for (TileMap.MapData md: refresh.map.range(refresh.x, refresh.y, viewrange)) {
			if (!md.entities.isEmpty()
				&& canSeeTo(refresh, md.x, md.y)) {
				for (DuskObject o: md.entities) {
					newEntities.add(o);
					//old = thnRefresh.removeEntity(objStore.ID);
					//for (i4 = 0; i4 < thnRefresh.nearEntities.size(); i4++) {
					//	objStore2 = (DuskObject) thnRefresh.nearEntities.elementAt(i4);
					//	if (objStore2 == objStore) {
					//		thnRefresh.nearEntities.removeElementAt(i4);
					//		i4 = -1;
					//		break;
					//	}
					//}
					if (o.isPlayerMerchant()) {
						PlayerMerchant shop = (PlayerMerchant)o;
						if (refresh.x == shop.x && refresh.y == shop.y) {
							TransactionMessage tm = new TransactionMessage(MSG_UPDATE_MERCHANT);

							for (String name: shop.vctItems.keySet()) {
								LinkedList<Item> vctStore = shop.vctItems.get(name);
								Item item = (Item)vctStore.element();
								int intCost = (item.intCost * 3) / 4;

								if (refresh.name.equalsIgnoreCase(shop.strOwner)) {
									intCost = 0;
								}
								tm.add(item.getWearLocation(), name, vctStore.size(), intCost, "gp");
							}
							refresh.send(tm);
							refresh.updateInventory();
						}
					}
					if (o.isMerchant()) {
						Merchant merchant = (Merchant)o;
						if (refresh.x == merchant.x && refresh.y == merchant.y) {
							HashMap<String, TransactionItem> items = new HashMap<>();
							for (String itemname: merchant.items) {
								TransactionItem titem = items.get(itemname);
								if (titem == null) {
									Item item = getItem(itemname);
									if (item != null) {
										titem = new TransactionItem(item.getWearLocation(), itemname, 1, item.intCost, "gp");
									} else if (itemname.equals("pet")) {
										// FIXME: pet?
										titem = new TransactionItem(Wearing.INVENTORY, itemname, 1, petcost, "gp");
									} else {
										if (refresh.getFollowing() != null && refresh.getFollowing().isPet()) {
											// FIXME: pet skill?
											titem = new TransactionItem(Wearing.INVENTORY, refresh.getFollowing().name + ":" + itemname, 1, traincost, "exp");
											items.put(titem.name, titem);
										}
										// FIXME: Wearing.skill?
										titem = new TransactionItem(Wearing.INVENTORY, itemname, 1, traincost, "exp");
										//sb.append(traincost).append("exp)").append(itemname).append("\n");
										//sb.append(traincost).append("exp)").append(refresh.getFollowing().name).append(":").append(itemname).append("\n");
									}
									items.put(titem.name, titem);
								} else {
									titem.count++;
								}
							}

							TransactionMessage tm = new TransactionMessage(MSG_UPDATE_MERCHANT);
							tm.items.addAll(items.values());
							refresh.send(tm);
							refresh.updateInventory();
						}
					}
					//if (old == null) { //i4 != -1
					//	if (!objStore.isLivingThing()
					//			|| canSeeLivingThing(thnRefresh, (LivingThing) objStore)) {
					//		thnRefresh.send(MessageType.AddEntity, objStore.toEntity());
					//	}
					//}
				}
			}
		}
		// Remove those left
		//for (DuskObject o: thnRefresh.nearEntities) {
		//	thnRefresh.send(MessageType.RemoveEntity, o.ID + "\n");
		//}
		//thnRefresh.nearEntities = vctNewEntities;
		refresh.setEntities(newEntities);
	}

	// FIXME: move to map or livingthing?
	@Deprecated
	public void addEntity(TileMap map, DuskObject add) {
		for (TileMap.MapData md: map.range(add.x, add.y, viewrange)) {
			for (DuskObject o: md.entities) {
				if (o.isLivingThing()) {
					LivingThing lt = (LivingThing)o;
					if (lt.isPlayer()) {
						// FIXME: see if this can be merged with updateEntity() above

						if (canSeeTo(lt, add.x, add.y)) {
							if ((!add.isLivingThing()
								|| canSeeLivingThing(lt, (LivingThing)add))) {
								lt.addEntity(add);
							}
						}
					}
				}
			}
		}
	}

	public void cleanup() {
		log.printMessage(Log.INFO, "Starting cleanup.");
		for (TileMap map: maps.values()) {
			for (TileMap.MapData md: map) {
				for (DuskObject o: md.entities) {
					if (o.isLivingThing()) {
						LivingThing lt = (LivingThing)o;
						if (lt.isPlayer()) {
							if (!playersByName.containsKey(lt.name)) {
								log.printMessage(Log.INFO, "**found defunct player at " + md.x + "," + md.y + " during cleanup.");
								removeDuskObject(lt);
								lt.battle = null;
								lt.isStopped = true;
							}
						}
						if (lt.isPet()) {
							if (!petList.contains(lt)) {
								log.printMessage(Log.INFO, "**found defunct pet at " + md.x + "," + md.y + " during cleanup.");
								removeDuskObject(lt);
							}
						}
					}
				}
			}
		}
		log.printMessage(Log.INFO, "Finished cleanup.");
	}

	// FIXME: Move to map?
	@Deprecated
	void notifyRemoved(DuskObject remove) {
		for (TileMap.MapData md: remove.map.range(remove.x, remove.y, viewrange)) {
			for (DuskObject o: md.entities) {
				if (o.isLivingThing()) {
					LivingThing lt = (LivingThing)o;

					if (lt.isPlayer()) {
						if (canSeeTo(lt, remove.x, remove.y)) {
							lt.removeEntity(remove.ID);
						}
					}
				}
			}
		}
	}

	public void newBattle(LivingThing pla1, LivingThing pla2) {
		if (pla2 == null) {
			return;
		}
		if (pla1.isPet()) {
			pla1.chatMessage("Pets cannot lead battles.");
			return;
		}
		if (pla1.battle != null) {
			pla1.chatMessage("You're already fighting!");
			return;
		}
		if (pla1 == pla2) {
			pla1.chatMessage("You can't fight yourself!");
			return;
		}
		if (pla2.isPet()) {
			pla1.chatMessage("You can't attack pets.");
			return;
		}
//		if (Math.abs(pla1.intLocX - pla2.intLocX) + Math.abs(pla1.intLocY - pla2.intLocY) > 1)
		if (Math.abs(pla1.x - pla2.x) + Math.abs(pla1.y - pla2.y) > pla1.getRangeWithBonus()) {
			System.out.println("mob range = " + Math.abs(pla1.x - pla2.x) + Math.abs(pla1.y - pla2.y));
			System.out.println("player range = " + pla1.getRangeWithBonus());
			pla1.chatMessage("They're too far away.");
			return;
		}
		if (scrCanAttack != null) {
			synchronized (scrCanAttack) {
				scrCanAttack.varVariables.clearVariables();
				scrCanAttack.varVariables.addVariable("attacking", pla1);
				scrCanAttack.varVariables.addVariable("attacked", pla2);
				if (!scrCanAttack.rewindAndParseScript()) {
					pla1.chatMessage("You can't attack them.");
					return;
				}
			}
		}
		// Check if the attacked is following the attacker
		LivingThing thnStore = pla2;
		while (thnStore != null) {
			if (pla1 == thnStore) {
				pla1.chatMessage("You can't attack a member of your group.");
				return;
			}
			if (thnStore.isPlayer() && !pla1.isMob()) {
				if (thnStore.clan == null || thnStore.clan.equalsIgnoreCase("none")) {
					pla1.chatMessage("You can't fight them.");
					return;
				}
			}
			thnStore = thnStore.getMaster();
		}
		// Check if the attacker is following the attacked
		thnStore = pla2;
		while (thnStore != null) {
			if (pla1 == thnStore) {
				pla1.chatMessage("You can't attack a member of your group.");
				return;
			}
			if (thnStore.isPlayer() && !pla1.isMob()) {
				if (thnStore.clan == null || thnStore.clan.equalsIgnoreCase("none")) {
					pla1.chatMessage("You can't fight them.");
					return;
				}
			}
			thnStore = thnStore.getFollowing();
		}
		if (pla2.battle == null) {
			if ((pla1.isPlayer() && pla2.isPlayer()) && (pla1.clan.equals("none") || pla2.clan.equals("none"))) {
				pla1.chatMessage("Players who are not in clans cannot fight other players.");
				return;
			}
			if (pla2.isPlayer() && pla2.overMerchant() != null) {
				pla1.chatMessage("You cannot attack players who are shopping.");
				return;
			}
			if (pla2.isPlayer() && pla2.overPlayerMerchant() != null) {
				pla1.chatMessage("You cannot attack players who are shopping.");
				return;
			}
			// FIXME: locks?
			battleList.add(new Battle(pla1, pla2, this));
			return;
		} else {
			if (pla2.battleSide == 1) {
				thnStore = pla1;
				while (thnStore != null) {
					if (thnStore.battle == null) {
						pla2.battle.addToBattle(thnStore, 2);
					}
					thnStore = thnStore.getFollowing();
				}
				thnStore = pla1.getMaster();
				while (thnStore != null) {
					if (thnStore.battle == null) {
						pla2.battle.addToBattle(thnStore, 2);
					}
					thnStore = thnStore.getMaster();
				}
			} else {
				thnStore = pla1;
				while (thnStore != null) {
					if (thnStore.battle == null) {
						pla2.battle.addToBattle(thnStore, 1);
					}
					thnStore = thnStore.getFollowing();
				}
				thnStore = pla1.getMaster();
				while (thnStore != null) {
					if (thnStore.battle == null) {
						pla2.battle.addToBattle(thnStore, 1);
					}
					thnStore = thnStore.getMaster();
				}
			}
//			pla2.batBattle.chatMessage("\t"+pla1.strName+" has joined the battle.");
			return;
		}
	}

	// Not used
	@Deprecated
	public Sign getSign(String inName) {
		int i;
		Sign sgnStore;
		for (i = 0; i < signList.size(); i++) {
			sgnStore = (Sign)signList.get(i);
			if (inName.equals(sgnStore.name)) {
				return sgnStore;
			}
		}
		return null;
	}

	public LivingThing getPet(String name) {
		// FIXME: hash map?
		for (LivingThing pet: petList) {
			if (name.equalsIgnoreCase(pet.name)) {
				return pet;
			}
		}
		return null;
	}

	public LivingThing getPlayer(String name) {
		name = name.toLowerCase();

		return playersByName.get(name);
	}

	public Faction getFaction(String name) {
		Faction faction;
		String key = name.toLowerCase();
		faction = factionMap.get(key);
		if (faction == null) {
			faction = new Faction(name, this);
			factionMap.put(key, faction);
		}
		return faction;
	}

	public LivingThing getMobFromVct(String inName) {
		// FIXME: hash map?
		synchronized (mobList) {
			for (Mob mob: mobList) {
				if (mob.name.equals(inName)) {
					return mob;
				}
			}
		}
		return null;
	}

	// FIXME: io on prop as per Item
	Prop getProp(String strName) {
		Prop prpStore = null;
		try {
			String key = strName.toLowerCase();
			Optional<Path> path = Files.find(Path.of("defProps"), 1, (t, a) -> t.getFileName().toString().toLowerCase().equals(key)).findAny();
			if (path.isPresent()) {
				RandomAccessFile rafPropDef = new RandomAccessFile(path.get().toFile(), "r");
				prpStore = new Prop(getID(), strName);
				String strStore = rafPropDef.readLine();
				while (!(strStore == null || strStore.equals("."))) {
					if (strStore.equalsIgnoreCase("description")) {
						prpStore.description = rafPropDef.readLine();
					} else if (strStore.equalsIgnoreCase("image")) {
						prpStore.intImage = Integer.parseInt(rafPropDef.readLine());
					}
					strStore = rafPropDef.readLine();
				}
				rafPropDef.close();
			} else {
				throw new FileNotFoundException("defProps/" + key);
			}
		} catch (Exception e) {
			log.printError("getProp():While trying to get prop \"" + strName + "\"", e);
		}
		return prpStore;
	}

	// Unused
	@Deprecated
	Prop getPropFromVct(String inName) {
		try {
			int i = 0;
			Prop prpStore;
			while (true) {
				prpStore = (Prop)propList.get(i);
				if (prpStore.name.equals(inName)) {
					return prpStore;
				}
				i++;
			}
		} catch (Exception e) {
			log.printError("getPropFromVct():While trying to get prop \"" + inName + "\"", e);
		}
		return null;
	}

	// Unused
	@Deprecated
	Prop getPropFromVctAndRemove(String inName) {
		try {
			int i = 0;
			Prop prpStore;
			while (true) {
				prpStore = (Prop)propList.get(i);
				if (prpStore.name.equals(inName)) {
					//vctProps.remove(i);
					removeDuskObject(prpStore);
					return prpStore;
				}
				i++;
			}
		} catch (Exception e) {
			log.printError("getPropFromVctAndRemove():While trying to get prop \"" + inName + "\"", e);
		}
		return null;
	}

	@Deprecated
	public Condition getCondition(String inName) {
		try {
			return Condition.getCondition(inName);
		} catch (Exception e) {
			log.printError("getCondition():Parsing condition \"" + inName + "\"", e);
		}
		return null;
	}

	int getSpellPercent(String strName) {
		try {
			RandomAccessFile rafSpell = new RandomAccessFile("defSpells/" + strName, "r");
			SpellGroup grpStore = getSpellGroup(rafSpell.readLine());
			rafSpell.close();
			return grpStore.getSpellPercent(strName);
		} catch (Exception e) {
			log.printError("getSpellPercent():While trying to get info on spell \"" + strName + "\"", e);
		}
		return -1;
	}

	// FIXME: do i/o in SpellGroup
	@Deprecated
	public SpellGroup getSpellGroup(String strName) {
		SpellGroup group;
		String key = strName.toLowerCase();

		group = spellGroupList.get(key);
		if (group == null) {
			group = new SpellGroup(strName);
			try (RandomAccessFile rafSpellGroup = new RandomAccessFile("defSpellGroups/" + strName, "r")) {
				String strStore = rafSpellGroup.readLine();
				while (strStore != null && !strStore.equals("") && !strStore.equals(".")) {
					group.vctSpells.add(strStore);
					strStore = rafSpellGroup.readLine();
				}
				spellGroupList.put(key, group);
			} catch (IOException e) {
				log.printError("trying to read spell group file for \"" + strName + "\"", e);
				group = null;
			}
		}
		return group;
	}

	// FIXME: move this to Item
	@Deprecated
	public Item getItem(String inName) {
		try {
			return Item.getItem(getID(), inName);
		} catch (IOException ex) {
			log.printError("getItem():Parsing item \"" + inName + "\"", ex);
			return null;
		}
	}

	// Appears unused
	@Deprecated
	Item getItemFromVct(String inName) {
		try {
			int i;
			Item itmStore;
			StringTokenizer tokName = new StringTokenizer(inName, " ");
			String strStore = tokName.nextToken();
			i = Integer.parseInt(strStore);
			strStore = inName.substring(strStore.length() + 1, inName.length());
			itmStore = (Item)itemList.get(i);
			if (itmStore.name.equals(strStore)) {
				return itmStore;
			}
		} catch (Exception e) {
			log.printError("getItemFromVct():For item \"" + inName + "\"", e);
		}
		return null;
	}

	// Appears unused
	@Deprecated
	Item getItemFromVctAndRemove(String inName) {
		try {
			int i;
			Item itmStore;
			StringTokenizer tokName = new StringTokenizer(inName, " ");
			String strStore = tokName.nextToken();
			i = Integer.parseInt(strStore);
			strStore = inName.substring(strStore.length() + 1, inName.length());
			itmStore = (Item)itemList.get(i);
			if (itmStore.name.equals(strStore)) {
				//vctItems.remove(i);
				removeDuskObject(itmStore);
				return itmStore;
			}
		} catch (Exception e) {
			log.printError("getItemFromVctAndRemove():For item \"" + inName + "\"", e);
		}
		return null;
	}

	// FIXME: move to map or livinghting?
	void playSound(TileMap map, int sfxid, int locx, int locy) {
		for (TileMap.MapData md: map.range(locx, locy, viewrange)) {
			for (DuskObject o: md.entities) {
				if (o.isLivingThing()) {
					LivingThing lt = (LivingThing)o;
					if (lt.isPlayer()) {
						lt.playSFX(sfxid);
					}
				}
			}
		}
	}

	// FIXME: move to map or livingthing
	public boolean canMoveTo(int inLocX, int inLocY, LivingThing lt) {
		int i;
		LivingThing thnStore2;
		Script scrStore;
		boolean blnStore;

		System.out.printf("can move %d,%d\n", inLocX, inLocY);
		if (!lt.map.inside(inLocX, inLocY))
			return false;

		//System.out.printf("can move to: %d,%d tid=%3d on map %s\n", inLocX, inLocY, lt.map.getTile(inLocX, inLocY), lt.map.name);
		for (DuskObject o: lt.map.getEntities(inLocX, inLocY, null)) {
			if (o.isLivingThing()) {
				thnStore2 = (LivingThing)o;
				if (!canMoveThrougLivingThing(lt, thnStore2))
					return false;
			}
		}
		try {
			scrStore = new Script("defCanMoveScripts/" + inLocX + "_" + inLocY, this, false);
			scrStore.varVariables.addVariable("trigger", lt);
			blnStore = scrStore.rewindAndParseScript();
			scrStore.close();
			return blnStore;
		} catch (Exception e) {
			//e.printStackTrace();
		}
		try {
			int tid = lt.map.getTile(inLocX, inLocY);
			scrStore = (Script)tileCanMove.get(tid);
			synchronized (scrStore) {
				scrStore.varVariables.clearVariables();
				scrStore.varVariables.addVariable("trigger", lt);
				blnStore = scrStore.rewindAndParseScript();
			}
			return blnStore;
		} catch (Exception e) {
			//e.printStackTrace();
		}
		return false;
	}

	// FIXME: move to lt
	boolean canSee(LivingThing lt, int inLocX, int inLocY) {
		int i;
		Script script;
		boolean blnStore;
		try {
			script = new Script("defCanSeeScripts/" + inLocX + "_" + inLocY, this, false);
			script.varVariables.addVariable("trigger", lt);
			blnStore = script.rewindAndParseScript();
			script.close();
			return blnStore;
		} catch (Exception e) {
		}
		try {
			script = (Script)tileCanSee.get((int)lt.map.getTile(inLocX, inLocY));
			synchronized (script) {
				script.varVariables.clearVariables();
				script.varVariables.addVariable("trigger", lt);
				blnStore = script.rewindAndParseScript();
			}
			return blnStore;
		} catch (Exception e) {
		}
		return false;
	}

	// TODO: Move this to map, then everything that uses it can be elsewhere
	// Or to living thing
	// Following by Randall Leeds and Tom Weingarten
	// map/iterator version by notzed
	public boolean canSeeTo(LivingThing lt, int destX, int destY) {
		if (Math.abs(lt.x - destX) > viewrange || Math.abs(lt.y - destY) > viewrange) {
			return false;
		}

		if (!blnLineOfSight) {
			return true;
		}

		for (TileMap.MapData md: lt.map.look(lt.x, lt.y, destX, destY)) {
			if (!canSee(lt, md.x, md.y))
				return false;
		}
		return true;
		/*
		 int tempX = thing.x;
		 int tempY = thing.y;

		 // TODO: put looking stuff on map
		 // TODO: put path finding on map
		 // FIXME: this exception stuff is just used for bounds checking ... not good
		 // FIXME: logic could be improved using directions
		 try {
		 while (!(Math.abs(tempX - destX) < 2 && Math.abs(tempY - destY) < 2)) {
		 if (Math.abs(tempX - destX) > Math.abs(tempY - destY)) {
		 if (tempX > destX) {
		 if (!(canSee(tempX - 1, tempY, thing))) {
		 return false;
		 }
		 tempX--;
		 } else {
		 if (!(canSee(tempX + 1, tempY, thing))) {
		 return false;
		 }
		 tempX++;
		 }
		 } else if (Math.abs(tempX - destX) < Math.abs(tempY - destY)) {
		 if (tempY > destY) {
		 if (!(canSee(tempX, tempY - 1, thing))) {
		 return false;
		 }
		 tempY--;
		 } else {
		 if (!(canSee(tempX, tempY + 1, thing))) {
		 return false;
		 }
		 tempY++;
		 }
		 } else {
		 if (tempX > destX && tempY > destY) {
		 if (!(canSee(tempX - 1, tempY - 1, thing))) {
		 return false;
		 }
		 tempX--;
		 tempY--;
		 } else if (tempX < destX && tempY < destY) {
		 if (!(canSee(tempX + 1, tempY + 1, thing))) {
		 return false;
		 }
		 tempX++;
		 tempY++;
		 } else if (tempX > destX && tempY < destY) {
		 if (!(canSee(tempX - 1, tempY + 1, thing))) {
		 return false;
		 }
		 tempX--;
		 tempY++;
		 } else {
		 if (!(canSee(tempX + 1, tempY - 1, thing))) {
		 return false;
		 }
		 tempX++;
		 tempY--;
		 }
		 }
		 }
		 } catch (Exception e) {
		 return false;
		 }

		 return true;
		 * */
	}
	//End contributed portion

	// FIXME: Move to livingthing? Enforce privs?
	synchronized void changeMap(LivingThing god, int locx, int locy, short value) {
		if (value < 0 || value > tileCanMove.size()) {
			log.printMessage(Log.INFO, "Invalid value passed to changeMap(" + locx + "," + locy + "," + value + ")");
			return;
		}
		if (!god.map.inside(locx, locy)) {
			log.printMessage(Log.INFO, "Invalid location to changeMap(" + locx + "," + locy + "," + value + ")");
			return;
		}
		god.map.setTile(locx, locy, value);
		blnMapHasChanged = true;
		updateMap(god, locx, locy);
	}

	void updateMap(LivingThing thing, int locx, int locy) {
		for (TileMap.MapData md: thing.map.range(locx, locy, viewrange)) {
			for (DuskObject o: md.entities) {
				if (o.isLivingThing()) {
					LivingThing lt = (LivingThing)o;
					if (lt.isPlayer()) {
						lt.updateMap();
					}
				}
			}
		}
	}

	// FIXME: move to livingthing enforce privs?
	synchronized void resizeMap(TileMap map, int x, int y) {
		map.resize(x, y);
		// FIXME: only the map that changed
		for (LivingThing thing: playersByName.values()) {
			thing.initMap();
		}
		blnMapHasChanged = true;
	}

	void saveMap() {
		if (blnSavingGame) {
			return;
		}
		try {
			blnSavingGame = true;
			StringTokenizer tknStore;
			Mob mobStore;
			Item itmStore;
			Sign sgnStore;
			Merchant mrcStore;
			Prop prpStore;
			File deleteme;
			RandomAccessFile rafFile;
			int i,
				i2;
			if (blnMapHasChanged) {
				System.err.println("save map not implemented");
				log.printMessage(Log.ALWAYS, "Saving map...");
				//map.saveMap(new File("shortmap"));
				String strMapLog = "shortmap_redraw";
				PrintStream psMap = new PrintStream(new FileOutputStream(strMapLog, true), true);
				psMap.println("# Map Saved");
				psMap.close();
				blnMapHasChanged = false;
			}

			if (blnMobListChanged) {
				log.printMessage(Log.ALWAYS, "Saving mobs...");
				synchronized (mobList) {
					deleteme = new File("mobs");
					deleteme.delete();
					rafFile = new RandomAccessFile("mobs", "rw");
					for (Mob mob: mobList) {
						if (mob.blnOneUse == false) {
							if (mob.level == -1) {
								rafFile.writeBytes("mob2.3\n" + mob.name + "\n" + mob.originalX + "\n" + mob.originalY + "\n");
							} else {
								rafFile.writeBytes(mob.name + "\n" + mob.level + "\n" + mob.originalX + "\n" + mob.originalY + "\n");
							}
						}
					}
					rafFile.close();
				}
				blnMobListChanged = false;
			}

			if (blnSignListChanged) {
				log.printMessage(Log.ALWAYS, "Saving signs...");
				synchronized (signList) {
					deleteme = new File("signs");
					deleteme.delete();
					rafFile = new RandomAccessFile("signs", "rw");
					for (Sign sign: signList) {
						rafFile.writeBytes(sign.strMessage + "\n" + sign.x + "\n" + sign.y + "\n");
					}
					rafFile.close();
				}
				blnSignListChanged = false;
			}

			if (blnMerchantListChanged) {
				log.printMessage(Log.ALWAYS, "Saving merchants...");
				synchronized (merchantList) {
					deleteme = new File("merchants");
					deleteme.delete();
					try (RandomAccessFile out = new RandomAccessFile("merchants", "rw")) {
						// FIXME: i/o on object
						for (Merchant m: merchantList) {
							out.writeBytes(m.x + "\n" + m.y + "\n");
							for (i2 = 0; i2 < m.items.size(); i2++) {
								out.writeBytes((String)m.items.get(i2) + "\n");
							}
							out.writeBytes("end\n");
						}
					}
				}
				blnMerchantListChanged = false;
			}

			if (blnPropListChanged) {
				log.printMessage(Log.ALWAYS, "Saving props...");
				synchronized (propList) {
					deleteme = new File("props");
					deleteme.delete();
					rafFile = new RandomAccessFile("props", "rw");
					for (Prop prop: propList) {
						rafFile.writeBytes(prop.name + "\n" + prop.x + "\n" + prop.y + "\n");
					}
					rafFile.close();
				}
				blnPropListChanged = false;
			}

			if (blnVariableListChanged) {
				log.printMessage(Log.ALWAYS, "Saving global variables...");
				synchronized (varVariables) {
					deleteme = new File("globals");
					deleteme.delete();
					rafFile = new RandomAccessFile("globals", "rw");
					for (Variable varStore: varVariables.vctVariables.values()) {
						if (varStore.isString() || varStore.isNumber()) {
							rafFile.writeBytes(varStore.strName + "\n");
							rafFile.writeBytes(varStore.bytType + "\n");
							rafFile.writeBytes(varStore.objData + "\n");
						}
					}
					rafFile.close();
				}
				blnVariableListChanged = false;
			}
			log.printMessage(Log.ALWAYS, "Saved game settings without error");
		} catch (Exception e) {
			log.printError("saveMap():While saving game settings", e);
		}
		blnSavingGame = false;
	}

	void backupMap() {
		if (true)
			throw new UnsupportedOperationException("backupmap not implemented");
		try {
			StringTokenizer tknStore;
			Mob mobStore;
			Item itmStore;
			Sign sgnStore;
			Merchant mrcStore;
			Prop prpStore;
//			synchronized (map) {
			{
				File deleteme;
				RandomAccessFile rafFile;
				int i, i2;

				//	map.saveMap(new File("backup/shortmap.backup"));
				deleteme = new File("backup/mobs.backup");
				deleteme.delete();
				rafFile = new RandomAccessFile("backup/mobs.backup", "rw");
				synchronized (mobList) {
					for (Mob mob: mobList) {
						if (mob.blnOneUse == false) {
							tknStore = new StringTokenizer(mob.name, " ");
							rafFile.writeBytes(tknStore.nextToken() + "\n" + mob.level + "\n" + mob.originalX + "\n" + mob.originalY + "\n");
						}
					}
				}
				rafFile.close();

				deleteme = new File("backup/signs.backup");
				deleteme.delete();
				rafFile = new RandomAccessFile("backup/signs.backup", "rw");
				for (Sign sign: signList) {
					rafFile.writeBytes(sign.strMessage + "\n" + sign.x + "\n" + sign.y + "\n");
				}
				rafFile.close();

				deleteme = new File("backup/merchants.backup");
				deleteme.delete();
				rafFile = new RandomAccessFile("backup/merchants.backup", "rw");
				for (Merchant m: merchantList) {
					rafFile.writeBytes(m.x + "\n" + m.y + "\n");
					for (i2 = 0; i2 < m.items.size(); i2++) {
						rafFile.writeBytes((String)m.items.get(i2) + "\n");
					}
					rafFile.writeBytes("end\n");
				}
				rafFile.close();

				deleteme = new File("backup/props.backup");
				deleteme.delete();
				rafFile = new RandomAccessFile("backup/props.backup", "rw");
				for (Prop prop: propList) {
					rafFile.writeBytes(prop.name + "\n" + prop.x + "\n" + prop.y + "\n");
				}
				rafFile.close();
			}
			log.printMessage(Log.ALWAYS, "Backed up game settings without error");
		} catch (Exception e) {
			log.printError("backupMap():While backing up settings", e);
		}
	}

	@Deprecated
	private void pushDuskObject(TileMap map, DuskObject o) {
		o.map = map;
		map.addEntity(o);
	}

	@Deprecated
	private void popDuskObject(TileMap map, DuskObject o) {
		map.removeEntity(o);
	}

	public void addDuskObject(TileMap map, DuskObject obj) {
		System.out.printf("xx add '%s' %d %d\n", obj.name, obj.x, obj.y);
		if (obj.isLivingThing()) {
			LivingThing lt = (LivingThing)obj;
			if (!lt.isLoaded) {
				return;
			}
			if (obj instanceof Mob) {
				synchronized (mobList) {
					mobList.add((Mob)obj);
				}
				blnMobListChanged = true;
			} else if (lt.isPet()) {
				petList.add(lt);
			}
		} else if (obj.isItem()) {
			itemList.add((Item)obj);
		} else if (obj.isSign()) {
			signList.add((Sign)obj);
			blnSignListChanged = true;
		} else if (obj.isMerchant()) {
			merchantList.add((Merchant)obj);
			blnMerchantListChanged = true;
		} else if (obj.isProp()) {
			propList.add((Prop)obj);
			blnPropListChanged = true;
		}

		pushDuskObject(map, obj);
		addEntity(map, obj);
	}

	/**
	 * When a mob is killed, it isn't really removed, but the player needs
	 * to know about it.
	 * <p>
	 * This 'cheats' by removing it from the game but temporarily
	 * corrupting the mob index.
	 *
	 * @param obj
	 */
	public void mobKilled(Mob obj) {
		notifyRemoved(obj);
		popDuskObject(obj.map, obj);
	}

	public void removeDuskObject(DuskObject obj) {
		System.out.printf("xx rem '%s' %d %d\n", obj.name, obj.x, obj.y);
		if (obj.isLivingThing()) {
			LivingThing lt = (LivingThing)obj;
			if (!lt.isLoaded) {
				return;
			}
			if (lt.isMob()) {
				synchronized (mobList) {
					mobList.remove(obj);
				}
				blnMobListChanged = true;
			} else if (lt.isPet()) {
				petList.remove(obj);
			}
		} else if (obj.isItem()) {
			itemList.remove(obj);
		} else if (obj.isSign()) {
			signList.remove(obj);
			blnSignListChanged = true;
		} else if (obj.isMerchant()) {
			merchantList.remove(obj);
			blnMerchantListChanged = true;
		} else if (obj.isProp()) {
			propList.remove(obj);
			blnPropListChanged = true;
		}

		notifyRemoved(obj);
		popDuskObject(obj.map, obj);
	}

	/**
	 * Move a living thing, updating any other living things within range.
	 * <p>
	 * Only moves wihin the same map
	 *
	 * @param thing
	 * @param inlocx
	 * @param inlocy
	 * @param dir
	 */
	// FIXME: after moving here now i think this probably needs to be moved back to livingthing ...
	public void moveDuskObject(LivingThing thing, int inlocx, int inlocy, byte dir) {
		for (TileMap.MapData md: thing.map.range(thing.x, thing.y, viewrange)) {
			for (DuskObject o: md.entities) {
				if (o.isLivingThing()) {
					LivingThing lt = (LivingThing)o;
					if (lt.isPlayer()) {
						boolean canSee = canSeeTo(lt, inlocx, inlocy)
							&& (!thing.isLivingThing()
							|| canSeeLivingThing(lt, thing));

						if (canSee) {
							// Add/update it if now visible
							lt.addEntity(thing);
							lt.send(DuskMessage.create(thing.ID, MSG_MOVE, dir));
						} else {
							// Remove it if it isn't
							lt.removeEntity(thing.ID);
						}
					} else if (lt.isMob()) {
						// Is this true?
						Mob thnMob = (Mob)lt;
						thnMob.blnCanSeePlayer = true;
					}
				}
			}
		}
		// Move it from cell to cell
		popDuskObject(thing.map, thing);
		thing.x = inlocx;
		thing.y = inlocy;
		pushDuskObject(thing.map, thing);
		//addDuskObject(objIn);
	}

	/**
	 * Find a visible object of the given name.
	 * <p>
	 * Name may also be the id.
	 *
	 * @param thing
	 * @param name
	 * @return
	 */
	// FIXME: move to livingthing?
	public DuskObject findVisibleObject(LivingThing thing, String name) {
		int number = 0;
		int byid = -1;

		// First see if this finding an object by unique id.
		// Since .. the server and client have different ideas about "id numbers" (FFS)
		try {
			byid = Integer.valueOf(name);
			number = 0;
		} catch (NumberFormatException e) {
		}

		if (byid == -1) {
			int i = name.indexOf(".");
			if (i != -1) {
				try {
					number = Integer.parseInt(name.substring(0, i));
					name = name.substring(i + 1, name.length());
				} catch (NumberFormatException e) {
					number = 0;
				}
			}
		}
		//Search surrounding area

		for (TileMap.MapData md: thing.map.range(thing.x, thing.y, viewrange)) {
			for (DuskObject o: md.entities) {
				if (byid == o.ID
					|| (byid == -1 && o.name.equalsIgnoreCase(name))) {
					if ((!o.isLivingThing()
						|| canSeeLivingThing(thing, (LivingThing)o))
						&& canSeeTo(thing, o.x, o.y)) {
						if (number == 0) {
							return o;
						} else {
							number--;
						}
					}
				}
			}
		}

		return null;
	}

	public void run() {
		log.printMessage(Log.ALWAYS, "Mob ticks = " + lngMobTicks);
		log.printMessage(Log.ALWAYS, "Player ticks = " + lngPlayerTicks);
		log.printMessage(Log.ALWAYS, "Starting Ticks");
		int tick = 0,
			i;
		LivingThing thnStore,
			thnStore2;
		Battle batStore;
		long lngTime = System.currentTimeMillis(),
			lngPause = 0;
		while (true) {
			try {
				//250 milliseconds per tick
				lngPause = lngPlayerTicks - (System.currentTimeMillis() - lngTime);
				if (lngPause > 0) {
					Thread.currentThread().sleep(lngPause);
				}
				lngTime = System.currentTimeMillis();
				if (tick % 73 == 0) {
					for (LivingThing pet: petList) {
						if (pet.battle == null) {
							if (pet.isSleeping) {
								pet.hp += 3 + (pet.cons + pet.consbon);
								if (pet.hp > (pet.maxhp + pet.hpbon)) {
									pet.hp = (pet.maxhp + pet.hpbon);
								}
								pet.mp += 3 + (pet.wisd + pet.wisdbon);
								if (pet.mp > (pet.maxmp + pet.mpbon)) {
									pet.mp = (pet.maxmp + pet.mpbon);
								}
							} else {
								pet.hp += 1 + ((pet.cons + pet.consbon) / 2);
								if (pet.hp > (pet.maxhp + pet.hpbon)) {
									pet.hp = (pet.maxhp + pet.hpbon);
								}
								pet.mp += 1 + ((pet.wisd + pet.wisdbon) / 2);
								if (pet.mp > (pet.maxmp + pet.mpbon)) {
									pet.mp = (pet.maxmp + pet.mpbon);
								}
							}
						}
						if (pet.getMaster() != null) {
							if (!pet.getMaster().isWorking) {
								pet.close();
								continue;
							}
							boolean blnTmpShouldSave = pet.isSaveNeeded;
							pet.getMaster().updateStats();
							pet.isSaveNeeded = blnTmpShouldSave;
						} else {
							pet.close();
							continue;
						}
						pet.savePlayer();
					}
				}
				for (LivingThing pet: petList) {
					pet.moveTick();
				}
				//Following code submitted by Randall Leeds, revised by Tom Weingarten:
				for (LivingThing lt: playersByName.values()) {
					if (!lt.isWorking) {
						//thnStore.closeNoMsgPlayer();
						continue;
					}
					if (!lt.isSaveable) {
						continue;
					}
					if (lt.noChannel > 0 && tick % 4 == 0) {
						lt.noChannel--;
					}
					lt.moveTick();
					if (tick % 73 == 0) {
						if (lt.battle == null) {
							if (lt.isSleeping) {
								lt.hp += 3 + (lt.cons + lt.consbon);
								if (lt.hp > (lt.maxhp + lt.hpbon)) {
									lt.hp = (lt.maxhp + lt.hpbon);
								}
								lt.mp += 3 + (lt.wisd + lt.wisdbon);
								if (lt.mp > (lt.maxmp + lt.mpbon)) {
									lt.mp = (lt.maxmp + lt.mpbon);
								}
							} else {
								lt.hp += 1 + ((lt.cons + lt.consbon) / 2);
								if (lt.hp > (lt.maxhp + lt.hpbon)) {
									lt.hp = (lt.maxhp + lt.hpbon);
								}
								lt.mp += 1 + ((lt.wisd + lt.wisdbon) / 2);
								if (lt.mp > (lt.maxmp + lt.mpbon)) {
									lt.mp = (lt.maxmp + lt.mpbon);
								}
							}
							lt.updateInfo();
							lt.savePlayer();
						}
					}
				}
				//End of code submitted by Randall Leeds

				if (tick % 10 == 0) {
					for (i = 0; i < battleList.size(); i++) {
						batStore = (Battle)battleList.get(i);
						if (batStore.blnRunning == false) {
							battleList.remove(i);
							i--;
						} else {
							batStore.run();
						}
					}
				}
				if (tick > 72) {
					tick = 0;
					synchronized (mobList) {
						for (Mob mob: mobList) {
							if (mob.battle == null) {
								// FIXME: magic number
								if (mob.x != -6) {
									mob.hp += 1 + (mob.cons / 2);
									if (mob.hp > mob.maxhp) {
										mob.hp = mob.maxhp;
									}
									mob.mp += 1 + (mob.wisd / 2);
									if (mob.mp > mob.maxmp) {
										mob.mp = mob.maxmp;
									}
								} else {
									mob.hp++;
									if (mob.hp > 0) {
										mob.hp = mob.maxhp;
										mob.mp = mob.maxmp;
										// mobx always stay on same map?
										mob.changeLocBypass(mob.map, mob.originalX, mob.originalY);
									}
								}
							}
						}
					}
					for (Faction f: factionMap.values()) {
						f.saveFactionData();;
					}
				}
				tick++;
			} catch (Exception e) {
				log.printError("DuskEngine.run():at ticks", e);
			}
		}
	}

	/**
	 * Script helpers
	 */
	public boolean canSeeLivingThing(LivingThing seeing, LivingThing seen) {
		if (scrCanSeeLivingThing != null) {
			synchronized (scrCanSeeLivingThing) {
				scrCanSeeLivingThing.varVariables.clearVariables();
				scrCanSeeLivingThing.varVariables.addVariable("seeing", seeing);
				scrCanSeeLivingThing.varVariables.addVariable("seen", seen);
				return scrCanSeeLivingThing.rewindAndParseScript();
			}
		} else {
			return true;
		}
	}

	public boolean canMoveThrougLivingThing(LivingThing moving, LivingThing blocking) {
		if (scrCanMoveThroughLivingThing != null) {
			synchronized (scrCanMoveThroughLivingThing) {
				scrCanMoveThroughLivingThing.varVariables.clearVariables();
				scrCanMoveThroughLivingThing.varVariables.addVariable("moving", moving);
				scrCanMoveThroughLivingThing.varVariables.addVariable("blocking", blocking);
				return scrCanMoveThroughLivingThing.rewindAndParseScript();
			}
		} else {
			return true;
		}
	}

	public void onStart(LivingThing trigger) {
		try {
			if (scrOnStart != null) {
				synchronized (scrOnStart) {
					scrOnStart.varVariables.clearVariables();
					scrOnStart.varVariables.addVariable("trigger", trigger);
					scrOnStart.runScript();
				}
			}
		} catch (Exception e) {
		}
	}

	/**
	 * Temporarily ban an ip address
	 *
	 * @param strIP
	 */
	public void banAddress(String strIP) {
		synchronized (bannedIPMap) {
			bannedIPMap.put(strIP.toLowerCase(), System.currentTimeMillis());
		}
	}

	public boolean isBanned(String ip) {
		synchronized (bannedIPMap) {
			return bannedIPMap.containsKey(ip.toLowerCase());
		}
	}

	public void clearBanned() {
		synchronized (bannedIPMap) {
			bannedIPMap.clear();;
		}
	}

	/**
	 * Log/track password failures
	 *
	 * @param name name of user who failed
	 * @param address address of failure
	 * @return true if the host is now banned
	 */
	public boolean passwordFailure(String name, String address) {
		log.printMessage(Log.INFO, address + ":" + name + " entered the wrong password");
		Integer failCount = failureAddress.get(address);
		if (failCount != null) {
			int fc = failCount.intValue();
			if (fc >= 4) {
				banAddress(address);
				return true;
			} else {
				failureAddress.put(address, fc + 1);
			}
		} else {
			failureAddress.put(address, 1);
		}

		return false;
	}

	public void passwordSuccess(String name, String address) {
		failureAddress.remove(address);
	}

	/**
	 * This registers a new player atomically.
	 * <p>
	 * Any existing player with the same name is booted
	 */
	public void registerPlayer(LivingThing lt, String name) throws BlockedIPException {
		synchronized (playersByName) {
			// Check ip filter, FIXME: test
			if (blnIPF) {
				String address = lt.getAddress();

				for (LivingThing thing: playersByName.values()) {
					if (thing.getAddress().equalsIgnoreCase(address)) {
						throw new BlockedIPException("Already a player connected from your address");
					}
				}
			}

			LivingThing thing;
			name = name.toLowerCase();
			thing = playersByName.get(name);

			if (thing != null) {
				log.printMessage(Log.INFO, lt.getAddress() + ":" + name + " tried to log in twice");
				// FIXME: nowhere to send this
				//chatMessage("That user is already logged in. They are being logged out.");
				lt.chatMessage("There has been another logon under this name, you are being logged out.");
				lt.close();

			}

			playersByName.put(name, lt);
		}
	}
}
