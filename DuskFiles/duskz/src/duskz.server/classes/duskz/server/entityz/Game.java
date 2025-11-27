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

import duskz.map.Location;
import duskz.map.TileMap;
import duskz.server.BlockedIPException;
import duskz.util.PropertyLoader;
import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Properties;
import java.util.concurrent.Future;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.regex.Pattern;

/**
 * Main game engine
 * <p>
 * Handles game setup, prefs, loading/restoring state, and the main
 * game clock.
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class Game {

	public final Log log;
	// prefs stuff
	public int port = 7480;
	public int viewRange = 6;
	public int mapSize = viewRange * 2 + 1;
	public String rcName = "somedusk";
	public double goldFleeMod = 1.0 / 64.0;  // fiXME ;lcheck
	public double goldLoseMod = 1.0 / 16.0;
	public double expFleeMod = 1.0 / 64.0;
	public double expLoseMod = 1.0 / 16.0;
	public double expGainMod = 18;
	public int messageLimit = 256;
	// How many ticks between battle steps
	public int battleRate = 3;//10
	/**
	 * Time between user messages
	 */
	public int floodLimit = 500;
	//
	private ScriptManager scriptManager = new ScriptManager();
	//
	private File root;
	private File confDir;
	private File tileActionDir;
	private File tileAbleDir;
	private File tileVisibleDir;
	private File locationActionDir;
	private File locationAbleDir;
	private File locationVisibleDir;
	//
	private File onScriptDir;
	private File onConditionDir;
	// Maps a tile number to a script
	private HashMap<Integer, String> tileAction = new HashMap<>();
	private HashMap<Integer, String> tileAble = new HashMap<>();
	private HashMap<Integer, String> tileVisible = new HashMap<>();
	// Just indicates which scripts are available, could be a cache or something
	private HashSet<String> locationAction = new HashSet<>();
	private HashSet<String> locationAble = new HashSet<>();
	private HashSet<String> locationVisible = new HashSet<>();
	/*
	 * Preference keys
	 */
	public final static String PREF_AI = "ai";
	// Used for mob info cache
	HashMap<String, Mobile> allMobs = new HashMap<>();
	// Used for item info cache, this needs a clone or equivalent ...
	//HashMap<String, Holdable> allItems = new HashMap<>();
	// Factions
	HashMap<String, Faction> factions = new HashMap<>();
	// do i want any of this now?  hmm.
	ThingTable<Mobile> mobs;
	ThingTable<GameShop> gameShops;
	ThingTable<Sign> signs;
	ThingTable<Prop> props;
	//
	HashMap<String, Race> races = new HashMap<>();
	// All players in game
	HashMap<String, Player> players = new HashMap<>();
	// All things in game
	HashMap<Long, Thing> things = new HashMap<>();
	// All actives in game
	HashMap<Long, Active> actives = new HashMap<>();
	//
	private final HashMap<String, TileMap<Thing>> maps = new HashMap<>();
	//
	private ArrayList<Battle> battles = new ArrayList<>();

	public Game() {
		log = new Log(System.out);
		log.setLogLevel(Log.DEBUG);
	}

	public File getRoot() {
		return root;
	}

	public void init(File root) throws IOException {
		this.root = root;

		confDir = new File(root, "config");
		tileActionDir = new File(root, "onTileAction");
		tileAbleDir = new File(root, "onTileAble");
		tileVisibleDir = new File(root, "onTileVisible");

		locationActionDir = new File(root, "onLocationAction");
		locationAbleDir = new File(root, "onLocationAble");
		locationVisibleDir = new File(root, "onLocationVisible");

		onScriptDir = new File(root, "onItem");
		onConditionDir = new File(root, "onCondition");

		mobs = new ThingTable<>(new File(root, "mobs"));
		gameShops = new ThingTable<>(new File(root, "gameShops"));
		signs = new ThingTable<>(new File(root, "signs"));
		props = new ThingTable<>(new File(root, "props"));

		// Load preferences
		// TODO: load more preferences
		Properties prefs = new Properties();
		try (BufferedInputStream bis = new BufferedInputStream(new FileInputStream(new File(confDir, "prefs")))) {
			prefs.load(bis);
		} catch (FileNotFoundException ex) {
			log.printf(ex, "Preferences not found: %s", new File(confDir, "prefs"));
		}
		rcName = prefs.getProperty("rcname", "somedusk");

		// Load all races (move to 'racelist' class?)
		{
			File path = new File(root, "defRaces");
			if (!path.isDirectory())
				throw new FileNotFoundException("Unable to find races");

			for (File file: path.listFiles()) {
				try {
					Race race = Race.loadRace(file);
					races.put(race.name, race);
				} catch (IOException ex) {
					log.printf(ex, "Loading map %s failed", file.getName());
				}
			}
		}

		// Load all maps
		{
			File path = new File(root, "defMaps");
			if (!path.isDirectory())
				throw new FileNotFoundException("Unable to find maps");
			for (File file: path.listFiles()) {
				if (file.getName().endsWith(".alias"))
					continue;
				try {
					TileMap map = TileMap.loadLayered(file);
					maps.put(map.name, map);
					log.printf(Log.VERBOSE, "Map: %s size=%dx%dx%d", map.name, map.getCols(), map.getRows(), map.getLayerCount());
				} catch (IOException ex) {
					log.printf(ex, "Loading map %s failed", file.getName());
				}
			}
		}

		// Load tile scripts
		// TODO: actually verify scripts exist at least?
		{
			File path = new File(root, "tileScriptMap");
			try (PropertyLoader pl = new PropertyLoader(path)) {
				for (PropertyLoader.PropertyEntry pe: pl) {
					String[] line = pe.name.split("\\.");
					Integer id = Integer.valueOf(line[0]);

					switch (line[1]) {
					case "visible":
						tileVisible.put(id, pe.value);
						break;
					case "able":
						tileAble.put(id, pe.value);
						break;
					case "action":
						tileAction.put(id, pe.value);
						break;
					}
				}
			}
		}

		// Find out the names of the scripts available
		{
			String[] dirs = {"onLocationAble", "onLocationAction", "onLocationVisible"};
			HashSet[] sets = {locationAble, locationAction, locationVisible};

			for (int i = 0; i < dirs.length; i++) {
				sets[i].addAll(Arrays.asList(new File(root, dirs[i]).list()));
			}
		}

		// load all factions (before mobs)
		{
			File path = new File(root, "factions");
			if (!path.isDirectory())
				throw new FileNotFoundException("Unable to find factions");
			for (File file: path.listFiles()) {
				try {
					Faction f = new Faction(file.getName(), this);
					f.load();
					factions.put(f.name, f);
					log.printf(Log.VERBOSE, "Faction: %s", f.name);
				} catch (IOException ex) {
					log.printf(ex, "Loading faction %s failed", file.getName());
				}
			}
		}

		// load all mob types into cache/check validity
		// hmm, not using this yet?
		{
			File path = new File(root, "defMobs");
			if (!path.isDirectory())
				throw new FileNotFoundException("Unable to find mobs");
			for (File file: path.listFiles()) {
				try {
					Mobile mob = new Mobile(this);
					mob.load(file);
					allMobs.put(mob.name, mob);
					//log.printf(Log.VERBOSE, "Mob class: %s", mob.name);
				} catch (Exception ex) {
					log.printf(ex, "Loading mob %s failed", file.getName());
				}
			}
		}

		// Load all active objects
		// FIXME: has to copy to various indices
		mobs.restoreState(this, new File(root, "defMobs"));
		gameShops.restoreState(this);
		signs.restoreState(this);
		props.restoreState(this);

		// HACK: just copy to indices now
		for (Mobile m: mobs.values()) {
			System.out.println("add mob " + m.name + " on " + m.map.name);
			addThing(m);
		}
		for (Sign s: signs.values()) {
			System.out.println("add sign: " + s.name + " at " + s.x + ", " + s.y + " on map " + s.map.name);
			addThing(s);
		}
		for (Shop s: gameShops.values()) {
			System.out.println("add shop: " + s.name + " at " + s.x + ", " + s.y + " on map " + s.map.name);
			addThing(s);
		}

		scriptManager.start();

		// We're ready, time for 'onstart' script
		runScript(confDir, "onStart", "game", this);
	}

	// dont think i want this now
	public void addEveryTick(Active lt) {
	}

	public void removeEveryTick(Active lt) {
	}

	public void addTickHandler(Runnable r, int ratio) {
		// add the tick handler to the queue
		// if the queue was empty, wake up the tick thread
	}

	void restoreState() {
	}

	void saveState() {
		mobs.saveState(this);
		gameShops.saveState(this);
		signs.saveState(this);
		props.saveState(this);
	}

	public TileMap<Thing> getMap(String name) {
		return maps.get(name);
	}

	/**
	 * Create a copy of an item prototype
	 *
	 * @param name
	 * @return item, or null if it coulnd't be loaded/found
	 */
	public Holdable createItem(String name) {
		Thing.ThingResolver resolver = new Thing.EmptyResolver();

		try (BufferedReader in = new BufferedReader(new FileReader(new File(root, "defItems/" + name.toLowerCase())))) {
			return (Holdable)Thing.restoreState(this, in, resolver);
		} catch (IOException ex) {
			log.printf(ex, "Loading item: %s", name);
		}
		return null;
	}

	/**
	 * Look up a boolean preference.
	 *
	 * @param name
	 * @return
	 */
	public boolean isPreference(String name) {
		switch (name) {
		case PREF_AI:
			return true;
		}
		// FIXME: implement properly
		return true;
	}

	/**
	 * Send a global chat from a given player. Calls chatMessage() on
	 * all active players.
	 *
	 * @param from may be null
	 * @param clan may be null
	 * @param msg
	 */
	public void globalChat(Player from, String clan, String msg) {
		//log.printMessage(Log.ALWAYS, msg);
		for (Player player: players.values()) {
			player.chatMessage(from, clan, msg);
		}
	}

	// this shouldn't be needed ...
	public void cleanup() {
	}

	public void addBattle(Battle battle) {
		battles.add(battle);
	}

	public Thing getThing(long id) {
		return things.get(id);
	}

	/**
	 * Remove object from game
	 * Do not call this directly for players.
	 *
	 * @param thing
	 */
	void removeThing(Thing thing) {
		assert (things.containsKey(thing.ID));

		switch (thing.getType()) {
		case Thing.TYPE_PLAYER:
			players.remove(((Player)thing).name);
			actives.remove(thing.ID);
			break;
		case Thing.TYPE_MOBILE:
			mobs.remove((Mobile)thing);
			actives.remove(thing.ID);
			break;
		case Thing.TYPE_PET:
			actives.remove(thing.ID);
			break;
		}

		thing.map.removeEntity(thing);
		things.remove(thing.ID);

	}

	public void addThing(Thing t) {
		things.put(t.ID, t);

		switch (t.getType()) {
		case Thing.TYPE_PLAYER: {
			Player player = (Player)t;
			players.put(player.name, player);
			actives.put(player.ID, player);
			break;
		}
		case Thing.TYPE_MOBILE:
			mobs.add((Mobile)t);
			actives.put(t.ID, (Active)t);
			// Mobs are not addded to the map directly, respawn does it
			return;
		case Thing.TYPE_PET:
			actives.put(t.ID, (Active)t);
			break;
		}
		t.map.addEntity(t);
	}

	/**
	 * Public interfac to remove things from the game
	 *
	 * @param h
	 */
	public void removeItem(Holdable h) {
		removeThing(h);
	}

	/**
	 * Add a thing to game
	 *
	 * @param t
	 * @param map
	 * @param x
	 * @param y
	 */
	public void addThing(Thing t, TileMap map, int x, int y) {
		// FIXME: threads
		t.map = map;
		t.x = x;
		t.y = y;
		addThing(t);
	}

	/**
	 * runs a script that returns nothing
	 *
	 * @param base
	 * @param name
	 * @param args
	 */
	public void runScript(File base, String name, Object... args) {
		if (name == null)
			return;

		try {
			Future<Object> res = scriptManager.runScript(new File(base, name), args);

			res.get();
		} catch (FileNotFoundException ex) {
		} catch (Exception ex) {
			Logger.getLogger(Game.class.getName()).log(Level.SEVERE, null, ex);
		}
	}

	/**
	 * Runs a script returning a boolean result.
	 *
	 * @param def default value for script with error or no script
	 * @param base
	 * @param name name of script. The special names 'true', and 'false' are handled directly.
	 * @param args
	 * @return
	 */
	public boolean runScriptBoolean(boolean def, File base, String name, Object... args) {
		if (name == null)
			return def;

		if (name.equals("true"))
			return true;
		else if (name.equals("false"))
			return false;

		System.out.println("run bool script: " + base.getName() + "/" + name);

		try {
			Future<Boolean> res = scriptManager.runScript(new File(base, name), args);

			System.out.println(" = " + res.get());

			return res.get();
		} catch (FileNotFoundException ex) {
			System.out.println("Script not found: " + base.getName() + "/" + name);
		} catch (Exception ex) {
			Logger.getLogger(Game.class.getName()).log(Level.SEVERE, null, ex);
		}
		return def;
	}

	/**
	 * TODO: do i want to pass the map name to the tile script too?
	 * TODO: can i improve the mapping? e.g. give the tile a name,
	 * and use the name to find the appropriate scripts?
	 *
	 * @param trigger
	 * @param tileid
	 */
	public void onTileAction(Active trigger, int tileid) {
		String name = tileAction.get(tileid);

		if (name != null) {
			runScript(tileActionDir, name,
				"game", this,
				"trigger", trigger);
		}
	}

	public boolean onTileVisible(Active trigger, int tileid) {
		String name = tileVisible.get(tileid);

		if (name != null) {
			return runScriptBoolean(false, tileVisibleDir, name,
				"game", this,
				"trigger", trigger);
		}
		return false;
	}

	public boolean onTileAble(Active trigger, int tileid) {
		String name = tileAble.get(tileid);

		//System.out.printf("onTileTable tid=%d script=%s\n", tileid, name);
		if (name != null) {
			return runScriptBoolean(false, tileAbleDir, name,
				"game", this,
				"trigger", trigger);
		}
		return false;
	}

	private void onMoveAction(Active trigger, int x, int y) {
		String alias = trigger.map.jumpAlias(x, y);
		if (alias != null) {
			TileMap map = trigger.map;
			Location l = map.locationForAlias(alias);
			if (l == null) {
				for (TileMap scan: maps.values()) {
					l = scan.locationForAlias(alias);
					if (l != null) {
						map = scan;
						break;
					}
				}
			}
			if (l != null) {
				System.out.printf("direct jump to '%s'  map %s %d,%d\n",
					alias, map.name, l.x, l.y);
				trigger.jumpTo(map, l.x, l.y);
				return;
			} else {
				log.printf(Log.INFO, "Location alias not found: %s, map %s %d,%d", alias, trigger.map.name, x, y);
			}
		}

		runScript(locationActionDir, trigger.map.locationActionScript(x, y),
			"game", this,
			"trigger", trigger);
	}

	private boolean haveMoveAble(Active trigger, int x, int y) {
		return trigger.map.locationAbleScript(x, y) != null;
	}

	private boolean onMoveAble(Active trigger, int x, int y) {
		return runScriptBoolean(false, locationAbleDir, trigger.map.locationAbleScript(x, y),
			"game", this,
			"trigger", trigger);
	}

	private boolean haveMoveVisible(Active trigger, int x, int y) {
		return trigger.map.locationVisibleScript(x, y) != null;
		//return locationVisible.contains(trigger.map.locationVisibleScript(x, y));
	}

	private boolean onMoveVisible(Active trigger, int x, int y) {
		return runScriptBoolean(false, locationVisibleDir, trigger.map.locationVisibleScript(x, y),
			"game", this,
			"trigger", trigger);
	}

	/**
	 * Check scripts to see if trigger can move onto location.
	 * If present, the location script overrides the tile script.
	 *
	 * @param trigger
	 * @param x
	 * @param y
	 * @param tileid
	 * @return
	 */
	public boolean onLocationAble(Active trigger, int x, int y, int tileid) {
		//System.out.printf("onLocationAble %d,%d %d havemove=%s onmove=%s ontile=%s\n",
		//		x, y, tileid, haveMoveAble(trigger, x, y),
		//		onMoveAble(trigger, x, y),
		//		onTileAble(trigger, tileid));
		if (haveMoveAble(trigger, x, y))
			return onMoveAble(trigger, x, y);
		else
			return onTileAble(trigger, tileid);
	}

	public boolean onLocationVisible(Active trigger, int x, int y, int tileid) {
		//System.out.printf("onLocationVisible %d,%d %d havemove=%s onmove=%s ontile=%s\n",
		//		x, y, tileid, haveMoveVisible(trigger, x, y),
		//		onMoveVisible(trigger, x, y),
		//		onTileVisible(trigger, tileid));

		if (haveMoveVisible(trigger, x, y))
			return onMoveVisible(trigger, x, y);
		else
			return onTileVisible(trigger, tileid);
	}

	public void onLocationAction(Active trigger, int x, int y, int tileid) {
		// Do I always do both?  Possibly not?
		onTileAction(trigger, tileid);
		onMoveAction(trigger, x, y);
	}

	public boolean onCanAttack(Active attacking, Active attacked) {
		// TODO: would a race or mob based attack script fit here?
		return runScriptBoolean(true, confDir, "canAttack", "attacking", attacking, "attacked", attacked);
	}

	/**
	 * Calls the onPlayerStart script.
	 *
	 * @param player
	 * @return true if the player is allowed to start
	 */
	public boolean onPlayerStart(Player player) {
		return runScriptBoolean(true, confDir, "onPlayerStart", "player", player.getCommands());
	}

	public boolean haveOnItem(Holdable trigger, String what) {
		return new File(onScriptDir, trigger.name + "." + what).exists();
	}

	/**
	 * Perform on item callback
	 *
	 * @param owner
	 * @param item
	 * @param what "get" or "drop", etc.
	 */
	public void onItem(Active owner, Holdable item, String what) {
		runScript(onScriptDir, item.name + "." + what,
			"game", this,
			"owner", owner,
			"item", item);
	}

	public boolean haveOnCondition(Holdable trigger, String what) {
		return new File(onConditionDir, trigger.name + "." + what).exists();
	}

	/**
	 * Perform on item callback
	 *
	 * @param owner
	 * @param item
	 * @param what "get" or "drop", etc.
	 */
	public void onCondition(Active owner, Condition cond, String what) {
		runScript(onConditionDir, cond.name + "." + what,
			"game", this,
			"owner", owner,
			"condition", cond);
	}
	private int tick;

	public int getClock() {
		return tick;
	}

	/**
	 * Main game loop.
	 * <p>
	 * 1. all actives are moved active.moveTick()
	 * 2. run per-tick activities
	 * 3. run player updates
	 *
	 * @param tick
	 */
	void gameTick(int tick) {
		this.tick = tick;
		// TODO: the order of this might need tweaking
		for (Active a: actives.values()) {
			a.moveTick();
		}
		for (Active a: actives.values()) {
			a.tick(tick);
		}
		//if (tick % 10 == 0) {
		if (tick % battleRate == 0) {
			ArrayList<Battle> done = new ArrayList<>();
			for (Battle b: battles) {
				if (b.isFighting()) {
					b.run();
				} else {
					done.add(b);
				}
			}
			battles.removeAll(done);
		}

		for (Active a: actives.values()) {
			a.visibilityTick(tick);
		}
	}

	void onDeath(Player player, Active winner) {
		runScript(new File(root, "scripts"), "onDeath", "trigger", player, "killer", winner);
	}

	boolean playerExists(String name) {
		return new File(root, "players/" + name.toLowerCase()).exists();
	}

	boolean petExists(String name) {
		return new File(root, "pets/" + name.toLowerCase()).exists();
	}

	// TODO: String insecure for password
	boolean checkPassword(String name, String pass, String address) throws TooManyTriesException, BlockedIPException {

		// TODO: handle ip blocked checking here
		Player p = new Player(this, null);
		try {
			p.load(new File(root, "players/" + name.toLowerCase()));
		} catch (IOException ex) {
			return false;
		}

		if (p.password == null) {
			// Some error
			log.printf(Log.ERROR, "User file has no password: %s", name);
			return false;
		}

		if (pass.equals(p.password)) {
			return true;
		} else if (logPasswordFailure(name, address)) {
			throw new TooManyTriesException();
		} else {
			try {
				Thread.sleep(3000);
			} catch (InterruptedException ex) {
				Logger.getLogger(Game.class.getName()).log(Level.SEVERE, null, ex);
			}
			return false;
		}
	}

	/**
	 * Return true if login limit exceeded. If so, then mark address as banned.
	 *
	 * @param name
	 * @param address
	 * @return
	 */
	boolean logPasswordFailure(String name, String address) {
		return false;
	}

	void logPasswordSuccess(String player, String address) {
		//throw new UnsupportedOperationException("Not supported yet.");
	}
	int namecap = 12;

	boolean isGoodName(String player) {
		if (player == null)
			return false;

		String lcplayer = player.toLowerCase();

		// config?
		Pattern reserved = Pattern.compile("^god|default$");
		// config?
		Pattern valid = Pattern.compile("^[A-Za-z]+$");

		if (reserved.matcher(lcplayer).matches()
			|| !valid.matcher(player).matches()) {
			return false;
		}

		try (BufferedReader br = new BufferedReader(new FileReader(new File(confDir, "dirtyWordFile")))) {
			String strDirtyWord = br.readLine();
			while (strDirtyWord != null) {
				if (lcplayer.indexOf(strDirtyWord) != -1) {
					return false;
				}
				strDirtyWord = br.readLine();
			}
		} catch (IOException x) {
			x.printStackTrace();
		}

		return true;
	}

	/**
	 * Registers the player with the game.
	 * Checks to see if the player is already connected - logs out other player.
	 *
	 * @param player
	 * @throws BlockedIPException
	 */
	void registerPlayer(Player player) {
		logPasswordSuccess(player.name, player.getAddress());

		Player old = players.get(player.name);
		if (old != null) {
			old.chatMessage("Logged in again from: " + player.getAddress());
			old.logout();
		}

		//throw new UnsupportedOperationException("Not supported yet.");
		players.put(player.name, player);
		things.put(player.ID, player);
		actives.put(player.ID, player);
		player.map.addEntity(player);

		try {
			System.out.println("added player:");
			BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
			player.writeProperties(bw);
			bw.flush();
		} catch (IOException ex) {
			Logger.getLogger(Game.class.getName()).log(Level.SEVERE, null, ex);
		}

	}

	void unregisterPlayer(Player player) {
		// TODO threading
		player.map.removeEntity(player);
		players.remove(player.name);
		things.remove(player.ID);
		actives.remove(player.ID);
	}

	public List<String> getRaceNames() {
		ArrayList<String> l = new ArrayList<>(races.size());

		for (Race r: races.values()) {
			l.add(r.name);
		}
		return l;
	}

	Race getRace(String value) {
		return races.get(value);
	}

	public Faction getFaction(String name) {
		return factions.get(name);
	}
}
