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
// fixme copyrihgts
package duskz.server.entityz;

import duskz.map.Location;
import duskz.map.TileMap;
import duskz.protocol.DuskMessage;
import duskz.protocol.Wearing;
import java.io.BufferedWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;

/**
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
/**
 * An active, 'living thing'. Active objects can move and participate in battles.
 *
 * Notes:
 * the player update code needs to track if they were over a merchant
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public abstract class Active extends Thing {

	/**
	 * Privilege level
	 */
	private int privs;
	/**
	 * Experience. Check: do mobs and pets need this?
	 */
	private int exp;
	/**
	 * Cash on hand
	 */
	private long gold;
	//
	// TODO: make this part of the protocol?
	//
	public static final int STAT_HP = 0;
	public static final int STAT_HPMAX = 1;
	public static final int STAT_MP = 2;
	public static final int STAT_MPMAX = 3;
	public static final int STAT_STR = 4;
	public static final int STAT_INT = 5;
	public static final int STAT_DEX = 6;
	public static final int STAT_CON = 7;
	public static final int STAT_WIS = 8;
	// These are pseudo-stats calculated dynamically
	// Should always be at the end of fixed ones
	public static final int STAT_DAMAGE = 9;
	public static final int STAT_RANGE = 10;
	public static final int STAT_ARC = 11;
	public static final String[] stat_keys = {"hp", "hpmax", "mp", "mpmax", "str", "int", "dex", "con", "wis"};
	/**
	 * Player stats. Keep this private (once mobile fixed up)
	 * Keyed by STAT_* constants.
	 */
	protected int stats[] = new int[12];
	protected int bonus[] = new int[12];
	// object? player?
	// I don' think mobs can have clans - factions are used instead, clan/race
	// candiates for class beteen active and player/pet
	String clan;
	/**
	 * Race, mobs can't have races.
	 */
	Race race;
	Equipment wornItems = new Equipment();
	Inventory inventory = new Inventory();
	/**
	 * Sleeping state
	 */
	private boolean sleeping;
	/**
	 * Tracks actives following in a pack
	 */
	protected Pack pack;
	/**
	 * Does this leader allow following at the moment.
	 */
	boolean canLead = true;
	/**
	 * Allowed to move
	 */
	protected boolean moveable = true;
	/**
	 * "step" of image: basically last direction moved.
	 */
	protected int imageStep;
	/**
	 * Live conditions
	 */
	private final ConditionList conditions = new ConditionList();
	/**
	 * Arbitrary variables for script use.
	 */
	protected final VariableList variables = new VariableList();
	/**
	 * If fighting, current battle
	 */
	protected Battle battle;
	/**
	 * Damage done, accumulates until you lose, where it is used to give
	 * bonus experience to your the winners
	 */
	int damageDone;
	//
	private final HashMap<String, Ability> skills = new HashMap<>();
	// FIXME: SpellAbility subclasses Ability
	private final HashMap<String, Ability> spells = new HashMap<>();
	/**
	 * Pending moves, processed one at a time during movement tick
	 */
	final private LinkedList<String> moveQueue = new LinkedList<>();
	/**
	 * Pending commands, this is only used during battle
	 */
	final private LinkedList<String[]> battleCommands = new LinkedList<>();
	/**
	 * Tick of last state change, such as sleeping, etc.
	 */
	int flagsChanged;
	/**
	 * Tick of last condition change
	 */
	int conditionsChanged;

	Active(Game game) {
		super(game);
	}

	Wearable parseWearable(String value) {
		// format is name,durability,uses

		System.out.println("parse wearable: " + value);

		String[] args = value.split(",");

		if (args[0].equals("none"))
			return null;

		Wearable w = (Wearable) game.createItem(args[0].toLowerCase());

		if (w != null) {
			w.durability = Long.valueOf(args[1]);
			w.uses = Integer.valueOf(args[2]);
		}
		return w;
	}

	// TODO: this probably needs some 'exporter' on Thing
	Holdable parseHoldable(String value) {
		// format is name,durability,uses ... but durability is only used on Wearables
		// FIXME: fix exporter ... not so easy, everything is an item, even weapons.

		System.out.println("parse holdable: " + value);

		String[] args = value.split(",");

		if (args[0].equals("none"))
			return null;

		Holdable h = (Holdable) game.createItem(args[0].toLowerCase());

		// blah ... nice eh?
		if (h instanceof Wearable) {
			((Wearable) h).durability = Long.valueOf(args[1]);
		}
		h.uses = Integer.valueOf(args[2]);

		return h;
	}

	/* *
	 * I/o stuff
	 */
	@Override
	void setProperty(String name, String value) {
		if (variables.setProperty(name, value))
			return;
		if (conditions.setProperty(name, value))
			return;
		switch (name) {
			case "hp":
				stats[STAT_HP] = Integer.valueOf(value);
				break;
			case "maxhp":
				stats[STAT_HPMAX] = Integer.valueOf(value);
				break;
			case "mp":
				stats[STAT_MP] = Integer.valueOf(value);
				break;
			case "maxmp":
				stats[STAT_MPMAX] = Integer.valueOf(value);
				break;
			case "str":
				stats[STAT_STR] = Integer.valueOf(value);
				break;
			case "int":
				stats[STAT_INT] = Integer.valueOf(value);
				break;
			case "dex":
				stats[STAT_DEX] = Integer.valueOf(value);
				break;
			case "con":
				stats[STAT_CON] = Integer.valueOf(value);
				break;
			case "wis":
				stats[STAT_WIS] = Integer.valueOf(value);
				break;
			case "hpbon":
				bonus[STAT_HP] = Integer.valueOf(value);
				break;
			case "maxhpbon":
				bonus[STAT_HPMAX] = Integer.valueOf(value);
				break;
			case "mpbon":
				bonus[STAT_MP] = Integer.valueOf(value);
				break;
			case "maxmpbon":
				bonus[STAT_MPMAX] = Integer.valueOf(value);
				break;
			case "strbon":
				bonus[STAT_STR] = Integer.valueOf(value);
				break;
			case "intbon":
				bonus[STAT_INT] = Integer.valueOf(value);
				break;
			case "dexbon":
				bonus[STAT_DEX] = Integer.valueOf(value);
				break;
			case "conbon":
				bonus[STAT_CON] = Integer.valueOf(value);
				break;
			case "wisbon":
				bonus[STAT_WIS] = Integer.valueOf(value);
				break;
			case "exp":
				exp = Integer.valueOf(value);
				break;
			case "cash":
				gold = Long.valueOf(value);
				break;
			case "race":
				race = game.getRace(value);
				break;
			case "clan":
				clan = value;
				break;
			case "wield":
				wornItems.wear(Wearing.WIELD, parseWearable(value));
				break;
			case "arms":
				wornItems.wear(Wearing.ARMS, parseWearable(value));
				break;
			case "legs":
				wornItems.wear(Wearing.LEGS, parseWearable(value));
				break;
			case "torso":
				wornItems.wear(Wearing.TORSO, parseWearable(value));
				break;
			case "waist":
				wornItems.wear(Wearing.WAIST, parseWearable(value));
				break;
			case "neck":
				wornItems.wear(Wearing.NECK, parseWearable(value));
				break;
			case "skull":
				wornItems.wear(Wearing.SKULL, parseWearable(value));
				break;
			case "eyes":
				wornItems.wear(Wearing.EYES, parseWearable(value));
				break;
			case "hands":
				wornItems.wear(Wearing.HANDS, parseWearable(value));
				break;
			// FIXME: should it specify the item type?
			case "item":
				inventory.add(parseHoldable(value));
				break;

			//
			// any more missing?
			default:
				super.setProperty(name, value);
				break;
		}
		// FIXME: spells, skills, inventory?
	}

	@Override
	protected void writeProperties(BufferedWriter out) throws IOException {
		super.writeProperties(out);
		for (int i = 0; i < stat_keys.length; i++) {
			writeProperty(out, stat_keys[i], stats[i]);
		}
		for (int i = 0; i < stat_keys.length; i++) {
			writeProperty(out, stat_keys[i] + "bon", bonus[i]);
		}
		writeProperty(out, "exp", exp);
		writeProperty(out, "gold", gold);
		writeProperty(out, "clan", clan);
		// FIXME: hack for mobile, race doesn't apply
		for (int i = 0; i < Wearing.WEARING_COUNT; i++) {
			Wearable w = wornItems.getWorn(i);
			if (w != null) {
				writeProperty(out, Wearing.wornNames[i], w.name + "," + w.durability + "," + w.uses);
			}
		}
		if (race != null)
			writeProperty(out, "race", race.name);
		variables.writeProperties(out);
		conditions.writeProperties(out);
	}

	public int getStat(int key) {
		return stats[key] + race.stats[key] + bonus[key];
	}

	public void setStat(int key, int value) {
		// TODO: range check?
		stats[key] = value;
	}

	public void addStat(int key, int value) {
		setStat(key, stats[key] + value);
	}

	public int getBonus(int key) {
		return bonus[key];
	}

	public int getHP() {
		return getStat(STAT_HP);
	}

	public int getHPMax() {
		return getStat(STAT_HPMAX);
	}

	public int getMP() {
		return getStat(STAT_MP);
	}

	public int getMPMax() {
		return getStat(STAT_MPMAX);
	}

	public int getSTR() {
		return getStat(STAT_STR);
	}

	public int getINT() {
		return getStat(STAT_INT);
	}

	public int getDEX() {
		return getStat(STAT_DEX);
	}

	public int getCON() {
		return getStat(STAT_CON);
	}

	public int getWIS() {
		return getStat(STAT_WIS);
	}

	public int getRange() {
		Weapon item = (Weapon) wornItems.getWorn(Wearing.WIELD);

		return item != null ? item.range : 1;
	}

	public int getRangeWithBonus() {
		return getRange() + bonus[STAT_RANGE];
	}

	public long getGold() {
		return gold;
	}

	/**
	 * Add or remove gold to/from the purse.
	 *
	 * If removing (amouunt &lt; 0), the operation only proceeds if there
	 * is sufficient money available.
	 *
	 * @param amount
	 * @return true if the gold was added, false if removing the gold would lead
	 * to a deficit.
	 */
	public boolean addGold(int amount) {
		// FIXME: locks
		if (gold + amount < 0)
			return false;
		gold += amount;
		return true;
	}

	public int getExp() {
		return exp;
	}

	public boolean addExp(int amount) {
		if (exp + amount < 0)
			return false;
		// FIXME: locks? or is += atomic in java, hmm.
		exp += amount;
		return true;
	}

	public boolean isMoveable() {
		return moveable;
	}

	public void setMoveable(boolean moveable) {
		this.moveable = moveable;
	}

	public boolean isPlayer() {
		return getType() == TYPE_PLAYER;
	}

	public boolean isFighting() {
		return battle != null;
	}

	public boolean isSleeping() {
		return sleeping;
	}

	public void setSleeping(boolean sleeping) {
		if (this.sleeping != sleeping) {
			this.sleeping = sleeping;
			flagsChanged();
		}
	}

	/**
	 * Whether the object is alive, e.g. connection, etc.
	 * not the same as player death, todo: rename it
	 *
	 * @return
	 */
	public boolean isAlive() {
		// FIXME: implement isAlive
		return true;
		//throw new UnsupportedOperationException();
	}

	public List<String> getActiveConditions() {
		return conditions.getActiveConditions();
	}

	public int getBattleSide() {
		if (battle != null)
			return battle.getSide(this);
		return 0;
	}

	public int getSkillLevel(String name) {
		Ability a = skills.get(name);
		if (a != null)
			return a.getLevel();
		return 0;
	}

	/**
	 * This thing caused damage to another player.
	 *
	 * This implements battle accounting and weapon damage
	 *
	 * @param amount
	 */
	public void causedDamage(int amount) {
		damageDone += amount;
		weaponDamage(amount);
	}

	/**
	 * Invoked on attackor to age weapon
	 *
	 * @param amount
	 */
	public void weaponDamage(int amount) {
		Wearable item = wornItems.damageItem(Wearing.WIELD, amount);
		if (item != null) {
			chatMessage("Your " + item.name + " breaks.");
			// FIXME: onUnwear(item);
			//if (isPlayer()) {
			//	updateEquipment();
			//	updateStats();
			//}
		}
	}

	public void receivedDamage(int amount) {
		setStat(STAT_HP, stats[STAT_HP] - amount);
		armourDamage(amount);
	}

	public void armourDamage(int damage) {
		int total = wornItems.armourCount();
		if (total == 0) {
			return;
		}

		for (int i = Wearing.ARMS; i < Wearing.WEARING_COUNT; i++) {
			Wearable item = wornItems.damageItem(i, damage / total);
			if (item != null) {
				chatMessage("Your " + item.name + " breaks.");
				//FIXME: onUnwear(item);
				//updateStats();
				//updateEquipment();
			}
		}
	}

	/**
	 * Process one queued move
	 */
	public void moveTick() {
		String dir;

		synchronized (moveQueue) {
			if (moveQueue.isEmpty())
				return;

			dir = moveQueue.removeFirst();
		}

		System.out.println("move " + name + " tick: " + dir);

		switch (dir.charAt(0)) {
			case 'n':
				moveTo(x, y - 1, 0);
				break;
			case 's':
				moveTo(x, y + 1, 2);
				break;
			case 'w':
				moveTo(x - 1, y, 4);
				break;
			case 'e':
				moveTo(x + 1, y, 6);
				break;
		}
	}

	/**
	 * Called every 'item type' tick. Something like every 250ms.
	 *
	 * @param tick
	 */
	public void tick(int tick) {
		// Every second
		if (tick % 4 == 0) {
			if (conditions.checkConditions(this, tick))
				conditionsChanged = tick;
		}
		// Every 18 seconds
		if (tick % 73 == 0) {
			//if (lt.battle == null) {
			int hpinc, mpinc;
			if (isSleeping()) {
				hpinc = 3 + getCON();
				mpinc = 3 + getWIS();
			} else {
				hpinc = 1 + getCON() / 2;
				mpinc = 1 + getWIS() / 2;
			}
			setStat(STAT_HP, Math.min(stats[STAT_HP] + hpinc, stats[STAT_HPMAX]));
			setStat(STAT_MP, Math.min(stats[STAT_MP] + mpinc, stats[STAT_MPMAX]));
			//	lt.updateInfo();
			//	lt.savePlayer();
			//}
		}
		// TODO: move tick
	}

	/**
	 * Called at the end of a turn to update visibility to this object/fire off
	 * updates, etc.
	 *
	 * @param tick
	 */
	public void visibilityTick(int tick) {
	}
	int viewRange = 6;

	boolean visibleRange(int tx, int ty) {
		return Math.abs(x - tx) <= viewRange
				&& Math.abs(y - ty) <= viewRange;
	}

	/**
	 * Execute the canSeeActive script - can this active
	 * see the other at this time
	 *
	 * @param other
	 * @return
	 */
	public boolean onCanSeeActive(Active other) {
		System.out.println("not implemented: onCanSeeActive");
		return true;
	}

	/**
	 * Execute the canMoveActive script - can this active
	 * occupy the same location as other
	 *
	 * @param blocking
	 * @return
	 */
	public boolean onCanMoveActive(Active blocking) {
		System.out.println("not implemented: onCanMoveActive");

		return false;
	}

	/**
	 * Execute location and tile canSee scripts
	 *
	 * @param lx
	 * @param ly
	 * @return
	 */
	public boolean onCanSee(int lx, int ly) {
		return game.onLocationVisible(this, lx, ly, map.getTile(lx, ly));
	}

	/**
	 * Check if the player can see the location, uses a line of sight check
	 *
	 * @param tx
	 * @param ty
	 * @return
	 */
	public boolean canSee(int tx, int ty) {
		if (!visibleRange(tx, ty))
			return false;
		//if (!blnLineOfSight) {
		//	return true;
		//}

		for (TileMap.MapData md : map.look(x, y, tx, ty)) {
			if (!onCanSee(md.x, md.y))
				return false;
		}
		return true;
	}

	/**
	 * Can this active move to the given location.
	 *
	 * @param tx
	 * @param ty
	 * @return
	 */
	public boolean canMoveTo(int tx, int ty) {

		if (!this.map.inside(tx, ty))
			return false;

		//System.out.printf("can move to: %d,%d tid=%3d on map %s\n", tx, ty, this.map.getTile(tx, ty), this.map.name);

		for (Thing o : this.map.getEntities(tx, ty, null)) {
			if (o instanceof Active) {
				Active a = (Active) o;
				if (!onCanMoveActive(a))
					return false;
			}
		}

		return game.onLocationAble(this, tx, ty, map.getTile(tx, ty));
	}

	abstract public void send(DuskMessage msg);

	public abstract void chatMessage(Active from, String clan, String msg);

	/**
	 * Send a message to player.
	 *
	 * @param msg if null, nothing is sent.
	 */
	void chatMessage(String msg) {
		if (msg != null)
			chatMessage(null, null, msg);
	}

	void chatBattle(String msg) {
		// FIXME:P right code
		chatMessage(null, null, msg);
	}

	/**
	 * Send a localised chat message from the given object
	 *
	 * @param msg
	 */
	public void localisedChat(String msg) {
		//log.printMessage(Log.ALWAYS, inMessage);

		for (TileMap<Thing>.MapData md : map.range(x, y, game.viewRange)) {
			for (Thing o : md.entities) {
				if (o.getType() == Thing.TYPE_PLAYER) {
					Player p = (Player) o;

					p.chatMessage(this, null, msg);
				}
			}
		}
	}

	public List<Active> getPackMembers() {
		// FIXME: threads
		if (pack != null)
			return pack.members;
		else
			return Arrays.asList(this);
	}

	public void travelTo(int destX, int destY, boolean goon) {
		if (pack != null && !pack.isLeader(this)) {
			chatMessage("You can't move while you're following someone.");
		}
		// TODO: verify logic
		//if (master != null) {
		//	if (!isPet() || master.following == this) {
		//		return "You can't move while you're following someone.";
		//	}
		//}
		if (goon && !canMoveTo(destX, destY)) {
			chatMessage("You can't move onto that location.");
			return;
		}
		if (Math.abs(destX - x) > game.viewRange || Math.abs(destY - y) > game.viewRange) {
			chatMessage("Too far away");
			return;
		}
		synchronized (moveQueue) {
			moveQueue.clear();

			TileMap.MoveListener ml = new TileMap.MoveListener() {
				@Override
				public boolean canMoveto(TileMap.MapData md) {
					return canMoveTo(md.x, md.y);
				}
			};
			int mflags = goon ? 0 : TileMap.SKIP_END;

			for (TileMap.MoveData md : map.move(x, y, destX, destY, mflags, ml)) {
				moveQueue.add(md.direction);
			}
		}
	}

	public void enqueueMove(String dir) {
		if (pack != null
				&& !pack.isLeader(this)) {
			chatMessage("You can't move while following someone");
			return;
		}
		synchronized (moveQueue) {
			moveQueue.add(dir);
		}
	}

	public boolean hasPendingMoves() {
		synchronized (moveQueue) {
			return !moveQueue.isEmpty();
		}
	}

	public void clearMoveQueue() {
		synchronized (moveQueue) {
			moveQueue.clear();
		}
	}

	/**
	 * Jump to a new location/map.
	 *
	 * No checks are performed on validity of jump
	 *
	 * @param map
	 * @param newx
	 * @param newy
	 * @returns true if the location or map changed
	 */
	protected boolean jumpTo(TileMap map, int newx, int newy) {
		if (this.map == map && newx == x && newy == y)
			return false;

		// TODO: if this is the leader, warp everyone to the new location?

		// FIXME: threads or something
		if (this.map == (map)) {
			map.moveEntity(this, newx, newy);
		} else {
			this.map.removeEntity(this);
			this.map = map;
			this.x = newx;
			this.y = newy;
			this.map.addEntity(this);
		}
		return true;
	}

	/**
	 * Move player to new location.
	 *
	 * TODO: it seems to me, that if this is a leader, it should
	 * move all it's followers right away without needing the
	 * recursion.
	 *
	 * @param newx
	 * @param newy
	 * @param newStep TODO: this should just be a direction code, other code
	 * can decide if it means changing the picture or something
	 * @return
	 */
	protected boolean moveTo(int newx, int newy, int newStep) {
		//System.out.printf("%s: move to %d,%d moveable=%s sleeping=%s can=%s\n",
		//		name, newx, newy, moveable, sleeping, canMoveTo(newx, newy));
		/**
		 * l	* Allow gods to move outside of map (probably not!)
		 */
		if (privs < 5 && !map.inside(newx, newy))
			return false;
		/**
		 * Check if we can move at all
		 */
		if (privs <= 1 && (!moveable || isSleeping() || !canMoveTo(newx, newy)))
			return false;

		int oldx = x;
		int oldy = y;

		map.moveEntity(this, newx, newy);

		imageStep = newStep;

		game.onLocationAction(this, x, y, map.getTile(x, y));

		Active following = pack != null ? pack.getFollowing(this) : null;

		//move follower
		if (following != null) {
			following.followTo(this, oldx, oldy);
		}

		return true;
	}

	protected boolean followTo(Active leader, int oldx, int oldy) {
		//don't move follower if leader has moved onto follower's tile
		if ((x == leader.x) && (y == leader.y)) {
			return false;
		} else if (Math.abs(x - oldx) + Math.abs(y - oldy) > 1) {
			leader.chatMessage(name + " is no longer following you.");
			chatMessage("You are no longer following " + leader.name + ".");

			pack.removeFollower(this);
			return false;
		} else if (y > oldy) {
			moveTo(x, y - 1, 0); // n
		} else if (y < oldy) {
			moveTo(x, y + 1, 2); // s
		} else if (x > oldx) {
			moveTo(x - 1, y, 4); // w
		} else if (x < oldx) {
			moveTo(x + 1, y, 6); // e
		}
		return true;
	}

	/**
	 * This is a script helper to find a nearby visible object by name
	 * or number.
	 *
	 * @param name if parseable as a number, used as ID instead.
	 * @return
	 */
	protected Thing findVisibleObject(String name) {
		try {
			long id = Long.valueOf(name);
			Thing t = game.getThing(id);
			boolean see = true;

			if (t instanceof Active) {
				see &= onCanSeeActive((Active) t);
			}

			if (see && canSee(t.x, t.y)) {
				return t;
			}
			return null;
		} catch (NumberFormatException x) {
		}

		// search by name
		for (TileMap<Thing>.MapData md : map.range(x, y, game.viewRange)) {
			for (Thing t : md.entities) {
				if (t.name.equalsIgnoreCase(name)) {
					boolean see = true;

					if (t instanceof Active) {
						see &= onCanSeeActive((Active) t);
					}

					if (see && canSee(t.x, t.y)) {
						return t;
					}
				}
			}
		}
		return null;
	}

	public void createBattle(Active enemy) {
		if (canAttackEnemy(enemy))
			attackEnemy(enemy);
	}

	// can attackEnemy a given target?
	protected boolean canAttackEnemy(Active enemy) {
		String msg;

		if (isSleeping()) {
			msg = ("You can't do that while you're sleeping");
		} else if (isFighting()) {
			msg = ("You're already busy fighting!");
		} else if (enemy.ID == this.ID) {
			msg = ("You can't fight yourself!");
		} else if (enemy.getType() == TYPE_PET) {
			msg = ("You can't attack pets.");
		} else if (distanceL1(enemy) > getRangeWithBonus()) {
			System.out.println("attack enemy =" + enemy.name + " distance =" + distanceL1(enemy) + " range = " + getRangeWithBonus());
			msg = ("They're too far away.");
		} else if (!game.onCanAttack(this, enemy)) {
			msg = ("You can't attack them.");
		} else {
			return true;
		}

		chatMessage(msg);
		return false;
	}

	/**
	 * Attack enemy, must already have been checked using canAttackEnemy()
	 *
	 * @param enemy
	 */
	protected void attackEnemy(Active enemy) {
		if (!enemy.isFighting()) {
			game.addBattle(new Battle(game, this, enemy));
		} else {
			int side = 3 - enemy.battle.getSide(enemy);

			for (Active a : getPackMembers()) {
				enemy.battle.addToBattle(a, side);
			}
		}
	}

	public int getArmourMod() {
		return wornItems.armourMod();
	}

	public int getArmourModWithBonus() {
		return getArmourMod() + ((getDEX()) / 10) + bonus[STAT_ARC];
	}

	public int getDamageMod() {
		Wearable item = wornItems.getWorn(Wearing.WIELD);
		if (item != null)
			return item.mod;
		return 100;
	}

	public int getDamageModWithBonus() {
		return getDamageMod() + bonus[STAT_DAMAGE];
	}

	int getTotalSkillLevel() {
		int total = 0;

		for (Ability skill : skills.values())
			total += skill.getLevel();
		for (Ability spell : spells.values())
			total += spell.getLevel();
		return total;
	}

	/**
	 * Get character points
	 *
	 * @return
	 */
	public int getCP() {
		int result = stats[STAT_WIS]
				+ stats[STAT_INT]
				+ stats[STAT_STR]
				+ stats[STAT_DEX]
				+ stats[STAT_CON]
				+ stats[STAT_HPMAX] / 10
				+ stats[STAT_MPMAX] / 10
				+ getTotalSkillLevel();
		return result;
	}

	/**
	 * get total points
	 *
	 * @return
	 */
	public int getTP() {
		int result = getCP()
				+ getArmourMod()
				+ (getDamageMod() - 100);
		return result;
	}

	/**
	 * Test skill against a random hit rate
	 *
	 * @param name
	 * @return
	 */
	public boolean testSkill(String name) {
		return Math.random() * 100 + 1 < getSkillLevel(name);
	}

	protected int damageRoll(Active target, int range) {
		int attackerTotal = getSTR();

		double damage = (attackerTotal / 2.0)
				* (Math.random() + 0.5)
				* (getDamageModWithBonus() / 100)
				- (target.getArmourModWithBonus());

		return (int) damage;
	}

	protected boolean dodgeRoll(Active target, int attackModifier) {
		int attackedTotal = Math.min(100, target.getDEX());
		int attackerTotal = Math.min(100, this.getDEX() + attackModifier);

		return ((Math.random() * 100)
				< ((target.getSkillLevel("Dodge") * .75)
				+ (.25 * (attackedTotal - attackerTotal))));
	}

	protected void performAttack(Battle battle, Active target, int range, StringBuilder s) {
		// The farther away the target, the harder they are to hit.
		// The more skilled the attecker is in ranged combat, the less range affects ability to hit.
		// The farther away the target, the easier it is for them to dodge.
		// The more skilled the attecker is in ranged combat, the harder it is for the target to dodge.
		int r2 = 0;
		if (range > 1) {
//			r2= thnAttacking.getSkill("ranged combat") - (int)((range * range - 1) * (double)(100/engGame.viewrange));
			r2 = this.getSkillLevel("ranged combat");
		} else {
			r2 = this.getSkillLevel("close combat");
		}
		if (r2 < 0) {
			s.append(this.name).append(" missed.");
			battle.hitMessage(this, target, 0, "Missed!");
		} else if (dodgeRoll(target, r2)) {
			s.append(target.name).append(" dodged ").append(this.name).append("'s attack");
			battle.hitMessage(this, target, 0, "Dodged!");
		} else {
			// FIXME: audio
			//if (game.battlesound != -1) {
			//	game.playSound(attackor.map, game.battlesound, attackee.x, attackee.y);
			//}
			int i = damageRoll(target, range);
			if (i < 0) {
				i = 0;
			}
			s.append(this.name + " did " + i + " to " + target.name);

			target.receivedDamage(i);
			this.causedDamage(i);

			battle.hitMessage(this, target, i, "Hit!");
		}
	}

	void splitMoney(double modifier, ArrayList<Active> opponents) {
		int lost = (int) (modifier * gold);
		if (lost > 0) {
			chatBattle("You have lost " + lost + " gp.");

			// FIXME: synchronised
			addGold(-lost);
			int share = lost / opponents.size();
			for (Active a : opponents) {
				a.addGold(share);
				// TODO: virtual method for bounty?
				if (a.isPlayer() && share != 0) {
					a.chatMessage("You get " + share + " gp.");
				}
			}
		}
	}

	void splitExp(double modifier, ArrayList<Active> opponents) {
		int lost = (int) (modifier * this.exp);

		this.chatBattle("You have lost " + lost + " exp.");
		this.addExp(-lost);
		this.damageDone = 0;

		double totalPpoints, sidepoints = 0;

		totalPpoints = this.getTP();
		for (Active a : opponents) {
			sidepoints += a.getTP();
		}

		for (Active a : opponents) {
			// TODO: virtual method for bounty?
			if (!(a.getType() == TYPE_MOBILE)) {
				double damageMod = Math.min(getHPMax(), a.damageDone);
				double gained = (game.expGainMod
						* (((totalPpoints / sidepoints)
						+ (2.0 * damageMod / getHPMax() * totalPpoints / a.getTP())) / 3.0));
				int igained = (int) gained;
				a.chatMessage("You get " + igained + " exp.");
				a.addExp(igained);
			}
			a.damageDone = 0;
		}
	}

	public void enterBattle(Battle battle) {
		assert (this.battle == null);

		this.battle = battle;
		moveable = false;
		flagsChanged();
	}

	/**
	 * If fighting, add the command to the fighting command queue,
	 *
	 * Certain command issued during battle are handled from the
	 * battle even loop.
	 *
	 * TODO: is this just for some sort of thread-save
	 * synchronisation purpose, or does it have a better reason?
	 *
	 * It is useful for flee command, but otherwise?
	 *
	 * @param cmd
	 * @return true if the command was queued
	 */
	boolean addBattleCommand(String... cmd) {
		if (isFighting()) {
			synchronized (battleCommands) {
				battleCommands.add(cmd);
			}
			return true;
		}
		return false;
	}

	boolean addExpiditedBattleCommand(String... cmd) {
		if (isFighting()) {
			synchronized (battleCommands) {
				battleCommands.addFirst(cmd);
			}
			return true;
		}
		return false;
	}

	/**
	 * Retrieve the next pending battle command
	 *
	 * @return
	 */
	String[] pollBattleCommand() {
		synchronized (battleCommands) {
			if (battleCommands.isEmpty())
				return null;
			return battleCommands.remove();
		}

	}

	/**
	 * Called during battle to implement a single attack
	 *
	 * @param battle
	 * @param target
	 */
	public void attack(Battle battle, Active target, int range) {
		if (range > getRangeWithBonus()) {
			// out of range
			battle.chatMessage(name + " is out of range");
		} else {
			StringBuilder msg = new StringBuilder();

			performAttack(battle, target, range, msg);
			if (testSkill("double attack")) {
				msg.append(",");
				performAttack(battle, target, range, msg);
			}
			if (testSkill("triple attack")) {
				msg.append(",");
				performAttack(battle, target, range, msg);
			}
			if (testSkill("quadruple attack")) {
				msg.append(",");
				performAttack(battle, target, range, msg);
			}
			msg.append(".");
			battle.chatMessage(msg.toString());
		}
	}

	/**
	 * Called during battle to flee.
	 *
	 * This will end the battle participation of this player.
	 *
	 * @param battle
	 * @param opponents
	 */
	public void fleeBattle(Battle battle, ArrayList<Active> opponents) {
		clearFollow();

		// FIXME: chatBattle
		chatMessage("You have fled from battle");
		splitMoney(game.goldFleeMod, opponents);
		splitExp(game.expFleeMod, opponents);

		endBattle();
		//updateInfo();
		//updateStats();
		//updateActions();
		//playMusic(0);
	}

	/**
	 * Called at the end of each battle turn. Includes a list of changes to the battlefield during
	 * that time.
	 *
	 * For updating clients with flags and shit.
	 *
	 * @param battle
	 * @param joined objects joined battle
	 * @param left objects left battle
	 */
	public void endBattleTurn(Battle battle, ArrayList<Active> joined, ArrayList<Active> left) {
	}

	/**
	 * Lets the active know that an opponent has left the battle.
	 *
	 * @param battle
	 * @param loser
	 */
	public void leftBattle(Battle battle, Active loser) {
	}

	/**
	 * Thing was killed in battle, distribute bounty to opponents
	 *
	 * @param battle
	 * @param winner
	 * @param opponents
	 */
	abstract public void killedBattle(Battle battle, Active winner, ArrayList<Active> opponents);

	public void endBattle() {
		this.battle = null;

		moveable = true;

		flagsChanged();
		// update everything
		//	lt.clearFlags();
		//	lt.battle = null;
		//	lt.battleSide = 0;
		//	lt.isMoveable = true;
		//	lt.updateInfo();
		//	lt.updateStats();
		//	lt.updateActions();
		//	lt.playMusic(0);
	}

	public boolean isCanLead() {
		return canLead;
	}

	public void follow(Active master) {
		String msg;

		if (isSleeping()) {
			msg = "You can't do that while you're sleeping";
		} else if (distanceL1(master) > 1) {
			msg = ("They're too far away.");
		} else if (pack != null) {
			msg = ("You're already following someone. Leave them first.");
		} else if (this.ID == master.ID) {
			msg = ("You can't follow yourself.");
		} else if (!isCanLead()) {
			msg = ("They won't let you follow them.");
		} else {
			if (master.pack == null) {
				master.pack = new Pack();
				master.pack.addFollower(master);
			}
			pack = master.pack;
			pack.addFollower(this);
			// set pack changed?
			return;
		}

		chatMessage(msg);
	}

	void followCommand(String whom) {
		Thing thing = findVisibleObject(whom);
		String msg = null;

		if (thing == null) {
			msg = "You don't see that here.";
		} else if (thing instanceof Active) {
			follow((Active) thing);
		} else {
			msg = "That's not something you can follow.";
		}

		chatMessage(msg);
	}

	/**
	 * Leave the group if you're in one
	 */
	void leaveCommand() {
		if (pack != null) {
			Active leader = pack.getLeader(this);
			if (leader != this) {
				pack.removeFollower(this);
				pack.removeFollower(leader);
				pack = null;
				leader.pack = null;
			}
		}
	}

	/**
	 * Force thing to be removed from the pack
	 *
	 * TODO: check it's needed
	 */
	@Deprecated
	public void clearFollow() {
		if (pack != null)
			pack.members.remove(this);
	}

	protected void flagsChanged() {
		flagsChanged = game.getClock();
	}

	public boolean jumpTo(String mapName, String mapAlias) {
		System.out.println("script: jumpto(" + mapName + ", " + mapAlias + ")");
		TileMap newmap = game.getMap(mapName);

		if (newmap != null) {
			Location l = newmap.locationForAlias(mapAlias);

			if (l != null) {
				return jumpTo(newmap, l.x, l.y);
			}
		}
		return false;
	}

	/* *
	 * So all this 'get the player object to implemeent the commands' seemed
	 * like a good idea, but the code will bloat.
	 *
	 * having it reusable is useful for scripts though.
	 *
	 * Perhaps it shoudl be put into antoher class for reusability stake.
	 */
	public void fleeCommand() {
		if (isFighting()) {
			synchronized (battleCommands) {
				battleCommands.addFirst(new String[]{"flee"});
			}
		} else {
			chatMessage("You're not fighting anyone");
		}
	}

	public void sleepCommand() {
		String msg = null;

		if (isSleeping()) {
			// otherwise i get spew from tired script: might need to think script i/face
			//msg = "You are already asleep";
		} else if (isFighting()) {
			msg = "Not while you're fighting!";
		} else if (pack != null && !pack.getLeader(this).isSleeping()) {
			msg = "You can't sleep if you're following someone who's awake.";
		} else {
			msg = "You fall asleep.";
			setSleeping(true);
		}

		chatMessage(msg);
	}

	public void awakeCommand() {
		String msg;

		if (isSleeping()) {
			setSleeping(false);
			msg = "You wake up";
		} else {
			msg = "You are already awake";
		}
		chatMessage(msg);
	}

	public void gossipCommand(String text) {
		// noop, see player
		chatMessage("Only players can use the gossip/clan/tell channels.");
	}

	public void sayCommand(String text) {
		// noop, see player
	}

	public void attackCommand(String who) {
		String msg;

		Thing enemy = findVisibleObject(who);
		if (enemy == null) {
			msg = ("You don't see that here.");
		} else if (!(enemy instanceof Active)) {
			msg = ("You can't fight that.");
		} else {
			this.createBattle((Active) enemy);
			return;
		}

		chatMessage(msg);
	}

	public void lookCommand(String what) {
		// TODO: put all this 'check sleeping' etc into a common function with
		// a list of things to check.
		if (isSleeping()) {
			chatMessage("You can't do that while you're sleeping");
		} else {
			Thing thing = findVisibleObject(what);

			if (thing == null) {
				chatMessage("You don't see that here.");
			} else {
				thing.look(this);
			}
		}
	}

	@Override
	public void look(Active viewer) {
		chatMessage(viewer.name + " is looking at you.");
		viewer.chatMessage(name + " has " + getCP() + "cp and " + getHP() + "/" + getHPMax() + "hp.");
		if (description != null) {
			viewer.chatMessage("Their description is: " + description);
		}
		final String[] formats = {
			"They are wielding %s.",
			"They are wearing %s on their arms.",
			"They are wearing %s on their legs.",
			"They are wearing %s on their torso.",
			"They are wearing %s on their waist.",
			"They are wearing %s on their neck.",
			"They are wearing %s on their skull.",
			"They are wearing %s on their eyes.",
			"They are wearing %s on their hands."
		};
		for (int i = 0; i < formats.length; i++) {
			Wearable item = wornItems.getWorn(i);
			if (item != null)
				viewer.chatMessage(String.format(formats[i], item.description));
		}
	}

	/**
	 * Wear the item. The item must be in the active's current inventory.
	 *
	 * The item will be worn at the correct location.
	 *
	 * @param w
	 */
	public void wearItem(Wearable w) {
		// FIXME: threads.
		if (inventory.contains(w)) {
			Wearable old = wornItems.wear(w.getWearing(), w);

			if (old != null) {
				inventory.add(old);
			}
			inventory.remove(w);
		}
	}

	public void wearCommand(String what) {
		Holdable h = inventory.get(what);
		String msg = null;
		if (h != null) {
			if (h instanceof Wearable) {
				wearItem((Wearable) h);
			} else {
				msg = "You'd look pretty stupid trying to wear that!";
			}
		} else
			msg = "You don't have that";

		chatMessage(msg);
	}

	/**
	 * Unwear item at position index. This is always called for the unwear
	 * command.
	 *
	 * @param index
	 */
	public void unwearAt(int index) {
		Wearable w = wornItems.unwear(index);

		// fIXME: onunwear/etc.
		if (w != null)
			inventory.add(w);
	}

	/**
	 * Allows un-wearing by position or name.
	 *
	 * @param what
	 */
	public void unwearCommand(String what) {
		if (what.equalsIgnoreCase("all")) {
			for (int i = 0; i < Wearing.WEARING_COUNT; i++) {
				unwearAt(i);
			}
		} else {
			int index = Equipment.toIndex(what);

			if (index == -1)
				index = wornItems.getWornIndex(what);

			if (index != -1) {
				unwearAt(index);
			} else {
				chatMessage("You're not wearing that.");
			}
		}
	}

	public void getCommand(String what) {
		Thing thing = findVisibleObject(what);
		String msg = null;

		if (thing == null)
			msg = "You don't see that here.";
		else if (!(thing instanceof Holdable))
			msg = "You can't take that.";
		else if (distanceL1(thing) >= 2)
			msg = "That's too far away.";
		else {
			Holdable item = (Holdable) thing;

			game.removeThing(thing);
			inventory.add(item);

			game.onItem(this, item, "get");
		}

		chatMessage(msg);
	}

	public void dropCommand(String what) {
		Holdable h = inventory.get(what);
		String msg = null;

		if (h == null) {
			if (wornItems.isWearing(what)) {
				msg = ("You're wearing that, you cannot drop it.");
			} else {
				msg = ("You don't have that");
			}
		} else if (game.haveOnItem(h, "drop")) {
			game.onItem(this, h, "drop");
		} else {
			inventory.remove(h);
			if (h.cost == 0) {
				msg = h.name + " vanishes into thin air.";
			} else {
				game.addThing(h, map, x, y);
			}
		}

		chatMessage(msg);
	}

	public void useCommand(String what) {
		Holdable item = inventory.get(what);
		String msg = null;

		// TODO: check type?

		if (item == null)
			msg = "You don't have that.";
		else if (!game.haveOnItem(item, "use"))
			msg = "That cannot be used.";
		else if (item.uses == 0)
			msg = "That is used up.";
		else {
			if (item.uses != -1)
				item.uses--;
			game.onItem(this, item, "use");
		}

		chatMessage(msg);
	}

	public void drinkCommand(String what) {
		Holdable item = inventory.get(what);

		if (item != null && item.getType() != TYPE_DRINK) {
			chatMessage("You can't drink that.");
		} else
			useCommand(what);
	}

	public void eatCommand(String what) {
		Holdable item = inventory.get(what);

		if (item != null && item.getType() != TYPE_FOOD) {
			chatMessage("You can't eat that.");
		} else
			useCommand(what);
	}

	public void castCommand(String name) {
		throw new UnsupportedOperationException();
	}

	public Shop visitingShop() {
		for (Thing thing : map.getEntities(x, y, null)) {
			if (thing.getType() == TYPE_PLAYER_SHOP
					|| thing.getType() == TYPE_GAME_SHOP) {
				return (Shop) thing;
			}
		}
		return null;
	}

	void buyCommand(String what, int quantity) {
		Shop shop = visitingShop();
		if (shop != null) {
			shop.buy(this, what, quantity);
		} else {
			chatMessage("Buy from whom?");
		}
	}

	void sellCommand(String what, int quantity) {
		Shop shop = visitingShop();
		if (shop != null) {
			shop.sell(this, inventory.getAll(what, quantity));
		} else {
			chatMessage("Sell from whom?");
		}
	}

	/**
	 * This is the public script API ... probably want to move it to another wrapper class for security reasons
	 */
	public void emote(String value) {
		// "thing value"
		chatMessage(value);
	}

	public void chat(String value) {
		// "thing says value" ??
		chatMessage(value);
	}

	public void setCondition(String name, int duration) {
		Condition c = new Condition(name, duration);
		conditions.setCondition(c);
	}

	public void addINT(int inc) {
		addStat(STAT_INT, inc);
	}

	public void addSTR(int inc) {
		addStat(STAT_STR, inc);
	}

	public List<Holdable> getAllItems(String name) {
		return inventory.getAll(name, Integer.MAX_VALUE);
	}

	public void addItem(Holdable item) {
		if (item != null) {
			inventory.add(item);
			game.onItem(this, item, "get");
		}
	}

	/**
	 * Remove the item from the inventory.
	 *
	 * @param item
	 * @return true if the item was in the inventory and could be removed.
	 */
	public boolean removeItem(Holdable item) {
		// FIXME: what if worn?
		if (item != null) {
			return inventory.remove(item);
		}
		return false;
	}

	public void sleep() {
		sleepCommand();
	}

	public int getInteger(String key) {
		return variables.getInteger(key, 0);
	}

	public void setInteger(String key, int value) {
		variables.put(key, value);
	}

	/**
	 * check if the active has the item inventory or worn
	 *
	 * @param key
	 * @return
	 */
	public boolean isOwner(String key) {
		return inventory.get(key) != null
				|| wornItems.isWearing(key);
	}

	public boolean isWearing(String key) {
		return wornItems.isWearing(key);
	}
}
