package in.groan.dusk.net;

import in.groan.dusk.DuskEngine;
import in.groan.dusk.db.Privs;
import in.groan.dusk.object.entity.Entity;
import in.groan.dusk.util.Log;

import java.net.DatagramSocket;
import java.net.DatagramPacket;
import java.net.InetAddress;
import java.util.Vector;


public class TrackerThread implements Runnable {
	DuskEngine Game;
	DatagramSocket sckTracker;

	public TrackerThread(DuskEngine inGame) {
		Game = inGame;
	}

	void initializeTracker() {
        if(Game.BLN_TRACKER && sckTracker == null) {
            try {
                Game.LOG.printMessage(Log.ALWAYS, "Communicating with tracker");
                sckTracker = new DatagramSocket(Game.TRACKER_PORT);
                sckTracker.setSoTimeout(0); //no timeout
                String s1 = "\000" + Game.SERVER_NAME;
                DatagramPacket datagrampacket = new DatagramPacket(s1.getBytes(), s1.length());
                datagrampacket.setAddress(InetAddress.getByName("dusk.wesowin.org"));
                datagrampacket.setPort(7520);
                sckTracker.send(datagrampacket);
                s1 = "\002" + Game.TRACKER_PORT;
                datagrampacket.setData(s1.getBytes());
                datagrampacket.setLength(s1.length());
                sckTracker.send(datagrampacket);
                if(!Game.WEBSITE.equals("none"))
                {
                    String s2 = "\003" + Game.WEBSITE;
                    datagrampacket.setData(s2.getBytes());
                    datagrampacket.setLength(s2.length());
                    sckTracker.send(datagrampacket);
                }
                Game.BLN_TRACKER = true;
            }
            catch(Exception e)
            {
                Game.LOG.printError("initializeTracker():Failed to contact tracker, disabling", e);
                sckTracker = null;
                Game.BLN_TRACKER = false;
            }
        }
	}
	
	void updateTrackerUsers()
    {
        if(!Game.BLN_TRACKER)
            return;

		try
        {
        	int count=0;
			Entity thnStore=null;
        	for (int i=0;i<Game.vctSockets.size();i++)
        	{
				thnStore = (Entity)Game.vctSockets.elementAt(i);
        		if (!((thnStore.PRIVS == Privs.ADMIN) && (thnStore.hasCondition("invis"))))
        		{
        			count++;
        		}
        	}
            String s = "\001" + count;
            DatagramPacket datagrampacket = new DatagramPacket(s.getBytes(), s.length());
            datagrampacket.setAddress(InetAddress.getByName("dusk.wesowin.org"));
            datagrampacket.setPort(7520);
            sckTracker.send(datagrampacket);
        }catch(Exception e)
        {
			Game.LOG.printError("updateTrackerUsers()", e);
        }
    }

	void pingTracker()
	{
        if(!Game.BLN_TRACKER)
            return;

		DatagramPacket pckStore = new DatagramPacket(new byte[1],1);

		try
		{
			pckStore.setAddress(InetAddress.getByName("dusk.wesowin.org"));
			pckStore.setPort(7520);
			pckStore.setData("\005".getBytes());
			pckStore.setLength(1);
			sckTracker.send(pckStore);
		}catch(Exception e)
		{
			Game.LOG.printError("pingTracker():While communicating with tracker", e);
			sckTracker = null;
			Game.BLN_TRACKER = false;
		}
	}

    void removeFromTracker()
    {
        if(!Game.BLN_TRACKER)
            return;

		try
        {
            String s = "\004";
            DatagramPacket datagrampacket = new DatagramPacket(s.getBytes(), s.length());
            datagrampacket.setAddress(InetAddress.getByName("dusk.wesowin.org"));
            datagrampacket.setPort(7520);
            sckTracker.send(datagrampacket);
        }
        catch(Exception e)
        {
			Game.LOG.printError("removeFromTracker()", e);
        }
    }

	public void run()
	{
        if(!Game.BLN_TRACKER)
            return;

		Game.LOG.printMessage(Log.ALWAYS, "Cancelling tracker thread");

		//initializeTracker();

		while (Game.BLN_TRACKER)
		{
			try
			{
				Thread.currentThread().sleep(300000);
			} catch (Exception e)
			{
				Game.LOG.printError("TrackerThread.run()", e);
			}
			updateTrackerUsers();
			pingTracker();
		}

		removeFromTracker();
	}
}