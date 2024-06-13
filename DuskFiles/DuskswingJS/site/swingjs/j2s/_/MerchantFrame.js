(function(){var P$=Clazz.newPackage("_"),I$=[[0,'javax.swing.JComboBox','javax.swing.JTextField','javax.swing.JLabel','javax.swing.JButton','java.awt.event.WindowAdapter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MerchantFrame", null, 'javax.swing.JFrame', 'java.awt.event.MouseListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['appParent','_.Dusk','btnBuy','javax.swing.JButton','+btnSell','chcBuy','javax.swing.JComboBox','+chcSell','txtQuantity','javax.swing.JTextField','lblQuantity','javax.swing.JLabel']]]

Clazz.newMeth(C$, 'c$$__Dusk',  function (inParent) {
Clazz.super_(C$, this);
this.appParent=inParent;
this.setTitle$S("Merchant");
this.chcBuy=Clazz.new_($I$(1,1));
this.chcBuy.setLocation$I$I(0, 20);
this.chcBuy.setSize$I$I(150, 20);
this.chcBuy.setVisible$Z(true);
this.chcSell=Clazz.new_($I$(1,1));
this.chcSell.setLocation$I$I(150, 20);
this.chcSell.setSize$I$I(150, 20);
this.chcSell.setVisible$Z(true);
this.txtQuantity=Clazz.new_($I$(2,1));
this.txtQuantity.setLocation$I$I(150, 40);
this.txtQuantity.setSize$I$I(75, 20);
this.txtQuantity.setText$S("1");
this.txtQuantity.setVisible$Z(true);
this.lblQuantity=Clazz.new_($I$(3,1));
this.lblQuantity.setText$S("Quantity:");
this.lblQuantity.setLocation$I$I(75, 40);
this.lblQuantity.setSize$I$I(75, 20);
this.lblQuantity.setVisible$Z(true);
this.lblQuantity.setHorizontalAlignment$I(4);
this.btnBuy=Clazz.new_($I$(4,1));
this.btnBuy.setLabel$S("Buy");
this.btnBuy.setLocation$I$I(80, 60);
this.btnBuy.setSize$I$I(70, 20);
this.btnBuy.setVisible$Z(true);
this.btnSell=Clazz.new_($I$(4,1));
this.btnSell.setLabel$S("Sell");
this.btnSell.setLocation$I$I(150, 60);
this.btnSell.setSize$I$I(70, 20);
this.btnSell.setVisible$Z(true);
this.setLocation$I$I(20, 20);
this.getContentPane$().setLayout$java_awt_LayoutManager(null);
this.getContentPane$().add$java_awt_Component(this.chcBuy);
this.getContentPane$().add$java_awt_Component(this.chcSell);
this.getContentPane$().add$java_awt_Component(this.txtQuantity);
this.getContentPane$().add$java_awt_Component(this.lblQuantity);
this.getContentPane$().add$java_awt_Component(this.btnBuy);
this.getContentPane$().add$java_awt_Component(this.btnSell);
this.btnBuy.addMouseListener$java_awt_event_MouseListener(this);
this.btnSell.addMouseListener$java_awt_event_MouseListener(this);
this.addWindowListener$java_awt_event_WindowListener(((P$.MerchantFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "MerchantFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
this.b$['_.MerchantFrame'].thisWindowClosing$java_awt_event_WindowEvent.apply(this.b$['_.MerchantFrame'], [e]);
});
})()
), Clazz.new_($I$(5,1),[this, null],P$.MerchantFrame$1)));
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (evt) {
try {
if (evt.getComponent$() === this.btnBuy ) {
var strStore=this.chcBuy.getSelectedItem$();
strStore=strStore.substring$I(strStore.indexOf$S(")") + 1);
this.appParent.stmOut.writeBytes$S("buy " + this.txtQuantity.getText$() + " " + strStore + "\n" );
} else if (evt.getComponent$() === this.btnSell ) {
var strStore=this.chcSell.getSelectedItem$();
strStore=strStore.substring$I(strStore.indexOf$S(")") + 1);
this.appParent.stmOut.writeBytes$S("sell " + this.txtQuantity.getText$() + " " + strStore + "\n" );
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'thisWindowClosing$java_awt_event_WindowEvent',  function (e) {
this.setVisible$Z(false);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2024-06-07 21:09:51 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
