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

import java.io.PrintStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;


public class Log
{
    public static final int ALWAYS = 0;
    public static final int INFO = 1;
    public static final int ERROR = 2;
    public static final int VERBOSE = 3;
    public static final int DEBUG = 4;


	private static final String MSG_ALWAYS = "ALWAYS";
	private static final String MSG_INFO = "INFO";
	private static final String MSG_ERROR = "ERROR";
	private static final String MSG_VERBOSE = "VERBOSE";
	private static final String MSG_DEBUG = "DEBUG";
	private static final String LOG_SEP = "::";
	private PrintStream psOut;
    private int logLevel = ERROR;
	private SimpleDateFormat formatter;

	public Log(PrintStream ps)
	{
		formatter = new SimpleDateFormat("EEE MMM dd hh:mm:ss yyyy", Locale.getDefault());
		if (ps != null)
		{
			psOut = ps;
		} else
		{
			psOut = System.out;
		}
	}

    public void setLogLevel(int newLogLevel)
	{
        if ((newLogLevel >= ALWAYS) && (newLogLevel <= DEBUG))
		{
            logLevel = newLogLevel;
        }
    }

    public int getLogLevel()
	{
        return logLevel;
    }

	private void printTimeStamp(int level)
	{
		switch(level)
		{
			case ALWAYS:
			{
				psOut.print(MSG_ALWAYS+LOG_SEP);
				break;
			}
			case ERROR:
			{
				psOut.print(MSG_ERROR+LOG_SEP);
				break;
			}
			case INFO:
			{
				psOut.print(MSG_INFO+LOG_SEP);
				break;
			}
			case VERBOSE:
			{
				psOut.print(MSG_VERBOSE+LOG_SEP);
				break;
			}
			case DEBUG:
			{
				psOut.print(MSG_DEBUG+LOG_SEP);
				break;
			}
		}
		psOut.print(formatter.format(new Date())+LOG_SEP);
		if (logLevel >= DEBUG)
		{
			psOut.print("thread="+Thread.currentThread().getName()+LOG_SEP);
		}
	}

	public void printMessage(int level, String strMessage)
	{
        if (level <= logLevel)
		{
			printTimeStamp(level);
			psOut.println(strMessage);
		}
	}

	public void printError(String strMessage, Exception e)
	{
        if (logLevel >= ERROR)
		{
			printTimeStamp(ERROR);
			psOut.print(strMessage+LOG_SEP);
			if (logLevel >= DEBUG)
			{
				e.printStackTrace(psOut);
			} else
			{
				psOut.println(e.toString());
			}
		}
	}
}
