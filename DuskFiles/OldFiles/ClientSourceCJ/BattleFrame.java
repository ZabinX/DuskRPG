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
import java.io.IOException;
import javax.swing.*;

public class BattleFrame extends JFrame implements MouseListener,KeyListener
{
	Dusk appParent;
        JScrollPane scrText = new JScrollPane();
	JTextArea txtEdit;
	JTextField txtInput = new JTextField();
	Color textbackground;
	
	public BattleFrame(Dusk inParent)
	{
		appParent = inParent;
		setLayout(new BorderLayout());
		txtInput.setVisible(true);
		textbackground = new Color(89,89,89);
        txtInput.setBackground(textbackground);
		add(txtInput, "North");
		txtEdit = new JTextArea(40,30);
		scrText.setVisible(true);
		scrText.getViewport().add(txtEdit);
		add(scrText);
		txtInput.addKeyListener(this);
//		setBackground(appParent.frame.background);
		addWindowListener(new java.awt.event.WindowAdapter() {
                        @Override
			public void windowClosing(java.awt.event.WindowEvent e) {
				thisWindowClosing(e);
			}
		});
		pack();
	}
	
	//Accept mouse input
        @Override
	public void mousePressed(MouseEvent evt)  {}
        @Override
	public void mouseReleased(MouseEvent evt) {}
        @Override
	public void mouseClicked(MouseEvent evt)  {}
        @Override
	public void mouseEntered(MouseEvent evt)  {}
        @Override
	public void mouseExited(MouseEvent evt)   {}
	
	//Accept key input
        @Override
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
	   				}

		 		}
			}
	    }catch(IOException e)
	    {
	        appParent.addText("Error at keyPressed(): "+e.toString()+"\n");
	    }
	    }
	}
        @Override
	public void keyReleased(KeyEvent evt){}
        @Override
	public void keyTyped(KeyEvent evt){}

	void thisWindowClosing(WindowEvent e)
	{
		setVisible(false);
	}
}
