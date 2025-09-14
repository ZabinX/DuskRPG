/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk.

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or
remove this license, and accompany it with all redistributions.
*/

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
    int intAnimTick = 0;

	GraphicsThread(Dusk inParent)
	{
		appParent = inParent;
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
		appParent.intOriginalTileSize = appParent.imgOriginalMap.getHeight(null);
		appParent.numPlayerImages = ((appParent.imgOriginalPlayers.getWidth(null)/appParent.imgOriginalPlayers.getHeight(null))/8)-1;
		appParent.intOriginalPlayerSize = appParent.imgOriginalPlayers.getHeight(null);
		appParent.numSpriteImages = (appParent.imgOriginalSprites.getWidth(null)/appParent.imgOriginalSprites.getHeight(null))-1;
		appParent.intOriginalSpriteSize = appParent.imgOriginalSprites.getHeight(null);
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
        appParent.update(intAnimTick);
		appParent.paint();

		// The main game loop.
		while (true)
		{
			if (appParent.blnConnected && appParent.blnLoaded)
			{
				try
				{
					// Increment animation tick. Reset to avoid overflow.
					intAnimTick++;
					if (intAnimTick > 10000) {
						intAnimTick = 0;
					}

					appParent.update(intAnimTick);
					appParent.paint();

					// Sleep to control frame rate, aiming for ~50 FPS.
					Thread.sleep(20);
				}catch(Exception e){
					System.err.println("Error in graphics thread: " + e.toString());
				}
			}
			else
			{
				// If not loaded or connected, sleep longer to avoid burning CPU.
				try
				{
					Thread.sleep(100);
				}catch(Exception e){}
			}
		}
	}
}

