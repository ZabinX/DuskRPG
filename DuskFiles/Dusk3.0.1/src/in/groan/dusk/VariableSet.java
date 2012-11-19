package in.groan.dusk;
/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk. 

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or 
remove this license, and accompany it with all redistributions.
*/

import in.groan.dusk.object.entity.Entity;

import java.util.Vector;


/**
*Contains a set of variables for use in a DuskScript.
*Variables may be of type number, livingthing, or string.
*
*@author Tom Weingarten
*/
public class VariableSet
{

	Vector vctVariables;
	
	public VariableSet()
	{
		vctVariables = new Vector(0,1);
	}
	
	public void clearVariables() {
		vctVariables = new Vector(0);
	}

	public void addVariable(String strName, Double objIn) {
		if (strName.equalsIgnoreCase("name")
			||strName.equalsIgnoreCase("clan")
			||strName.equalsIgnoreCase("concat"))
		{
//			engGame.log.printMessage(Log.ERROR, "addVariable():You cannot create a variable with the name \""+strName+"\".");
			return;
		}
		Variable varStore;
		for (int i=0;i<vctVariables.size();i++)
		{
			varStore = (Variable)vctVariables.elementAt(i);
			if (varStore.strName.equals(strName))
			{
				vctVariables.removeElementAt(i);
				break;
			}
		}
		varStore = new Variable();
		varStore.strName = strName;
		varStore.objData = objIn;
		varStore.bytType = 0;
		vctVariables.addElement(varStore);
	}
	
	public void addVariable(String strName, double objIn) {
		if (strName.equalsIgnoreCase("name")
			||strName.equalsIgnoreCase("clan")
			||strName.equalsIgnoreCase("concat"))
		{
//			engGame.log.printMessage(Log.ERROR, "addVariable():You cannot create a variable with the name \""+strName+"\".");
			return;
		}
		Variable varStore;
		for (int i=0;i<vctVariables.size();i++)
		{
			varStore = (Variable)vctVariables.elementAt(i);
			if (varStore.strName.equals(strName))
			{
				vctVariables.removeElementAt(i);
				break;
			}
		}
		varStore = new Variable();
		varStore.strName = strName;
		varStore.objData = new Double(objIn);
		varStore.bytType = 0;
		vctVariables.addElement(varStore);
	}
	
	public void addVariable(String strName, String objIn)
	{
		if (strName.equalsIgnoreCase("name")
			||strName.equalsIgnoreCase("clan")
			||strName.equalsIgnoreCase("concat"))
		{
//			engGame.log.printMessage(Log.ERROR, "addVariable():You cannot create a variable with the name \""+strName+"\".");
			return;
		}
		Variable varStore;
		for (int i=0;i<vctVariables.size();i++)
		{
			varStore = (Variable)vctVariables.elementAt(i);
			if (varStore.strName.equals(strName))
			{
				vctVariables.removeElementAt(i);
				break;
			}
		}
		varStore = new Variable();
		varStore.strName = strName;
		varStore.objData = objIn;
		varStore.bytType = 1;
		vctVariables.addElement(varStore);
	}
	
	public void addVariable(String strName, Entity objIn)
	{
		if (strName.equalsIgnoreCase("name")
			||strName.equalsIgnoreCase("clan")
			||strName.equalsIgnoreCase("concat"))
		{
//			engGame.log.printMessage(Log.ERROR, "addVariable():You cannot create a variable with the name \""+strName+"\".");
			return;
		}
		Variable varStore;
		for (int i=0;i<vctVariables.size();i++)
		{
			varStore = (Variable)vctVariables.elementAt(i);
			if (varStore.strName.equals(strName))
			{
				vctVariables.removeElementAt(i);
				break;
			}
		}
		varStore = new Variable();
		varStore.strName = strName;
		varStore.objData = objIn;
		varStore.bytType = 2;
		vctVariables.addElement(varStore);
	}
	
	/*void addVariable(String strName, Item objIn)
	{
		if (strName.equalsIgnoreCase("name")
			||strName.equalsIgnoreCase("clan")
			||strName.equalsIgnoreCase("concat"))
		{
//			engGame.log.printMessage(Log.ERROR, "addVariable():You cannot create a variable with the name \""+strName+"\".");
			return;
		}
		Variable varStore;
		for (int i=0;i<vctVariables.size();i++)
		{
			varStore = (Variable)vctVariables.elementAt(i);
			if (varStore.strName.equals(strName))
			{
				vctVariables.removeElementAt(i);
				break;
			}
		}
		varStore = new Variable();
		varStore.strName = strName;
		varStore.objData = objIn;
		varStore.bytType = 3;
		vctVariables.addElement(varStore);
	}*/
	
	public Variable getVariable(String strName)
	{
		for (int i=0;i<vctVariables.size();i++)
		{
			Variable varStore = (Variable)vctVariables.elementAt(i);
			if (varStore.strName.equalsIgnoreCase(strName))
			{
				return varStore;
			}
		}
		return null;
	}

	public void removeVariable(String strName)
	{
		for (int i=0;i<vctVariables.size();i++)
		{
			Variable varStore = (Variable)vctVariables.elementAt(i);
			if (varStore.strName.equalsIgnoreCase(strName))
			{
				vctVariables.removeElement(varStore);
				return;
			}
		}
	}
}