(function(){var P$=Clazz.newPackage("_"),I$=[[0,'javax.swing.JScrollPane','javax.swing.JTextField','java.awt.BorderLayout','java.awt.Color','javax.swing.JTextArea','java.awt.event.WindowAdapter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BattleFrame", null, 'javax.swing.JFrame', ['java.awt.event.MouseListener', 'java.awt.event.KeyListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.scrText=Clazz.new_($I$(1,1));
this.txtInput=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['appParent','_.Dusk','scrText','javax.swing.JScrollPane','txtEdit','javax.swing.JTextArea','txtInput','javax.swing.JTextField','textbackground','java.awt.Color']]]

Clazz.newMeth(C$, 'c$$__Dusk',  function (inParent) {
Clazz.super_(C$, this);
this.appParent=inParent;
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(3,1)));
this.txtInput.setVisible$Z(true);
this.textbackground=Clazz.new_($I$(4,1).c$$I$I$I,[89, 89, 89]);
this.txtInput.setBackground$java_awt_Color(this.textbackground);
this.add$java_awt_Component$O(this.txtInput, "North");
this.txtEdit=Clazz.new_($I$(5,1).c$$I$I,[40, 30]);
this.scrText.setVisible$Z(true);
this.scrText.getViewport$().add$java_awt_Component(this.txtEdit);
this.add$java_awt_Component(this.scrText);
this.txtInput.addKeyListener$java_awt_event_KeyListener(this);
this.addWindowListener$java_awt_event_WindowListener(((P$.BattleFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "BattleFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
this.b$['_.BattleFrame'].thisWindowClosing$java_awt_event_WindowEvent.apply(this.b$['_.BattleFrame'], [e]);
});
})()
), Clazz.new_($I$(6,1),[this, null],P$.BattleFrame$1)));
this.pack$();
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (evt) {
if (!this.appParent.blnConnected) return;
{
try {
var nkey=evt.getKeyCode$();
if (nkey == 10) {
var strStore=this.txtInput.getText$();
if (strStore.startsWith$S("!")) {
if (strStore.length$() == 1) {
this.appParent.strSet=null;
} else {
this.appParent.strSet=strStore.substring$I(1);
}} else {
this.appParent.stmOut.writeBytes$S(strStore + "\n");
}this.txtInput.setText$S("");
}if (this.appParent.blnLoaded) {
switch (nkey) {
case 38:
{
this.appParent.stmOut.writeBytes$S("n\n");
if (this.appParent.strSet != null ) {
this.appParent.stmOut.writeBytes$S(this.appParent.strSet + "\n");
}return;
}case 40:
{
this.appParent.stmOut.writeBytes$S("s\n");
if (this.appParent.strSet != null ) {
this.appParent.stmOut.writeBytes$S(this.appParent.strSet + "\n");
}return;
}case 37:
{
this.appParent.stmOut.writeBytes$S("w\n");
if (this.appParent.strSet != null ) {
this.appParent.stmOut.writeBytes$S(this.appParent.strSet + "\n");
}return;
}case 39:
{
this.appParent.stmOut.writeBytes$S("e\n");
if (this.appParent.strSet != null ) {
this.appParent.stmOut.writeBytes$S(this.appParent.strSet + "\n");
}}}
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.appParent.addText$S("Error at keyPressed(): " + e.toString() + "\n" );
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (evt) {
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (evt) {
});

Clazz.newMeth(C$, 'thisWindowClosing$java_awt_event_WindowEvent',  function (e) {
this.setVisible$Z(false);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2024-06-07 21:09:50 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
