/* All code copyright Tom Weingarten (captaint@home.com) 2000 Tom Weingarten makes no assurances as to the reliability or functionality of this code. Use at your own risk.

You are free to edit or redistribute this code or any portion at your wish, under the condition that you do not edit or remove this license, and accompany it with all redistributions. */

/* Special Thanks to:

Randall Leeds for the following code portions as well as many other small changes and deprecation fixes: Float/Unfloat

Joe Alloway for shadowed text and the !set command */

import com.formdev.flatlaf.FlatDarkLaf;
import com.formdev.flatlaf.FlatLightLaf;
import java.awt.*;
import java.awt.image.*;
import java.awt.event.*;
import java.io.*;
import java.util.Vector;
import java.util.Iterator;
import java.util.HashMap;
import java.util.Collections;
import java.util.Comparator;
import java.lang.Math;
import java.lang.reflect.Array;
import java.util.StringTokenizer;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.applet.*;
import java.io.File;
import java.io.InputStream;
import java.io.BufferedInputStream;
import java.net.*;
import javax.sound.sampled.*;
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
    long playerTicks = 200;
	boolean blnLoaded,
                        blnRefreshing,
			blnMenuRefresh,
			blnConnected=false,
			blnApplet;
	int intMusicTypes;
	int intNumSongs[];
    Clip audSFX[],
    			audMusic[][],
				audLocationMusic[];
    Clip audMusicPlaying;
    Applet appShell;
    String strRCAddress;
    String strWebAssetPath = "";
    
    Vector vctMerchantItems,
    		vctSell,
    		vctChoiceDropItems,
    		vctChoiceActionItems,
    		vctEntities;
    Vector<TileAnim> vctTileAnims;
    Vector<DamageSplat> vctDamageSplats;
    
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
	
	HashMap<Long, Entity> hmpEntities;
	
	boolean intStep,
			blnMusic=true;
    Thread thrRun;
    
    Entity player;
    double cameraX, cameraY;
    	
    int intImageSize = 36;
    
    String strSet = null;
    
    MainFrame frame;
	BattleFrame frmBattle;
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
				frame.btnEquipment.repaint();
				frame.btnMerchant.repaint();
				frame.btnQuit.repaint();
				paint();
			}else
			{
                frame.btnConnect.repaint();
				frame.btnEquipment.repaint();
				frame.btnMerchant.repaint();
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
				addText("<RGB 255 0 0>Click \"connect\" to connect to a server and begin playing.</RGB>\n");
			}
			try {
				audSFX = new Clip[12];
				for (int i = 0; i < 12; i++) {
					String fileName = String.format("/rc/somedusk/audio/sfx/hit%02d.wav", i + 1);
					InputStream audioSrc = Dusk.class.getResourceAsStream(fileName);
					if (audioSrc == null) {
						continue;
					}
					InputStream bufferedIn = new BufferedInputStream(audioSrc);
					AudioInputStream audioInputStream = AudioSystem.getAudioInputStream(bufferedIn);
					audSFX[i] = AudioSystem.getClip();
					audSFX[i].open(audioInputStream);
				}
			} catch(Exception e) {
				System.err.println("Error loading sound effects: " + e.toString());
			}
			
			try {
				audLocationMusic = new Clip[2];
				String[] musicFiles = {"a_better_world-orch.wav", "The_9th_Circle_V2.wav"};
				for (int i = 0; i < musicFiles.length; i++) {
					String fileName = "/rc/somedusk/audio/sfx/" + musicFiles[i];
					InputStream audioSrc = Dusk.class.getResourceAsStream(fileName);
					if (audioSrc == null) {
						System.err.println("Error: Music resource not found: " + fileName);
						continue;
					}
					InputStream bufferedIn = new BufferedInputStream(audioSrc);
					AudioInputStream audioInputStream = AudioSystem.getAudioInputStream(bufferedIn);
					audLocationMusic[i] = AudioSystem.getClip();
					audLocationMusic[i].open(audioInputStream);
				}
			} catch (Exception e) {
				System.err.println("Error loading location music: " + e.toString());
			}

			thrGraphics = new GraphicsThread(this);
		}catch (Exception e) 
		{
		}
	}

	static public void main(String[] args) 
	{
		new Dusk();
	}
	
	void connect()
	{
		try
		{
			sckConnection = new Socket(address,port);
			stmOut = new DataOutputStream(sckConnection.getOutputStream());
			stmIn = new DataInputStream(sckConnection.getInputStream());
			addText("Please enter your character name or the name of a new character: \n");
			thrRun = new Thread(this);
			thrRun.start();
			blnConnected = true;
			hmpEntities = new HashMap<Long, Entity>();
			frmMerchant = new MerchantFrame(this);
			frmBattle = new BattleFrame(this);
			vctEntities = new Vector(0,3);
			vctMerchantItems = new Vector(0,3);
			vctSell = new Vector(0,3);
			vctChoiceDropItems = new Vector(0,3);
			vctChoiceActionItems = new Vector(0,3);
            vctTileAnims = new Vector<TileAnim>(0,3);
            vctDamageSplats = new Vector<DamageSplat>(0,3);
		}catch(Exception e)
		{
			System.err.println("Error connecting to server: "+e.toString());
			addText("Error connecting to server: "+e.toString()+"\n");
		}
	}
	
	synchronized void addText(String strAdd)
	{
		if (frame.docOutput.getLength() > 8000)
		{
			try
			{
				frame.docOutput.remove(0,4000);
			} catch (BadLocationException e) {}
		}

		try {
			Pattern pattern = Pattern.compile("<RGB (\\d+) (\\d+) (\\d+)>(.*?)</RGB>");
			Matcher matcher = pattern.matcher(strAdd);
			
			int lastIndex = 0;
			while (matcher.find()) {
				// Append text before the match (default color)
				if (matcher.start() > lastIndex) {
					String text = strAdd.substring(lastIndex, matcher.start());
					frame.docOutput.insertString(frame.docOutput.getLength(), text, null);
				}
				
				// Append the colored text
				try {
					int red = Integer.parseInt(matcher.group(1));
					int green = Integer.parseInt(matcher.group(2));
					int blue = Integer.parseInt(matcher.group(3));
					String text = matcher.group(4);

					SimpleAttributeSet style = new SimpleAttributeSet();
					StyleConstants.setForeground(style, new Color(red, green, blue));
					frame.docOutput.insertString(frame.docOutput.getLength(), text, style);

				} catch (NumberFormatException e) {
					// If parsing fails, just add the raw tag text in default color
					frame.docOutput.insertString(frame.docOutput.getLength(), matcher.group(0), null);
					System.err.println("Error parsing RGB tag: " + e.getMessage());
				}
				
				lastIndex = matcher.end();
			}
			
			// Append any remaining text after the last match (default color)
			if (lastIndex < strAdd.length()) {
				frame.docOutput.insertString(frame.docOutput.getLength(), strAdd.substring(lastIndex), null);
			}

		} catch (BadLocationException e) {
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
			if (hmpEntities.containsKey(entStore.ID)) {
				return;
			}

			hmpEntities.put(entStore.ID, entStore);
			vctEntities.addElement(entStore);
			
			entStore.pixelX = entStore.intLocX * intImageSize;
			entStore.pixelY = entStore.intLocY * intImageSize;
			entStore.targetX = entStore.pixelX;
			entStore.targetY = entStore.pixelY;
		}
	}
	
	void removeEntity(long lngStore)
	{
		synchronized (vctEntities)
		{
			Entity entStore = hmpEntities.get(lngStore);
			if (entStore != null) {
				hmpEntities.remove(lngStore);
				vctEntities.removeElement(entStore);
			}
		}
	}

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
		    incoming = stmIn.read();
		    switch (incoming)
		    {
		    	case(0):
		    	{
		    		blnLoaded = false;
					blnConnected = false;
					sckConnection.close();
					return;
		    	}
				case(1):
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
		        case (2):
		        {
					synchronized(vctEntities)
					{
						LocX = Integer.parseInt(stmIn.readLine());
						LocY = Integer.parseInt(stmIn.readLine());

						for (int i=0;i<mapSizeX;i++)
						{
							for (int i2=0;i2<mapSizeY;i2++)
							{
								shrMap[i][i2] = Short.parseShort(stmIn.readLine());
							}
						}
						
						Iterator<Entity> iter = vctEntities.iterator();
						while (iter.hasNext())
						{
							entStore = iter.next();
							if (Math.abs(entStore.intLocX - LocX) > viewRangeX || Math.abs(entStore.intLocY - LocY) > viewRangeY)
							{
								iter.remove();
								hmpEntities.remove(entStore.ID);
							}
						}

						frame.lblInfo.setText("HP: "+inthp+"/"+intmaxhp+" MP: "+intsp+"/"+intmaxsp+" Loc: "+LocX+"/"+LocY);
						vctMerchantItems = new Vector(0,5);
						reloadJComboBoxLook();
						reloadJComboBoxGet();
						reloadJComboBoxAttack();
						findPlayer();
					}
		            break;
		        }
		        case (3):
		        {
		        	addText(stmIn.readLine()+"\n");
		            break;
		        }
		        case (4):
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
					}
		            break;
		        }
		        case (5):
		        {
					inthp = Integer.parseInt(stmIn.readLine());
					intmaxhp = Integer.parseInt(stmIn.readLine());
					intsp = Integer.parseInt(stmIn.readLine());
					intmaxsp = Integer.parseInt(stmIn.readLine());
					frame.lblInfo.setText("HP: "+inthp+"/"+intmaxhp+" MP: "+intsp+"/"+intmaxsp+" Loc: "+LocX+"/"+LocY);
		            break;
		        }
		        case (6):
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
						case (0): vctChoiceDropItems.addElement(strStore); break;
						case (1): vctChoiceDropItems.addElement(strStore); frame.frmEquipment.chcWield.addItem(strStore); break;
						case (2): vctChoiceDropItems.addElement(strStore); frame.frmEquipment.chcArms.addItem(strStore); break;
						case (3): vctChoiceDropItems.addElement(strStore); frame.frmEquipment.chcLegs.addItem(strStore); break;
						case (4): vctChoiceDropItems.addElement(strStore); frame.frmEquipment.chcTorso.addItem(strStore); break;
						case (5): vctChoiceDropItems.addElement(strStore); frame.frmEquipment.chcWaist.addItem(strStore); break;
						case (6): vctChoiceDropItems.addElement(strStore); frame.frmEquipment.chcNeck.addItem(strStore); break;
						case (7): vctChoiceDropItems.addElement(strStore); frame.frmEquipment.chcSkull.addItem(strStore); break;
						case (8): vctChoiceDropItems.addElement(strStore); frame.frmEquipment.chcEyes.addItem(strStore); break;
						case (9): vctChoiceDropItems.addElement(strStore); frame.frmEquipment.chcHands.addItem(strStore); break;
						}
						intStore = Integer.parseInt(stmIn.readLine());
					}	
					} 
					catch (IOException | NumberFormatException e) {}
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
		        case (7):
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
					}catch (IOException e) { System.err.println("Error loading equipment" + e.toString()); }
					break;
				}
				case (8):
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
					}catch (IOException e) { System.err.println("Error loading stats" + e.toString()); }
					break;
				}
				case (9):
				{
			    	blnLoaded = false;
			    	break;
				}
				case (10):
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
				case(11):
				{
					try
					{
						addText("Loading music.\n");
						intMusicTypes = Integer.parseInt(stmIn.readLine());
						audMusic = new Clip[intMusicTypes][];
						intNumSongs = new int[intMusicTypes];
						for (intStore=0;intStore<intMusicTypes;intStore++)
						{
							intNumSongs[intStore] = Integer.parseInt(stmIn.readLine());
							audMusic[intStore] = new Clip[intNumSongs[intStore]];
							for (intStore2=0;intStore2<intNumSongs[intStore];intStore2++)
							{
								strStore = stmIn.readLine();
								try
								{
									AudioInputStream audioInputStream = AudioSystem.getAudioInputStream(new File(strStore).getAbsoluteFile());
									audMusic[intStore][intStore2] = AudioSystem.getClip();
									audMusic[intStore][intStore2].open(audioInputStream);
									audioInputStream.close();
								}catch(Exception e) { System.err.println("Error while trying to load music file "+strStore+":"+e.toString()); }
							}
						}
						addText("Music loaded.\n");
					}catch(IOException | NumberFormatException e)
					{
						blnMusic = false;
						addText("Your java virtual machine does not support midi music\n");
						System.err.println("Error while trying to load music files:"+e.toString());
					}
					break;
				}
				case (60): // playLocationMusic
				{
					if (blnMusic) {
						try {
							int songIndex = Integer.parseInt(stmIn.readLine());
							if (audMusicPlaying != null) {
								audMusicPlaying.stop();
							}
							if (audLocationMusic != null && songIndex >= 0 && songIndex < audLocationMusic.length) {
								audMusicPlaying = audLocationMusic[songIndex];
								if (audMusicPlaying != null) {
									audMusicPlaying.setFramePosition(0);
									audMusicPlaying.loop(Clip.LOOP_CONTINUOUSLY);
								}
							}
						} catch (Exception e) {
							System.err.println("Error playing location music: " + e.toString());
						}
					}
					break;
				}
				case (61): // stopLocationMusic
				{
					if (blnMusic && audMusicPlaying != null) {
						audMusicPlaying.stop();
					}
					break;
				}
                case (36):
                {
                    try {
                        long attackerID = Long.parseLong(stmIn.readLine());
                        long defenderID = Long.parseLong(stmIn.readLine());
                        int damage = Integer.parseInt(stmIn.readLine());

                        synchronized(vctEntities) {
                            Entity attacker = hmpEntities.get(attackerID);
                            Entity defender = hmpEntities.get(defenderID);

                            if (attacker != null && defender != null) {
                                // Check for an existing splat to aggregate
                                DamageSplat existingSplat = null;
                                for (DamageSplat splat : vctDamageSplats) {
                                    if (splat.defenderID == defenderID && splat.lifetime > 50) {
                                        existingSplat = splat;
                                        break;
                                    }
                                }

                                if (existingSplat != null) {
                                    existingSplat.damage += damage;
                                    existingSplat.text = String.valueOf(existingSplat.damage);
                                    existingSplat.lifetime = 60; // Reset lifetime
                                } else {
                                    DamageSplat splat = new DamageSplat(
                                        damage,
                                        attackerID,
                                        defenderID,
                                        defender == player ? Color.CYAN : Color.RED
                                    );
                                    
                                    double angle = Math.atan2(defender.pixelY - attacker.pixelY, defender.pixelX - attacker.pixelX);
                                    angle += (Math.random() - 0.5) * 1.0; // Increased randomness
                                    splat.vx = Math.cos(angle) * 0.75; // Halved speed
                                    splat.vy = Math.sin(angle) * 0.75; // Halved speed
                                    splat.x = defender.pixelX + intImageSize / 2;
                                    splat.y = defender.pixelY;

                                    vctDamageSplats.add(splat);
                                }
                            }
                        }
                    } catch (Exception e) {
                        System.err.println("Error creating damage splat: " + e.getMessage());
                    }
                    break;
                }
                case (37):
                {
                    try {
                        playerTicks = Long.parseLong(stmIn.readLine());
                    } catch (Exception e) {
                        System.err.println("Error reading playerTicks: " + e.getMessage());
                    }
                    break;
                }
				case(12):
				{
					if (blnMusic)
					{
					try
					{
						intStore = Integer.parseInt(stmIn.readLine());
						if (audMusicPlaying != null) audMusicPlaying.stop();
						audMusicPlaying = audMusic[intStore][(int)(Math.random()*intNumSongs[intStore])];
						audMusicPlaying.loop(Clip.LOOP_CONTINUOUSLY);
					}catch(IOException | NumberFormatException e) { System.err.println("Error while trying to play music file:" + e.toString()); }
					}
					break;
				}
				case(13):
				{
					stmOut.writeBytes("notdead\n");
					break;
				}
				case (14):
				{
			    	blnLoaded = true;
			    	break;
				}
				case (15):
				{
					try
					{
						int sfxIndex = Integer.parseInt(stmIn.readLine());
						if (audSFX != null && sfxIndex >= 0 && sfxIndex < audSFX.length && audSFX[sfxIndex] != null) {
							audSFX[sfxIndex].setFramePosition(0);
							audSFX[sfxIndex].start();
						}
					}catch(Exception e){}
					break;
				}
				case (16):
				{
					synchronized(vctEntities)
					{
					lngStore = Long.parseLong(stmIn.readLine());
					removeEntity(lngStore);
					reloadJComboBoxLook();
					reloadJComboBoxGet();
					reloadJComboBoxAttack();
					}
					break;
				}
				case (17):
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
				case (18):
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
				case (19):
				{
		        	synchronized(vctEntities)
		        	{
					mapSizeX = Integer.parseInt(stmIn.readLine());
					mapSizeY = Integer.parseInt(stmIn.readLine());
					viewRangeX = (mapSizeX-1)/2;
					viewRangeY = (mapSizeY-1)/2;
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
				case (20):
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
				case (21):
				{
					frmMerchant.hide();
					vctMerchantItems = new Vector(0,5);
					vctSell = new Vector(0,5);
					frame.btnMerchant.setEnabled(false);
					break;
				}
				case (22):
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
				case (23):
				{
                    int red = Integer.parseInt(stmIn.readLine());
                    int green = Integer.parseInt(stmIn.readLine());
                    int blue = Integer.parseInt(stmIn.readLine());
                    String text = stmIn.readLine();
                    String formattedText = "<RGB " + red + " " + green + " " + blue + ">" + text + "</RGB>\n";
                    addText(formattedText);
		            break;
				}
				case (24):
				{
					long ID = Long.parseLong(stmIn.readLine());
					synchronized(vctEntities)
    				{
						entStore = hmpEntities.get(ID);
						if (entStore != null) {
							if (!entStore.isMoving) {
								startMove(entStore, 0);
							} else {
								entStore.queuedMoves.add(0);
							}
						}
                    }
		            break;
				}
				case (25):
				{
					long ID = Long.parseLong(stmIn.readLine());
					synchronized(vctEntities)
    				{
						entStore = hmpEntities.get(ID);
						if (entStore != null) {
							if (!entStore.isMoving) {
								startMove(entStore, 1);
							} else {
								entStore.queuedMoves.add(1);
							}
						}
                    }
		            break;
				}
				case (26):
				{
					long ID = Long.parseLong(stmIn.readLine());
					synchronized(vctEntities)
    				{
						entStore = hmpEntities.get(ID);
						if (entStore != null) {
							if (!entStore.isMoving) {
								startMove(entStore, 2);
							} else {
								entStore.queuedMoves.add(2);
							}
						}
                    }
		            break;
				}
				case (27):
				{
					long ID = Long.parseLong(stmIn.readLine());
					synchronized(vctEntities)
    				{
						entStore = hmpEntities.get(ID);
						if (entStore != null) {
							if (!entStore.isMoving) {
								startMove(entStore, 3);
							} else {
								entStore.queuedMoves.add(3);
							}
						}
                    }
		            break;
				}
				case (28):
				{
					range = Integer.parseInt(stmIn.readLine());
					break;
				}
				case (29):
				{
					lngStore = Long.parseLong(stmIn.readLine());
					intStore = Integer.parseInt(stmIn.readLine());
					synchronized(vctEntities)
					{
						entStore = hmpEntities.get(lngStore);
						if (entStore != null)
						{
							entStore.intFlag = intStore;
						}
					}
					break;
				}
				case (30):
				{
					synchronized(vctEntities)
					{
						for (int i=0; i<vctEntities.size(); i++) {
							entStore = (Entity)vctEntities.elementAt(i);
							entStore.intFlag = 0;
						}
					}
					break;	
				}
				case (31):
				{
					if (!frmBattle.isShowing())
						frmBattle.show();
					strStore = stmIn.readLine();
					frmBattle.setTitle(strStore);
					frmBattle.txtEdit.setText("");
                    frame.lblTarget.setText("");
                    break;
				}
				case (32):
				{
					if (!frmBattle.isShowing())
						frmBattle.show();
					strStore = stmIn.readLine();
					frmBattle.setTitle(strStore);
                    frame.lblTarget.setText(strStore);
					break;
				}
				case (33):
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
                        if (HpData != null) {
                            String[] hpValues = HpData.trim().split(" ");
                            int newHp = Integer.parseInt(hpValues[0]);
                            int newMaxHp = Integer.parseInt(hpValues[1]);

                            synchronized(vctEntities) {
                                entStore = hmpEntities.get(opponentID);
                                if (entStore != null) {
                                    entStore.hp = newHp;
                                    entStore.maxhp = newMaxHp;
                                }
                            }
                        }
                    } catch (Exception e) {
                        System.err.println("Error updating opponent HP: " + e.getMessage());
                    }
                    break;
                }
                case (35):
				{
					vctTileAnims = new Vector<TileAnim>(0,5);
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
				default:
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
		blnMenuRefresh = true;
		try
		{
			frame.chcLook.removeAllItems();
		}catch (Exception e){};
		frame.chcLook.addItem("Look");
		for (Entity entStore : hmpEntities.values())
		{
			if (Math.abs(LocX - entStore.intLocX) <= 10 && Math.abs(LocY - entStore.intLocY) <= 5)
			{
				frame.chcLook.addItem(entStore.strName + " #" + entStore.ID);
			}
		}
		blnMenuRefresh = false;
	}
	
	public void reloadJComboBoxAttack()
	{
		blnMenuRefresh = true;
		try
		{
			frame.chcAttack.removeAllItems();
		}catch (Exception e){};
		frame.chcAttack.addItem("Attack");
		for (Entity entStore : hmpEntities.values())
		{
			if ((entStore.intType==0 || entStore.intType==1 || entStore.intType==4) && (Math.abs(LocX - entStore.intLocX) + Math.abs(LocY - entStore.intLocY) <= range))
			{
				frame.chcAttack.addItem(entStore.strName + " #" + entStore.ID);
			}
		}
		blnMenuRefresh = false;
	}
	
	public void reloadJComboBoxGet()
	{
		blnMenuRefresh = true;
		try
		{
			frame.chcGet.removeAllItems();
		}catch (Exception e){};
		frame.chcGet.addItem("Get");
		for (Entity entStore : hmpEntities.values())
		{
			if (entStore.intType==1 && (LocX - entStore.intLocX) + (LocY - entStore.intLocY) < 2)
			{
				frame.chcGet.addItem(entStore.strName + " #" + entStore.ID);
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

	void findPlayer() {
	    synchronized(vctEntities) {
	        for(int i=0; i<vctEntities.size(); i++) {
	            Entity ent = (Entity)vctEntities.elementAt(i);
	            if (ent.intLocX == LocX && ent.intLocY == LocY && ent.intType == 0) {
	                player = ent;
	                if (cameraX == 0 && cameraY == 0) {
						cameraX = player.pixelX - ((double)frame.pnlGraphics.getWidth() / 2.0);
						cameraY = player.pixelY - ((double)frame.pnlGraphics.getHeight() / 2.0);
	                }
	                return;
	            }
	        }
	    }
	}
		
	public void scaleImages()
	{
	}
	
	public void scaleWindow()
	{
		int width = frame.pnlContents.getBounds().width-310;
		intImageSize = width/21;
		if (intImageSize < 1)
			intImageSize = 1;
		
		width = intImageSize * 21;
		int height = intImageSize * 11;
		
		if (height > frame.pnlContents.getBounds().height-100) {
			height = frame.pnlContents.getBounds().height-100;
			intImageSize = height / 11;
			if (intImageSize < 1)
				intImageSize = 1;
			width = intImageSize * 21;
			height = intImageSize * 11;
		}

		frame.pnlGraphics.setSize(width,height); 
		imgDisplay = frame.pnlGraphics.createImage(width, height);
		gD = imgDisplay.getGraphics();
		g = frame.pnlGraphics.getGraphics();
		frame.txtInput.setLocation(0,frame.pnlGraphics.getBounds().height);
		frame.scrText.setLocation(0,frame.pnlGraphics.getBounds().height+25);
		frame.scrText.setSize(frame.pnlContents.getBounds().width - 200,frame.pnlContents.getBounds().height-frame.pnlGraphics.getBounds().height-25);
		frame.txtInput.setSize(frame.pnlContents.getBounds().width - 200,25);
		frame.pnlStats.setSize(frame.pnlContents.getBounds().width-frame.pnlGraphics.getBounds().width,frame.pnlContents.getBounds().height);
		frame.pnlStats.setLocation(frame.pnlGraphics.getBounds().width,0);
		frame.txtOther.setSize(frame.pnlStats.getBounds().width-140,frame.pnlStats.getBounds().height-60);
        frame.lblTarget.setSize(frame.pnlStats.getBounds().width, 20);
		frame.lblInfo.setSize(frame.pnlContents.getBounds().width,20);
		frame.scrText.getVerticalScrollBar().setValue(frame.scrText.getVerticalScrollBar().getMaximum());
		System.gc();
	}
	
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
 	
 			int destX = (int)( (x + cameraX) / intImageSize );
 			int destY = (int)( (y + cameraY) / intImageSize );
 			
 			try
 			{
 	 			stmOut.writeBytes("findpath " + destX + " " + destY + "\n");
 			}catch(IOException e)
 			{
 	 			addText("Error at mouseDown(): "+e.toString()+"\n");
 			}
		}
		frame.txtInput.requestFocus();
	}
        @Override
	public void mouseEntered(MouseEvent evt){}
        @Override
	public void mouseExited(MouseEvent evt){}

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
	    		frame.txtInput.setText("");
	    	}
	    	if (blnLoaded)
	    	{
				if (player != null && !player.isMoving) {
					switch (nkey)
					{
						case 38: stmOut.writeBytes("n\n"); if (strSet != null) stmOut.writeBytes(strSet+"\n"); break;
						case 40: stmOut.writeBytes("s\n"); if (strSet != null) stmOut.writeBytes(strSet+"\n"); break;
						case 37: stmOut.writeBytes("w\n"); if (strSet != null) stmOut.writeBytes(strSet+"\n"); break;
						case 39: stmOut.writeBytes("e\n"); if (strSet != null) stmOut.writeBytes(strSet+"\n"); break;
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
		if (thrGraphics != null) {
			update(thrGraphics.intAnimTick);
			paint();
		}
	}
        @Override
	public void componentMoved(ComponentEvent e){}
        @Override
	public void componentShown(ComponentEvent e){}
        @Override
	public void componentHidden(ComponentEvent e){}
	
	void thisWindowClosing(WindowEvent e)
	{
		frame.setVisible(false);
	}
	
	private void startMove(Entity ent, int direction) {
		if (direction < 0 || direction > 3) return;

		ent.walkFrameToggle = !ent.walkFrameToggle;
		int frameOffset = ent.walkFrameToggle ? 1 : 0;

		if (direction == 0) { // North
			if (ent.intStep != -1) ent.intStep = 0 + frameOffset;
			ent.intMoveDirection = 0;
			ent.targetX = ent.pixelX;
			ent.targetY = ent.pixelY - intImageSize;
			ent.pendingLocX = (int)ent.intLocX;
			ent.pendingLocY = (int)ent.intLocY - 1;
		} else if (direction == 1) { // South
			if (ent.intStep != -1) ent.intStep = 2 + frameOffset;
			ent.intMoveDirection = 1;
			ent.targetX = ent.pixelX;
			ent.targetY = ent.pixelY + intImageSize;
			ent.pendingLocX = (int)ent.intLocX;
			ent.pendingLocY = (int)ent.intLocY + 1;
		} else if (direction == 2) { // West
			if (ent.intStep != -1) ent.intStep = 4 + frameOffset;
			ent.intMoveDirection = 2;
			ent.targetX = ent.pixelX - intImageSize;
			ent.targetY = ent.pixelY;
			ent.pendingLocX = (int)ent.intLocX - 1;
			ent.pendingLocY = (int)ent.intLocY;
		} else if (direction == 3) { // East
			if (ent.intStep != -1) ent.intStep = 6 + frameOffset;
			ent.intMoveDirection = 3;
			ent.targetX = ent.pixelX + intImageSize;
			ent.targetY = ent.pixelY;
			ent.pendingLocX = (int)ent.intLocX + 1;
			ent.pendingLocY = (int)ent.intLocY;
		}
		ent.hasPendingMove = true;
		ent.isMoving = true;
	}

	public void update(int intAnimTick)
	{
		final double entityMoveSpeed = (double)intImageSize / (playerTicks / 40.0);

	    synchronized (vctDamageSplats) {
	        for (int i = vctDamageSplats.size() - 1; i >= 0; i--) {
	            DamageSplat splat = vctDamageSplats.elementAt(i);
	            splat.x += splat.vx;
	            splat.y += splat.vy;
	            splat.lifetime--;
	            if (splat.lifetime <= 0) {
	                vctDamageSplats.removeElementAt(i);
	            }
	        }
	    }

	    synchronized (vctEntities) {
	        for (int i=0; i<vctEntities.size(); i++) {
	            Entity ent = (Entity)vctEntities.elementAt(i);
	            if (ent.isMoving) {
	                double dx = ent.targetX - ent.pixelX;
	                double dy = ent.targetY - ent.pixelY;
					double distance = Math.sqrt(dx*dx + dy*dy);
	
	                if (distance < entityMoveSpeed) {
	                    ent.pixelX = ent.targetX;
	                    ent.pixelY = ent.targetY;
	                    ent.isMoving = false;
	                    ent.intMoveDirection = -1;

						if (ent.hasPendingMove) {
							ent.intLocX = ent.pendingLocX;
							ent.intLocY = ent.pendingLocY;
							ent.hasPendingMove = false;
						}

						if (!ent.queuedMoves.isEmpty()) {
							startMove(ent, ent.queuedMoves.poll());
						}

	                    if (ent == player) {
	                        reloadJComboBoxAttack();
	                    }
	                } else { 
						double angle = Math.atan2(dy, dx);
						ent.pixelX += entityMoveSpeed * Math.cos(angle);
						ent.pixelY += entityMoveSpeed * Math.sin(angle);
	                }
	            }
	        }
	    }
	
		synchronized (vctEntities) {
			if (player != null) {
				if (frame.pnlGraphics.getWidth() == 0) return;
	
				double targetCameraX = player.pixelX - (frame.pnlGraphics.getWidth() / 2.0);
				double targetCameraY = player.pixelY - (frame.pnlGraphics.getHeight() / 2.0);
	
				double minCameraX = (double)(LocX - viewRangeX) * intImageSize;
				double minCameraY = (double)(LocY - viewRangeY) * intImageSize;
				double maxCameraX = (double)(LocX - viewRangeX + mapSizeX) * intImageSize - frame.pnlGraphics.getWidth();
				double maxCameraY = (double)(LocY - viewRangeY + mapSizeY) * intImageSize - frame.pnlGraphics.getHeight();
	
				targetCameraX = Math.max(minCameraX, Math.min(targetCameraX, maxCameraX));
				targetCameraY = Math.max(minCameraY, Math.min(targetCameraY, maxCameraY));
	
				cameraX = targetCameraX;
				cameraY = targetCameraY;
			}
			
			gD.setColor(Color.black);
			gD.fillRect(0, 0, imgDisplay.getWidth(null), imgDisplay.getHeight(null));
		
			int startTileX = (int)Math.floor(cameraX / intImageSize);
			int startTileY = (int)Math.floor(cameraY / intImageSize);
			int endTileX = (int)Math.floor((cameraX + frame.pnlGraphics.getWidth()) / intImageSize) + 1;
			int endTileY = (int)Math.floor((cameraY + frame.pnlGraphics.getHeight()) / intImageSize) + 1;
	
			double offsetX = cameraX - (startTileX * intImageSize);
			double offsetY = cameraY - (startTileY * intImageSize);
	
			for (int i=startTileX; i<endTileX; i++) {
				for (int i2=startTileY; i2<endTileY; i2++) {
					int mapGridX = i - (LocX - viewRangeX);
					int mapGridY = i2 - (LocY - viewRangeY);
	
					if (mapGridX >= 0 && mapGridX < mapSizeX && mapGridY >= 0 && mapGridY < mapSizeY) {
						try {
							int tileID = shrMap[mapGridX][mapGridY];
							int tileIDToDraw = tileID;
							TileAnim anim = null;
							if (vctTileAnims != null) {
								for (int j=0; j<vctTileAnims.size(); j++) {
									TileAnim tempAnim = vctTileAnims.elementAt(j);
									if (tempAnim.tileID == tileID) {
										anim = tempAnim;
										break;
									}
								}
							}
			
							double screenX = (i - startTileX) * intImageSize - offsetX;
							double screenY = (i2 - startTileY) * intImageSize - offsetY;
			
							if (anim != null) {
								int frame = (intAnimTick / anim.delay) % anim.frameCount;
								tileIDToDraw = tileID + frame;
							}
							
							gD.drawImage(imgOriginalMap,
										(int)screenX, (int)screenY,
										(int)(screenX + intImageSize), (int)(screenY + intImageSize),
										tileIDToDraw * intOriginalTileSize, 0,
										(tileIDToDraw + 1) * intOriginalTileSize, intOriginalTileSize,
										null);
	
						} catch(Exception e) {}
					}
				}
			}
		}
	
	    synchronized (vctEntities) {
	        Vector<Entity> sortedEntities = new Vector<>(vctEntities);
	        Collections.sort(sortedEntities, new Comparator<Entity>() {
	            @Override
	            public int compare(Entity e1, Entity e2) {
	                return Double.compare(e1.pixelY, e2.pixelY);
	            }
	        });

	        for (Entity entStore : sortedEntities) {
	            drawEntity(entStore);
	        }
	    }
	    
	    synchronized (vctDamageSplats) {
	    	Font originalFont = gD.getFont();
	    	Font boldFont = new Font(originalFont.getName(), Font.BOLD, 16);
	    	gD.setFont(boldFont);
	        for (DamageSplat splat : vctDamageSplats) {
	            double screenX = splat.x - cameraX;
	            double screenY = splat.y - cameraY;
	            gD.setColor(Color.BLACK);
	            gD.drawString(splat.text, (int)screenX + 1, (int)screenY + 1);
	            gD.setColor(splat.color);
	            gD.drawString(splat.text, (int)screenX, (int)screenY);
	        }
	        gD.setFont(originalFont);
	    }
	}
	
	void drawEntity(Entity entStore)
	{
		double screenX = entStore.pixelX - cameraX;
		double screenY = entStore.pixelY - cameraY;

		if (entStore.intFlag != 0)
		{
			if (entStore.intFlag == 1)
			{
                double CurrentHPWidth = (double) intImageSize / intmaxhp;
                double HPBarValue = CurrentHPWidth * inthp;
				gD.setColor(Color.green);
				gD.drawRoundRect((int)screenX,(int)screenY,
							intImageSize,intImageSize,intImageSize/3,intImageSize/3);
			    gD.setColor(new Color(35, 35, 35));
                gD.fillRect((int)screenX - 1, (int)screenY - 66, (int)(intImageSize) + 2, 12);
                gD.setColor(new Color(255, 0, 30));
                gD.fillRect((int)screenX, (int)screenY - 65, (int) HPBarValue, 10);
            }else if (entStore.intFlag == 2)
			{
                if (entStore.maxhp > 0) {
				double CurrentHPWidth2 = (double) intImageSize / entStore.maxhp;
                double HPBarValue2 = CurrentHPWidth2 * entStore.hp;
				gD.setColor(Color.red);
				gD.drawRoundRect((int)screenX,(int)screenY,
							intImageSize,intImageSize,intImageSize/3,intImageSize/3);
			    gD.setColor(new Color(35, 35, 35));
                gD.fillRect((int)screenX - 1, (int)screenY - 66, (int)(intImageSize) + 2, 12);
                gD.setColor(new Color(255, 0, 30));
                gD.fillRect((int)screenX, (int)screenY - 65, (int) HPBarValue2, 10);
                }
            }
		}

		if (entStore.intStep == -1)
		{
			try
			{
				int spriteScreenSize = intImageSize * 2;
				int xPos = (int)screenX - (spriteScreenSize / 4);
				int yPos = (int)screenY - (spriteScreenSize / 2);
				gD.drawImage(imgOriginalSprites,
							xPos, yPos,
							xPos + spriteScreenSize, yPos + spriteScreenSize,
							entStore.intImage*intOriginalSpriteSize,0,
							(entStore.intImage+1)*intOriginalSpriteSize,intOriginalSpriteSize,
							null);
			}catch(Exception e){}
		}else
		{
			try
			{
				int playerScreenSize = intImageSize * 2;
				int xPos = (int)screenX - (playerScreenSize / 4);
				int yPos = (int)screenY - (playerScreenSize / 2);
				gD.drawImage(imgOriginalPlayers,
								xPos, yPos,
								xPos + playerScreenSize, yPos + playerScreenSize,
								(entStore.intImage*8+entStore.intStep)*intOriginalPlayerSize,0,
								(entStore.intImage*8+entStore.intStep+1)*intOriginalPlayerSize,intOriginalPlayerSize,
								null);
			}catch(Exception e){}
		}
		gD.setColor(Color.black);
		gD.drawString(entStore.strName,(int)screenX-1,(int)(screenY+intImageSize)); 
		gD.setColor(Color.white);
		gD.drawString(entStore.strName,(int)screenX,(int)(screenY+intImageSize)); 
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