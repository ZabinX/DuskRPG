package in.groan.dusk;

/**
All Dusk and DuskClient code copyright Tom Weingarten (captaint@comcast.net) 2000

This code is licensed under the Gnu Public License.

Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk.

This class defines all constants used throughout the code system.

June 30th 2011
Dusk Server 3.0.1
@author Louis Agoglia <louis.agoglia@gmail.com>, Lee Templeton (Lone Wolf)

Version 3.0.1 Adds MySQL DB Storage

GRAPHICS CREDITS
Zeikaro
Alucus
Slowbro/Rossay

*/
public interface Constants {
	//Version
	public String VERSION_STR  = "3.0.1";
		//
	public int VERSION_MAJ 	= 3;
	public int VERSION_MIN 	= 0;
	public int VERSION_LCL 	= 1;
	
	//DuskServer Variables
	public static int SRV_PORT				= 7400;
	public static int TRACKER_PORT			= 7401;
	public static int MAX_CONN				= 0; //0 = unlimited
	public static int IMG_MERCHANT 			= 0; //0 default
	public static int IMG_SIGN				= 1; //1 default
	public static int CHAR_PER_ACCOUNT      = 9; //9 default
			
	//Limits
	public static int TITLE_CAP				= 0; //0 unlimited
	public static int MUTE_CAP				= 600;  // defalut 600=10 minutes
	public static int NAME_CAP				= 20;  //default 20
	public static int MSG_CAP				= 120;  //default 120
	public static int RACE_CHANGE_LVL_CAP	= 10; //default 100cp = LVL 10
	public static int VIEW_RANGE 			= 5; //5 tile default
	public static int VIEW_RANGE_OLD 		= 0;
	public static int MAP_SIZE				= 11;

	//Pet Variables
	public static int PET_COST				= 100; //100GP
	public static int TRAIN_COST				= 100; //100GP

	//Combat Variables
	public static int STAT_GAIN_COST 		= 100; //100GP
	public static int EXP_GAIN_MOD 			= 10; //10 DEFAULT
	public static int SOUND_BATTLE 			= -1;
	public static int MOB_RESPAWN_RATE 		= 1;
	public static double GP_LOSE_MOD		= 0.0625D; //default 1/16
	public static double EXP_LOSE_MOD 		= 0.0625D;
	public static double GP_FLEE_MOD		= 0.015625D;	//default 1/64
	public static double EXP_FLEE_MOD		= 0.015625D;

	public static long MOB_TICK 			= 1000;	//default 1000 milliseconds(1 second) per tick
	public static long PLAYER_TICK			= 250;	//default 250 milliseconds(1/4 second) per tick

	//MySQL Database Connection Info
	//localhost for nix servers, 127.0.0.1 for windows
	public String MYSQL_HOST = "localhost";
	//Database Name
	public String MYSQL_DB    = "dusk";
	//Username
	public String MYSQL_USER  = "duskadmin";
	//User PW
	public String MYSQL_PW    = "wesowin001";
	// Strings
	public String MYSQL_CONFIG = "config";
	
	public boolean BLN_MUSIC 		= false;
	public boolean BLN_AI			= false;
	
	// DUSKENGINE Section
	public int MIN				= 0;
	public int MAX				= 1;

	// DUSKOBJECT Section
	public int NUMBER			= 0;
	public int STRING			= 1;
	public int ENTITY			= 2;
	public int ITEM				= 3;

	// ATTRIBUTE Section
	public int MAIN				= 0;
	public int SECONDARY		= 1;
	public int BONUS			= 2;
	public int ALL				= 100;
	
	// ITEM Section
	public int ORDINARY_ITEM	= 0;
	public int WEAPON			= 1;
	public int ARMOR			= 2;
	public int FOOD				= 3;
	public int DRINK			= 4;
	public int RANGED			= 5;
	public int CONTAINER		= 6;

	/** ** **
	 * Changes to Weaponry/Armor in 3.0.1
	 * ALL Weapons are Item type 1
	 * 
	 * MELEE WPNS					RANGED WPNS
	 * 	FISTS		KATANA1H		 BLOWGUNS					 
	 * 	DAGGERS		KATANA2H		 BOWS	
	 * 	SWORDS1H	SPEARS		 	 CROSSBOWS
	 * 	SWORDS2H	WHIPS			 FUSILS
	 * 	AXES1H		CUDGELS		  	 RIFLES
	 * 	AXES2H		INSTRUMENTS		 CANNON
	 * 	HAMMERS		SPELLBOOKS		 THROWN
	 * 
	 * 
	 */
	
	//MELEE WEAPON TYPES
	public int WPN_M_FISTS		 	= 10;
	public int WPN_M_DAGGERS	 	= 11;
	public int WPN_M_SWORD1H	 	= 12;
	public int WPN_M_SWORD2H	 	= 13;
	public int WPN_M_AXES1		 	= 14;
	public int WPN_M_AXES2H	 		= 15;
	public int WPN_M_SPEARS	 		= 16;
	public int WPN_M_HAMMERS	 	= 17;
	public int WPN_M_KATANA1H	 	= 18;
	public int WPN_M_KATANA2H	 	= 19;
	public int WPN_M_CUDGELS	 	= 20;
	public int WPN_M_WHIPS			= 21;
	public int WPN_M_SPELLBOOKS		= 22;
	public int WPN_M_INSTRUMENTS	= 23;
	//24-49 OPEN
	
	//RANGED WEAPON TYPES
	public int WPN_R_BLOWGUNS	= 50;
	public int WPN_R_BOWS		= 51;
	public int WPN_R_CROSSBOWS	= 52;
	public int WPN_R_FUSILS	 	= 53;
	public int WPN_R_RIFLES	 	= 54;
	public int WPN_R_CANNON	 	= 55;
	public int WPN_R_THROWN	 	= 56;
	//57-100 OPEN
	
	/**
	 * 		MAG_HLY <-> MAG_DRK   MAG_TIM <-> MAG_SPCE
	 * 
	 * 	 -> MAG_PSN -> MAG_AIR -> MAG_GEO -> MAG_ELE -
	 *   |											   |
	 *    - MAG_ICE <- MAG_PSY <- MAG_FIR <- MAG_WTR <-
	 * 
	 */
	//ELEMENTAL MAGIC TYPES
	public int MAG_HOLY	 		= 100;
	public int MAG_DARK		 	= 101;
	public int MAG_AIR			= 102;
	public int MAG_GEOMANCY 	= 103;
	public int MAG_ELECTRIC	 	= 104;
	public int MAG_WATER		= 105;
	public int MAG_FIRE	 		= 106;
	public int MAG_PSYCHIC	 	= 107;
	public int MAG_ICE		 	= 108;
	public int MAG_POISON		= 109;
	public int MAG_TIME		 	= 110;
	public int MAG_SPACE	 	= 111;
	
	/**
	 * 	 	ART_NINJUTSU
	 * 		ART_NECRO 
	 * 		ART_WARDANCE
	 * 		ART_DRACONIC
	 * 		ART_SONGS
	 */
	
	/**
	 * Races and Job Types
	 * June 30th 2011
	 * Dusk 3.0.1
	 * 
	 * @author Louis Agoglia <louis.agoglia@gmail.com>
	 * 
	 * Race and Job both modify the base stats of a character.
	 * Race is a static one time modifier and is at first
	 * a lot more impactful than the Job's modifier.
	 * Over time the Job will be more influential.
	 * 
	 * Races and Jobs will both be based on Tactics Ogre,
	 * Fire Emblem, and Digaea for reference.
	 * 
	 * Race mod stats and Job information will be found
	 * in the MySQL db with a Race.java and Job.java 
	 * header file to gather the information in the DB.
	 * 
	 * Race IDs start at 1000
	 * Job IDs start at 2000
	 */
	//RACES
	public int RACE_HUMAN	 			= 1000;
	public int RACE_VARTAN			 	= 1001;
	public int RACE_METHUSULA		 	= 1002;
	public int RACE_URUK				= 1003;
	public int RACE_ELVEN		 		= 1004;
	public int RACE_UMBRA				= 1005;
	//public int RACE_FAERIE			= 1006;
	//public int RACE_GIANT				= 1007;
	//public int RACE_LIZARDMAN			= 1008;
	//public int RACE_GREMLIN			= 1009;
	//public int RACE_LAMIA				= 1010;
	//1011-1999 FREE
	
	//JOBS
	public int JOB_WARRIOR	 			= 2000;
	public int JOB_ARCHER		 		= 2001;
	public int JOB_WIZARD		 		= 2002;
	public int JOB_CLERIC				= 2003;
	public int JOB_FENCER	 			= 2004;
	public int JOB_KNIGHT				= 2005;
	public int JOB_TERROR_KNIGHT		= 2006;
	public int JOB_BERSERKER			= 2007;
	public int JOB_SWORDMASTER			= 2008;
	public int JOB_DRAGOON				= 2009;
	public int JOB_NINJA				= 2010;
	public int JOB_ROGUE				= 2011;
	public int JOB_FUSILIER				= 2012;
	public int JOB_BEAST_TAMER			= 2013;
	public int JOB_WARLOCK				= 2014;
	public int JOB_NECROMANCER	 		= 2015;
	public int JOB_LORD					= 2016;
	public int JOB_RANGER				= 2017;
	public int JOB_PRIEST				= 2018;
	public int JOB_DARK_PRIEST			= 2019;
	public int JOB_BISHOP				= 2020;
	public int JOB_SNIPER				= 2021;
	public int JOB_WHITE_KNIGHT			= 2022;
	public int JOB_SHAMAN		 		= 2023;
	public int JOB_WICCE		 		= 2024;
	public int JOB_BARD					= 2025;
	public int JOB_BUCCANEER	 		= 2026;
	public int JOB_HIGH_KNIGHT  		= 2027;
	public int JOB_LICH					= 2028;
	public int JOB_DIVINE_KNIGHT		= 2029;
	public int JOB_HOPLITE				= 2030;
	public int JOB_JUGGERNAUT			= 2031;
	public int JOB_DRUID				= 2032;
	public int JOB_PALADIN				= 2033;
	
	public int JOB_ID_MAX				= JOB_PALADIN + 1;
	
	public int JOB_THIEF				= 2034;
	public int JOB_HOLY_MAGE		 	= 2035;
	public int JOB_ENCHANTRESS		 	= 2036;
	public int JOB_DANCER				= 2037;
	public int JOB_VALKYRIE	 			= 2038;
	public int JOB_GUNSLINGER			= 2039;
	public int JOB_CANNONEER			= 2040;
	public int JOB_WITCH				= 2041;
	public int JOB_ELEMENTALIST			= 2042;
	public int JOB_HUNTER				= 2043;
	public int JOB_LOREMASTER			= 2044;
	public int JOB_SCHOLAR				= 2045;
	
	public int JOB_GLADIATOR		 	= 2046;
	public int JOB_CHEMIST				= 2047;
	public int JOB_ALCHEMIST	 		= 2048;
	public int JOB_BLACKSMITH			= 2049;
	public int JOB_SAGE					= 2050;
	public int JOB_ARCHMAGE				= 2051;
	public int JOB_CRUSADER				= 2052;
	public int JOB_ASSASSIN				= 2053;
	public int JOB_MONK					= 2054;
	public int JOB_RAPTOR				= 2055;
	
	public int JOB_ACOLYTE			 	= 2056;
	public int JOB_LANCER				= 2057;
	public int JOB_ROYAL_GUARD	 		= 2058;
	public int JOB_SORCERER				= 2059;
	public int JOB_MEHANIC				= 2060;
	public int JOB_MINSTREL				= 2061;
	public int JOB_WANDERER				= 2062;
	public int JOB_STALKER				= 2063;
	public int JOB_TEMPLAR				= 2064;
	public int JOB_RONIN				= 2065;
	
	public int JOB_TIME_MAGE		 	= 2066;
	public int JOB_ASTROMANCER			= 2067;
	public int JOB_RUNE_KNIGHT	 		= 2068;
	public int JOB_BARBARIAN			= 2069;
	public int JOB_GAMBLER				= 2070;
	
	/**
	 * Unit Stats
	 * June 30th 2011
	 * Dusk 3.0.1
	 * 
	 * @author Louis Agoglia <louis.agoglia@gmail.com>
	 * 
	 * The major changes in the entity system will be the change from the CP stat, 
	 * which was basically a culmination of all stats in the form of a power
	 * level value.
	 * 
	 * Dusk will be using the level system similar to many game with Jobs/Classes.
	 * There will be two levels, the Job Level and the Base Level
	 * 
	 * The other stats and formulae will be from Ogre Tactics PSP as I
	 * found their system was useful for non-turn based strategy games.
	 * 
	 * HP/MAXHP
	 * 	standard depletion when attacks / natural recovery
	 * SP/MAXSP
	 * 	standard depletion when using skills / natural recovery
	 * TP/MAXTP
	 * 	starts at 0 and goes up during combat
	 * 
	 * STR					MELEE_ATK
	 * VIT						value for melee attacks
	 * DEX				  	RANGED_ATK
	 * AGI				  		value for ranged attacks
	 * AVD				  	MAGIC_ATK
	 * INT				   		value for magic attacks
	 * MND				  
	 * RES				  	DEFENSE
	 * LCK				   		defense value against physical attacks (ranged, melee)
	 * SPD				  	RESIST
	 * 					  		defense value against magic attacks
	 * 
	 * (BATTLE RECOVERY TIME AND SPEED)
	 * BASE RT + CLASS RT + EQ. WEIGHT = RECOVERY TIME (RT) WHICH AFFECTS SPD 
	 *************************************************************************/
	
	//Level Cap
	public int LVL_CAP 			= 9999;
	public int WEIGHT_MAX		= 10000;
	
	public int M_ATK_MAX		= 9999999;
	public int R_ATK_MAX		= 9999999;
	public int MAG_ATK_MAX		= 9999999;
	public int DEFENSE_MAX		=  999999;
	public int RESIST_MAX		=  999999;
	
	public int STR_MAX			= 99999;
	public int VIT_MAX			= 99999;
	public int DEX_MAX			= 99999;
	public int AGI_MAX			= 99999;
	public int AVD_MAX			= 99999;
	public int INT_MAX			= 99999;
	public int MND_MAX			= 99999;
	public int RES_MAX			= 99999;
	public int LCK_MAX			= 10000;	
	// SPD MAX
	public double SPD_MAX		= 97.89D;
	// CAP Section
	public int STAT_CAP			= 100000;
	public int SKILL_CAP		= 100000;
	public int MAX_CAP			= 200000;
	//HP&SP&TP MAX
	public int MAX_HP_CAP      	= 1000000000;
	public int MAX_SP_CAP      	= 1000000000;
	public int MAX_TP_CAP 		= 200;
	//EXP MAX
	public int MAX_EXP         	= 999999999;
	public int MAX_JOB_EXP     	= 999999999;
	
	//EQUIPMENT/INVENTORY SLOTS
	//HEAD, NECK, HANDS, BODY, ARMS, RRING, WAIST, LRING, LEGS, FEET, WIELD, SHIELD
	public int INVENTORY_SLOT_CAP 	= 50;
	public int INVENTORY_STACK_CAP 	= 100;
	
	public int INV_EQU_HEAD 	= 1;
	
	public int INV_EQU_NECK 	= 10;
	public int INV_EQU_ARMS 	= 11;
	public int INV_EQU_HANDS 	= 12;
	public int INV_EQU_RING_R 	= 13;
	public int INV_EQU_RING_L 	= 14;
	public int INV_EQU_BODY 	= 15;
	public int INV_EQU_WAIST 	= 16;
	public int INV_EQU_LEGS 	= 17;
	public int INV_EQU_FEET 	= 18;
	
	public int INV_EQU_WIELD	= 20;
	public int INV_EQU_WIELD_2  = 21;
	
	public int INV_EQU_SHIELD 	= 30;
	public int INV_EQU_OFFHAND 	= 31;
	
	public int INV_BASIC		= 50;
	public int INV_STACKABLE	= 51;
	
	//MYSQL VAR TYPES
	public static short SQL_BLN = 0;
	public static short SQL_INT = 1;
	public static short SQL_DBL = 2;
	public static short SQL_LNG = 3;
	public static short SQL_STR = 4;
	
	
	//MYSQL TABLE INSERTS
	/** [<i> <b>6 Values</b> </i>] <b>name</b>, <b>pw</b>, <b>email</b>, <b>ip</b><i>(0.0.0.0)</i>, <b>birthday</b><i>(date 0000-00-00)</i>, <b>created</b><i>(datetime 0000-00-00 00:00:00)</i>*/
	public static String SQL_TBL_LOGIN_INS = "INSERT INTO login(userid, user_pass, email, last_ip, birthdate, created) values(";
	/** [<i> <b>20 Values</b> </i>] <b>id</b>, <b>charnum</b>,  <b>name</b>, <b>jobid</b>, <b>str</b>, <b>agi</b>, <b>vit</b>, <b>int</b>, <b>dex</b>, <b>luk</b>, <b>maxhp</b>, <b>hp</b>, <b>maxsp</b>, <b>sp</b>, <b>hairid</b>, <b>haircolor</b>, <b>clothes_color</b>, <b>avd</b>, <b>mnd</b>, <b>res</b> */
	public static String SQL_TBL_CHARS_INS = "INSERT INTO characters(account_id, char_num, name, job, str, agi, vit, int, dex, luk, max_hp, hp, max_sp, sp, hair, hair_color, clothes_color, avd, mnd, res) values(";
	
	//MYSQL TABLE SELECT

	//SERVER CONFIG SELECTS
	/** [<i> <b>SERVER CONFIGS</b> </i>] Retrieves server configs based on the type and name */
	public static String SQL_CONFIG_GET = "SELECT * FROM config WHERE name LIKE ";
	
	//LOGIN SELECTS
	/** [<i> <b>NAME CHECK</b> </i>] Used when creating an account to check for duplicate userid's */
	//public static String SQL_LOGIN_NC = "SELECT account_id FROM login WHERE userid LIKE ";
	public static String SQL_LOGIN_NC = "SELECT COUNT(*) AS amount FROM login WHERE userid LIKE ";
	/** [<i> <b>ACCOUNT PASSWORD CHECK</b> </i>] Retrieves password to check against supplied pw */
	public static String SQL_LOGIN_CHECKPW = "SELECT user_pass FROM login WHERE userid LIKE ";
	/** [<i> <b>USER LOGIN AUTH</b> </i>] Retrieves all login info for an account */
	public static String SQL_LOGIN_AUTH = "SELECT * FROM login WHERE account_id LIKE ";
	
	
	//CHARACTER SELECTS
	/** [<i> <b>NAME CHECK</b> </i>] Used when creating a character to check for duplicate character names */
	//public static String SQL_CHARS_NC = "SELECT id FROM characters WHERE name LIKE ";
	public static String SQL_CHARS_NC = "SELECT COUNT(*) AS amount FROM characters WHERE name LIKE ";
	/** [<i> <b>CHAR COUNT FOR ACCT</b> </i>] Retrieves the amount of characters on an account */
	public static String SQL_CHARS_AMOUNT = "SELECT char_id FROM characters WHERE account_id LIKE ";
	/** [<i> <b>GET ALL CHARS FOR ACCT</b> </i>] Retrieves all info on every character an account is linked to */
	public static String SQL_CHARS_SELECTALL = "SELECT * FROM characters WHERE account_id LIKE ";
	/** [<i> <b>LOAD CHARACTER</b> </i>] Retrieves a character to enter the game with */
	public static String SQL_CHARS_LOAD = "SELECT * FROM characters WHERE char_id LIKE ";
	
	//JOB SELECTS
	/** [<i> <b>LOAD JOB</b> </i>] Retrieves job info for a given job ID */
	public static String SQL_JOBS_LOAD = "SELECT * FROM jobs WHERE id LIKE ";
	
	//RACE SELECTS
	/** [<i> <b>LOAD RACE</b> </i>] Retrieves race info for a given race ID */
	public static String SQL_RACE_LOAD = "SELECT * FROM race WHERE id LIKE ";
}