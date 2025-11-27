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
package duskz.server.entityz;

import duskz.protocol.DuskProtocol;
import java.util.ArrayList;

/**
 * Command parser.
 *
 * This only implements unprivileged commands, each user only
 * gets a command parser suitable for their privilege level.
 *
 * Each command parser is attached to a single Active.
 *
 * FIXME: merge with PlayerCommands
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public class Commands implements DuskProtocol {

	private Active lt;

	public Commands(Active lt) {
		this.lt = lt;
	}

	/**
	 * Simple command line parser, handles quotes (' or "),
	 * literal escapes within or without quotes, and stripping
	 * whitespace.
	 *
	 * @param cmdLine
	 * @return list of unquoted and separated arguments
	 */
	protected String[] parseArgs(String cmdLine) {
		StringBuilder arg = new StringBuilder();
		ArrayList<String> args = new ArrayList<>();

		char q = 0;
		int e = 0;
		for (int i = 0; i < cmdLine.length(); i++) {
			char c = cmdLine.charAt(i);

			if (e > 0) {
				// escape
				arg.append(c);
				e--;
			} else if (q == 0) {
				// unquoted text
				if (c == '"' || c == '\'') {
					q = c;
				} else if (c == ' ' || c == '\t') {
					if (arg.length() != 0) {
						args.add(arg.toString());
						arg.setLength(0);
					}
				} else if (c == '\\') {
					e = 1;
				} else {
					arg.append(c);
				}
			} else {
				// quoted text
				if (c == q) {
					q = 0;
					if (arg.length() != 0) {
						args.add(arg.toString());
						arg.setLength(0);
					}
				} else if (c == '\\') {
					e = 1;
				} else {
					arg.append(c);
				}
			}
		}
		if (arg.length() != 0) {
			args.add(arg.toString());
		}

		return args.toArray(new String[args.size()]);
	}
	static final String alias_key = ";:'./";
	static final String alias_values[] = {"gossip", "clan", "say", "emote", "tell"};

	public void execute(String cmdline) throws Exception {
		String argv[] = parseArgs(cmdline);

		if (argv.length < 1) {
			lt.chatMessage("Huh?");
			return;
		}

		// TODO: scripted commands here
		String cmd; // command name
		String text; // all arguments unprocessed

		int alias = alias_key.indexOf(argv[0].charAt(0));
		if (alias >= 0) {
			cmd = alias_values[alias];
			// TODO: strip thing from cmdline properly
			text = cmdline.substring(1).trim();
		} else {
			cmd = argv[0].toLowerCase();
			text = cmdline.substring(cmd.length()).trim();
		}

		String msg = null;

		switch (cmd) {
			case "north":
			case "n":
				lt.clearMoveQueue();
				lt.enqueueMove("n");
				return;
			case "south":
			case "s":
				lt.clearMoveQueue();
				lt.enqueueMove("s");
				return;
			case "west":
			case "w":
				lt.clearMoveQueue();
				lt.enqueueMove("w");
				return;
			case "east":
			case "e":
				lt.clearMoveQueue();
				lt.enqueueMove("e");
				return;
			case "goto": {
				int destX;
				int destY;
				try {
					destX = Integer.parseInt(argv[1]);
					destY = Integer.parseInt(argv[2]);
					lt.travelTo(destX, destY, true);
				} catch (NumberFormatException e) {
					msg = "goto requires two numbers.";
				}
				break;
			}
			case "flee":
				lt.fleeCommand();
				break;
			case "sleep":
				lt.sleepCommand();
				break;
			case "wake":
				lt.awakeCommand();
				break;
			case "gossip":
				if (text.length() == 0) {
					msg = "Gossip what?";
				} else if (text.length() > lt.game.messageLimit)
					msg = "That message was goo long.";
				else {
					lt.gossipCommand(text);
				}
				break;
			/// clan
			case "say":
				if (text.length() == 0) {
					msg = "Say what?";
				} else if (text.length() > lt.game.messageLimit) {
					msg = "That message was goo long.";
				} else {
					lt.sayCommand(text);
				}
				break;
			case "kill":
			case "attack":
			case "a":
				if (argv.length != 2) {
					msg = "Attack what?";
				} else {
					lt.attackCommand(argv[1]);
				}
				break;
			case "look":
				if (argv.length != 2) {
					msg = "Look at what?";
				} else {
					lt.lookCommand(argv[1]);
				}
				break;
			case "wear": {
				if (argv.length < 2) {
					msg = "Wear what?";
				} else {
					for (int i = 1; i < argv.length; i++) {
						lt.wearCommand(argv[i]);
					}
				}
				break;
			}
			case "unwear": {
				if (argv.length < 2) {
					msg = "Unwear what?";
				} else {
					for (int i = 1; i < argv.length; i++) {
						lt.unwearCommand(argv[i]);
					}
				}
				break;
			}
			case "drop": {
				if (argv.length < 2) {
					msg = "Drop what?";
				} else {
					for (int i = 1; i < argv.length; i++) {
						lt.dropCommand(argv[i]);
					}
				}
				break;
			}
			case "get": {
				if (argv.length < 2) {
					msg = "Get what?";
				} else {
					for (int i = 1; i < argv.length; i++) {
						lt.getCommand(argv[i]);
					}
				}
				break;
			}
			case "use": {
				// TODO: battle check inside active?
				if (argv.length < 2) {
					msg = "Use what?";
				} else if (lt.isFighting()) {
					lt.addBattleCommand(argv);
				} else {
					for (int i = 1; i < argv.length; i++) {
						lt.useCommand(argv[i]);
					}
				}
				break;
			}
			case "follow": {
				if (argv.length < 2) {
					msg = "Follow whom?";
				} else {
					lt.followCommand(argv[1]);
				}
				break;
			}
			case "leave": {
				lt.leaveCommand();
				break;
			}
			case "buy": {
				if (argv.length < 2) {
					msg = "Buy what?";
				} else if (argv.length < 3) {
					msg = "How many of what do you wish to buy?";
				} else {
					try {
						int quantity = Integer.valueOf(argv[1]);

						if (quantity <= 0) {
							msg = "Quanitity must be at least one.";
						} else
							lt.buyCommand(argv[2], quantity);
					} catch (NumberFormatException ex) {
						msg = "I don't know how many that is.";
					}
				}
				break;
			}
			case "sell": {
				if (argv.length < 2) {
					msg = "Sell what?";
				} else if (argv.length < 3) {
					msg = "How many of what do you wish to sell?";
				} else {
					try {
						int quantity = Integer.valueOf(argv[1]);

						if (quantity <= 0) {
							msg = "Quanitity must be at least one.";
						} else
							lt.sellCommand(argv[2], quantity);
					} catch (NumberFormatException ex) {
						msg = "I don't know how many that is.";
					}
				}
				break;
			}
		}
		
		if (msg != null)
			lt.chatMessage(msg);
	}
}
