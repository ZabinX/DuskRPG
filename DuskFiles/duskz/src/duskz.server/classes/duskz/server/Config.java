/*
 * This file is part of DuskZ, a graphical mud engine.
 *
 * Copyright (C) 2000 Tom Weingarten <captaint@home.com>
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
 */
package duskz.server;

import java.util.Properties;
import java.io.FileInputStream;

class Config extends Properties {

	DuskEngine engGame;

	public Config(DuskEngine inGame, String strFileName) {
		engGame = inGame;
		try {
			load(new FileInputStream(strFileName));
		} catch (Exception e) {
			engGame.log.printError("Config::Config(String) - Error loading preferences.", e);
		}
	}

	public String getString(String strKey, String strDefault) {
		String strReturn = getProperty(strKey, strDefault);
		engGame.log.printMessage(Log.VERBOSE, strKey + " = " + strReturn);
		return strReturn;
	}

	public int getInt(String strKey, int intDefault) {
		int intReturn = Integer.parseInt(getProperty(strKey, String.valueOf(intDefault)));
		engGame.log.printMessage(Log.VERBOSE, strKey + " = " + intReturn);
		return intReturn;
	}

	public boolean getBoolean(String strKey, boolean blnDefault) {
		boolean blnReturn = (Boolean.valueOf(getProperty(strKey, String.valueOf(blnDefault))).booleanValue());
		engGame.log.printMessage(Log.VERBOSE, strKey + " = " + blnReturn);
		return blnReturn;
	}

	public long getLong(String strKey, long lngDefault) {
		long lngReturn = Long.parseLong(getProperty(strKey, String.valueOf(lngDefault)));
		engGame.log.printMessage(Log.VERBOSE, strKey + " = " + lngReturn);
		return lngReturn;
	}

	public double getDouble(String strKey, double dblDefault) {
		double dblReturn = Double.parseDouble(getProperty(strKey, String.valueOf(dblDefault)));
		engGame.log.printMessage(Log.VERBOSE, strKey + " = " + dblReturn);
		return dblReturn;
	}
}
