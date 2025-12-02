import java.io.*;
import java.util.Date;
import java.util.Vector;
import java.util.Iterator;
import java.net.Socket;

public class Player extends LivingThing
{
	//Socket connection
	Socket sckConnection;
	BufferedReader bfrSocketIn;
	DataOutputStream stmOut;
	FifoQueue qMessage;
	Thread thrConnection,
			thrSend;

	/*
	new Player
	*/
	public Player(Socket inSocket, DuskEngine inEngine)
	{
		try
		{
			qMessage = new FifoQueue();
			SendThread st = new SendThread(this);
			thrSend = new Thread(st);
			thrSend.start();
			bytObjType = (byte)0;
			Type = 0;
			engGame = inEngine;
			ID = engGame.getID();
			sckConnection = inSocket;
			sckConnection.setSoTimeout(600000); //10 minute timeout
			sckConnection.setSoLinger(false,0); //Do not linger on disconnect
			bfrSocketIn = new BufferedReader(new InputStreamReader(sckConnection.getInputStream()));
			stmOut = new DataOutputStream(sckConnection.getOutputStream());
			engGame.log.printMessage(Log.INFO, sckConnection.toString());
			batBattle = null;
			blnSleep = false;
			if (engGame.maxconnections != 0 && engGame.vctSockets.size() >= engGame.maxconnections)
			{
				chatMessage("Sorry, the server has reached it's connection limit. Try again later.");
				sckConnection.close();
				return;
			}
			// Game is shutting down
			if (engGame.blnShuttingDown)
			{
				chatMessage("Sorry, the server is not accepting new connections. It is either being shutdown or worked on.  Try again later.");
				sckConnection.close();
				return;
			}
			if (!engGame.isGoodIP(sckConnection.getInetAddress().toString()))
			{
				chatMessage("Connections from your machine are no longer being accepted.");
				return;
			}
			// IP Filter
			if (engGame.blnIPF) 
			{
				for (int i=0;i<engGame.vctSockets.size();i++)
				{
					String IP = ((LivingThing)engGame.vctSockets.elementAt(i)).sckConnection.getInetAddress().toString();
					if (IP.equalsIgnoreCase(sckConnection.getInetAddress().toString()))
					{
		    			chatMessage("There's already a player connected from your IP address.");
						closeNosavePlayer();
						return;
					}
				}
			}
			// End IPF
		}catch(Exception e)
		{
			engGame.log.printError("Player():Creating a new player object", e);	
		}
	}

}