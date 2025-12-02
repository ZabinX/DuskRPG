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
import java.io.*;
import java.util.Vector;
import java.lang.Math;
import java.lang.reflect.Array;
import java.util.StringTokenizer;
import java.applet.*;
import java.net.*;

class EquipmentFrame extends JFrame implements ActionListener
{
	Dusk appParent;
	boolean blnRefreshMenus;
	
	JComboBox chcSkull = new JComboBox();
	JComboBox chcArms = new JComboBox();
	JComboBox chcEyes = new JComboBox();
	JComboBox chcTorso = new JComboBox();
	JComboBox chcLegs = new JComboBox();
	JComboBox chcNeck = new JComboBox();
	JComboBox chcWaist = new JComboBox();
	JComboBox chcHands = new JComboBox();
	JComboBox chcWield = new JComboBox();
	JLabel lblSkull = new JLabel();
	JLabel JLabel1 = new JLabel();
	JLabel JLabel2 = new JLabel();
	JLabel JLabel3 = new JLabel();
	JLabel JLabel4 = new JLabel();
	JLabel JLabel5 = new JLabel();
	JLabel JLabel6 = new JLabel();
	JLabel JLabel7 = new JLabel();
	JLabel JLabel8 = new JLabel();
	JLabel JLabel9 = new JLabel();

	public EquipmentFrame(Dusk inAppParent)
	{
	    try
	    {
	        initComponents();
	        appParent = inAppParent;
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

		JLabel1.setText("Torso:");
		JLabel1.setLocation(10, 60);
		JLabel1.setVisible(true);
		JLabel1.setSize(400, 20);

		JLabel2.setText("Arms:");
		JLabel2.setLocation(9, 100);
		JLabel2.setVisible(true);
		JLabel2.setSize(400, 20);

		JLabel3.setText("Legs:");
		JLabel3.setLocation(9, 135);
		JLabel3.setVisible(true);
		JLabel3.setSize(400, 20);

		JLabel4.setText("Neck:");
		JLabel4.setLocation(10, 180);
		JLabel4.setVisible(true);
		JLabel4.setSize(400, 20);

		JLabel5.setText("Eyes:");
		JLabel5.setLocation(10, 220);
		JLabel5.setVisible(true);
		JLabel5.setSize(400, 20);

		JLabel6.setText("Waist:");
		JLabel6.setLocation(10, 260);
		JLabel6.setVisible(true);
		JLabel6.setSize(400, 20);

		JLabel7.setText("Hands:");
		JLabel7.setLocation(10, 300);
		JLabel7.setVisible(true);
		JLabel7.setSize(400, 20);

		JLabel9.setText("Wielded:");
		JLabel9.setLocation(10, 340);
		JLabel9.setVisible(true);
		JLabel9.setSize(400, 20);

		JLabel8.setText("Equipment");
		JLabel8.setLocation(10, 0);
		JLabel8.setHorizontalAlignment(JLabel.CENTER);
		JLabel8.setVisible(true);
		JLabel8.setSize(280, 20);

		setLocation(0, 0);
		setTitle("Equipment");
		getContentPane().setLayout(null);
		getContentPane().setSize(300, 440);
		getContentPane().add(chcSkull);
		getContentPane().add(chcArms);
		getContentPane().add(chcEyes);
		getContentPane().add(chcTorso);
		getContentPane().add(chcLegs);
		getContentPane().add(chcNeck);
		getContentPane().add(chcWaist);
		getContentPane().add(chcHands);
		getContentPane().add(chcWield);
		getContentPane().add(lblSkull);
		getContentPane().add(JLabel1);
		getContentPane().add(JLabel2);
		getContentPane().add(JLabel3);
		getContentPane().add(JLabel4);
		getContentPane().add(JLabel5);
		getContentPane().add(JLabel6);
		getContentPane().add(JLabel7);
		getContentPane().add(JLabel8);
		getContentPane().add(JLabel9);
		
		chcWield.addActionListener(this);
		chcArms.addActionListener(this);
		chcLegs.addActionListener(this);
		chcTorso.addActionListener(this);
		chcWaist.addActionListener(this);
		chcNeck.addActionListener(this);
		chcSkull.addActionListener(this);
		chcEyes.addActionListener(this);
		chcHands.addActionListener(this);
		
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
			appParent.addText("Error at Equip(): "+e.toString()+"\n");
		}
	}
}