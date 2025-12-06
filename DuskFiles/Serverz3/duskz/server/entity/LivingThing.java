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
 * Feb-2013 Michael Zucchi - modernised java, lots of clean up and encapsulation
 * and synchronisation fixes. Moved loader here.
 * Mar-2013 Michael Zucchi - changed server protocol
 */
package duskz.server.entity;

import duskz.protocol.DuskMessage;
import duskz.protocol.DuskMessage.EntityMessage;
import duskz.protocol.DuskMessage.StringMessage;
import duskz.protocol.DuskProtocol;
import static duskz.protocol.DuskProtocol.AUTH_LOGIN_FAILED;
import static duskz.protocol.DuskProtocol.FIELD_AUTH_REASON;
import static duskz.protocol.DuskProtocol.FIELD_AUTH_RESULT;
import duskz.protocol.EntityListMessage;
import duskz.protocol.EntityUpdateMessage;
import duskz.protocol.ListMessage;
import duskz.protocol.MapMessage;
import duskz.protocol.TransactionMessage;
import duskz.protocol.Wearing;
import duskz.server.Battle;
import duskz.server.BlockedIPException;
import duskz.server.Commands;
import duskz.server.Condition;
import duskz.server.DuskEngine;
import duskz.server.ItemList;
import duskz.server.Log;
import duskz.server.Script;
import duskz.server.SpellGroup;
import duskz.server.entity.TileMap.MapData;
import duskz.server.entity.TileMap.MoveData;
import java.io.*;
import java.net.Socket;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;
import java.util.concurrent.LinkedBlockingDeque;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * LivingThing defines the base class for all moving objects. This includes
 * Players, Pets, and Mobs.
 *
 * @author Tom Weingarten
 */
public class LivingThing extends DuskObject implements Runnable, DuskProtocol {

	DuskEngine game;
	final public LinkedBlockingDeque<DuskMessage> messageQueue = new LinkedBlockingDeque<>();
	//StillWorking?
	public boolean isWorking = true;
	//Has the player finished loading yet?
	public boolean isLoaded = false;
	//Should the player be in who yet?
	public boolean isReady = false;
	//Can we save the player yet?
	public boolean isSaveable = false;
	//SHOULD we save the player yet?
	public boolean isSaveNeeded = false;
	//Is player in process of closing?
	public boolean isClosing = false;
	//Should we stop the thread?
	public boolean isStopped = false;
	//Should we process in-game commands after script is finished?
	//(The script can change this to false to stop it from happening)
	//(This allows scripts to short-circuit in-game commands)
	public boolean isAlwaysCommands = true;
	// File wornNames for i/o
	File file, backup;
	//ID data
	public String password,
			clan = "none",
			title = null,
			masterName = null;
	//Group
	LivingThing following = null,
			master = null,
			charmer = null;
	//Stats
	public int playerID, // uniquely identifies player for land ownership
			hp,
			maxhp,
			mp,
			maxmp,
			originalX,
			originalY,
			stre,
			inte,
			dext,
			cons,
			wisd,
			exp,
			hpbon = 0,
			mpbon = 0,
			strebon = 0,
			intebon = 0,
			dextbon = 0,
			consbon = 0,
			wisdbon = 0,
			dammodbon = 0,
			rangebon = 0,
			acbon = 0;
	//Max values for stats
	public int hp_limit = -1,
			mp_limit = -1,
			exp_limit = -1,
			stre_limit = 100,
			inte_limit = 100,
			dext_limit = 100,
			cons_limit = 100,
			wisd_limit = 100;
	// FIXME: not public
	public long cash;
	// FIXME: not public
	public long lastMessageStamp = 0;
	//Status
	// FIXME: accessor
	public boolean isSleeping;
	//Is this livingthing currently allowed to move?
	public boolean isMoveable = true;
	//For commands that need input...
	boolean isHalted = false;
	//Battle
	// FIXME: accessor
	public Battle battle = null;
	public byte battleSide;
	public long damageDone;
	//Flags
	// FIXME: accessor/helper
	final public List<String> flags = new LinkedList<>();
	//Conditions
	final public List<Condition> conditions = new ArrayList<>();
	//Skills
	final HashMap<String, Ability> skillMap = new HashMap<>(2);
	//Spells
	final HashMap<String, Ability> spellMap = new HashMap<>(2);
	// worn, FIXME: not public
	public Equipment wornItems;
	//Items
	public ItemList itemList;
	//Movement queue
	final private LinkedList<String> moveQueue = new LinkedList<>();
	//Entities (for optimized refresh)
	private final HashMap<Long, DuskObject> nearEntities = new HashMap<>();
	//Image id
	int imageid;
	// Image step for animation selection
	public int imagestep;
	//Race
	public String race = null;
	//Priveleges
	public int privs = 0;
	//Socket connection
	private Socket socket;
	// FIXME: not public
	private DataInputStream instream;
	private DataOutputStream outstream;
	public Thread connectionThread;
	private SendThread sendThread;
	//Prefs
	public boolean audioon = true,
			coloron = true,
			popup = true,
			highlight = true,
			noFollow = false;
	public int noChannel = 0;
	//Timestamp of last save
	long lastSaveStamp;
	//List of players being ignored
	final public List<String> ignoreList = new ArrayList<>();
	//Type
	/*
	 0=Player
	 1=Mob
	 2=Pet
	 */
	byte Type;

	public boolean isPlayer() {
		if (Type == 0) {
			return true;
		}
		return false;
	}

	public boolean isMob() {
		if (Type == 1) {
			return true;
		}
		return false;
	}

	public boolean isPet() {
		if (Type == 2) {
			return true;
		}
		return false;
	}

	@Override
	public byte getType() {
		return LIVING_THING;
	}

	@Override
	public int getImage() {
		return imageid;
	}

	@Override
	public int getEntityType() {
		if (isMob())
			return EntityUpdateMessage.TYPE_MOBILE;
		if (isPet())
			return EntityUpdateMessage.TYPE_PET;
		return EntityUpdateMessage.TYPE_PLAYER;
	}

	/**
	 * Get IP address of player
	 *
	 * @return
	 */
	public String getAddress() {
		// TODO: the connect code had the following, why?
		//		String strIP = socket.getInetAddress().toString();
		//int ip = strIP.indexOf("/");
		//strIP = strIP.substring(ip + 1, strIP.length());

		if (socket != null
				&& socket.isConnected())
			return socket.getInetAddress().toString();
		else
			return null;
	}

	@Override
	public EntityUpdateMessage toMessage(int msg) {
		EntityUpdateMessage en = super.toMessage(msg);

		StringBuilder sb = new StringBuilder();
		if (isSleeping) {
			sb.append("<sleeping>");
		}
		if (isPlayer() && !clan.equals("none")) {
			sb.append('<');
			sb.append(clan);
			sb.append('>');
		}
		if (isPet() && hp < 0) {
			sb.append("<wounded>");
		}
		for (String s : flags) {
			sb.append('<');
			sb.append(s);
			sb.append('>');
		}
		sb.append(name);

		en.entityName = sb.toString();
		if (isPlayer())
			en.imageStep = (short) imagestep;

		return en;
	}

	/**
	 * for extended classes
	 */
	public LivingThing(long ID, String name) {
		super(ID, name);
	}

	/**
	 * new Player
	 */
	public LivingThing(Socket inSocket, DuskEngine inEngine) {
		super(LIVING_THING, inEngine.getID());
		try {
			sendThread = new SendThread();
			sendThread.start();
			Type = 0;
			game = inEngine;
			socket = inSocket;
			socket.setSoTimeout(600000); //10 minute timeout
			socket.setSoLinger(false, 0); //Do not linger on disconnect
			instream = new DataInputStream(new BufferedInputStream(socket.getInputStream()));
			outstream = new DataOutputStream(new BufferedOutputStream(socket.getOutputStream()));
			game.log.printMessage(Log.INFO, socket.toString());
			battle = null;
			isSleeping = false;

			//
			// WTF is this stuff doing here??

			if (game.maxconnections != 0 && game.playersByName.size() >= game.maxconnections) {
				chatMessage("Sorry, the server has reached it's connection limit. Try again later.");
				quit();
				Thread.sleep(1000);
				closeNosavePlayer();
				return;
			}
			// Game is shutting down
			if (game.blnShuttingDown) {
				chatMessage("Sorry, the server is not accepting new connections. It is either being shutdown or worked on.  Try again later.");
				quit();
				Thread.sleep(1000);
				closeNosavePlayer();
				return;
			}
			if (!game.isGoodIP(socket.getInetAddress().toString())) {
				chatMessage("Connections from your machine are no longer being accepted.");
				quit();
				Thread.sleep(1000);
				closeNosavePlayer();
				return;
			}
		} catch (Exception e) {
			game.log.printError("LivingThing():Creating player", e);
		}
	}

	/**
	 * new Pet
	 */
	public LivingThing(String strName, String strType, LivingThing master, DuskEngine inEngine) {
		super(inEngine.getID(), strName);
		try {
			Type = 2;
			game = inEngine;
			this.master = master;
			masterName = this.master.name.toLowerCase();
			charmer = this.master;
			x = this.master.x;
			y = this.master.y;
			battle = null;
			isSleeping = false;
			wornItems = new Equipment();
			itemList = new ItemList();

			//Load pet files

			String strStore = "";
			if (strType != null) {
				race = strType;
			}
			/*
			 ** check to see if a pet exists
			 */
			File filCheck;
			if (strName.equalsIgnoreCase("default")) {
				strStore = this.master.name.toLowerCase();
				filCheck = new File("pets/" + strStore);
				if (!filCheck.exists() && strType == null) {
					closeNosavePlayer();
					return;
				}
			}
			loadUserFile(new File("pets/default"), false);
			strStore = this.master.name.toLowerCase();
			File filPlayer = new File("pets/" + strStore);
			File filBackup = new File("pets/" + strStore + ".backup");
			/*
			 ** Check for old style pet entityName
			 ** (Only need to check if we already have a valid pet entityName)
			 */
			if (!strName.equalsIgnoreCase("default")) {
				strStore = strName.toLowerCase();
				File filOldPet = new File("pets/" + strStore);
				File filOldBackup = new File("pets/" + strStore + ".backup");
				if (filOldPet.exists() && !filPlayer.exists()) {
					filOldPet.renameTo(filPlayer);
					filOldPet.delete();
				}
				if (filOldBackup.exists() && !filBackup.exists()) {
					filOldBackup.renameTo(filBackup);
					filOldBackup.delete();
				}
			}
			strStore = this.master.name.toLowerCase();
			int i = 0;
			if (filBackup.exists()) {
				if (filPlayer.length() > filBackup.length()) {
					filCheck = new File("backup/" + strStore + ".possiblyDamaged");
					while (filCheck.exists()) {
						i++;
						filCheck = new File("backup/" + strStore + ".possiblyDamaged." + i);
					}
					filBackup.renameTo(filCheck);
				} else if (filPlayer.length() < filBackup.length()) {
					filCheck = new File("backup/" + strStore + ".possiblyDamaged");
					while (filCheck.exists()) {
						i++;
						filCheck = new File("backup/" + strStore + ".possiblyDamaged." + i);
					}
					filPlayer.renameTo(filCheck);
					filBackup.renameTo(new File("pets/" + strStore));
				}
			}
			strStore = this.master.name.toLowerCase();

			file = new File("pets", strStore);
			backup = new File("pets", strStore + ".backup");
			loadUserFile(file, false);
			if (race != null) {
				loadRaceFile(new File("defPets/" + race.toLowerCase()), true);
			}
			if (masterName == null) {
				masterName = this.master.name.toLowerCase();
			}
			//game.vctPets.addElement(this);
			isSaveable = true;
		} catch (Exception e) {
			game.log.printError("LivingThing():Creating pet", e);
			close();
		}
	}

	public LivingThing getFollowing() {
		return following;
	}

	public LivingThing getMaster() {
		return master;
	}

	public LivingThing getCharmer() {
		return charmer;
	}

	public void setFollowing(LivingThing following) {
		this.following = following;
	}

	public void setMaster(LivingThing master) {
		this.master = master;
	}

	public void leaveBattle() {
		battle = null;
		battleSide = 0;
		isMoveable = true;
	}

	public void enterBattle(Battle battle, int sideid) {
//			thnAdded.changeLocBypass(thnFront1.intLocX,thnFront1.intLocY);
		isMoveable = false;
		isSleeping = false;
		this.battle = battle;
		updateActions();
		battleSide = (byte) sideid;
	}

	private void setAbility(Map<String, Ability> map, String name, int value) {
		map.put(name.toLowerCase(), new Ability(value, name));
	}

	private int getAbility(Map<String, Ability> map, String name) {
		Ability ability = map.get(name.toLowerCase());

		return ability != null ? ability.getAbility() : 0;
	}

	public int getSkill(String name) {
		return getAbility(skillMap, name);
	}

	public int getSpell(String name) {
		return getAbility(spellMap, name);
	}

	/**
	 * Train a skill or spell.
	 *
	 * @param entityName
	 * @param add increment
	 * @return true if the skill/spell exists and was created/incremented
	 */
	public boolean addToSkill(String name, int add) {
		System.out.println("adding to skill " + name + " " + add);
		String key = name.toLowerCase();
		try {
			Ability skill = spellMap.get(key);
			if (skill == null) {
				File filCheck = new File("defSpellGroups/" + name);
				if (filCheck.exists()) {
					setAbility(spellMap, name, add);
					return true;
				}
				if ((skill = skillMap.get(name)) == null) {
					setAbility(skillMap, name, add);
					return true;
				}
			}
			return skill.train(add);
		} catch (Exception e) {
			game.log.printError("addToSkill()", e);
		}
		return false;
	}

	public boolean setSkill(String name, int value) {
		String key = name.toLowerCase();
		if (value <= 0) {
			if (skillMap.remove(key) != null) {
				return true;
			}
			if (spellMap.remove(key) != null) {
				return true;
			}
			return false;
		}
		// TODO: try/catch not needed here
		try {

			Ability skill = spellMap.get(key);
			if (skill == null) {
				File filCheck = new File("defSpellGroups/" + name);
				if (filCheck.exists()) {
					setAbility(spellMap, name, value);
					return true;
				}
				if ((skill = skillMap.get(name)) == null) {
					setAbility(skillMap, name, value);
					return true;
				}
			}
			skill.setAbility(value);
			return true;
		} catch (Exception e) {
			game.log.printError("setSkill()", e);
		}
		return false;
	}

	int totalSkillValue() {
		int total = 0;

		for (Ability skill : skillMap.values())
			total += skill.getAbility();
		for (Ability spell : spellMap.values())
			total += spell.getAbility();
		return total;
	}

	public void loadUserFile(File path, boolean haspass) throws FileNotFoundException, IOException {
		try (RandomAccessFile file = new RandomAccessFile(path, "r")) {
			String line;
			int lineNo = 1;
			if (haspass) {
				line = file.readLine();
				lineNo++;
			}
			while (!((line = file.readLine()) == null || line.equals("."))) {
				try {
					parseUserFile(file, line);
					lineNo += 1;
				} catch (NumberFormatException x) {
					throw new IOException("Problem parsing user " + path + " line: " + lineNo + " `" + line + "'", x);
				}
			}
		}
	}

	protected void parseWear(RandomAccessFile in, int where) throws IOException {
		Item item = game.getItem(in.readLine());
		if (item != null) {
			item.lngDurability = Long.parseLong(in.readLine());
			item.intUses = Integer.parseInt(in.readLine());
			wornItems.wear(where, item);
			onWear(item);
		}
	}

	protected void parseUserFile(RandomAccessFile in, String type) throws IOException, NumberFormatException {
		switch (type.toLowerCase()) {
			case "timestamp":
				lastSaveStamp = Long.parseLong(in.readLine());
				break;
			case "petname":
				name = in.readLine();
				break;
			case "master":
				masterName = in.readLine();
				break;
			case "skill":
				type = in.readLine();
				addToSkill(type, Byte.parseByte(in.readLine()));
				break;
			case "condition": {
				// FIXME: i/o to Condition
				Condition cndStore = game.getCondition(in.readLine());
				cndStore.ticksPast = Integer.parseInt(in.readLine());
				cndStore.duration = Integer.parseInt(in.readLine());
				if (cndStore.duration < -1) { // only necessary to repair
					cndStore.duration = -1; // after bug fix, can go away
				}
				addCondition(cndStore);
				break;
			}
			case "item": {
				Item itmStore = game.getItem(in.readLine());
				if (itmStore != null) {
					itemList.addElement(itmStore);
				}
				break;
			}
			case "item2": { //for compatibility. Will be replaced with item later
				Item itmStore = game.getItem(in.readLine());
				if (itmStore != null) {
					itmStore.lngDurability = Long.parseLong(in.readLine());
					itmStore.intUses = Integer.parseInt(in.readLine());
					itemList.addElement(itmStore);
				}
				break;
			}
			case "privs":
				privs = Byte.parseByte(in.readLine());
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
			case "map":
				map = game.maps.get(in.readLine());
				break;
			case "x":
				x = Integer.parseInt(in.readLine());
				break;
			case "y":
				y = Integer.parseInt(in.readLine());
				break;
			case "hp":
				hp = Integer.parseInt(in.readLine());
				break;
			case "maxhp":
				maxhp = Integer.parseInt(in.readLine());
				break;
			case "mp":
			case "sp":
				mp = Integer.parseInt(in.readLine());
				break;
			case "maxmp":
			case "maxsp":
				maxmp = Integer.parseInt(in.readLine());
				break;
			case "cash":
				cash = Integer.parseInt(in.readLine());
				break;
			case "exp":
				exp = Integer.parseInt(in.readLine());
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
			case "pet":
				if (!isPet()) {
					following = new LivingThing(in.readLine(), null, this, game);
				}
				break;
			// FIXME: do i need these 'old' versions?
			case "wield":
				wornItems.wear(Wearing.WIELD, game.getItem(in.readLine()));
				break;
			case "arms":
				wornItems.wear(Wearing.ARMS, game.getItem(in.readLine()));
				break;
			case "legs":
				wornItems.wear(Wearing.LEGS, game.getItem(in.readLine()));
				break;
			case "torso":
				wornItems.wear(Wearing.TORSO, game.getItem(in.readLine()));
				break;
			case "waist":
				wornItems.wear(Wearing.WAIST, game.getItem(in.readLine()));
				break;
			case "neck":
				wornItems.wear(Wearing.NECK, game.getItem(in.readLine()));
				break;
			case "skull":
				wornItems.wear(Wearing.SKULL, game.getItem(in.readLine()));
				break;
			case "eyes":
				wornItems.wear(Wearing.EYES, game.getItem(in.readLine()));
				break;
			case "hands":
				wornItems.wear(Wearing.HANDS, game.getItem(in.readLine()));
				break;
			case "wield2":
				parseWear(in, Wearing.WIELD);
				break;
			case "arms2":
				parseWear(in, Wearing.ARMS);
				break;
			case "legs2":
				parseWear(in, Wearing.LEGS);
				break;
			case "torso2":
				parseWear(in, Wearing.TORSO);
				break;
			case "waist2":
				parseWear(in, Wearing.WAIST);
				break;
			case "neck2":
				parseWear(in, Wearing.NECK);
				break;
			case "skull2":
				parseWear(in, Wearing.SKULL);
				break;
			case "eyes2":
				parseWear(in, Wearing.EYES);
				break;
			case "hands2":
				parseWear(in, Wearing.HANDS);
				break;
			case "nofollow":
				noFollow = true;
				break;
			case "nopopup":
				popup = false;
				break;
			case "nochannel":
				noChannel = Integer.parseInt(in.readLine());
				break;
			case "audiooff":
				audioon = false;
				break;
			case "coloroff":
				coloron = false;
				break;
		}
		//	engGame.log.printError("parseUserFile():Parsing \"" + strStore + "\" from " + entityName + "'s file", e);
	}

	public void loadRaceFile(File path, boolean add) throws FileNotFoundException, IOException {
		String line;
		try (RandomAccessFile file = new RandomAccessFile(path, "r")) {
			while (!((line = file.readLine()) == null || line.equals("."))) {
				try {
					parseRaceFile(file, line, add);
				} catch (NumberFormatException x) {
					throw new IOException("Problem parsing race " + path + " on field " + line, x);
				}
			}
		}
	}

	protected void parseRaceFile(RandomAccessFile file, String strStore, boolean add) {
		int s = add ? 1 : -1;
		try {
			switch (strStore) {
				case "hp":
					hpbon += s * Integer.parseInt(file.readLine());
					break;
				case "mp":
					mpbon += s * Integer.parseInt(file.readLine());
					break;
				case "stre":
					strebon += s * Integer.parseInt(file.readLine());
					break;
				case "inte":
					intebon += s * Integer.parseInt(file.readLine());
					break;
				case "dext":
					dextbon += s * Integer.parseInt(file.readLine());
					break;
				case "cons":
					consbon += s * Integer.parseInt(file.readLine());
					break;
				case "wisd":
					wisdbon += s * Integer.parseInt(file.readLine());
					break;
				case "range":
					rangebon += s * Integer.parseInt(file.readLine());
					break;
				case "hp_limit":
					hp_limit = add ? Integer.parseInt(file.readLine()) : -1;
					break;
				case "mp_limit":
					mp_limit = add ? Integer.parseInt(file.readLine()) : -1;
					break;
				case "exp_limit":
					exp_limit = add ? Integer.parseInt(file.readLine()) : -1;
					break;
				case "stre_limit":
					stre_limit = add ? Integer.parseInt(file.readLine()) : 100;
					break;
				case "inte_limit":
					inte_limit = add ? Integer.parseInt(file.readLine()) : 100;

					break;
				case "dext_limit":
					dext_limit = add ? Integer.parseInt(file.readLine()) : 100;
					break;
				case "cons_limit":
					cons_limit = add ? Integer.parseInt(file.readLine()) : 100;
					break;
				case "wisd_limit":
					wisd_limit = add ? Integer.parseInt(file.readLine()) : 100;
					break;
				case "image":
					imageid = Integer.parseInt(file.readLine());
					break;
			}
		} catch (Exception e) {
			game.log.printError("parseRaceFile():Parsing \"" + strStore + "\" from " + name + "'s race file", e);
		}
	}

	void writePlayerFile(RandomAccessFile rafPlayerFile) throws IOException {
		synchronized (rafPlayerFile) {
			rafPlayerFile.setLength(0);
			if (isPlayer()) {
				rafPlayerFile.writeBytes(password + "\n");
				rafPlayerFile.writeBytes("privs\n" + String.valueOf(privs) + "\n");
				if (title != null) {
					rafPlayerFile.writeBytes("title\n" + title + "\n");
				}
				if (clan != null) {
					rafPlayerFile.writeBytes("clan\n" + clan + "\n");
				} else {
					rafPlayerFile.writeBytes("clan\nnone\n");
				}
				rafPlayerFile.writeBytes("map\n" + map.name + "\n");
				rafPlayerFile.writeBytes("x\n" + String.valueOf(x) + "\n");
				rafPlayerFile.writeBytes("y\n" + String.valueOf(y) + "\n");
				if (popup == false) {
					rafPlayerFile.writeBytes("nopopup\n");
				}
				if (audioon == false) {
					rafPlayerFile.writeBytes("audiooff\n");
				}
				if (coloron == false) {
					rafPlayerFile.writeBytes("coloroff\n");
				}
				if (noFollow == true) {
					rafPlayerFile.writeBytes("nofollow\n");
				}
				if (noChannel != 0) {
					rafPlayerFile.writeBytes("nochannel\n" + noChannel + "\n");
				}
			}
			rafPlayerFile.writeBytes("race\n" + race + "\n");
			if (isPet()) {
				rafPlayerFile.writeBytes("petname\n" + name + "\n");
				rafPlayerFile.writeBytes("master\n" + masterName + "\n");
			}
			if (description != null) {
				rafPlayerFile.writeBytes("description\n" + description + "\n");
			}
			rafPlayerFile.writeBytes("exp\n" + String.valueOf(exp) + "\n");
			rafPlayerFile.writeBytes("hp\n" + String.valueOf(hp) + "\n");
			rafPlayerFile.writeBytes("maxhp\n" + String.valueOf(maxhp) + "\n");
			rafPlayerFile.writeBytes("mp\n" + String.valueOf(mp) + "\n");
			rafPlayerFile.writeBytes("maxmp\n" + String.valueOf(maxmp) + "\n");
			rafPlayerFile.writeBytes("cash\n" + String.valueOf(cash) + "\n");
			rafPlayerFile.writeBytes("stre\n" + String.valueOf(stre) + "\n");
			rafPlayerFile.writeBytes("inte\n" + String.valueOf(inte) + "\n");
			rafPlayerFile.writeBytes("dext\n" + String.valueOf(dext) + "\n");
			rafPlayerFile.writeBytes("cons\n" + String.valueOf(cons) + "\n");
			rafPlayerFile.writeBytes("wisd\n" + String.valueOf(wisd) + "\n");

			for (Ability skill : skillMap.values())
				rafPlayerFile.writeBytes("skill\n" + skill.name + "\n" + skill.getAbility() + "\n");
			for (Ability spell : spellMap.values())
				rafPlayerFile.writeBytes("skill\n" + spell.name + "\n" + spell.getAbility() + "\n");
			for (Condition cond : conditions) {
				rafPlayerFile.writeBytes("condition\n" + cond.name + "\n" + cond.ticksPast + "\n" + cond.duration + "\n");
			}
			for (int i = 0; i < Wearing.WEARING_COUNT; i++) {
				Item item = wornItems.getWorn(i);
				if (item != null) {
					rafPlayerFile.writeBytes(Equipment.USER_NAMES[i] + "\n" + item.name + "\n" + item.lngDurability + "\n" + item.intUses + "\n");
				}
			}
			for (LinkedList<Item> list : itemList.values()) {
				for (Item item : list) {
					rafPlayerFile.writeBytes("item2\n" + item.name + "\n" + item.lngDurability + "\n" + item.intUses + "\n");
				}
			}
			rafPlayerFile.writeBytes(".\n");//end of file
		}
	}

	public void savePlayer() {
		if (!isSaveNeeded) {
			/*
			 ** User info has not changed significantly
			 ** No need to save at this time.
			 */
			return;
		}
		if (!isSaveable) {
			/*
			 ** File is currently loading or saving and is not safe to
			 ** save at this time.
			 */
			return;
		}
		isSaveable = false;

		String strStore = name.toLowerCase();
		String strDirName = "users";
		if (isPet()) {
			strStore = masterName;
			strDirName = "pets";
		}

		// This should work if it's going to, write out a whole file,
		// and if that succeeds, copy it over

		try (RandomAccessFile rafFile = new RandomAccessFile(backup, "rw")) {
			writePlayerFile(rafFile);
		} catch (IOException x) {
			game.log.printMessage(Log.ERROR, "savePlayer():Saving primary file for " + backup + ", failed, aborting savePlayer");
			isSaveable = true;
			return;
		}

		try {
			Files.move(backup.toPath(), file.toPath(), StandardCopyOption.REPLACE_EXISTING);
		} catch (IOException ex) {
			game.log.printMessage(Log.ERROR, "savePlayer():Renaming primary file for " + file + ", failed, aborting savePlayer");
		}

		/*

		 boolean blnSaveSuccessful;
		 long lngFileLength = 0;
		 blnSaveSuccessful = writePlayerFile(rafFile);
		 try {
		 lngFileLength = rafFile.length();
		 } catch (Exception e) {
		 }

		 if (!blnSaveSuccessful || (lngFileLength < 100)) {
		 // Error saving file.  Close it, open it back up, and try again.
		 try {
		 rafFile.close();
		 } catch (Exception e) {
		 }
		 try {
		 rafFile = new RandomAccessFile(strDirName + "/" + strStore, "rw");
		 } catch (Exception e) {
		 }

		 blnSaveSuccessful = writePlayerFile(rafFile);

		 try {
		 lngFileLength = rafFile.length();
		 } catch (Exception e) {
		 }

		 if (!blnSaveSuccessful || (lngFileLength < 100)) {
		 engGame.log.printMessage(Log.ERROR, "savePlayer():Saving primary file for " + entityName + ", second try failed, aborting savePlayer");
		 blnCanSave = true;
		 return;
		 }
		 }

		 blnShouldSave = false;

		 blnSaveSuccessful = writePlayerFile(rafBackup);

		 try {
		 lngFileLength = rafBackup.length();
		 } catch (Exception e) {
		 }

		 if (!blnSaveSuccessful || (lngFileLength < 100)) {
		 // Error saving file.  Close it, open it back up, and try again.
		 try {
		 rafBackup.close();
		 } catch (Exception e) {
		 }
		 try {
		 rafBackup = new RandomAccessFile(strDirName + "/" + strStore + ".backup", "rw");
		 } catch (Exception e) {
		 }

		 blnSaveSuccessful = writePlayerFile(rafBackup);

		 try {
		 lngFileLength = rafBackup.length();
		 } catch (Exception e) {
		 }

		 if (!blnSaveSuccessful || (lngFileLength < 100)) {
		 engGame.log.printMessage(Log.ERROR, "savePlayer():Saving backup file for " + entityName + ", second try failed, aborting savePlayer");
		 blnCanSave = true;
		 return;
		 }
		 }
		 */
		isSaveable = true;
	}

	// TODO: the close commands need merging somehow
	public void close() {
		if (name == null || name.equalsIgnoreCase("default")) {
			return;
		}
		if (isClosing) {
			/*
			 ** Already closing elsewhere
			 */
			return;
		}
		isClosing = true;
		isWorking = false;
		isSaveNeeded = true;
		if (!conditions.isEmpty() && game.checkConditionList.contains(this)) {
			game.checkConditionList.remove(this);
		}
		removeFromGroup();
		try {
			game.removeDuskObject(this);
			if (isPlayer()) {
				try {
					synchronized (game.scrOnLogOut) {
						if (isSaveable) {
							game.scrOnLogOut.varVariables.clearVariables();
							game.scrOnLogOut.varVariables.addVariable("trigger", this);
							game.scrOnLogOut.runScript();
						}
					}
				} catch (Exception e) {
				}
				try {
					outstream.writeBytes((char) 3 + "Goodbye.\n" + (char) 0);
				} catch (Exception e) {
				}
				synchronized (game.playersByName) {
					game.playersByName.remove(name.toLowerCase());
				}
				try {
					savePlayer();
				} catch (Exception e) {
				}
				isSaveable = false;
				//try {
				//	rafFile.close();
				//	rafBackup.close();
				//} catch (Exception e) {
				//}
				try {
					if (following != null && following.isPet()) {
						following.close();
					}
					for (LivingThing pet : game.petList) {
						if (pet.master == this) {
							pet.close();
							break;
						}
					}
				} catch (Exception e) {
				}
				try {
					instream.close();
				} catch (Exception e) {
				}
				try {
					outstream.close();
				} catch (Exception e) {
				}
				if (!(hasCondition("invis") && (privs > 2))) {
					game.log.printMessage(Log.INFO, socket.getInetAddress().toString() + ":" + name + " has logged out");
					game.chatMessage(name + " has logged out.", name);
				} else {
					game.log.printMessage(Log.INFO, socket.getInetAddress().toString() + ":" + name + " has logged out hidden from players");
				}
				try {
					socket.close();
				} catch (Exception e) {
				}
				isStopped = true;
			} else if (isMob()) {
				//try {
				//	rafFile.close();
				//	rafBackup.close();
				//} catch (Exception e) {
				//}
				//game.vctMobs.remove(this);
			} else if (isPet()) {
				//game.vctPets.removeElement(this);
				savePlayer();
				//try {
				//	rafFile.close();
				//	rafBackup.close();
				//} catch (Exception e) {
				//}
			}
		} catch (Exception e) {
			game.log.printError("close():While closing " + name, e);
		}
	}

	public void closeNoMsgPlayer() {
		// Disabled this check... if this is called, the player needs to be closed.
		//	if (blnIsClosing)
		//	{
		//		/*
		//		** Already closing elsewhere
		//		*/
		//		return;
		//	}
		isClosing = true;
		isWorking = false;
		removeFromGroup();
		if (conditions.size() != 0) {
			game.checkConditionList.remove(this);
		}
		game.removeDuskObject(this);
		game.playersByName.remove(name.toLowerCase());
		try {
			socket.shutdownInput();
		} catch (Exception e) {
		}
		try {
			socket.shutdownOutput();
		} catch (Exception e) {
		}
		try {
			instream.close();
		} catch (Exception e) {
		}
		savePlayer();
		//try {
		//	rafFile.close();
		//	rafBackup.close();
		//} catch (Exception e) {
		//}
		if (following != null && following.isPet()) {
			following.close();
		}
		try {
			outstream.close();
		} catch (Exception e) {
		}
		isStopped = true;
		game.log.printMessage(Log.INFO, socket.getInetAddress().toString() + ":" + name + " has logged out");
		game.chatMessage(name + " has logged out.", name);
		try {
			socket.close();
		} catch (Exception e) {
		}
		name = null;
	}

	void closeNosavePlayer() {
		if (name == null || name.equalsIgnoreCase("default")) {
			isStopped = true;
			try {
				instream.close();
			} catch (Exception e) {
			}
			try {
				socket.close();
			} catch (Exception e) {
			}
			try {
				outstream.close();
			} catch (Exception e) {
			}
			return;
		}
		if (isClosing) {
			/*
			 ** Already closing elsewhere
			 */
			return;
		}
		isClosing = true;
		isWorking = false;
		isSaveable = false;
		isSaveNeeded = false;

		if (!conditions.isEmpty() && game.checkConditionList.contains(this)) {
			game.checkConditionList.remove(this);
		}
		removeFromGroup();
		try {
			game.removeDuskObject(this);
			if (isPlayer()) {
				try {
					synchronized (game.scrOnLogOut) {
						//engGame.scrOnLogOut.varVariables.clearVariables();
						//engGame.scrOnLogOut.varVariables.addVariable("trigger",this);
						//engGame.scrOnLogOut.runScript();
					}
				} catch (Exception e) {
				}
				try {
					outstream.writeBytes((char) 3 + "Goodbye.\n" + (char) 0);
				} catch (Exception e) {
				}
				//try {
				//	rafFile.close();
				//	rafBackup.close();
				//} catch (Exception e) {
				//}
				game.playersByName.remove(name.toLowerCase());
				try {
					instream.close();
				} catch (Exception e) {
				}
				try {
					outstream.close();
				} catch (Exception e) {
				}
				try {
					socket.close();
				} catch (Exception e) {
				}
				isStopped = true;
			} else if (isMob()) {
				//game.vctMobs.remove(this);
			} else if (isPet()) {
				//game.vctPets.removeElement(this);
				//try {
				//	rafFile.close();
				//	rafBackup.close();
				//} catch (Exception e) {
				//}
			}
		} catch (Exception e) {
			game.log.printError("closeNosavePlayer():While closing " + name, e);
		}
	}

	// TODO: shouldn' this work on 'this.ID'?
	public void updateFlag(long ID, int Value) {
		ListMessage lm = new EntityListMessage(ID, MSG_UPDATE_ENTITY);

		lm.add(FIELD_ENTITY_FLAGS, Value);

		send(lm);
	}

	public void clearFlags() {
		send(DuskMessage.create(MSG_CLEAR_FLAGS));
	}

	public boolean hasPendingMoves() {
		synchronized (moveQueue) {
			return !moveQueue.isEmpty();
		}
	}

	/**
	 * Clear any pending moves and queue a new move direction
	 *
	 * @param dir n/s/e/w
	 * @return true if move is possible
	 */
	public boolean moveAfterClear(String dir) {
		if (getMaster() != null) {
			if (!isPet() || getMaster().getFollowing() == this) {
				return false;
			}
		}
		synchronized (moveQueue) {
			moveQueue.clear();
			moveQueue.add(dir);
		}
		return true;
	}

	public void clearMoveQueue() {
		synchronized (moveQueue) {
			moveQueue.clear();
		}
	}

	/**
	 * Process one queued move
	 */
	public void moveTick() {
		synchronized (moveQueue) {
			if (moveQueue.isEmpty())
				return;

			String dir = moveQueue.removeFirst();

			if (dir != null) {
				switch (dir.charAt(0)) {
					case 'n':
						moveN();
						break;
					case 's':
						moveS();
						break;
					case 'w':
						moveW();
						break;
					case 'e':
						moveE();
						break;
				}
			}
		}
	}

	/**
	 * Send this to a specific destination.
	 *
	 * This is a completely new implementation using the map
	 *
	 * @param destX
	 * @param destY
	 * @param goon If true, go to exact location, otherwise only next to it
	 * @return
	 */
	public String goTo(int destX, int destY, boolean goon) {
		if (master != null) {
			if (!isPet() || master.following == this) {
				return "You can't move while you're following someone.";
			}
		}
		if (goon && !game.canMoveTo(destX, destY, this)) {
			return "You can't move onto that location.";
		}
		if (Math.abs(destX - x) > game.viewrange || Math.abs(destY - y) > game.viewrange) {
			return null;
		}
		synchronized (moveQueue) {
			moveQueue.clear();

			TileMap.MoveListener ml = new TileMap.MoveListener() {
				@Override
				public boolean canMoveto(MapData md) {
					return game.canMoveTo(md.x, md.y, LivingThing.this);
				}
			};
			int mflags = goon ? 0 : TileMap.SKIP_END;

			for (MoveData md : map.move(x, y, destX, destY, mflags, ml)) {
				moveQueue.add(md.direction);
			}
		}
		return null;
	}

	// This implemented path seeking, and moving within the same map
	protected synchronized void moveTo(int newLocX, int newLocY, byte dir, int intNewStep) {
		if (privs < 5 && (newLocX >= (map.getCols())
				|| newLocY >= (map.getRows())
				|| newLocX < 0
				|| newLocY < 0)) {
			return;
		}
		// Movement during combat is disallowed here
		// need to check min range in the battle and see if anything is at 1 with this livingthing
//		if (privs>1 || (batBattle == null && !blnSleep && engGame.canMoveTo(newLocX,newLocY,this)))
		if (privs > 1 || (isMoveable && !isSleeping && game.canMoveTo(newLocX, newLocY, this))) {
			if (isMob()) {
				int maxY = originalY + game.viewrange;
				int minY = originalY - game.viewrange;
				int maxX = originalX + game.viewrange;
				int minX = originalX - game.viewrange;
				if ((newLocY > maxY) || (newLocY < minY) || (newLocX > maxX) || (newLocX < minX)) {
					return;
				}
			}
		} else {
			return;
		}
		boolean wasMerchant = overMerchant() != null || overPlayerMerchant() != null;
		int oldLocX = x;
		int oldLocY = y;
		TileMap oldMap = map;
		// Move it from cell to cell
		game.moveDuskObject(this, newLocX, newLocY, dir);
		try {
			imagestep = intNewStep;
			if (isPlayer()) {
				if (wasMerchant) {
					offMerchant();
				}
				updateMap();
			}
			Script scrStore;
			try {
				scrStore = (Script) game.tileAction.get((int) map.getTile(x, y));
				synchronized (scrStore) {
					scrStore.varVariables.clearVariables();
					scrStore.varVariables.addVariable("trigger", this);
					scrStore.runScript();
				}
			} catch (Exception e) {
			}
			Script.exec("defMoveActions/" + x + "_" + y, game, this);

			//move follower
			if (following != null) {
				//don't move follower if leader has moved onto follower's tile
				if ((following.x == newLocX) && (following.y == newLocY)) {
					return;
				}
				if (Math.abs(following.x - oldLocX) + Math.abs(following.y - oldLocY) > 1) {
					if (following.isPet()) {
						if (following.following != null) {
							chatMessage(following.following.name + " is no longer following you.");
							following.following.chatMessage("You are no longer following " + name + ".");
							following.following.master = null;
							following.following = null;
						}
						// FIXME: verify this is correct: moveTo can't change the map anyway
						following.changeLocBypass(oldMap, oldLocX, oldLocY);
					} else {
						chatMessage(following.name + " is no longer following you.");
						following.chatMessage("You are no longer following " + name + ".");
						following.master = null;
						following = null;
					}
				} else if (following.y > oldLocY) {
					following.moveN();
				} else if (following.y < oldLocY) {
					following.moveS();
				} else if (following.x > oldLocX) {
					following.moveW();
				} else if (following.x < oldLocX) {
					following.moveE();
				}
			}
			if (isPlayer()) {
				game.refreshEntities(this);
			}
			//game.removeIfCanNoLongerSee(this);
		} catch (Exception e) {
			game.log.printError("moveTo()", e);
		}
	}

	public void moveN() {
		moveTo(x, y - 1, (byte) 'n', 0);
	}

	public void moveS() {
		moveTo(x, y + 1, (byte) 's', 2);
	}

	public void moveW() {
		moveTo(x - 1, y, (byte) 'w', 4);
	}

	public void moveE() {
		moveTo(x + 1, y, (byte) 'e', 6);
	}

	public DuskObject removeEntity(long id) {
		synchronized (nearEntities) {
			DuskObject o = nearEntities.remove(id);

			if (o != null) {
				System.out.println("Removing client entity " + id + " from " + name);
				send(EntityMessage.create(id, MSG_REMOVE_ENTITY));
			}
			return o;
		}
	}

	public boolean nearEntity(long id) {
		synchronized (nearEntities) {
			return nearEntities.containsKey(id);
		}
	}

	public void addEntity(DuskObject ent) {
		synchronized (nearEntities) {
			if (nearEntities.containsKey(ent.ID))
				return;

			System.out.println("Adding client entity " + ent.ID + " " + ent.name + " to " + name);

			nearEntities.put(ent.ID, ent);
		}

		// Only sent to player if they can see it?
		if (!ent.isLivingThing()
				|| game.canSeeLivingThing(this, (LivingThing) ent)) {
			System.out.println("Adding entity " + ent.name + " to " + name);
			//send(MessageType.AddEntity, ent.toEntity());
			send(ent.toMessage(MSG_ADD_ENTITY));
		} else {
			System.out.println("Not adding entity " + ent.name + " to " + name);
		}
	}

	/**
	 * Set a new set of near-entities
	 *
	 * @param ent
	 */
	public void setEntities(List<DuskObject> newEntities) {
		HashMap<Long, DuskObject> left = (HashMap<Long, DuskObject>) nearEntities.clone();

		if (false) {
			System.out.println("setting entities on " + name);
			for (DuskObject d : left.values()) {
				System.out.println(" - " + d.ID + " " + d.name);
			}
			for (DuskObject d : newEntities) {
				System.out.println(" + " + d.ID + " " + d.name);
			}
		}

		for (DuskObject o : newEntities) {
			if (left.containsKey(o.ID)) {
				// Have this already, do nothing
				left.remove(o.ID);
			} else {
				// This is a new one
				//nearEntities.put(o.ID, o);
				game.addEntity(map, o);
			}
		}
		// anything left over must be removed
		for (long id : left.keySet()) {
			removeEntity(id);
		}
	}

	/*
	 * unused
	 public void changeLoc(int newLocX, int newLocY) {
	 if (privs > 1 || (battle == null && !isSleeping && game.canMoveTo(newLocX, newLocY, this))) {
	 if (isMob()) {
	 if (!(Math.abs(originalX - newLocX) < game.viewrange && Math.abs(originalY - newLocY) < game.viewrange)) {
	 return;
	 }
	 }
	 changeLocBypass(newLocX, newLocY);
	 }
	 }*/
	// FIXME: supply map too
	synchronized public void changeLocBypass(TileMap map, int newLocX, int newLocY) {
		int oldLocX = x;
		int oldLocY = y;
		boolean wasMerchant = overMerchant() != null || overPlayerMerchant() != null;
		game.removeDuskObject(this);
		x = newLocX;
		y = newLocY;
		try {
			// Really move + map should be atomic to client.

			//update entity:
			if (isWorking) {
				game.addDuskObject(map, this);
			}
			// Moved after addDuskObject so the map is set on 'this'
			if (isPlayer()) {
				updateMap();
				if (wasMerchant) {
					offMerchant();
				}
			}
			Script scrStore;
			try {
				scrStore = (Script) game.tileAction.get((int) map.getTile(newLocX, newLocY));
				synchronized (scrStore) {
					scrStore.varVariables.clearVariables();
					scrStore.varVariables.addVariable("trigger", this);
					scrStore.runScript();
				}
			} catch (Exception e) {
			}
			Script.exec("defMoveActions/" + newLocX + "_" + newLocY, game, this);
			if (following != null) {
				following.changeLocBypass(map, oldLocX, oldLocY);
			}
			if (isPlayer()) {
				game.refreshEntities(this);
			}
		} catch (Exception e) {
			game.log.printError("changeLocBypass():" + name + " disconnected", e);
			isStopped = true;
		}
	}

	public void updateMap() {
		int r = game.viewrange;
		int width = r * 2 + 1;
		int height = r * 2 + 1;

		short[][] layers = new short[3][];
		layers[0] = new short[width * height];
		layers[1] = new short[width * height];
		layers[2] = new short[width * height];

		int i = 0;
		for (int my = y - r; my <= y + r; my++) {
			for (int mx = x - r; mx <= x + r; mx++) {
				if (mx >= 0 && mx < game.MapColumns && my >= 0 && my < game.MapRows) {
					layers[0][i] = game.shrMap[mx][my];
					layers[1][i] = game.shrMapAlpha[mx][my];
					layers[2][i] = game.shrMapAlpha2[mx][my];
				} else {
					layers[0][i] = 0;
					layers[1][i] = 0;
					layers[2][i] = 0;
				}
				i++;
			}
		}

		send(new MapMessage(MSG_UPDATE_MAP, width, height, x, y, 0, layers[0], layers[1], layers[2]));
	}

	public void startBattle(LivingThing opponent) {
		ListMessage lm = new ListMessage(MSG_BATTLE_UPDATE);
		lm.add(FIELD_BATTLE_OPPONENT, opponent.name);
		send(lm);
	}

	public void chatBattle(String msg) {
		if (msg == null) {
			return;
		}
		if (isPlayer()) {
			send(DuskMessage.create(MSG_BATTLE_CHAT, msg));
		}
		if (charmer != null) {
			charmer.chatBattle("From " + name + ": " + msg);
		}
	}

	public void chatMessage(String inMessage) {
		if (inMessage == null) {
			return;
		}
		if (isPlayer()) {
			send(DuskMessage.create(MSG_CHAT, inMessage));
		}
		if (charmer != null) {
			charmer.chatMessage("From " + name + ": " + inMessage);
		}
	}

	public void chatMessage(int red, int green, int blue, String inMessage) {
		chatMessage(inMessage);
	}

	public int getCharacterPoints() {
		int result = wisd
				+ inte
				+ stre
				+ dext
				+ cons
				+ ((maxhp) / 10)
				+ ((maxmp) / 10)
				+ totalSkillValue();
		return result;
	}

	public int getTotalPoints() {
		int result = getCharacterPoints()
				+ getArmorMod()
				+ (getDamMod() - 100);
		return result;
	}

	public Item getItem(String strStore) {
		// Check worn items by location, TBH not really sure of the point of this
		int where = Equipment.toIndex(strStore);
		if (where != -1) {
			Item item = wornItems.getWorn(where);
			if (item != null)
				return item;
		}

		int i,
				intNumber = 1;
		i = strStore.indexOf('.');
		if (i != -1) {
			try {
				intNumber = Integer.parseInt(strStore.substring(0, i));
				strStore = strStore.substring(i + 1, strStore.length());
			} catch (NumberFormatException e) {
				intNumber = 1;
			}
		}
		Item itmStore;
		LinkedList<Item> qStore;
		qStore = itemList.get(strStore);
		if (qStore != null) {
			if (qStore.size() >= intNumber) {
				itmStore = (Item) qStore.element();
				return itmStore;
			}
		}
		return null;
	}

	public Item getItemAndRemove(String strStore) {
		int i,
				intNumber = 1;
		i = strStore.indexOf(".");
		if (i != -1) {
			try {
				intNumber = Integer.parseInt(strStore.substring(0, i));
				strStore = strStore.substring(i + 1, strStore.length());
			} catch (NumberFormatException e) {
				intNumber = 1;
			}
		}
		if (intNumber == 0) {
			return null;
		}
		Item itmStore;
		Item itmFound = null;
		LinkedList<Item> qStore;
		qStore = itemList.get(strStore);
		if (qStore != null) {
			if (!qStore.isEmpty()) {
				itmStore = (Item) qStore.element();
				itmFound = itmStore;
				while (intNumber != 0 && itmStore != null) {
					qStore.pop();
					intNumber--;
				}
				if (qStore.size() < 1) {
					itemList.removeElement(strStore);
				}
			} else {
				itemList.removeElement(strStore);
			}
		}
		return itmFound;
	}

	public int getArmorMod() {
		return wornItems.armourMod();
	}

	public int getArmorModWithBonus() {
		return getArmorMod() + ((dext + dextbon) / 10) + acbon;
	}

	public int getDamMod() {
		Item item = wornItems.getWorn(Wearing.WIELD);
		if (item != null)
			return item.intMod;
		return 100;
	}

	public int getDamModWithBonus() {
		return getDamMod() + dammodbon;
	}

	public int getRange() {
		Item item = wornItems.getWorn(Wearing.WIELD);

		if (item == null) {
			return 1;
		}
		return item.range();
	}

	public int getRangeWithBonus() {
		return getRange() + rangebon;
	}

	public void weaponDam(int damage) {
		if (isMob()) //Mobs weapons are invincible
		{
			return;
		}

		Item item = wornItems.damageItem(Wearing.WIELD, damage);
		if (item != null) {
			chatMessage("Your " + item.name + " breaks.");
			onUnwear(item);
			if (isPlayer()) {
				updateEquipment();
				updateStats();
			}
		}
	}

	public void armorDam(int damage) {
		if (isMob()) //Mobs armor is invincible
		{
			return;
		}
		int armour = wornItems.armourCount();
		if (armour == 0) {
			return;
		}

		for (int i = Wearing.ARMS; i < Wearing.WEARING_COUNT; i++) {
			Item item = wornItems.damageItem(Wearing.WIELD, damage);
			if (item != null) {
				chatMessage("Your " + item.name + " breaks.");
				onUnwear(item);
				updateStats();
				updateEquipment();
			}
		}
	}

	public void useItem(String strStore, int mustBeType) {
		String strStore2 = null;
		int i2 = 0;
		if (strStore.startsWith("\"")) {
			char c, c2;

			strStore2 = "";
			i2 = 1;
			try {
				while (true) {
					c = strStore.charAt(i2);
					if (c == '\\') {
						c2 = strStore.charAt(i2 + 1);
						strStore2 += c2;
					} else if (c == '\"') {
						i2++;
						break;
					} else {
						strStore2 += c;
					}
					i2++;
				}
			} catch (Exception e) {
				chatMessage("You don't have that.");
				return;
			}
		} else {
			i2 = strStore.indexOf(" ");
			if (i2 == -1) {
				strStore2 = strStore;
				i2 = strStore.length();
			} else {
				strStore2 = strStore.substring(0, i2);
			}
		}
		if (strStore.length() > i2 + 1) {
			strStore = strStore.substring(i2 + 1);
		}
		Item itmStore = getItem(strStore2);
		if (itmStore == null) {
			chatMessage("You don't have that.");
			return;
		}
		if (itmStore.strOnUseScript == null) {
			chatMessage("That has no use.");
			return;
		}
		if (mustBeType != -1 && itmStore.intType != mustBeType) {
			chatMessage("You can't use that like that.");
			return;
		}
		if (itmStore.intUses == 0) {
			chatMessage("That item is used up.");
			return;
		}
		try {
			Script scrStore = new Script("scripts/" + itmStore.strOnUseScript, game, false);
//			synchronized(scrStore)
//			{
			scrStore.varVariables.addVariable("trigger", this);
			scrStore.varVariables.addVariable("itemname", itmStore.name);
			scrStore.varVariables.addVariable("mod", itmStore.intMod);
			scrStore.runScript();
			scrStore.close();
//			}
		} catch (Exception e) {
			chatMessage("That has no use.");
			return;
		}
		itmStore.intUses--;
	}

	public void castSpell(String spell) {
		String strStore = "",
				strStore2 = "";
		int intStore,
				intStore2;
		LivingThing target = null;
		// FIXME: de-quote and/or command parser
		int i2 = 0;
		if (spell.startsWith("\"")) {
			char c, c2;
			i2 = 1;
			try {
				while (true) {
					c = spell.charAt(i2);
					i2++;
					if (c == '\"') {
						break;
					}
					if (c == '\\') {
						c2 = spell.charAt(i2);
						strStore2 += c2;
					} else {
						strStore2 += c;
					}
				}
			} catch (Exception e) {
				chatMessage("You don't know that spell.");
			}
		} else {
			i2 = spell.indexOf(" ");
			if (i2 == -1) {
				strStore2 = spell;
				i2 = spell.length();
			} else {
				strStore2 = spell.substring(0, i2);
			}
		}
		if (spell.length() > i2 + 1) {
			spell = spell.substring(i2 + 1);
		} else {
			spell = null;
		}
		try {
			try (RandomAccessFile rafSpell = new RandomAccessFile("defSpells/" + strStore2.toLowerCase(), "r")) {
				strStore = rafSpell.readLine();
			} catch (FileNotFoundException x) {
				chatMessage("You don't know that spell.");
				return;
			}
			SpellGroup grpStore = game.getSpellGroup(strStore);
			intStore = getSpell(strStore);
			intStore2 = grpStore.getSpellNumber(strStore2);
			if (grpStore == null) {
				chatMessage("You don't know that spell.");
				return;
			}
			// FIXME: reorder this so the script is only created after the checks
			Script scrSpell;
			try {
				scrSpell = new Script("defSpellGroups/" + intStore2 + " " + strStore.toLowerCase(), game, false);
			} catch (Exception e) {
				chatMessage("You don't know that spell.");
				return;
			}
			if (intStore2 != 0) //change number to percent
			{
				intStore2 = (100 * intStore2) / (grpStore.vctSpells.size() - 1);
			}
			if (intStore == 0 || intStore < intStore2) {
				chatMessage("You don't know that spell.");
				scrSpell.close();
				return;
			}
			intStore2 = (110 - (intStore - intStore2)) / 2; //change percent to mp cost
			if (intStore2 > mp) {
				chatMessage("You don't have enough mp to cast that spell.");
				scrSpell.close();
				return;
			}
			mp -= intStore2;
			scrSpell.varVariables.addVariable("caster", this);
			if (spell == null) {
				scrSpell.runScript();
			} else {
				scrSpell.runScript(spell);
			}
			scrSpell.close();
			if (isPlayer()) {
				updateInfo();
			}
		} catch (Exception e) {
			game.log.printError("castSpell()", e);
		}
	}

	public Merchant overMerchant() {
		// or move to map?
		for (DuskObject o : map.getEntities(x, y, null)) {
			if (o.isMerchant()) {
				return (Merchant) o;
			}
		}
		return null;
	}

	public PlayerMerchant overPlayerMerchant() {
		for (DuskObject o : map.getEntities(x, y, null)) {
			if (o.isPlayerMerchant()) {
				return (PlayerMerchant) o;
			}
		}
		return null;
	}

	public boolean isWearing(String name) {
		return wornItems.isWearing(name);
	}

	private void unwear(Item old) {
		if (old != null) {
			itemList.addElement(old);
			onUnwear(old);
		}
	}

	private void unwear(int index) {
		unwear(wornItems.unwear(index));
	}

	public void unWear(String strStore) {
		int index = Equipment.toIndex(strStore);

		if (index != -1) {
			unwear(index);
		} else if (strStore.equalsIgnoreCase("all")) {
			for (int i = 0; i < Wearing.WEARING_COUNT; i++) {
				unwear(i);
			}
		} else {
			unwear(wornItems.unwearByName(strStore));
		}
		if (isPlayer()) {
			updateStats();
			updateEquipment();
			updateItems();
		}
	}

	public void onWear(Item trigger) {
		if (trigger.strOnWearScript != null) {
			try {
				Script scrStore = new Script("scripts/" + trigger.strOnWearScript, game, false);
				scrStore.varVariables.addVariable("trigger", this);
				scrStore.varVariables.addVariable("itemname", trigger.name);
				scrStore.varVariables.addVariable("mod", trigger.intMod);
				scrStore.runScript();
				scrStore.close();
			} catch (Exception e) {
			}
		}
	}

	public void onUnwear(Item trigger) {
		if (trigger.strOnUnWearScript != null) {
			try {
				Script scrStore = new Script("scripts/" + trigger.strOnUnWearScript, game, false);
				scrStore.varVariables.addVariable("trigger", this);
				scrStore.varVariables.addVariable("itemname", trigger.name);
				scrStore.varVariables.addVariable("mod", trigger.intMod);
				scrStore.runScript();
				scrStore.close();
			} catch (Exception e) {
			}
		}
	}

	public boolean hasCondition(String strStore) {
		for (Condition cndStore : conditions) {
			if (cndStore.name.equalsIgnoreCase(strStore)) {
				return true;
			}
		}
		return false;
	}

	public void addCondition(Condition cndStore) {
		System.out.printf("add condition '%s' '%s'\n", name, cndStore.name);
		if (conditions.isEmpty()) {
			game.checkConditionList.add(this);
		} else {
			for (int i = 0; i < conditions.size(); i++) {
				Condition cndStore2 = conditions.get(i);
				if (cndStore2.name.equalsIgnoreCase(cndStore.name)) {
					conditions.remove(i);
					i--;
					cndStore2.onEnd(game, this);
				}
			}
		}
		conditions.add(cndStore);
		cndStore.onStart(game, this);
		updateStats();
	}

	public void removeCondition(String strName) {
		Condition cndStore;
		for (int i = 0; i < conditions.size(); i++) {
			cndStore = (Condition) conditions.get(i);
			if (strName.equalsIgnoreCase(cndStore.name)) {
				conditions.remove(i);
				if (conditions.isEmpty()) {
					game.checkConditionList.remove(this);
				}
				cndStore.onEnd(game, this);
				updateStats();
				return;
			}
		}
		updateStats();
	}

	public DuskObject getLocalObject(String name) {
		return game.findVisibleObject(this, name);
	}

	public void removeFromGroup() {
		if (following != null && following.isPet()) {
			if (master != null) {
				try {
					chatMessage("You are no longer following " + master.name + ".");
				} catch (Exception e) {
				}
				try {
					master.chatMessage(name + " is no longer following you.");
				} catch (Exception e) {
				}
				master.following = following.following;
			}
			if (following.following != null) {
				following.following.master = master;
			}
			if (!isPet()) {
				master = null;
			}
			following.following = null;
		} else {
			if (master != null) {
				try {
					chatMessage("You are no longer following " + master.name + ".");
				} catch (Exception e) {
				}
				try {
					master.chatMessage(name + " is no longer following you.");
				} catch (Exception e) {
				}
				master.following = following;
			}
			if (following != null) {
				following.master = master;
			}
			if (!isPet()) {
				master = null;
			}
			following = null;
		}
	}
	final static int ASK_NEW_RACE = 0;

	private DuskMessage getRaceQuery() {
		ListMessage racem = new ListMessage(ASK_NEW_RACE);
		// FIXME: confirm behaviour here
		String dir = isPet() ? "defPets" : "defRaces";

		racem.add(FIELD_QUERY_PROMPT, "Choose race");
		racem.add(FIELD_QUERY_OPTIONS, Arrays.asList(new File(dir).list()));

		return racem;
	}

	private DuskMessage getNewPlayerInfo() {
		ListMessage np = new ListMessage(FIELD_AUTH_NEWPLAYER);
		np.add(getRaceQuery());

		return np;
	}

	static class TooManyFailures extends Exception {
	}

	public void run() {
		connectionThread = Thread.currentThread();

		String address = getAddress();

		// Handle auth state.
		try {
			boolean haveuser = false;
			boolean create = false;
			do {
				DuskMessage dm = readMessage();
				ListMessage res = new ListMessage(MSG_AUTH);

				// TODO: FIELD_AUTH_CLIENT stuff

				switch (dm.name) {
					case MSG_AUTH: {
						ListMessage lm = (ListMessage) dm;
						String player = lm.getString(FIELD_AUTH_PLAYER, null);
						String pass = lm.getString(FIELD_AUTH_PASS, null);
						ListMessage newp = (ListMessage) lm.getMessage(FIELD_AUTH_NEWPLAYER);

						// Don't give detailed reasons for failure (e.g. 'player not found') for security

						if (player == null || pass == null) {
							// Just sent new player info
							res.add(-1L, FIELD_AUTH_RESULT, AUTH_LOGIN_INCOMPLETE);
							res.add(FIELD_AUTH_REASON, "Login failed.");
							res.add(getNewPlayerInfo());
						} else if (!game.isGoodName(player)) {
							// disallowed name
							res.add(-1L, FIELD_AUTH_RESULT, AUTH_LOGIN_FAILED);
							res.add(FIELD_AUTH_REASON, "Name is not allowed, try again.");
							res.add(getNewPlayerInfo());
						} else if (newp == null && playerExists(player)) {
							// Try normal login
							if (passwordCorrect(player, pass)) {
								haveuser = true;
							} else {
								res.add(-1L, FIELD_AUTH_RESULT, AUTH_LOGIN_FAILED);
								res.add(FIELD_AUTH_REASON, "Login failed.");
							}
						} else {
							System.out.println("? new player " + player);
							// Trying to create a player
							if (canCreate(player, newp, res)) {
								System.out.println("  creating player\n");
								haveuser = true;
								create = true;
							} else {
								if (res.get(FIELD_AUTH_NEWPLAYER) != null) {
									res.add(-1L, FIELD_AUTH_RESULT, AUTH_LOGIN_INCOMPLETE);
									res.add(FIELD_AUTH_REASON, "Insufficient information to create player.");
								} else {
									res.add(-1L, FIELD_AUTH_RESULT, AUTH_LOGIN_EXISTS);
									res.add(FIELD_AUTH_REASON, "A player with that name already exists.");
								}
							}
						}

						if (haveuser) {
							this.name = player;
							// security: don't store this?
							this.password = pass;

							game.passwordSuccess(player, address);
							game.registerPlayer(this, player);
							res.add(ID, FIELD_AUTH_RESULT, AUTH_LOGIN_OK);
							res.add(FIELD_AUTH_REASON, "Login ok.");
						}
						break;
					}
					default: // Anything else is a protocol error
						res.add(-1L, FIELD_AUTH_RESULT, AUTH_LOGIN_FAILED);
						res.add(FIELD_AUTH_REASON, "Unexpected message.");
						break;
				}

				send(res);
			} while (!haveuser);

			greetUser();
			loadPlayer(create);
		} catch (BlockedIPException ex) {
			chatMessage("There's already a player connected from your IP address.");
			//Thread.sleep(1000);
			quit();
			closeNosavePlayer();
			return;
		} catch (IOException ex) {
			game.log.printMessage(Log.INFO, getAddress() + ": login/create " + name + " " + ex);
			closeNosavePlayer();
			return;
		} catch (ClassCastException ex) {
			game.log.printMessage(Log.INFO, getAddress() + ": code error " + name + " " + ex);
			// some server error
			quit();
			closeNosavePlayer();
			return;
		} catch (TooManyFailures ex) {
			chatMessage("Too many login failures, try again in an hour.");
			quit();
			closeNosavePlayer();
			return;
		} catch (Exception ex) {
			game.log.printMessage(Log.INFO, getAddress() + ": unexpected error " + name + " " + ex);
		}

		// Player loaded, ready to go, send off all the shit

		connectionThread.setName("LivingThing(" + name + ")");
		sendThread.setName("LivingThing(" + name + ").send");
		initMap();
		changeLocBypass(map, x, y);
		updateInfo();
		updateStats();
		updateItems();
		updateEquipment();
		updateActions();
		if (game.blnMusic) {
			updateMusic();
			playMusic(0);
		}
		if (!(hasCondition("invis") && (privs > 2))) {
			game.log.printMessage(Log.INFO, socket.getInetAddress().toString() + ":" + name + " has entered the world");
			game.chatMessage(name + " has entered the world.", name);
		} else {
			chatMessage("You have entered the world hidden from players.");
			game.log.printMessage(Log.INFO, socket.getInetAddress().toString() + ":" + name + " has entered the world hidden from players");
		}
		isSaveable = true;
		isReady = true;
		while (!isStopped) {
			try {
				DuskMessage dm = readMessage();

				switch (dm.name) {
					case MSG_COMMAND: {
						StringMessage sm = (StringMessage) dm;
						String res = Commands.parseCommand(this, game, sm.value);

						if (res != null)
							chatMessage(res);
						break;
					}
					default:
						// anything else is bogus
						System.out.println("Unexpected server command (ignored):");
						dm.format(System.out);
				}
			} catch (Exception e) {
				game.log.printError("LivingThing.run():" + name + " disconnected", e);
				close();
				return;
			}
		}
	}

	boolean playerExists(String name) {
		File playerFile = new File("users/" + name.toLowerCase());

		return playerFile.exists();
	}

	boolean passwordCorrect(String name, String pass) throws TooManyFailures, IOException, InterruptedException {

		try (RandomAccessFile pf = new RandomAccessFile("users/" + name.toLowerCase(), "r")) {
			String userPass = pf.readLine();

			if (pass.equals(userPass)) {
				return true;
			} else if (game.passwordFailure(name, getAddress())) {
				throw new TooManyFailures();
			} else {
				Thread.sleep(3000);
				return false;
			}
		}
	}

	/**
	 * Check if the user can be created, unique name, and all requirements met
	 *
	 * @param name
	 * @param np NEWPLAYER message containing new player infos.
	 * @param res a NEWPLAYER message populated iwth missing bits
	 * @return true if ok
	 */
	boolean canCreate(String name, ListMessage np, ListMessage res) {
		boolean ok = true;
		ListMessage newp = null;

		// Check if we have the info we need to create the user - i.e. race so far
		if (np == null
				|| (race = np.getString(ASK_NEW_RACE, race)) == null
				|| !checkRace(race)) {
			newp = new ListMessage(FIELD_AUTH_NEWPLAYER);
			newp.add(getRaceQuery());
			res.add(newp);
			ok = false;
		}

		ok &= !new File("users/" + name.toLowerCase()).exists();
		ok &= !new File("pets/" + name.toLowerCase()).exists();

		return ok;
	}

	void greetUser() {
		chatMessage("DuskZ Server " + game.version + " --  http://code.google.com/p/duskz/");
		chatMessage("Started at " + game.datStart.toString() + ".");
		chatMessage("You're playing DuskZ, a graphical mud.");
	}

	void loadPlayer(boolean create) throws IOException {
		wornItems = new Equipment();
		itemList = new ItemList();
		conditions.clear();
		nearEntities.clear();
		flags.clear();
		ignoreList.clear();

		game.onStart(this);

		/**
		 * Load default user - ignore errors
		 */
		try {
			loadUserFile(new File("users/default"), false);
		} catch (IOException e) {
			game.log.printError("getPlayer():While loading default user file for " + name, e);
		}

		file = new File("users", name.toLowerCase());
		backup = new File("users", name.toLowerCase() + ".backup");

		/**
		 * Load actual user
		 */
		if (!create)
			loadUserFile(file, true);
		if (map == null) {
			game.log.printMessage(Log.INFO, "No map set in user, using default");
			map = game.maps.values().stream().findFirst().orElseThrow();
		}

		/*
		 ** Try to load a pet, if they don't already have one
		 */
		if (following == null) {
			following = new LivingThing("default", null, this, game);
			if (following.name.equalsIgnoreCase("default")) {
				following.closeNosavePlayer();
				following = null;
			}
		}
		//	} catch (Exception e) {
		//		game.log.printError("getPlayer():While loading file for " + name, e);
		//		closeNosavePlayer();
		//		return true;
		//	}
		loadRace();
		isLoaded = true;
		if (following != null) {
			following.isLoaded = true;
			following.changeLocBypass(map, x, y);
		}

		if (create) {
			isSaveNeeded = true;
			savePlayer();
		}
	}

	boolean checkRace(String race) {
		// FIXME: confirm behaviour here
		String dir = isPet() ? "defPets" : "defRaces";

		return new File(dir, race).exists();
	}

	public void loadRace() {
		String dir = isPet() ? "defPets" : "defRaces";

		try {
			loadRaceFile(new File(dir, race), true);
		} catch (Exception e) {
			game.log.printError("loadRace():Loading " + name + "'s race file \"" + dir + "/" + race + "\"", e);
		}
	}

	public void unloadRace() {
		String dir = isPet() ? "defPets" : "defRaces";

		try {
			loadRaceFile(new File(dir, race), false);
		} catch (Exception e) {
			game.log.printError("unloadRace():Un-loading " + name + "'s race file \"" + dir + "/" + race + "\"", e);
		}
		race = null;
	}

	public void updateMusic() {
		/*try
		 {
		 String strResult="";
		 String strStore,
		 strStore2;
		 int count=0;
		 RandomAccessFile rafMusic;

		 rafMusic = new RandomAccessFile("music0","r");
		 strStore = "";
		 try
		 {
		 strStore2 = rafMusic.readLine();
		 while (!(strStore2 == null || strStore2.equals("")))
		 {
		 strStore += strStore2+"\n";
		 strStore2 = rafMusic.readLine();
		 count++;
		 }
		 }catch (Exception e)
		 {
		 }
		 strResult += ""+count+"\n"+strStore;
		 rafMusic.close();
		 rafMusic = new RandomAccessFile("music1","r");
		 strStore = "";
		 count=0;
		 try
		 {
		 strStore2 = rafMusic.readLine();
		 while (!(strStore2 == null || strStore2.equals("")))
		 {
		 strStore += strStore2+"\n";
		 strStore2 = rafMusic.readLine();
		 count++;
		 }
		 }catch (Exception e)
		 {
		 }
		 rafMusic.close();
		 strResult += ""+count+"\n"+strStore;
		 send((char)11+""+2+"\n"+strResult);
		 }catch(Exception e)
		 {
		 engGame.log.printError("updateMusic()", e);
		 }*/
	}

	public void playMusic(int type) {
		/*try
		 {
		 send(""+((char)12)+""+type+"\n");
		 }catch(Exception e)
		 {
		 engGame.log.printError("playMusic()", e);
		 }*/
	}

	public void playSFX(int intSFX) {
		if (audioon) {
			//	try {
			//		send((char) 15 + "" + intSFX + "\n");
			//	} catch (Exception e) {
			//		game.log.printError("playSFX()", e);
			//	}
		}
	}

	public void updateActions() {
		DuskMessage.StringListMessage list = new DuskMessage.StringListMessage(MSG_UPDATE_ACTIONS);

		if (isPlayer()) {
			if (battle != null) {
				list.add("flee");
			} else {
				if (isSleeping) {
					list.add("wake");
				} else {
					list.add("sleep");
				}
			}
		}
		send(list);
	}

	public void updateEquipment() {
		try {
			send(wornItems.toMessage(MSG_EQUIPMENT));
		} catch (Exception e) {
			game.log.printError("updateEquipment():" + name + " disconnected", e);
			isStopped = true;
			return;
		}
	}

	public void quit() {
		send(DuskMessage.create(MSG_QUIT));
	}

	public void viewText(String name, boolean editable, String text) {
		// FIXME: some error
		if (privs <= 2)
			return;

		ListMessage lm = new ListMessage(MSG_VIEW_TEXT);
		lm.add(FIELD_TEXT_NAME, name);
		lm.add(FIELD_TEXT_EDITABLE, (byte) (editable ? 1 : 0));
		if (text != null)
			lm.add(FIELD_TEXT_TEXT, text);

		send(lm);
	}

	/**
	 * This should only be called from login stuff,
	 * and then the main input loop.
	 *
	 * TODO: put this and the instream stuff into a separate object
	 *
	 * @return
	 * @throws IOException
	 */
	private DuskMessage readMessage() throws IOException {
		DuskMessage msg;

		do {
			synchronized (instream) {
				msg = DuskMessage.receiveMessage(instream);
			}

			// Redirect queries to whomever is waiting for it
			if (msg.name == MSG_QUERY) {
				EntityListMessage qmsg = (EntityListMessage) msg;
				PendingQuery f;

				synchronized (pendingQuestions) {
					f = pendingQuestions.get(qmsg.id);
				}

				f.setResponse(qmsg);
			}
		} while (msg.name == MSG_QUERY);

		return msg;
	}

	public void send(int msg, String data) {
		if (isPlayer() && isWorking && !isClosing) {
			messageQueue.offer(DuskMessage.create(msg, data));
		}
	}

	public void sendUrgent(DuskMessage msg) {
		if (isPlayer() && isWorking && !isClosing) {
			messageQueue.addFirst(msg);
		}
	}

	public void send(DuskMessage msg) {
		if (isPlayer() && isWorking && !isClosing) {
			messageQueue.offer(msg);
		}
	}
	long qid;
	final HashMap<Long, PendingQuery> pendingQuestions = new HashMap<>();

	synchronized long getQuestionID() {
		return qid++;
	}

	static class PendingQuery implements Future<EntityListMessage> {

		EntityListMessage query;
		EntityListMessage response;

		public PendingQuery(EntityListMessage query) {
			this.query = query;
		}

		synchronized void setResponse(EntityListMessage response) {
			this.response = response;
			notify();
		}

		@Override
		public boolean cancel(boolean mayInterruptIfRunning) {
			throw new UnsupportedOperationException("Not supported yet.");
		}

		@Override
		public boolean isCancelled() {
			throw new UnsupportedOperationException("Not supported yet.");
		}

		@Override
		public boolean isDone() {
			throw new UnsupportedOperationException("Not supported yet.");
		}

		@Override
		public synchronized EntityListMessage get() throws InterruptedException, ExecutionException {
			while (response == null) {
				wait();
			}
			return response;
		}

		@Override
		public EntityListMessage get(long timeout, TimeUnit unit) throws InterruptedException, ExecutionException, TimeoutException {
			if (response == null) {
				wait(unit.convert(timeout, unit));
				if (response == null)
					throw new TimeoutException();
			}
			return response;
		}
	}

	/**
	 * This asks a query asynchronously
	 * FIXME: abnormal shutdown requires the queries to be flushed
	 *
	 * @param query
	 * @return a future used to retrieve the query
	 */
	public Future<EntityListMessage> askQuestion(EntityListMessage query) throws IOException {
		PendingQuery pq = new PendingQuery(query);

		if (query.name != MSG_QUERY)
			throw new RuntimeException("Trying to ask non-query message");

		synchronized (pendingQuestions) {
			query.id = qid++;
			pendingQuestions.put(query.id, pq);
		}

		messageQueue.add(query);

		// Just discard messages until we get a response
		// And what if we don't?
		if (Thread.currentThread() == connectionThread) {
			do {
				readMessage();
			} while (pq.response == null);
		}

		return pq;
	}

	//public void send(String data) {
	//	if (isPlayer() && isWorking && !isClosing) {
	//		messageQueue.offer(DuskMessage.create(MSG_CHAT, data));
	//	}
	//}

	/*	public void send(byte data)
	 {
	 if (isPlayer() && blnWorking && !blnIsClosing)
	 {
	 SendData sd = new SendData(data);
	 qMessage.push(sd);
	 }
	 }

	 public void send(long data)
	 {
	 if (isPlayer() && blnWorking && !blnIsClosing)
	 {
	 SendData sd = new SendData(data);
	 qMessage.push(sd);
	 }
	 }*/
	public void updateInfo() {
		ListMessage lm = new ListMessage(MSG_INFO_PLAYER);

		lm.add(FIELD_INFO_HP, hp);
		lm.add(FIELD_INFO_MAXHP, maxhp + hpbon);
		lm.add(FIELD_INFO_MP, hp);
		lm.add(FIELD_INFO_MAXMP, maxmp + mpbon);

		send(lm);
	}

	public void updateRange() {
		ListMessage lm = new ListMessage(MSG_INFO_PLAYER);

		lm.add(FIELD_INFO_RANGE, getRangeWithBonus());

		send(lm);
	}

	// Use updateInventory instead
	@Deprecated
	public void updateItems() {
		updateInventory();

		// FIXME: change on observe?  This aint no quantum effect!
		isSaveNeeded = true;
	}

	private void addStat(ListMessage lm, int field, int val, int valbon) {
		lm.add(field, val);
		if (valbon != 0)
			lm.add(field + 1, valbon);
	}

	private ListMessage buildStats(LivingThing lt, int msg) {
		ListMessage lm = new ListMessage(msg);

		lm.add(FIELD_INFO_CASH, cash);
		lm.add(FIELD_INFO_EXP, exp);
		addStat(lm, FIELD_INFO_STR, stre, strebon);
		addStat(lm, FIELD_INFO_INT, inte, intebon);
		addStat(lm, FIELD_INFO_DEX, dext, dextbon);
		addStat(lm, FIELD_INFO_CON, cons, consbon);
		addStat(lm, FIELD_INFO_WIS, wisd, wisdbon);
		addStat(lm, FIELD_INFO_DAM, getDamMod(), dammodbon);
		addStat(lm, FIELD_INFO_ARC, getArmorMod(), acbon);

		DuskMessage.StringListMessage list;

		lm.add(list = new DuskMessage.StringListMessage(FIELD_INFO_CONDITIONS));
		for (Condition cond : conditions) {
			if (cond.display) {
				list.add(cond.name);
			}
		}

		lm.add(list = new DuskMessage.StringListMessage(FIELD_INFO_SKILLS));
		for (Ability skill : skillMap.values()) {
			list.add(skill.name + ": " + skill.getAbility());
		}

		lm.add(list = new DuskMessage.StringListMessage(FIELD_INFO_SPELLS));
		for (Ability spell : spellMap.values()) {
			SpellGroup sg = game.getSpellGroup(spell.name);
			if (sg != null) {
				list.add(spell.name + ": " + spell.getAbility());
				sg.spellList(list.value, spell.getAbility());
			}
		}
		if (!lt.isPet()) {
			if (master != null)
				lm.add(FIELD_INFO_FOLLOWING, master.name);
			if (following != null)
				lm.add(FIELD_INFO_FOLLOWED, following.name);
		}
		return lm;
	}

	public void updateStats() {
		send(buildStats(this, MSG_INFO_PLAYER));
		if (following != null && following.isPet()) {

			send(buildStats(this, MSG_INFO_PET));
		}

		isSaveNeeded = true;
	}

	public void stillThere() {
		send(DuskMessage.create(MSG_PING));
	}

	public void initMap() {
		ListMessage lm = new ListMessage(MSG_INIT_MAP);

		lm.add(FIELD_MAP_WIDTH, game.mapsize);
		lm.add(FIELD_MAP_HEIGHT, game.mapsize);
		// FIXME: depends on client info
		lm.add(FIELD_MAP_ASSETLOCATION, game.strRCName);

		send(lm);
	}

	public void updateInventory() {
		TransactionMessage tm = new TransactionMessage(MSG_INVENTORY);

		for (LinkedList<Item> list : itemList.values()) {
			if (!list.isEmpty()) {
				Item item = list.get(0);
				tm.add(item.getWearLocation(), item.name, list.size(), item.intCost / 2, "gp");
			}
		}
		send(tm);
	}

	void offMerchant() {
		send(DuskMessage.create(MSG_EXIT_MERCHANT));
	}

	private class SendThread extends Thread {

		public SendThread() {
		}

		public void run() {
			DuskMessage msg;

			while (!isStopped) {
				try {
					msg = messageQueue.take();

					// low level protocol dump
					//msg.format(System.out);

					try {
						msg.sendMessage(outstream);
						outstream.flush();
					} catch (IOException e) {
						game.log.printError("SendThread.run():" + msg + " to " + name, e);
						isWorking = false;
						isStopped = true;
						close();
					}
				} catch (InterruptedException ex) {
					Logger.getLogger(SendThread.class.getName()).log(Level.SEVERE, null, ex);
				}
			}
		}
	}
}
