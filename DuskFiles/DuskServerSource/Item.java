/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk. 

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or 
remove this license, and accompany it with all redistributions.
*/

//0-Ordinary Item
//1-Weapon
//2-Armor
//3-Food
//4-Drink


/**
*An Item is an object that can be picked up,
*worn, and used. It can be of type Ordinary Item,
*Weapon, Armor, Food, or Drink.
*
*@author Tom Weingarten
*/
public class Item extends DuskObject
{
	public static final int ORDINARY  = 0;
	public static final int WEAPON    = 1;
	public static final int ARMOR     = 2;
	public static final int FOOD      = 3;
	public static final int DRINK     = 4;
	public static final int CONTAINER = 5;

    String strOnUseScript=null,
    		strOnWearScript=null,
    		strOnUnWearScript=null,
    		strOnGetScript=null,
    		strOnDropScript=null,
			strOnOpenScript=null,
			strOnCloseScript=null,
			strOnAddItemScript=null,
			strOnRemoveItemScript=null;

    int intCost,
        intType=-1,
		intKind=-1,
		intMod,
		intUses=-1,
		intRange=1;
	int intWeight;				// How much this object weighs
	int intSize;				// Amount of space this object takes up
	int intCapacity;			// How many items can this container hold
	int intWeightLimit;			// How much weight can this container hold

	long lngDurability=-1;

	Item itmNext=null;

    public Item(long lngID)
    {
		bytObjType = ITEM;
		ID = lngID;
    }

    boolean isOrdinaryItem()
    {
		if (intType==ORDINARY)
			return true;
        return false;
    }

    boolean isWeapon()
    {
		if (intType==WEAPON)
			return true;
        return false;
    }

    boolean isArmor()
    {
        if (intType==ARMOR)
        	return true;
		return false;
    }

    boolean isFood()
    {
		if (intType==FOOD)
			return true;
        return false;
    }

    boolean isDrink()
    {
		if (intType==DRINK)
			return true;
        return false;
    }

	boolean isContainer()
    {
		if (intType==CONTAINER)
			return true;
        return false;
    }

	int range()
	{
		return intRange;
	}

	/*
	**	This method formats the Item for saving.
	**	It generates a String that can later be passed
	**	to fromString for populating a new Item.
	*/
	public String toString()
	{
		return "[strName:" + strName +
				"::strDescription:" + strDescription +
				"::strOnUseScript:" + strOnUseScript +
				"::strOnWearScript:" + strOnWearScript +
				"::strOnUnWearScript:" + strOnUnWearScript +
				"::strOnGetScript:" + strOnGetScript +
				"::strOnDropScript:" + strOnDropScript +
				"::intCost:" + intCost +
				"::intType:" + intType +
				"::intKind:" + intKind +
				"::intMod:" + intMod +
				"::intImage:" + intImage +
				"::intUses:" + intUses +
				"::intRange:" + intRange +
				"::lngDurability:" + lngDurability +
				"]";
	}
}
