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
 * Feb-2013 Michael Zucchi - separated out from VariableSet for public access
 */
package duskz.server;

/**
 * Holder for variables.
 *
 * TODO: make this OO. Will need fixing for javascript.
 *
 * @author notzed
 */
public class Variable {

	String strName;
	Object objData;
	byte bytType;
	public final static byte NUMBER = 0;
	public final static byte STRING = 1;
	public final static byte THING = 2;

	public Variable(String strName, Object objData, byte bytType) {
		this.strName = strName;
		this.objData = objData;
		this.bytType = bytType;
	}

	public double doubleValue() {
		return (Double) objData;
	}

	public int intValue() {
		return ((Number) objData).intValue();
	}

	//0-Number
	//1-String
	//2-LivingThing
	//3-Item
	boolean isNumber() {
		if (bytType == 0) {
			return true;
		}
		return false;
	}

	boolean isString() {
		if (bytType == 1) {
			return true;
		}
		return false;
	}

	boolean isLivingThing() {
		if (bytType == 2) {
			return true;
		}
		return false;
	}

	boolean isItem() {
		if (bytType == 3) {
			return true;
		}
		return false;
	}
}
