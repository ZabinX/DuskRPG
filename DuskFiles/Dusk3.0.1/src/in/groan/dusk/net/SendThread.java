package in.groan.dusk.net;

import in.groan.dusk.object.entity.Entity;

import java.io.*;

public class SendThread implements Runnable
{
	Entity thnPlayer;

	public SendThread(Entity thnStore)
	{
		thnPlayer = thnStore;
	}

    public void run()
    {
		SendData sndData;
		while (!thnPlayer.BLN_STOP_THR)
		{
			sndData = (SendData)thnPlayer.QUE_MSG.pop();
			try
			{
				switch (sndData.nDataType)
				{
					case SendData.STRING:
					{
						thnPlayer.OUT.writeBytes(sndData.strData);
						break;
					}
					case SendData.BYTE:
					{
						thnPlayer.OUT.writeByte(sndData.bytData);
						break;
					}
					case SendData.LONG:
					{
						thnPlayer.OUT.writeLong(sndData.lngData);
						break;
					}
				}
			} catch(Exception e)
			{
				thnPlayer.Game.LOG.printError("SendThread.run():"+sndData.nDataType+" to "+thnPlayer.NAME, e);
				thnPlayer.BLN_WORKING = false;
				thnPlayer.BLN_STOP_THR = true;
				thnPlayer.close();
			}
		}
    }
}
