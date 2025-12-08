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
			msg = (DuskMessage)thnPlayer.qMessage.pop();
			try
			{
                ByteArrayOutputStream byteStream = new ByteArrayOutputStream();
                DataOutputStream dataStream = new DataOutputStream(byteStream);
                msg.sendMessage(dataStream);
                dataStream.flush();

                byte[] messageBytes = byteStream.toByteArray();
                thnPlayer.stmOut.writeShort(messageBytes.length);
                thnPlayer.stmOut.write(messageBytes);
                thnPlayer.stmOut.flush();
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
