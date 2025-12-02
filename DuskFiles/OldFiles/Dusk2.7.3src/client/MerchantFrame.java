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

public class MerchantFrame extends Frame implements MouseListener
{
	Dusk appParent;
	Button btnBuy,
			btnSell;
	Choice chcBuy,
			chcSell;
	TextField txtQuantity;
	Label lblQuantity;
	
	public MerchantFrame(Dusk inParent)
	{
		appParent = inParent;
		setTitle("Merchant");
		chcBuy = new Choice();
		chcBuy.setLocation(0,30);
		chcBuy.setSize(150,30);
		chcBuy.setVisible(true);
		chcSell = new Choice();
		chcSell.setLocation(150,30);
		chcSell.setSize(150,30);
		chcSell.setVisible(true);
		txtQuantity = new TextField();
		txtQuantity.setLocation(150,50);
		txtQuantity.setSize(75,30);
		txtQuantity.setText("1");
		txtQuantity.setVisible(true);
		txtQuantity.setBackground(appParent.frame.textbackground);
		lblQuantity = new Label();
		lblQuantity.setText("Quantity:");
		lblQuantity.setLocation(75,50);
		lblQuantity.setSize(75,30);
		lblQuantity.setVisible(true);
		lblQuantity.setAlignment(Label.RIGHT);
		btnBuy = new Button();
		btnBuy.setLabel("Buy");
		btnBuy.setLocation(80,70);
		btnBuy.setSize(70,30);
		btnBuy.setVisible(true);
		btnSell = new Button();
		btnSell.setLabel("Sell");
		btnSell.setLocation(150,70);
		btnSell.setSize(70,30);
		btnSell.setVisible(true);
		
		setLocation(20,20);
		setLayout(null);
		add(chcBuy);
		add(chcSell);
		add(txtQuantity);
		add(lblQuantity);
		add(btnBuy);
		add(btnSell);
		setBackground(appParent.frame.background);
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
		try
		{
			if (evt.getComponent() == btnBuy)
			{
				String strStore = (String)chcBuy.getSelectedItem();
				strStore = strStore.substring(strStore.indexOf(")")+1);
				appParent.stmOut.writeBytes("buy "+txtQuantity.getText()+" "+strStore+"\n");
			}else if (evt.getComponent() == btnSell)
			{
				String strStore = (String)chcSell.getSelectedItem();
				strStore = strStore.substring(strStore.indexOf(")")+1);
				appParent.stmOut.writeBytes("sell "+txtQuantity.getText()+" "+strStore+"\n");
			}
		}catch(Exception e){}
	}
	public void mouseEntered(MouseEvent evt) {}
	public void mouseExited(MouseEvent evt) {}
	
	void thisWindowClosing(WindowEvent e)
	{
		setVisible(false);
	}
}