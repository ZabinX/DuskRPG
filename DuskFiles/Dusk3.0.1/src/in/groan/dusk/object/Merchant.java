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
import in.groan.dusk.object.entity.Entity;

import java.io.*;
import java.util.Vector;



/**
*Merchant represents a non-mobile entity where
*players can buy/sell items and pets or train.
*
*@author Tom Weingarten
*/
public class Merchant extends DuskObject
{
	DuskEngine engGame;
	public Vector vctItems;
	
	public Merchant(DuskEngine inGame)
	{
		NAME = "Merchant";
		bytObjType = 4;
		engGame = inGame;
		ID = engGame.getID();
	}
	
	public boolean contains(String strStore)
	{
		int i;
		for (i=0;i<vctItems.size();i++)
		{
			if (strStore.equals((String)vctItems.elementAt(i)))
			{
				return true;
			}
		}
		return false;
	}
	
	void remove(String strStore)
	{
		int i;
		for (i=0;i<vctItems.size();i++)
		{
			if (strStore.equals((String)vctItems.elementAt(i)))
			{
				vctItems.removeElementAt(i);
				return;
			}
		}
	}
	
	public void pet(Entity thnMaster)
	{
		try
		{
			if (thnMaster.ENT_FOLLOWING != null && thnMaster.ENT_FOLLOWING.isPet())
			{
				thnMaster.chatMessage("You are only allowed 1 pet.\n");
				return;
			}
			if (thnMaster.ZENY >= engGame.PET_COST)
			{
				thnMaster.ZENY -= engGame.PET_COST;
			}else
			{
				thnMaster.chatMessage("You can't afford a pet.\n");
				return;
			}
			if (thnMaster.isPet())
			{
				thnMaster.chatMessage("You ARE a pet!\n");
				return;
			}
			thnMaster.halt();
			thnMaster.chatMessage("Enter a name for your pet:\n");
			String strName = thnMaster.BUF_SCK_IN.readLine().trim();
			File filCheck = new File("pets/"+strName.toLowerCase());
			File filCheck2 = new File("users/"+strName.toLowerCase());
			while (filCheck.exists() || filCheck2.exists()
					//|| !engGame.isGoodName(strName)
					)
			{
				thnMaster.chatMessage("That name is already taken or has invalid characters, please enter another:\n");
				strName = thnMaster.BUF_SCK_IN.readLine().trim();
				filCheck = new File("pets/"+strName.toLowerCase());
				filCheck2 = new File("users/"+strName.toLowerCase());
			}
			thnMaster.chatMessage("Choose a type of pet:\n");
			File filPetTypes = new File("defPets");
			String strList[] = filPetTypes.list();
			for (int i=0;i<strList.length;i++)
			{
				thnMaster.chatMessage(strList[i]+"\n");
			}
			String strStore = thnMaster.BUF_SCK_IN.readLine().trim();
			filCheck = new File("defPets/"+strStore);
			while (strStore.equals("") || !filCheck.exists())
			{
				thnMaster.chatMessage("That is not a valid pet type:\n");
				strStore = thnMaster.BUF_SCK_IN.readLine().trim();
				filCheck = new File("defPets/"+strStore);
			}
			thnMaster.ENT_FOLLOWING = new Entity(strName,strStore,thnMaster,engGame);
			thnMaster.proceed();
		}catch(Exception e)
		{
			engGame.LOG.printError("Merchant.pet()", e);
		}
	}
	
	public void train(String strStore, int quantity, Entity thnTrainee) {
	
	}
}
