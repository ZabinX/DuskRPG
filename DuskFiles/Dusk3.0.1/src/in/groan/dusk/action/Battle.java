package in.groan.dusk.action;
/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk. 

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or 
remove this license, and accompany it with all redistributions.
*/


import in.groan.dusk.DuskEngine;
import in.groan.dusk.Script;
import in.groan.dusk.object.entity.Entity;
import in.groan.dusk.object.entity.Mob;
import in.groan.dusk.object.itm.Item;

import java.io.*;
import java.util.Vector;
import java.lang.Math;

/**
*Battle represents a fight between two sides comprised of LivingThings.
*
*@author Tom Weingarten
*/
public class Battle
{
	public Vector vctSide1;
	public Vector vctSide2;
	Entity thnFront1;
	Entity thnFront2;
	DuskEngine engGame;
	public boolean blnRunning = true;
	boolean blnPlayerSide1=false, blnPlayerSide2=false;
			   
	public Battle (Entity inpla1, Entity inpla2, DuskEngine inengGame)
	{
		try
		{
			engGame = inengGame;
			vctSide1 = new Vector();
			vctSide2 = new Vector();
			thnFront2 = inpla2;
			while (thnFront2 != null)
			{
				addToBattle(thnFront2,2);
				thnFront2 = thnFront2.ENT_FOLLOWING;
			}
			thnFront2 = inpla2.ENT_MASTER;
			while (thnFront2 != null)
			{
				addToBattle(thnFront2,2);
				thnFront2 = thnFront2.ENT_MASTER;
			}
			thnFront2 = inpla2;
			thnFront1 = inpla1;
			while (thnFront1 != null)
			{
				addToBattle(thnFront1,1);
				thnFront1 = thnFront1.ENT_FOLLOWING;
			}
			thnFront1 = inpla1.ENT_MASTER;
			while (thnFront1 != null)
			{
				addToBattle(thnFront1,1);
				thnFront1 = thnFront1.ENT_MASTER;
			}
			thnFront1 = inpla1;
			engGame.chatMessage("-"+inpla1.NAME+" has attacked "+inpla2.NAME,inpla1.intLocX,inpla1.intLocY,"default");
			if (inpla1.BLN_POPUP)
			{
				inpla1.send(""+(char)31+inpla2.NAME);
			}
			if (inpla2.BLN_POPUP)
			{
				inpla2.send(""+(char)31+inpla1.NAME);
			}
		}catch (Exception e)
		{
			blnRunning = false;
			engGame.LOG.printError("Battle()",e);
		}
	}

	public synchronized void addToBattle(Entity thnAdded,int intSide)
	{
		if (intSide == 1)
		{
			if (thnAdded.isPlayer())
			{
				if (blnPlayerSide2)
				{
					if (thnAdded.GUILD.equals("none"))
					{
						thnAdded.chatMessage("Players who are not in clans cannot fight other players.\n");
						thnAdded.removeFromGroup();
						return;
					}
					Entity thnStore = (Entity)vctSide1.firstElement();
					if (thnStore.GUILD.equals("none"))
					{
						thnAdded.chatMessage("Players who are not in clans cannot fight other players.\n");
						thnAdded.removeFromGroup();
						return;
					}
				}
				blnPlayerSide1 = true;
				if (engGame.BLN_MUSIC)
				{
					thnAdded.playMusic(1);	
				}
			}
			vctSide1.addElement(thnAdded);
			thnAdded.changeLocBypass(thnFront1.intLocX,thnFront1.intLocY);
			thnAdded.BLN_SLEEP = false;
			thnAdded.BATTLE = this;
			thnAdded.updateActions();
			thnAdded.bytSide = 1;
			Entity thnStore;
			for (int i=0;i<vctSide1.size();i++)
			{
				thnStore = (Entity)vctSide1.elementAt(i);
				thnStore.updateFlag(thnAdded.ID,1);
				thnAdded.updateFlag(thnStore.ID,1);
			}
			for (int i=0;i<vctSide2.size();i++)
			{
				thnStore = (Entity)vctSide2.elementAt(i);
				thnStore.updateFlag(thnAdded.ID,2);
				thnAdded.updateFlag(thnStore.ID,2);
			}
		}else
		{
			if (thnAdded.isPlayer())
			{
				if (blnPlayerSide1)
				{
					if (thnAdded.GUILD.equals("none"))
					{
						thnAdded.chatMessage("Players who are not in clans cannot fight other players.\n");
						thnAdded.removeFromGroup();
						return;
					}
					Entity thnStore = (Entity)vctSide2.firstElement();
					if (thnStore.GUILD.equals("none"))
					{
						thnAdded.chatMessage("Players who are not in clans cannot fight other players.\n");
						thnAdded.removeFromGroup();
						return;
					}
				}
				blnPlayerSide1 = true;
				if (engGame.BLN_MUSIC)
				{
					thnAdded.playMusic(1);
				}
			}
			vctSide2.addElement(thnAdded);
			thnAdded.changeLocBypass(thnFront2.intLocX,thnFront2.intLocY);
			thnAdded.BLN_SLEEP = false;
			thnAdded.BATTLE = this;
			thnAdded.updateActions();
			thnAdded.bytSide = 2;
			Entity thnStore;
			for (int i=0;i<vctSide2.size();i++)
			{
				thnStore = (Entity)vctSide2.elementAt(i);
				thnStore.updateFlag(thnAdded.ID,1);
				thnAdded.updateFlag(thnStore.ID,1);
			}
			for (int i=0;i<vctSide1.size();i++)
			{
				thnStore = (Entity)vctSide1.elementAt(i);
				thnStore.updateFlag(thnAdded.ID,2);
				thnAdded.updateFlag(thnStore.ID,2);
			}
		}
	}

	String attack(Entity thnAttacking, Entity thnAttacked, int range, String s)
    {
		// The farther away the target, the harder they are to hit.
		// The more skilled the attecker is in ranged combat, the less range affects ability to hit.
		// The farther away the target, the easier it is for them to dodge.
		// The more skilled the attecker is in ranged combat, the harder it is for the target to dodge.
		int r2=0;
		if (range > 1)
		{
			r2= thnAttacking.getSkill("ranged combat") - (int)((range * range - 1) * (double)(100/engGame.VIEW_RANGE));
		}
		if (r2 < 0)
		{
			s += thnAttacking.NAME + " missed.";
		} else if(dodge(thnAttacking,thnAttacked, r2))
        {
            s += thnAttacked.NAME + " dodged " + thnAttacking.NAME + "'s attack";
        }else
        {
            if(engGame.BATTLE_SOUND != -1)
                engGame.playSound(engGame.BATTLE_SOUND, thnAttacked.intLocX,thnAttacked.intLocY);
            int i = damRoll(thnAttacking,thnAttacked, range);
            if(i < 0)
                i = 0;
            s += thnAttacking.NAME + " did " + i + " to " + thnAttacked.NAME;
            thnAttacked.stats.decHP(i);
            thnAttacking.lngDamDone += i;
            thnAttacking.weaponDam(i);
            thnAttacked.armorDam(i);
        }
        return s;
    }

	int damRoll(Entity attacker, Entity thnAttacked, int range)
	{
		int attackerTotal = attacker.STR+attacker.STR_B;
		return (int)(((double)(attackerTotal)/2) * (Math.random()+0.5) * (attacker.getDamModWithBonus()/100) - (thnAttacked.getArmorModWithBonus()));
	}

	boolean dodge(Entity attacker, Entity thnAttacked, int rangeModifier)
	{
		int attackedTotal = thnAttacked.DEX + thnAttacked.DEX_B;
		int attackerTotal = attacker.DEX + attacker.DEX_B + rangeModifier;
		return ( (Math.random()*100) < ( (thnAttacked.getSkill("Dodge")*.75) + ( .5*(attackedTotal-attackerTotal) ) ) );
	}

	void endBattle()
	{
		blnRunning = false;
		chatMessage("\tYou have won the battle.\n");
		Entity thnStore;
		int i;
		for (i=0;i<vctSide1.size();i++)
		{
			thnStore = (Entity)vctSide1.elementAt(i);
			thnStore.clearFlags();
			thnStore.BATTLE = null;
			thnStore.bytSide = 0;
			thnStore.BLN_CAN_MOVE = true;
            thnStore.updateInfo();
            thnStore.updateStats();
            thnStore.updateActions();
            thnStore.playMusic(0);
		}
		for (i=0;i<vctSide2.size();i++)
		{
			thnStore = (Entity)vctSide2.elementAt(i);
			thnStore.clearFlags();
			thnStore.BATTLE = null;
			thnStore.bytSide = 0;
			thnStore.BLN_CAN_MOVE=true;
            thnStore.updateInfo();
            thnStore.updateStats();
            thnStore.updateActions();
            thnStore.playMusic(0);
		}
	}

	void flee(Entity thnStore)
	{
		thnStore.clearFlags();
		Entity thnUpdate;
		for (int i=0;i<vctSide1.size();i++)
		{
			thnUpdate = (Entity)vctSide1.elementAt(i);
			thnUpdate.updateFlag(thnUpdate.ID,0);
		}
		for (int i=0;i<vctSide2.size();i++)
		{
			thnUpdate = (Entity)vctSide2.elementAt(i);
			thnUpdate.updateFlag(thnUpdate.ID,0);
		}
		if (thnStore.ENT_FOLLOWING != null && thnStore.ENT_FOLLOWING.isPet())
		{
			if (thnStore.ENT_MASTER != null)
			{
				thnStore.ENT_MASTER.ENT_FOLLOWING = thnStore.ENT_FOLLOWING.ENT_FOLLOWING;
			}
			if (thnStore.ENT_FOLLOWING.ENT_FOLLOWING != null)
			{
				thnStore.ENT_FOLLOWING.ENT_FOLLOWING.ENT_MASTER = thnStore.ENT_MASTER;
			}
		}else
		{
			if (thnStore.ENT_MASTER != null)
			{
				thnStore.ENT_MASTER.ENT_FOLLOWING = thnStore.ENT_FOLLOWING;
			}
			if (thnStore.ENT_FOLLOWING != null)
			{
				thnStore.ENT_FOLLOWING.ENT_MASTER = thnStore.ENT_MASTER;
			}
		}
		if (thnStore.bytSide == 1)
		{
			vctSide1.removeElement(thnStore);
		}else
		{
			vctSide2.removeElement(thnStore);
		}
		if (thnStore.BLN_POPUP)
		{
			thnStore.send(""+(char)33+"You have fled from battle\n");
		} else
		{
			thnStore.chatMessage("You have fled from battle\n");
		}
		splitMoney(thnStore, (int)(thnStore.ZENY*engGame.GP_FLEE_MOD));
		splitExp(thnStore, (int)(thnStore.CUR_EXP*engGame.EXP_FLEE_MOD));
		thnStore.BATTLE = null;
		thnStore.bytSide = 0;
		thnStore.BLN_CAN_MOVE=true;
		thnStore.updateInfo();
		thnStore.updateStats();
		thnStore.updateActions();
		thnStore.playMusic(0);
		if (thnStore.ENT_FOLLOWING != null && thnStore.ENT_FOLLOWING.isPet())
		{
			if (thnStore.bytSide == 1)
			{
				vctSide1.removeElement(thnStore.ENT_FOLLOWING);
			}else
			{
				vctSide2.removeElement(thnStore.ENT_FOLLOWING);
			}
			Entity thnStore2;
			for (int i=0;i<vctSide1.size();i++)
			{
				thnStore2 = (Entity)vctSide1.elementAt(i);
				thnStore2.updateFlag(thnStore.ENT_FOLLOWING.ID,0);
			}
			for (int i=0;i<vctSide2.size();i++)
			{
				thnStore2 = (Entity)vctSide2.elementAt(i);
				thnStore2.updateFlag(thnStore.ENT_FOLLOWING.ID,0);
			}
			thnStore.ENT_FOLLOWING.BATTLE = null;
			thnStore.ENT_FOLLOWING.bytSide = 0;
			thnStore.ENT_FOLLOWING.BLN_CAN_MOVE=true;
		}
		if (vctSide2.size() == 0 || vctSide1.size() == 0)
		{
			endBattle();
			return;
		}
	}

	void splitMoney(Entity thnStore, int money)
	{
		if (money == 0)
		{
			return;
		}
		if (thnStore.BLN_POPUP)
		{
			thnStore.send(""+(char)33+"You have lost "+money+" gp\n");
		} else
		{
			thnStore.chatMessage("You have lost "+money+" gp\n");
		}
		thnStore.ZENY -= money;
		int i,
			i2=0;
		Vector vctStore;
		if (thnStore.bytSide ==1)
		{
			vctStore = vctSide2;
		}else
		{
			vctStore = vctSide1;
		}
		Entity thnStore2;
		try
		{
			for (i=0;i<vctStore.size();i++)
			{
				thnStore2 = (Entity)vctStore.elementAt(i);
				if (thnStore2.isPlayer())
				{
					i2++;
				}
			}
			i2 = money/i2;
			for (i=0;i<vctStore.size();i++)
			{
				thnStore2 = (Entity)vctStore.elementAt(i);
				thnStore2.ZENY += i2;
				if (thnStore2.isPlayer() && i2 != 0)
				{
					thnStore2.chatMessage("\tYou get "+i2+" gp.\n");
				}
			}
		}catch(Exception e)
		{
			engGame.LOG.printError("splitMoney()", e);
		}
	}

	void splitExp(Entity thnStore, int CUR_EXP)
	{
		if (thnStore.BLN_POPUP)
		{
			thnStore.send(""+(char)33+"You have lost "+CUR_EXP+" CUR_EXP\n");
		} else
		{
			thnStore.chatMessage("You have lost "+CUR_EXP+" CUR_EXP\n");
		}
		thnStore.CUR_EXP -= CUR_EXP;
		Vector vctStore;
		double tp,
				sidepoints=0;
		Entity thnFront;
		if (thnStore.bytSide == 1)
		{
			vctStore = vctSide2;
			thnFront = thnFront1;
		}else
		{
			vctStore = vctSide1;
			thnFront = thnFront2;
		}
		int i,
			i2=0;
		Entity thnStore2;

		tp=thnFront.getTotalPoints();
		thnFront.lngDamDone = 0;
		for (i=0;i<vctStore.size();i++)
		{
			thnStore2 = (Entity)vctStore.elementAt(i);
			if (thnStore2.isPlayer())
			{
				sidepoints += thnStore.getTotalPoints();
			}
		}
		try
		{
			for (i=0;i<vctStore.size();i++)
			{
				i2 = 0;
				thnStore2 = (Entity)vctStore.elementAt(i);
				if (!thnStore2.isMob())
				{
					if (thnStore2.lngDamDone > thnFront.stats.getMAXHP())
					{
						thnStore2.lngDamDone = thnFront.stats.getMAXHP();
					}
					i2 = (int)(engGame.EXP_GAIN_MOD * (((tp/sidepoints)
						 + (2*(thnStore2.lngDamDone/(double)thnFront.stats.getMAXHP())
						 * (tp/(double)thnStore2.getTotalPoints())))/3));
					thnStore2.chatMessage("You get "+i2+" experience.\n");
					thnStore2.CUR_EXP += i2;
				}
				thnStore2.lngDamDone = 0;
			}
		}catch(Exception e)
		{
			engGame.LOG.printError("splitExp()", e);
		}
	}
	
	public void chatMessage(String strStore)
	{
		int i;
		Entity thnStore=null;
		String strStore2=null;
		if (!vctSide2.isEmpty())
		{
			thnStore = (Entity)vctSide2.elementAt(0);
			strStore2 = thnStore.NAME+" has "+thnStore.getCharacterPoints()+"cp and "+thnStore.stats.getHP()+"/"+thnStore.stats.getMAXHP()+"HP.\n";
		}
		for (i=0;i<vctSide1.size();i++)
		{
			thnStore = (Entity)vctSide1.elementAt(i);
			if (thnStore.isPlayer())
			{
				if (thnStore.BLN_POPUP)
				{
					if (strStore2 != null)
					{
						thnStore.send(""+(char)32+strStore2);
						thnStore.send(""+(char)33+strStore);
					}
				} else
				{
					thnStore.chatMessage(strStore);
				}
			}
		}
		if (!vctSide1.isEmpty())
		{
			thnStore = (Entity)vctSide1.elementAt(0);
			strStore2 = thnStore.NAME+" has "+thnStore.getCharacterPoints()+"cp and "+thnStore.stats.getHP()+"/"+thnStore.stats.getMAXHP()+"HP.\n";
		}
		for (i=0;i<vctSide2.size();i++)
		{
			thnStore = (Entity)vctSide2.elementAt(i);
			if (thnStore.isPlayer())
			{
				if (thnStore.BLN_POPUP)
				{
					if (strStore2 != null)
					{
						thnStore.send(""+(char)32+strStore2);
						thnStore.send(""+(char)33+strStore);
					}
				} else
				{
					thnStore.chatMessage(strStore);
				}
			}
		}
	}
	
	void checkCommands1()
	{
		int i;
		Entity thnStore;
		String strStore=null;
		for (i=0;i<vctSide1.size();i++)
		{
			thnStore = (Entity)vctSide1.elementAt(i);
			if (!thnStore.vctCommands.isEmpty())
			{
				strStore = (String)thnStore.vctCommands.elementAt(0);
				thnStore.vctCommands.removeElementAt(0);
				if (strStore.equalsIgnoreCase("flee"))
				{
					flee(thnStore);
				}else if (strStore.startsWith("cast "))
                {
                	strStore = strStore.substring(5,strStore.length());
                	thnStore.castSpell(strStore);
                }else if (strStore.startsWith("use "))
                {
                	strStore = strStore.substring(4,strStore.length());
                	thnStore.useItem(strStore,-1);
                }else if (strStore.startsWith("eat "))
                {
                	strStore = strStore.substring(4,strStore.length());
                	thnStore.useItem(strStore,Item.FOOD);
                }else if (strStore.startsWith("drink "))
                {
                	strStore = strStore.substring(6,strStore.length());
                	thnStore.useItem(strStore,Item.DRINK);
                }
			}
		}
	}
	
	void checkCommands2()
	{
		int i;
		Entity thnStore;
		String strStore=null;
		for (i=0;i<vctSide2.size();i++)
		{
			thnStore = (Entity)vctSide2.elementAt(i);
			if (!thnStore.vctCommands.isEmpty())
			{
				strStore = (String)thnStore.vctCommands.elementAt(0);
				thnStore.vctCommands.removeElementAt(0);
				if (strStore.equalsIgnoreCase("flee"))
				{
					flee(thnStore);
				}else if (strStore.startsWith("cast "))
                {
                	strStore = strStore.substring(5,strStore.length());
                	thnStore.castSpell(strStore);
                }else if (strStore.startsWith("use "))
                {
                	strStore = strStore.substring(4,strStore.length());
                	thnStore.useItem(strStore,-1);
                }else if (strStore.startsWith("eat "))
                {
                	strStore = strStore.substring(4,strStore.length());
                	thnStore.useItem(strStore,Item.FOOD);
                }else if (strStore.startsWith("drink "))
                {
                	strStore = strStore.substring(6,strStore.length());
                	thnStore.useItem(strStore,Item.DRINK);
                }
			}
		}
	}
	
	void update()
	{
		int i;
		Entity thnStore;
		for (i=0;i<vctSide1.size();i++)
		{
			thnStore = (Entity)vctSide1.elementAt(i);
			if (thnStore.isPlayer())
			{
            	thnStore.updateInfo();
            	thnStore.updateStats();
			}
		}
		for (i=0;i<vctSide2.size();i++)
		{
			thnStore = (Entity)vctSide2.elementAt(i);
			if (thnStore.isPlayer())
			{
            	thnStore.updateInfo();
            	thnStore.updateStats();
			}
		}
	}
	
	public void run()
	{
		int i,
			range,
			rangestore,
			intDam;
		Entity thnStore;
		Entity thnStore2;
		Entity thnTarget;
		String strStore;
		
		checkCommands1();
		if (vctSide1.size() == 0)
		{
			endBattle();
			return;
		}
		
		for (i=0;i<vctSide1.size();i++)
		{
			strStore = "";
			thnStore = (Entity)vctSide1.elementAt(i);
			if (thnStore.isMob())
			{
				Mob mobStore = (Mob)thnStore;
				if (mobStore.strOnBattle != null)
				{
    				try
    				{
						Script scrOnBattle = new Script("scripts/"+mobStore.strOnBattle,engGame,false);
						scrOnBattle.varVariables.addVariable("trigger",(Entity)mobStore);
	    				scrOnBattle.runScript();
	    				scrOnBattle.close();
					}catch(Exception e)
					{
						engGame.LOG.printError("Battle.run():while running onBattle script \""+mobStore.strOnBattle+"\" for mob "+mobStore.NAME, e);
					}
				}
			}
        	thnStore2 = (Entity)vctSide2.elementAt(0);
			range = Math.abs(thnStore.intLocX-thnStore2.intLocX)+Math.abs(thnStore.intLocY-thnStore2.intLocY);
			thnTarget = thnStore2;
			/*
				They are allowed to move until they are at a range of 1 or less with any target
			*/
			thnStore.BLN_CAN_MOVE = true;
			thnTarget.BLN_CAN_MOVE = true;
			if (range <= 1)
			{
				thnStore.BLN_CAN_MOVE = false;
				thnTarget.BLN_CAN_MOVE = false;
			}
        	for (int i2=1;i2<vctSide2.size();i2++)
        	{
        		thnStore2 = (Entity)vctSide2.elementAt(i2);
				rangestore = Math.abs(thnStore.intLocX-thnStore2.intLocX)+Math.abs(thnStore.intLocY-thnStore2.intLocY);
				if (rangestore < range)
				{
					range = rangestore;
					thnTarget = thnStore2;
				}
				/*
					They are allowed to move until they are at a range of 1 or less with any target
				*/
				thnStore2.BLN_CAN_MOVE = true;
				if (range <= 1)
				{
					thnStore.BLN_CAN_MOVE = false;
					thnStore2.BLN_CAN_MOVE = false;
				}
        	}
			/*
				End the battle if the closest target is off of the screen.
			*/
			if (range > engGame.VIEW_RANGE)
			{
				endBattle();
				return;
			}
        	if (range > thnStore.getRangeWithBonus())
        	{
        		strStore = thnStore.NAME + " is out of range.\n";
        		if (thnStore.isMob() && thnStore.vctMovement.size() == 0) // if mob, try to go to the enemy to fight them
        		{
        			thnStore.goTo(thnTarget.intLocX,thnTarget.intLocY);
					synchronized(thnStore.vctMovement)
					{
						// Don't move onto the player's tile
	        			thnStore.vctMovement.removeElement(thnStore.vctMovement.lastElement());
					}
        		}
        	}else
        	{
        		if (thnStore.isMob() && thnStore.vctMovement.size() > 0)
				{
					synchronized(thnStore.vctMovement)
					{
	        			thnStore.vctMovement.removeAllElements();
					}
				}
            	strStore = attack(thnStore, thnTarget, range, strStore);
				if (((Math.random()*100)+1)<thnStore.getSkill("double attack"))
				{
            	    strStore += ",";
           			strStore = attack(thnStore,thnTarget, range, strStore);
				}
				if (((Math.random()*100)+1)<thnStore.getSkill("triple attack"))
				{
            	    strStore += ",";
           			strStore = attack(thnStore,thnTarget, range, strStore);
				}
				if (((Math.random()*100)+1)<thnStore.getSkill("quadruple attack"))
				{
            	    strStore += ",";
           			strStore = attack(thnStore,thnTarget, range, strStore);
				}
				strStore += ".\n";
			}
			chatMessage("\t"+strStore);
		}
		
		checkCommands2();
		if (vctSide2.size() == 0)
		{
			endBattle();
			return;
		}
		
		for (i=0;i<vctSide2.size();i++)
		{
			strStore = "";
			thnStore = (Entity)vctSide2.elementAt(i);
			if (thnStore.isMob())
			{
				Mob mobStore = (Mob)thnStore;
				if (mobStore.strOnBattle != null)
				{
    				try
    				{
						Script scrOnBattle = new Script("scripts/"+mobStore.strOnBattle,engGame,false);
						scrOnBattle.varVariables.addVariable("trigger",(Entity)mobStore);
	    				//scrOnBattle.runScript();
	    				//scrOnBattle.close();
					}catch(Exception e)
					{
						engGame.LOG.printError("Battle.run():while running onBattle script \""+mobStore.strOnBattle+"\" for mob "+mobStore.NAME, e);
					}
				}
			}

        	thnStore2 = (Entity)vctSide1.elementAt(0);
			range = Math.abs(thnStore.intLocX-thnStore2.intLocX)+Math.abs(thnStore.intLocY-thnStore2.intLocY);
			thnTarget = thnStore2;
			/*
				They are allowed to move until they are at a range of 1 or less with any target
			*/
			thnStore.BLN_CAN_MOVE = true;
			thnTarget.BLN_CAN_MOVE = true;
			if (range <= 1)
			{
				thnStore.BLN_CAN_MOVE = false;
				thnTarget.BLN_CAN_MOVE = false;
			}
        	for (int i2=1;i2<vctSide1.size();i2++)
        	{
        		thnStore2 = (Entity)vctSide1.elementAt(i2);
				rangestore = Math.abs(thnStore.intLocX-thnStore2.intLocX)+Math.abs(thnStore.intLocY-thnStore2.intLocY);
				if (rangestore < range)
				{
					range = rangestore;
					thnTarget = thnStore2;
				}
				/*
					They are allowed to move until they are at a range of 1 or less with any target
				*/
				thnStore2.BLN_CAN_MOVE = true;
				if (range <= 1)
				{
					thnStore.BLN_CAN_MOVE = false;
					thnStore2.BLN_CAN_MOVE = false;
				}
        	}
			/*
				End the battle if the closest target is off of the screen.
			*/
			if (range > engGame.VIEW_RANGE)
			{
				endBattle();
				return;
			}
        	if (range > thnStore.getRangeWithBonus())
        	{
        		strStore = thnStore.NAME + " is out of range.\n";
        		if (thnStore.isMob() && thnStore.vctMovement.size() == 0) // if mob, try to go to the enemy to fight them
        		{
        			thnStore.goTo(thnTarget.intLocX,thnTarget.intLocY);
					synchronized(thnStore.vctMovement)
					{
						// Don't move onto the player's tile
	        			thnStore.vctMovement.removeElement(thnStore.vctMovement.lastElement());
					}
        		}
        	}else
        	{
        		if (thnStore.isMob() && thnStore.vctMovement.size() > 0)
				{
					synchronized(thnStore.vctMovement)
					{
	        			thnStore.vctMovement.removeAllElements();
					}
				}
            	strStore = attack(thnStore, thnTarget, range, strStore);
				if (((Math.random()*100)+1)<thnStore.getSkill("double attack"))
				{
            	    strStore += ",";
           			strStore = attack(thnStore,thnTarget, range, strStore);
				}
				if (((Math.random()*100)+1)<thnStore.getSkill("triple attack"))
				{
            	    strStore += ",";
           			strStore = attack(thnStore,thnTarget, range, strStore);
				}
				if (((Math.random()*100)+1)<thnStore.getSkill("quadruple attack"))
				{
            	    strStore += ",";
           			strStore = attack(thnStore,thnTarget, range, strStore);
				}
				strStore += ".\n";
			}
			chatMessage("\t"+strStore);
		}
		
		if (thnFront2.stats.getHP() < 1 || !thnFront2.BLN_WORKING)
		{
			vctSide2.removeElementAt(0);
			thnFront2.clearFlags();
			for (int i2=0;i2<vctSide1.size();i2++)
			{
				thnStore2 = (Entity)vctSide1.elementAt(i2);
				thnStore2.updateFlag(thnFront2.ID,0);
			}
			for (int i2=0;i2<vctSide2.size();i2++)
			{
				thnStore2 = (Entity)vctSide2.elementAt(i2);
				thnStore2.updateFlag(thnFront2.ID,0);
			}
			if (thnFront2.isPlayer())
			{
				thnFront2.removeFromGroup();
				chatMessage("\t"+thnFront2.NAME+" is killed.\n");
				if (thnFront2.BLN_POPUP)
				{
					thnFront2.send(""+(char)33+"\tYou have died.\n");
				} else
				{
					thnFront2.chatMessage("\tYou have died.\n");
				}
				splitMoney(thnFront2, (int)(thnFront2.ZENY*engGame.GP_LOSE_MOD));
				splitExp(thnFront2, (int)(thnFront2.CUR_EXP*engGame.EXP_LOSE_MOD));
				thnFront2.BATTLE = null;
				thnFront2.bytSide = 0;
				thnFront2.BLN_CAN_MOVE=true;
            	thnFront2.updateInfo();
            	thnFront2.updateStats();
            	thnFront2.updateActions();
            	thnFront2.playMusic(0);
				engGame.chatMessage(thnFront2.NAME+" has been killed by "+thnFront1.NAME,"default");
				if (engGame.SCR_ONDEATH != null && thnFront2.BLN_WORKING)
				{
					engGame.SCR_ONDEATH.varVariables.clearVariables();
					engGame.SCR_ONDEATH.varVariables.addVariable("trigger",thnFront2);
					engGame.SCR_ONDEATH.varVariables.addVariable("killer",thnFront1);
					//engGame.SCR_ONDEATH.runScript();
				}
				if (thnFront2.ENT_FOLLOWING != null && thnFront2.ENT_FOLLOWING.isPet())
				{
					vctSide2.removeElement(thnFront2.ENT_FOLLOWING);
					for (int i2=0;i2<vctSide1.size();i2++)
					{
						thnStore2 = (Entity)vctSide1.elementAt(i2);
						thnStore2.updateFlag(thnFront2.ENT_FOLLOWING.ID,0);
					}
					for (int i2=0;i2<vctSide2.size();i2++)
					{
						thnStore2 = (Entity)vctSide2.elementAt(i2);
						thnStore2.updateFlag(thnFront2.ENT_FOLLOWING.ID,0);
					}
					thnFront2.ENT_FOLLOWING.BATTLE = null;
					thnFront2.ENT_FOLLOWING.bytSide = 0;
					thnFront2.BLN_CAN_MOVE=true;
					thnFront2.ENT_FOLLOWING.lngDamDone = 0;
					thnFront2.ENT_FOLLOWING.changeLocBypass(thnFront2.intLocX,thnFront2.intLocY); 
				}
			}else if (thnFront2.isMob())
			{
				Mob mobStore = (Mob)thnFront2;
				chatMessage("\t"+thnFront2.NAME+" is killed.\n");
				splitMoney(thnFront2, (int)(thnFront2.ZENY));
				splitExp(thnFront2, 0);
				if (mobStore.blnOneUse)
				{
					engGame.vctMobs.removeElement(mobStore);
					engGame.removeDuskObject(mobStore);
				} else {
					engGame.removeDuskObject(mobStore);
					mobStore.intLocX = -6;
					mobStore.intLocY = -6;
					mobStore.stats.setHP(engGame.MOB_RESPAWN_RATE);//seconds till respawn
					mobStore.BATTLE = null;
					mobStore.bytSide = 0;
					mobStore.BLN_CAN_MOVE=true;
				}
				for (int i2=0;i2<vctSide1.size();i2++)
				{
					thnStore2 = (Entity)vctSide1.elementAt(i2);
					if (!thnStore2.isPet())
					{
						try
						{
							mobStore.fctFaction.killedBy(mobStore,thnStore2);
						}catch(Exception e)
						{
							engGame.LOG.printError("Battle.run():While updating faction for mob "+mobStore.NAME, e);
						}
					}
				}
				if (thnFront1.isPlayer())
				{
					GiveItem gitStore;
					Item itmStore;
					for (int i2=0;i2<mobStore.vctGiveItems.size();i2++)
					{
						gitStore = (GiveItem)mobStore.vctGiveItems.elementAt(i2);
						if (Math.random() < gitStore.dblProbability)
						{
							itmStore = engGame.getItem(gitStore.strItemName);
							if (itmStore != null)
							{
								thnFront1.chatMessage("You got a "+gitStore.strItemName+"\n");
								thnFront1.vctItems.addElement(itmStore);
 								if (itmStore.strOnGetScript != null)
								{
									try
									{
										Script scrStore = new Script("scripts/"+itmStore.strOnGetScript,engGame,false);
										scrStore.varVariables.addVariable("trigger",thnFront1);
										scrStore.varVariables.addVariable("itemname",itmStore.NAME);
										//scrStore.varVariables.addVariable("mod",itmStore.intMod);
										//scrStore.runScript();
										//scrStore.close();
									}catch(Exception e)
									{
										engGame.LOG.printError("Battle.run():While running onGet script("+itmStore.strOnGetScript+") for item \""+itmStore.NAME+"\"", e);
									}
								}
								thnFront1.updateItems();
							}
						}
					}
				}
			}else if (thnFront2.isPet())
			{
				chatMessage("\t"+thnFront2.NAME+" is wounded.\n");
				thnFront2.chatMessage("\tYou have been wounded.\n");
				splitMoney(thnFront2, (int)(thnFront2.ZENY*engGame.GP_LOSE_MOD));
				splitExp(thnFront2, (int)(thnFront2.CUR_EXP*engGame.EXP_LOSE_MOD));
				thnFront2.BATTLE = null;
				thnFront2.bytSide = 0;
				thnFront2.BLN_CAN_MOVE=true;
			}
			if (!vctSide2.isEmpty())
			{
				thnFront2 = (Entity)vctSide2.elementAt(0);
			}
		}
		if (thnFront1.stats.getHP() < 1 || !thnFront1.BLN_WORKING)
		{
			vctSide1.removeElementAt(0);
			thnFront1.clearFlags();
			for (int i2=0;i2<vctSide1.size();i2++)
			{
				thnStore2 = (Entity)vctSide1.elementAt(i2);
				thnStore2.updateFlag(thnFront1.ID,0);
			}
			for (int i2=0;i2<vctSide2.size();i2++)
			{
				thnStore2 = (Entity)vctSide2.elementAt(i2);
				thnStore2.updateFlag(thnFront1.ID,0);
			}
			if (thnFront1.isPlayer())
			{
				thnFront1.removeFromGroup();
				chatMessage("\t"+thnFront1.NAME+" is killed.\n");
				if (thnFront1.BLN_POPUP)
				{
					thnFront1.send(""+(char)33+"\tYou have died.\n");
				} else
				{
					thnFront1.chatMessage("\tYou have died.\n");
				}
				splitMoney(thnFront1, (int)(thnFront1.ZENY*engGame.GP_LOSE_MOD));
				splitExp(thnFront1, (int)(thnFront1.CUR_EXP*engGame.EXP_LOSE_MOD));
				thnFront1.BATTLE = null;
				thnFront1.bytSide = 0;
				thnFront1.BLN_CAN_MOVE=true;
            	thnFront1.updateInfo();
            	thnFront1.updateStats();
            	thnFront1.updateActions();
            	thnFront1.playMusic(0);
				engGame.chatMessage(thnFront1.NAME+" has been killed by "+thnFront2.NAME,"default");
				if (engGame.SCR_ONDEATH != null && thnFront1.BLN_WORKING)
				{
					engGame.SCR_ONDEATH.varVariables.clearVariables();
					engGame.SCR_ONDEATH.varVariables.addVariable("trigger",thnFront1);
					engGame.SCR_ONDEATH.varVariables.addVariable("killer",thnFront2);
					//engGame.SCR_ONDEATH.runScript();
				}
				if (thnFront1.ENT_FOLLOWING != null && thnFront1.ENT_FOLLOWING.isPet())
				{
					vctSide1.removeElementAt(0);
					for (int i2=0;i2<vctSide1.size();i2++)
					{
						thnStore2 = (Entity)vctSide1.elementAt(i2);
						thnStore2.updateFlag(thnFront1.ENT_FOLLOWING.ID,0);
					}
					for (int i2=0;i2<vctSide2.size();i2++)
					{
						thnStore2 = (Entity)vctSide2.elementAt(i2);
						thnStore2.updateFlag(thnFront1.ENT_FOLLOWING.ID,0);
					}
					thnFront1.ENT_FOLLOWING.BATTLE = null;
					thnFront1.ENT_FOLLOWING.bytSide = 0;
					thnFront1.BLN_CAN_MOVE=true;
					thnFront1.ENT_FOLLOWING.lngDamDone = 0;
					thnFront1.ENT_FOLLOWING.changeLocBypass(thnFront1.intLocX,thnFront1.intLocY);
				}
			}else if (thnFront1.isMob())
			{
				Mob mobStore = (Mob)thnFront1;
				chatMessage("\t"+mobStore.NAME+" is killed.\n");
				splitMoney(thnFront1, (int)(thnFront1.ZENY));
				splitExp(thnFront1, 0);
				if (mobStore.blnOneUse)
				{
					engGame.vctMobs.removeElement(mobStore);
					engGame.removeDuskObject(mobStore);
				}else
				{
					engGame.removeDuskObject(mobStore);
					mobStore.intLocX = -6;
					mobStore.intLocY = -6;
					mobStore.stats.setHP(engGame.MOB_RESPAWN_RATE);//seconds till respawn
					mobStore.BATTLE = null;
					mobStore.bytSide = 0;
					mobStore.BLN_CAN_MOVE = true;
				}
				for (int i2=0;i2<vctSide2.size();i2++)
				{
					thnStore2 = (Entity)vctSide2.elementAt(i2);
					if (!thnStore2.isPet())
					{
						try
						{
							mobStore.fctFaction.killedBy(mobStore,thnStore2);
						}catch(Exception e)
						{
							engGame.LOG.printError("Battle.run():While updating faction for mob "+mobStore.NAME, e);
						}
					}
				}
				if (thnFront2.isPlayer())
				{
					GiveItem gitStore;
					Item itmStore;
					for (int i2=0;i2<mobStore.vctGiveItems.size();i2++)
					{
						gitStore = (GiveItem)mobStore.vctGiveItems.elementAt(i2);
						if (Math.random() < gitStore.dblProbability)
						{
							itmStore = engGame.getItem(gitStore.strItemName);
							if (itmStore != null)
							{
								thnFront2.chatMessage("You got a "+gitStore.strItemName+"\n");
								thnFront2.vctItems.addElement(itmStore);
 								if (itmStore.strOnGetScript != null)
								{
									try
									{
										Script scrStore = new Script("scripts/"+itmStore.strOnGetScript,engGame,false);
										scrStore.varVariables.addVariable("trigger",thnFront2);
										scrStore.varVariables.addVariable("itemname",itmStore.NAME);
									//	scrStore.varVariables.addVariable("mod",itmStore.intMod);
										//scrStore.runScript();
										//scrStore.close();
									}catch(Exception e)
									{
										engGame.LOG.printError("Battle.run():While running onGet script("+itmStore.strOnGetScript+") for item \""+itmStore.NAME+"\"", e);
									}
								}
								thnFront2.updateItems();
							}
						}
					}
				}
			}else if (thnFront1.isPet())
			{
				chatMessage("\t"+thnFront1.NAME+" is wounded.\n");
				thnFront1.chatMessage("\tYou have been wounded.\n");
				splitMoney(thnFront1, (int)(thnFront1.ZENY * engGame.GP_LOSE_MOD));
				splitExp(thnFront1, (int)(thnFront1.CUR_EXP * engGame.EXP_LOSE_MOD));
				thnFront1.BATTLE = null;
				thnFront1.bytSide = 0;
				thnFront1.BLN_CAN_MOVE = true;
			}
			if (!vctSide1.isEmpty())
			{
				thnFront1 = (Entity)vctSide1.elementAt(0);
			}
		}
		
		if (vctSide2.size() == 0 || vctSide1.size() == 0)
		{
			endBattle();
			return;
		}
		update();
	}
}