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



/**
*Merchant represents a non-mobile entity where
*players can buy/sell items and pets or train.
*
*@author Tom Weingarten
*/
public class Merchant extends DuskObject
{
	DuskEngine engGame;
	Vector vctItems;
	
	public Merchant(DuskEngine inGame)
	{
		strName = "Merchant";
		bytObjType = 4;
		engGame = inGame;
		ID = engGame.getID();
	}
	
	boolean contains(String strStore)
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
	
	void pet(LivingThing thnMaster)
	{
		try
		{
			if (thnMaster.thnFollowing != null && thnMaster.thnFollowing.isPet())
			{
				thnMaster.chatMessage("You are only allowed 1 pet.");
				return;
			}
			if (thnMaster.cash >= engGame.petcost)
			{
				thnMaster.cash -= engGame.petcost;
			}else
			{
				thnMaster.chatMessage("You can't afford a pet.");
				return;
			}
			if (thnMaster.isPet())
			{
				thnMaster.chatMessage("You ARE a pet!");
				return;
			}
			thnMaster.halt();
			thnMaster.chatMessage("Enter a name for your pet:");
			String strName = thnMaster.bfrSocketIn.readLine().trim();
			File filCheck = new File("pets/"+strName.toLowerCase());
			File filCheck2 = new File("users/"+strName.toLowerCase());
			while (filCheck.exists() || filCheck2.exists()
					|| !engGame.isGoodName(strName)
					)
			{
				thnMaster.chatMessage("That name is already taken or has invalid characters, please enter another:");
				strName = thnMaster.bfrSocketIn.readLine().trim();
				filCheck = new File("pets/"+strName.toLowerCase());
				filCheck2 = new File("users/"+strName.toLowerCase());
			}
			thnMaster.chatMessage("Choose a type of pet:");
			File filPetTypes = new File("defPets");
			String strList[] = filPetTypes.list();
			for (int i=0;i<strList.length;i++)
			{
				thnMaster.chatMessage(strList[i]);
			}
			String strStore = thnMaster.bfrSocketIn.readLine().trim();
			filCheck = new File("defPets/"+strStore);
			while (strStore.equals("") || !filCheck.exists())
			{
				thnMaster.chatMessage("That is not a valid pet type:");
				strStore = thnMaster.bfrSocketIn.readLine().trim();
				filCheck = new File("defPets/"+strStore);
			}
			thnMaster.thnFollowing = new LivingThing(strName,strStore,thnMaster,engGame);
			thnMaster.proceed();
		}catch(Exception e)
		{
			engGame.log.printError("Merchant.pet()", e);
		}
	}
	
	void train(String strStore, int quantity, LivingThing thnTrainee)
	{
		if (quantity > 100)
		{
			quantity = 100;
		}
		if (thnTrainee.exp < engGame.traincost*quantity)
		{
			thnTrainee.chatMessage("Sorry, you don't have enough experience points.");
			return;
		}
		if (strStore.equalsIgnoreCase("hp"))
		{
			thnTrainee.exp -= engGame.traincost*quantity;
			thnTrainee.maxhp+=10*quantity;
			thnTrainee.hp+=10*quantity;
			thnTrainee.updateInfo();
			thnTrainee.updateStats();
		}else if (strStore.equalsIgnoreCase("mp"))
		{	
			thnTrainee.exp -= engGame.traincost*quantity;
			thnTrainee.maxmp+=10*quantity;
			thnTrainee.mp+=10*quantity;
			thnTrainee.updateInfo();
			thnTrainee.updateStats();
		}else if (strStore.equalsIgnoreCase("strength"))
		{
			if (thnTrainee.stre + quantity > thnTrainee.stre_limit)
			{	
				quantity = thnTrainee.stre_limit-thnTrainee.stre;
			}
			thnTrainee.exp -= engGame.traincost*quantity;
			thnTrainee.stre+=quantity;
			thnTrainee.updateStats();
		}else if (strStore.equalsIgnoreCase("intelligence"))
		{
			if (thnTrainee.inte + quantity > thnTrainee.inte_limit)
			{	
				quantity = thnTrainee.inte_limit-thnTrainee.inte;
			}
			thnTrainee.exp -= engGame.traincost*quantity;
			thnTrainee.inte+=quantity;
			thnTrainee.updateStats();
		}else if (strStore.equalsIgnoreCase("wisdom"))
		{
			if (thnTrainee.wisd + quantity > thnTrainee.wisd_limit)
			{	
				quantity = thnTrainee.wisd_limit-thnTrainee.wisd;
			}
			thnTrainee.exp -= engGame.traincost*quantity;
			thnTrainee.wisd+=quantity;
			thnTrainee.updateStats();
		}else if (strStore.equalsIgnoreCase("constitution"))
		{
			if (thnTrainee.cons + quantity > thnTrainee.cons_limit)
			{	
				quantity = thnTrainee.cons_limit-thnTrainee.cons;
			}
			thnTrainee.exp -= engGame.traincost*quantity;
			thnTrainee.cons+=quantity;
			thnTrainee.updateStats();
		}else if (strStore.equalsIgnoreCase("dexterity"))
		{
			if (thnTrainee.dext + quantity > thnTrainee.dext_limit)
			{	
				quantity = thnTrainee.dext_limit-thnTrainee.dext;
			}
			thnTrainee.exp -= engGame.traincost*quantity;
			thnTrainee.dext+=quantity;
			thnTrainee.updateStats();
		}else
		{	
			int skillLeft = 100 - thnTrainee.getSkill(strStore);
			if (quantity > skillLeft)
			{
				quantity = skillLeft;
			}
			if (thnTrainee.addToSkill(strStore,(byte)quantity))
			{
				thnTrainee.exp -= quantity * engGame.traincost;
				thnTrainee.updateStats();
			}
		}
	}
}
