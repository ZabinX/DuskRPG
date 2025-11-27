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
 * Michael Zucchi 2013-Mar - redone for new i/o api like printf. Fixed the
 * priority orderings of the messages.
 */
package duskz.server.entityz;

import java.io.PrintStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

/**
 * Simple logging interface.
 */
public class Log {

	public static final int DEBUG = 0;
	public static final int ALWAYS = 1;
	public static final int VERBOSE = 2;
	public static final int INFO = 3;
	public static final int ERROR = 4;
	private static final String[] msg = {
		"DEBUG",
		"ALWAYS",
		"VERBOSE",
		"INFO",
		"ERROR"
	};
	private static final String LOG_SEP = "::";
	private PrintStream out;
	private int logLevel = DEBUG;
	private SimpleDateFormat formatter;

	public Log(PrintStream ps) {
		formatter = new SimpleDateFormat("EEE MMM dd hh:mm:ss yyyy", Locale.ROOT);
		out = ps == null ? System.out : ps;
	}

	public void setLogLevel(int newlevel) {
		newlevel = Math.max(newlevel, ALWAYS);
		logLevel = Math.min(newlevel, ERROR);
	}

	public int getLogLevel() {
		return logLevel;
	}

	private void printTimeStamp(int level) {
		out.print(msg[level]);
		out.print(":");
		out.print(formatter.format(new Date()));
		out.print(":");
		if (logLevel <= DEBUG) {
			out.print("thread=" + Thread.currentThread().getName());
			out.print(":");
		}
	}

	public void printf(int level, String strMessage, Object... args) {
		if (level >= logLevel) {
			printTimeStamp(level);
			out.printf(strMessage, args);
			out.println();
		}
	}

	public void printf(Exception ex, String strMessage, Object... args) {
		printTimeStamp(ERROR);
		out.printf(strMessage, args);
		out.print(": ");
		if (logLevel <= DEBUG) {
			ex.printStackTrace(out);
		} else {
			out.println(ex.toString());
		}
	}
}
