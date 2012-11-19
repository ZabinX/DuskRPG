package in.groan.dusk.object.itm;


import java.util.HashMap;
import java.util.Iterator;

/**
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk. 

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or 
remove this license, and accompany it with all redistributions.

*Equipment contains all the Items an Entity is wearing.
*
*@author Tom Weingarten
*
*Dusk 2.7.x Equipment types
*public Item WIELD, ARMS, LEGS, TORSO, WAIST, NECK, SKULL, EYES, HANDS;
*/
public class Equipment {
	public Item HEAD, NECK, HANDS, BODY, ARMS, RRING, WAIST, LRING, LEGS, FEET, WIELD, SHIELD;
  
	public HashMap<Integer, Item> equipped = new HashMap<Integer, Item>();
	Item lastUnequipped, lastEquipped;
	
	public Item getEquippedItem(int type) {
		return equipped.get(type);
	}
	
	public boolean equipItem(int type, Item itm) {
		if(empty(type)) {
			lastEquipped = equipped.put(type, itm);
			return true;
		}
		return false;
	}
	
	public boolean equipItem(Item itm) {
		int type = itm.getEquType();
		if(empty(type)) {
			lastEquipped = equipped.put(type, itm);
			return true;
		}
		return false;
	}
	
	public boolean unequipItem(int type) {
		if(empty(type)) {
			return true;
		}
		
		lastUnequipped = equipped.remove(type);
		return true;
	}
	
	public Item unequipAndGetItem(int type) {
		if(empty(type)) {
			return null;
		}
		
		lastUnequipped = equipped.remove(type);
		return lastUnequipped;
	}
	
	public Item unequipAndGetItem(String name) {
		Item i = getItemByName(name);
		return unequipAndGetItem((int)i.ID);
	}
	
	public boolean typeIsEquipped(int id) {
		return equipped.containsKey(id);
	}
	
	boolean empty(int k) {
		return equipped.containsKey(k);
	}

	public Item getEquippedItem(String name) {
		return getItemByName(name);
	}
	
	Item getItemByName(String name) {
		Item i;
		Iterator<Integer> it = equipped.keySet().iterator();
		while(it.hasNext()) {
			i = equipped.get(it.next());
			if(i.NAME.equalsIgnoreCase(name)) {
				return i;
			}
		}
		
		return null;
	}
}