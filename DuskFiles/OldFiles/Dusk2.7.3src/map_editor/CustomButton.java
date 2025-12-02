import java.awt.*;
import java.awt.event.*;

class CustomButton extends Canvas
{
	MainFrame listener = null;

	boolean blnChecked;
	Graphics g;
	Graphics gD;
	Graphics gDup;
	Graphics gDpushed;
	Image imgUP=null;
	Image imgPUSHED=null;
	Image imgBUTTON=null;

	class MyMouseListener implements MouseListener
	{
		CustomButton cb;
		boolean blnStartedInside;
		boolean blnStillInside;

		MyMouseListener(CustomButton cb_in)
		{
			cb = cb_in;
			blnStartedInside = false;
			blnStillInside = false;
		}
		
		public void mouseClicked(MouseEvent evt){}

		public void mousePressed(MouseEvent evt)
		{
			blnStartedInside = true;
		}

		public void mouseReleased(MouseEvent evt)
		{
			if (blnStartedInside && blnStillInside)
			{
				if (!cb.blnChecked)
				{
					if (cb.listener != null)
					{
						cb.listener.customButtonStateChanged(cb);
					}
					cb.setState(true);
				}
			}
			blnStartedInside = false;
		}

		public void mouseEntered(MouseEvent evt)
		{
			blnStillInside = true;
		}

		public void mouseExited(MouseEvent evt)
		{
			blnStillInside = false;
		}
	}
	
	public CustomButton()
	{
		setVisible(true);
		setSize(new java.awt.Dimension(36, 36));
		addMouseListener(new MyMouseListener(this));
		blnChecked = false;
	}

	public boolean isPushed()
	{
		return blnChecked;
	}

	public void setState(boolean blnNewChecked)
	{
		if (blnNewChecked)
		{
			gD.drawImage(imgPUSHED,0,0,this);
			blnChecked = blnNewChecked;
			paint(g);
		} else
		{
			gD.drawImage(imgUP,0,0,this);
			blnChecked = blnNewChecked;
			paint(g);
		}
	}

	public void setImage(Image buttonImage, boolean buttonblnChecked)
	{
		if (buttonblnChecked)
		{
			if (imgPUSHED != null)
			{
				imgPUSHED.flush();
			}
			if (imgBUTTON == null)
			{
				imgBUTTON = createImage(36,36);
				gD = imgBUTTON.getGraphics();
				g = getGraphics();
			}
			imgPUSHED = buttonImage;
		} else
		{
			if (imgUP != null)
			{
				imgUP.flush();
			}
			if (imgBUTTON == null)
			{
				imgBUTTON = createImage(36,36);
				gD = imgBUTTON.getGraphics();
				g = getGraphics();
			}
			imgUP = buttonImage;
		}
	}
	
	public void addItemListener(MainFrame l)
	{
		listener = l;
	}

	public void removeItemListener(MainFrame l)
	{
		listener = null;
	}

	public void update(Graphics pg)
	{
		paint(pg);
	}

	public void paint(Graphics pg)
	{
		if (imgBUTTON != null)
		{
			pg.drawImage(imgBUTTON,0,0,this);
		}
	}
}
