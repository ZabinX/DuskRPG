/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk. 

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or 
remove this license, and accompany it with all redistributions.
*/

/**
*GiveItem gives an Item to a LivingThing after they kill a mob.
*
*@author Tom Weingarten
*/

public class GiveItem
{
	String strItemName;
	double dblProbability;

	public GiveItem(String strName, double dblProb)
	{
		strItemName = strName;
		dblProbability = dblProb;
	}
}
