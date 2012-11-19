package in.groan.dusk.object.entity;

import in.groan.dusk.DuskEngine;
import in.groan.dusk.db.Accounts;
import in.groan.dusk.db.DatabaseException;
import in.groan.dusk.net.SendThread;
import in.groan.dusk.util.FifoQueue;
import in.groan.dusk.util.Log;
import in.groan.dusk.util.Statistics;

import java.io.*;
import java.sql.SQLException;
import java.util.Date;
import java.util.Vector;
import java.util.Iterator;
import java.net.Socket;

public class Player extends Entity {
	//Socket connection
	Socket SCK_CONN;
	BufferedReader BUF_SCK_IN;
	DataOutputStream OUT;
	FifoQueue QUE_MSG;
	Thread THR_CONN;
	Thread THR_SEND;

	int CHAR_ID 				= -1; //the individual id for this character, completely unique
	int ACCOUNT_ID 				= -1; //the owner of this character's account number 10000+
	int CHAR_NUM 				= -1; //Must be a value between 1 and 9 (9 being the default maximum)
	
	public int SKILL_POINTS		= 0;
	public int STAT_POINTS 		= 0;
	
	public int PARTY_ID 		= -1;
	public int GUILD_ID 		= -1;
	
	public int HAIR_ID 			= 0;
	public int HAIR_COLOR_ID	= 0;
	public int MAIN_COLOR_ID 	= 0;
	
	public int WEAPON_ID 		= -1;
	public int SHIELD_ID 		= -1;
	public int HEAD_TOP_ID 		= -1;
	public int HEAD_MID_ID 		= -1;
	public int HEAD_BOTTOM_ID 	= -1;
	public int ROBE_ID 			= -1;
	
	public String LAST_MAP_ID   = "map1.tmx";
	public int LAST_X			= 1;
	public int LAST_Y			= 1;
	
	public String SAVE_MAP_ID   = "map1.tmx";
	public int SAVE_X			= 1;
	public int SAVE_Y			= 1;
	
	public Player(Socket inSocket, DuskEngine inEngine) {
		try {
			QUE_MSG = new FifoQueue();
			SendThread st = new SendThread(this);
			THR_SEND = new Thread(st);
			THR_SEND.start();
			bytObjType = (byte)0;
			Type = 0;
			Game = inEngine;
			ID = Game.getID();
			SCK_CONN = inSocket;
			SCK_CONN.setSoTimeout(600000); //10 minute timeout
			SCK_CONN.setSoLinger(false,0); //Do not linger on disconnect
			BUF_SCK_IN = new BufferedReader(new InputStreamReader(SCK_CONN.getInputStream()));
			OUT = new DataOutputStream(SCK_CONN.getOutputStream());
			Game.LOG.printMessage(Log.INFO, SCK_CONN.toString());
			BATTLE = null;
			BLN_SLEEP = false;
			if (Game.MAX_CONN != 0 && Game.vctSockets.size() >= Game.MAX_CONN) {
				chatMessage("Sorry, the server has reached it's connection limit. Try again later.\n");
				SCK_CONN.close();
				return;
			}
			// Game is shutting down
			if (Game.BLN_SHUTDOWN) {
				chatMessage("Sorry, the server is not accepting new connections. It is either being shutdown or worked on.  Try again later.\n");
				SCK_CONN.close();
				return;
			}
			if (!Game.isGoodIP(SCK_CONN.getInetAddress().toString()))
			{
				chatMessage("Connections from your machine are no longer being accepted.\n");
				return;
			}
			// IP Filter
			if (Game.BLN_IPF) {
				for (int i = 0;i < Game.vctSockets.size();i++) {
					String IP = ((Entity)Game.vctSockets.elementAt(i)).SCK_CONN.getInetAddress().toString();
					if (IP.equalsIgnoreCase(SCK_CONN.getInetAddress().toString())) {
		    			chatMessage("There's already a player connected from your IP address.\n");
						closeNosavePlayer();
						return;
					}
				}
			}
			// End IPF
		} catch(Exception e) {
			Game.LOG.printError("Player():Creating a new player object", e);	
		}
	}
	
	public void setIDs(int act_id, int char_id, int char_num) {
		ACCOUNT_ID = act_id;
		CHAR_ID = char_id;
		CHAR_NUM = char_num;
		
	}
	
	protected void loadCharacter() {
		try {
			Game.db.getCharacterInfo(CHAR_ID, this);
		} catch (SQLException e) {
			e.printStackTrace();
		} catch (DatabaseException e) {
			e.printStackTrace();
		}
	}
	
	public void setStats(Statistics st) {
		stats = st;
	}

}