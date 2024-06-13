(function(){var P$=Clazz.newPackage("_"),I$=[[0,'javax.swing.JScrollPane','javax.swing.JList','javax.swing.JButton','javax.swing.JTextField','javax.swing.JLabel','java.util.Vector','java.io.RandomAccessFile',['.','.Bookmark'],'java.awt.Point','java.awt.Dimension','java.awt.event.WindowAdapter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ConnectFrame", null, 'javax.swing.JFrame');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.scrBookmarks=Clazz.new_($I$(1,1));
this.lstBookmarks=Clazz.new_($I$(2,1));
this.btnConnect=Clazz.new_($I$(3,1));
this.txtName=Clazz.new_($I$(4,1));
this.txtAddress=Clazz.new_($I$(4,1));
this.lblAddress=Clazz.new_($I$(5,1));
this.txtPort=Clazz.new_($I$(4,1));
this.lblPort=Clazz.new_($I$(5,1));
this.btnBookmark=Clazz.new_($I$(3,1));
this.btnRemove=Clazz.new_($I$(3,1));
this.mShown=false;
},1);

C$.$fields$=[['Z',['mShown'],'O',['vctBookmarks','java.util.Vector','appParent','_.Dusk','scrBookmarks','javax.swing.JScrollPane','lstBookmarks','javax.swing.JList','btnConnect','javax.swing.JButton','txtName','javax.swing.JTextField','+txtAddress','lblAddress','javax.swing.JLabel','txtPort','javax.swing.JTextField','lblPort','javax.swing.JLabel','btnBookmark','javax.swing.JButton','+btnRemove']]]

Clazz.newMeth(C$, 'c$$__Dusk',  function (inParent) {
Clazz.super_(C$, this);
this.appParent=inParent;
this.vctBookmarks=Clazz.new_($I$(6,1).c$$I,[0]);
try {
var rafBookmarks=Clazz.new_($I$(7,1).c$$S$S,["bookmarks", "r"]);
while (true){
var bkmStore=Clazz.new_([rafBookmarks.readLine$(), Integer.parseInt$S(rafBookmarks.readLine$())],$I$(8,1).c$$S$I);
this.vctBookmarks.addElement$O(bkmStore);
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
this.lstBookmarks.setListData$java_util_Vector(this.vctBookmarks);
try {
this.initComponents$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Error at ConnectFrame.initComponents: " + e.toString());
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'initComponents$',  function () {
this.scrBookmarks.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[160, 20]));
this.scrBookmarks.setVisible$Z(true);
this.scrBookmarks.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[180, 140]));
this.scrBookmarks.getViewport$().add$java_awt_Component(this.lstBookmarks);
this.lstBookmarks.setVisible$Z(true);
if (!this.appParent.blnApplet) {
this.btnConnect.setText$S("Connect");
this.btnConnect.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[10, 140]));
this.btnConnect.setVisible$Z(true);
this.btnConnect.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[140, 20]));
}this.txtName.setText$S("New Dusk");
this.txtName.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[10, 30]));
this.txtName.setVisible$Z(true);
this.txtName.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[140, 20]));
this.txtAddress.setText$S("dusk.wesowin.org");
this.txtAddress.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[10, 30]));
this.txtAddress.setVisible$Z(true);
this.txtAddress.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[140, 20]));
this.lblAddress.setText$S("Server Address:");
this.lblAddress.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[20, 10]));
this.lblAddress.setVisible$Z(true);
this.lblAddress.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[120, 20]));
this.txtPort.setText$S("7423");
this.txtPort.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[10, 70]));
this.txtPort.setVisible$Z(true);
this.txtPort.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[60, 20]));
this.lblPort.setText$S("Port:");
this.lblPort.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[20, 50]));
this.lblPort.setVisible$Z(true);
this.lblPort.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[50, 20]));
this.btnBookmark.setText$S("Add Bookmark");
this.btnBookmark.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[10, 100]));
this.btnBookmark.setVisible$Z(true);
this.btnBookmark.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[140, 20]));
this.btnRemove.setText$S("Remove Bookmark");
this.btnRemove.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[10, 120]));
this.btnRemove.setVisible$Z(true);
this.btnRemove.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[140, 20]));
this.setLocation$java_awt_Point(Clazz.new_($I$(9,1).c$$I$I,[0, 0]));
this.setTitle$S("frmConnect");
this.getContentPane$().setLayout$java_awt_LayoutManager(null);
this.setSize$java_awt_Dimension(Clazz.new_($I$(10,1).c$$I$I,[350, 180]));
this.getContentPane$().add$java_awt_Component(this.scrBookmarks);
if (!this.appParent.blnApplet) this.getContentPane$().add$java_awt_Component(this.btnConnect);
this.getContentPane$().add$java_awt_Component(this.txtAddress);
this.getContentPane$().add$java_awt_Component(this.lblAddress);
this.getContentPane$().add$java_awt_Component(this.txtPort);
this.getContentPane$().add$java_awt_Component(this.lblPort);
this.getContentPane$().add$java_awt_Component(this.btnBookmark);
this.getContentPane$().add$java_awt_Component(this.btnRemove);
this.lstBookmarks.addListSelectionListener$javax_swing_event_ListSelectionListener(((P$.ConnectFrame$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ConnectFrame$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.ListSelectionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'valueChanged$javax_swing_event_ListSelectionEvent',  function (e) {
this.b$['_.ConnectFrame'].lstBookmarksActionPerformed$javax_swing_event_ListSelectionEvent.apply(this.b$['_.ConnectFrame'], [e]);
});
})()
), Clazz.new_(P$.ConnectFrame$1.$init$,[this, null])));
this.btnConnect.addActionListener$java_awt_event_ActionListener(((P$.ConnectFrame$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ConnectFrame$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.ConnectFrame'].btnConnectActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.ConnectFrame'], [e]);
});
})()
), Clazz.new_(P$.ConnectFrame$2.$init$,[this, null])));
this.btnBookmark.addActionListener$java_awt_event_ActionListener(((P$.ConnectFrame$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ConnectFrame$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.ConnectFrame'].btnBookmarkActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.ConnectFrame'], [e]);
});
})()
), Clazz.new_(P$.ConnectFrame$3.$init$,[this, null])));
this.btnRemove.addActionListener$java_awt_event_ActionListener(((P$.ConnectFrame$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ConnectFrame$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['_.ConnectFrame'].btnRemoveActionPerformed$java_awt_event_ActionEvent.apply(this.b$['_.ConnectFrame'], [e]);
});
})()
), Clazz.new_(P$.ConnectFrame$4.$init$,[this, null])));
this.addWindowListener$java_awt_event_WindowListener(((P$.ConnectFrame$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "ConnectFrame$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
this.b$['_.ConnectFrame'].thisWindowClosing$java_awt_event_WindowEvent.apply(this.b$['_.ConnectFrame'], [e]);
});
})()
), Clazz.new_($I$(11,1),[this, null],P$.ConnectFrame$5)));
});

Clazz.newMeth(C$, 'addNotify$',  function () {
C$.superclazz.prototype.addNotify$.apply(this, []);
if (this.mShown) return;
this.mShown=true;
});

Clazz.newMeth(C$, 'thisWindowClosing$java_awt_event_WindowEvent',  function (e) {
this.setVisible$Z(false);
});

Clazz.newMeth(C$, 'btnBookmarkActionPerformed$java_awt_event_ActionEvent',  function (e) {
this.vctBookmarks.addElement$O(Clazz.new_([this.txtAddress.getText$(), Integer.parseInt$S(this.txtPort.getText$())],$I$(8,1).c$$S$I));
this.lstBookmarks.setListData$java_util_Vector(this.vctBookmarks);
try {
var rafBookmarks=Clazz.new_($I$(7,1).c$$S$S,["bookmarks", "rw"]);
for (var i=0; i < this.vctBookmarks.size$(); i++) {
var bkmStore=this.vctBookmarks.elementAt$I(i);
rafBookmarks.writeBytes$S(bkmStore.strAddress + "\n");
rafBookmarks.writeBytes$S("" + bkmStore.port + "\n" );
}
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
System.err.println$S("Error writing bookmarks: " + e.toString());
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnRemoveActionPerformed$java_awt_event_ActionEvent',  function (e) {
try {
this.vctBookmarks.removeElementAt$I(this.lstBookmarks.getSelectedIndex$());
this.lstBookmarks.setListData$java_util_Vector(this.vctBookmarks);
try {
var rafBookmarks=Clazz.new_($I$(7,1).c$$S$S,["bookmarks", "rw"]);
for (var i=0; i < this.vctBookmarks.size$(); i++) {
var bkmStore=this.vctBookmarks.elementAt$I(i);
rafBookmarks.writeBytes$S(bkmStore.strAddress + "\n");
rafBookmarks.writeBytes$S("" + bkmStore.port + "\n" );
}
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
System.err.println$S("Error writing bookmarks: " + e.toString());
} else {
throw exc;
}
}
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'btnConnectActionPerformed$java_awt_event_ActionEvent',  function (e) {
if (this.appParent.blnConnected) return;
this.appParent.address=this.txtAddress.getText$();
this.appParent.port=Integer.parseInt$S(this.txtPort.getText$());
this.appParent.connect$();
});

Clazz.newMeth(C$, 'lstBookmarksActionPerformed$javax_swing_event_ListSelectionEvent',  function (e) {
try {
var bkmStore=this.vctBookmarks.elementAt$I(this.lstBookmarks.getSelectedIndex$());
this.txtAddress.setText$S(bkmStore.strAddress);
this.txtPort.setText$S("" + bkmStore.port);
} catch (exc) {
if (Clazz.exceptionOf(exc,"Exception")){
} else {
throw exc;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.3.1-v5');//Created 2024-06-07 21:09:50 Java2ScriptVisitor version 3.3.1-v5 net.sf.j2s.core.jar version 3.3.1-v5
