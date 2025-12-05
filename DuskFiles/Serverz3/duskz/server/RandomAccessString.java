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

import java.io.*;

// TODO: wont be needed with javascript
@Deprecated
public class  RandomAccessString
{
	private String strContent = null;
	private String strCurrentContent = null;
	private int lCurrentPosition;

	public RandomAccessString(String strFileName)
	throws IOException
	{
		lCurrentPosition = -1;
		File filView = new File(strFileName);
		RandomAccessFile rafFile = new RandomAccessFile(filView, "r");
		byte [] buffer = new byte[(int)rafFile.length()];
		rafFile.readFully(buffer);
		rafFile.close();
		strContent = new String(buffer);
		strCurrentContent = strContent;
		lCurrentPosition = 0;
	}

	public void close()
	{
		strContent = null;
		strCurrentContent = null;
	}

	public int getFilePointer()
	{
		return lCurrentPosition;
	}

	public void seek(int lSeekPosition)
	{
		if (lSeekPosition >= 0 && lSeekPosition < strContent.length())
		{
			lCurrentPosition = lSeekPosition;
			strCurrentContent = strContent.substring(lCurrentPosition);
		}
	}

	public String readLine()
	{
		if (lCurrentPosition == -1 || strCurrentContent == null)
		{
			return null;
		}
		String strReturn;
		int newline = strCurrentContent.indexOf("\r");
		if (newline == -1)
		{
			newline = strCurrentContent.indexOf("\n");
			if (newline == -1)
			{
				strReturn = strCurrentContent;
				strCurrentContent = null;
				lCurrentPosition = -1;
				return strReturn;
			}
		}
		strReturn = strCurrentContent.substring(0, newline);
		while((newline < strCurrentContent.length())
			  && ((strCurrentContent.charAt(newline) == '\r')
			  || (strCurrentContent.charAt(newline) == '\n')))
		{
			newline++;
		}
		lCurrentPosition += newline;
		strCurrentContent = strCurrentContent.substring(newline);
		return strReturn;
	}

	public byte readByte()
	throws IOException
	{
		if (lCurrentPosition == -1)
		{
			throw new IOException();
		}
		byte bReturn = (byte)strContent.charAt(lCurrentPosition);
		lCurrentPosition++;
		strCurrentContent = strContent.substring(lCurrentPosition);
		return bReturn;
	}
}
