package in.groan.dusk.object.itm;
import in.groan.dusk.DuskObject;

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
public class Item extends DuskObject {
	public static final int ORDINARY = 0;
	public static final int WEAPON   = 1;
	public static final int ARMOR    = 2;
	public static final int FOOD     = 3;
	public static final int DRINK    = 4;

    public String strOnUseScript=null,
    		strOnWearScript=null,
    		strOnUnWearScript=null;
	public String strOnGetScript=null;
	public String strOnDropScript=null;

    public int intCost;
	public int intType=-1;
	public int intKind=-1;
	public int intUses=-1;
	public int equipType = -1;
	
	public long lngDurability=-1;

	public Item itmNext=null;

	int intRange = 1;
	
	//Weapon/Armor Stats
	double dmg_mod = 0.0;
	double def_mod = 0.0;
	double mag_mod = 0.0;
	
	double str_mod = 0.0;
	double int_mod = 0.0;
	double vit_mod = 0.0;
	double dex_mod = 0.0;
	double mnd_mod = 0.0;
	double res_mod = 0.0;
	double avd_mod = 0.0;
	double agi_mod = 0.0;
	double lck_mod = 0.0;
	double spd_mod = 0.0;
	
	int rng_mod = 0;
	
    public Item(long lngID) {
		bytObjType = ITEM;
		ID = lngID;
    }

    public boolean isOrdinaryItem() {
		if (intType==ORDINARY)
			return true;
        return false;
    }

    public boolean isWeapon() {
		if (intType==WEAPON)
			return true;
        return false;
    }

    public boolean isArmor() {
        if (intType==ARMOR)
        	return true;
		return false;
    }

    public boolean isFood() {
		if (intType==FOOD)
			return true;
        return false;
    }

    boolean isDrink() {
		if (intType==DRINK)
			return true;
        return false;
    }

	public int range() {
		return intRange;
	}

	/*
	**	This method formats the Item for saving.
	**	It generates a String that can later be passed
	**	to fromString for populating a new Item.
	*/
	public String toString() {
		return "[strName:" + NAME +
				"::strDescription:" + info +
				"::strOnUseScript:" + strOnUseScript +
				"::strOnWearScript:" + strOnWearScript +
				"::strOnUnWearScript:" + strOnUnWearScript +
				"::strOnGetScript:" + strOnGetScript +
				"::strOnDropScript:" + strOnDropScript +
				"::intCost:" + intCost +
				"::intType:" + intType +
				"::intKind:" + intKind +
				"::intImage:" + Image +
				"::intUses:" + intUses +
				"::intRange:" + intRange +
				"::lngDurability:" + lngDurability +
				"]";
	}

	public int getEquType() {
		return equipType;
	}
}
