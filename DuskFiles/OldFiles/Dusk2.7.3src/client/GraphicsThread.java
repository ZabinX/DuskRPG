/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk.

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or
remove this license, and accompany it with all redistributions.
*/
package client;
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
	Dusk appParent;
	Thread thread;
	Vector vctToMove;

	GraphicsThread(Dusk inParent)
	{
		appParent = inParent;
		vctToMove = new Vector(0,5);
	}
	
	void addEntityToMove(Entity entStore, int direction)
	{
		entStore.intTicks = 12;
		entStore.intMoveDirection = direction;
		vctToMove.addElement(entStore);
	}

	public void run()
	{
		int i=0;
		String prefix;
		if (appParent.blnApplet)
		{
			prefix = "";
			try
			{
				appParent.imgOriginalMap = appParent.appShell.getImage(new URL(appParent.strWebAssetPath+"/images/map.gif"));
				appParent.imgOriginalPlayers = appParent.appShell.getImage(new URL(appParent.strWebAssetPath+"/images/players.gif"));
				appParent.imgOriginalSprites = appParent.appShell.getImage(new URL(appParent.strWebAssetPath+"/images/sprites.gif"));
//				appParent.imgOriginalMap = appParent.appShell.getImage(new URL(prefix+appParent.strRCAddress+"/images/map.png"));
//				appParent.imgOriginalPlayers = appParent.appShell.getImage(new URL(prefix+appParent.strRCAddress+"/images/players.png"));
//				appParent.imgOriginalSprites = appParent.appShell.getImage(new URL(prefix+appParent.strRCAddress+"/images/sprites.png"));
			}catch(Exception e)
			{
				System.err.println("Error loading images: "+e.toString());
			}
		}
		else
		{
			prefix = "rc/";
			appParent.imgOriginalMap = Toolkit.getDefaultToolkit().getImage(prefix+"somedusk/images/map.gif");
			appParent.imgOriginalPlayers = Toolkit.getDefaultToolkit().getImage(prefix+"somedusk/images/players.gif");
			appParent.imgOriginalSprites = Toolkit.getDefaultToolkit().getImage(prefix+"somedusk/images/sprites.gif");
//			appParent.imgOriginalMap = Toolkit.getDefaultToolkit().getImage(prefix+appParent.strRCAddress+"/images/map.png");
//			appParent.imgOriginalPlayers = Toolkit.getDefaultToolkit().getImage(prefix+appParent.strRCAddress+"/images/players.png");
//			appParent.imgOriginalSprites = Toolkit.getDefaultToolkit().getImage(prefix+appParent.strRCAddress+"/images/sprites.png");
		}
		try
		{
			MediaTracker mdtTracker = new MediaTracker(appParent.frame);
			mdtTracker.addImage(appParent.imgOriginalMap,0);
			mdtTracker.addImage(appParent.imgOriginalPlayers,0);
			mdtTracker.addImage(appParent.imgOriginalSprites,0);
			mdtTracker.waitForAll();
		}catch(Exception e)
		{
			System.err.println("Error while waiting for images: "+e.toString());
		}
		appParent.numMapImages = (appParent.imgOriginalMap.getWidth(null)/appParent.imgOriginalMap.getHeight(null))-1;
		appParent.numPlayerImages = ((appParent.imgOriginalPlayers.getWidth(null)/appParent.imgOriginalPlayers.getHeight(null))/8)-1;
		appParent.numSpriteImages = (appParent.imgOriginalSprites.getWidth(null)/appParent.imgOriginalSprites.getHeight(null))-1;
		appParent.addText((appParent.numMapImages+appParent.numPlayerImages+appParent.numSpriteImages)+" image files loaded.\n");
		appParent.scaleImages();
		if (!appParent.blnApplet)
		{
			prefix = "file:"+System.getProperty("user.dir")+prefix;
		}
		//Load audio
		if (appParent.blnApplet)
		{
		URL urlStore;
		appParent.addText("Loading audio.\n");
		Vector vctStore = new Vector(0);
/*
		try
		{
			i=0;
			urlStore = new URL(appParent.strRCAddress+"audio/sfx/"+i+".au");
			while(urlStore.openStream() != null)
			{
				vctStore.addElement(appParent.appShell.getAudioClip(urlStore));
				i++;
				urlStore = new URL(appParent.strRCAddress+"audio/sfx/"+i+".au");
			}
		}catch (Exception e)
		{
		}
*/
try {
    urlStore = new URL(prefix+appParent.strRCAddress+"/audio/sfx/0.au");
    HttpURLConnection urlConnection = (HttpURLConnection)urlStore.openConnection
();
    vctStore.addElement(Applet.newAudioClip(urlStore));
    urlStore = new URL(prefix+appParent.strRCAddress+"/audio/sfx/1.au");
    urlConnection = (HttpURLConnection)urlStore.openConnection();
    vctStore.addElement(Applet.newAudioClip(urlStore));
}catch (Exception e){}
		appParent.audSFX = new AudioClip[vctStore.size()];
		try
		{
			for (i=0;i<vctStore.size();i++)
			{
				appParent.audSFX[i] = (AudioClip)vctStore.elementAt(i);
			}
		}catch (Exception e)
		{
			System.err.println("Error loading audio: "+e.toString());
			appParent.addText("Error loading audio: "+e.toString()+"\n");
			return;
		}
		appParent.addText((Array.getLength(appParent.audSFX))+" audio files loaded.\n");
		}
		appParent.update();
		appParent.paint();
		int timer=0;
		Entity entStore;
		while (true)
		{
			try
			{
				Thread.sleep(10);
			}catch(Exception e){}
			timer++;
			synchronized(appParent.vctEntities)
			{
			for (i=0;i<vctToMove.size();i++)
			{
				entStore = (Entity)vctToMove.elementAt(i);
				synchronized(entStore)
				{
				if (entStore.intTicks == 0)
				{
					vctToMove.removeElement(entStore);
					switch (entStore.intMoveDirection)
					{
						case 0: //north
						{
//							entStore.intLocY -= 0.5;
							if (entStore.intStep != -1)
								entStore.intStep = 0;
							break;
						}
						case 1: //south
						{
//							entStore.intLocY += 0.5;
							if (entStore.intStep != -1)
								entStore.intStep = 2;
							break;
						}
						case 2: //west
						{
//							entStore.intLocX -= 0.5;
							if (entStore.intStep != -1)
								entStore.intStep = 4;
							break;
						}
						case 3: //east
						{
//							entStore.intLocX += 0.5;
							if (entStore.intStep != -1)
								entStore.intStep = 6;
							break;
						}
					}
					entStore.intMoveDirection = -1;
					appParent.reloadChoiceAttack();
//					appParent.update();
					appParent.paint();
				}else
					entStore.intTicks--;
				}
			}
			}
			if (timer == 25)
			{
				appParent.paint();
				timer = 0;
			}
		}
	}
}
