/*
 * This file is part of DuskZ, a graphical mud engine.
 *
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
package duskz.protocol;

/**
 * Although the message type could be used as a secondary index, instead
 * i've decided to just use the message name alone. The first way
 * would allow 256 messages per type, but 256 is enough total anyway.
 *
 * FIXME: the messages which just update various client state could be
 * merged into a general "update" message which has variable content.
 * FIXME: do this before freezing the protocol
 *
 * @author Michael Zucchi <notzed@gmail.com>
 */
public interface DuskProtocol {
	// Notify messages, hmm, maybe some of these should contain a string

	/**
	 * MessageList
	 * I've tried to make this as simple as possible whilst retaining flexibility.
	 * Everything goes through a single message type, with optional fields.
	 *
	 * From Server:
	 * FIELD_AUTH_RESULT 0=ok,1=failed,2=exists
	 * FIELD_AUTH_NEWPLAYER (list of missing things, like race)
	 * To Server:
	 * FIELD_AUTH_USER
	 * FIELD_AUTH_PASS (hashed?)
	 * FIELD_AITH_CLIENT (applet/jar, etc)
	 * FIELD_AUTH_NEWPLAYER (list of missing things, like race)
	 */
	public final static int MSG_AUTH = 0;
	/**
	 * Notify only
	 * One ping and one ping only.
	 */
	public final static int MSG_PING = 1;
	/**
	 * Notify only
	 * Server dumped you
	 */
	public final static int MSG_QUIT = 2;
	/**
	 * TODO: I need some sort of question-asking mechanism.
	 *
	 * Probably work similar to the NEWPLAYER thing above.
	 * EntityListMessage with id set to unique value
	 * Each entry in the list is a ListMessage whose
	 * id is server defined.
	 * Each list message contains:
	 * StringMessage FIELD_QUERY_PROMPT
	 * optional
	 * StringListMessage FIELD_QUERY_OPTIONS
	 */
	public final static int MSG_QUERY = 3;
	/**
	 * Notify only
	 * Clear 'battle' flags.
	 */
	public final static int MSG_CLEAR_FLAGS = 4;
	/**
	 * ListMessage
	 * int FIELD_MAP_WIDTH
	 * int FIELD_MAP_HEIGHT
	 * String FIELD_MAP_ASSETLOCATION rcname
	 */
	public final static int MSG_INIT_MAP = 5;
	/**
	 * MapMessage
	 * Update the map tiles
	 */
	public final static int MSG_UPDATE_MAP = 6;
	/**
	 * StringAttribute
	 * General chat
	 */
	public final static int MSG_CHAT = 7;
	/**
	 * EntityMessage
	 * Add a new entity
	 */
	public final static int MSG_ADD_ENTITY = 8;
	/**
	 * ListMessage
	 * see entity fields
	 */
	public final static int MSG_UPDATE_ENTITY = 9;
	/**
	 * EntityMessage
	 * id is of message to remove
	 */
	public final static int MSG_REMOVE_ENTITY = 10;
	/**
	 * ByteEntityMessage
	 * Value is cardinal direction as byte (nsew)
	 */
	public final static int MSG_MOVE = 11;
	/**
	 * StringListAttribute
	 * list of actions
	 */
	public final static int MSG_UPDATE_ACTIONS = 12;
	/**
	 * TransactionMessage
	 * List of items the user has.
	 */
	public final static int MSG_INVENTORY = 13;
	/**
	 * ListMessage
	 * A list of AttributeString values.
	 * Name of fields is the index of the position worn
	 * (See Wearing)
	 */
	public final static int MSG_EQUIPMENT = 14;
	/**
	 * ListMessage
	 * Any of the fields in the INFO section below
	 */
	public final static int MSG_INFO_PLAYER = 15;
	/**
	 * ListMessage
	 * Any of the fields in the INFO section below
	 * except for FOLLOWING/FOLLOWED and the STATS (?)
	 */
	public final static int MSG_INFO_PET = 16;
	/**
	 * TransactionMessage
	 * List of items for sale
	 */
	public final static int MSG_UPDATE_MERCHANT = 17;
	/**
	 * Notify only
	 * The player left a shop
	 */
	public final static int MSG_EXIT_MERCHANT = 18;
	/**
	 * Start of battle.
	 * long FIELD_BATTLE_SOURCE (TODO)
	 * string FIELD_BATTLE_OPPONENT
	 */
	public final static int MSG_BATTLE_START = 19;
	/**
	 * ListMessage
	 * long FIELD_BATTLE_TARGET who got it
	 * int FIELD_BATTLE_HP target hp
	 * int FIELD_BATTLE_MAXHP target max hp
	 * int FIELD_BATTLE_DAMAGE +- damage
	 * long FIELD_BATTLE_SOURCE who did it
	 * string FIELD_BATTLE_WHAT how it was done
	 */
	public final static int MSG_BATTLE_UPDATE = 20;
	/**
	 * StringAttribute
	 * Battle related messages
	 */
	public final static int MSG_BATTLE_CHAT = 21;
	/**
	 * ListMessage
	 * string FIELD_TEXT_NAME
	 * byte FIELD_TEXT_EDITABLE
	 * string FIELD_TEXT_TEXT
	 */
	public final static int MSG_VIEW_TEXT = 22;
	/**
	 * *********************************************
	 * Client to server messages.
	 *
	 * MSG_AUTH and MSG_QUERY are also included
	 */
	/**
	 * StringMessage
	 * A simple string message containing the command to run
	 */
	public final static int MSG_COMMAND = 23;
	public final static int MSG_BATTLE_EFFECT = 24;
	public final static int MSG_PLAY_SOUND = 26;
	public final static int MSG_TILE_ANIMS = 27;
	public final static int MSG_COLORED_CHAT = 28;
	public final static int MSG_LOAD_COMPLETE = 29;
	public final static int MSG_UPDATE_TICKS = 30;
	public final static int MSG_UPDATE_RANGE = 31;
	//
	//
	//
	//TODO:
	//LoadMusic,
	//PlayMusic,
	//PlaySound,
	//ColourChat,
	/**
	 * MSG_AUTH fields
	 */
	public final static int AUTH_LOGIN_OK = 0;
	public final static int AUTH_LOGIN_FAILED = 1;
	public final static int AUTH_LOGIN_EXISTS = 2;
	public final static int AUTH_LOGIN_INCOMPLETE = 3;
	/**
	 * EntityIntegerMessage
	 * Result of authentication,as above
	 * if ok, id = id of player
	 */
	public final static int FIELD_AUTH_RESULT = 0;
	/**
	 * StringMessage
	 * reason/prompt for failure
	 */
	public final static int FIELD_AUTH_REASON = 1;
	/**
	 * ListMessage of ListMessage
	 * server: create failed because of missing information, list lists it.
	 * The name of each message is for the server, and each list describes
	 * a query using the FIELD_QUERY constants
	 * client: new player extra information. i.e. race, email, whatever.
	 * The name of each response should match those in the server list.
	 *
	 */
	public final static int FIELD_AUTH_NEWPLAYER = 2;
	/**
	 * StringMessage
	 * client: player name
	 */
	public final static int FIELD_AUTH_PLAYER = 3;
	/**
	 * StringMessage
	 * client: player password
	 */
	public final static int FIELD_AUTH_PASS = 4;
	/**
	 * ListMessage
	 * client: Details about client
	 */
	public final static int FIELD_AUTH_CLIENT = 5;
	/**
	 * Query fields
	 * These are fields within each ListMessage in
	 * NEWPLAYER or QUERY message
	 * TODO: could add more types
	 */
	/**
	 * StringMessage
	 * server: prompt for query
	 */
	public final static int FIELD_QUERY_PROMPT = 0;
	/**
	 * StringListMessage
	 * server: a list of options to choose from. The client
	 * response will be a String with a name which matches the
	 * ListMessage containing this item.
	 */
	public final static int FIELD_QUERY_OPTIONS = 1;
	/**
	 * StringMessage
	 * Present a password box
	 * server: string is prompt
	 * client: string is response
	 */
	public final static int FIELD_QUERY_HIDDEN = 2;
	// TOOD: could add more options here.
	/**
	 * Entity update fields
	 */
	/**
	 * IntMessage: flags
	 * bitfield 01: 1 = enemy, 2 = ally
	 * big 2: sleeping
	 */
	public final static int FIELD_ENTITY_FLAGS = 0;
	/**
	 * StringListMessage conditions
	 */
	public final static int FIELD_ENTITY_CONDITIONS = 1;
	public final static int ENTITY_FLAG_ALLY = 1;
	public final static int ENTITY_FLAG_ENEMY = 2;
	// not sure if this should show up in the condition list
	public final static int ENTITY_FLAG_SLEEPING = 4;
	/**
	 * Player update fields
	 * MSG_INFO_PLAYER
	 * MSG_INFO_PET
	 *
	 * FIXME: these fields should match the STAT_* constants
	 */
	/**
	 * IntegerMessage
	 * Player hp
	 */
	public final static int FIELD_INFO_HP = 0;
	/**
	 * IntegerMessage
	 * max hp
	 */
	public final static int FIELD_INFO_MAXHP = 1;
	/**
	 * IntegerMessage
	 * player mp
	 */
	public final static int FIELD_INFO_MP = 2;
	/**
	 * IntegerMessage
	 * max mp
	 */
	public final static int FIELD_INFO_MAXMP = 3;
	/**
	 * LongMessage
	 * Money in hand
	 */
	public final static int FIELD_INFO_CASH = 4;
	/**
	 * IntegerMessage
	 * Experience
	 */
	public final static int FIELD_INFO_EXP = 5;
	/**
	 * IntegerMessage
	 * Strength
	 */
	public final static int FIELD_INFO_STR = 6;
	/**
	 * IntegerMessage
	 * Strength bonus - if not zero
	 */
	public final static int FIELD_INFO_STRBON = 7;
	/**
	 * IntegerMessage
	 * Intelligence
	 */
	public final static int FIELD_INFO_INT = 8;
	/**
	 * IntegerMessage
	 * Intelligence bonus if not zero
	 */
	public final static int FIELD_INFO_INTBON = 9;
	/**
	 * IntegerMessage
	 * Dexterity
	 */
	public final static int FIELD_INFO_DEX = 10;
	/**
	 * IntegerMessage
	 * Dexterity bonus if not zero
	 */
	public final static int FIELD_INFO_DEXBON = 11;
	/**
	 * IntegerMessage
	 * You get the picture
	 */
	public final static int FIELD_INFO_CON = 12;
	/**
	 * IntegerMessage
	 *
	 */
	public final static int FIELD_INFO_CONBON = 13;
	/**
	 * IntegerMessage
	 *
	 */
	public final static int FIELD_INFO_WIS = 14;
	/**
	 * IntegerMessage
	 *
	 */
	public final static int FIELD_INFO_WISBON = 15;
	/**
	 * IntegerMessage
	 *
	 */
	public final static int FIELD_INFO_DAM = 16;
	/**
	 * IntegerMessage
	 *
	 */
	public final static int FIELD_INFO_DAMBON = 17;
	/**
	 * IntegerMessage
	 * Armour class
	 */
	public final static int FIELD_INFO_ARC = 18;
	/**
	 * IntegerMessage
	 *
	 */
	public final static int FIELD_INFO_ARCBON = 19;
	/**
	 * StringArrayMessage
	 * A list of conditions active on the player/pet
	 */
	public final static int FIELD_INFO_CONDITIONS = 20;
	/**
	 * StringArrayMessage
	 * List of skills the player has
	 */
	public final static int FIELD_INFO_SKILLS = 21;
	/**
	 * StringArrayMessage
	 * List of spells the player has
	 * FIXME: do this in a way that i know the castable spells in the frontend,
	 * even if it's just string parsing
	 */
	public final static int FIELD_INFO_SPELLS = 22;
	/**
	 * StringMessage
	 * Who player is following
	 */
	public final static int FIELD_INFO_FOLLOWING = 23;
	/**
	 * StringMessage
	 * Who player is being followed by (pet)
	 */
	public final static int FIELD_INFO_FOLLOWED = 24;
	/**
	 * IntegerMessage
	 * Player attack range
	 */
	public final static int FIELD_INFO_RANGE = 25;
	/**
	 * MSG_INIT_MAP fields
	 */
	/**
	 * IntegerMessage
	 * width of displayed map
	 */
	public final static int FIELD_MAP_WIDTH = 0;
	/**
	 * IntegerMessage
	 * height of displayed map
	 */
	public final static int FIELD_MAP_HEIGHT = 1;
	/**
	 * StringMessage
	 * location of asset jar for this map
	 */
	public final static int FIELD_MAP_ASSETLOCATION = 2;
	/**
	 * MSG_VIEW_TEXT
	 */
	/**
	 * StringMessage
	 * Name of file/title of content
	 */
	public final static int FIELD_TEXT_NAME = 0;
	/**
	 * ByteMessage
	 * Present only if true (==1), message is editable
	 */
	public final static int FIELD_TEXT_EDITABLE = 1;
	/**
	 * StringMessage
	 * Content of file
	 */
	public final static int FIELD_TEXT_TEXT = 2;
	/**
	 * MSG_BATTLE_UPDATE
	 */
	/**
	 * LongMessage
	 * id of target of message/hit
	 */
	public final static int FIELD_BATTLE_TARGET = 0;
	/**
	 * IntegerMessage
	 * current hp
	 */
	public final static int FIELD_BATTLE_HP = 1;
	/**
	 * IntegerMessage
	 * maximum hp
	 */
	public final static int FIELD_BATTLE_MAXHP = 2;
	/**
	 * IntegerMessage
	 * +/- healing/damage from some action
	 */
	public final static int FIELD_BATTLE_DAMAGE = 3;
	/**
	 * LongMessage
	 * Who caused the damage/healing
	 */
	public final static int FIELD_BATTLE_SOURCE = 4;
	/**
	 * What it was they did
	 */
	public final static int FIELD_BATTLE_WHAT = 5;
	/**
	 * MSG_BATTLE_START
	 * FIXME: Will also include FIELD_BATTLE_SOURCE for
	 * the opponent id
	 */
	/**
	 * StringMessage
	 * Name of opponent
	 */
	public final static int FIELD_BATTLE_OPPONENT = 6;

	public final static int MSG_POPUP = 32;
	public final static int MSG_POPUP_VIEW = 33;
	public final static int FIELD_POPUP_TITLE = 0;
	public final static int FIELD_POPUP_CONTENT = 1;

	public final static int MSG_EDIT_FILE = 34;
	public final static int FIELD_EDIT_NAME = 0;
	public final static int FIELD_EDIT_CONTENT = 1;

	public final static int FIELD_ENT_NAME = 0;
	public final static int FIELD_ENT_TYPE = 1;
	public final static int FIELD_ENT_ID = 2;
	public final static int FIELD_ENT_X = 3;
	public final static int FIELD_ENT_Y = 4;
	public final static int FIELD_ENT_IMG = 5;
	public final static int FIELD_ENT_STEP = 6;

	public final static int MSG_MERCHANT_BUY = 35;
	public final static int MSG_BATTLE_FLAG = 36;
	public final static int FIELD_BATTLE_FLAG = 1;

	public final static int MSG_INIT_MUSIC = 37;
	public final static int FIELD_MUSIC_COUNT = 0;
	public final static int FIELD_MUSIC_LIST = 1;

	public final static int MSG_PLAY_MUSIC = 38;
	public final static int MSG_STOP_MUSIC = 39;
	public final static int MSG_HALT = 40;

	public final static int FIELD_FX_DURATION = 1;
}


