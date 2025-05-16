/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk. 

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or 
remove this license, and accompany it with all redistributions.
*/


/**
*A Prop is an entity that cannot move or be used.
*
*@author Tom Weingarten
*/
public class Prop extends DuskObject
{
    public Prop(long lngID)
    {
		bytObjType = (byte)2;
		ID = lngID;
    }
}
