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

public class ConnectFrame extends Frame implements MouseListener
{
	Vector vctBookmarks;
	Dusk appParent;
	
	List lstBookmarks = new List();
	Button btnConnect = new Button();
	TextField txtName = new TextField();
	TextField txtAddress = new TextField();
	Label lblAddress = new Label();
	TextField txtPort = new TextField();
	Label lblPort = new Label();
	Button btnBookmark = new Button();
	Button btnRemove = new Button();

	public ConnectFrame(Dusk inParent)
	{
		appParent = inParent;
		vctBookmarks = new Vector(0);
		try
		{
			String strAddress;
			String strPort;
			RandomAccessFile rafBookmarks = new RandomAccessFile("bookmarks","r");
			strAddress = rafBookmarks.readLine();
			while (strAddress != null)
			{
				strPort = rafBookmarks.readLine();
				Bookmark bkmStore = new Bookmark(strAddress,Integer.parseInt(strPort));
				vctBookmarks.addElement(bkmStore);
				strAddress = rafBookmarks.readLine();
			}
			rafBookmarks.close();
		}catch(Exception e) {}
		lstBookmarks.removeAll();
		for (int i=0;i<vctBookmarks.size();i++)
		{
			lstBookmarks.add(((Bookmark)vctBookmarks.elementAt(i)).toString());
		}
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

		lstBookmarks.setLocation(new java.awt.Point(160, 20));
		lstBookmarks.setVisible(true);
		lstBookmarks.setSize(new java.awt.Dimension(180, 140));
		lstBookmarks.setBackground(appParent.frame.textbackground);
		lstBookmarks.addMouseListener(this);
		
		btnConnect.setLabel("Connect");
		btnConnect.setLocation(new java.awt.Point(10, 140));
		btnConnect.setVisible(true);
		btnConnect.setSize(new java.awt.Dimension(140, 20));
		btnConnect.addMouseListener(this);
		
		txtName.setText("local");
		txtName.setLocation(new java.awt.Point(10, 30));
		txtName.setVisible(true);
		txtName.setSize(new java.awt.Dimension(140, 20));
		txtName.setBackground(appParent.frame.textbackground);
		
		txtAddress.setText("127.0.0.1");
		txtAddress.setLocation(new java.awt.Point(10, 30));
		txtAddress.setVisible(true);
		txtAddress.setSize(new java.awt.Dimension(140, 20));
		txtAddress.setBackground(appParent.frame.textbackground);

		lblAddress.setText("Server Address:");
		lblAddress.setLocation(new java.awt.Point(20, 10));
		lblAddress.setVisible(true);
		lblAddress.setSize(new java.awt.Dimension(120, 20));

		txtPort.setText("7400");
		txtPort.setLocation(new java.awt.Point(10, 70));
		txtPort.setVisible(true);
		txtPort.setSize(new java.awt.Dimension(60, 20));
		txtPort.setBackground(appParent.frame.textbackground);

		lblPort.setText("Port:");
		lblPort.setLocation(new java.awt.Point(20, 50));
		lblPort.setVisible(true);
		lblPort.setSize(new java.awt.Dimension(50, 20));

		btnBookmark.setLabel("Add Bookmark");
		btnBookmark.setLocation(new java.awt.Point(10, 100));
		btnBookmark.setVisible(true);
		btnBookmark.setSize(new java.awt.Dimension(140, 20));
		btnBookmark.addMouseListener(this);

		btnRemove.setLabel("Remove Bookmark");
		btnRemove.setLocation(new java.awt.Point(10, 120));
		btnRemove.setVisible(true);
		btnRemove.setSize(new java.awt.Dimension(140, 20));
		btnRemove.addMouseListener(this);

		setLocation(new java.awt.Point(0, 0));
		setTitle("Connect");
		setLayout(null);
		setSize(new java.awt.Dimension(350, 180));
		add(btnConnect);
		add(txtAddress);
		add(lblAddress);
		add(txtPort);
		add(lblPort);
		add(btnBookmark);
		add(btnRemove);
		add(lstBookmarks);
		setBackground(appParent.frame.background);

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
	
	public void mouseEntered(MouseEvent evt) {}
	public void mouseExited(MouseEvent evt) {}
	public void mousePressed(MouseEvent evt) {}
	public void mouseReleased(MouseEvent evt) {}
	public void mouseClicked(MouseEvent evt)
	{
		if (evt.getComponent() == btnBookmark)
		{
			vctBookmarks.addElement(new Bookmark(txtAddress.getText(),Integer.parseInt(txtPort.getText())));
			lstBookmarks.removeAll();
			for (int i=0;i<vctBookmarks.size();i++)
			{
				lstBookmarks.add(((Bookmark)vctBookmarks.elementAt(i)).toString());
			}
			try
			{
				File fDelete = new File("bookmarks");
				fDelete.delete();
				RandomAccessFile rafBookmarks = new RandomAccessFile("bookmarks","rw");
				for (int i=0;i<vctBookmarks.size();i++)
				{
					Bookmark bkmStore = (Bookmark)vctBookmarks.elementAt(i);
					rafBookmarks.writeBytes(bkmStore.strAddress+"\n");
					rafBookmarks.writeBytes(""+bkmStore.port+"\n");
				}
				rafBookmarks.close();
			}catch(Exception e)
			{
				System.err.println("Error writing bookmarks: "+e.toString());
			}
		}
		if (evt.getComponent() == btnRemove)
		{
			try
			{
				vctBookmarks.removeElementAt(lstBookmarks.getSelectedIndex());
				lstBookmarks.removeAll();
				for (int i=0;i<vctBookmarks.size();i++)
				{
					lstBookmarks.add(((Bookmark)vctBookmarks.elementAt(i)).toString());
				}
				try
				{
					File fDelete = new File("bookmarks");
					fDelete.delete();
					RandomAccessFile rafBookmarks = new RandomAccessFile("bookmarks","rw");
					for (int i=0;i<vctBookmarks.size();i++)
					{
						Bookmark bkmStore = (Bookmark)vctBookmarks.elementAt(i);
						rafBookmarks.writeBytes(bkmStore.strAddress+"\n");
						rafBookmarks.writeBytes(""+bkmStore.port+"\n");
					}
					rafBookmarks.close();
				}catch(Exception e)
				{
					System.err.println("Error writing bookmarks: "+e.toString());
				}
			}catch(Exception e){}
		}
		if (evt.getComponent() == btnConnect)
		{
			if (appParent.blnConnected)
				return;
			appParent.address = txtAddress.getText();
			appParent.port = Integer.parseInt(txtPort.getText());
			appParent.connect();
		}
		if (evt.getComponent() == lstBookmarks)
		{	
			try
			{
				Bookmark bkmStore = (Bookmark)vctBookmarks.elementAt(lstBookmarks.getSelectedIndex());
				txtAddress.setText(bkmStore.strAddress);
				txtPort.setText(""+bkmStore.port);
			}catch(Exception e){}
		}
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
