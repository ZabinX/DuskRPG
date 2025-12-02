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
	
	void clearVariables()
	{
		vctVariables = new Vector(0);
	}

	void addVariable(String strName, Double objIn)
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
		varStore.bytType = 0;
		vctVariables.addElement(varStore);
	}
	
	void addVariable(String strName, double objIn)
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
		varStore.objData = new Double(objIn);
		varStore.bytType = 0;
		vctVariables.addElement(varStore);
	}
	
	void addVariable(String strName, String objIn)
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
	
	void addVariable(String strName, LivingThing objIn)
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
	
	Variable getVariable(String strName)
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

	void removeVariable(String strName)
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

class Variable
{
	String strName;
	Object objData;
	byte bytType;
	
	//0-Number
	//1-String
	//2-LivingThing
	//3-Item
	
	boolean isNumber()
	{
		if (bytType == 0)
			return true;
		return false;
	}
	
	boolean isString()
	{
		if (bytType == 1)
			return true;
		return false;
	}
	
	boolean isLivingThing()
	{
		if (bytType == 2)
			return true;
		return false;
	}
	
	boolean isItem()
	{
		if (bytType == 3)
			return true;
		return false;
	}
}
