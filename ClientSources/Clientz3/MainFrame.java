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
import javax.swing.JTextPane;
import java.util.StringTokenizer;
import javax.swing.text.Document;


import javax.swing.JLayeredPane;

public class MainFrame extends JFrame implements ItemListener
{
	JLayeredPane pnlContents = new JLayeredPane();
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
    JButton btnSoundOn = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zsoundOnWhite.png")));
    JButton btnSoundOff = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zsoundOffWhite.png")));
    JButton btnLightning1 = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zthunder1.png")));
    JButton btnLightning2 = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zthunder2.png")));
    JButton btnLightning3 = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zthunder3.png")));
    JButton btnIce1 = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zblizzard1.png")));
    JButton btnIce2 = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zblizzard2.png")));
    JButton btnIce3 = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zblizzard3.png")));
    JButton btnFire1 = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zexplosion1.png")));
    JButton btnFire2 = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zexplosion2.png")));
    JButton btnFire3 = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zexplosion3.png")));
    JScrollPane scrTextOther = new JScrollPane();
	JTextArea txtOther = new JTextArea();
	JButton btnQuit = new JButton();
	JButton btnConnect = new JButton();
	JButton btnEquipment = new JButton();
    JButton btnPopupon = new JButton(new ImageIcon(getClass().getClassLoader().getResource("ztick.png")));
    JButton btnPopupoff = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zcancel.png")));
    JButton btnSleep = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zsleep.png")));
    JButton btnWake = new JButton(new ImageIcon(getClass().getClassLoader().getResource("zeye.png")));
	public class GamePanel extends JPanel {
		public Image img;

		@Override
		protected void paintComponent(Graphics g) {
			super.paintComponent(g);
			if (img != null) {
				g.drawImage(img, 0, 0, this);
			}
		}
	}
	GamePanel pnlGraphics = new GamePanel();
	JTextField txtInput = new JTextField();

	// New components for the CardLayout-based tab system
	public JPanel pnlSouth = new JPanel();
	public CardLayout cardLayout = new CardLayout();
	public JTextPane txtGossip = new JTextPane();
	public JTextArea txtBattle = new JTextArea();
	public JScrollPane scrGossip = new JScrollPane();
	public JScrollPane scrBattle = new JScrollPane();
	public JButton btnGossip = new JButton("Gossip");
	public JButton btnBattle = new JButton("Battle");
    public Document docGossip;

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
                pnlStats.add(btnSoundOn);
                pnlStats.add(btnSoundOff);
                pnlStats.add(btnLightning1);
                pnlStats.add(btnLightning2);
                pnlStats.add(btnLightning3);
                pnlStats.add(btnIce1);
                pnlStats.add(btnIce2);
                pnlStats.add(btnIce3);
                pnlStats.add(btnFire1);
                pnlStats.add(btnFire2);
                pnlStats.add(btnFire3);
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
		btnMerchant.setLocation(new java.awt.Point(10, 90));
		btnMerchant.setVisible(true);
		btnMerchant.setSize(new java.awt.Dimension(120, 20));
		btnMerchant.setEnabled(false);

		lblInfo.setLocation(new java.awt.Point(10, 10));
                lblInfo.setFont(new Font("Serif", Font.PLAIN, 15));
		lblInfo.setVisible(true);
		lblInfo.setSize(new java.awt.Dimension(290, 40));

                lblBookc.setLocation(new java.awt.Point(10, 576));
		lblBookc.setVisible(true);
		lblBookc.setSize(new java.awt.Dimension(32, 32));

                lblBooke.setLocation(new java.awt.Point(10, 613));
		lblBooke.setVisible(true);
		lblBooke.setSize(new java.awt.Dimension(32, 32));

                lblBookw.setLocation(new java.awt.Point(10, 650));
		lblBookw.setVisible(true);
		lblBookw.setSize(new java.awt.Dimension(32, 32));

		chcAttack.setLocation(new java.awt.Point(10, 180));
		chcAttack.setVisible(true);
		chcAttack.setSize(new java.awt.Dimension(120, 20));

		chcAction.setLocation(new java.awt.Point(10, 210));
		chcAction.setVisible(true);
		chcAction.setSize(new java.awt.Dimension(120, 20));

		chcLook.setLocation(new java.awt.Point(10, 240));
		chcLook.setVisible(true);
		chcLook.setSize(new java.awt.Dimension(120, 20));

		chcGet.setLocation(new java.awt.Point(10, 270));
		chcGet.setVisible(true);
		chcGet.setSize(new java.awt.Dimension(120, 20));

		chcDrop.setLocation(new java.awt.Point(10, 300));
		chcDrop.setVisible(true);
		chcDrop.setSize(new java.awt.Dimension(120, 20));

                btnPotion.setLocation(new java.awt.Point(10, 330));
		btnPotion.setVisible(true);
		btnPotion.setSize(new java.awt.Dimension(32, 32));

                btnPotion2.setLocation(new java.awt.Point(47, 330));
		btnPotion2.setVisible(true);
		btnPotion2.setSize(new java.awt.Dimension(32, 32));

                btnPotion3.setLocation(new java.awt.Point(84, 330));
		btnPotion3.setVisible(true);
		btnPotion3.setSize(new java.awt.Dimension(32, 32));

                btnPotion4.setLocation(new java.awt.Point(121, 330));
		btnPotion4.setVisible(true);
		btnPotion4.setSize(new java.awt.Dimension(32, 32));

                btnMend.setLocation(new java.awt.Point(42, 576));
		btnMend.setVisible(true);
		btnMend.setSize(new java.awt.Dimension(32, 32));

                btnPoison.setLocation(new java.awt.Point(79, 576));
		btnPoison.setVisible(true);
		btnPoison.setSize(new java.awt.Dimension(32, 32));

                btnArmor.setLocation(new java.awt.Point(116, 576));
		btnArmor.setVisible(true);
		btnArmor.setSize(new java.awt.Dimension(32, 32));

                btnBless.setLocation(new java.awt.Point(153, 576));
		btnBless.setVisible(true);
		btnBless.setSize(new java.awt.Dimension(32, 32));

                btnDrink.setLocation(new java.awt.Point(190, 576));
		btnDrink.setVisible(true);
		btnDrink.setSize(new java.awt.Dimension(32, 32));

                btnFood.setLocation(new java.awt.Point(227, 576));
		btnFood.setVisible(true);
		btnFood.setSize(new java.awt.Dimension(32, 32));

                btnHeal.setLocation(new java.awt.Point(264, 576));
		btnHeal.setVisible(true);
		btnHeal.setSize(new java.awt.Dimension(32, 32));

                btnDetectinvis.setLocation(new java.awt.Point(42, 613));
		btnDetectinvis.setVisible(true);
		btnDetectinvis.setSize(new java.awt.Dimension(32, 32));

                btnInvis.setLocation(new java.awt.Point(79, 613));
		btnInvis.setVisible(true);
		btnInvis.setSize(new java.awt.Dimension(32, 32));

                btnRegenerate.setLocation(new java.awt.Point(116, 613));
		btnRegenerate.setVisible(true);
		btnRegenerate.setSize(new java.awt.Dimension(32, 32));

                btnTerror.setLocation(new java.awt.Point(153, 613));
		btnTerror.setVisible(true);
		btnTerror.setSize(new java.awt.Dimension(32, 32));

                btnHarden.setLocation(new java.awt.Point(42, 650));
		btnHarden.setVisible(true);
		btnHarden.setSize(new java.awt.Dimension(32, 32));

                btnEndurance.setLocation(new java.awt.Point(79, 650));
		btnEndurance.setVisible(true);
		btnEndurance.setSize(new java.awt.Dimension(32, 32));

                btnCourage.setLocation(new java.awt.Point(116, 650));
		btnCourage.setVisible(true);
		btnCourage.setSize(new java.awt.Dimension(32, 32));

                btnFear.setLocation(new java.awt.Point(153, 650));
		btnFear.setVisible(true);
		btnFear.setSize(new java.awt.Dimension(32, 32));

                btnStrength.setLocation(new java.awt.Point(190, 650));
		btnStrength.setVisible(true);
		btnStrength.setSize(new java.awt.Dimension(32, 32));

                btnWeaken.setLocation(new java.awt.Point(227, 650));
		btnWeaken.setVisible(true);
		btnWeaken.setSize(new java.awt.Dimension(32, 32));

                btnApple.setLocation(new java.awt.Point(10, 367));
		btnApple.setVisible(true);
		btnApple.setSize(new java.awt.Dimension(32, 32));

                btnBeer.setLocation(new java.awt.Point(47, 367));
		btnBeer.setVisible(true);
		btnBeer.setSize(new java.awt.Dimension(32, 32));

                btnSandwich.setLocation(new java.awt.Point(84, 367));
		btnSandwich.setVisible(true);
		btnSandwich.setSize(new java.awt.Dimension(32, 32));

                btnScroll.setLocation(new java.awt.Point(121, 367));
		btnScroll.setVisible(true);
		btnScroll.setSize(new java.awt.Dimension(32, 32));

                btnUp.setLocation(new java.awt.Point(242, 466));
		btnUp.setVisible(true);
		btnUp.setSize(new java.awt.Dimension(32, 32));

                btnDown.setLocation(new java.awt.Point(242, 530));
		btnDown.setVisible(true);
		btnDown.setSize(new java.awt.Dimension(32, 32));

                btnLeft.setLocation(new java.awt.Point(210, 498));
		btnLeft.setVisible(true);
		btnLeft.setSize(new java.awt.Dimension(32, 32));

                btnRight.setLocation(new java.awt.Point(274, 498));
		btnRight.setVisible(true);
		btnRight.setSize(new java.awt.Dimension(32, 32));

                btnSoundOn.setLocation(new java.awt.Point(135, 60));
		btnSoundOn.setVisible(true);
		btnSoundOn.setSize(new java.awt.Dimension(30, 30));

                btnSoundOff.setLocation(new java.awt.Point(135, 95));
		btnSoundOff.setVisible(true);
		btnSoundOff.setSize(new java.awt.Dimension(30, 30));

                btnLightning1.setLocation(new java.awt.Point(42, 539));
		btnLightning1.setVisible(true);
		btnLightning1.setSize(new java.awt.Dimension(32, 32));

                btnLightning2.setLocation(new java.awt.Point(79, 539));
		btnLightning2.setVisible(true);
		btnLightning2.setSize(new java.awt.Dimension(32, 32));

                btnLightning3.setLocation(new java.awt.Point(116, 539));
		btnLightning3.setVisible(true);
		btnLightning3.setSize(new java.awt.Dimension(32, 32));

                btnIce1.setLocation(new java.awt.Point(42, 502));
		btnIce1.setVisible(true);
		btnIce1.setSize(new java.awt.Dimension(32, 32));

                btnIce2.setLocation(new java.awt.Point(79, 502));
		btnIce2.setVisible(true);
		btnIce2.setSize(new java.awt.Dimension(32, 32));

                btnIce3.setLocation(new java.awt.Point(116, 502));
		btnIce3.setVisible(true);
		btnIce3.setSize(new java.awt.Dimension(32, 32));

                btnFire1.setLocation(new java.awt.Point(42, 465));
		btnFire1.setVisible(true);
		btnFire1.setSize(new java.awt.Dimension(32, 32));

                btnFire2.setLocation(new java.awt.Point(79, 465));
		btnFire2.setVisible(true);
		btnFire2.setSize(new java.awt.Dimension(32, 32));

                btnFire3.setLocation(new java.awt.Point(116, 465));
		btnFire3.setVisible(true);
		btnFire3.setSize(new java.awt.Dimension(32, 32));

		scrTextOther.setLocation(new java.awt.Point(170, 60));
		scrTextOther.setVisible(true);
		scrTextOther.setSize(new java.awt.Dimension(150, 380));
		scrTextOther.getViewport().add(txtOther);

		txtOther.setVisible(true);

                lblTarget.setLocation(new Point(10, 30));
                lblTarget.setFont(new Font("Serif", Font.PLAIN, 15));
                lblTarget.setVisible(true);
                lblTarget.setSize(new Dimension(140, 40));

		btnQuit.setText("Quit");
		btnQuit.setLocation(new java.awt.Point(40, 150));
		btnQuit.setVisible(true);
		btnQuit.setSize(new java.awt.Dimension(90, 20));

		btnPopupon.setLocation(new java.awt.Point(135, 130));
		btnPopupon.setVisible(true);
		btnPopupon.setSize(new java.awt.Dimension(32, 32));

		btnPopupoff.setLocation(new java.awt.Point(135, 167));
		btnPopupoff.setVisible(true);
		btnPopupoff.setSize(new java.awt.Dimension(32, 32));

                btnSleep.setLocation(new java.awt.Point(135, 204));
		btnSleep.setVisible(true);
		btnSleep.setSize(new java.awt.Dimension(32, 32));

                btnWake.setLocation(new java.awt.Point(135, 241));
		btnWake.setVisible(true);
		btnWake.setSize(new java.awt.Dimension(32, 32));

		btnEquipment.setText("Equipment");
		btnEquipment.setLocation(new java.awt.Point(10, 120));
		btnEquipment.setVisible(true);
		btnEquipment.setSize(new java.awt.Dimension(120, 20));

		btnConnect.setText("Connect");
		btnConnect.setLocation(new java.awt.Point(10, 60));
		btnConnect.setVisible(true);
		btnConnect.setSize(new java.awt.Dimension(120, 20));

		pnlGraphics.setLocation(new java.awt.Point(0, 0));
		pnlGraphics.setVisible(true);
		pnlGraphics.setLayout(null);
		pnlGraphics.setSize(new java.awt.Dimension(330, 330));

		txtInput.setText("Enter text here");
		txtInput.setLocation(new java.awt.Point(0, 330));
		txtInput.setVisible(true);
		txtInput.setSize(new java.awt.Dimension(640, 25));

		// Set up the new CardLayout panel
		pnlSouth.setLayout(cardLayout);
		pnlSouth.setLocation(new java.awt.Point(0, 360));
		pnlSouth.setSize(new java.awt.Dimension(640, 120));
		pnlSouth.setOpaque(false);

		txtGossip.setEditable(false);
		docGossip = txtGossip.getDocument();
		scrGossip.getViewport().add(txtGossip);
		scrGossip.setOpaque(false);
		scrGossip.getViewport().setOpaque(false);
		txtGossip.setOpaque(true);
		txtGossip.setBackground(new Color(0, 0, 0, 128));
		txtGossip.setCaretColor(Color.WHITE);

		txtBattle.setEditable(false);
		scrBattle.getViewport().add(txtBattle);
		scrBattle.setOpaque(false);
		scrBattle.getViewport().setOpaque(false);
		txtBattle.setOpaque(true);
		txtBattle.setBackground(new Color(0, 0, 0, 128));
		txtBattle.setForeground(new Color(255, 255, 240));
		txtBattle.setCaretColor(Color.WHITE);

		pnlSouth.add(scrGossip, "Gossip");
		pnlSouth.add(scrBattle, "Battle");

		setLocation(new java.awt.Point(0, 0));
		setTitle("Dusk");
		getContentPane().setLayout(new BorderLayout());
		setSize(new java.awt.Dimension(1280, 720));
		getContentPane().add(pnlContents, BorderLayout.CENTER);

		pnlContents.setLayout(null);
		pnlContents.add(pnlGraphics, JLayeredPane.DEFAULT_LAYER);
		pnlContents.add(txtInput, JLayeredPane.MODAL_LAYER);
		pnlContents.add(pnlSouth, JLayeredPane.MODAL_LAYER);
		pnlContents.add(btnGossip, JLayeredPane.MODAL_LAYER);
		pnlContents.add(btnBattle, JLayeredPane.MODAL_LAYER);
		pnlContents.add(pnlStats, JLayeredPane.DEFAULT_LAYER);

		chcAttack.addItemListener(this);
		chcAction.addItemListener(this);
		chcLook.addItemListener(this);
		chcGet.addItemListener(this);
		chcDrop.addItemListener(this);

		// Add ActionListeners for the new tab buttons
		btnGossip.addActionListener(new java.awt.event.ActionListener() {
			@Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				cardLayout.show(pnlSouth, "Gossip");
			}
		});

		btnBattle.addActionListener(new java.awt.event.ActionListener() {
			@Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				cardLayout.show(pnlSouth, "Battle");
			}
		});

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
                btnSoundOn.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnSoundOnActionPerformed(e);
			}
		});
                btnSoundOff.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnSoundOffActionPerformed(e);
			}
		});
                btnLightning1.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnLightning1ActionPerformed(e);
			}
		});
                btnLightning2.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnLightning2ActionPerformed(e);
			}
		});
                btnLightning3.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnLightning3ActionPerformed(e);
			}
		});
                btnIce1.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnIce1ActionPerformed(e);
			}
		});
                btnIce2.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnIce2ActionPerformed(e);
			}
		});
                btnIce3.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnIce3ActionPerformed(e);
			}
		});
                btnFire1.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnFire1ActionPerformed(e);
			}
		});
                btnFire2.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnFire2ActionPerformed(e);
			}
		});
                btnFire3.addActionListener(new java.awt.event.ActionListener() {
                        @Override
			public void actionPerformed(java.awt.event.ActionEvent e) {
				btnFire3ActionPerformed(e);
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
		if (appParent.blnConnected)
			appParent.sendMessage("use minormend");
        }

        public void btnPotion2ActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("use mendpotion");
        }

        public void btnPotion3ActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("use minormana");
        }

        public void btnPotion4ActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("use manapotion");
        }
        public void btnMendActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast mend");
        }
        public void btnPoisonActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast antipoison");
        }
        public void btnArmorActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast armor");
        }
        public void btnBlessActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast bless");
        }
        public void btnDrinkActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast create_drink");
        }
        public void btnFoodActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast create_food");
        }
        public void btnHealActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast heal");
        }
        public void btnDetectinvisActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast detect_invis");
        }
        public void btnInvisActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast invis");
        }
        public void btnRegenerateActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast regenerate");
        }
        public void btnTerrorActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast terror");
        }
        public void btnHardenActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast harden");
        }
        public void btnEnduranceActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast endurance");
        }
        public void btnCourageActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast courage");
        }
        public void btnFearActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast fear");
        }
        public void btnStrengthActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast strength");
        }
        public void btnWeakenActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast weaken");
        }
        public void btnAppleActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("use apple");
        }
        public void btnBeerActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("use ale");
        }
        public void btnSandwichActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("use sandwich");
        }
        public void btnScrollActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("use recall");
        }
        public void btnUpActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("n");
        }
        public void btnDownActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("s");
        }
        public void btnLeftActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("w");
        }
        public void btnRightActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("e");
        }
        public void btnSoundOnActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("audio on");
        }
        public void btnSoundOffActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("audio off");
        }
        public void btnLightning1ActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast shock");
        }
        public void btnLightning2ActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast ball lightning");
        }
        public void btnLightning3ActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast thor");
        }
        public void btnIce1ActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast ice shield");
        }
        public void btnIce2ActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast freeze");
        }
        public void btnIce3ActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast ice bolt");
        }
        public void btnFire1ActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast fire shield");
        }
        public void btnFire2ActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast burn");
        }
        public void btnFire3ActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("cast fire bolt");
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
				appParent.sendMessage("quit");
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
		if (appParent.blnConnected)
			appParent.sendMessage("popup on");
        }

        public void btnPopupoffActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("popup off");
        }

        public void btnSleepActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("sleep");
        }

        public void btnWakeActionPerformed(java.awt.event.ActionEvent e)
	{
		if (appParent.blnConnected)
			appParent.sendMessage("wake");
        }

	public void itemStateChanged (ItemEvent evt)
	{
		if (appParent.blnMenuRefresh || evt.getStateChange() == ItemEvent.SELECTED)
			return;
		if (evt.getSource() == chcAttack)
		{
			String strStore = (String)chcAttack.getSelectedItem();
			int i = strStore.lastIndexOf(">");
			if (i>0)
			{
				strStore = strStore.substring(i+1,strStore.length());
			}
			appParent.sendMessage("a "+strStore);
			appParent.blnMenuRefresh = true;
			chcAttack.setSelectedIndex(0);
			appParent.blnMenuRefresh = false;
		}else if (evt.getSource() == chcAction)
		{
			appParent.sendMessage((String)chcAction.getSelectedItem());
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
			appParent.sendMessage("look "+strStore);
			appParent.blnMenuRefresh = true;
			chcLook.setSelectedIndex(0);
			appParent.blnMenuRefresh = false;
		}else if (evt.getSource() == chcGet)
		{
			String strStore = (String)chcGet.getSelectedItem();
			appParent.sendMessage("get "+strStore);
			appParent.blnMenuRefresh = true;
			chcGet.setSelectedIndex(0);
			appParent.blnMenuRefresh = false;
		}else if (evt.getSource() == chcDrop)
		{
			String strStore = (String)chcDrop.getSelectedItem();
			appParent.sendMessage("drop "+strStore);
			appParent.blnMenuRefresh = true;
			chcDrop.setSelectedIndex(0);
			appParent.blnMenuRefresh = false;
		}
	}
}