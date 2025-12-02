import java.io.*;
import java.util.Date;
import java.util.Vector;
import java.util.Iterator;
import java.util.StringTokenizer;


public class Commands
{
	public static String parseCommand(LivingThing lt, DuskEngine engGame, String strStore) throws Exception
	{
		if (strStore == null)
			return null;
		if (lt == null)
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

		if (strCommand.length() < 1)
		{
			return "huh?";
		}

		lt.blnContinueToCommands = true;
		boolean blnFoundScriptedCommand=false;
		/*
		** Don't try to find a scripted command if they are doing a tell
		*/
		if (strCommand.substring(0,1) != "/")
		{
			try
			{
				Script scrStore = new Script("commands/"+strCommand,engGame,false);
				scrStore.varVariables.addVariable("trigger",lt);
				if (strArgs != null)
				{
					scrStore.runScript(strArgs);
				}else
				{
					scrStore.runScript();
				}
				scrStore.close();
				blnFoundScriptedCommand=true;
			}catch (Exception e) {blnFoundScriptedCommand=false;}
			if (!lt.blnContinueToCommands)
			{
				return null;
			}
		}
		if (strCommand.equals("north") || strCommand.equals("n"))
		{
			if (lt.thnMaster != null)
			{
				if (!lt.isPet() || lt.thnMaster.thnFollowing == lt)
				{
					return "You can't move while you're following someone.";
				}
			}
			synchronized(lt.vctMovement)
			{
    			lt.vctMovement.removeAllElements();
    			lt.vctMovement.addElement("n");
			}
		    return null;
	    }
		if (strCommand.equals("south") || strCommand.equals("s"))
		{
			if (lt.thnMaster != null)
			{
				if (!lt.isPet() || lt.thnMaster.thnFollowing == lt)
				{
					return "You can't move while you're following someone.";
				}
			}
			synchronized(lt.vctMovement)
			{
	    		lt.vctMovement.removeAllElements();
				lt.vctMovement.addElement("s");
			}
		    return null;
	    }
		if (strCommand.equals("west") || strCommand.equals("w"))
		{
			if (lt.thnMaster != null)
			{
				if (!lt.isPet() || lt.thnMaster.thnFollowing == lt)
				{
					return "You can't move while you're following someone.";
				}
			}
			synchronized(lt.vctMovement)
			{
	    		lt.vctMovement.removeAllElements();
				lt.vctMovement.addElement("w");
			}
		    return null;
	    }
		if (strCommand.equals("east") || strCommand.equals("e"))
		{
			if (lt.thnMaster != null)
			{
				if (!lt.isPet() || lt.thnMaster.thnFollowing == lt)
				{
					return "You can't move while you're following someone.";
				}
			}
			synchronized(lt.vctMovement)
			{
	    		lt.vctMovement.removeAllElements();
				lt.vctMovement.addElement("e");
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
				engGame.log.printError("parseCommand():"+lt.strName+" tried to "+strStore, e);
    			return null;
    		}
			return lt.goTo(destX, destY);
		}

   		if (lt.privs == 1)
   		{
   			if (strCommand.equals("addmember"))
   			{
   				if (strArgs==null)
				{
					return "Add who?";
				}
				LivingThing thnStore = engGame.getPlayer(strArgs);
				if (thnStore == null)
				{
					return "They're not in this world";
				}
				if (lt.batBattle != null)
				{
					return "Not while you're fighting!";			
				}
				if (thnStore.batBattle != null)
				{
					thnStore.chatMessage(lt.strName+" has invited you to join their clan, but you are in the middle of a battle");
					return "They're in the middle of a battle. They have been notified that you tried to clan them.";
				}
				lt.chatMessage("You have invited "+thnStore.strName+" to join the clan "+lt.strClan+".");
				thnStore.halt();
				thnStore.stillThere();  // This puts something in the buffer
				thnStore.stillThere();  // Have to do this twice to ensure that thnStore is out of
										// its read loop
				lt.thrConnection.sleep(500);  // wait for the "notdead" response to get back from client.
				try
				{
					// Empty out the BufferedReader for the answer
					while (thnStore.bfrSocketIn.ready()) thnStore.bfrSocketIn.read();
				} catch (Exception e)
				{
					engGame.log.printError("parseCommand():While "+lt.strName+" was trying to addmember "+thnStore.strName, e);
				}
				thnStore.chatMessage(lt.strName+" has invited you to join the clan "+lt.strClan+". If you accept, type yes.");
				try
				{
					if (thnStore.bfrSocketIn.readLine().equalsIgnoreCase("yes"))
					{
						thnStore.strClan = lt.strClan;
						if (thnStore.privs == 1)
							thnStore.privs = 0;
						thnStore.chatMessage("You have been added to the clan, "+lt.strClan+"");
						thnStore.proceed();
						engGame.removeDuskObject(thnStore);
						engGame.addDuskObject(thnStore);
						return thnStore.strName+" has accepted your invitation.";
					}
				} catch (Exception e)
				{
					engGame.log.printError("parseCommand():While reading the answer to "+lt.strName+"'s attempt to addmember "+thnStore.strName, e);
				}
				thnStore.proceed();
				return thnStore.strName+" has declined your invitation.";
   			}
   			if (strCommand.equals("kick"))
   			{
   				if (strArgs==null)
				{
					return "Kick who?";
				}
				LivingThing thnStore = engGame.getPlayer(strArgs);
				if (thnStore == null)
				{
					return "They're not in this world.";
				}
				if (!thnStore.strClan.equalsIgnoreCase(lt.strClan))
				{
					return "They're not in your clan.";
				}
				thnStore.chatMessage("You have been kicked out of "+lt.strClan+".");
				thnStore.strClan = "none";
				engGame.removeDuskObject(thnStore);
				engGame.addDuskObject(thnStore);
				return thnStore.strName+" has been kicked out of your clan.";
   			}
   		}
		if (lt.privs > 2)
		{
			if (lt.privs > 4)
			{
				if (strCommand.equals("makegod"))
				{
					engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
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
					int level = Integer.parseInt(strArgs.substring(iSPloc).trim());

					LivingThing thnStore = engGame.getPlayer(sName);
					if (thnStore == null)
					{
					  return "They're not in this world.";
					}
					int oldLevel = thnStore.privs;
					thnStore.privs = level;
					thnStore.blnShouldSave = true;
					engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":Changed "+thnStore.strName+"'s priveledges from "+oldLevel+" to "+level+".");
					return thnStore.strName+"'s priveledges have been set to "+level+".";
				}
				if (strCommand.equals("reloadprefs"))
				{
					engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
					engGame.loadPrefs();
					return "Preferences reloaded";
				}
		        if (strCommand.equals("resizemap"))
		        {
					engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
					engGame.resizeMap(lt.intLocX+1,lt.intLocY+1);
					return "Map resized";
				}else if (strCommand.equals("shutdown"))
				{
					engGame.log.printMessage(Log.ALWAYS,lt.strName+" has shut down the server.");
					engGame.chatMessage("The server is going down.","default");
					engGame.blnShuttingDown = true;
					LivingThing thnStore=null;
					for (int i=0;i < engGame.vctSockets.size();i++)
					{
						try
						{
							thnStore = (LivingThing)engGame.vctSockets.elementAt(i);
							if (thnStore != lt)
							{
								thnStore.close();
							}
						}catch (Exception e)
						{
							if (thnStore != null)
							{
								engGame.log.printError("parseCommand():While trying to close "+thnStore.strName+" for "+lt.strName+"'s shutdown request", e);
							} else
							{
								engGame.log.printError("parseCommand():While trying to close a null player for "+lt.strName+"'s shutdown request", e);
							}
						}
					}
					lt.blnShouldSave = true;
					lt.savePlayer();
					System.gc();
					System.exit(0);
				}else if (strCommand.equals("stop"))
				{
					engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
					engGame.blnShuttingDown = true;
					return "Stopped accepting incoming socket connections.";
				}else if (strCommand.equals("start"))
				{
					engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
					engGame.blnShuttingDown = false;
					return "Started accepting incoming connections";
				}else if (strCommand.equals("filteron"))
				{
					engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
					engGame.blnIPF = true;
					return "Started filtering duplicate IP addressess of socket connections.";
				}else if (strCommand.equals("filteroff"))
				{
					engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
					engGame.blnIPF = false;
					return "Stopped filtering duplicate IP addressess of socket connections.";
				}else if (strCommand.equals("floodlimit"))
				{
					engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
               		if (strArgs == null)
               		{
                   		return "What value do you want the floodlimit to have?";
               		}
					try
					{
						engGame.floodLimit = (long)Integer.parseInt(strArgs);
						return "Set floodlimit to "+strArgs+" milliseconds.";
					} catch (Exception e)
					{
						engGame.log.printError("parseCommand():Invalid value \""+strArgs+"\" for floodlimit.", e);
						return "Invalid value \""+strArgs+"\" for floodlimit.";
					}
				}else if (strCommand.equals("ipban"))
				{
					String strBlockedIP;
					if (strArgs == null)
					{
						return "Whos IP address do you wish to ban?";
					}
					LivingThing thnStore = engGame.getPlayer(strArgs);
					if (thnStore == null)
					{
						return "They're not in this world.";
					}
					engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
					String strIP = thnStore.sckConnection.getInetAddress().toString();
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
								lt.rafFile.close();
								return "Already blocked.";
							}
							strBlockedIP = lt.rafFile.readLine();
						}
						lt.rafFile.close();
						rafBannedIP = new RandomAccessFile("conf/blockedIP","rw");
						rafBannedIP.seek(rafBannedIP.length());
						rafBannedIP.writeBytes(strIP+"\n");
						lt.rafFile.close();
						return thnStore.strName+"'s IP address has been blocked.";
					} catch (Exception e)
					{
						engGame.log.printError("parseCommand():When "+lt.strName+" tried to ban "+thnStore+"'s IP address", e);
					}
				}else if (strCommand.equals("loglevel"))
				{
					engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
					if (strArgs == null)
					{
						return "Logging level is currently "+engGame.log.getLogLevel();
					}
					try
					{
						int level = Integer.parseInt(strArgs);
						engGame.log.setLogLevel(level);
						return "Logging level is now "+engGame.log.getLogLevel();
					} catch (Exception e)
					{
						engGame.log.printError("parseCommand():Invalid value \""+strArgs+"\" for loglevel.", e);
						return "Invalid value \""+strArgs+"\" for loglevel.";
					}
				}else if (strCommand.equals("gc"))
				{
					engGame.log.printMessage(Log.INFO,"Starting garbage collection.");
					System.gc();
					engGame.log.printMessage(Log.INFO,"Finished garbage collection.");
					return "Finished garbage collection.";
				}else if (strCommand.equals("finalize"))
				{
					engGame.log.printMessage(Log.INFO,"Starting finalization.");
					System.runFinalization();
					engGame.log.printMessage(Log.INFO,"Finished finalization.");
					return "Finished finalization.";
				}else if (strCommand.equals("cleanup"))
				{
					DuskObject objStore;
					LivingThing thnStore;
					engGame.log.printMessage(Log.INFO,"Starting cleanup.");
					for(int x=0;x<engGame.MapColumns;x++)
					{
						for(int y=0;y<engGame.MapRows;y++)
						{
							objStore = engGame.objEntities[x][y];
							while (objStore != null)
							{
								if (objStore.isLivingThing())
								{
									thnStore = (LivingThing)objStore;
									if (thnStore.isPlayer())
									{
										if(!engGame.vctSockets.contains(thnStore))
										{
											engGame.log.printMessage(Log.INFO,"**found defunct player at "+x+","+y+" during cleanup.");
											engGame.removeDuskObject(thnStore);
											thnStore.batBattle=null;
											thnStore.blnStopThread=true;
										}
									}
									if (thnStore.isPet())
									{
										if(!engGame.vctPets.contains(thnStore))
										{
											engGame.log.printMessage(Log.INFO,"**found defunct pet at "+x+","+y+" during cleanup.");
											engGame.removeDuskObject(thnStore);
										}
									}
								}
								objStore = objStore.objNext;
							}
						}
					}
					engGame.log.printMessage(Log.INFO,"Finished cleanup.");
					return "Finished cleanup.";
				}
			}
			if (strCommand.equals("save"))
			{
				if (engGame.blnSavingGame)
					return "Game already being saved, please wait.";
				engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
		    	engGame.saveMap();
				return "Game settings saved";
			}else if (strCommand.equals("backup"))
			{
				engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
				engGame.backupMap();
				return "Game settings backed up";
			}else if (strCommand.equals("list"))
			{
				if (strArgs == null)
				{
					return "What do you want to list?";
				}
				engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
				strStore = strStore.substring(5);
				String strFileName = null;
				String strTitle = null;
				if (strArgs.equals("items"))
				{
					strFileName = "defItems";
					strTitle = "Items:\n";
				}else if (strArgs.equals("conf"))
				{
					strFileName = "conf";
					strTitle = "Conf files:\n";
				}else if (strArgs.equals("mobs"))
				{
					strFileName = "defMobs";
					strTitle = "Mobiles:\n";
				}else if (strArgs.equals("commands"))
				{
					strFileName = "commands";
					strTitle = "Custom commands:\n";
				}else if (strArgs.equals("races"))
				{
					strFileName = "defRaces";
					strTitle = "Races:\n";
				}else if (strArgs.equals("pets"))
				{
					strFileName = "defPets";
					strTitle = "Pets:\n";
				}else if (strArgs.equals("factions"))
				{
					strFileName = "factions";
					strTitle = "Factions:\n";
				}else if (strArgs.equals("conditions"))
				{
					strFileName = "defConditions";
					strTitle = "Conditions:\n";
				}else if (strArgs.equals("help"))
				{
					strFileName = "helpFiles";
					strTitle = "Help Files:\n";
				}else if (strArgs.equals("scripts"))
				{
					strFileName = "scripts";
					strTitle = "Scripts:\n";
				}else if (strArgs.equals("spell groups"))
				{
					strFileName = "defSpellGroups";
					strTitle = "Spell Groups:\n";
				}else if (strArgs.equals("spells"))
				{
					strFileName = "defSpells";
					strTitle = "Spells:\n";
				}else if (strArgs.equals("props"))
				{
					strFileName = "defProps";
					strTitle = "Props:\n";
				}else if (strArgs.equals("move actions"))
				{
					strFileName = "defMoveActions";
					strTitle = "Move Action Scripts:\n";
				}else if (strArgs.equals("can move"))
				{
					strFileName = "defCanMoveScripts";
					strTitle = "Can Move Scripts:\n";
				}else if (strArgs.equals("can see"))
				{
					strFileName = "defCanSeeScripts";
					strTitle = "Can See Scripts:\n";
				}else if (strArgs.equals("tile actions"))
				{
					strFileName = "defTileActions";
					strTitle = "Tile Action Scripts:\n";
				}else if (strArgs.equals("tile move"))
				{
					strFileName = "defTileScripts";
					strTitle = "Can Move Tile Scripts:\n";
				}else if (strArgs.equals("tile see"))
				{
					strFileName = "defTileSeeScripts";
					strTitle = "Tile See Scripts:\n";
				}
				if (strFileName != null)
				{
					File filList = new File(strFileName);
					String strResult[] = filList.list();
					StringBuffer strBuff = new StringBuffer();
					strBuff.append(""+(char)20+strTitle+"\n");
					for (int i=0;i<strResult.length;i++)
					{
						// Only output files that do not end in .dsko
						if (strResult[i].indexOf(".dsko") == -1)
						{
							strBuff.append(strResult[i]+"\n");
						}
					}
					strBuff.append("--EOF--\n");
					lt.send(strBuff.toString());
					return null;
				}
				return "You can't list that.";
			}else if (strCommand.equals("view"))
			{
				if (strArgs == null)
				{
					return "What do you want to view?";
				}
				engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
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
					if (lt.privs < 5)
					{
						return "You don't have enough privelages to edit a user's file.";
					}
					blnUser = true;
					strFileName = "users/"+strArgs.substring(5);
				}else if (strArgs.startsWith("pet "))
				{
					if (lt.privs < 5)
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
					lt.send((char)18+strArgs+"\n--EOF--\n");
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
					lt.send(strBuff.toString());
				}catch(Exception e)
				{
					engGame.log.printError("parseCommand():Reading file for "+filView.getName(), e);
				}
				try
				{
					rafView.close();
				}catch(Exception e)
				{
					engGame.log.printError("parseCommand():Closing file after "+filView.getName(), e);
				}
				return null;
			}else if (strCommand.equals("submit"))
			{
				if (strArgs == null)
				{
					return "What do you want to submit?";
				}
				if ((lt.privs < 4) && (!strArgs.startsWith("mob ")))
				{
					return "You are not allowed to submit files.";
				}
				engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
				if (strArgs.indexOf("..") != -1)
				{
					return "You don't have permission to access that file.";
				}
				boolean compile=false;
				boolean blnUser=false;
				boolean blnPet=false;
				String strFileName = null;
				if (strArgs.startsWith("item ") && (lt.privs > 3))
				{
					strArgs = strArgs.toLowerCase();
					strFileName = "defItems/"+strArgs.substring(5);
				}else if (strArgs.startsWith("conf ") && (lt.privs > 3))
				{
					strFileName = "conf/"+strArgs.substring(5);
				}else if (strArgs.startsWith("mob "))
				{
					strFileName = "defMobs/"+strArgs.substring(4);
				}else if (strArgs.startsWith("command ") && (lt.privs > 3))
				{
					strFileName = "commands/"+strArgs.substring(8);
					compile=true;
				}else if (strArgs.startsWith("race ") && (lt.privs > 3))
				{
					strFileName = "defRaces/"+strArgs.substring(5);
				}else if (strArgs.startsWith("pet ") && (lt.privs > 3))
				{
					strFileName = "defPets/"+strArgs.substring(4);
				}else if (strArgs.startsWith("faction") && (lt.privs > 3))
				{
					return "You cannot submit faction files.";
				}else if (strArgs.startsWith("condition ") && (lt.privs > 3))
				{
					strFileName = "defConditions/"+strArgs.substring(10);
				}else if (strArgs.startsWith("help ") && (lt.privs > 3))
				{
					strFileName = "helpFiles/"+strArgs.substring(5);
				}else if (strArgs.startsWith("script ") && (lt.privs > 3))
				{
					strFileName = "scripts/"+strArgs.substring(7);
					compile=true;
				}else if (strArgs.startsWith("spell group ") && (lt.privs > 3))
				{
					strFileName = "defSpellGroups/"+strArgs.substring(12);
					compile=true;
				}else if (strArgs.startsWith("spell ") && (lt.privs > 3))
				{
					strFileName = "defSpells/"+strArgs.substring(6);
				}else if (strArgs.startsWith("prop "))
				{
					strFileName = "defProps/"+strArgs.substring(5);
				}else if (strArgs.startsWith("move action ") && (lt.privs > 3))
				{
					strFileName = "defMoveActions/"+strArgs.substring(12);
					compile=true;
				}else if (strArgs.startsWith("can move ") && (lt.privs > 3))
				{
					strFileName = "defCanMoveScripts/"+strArgs.substring(9);
					compile=true;
				}else if (strArgs.startsWith("can see ") && (lt.privs > 3))
				{
					strFileName = "defCanSeeScripts/"+strArgs.substring(8);
					compile=true;
				}else if (strArgs.startsWith("tile action ") && (lt.privs > 3))
				{
					strFileName = "defTileActions/"+strArgs.substring(12);
					compile=true;
				}else if (strArgs.startsWith("tile move ") && (lt.privs > 3))
				{
					strFileName = "defTileScripts/"+strArgs.substring(10);
					compile=true;
				}else if (strArgs.startsWith("tile see ") && (lt.privs > 3))
				{
					strFileName = "defTileSeeScripts/"+strArgs.substring(9);
					compile=true;
				}else if (strArgs.startsWith("user "))
				{
					if (lt.privs < 5)
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
					if (lt.privs < 5)
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
					strStore = lt.bfrSocketIn.readLine();
					while (!strStore.equals("--EOF--"))
					{
						rafView.writeBytes(strStore+"\n");
						strStore = lt.bfrSocketIn.readLine();
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
					engGame.log.printError("parseCommand():While submitting file "+strArgs+" ("+filView.getName()+")", e);
					try
					{
						rafView.close();
					}catch(Exception e2)
					{
						engGame.log.printError("parseCommand():While closing file "+strArgs+" ("+filView.getName()+") after failed submit", e);
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
				if (lt.privs < 4)
				{
					return "You are not allowed to delete files.";
				}
				engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
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
				engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
				LivingThing thnStore = engGame.getPlayer(strArgs.substring(0,strArgs.indexOf(' ')));
				if (thnStore == null)
				{
					return "They're not in this world";
				}
				if (strArgs.length() < thnStore.strName.length()+2)
				{
					return "What clan?";
				}
				if (thnStore.privs > 1)
				{
					return "You can't clanleader them.";
				}
				strArgs = strArgs.substring(thnStore.strName.length()+1);
				thnStore.strClan = strArgs;
				if (strArgs.equals("none"))
				{
					thnStore.privs = 0;
					thnStore.chatMessage("You are now clanless.");
				}else
				{
					thnStore.privs = 1;
					thnStore.chatMessage("You are now a member of the "+strArgs+" clan.");
				}
				engGame.removeDuskObject(thnStore);
				engGame.addDuskObject(thnStore);
				return thnStore.strName+" is now a leader of the "+strArgs+" clan.";
			}
			if (strCommand.equals("boot"))
			{
				if (strArgs == null)
				{
					return "Boot who?";
				}
				engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
				LivingThing thnStore = engGame.getPlayer(strArgs);
				if (thnStore == null)
					return "They're not in this world.";
				if (thnStore.privs >= lt.privs)
				{
					thnStore.chatMessage(lt.strName+" attempted to boot you.");
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
				engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
				LivingThing thnStore = engGame.getPlayer(strArgs);
				if (thnStore == null)
					return "They're not in this world.";
				if (thnStore.privs >= lt.privs)
				{
					thnStore.chatMessage(lt.strName+" attempted to HardKill you.");
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
				engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
				LivingThing thnStore;
				int duration;
				try
				{
					thnStore = engGame.getPlayer(strArgs.substring(0,strArgs.indexOf(" ")));
					duration = Integer.parseInt(strArgs.substring(strArgs.indexOf(" ")+1));
				}catch(Exception e)
				{
					engGame.log.printError("parseCommand():When "+lt.strName+" tried to nochannel "+strArgs, e);
					return "nochannel who for how long?";
				}
				if (thnStore == null)
					return "They're not in this world.";
				if (thnStore.privs >= lt.privs)
				{
					thnStore.chatMessage(lt.strName+" attempted to nochannel you.");
					return "You do not have high enough privelages to nochannel them.";
				}
				if (duration > engGame.noChannelMax)
				{
					duration = engGame.noChannelMax;
				}
				thnStore.chatMessage("You have been nochanneled for "+duration+" seconds.");
				thnStore.noChannel = duration;
				return "You have nochanneled "+thnStore.strName+" for "+duration+" seconds";
			}
			if (strCommand.equals("allowchannel"))
			{
				if (strArgs == null)
				{
					return "allowchannel who?";
				}
				engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
				LivingThing thnStore = engGame.getPlayer(strArgs);
				if (thnStore == null)
				{
					return "They're not in this world.";
				}
				thnStore.chatMessage("Your nochannel status has been removed.");
				thnStore.noChannel = 0;
				return thnStore.strName+"'s nochannel status has been removed.";
			}
			if (strCommand.equals("gecho"))
			{
				if (strArgs == null)
				{
					return "G-Echo what?";
				}
				engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
				engGame.chatMessage(strArgs,"default");
				return null;
			}
	    	if (strCommand.equals("teleport"))
   			{
				if (strArgs == null)
   				{
   					return "Teleport to where?";
   				}
				engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
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
					if (lt.privs < 5 && destX >= engGame.MapColumns)
						destX = engGame.MapColumns-1;
					if (lt.privs < 5 && destY >= engGame.MapRows)
						destY = engGame.MapRows-1;
					if (destX < 0)
						destX = 0;
					if (destY < 0)
						destY = 0;
    				lt.changeLocBypass(destX,destY);
    			}catch (Exception e)
    			{
    				LivingThing thnStore = engGame.getPlayer(strArgs);
    				if (thnStore == null)
    					return "Teleport to where?";
    				else
					{
						int destX = thnStore.intLocX;
						int destY = thnStore.intLocY;
						if (lt.privs < 5 && destX > 349)
							destX = 349;
						if (lt.privs < 5 && destY > 349)
							destY = 349;
						if (destX < 0)
							destX = 0;
						if (destY < 0)
							destY = 0;
    					lt.changeLocBypass(destX,destY);
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
				engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
				DuskObject objStore = lt.getLocalObject(strArgs);
				if (objStore != null)
				{
					if (objStore.isLivingThing())
					{
						LivingThing thnStore = (LivingThing)objStore;
						if(thnStore.isMob())
						{
							thnStore.close();
							engGame.blnMobListChanged=true;
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
						engGame.blnSignListChanged=true;
						engGame.removeDuskObject(objStore);
						return "Object removed.";
					}else if (objStore.isProp())
					{
						engGame.vctProps.removeElement(objStore);
						engGame.blnPropListChanged=true;
						engGame.removeDuskObject(objStore);
						return "Object removed.";
					}else if (objStore.isMerchant())
					{
						engGame.vctMerchants.removeElement(objStore);
						engGame.blnMerchantListChanged=true;
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
				LivingThing thnStore = engGame.getPlayer(strArgs.substring(0,strArgs.indexOf(' ')));
				if (thnStore == null)
				{
					return "They're not in this world";
				}
				if (strStore.length() < thnStore.strName.length()+2)
				{
					return "What clan?";
				}
				engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
				strArgs = strArgs.substring(thnStore.strName.length()+1);
				thnStore.strClan = strArgs;
				if (thnStore.privs==1)
					thnStore.privs=0;
				if (strArgs.equals("none"))
					thnStore.chatMessage("You are now a member of no clan.");
				else
					thnStore.chatMessage("You are now a member of the "+strArgs+" clan.");
				return thnStore.strName+" has been added to the "+strArgs+" clan";
			}
			if (strCommand.equals("madd"))
			{
				if (strArgs == null)
				{
					return "Madd what?";
				}
				Merchant mrcStore = engGame.overMerchant(lt.intLocX,lt.intLocY);
				if (mrcStore != null)
				{
					engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
					mrcStore.vctItems.addElement(strArgs);
		    		engGame.refreshEntities(lt);
				} else
				{
					if(engGame.overPlayerMerchant(lt.intLocX,lt.intLocY) != null)
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
				Merchant mrcStore = engGame.overMerchant(lt.intLocX,lt.intLocY);
				if (mrcStore != null)
				{
					engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
					mrcStore.vctItems.removeElement(strArgs);
		    		engGame.refreshEntities(lt);
				} else
				{
					if(engGame.overPlayerMerchant(lt.intLocX,lt.intLocY) != null)
					{
						return "You cannot remove items from a player's merchant this way.";
					}
					return "You are not on a merchant.";
				}
				return null;
			}
		    if (strCommand.equals("whoip"))
		    {
				engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
				synchronized(lt.stmOut)
				{
					int nPlayers = engGame.vctSockets.size();
					StringBuffer strBuff = new StringBuffer();
					LivingThing thnStore = null;
					for (int i=0;i<engGame.vctSockets.size();i++)
					{
						thnStore = (LivingThing)engGame.vctSockets.elementAt(i);
						boolean hidden = false;
						boolean skip = false;
						if (thnStore.privs > 2)
						{
							if (thnStore.hasCondition("invis"))
							{
								hidden = true;
							}
						}
						if (hidden && (lt.privs < thnStore.privs))
						{
							skip = true;
							nPlayers--;
						}
						if (!skip)
						{
							String strIP = thnStore.sckConnection.getInetAddress().toString();
							while (strIP.length() < 34)
							{
								strIP += " ";
							}
							strBuff.append("   "+strIP);
							strBuff.append(thnStore.getCharacterPoints()+"cp ");
							if (thnStore.privs == 1)
							{
								strBuff.append("{Clan Leader}");
							}else if (thnStore.privs == 3)
							{
								strBuff.append("{God}");
							}else if (thnStore.privs == 4)
							{
								strBuff.append("{High God}");
							}else if (thnStore.privs > 4)
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
							if (!thnStore.strClan.equals("none"))
							{
								strBuff.append("<"+thnStore.strClan+"> ");
							}
							strBuff.append(thnStore.strName+"\n");
						}
	           	    }
					lt.chatMessage("\tThere are "+nPlayers+" players online:");
					String strStore2 = strBuff.toString();
    			    intIndex = strStore2.indexOf("\n");
					while (intIndex != -1 && strStore2.length() > 5)
					{
						lt.chatMessage(strStore2.substring(0,intIndex));
						strStore2 = strStore2.substring(intIndex+1);
						intIndex = strStore2.indexOf("\n");
					}
					if (strStore2 != null&& strStore2.length() > 5)
						lt.chatMessage(strStore2);
	           	}
				return null;
		    }
		    if (strStore.startsWith(">"))
		    {
				engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
		    	strStore = strStore.substring(1);
		    	if (strStore.equalsIgnoreCase("s"))
		        {
					if (engGame.blnSavingGame)
						return "Game already being saved, please wait.";
		        	engGame.saveMap();
					return "Game settings saved";
		        }
		        try
		        {
		        	engGame.changeMap(lt.intLocX,lt.intLocY,Short.parseShort(strStore));
					String strMapLog = "shortmap_redraw";
					PrintStream psMap = new PrintStream(new FileOutputStream(strMapLog, true),true);
					psMap.println("changetile "+lt.intLocX+" "+lt.intLocY+" "+Short.parseShort(strStore));
					psMap.close();
		        	return null;
				}catch (Exception e)
		        {
		        	engGame.log.printError("parseCommand():While "+lt.strName+" tried to >"+strStore, e);
		        	return null;
		        }
			}
		    if (strStore.startsWith("<"))
		    {
				engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":"+strStore+":"+lt.intLocX+","+lt.intLocY);
		    	strStore = strStore.substring(1);
		        if (strStore.equals("s"))
		        {
					if (engGame.blnSavingGame)
					{
						return "Game already being saved, please wait.";
					}
		        	engGame.saveMap();
					return "Game settings saved";
		        }else if (strStore.equalsIgnoreCase("merchant"))
		        {
		        	if (engGame.overMerchant(lt.intLocX,lt.intLocY) != null)
		        	{
		        		return "There's already a merchant there.";
		        	}
		        	if (engGame.overPlayerMerchant(lt.intLocX,lt.intLocY) != null)
		        	{
		        		return "There's already a merchant there.";
		        	}
					Merchant mrcStore = new Merchant(engGame);
					mrcStore.vctItems = new Vector(0);
					mrcStore.intLocX = lt.intLocX;
					mrcStore.intLocY = lt.intLocY;
					engGame.vctMerchants.addElement(mrcStore);
					engGame.blnMerchantListChanged=true;
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
						prpStore.intLocX = lt.intLocX;
						prpStore.intLocY = lt.intLocY;
						engGame.vctProps.addElement(prpStore);
						engGame.blnPropListChanged=true;
						engGame.addDuskObject(prpStore);
		        	}
					return null;
		        }else if (strStore.startsWith("sign "))
				{
					if (strStore.length()==5)
					{
						return "What should the sign say?";
					}
					Sign sgnStore = new Sign("sign",strStore.substring(5),lt.intLocX,lt.intLocY,engGame.getID());
					engGame.vctSigns.addElement(sgnStore);
					engGame.blnSignListChanged=true;
					engGame.addDuskObject(sgnStore);
					return null;
				}
		        Item itmStore = engGame.getItem(strStore);
		        if (itmStore != null)
		        {
					itmStore.intLocX = lt.intLocX;
					itmStore.intLocY = lt.intLocY;
					engGame.vctItems.addElement(itmStore);
					engGame.addDuskObject(itmStore);
					return null;
		        }
		        try
		        {
					Mob thnStore = new Mob(strStore,lt.intLocX,lt.intLocY,engGame);
					engGame.vctMobs.addElement(thnStore);
					engGame.blnMobListChanged=true;
					thnStore.changeLocBypass(lt.intLocX,lt.intLocY);
				}
				catch(Exception e)
				{
					engGame.log.printError("parseCommand():While creating mob \""+strStore+"\"",e);
				}
				return null;
		    }
		}
		if (strCommand.equals("flee"))
		{
			if (lt.batBattle != null)
			{
				lt.vctCommands.insertElementAt("flee",0);
				return null;
			}else
			{
				return "You're not fighting anyone";
			}
		}
		if (strCommand.equals("sleep"))
		{
			if (lt.blnSleep)
			{	
				return "You are already asleep";	
			}
			if (lt.batBattle != null)
			{
				return "Not while you're fighting!";			
			}
			if (!(lt.thnMaster == null || lt.thnMaster.blnSleep))
			{
				return "You can't sleep if you're following someone who's awake.";
			}
			lt.blnSleep = true;	
			lt.updateActions();
			engGame.removeDuskObject(lt);
			engGame.addDuskObject(lt);
			return "You go to sleep";
		}
		if (strCommand.equals("wake"))
		{
			if (lt.blnSleep)
			{
				lt.blnSleep = false;
				lt.updateActions();
				engGame.removeDuskObject(lt);
				engGame.addDuskObject(lt);
				return "You wake up";
			}else
			{
				return "You are already awake";
			}
		}
		if (strCommand.equals("change"))
		{
			if (lt.batBattle != null)
			{
				return "Not while you're fighting!";			
			}
			if (strArgs == null)
			{
				return "Change what?";
			}
			if (strArgs.equals("race"))
			{
				if (lt.getCharacterPoints() > engGame.changeRaceCpLimit)
					return "You can no longer change your race.";
				lt.unloadRace();
				if (lt.isPet())
				{
					lt.thnMaster.halt();
	//					lt.thnMaster.stillThere();  // This puts something in the buffer
	//					lt.thnMaster.thrConnection.sleep(750);  // wait for it...
					try
					{
						// Empty out the BufferedReader for the answer
						while (lt.thnMaster.bfrSocketIn.ready()) lt.thnMaster.bfrSocketIn.readLine();
					} catch (Exception e)
					{
						engGame.log.printError("parseCommand():Trying to empty ready buffer of pet's master for change race.",e);
					}
				} else
				{
					lt.halt();
	//					lt.stillThere();  // This puts something in the buffer
	//					lt.thrConnection.sleep(750);  // wait for it...
					try
					{
						// Empty out the BufferedReader for the answer
						while (lt.bfrSocketIn.ready()) lt.bfrSocketIn.readLine();
					} catch (Exception e)
					{
						engGame.log.printError("parseCommand():Trying to empty ready buffer of player for change race.",e);
					}
				}
				lt.loadRace();
				if (lt.isPet())
				{
					lt.thnMaster.proceed();
					lt.thnMaster.updateStats();
				} else
				{
					lt.proceed();
				}
				engGame.removeDuskObject(lt);
				engGame.addDuskObject(lt);
				lt.updateStats();
				return "Your race has been changed.";
			}
		}
		if (strCommand.equals("gossip") || strCommand.startsWith(";"))
		{
			if (strCommand.startsWith(";"))
			{
				strArgs = strStore.substring(1).trim();
			}
			if (!lt.isPlayer())
			{
				return "Only players can use the gossip/clan/tell channels.";
			}
			if (lt.noChannel != 0)
			{
				return "You can't do that when nochanneled.";
			}
			if (strArgs == null)
			{
				return "Gossip what?";
			}
			if (strArgs.length() > engGame.messagecap)
			{
				return "That message was too long.";
			}
			if (!strArgs.equals(""))
			{
				long lTemp = lt.lTimeOfLastMessage;
				lt.lTimeOfLastMessage = System.currentTimeMillis();
				if ((System.currentTimeMillis() - lTemp) < engGame.floodLimit)
				{
					return "No flooding.";
				}
				String strPerson = lt.strName;
				if (lt.privs > 2
					&& lt.hasCondition("invis")
					&& lt.hasCondition("invis2"))
				{
					strPerson = "A god";
				}
				engGame.chatMessage(strPerson+" gossips: "+strArgs,lt.strName);
			}
			return null;
		}
		if (strCommand.equals("clan") || strCommand.startsWith(":"))
		{
			if (strCommand.startsWith(":"))
			{
				strArgs = strStore.substring(1).trim();
			}
			if (!lt.isPlayer() && !lt.isMob())
			{
				return "Only players can use the gossip/clan/tell channels.";
			}
			if (lt.strClan.equals("none"))
			{
				return "You're not in a clan. Use gossip instead";
			}
			if (lt.noChannel != 0)
			{
				return "You can't do that when nochanneled.";
			}
			if (strArgs==null)
			{
				return "Clan what?";
			}
			if (strArgs.length() > engGame.messagecap)
			{
				return "That message was too long.";
			}
			if (!strArgs.equals(""))
			{
				long lTemp = lt.lTimeOfLastMessage;
				lt.lTimeOfLastMessage = System.currentTimeMillis();
				if ((System.currentTimeMillis() - lTemp) < engGame.floodLimit)
				{
					return "No flooding.";
				}
				engGame.chatMessage(lt.strName+" clans: "+strArgs,lt.strClan,lt.strName);
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
			if (lt.noChannel != 0)
			{
				return "You can't do that when nochanneled.";
			}
			if (strArgs.length() > engGame.messagecap)
			{
				return "That message was too long.";
			}
			if (!strArgs.equals(""))
			{
				if (lt.isPet())
				{
					engGame.chatMessage("Pet "+lt.strName+" says: "+strArgs,lt.intLocX,lt.intLocY,lt.strName);
				}
				else if (lt.isMob())
				{
					engGame.chatMessage("Mob "+lt.strName+" says: "+strArgs,lt.intLocX,lt.intLocY,"default");
				}
				else
				{
					long lTemp = lt.lTimeOfLastMessage;
					lt.lTimeOfLastMessage = System.currentTimeMillis();
					if ((System.currentTimeMillis() - lTemp) < engGame.floodLimit)
					{
						return "No flooding.";
					}
					String strPerson = lt.strName;
					if (lt.privs > 2
						&& lt.hasCondition("invis")
						&& lt.hasCondition("invis2"))
					{
						strPerson = "A god";
					}
					engGame.chatMessage(strPerson+" says: "+strArgs,lt.intLocX,lt.intLocY,lt.strName);
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
			if (lt.noChannel != 0)
			{
				return "You can't do that when nochanneled.";
			}
			if (strArgs.length() > engGame.messagecap)
			{
				return "That message was too long.";
			}
			if (!strArgs.equals(""))
			{
				long lTemp = lt.lTimeOfLastMessage;
				lt.lTimeOfLastMessage = System.currentTimeMillis();
				if ((System.currentTimeMillis() - lTemp) < engGame.floodLimit)
				{
					return "No flooding.";
				}
				String strPerson = lt.strName;
				if (lt.privs > 2
					&& lt.hasCondition("invis")
					&& lt.hasCondition("invis2"))
				{
					strPerson = "A god";
				}
				engGame.chatMessage(strPerson+" "+strArgs,lt.intLocX,lt.intLocY,lt.strName);
			}
			return null;
		}
		if (strCommand.equals("tell") || strCommand.startsWith("/"))
		{
			if (strCommand.startsWith("/"))
			{
				strArgs = strStore.substring(1).trim();
			}
			if (!lt.isPlayer())
			{
				return "Only players can use the gossip/clan/tell channels.";
			}
			if (strArgs == null)
			{
				return "Tell who what?";
			}
			if (lt.noChannel != 0)
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
			LivingThing thnStore = engGame.getPlayer(strStore2);
			if (thnStore == null)
			{
				return "They're not in this world.";
			}
			if (thnStore.privs > 2
				&& thnStore.hasCondition("invis")
				&& thnStore.hasCondition("invis2"))
			{
				return "They're not in this world.";
			}
			if (thnStore.strName.equalsIgnoreCase(lt.strName))
			{
				return "Talking to yourself is not a good sign.";
			}
			String strIgnoreName = thnStore.strName.toLowerCase();
			if (lt.vctIgnore.contains(strIgnoreName))
			{
				return "You can't do that while you are ignoring them.";
			}
			strIgnoreName = lt.strName.toLowerCase();
			if (thnStore.vctIgnore.contains(strIgnoreName))
			{
				return "They did not get the message, they are ignoring you.";
			}
			strArgs = strArgs.substring(strStore2.length(),strArgs.length()).trim();
			if (strArgs.length() > engGame.messagecap)
			{
				return "That message was too long.";
			}
			if (strArgs.length() == 0)
			{
				return "Tell them what?";
			}
			long lTemp = lt.lTimeOfLastMessage;
			lt.lTimeOfLastMessage = System.currentTimeMillis();
			if ((System.currentTimeMillis() - lTemp) < engGame.floodLimit)
			{
				return "No flooding.";
			}
			String strPerson = lt.strName;
			if (lt.privs > 2
				&& lt.hasCondition("invis")
				&& lt.hasCondition("invis2"))
			{
				strPerson = "A god";
			}
			engGame.log.printMessage(Log.ALWAYS, lt.strName+" tells "+thnStore.strName+" : "+strArgs);
			thnStore.chatMessage(strPerson+" tells you: "+strArgs);
			return "You tell "+strStore2+": "+strArgs;
		}
		if (strCommand.equals("who"))
		{
			synchronized(lt.stmOut)
			{
				int nPlayers = engGame.vctSockets.size();
				StringBuffer strBuff = new StringBuffer();
				LivingThing thnStore = null;
				for (int i=0;i<engGame.vctSockets.size();i++)
				{
					thnStore = (LivingThing)engGame.vctSockets.elementAt(i);

					boolean hidden = false;
					boolean skip = false;
					if (thnStore.privs > 2)
					{
						if (thnStore.hasCondition("invis"))
						{
							hidden = true;
						}
					}
					if (hidden && (lt.privs < thnStore.privs))
					{
						skip = true;
						nPlayers--;
					}
					if (lt.privs < 3 && !thnStore.blnWorking)
					{
						skip = true;
						nPlayers--;
					}
					if (lt.privs < 3 && !thnStore.blnReadyForTheWorld)
					{
						skip = true;
						nPlayers--;
					}
					if (!skip)
					{
						if (!lt.popup)
							strBuff.append("\t");
						strBuff.append(thnStore.getCharacterPoints());
						strBuff.append("cp ");
						if (lt.privs > 2 && !thnStore.blnWorking)
						{
							strBuff.append("{* Not Working *}");
						}
						if (lt.privs > 2 && !thnStore.blnReadyForTheWorld)
						{
							strBuff.append("{Entering the world}");
						}
						if (lt.privs > 2 && !thnStore.blnCanSave)
						{
							strBuff.append("{Loading/Saving}");
						}
						if (thnStore.privs == 1)
						{
							strBuff.append("{Clan Leader}");
						}else if (thnStore.privs == 3)
						{
							strBuff.append("{God}");
						}else if (thnStore.privs == 4)
						{
							strBuff.append("{High God}");
						}else if (thnStore.privs > 4)
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
						if (thnStore.vctIgnore.contains(lt.strName.toLowerCase()))
						{
							strBuff.append("{Ignoring you}");
						}
						if (lt.vctIgnore.contains(thnStore.strName.toLowerCase()))
						{
							strBuff.append("{Ignored}");
						}
						if (!thnStore.strClan.equals("none"))
						{
							strBuff.append("<");
							strBuff.append(thnStore.strClan);
							strBuff.append("> ");
						}
						if (thnStore.strTitle == null ||
							thnStore.strTitle.equals("none"))
						{
							strBuff.append(thnStore.strName);
							strBuff.append("\n");
						}else
						{
							strBuff.append(thnStore.strName);
							strBuff.append(" ");
							strBuff.append(thnStore.strTitle);
							strBuff.append("\n");
						}
					}
				}
				String strStore2 = strBuff.toString();
				if (lt.popup)
				{
					lt.send((char)20+"There are "+nPlayers+" players online:\n"+strStore2+"\n--EOF--\n");
				} else
				{
					lt.chatMessage("\tThere are "+nPlayers+" players online:");
					intIndex = strStore2.indexOf("\n");
					while (intIndex != -1 && strStore2.length() > 5)
					{
						lt.chatMessage(strStore2.substring(0,intIndex));
						strStore2 = strStore2.substring(intIndex+1);
						intIndex = strStore2.indexOf("\n");
					}
					if (strStore2 != null&& strStore2.length() > 5)
						lt.chatMessage(strStore2);
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
			if(lt.blnSleep)
			{
				return "You can't do that while you're sleeping";
			}
			DuskObject objStore = lt.getLocalObject(strArgs);
			if (objStore == null)
			{
				return "You don't see that here.";
			}
			if (!objStore.isLivingThing())
			{
				return "You can't fight that.";
			}
			engGame.newBattle(lt,(LivingThing)objStore);
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
			DuskObject objStore = lt.getLocalObject(strArgs.substring(0,intStore));
			if (objStore == null)
			{
				return "You don't see that here.";
			}
			if (!objStore.isLivingThing())
			{
				return "You can't order that.";
			}
			LivingThing thnStore = (LivingThing)objStore;
			if (thnStore.thnCharmer != lt)
			{
				return "They don't take orders from you.";
			}
			strArgs = strArgs.substring(intStore+1);
			try
			{
				thnStore.chatMessage(Commands.parseCommand(thnStore, engGame, strArgs));
//				lt.chatMessage(Commands.parseCommand(thnStore, engGame, strArgs));
			} catch (Exception e)
			{
				engGame.log.printError("parseCommand():"+thnStore.strName+", while trying to follow the following order: \""+strArgs+"\"",e);
			}
			return null;
		}
		
		if (strCommand.equals("look"))
		{
			if (strArgs == null)
			{
				return "Look at what?";
			}
			if(lt.blnSleep)
			{
				return "You can't do that while you're sleeping";
			}
			DuskObject objStore = lt.getLocalObject(strArgs);
			if (objStore != null)
			{
				if (objStore.isLivingThing())
				{
					LivingThing thnStore = (LivingThing)objStore;
					thnStore.chatMessage(lt.strName+" is looking at you.");
					lt.chatMessage(thnStore.strName+" has "+thnStore.getCharacterPoints()+"cp and "+thnStore.hp+"/"+thnStore.maxhp+"hp.");
					if (thnStore.strDescription != null)
						lt.chatMessage("Their description is: "+thnStore.strDescription);
					if (thnStore.equWorn.wield != null)
					{
						lt.chatMessage("They are wielding "+thnStore.equWorn.wield.strDescription);
					}
					if (thnStore.equWorn.arms != null)
					{
						lt.chatMessage("They are wearing "+thnStore.equWorn.arms.strDescription+" on their arms.");
					}
					if (thnStore.equWorn.legs != null)
					{
						lt.chatMessage("They are wearing "+thnStore.equWorn.legs.strDescription+" on their legs.");
					}
					if (thnStore.equWorn.torso != null)
					{
						lt.chatMessage("They are wearing "+thnStore.equWorn.torso.strDescription+" on their torso.");
					}
					if (thnStore.equWorn.waist != null)
					{
						lt.chatMessage("They are wearing "+thnStore.equWorn.waist.strDescription+" on their waist.");
					}
					if (thnStore.equWorn.neck != null)
					{
						lt.chatMessage("They are wearing "+thnStore.equWorn.neck.strDescription+" on their neck.");
					}
					if (thnStore.equWorn.skull != null)
					{
						lt.chatMessage("They are wearing "+thnStore.equWorn.skull.strDescription+" on their skull.");
					}
					if (thnStore.equWorn.eyes != null)
					{
						lt.chatMessage("They are wearing "+thnStore.equWorn.eyes.strDescription+" on their eyes.");
					}
					if (thnStore.equWorn.hands != null)
					{
						lt.chatMessage("They are wearing "+thnStore.equWorn.hands.strDescription+" on their hands.");
					}
					return null;
				}else if (objStore.isItem())
				{
					Item itmStore = (Item)objStore;
					return "You see "+itmStore.strDescription+".";
				}else if (objStore.isProp())
				{
					Prop prpStore = (Prop)objStore;
					return "You see "+prpStore.strDescription+".";
				}else if (objStore.isSign())
				{
					Sign sgnStore = (Sign)objStore;
					return "The sign says "+sgnStore.strMessage+".";
				}else if (objStore.isPlayerMerchant())
				{
					lt.chatMessage("You see a merchant that sells");
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
						strStore = itmStore.strName;
						strSpacer = "\t";
						if (strStore.length() < 11)
							strSpacer = "\t\t";
						lt.chatMessage("\t"+strStore+strSpacer+itmStore.strDescription);
						blnEmptyMerchant = false;
					}
					if (blnEmptyMerchant)
					{
						lt.chatMessage("\tNothing at the moment.");
					}
				}else if (objStore.isMerchant())
				{
					lt.chatMessage("You see a merchant that sells");
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
							lt.chatMessage("\t"+strStore+strSpacer+itmStore.strDescription);
							blnEmptyMerchant = false;
						} else
						{
							if (strStore.equals("pet"))
							{
								lt.chatMessage("\tpets.");
								blnEmptyMerchant = false;
							} else
							{
								strStore = strStore.substring(6,strStore.length());
								lt.chatMessage("\ttraining in "+strStore);
								blnEmptyMerchant = false;
							}
						}
					}
					if (blnEmptyMerchant)
					{
						lt.chatMessage("\tNothing.");
					}
					return null;
				}
			}
			return "You don't see that here.";
		}
		
		if (strCommand.equals("inv") || strCommand.equals("inventory"))
		{
			lt.chatMessage("-Worn-");
			if (lt.equWorn.skull != null)
			{
				lt.chatMessage("Skull: "+lt.equWorn.skull.strName);
			}
			if (lt.equWorn.torso != null)
			{
				lt.chatMessage("Torso: "+lt.equWorn.torso.strName);
			}
			if (lt.equWorn.arms != null)
			{
				lt.chatMessage("Arms: "+lt.equWorn.arms.strName);
			}
			if (lt.equWorn.legs != null)
			{
				lt.chatMessage("Legs: "+lt.equWorn.legs.strName);
			}
			if (lt.equWorn.neck != null)
			{
				lt.chatMessage("Neck: "+lt.equWorn.neck.strName);
			}
			if (lt.equWorn.eyes != null)
			{
				lt.chatMessage("Eyes: "+lt.equWorn.eyes.strName);
			}
			if (lt.equWorn.waist != null)
			{
				lt.chatMessage("Waist: "+lt.equWorn.waist.strName);
			}
			if (lt.equWorn.hands != null)
			{
				lt.chatMessage("Hands: "+lt.equWorn.hands.strName);
			}
			if (lt.equWorn.wield != null)
			{
				lt.chatMessage("Wielded: "+lt.equWorn.wield.strName);
			}
			lt.chatMessage("-Inventory-:");
			Iterator iter = lt.vctItems.keySet().iterator();
			Item itmStore;
			LifoQueue qStore;
			while(iter.hasNext())
			{
				qStore = (LifoQueue)lt.vctItems.get(iter.next());
				if (qStore.size() > 0)
				{
					itmStore = (Item)qStore.firstElement();
					lt.chatMessage(qStore.size()+" "+itmStore.strName);
				}
			}
			return null;
		}
		
		if (strCommand.equals("help"))
		{
			RandomAccessFile rafHelp=null;
			synchronized(lt.stmOut)
			{
				try
				{
					if (strArgs == null)
					{
						rafHelp = new RandomAccessFile("help","r");
						if (lt.popup)
						{
							lt.send((char)20+"Help\n");
						} else
						{
							lt.chatMessage("Help");
						}
					}else
					{
						if (strArgs.indexOf("..") != -1)
						{
							return "There is no help on that subject";
						}
						rafHelp = new RandomAccessFile("helpFiles/"+strArgs,"r");
						if (lt.popup)
						{
							lt.send((char)20+"Help on "+strArgs+"\n");
						} else
						{
							lt.chatMessage("Help on "+strArgs);
						}
					}
				}catch(Exception e)
				{
					engGame.log.printError("parseCommand():When "+lt.strName+" tried to get help on "+strArgs, e);
					return "There is no help on that subject";
				}
				try
				{
					strStore = rafHelp.readLine();
					while (strStore != null)
					{
						if (lt.popup)
						{
							lt.send(strStore+"\n");
						} else
						{
							lt.chatMessage(strStore);
						}
						strStore = rafHelp.readLine();
					}
					if (lt.popup)
						lt.send("--EOF--\n");
				}catch(Exception e)
				{
					engGame.log.printError("parseCommand():While showing "+lt.strName+" help on "+strArgs, e);
				}
				try
				{
					rafHelp.close();
				}catch(Exception e)
				{
					engGame.log.printError("parseCommand():While closing help on "+strStore+" for "+lt.strName, e);
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
			DuskObject objStore = lt.getLocalObject(strArgs);
			if (objStore == null)
			{
				return "You don't see that here.";
			}
			if (!objStore.isItem())
			{
				return "You can't get that.";
			}
			Item itmStore = (Item)objStore;
			if (Math.abs(lt.intLocX - itmStore.intLocX) + Math.abs(lt.intLocY - itmStore.intLocY) < 2)
			{
				if (lt.privs > 2)
				{
					engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":gets "+strArgs+":"+lt.intLocX+","+lt.intLocY);
				}
				lt.vctItems.addElement(itmStore);
				lt.updateItems();
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
					scrStore.varVariables.addVariable("trigger",lt);
					scrStore.varVariables.addVariable("itemname",itmStore.strName);
					scrStore.varVariables.addVariable("mod",itmStore.intMod);
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
			Item itmStore = lt.getItem(strArgs);
			if (itmStore != null)
			{
				String strMessage = "You drop "+itmStore.strName+".";
				if(intNumToDrop > 1)
				{
					strMessage = "You drop "+intNumToDrop+" "+itmStore.strName+".";
				}
				if (itmStore.intCost==0)
				{
					strMessage = "A "+itmStore.strName+" vanishes into thin air.";
					if(intNumToDrop > 1)
					{
						strMessage = intNumToDrop+" "+itmStore.strName+" vanish into thin air.";
					}
				}
				if (lt.privs > 2)
				{
					engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":drops "+strArgs+":"+lt.intLocX+","+lt.intLocY);
				}
				Script scrStore = null;
				if (itmStore.strOnDropScript != null)
				{
					try
					{
						scrStore = new Script("scripts/"+itmStore.strOnDropScript,engGame,false);
						scrStore.varVariables.addVariable("trigger",lt);
						scrStore.varVariables.addVariable("itemname",itmStore.strName);
						scrStore.varVariables.addVariable("mod",itmStore.intMod);
					}catch(Exception e) {}
				}
				for (int i=0; i < intNumToDrop; i++)
				{
					itmStore = lt.getItemAndRemove(itmStore.strName);
					itmStore.intLocX = lt.intLocX;
					itmStore.intLocY = lt.intLocY;
					if (itmStore.intCost!=0)
					{
						engGame.vctItems.addElement(itmStore);
						engGame.addDuskObject(itmStore);
						lt.updateItems();
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
			if (lt.batBattle == null)
			{
				lt.useItem(strArgs,-1);
			}else
			{
				lt.vctCommands.addElement("use "+strArgs);
			}
			return null;
		}
		if (strCommand.equals("eat"))
		{
			if (strArgs == null)
			{
				return "Eat what?";
			}
			if (lt.batBattle == null)
			{
				lt.useItem(strArgs,Item.FOOD);
			}else
			{
				lt.vctCommands.addElement("eat "+strArgs);
			}
			return null;
		}
		if (strCommand.equals("drink"))
		{
			if (strArgs == null)
			{
				return "Drink what?";
			}
			if (lt.batBattle == null)
			{
				lt.useItem(strArgs,Item.DRINK);
			}else
			{
				lt.vctCommands.addElement("drink "+strArgs);
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
			DuskObject objStore = lt.getLocalObject(strStore2);
			if (objStore == null)
			{
				return "You don't see them here.";
			}
			if (!objStore.isLivingThing())
			{
				return "You can't give to that.";
			}
			LivingThing thnStore = (LivingThing)objStore;
			if ((lt.privs < 3) && (Math.abs(thnStore.intLocX - lt.intLocX) + Math.abs(thnStore.intLocY - lt.intLocY) > 1))
			{
				return "They're too far away.";
			}
			strArgs = strArgs.substring(strStore2.length()+1);
			if (lt.privs > 2)
			{
				engGame.log.printMessage(Log.INFO,"godcommand:"+lt.strName+":gives "+strArgs+" to "+strStore2+":"+lt.intLocX+","+lt.intLocY);
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
					if (intStore <= lt.cash)
					{
						lt.cash -= intStore;
						thnStore.cash += intStore;
						lt.updateStats();
						thnStore.updateStats();
						thnStore.chatMessage(lt.strName+" gives you "+intStore+"gp.");
						return "You give "+thnStore.strName+" "+intStore+"gp.";
					}else
					{
						lt.chatMessage("You don't have that much gp");
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
			Item itmStore = lt.getItem(strArgs);
			if (itmStore != null)
			{
				String strMessage = lt.strName+" gives you ";
				String strMessage2 = "You give "+thnStore.strName+" ";
				if (intNumToGive > 1)
				{
					strMessage += intNumToGive+" ";
					strMessage2 += intNumToGive+" ";
				}
				strMessage += itmStore.strName+".";
				strMessage2 += itmStore.strName+".";
				strStore = itmStore.strName;
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
					itmStore = lt.getItemAndRemove(strStore);
					thnStore.vctItems.addElement(itmStore);
					intNumToGive--;
					if (itmStore.strOnDropScript != null)
					{
						try
						{
							scrDropStore.varVariables.clearVariables();
							scrDropStore.varVariables.addVariable("trigger",lt);
							scrDropStore.varVariables.addVariable("itemname",itmStore.strName);
							scrDropStore.varVariables.addVariable("mod",itmStore.intMod);
							scrDropStore.runScript();
						}catch(Exception e) {}
					}
					if (itmStore.strOnGetScript != null)
					{
						try
						{
							scrGetStore.varVariables.clearVariables();
							scrGetStore.varVariables.addVariable("trigger",thnStore);
							scrGetStore.varVariables.addVariable("itemname",itmStore.strName);
							scrGetStore.varVariables.addVariable("mod",itmStore.intMod);
							scrGetStore.runScript();
						}catch(Exception e) {}
					}
				}
				thnStore.chatMessage(strMessage);
				thnStore.updateItems();
				lt.updateItems();
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
			PlayerMerchant pmrStore = engGame.overPlayerMerchant(lt.intLocX,lt.intLocY);
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
						if (lt.strName.equalsIgnoreCase(pmrStore.strOwner))
						{
							intCost = 0;
						}
						if (intCost*quantity > lt.cash)
						{
							return "You can't afford that";
						}else
						{
							lt.cash -= intCost*quantity;
							pmrStore.cash += intCost*quantity;
							itmStore = pmrStore.remove(strArgs);
							lt.vctItems.addElement(itmStore);
							for (int i=1;i<quantity;i++)
							{
								itmStore = pmrStore.remove(strArgs);
								lt.vctItems.addElement(itmStore);
							}
							lt.updateItems();
							lt.updateStats();
						}
					}
				}
			}

			Merchant mrcStore = engGame.overMerchant(lt.intLocX,lt.intLocY);
			if (mrcStore == null)
			{
				return "Buy from whom?";
			}
			if (lt.thnFollowing != null && lt.thnFollowing.isPet())
			{
				if (strArgs.startsWith(lt.thnFollowing.strName+":"))
				{
					strArgs = strArgs.substring(lt.thnFollowing.strName.length()+1);
					if (mrcStore.contains(strArgs))
					{
						if (strArgs.startsWith("train:"))
						{
							strArgs = strArgs.substring(6);
							mrcStore.train(strArgs,quantity,lt.thnFollowing);
							lt.updateStats();
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
					mrcStore.train(strArgs,quantity,lt);
					lt.updateStats();
				}else
				{
					if (strArgs.startsWith("pet"))
					{
						mrcStore.pet(lt);
						lt.updateStats();
					}else
					{
						Item itmStore = engGame.getItem(strArgs);
						if (itmStore != null)
						{
							if (itmStore.intCost*quantity > lt.cash)
							{
								return "You can't afford that";
							}else
							{
								lt.cash -= itmStore.intCost*quantity;
								lt.vctItems.addElement(itmStore);
								for (int i=1;i<quantity;i++)
								{
									lt.vctItems.addElement(engGame.getItem(strArgs));
								}
								lt.updateItems();
								lt.updateStats();
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

			PlayerMerchant pmrStore = engGame.overPlayerMerchant(lt.intLocX,lt.intLocY);
			if (pmrStore != null)
			{
				if (lt.strName.equalsIgnoreCase(pmrStore.strOwner))
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
					Item itmStore = lt.getItem(strArgs);
					if (itmStore != null && itmStore.strOnDropScript != null)
					{
						try
						{
							scrStore = new Script("scripts/"+itmStore.strOnDropScript,engGame,false);
							scrStore.varVariables.addVariable("trigger",lt);
							scrStore.varVariables.addVariable("itemname",itmStore.strName);
							scrStore.varVariables.addVariable("mod",itmStore.intMod);
						}catch(Exception e) {}
					}
					for (int i=0;i<quantity;i++)
					{
						itmStore = lt.getItemAndRemove(strArgs);
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
							lt.blnShouldSave=true;
						} else {
							i=quantity;
						}
					}
					lt.updateItems();
					lt.updateStats();
					return null;
				}
				return "You cannot sell items to this merchant.";
			}

			Merchant mrcStore = engGame.overMerchant(lt.intLocX,lt.intLocY);
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
			Item itmStore = lt.getItem(strArgs);
			if (itmStore != null && itmStore.strOnDropScript != null)
			{
				try
				{
					scrStore = new Script("scripts/"+itmStore.strOnDropScript,engGame,false);
					scrStore.varVariables.addVariable("trigger",lt);
					scrStore.varVariables.addVariable("itemname",itmStore.strName);
					scrStore.varVariables.addVariable("mod",itmStore.intMod);
				}catch(Exception e) {}
			}
			for (int i=0;i<quantity;i++)
			{
				itmStore = lt.getItemAndRemove(strArgs);
				if (itmStore != null)
				{
					if (itmStore.strOnDropScript != null)
					{
						try
						{
							scrStore.runScript();
						}catch(Exception e) {}
					}
					lt.cash += (itmStore.intCost/2);
					lt.blnShouldSave=true;
				} else {
					i=quantity;
				}
			}
			lt.updateItems();
			lt.updateStats();
			return null;
		}

		if (strCommand.equals("cast"))
		{
			if (strArgs == null)
			{
				return "Cast what?";
			}
			if (lt.batBattle == null)
			{
				lt.castSpell(strArgs);
			}else
			{
				lt.vctCommands.addElement(strArgs);
			}
			return null;
		}

		if (strCommand.equals("follow"))
		{
			if (strArgs == null)
			{
				return "Follow who?";
			}
			if(lt.blnSleep)
			{
				return "You can't do that while you're sleeping";
			}
			DuskObject objStore = lt.getLocalObject(strArgs);
			if (objStore == null)
			{
				return "You don't see that here.";
			}
			if (objStore.isLivingThing())
			{
				LivingThing thnStore = (LivingThing)objStore;
				if (lt.thnMaster != null && thnStore != lt.thnMaster)
				{
					if (lt.isPet())
					{
						return "You can only follow your owner.";
					}
					return "You're already following someone. Leave them first.";
				}
				if (Math.abs(lt.intLocX - thnStore.intLocX) + Math.abs(lt.intLocY - thnStore.intLocY) > 1)
				{
					return "They're too far away.";
				}
				if (thnStore == lt)
				{
					return "You can't follow yourself.";
				}
				if (!thnStore.isPlayer() && !lt.isMob())
				{
					return "You can only follow players.";
				}
				if (thnStore.noFollow || (thnStore.isPet() && thnStore.thnMaster.noFollow))
				{
					return "They won't let you follow them.";
				}
				if (lt.isPet())
				{
					thnStore.thnFollowing = lt;
					lt.thnMaster = thnStore;
					thnStore.updateStats();
					lt.updateStats();
					return "You are now following "+lt.thnMaster.strName+".";
				}
				LivingThing thnStore2 = thnStore;
				while (thnStore2 != null)
				{
					if (lt == thnStore2)
						return "You're already in that group.";
					thnStore2 = thnStore2.thnMaster;
				}
				thnStore.chatMessage("You are now being followed by "+lt.strName+".");
				while (thnStore.thnFollowing != null)
				{
					thnStore = thnStore.thnFollowing;
					if (thnStore.isPlayer())
						thnStore.chatMessage("You are now being followed by "+lt.strName+".");
				}
				thnStore.thnFollowing = lt;
				lt.thnMaster = thnStore;
				thnStore.updateStats();
				lt.updateStats();
				return "You are now following "+lt.thnMaster.strName+".";
			}
			return "That's not something you can follow.";
		}
		
		if (strCommand.equals("unfollow"))
		{
			if (strArgs == null)
			{
				return "Unfollow who?";
			}
			LivingThing thnStore = lt.thnFollowing;
			if (thnStore != null && thnStore.isPet())
			{
				if (thnStore.strName.equalsIgnoreCase(strArgs))
				{
					lt.halt();
					lt.chatMessage("Do you really want to permanently erase your pet?");
					try
					{
						if (lt.bfrSocketIn.readLine().equalsIgnoreCase("yes"))
						{
							lt.thnFollowing.close();
							File deleteme = new File("pets/"+lt.strName.toLowerCase());
							deleteme.delete();
							deleteme = new File("pets/"+lt.strName.toLowerCase()+".backup");
							deleteme.delete();
							lt.thnFollowing.close();
							lt.thnFollowing = lt.thnFollowing.thnFollowing;
							lt.proceed();
							return "Your pet has been erased.";
						}
					}catch(Exception e)
					{
						engGame.log.printError("parseCommand():While unfollowing pet for "+lt.strName, e);
					}
					lt.proceed();
					return null;
				}
				thnStore = thnStore.thnFollowing;
			}
			while (thnStore != null)
			{
				if (thnStore.strName.equalsIgnoreCase(strArgs))
				{
					if (thnStore.isPet())
					{
						thnStore = thnStore.thnMaster;
					}
					thnStore.removeFromGroup();
					return null;
				}
				thnStore = thnStore.thnFollowing;
			}
			return "They're not following you.";
		}
		
		if (strCommand.equals("stay"))
		{
			if (lt.isPet())
			{
				lt.removeFromGroup();
				return Commands.parseCommand(lt, engGame, "emote sits down to await "+lt.thnMaster.strName+"'s return.");
			}
			return (Commands.parseCommand(lt, engGame, "emote stays like a good little puppy."));
		}

		if (strCommand.equals("leave"))
		{
			if (lt.isPet())
			{
				return "You cannot leave your master unless he unfollows you.";
			}
			lt.removeFromGroup();
			return "You are now on your own.";
		}
		
		if (strCommand.equals("unclan"))
		{
			if (lt.strClan.equals("none"))
			{
				return "You're not in a clan.";
			}
			if (lt.batBattle != null)
			{
				return "Wait until you're done battling.";
			}
			try
			{
				lt.halt();
				lt.chatMessage("Are you sure you want to drop out of your clan? If so type yes.");
				if (lt.bfrSocketIn.readLine().equalsIgnoreCase("yes"))
				{
					lt.strClan = "none";
					if (lt.privs==1)
						lt.privs=0;
					lt.proceed();
					engGame.removeDuskObject(lt);
					engGame.addDuskObject(lt);
					return "You have been removed from your clan.";
				}
			}catch(Exception e)
			{
				engGame.log.printError("parseCommand():While "+lt.strName+" was trying to dropout of their clan",e);
			}
			lt.proceed();
			return null;
		}
		
		if (strCommand.equals("description"))
		{
			if (strArgs == null)
			{
				lt.strDescription = null;
				return "Your description has been removed.";
			}
			lt.strDescription = strArgs;
			return "Your description has been set to:"+lt.strDescription;
		}
		
		if (strCommand.equals("title"))
		{
			if (!lt.isPlayer())
			{
				return "Only players may have titles.";
			}
			if (strArgs == null)
			{
				lt.strTitle = null;
				return "Your title has been removed.";
			}
			lt.strTitle = strArgs;
			if (lt.strTitle.length() > engGame.titlecap)
			{
				lt.strTitle = lt.strTitle.substring(0,engGame.titlecap);
			}
			return "Your title has been set to:"+lt.strTitle;
		}
		
		if (strCommand.equals("password"))
		{
			if (!lt.isPlayer())
				return "Only players can change their password.";
			try
			{
				lt.halt();
				lt.chatMessage("Enter your current password.");
				String strOldPass = lt.bfrSocketIn.readLine();
				if (!strOldPass.equals(lt.strPWord))
				{
					lt.proceed();
					return "Sorry, that is not your password.";
				}
				lt.chatMessage("Enter a new password.");
				String strNewPass = lt.bfrSocketIn.readLine();
				lt.chatMessage("Repeat that password.");
				String strNewPassRepeat = lt.bfrSocketIn.readLine();
				if (strNewPass == null)
				{
					lt.proceed();
					return "Not a valid password.";
				}
				if (!strNewPass.equals(strNewPassRepeat))
				{
					lt.proceed();
					return "Sorry, those passwords do not match.";
				}
				lt.strPWord = strNewPass;
				lt.proceed();
				return "Your password has now been changed.";
			}catch(Exception e)
			{
				engGame.log.printError("parseCommand():While "+lt.strName+" was changing their password", e);
			}
			lt.proceed();
		}
		
		if (strCommand.equals("wear"))
		{
			if (strArgs== null)
			{
				return "Wear what?";
			}
			LifoQueue qStore = (LifoQueue)lt.vctItems.get(strArgs);
			if (qStore != null)
			{
				Item itmStore = (Item)qStore.firstElement();
				switch(itmStore.intType)
				{
					case(1):
					{
						if (lt.equWorn.wield != null)
						{
							lt.vctItems.addElement(lt.equWorn.wield);
							lt.runUnWearScript(lt.equWorn.wield);
						}
						lt.equWorn.wield = itmStore;
						lt.runWearScript(lt.equWorn.wield);
						break;
					}
					case(2):
					{
						switch (itmStore.intKind)
						{
							case(0):
							{
								if (lt.equWorn.arms != null)
								{
									lt.vctItems.addElement(lt.equWorn.arms);
									lt.runUnWearScript(lt.equWorn.arms);
								}
								lt.equWorn.arms = itmStore;
								lt.runWearScript(lt.equWorn.arms);
								break;
							}	
							case(1):
							{
								if (lt.equWorn.legs != null)
								{
									lt.vctItems.addElement(lt.equWorn.legs);
									lt.runUnWearScript(lt.equWorn.legs);
								}
								lt.equWorn.legs = itmStore;
								lt.runWearScript(lt.equWorn.legs);
								break;
							}	
							case(2):
							{
								if (lt.equWorn.torso != null)
								{
									lt.vctItems.addElement(lt.equWorn.torso);
									lt.runUnWearScript(lt.equWorn.torso);
								}
								lt.equWorn.torso = itmStore;
								lt.runWearScript(lt.equWorn.torso);
								break;
							}	
							case(3):
							{
								if (lt.equWorn.waist != null)
								{
									lt.vctItems.addElement(lt.equWorn.waist);
									lt.runUnWearScript(lt.equWorn.waist);
								}
								lt.equWorn.waist = itmStore;
								lt.runWearScript(lt.equWorn.waist);
								break;
							}	
							case(4):
							{
								if (lt.equWorn.neck != null)
								{
									lt.vctItems.addElement(lt.equWorn.neck);
									lt.runUnWearScript(lt.equWorn.neck);
								}
								lt.equWorn.neck = itmStore;
								lt.runWearScript(lt.equWorn.neck);
								break;
							}	
							case(5):
							{
								if (lt.equWorn.skull != null)
								{
									lt.vctItems.addElement(lt.equWorn.skull);
									lt.runUnWearScript(lt.equWorn.skull);
								}
								lt.equWorn.skull = itmStore;
								lt.runWearScript(lt.equWorn.skull);
								break;
							}	
							case(6):
							{
								if (lt.equWorn.eyes != null)
								{
									lt.vctItems.addElement(lt.equWorn.eyes);
									lt.runUnWearScript(lt.equWorn.eyes);
								}
								lt.equWorn.eyes = itmStore;
								lt.runWearScript(lt.equWorn.eyes);
								break;
							}	
							case(7):
							{
								if (lt.equWorn.hands != null)
								{
									lt.vctItems.addElement(lt.equWorn.hands);
									lt.runUnWearScript(lt.equWorn.hands);
								}
								lt.equWorn.hands = itmStore;
								lt.runWearScript(lt.equWorn.hands);
								break;
							}
						}
						break;
					}
					default:
						return "You can't wear that";
				}
				lt.vctItems.removeElement(itmStore.strName);
				if (lt.isPet())
					lt.thnMaster.updateStats();
				if (lt.isPlayer())
					lt.updateStats();
				lt.updateEquipment();
				lt.updateItems();
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
			lt.unWear(strArgs);
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
			synchronized(lt.vctEntities)
			{
				for (int i=0;i<lt.vctEntities.size();i++)
				{
					objStore = (DuskObject)lt.vctEntities.elementAt(i);
					if (lngID == objStore.ID)
					{
						lt.vctEntities.removeElementAt(i);
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
				if (lt.audioon)
				{
					return "Your audio is turned on.";
				}
				return "Your audio is turned off.";
			} else if (strArgs.equalsIgnoreCase("off"))
			{
				lt.audioon = false;
				return "Your audio has been turned off.";
			} else if (strArgs.equalsIgnoreCase("on"))
			{
				lt.audioon = true;
				return "Your audio has been turned on.";
			}
		}
		if (strCommand.equals("color"))
		{
			if (strArgs == null)
			{
				if (lt.coloron)
				{
					return "Your color is turned on.";
				}
				return "Your color is turned off.";
			} else if (strArgs.equalsIgnoreCase("off"))
			{
				lt.coloron = false;
				return "Your color has been turned off.";
			} else if (strArgs.equalsIgnoreCase("on"))
			{
				lt.coloron = true;
				return "Your color has been turned on.";
			}
		}
		if (strCommand.equals("highlight"))
		{
			if (strArgs == null)
			{
				if (lt.highlight)
				{
					return "Highlighting of enemies in battle is turned on.";
				}
				return "Highlighting of enemies in battle is turned off.";
			} else if (strArgs.equalsIgnoreCase("off"))
			{
				lt.highlight = false;
				lt.clearFlags();
				return "Highlighting of enemies in battle has been turned off.";
			} else if (strArgs.equalsIgnoreCase("on"))
			{
				lt.highlight = true;
				return "Highlighting of enemies in battle has been turned on.";
			}
		}
		if (strCommand.equals("popup"))
		{
			if (strArgs == null)
			{
				if (lt.popup)
				{
					return "You have popup windows turned on.";
				}
				return "You have popup windows turned off.";
			} else if (strArgs.equalsIgnoreCase("off"))
			{
				lt.popup = false;
				return "You have turned popup windows off.";
			} else if (strArgs.equalsIgnoreCase("on"))
			{
				lt.popup = true;
				return "You have turned popup windows on.";
			}
		}
		if (strCommand.equals("nofollow"))
		{
			if (strArgs == null)
			{
				if (lt.noFollow)
				{
					return "You are not allowed to be followed.";
				}
				return "Your can be followed.";
			} else if (strArgs.equalsIgnoreCase("off"))
			{
				lt.noFollow = false;
				return "You can now be followed.";
			} else if (strArgs.equalsIgnoreCase("on"))
			{
				lt.noFollow = true;
				return "You can no longer be followed.";
			}
		}
		if (strCommand.equals("ignore"))
		{
			if (strArgs == null)
			{
				return "Ignore who?";
			}
			LivingThing thnStore = engGame.getPlayer(strArgs);
			if (thnStore == null)
			{
				return "They're not in this world.";
			}
			String strIgnoreName = thnStore.strName.toLowerCase();
			if (lt.strName.equalsIgnoreCase(strIgnoreName))
			{
				return "Trying to ignore yourself is not a good sign.";
			}
			if (thnStore.privs > 2)
			{
				return "You cannot ignore a god.";
			}
			if (!lt.vctIgnore.contains(strIgnoreName))
			{
				lt.vctIgnore.addElement(strIgnoreName);
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
				lt.vctIgnore.removeAllElements();
				return "You are no longer ignoring anyone.";
			}
			if (lt.vctIgnore.contains(strIgnoreName))
			{
				lt.vctIgnore.removeElement(strIgnoreName);
			} else
			{
				return "You are not ignoring them.";
			}
			return "You are no longer ignoring "+strIgnoreName;
		}
		if (strCommand.equals("appletimages"))
		{
			lt.updateAppletImages();
			return null;
		}
		if (strCommand.equals("applicationimages"))
		{
			lt.updateApplicationImages();
			return null;
		}
		if (strCommand.equals("notdead"))
		{
			return null;
		}
		if (strCommand.equals("quit") || strCommand.equals("logout"))
		{
			if (lt.batBattle == null)
			{
				lt.close();
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
