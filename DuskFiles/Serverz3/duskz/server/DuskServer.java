/*
 * This file is part of DuskZ, a graphical mud engine.
 *
 * Copyright (C) 2000 Tom Weingarten <captaint@home.com>
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
 */
package duskz.server;

import duskz.server.entity.LivingThing;
import java.net.Socket;
import java.net.ServerSocket;

/**
 * DuskServer contains the main method for the game.
 * It handles incoming network connections and passes
 * them to DuskEngine.
 *
 * @author Tom Weingarten
 */
public class DuskServer implements Runnable {

	ServerSocket srvServer;
	Socket sckStore;
	DuskEngine engGame = null;
	TrackerThread tracker = null;
	SaveThread savThread = null;
	TickThread ticks = null;
	Thread thrEngine = null,
			thrTracker = null,
			thrSave = null,
			thrTicks = null;

	/**
	 * Creates a new DuskServer object;
	 */
	public static void main(String args[]) {
		System.out.println("Loading...");
		DuskServer MainServer = new DuskServer();
		Thread thrAccept = new Thread(MainServer);
		thrAccept.setName("DuskServer");
		System.out.println("Ready for connections.");
		thrAccept.start();
	}

	/**
	 * Creates a DuskEngine object, then a ServerSocket object, then
	 * starts a new thread to accept incoming connections.
	 */
	public DuskServer() {
		engGame = new DuskEngine();
		thrEngine = new Thread(engGame);
		thrEngine.setName("DuskEngine");
		thrEngine.start();
		if (engGame.tracker) {
			tracker = new TrackerThread(engGame);
			thrTracker = new Thread(tracker);
			thrTracker.setName("Tracker");
			thrTracker.start();
		}
		savThread = new SaveThread(engGame);
		thrSave = new Thread(savThread);
		thrSave.setName("Save");
		thrSave.start();
		ticks = new TickThread(engGame);
		thrTicks = new Thread(ticks);
		thrTicks.setName("Ticks");
		thrTicks.start();

		try {
			srvServer = new ServerSocket(engGame.port, 25);
		} catch (Exception e) {
			engGame.log.printError("DuskServer():Creating server socket", e);
			engGame.log.printMessage(Log.ALWAYS, "Shutting Down");
			System.exit(0);
		}
	}

	/**
	 * Accepts incoming connections.
	 */
	public void run() {
		LivingThing thnStore = null;
		while (true) {
			try {
				sckStore = srvServer.accept();
				sckStore.setSoTimeout(30000);

				thnStore = new LivingThing(sckStore, engGame);
				Thread thrLivingThing = new Thread(thnStore);
				thrLivingThing.setName("LivingThing(new)");
				thrLivingThing.start();
			} catch (Exception e) {
				engGame.log.printError("DuskServer.run()", e);
				engGame.log.printMessage(Log.ALWAYS, "Shutting Down");
				System.exit(0);
				return;
			}
		}
	}
}
