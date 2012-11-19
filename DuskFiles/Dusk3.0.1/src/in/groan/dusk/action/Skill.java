package in.groan.dusk.action;
/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk. 

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or 
remove this license, and accompany it with all redistributions.
*/

/**
*Skill describes a LivingThing's ability to use a certain skill.
*
*@author Tom Weingarten
*@version %I%, %G%
*/
public class Skill
{
	public String NAME;
	public byte VAL;

	public Skill(String name, byte invalue)
	{
		NAME = name;
		VAL = invalue;
	}
}