/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk.

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or
remove this license, and accompany it with all redistributions.
*/

import java.io.*;
import java.io.PrintStream;
import java.io.FileOutputStream;
import java.util.Vector;
import java.util.Iterator;
import java.util.StringTokenizer;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;


/**
*DuskEngine is the center of the Dusk game.
*
*@author Tom Weingarten
*/
public class DuskEngine implements Runnable
{
	public static final int CHUNK_SIZE = 32;
	private Map<String, Integer> loadedChunks = new HashMap<>();
	//Database
	DatabaseManager dbManager;

	//Logger
	Log log;

	//Prefs:
	int port=7400,
		trackerport=7401,
		maxconnections=0,
		petcost=100,
		merchantimage,
		signimage,
		battlesound=-1,
		mobrespawnspeed,
		viewrangeX=10,
		viewrangeY=7,
		entityViewrangeX=10,
		entityViewrangeY=7,
		oldviewrangeX=0,
		oldviewrangeY=0,
		mapsizeX=21,
		mapsizeY=15,
		titlecap=0,
		noChannelMax=600,  // defalut 600=10 minutes
		namecap=20,  //default 20
		messagecap=120,  //default 120
		changeRaceCpLimit=100, //default 100cp
		logLevel=Log.ERROR,
		traincost=100,
		expgainmod=10;
	double	gplosemod=1D/16D, //default 1/16
		explosemod=1D/16D,
		gpfleemod=1D/64D,	//default 1/64
		expfleemod=1D/64D;
	long lngMobTicks=1000,	//default 1000 milliseconds(1 second) per tick
		lngPlayerTicks=125,	//default 125 milliseconds(1/8 second) per tick
		floodLimit=1000;	//default 1000 milliseconds(1 second) btw messages
	String trackername="Just Some World.",
			site="none",
			strRCAddress,
			strRCName,
			strLogFile=null,
			strMusicAddress;
	boolean blnMusic=false,
			blnLineOfSight=false,
			blnAI=false,
			blnIPF=false,
			tracker=true,
			blnSavingGame=false,
			blnShuttingDown=false;
	Script scrCanSeeLivingThing=null,
			scrCanMoveThroughLivingThing=null,
			scrCanAttack=null,
			scrOnStart=null,
			scrOnDeath=null,
			scrOnLogOut=null;
	//End Prefs

	static String version="3.0z47";
	Date datStart= new Date(System.currentTimeMillis());

	protected int MapRows,
		MapColumns;
	protected short shrMap[][];
	protected short shrMapAlpha[][];
	protected short shrMapAlpha2[][];
	protected short shrMapOwnerPrivs[][];
	protected int intMapOwnerID[][];
	protected Config IDtoName;
	protected DuskObject objEntities[][];
	byte[] tileData;
	Vector vctSockets,
		vctMerchants,
		vctMobs,
		vctItems,
		vctBattles,
		vctSigns,
		vctPets,
		vctProps,
		vctTiles,
		vctTileActions,
		vctSeeTiles,
                vctTileAnims,
		vctFactions,
		vctSpellGroups,
		vctBannedIP,
		vctCheckConditions;
	VariableSet varVariables;
	VariableSet varIP;
	private long ID=0;

	boolean blnVariableListChanged=false,
			blnMapHasChanged=false,
			blnMobListChanged=false,
			blnSignListChanged=false,
			blnMerchantListChanged=false,
			blnPropListChanged=false;

	public DuskEngine()
	{
		dbManager = new DatabaseManager("database");
		RandomAccessFile rafFile = null;
		vctSockets = new Vector(0,10);
		vctItems = new Vector(0,10);
		vctMobs = new Vector(0,10);
		vctSigns = new Vector(0,10);
		vctMerchants = new Vector(0,10);
		vctBattles = new Vector(0,10);
		vctPets = new Vector(0,10);
		vctProps = new Vector(0,10);
		vctTiles = new Vector(0,1);
                vctTileAnims = new Vector(0,1);
		vctTileActions = new Vector(0,1);
		vctSeeTiles = new Vector(0,1);
		vctFactions = new Vector(0,5);
		vctSpellGroups = new Vector(0,1);
		vctBannedIP = new Vector(0,1);
		vctCheckConditions = new Vector(0,5);
		varVariables = new VariableSet();
		varIP = new VariableSet();
		log = new Log(System.out);

		try
		{
			int i=0,
				i2=0;
		    String strStore;

			loadPrefs();

			// Load Map
			shrMap = (short[][])dbManager.get("map/shrMap");
			if (shrMap != null) {
				log.printMessage(Log.INFO,"Loading Map from Database...");
				shrMapAlpha = (short[][])dbManager.get("map/shrMapAlpha");
				shrMapAlpha2 = (short[][])dbManager.get("map/shrMapAlpha2");
				MapColumns = shrMap.length;
				MapRows = shrMap[0].length;
				objEntities = new DuskObject[MapColumns][MapRows];
			} else {
				log.printMessage(Log.INFO,"Map not in database, loading from file...");
				File newmap = new File("../DuskComet-Richter/shortmap");
				if (newmap.exists())
				{
					rafFile = new RandomAccessFile("../DuskComet-Richter/shortmap", "r");
					log.printMessage(Log.INFO,"Loading Map...");
					int magicNumber = rafFile.readInt();
					if (magicNumber == 0xD5D002) { // V3 map
						log.printMessage(Log.INFO,"Loading V3 map...");
						MapColumns = rafFile.readInt();
						MapRows = rafFile.readInt();
						log.printMessage(Log.VERBOSE,MapColumns + "/" + MapRows);
						shrMap = new short[MapColumns][MapRows];
						shrMapAlpha = new short[MapColumns][MapRows];
						shrMapAlpha2 = new short[MapColumns][MapRows];
						objEntities = new DuskObject[MapColumns][MapRows];
						for (i=0;i<MapColumns;i++) {
							for (i2=0;i2<MapRows;i2++) {
								shrMap[i][i2] = rafFile.readShort();
							}
						}
						for (i=0;i<MapColumns;i++) {
							for (i2=0;i2<MapRows;i2++) {
								shrMapAlpha[i][i2] = rafFile.readShort();
							}
						}
						for (i=0;i<MapColumns;i++) {
							for (i2=0;i2<MapRows;i2++) {
								shrMapAlpha2[i][i2] = rafFile.readShort();
							}
						}
					} else if (magicNumber == 0xD5D001) { // V2 map
						log.printMessage(Log.INFO,"Loading V2 map...");
						MapColumns = rafFile.readInt();
						MapRows = rafFile.readInt();
						log.printMessage(Log.VERBOSE,MapColumns + "/" + MapRows);
						shrMap = new short[MapColumns][MapRows];
						shrMapAlpha = new short[MapColumns][MapRows];
						shrMapAlpha2 = new short[MapColumns][MapRows]; // Initialize with zeros
						objEntities = new DuskObject[MapColumns][MapRows];
						for (i=0;i<MapColumns;i++) {
							for (i2=0;i2<MapRows;i2++) {
								shrMap[i][i2] = rafFile.readShort();
							}
						}
						for (i=0;i<MapColumns;i++) {
							for (i2=0;i2<MapRows;i2++) {
								shrMapAlpha[i][i2] = rafFile.readShort();
								shrMapAlpha2[i][i2] = 0;
							}
						}
					} else { // V1 map
						log.printMessage(Log.INFO,"Loading V1 map...");
						MapColumns = magicNumber;
						MapRows = rafFile.readInt();
						log.printMessage(Log.VERBOSE,MapColumns + "/" + MapRows);
						shrMap = new short[MapColumns][MapRows];
						shrMapAlpha = new short[MapColumns][MapRows]; // Initialize with zeros
						shrMapAlpha2 = new short[MapColumns][MapRows]; // Initialize with zeros
						objEntities = new DuskObject[MapColumns][MapRows];
						for (i=0;i<MapColumns;i++) {
							for (i2=0;i2<MapRows;i2++) {
								shrMap[i][i2] = rafFile.readShort();
								shrMapAlpha[i][i2] = 0;
								shrMapAlpha2[i][i2] = 0;
							}
						}
					}
					rafFile.close();
				}else
				{
					rafFile = new RandomAccessFile("../DuskComet-Richter/map", "r");
					log.printMessage(Log.INFO,"Converting old map to new short format...");
					MapColumns = rafFile.readInt();
					MapRows = rafFile.readInt();
					log.printMessage(Log.VERBOSE,"Map size: "+MapColumns + "/" + MapRows);
					shrMap = new short[MapColumns][MapRows];
					objEntities = new DuskObject[MapColumns][MapRows];
					for (i=0;i<MapColumns;i++)
					{
						for (i2=0;i2<MapRows;i2++)
						{
							shrMap[i][i2] = rafFile.readByte();
						}
					}
					rafFile.close();
				}
				dbManager.put("map/shrMap", shrMap);
				dbManager.put("map/shrMapAlpha", shrMapAlpha);
				dbManager.put("map/shrMapAlpha2", shrMapAlpha2);
			}

			log.printMessage(Log.INFO,"Map Loaded...");

			// All other data types will follow this pattern: try to load from DB, if it fails, load from file and then save to DB.
			if (dbManager.get("data/migrated") == null) {
				log.printMessage(Log.INFO, "Performing one-time data migration to chunk format...");
				// Merchants
				try {
					rafFile = new RandomAccessFile("../DuskComet-Richter/merchants", "r");
					Map<String, Vector<Merchant>> chunkedMerchants = new HashMap<>();
					Merchant mrcStore;
					strStore = rafFile.readLine();
					while (!(strStore == null || strStore.equals(""))) {
						mrcStore = new Merchant(this);
						mrcStore.vctItems = new Vector(0);
						mrcStore.intLocX = Integer.parseInt(strStore);
						mrcStore.intLocY = Integer.parseInt(rafFile.readLine());
						strStore = rafFile.readLine();
						while (strStore != null && !strStore.equals("") && !strStore.equalsIgnoreCase("end")) {
							mrcStore.vctItems.addElement(strStore);
							strStore = rafFile.readLine();
						}
						String chunkKey = "chunk/" + (mrcStore.intLocX / CHUNK_SIZE) + "_" + (mrcStore.intLocY / CHUNK_SIZE) + "/merchants";
						chunkedMerchants.computeIfAbsent(chunkKey, k -> new Vector<>()).add(mrcStore);
						strStore = rafFile.readLine();
					}
					rafFile.close();
					for (Map.Entry<String, Vector<Merchant>> entry : chunkedMerchants.entrySet()) {
						dbManager.put(entry.getKey(), entry.getValue());
					}
				} catch (Exception e) {
					log.printError("DuskEngine():While migrating merchants", e);
				}

				// Mobs
				try {
					Map<String, Vector<LivingThing>> chunkedMobs = new HashMap<>();
					LivingThing thnStore;
					rafFile = new RandomAccessFile("../DuskComet-Richter/mobs", "r");
					strStore = rafFile.readLine();
					while (strStore !=null)
					{
						if (strStore.equals("")) break;
						if (strStore.equals("mob2.3"))
						{
							strStore = rafFile.readLine();
							thnStore = new Mob(strStore, Integer.parseInt(rafFile.readLine()), Integer.parseInt(rafFile.readLine()), this);
						} else {
							thnStore = new Mob(strStore, Integer.parseInt(rafFile.readLine()), Integer.parseInt(rafFile.readLine()), Integer.parseInt(rafFile.readLine()), this);
						}
						String chunkKey = "chunk/" + (thnStore.intLocX / CHUNK_SIZE) + "_" + (thnStore.intLocY / CHUNK_SIZE) + "/mobs";
						chunkedMobs.computeIfAbsent(chunkKey, k -> new Vector<>()).add(thnStore);
						strStore = rafFile.readLine();
					}
					rafFile.close();
					for (Map.Entry<String, Vector<LivingThing>> entry : chunkedMobs.entrySet()) {
						dbManager.put(entry.getKey(), entry.getValue());
					}
				} catch (Exception e) {
					log.printError("DuskEngine():While migrating mobs", e);
				}

				// Signs
				try {
					Map<String, Vector<Sign>> chunkedSigns = new HashMap<>();
					rafFile = new RandomAccessFile("../DuskComet-Richter/signs", "r");
					strStore = rafFile.readLine();
					while (!(strStore == null || strStore.equals("")))
					{
						Sign sgnStore = new Sign("sign",strStore,Integer.parseInt(rafFile.readLine()),Integer.parseInt(rafFile.readLine()),getID());
						String chunkKey = "chunk/" + (sgnStore.intLocX / CHUNK_SIZE) + "_" + (sgnStore.intLocY / CHUNK_SIZE) + "/signs";
						chunkedSigns.computeIfAbsent(chunkKey, k -> new Vector<>()).add(sgnStore);
						strStore = rafFile.readLine();
					}
					rafFile.close();
					for (Map.Entry<String, Vector<Sign>> entry : chunkedSigns.entrySet()) {
						dbManager.put(entry.getKey(), entry.getValue());
					}
				} catch (Exception e) {
					log.printError("DuskEngine():While migrating signs", e);
				}

				// Props
				try {
					Map<String, Vector<Prop>> chunkedProps = new HashMap<>();
					rafFile = new RandomAccessFile("../DuskComet-Richter/props","r");
					strStore = rafFile.readLine();
					while (!(strStore == null || strStore.equals("")))
					{
						Prop prpStore = getProp(strStore);
						if (prpStore != null)
						{
							prpStore.intLocX = Integer.parseInt(rafFile.readLine());
							prpStore.intLocY = Integer.parseInt(rafFile.readLine());
							String chunkKey = "chunk/" + (prpStore.intLocX / CHUNK_SIZE) + "_" + (prpStore.intLocY / CHUNK_SIZE) + "/props";
							chunkedProps.computeIfAbsent(chunkKey, k -> new Vector<>()).add(prpStore);
						}
						strStore = rafFile.readLine();
					}
					rafFile.close();
					for (Map.Entry<String, Vector<Prop>> entry : chunkedProps.entrySet()) {
						dbManager.put(entry.getKey(), entry.getValue());
					}
				} catch (Exception e) {
					log.printError("DuskEngine():While migrating props", e);
				}

				dbManager.put("data/migrated", true);
				log.printMessage(Log.INFO, "Data migration complete.");
			}

			varVariables = (VariableSet)dbManager.get("data/globals");
			if (varVariables == null) {
				log.printMessage(Log.INFO,"Global variables not in database, loading from file...");
				varVariables = new VariableSet();
				try {
					rafFile = new RandomAccessFile("../DuskComet-Richter/globals", "r");
					String strVarName = rafFile.readLine();
					while (!(strVarName == null || strVarName.equals("")))
					{
						int intType = Integer.parseInt(rafFile.readLine());
						switch (intType)
						{
							case 0:
								varVariables.addVariable(strVarName, (double)Double.parseDouble(rafFile.readLine()));
								break;
							case 1:
								varVariables.addVariable(strVarName, rafFile.readLine());
								break;
						}
						strVarName = rafFile.readLine();
					}
					rafFile.close();
					dbManager.put("data/globals", varVariables);
				} catch (Exception e) {
					log.printError("DuskEngine():While loading globals from file", e);
				}
			}

			//Start onBoot script
			try
			{
				Script scrOnBoot = new Script("conf/onBoot",this,true);
				scrOnBoot.runScript();
				scrOnBoot.close();
				log.printMessage(Log.INFO,"Ran onBoot script.");
			}catch(Exception e)
			{
				log.printError("DuskEngine():Failed to run onBoot script, maybe it doesn't exist? (Not a fatal error)", e);
				log.printMessage(Log.ALWAYS, "To create an onBoot script, type \"view conf onBoot\" in game as a high or master god.");
			}
		}catch(Exception e)
		{
			log.printError("DuskEngine()", e);
		}

		Runtime.getRuntime().addShutdownHook(new Thread(() -> {
			blnShuttingDown = true;
			log.printMessage(Log.ALWAYS, "Shutdown hook initiated. Saving all loaded chunks...");
			saveAllChunks();
			log.printMessage(Log.ALWAYS, "All chunks saved. Shutdown complete.");
		}));
	}

	synchronized void saveAllChunks() {
		for (String chunkKey : loadedChunks.keySet()) {
			String[] parts = chunkKey.split("_");
			int chunkX = Integer.parseInt(parts[0]);
			int chunkY = Integer.parseInt(parts[1]);

			// Save merchants
			Vector<Merchant> merchantsInChunk = new Vector<>();
			for (Iterator<Merchant> it = vctMerchants.iterator(); it.hasNext();) {
				Merchant m = it.next();
				if (m.intLocX / CHUNK_SIZE == chunkX && m.intLocY / CHUNK_SIZE == chunkY) {
					merchantsInChunk.add(m);
				}
			}
			if (!merchantsInChunk.isEmpty()) {
				dbManager.put("chunk/" + chunkKey + "/merchants", merchantsInChunk);
			}

			// Save mobs
			Vector<LivingThing> mobsInChunk = new Vector<>();
			for (Iterator<LivingThing> it = vctMobs.iterator(); it.hasNext();) {
				LivingThing m = it.next();
				if (m.intLocX / CHUNK_SIZE == chunkX && m.intLocY / CHUNK_SIZE == chunkY) {
					mobsInChunk.add(m);
				}
			}
			if (!mobsInChunk.isEmpty()) {
				dbManager.put("chunk/" + chunkKey + "/mobs", mobsInChunk);
			}
		}
	}

	boolean isGoodIP(String strIP)
	{
		RandomAccessFile rafFile = null;
		try
		{
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
			log.printError("isGoodIP():Checking for bad IP address", e);
			return false;
		}
		return true;
	}

	boolean isGoodName(String strName)
	{
		if (strName == null)
			return false;
		if (strName.equals("")
			|| strName.length() > namecap
			|| strName.toLowerCase().equals("god")
			|| strName.toLowerCase().equals("default"))
			return false;

		String strValid = "0123456789][_'#";
		char[] letters = strName.toCharArray();
		char[] validChars = strValid.toCharArray();
		boolean blnValid = true;

		for(int n=0; n<letters.length;n++)
		{
			if (!Character.isLetter(letters[n]))
			{
				blnValid = false;
				for(int i=0; i<validChars.length;i++)
				{
					if (letters[n] == validChars[i])
					{
						blnValid = true;
					}
				}
			}
		}
		if (!blnValid)
		{
			return false;
		}

		RandomAccessFile rafFile = null;
		try
		{
			String strDirtyWord;
			String strLowerCaseName = strName.toLowerCase();
			rafFile = new RandomAccessFile("conf/dirtyWordFile", "r");
			strDirtyWord = rafFile.readLine();
			while (strDirtyWord != null)
			{
				if (strLowerCaseName.indexOf(strDirtyWord) != -1)
				{
					rafFile.close();
					return false;
				}
				strDirtyWord = rafFile.readLine();
			}
			rafFile.close();
		}catch (Exception e)
		{
			log.printError("isGoodName():"+strName + " had an error checking for bad name", e);
			return false;
		}
		return true;
	}

	synchronized void loadPrefs()
	{
		Config settings = new Config(this, "conf/prefs");
		//Load Prefs
		strLogFile			= settings.getString("LogFileName",strLogFile);
		if (strLogFile != null)
		{
			try
			{
				log = new Log(new PrintStream(new FileOutputStream(strLogFile, true),true));
			} catch (Exception e)
			{
				log = new Log(System.out);
				log.printError("loadPrefs():Opening log file \""+strLogFile+"\"", e);
			}
		} else
		{
			log = new Log(System.out);
		}
		log.printMessage(Log.INFO, "Loading Preferences...");

		logLevel			= settings.getInt("LoggingLevel",logLevel);
		log.setLogLevel(logLevel);

		port				= settings.getInt("Port",port);
		tracker				= settings.getBoolean("Tracker",tracker);
		trackerport			= settings.getInt("TrackerPort",trackerport);
		trackername			= settings.getString("TrackerName",trackername);
		site				= settings.getString("TrackerSite",site);
		strRCAddress		= settings.getString("RCAddress",strRCAddress);
		strRCName			= settings.getString("RCName",strRCName);
		maxconnections		= settings.getInt("MaxConnections",maxconnections);
		blnMusic			= settings.getBoolean("Music",blnMusic);
		blnAI				= settings.getBoolean("Ai",blnAI);
		blnLineOfSight		= settings.getBoolean("LineOfSight",blnLineOfSight);
		blnIPF				= settings.getBoolean("UniqueIPFilter",blnIPF);
		changeRaceCpLimit	= settings.getInt("ChangeRaceCPLimit",changeRaceCpLimit);
		petcost				= settings.getInt("PetCost",petcost);
		messagecap			= settings.getInt("MessageCap",messagecap);
		namecap				= settings.getInt("NameCap",namecap);
		titlecap			= settings.getInt("TitleCap",titlecap);
		noChannelMax		= settings.getInt("NoChannelMax",noChannelMax);
		merchantimage		= settings.getInt("MerchantImage",merchantimage);
		signimage			= settings.getInt("SignImage",signimage);
		battlesound			= settings.getInt("BattleSound",battlesound);
		mobrespawnspeed		= -1*settings.getInt("MobReSpawnSpeed",mobrespawnspeed);
		traincost			= settings.getInt("TrainCost",traincost);
		expgainmod			= settings.getInt("ExpGainMod",expgainmod);
		gplosemod			= settings.getDouble("GpLoseMod",gplosemod);
		explosemod			= settings.getDouble("ExpLoseMod",explosemod);
		gpfleemod			= settings.getDouble("GpFleeMod",gpfleemod);
		expfleemod			= settings.getDouble("ExpFleeMod",expfleemod);
		viewrangeX			= settings.getInt("ViewRangeX",viewrangeX);
		viewrangeY			= settings.getInt("ViewRangeY",viewrangeY);
		entityViewrangeX	= settings.getInt("EntityViewRangeX",entityViewrangeX);
		entityViewrangeY	= settings.getInt("EntityViewRangeY",entityViewrangeY);
		lngMobTicks			= settings.getLong("MobTicks",lngMobTicks);
		lngPlayerTicks		= settings.getLong("PlayerTicks",lngPlayerTicks);
		if (viewrangeX != oldviewrangeX || viewrangeY != oldviewrangeY)
		{
			oldviewrangeX = viewrangeX;
			oldviewrangeY = viewrangeY;
			mapsizeX = 1+(2*viewrangeX);
			mapsizeY = 1+(2*viewrangeY);
			LivingThing thnStore;
			for (int i=0;i<vctSockets.size();i++)
			{
				thnStore = (LivingThing)vctSockets.elementAt(i);
				thnStore.resizeMap();
			}
		}
		//Load Triggered Scripts
		try
		{
			if (scrCanSeeLivingThing != null)
			{
				synchronized(scrCanSeeLivingThing)
				{
					scrCanSeeLivingThing.close();
					scrCanSeeLivingThing = new Script("conf/canSeeLivingThing",this,true);
				}
			} else
			{
				scrCanSeeLivingThing = new Script("conf/canSeeLivingThing",this,true);
			}
		}catch(Exception e)
		{
			scrCanSeeLivingThing = null;
		}
		try
		{
			if (scrCanMoveThroughLivingThing != null)
			{
				synchronized(scrCanMoveThroughLivingThing)
				{
					scrCanMoveThroughLivingThing.close();
					scrCanMoveThroughLivingThing= new Script("conf/canMoveThroughLivingThing",this,true);
				}
			}else
			{
				scrCanMoveThroughLivingThing= new Script("conf/canMoveThroughLivingThing",this,true);
			}
		}catch(Exception e)
		{
			scrCanMoveThroughLivingThing = null;
		}
		try
		{
			if (scrCanAttack != null)
			{
				synchronized(scrCanAttack)
				{
					scrCanAttack.close();
					scrCanAttack = new Script("conf/canAttack",this,true);
				}
			} else
			{
				scrCanAttack = new Script("conf/canAttack",this,true);
			}
		}catch(Exception e)
		{
			scrCanAttack = null;
		}
		try
		{
			if (scrOnStart != null)
			{
				synchronized(scrOnStart)
				{
					scrOnStart.close();
					scrOnStart = new Script("conf/onStart",this,true);
				}
			} else
			{
				scrOnStart = new Script("conf/onStart",this,true);
			}
		}catch(Exception e)
		{
			scrOnStart = null;
		}
		try
		{
			if (scrOnDeath != null)
			{
				synchronized(scrOnDeath)
				{
					scrOnDeath.close();
					scrOnDeath = new Script("conf/onDeath",this,true);
				}
			} else
			{
				scrOnDeath = new Script("conf/onDeath",this,true);
			}
		}catch(Exception e)
		{
			scrOnDeath = null;
		}
		try
		{
			if (scrOnLogOut != null)
			{
				synchronized(scrOnLogOut)
				{
					scrOnLogOut.close();
					scrOnLogOut = new Script("conf/onLogOut",this,true);
				}
			} else
			{
				scrOnLogOut = new Script("conf/onLogOut",this,true);
			}
		}catch(Exception e)
		{
			scrOnLogOut = null;
		}
		// Load Tile Data
		try (RandomAccessFile raf = new RandomAccessFile("tiledata.bin", "r")) {
			int dataLength = raf.readInt();
			tileData = new byte[dataLength];
			raf.readFully(tileData);
			log.printMessage(Log.INFO, "Loaded " + dataLength + " tile data entries from tiledata.bin");
		} catch (IOException e) {
			log.printError("loadPrefs(): Error loading tiledata.bin", e);
			tileData = new byte[0]; // Ensure it's not null
		}

		// Load action scripts
		synchronized(vctTileActions)
		{
			try
			{
				// First, clear out old scripts if any
				for (int i=0; i<vctTileActions.size(); i++) {
					Script s = (Script)vctTileActions.elementAt(i);
					if (s != null) s.close();
				}
				vctTileActions = new Vector(tileData.length);
				vctTileActions.setSize(tileData.length); // Pre-size the vector

				for (int i=0; i < tileData.length; i++)
				{
				// Check if the tile has an action script from our pre-compiled data
					if ((tileData[i] & 4) != 0) {
						try {
							vctTileActions.setElementAt(new Script("defTileActions/"+i,this,true), i);
						} catch (Exception e) {
							log.printError("loadPrefs(): Could not load action script for tile " + i, e);
							vctTileActions.setElementAt(null, i);
				}
					} else {
						vctTileActions.setElementAt(null, i);
					}
				}
			} catch (Exception e) {
				log.printError("loadPrefs(): Error initializing vctTileActions", e);
			}
		}
			synchronized(vctTileAnims)
		{
			try
			{
				log.printMessage(Log.INFO, "Loading Tile Animations...");
				vctTileAnims = new Vector(0,1);
				File animsDir = new File("defTileAnims/");
				if (animsDir.exists() && animsDir.isDirectory()) {
					File[] animFiles = animsDir.listFiles();
					for (File animFile : animFiles) {
						try {
							int tileID = Integer.parseInt(animFile.getName());
							RandomAccessFile raf = new RandomAccessFile(animFile, "r");
							int frameCount = Integer.parseInt(raf.readLine());
							int delay = Integer.parseInt(raf.readLine());
							raf.close();
							vctTileAnims.addElement(new TileAnim(tileID, frameCount, delay));
							log.printMessage(Log.VERBOSE, "Loaded animation for tile " + tileID + ": " + frameCount + " frames, " + delay + " delay.");
						} catch (Exception e) {
							log.printError("loadPrefs(): Error loading animation for tile " + animFile.getName(), e);
						}
					}
				} else {
					log.printMessage(Log.INFO, "No 'defTileAnims' directory found, skipping tile animation loading.");
				}
			}catch (Exception e) {
				log.printError("loadPrefs(): Error loading tile animations", e);
			}
		}
        }

	synchronized long getID()
	{
		ID++;
		return ID;
	}

	void chatMessage(String inMessage, String strFrom)
	{
	    int i;
		strFrom = strFrom.toLowerCase();
	    LivingThing thnStore;
		log.printMessage(Log.ALWAYS,inMessage);
	    for (i=0;i<vctSockets.size();i++)
	    {
	        thnStore = (LivingThing)vctSockets.elementAt(i);
			if (!thnStore.vctIgnore.contains(strFrom))
			{
			thnStore.chatMessage(inMessage);
			}
	    }
	}

	void chatMessage(String inMessage, int intLocX, int intLocY, String strFrom)
	{
		strFrom = strFrom.toLowerCase();
	    LivingThing thnStore;
		log.printMessage(Log.ALWAYS,inMessage);
		int i,
			i2,
			i3;
		DuskObject objStore;
		i=0;
	    if (intLocX-entityViewrangeX<0)
		{
		i = -1*(intLocX-entityViewrangeX);
	    }
		i2=0;
	    if (intLocY-entityViewrangeY<0)
	    {
		i2 = -1*(intLocY-entityViewrangeY);
	    }
		for (;i<1+(2*entityViewrangeX);i++)
		{
			if (intLocX+i-entityViewrangeX<MapColumns)
			{
				for (i3=i2;i3<1+(2*entityViewrangeY);i3++)
				{
					if (intLocY+i3-entityViewrangeY<MapRows)
					{
						objStore = objEntities[intLocX+i-entityViewrangeX][intLocY+i3-entityViewrangeY];
						while (objStore != null)
						{
						if (objStore.isLivingThing())
						{
							thnStore = (LivingThing)objStore;
							if (thnStore.isPlayer()
									&& !thnStore.vctIgnore.contains(strFrom))
								{
								thnStore.chatMessage(inMessage);
								}
							}
							objStore = objStore.objNext;
						}
					}
				}
			}
		}
	}

	public Vector<LivingThing> getPlayersInArea(int intLocX, int intLocY)
	{
		Vector<LivingThing> players = new Vector<>();
		LivingThing thnStore;
		int i, i2, i3;
		DuskObject objStore;
		i = 0;
		if (intLocX - entityViewrangeX < 0) {
			i = -1 * (intLocX - entityViewrangeX);
		}
		i2 = 0;
		if (intLocY - entityViewrangeY < 0) {
			i2 = -1 * (intLocY - entityViewrangeY);
		}
		for (; i < 1 + (2 * entityViewrangeX); i++) {
			if (intLocX + i - entityViewrangeX < MapColumns) {
				for (i3 = i2; i3 < 1 + (2 * entityViewrangeY); i3++) {
					if (intLocY + i3 - entityViewrangeY < MapRows) {
						objStore = objEntities[intLocX + i - entityViewrangeX][intLocY + i3 - entityViewrangeY];
						while (objStore != null) {
							if (objStore.isLivingThing()) {
								thnStore = (LivingThing) objStore;
								if (thnStore.isPlayer()) {
									players.addElement(thnStore);
								}
							}
							objStore = objStore.objNext;
						}
					}
				}
			}
		}
		return players;
	}

	public void updateEntityHP(LivingThing entity) {
		if (entity == null) {
			return;
		}
		Vector<LivingThing> playersInArea = getPlayersInArea(entity.intLocX, entity.intLocY);
		for (LivingThing player : playersInArea) {
			player.updateOpponentHP(entity);
		}
	}

	public synchronized void updatePlayerChunks(int oldChunkX, int oldChunkY, int newChunkX, int newChunkY) {
		// Load new chunks FIRST
		for (int x = newChunkX - 1; x <= newChunkX + 1; x++) {
			for (int y = newChunkY - 1; y <= newChunkY + 1; y++) {
				loadChunk(x, y);
			}
		}

		// Unload old chunks SECOND
		for (int x = oldChunkX - 1; x <= oldChunkX + 1; x++) {
			for (int y = oldChunkY - 1; y <= oldChunkY + 1; y++) {
				unloadChunk(x, y);
			}
		}
	}

	synchronized void loadChunk(int chunkX, int chunkY) {
		String chunkKey = chunkX + "_" + chunkY;
		if (loadedChunks.containsKey(chunkKey)) {
			loadedChunks.put(chunkKey, loadedChunks.get(chunkKey) + 1);
			return;
		}

		log.printMessage(Log.INFO, "Loading chunk " + chunkKey);

		// Load merchants
		Vector<Merchant> merchants = (Vector<Merchant>) dbManager.get("chunk/" + chunkKey + "/merchants");
		if (merchants != null) {
			for (Merchant m : merchants) {
				m.engGame = this;
				vctMerchants.add(m);
				addDuskObject(m);
			}
		}

		// Load mobs
		Vector<LivingThing> mobs = (Vector<LivingThing>) dbManager.get("chunk/" + chunkKey + "/mobs");
		if (mobs != null) {
			for (LivingThing m : mobs) {
				m.engGame = this;
				if (m.isMob()) {
					Mob mob = (Mob)m;
					if (mob.fctFaction != null) {
						mob.fctFaction.engGame = this;
					}
				}
				if (m.vctConditions != null && !m.vctConditions.isEmpty()) {
					for (int i = 0; i < m.vctConditions.size(); i++) {
						Condition c = (Condition)m.vctConditions.elementAt(i);
						c.engGame = this;
					}
				}
				vctMobs.add(m);
				addDuskObject(m);
			}
		}

		// Load signs
		Vector<Sign> signs = (Vector<Sign>) dbManager.get("chunk/" + chunkKey + "/signs");
		if (signs != null) {
			for (Sign s : signs) {
				s.engGame = this;
				vctSigns.add(s);
				addDuskObject(s);
			}
		}

		// Load props
		Vector<Prop> props = (Vector<Prop>) dbManager.get("chunk/" + chunkKey + "/props");
		if (props != null) {
			for (Prop p : props) {
				p.engGame = this;
				vctProps.add(p);
				addDuskObject(p);
			}
		}

		loadedChunks.put(chunkKey, 1);
	}

	synchronized void unloadChunk(int chunkX, int chunkY) {
		String chunkKey = chunkX + "_" + chunkY;
		if (!loadedChunks.containsKey(chunkKey)) {
			return;
		}

		int refCount = loadedChunks.get(chunkKey) - 1;
		if (refCount > 0) {
			loadedChunks.put(chunkKey, refCount);
			return;
		}

		log.printMessage(Log.INFO, "Unloading chunk " + chunkKey);

		// Unload and save merchants
		Vector<Merchant> merchantsInChunk = new Vector<>();
		for (Iterator<Merchant> it = vctMerchants.iterator(); it.hasNext();) {
			Merchant m = it.next();
			if (m.intLocX / CHUNK_SIZE == chunkX && m.intLocY / CHUNK_SIZE == chunkY) {
				merchantsInChunk.add(m);
				removeDuskObject(m);
				it.remove();
			}
		}
		if (!merchantsInChunk.isEmpty()) {
			dbManager.put("chunk/" + chunkKey + "/merchants", merchantsInChunk);
		}

		// Unload and save mobs
		Vector<LivingThing> mobsInChunk = new Vector<>();
		for (Iterator<LivingThing> it = vctMobs.iterator(); it.hasNext();) {
			LivingThing m = it.next();
			if (m.intLocX / CHUNK_SIZE == chunkX && m.intLocY / CHUNK_SIZE == chunkY) {
				mobsInChunk.add(m);
				removeDuskObject(m);
				it.remove();
			}
		}
		if (!mobsInChunk.isEmpty()) {
			dbManager.put("chunk/" + chunkKey + "/mobs", mobsInChunk);
		}

		// Unload signs (Signs are static and don't need to be saved back)
		for (Iterator<Sign> it = vctSigns.iterator(); it.hasNext();) {
			Sign s = it.next();
			if (s.intLocX / CHUNK_SIZE == chunkX && s.intLocY / CHUNK_SIZE == chunkY) {
				removeDuskObject(s);
				it.remove();
			}
		}

		// Unload props (Props are static and don't need to be saved back)
		for (Iterator<Prop> it = vctProps.iterator(); it.hasNext();) {
			Prop p = it.next();
			if (p.intLocX / CHUNK_SIZE == chunkX && p.intLocY / CHUNK_SIZE == chunkY) {
				removeDuskObject(p);
				it.remove();
			}
		}

		loadedChunks.remove(chunkKey);
	}

	void chatMessage(String inMessage, String strClan, String strFrom)
	{
	    int i;
		strFrom = strFrom.toLowerCase();
	    LivingThing thnStore;
		log.printMessage(Log.ALWAYS,inMessage);
	    for (i=0;i<vctSockets.size();i++)
	    {
	        thnStore = (LivingThing)vctSockets.elementAt(i);
	        if (thnStore.strClan.equals(strClan)
				&& !thnStore.vctIgnore.contains(strFrom))
	        {
			thnStore.chatMessage(inMessage);
		}
	    }
	}

	synchronized void refreshEntities(LivingThing thnRefresh)
	{
			int i,
			i2,
			i3,
			i4;
		DuskObject objStore,
					objStore2;
		LivingThing thnStore;
		Prop prpStore;
		Item itmStore;
		Sign sgnStore;
		Merchant mrcStore;
		Vector vctNewEntities=new Vector(0,10);
		String strResult=null,
				strStore=null;
		boolean blnCanSee;

		i=0;
	    if (thnRefresh.intLocX-entityViewrangeX<0)
		{
		i = -1*(thnRefresh.intLocX-entityViewrangeX);
	    }
		i2=0;
	    if (thnRefresh.intLocY-entityViewrangeY<0)
	    {
		i2 = -1*(thnRefresh.intLocY-entityViewrangeY);
	    }
		for (;i<1+(2*entityViewrangeX);i++)
		{
			if (thnRefresh.intLocX+i-entityViewrangeX < MapColumns)
			{
				for (i3=i2;i3<1+(2*entityViewrangeY);i3++)
				{
					if (thnRefresh.intLocY+i3-entityViewrangeY < MapRows)
					{
						objStore = objEntities[thnRefresh.intLocX+i-entityViewrangeX][thnRefresh.intLocY+i3-entityViewrangeY];
						if (objStore != null)
						{
							if (canSeeTo(thnRefresh,thnRefresh.intLocX+i-entityViewrangeX,thnRefresh.intLocY+i3-entityViewrangeY))
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
											if (thnRefresh.strName.equalsIgnoreCase(pmrStore.strOwner))
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
										if (thnRefresh.thnFollowing != null && thnRefresh.thnFollowing.isPet())
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
												strResult += petcost+"gp)" +strStore+"\n";
											}else
												{
												strResult += traincost+"exp)"+strStore+"\n";
												strResult += traincost+"exp)"+thnRefresh.thnFollowing.strName+":"+strStore+"\n";
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
												strResult += +petcost+"gp)" +strStore+"\n";
											}else
												{
												strResult += traincost+"exp)"+strStore+"\n";
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
										thnStore = (LivingThing)objStore;
										if (scrCanSeeLivingThing != null)
										{
											synchronized(scrCanSeeLivingThing)
											{
												scrCanSeeLivingThing.varVariables.clearVariables();
												scrCanSeeLivingThing.varVariables.addVariable("seeing",thnRefresh);
												scrCanSeeLivingThing.varVariables.addVariable("seen",thnStore);
												blnCanSee = scrCanSeeLivingThing.rewindAndParseScript();
											}
										}else
											blnCanSee=true;
										if (blnCanSee)
										{
											if (thnStore.isPlayer())
											{
												strResult=(char)4+"";
												if (thnStore.blnSleep)
												{
													strResult += "<sleeping>";
												}
												if (!thnStore.strClan.equals("none"))
												{
													strResult += "<" + thnStore.strClan + ">";
												}
												for (i4=0;i4<thnStore.vctFlags.size();i4++)
												{
													strResult += "<" + (String)thnStore.vctFlags.elementAt(i4) + ">";
												}
											strResult += thnStore.strName+"\n";
											strResult += 0+"\n";
											strResult += thnStore.ID+"\n";
											strResult += thnStore.intLocX+"\n";
											strResult += thnStore.intLocY+"\n";
											strResult += thnStore.intImage+"\n";
											strResult += thnStore.intStep+"\n";
												thnRefresh.send(strResult);
												if (thnStore.batBattle != null && thnRefresh.batBattle == null) {
													thnRefresh.updateFlag(thnStore.ID, 2);
												}
											}else if (thnStore.isMob())
											{
												strResult=(char)4+"";
												if (thnStore.blnSleep)
												{
													strResult += "<sleeping>";
												}
												for (i4=0;i4<thnStore.vctFlags.size();i4++)
												{
													strResult += "<" + (String)thnStore.vctFlags.elementAt(i4) + ">";
												}
											strResult += thnStore.strName+"\n";
											strResult += 4+"\n";
											strResult += thnStore.ID+"\n";
											strResult += thnStore.intLocX+"\n";
											strResult += thnStore.intLocY+"\n";
											strResult += thnStore.intImage+"\n";
												thnRefresh.send(strResult);
												if (thnStore.batBattle != null && thnRefresh.batBattle == null) {
													thnRefresh.updateFlag(thnStore.ID, 2);
												}
											}else if (thnStore.isPet())
											{
												strResult=(char)4+"";
												if (thnStore.blnSleep)
												{
													strResult += "<sleeping>";
												}
												if (thnStore.hp < 0)
												{
													strResult += "<wounded>";
												}
												for (i4=0;i4<thnStore.vctFlags.size();i4++)
												{
													strResult += "<" + (String)thnStore.vctFlags.elementAt(i4) + ">";
												}
											strResult += thnStore.strName+"\n";
											strResult += 4+"\n";
											strResult += thnStore.ID+"\n";
											strResult += thnStore.intLocX+"\n";
											strResult += thnStore.intLocY+"\n";
											strResult += thnStore.intImage+"\n";
												thnRefresh.send(strResult);
											}
										}
									}else if (objStore.isItem())
									{
										strResult=(char)4+"";
										itmStore = (Item)objStore;
										strResult += itmStore.strName+"\n";
									strResult += 1+"\n";
									strResult += itmStore.ID+"\n";
									strResult += itmStore.intLocX+"\n";
									strResult += itmStore.intLocY+"\n";
									strResult += itmStore.intImage+"\n";
										thnRefresh.send(strResult);
									}else if (objStore.isProp())
									{
										strResult=(char)4+"";
										prpStore = (Prop)objStore;
									strResult += prpStore.strName+"\n";
									strResult += 3+"\n";
									strResult += prpStore.ID+"\n";
									strResult += prpStore.intLocX+"\n";
									strResult += prpStore.intLocY+"\n";
									strResult += prpStore.intImage+"\n";
										thnRefresh.send(strResult);
									}else if (objStore.isSign())
									{
										strResult=(char)4+"";
										sgnStore = (Sign)objStore;
									strResult += sgnStore.strName+"\n";
									strResult += 3+"\n";
									strResult += sgnStore.ID+"\n";
									strResult += sgnStore.intLocX+"\n";
									strResult += sgnStore.intLocY+"\n";
									strResult += signimage+"\n";
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
									strResult += merchantimage+"\n";
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
									strResult += merchantimage+"\n";
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
		LivingThing thnStore,
					thnStore2;
		Prop prpStore;
		Item itmStore;
		Sign sgnStore;
		Merchant mrcStore;
		String strResult,
				strStore;
		boolean blnCanSee;

		i=0;
	    if (objRefresh.intLocX-entityViewrangeX<0)
		{
		i = -1*(objRefresh.intLocX-entityViewrangeX);
	    }
		i2=0;
	    if (objRefresh.intLocY-entityViewrangeY<0)
	    {
		i2 = -1*(objRefresh.intLocY-entityViewrangeY);
	    }
		for (;i<1+(2*entityViewrangeX);i++)
		{
			if (objRefresh.intLocX+i-entityViewrangeX < MapColumns)
			{
				for (i3=i2;i3<1+(2*entityViewrangeY);i3++)
				{
					if (objRefresh.intLocY+i3-entityViewrangeY < MapRows)
					{
						objStore = objEntities[objRefresh.intLocX+i-entityViewrangeX][objRefresh.intLocY+i3-entityViewrangeY];
						while (objStore != null)
						{
							if (objStore.isLivingThing())
							{
								thnStore = (LivingThing)objStore;
								if (thnStore.isPlayer())
								{
									if (canSeeTo(thnStore,objRefresh.intLocX,objRefresh.intLocY))
									{
									if (objRefresh.isLivingThing() && scrCanSeeLivingThing != null)
									{
										synchronized(scrCanSeeLivingThing)
										{
											scrCanSeeLivingThing.varVariables.clearVariables();
											scrCanSeeLivingThing.varVariables.addVariable("seeing",thnStore);
											scrCanSeeLivingThing.varVariables.addVariable("seen",(LivingThing)objRefresh);
											blnCanSee = scrCanSeeLivingThing.rewindAndParseScript();
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
											thnStore2 = (LivingThing)objRefresh;
											if (thnStore2.isPlayer())
											{
												if (thnStore2.blnSleep)
												{
													strResult += "<sleeping>";
												}
												if (!thnStore2.strClan.equals("none"))
												{
													strResult += "<" + thnStore2.strClan + ">";
												}
												for (i4=0;i4<thnStore2.vctFlags.size();i4++)
												{
													strResult += "<" + (String)thnStore2.vctFlags.elementAt(i4) + ">";
												}
											strResult += thnStore2.strName+"\n";
											strResult += 0+"\n";
											strResult += thnStore2.ID+"\n";
											strResult += thnStore2.intLocX+"\n";
											strResult += thnStore2.intLocY+"\n";
											strResult += thnStore2.intImage+"\n";
											strResult += thnStore2.intStep+"\n";
											}else if (thnStore2.isMob())
											{
												if (thnStore2.blnSleep)
												{
													strResult += "<sleeping>";
												}
												for (i4=0;i4<thnStore2.vctFlags.size();i4++)
												{
													strResult += "<" + (String)thnStore2.vctFlags.elementAt(i4) + ">";
												}
											strResult += thnStore2.strName+"\n";
											strResult += 4+"\n";
											strResult += thnStore2.ID+"\n";
											strResult += thnStore2.intLocX+"\n";
											strResult += thnStore2.intLocY+"\n";
											strResult += thnStore2.intImage+"\n";
											}else if (thnStore2.isPet())
											{
												if (thnStore2.blnSleep)
												{
													strResult += "<sleeping>";
												}
												if (thnStore2.hp<0)
												{
													strResult += "<wounded>";
												}
												for (i4=0;i4<thnStore2.vctFlags.size();i4++)
												{
													strResult += "<" + (String)thnStore2.vctFlags.elementAt(i4) + ">";
												}
											strResult += thnStore2.strName+"\n";
											strResult += 4+"\n";
											strResult += thnStore2.ID+"\n";
											strResult += thnStore2.intLocX+"\n";
											strResult += thnStore2.intLocY+"\n";
											strResult += thnStore2.intImage+"\n";
											}
										}else if (objRefresh.isItem())
										{
											itmStore = (Item)objRefresh;
											strResult += itmStore.strName+"\n";
										strResult += 1+"\n";
										strResult += itmStore.ID+"\n";
										strResult += itmStore.intLocX+"\n";
										strResult += itmStore.intLocY+"\n";
										strResult += itmStore.intImage+"\n";
										}else if (objRefresh.isProp())
										{
											prpStore = (Prop)objRefresh;
										strResult += prpStore.strName+"\n";
										strResult += 3+"\n";
										strResult += prpStore.ID+"\n";
										strResult += prpStore.intLocX+"\n";
										strResult += prpStore.intLocY+"\n";
										strResult += prpStore.intImage+"\n";
										}else if (objRefresh.isSign())
										{
											sgnStore = (Sign)objRefresh;
										strResult += sgnStore.strName+"\n";
										strResult += 3+"\n";
										strResult += sgnStore.ID+"\n";
										strResult += sgnStore.intLocX+"\n";
										strResult += sgnStore.intLocY+"\n";
										strResult += signimage+"\n";
										}else if (objRefresh.isMerchant())
										{
											mrcStore = (Merchant)objRefresh;
										strResult += "Merchant\n";
										strResult += 2+"\n";
										strResult += mrcStore.ID+"\n";
										strResult += mrcStore.intLocX+"\n";
										strResult += mrcStore.intLocY+"\n";
										strResult += merchantimage+"\n";
										}else if (objRefresh.isPlayerMerchant())
										{
											PlayerMerchant pmrStore = (PlayerMerchant)objRefresh;
										strResult += pmrStore.strOwner+"'s Merchant\n";
										strResult += 2+"\n";
										strResult += pmrStore.ID+"\n";
										strResult += pmrStore.intLocX+"\n";
										strResult += pmrStore.intLocY+"\n";
										strResult += merchantimage+"\n";
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
		LivingThing thnStore;
		String strResult;

		i=0;
	    if (objRefresh.intLocX-entityViewrangeX<0)
		{
		i = -1*(objRefresh.intLocX-entityViewrangeX);
	    }
		i2=0;
	    if (objRefresh.intLocY-entityViewrangeY<0)
	    {
		i2 = -1*(objRefresh.intLocY-entityViewrangeY);
	    }
		for (;i<1+(2*entityViewrangeX);i++)
		{
			if (objRefresh.intLocX+i-entityViewrangeX < MapColumns)
			{
				for (i3=i2;i3<1+(2*entityViewrangeY);i3++)
				{
					if (objRefresh.intLocY+i3-entityViewrangeY < MapRows)
					{
						objStore = objEntities[objRefresh.intLocX+i-entityViewrangeX][objRefresh.intLocY+i3-entityViewrangeY];
						while (objStore != null)
						{
							if (objStore.isLivingThing())
							{
								thnStore = (LivingThing)objStore;
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

	void newBattle(LivingThing pla1, LivingThing pla2)
	{
		if (pla2 == null)
		{
			return;
		}
		if (pla1.isPet())
		{
			pla1.chatMessage("Pets cannot lead battles.");
			return;
		}
		if (pla1.batBattle != null)
		{
			pla1.chatMessage("You're already fighting!");
			return;
		}
		if (pla1 == pla2)
		{
			pla1.chatMessage("You can't fight yourself!");
			return;
		}
		if (pla2.isPet())
		{
			pla1.chatMessage("You can't attack pets.");
			return;
		}
//		if (Math.abs(pla1.intLocX - pla2.intLocX) + Math.abs(pla1.intLocY - pla2.intLocY) > 1)
		if (Math.abs(pla1.intLocX - pla2.intLocX) + Math.abs(pla1.intLocY - pla2.intLocY) > pla1.getRangeWithBonus())
		{
System.out.println("mob range = "+Math.abs(pla1.intLocX - pla2.intLocX) + Math.abs(pla1.intLocY - pla2.intLocY));
System.out.println("player range = "+pla1.getRangeWithBonus());
			pla1.chatMessage("They're too far away.");
			return;
		}
		if (scrCanAttack != null)
		{
			synchronized(scrCanAttack)
			{
				scrCanAttack.varVariables.clearVariables();
				scrCanAttack.varVariables.addVariable("attacking",pla1);
				scrCanAttack.varVariables.addVariable("attacked",pla2);
				if (!scrCanAttack.rewindAndParseScript())
				{
					pla1.chatMessage("You can't attack them.");
					return;
				}
			}
		}
		// Check if the attacked is following the attacker
		LivingThing thnStore = pla2;
		while (thnStore != null)
		{
			if (pla1 == thnStore)
			{
				pla1.chatMessage("You can't attack a member of your group.");
				return;
			}
			if (thnStore.isPlayer() && !pla1.isMob())
			{
				if (thnStore.strClan == null || thnStore.strClan.equalsIgnoreCase("none"))
				{
					pla1.chatMessage("You can't fight them.");
					return;
				}
			}
			thnStore = thnStore.thnMaster;
		}
		// Check if the attacker is following the attacked
		thnStore = pla2;
		while (thnStore != null)
		{
			if (pla1 == thnStore)
			{
				pla1.chatMessage("You can't attack a member of your group.");
				return;
			}
			if (thnStore.isPlayer() && !pla1.isMob())
			{
				if (thnStore.strClan == null || thnStore.strClan.equalsIgnoreCase("none"))
				{
					pla1.chatMessage("You can't fight them.");
					return;
				}
			}
			thnStore = thnStore.thnFollowing;
		}
		if (pla2.batBattle == null)
		{
			if ((pla1.isPlayer() && pla2.isPlayer()) && (pla1.strClan.equals("none") || pla2.strClan.equals("none")))
			{
				pla1.chatMessage("Players who are not in clans cannot fight other players.");
				return;
			}
			if (pla2.isPlayer() && overMerchant(pla2.intLocX,pla2.intLocY) != null)
			{
				pla1.chatMessage("You cannot attack players who are shopping.");
				return;
			}
			if (pla2.isPlayer() && overPlayerMerchant(pla2.intLocX,pla2.intLocY) != null)
			{
				pla1.chatMessage("You cannot attack players who are shopping.");
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
					if (thnStore.batBattle == null)
					{
						pla2.batBattle.addToBattle(thnStore,2);
					}
					thnStore = thnStore.thnFollowing;
				}
				thnStore = pla1.thnMaster;
				while (thnStore != null)
				{
					if (thnStore.batBattle == null)
					{
						pla2.batBattle.addToBattle(thnStore,2);
					}
					thnStore = thnStore.thnMaster;
				}
			}else
			{
				thnStore = pla1;
				while (thnStore != null)
				{
					if (thnStore.batBattle == null)
					{
						pla2.batBattle.addToBattle(thnStore,1);
					}
					thnStore = thnStore.thnFollowing;
				}
				thnStore = pla1.thnMaster;
				while (thnStore != null)
				{
					if (thnStore.batBattle == null)
					{
						pla2.batBattle.addToBattle(thnStore,1);
					}
					thnStore = thnStore.thnMaster;
				}
			}
//			pla2.batBattle.chatMessage("\t"+pla1.strName+" has joined the battle.");
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
			if (inName.equals(sgnStore.strName))
			{
				return sgnStore;
			}
		}
		return null;
	}

	LivingThing getPet(String inName)
	{
		int i;
		LivingThing thnStore;
		for (i=0;i<vctPets.size();i++)
		{
			thnStore = (LivingThing)vctPets.elementAt(i);
			if (inName.equalsIgnoreCase(thnStore.strName))
			{
				return thnStore;
			}
		}
		return null;
	}

	LivingThing getPlayer(String inName)
	{
		int i;
		LivingThing thnStore;
		for (i=0;i<vctSockets.size();i++)
		{
			thnStore = (LivingThing)vctSockets.elementAt(i);
			if (inName.equalsIgnoreCase(thnStore.strName))
			{
				return thnStore;
			}
		}
		return null;
	}

	Faction getFaction(String strName)
	{
		int i;
		Faction fctStore;
		for (i=0;i<vctFactions.size();i++)
		{
			fctStore = (Faction)vctFactions.elementAt(i);
			if (fctStore.strName.equals(strName))
				return fctStore;
		}
		fctStore = new Faction(strName,this);
		vctFactions.addElement(fctStore);
		return fctStore;
	}

	LivingThing getMobFromVct(String inName)
	{
		int i=0;
		LivingThing thnStore;
		while (i < vctMobs.size())
		{
			thnStore = (LivingThing)vctMobs.elementAt(i);
			if (thnStore.strName.equals(inName))
			{
				return thnStore;
			}
			i++;
		}
		return null;
	}

	Prop getProp(String strName)
	{
		Prop prpStore=null;
		try
		{
			String fileName = getCaseInsensitiveFile("defProps", strName);
			RandomAccessFile rafPropDef = new RandomAccessFile("defProps/"+fileName, "r");
			prpStore = new Prop(getID());
			prpStore.strName = strName;
			String strStore = rafPropDef.readLine();
			while (!(strStore == null || strStore.equals(".")))
			{
				if (strStore.equalsIgnoreCase("description"))
				{
					prpStore.strDescription = rafPropDef.readLine();
				}else if (strStore.equalsIgnoreCase("image"))
				{
					prpStore.intImage = Integer.parseInt(rafPropDef.readLine());
				}
				strStore = rafPropDef.readLine();
			}
			rafPropDef.close();
		}catch (Exception e)
		{
			log.printError("getProp():While trying to get prop \""+strName+"\"", e);
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
				if (prpStore.strName.equals(inName))
				{
					return prpStore;
				}
				i++;
			}
		}catch (Exception e)
		{
			log.printError("getPropFromVct():While trying to get prop \""+inName+"\"", e);
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
				if (prpStore.strName.equals(inName))
				{
					vctProps.removeElementAt(i);
					removeDuskObject(prpStore);
					return prpStore;
				}
				i++;
			}
		}catch (Exception e)
		{
			log.printError("getPropFromVctAndRemove():While trying to get prop \""+inName+"\"", e);
		}
		return null;
	}

	Condition getCondition(String inName)
	{
		String strStore="Error opening file";
		try
		{
			String fileName = getCaseInsensitiveFile("defConditions", inName.toLowerCase());
			RandomAccessFile rafConditionDef = new RandomAccessFile("defConditions/"+fileName, "r");
			Condition cndStore = new Condition();
			cndStore.strName = inName;
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
			log.printError("getCondition():Parsing \""+strStore+"\" for condition \""+inName+"\"", e);
		}
		return null;
	}

	String getCaseInsensitiveFile(String path, String fileName) {
		File dir = new File(path);
		if (dir.isDirectory()) {
			for (File file : dir.listFiles()) {
				if (file.getName().equalsIgnoreCase(fileName)) {
					return file.getName();
				}
			}
		}
		return fileName;
	}

	int getSpellPercent(String strName)
	{
		try
		{
			String fileName = getCaseInsensitiveFile("defSpells", strName);
			RandomAccessFile rafSpell = new RandomAccessFile("defSpells/"+fileName,"r");
			SpellGroup grpStore = getSpellGroup(rafSpell.readLine());
			rafSpell.close();
			return grpStore.getSpellPercent(strName);
		}catch (Exception e)
		{
			log.printError("getSpellPercent():While trying to get info on spell \""+strName+"\"", e);
		}
		return -1;
	}

	SpellGroup getSpellGroup(String strName)
	{
		SpellGroup grpStore;
		for (int i=0;i<vctSpellGroups.size();i++)
		{
			grpStore = (SpellGroup)vctSpellGroups.elementAt(i);
			if (strName.equalsIgnoreCase(grpStore.strName))
			{
				return grpStore;
			}
		}
		try
		{
			grpStore = new SpellGroup(strName);
			String fileName = getCaseInsensitiveFile("defSpellGroups", strName);
			RandomAccessFile rafSpellGroup = new RandomAccessFile("defSpellGroups/"+fileName,"r");
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
				log.printError("getSpellGroup():While trying to read spell group file for \""+strName+"\"", e);
			}
			rafSpellGroup.close();
			vctSpellGroups.addElement(grpStore);
			return grpStore;
		}catch(Exception e)
		{
			log.printError("getSpellGroup():While trying to get spell group info for \""+strName+"\"", e);
		}
		return null;
	}

	Item getItem(String inName)
	{
		Item itmStore=null;
		RandomAccessFile rafItemDef=null;
		String strStore = "Error reading file";
		try
		{
			String fileName = getCaseInsensitiveFile("defItems", inName.toLowerCase());
			File fileTest = new File("defItems/"+fileName);
			if (!fileTest.exists())
			{
				return null;
			}
			rafItemDef = new RandomAccessFile("defItems/"+fileName, "r");
			//itmStore = new Item(this);
			itmStore = new Item(getID());
			itmStore.strName = inName;
			itmStore.strDescription = "a "+inName; //default description is name
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
					itmStore.strDescription = rafItemDef.readLine();
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
					itmStore.intMod = Integer.parseInt(rafItemDef.readLine());
				}else if (strStore.equalsIgnoreCase("range"))
				{
					itmStore.intRange = Integer.parseInt(rafItemDef.readLine());
				}else if (strStore.equalsIgnoreCase("image"))
				{
					itmStore.intImage = Integer.parseInt(rafItemDef.readLine());
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
			log.printError("getItem():Parsing \""+strStore+"\" for item \""+inName+"\"", e);
			try
			{
				if (rafItemDef != null)
					rafItemDef.close();
			}catch(Exception e2)
			{
				log.printError("getItem():Closing file for item \""+inName+"\" after failed parse", e2);
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
			if (itmStore.strName.equals(strStore))
			{
				return itmStore;
			}
		}catch (Exception e)
		{
			log.printError("getItemFromVct():For item \""+inName+"\"", e);
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
			if (itmStore.strName.equals(strStore))
			{
				vctItems.removeElementAt(i);
				removeDuskObject(itmStore);
				return itmStore;
			}
		}catch (Exception e)
		{
			log.printError("getItemFromVctAndRemove():For item \""+inName+"\"", e);
		}
		return null;
	}

	void playSound(int intSFX,int intLocX, int intLocY)
	{
		int i,
			i2,
			i3;
		DuskObject objStore;
		LivingThing thnStore;
		i=0;
		intLocX = intLocX-viewrangeX;
		intLocY = intLocY-viewrangeY;
	    if (intLocX<0)
		{
		i = -1*(intLocX);
	    }
		i2=0;
	    if (intLocY<0)
	    {
		i2 = -1*(intLocY);
	    }
		for (;i<mapsizeX;i++)
		{
			if (intLocX+i<MapColumns)
			{
				for (i3=i2;i3<mapsizeY;i3++)
				{
					if (intLocY+i3<MapRows)
					{
						objStore = objEntities[intLocX+i][intLocY+i3];
						while (objStore != null)
						{
							if (objStore.isLivingThing())
							{
								thnStore = (LivingThing)objStore;
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

	boolean canMoveTo(int inLocX, int inLocY,LivingThing thnStore)
	{
		int i;
		LivingThing thnStore2;
		DuskObject objStore=null;
		Script scrStore;
		boolean blnStore;
		try
		{
			objStore = objEntities[inLocX][inLocY];
		}catch(Exception e) {}
		if (scrCanMoveThroughLivingThing != null)
		{
			while (objStore != null)
			{
				if (objStore.isLivingThing())
				{
					thnStore2 = (LivingThing)objStore;
					synchronized(scrCanMoveThroughLivingThing)
					{
						scrCanMoveThroughLivingThing.varVariables.clearVariables();
						scrCanMoveThroughLivingThing.varVariables.addVariable("moving",thnStore);
						scrCanMoveThroughLivingThing.varVariables.addVariable("blocking",thnStore2);
						if (!scrCanMoveThroughLivingThing.rewindAndParseScript())
							return false;
					}
				}
				objStore = objStore.objNext;
			}
		}
		try
		{
			scrStore = new Script("defCanMoveScripts/"+inLocX+"_"+inLocY,this,false);
			scrStore.varVariables.addVariable("trigger",thnStore);
			blnStore = scrStore.rewindAndParseScript();
			scrStore.close();
			return blnStore;
		}catch (Exception e){}
		try
		{
			short tileID = shrMap[inLocX][inLocY];
			if (tileID >= 0 && tileID < tileData.length) {
				return (tileData[tileID] & 1) != 0;
			}
		} catch (ArrayIndexOutOfBoundsException e) {
			// This can happen if the map has invalid tile IDs
		}
		return false;
	}

	boolean canSee(int inLocX, int inLocY,LivingThing thnStore)
	{
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
			short tileID = shrMap[inLocX][inLocY];
			if (tileID >= 0 && tileID < tileData.length) {
				return (tileData[tileID] & 2) != 0;
			}
		} catch (ArrayIndexOutOfBoundsException e) {
			// This can happen if the map has invalid tile IDs
		}
		return false;
	}

	//Following by Randall Leeds and Tom Weingarten
	boolean canSeeTo(LivingThing thnStore,int destX, int destY)
    {
	if (Math.abs(thnStore.intLocX-destX)>entityViewrangeX || Math.abs(thnStore.intLocY-destY)>entityViewrangeY)
	{
		return false;
	}

	if (!blnLineOfSight)
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

	Merchant overMerchant(int x, int y)
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

	PlayerMerchant overPlayerMerchant(int x, int y)
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

	synchronized void changeMap(int intLocX, int intLocY, short value)
	{
		if (value < 0 || value > vctTiles.size())
		{
			log.printMessage(Log.INFO, "Invalid value passed to changeMap("+intLocX+","+intLocY+","+value+")");
			return;
		}
		if (intLocX < 0 || intLocX > MapColumns || intLocY < 0 || intLocY > MapRows)
		{
			log.printMessage(Log.INFO, "Invalid location to changeMap("+intLocX+","+intLocY+","+value+")");
			return;
		}
		shrMap[intLocX][intLocY] = value;
		blnMapHasChanged=true;
		updateMap(intLocX,intLocY);
	}

	synchronized void resizeMap(int x, int y)
	{
		int i,
			i2,
			X,
			Y;
		short newMap[][]= new short[x][y];
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
		LivingThing thnStore;
		for (i=0;i<vctSockets.size();i++)
		{
			thnStore = (LivingThing)vctSockets.elementAt(i);
			thnStore.resizeMap();
		}
		blnMapHasChanged = true;
	}

	void saveMap()
	{
		if (blnSavingGame)
			return;
		try
		{
			blnSavingGame=true;
			if (blnMapHasChanged)
			{
			log.printMessage(Log.ALWAYS,"Saving map to database...");
				synchronized(shrMap)
				{
					dbManager.put("map/shrMap", shrMap);
					dbManager.put("map/shrMapAlpha", shrMapAlpha);
					dbManager.put("map/shrMapAlpha2", shrMapAlpha2);
				}
				blnMapHasChanged=false;
			}

			if (blnMobListChanged)
			{
			log.printMessage(Log.ALWAYS,"Saving mobs to database...");
				synchronized(vctMobs)
				{
					dbManager.put("data/mobs", vctMobs);
				}
				blnMobListChanged=false;
			}

			if (blnSignListChanged)
			{
			log.printMessage(Log.ALWAYS,"Saving signs to database...");
				synchronized(vctSigns)
				{
					dbManager.put("data/signs", vctSigns);
				}
				blnSignListChanged=false;
			}

			if (blnMerchantListChanged)
			{
			log.printMessage(Log.ALWAYS,"Saving merchants to database...");
				synchronized(vctMerchants)
				{
					dbManager.put("data/merchants", vctMerchants);
				}
				blnMerchantListChanged=false;
			}

			if (blnPropListChanged)
			{
			log.printMessage(Log.ALWAYS,"Saving props to database...");
				synchronized(vctProps)
				{
					dbManager.put("data/props", vctProps);
				}
				blnPropListChanged=false;
			}

			if (blnVariableListChanged)
			{
			log.printMessage(Log.ALWAYS,"Saving global variables to database...");
				synchronized(varVariables)
				{
					dbManager.put("data/globals", varVariables);
				}
				blnVariableListChanged=false;
			}
		    log.printMessage(Log.ALWAYS,"Saved game settings to database without error");
		}catch (Exception e)
		{
			log.printError("saveMap():While saving game settings to database", e);
		}
		blnSavingGame=false;
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
		        i2;
		    rafFile.writeInt(MapColumns);
		    rafFile.writeInt(MapRows);
		for (i=0;i<MapColumns;i++)
		    {
			for (i2=0;i2<MapRows;i2++)
		        {
				rafFile.writeShort(shrMap[i][i2]);
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
					tknStore = new StringTokenizer(mobStore.strName," ");
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
				rafFile.writeBytes(prpStore.strName+"\n"+prpStore.intLocX+"\n"+prpStore.intLocY+"\n");
			}
			rafFile.close();
			}
		    log.printMessage(Log.ALWAYS,"Backed up game settings without error");
		}catch (Exception e)
		{
			log.printError("backupMap():While backing up settings", e);
		}
	}

	DuskObject getDuskObject(int x, int y, String strIn)
	{
		DuskObject objStore = objEntities[x][y];
		while (objStore != null)
		{
			if (objStore.strName.equalsIgnoreCase(strIn))
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

	void addDuskObject(DuskObject objIn)
	{
		if (objIn.isLivingThing())
		{
			LivingThing thnStore = (LivingThing)objIn;
			if (thnStore.isPlayer() && !thnStore.blnIsLoaded)
				return;
		}
		synchronized(objEntities)
		{
			pushDuskObject(objIn);
			addEntity(objIn);
		}
	}

	void removeDuskObject(DuskObject objIn)
	{
		if (objIn.isLivingThing())
		{
			LivingThing thnStore = (LivingThing)objIn;
			if (!thnStore.blnIsLoaded)
				return;
		}
		synchronized(objEntities)
		{
			removeEntity(objIn);
			popDuskObject(objIn);
		}
	}

	void moveDuskObject(DuskObject objIn,int inLocX,int inLocY)
	{
		popDuskObject(objIn);
		objIn.intLocX = inLocX;
		objIn.intLocY = inLocY;
		addDuskObject(objIn);
	}

	synchronized void updateMap(int intLocX, int intLocY)
	{
		DuskObject objStore;
		LivingThing thnStore;
		int i=0, i2=0, i3;

		if (intLocX-entityViewrangeX<0) i = -1*(intLocX-entityViewrangeX);
		if (intLocY-entityViewrangeY<0) i2 = -1*(intLocY-entityViewrangeY);

		for (;i<1+(2*entityViewrangeX);i++)
		{
			if (intLocX+i-entityViewrangeX<MapColumns)
			{
				for (i3=i2;i3<1+(2*entityViewrangeY);i3++)
				{
					if (intLocY+i3-entityViewrangeY<MapRows)
					{
						objStore = objEntities[intLocX+i-entityViewrangeX][intLocY+i3-entityViewrangeY];
						while (objStore != null)
						{
							if (objStore.isLivingThing())
							{
								thnStore = (LivingThing)objStore;
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


	public void run()
	{
		log.printMessage(Log.ALWAYS,"Mob ticks = "+lngMobTicks);
		log.printMessage(Log.ALWAYS,"Player ticks = "+lngPlayerTicks);
		log.printMessage(Log.ALWAYS,"Starting Ticks");
		int tick=0,
			i;
		LivingThing thnStore,
					thnStore2;
		Battle batStore;
		long lngTime = System.currentTimeMillis(),
				lngPause=0;
		while(true)
		{
			try
			{
				//250 milliseconds per tick
				lngPause = lngPlayerTicks-(System.currentTimeMillis()-lngTime);
				if (lngPause > 0)
					Thread.currentThread().sleep(lngPause);
				lngTime = System.currentTimeMillis();
				if (tick%73==0)
				{
					for (i=0;i<vctPets.size();i++)
					{
						thnStore = (LivingThing)vctPets.elementAt(i);
						if (thnStore.batBattle == null)
						{
							if (thnStore.blnSleep)
							{
								thnStore.hp += 3+(thnStore.cons+thnStore.consbon);
								if (thnStore.hp > (thnStore.maxhp+thnStore.hpbon))
								{
									thnStore.hp = (thnStore.maxhp+thnStore.hpbon);
								}
								thnStore.mp += 3+(thnStore.wisd+thnStore.wisdbon);
								if (thnStore.mp > (thnStore.maxmp+thnStore.mpbon))
								{
									thnStore.mp = (thnStore.maxmp+thnStore.mpbon);
								}
							}else
							{
								thnStore.hp += 1+((thnStore.cons+thnStore.consbon)/2);
								if (thnStore.hp > (thnStore.maxhp+thnStore.hpbon))
								{
									thnStore.hp = (thnStore.maxhp+thnStore.hpbon);
								}
								thnStore.mp += 1+((thnStore.wisd+thnStore.wisdbon)/2);
								if (thnStore.mp > (thnStore.maxmp+thnStore.mpbon))
								{
									thnStore.mp = (thnStore.maxmp+thnStore.mpbon);
								}
							}
						}
						if (thnStore.thnMaster != null)
						{
							if (!thnStore.thnMaster.blnWorking) {
								thnStore.close();
								continue;
							}
							boolean blnTmpShouldSave = thnStore.blnShouldSave;
							thnStore.thnMaster.updateStats();
							thnStore.blnShouldSave = blnTmpShouldSave;
						} else {
							thnStore.close();
							continue;
						}
						thnStore.savePlayer();
					}
				}
				for (i=0;i<vctPets.size();i++)
				{
					thnStore = (LivingThing)vctPets.elementAt(i);
					synchronized(thnStore.vctMovement)
					{
						if(thnStore.vctMovement.size() > 0)
						{
							try
							{
								String strStore = (String)thnStore.vctMovement.elementAt(0);
								char charStore = strStore.charAt(0);
								switch(charStore)
								{
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
							}catch(Exception e)
							{
								log.printError("DuskEngine.run():At movement tick for players", e);
							}
						}
					}
				}
				//Following code submitted by Randall Leeds, revised by Tom Weingarten:
				for(i=0;i<vctSockets.size();i++)
				{
					thnStore = (LivingThing)vctSockets.elementAt(i);
					if (!thnStore.blnWorking) {
						//thnStore.closeNoMsgPlayer();
						continue;
					}
					if (!thnStore.blnCanSave)
					{
						continue;
					}
					if (thnStore.noChannel > 0 && tick%4 == 0)
					{
						thnStore.noChannel--;
					}
					synchronized(thnStore.vctMovement)
					{
						if(thnStore.vctMovement.size() > 0)
						{
							try
							{
								String strStore = (String)thnStore.vctMovement.elementAt(0);
								char charStore = strStore.charAt(0);
								switch(charStore)
								{
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
							}catch(Exception e)
							{
								log.printError("DuskEngine.run():At movement tick for players", e);
							}
						}
					}
					if (tick%73 == 0)
					{
						if (thnStore.batBattle == null)
						{
							if (thnStore.blnSleep)
							{
								thnStore.hp += 3+(thnStore.cons+thnStore.consbon);
								if (thnStore.hp > (thnStore.maxhp+thnStore.hpbon))
								{
									thnStore.hp = (thnStore.maxhp+thnStore.hpbon);
								}
								thnStore.mp += 3+(thnStore.wisd+thnStore.wisdbon);
								if (thnStore.mp > (thnStore.maxmp+thnStore.mpbon))
								{
									thnStore.mp = (thnStore.maxmp+thnStore.mpbon);
								}
							}else
							{
								thnStore.hp += 1+((thnStore.cons+thnStore.consbon)/2);
								if (thnStore.hp > (thnStore.maxhp+thnStore.hpbon))
								{
									thnStore.hp = (thnStore.maxhp+thnStore.hpbon);
								}
								thnStore.mp += 1+((thnStore.wisd+thnStore.wisdbon)/2);
								if (thnStore.mp > (thnStore.maxmp+thnStore.mpbon))
								{
									thnStore.mp = (thnStore.maxmp+thnStore.mpbon);
								}
							}
							thnStore.updateInfo();
							thnStore.savePlayer();
						}
					}
				}
				//End of code submitted by Randall Leeds

				if (tick%10 == 0)
				{
					for (i=0;i<vctBattles.size();i++)
					{
						batStore = (Battle)vctBattles.elementAt(i);
						if (batStore.blnRunning == false)
						{
							vctBattles.removeElementAt(i);
							i--;
						}else
						{
							batStore.run();
						}
					}
				}
				if (tick>72)
				{
					tick = 0;
					for (i=0;i<vctMobs.size();i++)
					{
						thnStore = (LivingThing)vctMobs.elementAt(i);
						if (thnStore.batBattle == null)
						{
							if (thnStore.intLocX != -6)
							{
								thnStore.hp += 1+(thnStore.cons/2);
								if (thnStore.hp > thnStore.maxhp)
								{
									thnStore.hp = thnStore.maxhp;
								}
								thnStore.mp += 1+(thnStore.wisd/2);
								if (thnStore.mp > thnStore.maxmp)
								{
									thnStore.mp = thnStore.maxmp;
								}
							}else
							{
								thnStore.hp++;
								if (thnStore.hp > 0)
								{
									thnStore.hp = thnStore.maxhp;
									thnStore.mp = thnStore.maxmp;
									thnStore.changeLocBypass(thnStore.originalX,thnStore.originalY);
								}
							}
						}
					}
					for (i=0;i<vctFactions.size();i++)
					{
						((Faction)(vctFactions.elementAt(i))).saveFactionData();
					}
				}
			tick++;
			}catch (Exception e)
			{
				log.printError("DuskEngine.run():at ticks", e);
			}
		}
	}
}
