/*
 * This file is part of DuskZ, a graphical mud engine.
 *
 * Copyright (C) 2000 Tom Weingarten <captaint@home.com>
 * Copyright (C) 2013 Michael Zucchi <notzed@gmail.com>
 *
 * DuskZ is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * DuskZ is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with DuskZ; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */
/**
 * Changes
 * Feb-2013 Michael Zucchi - modernised java
 * Mar-2013 Michael Zucchi - changed server protocol
 */
package duskz.server;

import duskz.protocol.DuskProtocol;
import duskz.protocol.Wearing;
import duskz.server.entity.Mob;
import duskz.server.entity.Merchant;
import duskz.server.entity.Sign;
import duskz.server.entity.Item;
import duskz.server.entity.Prop;
import duskz.server.entity.DuskObject;
import duskz.server.entity.PlayerMerchant;
import duskz.server.entity.LivingThing;
import duskz.server.entity.TileMap;
import java.io.*;
import java.util.LinkedList;
import java.util.StringTokenizer;

public class Commands implements DuskProtocol {

	public static String parseCommand(LivingThing lt, DuskEngine game, String cmdline) throws Exception {
		if (cmdline == null) {
			return null;
		}
		if (lt == null) {
			return null;
		}
		if (game == null) {
			return null;
		}

		String cmd = null;
		String args = null;

		int intIndex = cmdline.indexOf(" ");
		if (intIndex == -1) {
			cmd = cmdline.toLowerCase();
		} else {
			cmd = cmdline.substring(0, intIndex).toLowerCase();
			args = cmdline.substring(intIndex + 1).trim();
		}

		if (cmd.length() < 1) {
			return "huh?";
		}

		lt.isAlwaysCommands = true;
		boolean blnFoundScriptedCommand = false;
		/*
		 ** Don't try to find a scripted command if they are doing a tell
		 */
		if (cmd.substring(0, 1) != "/") {
			try {
				Script script = new Script("commands/" + cmd, game, false);
				script.varVariables.addVariable("trigger", lt);
				if (args != null) {
					script.runScript(args);
				} else {
					script.runScript();
				}
				script.close();
				blnFoundScriptedCommand = true;
			} catch (Exception e) {
				blnFoundScriptedCommand = false;
			}
			if (!lt.isAlwaysCommands) {
				return null;
			}
		}
		if (lt.privs > 2) {
			if (cmdline.startsWith(">")) {
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				cmdline = cmdline.substring(1);
				if (cmdline.equalsIgnoreCase("s")) {
					if (game.blnSavingGame) {
						return "Game already being saved, please wait.";
					}
					game.saveMap();
					return "Game settings saved";
				}

				String strMapLog = "shortmap_redraw";
				try (PrintStream psMap = new PrintStream(new FileOutputStream(strMapLog, true), true)) {
					game.changeMap(lt, lt.x, lt.y, Short.parseShort(cmdline));
					psMap.println("changetile " + lt.x + " " + lt.y + " " + Short.parseShort(cmdline));
					return null;
				} catch (Exception e) {
					game.log.printError("parseCommand():While " + lt.name + " tried to >" + cmdline, e);
					return null;
				}
			}
			if (cmdline.startsWith("<")) {
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				cmdline = cmdline.substring(1);
				if (cmdline.equals("s")) {
					if (game.blnSavingGame) {
						return "Game already being saved, please wait.";
					}
					game.saveMap();
					return "Game settings saved";
				} else if (cmdline.equalsIgnoreCase("merchant")) {
					if (lt.overMerchant() != null) {
						return "There's already a merchant there.";
					}
					if (lt.overPlayerMerchant() != null) {
						return "There's already a merchant there.";
					}
					Merchant mrcStore = new Merchant(game);
					mrcStore.x = lt.x;
					mrcStore.y = lt.y;
					//game.vctMerchants.add(mrcStore);
					//game.blnMerchantListChanged = true;
					game.addDuskObject(lt.map, mrcStore);
					return null;
				} else if (cmdline.toLowerCase().startsWith("prop ")) {
					if (cmdline.length() == 5) {
						return "Add what prop?";
					}
					cmdline = cmdline.substring(5);
					Prop prpStore = game.getProp(cmdline);
					if (prpStore != null) {
						prpStore.x = lt.x;
						prpStore.y = lt.y;
						//game.vctProps.addElement(prpStore);
						//game.blnPropListChanged = true;
						game.addDuskObject(lt.map, prpStore);
					}
					return null;
				} else if (cmdline.startsWith("sign ")) {
					if (cmdline.length() == 5) {
						return "What should the sign say?";
					}
					Sign sgnStore = new Sign(game, "sign", cmdline.substring(5), lt.x, lt.y, game.getID());
					//game.vctSigns.add(sgnStore);
					//game.blnSignListChanged = true;
					game.addDuskObject(lt.map, sgnStore);
					return null;
				}
				Item itmStore = game.getItem(cmdline);
				if (itmStore != null) {
					itmStore.x = lt.x;
					itmStore.y = lt.y;
					//game.vctItems.add(itmStore);
					game.addDuskObject(lt.map, itmStore);
					return null;
				}
				try {
					Mob mob = new Mob(cmdline, lt.x, lt.y, game);
					// TODO: this previously didn't call addDuskObject - bug or intentional?
					//game.vctMobs.addElement(mob);
					//game.blnMobListChanged = true;
					game.addDuskObject(lt.map, mob);

					mob.changeLocBypass(lt.map, lt.x, lt.y);
				} catch (Exception e) {
					game.log.printError("parseCommand():While creating mob \"" + cmdline + "\"", e);
				}
				return null;
			}
		}

		// Remap shortcuts
		if (cmd.startsWith(";")) {
			args = cmdline.substring(1).trim();
			cmd = "gossip";
		}
		if (cmd.startsWith(":")) {
			args = cmdline.substring(1).trim();
			cmd = "clan";
		}
		if (cmd.startsWith("'")) {
			args = cmdline.substring(1).trim();
			cmd = "say";
		}
		if (cmd.startsWith(".")) {
			args = cmdline.substring(1).trim();
			cmd = "emote";
		}
		if (cmd.startsWith("/")) {
			args = cmdline.substring(1).trim();
			cmd = "tell";
		}

		switch (cmd) {
			case "north":
			case "n":
				if (!lt.moveAfterClear("n")) {
					return "You can't move while you're following someone.";
				}
				return null;
			case "south":
			case "s":
				if (!lt.moveAfterClear("s")) {
					return "You can't move while you're following someone.";
				}
				return null;
			case "west":
			case "w":
				if (!lt.moveAfterClear("w")) {
					return "You can't move while you're following someone.";
				}
				return null;
			case "east":
			case "e":
				if (!lt.moveAfterClear("e")) {
					return "You can't move while you're following someone.";
				}
				return null;
			case "goto": {
				int destX;
				int destY;
				try {
					destX = Integer.parseInt(args.substring(0, args.lastIndexOf(' ')));
					destY = Integer.parseInt(args.substring(args.lastIndexOf(' ') + 1));
				} catch (Exception e) {
					game.log.printError("parseCommand():" + lt.name + " tried to " + cmdline, e);
					return null;
				}
				return lt.goTo(destX, destY, true);
			}

			case "addmember": {
				if (lt.privs != 1)
					return "Huh?";
				if (args == null) {
					return "Add who?";
				}
				LivingThing thnStore = game.getPlayer(args);
				if (thnStore == null) {
					return "They're not in this world";
				}
				if (lt.battle != null) {
					return "Not while you're fighting!";
				}
				if (thnStore.battle != null) {
					thnStore.chatMessage(lt.name + " has invited you to join their clan, but you are in the middle of a battle");
					return "They're in the middle of a battle. They have been notified that you tried to clan them.";
				}
				lt.chatMessage("You have invited " + thnStore.name + " to join the clan " + lt.clan + ".");

				if (true)
					// FIXME: protocol implementation
					throw new RuntimeException("cannot ask questions yet");
				// FIXME: this looks dodgy
				// FIXME: move to livingthing

				/*
				 //		thnStore.halt();
				 thnStore.stillThere();  // This puts something in the buffer
				 thnStore.stillThere();  // Have to do this twice to ensure that thnStore is out of
				 // its read loop
				 lt.connectionThread.sleep(500);  // wait for the "notdead" response to get back from client.
				 try {
				 // Empty out the BufferedReader for the answer
				 //	while (thnStore.instream.ready()) {
				 //		thnStore.instream.read();
				 //	}
				 } catch (Exception e) {
				 game.log.printError("parseCommand():While " + lt.name + " was trying to addmember " + thnStore.name, e);
				 }
				 thnStore.chatMessage(lt.name + " has invited you to join the clan " + lt.clan + ". If you accept, type yes.");
				 try {
				 if (thnStore.instream.readLine().equalsIgnoreCase("yes")) {
				 thnStore.clan = lt.clan;
				 if (thnStore.privs == 1) {
				 thnStore.privs = 0;
				 }
				 thnStore.chatMessage("You have been added to the clan, " + lt.clan + "");
				 thnStore.proceed();
				 game.removeDuskObject(thnStore);
				 game.addDuskObject(thnStore);
				 return thnStore.name + " has accepted your invitation.";
				 }
				 } catch (Exception e) {
				 game.log.printError("parseCommand():While reading the answer to " + lt.name + "'s attempt to addmember " + thnStore.name, e);
				 }
				 thnStore.proceed();
				 */
				return thnStore.name + " has declined your invitation.";
			}
			case "kick": {
				if (lt.privs != 1)
					return "Huh?";
				if (args == null) {
					return "Kick who?";
				}
				LivingThing thnStore = game.getPlayer(args);
				if (thnStore == null) {
					return "They're not in this world.";
				}
				if (!thnStore.clan.equalsIgnoreCase(lt.clan)) {
					return "They're not in your clan.";
				}
				thnStore.chatMessage("You have been kicked out of " + lt.clan + ".");
				thnStore.clan = "none";
				game.removeDuskObject(thnStore);
				game.addDuskObject(thnStore.map, thnStore);
				return thnStore.name + " has been kicked out of your clan.";
			}
//		if (lt.privs > 2) {
//			if (lt.privs > 4) {
			case "makegod": {
				if (lt.privs <= 4)
					return "Huh?";

				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				if (args == null) {
					return "Make who a god?";
				}
				int iSPloc = args.indexOf(" ");
				if (iSPloc < 0) {
					return "Make them what level of a god?";
				}
				String sName = args.substring(0, iSPloc).trim();
				int level = Integer.parseInt(args.substring(iSPloc).trim());

				LivingThing thnStore = game.getPlayer(sName);
				if (thnStore == null) {
					return "They're not in this world.";
				}
				int oldLevel = thnStore.privs;
				thnStore.privs = level;
				thnStore.isSaveNeeded = true;
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":Changed " + thnStore.name + "'s priveledges from " + oldLevel + " to " + level + ".");
				return thnStore.name + "'s priveledges have been set to " + level + ".";
			}
			case "reloadprefs": {
				if (lt.privs <= 4)
					return "Huh?";
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				game.loadPrefs();
				return "Preferences reloaded";
			}
			case "resizemap":
				if (lt.privs <= 4)
					return "Huh?";
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				game.resizeMap(lt.map, lt.x + 1, lt.y + 1);
				return "Map resized";
			case "shutdown":
				if (lt.privs <= 4)
					return "Huh?";
				game.log.printMessage(Log.ALWAYS, lt.name + " has shut down the server.");
				game.chatMessage("The server is going down.", "default");
				game.blnShuttingDown = true;
				for (LivingThing thnStore : game.playersByName.values()) {
					try {
						if (thnStore != lt) {
							thnStore.close();
						}
					} catch (Exception e) {
						if (thnStore != null) {
							game.log.printError("parseCommand():While trying to close " + thnStore.name + " for " + lt.name + "'s shutdown request", e);
						} else {
							game.log.printError("parseCommand():While trying to close a null player for " + lt.name + "'s shutdown request", e);
						}
					}
				}
				lt.isSaveNeeded = true;
				lt.savePlayer();
				System.gc();
				System.exit(0);
				return null;
			case "stop":
				if (lt.privs <= 4)
					return "Huh?";
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				game.blnShuttingDown = true;
				return "Stopped accepting incoming socket connections.";
			case "start":
				if (lt.privs <= 4)
					return "Huh?";
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				game.blnShuttingDown = false;
				return "Started accepting incoming connections";
			case "filteron":
				if (lt.privs <= 4)
					return "Huh?";
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				game.blnIPF = true;
				return "Started filtering duplicate IP addressess of socket connections.";
			case "filteroff":
				if (lt.privs <= 4)
					return "Huh?";
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				game.blnIPF = false;
				return "Stopped filtering duplicate IP addressess of socket connections.";
			case "floodlimit":
				if (lt.privs <= 4)
					return "Huh?";
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				if (args == null) {
					return "What value do you want the floodlimit to have?";
				}
				try {
					game.floodLimit = (long) Integer.parseInt(args);
					return "Set floodlimit to " + args + " milliseconds.";
				} catch (Exception e) {
					game.log.printError("parseCommand():Invalid value \"" + args + "\" for floodlimit.", e);
					return "Invalid value \"" + args + "\" for floodlimit.";
				}
			case "ipban": {
				if (lt.privs <= 4)
					return "Huh?";
				String strBlockedIP;
				if (args == null) {
					return "Whos IP address do you wish to ban?";
				}
				LivingThing thnStore = game.getPlayer(args);
				if (thnStore == null) {
					return "They're not in this world.";
				}
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				String strIP = thnStore.getAddress();
				int i = strIP.indexOf("/");
				strIP = strIP.substring(i + 1, strIP.length());
				// FIXME: better i/o
				try (RandomAccessFile rafBannedIP = new RandomAccessFile("conf/blockedIP", "rw")) {
					strBlockedIP = rafBannedIP.readLine();
					while (strBlockedIP != null) {
						if (strIP.indexOf(strBlockedIP) != -1) {
							//rafBannedIP.close();
							return "Already blocked.";
						}
						strBlockedIP = rafBannedIP.readLine();
					}
					rafBannedIP.seek(rafBannedIP.length());
					rafBannedIP.writeBytes(strIP + "\n");
				} catch (IOException ex) {
					game.log.printError("parseCommand():When " + lt.name + " tried to ban " + thnStore + "'s IP address", ex);
				}
				return thnStore.name + "'s IP address has been blocked.";
			}
			case "loglevel":
				if (lt.privs <= 4)
					return "Huh?";
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				if (args == null) {
					return "Logging level is currently " + game.log.getLogLevel();
				}
				try {
					int level = Integer.parseInt(args);
					game.log.setLogLevel(level);
					return "Logging level is now " + game.log.getLogLevel();
				} catch (Exception e) {
					game.log.printError("parseCommand():Invalid value \"" + args + "\" for loglevel.", e);
					return "Invalid value \"" + args + "\" for loglevel.";
				}
			case "gc":
				if (lt.privs <= 4)
					return "Huh?";
				game.log.printMessage(Log.INFO, "Starting garbage collection.");
				System.gc();
				game.log.printMessage(Log.INFO, "Finished garbage collection.");
				return "Finished garbage collection.";
			case "finalize":
				if (lt.privs <= 4)
					return "Huh?";
				game.log.printMessage(Log.INFO, "Starting finalization.");
				System.runFinalization();
				game.log.printMessage(Log.INFO, "Finished finalization.");
				return "Finished finalization.";
			case "cleanup":
				if (lt.privs <= 4)
					return "Huh?";
				game.cleanup();
				return "Finished cleanup.";
			case "save":
				if (lt.privs <= 2)
					return "Huh?";
				if (game.blnSavingGame) {
					return "Game already being saved, please wait.";
				}
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				game.saveMap();
				return "Game settings saved";
			case "backup":
				if (lt.privs <= 2)
					return "Huh?";
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				game.backupMap();
				return "Game settings backed up";
			case "list": {
				if (lt.privs <= 2)
					return "Huh?";
				if (args == null) {
					return "What do you want to list?";
				}
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				cmdline = cmdline.substring(5);
				String filename = null;
				String title = null;
				if (args.equals("items")) {
					filename = "defItems";
					title = "Items:\n";
				} else if (args.equals("conf")) {
					filename = "conf";
					title = "Conf files:\n";
				} else if (args.equals("mobs")) {
					filename = "defMobs";
					title = "Mobiles:\n";
				} else if (args.equals("commands")) {
					filename = "commands";
					title = "Custom commands:\n";
				} else if (args.equals("races")) {
					filename = "defRaces";
					title = "Races:\n";
				} else if (args.equals("pets")) {
					filename = "defPets";
					title = "Pets:\n";
				} else if (args.equals("factions")) {
					filename = "factions";
					title = "Factions:\n";
				} else if (args.equals("conditions")) {
					filename = "defConditions";
					title = "Conditions:\n";
				} else if (args.equals("help")) {
					filename = "helpFiles";
					title = "Help Files:\n";
				} else if (args.equals("scripts")) {
					filename = "scripts";
					title = "Scripts:\n";
				} else if (args.equals("spell groups")) {
					filename = "defSpellGroups";
					title = "Spell Groups:\n";
				} else if (args.equals("spells")) {
					filename = "defSpells";
					title = "Spells:\n";
				} else if (args.equals("props")) {
					filename = "defProps";
					title = "Props:\n";
				} else if (args.equals("move actions")) {
					filename = "defMoveActions";
					title = "Move Action Scripts:\n";
				} else if (args.equals("can move")) {
					filename = "defCanMoveScripts";
					title = "Can Move Scripts:\n";
				} else if (args.equals("can see")) {
					filename = "defCanSeeScripts";
					title = "Can See Scripts:\n";
				} else if (args.equals("tile actions")) {
					filename = "defTileActions";
					title = "Tile Action Scripts:\n";
				} else if (args.equals("tile move")) {
					filename = "defTileScripts";
					title = "Can Move Tile Scripts:\n";
				} else if (args.equals("tile see")) {
					filename = "defTileSeeScripts";
					title = "Tile See Scripts:\n";
				}
				if (filename != null) {
					File filList = new File(filename);
					String strResult[] = filList.list();
					StringBuilder sb = new StringBuilder();
					//strBuff.append("").append((char) 20).append(strTitle).append("\n");
					for (int i = 0; i < strResult.length; i++) {
						// Only output files that do not end in .dsko
						if (strResult[i].indexOf(".dsko") == -1) {
							sb.append(strResult[i]).append("\n");
						}
					}
					//strBuff.append("--EOF--\n");
					//lt.send(strBuff.toString());
					lt.viewText(title, false, sb.toString());
					return null;
				}
				return "You can't list that.";
			}
			case "view": {
				if (lt.privs <= 2)
					return "Huh?";

				if (args == null) {
					return "What do you want to view?";
				}
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				if (args.indexOf("..") != -1) {
					return "You don't have permission to access that file.";
				}
				String filename = null;
				boolean blnUser = false;
				boolean blnPet = false;
				if (args.startsWith("item ")) {
					args = args.toLowerCase();
					filename = "defItems/" + args.substring(5);
				} else if (args.startsWith("conf ")) {
					filename = "conf/" + args.substring(5);
				} else if (args.startsWith("mob ")) {
					filename = "defMobs/" + args.substring(4);
				} else if (args.startsWith("command ")) {
					filename = "commands/" + args.substring(8);
				} else if (args.startsWith("race ")) {
					filename = "defRaces/" + args.substring(5);
				} else if (args.startsWith("pet ")) {
					filename = "defPets/" + args.substring(5);
				} else if (args.startsWith("faction")) {
					return "You cannot view faction files.";
				} else if (args.startsWith("condition ")) {
					filename = "defConditions/" + args.substring(10);
				} else if (args.startsWith("help ")) {
					filename = "helpFiles/" + args.substring(5);
				} else if (args.startsWith("script ")) {
					filename = "scripts/" + args.substring(7);
				} else if (args.startsWith("spell group ")) {
					filename = "defSpellGroups/" + args.substring(12);
				} else if (args.startsWith("spell ")) {
					filename = "defSpells/" + args.substring(6);
				} else if (args.startsWith("prop ")) {
					filename = "defProps/" + args.substring(5);
				} else if (args.startsWith("move action ")) {
					filename = "defMoveActions/" + args.substring(12);
				} else if (args.startsWith("can move ")) {
					filename = "defCanMoveScripts/" + args.substring(9);
				} else if (args.startsWith("can see ")) {
					filename = "defCanSeeScripts/" + args.substring(8);
				} else if (args.startsWith("tile action ")) {
					filename = "defTileActions/" + args.substring(12);
				} else if (args.startsWith("tile move ")) {
					filename = "defTileScripts/" + args.substring(10);
				} else if (args.startsWith("tile see ")) {
					filename = "defTileSeeScripts/" + args.substring(9);
				} else if (args.startsWith("user ")) {
					if (lt.privs < 5) {
						return "You don't have enough privelages to edit a user's file.";
					}
					blnUser = true;
					filename = "users/" + args.substring(5);
				} else if (args.startsWith("pet ")) {
					if (lt.privs < 5) {
						return "You don't have enough privelages to edit a user's pet file.";
					}
					blnPet = true;
					filename = "pets/" + args.substring(4);
				}
				File filView = new File(filename);
				if (!filView.exists()) {
					if (blnUser) {
						return "There is no player named \"" + filView.getName() + "\".";
					}
					if (blnPet) {
						return "The player named \"" + filView.getName() + "\" does not have a pet.";
					}
					//lt.send((char) 18 + args + "\n--EOF--\n");
					lt.viewText(args, true, null);
					return null;
				}
				RandomAccessFile rafView = null;
				StringBuilder sb = new StringBuilder();
				try {
					rafView = new RandomAccessFile(filView, "rw");
					if (blnUser) {
						rafView.readLine();  //Skip over users' password
					}
					String strStore2 = rafView.readLine();
					//sb.append((char) 18 + args + "\n");
					while (strStore2 != null) {
						sb.append(strStore2 + "\n");
						strStore2 = rafView.readLine();
					}
					//sb.append("--EOF--\n");
					lt.viewText(args, true, sb.toString());
				} catch (Exception e) {
					game.log.printError("parseCommand():Reading file for " + filView.getName(), e);
				}
				try {
					rafView.close();
				} catch (Exception e) {
					game.log.printError("parseCommand():Closing file after " + filView.getName(), e);
				}
				return null;
			}
			case "submit": {
				if (lt.privs <= 2)
					return "Huh?";
				if (args == null) {
					return "What do you want to submit?";
				}
				if ((lt.privs < 4) && (!args.startsWith("mob "))) {
					return "You are not allowed to submit files.";
				}
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				if (args.indexOf("..") != -1) {
					return "You don't have permission to access that file.";
				}

				if (true)
					return "Developer hasn't implemented submit yet";

				// FIXME: implement submit, just use some submit message protocol

				boolean compile = false;
				boolean blnUser = false;
				boolean blnPet = false;
				String strFileName = null;
				if (args.startsWith("item ") && (lt.privs > 3)) {
					args = args.toLowerCase();
					strFileName = "defItems/" + args.substring(5);
				} else if (args.startsWith("conf ") && (lt.privs > 3)) {
					strFileName = "conf/" + args.substring(5);
				} else if (args.startsWith("mob ")) {
					strFileName = "defMobs/" + args.substring(4);
				} else if (args.startsWith("command ") && (lt.privs > 3)) {
					strFileName = "commands/" + args.substring(8);
					compile = true;
				} else if (args.startsWith("race ") && (lt.privs > 3)) {
					strFileName = "defRaces/" + args.substring(5);
				} else if (args.startsWith("pet ") && (lt.privs > 3)) {
					strFileName = "defPets/" + args.substring(4);
				} else if (args.startsWith("faction") && (lt.privs > 3)) {
					return "You cannot submit faction files.";
				} else if (args.startsWith("condition ") && (lt.privs > 3)) {
					strFileName = "defConditions/" + args.substring(10);
				} else if (args.startsWith("help ") && (lt.privs > 3)) {
					strFileName = "helpFiles/" + args.substring(5);
				} else if (args.startsWith("script ") && (lt.privs > 3)) {
					strFileName = "scripts/" + args.substring(7);
					compile = true;
				} else if (args.startsWith("spell group ") && (lt.privs > 3)) {
					strFileName = "defSpellGroups/" + args.substring(12);
					compile = true;
				} else if (args.startsWith("spell ") && (lt.privs > 3)) {
					strFileName = "defSpells/" + args.substring(6);
				} else if (args.startsWith("prop ")) {
					strFileName = "defProps/" + args.substring(5);
				} else if (args.startsWith("move action ") && (lt.privs > 3)) {
					strFileName = "defMoveActions/" + args.substring(12);
					compile = true;
				} else if (args.startsWith("can move ") && (lt.privs > 3)) {
					strFileName = "defCanMoveScripts/" + args.substring(9);
					compile = true;
				} else if (args.startsWith("can see ") && (lt.privs > 3)) {
					strFileName = "defCanSeeScripts/" + args.substring(8);
					compile = true;
				} else if (args.startsWith("tile action ") && (lt.privs > 3)) {
					strFileName = "defTileActions/" + args.substring(12);
					compile = true;
				} else if (args.startsWith("tile move ") && (lt.privs > 3)) {
					strFileName = "defTileScripts/" + args.substring(10);
					compile = true;
				} else if (args.startsWith("tile see ") && (lt.privs > 3)) {
					strFileName = "defTileSeeScripts/" + args.substring(9);
					compile = true;
				} else if (args.startsWith("user ")) {
					if (lt.privs < 5) {
						return "You don't have enough privelages to submit a user's file.";
					}
					if (game.getPlayer(args.substring(5)) != null) {
						return "You cannot submit a file for an active user.";
					}
					blnUser = true;
					strFileName = "users/" + args.substring(5);
				} else if (args.startsWith("pet ")) {
					if (lt.privs < 5) {
						return "You don't have enough privelages to submit a user's pet file.";
					}
					if (game.getPlayer(args.substring(4)) != null) {
						return "You cannot submit a pet file for an active user.";
					}
					blnPet = true;
					strFileName = "pets/" + args.substring(4);
				}
				if (strFileName == null) {
					return "Cannot submit " + args;
				}
				File filView = null;
				try {
					filView = new File(strFileName);
				} catch (Exception e) {
					return "Cannot submit " + args + " (" + strFileName + ")";
				}
				RandomAccessFile rafView = null;
				try {
					if (blnUser) {
						/*
						 Read in the user's password before deleting the file
						 */
						rafView = new RandomAccessFile(filView, "r");
						cmdline = rafView.readLine();
					}
					if (filView.exists()) {
						filView.delete();
					}
					rafView = new RandomAccessFile(filView, "rw");
					if (blnUser) {
						/*
						 Write out the password for user files
						 */
						rafView.writeBytes(cmdline + "\n");
					}
					/**
					 * FIXME: from message
					 */
					/*
					 cmdline = lt.instream.readLine();
					 while (!cmdline.equals("--EOF--")) {
					 rafView.writeBytes(cmdline + "\n");
					 cmdline = lt.instream.readLine();
					 }*/
					rafView.close();
					if (compile) {
						Script scrStore = new Script(filView.getPath(), game, true);
						scrStore.close();
					}
					if (blnUser || blnPet) {
						/*
						 Delete the .backup file for users and pets
						 */
						filView = new File(strFileName + ".backup");
						if (filView.exists()) {
							filView.delete();
						}
					}
				} catch (Exception e) {
					game.log.printError("parseCommand():While submitting file " + args + " (" + filView.getName() + ")", e);
					try {
						rafView.close();
					} catch (Exception e2) {
						game.log.printError("parseCommand():While closing file " + args + " (" + filView.getName() + ") after failed submit", e);
					}
					return "Error while trying to submit " + args + " (" + filView.getName() + ").";
				}
				return "Submit of " + args + " was successful.";
			}
			case "delete": {
				if (lt.privs <= 2)
					return "Huh?";
				if (args == null) {
					return "What do you want to delete?";
				}
				if (lt.privs < 4) {
					return "You are not allowed to delete files.";
				}
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				if (args.indexOf("..") != -1) {
					return "You don't have permission to access that file.";
				}
				String filename = null;
				String strReturn = null;
				if (args.startsWith("item ")) {
					filename = "defItems/" + args.substring(5);
					strReturn = "item " + args.substring(5);
				} else if (args.startsWith("conf ")) {
					filename = "conf/" + args.substring(5);
					strReturn = "conf " + args.substring(5);
				} else if (args.startsWith("mob ")) {
					filename = "defMobs/" + args.substring(4);
					strReturn = "mob " + args.substring(4);
				} else if (args.startsWith("command ")) {
					filename = "commands/" + args.substring(8);
					strReturn = "command " + args.substring(8);
				} else if (args.startsWith("race ")) {
					filename = "defRaces/" + args.substring(5);
					strReturn = "race " + args.substring(5);
				} else if (args.startsWith("pet ")) {
					filename = "defPets/" + args.substring(4);
					strReturn = "pet " + args.substring(4);
				} else if (args.startsWith("faction")) {
					return "You cannot delete faction files.";
				} else if (args.startsWith("condition ")) {
					filename = "defConditions/" + args.substring(8);
					strReturn = "condition " + args.substring(8);
				} else if (args.startsWith("help ")) {
					filename = "helpFiles/" + args.substring(5);
					strReturn = "help " + args.substring(5);
				} else if (args.startsWith("script ")) {
					filename = "scripts/" + args.substring(7);
					strReturn = "script " + args.substring(7);
				} else if (args.startsWith("spell group ")) {
					filename = "defSpellGroups/" + args.substring(12);
					strReturn = "spell group " + args.substring(12);
				} else if (args.startsWith("spell ")) {
					filename = "defSpells/" + args.substring(6);
					strReturn = "spell " + args.substring(6);
				} else if (args.startsWith("prop ")) {
					filename = "defProps/" + args.substring(5);
					strReturn = "prop " + args.substring(5);
				} else if (args.startsWith("move action ")) {
					filename = "defMoveActions/" + args.substring(12);
					strReturn = "move action " + args.substring(12);
				} else if (args.startsWith("can move ")) {
					filename = "defCanMoveScripts/" + args.substring(9);
					strReturn = "can move " + args.substring(9);
				} else if (args.startsWith("can see ")) {
					filename = "defCanSeeScripts/" + args.substring(8);
					strReturn = "can see " + args.substring(8);
				} else if (args.startsWith("tile action ")) {
					filename = "defTileActions/" + args.substring(12);
					strReturn = "tile action " + args.substring(12);
				} else if (args.startsWith("tile move ")) {
					filename = "defTileScripts/" + args.substring(10);
					strReturn = "tile move " + args.substring(10);
				} else if (args.startsWith("tile see ")) {
					filename = "defTileSeeScripts/" + args.substring(9);
					strReturn = "tile see " + args.substring(9);
				}
				File filDelete = null;
				if (filename != null) {
					filDelete = new File(filename);
					if (filDelete.exists()) {
						filDelete.delete();
						filDelete = new File(filename + ".dsko");
						if (filDelete.exists()) {
							filDelete.delete();
							strReturn += " and the associated .dsko file.";
						}
					} else {
						return strReturn + " does not exist.";
					}
					return "Deleted " + strReturn;
				}
				return "You cannot delete that.";
			}
			case "clanleader": {
				if (lt.privs <= 2)
					return "Huh?";

				if (args == null) {
					return "Clanleader who?";
				}
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				LivingThing thnStore = game.getPlayer(args.substring(0, args.indexOf(' ')));
				if (thnStore == null) {
					return "They're not in this world";
				}
				if (args.length() < thnStore.name.length() + 2) {
					return "What clan?";
				}
				if (thnStore.privs > 1) {
					return "You can't clanleader them.";
				}
				args = args.substring(thnStore.name.length() + 1);
				thnStore.clan = args;
				if (args.equals("none")) {
					thnStore.privs = 0;
					thnStore.chatMessage("You are now clanless.");
				} else {
					thnStore.privs = 1;
					thnStore.chatMessage("You are now a member of the " + args + " clan.");
				}
				game.removeDuskObject(thnStore);
				game.addDuskObject(thnStore.map, thnStore);
				return thnStore.name + " is now a leader of the " + args + " clan.";
			}
			case "boot": {
				if (lt.privs <= 2)
					return "Huh?";
				if (args == null) {
					return "Boot who?";
				}
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				LivingThing thnStore = game.getPlayer(args);
				if (thnStore == null) {
					return "They're not in this world.";
				}
				if (thnStore.privs >= lt.privs) {
					thnStore.chatMessage(lt.name + " attempted to boot you.");
					return "You do not have high enough privelages to boot them.";
				}
				thnStore.chatMessage("You have been booted.");
				thnStore.close();
				return null;
			}
			case "hardkill": {
				if (lt.privs <= 2)
					return "Huh?";
				if (args == null) {
					return "HardKill who?";
				}
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				LivingThing thnStore = game.getPlayer(args);
				if (thnStore == null) {
					return "They're not in this world.";
				}
				if (thnStore.privs >= lt.privs) {
					thnStore.chatMessage(lt.name + " attempted to HardKill you.");
					return "You do not have high enough privelages to HardKill them.";
				}
				thnStore.closeNoMsgPlayer();
				return null;
			}
			case "nochannel": {
				if (lt.privs <= 2)
					return "Huh?";
				if (args == null) {
					return "nochannel who for how long?";
				}
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				LivingThing thnStore;
				int duration;
				try {
					thnStore = game.getPlayer(args.substring(0, args.indexOf(" ")));
					duration = Integer.parseInt(args.substring(args.indexOf(" ") + 1));
				} catch (Exception e) {
					game.log.printError("parseCommand():When " + lt.name + " tried to nochannel " + args, e);
					return "nochannel who for how long?";
				}
				if (thnStore == null) {
					return "They're not in this world.";
				}
				if (thnStore.privs >= lt.privs) {
					thnStore.chatMessage(lt.name + " attempted to nochannel you.");
					return "You do not have high enough privelages to nochannel them.";
				}
				if (duration > game.noChannelMax) {
					duration = game.noChannelMax;
				}
				thnStore.chatMessage("You have been nochanneled for " + duration + " seconds.");
				thnStore.noChannel = duration;
				return "You have nochanneled " + thnStore.name + " for " + duration + " seconds";
			}
			case "allowchannel": {
				if (lt.privs <= 2)
					return "Huh?";
				if (args == null) {
					return "allowchannel who?";
				}
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				LivingThing thnStore = game.getPlayer(args);
				if (thnStore == null) {
					return "They're not in this world.";
				}
				thnStore.chatMessage("Your nochannel status has been removed.");
				thnStore.noChannel = 0;
				return thnStore.name + "'s nochannel status has been removed.";
			}
			case "gecho": {
				if (lt.privs <= 2)
					return "Huh?";
				if (args == null) {
					return "G-Echo what?";
				}
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				game.chatMessage(args, "default");
				return null;
			}
			case "teleport": {
				if (lt.privs <= 2)
					return "Huh?";
				if (args == null) {
					return "Teleport to where?";
				}
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				int index = args.lastIndexOf('_');
				char charSep = ' ';
				if (index != -1) {
					charSep = '_';
				}
				try {
					String[] params = args.split(" ");
					TileMap map;
					int destX, destY;
					if (params.length == 3) {
						map = game.maps.get(params[0]);
						destX = Integer.parseInt(params[1]);
						destY = Integer.parseInt(params[2]);
					} else {
						map = lt.map;
						destX = Integer.parseInt(params[0]);
						destY = Integer.parseInt(params[1]);
					}
					if (lt.privs < 5 && destX >= map.getCols()) {
						destX = map.getCols() - 1;
					}
					if (lt.privs < 5 && destY >= map.getRows()) {
						destY = map.getRows() - 1;
					}
					if (destX < 0) {
						destX = 0;
					}
					if (destY < 0) {
						destY = 0;
					}
					lt.changeLocBypass(map, destX, destY);
				} catch (Exception e) {
					LivingThing thnStore = game.getPlayer(args);
					if (thnStore == null) {
						return "Teleport to where?";
					} else {
						// Hmm, i'm not sure what this does, teleport to another player?
						// Whats with the weird range checking?
						int destX = thnStore.x;
						int destY = thnStore.y;
						if (lt.privs < 5 && destX > 349) {
							destX = 349;
						}
						if (lt.privs < 5 && destY > 349) {
							destY = 349;
						}
						if (destX < 0) {
							destX = 0;
						}
						if (destY < 0) {
							destY = 0;
						}
						lt.changeLocBypass(thnStore.map, destX, destY);
					}
				}
				return null;
			}
			case "remove": {
				if (lt.privs <= 2)
					return "Huh?";
				if (args == null) {
					return "remove what?";
				}
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				DuskObject objStore = lt.getLocalObject(args);
				if (objStore != null) {
					if (objStore.isLivingThing()) {
						LivingThing thnStore = (LivingThing) objStore;
						if (thnStore.isMob()) {
							thnStore.close();
							game.blnMobListChanged = true;
							return "Object removed.";
						} else {
							return "You can't remove players/pets.";
						}
					} else if (objStore.isItem()) {
						//game.vctItems.remove(objStore);
						game.removeDuskObject(objStore);
						return "Object removed.";
					} else if (objStore.isSign()) {
						//game.vctSigns.remove(objStore);
						//game.blnSignListChanged = true;
						game.removeDuskObject(objStore);
						return "Object removed.";
					} else if (objStore.isProp()) {
						//game.vctProps.removeElement(objStore);
						//game.blnPropListChanged = true;
						game.removeDuskObject(objStore);
						return "Object removed.";
					} else if (objStore.isMerchant()) {
						//game.vctMerchants.remove(objStore);
						//game.blnMerchantListChanged = true;
						game.removeDuskObject(objStore);
						return "Object removed.";
					}
				}
				return "You don't see that here.";
			}
			case "changeclan": {
				if (lt.privs <= 2)
					return "Huh?";
				if (args == null) {
					return "ChangeClan who?";
				}
				LivingThing thnStore = game.getPlayer(args.substring(0, args.indexOf(' ')));
				if (thnStore == null) {
					return "They're not in this world";
				}
				if (cmdline.length() < thnStore.name.length() + 2) {
					return "What clan?";
				}
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
				args = args.substring(thnStore.name.length() + 1);
				thnStore.clan = args;
				if (thnStore.privs == 1) {
					thnStore.privs = 0;
				}
				if (args.equals("none")) {
					thnStore.chatMessage("You are now a member of no clan.");
				} else {
					thnStore.chatMessage("You are now a member of the " + args + " clan.");
				}
				return thnStore.name + " has been added to the " + args + " clan";
			}
			case "madd": {
				if (lt.privs <= 2)
					return "Huh?";
				if (args == null) {
					return "Madd what?";
				}
				Merchant mrcStore = lt.overMerchant();
				if (mrcStore != null) {
					game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
					mrcStore.items.add(args);
					game.refreshEntities(lt);
				} else {
					if (lt.overPlayerMerchant() != null) {
						return "You cannot add items to a player's merchant this way.";
					}
					return "You are not on a merchant.";
				}
				return null;
			}
			case "mremove": {
				if (lt.privs <= 2)
					return "Huh?";
				if (args == null) {
					return "Mremove what?";
				}
				Merchant mrcStore = lt.overMerchant();
				if (mrcStore != null) {
					game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);
					mrcStore.items.remove(args);
					game.refreshEntities(lt);
				} else {
					if (lt.overPlayerMerchant() != null) {
						return "You cannot remove items from a player's merchant this way.";
					}
					return "You are not on a merchant.";
				}
				return null;
			}
			case "whoip": {
				if (lt.privs <= 2)
					return "Huh?";
				game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":" + cmdline + ":" + lt.x + "," + lt.y);

				int nPlayers = game.playersByName.size();
				StringBuilder sb = new StringBuilder();

				// TODO: this used to be atomic, does it need to be?

				for (LivingThing thnStore : game.playersByName.values()) {
					boolean hidden = false;
					if (thnStore.privs > 2) {
						if (thnStore.hasCondition("invis")) {
							hidden = true;
						}
					}
					if (hidden && (lt.privs < thnStore.privs)) {
						nPlayers--;
					}
				}

				lt.chatMessage("\tThere are " + nPlayers + " players online:");

				for (LivingThing thnStore : game.playersByName.values()) {
					boolean hidden = false;
					boolean skip = false;
					if (thnStore.privs > 2) {
						if (thnStore.hasCondition("invis")) {
							hidden = true;
						}
					}
					if (hidden && (lt.privs < thnStore.privs)) {
						skip = true;
					}
					if (!skip) {
						String ip = thnStore.getAddress().toString();
						while (ip.length() < 34) {
							ip += " ";
						}
						sb.setLength(0);
						sb.append("   ").append(ip);
						sb.append(thnStore.getCharacterPoints()).append("cp ");
						if (thnStore.privs == 1) {
							sb.append("{Clan Leader}");
						} else if (thnStore.privs == 3) {
							sb.append("{God}");
						} else if (thnStore.privs == 4) {
							sb.append("{High God}");
						} else if (thnStore.privs > 4) {
							sb.append("{Master God}");
						}
						if (hidden) {
							sb.append("{hidden}");
						}
						if (thnStore.noChannel != 0) {
							sb.append("{nochanneled}");
						}
						if (!thnStore.clan.equals("none")) {
							sb.append("<" + thnStore.clan + "> ");
						}
						sb.append(thnStore.name + "\n");
						lt.chatMessage(sb.toString());
					}
				}

				return null;
			}
			case "flee": {
				if (lt.battle != null) {
					lt.battle.addFirstCommand(lt, "flee");
					return null;
				} else {
					return "You're not fighting anyone";
				}
			}
			case "sleep": {
				if (lt.isSleeping) {
					return "You are already asleep";
				}
				if (lt.battle != null) {
					return "Not while you're fighting!";
				}
				if (!(lt.getMaster() == null || lt.getMaster().isSleeping)) {
					return "You can't sleep if you're following someone who's awake.";
				}
				lt.isSleeping = true;
				lt.updateActions();
				game.removeDuskObject(lt);
				game.addDuskObject(lt.map, lt);
				return "You go to sleep";
			}
			case "wake": {
				if (lt.isSleeping) {
					lt.isSleeping = false;
					lt.updateActions();
					game.removeDuskObject(lt);
					game.addDuskObject(lt.map, lt);
					return "You wake up";
				} else {
					return "You are already awake";
				}
			}
			case "change": {
				if (lt.battle != null) {
					return "Not while you're fighting!";
				}
				if (args == null) {
					return "Change what?";
				}

				if (true)
					return "Race changing unimplemented";

				if (args.equals("race")) {
					if (lt.getCharacterPoints() > game.changeRaceCpLimit) {
						return "You can no longer change your race.";
					}
					lt.unloadRace();

					// FIXME: I'm not sure why this needs to clear messages here.
/*
					 if (lt.isPet()) {

					 lt.getMaster().halt();
					 //					lt.getMaster().stillThere();  // This puts something in the buffer
					 //					lt.getMaster().thrConnection.sleep(750);  // wait for it...
					 try {
					 // Empty out the BufferedReader for the answer
					 //	while (lt.getMaster().instream.ready()) {
					 //		lt.getMaster().instream.readLine();
					 //	}
					 } catch (Exception e) {
					 game.log.printError("parseCommand():Trying to empty ready buffer of pet's master for change race.", e);
					 }
					 } else {
					 lt.halt();
					 //					lt.stillThere();  // This puts something in the buffer
					 //					lt.thrConnection.sleep(750);  // wait for it...
					 try {
					 // Empty out the BufferedReader for the answer
					 //	while (lt.instream.ready()) {
					 //		lt.instream.readLine();
					 //	}
					 } catch (Exception e) {
					 game.log.printError("parseCommand():Trying to empty ready buffer of player for change race.", e);
					 }
					 }
					 lt.loadRace();
					 if (lt.isPet()) {
					 lt.getMaster().proceed();
					 lt.getMaster().updateStats();
					 } else {
					 lt.proceed();
					 }
					 */
					game.removeDuskObject(lt);
					game.addDuskObject(lt.map, lt);
					lt.updateStats();
					return "Your race has been changed.";
				}
			}
			case "gossip": {
				if (!lt.isPlayer()) {
					return "Only players can use the gossip/clan/tell channels.";
				}
				if (lt.noChannel != 0) {
					return "You can't do that when nochanneled.";
				}
				if (args == null) {
					return "Gossip what?";
				}
				if (args.length() > game.messagecap) {
					return "That message was too long.";
				}
				if (!args.equals("")) {
					long lTemp = lt.lastMessageStamp;
					lt.lastMessageStamp = System.currentTimeMillis();
					if ((System.currentTimeMillis() - lTemp) < game.floodLimit) {
						return "No flooding.";
					}
					String strPerson = lt.name;
					if (lt.privs > 2
							&& lt.hasCondition("invis")
							&& lt.hasCondition("invis2")) {
						strPerson = "A god";
					}
					game.chatMessage(strPerson + " gossips: " + args, lt.name);
				}
				return null;
			}
			case "clan": {
				if (!lt.isPlayer() && !lt.isMob()) {
					return "Only players can use the gossip/clan/tell channels.";
				}
				if (lt.clan.equals("none")) {
					return "You're not in a clan. Use gossip instead";
				}
				if (lt.noChannel != 0) {
					return "You can't do that when nochanneled.";
				}
				if (args == null) {
					return "Clan what?";
				}
				if (args.length() > game.messagecap) {
					return "That message was too long.";
				}
				if (!args.equals("")) {
					long lTemp = lt.lastMessageStamp;
					lt.lastMessageStamp = System.currentTimeMillis();
					if ((System.currentTimeMillis() - lTemp) < game.floodLimit) {
						return "No flooding.";
					}
					game.chatMessage(lt.name + " clans: " + args, lt.clan, lt.name);
				}
				return null;
			}
			case "say": {
				if (args == null) {
					return "Say what?";
				}
				if (lt.noChannel != 0) {
					return "You can't do that when nochanneled.";
				}
				if (args.length() > game.messagecap) {
					return "That message was too long.";
				}
				if (!args.equals("")) {
					if (lt.isPet()) {
						game.chatMessage(lt.map, "Pet " + lt.name + " says: " + args, lt.x, lt.y, lt.name);
					} else if (lt.isMob()) {
						game.chatMessage(lt.map, "Mob " + lt.name + " says: " + args, lt.x, lt.y, "default");
					} else {
						long lTemp = lt.lastMessageStamp;
						lt.lastMessageStamp = System.currentTimeMillis();
						if ((System.currentTimeMillis() - lTemp) < game.floodLimit) {
							return "No flooding.";
						}
						String strPerson = lt.name;
						if (lt.privs > 2
								&& lt.hasCondition("invis")
								&& lt.hasCondition("invis2")) {
							strPerson = "A god";
						}
						game.chatMessage(lt.map, strPerson + " says: " + args, lt.x, lt.y, lt.name);
					}
				}
				return null;
			}
			case "emote": {
				if (args == null) {
					return "Emote what?";
				}
				if (lt.noChannel != 0) {
					return "You can't do that when nochanneled.";
				}
				if (args.length() > game.messagecap) {
					return "That message was too long.";
				}
				if (!args.equals("")) {
					long lTemp = lt.lastMessageStamp;
					lt.lastMessageStamp = System.currentTimeMillis();
					if ((System.currentTimeMillis() - lTemp) < game.floodLimit) {
						return "No flooding.";
					}
					String strPerson = lt.name;
					if (lt.privs > 2
							&& lt.hasCondition("invis")
							&& lt.hasCondition("invis2")) {
						strPerson = "A god";
					}
					game.chatMessage(lt.map, strPerson + " " + args, lt.x, lt.y, lt.name);
				}
				return null;
			}
			case "tell": {
				if (!lt.isPlayer()) {
					return "Only players can use the gossip/clan/tell channels.";
				}
				if (args == null) {
					return "Tell who what?";
				}
				if (lt.noChannel != 0) {
					return "You can't do that when nochanneled.";
				}
				StringTokenizer tknStore = new StringTokenizer(args, " ");
				String strStore2 = null;
				try {
					strStore2 = tknStore.nextToken();
				} catch (Exception e) {
					return "Tell who?";
				}
				LivingThing thnStore = game.getPlayer(strStore2);
				if (thnStore == null) {
					return "They're not in this world.";
				}
				if (thnStore.privs > 2
						&& thnStore.hasCondition("invis")
						&& thnStore.hasCondition("invis2")) {
					return "They're not in this world.";
				}
				if (thnStore.name.equalsIgnoreCase(lt.name)) {
					return "Talking to yourself is not a good sign.";
				}
				String strIgnoreName = thnStore.name.toLowerCase();
				if (lt.ignoreList.contains(strIgnoreName)) {
					return "You can't do that while you are ignoring them.";
				}
				strIgnoreName = lt.name.toLowerCase();
				if (thnStore.ignoreList.contains(strIgnoreName)) {
					return "They did not get the message, they are ignoring you.";
				}
				args = args.substring(strStore2.length(), args.length()).trim();
				if (args.length() > game.messagecap) {
					return "That message was too long.";
				}
				if (args.length() == 0) {
					return "Tell them what?";
				}
				long lTemp = lt.lastMessageStamp;
				lt.lastMessageStamp = System.currentTimeMillis();
				if ((System.currentTimeMillis() - lTemp) < game.floodLimit) {
					return "No flooding.";
				}
				String strPerson = lt.name;
				if (lt.privs > 2
						&& lt.hasCondition("invis")
						&& lt.hasCondition("invis2")) {
					strPerson = "A god";
				}
				game.log.printMessage(Log.ALWAYS, lt.name + " tells " + thnStore.name + " : " + args);
				thnStore.chatMessage(strPerson + " tells you: " + args);
				return "You tell " + strStore2 + ": " + args;
			}
			case "who": {
				int nPlayers = game.playersByName.size();
				StringBuilder sb = new StringBuilder();

				// TOOD: originally this was atomic on stream
				// although 'atomic' is wrong since nobody else was atomic on stream

				for (LivingThing thnStore : game.playersByName.values()) {
					boolean hidden = false;
					if (thnStore.privs > 2) {
						if (thnStore.hasCondition("invis")) {
							hidden = true;
						}
					}
					if (hidden && (lt.privs < thnStore.privs)) {
						nPlayers--;
					}
					if (lt.privs < 3 && !thnStore.isWorking) {
						nPlayers--;
					}
					if (lt.privs < 3 && !thnStore.isReady) {
						nPlayers--;
					}
				}

				lt.chatMessage("\tThere are " + nPlayers + " players online:");

				for (LivingThing thnStore : game.playersByName.values()) {
					boolean hidden = false;
					boolean skip = false;
					if (thnStore.privs > 2) {
						if (thnStore.hasCondition("invis")) {
							hidden = true;
						}
					}
					if (hidden && (lt.privs < thnStore.privs)) {
						skip = true;
					}
					if (lt.privs < 3 && !thnStore.isWorking) {
						skip = true;
					}
					if (lt.privs < 3 && !thnStore.isReady) {
						skip = true;
					}
					System.out.println(" user " + thnStore.name + " skip " + skip);
					if (!skip) {
						sb.setLength(0);
						sb.append("\t");
						sb.append(thnStore.getCharacterPoints());
						sb.append("cp ");
						if (lt.privs > 2 && !thnStore.isWorking) {
							sb.append("{* Not Working *}");
						}
						if (lt.privs > 2 && !thnStore.isReady) {
							sb.append("{Entering the world}");
						}
						if (lt.privs > 2 && !thnStore.isSaveable) {
							sb.append("{Loading/Saving}");
						}
						if (thnStore.privs == 1) {
							sb.append("{Clan Leader}");
						} else if (thnStore.privs == 3) {
							sb.append("{God}");
						} else if (thnStore.privs == 4) {
							sb.append("{High God}");
						} else if (thnStore.privs > 4) {
							sb.append("{Master God}");
						}
						if (hidden) {
							sb.append("{hidden}");
						}
						if (thnStore.noChannel != 0) {
							sb.append("{nochanneled}");
						}
						if (thnStore.ignoreList.contains(lt.name.toLowerCase())) {
							sb.append("{Ignoring you}");
						}
						if (lt.ignoreList.contains(thnStore.name.toLowerCase())) {
							sb.append("{Ignored}");
						}
						if (!thnStore.clan.equals("none")) {
							sb.append("<");
							sb.append(thnStore.clan);
							sb.append("> ");
						}
						if (thnStore.title == null
								|| thnStore.title.equals("none")) {
							sb.append(thnStore.name);
							//sb.append("\n");
						} else {
							sb.append(thnStore.name);
							sb.append(" ");
							sb.append(thnStore.title);
							//sb.append("\n");
						}
						lt.chatMessage(sb.toString());
					}
				}
				return "Who complete.";
			}
			case "kill":
			case "attack":
			case "a": {
				if (args == null) {
					return "Attack what?";
				}
				if (lt.isSleeping) {
					return "You can't do that while you're sleeping";
				}
				DuskObject objStore = lt.getLocalObject(args);
				if (objStore == null) {
					return "You don't see that here.";
				}
				if (!objStore.isLivingThing()) {
					return "You can't fight that.";
				}
				game.newBattle(lt, (LivingThing) objStore);
				return null;
			}
			case "order": {
				if (args == null) {
					return "Order who to do what?";
				}
				int intStore = args.indexOf(" ");
				if (intStore == -1) {
					return "Order them to do what?";
				}
				DuskObject objStore = lt.getLocalObject(args.substring(0, intStore));
				if (objStore == null) {
					return "You don't see that here.";
				}
				if (!objStore.isLivingThing()) {
					return "You can't order that.";
				}
				LivingThing thnStore = (LivingThing) objStore;
				if (thnStore.getCharmer() != lt) {
					return "They don't take orders from you.";
				}
				args = args.substring(intStore + 1);
				try {
					thnStore.chatMessage(Commands.parseCommand(thnStore, game, args));
//				lt.chatMessage(Commands.parseCommand(thnStore, engGame, strArgs));
				} catch (Exception e) {
					game.log.printError("parseCommand():" + thnStore.name + ", while trying to follow the following order: \"" + args + "\"", e);
				}
				return null;
			}

			case "look": {
				if (args == null) {
					return "Look at what?";
				}
				if (lt.isSleeping) {
					return "You can't do that while you're sleeping";
				}
				DuskObject objStore = lt.getLocalObject(args);
				if (objStore != null) {
					if (objStore.isLivingThing()) {
						LivingThing thnStore = (LivingThing) objStore;
						thnStore.chatMessage(lt.name + " is looking at you.");
						lt.chatMessage(thnStore.name + " has " + thnStore.getCharacterPoints() + "cp and " + thnStore.hp + "/" + thnStore.maxhp + "hp.");
						if (thnStore.description != null) {
							lt.chatMessage("Their description is: " + thnStore.description);
						}
						final String[] formats = {
							"They are wielding %s.",
							"They are wearing %s on their arms.",
							"They are wearing %s on their legs.",
							"They are wearing %s on their torso.",
							"They are wearing %s on their waist.",
							"They are wearing %s on their neck.",
							"They are wearing %s on their skull.",
							"They are wearing %s on their eyes.",
							"They are wearing %s on their hands."
						};
						for (int i = 0; i < formats.length; i++) {
							Item item = thnStore.wornItems.getWorn(i);
							if (item != null)
								lt.chatMessage(String.format(formats[i], item.description));
						}
						return null;
					} else if (objStore.isItem()) {
						Item itmStore = (Item) objStore;
						return "You see " + itmStore.description + ".";
					} else if (objStore.isProp()) {
						Prop prpStore = (Prop) objStore;
						return "You see " + prpStore.description + ".";
					} else if (objStore.isSign()) {
						Sign sgnStore = (Sign) objStore;
						return "The sign says " + sgnStore.strMessage + ".";
					} else if (objStore.isPlayerMerchant()) {
						lt.chatMessage("You see a merchant that sells");
						PlayerMerchant pmrStore = (PlayerMerchant) objStore;
						boolean blnEmptyMerchant = true;
						for (LinkedList<Item> list : pmrStore.vctItems.values()) {
							Item item = (Item) list.element();
							cmdline = item.name;
							String strSpacer = "\t";
							if (cmdline.length() < 11) {
								strSpacer = "\t\t";
							}
							lt.chatMessage("\t" + cmdline + strSpacer + item.description);
							blnEmptyMerchant = false;
						}
						if (blnEmptyMerchant) {
							lt.chatMessage("\tNothing at the moment.");
						}
					} else if (objStore.isMerchant()) {
						lt.chatMessage("You see a merchant that sells");
						Merchant mrcStore = (Merchant) objStore;
						boolean blnEmptyMerchant = true;
						for (String item : mrcStore.items) {
							Item itmStore = game.getItem(item);
							if (itmStore != null) {
								String strSpacer = "\t";
								if (item.length() < 11) {
									strSpacer = "\t\t";
								}
								lt.chatMessage("\t" + item + strSpacer + itmStore.description);
								blnEmptyMerchant = false;
							} else {
								if (item.equals("pet")) {
									lt.chatMessage("\tpets.");
									blnEmptyMerchant = false;
								} else {
									item = item.substring(6, item.length());
									lt.chatMessage("\ttraining in " + item);
									blnEmptyMerchant = false;
								}
							}
						}
						if (blnEmptyMerchant) {
							lt.chatMessage("\tNothing.");
						}
						return null;
					}
				}
				return "You don't see that here.";
			}

			case "inv":
			case "inventory": {
				final String[] formats = {
					"Wielded: %s",
					"Arms: %s",
					"Legs: %s",
					"Torso: %s",
					"Waist: %s",
					"Neck: %s",
					"Skull: %s",
					"Eyes: %s",
					"Hands: %s"};
				lt.chatMessage("-Worn-");
				for (int i = 0; i < formats.length; i++) {
					Item item = lt.wornItems.getWorn(i);
					if (item != null)
						lt.chatMessage(String.format(formats[i], item.description));
				}
				lt.chatMessage("-Inventory-:");
				for (LinkedList<Item> list : lt.itemList.values()) {
					if (!list.isEmpty()) {
						Item item = (Item) list.element();
						lt.chatMessage(list.size() + " " + item.name);
					}
				}
				return null;
			}

			case "help": {
				File file;
				String title;

				// FIXME: was atomic
				if (args == null) {
					file = new File("help");
					title = "Help";
				} else {
					if (args.indexOf("..") != -1) {
						return "There is no help on that subject";
					}
					file = new File("helpFiles/" + args);
					title = "Help on " + args;
				}

				try (RandomAccessFile helpFile = new RandomAccessFile(file, "r")) {
					lt.chatMessage(title);
					while ((cmdline = helpFile.readLine()) != null) {
						lt.chatMessage(cmdline);
					}
				} catch (IOException e) {
					game.log.printError("parseCommand():When " + lt.name + " tried to get help on " + args, e);
					return "There is no help on that subject";
				}
				return null;
			}

			case "get": {
				if (args == null) {
					return "Get what?";
				}
				DuskObject objStore = lt.getLocalObject(args);
				if (objStore == null) {
					return "You don't see that here.";
				}
				if (!objStore.isItem()) {
					return "You can't get that.";
				}
				Item itmStore = (Item) objStore;
				if (Math.abs(lt.x - itmStore.x) + Math.abs(lt.y - itmStore.y) < 2) {
					if (lt.privs > 2) {
						game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":gets " + args + ":" + lt.x + "," + lt.y);
					}
					lt.itemList.addElement(itmStore);
					lt.updateItems();
					game.removeDuskObject(itmStore);
				} else {
					return "That's too far away.";
				}
				itmStore.onGetItem(game, lt);
				return null;
			}

			case "drop": {
				if (args == null) {
					return "Drop what?";
				}
				int intDot = args.indexOf(".");
				int intNumToDrop = 1;
				if (intDot != -1) {
					try {
						intNumToDrop = Integer.parseInt(args.substring(0, intDot));
					} catch (NumberFormatException e) {
						intNumToDrop = 1;
					}
				}
				Item itmStore = lt.getItem(args);
				if (itmStore != null) {
					String strMessage = "You drop " + itmStore.name + ".";
					if (intNumToDrop > 1) {
						strMessage = "You drop " + intNumToDrop + " " + itmStore.name + ".";
					}
					if (itmStore.intCost == 0) {
						strMessage = "A " + itmStore.name + " vanishes into thin air.";
						if (intNumToDrop > 1) {
							strMessage = intNumToDrop + " " + itmStore.name + " vanish into thin air.";
						}
					}
					if (lt.privs > 2) {
						game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":drops " + args + ":" + lt.x + "," + lt.y);
					}
					for (int i = 0; i < intNumToDrop; i++) {
						itmStore = lt.getItemAndRemove(itmStore.name);
						itmStore.x = lt.x;
						itmStore.y = lt.y;
						if (itmStore.intCost != 0) {
							//game.vctItems.add(itmStore);
							game.addDuskObject(lt.map, itmStore);
							lt.updateItems();
						}
						itmStore.onDropItem(game, lt);
					}
					return strMessage;
				}
				return "You don't have that.";
			}

			case "use": {
				if (args == null) {
					return "Use what?";
				}
				if (lt.battle == null) {
					lt.useItem(args, -1);
				} else {
					lt.battle.addCommand(lt, "use " + args);
				}
				return null;
			}
			case "eat": {
				if (args == null) {
					return "Eat what?";
				}
				if (lt.battle == null) {
					lt.useItem(args, Item.FOOD);
				} else {
					lt.battle.addCommand(lt, "eat " + args);
				}
				return null;
			}
			case "drink": {
				if (args == null) {
					return "Drink what?";
				}
				if (lt.battle == null) {
					lt.useItem(args, Item.DRINK);
				} else {
					lt.battle.addCommand(lt, "drink " + args);
				}
				return null;
			}

			case "give": {
				if (args == null) {
					return "Give who what?";
				}
				StringTokenizer tknStore = new StringTokenizer(args, " ");
				String strStore2 = null;
				try {
					strStore2 = tknStore.nextToken();
				} catch (Exception e) {
					return "Give who what?";
				}
				DuskObject objStore = lt.getLocalObject(strStore2);
				if (objStore == null) {
					return "You don't see them here.";
				}
				if (!objStore.isLivingThing()) {
					return "You can't give to that.";
				}
				LivingThing thnStore = (LivingThing) objStore;
				if ((lt.privs < 3) && (Math.abs(thnStore.x - lt.x) + Math.abs(thnStore.y - lt.y) > 1)) {
					return "They're too far away.";
				}
				args = args.substring(strStore2.length() + 1);
				if (lt.privs > 2) {
					game.log.printMessage(Log.INFO, "godcommand:" + lt.name + ":gives " + args + " to " + strStore2 + ":" + lt.x + "," + lt.y);
				}
				if (args.startsWith("gp")) {
					args = args.substring(3);
					try {
						int intStore = Integer.parseInt(args);
						if (intStore < 0) {
							return "You can't give negative money!";
						}
						if (intStore <= lt.cash) {
							lt.cash -= intStore;
							thnStore.cash += intStore;
							lt.updateStats();
							thnStore.updateStats();
							thnStore.chatMessage(lt.name + " gives you " + intStore + "gp.");
							return "You give " + thnStore.name + " " + intStore + "gp.";
						} else {
							lt.chatMessage("You don't have that much gp");
						}
					} catch (Exception e) {
						return "That is not a valid amount of gp to give.";
					}
				}
				int intDot = args.indexOf(".");
				int intNumToGive = 1;
				if (intDot != -1) {
					try {
						intNumToGive = Integer.parseInt(args.substring(0, intDot));
					} catch (NumberFormatException e) {
						intNumToGive = 1;
					}
				}
				Item itmStore = lt.getItem(args);
				if (itmStore != null) {
					String strMessage = lt.name + " gives you ";
					String strMessage2 = "You give " + thnStore.name + " ";
					if (intNumToGive > 1) {
						strMessage += intNumToGive + " ";
						strMessage2 += intNumToGive + " ";
					}
					strMessage += itmStore.name + ".";
					strMessage2 += itmStore.name + ".";
					cmdline = itmStore.name;

					while (intNumToGive > 0) {
						itmStore = lt.getItemAndRemove(cmdline);
						thnStore.itemList.addElement(itmStore);
						intNumToGive--;

						itmStore.onDropItem(game, lt);
						itmStore.onGetItem(game, thnStore);
					}

					thnStore.chatMessage(strMessage);
					thnStore.updateItems();
					lt.updateItems();
					return strMessage2;
				}
				return "You don't have that.";
			}

			case "buy": {
				if (args == null) {
					return "Buy what?";
				}
				int quantity;
				try {
					int i = args.indexOf(" ");
					quantity = Integer.parseInt(args.substring(0, i));
					args = args.substring(i + 1);
				} catch (Exception e) {
					return "How many of what do you want to buy?";
				}
				if (quantity > 100) {
					quantity = 100;
				} else if (quantity < 1) {
					return "You can't buy less than one of something.";
				}
				PlayerMerchant pmrStore = lt.overPlayerMerchant();
				if (pmrStore != null) {
					long numItem = pmrStore.contains(args);
					if (numItem > 0) {
						Item itmStore = game.getItem(args);
						if (itmStore != null) {
							if (quantity > numItem) {
								return "This merchant does not have that many.";
							}
							int intCost = (itmStore.intCost * 3) / 4;
							if (lt.name.equalsIgnoreCase(pmrStore.strOwner)) {
								intCost = 0;
							}
							if (intCost * quantity > lt.cash) {
								return "You can't afford that";
							} else {
								lt.cash -= intCost * quantity;
								pmrStore.cash += intCost * quantity;
								itmStore = pmrStore.remove(args);
								lt.itemList.addElement(itmStore);
								for (int i = 1; i < quantity; i++) {
									itmStore = pmrStore.remove(args);
									lt.itemList.addElement(itmStore);
								}
								lt.updateItems();
								lt.updateStats();
							}
						}
					}
				}

				Merchant mrcStore = lt.overMerchant();
				if (mrcStore == null) {
					return "Buy from whom?";
				}
				if (lt.getFollowing() != null && lt.getFollowing().isPet()) {
					if (args.startsWith(lt.getFollowing().name + ":")) {
						args = args.substring(lt.getFollowing().name.length() + 1);
						if (mrcStore.contains(args)) {
							if (args.startsWith("train:")) {
								args = args.substring(6);
								mrcStore.train(args, quantity, lt.getFollowing());
								lt.updateStats();
							}
						}
						return null;
					}
				}
				if (mrcStore.contains(args)) {
					if (args.startsWith("train:")) {
						args = args.substring(6);
						mrcStore.train(args, quantity, lt);
						lt.updateStats();
					} else {
						if (args.startsWith("pet")) {
							mrcStore.pet(lt);
							lt.updateStats();
						} else {
							Item itmStore = game.getItem(args);
							if (itmStore != null) {
								if (itmStore.intCost * quantity > lt.cash) {
									return "You can't afford that";
								} else {
									lt.cash -= itmStore.intCost * quantity;
									lt.itemList.addElement(itmStore);
									for (int i = 1; i < quantity; i++) {
										lt.itemList.addElement(game.getItem(args));
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

			case "sell": {
				if (args == null) {
					return "Sell what?";
				}

				PlayerMerchant pmrStore = lt.overPlayerMerchant();
				if (pmrStore != null) {
					if (lt.name.equalsIgnoreCase(pmrStore.strOwner)) {
						int quantity = 1;
						try {
							int i = args.indexOf(" ");
							quantity = Integer.parseInt(args.substring(0, i));
							args = args.substring(i + 1);
						} catch (Exception e) {
							return "How many of what do you want to sell?";
						}
						Item itmStore = lt.getItem(args);
						for (int i = 0; i < quantity; i++) {
							itmStore = lt.getItemAndRemove(args);
							if (itmStore != null) {
								itmStore.onDropItem(game, lt);
								pmrStore.add(itmStore);
								lt.isSaveNeeded = true;
							} else {
								i = quantity;
							}
						}
						lt.updateItems();
						lt.updateStats();
						return null;
					}
					return "You cannot sell items to this merchant.";
				}

				Merchant mrcStore = lt.overMerchant();
				if (mrcStore == null) {
					return "Sell that to whom?";
				}
				int quantity = 1;
				try {
					int i = args.indexOf(" ");
					quantity = Integer.parseInt(args.substring(0, i));
					args = args.substring(i + 1);
				} catch (Exception e) {
					return "How many of what do you want to sell?";
				}
				if (quantity > 100) {
					quantity = 100;
				}
				Item itmStore = lt.getItem(args);
				for (int i = 0; i < quantity; i++) {
					itmStore = lt.getItemAndRemove(args);
					if (itmStore != null) {
						itmStore.onDropItem(game, lt);
						lt.cash += (itmStore.intCost / 2);
						lt.isSaveNeeded = true;
					} else {
						i = quantity;
					}
				}
				lt.updateItems();
				lt.updateStats();
				return null;
			}

			case "cast": {
				if (args == null) {
					return "Cast what?";
				}
				if (lt.battle == null) {
					lt.castSpell(args);
				} else {
					lt.battle.addCommand(lt, "cast " + args);;
				}
				return null;
			}

			case "follow": {
				if (args == null) {
					return "Follow who?";
				}
				if (lt.isSleeping) {
					return "You can't do that while you're sleeping";
				}
				DuskObject objStore = lt.getLocalObject(args);
				if (objStore == null) {
					return "You don't see that here.";
				}
				if (objStore.isLivingThing()) {
					LivingThing thnStore = (LivingThing) objStore;
					if (lt.getMaster() != null && thnStore != lt.getMaster()) {
						if (lt.isPet()) {
							return "You can only follow your owner.";
						}
						return "You're already following someone. Leave them first.";
					}
					if (Math.abs(lt.x - thnStore.x) + Math.abs(lt.y - thnStore.y) > 1) {
						return "They're too far away.";
					}
					if (thnStore == lt) {
						return "You can't follow yourself.";
					}
					if (!thnStore.isPlayer() && !lt.isMob()) {
						return "You can only follow players.";
					}
					if (thnStore.noFollow || (thnStore.isPet() && thnStore.getMaster().noFollow)) {
						return "They won't let you follow them.";
					}
					if (lt.isPet()) {
						thnStore.setFollowing(lt);
						lt.setMaster(thnStore);
						thnStore.updateStats();
						lt.updateStats();
						return "You are now following " + lt.getMaster().name + ".";
					}
					LivingThing thnStore2 = thnStore;
					while (thnStore2 != null) {
						if (lt == thnStore2) {
							return "You're already in that group.";
						}
						thnStore2 = thnStore2.getMaster();
					}
					thnStore.chatMessage("You are now being followed by " + lt.name + ".");
					while (thnStore.getFollowing() != null) {
						thnStore = thnStore.getFollowing();
						if (thnStore.isPlayer()) {
							thnStore.chatMessage("You are now being followed by " + lt.name + ".");
						}
					}
					thnStore.setFollowing(lt);
					lt.setMaster(thnStore);
					thnStore.updateStats();
					lt.updateStats();
					return "You are now following " + lt.getMaster().name + ".";
				}
				return "That's not something you can follow.";
			}

			case "unfollow": {
				if (args == null) {
					return "Unfollow who?";
				}

				// FIXME: implemente unfollow
				if (true)
					return "unfollow is not yet implemented";


				LivingThing thnStore = lt.getFollowing();
				if (thnStore != null && thnStore.isPet()) {
					if (thnStore.name.equalsIgnoreCase(args)) {
						/*
						 lt.halt();
						 lt.chatMessage("Do you really want to permanently erase your pet?");
						 try {
						 if (lt.instream.readLine().equalsIgnoreCase("yes")) {
						 lt.getFollowing().close();
						 File deleteme = new File("pets/" + lt.name.toLowerCase());
						 deleteme.delete();
						 deleteme = new File("pets/" + lt.name.toLowerCase() + ".backup");
						 deleteme.delete();
						 lt.getFollowing().close();
						 lt.setFollowing(lt.getFollowing().getFollowing());
						 lt.proceed();
						 return "Your pet has been erased.";
						 }
						 } catch (Exception e) {
						 game.log.printError("parseCommand():While unfollowing pet for " + lt.name, e);
						 }
						 lt.proceed();
						 * */
						return null;
					}
					thnStore = thnStore.getFollowing();
				}
				while (thnStore != null) {
					if (thnStore.name.equalsIgnoreCase(args)) {
						if (thnStore.isPet()) {
							thnStore = thnStore.getMaster();
						}
						thnStore.removeFromGroup();
						return null;
					}
					thnStore = thnStore.getFollowing();
				}
				return "They're not following you.";
			}

			case "stay": {
				if (lt.isPet()) {
					lt.removeFromGroup();
					return Commands.parseCommand(lt, game, "emote sits down to await " + lt.getMaster().name + "'s return.");
				}
				return (Commands.parseCommand(lt, game, "emote stays like a good little puppy."));
			}

			case "leave": {
				if (lt.isPet()) {
					return "You cannot leave your master unless he unfollows you.";
				}
				lt.removeFromGroup();
				return "You are now on your own.";
			}

			case "unclan": {
				if (lt.clan.equals("none")) {
					return "You're not in a clan.";
				}
				if (lt.battle != null) {
					return "Wait until you're done battling.";
				}
				// FIXME: reimplement unclan
				if (true)
					return "unclan not implemented yet";
				try {
					/*
					 lt.halt();
					 lt.chatMessage("Are you sure you want to drop out of your clan? If so type yes.");
					 if (lt.instream.readLine().equalsIgnoreCase("yes")) {
					 lt.clan = "none";
					 if (lt.privs == 1) {
					 lt.privs = 0;
					 }
					 lt.proceed();
					 game.removeDuskObject(lt);
					 game.addDuskObject(lt);
					 return "You have been removed from your clan.";
					 }*/
				} catch (Exception e) {
					game.log.printError("parseCommand():While " + lt.name + " was trying to dropout of their clan", e);
				}
				//lt.proceed();
				return null;
			}

			case "description": {
				if (args == null) {
					lt.description = null;
					return "Your description has been removed.";
				}
				lt.description = args;
				return "Your description has been set to:" + lt.description;
			}

			case "title": {
				if (!lt.isPlayer()) {
					return "Only players may have titles.";
				}
				if (args == null) {
					lt.title = null;
					return "Your title has been removed.";
				}
				lt.title = args;
				if (lt.title.length() > game.titlecap) {
					lt.title = lt.title.substring(0, game.titlecap);
				}
				return "Your title has been set to:" + lt.title;
			}

			case "password": {
				if (!lt.isPlayer()) {
					return "Only players can change their password.";
				}
				return "password changing not re-implemented yet";
				/*
				 try {
				 lt.halt();
				 lt.chatMessage("Enter your current password.");
				 String strOldPass = lt.instream.readLine();
				 if (!strOldPass.equals(lt.password)) {
				 lt.proceed();
				 return "Sorry, that is not your password.";
				 }
				 lt.chatMessage("Enter a new password.");
				 String strNewPass = lt.instream.readLine();
				 lt.chatMessage("Repeat that password.");
				 String strNewPassRepeat = lt.instream.readLine();
				 if (strNewPass == null) {
				 lt.proceed();
				 return "Not a valid password.";
				 }
				 if (!strNewPass.equals(strNewPassRepeat)) {
				 lt.proceed();
				 return "Sorry, those passwords do not match.";
				 }
				 lt.password = strNewPass;
				 lt.proceed();
				 return "Your password has now been changed.";
				 } catch (Exception e) {
				 game.log.printError("parseCommand():While " + lt.name + " was changing their password", e);
				 }
				 lt.proceed();
				 */
			}

			case "wear": {
				if (args == null) {
					return "Wear what?";
				}
				// FIXME: this should go on livingthing, but the interaction flow is messy
				LinkedList<Item> qStore = lt.itemList.get(args);
				if (qStore != null) {
					Item itmStore = (Item) qStore.element();
					int where = -1;

					switch (itmStore.intType) {
						case (1): {
							where = Wearing.WIELD;
							break;
						}
						case (2):
							where = itmStore.intKind + Wearing.ARMS;
							break;
						default:
							return "You can't wear that";
					}

					Item old = lt.wornItems.wear(where, itmStore);
					if (old != null) {
						lt.itemList.addElement(old);
						lt.onUnwear(old);
					}
					lt.onWear(itmStore);

					lt.itemList.removeElement(itmStore.name);
					if (lt.isPet()) {
						lt.getMaster().updateStats();
					}
					if (lt.isPlayer()) {
						lt.updateStats();
					}
					lt.updateEquipment();
					lt.updateItems();
					return null;
				}
				return "You don't have that";
			}
			case "unwear": {
				if (args == null) {
					return "Unwear what?";
				}
				lt.unWear(args);
				return null;
			}
			case "rement": {
				if (args == null) {
					return null;
				}
				long lngID = Long.parseLong(args);
				lt.removeEntity(lngID);
				return null;
			}
			case "audio": {
				if (args == null) {
					if (lt.audioon) {
						return "Your audio is turned on.";
					}
					return "Your audio is turned off.";
				} else if (args.equalsIgnoreCase("off")) {
					lt.audioon = false;
					return "Your audio has been turned off.";
				} else if (args.equalsIgnoreCase("on")) {
					lt.audioon = true;
					return "Your audio has been turned on.";
				}
			}
			case "color": {
				if (args == null) {
					if (lt.coloron) {
						return "Your color is turned on.";
					}
					return "Your color is turned off.";
				} else if (args.equalsIgnoreCase("off")) {
					lt.coloron = false;
					return "Your color has been turned off.";
				} else if (args.equalsIgnoreCase("on")) {
					lt.coloron = true;
					return "Your color has been turned on.";
				}
			}
			case "highlight": {
				if (args == null) {
					if (lt.highlight) {
						return "Highlighting of enemies in battle is turned on.";
					}
					return "Highlighting of enemies in battle is turned off.";
				} else if (args.equalsIgnoreCase("off")) {
					lt.highlight = false;
					lt.clearFlags();
					return "Highlighting of enemies in battle has been turned off.";
				} else if (args.equalsIgnoreCase("on")) {
					lt.highlight = true;
					return "Highlighting of enemies in battle has been turned on.";
				}
			}
			case "popup": {
				// FIXME: TBD
				if (args == null) {
					if (lt.popup) {
						return "You have popup windows turned on.";
					}
					return "You have popup windows turned off.";
				} else if (args.equalsIgnoreCase("off")) {
					lt.popup = false;
					return "You have turned popup windows off.";
				} else if (args.equalsIgnoreCase("on")) {
					lt.popup = true;
					return "You have turned popup windows on.";
				}
			}
			case "nofollow": {
				if (args == null) {
					if (lt.noFollow) {
						return "You are not allowed to be followed.";
					}
					return "You can be followed.";
				} else if (args.equalsIgnoreCase("off")) {
					lt.noFollow = false;
					return "You can now be followed.";
				} else if (args.equalsIgnoreCase("on")) {
					lt.noFollow = true;
					return "You can no longer be followed.";
				}
			}
			case "ignore": {
				if (args == null) {
					return "Ignore who?";
				}
				LivingThing thnStore = game.getPlayer(args);
				if (thnStore == null) {
					return "They're not in this world.";
				}
				String strIgnoreName = thnStore.name.toLowerCase();
				if (lt.name.equalsIgnoreCase(strIgnoreName)) {
					return "Trying to ignore yourself is not a good sign.";
				}
				if (thnStore.privs > 2) {
					return "You cannot ignore a god.";
				}
				if (!lt.ignoreList.contains(strIgnoreName)) {
					lt.ignoreList.add(strIgnoreName);
				} else {
					return "You are already ignoring them.";
				}
				return "You are now ignoring " + strIgnoreName;
			}
			case "unignore": {
				if (args == null) {
					return "UnIgnore who?";
				}
				String strIgnoreName = args.toLowerCase();
				if (strIgnoreName == "all") {
					lt.ignoreList.clear();
					return "You are no longer ignoring anyone.";
				}
				if (lt.ignoreList.contains(strIgnoreName)) {
					lt.ignoreList.remove(strIgnoreName);
				} else {
					return "You are not ignoring them.";
				}
				return "You are no longer ignoring " + strIgnoreName;
			}
			case "appletimages": {
				//lt.updateAppletImages();
				return "obsolete command";
			}
			case "applicationimages": {
				//lt.updateApplicationImages();
				return "obsolete command";
			}
			case "notdead": {
				return null;
			}
			case "quit":
			case "logout": {
				if (lt.battle == null) {
					lt.close();
					return null;
				}
				return "You cannot quit in the middle of a fight.";
			}
		}
		if (!blnFoundScriptedCommand) {
			return "huh?";
		}
		return null;
	}
}
