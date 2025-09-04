/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk. 

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or 
remove this license, and accompany it with all redistributions.
*/

/**
*Spell describes a LivingThing's ability to use a certain spell.
*
*@author Tom Weingarten
*@version %I%, %G%
*/
public class Spell
{
	String strName;
	byte value;

	Spell(String name, byte invalue)
	{
		strName = name;
		value = invalue;
	}
}