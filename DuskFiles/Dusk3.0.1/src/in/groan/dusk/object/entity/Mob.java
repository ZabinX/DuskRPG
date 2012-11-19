package in.groan.dusk.object.entity;
/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk. 

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or 
remove this license, and accompany it with all redistributions.
*/

import in.groan.dusk.Condition;
import in.groan.dusk.DuskEngine;
import in.groan.dusk.action.GiveItem;
import in.groan.dusk.object.Faction;
import in.groan.dusk.object.itm.Equipment;
import in.groan.dusk.object.itm.Inventory;
import in.groan.dusk.object.itm.Item;
import in.groan.dusk.util.Log;

import java.io.*;
import java.util.Vector;
/**
*Mob(mobile) is the class of non-player moving entities.
*
*@author Tom Weingarten
*/
public class Mob extends Entity {
	public Vector vctGiveItems;
	
	//Mob level
	public int level=-1;
	
	//AI
	public double dblBravery=0, //0 to 1, -1 makes mob always flee
			dblGroupRelation=0;  //-1 to 1
	public String strOnBattle=null;
			
	//Faction
	public Faction fctFaction;
	
	public boolean blnOneUse=false;

	public boolean blnCanSeePlayer=false;

	private RandomAccessFile rafFile;
	
	//new Mob
	public Mob(String strType, int locx, int locy,DuskEngine inEngine) throws Exception {
		noChannel = -1;
		Game = inEngine;
		ID = Game.getID();
		bytObjType = (byte)0;
		Type = 1;
		//RACE = strType;
		NAME = strType;
		rafFile = new RandomAccessFile("defMobs/"+strType,"r");
		intLocX = locx;
		intLocY = locy;
		originalX = intLocX;
		originalY = intLocY;
		equWorn = new Equipment();
		vctItems = new Inventory();
		vctSkills = new Vector(0,5);
		vctSpells = new Vector(0,5);
		vctCommands = new Vector(0,5);
		vctConditions = new Vector(0,1);
		vctFlags = new Vector(0,1);
		vctGiveItems = new Vector(0,1);
		vctMovement = new Vector(0,5);
		BATTLE = null;
		String strStore = rafFile.readLine();
		while (!(strStore == null || strStore.equals(".")))
		{
			Game.LOG.printMessage(Log.DEBUG, "parsing "+strStore);
			parseMobFile(strStore, rafFile);
			strStore = rafFile.readLine();
		}
		rafFile.close();
		if (fctFaction == null)
		{
			Game.LOG.printMessage(Log.DEBUG, "no faction found for mob \""+NAME+"\"");
		}
		HP = MAXHP;
		SP = MAXSP;
		BLN_SLEEP 	= false;
		BLN_LOADED 	= true;
	}
	
	//new Mob w/ levels (provided for pre-2.3 compatibility)
	public Mob(String strType,int level, int locx, int locy,DuskEngine inEngine)
	throws Exception
	{
		noChannel = -1;
		Game = inEngine;
		ID = Game.getID();
		bytObjType = (byte)0;
		Type = 1;
		STR_RACE = strType;
		NAME = strType;
		rafFile = new RandomAccessFile("defMobs/"+strType,"r");
		intLocX = locx;
		intLocY = locy;
		originalX = intLocX;
		originalY = intLocY;
		equWorn = new Equipment();
		vctItems = new Inventory();
		vctSkills = new Vector(0,5);
		vctSpells = new Vector(0,5);
		vctCommands = new Vector(0,5);
		vctConditions = new Vector(0,1);
		vctFlags = new Vector(0,1);
		vctGiveItems = new Vector(0,1);
		vctMovement = new Vector(0,5);
		BATTLE = null;
		this.level = level;
		String strStore = rafFile.readLine();
		while (!(strStore == null || strStore.equals(".")))
		{
			Game.LOG.printMessage(Log.DEBUG, "parsing "+strStore);
			parseMobFile(strStore, rafFile);
			strStore = rafFile.readLine();
		}
		if (fctFaction == null)
		{
			Game.LOG.printMessage(Log.DEBUG, "no faction found for mob \""+NAME+"\"");
		}
		rafFile.close();
		//maxhp = maxhp*level;
		//maxmp = maxmp*level;
		//stre = stre*level;
		//inte = inte*level;
		//wisd = wisd*level;
		//dext = dext*level;
		//cons = cons*level;
		//hp = maxhp*level;
		//mp = maxmp*level;
		//blnSleep = false;
		//blnIsLoaded=true;
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
				Game.LOG.printMessage(Log.DEBUG, strStore+"="+value);
				return;
			}
			if (strStore.equalsIgnoreCase("condition"))
			{
				Condition cndStore = Game.getCondition(rafFile.readLine());
				cndStore.intTicksPast = Integer.parseInt(rafFile.readLine());
				cndStore.intDuration = Integer.parseInt(rafFile.readLine());
				addCondition(cndStore);
				Game.LOG.printMessage(Log.DEBUG, "condition \""+cndStore.NAME+"\"");
				return;
			}
			if (strStore.equalsIgnoreCase("giveitem"))
			{
				String strItem = rafFile.readLine();
				double dblChance = Double.valueOf(rafFile.readLine()).doubleValue();
				vctGiveItems.addElement(new GiveItem(strItem, dblChance));
				Game.LOG.printMessage(Log.DEBUG, NAME+" gives a \""+strItem+"\" "+(100*dblChance)+"% of the time.");
				return;
			}
			if (strStore.equalsIgnoreCase("item"))
			{
				Item itmStore = Game.getItem(rafFile.readLine());
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
				GUILD = rafFile.readLine();
				return;
			}
			if (strStore.equalsIgnoreCase("race"))
			{
				STR_RACE = rafFile.readLine();
				return;
			}
			if (strStore.equalsIgnoreCase("title"))
			{
				TITLE = rafFile.readLine();
				return;
			}
			if (strStore.equalsIgnoreCase("description"))
			{
				info = rafFile.readLine();
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
				stats.setMAXHP(Integer.parseInt(rafFile.readLine()));
				return;
			}
			if (strStore.equalsIgnoreCase("maxmp"))
			{
				stats.setMAXSP(Integer.parseInt(rafFile.readLine()));
				return;
			}
			if (strStore.equalsIgnoreCase("stre"))
			{
				stats.setSTR(Integer.parseInt(rafFile.readLine()));
				return;
			}
			if (strStore.equalsIgnoreCase("inte"))
			{
				stats.setINT(Integer.parseInt(rafFile.readLine()));
				return;
			}
			if (strStore.equalsIgnoreCase("dext"))
			{
				stats.setDEX(Integer.parseInt(rafFile.readLine()));
				return;
			}
			if (strStore.equals("cons"))
			{
				stats.setVIT(Integer.parseInt(rafFile.readLine()));
				return;
			}
			if (strStore.equalsIgnoreCase("wisd"))
			{
				stats.setMND(Integer.parseInt(rafFile.readLine()));
				return;
			}
			if (strStore.equalsIgnoreCase("image"))
			{
				Image = Integer.parseInt(rafFile.readLine());
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
			
			/*
			
			if (strStore.equalsIgnoreCase("wield"))
			{
				equWorn.wield = Game.getItem(rafFile.readLine());
				if (equWorn.wield != null) {
					equWorn.wield.lngDurability = Long.parseLong(rafFile.readLine());
					equWorn.wield.intUses = Integer.parseInt(rafFile.readLine());
				}
				runWearScript(equWorn.wield);
				return;
			}
			if (strStore.equalsIgnoreCase("arms"))
			{
				equWorn.arms = Game.getItem(rafFile.readLine());
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
				equWorn.legs = Game.getItem(rafFile.readLine());
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
				equWorn.torso = Game.getItem(rafFile.readLine());
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
				equWorn.waist = Game.getItem(rafFile.readLine());
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
				equWorn.neck = Game.getItem(rafFile.readLine());
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
				equWorn.skull = Game.getItem(rafFile.readLine());
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
				equWorn.eyes = Game.getItem(rafFile.readLine());
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
				equWorn.hands = Game.getItem(rafFile.readLine());
				if (equWorn.hands != null)
				{
					equWorn.hands.lngDurability = Long.parseLong(rafFile.readLine());
					equWorn.hands.intUses = Integer.parseInt(rafFile.readLine());
				}
				runWearScript(equWorn.hands);
				return;
			}
			
			*/
			
			if (strStore.equalsIgnoreCase("faction"))
			{
				String strFaction = rafFile.readLine();
				fctFaction = Game.getFaction(strFaction);
				if (fctFaction != null)
				{
					Game.LOG.printMessage(Log.DEBUG, "faction=\""+fctFaction.NAME+"\"");
				} else
				{
					Game.LOG.printMessage(Log.DEBUG, "no faction found for \""+strFaction+"\"");
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
				BLN_NOFOLLOW = true;
				return;
			}
		}catch (Exception e)
		{
			Game.LOG.printError("parseMobFile():Parsing \""+strStore+"\" from "+NAME+"'s file", e);
		}
	}
}
