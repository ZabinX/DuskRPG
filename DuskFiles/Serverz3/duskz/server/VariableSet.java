/*
 * This file is part of DuskZ, a graphical mud engine.
 *
 * Copyright (C) 2000 Tom Weingarten <captaint@home.com>
 * Copyright (C) 2013 Michael Zucchi <notzed@gmail.com>
 *
 * DuskZ is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * DuskZ is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with DuskZ; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */
/**
 * Changes
 * Feb-2013 Michael Zucchi - modernised java, separated out Variable.
 */
package duskz.server;

import duskz.server.entity.LivingThing;
import java.util.HashMap;

/**
 * Contains a set of variables for use in a DuskScript. Variables may be of type
 * number, livingthing, or string.
 *
 * @author Tom Weingarten
 */
public class VariableSet {

	//Vector vctVariables;
	public final HashMap<String, Variable> vctVariables = new HashMap<>();

	public VariableSet() {
	}

	public void clearVariables() {
		vctVariables.clear();
	}

	protected void addVariable(Variable v) {
		String n = v.strName.toLowerCase();
		if (n.equals("name")
				|| n.equals("clan")
				|| n.equals("concat")) {
//			engGame.log.printMessage(Log.ERROR, "addVariable():You cannot create a variable with the name \""+strName+"\".");
			return;
		}
		vctVariables.put(n, v);
	}

	public void addVariable(String strName, Double objIn) {
		addVariable(new Variable(strName, objIn, Variable.NUMBER));
	}

	public void addVariable(String strName, double objIn) {
		addVariable(new Variable(strName, objIn, Variable.NUMBER));
	}

	public void addVariable(String strName, String objIn) {
		addVariable(new Variable(strName, objIn, Variable.STRING));
	}

	public void addVariable(String strName, LivingThing objIn) {
		addVariable(new Variable(strName, objIn, Variable.THING));
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
	public Variable getVariable(String strName) {
		return vctVariables.get(strName.toLowerCase());
	}

	public void removeVariable(String strName) {
		vctVariables.remove(strName.toLowerCase());
	}
}
