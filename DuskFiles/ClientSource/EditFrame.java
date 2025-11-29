/*
All code copyright Tom Weingarten (captaint@home.com) 2000
Tom Weingarten makes no assurances as to the reliability or
functionality of this code. Use at your own risk.

You are free to edit or redistribute this code or any portion
at your wish, under the condition that you do not edit or
remove this license, and accompany it with all redistributions.
*/

/*
Special Thanks to:

Randall Leeds for the following code portions
as well as many other small changes and deprecation fixes:
Float/Unfloat

Joe Alloway for shadowed text and the !set command
*/

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import java.io.*;
import java.util.Vector;
import java.lang.Math;
import java.lang.reflect.Array;
import java.util.StringTokenizer;
import java.applet.*;
import java.net.*;
import duskz.protocol.*;
import duskz.protocol.DuskMessage.*;

class EditFrame extends JFrame implements MouseListener
{
	Dusk appParent;
	JScrollPane scrEdit;
	JTextArea txtEdit;
	JButton btnSubmit;
	String strName;
	
	public EditFrame(String inName,Dusk inParent, boolean blnSubmit)
	{
		appParent = inParent;
		strName = inName;
		setTitle(strName);
		getContentPane().setLayout(new BorderLayout());
		if (blnSubmit)
		{
			btnSubmit = new JButton("Submit");
			getContentPane().add(btnSubmit,"South");
			btnSubmit.addMouseListener(this);
		}
		scrEdit = new JScrollPane();
		txtEdit = new JTextArea();
		scrEdit.getViewport().add(txtEdit);
		getContentPane().add(scrEdit,"Center");
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
		if (evt.getComponent() == btnSubmit)
		{
			appParent.sendMessage(new StringMessage(DuskProtocol.MSG_COMMAND, "submit " + strName));
			appParent.sendMessage(new StringMessage(DuskProtocol.MSG_COMMAND, txtEdit.getText()));
			setVisible(false);
		}
	}
	public void mouseEntered(MouseEvent evt) {}
	public void mouseExited(MouseEvent evt) {}
	
	void thisWindowClosing(WindowEvent e)
	{
		setVisible(false);
	}
}