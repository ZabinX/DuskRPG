package in.groan.dusk;
/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk. 

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or 
remove this license, and accompany it with all redistributions.
*/


/**
*Condition describes a temporary or permanent effect.
*
*@author Tom Weingarten
*/
public class Condition
{
	public String NAME;
	public int intDuration=-1; //how many ticks since last occurance
	public int intOccurance=1;
	public int intTicksPast=0;
	public boolean blnDisplay = true; //should the player be able to see the condition
	
	//Scripts:
	public String strOnStart=null,
			strOnOccurance=null,
			strOnEnd=null;
}