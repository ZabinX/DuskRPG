/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk. 

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or 
remove this license, and accompany it with all redistributions.
*/

/*
Special thanks to:
Randall Leeds
Vittorio Alberto Floris
Ian Macphail
*/

import java.io.*;
import java.net.Socket;
import java.net.ServerSocket;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;


/**
*DuskServer contains the main method for the game.
*It handles incoming network connections and passes
*them to DuskEngine.
*
*@author Tom Weingarten
*/
public class DuskServer implements Runnable
{
	ServerSocket srvServer;
	Socket sckStore;
	DuskEngine engGame=null;
	TrackerThread tracker=null;
	SaveThread savThread=null;
	TickThread ticks=null;
	Thread thrEngine=null,
			thrTracker=null,
			thrSave=null,
			thrTicks=null;
	
	/**
	*Creates a new DuskServer object;
	*/
	public static void main(String args[])
	{
		System.out.println("Loading...");
	    DuskServer MainServer = new DuskServer();
		Thread thrAccept = new Thread(MainServer);
		thrAccept.setName("DuskServer");
		System.out.println("Ready for connections.");
		thrAccept.start();
	}
	
	/**
	*Creates a DuskEngine object, then a ServerSocket object, then
	*starts a new thread to accept incoming connections.
	*/
	public DuskServer()
	{
		engGame = new DuskEngine();
		thrEngine = new Thread(engGame);
		thrEngine.setName("DuskEngine");
		thrEngine.start();
		if (engGame.tracker)
		{
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

		try
		{
			// Start WebSocket Server
			int wsPort = engGame.port + 1; // e.g., 7475
			DuskWebSocketServer wsServer = new DuskWebSocketServer(wsPort, engGame);
			wsServer.start();
			System.out.println("WebSocket server started on port: " + wsPort);

			// Start regular TCP Server
			srvServer = new ServerSocket(engGame.port,25);
		}catch (Exception e)
		{
			engGame.log.printError("DuskServer():Creating server socket", e);
			engGame.log.printMessage(Log.ALWAYS, "Shutting Down");
			System.exit(0);
		}
	}
	
	/**
	*Accepts incoming TCP connections.
	*/
	public void run()
	{
		LivingThing thnStore=null;
		while(true)
		{
			try
			{
				sckStore = srvServer.accept();
				sckStore.setSoTimeout(30000);
				thnStore = new LivingThing(sckStore,engGame);
				Thread thrLivingThing = new Thread(thnStore);
				thrLivingThing.setName("LivingThing(new)");
				thrLivingThing.start();
			}catch (Exception e)
			{
				engGame.log.printError("DuskServer.run()", e);
				engGame.log.printMessage(Log.ALWAYS, "Shutting Down");
				System.exit(0);
				return;
			}
		}
	}

    /**
     * Inner class to handle WebSocket connections.
     */
    private static class DuskWebSocketServer extends WebSocketServer {

        private final DuskEngine engGame;
        private final Map<WebSocket, WebSocketClient> clientMap;

        public DuskWebSocketServer(int port, DuskEngine engGame) {
            super(new InetSocketAddress(port));
            this.engGame = engGame;
            this.clientMap = Collections.synchronizedMap(new HashMap<>());
        }

        @Override
        public void onOpen(WebSocket conn, ClientHandshake handshake) {
            System.out.println("WebSocket connection opened: " + conn.getRemoteSocketAddress());
            try {
                WebSocketClient clientSocket = new WebSocketClient(conn);
                clientMap.put(conn, clientSocket);

                LivingThing thnStore = new LivingThing(clientSocket, engGame);
                Thread thrLivingThing = new Thread(thnStore);
                thrLivingThing.setName("LivingThing(WebSocket)");
                thrLivingThing.start();
            } catch (IOException e) {
                engGame.log.printError("DuskWebSocketServer.onOpen()", e);
                conn.close();
            }
        }

        @Override
        public void onClose(WebSocket conn, int code, String reason, boolean remote) {
            System.out.println("WebSocket connection closed: " + conn.getRemoteSocketAddress() + " with code " + code + " reason " + reason);
            WebSocketClient clientSocket = clientMap.remove(conn);
            if (clientSocket != null) {
                clientSocket.close();
            }
        }

        @Override
        public void onMessage(WebSocket conn, String message) {
            // The game protocol uses binary data, not text messages.
            // We can ignore this or log it.
            System.out.println("Received unexpected text message from " + conn.getRemoteSocketAddress() + ": " + message);
        }

        @Override
        public void onMessage(WebSocket conn, ByteBuffer message) {
            WebSocketClient clientSocket = clientMap.get(conn);
            if (clientSocket != null) {
                clientSocket.onMessage(message);
            }
        }

        @Override
        public void onError(WebSocket conn, Exception ex) {
            engGame.log.printError("DuskWebSocketServer.onError()", ex);
            if (conn != null) {
                // close connection
                conn.close();
            }
        }

        @Override
        public void onStart() {
            System.out.println("WebSocket server internal start successful.");
        }
    }
}

