/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk.

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or
remove this license, and accompany it with all redistributions.
*/

/*
Special Thanks to:

Randall Leeds for the following code portions
as well as many other small changes and deprecation fixes:
Float/Unfloat

Joe Alloway for shadowed text and the !set command
*/

import com.formdev.flatlaf.FlatDarkLaf;
import com.formdev.flatlaf.FlatLightLaf;
import java.awt.*;
import java.awt.image.*;
import java.awt.event.*;
import java.io.*;
import java.util.Vector;
import java.util.Iterator;
import java.lang.Math;
import java.lang.reflect.Array;
import java.util.StringTokenizer;
import java.applet.*;
import java.net.*;
import javax.swing.text.*;
import javax.swing.JScrollBar;
import javax.swing.UIManager;

public class Dusk implements Runnable,MouseListener,KeyListener,ComponentListener, ImageObserver
{
	static String strVersion="2.7.1.Z47";
	
	int numSpriteImages,
	    numPlayerImages,
	    numMapImages,
	    intOriginalTileSize,
	    intOriginalPlayerSize,
	    intOriginalSpriteSize,
        MapRows=0,
        MapColumns=0,
        LocX=0,
        LocY=0,
        inthp,
        intmaxhp,
        intsp,
        intmaxsp,
        range=1;
	String strTile = "-1";
    long loncash;
	boolean blnLoaded,
                        blnRefreshing,
			blnMenuRefresh,
			blnConnected=false,
			blnApplet;
	int intMusicTypes;
	int intNumSongs[];
    AudioClip audSFX[],
    			audMusic[][];
    AudioClip audMusicPlaying;
    Applet appShell;
    String strRCAddress;
    String strWebAssetPath = "";
    
    Vector vctMerchantItems,
    		vctSell,
    		vctChoiceDropItems,
    		vctChoiceActionItems,
    		vctEntities,
                vctTileAnims;
    
	Image imgOriginalSprites;
	Image imgOriginalPlayers;
	Image imgOriginalMap;
	Image imgSprites;
	Image imgPlayers;
	Image imgMap;
	Image imgDisplay;
	
	Socket sckConnection;
	DataOutputStream stmOut;
	DataInputStream stmIn;
	
	short shrMap[][];
	int mapSizeX=21,
		mapSizeY=11,
		viewRangeX=10,
		viewRangeY=5;
	
	Entity entEntities[][],
			entBuffer[][];
	
	Entity player;
	boolean intStep,
			blnMusic=true;
    Thread thrRun;
    	
    int intImageSize = 36;
    
    String strSet = null;
    
    MainFrame frame;
	BattleFrame frmBattle;
 //       MagicFrame frmMagic;
	MerchantFrame frmMerchant;
	
	Graphics g;
	Graphics gD;
	GraphicsThread thrGraphics;
	
	String address = "dusk.comet-richter.ts.net";
	int port = 7474;
    
    public Dusk(Applet parent)
    {
    	appShell = parent;
    	blnApplet = true;
    	startUp();
    }
    
	public Dusk() 
	{
    	startUp();
	}
	
	void startUp()
	{
		try
		{
                try
    		{
        		UIManager.setLookAndFeel( new FlatDarkLaf() );
   			}catch (Exception e) {}
			frame = new MainFrame(this);
			frame.initComponents();
			frame.setVisible(true);
			frame.docOutput.insertString(0,"Dusk Client v"+strVersion+" -- https://duskrpg.blogspot.com/\n",null);
			addText("You are using Java version "+System.getProperty("java.version")+"\n");
			frame.txtInput.addKeyListener(this);
			frame.addComponentListener(this);
			frame.pnlGraphics.addMouseListener(this);
			frame.pnlGraphics.addKeyListener(this);
			scaleWindow();
			try
			{
			if (blnApplet)
			{
				/*
				frame.btnEquipment.imgNormal = Toolkit.getDefaultToolkit().getImage(getClass().getResource("en.gif"));
				frame.btnEquipment.imgMouseOver = Toolkit.getDefaultToolkit().getImage(getClass().getResource("emo.gif"));
				frame.btnEquipment.imgMouseDown = Toolkit.getDefaultToolkit().getImage(getClass().getResource("emd.gif"));
				*/
				frame.btnEquipment.repaint();
				/*
				frame.btnMerchant.imgNormal = Toolkit.getDefaultToolkit().getImage(getClass().getResource("mn.gif"));
				frame.btnMerchant.imgMouseOver = Toolkit.getDefaultToolkit().getImage(getClass().getResource("mmo.gif"));
				frame.btnMerchant.imgMouseDown = Toolkit.getDefaultToolkit().getImage(getClass().getResource("mmd.gif"));
				*/
				frame.btnMerchant.repaint();
				/*
				frame.btnQuit.imgNormal = Toolkit.getDefaultToolkit().getImage(getClass().getResource("qn.gif"));
				frame.btnQuit.imgMouseOver = Toolkit.getDefaultToolkit().getImage(getClass().getResource("qmo.gif"));
				frame.btnQuit.imgMouseDown = Toolkit.getDefaultToolkit().getImage(getClass().getResource("qmd.gif"));
				*/
				frame.btnQuit.repaint();
				paint();
			}else
			{
				/*
				frame.btnConnect.imgNormal = Toolkit.getDefaultToolkit().getImage("images/cn.gif");
				frame.btnConnect.imgMouseOver = Toolkit.getDefaultToolkit().getImage("images/cmo.gif");
				frame.btnConnect.imgMouseDown = Toolkit.getDefaultToolkit().getImage("images/cmd.gif");
				*/
                                //frame.btnMagic.repaint();
				frame.btnConnect.repaint();
				/*
				frame.btnEquipment.imgNormal = Toolkit.getDefaultToolkit().getImage("images/en.gif");
				frame.btnEquipment.imgMouseOver = Toolkit.getDefaultToolkit().getImage("images/emo.gif");
				frame.btnEquipment.imgMouseDown = Toolkit.getDefaultToolkit().getImage("images/emd.gif");
				*/
				frame.btnEquipment.repaint();
				/*
				frame.btnMerchant.imgNormal = Toolkit.getDefaultToolkit().getImage("images/mn.gif");
				frame.btnMerchant.imgMouseOver = Toolkit.getDefaultToolkit().getImage("images/mmo.gif");
				frame.btnMerchant.imgMouseDown = Toolkit.getDefaultToolkit().getImage("images/mmd.gif");
				*/
				frame.btnMerchant.repaint();
				/*
				frame.btnQuit.imgNormal = Toolkit.getDefaultToolkit().getImage("images/qn.gif");
				frame.btnQuit.imgMouseOver = Toolkit.getDefaultToolkit().getImage("images/qmo.gif");
				frame.btnQuit.imgMouseDown = Toolkit.getDefaultToolkit().getImage("images/qmd.gif");
				*/
				frame.btnQuit.repaint();
                                frame.btnPotion.repaint();
                                frame.btnPotion2.repaint();
                                frame.btnPotion3.repaint();
                                frame.btnPotion4.repaint();
				paint();
			}
			}catch(Exception e)
			{
			}
			if (blnApplet)
			{
		   		address = appShell.getParameter("address");
		   		port = Integer.parseInt(appShell.getParameter("port"));
		   		strWebAssetPath = appShell.getParameter("webAssetPath");
		   		connect();
		    }else
			{
				addText(255,0,0,"Click \"connect\" to connect to a server and begin playing.\n");
			}
			thrGraphics = new GraphicsThread(this);
		}catch (Exception e) 
		{
		}
	}

	// Main entry point
	static public void main(String[] args) 
	{
		new Dusk();
	}
	
	void connect()
	{
		// Connect to Server
		try
		{
			sckConnection = new Socket(address,port);
			stmOut = new DataOutputStream(sckConnection.getOutputStream());
			stmIn = new DataInputStream(sckConnection.getInputStream());
			addText("Please enter your character name or the name of a new character: \n");
			// Load Images and start checking for incoming commands
			thrRun = new Thread(this);
			thrRun.start();
			blnConnected = true;
			//Initialize objects
			entEntities = new Entity[mapSizeX][mapSizeY];
			frmMerchant = new MerchantFrame(this);
			frmBattle = new BattleFrame(this);
			vctEntities = new Vector(0,3);
			vctMerchantItems = new Vector(0,3);
			vctSell = new Vector(0,3);
			vctChoiceDropItems = new Vector(0,3);
			vctChoiceActionItems = new Vector(0,3);
                        vctTileAnims = new Vector(0,3);
		}catch(Exception e)
		{
			System.err.println("Error connecting to server: "+e.toString());
			addText("Error connecting to server: "+e.toString()+"\n");
		}
	}

	void findPlayer() {
	    synchronized(vctEntities) {
	        for(int i=0; i<vctEntities.size(); i++) {
	            Entity ent = (Entity)vctEntities.elementAt(i);
	            if (ent.intLocX == LocX && ent.intLocY == LocY && ent.intType == 0) {
	                player = ent;
	                return;
	            }
	        }
	    }
	}

	Entity findMobAt(int x, int y) {
		synchronized (vctEntities) {
			for (int i = 0; i < vctEntities.size(); i++) {
				Entity ent = (Entity) vctEntities.elementAt(i);
				if (ent.intLocX == x && ent.intLocY == y && (ent.intType == 0 || ent.intType == 1 || ent.intType == 4)) {
					if (ent != player) {
						return ent;
					}
				}
			}
		}
		return null;
	}
	
	void addText(String strAdd)
	{
		int i,
			j,
			red,
			green,
			blue;
		String strStore=null;
		String strRGB;
		String strBlue;
		StringTokenizer tokStore;
		i = strAdd.indexOf("<RGB ");
		while(strAdd != null && i != -1)
		{
			red=0;
			green=0;
			blue=0;
			if (i != 0)
			{
				strStore = strAdd.substring(0,i);
				addText(0,0,0,strStore);
			}
			strAdd = strAdd.substring(i+1);
			j = strAdd.indexOf(">");
			strRGB = strAdd.substring(0,j);
			strAdd = strAdd.substring(j+1);
			i = strAdd.indexOf("</RGB>");
			if (i != -1)
			{
				strStore = strAdd.substring(0,i);
				strAdd = strAdd.substring(i+6);
				i = strAdd.indexOf("<RGB ");
			} else
			{
				strStore = strAdd;
				strAdd = null;
				i = -1;
			}
			tokStore = new StringTokenizer(strRGB);
			try
			{
				tokStore.nextToken();	//Skip over initial RGB
				red = Integer.parseInt(tokStore.nextToken());
				green = Integer.parseInt(tokStore.nextToken());
				strBlue = tokStore.nextToken();
				blue = Integer.parseInt(strBlue.substring(0,strBlue.length()));
			} catch (NumberFormatException e) {}
			if (red < 0) red = 0;
			if (green < 0) green = 0;
			if (blue < 0) blue = 0;
			if (red > 255) red = 255;
			if (green > 255) green = 255;
			if (blue > 255) blue = 255;
			addText(red, green, blue, strStore);
		}
		if (strAdd != null)
			addText(0,0,0,strAdd);
	}
	
	synchronized void addText(int red,int green, int blue,String strAdd)
		{
		if (frame.docOutput.getLength() > 8000) //if the text area has more than 8000, characters, only keep last 4000;
		{
			try
			{
				frame.docOutput.remove(0,4000);
			} catch (BadLocationException e) {}
		}

		SimpleAttributeSet style = new SimpleAttributeSet();
		StyleConstants.setForeground(style,new Color(red,green,blue));
		try
		{
			frame.docOutput.insertString(frame.docOutput.getEndPosition().getOffset()-1,strAdd,style);
		}catch (BadLocationException e) 
		{
			System.err.println(e.toString());
		}


		JScrollBar sb = frame.scrText.getVerticalScrollBar();
		if (!sb.getValueIsAdjusting())
		{
			sb.setValueIsAdjusting(true);
			try
			{
				sb.setValue(sb.getMaximum());
			} catch (Exception e) {}
			sb.setValueIsAdjusting(false);
		}
	}
	
	void addEntity(Entity entStore)
	{
		synchronized (vctEntities)
		{
		entStore.intNum = 0;
		Entity entStore2=null;
		int i = 0,
			i2 = 0;
		double xloc = entStore.intLocX - LocX + viewRangeX,
			yloc = entStore.intLocY - LocY + viewRangeY;
		if (entStore.intMoveDirection != -1)
		{
			switch (entStore.intMoveDirection)
			{
				case 0:
				{
//					yloc -= .5;
					break;
				}
				case 1:
				{
//					yloc += .5;
					break;
				}
				case 2:
				{
//					xloc -= .5;
					break;
				}
				case 3:
				{
//					xloc += .5;
					break;
				}
			}
		}
		if (xloc > mapSizeX || yloc > mapSizeY || xloc < 0 || yloc < 0)
		{
			try
			{
	   			stmOut.writeBytes("rement "+entStore.ID+"\n");
			}catch(IOException e){}
			reloadJComboBoxLook();
			return;
		}
		for (i=0;i<xloc;i++)
		{
			for (i2=0;i2<mapSizeY;i2++)
			{
				entStore2 = entEntities[i][i2];
				while (entStore2 != null)
				{
					if (entStore.strName.equalsIgnoreCase(entStore2.strName))
					{
						entStore.intNum++;
					}
					entStore2 = entStore2.entNext;
				}
			}
		}
		for (i2=0;i2<yloc+1;i2++)
		{
			entStore2 = entEntities[(int)xloc][i2];
			if (entStore2 != null)
			{
				if (entStore.strName.equalsIgnoreCase(entStore2.strName))
				{
					entStore.intNum++;
				}
				while (entStore2.entNext != null)
				{
					if (entStore.strName.equalsIgnoreCase(entStore2.strName))
					{
						entStore.intNum++;
					}
					entStore2 = entStore2.entNext;
				}
			}
		}
		if (entStore2 == null)
		{
			entEntities[(int)xloc][(int)yloc] = entStore;
		}else
		{
			entStore2.entNext = entStore;
		}
		vctEntities.addElement(entStore);
		for (i=(int)xloc;i<mapSizeX;i++)
		{
			for (;i2<mapSizeY;i2++)
			{
				entStore2 = entEntities[i][i2];
				while (entStore2 != null)
				{
					if (entStore.strName.equalsIgnoreCase(entStore2.strName))
					{
						entStore2.intNum++;
					}
					entStore2 = entStore2.entNext;
				}
			}
			i2=0;
		}
		}
	}
	
	void removeEntity(long lngStore)
	{
		Entity entStore = null,
				entStore2;
		int intStore,
			intStore2=0;
		boolean blnBreak=false;
		synchronized (vctEntities)
		{
		for (intStore=0;intStore<mapSizeX&&blnBreak==false;intStore++)
		{
			for (intStore2=0;intStore2<mapSizeY&&blnBreak==false;intStore2++)
			{
				entStore2 = entEntities[intStore][intStore2];
				if (entStore2 != null)
				{
					if (entStore2.ID == lngStore)
					{
						vctEntities.removeElement(entStore2);
						entEntities[intStore][intStore2] = entStore2.entNext;
						entStore = entStore2;
						entStore2 = entStore2.entNext;
						while (entStore2 != null)
						{
							if (entStore.strName.equalsIgnoreCase(entStore2.strName))
							{
								entStore2.intNum--;
							}
							entStore2 = entStore2.entNext;
						}
						blnBreak=true;
					}else
					{
						while (entStore2.entNext != null)
						{
							if (entStore2.entNext.ID == lngStore)
							{
								vctEntities.removeElement(entStore2.entNext);
								entStore = entStore2.entNext;
								entStore2.entNext = entStore2.entNext.entNext;
								blnBreak=true;
								while (entStore2.entNext != null)
								{
									if (entStore.strName.equalsIgnoreCase(entStore2.entNext.strName))
									{
										entStore2.entNext.intNum--;
									}
									entStore2 = entStore2.entNext;
								}
							}else
								entStore2 = entStore2.entNext;
						}
					}
				}
			}
		}
		if (entStore != null)
		{
			intStore--;
		    for (;intStore<mapSizeX;intStore++)
			{
				for (;intStore2<mapSizeY;intStore2++)
				{
					entStore2 = entEntities[intStore][intStore2];
					while (entStore2 != null)
					{
						if (entStore.strName.equalsIgnoreCase(entStore2.strName))
						{
							entStore2.intNum--;
						}
						entStore2 = entStore2.entNext;
					}
				}
				intStore2 = 0;
			}
			vctEntities.removeElement(entStore);
		}
		}
	}
	
	void removeEntity(Entity entStore)
	{
		synchronized(vctEntities)
		{
		vctEntities.removeElement(entStore);
		Entity entStore2;
		double dblStore = entStore.intLocX - LocX + viewRangeX,
			dblStore2 = entStore.intLocY - LocY + viewRangeY;
		if (entStore.intMoveDirection != -1)
		{
			switch (entStore.intMoveDirection)
			{
				case 0:
				{
//					dblStore2 -= .5;
					break;
				}
				case 1:
				{
//					dblStore2 += .5;
					break;
				}
				case 2:
				{
//					dblStore -= .5;
					break;
				}
				case 3:
				{
//					dblStore += .5;
					break;
				}
			}
		}
		try
		{
			entStore2 = entEntities[(int)dblStore][(int)dblStore2];
			if (entStore2 == null)
				return;
			if (entStore == entStore2)
			{
				entEntities[(int)dblStore][(int)dblStore2] = entStore.entNext;
				entStore.entNext = null;
			}else
			{
				while (entStore2.entNext != null && entStore2.entNext != entStore)
				{
					entStore2 = entStore2.entNext;
				}
				if (entStore2.entNext == null)
				{
					return;
				}
				entStore2.entNext = entStore2.entNext.entNext;
				entStore.entNext = null;
				entStore2 = entStore2.entNext;
			}
			while (entStore2 != null)
			{
				if (entStore.strName.equalsIgnoreCase(entStore2.strName))
				{
					entStore2.intNum--;
				}
				entStore2 = entStore2.entNext;
			}
		}catch(Exception e) {}
		if (dblStore < 0)
			dblStore = 0;
		if (dblStore2 < 0)
			dblStore2 = 0;
		else
			dblStore2++;
		for (;dblStore<mapSizeX;dblStore++)
		{
			for (;dblStore2<mapSizeY;dblStore2++)
			{
				entStore2 = entEntities[(int)dblStore][(int)dblStore2];
				while (entStore2 != null)
				{
					if (entStore.strName.equalsIgnoreCase(entStore2.strName))
					{
						entStore2.intNum--;
					}
					entStore2 = entStore2.entNext;
				}
			}
			dblStore2 = 0;
		}
		}
	}
	
	void removeEntityFromBuffer(Entity entStore)
	{
		Entity entStore2;
		int intStore= (int) (entStore.intLocX - LocX + viewRangeX),
			intStore2= (int) (entStore.intLocY - LocY + viewRangeY);
		if (intStore < 0)
			intStore = 0;
		if (intStore2 < 0)
			intStore2 = 0;
		
		for (;intStore<mapSizeX;intStore++)
		{
			for (;intStore2<mapSizeY;intStore2++)
			{
				entStore2 = entBuffer[intStore][intStore2];
				while (entStore2 != null)
				{
					if (entStore.strName.equalsIgnoreCase(entStore2.strName))
					{
						entStore2.intNum--;
					}
					entStore2 = entStore2.entNext;
				}
			}
			intStore2 = 0;
		}
	}
	
	//Thread to process incoming commands
        @Override
	public void	run()
	{
		int intStore,
			intStore2;
		String strStore,
				strStore2;
		Entity entStore=null,
				entStore2;
		intStore = 0;
		long lngStore;
		int incoming = 0;
		boolean blnBreak=false;
		while(incoming != -1)
		{
		try
		{
		    // Handle incoming messages from Server
		    incoming = stmIn.read();
		    switch (incoming)
		    {
		    	case(0): //Quit
		    	{
		    		blnLoaded = false;
					blnConnected = false;
					sckConnection.close();
					return;
		    	}
				case(1):  //update Images
				{
					strRCAddress = stmIn.readLine();
					try
					{
						thrGraphics.thread.stop();
					}catch (Exception e) {}
					thrGraphics.thread = new Thread(thrGraphics);
					thrGraphics.thread.start();
					break;
				}
		        case (2):  //update Loc and Map
		        {
					synchronized(vctEntities)
					{
		        	int i,
		        		i2,
						changeLocX = Integer.parseInt(stmIn.readLine()) - LocX,
		        		changeLocY = Integer.parseInt(stmIn.readLine()) - LocY;
					LocX += changeLocX;
					LocY += changeLocY;
		            for (i=0;i<mapSizeX;i++)
					{
						for (i2=0;i2<mapSizeY;i2++)
						{
							shrMap[i][i2] = Short.parseShort(stmIn.readLine());
						}
					}
					Iterator iter = vctEntities.iterator();
					while (iter.hasNext())
					{
						entStore = (Entity)iter.next();
						if (Math.abs(entStore.intLocX - LocX) > viewRangeX || Math.abs(entStore.intLocY - LocY) > viewRangeY)
						{
							iter.remove();
						}
					}
		        	entBuffer = entEntities;
		            entEntities = new Entity[mapSizeX][mapSizeY];
		            for (i=0;i<mapSizeX;i++)
					{
						for (i2=0;i2<mapSizeY;i2++)
						{
							entStore = entBuffer[i][i2];
		            		if (entStore != null)
		            		{
		            			try
		            			{
		            				entEntities[i - changeLocX][i2 - changeLocY] = entStore;
								}catch(Exception e)
								{
									do
									{
										removeEntityFromBuffer(entStore);
										entStore = entStore.entNext;
									}while (entStore != null);
								}
							}
						}
					}
					frame.lblInfo.setText("HP: "+inthp+"/"+intmaxhp+" MP: "+intsp+"/"+intmaxsp+" Loc: "+LocX+"/"+LocY);
					vctMerchantItems = new Vector(0,5);
					reloadJComboBoxLook();
					reloadJComboBoxGet();
					reloadJComboBoxAttack();
					findPlayer();
		        	update(0);
		        	paint();
					}
		            break;
		        }
		        case (3):  //incoming chat
		        {
		        	addText(stmIn.readLine()+"\n");
		            break;
		        }
		        case (4):  //add Entity
		        {
		        	synchronized(vctEntities)
		        	{
		            strStore = stmIn.readLine();
					intStore = Byte.parseByte(stmIn.readLine());
					if (intStore == 0)
		            {
		                try
		                {
		                	entStore = new Entity(strStore,
		                						Long.parseLong(stmIn.readLine()),
												Integer.parseInt(stmIn.readLine()),
												Integer.parseInt(stmIn.readLine()),
												Integer.parseInt(stmIn.readLine()),
												Integer.parseInt(stmIn.readLine()),
												intStore);
						}catch(NullPointerException e)
						{
							entStore = null;
						}
					}else
		            {
		            	try
		                {
		                	entStore = new Entity(strStore,
		                						Long.parseLong(stmIn.readLine()),
												Integer.parseInt(stmIn.readLine()),
												Integer.parseInt(stmIn.readLine()),
												Integer.parseInt(stmIn.readLine()),
												-1,
												intStore);
						}catch(NullPointerException e)
						{
							entStore = null;
						}
					}
		            if (entStore != null)
		            {
		          		addEntity(entStore);
		          		if (entStore.intLocX == LocX && entStore.intLocY == LocY && entStore.intType == 0) {
		          			findPlayer();
		          		}
		            }
					reloadJComboBoxLook();
					reloadJComboBoxGet();
					reloadJComboBoxAttack();
					update(0);
					paint();
					}
		            break;
		        }
		        case (5):  //update Stats
		        {
					inthp = Integer.parseInt(stmIn.readLine());
					intmaxhp = Integer.parseInt(stmIn.readLine());
					intsp = Integer.parseInt(stmIn.readLine());
					intmaxsp = Integer.parseInt(stmIn.readLine());
					frame.lblInfo.setText("HP: "+inthp+"/"+intmaxhp+" MP: "+intsp+"/"+intmaxsp+" Loc: "+LocX+"/"+LocY);
                                        update(0);
		            break;
		        }
		        case (6):  //update Items
		        {
		        	vctChoiceDropItems = new Vector(0,5);
		        	frame.frmEquipment.blnRefreshMenus = true;
		        	try
		        	{
		            	frame.frmEquipment.chcWield.removeAllItems();
		            	frame.frmEquipment.chcArms.removeAllItems();
		            	frame.frmEquipment.chcLegs.removeAllItems();
		            	frame.frmEquipment.chcTorso.removeAllItems();
		            	frame.frmEquipment.chcWaist.removeAllItems();
		            	frame.frmEquipment.chcNeck.removeAllItems();
		            	frame.frmEquipment.chcSkull.removeAllItems();
		            	frame.frmEquipment.chcEyes.removeAllItems();
		            	frame.frmEquipment.chcHands.removeAllItems();
		            }catch(Exception e){}
		            try
		            {
					intStore = Integer.parseInt(stmIn.readLine());
					while (true)
					{
						strStore = stmIn.readLine();
						switch (intStore)
						{
						case (0):
						{
							vctChoiceDropItems.addElement(strStore);
							break;
						}
						case (1):
						{
							vctChoiceDropItems.addElement(strStore);
							frame.frmEquipment.chcWield.addItem(strStore);
							break;
						}
						case (2):
						{
							vctChoiceDropItems.addElement(strStore);
							frame.frmEquipment.chcArms.addItem(strStore);
							break;
						}
						case (3):
						{
							vctChoiceDropItems.addElement(strStore);
							frame.frmEquipment.chcLegs.addItem(strStore);
							break;
						}
						case (4):
						{
							vctChoiceDropItems.addElement(strStore);
							frame.frmEquipment.chcTorso.addItem(strStore);
							break;
						}
						case (5):
						{
							vctChoiceDropItems.addElement(strStore);
							frame.frmEquipment.chcWaist.addItem(strStore);
							break;
						}
						case (6):
						{
							vctChoiceDropItems.addElement(strStore);
							frame.frmEquipment.chcNeck.addItem(strStore);
							break;
						}
						case (7):
						{
							vctChoiceDropItems.addElement(strStore);
							frame.frmEquipment.chcSkull.addItem(strStore);
							break;
						}
						case (8):
						{
							vctChoiceDropItems.addElement(strStore);
							frame.frmEquipment.chcEyes.addItem(strStore);
							break;
						}
						case (9):
						{
							vctChoiceDropItems.addElement(strStore);
							frame.frmEquipment.chcHands.addItem(strStore);
							break;
						}
						}
						intStore = Integer.parseInt(stmIn.readLine());
					}	
					} 
					catch (IOException | NumberFormatException e)
					{
					}
		            frame.frmEquipment.chcWield.addItem("none");
		            frame.frmEquipment.chcArms.addItem("none");
		            frame.frmEquipment.chcLegs.addItem("none");
		            frame.frmEquipment.chcTorso.addItem("none");
		            frame.frmEquipment.chcWaist.addItem("none");
		            frame.frmEquipment.chcNeck.addItem("none");
		            frame.frmEquipment.chcSkull.addItem("none");
		            frame.frmEquipment.chcEyes.addItem("none");
		            frame.frmEquipment.chcHands.addItem("none");
		        	frame.frmEquipment.blnRefreshMenus = false;
					reloadJComboBoxDrop();
		            break;
		        }
		        case (7):  //update Equipment
		        {
					try
					{
						frame.frmEquipment.JLabel9.setText("Wielded: "+stmIn.readLine()); 
						frame.frmEquipment.JLabel2.setText("Arms: "+stmIn.readLine()); 
						frame.frmEquipment.JLabel3.setText("Legs: "+stmIn.readLine()); 
						frame.frmEquipment.JLabel1.setText("Torso: "+stmIn.readLine()); 
						frame.frmEquipment.JLabel6.setText("Waist: "+stmIn.readLine()); 
						frame.frmEquipment.JLabel4.setText("Neck: "+stmIn.readLine()); 
						frame.frmEquipment.lblSkull.setText("Skull: "+stmIn.readLine()); 
						frame.frmEquipment.JLabel5.setText("Eyes: "+stmIn.readLine()); 
						frame.frmEquipment.JLabel7.setText("Hands: "+stmIn.readLine());
					}catch (IOException e)
					{
						System.err.println("Error loading equipment" + e.toString());
					}
					break;
				}
				case (8):  //update Stats
				{
					try
					{
		                strStore2 = "";
		                strStore = stmIn.readLine();
		                while (!strStore.equals("."))
		                {
		                	strStore2 += strStore+"\n";
		               	 	strStore = stmIn.readLine();
		                }
						frame.txtOther.setText(strStore2);
					}catch (IOException e)
					{
						System.err.println("Error loading stats" + e.toString());
					}
					break;
				}
				case (9):  //halt
				{
			    	blnLoaded = false;
			    	break;
				}
				case (10):  //update Actions
				{
	            	strStore = stmIn.readLine();
	            	vctChoiceActionItems = new Vector(0,5);
	            	while (!strStore.equals("."))
	            	{
	            		vctChoiceActionItems.addElement(strStore);
	            		strStore = stmIn.readLine();
	            	}
					reloadJComboBoxAction();
	            	break;
				}
				case(11): //load music
				{
					try
					{
						if (blnApplet)
						{
						addText("Loading music.\n");
						intMusicTypes = Integer.parseInt(stmIn.readLine());
						audMusic = new AudioClip[intMusicTypes][];
						intNumSongs = new int[intMusicTypes];
						for (intStore=0;intStore<intMusicTypes;intStore++)
						{
							intNumSongs[intStore] = Integer.parseInt(stmIn.readLine());
							audMusic[intStore] = new AudioClip[intNumSongs[intStore]];
							for (intStore2=0;intStore2<intNumSongs[intStore];intStore2++)
							{
								strStore = stmIn.readLine();
								try
								{
									audMusic[intStore][intStore2] = appShell.getAudioClip(new URL(strStore));
									while (audMusic[intStore][intStore2] == null) {}
								}catch(MalformedURLException e)
								{
									System.err.println("Error while trying to load music file "+strStore+":"+e.toString());
								}
							}
						}
						addText("Music loaded.\n");
						}
					}catch(IOException | NumberFormatException e)
					{
						blnMusic = false;
						addText("Your java virtual machine does not support midi music\n");
						System.err.println("Error while trying to load music files:"+e.toString());
					}
					break;
				}
				case(12): //play music
				{
					if (blnMusic)
					{
					try
					{
						intStore = Integer.parseInt(stmIn.readLine());
						if (audMusicPlaying != null) audMusicPlaying.stop();
						audMusicPlaying = audMusic[intStore][(int)(Math.random()*intNumSongs[intStore])];
						audMusicPlaying.loop();
					}catch(IOException | NumberFormatException e)
					{
						System.err.println("Error while trying to play music file:" + e.toString());
					}
					}
					break;
				}
				case(13): //stillThere?
				{
					stmOut.writeBytes("notdead\n");
					break;
				}
				case (14): //proceed
				{
			    	blnLoaded = true;
			    	break;
				}
				case (15): //play sfx
				{
					try
					{
						audSFX[Integer.parseInt(stmIn.readLine())].play();
					}catch(IOException | NumberFormatException e){}
					break;
				}
				case (16): //remove entity
				{
					synchronized(vctEntities)
					{
					lngStore = Long.parseLong(stmIn.readLine());
					removeEntity(lngStore);
					reloadJComboBoxLook();
					reloadJComboBoxGet();
					reloadJComboBoxAttack();
					update(0);
					paint(); // Wildern added
					}
					break;
				}
				case (17): //update Merchant
				{
					strStore = stmIn.readLine();
					while (!strStore.equals("."))
					{
						vctMerchantItems.addElement(strStore);
						strStore = stmIn.readLine();
					}
					frame.btnMerchant.setEnabled(true);
					reloadJComboBoxBuy();
					break;
				}
				case (18): //view/edit
				{
					EditFrame frmEdit = new EditFrame(stmIn.readLine(),this,true);
					frmEdit.show();
					strStore = stmIn.readLine();
					while (!strStore.equals("--EOF--"))
					{
						frmEdit.txtEdit.append(strStore+"\n");
						strStore = stmIn.readLine();
					}
					break;
				}
				case (19): //resize Map
				{
		        	synchronized(vctEntities)
		        	{
					mapSizeX = Integer.parseInt(stmIn.readLine());
					mapSizeY = Integer.parseInt(stmIn.readLine());
					viewRangeX = (mapSizeX-1)/2;
					viewRangeY = (mapSizeY-1)/2;
					entEntities = new Entity[mapSizeX][mapSizeY];
					shrMap = new short[mapSizeX][mapSizeY];
					if (blnApplet)
					{
						stmOut.writeBytes("appletimages\n");
					}else
					{
						stmOut.writeBytes("applicationimages\n");
					}
					scaleWindow();
					}
					break;
				}
				case (20): //view/no-edit
				{
					EditFrame frmEdit = new EditFrame(stmIn.readLine(),this,false);
					frmEdit.show();
					strStore = stmIn.readLine();
					while (!strStore.equals("--EOF--"))
					{
						frmEdit.txtEdit.append(strStore+"\n");
						strStore = stmIn.readLine();
					}
					break;
				}
				case (21): //offMerchant
				{
					frmMerchant.hide();
					vctMerchantItems = new Vector(0,5);
					vctSell = new Vector(0,5);
					frame.btnMerchant.setEnabled(false);
					break;
				}
				case (22): //update Sell
				{
					vctSell = new Vector(0,5);
					strStore = stmIn.readLine();
					while (!strStore.equals("."))
					{
						vctSell.addElement(strStore);
						strStore = stmIn.readLine();
					}
					reloadJComboBoxSell();
					break;
				}
				case (23): //colour chat
				{
		            addText(Integer.parseInt(strStore = stmIn.readLine()),
		            		Integer.parseInt(strStore = stmIn.readLine()),
		            		Integer.parseInt(strStore = stmIn.readLine()),
		            		stmIn.readLine()+"\n");
		            break;
				}
				case (24): //move north --New walking animation, implmented by Zach- written by Tom and NotZed.
				{
					long ID = Long.parseLong(stmIn.readLine());
					synchronized(vctEntities)
    				{
					for (int i=0;i<vctEntities.size();i++)
					{
						entStore = (Entity)vctEntities.elementAt(i);
						if (entStore.ID == ID)
						{
                                                    if (entStore.intMoveDirection == -1);
                                                    removeEntity(entStore);
                                                    if (entStore.intStep != -1)
                                                    {
							if (entStore.intMoveDirection == 0)
							{
                                                            entStore.intStep ^= 1;
                                                        } else {
                                                            entStore.intStep = 1;
                                                            entStore.intMoveDirection = 0;
                                                            }
                                                        }
                                                    
                                                                entStore.intLocY += -1;
                                                                entStore.intLocX += 0;
                                                                
							try
							{
								addEntity(entStore);
							}catch (Exception var13) {
                                                        }
							reloadJComboBoxAttack();
							if (ID != ID) {
                                                        //thrGraphics.addEntityToMove(entStore,0);
                                                        // Notzeds hack -- ID != ID fixes flicker. Zach- added "update" to the second break to keep mobs movement updated while idle.
                                                        // HACK: Don't update the screen display if the user moves, attempted
                                                        // fix at flicker-on-move stuff.
                                                        // The server should always send an UpdateLocMap every time
                                                        update(0);
							paint();
                                                        }
							break;
						}
					}
                                    }
                            update(0);
		            break;
				}
				case (25): //move south
				{
					long ID = Long.parseLong(stmIn.readLine());
					synchronized(vctEntities)
    				{
					for (int i=0;i<vctEntities.size();i++)
					{
						entStore = (Entity)vctEntities.elementAt(i);
						if (entStore.ID == ID)
						{
                                                    if (entStore.intMoveDirection == -1);
                                                    removeEntity(entStore);
                                                    if (entStore.intStep != -1)
                                                    {
							if (entStore.intMoveDirection == 1)
							{
                                                            entStore.intStep ^= 1;
                                                        } else {
                                                            entStore.intStep = 3;
                                                            entStore.intMoveDirection = 1;
                                                            }
                                                        }
                                                    
                                                                entStore.intLocY += 1;
                                                                entStore.intLocX += 0;
                                                                
							try
							{
								addEntity(entStore);
							}catch (Exception var13) {
                                                        }
							reloadJComboBoxAttack();
							if (ID != ID) {
                                                        //thrGraphics.addEntityToMove(entStore,1);
                                                        update(0);
							paint();
                                                        }
							break;
						}
					}
                                    }
                            update(0);
		            break;
				}
				case (26): //move west
				{
					long ID = Long.parseLong(stmIn.readLine());
					synchronized(vctEntities)
    				{
					for (int i=0;i<vctEntities.size();i++)
					{
						entStore = (Entity)vctEntities.elementAt(i);
						if (entStore.ID == ID)
						{
                                                    if (entStore.intMoveDirection == -1);
                                                    removeEntity(entStore);
                                                    if (entStore.intStep != -1)
                                                    {
							if (entStore.intMoveDirection == 2)
							{
                                                            entStore.intStep ^= 1;
                                                        } else {
                                                            entStore.intStep = 5;
                                                            entStore.intMoveDirection = 2;
                                                            }
                                                        }
                                                    
                                                                entStore.intLocY += 0;
                                                                entStore.intLocX += -1;
                                                                
							try
							{
								addEntity(entStore);
							}catch (Exception var13) {
                                                        }
							reloadJComboBoxAttack();
							if (ID != ID) {
                                                        //thrGraphics.addEntityToMove(entStore,2);
                                                        update(0);
							paint();
                                                        }
							break;
						}
					}
                                    }
                            update(0);
		            break;
				}
				case (27): //move east
				{
					long ID = Long.parseLong(stmIn.readLine());
					synchronized(vctEntities)
    				{
					for (int i=0;i<vctEntities.size();i++)
					{
						entStore = (Entity)vctEntities.elementAt(i);
						if (entStore.ID == ID)
						{
                                                    if (entStore.intMoveDirection == -1);
                                                    removeEntity(entStore);
                                                    if (entStore.intStep != -1)
                                                    {
							if (entStore.intMoveDirection == 3)
							{
                                                            entStore.intStep ^= 1;
                                                        } else {
                                                            entStore.intStep = 7;
                                                            entStore.intMoveDirection = 3;
                                                            }
                                                        }
                                                        
                                                                entStore.intLocY += 0;
                                                                entStore.intLocX += 1;
                                                                
							try
							{
								addEntity(entStore);
							}catch (Exception var13) {
                                                        }
							reloadJComboBoxAttack();
							if (ID != ID) {
                                                        //thrGraphics.addEntityToMove(entStore,3);
                                                        update(0);
							paint();
                                                        }
							break;
						}
					}
                                    }
                            update(0);
		            break;
				}
				case (28): //update range
				{
					range = Integer.parseInt(stmIn.readLine());
					break;
				}
				case (29): //set flag
				{
					lngStore = Long.parseLong(stmIn.readLine());
					intStore = Integer.parseInt(stmIn.readLine());
					synchronized(vctEntities)
					{
						Iterator iter = vctEntities.iterator();
						while (iter.hasNext())
						{
								entStore = (Entity)iter.next();
							if (entStore.ID == lngStore)
							{
								entStore.intFlag = intStore;
									break;
							}
						}
					}
					update(0);
					break;
				}
				case (30): //clear all flags
				{
					synchronized(vctEntities)
					{
						Iterator iter = vctEntities.iterator();
						while (iter.hasNext())
						{
							entStore = (Entity)iter.next();
							entStore.intFlag = 0;
						}
					}
					update(0);
					break;	
				}
				case (31): //show battle window and clear text
				{
					if (!frmBattle.isShowing())
						frmBattle.show();
					strStore = stmIn.readLine();
					frmBattle.setTitle(strStore);
					frmBattle.txtEdit.setText("");
                                        frame.lblTarget.setText("");    //Zach added target HP in mainframe. Doesn't work if popups off.
                                        break;
				}
				case (32): //show battle window and update title
				{
					if (!frmBattle.isShowing())
						frmBattle.show();
					strStore = stmIn.readLine();
					frmBattle.setTitle(strStore);
                                        frame.lblTarget.setText(strStore);   //Zach added target HP in mainframe. Doesn't work if popups off.
					break;
				}
				case (33): //add text to battle window
				{
					if (!frmBattle.isShowing())
						frmBattle.show();
					strStore = stmIn.readLine();
					frmBattle.txtEdit.append(strStore+"\n");
                                        break;
				}
                                case (34):
                                {
                                    try {
                                        long opponentID = Long.parseLong(stmIn.readLine());
                                        String HpData = stmIn.readLine();
                                           if (HpData == null) {
                                        System.err.println("Input stream ended before the expected line was found.");
                                        } else {
                                        String[] hpValues = HpData.trim().split(" ");
                                        int newHp = Integer.parseInt(hpValues[0]);
                                        int newMaxHp = Integer.parseInt(hpValues[1]);

                                        // Find the entity and update its HP
                                        synchronized(vctEntities) {
                                            for (int i = 0; i < vctEntities.size(); i++) {
                                                Entity ent = (Entity)vctEntities.elementAt(i);
                                                if (ent.ID == opponentID) {
                                                    ent.hp = newHp;
                                                    ent.maxhp = newMaxHp;
                                                    break;
                                                }
                                            }
                                        }
                                        }
                                    } catch (Exception e) {
                                        System.err.println("Error updating opponent HP: " + e.getMessage());
                                    }
                                    update(0);
                                    paint();
                                    break;
                                }
                                case (35): //receive tile animation data
				{
					vctTileAnims = new Vector(0,5);
					int tileID = Integer.parseInt(stmIn.readLine());
					while (tileID != -1)
					{
						int frameCount = Integer.parseInt(stmIn.readLine());
						int delay = Integer.parseInt(stmIn.readLine());
						vctTileAnims.addElement(new TileAnim(tileID, frameCount, delay));
						tileID = Integer.parseInt(stmIn.readLine());
					}
					break;
				}
				default:  //if an incoming byte doesn't fit the switch
				{
					System.err.println("Lost incoming byte: " + incoming);	
				}
			}
		}catch(IOException | NumberFormatException e)
		{
			System.err.println("Error at run() with value " + incoming +" : "+e.toString());
			e.printStackTrace(System.out);

			addText("Error at run() with value " + incoming +" : "+e.toString()+"\n");
			blnConnected = false;
			return;
		}
		}
		System.err.println("Error at run() with value " + incoming);
	}
	
	public void reloadJComboBoxLook()
	{
		int i,
			i2;
		Entity entStore;
		blnMenuRefresh = true;
		try
		{
			frame.chcLook.removeAllItems();
		}catch (Exception e){};
		frame.chcLook.addItem("Look");
		for (i=0;i<mapSizeX;i++)
		{
			for (i2=0;i2<mapSizeY;i2++)
			{
				entStore = entEntities[i][i2];
				while (entStore != null)
				{
					if (entStore.intNum == 0)
						frame.chcLook.addItem(entStore.strName);
					else
						frame.chcLook.addItem(entStore.intNum+"."+entStore.strName);
					entStore = entStore.entNext;
				}
			}
		}
		blnMenuRefresh = false;
	}
	
	public void reloadJComboBoxAttack()
	{
		int i,
			i2;
		Entity entStore;
		blnMenuRefresh = true;
		try
		{
			frame.chcAttack.removeAllItems();
		}catch (Exception e){};
		frame.chcAttack.addItem("Attack");
		for (i=0;i<mapSizeX;i++)
		{
			for (i2=0;i2<mapSizeY;i2++)
			{
				entStore = entEntities[i][i2];
				while (entStore != null)
				{
					if ((entStore.intType==0 || entStore.intType==1 || entStore.intType==4) && (Math.abs(LocX - entStore.intLocX) + Math.abs(LocY - entStore.intLocY) < 2))
					{
						if (entStore.intNum == 0)
							frame.chcAttack.addItem(entStore.strName);
						else
							frame.chcAttack.addItem(entStore.intNum+"."+entStore.strName);
					}
					entStore = entStore.entNext;
				}
			}
		}
		blnMenuRefresh = false;
	}
	
	public void reloadJComboBoxGet()
	{
		int i,
			i2;
		Entity entStore;
		blnMenuRefresh = true;
		try
		{
			frame.chcGet.removeAllItems();
		}catch (Exception e){};
		frame.chcGet.addItem("Get");
		for (i=0;i<mapSizeX;i++)
		{
			for (i2=0;i2<mapSizeY;i2++)
			{
				entStore = entEntities[i][i2];
				while (entStore != null)
				{
		        	if (entStore.intType==1 && (LocX - entStore.intLocX) + (LocY - entStore.intLocY) < 2)
	        		{
						if (entStore.intNum == 0)
							frame.chcGet.addItem(entStore.strName);
						else
							frame.chcGet.addItem(entStore.intNum+"."+entStore.strName);
	            	}
					entStore = entStore.entNext;
				}
			}
		}
		blnMenuRefresh = false;
	}
	
	public void reloadJComboBoxBuy()
	{
		blnMenuRefresh = true;
		try
		{
			frmMerchant.chcBuy.removeAllItems();
		}catch(Exception e){}
		int i;
		for (i=0;i<vctMerchantItems.size();i++)
		{
			frmMerchant.chcBuy.addItem((String)vctMerchantItems.elementAt(i));
		}
		blnMenuRefresh = false;
	}
	
	public void reloadJComboBoxSell()
	{
		blnMenuRefresh = true;
		try
		{
			frmMerchant.chcSell.removeAllItems();
		}catch(Exception e){}
		int i;
		for (i=0;i<vctSell.size();i++)
		{
			frmMerchant.chcSell.addItem((String)vctSell.elementAt(i));
		}
		blnMenuRefresh = false;
	}
	
	public void reloadJComboBoxDrop()
	{
		blnMenuRefresh = true;
		try
		{
			frame.chcDrop.removeAllItems();
		}catch(Exception e){}
		frame.chcDrop.addItem("Drop");
		int i;
		for (i=0;i<vctChoiceDropItems.size();i++)
		{
			frame.chcDrop.addItem((String)vctChoiceDropItems.elementAt(i));
		}
		blnMenuRefresh = false;
	}
	
	public void reloadJComboBoxAction()
	{
		blnMenuRefresh = true;
		try
		{
			frame.chcAction.removeAllItems();
		}catch(Exception e){}
		frame.chcAction.addItem("Action");
		int i;
		for (i=0;i<vctChoiceActionItems.size();i++)
		{
			frame.chcAction.addItem((String)vctChoiceActionItems.elementAt(i));
		}
		blnMenuRefresh = false;
	}
		
	public void scaleImages()
	{
		// Scaling is now done on the fly in the update() and drawEntity() methods.
	}
	
	public void scaleWindow()
	{
		//frame.pnlGraphics
		int width = frame.pnlContents.getBounds().width-310;
		int height = (int)(width / 2);
		if (height > frame.pnlContents.getBounds().height-100) {
			height = frame.pnlContents.getBounds().height-100;
			width = height * 2;
		}
		frame.pnlGraphics.setSize(width,height);
		intImageSize = frame.pnlGraphics.getBounds().width/mapSizeX;
		if (intImageSize < 1)
			intImageSize = 1;
		frame.pnlGraphics.setSize(intImageSize*mapSizeX,intImageSize*mapSizeY);
		imgDisplay = frame.pnlGraphics.createImage(intImageSize*mapSizeX,intImageSize*mapSizeY);
		gD = imgDisplay.getGraphics();
		g = frame.pnlGraphics.getGraphics();
		//Set up other objects proportionally
		frame.txtInput.setLocation(0,frame.pnlGraphics.getBounds().height);
		frame.scrText.setLocation(0,frame.pnlGraphics.getBounds().height+25);
		frame.scrText.setSize(frame.pnlGraphics.getBounds().width - 200,frame.pnlContents.getBounds().height-frame.pnlGraphics.getBounds().height-25);
		frame.txtInput.setSize(frame.pnlGraphics.getBounds().width - 200,25);
		frame.pnlStats.setSize(frame.pnlContents.getBounds().width-frame.pnlGraphics.getBounds().width,frame.pnlContents.getBounds().height);
		frame.pnlStats.setLocation(frame.pnlGraphics.getBounds().width,0);
		frame.txtOther.setSize(frame.pnlStats.getBounds().width-140,frame.pnlStats.getBounds().height-60);
                frame.lblTarget.setSize(frame.pnlStats.getBounds().width, 20);
		frame.lblInfo.setSize(frame.pnlContents.getBounds().width,20);
		frame.scrText.getVerticalScrollBar().setValue(frame.scrText.getVerticalScrollBar().getMaximum());
		System.gc();
	}
	
	//Accept mouse input
        @Override
	public void mousePressed(MouseEvent evt){}
        @Override
	public void mouseReleased(MouseEvent evt){}
        @Override
	public void mouseClicked(MouseEvent evt)
	{
		if (!blnConnected)
	    	return;
		if (evt.getComponent() == frame.pnlGraphics)
		{
			int x = evt.getX();
			int y = evt.getY();
 			if(!blnLoaded) return;
 	
 			//Find coordinates of click on map
 			int destX = (x / intImageSize) + LocX - viewRangeX;
 			int destY = (y / intImageSize) + LocY - viewRangeY;
 			
 			if (evt.getButton() == MouseEvent.BUTTON1) {
				try {
					stmOut.writeBytes("findpath " + destX + " " + destY + "\n");
				} catch (IOException e) {
					addText("Error at mouseClicked(): " + e.toString() + "\n");
				}
			} else if (evt.getButton() == MouseEvent.BUTTON3) {
				Entity mob = findMobAt(destX, destY);
				if (mob != null) {
					try {
						// Send the correct attack command: "attack <name> #<ID>"
						stmOut.writeBytes("attack " + mob.strName + "\n");
					} catch (IOException e) {
						addText("Error at mouseClicked() for attack: " + e.toString() + "\n");
					}
				} else {
					// If no mob, just pathfind
					try {
						stmOut.writeBytes("findpath " + destX + " " + destY + "\n");
					} catch (IOException e) {
						addText("Error at mouseClicked() for findpath: " + e.toString() + "\n");
					}
				}
			}
		}
		frame.txtInput.requestFocus();
	}
        @Override
	public void mouseEntered(MouseEvent evt){}
        @Override
	public void mouseExited(MouseEvent evt){}

	//Accept key input
        @Override
	public void keyPressed(KeyEvent evt)
	{
		if (!blnConnected)
	    	return;
		synchronized(stmOut)
		{
	    try
	    {
	    	int nkey = evt.getKeyCode();
	    	if (nkey == KeyEvent.VK_ENTER)
	    	{
	    		String strStore = frame.txtInput.getText();
	    		//Thanks to Joe Alloway for this addition
	    		if(strStore.startsWith("!"))
	    		{
					if (strStore.length()==1)
					{
						strSet = null;
					}else
					{
						strSet = strStore.substring(1);
					}
				}else
				{
	    			stmOut.writeBytes(strStore+"\n");
				}
				//End contribution by Joe Alloway
	    		frame.txtInput.setText("");
	    	}
	    	if (blnLoaded)
	    	{
				switch (nkey)
	   			{
	    			case 38: //up-down-left-right
	    			{
	    				stmOut.writeBytes("n\n");
	    				if (strSet != null)
	    				{
	    					stmOut.writeBytes(strSet+"\n");
	    				}
						return;
	   				}
	   				case 40:
	   				{
	   					stmOut.writeBytes("s\n");
	    				if (strSet != null)
	    				{
	    					stmOut.writeBytes(strSet+"\n");
	    				}
						return;
	   				}
	   				case 37:
	   				{
	   		    		stmOut.writeBytes("w\n");
	    				if (strSet != null)
	    				{
	    					stmOut.writeBytes(strSet+"\n");
	    				}
						return;
	   				}
	   				case 39:
	   				{
	   		    		stmOut.writeBytes("e\n");
	    				if (strSet != null)
	    				{
	    					stmOut.writeBytes(strSet+"\n");
	    				}
	   				}

		 		}
			}
	    }catch(IOException e)
	    {
	        addText("Error at keyPressed(): "+e.toString()+"\n");
	    }
	    }
	}
        @Override
	public void keyReleased(KeyEvent evt){}
        @Override
	public void keyTyped(KeyEvent evt){}
        @Override
	public void componentResized(ComponentEvent e)
	{
		scaleWindow();
		scaleImages();
		update(0); 
		paint(); //Wildern added
	}
        @Override
	public void componentMoved(ComponentEvent e){}
        @Override
	public void componentShown(ComponentEvent e){}
        @Override
	public void componentHidden(ComponentEvent e){}
	
/*        @Override
	public void actionPerformed(ActionEvent evt)
	{
		if (evt.getSource() == frame.btnConnect)
		{
			frame.frmConnect.show();
			frame.frmConnect.setSize(350, 200);
		}else if (evt.getSource() == frame.btnEquipment)
		{
			if (frame.frmEquipment != null)
			{
				frame.frmEquipment.show();
				frame.frmEquipment.setSize(300, 440);
			}
                }else if (evt.getSource() == frame.btnMagic)
		{
			if (frame.frmMagic != null)
			{
				frame.frmMagic.show();
				frame.frmMagic.setSize(300, 440);
			}      
		}else if (evt.getSource() == frame.btnMerchant)
		{
			if (frmMerchant != null)
			{
				frmMerchant.show();
				frmMerchant.setSize(300,120);
			}
                }else if (evt.getSource() == frame.btnPotion)
		{
			try
			{
				if (blnConnected)
					stmOut.writeBytes("use minormend\n");
                        }catch(IOException exc){}
                }else if (evt.getSource() == frame.btnPotion2)
		{
			try
			{
				if (blnConnected)
					stmOut.writeBytes("use mendpotion\n");
                        }catch(IOException exc){}
                }else if (evt.getSource() == frame.btnPotion3)
		{
			try
			{
				if (blnConnected)
					stmOut.writeBytes("use minormana\n");
                        }catch(IOException exc){}
                }else if (evt.getSource() == frame.btnPotion4)
		{
			try
			{
				if (blnConnected)
					stmOut.writeBytes("use manapotion\n");
                        }catch(IOException exc){}
		}else if (evt.getSource() == frame.btnQuit)
		{
			try
			{
				if (blnConnected)
					stmOut.writeBytes("quit\n");
			}catch(IOException exc){}
			try
			{
				sckConnection.close();
			}catch (IOException exc){}
			try
			{
				imgOriginalSprites.flush();
				imgOriginalPlayers.flush();
				imgOriginalMap.flush();
				imgSprites.flush();
				imgPlayers.flush();
				imgMap.flush();
			}catch(Exception exc) {}
			System.gc();
			if (blnApplet)
			{
				appShell.destroy();
			}else
			{
				System.exit(0);
			}
		}
	}	
*/

	void thisWindowClosing(WindowEvent e)
	{
		frame.setVisible(false);
	}
	
	//Display graphics
	public void update(int intAnimTick)
	{
		synchronized (vctEntities)
		{
			int i,
				i2;
			Entity entStore;
			for (i=0;i<mapSizeX;i++)
			{
				for (i2=0;i2<mapSizeY;i2++)
				{
					//Draw map(background)
					try
					{
					int tileID = shrMap[i][i2];
					TileAnim anim = null;
					if (vctTileAnims != null) {
							for (int j=0; j<vctTileAnims.size(); j++) {
								TileAnim tempAnim = (TileAnim)vctTileAnims.elementAt(j);
								if (tempAnim.tileID == tileID) {
									anim = tempAnim;
									break;
								}
							}
						}

						if (anim != null) {
							int frame = (intAnimTick / anim.delay) % anim.frameCount;
							gD.drawImage(imgOriginalMap,
												i*intImageSize,i2*intImageSize,
												(i+1)*intImageSize,(i2+1)*intImageSize,
												(tileID+frame)*intOriginalTileSize,0,
												(tileID+frame+1)*intOriginalTileSize,intOriginalTileSize,
												null);
						} else {
							gD.drawImage(imgOriginalMap,
												i*intImageSize,i2*intImageSize,
												(i+1)*intImageSize,(i2+1)*intImageSize,
												tileID*intOriginalTileSize,0,
												(tileID+1)*intOriginalTileSize,intOriginalTileSize,
												null);
						}
				    }catch(Exception e)
				    {
				        try
						{
							gD.drawImage(imgOriginalMap,
											i*intImageSize,i2*intImageSize,
											(i+1)*intImageSize,(i2+1)*intImageSize,
											0,0,
											intOriginalTileSize,intOriginalTileSize,
											null);
				 		}catch(Exception exc){}
					}
				}
			}
			for (i=0;i<vctEntities.size();i++) //Draw entities
			{
				entStore = (Entity)vctEntities.elementAt(i);
				drawEntity(entStore);
			}
		}
	}
	
	void drawEntity(Entity entStore)
	{
		double x = entStore.intLocX-LocX+viewRangeX;
		double y = entStore.intLocY-LocY+viewRangeY;
		//Draw flag
		if (entStore.intFlag != 0)
		{
			if (entStore.intFlag == 1)
			{
                            	double CurrentHPWidth = (double) intImageSize / intmaxhp;
                                double HPBarValue = CurrentHPWidth * inthp;
				gD.setColor(Color.green);
				gD.drawRoundRect((int)(x*intImageSize),(int)(y*intImageSize),
							intImageSize,intImageSize,intImageSize/3,intImageSize/3);
			                gD.setColor(new Color(35, 35, 35));
                                        gD.fillRect((int)(x*intImageSize)- 1, (int)(y*intImageSize) - 66, (int)(intImageSize) + 2, 12);

                                        gD.setColor(new Color(255, 0, 30));
                                        gD.fillRect((int)(x*intImageSize), (int)(y*intImageSize) - 65, (int) HPBarValue, 10);
                        }else if (entStore.intFlag == 2)
			{
                            if (entStore.maxhp > 0) {
				double CurrentHPWidth2 = (double) intImageSize / entStore.maxhp;
                                double HPBarValue2 = CurrentHPWidth2 * entStore.hp;
				gD.setColor(Color.red);
				gD.drawRoundRect((int)(x*intImageSize),(int)(y*intImageSize),
							intImageSize,intImageSize,intImageSize/3,intImageSize/3);
			                gD.setColor(new Color(35, 35, 35));
                                        gD.fillRect((int)(x*intImageSize)- 1, (int)(y*intImageSize) - 66, (int)(intImageSize) + 2, 12);

                                        gD.setColor(new Color(255, 0, 30));
                                        gD.fillRect((int)(x*intImageSize), (int)(y*intImageSize) - 65, (int) HPBarValue2, 10);
                            }
                        }
		}

		if (entStore.intStep == -1) // This is for sprites (e.g., items on the ground)
		{
			try
			{
				int spriteScreenSize = intImageSize * 2; // 64x64 sprites should be twice the size of 32x32 tiles
				int xPos = (int)(x * intImageSize) - (spriteScreenSize / 4); // Center horizontally
				int yPos = (int)(y * intImageSize) - (spriteScreenSize / 2); // Shift up to align feet
				gD.drawImage(imgOriginalSprites,
							xPos, yPos,
							xPos + spriteScreenSize, yPos + spriteScreenSize,
							entStore.intImage*intOriginalSpriteSize,0,
							(entStore.intImage+1)*intOriginalSpriteSize,intOriginalSpriteSize,
							null);
			}catch(Exception e){}
		}else // This is for players
		{
			try
			{
				int playerScreenSize = intImageSize * 2;
				int xPos = (int)(x * intImageSize) - (playerScreenSize / 4); // Center horizontally
				int yPos = (int)(y * intImageSize) - (playerScreenSize / 2); // Shift up to align feet
				gD.drawImage(imgOriginalPlayers,
								xPos, yPos,
								xPos + playerScreenSize, yPos + playerScreenSize,
								(entStore.intImage*8+entStore.intStep)*intOriginalPlayerSize,0,
								(entStore.intImage*8+entStore.intStep+1)*intOriginalPlayerSize,intOriginalPlayerSize,
								null);
			}catch(Exception e){}
		}
		//Multi-colored text by Joe Alloway
		if (entStore.intNum == 0)
		{
			gD.setColor(Color.black);
			gD.drawString(entStore.strName,(int)(x*intImageSize)-1,(int)((y+1)*intImageSize)); 
			gD.setColor(Color.white);
			gD.drawString(entStore.strName,(int)(x*intImageSize),(int)((y+1)*intImageSize)); 
		}else
		{
			gD.setColor(Color.black);
			gD.drawString(entStore.intNum+"."+entStore.strName,(int)(x*intImageSize)-1,(int)((y+1)*intImageSize)); 
			gD.setColor(Color.white);
			gD.drawString(entStore.intNum+"."+entStore.strName,(int)(x*intImageSize),(int)((y+1)*intImageSize)); 
		}
	}
	
        @Override
	public boolean imageUpdate(Image img,
                                     int infoflags,
                                     int x,
                                     int y,
                                     int width,
                                     int height)
    {
    	paint();
    	return true;
    }


	
	public void paint()
	{
		g.drawImage(imgDisplay,0,0,this);
	}
}