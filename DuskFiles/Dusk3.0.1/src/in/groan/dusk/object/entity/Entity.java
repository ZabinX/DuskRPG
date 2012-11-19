package in.groan.dusk.object.entity;
/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk. 

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or 
remove this license, and accompany it with all redistributions.
*/

import in.groan.dusk.Constants;
import in.groan.dusk.Variable;
import in.groan.dusk.Commands;
import in.groan.dusk.Condition;
import in.groan.dusk.DuskEngine;
import in.groan.dusk.DuskObject;
import in.groan.dusk.Script;
import in.groan.dusk.action.Battle;
import in.groan.dusk.action.Skill;
import in.groan.dusk.action.Spell;
import in.groan.dusk.action.SpellGroup;
import in.groan.dusk.db.Privs;
import in.groan.dusk.net.SendData;
import in.groan.dusk.net.SendThread;
import in.groan.dusk.object.itm.Equipment;
import in.groan.dusk.object.itm.Inventory;
import in.groan.dusk.object.itm.Item;
import in.groan.dusk.util.FifoQueue;
import in.groan.dusk.util.LifoQueue;
import in.groan.dusk.util.Log;
import in.groan.dusk.util.QueueObject;
import in.groan.dusk.util.Statistics;

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
*
*Dusk Server 3.0.1
*June 30th 2011
*/
public class Entity extends DuskObject implements Runnable {
	public DuskEngine Game;
	public FifoQueue QUE_MSG;
	
	public Privs PRIVS	 		= Privs.NEW; //Privs
	
	public int STEP 			= 0; //Image step
	public int originalX 		= 0;
	public int originalY 		= 0;
	//ID data
	public String PASSWORD  	= "";
	public String GUILD			= "";
	public String TITLE			= "";
	public String MASTER		= "";
	//Group
	public Entity ENT_FOLLOWING	= null;
	public Entity ENT_MASTER	= null;
	public Entity ENT_CHARMER	= null;
	//Stats
	public Race RACE;
	public String STR_RACE 		= null; //Race
	public Job JOB;
	public String STR_JOB 		= null; //JOBNAME
	
	public int BASE_LVL			= 1;
	public int JOB_LVL 			= 1;
	public int CP               = 0;
	
	public double ZENY 			= 0;
	
	public long CUR_EXP 		= 0;
	public long EXP_TO_LVL;
	public long CUR_JOB_EXP 	= 0;
	public long JOB_EXP_TO_LVL;
	
	public Statistics stats; //Character Stat tracker
	public Equipment equWorn; //Equipped Items

	int MAXHP 			= 0;
	int HP 				= MAXHP;
	int HP_B 			= 0;
	int MAXSP 			= 0;
	int SP 				= MAXSP;
	int SP_B 			= 0;
	int MAXTP 			= 100;
	int TP 				= 0;
	
	public int STR				= 0;
	public int STR_B			= 0;
	public int AGI				= 0;
	public int AGI_B			= 0;
	public int VIT				= 0;
	public int VIT_B			= 0;
	public int DEX				= 0;
	public int DEX_B			= 0;
	public int AVD				= 0;
	public int AVD_B			= 0;
	public int INT				= 0;
	public int INT_B			= 0;
	public int MND				= 0;
	public int MND_B			= 0;
	public int RES				= 0;
	public int RES_B			= 0;
	public int LCK				= 0;
	public int LCK_B			= 0;
	/**
	 * Speed works with RT by enhancing it based on the value of SPD. SPD is a percentage ranging between 0.00 and 97.89D.
	 * It directly effects attack speed and fleeing
	 */
	public double SPD 			= 0.00;
	
	/**
	 * These 8 variables determines your various attack and defense properties.
	 * They aren't saved in the DB since they are calculated using the above stats.
	 */
	public int MELEE_ATK 		= 0;
	public int RANGE_ATK 		= 0;
	public int MAGIC_ATK 		= 0;
	public int DEFENSE 			= 0;
	public int RESIST	 		= 0;
	
	public int ATTACK_B 		= 0;
	public int MAGIC_B 			= 0;
	public int DEFENSE_B 		= 0;
	
	public int RANGE			= 1; //default 1, 0 = cant attack, 2+ = ranged attack
	public int RANGE_B			= 0;
	
	/**<b>BASE_RT</b> <i>(base return time)</i> The raw value for RT, determined by your race.
	 * <p /> BASE_RT + JOB_RT + ROUNDUP(WEIGHT) = BATTLE_RT
	 * <p /><b>This value constantly ticks down when you're in combat</b>*/
	public int BASE_RT 			= 0;
	public int JOB_RT 			= 0; /*  A value added to BASE_RT, determined by your job */
	public double WEIGHT 		= 0; /*  A value added to BASE_RT, sum of equipped items' RT */
	public int BATTLE_RT 		= 0; /*  BASE_RT + JOB_RT + WEIGHT, used in battle calculations */

	public long TIME_LAST_MSG 	= 0;
	
	public boolean BLN_WORKING 	= true; //StillWorking?
	public boolean BLN_LOADED 	= false; //Has the player finished loading yet?
	public boolean BLN_READY	= false; //Should the player be in who yet?
	public boolean BLN_SAVE_OK  = false; //Can we save the player yet?
	public boolean BLN_SAVE_FLAG= false; //SHOULD we save the player yet?
	public boolean BLN_CLOSING	= false; //Is player in process of closing?
	public boolean BLN_STOP_THR	= false; //Should we stop the thread?
	//Should we process in-game commands after script is finished?
	//(The script can change this to false to stop it from happening)
	//(This allows scripts to short-circuit in-game commands)
	public boolean BLN_CONT_TO_CMD	= true;
	//Status
	public boolean BLN_SLEEP     	= false;
	public boolean BLN_CAN_MOVE 	= true;	//Is this ENTITY currently allowed to move?
	public boolean BLN_HALTED		= false; //For commands that need input...
	public boolean BLN_LOS			= false;
	//Battle
	public Battle BATTLE 			= null;

	public byte bytSide;
	public long lngDamDone;
	
	public Vector vctFlags; //Flags
	public Vector vctConditions; //Conditions
	public Vector vctSkills; //Skills
	public Inventory vctItems; //Items in inventory
	public Vector vctSpells; //Spells
	public Vector vctCommands; //Command
	public Vector vctMovement; //Movement queue
	public Vector vctEntities; //Entities (for optimized refresh)
	public Vector vctIgnore; //List of players being ignored

	//Socket connection
	public Socket SCK_CONN;
	public BufferedReader BUF_SCK_IN;
	public DataOutputStream OUT;
	public Thread THR_CONN;
	public Thread THR_SEND;

	//Prefs
	public boolean BLN_AUDIO 		= true;
	public boolean	BLN_COLOR 		= true;
	public boolean	BLN_POPUP 		= true;
	public boolean	BLN_NOFOLLOW 	= false;
	public int noChannel			= 0;

	public Date TIME_LAST_SAVE; //Timestamp of last save
	
	public byte Type;
	
	public boolean isPlayer() {
		if (Type==0) {
			return true;
		}
		return false;
	}
	public boolean isMob() {
		if (Type==1) {
			return true;
		}
		return false;
	}
	public boolean isPet() {
		if (Type==2) {
			return true;
		}
		return false;
	}

	public Entity() {}
	
	public Entity(Socket inSocket, DuskEngine inEngine) {
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
			if (!Game.isGoodIP(SCK_CONN.getInetAddress().toString())) {
				chatMessage("Connections from your machine are no longer being accepted.\n");
				return;
			}
			// IP Filter
			if (Game.BLN_IPF) {
				for (int i=0;i<Game.vctSockets.size();i++) {
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
			Game.LOG.printError("LivingThing():Creating player", e);	
		}
	}

	public Entity(String NAME, String strType, Entity master, DuskEngine inEngine) {
		try {
			bytObjType = (byte)0;
			Type = 2;
			Game = inEngine;
			ID = Game.getID();
			ENT_MASTER = master;
			MASTER = ENT_MASTER.NAME.toLowerCase();
			ENT_CHARMER = ENT_MASTER;
			intLocX = ENT_MASTER.intLocX;
			intLocY = ENT_MASTER.intLocY;
			BATTLE = null;
			BLN_SLEEP = false;
			this.NAME = NAME;
			equWorn = new Equipment();
			vctItems = new Inventory();
			vctSkills = new Vector(0);
			vctSpells = new Vector(0);
			vctCommands = new Vector(0);
			vctConditions = new Vector(0,1);
			vctFlags = new Vector(0,1);
			vctIgnore = new Vector(0);

		}catch(Exception e) {
			Game.LOG.printError("LivingThing():Creating pet", e);
			close();
		}
	}

	public byte getSkill(String sklName) {
		Skill sklStore;
		int i;
		for (i=0;i<vctSkills.size();i++) {
			sklStore = (Skill)vctSkills.elementAt(i);
			if (sklName.equalsIgnoreCase(sklStore.NAME)) {
				return sklStore.VAL;
			}
		}
		return 0;
	}

	byte getSpell(String sklName) {
		Spell splStore;
		int i;
		for (i=0;i<vctSpells.size();i++) {
			splStore = (Spell)vctSpells.elementAt(i);
			if (sklName.equalsIgnoreCase(splStore.NAME)) {
				return splStore.VAL;
			}
		}
		return 0;
	}
	
	boolean addToSkill(String sklName, int add) {
		try
		{
		Spell splStore;
		int i;
		for (i=0;i<vctSpells.size();i++)
		{
			splStore = (Spell)vctSpells.elementAt(i);
			if (sklName.equals(splStore.NAME))
			{
				if (splStore.VAL < 100)
				{
					splStore.VAL += add;
					if (splStore.VAL > 100)
					{
						splStore.VAL = 100;
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
			if (sklName.equals(sklStore.NAME))
			{
				if (sklStore.VAL < 100)
				{
					sklStore.VAL += add;
					if (sklStore.VAL > 100)
					{
						sklStore.VAL = 100;
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
		vctSkills.addElement(new Skill(NAME,(byte)add));
		return true;
		}catch (Exception e)
		{
			Game.LOG.printError("addToSkill()", e);
		}
		return false;
	}
	
	boolean setSkill(String sklName, int intNewValue) {
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
			if (sklName.equals(splStore.NAME))
			{
				if (intNewValue == 0)
				{
					vctSpells.removeElementAt(i);
					return true;
				}
				splStore.VAL = (byte)intNewValue;
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
			if (sklName.equals(sklStore.NAME))
			{
				if (intNewValue == 0)
				{
					vctSkills.removeElementAt(i);
					return true;
				}
				sklStore.VAL = (byte)intNewValue;
			}
		}
		if (intNewValue > 0)
		{
			vctSkills.addElement(new Skill(sklName,(byte)intNewValue));
		}
		return true;
		}catch (Exception e)
		{
			Game.LOG.printError("setSkill()", e);
		}
		return false;
	}
	
	int totalSkillValue() {
		Skill sklStore;
		int result=0;
		for (int i=0;i<vctSkills.size();i++)
		{
			sklStore = (Skill)vctSkills.elementAt(i);
			result += sklStore.VAL;
		}
		Spell splStore;
		for (int i=0;i<vctSpells.size();i++)
		{
			splStore = (Spell)vctSpells.elementAt(i);
			result += splStore.VAL;
		}
		return result;
	}
	
	protected void loadCharacter() {
		
	}
	
	protected void getRaceData(int rID, boolean blnAdd) {
		try {
			
		}catch (Exception e)
		{
			Game.LOG.printError("parseRaceFile():Parsing \""+rID+"\" from "+NAME+"'s race file", e);
		}
	}
	
	
	public boolean saveCharacter() {
		try {
			 //save title, guild, x, y
						
				//save options
					//BLN_POPUP
					//BLN_AUDIO
					//BLN_COLOR
					//BLN_NOFOLLOW
					//BLN_MUTE
				//save pets
				//save stats
				//save skills
				//save equipment
		}catch(Exception e) {
			Game.LOG.printError("writePlayerFile():While writing player file for "+NAME, e);
			return false;
		}
		return true;
	}
	
	public void savePlayer() {
		if (!BLN_SAVE_OK) { return; }
		BLN_SAVE_OK = false;

		boolean blnSaveSuccessful;
		blnSaveSuccessful = saveCharacter();

		if (!blnSaveSuccessful) {
			Game.LOG.printMessage(Log.ERROR, "savePlayer():Saving primary file for "+NAME+", second try failed, aborting savePlayer");
			BLN_SAVE_OK=true;
			return;
		}

		BLN_SAVE_FLAG = false;
		BLN_SAVE_OK=true;
	}
	
	public void close() {
		if (NAME == null) { return; }
		if (BLN_CLOSING) { return; }
		BLN_CLOSING = true;
		BLN_WORKING = false;
		BLN_SAVE_FLAG = true;
		if (!vctConditions.isEmpty() && Game.vctCheckConditions.contains(this)) {
			Game.vctCheckConditions.removeElement(this);
		}
		removeFromGroup();
		try {
			Game.removeDuskObject(this);
			if (isPlayer()) {
				try {
					synchronized(Game.SCR_ONLOGOUT) {
						if (BLN_SAVE_OK) {
							Game.SCR_ONLOGOUT.varVariables.clearVariables();
							Game.SCR_ONLOGOUT.varVariables.addVariable("trigger",this);
							Game.SCR_ONLOGOUT.runScript();
						}
					}
				}catch(Exception e){}

				synchronized (Game.vctSockets) {
					Game.vctSockets.removeElement(this);
				}
				try {
					savePlayer();
				} catch(Exception e) {}
				BLN_SAVE_OK=false;
				try {
					if (ENT_FOLLOWING != null && ENT_FOLLOWING.isPet()) {
						ENT_FOLLOWING.close();
					}
				} catch (Exception e) {}
				try {
					BUF_SCK_IN.close();
				} catch(Exception e) {}
				try {
					OUT.close();
				} catch(Exception e) {}
				if (!(hasCondition("invis") && (PRIVS == PRIVS.ADMIN))) {
					Game.LOG.printMessage(Log.INFO, SCK_CONN.getInetAddress().toString()+":"+NAME+" has logged out");
					Game.chatMessage(NAME+" has logged out.",NAME);
				} else {
					Game.LOG.printMessage(Log.INFO, SCK_CONN.getInetAddress().toString()+":"+NAME+" has logged out hidden from players");
				}
				try {
					SCK_CONN.close();
				} catch(Exception e) {}
				BLN_STOP_THR = true;
			} else if (isMob()) {
				Game.vctMobs.removeElement(this);
			} else if (isPet()) {
				Game.vctPets.removeElement(this);
				savePlayer();
			}
		} catch (Exception e) {
			Game.LOG.printError("close():While closing "+NAME, e);
		}
	}
	
	public void closeNoMsgPlayer() {
		BLN_CLOSING = true;
		BLN_WORKING = false;
		removeFromGroup();
		if (vctConditions.size() != 0) {
			Game.vctCheckConditions.removeElement(this);
		}
		Game.removeDuskObject(this);
		Game.vctSockets.removeElement(this);
		try {
			SCK_CONN.shutdownInput();
		} catch(Exception e){}
		try {
			SCK_CONN.shutdownOutput();
		} catch(Exception e){}
		try {
			BUF_SCK_IN.close();
		} catch(Exception e){}
		savePlayer();
		
		if (ENT_FOLLOWING != null && ENT_FOLLOWING.isPet()) {
			ENT_FOLLOWING.close();
		}
		try {
			OUT.close();
		} catch(Exception e) {}
		BLN_STOP_THR = true;
		Game.LOG.printMessage(Log.INFO, SCK_CONN.getInetAddress().toString()+":"+NAME+" has logged out");
		Game.chatMessage(NAME+" has logged out.",NAME);
		try {
			SCK_CONN.close();
		} catch(Exception e){}
		NAME = null;
	}

	protected void closeNosavePlayer() {
		if (NAME == null || NAME.equalsIgnoreCase("default")) {
			BLN_STOP_THR = true;
			try {
				BUF_SCK_IN.close();
			} catch(Exception e) {}
			try {
				SCK_CONN.close();
			} catch(Exception e){}
			try {
				OUT.close();
			} catch(Exception e) {}
			return;
		}
		if (BLN_CLOSING) {
			return;
		}
		BLN_CLOSING = true;
		BLN_WORKING=false;
		BLN_SAVE_OK=false;
		BLN_SAVE_FLAG=false;
		if (!vctConditions.isEmpty() && Game.vctCheckConditions.contains(this)) {
			Game.vctCheckConditions.removeElement(this);
		}
		removeFromGroup();
		try {
			Game.removeDuskObject(this);
			if (isPlayer()) {
				try {
					synchronized(Game.SCR_ONLOGOUT) {
						Game.SCR_ONLOGOUT.varVariables.clearVariables();
						Game.SCR_ONLOGOUT.varVariables.addVariable("trigger",this);
						Game.SCR_ONLOGOUT.runScript();
					}
				} catch(Exception e){}
				try {
					OUT.writeBytes((char)3+"Goodbye.\n"+(char)0);
				} catch (Exception e) {}

				Game.vctSockets.removeElement(this);
				try {
					BUF_SCK_IN.close();
				}catch(Exception e) {}
				try {
					OUT.close();
				}catch(Exception e) {}
				try {
					SCK_CONN.close();
				} catch(Exception e){}
				BLN_STOP_THR = true;
			} else if (isMob()) {
				Game.vctMobs.removeElement(this);
			} else if (isPet()) {
				Game.vctPets.removeElement(this);
			}
		} catch (Exception e) {
			Game.LOG.printError("closeNosavePlayer():While closing "+NAME, e);
		}
	}
	
	public void updateFlag(long ID, int Value) {
		send((char)29+""+ID+"\n"+Value+"\n");
	}

	public void clearFlags() {
            send((char)30+"");
	}

	public String goTo(int destX, int destY) {
		if (ENT_MASTER != null) {
			return "You can't move while you're following someone.";
		}
		
		if (Math.abs(destX - intLocX) > Game.VIEW_RANGE || Math.abs(destY - intLocY) > Game.VIEW_RANGE) {
			return null; 
		}
		int tempLocX = intLocX;
		int tempLocY = intLocY;
		synchronized(vctMovement) {
			vctMovement.removeAllElements();
			while (tempLocX != destX || tempLocY != destY) {
				if(Math.abs(tempLocX - destX) > Math.abs(tempLocY - destY)) {
					if(tempLocX - destX > 0) {
						if(Game.canMoveTo(tempLocX - 1, tempLocY, this)) {
							tempLocX--;
							vctMovement.addElement("w");
						} else {
							if(tempLocY == destY) return null;
							else if(tempLocY - destY > 0) {
								if(Game.canMoveTo(tempLocX, tempLocY - 1, this)) {
									tempLocY--;
									vctMovement.addElement("n");
								} else return null;
							} else {
								if(Game.canMoveTo(tempLocX, tempLocY + 1, this)) {
									tempLocY++;
									vctMovement.addElement("s");
								} else return null;
							}
						}
					} else {
						if(Game.canMoveTo(tempLocX + 1, tempLocY, this)) {
							tempLocX++;
							vctMovement.addElement("e");
						} else {
							if(tempLocY == destY) return null;
							else if(tempLocY - destY > 0) {
								if(Game.canMoveTo(tempLocX, tempLocY - 1, this)) {
									tempLocY--;
									vctMovement.addElement("n");
								} else return null;
							} else {
								if(Game.canMoveTo(tempLocX, tempLocY + 1, this)) {
									tempLocY++;
									vctMovement.addElement("s");
								} else return null;
							}
						}
					}
				} else if(Math.abs(tempLocX - destX) < Math.abs(tempLocY - destY)) {
					if(tempLocY - destY > 0) {
						if(Game.canMoveTo(tempLocX, tempLocY - 1, this)) {
							tempLocY--;
							vctMovement.addElement("n");
						} else {
							if(tempLocX == destX) return null;
							else if(tempLocX - destX > 0) {
								if(Game.canMoveTo(tempLocX - 1, tempLocY, this)) {
									tempLocX--;
									vctMovement.addElement("w");
								} else return null;
							} else {
								if(Game.canMoveTo(tempLocX + 1, tempLocY, this)) {
									tempLocX++;
									vctMovement.addElement("e");
								} else return null;
							}
						}
					} else {
						if(Game.canMoveTo(tempLocX, tempLocY + 1, this)) {
							tempLocY++;
							vctMovement.addElement("s");
						} else {
							if(tempLocX == destX) return null;
							else if(tempLocX - destX > 0) {
								if(Game.canMoveTo(tempLocX - 1, tempLocY, this)) {
									tempLocX--;
									vctMovement.addElement("w");
								} else return null;
							} else {
								if(Game.canMoveTo(tempLocX + 1, tempLocY, this)) {
									tempLocX++;
									vctMovement.addElement("e");
								} else return null;
							}
						}
					}
				} else {
					if(tempLocX - destX > 0) {
						if(Game.canMoveTo(tempLocX - 1, tempLocY, this)) {
							tempLocX--;
							vctMovement.addElement("w");
						} else {
							if(tempLocY - destY > 0) {
								if(Game.canMoveTo(tempLocX, tempLocY - 1, this)) {
									tempLocY--;
									vctMovement.addElement("n");
								} else return null;
							} else {
								if(Game.canMoveTo(tempLocX, tempLocY + 1, this)) {
									tempLocY++;
									vctMovement.addElement("s");
								} else return null;
							}
						}
					} else {
						if(Game.canMoveTo(tempLocX + 1, tempLocY, this)) {
							tempLocX++;
							vctMovement.addElement("e");
						} else {
							if(tempLocY - destY > 0) {
								if(Game.canMoveTo(tempLocX, tempLocY - 1, this)) {
									tempLocY--;
									vctMovement.addElement("n");
								} else return null;
							} else {
								if(Game.canMoveTo(tempLocX, tempLocY + 1, this)) {
									tempLocY++;
									vctMovement.addElement("s");
								} else return null;
							}
						}
					}
				}
			}
			return null;
		}
   		//End of block by Randall Leeds and Tom Weingarten
	}

	protected synchronized void moveTo(int newLocX,int newLocY, int intSendByte, int intNewStep) {
		if ((PRIVS !=PRIVS.ADMIN) && (newLocX >= (Game.MapColumns-1) || newLocY >= (Game.MapRows-1) || newLocX < 0 || newLocY < 0)) {
			return;
		}
		// Movement during combat is disallowed here
		// need to check min range in the battle and see if anything is at 1 with this livingthing
//		if (PRIVS>1 || (batBattle == null && !blnSleep && Game.canMoveTo(newLocX,newLocY,this)))
		if ((PRIVS != PRIVS.BANNED) || (BLN_CAN_MOVE && !BLN_SLEEP && Game.canMoveTo(newLocX,newLocY,this))) {
			if (isMob()) {
				int maxY = originalY + Game.VIEW_RANGE;
				int minY = originalY - Game.VIEW_RANGE;
				int maxX = originalX + Game.VIEW_RANGE;
				int minX = originalX - Game.VIEW_RANGE;
				if ((newLocY > maxY) || (newLocY < minY) || (newLocX > maxX) || (newLocX < minX)) {
					return;
				}
			}
		} else return;
		
		int oldLocX = intLocX;
		int oldLocY = intLocY;
		DuskObject objStore;
		boolean blnCanSee;
		int x, x1, y, y1, y2;
		x = intLocX-Game.VIEW_RANGE;
		if (x < 0) x = 0;
		
		x1 = intLocX+1+Game.VIEW_RANGE;
		if (x1 > Game.MapColumns) x1 = Game.MapColumns;
		
		y1 = intLocY-Game.VIEW_RANGE;
		if (y1 < 0)	y1 = 0;
		
		y2 = intLocY+1+Game.VIEW_RANGE;
		if (y2 > Game.MapRows)	y2 = Game.MapRows;
		for (; x < x1; x++) {
			for (y = y1; y < y2; y++) {
				objStore = Game.objEntities[x][y];
				while (objStore != null) {
					if (objStore.isLivingThing()) {
						Entity thnStore = (Entity)objStore;
						if (thnStore.isPlayer()) {
							if (Game.SCR_IGNORE_COL != null) {
								synchronized (Game.SCR_IGNORE_COL) {
									Game.SCR_IGNORE_COL.varVariables.clearVariables();
									Game.SCR_IGNORE_COL.varVariables.addVariable("seeing",thnStore);
									Game.SCR_IGNORE_COL.varVariables.addVariable("seen",this);
									blnCanSee = Game.SCR_IGNORE_COL.rewindAndParseScript();
									blnCanSee = true;
								}
							} else blnCanSee = true;
							if (blnCanSee && Game.canSeeTo(this,objStore.intLocX,objStore.intLocY)) {
								thnStore.send(""+(char)intSendByte+""+ID+"\n");
							}
						} else if (thnStore.isMob()) {
							Mob thnMob = (Mob)thnStore;
							thnMob.blnCanSeePlayer=true;
						}
					}
					objStore = objStore.objNext;
				}
			}
		}
		Game.moveDuskObject(this, newLocX, newLocY);
		try {
			STEP = intNewStep;
			if (isPlayer()) {
				if (Game.overMerchant(oldLocX,oldLocY) != null)
					offMerchant();
				if (Game.overPlayerMerchant(oldLocX,oldLocY) != null)
					offMerchant();
				updateMap();
			}
			Script scrStore;
			try {
				scrStore = (Script)Game.vctTileActions.elementAt(Game.shrMap[0][intLocX][intLocY]);
				synchronized(scrStore) {
					scrStore.varVariables.clearVariables();
					scrStore.varVariables.addVariable("trigger",this);
					scrStore.runScript();
				}
			} catch (Exception e){}
			try {
				scrStore = new Script("defMoveActions/"+intLocX+"_"+intLocY,Game,false);
				scrStore.varVariables.addVariable("trigger",this);
				scrStore.runScript();
				scrStore.close();
			} catch (Exception e){}
			
			//move follower
			if (ENT_FOLLOWING != null) {
				//don't move follower if leader has moved onto follower's tile
				if ((ENT_FOLLOWING.intLocX == newLocX) && (ENT_FOLLOWING.intLocY == newLocY)) {
					return;
				}
				if (Math.abs(ENT_FOLLOWING.intLocX - oldLocX) + Math.abs(ENT_FOLLOWING.intLocY - oldLocY) > 1) {
					if (ENT_FOLLOWING.isPet()) {
						if (ENT_FOLLOWING.ENT_FOLLOWING != null) {
							chatMessage(ENT_FOLLOWING.ENT_FOLLOWING.NAME+" is no longer following you.\n");
							ENT_FOLLOWING.ENT_FOLLOWING.chatMessage("You are no longer following "+NAME+"\n");
							ENT_FOLLOWING.ENT_FOLLOWING.ENT_MASTER = null;
							ENT_FOLLOWING.ENT_FOLLOWING = null;
						}
						ENT_FOLLOWING.changeLocBypass(oldLocX,oldLocY);
					} else {
						chatMessage(ENT_FOLLOWING.NAME+" is no longer following you.\n");
						ENT_FOLLOWING.chatMessage("You are no longer following "+NAME+"\n");
						ENT_FOLLOWING.ENT_MASTER = null;
						ENT_FOLLOWING = null;
					}
				} else if (ENT_FOLLOWING.intLocY > oldLocY)
					ENT_FOLLOWING.moveN();
				else if (ENT_FOLLOWING.intLocY < oldLocY)
					ENT_FOLLOWING.moveS();
				else if (ENT_FOLLOWING.intLocX > oldLocX)
					ENT_FOLLOWING.moveW();
				else if (ENT_FOLLOWING.intLocX < oldLocX)
					ENT_FOLLOWING.moveE();
			}
			if (isPlayer()) Game.refreshEntities(this);
			removeIfCanNoLongerSee();
		}catch (Exception e) {
			Game.LOG.printError("moveTo()", e);
		}
	}
	
	public void moveN() {
		moveTo(intLocX, intLocY-1, 24, 0);
	}
	
	public void moveS()	{
		moveTo(intLocX, intLocY+1, 25, 2);
	}
	
	public void moveW()	{
		moveTo(intLocX-1, intLocY, 26, 4);
	}

	public void moveE() {
		moveTo(intLocX+1, intLocY, 27, 6);
	}
	
	/**
	*Removes this entity from any ENTITIES that can no longer see it.
	*/
	void removeIfCanNoLongerSee() {
		DuskObject objStore;
		Entity thnStore;
		String strResult;
		int i,i2,i3;
		boolean blnCanSee;
		i=0;
	    if (intLocX-Game.VIEW_RANGE < 0) {
	    	i = -1*(intLocX-Game.VIEW_RANGE);
	    }
	   	i2=0;
	    if (intLocY-Game.VIEW_RANGE<0) {
	    	i2 = -1*(intLocY-Game.VIEW_RANGE);
	    }
		for (;i<Game.MAP_SIZE;i++) {
			if (intLocX+i-Game.VIEW_RANGE<Game.MapColumns) {
				for (i3=i2;i3<Game.MAP_SIZE;i3++) {
					if (intLocY+i3-Game.VIEW_RANGE<Game.MapRows) {
						objStore = Game.objEntities[intLocX+i-Game.VIEW_RANGE][intLocY+i3-Game.VIEW_RANGE];
						while (objStore != null) {
							if (objStore.isLivingThing() && objStore != this) {
								thnStore = (Entity)objStore;
								if (thnStore.isPlayer() && thnStore.vctEntities.contains(this)) {
									if (Game.SCR_IGNORE_COL != null) {
										if (isLivingThing()) {
											synchronized(Game.SCR_IGNORE_COL) {
												Game.SCR_IGNORE_COL.varVariables.clearVariables();
												Game.SCR_IGNORE_COL.varVariables.addVariable("seeing",thnStore);
												Game.SCR_IGNORE_COL.varVariables.addVariable("seen",(Entity)this);
												blnCanSee = Game.SCR_IGNORE_COL.rewindAndParseScript();
											}
										} else blnCanSee = true;
									} else blnCanSee = true;
									if (!(blnCanSee && Game.canSeeTo(thnStore,intLocX,intLocY))) {
										synchronized (objStore) {
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

	public void changeLoc(int newLocX, int newLocY) {
		if (PRIVS != PRIVS.BANNED || (BATTLE == null && !BLN_SLEEP && Game.canMoveTo(newLocX,newLocY,this))) {
			if (isMob()) {
				if (!(Math.abs(originalX-newLocX) < Game.VIEW_RANGE && Math.abs(originalY-newLocY) < Game.VIEW_RANGE)) {
					return;
				}	
			}
			changeLocBypass(newLocX,newLocY);
		}
	}
	
	synchronized public void changeLocBypass(int newLocX, int newLocY) {
		int oldLocX = intLocX;
		int oldLocY = intLocY;
		Game.removeDuskObject(this);
		intLocX = newLocX;
		intLocY = newLocY;
		try {
			if (isPlayer()) {
				updateMap();
				if (Game.overMerchant(oldLocX,oldLocY) != null)
					offMerchant();
				if (Game.overPlayerMerchant(oldLocX,oldLocY) != null)
					offMerchant();
	    	}
	    	//update entity:
	    	if (BLN_WORKING)
				Game.addDuskObject(this);
	    	Script scrStore;
			try {
				scrStore = (Script)Game.vctTileActions.elementAt(Game.shrMap[0][newLocX][newLocY]);
				synchronized(scrStore) {
					scrStore.varVariables.clearVariables();
					scrStore.varVariables.addVariable("trigger",this);
	    			scrStore.runScript();
				}
	    	} catch (Exception e){}
			try {
				scrStore = new Script("defMoveActions/"+newLocX+"_"+newLocY,Game,false);
	    		scrStore.varVariables.addVariable("trigger",this);
	    		scrStore.runScript();
	    		scrStore.close();
	    	} catch (Exception e){}
	    	if (ENT_FOLLOWING != null)
	    		ENT_FOLLOWING.changeLocBypass(oldLocX,oldLocY);
	    	if (isPlayer())
	    		Game.refreshEntities(this);
		}catch (Exception e) {
		   	Game.LOG.printError("changeLocBypass():"+NAME + " disconnected", e);
			BLN_STOP_THR = true;
		}
	}
	
	public void updateMap() {
	    String strResult = ""+(char)2;
		strResult += intLocX+"\n";
		strResult += intLocY+"\n";
	    for (int i=0;i<Game.MAP_SIZE;i++)  {
	    	for (int i2=0;i2<Game.MAP_SIZE;i2++) {
	    		try {
	    			strResult += Game.shrMap[intLocX-Game.VIEW_RANGE+i][intLocY-Game.VIEW_RANGE+i2]+"\n";
	    		} catch (Exception e) {
	    			strResult += "0\n";
	    		}
	    	}
	    }
		send(strResult);
	}
	
	public void chatMessage(String inMessage) {
		if (inMessage == null)
			return;
	    if (isPlayer()) {
	    	String strResult = ""+(char)3;
	    	strResult += inMessage;
	    	send(strResult);
	    }
	    if (ENT_CHARMER != null) {
	    	ENT_CHARMER.chatMessage("From "+NAME+": "+inMessage);
	    	return;
	    }
	}
	
	public void chatMessage(int red, int green, int blue, String inMessage) {
		if (inMessage == null) return;
		if (isPlayer()) {
			if (!BLN_COLOR) {
				chatMessage(inMessage);
				return;
	 		}
	    	String strResult = ""+(char)23;
	    	strResult += red + "\n" + green + "\n" + blue + "\n" + inMessage;
	    	send(strResult);
		}
	    if (ENT_CHARMER != null)  {
	    	ENT_CHARMER.chatMessage(red,green,blue,"From "+NAME+": "+inMessage);
	    	return;
	    }
	}
	
	public int getCharacterPoints()
	{
		int result = MND
					+RES
					+INT
					+STR
					+DEX
					+VIT
					+AVD
					+AGI
					+LCK
					+((MAXHP)/10)
					+((MAXSP)/10)
					+totalSkillValue();
		result = result * BASE_LVL;
		return result;
	}
	
	public int getTotalPoints() {
		int result = getCharacterPoints() + getArmorMod() + (getDamMod()-100);
		return result;
	}
	
	public Item getEquippedItem(int type) {
		return equWorn.getEquippedItem(type);
	}
	
	public Item getEquippedItem(String name) {
		return equWorn.getEquippedItem(name);
	}
	
	public Item unequipItem(int type) {
		Item itmFound = equWorn.unequipAndGetItem(type);
		return itmFound;
	}
	
	public Item unequipItem(String type) {
		Item itmFound = equWorn.unequipAndGetItem(type);
		return itmFound;
	}
	
	public Item getItem(String strArgs) {
		return equWorn.getEquippedItem(strArgs);
	}

	public int getArmorMod() {
		int result = 0;
		
		return result;
	}
	
	public int getArmorModWithBonus() {
		return getArmorMod()+((DEX+DEX_B)/10)+DEFENSE_B;
	}
	
	public int getDamMod() {
		return 100;
	}
	public int getDamModWithBonus() {
		return getDamMod()+ATTACK_B;
	}
	
    public int getRange() {
      Item item = equWorn.getEquippedItem(INV_EQU_WIELD);
	  if (item == null) {
		  return 1;
	  }
      return stats.getRange();
    }

    public int getRangeWithBonus() {
      Item item = equWorn.getEquippedItem(INV_EQU_WIELD);
	  if (item == null) {
		  return 1+RANGE_B;
	  }
      return item.range()+RANGE_B;
    }

	public void weaponDam(int intDam) {
		if (isMob()) //Mobs weapons are invincible
			return;
		if (!(equWorn.getEquippedItem(INV_EQU_WIELD) == null || equWorn.getEquippedItem(INV_EQU_WIELD).lngDurability == -1)) {
			equWorn.getEquippedItem(INV_EQU_WIELD).lngDurability -= intDam;
			if (equWorn.getEquippedItem(INV_EQU_WIELD).lngDurability < 0) {
				chatMessage("Your "+equWorn.getEquippedItem(INV_EQU_WIELD).NAME+" breaks.\n");
				runUnWearScript(equWorn.getEquippedItem(INV_EQU_WIELD));
				equWorn.unequipItem(INV_EQU_WIELD);
				if (isPlayer()) {
					updateEquipment();
					updateStats();
				}
			}
		}
	}
	
	public void armorDam(int intDam) {
		if (isMob()) //Mobs armor is invincible
			return;
	}
	
	public void useItem(String strStore, int mustBeType){
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
		Item itmStore = getEquippedItem(strStore2);
		if (itmStore == null)
		{
			chatMessage("You don't have that.\n");
			return;
		}
		if (itmStore.strOnUseScript == null)
		{
			chatMessage("That has no use.\n");
			return;
		}
		if (mustBeType != -1 && itmStore.intType != mustBeType)
		{
			chatMessage("You can't use that like that.\n");
			return;
		}
		if (itmStore.intUses == 0)
		{
			chatMessage("That item is used up.\n");
			return;
		}
		try
		{
			Script scrStore = new Script("scripts/"+itmStore.strOnUseScript,Game,false);
			synchronized(scrStore)
			{
				scrStore.varVariables.addVariable("trigger",this);
				scrStore.varVariables.addVariable("itemname",itmStore.NAME);
			//	scrStore.varVariables.addVariable("mod",itmStore.intMod);
				scrStore.runScript();
				scrStore.close();
			}
		}catch(Exception e)
		{
			chatMessage("That has no use.");
			return;
		}
		itmStore.intUses--;
	}

	public void castSpell(String spell)
	{
		String strStore = "",
				strStore2 = "";
		int intStore,
			intStore2;
		Entity target = null;
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
				chatMessage("You don't know that spell.\n");
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
				chatMessage("You don't know that spell.\n");
				return;
			}
			strStore = rafSpell.readLine(); //find what spell group the spell belongs to
			rafSpell.close();
			SpellGroup grpStore = Game.getSpellGroup(strStore);
			intStore = getSpell(strStore);
			intStore2 = grpStore.getSpellNumber(strStore2);
			if (grpStore == null)
			{
				chatMessage("You don't know that spell.\n");
				return;
			}
			Script scrSpell;
			try
			{
				scrSpell = new Script("defSpellGroups/"+intStore2+" "+strStore.toLowerCase(),Game,false);
			}catch(Exception e)
			{
				chatMessage("You don't know that spell.\n");
				return;
			}
			if (intStore2!=0) //change number to percent
				intStore2 = (100*intStore2)/(grpStore.vctSpells.size()-1);
			if (intStore==0 || intStore<intStore2)
			{
				chatMessage("You don't know that spell.\n");
				scrSpell.close();
				return;
			}
			intStore2 = (110-(intStore-intStore2))/2; //change percent to SP cost
			if (intStore2 > SP)
			{
				chatMessage("You don't have enough SP to cast that spell.\n");
				scrSpell.close();
				return;
			}
			SP -= intStore2;
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
		} catch (Exception e) {
			Game.LOG.printError("castSpell()", e);
		}
	}
	
	boolean isWearing(String strStore) {
		//if(equ)
		//	return true;
		return false;
	}
	//if (isPlayer())
	//{
	//	updateStats();
	//	updateEquipment();
	//	updateItems();
	///}
	

	public void runWearScript(Item itmStore)
	{
		if (itmStore.strOnWearScript != null)
		{
			try
			{
				Script scrStore = new Script("scripts/"+itmStore.strOnWearScript,Game,false);
				scrStore.varVariables.addVariable("trigger",this);
				scrStore.varVariables.addVariable("itemname",itmStore.NAME);
			//	scrStore.varVariables.addVariable("mod",itmStore.intMod);
				scrStore.runScript();
				scrStore.close();
			}catch(Exception e) {}
		}
	}
	
	public void runUnWearScript(Item itmStore)
	{
		if (itmStore.strOnUnWearScript != null)
		{
			try
			{
				Script scrStore = new Script("scripts/"+itmStore.strOnUnWearScript,Game,false);
				scrStore.varVariables.addVariable("trigger",this);
				scrStore.varVariables.addVariable("itemname",itmStore.NAME);
			//	scrStore.varVariables.addVariable("mod",itmStore.intMod);
				scrStore.runScript();
				scrStore.close();
			}catch(Exception e) {}
		}
	}
	
	public boolean hasCondition(String strStore) {
		Condition cndStore;
		for (int i=0;i<vctConditions.size();i++) {
			cndStore = (Condition)vctConditions.elementAt(i);
			if (cndStore.NAME.equalsIgnoreCase(strStore)) {
				return true;
			}
		}
		return false;
	}
	
	public void addCondition(Condition cndStore) {
		if (vctConditions.size() == 0)
			Game.vctCheckConditions.addElement(this);
		else {
			Condition cndStore2;
			int i = 0;
			while (i<vctConditions.size()) {
				cndStore2 = (Condition)vctConditions.elementAt(i);
				if (cndStore2.NAME.equalsIgnoreCase(cndStore.NAME)) {
					vctConditions.removeElementAt(i);
					if (cndStore2.strOnEnd != null) {
						try {
							Script scrStore = new Script("scripts/"+cndStore2.strOnEnd,Game,false);
							scrStore.varVariables.addVariable("trigger",this);
							scrStore.runScript();
							scrStore.close();
						}catch(Exception e)
						{
							Game.LOG.printError("addCondition():While running onEnd script for condition \""+cndStore.NAME+"\"", e);
						}
					}
				}else
					i++;
			}
		}
		vctConditions.addElement(cndStore);
		if (cndStore.strOnStart != null) {
			try {
				Script scrStore = new Script("scripts/"+cndStore.strOnStart,Game,false);
				scrStore.varVariables.addVariable("trigger",this);
				scrStore.varVariables.addVariable("condition",cndStore.NAME);
				scrStore.runScript();
				scrStore.close();
			} catch(Exception e) {
				Game.LOG.printError("addCondition():While running onStart script for condition \""+cndStore.NAME+"\"", e);
			}
		}
		updateStats();
	}
	
	public void removeCondition(String NAME)
	{
		Condition cndStore;
		for (int i = 0;i<vctConditions.size();i++)
		{
			cndStore = (Condition)vctConditions.elementAt(i);
			if (NAME.equalsIgnoreCase(cndStore.NAME))
			{
				vctConditions.removeElementAt(i);
				if (vctConditions.size() == 0)
					Game.vctCheckConditions.removeElement(this);
				if (cndStore.strOnEnd != null)
				{
					try
					{
						Script scrStore = new Script("scripts/"+cndStore.strOnEnd,Game,false);
						scrStore.varVariables.addVariable("trigger",this);
						scrStore.varVariables.addVariable("condition",cndStore.NAME);
						scrStore.runScript();
						scrStore.close();
					}catch(Exception e)
					{
						Game.LOG.printError("removeCondition():While running onEnd script for condition \""+cndStore.NAME+"\"", e);
					}
				}
				updateStats();
				return;
			}
		}
		updateStats();
	}
	
	public DuskObject getLocalObject(String NAME)
	{
		int i,
			i2,
			i3;
		DuskObject objStore;
		//Parse String
		int intNumber=0;
		boolean blnCanSee;
		i = NAME.indexOf(".");
		if (i != -1)
		{
			try
			{
				intNumber = Integer.parseInt(NAME.substring(0,i));
				NAME = NAME.substring(i+1,NAME.length());
			}catch(NumberFormatException e)
			{
				intNumber = 0;
			}
		}
		//Search surrounding area
	   	i=0;
	    if (intLocX-Game.VIEW_RANGE<0)
		{
	    	i = -1*(intLocX-Game.VIEW_RANGE);
	    }
	   	i2=0;
	    if (intLocY-Game.VIEW_RANGE<0)
	    {
	    	i2 = -1*(intLocY-Game.VIEW_RANGE);
	    }
		for (;i<Game.MAP_SIZE;i++)
		{
			if (intLocX+i-Game.VIEW_RANGE<Game.MapColumns)
			{
				for (i3=i2;i3<Game.MAP_SIZE;i3++)
				{
					if (intLocY+i3-Game.VIEW_RANGE<Game.MapRows)
					{
						objStore = Game.objEntities[intLocX+i-Game.VIEW_RANGE][intLocY+i3-Game.VIEW_RANGE];
						while (objStore != null)
						{
							if (objStore.NAME.equalsIgnoreCase(NAME))
							{
								if (Game.SCR_IGNORE_COL != null && objStore.isLivingThing())
								{
									synchronized(Game.SCR_IGNORE_COL)
									{
										Game.SCR_IGNORE_COL.varVariables.clearVariables();
										Game.SCR_IGNORE_COL.varVariables.addVariable("seeing",this);
										Game.SCR_IGNORE_COL.varVariables.addVariable("seen",(Entity)objStore);
										blnCanSee = Game.SCR_IGNORE_COL.rewindAndParseScript();
									}
								}else
									blnCanSee=true;
								if (blnCanSee && Game.canSeeTo(this,objStore.intLocX,objStore.intLocY))
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
	
	public void removeFromGroup()
	{
		if (ENT_FOLLOWING != null && ENT_FOLLOWING.isPet())
		{
			if (ENT_MASTER != null)
			{
				try
				{
					chatMessage("You are no longer following "+ENT_MASTER.NAME+"\n");
				}catch (Exception e) {}
				try
				{
					ENT_MASTER.chatMessage(NAME+" is no longer following you.\n");
				}catch (Exception e) {}
				ENT_MASTER.ENT_FOLLOWING = ENT_FOLLOWING.ENT_FOLLOWING;
			}
			if (ENT_FOLLOWING.ENT_FOLLOWING != null)
			{
				ENT_FOLLOWING.ENT_FOLLOWING.ENT_MASTER = ENT_MASTER;
			}
			ENT_MASTER = null;
			ENT_FOLLOWING.ENT_FOLLOWING = null;
		}else
		{
			if (ENT_MASTER != null)
			{
				try
				{
					chatMessage("You are no longer following "+ENT_MASTER.NAME+"\n");
				}catch (Exception e) {}
				try
				{
					ENT_MASTER.chatMessage(NAME+" is no longer following you.\n");
				}catch (Exception e) {}
				ENT_MASTER.ENT_FOLLOWING = ENT_FOLLOWING;
			}
			if (ENT_FOLLOWING != null)
			{
				ENT_FOLLOWING.ENT_MASTER = ENT_MASTER;
			}
			ENT_MASTER = null;
			ENT_FOLLOWING = null;
		}
	}
	
	public void run()
	{
		THR_CONN = Thread.currentThread();
		try {
			do {
				NAME = BUF_SCK_IN.readLine();
				if (NAME != null)
					NAME = NAME.trim();
			}while (!getPlayer());
			if (!BLN_WORKING)
				return;
		} catch(Exception e) {
			Game.LOG.printError("Entity.run():start", e);
			closeNosavePlayer();
			return;
		}
		THR_CONN.setName("Entity("+NAME+")");
		THR_SEND.setName("Entity("+NAME+").send");
		resizeMap();
		changeLocBypass(intLocX,intLocY);
		updateInfo();
		updateStats();
		updateItems();
		updateEquipment();
		updateActions();
		if (Game.BLN_MUSIC) {
			updateMusic();
        	playMusic(0);
		}
		if (!(hasCondition("invis") && (PRIVS == PRIVS.BASIC))) {
			Game.LOG.printMessage(Log.INFO, SCK_CONN.getInetAddress().toString()+":"+NAME+" has entered the world");
			Game.chatMessage(NAME+" has entered the world.",NAME);
		} else {
			chatMessage("You have entered the world hidden from players.\n");
			Game.LOG.printMessage(Log.INFO, SCK_CONN.getInetAddress().toString()+":"+NAME+" has entered the world hidden from players");
		}
		String strInput, strStore;
		BLN_SAVE_OK = true;
		BLN_READY = true;
		while(true) {
			if (BLN_STOP_THR) {
				return;
			} try {
				if (!BLN_HALTED) {
					strInput = BUF_SCK_IN.readLine();
					if (strInput != null)
					{
						strInput = strInput.trim();
					}
					strStore = Commands.parseCommand(this, Game, strInput);
					if (strStore != null)
					{
						chatMessage(strStore+"\n");
					}
				}
			}catch(Exception e)
			{
			    Game.LOG.printError("LivingThing.run():"+NAME+" disconnected", e);
				close();
			    return;
			}
		}
	}
	
	boolean getPlayer() {
	//	if (!Game.isGoodName(NAME)) {
	//		chatMessage("Not a valid name. This may because you left it blank, used invalid symbols, or made it too long. Please try again.\n");
	//		return false;
	///	}
	   	String strStore;
	    int i;
	    Entity thnStore;
	    try
		{
			File filStore = new File("users/"+NAME.toLowerCase());
			if (!filStore.exists() || filStore.length() < 100)
			{
				File filBackup = new File("users/"+NAME.toLowerCase()+".backup");
				if (filBackup.exists())
				{
					filBackup.renameTo(filStore);
				}
			}

			String strIP = SCK_CONN.getInetAddress().toString();
			int ip = strIP.indexOf("/");
			strIP = strIP.substring(ip+1,strIP.length());

			if (filStore.exists())
			{
				try
				{
					/**@TODO LOAD CHAR HERE */
					//rafFile = new RandomAccessFile("users/"+NAME.toLowerCase(), "r");
					chatMessage("enter your password:\n");
					PASSWORD = BUF_SCK_IN.readLine();
					if (!PASSWORD.equals("aaaaaa"))//rafFile.readLine()))
					{
						//rafFile.close();
						Game.LOG.printMessage(Log.INFO, SCK_CONN.getInetAddress().toString()+":"+NAME+" entered the wrong password");
						Variable failCount = Game.varIP.getVariable(strIP);
						if (failCount != null)
						{
							Double dblFailCount = (Double)failCount.objData;
							if (dblFailCount.intValue() >= 4)
							{
								Game.vctBannedIP.addElement(strIP);
								chatMessage("Too many login failures, try again in an hour.");
								closeNosavePlayer();
						//		rafFile.close();
								return true;
							}else
							{
								Game.varIP.addVariable(strIP,dblFailCount.intValue()+1); 
							}
						}else
						{
							Game.varIP.addVariable(strIP,(double)1);
						}
						Thread.sleep(3000);
						chatMessage("Incorrect Password.\nEnter your login name: \n");
						return false;
					}
					//rafFile.close();
				}catch (Exception e)
				{
		    		Game.LOG.printError("getPlayer():"+SCK_CONN.getInetAddress().toString()+":"+NAME, e);
					closeNosavePlayer();
					//rafFile.close();
					return true;
				}
			} else {
				File fileStore = new File("pets/"+NAME.toLowerCase());
				if (fileStore.exists())
				{
					chatMessage(NAME+" is already in use.  Please try again.\n");
					return false;
				}
				chatMessage(NAME+", Is that correct? (yes/no)\n");
				if (!BUF_SCK_IN.readLine().equalsIgnoreCase("yes"))
				{
					chatMessage("Then what IS your name?\n");
					return false;
				}
				chatMessage("Enter a new password:\n");
				PASSWORD = BUF_SCK_IN.readLine();
				chatMessage("Confirm that password:\n");
				while (!PASSWORD.equals(BUF_SCK_IN.readLine()))
				{
					chatMessage("Passwords did not match, enter a new password:\n");
					PASSWORD = BUF_SCK_IN.readLine();
					chatMessage("Confirm that password:\n");
				}
			}
			Game.varIP.removeVariable(strIP);
			try
			{
				equWorn = new Equipment();
				vctItems = new Inventory();
				vctSkills = new Vector(0,5);
				vctSpells = new Vector(0,5);
				vctConditions = new Vector(0,5);
				vctEntities = new Vector(0,10);
				vctFlags = new Vector(0,1);
				vctCommands = new Vector(0,3);
				vctMovement = new Vector(0,5);
				vctIgnore = new Vector(0);
				chatMessage("Login Accepted.\n");
				proceed();
				chatMessage("This game is running Dusk 3 Server v"+Game.VERSION_STR+". http://pretend.in/\n");
				chatMessage("Started at "+Game.DATE_START.toString()+".\n");
    			for (i=0;i<Game.vctSockets.size();i++)
    			{
     				thnStore = (Entity)Game.vctSockets.elementAt(i);
        			if (NAME.equalsIgnoreCase(thnStore.NAME))
        			{
						Game.LOG.printMessage(Log.INFO, SCK_CONN.getInetAddress().toString()+":"+NAME+" tried to LOG in twice");
						chatMessage("That user is already logged in. They are being logged out.\n");
						thnStore.chatMessage("There has been another logon under this name, you are being logged out.\n");
						thnStore.close();
						break;
       			 	}
					// Second IP Filter check to catch delayed sign-ons
					if (Game.BLN_IPF) 
					{
						String IP = ((Entity)Game.vctSockets.elementAt(i)).SCK_CONN.getInetAddress().toString();
						if (IP.equalsIgnoreCase(SCK_CONN.getInetAddress().toString()))
						{
		    				chatMessage("There's already a player connected from your IP address.\n");
							closeNosavePlayer();
							return false;
						}
					}
    			}
				Game.vctSockets.addElement(this);
				try
				{
					if (Game.SCR_ONSTART != null)
					{
						synchronized(Game.SCR_ONSTART)
						{
							Game.SCR_ONSTART.varVariables.clearVariables();
							Game.SCR_ONSTART.varVariables.addVariable("trigger",this);
							Game.SCR_ONSTART.runScript();
						}
					}
				}catch(Exception e) {}
				/** @TODO GET CHARACTER LOGIN **/
				//rafFile = new RandomAccessFile("users/default","r");
				//strStore = rafFile.readLine();
				//while (!(strStore == null || strStore.equals(".")))
				//{
				//	loadCharacter(strStore);
				//	strStore = rafFile.readLine();
				//}
				//rafFile.close();
	    	}catch(Exception e) {
		    	Game.LOG.printError("getPlayer():While loading default user file for "+NAME, e);
	    	}
	    	strStore = NAME.toLowerCase();
			File filPlayer = new File("users/"+strStore);
			File filBackup = new File("users/"+strStore+".backup");
			File filCheck;
			int i2=0;
			/*
			** Load the user
			*/
			//rafFile = new RandomAccessFile("users/"+strStore, "rw");
			//rafBackup = new RandomAccessFile("users/"+strStore+".backup", "rw");
	    	//strStore = rafFile.readLine();
			//while (!(strStore == null || strStore.equals("."))) {
			//	loadCharacter(strStore);
			//	strStore = rafFile.readLine();
			//}
			/*
			** Try to load a pet, if they don't already have one
			*/
			if (ENT_FOLLOWING == null) {
				ENT_FOLLOWING = new Entity("default",null,this,Game);
				if (ENT_FOLLOWING.NAME.equalsIgnoreCase("default")) {
					ENT_FOLLOWING.closeNosavePlayer();
					ENT_FOLLOWING = null;
				}
			}
		}catch(Exception e) {
		    Game.LOG.printError("getPlayer():While loading file for "+NAME, e);
		    closeNosavePlayer();
		    return true;
		}
		loadRace();
		BLN_LOADED = true;
		if (ENT_FOLLOWING != null) {
			ENT_FOLLOWING.BLN_LOADED=true;
			ENT_FOLLOWING.changeLocBypass(intLocX,intLocY);
		}
		return true;
	}
	
	public void loadRace() {
		RandomAccessFile rafFile2;
		String strStore;
		String strRaceDir;
		if (isPet()) {
			strRaceDir = "defPets";
		} else {
			strRaceDir = "defRaces";
		}
		try {
			if (RACE == null) {
				chatMessage("Choose one of the following races:\n");
				File filRaces = new File(strRaceDir);
				String strList[] = filRaces.list();
				for (int i=0;i<strList.length;i++) {
					chatMessage(strList[i]+"\n");
				}
				if (isPet()) {
					strStore = ENT_MASTER.BUF_SCK_IN.readLine().toLowerCase();
				} else {
					strStore = BUF_SCK_IN.readLine().toLowerCase();
				}
				File filCheck = new File(strRaceDir+"/"+strStore);
				while (strStore.equals("") || !filCheck.exists())
				{
					chatMessage("That is not a valid race, please choose again.\n");
					filRaces = new File(strRaceDir);
					strList = filRaces.list();
					for (int i=0;i<strList.length;i++)
					{
						chatMessage(strList[i]+"\n");
					}
					if (isPet())
					{
						strStore = ENT_MASTER.BUF_SCK_IN.readLine().toLowerCase();
					} else
					{
						strStore = BUF_SCK_IN.readLine().toLowerCase();
					}
					filCheck = new File(strRaceDir+"/"+strStore);
				}
				STR_RACE = strStore;
			}
			//rafFile2 = new RandomAccessFile(strRaceDir+"/"+strRace,"r");
			//strStore = rafFile2.readLine();
			//while (!(strStore == null || strStore.equals("."))) {
			//	getRaceData(strStore, rafFile2, true);	
			//	strStore = rafFile2.readLine();
			//}
			//rafFile2.close();
		} catch(Exception e) {
			//Game.LOG.printError("loadRace():Loading "+NAME+"'s race file \""+strRaceDir+"/"+strRace+"\"", e);
		}
	}
	
	public void updateAppletImages() {
		String strResult = ""+(char)1;
		strResult += Game.RC_LOC+"\n";
		try {
			send(strResult);
		} catch(Exception e) {
			Game.LOG.printError("updateAppletImages()", e);
		}
	}

	public void updateApplicationImages() {
		String strResult = ""+(char)1;
		strResult += Game.RC_NAME+"\n";
		try {
			send(strResult);
		} catch(Exception e) {
			Game.LOG.printError("updateApplicationImages()",e);
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
			Game.LOG.printError("updateMusic()", e);
		}*/
	}
	
	public void playMusic(int type)
	{
		/*try
		{
			send(""+((char)12)+""+type+"\n");
		}catch(Exception e)
		{
			Game.LOG.printError("playMusic()", e);
		}*/
	}
	
	public void playSFX(int intSFX) {
		if (BLN_AUDIO) {
			try {
				send((char)15+""+intSFX+"\n");
			} catch(Exception e) {
				Game.LOG.printError("playSFX()", e);
			}
		}
	}
	
	public void updateActions() {
		try {
			if (isPlayer()) {
				String strResult = ""+(char)10;
				if (BATTLE != null) {
					strResult += "flee\n";	
				} else {
					if (BLN_SLEEP) {
						strResult += "wake\n";
					} else {
						strResult += "sleep\n";
					}
				}
				strResult += ".\n";
				send(strResult);
			}
		} catch (Exception e) {
			Game.LOG.printError("updateActions()", e);	
		}
	}
	
	/**
	 * Send Equipment Data
	 */
	public void updateEquipment() {
		try
		{
			
	    //	send(strResult);
		} catch (Exception e) {
		    Game.LOG.printError("updateEquipment():"+NAME+" disconnected", e);
			BLN_STOP_THR = true;
		    return;
		}
	}
	
	public void send(String data) {
		if (isPlayer() && BLN_WORKING && !BLN_CLOSING)
		{
			SendData sd = new SendData(data);
			QUE_MSG.push(sd);
		}
	}
	
/*	public void send(byte data)
	{
		if (isPlayer() && BLN_WORKING && !BLN_CLOSING)
		{
			SendData sd = new SendData(data);
			QUE_MSG.push(sd);
		}
	}
	
	public void send(long data)
	{
		if (isPlayer() && BLN_WORKING && !BLN_CLOSING)
		{
			SendData sd = new SendData(data);
			QUE_MSG.push(sd);
		}
	}*/
	
	public void updateInfo() {
		try {
			String strResult = ""+(char)5;
			strResult += HP+"\n";
			strResult += (MAXHP+HP_B)+"\n";
			strResult += SP+"\n";
			strResult += (MAXSP+SP_B)+"\n";
	    	send(strResult);
		} catch(Exception e) {
		    Game.LOG.printError("updateInfo():"+NAME+" disconnected", e);
			BLN_STOP_THR = true;
		}
	}
	
	public void updateRange() {
		try {
			String strResult = ""+(char)28;
			strResult += getRangeWithBonus()+"\n";
			send(strResult);
		}catch(Exception e) {
			Game.LOG.printError("updateRange():"+NAME + " disconnected", e);
		}
	}

	public void updateItems() {
		try {
			String strResult = ""+(char)6,
					strStore;
			int i;
			Item itmStore;
			LifoQueue qStore;
			Iterator iter=vctItems.keySet().iterator();
			while(iter.hasNext()) {
				qStore = (LifoQueue)vctItems.get(iter.next());
				if (qStore.size() > 0) {
					itmStore = (Item)qStore.firstElement();
					if(itmStore.isArmor()) {
						strResult += (2+itmStore.intKind)+"\n";
					} else if (itmStore.isWeapon()) {
						strResult += "1\n";
					} else {
						strResult += "0\n";
					}
					strResult += itmStore.NAME+"\n";
				}
			}
			strResult += ".\n";
			send(strResult);
			if (Game.overMerchant(intLocX,intLocY)!= null)
				updateSell();
			if (Game.overPlayerMerchant(intLocX,intLocY)!= null)
				updateSell();
		} catch(Exception e) {
		    Game.LOG.printError("updateItems():"+NAME+" disconnected", e);
			BLN_STOP_THR = true;
		}
		BLN_SAVE_FLAG = true;
	}
	
	public void updateStats() {
		Skill sklStore;
		Spell splStore;
		SpellGroup grpStore;
		int i,
			i2;
		try {
			String strResult = ""+(char)8;
			strResult += ZENY+" gp\n";
			strResult += CUR_EXP+" CUR_EXP\n";
			if (STR_B == 0) {
				strResult += "str: "+STR+"\n";
			} else {
			
			Condition cndStore;
			strResult += "-Affected by-\n";
			for (i=0;i<vctConditions.size();i++) {
				cndStore = (Condition)vctConditions.elementAt(i);
				if (cndStore.blnDisplay) {
					strResult += cndStore.NAME+"\n";
				}
			}
			strResult += "-Skills-\n";
			for (i=0;i<vctSkills.size();i++) {
				sklStore = (Skill)vctSkills.elementAt(i);
				strResult += sklStore.NAME+": "+sklStore.VAL+"\n";
			}
			strResult += "-Spells-\n";
			for (i=0;i<vctSpells.size();i++) {
				splStore = (Spell)vctSpells.elementAt(i);
				grpStore = Game.getSpellGroup(splStore.NAME);
				if (grpStore != null) {
					strResult += splStore.NAME+": "+splStore.VAL+"\n";
					strResult += grpStore.spellList(splStore.VAL);
				}
			}
			if (ENT_MASTER != null) {
				strResult +="\nFollowing: "+ENT_MASTER.NAME+"\n";
			}
			if (ENT_FOLLOWING != null) {
				strResult +="\nFollowed By: "+ENT_FOLLOWING.NAME+"\n";
				if (ENT_FOLLOWING.isPet()) {
					strResult += ENT_FOLLOWING.HP+"/"+ENT_FOLLOWING.MAXHP+" HP\n";
					strResult += ENT_FOLLOWING.SP+"/"+ENT_FOLLOWING.MAXSP+" SP\n";
					strResult += ENT_FOLLOWING.ZENY+" gp\n";
					strResult += ENT_FOLLOWING.CUR_EXP+" CUR_EXP\n";
					if (ENT_FOLLOWING.STR_B == 0) {
						strResult += "str: "+ENT_FOLLOWING.STR+"\n";
					} else {
						strResult += "str: "+ENT_FOLLOWING.STR+" + "+ENT_FOLLOWING.STR_B+"\n";
					}
					if (ENT_FOLLOWING.INT_B == 0) {
						strResult += "int: "+ENT_FOLLOWING.INT+"\n";
					} else {
						strResult += "int: "+ENT_FOLLOWING.INT+" + "+ENT_FOLLOWING.INT_B+"\n";
					}
					if (ENT_FOLLOWING.DEX_B == 0) {
						strResult += "dex: "+ENT_FOLLOWING.DEX+"\n";
					} else {
						strResult += "dex: "+ENT_FOLLOWING.DEX+" + "+ENT_FOLLOWING.DEX_B+"\n";
					}
					if (ENT_FOLLOWING.VIT_B == 0) {
						strResult += "con: "+ENT_FOLLOWING.VIT+"\n";
					}else {
						strResult += "con: "+ENT_FOLLOWING.VIT+" + "+ENT_FOLLOWING.VIT_B+"\n";
					} if (ENT_FOLLOWING.MND == 0) {
						strResult += "wis: "+ENT_FOLLOWING.MND+"\n";
					} else {
						strResult += "wis: "+ENT_FOLLOWING.MND+" + "+ENT_FOLLOWING.MND_B+"\n";
					} if (ENT_FOLLOWING.ATTACK_B == 0) {
						strResult += "DamMod: "+ENT_FOLLOWING.getDamMod()+"\n";
					}else {
						strResult += "DamMod: "+ENT_FOLLOWING.getDamMod()+" + "+ENT_FOLLOWING.ATTACK_B+"\n";
					} if (ENT_FOLLOWING.DEFENSE_B == 0) {
						strResult += "AC: "+ENT_FOLLOWING.getArmorMod()+"\n\n";
					} else {
						strResult += "AC: "+ENT_FOLLOWING.getArmorMod()+" + "+ENT_FOLLOWING.DEFENSE_B+"\n";
					}
					strResult += "-Affected by-\n";
					for (i=0;i<ENT_FOLLOWING.vctConditions.size();i++) {
						cndStore = (Condition)ENT_FOLLOWING.vctConditions.elementAt(i);
						if (cndStore.blnDisplay)
						{
							strResult += cndStore.NAME+"\n";
						}
					}
					strResult += "-Skills-\n";
					for (i=0;i<ENT_FOLLOWING.vctSkills.size();i++)
					{
						sklStore = (Skill)ENT_FOLLOWING.vctSkills.elementAt(i);
						strResult += sklStore.NAME+": "+sklStore.VAL+"\n";
					}
					strResult += "-Spells-\n";
					for (i=0;i<ENT_FOLLOWING.vctSpells.size();i++)
					{
						splStore = (Spell)ENT_FOLLOWING.vctSpells.elementAt(i);
						grpStore = Game.getSpellGroup(splStore.NAME);
						if (grpStore != null)
						{
							strResult += splStore.NAME+": "+splStore.VAL+"\n";
							strResult += grpStore.spellList(splStore.VAL);
						}
					}
				}
			}
			strResult += ".\n";
			send(strResult);
			}
		} catch (Exception e) {
		    Game.LOG.printError("updateStats():"+NAME+" disconnected", e);
			BLN_STOP_THR = true;
		}
		updateRange();
		BLN_SAVE_FLAG = true;
	}
	
	public void halt() {
		BLN_HALTED = true;
		try
		{
			send(""+(char)9);
		}catch(Exception e)
		{
			BLN_HALTED=false;
			Game.LOG.printError("halt()", e);
		}
	}
	
	public void proceed()
	{
		BLN_HALTED=false;
		try
		{
			send(""+(char)14);
		}catch(Exception e)
		{
			Game.LOG.printError("proceed()", e);
		}
	}
	
	public void stillThere()
	{
		try
		{
			send(""+(char)13);
		}catch(Exception e)
		{
			Game.LOG.printError("stillThere()", e);
		}
	}
	
	public void resizeMap()
	{
		int i,i2;
		String strResult = (char)19+"";
		strResult += Game.MAP_SIZE+"\n";
		send(strResult);
	}
		
	public void updateSell()
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
		    		strResult += (itmStore.intCost/2) + "gp)" + itmStore.NAME + "\n";
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
	/**
	 * @param strArgs
	 * @return
	 */
	
}
