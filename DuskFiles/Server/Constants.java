/*
All Dusk and DuskClient code copyright Tom Weingarten (captaint@comcast.net) 2000

This code is licensed under the Gnu Public License.

Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk.
*/

/**
*This class defines all constants used throughout the code system.
*
*@Author Lee Templeton (Lone Wolf)
*/

//TODO: Move all commonly used variables to here
public interface Constants
{
	// DUSKENGINE Section
	static final int MIN			= 0;
	static final int MAX			= 1;

	// DUSKOBJECT Section
	static final int NUMBER			= 0;
	static final int STRING			= 1;
	static final int LIVING_THING	= 2;
	static final int ITEM			= 3;

	// ATTRIBUTE Section
	static final int MAIN			= 0;
	static final int SECONDARY		= 1;
	static final int BONUS			= 2;
	static final int ALL			= 100;

	// ITEM Section
	static final int ORDINARY_ITEM	= 0;
	static final int WEAPON			= 1;
	static final int ARMOR			= 2;
	static final int FOOD			= 3;
	static final int DRINK			= 4;
	static final int RANGED			= 5;
	static final int CONTAINER		= 6;

	// CAP Section
	static final int STAT_CAP		= 100;
	static final int SKILL_CAP		= 100;
	static final int MAX_CAP		= 200;

	// Strings
	static final String CONFIG_FILE_NAME = "prefs";
	static final String CONFIG_FILE_DIR = "conf/";
}
