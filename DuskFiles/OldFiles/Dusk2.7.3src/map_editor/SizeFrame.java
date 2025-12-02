/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk.

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or
remove this license, and accompany it with all redistributions.
*/

import java.awt.*;
import java.awt.event.*;
import java.io.*;
import java.util.Vector;
import java.lang.Math;
import java.lang.reflect.Array;
import java.util.StringTokenizer;
import java.applet.*;
import java.net.*;

public class SizeFrame extends Frame implements MouseListener
{
	DuskMapEditor appParent;
	Button btnSubmit,
			btnCancel;
	TextField txtSizeX;
	TextField txtSizeY;
	Label lblSpecifySize;
	Label lblSpecifyX;
	Label lblSpecifyY;
	Panel pnlTop = new Panel();
	Panel pnlBottom = new Panel();
	boolean blnResize;
	
	public SizeFrame(DuskMapEditor inParent)
	{
		appParent = inParent;
		blnResize = false;
		initComponents();
	}

	public SizeFrame(DuskMapEditor inParent, boolean resize)
	{
		appParent = inParent;
		blnResize = resize;
		initComponents();
	}

	public void initComponents()
	{
		Color textbackground = new Color(220,220,220);
		setTitle("Choose New Size");
		txtSizeX = new TextField(""+appParent.MapColumns);
		txtSizeX.setSize(75,30);
		txtSizeX.setVisible(true);
		txtSizeX.setBackground(textbackground);
		txtSizeY = new TextField(""+appParent.MapRows);
		txtSizeY.setSize(75,30);
		txtSizeY.setVisible(true);
		txtSizeY.setBackground(textbackground);
		lblSpecifySize = new Label();
		lblSpecifySize.setText("Enter new map size:");
		lblSpecifySize.setVisible(true);
		lblSpecifySize.setAlignment(Label.RIGHT);
		btnSubmit = new Button();
		btnSubmit.setLabel("OK");
		btnSubmit.setSize(70,30);
		btnSubmit.setVisible(true);
		btnCancel = new Button();
		btnCancel.setLabel("Cancel");
		btnCancel.setSize(70,30);
		btnCancel.setVisible(true);
		
		pnlTop.setLayout(new FlowLayout(FlowLayout.LEFT));
		pnlTop.add(lblSpecifySize);
		pnlTop.add(txtSizeX);
		pnlTop.add(txtSizeY);
		pnlBottom.setLayout(new FlowLayout(FlowLayout.CENTER));
		pnlBottom.add(btnSubmit);
		pnlBottom.add(btnCancel);

		setLocation(20,20);
		setSize(250,110);
		setLayout(new BorderLayout());
		add(pnlTop, BorderLayout.NORTH);
		add(pnlBottom, BorderLayout.SOUTH);
		setBackground(appParent.background);
		btnSubmit.addMouseListener(this);
		btnCancel.addMouseListener(this);
		
		addWindowListener(new java.awt.event.WindowAdapter() {
			public void windowClosing(java.awt.event.WindowEvent e) {
				thisWindowClosing(e);
			}
		});
	}
	
	//Accept mouse input
	public void mousePressed(MouseEvent evt){}
	public void mouseReleased(MouseEvent evt){}
	public void mouseClicked(MouseEvent evt)
	{
		try
		{
			if (evt.getComponent() == btnSubmit)
			{
				hide();
				appParent.frame.pnlGraphics.setCursor(new Cursor(Cursor.WAIT_CURSOR));
				int newX = Integer.parseInt(txtSizeX.getText());
				int newY = Integer.parseInt(txtSizeY.getText());
				int copyX = appParent.MapColumns;
				int copyY = appParent.MapRows;
				short shrCurrentMap[][] = null;
				if (blnResize)
				{
					if (newX < appParent.MapColumns)
					{
						copyX = newX;
					}
					if (newY < appParent.MapRows)
					{
						copyY = newY;
					}
					shrCurrentMap = new short[copyX][copyY];
					for (int x=0; x<copyX ;x++)
					{
						for (int y=0; y<copyY ;y++)
						{
							shrCurrentMap[x][y] = appParent.shrMap[x][y];
						}
					}
				} else
				{
					appParent.strCurrentFile = "untitled";
				}
				appParent.MapColumns=Integer.parseInt(txtSizeX.getText());
				appParent.MapRows=Integer.parseInt(txtSizeY.getText());
				appParent.shrMap = new short[appParent.MapColumns][appParent.MapRows];
				appParent.shrUndo = new short[appParent.MapColumns][appParent.MapRows];
				appParent.shrRedo = new short[appParent.MapColumns][appParent.MapRows];
				if (blnResize)
				{
					for (int x=0; x<copyX ;x++)
					{
						for (int y=0; y<copyY ;y++)
						{
							appParent.shrMap[x][y] = shrCurrentMap[x][y];
						}
					}
				}
				appParent.frame.setTitle("Dusk Map Editor: "+appParent.strCurrentFile+" "+appParent.MapColumns+"x"+appParent.MapRows);
				appParent.frame.scrollVert.setMaximum(appParent.MapRows);
				appParent.frame.scrollHorz.setMaximum(appParent.MapColumns);
				appParent.frame.pnlGraphics.setCursor(new Cursor(Cursor.DEFAULT_CURSOR));
				appParent.update();
				appParent.paint(appParent.g);
			}else if (evt.getComponent() == btnCancel)
			{
				hide();
			}
		}catch(Exception e){}
	}
	public void mouseEntered(MouseEvent evt) {}
	public void mouseExited(MouseEvent evt) {}
	
	void thisWindowClosing(WindowEvent e)
	{
		setVisible(false);
	}
}