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

public class EquipmentFrame extends Frame implements ActionListener
{
	Dusk appParent;
	boolean blnRefreshMenus;
	
	Choice chcSkull = new Choice();
	Choice chcArms = new Choice();
	Choice chcEyes = new Choice();
	Choice chcTorso = new Choice();
	Choice chcLegs = new Choice();
	Choice chcNeck = new Choice();
	Choice chcWaist = new Choice();
	Choice chcHands = new Choice();
	Choice chcWield = new Choice();
	Label lblSkull = new Label();
	Label Label1 = new Label();
	Label Label2 = new Label();
	Label Label3 = new Label();
	Label Label4 = new Label();
	Label Label5 = new Label();
	Label Label6 = new Label();
	Label Label7 = new Label();
	Label Label8 = new Label();
	Label Label9 = new Label();

	public EquipmentFrame(Dusk inAppParent)
	{
	    try
	    {
	        appParent = inAppParent;
	        initComponents();
	    }catch (Exception e)
	    {
	        System.err.println("Error at EquipmentFrame(): "+e.toString());
	    }
	}

	public void initComponents() throws Exception
	{
		chcSkull.setLocation(30, 40);
		chcSkull.setVisible(true);
		chcSkull.setSize(240, 20);

		chcArms.setLocation(30, 120);
		chcArms.setVisible(true);
		chcArms.setSize(240, 20);

		chcEyes.setLocation(30, 240);
		chcEyes.setVisible(true);
		chcEyes.setSize(240, 20);

		chcTorso.setLocation(30, 80);
		chcTorso.setVisible(true);
		chcTorso.setSize(240, 20);

		chcLegs.setLocation(30, 160);
		chcLegs.setVisible(true);
		chcLegs.setSize(240, 20);

		chcNeck.setLocation(30, 200);
		chcNeck.setVisible(true);
		chcNeck.setSize(240, 20);

		chcWaist.setLocation(30, 280);
		chcWaist.setVisible(true);
		chcWaist.setSize(240, 20);

		chcHands.setLocation(30, 320);
		chcHands.setVisible(true);
		chcHands.setSize(240, 20);

		chcWield.setLocation(30, 360);
		chcWield.setVisible(true);
		chcWield.setSize(240, 20);

		lblSkull.setText("Skull:");
		lblSkull.setLocation(10, 20);
		lblSkull.setVisible(true);
		lblSkull.setSize(400, 20);

		Label1.setText("Torso:");
		Label1.setLocation(10, 60);
		Label1.setVisible(true);
		Label1.setSize(400, 20);

		Label2.setText("Arms:");
		Label2.setLocation(9, 100);
		Label2.setVisible(true);
		Label2.setSize(400, 20);

		Label3.setText("Legs:");
		Label3.setLocation(9, 135);
		Label3.setVisible(true);
		Label3.setSize(400, 20);

		Label4.setText("Neck:");
		Label4.setLocation(10, 180);
		Label4.setVisible(true);
		Label4.setSize(400, 20);

		Label5.setText("Eyes:");
		Label5.setLocation(10, 220);
		Label5.setVisible(true);
		Label5.setSize(400, 20);

		Label6.setText("Waist:");
		Label6.setLocation(10, 260);
		Label6.setVisible(true);
		Label6.setSize(400, 20);

		Label7.setText("Hands:");
		Label7.setLocation(10, 300);
		Label7.setVisible(true);
		Label7.setSize(400, 20);

		Label9.setText("Wielded:");
		Label9.setLocation(10, 340);
		Label9.setVisible(true);
		Label9.setSize(400, 20);

		Label8.setText("Equipment");
		Label8.setLocation(10, 0);
		Label8.setAlignment(Label.CENTER);
		Label8.setVisible(true);
		Label8.setSize(280, 20);

		setLocation(0, 0);
		setTitle("Equipment");
		setLayout(null);
		setSize(300, 440);
		add(chcSkull);
		add(chcArms);
		add(chcEyes);
		add(chcTorso);
		add(chcLegs);
		add(chcNeck);
		add(chcWaist);
		add(chcHands);
		add(chcWield);
		add(lblSkull);
		add(Label1);
		add(Label2);
		add(Label3);
		add(Label4);
		add(Label5);
		add(Label6);
		add(Label7);
		add(Label8);
		add(Label9);
		setBackground(appParent.frame.background);


		chcSkull.addItemListener(new java.awt.event.ItemListener() {
			public void itemStateChanged(java.awt.event.ItemEvent e) {
				Equip(7);
			}
		});
		chcArms.addItemListener(new java.awt.event.ItemListener() {
			public void itemStateChanged(java.awt.event.ItemEvent e) {
				Equip(2);			
			}
		});
		chcEyes.addItemListener(new java.awt.event.ItemListener() {
			public void itemStateChanged(java.awt.event.ItemEvent e) {
				Equip(8);			
			}
		});
		chcTorso.addItemListener(new java.awt.event.ItemListener() {
			public void itemStateChanged(java.awt.event.ItemEvent e) {
				Equip(4);			
			}
		});
		chcLegs.addItemListener(new java.awt.event.ItemListener() {
			public void itemStateChanged(java.awt.event.ItemEvent e) {
				Equip(3);			
			}
		});
		chcNeck.addItemListener(new java.awt.event.ItemListener() {
			public void itemStateChanged(java.awt.event.ItemEvent e) {
				Equip(6);			
			}
		});
		chcWaist.addItemListener(new java.awt.event.ItemListener() {
			public void itemStateChanged(java.awt.event.ItemEvent e) {
				Equip(5);			
			}
		});
		chcHands.addItemListener(new java.awt.event.ItemListener() {
			public void itemStateChanged(java.awt.event.ItemEvent e) {
				Equip(9);			
			}
		});
		chcWield.addItemListener(new java.awt.event.ItemListener() {
			public void itemStateChanged(java.awt.event.ItemEvent e) {
				Equip(1);
			}
		});
		addWindowListener(new java.awt.event.WindowAdapter() {
			public void windowClosing(java.awt.event.WindowEvent e) {
				thisWindowClosing(e);
			}
		});
		
		addWindowListener(new WindowAdapter() {
			public void windowClosing(WindowEvent e) {
				thisWindowClosing(e);
			}
		});
	}
	public void actionPerformed(ActionEvent evt)
	{
		if (blnRefreshMenus)
			return;
		if (evt.getSource() == chcWield)
		{
			Equip(1);
		}else if (evt.getSource() == chcArms)
		{
			Equip(2);
		}else if (evt.getSource() == chcLegs)
		{
			Equip(3);
		}else if (evt.getSource() == chcTorso)
		{
			Equip(4);
		}else if (evt.getSource() == chcWaist)
		{
			Equip(5);
		}else if (evt.getSource() == chcNeck)
		{
			Equip(6);
		}else if (evt.getSource() == chcSkull)
		{
			Equip(7);
		}else if (evt.getSource() == chcEyes)
		{
			Equip(8);
		}else if (evt.getSource() == chcHands)
		{
			Equip(9);
		}
  	}
  	
  	private boolean mShown = false;
  	
	public void addNotify() 
	{
		super.addNotify();
		
		if (mShown)
			return;
			
		Insets insets = getInsets();
		Component[] components = getComponents();
		for (int i = 0; i < components.length; i++) {
			Point location = components[i].getLocation();
			location.move(location.x, location.y + insets.top);
			components[i].setLocation(location);
		}

		mShown = true;
	}

	void thisWindowClosing(WindowEvent e)
	{
		setVisible(false);
	}
	
	public void Equip(int intStore)
	{
		try
		{
		String strStore;
		switch (intStore)
		{
				case (1):
				{
					strStore = (String)chcWield.getSelectedItem();
					if (strStore.equals("none"))
					{
						appParent.stmOut.writeBytes("unwear wielded\n");
					}else
					{
						appParent.stmOut.writeBytes("wear "+strStore+"\n");
					}
					break;
				}
				case (2):
				{
					strStore = (String)chcArms.getSelectedItem();
					if (strStore.equals("none"))
					{
						appParent.stmOut.writeBytes("unwear arms\n");
					}else
					{
						appParent.stmOut.writeBytes("wear "+strStore+"\n");
					}
					break;
				}
				case (3):
				{
					strStore = (String)chcLegs.getSelectedItem();
					if (strStore.equals("none"))
					{
						appParent.stmOut.writeBytes("unwear legs\n");
					}else
					{
						appParent.stmOut.writeBytes("wear "+strStore+"\n");
					}
					break;
				}
				case (4):
				{
					strStore = (String)chcTorso.getSelectedItem();
					if (strStore.equals("none"))
					{
						appParent.stmOut.writeBytes("unwear torso\n");
					}else
					{
						appParent.stmOut.writeBytes("wear "+strStore+"\n");
					}
					break;
				}
				case (5):
				{
					strStore = (String)chcWaist.getSelectedItem();
					if (strStore.equals("none"))
					{
						appParent.stmOut.writeBytes("unwear waist\n");
					}else
					{
						appParent.stmOut.writeBytes("wear "+strStore+"\n");
					}
					break;
				}
				case (6):
				{
					strStore = (String)chcNeck.getSelectedItem();
					if (strStore.equals("none"))
					{
						appParent.stmOut.writeBytes("unwear neck\n");
					}else
					{
						appParent.stmOut.writeBytes("wear "+strStore+"\n");
					}
					break;
				}
				case (7):
				{
					strStore = (String)chcSkull.getSelectedItem();
					if (strStore.equals("none"))
					{
						appParent.stmOut.writeBytes("unwear skull\n");
					}else
					{
						appParent.stmOut.writeBytes("wear "+strStore+"\n");
					}
					break;
				}
				case (8):
				{
					strStore = (String)chcEyes.getSelectedItem();
					if (strStore.equals("none"))
					{
						appParent.stmOut.writeBytes("unwear eyes\n");
					}else
					{
						appParent.stmOut.writeBytes("wear "+strStore+"\n");
					}
					break;
				}
				case (9):
				{
					strStore = (String)chcHands.getSelectedItem();
					if (strStore.equals("none"))
					{
						appParent.stmOut.writeBytes("unwear hands\n");
					}else
					{
						appParent.stmOut.writeBytes("wear "+strStore+"\n");
					}
					break;
				}
		}
		}catch(Exception e)
		{
			appParent.addText("Error at Equip(): "+e.toString());
		}
	}
}