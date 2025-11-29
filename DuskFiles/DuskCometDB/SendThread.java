/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk.

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or
remove this license, and accompany it with all redistributions.
*/

import java.io.DataOutputStream;
import duskz.protocol.DuskMessage;


/**
* SendThread is a thread that takes any commands off of the player's FifoQueue
* and sends them to the client.  This frees up the main thread from having to
* wait on network sends, which can sometimes be slow, especially on dialup
* connections.
*
* @author Tom Weingarten
*/
class SendThread implements Runnable
{
	LivingThing thnPlayer;
	FifoQueue queStore;
	DuskEngine engGame;
	DataOutputStream stmOut;
	boolean blnStop = false;
	
	public SendThread(LivingThing inPlayer, FifoQueue inQueue, DuskEngine inEngine, DataOutputStream inStream)
	{
		thnPlayer = inPlayer;
		queStore = inQueue;
		engGame = inEngine;
		stmOut = inStream;
	}
	
	public void run()
	{
		while(!blnStop)
		{
			try
			{
				if (!queStore.isEmpty())
				{
					DuskMessage msg = queStore.pop();
					if (msg != null)
					{
						synchronized(stmOut)
						{
							msg.sendMessage(stmOut);
						}
					}
				}
				Thread.sleep(100);
			}catch(Exception e)
			{
				engGame.log.printError("at SendThread.run()",e);
				thnPlayer.close();
				blnStop = true;
			}
		}
	}
}

