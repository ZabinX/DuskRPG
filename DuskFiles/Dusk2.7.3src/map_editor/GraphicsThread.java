import java.awt.*;
import java.awt.event.*;
import java.io.*;
import java.util.Vector;
import java.lang.Math;
import java.lang.reflect.Array;
import java.util.StringTokenizer;
import java.applet.*;
import java.net.*;

public class GraphicsThread implements Runnable
{
	DuskMapEditor appParent;

	GraphicsThread(DuskMapEditor inParent)
	{
		appParent = inParent;
	}
	
	public void run()
	{
		int timer=0;
		while (true)
		{
			try
			{
				Thread.sleep(10);
			}catch(Exception e){}
			timer++;
			if (timer == 20)
			{
				appParent.paint(appParent.g);
				timer = 0;
			}
		}
	}
}
