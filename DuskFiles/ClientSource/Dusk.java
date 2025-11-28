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
import java.util.ArrayList;
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
import javax.swing.ImageIcon;
import javax.swing.text.*;
import javax.swing.JScrollBar;
import javax.swing.UIManager;
import javax.swing.SwingUtilities;
import java.awt.AlphaComposite;
import java.awt.Stroke;
import java.awt.BasicStroke;
import java.util.List;
import java.util.concurrent.CountDownLatch;
import java.awt.geom.AffineTransform;

import duskz.protocol.*;
import duskz.protocol.DuskMessage.*;

public class Dusk implements Runnable,MouseListener,KeyListener,ComponentListener, ImageObserver, DuskProtocol
{
	static String strVersion="3.0 dev";
	Status status = new Status();
	long loncash;
	boolean blnLoaded,
			blnRefreshing,
			blnMenuRefresh,
			blnConnected=false,
			blnApplet;
	int intMusicTypes;
	int intNumSongs[];
	List<TransactionItem> buyList = new ArrayList<>();
	List<TransactionItem> sellList = new ArrayList<>();
	Wearing worn = new Wearing();
	EquipmentFrame frmEquipment;
	private Socket socket;
	private DataOutputStream outstream;
	private DataInputStream instream;
	Thread gameThread;
	// outstanding queries, do one at a time
	ListMessage pendingQueries;
	int pendingQueryIndex;
	int queryID;
	// message to send when all queries complete
	ListMessage queryMessage;
	// Where to put the query fields
	ListMessage queryFields;
	
    private static final Comparator<Entity> ySortComparator = new Comparator<Entity>() {
        @Override
        public int compare(Entity e1, Entity e2) {
            return Double.compare(e1.pixelY, e2.pixelY);
        }
    };
    private ArrayList<Entity> sortedEntities;
    private int regenerateOrbCounter = 0;
	private int lightningTimer = 0;

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
    long playerTicks = 200;
    volatile Clip audSFX[];
    Clip audMusic[][];
	volatile Clip audLocationMusic[];
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
    Vector<CrossMarker> vctCrossMarkers;
    Vector<Particle> vctParticles;
	Vector<Particle> vctParticlesBehind;
	List<Particle> tempNewParticlesFront;
	List<Particle> tempNewParticlesBehind;
    
	Image imgOriginalSprites;
	Image imgOriginalPlayers;
	Image imgOriginalMap, imgOriginalMapAlpha, imgOriginalMapAlpha2;
	Image imgSprites;
	Image imgPlayers;
	Image imgMap;
	Image imgDisplay;
	Image imgArmorParticle;
	Image imgHardenParticle;
	
	Socket sckConnection;
	DataOutputStream stmOut;
	DataInputStream stmIn;
	
	short shrMap[][], shrMapAlpha[][], shrMapAlpha2[][];
	int mapSizeX=21,
		mapSizeY=15,
		viewRangeX=10,
		viewRangeY=7;
	
	HashMap<Long, Entity> hmpEntities;
	
	boolean intStep,
			blnMusic=false;
    Thread thrRun;
    
    Entity player;
    	
    int intImageSize = 32;
    
    String strSet = null;
    
    MainFrame frame;
	MerchantFrame frmMerchant;
	
	Graphics g;
	Graphics gD;
	GraphicsThread thrGraphics;
	MovementManager movementManager;
	Camera camera;
	
	String address = "z.comet-richter.ts.net";
	int port = 7474;
	String username;
	String password;
    
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
			frame.docGossip.insertString(0,"Dusk Client v"+strVersion+" -- https://duskrpg.blogspot.com/\n",null);
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
				connect(address, port, "", "");


		    }else
                    {
				addText("<RGB 255 0 0>Click \"connect\" to connect to a server and begin playing.</RGB>\n");
			}
			

			try {
				imgArmorParticle = new ImageIcon(Dusk.class.getResource("zmagiccarmor2.png")).getImage();
				if (imgArmorParticle == null || imgArmorParticle.getWidth(null) <= 0) {
					System.err.println("Failed to load or invalid armor particle image: zmagiccarmor.png. It might be missing or empty.");
					imgArmorParticle = null;
				}
			} catch (Exception e) {
				System.err.println("Error loading armor particle image: " + e.toString());
				imgArmorParticle = null;
			}

			try {
				imgHardenParticle = new ImageIcon(Dusk.class.getResource("zmagicwharden.png")).getImage();
				if (imgHardenParticle == null || imgHardenParticle.getWidth(null) <= 0) {
					System.err.println("Failed to load or invalid harden particle image: zmagicwharden.png. It might be missing or empty.");
					imgHardenParticle = null;
				}
			} catch (Exception e) {
				System.err.println("Error loading harden particle image: " + e.toString());
				imgHardenParticle = null;
			}

			thrGraphics = new GraphicsThread(this, null);
		}catch (Exception e)
		{
		}
	}

	public void spawnHardenParticles(Entity target) {
		if (target == null || imgHardenParticle == null) return;
	
		synchronized (vctParticles) {
			int lifetime = 80; // Duration of the spiral in frames
			
			// Spawn two particles on opposite sides
			for (int i = 0; i < 2; i++) {
				// The particle's 'timer' field will be used to store its starting angle.
				// This allows each particle to know its starting position in the circle.
				int startAngleDeg = i * 180; // 0 and 180 degrees

				// We don't need to set the initial position here, as the update loop
				// will calculate it based on the angle and radius.
				// We also set velocity to 0 as it's not used for this animation.
				Particle shield = new Particle(
					0, 0, // Initial position (will be updated immediately)
					0, 0, // Initial velocity (not used)
					lifetime,
					null, 0, ParticleType.HARDEN, imgHardenParticle, 
					false, false, null, null, 
					startAngleDeg, // Store start angle in timer
					target,        // Set parent entity
					false,         // renderBehind
					false          // lockToScreenCenter
				);
				vctParticles.add(shield);
			}
		}
	}

	public void spawnShockParticles(Entity target) {
		if (target == null) return;
	
		synchronized (vctParticles) {
			// The top of the bolt should be above the target, appearing to come from the sky.
			double startX = target.pixelX + (intImageSize / 2.0);
			double startY = target.pixelY - 250; // Start high above the target
	
			// The end of the bolt is the center of the target.
			double endX = target.pixelX + (intImageSize / 2.0);
			double endY = target.pixelY;
	
			// Create dummy particles to represent the start and end points for the lightning bolt.
			Particle startPoint = new Particle(startX, startY, 0, 0, 1, null, 0, null);
			Particle endPoint = new Particle(endX, endY, 0, 0, 1, null, 0, null);
	
			// Generate the lightning particles.
			List<Particle> newParticles = LightningBolt.create(startPoint, endPoint, Color.YELLOW, 30, ParticleType.SHOCK);
			
			// Add the new particles to the main particle list to be rendered.
			vctParticles.addAll(newParticles);
		}
	}

	public void spawnDetectInvisParticles(Entity target, int duration) {
		if (target == null) return;
	
		int effectLifetime = duration * 50;
		if (effectLifetime <= 0) {
			effectLifetime = 100;
		}
	
		double centerX = target.pixelX + (intImageSize / 2.0);
		double headY = target.pixelY - intImageSize - 4;
	
		Particle spawner = new Particle(
			centerX, headY, 0, 0, effectLifetime,
			null, 0, ParticleType.DETECT_INVIS_SPAWNER,
			null, false, false, null, null, 10, target,
			false,
			true
		);
		synchronized (vctParticles) {
			vctParticles.add(spawner);
		}
	}

	static public void main(String[] args) 
	{
		new Dusk();
	}
	
	public void connect(String address, int port, String user, String pass) {
		// Connect to Server
		try {
			this.username = user;
			this.password = pass;
			socket = new Socket(address, port);
			outstream = new DataOutputStream(socket.getOutputStream());
			instream = new DataInputStream(new BufferedInputStream(socket.getInputStream()));
			addText("Please enter your character name or the name of a new character: \n");

			// Load Images and start checking for incoming commands
			gameThread = new Thread(this);
			gameThread.start();
			blnConnected = true;
			//Initialize objects
			hmpEntities = new HashMap<Long, Entity>();
			frmMerchant = new MerchantFrame(this);
			frmEquipment = new EquipmentFrame(this);
			vctEntities = new Vector(0,3);
			vctMerchantItems = new Vector(0,3);
			vctSell = new Vector(0,3);
			vctChoiceDropItems = new Vector(0,3);
			vctChoiceActionItems = new Vector(0,3);
			vctTileAnims = new Vector<TileAnim>(0,3);
			vctDamageSplats = new Vector<DamageSplat>(0,3);
			vctCrossMarkers = new Vector<CrossMarker>(0,3);
			vctParticles = new Vector<Particle>(0,3);
			vctParticlesBehind = new Vector<Particle>(0,3);
			sortedEntities = new ArrayList<Entity>();
			tempNewParticlesFront = new ArrayList<Particle>();
			tempNewParticlesBehind = new ArrayList<Particle>();
			movementManager = new MovementManager();
			camera = new Camera(null);

			buyList.clear();
			sellList.clear();

			// try a login command
			ListMessage lm = new ListMessage(MSG_AUTH);
			lm.add(FIELD_AUTH_PLAYER, user);
			lm.add(FIELD_AUTH_PASS, pass);
			send(lm);

		} catch (Exception e) {
			addText("Error connecting to server: " + e.toString() + "\n");
			return;
		}
	}

	/* public void preloadAudioInBackground() {
		new Thread(() -> {
			SwingUtilities.invokeLater(() -> addText("Loading audio...!!!FREEZE WARNING!!! CLICK THE SLEEP AND WAKE BUTTON TO START PLAYING!!!\n"));
			final int numSoundEffects = 12;
			final String[] locationMusicFiles = {"a_better_world-orch.wav", "The_9th_Circle_V2.wav"};

			audSFX = new Clip[numSoundEffects];
			audLocationMusic = new Clip[locationMusicFiles.length];

			// Preload sound effects sequentially
			for (int i = 0; i < numSoundEffects; i++) {
				String fileName = String.format("/app/rc/somedusk/audio/sfx/hit%02d.wav", i + 1);
				AudioInputStream audioInputStream = null;
				try {
					File audioFile = new File(fileName);
					if (audioFile.exists()) {
						audioInputStream = AudioSystem.getAudioInputStream(audioFile);
						Clip clip = AudioSystem.getClip();
						clip.open(audioInputStream);
						audSFX[i] = clip;
					} else {
						System.err.println("Sound effect not found for preloading: " + fileName);
					}
				} catch (Exception e) {
					System.err.println("Error preloading sound effect " + fileName + ": " + e.toString());
				} finally {
					if (audioInputStream != null) {
						try {
							audioInputStream.close();
						} catch (IOException e) {
							System.err.println("Error closing audio stream for " + fileName + ":" + e.toString());
						}
					}
				}
			}

			// Preload location-specific music sequentially
			for (int i = 0; i < locationMusicFiles.length; i++) {
				String fName = locationMusicFiles[i];
				String fileName = "/app/rc/somedusk/audio/sfx/" + fName;
				AudioInputStream audioInputStream = null;
				try {
					File audioFile = new File(fileName);
					if (audioFile.exists()) {
						audioInputStream = AudioSystem.getAudioInputStream(audioFile);
						Clip clip = AudioSystem.getClip();
						clip.open(audioInputStream);
						audLocationMusic[i] = clip;
					} else {
						System.err.println("Location music file not found for preloading: " + fileName);
					}
				} catch (Exception e) {
					System.err.println("Error preloading location music " + fileName + ": " + e.toString());
				} finally {
					if (audioInputStream != null) {
						try {
							audioInputStream.close();
						} catch (IOException e) {
							System.err.println("Error closing audio stream for " + fileName + ":" + e.toString());
						}
					}
				}
			}
			SwingUtilities.invokeLater(() -> addText("Audio finished loading.\n"));
		}).start();
	} */

	public void spawnBloodParticles(Entity attacker, Entity defender, int damage) {
		if (defender == null) return;
		double angle = 0;
		if (attacker != null) {
			angle = Math.atan2(defender.pixelY - attacker.pixelY, defender.pixelX - attacker.pixelX);
		}

		synchronized (vctParticles) {
			int count = damage / 2;
			for (int i = 0; i < count; i++) {
				double speed = 1.0 + Math.random() * 1.5;
				double splatterAngle = angle + (Math.random() - 0.5) * (Math.PI / 1.5); // Radiate outwards
				
				double vx = Math.cos(splatterAngle) * speed;
				double vy = Math.sin(splatterAngle) * speed;

				int lifetime = 25 + (int)(Math.random() * 15);
				Color color = new Color(180, 0, 0);
				
				Particle p = new Particle(
					defender.pixelX + (intImageSize / 2.0),
					defender.pixelY,
					vx,
					vy,
					lifetime,
					color,
					2 + (int)(Math.random() * 2), // Size 2 or 3
					ParticleType.BLOOD
				);
				vctParticles.add(p);
			}
		}
	}

	public void spawnRegenerateParticles(Entity target, int duration) {
		if (target == null) return;

		// Duration from script is in server ticks. A server tick is roughly 2 seconds.
		// A client tick is 40ms. So 2000ms / 40ms = 50 client ticks per server tick.
		int effectLifetime = duration * 50;
		if (effectLifetime <= 0) {
			effectLifetime = 100; // Default lifetime if duration is 0 or invalid
		}

		double centerX = target.pixelX + (intImageSize / 2.0);
		double feetY = target.pixelY + (intImageSize / 2.0);
		double circleY = feetY; // Position the circle at the player's feet.

		// 1. Create the circle particle and add it to the BEHIND list.
		vctParticlesBehind.add(new RegenerateParticle(
			centerX, circleY, 0, 0, effectLifetime,
			null, 0, false, target
		));

		// 2. Create the orb spawner, parented to the target. It will handle creating the orbs.
		// We can add it to the front list, it's invisible anyway.
		Particle spawner = new Particle(
			centerX, circleY, 0, 0, effectLifetime,
			null, 0, ParticleType.REGENERATE_SPAWNER,
			null, false, false, null, null, 5, target,
			false, // renderBehind
			true   // lockToScreenCenter
		);
		synchronized (vctParticles) {
			vctParticles.add(spawner);
		}
	}
	
	synchronized void addText(String strAdd)
	{
		if (frame.docGossip.getLength() > 8000)
		{
			try
			{
				frame.docGossip.remove(0,4000);
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
					frame.docGossip.insertString(frame.docGossip.getLength(), text, null);
				}
				
				// Append the colored text
				try {
					int red = Integer.parseInt(matcher.group(1));
					int green = Integer.parseInt(matcher.group(2));
					int blue = Integer.parseInt(matcher.group(3));
					String text = matcher.group(4);

					SimpleAttributeSet style = new SimpleAttributeSet();
					StyleConstants.setForeground(style, new Color(red, green, blue));
					frame.docGossip.insertString(frame.docGossip.getLength(), text, style);

				} catch (NumberFormatException e) {
					// If parsing fails, just add the raw tag text in default color
					frame.docGossip.insertString(frame.docGossip.getLength(), matcher.group(0), null);
					System.err.println("Error parsing RGB tag: " + e.getMessage());
				}
				
				lastIndex = matcher.end();
			}
			
			// Append any remaining text after the last match (default color)
			if (lastIndex < strAdd.length()) {
				SimpleAttributeSet style = new SimpleAttributeSet();
				StyleConstants.setForeground(style, new Color(255, 255, 240));
				frame.docGossip.insertString(frame.docGossip.getLength(), strAdd.substring(lastIndex), style);
			}

		} catch (BadLocationException e) {
			System.err.println(e.toString());
		}

		JScrollBar sb = frame.scrGossip.getVerticalScrollBar();
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
			sortedEntities.add(entStore);
			
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
				sortedEntities.remove(entStore);
			}
		}
	}

	private byte[] readFramedMessage() throws IOException {
		int length = stmIn.readShort();
		if (length < 0 || length > 32768) { // Max message size of 32KB
			throw new IOException("Invalid message length received: " + length);
		}
		byte[] buffer = new byte[length];
		stmIn.readFully(buffer);
		return buffer;
	}

	public void	run()
	{
		while(blnConnected)
		{
			try
			{
				DuskMessage dm = DuskMessage.receiveMessage(instream);

				switch (dm.name) {
					case MSG_AUTH: {
						ListMessage am = (ListMessage) dm;
						DuskMessage.EntityIntegerMessage res = (DuskMessage.EntityIntegerMessage) am.get(FIELD_AUTH_RESULT);

						switch (res.value) {
							case AUTH_LOGIN_OK: {
								addText(am.getString(FIELD_AUTH_REASON) + "\n");
								status.id = res.id;
								break;
							}
							case AUTH_LOGIN_FAILED: {
								addText(am.getString(FIELD_AUTH_REASON) + "\n");
								break;
							}
							case AUTH_LOGIN_EXISTS: {
								addText(am.getString(FIELD_AUTH_REASON) + "\n");
								break;
							}
							case AUTH_LOGIN_INCOMPLETE: {
								addText(am.getString(FIELD_AUTH_REASON) + "\n");
								pendingQueries = (ListMessage) am.get(FIELD_AUTH_NEWPLAYER);
								if (pendingQueries != null) {
									SwingUtilities.invokeLater(() -> {
										NewPlayerFrame newPlayerFrame = new NewPlayerFrame(this, pendingQueries, username, password);
										newPlayerFrame.setVisible(true);
									});
								}
								break;
							}
						}

						break;
					}
					case MSG_PING:
						command("notdead");
						break;
					case MSG_QUIT:
						blnLoaded = false;
						blnConnected = false;
						socket.close();
						return;
					case MSG_QUERY: {
						EntityListMessage query = (EntityListMessage) dm;
						EntityListMessage response = new EntityListMessage(query.id, MSG_QUERY);
						send(response);
						return;
					}
					case MSG_CLEAR_FLAGS:
						synchronized (vctEntities) {
							for (Entity e : hmpEntities.values()) {
								e.intFlag = 0;
							}
						}
						break;
					case MSG_INIT_MAP: {
						ListMessage lm = (ListMessage) dm;
						mapSizeX =  lm.getInteger(FIELD_MAP_WIDTH);
						mapSizeY =  lm.getInteger(FIELD_MAP_HEIGHT);
						viewRangeX = (mapSizeX-1)/2;
						viewRangeY = (mapSizeY-1)/2;
						shrMap = new short[mapSizeX][mapSizeY];
						shrMapAlpha = new short[mapSizeX][mapSizeY];
						shrMapAlpha2 = new short[mapSizeX][mapSizeY];
						strRCAddress = lm.getString(FIELD_MAP_ASSETLOCATION);
						CountDownLatch imageLatch = new CountDownLatch(1);
						try
						{
							thrGraphics.stop();
						}catch (Exception e) {}
						thrGraphics = new GraphicsThread(this, imageLatch);
						thrGraphics.thread = new Thread(thrGraphics);
						thrGraphics.thread.start();

						// Wait for images to finish loading before starting audio
						try {
							imageLatch.await();
						} catch (InterruptedException e) {
							System.err.println("Image loading interrupted: " + e.toString());
						}
						scaleWindow();
						break;
					}
					case MSG_UPDATE_MAP: {
						MapMessage mm = (MapMessage) dm;
						synchronized(vctEntities) {
							LocX = mm.x;
							LocY = mm.y;
							shrMap = mm.map;
							// TODO: alpha layers

							Iterator<Entity> iter = vctEntities.iterator();
							while (iter.hasNext())
							{
								Entity entStore = iter.next();
								if (entStore != player && (Math.abs(entStore.intLocX - LocX) > viewRangeX || Math.abs(entStore.intLocY - LocY) > viewRangeY))
								{
									iter.remove();
									sortedEntities.remove(entStore);
									hmpEntities.remove(entStore.ID);
								}
							}

							frame.lblInfo.setText("HP: "+inthp+"/"+intmaxhp+" MP: "+intsp+"/"+intmaxsp+" Loc: "+LocX+"/"+LocY);
							reloadJComboBoxLook();
							reloadJComboBoxGet();
							reloadJComboBoxAttack();
							findPlayer();
						}
						break;
					}

					case MSG_CHAT:
						addText(((DuskMessage.StringMessage) dm).value + "\n");
						break;
					case MSG_ADD_ENTITY:
						addEntity(new Entity((EntityUpdateMessage) dm));
						reloadJComboBoxLook();
						reloadJComboBoxGet();
						reloadJComboBoxAttack();
						break;
					case MSG_UPDATE_ENTITY: {
						EntityListMessage el = (EntityListMessage) dm;
						Entity e = hmpEntities.get(el.id);
						if (e != null) {
							for (DuskMessage m : el.value) {
								switch (m.name) {
									case FIELD_ENTITY_FLAGS:
										e.intFlag = ((DuskMessage.IntegerMessage) m).value;
										break;
									case FIELD_ENTITY_CONDITIONS:
										e.conditions = ((DuskMessage.StringListMessage) m).value;
										break;
								}
							}
						} else {
							addText("Error: set flag on unknown entity: " + el.id);
						}
						break;
					}
					case MSG_REMOVE_ENTITY:
						removeEntity(((DuskMessage.EntityMessage) dm).id);
						reloadJComboBoxLook();
						reloadJComboBoxGet();
						reloadJComboBoxAttack();
						break;
					case MSG_MOVE: {
						DuskMessage.EntityByteMessage mm = (DuskMessage.EntityByteMessage) dm;
						Entity e = hmpEntities.get(mm.id);
						if (e != null) {
							int dir = 0;
							switch (mm.value) {
								case 'n': dir = 0; break;
								case 's': dir = 1; break;
								case 'w': dir = 2; break;
								case 'e': dir = 3; break;
							}
							if (!e.isMoving) {
								movementManager.startMove(e, dir, intImageSize);
							} else {
								e.queuedMoves.add(dir);
							}
						}
						break;
					}
					case MSG_UPDATE_ACTIONS:
						//frame.setActionList(((DuskMessage.StringListMessage) dm).value);
						break;
					case MSG_INVENTORY:
						sellList = ((TransactionMessage) dm).items;
						reloadInventory();
						break;
					case MSG_EQUIPMENT:
						worn.updateWorn((ListMessage) dm);
						reloadEquipment();
						break;
					case MSG_INFO_PLAYER: {
						status.updateStatus((ListMessage) dm);
						frame.lblInfo.setText(status.toString());
						break;
					}
					case MSG_INFO_PET: {
						break;
					}
					case MSG_UPDATE_MERCHANT:
						buyList = ((TransactionMessage) dm).items;
						reloadMerchant();
						break;
					case MSG_EXIT_MERCHANT:
						frmMerchant.setVisible(false);
						buyList.clear();
						sellList.clear();
						break;
					case MSG_BATTLE_START: {
						ListMessage lm = (ListMessage) dm;
						addText("Start battling: " + lm.getString(FIELD_BATTLE_OPPONENT));
						break;
					}
					case MSG_BATTLE_UPDATE: {
						ListMessage lm = (ListMessage) dm;
						long toID = lm.getLong(FIELD_BATTLE_TARGET);
						int delta = -lm.getInteger(FIELD_BATTLE_DAMAGE);
						int newhp = lm.getInteger(FIELD_BATTLE_HP);
						int tothp = lm.getInteger(FIELD_BATTLE_MAXHP);
						long fromID = lm.getLong(FIELD_BATTLE_SOURCE);
						String how = lm.getString(FIELD_BATTLE_WHAT);

						Entity f = hmpEntities.get(fromID);
						Entity e = hmpEntities.get(toID);
						if (e != null) {
							e.hp = newhp;
							e.maxhp = tothp;
							spawnBloodParticles(f, e, delta);
						}
						break;
					}
					case MSG_BATTLE_CHAT:
						addText(((DuskMessage.StringMessage) dm).value + "\n");
						break;
					case MSG_VIEW_TEXT: {
						ListMessage lm = (ListMessage) dm;
						EditFrame frmEdit = new EditFrame(lm.getString(FIELD_TEXT_NAME),this,lm.getByte(FIELD_TEXT_EDITABLE, (byte) 0) == 1);
						frmEdit.show();
						frmEdit.txtEdit.append(lm.getString(FIELD_TEXT_TEXT, ""));
						break;
					}
				}
			} catch (EOFException eofe) {
				addText("Connection to the server has been lost.\n");
				blnConnected = false;
			} catch(IOException | NumberFormatException e)
			{
				System.err.println("Error at run(): "+e.toString());
				e.printStackTrace(System.out);

				addText("Error at run(): "+e.toString()+"\n");
				blnConnected = false;
			}
		}
		System.err.println("Client network thread stopped.");
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
	                if (camera.x == 0 && camera.y == 0) {
						camera.x = player.pixelX - ((double)frame.pnlGraphics.getWidth() / 2.0);
						camera.y = player.pixelY - ((double)frame.pnlGraphics.getHeight() / 2.0);
	                }
					camera.setTarget(player);
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
		
	public void scaleImages()
	{
	}
	
	public void scaleWindow()
	{
		int width = frame.pnlContents.getBounds().width - 310;
		intImageSize = width / 21;
		if (intImageSize < 1)
			intImageSize = 1;

		width = intImageSize * 21;
		int height = intImageSize * 15;

		// The graphics panel now takes up the entire space of the main content area
		frame.pnlGraphics.setBounds(0, 0, width, height);
		imgDisplay = frame.pnlGraphics.createImage(width, height);
		gD = imgDisplay.getGraphics();
		g = frame.pnlGraphics.getGraphics();

		// Position the chat and input fields at the bottom, overlaying the graphics
		int southPanelHeight = 120; // Or calculate based on content
		frame.pnlSouth.setBounds(0, height - southPanelHeight - 25, width, southPanelHeight);
		frame.txtInput.setBounds(0, height - 25, width - 160, 25);
		frame.btnGossip.setBounds(width - 160, height - 25, 80, 25);
		frame.btnBattle.setBounds(width - 80, height - 25, 80, 25);

		// Adjust the stats panel
		frame.pnlStats.setBounds(width, 0, frame.pnlContents.getBounds().width - width, height);
		frame.pnlStats.setSize(frame.pnlContents.getBounds().width - frame.pnlGraphics.getBounds().width,frame.pnlContents.getBounds().height);
		frame.txtOther.setSize(frame.pnlStats.getBounds().width-140,frame.pnlStats.getBounds().height-60);
		frame.lblTarget.setSize(frame.pnlStats.getBounds().width, 20);
		frame.lblInfo.setSize(frame.pnlContents.getBounds().width,20);

		if (frame.scrGossip.getVerticalScrollBar() != null) {
			frame.scrGossip.getVerticalScrollBar().setValue(frame.scrGossip.getVerticalScrollBar().getMaximum());
		}
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
 	
 			int destX = (int)( (x + camera.x) / intImageSize );
 			int destY = (int)( (y + camera.y) / intImageSize );
 			
			if (SwingUtilities.isLeftMouseButton(evt)) {
				synchronized(vctCrossMarkers) {
					vctCrossMarkers.add(new CrossMarker(destX, destY, Color.GREEN, 50));
				}
				command("findpath " + destX + " " + destY);
			} else if (SwingUtilities.isRightMouseButton(evt)) {
				synchronized(vctCrossMarkers) {
					vctCrossMarkers.add(new CrossMarker(destX, destY, Color.RED, 50));
				}
				Entity mob = findMobAt(destX, destY);
				if (mob != null) {
					command("attack " + mob.strName + " #" + mob.ID);
				} else {
					// If no mob, just pathfind
					command("findpath " + destX + " " + destY);
				}
			}
		}
		frame.txtInput.requestFocus();
	}
        @Override
	public void mouseEntered(MouseEvent evt){}
        @Override
	public void mouseExited(MouseEvent evt){}

	public void send(DuskMessage message) {
		try {
			message.write(outstream);
		} catch (IOException e) {
			blnConnected = false;
			addText("Error sending message: " + e.toString() + "\n");
		}
	}

	public void sendMessage(DuskMessage message) {
		send(message);
	}

	public void command(String command) {
		send(new DuskMessage.StringMessage(MSG_COMMAND, command));
	}

        @Override
	public void keyPressed(KeyEvent evt)
	{
		if (!blnConnected)
	    	return;
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
					command(strStore);
				}
				frame.txtInput.setText("");
			}
			if (blnLoaded)
			{
				if (player != null && !player.isMoving) {
					switch (nkey)
					{
						case 38: command("n"); if (strSet != null) command(strSet); break;
						case 40: command("s"); if (strSet != null) command(strSet); break;
						case 37: command("w"); if (strSet != null) command(strSet); break;
						case 39: command("e"); if (strSet != null) command(strSet); break;
					}
				}
			}
		}catch(Exception e)
		{
			addText("Error at keyPressed(): "+e.toString()+"\n");
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
			update(0.016);
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

	public void spawnHealingParticles(Entity target, int count) {
		if (target == null) return;
		synchronized (vctParticles) {
			for (int i = 0; i < count; i++) {
				double angle = Math.random() * Math.PI; // Upward arc
				double speed = 0.5 + Math.random() * 0.8;
				double vx = (Math.random() - 0.5) * 2.0;
				double vy = -speed;
				int lifetime = 40 + (int)(Math.random() * 30);
				Color color = Color.GREEN;
				vctParticles.add(new HealParticle(
					target.pixelX + (intImageSize / 2.0) + (Math.random() - 0.5) * intImageSize,
					target.pixelY - (intImageSize / 2.0),
					vx,
					vy,
					lifetime,
					color,
					2
				));
			}
		}
	}

	public void spawnArmorParticles(Entity target) {
		if (target == null || imgArmorParticle == null) return;

		synchronized (vctParticles) {
			double startRadius = intImageSize * 3.5;
			double speed = 2.5;
			double centerX = target.pixelX + (intImageSize / 2.0);
			double centerY = target.pixelY - (intImageSize / 2.0);
	
			// 4 shields in a diamond formation
			double[] angles = { 0, Math.PI / 2, Math.PI, 3 * Math.PI / 2 };
			
			for (int i = 0; i < 4; i++) {
				double angle = angles[i];
				double startX = centerX + startRadius * Math.cos(angle);
				double startY = centerY + startRadius * Math.sin(angle);
	
				double finalX = centerX;
				double finalY = centerY;

				double distance = Math.sqrt(Math.pow(finalX - startX, 2) + Math.pow(finalY - startY, 2));
				int lifetime = (int)(distance / speed);
				if (lifetime <= 0) lifetime = 1;
	
				double vx = (finalX - startX) / lifetime;
				double vy = (finalY - startY) / lifetime;
	
				vctParticles.add(new ArmorParticle(
					startX, startY, vx, vy, lifetime + 20,
					imgArmorParticle
				));
			}
		}
	}

	public void update(double deltaTime)
	{
		TileAnim.update(deltaTime);
		synchronized (vctCrossMarkers) {
			for (int i = vctCrossMarkers.size() - 1; i >= 0; i--) {
				CrossMarker marker = vctCrossMarkers.elementAt(i);
				marker.lifetime--;
				if (marker.lifetime <= 0) {
					vctCrossMarkers.removeElementAt(i);
				}
			}
		}
		synchronized (vctEntities) {
	    movementManager.update(vctEntities, playerTicks, player, camera, deltaTime, intImageSize);
	    camera.update(frame.pnlGraphics.getWidth(), frame.pnlGraphics.getHeight(), LocX, LocY, viewRangeX, viewRangeY, intImageSize, deltaTime);

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
			
			gD.setColor(Color.black);
			gD.fillRect(0, 0, imgDisplay.getWidth(null), imgDisplay.getHeight(null));

			int startTileX = (int)Math.floor(camera.x / intImageSize);
			int startTileY = (int)Math.floor(camera.y / intImageSize);
			int endTileX = (int)Math.floor((camera.x + frame.pnlGraphics.getWidth()) / intImageSize) + 1;
			int endTileY = (int)Math.floor((camera.y + frame.pnlGraphics.getHeight()) / intImageSize) + 1;
	
			double offsetX = camera.x - (startTileX * intImageSize);
			double offsetY = camera.y - (startTileY * intImageSize);
	
			int mapStartX = LocX - viewRangeX;
			int mapStartY = LocY - viewRangeY;
			for (int i=startTileX; i<endTileX; i++) {
				for (int i2=startTileY; i2<endTileY; i2++) {
					int mapGridX = i - mapStartX;
					int mapGridY = i2 - mapStartY;
	
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
								tileIDToDraw = tileID + anim.getFrame();
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
	
			// Draw middle alpha layer (alpha2)
			for (int i=startTileX; i<endTileX; i++) {
				for (int i2=startTileY; i2<endTileY; i2++) {
					int mapGridX = i - mapStartX;
					int mapGridY = i2 - mapStartY;

					if (mapGridX >= 0 && mapGridX < mapSizeX && mapGridY >= 0 && mapGridY < mapSizeY) {
						try {
							int tileID = shrMapAlpha2[mapGridX][mapGridY];
							if (tileID == 0) continue; // Skip transparent tile

							double screenX = (i - startTileX) * intImageSize - offsetX;
							double screenY = (i2 - startTileY) * intImageSize - offsetY;
							
							gD.drawImage(imgOriginalMapAlpha2,
										(int)screenX, (int)screenY,
										(int)(screenX + intImageSize), (int)(screenY + intImageSize),
										tileID * intOriginalTileSize, 0,
										(tileID + 1) * intOriginalTileSize, intOriginalTileSize,
										null);

						} catch(Exception e) {}
					}
				}
			}
	
			// Update and draw BEHIND particles
			updateAndDrawParticles(vctParticlesBehind, (Graphics2D)gD, deltaTime);
	
                Collections.sort(sortedEntities, ySortComparator);

	        for (Entity entStore : sortedEntities) {
	            drawEntity(entStore);
	        }
		
		    // Draw alpha layer
		    for (int i=startTileX; i<endTileX; i++) {
			for (int i2=startTileY; i2<endTileY; i2++) {
				int mapGridX = i - mapStartX;
				int mapGridY = i2 - mapStartY;

				if (mapGridX >= 0 && mapGridX < mapSizeX && mapGridY >= 0 && mapGridY < mapSizeY) {
					try {
						int tileID = shrMapAlpha[mapGridX][mapGridY];
						if (tileID == 0) continue; // Skip transparent tile

						double screenX = (i - startTileX) * intImageSize - offsetX;
						double screenY = (i2 - startTileY) * intImageSize - offsetY;
						
						gD.drawImage(imgOriginalMapAlpha,
									(int)screenX, (int)screenY,
									(int)(screenX + intImageSize), (int)(screenY + intImageSize),
									tileID * intOriginalTileSize, 0,
									(tileID + 1) * intOriginalTileSize, intOriginalTileSize,
									null);

					} catch(Exception e) {}
				}
			}
		}

		// Update and draw FRONT particles
		updateAndDrawParticles(vctParticles, (Graphics2D)gD, deltaTime);
	    
	    	Font originalFont = gD.getFont();
	    	Font boldFont = new Font(originalFont.getName(), Font.BOLD, 16);
	    	gD.setFont(boldFont);
	        for (DamageSplat splat : vctDamageSplats) {
	            double screenX = splat.x - camera.x;
	            double screenY = splat.y - camera.y;
	            gD.setColor(Color.BLACK);
	            gD.drawString(splat.text, (int)screenX + 1, (int)screenY + 1);
	            gD.setColor(splat.color);
	            gD.drawString(splat.text, (int)screenX, (int)screenY);
	        }
	        gD.setFont(originalFont);

			if (vctCrossMarkers != null) {
				synchronized (vctCrossMarkers) {
					Graphics2D g2d = (Graphics2D) gD;
					Stroke originalStroke = g2d.getStroke();
					g2d.setStroke(new BasicStroke(3)); // Make the "X" thicker
			
					for (CrossMarker marker : vctCrossMarkers) {
						double screenX = marker.mapX * intImageSize - camera.x;
						double screenY = marker.mapY * intImageSize - camera.y;
			
						// Calculate alpha for fade-out effect
						float alpha = (float) marker.lifetime / (float) marker.maxLifetime;
						if (alpha < 0) alpha = 0;
						if (alpha > 1) alpha = 1;
			
						// Set color with alpha
						Color fadedColor = new Color(marker.color.getRed(), marker.color.getGreen(), marker.color.getBlue(), (int) (alpha * 255));
						g2d.setColor(fadedColor);
			
						// Draw the "X"
						int x1 = (int) screenX;
						int y1 = (int) screenY;
						int x2 = (int) (screenX + intImageSize);
						int y2 = (int) (screenY + intImageSize);
						g2d.drawLine(x1, y1, x2, y2);
						g2d.drawLine(x1, y2, x2, y1);
					}
					g2d.setStroke(originalStroke); // Restore original stroke
				}
			}
	    }

		// Handle lightning effect for armor spell
		List<Particle> newLightningParticles = new ArrayList<>();
		lightningTimer++;
		if (lightningTimer > 10) { // Every 10 frames, create new lightning
			lightningTimer = 0;
			List<Particle> shields = new ArrayList<>();
			synchronized (vctParticles) {
				for (Particle p : vctParticles) {
					if (p.type == ParticleType.ARMOR && !p.isDead(hmpEntities, player != null ? player.ID : -1)) {
						shields.add(p);
					}
				}
			}

			if (shields.size() == 4) {
				// Connect adjacent shields
				for (int i = 0; i < 4; i++) {
					Particle p1 = shields.get(i);
					Particle p2 = shields.get((i + 1) % 4);
					newLightningParticles.addAll(LightningBolt.create(p1, p2, Color.YELLOW, 15));
				}
				// Add a cross connection for more visual flair
				newLightningParticles.addAll(LightningBolt.create(shields.get(0), shields.get(2), Color.YELLOW, 15));
				newLightningParticles.addAll(LightningBolt.create(shields.get(1), shields.get(3), Color.YELLOW, 15));
			}
		}

		if (!newLightningParticles.isEmpty()) {
			synchronized (vctParticles) {
				vctParticles.addAll(newLightningParticles);
			}
		}

		// Handle lightning effect for harden spell
		List<Particle> newHardenLightning = new ArrayList<>();
		if (lightningTimer > 5) { // Stagger the check slightly from armor
			List<Particle> rocks = new ArrayList<>();
			synchronized (vctParticles) {
				for (Particle p : vctParticles) {
					if (p.type == ParticleType.HARDEN && !p.isDead(hmpEntities, player != null ? player.ID : -1)) {
						rocks.add(p);
					}
				}
			}

			if (rocks.size() > 1) {
				// Connect adjacent rocks
				for (int i = 0; i < rocks.size() - 1; i++) {
					Particle p1 = rocks.get(i);
					Particle p2 = rocks.get(i + 1);
					newHardenLightning.addAll(LightningBolt.create(p1, p2, new Color(180, 180, 180), 20));
				}
			}
		}

		if (!newHardenLightning.isEmpty()) {
			synchronized (vctParticles) {
				vctParticles.addAll(newHardenLightning);
			}
		}
	}
	
	void drawEntity(Entity entStore)
	{
		// Don't draw dead entities that are not the player.
		if (entStore != player && entStore.maxhp > 0 && entStore.hp <= 0) {
			return;
		}

		double screenX, screenY;
		if (entStore == player) {
			screenX = viewRangeX * intImageSize;
			screenY = viewRangeY * intImageSize;
		} else {
			screenX = entStore.pixelX - camera.x;
			screenY = entStore.pixelY - camera.y;
		}

		if (entStore.intFlag != 0)
		{
			if (entStore.intFlag == 1) { // Ally in combat
				if (entStore.maxhp > 0 && entStore.hp > 0) {
					double hpRatio = (double)entStore.hp / entStore.maxhp;
					if (hpRatio < 0) hpRatio = 0;
					if (hpRatio > 1) hpRatio = 1;
					double hpBarWidth = hpRatio * intImageSize;
					gD.setColor(Color.green);
					gD.drawRoundRect((int)screenX, (int)screenY, intImageSize, intImageSize, intImageSize/3, intImageSize/3);
					gD.setColor(new Color(35, 35, 35));
					gD.fillRect((int)screenX - 1, (int)screenY - 66, (int)(intImageSize) + 2, 7);
					gD.setColor(new Color(0, 255, 0));
					gD.fillRect((int)screenX, (int)screenY - 65, (int)hpBarWidth, 5);
				}
			} else if (entStore.intFlag == 2) { // Enemy in combat
				if (entStore.maxhp > 0 && entStore.hp > 0) {
					double hpRatio = (double)entStore.hp / entStore.maxhp;
					if (hpRatio < 0) hpRatio = 0;
					if (hpRatio > 1) hpRatio = 1;
					double hpBarWidth = hpRatio * intImageSize;
					gD.setColor(Color.red);
					gD.drawRoundRect((int)screenX, (int)screenY, intImageSize, intImageSize, intImageSize/3, intImageSize/3);
					gD.setColor(new Color(35, 35, 35));
					gD.fillRect((int)screenX - 1, (int)screenY - 56, (int)(intImageSize) + 2, 7);
					gD.setColor(new Color(255, 0, 30));
					gD.fillRect((int)screenX, (int)screenY - 55, (int)hpBarWidth, 5);
				}
			}
		} else if (entStore != player && entStore.hp < entStore.maxhp && entStore.maxhp > 0 && entStore.hp > 0) {
			// Draw HP bar for any damaged entity not in the player's current battle
			double hpRatio = (double)entStore.hp / entStore.maxhp;
			if (hpRatio < 0) hpRatio = 0;
			if (hpRatio > 1) hpRatio = 1;
			double hpBarWidth = hpRatio * intImageSize;
			gD.setColor(new Color(35, 35, 35));
			gD.fillRect((int)screenX - 1, (int)screenY - 16, (int)(intImageSize) + 2, 7);
			gD.setColor(new Color(255, 0, 30));
			gD.fillRect((int)screenX, (int)screenY - 15, (int)hpBarWidth, 5);
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
		frame.pnlGraphics.img = imgDisplay;
		frame.pnlGraphics.repaint();
	}

	private void createDetectInvisRay(Particle start, Particle end, Color color, int lifetime, List<Particle> particleSystem, boolean lockToCenter) {
		double dx = end.x - start.x;
		double dy = end.y - start.y;
		double dist = Math.sqrt(dx * dx + dy * dy);
		
		int numSegments = (int)Math.max(1, dist / 5.0);
		
		Particle prev = start;
		for (int i = 1; i < numSegments; i++) {
			double fraction = (double)i / numSegments;
			double newX = start.x + dx * fraction;
			double newY = start.y + dy * fraction;
	
			if (i < numSegments - 1) {
				// Increased deviation for a more erratic, zig-zagging appearance
				newX += Math.random() * 3 - 1;
				newY += Math.random() * 3 - 1;
			}
	
			Particle p = new Particle(newX, newY, 0, 0, lifetime, color, 1, ParticleType.DETECT_INVIS_RAY, null, false, true, null, null, 0, null, false, lockToCenter);
			particleSystem.add(p);
			
			Particle mid = new Particle(0,0,0,0, lifetime, color, 2, ParticleType.DETECT_INVIS_RAY, null, false, true, prev, p, 0, null, false, lockToCenter);
			particleSystem.add(mid);
	
			prev = p;
		}
	
		Particle mid = new Particle(0,0,0,0, lifetime, color, 2, ParticleType.DETECT_INVIS_RAY, null, false, true, prev, end, 0, null, false, lockToCenter);
		particleSystem.add(mid);
	}

	private void updateAndDrawParticles(Vector<Particle> particleList, Graphics2D g2d, double deltaTime) {
		synchronized (particleList) {
			tempNewParticlesFront.clear();
			tempNewParticlesBehind.clear();
	
			for (int i = particleList.size() - 1; i >= 0; i--) {
				Particle p = particleList.elementAt(i);
	
				// Always update the particle's position first.
				// This ensures that any logic that spawns new particles (like the spawners below)
				// will use the most up-to-date position of its parent, preventing visual detachment.
				p.update(hmpEntities, deltaTime);

				// Handle HARDEN spiral animation
				if (p.type == ParticleType.HARDEN) {
					Entity parent = hmpEntities.get(p.parentEntityID);
					if (parent != null) {
						float progress = (float)(p.maxLifetime - p.lifetime) / (float)p.maxLifetime;
						
						// Radius shrinks from a starting value to 0
						double startRadius = intImageSize * 1.5;
						double currentRadius = (1.0 - progress) * startRadius;

						// Angle rotates a full 360 degrees over the lifetime, plus the initial offset
						double startAngle = p.timer; // Stored in the timer field
						double currentAngle = Math.toRadians(startAngle + (progress * 360));

						// Calculate new position around the parent's center
						double centerX = parent.pixelX + (intImageSize / 2.0);
						double centerY = parent.pixelY; // Centered on the entity's y-pixel for better visuals
						p.x = centerX + currentRadius * Math.cos(currentAngle);
						p.y = centerY + currentRadius * Math.sin(currentAngle);
					}
				}
	
				// Handle regenerate spawner
				if (p.type == ParticleType.REGENERATE_SPAWNER) {
					p.timer -= deltaTime;
					if (p.timer <= 0) {
						double radius = intImageSize * 0.6;
						double startX = p.x + (Math.random() - 0.5) * (radius * 1.5);
						double startY = p.y - (Math.random() * 10);
						double vx = (Math.random() - 0.5) * 0.5;
						double vy = -0.7 - (Math.random() * 0.5);
						int lifetime = 80 + (int)(Math.random() * 40);
	
						// Alternate between front and back using the dedicated counter
						regenerateOrbCounter++;
						boolean renderBehind = regenerateOrbCounter % 2 == 0;
	
						Particle greenPulse = new Particle(
							startX, startY, vx, vy, lifetime,
							new Color(0, 255, 0, 150), 8, ParticleType.REGENERATE, // Increased size
							null, false, true, null, null, 0, null, renderBehind, true
						);
	
						Particle yellowOrb = new Particle(
							startX, startY, vx, vy, lifetime,
							Color.YELLOW, 4, ParticleType.REGENERATE, // Increased size
							null, false, false, null, null, 0, null, renderBehind, true
						);
						
						if (renderBehind) {
							tempNewParticlesBehind.add(greenPulse);
							tempNewParticlesBehind.add(yellowOrb);
						} else {
							tempNewParticlesFront.add(greenPulse);
							tempNewParticlesFront.add(yellowOrb);
						}
	
						p.timer = 0.5 + (Math.random() * 0.1);
					}
				}

				if (p.type == ParticleType.DETECT_INVIS_SPAWNER) {
					p.timer -= deltaTime;
					if (p.timer <= 0) {
						// New logic: Rapidly activate a random subset of the 12 fixed ray positions.
						int numRayPositions = 16;
						int numRaysToActivate = 12; // Activate 3 rays per tick for a shimmering effect
						
						double emissionRadius = 12.0;
						int rayLifetime = 2 + (int)(Math.random() * 5); // Short, slightly varied lifetime
						
						for (int j = 0; j < numRaysToActivate; j++) {
							// Pick a random ray position index
							int rayIndex = (int)(Math.random() * numRayPositions);
							double angle = (rayIndex / (double)numRayPositions) * 2 * Math.PI;
							
							double rayLength = 2 + Math.random() * 8; // Short, random length for shimmer

							double startX = p.x + emissionRadius * Math.cos(angle);
							double startY = p.y + emissionRadius * Math.sin(angle);
							Particle startPoint = new Particle(startX, startY, 0, 0, rayLifetime, null, 0, null);
				
							Particle endPoint = new Particle(
								startX + rayLength * Math.cos(angle),
								startY + rayLength * Math.sin(angle),
								0, 0, rayLifetime, null, 0, null, null, false, false, null, null, 0, null, false, true
							);
							tempNewParticlesFront.add(endPoint);
				
							createDetectInvisRay(startPoint, endPoint, new Color(255, 255, 100), rayLifetime, tempNewParticlesFront, true);
						}
						
						p.timer = 2; // Trigger very rapidly
					}
				}
	
				if (p.isDead(hmpEntities, player != null ? player.ID : -1)) {
					particleList.removeElementAt(i);
				} else {
					double screenX, screenY;
					if (p.lockToScreenCenter) {
						screenX = (frame.pnlGraphics.getWidth() / 2.0) + (p.x - (player.pixelX + intImageSize / 2.0));
						screenY = (frame.pnlGraphics.getHeight() / 2.0) + (p.y - player.pixelY);
					} else {
						screenX = p.x - camera.x;
						screenY = p.y - camera.y;
					}

					g2d.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_OVER, p.alpha));
	
					if (p.type == ParticleType.REGENERATE_CIRCLE) {
						double radius = intImageSize * 0.6;
						int ovalWidth = (int)(radius * 2);
						int ovalHeight = (int)(radius);
	
						int ovalX = (int)(screenX - radius);
						int ovalY = (int)(screenY - radius / 2);
	
						Stroke originalStroke = g2d.getStroke();
						
						// Apply pulsing alpha to colors
						Color green = new Color(0, 255, 0, (int)(p.alpha * 255));
						Color yellow = new Color(255, 255, 0, (int)(p.alpha * 255));

						g2d.setStroke(new BasicStroke(3));
						g2d.setColor(green);
						g2d.drawOval(ovalX, ovalY, ovalWidth, ovalHeight);
						g2d.setStroke(new BasicStroke(1));
						g2d.setColor(yellow);
						g2d.drawOval(ovalX, ovalY, ovalWidth, ovalHeight);
						g2d.setStroke(originalStroke);

					} else if (p instanceof HealParticle) {
						((HealParticle) p).draw(g2d, camera.x, camera.y);
					} else if (p instanceof ArmorParticle) {
						((ArmorParticle) p).draw(g2d, camera.x, camera.y);
					} else if (p instanceof RegenerateParticle) {
						((RegenerateParticle) p).draw(g2d, camera.x, camera.y, intImageSize);
					} else if (p.image != null) {
						int imgWidth = p.image.getWidth(null);
						int imgHeight = p.image.getHeight(null);
						g2d.drawImage(p.image, (int)screenX - (imgWidth / 2), (int)screenY - (imgHeight / 2), null);
					} else if (p.color != null) {
						g2d.setColor(p.color);
						if (p.type == ParticleType.LIGHTNING || p.type == ParticleType.SHOCK) {
							if (p.parent1 != null && p.parent2 != null) {
								g2d.setStroke(new BasicStroke(p.size));
								g2d.drawLine((int)(p.parent1.x - camera.x), (int)(p.parent1.y - camera.y), (int)(p.parent2.x - camera.x), (int)(p.parent2.y - camera.y));
							}
						} else if (p.type == ParticleType.DETECT_INVIS_RAY) {
							if (p.parent1 != null && p.parent2 != null) {
								double p1sx, p1sy, p2sx, p2sy;
								if (p.lockToScreenCenter && player != null) {
									p1sx = (frame.pnlGraphics.getWidth() / 2.0) + (p.parent1.x - (player.pixelX + intImageSize / 2.0));
									p1sy = (frame.pnlGraphics.getHeight() / 2.0) + (p.parent1.y - player.pixelY);
									p2sx = (frame.pnlGraphics.getWidth() / 2.0) + (p.parent2.x - (player.pixelX + intImageSize / 2.0));
									p2sy = (frame.pnlGraphics.getHeight() / 2.0) + (p.parent2.y - player.pixelY);
								} else {
									p1sx = p.parent1.x - camera.x;
									p1sy = p.parent1.y - camera.y;
									p2sx = p.parent2.x - camera.x;
									p2sy = p.parent2.y - camera.y;
								}
								g2d.setStroke(new BasicStroke(p.size));
								g2d.drawLine((int)p1sx, (int)p1sy, (int)p2sx, (int)p2sy);
							}
						} else if (p.type == ParticleType.REGENERATE) {
							int halfSize = p.size / 2;
							g2d.fillOval((int)screenX - halfSize, (int)screenY - halfSize, p.size, p.size);
						} else {
							int halfSize = p.size / 2;
							g2d.fillRect((int)screenX - halfSize, (int)screenY - halfSize, p.size, p.size);
						}
					}
				}
			}
	
			if (!tempNewParticlesFront.isEmpty()) {
				synchronized(vctParticles) {
					vctParticles.addAll(tempNewParticlesFront);
				}
			}
			if (!tempNewParticlesBehind.isEmpty()) {
				synchronized(vctParticlesBehind) {
					vctParticlesBehind.addAll(tempNewParticlesBehind);
				}
			}
			g2d.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_OVER, 1.0f)); // Reset composite
		}
	}

	public void reloadMerchant() {
		frmMerchant.blnRefreshMenus = true;
		frmMerchant.chcBuy.removeAllItems();
		frmMerchant.chcSell.removeAllItems();
		for (TransactionItem item : buyList) {
			frmMerchant.chcBuy.addItem(item.name + " (" + item.price + ")");
		}
		for (TransactionItem item : sellList) {
			frmMerchant.chcSell.addItem(item.name + " (" + item.price + ")");
		}
		frmMerchant.blnRefreshMenus = false;
	}

	public void reloadInventory() {
		frame.blnRefreshMenus = true;
		frame.chcDrop.removeAllItems();
		frame.chcDrop.addItem("Drop");
		for (TransactionItem item : sellList) {
			frame.chcDrop.addItem(item.name);
		}
		frame.blnRefreshMenus = false;
	}

	public void reloadEquipment() {
		frmEquipment.blnRefreshMenus = true;
		frmEquipment.chcWield.removeAllItems();
		frmEquipment.chcArms.removeAllItems();
		frmEquipment.chcLegs.removeAllItems();
		frmEquipment.chcTorso.removeAllItems();
		frmEquipment.chcWaist.removeAllItems();
		frmEquipment.chcNeck.removeAllItems();
		frmEquipment.chcSkull.removeAllItems();
		frmEquipment.chcEyes.removeAllItems();
		frmEquipment.chcHands.removeAllItems();

		frmEquipment.chcWield.addItem("none");
		frmEquipment.chcArms.addItem("none");
		frmEquipment.chcLegs.addItem("none");
		frmEquipment.chcTorso.addItem("none");
		frmEquipment.chcWaist.addItem("none");
		frmEquipment.chcNeck.addItem("none");
		frmEquipment.chcSkull.addItem("none");
		frmEquipment.chcEyes.addItem("none");
		frmEquipment.chcHands.addItem("none");

		for (TransactionItem item : sellList) {
			switch (item.type) {
				case "wield":
					frmEquipment.chcWield.addItem(item.name);
					break;
				case "arms":
					frmEquipment.chcArms.addItem(item.name);
					break;
				case "legs":
					frmEquipment.chcLegs.addItem(item.name);
					break;
				case "torso":
					frmEquipment.chcTorso.addItem(item.name);
					break;
				case "waist":
					frmEquipment.chcWaist.addItem(item.name);
					break;
				case "neck":
					frmEquipment.chcNeck.addItem(item.name);
					break;
				case "skull":
					frmEquipment.chcSkull.addItem(item.name);
					break;
				case "eyes":
					frmEquipment.chcEyes.addItem(item.name);
					break;
				case "hands":
					frmEquipment.chcHands.addItem(item.name);
					break;
			}
		}

		frmEquipment.chcWield.setSelectedItem(worn.wield);
		frmEquipment.chcArms.setSelectedItem(worn.arms);
		frmEquipment.chcLegs.setSelectedItem(worn.legs);
		frmEquipment.chcTorso.setSelectedItem(worn.torso);
		frmEquipment.chcWaist.setSelectedItem(worn.waist);
		frmEquipment.chcNeck.setSelectedItem(worn.neck);
		frmEquipment.chcSkull.setSelectedItem(worn.skull);
		frmEquipment.chcEyes.setSelectedItem(worn.eyes);
		frmEquipment.chcHands.setSelectedItem(worn.hands);
		frmEquipment.blnRefreshMenus = false;
	}
}