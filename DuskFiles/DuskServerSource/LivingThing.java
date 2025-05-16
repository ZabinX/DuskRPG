/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk. 

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or 
remove this license, and accompany it with all redistributions.
*/

import java.io.*;
import java.util.Date;
import java.util.Vector;
import java.util.Iterator;
import java.net.Socket;


/**
*LivingThing defines the base class for all moving objects.
*This includes Players, Pets, and Mobs.
*
*@author Tom Weingarten
*/
public class LivingThing extends DuskObject implements Runnable
{
	DuskEngine engGame;
	FifoQueue qMessage;

	//StillWorking?
	boolean blnWorking=true;
	
	//Has the player finished loading yet?
	boolean blnIsLoaded=false;

	//Should the player be in who yet?
	boolean blnReadyForTheWorld=false;
	
	//Can we save the player yet?
	boolean blnCanSave=false;

	//SHOULD we save the player yet?
	boolean blnShouldSave=false;

	//Is player in process of closing?
	boolean blnIsClosing=false;

	//Should we stop the thread?
	boolean blnStopThread=false;

	//Should we process in-game commands after script is finished?
	//(The script can change this to false to stop it from happening)
	//(This allows scripts to short-circuit in-game commands)
	boolean blnContinueToCommands=true;

	//Files
	RandomAccessFile rafFile,
					rafBackup;

	//ID data
	String strPWord,
			strClan="none",
			strTitle=null,
			strMaster=null;
	
	//Group
	LivingThing thnFollowing=null,
				thnMaster=null,
				thnCharmer=null;
	
	//Stats
	int playerID,	// uniquely identifies player for land ownership
		hp,
		maxhp,
		mp,
		maxmp,
		originalX,
		originalY,
		stre,
		inte,
		dext,
		cons,
		wisd,
		exp,
		hpbon=0,
		mpbon=0,
		strebon=0,
		intebon=0,
		dextbon=0,
		consbon=0,
		wisdbon=0,
		dammodbon=0,
		rangebon=0,
		acbon=0;

	//Max values for stats
	int hp_limit = -1,
		mp_limit = -1,
		exp_limit = -1,
		stre_limit = 100,
		inte_limit = 100,
		dext_limit = 100,
		cons_limit = 100,
		wisd_limit = 100;

	long cash;
	long lTimeOfLastMessage=0;

	//Status
	boolean blnSleep;

	//Is this livingthing currently allowed to move?
	boolean blnCanMove=true;

	//For commands that need input...
	boolean blnHalted=false;
	
	//Battle
	Battle batBattle=null;
	byte bytSide;
	long lngDamDone;
	
	//Flags
	Vector vctFlags;
	
	//Conditions
	Vector vctConditions;
	
	//Skills
	Vector vctSkills;

	//Spells
	Vector vctSpells;

	//Items
	Equipment equWorn;
	ItemList vctItems;

	//Command queue
	Vector vctCommands;
	
	//Movement queue
	Vector vctMovement;
	
	//Entities (for optimized refresh)
	Vector vctEntities;

	//Image step
	int intStep;
	
	//Race
	String strRace=null;
	
	//Privelages
	int privs=0;
	
	//Socket connection
	Socket sckConnection;
	BufferedReader bfrSocketIn;
	DataOutputStream stmOut;
	Thread thrConnection,
			thrSend;
	
	//Prefs
	boolean audioon=true,
			coloron=true,
			popup=true,
			highlight=true,
			noFollow=false;
	int noChannel=0;

	//Timestamp of last save
	Date datLastSave;

	//List of players being ignored
	Vector vctIgnore;
	
	//Type
	/*
		0=Player
		1=Mob
		2=Pet
	*/
	byte Type;
	boolean isPlayer()
	{
		if (Type==0)
		{
			return true;
		}
		return false;
	}
	boolean isMob()
	{
		if (Type==1)
		{
			return true;
		}
		return false;
	}
	boolean isPet()
	{
		if (Type==2)
		{
			return true;
		}
		return false;
	}
	
	/**
	*for extended classes
	*/
	public LivingThing()
	{
	}
	
	/**
	*new Player
	*/
	public LivingThing(Socket inSocket,DuskEngine inEngine)
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
				send("Goodbye.\n"+(char)0);
				Thread.sleep(1000);
				closeNosavePlayer();
				return;
			}
			// Game is shutting down
			if (engGame.blnShuttingDown)
			{
				chatMessage("Sorry, the server is not accepting new connections. It is either being shutdown or worked on.  Try again later.");
				send("Goodbye.\n"+(char)0);
				Thread.sleep(1000);
				closeNosavePlayer();
				return;
			}
			if (!engGame.isGoodIP(sckConnection.getInetAddress().toString()))
			{
				chatMessage("Connections from your machine are no longer being accepted.");
				send("Goodbye.\n"+(char)0);
				Thread.sleep(1000);
				closeNosavePlayer();
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
						send("Goodbye.\n"+(char)0);
						Thread.sleep(1000);
						closeNosavePlayer();
						return;
					}
				}
			}
			// End IPF
		}catch(Exception e)
		{
			engGame.log.printError("LivingThing():Creating player", e);	
		}
	}
	

	/**
	*new Pet
	*/
	public LivingThing(String strName, String strType, LivingThing master,DuskEngine inEngine)
	{
		try
		{
			bytObjType = (byte)0;
			Type = 2;
			engGame = inEngine;
			ID = engGame.getID();
			thnMaster = master;
			strMaster = thnMaster.strName.toLowerCase();
			thnCharmer = thnMaster;
			intLocX = thnMaster.intLocX;
			intLocY = thnMaster.intLocY;
			batBattle = null;
			blnSleep = false;
			this.strName = strName;
			equWorn = new Equipment();
			vctItems = new ItemList();
			vctSkills = new Vector(0);
			vctSpells = new Vector(0);
			vctCommands = new Vector(0);
			vctConditions = new Vector(0,1);
			vctFlags = new Vector(0,1);
			vctIgnore = new Vector(0);
			vctMovement = new Vector(0,5);

			//Load pet files

			String strStore = "";
			if (strType != null)
			{
				strRace = strType;
			}
			/*
			** check to see if a pet exists
			*/
			File filCheck;
			if (strName.equalsIgnoreCase("default"))
			{
				strStore = thnMaster.strName.toLowerCase();
				filCheck = new File("pets/"+strStore);
				if (!filCheck.exists() && strType == null)
				{
					closeNosavePlayer();
					return;
				}
			}
			rafFile = new RandomAccessFile("pets/default", "rw");
			strStore = rafFile.readLine();
			while (!(strStore == null || strStore.equals(".")))
			{
				parseUserFile(strStore);
				strStore = rafFile.readLine();
			}
			rafFile.close();
			strStore = thnMaster.strName.toLowerCase();
			File filPlayer = new File("pets/"+strStore);
			File filBackup = new File("pets/"+strStore+".backup");
			/*
			** Check for old style pet name
			** (Only need to check if we already have a valid pet name)
			*/
			if (!strName.equalsIgnoreCase("default"))
			{
				strStore = strName.toLowerCase();
				File filOldPet = new File("pets/"+strStore);
				File filOldBackup = new File("pets/"+strStore+".backup");
				if (filOldPet.exists() && !filPlayer.exists())
				{
					filOldPet.renameTo(filPlayer);
					filOldPet.delete();
				}
				if (filOldBackup.exists() && !filBackup.exists())
				{
					filOldBackup.renameTo(filBackup);
					filOldBackup.delete();
				}
			}
			strStore = thnMaster.strName.toLowerCase();
			int i=0;
			if (filBackup.exists())
			{
				if (filPlayer.length() > filBackup.length())
				{
					filCheck = new File("backup/"+strStore+".possiblyDamaged");
					while (filCheck.exists())
					{
						i++;
						filCheck = new File("backup/"+strStore+".possiblyDamaged."+i);
					}
					filBackup.renameTo(filCheck);
				}else if (filPlayer.length() < filBackup.length())
				{
					filCheck = new File("backup/"+strStore+".possiblyDamaged");
					while (filCheck.exists())
					{
						i++;
						filCheck = new File("backup/"+strStore+".possiblyDamaged."+i);
					}
					filPlayer.renameTo(filCheck);
					filBackup.renameTo(new File("pets/"+strStore));
				}
			}
			strStore = thnMaster.strName.toLowerCase();
			rafFile = new RandomAccessFile("pets/"+strStore,"rw");
			rafBackup = new RandomAccessFile("pets/"+strStore+".backup","rw");
			strStore = rafFile.readLine();
			while (!(strStore == null || strStore.equals(".")))
			{
				parseUserFile(strStore);
				strStore = rafFile.readLine();
			}
			if (strRace != null)
			{
				RandomAccessFile rafRaceFile = new RandomAccessFile("defPets/"+strRace.toLowerCase(),"r");
				strStore = rafRaceFile.readLine();
				while (!(strStore == null || strStore.equals(".")))
				{
					parseRaceFile(strStore,rafRaceFile, true);
					strStore = rafRaceFile.readLine();
				}
				rafRaceFile.close();
			}
			if (strMaster == null)
			{
				strMaster = thnMaster.strName.toLowerCase();
			}
			engGame.vctPets.addElement(this);
			blnCanSave=true;
		}catch(Exception e)
		{
			engGame.log.printError("LivingThing():Creating pet", e);
			close();
		}
	}

	byte getSkill(String sklName)
	{
		Skill sklStore;
		int i;
		for (i=0;i<vctSkills.size();i++)
		{
			sklStore = (Skill)vctSkills.elementAt(i);
			if (sklName.equalsIgnoreCase(sklStore.strName))
			{
				return sklStore.value;
			}
		}
		return 0;
	}

	byte getSpell(String sklName)
	{
		Spell splStore;
		int i;
		for (i=0;i<vctSpells.size();i++)
		{
			splStore = (Spell)vctSpells.elementAt(i);
			if (sklName.equalsIgnoreCase(splStore.strName))
			{
				return splStore.value;
			}
		}
		return 0;
	}
	
	boolean addToSkill(String sklName, int add)
	{
		try
		{
		Spell splStore;
		int i;
		for (i=0;i<vctSpells.size();i++)
		{
			splStore = (Spell)vctSpells.elementAt(i);
			if (sklName.equals(splStore.strName))
			{
				if (splStore.value < 100)
				{
					splStore.value += add;
					if (splStore.value > 100)
					{
						splStore.value = 100;
					}
					return true;
				}
				return false;
			}
		}
		File filCheck = new File("defSpellGroups/"+sklName);
		if (filCheck.exists())
		{
			if (add > 100)
			{
				add = 100;
			}
			vctSpells.addElement(new Spell(sklName,(byte)add));
			return true;
		}
		
		Skill sklStore;
		for (i=0;i<vctSkills.size();i++)
		{
			sklStore = (Skill)vctSkills.elementAt(i);
			if (sklName.equals(sklStore.strName))
			{
				if (sklStore.value < 100)
				{
					sklStore.value += add;
					if (sklStore.value > 100)
					{
						sklStore.value = 100;
					}
					return true;
				}
				return false;
			}
		}
		if (add > 100)
		{
			add = 100;
		}
		vctSkills.addElement(new Skill(sklName,(byte)add));
		return true;
		}catch (Exception e)
		{
			engGame.log.printError("addToSkill()", e);
		}
		return false;
	}
	
	boolean setSkill(String sklName, int intNewValue)
	{
		if (intNewValue < 0)
			intNewValue = 0;
		if (intNewValue > 100)
			intNewValue = 100;
		try
		{
		Spell splStore;
		int i;
		for (i=0;i<vctSpells.size();i++)
		{
			splStore = (Spell)vctSpells.elementAt(i);
			if (sklName.equals(splStore.strName))
			{
				if (intNewValue == 0)
				{
					vctSpells.removeElementAt(i);
					return true;
				}
				splStore.value = (byte)intNewValue;
				return true;
			}
		}
		File filCheck = new File("defSpellGroups/"+sklName);
		if (filCheck.exists())
		{
			if (intNewValue > 0)
			{
				vctSpells.addElement(new Spell(sklName,(byte)intNewValue));
			}
			return true;
		}
		
		Skill sklStore;
		for (i=0;i<vctSkills.size();i++)
		{
			sklStore = (Skill)vctSkills.elementAt(i);
			if (sklName.equals(sklStore.strName))
			{
				if (intNewValue == 0)
				{
					vctSkills.removeElementAt(i);
					return true;
				}
				sklStore.value = (byte)intNewValue;
			}
		}
		if (intNewValue > 0)
		{
			vctSkills.addElement(new Skill(sklName,(byte)intNewValue));
		}
		return true;
		}catch (Exception e)
		{
			engGame.log.printError("setSkill()", e);
		}
		return false;
	}
	
	int totalSkillValue()
	{
		Skill sklStore;
		int result=0;
		for (int i=0;i<vctSkills.size();i++)
		{
			sklStore = (Skill)vctSkills.elementAt(i);
			result += sklStore.value;
		}
		Spell splStore;
		for (int i=0;i<vctSpells.size();i++)
		{
			splStore = (Spell)vctSpells.elementAt(i);
			result += splStore.value;
		}
		return result;
	}
	
	protected void parseUserFile(String strStore)
	{
		try
		{
			if (strStore.equalsIgnoreCase("timestamp"))
			{
				long lngDate = Long.parseLong(rafFile.readLine());
				datLastSave = new Date(lngDate);
				return;
			}
			if (strStore.equalsIgnoreCase("petname"))
			{
				strName = rafFile.readLine();
				return;
			}
			if (strStore.equalsIgnoreCase("master"))
			{
				strMaster = rafFile.readLine();
				return;
			}
			if (strStore.equalsIgnoreCase("skill"))
			{
				strStore = rafFile.readLine();
				addToSkill(strStore,Byte.parseByte(rafFile.readLine()));
				return;
			}
			if (strStore.equalsIgnoreCase("condition"))
			{
				Condition cndStore = engGame.getCondition(rafFile.readLine());
				cndStore.intTicksPast = Integer.parseInt(rafFile.readLine());
				cndStore.intDuration = Integer.parseInt(rafFile.readLine());
				if (cndStore.intDuration < -1) // only necessary to repair
					cndStore.intDuration = -1; // after bug fix, can go away
				addCondition(cndStore);
			}
			if (strStore.equalsIgnoreCase("item"))
			{
				Item itmStore = engGame.getItem(rafFile.readLine());
				if (itmStore != null)
					vctItems.addElement(itmStore);
				return;
			}
			if (strStore.equalsIgnoreCase("item2")) //for compatibility. Will be replaced with item later
			{
				Item itmStore = engGame.getItem(rafFile.readLine());
				if (itmStore != null)
				{
					itmStore.lngDurability = Long.parseLong(rafFile.readLine());
					itmStore.intUses = Integer.parseInt(rafFile.readLine());
					vctItems.addElement(itmStore);
				}
				return;
			}
			if (strStore.equalsIgnoreCase("privs"))
			{
				privs = Byte.parseByte(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("clan"))
			{
				strClan = rafFile.readLine();
				return;
			}
			if (strStore.equalsIgnoreCase("race"))
			{
				strRace = rafFile.readLine();
				return;
			}
			if (strStore.equalsIgnoreCase("title"))
			{
				strTitle = rafFile.readLine();
				return;
			}
			if (strStore.equalsIgnoreCase("description"))
			{
				strDescription = rafFile.readLine();
				return;
			}
			if (strStore.equalsIgnoreCase("x"))
			{
				intLocX = Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("y"))
			{
				intLocY = Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("hp"))
			{
				hp = Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("maxhp"))
			{
				maxhp = Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("mp") || strStore.equalsIgnoreCase("sp"))
			{
				mp = Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("maxmp") || strStore.equalsIgnoreCase("maxsp"))
			{
				maxmp = Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("cash"))
			{
				cash = Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("exp"))
			{
				exp = Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("stre"))
			{
				stre = Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("inte"))
			{
				inte = Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("dext"))
			{
				dext = Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equals("cons"))
			{
				cons = Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("wisd"))
			{
				wisd = Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("image"))
			{
				intImage = Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("pet"))
			{
				if (!isPet())
				{	
					thnFollowing = new LivingThing(rafFile.readLine(),null,this,engGame);
				}
				return;
			}
			if (strStore.equalsIgnoreCase("wield"))
			{
				equWorn.wield = engGame.getItem(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("arms"))
			{
				equWorn.arms = engGame.getItem(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("legs"))
			{
				equWorn.legs = engGame.getItem(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("torso"))
			{
				equWorn.torso = engGame.getItem(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("waist"))
			{
				equWorn.waist = engGame.getItem(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("neck"))
			{
				equWorn.neck = engGame.getItem(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("skull"))
			{
				equWorn.skull = engGame.getItem(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("eyes"))
			{
				equWorn.eyes = engGame.getItem(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("hands"))
			{
				equWorn.hands = engGame.getItem(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("wield2"))
			{
				equWorn.wield = engGame.getItem(rafFile.readLine());
				if (equWorn.wield != null)
				{
					equWorn.wield.lngDurability = Long.parseLong(rafFile.readLine());
					equWorn.wield.intUses = Integer.parseInt(rafFile.readLine());
				}
				runWearScript(equWorn.wield);
				return;
			}
			if (strStore.equalsIgnoreCase("arms2"))
			{
				equWorn.arms = engGame.getItem(rafFile.readLine());
				if (equWorn.arms != null)
				{
					equWorn.arms.lngDurability = Long.parseLong(rafFile.readLine());
					equWorn.arms.intUses = Integer.parseInt(rafFile.readLine());
				}
				runWearScript(equWorn.arms);
				return;
			}
			if (strStore.equalsIgnoreCase("legs2"))
			{
				equWorn.legs = engGame.getItem(rafFile.readLine());
				if (equWorn.legs != null)
				{
					equWorn.legs.lngDurability = Long.parseLong(rafFile.readLine());
					equWorn.legs.intUses = Integer.parseInt(rafFile.readLine());
				}
				runWearScript(equWorn.legs);
				return;
			}
			if (strStore.equalsIgnoreCase("torso2"))
			{
				equWorn.torso = engGame.getItem(rafFile.readLine());
				if (equWorn.torso != null)
				{
					equWorn.torso.lngDurability = Long.parseLong(rafFile.readLine());
					equWorn.torso.intUses = Integer.parseInt(rafFile.readLine());
				}
				runWearScript(equWorn.torso);
				return;
			}
			if (strStore.equalsIgnoreCase("waist2"))
			{
				equWorn.waist = engGame.getItem(rafFile.readLine());
				if (equWorn.waist != null)
				{
					equWorn.waist.lngDurability = Long.parseLong(rafFile.readLine());
					equWorn.waist.intUses = Integer.parseInt(rafFile.readLine());
				}
				runWearScript(equWorn.waist);
				return;
			}
			if (strStore.equalsIgnoreCase("neck2"))
			{
				equWorn.neck = engGame.getItem(rafFile.readLine());
				if (equWorn.neck != null)
				{
					equWorn.neck.lngDurability = Long.parseLong(rafFile.readLine());
					equWorn.neck.intUses = Integer.parseInt(rafFile.readLine());
				}
				runWearScript(equWorn.neck);
				return;
			}
			if (strStore.equalsIgnoreCase("skull2"))
			{
				equWorn.skull = engGame.getItem(rafFile.readLine());
				if (equWorn.skull != null)
				{
					equWorn.skull.lngDurability = Long.parseLong(rafFile.readLine());
					equWorn.skull.intUses = Integer.parseInt(rafFile.readLine());
				}
				runWearScript(equWorn.skull);
				return;
			}
			if (strStore.equalsIgnoreCase("eyes2"))
			{
				equWorn.eyes = engGame.getItem(rafFile.readLine());
				if (equWorn.eyes != null)
				{
					equWorn.eyes.lngDurability = Long.parseLong(rafFile.readLine());
					equWorn.eyes.intUses = Integer.parseInt(rafFile.readLine());
				}
				runWearScript(equWorn.eyes);
				return;
			}
			if (strStore.equalsIgnoreCase("hands2"))
			{
				equWorn.hands = engGame.getItem(rafFile.readLine());
				if (equWorn.hands != null)
				{
					equWorn.hands.lngDurability = Long.parseLong(rafFile.readLine());
					equWorn.hands.intUses = Integer.parseInt(rafFile.readLine());
				}
				runWearScript(equWorn.hands);
				return;
			}
			if (strStore.equalsIgnoreCase("nofollow"))
			{
				noFollow = true;
				return;
			}
			if (strStore.equalsIgnoreCase("nopopup"))
			{
				popup = false;
				return;
			}
			if (strStore.equalsIgnoreCase("nochannel"))
			{
				noChannel = Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("audiooff"))
			{
				audioon = false;
				return;
			}
			if (strStore.equalsIgnoreCase("coloroff"))
			{
				coloron = false;
				return;
			}
		}catch (Exception e)
		{
			engGame.log.printError("parseUserFile():Parsing \""+strStore+"\" from "+strName+"'s file", e);
		}
	}
	
	protected void parseRaceFile(String strStore,RandomAccessFile rafFile, boolean blnAdd)
	{
		try
		{
			if (strStore.equals("hp"))
			{
				if (blnAdd)
					hpbon += Integer.parseInt(rafFile.readLine());
				else
					hpbon -= Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equals("mp"))
			{
				if (blnAdd)
					mpbon += Integer.parseInt(rafFile.readLine());
				else
					mpbon -= Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equals("stre"))
			{
				if (blnAdd)
					strebon += Integer.parseInt(rafFile.readLine());
				else
					strebon -= Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equals("inte"))
			{
				if (blnAdd)
					intebon += Integer.parseInt(rafFile.readLine());
				else
					intebon -= Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equals("dext"))
			{
				if (blnAdd)
					dextbon += Integer.parseInt(rafFile.readLine());
				else
					dextbon -= Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equals("cons"))
			{
				if (blnAdd)
					consbon += Integer.parseInt(rafFile.readLine());
				else
					consbon -= Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equals("wisd"))
			{
				if (blnAdd)
					wisdbon += Integer.parseInt(rafFile.readLine());
				else
					wisdbon -= Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equals("range"))
			{
				if (blnAdd)
					rangebon += Integer.parseInt(rafFile.readLine());
				else
					rangebon -= Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equals("hp_limit"))
			{
				if (blnAdd)
					hp_limit = Integer.parseInt(rafFile.readLine());
				else
					hp_limit = -1;
				return;
			}
			if (strStore.equals("mp_limit"))
			{
				if (blnAdd)
					mp_limit = Integer.parseInt(rafFile.readLine());
				else
					mp_limit = -1;
				return;
			}
			if (strStore.equals("exp_limit"))
			{
				if (blnAdd)
					exp_limit = Integer.parseInt(rafFile.readLine());
				else
					exp_limit = -1;
				return;
			}
			if (strStore.equals("stre_limit"))
			{
				if (blnAdd)
					stre_limit = Integer.parseInt(rafFile.readLine());
				else
					stre_limit = 100;
				return;
			}
			if (strStore.equals("inte_limit"))
			{
				if (blnAdd)
					inte_limit = Integer.parseInt(rafFile.readLine());
				else
					inte_limit = 100;
				return;
			}
			if (strStore.equals("dext_limit"))
			{
				if (blnAdd)
					dext_limit = Integer.parseInt(rafFile.readLine());
				else
					dext_limit = 100;
				return;
			}
			if (strStore.equals("cons_limit"))
			{
				if (blnAdd)
					cons_limit = Integer.parseInt(rafFile.readLine());
				else
					cons_limit = 100;
				return;
			}
			if (strStore.equals("wisd_limit"))
			{
				if (blnAdd)
					wisd_limit = Integer.parseInt(rafFile.readLine());
				else
					wisd_limit = 100;
				return;
			}
			if (strStore.equals("image"))
			{
				intImage = Integer.parseInt(rafFile.readLine());
				return;
			}
		}catch (Exception e)
		{
			engGame.log.printError("parseRaceFile():Parsing \""+strStore+"\" from "+strName+"'s race file", e);
		}
	}
	
	boolean writePlayerFile(RandomAccessFile rafPlayerFile)
	{
		try
		{
			synchronized(rafPlayerFile)
			{
				rafPlayerFile.setLength(0);
				if (isPlayer())
				{
					rafPlayerFile.writeBytes(strPWord+"\n");
					rafPlayerFile.writeBytes("privs\n"+String.valueOf(privs)+"\n");
					if (strTitle != null)
						rafPlayerFile.writeBytes("title\n"+strTitle+"\n");
					if (strClan != null)
					{
						rafPlayerFile.writeBytes("clan\n"+strClan+"\n");
					}else
					{
						rafPlayerFile.writeBytes("clan\nnone\n");
					}
					rafPlayerFile.writeBytes("x\n"+String.valueOf(intLocX)+"\n");
					rafPlayerFile.writeBytes("y\n"+String.valueOf(intLocY)+"\n");
					if (popup == false)
						rafPlayerFile.writeBytes("nopopup\n");
					if (audioon == false)
						rafPlayerFile.writeBytes("audiooff\n");
					if (coloron == false)
						rafPlayerFile.writeBytes("coloroff\n");
					if (noFollow == true)
						rafPlayerFile.writeBytes("nofollow\n");
					if (noChannel != 0)
						rafPlayerFile.writeBytes("nochannel\n"+noChannel+"\n");
				}
				rafPlayerFile.writeBytes("race\n"+strRace+"\n");
				if (isPet())
				{
					rafPlayerFile.writeBytes("petname\n"+strName+"\n");
					rafPlayerFile.writeBytes("master\n"+strMaster+"\n");
				}
				if (strDescription != null)
					rafPlayerFile.writeBytes("description\n"+strDescription+"\n");
				rafPlayerFile.writeBytes("exp\n"+String.valueOf(exp)+"\n");
				rafPlayerFile.writeBytes("hp\n"+String.valueOf(hp)+"\n");
				rafPlayerFile.writeBytes("maxhp\n"+String.valueOf(maxhp)+"\n");
				rafPlayerFile.writeBytes("mp\n"+String.valueOf(mp)+"\n");
				rafPlayerFile.writeBytes("maxmp\n"+String.valueOf(maxmp)+"\n");
				rafPlayerFile.writeBytes("cash\n"+String.valueOf(cash)+"\n");
				rafPlayerFile.writeBytes("stre\n"+String.valueOf(stre)+"\n");
				rafPlayerFile.writeBytes("inte\n"+String.valueOf(inte)+"\n");
				rafPlayerFile.writeBytes("dext\n"+String.valueOf(dext)+"\n");
				rafPlayerFile.writeBytes("cons\n"+String.valueOf(cons)+"\n");
				rafPlayerFile.writeBytes("wisd\n"+String.valueOf(wisd)+"\n");
				Skill sklStore;
				for (int i=0;i<vctSkills.size();i++)
				{
					sklStore = (Skill)vctSkills.elementAt(i);
					if (sklStore != null)
						rafPlayerFile.writeBytes("skill\n"+sklStore.strName+"\n"+sklStore.value+"\n");
				}
				Spell splStore;
				for (int i=0;i<vctSpells.size();i++)
				{
					splStore = (Spell)vctSpells.elementAt(i);
					if (splStore != null)
						rafPlayerFile.writeBytes("skill\n"+splStore.strName+"\n"+splStore.value+"\n");
				}
				Condition cndStore;
				for (int i=0;i<vctConditions.size();i++)
				{
					cndStore = (Condition)vctConditions.elementAt(i);
					if (cndStore != null)
						rafPlayerFile.writeBytes("condition\n"+cndStore.strName+"\n"+cndStore.intTicksPast+"\n"+cndStore.intDuration+"\n");
				}
				if (equWorn.wield != null)
				{
					rafPlayerFile.writeBytes("wield2\n"+equWorn.wield.strName+"\n"+equWorn.wield.lngDurability+"\n"+equWorn.wield.intUses+"\n");
				}
				if (equWorn.arms != null)
				{
					rafPlayerFile.writeBytes("arms2\n"+equWorn.arms.strName+"\n"+equWorn.arms.lngDurability+"\n"+equWorn.arms.intUses+"\n");
				}
				if (equWorn.legs != null)
				{
					rafPlayerFile.writeBytes("legs2\n"+equWorn.legs.strName+"\n"+equWorn.legs.lngDurability+"\n"+equWorn.legs.intUses+"\n");
				}
				if (equWorn.torso != null)
				{
					rafPlayerFile.writeBytes("torso2\n"+equWorn.torso.strName+"\n"+equWorn.torso.lngDurability+"\n"+equWorn.torso.intUses+"\n");
				}
				if (equWorn.waist != null)
				{
					rafPlayerFile.writeBytes("waist2\n"+equWorn.waist.strName+"\n"+equWorn.waist.lngDurability+"\n"+equWorn.waist.intUses+"\n");
				}
				if (equWorn.neck != null)
				{
					rafPlayerFile.writeBytes("neck2\n"+equWorn.neck.strName+"\n"+equWorn.neck.lngDurability+"\n"+equWorn.neck.intUses+"\n");
				}
				if (equWorn.skull != null)
				{
					rafPlayerFile.writeBytes("skull2\n"+equWorn.skull.strName+"\n"+equWorn.skull.lngDurability+"\n"+equWorn.skull.intUses+"\n");
				}
				if (equWorn.eyes != null)
				{
					rafPlayerFile.writeBytes("eyes2\n"+equWorn.eyes.strName+"\n"+equWorn.eyes.lngDurability+"\n"+equWorn.eyes.intUses+"\n");
				}
				if (equWorn.hands != null)
				{
					rafPlayerFile.writeBytes("hands2\n"+equWorn.hands.strName+"\n"+equWorn.hands.lngDurability+"\n"+equWorn.hands.intUses+"\n");
				}
				Item itmStore;
				Iterator iter = vctItems.keySet().iterator();
				LifoQueue qStore;
				QueueObject qoStore;
				while (iter.hasNext())
				{
					qStore = (LifoQueue)vctItems.get(iter.next());
					qoStore = qStore.head();
					while (qoStore != null)
					{
						itmStore = (Item)qoStore.getObject();
						if (itmStore != null)
						{
							rafPlayerFile.writeBytes("item2\n"+itmStore.strName+"\n"+itmStore.lngDurability+"\n"+itmStore.intUses+"\n");
						}
						qoStore = qoStore.next();
					}
				}
				rafPlayerFile.writeBytes(".\n");//end of file
			}
		}catch(Exception e)
		{
			engGame.log.printError("writePlayerFile():While writing player file for "+strName, e);
			return false;
		}
		return true;
	}
	
	void savePlayer()
	{
		if (!blnShouldSave)
		{
			/*
			** User info has not changed significantly
			** No need to save at this time.
			*/
			return;
		}
		if (!blnCanSave)
		{
			/*
			** File is currently loading or saving and is not safe to
			** save at this time.
			*/
			return;
		}
		blnCanSave=false;

		String strStore = strName.toLowerCase();
		String strDirName = "users";
		if (isPet())
		{
			strStore = strMaster;
			strDirName = "pets";
		}

		boolean blnSaveSuccessful;
		long lngFileLength=0;
		blnSaveSuccessful = writePlayerFile(rafFile);
		try
		{
			lngFileLength = rafFile.length();
		}
		catch (Exception e){}

		if (!blnSaveSuccessful || (lngFileLength < 100))
		{
			/*
			** Error saving file.  Close it, open it back up, and try again.
			*/
			try
			{
				rafFile.close();
			} catch(Exception e){}
			try
			{
				rafFile = new RandomAccessFile(strDirName+"/"+strStore, "rw");
			} catch(Exception e){}

			blnSaveSuccessful = writePlayerFile(rafFile);

			try
			{
				lngFileLength = rafFile.length();
			}
			catch (Exception e){}

			if (!blnSaveSuccessful || (lngFileLength < 100))
			{
				engGame.log.printMessage(Log.ERROR, "savePlayer():Saving primary file for "+strName+", second try failed, aborting savePlayer");
				blnCanSave=true;
				return;
			}
		}

		blnShouldSave = false;

		blnSaveSuccessful = writePlayerFile(rafBackup);

		try
		{
			lngFileLength = rafBackup.length();
		}
		catch (Exception e){}

		if (!blnSaveSuccessful || (lngFileLength < 100))
		{
			/*
			** Error saving file.  Close it, open it back up, and try again.
			*/
			try
			{
				rafBackup.close();
			} catch(Exception e){}
			try
			{
				rafBackup = new RandomAccessFile(strDirName+"/"+strStore+".backup", "rw");
			} catch(Exception e){}

			blnSaveSuccessful = writePlayerFile(rafBackup);

			try
			{
				lngFileLength = rafBackup.length();
			}
			catch (Exception e){}

			if (!blnSaveSuccessful || (lngFileLength < 100))
			{
				engGame.log.printMessage(Log.ERROR, "savePlayer():Saving backup file for "+strName+", second try failed, aborting savePlayer");
				blnCanSave=true;
				return;
			}
		}

		blnCanSave=true;
	}
	
	void close()
	{
		if (strName == null || strName.equalsIgnoreCase("default"))
		{
			return;
		}
		if (blnIsClosing)
		{
			/*
			** Already closing elsewhere
			*/
			return;
		}
		blnIsClosing = true;
		blnWorking = false;
		blnShouldSave = true;
		if (!vctConditions.isEmpty() && engGame.vctCheckConditions.contains(this))
		{
			engGame.vctCheckConditions.removeElement(this);
		}
		removeFromGroup();
		try
		{
			engGame.removeDuskObject(this);
			if (isPlayer())
			{
				try
				{
					synchronized(engGame.scrOnLogOut)
					{
						if (blnCanSave)
						{
							engGame.scrOnLogOut.varVariables.clearVariables();
							engGame.scrOnLogOut.varVariables.addVariable("trigger",this);
							engGame.scrOnLogOut.runScript();
						}
					}
				}catch(Exception e){}
				try
				{
					stmOut.writeBytes((char)3+"Goodbye.\n"+(char)0);
				}catch (Exception e) {}
				synchronized (engGame.vctSockets)
				{
					engGame.vctSockets.removeElement(this);
				}
				try
				{
					savePlayer();
				}catch(Exception e) {}
				blnCanSave=false;
				try
				{
					rafFile.close();
					rafBackup.close();
				}catch(Exception e){}
				try
				{
					if (thnFollowing != null && thnFollowing.isPet())
					{
						thnFollowing.close();
					}
					for (int i=0;i<engGame.vctPets.size();i++)
					{
						LivingThing thnStore = (LivingThing)engGame.vctPets.elementAt(i);
						if (thnStore.thnMaster == this)
						{
							thnStore.close();
							break;
						}
					}
				}catch (Exception e) {}
				try
				{
					bfrSocketIn.close();
				}catch(Exception e) {}
				try
				{
					stmOut.close();
				}catch(Exception e) {}
				if (!(hasCondition("invis") && (privs > 2)))
				{
					engGame.log.printMessage(Log.INFO, sckConnection.getInetAddress().toString()+":"+strName+" has logged out");
					engGame.chatMessage(strName+" has logged out.",strName);
				} else
				{
					engGame.log.printMessage(Log.INFO, sckConnection.getInetAddress().toString()+":"+strName+" has logged out hidden from players");
				}
				try
				{
					sckConnection.close();
				}catch(Exception e) {}
				blnStopThread = true;
			}else if (isMob())
			{
				try
				{
					rafFile.close();
					rafBackup.close();
				}catch(Exception e){}
				engGame.vctMobs.removeElement(this);
			}else if (isPet())
			{
				engGame.vctPets.removeElement(this);
				savePlayer();
				try
				{
					rafFile.close();
					rafBackup.close();
				}catch(Exception e){}
			}
		}catch (Exception e)
		{
			engGame.log.printError("close():While closing "+strName, e);
		}
	}
	
	void closeNoMsgPlayer()
	{
	// Disabled this check... if this is called, the player needs to be closed.
	//	if (blnIsClosing)
	//	{
	//		/*
	//		** Already closing elsewhere
	//		*/
	//		return;
	//	}
		blnIsClosing = true;
		blnWorking = false;
		removeFromGroup();
		if (vctConditions.size() != 0)
		{
			engGame.vctCheckConditions.removeElement(this);
		}
		engGame.removeDuskObject(this);
		engGame.vctSockets.removeElement(this);
		try
		{
			sckConnection.shutdownInput();
		}catch(Exception e){}
		try
		{
			sckConnection.shutdownOutput();
		}catch(Exception e){}
		try
		{
			bfrSocketIn.close();
		}catch(Exception e){}
		savePlayer();
		try
		{
			rafFile.close();
			rafBackup.close();
		}catch(Exception e){}
		if (thnFollowing != null && thnFollowing.isPet())
		{
			thnFollowing.close();
		}
		try
		{
			stmOut.close();
		}catch(Exception e) {}
		blnStopThread = true;
		engGame.log.printMessage(Log.INFO, sckConnection.getInetAddress().toString()+":"+strName+" has logged out");
		engGame.chatMessage(strName+" has logged out.",strName);
		try
		{
			sckConnection.close();
		}catch(Exception e){}
		strName = null;
	}

	void closeNosavePlayer()
	{
		if (strName == null || strName.equalsIgnoreCase("default"))
		{
			blnStopThread = true;
			try
			{
				bfrSocketIn.close();
			}catch(Exception e) {}
			try
			{
				sckConnection.close();
			}catch(Exception e){}
			try
			{
				stmOut.close();
			}catch(Exception e) {}
			return;
		}
		if (blnIsClosing)
		{
			/*
			** Already closing elsewhere
			*/
			return;
		}
		blnIsClosing = true;
		blnWorking=false;
		blnCanSave=false;
		blnShouldSave=false;
		if (!vctConditions.isEmpty() && engGame.vctCheckConditions.contains(this))
		{
			engGame.vctCheckConditions.removeElement(this);
		}
		removeFromGroup();
		try
		{
			engGame.removeDuskObject(this);
			if (isPlayer())
			{
				try
				{
					synchronized(engGame.scrOnLogOut)
					{
						//engGame.scrOnLogOut.varVariables.clearVariables();
						//engGame.scrOnLogOut.varVariables.addVariable("trigger",this);
						//engGame.scrOnLogOut.runScript();
					}
				}catch(Exception e){}
				try
				{
					stmOut.writeBytes((char)3+"Goodbye.\n"+(char)0);
				}catch (Exception e) {}
				try
				{
					rafFile.close();
					rafBackup.close();
				}catch(Exception e){}
				engGame.vctSockets.removeElement(this);
				try
				{
					bfrSocketIn.close();
				}catch(Exception e) {}
				try
				{
					stmOut.close();
				}catch(Exception e) {}
				try
				{
					sckConnection.close();
				}catch(Exception e){}
				blnStopThread = true;
			}else if (isMob())
			{
				engGame.vctMobs.removeElement(this);
			}else if (isPet())
			{
				engGame.vctPets.removeElement(this);
				try
				{
					rafFile.close();
					rafBackup.close();
				}catch(Exception e){}
			}
		}catch (Exception e)
		{
			engGame.log.printError("closeNosavePlayer():While closing "+strName, e);
		}
	}
	
	void updateFlag(long ID, int Value)
	{
		send((char)29+""+ID+"\n"+Value+"\n");
	}

	void clearFlags()
	{
		send((char)30+"");
	}

	String goTo(int destX, int destY)
	{
		if (thnMaster != null)
		{
			if (!isPet() || thnMaster.thnFollowing == this)
			{
				return "You can't move while you're following someone.";
			}
		}
		if (Math.abs(destX - intLocX) > engGame.viewrange || Math.abs(destY - intLocY) > engGame.viewrange)
		{
			return null; 
		}
		int tempLocX = intLocX;
		int tempLocY = intLocY;
		synchronized(vctMovement)
		{
			vctMovement.removeAllElements();
			while (tempLocX != destX || tempLocY != destY)
			{
				if(Math.abs(tempLocX - destX) > Math.abs(tempLocY - destY))
				{
					if(tempLocX - destX > 0)
					{
						if(engGame.canMoveTo(tempLocX - 1, tempLocY, this))
						{
							tempLocX--;
							vctMovement.addElement("w");
						}else 
						{
							if(tempLocY == destY) return null;
							else if(tempLocY - destY > 0)
							{
								if(engGame.canMoveTo(tempLocX, tempLocY - 1, this))
								{
									tempLocY--;
									vctMovement.addElement("n");
								}else return null;
							}else
							{
								if(engGame.canMoveTo(tempLocX, tempLocY + 1, this))
								{
									tempLocY++;
									vctMovement.addElement("s");
								}else return null;
							}
						}
					}else
					{
						if(engGame.canMoveTo(tempLocX + 1, tempLocY, this))
						{
							tempLocX++;
							vctMovement.addElement("e");
						}else 
						{
							if(tempLocY == destY) return null;
							else if(tempLocY - destY > 0)
							{
								if(engGame.canMoveTo(tempLocX, tempLocY - 1, this))
								{
									tempLocY--;
									vctMovement.addElement("n");
								}else return null;
							}else
							{
								if(engGame.canMoveTo(tempLocX, tempLocY + 1, this))
								{
									tempLocY++;
									vctMovement.addElement("s");
								}else return null;
							}
						}
					}
				}else if(Math.abs(tempLocX - destX) < Math.abs(tempLocY - destY))
				{
					if(tempLocY - destY > 0)
					{
						if(engGame.canMoveTo(tempLocX, tempLocY - 1, this))
						{
							tempLocY--;
							vctMovement.addElement("n");
						}else 
						{
							if(tempLocX == destX) return null;
							else if(tempLocX - destX > 0)
							{
								if(engGame.canMoveTo(tempLocX - 1, tempLocY, this))
								{
									tempLocX--;
									vctMovement.addElement("w");
								}else return null;
							}else
							{
								if(engGame.canMoveTo(tempLocX + 1, tempLocY, this))
								{
									tempLocX++;
									vctMovement.addElement("e");
								}else return null;
							}
						}
					}else
					{
						if(engGame.canMoveTo(tempLocX, tempLocY + 1, this))
						{
							tempLocY++;
							vctMovement.addElement("s");
						}else 
						{
							if(tempLocX == destX) return null;
							else if(tempLocX - destX > 0)
							{
								if(engGame.canMoveTo(tempLocX - 1, tempLocY, this))
								{
									tempLocX--;
									vctMovement.addElement("w");
								}else return null;
							}else
							{
								if(engGame.canMoveTo(tempLocX + 1, tempLocY, this))
								{
									tempLocX++;
									vctMovement.addElement("e");
								}else return null;
							}
						}
					}
				}else
				{
					if(tempLocX - destX > 0)
					{
						if(engGame.canMoveTo(tempLocX - 1, tempLocY, this))
						{
							tempLocX--;
							vctMovement.addElement("w");
						}else 
						{
							if(tempLocY - destY > 0)
							{
								if(engGame.canMoveTo(tempLocX, tempLocY - 1, this))
								{
									tempLocY--;
									vctMovement.addElement("n");
								}else return null;
							}else
							{
								if(engGame.canMoveTo(tempLocX, tempLocY + 1, this))
								{
									tempLocY++;
									vctMovement.addElement("s");
								}else return null;
							}
						}
					}else
					{
						if(engGame.canMoveTo(tempLocX + 1, tempLocY, this))
						{
							tempLocX++;
							vctMovement.addElement("e");
						}else 
						{
							if(tempLocY - destY > 0)
							{
								if(engGame.canMoveTo(tempLocX, tempLocY - 1, this))
								{
									tempLocY--;
									vctMovement.addElement("n");
								}else return null;
							}else
							{
								if(engGame.canMoveTo(tempLocX, tempLocY + 1, this))
								{
									tempLocY++;
									vctMovement.addElement("s");
								}else return null;
							}
						}
					}
				}
			}
			return null;
		}
   		//End of block by Randall Leeds and Tom Weingarten
	}

	protected synchronized void moveTo(int newLocX,int newLocY, int intSendByte, int intNewStep)
	{
		if (privs < 5 && (newLocX >= (engGame.MapColumns-1) ||
						newLocY >= (engGame.MapRows-1) ||
						newLocX < 0 ||
						newLocY < 0))
		{
			return;
		}
		// Movement during combat is disallowed here
		// need to check min range in the battle and see if anything is at 1 with this livingthing
//		if (privs>1 || (batBattle == null && !blnSleep && engGame.canMoveTo(newLocX,newLocY,this)))
		if (privs>1 || (blnCanMove && !blnSleep && engGame.canMoveTo(newLocX,newLocY,this)))
		{
			if (isMob())
			{
				int maxY = originalY + engGame.viewrange;
				int minY = originalY - engGame.viewrange;
				int maxX = originalX + engGame.viewrange;
				int minX = originalX - engGame.viewrange;
				if ((newLocY > maxY) || (newLocY < minY) || (newLocX > maxX) || (newLocX < minX))
				{
					return;
				}
			}
		}else
			return;
		int oldLocX = intLocX;
		int oldLocY = intLocY;
		DuskObject objStore;
		boolean blnCanSee;
		int x, x1, y, y1, y2;
		x = intLocX-engGame.viewrange;
		if (x < 0)
			x = 0;
		x1 = intLocX+1+engGame.viewrange;
		if (x1 > engGame.MapColumns)
			x1 = engGame.MapColumns;
		y1 = intLocY-engGame.viewrange;
		if (y1 < 0)
			y1 = 0;
		y2 = intLocY+1+engGame.viewrange;
		if (y2 > engGame.MapRows)
			y2 = engGame.MapRows;
		for (;x<x1;x++)
		{
			for (y=y1;y<y2;y++)
			{
				objStore = engGame.objEntities[x][y];
				while (objStore != null)
				{
					if (objStore.isLivingThing())
					{
						LivingThing thnStore = (LivingThing)objStore;
						if (thnStore.isPlayer())
						{
							if (engGame.scrCanSeeLivingThing != null)
							{
								synchronized (engGame.scrCanSeeLivingThing)
								{
									engGame.scrCanSeeLivingThing.varVariables.clearVariables();
									engGame.scrCanSeeLivingThing.varVariables.addVariable("seeing",thnStore);
									engGame.scrCanSeeLivingThing.varVariables.addVariable("seen",this);
									blnCanSee = engGame.scrCanSeeLivingThing.rewindAndParseScript();
								}
							}else
								blnCanSee = true;
							if (blnCanSee && engGame.canSeeTo(this,objStore.intLocX,objStore.intLocY))
							{
								thnStore.send(""+(char)intSendByte+""+ID+"\n");
							}
						} else if (thnStore.isMob())
						{
							Mob thnMob = (Mob)thnStore;
							thnMob.blnCanSeePlayer=true;
						}
					}
					objStore = objStore.objNext;
				}
			}
		}
		engGame.moveDuskObject(this,newLocX,newLocY);
		try
		{
			intStep = intNewStep;
			if (isPlayer())
			{
				if (engGame.overMerchant(oldLocX,oldLocY) != null)
					offMerchant();
				if (engGame.overPlayerMerchant(oldLocX,oldLocY) != null)
					offMerchant();
				updateMap();
			}
			Script scrStore;
			try
			{
				scrStore = (Script)engGame.vctTileActions.elementAt(engGame.shrMap[intLocX][intLocY]);
				synchronized(scrStore)
				{
					scrStore.varVariables.clearVariables();
					scrStore.varVariables.addVariable("trigger",this);
					scrStore.runScript();
				}
			}catch (Exception e){}
			try
			{
				scrStore = new Script("defMoveActions/"+intLocX+"_"+intLocY,engGame,false);
				scrStore.varVariables.addVariable("trigger",this);
				scrStore.runScript();
				scrStore.close();
			}catch (Exception e){}
			
			//move follower
			if (thnFollowing != null)
			{
				//don't move follower if leader has moved onto follower's tile
				if ((thnFollowing.intLocX == newLocX) && (thnFollowing.intLocY == newLocY))
				{
					return;
				}
				if (Math.abs(thnFollowing.intLocX - oldLocX) + Math.abs(thnFollowing.intLocY - oldLocY) > 1)
				{
					if (thnFollowing.isPet())
					{
						if (thnFollowing.thnFollowing != null)
						{
							chatMessage(thnFollowing.thnFollowing.strName+" is no longer following you.");
							thnFollowing.thnFollowing.chatMessage("You are no longer following "+strName+".");
							thnFollowing.thnFollowing.thnMaster = null;
							thnFollowing.thnFollowing = null;
						}
						thnFollowing.changeLocBypass(oldLocX,oldLocY);
					}else
					{
						chatMessage(thnFollowing.strName+" is no longer following you.");
						thnFollowing.chatMessage("You are no longer following "+strName+".");
						thnFollowing.thnMaster = null;
						thnFollowing = null;
					}
				}else if (thnFollowing.intLocY > oldLocY)
					thnFollowing.moveN();
				else if (thnFollowing.intLocY < oldLocY)
					thnFollowing.moveS();
				else if (thnFollowing.intLocX > oldLocX)
					thnFollowing.moveW();
				else if (thnFollowing.intLocX < oldLocX)
					thnFollowing.moveE();
			}
			if (isPlayer())
				engGame.refreshEntities(this);
			removeIfCanNoLongerSee();
		}catch (Exception e)
		{
			engGame.log.printError("moveTo()", e);
		}
	}
	
	void moveN()
	{
		moveTo(intLocX, intLocY-1, 24, 0);
	}
	
	void moveS()
	{
		moveTo(intLocX, intLocY+1, 25, 2);
	}
	
	void moveW()
	{
		moveTo(intLocX-1, intLocY, 26, 4);
	}

	void moveE()
	{
		moveTo(intLocX+1, intLocY, 27, 6);
	}
	
	/**
	*Removes this entity from any LivingThings that can no longer see it.
	*
	*/
	void removeIfCanNoLongerSee()
	{
		DuskObject objStore;
		LivingThing thnStore;
		String strResult;
		int i,i2,i3;
		boolean blnCanSee;
		i=0;
	    if (intLocX-engGame.viewrange<0)
		{
	    	i = -1*(intLocX-engGame.viewrange);
	    }
	   	i2=0;
	    if (intLocY-engGame.viewrange<0)
	    {
	    	i2 = -1*(intLocY-engGame.viewrange);
	    }
		for (;i<engGame.mapsize;i++)
		{
			if (intLocX+i-engGame.viewrange<engGame.MapColumns)
			{
				for (i3=i2;i3<engGame.mapsize;i3++)
				{
					if (intLocY+i3-engGame.viewrange<engGame.MapRows)
					{
						objStore = engGame.objEntities[intLocX+i-engGame.viewrange][intLocY+i3-engGame.viewrange];
						while (objStore != null)
						{
							if (objStore.isLivingThing() && objStore != this)
							{
								thnStore = (LivingThing)objStore;
								if (thnStore.isPlayer() && thnStore.vctEntities.contains(this))
								{
									if (engGame.scrCanSeeLivingThing != null)
									{
										if (isLivingThing())
										{
											synchronized(engGame.scrCanSeeLivingThing)
											{
												engGame.scrCanSeeLivingThing.varVariables.clearVariables();
												engGame.scrCanSeeLivingThing.varVariables.addVariable("seeing",thnStore);
												engGame.scrCanSeeLivingThing.varVariables.addVariable("seen",(LivingThing)this);
												blnCanSee = engGame.scrCanSeeLivingThing.rewindAndParseScript();
											}
										}else
											blnCanSee = true;
									}else
										blnCanSee = true;
									if (!(blnCanSee && engGame.canSeeTo(thnStore,intLocX,intLocY)))
									{
										synchronized (objStore)
										{
											thnStore.vctEntities.removeElement(this);
											strResult=(char)16+""+ID+"\n";
											thnStore.send(strResult);
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

	public void changeLoc(int newLocX, int newLocY)
	{
		if (privs>1 || (batBattle == null && !blnSleep && engGame.canMoveTo(newLocX,newLocY,this)))
		{
			if (isMob())
			{
				if (!(Math.abs(originalX-newLocX) < engGame.viewrange && Math.abs(originalY-newLocY) < engGame.viewrange))
				{
					return;
				}	
			}
			changeLocBypass(newLocX,newLocY);
		}
	}
	
	synchronized public void changeLocBypass(int newLocX, int newLocY)
	{
		int oldLocX = intLocX;
		int oldLocY = intLocY;
		engGame.removeDuskObject(this);
		intLocX = newLocX;
		intLocY = newLocY;
		try
		{
			if (isPlayer())
			{
				updateMap();
				if (engGame.overMerchant(oldLocX,oldLocY) != null)
					offMerchant();
				if (engGame.overPlayerMerchant(oldLocX,oldLocY) != null)
					offMerchant();
	    	}
	    	//update entity:
	    	if (blnWorking)
				engGame.addDuskObject(this);
	    	Script scrStore;
			try
			{
				scrStore = (Script)engGame.vctTileActions.elementAt(engGame.shrMap[newLocX][newLocY]);
				synchronized(scrStore)
				{
					scrStore.varVariables.clearVariables();
					scrStore.varVariables.addVariable("trigger",this);
	    			scrStore.runScript();
				}
	    	}catch (Exception e){}
			try
			{
				scrStore = new Script("defMoveActions/"+newLocX+"_"+newLocY,engGame,false);
	    		scrStore.varVariables.addVariable("trigger",this);
	    		scrStore.runScript();
	    		scrStore.close();
	    	}catch (Exception e){}
	    	if (thnFollowing != null)
	    		thnFollowing.changeLocBypass(oldLocX,oldLocY);
	    	if (isPlayer())
	    		engGame.refreshEntities(this);
		}catch (Exception e)
		{
		   	engGame.log.printError("changeLocBypass():"+strName + " disconnected", e);
			blnStopThread = true;
		}
	}
	
	public void updateMap()
	{
		//update map:
	    String strResult = ""+(char)2;
		strResult += intLocX+"\n";
		strResult += intLocY+"\n";
	    for (int i=0;i<engGame.mapsize;i++)
	    {
	    	for (int i2=0;i2<engGame.mapsize;i2++)
	    	{
	    		try
	    		{
	    			strResult += engGame.shrMap[intLocX-engGame.viewrange+i][intLocY-engGame.viewrange+i2]+"\n";
	    		}catch (Exception e)
	    		{
	    			strResult += "0\n";
	    		}
	    	}
	    }
		send(strResult);
	}
	
	public void chatMessage(String inMessage)
	{
		if (inMessage == null)
			return;
	    if (isPlayer())
	    {
	    	String strResult = ""+(char)3;
	    	strResult += inMessage+"\n";
	    	send(strResult);
	    }
	    if (thnCharmer != null)
	    {
	    	thnCharmer.chatMessage("From "+strName+": "+inMessage);
	    	return;
	    }
	}
	
	public void chatMessage(int red, int green, int blue, String inMessage)
	{
		if (inMessage == null)
			return;
		if (isPlayer())
		{
			if (!coloron)
			{
				chatMessage(inMessage);
				return;
	 		}
	    	String strResult = ""+(char)23;
	    	strResult += red + "\n" + green + "\n" + blue + "\n" + inMessage + "\n";
	    	send(strResult);
		}
	    if (thnCharmer != null)
	    {
	    	thnCharmer.chatMessage(red,green,blue,"From "+strName+": "+inMessage);
	    	return;
	    }
	}
	
	public int getCharacterPoints()
	{
		int result = wisd
					+inte
					+stre
					+dext
					+cons
					+((maxhp)/10)
					+((maxmp)/10)
					+totalSkillValue();
		return result;
	}
	
	public int getTotalPoints()
	{
		int result = getCharacterPoints()+
					getArmorMod()+
					(getDamMod()-100);
		return result;
	}
	
	public Item getItem(String strStore)
	{
		if (strStore.equalsIgnoreCase("wielded"))
		{
			if (equWorn.wield != null)
			{
				return equWorn.wield;
			}
		}else if (strStore.equalsIgnoreCase("arms"))
		{
			if (equWorn.arms != null)
			{
				return equWorn.arms;
			}
		}else if (strStore.equalsIgnoreCase("legs"))
		{
			if (equWorn.legs != null)
			{
				return equWorn.legs;
			}
		}else if (strStore.equalsIgnoreCase("torso"))
		{
			if (equWorn.torso != null)
			{
				return equWorn.torso;
			}
		}else if (strStore.equalsIgnoreCase("waist"))
		{
			if (equWorn.waist != null)
			{
				return equWorn.waist;
			}
		}else if (strStore.equalsIgnoreCase("neck"))
		{
			if (equWorn.neck != null)
			{
				return equWorn.neck;
			}
		}else if (strStore.equalsIgnoreCase("skull"))
		{
			if (equWorn.skull != null)
			{
				return equWorn.skull;
			}
		}else if (strStore.equalsIgnoreCase("eyes"))
		{
			if (equWorn.eyes != null)
			{
				return equWorn.eyes;
			}
		}else if (strStore.equalsIgnoreCase("hands"))
		{
			if (equWorn.hands != null)
			{
				return equWorn.hands;
			}
		}
		int i,
			intNumber=1;
		i = strStore.indexOf('.');
		if (i != -1)
		{
			try
			{
				intNumber = Integer.parseInt(strStore.substring(0,i));
				strStore = strStore.substring(i+1,strStore.length());
			}catch(NumberFormatException e)
			{
				intNumber = 1;
			}
		}
		Item itmStore;
		LifoQueue qStore;
		qStore = (LifoQueue)vctItems.get(strStore);
		if (qStore != null)
		{
			if (qStore.size() >= intNumber)
			{
				itmStore = (Item)qStore.firstElement();
				return itmStore;
			}
		}
		return null;
	}
	
	public Item getItemAndRemove(String strStore)
	{
		int i,
			intNumber=1;
		i = strStore.indexOf(".");
		if (i != -1)
		{
			try
			{
				intNumber = Integer.parseInt(strStore.substring(0,i));
				strStore = strStore.substring(i+1,strStore.length());
			}catch(NumberFormatException e)
			{
				intNumber = 1;
			}
		}
		if (intNumber == 0)
		{
			return null;
		}
		Item itmStore;
		Item itmFound=null;
		LifoQueue qStore;
		qStore = (LifoQueue)vctItems.get(strStore);
		if (qStore != null)
		{
			if (!qStore.isEmpty())
			{
				itmStore = (Item)qStore.firstElement();
				itmFound = itmStore;
				while (intNumber != 0 && itmStore != null)
				{
					qStore.pop();
					intNumber--;
				}
				if (qStore.size() < 1)
				{
					vctItems.removeElement(strStore);
				}
			} else
			{
				vctItems.removeElement(strStore);
			}
		}
		return itmFound;
	}

	public int getArmorMod()
	{
		int result = 0;
		try
		{
			result += 0.05 * equWorn.arms.intMod;
		}catch(Exception e){}
		try
		{
			result += 0.05 * equWorn.legs.intMod;
		}catch(Exception e){}
		try
		{
			result += 0.05 * equWorn.hands.intMod;
		}catch(Exception e){}
		try
		{
			result += 0.05 * equWorn.eyes.intMod;
		}catch(Exception e){}
		try
		{
			result += 0.05 * equWorn.neck.intMod;
		}catch(Exception e){}
		try
		{
			result += 0.20 * equWorn.skull.intMod;
		}catch(Exception e){}
		try
		{
			result += 0.40 * equWorn.torso.intMod;
		}catch(Exception e){}
		try
		{
			result += 0.15 * equWorn.waist.intMod;
		}catch(Exception e){}
		return result;
	}
	
	public int getArmorModWithBonus()
	{
		return getArmorMod()+((dext+dextbon)/10)+acbon;
	}
	
	public int getDamMod()
	{
		try
		{
			return equWorn.wield.intMod;
		}catch (Exception e)
		{
			return 100;
		}
	}
	public int getDamModWithBonus()
	{
		return getDamMod()+dammodbon;
	}
	
    public int getRange()
    {
      Item item = equWorn.wield;
	  if (item == null)
	  {
		  return 1;
	  }
      return item.range();
    }

    public int getRangeWithBonus()
    {
		return getRange()+rangebon;
    }

	void weaponDam(int intDam)
	{
		if (isMob()) //Mobs weapons are invincible
			return;
		if (!(equWorn.wield == null || equWorn.wield.lngDurability == -1))
		{
			equWorn.wield.lngDurability -= intDam;
			if (equWorn.wield.lngDurability < 0)
			{
				chatMessage("Your "+equWorn.wield.strName+" breaks.");
				runUnWearScript(equWorn.wield);
				equWorn.wield = null;
				if (isPlayer())
				{
					updateEquipment();
					updateStats();
				}
			}
		}
	}
	
	void armorDam(int intDam)
	{
		if (isMob()) //Mobs armor is invincible
			return;
		int i=0;
		if (equWorn.arms != null)
			i++;
		if (equWorn.legs != null)
			i++;
		if (equWorn.hands != null)
			i++;
		if (equWorn.eyes != null)
			i++;
		if (equWorn.neck != null)
			i++;
		if (equWorn.skull != null)
			i++;
		if (equWorn.torso != null)
			i++;
		if (equWorn.waist != null)
			i++;
		if (i==0)
			return;
		if (!(equWorn.arms == null || equWorn.arms.lngDurability == -1))
		{
			equWorn.arms.lngDurability -= (intDam/i);
			if (equWorn.arms.lngDurability < 0)
			{
				chatMessage("Your "+equWorn.arms.strName+" breaks.");
				runUnWearScript(equWorn.arms);
				updateStats();
				equWorn.arms = null;
				updateEquipment();
			}
		}
		if (!(equWorn.legs == null || equWorn.legs.lngDurability == -1))
		{
			equWorn.legs.lngDurability -= (intDam/i);
			if (equWorn.legs.lngDurability < 0)
			{
				chatMessage("Your "+equWorn.legs.strName+" breaks.");
				runUnWearScript(equWorn.legs);
				updateStats();
				equWorn.legs = null;
				updateEquipment();
			}
		}
		if (!(equWorn.hands == null || equWorn.hands.lngDurability == -1))
		{
			equWorn.hands.lngDurability -= (intDam/i);
			if (equWorn.hands.lngDurability < 0)
			{
				chatMessage("Your "+equWorn.hands.strName+" breaks.");
				runUnWearScript(equWorn.hands);
				updateStats();
				equWorn.hands = null;
				updateEquipment();
			}
		}
		if (!(equWorn.eyes == null || equWorn.eyes.lngDurability == -1))
		{
			equWorn.eyes.lngDurability -= (intDam/i);
			if (equWorn.eyes.lngDurability < 0)
			{
				chatMessage("Your "+equWorn.eyes.strName+" breaks.");
				runUnWearScript(equWorn.eyes);
				updateStats();
				equWorn.eyes = null;
				updateEquipment();
			}
		}
		if (!(equWorn.neck == null || equWorn.neck.lngDurability == -1))
		{
			equWorn.neck.lngDurability -= (intDam/i);
			if (equWorn.neck.lngDurability < 0)
			{
				chatMessage("Your "+equWorn.neck.strName+" breaks.");
				runUnWearScript(equWorn.neck);
				updateStats();
				equWorn.neck = null;
				updateEquipment();
			}
		}
		if (!(equWorn.skull == null || equWorn.skull.lngDurability == -1))
		{
			equWorn.skull.lngDurability -= (intDam/i);
			if (equWorn.skull.lngDurability < 0)
			{
				chatMessage("Your "+equWorn.skull.strName+" breaks.");
				runUnWearScript(equWorn.skull);
				updateStats();
				updateEquipment();
				equWorn.skull = null;
			}
		}
		if (!(equWorn.torso == null || equWorn.torso.lngDurability == -1))
		{
			equWorn.torso.lngDurability -= (intDam/i);
			if (equWorn.torso.lngDurability < 0)
			{
				chatMessage("Your "+equWorn.torso.strName+" breaks.");
				runUnWearScript(equWorn.torso);
				updateStats();
				equWorn.torso = null;
				updateEquipment();
			}
		}
		if (!(equWorn.waist == null || equWorn.waist.lngDurability == -1))
		{
			equWorn.waist.lngDurability -= (intDam/i);
			if (equWorn.waist.lngDurability < 0)
			{
				chatMessage("Your "+equWorn.waist.strName+" breaks.");
				runUnWearScript(equWorn.waist);
				updateStats();
				equWorn.waist = null;
				updateEquipment();
			}
		}
	}
	
	void useItem(String strStore, int mustBeType)
	{
		String strStore2=null;
		int i2=0;
		if (strStore.startsWith("\""))
		{
			char c, c2;
			
			strStore2 = "";
			i2=1;
			try
			{
				while(true)
				{
					c = strStore.charAt(i2);
					if (c == '\\')
					{
						c2 = strStore.charAt(i2+1);
						strStore2 += c2;
					}else if (c == '\"')
					{
						i2++;
						break;
					}else
					{
						strStore2 += c;
					}
					i2++;
				}
			}catch(Exception e)
			{
				chatMessage("You don't have that.");
				return;
			}
		}else
		{
			i2 = strStore.indexOf(" ");
			if (i2 == -1)
			{
				strStore2 = strStore;
				i2 = strStore.length();
			}else
			{
				strStore2 = strStore.substring(0, i2);
			}
		}
		if (strStore.length() > i2+1)
		{
			strStore = strStore.substring(i2+1);
		}
		Item itmStore = getItem(strStore2);
		if (itmStore == null)
		{
			chatMessage("You don't have that.");
			return;
		}
		if (itmStore.strOnUseScript == null)
		{
			chatMessage("That has no use.");
			return;
		}
		if (mustBeType != -1 && itmStore.intType != mustBeType)
		{
			chatMessage("You can't use that like that.");
			return;
		}
		if (itmStore.intUses == 0)
		{
			chatMessage("That item is used up.");
			return;
		}
		try
		{
			Script scrStore = new Script("scripts/"+itmStore.strOnUseScript,engGame,false);
//			synchronized(scrStore)
//			{
				scrStore.varVariables.addVariable("trigger",this);
				scrStore.varVariables.addVariable("itemname",itmStore.strName);
				scrStore.varVariables.addVariable("mod",itmStore.intMod);
				scrStore.runScript();
				scrStore.close();
//			}
		}catch(Exception e)
		{
			chatMessage("That has no use.");
			return;
		}
		itmStore.intUses--;
	}

	void castSpell(String spell)
	{
		String strStore = "",
				strStore2 = "";
		int intStore,
			intStore2;
		LivingThing target = null;
		int i2=0;
		if (spell.startsWith("\""))
		{
			char c, c2;
			i2=1;
			try
			{
				while(true)
				{
					c = spell.charAt(i2);
					i2++;
					if (c == '\"')
					{
						break;
					}if (c == '\\')
					{
						c2 = spell.charAt(i2);
						strStore2 += c2;
					}else
					{
						strStore2 += c;
					}
				}
			}catch(Exception e)
			{
				chatMessage("You don't know that spell.");
			}
		}else
		{
			i2 = spell.indexOf(" ");
			if (i2 == -1)
			{
				strStore2 = spell;
				i2 = spell.length();
			}else
			{
				strStore2 = spell.substring(0, i2);
			}
		}
		if (spell.length() > i2+1)
		{
			spell = spell.substring(i2+1);
		}else
		{
			spell = null;
		}
		try
		{
			RandomAccessFile rafSpell = null;
			try
			{
				rafSpell = new RandomAccessFile("defSpells/"+strStore2.toLowerCase(),"r");
			}catch (Exception e)
			{
				chatMessage("You don't know that spell.");
				return;
			}
			strStore = rafSpell.readLine(); //find what spell group the spell belongs to
			rafSpell.close();
			SpellGroup grpStore = engGame.getSpellGroup(strStore);
			intStore = getSpell(strStore);
			intStore2 = grpStore.getSpellNumber(strStore2);
			if (grpStore == null)
			{
				chatMessage("You don't know that spell.");
				return;
			}
			Script scrSpell;
			try
			{
				scrSpell = new Script("defSpellGroups/"+intStore2+" "+strStore.toLowerCase(),engGame,false);
			}catch(Exception e)
			{
				chatMessage("You don't know that spell.");
				return;
			}
			if (intStore2!=0) //change number to percent
				intStore2 = (100*intStore2)/(grpStore.vctSpells.size()-1);
			if (intStore==0 || intStore<intStore2)
			{
				chatMessage("You don't know that spell.");
				scrSpell.close();
				return;
			}
			intStore2 = (110-(intStore-intStore2))/2; //change percent to mp cost
			if (intStore2 > mp)
			{
				chatMessage("You don't have enough mp to cast that spell.");
				scrSpell.close();
				return;
			}
			mp -= intStore2;
			scrSpell.varVariables.addVariable("caster",this);
			if (spell == null)
			{
		    	scrSpell.runScript();
			}else
			{
		    	scrSpell.runScript(spell);
			}
		    scrSpell.close();
			if (isPlayer())
			{
				updateInfo();
			}
		}catch (Exception e)
		{
			engGame.log.printError("castSpell()", e);
		}
	}
	
	boolean isWearing(String strStore)
	{
		if (equWorn.wield != null && equWorn.wield.strName.equals(strStore))
			return true;
		else if (equWorn.arms != null && equWorn.arms.strName.equals(strStore))
			return true;
		else if (equWorn.legs != null && equWorn.legs.strName.equals(strStore))
			return true;
		else if (equWorn.torso != null && equWorn.torso.strName.equals(strStore))
			return true;
		else if (equWorn.waist != null && equWorn.waist.strName.equals(strStore))
			return true;
		else if (equWorn.neck != null && equWorn.neck.strName.equals(strStore))
			return true;
		else if (equWorn.skull != null && equWorn.skull.strName.equals(strStore))
			return true;
		else if (equWorn.eyes != null && equWorn.eyes.strName.equals(strStore))
			return true;
		else if (equWorn.hands != null && equWorn.hands.strName.equals(strStore))
			return true;
		return false;
	}
	
	void unWear(String strStore)
	{
		if (strStore.equalsIgnoreCase("wielded"))
		{
			if (equWorn.wield != null)
			{
				vctItems.addElement(equWorn.wield);
				runUnWearScript(equWorn.wield);
				equWorn.wield = null;
			}
		}else if (strStore.equalsIgnoreCase("arms"))
		{
			if (equWorn.arms != null)
			{
				vctItems.addElement(equWorn.arms);
				runUnWearScript(equWorn.arms);
				equWorn.arms = null;
			}
		}else if (strStore.equalsIgnoreCase("legs"))
		{
			if (equWorn.legs != null)
			{
				vctItems.addElement(equWorn.legs);
				runUnWearScript(equWorn.legs);
				equWorn.legs = null;
			}
		}else if (strStore.equalsIgnoreCase("torso"))
		{
			if (equWorn.torso != null)
			{
				vctItems.addElement(equWorn.torso);
				runUnWearScript(equWorn.torso);
				equWorn.torso = null;
			}
		}else if (strStore.equalsIgnoreCase("waist"))
		{
			if (equWorn.waist != null)
			{
				vctItems.addElement(equWorn.waist);
				runUnWearScript(equWorn.waist);
				equWorn.waist = null;
			}
		}else if (strStore.equalsIgnoreCase("neck"))
		{
			if (equWorn.neck != null)
			{
				vctItems.addElement(equWorn.neck);
				runUnWearScript(equWorn.neck);
				equWorn.neck = null;
			}
		}else if (strStore.equalsIgnoreCase("skull"))
		{
			if (equWorn.skull != null)
			{
				vctItems.addElement(equWorn.skull);
				runUnWearScript(equWorn.skull);
				equWorn.skull = null;
			}
		}else if (strStore.equalsIgnoreCase("eyes"))
		{
			if (equWorn.eyes != null)
			{
				vctItems.addElement(equWorn.eyes);
				runUnWearScript(equWorn.eyes);
				equWorn.eyes = null;
			}
		}else if (strStore.equalsIgnoreCase("hands"))
		{
			if (equWorn.hands != null)
			{
				vctItems.addElement(equWorn.hands);
				runUnWearScript(equWorn.hands);
				equWorn.hands = null;
			}
		}else if (strStore.equals("all")) // unwear all
		{
			if (equWorn.wield != null)
			{
				vctItems.addElement(equWorn.wield);
				runUnWearScript(equWorn.wield);
				equWorn.wield = null;
			}
			if (equWorn.arms != null)
			{
				vctItems.addElement(equWorn.arms);
				runUnWearScript(equWorn.arms);
				equWorn.arms = null;
			}
			if (equWorn.legs != null)
			{
				vctItems.addElement(equWorn.legs);
				runUnWearScript(equWorn.legs);
				equWorn.legs = null;
			}
			if (equWorn.torso != null)
			{
				vctItems.addElement(equWorn.torso);
				runUnWearScript(equWorn.torso);
				equWorn.torso = null;
			}
			if (equWorn.waist != null)
			{
				vctItems.addElement(equWorn.waist);
				runUnWearScript(equWorn.waist);
				equWorn.waist = null;
			}
			if (equWorn.neck != null)
			{
				vctItems.addElement(equWorn.neck);
				runUnWearScript(equWorn.neck);
				equWorn.neck = null;
			}
			if (equWorn.skull != null)
			{
				vctItems.addElement(equWorn.skull);
				runUnWearScript(equWorn.skull);
				equWorn.skull = null;
			}
			if (equWorn.eyes != null)
			{
				vctItems.addElement(equWorn.eyes);
				runUnWearScript(equWorn.eyes);
				equWorn.eyes = null;
			}
			if (equWorn.hands != null)
			{
				vctItems.addElement(equWorn.hands);
				runUnWearScript(equWorn.hands);
				equWorn.hands = null;
			}
		}else
		{
			if (equWorn.wield != null && equWorn.wield.strName.equalsIgnoreCase(strStore))
			{
				vctItems.addElement(equWorn.wield);
				runUnWearScript(equWorn.wield);
				equWorn.wield = null;
			}else if (equWorn.arms != null && equWorn.arms.strName.equalsIgnoreCase(strStore))
			{
				vctItems.addElement(equWorn.arms);
				runUnWearScript(equWorn.arms);
				equWorn.arms = null;
			}else if (equWorn.legs != null && equWorn.legs.strName.equalsIgnoreCase(strStore))
			{
				vctItems.addElement(equWorn.legs);
				runUnWearScript(equWorn.legs);
				equWorn.legs = null;
			}else if (equWorn.torso != null && equWorn.torso.strName.equalsIgnoreCase(strStore))
			{
				vctItems.addElement(equWorn.torso);
				runUnWearScript(equWorn.torso);
				equWorn.torso = null;
			}else if (equWorn.waist != null && equWorn.waist.strName.equalsIgnoreCase(strStore))
			{
				vctItems.addElement(equWorn.waist);
				runUnWearScript(equWorn.waist);
				equWorn.waist = null;
			}else if (equWorn.neck != null && equWorn.neck.strName.equalsIgnoreCase(strStore))
			{
				vctItems.addElement(equWorn.neck);
				runUnWearScript(equWorn.neck);
				equWorn.neck = null;
			}else if (equWorn.skull != null && equWorn.skull.strName.equalsIgnoreCase(strStore))
			{
				vctItems.addElement(equWorn.skull);
				runUnWearScript(equWorn.skull);
				equWorn.skull = null;
			}else if (equWorn.eyes != null && equWorn.eyes.strName.equalsIgnoreCase(strStore))
			{
				vctItems.addElement(equWorn.eyes);
				runUnWearScript(equWorn.eyes);
				equWorn.eyes = null;
			}else if (equWorn.hands != null && equWorn.hands.strName.equalsIgnoreCase(strStore))
			{
				vctItems.addElement(equWorn.hands);
				runUnWearScript(equWorn.hands);
				equWorn.hands = null;
			}
		}
		if (isPlayer())
		{
			updateStats();
			updateEquipment();
			updateItems();
		}
	}
	
	void runWearScript(Item itmStore)
	{
		if (itmStore.strOnWearScript != null)
		{
			try
			{
				Script scrStore = new Script("scripts/"+itmStore.strOnWearScript,engGame,false);
				scrStore.varVariables.addVariable("trigger",this);
				scrStore.varVariables.addVariable("itemname",itmStore.strName);
				scrStore.varVariables.addVariable("mod",itmStore.intMod);
				scrStore.runScript();
				scrStore.close();
			}catch(Exception e) {}
		}
	}
	
	void runUnWearScript(Item itmStore)
	{
		if (itmStore.strOnUnWearScript != null)
		{
			try
			{
				Script scrStore = new Script("scripts/"+itmStore.strOnUnWearScript,engGame,false);
				scrStore.varVariables.addVariable("trigger",this);
				scrStore.varVariables.addVariable("itemname",itmStore.strName);
				scrStore.varVariables.addVariable("mod",itmStore.intMod);
				scrStore.runScript();
				scrStore.close();
			}catch(Exception e) {}
		}
	}
	
	boolean hasCondition(String strStore)
	{
		Condition cndStore;
		for (int i=0;i<vctConditions.size();i++)
		{
			cndStore = (Condition)vctConditions.elementAt(i);
			if (cndStore.strName.equalsIgnoreCase(strStore))
			{
				return true;
			}
		}
		return false;
	}
	
	void addCondition(Condition cndStore)
	{
		if (vctConditions.size() == 0)
			engGame.vctCheckConditions.addElement(this);
		else
		{
			Condition cndStore2;
			int i = 0;
			while (i<vctConditions.size())
			{
				cndStore2 = (Condition)vctConditions.elementAt(i);
				if (cndStore2.strName.equalsIgnoreCase(cndStore.strName))
				{
					vctConditions.removeElementAt(i);
					if (cndStore2.strOnEnd != null)
					{
						try
						{
							Script scrStore = new Script("scripts/"+cndStore2.strOnEnd,engGame,false);
							scrStore.varVariables.addVariable("trigger",this);
							scrStore.runScript();
							scrStore.close();
						}catch(Exception e)
						{
							engGame.log.printError("addCondition():While running onEnd script for condition \""+cndStore.strName+"\"", e);
						}
					}
				}else
					i++;
			}
		}
		vctConditions.addElement(cndStore);
		if (cndStore.strOnStart != null)
		{
			try
			{
				Script scrStore = new Script("scripts/"+cndStore.strOnStart,engGame,false);
				scrStore.varVariables.addVariable("trigger",this);
				scrStore.varVariables.addVariable("condition",cndStore.strName);
				scrStore.runScript();
				scrStore.close();
			}catch(Exception e)
			{
				engGame.log.printError("addCondition():While running onStart script for condition \""+cndStore.strName+"\"", e);
			}
		}
		updateStats();
	}
	
	void removeCondition(String strName)
	{
		Condition cndStore;
		for (int i = 0;i<vctConditions.size();i++)
		{
			cndStore = (Condition)vctConditions.elementAt(i);
			if (strName.equalsIgnoreCase(cndStore.strName))
			{
				vctConditions.removeElementAt(i);
				if (vctConditions.size() == 0)
					engGame.vctCheckConditions.removeElement(this);
				if (cndStore.strOnEnd != null)
				{
					try
					{
						Script scrStore = new Script("scripts/"+cndStore.strOnEnd,engGame,false);
						scrStore.varVariables.addVariable("trigger",this);
						scrStore.varVariables.addVariable("condition",cndStore.strName);
						scrStore.runScript();
						scrStore.close();
					}catch(Exception e)
					{
						engGame.log.printError("removeCondition():While running onEnd script for condition \""+cndStore.strName+"\"", e);
					}
				}
				updateStats();
				return;
			}
		}
		updateStats();
	}
	
	DuskObject getLocalObject(String strName)
	{
		int i,
			i2,
			i3;
		DuskObject objStore;
		//Parse String
		int intNumber=0;
		boolean blnCanSee;
		i = strName.indexOf(".");
		if (i != -1)
		{
			try
			{
				intNumber = Integer.parseInt(strName.substring(0,i));
				strName = strName.substring(i+1,strName.length());
			}catch(NumberFormatException e)
			{
				intNumber = 0;
			}
		}
		//Search surrounding area
	   	i=0;
	    if (intLocX-engGame.viewrange<0)
		{
	    	i = -1*(intLocX-engGame.viewrange);
	    }
	   	i2=0;
	    if (intLocY-engGame.viewrange<0)
	    {
	    	i2 = -1*(intLocY-engGame.viewrange);
	    }
		for (;i<engGame.mapsize;i++)
		{
			if (intLocX+i-engGame.viewrange<engGame.MapColumns)
			{
				for (i3=i2;i3<engGame.mapsize;i3++)
				{
					if (intLocY+i3-engGame.viewrange<engGame.MapRows)
					{
						objStore = engGame.objEntities[intLocX+i-engGame.viewrange][intLocY+i3-engGame.viewrange];
						while (objStore != null)
						{
							if (objStore.strName.equalsIgnoreCase(strName))
							{
								if (engGame.scrCanSeeLivingThing != null && objStore.isLivingThing())
								{
									synchronized(engGame.scrCanSeeLivingThing)
									{
										engGame.scrCanSeeLivingThing.varVariables.clearVariables();
										engGame.scrCanSeeLivingThing.varVariables.addVariable("seeing",this);
										engGame.scrCanSeeLivingThing.varVariables.addVariable("seen",(LivingThing)objStore);
										blnCanSee = engGame.scrCanSeeLivingThing.rewindAndParseScript();
									}
								}else
									blnCanSee=true;
								if (blnCanSee && engGame.canSeeTo(this,objStore.intLocX,objStore.intLocY))
									if(intNumber==0)
										return objStore;
									else
										intNumber--;
							}
							objStore = objStore.objNext;
						}
					}
				}
			}
		}
		return null;
	}
	
	void removeFromGroup()
	{
		if (thnFollowing != null && thnFollowing.isPet())
		{
			if (thnMaster != null)
			{
				try
				{
					chatMessage("You are no longer following "+thnMaster.strName+".");
				}catch (Exception e) {}
				try
				{
					thnMaster.chatMessage(strName+" is no longer following you.");
				}catch (Exception e) {}
				thnMaster.thnFollowing = thnFollowing.thnFollowing;
			}
			if (thnFollowing.thnFollowing != null)
			{
				thnFollowing.thnFollowing.thnMaster = thnMaster;
			}
			if (!isPet())
			{
				thnMaster = null;
			}
			thnFollowing.thnFollowing = null;
		}else
		{
			if (thnMaster != null)
			{
				try
				{
					chatMessage("You are no longer following "+thnMaster.strName+".");
				}catch (Exception e) {}
				try
				{
					thnMaster.chatMessage(strName+" is no longer following you.");
				}catch (Exception e) {}
				thnMaster.thnFollowing = thnFollowing;
			}
			if (thnFollowing != null)
			{
				thnFollowing.thnMaster = thnMaster;
			}
			if (!isPet())
			{
				thnMaster = null;
			}
			thnFollowing = null;
		}
	}
	
	public void run()
	{
		thrConnection = Thread.currentThread();
		try
		{
			do
			{
				strName = bfrSocketIn.readLine();
				if (strName != null)
					strName = strName.trim();
			}while (!getPlayer());
			if (!blnWorking)
				return;
		}catch(Exception e)
		{
			engGame.log.printError("LivingThing.run():start", e);
			closeNosavePlayer();
			return;
		}
		thrConnection.setName("LivingThing("+strName+")");
		thrSend.setName("LivingThing("+strName+").send");
		resizeMap();
		changeLocBypass(intLocX,intLocY);
		updateInfo();
		updateStats();
		updateItems();
		updateEquipment();
		updateActions();
		if (engGame.blnMusic)
		{
			updateMusic();
        	playMusic(0);
		}
		if (!(hasCondition("invis") && (privs > 2)))
		{
			engGame.log.printMessage(Log.INFO, sckConnection.getInetAddress().toString()+":"+strName+" has entered the world");
			engGame.chatMessage(strName+" has entered the world.",strName);
		} else
		{
			chatMessage("You have entered the world hidden from players.");
			engGame.log.printMessage(Log.INFO, sckConnection.getInetAddress().toString()+":"+strName+" has entered the world hidden from players");
		}
		String strInput,
				strStore;
		blnCanSave=true;
		blnReadyForTheWorld=true;
		while(true)
		{
			if (blnStopThread) {
				return;
			}
			try
			{
				if (!blnHalted)
				{
					strInput = bfrSocketIn.readLine();
					if (strInput != null)
					{
						strInput = strInput.trim();
					}
					strStore = Commands.parseCommand(this, engGame, strInput);
					if (strStore != null)
					{
						chatMessage(strStore);
					}
				}
			}catch(Exception e)
			{
			    engGame.log.printError("LivingThing.run():"+strName+" disconnected", e);
				close();
			    return;
			}
		}
	}
	
	boolean getPlayer()
	{
		if (!engGame.isGoodName(strName))
		{
			chatMessage("Not a valid name. This may because you left it blank, used invalid symbols, or made it too long. Please try again.");
			return false;
		}
	   	String strStore;
	    int i;
	    LivingThing thnStore;
	    try
		{
			File filStore = new File("users/"+strName.toLowerCase());
			if (!filStore.exists() || filStore.length() < 100)
			{
				File filBackup = new File("users/"+strName.toLowerCase()+".backup");
				if (filBackup.exists())
				{
					filBackup.renameTo(filStore);
				}
			}

			String strIP = sckConnection.getInetAddress().toString();
			int ip = strIP.indexOf("/");
			strIP = strIP.substring(ip+1,strIP.length());

			if (filStore.exists())
			{
				try
				{
					rafFile = new RandomAccessFile("users/"+strName.toLowerCase(), "r");
					chatMessage("enter your password:");
					strPWord = bfrSocketIn.readLine();
					if (!strPWord.equals(rafFile.readLine()))
					{
						rafFile.close();
						engGame.log.printMessage(Log.INFO, sckConnection.getInetAddress().toString()+":"+strName+" entered the wrong password");
						Variable failCount = engGame.varIP.getVariable(strIP);
						if (failCount != null)
						{
							Double dblFailCount = (Double)failCount.objData;
							if (dblFailCount.intValue() >= 4)
							{
								engGame.vctBannedIP.addElement(strIP);
								chatMessage("Too many login failures, try again in an hour.");
								send("Goodbye.\n"+(char)0);
								Thread.sleep(1000);
								closeNosavePlayer();
								rafFile.close();
								return true;
							}else
							{
								engGame.varIP.addVariable(strIP,dblFailCount.intValue()+1); 
							}
						}else
						{
							engGame.varIP.addVariable(strIP,(double)1);
						}
						Thread.sleep(3000);
						chatMessage("Incorrect Password.");
						chatMessage("Enter your login name: ");
						return false;
					}
					rafFile.close();
				}catch (Exception e)
				{
		    		engGame.log.printError("getPlayer():"+sckConnection.getInetAddress().toString()+":"+strName, e);
					closeNosavePlayer();
					rafFile.close();
					return true;
				}
			}else
			{
				File fileStore = new File("pets/"+strName.toLowerCase());
				if (fileStore.exists())
				{
					chatMessage(strName+" is already in use.  Please choose another.");
					return false;
				}
				chatMessage(strName+", Is that correct? (yes/no)");
				if (!bfrSocketIn.readLine().equalsIgnoreCase("yes"))
				{
					chatMessage("Then what IS your name?");
					return false;
				}
				chatMessage("Enter a new password:");
				strPWord = bfrSocketIn.readLine();
				chatMessage("Confirm that password:");
				while (!strPWord.equals(bfrSocketIn.readLine()))
				{
					chatMessage("Passwords did not match, enter a new password:");
					strPWord = bfrSocketIn.readLine();
					chatMessage("Confirm that password:");
				}
			}
			engGame.varIP.removeVariable(strIP);
			try
			{
				equWorn = new Equipment();
				vctItems = new ItemList();
				vctSkills = new Vector(0,5);
				vctSpells = new Vector(0,5);
				vctConditions = new Vector(0,5);
				vctEntities = new Vector(0,10);
				vctFlags = new Vector(0,1);
				vctCommands = new Vector(0,3);
				vctMovement = new Vector(0,5);
				vctIgnore = new Vector(0);
				chatMessage("Login Accepted.");
				proceed();
				chatMessage("This game is running DuskServer v"+engGame.version+". http://dusk.wesowin.org/");
				chatMessage("Started at "+engGame.datStart.toString()+".");
    			for (i=0;i<engGame.vctSockets.size();i++)
    			{
     				thnStore = (LivingThing)engGame.vctSockets.elementAt(i);
        			if (strName.equalsIgnoreCase(thnStore.strName))
        			{
						engGame.log.printMessage(Log.INFO, sckConnection.getInetAddress().toString()+":"+strName+" tried to log in twice");
						chatMessage("That user is already logged in. They are being logged out.");
						thnStore.chatMessage("There has been another logon under this name, you are being logged out.");
						thnStore.close();
						break;
       			 	}
					// Second IP Filter check to catch delayed sign-ons
					if (engGame.blnIPF) 
					{
						String IP = ((LivingThing)engGame.vctSockets.elementAt(i)).sckConnection.getInetAddress().toString();
						if (IP.equalsIgnoreCase(sckConnection.getInetAddress().toString()))
						{
		    				chatMessage("There's already a player connected from your IP address.");
							Thread.sleep(1000);
							closeNosavePlayer();
							return false;
						}
					}
    			}
				engGame.vctSockets.addElement(this);
				try
				{
					if (engGame.scrOnStart != null)
					{
						synchronized(engGame.scrOnStart)
						{
							engGame.scrOnStart.varVariables.clearVariables();
							engGame.scrOnStart.varVariables.addVariable("trigger",this);
							engGame.scrOnStart.runScript();
						}
					}
				}catch(Exception e) {}
				rafFile = new RandomAccessFile("users/default","r");
				strStore = rafFile.readLine();
				while (!(strStore == null || strStore.equals(".")))
				{
					parseUserFile(strStore);
					strStore = rafFile.readLine();
				}
				rafFile.close();
	    	}catch(Exception e)
	    	{
		    	engGame.log.printError("getPlayer():While loading default user file for "+strName, e);
	    	}
	    	strStore = strName.toLowerCase();
			File filPlayer = new File("users/"+strStore);
			File filBackup = new File("users/"+strStore+".backup");
			File filCheck;
			int i2=0;
			if (filBackup.exists())
			{
				if (filPlayer.length() > filBackup.length())
				{
					filCheck = new File("backup/"+strStore+".possiblyDamaged");
					while (filCheck.exists())
					{
						i2++;
						filCheck = new File("backup/"+strStore+".possiblyDamaged."+i2);
					}
					filBackup.renameTo(filCheck);
				}else if (filPlayer.length() < filBackup.length())
				{
					filCheck = new File("backup/"+strStore+".possiblyDamaged");
					while (filCheck.exists())
					{
						i2++;
						filCheck = new File("backup/"+strStore+".possiblyDamaged."+i2);
					}
					filPlayer.renameTo(filCheck);
					filBackup.renameTo(new File("users/"+strStore));
				}
			}
			/*
			** Load the user
			*/
			rafFile = new RandomAccessFile("users/"+strStore, "rw");
			rafBackup = new RandomAccessFile("users/"+strStore+".backup", "rw");
	    	strStore = rafFile.readLine();
			while (!(strStore == null || strStore.equals(".")))
			{
				parseUserFile(strStore);
				strStore = rafFile.readLine();
			}
			/*
			** Try to load a pet, if they don't already have one
			*/
			if (thnFollowing == null)
			{
				thnFollowing = new LivingThing("default",null,this,engGame);
				if (thnFollowing.strName.equalsIgnoreCase("default"))
				{
					thnFollowing.closeNosavePlayer();
					thnFollowing = null;
				}
			}
		}catch(Exception e)
		{
		    engGame.log.printError("getPlayer():While loading file for "+strName, e);
		    closeNosavePlayer();
		    return true;
		}
		loadRace();
		blnIsLoaded = true;
		if (thnFollowing != null)
		{
			thnFollowing.blnIsLoaded=true;
			thnFollowing.changeLocBypass(intLocX,intLocY);
		}
		return true;
	}
	
	void loadRace()
	{
		RandomAccessFile rafFile2;
		String strStore;
		String strRaceDir;
		if (isPet())
		{
			strRaceDir = "defPets";
		}
		else
		{
			strRaceDir = "defRaces";
		}
		try
		{
			if (strRace == null || !(new File(strRaceDir+"/"+strRace).exists()))
			{
				chatMessage("Choose one of the following races:");
				File filRaces = new File(strRaceDir);
				String strList[] = filRaces.list();
				for (int i=0;i<strList.length;i++)
				{
					chatMessage(strList[i]);
				}
				if (isPet())
				{
					strStore = thnMaster.bfrSocketIn.readLine().toLowerCase();
				} else
				{
					strStore = bfrSocketIn.readLine().toLowerCase();
				}
				File filCheck = new File(strRaceDir+"/"+strStore);
				while (strStore.equals("") || !filCheck.exists())
				{
					chatMessage("That is not a valid race, please choose again.");
					filRaces = new File(strRaceDir);
					strList = filRaces.list();
					for (int i=0;i<strList.length;i++)
					{
						chatMessage(strList[i]);
					}
					if (isPet())
					{
						strStore = thnMaster.bfrSocketIn.readLine().toLowerCase();
					} else
					{
						strStore = bfrSocketIn.readLine().toLowerCase();
					}
					filCheck = new File(strRaceDir+"/"+strStore);
				}
				strRace = strStore;
			}
			rafFile2 = new RandomAccessFile(strRaceDir+"/"+strRace,"r");
			strStore = rafFile2.readLine();
			while (!(strStore == null || strStore.equals(".")))
			{
				parseRaceFile(strStore, rafFile2, true);	
				strStore = rafFile2.readLine();
			}
			rafFile2.close();
		}catch(Exception e)
		{
			engGame.log.printError("loadRace():Loading "+strName+"'s race file \""+strRaceDir+"/"+strRace+"\"", e);
		}
	}

	void unloadRace()
	{
		RandomAccessFile rafFile2;
		String strStore;
		String strRaceDir;
		if (isPet())
		{
			strRaceDir = "defPets";
		}
		else
		{
			strRaceDir = "defRaces";
		}
		try
		{
			if (strRace == null || !(new File(strRaceDir+"/"+strRace).exists()))
			{
				strRace = null;
				return;
			}
			rafFile2 = new RandomAccessFile(strRaceDir+"/"+strRace,"r");
			strStore = rafFile2.readLine();
			while (!(strStore == null || strStore.equals(".")))
			{
				parseRaceFile(strStore, rafFile2, false);	
				strStore = rafFile2.readLine();
			}
			rafFile2.close();
		}catch(Exception e)
		{
			engGame.log.printError("unloadRace():Un-loading "+strName+"'s race file \""+strRaceDir+"/"+strRace+"\"", e);
		}
		strRace = null;
	}
	
	public void updateAppletImages()
	{
		String strResult = ""+(char)1;
		strResult += engGame.strRCAddress+"\n";
		try
		{
			send(strResult);
		}catch(Exception e)
		{
			engGame.log.printError("updateAppletImages()", e);
		}
	}

	public void updateApplicationImages()
	{
		String strResult = ""+(char)1;
		strResult += engGame.strRCName+"\n";
		try
		{
			send(strResult);
		}catch(Exception e)
		{
			engGame.log.printError("updateApplicationImages()",e);
		}
	}
	
	public void updateMusic()
	{
		/*try
		{
			String strResult="";
			String strStore,
					strStore2;
			int count=0;
			RandomAccessFile rafMusic;
			
			rafMusic = new RandomAccessFile("music0","r");
			strStore = "";
			try
			{
				strStore2 = rafMusic.readLine();
				while (!(strStore2 == null || strStore2.equals("")))
				{
					strStore += strStore2+"\n";
					strStore2 = rafMusic.readLine();
					count++;
				}
			}catch (Exception e)
			{
			}
			strResult += ""+count+"\n"+strStore;
			rafMusic.close();
			rafMusic = new RandomAccessFile("music1","r");
			strStore = "";
			count=0;
			try
			{
				strStore2 = rafMusic.readLine();
				while (!(strStore2 == null || strStore2.equals("")))
				{
					strStore += strStore2+"\n";
					strStore2 = rafMusic.readLine();
					count++;
				}
			}catch (Exception e)
			{
			}
			rafMusic.close();
			strResult += ""+count+"\n"+strStore;
			send((char)11+""+2+"\n"+strResult);
		}catch(Exception e)
		{
			engGame.log.printError("updateMusic()", e);
		}*/
	}
	
	public void playMusic(int type)
	{
		/*try
		{
			send(""+((char)12)+""+type+"\n");
		}catch(Exception e)
		{
			engGame.log.printError("playMusic()", e);
		}*/
	}
	
	public void playSFX(int intSFX)
	{
		if (audioon)
		{
			try
			{
				send((char)15+""+intSFX+"\n");
			}catch(Exception e)
			{
				engGame.log.printError("playSFX()", e);
			}
		}
	}
	
	public void updateActions()
	{
		try
		{
			if (isPlayer())
			{
				String strResult = ""+(char)10;
				if (batBattle != null)
				{
					strResult += "flee\n";	
				}else
				{
					if (blnSleep)
					{
						strResult += "wake\n";
					}else
					{
						strResult += "sleep\n";
					}
				}
				strResult += ".\n";
				send(strResult);
			}
		}catch (Exception e)
		{
			engGame.log.printError("updateActions()", e);	
		}
	}
	
	public void updateEquipment()
	{
		try
		{
			String strResult =""+(char)7;
				try
		    	{
		    		strResult += equWorn.wield.strName+"\n";
		    	}catch (Exception e)
		    	{
		    		strResult += "none\n";
		    	}
		    	try
		    	{
		    		strResult += equWorn.arms.strName+"\n";
		    	}catch (Exception e)
		    	{
		    		strResult += "none\n";
		    	}
		    	try
		    	{
		    		strResult += equWorn.legs.strName+"\n";
		    	}catch (Exception e)
		    	{
		    		strResult += "none\n";
		    	}
		    	try
		    	{
		    		strResult += equWorn.torso.strName+"\n";
		    	}catch (Exception e)
		    	{
		    		strResult += "none\n";
		    	}
		    	try
		    	{
		    		strResult += equWorn.waist.strName+"\n";
		    	}catch (Exception e)
		    	{
		    		strResult += "none\n";
		    	}
		    	try
		    	{
		    		strResult += equWorn.neck.strName+"\n";
		    	}catch (Exception e)
		    	{
		    		strResult += "none\n";
		    	}
		    	try
		    	{
		    		strResult += equWorn.skull.strName+"\n";
		    	}catch (Exception e)
		    	{
		    		strResult += "none\n";
		    	}
		    	try
		    	{
		    		strResult += equWorn.eyes.strName+"\n";
		    	}catch (Exception e)
		    	{
		    		strResult += "none\n";
		    	}
		    	try
		    	{
		    		strResult += equWorn.hands.strName+"\n";
		    	}catch (Exception e)
		    	{
		    		strResult += "none\n";
		    	}
	    	send(strResult);
		}catch (Exception e)
		{
		    engGame.log.printError("updateEquipment():"+strName+" disconnected", e);
			blnStopThread = true;
		    return;
		}
	}
	
	public void send(String data)
	{
		if (isPlayer() && blnWorking && !blnIsClosing)
		{
			SendData sd = new SendData(data);
			qMessage.push(sd);
		}
	}
	
/*	public void send(byte data)
	{
		if (isPlayer() && blnWorking && !blnIsClosing)
		{
			SendData sd = new SendData(data);
			qMessage.push(sd);
		}
	}
	
	public void send(long data)
	{
		if (isPlayer() && blnWorking && !blnIsClosing)
		{
			SendData sd = new SendData(data);
			qMessage.push(sd);
		}
	}*/
	
	public void updateInfo()
	{
		try
		{
			String strResult = ""+(char)5;
			strResult += hp+"\n";
			strResult += (maxhp+hpbon)+"\n";
			strResult += mp+"\n";
			strResult += (maxmp+mpbon)+"\n";
	    	send(strResult);
		}catch(Exception e)
		{
		    engGame.log.printError("updateInfo():"+strName+" disconnected", e);
			blnStopThread = true;
		}
	}
	
	public void updateRange()
	{
		try
		{
			String strResult = ""+(char)28;
			strResult += getRangeWithBonus()+"\n";
			send(strResult);
		}catch(Exception e)
		{
			engGame.log.printError("updateRange():"+strName + " disconnected", e);
		}
	}

	public void updateItems()
	{
		try
		{
			String strResult = ""+(char)6,
					strStore;
			int i;
			Item itmStore;
			LifoQueue qStore;
			Iterator iter=vctItems.keySet().iterator();
			while(iter.hasNext())
			{
				qStore = (LifoQueue)vctItems.get(iter.next());
				if (qStore.size() > 0)
				{
					itmStore = (Item)qStore.firstElement();
					if(itmStore.isArmor())
					{
						strResult += (2+itmStore.intKind)+"\n";
					}else if (itmStore.isWeapon())
					{
						strResult += "1\n";
					}else
					{
						strResult += "0\n";
					}
					strResult += itmStore.strName+"\n";
				}
			}
			strResult += ".\n";
			send(strResult);
			if (engGame.overMerchant(intLocX,intLocY)!= null)
				updateSell();
			if (engGame.overPlayerMerchant(intLocX,intLocY)!= null)
				updateSell();
		}catch(Exception e)
		{
		    engGame.log.printError("updateItems():"+strName+" disconnected", e);
			blnStopThread = true;
		}
		blnShouldSave = true;
	}
	
	public void updateStats()
	{
		Skill sklStore;
		Spell splStore;
		SpellGroup grpStore;
		int i,
			i2;
		try
		{
			String strResult = ""+(char)8;
			strResult += cash+" gp\n";
			strResult += exp+" exp\n";
			if (strebon == 0)
			{
				strResult += "str: "+stre+"\n";
			}else
			{
				strResult += "str: "+stre+" + "+strebon+"\n";
			}
			if (intebon == 0)
			{
				strResult += "int: "+inte+"\n";
			}else
			{
				strResult += "int: "+inte+" + "+intebon+"\n";
			}
			if (dextbon == 0)
			{
				strResult += "dex: "+dext+"\n";
			}else
			{
				strResult += "dex: "+dext+" + "+dextbon+"\n";
			}
			if (consbon == 0)
			{
				strResult += "con: "+cons+"\n";
			}else
			{
				strResult += "con: "+cons+" + "+consbon+"\n";
			}
			if (wisdbon == 0)
			{
				strResult += "wis: "+wisd+"\n";
			}else
			{
				strResult += "wis: "+wisd+" + "+wisdbon+"\n";
			}
			if (dammodbon == 0)
			{
				strResult += "DamMod: "+getDamMod()+"\n";
			}else
			{
				strResult += "DamMod: "+getDamMod()+" + "+dammodbon+"\n";
			}
			if (acbon == 0)
			{
				strResult += "AC: "+getArmorMod()+"\n\n";
			}else
			{
				strResult += "AC: "+getArmorMod()+" + "+acbon+"\n";
			}
			Condition cndStore;
			strResult += "-Affected by-\n";
			for (i=0;i<vctConditions.size();i++)
			{
				cndStore = (Condition)vctConditions.elementAt(i);
				if (cndStore.blnDisplay)
				{
					strResult += cndStore.strName+"\n";
				}
			}
			strResult += "-Skills-\n";
			for (i=0;i<vctSkills.size();i++)
			{
				sklStore = (Skill)vctSkills.elementAt(i);
				strResult += sklStore.strName+": "+sklStore.value+"\n";
			}
			strResult += "-Spells-\n";
			for (i=0;i<vctSpells.size();i++)
			{
				splStore = (Spell)vctSpells.elementAt(i);
				grpStore = engGame.getSpellGroup(splStore.strName);
				if (grpStore != null)
				{
					strResult += splStore.strName+": "+splStore.value+"\n";
					strResult += grpStore.spellList(splStore.value);
				}
			}
			if (thnMaster != null)
			{
				strResult +="\nFollowing: "+thnMaster.strName+"\n";
			}
			if (thnFollowing != null)
			{
				strResult +="\nFollowed By: "+thnFollowing.strName+"\n";
				if (thnFollowing.isPet())
				{
					strResult += thnFollowing.hp+"/"+thnFollowing.maxhp+" hp\n";
					strResult += thnFollowing.mp+"/"+thnFollowing.maxmp+" mp\n";
					strResult += thnFollowing.cash+" gp\n";
					strResult += thnFollowing.exp+" exp\n";
					if (thnFollowing.strebon == 0)
					{
						strResult += "str: "+thnFollowing.stre+"\n";
					}else
					{
						strResult += "str: "+thnFollowing.stre+" + "+thnFollowing.strebon+"\n";
					}
					if (thnFollowing.intebon == 0)
					{
						strResult += "int: "+thnFollowing.inte+"\n";
					}else
					{
						strResult += "int: "+thnFollowing.inte+" + "+thnFollowing.intebon+"\n";
					}
					if (thnFollowing.dextbon == 0)
					{
						strResult += "dex: "+thnFollowing.dext+"\n";
					}else
					{
						strResult += "dex: "+thnFollowing.dext+" + "+thnFollowing.dextbon+"\n";
					}
					if (thnFollowing.consbon == 0)
					{
						strResult += "con: "+thnFollowing.cons+"\n";
					}else
					{
						strResult += "con: "+thnFollowing.cons+" + "+thnFollowing.consbon+"\n";
					}
					if (thnFollowing.wisdbon == 0)
					{
						strResult += "wis: "+thnFollowing.wisd+"\n";
					}else
					{
						strResult += "wis: "+thnFollowing.wisd+" + "+thnFollowing.wisdbon+"\n";
					}
					if (thnFollowing.dammodbon == 0)
					{
						strResult += "DamMod: "+thnFollowing.getDamMod()+"\n";
					}else
					{
						strResult += "DamMod: "+thnFollowing.getDamMod()+" + "+thnFollowing.dammodbon+"\n";
					}
					if (thnFollowing.acbon == 0)
					{
						strResult += "AC: "+thnFollowing.getArmorMod()+"\n\n";
					}else
					{
						strResult += "AC: "+thnFollowing.getArmorMod()+" + "+thnFollowing.acbon+"\n";
					}
					strResult += "-Affected by-\n";
					for (i=0;i<thnFollowing.vctConditions.size();i++)
					{
						cndStore = (Condition)thnFollowing.vctConditions.elementAt(i);
						if (cndStore.blnDisplay)
						{
							strResult += cndStore.strName+"\n";
						}
					}
					strResult += "-Skills-\n";
					for (i=0;i<thnFollowing.vctSkills.size();i++)
					{
						sklStore = (Skill)thnFollowing.vctSkills.elementAt(i);
						strResult += sklStore.strName+": "+sklStore.value+"\n";
					}
					strResult += "-Spells-\n";
					for (i=0;i<thnFollowing.vctSpells.size();i++)
					{
						splStore = (Spell)thnFollowing.vctSpells.elementAt(i);
						grpStore = engGame.getSpellGroup(splStore.strName);
						if (grpStore != null)
						{
							strResult += splStore.strName+": "+splStore.value+"\n";
							strResult += grpStore.spellList(splStore.value);
						}
					}
				}
			}
			strResult += ".\n";
			send(strResult);
		}catch (Exception e)
		{
		    engGame.log.printError("updateStats():"+strName+" disconnected", e);
			blnStopThread = true;
		}
		//updateRange();
		blnShouldSave = true;
	}
	
	void halt()
	{
		blnHalted=true;
		try
		{
			send(""+(char)9);
		}catch(Exception e)
		{
			blnHalted=false;
			engGame.log.printError("halt()", e);
		}
	}
	
	void proceed()
	{
		blnHalted=false;
		try
		{
			send(""+(char)14);
		}catch(Exception e)
		{
			engGame.log.printError("proceed()", e);
		}
	}
	
	void stillThere()
	{
		try
		{
			send(""+(char)13);
		}catch(Exception e)
		{
			engGame.log.printError("stillThere()", e);
		}
	}
	
	void resizeMap()
	{
		int i,i2;
		String strResult = (char)19+"";
		strResult += engGame.mapsize+"\n";
		send(strResult);
	}
		
	void updateSell()
	{
		String strResult=(char)22+"";
		Item itmStore;
		LifoQueue qStore;
		QueueObject qoStore;
		Iterator iter = vctItems.keySet().iterator();
		while(iter.hasNext())
		{
			qStore = (LifoQueue)vctItems.get(iter.next());
			qoStore = qStore.head();
			while (qoStore != null)
			{
				itmStore = (Item)qoStore.getObject();
		    	if (itmStore != null)
		    	{
		    		strResult += (itmStore.intCost/2) + "gp)" + itmStore.strName + "\n";
				}
				qoStore = qoStore.next();
		    }
		}
		send(strResult+".\n");
	}
	
	void offMerchant()
	{
		send((char)21+"");
	}
}
