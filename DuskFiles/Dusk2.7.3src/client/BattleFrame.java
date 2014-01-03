
package client;
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

public class BattleFrame extends Frame implements MouseListener,KeyListener
{
	Dusk appParent;
	TextArea txtEdit;
	TextField txtInput = new TextField();
	Color textbackground;
	
	public BattleFrame(Dusk inParent)
	{
		appParent = inParent;
		setLayout(new BorderLayout());
		txtInput.setVisible(true);
		textbackground = new Color(220,220,220);
        txtInput.setBackground(textbackground);
		add(txtInput, "North");
		txtEdit = new TextArea(20,80);
		add(txtEdit);
		txtInput.addKeyListener(this);
		setBackground(appParent.frame.background);
		addWindowListener(new java.awt.event.WindowAdapter() {
			public void windowClosing(java.awt.event.WindowEvent e) {
				thisWindowClosing(e);
			}
		});
		pack();
	}
	
	//Accept mouse input
	public void mousePressed(MouseEvent evt)  {}
	public void mouseReleased(MouseEvent evt) {}
	public void mouseClicked(MouseEvent evt)  {}
	public void mouseEntered(MouseEvent evt)  {}
	public void mouseExited(MouseEvent evt)   {}
	
	//Accept key input
	public void keyPressed(KeyEvent evt)
	{
		if (!appParent.blnConnected)
	    	return;
		synchronized(appParent.stmOut)
		{
	    try
	    {
	    	int nkey = evt.getKeyCode();
	    	if (nkey == KeyEvent.VK_ENTER)
	    	{
	    		String strStore = txtInput.getText();
	    		//Thanks to Joe Alloway for this addition
	    		if(strStore.startsWith("!"))
	    		{
					if (strStore.length()==1)
					{
						appParent.strSet = null;
					}else
					{
						appParent.strSet = strStore.substring(1);
					}
				}else
				{
	    			appParent.stmOut.writeBytes(strStore+"\n");
				}
				//End contribution by Joe Alloway
	    		txtInput.setText("");
	    	}
	    	if (appParent.blnLoaded)
	    	{
				switch (nkey)
	   			{
	    			case 38: //up-down-left-right
	    			{
	    				appParent.stmOut.writeBytes("n\n");
	    				if (appParent.strSet != null)
	    				{
	    					appParent.stmOut.writeBytes(appParent.strSet+"\n");
	    				}
						return;
	   				}
	   				case 40:
	   				{
	   					appParent.stmOut.writeBytes("s\n");
	    				if (appParent.strSet != null)
	    				{
	    					appParent.stmOut.writeBytes(appParent.strSet+"\n");
	    				}
						return;
	   				}
	   				case 37:
	   				{
	   		    		appParent.stmOut.writeBytes("w\n");
	    				if (appParent.strSet != null)
	    				{
	    					appParent.stmOut.writeBytes(appParent.strSet+"\n");
	    				}
						return;
	   				}
	   				case 39:
	   				{
	   		    		appParent.stmOut.writeBytes("e\n");
	    				if (appParent.strSet != null)
	    				{
	    					appParent.stmOut.writeBytes(appParent.strSet+"\n");
	    				}
		 				return;
	   				}
		 		}
			}
	    }catch(Exception e)
	    {
	        appParent.addText("Error at keyPressed(): "+e.toString()+"\n");
	    }
	    }
		return;
	}
	public void keyReleased(KeyEvent evt){}
	public void keyTyped(KeyEvent evt){}

	void thisWindowClosing(WindowEvent e)
	{
		setVisible(false);
	}
}
