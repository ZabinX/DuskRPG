(function(){var P$=Clazz.newPackage("_"),I$=[[0,'javax.swing.JComboBox','javax.swing.JLabel','java.awt.event.WindowAdapter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EquipmentFrame", null, 'javax.swing.JFrame', 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.chcSkull=Clazz.new_($I$(1,1));
this.chcArms=Clazz.new_($I$(1,1));
this.chcEyes=Clazz.new_($I$(1,1));
this.chcTorso=Clazz.new_($I$(1,1));
this.chcLegs=Clazz.new_($I$(1,1));
this.chcNeck=Clazz.new_($I$(1,1));
this.chcWaist=Clazz.new_($I$(1,1));
this.chcHands=Clazz.new_($I$(1,1));
this.chcWield=Clazz.new_($I$(1,1));
this.lblSkull=Clazz.new_($I$(2,1));
this.JLabel1=Clazz.new_($I$(2,1));
this.JLabel2=Clazz.new_($I$(2,1));
this.JLabel3=Clazz.new_($I$(2,1));
this.JLabel4=Clazz.new_($I$(2,1));
this.JLabel5=Clazz.new_($I$(2,1));
this.JLabel6=Clazz.new_($I$(2,1));
this.JLabel7=Clazz.new_($I$(2,1));
this.JLabel8=Clazz.new_($I$(2,1));
this.JLabel9=Clazz.new_($I$(2,1));
this.mShown=false;
},1);

C$.$fields$=[['Z',['blnRefreshMenus','mShown'],'O',['appParent','_.Dusk','chcSkull','javax.swing.JComboBox','+chcArms','+chcEyes','+chcTorso','+chcLegs','+chcNeck','+chcWaist','+chcHands','+chcWield','lblSkull','javax.swing.JLabel','+JLabel1','+JLabel2','+JLabel3','+JLabel4','+JLabel5','+JLabel6','+JLabel7','+JLabel8','+JLabel9']]]

Clazz.newMeth(C$, 'c$$__Dusk',  function (inAppParent) {
Clazz.super_(C$, this);
try {
this.initComponents$();
this.appParent=inAppParent;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Error at EquipmentFrame(): " + e.toString());
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'initComponents$',  function () {
this.chcSkull.setLocation$I$I(30, 40);
this.chcSkull.setVisible$Z(true);
this.chcSkull.setSize$I$I(240, 20);
this.chcArms.setLocation$I$I(30, 120);
this.chcArms.setVisible$Z(true);
this.chcArms.setSize$I$I(240, 20);
this.chcEyes.setLocation$I$I(30, 240);
this.chcEyes.setVisible$Z(true);
this.chcEyes.setSize$I$I(240, 20);
this.chcTorso.setLocation$I$I(30, 80);
this.chcTorso.setVisible$Z(true);
this.chcTorso.setSize$I$I(240, 20);
this.chcLegs.setLocation$I$I(30, 160);
this.chcLegs.setVisible$Z(true);
this.chcLegs.setSize$I$I(240, 20);
this.chcNeck.setLocation$I$I(30, 200);
this.chcNeck.setVisible$Z(true);
this.chcNeck.setSize$I$I(240, 20);
this.chcWaist.setLocation$I$I(30, 280);
this.chcWaist.setVisible$Z(true);
this.chcWaist.setSize$I$I(240, 20);
this.chcHands.setLocation$I$I(30, 320);
this.chcHands.setVisible$Z(true);
this.chcHands.setSize$I$I(240, 20);
this.chcWield.setLocation$I$I(30, 360);
this.chcWield.setVisible$Z(true);
this.chcWield.setSize$I$I(240, 20);
this.lblSkull.setText$S("Skull:");
this.lblSkull.setLocation$I$I(10, 20);
this.lblSkull.setVisible$Z(true);
this.lblSkull.setSize$I$I(400, 20);
this.JLabel1.setText$S("Torso:");
this.JLabel1.setLocation$I$I(10, 60);
this.JLabel1.setVisible$Z(true);
this.JLabel1.setSize$I$I(400, 20);
this.JLabel2.setText$S("Arms:");
this.JLabel2.setLocation$I$I(9, 100);
this.JLabel2.setVisible$Z(true);
this.JLabel2.setSize$I$I(400, 20);
this.JLabel3.setText$S("Legs:");
this.JLabel3.setLocation$I$I(9, 135);
this.JLabel3.setVisible$Z(true);
this.JLabel3.setSize$I$I(400, 20);
this.JLabel4.setText$S("Neck:");
this.JLabel4.setLocation$I$I(10, 180);
this.JLabel4.setVisible$Z(true);
this.JLabel4.setSize$I$I(400, 20);
this.JLabel5.setText$S("Eyes:");
this.JLabel5.setLocation$I$I(10, 220);
this.JLabel5.setVisible$Z(true);
this.JLabel5.setSize$I$I(400, 20);
this.JLabel6.setText$S("Waist:");
this.JLabel6.setLocation$I$I(10, 260);
this.JLabel6.setVisible$Z(true);
this.JLabel6.setSize$I$I(400, 20);
this.JLabel7.setText$S("Hands:");
this.JLabel7.setLocation$I$I(10, 300);
this.JLabel7.setVisible$Z(true);
this.JLabel7.setSize$I$I(400, 20);
this.JLabel9.setText$S("Wielded:");
this.JLabel9.setLocation$I$I(10, 340);
this.JLabel9.setVisible$Z(true);
this.JLabel9.setSize$I$I(400, 20);
this.JLabel8.setText$S("Equipment");
this.JLabel8.setLocation$I$I(10, 0);
this.JLabel8.setHorizontalAlignment$I(0);
this.JLabel8.setVisible$Z(true);
this.JLabel8.setSize$I$I(280, 20);
this.setLocation$I$I(0, 0);
this.setTitle$S("Equipment");
this.getContentPane$().setLayout$java_awt_LayoutManager(null);
this.getContentPane$().setSize$I$I(300, 440);
this.getContentPane$().add$java_awt_Component(this.chcSkull);
this.getContentPane$().add$java_awt_Component(this.chcArms);
this.getContentPane$().add$java_awt_Component(this.chcEyes);
this.getContentPane$().add$java_awt_Component(this.chcTorso);
this.getContentPane$().add$java_awt_Component(this.chcLegs);
this.getContentPane$().add$java_awt_Component(this.chcNeck);
this.getContentPane$().add$java_awt_Component(this.chcWaist);
this.getContentPane$().add$java_awt_Component(this.chcHands);
this.getContentPane$().add$java_awt_Component(this.chcWield);
this.getContentPane$().add$java_awt_Component(this.lblSkull);
this.getContentPane$().add$java_awt_Component(this.JLabel1);
this.getContentPane$().add$java_awt_Component(this.JLabel2);
this.getContentPane$().add$java_awt_Component(this.JLabel3);
this.getContentPane$().add$java_awt_Component(this.JLabel4);
this.getContentPane$().add$java_awt_Component(this.JLabel5);
this.getContentPane$().add$java_awt_Component(this.JLabel6);
this.getContentPane$().add$java_awt_Component(this.JLabel7);
this.getContentPane$().add$java_awt_Component(this.JLabel8);
this.getContentPane$().add$java_awt_Component(this.JLabel9);
this.chcWield.addActionListener$java_awt_event_ActionListener(this);
this.chcArms.addActionListener$java_awt_event_ActionListener(this);
this.chcLegs.addActionListener$java_awt_event_ActionListener(this);
this.chcTorso.addActionListener$java_awt_event_ActionListener(this);
this.chcWaist.addActionListener$java_awt_event_ActionListener(this);
this.chcNeck.addActionListener$java_awt_event_ActionListener(this);
this.chcSkull.addActionListener$java_awt_event_ActionListener(this);
this.chcEyes.addActionListener$java_awt_event_ActionListener(this);
this.chcHands.addActionListener$java_awt_event_ActionListener(this);
this.addWindowListener$java_awt_event_WindowListener(((P$.EquipmentFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "EquipmentFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
this.b$['_.EquipmentFrame'].thisWindowClosing$java_awt_event_WindowEvent.apply(this.b$['_.EquipmentFrame'], [e]);
});
})()
), Clazz.new_($I$(3,1),[this, null],P$.EquipmentFrame$1)));
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (evt) {
if (this.blnRefreshMenus) return;
if (evt.getSource$() === this.chcWield ) {
this.Equip$I(1);
} else if (evt.getSource$() === this.chcArms ) {
this.Equip$I(2);
} else if (evt.getSource$() === this.chcLegs ) {
this.Equip$I(3);
} else if (evt.getSource$() === this.chcTorso ) {
this.Equip$I(4);
} else if (evt.getSource$() === this.chcWaist ) {
this.Equip$I(5);
} else if (evt.getSource$() === this.chcNeck ) {
this.Equip$I(6);
} else if (evt.getSource$() === this.chcSkull ) {
this.Equip$I(7);
} else if (evt.getSource$() === this.chcEyes ) {
this.Equip$I(8);
} else if (evt.getSource$() === this.chcHands ) {
this.Equip$I(9);
}});

Clazz.newMeth(C$, 'addNotify$',  function () {
C$.superclazz.prototype.addNotify$.apply(this, []);
if (this.mShown) return;
var insets=this.getInsets$();
var components=this.getComponents$();
for (var i=0; i < components.length; i++) {
var location=components[i].getLocation$();
location.move$I$I(location.x, location.y + insets.top);
components[i].setLocation$java_awt_Point(location);
}
this.mShown=true;
});

Clazz.newMeth(C$, 'thisWindowClosing$java_awt_event_WindowEvent',  function (e) {
this.setVisible$Z(false);
});

Clazz.newMeth(C$, 'Equip$I',  function (intStore) {
try {
var strStore;
switch (intStore) {
case (1):
{
strStore=this.chcWield.getSelectedItem$();
if (strStore.equals$O("none")) {
this.appParent.stmOut.writeBytes$S("unwear wielded\n");
} else {
this.appParent.stmOut.writeBytes$S("wear " + strStore + "\n" );
}break;
}case (2):
{
strStore=this.chcArms.getSelectedItem$();
if (strStore.equals$O("none")) {
this.appParent.stmOut.writeBytes$S("unwear arms\n");
} else {
this.appParent.stmOut.writeBytes$S("wear " + strStore + "\n" );
}break;
}case (3):
{
strStore=this.chcLegs.getSelectedItem$();
if (strStore.equals$O("none")) {
this.appParent.stmOut.writeBytes$S("unwear legs\n");
} else {
this.appParent.stmOut.writeBytes$S("wear " + strStore + "\n" );
}break;
}case (4):
{
strStore=this.chcTorso.getSelectedItem$();
if (strStore.equals$O("none")) {
this.appParent.stmOut.writeBytes$S("unwear torso\n");
} else {
this.appParent.stmOut.writeBytes$S("wear " + strStore + "\n" );
}break;
}case (5):
{
strStore=this.chcWaist.getSelectedItem$();
if (strStore.equals$O("none")) {
this.appParent.stmOut.writeBytes$S("unwear waist\n");
} else {
this.appParent.stmOut.writeBytes$S("wear " + strStore + "\n" );
}break;
}case (6):
{
strStore=this.chcNeck.getSelectedItem$();
if (strStore.equals$O("none")) {
this.appParent.stmOut.writeBytes$S("unwear neck\n");
} else {
this.appParent.stmOut.writeBytes$S("wear " + strStore + "\n" );
}break;
}case (7):
{
strStore=this.chcSkull.getSelectedItem$();
if (strStore.equals$O("none")) {
this.appParent.stmOut.writeBytes$S("unwear skull\n");
} else {
this.appParent.stmOut.writeBytes$S("wear " + strStore + "\n" );
}break;
}case (8):
{
strStore=this.chcEyes.getSelectedItem$();
if (strStore.equals$O("none")) {
this.appParent.stmOut.writeBytes$S("unwear eyes\n");
} else {
this.appParent.stmOut.writeBytes$S("wear " + strStore + "\n" );
}break;
}case (9):
{
strStore=this.chcHands.getSelectedItem$();
if (strStore.equals$O("none")) {
this.appParent.stmOut.writeBytes$S("unwear hands\n");
} else {
this.appParent.stmOut.writeBytes$S("wear " + strStore + "\n" );
}break;
}}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.appParent.frame.txtOutput.append$S("Error at Equip(): " + e.toString());
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2024-06-07 21:09:51 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
