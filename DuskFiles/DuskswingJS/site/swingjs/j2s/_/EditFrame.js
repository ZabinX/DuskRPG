(function(){var P$=Clazz.newPackage("_"),I$=[[0,'java.awt.BorderLayout','javax.swing.JButton','javax.swing.JScrollPane','javax.swing.JTextArea','java.awt.event.WindowAdapter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EditFrame", null, 'javax.swing.JFrame', 'java.awt.event.MouseListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['strName'],'O',['appParent','_.Dusk','scrEdit','javax.swing.JScrollPane','txtEdit','javax.swing.JTextArea','btnSubmit','javax.swing.JButton']]]

Clazz.newMeth(C$, 'c$$S$__Dusk$Z',  function (inName, inParent, blnSubmit) {
Clazz.super_(C$, this);
this.appParent=inParent;
this.strName=inName;
this.setTitle$S(this.strName);
this.getContentPane$().setLayout$java_awt_LayoutManager(Clazz.new_($I$(1,1)));
if (blnSubmit) {
this.btnSubmit=Clazz.new_($I$(2,1).c$$S,["Submit"]);
this.getContentPane$().add$java_awt_Component$O(this.btnSubmit, "South");
this.btnSubmit.addMouseListener$java_awt_event_MouseListener(this);
}this.scrEdit=Clazz.new_($I$(3,1));
this.txtEdit=Clazz.new_($I$(4,1));
this.scrEdit.getViewport$().add$java_awt_Component(this.txtEdit);
this.getContentPane$().add$java_awt_Component$O(this.scrEdit, "Center");
this.addWindowListener$java_awt_event_WindowListener(((P$.EditFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "EditFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
this.b$['_.EditFrame'].thisWindowClosing$java_awt_event_WindowEvent.apply(this.b$['_.EditFrame'], [e]);
});
})()
), Clazz.new_($I$(5,1),[this, null],P$.EditFrame$1)));
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (evt) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (evt) {
if (evt.getComponent$() === this.btnSubmit ) {
try {
this.appParent.stmOut.writeBytes$S("submit " + this.strName + "\n" );
this.appParent.stmOut.writeBytes$S(this.txtEdit.getText$() + "\n--EOF--\n");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.appParent.frame.txtOutput.append$S("Error while submitting file: " + e.toString());
} else {
throw e;
}
}
}});

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
