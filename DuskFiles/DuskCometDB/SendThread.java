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
		SendData sndData;
		while (!thnPlayer.blnStopThread)
		{
			sndData = (SendData)thnPlayer.qMessage.pop();
			try
			{
				switch (sndData.nDataType)
				{
					case SendData.STRING:
					{
						thnPlayer.stmOut.writeBytes(sndData.strData);
						break;
					}
					case SendData.BYTE:
					{
						thnPlayer.stmOut.writeByte(sndData.bytData);
						break;
					}
					case SendData.LONG:
					{
						thnPlayer.stmOut.writeLong(sndData.lngData);
						break;
					}
				}
			} catch(Exception e)
			{
				thnPlayer.engGame.log.printError("SendThread.run():"+sndData.nDataType+" to "+thnPlayer.strName, e);
				thnPlayer.blnWorking = false;
				thnPlayer.blnStopThread = true;
				thnPlayer.close();
			}
		}
    }
}
