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
 * Special Thanks to:
 * Randall Leeds for the following code portions
 * as well as many other small changes and deprecation fixes:
 * Float/Unfloat
 * Joe Alloway for shadowed text and the !set command
 *
 * Changes
 * Feb-2013 Michael Zucchi - modernised java, cleanup, abstracted the GUI behind
 * an interface. Abstracted most commands. Added some binary protocol changes.
 * Track the player id for better battles.
 * Mar-2013 Michael Zucchi - new protocol implementation.
 */
package duskz.client;

import duskz.protocol.*;
import duskz.protocol.DuskMessage.*;
import java.io.*;
import java.net.*;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * TODO: I've removed <rgb r g b>text</rgb> colour text for now, implementation
 * was poor TODO: applet stuff is removed FIXME: sound is all disabled
 *
 * @author notzed
 */
public class Dusk implements Runnable, DuskProtocol {

	public final static boolean dumpRaw = false;
	static String strVersion = "3.0 dev";
	Status status = new Status();
	long loncash;
	boolean loaded,
			blnMenuRefresh,
			connected = false,
			blnApplet;
	int intMusicTypes;
	int intNumSongs[];
	// FIXME: applet will have a different frontend or something
	//AudioClip audSFX[],	audMusic[][];
	//AudioClip audMusicPlaying;
	//String rcLocation;
	List<TransactionItem> buyList = new ArrayList<>();
	List<TransactionItem> sellList = new ArrayList<>();
	Equipment worn = new Equipment();
	private Socket socket;
	private DataOutputStream outstream;
	private DataInputStream instream;
	//int mapSize = 11;
	ClientMap map;
	boolean intStep,
			blnMusic = true;
	Thread gameThread;
	int tileSize = 32;
	int spriteSize = 64;
	GUI frame;
	String address = "dusk.wesowin.org";
	int port = 7423;
	// TODO: management at both ends could be put into the protocol namespace
	// outstanding queries, do one at a time
	ListMessage pendingQueries;
	int pendingQueryIndex;
	int queryID;
	// message to send when all queries complete
	ListMessage queryMessage;
	// Where to put the query fields
	ListMessage queryFields;

	public Dusk(GUI gui) {
		frame = gui;
		frame.setGame(this);
	}

	public void startUp() {
		try {
			//frame.initComponents();
			//frame.setVisible(true);
			frame.logClear();
			frame.log("DuskZ Client " + strVersion + " -- http://code.google.com/p/duskz/\n");
			frame.log("You are using Java version " + System.getProperty("java.version") + "\n");

			frame.log("Copyright (C) 2000 Tom Weingarten\n");
			frame.log("Copyright (C) 2013 Michael Zucchi\n");
			frame.log("This program comes with ABSOLUTELY NO WARRANTY.\n");
			frame.log("This is free software, and you are welcome to redistribute it\n");
			frame.log("under certain conditions.\n");

			if (blnApplet) {
				//address = appShell.getParameter("address");
				//port = Integer.parseInt(appShell.getParameter("port"));
				connect();
			} else {
				frame.showLogin();
			}
			//thrGraphics = new GraphicsThread(this);
			// TODO: check if i need to set map images here
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// Main entry point
	static public void main(String[] args) {
	}

	void connect() {
		throw new UnsupportedOperationException();
	}

	// initial cut at automatic login stuff
	// probably want to fix server to handle login/new account stuff separately
	enum State {
		// not connected

		Unconnected,
		// tcp connection made
		Connected,
		// Username sent
		Username,
		// Create a new user
		Create,
		// Password sent
		Password,
		// Password accepted
		Ready,
		// Waiting for race selection
		SelectRace,
	}
	State state = State.Unconnected;
	String pass;
	String user;

	public void connect(String address, int port, String user, String pass) {
		// Connect to Server
		try {
			socket = new Socket(address, port);
			outstream = new DataOutputStream(socket.getOutputStream());
			instream = new DataInputStream(new BufferedInputStream(socket.getInputStream()));
			log("Please enter your character name or the name of a new character: \n");

			state = State.Connected;

			// Load Images and start checking for incoming commands
			gameThread = new Thread(this);
			gameThread.start();
			connected = true;
			//Initialize objects
			map = new ClientMap(11, 11);
			buyList.clear();
			sellList.clear();

			this.pass = pass;
			this.user = user;
			state = State.Username;

			// try a login command
			ListMessage lm = new ListMessage(MSG_AUTH);
			lm.add(FIELD_AUTH_PLAYER, user);
			lm.add(FIELD_AUTH_PASS, pass);
			send(lm);

		} catch (Exception e) {
			log("Error connecting to server: " + e.toString() + "\n");
			return;
		}
	}

	/**
	 * FIXME: all needs a rewrite
	 *
	 * @param e
	 */
	// add the thing, this renumbers any that have the same name
	void addEntity(Entity e) {
		System.out.println("Add entity: " + e.ID + " " + e.name + " " + e.locx + "x" + e.locy);
		map.addEntity(e);

		// FIXME: call rement if it was out of range so the server knows
	}

	Entity findEntity(long id) {
		return map.getEntity(id);
	}

	void removeEntity(long id) {
		map.removeEntity(id);
	}

	void removeEntity(Entity entStore) {
		map.removeEntity(entStore);
	}

	//Thread to process incoming commands
	public void run() {
		int incoming = 0;
		while (incoming != -1) {
			try {
				DuskMessage dm = DuskMessage.receiveMessage(instream);

				// debug
				//System.out.print(state + ": ");
				//dm.format(System.out);

				switch (dm.name) {
					case MSG_AUTH: {
						ListMessage am = (ListMessage) dm;
						EntityIntegerMessage res = (EntityIntegerMessage) am.get(FIELD_AUTH_RESULT);

						switch (res.value) {
							case AUTH_LOGIN_OK: {
								log(am.getString(FIELD_AUTH_REASON) + "\n");
								frame.loginOk();
								status.id = res.id;
								state = State.Ready;
								break;
							}
							case AUTH_LOGIN_FAILED: {
								state = State.Username;
								log(am.getString(FIELD_AUTH_REASON) + "\n");
								//frame.loginError();
								break;
							}
							case AUTH_LOGIN_EXISTS: {
								state = State.Username;
								log(am.getString(FIELD_AUTH_REASON) + "\n");
								//frame.loginError();
								break;
							}
							case AUTH_LOGIN_INCOMPLETE: {
								state = State.Username;
								log(am.getString(FIELD_AUTH_REASON) + "\n");

								pendingQueries = (ListMessage) am.get(FIELD_AUTH_NEWPLAYER);
								pendingQueryIndex = 0;

								queryMessage = new ListMessage(MSG_AUTH);
								queryMessage.add(FIELD_AUTH_PLAYER, user);
								queryMessage.add(FIELD_AUTH_PASS, pass);
								queryFields = new ListMessage(FIELD_AUTH_NEWPLAYER);
								queryMessage.add(queryFields);

								nextQuery();
								break;
							}
						}

						break;
					}
					/**
					 * Notify only
					 * One ping and one ping only.
					 */
					case MSG_PING:
						ping();
						break;
					/**
					 * Notify only
					 * Server dumped you
					 */
					case MSG_QUIT:
						loaded = false;
						connected = false;
						socket.close();
						return;
					case MSG_QUERY: {
						EntityListMessage query = (EntityListMessage) dm;
						EntityListMessage response = new EntityListMessage(query.id, MSG_QUERY);

						// Not imjplemented yet, just return a dummy message and let the server deal with it
						// it will work like the login NEWPLAYER shit

						send(response);

						return;
					}
					case MSG_CLEAR_FLAGS:
						synchronized (map) {
							for (Entity e : map.getEntities()) {
								e.flags = 0;
							}
						}
						update();
						break;

					case MSG_INIT_MAP: {
						ListMessage lm = (ListMessage) dm;
						String rc = lm.getString(FIELD_MAP_ASSETLOCATION);
						int mapWidth =  lm.getInteger(FIELD_MAP_WIDTH);
						int mapHeight =  lm.getInteger(FIELD_MAP_HEIGHT);

						frame.setImages(rc);
						map = new ClientMap(mapWidth, mapHeight);
						break;
					}
					case MSG_UPDATE_MAP: {
						MapMessage mm = (MapMessage) dm;

						status.updateLocation(mm.x, mm.y);
						map.updateTiles(mm);
						update();
						frame.setStatus(status);
						//frame.info.setText("HP: " + inthp + "/" + intmaxhp + " MP: " + intsp + "/" + intmaxsp + " Loc: " + LocX + "/" + LocY);
						buyList.clear();
						reloadChoiceLookGetAttack();

						// Perhaps i need a status message to go from 'starting' to 'ready'
						loaded = true;
						break;
					}

					case MSG_CHAT:
						chat(((StringMessage) dm).value + "\n");
						break;
					case MSG_ADD_ENTITY:
						addEntity(new Entity((EntityUpdateMessage) dm));
						reloadChoiceLookGetAttack();
						update();
						break;
					case MSG_UPDATE_ENTITY: {
						// fixme: put on entity
						EntityListMessage el = (EntityListMessage) dm;
						Entity e = map.getEntity(el.id);
						if (e != null) {
							for (DuskMessage m : el.value) {
								switch (m.name) {
									case FIELD_ENTITY_FLAGS:
										e.flags = ((IntegerMessage) m).value;
										break;
									case FIELD_ENTITY_CONDITIONS:
										e.conditions = ((StringListMessage) m).value;
										break;
								}
							}
							update();
						} else {
							log("Error: set flag on unknown entity: " + el.id);
						}
						break;
					}
					case MSG_REMOVE_ENTITY:
						removeEntity(((EntityMessage) dm).id);
						reloadChoiceLookGetAttack();
						update();
						break;
					case MSG_MOVE: {
						EntityByteMessage mm = (EntityByteMessage) dm;

						switch (mm.value) {
							case 'n':
								handleMove(mm.id, 1, 0, -1, 0);
								break;
							case 's':
								handleMove(mm.id, 3, 0, 1, 1);
								break;
							case 'w':
								handleMove(mm.id, 5, -1, 0, 2);
								break;
							case 'e':
								handleMove(mm.id, 7, 1, 0, 3);
								break;
						}
						break;
					}
					case MSG_UPDATE_ACTIONS:
						frame.setActionList(((StringListMessage) dm).value);
						break;
					case MSG_INVENTORY:
						sellList = ((TransactionMessage) dm).items;

						// fixme: merge inventory
						frame.setSellList(sellList);
						worn.updateAvailable(sellList);
						frame.setDropList(worn.all);
						frame.setEquipment(worn);
						break;
					case MSG_EQUIPMENT:
						worn.updateWorn((ListMessage) dm);
						frame.setEquipment(worn);
						break;
					case MSG_INFO_PLAYER: {
						// FIXME: status will include all the other shit about the player below too
						status.updateStatus((ListMessage) dm);
						frame.setStatus(status);

						StringBuilder sb = new StringBuilder();
						// HACK: don't bother showing this shit yet
						ListMessage lm = (ListMessage) dm;
						for (DuskMessage d : lm.value) {
							sb.append(d).append('\n');
						}
						frame.setStats(sb.toString());
						break;
					}
					case MSG_INFO_PET: {
						// FIXME: Same data as above but for any pet attached
						System.out.println("Update pet ignored");
						break;
					}
					case MSG_UPDATE_MERCHANT:
						buyList = ((TransactionMessage) dm).items;
						frame.setBuyList(buyList);
						break;
					case MSG_EXIT_MERCHANT:
						frame.exitShop();
						buyList.clear();
						sellList.clear();
						break;
					case MSG_BATTLE_START: {
						ListMessage lm = (ListMessage) dm;

						battle("Start battling: " + lm.getString(FIELD_BATTLE_OPPONENT));
						break;
					}
					case MSG_BATTLE_UPDATE: {
						ListMessage lm = (ListMessage) dm;
						long toID = lm.getLong(FIELD_BATTLE_TARGET);
						int delta = -lm.getInteger(FIELD_BATTLE_DAMAGE);
						int newhp = lm.getInteger(FIELD_BATTLE_HP);
						int tothp = lm.getInteger(FIELD_BATTLE_MAXHP);
						long fromID = lm.getLong(FIELD_BATTLE_SOURCE);
						String how = lm.getString(FIELD_BATTLE_WHAT);

						System.out.printf("entity %d %s delta %d hp %d/%d\n",
								toID, how, delta, newhp, tothp);

						// TODO: I should have who from/to this damage is
						Entity f = findEntity(fromID);
						Entity e = findEntity(toID);
						if (e != null) {
							double xloc = map.mapToLocalX(e.locx),
									yloc = map.mapToLocalY(e.locy);

							// Get angle to entity from player
							double a = Math.PI;
							if (f != null) {
								a = Math.atan2(e.locy - f.locy, e.locx - f.locx);
							}

							frame.damageEntity(e, a, xloc * tileSize, yloc * tileSize, delta, how);
						} else {
							System.out.println("Unknown entity");
						}

						break;
					}
					case MSG_BATTLE_CHAT:
						battle(((StringMessage) dm).value + "\n");
						break;
					case MSG_VIEW_TEXT: {
						ListMessage lm = (ListMessage) dm;
						System.out.println("View: " + lm.getString(FIELD_TEXT_NAME, ""));
						System.out.println("Edit: " + lm.getByte(FIELD_TEXT_EDITABLE, (byte) 0));
						System.out.println("Text: " + lm.getString(FIELD_TEXT_TEXT, ""));
						break;
					}
				}
			} catch (ClassCastException e) {
				e.printStackTrace(System.out);
				// ignore this, protocol broken it should recover
			} catch (IOException e) {
				System.err.println("Error at run() with value " + incoming + " : " + e.toString());
				e.printStackTrace(System.out);

				log("Error at run() with value " + incoming + " : " + e.toString() + "\n");
				connected = false;
				return;
			} catch (Exception e) {
				e.printStackTrace(System.out);
				// ignore this, client broken, it might recover
			}
		}
		System.err.println("Error at run() with value " + incoming);
	}

	private void handleMove(long ID, int step, int dx, int dy, int dir) {
		Entity e = map.getEntity(ID);

		if (e == null) {
			System.out.println("move unknown entity: " + ID);
			return;
		}

		map.moveEntity(e, e.locx + dx, e.locy + dy);
		if (e.intStep != -1) {
			// Toggle through the 2 animations for movement
			if (e.intMoveDirection == dir) {
				e.intStep ^= 1;
			} else {
				e.intStep = step;
				e.intMoveDirection = dir;
			}
		}
		reloadChoiceLookGetAttack();
		// TODO: find out what this is for
		//if (addit) {
		//	thrGraphics.addEntityToMove(ent, dir);
		//}
		// HACK: Don't update the screen display if the user moves, attempted
		// fix at flicker-on-move stuff.
		// The server should always send an UpdateLocMap every time
		if (ID != status.id) {
			update();
		}
	}

	synchronized void nextQuery() {
		if (pendingQueries == null)
			return;

		if ((pendingQueryIndex < pendingQueries.value.size())) {
			ListMessage lm = (ListMessage) pendingQueries.value.get(pendingQueryIndex++);

			queryID = lm.name;
			frame.chooseRace(lm.getString(FIELD_QUERY_PROMPT), lm.getStringList(FIELD_QUERY_OPTIONS));
		} else {
			try {
				send(queryMessage);
			} catch (IOException ex) {
				Logger.getLogger(Dusk.class.getName()).log(Level.SEVERE, null, ex);
			}
		}
	}

	// This currently a generic async response to a list query
	// FIXME; rename
	public void chooseRace(String race) {
		queryFields.add(queryID, race);
		nextQuery();
	}

	public void reloadChoiceLookGetAttack() {
		final ArrayList<Entity> looks = new ArrayList<>();
		final ArrayList<Entity> gets = new ArrayList<>();
		final ArrayList<Entity> attacks = new ArrayList<>();

		synchronized (map) {
			for (Entity e : map.getEntities()) {
				if (status.canLook(e))
					looks.add(e);

				if (status.canTake(e))
					gets.add(e);

				if (status.canAttack(e))
					attacks.add(e);
			}
		}

		frame.setLookList(looks);
		frame.setAttackList(attacks);
		frame.setTakeList(gets);
	}

	public boolean isConnected() {
		return connected;
	}

	public boolean isLoaded() {
		return loaded;
	}

	public int getTileSize() {
		return tileSize;
	}

	/**
	 * Offset y to origin of displayed map
	 *
	 * @return
	 */
	public int getMapOffsetX() {
		return map.offx;
	}

	/**
	 * Offset y to origin of displayed map
	 *
	 * @return
	 */
	public int getMapOffsetY() {
		return map.offy;
	}

	public void userconnect() {
		//frame.frmConnect.show();
		//frame.frmConnect.setSize(350, 200);
		System.out.println("user ocnnect not implemented - quit and restart");
	}

	public void equipment() {
		frame.manageEquipment(worn);
	}

	public void merchant() {
		frame.enterShop("Merchant", buyList, sellList);
	}

	// these all do the same thing at the moment, but could allow
	// for alternative output for various things
	// FIXME: chat needs the source id as well
	public void chat(String txt) {
		frame.log(txt);
	}

	public void battle(String txt) {
		System.out.println("battle: " + txt);
		frame.log(txt);
	}

	public void log(String txt) {
		frame.log(txt);
	}

	public void logout() {
		try {
			if (connected) {
				command("quit");
			}
		} catch (Exception exc) {
		}
		try {
			socket.close();
		} catch (Exception exc) {
		}
		socket = null;
		connected = false;
	}

	public void quit() {
		try {
			if (connected) {
				command("quit");
			}
		} catch (Exception exc) {
		}
		try {
			socket.close();
		} catch (Exception exc) {
		}
		System.gc();
		if (blnApplet) {
			//appShell.destroy();
		} else {
			// FIXME: wrong!
			System.exit(0);
		}

	}

	//Display graphics
	public void update() {
		synchronized (map) {
			frame.updateMap(map);
		}
	}

	private void send(DuskMessage lm) throws IOException {
		//System.out.print("sending: ");
		//lm.format(System.out);
		lm.sendMessage(outstream);
	}

	private void docmd(String cmd) {
		try {
			send(new StringMessage(MSG_COMMAND, cmd));
		} catch (IOException ex) {
			// TODO: close connection here
			Logger.getLogger(Dusk.class.getName()).log(Level.SEVERE, null, ex);
		}
	}

	public void command(String what) {
		docmd(what);
	}

	public void command(String what, String... params) {
		StringBuilder sb = new StringBuilder(what);
		for (String s : params) {
			sb.append(' ');
			sb.append('"');
			sb.append(s);
			sb.append('"');
		}
		docmd(sb.toString());
	}

	public void move(Direction dir) {
		command(dir.cmd);
	}

	public void moveTo(int dx, int dy) {
		//Move to location
		try {
			command("goto " + dx + " " + dy);
		} catch (Exception e) {
			frame.log("Error in goto %d,%d: %s", dx, dy, e);
		}
	}

	public void buy(TransactionItem item, int quantity) {
		command("buy", String.valueOf(quantity), item.name);
	}

	public void sell(TransactionItem item, int quantity) {
		command("sell", String.valueOf(quantity), item.name);
	}

	private void ping() {
		command("notdead");
	}

	public void attack(Entity e) {
		command("a " + e.ID);
	}

	public void look(Entity e) {
		command("look " + e.ID);
	}

	public void take(Entity e) {
		command("get " + e.ID);
	}

	public void drop(String what) {
		command("drop", what);
	}

	public void wear(String what) {
		command("wear", what);
	}

	public void unwear(String what) {
		command("unwear", what);
	}
}
