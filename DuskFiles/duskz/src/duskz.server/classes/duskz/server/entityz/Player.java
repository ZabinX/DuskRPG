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

import duskz.protocol.DuskMessage;
import duskz.protocol.DuskProtocol;
import duskz.protocol.EntityUpdateMessage;
import duskz.protocol.ListMessage;
import java.io.BufferedWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Human player
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class Player extends Active implements DuskProtocol {

	private HashSet<String> ignore = new HashSet<>();
	// This shoudln't be stored like this ...
	protected String password;
	/**
	 * Privilege level
	 */
	int privs;
	/**
	 * Players can have 1 pet
	 */
	Pet pet;
	/*
	 * State tracking
	 */
	private boolean hasMoved = false;
	/**
	 *
	 */
	// TODO: check
	public boolean audioon = true,
			coloron = true,
			popup = true,
			highlight = true;
	/**
	 *
	 */
	boolean alive;
	/**
	 * Abuse control - muting until time
	 */
	public long muteLimit;
	/**
	 * Flood control for players
	 */
	public long lastMessageStamp = 0;
	/**
	 * Used to optimise network traffic
	 */
	PlayerState state;
	/**
	 * Connection to client
	 */
	private final PlayerConnection connection;
	/**
	 * Helper for commands
	 */
	private final PlayerCommands commands;
	/**
	 * Helper for command line
	 */
	private final Commands cmdline;

	public Player(Game game, PlayerConnection connection) {
		super(game);
		this.connection = connection;
		this.commands = new PlayerCommands(game, this);
		this.cmdline = new Commands(this);

		this.state = new PlayerState(this);
		alive = connection != null;
	}

	@Override
	public int getType() {
		return TYPE_PLAYER;
	}

	@Override
	public int getImage() {
		// + imagestep?
		return race.image;
	}

	void conditionsChanged() {
		state.conditions = game.getClock();
	}

	void actionsChanged() {
		state.actions = game.getClock();
	}

	void statsChanged() {
		state.stats = game.getClock();
	}

	void scoreChanged() {
		state.score = game.getClock();
	}

	void wornChanged() {
		// Wearing items always changes the inventory state
		state.worn = game.getClock();
		state.inventory = game.getClock();
	}

	void inventoryChanged() {
		state.inventory = game.getClock();
	}

	@Override
	public boolean addGold(int amount) {
		if (super.addGold(amount)) {
			scoreChanged();
			return true;
		}
		return false;
	}

	@Override
	public boolean addExp(int amount) {
		if (super.addExp(amount)) {
			scoreChanged();
			return true;
		}
		return false;
	}

	@Override
	public void setStat(int key, int value) {
		super.setStat(key, value);
		if (key <= STAT_MPMAX)
			scoreChanged();
		else
			statsChanged();
	}

	@Override
	public void setSleeping(boolean sleeping) {
		super.setSleeping(sleeping);
		actionsChanged();
	}

	@Override
	public void wearItem(Wearable w) {
		super.wearItem(w);
		wornChanged();

	}

	@Override
	public void unwearAt(int index) {
		super.unwearAt(index);
		wornChanged();
	}

	public PlayerCommands getCommands() {
		return commands;
	}

	@Override
	public DuskMessage createUpdateMessage(int name) {
		EntityUpdateMessage en = (EntityUpdateMessage) super.createUpdateMessage(name);
		// FIXME: move the base stuff to Active.
		StringBuilder sb = new StringBuilder();
		// Hmmm, should sleeping be a condition?
		// use flags for now ...
		//if (isSleeping()) {
		//	sb.append("<sleeping>");
		//}
		if (!clan.equals("none")) {
			sb.append('<');
			sb.append(clan);
			sb.append('>');
		}
		// FIXME: status flags
		// Hang on, shouldn't that be conditions?
		//if (isPet() && hp < 0) {
		//	sb.append("<wounded>");
		//}
		//for (String s : flags) {
		//	sb.append('<');
		//	sb.append(s);
		//	sb.append('>');
		//}
		sb.append(this.name);

		en.entityName = sb.toString();
		en.imageStep = (short) imageStep;

		return en;
	}

	@Override
	void setProperty(String name, String value) {
		switch (name) {
			case "password":
				password = value;
				break;
			default:
				super.setProperty(name, value);
		}
	}

	@Override
	protected void writeProperties(BufferedWriter out) throws IOException {
		// Want this to be first line
		writeProperty(out, "password", password);
		super.writeProperties(out);

		writeProperty(out, "privs", privs);
		if (pet != null)
			writeProperty(out, "pet", pet.name);

	}

	public String getAddress() {
		return connection.getAddress();
	}

	// Groups, clans, etc, can only be done on players!
	public boolean isSameGroup(Active other) {
		if (pack != null)
			return pack.contains(other);
		return false;
	}

	public boolean isClanless() {
		return clan == null || clan.equals("none");
	}

	/**
	 * Whether the acti
	 * FIXME: Who can have clans? if it's only players, fix Active to account for that.
	 *
	 * @return true if the active or any in it's pack are clanless.
	 */
	public boolean isClanlessGroup() {
		if (isClanless())
			return true;
		else if (pack != null)
			return pack.containsClanless();
		else
			return false;
	}

	/**
	 * Tracks if a move occured, and
	 *
	 * @param newLocX
	 * @param newLocY
	 * @param dir
	 * @param newStep
	 * @return
	 */
	@Override
	protected boolean moveTo(int newLocX, int newLocY, int newStep) {
		hasMoved = super.moveTo(newLocX, newLocY, newStep);
		return hasMoved;
	}

	@Override
	protected boolean canAttackEnemy(Active enemy) {
		switch (enemy.getType()) {
			case TYPE_PLAYER: {
				Player nme = (Player) enemy;

				if (isSameGroup(nme)) {
					chatMessage(null, null, "You can't attack a member of your group.");
					return false;
				}

				if (nme.isClanlessGroup()) {
					chatMessage(null, null, "You can't fight them.");
					return false;
				}

				// I don't see why the isFighting test is needed here.
				if (!enemy.isFighting()) {
					if (this.isClanless()) {
						chatMessage(null, null, "Players who are not in clans cannot fight other players.");
						return false;
					}

					if (nme.visitingShop() != null) {
						chatMessage(null, null, "You cannot attack players who are shopping.");
						return false;
					}
				}
				break;
			}
			case TYPE_MOBILE:
				// free for all?
				break;
			case TYPE_PET:
				chatMessage(null, null, "You can't attack pets.");
				return false;
		}
		return super.canAttackEnemy(enemy);
	}

	@Override
	public void enterBattle(Battle battle) {
		super.enterBattle(battle);

		actionsChanged();
	}

	@Override
	public void endBattle() {
		super.endBattle();

		actionsChanged();
	}

	@Override
	public void fleeBattle(Battle battle, ArrayList<Active> opponents) {
		super.fleeBattle(battle, opponents);

		if (pet != null) {
			battle.removeParticipant(pet);
			pet.fleeBattle(battle, opponents);
		}
	}

	@Override
	public void killedBattle(Battle battle, Active winner, ArrayList<Active> opponents) {
		clearFollow();

		battle.chatMessage(name + " is killed.");
		chatBattle("You have died.");

		splitMoney(game.goldLoseMod, opponents);
		splitExp(game.expLoseMod, opponents);
		endBattle();
		game.globalChat(null, null, name + " has been killed by " + winner.name);

		// FIXME: on player death script
		game.onDeath(this, winner);

		if (pet != null) {
			// how to pass this to battle?
			//	list2.remove(front2.getFollowing());
			battle.removeParticipant(pet);

			pet.damageDone = 0;
			pet.endBattle();
			// FIXME: warp pet to player location
			//	pet.changeLocBypass(map, x, y);
		}
	}

	@Override
	public void send(DuskMessage msg) {
		if (isPlayer() && alive) {
			connection.send(msg);
		}
	}

	public void chatMessage(Active from, String clan, String msg) {
		if (from != null && from.getType() == TYPE_PLAYER && ignore.contains(from.name))
			return;

		if (clan != null && !clan.equals(this.clan))
			return;

		send(DuskMessage.create(MSG_CHAT, msg));

		// TODO: charmer?
	}

	@Override
	public void tick(int tick) {
		if (tick >= muteLimit)
			muteLimit = 0;

		super.tick(tick);
	}

	boolean isVoiceAllowed() {
		if (muteLimit != 0) {
			chatMessage("You can't do that when nochanneled.");
			return false;
		} else {
			long last = lastMessageStamp;
			lastMessageStamp = System.currentTimeMillis();
			if ((lastMessageStamp - last) < game.floodLimit) {
				chatMessage("No flooding.");
				return false;
			}
			return true;
		}
	}

	@Override
	public void gossipCommand(String text) {
		if (isVoiceAllowed()) {
			String title = name;
			if (privs > 2) {
				//			&& hasCondition("invis")
				//			&& hasCondition("invis2")) {
				title = "A god";
			}
			game.globalChat(this, null, title + " gossips: " + text);
		}
	}

	@Override
	public void sayCommand(String text) {
		if (isVoiceAllowed()) {
			String title = name;
			if (privs > 2) {
				//			&& hasCondition("invis")
				//			&& hasCondition("invis2")) {
				title = "A god";
			}
			localisedChat(title + " says: " + text);
		}
	}

	@Override
	public void visibilityTick(int tick) {
		super.visibilityTick(tick);

		state.updatePlayer(tick);
	}

	@Override
	public void follow(Active master) {
		if (master.getType() != TYPE_PLAYER
				&& master.getType() != TYPE_PET) {
			chatMessage("You can only follow players.");
			return;
		}

		super.follow(master);
	}

	@Override
	void leaveCommand() {
		boolean linkpet = false;
		if (pet != null) {
			// Not really happy with this design here
			if (pack.contains(pet)) {
				pack.removeFollower(pet);
				linkpet = true;
			}
		}

		super.leaveCommand();

		// This seems a bit ugly ...
		if (linkpet) {
			pack = new Pack();
			pet.pack = pack;
			pack.addFollower(this);
			pack.addFollower(pet);
		}
	}

	void initMap() {
		ListMessage lm = new ListMessage(MSG_INIT_MAP);

		lm.add(FIELD_MAP_WIDTH, game.mapSize);
		lm.add(FIELD_MAP_HEIGHT, game.mapSize);
		// FIXME: depends on client info
		lm.add(FIELD_MAP_ASSETLOCATION, game.rcName);

		send(lm);
	}

	void startup() {
		// Sent initial stuff
		initMap();

		// Add me: no, do it at next game update loop
		//send(createUpdateMessage(MSG_ADD_ENTITY));

		game.onPlayerStart(this);
	}

	void logout() {
		game.unregisterPlayer(this);
		// FIXME: save player
		chatMessage("Goodbyte.");
		connection.shutdown();
	}

	void parseCommand(String cmd) {
		System.out.println(name + ": parse command: " + cmd);
		try {
			cmdline.execute(cmd);
		} catch (Exception ex) {
			// FIXME: log
			game.log.printf(ex, "executing: " + cmd);
			Logger.getLogger(Player.class.getName()).log(Level.SEVERE, null, ex);
		}
	}

	@Override
	public void addItem(Holdable item) {
		super.addItem(item);

		inventoryChanged();
	}

	@Override
	public boolean removeItem(Holdable item) {
		if (super.removeItem(item)) {
			inventoryChanged();
			return true;
		}
		return false;
	}
}
