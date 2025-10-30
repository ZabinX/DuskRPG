import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class PalletteFrame extends JFrame implements MouseListener, MouseMotionListener, ItemListener {
    DuskMapEditor appParent;
    JPanel pnlGraphics;
    JMenuBar menuBar = new JMenuBar();
    JMenu mScale = new JMenu("Scale");
    JCheckBoxMenuItem cbmi100 = new JCheckBoxMenuItem("100%");
    JCheckBoxMenuItem cbmi75 = new JCheckBoxMenuItem("75%");
    JCheckBoxMenuItem cbmi50 = new JCheckBoxMenuItem("50%");
    JCheckBoxMenuItem cbmi25 = new JCheckBoxMenuItem("25%");
    int lastX = 0,
            lastY = 0,
            lastMouseX = 0,
            lastMouseY = 0;

    public PalletteFrame(DuskMapEditor inParent) {
        appParent = inParent;
    }

    public void initComponents() throws Exception {
        pnlGraphics = new JPanel() {
            @Override
            protected void paintComponent(Graphics g) {
                super.paintComponent(g);
                if (appParent != null && appParent.getPaletteImage() != null) {
                    g.drawImage(appParent.getPaletteImage(), 0, 0, this);
                }
            }
        };

        mScale.add(cbmi100);
        mScale.add(cbmi75);
        mScale.add(cbmi50);
        mScale.add(cbmi25);
        menuBar.add(mScale);
        cbmi75.setSelected(true);

        setJMenuBar(menuBar);

        int intX = 25 * appParent.intImageSizePalette;
        int intY = ((appParent.numMapImages / 25) + 1) * appParent.intImageSizePalette;
        pnlGraphics.setPreferredSize(new Dimension(intX, intY));
        pnlGraphics.setCursor(new Cursor(Cursor.WAIT_CURSOR));

        setLocation(new java.awt.Point(0, 0));
        setTitle("Palette");
        setLayout(new BorderLayout());

        JScrollPane scrollPane = new JScrollPane(pnlGraphics);
        add(scrollPane, BorderLayout.CENTER);


        cbmi100.addItemListener(this);
        cbmi75.addItemListener(this);
        cbmi50.addItemListener(this);
        cbmi25.addItemListener(this);

        setDefaultCloseOperation(JFrame.HIDE_ON_CLOSE);
        pack();
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
			appParent.frame.pnlGraphics.repaint();
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
			appParent.frame.pnlGraphics.repaint();
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
			appParent.frame.pnlGraphics.repaint();
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

			if (destX != appParent.pfX || destY != appParent.pfY) {
				appParent.pfX = destX;
				appParent.pfY = destY;
				appParent.update();
				pnlGraphics.repaint();
			}
		}
	}
	
	public void mouseDragged(MouseEvent evt) {}


	public void itemStateChanged (ItemEvent evt)
	{
		if (evt.getSource() == cbmi100)
		{
			appParent.intImageSizePalette = appParent.intImageOriginalSize;
			cbmi100.setSelected(true);
			cbmi75.setSelected(false);
			cbmi50.setSelected(false);
			cbmi25.setSelected(false);
		} else if (evt.getSource() == cbmi75)
		{
			appParent.intImageSizePalette = (appParent.intImageOriginalSize * 3)/4;
			cbmi100.setSelected(false);
			cbmi75.setSelected(true);
			cbmi50.setSelected(false);
			cbmi25.setSelected(false);
		} else if (evt.getSource() == cbmi50)
		{
			appParent.intImageSizePalette = appParent.intImageOriginalSize/2;
			cbmi100.setSelected(false);
			cbmi75.setSelected(false);
			cbmi50.setSelected(true);
			cbmi25.setSelected(false);
		} else if (evt.getSource() == cbmi25)
		{
			appParent.intImageSizePalette = appParent.intImageOriginalSize/4;
			cbmi100.setSelected(false);
			cbmi75.setSelected(false);
			cbmi50.setSelected(false);
			cbmi25.setSelected(true);
		}
		int intX = 25 * appParent.intImageSizePalette;
		int intY = ((appParent.numMapImages / 25) + 1) * appParent.intImageSizePalette;
		setSize(new java.awt.Dimension(intX+(getInsets().left+getInsets().right), intY+(getInsets().top+getInsets().bottom)));
		pnlGraphics.setSize(new java.awt.Dimension(intX, intY));
		if (appParent.imgPalette != null)
			appParent.imgPalette.flush();
		appParent.imgPalette = appParent.frmPalette.pnlGraphics.createImage(intX, intY);
		appParent.gD_p = appParent.imgPalette.getGraphics();
		//appParent.g_p = appParent.frmPalette.pnlGraphics.getGraphics();
		appParent.update();
		appParent.frame.pnlGraphics.repaint();
	}

	public void drawTile(int x, int y, int tile)
	{
		appParent.gD_p.drawImage(appParent.getCurrentPaletteImage(),
						x*appParent.intImageSizePalette,
						y*appParent.intImageSizePalette,
						(x+1)*appParent.intImageSizePalette,
						(y+1)*appParent.intImageSizePalette,
						tile*appParent.intImageOriginalSize,
						0,
						(tile+1)*appParent.intImageOriginalSize,
						appParent.intImageOriginalSize,
						null);
	}
}