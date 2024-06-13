(function(){var P$=Clazz.newPackage("_"),I$=[[0,'javax.swing.JPanel','javax.swing.JButton','javax.swing.JLabel','javax.swing.ImageIcon','javax.swing.JComboBox','javax.swing.JScrollPane','javax.swing.JTextArea','javax.swing.JTextField','java.awt.Point','java.awt.Dimension','java.awt.BorderLayout','java.awt.event.WindowAdapter',['.','.EquipmentFrame'],['.','.ConnectFrame'],'java.util.StringTokenizer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MainFrame", null, 'javax.swing.JFrame', 'java.awt.event.ItemListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pnlContents=Clazz.new_($I$(1,1));
this.pnlStats=Clazz.new_($I$(1,1));
this.btnMerchant=Clazz.new_($I$(2,1));
this.lblInfo=Clazz.new_($I$(3,1));
this.lblBookc=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zbookc.png")],$I$(4,1).c$$java_net_URL)],$I$(3,1).c$$javax_swing_Icon);
this.lblBooke=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zbooke.png")],$I$(4,1).c$$java_net_URL)],$I$(3,1).c$$javax_swing_Icon);
this.lblBookw=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zbookw.png")],$I$(4,1).c$$java_net_URL)],$I$(3,1).c$$javax_swing_Icon);
this.lblTarget=Clazz.new_($I$(3,1).c$$S,["Target:"]);
this.chcAttack=Clazz.new_($I$(5,1));
this.chcAction=Clazz.new_($I$(5,1));
this.chcLook=Clazz.new_($I$(5,1));
this.chcGet=Clazz.new_($I$(5,1));
this.chcDrop=Clazz.new_($I$(5,1));
this.btnPotion=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zpotion.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnPotion2=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zpotion2.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnPotion3=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zpotion3.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnPotion4=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zpotion4.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnMend=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zmagiccmend.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnPoison=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zmagiccpoison.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnArmor=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zmagiccarmor.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnBless=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zmagiccbless.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnDrink=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zmagiccdrink.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnFood=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zmagiccfood.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnHeal=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zmagiccheal.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnDetectinvis=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zmagicedetectinvis.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnInvis=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zmagiceinvis.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnRegenerate=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zmagiceregenerate.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnTerror=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zmagiceterror.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnHarden=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zmagicwharden.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnEndurance=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zmagicwendurance.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnCourage=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zmagicwcourage.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnFear=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zbookw.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnStrength=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zmagicwstrength.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnWeaken=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zbookw.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnApple=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zapple.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnBeer=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zbeer.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnSandwich=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zsandwich.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.btnScroll=Clazz.new_([Clazz.new_([this.getClass$().getClassLoader$().getResource$S("zscroll.png")],$I$(4,1).c$$java_net_URL)],$I$(2,1).c$$javax_swing_Icon);
this.scrTextOther=Clazz.new_($I$(6,1));
this.txtOther=Clazz.new_($I$(7,1));
this.btnQuit=Clazz.new_($I$(2,1));
this.btnConnect=Clazz.new_($I$(2,1));
this.btnEquipment=Clazz.new_($I$(2,1));
this.pnlGraphics=Clazz.new_($I$(1,1));
this.txtInput=Clazz.new_($I$(8,1));
this.txtOutput=Clazz.new_($I$(7,1));
this.scrText=Clazz.new_($I$(6,1));
this.mShown=false;
},1);

C$.$fields$=[['Z',['mShown'],'O',['pnlContents','javax.swing.JPanel','+pnlStats','btnMerchant','javax.swing.JButton','lblInfo','javax.swing.JLabel','+lblBookc','+lblBooke','+lblBookw','+lblTarget','chcAttack','javax.swing.JComboBox','+chcAction','+chcLook','+chcGet','+chcDrop','btnPotion','javax.swing.JButton','+btnPotion2','+btnPotion3','+btnPotion4','+btnMend','+btnPoison','+btnArmor','+btnBless','+btnDrink','+btnFood','+btnHeal','+btnDetectinvis','+btnInvis','+btnRegenerate','+btnTerror','+btnHarden','+btnEndurance','+btnCourage','+btnFear','+btnStrength','+btnWeaken','+btnApple','+btnBeer','+btnSandwich','+btnScroll','scrTextOther','javax.swing.JScrollPane','txtOther','javax.swing.JTextArea','btnQuit','javax.swing.JButton','+btnConnect','+btnEquipment','pnlGraphics','javax.swing.JPanel','txtInput','javax.swing.JTextField','txtOutput','javax.swing.JTextArea','scrText','javax.swing.JScrollPane','docOutput','javax.swing.text.Document','frmEquipment','_.EquipmentFrame','frmConnect','_.ConnectFrame','appParent','_.Dusk']]]

Clazz.newMeth(C$, 'c$$__Dusk',  function (inParent) {
Clazz.super_(C$, this);
this.appParent=inParent;
}, 1);

Clazz.newMeth(C$, 'initComponents$',  function () {
this.pnlStats.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[330, 0]));
this.pnlStats.setVisible$Z(true);
this.pnlStats.setLayout$java_awt_LayoutManager(null);
this.pnlStats.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[310, 330]));
this.pnlStats.add$java_awt_Component(this.btnMerchant);
this.pnlStats.add$java_awt_Component(this.lblInfo);
this.pnlStats.add$java_awt_Component(this.lblBookc);
this.pnlStats.add$java_awt_Component(this.lblBooke);
this.pnlStats.add$java_awt_Component(this.lblBookw);
this.pnlStats.add$java_awt_Component(this.lblTarget);
this.pnlStats.add$java_awt_Component(this.chcAttack);
this.pnlStats.add$java_awt_Component(this.chcAction);
this.pnlStats.add$java_awt_Component(this.chcLook);
this.pnlStats.add$java_awt_Component(this.chcGet);
this.pnlStats.add$java_awt_Component(this.chcDrop);
this.pnlStats.add$java_awt_Component(this.btnPotion);
this.pnlStats.add$java_awt_Component(this.btnPotion2);
this.pnlStats.add$java_awt_Component(this.btnPotion3);
this.pnlStats.add$java_awt_Component(this.btnPotion4);
this.pnlStats.add$java_awt_Component(this.btnMend);
this.pnlStats.add$java_awt_Component(this.btnPoison);
this.pnlStats.add$java_awt_Component(this.btnArmor);
this.pnlStats.add$java_awt_Component(this.btnBless);
this.pnlStats.add$java_awt_Component(this.btnDrink);
this.pnlStats.add$java_awt_Component(this.btnFood);
this.pnlStats.add$java_awt_Component(this.btnHeal);
this.pnlStats.add$java_awt_Component(this.btnDetectinvis);
this.pnlStats.add$java_awt_Component(this.btnInvis);
this.pnlStats.add$java_awt_Component(this.btnRegenerate);
this.pnlStats.add$java_awt_Component(this.btnTerror);
this.pnlStats.add$java_awt_Component(this.btnHarden);
this.pnlStats.add$java_awt_Component(this.btnEndurance);
this.pnlStats.add$java_awt_Component(this.btnCourage);
this.pnlStats.add$java_awt_Component(this.btnFear);
this.pnlStats.add$java_awt_Component(this.btnStrength);
this.pnlStats.add$java_awt_Component(this.btnWeaken);
this.pnlStats.add$java_awt_Component(this.btnApple);
this.pnlStats.add$java_awt_Component(this.btnBeer);
this.pnlStats.add$java_awt_Component(this.btnSandwich);
this.pnlStats.add$java_awt_Component(this.btnScroll);
this.pnlStats.add$java_awt_Component(this.scrTextOther);
this.pnlStats.add$java_awt_Component(this.btnQuit);
this.pnlStats.add$java_awt_Component(this.btnEquipment);
if (!this.appParent.blnApplet) this.pnlStats.add$java_awt_Component(this.btnConnect);
this.pnlContents.setLayout$java_awt_LayoutManager(null);
this.pnlContents.setVisible$Z(true);
this.btnMerchant.setText$S("Merchant");
this.btnMerchant.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[0, 260]));
this.btnMerchant.setVisible$Z(true);
this.btnMerchant.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[120, 20]));
this.btnMerchant.setEnabled$Z(false);
this.lblInfo.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[10, 10]));
this.lblInfo.setVisible$Z(true);
this.lblInfo.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[290, 20]));
this.lblBookc.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[10, 370]));
this.lblBookc.setVisible$Z(true);
this.lblBookc.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.lblBooke.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[10, 420]));
this.lblBooke.setVisible$Z(true);
this.lblBooke.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.lblBookw.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[10, 470]));
this.lblBookw.setVisible$Z(true);
this.lblBookw.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.chcAttack.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[10, 60]));
this.chcAttack.setVisible$Z(true);
this.chcAttack.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[120, 20]));
this.chcAction.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[10, 90]));
this.chcAction.setVisible$Z(true);
this.chcAction.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[120, 20]));
this.chcLook.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[10, 120]));
this.chcLook.setVisible$Z(true);
this.chcLook.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[120, 20]));
this.chcGet.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[10, 151]));
this.chcGet.setVisible$Z(true);
this.chcGet.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[120, 20]));
this.chcDrop.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[10, 180]));
this.chcDrop.setVisible$Z(true);
this.chcDrop.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[120, 20]));
this.btnPotion.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[140, 60]));
this.btnPotion.setVisible$Z(true);
this.btnPotion.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[64, 64]));
this.btnPotion2.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[140, 125]));
this.btnPotion2.setVisible$Z(true);
this.btnPotion2.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[64, 64]));
this.btnPotion3.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[140, 190]));
this.btnPotion3.setVisible$Z(true);
this.btnPotion3.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[64, 64]));
this.btnPotion4.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[140, 255]));
this.btnPotion4.setVisible$Z(true);
this.btnPotion4.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[64, 64]));
this.btnMend.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[60, 370]));
this.btnMend.setVisible$Z(true);
this.btnMend.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.btnPoison.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[100, 370]));
this.btnPoison.setVisible$Z(true);
this.btnPoison.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.btnArmor.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[140, 370]));
this.btnArmor.setVisible$Z(true);
this.btnArmor.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.btnBless.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[180, 370]));
this.btnBless.setVisible$Z(true);
this.btnBless.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.btnDrink.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[220, 370]));
this.btnDrink.setVisible$Z(true);
this.btnDrink.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.btnFood.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[260, 370]));
this.btnFood.setVisible$Z(true);
this.btnFood.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.btnHeal.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[300, 370]));
this.btnHeal.setVisible$Z(true);
this.btnHeal.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.btnDetectinvis.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[60, 420]));
this.btnDetectinvis.setVisible$Z(true);
this.btnDetectinvis.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.btnInvis.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[100, 420]));
this.btnInvis.setVisible$Z(true);
this.btnInvis.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.btnRegenerate.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[140, 420]));
this.btnRegenerate.setVisible$Z(true);
this.btnRegenerate.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.btnTerror.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[180, 420]));
this.btnTerror.setVisible$Z(true);
this.btnTerror.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.btnHarden.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[60, 470]));
this.btnHarden.setVisible$Z(true);
this.btnHarden.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.btnEndurance.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[100, 470]));
this.btnEndurance.setVisible$Z(true);
this.btnEndurance.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.btnCourage.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[140, 470]));
this.btnCourage.setVisible$Z(true);
this.btnCourage.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.btnFear.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[180, 470]));
this.btnFear.setVisible$Z(true);
this.btnFear.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.btnStrength.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[220, 470]));
this.btnStrength.setVisible$Z(true);
this.btnStrength.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.btnWeaken.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[260, 470]));
this.btnWeaken.setVisible$Z(true);
this.btnWeaken.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.btnApple.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[60, 520]));
this.btnApple.setVisible$Z(true);
this.btnApple.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.btnBeer.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[100, 520]));
this.btnBeer.setVisible$Z(true);
this.btnBeer.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.btnSandwich.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[140, 520]));
this.btnSandwich.setVisible$Z(true);
this.btnSandwich.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.btnScroll.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[180, 520]));
this.btnScroll.setVisible$Z(true);
this.btnScroll.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[32, 32]));
this.scrTextOther.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[220, 60]));
this.scrTextOther.setVisible$Z(true);
this.scrTextOther.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[160, 290]));
this.scrTextOther.getViewport$().add$java_awt_Component(this.txtOther);
this.txtOther.setVisible$Z(true);
this.lblTarget.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[10, 30]));
this.lblTarget.setVisible$Z(true);
this.lblTarget.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[140, 40]));
this.btnQuit.setText$S("Quit");
this.btnQuit.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[0, 300]));
this.btnQuit.setVisible$Z(true);
this.btnQuit.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[90, 20]));
this.btnEquipment.setText$S("Equipment");
this.btnEquipment.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[0, 280]));
this.btnEquipment.setVisible$Z(true);
this.btnEquipment.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[120, 20]));
this.btnConnect.setText$S("Connect");
this.btnConnect.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[0, 240]));
this.btnConnect.setVisible$Z(true);
this.btnConnect.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[120, 20]));
this.pnlGraphics.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[0, 0]));
this.pnlGraphics.setVisible$Z(true);
this.pnlGraphics.setLayout$java_awt_LayoutManager(null);
this.pnlGraphics.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[330, 330]));
this.txtInput.setText$S("Enter text here");
this.txtInput.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[0, 330]));
this.txtInput.setVisible$Z(true);
this.txtInput.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[640, 25]));
this.txtOutput.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[1, 1]));
this.txtOutput.setVisible$Z(true);
this.txtOutput.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[638, 118]));
this.txtOutput.setEditable$Z(false);
this.docOutput=this.txtOutput.getDocument$();
this.scrText.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[0, 360]));
this.scrText.setVisible$Z(true);
this.scrText.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[640, 120]));
this.scrText.getViewport$().add$java_awt_Component(this.txtOutput);
this.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[0, 0]));
this.setTitle$S("Dusk");
this.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(11,1)));
this.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[1280, 720]));
this.getContentPane$().add$java_awt_Component$O(this.pnlContents, "Center");
this.pnlContents.add$java_awt_Component(this.pnlStats);
this.pnlContents.add$java_awt_Component(this.pnlGraphics);
this.pnlContents.add$java_awt_Component(this.txtInput);
this.pnlContents.add$java_awt_Component(this.scrText);
this.chcAttack.addItemListener$java_awt_event_ItemListener(this);
this.chcAction.addItemListener$java_awt_event_ItemListener(this);
this.chcLook.addItemListener$java_awt_event_ItemListener(this);
this.chcGet.addItemListener$java_awt_event_ItemListener(this);
this.chcDrop.addItemListener$java_awt_event_ItemListener(this);
this.btnPotion.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnPotionActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$1.$init$,[this, null])));
this.btnPotion2.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnPotion2ActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$2.$init$,[this, null])));
this.btnPotion3.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnPotion3ActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$3.$init$,[this, null])));
this.btnPotion4.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnPotion4ActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$4.$init$,[this, null])));
this.btnMend.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnMendActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$5.$init$,[this, null])));
this.btnPoison.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnPoisonActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$6.$init$,[this, null])));
this.btnArmor.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnArmorActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$7.$init$,[this, null])));
this.btnBless.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnBlessActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$8.$init$,[this, null])));
this.btnDrink.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnDrinkActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$9.$init$,[this, null])));
this.btnFood.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$10||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnFoodActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$10.$init$,[this, null])));
this.btnHeal.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$11||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnHealActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$11.$init$,[this, null])));
this.btnDetectinvis.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$12||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnDetectinvisActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$12.$init$,[this, null])));
this.btnInvis.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$13||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnInvisActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$13.$init$,[this, null])));
this.btnRegenerate.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$14||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnRegenerateActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$14.$init$,[this, null])));
this.btnTerror.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$15||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnTerrorActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$15.$init$,[this, null])));
this.btnHarden.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$16||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnHardenActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$16.$init$,[this, null])));
this.btnEndurance.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$17||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnEnduranceActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$17.$init$,[this, null])));
this.btnCourage.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$18||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnCourageActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$18.$init$,[this, null])));
this.btnFear.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$19||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnFearActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$19.$init$,[this, null])));
this.btnStrength.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$20||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnStrengthActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$20.$init$,[this, null])));
this.btnWeaken.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$21||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnWeakenActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$21.$init$,[this, null])));
this.btnApple.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$22||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnAppleActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$22.$init$,[this, null])));
this.btnBeer.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$23||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnBeerActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$23.$init$,[this, null])));
this.btnSandwich.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$24||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnSandwichActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$24.$init$,[this, null])));
this.btnScroll.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$25||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnScrollActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$25.$init$,[this, null])));
this.btnMerchant.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$26||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnMerchantActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$26.$init$,[this, null])));
this.btnQuit.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$27||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnQuitActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$27.$init$,[this, null])));
this.btnEquipment.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$28||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnEquipmentActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$28.$init$,[this, null])));
this.btnConnect.addActionListener$java_awt_event_ActionListener(((P$.MainFrame$29||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.MainFrame'].btnConnectActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_(P$.MainFrame$29.$init$,[this, null])));
this.addWindowListener$java_awt_event_WindowListener(((P$.MainFrame$30||
(function(){/*a*/var C$=Clazz.newClass(P$, "MainFrame$30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
this.b$['_.MainFrame'].thisWindowClosing$java_awt_event_WindowEvent.apply(this.b$['_.MainFrame'], [e]);
});
})()
), Clazz.new_($I$(12,1),[this, null],P$.MainFrame$30)));
this.frmEquipment=Clazz.new_($I$(13,1).c$$__Dusk,[this.appParent]);
this.frmConnect=Clazz.new_($I$(14,1).c$$__Dusk,[this.appParent]);
});

Clazz.newMeth(C$, 'addNotify$',  function () {
C$.superclazz.prototype.addNotify$.apply(this, []);
if (this.mShown) return;
this.mShown=true;
});

Clazz.newMeth(C$, 'thisWindowClosing$java_awt_event_WindowEvent',  function (e) {
this.setVisible$Z(false);
this.dispose$();
System.exit$I(0);
});

Clazz.newMeth(C$, 'btnPotionActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("use minormend\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnPotion2ActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("use mendpotion\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnPotion3ActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("use minormana\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnPotion4ActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("use manapotion\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnMendActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("cast mend\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnPoisonActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("cast antipoison\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnArmorActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("cast armor\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnBlessActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("cast bless\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnDrinkActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("cast drink\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnFoodActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("cast food\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnHealActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("cast heal\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnDetectinvisActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("cast detectinvis\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnInvisActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("cast invis\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnRegenerateActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("cast regenerate\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnTerrorActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("cast terror\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnHardenActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("cast harden\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnEnduranceActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("cast endurance\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnCourageActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("cast courage\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnFearActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("cast fear\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnStrengthActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("cast strength\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnWeakenActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("cast weaken\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnAppleActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("use apple\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnBeerActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("use ale\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnSandwichActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("use sandwich\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnScrollActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("use recall\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnMerchantActionPerformed$java_awt_event_ActionEvent',  function (e) {
this.appParent.frmMerchant.show$();
this.appParent.frmMerchant.setSize$I$I(300, 120);
});

Clazz.newMeth(C$, 'btnEquipmentActionPerformed$java_awt_event_ActionEvent',  function (e) {
this.frmEquipment.show$();
this.frmEquipment.setSize$I$I(300, 440);
});

Clazz.newMeth(C$, 'btnConnectActionPerformed$java_awt_event_ActionEvent',  function (e) {
this.frmConnect.show$();
this.frmConnect.setSize$I$I(350, 200);
});

Clazz.newMeth(C$, 'btnQuitActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
if (this.appParent.blnConnected) this.appParent.stmOut.writeBytes$S("quit\n");
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
} else {
throw exc;
}
}
try {
this.appParent.sckConnection.close$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
} else {
throw exc;
}
}
try {
this.appParent.imgOriginalSprites.flush$();
this.appParent.imgOriginalPlayers.flush$();
this.appParent.imgOriginalMap.flush$();
this.appParent.imgSprites.flush$();
this.appParent.imgPlayers.flush$();
this.appParent.imgMap.flush$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
} else {
throw exc;
}
}
System.gc$();
if (this.appParent.blnApplet) {
this.appParent.appShell.destroy$();
} else {
System.exit$I(0);
}});

Clazz.newMeth(C$, 'itemStateChanged$java_awt_event_ItemEvent',  function (evt) {
if (this.appParent.blnMenuRefresh || evt.getStateChange$() == 1 ) return;
try {
if (evt.getSource$() === this.chcAttack ) {
var strStore=this.chcAttack.getSelectedItem$();
var i=strStore.lastIndexOf$S(">");
if (i > 0) {
strStore=strStore.substring$I$I(i + 1, strStore.length$());
}this.appParent.stmOut.writeBytes$S("a " + strStore + "\n" );
this.appParent.blnMenuRefresh=true;
this.chcAttack.setSelectedIndex$I(0);
this.appParent.blnMenuRefresh=false;
} else if (evt.getSource$() === this.chcAction ) {
this.appParent.stmOut.writeBytes$S(this.chcAction.getSelectedItem$() + "\n");
this.appParent.blnMenuRefresh=true;
this.chcAction.setSelectedIndex$I(0);
this.appParent.blnMenuRefresh=false;
} else if (evt.getSource$() === this.chcLook ) {
var strStore=this.chcLook.getSelectedItem$();
var tknStore=Clazz.new_($I$(15,1).c$$S$S,[strStore, ">"]);
while (tknStore.countTokens$() > 0){
strStore=tknStore.nextToken$();
}
this.appParent.stmOut.writeBytes$S("look " + strStore + "\n" );
this.appParent.blnMenuRefresh=true;
this.chcLook.setSelectedIndex$I(0);
this.appParent.blnMenuRefresh=false;
} else if (evt.getSource$() === this.chcGet ) {
var strStore=this.chcGet.getSelectedItem$();
this.appParent.stmOut.writeBytes$S("get " + strStore + "\n" );
this.appParent.blnMenuRefresh=true;
this.chcGet.setSelectedIndex$I(0);
this.appParent.blnMenuRefresh=false;
} else if (evt.getSource$() === this.chcDrop ) {
var strStore=this.chcDrop.getSelectedItem$();
this.appParent.stmOut.writeBytes$S("drop " + strStore + "\n" );
this.appParent.blnMenuRefresh=true;
this.chcDrop.setSelectedIndex$I(0);
this.appParent.blnMenuRefresh=false;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("Error at MainFrame.actionPerformed(): " + e.toString());
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2024-06-13 00:05:14 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
