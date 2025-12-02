import java.awt.*;
import java.awt.event.*;
import java.util.StringTokenizer;
import javax.swing.*;
import javax.swing.text.*;


public class MainFrame extends Frame implements ItemListener, CustomButtonListener
{
	Panel pnlSpacer = new Panel();
	Panel pnlScroll = new Panel();
	Panel pnlButtons = new Panel();
	Panel pnlGraphics = new Panel();
	Panel pnlForeground = new Panel();
	CustomButton btnToolDraw = new CustomButton();
	CustomButton btnToolSelect = new CustomButton();
	CustomButton btnToolZoom = new CustomButton();
	Scrollbar scrollVert = new Scrollbar(Scrollbar.VERTICAL);
	Scrollbar scrollHorz = new Scrollbar(Scrollbar.HORIZONTAL);
	Label lblLocation = new Label();
	MenuBar menuBar = new MenuBar();
	Menu mFile = new Menu("File");
	MenuItem miNew = new MenuItem("New...");
	MenuItem miResize = new MenuItem("Resize...");
	MenuItem miOpen = new MenuItem("Open...");
	MenuItem miOpenPalette = new MenuItem("Load Palette...");
	MenuItem miSave = new MenuItem("Save");
	MenuItem miSaveAs = new MenuItem("Save as...");
	MenuItem miQuit = new MenuItem("Quit");
	Menu mEdit = new Menu("Edit");
	MenuItem miUndo = new MenuItem("Undo");
	MenuItem miRedo = new MenuItem("Redo");
	MenuItem miCopy = new MenuItem("Copy");
	MenuItem miPaste = new MenuItem("Paste");
	MenuItem miClear = new MenuItem("Clear");
	Menu mScale = new Menu("Scale");
	CheckboxMenuItem cbmi100 = new CheckboxMenuItem("100%");
	CheckboxMenuItem cbmi75 = new CheckboxMenuItem("75%");
	CheckboxMenuItem cbmi50 = new CheckboxMenuItem("50%");
	CheckboxMenuItem cbmi25 = new CheckboxMenuItem("25%");
	CheckboxMenuItem cbmi5p = new CheckboxMenuItem("5 pixels per tile");
	CheckboxMenuItem cbmi4p = new CheckboxMenuItem("4 pixels per tile");
	CheckboxMenuItem cbmi3p = new CheckboxMenuItem("3 pixels per tile");
	CheckboxMenuItem cbmi2p = new CheckboxMenuItem("2 pixels per tile");
	CheckboxMenuItem cbmi1p = new CheckboxMenuItem("1 pixel per tile");
	Menu mHelp = new Menu("Help");
	MenuItem miHelpHowTo = new MenuItem("How to use this program...");
	MenuItem miAbout = new MenuItem("About DuskMapEditor...");
	Cursor zoomCursor=null;

	DuskMapEditor appParent;
	
	public MainFrame(DuskMapEditor inParent)
	{
		appParent = inParent;
	}

	public void initComponents() throws Exception
	{
		Toolkit tk = getToolkit();
		zoomCursor = tk.createCustomCursor(tk.getImage("zoomCursor.png"), new Point(10, 10), "zoom cursor");

		pnlButtons.setLayout(new FlowLayout(FlowLayout.LEFT));
		pnlButtons.setVisible(true);
		pnlButtons.setBackground(appParent.background);

		mFile.add(miNew);
		mFile.add(miOpen);
		mFile.add(miOpenPalette);
		mFile.addSeparator();
		mFile.add(miResize);
		mFile.addSeparator();
		mFile.add(miSave);
		mFile.add(miSaveAs);
		mFile.addSeparator();
		mFile.add(miQuit);
		menuBar.add(mFile);

		miUndo.setEnabled(false);
		miRedo.setEnabled(false);
		miCopy.setEnabled(false);
		miPaste.setEnabled(false);
		miClear.setEnabled(false);

		mEdit.add(miUndo);
		mEdit.add(miRedo);
		mEdit.addSeparator();
		mEdit.add(miCopy);
		mEdit.add(miPaste);
		mEdit.addSeparator();
		mEdit.add(miClear);
		menuBar.add(mEdit);

		mScale.add(cbmi100);
		mScale.add(cbmi75);
		mScale.add(cbmi50);
		mScale.add(cbmi25);
		mScale.add(cbmi5p);
		mScale.add(cbmi4p);
		mScale.add(cbmi3p);
		mScale.add(cbmi2p);
		mScale.add(cbmi1p);
		menuBar.add(mScale);
		cbmi100.setState(true);

		mHelp.add(miHelpHowTo);
		mHelp.addSeparator();
		mHelp.add(miAbout);
		menuBar.add(mHelp);

		setMenuBar(menuBar);

		pnlButtons.add(btnToolDraw);
		pnlButtons.add(btnToolSelect);
		pnlButtons.add(btnToolZoom);

		pnlForeground.setLayout(null);
		pnlForeground.setVisible(true);
		pnlForeground.setSize(new java.awt.Dimension(appParent.intImageSize, appParent.intImageSize));
		pnlForeground.setBackground(new Color(0,0,0));
		pnlButtons.add(pnlForeground);

		lblLocation.setText("Loc: 0000,0000 ");
		pnlButtons.add(lblLocation);

		miNew.addActionListener(appParent);
		miResize.addActionListener(appParent);
		miSave.addActionListener(appParent);
		miSaveAs.addActionListener(appParent);
		miOpen.addActionListener(appParent);
		miOpenPalette.addActionListener(appParent);
		miQuit.addActionListener(appParent);
		miUndo.addActionListener(appParent);
		miRedo.addActionListener(appParent);
		miCopy.addActionListener(appParent);
		miPaste.addActionListener(appParent);
		miClear.addActionListener(appParent);
		miHelpHowTo.addActionListener(appParent);
		miAbout.addActionListener(appParent);

		cbmi100.addItemListener(this);
		cbmi75.addItemListener(this);
		cbmi50.addItemListener(this);
		cbmi25.addItemListener(this);
		cbmi5p.addItemListener(this);
		cbmi4p.addItemListener(this);
		cbmi3p.addItemListener(this);
		cbmi2p.addItemListener(this);
		cbmi1p.addItemListener(this);

		btnToolDraw.addItemListener(this);
		btnToolSelect.addItemListener(this);
		btnToolZoom.addItemListener(this);
		
		pnlGraphics.setVisible(true);
		pnlGraphics.setLayout(null);
		pnlGraphics.setCursor(new Cursor(Cursor.WAIT_CURSOR));
		pnlGraphics.setSize(new java.awt.Dimension(900, 900));
		pnlGraphics.setBackground(appParent.background);

		setLocation(new java.awt.Point(0, 0));
		setTitle("Dusk Map Editor: "+appParent.strCurrentFile+" "+appParent.MapColumns+"x"+appParent.MapRows);
		setLayout(new BorderLayout());
		setSize(new java.awt.Dimension(924, 680));

		scrollVert.setMaximum(appParent.MapRows);
		scrollHorz.setMaximum(appParent.MapColumns);

		add(pnlButtons, BorderLayout.NORTH);
		add(scrollVert, BorderLayout.EAST);
		add(scrollHorz, BorderLayout.SOUTH);
		add(pnlGraphics, BorderLayout.CENTER);

		addWindowListener(new java.awt.event.WindowAdapter() {
			public void windowClosing(java.awt.event.WindowEvent e) {
				thisWindowClosing(e);
			}
		});
	}
  
  	private boolean mShown = false;
  	
	public void addNotify() 
	{
		super.addNotify();
		
		if (mShown)
			return;

		mShown = true;
	}
	
	public void customButtonStateChanged(CustomButton cb)
	{
		if (cb == btnToolDraw)
		{
			pnlGraphics.setCursor(new Cursor(Cursor.DEFAULT_CURSOR));
			btnToolSelect.setState(false);
			btnToolZoom.setState(false);
			appParent.update();
			appParent.paint(appParent.g);
		}else if (cb == btnToolSelect)
		{
			pnlGraphics.setCursor(new Cursor(Cursor.CROSSHAIR_CURSOR));
			btnToolDraw.setState(false);
			btnToolZoom.setState(false);
			miCopy.setEnabled(false);
			appParent.update();
			appParent.paint(appParent.g);
		}else if (cb == btnToolZoom)
		{
			pnlGraphics.setCursor(zoomCursor);
			btnToolDraw.setState(false);
			btnToolSelect.setState(false);
			miCopy.setEnabled(false);
			appParent.update();
			appParent.paint(appParent.g);
		}
	}

	public void itemStateChanged (ItemEvent evt)
	{
		if (evt.getSource()==cbmi100)
		{
			appParent.intImageSize = appParent.intImageOriginalSize;
			cbmi75.setState(false);
			cbmi50.setState(false);
			cbmi25.setState(false);
			cbmi5p.setState(false);
			cbmi4p.setState(false);
			cbmi3p.setState(false);
			cbmi2p.setState(false);
			cbmi1p.setState(false);
		}else if (evt.getSource()==cbmi75)
		{
			appParent.intImageSize = (appParent.intImageOriginalSize * 3)/4;
			cbmi100.setState(false);
			cbmi50.setState(false);
			cbmi25.setState(false);
			cbmi5p.setState(false);
			cbmi4p.setState(false);
			cbmi3p.setState(false);
			cbmi2p.setState(false);
			cbmi1p.setState(false);
		}else if (evt.getSource()==cbmi50)
		{
			appParent.intImageSize = appParent.intImageOriginalSize/2;
			cbmi100.setState(false);
			cbmi75.setState(false);
			cbmi25.setState(false);
			cbmi5p.setState(false);
			cbmi4p.setState(false);
			cbmi3p.setState(false);
			cbmi2p.setState(false);
			cbmi1p.setState(false);
		}else if (evt.getSource()==cbmi25)
		{
			appParent.intImageSize = appParent.intImageOriginalSize/4;
			cbmi100.setState(false);
			cbmi75.setState(false);
			cbmi50.setState(false);
			cbmi5p.setState(false);
			cbmi4p.setState(false);
			cbmi3p.setState(false);
			cbmi2p.setState(false);
			cbmi1p.setState(false);
		}else if (evt.getSource()==cbmi5p)
		{
			appParent.intImageSize = 5;
			cbmi100.setState(false);
			cbmi75.setState(false);
			cbmi50.setState(false);
			cbmi25.setState(false);
			cbmi4p.setState(false);
			cbmi3p.setState(false);
			cbmi2p.setState(false);
			cbmi1p.setState(false);
		}else if (evt.getSource()==cbmi4p)
		{
			appParent.intImageSize = 4;
			cbmi100.setState(false);
			cbmi75.setState(false);
			cbmi50.setState(false);
			cbmi25.setState(false);
			cbmi5p.setState(false);
			cbmi3p.setState(false);
			cbmi2p.setState(false);
			cbmi1p.setState(false);
		}else if (evt.getSource()==cbmi3p)
		{
			appParent.intImageSize = 3;
			cbmi100.setState(false);
			cbmi75.setState(false);
			cbmi50.setState(false);
			cbmi25.setState(false);
			cbmi5p.setState(false);
			cbmi4p.setState(false);
			cbmi2p.setState(false);
			cbmi1p.setState(false);
		}else if (evt.getSource()==cbmi2p)
		{
			appParent.intImageSize = 2;
			cbmi100.setState(false);
			cbmi75.setState(false);
			cbmi50.setState(false);
			cbmi25.setState(false);
			cbmi5p.setState(false);
			cbmi4p.setState(false);
			cbmi3p.setState(false);
			cbmi1p.setState(false);
		}else if (evt.getSource()==cbmi1p)
		{
			appParent.intImageSize = 1;
			cbmi100.setState(false);
			cbmi75.setState(false);
			cbmi50.setState(false);
			cbmi25.setState(false);
			cbmi5p.setState(false);
			cbmi4p.setState(false);
			cbmi3p.setState(false);
			cbmi2p.setState(false);
		}
		appParent.imgMap = appParent.imgOriginalMap.getScaledInstance(-1,appParent.intImageSize,Image.SCALE_DEFAULT);

		try
		{
			MediaTracker mdtTracker = new MediaTracker(appParent.frame);
			mdtTracker.addImage(appParent.imgMap,0);
			mdtTracker.waitForAll();
		}catch(Exception e)
		{
			System.err.println("Error while waiting for images: "+e.toString());
		}
		appParent.imgCursorMap.flush();
		appParent.imgCursorMap = ImageTools.makeImageTransparent(appParent.imgMap);
		try
		{
			MediaTracker mdtTracker = new MediaTracker(appParent.frame);
			mdtTracker.addImage(appParent.imgCursorMap,0);
			mdtTracker.waitForAll();
		}catch(Exception e)
		{
			System.err.println("Error while waiting for images: "+e.toString());
		}
		int intX = (pnlGraphics.getBounds().width)/appParent.intImageSize;
		int intY = (pnlGraphics.getBounds().height)/appParent.intImageSize;
		if (intX < 1)
			intX = 1;
		if (intY < 1)
			intY = 1;
		boolean blnResize = false;
		if (intX > appParent.MapColumns)
		{
			scrollHorz.setValue(0);
			intX = appParent.MapColumns;
			blnResize = true;
		}
		if (intY > appParent.MapRows)
		{
			scrollVert.setValue(0);
			intY = appParent.MapRows;
			blnResize = true;
		}
		scrollVert.setVisibleAmount(intY);
		scrollHorz.setVisibleAmount(intX);
		if (blnResize)
		{
			int Ymod = pnlButtons.getBounds().height+scrollHorz.getBounds().height+(getInsets().top+getInsets().bottom);
			int Xmod = scrollVert.getBounds().width+(getInsets().left+getInsets().right);
			setSize(((appParent.intImageSize*intX)+Xmod),((appParent.intImageSize*intY)+Ymod));
		}

		intX = intX * appParent.intImageSize;
		intY = intY * appParent.intImageSize;
		if (appParent.imgDisplay != null)
			appParent.imgDisplay.flush();
//		appParent.imgDisplay = pnlGraphics.createVolatileImage(intX, intY);
		appParent.imgDisplay = pnlGraphics.createImage(intX, intY);
		appParent.gD = appParent.imgDisplay.getGraphics();
		appParent.g = pnlGraphics.getGraphics();

		appParent.update();
		appParent.paint(appParent.g);
	}

	// Close the window when the close box is clicked
	void thisWindowClosing(java.awt.event.WindowEvent e)
	{
		setVisible(false);
		dispose();
		System.exit(0);
	}
	
}
