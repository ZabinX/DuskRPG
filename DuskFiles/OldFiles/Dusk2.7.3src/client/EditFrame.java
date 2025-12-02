/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk.

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or
remove this license, and accompany it with all redistributions.
*/
package client;
import java.awt.*;
import java.awt.event.*;
import java.io.*;
import java.util.Vector;
import java.lang.Math;
import java.lang.reflect.Array;
import java.util.StringTokenizer;
import java.applet.*;
import java.net.*;

public class EditFrame extends Frame implements MouseListener
{
	Dusk appParent;
	TextArea txtEdit;
	Button btnSubmit;
	String strName;
	
	public EditFrame(String inName,Dusk inParent, boolean blnSubmit)
	{
		appParent = inParent;
		strName = inName;
		setTitle(strName);
		setLayout(new BorderLayout());
		if (blnSubmit)
		{
			btnSubmit = new Button("Submit");
			add(btnSubmit,"South");
			btnSubmit.addMouseListener(this);
		}
		txtEdit = new TextArea(40,40);
		add(txtEdit);
		setBackground(appParent.frame.background);
		addWindowListener(new java.awt.event.WindowAdapter() {
			public void windowClosing(java.awt.event.WindowEvent e) {
				thisWindowClosing(e);
			}
		});
		pack();
	}
	
	//Accept mouse input
	public void mousePressed(MouseEvent evt){}
	public void mouseReleased(MouseEvent evt){}
	public void mouseClicked(MouseEvent evt)
	{
		if (evt.getComponent() == btnSubmit)
		{
			try
			{
				appParent.stmOut.writeBytes("submit "+strName+"\n");
				appParent.stmOut.writeBytes(txtEdit.getText()+"\n--EOF--\n");
			}catch(Exception e)
			{
				appParent.addText("Error while submitting file: "+e.toString());
			}
		}
	}
	public void mouseEntered(MouseEvent evt) {}
	public void mouseExited(MouseEvent evt) {}
	
	void thisWindowClosing(WindowEvent e)
	{
		setVisible(false);
	}
}

