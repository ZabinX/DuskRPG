/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk. 

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or 
remove this license, and accompany it with all redistributions.
*/


/**
*DuskObject is the basic type of entity in Dusk.
*
*@author Tom Weingarten
*/
public class DuskObject
{
	public static final byte LIVING_THING    = 0;
	public static final byte ITEM            = 1;
	public static final byte PROP            = 2;
	public static final byte SIGN            = 3;
	public static final byte MERCHANT        = 4;
	public static final byte PLAYER_MARCHANT = 5;

	byte bytObjType;			// Object Type - Item, Drink, Food, Weapon, Armor, etc.
	long ID;					// Unique ID if this object
	String strName=null;		// Name of this object
    String strDescription=null;	// Description of this object
	int intImage;				// Image # used to represent this object on the client map
	boolean blnHideName;		// if true: Do not display object's name on the client map.
	int intLocX,
		intLocY;

	DuskObject objNext=null;	//Linked List
	
	boolean isLivingThing()
	{
		if (bytObjType == 0)
			return true;
		return false;
	}
	
	boolean isItem()
	{
		if (bytObjType == 1)
			return true;
		return false;
	}
	
	boolean isProp()
	{
		if (bytObjType == 2)
			return true;
		return false;
	}
	
	boolean isSign()
	{
		if (bytObjType == 3)
			return true;
		return false;
	}
	
	boolean isMerchant()
	{
		if (bytObjType == 4)
			return true;
		return false;
	}
	
	boolean isPlayerMerchant()
	{
		if (bytObjType == 5)
			return true;
		return false;
	}
}
