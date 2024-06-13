(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,['javax.swing.JColorChooser','.ASYNCHRONOUS_COLOR'],'javax.swing.colorchooser.AbstractColorChooserPanel','java.awt.Color','javax.swing.JOptionPane','javax.swing.ColorChooserDialog','javax.swing.colorchooser.DefaultColorSelectionModel','StringBuffer','java.awt.JSComponent','javax.swing.JColorChooser','java.awt.BorderLayout','javax.swing.JPanel','java.awt.FlowLayout','javax.swing.JButton','javax.swing.AbstractAction','javax.swing.KeyStroke','sun.swing.SwingUtilities2','javax.swing.JDialog','javax.swing.UIManager',['javax.swing.ColorChooserDialog','.Closer']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ColorChooserDialog", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JDialog');
C$.$classes$=[['Closer',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.disposeOnHide=true;
},1);

C$.$fields$=[['Z',['disposeOnHide','haveActionListener'],'O',['initialColor','java.awt.Color','chooserPane','javax.swing.JColorChooser','cancelButton','javax.swing.JButton']]]

Clazz.newMeth(C$, 'c$$java_awt_Dialog$S$Z$java_awt_Component$javax_swing_JColorChooser$java_awt_event_ActionListener$java_awt_event_ActionListener',  function (owner, title, modal, c, chooserPane, okListener, cancelListener) {
;C$.superclazz.c$$java_awt_Dialog$S$Z.apply(this,[owner, title, modal]);C$.$init$.apply(this);
this.initColorChooserDialog$java_awt_Component$javax_swing_JColorChooser$java_awt_event_ActionListener$java_awt_event_ActionListener(c, chooserPane, okListener, cancelListener);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Dialog$S$Z$java_awt_Component$javax_swing_JColorChooser$java_awt_event_ActionListener$java_awt_event_ActionListener$Z',  function (owner, title, modal, c, chooserPane, okListener, cancelListener, disposeOnHide) {
;C$.superclazz.c$$java_awt_Dialog$S$Z.apply(this,[owner, title, modal]);C$.$init$.apply(this);
this.disposeOnHide=disposeOnHide;
this.initColorChooserDialog$java_awt_Component$javax_swing_JColorChooser$java_awt_event_ActionListener$java_awt_event_ActionListener(c, chooserPane, okListener, cancelListener);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSFrame$S$Z$java_awt_Component$javax_swing_JColorChooser$java_awt_event_ActionListener$java_awt_event_ActionListener',  function (owner, title, modal, c, chooserPane, okListener, cancelListener) {
;C$.superclazz.c$$java_awt_JSFrame$S$Z.apply(this,[owner, title, modal]);C$.$init$.apply(this);
this.disposeOnHide=false;
this.initColorChooserDialog$java_awt_Component$javax_swing_JColorChooser$java_awt_event_ActionListener$java_awt_event_ActionListener(c, chooserPane, okListener, cancelListener);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame$S$Z$java_awt_Component$javax_swing_JColorChooser$java_awt_event_ActionListener$java_awt_event_ActionListener',  function (owner, title, modal, c, chooserPane, okListener, cancelListener) {
;C$.superclazz.c$$java_awt_Frame$S$Z.apply(this,[owner, title, modal]);C$.$init$.apply(this);
this.disposeOnHide=false;
this.initColorChooserDialog$java_awt_Component$javax_swing_JColorChooser$java_awt_event_ActionListener$java_awt_event_ActionListener(c, chooserPane, okListener, cancelListener);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_JSFrame$S$Z$java_awt_Component$javax_swing_JColorChooser$java_awt_event_ActionListener$java_awt_event_ActionListener$Z',  function (owner, title, modal, c, chooserPane, okListener, cancelListener, disposeOnHide) {
;C$.superclazz.c$$java_awt_JSFrame$S$Z.apply(this,[owner, title, modal]);C$.$init$.apply(this);
this.disposeOnHide=disposeOnHide;
this.initColorChooserDialog$java_awt_Component$javax_swing_JColorChooser$java_awt_event_ActionListener$java_awt_event_ActionListener(c, chooserPane, okListener, cancelListener);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame$S$Z$java_awt_Component$javax_swing_JColorChooser$java_awt_event_ActionListener$java_awt_event_ActionListener$Z',  function (owner, title, modal, c, chooserPane, okListener, cancelListener, disposeOnHide) {
;C$.superclazz.c$$java_awt_Frame$S$Z.apply(this,[owner, title, modal]);C$.$init$.apply(this);
this.disposeOnHide=disposeOnHide;
this.initColorChooserDialog$java_awt_Component$javax_swing_JColorChooser$java_awt_event_ActionListener$java_awt_event_ActionListener(c, chooserPane, okListener, cancelListener);
}, 1);

Clazz.newMeth(C$, 'initColorChooserDialog$java_awt_Component$javax_swing_JColorChooser$java_awt_event_ActionListener$java_awt_event_ActionListener',  function (c, chooserPane, okListener, cancelListener) {
this.haveActionListener=(okListener != null  || cancelListener != null  );
if (!(Clazz.instanceOf(c, "java.beans.PropertyChangeListener"))) {
System.out.println$S("JColorChooser: no onDialogReturn(Object) found in component " + c);
}if (okListener == null  && cancelListener == null  ) $I$(8,"秘ensurePropertyChangeListener$java_awt_Component$java_awt_Component",[this, $I$(9).listener == null  ? c : $I$(9).listener]);
this.chooserPane=chooserPane;
var contentPane=this.getContentPane$();
contentPane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(10,1)));
contentPane.add$java_awt_Component$O(chooserPane, "Center");
var okString="OK";
var cancelString="Cancel";
var resetString="Reset";
var buttonPane=Clazz.new_($I$(11,1));
buttonPane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(12,1).c$$I,[1]));
var okButton=Clazz.new_($I$(13,1).c$$S,[okString]);
this.getRootPane$().setDefaultButton$javax_swing_JButton(okButton);
okButton.setActionCommand$S("OK");
okButton.addActionListener$java_awt_event_ActionListener(((P$.ColorChooserDialog$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ColorChooserDialog$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['javax.swing.ColorChooserDialog'].doCallback$Z.apply(this.b$['javax.swing.ColorChooserDialog'], [true]);
});
})()
), Clazz.new_(P$.ColorChooserDialog$1.$init$,[this, null])));
if (okListener != null ) {
okButton.addActionListener$java_awt_event_ActionListener(okListener);
}buttonPane.add$java_awt_Component(okButton);
this.cancelButton=Clazz.new_($I$(13,1).c$$S,[cancelString]);
var cancelKeyAction=((P$.ColorChooserDialog$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ColorChooserDialog$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.AbstractAction'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
(e.getSource$()).fireActionPerformed$java_awt_event_ActionEvent(e);
this.b$['javax.swing.ColorChooserDialog'].doCallback$Z.apply(this.b$['javax.swing.ColorChooserDialog'], [false]);
});
})()
), Clazz.new_($I$(14,1),[this, null],P$.ColorChooserDialog$2));
var cancelKeyStroke=$I$(15).getKeyStroke$I$I(27, 0);
var inputMap=this.cancelButton.getInputMap$I(2);
var actionMap=this.cancelButton.getActionMap$();
if (inputMap != null  && actionMap != null  ) {
inputMap.put$javax_swing_KeyStroke$O(cancelKeyStroke, "cancel");
actionMap.put$O$javax_swing_Action("cancel", cancelKeyAction);
}this.cancelButton.setActionCommand$S("cancel");
this.cancelButton.addActionListener$java_awt_event_ActionListener(((P$.ColorChooserDialog$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ColorChooserDialog$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['javax.swing.ColorChooserDialog'].doCallback$Z.apply(this.b$['javax.swing.ColorChooserDialog'], [false]);
});
})()
), Clazz.new_(P$.ColorChooserDialog$3.$init$,[this, null])));
if (cancelListener != null ) {
this.cancelButton.addActionListener$java_awt_event_ActionListener(cancelListener);
}buttonPane.add$java_awt_Component(this.cancelButton);
var resetButton=Clazz.new_($I$(13,1).c$$S,[resetString]);
resetButton.addActionListener$java_awt_event_ActionListener(((P$.ColorChooserDialog$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "ColorChooserDialog$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['javax.swing.ColorChooserDialog'].reset$.apply(this.b$['javax.swing.ColorChooserDialog'], []);
});
})()
), Clazz.new_(P$.ColorChooserDialog$4.$init$,[this, null])));
var mnemonic=$I$(16).getUIDefaultsInt$O$I("ColorChooser.resetMnemonic", -1);
if (mnemonic != -1) {
resetButton.setMnemonic$I(mnemonic);
}buttonPane.add$java_awt_Component(resetButton);
contentPane.add$java_awt_Component$O(buttonPane, "South");
if ($I$(17).isDefaultLookAndFeelDecorated$()) {
var supportsWindowDecorations=$I$(18).getLookAndFeel$().getSupportsWindowDecorations$();
if (supportsWindowDecorations) {
this.getRootPane$().setWindowDecorationStyle$I(5);
}}this.applyComponentOrientation$java_awt_ComponentOrientation(((c == null ) ? this.getRootPane$() : c).getComponentOrientation$());
this.pack$();
this.setLocationRelativeTo$java_awt_Component(c);
this.addWindowListener$java_awt_event_WindowListener(Clazz.new_($I$(19,1),[this, null]));
});

Clazz.newMeth(C$, 'doCallback$Z',  function (isOK) {
if (!this.haveActionListener) this.firePropertyChange$S$O$O("SelectedColor", null, (isOK ? this.chooserPane.getSelectionModel$().getSelectedColor$() : null));
this.hide$();
if (this.disposeOnHide) this.dispose$();
});

Clazz.newMeth(C$, 'show$',  function () {
this.initialColor=this.chooserPane.getColor$();
C$.superclazz.prototype.show$.apply(this, []);
});

Clazz.newMeth(C$, 'reset$',  function () {
this.chooserPane.setColor$java_awt_Color(this.initialColor);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ColorChooserDialog, "Closer", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.WindowAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
this.b$['javax.swing.ColorChooserDialog'].cancelButton.doClick$I(0);
var w=e.getWindow$();
if (this.b$['javax.swing.ColorChooserDialog'].disposeOnHide) w.dispose$();
 else w.hide$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:53 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
