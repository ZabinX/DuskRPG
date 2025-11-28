import java.io.*;

public class SendThread implements Runnable
{
	LivingThing thnPlayer;

	public SendThread(LivingThing thnStore)
	{
		thnPlayer = thnStore;
	}

    public void run()
    {
		DuskMessage msg;
		while (!thnPlayer.blnStopThread)
		{
			msg = thnPlayer.qMessage.pop();
			try
			{
				msg.sendMessage(thnPlayer.stmOut);
			} catch(Exception e)
			{
				thnPlayer.engGame.log.printError("SendThread.run(): to "+thnPlayer.strName, e);
				thnPlayer.blnWorking = false;
				thnPlayer.blnStopThread = true;
				thnPlayer.close();
			}
		}
    }
}

