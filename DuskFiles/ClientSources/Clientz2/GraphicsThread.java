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
import javax.imageio.ImageIO;
import java.util.concurrent.CountDownLatch;

public class GraphicsThread implements Runnable
{
	Dusk appParent;
	Thread thread;
	private CountDownLatch imageLatch;
	boolean blnAudioLoaded = false;

	GraphicsThread(Dusk inParent, CountDownLatch latch)
	{
		appParent = inParent;
		imageLatch = latch;
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
				appParent.imgOriginalMap = ImageIO.read(new URL(appParent.strWebAssetPath+"/images/map.gif"));
				appParent.imgOriginalMapAlpha = ImageIO.read(new URL(appParent.strWebAssetPath+"/images/mapalpha.gif"));
				appParent.imgOriginalMapAlpha2 = ImageIO.read(new URL(appParent.strWebAssetPath+"/images/mapalpha2.gif"));
				appParent.imgOriginalPlayers = ImageIO.read(new URL(appParent.strWebAssetPath+"/images/players.gif"));
				appParent.imgOriginalSprites = ImageIO.read(new URL(appParent.strWebAssetPath+"/images/sprites.gif"));
			}
			catch(IOException e)
			{
				System.err.println("Error loading images: "+e.toString());
			}
		}
		else
		{
			prefix = "/app/rc/";
			try
			{
				appParent.imgOriginalMap = ImageIO.read(new File(prefix+"somedusk/images/map.gif"));
				appParent.imgOriginalMapAlpha = ImageIO.read(new File(prefix+"somedusk/images/mapalpha.gif"));
				appParent.imgOriginalMapAlpha2 = ImageIO.read(new File(prefix+"somedusk/images/mapalpha2.gif"));
				appParent.imgOriginalPlayers = ImageIO.read(new File(prefix+"somedusk/images/players.gif"));
				appParent.imgOriginalSprites = ImageIO.read(new File(prefix+"somedusk/images/sprites.gif"));
			}
			catch(IOException e)
			{
				System.err.println("Error loading images: "+e.toString());
			}
		}
		try
		{
			MediaTracker mdtTracker = new MediaTracker(appParent.frame);
			mdtTracker.addImage(appParent.imgOriginalMap,0);
			mdtTracker.addImage(appParent.imgOriginalMapAlpha,0);
			mdtTracker.addImage(appParent.imgOriginalMapAlpha2,0);
			mdtTracker.addImage(appParent.imgOriginalPlayers,0);
			mdtTracker.addImage(appParent.imgOriginalSprites,0);
			mdtTracker.waitForAll();
		}catch(Exception e)
		{
			System.err.println("Error while waiting for images: "+e.toString());
		} finally {
			if (imageLatch != null) {
				imageLatch.countDown();
			}
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
		appParent.blnLoaded = true;
        appParent.update(0.0008); // Initial update with a small delta to avoid large initial jump
		appParent.paint();

		// The main game loop.
		long lastTime = System.nanoTime();
		while (true)
		{
			if (appParent.blnConnected && appParent.blnLoaded)
			{
				if (!blnAudioLoaded) {
					blnAudioLoaded = true;
					if (appParent.blnMusic) {
//						appParent.preloadAudioInBackground();
					}
				}
				try
				{
					long currentTime = System.nanoTime();
					double deltaTime = (currentTime - lastTime) / 1_000_000_000.0;
					lastTime = currentTime;

					// Clamp delta time to avoid large jumps if the game hangs
					if (deltaTime > 0.1) {
						deltaTime = 0.1;
					}
					
					appParent.update(deltaTime);
					appParent.paint();

					// A minimal sleep to prevent the loop from running at max speed and to allow other threads to run.
					Thread.sleep(33); 
				}catch(Exception e){
					System.err.println("Error in graphics thread: " + e.toString());
				}
			}
			else
			{
				// If not loaded or connected, sleep longer to avoid burning CPU.
				try
				{
					Thread.sleep(90);
				}catch(Exception e){}
			}
		}
	}
}
