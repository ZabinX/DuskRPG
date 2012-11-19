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
import java.lang.Math;

/**
*Battle represents a fight between two sides comprised of LivingThings.
*
*@author Tom Weingarten
*/
public class Battle
{
	Vector vctSide1,
			vctSide2;
	LivingThing thnFront1,
				thnFront2;
	DuskEngine engGame;
	boolean blnRunning=true,
			blnPlayerSide1=false,
			blnPlayerSide2=false;
			   
	Battle (LivingThing inpla1, LivingThing inpla2, DuskEngine inengGame)
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
				thnFront2 = thnFront2.thnFollowing;
			}
			thnFront2 = inpla2.thnMaster;
			while (thnFront2 != null)
			{
				addToBattle(thnFront2,2);
				thnFront2 = thnFront2.thnMaster;
			}
			thnFront2 = inpla2;
			thnFront1 = inpla1;
			while (thnFront1 != null)
			{
				addToBattle(thnFront1,1);
				thnFront1 = thnFront1.thnFollowing;
			}
			thnFront1 = inpla1.thnMaster;
			while (thnFront1 != null)
			{
				addToBattle(thnFront1,1);
				thnFront1 = thnFront1.thnMaster;
			}
			thnFront1 = inpla1;
			engGame.chatMessage("-"+inpla1.strName+" has attacked "+inpla2.strName,inpla1.intLocX,inpla1.intLocY,"default");
			if (inpla1.popup)
			{
				inpla1.send(""+(char)31+inpla2.strName);
			}
			if (inpla2.popup)
			{
				inpla2.send(""+(char)31+inpla1.strName);
			}
		}catch (Exception e)
		{
			blnRunning = false;
			engGame.log.printError("Battle()",e);
		}
	}

	synchronized void addToBattle(LivingThing thnAdded,int intSide)
	{
		if (intSide == 1)
		{
			if (thnAdded.isPlayer())
			{
				if (blnPlayerSide2)
				{
					if (thnAdded.strClan.equals("none"))
					{
						thnAdded.chatMessage("Players who are not in clans cannot fight other players.");
						thnAdded.removeFromGroup();
						return;
					}
					LivingThing thnStore = (LivingThing)vctSide1.firstElement();
					if (thnStore.strClan.equals("none"))
					{
						thnAdded.chatMessage("Players who are not in clans cannot fight other players.");
						thnAdded.removeFromGroup();
						return;
					}
				}
				blnPlayerSide1 = true;
				if (engGame.blnMusic)
				{
					thnAdded.playMusic(1);	
				}
			}
			chatMessage("\t"+thnAdded.strName+" has joined the battle.");
			vctSide1.addElement(thnAdded);
//			thnAdded.changeLocBypass(thnFront1.intLocX,thnFront1.intLocY);
			thnAdded.blnCanMove = false;
			thnAdded.blnSleep = false;
			thnAdded.batBattle = this;
			thnAdded.updateActions();
			thnAdded.bytSide = 1;
			LivingThing thnStore;
			for (int i=0;i<vctSide1.size();i++)
			{
				thnStore = (LivingThing)vctSide1.elementAt(i);
				if (thnStore.highlight)
				{
					thnStore.updateFlag(thnAdded.ID,1);
				}
				if (thnAdded.highlight)
				{
					thnAdded.updateFlag(thnStore.ID,1);
				}
			}
			for (int i=0;i<vctSide2.size();i++)
			{
				thnStore = (LivingThing)vctSide2.elementAt(i);
				if (thnStore.highlight)
				{
					thnStore.updateFlag(thnAdded.ID,2);
				}
				if (thnAdded.highlight)
				{
					thnAdded.updateFlag(thnStore.ID,2);
				}
			}
		}else
		{
			if (thnAdded.isPlayer())
			{
				if (blnPlayerSide1)
				{
					if (thnAdded.strClan.equals("none"))
					{
						thnAdded.chatMessage("Players who are not in clans cannot fight other players.");
						thnAdded.removeFromGroup();
						return;
					}
					LivingThing thnStore = (LivingThing)vctSide2.firstElement();
					if (thnStore.strClan.equals("none"))
					{
						thnAdded.chatMessage("Players who are not in clans cannot fight other players.");
						thnAdded.removeFromGroup();
						return;
					}
				}
				blnPlayerSide1 = true;
				if (engGame.blnMusic)
				{
					thnAdded.playMusic(1);
				}
			}
			chatMessage("\t"+thnAdded.strName+" has joined the battle.");
			vctSide2.addElement(thnAdded);
//			thnAdded.changeLocBypass(thnFront2.intLocX,thnFront2.intLocY);
			thnAdded.blnCanMove = false;
			thnAdded.blnSleep = false;
			thnAdded.batBattle = this;
			thnAdded.updateActions();
			thnAdded.bytSide = 2;
			LivingThing thnStore;
			for (int i=0;i<vctSide2.size();i++)
			{
				thnStore = (LivingThing)vctSide2.elementAt(i);
				if (thnStore.highlight)
				{
					thnStore.updateFlag(thnAdded.ID,1);
				}
				if (thnAdded.highlight)
				{
					thnAdded.updateFlag(thnStore.ID,1);
				}
			}
			for (int i=0;i<vctSide1.size();i++)
			{
				thnStore = (LivingThing)vctSide1.elementAt(i);
				if (thnStore.highlight)
				{
					thnStore.updateFlag(thnAdded.ID,2);
				}
				if (thnAdded.highlight)
				{
					thnAdded.updateFlag(thnStore.ID,2);
				}
			}
		}
	}

	String attack(LivingThing thnAttacking, LivingThing thnAttacked, int range, String s)
    {
		// The farther away the target, the harder they are to hit.
		// The more skilled the attecker is in ranged combat, the less range affects ability to hit.
		// The farther away the target, the easier it is for them to dodge.
		// The more skilled the attecker is in ranged combat, the harder it is for the target to dodge.
		int r2=0;
		if (range > 1)
		{
//			r2= thnAttacking.getSkill("ranged combat") - (int)((range * range - 1) * (double)(100/engGame.viewrange));
			r2= thnAttacking.getSkill("ranged combat");
		}else
		{
			r2 = thnAttacking.getSkill("close combat");
		}
		if (r2 < 0)
		{
			s += thnAttacking.strName + " missed.";
		} else if(dodge(thnAttacking,thnAttacked, r2))
        {
            s += thnAttacked.strName + " dodged " + thnAttacking.strName + "'s attack";
        }else
        {
            if(engGame.battlesound != -1)
                engGame.playSound(engGame.battlesound, thnAttacked.intLocX,thnAttacked.intLocY);
            int i = damRoll(thnAttacking,thnAttacked, range);
            if(i < 0)
                i = 0;
            s += thnAttacking.strName + " did " + i + " to " + thnAttacked.strName;
            thnAttacked.hp -= i;
            thnAttacking.lngDamDone += i;
            thnAttacking.weaponDam(i);
            thnAttacked.armorDam(i);
        }
        return s;
    }

	int damRoll(LivingThing attacker, LivingThing thnAttacked, int range)
	{
		int attackerTotal = attacker.stre+attacker.strebon;
		return (int)(((double)(attackerTotal)/2) * (Math.random()+0.5) * (attacker.getDamModWithBonus()/100) - (thnAttacked.getArmorModWithBonus()));
	}

	boolean dodge(LivingThing attacker, LivingThing thnAttacked, int attackModifier)
	{
		int attackedTotal = thnAttacked.dext+thnAttacked.dextbon;
		if (attackedTotal > 100)
		{
			attackedTotal = 100;
		}
		int attackerTotal = attacker.dext+attacker.dextbon+attackModifier;
		if (attackerTotal > 100)
		{
			attackerTotal = 100+attackModifier;
		}
		return ( (Math.random()*100) < ( (thnAttacked.getSkill("Dodge")*.75) + ( .25*(attackedTotal-attackerTotal) ) ) );
	}

	void endBattle()
	{
		blnRunning = false;
		chatMessage("\tYou have won the battle.");
		LivingThing thnStore;
		int i;
		for (i=0;i<vctSide1.size();i++)
		{
			thnStore = (LivingThing)vctSide1.elementAt(i);
			thnStore.clearFlags();
			thnStore.batBattle = null;
			thnStore.bytSide = 0;
			thnStore.blnCanMove=true;
            thnStore.updateInfo();
            thnStore.updateStats();
            thnStore.updateActions();
            thnStore.playMusic(0);
		}
		for (i=0;i<vctSide2.size();i++)
		{
			thnStore = (LivingThing)vctSide2.elementAt(i);
			thnStore.clearFlags();
			thnStore.batBattle = null;
			thnStore.bytSide = 0;
			thnStore.blnCanMove=true;
            thnStore.updateInfo();
            thnStore.updateStats();
            thnStore.updateActions();
            thnStore.playMusic(0);
		}
	}

	void flee(LivingThing thnStore)
	{
		thnStore.clearFlags();
		LivingThing thnUpdate;
		for (int i=0;i<vctSide1.size();i++)
		{
			thnUpdate = (LivingThing)vctSide1.elementAt(i);
			thnUpdate.updateFlag(thnUpdate.ID,0);
		}
		for (int i=0;i<vctSide2.size();i++)
		{
			thnUpdate = (LivingThing)vctSide2.elementAt(i);
			thnUpdate.updateFlag(thnUpdate.ID,0);
		}
		if (thnStore.thnFollowing != null && thnStore.thnFollowing.isPet())
		{
			if (thnStore.thnMaster != null)
			{
				thnStore.thnMaster.thnFollowing = thnStore.thnFollowing.thnFollowing;
			}
			if (thnStore.thnFollowing.thnFollowing != null)
			{
				thnStore.thnFollowing.thnFollowing.thnMaster = thnStore.thnMaster;
			}
		}else
		{
			if (thnStore.thnMaster != null)
			{
				thnStore.thnMaster.thnFollowing = thnStore.thnFollowing;
			}
			if (thnStore.thnFollowing != null)
			{
				thnStore.thnFollowing.thnMaster = thnStore.thnMaster;
			}
		}
		if (thnStore.bytSide == 1)
		{
			vctSide1.removeElement(thnStore);
		}else
		{
			vctSide2.removeElement(thnStore);
		}
		if (thnStore.popup)
		{
			thnStore.send(""+(char)33+"You have fled from battle\n");
		} else
		{
			thnStore.chatMessage("You have fled from battle");
		}
		splitMoney(thnStore, (int)(thnStore.cash*engGame.gpfleemod));
		splitExp(thnStore, (int)(thnStore.exp*engGame.expfleemod));
		thnStore.batBattle = null;
		thnStore.bytSide = 0;
		thnStore.blnCanMove=true;
		thnStore.updateInfo();
		thnStore.updateStats();
		thnStore.updateActions();
		thnStore.playMusic(0);
		if (thnStore.thnFollowing != null && thnStore.thnFollowing.isPet())
		{
			if (thnStore.bytSide == 1)
			{
				vctSide1.removeElement(thnStore.thnFollowing);
			}else
			{
				vctSide2.removeElement(thnStore.thnFollowing);
			}
			LivingThing thnStore2;
			for (int i=0;i<vctSide1.size();i++)
			{
				thnStore2 = (LivingThing)vctSide1.elementAt(i);
				thnStore2.updateFlag(thnStore.thnFollowing.ID,0);
			}
			for (int i=0;i<vctSide2.size();i++)
			{
				thnStore2 = (LivingThing)vctSide2.elementAt(i);
				thnStore2.updateFlag(thnStore.thnFollowing.ID,0);
			}
			thnStore.thnFollowing.batBattle = null;
			thnStore.thnFollowing.bytSide = 0;
			thnStore.thnFollowing.blnCanMove=true;
		}
		if (vctSide2.size() == 0 || vctSide1.size() == 0)
		{
			endBattle();
			return;
		}
	}

	void splitMoney(LivingThing thnStore, int money)
	{
		if (money == 0)
		{
			return;
		}
		if (thnStore.popup)
		{
			thnStore.send(""+(char)33+"You have lost "+money+" gp.\n");
		} else
		{
			thnStore.chatMessage("You have lost "+money+" gp.");
		}
		thnStore.cash -= money;
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
		LivingThing thnStore2;
		try
		{
/*
			for (i=0;i<vctStore.size();i++)
			{
				thnStore2 = (LivingThing)vctStore.elementAt(i);
// added  "|| thnStore2.isPet()"
				if (thnStore2.isPlayer() || thnStore2.isPet())
				{
					i2++;
				}
			}
			i2 = money/i2;
*/
			i2 = money/vctStore.size();
			for (i=0;i<vctStore.size();i++)
			{
				thnStore2 = (LivingThing)vctStore.elementAt(i);
				thnStore2.cash += i2;
				if (thnStore2.isPlayer() && i2 != 0)
				{
					thnStore2.chatMessage("\tYou get "+i2+" gp.");
				}
			}
		}catch(Exception e)
		{
			engGame.log.printError("splitMoney()", e);
		}
	}

	void splitExp(LivingThing thnStore, int exp)
	{
		if (thnStore.popup)
		{
			thnStore.send(""+(char)33+"You have lost "+exp+" exp.\n");
		} else
		{
			thnStore.chatMessage("You have lost "+exp+" exp.");
		}
		thnStore.exp -= exp;
		Vector vctStore;
		double tp,
				sidepoints=0;
		LivingThing thnFront;
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
		LivingThing thnStore2;

		tp=thnFront.getTotalPoints();
		thnFront.lngDamDone = 0;
		for (i=0;i<vctStore.size();i++)
		{
			thnStore2 = (LivingThing)vctStore.elementAt(i);
// added  "|| thnStore2.isPet()"
// and changed "thnStore.getTotalPoints()" to "thnStore2.getTotalPoints()"
//			if (thnStore2.isPlayer() || thnStore2.isPet())
//			{
				sidepoints += thnStore2.getTotalPoints();
//			}
		}
		try
		{
			for (i=0;i<vctStore.size();i++)
			{
				i2 = 0;
				thnStore2 = (LivingThing)vctStore.elementAt(i);
				if (!thnStore2.isMob())
				{
					if (thnStore2.lngDamDone > thnFront.maxhp)
					{
						thnStore2.lngDamDone = thnFront.maxhp;
					}
					i2 = (int)
					(engGame.expgainmod*
					((
					(tp/sidepoints)+
					(2*(thnStore2.lngDamDone/(double)thnFront.maxhp)*(tp/(double)thnStore2.getTotalPoints()))
					)/3));
					thnStore2.chatMessage("You get "+i2+" exp.");
					thnStore2.exp += i2;
				}
				thnStore2.lngDamDone = 0;
			}
		}catch(Exception e)
		{
			engGame.log.printError("splitExp()", e);
		}
	}
	
	void chatMessage(String strStore)
	{
		int i;
		LivingThing thnStore=null;
		String strStore2=null;
		if (!vctSide2.isEmpty())
		{
			thnStore = (LivingThing)vctSide2.elementAt(0);
			strStore2 = thnStore.strName+" has "+thnStore.getCharacterPoints()+"cp and "+thnStore.hp+"/"+thnStore.maxhp+"hp.";
		}
		for (i=0;i<vctSide1.size();i++)
		{
			thnStore = (LivingThing)vctSide1.elementAt(i);
			if (thnStore.isPlayer())
			{
				if (thnStore.popup)
				{
					if (strStore2 != null)
					{
						thnStore.send(""+(char)32+strStore2+"\n");
						thnStore.send(""+(char)33+strStore+"\n");
					}
				} else
				{
					thnStore.chatMessage(strStore);
				}
			}else if (thnStore.isPet())
			{
				if (thnStore.thnMaster.batBattle != thnStore.batBattle)
				{
					if (thnStore.thnMaster.popup)
					{
						if (strStore2 != null)
						{
							thnStore.thnMaster.send(""+(char)32+"From "+thnStore.strName+": "+strStore2+"\n");
							thnStore.thnMaster.send(""+(char)33+"From "+thnStore.strName+": "+strStore+"\n");
						}
					} else
					{
						thnStore.chatMessage(strStore);
					}
				}
			}
		}
		if (!vctSide1.isEmpty())
		{
			thnStore = (LivingThing)vctSide1.elementAt(0);
			strStore2 = thnStore.strName+" has "+thnStore.getCharacterPoints()+"cp and "+thnStore.hp+"/"+thnStore.maxhp+"hp.";
		}
		for (i=0;i<vctSide2.size();i++)
		{
			thnStore = (LivingThing)vctSide2.elementAt(i);
			if (thnStore.isPlayer())
			{
				if (thnStore.popup)
				{
					if (strStore2 != null)
					{
						thnStore.send(""+(char)32+strStore2+"\n");
						thnStore.send(""+(char)33+strStore+"\n");
					}
				} else
				{
					thnStore.chatMessage(strStore);
				}
			}else if (thnStore.isPet())
			{
				if (thnStore.thnMaster.batBattle != thnStore.batBattle)
				{
					if (thnStore.thnMaster.popup)
					{
						if (strStore2 != null)
						{
							thnStore.thnMaster.send(""+(char)32+"From "+thnStore.strName+": "+strStore2+"\n");
							thnStore.thnMaster.send(""+(char)33+"From "+thnStore.strName+": "+strStore+"\n");
						}
					} else
					{
						thnStore.chatMessage(strStore);
					}
				}
			}
		}
	}
	
	void checkCommands1()
	{
		int i;
		LivingThing thnStore;
		String strStore=null;
		for (i=0;i<vctSide1.size();i++)
		{
			thnStore = (LivingThing)vctSide1.elementAt(i);
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
		LivingThing thnStore;
		String strStore=null;
		for (i=0;i<vctSide2.size();i++)
		{
			thnStore = (LivingThing)vctSide2.elementAt(i);
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
		LivingThing thnStore;
		for (i=0;i<vctSide1.size();i++)
		{
			thnStore = (LivingThing)vctSide1.elementAt(i);
			if (thnStore.isPlayer())
			{
            	thnStore.updateInfo();
            	thnStore.updateStats();
			}
		}
		for (i=0;i<vctSide2.size();i++)
		{
			thnStore = (LivingThing)vctSide2.elementAt(i);
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
		LivingThing thnStore;
		LivingThing thnStore2;
		LivingThing thnTarget;
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
			thnStore = (LivingThing)vctSide1.elementAt(i);
			if (thnStore.isMob())
			{
				Mob mobStore = (Mob)thnStore;
				if (mobStore.strOnBattle != null)
				{
    				try
    				{
						Script scrOnBattle = new Script("scripts/"+mobStore.strOnBattle,engGame,false);
						scrOnBattle.varVariables.addVariable("trigger",(LivingThing)mobStore);
	    				scrOnBattle.runScript();
	    				scrOnBattle.close();
					}catch(Exception e)
					{
						engGame.log.printError("Battle.run():while running onBattle script \""+mobStore.strOnBattle+"\" for mob "+mobStore.strName, e);
					}
				}
			}
        	thnStore2 = (LivingThing)vctSide2.elementAt(0);
			range = Math.abs(thnStore.intLocX-thnStore2.intLocX)+Math.abs(thnStore.intLocY-thnStore2.intLocY);
			thnTarget = thnStore2;
			/*
				They are allowed to move until they are at a range of 1 or less with any target
			*/
			thnStore.blnCanMove = true;
			thnTarget.blnCanMove = true;
			if (range <= 1)
			{
				thnStore.blnCanMove = false;
				thnTarget.blnCanMove = false;
			}
        	for (int i2=1;i2<vctSide2.size();i2++)
        	{
        		thnStore2 = (LivingThing)vctSide2.elementAt(i2);
				rangestore = Math.abs(thnStore.intLocX-thnStore2.intLocX)+Math.abs(thnStore.intLocY-thnStore2.intLocY);
				if (rangestore < range)
				{
					range = rangestore;
					thnTarget = thnStore2;
				}
				/*
					They are allowed to move until they are at a range of 1 or less with any target
				*/
				thnStore2.blnCanMove = true;
				if (range <= 1)
				{
					thnStore.blnCanMove = false;
					thnStore2.blnCanMove = false;
				}
        	}
			/*
				End the battle if the closest target is off of the screen.
			*/
			if (range > engGame.viewrange)
			{
				endBattle();
				return;
			}
        	if (range > thnStore.getRangeWithBonus())
        	{
        		strStore = thnStore.strName + " is out of range.\n";
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
				strStore += ".";
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
			thnStore = (LivingThing)vctSide2.elementAt(i);
			if (thnStore.isMob())
			{
				Mob mobStore = (Mob)thnStore;
				if (mobStore.strOnBattle != null)
				{
    				try
    				{
						Script scrOnBattle = new Script("scripts/"+mobStore.strOnBattle,engGame,false);
						scrOnBattle.varVariables.addVariable("trigger",(LivingThing)mobStore);
	    				scrOnBattle.runScript();
	    				scrOnBattle.close();
					}catch(Exception e)
					{
						engGame.log.printError("Battle.run():while running onBattle script \""+mobStore.strOnBattle+"\" for mob "+mobStore.strName, e);
					}
				}
			}

        	thnStore2 = (LivingThing)vctSide1.elementAt(0);
			range = Math.abs(thnStore.intLocX-thnStore2.intLocX)+Math.abs(thnStore.intLocY-thnStore2.intLocY);
			thnTarget = thnStore2;
			/*
				They are allowed to move until they are at a range of 1 or less with any target
			*/
			thnStore.blnCanMove = true;
			thnTarget.blnCanMove = true;
			if (range <= 1)
			{
				thnStore.blnCanMove = false;
				thnTarget.blnCanMove = false;
			}
        	for (int i2=1;i2<vctSide1.size();i2++)
        	{
        		thnStore2 = (LivingThing)vctSide1.elementAt(i2);
				rangestore = Math.abs(thnStore.intLocX-thnStore2.intLocX)+Math.abs(thnStore.intLocY-thnStore2.intLocY);
				if (rangestore < range)
				{
					range = rangestore;
					thnTarget = thnStore2;
				}
				/*
					They are allowed to move until they are at a range of 1 or less with any target
				*/
				thnStore2.blnCanMove = true;
				if (range <= 1)
				{
					thnStore.blnCanMove = false;
					thnStore2.blnCanMove = false;
				}
        	}
			/*
				End the battle if the closest target is off of the screen.
			*/
			if (range > engGame.viewrange)
			{
				endBattle();
				return;
			}
        	if (range > thnStore.getRangeWithBonus())
        	{
        		strStore = thnStore.strName + " is out of range.\n";
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
				strStore += ".";
			}
			chatMessage("\t"+strStore);
		}
		
		if (thnFront2.hp < 1 || !thnFront2.blnWorking)
		{
			vctSide2.removeElementAt(0);
			thnFront2.clearFlags();
			for (int i2=0;i2<vctSide1.size();i2++)
			{
				thnStore2 = (LivingThing)vctSide1.elementAt(i2);
				thnStore2.updateFlag(thnFront2.ID,0);
			}
			for (int i2=0;i2<vctSide2.size();i2++)
			{
				thnStore2 = (LivingThing)vctSide2.elementAt(i2);
				thnStore2.updateFlag(thnFront2.ID,0);
			}
			if (thnFront2.isPlayer())
			{
				thnFront2.removeFromGroup();
				chatMessage("\t"+thnFront2.strName+" is killed.");
				if (thnFront2.popup)
				{
					thnFront2.send(""+(char)33+"\tYou have died.\n");
				} else
				{
					thnFront2.chatMessage("\tYou have died.");
				}
				splitMoney(thnFront2, (int)(thnFront2.cash*engGame.gplosemod));
				splitExp(thnFront2, (int)(thnFront2.exp*engGame.explosemod));
				thnFront2.batBattle = null;
				thnFront2.bytSide = 0;
				thnFront2.blnCanMove=true;
            	thnFront2.updateInfo();
            	thnFront2.updateStats();
            	thnFront2.updateActions();
            	thnFront2.playMusic(0);
				engGame.chatMessage(thnFront2.strName+" has been killed by "+thnFront1.strName,"default");
				if (engGame.scrOnDeath != null && thnFront2.blnWorking)
				{
					engGame.scrOnDeath.varVariables.clearVariables();
					engGame.scrOnDeath.varVariables.addVariable("trigger",thnFront2);
					engGame.scrOnDeath.varVariables.addVariable("killer",thnFront1);
					engGame.scrOnDeath.runScript();
				}
				if (thnFront2.thnFollowing != null && thnFront2.thnFollowing.isPet())
				{
					vctSide2.removeElement(thnFront2.thnFollowing);
					for (int i2=0;i2<vctSide1.size();i2++)
					{
						thnStore2 = (LivingThing)vctSide1.elementAt(i2);
						thnStore2.updateFlag(thnFront2.thnFollowing.ID,0);
					}
					for (int i2=0;i2<vctSide2.size();i2++)
					{
						thnStore2 = (LivingThing)vctSide2.elementAt(i2);
						thnStore2.updateFlag(thnFront2.thnFollowing.ID,0);
					}
					thnFront2.thnFollowing.batBattle = null;
					thnFront2.thnFollowing.bytSide = 0;
					thnFront2.blnCanMove=true;
					thnFront2.thnFollowing.lngDamDone = 0;
					thnFront2.thnFollowing.changeLocBypass(thnFront2.intLocX,thnFront2.intLocY); 
				}
			}else if (thnFront2.isMob())
			{
				Mob mobStore = (Mob)thnFront2;
				chatMessage("\t"+thnFront2.strName+" is killed.");
				splitMoney(thnFront2, (int)(thnFront2.cash));
				splitExp(thnFront2, 0);
				if (mobStore.blnOneUse)
				{
					engGame.vctMobs.removeElement(mobStore);
					engGame.removeDuskObject(mobStore);
				}else
				{
					engGame.removeDuskObject(mobStore);
					mobStore.intLocX = -6;
					mobStore.intLocY = -6;
					mobStore.hp = engGame.mobrespawnspeed;//seconds till respawn
					mobStore.batBattle = null;
					mobStore.bytSide = 0;
					mobStore.blnCanMove=true;
				}
				for (int i2=0;i2<vctSide1.size();i2++)
				{
					thnStore2 = (LivingThing)vctSide1.elementAt(i2);
					if (!thnStore2.isPet())
					{
						try
						{
							mobStore.fctFaction.killedBy(mobStore,thnStore2);
						}catch(Exception e)
						{
							engGame.log.printError("Battle.run():While updating faction for mob "+mobStore.strName, e);
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
								thnFront1.chatMessage("You got a "+gitStore.strItemName+".");
								thnFront1.vctItems.addElement(itmStore);
 								if (itmStore.strOnGetScript != null)
								{
									try
									{
										Script scrStore = new Script("scripts/"+itmStore.strOnGetScript,engGame,false);
										scrStore.varVariables.addVariable("trigger",thnFront1);
										scrStore.varVariables.addVariable("itemname",itmStore.strName);
										scrStore.varVariables.addVariable("mod",itmStore.intMod);
										scrStore.runScript();
										scrStore.close();
									}catch(Exception e)
									{
										engGame.log.printError("Battle.run():While running onGet script("+itmStore.strOnGetScript+") for item \""+itmStore.strName+"\"", e);
									}
								}
								thnFront1.updateItems();
							}
						}
					}
				}
			}else if (thnFront2.isPet())
			{
				chatMessage("\t"+thnFront2.strName+" is wounded.");
				thnFront2.chatMessage("\tYou have been wounded.");
				splitMoney(thnFront2, (int)(thnFront2.cash*engGame.gplosemod));
				splitExp(thnFront2, (int)(thnFront2.exp*engGame.explosemod));
				thnFront2.batBattle = null;
				thnFront2.bytSide = 0;
				thnFront2.blnCanMove=true;
			}
			if (!vctSide2.isEmpty())
			{
				thnFront2 = (LivingThing)vctSide2.elementAt(0);
			}
		}
		if (thnFront1.hp < 1 || !thnFront1.blnWorking)
		{
			vctSide1.removeElementAt(0);
			thnFront1.clearFlags();
			for (int i2=0;i2<vctSide1.size();i2++)
			{
				thnStore2 = (LivingThing)vctSide1.elementAt(i2);
				thnStore2.updateFlag(thnFront1.ID,0);
			}
			for (int i2=0;i2<vctSide2.size();i2++)
			{
				thnStore2 = (LivingThing)vctSide2.elementAt(i2);
				thnStore2.updateFlag(thnFront1.ID,0);
			}
			if (thnFront1.isPlayer())
			{
				thnFront1.removeFromGroup();
				chatMessage("\t"+thnFront1.strName+" is killed.");
				if (thnFront1.popup)
				{
					thnFront1.send(""+(char)33+"\tYou have died.\n");
				} else
				{
					thnFront1.chatMessage("\tYou have died.");
				}
				splitMoney(thnFront1, (int)(thnFront1.cash*engGame.gplosemod));
				splitExp(thnFront1, (int)(thnFront1.exp*engGame.explosemod));
				thnFront1.batBattle = null;
				thnFront1.bytSide = 0;
				thnFront1.blnCanMove=true;
            	thnFront1.updateInfo();
            	thnFront1.updateStats();
            	thnFront1.updateActions();
            	thnFront1.playMusic(0);
				engGame.chatMessage(thnFront1.strName+" has been killed by "+thnFront2.strName,"default");
				if (engGame.scrOnDeath != null && thnFront1.blnWorking)
				{
					engGame.scrOnDeath.varVariables.clearVariables();
					engGame.scrOnDeath.varVariables.addVariable("trigger",thnFront1);
					engGame.scrOnDeath.varVariables.addVariable("killer",thnFront2);
					engGame.scrOnDeath.runScript();
				}
				if (thnFront1.thnFollowing != null && thnFront1.thnFollowing.isPet())
				{
					vctSide1.removeElementAt(0);
					for (int i2=0;i2<vctSide1.size();i2++)
					{
						thnStore2 = (LivingThing)vctSide1.elementAt(i2);
						thnStore2.updateFlag(thnFront1.thnFollowing.ID,0);
					}
					for (int i2=0;i2<vctSide2.size();i2++)
					{
						thnStore2 = (LivingThing)vctSide2.elementAt(i2);
						thnStore2.updateFlag(thnFront1.thnFollowing.ID,0);
					}
					thnFront1.thnFollowing.batBattle = null;
					thnFront1.thnFollowing.bytSide = 0;
					thnFront1.blnCanMove=true;
					thnFront1.thnFollowing.lngDamDone = 0;
					thnFront1.thnFollowing.changeLocBypass(thnFront1.intLocX,thnFront1.intLocY);
				}
			}else if (thnFront1.isMob())
			{
				Mob mobStore = (Mob)thnFront1;
				chatMessage("\t"+mobStore.strName+" is killed.");
				splitMoney(thnFront1, (int)(thnFront1.cash));
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
					mobStore.hp = engGame.mobrespawnspeed;//seconds till respawn
					mobStore.batBattle = null;
					mobStore.bytSide = 0;
					mobStore.blnCanMove=true;
				}
				for (int i2=0;i2<vctSide2.size();i2++)
				{
					thnStore2 = (LivingThing)vctSide2.elementAt(i2);
					if (!thnStore2.isPet())
					{
						try
						{
							mobStore.fctFaction.killedBy(mobStore,thnStore2);
						}catch(Exception e)
						{
							engGame.log.printError("Battle.run():While updating faction for mob "+mobStore.strName, e);
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
								thnFront2.chatMessage("You got a "+gitStore.strItemName+".");
								thnFront2.vctItems.addElement(itmStore);
 								if (itmStore.strOnGetScript != null)
								{
									try
									{
										Script scrStore = new Script("scripts/"+itmStore.strOnGetScript,engGame,false);
										scrStore.varVariables.addVariable("trigger",thnFront2);
										scrStore.varVariables.addVariable("itemname",itmStore.strName);
										scrStore.varVariables.addVariable("mod",itmStore.intMod);
										scrStore.runScript();
										scrStore.close();
									}catch(Exception e)
									{
										engGame.log.printError("Battle.run():While running onGet script("+itmStore.strOnGetScript+") for item \""+itmStore.strName+"\"", e);
									}
								}
								thnFront2.updateItems();
							}
						}
					}
				}
			}else if (thnFront1.isPet())
			{
				chatMessage("\t"+thnFront1.strName+" is wounded.");
				thnFront1.chatMessage("\tYou have been wounded.");
				splitMoney(thnFront1, (int)(thnFront1.cash*engGame.gplosemod));
				splitExp(thnFront1, (int)(thnFront1.exp*engGame.explosemod));
				thnFront1.batBattle = null;
				thnFront1.bytSide = 0;
				thnFront1.blnCanMove=true;
			}
			if (!vctSide1.isEmpty())
			{
				thnFront1 = (LivingThing)vctSide1.elementAt(0);
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
