package in.groan.dusk.object;
/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk. 

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or 
remove this license, and accompany it with all redistributions.
*/

import in.groan.dusk.DuskEngine;
import in.groan.dusk.DuskObject;
import in.groan.dusk.object.itm.Inventory;
import in.groan.dusk.object.itm.Item;

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
	public Inventory vctItems;
	public long ZENY;
	public String strOwner;
	
	public PlayerMerchant(DuskEngine inGame)
	{
		NAME = "merchant";
		bytObjType = 5;
		engGame = inGame;
		ID = engGame.getID();
	}
	
	public long contains(String strStore)
	{
		Vector vctTemp;
		if (vctItems.contains(strStore))
		{
			vctTemp = (Vector)vctItems.get(strStore);
			return vctTemp.size();
		}
		return 0;
	}
	
	public void add(Item itmStore)
	{
		vctItems.addElement(itmStore);
	}

	public Item remove(String strStore)
	{
		return vctItems.removeElement(strStore);
	}
}
