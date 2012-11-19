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

public class DuskMapEditor implements MouseListener,ComponentListener,ActionListener,KeyListener/*,ImageObserver*/,MouseMotionListener,AdjustmentListener
{
	static String strVersion="1.0";
	
	int numMapImages,
        MapRows=25,
        MapColumns=25,
        LocX=0,
        LocY=0,
		LastMouseX=0,
		LastMouseY=0,
		LastMouseXp=0,
		LastMouseYp=0,
		pfX = 0,
		pfY = 0,
		selectStartX=0,
		selectStartY=0,
		selectStopX=0,
		selectStopY=0,
		copyWidth=0,
		copyHeight=0,
		intButton;
	short ForeGroundTile=0;
	String strTile = "-1";
	String strCurrentFile = "untitled";
	String strCurrentPaletteFile = "untitled";
	String strCurrentDirectory = null;
	boolean blnLoaded=false,
			blnFirstDrag=true,
			blnActiveSelection=false,
			blnActivePaste=false,
			blnApplet;
    Applet appShell;
    
	Image imgOriginalMap;
	Image imgMap = null;
	Image imgCursorMap = null;
	Image imgMapPalette = null;
	//VolatileImage imgDisplay;
	Image imgDisplay;
	Image imgPalette;
	Image imgForeground;
	
	short shrMap[][];
	short shrUndo[][];
	short shrRedo[][];
	short shrCopy[][];
	
    int intImageSize = 36;
	int intImageOriginalSize = 36;
    int intImageSizePalette = (intImageOriginalSize * 3)/4;
	int intXmod = 8;
	int intYmod = 34;
    
    MainFrame frame;
    PalletteFrame frmPalette;
    HelpFrame frmHelp;
    SizeFrame frmSize;
	SizeFrame frmReSize;
	
	Color background;
	Graphics g;
	Graphics gD;
	Graphics g_p;
	Graphics gD_p;
	Graphics g_f;
	Graphics gD_f;
	GraphicsThread thrGraphics;

	boolean blnScaling=false;

    public DuskMapEditor(Applet parent)
    {
    	appShell = parent;
    	blnApplet = true;
    	startUp();
    }
    
	public DuskMapEditor() 
	{
    	startUp();
	}
	
	void startUp()
	{
		shrMap = new short[MapColumns][MapRows];
		shrUndo = new short[MapColumns][MapRows];
		shrRedo = new short[MapColumns][MapRows];
		try
		{
			background = new Color(140,140,140);

			frame = new MainFrame(this);
			frame.initComponents();
			frame.setVisible(true);
			frame.pnlGraphics.addComponentListener(this);
			frame.addComponentListener(this);
			frame.pnlGraphics.addMouseListener(this);
			frame.pnlGraphics.addMouseMotionListener(this);
			frame.pnlGraphics.addKeyListener(this);
			frame.pnlForeground.addMouseListener(this);
			frame.scrollVert.addAdjustmentListener(this);
			frame.scrollHorz.addAdjustmentListener(this);

			Image imgButtonUp = Toolkit.getDefaultToolkit().getImage("drawUp.png");
			Image imgButtonDown = Toolkit.getDefaultToolkit().getImage("drawDown.png");
			try
			{
				MediaTracker mdtTracker = new MediaTracker(frame);
				mdtTracker.addImage(imgButtonUp,0);
				mdtTracker.addImage(imgButtonDown,0);
				mdtTracker.waitForAll();
			}catch(Exception e)
			{
				System.err.println("Error while waiting for images: "+e.toString());
			}
			frame.btnToolDraw.setImage(imgButtonUp,false);
			frame.btnToolDraw.setImage(imgButtonDown,true);
			frame.btnToolDraw.setState(true);

			imgButtonUp = Toolkit.getDefaultToolkit().getImage("selectUp.png");
			imgButtonDown = Toolkit.getDefaultToolkit().getImage("selectDown.png");
			try
			{
				MediaTracker mdtTracker = new MediaTracker(frame);
				mdtTracker.addImage(imgButtonUp,0);
				mdtTracker.addImage(imgButtonDown,0);
				mdtTracker.waitForAll();
			}catch(Exception e)
			{
				System.err.println("Error while waiting for images: "+e.toString());
			}
			frame.btnToolSelect.setImage(imgButtonUp,false);
			frame.btnToolSelect.setImage(imgButtonDown,true);
			frame.btnToolSelect.setState(false);

			imgButtonUp = Toolkit.getDefaultToolkit().getImage("zoomUp.png");
			imgButtonDown = Toolkit.getDefaultToolkit().getImage("zoomDown.png");
			try
			{
				MediaTracker mdtTracker = new MediaTracker(frame);
				mdtTracker.addImage(imgButtonUp,0);
				mdtTracker.addImage(imgButtonDown,0);
				mdtTracker.waitForAll();
			}catch(Exception e)
			{
				System.err.println("Error while waiting for images: "+e.toString());
			}
			frame.btnToolZoom.setImage(imgButtonUp,false);
			frame.btnToolZoom.setImage(imgButtonDown,true);
			frame.btnToolZoom.setState(false);

			scaleWindow();


//			imgOriginalMap = Toolkit.getDefaultToolkit().getImage("map.gif");
			imgOriginalMap = Toolkit.getDefaultToolkit().getImage("map.png");
			try
			{
				MediaTracker mdtTracker = new MediaTracker(frame);
				mdtTracker.addImage(imgOriginalMap,0);
				mdtTracker.waitForAll();
			}catch(Exception e)
			{
				System.err.println("Error while waiting for images: "+e.toString());
			}
			numMapImages = (imgOriginalMap.getWidth(null)/imgOriginalMap.getHeight(null))-1;
			intImageOriginalSize = imgOriginalMap.getHeight(null);
			intImageSizePalette = (intImageOriginalSize * 3)/4;
//			imgDisplay = frame.pnlGraphics.createVolatileImage((MapColumns*intImageOriginalSize),(MapRows*intImageOriginalSize));
			imgDisplay = frame.pnlGraphics.createImage((MapColumns*intImageOriginalSize),(MapRows*intImageOriginalSize));
			gD = imgDisplay.getGraphics();
			g = frame.pnlGraphics.getGraphics();

			imgForeground = frame.pnlForeground.createImage(intImageOriginalSize,intImageOriginalSize);
			frame.pnlForeground.setSize(new java.awt.Dimension(intImageOriginalSize,intImageOriginalSize));
			gD_f = imgForeground.getGraphics();
			g_f = frame.pnlForeground.getGraphics();

			frmPalette = new PalletteFrame(this);
			frmPalette.initComponents();
			frmPalette.setTitle("Palette: "+numMapImages+" images");
			frmPalette.show();
			frmPalette.pnlGraphics.addMouseListener(frmPalette);
			frmPalette.pnlGraphics.addMouseMotionListener(frmPalette);

			int intX = 25 * intImageSizePalette;
			int intY = ((numMapImages / 25) + 1) * intImageSizePalette;
			frmPalette.setSize(new java.awt.Dimension(intX+(frmPalette.getInsets().left+frmPalette.getInsets().right), intY+(frmPalette.getInsets().top+frmPalette.getInsets().bottom)));
			imgPalette = frmPalette.pnlGraphics.createImage(intX, intY);
			gD_p = imgPalette.getGraphics();
			g_p = frmPalette.pnlGraphics.getGraphics();
			frmPalette.hide();

			frmSize = new SizeFrame(this);
			frmReSize = new SizeFrame(this,true);

			frmHelp = new HelpFrame();
			frmHelp.initComponents();
			frmHelp.hide();

			blnLoaded = true;
			scaleImages();
			update();
			paint(g);
			frmPalette.pnlGraphics.setCursor(new Cursor(Cursor.DEFAULT_CURSOR));
			frame.pnlGraphics.setCursor(new Cursor(Cursor.DEFAULT_CURSOR));

			thrGraphics = new GraphicsThread(this);
			thrGraphics.run();

		}catch (Exception e) 
		{
			e.printStackTrace();
		}
	}

	// Main entry point
	static public void main(String[] args) 
	{
		new DuskMapEditor();
	}
	
	public void scaleImages()
	{
		try
		{
			if (imgMap != null)
				imgMap.flush();
			intImageSize = intImageOriginalSize; 
//			imgMap = imgOriginalMap.getScaledInstance(intImageSize*(numMapImages+1),intImageSize,Image.SCALE_DEFAULT);
if (imgMap == null)
{
			imgMap = imgOriginalMap;
			imgCursorMap = ImageTools.makeImageTransparent(imgOriginalMap);
}
if (imgMapPalette == null)
{
	imgMapPalette = imgOriginalMap.getScaledInstance(-1,intImageSizePalette,Image.SCALE_DEFAULT);
	try
	{
		MediaTracker mdtTracker = new MediaTracker(frame);
		mdtTracker.addImage(imgMapPalette,0);
//		mdtTracker.addImage(imgOriginalMap,0);
		mdtTracker.waitForAll();
	}catch(Exception e)
	{
		System.err.println("Error while waiting for images: "+e.toString());
	}
}
		}catch (Exception e){}
	}
	
	public void scaleWindow()
	{
		int Ymod = frame.pnlButtons.getBounds().height+frame.scrollHorz.getBounds().height+(frame.getInsets().top+frame.getInsets().bottom);
		int Xmod = frame.scrollVert.getBounds().width+(frame.getInsets().left+frame.getInsets().right);
		int intX = (frame.pnlGraphics.getBounds().width)/intImageSize;
		int intY = (frame.pnlGraphics.getBounds().height)/intImageSize;
		if (intX < 1)
			intX = 1;
		if (intY < 1)
			intY = 1;
		frame.scrollVert.setVisibleAmount(intY);
		frame.scrollHorz.setVisibleAmount(intX);
		intX = intX * intImageSize;
		intY = intY * intImageSize;
		if (!blnScaling)
		{
			frame.setSize(new java.awt.Dimension(intX+Xmod, intY+Ymod));
		}
		frame.pnlGraphics.setSize(new java.awt.Dimension(intX+Xmod, intY+Ymod));
		if (imgDisplay != null)
			imgDisplay.flush();
//		imgDisplay = frame.pnlGraphics.createVolatileImage(intX, intY);
		imgDisplay = frame.pnlGraphics.createImage(intX, intY);
		gD = imgDisplay.getGraphics();
		g = frame.pnlGraphics.getGraphics();
		System.gc();
		blnScaling = !blnScaling;
	}
	
	//Accept mouse input
	public void mousePressed(MouseEvent evt)
	{
		intButton = evt.getButton();

		if (frame.btnToolDraw.isPushed())
		{
			for (int x=0; x<MapColumns; x++)
			{
				for (int y=0; y<MapRows; y++)
				{
					shrUndo[x][y] = shrMap[x][y];
				}
			}
			frame.miUndo.setEnabled(true);
			frame.miRedo.setEnabled(false);
		}
	}

	public void mouseReleased(MouseEvent evt)
	{
		if (frame.btnToolDraw.isPushed())
		{
			for (int x=0; x<MapColumns; x++)
			{
				for (int y=0; y<MapRows; y++)
				{
					shrRedo[x][y] = shrMap[x][y];
				}
			}
		}
		blnFirstDrag=true;
	}

	public void mouseClicked(MouseEvent evt)
	{
        evt.consume();
		if (evt.getComponent() == frame.pnlGraphics)
		{
			if (frame.btnToolDraw.isPushed())
			{
				int x = evt.getX();
				int y = evt.getY();
				if(!blnLoaded) return;

				for (int ux=0; ux<MapColumns; ux++)
				{
					for (int uy=0; uy<MapRows; uy++)
					{
						shrUndo[ux][uy] = shrMap[ux][uy];
					}
				}
				frame.miUndo.setEnabled(true);

				//Find coordinates of click on map
				int sx = frame.scrollHorz.getValue();
				int sy = frame.scrollVert.getValue();
				int destX = (x / intImageSize);
				int destY = (y / intImageSize);
				frame.lblLocation.setText("Loc: "+(destX+sx)+","+(destY+sy));

				if (evt.getButton() == MouseEvent.BUTTON1)
				{
					if (blnActiveSelection)
					{
						int startX = min(selectStartX,selectStopX);
						int stopX = max(selectStartX,selectStopX);
						int startY = min(selectStartY,selectStopY);
						int stopY = max(selectStartY,selectStopY);

						if (((destX + sx) >= startX) && ((destX + sx) <= stopX) &&
							((destY + sy) >= startY) && ((destY + sy) <= stopY))
						{
							shrMap[destX + sx][destY + sy] = ForeGroundTile;
							drawTile(imgMap,destX,destY,shrMap[destX+sx][destY+sy]);
							paint(g);
						}
					} else {
						shrMap[destX + sx][destY + sy] = ForeGroundTile;
						drawTile(imgMap,destX,destY,shrMap[destX+sx][destY+sy]);
						paint(g);
					}
				} else if (evt.getButton() == MouseEvent.BUTTON3)
				{
					short replaceMe = shrMap[destX + sx][destY + sy];
					if (blnActiveSelection)
					{
						int startX = min(selectStartX,selectStopX);
						int stopX = max(selectStartX,selectStopX);
						int startY = min(selectStartY,selectStopY);
						int stopY = max(selectStartY,selectStopY);

						for (int i=startX;i<=stopX;i++)
						{
							for (int i2=startY;i2<=stopY;i2++)
							{
								if (shrMap[i][i2] == replaceMe)
								{
									shrMap[i][i2] = ForeGroundTile;
								}
							}
						}
					} else {
						for (int i=0;i<MapColumns;i++)
						{
							for (int i2=0;i2<MapRows;i2++)
							{
								if (shrMap[i][i2] == replaceMe)
								{
									shrMap[i][i2] = ForeGroundTile;
								}
							}
						}
					}
					update();
					paint(g);
				}
				for (int rx=0; rx<MapColumns; rx++)
				{
					for (int ry=0; ry<MapRows; ry++)
					{
						shrRedo[rx][ry] = shrMap[rx][ry];
					}
				}
			} else if(frame.btnToolSelect.isPushed())
			{
				if (evt.getButton() == MouseEvent.BUTTON1)
				{
					blnActiveSelection = false;
					frame.miCopy.setEnabled(false);
					frame.miClear.setEnabled(false);
					update();
					paint(g);
				}
				return;
			} else if (frame.btnToolZoom.isPushed())
			{
				if (evt.getButton() == MouseEvent.BUTTON1)
				{
					if (blnActiveSelection)
					{
						int Ymod = frame.pnlButtons.getBounds().height+frame.scrollHorz.getBounds().height+(frame.getInsets().top+frame.getInsets().bottom);
						int Xmod = frame.scrollVert.getBounds().width+(frame.getInsets().left+frame.getInsets().right);

						int currentWidth = (frame.pnlGraphics.getBounds().width - Xmod)/intImageSize;
						int currentHeight = (frame.pnlGraphics.getBounds().height - Ymod)/intImageSize;

						int startX = min(selectStartX,selectStopX);
						int stopX = max(selectStartX,selectStopX);
						int startY = min(selectStartY,selectStopY);
						int stopY = max(selectStartY,selectStopY);

						int newWidth = stopX - startX;
						int newHeight = stopY - startY;

						float scaleX = currentWidth / newWidth;
						float scaleY = currentHeight / newHeight;

						if (scaleX < scaleY)
						{
							intImageSize = (int)(scaleX * intImageSize);
						} else
						{
							intImageSize = (int)(scaleY * intImageSize);
						}

						frame.scrollHorz.setValue(startX);
						frame.scrollVert.setValue(startY);
						frame.cbmi100.setState(false);
						frame.cbmi75.setState(false);
						frame.cbmi50.setState(false);
						frame.cbmi25.setState(false);
						frame.cbmi5p.setState(false);
						frame.cbmi4p.setState(false);
						frame.cbmi3p.setState(false);
						frame.cbmi2p.setState(false);
						frame.cbmi1p.setState(false);

						imgMap = imgOriginalMap.getScaledInstance(-1,intImageSize,Image.SCALE_DEFAULT);

						try
						{
							MediaTracker mdtTracker = new MediaTracker(frame);
							mdtTracker.addImage(imgMap,0);
							mdtTracker.waitForAll();
						}catch(Exception e)
						{
							System.err.println("Error while waiting for images: "+e.toString());
						}
						imgCursorMap.flush();
						imgCursorMap = ImageTools.makeImageTransparent(imgMap);
						try
						{
							MediaTracker mdtTracker = new MediaTracker(frame);
							mdtTracker.addImage(imgCursorMap,0);
							mdtTracker.waitForAll();
						}catch(Exception e)
						{
							System.err.println("Error while waiting for images: "+e.toString());
						}
						int intX = (frame.pnlGraphics.getBounds().width)/intImageSize;
						int intY = (frame.pnlGraphics.getBounds().height)/intImageSize;
						if (intX < 1)
							intX = 1;
						if (intY < 1)
							intY = 1;
						boolean blnResize = false;
						if (intX > MapColumns)
						{
							frame.scrollHorz.setValue(0);
							intX = MapColumns;
							blnResize = true;
						}
						if (intY > MapRows)
						{
							frame.scrollVert.setValue(0);
							intY = MapRows;
							blnResize = true;
						}
						frame.scrollVert.setVisibleAmount(intY);
						frame.scrollHorz.setVisibleAmount(intX);
						if (blnResize)
						{
//							Ymod = frame.pnlButtons.getBounds().height+frame.scrollHorz.getBounds().height+(frame.getInsets().top+frame.getInsets().bottom);
//							Xmod = frame.scrollVert.getBounds().width+(frame.getInsets().left+frame.getInsets().right);
							frame.setSize(((intImageSize*intX)+Xmod),((intImageSize*intY)+Ymod));
						}

						intX = intX * intImageSize;
						intY = intY * intImageSize;
						if (imgDisplay != null)
							imgDisplay.flush();
//						imgDisplay = frame.pnlGraphics.createVolatileImage(intX, intY);
						imgDisplay = frame.pnlGraphics.createImage(intX, intY);
						gD = imgDisplay.getGraphics();
						g = frame.pnlGraphics.getGraphics();

						update();
						paint(g);

					} else
					{
					}
				}
			}
  		} else if (evt.getComponent() == frame.pnlForeground)
		{
			frmPalette.show();
  		}
	}
	
	
	public void mouseEntered(MouseEvent evt){}

	
	public void mouseExited(MouseEvent evt)
	{
		evt.consume();
		if (!blnLoaded)
		{
			return;
		}
		if (evt.getComponent() == frame.pnlGraphics)
		{
			if (frame.btnToolDraw.isPushed())
			{
				int sx = frame.scrollHorz.getValue();
				int sy = frame.scrollVert.getValue();

				drawTile(imgMap,LastMouseX,LastMouseY,shrMap[LastMouseX+sx][LastMouseY+sy]);
				if (blnActiveSelection && isInSelection(LastMouseX+sx,LastMouseY+sy))
				{
					Color highlight = new Color(255,255,255,128);
					gD.setColor(highlight);
					gD.fillRect(((LastMouseX)*intImageSize),((LastMouseY)*intImageSize),intImageSize,intImageSize);
				}
				paint(g);
			}
		}
	}

    public void mouseMoved(MouseEvent evt)
	{
        evt.consume();
		if (!blnLoaded)
		{
			return;
		}
		if (evt.getComponent() == frame.pnlGraphics)
		{
			int x = evt.getX();
			int y = evt.getY();

			//Find coordinates of mouse on map
			int sx = frame.scrollHorz.getValue();
			int sy = frame.scrollVert.getValue();
 			int destX = (x / intImageSize);
 			int destY = (y / intImageSize);
			frame.lblLocation.setText("Loc: "+(destX+sx)+","+(destY+sy));

			if (!frame.btnToolDraw.isPushed())
			{
				return;
			}

			drawTile(imgMap,LastMouseX,LastMouseY,shrMap[LastMouseX+sx][LastMouseY+sy]);
			if (blnActiveSelection && isInSelection(LastMouseX+sx,LastMouseY+sy))
			{
				Color highlight = new Color(255,255,255,128);
				gD.setColor(highlight);
				gD.fillRect(((LastMouseX)*intImageSize),((LastMouseY)*intImageSize),intImageSize,intImageSize);
			}
			if (((destX+sx) >= 0) && ((destX+sx) < MapColumns) && ((destY+sy) >= 0) && ((destY+sy) < MapRows))
			{
				drawTile(imgMap,destX,destY,shrMap[destX+sx][destY+sy]);
				drawTile(imgCursorMap,destX,destY,ForeGroundTile);

				LastMouseX = destX;
				LastMouseY = destY;
			}
			paint(g);
		}
	}
	
	public void mouseDragged(MouseEvent evt)
	{
        evt.consume();
		if (evt.getComponent() == frame.pnlGraphics)
		{
			int x = evt.getX();
			int y = evt.getY();

			//Find coordinates of click on map
			int sx = frame.scrollHorz.getValue();
			int sy = frame.scrollVert.getValue();
			int destX = (x / intImageSize);
			int destY = (y / intImageSize);
			frame.lblLocation.setText("Loc: "+(destX+sx)+","+(destY+sy));

			if (frame.btnToolDraw.isPushed())
			{
				drawTile(imgMap,LastMouseX,LastMouseY,shrMap[LastMouseX+sx][LastMouseY+sy]);
				if (blnActiveSelection && isInSelection(LastMouseX+sx,LastMouseY+sy))
				{
					Color highlight = new Color(255,255,255,128);
					gD.setColor(highlight);
					gD.fillRect(((LastMouseX)*intImageSize),((LastMouseY)*intImageSize),intImageSize,intImageSize);
				}
				if (intButton == MouseEvent.BUTTON1)
				{
					if (isInSelection(destX+sx,destY+sy))
					{
						shrMap[destX + sx][destY + sy] = ForeGroundTile;
					}
					drawTile(imgMap,destX,destY,shrMap[destX+sx][destY+sy]);
					if (blnActiveSelection && isInSelection(destX+sx,destY+sy))
					{
						Color highlight = new Color(255,255,255,128);
						gD.setColor(highlight);
						gD.fillRect(((destX)*intImageSize),((destY)*intImageSize),intImageSize,intImageSize);
					}
				}
				paint(g);
			} else if (frame.btnToolSelect.isPushed())
			{
				if (intButton != MouseEvent.BUTTON1)
				{
					return;
				}
				int oldStartX = min(selectStartX,selectStopX);
				int oldStopX = max(selectStartX,selectStopX);
				int oldStartY = min(selectStartY,selectStopY);
				int oldStopY = max(selectStartY,selectStopY);
				for (int x1=oldStartX; x1 <= oldStopX; x1++)
				{
					for (int y1=oldStartY; y1 <= oldStopY; y1++)
					{
						drawTile(imgMap,(x1-sx),(y1-sy),shrMap[x1][y1]);
					}
				}

				if (blnFirstDrag)
				{
					paint(g);
					selectStartX = destX + sx;
					selectStartY = destY + sy;
					if (selectStartX >= MapColumns)
					{
						selectStartX = MapColumns - 1;
					}
					if (selectStartY >= MapRows)
					{
						selectStartY = MapRows - 1;
					}
					if (selectStartX < 0)
					{
						selectStartX = 0;
					}
					if (selectStartY < 0)
					{
						selectStartY = 0;
					}
					blnFirstDrag = false;
					blnActiveSelection = true;
					frame.miCopy.setEnabled(true);
					frame.miClear.setEnabled(true);
				}
				selectStopX = destX + sx;
				selectStopY = destY + sy;

				if (selectStopX >= MapColumns)
				{
					selectStopX = MapColumns - 1;
				}
				if (selectStopY >= MapRows)
				{
					selectStopY = MapRows - 1;
				}
				if (selectStopX < 0)
				{
					selectStopX = 0;
				}
				if (selectStopY < 0)
				{
					selectStopY = 0;
				}

				int startX = min(selectStartX,selectStopX);
				int stopX = max(selectStartX,selectStopX);
				int startY = min(selectStartY,selectStopY);
				int stopY = max(selectStartY,selectStopY);

				Color highlight = new Color(255,255,255,128);
				gD.setColor(highlight);
				int rx,
					ry,
					width,
					height;
				rx = (startX-sx)*intImageSize;
				width = ((stopX-sx+1)*intImageSize) - rx;
				ry = (startY-sy)*intImageSize;
				height = ((stopY-sy+1)*intImageSize) - ry;
				gD.fillRect(rx,ry,width,height);
				paint(g);
			}
		}
    }
	
	//Accept key input
	public void keyPressed(KeyEvent evt)
	{
		return;
	}
	public void keyReleased(KeyEvent evt){}
	public void keyTyped(KeyEvent evt){}
	public void componentResized(ComponentEvent evt)
	{
		if (evt.getSource() != frame)
		{
			return;
		}
		scaleWindow();
		update();
		paint(g);
	}
	public void componentMoved(ComponentEvent evt){}
	public void componentShown(ComponentEvent evt){}
	public void componentHidden(ComponentEvent evt){}

	public void actionPerformed(ActionEvent evt)
	{
		if (evt.getSource() == frame.miNew)
		{
			frmSize.show();
		}else if (evt.getSource() == frame.miResize)
		{
			frmReSize.show();
		}else if (evt.getSource() == frame.miSave)
		{
			String strName = null;
			String strDir = null;
			FileDialog fileChooser = new FileDialog(frame, "Save map file", FileDialog.SAVE);
			if (strCurrentFile == "untitled")
			{
				if (strCurrentDirectory != null)
				{
					fileChooser.setDirectory(strCurrentDirectory);
				}
				fileChooser.show();
				strName = fileChooser.getFile();
				strDir = fileChooser.getDirectory();
				if (strName == null)
				{
					return;
				}
			} else
			{
				strName = strCurrentFile;
				strDir = strCurrentDirectory;
			}
			String strFileName = strDir + strName;

			frame.pnlGraphics.setCursor(new Cursor(Cursor.WAIT_CURSOR));
			try
			{
				File deleteme = new File(strFileName);
				deleteme.delete();
				RandomAccessFile rafFile = new RandomAccessFile(strFileName, "rw");
				rafFile.writeInt(MapColumns);
				rafFile.writeInt(MapRows);
				for (int i=0;i<MapColumns;i++)
				{
					for (int i2=0;i2<MapRows;i2++)
					{
						rafFile.writeShort(shrMap[i][i2]);
					}
				}
				rafFile.close();
				strCurrentFile = strName;
				strCurrentDirectory = strDir;
				frame.setTitle("Dusk Map Editor: "+strCurrentFile+" "+MapColumns+"x"+MapRows);
			}
			catch (Exception e) {}
			frame.pnlGraphics.setCursor(new Cursor(Cursor.DEFAULT_CURSOR));
		}else if (evt.getSource() == frame.miSaveAs)
		{
			FileDialog fileChooser = new FileDialog(frame, "Save map file", FileDialog.SAVE);
			if (strCurrentDirectory != null)
			{
				fileChooser.setDirectory(strCurrentDirectory);
			}
			if (strCurrentFile != "untitled")
			{
				fileChooser.setFile(strCurrentFile);
			}
			fileChooser.show();
			String strName = fileChooser.getFile();
			String strDir = fileChooser.getDirectory();
			if (strName == null)
			{
				return;
			}
			String strFileName = strDir + strName;

			frame.pnlGraphics.setCursor(new Cursor(Cursor.WAIT_CURSOR));
			try
			{
				File deleteme = new File(strFileName);
				deleteme.delete();
				RandomAccessFile rafFile = new RandomAccessFile(strFileName, "rw");
				rafFile.writeInt(MapColumns);
				rafFile.writeInt(MapRows);
				for (int i=0;i<MapColumns;i++)
				{
					for (int i2=0;i2<MapRows;i2++)
					{
						rafFile.writeShort(shrMap[i][i2]);
					}
				}
				rafFile.close();
				strCurrentFile = strName;
				strCurrentDirectory = strDir;
				frame.setTitle("Dusk Map Editor: "+strCurrentFile+" "+MapColumns+"x"+MapRows);
			}
			catch (Exception e) {}
			frame.pnlGraphics.setCursor(new Cursor(Cursor.DEFAULT_CURSOR));
		}else if (evt.getSource() == frame.miOpen)
		{
			FileDialog fileChooser = new FileDialog(frame, "Open map file", FileDialog.LOAD);
			if (strCurrentDirectory != null)
			{
				fileChooser.setDirectory(strCurrentDirectory);
			}
			if (strCurrentFile != "untitled")
			{
				fileChooser.setFile(strCurrentFile);
			}
			fileChooser.show();
			String strName = fileChooser.getFile();
			String strDir = fileChooser.getDirectory();
			if (strName == null)
			{
				return;
			}
			String strFileName = strDir + strName;
			File newmap = new File(strFileName);
			if (newmap.exists())
			{
				frame.pnlGraphics.setCursor(new Cursor(Cursor.WAIT_CURSOR));
				try
				{
					RandomAccessFile rafFile = new RandomAccessFile(strFileName, "r");
					MapColumns = rafFile.readInt();
					MapRows = rafFile.readInt();
					shrMap = new short[MapColumns][MapRows];
					shrUndo = new short[MapColumns][MapRows];
					shrRedo = new short[MapColumns][MapRows];
					strCurrentFile = strName;
					strCurrentDirectory = strDir;
					frame.setTitle("Dusk Map Editor: "+strCurrentFile+" "+MapColumns+"x"+MapRows);
					frame.scrollVert.setMaximum(MapRows);
					frame.scrollHorz.setMaximum(MapColumns);
					for (int i=0;i<MapColumns;i++)
					{
						for (int i2=0;i2<MapRows;i2++)
						{
							shrMap[i][i2] = rafFile.readShort();
						}
					}
					rafFile.close();
					update();
					paint(g);
				}
				catch (Exception e) {}
				frame.pnlGraphics.setCursor(new Cursor(Cursor.DEFAULT_CURSOR));
			}
		}else if (evt.getSource() == frame.miOpenPalette)
		{
			FileDialog fileChooser = new FileDialog(frame, "Open palette file", FileDialog.LOAD);
			if (strCurrentDirectory != null)
			{
				fileChooser.setDirectory(strCurrentDirectory);
			}
			if (strCurrentPaletteFile != "untitled")
			{
				fileChooser.setFile(strCurrentPaletteFile);
			}
			fileChooser.show();
			String strName = fileChooser.getFile();
			String strDir = fileChooser.getDirectory();
			if (strName == null)
			{
				return;
			}
			String strFileName = strDir + strName;
			File newpalette = new File(strFileName);
			if (newpalette.exists())
			{
				frame.pnlGraphics.setCursor(new Cursor(Cursor.WAIT_CURSOR));
				try
				{
					blnLoaded = false;
					imgOriginalMap = Toolkit.getDefaultToolkit().getImage(strFileName);
					try
					{
						MediaTracker mdtTracker = new MediaTracker(frame);
						mdtTracker.addImage(imgOriginalMap,0);
						mdtTracker.waitForAll();
					}catch(Exception e)
					{
						System.err.println("Error while waiting for images: "+e.toString());
					}
					numMapImages = (imgOriginalMap.getWidth(null)/imgOriginalMap.getHeight(null))-1;
					frmPalette.setTitle("Palette: "+numMapImages+" images");
					intImageOriginalSize = imgOriginalMap.getHeight(null);
					intImageSizePalette = (intImageOriginalSize * 3)/4;

					int intX = (frame.pnlGraphics.getBounds().width)/intImageSize;
					int intY = (frame.pnlGraphics.getBounds().height)/intImageSize;
					if (intX < 1)
						intX = 1;
					if (intY < 1)
						intY = 1;
					boolean blnResize = false;
					if (intX > MapColumns)
					{
						frame.scrollHorz.setValue(0);
						intX = MapColumns;
						blnResize = true;
					}
					if (intY > MapRows)
					{
						frame.scrollVert.setValue(0);
						intY = MapRows;
						blnResize = true;
					}
					frame.scrollVert.setVisibleAmount(intY);
					frame.scrollHorz.setVisibleAmount(intX);
					if (blnResize)
					{
						int Ymod = frame.pnlButtons.getBounds().height+frame.scrollHorz.getBounds().height+(frame.getInsets().top+frame.getInsets().bottom);
						int Xmod = frame.scrollVert.getBounds().width+(frame.getInsets().left+frame.getInsets().right);
						frame.setSize(((intImageSize*intX)+Xmod),((intImageSize*intY)+Ymod));
					}
					intX = intX * intImageSize;
					intY = intY * intImageSize;

					if (imgDisplay != null)
						imgDisplay.flush();

//					imgDisplay = frame.pnlGraphics.createVolatileImage(intX,intY);
					imgDisplay = frame.pnlGraphics.createImage((MapColumns*intImageOriginalSize),(MapRows*intImageOriginalSize));
					gD = imgDisplay.getGraphics();
					g = frame.pnlGraphics.getGraphics();

					imgForeground = frame.pnlForeground.createImage(intImageOriginalSize,intImageOriginalSize);
					frame.pnlForeground.setSize(new java.awt.Dimension(intImageOriginalSize,intImageOriginalSize));
					gD_f = imgForeground.getGraphics();
					g_f = frame.pnlForeground.getGraphics();

					frmPalette.show();

					imgMap = imgOriginalMap.getScaledInstance(-1,intImageSize,Image.SCALE_DEFAULT);
					imgMapPalette = imgOriginalMap.getScaledInstance(-1,intImageSizePalette,Image.SCALE_DEFAULT);
					try
					{
						MediaTracker mdtTracker = new MediaTracker(frame);
						mdtTracker.addImage(imgMap,0);
						mdtTracker.addImage(imgMapPalette,0);
						mdtTracker.waitForAll();
					}catch(Exception e)
					{
						System.err.println("Error while waiting for images: "+e.toString());
					}
					intX = 25 * intImageSizePalette;
					intY = ((numMapImages / 25) + 1) * intImageSizePalette;
					frmPalette.setSize(new java.awt.Dimension(intX+(frmPalette.getInsets().left+frmPalette.getInsets().right), intY+(frmPalette.getInsets().top+frmPalette.getInsets().bottom)));
					if (imgPalette != null)
						imgPalette.flush();
					imgPalette = frmPalette.pnlGraphics.createImage(intX, intY);
					gD_p = imgPalette.getGraphics();
					g_p = frmPalette.pnlGraphics.getGraphics();
					frmPalette.hide();

					imgCursorMap.flush();
					imgCursorMap = ImageTools.makeImageTransparent(imgMap);
					try
					{
						MediaTracker mdtTracker = new MediaTracker(frame);
						mdtTracker.addImage(imgCursorMap,0);
						mdtTracker.waitForAll();
					}catch(Exception e)
					{
						System.err.println("Error while waiting for images: "+e.toString());
					}

					update();
					paint(g);
					blnLoaded = true;
				}
				catch (Exception e)
				{
					System.err.println("Error while waiting loading new palette image: "+e.toString());
				}
				frmPalette.pnlGraphics.setCursor(new Cursor(Cursor.DEFAULT_CURSOR));
				frame.pnlGraphics.setCursor(new Cursor(Cursor.DEFAULT_CURSOR));
			}
		}else if (evt.getSource() == frame.miQuit)
		{
			try
			{
				imgOriginalMap.flush();
				imgMap.flush();
				imgMapPalette.flush();
				imgDisplay.flush();
				imgPalette.flush();
				imgForeground.flush();
			}catch(Exception exc) {}
			System.gc();
			if (blnApplet)
			{
				appShell.destroy();
			}else
			{
				System.exit(0);
			}
		}else if (evt.getSource() == frame.miCopy)
		{
			int x1,
				x2,
				y1,
				y2;
			x1=min(selectStartX,selectStopX);
			x2=max(selectStartX,selectStopX);
			y1=min(selectStartY,selectStopY);
			y2=max(selectStartY,selectStopY);
			copyWidth = x2-x1;
			copyHeight = y2-y1;
			shrCopy = new short[copyWidth+1][copyHeight+1];
			int x=0,
				y=0;
			for (x=0; x<=copyWidth; x++)
			{
				for (y=0; y<=copyHeight; y++)
				{
					shrCopy[x][y] = shrMap[x+x1][y+y1];
				}
			}
			frame.miPaste.setEnabled(true);
		}else if (evt.getSource() == frame.miPaste)
		{
			int sx = frame.scrollHorz.getValue();
			int sy = frame.scrollVert.getValue();

			int startX = sx;
			int startY = sy;
			int stopX = MapColumns;
			int stopY = MapRows;
			if (blnActiveSelection)
			{
				startX = min(selectStartX,selectStopX);
				startY = min(selectStartY,selectStopY);
			}
			stopX = startX + copyWidth;
			stopY = startY + copyHeight;
			int x1=0,
				y1=0,
				xinc=0;
			for (int x=0; x<MapColumns; x++)
			{
				for (int y=0; y<MapRows; y++)
				{
					shrUndo[x][y] = shrMap[x][y];
					if ((x >= startX) && (y >= startY) && (x <= stopX) && (y <= stopY))
					{
						shrMap[x][y] = shrCopy[x1][y1];
						y1++;
						xinc=1;
					}
					shrRedo[x][y] = shrMap[x][y];
				}
				x1+=xinc;
				y1 = 0;
				xinc=0;
			}
			blnActiveSelection = false;
			frame.miUndo.setEnabled(true);
			frame.miRedo.setEnabled(false);
			update();
			paint(g);
		}else if (evt.getSource() == frame.miClear)
		{
			for (int x=0; x<MapColumns; x++)
			{
				for (int y=0; y<MapRows; y++)
				{
					shrUndo[x][y] = shrMap[x][y];
				}
			}
			int startX = min(selectStartX,selectStopX);
			int stopX = max(selectStartX,selectStopX);
			int startY = min(selectStartY,selectStopY);
			int stopY = max(selectStartY,selectStopY);
			for (int x=startX; x<=stopX; x++)
			{
				for (int y=startY; y<=stopY; y++)
				{
					shrMap[x][y] = ForeGroundTile;
				}
			}
			for (int x=0; x<MapColumns; x++)
			{
				for (int y=0; y<MapRows; y++)
				{
					shrRedo[x][y] = shrMap[x][y];
				}
			}
			frame.miUndo.setEnabled(true);
			frame.miRedo.setEnabled(false);
			update();
			paint(g);
		}else if (evt.getSource() == frame.miUndo)
		{
			for (int x=0; x<MapColumns; x++)
			{
				for (int y=0; y<MapRows; y++)
				{
					shrMap[x][y] = shrUndo[x][y];
				}
			}
			frame.miUndo.setEnabled(false);
			frame.miRedo.setEnabled(true);
			update();
			paint(g);
		}else if (evt.getSource() == frame.miRedo)
		{
			for (int x=0; x<MapColumns; x++)
			{
				for (int y=0; y<MapRows; y++)
				{
					shrMap[x][y] = shrRedo[x][y];
				}
			}
			frame.miUndo.setEnabled(true);
			frame.miRedo.setEnabled(false);
			update();
			paint(g);
		}else if (evt.getSource() == frame.miHelpHowTo)
		{
			frmHelp.setSize(500,600);
			frmHelp.setTitle("How to use this program");
			frmHelp.txtOutput.setText("Clicking on the map area while the draw tool is active will\n");
			frmHelp.txtOutput.append("\tdraw on the map with the currently selected draw tile.\n");
			frmHelp.txtOutput.append("Right clicking on the map while the draw tool is active\n");
			frmHelp.txtOutput.append("\twill replace all occurrances of the tile that was clicked\n");
			frmHelp.txtOutput.append("\twith the currently selected draw tile\n");
			frmHelp.txtOutput.append("Clicking and dragging on the map area while the Select tool\n");
			frmHelp.txtOutput.append("\tis selected will mark a selection area.\n");
			frmHelp.txtOutput.append("\tDrawing and tile replacement are restricted to the selection\n");
			frmHelp.txtOutput.append("\tarea as long as it is active.\n");
			frmHelp.txtOutput.append("Clicking on the map (without dragging) while the select tool\n");
			frmHelp.txtOutput.append("\tis active will de-activate the selection area.\n");
			frmHelp.txtOutput.append("Clicking on the current draw tile will bring up the palette\n");
			frmHelp.txtOutput.append("\tof tiles available an allow you to choose a new draw tile.\n\n");
			frmHelp.txtOutput.append("File Menu:\n");
			frmHelp.txtOutput.append("\tNew...:  Creates a new map in memory.\n");
			frmHelp.txtOutput.append("\tOpen...:  Opens a map file from disk.\n");
			frmHelp.txtOutput.append("\tLoad Palette...:  Loads a new palette file from disk.\n");
			frmHelp.txtOutput.append("\tResize...:  Resizes the current map in memory.\n");
			frmHelp.txtOutput.append("\t\tMaking map smaller will delete data.\n");
			frmHelp.txtOutput.append("\tSave...:  Saves the current map to disk.\n");
			frmHelp.txtOutput.append("\tSave as...:  Saves the current map to disk with a different name.\n");
			frmHelp.txtOutput.append("\t\tWill warn if new file name already exists.\n");
			frmHelp.txtOutput.append("\tQuit:  Exits the program without saving.\n");
			frmHelp.txtOutput.append("Edit Menu:\n");
			frmHelp.txtOutput.append("\tUndo:  Allows you to undo the last operation.\n");
			frmHelp.txtOutput.append("\tRedo:  Allows you to redo the last operation undone.\n");
			frmHelp.txtOutput.append("\tCopy:  Copies the tiles in the currently active select area.\n");
			frmHelp.txtOutput.append("\tPaste:  Pastes the tiles saved with Copy.\n");
			frmHelp.txtOutput.append("\t\tWill paste the tiles with upper left corner being the upper left\n");
			frmHelp.txtOutput.append("\t\tcorner of the screenthe upper left corner of the currently\n");
			frmHelp.txtOutput.append("\t\tactive selection.\n");
			frmHelp.txtOutput.append("\tClear:  Sets all the tiles in the currently active select area\n");
			frmHelp.txtOutput.append("\t\tto the current draw tile.\n");
			frmHelp.txtOutput.append("Scale Menu:\n");
			frmHelp.txtOutput.append("\tUsed to set the current zoom level.\n");
			frmHelp.txtOutput.append("Help Menu:\n");
			frmHelp.txtOutput.append("\tHow to use this program...:  Brings up this window.\n");
			frmHelp.txtOutput.append("\tAbout...:  Brings up version info.\n");
			frmHelp.show();
		}else if (evt.getSource() == frame.miAbout)
		{
			frmHelp.setSize(250,150);
			frmHelp.setTitle("About DuskMapEditor");
			frmHelp.txtOutput.setText("Dusk Map Editor\nVersion 1.0\n\nCreated 08/20/2003\nBy Wildern");
			frmHelp.show();
		}
	}	

	public void adjustmentValueChanged(AdjustmentEvent evt)
	{
		if (!evt.getValueIsAdjusting())
		{
			update();
			paint(g);
		}
	}

	void thisWindowClosing(WindowEvent e)
	{
		frame.setVisible(false);
	}
	
	boolean isInSelection(int x, int y)
	{
		int x1,
			x2,
			y1,
			y2;
		if (!blnActiveSelection)
		{
			return true;
		}
		x1 = min(selectStartX,selectStopX);
		x2 = max(selectStartX,selectStopX);
		y1 = min(selectStartY,selectStopY);
		y2 = max(selectStartY,selectStopY);
		return ((x1 <= x) && (x <= x2) && (y1 <= y) && (y <= y2));
	}
	
	//Display graphics
	public void update()
	{
		if (!blnLoaded)
		{
			return;
		}
		int x,
			y,
			i,
			i2;

		x=0;
		y=0;
		for (i=0; i<=numMapImages; i++)
		{
			gD_p.drawImage(imgMapPalette,
							x*intImageSizePalette,y*intImageSizePalette,
							(x+1)*intImageSizePalette,(y+1)*intImageSizePalette,
							i*intImageSizePalette,0,
							(i+1)*intImageSizePalette,intImageSizePalette,
							null);
			x++;
			if (x > 24)
			{
				y++;
				x = 0;
			}
		}
		gD_p.setColor(Color.green);
		gD_p.drawRoundRect((int)(pfX*intImageSizePalette),(int)(pfY*intImageSizePalette),
					intImageSizePalette-1,intImageSizePalette-1,intImageSizePalette/3,intImageSizePalette/3);
		gD_f.drawImage(imgOriginalMap,
							0,0,
							intImageOriginalSize,intImageOriginalSize,
							ForeGroundTile*intImageOriginalSize,0,
							(ForeGroundTile+1)*intImageOriginalSize,intImageOriginalSize,
							null);

		int sx = frame.scrollHorz.getValue();
		int sy = frame.scrollVert.getValue();
		int sx1 = sx + frame.scrollHorz.getVisibleAmount();
		int sy1 = sy + frame.scrollVert.getVisibleAmount();

		if ((sx1+sx) >= MapColumns)
		{
			sx1 = MapColumns - sx - 1;
		}
		if ((sy1+sy) >= MapRows)
		{
			sy1 = MapRows - sy - 1;
		}

		for (i=0;i<=sx1;i++)
		{
			for (i2=0;i2<=sy1;i2++)
			{
				//Draw map(background)
				drawTile(imgMap,i,i2,shrMap[i+sx][i2+sy]);
			}
		}
		if (blnActiveSelection)
		{
			Color highlight = new Color(255,255,255,128);
			gD.setColor(highlight);
			int rx,
				ry,
				startX,
				startY,
				stopX,
				stopY,
				width,
				height;
			startX = min(selectStartX,selectStopX);
			stopX = max(selectStartX,selectStopX);
			startY = min(selectStartY,selectStopY);
			stopY = max(selectStartY,selectStopY);
			rx = (startX-sx)*intImageSize;
			width = ((stopX-sx+1)*intImageSize) - rx;
			ry = (startY-sy)*intImageSize;
			height = ((stopY-sy+1)*intImageSize) - ry;
			gD.fillRect(rx,ry,width,height);
		}
	}

	public void drawTile(Image img,int x, int y, int tile)
	{
		if ((x >= 0) && (x < MapColumns) && (y >= 0) && (y < MapRows))
		{
			gD.drawImage(img,
						x*intImageSize,y*intImageSize,
						(x+1)*intImageSize,(y+1)*intImageSize,
						tile*intImageSize,0,
						(tile+1)*intImageSize,intImageSize,
						null);
		}
	}

	public void paint(Graphics pg)
	{
		if (blnLoaded)
		{
			pg.drawImage(imgDisplay,0,0,this.frame.pnlGraphics);
			g_p.drawImage(imgPalette,0,0,this.frame.pnlGraphics);
			g_f.drawImage(imgForeground,0,0,this.frame.pnlGraphics);
		}
	}

	public int min(int v1, int v2)
	{
		if (v1 <= v2)
		{
			return v1;
		}
		return v2;
	}

	public int max(int v1, int v2)
	{
		if (v1 > v2)
		{
			return v1;
		}
		return v2;
	}
}