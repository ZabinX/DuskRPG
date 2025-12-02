import java.io.*;

class  RandomAccessString
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
