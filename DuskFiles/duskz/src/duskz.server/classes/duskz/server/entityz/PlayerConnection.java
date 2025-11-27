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
import static duskz.protocol.DuskProtocol.MSG_AUTH;
import static duskz.protocol.DuskProtocol.MSG_COMMAND;
import static duskz.protocol.DuskProtocol.MSG_QUERY;
import duskz.protocol.EntityListMessage;
import duskz.protocol.ListMessage;
import duskz.server.BlockedIPException;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.IOException;
import java.net.Socket;
import java.net.SocketTimeoutException;
import java.util.HashMap;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;
import java.util.concurrent.LinkedBlockingDeque;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Wraps incomming/outgoing communications
 *
 * The receiver thread handles login and creates the player object.
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class PlayerConnection implements DuskProtocol {

	private final Game game;
	private final Socket socket;
	private final ReceiverThread receiver;
	private final SenderThread sender;
	boolean isStopped;
	Player player;

	public PlayerConnection(Game game, Socket socket) throws IOException {
		this.game = game;
		this.socket = socket;
		receiver = new ReceiverThread(socket);
		sender = new SenderThread(socket);
	}

	public void start() {
		receiver.start();
		sender.start();
	}

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

	void send(DuskMessage msg) {
		sender.send(msg);
	}

	void shutdown() {
		// Do I want to save the player here/
		System.out.println("shutting down player connection");

		try {
			// shutdown everything
			isStopped = true;
			sender.interrupt();
			receiver.interrupt();
			try {
				sender.join();
			} catch (InterruptedException x) {
			}
			socket.close();
		} catch (IOException ex) {
			Logger.getLogger(PlayerConnection.class.getName()).log(Level.SEVERE, null, ex);
		}
	}

	void abort() {
		// definitely no-save exit
		shutdown();
	}

	public class ReceiverThread extends Thread implements DuskProtocol {

		final private DataInputStream instream;

		public ReceiverThread(Socket socket) throws IOException {
			instream = new DataInputStream(new BufferedInputStream(socket.getInputStream()));
		}

		DuskMessage readMessage() throws IOException {
			DuskMessage msg;

			do {
				synchronized (instream) {
					msg = DuskMessage.receiveMessage(instream);
				}

				// Redirect queries to whomever is waiting for it
				if (msg.name == MSG_QUERY) {
					EntityListMessage qmsg = (EntityListMessage) msg;
					PendingQuery f = sender.getPendingQuery(qmsg.id);
					f.setResponse(qmsg);
				}
			} while (msg.name == MSG_QUERY);

			return msg;
		}
		final static int ASK_NEW_RACE = 0;

		private DuskMessage getRaceQuery() {
			ListMessage racem = new ListMessage(ASK_NEW_RACE);

			racem.add(FIELD_QUERY_PROMPT, "Choose race");
			racem.add(FIELD_QUERY_OPTIONS, game.getRaceNames());

			return racem;
		}

		private DuskMessage getNewPlayerInfo() {
			ListMessage np = new ListMessage(FIELD_AUTH_NEWPLAYER);
			np.add(getRaceQuery());

			return np;
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
			String race;

			// Check if we have the info we need to create the user - i.e. race so far
			if (np == null
					|| (race = np.getString(ASK_NEW_RACE, null)) == null
					|| game.getRace(race) == null) {
				newp = new ListMessage(FIELD_AUTH_NEWPLAYER);
				newp.add(getRaceQuery());
				res.add(newp);
				ok = false;
			}

			ok &= !game.playerExists(name);
			ok &= !game.petExists(name);

			return ok;
		}

		Player loadPlayer(String name, String password) throws IOException, BlockedIPException {
			Player player = new Player(game, PlayerConnection.this);

			try {
				player.load(new File(game.getRoot(), "players/default"));
			} catch (IOException x) {
			}

			player.load(new File(game.getRoot(), "players/" + name));

			return player;
		}

		Player createPlayer(String name, String password, ListMessage np) throws IOException, BlockedIPException {
			String race = np.getString(ASK_NEW_RACE, null);

			Player player = new Player(game, PlayerConnection.this);

			try {
				player.load(new File(game.getRoot(), "players/default"));
			} catch (IOException x) {
			}

			player.setProperty("name", name);
			// this will load the race
			player.setProperty("race", race);
			player.setProperty("password", password);

			if (player.race == null)
				throw new IOException("Unknown race");

			player.save(new File(game.getRoot(), "players/" + name));

			return player;
		}

		Player handleLogin() {
			String address = getAddress();

			// Handle auth state.
			try {
				while (true) {
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
								// Just send new player info
								res.add(-1L, FIELD_AUTH_RESULT, AUTH_LOGIN_INCOMPLETE);
								res.add(FIELD_AUTH_REASON, "Login failed.");
								res.add(getNewPlayerInfo());
							} else if (newp == null && game.playerExists(player)) {
								// Try normal login
								if (game.checkPassword(player, pass, address)) {
									return loadPlayer(player, pass);
								} else {
									res.add(-1L, FIELD_AUTH_RESULT, AUTH_LOGIN_FAILED);
									res.add(FIELD_AUTH_REASON, "Login failed.");
								}
							} else if (!game.isGoodName(player)) {
								// disallowed name
								res.add(-1L, FIELD_AUTH_RESULT, AUTH_LOGIN_FAILED);
								res.add(FIELD_AUTH_REASON, "Name is not allowed, try again.");
								res.add(getNewPlayerInfo());
							} else {
								System.out.println("? new player " + player);
								// Trying to create a player
								if (canCreate(player, newp, res)) {
									System.out.println("  creating player\n");
									return createPlayer(player, pass, newp);
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
							break;
						}
						default: // Anything else is a protocol error
							res.add(-1L, FIELD_AUTH_RESULT, AUTH_LOGIN_FAILED);
							res.add(FIELD_AUTH_REASON, "Unexpected message.");
							break;
					}

					sender.send(res);
				}
			} catch (BlockedIPException ex) {
				sender.send("There's already a player connected from your IP address.");
			} catch (IOException ex) {
				sender.send("IO Error: " + ex);
			} catch (ClassCastException ex) {
				sender.send("Loading error: " + ex);
			} catch (TooManyTriesException ex) {
				sender.send("Too many login failures, try again in an hour.");
			} catch (Exception ex) {
				sender.send("Unexpected error: " + ex);
				ex.printStackTrace();
			}
			abort();
			return null;
		}

		@Override
		public void run() {
			player = handleLogin();

			if (player != null) {
				ListMessage res = new ListMessage(MSG_AUTH);
				res.add(player.ID, FIELD_AUTH_RESULT, AUTH_LOGIN_OK);
				res.add(FIELD_AUTH_REASON, "Login ok.");
				player.send(res);

				setName("Player thread: " + player.name);
				sender.setName("Ouptut thread: " + player.name);

				// log successful connection, etc.
				//
				player.startup();

				// Do this afterwards, as it then goes into the game update loop
				game.registerPlayer(player);

				while (!isStopped) {
					try {
						DuskMessage dm = readMessage();

						switch (dm.name) {
							case MSG_COMMAND: {
								DuskMessage.StringMessage sm = (DuskMessage.StringMessage) dm;

								player.parseCommand(sm.value);
								break;
							}
							default:
								// anything else is bogus
								System.out.println("Unexpected server command (ignored):");
								dm.format(System.out);
						}
					} catch (SocketTimeoutException e) {
						sender.send(DuskMessage.create(MSG_PING));
					} catch (Exception e) {
						//game.log.printError("LivingThing.run():" + name + " disconnected", e);
						e.printStackTrace();
						player.logout();
						return;
					}
				}
				shutdown();
			}
		}
	}

	public class SenderThread extends Thread implements DuskProtocol {

		private DataOutputStream outstream;
		long qid;
		final HashMap<Long, PendingQuery> pendingQuestions = new HashMap<>();
		final public LinkedBlockingDeque<DuskMessage> messageQueue = new LinkedBlockingDeque<>();

		public SenderThread(Socket socket) throws IOException {
			outstream = new DataOutputStream(new BufferedOutputStream(socket.getOutputStream()));
		}

		synchronized long getQuestionID() {
			return qid++;
		}

		PendingQuery getPendingQuery(long id) {
			synchronized (pendingQuestions) {
				return pendingQuestions.get(id);
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
			if (Thread.currentThread() == this) {
				do {
					receiver.readMessage();
				} while (pq.response == null);
			}

			return pq;
		}

		public void send(DuskMessage dm) {
			messageQueue.add(dm);
		}

		public void send(String msg) {
			messageQueue.add(new DuskMessage.StringMessage(MSG_CHAT, msg));
		}

		public void run() {
			DuskMessage msg;

			while (!isStopped) {
				try {
					msg = messageQueue.take();

					// low level protocol dump
					msg.format(System.out);

					try {
						msg.sendMessage(outstream);
						outstream.flush();
					} catch (IOException e) {
						e.printStackTrace();
						player.logout();
					}
				} catch (InterruptedException ex) {
					//Logger.getLogger(SendThread.class.getName()).log(Level.SEVERE, null, ex);
				}
			}
		}
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
}
