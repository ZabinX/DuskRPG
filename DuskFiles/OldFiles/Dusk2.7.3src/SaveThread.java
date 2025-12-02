import java.util.Vector;

public class SaveThread implements Runnable
{
	DuskEngine engGame;

	SaveThread(DuskEngine inGame)
	{
		engGame = inGame;
	}

	public void run()
	{
		while (true)
		{
			try
			{
				Thread.currentThread().sleep(3600000);		// sleep for an hour
				engGame.saveMap();			// save the game

				// Clear out the auto banned IP addresses once an hour
				engGame.vctBannedIP = new Vector(0,1);

			} catch(Exception e)
			{
				engGame.log.printError("SaveThread.run()", e);
			}
		}
	}
}