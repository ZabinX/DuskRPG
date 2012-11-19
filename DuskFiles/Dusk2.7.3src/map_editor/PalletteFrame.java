import java.awt.*;
import java.awt.event.*;
import java.io.*;
import java.util.Vector;
import java.lang.Math;
import java.lang.reflect.Array;
import java.util.StringTokenizer;
import java.applet.*;
import java.net.*;

public class PalletteFrame extends Frame implements MouseListener, MouseMotionListener, ItemListener
{
	DuskMapEditor appParent;
	Panel pnlGraphics = new Panel();
	MenuBar menuBar = new MenuBar();
	Menu mScale = new Menu("Scale");
	CheckboxMenuItem cbmi100 = new CheckboxMenuItem("100%");
	CheckboxMenuItem cbmi75 = new CheckboxMenuItem("75%");
	CheckboxMenuItem cbmi50 = new CheckboxMenuItem("50%");
	CheckboxMenuItem cbmi25 = new CheckboxMenuItem("25%");
	int lastX=0,
		lastY=0,
		lastMouseX=0,
		lastMouseY=0;


	public PalletteFrame(DuskMapEditor inParent)
	{
		appParent = inParent;
	}
	

	public void initComponents() throws Exception
	{
		mScale.add(cbmi100);
		mScale.add(cbmi75);
		mScale.add(cbmi50);
		mScale.add(cbmi25);
		menuBar.add(mScale);
		cbmi75.setState(true);

		setMenuBar(menuBar);

		int intX = 25 * appParent.intImageSizePalette;
		int intY = ((appParent.numMapImages / 25) + 1) * appParent.intImageSizePalette;
		pnlGraphics.setLocation(new java.awt.Point(0, 0));
		pnlGraphics.setVisible(true);
		pnlGraphics.setLayout(null);
		pnlGraphics.setSize(new java.awt.Dimension(intX, intY));
		pnlGraphics.setBackground(appParent.background);
		pnlGraphics.setCursor(new Cursor(Cursor.WAIT_CURSOR));

		setLocation(new java.awt.Point(0, 0));
		setTitle("Palette");
		setLayout(new BorderLayout());

		add(pnlGraphics, BorderLayout.CENTER);

		cbmi100.addItemListener(this);
		cbmi75.addItemListener(this);
		cbmi50.addItemListener(this);
		cbmi25.addItemListener(this);

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

	
	//Accept mouse input
	public void mousePressed(MouseEvent evt)
	{
		int x = evt.getX();
		int y = evt.getY();

		if(!appParent.blnLoaded) return;

		//Find coordinates of click on map
		lastX = (x / appParent.intImageSizePalette);
		lastY = (y / appParent.intImageSizePalette);
	}

	public void mouseReleased(MouseEvent evt)
	{
		int x = evt.getX();
		int y = evt.getY();

		if(!appParent.blnLoaded) return;

		//Find coordinates of click on map
		int newX = (x / appParent.intImageSizePalette);
		int newY = (y / appParent.intImageSizePalette);

		if ((lastX == newX) && (lastY == newY))
		{
			appParent.pfX = newX;
			appParent.pfY = newY;
			appParent.ForeGroundTile = (short)((newY*25) + newX);

			appParent.update();
			appParent.paint(appParent.g);
			hide();
		}
	}

	public void mouseClicked(MouseEvent evt)
	{
		if (evt.getComponent() == pnlGraphics)
		{
			int x = evt.getX();
			int y = evt.getY();
			int newX,
				newY;
 			if(!appParent.blnLoaded) return;
 	
 			//Find coordinates of click on map
 			newX = (x / appParent.intImageSizePalette);
 			newY = (y / appParent.intImageSizePalette);

			appParent.pfX = newX;
			appParent.pfY = newY;
			appParent.ForeGroundTile = (short)((newY*25) + newX);

			appParent.update();
			appParent.paint(appParent.g);
			hide();
		}
	}
	public void mouseEntered(MouseEvent evt) {}

	public void mouseExited(MouseEvent evt)
	{
		evt.consume();
		if (!appParent.blnLoaded)
		{
			return;
		}
		if (evt.getComponent() == pnlGraphics)
		{
			drawTile(lastMouseX,lastMouseY,((lastMouseY*25) + lastMouseX));
			appParent.update();
			appParent.paint(appParent.g);
		}
	}

    public void mouseMoved(MouseEvent evt)
	{
        evt.consume();
		if (!appParent.blnLoaded)
		{
			return;
		}
		if (evt.getComponent() == pnlGraphics)
		{
			int x = evt.getX();
			int y = evt.getY();

 			int destX = (x / appParent.intImageSizePalette);
 			int destY = (y / appParent.intImageSizePalette);

			drawTile(lastMouseX,lastMouseY,((lastMouseY*25) + lastMouseX));
			Color highlight = new Color(255,255,255,128);
			appParent.gD_p.setColor(highlight);
			appParent.gD_p.fillRect(((destX)*appParent.intImageSizePalette),
						((destY)*appParent.intImageSizePalette),
						appParent.intImageSizePalette,
						appParent.intImageSizePalette);
			lastMouseX = destX;
			lastMouseY = destY;
			appParent.paint(appParent.g);
		}
	}
	
	public void mouseDragged(MouseEvent evt) {}


	public void itemStateChanged (ItemEvent evt)
	{
		if (evt.getSource() == cbmi100)
		{
			appParent.intImageSizePalette = appParent.intImageOriginalSize;
			cbmi100.setState(true);
			cbmi75.setState(false);
			cbmi50.setState(false);
			cbmi25.setState(false);
		} else if (evt.getSource() == cbmi75)
		{
			appParent.intImageSizePalette = (appParent.intImageOriginalSize * 3)/4;
			cbmi100.setState(false);
			cbmi75.setState(true);
			cbmi50.setState(false);
			cbmi25.setState(false);
		} else if (evt.getSource() == cbmi50)
		{
			appParent.intImageSizePalette = appParent.intImageOriginalSize/2;
			cbmi100.setState(false);
			cbmi75.setState(false);
			cbmi50.setState(true);
			cbmi25.setState(false);
		} else if (evt.getSource() == cbmi25)
		{
			appParent.intImageSizePalette = appParent.intImageOriginalSize/4;
			cbmi100.setState(false);
			cbmi75.setState(false);
			cbmi50.setState(false);
			cbmi25.setState(true);
		}
		appParent.imgMapPalette = appParent.imgOriginalMap.getScaledInstance(-1,appParent.intImageSizePalette,Image.SCALE_DEFAULT);
		try
		{
			MediaTracker mdtTracker = new MediaTracker(appParent.frame);
			mdtTracker.addImage(appParent.imgMapPalette,0);
			mdtTracker.waitForAll();
		}catch(Exception e)
		{
			System.err.println("Error while waiting for images: "+e.toString());
		}
		int intX = 25 * appParent.intImageSizePalette;
		int intY = ((appParent.numMapImages / 25) + 1) * appParent.intImageSizePalette;
		setSize(new java.awt.Dimension(intX+(getInsets().left+getInsets().right), intY+(getInsets().top+getInsets().bottom)));
		pnlGraphics.setSize(new java.awt.Dimension(intX, intY));
		if (appParent.imgPalette != null)
			appParent.imgPalette.flush();
		appParent.imgPalette = appParent.frmPalette.pnlGraphics.createImage(intX, intY);
		appParent.gD_p = appParent.imgPalette.getGraphics();
		appParent.g_p = appParent.frmPalette.pnlGraphics.getGraphics();
		appParent.update();
		appParent.paint(appParent.g);
	}
	
	void thisWindowClosing(WindowEvent e)
	{
		setVisible(false);
	}

	public void drawTile(int x, int y, int tile)
	{
		appParent.gD_p.drawImage(appParent.imgMapPalette,
						x*appParent.intImageSizePalette,
						y*appParent.intImageSizePalette,
						(x+1)*appParent.intImageSizePalette,
						(y+1)*appParent.intImageSizePalette,
						tile*appParent.intImageSizePalette,
						0,
						(tile+1)*appParent.intImageSizePalette,
						appParent.intImageSizePalette,
						null);
	}

	public void paint(Graphics pg)
	{
		if (appParent.imgPalette != null)
		{
			pg.drawImage(appParent.imgPalette,0,0,appParent.frame.pnlGraphics);
		}
	}
}
