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
import java.util.Random;
import java.lang.Math;


/**
*a Faction represents a group of mobs.
*
*@author Tom Weingarten
*/
public class Faction
{
	String strName;
	Vector vctRelations;
	DuskEngine engGame;
	boolean blnHasChanged=false;
	
	public Faction(String inName, DuskEngine inGame)
	{
		strName = inName;
		engGame = inGame;
		vctRelations = new Vector(0);
		parseFactionData();
	}
	
	void parseFactionData()
	{
		RandomAccessFile rafFile=null;
		try
		{
			rafFile = new RandomAccessFile("factions/"+strName,"r");
			String strStore = rafFile.readLine();
			while (!(strStore == null || strStore.equals(".")))
			{
				if (strStore.equalsIgnoreCase("relation"))
				{
					vctRelations.addElement(new Relation(rafFile.readLine().toLowerCase(),Double.valueOf(rafFile.readLine()).doubleValue()));
				}
				strStore = rafFile.readLine();
			}
			rafFile.close();
		}catch (Exception e)
		{
			engGame.log.printError("parseFactionData()", e);
		}
	}
	
	synchronized void saveFactionData()
	{
		/*
		** Only save faction data if it has changed.
		*/
		if (!blnHasChanged)
		{
			return;
		}
		int i;
		RandomAccessFile rafFile;
		try
		{
			rafFile = new RandomAccessFile("factions/"+strName,"rw");
			Relation relStore;
			for (i=0;i<vctRelations.size();i++)
			{
				relStore = (Relation)vctRelations.elementAt(i);
				rafFile.writeBytes("relation\n"+relStore.strName.toLowerCase()+"\n"+relStore.dblLevel+"\n");
			}
			rafFile.writeBytes(".\n");
			rafFile.close();
		}catch (Exception e)
		{
			engGame.log.printError("saveFactionData()", e);
		}
		blnHasChanged = false;
	}
	
	double getRelationValue(String strName)
	{
		Relation relStore;
		for (int i=0;i<vctRelations.size();i++)
		{
			relStore = (Relation)vctRelations.elementAt(i);
			if (strName.equalsIgnoreCase(relStore.strName))
			{
				if(i>100)
				{
					vctRelations.removeElementAt(i);
					vctRelations.insertElementAt(relStore,0);
				}
				return relStore.dblLevel;
			}
		}
		return 0; //if no set relation, impartial
	}
	
	Relation getRelation(String strName)
	{
		Relation relStore;
		for (int i=0;i<vctRelations.size();i++)
		{
			relStore = (Relation)vctRelations.elementAt(i);
			if (strName.equalsIgnoreCase(relStore.strName))
			{
				if(i>100)
				{
					vctRelations.removeElementAt(i);
					vctRelations.insertElementAt(relStore,0);
				}
				return relStore;
			}
		}
		return null;
	}
	
	void killedBy(LivingThing thnStore,LivingThing thnAttacker)
	{
		if (engGame.blnAI)
		{
			double dblOldLevel;
			Relation relStore = getRelation(thnAttacker.strName);
			if (relStore == null)
			{
				relStore = new Relation(thnAttacker.strName,0);
				vctRelations.addElement(relStore);
				dblOldLevel = 2;
			} else {
				dblOldLevel = relStore.dblLevel;
			}
			int delta = thnAttacker.getCharacterPoints()-thnStore.getCharacterPoints();
			/*	Uses an optimized form of the function:
				((1.03^delta) + (1.03^-delta)) / (2 + (1.03^delta) + (1.03^-delta))
			*/
			if (delta == 0)
			{
				relStore.dblLevel -= (.5)*(1D+relStore.dblLevel);
			}else if (delta > 0)
			{
				relStore.dblLevel -= (( ((Math.pow(1.03,delta))/(Math.pow(1.03,delta)+2)))/2)*(1+relStore.dblLevel);
			}else
			{
				relStore.dblLevel -= ((Math.pow(1.03,(-1*delta))/(Math.pow(1.03,(-1*delta))+2))/2)*(1+relStore.dblLevel);
			}
			if (!(thnAttacker.strClan == null || thnAttacker.strClan.equals("none")))
			{
				relStore = getRelation(thnAttacker.strClan);
				if (relStore == null)
				{
					relStore = new Relation(thnAttacker.strClan,0);
					vctRelations.addElement(relStore);
				}
				if (delta == 0)
				{
					relStore.dblLevel -= (.5)*(1+relStore.dblLevel);
				}else if (delta > 0)
				{
					relStore.dblLevel -= ((((Math.pow(1.03,delta))/(Math.pow(1.03,delta)+1))+1)/2)*(1+relStore.dblLevel);
				}else
				{
					relStore.dblLevel -= ((((Math.pow(1.03,(-1*delta)))/(Math.pow(1.03,(-1*delta)+1)))+1)/2)*(1+relStore.dblLevel);
				}	
			}
			if (relStore.dblLevel != dblOldLevel)
			{
				blnHasChanged = true;
			}
		}
	}
	
	void runAI(Mob thnStore)
	{
		if (!engGame.blnAI)
		{
			thnStore.blnCanSeePlayer=false;
			return;
		}

		//Battle AI (inside Battle class)
		if (thnStore.batBattle != null)
		{
			return;
		}
		
		//Default AI
		int intConfidence=0;
		int x,
			x1,
			y,
			y1,
			yStart;
		DuskObject objStore;
		LivingThing thnStore2,
					thnEnemy=null;
		Mob mobStore;
		double dblStore,
				dblEnemy=0;
		boolean blnCanSee;
		x = thnStore.intLocX - engGame.viewrange + 1;
		x1 = thnStore.intLocX + engGame.viewrange - 1;
		if (x < 0) {
			x=0;
		}
		if (x1 > (engGame.MapColumns-1)) {
			x1=engGame.MapColumns-1;
		}
		y = thnStore.intLocY - engGame.viewrange + 1;
		y1 = thnStore.intLocY + engGame.viewrange - 1;
		if (y < 0) {
			y=0;
		}
		if (y1 > (engGame.MapRows-1)) {
			y1=engGame.MapRows-1;
		}
		yStart=y;
		boolean blnCanReallySeePlayer = false;
		for (;x<=x1;x++)
		{
			for (y=yStart;y<=y1;y++)
			{
				objStore = engGame.objEntities[x][y];
				while (objStore != null)
				{
					if (objStore.isLivingThing())
					{
						thnStore2 = (LivingThing)objStore;
						if (engGame.scrCanSeeLivingThing != null)
						{
							synchronized(engGame.scrCanSeeLivingThing)
							{
								engGame.scrCanSeeLivingThing.varVariables.clearVariables();
								engGame.scrCanSeeLivingThing.varVariables.addVariable("seeing",thnStore);
								engGame.scrCanSeeLivingThing.varVariables.addVariable("seen",thnStore2);
								blnCanSee = engGame.scrCanSeeLivingThing.rewindAndParseScript();
							}
						}else
							blnCanSee=true;
						if (blnCanSee && engGame.canSeeTo(thnStore,thnStore2.intLocX,thnStore2.intLocY))
						{
							if (thnStore2.isPlayer())
							{
								blnCanReallySeePlayer = true;
								dblStore = getRelationValue(thnStore2.strName);
								if (!(thnStore2.strClan == null || thnStore2.strClan.equals("none")))
								{
									dblStore = (dblStore+getRelationValue(thnStore2.strClan))/2;
								}
								if (dblStore < 0)
								{
									if (thnEnemy == null)
									{
										thnEnemy = thnStore2;
										dblEnemy = dblStore;
									}else
									{
										if (dblEnemy<dblStore)
										{
											thnEnemy = thnStore2;
											dblEnemy = dblStore;
										}
									}
								}
								intConfidence += dblStore*thnStore2.getTotalPoints();
							}
							if (thnStore2.isMob())
							{
								mobStore = (Mob)thnStore2;
								if (mobStore.strName.equals(thnStore.strName))
									dblStore = mobStore.dblGroupRelation;
								else
									dblStore = getRelationValue(mobStore.strName);
								intConfidence += dblStore*mobStore.getTotalPoints();
								if (dblStore < 0)
								{
									if (thnEnemy == null)
									{
										thnEnemy = mobStore;
										dblEnemy = dblStore;
									}else
									{
										if (dblEnemy>dblStore)
										{
											thnEnemy = mobStore;
											dblEnemy = dblStore;
										}
									}
								}
								intConfidence += dblStore*thnStore2.getTotalPoints();
							}
						}
					}
					objStore = objStore.objNext;
				}
			}
		}
		if (!blnCanReallySeePlayer)
		{
			thnStore.blnCanSeePlayer=false;
			return;
		}
		thnStore.blnCanSeePlayer=true;
		if (thnEnemy != null)
		{
			double delta = (thnStore.getTotalPoints()+intConfidence)*thnStore.dblBravery*-1*dblEnemy;
			int enemycp = thnEnemy.getTotalPoints();
			//Fight/flee
			if (enemycp < delta)
			{
				if (enemycp > delta-(delta*0.1*Math.random()))
				{
					return;
				}
				//Fight
				if (Math.abs(thnEnemy.intLocX-thnStore.intLocX)+Math.abs(thnEnemy.intLocY-thnStore.intLocY)<=thnStore.getRangeWithBonus())
				{
					// close enough to attack, so stop moving
					synchronized(thnStore.vctMovement)
					{
	        			thnStore.vctMovement.removeAllElements();
					}
					try
					{
						Commands.parseCommand(thnStore, engGame, "a "+thnEnemy.strName);
					} catch (Exception e)
					{
						engGame.log.printError("runAI():"+thnStore.strName + " had an error attacking "+thnEnemy.strName, e);
					}
				}else
				{
					thnStore.goTo(thnEnemy.intLocX, thnEnemy.intLocY);
					synchronized(thnStore.vctMovement)
					{
						// Don't move onto the player's tile
	        			thnStore.vctMovement.removeElement(thnStore.vctMovement.lastElement());
					}
				}
			}else
			{
				if (enemycp < delta+(delta*0.1*Math.random()))
				{
					return;
				}
				//Flee
				int destX;
				int destY;
				if (thnEnemy.intLocX > thnStore.intLocX)
				{
					destX = thnStore.intLocX - engGame.viewrange;
				} else {
					destX = thnStore.intLocX + engGame.viewrange;
				}
				if (thnEnemy.intLocY > thnStore.intLocY)
				{
					destY = thnStore.intLocY - engGame.viewrange;
				} else {
					destY = thnStore.intLocY + engGame.viewrange;
				}
				thnStore.goTo(destX, destY);
			}
		}
		
		//If no enemies
		if ((int)(Math.random()*25)==1)
		{	
			if ((int)(Math.random()*2)==1)
			{
				if ((int)(Math.random()*2)==1)
				{
					thnStore.moveE();
				}else
				{
					thnStore.moveW();
				}
			}else
			{
				if ((int)(Math.random()*2)==1)
				{
					thnStore.moveS();
				}else
				{
					thnStore.moveN();
				}
			}
		}
	}
}

/**
*a Relation represents a feeling held by one faction
*for another faction, a player, or a clan. The mob AI
*bases it's decisions around Relations.
*
*@author Tom Weingarten
*/
class Relation
{
	String strName;
	double dblLevel=0; //-1 to 1
	
	Relation(String inName, double inLevel)
	{
		strName = inName;
		dblLevel = inLevel;
	}
}
