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
import javax.swing.ImageIcon;

public class DuskMapEditor implements MouseListener,ComponentListener,ActionListener,KeyListener/*,ImageObserver*/,MouseMotionListener,AdjustmentListener, java.awt.event.MouseWheelListener
{
	static String strVersion="1.0";

	// Layer management
	enum Layer { BASE, ALPHA, ALPHA2 }
	Layer currentLayer = Layer.BASE;
	boolean blnAlphaVisible = true;
	boolean blnAlpha2Visible = true;
	
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
    
	Image imgOriginalMap, imgOriginalMapAlpha, imgOriginalMapAlpha2;
	Image imgMap = null, imgMapAlpha = null, imgMapAlpha2 = null;
	Image imgCursorMap = null, imgCursorMapAlpha = null, imgCursorMapAlpha2 = null;
	//VolatileImage imgDisplay;
	// Image imgDisplay;
	Image imgPalette;
	Image imgForeground;
	
	short shrMap[][], shrMapAlpha[][], shrMapAlpha2[][];
	short shrUndo[][], shrUndoAlpha[][], shrUndoAlpha2[][];
	short shrRedo[][], shrRedoAlpha[][], shrRedoAlpha2[][];
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
	
	//Color background;
	//Graphics g;
	// Graphics gD;
	//Graphics g_p;
	Graphics gD_p;
	//Graphics g_f;
	Graphics gD_f;
	//GraphicsThread thrGraphics;

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
		shrMapAlpha = new short[MapColumns][MapRows];
		shrMapAlpha2 = new short[MapColumns][MapRows];
		shrUndo = new short[MapColumns][MapRows];
		shrUndoAlpha = new short[MapColumns][MapRows];
		shrUndoAlpha2 = new short[MapColumns][MapRows];
		shrRedo = new short[MapColumns][MapRows];
		shrRedoAlpha = new short[MapColumns][MapRows];
		shrRedoAlpha2 = new short[MapColumns][MapRows];
		try
		{
			//background = new Color(140,140,140);

			frame = new MainFrame(this);
			frame.initComponents();
			frame.pnlGraphics.setPreferredSize(new Dimension(MapColumns * intImageSize, MapRows * intImageSize));
			frame.setVisible(true);
			frame.pnlGraphics.addComponentListener(this);
			frame.addComponentListener(this);
			frame.pnlGraphics.addMouseListener(this);
			frame.pnlGraphics.addMouseMotionListener(this);
			frame.pnlGraphics.addKeyListener(this);
			frame.pnlForeground.addMouseListener(this);
			frame.scrollPane.addMouseWheelListener(this);
			frame.scrollPane.getVerticalScrollBar().addAdjustmentListener(this);
			frame.scrollPane.getHorizontalScrollBar().addAdjustmentListener(this);
			frame.scrollPane.getVerticalScrollBar().setUnitIncrement(intImageSize);
			frame.scrollPane.getHorizontalScrollBar().setUnitIncrement(intImageSize);

			frame.btnToolDraw.setIcon(new ImageIcon(getClass().getResource("drawUp.png")));
			frame.btnToolDraw.setSelectedIcon(new ImageIcon(getClass().getResource("drawDown.png")));
			frame.btnToolDraw.setSelected(true);

			frame.btnToolSelect.setIcon(new ImageIcon(getClass().getResource("selectUp.png")));
			frame.btnToolSelect.setSelectedIcon(new ImageIcon(getClass().getResource("selectDown.png")));
			frame.btnToolSelect.setSelected(false);

			frame.btnToolZoom.setIcon(new ImageIcon(getClass().getResource("zoomUp.png")));
			frame.btnToolZoom.setSelectedIcon(new ImageIcon(getClass().getResource("zoomDown.png")));
			frame.btnToolZoom.setSelected(false);

			scaleWindow();


//			imgOriginalMap = Toolkit.getDefaultToolkit().getImage("map.gif");
			File fAlpha = new File("mapalpha.png");
			if(!fAlpha.exists()){
				try {
					File fOrig = new File("map.png");
					java.nio.file.Files.copy(fOrig.toPath(), fAlpha.toPath());
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			File fAlpha2 = new File("mapalpha2.png");
			if(!fAlpha2.exists()){
				try {
					File fOrig = new File("map.png");
					java.nio.file.Files.copy(fOrig.toPath(), fAlpha2.toPath());
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			imgOriginalMap = Toolkit.getDefaultToolkit().getImage("map.png");
			imgOriginalMapAlpha = Toolkit.getDefaultToolkit().getImage("mapalpha.png");
			imgOriginalMapAlpha2 = Toolkit.getDefaultToolkit().getImage("mapalpha2.png");
			try
			{
				MediaTracker mdtTracker = new MediaTracker(frame);
				mdtTracker.addImage(imgOriginalMap,0);
				mdtTracker.addImage(imgOriginalMapAlpha,1);
				mdtTracker.addImage(imgOriginalMapAlpha2,2);
				mdtTracker.waitForAll();
			}catch(Exception e)
			{
				System.err.println("Error while waiting for images: "+e.toString());
			}
			numMapImages = (imgOriginalMap.getWidth(null)/imgOriginalMap.getHeight(null))-1;
			intImageOriginalSize = imgOriginalMap.getHeight(null);
			intImageSizePalette = (intImageOriginalSize * 3)/4;
//			imgDisplay = frame.pnlGraphics.createVolatileImage((MapColumns*intImageOriginalSize),(MapRows*intImageOriginalSize));
			// imgDisplay = frame.pnlGraphics.createImage((MapColumns*intImageOriginalSize),(MapRows*intImageOriginalSize));
			// gD = imgDisplay.getGraphics();
			//g = frame.pnlGraphics.getGraphics();

			imgForeground = frame.pnlForeground.createImage(intImageOriginalSize,intImageOriginalSize);
			frame.pnlForeground.setSize(new java.awt.Dimension(intImageOriginalSize,intImageOriginalSize));
			gD_f = imgForeground.getGraphics();
			//g_f = frame.pnlForeground.getGraphics();

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
			//g_p = frmPalette.pnlGraphics.getGraphics();
			frmPalette.hide();

			frmSize = new SizeFrame(this);
			frmReSize = new SizeFrame(this,true);

			frmHelp = new HelpFrame();
			frmHelp.initComponents();
			frmHelp.hide();

			blnLoaded = true;
			scaleImages();
			update();
			frame.pnlGraphics.repaint();
			frmPalette.pnlGraphics.setCursor(new Cursor(Cursor.DEFAULT_CURSOR));
			frame.pnlGraphics.setCursor(new Cursor(Cursor.DEFAULT_CURSOR));

			//thrGraphics = new GraphicsThread(this);
			//thrGraphics.run();

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
			if (imgMap != null) imgMap.flush();
			if (imgMapAlpha != null) imgMapAlpha.flush();
			if (imgMapAlpha2 != null) imgMapAlpha2.flush();

			intImageSize = intImageOriginalSize;
//			imgMap = imgOriginalMap.getScaledInstance(intImageSize*(numMapImages+1),intImageSize,Image.SCALE_DEFAULT);
			if (imgMap == null)
			{
				imgMap = imgOriginalMap;
				imgMapAlpha = imgOriginalMapAlpha;
				imgMapAlpha2 = imgOriginalMapAlpha2;
				imgCursorMap = ImageTools.makeImageTransparent(imgOriginalMap);
				imgCursorMapAlpha = ImageTools.makeImageTransparent(imgOriginalMapAlpha);
				imgCursorMapAlpha2 = ImageTools.makeImageTransparent(imgOriginalMapAlpha2);
			}
		}catch (Exception e){}
	}
	
	public void scaleWindow()
	{
		frame.pnlGraphics.setPreferredSize(new Dimension(MapColumns * intImageSize, MapRows * intImageSize));
		frame.pnlGraphics.revalidate();
		System.gc();
	}

	public void setDrawingLayer(Layer layer) {
        currentLayer = layer;
		update();
		frame.pnlGraphics.repaint();
    }

	public void setAlphaVisible(boolean isVisible) {
		blnAlphaVisible = isVisible;
		update();
		frame.pnlGraphics.repaint();
	}

	public void setAlpha2Visible(boolean isVisible) {
		blnAlpha2Visible = isVisible;
		update();
		frame.pnlGraphics.repaint();
	}
	
	//Accept mouse input
	public void mousePressed(MouseEvent evt)
	{
		intButton = evt.getButton();

		if (frame.btnToolDraw.isSelected())
		{
			backupUndo();
			frame.miUndo.setEnabled(true);
			frame.miRedo.setEnabled(false);
		}
	}

	public void mouseReleased(MouseEvent evt)
	{
		if (frame.btnToolDraw.isSelected())
		{
			backupRedo();
		}
		blnFirstDrag=true;
	}

	public void mouseClicked(MouseEvent evt)
	{
        evt.consume();
		if (evt.getComponent() == frame.pnlGraphics)
		{
			if (frame.btnToolDraw.isSelected())
			{
				int x = evt.getX();
				int y = evt.getY();
				if(!blnLoaded) return;

				// backupUndo() is now in mousePressed
				frame.miUndo.setEnabled(true);

				//Find coordinates of click on map
				int mapX = x / intImageSize;
				int mapY = y / intImageSize;
				frame.lblLocation.setText("Loc: "+mapX+","+mapY);

				if (mapX < 0 || mapX >= MapColumns || mapY < 0 || mapY >= MapRows) return;

				if (evt.getButton() == MouseEvent.BUTTON1)
				{
					if (blnActiveSelection)
					{
						int startX = min(selectStartX,selectStopX);
						int stopX = max(selectStartX,selectStopX);
						int startY = min(selectStartY,selectStopY);
						int stopY = max(selectStartY,selectStopY);

						if ((mapX >= startX) && (mapX <= stopX) &&
							(mapY >= startY) && (mapY <= stopY))
						{
							setTile(mapX, mapY, ForeGroundTile);
							frame.pnlGraphics.repaint();
						}
					} else {
						setTile(mapX, mapY, ForeGroundTile);
						frame.pnlGraphics.repaint();
					}
				} else if (evt.getButton() == MouseEvent.BUTTON3)
				{
					short replaceMe = getTile(mapX, mapY);
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
								if (getTile(i,i2) == replaceMe)
								{
									setTile(i, i2, ForeGroundTile);
								}
							}
						}
					} else {
						for (int i=0;i<MapColumns;i++)
						{
							for (int i2=0;i2<MapRows;i2++)
							{
								if (getTile(i,i2) == replaceMe)
								{
									setTile(i, i2, ForeGroundTile);
								}
							}
						}
					}
					update();
					frame.pnlGraphics.repaint();
				}
				backupRedo();
			} else if(frame.btnToolSelect.isSelected())
			{
				if (evt.getButton() == MouseEvent.BUTTON1)
				{
					blnActiveSelection = false;
					frame.miCopy.setEnabled(false);
					frame.miClear.setEnabled(false);
					update();
					frame.pnlGraphics.repaint();
				}
				return;
			} else if (frame.btnToolZoom.isSelected())
			{
				if (evt.getButton() == MouseEvent.BUTTON1)
				{
					if (blnActiveSelection)
					{
						int Ymod = frame.pnlButtons.getBounds().height+frame.scrollPane.getHorizontalScrollBar().getBounds().height+(frame.getInsets().top+frame.getInsets().bottom);
						int Xmod = frame.scrollPane.getVerticalScrollBar().getBounds().width+(frame.getInsets().left+frame.getInsets().right);

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

						frame.scrollPane.getHorizontalScrollBar().setValue(startX);
						frame.scrollPane.getVerticalScrollBar().setValue(startY);
						frame.cbmi100.setSelected(false);
						frame.cbmi75.setSelected(false);
						frame.cbmi50.setSelected(false);
						frame.cbmi25.setSelected(false);
						//frame.cbmi5p.setState(false);
						//frame.cbmi4p.setState(false);
						//frame.cbmi3p.setState(false);
						//frame.cbmi2p.setState(false);
						//frame.cbmi1p.setState(false);

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
							frame.scrollPane.getHorizontalScrollBar().setValue(0);
							intX = MapColumns;
							blnResize = true;
						}
						if (intY > MapRows)
						{
							frame.scrollPane.getVerticalScrollBar().setValue(0);
							intY = MapRows;
							blnResize = true;
						}
						frame.scrollPane.getVerticalScrollBar().setVisibleAmount(intY);
						frame.scrollPane.getHorizontalScrollBar().setVisibleAmount(intX);
						if (blnResize)
						{
//							Ymod = frame.pnlButtons.getBounds().height+frame.scrollPane.getHorizontalScrollBar().getBounds().height+(frame.getInsets().top+frame.getInsets().bottom);
//							Xmod = frame.scrollPane.getVerticalScrollBar().getBounds().width+(frame.getInsets().left+frame.getInsets().right);
							frame.setSize(((intImageSize*intX)+Xmod),((intImageSize*intY)+Ymod));
						}

						intX = intX * intImageSize;
						intY = intY * intImageSize;

						update();
						frame.pnlGraphics.repaint();

					} else
					{
					}
				}
			}
  		} else if (evt.getComponent() == frame.pnlForeground)
		{
			updatePalette();
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
			if (frame.btnToolDraw.isSelected())
			{
				int mapX = LastMouseX / intImageSize;
				int mapY = LastMouseY / intImageSize;

				if (mapX >= 0 && mapX < MapColumns && mapY >= 0 && mapY < MapRows) {
					frame.pnlGraphics.repaint(mapX * intImageSize, mapY * intImageSize, intImageSize, intImageSize);
				}
			}
		}
	}

    public void mouseMoved(MouseEvent evt)
	{
        evt.consume();
		if (!blnLoaded) { return; }

		if (evt.getComponent() == frame.pnlGraphics)
		{
			int x = evt.getX();
			int y = evt.getY();

			int mapX = x / intImageSize;
			int mapY = y / intImageSize;
			frame.lblLocation.setText("Loc: "+mapX+","+mapY);

			if (!frame.btnToolDraw.isSelected()) { return; }

			if (mapX != LastMouseX || mapY != LastMouseY) {
				// Erase old cursor preview
				int oldX = LastMouseX;
				int oldY = LastMouseY;
				if (oldX >= 0 && oldX < MapColumns && oldY >= 0 && oldY < MapRows) {
					frame.pnlGraphics.repaint(oldX * intImageSize, oldY * intImageSize, intImageSize, intImageSize);
				}

				// Store new coordinates
				LastMouseX = mapX;
				LastMouseY = mapY;

				// Draw new cursor preview
				if (mapX >= 0 && mapX < MapColumns && mapY >= 0 && mapY < MapRows) {
					frame.pnlGraphics.repaint(mapX * intImageSize, mapY * intImageSize, intImageSize, intImageSize);
				}
			}
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
			int mapX = x / intImageSize;
			int mapY = y / intImageSize;
			frame.lblLocation.setText("Loc: "+mapX+","+mapY);

			if (mapX < 0 || mapX >= MapColumns || mapY < 0 || mapY >= MapRows) return;

			if (frame.btnToolDraw.isSelected())
			{
				if (intButton == MouseEvent.BUTTON1)
				{
					if (isInSelection(mapX,mapY))
					{
						setTile(mapX, mapY, ForeGroundTile);
					}
				}
				frame.pnlGraphics.repaint();
			} else if (frame.btnToolSelect.isSelected())
			{
				if (intButton != MouseEvent.BUTTON1)
				{
					return;
				}
				int oldStartX = min(selectStartX,selectStopX);
				int oldStopX = max(selectStartX,selectStopX);
				if (blnFirstDrag)
				{
					frame.pnlGraphics.repaint();
					selectStartX = mapX;
					selectStartY = mapY;
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
				selectStopX = mapX;
				selectStopY = mapY;

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

				frame.pnlGraphics.repaint();
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
		frame.pnlGraphics.repaint();
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
                rafFile.writeInt(0xD5D002); // Magic number for V3 format
				rafFile.writeInt(MapColumns);
				rafFile.writeInt(MapRows);
				for (int i=0;i<MapColumns;i++)
				{
					for (int i2=0;i2<MapRows;i2++)
					{
						rafFile.writeShort(shrMap[i][i2]);
					}
				}
                for (int i=0;i<MapColumns;i++)
                {
                    for (int i2=0;i2<MapRows;i2++)
                    {
                        rafFile.writeShort(shrMapAlpha[i][i2]);
                    }
                }
				for (int i=0;i<MapColumns;i++)
				{
					for (int i2=0;i2<MapRows;i2++)
					{
						rafFile.writeShort(shrMapAlpha2[i][i2]);
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
                rafFile.writeInt(0xD5D002); // Magic number for V3 format
				rafFile.writeInt(MapColumns);
				rafFile.writeInt(MapRows);
				for (int i=0;i<MapColumns;i++)
				{
					for (int i2=0;i2<MapRows;i2++)
					{
						rafFile.writeShort(shrMap[i][i2]);
					}
				}
                for (int i=0;i<MapColumns;i++)
                {
                    for (int i2=0;i2<MapRows;i2++)
                    {
                        rafFile.writeShort(shrMapAlpha[i][i2]);
                    }
                }
				for (int i=0;i<MapColumns;i++)
				{
					for (int i2=0;i2<MapRows;i2++)
					{
						rafFile.writeShort(shrMapAlpha2[i][i2]);
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
                    int magicNumber = rafFile.readInt();
					if (magicNumber == 0xD5D002) { // V3 format
						MapColumns = rafFile.readInt();
						MapRows = rafFile.readInt();
					} else if (magicNumber == 0xD5D001) { // V2 format
                        MapColumns = rafFile.readInt();
                        MapRows = rafFile.readInt();
                    } else { // V1 format, the first int was MapColumns
                        MapColumns = magicNumber;
                        MapRows = rafFile.readInt();
                    }
                    
					shrMap = new short[MapColumns][MapRows];
                    shrMapAlpha = new short[MapColumns][MapRows];
					shrMapAlpha2 = new short[MapColumns][MapRows];
					shrUndo = new short[MapColumns][MapRows];
                    shrUndoAlpha = new short[MapColumns][MapRows];
					shrUndoAlpha2 = new short[MapColumns][MapRows];
					shrRedo = new short[MapColumns][MapRows];
                    shrRedoAlpha = new short[MapColumns][MapRows];
					shrRedoAlpha2 = new short[MapColumns][MapRows];

					strCurrentFile = strName;
					strCurrentDirectory = strDir;
					frame.setTitle("Dusk Map Editor: "+strCurrentFile+" "+MapColumns+"x"+MapRows);
					frame.pnlGraphics.setPreferredSize(new Dimension(MapColumns * intImageSize, MapRows * intImageSize));
					frame.scrollPane.getVerticalScrollBar().setMaximum(MapRows);
					frame.scrollPane.getHorizontalScrollBar().setMaximum(MapColumns);
					for (int i=0;i<MapColumns;i++)
					{
						for (int i2=0;i2<MapRows;i2++)
						{
							shrMap[i][i2] = rafFile.readShort();
						}
					}

					// Read alpha layer 1
                    if (magicNumber == 0xD5D001 || magicNumber == 0xD5D002) {
                        for (int i=0;i<MapColumns;i++)
                        {
                            for (int i2=0;i2<MapRows;i2++)
                            {
                                shrMapAlpha[i][i2] = rafFile.readShort();
                            }
                        }
                    } else { // Old format, initialize alpha layer to empty
                        for (int i=0;i<MapColumns;i++) { for (int i2=0;i2<MapRows;i2++) { shrMapAlpha[i][i2] = 0; } }
                    }

					// Read alpha layer 2
					if (magicNumber == 0xD5D002) {
						for (int i=0;i<MapColumns;i++)
						{
							for (int i2=0;i2<MapRows;i2++)
							{
								shrMapAlpha2[i][i2] = rafFile.readShort();
							}
						}
					} else { // Old format, initialize alpha layer to empty
						for (int i=0;i<MapColumns;i++) { for (int i2=0;i2<MapRows;i2++) { shrMapAlpha2[i][i2] = 0; } }
					}

					rafFile.close();
					update();
					frame.pnlGraphics.repaint();
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
						frame.scrollPane.getHorizontalScrollBar().setValue(0);
						intX = MapColumns;
						blnResize = true;
					}
					if (intY > MapRows)
					{
						frame.scrollPane.getVerticalScrollBar().setValue(0);
						intY = MapRows;
						blnResize = true;
					}
					frame.scrollPane.getVerticalScrollBar().setVisibleAmount(intY);
					frame.scrollPane.getHorizontalScrollBar().setVisibleAmount(intX);
					if (blnResize)
					{
						int Ymod = frame.pnlButtons.getBounds().height+frame.scrollPane.getHorizontalScrollBar().getBounds().height+(frame.getInsets().top+frame.getInsets().bottom);
						int Xmod = frame.scrollPane.getVerticalScrollBar().getBounds().width+(frame.getInsets().left+frame.getInsets().right);
						frame.setSize(((intImageSize*intX)+Xmod),((intImageSize*intY)+Ymod));
					}
					intX = intX * intImageSize;
					intY = intY * intImageSize;

					imgForeground = frame.pnlForeground.createImage(intImageOriginalSize,intImageOriginalSize);
					frame.pnlForeground.setSize(new java.awt.Dimension(intImageOriginalSize,intImageOriginalSize));
					gD_f = imgForeground.getGraphics();

					frmPalette.show();

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
					intX = 25 * intImageSizePalette;
					intY = ((numMapImages / 25) + 1) * intImageSizePalette;
					frmPalette.setSize(new java.awt.Dimension(intX+(frmPalette.getInsets().left+frmPalette.getInsets().right), intY+(frmPalette.getInsets().top+frmPalette.getInsets().bottom)));
					if (imgPalette != null)
						imgPalette.flush();
					imgPalette = frmPalette.pnlGraphics.createImage(intX, intY);
					gD_p = imgPalette.getGraphics();
					//g_p = frmPalette.pnlGraphics.getGraphics();
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
					frame.pnlGraphics.repaint();
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
			int x1, x2, y1, y2;
			x1=min(selectStartX,selectStopX);
			x2=max(selectStartX,selectStopX);
			y1=min(selectStartY,selectStopY);
			y2=max(selectStartY,selectStopY);
			copyWidth = x2-x1;
			copyHeight = y2-y1;
			shrCopy = new short[copyWidth+1][copyHeight+1];
			for (int x=0; x<=copyWidth; x++)
			{
				for (int y=0; y<=copyHeight; y++)
				{
					shrCopy[x][y] = getTile(x+x1, y+y1);
				}
			}
			frame.miPaste.setEnabled(true);
		}else if (evt.getSource() == frame.miPaste)
		{
			backupUndo();
			int sx = frame.scrollPane.getHorizontalScrollBar().getValue();
			int sy = frame.scrollPane.getVerticalScrollBar().getValue();

			int startX = sx;
			int startY = sy;
			if (blnActiveSelection)
			{
				startX = min(selectStartX,selectStopX);
				startY = min(selectStartY,selectStopY);
			}

			for (int x=0; x<=copyWidth; x++)
			{
				for (int y=0; y<=copyHeight; y++)
				{
					if((startX+x < MapColumns) && (startY+y < MapRows))
						setTile(startX+x, startY+y, shrCopy[x][y]);
				}
			}
			backupRedo();

			blnActiveSelection = false;
			frame.miUndo.setEnabled(true);
			frame.miRedo.setEnabled(false);
			update();
			frame.pnlGraphics.repaint();
		}else if (evt.getSource() == frame.miClear)
		{
			backupUndo();
			int startX = min(selectStartX,selectStopX);
			int stopX = max(selectStartX,selectStopX);
			int startY = min(selectStartY,selectStopY);
			int stopY = max(selectStartY,selectStopY);
			for (int x=startX; x<=stopX; x++)
			{
				for (int y=startY; y<=stopY; y++)
				{
					setTile(x,y,ForeGroundTile);
				}
			}
			backupRedo();
			frame.miUndo.setEnabled(true);
			frame.miRedo.setEnabled(false);
			update();
			frame.pnlGraphics.repaint();
		}else if (evt.getSource() == frame.miUndo)
		{
			restoreUndo();
			frame.miUndo.setEnabled(false);
			frame.miRedo.setEnabled(true);
			update();
			frame.pnlGraphics.repaint();
		}else if (evt.getSource() == frame.miRedo)
		{
			restoreRedo();
			frame.miUndo.setEnabled(true);
			frame.miRedo.setEnabled(false);
			update();
			frame.pnlGraphics.repaint();
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
			frame.pnlGraphics.repaint();
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
	public void updatePalette() {
		Image currentPaletteImage = getCurrentPaletteImage();
		numMapImages = (currentPaletteImage.getWidth(null) / currentPaletteImage.getHeight(null)) - 1;
		frmPalette.setTitle("Palette: " + numMapImages + " images");

		int intX = 25 * intImageSizePalette;
		int intY = ((numMapImages / 25) + 1) * intImageSizePalette;

		// Set the preferred size for the panel so the scroll pane knows the content size
		frmPalette.pnlGraphics.setPreferredSize(new java.awt.Dimension(intX, intY));

		// Revalidate the panel to trigger the scroll pane to update its layout
		frmPalette.pnlGraphics.revalidate();

		// Create the off-screen image for drawing
		if (imgPalette != null) {
			imgPalette.flush();
		}
		imgPalette = frmPalette.pnlGraphics.createImage(intX, intY);
		if (imgPalette != null) {
			gD_p = imgPalette.getGraphics();
		}

		// Now call the original update to redraw the content
		update();
		frmPalette.pnlGraphics.repaint();
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
		Image currentPalette = getCurrentPaletteImage();
		gD_p.clearRect(0, 0, imgPalette.getWidth(null), imgPalette.getHeight(null));
		for (i=0; i<=numMapImages; i++)
		{
			gD_p.drawImage(currentPalette,
							x*intImageSizePalette,y*intImageSizePalette,
							(x+1)*intImageSizePalette,(y+1)*intImageSizePalette,
							i*intImageOriginalSize,0,
							(i+1)*intImageOriginalSize,intImageOriginalSize,
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
		gD_f.clearRect(0, 0, intImageOriginalSize, intImageOriginalSize);
		gD_f.drawImage(getCurrentImage(),
							0,0,
							intImageOriginalSize,intImageOriginalSize,
							ForeGroundTile*intImageOriginalSize,0,
							(ForeGroundTile+1)*intImageOriginalSize,intImageOriginalSize,
							null);
		frame.pnlForeground.repaint();
	}

	public void paint(Graphics g) {
		if (blnLoaded && g != null) {
			int sx = frame.scrollPane.getHorizontalScrollBar().getValue();
			int sy = frame.scrollPane.getVerticalScrollBar().getValue();
	
			// Get the visible area of the panel
			Rectangle clip = g.getClipBounds();
	
			// Calculate the range of tiles to draw
			int startX = clip.x / intImageSize;
			int startY = clip.y / intImageSize;
			int endX = (clip.x + clip.width) / intImageSize;
			int endY = (clip.y + clip.height) / intImageSize;
	
			// Constrain to map boundaries
			endX = Math.min(endX, MapColumns - 1);
			endY = Math.min(endY, MapRows - 1);
	
			// Draw the visible tiles
			for (int i = startX; i <= endX; i++) {
				for (int i2 = startY; i2 <= endY; i2++) {
					drawTile(imgMap, g, i, i2, shrMap[i][i2]);
					if (blnAlpha2Visible)
						drawTile(imgMapAlpha2, g, i, i2, shrMapAlpha2[i][i2]);
					if (blnAlphaVisible)
						drawTile(imgMapAlpha, g, i, i2, shrMapAlpha[i][i2]);
				}
			}
	
			if (blnActiveSelection) {
				Color highlight = new Color(255, 255, 255, 128);
				g.setColor(highlight);
				int startDrawX = min(selectStartX, selectStopX);
				int stopDrawX = max(selectStartX, selectStopX);
				int startDrawY = min(selectStartY, selectStopY);
				int stopDrawY = max(selectStartY, selectStopY);
				g.fillRect(startDrawX * intImageSize, startDrawY * intImageSize,
						(stopDrawX - startDrawX + 1) * intImageSize,
						(stopDrawY - startDrawY + 1) * intImageSize);
			}
			
			// Draw cursor preview
			if (frame.btnToolDraw.isSelected()) {
				int mapX = LastMouseX;
				int mapY = LastMouseY;

				if (mapX >= 0 && mapX < MapColumns && mapY >= 0 && mapY < MapRows) {
					drawTile(getCurrentCursorImage(), g, mapX, mapY, ForeGroundTile);
				}
			}
		}
	}
	
	public void drawTile(Image img, Graphics g, int x, int y, int tile) {
		g.drawImage(img,
				x * intImageSize, y * intImageSize,
				(x + 1) * intImageSize, (y + 1) * intImageSize,
				tile * intImageOriginalSize, 0,
				(tile + 1) * intImageOriginalSize, intImageOriginalSize,
				null);
	}

	public Image getDisplayImage() {
		return null;
	}

	public Image getPaletteImage() {
		return imgPalette;
	}

	public Image getForegroundImage() {
		return imgForeground;
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

	public short[][] getCurrentMap() {
		switch (currentLayer) {
			case ALPHA: return shrMapAlpha;
			case ALPHA2: return shrMapAlpha2;
			default: return shrMap;
		}
	}

	public short getTile(int x, int y) {
		return getCurrentMap()[x][y];
	}

	public void setTile(int x, int y, short tile) {
		getCurrentMap()[x][y] = tile;
	}

	public void backupUndo() {
		short[][] currentMap = getCurrentMap();
		short[][] currentUndo;
		switch (currentLayer) {
			case ALPHA: currentUndo = shrUndoAlpha; break;
			case ALPHA2: currentUndo = shrUndoAlpha2; break;
			default: currentUndo = shrUndo; break;
		}
		for (int x = 0; x < MapColumns; x++) {
			for (int y = 0; y < MapRows; y++) {
				currentUndo[x][y] = currentMap[x][y];
			}
		}
	}

	public void backupRedo() {
		short[][] currentMap = getCurrentMap();
		short[][] currentRedo;
		switch (currentLayer) {
			case ALPHA: currentRedo = shrRedoAlpha; break;
			case ALPHA2: currentRedo = shrRedoAlpha2; break;
			default: currentRedo = shrRedo; break;
		}
		for (int x = 0; x < MapColumns; x++) {
			for (int y = 0; y < MapRows; y++) {
				currentRedo[x][y] = currentMap[x][y];
			}
		}
	}
    
    public void restoreUndo() {
        short[][] currentMap = getCurrentMap();
		short[][] currentUndo;
		switch (currentLayer) {
			case ALPHA: currentUndo = shrUndoAlpha; break;
			case ALPHA2: currentUndo = shrUndoAlpha2; break;
			default: currentUndo = shrUndo; break;
		}
        for (int x = 0; x < MapColumns; x++) {
            for (int y = 0; y < MapRows; y++) {
                currentMap[x][y] = currentUndo[x][y];
            }
        }
    }

    public void restoreRedo() {
        short[][] currentMap = getCurrentMap();
		short[][] currentRedo;
		switch (currentLayer) {
			case ALPHA: currentRedo = shrRedoAlpha; break;
			case ALPHA2: currentRedo = shrRedoAlpha2; break;
			default: currentRedo = shrRedo; break;
		}
        for (int x = 0; x < MapColumns; x++) {
            for (int y = 0; y < MapRows; y++) {
                currentMap[x][y] = currentRedo[x][y];
            }
        }
    }

	public Image getCurrentImage() {
		switch (currentLayer) {
			case ALPHA: return imgMapAlpha;
			case ALPHA2: return imgMapAlpha2;
			default: return imgMap;
		}
	}

	public Image getCurrentCursorImage() {
		switch (currentLayer) {
			case ALPHA: return imgCursorMapAlpha;
			case ALPHA2: return imgCursorMapAlpha2;
			default: return imgCursorMap;
		}
	}

	public Image getCurrentPaletteImage() {
		switch (currentLayer) {
			case ALPHA: return imgOriginalMapAlpha;
			case ALPHA2: return imgOriginalMapAlpha2;
			default: return imgOriginalMap;
		}
	}

	public void mouseWheelMoved(MouseWheelEvent e) {
        if (e.isShiftDown()) {
            int notches = e.getWheelRotation();
            int currentValue = frame.scrollPane.getHorizontalScrollBar().getValue();
            int increment = frame.scrollPane.getHorizontalScrollBar().getUnitIncrement();
            frame.scrollPane.getHorizontalScrollBar().setValue(currentValue + (notches * increment));
        }
        // Let the scroll pane handle vertical scrolling by default
    }
}