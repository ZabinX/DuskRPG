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
import java.util.StringTokenizer;
import javax.swing.*;
import javax.swing.text.*;


public class MainFrame extends Frame implements ItemListener
{
	Color background,
			textbackground;
	Panel pnlContents = new Panel();
	Panel pnlStats = new Panel();
	Label lblInfo = new Label();
	Choice chcAttack = new Choice();
	Choice chcAction = new Choice();
	Choice chcLook = new Choice();
	Choice chcGet = new Choice();
	Choice chcDrop = new Choice();
	TextArea txtOther = new TextArea();
	Button btnMerchant = new Button();
	Button btnQuit = new Button();
	Button btnConnect = new Button();
	Button btnEquipment = new Button();
	Panel pnlGraphics = new Panel();
	TextField txtInput = new TextField();
	//TextArea txtOutput = new TextArea();
	JScrollPane scrText = new JScrollPane();
	JTextPane txtOutput = new JTextPane();
	Document docOutput;
	EquipmentFrame frmEquipment;
	ConnectFrame frmConnect;
	Dusk appParent;
	
	public MainFrame(Dusk inParent)
	{
		appParent = inParent;
		background = new Color(140,140,140);
		textbackground = new Color(220,220,220);
	}

	public void initComponents() throws Exception
	{
		pnlStats.setLocation(new java.awt.Point(330, 0));
		pnlStats.setVisible(true);
		pnlStats.setLayout(null);
		pnlStats.setSize(new java.awt.Dimension(310, 330));
		pnlStats.add(btnMerchant);
		pnlStats.add(lblInfo);
		pnlStats.add(txtOther);
		pnlStats.add(chcAttack);
		pnlStats.add(chcAction);
		pnlStats.add(chcLook);
		pnlStats.add(chcGet);
		pnlStats.add(chcDrop);
		pnlStats.add(btnQuit);
		pnlStats.add(btnEquipment);

		int intBtnYloc=240;
		if (!appParent.blnApplet)
		{
			pnlStats.add(btnConnect);
			intBtnYloc += 20;
		}
		pnlStats.setBackground(background);
		
		pnlContents.setLayout(null);
		pnlContents.setVisible(true);
		pnlContents.setBackground(background);

		lblInfo.setLocation(new java.awt.Point(10, 10));
		lblInfo.setVisible(true);
		lblInfo.setSize(new java.awt.Dimension(290, 20));

		chcAttack.setLocation(new java.awt.Point(10, 40));
		chcAttack.setVisible(true);
		chcAttack.setSize(new java.awt.Dimension(120, 20));

		chcAction.setLocation(new java.awt.Point(10, 70));
		chcAction.setVisible(true);
		chcAction.setSize(new java.awt.Dimension(120, 20));

		chcLook.setLocation(new java.awt.Point(10, 100));
		chcLook.setVisible(true);
		chcLook.setSize(new java.awt.Dimension(120, 20));

		chcGet.setLocation(new java.awt.Point(10, 131));
		chcGet.setVisible(true);
		chcGet.setSize(new java.awt.Dimension(120, 20));

		chcDrop.setLocation(new java.awt.Point(10, 160));
		chcDrop.setVisible(true);
		chcDrop.setSize(new java.awt.Dimension(120, 20));

		txtOther.setLocation(new java.awt.Point(140, 30));
		txtOther.setVisible(true);
		txtOther.setSize(new java.awt.Dimension(160, 290));
		txtOther.setBackground(textbackground);

		btnQuit.setLocation(new java.awt.Point(10, intBtnYloc));
		intBtnYloc -= 20;
		btnQuit.setLabel("Quit");
		btnQuit.setVisible(true);
		btnQuit.setSize(new java.awt.Dimension(120, 20));

		btnEquipment.setLocation(new java.awt.Point(10, intBtnYloc));
		intBtnYloc -= 20;
		btnEquipment.setLabel("Equipment");
		btnEquipment.setVisible(true);
		btnEquipment.setSize(new java.awt.Dimension(120, 20));
		
		btnMerchant.setLocation(new java.awt.Point(10, intBtnYloc));
		intBtnYloc -= 20;
		btnMerchant.setLabel("Merchant");
		btnMerchant.setEnabled(false);
		btnMerchant.setVisible(true);
		btnMerchant.setSize(new java.awt.Dimension(120, 20));

		btnConnect.setLocation(new java.awt.Point(10, intBtnYloc));
		btnConnect.setLabel("Connect");
		btnConnect.setVisible(true);
		btnConnect.setSize(new java.awt.Dimension(120, 20));

		pnlGraphics.setLocation(new java.awt.Point(0, 0));
		pnlGraphics.setVisible(true);
		pnlGraphics.setLayout(null);
		pnlGraphics.setSize(new java.awt.Dimension(330, 330));
		pnlGraphics.setBackground(background);

		txtInput.setText("");
		txtInput.setLocation(new java.awt.Point(0, 330));
		txtInput.setVisible(true);
		txtInput.setSize(new java.awt.Dimension(640, 25));
		txtInput.setBackground(textbackground);

		txtOutput.setLocation(new java.awt.Point(1, 1));
		txtOutput.setVisible(true);
		txtOutput.setSize(new java.awt.Dimension(638, 118));
		txtOutput.setEditable(false);
		txtOutput.setBackground(textbackground);
		docOutput = txtOutput.getDocument();

		scrText.setLocation(new java.awt.Point(0, 360));
		scrText.setVisible(true);
		scrText.setSize(new java.awt.Dimension(640, 120));
		scrText.getViewport().add(txtOutput);

		setLocation(new java.awt.Point(0, 0));
		setTitle("Dusk");
		setLayout(new BorderLayout());
		setSize(new java.awt.Dimension(640, 480));
		add(pnlContents, BorderLayout.CENTER);
		pnlContents.add(pnlStats);
		pnlContents.add(pnlGraphics);
		pnlContents.add(txtInput);
		pnlContents.add(scrText);
		
		chcAttack.addItemListener(this);
		chcAction.addItemListener(this);
		chcLook.addItemListener(this);
		chcGet.addItemListener(this);
		chcDrop.addItemListener(this);


		btnMerchant.addActionListener(appParent);
		btnQuit.addActionListener(appParent);
		btnEquipment.addActionListener(appParent);
		if (!appParent.blnApplet)
			btnConnect.addActionListener(appParent);
		
		addWindowListener(new java.awt.event.WindowAdapter() {
			public void windowClosing(java.awt.event.WindowEvent e) {
				thisWindowClosing(e);
			}
		});
		frmEquipment = new EquipmentFrame(appParent);
		if (!appParent.blnApplet)
			frmConnect = new ConnectFrame(appParent);
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
		try
		{
			appParent.sckConnection.close();
		}catch (Exception exc){}
		dispose();
//		System.exit(0);
	}
	
	public void itemStateChanged (ItemEvent evt)
	{
		try
		{
			if (evt.getSource() == chcAttack)
			{
				if (chcAttack.getSelectedIndex()==0)
					return;
				String strStore = (String)chcAttack.getSelectedItem();
				int i = strStore.lastIndexOf(">");
				if (i>0)
				{
					strStore = strStore.substring(i+1,strStore.length());
				}
				appParent.stmOut.writeBytes("a "+strStore +"\n");
				appParent.blnMenuRefresh = true;
				appParent.blnMenuRefresh = false;
			}else if (evt.getSource() == chcAction)
			{
				if (chcAction.getSelectedIndex()==0)
					return;
				appParent.stmOut.writeBytes((String)chcAction.getSelectedItem()+"\n");
				appParent.blnMenuRefresh = true;
				appParent.blnMenuRefresh = false;
			}else if (evt.getSource() == chcLook)
			{
				if (chcLook.getSelectedIndex()==0)
					return;
				String strStore = (String)chcLook.getSelectedItem();
				StringTokenizer tknStore = new StringTokenizer(strStore, ">");
				while(tknStore.countTokens() > 0)
				{
					strStore = tknStore.nextToken();
				}
				appParent.stmOut.writeBytes("look "+strStore+"\n");
				appParent.blnMenuRefresh = true;
				appParent.blnMenuRefresh = false;
			}else if (evt.getSource() == chcGet)
			{
				if (chcGet.getSelectedIndex()==0)
					return;
				String strStore = (String)chcGet.getSelectedItem();
				appParent.stmOut.writeBytes("get "+strStore+"\n");
				appParent.blnMenuRefresh = true;
				appParent.blnMenuRefresh = false;
			}else if (evt.getSource() == chcDrop)
			{
				if (chcDrop.getSelectedIndex()==0)
					return;
				String strStore = (String)chcDrop.getSelectedItem();
				appParent.stmOut.writeBytes("drop "+strStore+"\n");
				appParent.blnMenuRefresh = true;
				appParent.blnMenuRefresh = false;
			}
		}catch (Exception e)
		{
			System.out.println("Error at MainFrame.actionPerformed(): " + e.toString());
		}
		txtInput.requestFocus();
	}
}
