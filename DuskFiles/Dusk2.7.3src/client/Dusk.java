package client; 
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

public class Dusk implements Runnable,MouseListener,KeyListener,ComponentListener, ActionListener, ImageObserver
{
	static String strVersion="2.7.4 (WeaveMN)";
	
	int numSpriteImages,
	    numPlayerImages,
	    numMapImages,
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
    		vctEntities;
    
	Image imgOriginalSprites;
	Image imgOriginalPlayers;
	Image imgOriginalMap;
	Image imgSprites;
	Image imgPlayers;
	Image imgMap;
	Image imgDisplay;
	
	Socket sckConnection;
	DataOutputStream stmOut;
	BufferedReader stmIn;
	
	short shrMap[][];
	int mapSize=11,
		viewRange=5;
	
	Entity entEntities[][],
			entBuffer[][];
	
	boolean intStep,
			blnMusic=true;
    Thread thrRun;
    	
    int intImageSize = 36;;
    
    String strSet = null;
    
    MainFrame frame;
	BattleFrame frmBattle;
	MerchantFrame frmMerchant;
	
	Graphics g;
	Graphics gD;
	GraphicsThread thrGraphics;
	
	String address = "weavercrazytown.com";
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
			frame = new MainFrame(this);
			frame.initComponents();
			frame.setVisible(true);
			frame.docOutput.insertString(0,"Dusk Client v"+strVersion+" -- https://sourceforge.net/projects/duskrpg/\n",null);
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
				paint();
			}
			}catch(Exception e)
			{
				e.printStackTrace();
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
			e.printStackTrace();
		}
	}

	// Main entry point
	public static void main(String[] args) 
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
			stmIn = new BufferedReader(new InputStreamReader(sckConnection.getInputStream()));
			addText("Please enter your character name or the name of a new character: \n");
			// Load Images and start checking for incoming commands
			thrRun = new Thread(this);
			thrRun.start();
			blnConnected = true;
			//Initialize objects
			entEntities = new Entity[mapSize][mapSize];
			frmMerchant = new MerchantFrame(this);
			frmBattle = new BattleFrame(this);
			vctEntities = new Vector(0,3);
			vctMerchantItems = new Vector(0,3);
			vctSell = new Vector(0,3);
			vctChoiceDropItems = new Vector(0,3);
			vctChoiceActionItems = new Vector(0,3);
		}catch(Exception e)
		{
			System.err.println("Error connecting to server: "+e.toString());
			addText("Error connecting to server: "+e.toString()+"\n");
			return;
		}
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
			} catch (Exception e) {}
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
			} catch (Exception e) {}
		}

		SimpleAttributeSet style = new SimpleAttributeSet();
		StyleConstants.setForeground(style,new Color(red,green,blue));
		try
		{
			frame.docOutput.insertString(frame.docOutput.getEndPosition().getOffset()-1,strAdd,style);
		}catch (Exception e) 
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
		double xloc = entStore.intLocX - LocX + viewRange,
			yloc = entStore.intLocY - LocY + viewRange;
		if (entStore.intMoveDirection != -1)
		{
			switch (entStore.intMoveDirection)
			{
				case 0:
				{
//					yloc -= 0.5;
					break;
				}
				case 1:
				{
//					yloc += 0.5;
					break;
				}
				case 2:
				{
//					xloc -= 0.5;
					break;
				}
				case 3:
				{
//					xloc += 0.5;
					break;
				}
			}
		}
		if (xloc > mapSize || yloc > mapSize || xloc < 0 || yloc < 0)
		{
			try
			{
	   			stmOut.writeBytes("rement "+entStore.ID+"\n");
			}catch(Exception e){}
			reloadChoiceLook();
			return;
		}
		for (i=0;i<xloc;i++)
		{
			for (i2=0;i2<mapSize;i2++)
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
		for (i=(int)xloc;i<mapSize;i++)
		{
			for (;i2<mapSize;i2++)
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
		for (intStore=0;intStore<mapSize&&blnBreak==false;intStore++)
		{
			for (intStore2=0;intStore2<mapSize&&blnBreak==false;intStore2++)
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
		    for (;intStore<mapSize;intStore++)
			{
				for (;intStore2<mapSize;intStore2++)
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
		double dblStore = entStore.intLocX - LocX + viewRange,
			dblStore2 = entStore.intLocY - LocY + viewRange;
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
		for (;dblStore<mapSize;dblStore++)
		{
			for (;dblStore2<mapSize;dblStore2++)
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
		synchronized(vctEntities)
		{
		vctEntities.removeElement(entStore);
		Entity entStore2;
		int intStore= (int)entStore.intLocX - LocX + viewRange,
			intStore2= (int)entStore.intLocY - LocY + viewRange;
		try
		{
			entStore2 = entBuffer[intStore][intStore2];
			while (entStore2 != entStore)
			{
				entStore2 = entStore2.entNext;
			}
			entStore2 = entStore2.entNext;
			while (entStore2 != null)
			{
				if (entStore.strName.equalsIgnoreCase(entStore2.strName))
				{
					entStore2.intNum--;
				}
				entStore2 = entStore2.entNext;
			}
		}catch(Exception e) {}
		if (intStore < 0)
			intStore = 0;
		if (intStore2 < 0)
			intStore2 = 0;
		else
			intStore2++;
		for (;intStore<mapSize;intStore++)
		{
			for (;intStore2<mapSize;intStore2++)
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
	}
	
	//Thread to process incoming commands
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
//		    incoming = stmIn.readByte();
		    incoming = stmIn.read();
System.err.println("incoming = "+incoming);
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
		            for (i=0;i<mapSize;i++)
					{
						for (i2=0;i2<mapSize;i2++)
						{
							shrMap[i][i2] = Short.parseShort(stmIn.readLine());
						}
					}
					Iterator iter = vctEntities.iterator();
					while (iter.hasNext())
					{
						entStore = (Entity)iter.next();
						if (Math.abs(entStore.intLocX - LocX) > viewRange || Math.abs(entStore.intLocY - LocY) > viewRange)
						{
							iter.remove();
						}
					}
		        	entBuffer = entEntities;
		            entEntities = new Entity[mapSize][mapSize];
		            for (i=0;i<mapSize;i++)
					{
						for (i2=0;i2<mapSize;i2++)
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
					reloadChoiceLookGetAttack();
		        	update();
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
		            }
					reloadChoiceLookGetAttack();
					update();
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
		            break;
		        }
		        case (6):  //update Items
		        {
		        	vctChoiceDropItems = new Vector(0,5);
		        	frame.frmEquipment.blnRefreshMenus = true;
		        	try
		        	{
		            	frame.frmEquipment.chcWield.removeAll();
		            	frame.frmEquipment.chcArms.removeAll();
		            	frame.frmEquipment.chcLegs.removeAll();
		            	frame.frmEquipment.chcTorso.removeAll();
		            	frame.frmEquipment.chcWaist.removeAll();
		            	frame.frmEquipment.chcNeck.removeAll();
		            	frame.frmEquipment.chcSkull.removeAll();
		            	frame.frmEquipment.chcEyes.removeAll();
		            	frame.frmEquipment.chcHands.removeAll();
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
					catch (Exception e)
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
					reloadChoiceDrop();
		            break;
		        }
		        case (7):  //update Equipment
		        {
					try
					{
						frame.frmEquipment.Label9.setText("Wielded: "+stmIn.readLine()); 
						frame.frmEquipment.Label2.setText("Arms: "+stmIn.readLine()); 
						frame.frmEquipment.Label3.setText("Legs: "+stmIn.readLine()); 
						frame.frmEquipment.Label1.setText("Torso: "+stmIn.readLine()); 
						frame.frmEquipment.Label6.setText("Waist: "+stmIn.readLine()); 
						frame.frmEquipment.Label4.setText("Neck: "+stmIn.readLine()); 
						frame.frmEquipment.lblSkull.setText("Skull: "+stmIn.readLine()); 
						frame.frmEquipment.Label5.setText("Eyes: "+stmIn.readLine()); 
						frame.frmEquipment.Label7.setText("Hands: "+stmIn.readLine());
					}catch (Exception e)
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
					}catch (Exception e)
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
					reloadChoiceAction();
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
								}catch(Exception e)
								{
									System.err.println("Error while trying to load music file "+strStore+":"+e.toString());
								}
							}
						}
						addText("Music loaded.\n");
						}
					}catch(Exception e)
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
					}catch(Exception e)
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
					}catch(Exception e){}
					break;
				}
				case (16): //remove entity
				{
					synchronized(vctEntities)
					{
					lngStore = Long.valueOf(stmIn.readLine()).longValue();
					removeEntity(lngStore);
					reloadChoiceLookGetAttack();
					update();
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
					reloadChoiceBuy();
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
					mapSize = Integer.parseInt(stmIn.readLine());
					viewRange = (mapSize-1)/2;
					entEntities = new Entity[mapSize][mapSize];
					shrMap = new short[mapSize][mapSize];
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
					reloadChoiceSell();
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
				case (24): //move north
				{
					long ID = Long.parseLong(stmIn.readLine());
					synchronized(vctEntities)
    				{
					for (int i=0;i<vctEntities.size();i++)
					{
						entStore = (Entity)vctEntities.elementAt(i);
						if (entStore.ID == ID)
						{
							if (entStore.intMoveDirection != -1)
							{
								removeEntity(entStore);
								if (entStore.intStep != -1)
									entStore.intStep = 1;
								entStore.intLocY -= 1;
								try
								{
									addEntity(entStore);
								}catch (Exception e) {}
								reloadChoiceAttack();
								update();
								paint(); // wildern added
								break;
							}
							removeEntity(entStore);
							if (entStore.intStep != -1)
								entStore.intStep = 1;
							entStore.intLocY -= 1;
							try
							{
								addEntity(entStore);
							}catch (Exception e) {}
							reloadChoiceAttack();
//							entStore.intLocY += .5;
							thrGraphics.addEntityToMove(entStore,0);
							update();
							paint();
							break;
						}
					}
					}
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
							if (entStore.intMoveDirection != -1)
							{
								removeEntity(entStore);
								if (entStore.intStep != -1)
									entStore.intStep = 3;
								entStore.intLocY += 1;
								try
								{
									addEntity(entStore);
								}catch (Exception e) {}
								update();
								paint(); // wildern added
								reloadChoiceAttack();
								break;
							}
							removeEntity(entStore);
							if (entStore.intStep != -1)
								entStore.intStep = 3;
							entStore.intLocY += 1;
							try
							{
								addEntity(entStore);
							}catch (Exception e) {}
							reloadChoiceAttack();
//							entStore.intLocY -= .5;
							thrGraphics.addEntityToMove(entStore,1);
							update();
							paint();
							break;
						}
					}
					}
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
							if (entStore.intMoveDirection != -1)
							{
								removeEntity(entStore);
								if (entStore.intStep != -1)
									entStore.intStep = 5;
								entStore.intLocX -= 1;
								try
								{
									addEntity(entStore);
								}catch (Exception e) {}
								reloadChoiceAttack();
								update();
								paint(); // wildern added
								break;
							}
							removeEntity(entStore);
							if (entStore.intStep != -1)
								entStore.intStep = 5;
							entStore.intLocX -= 1;
							try
							{
								addEntity(entStore);
							}catch (Exception e) {}
							reloadChoiceAttack();
//							entStore.intLocX += .5;
							thrGraphics.addEntityToMove(entStore,2);
							update();
							paint();
							break;
						}
					}
					}
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
							if (entStore.intMoveDirection != -1)
							{
								removeEntity(entStore);
								entStore.intLocX += 1;
								if (entStore.intStep != -1)
									entStore.intStep = 7;
								try
								{
									addEntity(entStore);
								}catch (Exception e) {}
								reloadChoiceAttack();
								update();
								paint(); // wildern added
								break;
							}
							removeEntity(entStore);
							if (entStore.intStep != -1)
								entStore.intStep = 7;
							entStore.intLocX += 1;
							try
							{
								addEntity(entStore);
							}catch (Exception e) {}
							reloadChoiceAttack();
//							entStore.intLocX -= .5;
							thrGraphics.addEntityToMove(entStore,3);
							update();
							paint();
							break;
						}
					}
					}
		            break;
				}
				case (28): //update range
				{
					range = Integer.parseInt(stmIn.readLine());
					break;
				}
				case (29): //set flag
				{
					lngStore = Long.valueOf(stmIn.readLine()).longValue();
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
					update();
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
					update();
					break;	
				}
				case (31): //show battle window and clear text
				{
					if (!frmBattle.isShowing())
						frmBattle.show();
					strStore = stmIn.readLine();
					frmBattle.setTitle(strStore);
					frmBattle.txtEdit.setText("");
					break;
				}
				case (32): //show battle window and update title
				{
					if (!frmBattle.isShowing())
						frmBattle.show();
					strStore = stmIn.readLine();
					frmBattle.setTitle(strStore);
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
				default:  //if an incoming byte doesn't fit the switch
				{
					System.err.println("Lost incoming byte: " + incoming);	
				}
			}
		}catch(Exception e)
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
	
	public void reloadChoiceLookGetAttack()
	{
		Entity entStore;
		blnMenuRefresh = true;
		try
		{
			frame.chcLook.removeAll();
			frame.chcGet.removeAll();
			frame.chcAttack.removeAll();
		}catch (Exception e){};
		frame.chcLook.addItem("Look");
		frame.chcGet.addItem("Get");
		frame.chcAttack.addItem("Attack");
		Iterator iter = vctEntities.iterator();
		while (iter.hasNext())
		{
			entStore = (Entity)iter.next();
			// Look
			if (entStore.intNum == 0)
				frame.chcLook.addItem(entStore.strName);
			else
				frame.chcLook.addItem(entStore.intNum+"."+entStore.strName);
			// Get
			if (entStore.intType==1 && (Math.abs(LocX - entStore.intLocX) + Math.abs(LocY - entStore.intLocY) < 2))
	        {
				if (entStore.intNum == 0)
					frame.chcGet.addItem(entStore.strName);
				else
					frame.chcGet.addItem(entStore.intNum+"."+entStore.strName);
	        }
			// Attack
			if ((entStore.intType==0 || entStore.intType==1 || entStore.intType==4) && (Math.abs(LocX - entStore.intLocX) + Math.abs(LocY - entStore.intLocY) <= range))
			{
				if (entStore.intNum == 0)
					frame.chcAttack.addItem(entStore.strName);
				else
					frame.chcAttack.addItem(entStore.intNum+"."+entStore.strName);
			}
		}
		blnMenuRefresh = false;
	}

	public void reloadChoiceLook()
	{
		int i,
			i2;
		Entity entStore;
		blnMenuRefresh = true;
		try
		{
			frame.chcLook.removeAll();
		}catch (Exception e){};
		frame.chcLook.addItem("Look");
		Iterator iter = vctEntities.iterator();
		while (iter.hasNext())
		{
			entStore = (Entity)iter.next();
			// Look
			if (entStore.intNum == 0)
				frame.chcLook.addItem(entStore.strName);
			else
				frame.chcLook.addItem(entStore.intNum+"."+entStore.strName);
		}
		blnMenuRefresh = false;
	}
	
	public void reloadChoiceAttack()
	{
		int i,
			i2;
		Entity entStore;
		blnMenuRefresh = true;
		try
		{
			frame.chcAttack.removeAll();
		}catch (Exception e){};
		frame.chcAttack.addItem("Attack");
		Iterator iter = vctEntities.iterator();
		while (iter.hasNext())
		{
			entStore = (Entity)iter.next();
			if ((entStore.intType==0 || entStore.intType==1 || entStore.intType==4) && (Math.abs(LocX - entStore.intLocX) + Math.abs(LocY - entStore.intLocY) <= range))
			{
				if (entStore.intNum == 0)
					frame.chcAttack.addItem(entStore.strName);
				else
					frame.chcAttack.addItem(entStore.intNum+"."+entStore.strName);
			}
		}
		blnMenuRefresh = false;
	}
	
	public void reloadChoiceGet()
	{
		int i,
			i2;
		Entity entStore;
		blnMenuRefresh = true;
		try
		{
			frame.chcGet.removeAll();
		}catch (Exception e){};
		frame.chcGet.addItem("Get");
		Iterator iter = vctEntities.iterator();
		while (iter.hasNext())
		{
			entStore = (Entity)iter.next();
			if (entStore.intType==1 && (Math.abs(LocX - entStore.intLocX) + Math.abs(LocY - entStore.intLocY) < 2))
	        {
				if (entStore.intNum == 0)
					frame.chcGet.addItem(entStore.strName);
				else
					frame.chcGet.addItem(entStore.intNum+"."+entStore.strName);
	        }
		}
		blnMenuRefresh = false;
	}
	
	public void reloadChoiceBuy()
	{
		blnMenuRefresh = true;
		try
		{
			frmMerchant.chcBuy.removeAll();
		}catch(Exception e){}
		int i;
		for (i=0;i<vctMerchantItems.size();i++)
		{
			frmMerchant.chcBuy.addItem((String)vctMerchantItems.elementAt(i));
		}
		blnMenuRefresh = false;
	}
	
	public void reloadChoiceSell()
	{
		blnMenuRefresh = true;
		try
		{
			frmMerchant.chcSell.removeAll();
		}catch(Exception e){}
		int i;
		for (i=0;i<vctSell.size();i++)
		{
			frmMerchant.chcSell.addItem((String)vctSell.elementAt(i));
		}
		blnMenuRefresh = false;
	}
	
	public void reloadChoiceDrop()
	{
		blnMenuRefresh = true;
		try
		{
			frame.chcDrop.removeAll();
		}catch(Exception e){}
		frame.chcDrop.addItem("Drop");
		int i;
		for (i=0;i<vctChoiceDropItems.size();i++)
		{
			frame.chcDrop.addItem((String)vctChoiceDropItems.elementAt(i));
		}
		blnMenuRefresh = false;
	}
	
	public void reloadChoiceAction()
	{
		blnMenuRefresh = true;
		try
		{
			frame.chcAction.removeAll();
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
		try
		{
			if (imgMap != null)
				imgMap.flush();
			if (imgPlayers != null)
				imgMap.flush();
			if (imgSprites != null)
				imgMap.flush();
			imgMap = imgOriginalMap.getScaledInstance(intImageSize*(numMapImages+1),intImageSize,Image.SCALE_DEFAULT);
			imgPlayers = imgOriginalPlayers.getScaledInstance(intImageSize*(numPlayerImages+1)*8,intImageSize,Image.SCALE_DEFAULT);
			imgSprites = imgOriginalSprites.getScaledInstance(intImageSize*(numSpriteImages+1),intImageSize,Image.SCALE_DEFAULT);
			try
			{
				MediaTracker mdtTracker = new MediaTracker(frame);
				mdtTracker.addImage(imgMap,0);
				mdtTracker.addImage(imgPlayers,0);
				mdtTracker.addImage(imgSprites,0);
				mdtTracker.waitForAll();
			}catch(Exception e)
			{
				System.err.println("Error while scaling for images: "+e.toString());
			}
		}catch (Exception e){}
	}
	
	public void scaleWindow()
	{
		//frame.pnlGraphics
		if ((frame.pnlContents.getBounds().width-310) > (frame.pnlContents.getBounds().height-150))
		{
			frame.pnlGraphics.setSize(frame.pnlContents.getBounds().height-150,frame.pnlContents.getBounds().height-150);
		}else
		{
			frame.pnlGraphics.setSize(frame.pnlContents.getBounds().width-310,frame.pnlContents.getBounds().width-310);
		}
		intImageSize = frame.pnlGraphics.getBounds().width/mapSize;
		if (intImageSize < 1)
			intImageSize = 1;
		frame.pnlGraphics.setSize(intImageSize*mapSize,intImageSize*mapSize);
		imgDisplay = frame.pnlGraphics.createImage(intImageSize*mapSize,intImageSize*mapSize);
		gD = imgDisplay.getGraphics();
		g = frame.pnlGraphics.getGraphics();
		//Set up other objects proportionally
		frame.txtInput.setLocation(0,frame.pnlGraphics.getBounds().height);
		frame.scrText.setLocation(0,frame.pnlGraphics.getBounds().height+25);
		frame.scrText.setSize(frame.pnlContents.getBounds().width,frame.pnlContents.getBounds().height-frame.pnlGraphics.getBounds().height-25);
		frame.txtInput.setSize(frame.pnlContents.getBounds().width,25);
		frame.scrText.getViewport().setSize(frame.pnlContents.getBounds().width,frame.pnlContents.getBounds().height-frame.pnlGraphics.getBounds().height-25);
		frame.txtInput.setSize(frame.pnlContents.getBounds().width,25);
		frame.pnlStats.setSize(frame.pnlContents.getBounds().width-frame.pnlGraphics.getBounds().width,frame.pnlGraphics.getBounds().height);
		frame.pnlStats.setLocation(frame.pnlGraphics.getBounds().width,0);
		frame.txtOther.setSize(frame.pnlStats.getBounds().width-140,frame.pnlStats.getBounds().height-40);
		frame.lblInfo.setSize(frame.pnlContents.getBounds().width,20);
		frame.scrText.getVerticalScrollBar().setValue(frame.scrText.getVerticalScrollBar().getMaximum());
		System.gc();
	}
	
	//Accept mouse input
	public void mousePressed(MouseEvent evt){}
	public void mouseReleased(MouseEvent evt){}
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
 			int destX = (x / intImageSize) + LocX - viewRange;
 			int destY = (y / intImageSize) + LocY - viewRange;
 			
 			//Move to location
 			try
 			{
 	 			stmOut.writeBytes("goto " + destX + " " + destY + "\n");
 			}catch(Exception e)
 			{
 	 			addText("Error at mouseDown(): "+e.toString()+"\n");
 			}
		}
		frame.txtInput.requestFocus();
	}
	public void mouseEntered(MouseEvent evt){}
	public void mouseExited(MouseEvent evt){}

	//Accept key input
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
		 				return;
	   				}
		 		}
			}
	    }catch(Exception e)
	    {
	        addText("Error at keyPressed(): "+e.toString()+"\n");
	    }
	    }
		return;
	}
	public void keyReleased(KeyEvent evt){}
	public void keyTyped(KeyEvent evt){}
	public void componentResized(ComponentEvent e)
	{
		scaleWindow();
		scaleImages();
		update(); 
		paint(); //Wildern added
	}
	public void componentMoved(ComponentEvent e){}
	public void componentShown(ComponentEvent e){}
	public void componentHidden(ComponentEvent e){}
	
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
		}else if (evt.getSource() == frame.btnMerchant)
		{
			if (frmMerchant != null)
			{
				frmMerchant.show();
				frmMerchant.setSize(300,120);
			}
		}else if (evt.getSource() == frame.btnQuit)
		{
			try
			{
				if (blnConnected)
					stmOut.writeBytes("quit\n");
			}catch(Exception exc){}
			try
			{
				sckConnection.close();
			}catch (Exception exc){}
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


	void thisWindowClosing(WindowEvent e)
	{
		frame.setVisible(false);
	}
	
	//Display graphics
	public void update()
	{
		synchronized (vctEntities)
		{
			int i,
				i2;
			Entity entStore;
			for (i=0;i<mapSize;i++)
			{
				for (i2=0;i2<mapSize;i2++)
				{
					//Draw map(background)
					try
					{
						gD.drawImage(imgMap,
										i*intImageSize,i2*intImageSize,
										(i+1)*intImageSize,(i2+1)*intImageSize,
										shrMap[i][i2]*intImageSize,0,
										(shrMap[i][i2]+1)*intImageSize,intImageSize,
										null);
				    }catch(Exception e)
				    {
				        try
						{
							gD.drawImage(imgMap,
											i*intImageSize,i2*intImageSize,
											(i+1)*intImageSize,(i2+1)*intImageSize,
											0,0,
											intImageSize,intImageSize,
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
		double x = entStore.intLocX-LocX+viewRange;
		double y = entStore.intLocY-LocY+viewRange;
		//Draw flag
		if (entStore.intFlag != 0)
		{
			if (entStore.intFlag == 1)
			{
				gD.setColor(Color.green);
				gD.drawRoundRect((int)(x*intImageSize),(int)(y*intImageSize),
							intImageSize,intImageSize,intImageSize/3,intImageSize/3);
			}else if (entStore.intFlag == 2)
			{
				gD.setColor(Color.red);
				gD.drawRoundRect((int)(x*intImageSize),(int)(y*intImageSize),
							intImageSize,intImageSize,intImageSize/3,intImageSize/3);
			}
		}
		if (entStore.intStep == -1)
		{
			try
			{
				gD.drawImage(imgSprites,
							(int)(x*intImageSize),(int)(y*intImageSize),
							(int)((x+1)*intImageSize),(int)((y+1)*intImageSize),
							entStore.intImage*intImageSize,0,
							(entStore.intImage+1)*intImageSize,intImageSize,
							null);
			}catch(Exception e){}
		}else
		{
			try
			{
				gD.drawImage(imgPlayers,
								(int)(x*intImageSize),(int)(y*intImageSize),
								(int)((x+1)*intImageSize),(int)((y+1)*intImageSize),
								(entStore.intImage*8+entStore.intStep)*intImageSize,0,
								(entStore.intImage*8+entStore.intStep+1)*intImageSize,intImageSize,
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

