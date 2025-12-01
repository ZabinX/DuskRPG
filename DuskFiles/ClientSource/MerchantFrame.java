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

class MerchantFrame extends JFrame implements MouseListener
{
	Dusk appParent;
	JButton btnBuy,
			btnSell;
	JComboBox chcBuy,
			chcSell;
	JTextField txtQuantity;
	JLabel lblQuantity;
	
	public MerchantFrame(Dusk inParent)
	{
		appParent = inParent;
		setTitle("Merchant");
		chcBuy = new JComboBox();
		chcBuy.setLocation(0,20);
		chcBuy.setSize(150,20);
		chcBuy.setVisible(true);
		chcSell = new JComboBox();
		chcSell.setLocation(150,20);
		chcSell.setSize(150,20);
		chcSell.setVisible(true);
		txtQuantity = new JTextField();
		txtQuantity.setLocation(150,40);
		txtQuantity.setSize(75,20);
		txtQuantity.setText("1");
		txtQuantity.setVisible(true);
		lblQuantity = new JLabel();
		lblQuantity.setText("Quantity:");
		lblQuantity.setLocation(75,40);
		lblQuantity.setSize(75,20);
		lblQuantity.setVisible(true);
		lblQuantity.setHorizontalAlignment(JLabel.RIGHT);
		btnBuy = new JButton();
		btnBuy.setLabel("Buy");
		btnBuy.setLocation(80,60);
		btnBuy.setSize(70,20);
		btnBuy.setVisible(true);
		btnSell = new JButton();
		btnSell.setLabel("Sell");
		btnSell.setLocation(150,60);
		btnSell.setSize(70,20);
		btnSell.setVisible(true);
		
		setLocation(20,20);
		getContentPane().setLayout(null);
		getContentPane().add(chcBuy);
		getContentPane().add(chcSell);
		getContentPane().add(txtQuantity);
		getContentPane().add(lblQuantity);
		getContentPane().add(btnBuy);
		getContentPane().add(btnSell);
		btnBuy.addMouseListener(this);
		btnSell.addMouseListener(this);
		
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
		if (evt.getComponent() == btnBuy)
		{
			String strStore = (String)chcBuy.getSelectedItem();
			strStore = strStore.substring(strStore.indexOf(")")+1);
			appParent.sendMessage("buy "+txtQuantity.getText()+" "+strStore);
		}else if (evt.getComponent() == btnSell)
		{
			String strStore = (String)chcSell.getSelectedItem();
			strStore = strStore.substring(strStore.indexOf(")")+1);
			appParent.sendMessage("sell "+txtQuantity.getText()+" "+strStore);
		}
	}
	public void mouseEntered(MouseEvent evt) {}
	public void mouseExited(MouseEvent evt) {}
	
	void thisWindowClosing(WindowEvent e)
	{
		setVisible(false);
	}
}