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
 * Special thanks to:
 * Randall Leeds
 * Vittorio Alberto Floris
 * Ian Macphail
 *
 * Changes
 * Michael Zucchi Mar-2013 - changed to new backend, implemented
 * different clock timing.
 */
package duskz.server.entityz;

import duskz.server.Log;
import java.io.File;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * This is the main entry point.
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class GameServer {

	// ms per tick: TODO: move into game prefs
	int tickRate = 100;
	boolean cancelled = false;
	ServerSocket serverSocket;
	Socket socket;
	Game game;
	MasterClock clockThread;
	ConnectionManager connectionThread;

	static void usage(String why) {
		System.err.println();
		System.err.println("Usage: gameserver [ path-to-game ]");
		System.err.println();
		System.err.println(" Game may also be started from within a game directory.");
		System.err.println();
		System.err.println(why);
	}

	/**
	 * Creates a new DuskServer object;
	 */
	public static void main(String args[]) {
		// TODO: parse arguments for game data location
		File path = null;

		for (int i = 0; i < args.length; i++) {
			String cmd = args[i];

			if (cmd.startsWith("-")) {
				// some args
			} else {
				path = new File(cmd);
			}
		}

		if (path == null) {
			path = new File(".");

			if (!new File(path, "config").exists()) {
				usage("No game found");
				return;
			}
		}

		GameServer server = new GameServer();

		server.start(path);
	}

	private void abort() {
		game.log.printf(Log.ALWAYS, "Aborted shutdown.");
		System.exit(0);
	}

	protected void shutdown() {
		try {
			cancelled = true;
			clockThread.interrupt();
			connectionThread.interrupt();
			clockThread.join();
			connectionThread.join();
		} catch (InterruptedException ex) {
			Logger.getLogger(GameServer.class.getName()).log(Level.SEVERE, null, ex);
		}
	}

	/**
	 * Creates a DuskEngine object, then a ServerSocket object, then
	 * starts a new thread to accept incoming connections.
	 */
	public GameServer() {
		// game location?
		game = new Game();
		clockThread = new MasterClock();
		connectionThread = new ConnectionManager();
	}

	public void start(File path) {
		System.out.println("Initialising game at: " + path);

		try {
			game.init(path);
			serverSocket = new ServerSocket(game.port, 25);
		} catch (Exception e) {
			game.log.printf(e, "Server init failed", e);
			usage(e.getLocalizedMessage());
			e.printStackTrace(System.err);
			abort();
		}

		connectionThread.start();
		clockThread.start();
	}

	/**
	 * Accepts incoming connections.
	 */
	/**
	 * Accepts connections.
	 * TODO: handle ip blocking, throttling etc. here
	 * rather than in playerconnection
	 */
	class ConnectionManager extends Thread {

		public void run() {
			System.out.println("Accepting connections on port " + game.port + ".");

			while (true) {
				try {
					Socket accept = serverSocket.accept();
					accept.setSoTimeout(30000);

					PlayerConnection pc = new PlayerConnection(game, accept);

					pc.start();
				} catch (Exception e) {
					game.log.printf(e, "Error accepting connection", e);
					abort();
					return;
				}
			}
		}
	}

	class MasterClock extends Thread {

		int tick = 0;

		@Override
		public void run() {
			long start = System.currentTimeMillis() + 1000;

			System.out.println("Starting game clock, " + tickRate + "ms per tock.");

			while (!cancelled) {
				try {
					long target = start + tick * tickRate;
					long now = System.currentTimeMillis();
					long delay = (target - now);

					if (delay > 0) {
						sleep(delay);
					} else if (delay < -500) {
						System.out.println("warning: clock failing to keep up, delay: " + (-delay));
					}

					game.gameTick(tick);

					// battles?

				} catch (InterruptedException ex) {
				} catch (Exception ex) {
					ex.printStackTrace();
				} finally {
					tick += 1;
				}
			}
		}
	}
}
