/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk. 

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or 
remove this license, and accompany it with all redistributions.
*/

import java.util.Vector;


/**
*SpellGroup contains all the spells in one group.
*It provides methods to decide how much a spell will
*cost the player to cast.
*
*@author Tom Weingarten
*/
public class SpellGroup
{
	String strName;
	Vector vctSpells;

	public SpellGroup(String inName)
	{
		strName = inName;
		vctSpells = new Vector(0,1);
	}
	
	int getSpellPercent(String strName)
	{
		String strStore;
		for (int i=0;i<vctSpells.size();i++)
		{
			strStore = (String)vctSpells.elementAt(i);
			if (strStore.equals(strName))
			{
				if (i==0)
					return 0;
				else
					return (100*i)/(vctSpells.size()-1);
			}
		}
		return -1;
	}
	
	int getSpellNumber(String strName)
	{
		String strStore;
		for (int i=0;i<vctSpells.size();i++)
		{
			strStore = (String)vctSpells.elementAt(i);
			if (strStore.equals(strName))
			{
				return i;
			}
		}
		return -1;
	}
	
	String spellList(int percent)
	{
		String strStore,
				strResult="";
		strStore = (String)vctSpells.elementAt(0);
		if (strStore == null)
			return "";
		strResult += "  "+((110-percent)/2)+" mp) "+strStore+"\n";
		for (int i=1;i<vctSpells.size();i++)
		{
			if (percent < (100*i)/(vctSpells.size()-1))
				break;
			strStore = (String)vctSpells.elementAt(i);
			strResult += "  "+((110-(percent-(100*i)/(vctSpells.size()-1)))/2)+" mp) "+strStore+"\n";
		}
		return strResult;
	}
}