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
import javax.swing.*;
import javax.swing.event.*;
import java.io.*;
import java.util.Vector;

public class ConnectFrame extends JFrame
{
	Vector vctBookmarks;
	Dusk appParent;

	javax.swing.JScrollPane scrBookmarks = new javax.swing.JScrollPane();
	javax.swing.JList lstBookmarks = new javax.swing.JList();
	javax.swing.JButton btnConnect = new javax.swing.JButton();
	javax.swing.JTextField txtName = new javax.swing.JTextField();
	javax.swing.JTextField txtAddress = new javax.swing.JTextField();
	javax.swing.JLabel lblAddress = new javax.swing.JLabel();
	javax.swing.JTextField txtPort = new javax.swing.JTextField();
	javax.swing.JLabel lblPort = new javax.swing.JLabel();

	public ConnectFrame(Dusk inParent)
	{
		appParent = inParent;
		vctBookmarks = new Vector(0);
		try
		{
			RandomAccessFile rafBookmarks = new RandomAccessFile("bookmarks","r");
			while (true)
			{
				Bookmark bkmStore = new Bookmark(rafBookmarks.readLine(),Integer.parseInt(rafBookmarks.readLine()));
				vctBookmarks.addElement(bkmStore);
			}
		}catch(Exception e) {}
		lstBookmarks.setListData(vctBookmarks);
		try
		{
			initComponents();
		}catch(Exception e)
		{
			System.err.println("Error at ConnectFrame.initComponents: "+e.toString());
		}
	}

	public void initComponents() throws Exception
	{
		scrBookmarks.setLocation(new java.awt.Point(160, 20));
		scrBookmarks.setVisible(true);
		scrBookmarks.setSize(new java.awt.Dimension(180, 140));
		scrBookmarks.getViewport().add(lstBookmarks);

		lstBookmarks.setVisible(true);

		if (!appParent.blnApplet)
		{
			btnConnect.setText("Connect");
			btnConnect.setLocation(new java.awt.Point(10, 100));
			btnConnect.setVisible(true);
			btnConnect.setSize(new java.awt.Dimension(140, 60));
		}

		txtName.setText("New Dusk");
		txtName.setLocation(new java.awt.Point(10, 30));
		txtName.setVisible(true);
		txtName.setSize(new java.awt.Dimension(140, 20));

		txtAddress.setText("100.64.17.13");
		txtAddress.setLocation(new java.awt.Point(10, 30));
		txtAddress.setVisible(true);
		txtAddress.setSize(new java.awt.Dimension(140, 20));

		lblAddress.setText("Server Address:");
		lblAddress.setLocation(new java.awt.Point(20, 10));
		lblAddress.setVisible(true);
		lblAddress.setSize(new java.awt.Dimension(120, 20));

		txtPort.setText("2222");
		txtPort.setLocation(new java.awt.Point(10, 70));
		txtPort.setVisible(true);
		txtPort.setSize(new java.awt.Dimension(60, 20));

		lblPort.setText("Port:");
		lblPort.setLocation(new java.awt.Point(20, 50));
		lblPort.setVisible(true);
		lblPort.setSize(new java.awt.Dimension(50, 20));

		setLocation(new java.awt.Point(0, 0));
		setTitle("frmConnect");
		getContentPane().setLayout(null);
		setSize(new java.awt.Dimension(350, 180));
		getContentPane().add(scrBookmarks);
		if (!appParent.blnApplet)
				getContentPane().add(btnConnect);
		getContentPane().add(txtAddress);
		getContentPane().add(lblAddress);
		getContentPane().add(txtPort);
		getContentPane().add(lblPort);

		lstBookmarks.addListSelectionListener(new ListSelectionListener() {
			public void valueChanged(ListSelectionEvent e) {
				lstBookmarksActionPerformed(e);
			}
		});
		btnConnect.addActionListener(new java.awt.event.ActionListener() {
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnConnectActionPerformed(e);
			}
		});
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

	// Close the window when the close box is clicked
	void thisWindowClosing(java.awt.event.WindowEvent e)
	{
		setVisible(false);
	}

	public void btnBookmarkActionPerformed(java.awt.event.ActionEvent e)
	{
		vctBookmarks.addElement(new Bookmark(txtAddress.getText(),Integer.parseInt(txtPort.getText())));
		lstBookmarks.setListData(vctBookmarks);
		try
		{
			RandomAccessFile rafBookmarks = new RandomAccessFile("bookmarks","rw");
			for (int i=0;i<vctBookmarks.size();i++)
			{
				Bookmark bkmStore = (Bookmark)vctBookmarks.elementAt(i);
				rafBookmarks.writeBytes(bkmStore.strAddress+"\n");
				rafBookmarks.writeBytes(""+bkmStore.port+"\n");
			}
		}catch(Exception exc)
		{
			System.err.println("Error writing bookmarks: "+e.toString());
		}
	}

	public void btnRemoveActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			vctBookmarks.removeElementAt(lstBookmarks.getSelectedIndex());
			lstBookmarks.setListData(vctBookmarks);
			try
			{
				RandomAccessFile rafBookmarks = new RandomAccessFile("bookmarks","rw");
				for (int i=0;i<vctBookmarks.size();i++)
				{
					Bookmark bkmStore = (Bookmark)vctBookmarks.elementAt(i);
					rafBookmarks.writeBytes(bkmStore.strAddress+"\n");
					rafBookmarks.writeBytes(""+bkmStore.port+"\n");
				}
			}catch(Exception exc)
			{
				System.err.println("Error writing bookmarks: "+e.toString());
			}
		}catch(Exception exc){}
	}

	public void btnConnectActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			return;
		appParent.address = txtAddress.getText();
		appParent.port = Integer.parseInt(txtPort.getText());
		appParent.connect();
	}

	public void lstBookmarksActionPerformed(ListSelectionEvent e)
	{
		try
		{
			Bookmark bkmStore = (Bookmark)vctBookmarks.elementAt(lstBookmarks.getSelectedIndex());
			txtAddress.setText(bkmStore.strAddress);
			txtPort.setText(""+bkmStore.port);
		}catch(Exception exc){}
	}
}

class Bookmark
{
	String strAddress;
	int port;

	Bookmark(String inAddress, int inport)
	{
		strAddress = inAddress;
		port = inport;
	}

	public String toString()
	{
		return strAddress+":"+port;
	}
}
