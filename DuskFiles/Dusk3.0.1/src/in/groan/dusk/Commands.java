package in.groan.dusk;

import in.groan.dusk.action.Sign;
import in.groan.dusk.db.Privs;
import in.groan.dusk.object.Merchant;
import in.groan.dusk.object.PlayerMerchant;
import in.groan.dusk.object.Prop;
import in.groan.dusk.object.entity.Entity;
import in.groan.dusk.object.entity.Mob;
import in.groan.dusk.object.itm.Item;
import in.groan.dusk.util.LifoQueue;
import in.groan.dusk.util.Log;

import java.io.*;
import java.util.Date;
import java.util.Vector;
import java.util.Iterator;
import java.util.StringTokenizer;

/**
 * 
*June 30th 2011
*Dusk Server 3.0.1
*@author Louis Agoglia <louis.agoglia@gmail.com>, Lee Templeton (Lone Wolf)
*
*Version 3.0.1 Commands will be stored via DB
 */
public class Commands {
	public static String parseCommand(Entity ent, DuskEngine engGame, String strStore) throws Exception {
		if (strStore == null)
			return null;
		if (ent == null)
			return null;
		if (engGame == null)
			return null;

		String strCommand=null;
		String strArgs=null;

		int intIndex = strStore.indexOf(" ");
		if (intIndex == -1)
		{
			strCommand = strStore.toLowerCase();
		}else
		{
			strCommand = strStore.substring(0, intIndex).toLowerCase();
			strArgs = strStore.substring(intIndex+1).trim();
		}

		ent.BLN_CONT_TO_CMD = true;
		boolean blnFoundScriptedCommand=false;
		try
		{
			Script scrStore = new Script("commands/"+strCommand,engGame,false);
			scrStore.varVariables.addVariable("trigger",ent);
			if (strArgs != null) {
				scrStore.runScript(strArgs);
			} else {
				scrStore.runScript();
			}
			scrStore.close();
			blnFoundScriptedCommand=true;
		} catch (Exception e) {blnFoundScriptedCommand=false;}
		if (!ent.BLN_CONT_TO_CMD) {
			return null;
		}
		if (strCommand.equals("north") || strCommand.equals("n")) {
			if (ent.MASTER != null) {
				return "You can't move while you're following someone.";
			}
			synchronized(ent.vctMovement) {
    			ent.vctMovement.removeAllElements();
    			ent.vctMovement.addElement("n");
			}
		    return null;
	    }
		if (strCommand.equals("south") || strCommand.equals("s")) {
			if (ent.MASTER != null) {
				return "You can't move while you're following someone.";
			}
			synchronized(ent.vctMovement) {
	    		ent.vctMovement.removeAllElements();
				ent.vctMovement.addElement("s");
			}
		    return null;
	    }
		if (strCommand.equals("west") || strCommand.equals("w")) {
			if (ent.MASTER != null)
			{
				return "You can't move while you're following someone.";
			}
			synchronized(ent.vctMovement)
			{
	    		ent.vctMovement.removeAllElements();
				ent.vctMovement.addElement("w");
			}
		    return null;
	    }
		if (strCommand.equals("east") || strCommand.equals("e"))
		{
			if (ent.MASTER != null)
			{
				return "You can't move while you're following someone.";
			}
			synchronized(ent.vctMovement)
			{
	    		ent.vctMovement.removeAllElements();
				ent.vctMovement.addElement("e");
			}
		    return null;
	    }
	    
	    if(strCommand.equals("goto"))
   		{
			int destX;
			int destY;
			try
			{
   				destX = Integer.parseInt(strArgs.substring(0, strArgs.lastIndexOf(' ')));
    			destY = Integer.parseInt(strArgs.substring(strArgs.lastIndexOf(' ') + 1));
    		}catch(Exception e)
    		{
				engGame.LOG.printError("parseCommand():"+ent.NAME+" tried to "+strStore, e);
    			return null;
    		}
			return ent.goTo(destX, destY);
		}

   		if (ent.PRIVS.toInt(ent.PRIVS) > 1)
   		{
   			if (strCommand.equals("addmember"))
   			{
   				if (strArgs==null)
				{
					return "Add who?";
				}
				Entity thnStore = engGame.getPlayer(strArgs);
				if (thnStore == null)
				{
					return "They're not in this world";
				}
				if (ent.BATTLE != null)
				{
					return "Not while you're fighting!";			
				}
				if (thnStore.BATTLE != null)
				{
					thnStore.chatMessage(ent.NAME+" has invited you to join their clan, but you are in the middle of a battle\n");
					return "They're in the middle of a battle. They have been notified that you tried to clan them.";
				}
				ent.chatMessage("You have invited "+thnStore.NAME+" to join the clan "+ent.GUILD+".\n");
				thnStore.halt();
				thnStore.stillThere();  // This puts something in the buffer
				thnStore.stillThere();  // Have to do this twice to ensure that thnStore is out of
										// its read loop
				ent.THR_CONN.sleep(500);  // wait for the "notdead" response to get back from client.
				try
				{
					// Empty out the BufferedReader for the answer
					while (thnStore.BUF_SCK_IN.ready()) thnStore.BUF_SCK_IN.read();
				} catch (Exception e)
				{
					engGame.LOG.printError("parseCommand():While "+ent.NAME+" was trying to addmember "+thnStore.NAME, e);
				}
				thnStore.chatMessage(ent.NAME+" has invited you to join the clan "+ent.GUILD+". If you accept, type yes.\n");
				try
				{
					if (thnStore.BUF_SCK_IN.readLine().equalsIgnoreCase("yes"))
					{
						thnStore.GUILD = ent.GUILD;
						if (thnStore.PRIVS.toInt(thnStore.PRIVS) == 1)
							thnStore.PRIVS = Privs.GUILDLDR;
						thnStore.chatMessage("You have been added to the clan, "+ent.GUILD+"\n");
						thnStore.proceed();
						engGame.removeDuskObject(thnStore);
						engGame.addDuskObject(thnStore);
						return thnStore.NAME+" has accepted your invitation.";
					}
				} catch (Exception e)
				{
					engGame.LOG.printError("parseCommand():While reading the answer to "+ent.NAME+"'s attempt to addmember "+thnStore.NAME, e);
				}
				thnStore.proceed();
				return thnStore.NAME+" has declined your invitation.";
   			}
   			if (strCommand.equals("kick"))
   			{
   				if (strArgs==null)
				{
					return "Kick who?";
				}
				Entity thnStore = engGame.getPlayer(strArgs);
				if (thnStore == null)
				{
					return "They're not in this world.";
				}
				if (!thnStore.GUILD.equalsIgnoreCase(ent.GUILD))
				{
					return "They're not in your clan.";
				}
				thnStore.chatMessage("You have been kicked out of "+ent.GUILD+".\n");
				thnStore.GUILD = "none";
				engGame.removeDuskObject(thnStore);
				engGame.addDuskObject(thnStore);
				return thnStore.NAME+" has been kicked out of your clan.";
   			}
   		}
		if (ent.PRIVS.toInt(ent.PRIVS) > 3)
		{
			if (ent.PRIVS.toInt(ent.PRIVS) == 4)
			{
				if (strCommand.equals("makegod"))
				{
					engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
					if (strArgs == null)
					{
						return "Make who a god?";
					}
					int iSPloc = strArgs.indexOf(" ");
					if (iSPloc<0)
					{
						return "Make them what level of a god?";
					}
					String sName = strArgs.substring(0,iSPloc).trim();
					Privs level = Privs.parseInt(strArgs.substring(iSPloc).trim());

					Entity thnStore = engGame.getPlayer(sName);
					if (thnStore == null)
					{
					  return "They're not in this world.";
					}
					Privs oldLevel = thnStore.PRIVS;
					thnStore.PRIVS = level;
					thnStore.BLN_SAVE_FLAG = true;
					engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":Changed "+thnStore.NAME+"'s priveledges from "+oldLevel+" to "+level+".");
					return thnStore.NAME+"'s priveledges have been set to "+level+".";
				}
				if (strCommand.equals("reloadprefs"))
				{
					engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
					engGame.loadPrefs();
					return "Preferences reloaded";
				}
		        if (strCommand.equals("resizemap"))
		        {
					engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
					engGame.resizeMap(ent.intLocX+1,ent.intLocY+1);
					return "Map resized";
				}else if (strCommand.equals("shutdown"))
				{
					engGame.LOG.printMessage(Log.ALWAYS,ent.NAME+" has shut down the server.");
					engGame.chatMessage("The server is going down.","default");
					engGame.BLN_SHUTDOWN = true;
					Entity thnStore=null;
					for (int i=0;i < engGame.vctSockets.size();i++)
					{
						try
						{
							thnStore = (Entity)engGame.vctSockets.elementAt(i);
							if (thnStore != ent)
							{
								thnStore.close();
							}
						}catch (Exception e)
						{
							if (thnStore != null)
							{
								engGame.LOG.printError("parseCommand():While trying to close "+thnStore.NAME+" for "+ent.NAME+"'s shutdown request", e);
							} else
							{
								engGame.LOG.printError("parseCommand():While trying to close a null player for "+ent.NAME+"'s shutdown request", e);
							}
						}
					}
					ent.BLN_SAVE_FLAG = true;
					ent.savePlayer();
					System.gc();
					System.exit(0);
				}else if (strCommand.equals("stop"))
				{
					engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
					engGame.BLN_SHUTDOWN = true;
					return "Stopped accepting incoming socket connections.";
				}else if (strCommand.equals("start"))
				{
					engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
					engGame.BLN_SHUTDOWN = false;
					return "Started accepting incoming connections";
				}else if (strCommand.equals("filteron"))
				{
					engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
					engGame.BLN_IPF = true;
					return "Started filtering duplicate IP addressess of socket connections.";
				}else if (strCommand.equals("filteroff"))
				{
					engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
					engGame.BLN_IPF = false;
					return "Stopped filtering duplicate IP addressess of socket connections.";
				}else if (strCommand.equals("FLOOD_LIMIT"))
				{
					engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
               		if (strArgs == null)
               		{
                   		return "What value do you want the FLOOD_LIMIT to have?";
               		}
					try
					{
						engGame.FLOOD_LIMIT = (long)Integer.parseInt(strArgs);
						return "Set FLOOD_LIMIT to "+strArgs+" milliseconds.";
					} catch (Exception e)
					{
						engGame.LOG.printError("parseCommand():Invalid value \""+strArgs+"\" for FLOOD_LIMIT.", e);
						return "Invalid value \""+strArgs+"\" for FLOOD_LIMIT.";
					}
				}else if (strCommand.equals("ipban"))
				{
					String strBlockedIP;
					if (strArgs == null)
					{
						return "Whos IP address do you wish to ban?";
					}
					Entity thnStore = engGame.getPlayer(strArgs);
					if (thnStore == null)
					{
						return "They're not in this world.";
					}
					engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
					String strIP = thnStore.SCK_CONN.getInetAddress().toString();
					int i = strIP.indexOf("/");
					strIP = strIP.substring(i+1,strIP.length());
					try
					{
						RandomAccessFile rafBannedIP = new RandomAccessFile("conf/blockedIP","r");
						strBlockedIP = rafBannedIP.readLine();
						while (strBlockedIP != null)
						{
							if (strIP.indexOf(strBlockedIP) != -1)
							{
					//			ent.rafFile.close();
								return "Already blocked.";
							}
					//		strBlockedIP = ent.rafFile.readLine();
						}
					//	ent.rafFile.close();
						rafBannedIP = new RandomAccessFile("conf/blockedIP","rw");
						rafBannedIP.seek(rafBannedIP.length());
						rafBannedIP.writeBytes(strIP+"\n");
					//	ent.rafFile.close();
						return thnStore.NAME+"'s IP address has been blocked.";
					} catch (Exception e)
					{
						engGame.LOG.printError("parseCommand():When "+ent.NAME+" tried to ban "+thnStore+"'s IP address", e);
					}
				}else if (strCommand.equals("loglevel"))
				{
					engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
					if (strArgs == null)
					{
						return "Logging level is currently "+engGame.LOG.getLogLevel();
					}
					try
					{
						int level = Integer.parseInt(strArgs);
						engGame.LOG.setLogLevel(level);
						return "Logging level is now "+engGame.LOG.getLogLevel();
					} catch (Exception e)
					{
						engGame.LOG.printError("parseCommand():Invalid value \""+strArgs+"\" for loglevel.", e);
						return "Invalid value \""+strArgs+"\" for loglevel.";
					}
				}else if (strCommand.equals("gc"))
				{
					engGame.LOG.printMessage(Log.INFO,"Starting garbage collection.");
					System.gc();
					engGame.LOG.printMessage(Log.INFO,"Finished garbage collection.");
					return "Finished garbage collection.";
				}else if (strCommand.equals("finalize"))
				{
					engGame.LOG.printMessage(Log.INFO,"Starting finalization.");
					System.runFinalization();
					engGame.LOG.printMessage(Log.INFO,"Finished finalization.");
					return "Finished finalization.";
				}else if (strCommand.equals("cleanup"))
				{
					DuskObject objStore;
					Entity thnStore;
					engGame.LOG.printMessage(Log.INFO,"Starting cleanup.");
					for(int x=0;x<engGame.MapColumns;x++)
					{
						for(int y=0;y<engGame.MapRows;y++)
						{
							objStore = engGame.objEntities[x][y];
							while (objStore != null)
							{
								if (objStore.isLivingThing())
								{
									thnStore = (Entity)objStore;
									if (thnStore.isPlayer())
									{
										if(!engGame.vctSockets.contains(thnStore))
										{
											engGame.LOG.printMessage(Log.INFO,"**found defunct player at "+x+","+y+" during cleanup.");
											engGame.removeDuskObject(thnStore);
											thnStore.BATTLE=null;
											thnStore.BLN_STOP_THR=true;
										}
									}
									if (thnStore.isPet())
									{
										if(!engGame.vctPets.contains(thnStore))
										{
											engGame.LOG.printMessage(Log.INFO,"**found defunct pet at "+x+","+y+" during cleanup.");
											engGame.removeDuskObject(thnStore);
										}
									}
								}
								objStore = objStore.objNext;
							}
						}
					}
					engGame.LOG.printMessage(Log.INFO,"Finished cleanup.");
					return "Finished cleanup.";
				}
			}
			if (strCommand.equals("save"))
			{
				if (engGame.BLN_SAVING)
					return "Game already being saved, please wait.";
				engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
		    	engGame.saveMap();
				return "Game settings saved";
			}else if (strCommand.equals("backup"))
			{
				engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
				engGame.backupMap();
				return "Game settings backed up";
			}else if (strCommand.equals("list"))
			{
				if (strArgs == null)
				{
					return "What do you want to list?";
				}
				engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
				strStore = strStore.substring(5);
				String strFileName = null;
				String TITLE = null;
				if (strArgs.equals("items"))
				{
					strFileName = "defItems";
					TITLE = "Items:\n";
				}else if (strArgs.equals("conf"))
				{
					strFileName = "conf";
					TITLE = "Conf files:\n";
				}else if (strArgs.equals("mobs"))
				{
					strFileName = "defMobs";
					TITLE = "Mobiles:\n";
				}else if (strArgs.equals("commands"))
				{
					strFileName = "commands";
					TITLE = "Custom commands:\n";
				}else if (strArgs.equals("races"))
				{
					strFileName = "defRaces";
					TITLE = "Races:\n";
				}else if (strArgs.equals("pets"))
				{
					strFileName = "defPets";
					TITLE = "Pets:\n";
				}else if (strArgs.equals("factions"))
				{
					strFileName = "factions";
					TITLE = "Factions:\n";
				}else if (strArgs.equals("conditions"))
				{
					strFileName = "defConditions";
					TITLE = "Conditions:\n";
				}else if (strArgs.equals("help"))
				{
					strFileName = "helpFiles";
					TITLE = "Help Files:\n";
				}else if (strArgs.equals("scripts"))
				{
					strFileName = "scripts";
					TITLE = "Scripts:\n";
				}else if (strArgs.equals("spell groups"))
				{
					strFileName = "defSpellGroups";
					TITLE = "Spell Groups:\n";
				}else if (strArgs.equals("spells"))
				{
					strFileName = "defSpells";
					TITLE = "Spells:\n";
				}else if (strArgs.equals("props"))
				{
					strFileName = "defProps";
					TITLE = "Props:\n";
				}else if (strArgs.equals("move actions"))
				{
					strFileName = "defMoveActions";
					TITLE = "Move Action Scripts:\n";
				}else if (strArgs.equals("can move"))
				{
					strFileName = "defCanMoveScripts";
					TITLE = "Can Move Scripts:\n";
				}else if (strArgs.equals("can see"))
				{
					strFileName = "defCanSeeScripts";
					TITLE = "Can See Scripts:\n";
				}else if (strArgs.equals("tile actions"))
				{
					strFileName = "defTileActions";
					TITLE = "Tile Action Scripts:\n";
				}else if (strArgs.equals("tile move"))
				{
					strFileName = "defTileScripts";
					TITLE = "Can Move Tile Scripts:\n";
				}else if (strArgs.equals("tile see"))
				{
					strFileName = "defTileSeeScripts";
					TITLE = "Tile See Scripts:\n";
				}
				if (strFileName != null)
				{
					File filList = new File(strFileName);
					String strResult[] = filList.list();
					StringBuffer strBuff = new StringBuffer();
					strBuff.append(""+(char)20+TITLE+"\n");
					for (int i=0;i<strResult.length;i++)
					{
						// Only output files that do not end in .dsko
						if (strResult[i].indexOf(".dsko") == -1)
						{
							strBuff.append(strResult[i]+"\n");
						}
					}
					strBuff.append("--EOF--\n");
					ent.send(strBuff.toString());
					return null;
				}
				return "You can't list that.";
			}else if (strCommand.equals("view"))
			{
				if (strArgs == null)
				{
					return "What do you want to view?";
				}
				engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
				if (strArgs.indexOf("..") != -1)
				{
					return "You don't have permission to access that file.";
				}
				String strFileName = null;
				boolean blnUser = false;
				boolean blnPet = false;
				if (strArgs.startsWith("item "))
				{
					strArgs = strArgs.toLowerCase();
					strFileName = "defItems/"+strArgs.substring(5);
				}else if (strArgs.startsWith("conf "))
				{
					strFileName = "conf/"+strArgs.substring(5);
				}else if (strArgs.startsWith("mob "))
				{
					strFileName = "defMobs/"+strArgs.substring(4);
				}else if (strArgs.startsWith("command "))
				{
					strFileName = "commands/"+strArgs.substring(8);
				}else if (strArgs.startsWith("race "))
				{
					strFileName = "defRaces/"+strArgs.substring(5);
				}else if (strArgs.startsWith("pet "))
				{
					strFileName = "defPets/"+strArgs.substring(5);
				}else if (strArgs.startsWith("faction"))
				{
					return "You cannot view faction files.";
				}else if (strArgs.startsWith("condition "))
				{
					strFileName = "defConditions/"+strArgs.substring(10);
				}else if (strArgs.startsWith("help "))
				{
					strFileName = "helpFiles/"+strArgs.substring(5);
				}else if (strArgs.startsWith("script "))
				{
					strFileName = "scripts/"+strArgs.substring(7);
				}else if (strArgs.startsWith("spell group "))
				{
					strFileName = "defSpellGroups/"+strArgs.substring(12);
				}else if (strArgs.startsWith("spell "))
				{
					strFileName = "defSpells/"+strArgs.substring(6);
				}else if (strArgs.startsWith("prop "))
				{
					strFileName = "defProps/"+strArgs.substring(5);
				}else if (strArgs.startsWith("move action "))
				{
					strFileName = "defMoveActions/"+strArgs.substring(12);
				}else if (strArgs.startsWith("can move "))
				{
					strFileName = "defCanMoveScripts/"+strArgs.substring(9);
				}else if (strArgs.startsWith("can see "))
				{
					strFileName = "defCanSeeScripts/"+strArgs.substring(8);
				}else if (strArgs.startsWith("tile action "))
				{
					strFileName = "defTileActions/"+strArgs.substring(12);
				}else if (strArgs.startsWith("tile move "))
				{
					strFileName = "defTileScripts/"+strArgs.substring(10);
				}else if (strArgs.startsWith("tile see "))
				{
					strFileName = "defTileSeeScripts/"+strArgs.substring(9);
				}else if (strArgs.startsWith("user "))
				{
					if (ent.PRIVS.toInt(ent.PRIVS) < 10)
					{
						return "You don't have enough privelages to edit a user's file.";
					}
					blnUser = true;
					strFileName = "users/"+strArgs.substring(5);
				}else if (strArgs.startsWith("pet "))
				{
					if (ent.PRIVS.toInt(ent.PRIVS) < 10)
					{
						return "You don't have enough privelages to edit a user's pet file.";
					}
					blnPet = true;
					strFileName = "pets/"+strArgs.substring(4);
				}
				File filView = new File(strFileName);
				if (!filView.exists())
				{
					if (blnUser)
					{
						return "There is no player named \""+filView.getName()+"\"."; 
					}
					if (blnPet)
					{
						return "The player named \""+filView.getName()+"\" does not have a pet."; 
					}
					ent.send((char)18+strArgs+"\n--EOF--\n");
					return null;
				}
				RandomAccessFile rafView=null;
				StringBuffer strBuff = new StringBuffer();
				try
				{
					rafView = new RandomAccessFile(filView,"rw");
					if (blnUser)
					{
						rafView.readLine();  //Skip over users' password
					}
					String strStore2 = rafView.readLine();
					strBuff.append((char)18+strArgs+"\n");
					while (strStore2 != null)
					{
						strBuff.append(strStore2+"\n");
						strStore2 = rafView.readLine();
					}
					strBuff.append("--EOF--\n");
					ent.send(strBuff.toString());
				}catch(Exception e)
				{
					engGame.LOG.printError("parseCommand():Reading file for "+filView.getName(), e);
				}
				try
				{
					rafView.close();
				}catch(Exception e)
				{
					engGame.LOG.printError("parseCommand():Closing file after "+filView.getName(), e);
				}
				return null;
			}else if (strCommand.equals("submit"))
			{
				if (strArgs == null)
				{
					return "What do you want to submit?";
				}
				if ((ent.PRIVS.toInt(ent.PRIVS) < 10) && (!strArgs.startsWith("mob ")))
				{
					return "You are not allowed to submit files.";
				}
				engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
				if (strArgs.indexOf("..") != -1)
				{
					return "You don't have permission to access that file.";
				}
				boolean compile=false;
				boolean blnUser=false;
				boolean blnPet=false;
				String strFileName = null;
				if (strArgs.startsWith("item ") && (ent.PRIVS.toInt(ent.PRIVS) > 8))
				{
					strArgs = strArgs.toLowerCase();
					strFileName = "defItems/"+strArgs.substring(5);
				}else if (strArgs.startsWith("conf ") && (ent.PRIVS.toInt(ent.PRIVS) > 8))
				{
					strFileName = "conf/"+strArgs.substring(5);
				}else if (strArgs.startsWith("mob "))
				{
					strFileName = "defMobs/"+strArgs.substring(4);
				}else if (strArgs.startsWith("command ") && (ent.PRIVS.toInt(ent.PRIVS) > 8))
				{
					strFileName = "commands/"+strArgs.substring(8);
					compile=true;
				}else if (strArgs.startsWith("race ") && (ent.PRIVS.toInt(ent.PRIVS) > 8))
				{
					strFileName = "defRaces/"+strArgs.substring(5);
				}else if (strArgs.startsWith("pet ") && (ent.PRIVS.toInt(ent.PRIVS) > 8))
				{
					strFileName = "defPets/"+strArgs.substring(4);
				}else if (strArgs.startsWith("faction") && (ent.PRIVS.toInt(ent.PRIVS) > 8))
				{
					return "You cannot submit faction files.";
				}else if (strArgs.startsWith("condition ") && (ent.PRIVS.toInt(ent.PRIVS) > 8))
				{
					strFileName = "defConditions/"+strArgs.substring(10);
				}else if (strArgs.startsWith("help ") && (ent.PRIVS.toInt(ent.PRIVS) > 8))
				{
					strFileName = "helpFiles/"+strArgs.substring(5);
				}else if (strArgs.startsWith("script ") && (ent.PRIVS.toInt(ent.PRIVS) > 8))
				{
					strFileName = "scripts/"+strArgs.substring(7);
					compile=true;
				}else if (strArgs.startsWith("spell group ") && (ent.PRIVS.toInt(ent.PRIVS) > 8))
				{
					strFileName = "defSpellGroups/"+strArgs.substring(12);
					compile=true;
				}else if (strArgs.startsWith("spell ") && (ent.PRIVS.toInt(ent.PRIVS) > 8))
				{
					strFileName = "defSpells/"+strArgs.substring(6);
				}else if (strArgs.startsWith("prop "))
				{
					strFileName = "defProps/"+strArgs.substring(5);
				}else if (strArgs.startsWith("move action ") && (ent.PRIVS.toInt(ent.PRIVS) > 8))
				{
					strFileName = "defMoveActions/"+strArgs.substring(12);
					compile=true;
				}else if (strArgs.startsWith("can move ") && (ent.PRIVS.toInt(ent.PRIVS) > 8))
				{
					strFileName = "defCanMoveScripts/"+strArgs.substring(9);
					compile=true;
				}else if (strArgs.startsWith("can see ") && (ent.PRIVS.toInt(ent.PRIVS)> 8))
				{
					strFileName = "defCanSeeScripts/"+strArgs.substring(8);
					compile=true;
				}else if (strArgs.startsWith("tile action ") && (ent.PRIVS.toInt(ent.PRIVS) > 8))
				{
					strFileName = "defTileActions/"+strArgs.substring(12);
					compile=true;
				}else if (strArgs.startsWith("tile move ") && (ent.PRIVS.toInt(ent.PRIVS) > 8))
				{
					strFileName = "defTileScripts/"+strArgs.substring(10);
					compile=true;
				}else if (strArgs.startsWith("tile see ") && (ent.PRIVS.toInt(ent.PRIVS) > 8))
				{
					strFileName = "defTileSeeScripts/"+strArgs.substring(9);
					compile=true;
				}else if (strArgs.startsWith("user "))
				{
					if (ent.PRIVS.toInt(ent.PRIVS) < 10)
					{
						return "You don't have enough privelages to submit a user's file.";
					}
					if (engGame.getPlayer(strArgs.substring(5)) != null)
					{
						return "You cannot submit a file for an active user.";
					}
					blnUser = true;
					strFileName = "users/"+strArgs.substring(5);
				}else if (strArgs.startsWith("pet "))
				{
					if (ent.PRIVS.toInt(ent.PRIVS) < 10)
					{
						return "You don't have enough privelages to submit a user's pet file.";
					}
					if (engGame.getPlayer(strArgs.substring(4)) != null)
					{
						return "You cannot submit a pet file for an active user.";
					}
					blnPet = true;
					strFileName = "pets/"+strArgs.substring(4);
				}
				if (strFileName == null)
				{
					return "Cannot submit "+strArgs;
				}
				File filView=null;
				try
				{
					filView = new File(strFileName);
				}catch(Exception e)
				{
					return "Cannot submit "+strArgs+" ("+strFileName+")";
				}
				RandomAccessFile rafView=null;
				try
				{
					if (blnUser)
					{
						/*
							Read in the user's password before deleting the file
						*/
						rafView = new RandomAccessFile(filView,"r");
						strStore = rafView.readLine();
					}
					if (filView.exists())
					{
						filView.delete();
					}
					rafView = new RandomAccessFile(filView,"rw");
					if (blnUser)
					{
						/*
							Write out the password for user files
						*/
						rafView.writeBytes(strStore+"\n");
					}
					strStore = ent.BUF_SCK_IN.readLine();
					while (!strStore.equals("--EOF--"))
					{
						rafView.writeBytes(strStore+"\n");
						strStore = ent.BUF_SCK_IN.readLine();
					}
					rafView.close();
					if (compile)
					{
						Script scrStore = new Script(filView.getPath(),engGame,true);
						scrStore.close();
					}
					if (blnUser || blnPet)
					{
						/*
							Delete the .backup file for users and pets
						*/
						filView = new File(strFileName+".backup");
						if (filView.exists())
						{
							filView.delete();
						}
					}
				}catch(Exception e)
				{
					engGame.LOG.printError("parseCommand():While submitting file "+strArgs+" ("+filView.getName()+")", e);
					try
					{
						rafView.close();
					}catch(Exception e2)
					{
						engGame.LOG.printError("parseCommand():While closing file "+strArgs+" ("+filView.getName()+") after failed submit", e);
					}
					return "Error while trying to submit "+strArgs+" ("+filView.getName()+").";
				}
				return "Submit of "+strArgs+" was successful.";
			}else if (strCommand.equals("delete"))
			{
				if (strArgs == null)
				{
					return "What do you want to delete?";
				}
				if (ent.PRIVS.toInt(ent.PRIVS) < 10)
				{
					return "You are not allowed to delete files.";
				}
				engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
				if (strArgs.indexOf("..") != -1)
				{
					return "You don't have permission to access that file.";
				}
				String strFileName = null;
				String strReturn = null;
				if (strArgs.startsWith("item "))
				{
					strFileName = "defItems/"+strArgs.substring(5);
					strReturn = "item "+strArgs.substring(5);
				}else if (strArgs.startsWith("conf "))
				{
					strFileName = "conf/"+strArgs.substring(5);
					strReturn = "conf "+strArgs.substring(5);
				}else if (strArgs.startsWith("mob "))
				{
					strFileName = "defMobs/"+strArgs.substring(4);
					strReturn = "mob "+strArgs.substring(4);
				}else if (strArgs.startsWith("command "))
				{
					strFileName = "commands/"+strArgs.substring(8);
					strReturn = "command "+strArgs.substring(8);
				}else if (strArgs.startsWith("race "))
				{
					strFileName = "defRaces/"+strArgs.substring(5);
					strReturn = "race "+strArgs.substring(5);
				}else if (strArgs.startsWith("pet "))
				{
					strFileName = "defPets/"+strArgs.substring(4);
					strReturn = "pet "+strArgs.substring(4);
				}else if (strArgs.startsWith("faction"))
				{
					return "You cannot delete faction files.";
				}else if (strArgs.startsWith("condition "))
				{
					strFileName = "defConditions/"+strArgs.substring(8);
					strReturn = "condition "+strArgs.substring(8);
				}else if (strArgs.startsWith("help "))
				{
					strFileName = "helpFiles/"+strArgs.substring(5);
					strReturn = "help "+strArgs.substring(5);
				}else if (strArgs.startsWith("script "))
				{
					strFileName = "scripts/"+strArgs.substring(7);
					strReturn = "script "+strArgs.substring(7);
				}else if (strArgs.startsWith("spell group "))
				{
					strFileName = "defSpellGroups/"+strArgs.substring(12);
					strReturn = "spell group "+strArgs.substring(12);
				}else if (strArgs.startsWith("spell "))
				{
					strFileName = "defSpells/"+strArgs.substring(6);
					strReturn = "spell "+strArgs.substring(6);
				}else if (strArgs.startsWith("prop "))
				{
					strFileName = "defProps/"+strArgs.substring(5);
					strReturn = "prop "+strArgs.substring(5);
				}else if (strArgs.startsWith("move action "))
				{
					strFileName = "defMoveActions/"+strArgs.substring(12);
					strReturn = "move action "+strArgs.substring(12);
				}else if (strArgs.startsWith("can move "))
				{
					strFileName = "defCanMoveScripts/"+strArgs.substring(9);
					strReturn = "can move "+strArgs.substring(9);
				}else if (strArgs.startsWith("can see "))
				{
					strFileName = "defCanSeeScripts/"+strArgs.substring(8);
					strReturn = "can see "+strArgs.substring(8);
				}else if (strArgs.startsWith("tile action "))
				{
					strFileName = "defTileActions/"+strArgs.substring(12);
					strReturn = "tile action "+strArgs.substring(12);
				}else if (strArgs.startsWith("tile move "))
				{
					strFileName = "defTileScripts/"+strArgs.substring(10);
					strReturn = "tile move "+strArgs.substring(10);
				}else if (strArgs.startsWith("tile see "))
				{
					strFileName = "defTileSeeScripts/"+strArgs.substring(9);
					strReturn = "tile see "+strArgs.substring(9);
				}
				File filDelete=null;
				if (strFileName != null)
				{
					filDelete = new File(strFileName);
					if (filDelete.exists())
					{
						filDelete.delete();
						filDelete = new File(strFileName+".dsko");
						if (filDelete.exists())
						{
							filDelete.delete();
							strReturn += " and the associated .dsko file.";
						}
					} else {
						return strReturn+" does not exist.";
					}
					return "Deleted "+strReturn;
				}
				return "You cannot delete that.";
			}else if (strCommand.equals("clanleader"))
			{
				if (strArgs == null)
				{
					return "Clanleader who?";
				}
				engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
				Entity thnStore = engGame.getPlayer(strArgs.substring(0,strStore.indexOf(' ')));
				if (thnStore == null)
				{
					return "They're not in this world";
				}
				if (strArgs.length() < thnStore.NAME.length()+2)
				{
					return "What clan?";
				}
				if (thnStore.PRIVS.toInt(thnStore.PRIVS) > 1)
				{
					return "You can't clanleader them.";
				}
				strArgs = strArgs.substring(thnStore.NAME.length()+1);
				thnStore.GUILD = strStore;
				if (strArgs.equals("none"))
				{
					thnStore.PRIVS = Privs.BASIC;
					thnStore.chatMessage("You are now clanless.\n");
				}else
				{
					thnStore.PRIVS = Privs.GUILDMEMBER;
					thnStore.chatMessage("You are now a member of the "+strStore+" clan.\n");
				}
				engGame.removeDuskObject(thnStore);
				engGame.addDuskObject(thnStore);
				return thnStore.NAME+" is now a leader of the "+strArgs+" clan.";
			}
			if (strCommand.equals("boot"))
			{
				if (strArgs == null)
				{
					return "Boot who?";
				}
				engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
				Entity thnStore = engGame.getPlayer(strArgs);
				if (thnStore == null)
					return "They're not in this world.";
				if (thnStore.PRIVS.toInt(thnStore.PRIVS) >= ent.PRIVS.toInt(thnStore.PRIVS))
				{
					thnStore.chatMessage(ent.NAME+" attempted to boot you.\n");
					return "You do not have high enough privelages to boot them.";
				}
				thnStore.chatMessage("You have been booted.");
				thnStore.close();
				return null;
			}
			if (strCommand.equals("hardkill"))
			{
				if (strArgs == null)
				{
					return "HardKill who?";
				}
				engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
				Entity thnStore = engGame.getPlayer(strArgs);
				if (thnStore == null)
					return "They're not in this world.";
				if (thnStore.PRIVS.toInt(thnStore.PRIVS) >= ent.PRIVS.toInt(thnStore.PRIVS))
				{
					thnStore.chatMessage(ent.NAME+" attempted to HardKill you.\n");
					return "You do not have high enough privelages to HardKill them.";
				}
				thnStore.closeNoMsgPlayer();
				return null;
			}
			if (strCommand.equals("nochannel"))
			{
				if (strArgs == null)
				{
					return "nochannel who for how long?";
				}
				engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
				Entity thnStore;
				int duration;
				try
				{
					thnStore = engGame.getPlayer(strArgs.substring(0,strArgs.indexOf(" ")));
					duration = Integer.parseInt(strArgs.substring(strArgs.indexOf(" ")+1));
				}catch(Exception e)
				{
					engGame.LOG.printError("parseCommand():When "+ent.NAME+" tried to nochannel "+strArgs, e);
					return "nochannel who for how long?";
				}
				if (thnStore == null)
					return "They're not in this world.";
				if (thnStore.PRIVS.toInt(thnStore.PRIVS) >= ent.PRIVS.toInt(thnStore.PRIVS))
				{
					thnStore.chatMessage(ent.NAME+" attempted to nochannel you.\n");
					return "You do not have high enough privelages to nochannel them.";
				}
				if (duration > engGame.MUTE_CAP)
				{
					duration = engGame.MUTE_CAP;
				}
				thnStore.chatMessage("You have been nochanneled for "+duration+" seconds.\n");
				thnStore.noChannel = duration;
				return "You have nochanneled "+thnStore.NAME+" for "+duration+" seconds";
			}
			if (strCommand.equals("allowchannel"))
			{
				if (strArgs == null)
				{
					return "allowchannel who?";
				}
				engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
				Entity thnStore = engGame.getPlayer(strArgs);
				if (thnStore == null)
				{
					return "They're not in this world.";
				}
				thnStore.chatMessage("Your nochannel status has been removed.\n");
				thnStore.noChannel = 0;
				return thnStore.NAME+"'s nochannel status has been removed.";
			}
			if (strCommand.equals("gecho"))
			{
				if (strArgs == null)
				{
					return "G-Echo what?";
				}
				engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
				engGame.chatMessage(strArgs,"default");
				return null;
			}
	    	if (strCommand.equals("teleport"))
   			{
				if (strArgs == null)
   				{
   					return "Teleport to where?";
   				}
				engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
				int index = strArgs.lastIndexOf('_');
				char charSep = ' ';
				if (index != -1)
				{
					charSep = '_';
				}
   				try
   				{
					int destX = Integer.parseInt(strArgs.substring(0, strArgs.lastIndexOf(charSep)));
    				int destY = Integer.parseInt(strArgs.substring(strArgs.lastIndexOf(charSep) + 1));
					if (ent.PRIVS.toInt(ent.PRIVS) < 7 && destX >= engGame.MapColumns)
						destX = engGame.MapColumns-1;
					if (ent.PRIVS.toInt(ent.PRIVS) < 7 && destY >= engGame.MapRows)
						destY = engGame.MapRows-1;
					if (destX < 0)
						destX = 0;
					if (destY < 0)
						destY = 0;
    				ent.changeLocBypass(destX,destY);
    			}catch (Exception e)
    			{
    				Entity thnStore = engGame.getPlayer(strArgs);
    				if (thnStore == null)
    					return "Teleport to where?";
    				else
					{
						int destX = thnStore.intLocX;
						int destY = thnStore.intLocY;
						if (ent.PRIVS.toInt(thnStore.PRIVS) < 9&& destX > 349)
							destX = 349;
						if (ent.PRIVS.toInt(thnStore.PRIVS) < 9 && destY > 349)
							destY = 349;
						if (destX < 0)
							destX = 0;
						if (destY < 0)
							destY = 0;
    					ent.changeLocBypass(destX,destY);
					}
    			}
    			return null;
    		}
			if (strCommand.equals("remove"))
			{
				if (strArgs == null)
				{
					return "remove what?";
				}
				engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
				DuskObject objStore = ent.getLocalObject(strArgs);
				if (objStore != null)
				{
					if (objStore.isLivingThing())
					{
						Entity thnStore = (Entity)objStore;
						if(thnStore.isMob())
						{
							thnStore.close();
							engGame.BLN_MOB_CHANGE=true;
							return "Object removed.";
						}else
							return "You can't remove players/pets.";
					}else if (objStore.isItem())
					{
						engGame.vctItems.removeElement(objStore);
						engGame.removeDuskObject(objStore);
						return "Object removed.";
					}else if (objStore.isSign())
					{
						engGame.vctSigns.removeElement(objStore);
						engGame.BLN_SIGN_CHANGE=true;
						engGame.removeDuskObject(objStore);
						return "Object removed.";
					}else if (objStore.isProp())
					{
						engGame.vctProps.removeElement(objStore);
						engGame.BLN_PROP_CHANGE=true;
						engGame.removeDuskObject(objStore);
						return "Object removed.";
					}else if (objStore.isMerchant())
					{
						engGame.vctMerchants.removeElement(objStore);
						engGame.BLN_MERCH_CHANGE=true;
						engGame.removeDuskObject(objStore);
						return "Object removed.";
					}
				}
				return "You don't see that here.";
			}
			if (strCommand.equals("changeclan"))
			{
				if (strArgs == null)
				{
					return "ChangeClan who?";
				}
				Entity thnStore = engGame.getPlayer(strArgs.substring(0,strArgs.indexOf(' ')));
				if (thnStore == null)
				{
					return "They're not in this world";
				}
				if (strStore.length() < thnStore.NAME.length()+2)
				{
					return "What clan?";
				}
				engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strArgs+":"+ent.intLocX+","+ent.intLocY);
				strArgs = strArgs.substring(thnStore.NAME.length()+1);
				thnStore.GUILD = strArgs;
				if (thnStore.PRIVS.toInt(thnStore.PRIVS)==1)
					thnStore.PRIVS = Privs.BASIC;
				if (strArgs.equals("none"))
					thnStore.chatMessage("You are now a member of no clan.\n");
				else
					thnStore.chatMessage("You are now a member of the "+strArgs+" clan.\n");
				return thnStore.NAME+" has been added to the "+strArgs+" clan";
			}
			if (strCommand.equals("madd"))
			{
				if (strArgs == null)
				{
					return "Madd what?";
				}
				Merchant mrcStore = engGame.overMerchant(ent.intLocX,ent.intLocY);
				if (mrcStore != null)
				{
					engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
					mrcStore.vctItems.addElement(strArgs);
		    		engGame.refreshEntities(ent);
				} else
				{
					if(engGame.overPlayerMerchant(ent.intLocX,ent.intLocY) != null)
					{
						return "You cannot add items to a player's merchant this way.";
					}
					return "You are not on a merchant.";
				}
				return null;
			}
			if (strCommand.equals("mremove"))
			{
				if (strArgs == null)
				{
					return "Mremove what?";
				}
				Merchant mrcStore = engGame.overMerchant(ent.intLocX,ent.intLocY);
				if (mrcStore != null)
				{
					engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
					mrcStore.vctItems.removeElement(strArgs);
		    		engGame.refreshEntities(ent);
				} else
				{
					if(engGame.overPlayerMerchant(ent.intLocX,ent.intLocY) != null)
					{
						return "You cannot remove items from a player's merchant this way.";
					}
					return "You are not on a merchant.";
				}
				return null;
			}
		    if (strCommand.equals("whoip"))
		    {
				engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
				synchronized(ent.OUT)
				{
					int nPlayers = engGame.vctSockets.size();
					StringBuffer strBuff = new StringBuffer();
					Entity thnStore = null;
					for (int i=0;i<engGame.vctSockets.size();i++)
					{
						thnStore = (Entity)engGame.vctSockets.elementAt(i);
						boolean hidden = false;
						boolean skip = false;
						if (thnStore.PRIVS.toInt(thnStore.PRIVS) > 2)
						{
							if (thnStore.hasCondition("invis"))
							{
								hidden = true;
							}
						}
						if (hidden && (ent.PRIVS.toInt(thnStore.PRIVS) < thnStore.PRIVS.toInt(thnStore.PRIVS)))
						{
							skip = true;
							nPlayers--;
						}
						if (!skip)
						{
							String strIP = thnStore.SCK_CONN.getInetAddress().toString();
							while (strIP.length() < 34)
							{
								strIP += " ";
							}
							strBuff.append("   "+strIP);
							strBuff.append(thnStore.getCharacterPoints()+"cp ");
							if (thnStore.PRIVS.toInt(thnStore.PRIVS) == 1)
							{
								strBuff.append("{Clan Leader}");
							}else if (thnStore.PRIVS.toInt(thnStore.PRIVS) == 3)
							{
								strBuff.append("{God}");
							}else if (thnStore.PRIVS.toInt(thnStore.PRIVS) == 4)
							{
								strBuff.append("{High God}");
							}else if (thnStore.PRIVS.toInt(thnStore.PRIVS) > 4)
							{
	   	 	        			strBuff.append("{Master God}");
		        		    }
							if (hidden)
							{
								strBuff.append("{hidden}");
							}
							if (thnStore.noChannel != 0)
							{
								strBuff.append("{nochanneled}");
							}
							if (!thnStore.GUILD.equals("none"))
							{
								strBuff.append("<"+thnStore.GUILD+"> ");
							}
							strBuff.append(thnStore.NAME+"\n");
						}
	           	    }
					ent.chatMessage("\tThere are "+nPlayers+" players online:\n");
					String strStore2 = strBuff.toString();
    			    intIndex = strStore2.indexOf("\n");
					while (intIndex != -1 && strStore2.length() > 5)
					{
						ent.chatMessage(strStore2.substring(0,intIndex+1));
						strStore2 = strStore2.substring(intIndex+1);
						intIndex = strStore2.indexOf("\n");
					}
					if (strStore2 != null&& strStore2.length() > 5)
						ent.chatMessage(strStore2);
	           	}
				return null;
		    }
		    if (strStore.startsWith(">"))
		    {
				engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
		    	strStore = strStore.substring(1);
		    	if (strStore.equalsIgnoreCase("s"))
		        {
					if (engGame.BLN_SAVING)
						return "Game already being saved, please wait.";
		        	engGame.saveMap();
					return "Game settings saved";
		        }
		        try
		        {
		        	engGame.changeMap(0,ent.intLocX,ent.intLocY,Short.parseShort(strStore));
					String strMapLog = "shortmap_redraw";
					PrintStream psMap = new PrintStream(new FileOutputStream(strMapLog, true),true);
					psMap.println("changetile "+ent.intLocX+" "+ent.intLocY+" "+Short.parseShort(strStore));
					psMap.close();
		        	return null;
				}catch (Exception e)
		        {
		        	engGame.LOG.printError("parseCommand():While "+ent.NAME+" tried to >"+strStore, e);
		        	return null;
		        }
			}
		    if (strStore.startsWith("<"))
		    {
				engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":"+strStore+":"+ent.intLocX+","+ent.intLocY);
		    	strStore = strStore.substring(1);
		        if (strStore.equals("s"))
		        {
					if (engGame.BLN_SAVING)
					{
						return "Game already being saved, please wait.";
					}
		        	engGame.saveMap();
					return "Game settings saved";
		        }else if (strStore.equalsIgnoreCase("merchant"))
		        {
		        	if (engGame.overMerchant(ent.intLocX,ent.intLocY) != null)
		        	{
		        		return "There's already a merchant there.";
		        	}
		        	if (engGame.overPlayerMerchant(ent.intLocX,ent.intLocY) != null)
		        	{
		        		return "There's already a merchant there.";
		        	}
					Merchant mrcStore = new Merchant(engGame);
					mrcStore.vctItems = new Vector(0);
					mrcStore.intLocX = ent.intLocX;
					mrcStore.intLocY = ent.intLocY;
					engGame.vctMerchants.addElement(mrcStore);
					engGame.BLN_MERCH_CHANGE=true;
					engGame.addDuskObject(mrcStore);
					return null;
		        }else if (strStore.toLowerCase().startsWith("prop "))
		        {
		        	if (strStore.length()==5)
					{
						return "Add what prop?";
					}
		        	strStore = strStore.substring(5);
		        	Prop prpStore = engGame.getProp(strStore);
		       		if (prpStore != null)
		        	{
						prpStore.intLocX = ent.intLocX;
						prpStore.intLocY = ent.intLocY;
						engGame.vctProps.addElement(prpStore);
						engGame.BLN_PROP_CHANGE=true;
						engGame.addDuskObject(prpStore);
		        	}
					return null;
		        }else if (strStore.startsWith("sign "))
				{
					if (strStore.length()==5)
					{
						return "What should the sign say?";
					}
					Sign sgnStore = new Sign("sign",strStore.substring(5),ent.intLocX,ent.intLocY,engGame.getID());
					engGame.vctSigns.addElement(sgnStore);
					engGame.BLN_SIGN_CHANGE=true;
					engGame.addDuskObject(sgnStore);
					return null;
				}
		        Item itmStore = engGame.getItem(strStore);
		        if (itmStore != null)
		        {
					itmStore.intLocX = ent.intLocX;
					itmStore.intLocY = ent.intLocY;
					engGame.vctItems.addElement(itmStore);
					engGame.addDuskObject(itmStore);
					return null;
		        }
		        try
		        {
					Mob thnStore = new Mob(strStore,ent.intLocX,ent.intLocY,engGame);
					engGame.vctMobs.addElement(thnStore);
					engGame.BLN_MOB_CHANGE=true;
					thnStore.changeLocBypass(ent.intLocX,ent.intLocY);
				}
				catch(Exception e)
				{
					engGame.LOG.printError("parseCommand():While creating mob \""+strStore+"\"",e);
				}
				return null;
		    }
		}
		if (strCommand.equals("flee"))
		{
			if (ent.BATTLE != null)
			{
				ent.vctCommands.insertElementAt("flee",0);
				return null;
			}else
			{
				return "You're not fighting anyone";
			}
		}
		if (strCommand.equals("sleep"))
		{
			if (ent.BLN_SLEEP)
			{	
				return "You are already asleep";	
			}
			if (ent.BATTLE != null)
			{
				return "Not while you're fighting!";			
			}
			if (!(ent.ENT_MASTER == null || ent.ENT_MASTER.BLN_SLEEP))
			{
				return "You can't sleep if you're following someone who's awake.";
			}
			ent.BLN_SLEEP = true;	
			ent.updateActions();
			engGame.removeDuskObject(ent);
			engGame.addDuskObject(ent);
			return "You go to sleep";
		}
		if (strCommand.equals("wake"))
		{
			if (ent.BLN_SLEEP)
			{
				ent.BLN_SLEEP = false;
				ent.updateActions();
				engGame.removeDuskObject(ent);
				engGame.addDuskObject(ent);
				return "You wake up";
			}else
			{
				return "You are already awake";
			}
		}
		if (strCommand.equals("change"))
		{
			if (ent.BATTLE != null)
			{
				return "Not while you're fighting!";			
			}
			if (strArgs == null)
			{
				return "Change what?";
			}
			if (strArgs.equals("race"))
			{
				if (ent.getCharacterPoints() > engGame.RACE_CHANGE_LVL_CAP)
					return "You can no longer change your race.";
				//ent.unloadRace();
				if (ent.isPet())
				{
					ent.ENT_MASTER.halt();
	//					ent.ENT_MASTER.stillThere();  // This puts something in the buffer
	//					ent.ENT_MASTER.thrConnection.sleep(750);  // wait for it...
					try
					{
						// Empty out the BufferedReader for the answer
						while (ent.ENT_MASTER.BUF_SCK_IN.ready()) ent.ENT_MASTER.BUF_SCK_IN.readLine();
					} catch (Exception e)
					{
						engGame.LOG.printError("parseCommand():Trying to empty ready buffer of pet's master for change race.",e);
					}
				} else
				{
					ent.halt();
	//					ent.stillThere();  // This puts something in the buffer
	//					ent.thrConnection.sleep(750);  // wait for it...
					try
					{
						// Empty out the BufferedReader for the answer
						while (ent.BUF_SCK_IN.ready()) ent.BUF_SCK_IN.readLine();
					} catch (Exception e)
					{
						engGame.LOG.printError("parseCommand():Trying to empty ready buffer of player for change race.",e);
					}
				}
				ent.loadRace();
				if (ent.isPet())
				{
					ent.ENT_MASTER.proceed();
					ent.ENT_MASTER.updateStats();
				} else
				{
					ent.proceed();
				}
				engGame.removeDuskObject(ent);
				engGame.addDuskObject(ent);
				ent.updateStats();
				return "Your race has been changed.";
			}
		}
		if (strCommand.equals("gossip") || strCommand.startsWith(";"))
		{
			if (strCommand.startsWith(";"))
			{
				strArgs = strStore.substring(1).trim();
			}
			if (!ent.isPlayer())
			{
				return "Only players can use the gossip/clan/tell channels.";
			}
			if (ent.noChannel != 0)
			{
				return "You can't do that when nochanneled.";
			}
			if (strArgs == null)
			{
				return "Gossip what?";
			}
			if (strArgs.length() > engGame.MSG_CAP)
			{
				return "That message was too long.";
			}
			if (!strArgs.equals(""))
			{
				long lTemp = ent.TIME_LAST_MSG;
				ent.TIME_LAST_MSG = System.currentTimeMillis();
				if ((System.currentTimeMillis() - lTemp) < engGame.FLOOD_LIMIT)
				{
					return "No flooding.";
				}
				String strPerson = ent.NAME;
				if (ent.PRIVS.toInt(ent.PRIVS) > 2
					&& ent.hasCondition("invis")
					&& ent.hasCondition("invis2"))
				{
					strPerson = "A god";
				}
				engGame.chatMessage(strPerson+" gossips: "+strArgs,ent.NAME);
			}
			return null;
		}
		if (strCommand.equals("clan") || strCommand.startsWith(":"))
		{
			if (strCommand.startsWith(":"))
			{
				strArgs = strStore.substring(1).trim();
			}
			if (!ent.isPlayer() && !ent.isMob())
			{
				return "Only players can use the gossip/clan/tell channels.";
			}
			if (ent.GUILD.equals("none"))
			{
				return "You're not in a clan. Use gossip instead";
			}
			if (ent.noChannel != 0)
			{
				return "You can't do that when nochanneled.";
			}
			if (strArgs==null)
			{
				return "Clan what?";
			}
			if (strArgs.length() > engGame.MSG_CAP)
			{
				return "That message was too long.";
			}
			if (!strArgs.equals(""))
			{
				long lTemp = ent.TIME_LAST_MSG;
				ent.TIME_LAST_MSG = System.currentTimeMillis();
				if ((System.currentTimeMillis() - lTemp) < engGame.FLOOD_LIMIT)
				{
					return "No flooding.";
				}
				engGame.chatMessage(ent.NAME+" clans: "+strArgs,ent.GUILD,ent.NAME);
			}
			return null;
	   }
		if (strCommand.equals("say") || strCommand.startsWith("'"))
		{
			if (strCommand.startsWith("'"))
			{
				strArgs = strStore.substring(1).trim();
			}
			if (strArgs == null)
			{
				return "Say what?";
			}
			if (ent.noChannel != 0)
			{
				return "You can't do that when nochanneled.";
			}
			if (strArgs.length() > engGame.MSG_CAP)
			{
				return "That message was too long.";
			}
			if (!strArgs.equals(""))
			{
				if (ent.isPet())
				{
					engGame.chatMessage("Pet "+ent.NAME+" says: "+strArgs,ent.intLocX,ent.intLocY,ent.NAME);
				}
				else if (ent.isMob())
				{
					engGame.chatMessage("Mob "+ent.NAME+" says: "+strArgs,ent.intLocX,ent.intLocY,"default");
				}
				else
				{
					long lTemp = ent.TIME_LAST_MSG;
					ent.TIME_LAST_MSG = System.currentTimeMillis();
					if ((System.currentTimeMillis() - lTemp) < engGame.FLOOD_LIMIT)
					{
						return "No flooding.";
					}
					String strPerson = ent.NAME;
					if (ent.PRIVS.toInt(ent.PRIVS) > 2
						&& ent.hasCondition("invis")
						&& ent.hasCondition("invis2"))
					{
						strPerson = "A god";
					}
					engGame.chatMessage(strPerson+" says: "+strArgs,ent.intLocX,ent.intLocY,ent.NAME);
				}
			}
			return null;
		}
		if (strCommand.equals("emote") || strCommand.startsWith("."))
		{
			if (strCommand.startsWith("."))
			{
				strArgs = strStore.substring(1).trim();
			}
			if (strArgs == null)
			{
				return "Emote what?";
			}
			if (ent.noChannel != 0)
			{
				return "You can't do that when nochanneled.";
			}
			if (strArgs.length() > engGame.MSG_CAP)
			{
				return "That message was too long.";
			}
			if (!strArgs.equals(""))
			{
				long lTemp = ent.TIME_LAST_MSG;
				ent.TIME_LAST_MSG = System.currentTimeMillis();
				if ((System.currentTimeMillis() - lTemp) < engGame.FLOOD_LIMIT)
				{
					return "No flooding.";
				}
				String strPerson = ent.NAME;
				if (ent.PRIVS.toInt(ent.PRIVS) > 2
					&& ent.hasCondition("invis")
					&& ent.hasCondition("invis2"))
				{
					strPerson = "A god";
				}
				engGame.chatMessage(strPerson+" "+strArgs,ent.intLocX,ent.intLocY,ent.NAME);
			}
			return null;
		}
		if (strCommand.equals("tell") || strCommand.startsWith("/"))
		{
			if (strCommand.startsWith("/"))
			{
				strArgs = strStore.substring(1).trim();
			}
			if (!ent.isPlayer())
			{
				return "Only players can use the gossip/clan/tell channels.";
			}
			if (strArgs == null)
			{
				return "Tell who what?";
			}
			if (ent.noChannel != 0)
			{
				return "You can't do that when nochanneled.";
			}
			StringTokenizer tknStore = new StringTokenizer(strArgs," ");
			String strStore2 = null;
			try
			{
				strStore2 = tknStore.nextToken();
			}catch (Exception e)
			{
				return "Tell who?";
			}
			Entity thnStore = engGame.getPlayer(strStore2);
			if (thnStore == null)
			{
				return "They're not in this world.";
			}
			if (thnStore.PRIVS.toInt(thnStore.PRIVS) > 2
				&& thnStore.hasCondition("invis")
				&& thnStore.hasCondition("invis2"))
			{
				return "They're not in this world.";
			}
			if (thnStore.NAME.equalsIgnoreCase(ent.NAME))
			{
				return "Talking to yourself is not a good sign.";
			}
			String strIgnoreName = thnStore.NAME.toLowerCase();
			if (ent.vctIgnore.contains(strIgnoreName))
			{
				return "You can't do that while you are ignoring them.";
			}
			strIgnoreName = ent.NAME.toLowerCase();
			if (thnStore.vctIgnore.contains(strIgnoreName))
			{
				return "They did not get the message, they are ignoring you.";
			}
			strArgs = strArgs.substring(strStore2.length(),strArgs.length()).trim();
			if (strArgs.length() > engGame.MSG_CAP)
			{
				return "That message was too long.";
			}
			if (strArgs.length() == 0)
			{
				return "Tell them what?";
			}
			long lTemp = ent.TIME_LAST_MSG;
			ent.TIME_LAST_MSG = System.currentTimeMillis();
			if ((System.currentTimeMillis() - lTemp) < engGame.FLOOD_LIMIT)
			{
				return "No flooding.";
			}
			String strPerson = ent.NAME;
			if (ent.PRIVS.toInt(thnStore.PRIVS) > 2
				&& ent.hasCondition("invis")
				&& ent.hasCondition("invis2"))
			{
				strPerson = "A god";
			}
			engGame.LOG.printMessage(Log.ALWAYS, ent.NAME+" tells "+thnStore.NAME+" : "+strArgs);
			thnStore.chatMessage(strPerson+" tells you: "+strArgs+"\n");
			return "You tell "+strStore2+": "+strArgs;
		}
		if (strCommand.equals("who"))
		{
			synchronized(ent.OUT)
			{
				int nPlayers = engGame.vctSockets.size();
				StringBuffer strBuff = new StringBuffer();
				Entity thnStore = null;
				for (int i=0;i<engGame.vctSockets.size();i++)
				{
					thnStore = (Entity)engGame.vctSockets.elementAt(i);

					boolean hidden = false;
					boolean skip = false;
					if (thnStore.PRIVS.toInt(thnStore.PRIVS) > 2)
					{
						if (thnStore.hasCondition("invis"))
						{
							hidden = true;
						}
					}
					if (hidden && (ent.PRIVS.toInt(thnStore.PRIVS)) < thnStore.PRIVS.toInt(thnStore.PRIVS)) {
						skip = true;
						nPlayers--;
					}
					if (ent.PRIVS.toInt(thnStore.PRIVS) < 3 && !thnStore.BLN_WORKING)
					{
						skip = true;
						nPlayers--;
					}
					if (ent.PRIVS.toInt(thnStore.PRIVS) < 3 && !thnStore.BLN_READY)
					{
						skip = true;
						nPlayers--;
					}
					if (!skip)
					{
						if (!ent.BLN_POPUP)
							strBuff.append("\t");
						strBuff.append(thnStore.getCharacterPoints());
						strBuff.append("cp ");
						if (ent.PRIVS.toInt(thnStore.PRIVS) > 2 && !thnStore.BLN_WORKING)
						{
							strBuff.append("{* Not Working *}");
						}
						if (ent.PRIVS.toInt(thnStore.PRIVS) > 2 && !thnStore.BLN_READY)
						{
							strBuff.append("{Entering the world}");
						}
						if (ent.PRIVS.toInt(thnStore.PRIVS) > 2 && !thnStore.BLN_SAVE_OK)
						{
							strBuff.append("{Loading/Saving}");
						}
						if (thnStore.PRIVS.toInt(thnStore.PRIVS) == 1)
						{
							strBuff.append("{Clan Leader}");
						}else if (thnStore.PRIVS.toInt(thnStore.PRIVS) == 3)
						{
							strBuff.append("{God}");
						}else if (thnStore.PRIVS.toInt(thnStore.PRIVS) == 4)
						{
							strBuff.append("{High God}");
						}else if (thnStore.PRIVS.toInt(thnStore.PRIVS) > 4)
						{
							strBuff.append("{Master God}");
						}
						if (hidden)
						{
							strBuff.append("{hidden}");
						}
						if (thnStore.noChannel != 0)
						{
							strBuff.append("{nochanneled}");
						}
						if (thnStore.vctIgnore.contains(ent.NAME.toLowerCase()))
						{
							strBuff.append("{Ignoring you}");
						}
						if (ent.vctIgnore.contains(thnStore.NAME.toLowerCase()))
						{
							strBuff.append("{Ignored}");
						}
						if (!thnStore.GUILD.equals("none"))
						{
							strBuff.append("<");
							strBuff.append(thnStore.GUILD);
							strBuff.append("> ");
						}
						if (thnStore.TITLE == null ||
							thnStore.TITLE.equals("none"))
						{
							strBuff.append(thnStore.NAME);
							strBuff.append("\n");
						}else
						{
							strBuff.append(thnStore.NAME);
							strBuff.append(" ");
							strBuff.append(thnStore.TITLE);
							strBuff.append("\n");
						}
					}
				}
				String strStore2 = strBuff.toString();
				if (ent.BLN_POPUP)
				{
					ent.send((char)20+"There are "+nPlayers+" players online:\n"+strStore2+"\n--EOF--\n");
				} else
				{
					ent.chatMessage("\tThere are "+nPlayers+" players online:\n");
					intIndex = strStore2.indexOf("\n");
					while (intIndex != -1 && strStore2.length() > 5)
					{
						ent.chatMessage(strStore2.substring(0,intIndex+1));
						strStore2 = strStore2.substring(intIndex+1);
						intIndex = strStore2.indexOf("\n");
					}
					if (strStore2 != null&& strStore2.length() > 5)
						ent.chatMessage(strStore2);
				}
			}
			return null;
		}
		if (strCommand.equals("kill") || strCommand.equals("attack") || strCommand.equals("a"))
		{
			if (strArgs == null)
			{
				return "Attack what?";
			}
			if(ent.BLN_SLEEP)
			{
				return "You can't do that while you're sleeping";
			}
			DuskObject objStore = ent.getLocalObject(strArgs);
			if (objStore == null)
			{
				return "You don't see that here.";
			}
			if (!objStore.isLivingThing())
			{
				return "You can't fight that.";
			}
			engGame.newBattle(ent,(Entity)objStore);
			return null;
		}
		if (strCommand.equals("order"))
		{
			if (strArgs == null)
			{
				return "Order who to do what?";
			}
			int intStore = strArgs.indexOf(" ");
			if (intStore == -1)
			{
				return "Order them to do what?";
			}
			DuskObject objStore = ent.getLocalObject(strArgs.substring(0,intStore));
			if (objStore == null)
			{
				return "You don't see that here.";
			}
			if (!objStore.isLivingThing())
			{
				return "You can't order that.";
			}
			Entity thnStore = (Entity)objStore;
			if (thnStore.ENT_CHARMER != ent)
			{
				return "They don't take orders from you.";
			}
			strArgs = strArgs.substring(intStore+1);
			try
			{
				ent.chatMessage(Commands.parseCommand(thnStore, engGame, strArgs));
			} catch (Exception e)
			{
				engGame.LOG.printError("parseCommand():"+thnStore.NAME+", while trying to follow the following order: \""+strArgs+"\"",e);
			}
			return null;
		}
		
		if (strCommand.equals("look"))
		{
			if (strArgs == null)
			{
				return "Look at what?";
			}
			if(ent.BLN_SLEEP)
			{
				return "You can't do that while you're sleeping";
			}
			DuskObject objStore = ent.getLocalObject(strArgs);
			if (objStore != null)
			{
				if (objStore.isLivingThing())
				{
					Entity thnStore = (Entity)objStore;
					thnStore.chatMessage(ent.NAME+" is looking at you.\n");
					ent.chatMessage(thnStore.NAME+" has "+thnStore.getCharacterPoints()+"cp and "+thnStore.stats.getHP()+"/"+thnStore.stats.getMAXHP()+"hp.\n");
					if (thnStore.info != null)
						ent.chatMessage("Their description is: "+thnStore.info+"\n");
					/*
					if (thnStore.equWorn.wield != null)
					{
						ent.chatMessage("They are wielding "+thnStore.equWorn.wield.info+".\n");
					}
					if (thnStore.equWorn.arms != null)
					{
						ent.chatMessage("They are wearing "+thnStore.equWorn.arms.info+" on their arms.\n");
					}
					if (thnStore.equWorn.legs != null)
					{
						ent.chatMessage("They are wearing "+thnStore.equWorn.legs.info+" on their legs.\n");
					}
					if (thnStore.equWorn.torso != null)
					{
						ent.chatMessage("They are wearing "+thnStore.equWorn.torso.info+" on their torso.\n");
					}
					if (thnStore.equWorn.waist != null)
					{
						ent.chatMessage("They are wearing "+thnStore.equWorn.waist.info+" on their waist.\n");
					}
					if (thnStore.equWorn.neck != null)
					{
						ent.chatMessage("They are wearing "+thnStore.equWorn.neck.info+" on their neck.\n");
					}
					if (thnStore.equWorn.skull != null)
					{
						ent.chatMessage("They are wearing "+thnStore.equWorn.skull.info+" on their skull.\n");
					}
					if (thnStore.equWorn.eyes != null)
					{
						ent.chatMessage("They are wearing "+thnStore.equWorn.eyes.info+" on their eyes.\n");
					}
					if (thnStore.equWorn.hands != null)
					{
						ent.chatMessage("They are wearing "+thnStore.equWorn.hands.info+" on their hands.\n");
					}
					*/
					return null;
				}else if (objStore.isItem())
				{
					Item itmStore = (Item)objStore;
					return "You see "+itmStore.info+".";
				}else if (objStore.isProp())
				{
					Prop prpStore = (Prop)objStore;
					return "You see "+prpStore.info+".";
				}else if (objStore.isSign())
				{
					Sign sgnStore = (Sign)objStore;
					return "The sign says "+sgnStore.strMessage+".";
				}else if (objStore.isPlayerMerchant())
				{
					ent.chatMessage("You see a merchant that sells\n");
					PlayerMerchant pmrStore = (PlayerMerchant)objStore;
					boolean blnEmptyMerchant = true;
					Iterator iter = pmrStore.vctItems.keySet().iterator();
					Vector vctStore;
					String strSpacer;
					Item itmStore;
					while(iter.hasNext())
					{
						vctStore = (Vector)(pmrStore.vctItems.get(iter.next()));
						itmStore = (Item)vctStore.firstElement();
						strStore = itmStore.NAME;
						strSpacer = "\t";
						if (strStore.length() < 11)
							strSpacer = "\t\t";
						ent.chatMessage("\t"+strStore+strSpacer+itmStore.info+"\n");
						blnEmptyMerchant = false;
					}
					if (blnEmptyMerchant)
					{
						ent.chatMessage("\tNothing at the moment.\n");
					}
				}else if (objStore.isMerchant())
				{
					ent.chatMessage("You see a merchant that sells\n");
					Merchant mrcStore = (Merchant)objStore;
					boolean blnEmptyMerchant = true;
					for (int i=0;i<mrcStore.vctItems.size();i++)
					{
						strStore = (String)mrcStore.vctItems.elementAt(i);
						Item itmStore = engGame.getItem(strStore);
						if (itmStore != null)
						{
							String strSpacer = "\t";
							if (strStore.length() < 11)
								strSpacer = "\t\t";
							ent.chatMessage("\t"+strStore+strSpacer+itmStore.info+"\n");
							blnEmptyMerchant = false;
						} else
						{
							if (strStore.equals("pet"))
							{
								ent.chatMessage("\tpets.\n");
								blnEmptyMerchant = false;
							} else
							{
								strStore = strStore.substring(6,strStore.length());
								ent.chatMessage("\ttraining in "+strStore+"\n");
								blnEmptyMerchant = false;
							}
						}
					}
					if (blnEmptyMerchant)
					{
						ent.chatMessage("\tNothing.\n");
					}
					return null;
				}
			}
			return "You don't see that here.";
		}
		
		if (strCommand.equals("inv") || strCommand.equals("inventory")) {
			ent.chatMessage("-Worn-\n");
			/*
			if (ent.equWorn.skull != null)
			{
				ent.chatMessage("Skull: "+ent.equWorn.skull.NAME+"\n");
			}
			if (ent.equWorn.torso != null)
			{
				ent.chatMessage("Torso: "+ent.equWorn.torso.NAME+"\n");
			}
			if (ent.equWorn.arms != null)
			{
				ent.chatMessage("Arms: "+ent.equWorn.arms.NAME+"\n");
			}
			if (ent.equWorn.legs != null)
			{
				ent.chatMessage("Legs: "+ent.equWorn.legs.NAME+"\n");
			}
			if (ent.equWorn.neck != null)
			{
				ent.chatMessage("Neck: "+ent.equWorn.neck.NAME+"\n");
			}
			if (ent.equWorn.eyes != null)
			{
				ent.chatMessage("Eyes: "+ent.equWorn.eyes.NAME+"\n");
			}
			if (ent.equWorn.waist != null)
			{
				ent.chatMessage("Waist: "+ent.equWorn.waist.NAME+"\n");
			}
			if (ent.equWorn.hands != null)
			{
				ent.chatMessage("Hands: "+ent.equWorn.hands.NAME+"\n");
			}
			if (ent.equWorn.wield != null)
			{
				ent.chatMessage("Wielded: "+ent.equWorn.wield.NAME+".\n");
			}
			ent.chatMessage("-Inventory-:\n");
			Iterator iter = ent.vctItems.keySet().iterator();
			Item itmStore;
			LifoQueue qStore;
			while(iter.hasNext())
			{
				qStore = (LifoQueue)ent.vctItems.get(iter.next());
				if (qStore.size() > 0)
				{
					itmStore = (Item)qStore.firstElement();
					ent.chatMessage(qStore.size()+" "+itmStore.NAME+"\n");
				}
			}
			
			*/
			return null;
		}
		
		if (strCommand.equals("help"))
		{
			RandomAccessFile rafHelp=null;
			synchronized(ent.OUT)
			{
				try
				{
					if (strArgs == null)
					{
						rafHelp = new RandomAccessFile("help","r");
						if (ent.BLN_POPUP)
						{
							ent.send((char)20+"Help\n");
						} else
						{
							ent.chatMessage("Help\n");
						}
					}else
					{
						if (strArgs.indexOf("..") != -1)
						{
							return "There is no help on that subject";
						}
						rafHelp = new RandomAccessFile("helpFiles/"+strArgs,"r");
						if (ent.BLN_POPUP)
						{
							ent.send((char)20+"Help on "+strArgs+"\n");
						} else
						{
							ent.chatMessage("Help on "+strArgs+"\n");
						}
					}
				}catch(Exception e)
				{
					engGame.LOG.printError("parseCommand():When "+ent.NAME+" tried to get help on "+strArgs, e);
					return "There is no help on that subject";
				}
				try
				{
					strStore = rafHelp.readLine();
					while (strStore != null)
					{
						if (ent.BLN_POPUP)
						{
							ent.send(strStore+"\n");
						} else
						{
							ent.chatMessage(strStore+"\n");
						}
						strStore = rafHelp.readLine();
					}
					if (ent.BLN_POPUP)
						ent.send("--EOF--\n");
				}catch(Exception e)
				{
					engGame.LOG.printError("parseCommand():While showing "+ent.NAME+" help on "+strArgs, e);
				}
				try
				{
					rafHelp.close();
				}catch(Exception e)
				{
					engGame.LOG.printError("parseCommand():While closing help on "+strStore+" for "+ent.NAME, e);
				}
			}
			return null;
		}

		if (strCommand.equals("get"))
		{
			if (strArgs == null)
			{
				return "Get what?";
			}
			DuskObject objStore = ent.getLocalObject(strArgs);
			if (objStore == null)
			{
				return "You don't see that here.";
			}
			if (!objStore.isItem())
			{
				return "You can't get that.";
			}
			Item itmStore = (Item)objStore;
			if (Math.abs(ent.intLocX - itmStore.intLocX) + Math.abs(ent.intLocY - itmStore.intLocY) < 2)
			{
				if (ent.PRIVS.toInt(ent.PRIVS) > 2) {
					engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":gets "+strArgs+":"+ent.intLocX+","+ent.intLocY);
				}
				ent.vctItems.addElement(itmStore);
				ent.updateItems();
				engGame.removeDuskObject(itmStore);
			}else
			{
				return "That's too far away.";
			}
			if (itmStore.strOnGetScript != null)
			{
				try
				{
					Script scrStore = new Script("scripts/"+itmStore.strOnGetScript,engGame,false);
					scrStore.varVariables.addVariable("trigger",ent);
					scrStore.varVariables.addVariable("itemname",itmStore.NAME);
				//	scrStore.varVariables.addVariable("mod",itmStore.intMod);
					scrStore.runScript();
					scrStore.close();
				}catch(Exception e) {}
			}
			return null;
		}

		if (strCommand.equals("drop"))
		{
			if (strArgs == null)
			{
				return "Drop what?";
			}
			int intDot = strArgs.indexOf(".");
			int intNumToDrop = 1;
			if (intDot != -1) {
				try
				{
					intNumToDrop = Integer.parseInt(strArgs.substring(0,intDot));
				}catch(NumberFormatException e)
				{
					intNumToDrop = 1;
				}
			}
			Item itmStore = ent.getItem(strArgs);
			if (itmStore != null)
			{
				String strMessage = "You drop "+itmStore.NAME+".";
				if(intNumToDrop > 1)
				{
					strMessage = "You drop "+intNumToDrop+" "+itmStore.NAME+".";
				}
				if (itmStore.intCost==0)
				{
					strMessage = "A "+itmStore.NAME+" vanishes into thin air.";
					if(intNumToDrop > 1)
					{
						strMessage = intNumToDrop+" "+itmStore.NAME+" vanish into thin air.";
					}
				}
				if (ent.PRIVS.toInt(ent.PRIVS) > 2)
				{
					engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":drops "+strArgs+":"+ent.intLocX+","+ent.intLocY);
				}
				Script scrStore = null;
				if (itmStore.strOnDropScript != null)
				{
					try
					{
						scrStore = new Script("scripts/"+itmStore.strOnDropScript,engGame,false);
						scrStore.varVariables.addVariable("trigger",ent);
						scrStore.varVariables.addVariable("itemname",itmStore.NAME);
					//	scrStore.varVariables.addVariable("mod",itmStore.intMod);
					}catch(Exception e) {}
				}
				for (int i=0; i < intNumToDrop; i++)
				{
					itmStore = ent.unequipItem(itmStore.NAME);
					itmStore.intLocX = ent.intLocX;
					itmStore.intLocY = ent.intLocY;
					if (itmStore.intCost!=0)
					{
						engGame.vctItems.addElement(itmStore);
						engGame.addDuskObject(itmStore);
						ent.updateItems();
					}
					if (itmStore.strOnDropScript != null)
					{
						try
						{
							scrStore.runScript();
						}catch(Exception e) {}
					}
				}
				if (itmStore.strOnDropScript != null)
				{
					try
					{
						scrStore.close();
					}catch(Exception e) {}
				}
				return strMessage;
			}
			return "You don't have that.";
		}
		
		if (strCommand.equals("use"))
		{
			if (strArgs == null)
			{
				return "Use what?";
			}
			if (ent.BATTLE == null)
			{
				ent.useItem(strArgs,-1);
			}else
			{
				ent.vctCommands.addElement("use "+strArgs);
			}
			return null;
		}
		if (strCommand.equals("eat"))
		{
			if (strArgs == null)
			{
				return "Eat what?";
			}
			if (ent.BATTLE == null)
			{
				ent.useItem(strArgs,Item.FOOD);
			}else
			{
				ent.vctCommands.addElement("eat "+strArgs);
			}
			return null;
		}
		if (strCommand.equals("drink"))
		{
			if (strArgs == null)
			{
				return "Drink what?";
			}
			if (ent.BATTLE == null)
			{
				ent.useItem(strArgs,Item.DRINK);
			}else
			{
				ent.vctCommands.addElement("drink "+strArgs);
			}
			return null;
		}

		if (strCommand.equals("give"))
		{
			if (strArgs == null)
			{
				return "Give who what?";
			}
			StringTokenizer tknStore = new StringTokenizer(strArgs," ");
			String strStore2 = null;
			try
			{
				strStore2 = tknStore.nextToken();
			}catch (Exception e)
			{
				return "Give who what?";
			}
			DuskObject objStore = ent.getLocalObject(strStore2);
			if (objStore == null)
			{
				return "You don't see them here.";
			}
			if (!objStore.isLivingThing())
			{
				return "You can't give to that.";
			}
			Entity thnStore = (Entity)objStore;
			if ((ent.PRIVS.toInt(thnStore.PRIVS) < 3) && (Math.abs(thnStore.intLocX - ent.intLocX) + Math.abs(thnStore.intLocY - ent.intLocY) > 1))
			{
				return "They're too far away.";
			}
			strArgs = strArgs.substring(strStore2.length()+1);
			if (ent.PRIVS.toInt(thnStore.PRIVS) > 2)
			{
				engGame.LOG.printMessage(Log.INFO,"godcommand:"+ent.NAME+":gives "+strArgs+" to "+strStore2+":"+ent.intLocX+","+ent.intLocY);
			}
			if (strArgs.startsWith("gp"))
			{
				strArgs = strArgs.substring(3);
				try
				{
					int intStore = Integer.parseInt(strArgs);
					if (intStore < 0)
					{
						return "You can't give negative money!";
					}
					if (intStore <= ent.ZENY)
					{
						ent.ZENY -= intStore;
						thnStore.ZENY += intStore;
						ent.updateStats();
						thnStore.updateStats();
						thnStore.chatMessage(ent.NAME+" gives you "+intStore+"gp.\n");
						return "You give "+thnStore.NAME+" "+intStore+"gp.";
					}else
					{
						ent.chatMessage("You don't have that much gp\n");
					}
				}catch (Exception e)
				{
					return "That is not a valid amount of gp to give.";
				}
			}
			int intDot = strArgs.indexOf(".");
			int intNumToGive = 1;
			if (intDot != -1) {
				try
				{
					intNumToGive = Integer.parseInt(strArgs.substring(0,intDot));
				}catch(NumberFormatException e)
				{
					intNumToGive = 1;
				}
			}
			Item itmStore = ent.getItem(strArgs);
			if (itmStore != null)
			{
				String strMessage = ent.NAME+" gives you ";
				String strMessage2 = "You give "+thnStore.NAME+" ";
				if (intNumToGive > 1)
				{
					strMessage += intNumToGive+" ";
					strMessage2 += intNumToGive+" ";
				}
				strMessage += itmStore.NAME+".\n";
				strMessage2 += itmStore.NAME+".\n";
				strStore = itmStore.NAME;
				Script scrDropStore = null;
				Script scrGetStore = null;
				if (itmStore.strOnDropScript != null)
				{
					try
					{
						scrDropStore = new Script("scripts/"+itmStore.strOnDropScript,engGame,false);
					}catch(Exception e) {}
				}
				if (itmStore.strOnGetScript != null)
				{
					try
					{
						scrGetStore = new Script("scripts/"+itmStore.strOnGetScript,engGame,false);
					}catch(Exception e) {}
				}
				while(intNumToGive > 0)
				{
					itmStore = ent.unequipItem(strStore);
					thnStore.vctItems.addElement(itmStore);
					intNumToGive--;
					if (itmStore.strOnDropScript != null)
					{
						try
						{
							scrDropStore.varVariables.clearVariables();
							scrDropStore.varVariables.addVariable("trigger",ent);
							scrDropStore.varVariables.addVariable("itemname",itmStore.NAME);
							//scrDropStore.varVariables.addVariable("mod",itmStore.intMod);
							scrDropStore.runScript();
						}catch(Exception e) {}
					}
					if (itmStore.strOnGetScript != null)
					{
						try
						{
							scrGetStore.varVariables.clearVariables();
							scrGetStore.varVariables.addVariable("trigger",thnStore);
							scrGetStore.varVariables.addVariable("itemname",itmStore.NAME);
							//scrGetStore.varVariables.addVariable("mod",itmStore.intMod);
							scrGetStore.runScript();
						}catch(Exception e) {}
					}
				}
				thnStore.chatMessage(strMessage);
				thnStore.updateItems();
				ent.updateItems();
				if (scrDropStore != null)
					scrDropStore.close();
				if (scrGetStore != null)
					scrGetStore.close();
				return strMessage2;
			}
			return "You don't have that.";
		}
		
		if (strCommand.equals("buy"))
		{
			if (strArgs == null)
			{
				return "Buy what?";
			}
			int quantity;
			try
			{
				int i = strArgs.indexOf(" ");
				quantity = Integer.parseInt(strArgs.substring(0,i));
				strArgs = strArgs.substring(i+1);
			}catch(Exception e)
			{
				return "How many of what do you want to buy?";
			}
			if (quantity > 100)
				quantity = 100;
			else if (quantity < 1)
			{
				return "You can't buy less than one of something.";
			}
			PlayerMerchant pmrStore = engGame.overPlayerMerchant(ent.intLocX,ent.intLocY);
			if (pmrStore != null)
			{
				long numItem = pmrStore.contains(strArgs);
				if (numItem > 0)
				{
					Item itmStore = engGame.getItem(strArgs);
					if (itmStore != null)
					{
						if (quantity > numItem)
						{
							return "This merchant does not have that many.";
						}
						int intCost = (itmStore.intCost * 3) / 4;
						if (ent.NAME.equalsIgnoreCase(pmrStore.strOwner))
						{
							intCost = 0;
						}
						if (intCost*quantity > ent.ZENY)
						{
							return "You can't afford that";
						}else
						{
							ent.ZENY -= intCost*quantity;
							pmrStore.ZENY += intCost*quantity;
							itmStore = pmrStore.remove(strArgs);
							ent.vctItems.addElement(itmStore);
							for (int i=1;i<quantity;i++)
							{
								itmStore = pmrStore.remove(strArgs);
								ent.vctItems.addElement(itmStore);
							}
							ent.updateItems();
							ent.updateStats();
						}
					}
				}
			}

			Merchant mrcStore = engGame.overMerchant(ent.intLocX,ent.intLocY);
			if (mrcStore == null)
			{
				return "Buy from whom?";
			}
			if (ent.ENT_FOLLOWING != null && ent.ENT_FOLLOWING.isPet())
			{
				if (strArgs.startsWith(ent.ENT_FOLLOWING.NAME+":"))
				{
					strArgs = strArgs.substring(ent.ENT_FOLLOWING.NAME.length()+1);
					if (mrcStore.contains(strStore))
					{
						if (strArgs.startsWith("train:"))
						{
							strArgs = strArgs.substring(6);
							mrcStore.train(strArgs,quantity,ent.ENT_FOLLOWING);
							ent.updateStats();
						}
					}
					return null;
				}
			}
			if (mrcStore.contains(strArgs))
			{
				if (strArgs.startsWith("train:"))
				{
					strArgs = strArgs.substring(6);
					mrcStore.train(strArgs,quantity,ent);
					ent.updateStats();
				}else
				{
					if (strArgs.startsWith("pet"))
					{
						mrcStore.pet(ent);
						ent.updateStats();
					}else
					{
						Item itmStore = engGame.getItem(strArgs);
						if (itmStore != null)
						{
							if (itmStore.intCost*quantity > ent.ZENY)
							{
								return "You can't afford that";
							}else
							{
								ent.ZENY -= itmStore.intCost*quantity;
								ent.vctItems.addElement(itmStore);
								for (int i=1;i<quantity;i++)
								{
									ent.vctItems.addElement(engGame.getItem(strArgs));
								}
								ent.updateItems();
								ent.updateStats();
							}
						}
					}
				}	
			}
			return null;
		}
		
		if (strCommand.equals("sell"))
		{
			if (strArgs == null)
			{
				return "Sell what?";
			}

			PlayerMerchant pmrStore = engGame.overPlayerMerchant(ent.intLocX,ent.intLocY);
			if (pmrStore != null)
			{
				if (ent.NAME.equalsIgnoreCase(pmrStore.strOwner))
				{
					int quantity=1;
					try
					{
						int i = strArgs.indexOf(" ");
						quantity = Integer.parseInt(strArgs.substring(0,i));
						strArgs = strArgs.substring(i+1);
					}catch(Exception e)
					{
						return "How many of what do you want to sell?";
					}
					Script scrStore = null;
					Item itmStore = ent.getItem(strArgs);
					if (itmStore != null && itmStore.strOnDropScript != null)
					{
						try
						{
							scrStore = new Script("scripts/"+itmStore.strOnDropScript,engGame,false);
							scrStore.varVariables.addVariable("trigger",ent);
							scrStore.varVariables.addVariable("itemname",itmStore.NAME);
						//	scrStore.varVariables.addVariable("mod",itmStore.intMod);
						}catch(Exception e) {}
					}
					for (int i=0;i<quantity;i++)
					{
						itmStore = ent.unequipItem(strArgs);
						if (itmStore != null)
						{
							if (itmStore.strOnDropScript != null)
							{
								try
								{
									scrStore.runScript();
								}catch(Exception e) {}
							}
							pmrStore.add(itmStore);
							ent.BLN_SAVE_FLAG=true;
						} else {
							i=quantity;
						}
					}
					ent.updateItems();
					ent.updateStats();
					return null;
				}
				return "You cannot sell items to this merchant.";
			}

			Merchant mrcStore = engGame.overMerchant(ent.intLocX,ent.intLocY);
			if (mrcStore == null)
			{
				return "Sell that to whom?";
			}
			int quantity=1;
			try
			{
				int i = strArgs.indexOf(" ");
				quantity = Integer.parseInt(strArgs.substring(0,i));
				strArgs = strArgs.substring(i+1);
			}catch(Exception e)
			{
				return "How many of what do you want to sell?";
			}
			if (quantity > 100)
				quantity = 100;
			Script scrStore = null;
			Item itmStore = ent.getItem(strArgs);
			if (itmStore != null && itmStore.strOnDropScript != null)
			{
				try
				{
					scrStore = new Script("scripts/"+itmStore.strOnDropScript,engGame,false);
					scrStore.varVariables.addVariable("trigger",ent);
					scrStore.varVariables.addVariable("itemname",itmStore.NAME);
				//	scrStore.varVariables.addVariable("mod",itmStore.intMod);
				}catch(Exception e) {}
			}
			for (int i=0;i<quantity;i++)
			{
				itmStore = ent.unequipItem(strArgs);
				if (itmStore != null)
				{
					if (itmStore.strOnDropScript != null)
					{
						try
						{
							scrStore.runScript();
						}catch(Exception e) {}
					}
					ent.ZENY += (itmStore.intCost/2);
					ent.BLN_SAVE_FLAG=true;
				} else {
					i=quantity;
				}
			}
			ent.updateItems();
			ent.updateStats();
			return null;
		}

		if (strCommand.equals("cast"))
		{
			if (strArgs == null)
			{
				return "Cast what?";
			}
			if (ent.BATTLE == null)
			{
				ent.castSpell(strArgs);
			}else
			{
				ent.vctCommands.addElement(strArgs);
			}
			return null;
		}

		if (strCommand.equals("follow"))
		{
			if (strArgs == null)
			{
				return "Follow who?";
			}
			if(ent.BLN_SLEEP)
			{
				return "You can't do that while you're sleeping";
			}
			DuskObject objStore = ent.getLocalObject(strArgs);
			if (objStore == null)
			{
				return "You don't see that here.";
			}
			if (objStore.isLivingThing())
			{
				if (ent.ENT_MASTER != null)
				{
					return "You're already following someone. Leave them first.";
				}
				Entity thnStore = (Entity)objStore;
				if (Math.abs(ent.intLocX - thnStore.intLocX) + Math.abs(ent.intLocY - thnStore.intLocY) > 1)
				{
					return "They're too far away.";
				}
				if (thnStore == ent)
				{
					return "You can't follow yourself.";
				}
				if (!thnStore.isPlayer() && !ent.isMob())
				{
					return "You can only follow players.";
				}
				if (thnStore.BLN_NOFOLLOW || (thnStore.isPet() && thnStore.ENT_MASTER.BLN_NOFOLLOW))
				{
					return "They won't let you follow them.";
				}
				Entity thnStore2 = thnStore;
				while (thnStore2 != null)
				{
					if (ent == thnStore2)
						return "You're already in that group.";
					thnStore2 = thnStore2.ENT_MASTER;
				}
				thnStore.chatMessage("You are now being followed by "+ent.NAME+".\n");
				while (thnStore.ENT_FOLLOWING != null)
				{
					thnStore = thnStore.ENT_FOLLOWING;
					if (thnStore.isPlayer())
						thnStore.chatMessage("You are now being followed by "+ent.NAME+".\n");
				}
				thnStore.ENT_FOLLOWING = ent;
				ent.ENT_MASTER = thnStore;
				thnStore.updateStats();
				ent.updateStats();
				return "You are now following "+ent.ENT_MASTER.NAME+".";
			}
			return "That's not something you can follow.";
		}
		
		if (strCommand.equals("unfollow"))
		{
			if (strArgs == null)
			{
				return "Unfollow who?";
			}
			Entity thnStore = ent.ENT_FOLLOWING;
			if (thnStore != null && thnStore.isPet())
			{
				if (thnStore.NAME.equalsIgnoreCase(strArgs))
				{
					ent.halt();
					ent.chatMessage("Do you really want to permanently erase your pet?\n");
					try
					{
						if (ent.BUF_SCK_IN.readLine().equalsIgnoreCase("yes"))
						{
							ent.ENT_FOLLOWING.close();
							File deleteme = new File("pets/"+ent.NAME.toLowerCase());
							deleteme.delete();
							deleteme = new File("pets/"+ent.NAME.toLowerCase()+".backup");
							deleteme.delete();
							ent.ENT_FOLLOWING.close();
							ent.ENT_FOLLOWING = ent.ENT_FOLLOWING.ENT_FOLLOWING;
							ent.proceed();
							return "Your pet has been erased.";
						}
					}catch(Exception e)
					{
						engGame.LOG.printError("parseCommand():While unfollowing pet for "+ent.NAME, e);
					}
					ent.proceed();
					return null;
				}
				thnStore = thnStore.ENT_FOLLOWING;
			}
			while (thnStore != null)
			{
				if (thnStore.NAME.equalsIgnoreCase(strArgs))
				{
					if (thnStore.isPet())
					{
						thnStore = thnStore.ENT_MASTER;
					}
					thnStore.removeFromGroup();
					return null;
				}
				thnStore = thnStore.ENT_FOLLOWING;
			}
			return "They're not following you.";
		}
		
		if (strCommand.equals("leave"))
		{
			if (ent.isPet())
			{
				return "You can't leave your owner unless they unfollow you.";
			}
			ent.removeFromGroup();
			return "You are now on your own.";
		}
		
		if (strCommand.equals("unclan"))
		{
			if (ent.GUILD.equals("none"))
			{
				return "You're not in a clan.";
			}
			if (ent.BATTLE != null)
			{
				return "Wait until you're done battling.";
			}
			try
			{
				ent.halt();
				ent.chatMessage("Are you sure you want to drop out of your clan? If so say yes.\n");
				if (ent.BUF_SCK_IN.readLine().equalsIgnoreCase("yes"))
				{
					ent.GUILD = "none";
					if (ent.PRIVS.toInt(ent.PRIVS) == 1)
						ent.PRIVS = Privs.BASIC;
					ent.proceed();
					engGame.removeDuskObject(ent);
					engGame.addDuskObject(ent);
					return "You have been removed from your clan.";
				}
			}catch(Exception e)
			{
				engGame.LOG.printError("parseCommand():While "+ent.NAME+" was trying to dropout of their clan",e);
			}
			ent.proceed();
			return null;
		}
		
		if (strCommand.equals("description"))
		{
			if (strArgs == null)
			{
				ent.info = null;
				return "Your description has been removed.";
			}
			ent.info = strArgs;
			return "Your description has been set to:"+ent.info;
		}
		
		if (strCommand.equals("title"))
		{
			if (!ent.isPlayer())
			{
				return "Only players may have titles.";
			}
			if (strArgs == null)
			{
				ent.TITLE = null;
				return "Your title has been removed.";
			}
			ent.TITLE = strArgs;
			if (ent.TITLE.length() > engGame.TITLE_CAP)
			{
				ent.TITLE = ent.TITLE.substring(0,engGame.TITLE_CAP);
			}
			return "Your title has been set to:"+ent.TITLE;
		}
		
		if (strCommand.equals("password"))
		{
			if (!ent.isPlayer())
				return "Only players can change their password.";
			try
			{
				ent.halt();
				ent.chatMessage("Enter your current password.\n");
				String strOldPass = ent.BUF_SCK_IN.readLine();
				if (!strOldPass.equals(ent.PASSWORD))
				{
					ent.proceed();
					return "Sorry, that is not your password.";
				}
				ent.chatMessage("Enter a new password.\n");
				String strNewPass = ent.BUF_SCK_IN.readLine();
				ent.chatMessage("Repeat that password.\n");
				String strNewPassRepeat = ent.BUF_SCK_IN.readLine();
				if (strNewPass == null)
				{
					ent.proceed();
					return "Not a valid password.";
				}
				if (!strNewPass.equals(strNewPassRepeat))
				{
					ent.proceed();
					return "Sorry, those passwords do not match.";
				}
				ent.PASSWORD = strNewPass;
				ent.proceed();
				return "Your password has now been changed.";
			}catch(Exception e)
			{
				engGame.LOG.printError("parseCommand():While "+ent.NAME+" was changing their password", e);
			}
			ent.proceed();
		}
		
		if (strCommand.equals("wear"))
		{
			if (strArgs== null)
			{
				return "Wear what?";
			}
			LifoQueue qStore = (LifoQueue)ent.vctItems.get(strArgs);
			if (qStore != null)
			{
				Item itmStore = (Item)qStore.firstElement();
				switch(itmStore.intType)
				{
					case(1): {
						/*
						if (ent.equWorn.wield != null)
						{
							ent.vctItems.addElement(ent.equWorn.wield);
							ent.runUnWearScript(ent.equWorn.wield);
						}
						ent.equWorn.wield = itmStore;
						ent.runWearScript(ent.equWorn.wield);
						*/
						break;
					}
					case(2): {
					/*	
						switch (itmStore.intKind)
						{
							case(0):
							{
								if (ent.equWorn.arms != null)
								{
									ent.vctItems.addElement(ent.equWorn.arms);
									ent.runUnWearScript(ent.equWorn.arms);
								}
								ent.equWorn.arms = itmStore;
								ent.runWearScript(ent.equWorn.arms);
								break;
							}	
							case(1):
							{
								if (ent.equWorn.legs != null)
								{
									ent.vctItems.addElement(ent.equWorn.legs);
									ent.runUnWearScript(ent.equWorn.legs);
								}
								ent.equWorn.legs = itmStore;
								ent.runWearScript(ent.equWorn.legs);
								break;
							}	
							case(2):
							{
								if (ent.equWorn.torso != null)
								{
									ent.vctItems.addElement(ent.equWorn.torso);
									ent.runUnWearScript(ent.equWorn.torso);
								}
								ent.equWorn.torso = itmStore;
								ent.runWearScript(ent.equWorn.torso);
								break;
							}	
							case(3):
							{
								if (ent.equWorn.waist != null)
								{
									ent.vctItems.addElement(ent.equWorn.waist);
									ent.runUnWearScript(ent.equWorn.waist);
								}
								ent.equWorn.waist = itmStore;
								ent.runWearScript(ent.equWorn.waist);
								break;
							}	
							case(4):
							{
								if (ent.equWorn.neck != null)
								{
									ent.vctItems.addElement(ent.equWorn.neck);
									ent.runUnWearScript(ent.equWorn.neck);
								}
								ent.equWorn.neck = itmStore;
								ent.runWearScript(ent.equWorn.neck);
								break;
							}	
							case(5):
							{
								if (ent.equWorn.skull != null)
								{
									ent.vctItems.addElement(ent.equWorn.skull);
									ent.runUnWearScript(ent.equWorn.skull);
								}
								ent.equWorn.skull = itmStore;
								ent.runWearScript(ent.equWorn.skull);
								break;
							}	
							case(6):
							{
								if (ent.equWorn.eyes != null)
								{
									ent.vctItems.addElement(ent.equWorn.eyes);
									ent.runUnWearScript(ent.equWorn.eyes);
								}
								ent.equWorn.eyes = itmStore;
								ent.runWearScript(ent.equWorn.eyes);
								break;
							}	
							case(7):
							{
								if (ent.equWorn.hands != null)
								{
									ent.vctItems.addElement(ent.equWorn.hands);
									ent.runUnWearScript(ent.equWorn.hands);
								}
								ent.equWorn.hands = itmStore;
								ent.runWearScript(ent.equWorn.hands);
								break;
							}
						}
					*/
						break;
					}
					default:
						return "You can't wear that";
				}
				ent.vctItems.removeElement(itmStore.NAME);
				if (ent.isPet())
					ent.ENT_MASTER.updateStats();
				if (ent.isPlayer())
					ent.updateStats();
				ent.updateEquipment();
				ent.updateItems();
				return null;
			}
			return "You don't have that";
		}
		if (strCommand.equals("unwear"))
		{
			if (strArgs == null)
			{
				return "Unwear what?";
			}
			//ent.unWear(strArgs);
			return null;
		}
		if (strCommand.equals("rement"))
		{
			if (strArgs == null)
			{
				return null;
			}
			long lngID = Long.parseLong(strArgs);
			DuskObject objStore;
			synchronized(ent.vctEntities)
			{
				for (int i=0;i<ent.vctEntities.size();i++)
				{
					objStore = (DuskObject)ent.vctEntities.elementAt(i);
					if (lngID == objStore.ID)
					{
						ent.vctEntities.removeElementAt(i);
						return null;
					}
				}
			}
			return null;
		}
		if (strCommand.equals("audio"))
		{
			if (strArgs == null)
			{
				if (ent.BLN_AUDIO)
				{
					return "Your audio is turned on.";
				}
				return "Your audio is turned off.";
			} else if (strArgs.equalsIgnoreCase("off"))
			{
				ent.BLN_AUDIO = false;
				return "Your audio has been turned off.";
			} else if (strArgs.equalsIgnoreCase("on"))
			{
				ent.BLN_AUDIO = true;
				return "Your audio has been turned on.";
			}
		}
		if (strCommand.equals("color"))
		{
			if (strArgs == null)
			{
				if (ent.BLN_COLOR)
				{
					return "Your color is turned on.";
				}
				return "Your color is turned off.";
			} else if (strArgs.equalsIgnoreCase("off"))
			{
				ent.BLN_COLOR = false;
				return "Your color has been turned off.";
			} else if (strArgs.equalsIgnoreCase("on"))
			{
				ent.BLN_COLOR = true;
				return "Your color has been turned on.";
			}
		}
		if (strCommand.equals("popup"))
		{
			if (strArgs == null)
			{
				if (ent.BLN_POPUP)
				{
					return "You have popup windows turned on.";
				}
				return "You have popup windows turned off.";
			} else if (strArgs.equalsIgnoreCase("off"))
			{
				ent.BLN_POPUP = false;
				return "You have turned popup windows off.";
			} else if (strArgs.equalsIgnoreCase("on"))
			{
				ent.BLN_POPUP = true;
				return "You have turned popup windows on.";
			}
		}
		if (strCommand.equals("BLN_NOFOLLOW"))
		{
			if (strArgs == null)
			{
				if (ent.BLN_NOFOLLOW)
				{
					return "You are not allowed to be followed.";
				}
				return "Your can be followed.";
			} else if (strArgs.equalsIgnoreCase("off"))
			{
				ent.BLN_NOFOLLOW = false;
				return "You can now be followed.";
			} else if (strArgs.equalsIgnoreCase("on"))
			{
				ent.BLN_NOFOLLOW = true;
				return "You can no longer be followed.";
			}
		}
		if (strCommand.equals("ignore"))
		{
			if (strArgs == null)
			{
				return "Ignore who?";
			}
			Entity thnStore = engGame.getPlayer(strArgs);
			if (thnStore == null)
			{
				return "They're not in this world.";
			}
			String strIgnoreName = thnStore.NAME.toLowerCase();
			if (ent.NAME.equalsIgnoreCase(strIgnoreName))
			{
				return "Trying to ignore yourself is not a good sign.";
			}
			if (thnStore.PRIVS.toInt(thnStore.PRIVS) > 2)
			{
				return "You cannot ignore a god.";
			}
			if (!ent.vctIgnore.contains(strIgnoreName))
			{
				ent.vctIgnore.addElement(strIgnoreName);
			} else
			{
				return "You are already ignoring them.";
			}
			return "You are now ignoring "+strIgnoreName;
		}
		if (strCommand.equals("unignore"))
		{
			if (strArgs == null)
			{
				return "UnIgnore who?";
			}
			String strIgnoreName = strArgs.toLowerCase();
			if (strIgnoreName == "all")
			{
				ent.vctIgnore.removeAllElements();
				return "You are no longer ignoring anyone.";
			}
			if (ent.vctIgnore.contains(strIgnoreName))
			{
				ent.vctIgnore.removeElement(strIgnoreName);
			} else
			{
				return "You are not ignoring them.";
			}
			return "You are no longer ignoring "+strIgnoreName;
		}
		if (strCommand.equals("appletimages"))
		{
			ent.updateAppletImages();
			return null;
		}
		if (strCommand.equals("applicationimages"))
		{
			ent.updateApplicationImages();
			return null;
		}
		if (strCommand.equals("notdead"))
		{
			return null;
		}
		if (strCommand.equals("quit") || strCommand.equals("logout"))
		{
			if (ent.BATTLE == null)
			{
				ent.close();
				return null;
			}
			return "You cannot quit in the middle of a fight.";
		}
		if (!blnFoundScriptedCommand)
		{
			return "huh?";
		}
		return null;
	}
}
