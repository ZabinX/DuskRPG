/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk. 

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or 
remove this license, and accompany it with all redistributions.
*/

import java.io.*;
import java.util.Vector;


/**
*Mob(mobile) is the class of non-player moving entities.
*
*@author Tom Weingarten
*/
public class Mob extends LivingThing
{
	Vector vctGiveItems;
	
	//Mob level
	int level=-1;
	
	//AI
	double dblBravery=0, //0 to 1, -1 makes mob always flee
			dblGroupRelation=0;  //-1 to 1
	String strOnBattle=null;
			
	//Faction
	Faction fctFaction;
	
	boolean blnOneUse=false;

	boolean blnCanSeePlayer=false;
	
	//new Mob
	public Mob(String strType, int locx, int locy,DuskEngine inEngine)
	throws Exception
	{
		noChannel = -1;
		engGame = inEngine;
		ID = engGame.getID();
		bytObjType = (byte)0;
		Type = 1;
		strRace = strType;
		strName = strType;
		rafFile = new RandomAccessFile("defMobs/"+strType,"r");
		intLocX = locx;
		intLocY = locy;
		originalX = intLocX;
		originalY = intLocY;
		equWorn = new Equipment();
		vctItems = new ItemList();
		vctSkills = new Vector(0,5);
		vctSpells = new Vector(0,5);
		vctCommands = new Vector(0,5);
		vctConditions = new Vector(0,1);
		vctFlags = new Vector(0,1);
		vctGiveItems = new Vector(0,1);
		vctMovement = new Vector(0,5);
		batBattle = null;
		String strStore = rafFile.readLine();
		while (!(strStore == null || strStore.equals(".")))
		{
			engGame.log.printMessage(Log.DEBUG, "parsing "+strStore);
			parseMobFile(strStore, rafFile);
			strStore = rafFile.readLine();
		}
		rafFile.close();
		if (fctFaction == null)
		{
			engGame.log.printMessage(Log.DEBUG, "no faction found for mob \""+strName+"\"");
		}
		hp = maxhp;
		mp = maxmp;
		blnSleep = false;
		blnIsLoaded=true;
	}
	
	//new Mob w/ levels (provided for pre-2.3 compatibility)
	public Mob(String strType,int level, int locx, int locy,DuskEngine inEngine)
	throws Exception
	{
		noChannel = -1;
		engGame = inEngine;
		ID = engGame.getID();
		bytObjType = (byte)0;
		Type = 1;
		strRace = strType;
		strName = strType;
		rafFile = new RandomAccessFile("defMobs/"+strType,"r");
		intLocX = locx;
		intLocY = locy;
		originalX = intLocX;
		originalY = intLocY;
		equWorn = new Equipment();
		vctItems = new ItemList();
		vctSkills = new Vector(0,5);
		vctSpells = new Vector(0,5);
		vctCommands = new Vector(0,5);
		vctConditions = new Vector(0,1);
		vctFlags = new Vector(0,1);
		vctGiveItems = new Vector(0,1);
		vctMovement = new Vector(0,5);
		batBattle = null;
		this.level = level;
		String strStore = rafFile.readLine();
		while (!(strStore == null || strStore.equals(".")))
		{
			engGame.log.printMessage(Log.DEBUG, "parsing "+strStore);
			parseMobFile(strStore, rafFile);
			strStore = rafFile.readLine();
		}
		if (fctFaction == null)
		{
			engGame.log.printMessage(Log.DEBUG, "no faction found for mob \""+strName+"\"");
		}
		rafFile.close();
		maxhp = maxhp*level;
		maxmp = maxmp*level;
		stre = stre*level;
		inte = inte*level;
		wisd = wisd*level;
		dext = dext*level;
		cons = cons*level;
		hp = maxhp*level;
		mp = maxmp*level;
		blnSleep = false;
		blnIsLoaded=true;
	}
	
	private void parseMobFile(String strStore, RandomAccessFile rafFile)
	{
		try
		{
			if (strStore.equalsIgnoreCase("skill"))
			{
				strStore = rafFile.readLine();
				int value = Byte.parseByte(rafFile.readLine());
				addToSkill(strStore, value);
				engGame.log.printMessage(Log.DEBUG, strStore+"="+value);
				return;
			}
			if (strStore.equalsIgnoreCase("condition"))
			{
				Condition cndStore = engGame.getCondition(rafFile.readLine());
				cndStore.intTicksPast = Integer.parseInt(rafFile.readLine());
				cndStore.intDuration = Integer.parseInt(rafFile.readLine());
				addCondition(cndStore);
				engGame.log.printMessage(Log.DEBUG, "condition \""+cndStore.strName+"\"");
				return;
			}
			if (strStore.equalsIgnoreCase("giveitem"))
			{
				String strItem = rafFile.readLine();
				double dblChance = Double.valueOf(rafFile.readLine()).doubleValue();
				vctGiveItems.addElement(new GiveItem(strItem, dblChance));
				engGame.log.printMessage(Log.DEBUG, strName+" gives a \""+strItem+"\" "+(100*dblChance)+"% of the time.");
				return;
			}
			if (strStore.equalsIgnoreCase("item"))
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
			if (strStore.equalsIgnoreCase("maxhp"))
			{
				maxhp = Integer.parseInt(rafFile.readLine());
				return;
			}
			if (strStore.equalsIgnoreCase("maxmp"))
			{
				maxmp = Integer.parseInt(rafFile.readLine());
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
			if (strStore.equalsIgnoreCase("bravery"))
			{
				dblBravery = Double.valueOf(rafFile.readLine()).doubleValue();
				return;
			}
			if (strStore.equalsIgnoreCase("grouprelation"))
			{
				dblGroupRelation = Double.valueOf(rafFile.readLine()).doubleValue();
				return;
			}
			if (strStore.equalsIgnoreCase("wield"))
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
			if (strStore.equalsIgnoreCase("arms"))
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
			if (strStore.equalsIgnoreCase("legs"))
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
			if (strStore.equalsIgnoreCase("torso"))
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
			if (strStore.equalsIgnoreCase("waist"))
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
			if (strStore.equalsIgnoreCase("neck"))
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
			if (strStore.equalsIgnoreCase("skull"))
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
			if (strStore.equalsIgnoreCase("eyes"))
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
			if (strStore.equalsIgnoreCase("hands"))
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
			if (strStore.equalsIgnoreCase("faction"))
			{
				String strFaction = rafFile.readLine();
				fctFaction = engGame.getFaction(strFaction);
				if (fctFaction != null)
				{
					engGame.log.printMessage(Log.DEBUG, "faction=\""+fctFaction.strName+"\"");
				} else
				{
					engGame.log.printMessage(Log.DEBUG, "no faction found for \""+strFaction+"\"");
				}
				return;
			}
			if (strStore.equalsIgnoreCase("onBattle"))
			{
				strOnBattle = rafFile.readLine();
				return;
			}
			if (strStore.equalsIgnoreCase("nofollow"))
			{
				noFollow = true;
				return;
			}
		}catch (Exception e)
		{
			engGame.log.printError("parseMobFile():Parsing \""+strStore+"\" from "+strName+"'s file", e);
		}
	}
}
