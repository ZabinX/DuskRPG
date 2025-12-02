import java.util.Properties;
import java.io.FileInputStream;
import java.io.PrintStream;
import java.lang.System;

class Config extends Properties
{
	DuskEngine engGame;

	public Config(DuskEngine inGame, String strFileName)
	{
		engGame = inGame;
		try
		{
			load(new FileInputStream(strFileName));
		} catch (Exception e)
		{
			engGame.log.printError("Config::Config(String) - Error loading preferences.",e);
		}
	}

	public String getString(String strKey, String strDefault)
	{
		String strReturn = getProperty(strKey, strDefault);
		engGame.log.printMessage(Log.VERBOSE, strKey+" = "+strReturn);
		return strReturn;
	}

	public int getInt(String strKey, int intDefault)
	{
		int intReturn = Integer.parseInt(getProperty(strKey, String.valueOf(intDefault)));
		engGame.log.printMessage(Log.VERBOSE, strKey+" = "+intReturn);
		return intReturn;
	}

	public boolean getBoolean(String strKey, boolean blnDefault)
	{
		boolean blnReturn = (Boolean.valueOf(getProperty(strKey, String.valueOf(blnDefault))).booleanValue());
		engGame.log.printMessage(Log.VERBOSE, strKey+" = "+blnReturn);
		return blnReturn;
	}

	public long getLong(String strKey, long lngDefault)
	{
		long lngReturn = Long.parseLong(getProperty(strKey, String.valueOf(lngDefault)));
		engGame.log.printMessage(Log.VERBOSE, strKey+" = "+lngReturn);
		return lngReturn;
	}

	public double getDouble(String strKey, double dblDefault)
	{
		double dblReturn = Double.parseDouble(getProperty(strKey, String.valueOf(dblDefault)));
		engGame.log.printMessage(Log.VERBOSE, strKey+" = "+dblReturn);
		return dblReturn;
	}
}
