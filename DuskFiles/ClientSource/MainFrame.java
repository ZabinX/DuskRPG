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
import java.util.StringTokenizer;
import javax.swing.text.Document;


public class MainFrame extends JFrame implements ItemListener
{
	JPanel pnlContents = new JPanel();
	JPanel pnlStats = new JPanel();
	JButton btnMerchant = new JButton();
	JLabel lblInfo = new JLabel();
        JLabel lblBookc = new JLabel(new ImageIcon(getClass().getClassLoader().getResource("zbookc.png")));
        JLabel lblBooke = new JLabel(new ImageIcon(getClass().getClassLoader().getResource("zbooke.png")));
        JLabel lblBookw = new JLabel(new ImageIcon(getClass().getClassLoader().getResource("zbookw.png")));
        JLabel lblTarget = new JLabel("Target:");
	JComboBox chcAttack = new JComboBox();
	JComboBox chcAction = new JComboBox();
	JComboBox chcLook = new JComboBox();
	JComboBox chcGet = new JComboBox();
	JComboBox chcDrop = new JComboBox();
        JButton btnPotion = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zpotion.png")));
        JButton btnPotion2 = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zpotion2.png")));
        JButton btnPotion3 = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zpotion3.png")));
        JButton btnPotion4 = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zpotion4.png")));
	JButton btnMend = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zmagiccmend.png")));
        JButton btnPoison = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zmagiccpoison.png")));
        JButton btnArmor = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zmagiccarmor.png")));
        JButton btnBless = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zmagiccbless.png")));
        JButton btnDrink = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zmagiccdrink.png")));
        JButton btnFood = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zmagiccfood.png")));
        JButton btnHeal = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zmagiccheal.png")));
        JButton btnDetectinvis = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zmagicedetectinvis.png")));
        JButton btnInvis = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zmagiceinvis.png")));
        JButton btnRegenerate = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zmagiceregenerate.png")));
        JButton btnTerror = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zmagiceterror.png")));
        JButton btnHarden = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zmagicwharden.png")));
        JButton btnEndurance = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zmagicwendurance.png")));
        JButton btnCourage = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zmagicwcourage.png")));
        JButton btnFear = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zbookw.png")));
        JButton btnStrength = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zmagicwstrength.png")));
        JButton btnWeaken = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zbookw.png")));
        JButton btnApple = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zapple.png")));
        JButton btnBeer = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zbeer.png")));
        JButton btnSandwich = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zsandwich.png")));
        JButton btnScroll = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zscroll.png")));
        JButton btnUp = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zup.png")));
        JButton btnDown = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zdown.png")));
        JButton btnLeft = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zleft.png")));
        JButton btnRight = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zright.png")));
        JScrollPane scrTextOther = new JScrollPane();
	JTextArea txtOther = new JTextArea();
	JButton btnQuit = new JButton();
	JButton btnConnect = new JButton();
	JButton btnEquipment = new JButton();
        JButton btnPopupon = new JButton(new ImageIcon(getClass().getClassLoader().getResource("ztick.png")));
        JButton btnPopupoff = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zcancel.png")));
        JButton btnSleep = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zsleep.png")));
        JButton btnWake = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zeye.png")));
	JPanel pnlGraphics = new JPanel();
	JTextField txtInput = new JTextField();
	JTextArea txtOutput = new JTextArea();
	JScrollPane scrText = new JScrollPane();
        Document docOutput;
	EquipmentFrame frmEquipment;
	ConnectFrame frmConnect;
	Dusk appParent;
	
	public MainFrame(Dusk inParent)
	{
		appParent = inParent;
	}

	public void initComponents() throws Exception
	{
		pnlStats.setLocation(new java.awt.Point(330, 0));
		pnlStats.setVisible(true);
		pnlStats.setLayout(null);
		pnlStats.setSize(new java.awt.Dimension(310, 330));
		pnlStats.add(btnMerchant);
		pnlStats.add(lblInfo);
                pnlStats.add(lblBookc);
                pnlStats.add(lblBooke);
                pnlStats.add(lblBookw);
                pnlStats.add(lblTarget);
		pnlStats.add(chcAttack);
		pnlStats.add(chcAction);
		pnlStats.add(chcLook);
		pnlStats.add(chcGet);
		pnlStats.add(chcDrop);
                pnlStats.add(btnPotion);
                pnlStats.add(btnPotion2);
                pnlStats.add(btnPotion3);
                pnlStats.add(btnPotion4);
                pnlStats.add(btnMend);
                pnlStats.add(btnPoison);
                pnlStats.add(btnArmor);
                pnlStats.add(btnBless);
                pnlStats.add(btnDrink);
                pnlStats.add(btnFood);
                pnlStats.add(btnHeal);
                pnlStats.add(btnDetectinvis);
                pnlStats.add(btnInvis);
                pnlStats.add(btnRegenerate);
                pnlStats.add(btnTerror);
                pnlStats.add(btnHarden);
                pnlStats.add(btnEndurance);
                pnlStats.add(btnCourage);
                pnlStats.add(btnFear);
                pnlStats.add(btnStrength);
                pnlStats.add(btnWeaken);
                pnlStats.add(btnApple);
                pnlStats.add(btnBeer);
                pnlStats.add(btnSandwich);
                pnlStats.add(btnScroll);
                pnlStats.add(btnUp);
                pnlStats.add(btnDown);
                pnlStats.add(btnLeft);
                pnlStats.add(btnRight);
		pnlStats.add(scrTextOther);
		pnlStats.add(btnQuit);
                pnlStats.add(btnPopupon);
                pnlStats.add(btnPopupoff);
                pnlStats.add(btnSleep);
                pnlStats.add(btnWake);
		pnlStats.add(btnEquipment);
		if (!appParent.blnApplet)
		pnlStats.add(btnConnect);
		
		pnlContents.setLayout(null);
		pnlContents.setVisible(true);

		btnMerchant.setText("Merchant");
		btnMerchant.setLocation(new java.awt.Point(140, 60));
		btnMerchant.setVisible(true);
		btnMerchant.setSize(new java.awt.Dimension(120, 60));
		btnMerchant.setEnabled(false);

		lblInfo.setLocation(new java.awt.Point(10, 520));
                lblInfo.setFont(new Font("Serif", Font.PLAIN, 20));
		lblInfo.setVisible(true);
		lblInfo.setSize(new java.awt.Dimension(290, 40));
                
                lblBookc.setLocation(new java.awt.Point(10, 370));
		lblBookc.setVisible(true);
		lblBookc.setSize(new java.awt.Dimension(32, 32));
                
                lblBooke.setLocation(new java.awt.Point(10, 420));
		lblBooke.setVisible(true);
		lblBooke.setSize(new java.awt.Dimension(32, 32));
                
                lblBookw.setLocation(new java.awt.Point(10, 470));
		lblBookw.setVisible(true);
		lblBookw.setSize(new java.awt.Dimension(32, 32));

		chcAttack.setLocation(new java.awt.Point(10, 130));
		chcAttack.setVisible(true);
		chcAttack.setSize(new java.awt.Dimension(120, 20));

		chcAction.setLocation(new java.awt.Point(10, 160));
		chcAction.setVisible(true);
		chcAction.setSize(new java.awt.Dimension(120, 20));

		chcLook.setLocation(new java.awt.Point(10, 190));
		chcLook.setVisible(true);
		chcLook.setSize(new java.awt.Dimension(120, 20));

		chcGet.setLocation(new java.awt.Point(10, 220));
		chcGet.setVisible(true);
		chcGet.setSize(new java.awt.Dimension(120, 20));

		chcDrop.setLocation(new java.awt.Point(10, 250));
		chcDrop.setVisible(true);
		chcDrop.setSize(new java.awt.Dimension(120, 20));
                
                btnPotion.setLocation(new java.awt.Point(10, 290));
		btnPotion.setVisible(true);
		btnPotion.setSize(new java.awt.Dimension(64, 64));
                
                btnPotion2.setLocation(new java.awt.Point(82, 290));
		btnPotion2.setVisible(true);
		btnPotion2.setSize(new java.awt.Dimension(64, 64));
                
                btnPotion3.setLocation(new java.awt.Point(154, 290));
		btnPotion3.setVisible(true);
		btnPotion3.setSize(new java.awt.Dimension(64, 64));
                
                btnPotion4.setLocation(new java.awt.Point(226, 290));
		btnPotion4.setVisible(true);
		btnPotion4.setSize(new java.awt.Dimension(64, 64));

                btnMend.setLocation(new java.awt.Point(60, 370));
		btnMend.setVisible(true);
		btnMend.setSize(new java.awt.Dimension(32, 32));
                
                btnPoison.setLocation(new java.awt.Point(100, 370));
		btnPoison.setVisible(true);
		btnPoison.setSize(new java.awt.Dimension(32, 32));
                
                btnArmor.setLocation(new java.awt.Point(140, 370));
		btnArmor.setVisible(true);
		btnArmor.setSize(new java.awt.Dimension(32, 32));
                
                btnBless.setLocation(new java.awt.Point(180, 370));
		btnBless.setVisible(true);
		btnBless.setSize(new java.awt.Dimension(32, 32));
                
                btnDrink.setLocation(new java.awt.Point(220, 370));
		btnDrink.setVisible(true);
		btnDrink.setSize(new java.awt.Dimension(32, 32));
                
                btnFood.setLocation(new java.awt.Point(260, 370));
		btnFood.setVisible(true);
		btnFood.setSize(new java.awt.Dimension(32, 32));
                
                btnHeal.setLocation(new java.awt.Point(300, 370));
		btnHeal.setVisible(true);
		btnHeal.setSize(new java.awt.Dimension(32, 32));
                
                btnDetectinvis.setLocation(new java.awt.Point(60, 420));
		btnDetectinvis.setVisible(true);
		btnDetectinvis.setSize(new java.awt.Dimension(32, 32));
                
                btnInvis.setLocation(new java.awt.Point(100, 420));
		btnInvis.setVisible(true);
		btnInvis.setSize(new java.awt.Dimension(32, 32));
                
                btnRegenerate.setLocation(new java.awt.Point(140, 420));
		btnRegenerate.setVisible(true);
		btnRegenerate.setSize(new java.awt.Dimension(32, 32));
                
                btnTerror.setLocation(new java.awt.Point(180, 420));
		btnTerror.setVisible(true);
		btnTerror.setSize(new java.awt.Dimension(32, 32));
                
                btnHarden.setLocation(new java.awt.Point(60, 470));
		btnHarden.setVisible(true);
		btnHarden.setSize(new java.awt.Dimension(32, 32));
                
                btnEndurance.setLocation(new java.awt.Point(100, 470));
		btnEndurance.setVisible(true);
		btnEndurance.setSize(new java.awt.Dimension(32, 32));
                
                btnCourage.setLocation(new java.awt.Point(140, 470));
		btnCourage.setVisible(true);
		btnCourage.setSize(new java.awt.Dimension(32, 32));
                
                btnFear.setLocation(new java.awt.Point(180, 470));
		btnFear.setVisible(true);
		btnFear.setSize(new java.awt.Dimension(32, 32));
                
                btnStrength.setLocation(new java.awt.Point(220, 470));
		btnStrength.setVisible(true);
		btnStrength.setSize(new java.awt.Dimension(32, 32));
                
                btnWeaken.setLocation(new java.awt.Point(260, 470));
		btnWeaken.setVisible(true);
		btnWeaken.setSize(new java.awt.Dimension(32, 32));
                
                btnApple.setLocation(new java.awt.Point(350, 290));
		btnApple.setVisible(true);
		btnApple.setSize(new java.awt.Dimension(32, 32));
                
                btnBeer.setLocation(new java.awt.Point(390, 290));
		btnBeer.setVisible(true);
		btnBeer.setSize(new java.awt.Dimension(32, 32));
                
                btnSandwich.setLocation(new java.awt.Point(430, 290));
		btnSandwich.setVisible(true);
		btnSandwich.setSize(new java.awt.Dimension(32, 32));
                
                btnScroll.setLocation(new java.awt.Point(470, 290));
		btnScroll.setVisible(true);
		btnScroll.setSize(new java.awt.Dimension(32, 32));
                
                btnUp.setLocation(new java.awt.Point(396, 368));
		btnUp.setVisible(true);
		btnUp.setSize(new java.awt.Dimension(64, 64));
                
                btnDown.setLocation(new java.awt.Point(396, 496));
		btnDown.setVisible(true);
		btnDown.setSize(new java.awt.Dimension(64, 64));
                
                btnLeft.setLocation(new java.awt.Point(332, 432));
		btnLeft.setVisible(true);
		btnLeft.setSize(new java.awt.Dimension(64, 64));
                
                btnRight.setLocation(new java.awt.Point(460, 432));
		btnRight.setVisible(true);
		btnRight.setSize(new java.awt.Dimension(64, 64));
                
		scrTextOther.setLocation(new java.awt.Point(140, 60));
		scrTextOther.setVisible(true);
		scrTextOther.setSize(new java.awt.Dimension(150, 500));
		scrTextOther.getViewport().add(txtOther);

		txtOther.setVisible(true);
                
                lblTarget.setLocation(new Point(10, 540));
                lblTarget.setFont(new Font("Serif", Font.PLAIN, 20));
                lblTarget.setVisible(true);
                lblTarget.setSize(new Dimension(140, 40));
                
		btnQuit.setText("Quit");
		btnQuit.setLocation(new java.awt.Point(400, 60));
		btnQuit.setVisible(true);
		btnQuit.setSize(new java.awt.Dimension(90, 60));
                
		btnPopupon.setLocation(new java.awt.Point(350, 240));
		btnPopupon.setVisible(true);
		btnPopupon.setSize(new java.awt.Dimension(32, 32));
                
		btnPopupoff.setLocation(new java.awt.Point(390, 240));
		btnPopupoff.setVisible(true);
		btnPopupoff.setSize(new java.awt.Dimension(32, 32));
                
                btnSleep.setLocation(new java.awt.Point(430, 240));
		btnSleep.setVisible(true);
		btnSleep.setSize(new java.awt.Dimension(32, 32));
                
                btnWake.setLocation(new java.awt.Point(470, 240));
		btnWake.setVisible(true);
		btnWake.setSize(new java.awt.Dimension(32, 32));

		btnEquipment.setText("Equipment");
		btnEquipment.setLocation(new java.awt.Point(270, 60));
		btnEquipment.setVisible(true);
		btnEquipment.setSize(new java.awt.Dimension(120, 60));
		
		btnConnect.setText("Connect");
		btnConnect.setLocation(new java.awt.Point(10, 60));
		btnConnect.setVisible(true);
		btnConnect.setSize(new java.awt.Dimension(120, 60));

		pnlGraphics.setLocation(new java.awt.Point(0, 0));
		pnlGraphics.setVisible(true);
		pnlGraphics.setLayout(null);
		pnlGraphics.setSize(new java.awt.Dimension(330, 330));

		txtInput.setText("Enter text here");
		txtInput.setLocation(new java.awt.Point(0, 330));
		txtInput.setVisible(true);
		txtInput.setSize(new java.awt.Dimension(640, 25));

		txtOutput.setLocation(new java.awt.Point(1, 1));
		txtOutput.setVisible(true);
		txtOutput.setSize(new java.awt.Dimension(638, 118));
		txtOutput.setEditable(false);
                docOutput = txtOutput.getDocument();

		scrText.setLocation(new java.awt.Point(0, 360));
		scrText.setVisible(true);
		scrText.setSize(new java.awt.Dimension(640, 120));
		scrText.getViewport().add(txtOutput);

		setLocation(new java.awt.Point(0, 0));
		setTitle("Dusk");
		getContentPane().setLayout(new BorderLayout());
		setSize(new java.awt.Dimension(1280, 720));
		getContentPane().add(pnlContents, BorderLayout.CENTER);
		pnlContents.add(pnlGraphics);
		pnlContents.add(txtInput);
		pnlContents.add(scrText);
		pnlContents.add(pnlStats);
                
		chcAttack.addItemListener(this);
		chcAction.addItemListener(this);
		chcLook.addItemListener(this);
		chcGet.addItemListener(this);
		chcDrop.addItemListener(this);

		btnPotion.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnPotionActionPerformed(e);
			}
		});
                btnPotion2.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnPotion2ActionPerformed(e);
			}
		});
                btnPotion3.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnPotion3ActionPerformed(e);
			}
		});
                btnPotion4.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnPotion4ActionPerformed(e);
			}
		});
                btnMend.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnMendActionPerformed(e);
			}
		});
                btnPoison.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnPoisonActionPerformed(e);
			}
		});
                btnArmor.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnArmorActionPerformed(e);
			}
		});
		btnBless.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnBlessActionPerformed(e);
			}
		});
                btnDrink.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnDrinkActionPerformed(e);
			}
		});
                btnFood.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnFoodActionPerformed(e);
			}
		});
                btnHeal.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnHealActionPerformed(e);
			}
		});
                btnDetectinvis.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnDetectinvisActionPerformed(e);
			}
		});
                btnInvis.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnInvisActionPerformed(e);
			}
		});
                btnRegenerate.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnRegenerateActionPerformed(e);
			}
		}); 
                btnTerror.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnTerrorActionPerformed(e);
			}
		});
                btnHarden.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnHardenActionPerformed(e);
			}
		});
                btnEndurance.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnEnduranceActionPerformed(e);
			}
		});
                btnCourage.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnCourageActionPerformed(e);
			}
		});
                btnFear.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnFearActionPerformed(e);
			}
		});
                btnStrength.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnStrengthActionPerformed(e);
			}
		});
                btnWeaken.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnWeakenActionPerformed(e);
			}
		});
                btnApple.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnAppleActionPerformed(e);
			}
		});
                btnBeer.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnBeerActionPerformed(e);
			}
		});
                btnSandwich.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnSandwichActionPerformed(e);
			}
		});
                btnScroll.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnScrollActionPerformed(e);
			}
		});
                btnUp.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnUpActionPerformed(e);
			}
		});
                btnDown.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnDownActionPerformed(e);
			}
		});
                btnLeft.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnLeftActionPerformed(e);
			}
		});
                btnRight.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnRightActionPerformed(e);
			}
		});
                btnMerchant.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnMerchantActionPerformed(e);
			}
		});
		btnQuit.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnQuitActionPerformed(e);
			}
		});
                btnPopupon.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnPopuponActionPerformed(e);
			}
		});
                btnPopupoff.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnPopupoffActionPerformed(e);
			}
		});
                btnSleep.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnSleepActionPerformed(e);
			}
		});
                btnWake.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnWakeActionPerformed(e);
			}
		});
		btnEquipment.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnEquipmentActionPerformed(e);
			}
		});
		btnConnect.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnConnectActionPerformed(e);
			}
		});
		addWindowListener(new java.awt.event.WindowAdapter() {
                        @Override
			public void windowClosing(java.awt.event.WindowEvent e) {
				thisWindowClosing(e);
			}
		});
		frmEquipment = new EquipmentFrame(appParent);
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
		dispose();
		System.exit(0);
	}
	
        public void btnPotionActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("use minormend\n");
                }catch(IOException exc){}
        }
        
        public void btnPotion2ActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("use mendpotion\n");
                }catch(IOException exc){}
        }
        
        public void btnPotion3ActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("use minormana\n");
                }catch(IOException exc){}
        }
        
        public void btnPotion4ActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("use manapotion\n");
                }catch(IOException exc){}
        }
        public void btnMendActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("cast mend\n");
                }catch(IOException exc){}
        }
        public void btnPoisonActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("cast antipoison\n");
                }catch(IOException exc){}
        }
        public void btnArmorActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("cast armor\n");
                }catch(IOException exc){}
        }
        public void btnBlessActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("cast bless\n");
                }catch(IOException exc){}
        }
        public void btnDrinkActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("cast create_drink\n");
                }catch(IOException exc){}
        }
        public void btnFoodActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("cast create_food\n");
                }catch(IOException exc){}
        }
        public void btnHealActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("cast heal\n");
                }catch(IOException exc){}
        }
        public void btnDetectinvisActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("cast detect_invis\n");
                }catch(IOException exc){}
        }
        public void btnInvisActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("cast invis\n");
                }catch(IOException exc){}
        }
        public void btnRegenerateActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("cast regenerate\n");
                }catch(IOException exc){}
        }
        public void btnTerrorActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("cast terror\n");
                }catch(IOException exc){}
        }
        public void btnHardenActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("cast harden\n");
                }catch(IOException exc){}
        }
        public void btnEnduranceActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("cast endurance\n");
                }catch(IOException exc){}
        }
        public void btnCourageActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("cast courage\n");
                }catch(IOException exc){}
        }
        public void btnFearActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("cast fear\n");
                }catch(IOException exc){}
        }
        public void btnStrengthActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("cast strength\n");
                }catch(IOException exc){}
        }
        public void btnWeakenActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("cast weaken\n");
                }catch(IOException exc){}
        }
        public void btnAppleActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("use apple\n");
                }catch(IOException exc){}
        } 
        public void btnBeerActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("use ale\n");
                }catch(IOException exc){}
        }
        public void btnSandwichActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("use sandwich\n");
                }catch(IOException exc){}
        }
        public void btnScrollActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("use recall\n");
                }catch(IOException exc){}
        }
        public void btnUpActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("n\n");
                }catch(IOException exc){}
        }
        public void btnDownActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("s\n");
                }catch(IOException exc){}
        }
        public void btnLeftActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("w\n");
                }catch(IOException exc){}
        }
        public void btnRightActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("e\n");
                }catch(IOException exc){}
        }
	public void btnMerchantActionPerformed(java.awt.event.ActionEvent e)
	{
		appParent.frmMerchant.show();
		appParent.frmMerchant.setSize(300,120);
	}
	
	public void btnEquipmentActionPerformed(java.awt.event.ActionEvent e)
	{
		frmEquipment.show();
		frmEquipment.setSize(300, 440);
	}
	
	public void btnConnectActionPerformed(java.awt.event.ActionEvent e)
	{
		frmConnect.show();
		frmConnect.setSize(350, 200);
	}
	
	public void btnQuitActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("quit\n");
		}catch(Exception exc){}
		try
		{
			appParent.sckConnection.close();
		}catch (Exception exc){}
		try
		{
			appParent.imgOriginalSprites.flush();
			appParent.imgOriginalPlayers.flush();
			appParent.imgOriginalMap.flush();
			appParent.imgSprites.flush();
			appParent.imgPlayers.flush();
			appParent.imgMap.flush();
		}catch(Exception exc) {}
		System.gc();
		if (appParent.blnApplet)
		{
			appParent.appShell.destroy();
		}else
		{
			System.exit(0);
		}
	}
        
        public void btnPopuponActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("popup on\n");
                }catch(IOException exc){}
        }
        
        public void btnPopupoffActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("popup off\n");
                }catch(IOException exc){}
        }
                
        public void btnSleepActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("sleep\n");
                }catch(IOException exc){}
        }
        
        public void btnWakeActionPerformed(java.awt.event.ActionEvent e)
	{
		try
		{
			if (appParent.blnConnected)
				appParent.stmOut.writeBytes("wake\n");
                }catch(IOException exc){}
        }
	
	public void itemStateChanged (ItemEvent evt)
	{
		if (appParent.blnMenuRefresh || evt.getStateChange() == ItemEvent.SELECTED)
			return;
		try
		{
			if (evt.getSource() == chcAttack)
			{
				String strStore = (String)chcAttack.getSelectedItem();
				int i = strStore.lastIndexOf(">");
				if (i>0)
				{
					strStore = strStore.substring(i+1,strStore.length());
				}
				appParent.stmOut.writeBytes("a "+strStore +"\n");
				appParent.blnMenuRefresh = true;
				chcAttack.setSelectedIndex(0);
				appParent.blnMenuRefresh = false;
			}else if (evt.getSource() == chcAction)
			{
				appParent.stmOut.writeBytes((String)chcAction.getSelectedItem()+"\n");
				appParent.blnMenuRefresh = true;
				chcAction.setSelectedIndex(0);
				appParent.blnMenuRefresh = false;
			}else if (evt.getSource() == chcLook)
			{
				String strStore = (String)chcLook.getSelectedItem();
				StringTokenizer tknStore = new StringTokenizer(strStore, ">");
				while(tknStore.countTokens() > 0)
				{
					strStore = tknStore.nextToken();
				}
				appParent.stmOut.writeBytes("look "+strStore+"\n");
				appParent.blnMenuRefresh = true;
				chcLook.setSelectedIndex(0);
				appParent.blnMenuRefresh = false;
			}else if (evt.getSource() == chcGet)
			{
				String strStore = (String)chcGet.getSelectedItem();
				appParent.stmOut.writeBytes("get "+strStore+"\n");
				appParent.blnMenuRefresh = true;
				chcGet.setSelectedIndex(0);
				appParent.blnMenuRefresh = false;
			}else if (evt.getSource() == chcDrop)
			{
				String strStore = (String)chcDrop.getSelectedItem();
				appParent.stmOut.writeBytes("drop "+strStore+"\n");
				appParent.blnMenuRefresh = true;
				chcDrop.setSelectedIndex(0);
				appParent.blnMenuRefresh = false;
			}
		}catch (Exception e)
		{
			System.out.println("Error at MainFrame.actionPerformed(): " + e.toString());
		}
	}
}
