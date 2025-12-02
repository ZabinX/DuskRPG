/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk. 

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or 
remove this license, and accompany it with all redistributions.
*/

import java.io.*;
import java.util.Vector;
import java.util.Iterator;



/**
*Merchant represents a non-mobile entity where
*This merchant holds/sells items for the player that owns it
*The owner can give and take items and gp from it.
*The merchant will only be able to sell items it has been given.
*And only the number it has been given.
*
*@author Wildern
*/
public class PlayerMerchant extends DuskObject
{
	DuskEngine engGame;
	ItemList vctItems;
	long cash;
	String strOwner;
	
	public PlayerMerchant(DuskEngine inGame)
	{
		strName = "merchant";
		bytObjType = 5;
		engGame = inGame;
		ID = engGame.getID();
	}
	
	long contains(String strStore)
	{
		Vector vctTemp;
		if (vctItems.contains(strStore))
		{
			vctTemp = (Vector)vctItems.get(strStore);
			return vctTemp.size();
		}
		return 0;
	}
	
	void add(Item itmStore)
	{
		vctItems.addElement(itmStore);
	}

	Item remove(String strStore)
	{
		return vctItems.removeElement(strStore);
	}
}
