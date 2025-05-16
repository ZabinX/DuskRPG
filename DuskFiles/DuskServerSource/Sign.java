/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk. 

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or 
remove this license, and accompany it with all redistributions.
*/


/**
*Represents a sign object. A sign contains a string message and can be viewed by LivingThings.
*
*@author Tom Weingarten
*/
public class Sign extends DuskObject
{
	String strMessage;

	public Sign(String name,String msg,int locx,int locy,long lngID)
	{
		bytObjType = (byte)3;
		strName = name;
		strMessage = msg;
		intLocX = locx;
		intLocY = locy;
		ID = lngID;
	}
}
