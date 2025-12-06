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
package duskz.server;

/*
 Portions of code relating to getString() and script
 parameters by Randall Leeds and Tom Weingarten
 */
import duskz.server.entity.Mob;
import duskz.server.entity.LivingThing;
import duskz.server.entity.Item;
import duskz.server.entity.DuskObject;
import java.io.*;
import java.util.Vector;
import java.lang.Math;
import java.util.List;

/**
 * Script reads and executes DuskScripts.
 *
 * @deprecated is to be replaced by JavaScript
 * @author Tom Weingarten
 */
@Deprecated
public class Script {

	Vector vctUpdate;
	Vector vctVisibleUpdate;
	public VariableSet varVariables;
//	RandomAccessFile rafScript;
	RandomAccessString rafScript;
	DuskEngine engGame;
	String strRead = null;
	//for script debugging purposes:
	String strName;
	int intLine = 0;
//	long lngQuoteFilePointer;
	int lngQuoteFilePointer;

	public Script(String strIn, DuskEngine inEngine, boolean forcecompile)
			throws Exception {
		engGame = inEngine;
		strName = strIn;
		if (forcecompile) {
			File filDelete = new File(strIn + ".dsko");
			if (filDelete.exists()) {
				filDelete.delete();
			}
			compileScript(strIn);
		} else {
			File filCompileCheck = new File(strIn + ".dsko");
			if (!filCompileCheck.exists()) {
				compileScript(strIn);
			}
		}
		varVariables = new VariableSet();
//		rafScript = new RandomAccessFile(strIn+".dsko","r");
		rafScript = new RandomAccessString(strIn + ".dsko");
		intLine = 0;
	}

	/**
	 * Helper to run a script with only a trigger arg.
	 *
	 * Silently ignores missing scripts.
	 *
	 * @param name
	 * @param trigger
	 */
	public static void exec(String name, DuskEngine engGame, LivingThing trigger) {
		File file = new File(name);

		if (!file.exists())
			return;

		Script script = null;

		try {
			script = new Script(name, engGame, false);
			script.varVariables.addVariable("trigger", trigger);
			script.runScript();
		} catch (Exception e) {
			engGame.log.printError("Executing script " + name, e);
		} finally {
			if (script != null) {
				try {
					script.close();
				} catch (Exception e) {
				}
			}
		}
	}
	// TODO: work out what i want here/clean up every caller

	public static void exec(String name, DuskEngine engGame) {
		File file = new File(name);

		if (!file.exists())
			return;

		Script script = null;

		try {
			script = new Script(name, engGame, false);
			script.runScript();
		} catch (Exception e) {
			engGame.log.printError("Executing script " + name, e);
		} finally {
			if (script != null) {
				try {
					script.close();
				} catch (Exception e) {
				}
			}
		}
	}

	synchronized void compileScript(String name)
			throws Exception {
		RandomAccessFile rafCompile;
//		rafScript = new RandomAccessFile(name, "r");
		rafScript = new RandomAccessString(name);
		try {
			rafCompile = new RandomAccessFile(name + ".dsko", "rw");
		} catch (Exception e) {
			engGame.log.printError("compileScript():Opening " + name + ".dsko file for script " + name, e);
			return;
		}
		try {
			while (parseScriptForCompile(rafCompile)) {
			}
		} catch (Exception e) {
			engGame.log.printError("compileScript():While running parseScriptForCompile() for script " + name, e);
		}
		try {
			rafCompile.close();
		} catch (Exception e) {
			engGame.log.printError("compileScript():While closing .dsko file for script " + name, e);
		}
	}

	public void close() {
		try {
			rafScript.close();
		} catch (Exception e) {
			engGame.log.printError("Script.close():Closing script " + strName, e);
		}
	}

	LivingThing getLivingThing(String strName) {
		try {
			LivingThing thnStore;
			if (strName.equalsIgnoreCase("player")) {
				return engGame.getPlayer(getString());
			} else if (strName.equalsIgnoreCase("local")) {
				DuskObject objStore = getLivingThing(getString()).getLocalObject(getString());
				if (objStore != null && objStore.isLivingThing()) {
					return ((LivingThing) objStore);
				}
				return null;
			} else if (strName.equalsIgnoreCase("enemy")) {
				thnStore = getLivingThing(getString());
				return Battle.getEnemy(thnStore);
			} else if (strName.equalsIgnoreCase("pet")) {
				thnStore = getLivingThing(getString());
				if (thnStore.getFollowing() != null && thnStore.getFollowing().isPet()) {
					return thnStore.getFollowing();
				}
				return null;
			} else if (strName.equalsIgnoreCase("following")) {
				thnStore = getLivingThing(getString());
				if (thnStore.getFollowing() != null && thnStore.getFollowing().isPet()) {
					return thnStore.getFollowing();
				} else {
					return null;
				}
			} else if (strName.equalsIgnoreCase("global")) {
				Variable varStore = engGame.varVariables.getVariable(readScriptForCompile());
				if (varStore != null && varStore.isLivingThing()) {
					return (LivingThing) varStore.objData;
				}
			}
			Variable varStore = varVariables.getVariable(strName);
			if (varStore != null && varStore.isLivingThing()) {
				return (LivingThing) varStore.objData;
			}
			thnStore = engGame.getPlayer(strName);
			if (thnStore != null) {
				return thnStore;
			}
			thnStore = engGame.getMobFromVct(strName);
			if (thnStore != null) {
				return thnStore;
			}
			thnStore = engGame.getPet(strName);
			if (thnStore != null) {
				return thnStore;
			}
		} catch (Exception e) {
			engGame.log.printError("getLivingThing()", e);
		}
		return null;
	}

	Double getNumber(String strName) {
		try {
			return Double.valueOf(strName);
		} catch (NumberFormatException e) {
		}
		if (strName.equalsIgnoreCase("global")) {
			try {
				Variable varStore = engGame.varVariables.getVariable(readScriptForCompile());
				if (varStore != null && varStore.isNumber()) {
					return (Double) varStore.objData;
				}
			} catch (Exception e) {
				return null;
			}
		}
		Variable varStore = varVariables.getVariable(strName);
		if (varStore != null && varStore.isNumber()) {
			return (Double) varStore.objData;
		}
		return null;
	}

	private void rewindScript() {
		intLine = 0;
		strRead = null;
		try {
			rafScript.seek(0);
		} catch (Exception e) {
			engGame.log.printError("rewindScript()", e);
		}
	}

	public void runScript() {
		engGame.log.printMessage(Log.DEBUG, "Executing script " + strName);
		rewindScript();
		vctUpdate = new Vector(0);
		vctVisibleUpdate = new Vector(0);
		while (parseScript()) {
		}
		LivingThing thnStore;
		for (int i = 0; i < vctUpdate.size(); i++) {
			thnStore = (LivingThing) vctUpdate.elementAt(i);
			thnStore.updateStats();
		}
		for (int i = 0; i < vctVisibleUpdate.size(); i++) {
			thnStore = (LivingThing) vctVisibleUpdate.elementAt(i);
			engGame.removeDuskObject(thnStore);
			engGame.addDuskObject(thnStore.map, thnStore);
		}
	}

	public void runScript(String strParams) {
		String strStore2;
		int i2;
		try {
			for (int i = 0; !strParams.equals(""); i++) {
				if (strParams.startsWith("\"")) {
					char c, c2;

					strStore2 = "";
					i2 = 1;
					while (true) {
						c = strParams.charAt(i2);
						if (c == '\\') {
							c2 = strParams.charAt(i2 + 1);
							strStore2 += c2;
						} else if (c == '\"') {
							i2++;
							break;
						} else {
							strStore2 += c;
						}
						i2++;
					}
				} else {
					i2 = strParams.indexOf(" ");
					if (i2 == -1) {
						strStore2 = strParams;
						varVariables.addVariable("param" + i, strStore2);
						break;
					} else {
						strStore2 = strParams.substring(0, i2);
					}
				}
				varVariables.addVariable("param" + i, strStore2);
				if (strParams.length() > i2) {
					strParams = strParams.substring(i2 + 1);
				} else {
					strParams = "";
				}
			}
		} catch (Exception e) {
			engGame.log.printError("runScript()", e);
		}
		runScript();
	}

	public boolean rewindAndParseScript() {
		rewindScript();
		boolean ok = parseScript();
		engGame.log.printMessage(Log.DEBUG, "Executing boolean script " + strName + "=" + ok);
		return ok;
	}

	String readScriptForCompile()
			throws IOException {
		String strStore2;
		if (strRead == null) {
			// initialize quotation marker before read as we do not know whether
			// readLine is stripping a cr or a cr/lf pair.  This eliminates the
			// need to use strRead.length() in the calculation.
			lngQuoteFilePointer = rafScript.getFilePointer();
			strRead = rafScript.readLine();
			if (strRead == null) {
				return null;
			}
			// Scan for quotation marks before we can clean up the string with trim
			int q = strRead.indexOf("\"");
			if (q != -1) {
				lngQuoteFilePointer += q + 1;
			}
			strRead = strRead.trim();
			intLine++;
		}
		int i = strRead.indexOf(" ");
		if (i == -1) {
			strStore2 = strRead;
			strRead = null;
			return strStore2;
		}
		strStore2 = strRead.substring(0, i).trim();
		try {
			strRead = strRead.substring(i + 1, strRead.length());
		} catch (Exception e) {
			strRead = null;
		}
		return strStore2;
	}

	String getStringForCompile()
			throws IOException {
		String strStore;
		strStore = readScriptForCompile();

		if (strStore.equals("concat")) {
			return "concat " + getStringForCompile() + getStringForCompile();
		}

		if (strStore.equalsIgnoreCase("name")) {
			return "name " + getStringForCompile();
		}

		if (strStore.equalsIgnoreCase("enemy")) {
			return "enemy " + getStringForCompile();
		}

		if (strStore.equalsIgnoreCase("following")) {
			return "following " + getStringForCompile();
		}

		if (strStore.equalsIgnoreCase("clan")) {
			return "clan " + getStringForCompile();
		}

		if (strStore.startsWith("\"")) {
			char c, c2;
			//Go back to the beginning of the quote
			rafScript.seek(lngQuoteFilePointer);

			//Read quote into strStore2
			strStore = "\"";
			while (true) {
				c = (char) rafScript.readByte();
				if (c == '\\') {
					c2 = (char) rafScript.readByte();
					strStore += "\\";
					strStore += c2;
				} else if (c == '\"') {
					break;
				} else if (c == '\n') {
					strStore += "\n";
					intLine++;
				} else if (c == '\r') {
					strStore += "\n";
					intLine++;
					// Skip over LF as this was a CR/LF pair
					c2 = (char) rafScript.readByte();
					if (c2 != '\n') {
						// Back up 1 char if this wasn't a CR/LF pair
						rafScript.seek(rafScript.getFilePointer() - 1);
					}
				} else //If no special characters exist, add it to the string
				{
					strStore += c;
				}
			}
			strRead = null; //Delete strRead, readScriptForCompile will recreate it
			strStore += "\"";
			return strStore;
		} else {
			if (strStore.equalsIgnoreCase("global")) {
				strStore = getStringForCompile();
				return "global " + strStore;
			}
		}
		return strStore + " ";
	}

	String readScript()
			throws IOException {
		String strStore = "";
		char c = (char) rafScript.readByte();
		while (c != ' ') {
			strStore += c;
			c = (char) rafScript.readByte();
		}
		return strStore;
	}

	String getString()
			throws IOException {
		String strStore = "";
//		long lngOldFilePointer;
		int lngOldFilePointer;

		lngOldFilePointer = rafScript.getFilePointer();

		char c = (char) rafScript.readByte();

		//Skip over leading spaces
		while (c == ' ') {
			lngOldFilePointer++;
			c = (char) rafScript.readByte();
		}

		if (c == '\"') {
			c = (char) rafScript.readByte();
			while (c != '\"') {
				strStore += c;
				c = (char) rafScript.readByte();
			}
		} else {
			while (c != ' ') {
				strStore += c;
				c = (char) rafScript.readByte();
			}
		}

		if (strStore.equals("concat")) {
			return getString() + getString();
		}

		if (strStore.equalsIgnoreCase("name")) {
			LivingThing thnStore = getLivingThing(getString());
			if (thnStore != null) {
				return thnStore.name;
			}
			return "name";
		}

		if (strStore.equalsIgnoreCase("clan")) {
			LivingThing thnStore = getLivingThing(getString());
			if (thnStore != null) {
				return thnStore.clan;
			}
			return "clan";
		}

		if (strStore.startsWith("\"")) {
			char c2;
			//Go back to the beginning of the quote
			rafScript.seek(lngOldFilePointer + 1);

			//Read quote into strStore2
			strStore = "";
			while (true) {
				c = (char) rafScript.readByte();
				if (c == '\\') {
					c2 = (char) rafScript.readByte();
					strStore += c2;
				} else if (c == '\"') {
					break;
				} else //If no special characters exist, add it to the string
				{
					strStore += c;
				}
			}
//			try
//			{
//				rafScript.seek(rafScript.getFilePointer()+1);// Why do I need this to skip over ending quote?
//			}catch(EOFException e){}
		} else {
			Variable varStore = null;
			if (strStore.equalsIgnoreCase("global")) {
				strStore = getString();
				varStore = engGame.varVariables.getVariable(strStore);
			} else {
				varStore = varVariables.getVariable(strStore);
			}
			if (varStore == null) {
				return strStore;
			} else if (varStore.isString()) {
				return (String) varStore.objData;
			} else if (varStore.isLivingThing()) {
				return strStore;
			} else if (varStore.isNumber()) {
				return String.valueOf(((Double) varStore.objData).intValue());
			}
		}
		return strStore;
	}

	boolean parseScriptForCompile(RandomAccessFile rafCompile)
			throws Exception {
		String strStore;
		try {
			strStore = readScriptForCompile();
			if (strStore == null) {
				return false;
			}
		} catch (EOFException e) {
			return false;
		}
		if (strStore.startsWith("#") || strStore.equals(" ")) //comments
		{
			strRead = null;
			intLine++;
			return true;
		}
		if (strStore.equals("!") || strStore.equalsIgnoreCase("not")) //Not, returns the opposite of the next line
		{
			rafCompile.writeByte(0);
			return true;
		} else if (strStore.equalsIgnoreCase("if")) {
			rafCompile.writeByte(1);
			return true;
		} else if (strStore.equals("end")) {
			rafCompile.writeByte(2);
			return true;
		} else if (strStore.equals(")") || strStore.equals("(")) {
			return true;
		} else if (strStore.equalsIgnoreCase("t") || strStore.equalsIgnoreCase("true")) {
			rafCompile.writeByte(3);
			return true;
		} else if (strStore.equalsIgnoreCase("f") || strStore.equalsIgnoreCase("false")) {
			rafCompile.writeByte(4);
			return true;
		} else if (strStore.equalsIgnoreCase("playsound")) {
			rafCompile.writeByte(5);
			rafCompile.writeBytes(parseValueForCompile());
			rafCompile.writeBytes(parseValueForCompile());
			rafCompile.writeBytes(parseValueForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("order")) {
			rafCompile.writeByte(6);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("hascondition")) {
			rafCompile.writeByte(7);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("addcondition")) {
			rafCompile.writeByte(8);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("addconditionwithduration")) {
			rafCompile.writeByte(9);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(parseValueForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("removecondition")) {
			rafCompile.writeByte(10);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("addflag")) {
			rafCompile.writeByte(11);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("hasflag")) {
			rafCompile.writeByte(12);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("removeflag")) {
			rafCompile.writeByte(13);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("global")) {
			strStore = getStringForCompile().trim();
			if (strStore.equalsIgnoreCase("livingthing")) {
				rafCompile.writeByte(14);
				rafCompile.writeBytes(readScriptForCompile() + " ");
				rafCompile.writeBytes(getStringForCompile());
				return true;
			} else if (strStore.equalsIgnoreCase("number")) {
				rafCompile.writeByte(15);
				rafCompile.writeBytes(readScriptForCompile() + " ");
				rafCompile.writeBytes(parseValueForCompile());
				return true;
			} else if (strStore.equalsIgnoreCase("string")) {
				rafCompile.writeByte(16);
				rafCompile.writeBytes(readScriptForCompile() + " ");
				rafCompile.writeBytes(getStringForCompile());
				return true;
			}
		} else if (strStore.equalsIgnoreCase("livingthing")) {
			rafCompile.writeByte(17);
			rafCompile.writeBytes(readScriptForCompile() + " ");
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("number")) {
			rafCompile.writeByte(18);
			rafCompile.writeBytes(readScriptForCompile() + " ");
			rafCompile.writeBytes(parseValueForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("string")) {
			rafCompile.writeByte(19);
			rafCompile.writeBytes(readScriptForCompile() + " ");
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("or")) {
			rafCompile.writeByte(20);
			return true;
		} else if (strStore.equalsIgnoreCase("and")) {
			rafCompile.writeByte(21);
			return true;
		} else if (strStore.equalsIgnoreCase("<")) {
			rafCompile.writeByte(22);
			rafCompile.writeBytes(parseValueForCompile());
			rafCompile.writeBytes(parseValueForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase(">")) {
			rafCompile.writeByte(23);
			rafCompile.writeBytes(parseValueForCompile());
			rafCompile.writeBytes(parseValueForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("=")) {
			rafCompile.writeByte(24);
			rafCompile.writeBytes(parseValueForCompile());
			rafCompile.writeBytes(parseValueForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("isinbattle")) {
			rafCompile.writeByte(25);
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("isclan")) {
			rafCompile.writeByte(26);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("israce")) {
			rafCompile.writeByte(27);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("hasitem")) {
			rafCompile.writeByte(28);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("createmob")) {
			rafCompile.writeByte(29);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(parseValueForCompile());
			rafCompile.writeBytes(parseValueForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("createoneusemob")) {
			rafCompile.writeByte(30);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(parseValueForCompile());
			rafCompile.writeBytes(parseValueForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("createitem")) {
			rafCompile.writeByte(31);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(parseValueForCompile());
			rafCompile.writeBytes(parseValueForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("giveitem")) {
			rafCompile.writeByte(59);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("removeitem")) {
			rafCompile.writeByte(33);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("iswearing")) {
			rafCompile.writeByte(34);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("unwear")) {
			rafCompile.writeByte(35);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("variableisnumber")) {
			rafCompile.writeByte(36);
			strStore = getStringForCompile();
			if (strStore.equalsIgnoreCase("global")) {
				rafCompile.writeBytes("global ");
				strStore = getStringForCompile();
			}
			rafCompile.writeBytes(strStore);
			return true;
		} else if (strStore.equalsIgnoreCase("variableisstring")) {
			rafCompile.writeByte(37);
			strStore = getStringForCompile();
			if (strStore.equalsIgnoreCase("global")) {
				rafCompile.writeBytes("global ");
				strStore = getStringForCompile();
			}
			rafCompile.writeBytes(strStore);
			return true;
		} else if (strStore.equalsIgnoreCase("variableislivingthing")) {
			rafCompile.writeByte(38);
			strStore = getStringForCompile();
			if (strStore.equalsIgnoreCase("global")) {
				rafCompile.writeBytes("global ");
				strStore = getStringForCompile();
			}
			rafCompile.writeBytes(strStore);
			return true;
		} else if (strStore.equalsIgnoreCase("isplayer")) {
			rafCompile.writeByte(39);
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("ispet")) {
			rafCompile.writeByte(40);
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("ismob")) {
			rafCompile.writeByte(41);
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("chat")) {
			rafCompile.writeByte(42);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("chatc")) {
			rafCompile.writeByte(43);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(parseValueForCompile());
			rafCompile.writeBytes(parseValueForCompile());
			rafCompile.writeBytes(parseValueForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("inc")) {
			rafCompile.writeByte(44);
			rafCompile.writeBytes(getStringForCompile());
			strStore = readScriptForCompile();
			if (strStore.equalsIgnoreCase("hp")) {
				rafCompile.writeByte(0);
			}
			if (strStore.equalsIgnoreCase("maxhp")) {
				rafCompile.writeByte(1);
			}
			if (strStore.equalsIgnoreCase("hpbonus")) {
				rafCompile.writeByte(2);
			}
			if (strStore.equalsIgnoreCase("mp")) {
				rafCompile.writeByte(3);
			}
			if (strStore.equalsIgnoreCase("maxmp")) {
				rafCompile.writeByte(4);
			}
			if (strStore.equalsIgnoreCase("mpbonus")) {
				rafCompile.writeByte(5);
			}
			if (strStore.equalsIgnoreCase("damdone")) {
				rafCompile.writeByte(6);
			}
			if (strStore.equalsIgnoreCase("strength")) {
				rafCompile.writeByte(7);
			}
			if (strStore.equalsIgnoreCase("intelligence")) {
				rafCompile.writeByte(8);
			}
			if (strStore.equalsIgnoreCase("dexterity")) {
				rafCompile.writeByte(9);
			}
			if (strStore.equalsIgnoreCase("wisdom")) {
				rafCompile.writeByte(10);
			}
			if (strStore.equalsIgnoreCase("constitution")) {
				rafCompile.writeByte(11);
			}
			if (strStore.equalsIgnoreCase("strengthbonus")) {
				rafCompile.writeByte(12);
			}
			if (strStore.equalsIgnoreCase("intelligencebonus")) {
				rafCompile.writeByte(13);
			}
			if (strStore.equalsIgnoreCase("dexteritybonus")) {
				rafCompile.writeByte(14);
			}
			if (strStore.equalsIgnoreCase("wisdombonus")) {
				rafCompile.writeByte(15);
			}
			if (strStore.equalsIgnoreCase("constitutionbonus")) {
				rafCompile.writeByte(16);
			}
			if (strStore.equalsIgnoreCase("acbonus")) {
				rafCompile.writeByte(17);
			}
			if (strStore.equalsIgnoreCase("dammodbonus")) {
				rafCompile.writeByte(18);
			}
			if (strStore.equalsIgnoreCase("locx")) {
				rafCompile.writeByte(19);
			}
			if (strStore.equalsIgnoreCase("locy")) {
				rafCompile.writeByte(20);
			}
			if (strStore.equalsIgnoreCase("locxy")) {
				rafCompile.writeByte(21);
				rafCompile.writeBytes(parseValueForCompile());
			}
			if (strStore.equalsIgnoreCase("exp")) {
				rafCompile.writeByte(22);
			}
			if (strStore.equalsIgnoreCase("cash")) {
				rafCompile.writeByte(23);
			}
			if (strStore.equalsIgnoreCase("skill")) {
				rafCompile.writeByte(24);
				rafCompile.writeBytes(getStringForCompile());
			}
			rafCompile.writeBytes(parseValueForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("set")) {
			rafCompile.writeByte(45);
			rafCompile.writeBytes(getStringForCompile());
			strStore = readScriptForCompile();
			if (strStore.equalsIgnoreCase("hp")) {
				rafCompile.writeByte(0);
			}
			if (strStore.equalsIgnoreCase("maxhp")) {
				rafCompile.writeByte(1);
			}
			if (strStore.equalsIgnoreCase("hpbonus")) {
				rafCompile.writeByte(2);
			}
			if (strStore.equalsIgnoreCase("mp")) {
				rafCompile.writeByte(3);
			}
			if (strStore.equalsIgnoreCase("maxmp")) {
				rafCompile.writeByte(4);
			}
			if (strStore.equalsIgnoreCase("mpbonus")) {
				rafCompile.writeByte(5);
			}
			if (strStore.equalsIgnoreCase("damdone")) {
				rafCompile.writeByte(6);
			}
			if (strStore.equalsIgnoreCase("strength")) {
				rafCompile.writeByte(7);
			}
			if (strStore.equalsIgnoreCase("intelligence")) {
				rafCompile.writeByte(8);
			}
			if (strStore.equalsIgnoreCase("dexterity")) {
				rafCompile.writeByte(9);
			}
			if (strStore.equalsIgnoreCase("wisdom")) {
				rafCompile.writeByte(10);
			}
			if (strStore.equalsIgnoreCase("constitution")) {
				rafCompile.writeByte(11);
			}
			if (strStore.equalsIgnoreCase("strengthbonus")) {
				rafCompile.writeByte(12);
			}
			if (strStore.equalsIgnoreCase("intelligencebonus")) {
				rafCompile.writeByte(13);
			}
			if (strStore.equalsIgnoreCase("dexteritybonus")) {
				rafCompile.writeByte(14);
			}
			if (strStore.equalsIgnoreCase("wisdombonus")) {
				rafCompile.writeByte(15);
			}
			if (strStore.equalsIgnoreCase("constitutionbonus")) {
				rafCompile.writeByte(16);
			}
			if (strStore.equalsIgnoreCase("acbonus")) {
				rafCompile.writeByte(17);
			}
			if (strStore.equalsIgnoreCase("dammodbonus")) {
				rafCompile.writeByte(18);
			}
			if (strStore.equalsIgnoreCase("locx")) {
				rafCompile.writeByte(19);
			}
			if (strStore.equalsIgnoreCase("locy")) {
				rafCompile.writeByte(20);
			}
			if (strStore.equalsIgnoreCase("locxy")) {
				rafCompile.writeByte(21);
				rafCompile.writeBytes(parseValueForCompile());
			}
			if (strStore.equalsIgnoreCase("exp")) {
				rafCompile.writeByte(22);
			}
			if (strStore.equalsIgnoreCase("cash")) {
				rafCompile.writeByte(23);
			}
			if (strStore.equalsIgnoreCase("skill")) {
				rafCompile.writeByte(24);
				rafCompile.writeBytes(getStringForCompile());
			}
			if (strStore.equalsIgnoreCase("mapxy")) {
				rafCompile.writeByte(25);
				rafCompile.writeBytes(getStringForCompile());
				rafCompile.writeBytes(parseValueForCompile());
			}
			rafCompile.writeBytes(parseValueForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("changeTile")) {
			rafCompile.writeByte(46);
			rafCompile.writeBytes(parseValueForCompile());
			rafCompile.writeBytes(parseValueForCompile());
			rafCompile.writeBytes(parseValueForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("strequals")) {
			rafCompile.writeByte(47);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("input")) {
			rafCompile.writeByte(48);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("checkviewable")) {
			rafCompile.writeByte(49);
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("log")) {
			rafCompile.writeByte(50);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("gecho")) {
			rafCompile.writeByte(51);
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("endscript")) {
			rafCompile.writeByte(4);
			return true;
		} else if (strStore.equalsIgnoreCase("chatwindow")) {
			rafCompile.writeByte(52);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("kill")) {
			rafCompile.writeByte(53);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("endcommand")) {
			rafCompile.writeByte(54);
			return true;
		} else if (strStore.equalsIgnoreCase("clanleader")) {
			rafCompile.writeByte(55);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("changeclan")) {
			rafCompile.writeByte(56);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("floodoff")) {
			rafCompile.writeByte(57);
			rafCompile.writeBytes(getStringForCompile());
			return true;
		} else if (strStore.equalsIgnoreCase("battlechat")) {
			rafCompile.writeByte(58);
			rafCompile.writeBytes(getStringForCompile());
			rafCompile.writeBytes(getStringForCompile());
			return true;
		}
		rafCompile.writeBytes(strStore + " ");
		return true;
	}

	boolean parseScript() {
		intLine++;
		byte bytCommand = 0;
		try {
			bytCommand = rafScript.readByte();
			// Skip over spaces between commands (if any)
			while (bytCommand == 32) {
				bytCommand = rafScript.readByte();
			}
			switch (bytCommand) {
				case 0: {
					if (parseScript()) {
						return false;
					}
					return true;
				}
				case 1: {
					if (!parseScript()) {
						int ifCount = 1;
						byte bytStore;
						while (true) {
							bytStore = rafScript.readByte();
							if (bytStore == 1) {
								ifCount++;
							} else if (bytStore == 2) {
								ifCount--;
								if (ifCount == 0) {
									break;
								}
							}
						}
					}
					return true;
				}
				case 2: {
					return true;
				}
				case 3: {
					return true;
				}
				case 4: {
					return false;
				}
				case 5: {
					// FIXME: playsound script, who played it?
					//engGame.playSound((int) parseValue(), (int) parseValue(), (int) parseValue());
					return true;
				}
				case 6: {
					LivingThing thnStore = getLivingThing(getString());
					Commands.parseCommand(thnStore, engGame, getString());
					return true;
				}
				case 7: {
					return getLivingThing(getString()).hasCondition(getString());
				}
				case 8: {
					getLivingThing(getString()).addCondition(engGame.getCondition(getString()));
					return true;
				}
				case 9: {
					LivingThing thnStore = getLivingThing(getString());
					Condition cndStore = engGame.getCondition(getString());
					cndStore.duration = (int) parseValue();
					thnStore.addCondition(cndStore);
					return true;
				}
				case 10: {
					getLivingThing(getString()).removeCondition(getString());
					return true;
				}
				case 11: {
					LivingThing thnStore = getLivingThing(getString());
					thnStore.flags.add(getString());
					if (vctVisibleUpdate != null || vctVisibleUpdate.contains(thnStore)) {
						vctVisibleUpdate.addElement(thnStore);
					}
					return true;
				}
				case 12: {
					LivingThing thnStore = getLivingThing(getString());
					String strStore2 = getString();
					for (int i = 0; i < thnStore.flags.size(); i++) {
						if (strStore2.equalsIgnoreCase((String) thnStore.flags.get(i))) {
							return true;
						}
					}
					return false;
				}
				case 13: {
					LivingThing thnStore = getLivingThing(getString());
					String strStore2 = getString();
					for (int i = 0; i < thnStore.flags.size(); i++) {
						if (strStore2.equalsIgnoreCase((String) thnStore.flags.get(i))) {
							thnStore.flags.remove(i);
							if (vctVisibleUpdate != null || vctVisibleUpdate.contains(thnStore)) {
								vctVisibleUpdate.addElement(thnStore);
							}
							return true;
						}
					}
					return true;
				}
				case 14: {
					engGame.varVariables.addVariable(readScript(), getLivingThing(getString()));
					engGame.blnVariableListChanged = true;
					return true;
				}
				case 15: {
					engGame.varVariables.addVariable(readScript(), parseValue());
					engGame.blnVariableListChanged = true;
					return true;
				}
				case 16: {
					engGame.varVariables.addVariable(readScript(), getString());
					engGame.blnVariableListChanged = true;
					return true;
				}
				case 17: {
					varVariables.addVariable(readScript(), getLivingThing(getString()));
					return true;
				}
				case 18: {
					varVariables.addVariable(readScript(), parseValue());
					return true;
				}
				case 19: {
					varVariables.addVariable(readScript(), getString());
					return true;
				}
				case 20: {
					return (parseScript() | parseScript());
				}
				case 21: {
					return (parseScript() & parseScript());
				}
				case 22: {
					return (parseValue() < parseValue());
				}
				case 23: {
					return (parseValue() > parseValue());
				}
				case 24: {
					return (parseValue() == parseValue());
				}
				case 25: {
					if (getLivingThing(getString()).battle != null) {
						return true;
					}
					return false;
				}
				case 26: {
					if (getLivingThing(getString()).clan.equalsIgnoreCase(getString())) {
						return true;
					}
					return false;
				}
				case 27: {
					if (getLivingThing(getString()).race.equalsIgnoreCase(getString())) {
						return true;
					}
					return false;
				}
				case 28: {
					if (getLivingThing(getString()).getItem(getString()) != null) {
						return true;
					}
					return false;
				}
				case 29: {
					// Multi map: These all need a map-name as well
					Mob mobStore = new Mob(getString(), (int) parseValue(), (int) parseValue(), engGame);
					engGame.addDuskObject(((LivingThing)varVariables.getVariable("trigger").objData).map, mobStore);
					return true;
				}
				case 30: {
					Mob mobStore = new Mob(getString(), (int) parseValue(), (int) parseValue(), engGame);
					mobStore.blnOneUse = true;
					engGame.addDuskObject(((LivingThing)varVariables.getVariable("trigger").objData).map, mobStore);
					return true;
				}
				case 31: {
					Item itmStore = engGame.getItem(getString());
					itmStore.x = (int) parseValue();
					itmStore.y = (int) parseValue();
					engGame.addDuskObject(((LivingThing)varVariables.getVariable("trigger").objData).map, itmStore);
					return true;
				}
				case 59: {
					LivingThing thnStore = getLivingThing(getString());
					String strStore2 = getString();
					int i = strStore2.indexOf(".");
					int intNum = 1;
					if (i != -1) {
						try {
							intNum = Integer.parseInt(strStore2.substring(0, i));
							strStore2 = strStore2.substring(i + 1, strStore2.length());
						} catch (NumberFormatException e) {
							intNum = 1;
						}
					}
					Item itmStore = engGame.getItem(strStore2);
					if (itmStore != null) {
						// FIXME: put this in addItem() accessor on LivingThing
						while (intNum > 0) {
							thnStore.itemList.addElement(itmStore);
							itmStore.onGetItem(engGame, thnStore);
							intNum--;
						}
						thnStore.updateItems();
					}
					return true;
				}
				case 33: {
					LivingThing thnStore = getLivingThing(getString());
					thnStore.getItemAndRemove(getString());
					thnStore.updateItems();
					return true;
				}
				case 34: {
					return getLivingThing(getString()).isWearing(getString());
				}
				case 35: {
					getLivingThing(getString()).unWear(getString());
					return true;
				}
				case 36: {
					String strStore2 = readScript();
					Variable varStore = null;
					if (strStore2.equalsIgnoreCase("global")) {
						varStore = engGame.varVariables.getVariable(readScript());
					} else {
						varStore = varVariables.getVariable(strStore2);
					}
					if (varStore != null && varStore.isNumber()) {
						return true;
					}
					return false;
				}
				case 37: {
					String strStore2 = readScript();
					Variable varStore = null;
					if (strStore2.equalsIgnoreCase("global")) {
						varStore = engGame.varVariables.getVariable(readScript());
					} else {
						varStore = varVariables.getVariable(strStore2);
					}
					if (varStore != null && varStore.isString()) {
						return true;
					}
					return false;
				}
				case 38: {
					String strStore2 = readScript();
					Variable varStore = null;
					if (strStore2.equalsIgnoreCase("global")) {
						varStore = engGame.varVariables.getVariable(readScript());
					} else {
						varStore = varVariables.getVariable(strStore2);
					}
					if (varStore != null && varStore.isLivingThing()) {
						return true;
					}
					return false;
				}
				case 39: {
					LivingThing thnStore = getLivingThing(getString());
					if (thnStore != null && thnStore.isPlayer()) {
						return true;
					}
					return false;
				}
				case 40: {
					LivingThing thnStore = getLivingThing(getString());
					if (thnStore != null && thnStore.isPet()) {
						return true;
					}
					return false;
				}
				case 41: {
					LivingThing thnStore = getLivingThing(getString());
					if (thnStore != null && thnStore.isMob()) {
						return true;
					}
					return false;
				}
				case 42: {
					LivingThing thnStore = getLivingThing(getString());
					String strStore2 = getString();
					int intIndex = strStore2.indexOf("\n");
					while (intIndex != -1) {
						thnStore.chatMessage(strStore2.substring(0, intIndex));
						strStore2 = strStore2.substring(intIndex + 1);
						intIndex = strStore2.indexOf("\n");
					}
					thnStore.chatMessage(strStore2);
					return true;
				}
				case 43: {
					LivingThing thnStore = getLivingThing(getString());
					int red = (int) parseValue();
					int green = (int) parseValue();
					int blue = (int) parseValue();
					String strStore2 = getString();
					int intIndex = strStore2.indexOf("\n");
					while (intIndex != -1) {
						thnStore.chatMessage(red, green, blue, strStore2.substring(0, intIndex));
						strStore2 = strStore2.substring(intIndex + 1);
						intIndex = strStore2.indexOf("\n");
					}
					thnStore.chatMessage(red, green, blue, strStore2);
					return true;
				}
				case 44: {
					LivingThing thnStore = getLivingThing(getString());
					bytCommand = rafScript.readByte();
					switch (bytCommand) {
						case 0: {
							// FIXME: hp damage/adjustment if in battle, should send it through as a message
							thnStore.hp += (int) parseValue();
							if (thnStore.hp > (thnStore.maxhp + thnStore.hpbon)) {
								thnStore.hp = (thnStore.maxhp + thnStore.hpbon);
							}
							thnStore.updateInfo();
							return true;
						}
						case 1: {
							thnStore.maxhp += (int) parseValue();
							thnStore.updateInfo();
							return true;
						}
						case 2: {
							thnStore.hpbon += (int) parseValue();
							thnStore.updateInfo();
							return true;
						}
						case 3: {
							thnStore.mp += (int) parseValue();
							if (thnStore.mp > (thnStore.maxmp + thnStore.mpbon)) {
								thnStore.mp = (thnStore.maxmp + thnStore.mpbon);
							}
							thnStore.updateInfo();
							return true;
						}
						case 4: {
							thnStore.maxmp += (int) parseValue();
							thnStore.updateInfo();
							return true;
						}
						case 5: {
							thnStore.mpbon += (int) parseValue();
							thnStore.updateInfo();
							return true;
						}
						case 6: {
							thnStore.damageDone += (int) parseValue();
							return true;
						}
						case 7: {
							thnStore.stre += (int) parseValue();
							if (thnStore.stre > thnStore.stre_limit) {
								thnStore.stre = thnStore.stre_limit;
							}
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 8: {
							thnStore.inte += (int) parseValue();
							if (thnStore.inte > thnStore.inte_limit) {
								thnStore.inte = thnStore.inte_limit;
							}
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 9: {
							thnStore.dext += (int) parseValue();
							if (thnStore.dext > thnStore.dext_limit) {
								thnStore.dext = thnStore.dext_limit;
							}
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 10: {
							thnStore.wisd += (int) parseValue();
							if (thnStore.wisd > thnStore.wisd_limit) {
								thnStore.wisd = thnStore.wisd_limit;
							}
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 11: {
							thnStore.cons += (int) parseValue();
							if (thnStore.cons > thnStore.cons_limit) {
								thnStore.cons = thnStore.cons_limit;
							}
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 12: {
							thnStore.strebon += (int) parseValue();
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 13: {
							thnStore.intebon += (int) parseValue();
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 14: {
							thnStore.dextbon += (int) parseValue();
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 15: {
							thnStore.wisdbon += (int) parseValue();
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 16: {
							thnStore.consbon += (int) parseValue();
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 17: {
							thnStore.acbon += (int) parseValue();
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 18: {
							thnStore.dammodbon += (int) parseValue();
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 19: {
							thnStore.changeLocBypass(thnStore.map, (int) parseValue() + thnStore.x, thnStore.y);
							return true;
						}
						case 20: {
							thnStore.changeLocBypass(thnStore.map, thnStore.x, (int) parseValue() + thnStore.y);
							return true;
						}
						case 21: {
							thnStore.changeLocBypass(thnStore.map, (int) parseValue() + thnStore.x, (int) parseValue() + thnStore.y);
							return true;
						}
						case 22: {
							thnStore.exp += (int) parseValue();
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 23: {
							thnStore.cash += (int) parseValue();
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 24: {
							String strStore2 = getString();
							int intAddValue = (int) parseValue();
							thnStore.addToSkill(strStore2, intAddValue);
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
					}
				}
				case 45: {

					LivingThing thnStore = getLivingThing(getString());
					bytCommand = rafScript.readByte();
					switch (bytCommand) {
						case 0: {
							thnStore.hp = (int) parseValue();
							if (thnStore.hp > (thnStore.maxhp + thnStore.hpbon)) {
								thnStore.hp = (thnStore.maxhp + thnStore.hpbon);
							}
							thnStore.updateInfo();
							return true;
						}
						case 1: {
							thnStore.maxhp = (int) parseValue();
							thnStore.updateInfo();
							return true;
						}
						case 2: {
							thnStore.hpbon = (int) parseValue();
							thnStore.updateInfo();
							return true;
						}
						case 3: {
							thnStore.mp = (int) parseValue();
							if (thnStore.mp > (thnStore.maxmp + thnStore.mpbon)) {
								thnStore.mp = (thnStore.maxmp + thnStore.mpbon);
							}
							thnStore.updateInfo();
							return true;
						}
						case 4: {
							thnStore.maxmp = (int) parseValue();
							thnStore.updateInfo();
							return true;
						}
						case 5: {
							thnStore.mpbon = (int) parseValue();
							thnStore.updateInfo();
							return true;
						}
						case 6: {
							thnStore.damageDone = (int) parseValue();
							return true;
						}
						case 7: {
							thnStore.stre = (int) parseValue();
							if (thnStore.stre > thnStore.stre_limit) {
								thnStore.stre = thnStore.stre_limit;
							}
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 8: {
							thnStore.inte = (int) parseValue();
							if (thnStore.inte > thnStore.inte_limit) {
								thnStore.inte = thnStore.inte_limit;
							}
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 9: {
							thnStore.dext = (int) parseValue();
							if (thnStore.dext > thnStore.dext_limit) {
								thnStore.dext = thnStore.dext_limit;
							}
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 10: {
							thnStore.wisd = (int) parseValue();
							if (thnStore.wisd > thnStore.wisd_limit) {
								thnStore.wisd = thnStore.wisd_limit;
							}
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 11: {
							thnStore.cons = (int) parseValue();
							if (thnStore.cons > thnStore.cons_limit) {
								thnStore.cons = thnStore.cons_limit;
							}
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 12: {
							thnStore.strebon = (int) parseValue();
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 13: {
							thnStore.intebon = (int) parseValue();
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 14: {
							thnStore.dextbon = (int) parseValue();
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 15: {
							thnStore.wisdbon = (int) parseValue();
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 16: {
							thnStore.consbon = (int) parseValue();
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 17: {
							thnStore.acbon = (int) parseValue();
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 18: {
							thnStore.dammodbon = (int) parseValue();
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 19: {
							thnStore.changeLocBypass(thnStore.map, (int) parseValue(), thnStore.y);
							return true;
						}
						case 20: {
							thnStore.changeLocBypass(thnStore.map, thnStore.x, (int) parseValue());
							return true;
						}
						case 21: {
							thnStore.changeLocBypass(thnStore.map, (int) parseValue(), (int) parseValue());
							return true;
						}
						case 22: {
							thnStore.exp = (int) parseValue();
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 23: {
							thnStore.cash = (int) parseValue();
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 24: {
							String strStore2 = getString();
							int intNewValue = (int) parseValue();
							thnStore.setSkill(strStore2, intNewValue);
							if (vctUpdate != null || vctUpdate.contains(thnStore)) {
								vctUpdate.addElement(thnStore);
							}
							return true;
						}
						case 25: {
							thnStore.changeLocBypass(engGame.maps.get(getString()), (int) parseValue(), (int) parseValue());
							return true;
						}
					}
				}
				case 46: {
					int dbgX, dbgY;
					short dbgValue;
					LivingThing thing = (LivingThing)varVariables.getVariable("trigger").objData;
					dbgX = (int) parseValue();
					dbgY = (int) parseValue();
					dbgValue = (short) parseValue();
					if (dbgValue == 0) {
						engGame.log.printMessage(Log.DEBUG, "Script " + strName + " called changeMap with 0 at " + dbgX + "," + dbgY);
					}
					engGame.changeMap(thing, (int)parseValue(),(int)parseValue(),(short)parseValue());
					engGame.changeMap(thing, dbgX, dbgY, dbgValue);
				}
				case 47: {
					String strOne = getString();
					return strOne.equalsIgnoreCase(getString());
				}
				case 48: {
					String strInput = "";
					LivingThing thnStore = getLivingThing(getString());
					if (!thnStore.isPlayer()) {
						engGame.log.printMessage(Log.ERROR, "parseScript():In script " + strName + ", attempt to get input from non-player");
						return false;
					}
					if (true)
						// FIXME: protocol implementation
						throw new RuntimeException("unimplementeD: cannot ask questions yet");
					// FIXME: this looks dodgy
					// FIXME: move to livingthing
					// FIXME: needs command query thing
					//	thnStore.halt();
					thnStore.stillThere();  // This puts something in the buffer
					thnStore.stillThere();  // Need to do this twice to ensure thnStore out of read loop
					thnStore.connectionThread.sleep(750);  // wait for it...
					try {
						// Empty out the BufferedReader for the answer
						//while (thnStore.instream.ready()) {
						//	thnStore.instream.read();
						//}
					} catch (Exception e) {
						engGame.log.printError("parseScript():While trying to empty read buffer to get player input", e);
					}
					//	strInput = thnStore.instream.readLine();
					varVariables.addVariable(getString(), strInput);
					//	thnStore.proceed();
					return true;
				}
				case 49: {
					// FIXME: do i need ensurevisible?
					//LivingThing thnStore = getLivingThing(getString());
					//engGame.notifyRemoved(thnStore);
					//engGame.addEntity(thnStore);
					throw new UnsupportedOperationException("script token 49 not implemented");
					//return true;
				}
				case 50: {
					LivingThing thnStore = getLivingThing(getString());
					String strStore = getString();
					if (thnStore == null) {
						return true;
					}
					strStore = strStore.replace('\n', ' ');
					if (thnStore.isPlayer()) {
						strStore = "player " + thnStore.name + " " + strStore;
					} else if (thnStore.isPet()) {
						strStore = "pet " + thnStore.name + " " + strStore;
					} else if (thnStore.isMob()) {
						strStore = "mob " + thnStore.name + " " + strStore;
					}
					engGame.log.printMessage(Log.ALWAYS, "ScriptLog:" + strName + ":" + strStore);
					return true;
				}
				case 51: {
					String strStore = getString();
					engGame.chatMessage(strStore, "default");
					return true;
				}
				case 52: {
					throw new UnsupportedOperationException("view text not implemented");
					// FIXME: This is the VIEW_TEXT command
					/*
					 LivingThing thnStore = getLivingThing(getString());
					 String strTitle = getString();
					 String strStore2 = getString();
					 String strLine = null;
					 int intIndex = strStore2.indexOf("\n");
					 thnStore.send((char) 20 + strTitle + "\n");
					 while (intIndex != -1) {
					 strLine = strStore2.substring(0, intIndex);
					 thnStore.send(strLine + "\n");
					 strStore2 = strStore2.substring(intIndex + 1);
					 intIndex = strStore2.indexOf("\n");
					 }
					 thnStore.send(strStore2 + "\n");
					 thnStore.send("--EOF--\n");
					 * */
					//return true;
				}
				case 53: {
					LivingThing thnStore = getLivingThing(getString());
					if (thnStore == null) {
						return true;
					}
					String strWhat = getString();
					if (strWhat == null) {
						return true;
					}
					if (thnStore.isPlayer()) {
						if (engGame.gplosemod != 0) {
							int gplost = (int) (thnStore.cash * engGame.gplosemod);
							thnStore.chatMessage("You have lost " + gplost + "gp.");
							thnStore.cash -= gplost;
						}
						if (engGame.explosemod != 0) {
							int explost = (int) (thnStore.exp * engGame.explosemod);
							thnStore.chatMessage("You have lost " + explost + "exp.");
							thnStore.exp -= explost;
						}
						engGame.chatMessage(thnStore.name + " has been killed by " + strWhat, "default");
						if (engGame.scrOnDeath != null && thnStore.isWorking) {
							engGame.scrOnDeath.varVariables.clearVariables();
							engGame.scrOnDeath.varVariables.addVariable("trigger", thnStore);
							engGame.scrOnDeath.runScript();
						}
					}
					return true;
				}
				case 54: {
					LivingThing thnStore = getLivingThing("trigger");
					if (thnStore != null && thnStore.isLivingThing()) {
						thnStore.isAlwaysCommands = false;
					}
					return true;
				}
				case 55: {
					LivingThing thnStore = getLivingThing(getString());
					String strClanName = getString();
					if (engGame.isGoodName(strClanName)) {
						thnStore.clan = strClanName;
						if (thnStore.privs < 1) {
							thnStore.privs = 1;
						}
					}
					return true;
				}
				case 56: {
					LivingThing thnStore = getLivingThing(getString());
					String strClanName = getString();
					if (engGame.isGoodName(strClanName)) {
						thnStore.clan = strClanName;
						if (thnStore.privs == 1) {
							thnStore.privs = 0;
						}
					}
					if (vctVisibleUpdate != null || vctVisibleUpdate.contains(thnStore)) {
						vctVisibleUpdate.addElement(thnStore);
					}
					return true;
				}
				case 57: {
					LivingThing thnStore = getLivingThing(getString());
					thnStore.lastMessageStamp = 0;
					return true;
				}
				case 58: {
					// FIXME: battle chat
					/*
					 LivingThing thnStore = getLivingThing(getString());
					 String strStore2 = getString();
					 int intIndex = strStore2.indexOf("\n");
					 while (intIndex != -1) {
					 if (thnStore.battle != null && thnStore.popup) {
					 thnStore.send("" + (char) 33 + strStore2.substring(0, intIndex + 1));
					 } else {
					 thnStore.chatMessage(strStore2.substring(0, intIndex));
					 }
					 strStore2 = strStore2.substring(intIndex + 1);
					 intIndex = strStore2.indexOf("\n");
					 }
					 if (thnStore.battle != null && thnStore.popup) {
					 thnStore.send("" + (char) 33 + strStore2 + "\n");
					 } else {
					 thnStore.chatMessage(strStore2);
					 }*/
					return true;
				}
				case 32: {
					return true;
				}
				/*case 127:
				 {
				 return false;
				 }*/
			}
		} catch (Exception e) {
			engGame.log.printError("parseScript():While parsing byte(" + bytCommand + ") of script " + strName + " at line " + intLine, e);
			return false;
		}
		engGame.log.printMessage(Log.ERROR, "parseScript():Unknown byte(" + bytCommand + ") parsing script " + strName + " at line " + intLine);
		return false;
	}

	private String parseValueForCompile() {
		try {
			String strStore = readScriptForCompile();
			//functions:
			if (strStore.equals("+")) {
				return ("+ " + parseValueForCompile() + parseValueForCompile());
			}
			if (strStore.equals("-")) {
				return ("- " + parseValueForCompile() + parseValueForCompile());
			}
			if (strStore.equals("*")) {
				return ("* " + parseValueForCompile() + parseValueForCompile());
			}
			if (strStore.equals("/")) {
				return ("/ " + parseValueForCompile() + parseValueForCompile());
			}
			if (strStore.equalsIgnoreCase("skill")) {
				return "skill " + readScriptForCompile() + " ";
			}
			return strStore + " ";
		} catch (Exception e) {
			engGame.log.printError("parseValueForCompile():Compiling script " + strName, e);
		}
		return null;
	}

	private double parseValue() {
		try {
			String strStore = getString();
			//functions:
			if (strStore.equals("+")) {
				return (parseValue() + parseValue());
			}
			if (strStore.equals("-")) {
				return (parseValue() - parseValue());
			}
			if (strStore.equals("*")) {
				return (parseValue() * parseValue());
			}
			if (strStore.equals("/")) {
				return (parseValue() / parseValue());
			}
			//random number:
			if (strStore.equalsIgnoreCase("rand")) {
				return Math.random();
			}
			//number:
			Double dblStore = getNumber(strStore);
			if (dblStore != null) {
				return dblStore.doubleValue();
			}
			//player qualities:
			LivingThing target = getLivingThing(strStore);
			strStore = getString();

			if (strStore.equalsIgnoreCase("cp")) {
				return (target.getCharacterPoints());
			}
			if (strStore.equalsIgnoreCase("tp")) {
				return (target.getTotalPoints());
			}
			if (strStore.equalsIgnoreCase("cash")) {
				return (target.cash);
			}
			if (strStore.equalsIgnoreCase("exp")) {
				return (target.exp);
			}
			if (strStore.equalsIgnoreCase("locx")) {
				return (target.x);
			}
			if (strStore.equalsIgnoreCase("locy")) {
				return (target.y);
			}
			if (strStore.equalsIgnoreCase("hp")) {
				return (target.hp);
			}
			if (strStore.equalsIgnoreCase("maxhp")) {
				return (target.maxhp + target.hpbon);
			}
			if (strStore.equalsIgnoreCase("mp")) {
				return (target.mp);
			}
			if (strStore.equalsIgnoreCase("maxmp")) {
				return (target.maxmp + target.mpbon);
			}
			if (strStore.equalsIgnoreCase("stre")) {
				return (target.stre + target.strebon);
			}
			if (strStore.equalsIgnoreCase("dext")) {
				return (target.dext + target.dextbon);
			}
			if (strStore.equalsIgnoreCase("inte")) {
				return (target.inte + target.intebon);
			}
			if (strStore.equalsIgnoreCase("wisd")) {
				return (target.wisd + target.wisdbon);
			}
			if (strStore.equalsIgnoreCase("cons")) {
				return (target.cons + target.consbon);
			}
			if (strStore.equalsIgnoreCase("dammod")) {
				return target.getDamModWithBonus();
			}
			if (strStore.equalsIgnoreCase("ac")) {
				return target.getArmorModWithBonus();
			}
			if (strStore.equalsIgnoreCase("privs")) {
				return target.privs;
			}
			if (strStore.equalsIgnoreCase("skill")) {
				String strStore2 = getString();
				int bytStore = target.getSkill(strStore2);
				if (bytStore == 0) {
					bytStore = target.getSpell(strStore2);
				}
				return bytStore;
			}
			if (strStore.equalsIgnoreCase("count")) {
				String strStore2 = getString();
				List<Item> list = target.itemList.get(strStore2);
				long total = 0;
				if (list != null) {
					total = list.size();
				}
				return total;
			}
		} catch (Exception e) {
			engGame.log.printError("parseValue()", e);
		}
		return 0;
	}
}
