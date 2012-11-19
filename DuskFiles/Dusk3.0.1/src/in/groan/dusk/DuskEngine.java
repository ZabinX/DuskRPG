/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk. 

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or 
remove this license, and accompany it with all redistributions.
*/

package in.groan.dusk;

import in.groan.dusk.action.Battle;
import in.groan.dusk.action.Sign;
import in.groan.dusk.action.SpellGroup;
import in.groan.dusk.db.Accounts;
import in.groan.dusk.db.DatabaseException;
import in.groan.dusk.object.*;
import in.groan.dusk.object.entity.Entity;
import in.groan.dusk.object.entity.Job;
import in.groan.dusk.object.entity.Mob;
import in.groan.dusk.object.entity.Race;
import in.groan.dusk.object.itm.Item;
import in.groan.dusk.util.Log;
import in.groan.dusk.util.XMLMapLoader;

import java.io.*;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Vector;
import java.util.Iterator;
import java.util.StringTokenizer;
import java.util.Date;
/**
*DuskEngine is the center of the Dusk game.
*
*@author Tom Weingarten
*/
public class DuskEngine implements Runnable, Constants {
	//Database Access
	public Accounts db;
	//Logger
	public static long FLOOD_LIMIT 			= 1000;	//default 1000 milliseconds(1 second) btw messages
	public static int LOG_LVL 				= Log.DEBUG;
	//CAN SEE LIVING THINGS Y/N
	public static Script SCR_SEE_LT			= null;
	//CAN WALK THROUGH THINGS Y/N
	public static Script SCR_IGNORE_COL 	= null;
	public static Script SCR_CAN_ATK		= null;
	public static Script SCR_ONSTART		= null;
	public static Script SCR_ONDEATH		= null;
	public static Script SCR_ONLOGOUT		= null;
	public Log LOG;

	public static String SERVER_NAME 		= "Dusk 3.0.1";
	public static String WEBSITE 			= "http://pretend.in";
	public static String RC_LOC           	= "/duskrc";
	public static String RC_NAME			= "/rc";
	public static String LOG_FILE			= null;
	public static String MUSIC_ADDRESS		= "/audio";
	
	public int BATTLE_SOUND = -1;
	
	public Date DATE_START= new Date(System.currentTimeMillis());
	
	XMLMapLoader mapLoader;
	
	public int MapLayers;
	public int MapRows;
	public int MapColumns;
	public short shrMap[][][];
	public short shrMapOwnerPrivs[][];
	public int intMapOwnerID[][];
	
	public DuskObject objEntities[][];
	
	public Vector<Entity> vctSockets;
	public Vector<Merchant> vctMerchants;
	public Vector<Entity> vctMobs;
	public Vector<Item> vctItems;
	public Vector<Battle> vctBattles;
    public Vector<Sign> vctSigns;
	public Vector<Entity> vctPets;
    public Vector<Prop> vctProps;
	public Vector<Script> vctTiles;
	public Vector<Script> vctTileActions;
	public Vector<Script> vctSeeTiles;
	public Vector<Faction> vctFactions;
	public Vector<SpellGroup> vctSpellGroups;
	public Vector<String> vctBannedIP;
	public Vector<Entity> vctCheckConditions;
	
	public HashMap<Integer, Job> vctJobs = new HashMap<Integer, Job>();
	public HashMap<Integer, Race> vctRaces = new HashMap<Integer, Race>();
	
	VariableSet varVariables;
	public VariableSet varIP;
	
	private long ID	= 0;
	//Booleans
	public boolean BLN_LOS			= false;
	public boolean BLN_AI			= false;
	public boolean BLN_IPF			= false;
	public boolean BLN_TRACKER		= true;
	public boolean BLN_SAVING	    = false;
	public boolean BLN_SHUTDOWN      = false;
	//Map Booleans
	public boolean BLN_VAR_CHANGE 	= false;
	public boolean BLN_MAP_CHANGE 	= false;
	public boolean BLN_MOB_CHANGE   = false;
	public boolean BLN_SIGN_CHANGE  = false;
	public boolean BLN_MERCH_CHANGE = false;
	public boolean BLN_PROP_CHANGE	= false;
	
	public DuskEngine() {
		mapLoader = new XMLMapLoader();
		db = new Accounts(this);
		RandomAccessFile rafFile = null;
		vctSockets = new Vector<Entity>(0,10);
		vctItems = new Vector<Item>(0,10);
		vctMobs = new Vector<Entity>(0,10);
		vctSigns = new Vector<Sign>(0,10);
		vctMerchants = new Vector<Merchant>(0,10);
		vctBattles = new Vector<Battle>(0,10);
		vctPets = new Vector<Entity>(0,10);
		vctProps = new Vector<Prop>(0,10);
		vctTiles = new Vector<Script>(0,1);
		vctTileActions = new Vector<Script>(0,1);
		vctSeeTiles = new Vector<Script>(0,1);
		vctFactions = new Vector<Faction>(0,5);
		vctSpellGroups = new Vector<SpellGroup>(0,1);
		vctBannedIP = new Vector<String>(0,1);
		vctCheckConditions = new Vector<Entity>(0,5);
		
		varVariables = new VariableSet();
		varIP = new VariableSet();
		LOG = new Log(System.out);
		
		try {
			int i = 0, i2 = 0;
		    String strStore;
		    
		    //Load Prefs
			loadPrefs();
			
			//Load Races
			loadRaces();
			LOG.printMessage(Log.INFO, "Loaded " + vctRaces.size() + " races!");
			
			//Load Jobs
			loadJobs();
			LOG.printMessage(Log.INFO, "Loaded " + vctJobs.size() + " jobs!");
			
			// Load Map
			shrMap = mapLoader.getMap();
			LOG.printMessage(Log.INFO,"Map Loaded...");

			// Loading Map tile priviledges
			File mapprivs = new File("shortmap.privs");
			if (mapprivs.exists()) {
				rafFile = new RandomAccessFile("shortmap.privs", "r");
				LOG.printMessage(Log.INFO,"Loading Map Tile Privs...");
		    	int PrivsColumns = rafFile.readInt();
		    	int PrivsRows = rafFile.readInt();
				if (PrivsColumns != MapColumns || PrivsRows != MapRows) {
					LOG.printMessage(Log.ERROR,"Map privs array size ("+PrivsColumns + "/" + PrivsRows+") does not match map size ("+MapColumns + "/" + MapRows+")");
				}
				LOG.printMessage(Log.ALWAYS,PrivsColumns + "/" + PrivsRows);
				shrMapOwnerPrivs = new short[PrivsColumns][PrivsRows];
		    	for (i=0;i<PrivsColumns;i++) {
		    	    for (i2=0;i2<PrivsRows;i2++) {
		    	        shrMapOwnerPrivs[i][i2] = rafFile.readShort();
		    	    }
		    	}
		    	rafFile.close();
			}
		    		    
			// Loading Map tile ownership
			//File mapowners = new File("shortmap.owner");
			//File ownerlist = new File("tile_owner_list");
					    		    
			// Load Merchants
/**		    try {
		    rafFile = new RandomAccessFile("merchants", "r");
		    Merchant mrcStore;
			LOG.printMessage(Log.INFO,"Loading Merchants...");
			strStore = rafFile.readLine();
			while (!(strStore == null || strStore.equals(""))) {
				mrcStore = new Merchant(this);
				mrcStore.vctItems = new Vector(0);
				mrcStore.intLocX = Integer.parseInt(strStore);
				mrcStore.intLocY = Integer.parseInt(rafFile.readLine());
				LOG.printMessage(Log.VERBOSE,"Merchant("+mrcStore.intLocX+","+mrcStore.intLocY+")");
				strStore = rafFile.readLine();
				while (strStore != null && !strStore.equals("") && !strStore.equalsIgnoreCase("end"))
				{
					LOG.printMessage(Log.DEBUG,"\t"+strStore);
					mrcStore.vctItems.addElement(strStore);
					strStore = rafFile.readLine();
				}
				if (mrcStore.intLocX > MapColumns || mrcStore.intLocY > MapRows
					|| mrcStore.intLocX < 0 || mrcStore.intLocY < 0)
				{
					LOG.printMessage(Log.VERBOSE,"Previous merchant is off of the map, ignoring");
					BLN_MERCH_CHANGE = true;
				} else {
					vctMerchants.addElement(mrcStore);
					addDuskObject(mrcStore);
				}
				strStore = rafFile.readLine();
			}
			} catch (Exception e) {
				LOG.printError("DuskEngine():While loading merchants", e);
			}
			rafFile.close();
*/
			// Load Mobs
			Entity thnStore;
			rafFile = new RandomAccessFile("mobs", "r");
			LOG.printMessage(Log.INFO,"Loading Mobs...");
			strStore = rafFile.readLine();
			while (strStore !=null) {
				if (strStore.equals("")) {
					break;
				}
				LOG.printMessage(Log.VERBOSE,strStore);
				try {
					thnStore = new Mob(strStore,
										Integer.parseInt(rafFile.readLine()),
										Integer.parseInt(rafFile.readLine()),
										Integer.parseInt(rafFile.readLine()),
										this
										);
					if (thnStore.intLocX > MapColumns || thnStore.intLocY > MapRows
						|| thnStore.intLocX < 0 || thnStore.intLocY < 0)
					{
						LOG.printMessage(Log.VERBOSE,"Previous mob is off of the map, ignoring");
						BLN_MOB_CHANGE = true;
					} else {
						vctMobs.addElement(thnStore);
						addDuskObject(thnStore);
					}
				} catch(Exception e) {
					LOG.printError("DuskEngine():While loading mobs", e);
				}
			}
			strStore = rafFile.readLine();

			rafFile.close();

			// Load signs
			Sign sgnStore;
			rafFile = new RandomAccessFile("signs", "r");
			LOG.printMessage(Log.INFO,"Loading Signs...");
			strStore = rafFile.readLine();
			while (!(strStore == null || strStore.equals(""))) {
				LOG.printMessage(Log.VERBOSE,strStore);
				sgnStore = new Sign("sign",strStore,Integer.parseInt(rafFile.readLine()),Integer.parseInt(rafFile.readLine()),getID());
				if (sgnStore.intLocX > MapColumns || sgnStore.intLocY > MapRows
					|| sgnStore.intLocX < 0 || sgnStore.intLocY < 0) {
					LOG.printMessage(Log.VERBOSE,"Previous sign is off of the map, ignoring");
					BLN_SIGN_CHANGE = true;
				} else {
					vctSigns.addElement(sgnStore);
					addDuskObject(sgnStore);
				}
				strStore = rafFile.readLine();
			}
			rafFile.close();

			// Load props
			Prop prpStore;
			rafFile = new RandomAccessFile("props","r");
			LOG.printMessage(Log.INFO,"Loading Props...");
			strStore = rafFile.readLine();
			while (!(strStore == null || strStore.equals("")))
			{
				LOG.printMessage(Log.VERBOSE,strStore);
				prpStore = getProp(strStore);
				if (prpStore != null)
				{
					prpStore.intLocX = Integer.parseInt(rafFile.readLine());
					prpStore.intLocY = Integer.parseInt(rafFile.readLine());
					if (prpStore.intLocX > MapColumns || prpStore.intLocY > MapRows
						|| prpStore.intLocX < 0 || prpStore.intLocY < 0)
					{
						LOG.printMessage(Log.VERBOSE,"Previous prop is off of the map, ignoring");
						BLN_PROP_CHANGE = true;
					} else {
						vctProps.addElement(prpStore);
						addDuskObject(prpStore);
					}
				}
				strStore = rafFile.readLine();
			}
			rafFile.close();

			// Load global variables
			String strVarName;
			int intType;
			String strObject;
			double dblObject;
			rafFile = new RandomAccessFile("globals", "r");
			LOG.printMessage(Log.INFO,"Loading Global Variables...");
			strVarName = rafFile.readLine();
			while (!(strVarName == null || strVarName.equals("")))
			{
				intType = Integer.parseInt(rafFile.readLine());
				switch (intType) {
					case 0: {
						dblObject = (double)Double.parseDouble(rafFile.readLine());
						varVariables.addVariable(strVarName, dblObject);
						LOG.printMessage(Log.VERBOSE,strVarName+" = "+dblObject);
						break;
					}
					case 1: {
						strObject = rafFile.readLine();
						varVariables.addVariable(strVarName, strObject);
						LOG.printMessage(Log.VERBOSE,strVarName+" = '"+strObject+"'");
						break;
					}
				}
				strVarName = rafFile.readLine();
			}
			rafFile.close();
			
			//Start onBoot script
			try {
				Script scrOnBoot = new Script("conf/onBoot",this,true);
				scrOnBoot.runScript();
				scrOnBoot.close();
				LOG.printMessage(Log.INFO,"Ran onBoot script.");
			} catch(Exception e) {
				LOG.printError("DuskEngine():Failed to run onBoot script, maybe it doesn't exist? (Not a fatal error)", e);
				LOG.printMessage(Log.ALWAYS, "To create an onBoot script, type \"view conf onBoot\" in game as a high or master god.");
			}
		} catch(Exception e) {
			LOG.printError("DuskEngine()", e);
		}
	}

	/**
	 * 
	 */
	private void loadJobs() {
		try {
			for(int j = JOB_WARRIOR; j < JOB_ID_MAX; j++) {
				db.getJobInfo(j);
			}
		} catch (SQLException e) {
			LOG.printError("Error loading jobs.", e);
		} catch (DatabaseException e) {
			LOG.printError("Error loading jobs.", e);
		}
	}

	private void loadRaces() {		
		try {
			db.getRaceInfo(RACE_HUMAN);
			db.getRaceInfo(RACE_VARTAN);
			db.getRaceInfo(RACE_METHUSULA);
			db.getRaceInfo(RACE_URUK);
			db.getRaceInfo(RACE_ELVEN);
			db.getRaceInfo(RACE_UMBRA);
		} catch (SQLException e) {
			LOG.printError("Error loading races.", e);
		} catch (DatabaseException e) {
			LOG.printError("Error loading races.", e);
		}
	}

	public boolean isGoodIP(String strIP) {
		RandomAccessFile rafFile = null;
		try {
			String strBlockedIP;
			String strLowerCaseIP = strIP.toLowerCase();
			rafFile = new RandomAccessFile("conf/blockedIP", "r");
			strBlockedIP = rafFile.readLine();
			while (strBlockedIP != null)
			{
				if (strLowerCaseIP.indexOf(strBlockedIP) != -1)
				{
					rafFile.close();
					return false;
				}
				strBlockedIP = rafFile.readLine();
			}
			rafFile.close();
			for (int i=0; i < vctBannedIP.size(); i++)
			{
				strBlockedIP = (String)vctBannedIP.elementAt(i);
				if (strLowerCaseIP.indexOf(strBlockedIP) != -1)
				{
					return false;
				}
			}
		}catch (Exception e)
		{
			LOG.printError("isGoodIP():Checking for bad IP address", e);
			return false;
		}
		return true;
	}
	
	synchronized void loadPrefs() {
		
		//Load Prefss

		if (LOG_FILE != null) {
			try {
				LOG = new Log(new PrintStream(new FileOutputStream(LOG_FILE, true),true));
			} catch (Exception e) {
				LOG = new Log(System.out);
				LOG.printError("loadPrefs():Opening LOG file \""+LOG_FILE+"\"", e);
			}
		} else {
			LOG = new Log(System.out);
		}
		LOG.printMessage(Log.INFO, "Loading Preferences...");
		
		LOG_LVL = (Integer) db.getConfig(SQL_INT, "logLevel");
		LOG.setLogLevel(LOG_LVL);
		LOG.printMessage(Log.INFO, "Log Level: "+ LOG_LVL);

		//Load Triggered Scripts
		try {
			if (SCR_SEE_LT != null) {
				synchronized(SCR_SEE_LT) {
					SCR_SEE_LT.close();
					SCR_SEE_LT = new Script("conf/canSeeLivingThing",this,true);
				}
			} else {
				SCR_SEE_LT = new Script("conf/canSeeLivingThing",this,true);
			}
		}catch(Exception e) {
			SCR_SEE_LT = null;
		}
		try {
			if (SCR_IGNORE_COL != null) {
				synchronized(SCR_IGNORE_COL) {
					SCR_IGNORE_COL.close();
					SCR_IGNORE_COL= new Script("conf/canMoveThroughLivingThing",this,true);
				}
			} else {
				SCR_IGNORE_COL= new Script("conf/canMoveThroughLivingThing",this,true);
			}
		} catch(Exception e) {
			SCR_IGNORE_COL = null;
		}
		try {
			if (SCR_CAN_ATK != null) {
				synchronized(SCR_CAN_ATK) {
					SCR_CAN_ATK.close();
					SCR_CAN_ATK = new Script("conf/canAttack",this,true);
				}
			} else {
				SCR_CAN_ATK = new Script("conf/canAttack",this,true);
			}
		}catch(Exception e) {
			SCR_CAN_ATK = null;
		}
		try {
			if (SCR_ONSTART != null) {
				synchronized(SCR_ONSTART) {
					SCR_ONSTART.close();
					SCR_ONSTART = new Script("conf/onStart",this,true);
				}
			} else {
				SCR_ONSTART = new Script("conf/onStart",this,true);
			}
		} catch(Exception e) {
			SCR_ONSTART = null;
		}
		try
		{
			if (SCR_ONDEATH != null)
			{
				synchronized(SCR_ONDEATH)
				{
					SCR_ONDEATH.close();
					SCR_ONDEATH = new Script("conf/onDeath",this,true);
				}
			} else
			{
				SCR_ONDEATH = new Script("conf/onDeath",this,true);
			}
		}catch(Exception e)
		{
			SCR_ONDEATH = null;
		}
		try
		{
			if (SCR_ONLOGOUT != null)
			{
				synchronized(SCR_ONLOGOUT)
				{
					SCR_ONLOGOUT.close();
					SCR_ONLOGOUT = new Script("conf/onLogOut",this,true);
				}
			} else
			{
				SCR_ONLOGOUT = new Script("conf/onLogOut",this,true);
			}
		}catch(Exception e)
		{
			SCR_ONLOGOUT = null;
		}
		// Load Tile Scripts
		synchronized(vctTiles) {
			try {
				int i;
				for (i = 0;i < vctTiles.size();i++) {
					((Script)vctTiles.elementAt(i)).close();
				}
				vctTiles = new Vector<Script>();
				for (i = 0; true; i++) {
					try {
						vctTiles.addElement(new Script("defTileScripts/"+i,this,true));
					} catch(Exception e) { break; }
				}
			} catch (Exception e) { 
				LOG.printError("Error loading Tile Scripts.", e);
			}
		}
		synchronized(vctTileActions)
		{
			try
			{
				int i;
				for (i=0;i<vctTileActions.size();i++)
				{
					((Script)vctTileActions.elementAt(i)).close();
				}
				vctTileActions = new Vector(0);
				for (i=0;true;i++)
				{
					try
					{
						vctTileActions.addElement(new Script("defTileActions/"+i,this,true));
					}catch(Exception e)
					{
						break;
					}
				}
			}catch (Exception e) { }
		}
		synchronized(vctSeeTiles)
		{
			try
			{
				int i;
				for (i=0;i<vctSeeTiles.size();i++)
				{
					((Script)vctSeeTiles.elementAt(i)).close();
				}
				vctSeeTiles = new Vector(0);
				for (i=0;true;i++)
				{
					try
					{
						vctSeeTiles.addElement(new Script("defTileSeeScripts/"+i,this,true));
					}catch(Exception e)
					{
						break;
					}
				}
			}catch (Exception e) { }
		}
	}
	
	public synchronized long getID() {
		ID++;
		return ID;
	}
	
	public void chatMessage(String inMessage, String strFrom) {
	    int i;
		strFrom = strFrom.toLowerCase();
	    Entity thnStore;
		LOG.printMessage(Log.ALWAYS,inMessage);
	    for (i = 0; i < vctSockets.size(); i++) {
	        thnStore = (Entity)vctSockets.elementAt(i);
			if (!thnStore.vctIgnore.contains(strFrom)) {
	        	thnStore.chatMessage(inMessage+"\n");
			}
	    }
	}
	
	public void chatMessage(String inMessage, int intLocX, int intLocY, String strFrom)
	{
		strFrom = strFrom.toLowerCase();
	    Entity thnStore;
		LOG.printMessage(Log.ALWAYS,inMessage);
		int i,
			i2,
			i3;
		DuskObject objStore;
	   	i=0;
	    if (intLocX - VIEW_RANGE < 0)
		{
	    	i = -1*(intLocX-VIEW_RANGE);
	    }
	   	i2=0;
	    if (intLocY-VIEW_RANGE<0)
	    {
	    	i2 = -1*(intLocY-VIEW_RANGE);
	    }
		for (;i<MAP_SIZE;i++) {
			if (intLocX+i-VIEW_RANGE<MapColumns) {
				for (i3=i2;i3<MAP_SIZE;i3++) {
					if (intLocY+i3-VIEW_RANGE<MapRows) {
						objStore = objEntities[intLocX+i-VIEW_RANGE][intLocY+i3-VIEW_RANGE];
						while (objStore != null) {
	        				if (objStore.isLivingThing()) {
	        					thnStore = (Entity)objStore;
	        					if (thnStore.isPlayer() && !thnStore.vctIgnore.contains(strFrom)) {
        							thnStore.chatMessage(inMessage+"\n");
								}
							}
							objStore = objStore.objNext;
						}
					}
				}
			}
		}
	}
	
	void chatMessage(String inMessage, String GUILD, String strFrom)
	{
	    int i;
		strFrom = strFrom.toLowerCase();
	    Entity thnStore;
		LOG.printMessage(Log.ALWAYS,inMessage);
	    for (i=0;i<vctSockets.size();i++)
	    {
	        thnStore = (Entity)vctSockets.elementAt(i);
	        if (thnStore.GUILD.equals(GUILD)
				&& !thnStore.vctIgnore.contains(strFrom))
	        {
	        	thnStore.chatMessage(inMessage+"\n");
	    	}
	    }
	}
	
	public synchronized void refreshEntities(Entity thnRefresh) {
			int i,
			i2,
			i3,
			i4;
		DuskObject objStore,
					objStore2;
		Entity thnStore;
		Prop prpStore;
		Item itmStore;
		Sign sgnStore;
		Merchant mrcStore;
		Vector vctNewEntities=new Vector(0,10);
		String strResult=null,
				strStore=null;
		boolean blnCanSee;
		
		i=0;
	    if (thnRefresh.intLocX-VIEW_RANGE<0)
		{
	    	i = -1*(thnRefresh.intLocX-VIEW_RANGE);
	    }
	   	i2=0;
	    if (thnRefresh.intLocY-VIEW_RANGE<0)
	    {
	    	i2 = -1*(thnRefresh.intLocY-VIEW_RANGE);
	    }
		for (;i<MAP_SIZE;i++)
		{
			if (thnRefresh.intLocX+i-VIEW_RANGE < MapColumns)
			{
				for (i3=i2;i3<MAP_SIZE;i3++)
				{
					if (thnRefresh.intLocY+i3-VIEW_RANGE < MapRows)
					{
						objStore = objEntities[thnRefresh.intLocX+i-VIEW_RANGE][thnRefresh.intLocY+i3-VIEW_RANGE];
						if (objStore != null)
						{
							if (canSeeTo(thnRefresh,thnRefresh.intLocX+i-VIEW_RANGE,thnRefresh.intLocY+i3-VIEW_RANGE))
							{
							do
							{
								vctNewEntities.addElement(objStore);
								for (i4=0;i4<thnRefresh.vctEntities.size();i4++)
								{
									objStore2 = (DuskObject)thnRefresh.vctEntities.elementAt(i4);
									if (objStore2 == objStore)
									{
										thnRefresh.vctEntities.removeElementAt(i4);
										i4 = -1;
										break;
									}
								}
								if (objStore.isPlayerMerchant())
								{
									PlayerMerchant pmrStore = (PlayerMerchant)objStore;
									if (thnRefresh.intLocX == pmrStore.intLocX && thnRefresh.intLocY == pmrStore.intLocY)
									{
		    							strResult = (char)17+"";
										Iterator iter = pmrStore.vctItems.keySet().iterator();
										Vector vctStore;
	    								while(iter.hasNext())
	    								{
											vctStore = (Vector)pmrStore.vctItems.get(iter.next());
											itmStore = (Item)vctStore.firstElement();
											int intCost = (itmStore.intCost * 3) / 4;
											if (thnRefresh.NAME.equalsIgnoreCase(pmrStore.strOwner))
											{
												intCost = 0;
											}
	    									strResult += intCost+"gp)" +strStore+"\n";
	    								}
	    								thnRefresh.send(strResult+".\n");
	    								thnRefresh.updateSell();
		    						}
								}
								if (objStore.isMerchant())
								{
									mrcStore = (Merchant)objStore;
									if (thnRefresh.intLocX == mrcStore.intLocX && thnRefresh.intLocY == mrcStore.intLocY)
									{
		    							strResult = (char)17+"";
										if (thnRefresh.ENT_FOLLOWING != null && thnRefresh.ENT_FOLLOWING.isPet())
										{
		    								for (int i5=0;i5<mrcStore.vctItems.size();i5++)
		    								{
		    									strStore = (String)mrcStore.vctItems.elementAt(i5);
		    									itmStore = getItem(strStore);
		    									if (itmStore != null)
		    									{
		    										strResult += itmStore.intCost+"gp)" +strStore+"\n";
		    									}else if (strStore.equals("pet"))
		    									{
		    										strResult += PET_COST+"gp)" +strStore+"\n";
		    									}else
												{
		    										strResult += TRAIN_COST+"exp)"+strStore+"\n";
		    										strResult += TRAIN_COST+"exp)"+thnRefresh.ENT_FOLLOWING.NAME+":"+strStore+"\n";
												}
		    								}
		    							}else
		    							{
		    								for (int i5=0;i5<mrcStore.vctItems.size();i5++)
		    								{
		    									strStore = (String)mrcStore.vctItems.elementAt(i5);
		    									itmStore = getItem(strStore);
		    									if (itmStore != null)
		    									{
		    										strResult += itmStore.intCost+"gp)" +strStore+"\n";
		    									}else if (strStore.equals("pet"))
		    									{
		    										strResult += +PET_COST+"gp)" +strStore+"\n";
		    									}else
												{
		    										strResult += TRAIN_COST+"exp)"+strStore+"\n";
												}
		    								}
		    							}
		    							thnRefresh.send(strResult+".\n");
		    							thnRefresh.updateSell();
		    						}
								}
								if (i4 != -1)
								{
									if (objStore.isLivingThing())
									{
										thnStore = (Entity)objStore;
										if (SCR_SEE_LT != null)
										{
											synchronized(SCR_SEE_LT)
											{
												SCR_SEE_LT.varVariables.clearVariables();
												SCR_SEE_LT.varVariables.addVariable("seeing",thnRefresh);
												SCR_SEE_LT.varVariables.addVariable("seen",thnStore);
												blnCanSee = SCR_SEE_LT.rewindAndParseScript();
											}
										}else
											blnCanSee=true;
										if (blnCanSee)
										{
											if (thnStore.isPlayer())
											{
												strResult=(char)4+"";
												if (thnStore.BLN_SLEEP)
												{
													strResult += "<sleeping>";
												}
												if (!thnStore.GUILD.equals("none"))
												{
													strResult += "<" + thnStore.GUILD + ">";
												}
												for (i4=0;i4<thnStore.vctFlags.size();i4++)
												{
													strResult += "<" + (String)thnStore.vctFlags.elementAt(i4) + ">";
												}
	        									strResult += thnStore.NAME+"\n";
	        									strResult += 0+"\n";
	        									strResult += thnStore.ID+"\n";
	        									strResult += thnStore.intLocX+"\n";
	        									strResult += thnStore.intLocY+"\n";
	        									strResult += thnStore.Image+"\n";
	        									strResult += thnStore.STEP+"\n";
												thnRefresh.send(strResult);
											}else if (thnStore.isMob())
											{
												strResult=(char)4+"";
												if (thnStore.BLN_SLEEP)
												{
													strResult += "<sleeping>";	
												}
												for (i4=0;i4<thnStore.vctFlags.size();i4++)
												{
													strResult += "<" + (String)thnStore.vctFlags.elementAt(i4) + ">";
												}
	        									strResult += thnStore.NAME+"\n";
	        									strResult += 4+"\n";
	        									strResult += thnStore.ID+"\n";
	        									strResult += thnStore.intLocX+"\n";
	        									strResult += thnStore.intLocY+"\n";
	        									strResult += thnStore.Image+"\n";
												thnRefresh.send(strResult);
											}else if (thnStore.isPet())
											{
												strResult=(char)4+"";
												if (thnStore.BLN_SLEEP)
												{
													strResult += "<sleeping>";	
												}
												if (thnStore.stats.getHP() < 0)
												{
													strResult += "<wounded>";	
												}
												for (i4=0;i4<thnStore.vctFlags.size();i4++)
												{
													strResult += "<" + (String)thnStore.vctFlags.elementAt(i4) + ">";
												}
	        									strResult += thnStore.NAME+"\n";
	        									strResult += 4+"\n";
	        									strResult += thnStore.ID+"\n";
	        									strResult += thnStore.intLocX+"\n";
	        									strResult += thnStore.intLocY+"\n";
	        									strResult += thnStore.Image+"\n";
												thnRefresh.send(strResult);
											}
										}
									}else if (objStore.isItem())
									{
										strResult=(char)4+"";
										itmStore = (Item)objStore;
										strResult += itmStore.NAME+"\n";
	        							strResult += 1+"\n";
	        							strResult += itmStore.ID+"\n";
	        							strResult += itmStore.intLocX+"\n";
	        							strResult += itmStore.intLocY+"\n";
	        							strResult += itmStore.Image+"\n";
										thnRefresh.send(strResult);
									}else if (objStore.isProp())
									{
										strResult=(char)4+"";
										prpStore = (Prop)objStore;
	        							strResult += prpStore.NAME+"\n";
	        							strResult += 3+"\n";
	        							strResult += prpStore.ID+"\n";
	        							strResult += prpStore.intLocX+"\n";
	        							strResult += prpStore.intLocY+"\n";
	        							strResult += prpStore.Image+"\n";
										thnRefresh.send(strResult);
									}else if (objStore.isSign())
									{
										strResult=(char)4+"";
										sgnStore = (Sign)objStore;
	        							strResult += sgnStore.NAME+"\n";
	        							strResult += 3+"\n";
	        							strResult += sgnStore.ID+"\n";
	        							strResult += sgnStore.intLocX+"\n";
	        							strResult += sgnStore.intLocY+"\n";
	        							strResult += IMG_SIGN+"\n";
										thnRefresh.send(strResult);
									}else if (objStore.isMerchant())
									{
										strResult=(char)4+"";
										mrcStore = (Merchant)objStore;
	        							strResult += "Merchant\n";
	        							strResult += 2+"\n";
	        							strResult += mrcStore.ID+"\n";
	        							strResult += mrcStore.intLocX+"\n";
	        							strResult += mrcStore.intLocY+"\n";
	        							strResult += IMG_MERCHANT+"\n";
										thnRefresh.send(strResult);
									}else if (objStore.isPlayerMerchant())
									{
										strResult=(char)4+"";
										PlayerMerchant pmrStore = (PlayerMerchant)objStore;
	        							strResult += pmrStore.strOwner+"'s Merchant\n";
	        							strResult += 2+"\n";
	        							strResult += pmrStore.ID+"\n";
	        							strResult += pmrStore.intLocX+"\n";
	        							strResult += pmrStore.intLocY+"\n";
	        							strResult += IMG_MERCHANT+"\n";
										thnRefresh.send(strResult);
									}
								}
								objStore = objStore.objNext;
							}while(objStore != null);
							}
						}
					}
				}
			}
		}
		for (i=0;i<thnRefresh.vctEntities.size();i++)
		{
			objStore = (DuskObject)thnRefresh.vctEntities.elementAt(i);
			strResult=(char)16+""+objStore.ID+"\n";
			thnRefresh.send(strResult);
		}
		thnRefresh.vctEntities = vctNewEntities;
	}
	
	synchronized void addEntity(DuskObject objRefresh)
	{
		int i,
			i2,
			i3,
			i4;
		DuskObject objStore;
		Entity thnStore,
					thnStore2;
		Prop prpStore;
		Item itmStore;
		Sign sgnStore;
		Merchant mrcStore;
		String strResult,
				strStore;
		boolean blnCanSee;
		
		i=0;
	    if (objRefresh.intLocX-VIEW_RANGE<0)
		{
	    	i = -1*(objRefresh.intLocX-VIEW_RANGE);
	    }
	   	i2=0;
	    if (objRefresh.intLocY-VIEW_RANGE<0)
	    {
	    	i2 = -1*(objRefresh.intLocY-VIEW_RANGE);
	    }
		for (;i<MAP_SIZE;i++)
		{
			if (objRefresh.intLocX+i-VIEW_RANGE < MapColumns)
			{
				for (i3=i2;i3<MAP_SIZE;i3++)
				{
					if (objRefresh.intLocY+i3-VIEW_RANGE < MapRows)
					{
						objStore = objEntities[objRefresh.intLocX+i-VIEW_RANGE][objRefresh.intLocY+i3-VIEW_RANGE];
						while (objStore != null)
						{
							if (objStore.isLivingThing())
							{
								thnStore = (Entity)objStore;
								if (thnStore.isPlayer())
								{
									if (canSeeTo(thnStore,objRefresh.intLocX,objRefresh.intLocY))
									{
									if (objRefresh.isLivingThing() && SCR_SEE_LT != null)
									{
										synchronized(SCR_SEE_LT)
										{
											SCR_SEE_LT.varVariables.clearVariables();
											SCR_SEE_LT.varVariables.addVariable("seeing",thnStore);
											SCR_SEE_LT.varVariables.addVariable("seen",(Entity)objRefresh);
											blnCanSee = SCR_SEE_LT.rewindAndParseScript();
										}
									}else
										blnCanSee=true;
									if (blnCanSee)
									{
									if (!thnStore.vctEntities.contains(objRefresh))
									{
										strResult=(char)4+"";
										thnStore.vctEntities.addElement(objRefresh);
										if (objRefresh.isLivingThing())
										{
											thnStore2 = (Entity)objRefresh;
											if (thnStore2.isPlayer())
											{
												if (thnStore2.BLN_SLEEP)
												{
													strResult += "<sleeping>";
												}
												if (!thnStore2.GUILD.equals("none"))
												{
													strResult += "<" + thnStore2.GUILD + ">";
												}
												for (i4=0;i4<thnStore2.vctFlags.size();i4++)
												{
													strResult += "<" + (String)thnStore2.vctFlags.elementAt(i4) + ">";
												}
	        									strResult += thnStore2.NAME+"\n";
	        									strResult += 0+"\n";
	        									strResult += thnStore2.ID+"\n";
	        									strResult += thnStore2.intLocX+"\n";
	        									strResult += thnStore2.intLocY+"\n";
	        									strResult += thnStore2.Image+"\n";
	        									strResult += thnStore2.STEP+"\n";
											}else if (thnStore2.isMob())
											{
												if (thnStore2.BLN_SLEEP)
												{
													strResult += "<sleeping>";
												}
												for (i4=0;i4<thnStore2.vctFlags.size();i4++)
												{
													strResult += "<" + (String)thnStore2.vctFlags.elementAt(i4) + ">";
												}
	        									strResult += thnStore2.NAME+"\n";
	        									strResult += 4+"\n";
	        									strResult += thnStore2.ID+"\n";
	        									strResult += thnStore2.intLocX+"\n";
	        									strResult += thnStore2.intLocY+"\n";
	        									strResult += thnStore2.Image+"\n";
											}else if (thnStore2.isPet())
											{
												if (thnStore2.BLN_SLEEP)
												{
													strResult += "<sleeping>";	
												}
												if (thnStore2.stats.getHP()<0)
												{
													strResult += "<wounded>";	
												}
												for (i4=0;i4<thnStore2.vctFlags.size();i4++)
												{
													strResult += "<" + (String)thnStore2.vctFlags.elementAt(i4) + ">";
												}
	        									strResult += thnStore2.NAME+"\n";
	        									strResult += 4+"\n";
	        									strResult += thnStore2.ID+"\n";
	        									strResult += thnStore2.intLocX+"\n";
	        									strResult += thnStore2.intLocY+"\n";
	        									strResult += thnStore2.Image+"\n";
											}
										}else if (objRefresh.isItem())
										{
											itmStore = (Item)objRefresh;
											strResult += itmStore.NAME+"\n";
	        								strResult += 1+"\n";
	        								strResult += itmStore.ID+"\n";
	        								strResult += itmStore.intLocX+"\n";
	        								strResult += itmStore.intLocY+"\n";
	        								strResult += itmStore.Image+"\n";
										}else if (objRefresh.isProp())
										{
											prpStore = (Prop)objRefresh;
	        								strResult += prpStore.NAME+"\n";
	        								strResult += 3+"\n";
	        								strResult += prpStore.ID+"\n";
	        								strResult += prpStore.intLocX+"\n";
	        								strResult += prpStore.intLocY+"\n";
	        								strResult += prpStore.Image+"\n";
										}else if (objRefresh.isSign())
										{
											sgnStore = (Sign)objRefresh;
	        								strResult += sgnStore.NAME+"\n";
	        								strResult += 3+"\n";
	        								strResult += sgnStore.ID+"\n";
	        								strResult += sgnStore.intLocX+"\n";
	        								strResult += sgnStore.intLocY+"\n";
	        								strResult += IMG_SIGN+"\n";
										}else if (objRefresh.isMerchant())
										{
											mrcStore = (Merchant)objRefresh;
	        								strResult += "Merchant\n";
	        								strResult += 2+"\n";
	        								strResult += mrcStore.ID+"\n";
	        								strResult += mrcStore.intLocX+"\n";
	        								strResult += mrcStore.intLocY+"\n";
	        								strResult += IMG_MERCHANT+"\n";
										}else if (objRefresh.isPlayerMerchant())
										{
											PlayerMerchant pmrStore = (PlayerMerchant)objRefresh;
	        								strResult += pmrStore.strOwner+"'s Merchant\n";
	        								strResult += 2+"\n";
	        								strResult += pmrStore.ID+"\n";
	        								strResult += pmrStore.intLocX+"\n";
	        								strResult += pmrStore.intLocY+"\n";
	        								strResult += IMG_MERCHANT+"\n";
										}
										thnStore.send(strResult);
									}
									}
									}
								}
							}
							objStore = objStore.objNext;
						}
					}
				}
			}
		}
	}
	
	synchronized void removeEntity(DuskObject objRefresh)
	{
		int i,
			i2,
			i3;
		DuskObject objStore;
		Entity thnStore;
		String strResult;
		
		i=0;
	    if (objRefresh.intLocX-VIEW_RANGE<0)
		{
	    	i = -1*(objRefresh.intLocX-VIEW_RANGE);
	    }
	   	i2=0;
	    if (objRefresh.intLocY-VIEW_RANGE<0)
	    {
	    	i2 = -1*(objRefresh.intLocY-VIEW_RANGE);
	    }
		for (;i<MAP_SIZE;i++)
		{
			if (objRefresh.intLocX+i-VIEW_RANGE < MapColumns)
			{
				for (i3=i2;i3<MAP_SIZE;i3++)
				{
					if (objRefresh.intLocY+i3-VIEW_RANGE < MapRows)
					{
						objStore = objEntities[objRefresh.intLocX+i-VIEW_RANGE][objRefresh.intLocY+i3-VIEW_RANGE];
						while (objStore != null)
						{
							if (objStore.isLivingThing())
							{
								thnStore = (Entity)objStore;
								if (thnStore.isPlayer())
								{
									if (canSeeTo(thnStore,objRefresh.intLocX,objRefresh.intLocY))
									{
										thnStore.vctEntities.removeElement(objRefresh);
										strResult=(char)16+""+objRefresh.ID+"\n";
										thnStore.send(strResult);
									}
								}
							}
							objStore = objStore.objNext;
						}
					}
				}
			}
		}
	}
	
	void newBattle(Entity pla1, Entity pla2)
	{
		if (pla2 == null)
		{
			return;
		}
		if (pla1.isPet())
		{
			pla1.chatMessage("Pets cannot lead battles.\n");
			return;
		}
		if (pla1.BATTLE != null)
		{
			pla1.chatMessage("You're already fighting!\n");
			return;
		}
		if (pla1 == pla2)
		{
			pla1.chatMessage("You can't fight yourself!\n");
			return;
		}
		if (pla2.isPet())
		{
			pla2.chatMessage("You can't attack pets.\n");
			return;
		}
//		if (Math.abs(pla1.intLocX - pla2.intLocX) + Math.abs(pla1.intLocY - pla2.intLocY) > 1)
		if (Math.abs(pla1.intLocX - pla2.intLocX) + Math.abs(pla1.intLocY - pla2.intLocY) > pla1.getRange())
		{
			pla1.chatMessage("They're too far away.\n");
			return;
		}
		if (SCR_CAN_ATK != null)
		{
			synchronized(SCR_CAN_ATK)
			{
				SCR_CAN_ATK.varVariables.clearVariables();
				SCR_CAN_ATK.varVariables.addVariable("attacking",pla1);
				SCR_CAN_ATK.varVariables.addVariable("attacked",pla2);
				if (!SCR_CAN_ATK.rewindAndParseScript())
				{
					pla1.chatMessage("You can't attack them.\n");
					return;
				}
			}
		}
		// Check if the attacked is following the attacker
		Entity thnStore = pla2;
		while (thnStore != null)
		{
			if (pla1 == thnStore)
			{
				pla1.chatMessage("You can't attack a member of your group.\n");
				return;
			}
			if (thnStore.isPlayer() && !pla1.isMob())
			{
				if (thnStore.GUILD == null || thnStore.GUILD.equalsIgnoreCase("none"))
				{ 
					pla1.chatMessage("You can't fight them.\n");
					return;
				}
			}
			thnStore = thnStore.ENT_MASTER;
		}
		// Check if the attacker is following the attacked
		thnStore = pla2;
		while (thnStore != null)
		{
			if (pla1 == thnStore)
			{
				pla1.chatMessage("You can't attack a member of your group.\n");
				return;
			}
			if (thnStore.isPlayer() && !pla1.isMob())
			{
				if (thnStore.GUILD == null || thnStore.GUILD.equalsIgnoreCase("none"))
				{ 
					pla1.chatMessage("You can't fight them.\n");
					return;
				}
			}
			thnStore = thnStore.ENT_FOLLOWING;
		}
		if (pla2.BATTLE == null)
		{
			if ((pla1.isPlayer() && pla2.isPlayer()) && (pla1.GUILD.equals("none") || pla2.GUILD.equals("none")))	
			{
				pla1.chatMessage("Players who are not in clans cannot fight other players.\n");
				return;
			}
			if (pla2.isPlayer() && overMerchant(pla2.intLocX,pla2.intLocY) != null)
			{
				pla1.chatMessage("You cannot attack players who are shopping.\n");
				return;
			}
			if (pla2.isPlayer() && overPlayerMerchant(pla2.intLocX,pla2.intLocY) != null)
			{
				pla1.chatMessage("You cannot attack players who are shopping.\n");
				return;
			}
			vctBattles.addElement(new Battle(pla1,pla2,this));
			return;
		}else
		{
			if (pla2.bytSide == 1)
			{
				thnStore = pla1;
				while (thnStore != null)
				{
					pla2.BATTLE.addToBattle(thnStore,2);
					thnStore = thnStore.ENT_FOLLOWING;
				}
				thnStore = pla1.ENT_MASTER;
				while (thnStore != null)
				{
					pla2.BATTLE.addToBattle(thnStore,2);
					thnStore = thnStore.ENT_MASTER;
				}
			}else
			{
				thnStore = pla1;
				while (thnStore != null)
				{
					pla2.BATTLE.addToBattle(thnStore,1);
					thnStore = thnStore.ENT_FOLLOWING;
				}
				thnStore = pla1.ENT_MASTER;
				while (thnStore != null)
				{
					pla2.BATTLE.addToBattle(thnStore,1);
					thnStore = thnStore.ENT_MASTER;
				}
			}
			pla2.BATTLE.chatMessage("\t"+pla1.NAME+" has joined the battle.\n");
			return;
		}
	}
	
	Sign getSign(String inName)
	{
		int i;
		Sign sgnStore;
		for (i=0;i<vctSigns.size();i++)
		{
			sgnStore = (Sign)vctSigns.elementAt(i);
			if (inName.equals(sgnStore.NAME))
			{
				return sgnStore;
			}
		}
		return null;
	}

	Entity getPet(String inName)
	{
		int i;
		Entity thnStore;
		for (i=0;i<vctPets.size();i++)
		{
			thnStore = (Entity)vctPets.elementAt(i);
			if (inName.equalsIgnoreCase(thnStore.NAME))
			{
				return thnStore;
			}
		}
		return null;
	}

	Entity getPlayer(String inName)
	{
		int i;
		Entity thnStore;
		for (i=0;i<vctSockets.size();i++)
		{
			thnStore = (Entity)vctSockets.elementAt(i);
			if (inName.equalsIgnoreCase(thnStore.NAME))
			{
				return thnStore;
			}
		}
		return null;
	}
	
	public Faction getFaction(String NAME)
	{
		int i;
		Faction fctStore;
		for (i=0;i<vctFactions.size();i++)
		{
			fctStore = (Faction)vctFactions.elementAt(i);
			if (fctStore.NAME.equals(NAME))
				return fctStore;
		}
		fctStore = new Faction(NAME,this);
		vctFactions.addElement(fctStore);
		return fctStore;
	}
	
	Entity getMobFromVct(String inName)
	{
		int i=0;
		Entity thnStore;
		while (i < vctMobs.size())
		{
			thnStore = (Entity)vctMobs.elementAt(i);
			if (thnStore.NAME.equals(inName))
			{
				return thnStore;
			}
			i++;
		}
		return null;
	}
	
	Prop getProp(String NAME)
	{
		Prop prpStore=null;
		try
		{
			RandomAccessFile rafPropDef = new RandomAccessFile("defProps/"+NAME, "r");
			prpStore = new Prop(getID());
			prpStore.NAME = NAME;
			String strStore = rafPropDef.readLine();
			while (!(strStore == null || strStore.equals(".")))
			{
				if (strStore.equalsIgnoreCase("description"))
				{
					prpStore.info = rafPropDef.readLine();
				}else if (strStore.equalsIgnoreCase("image"))
				{
					prpStore.Image = Integer.parseInt(rafPropDef.readLine());
				}
				strStore = rafPropDef.readLine();
			}
			rafPropDef.close();
		}catch (Exception e)
		{
			LOG.printError("getProp():While trying to get prop \""+NAME+"\"", e);
		}
		return prpStore;
	}
	
	Prop getPropFromVct(String inName)
	{
		try
		{
			int i=0;
			Prop prpStore;
			while (true)
			{
				prpStore = (Prop)vctProps.elementAt(i);
				if (prpStore.NAME.equals(inName))
				{
					return prpStore;
				}
				i++;
			}
		}catch (Exception e)
		{
			LOG.printError("getPropFromVct():While trying to get prop \""+inName+"\"", e);
		}
		return null;
	}
	
	Prop getPropFromVctAndRemove(String inName)
	{
		try
		{
			int i=0;
			Prop prpStore;
			while (true)
			{
				prpStore = (Prop)vctProps.elementAt(i);
				if (prpStore.NAME.equals(inName))
				{
					vctProps.removeElementAt(i);
					removeDuskObject(prpStore);
					return prpStore;
				}
				i++;
			}
		}catch (Exception e)
		{
			LOG.printError("getPropFromVctAndRemove():While trying to get prop \""+inName+"\"", e);
		}
		return null;
	}
	
	public Condition getCondition(String inName)
	{
		String strStore="Error opening file";
		try
		{
			RandomAccessFile rafConditionDef = new RandomAccessFile("defConditions/"+inName.toLowerCase(), "r");
			Condition cndStore = new Condition();
			cndStore.NAME = inName;
			strStore = rafConditionDef.readLine();
			while (!(strStore == null || strStore.equals(".")))
			{
				if (strStore.equalsIgnoreCase("duration"))
				{
					cndStore.intDuration = Integer.parseInt(rafConditionDef.readLine());
				}else if (strStore.equalsIgnoreCase("occurance"))
				{
					cndStore.intOccurance = Integer.parseInt(rafConditionDef.readLine());
				}else if (strStore.equalsIgnoreCase("onstart"))
				{
					cndStore.strOnStart = rafConditionDef.readLine();
				}else if (strStore.equalsIgnoreCase("onoccurance"))
				{
					cndStore.strOnOccurance = rafConditionDef.readLine();
				}else if (strStore.equalsIgnoreCase("onend"))
				{
					cndStore.strOnEnd = rafConditionDef.readLine();
				}else if (strStore.equalsIgnoreCase("nodisplay"))
				{
					cndStore.blnDisplay = false;
				}
				strStore = rafConditionDef.readLine();
			}
			rafConditionDef.close();
			return cndStore;
		}catch (Exception e)
		{
			LOG.printError("getCondition():Parsing \""+strStore+"\" for condition \""+inName+"\"", e);
		}
		return null;
	}
	
	int getSpellPercent(String NAME)
	{
		try
		{
			RandomAccessFile rafSpell = new RandomAccessFile("defSpells/"+NAME,"r");
			SpellGroup grpStore = getSpellGroup(rafSpell.readLine());
			rafSpell.close();
			return grpStore.getSpellPercent(NAME);
		}catch (Exception e)
		{
			LOG.printError("getSpellPercent():While trying to get info on spell \""+NAME+"\"", e);
		}
		return -1;
	}
	
	public SpellGroup getSpellGroup(String NAME)
	{
		SpellGroup grpStore;
		for (int i=0;i<vctSpellGroups.size();i++)
		{
			grpStore = (SpellGroup)vctSpellGroups.elementAt(i);
			if (NAME.equalsIgnoreCase(grpStore.strName))
			{
				return grpStore;
			}
		}
		try
		{
			grpStore = new SpellGroup(NAME);
			RandomAccessFile rafSpellGroup = new RandomAccessFile("defSpellGroups/"+NAME,"r");
			try
			{
				String strStore = rafSpellGroup.readLine();
				while (strStore != null && !strStore.equals("") && !strStore.equals("."))
				{
					grpStore.vctSpells.addElement(strStore);
					strStore = rafSpellGroup.readLine();
				}
			}catch (Exception e)
			{
				LOG.printError("getSpellGroup():While trying to read spell group file for \""+NAME+"\"", e);
			}
			rafSpellGroup.close();
			vctSpellGroups.addElement(grpStore);
			return grpStore;
		}catch(Exception e)
		{
			LOG.printError("getSpellGroup():While trying to get spell group info for \""+NAME+"\"", e);
		}
		return null;
	}
			
	public Item getItem(String inName)
	{
		Item itmStore=null;
		RandomAccessFile rafItemDef=null;
		String strStore = "Error reading file";
		try
		{
			File fileTest = new File("defItems/"+inName.toLowerCase());
			if (!fileTest.exists())
			{
				return null;
			}
			rafItemDef = new RandomAccessFile("defItems/"+inName.toLowerCase(), "r");
			//itmStore = new Item(this);
			itmStore = new Item(getID());
			itmStore.NAME = inName;
			itmStore.info = "a "+inName; //default description is name
			strStore = rafItemDef.readLine();
			while (!(strStore == null || strStore.equals(".")))
			{
				if (strStore.equalsIgnoreCase("type"))
				{
					strStore = rafItemDef.readLine();
					if (strStore.equalsIgnoreCase("item"))
					{
						itmStore.intType = 0;
					}else if (strStore.equalsIgnoreCase("weapon"))
					{
						itmStore.intType = 1;
					}else if (strStore.equalsIgnoreCase("armor"))
					{
						itmStore.intType = 2;
					}else if (strStore.equalsIgnoreCase("food"))
					{
						itmStore.intType = 3;
					}else if (strStore.equalsIgnoreCase("drink"))
					{
						itmStore.intType = 4;
					}
				}else if (strStore.equalsIgnoreCase("kind"))
				{
					strStore = rafItemDef.readLine();
					if (strStore.equalsIgnoreCase("arms"))
					{
						itmStore.intKind = 0;
					}else if (strStore.equalsIgnoreCase("legs"))
					{
						itmStore.intKind = 1;
					}else if (strStore.equalsIgnoreCase("torso"))
					{
						itmStore.intKind = 2;
					}else if (strStore.equalsIgnoreCase("waist"))
					{
						itmStore.intKind = 3;
					}else if (strStore.equalsIgnoreCase("neck"))
					{
						itmStore.intKind = 4;
					}else if (strStore.equalsIgnoreCase("skull"))
					{
						itmStore.intKind = 5;
					}else if (strStore.equalsIgnoreCase("eyes"))
					{
						itmStore.intKind = 6;
					}else if (strStore.equalsIgnoreCase("hands"))
					{
						itmStore.intKind = 7;
					}
				}else if (strStore.equalsIgnoreCase("description"))
				{
					itmStore.info = rafItemDef.readLine();
				}else if (strStore.equalsIgnoreCase("cost"))
				{
					itmStore.intCost = Integer.parseInt(rafItemDef.readLine());
				}else if (strStore.equalsIgnoreCase("durability"))
				{
					itmStore.lngDurability = Long.parseLong(rafItemDef.readLine());
				}else if (strStore.equalsIgnoreCase("uses"))
				{
					itmStore.intUses = Integer.parseInt(rafItemDef.readLine());
				}else if (strStore.equalsIgnoreCase("mod"))
				{
				//	itmStore.intMod = Integer.parseInt(rafItemDef.readLine());
				}else if (strStore.equalsIgnoreCase("image"))
				{
					itmStore.Image = Integer.parseInt(rafItemDef.readLine());
				}else if (strStore.equalsIgnoreCase("onuse"))
				{
					itmStore.strOnUseScript = rafItemDef.readLine();
				}else if (strStore.equalsIgnoreCase("onwear"))
				{
					itmStore.strOnWearScript = rafItemDef.readLine();
				}else if (strStore.equalsIgnoreCase("onunwear"))
				{
					itmStore.strOnUnWearScript = rafItemDef.readLine();
				}else if (strStore.equalsIgnoreCase("onget"))
				{
					itmStore.strOnGetScript = rafItemDef.readLine();
				}else if (strStore.equalsIgnoreCase("ondrop"))
				{
					itmStore.strOnDropScript = rafItemDef.readLine();
				}
				strStore = rafItemDef.readLine();
			}
			rafItemDef.close();
		}catch (Exception e)
		{
			LOG.printError("getItem():Parsing \""+strStore+"\" for item \""+inName+"\"", e);
			try
			{
				if (rafItemDef != null)
					rafItemDef.close();
			}catch(Exception e2)
			{
				LOG.printError("getItem():Closing file for item \""+inName+"\" after failed parse", e2);
			}
			return null;
		}
		return itmStore;
	}
	
	Item getItemFromVct(String inName)
	{
		try
		{
			int i;
			Item itmStore;
			StringTokenizer tokName = new StringTokenizer(inName, " ");
			String strStore = tokName.nextToken();
			i = Integer.parseInt(strStore);
			strStore = inName.substring(strStore.length()+1,inName.length());
			itmStore = (Item)vctItems.elementAt(i);
			if (itmStore.NAME.equals(strStore))
			{
				return itmStore;
			}
		}catch (Exception e)
		{
			LOG.printError("getItemFromVct():For item \""+inName+"\"", e);
		}
		return null;
	}
	
	Item getItemFromVctAndRemove(String inName)
	{
		try
		{
			int i;
			Item itmStore;
			StringTokenizer tokName = new StringTokenizer(inName, " ");
			String strStore = tokName.nextToken();
			i = Integer.parseInt(strStore);
			strStore = inName.substring(strStore.length()+1,inName.length());
			itmStore = (Item)vctItems.elementAt(i);
			if (itmStore.NAME.equals(strStore))
			{
				vctItems.removeElementAt(i);
				removeDuskObject(itmStore);
				return itmStore;
			}
		}catch (Exception e)
		{
			LOG.printError("getItemFromVctAndRemove():For item \""+inName+"\"", e);
		}
		return null;
	}
	
	public void playSound(int intSFX,int intLocX, int intLocY)
	{
		int i,
			i2,
			i3;
		DuskObject objStore;
		Entity thnStore;
	   	i=0;
	   	intLocX = intLocX-VIEW_RANGE;
	   	intLocY = intLocY-VIEW_RANGE;
	    if (intLocX<0)
		{
	    	i = -1*(intLocX);
	    }
	   	i2=0;
	    if (intLocY<0)
	    {
	    	i2 = -1*(intLocY);
	    }
		for (;i<MAP_SIZE;i++)
		{
			if (intLocX+i<MapColumns)
			{
				for (i3=i2;i3<MAP_SIZE;i3++)
				{
					if (intLocY+i3<MapRows)
					{
						objStore = objEntities[intLocX+i][intLocY+i3];
						while (objStore != null)
						{
							if (objStore.isLivingThing())
							{
								thnStore = (Entity)objStore;
								if (thnStore.isPlayer())
								{
									thnStore.playSFX(intSFX);
								}
							}
							objStore = objStore.objNext;
						}
					}
				}
			}
		}
	}
	
	public boolean canMoveTo(int inLocX, int inLocY,Entity thnStore) {
		Entity thnStore2;
		DuskObject objStore = null;
		Script scrStore;
		boolean blnStore;
		try {
			objStore = objEntities[inLocX][inLocY];
		} catch(Exception e) {}
		if (SCR_IGNORE_COL != null) {
			while (objStore != null) {
				if (objStore.isLivingThing()) {
					thnStore2 = (Entity)objStore;
					synchronized(SCR_IGNORE_COL) {
						SCR_IGNORE_COL.varVariables.clearVariables();
						SCR_IGNORE_COL.varVariables.addVariable("moving",thnStore);
						SCR_IGNORE_COL.varVariables.addVariable("blocking",thnStore2);
						if (!SCR_IGNORE_COL.rewindAndParseScript())
							return false;
					}
				}
				objStore = objStore.objNext;
			}
		}
		
		try {
			scrStore = new Script("defCanMoveScripts/"+inLocX+"_"+inLocY,this,false);
			scrStore.varVariables.addVariable("trigger",thnStore);
			blnStore = scrStore.rewindAndParseScript();
			scrStore.close();
			return blnStore;
		} catch (Exception e){}
		
		try {
			scrStore = (Script)vctTiles.elementAt(shrMap[0][inLocX][inLocY]);
			synchronized(scrStore) {
				scrStore.varVariables.clearVariables();
				scrStore.varVariables.addVariable("trigger",thnStore);
				blnStore = scrStore.rewindAndParseScript();
			}
			return blnStore;
		} catch (Exception e){}
		return false;
	}
	
	boolean canSee(int inLocX, int inLocY,Entity thnStore) {
		int i;
		Entity thnStore2;
		DuskObject objStore=null;
		Script scrStore;
		boolean blnStore;
		try
		{
			scrStore = new Script("defCanSeeScripts/"+inLocX+"_"+inLocY,this,false);
			scrStore.varVariables.addVariable("trigger",thnStore);
			blnStore = scrStore.rewindAndParseScript();
			scrStore.close();
			return blnStore;
		}catch (Exception e){}
		try
		{
			scrStore = (Script)vctSeeTiles.elementAt(shrMap[1][inLocX][inLocY]);
			synchronized(scrStore)
			{
				scrStore.varVariables.clearVariables();
				scrStore.varVariables.addVariable("trigger",thnStore);
				blnStore = scrStore.rewindAndParseScript();
			}
			return blnStore;
		}catch (Exception e){}
		return false;
	}
	
	//Following by Randall Leeds and Tom Weingarten
	public boolean canSeeTo(Entity thnStore,int destX, int destY) {
    	if (Math.abs(thnStore.intLocX-destX)>VIEW_RANGE || Math.abs(thnStore.intLocY-destY)>VIEW_RANGE) {
    		return false;
    	}
    	
    	if (!BLN_LOS)
    		return true;
    
    	int tempX = thnStore.intLocX;
    	int tempY = thnStore.intLocY;

        while(!(Math.abs(tempX-destX)<2 && Math.abs(tempY-destY)<2))
        {
        	if (Math.abs(tempX-destX) > Math.abs(tempY-destY))
         	{
            	if (tempX > destX)
            	{
             		try
             		{
             			if (!(canSee(tempX-1,tempY,thnStore)))
             				return false;
                    }catch(Exception e)
                    {
                    	return false;
                    }
                    tempX--;
                }else
                {
             		try
             		{
             			if (!(canSee(tempX+1,tempY,thnStore)))
             				return false;
                    }catch(Exception e)
                    {
                    	return false;
                    }
                    tempX++;
            	}
            }else if (Math.abs(tempX-destX) < Math.abs(tempY-destY))
            {
            	if (tempY > destY)
            	{
             		try
             		{
             			if (!(canSee(tempX,tempY-1,thnStore)))
             				return false;
                    }catch(Exception e)
                    {
                    	return false;
                    }
                    tempY--;
                }else
                {
             		try
             		{
             			if (!(canSee(tempX,tempY+1,thnStore)))
             				return false;
                    }catch(Exception e)
                    {
                    	return false;
                    }
                    tempY++;
                }
            }else
            {
            	if (tempX > destX && tempY > destY)
                {
             		try
             		{
             			if (!(canSee(tempX-1,tempY-1,thnStore)))
             				return false;
                    }catch(Exception e)
                    {
                    	return false;
                    }
                    tempX--;
                    tempY--;
                }else if (tempX < destX && tempY < destY)
                {
             		try
             		{
             			if (!(canSee(tempX+1,tempY+1,thnStore)))
             				return false;
                    }catch(Exception e)
                    {
                    	return false;
                    }
                    tempX++;
                    tempY++;
                }else if (tempX > destX && tempY < destY)
                {
             		try
             		{
             			if (!(canSee(tempX-1,tempY+1,thnStore)))
             				return false;
                    }catch(Exception e)
                    {
                    	return false;
                    }
                    tempX--;
                    tempY++;
                }else
                {
             		try
             		{
             			if (!(canSee(tempX+1,tempY-1,thnStore)))
             				return false;
                    }catch(Exception e)
                    {
                    	return false;
                    }
                    tempX++;
                    tempY--;
                }
			}
		}
		return true;
	}
    //End contributed portion
	
	public Merchant overMerchant(int x, int y)
	{
		int i;
		Merchant mrcStore;
		DuskObject objStore;
		try
		{
			objStore = objEntities[x][y];
		}catch (Exception e)
		{
			return null;
		}
		while (objStore != null)
		{
			if (objStore.isMerchant())
				return (Merchant)objStore;
			objStore = objStore.objNext;
		}
		return null;
	}
	
	public PlayerMerchant overPlayerMerchant(int x, int y)
	{
		int i;
		PlayerMerchant mrcStore;
		DuskObject objStore;
		try
		{
			objStore = objEntities[x][y];
		}catch (Exception e)
		{
			return null;
		}
		while (objStore != null)
		{
			if (objStore.isPlayerMerchant())
				return (PlayerMerchant)objStore;
			objStore = objStore.objNext;
		}
		return null;
	}
	
	synchronized void changeMap(int intLayer, int intLocX, int intLocY, short value)
	{
		if (value < 0 || value > vctTiles.size())
		{
			LOG.printMessage(Log.INFO, "Invalid value passed to changeMap("+intLocX+","+intLocY+","+value+")");
			return;
		}
		if (intLocX < 0 || intLocX > MapColumns || intLocY < 0 || intLocY > MapRows)
		{
			LOG.printMessage(Log.INFO, "Invalid location to changeMap("+intLocX+","+intLocY+","+value+")");
			return;
		}
		shrMap[intLayer][intLocX][intLocY] = value;
		BLN_MAP_CHANGE=true;
		updateMap(intLocX,intLocY);
	}
	
	synchronized void resizeMap(int x, int y)
	{
		int i,
			i2,
			X,
			Y;
		short newMap[][][]= new short[MapLayers][x][y];
		X = MapColumns;
		if (x < MapColumns)
		{
			X = x;
		}
		Y = MapRows;
		if (y < MapRows)
		{
			Y = y;
		}
		for (i=0;i<X;i++)
		{
			for (i2=0;i2<Y;i2++)
			{
				try
				{
					newMap[i][i2] = shrMap[i][i2];
				}catch(Exception e)
				{
				}
			}
		}
		shrMap = newMap;
		DuskObject newEntities[][]= new DuskObject[x][y];
		for (i=0;i<X;i++)
		{
			for (i2=0;i2<Y;i2++)
			{
				try
				{
					newEntities[i][i2] = objEntities[i][i2];
				}catch(Exception e)
				{
				}
			}
		}
		objEntities = newEntities;
		MapColumns = x;
		MapRows = y;
		Entity thnStore;
		for (i=0;i<vctSockets.size();i++)
		{
			thnStore = (Entity)vctSockets.elementAt(i);
			thnStore.resizeMap();
		}
		BLN_MAP_CHANGE = true;
	}
	
	void saveMap()
	{
		if (BLN_SAVING)
			return;
		try 
		{
			BLN_SAVING=true;
			StringTokenizer tknStore;
			Mob mobStore;
			Item itmStore;
			Sign sgnStore;
			Merchant mrcStore;
			Prop prpStore;
			File deleteme;
			RandomAccessFile rafFile;
    		int i,
        		i2, i3;
			if (BLN_MAP_CHANGE)
			{
		    	LOG.printMessage(Log.ALWAYS,"Saving map...");
				synchronized(shrMap)
				{
					deleteme = new File("shortmap");
					deleteme.delete();
					rafFile = new RandomAccessFile("shortmap", "rw");
		    		rafFile.writeInt(MapColumns);
		    		rafFile.writeInt(MapRows);
		    		for (i=0;i<MapLayers;i++)
				    {
				    	for (i2=0;i2<MapColumns;i2++)
				        {
				    		for (i3=0;i3<MapRows;i3++)
					        {
					        	rafFile.writeShort(shrMap[i][i2][i3]);
					        }
				        }
				    }
		    		rafFile.close();
				}
				String strMapLog = "shortmap_redraw";
				PrintStream psMap = new PrintStream(new FileOutputStream(strMapLog, true),true);
				psMap.println("# Map Saved");
				psMap.close();
				BLN_MAP_CHANGE=false;
			}

			if (BLN_MAP_CHANGE)
			{
		    	LOG.printMessage(Log.ALWAYS,"Saving mobs...");
				synchronized(vctMobs)
				{
					deleteme = new File("mobs");
					deleteme.delete();
		    		rafFile = new RandomAccessFile("mobs", "rw");
					for (i=0;i<vctMobs.size();i++)
					{
						mobStore = (Mob)vctMobs.elementAt(i);
						if (mobStore.blnOneUse == false)
						{
							if (mobStore.level == -1)
							{
								rafFile.writeBytes("mob2.3\n"+mobStore.NAME+"\n"+mobStore.originalX+"\n"+mobStore.originalY+"\n");
							}else
							{
								rafFile.writeBytes(mobStore.NAME+"\n"+mobStore.level+"\n"+mobStore.originalX+"\n"+mobStore.originalY+"\n");
							}
						}
					}
					rafFile.close();
				}
				BLN_MAP_CHANGE=false;
			}

			if (BLN_SIGN_CHANGE)
			{
		    	LOG.printMessage(Log.ALWAYS,"Saving signs...");
				synchronized(vctSigns)
				{
					deleteme = new File("signs");
					deleteme.delete();
		    		rafFile = new RandomAccessFile("signs", "rw");
					for (i=0;i<vctSigns.size();i++)
					{
						sgnStore = (Sign)vctSigns.elementAt(i);
						rafFile.writeBytes(sgnStore.strMessage+"\n"+sgnStore.intLocX+"\n"+sgnStore.intLocY+"\n");
					}
					rafFile.close();
				}
				BLN_SIGN_CHANGE=false;
			}

			if (BLN_MERCH_CHANGE)
			{
		    	LOG.printMessage(Log.ALWAYS,"Saving merchants...");
				synchronized(vctMerchants)
				{
					deleteme = new File("merchants");
					deleteme.delete();
		    		rafFile = new RandomAccessFile("merchants", "rw");
					for (i=0;i<vctMerchants.size();i++)
					{
						mrcStore = (Merchant)vctMerchants.elementAt(i);
						rafFile.writeBytes(mrcStore.intLocX+"\n"+mrcStore.intLocY+"\n");
						for (i2=0;i2<mrcStore.vctItems.size();i2++)
						{
							rafFile.writeBytes((String)mrcStore.vctItems.elementAt(i2)+"\n");
						}
						rafFile.writeBytes("end\n");
					}
					rafFile.close();
				}
				BLN_MERCH_CHANGE=false;
			}

			if (BLN_PROP_CHANGE)
			{
		    	LOG.printMessage(Log.ALWAYS,"Saving props...");
				synchronized(vctProps)
				{
					deleteme = new File("props");
					deleteme.delete();
		    		rafFile = new RandomAccessFile("props", "rw");
					for (i=0;i<vctProps.size();i++)
					{
						prpStore = (Prop)vctProps.elementAt(i);
						rafFile.writeBytes(prpStore.NAME+"\n"+prpStore.intLocX+"\n"+prpStore.intLocY+"\n");
					}
					rafFile.close();
				}
				BLN_PROP_CHANGE=false;
			}

			if (BLN_VAR_CHANGE)
			{
		    	LOG.printMessage(Log.ALWAYS,"Saving global variables...");
				synchronized(varVariables)
				{
					deleteme = new File("globals");
					deleteme.delete();
		    		rafFile = new RandomAccessFile("globals", "rw");
					Variable varStore;
					for (i=0;i<varVariables.vctVariables.size();i++)
					{
            			varStore = (Variable)varVariables.vctVariables.elementAt(i);
            			if (varStore.isString() || varStore.isNumber())
            			{
							rafFile.writeBytes(varStore.strName+"\n");
							rafFile.writeBytes(varStore.bytType+"\n");
							rafFile.writeBytes(varStore.objData+"\n");
            			}
					}
					rafFile.close();
				}
				BLN_VAR_CHANGE=false;
			}
		    LOG.printMessage(Log.ALWAYS,"Saved game settings without error");
		}catch (Exception e)
		{
			LOG.printError("saveMap():While saving game settings", e);
		}
		BLN_SAVING=false;
	}
	
	void backupMap()
	{
		try 
		{
			StringTokenizer tknStore;
			Mob mobStore;
			Item itmStore;
			Sign sgnStore;
			Merchant mrcStore;
			Prop prpStore;
			synchronized(shrMap)
			{
			File deleteme = new File("backup/shortmap.backup");
			deleteme.delete();
			RandomAccessFile rafFile = new RandomAccessFile("backup/shortmap.backup", "rw");
		    int i,
		        i2,
		        i3;
		    rafFile.writeInt(MapColumns);
		    rafFile.writeInt(MapRows);
	    	for (i=0;i<MapLayers;i++)
		    {
		    	for (i2=0;i2<MapColumns;i2++)
		        {
		    		for (i3=0;i3<MapRows;i3++)
			        {
			        	rafFile.writeShort(shrMap[i][i2][i3]);
			        }
		        }
		    }
		    rafFile.close();
			
			deleteme = new File("backup/mobs.backup");
			deleteme.delete();
		    rafFile = new RandomAccessFile("backup/mobs.backup", "rw");
			for (i=0;i<vctMobs.size();i++)
			{
				mobStore = (Mob)vctMobs.elementAt(i);
				if (mobStore.blnOneUse == false)
				{
					tknStore = new StringTokenizer(mobStore.NAME," ");
					rafFile.writeBytes(tknStore.nextToken()+"\n"+mobStore.level+"\n"+mobStore.originalX+"\n"+mobStore.originalY+"\n");
				}
			}
			rafFile.close();
			
			deleteme = new File("backup/signs.backup");
			deleteme.delete();
		    rafFile = new RandomAccessFile("backup/signs.backup", "rw");
			for (i=0;i<vctSigns.size();i++)
			{
				sgnStore = (Sign)vctSigns.elementAt(i);
				rafFile.writeBytes(sgnStore.strMessage+"\n"+sgnStore.intLocX+"\n"+sgnStore.intLocY+"\n");
			}
			rafFile.close();
			
			deleteme = new File("backup/merchants.backup");
			deleteme.delete();
		    rafFile = new RandomAccessFile("backup/merchants.backup", "rw");
			for (i=0;i<vctMerchants.size();i++)
			{
				mrcStore = (Merchant)vctMerchants.elementAt(i);
				rafFile.writeBytes(mrcStore.intLocX+"\n"+mrcStore.intLocY+"\n");
				for (i2=0;i2<mrcStore.vctItems.size();i2++)
				{
					rafFile.writeBytes((String)mrcStore.vctItems.elementAt(i2)+"\n");
				}
				rafFile.writeBytes("end\n");
			}
			rafFile.close();
			
			deleteme = new File("backup/props.backup");
			deleteme.delete();
		    rafFile = new RandomAccessFile("backup/props.backup", "rw");
			for (i=0;i<vctProps.size();i++)
			{
				prpStore = (Prop)vctProps.elementAt(i);
				rafFile.writeBytes(prpStore.NAME+"\n"+prpStore.intLocX+"\n"+prpStore.intLocY+"\n");
			}
			rafFile.close();
			}
		    LOG.printMessage(Log.ALWAYS,"Backed up game settings without error");
		}catch (Exception e)
		{
			LOG.printError("backupMap():While backing up settings", e);
		}
	}
	
	DuskObject getDuskObject(int x, int y, String strIn)
	{
		DuskObject objStore = objEntities[x][y];
		while (objStore != null)
		{
			if (objStore.NAME.equalsIgnoreCase(strIn))
			{
				return objStore;
			}
			objStore = objStore.objNext;
		}	
		return null;
	}
	
	void pushDuskObject(DuskObject objIn)
	{
		synchronized(objEntities)
		{
			if (objIn.intLocX < 0 || objIn.intLocY < 0 || objIn.intLocX >= MapColumns || objIn.intLocY >= MapRows)
			{
				return;
			}
			DuskObject objStore;
			objStore = objEntities[objIn.intLocX][objIn.intLocY];
			if (objIn == objStore)	// needed to add this check
			{						// as the invis condition
				return;				// adds the mob to update the
			}						// the flags
			if (objStore == null)
			{
				objEntities[objIn.intLocX][objIn.intLocY] = objIn;
			}else
			{
				while (objStore.objNext != null)
				{
					if (objIn == objStore)	// needed to add this check
					{						// as the invis condition
						return;				// adds the mob to update the
					}						// the flags
					objStore = objStore.objNext;
				}
				objStore.objNext = objIn;
			}
		}
	}
	
	void popDuskObject(DuskObject objIn)
	{
		synchronized(objEntities)
		{
			if (objIn.intLocX < 0 || objIn.intLocY < 0 || objIn.intLocX >= MapColumns || objIn.intLocY >= MapRows)
			{
				return;
			}
			if (objEntities[objIn.intLocX][objIn.intLocY] == null)
			{
				return;
			}else
			{
				if (objEntities[objIn.intLocX][objIn.intLocY] == objIn)
				{
					objEntities[objIn.intLocX][objIn.intLocY] = objIn.objNext;
					objIn.objNext = null;
				}else
				{
					DuskObject objStore = objEntities[objIn.intLocX][objIn.intLocY];
					while (objStore.objNext != null && objStore.objNext != objIn)
					{
						objStore = objStore.objNext;
					}
					if (objStore.objNext != null)
					{
						objStore.objNext = objStore.objNext.objNext;
					}
					objIn.objNext = null;
				}
			}
		}
	}
	
	public void addDuskObject(DuskObject objIn)
	{
		if (objIn.isLivingThing())
		{
			Entity thnStore = (Entity)objIn;
			if (!thnStore.BLN_LOADED)
				return;
		}
		synchronized(objEntities)
		{
			pushDuskObject(objIn);
			addEntity(objIn);
		}
	}
	
	public void removeDuskObject(DuskObject objIn)
	{
		if (objIn.isLivingThing())
		{
			Entity thnStore = (Entity)objIn;
			if (!thnStore.BLN_LOADED)
				return;
		}
		synchronized(objEntities)
		{
			removeEntity(objIn);
			popDuskObject(objIn);
		}
	}
	
	public void moveDuskObject(DuskObject objIn,int inLocX,int inLocY) {
		popDuskObject(objIn);
		objIn.intLocX = inLocX;
		objIn.intLocY = inLocY;
		addDuskObject(objIn);
	}
	
	synchronized void updateMap(int intLocX, int intLocY)
	{
		DuskObject objStore;
		Entity thnStore;
		int i=0, i2=0, i3;
	
		if (intLocX-VIEW_RANGE<0) i = -1*(intLocX-VIEW_RANGE);	
		if (intLocY-VIEW_RANGE<0) i2 = -1*(intLocY-VIEW_RANGE);
		
		for (;i<MAP_SIZE;i++) {
			if (intLocX+i-VIEW_RANGE<MapColumns) {
				for (i3=i2;i3<MAP_SIZE;i3++) {
					if (intLocY+i3-VIEW_RANGE<MapRows) {
						objStore = objEntities[intLocX+i-VIEW_RANGE][intLocY+i3-VIEW_RANGE];
						while (objStore != null) {
							if (objStore.isLivingThing()) {
								thnStore = (Entity)objStore;
								if (thnStore.isPlayer())
									thnStore.updateMap();
							}
							objStore = objStore.objNext;
						}
					}
				}
			}
		}
	}
			
	public void run() {
		LOG.printMessage(Log.ALWAYS,"Mob ticks = " + this.MOB_TICK);
		LOG.printMessage(Log.ALWAYS,"Player ticks = " + PLAYER_TICK);
		LOG.printMessage(Log.ALWAYS,"Starting Ticks");
		int tick=0,
			i;
		Entity thnStore,
					thnStore2;
		Battle batStore;
		long lngTime = System.currentTimeMillis(),
				lngPause=0;
		while(true) {
			try { //250 milliseconds per tick
				lngPause = PLAYER_TICK -(System.currentTimeMillis()-lngTime);
				if (lngPause > 0)
					Thread.currentThread().sleep(lngPause);
				lngTime = System.currentTimeMillis();
				if (tick%73==0) {
					for (i=0;i<vctPets.size();i++) {
						thnStore = (Entity)vctPets.elementAt(i);
						if (thnStore.BATTLE == null) {
							if (thnStore.BLN_SLEEP) {
								thnStore.stats.incHP(3+(thnStore.stats.getVIT()+thnStore.stats.getVIT_BON()));
								if (thnStore.stats.getHP() > (thnStore.stats.getMAXHP()+thnStore.stats.getHP_BON())) {
									thnStore.stats.setHP(thnStore.stats.getMAXHP()+thnStore.stats.getHP_BON());
								}
								thnStore.stats.incSP(3+(thnStore.MND+thnStore.MND_B));
								if (thnStore.stats.getSP() > (thnStore.stats.getMAXSP()+thnStore.stats.getSP_BON()))
								{
									thnStore.stats.incSP(thnStore.stats.getMAXSP()+thnStore.stats.getSP_BON());
								}
							} else {
								thnStore.stats.incHP(1+((thnStore.stats.getVIT()+thnStore.stats.getVIT_BON()))/2);
								if (thnStore.stats.getHP() > (thnStore.stats.getMAXHP()+thnStore.stats.getHP_BON())) {
									thnStore.stats.setHP(thnStore.stats.getMAXHP()+thnStore.stats.getHP_BON());
								}
								thnStore.stats.incSP(1+((thnStore.MND+thnStore.MND_B)/2));
								if (thnStore.stats.getSP() > (thnStore.stats.getMAXSP()+thnStore.stats.getSP_BON())) {
									thnStore.stats.incSP(thnStore.stats.getMAXSP()+thnStore.stats.getSP_BON());
								}
							}
						}
						if (thnStore.ENT_MASTER != null) {
							if (!thnStore.ENT_MASTER.BLN_WORKING) {
								thnStore.close();
								continue;
							}
							boolean blnTmpShouldSave = thnStore.BLN_SAVE_FLAG;
							thnStore.ENT_MASTER.updateStats();
							thnStore.BLN_SAVE_FLAG = blnTmpShouldSave;
						} else {
							thnStore.close();
							continue;
						}
						thnStore.savePlayer();
					}
				}
				//Following code submitted by Randall Leeds, revised by Tom Weingarten:
				for(i=0;i<vctSockets.size();i++) {
					thnStore = (Entity)vctSockets.elementAt(i);
					if (!thnStore.BLN_WORKING) {
						//thnStore.closeNoMsgPlayer();
						continue;
					}
					if (!thnStore.BLN_SAVE_FLAG) {
						continue;
					}
					if (thnStore.noChannel > 0 && tick%4 == 0) {
						thnStore.noChannel--;
					}
					synchronized(thnStore.vctMovement) {
						if(thnStore.vctMovement.size() > 0) {
							try {
								String strStore = (String)thnStore.vctMovement.elementAt(0);
								char charStore = strStore.charAt(0);
								switch(charStore) {
									case 'n':
										thnStore.moveN();
										break;
									case 's':
										thnStore.moveS();
										break;
									case 'w':
										thnStore.moveW();
										break;
									case 'e':
										thnStore.moveE();
										break;
								}
								thnStore.vctMovement.removeElement(thnStore.vctMovement.elementAt(0));
							}catch(Exception e) {
								LOG.printError("DuskEngine.run():At movement tick for players", e);
							}
						}
					}
					if (tick%73 == 0) {
						if (thnStore.BATTLE == null) {
							if (thnStore.BLN_SLEEP) {
								thnStore.stats.incHP(3+(thnStore.stats.getVIT()+thnStore.stats.getVIT_BON()));
								if (thnStore.stats.getHP() > (thnStore.stats.getMAXHP()+thnStore.stats.getHP_BON())) {
									thnStore.stats.incHP(thnStore.stats.getMAXHP()+thnStore.stats.getHP_BON());
								}
								thnStore.stats.incSP(3+(thnStore.stats.getMND()+thnStore.stats.getMND_BON()));
								if (thnStore.stats.getSP() > (thnStore.stats.getMAXSP()+thnStore.stats.getSP_BON())) {
									thnStore.stats.incSP(thnStore.stats.getMAXSP()+thnStore.stats.getSP_BON());
								}
							} else {
								thnStore.stats.incHP(1+((thnStore.stats.getVIT()+thnStore.stats.getVIT_BON()))/2);
								if (thnStore.stats.getHP() > (thnStore.stats.getMAXHP()+thnStore.stats.getHP_BON())) {
									thnStore.stats.incHP(thnStore.stats.getMAXHP()+thnStore.stats.getHP_BON());
								}
								thnStore.stats.incSP(1+((thnStore.MND+thnStore.MND_B)/2));
								if (thnStore.stats.getSP() > (thnStore.stats.getMAXSP()+thnStore.stats.getSP_BON())) {
									thnStore.stats.incSP(thnStore.stats.getMAXSP()+thnStore.stats.getSP_BON());
								}
							}
							thnStore.updateInfo();
							thnStore.savePlayer();
						}
					}
				}
				//End of code submitted by Randall Leeds
				
				if (tick%10 == 0) {
					for (i=0;i<vctBattles.size();i++) {
						batStore = (Battle)vctBattles.elementAt(i);
						if (batStore.blnRunning == false) {
							vctBattles.removeElementAt(i);
							i--;
						} else {
							batStore.run();
						}
					}
				}
				if (tick > 72) {
					tick = 0;
					for (i=0;i<vctMobs.size();i++) {
						thnStore = (Entity)vctMobs.elementAt(i);
						if (thnStore.BATTLE == null) {
							if (thnStore.intLocX != -6) {
								thnStore.stats.incHP(1+(thnStore.stats.getVIT()/2));
								if (thnStore.stats.getHP() > thnStore.stats.getMAXHP()) {
									thnStore.stats.setHP(thnStore.stats.getMAXHP());
								}
								thnStore.stats.incSP(1+(thnStore.stats.getMND()/2));
								if (thnStore.stats.getSP() > thnStore.stats.getMAXSP()) {
									thnStore.stats.setSP(thnStore.stats.getMAXSP());
								}
							} else {
								thnStore.stats.incHP();
								if (thnStore.stats.getHP() > 0) {
									thnStore.stats.setHP(thnStore.stats.getMAXHP());
									thnStore.stats.setHP(thnStore.stats.getMAXSP());
									thnStore.changeLocBypass(thnStore.originalX,thnStore.originalY);
								}
							}
						}
					}
					for (i=0;i<vctFactions.size();i++) {
						((Faction)(vctFactions.elementAt(i))).saveFactionData();
					}
				}
			tick++;
			} catch (Exception e) {
				LOG.printError("DuskEngine.run():at ticks", e);
			}
		}
	}

	/**
	 * @param strClanName
	 * @return
	 */
	public boolean isGoodName(String string) {
		if (string == null)
			return false;
		if (string.equals("")
			|| string.length() > NAME_CAP
			|| string.toLowerCase().equalsIgnoreCase("god")
			|| string.toLowerCase().equalsIgnoreCase("default")
			|| string.toLowerCase().startsWith("admin")
			|| string.toLowerCase().startsWith("moderator")
			|| string.toLowerCase().equalsIgnoreCase("dusk")
		)
			return false;

		String strValid = "0123456789][_'#";
		char[] letters = string.toCharArray();
		char[] validChars = strValid.toCharArray();
		boolean blnValid = true;

		for(int n=0; n<letters.length;n++) {
			if (!java.lang.Character.isLetter(letters[n])) {
				blnValid = false;
				for(int i=0; i<validChars.length;i++) {
					if (letters[n] == validChars[i]) {
						blnValid = true;
					}
				}
			}
		}
		if (!blnValid) {
			return false;
		}

	    if(string.indexOf('\\')!=-1) return false;
	    if(string.indexOf('\'')!=-1) return false;
	    if(string.indexOf('"')!=-1) return false;
	    if(string.indexOf('%')!=-1) return false;
	    if(string.indexOf(';')!=-1) return false;
	    if(string.indexOf(':')!=-1) return false;
	    if(string.indexOf('#')!=-1) return false;
	    return true;
	}
}