import java.net.DatagramSocket;
import java.net.DatagramPacket;
import java.net.InetAddress;
import java.util.Vector;


public class TrackerThread implements Runnable
{
	DuskEngine engGame;
	DatagramSocket sckTracker;

	TrackerThread(DuskEngine inGame)
	{
		engGame = inGame;
	}

	void initializeTracker()
	{
        if(engGame.tracker && sckTracker == null)
        {
            try
            {
                engGame.log.printMessage(Log.ALWAYS, "Communicating with tracker");
                sckTracker = new DatagramSocket(engGame.trackerport);
                sckTracker.setSoTimeout(0); //no timeout
                String s1 = "\000" + engGame.trackername;
                DatagramPacket datagrampacket = new DatagramPacket(s1.getBytes(), s1.length());
                datagrampacket.setAddress(InetAddress.getByName("dusk.wesowin.org"));
                datagrampacket.setPort(7520);
                sckTracker.send(datagrampacket);
                s1 = "\002" + engGame.port;
                datagrampacket.setData(s1.getBytes());
                datagrampacket.setLength(s1.length());
                sckTracker.send(datagrampacket);
                if(!engGame.site.equals("none"))
                {
                    String s2 = "\003" + engGame.site;
                    datagrampacket.setData(s2.getBytes());
                    datagrampacket.setLength(s2.length());
                    sckTracker.send(datagrampacket);
                }
                engGame.tracker = true;
            }
            catch(Exception e)
            {
                engGame.log.printError("initializeTracker():Failed to contact tracker, disabling", e);
                sckTracker = null;
                engGame.tracker = false;
            }
        }
	}
	
	void updateTrackerUsers()
    {
        if(!engGame.tracker)
            return;

		try
        {
        	int count=0;
			LivingThing thnStore=null;
        	for (int i=0;i<engGame.vctSockets.size();i++)
        	{
				thnStore = (LivingThing)engGame.vctSockets.elementAt(i);
        		if (!(thnStore.privs > 2 && thnStore.hasCondition("invis")))
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
			engGame.log.printError("updateTrackerUsers()", e);
        }
    }

	void pingTracker()
	{
        if(!engGame.tracker)
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
			engGame.log.printError("pingTracker():While communicating with tracker", e);
			sckTracker = null;
			engGame.tracker = false;
		}
	}

    void removeFromTracker()
    {
        if(!engGame.tracker)
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
			engGame.log.printError("removeFromTracker()", e);
        }
    }

	public void run()
	{
        if(!engGame.tracker)
            return;

		engGame.log.printMessage(Log.ALWAYS, "Starting tracker thread");

		initializeTracker();

		while (engGame.tracker)
		{
			try
			{
				Thread.currentThread().sleep(300000);
			} catch (Exception e)
			{
				engGame.log.printError("TrackerThread.run()", e);
			}
			updateTrackerUsers();
			pingTracker();
		}

		removeFromTracker();
	}
}