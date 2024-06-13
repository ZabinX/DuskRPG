(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.JOptionPane','javax.swing.JDialog','javax.swing.SwingUtilities','java.awt.BorderLayout','java.awt.event.WindowAdapter','javax.swing.UIManager','javax.swing.JProgressBar','javax.swing.JLabel',['javax.swing.ProgressMonitor','.ProgressOptionPane']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ProgressMonitor", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ProgressOptionPane',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cancelOption=null;
this.millisToDecideToPopup=500;
this.millisToPopup=2000;
},1);

C$.$fields$=[['I',['millisToDecideToPopup','millisToPopup','min','max'],'J',['T0'],'S',['note'],'O',['root','javax.swing.ProgressMonitor','dialog','javax.swing.JDialog','pane','javax.swing.JOptionPane','myBar','javax.swing.JProgressBar','noteLabel','javax.swing.JLabel','parentComponent','java.awt.Component','cancelOption','Object[]','message','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$java_awt_Component$O$S$I$I',  function (parentComponent, message, note, min, max) {
C$.c$$java_awt_Component$O$S$I$I$javax_swing_ProgressMonitor.apply(this, [parentComponent, message, note, min, max, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$O$S$I$I$javax_swing_ProgressMonitor',  function (parentComponent, message, note, min, max, group) {
;C$.$init$.apply(this);
this.min=min;
this.max=max;
this.parentComponent=parentComponent;
this.cancelOption=Clazz.array(java.lang.Object, [1]);
this.cancelOption[0]=$I$(6).getString$O("OptionPane.cancelButtonText");
this.message=message;
this.note=note;
if (group != null ) {
this.root=(group.root != null ) ? group.root : group;
this.T0=this.root.T0;
this.dialog=this.root.dialog;
} else {
this.T0=System.currentTimeMillis$();
}}, 1);

Clazz.newMeth(C$, 'setProgress$I',  function (nv) {
if (nv >= this.max) {
this.close$();
} else {
if (this.myBar != null ) {
this.myBar.setValue$I(nv);
} else {
var T=System.currentTimeMillis$();
var dT=Long.$ival((Long.$sub(T,this.T0)));
if (Long.$ge(dT,this.millisToDecideToPopup )) {
var predictedCompletionTime;
if (nv > this.min) {
predictedCompletionTime=Long.$ival((Long.$div(Long.$mul(dT,(this.max - this.min)),(nv - this.min))));
} else {
predictedCompletionTime=this.millisToPopup;
}if (predictedCompletionTime >= this.millisToPopup) {
this.myBar=Clazz.new_($I$(7,1));
this.myBar.setMinimum$I(this.min);
this.myBar.setMaximum$I(this.max);
this.myBar.setValue$I(nv);
if (this.note != null ) this.noteLabel=Clazz.new_($I$(8,1).c$$S,[this.note]);
this.pane=Clazz.new_([this, null, Clazz.array(java.lang.Object, -1, [this.message, this.noteLabel, this.myBar])],$I$(9,1).c$$O);
this.dialog=this.pane.createDialog$java_awt_Component$S(this.parentComponent, $I$(6).getString$O("ProgressMonitor.progressText"));
this.dialog.show$();
}}}}});

Clazz.newMeth(C$, 'close$',  function () {
if (this.dialog != null ) {
this.dialog.setVisible$Z(false);
this.dialog.dispose$();
this.dialog=null;
this.pane=null;
this.myBar=null;
}});

Clazz.newMeth(C$, 'getMinimum$',  function () {
return this.min;
});

Clazz.newMeth(C$, 'setMinimum$I',  function (m) {
if (this.myBar != null ) {
this.myBar.setMinimum$I(m);
}this.min=m;
});

Clazz.newMeth(C$, 'getMaximum$',  function () {
return this.max;
});

Clazz.newMeth(C$, 'setMaximum$I',  function (m) {
if (this.myBar != null ) {
this.myBar.setMaximum$I(m);
}this.max=m;
});

Clazz.newMeth(C$, 'isCanceled$',  function () {
if (this.pane == null ) return false;
var v=this.pane.getValue$();
return ((v != null ) && (this.cancelOption.length == 1) && (v.equals$O(this.cancelOption[0]))  );
});

Clazz.newMeth(C$, 'setMillisToDecideToPopup$I',  function (millisToDecideToPopup) {
this.millisToDecideToPopup=millisToDecideToPopup;
});

Clazz.newMeth(C$, 'getMillisToDecideToPopup$',  function () {
return this.millisToDecideToPopup;
});

Clazz.newMeth(C$, 'setMillisToPopup$I',  function (millisToPopup) {
this.millisToPopup=millisToPopup;
});

Clazz.newMeth(C$, 'getMillisToPopup$',  function () {
return this.millisToPopup;
});

Clazz.newMeth(C$, 'setNote$S',  function (note) {
this.note=note;
if (this.noteLabel != null ) {
this.noteLabel.setText$S(note);
}});

Clazz.newMeth(C$, 'getNote$',  function () {
return this.note;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ProgressMonitor, "ProgressOptionPane", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.JOptionPane');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$O',  function (messageList) {
;C$.superclazz.c$$O$I$I$javax_swing_Icon$OA$O.apply(this,[messageList, 1, -1, null, this.b$['javax.swing.ProgressMonitor'].cancelOption, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getMaxCharactersPerLineCount$',  function () {
return 60;
});

Clazz.newMeth(C$, 'createDialog$java_awt_Component$S',  function (parentComponent, title) {
var dialog;
var window=$I$(1).getWindowForComponent$java_awt_Component(parentComponent);
if (Clazz.instanceOf(window, "java.awt.JSFrame")) {
dialog=Clazz.new_($I$(2,1).c$$java_awt_JSFrame$S$Z,[window, title, false]);
} else {
dialog=Clazz.new_($I$(2,1).c$$java_awt_JSDialog$S$Z,[window, title, false]);
}if (Clazz.instanceOf(window, "javax.swing.SwingUtilities.SharedOwnerFrame")) {
var ownerShutdownListener=$I$(3).getSharedOwnerFrameShutdownListener$();
dialog.addWindowListener$java_awt_event_WindowListener(ownerShutdownListener);
}var contentPane=dialog.getContentPane$();
contentPane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4,1)));
contentPane.add$java_awt_Component$O(this, "Center");
dialog.pack$();
dialog.setLocationRelativeTo$java_awt_Component(parentComponent);
dialog.addWindowListener$java_awt_event_WindowListener(((P$.ProgressMonitor$ProgressOptionPane$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ProgressMonitor$ProgressOptionPane$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.gotFocus=false;
},1);

C$.$fields$=[['Z',['gotFocus']]]

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (we) {
this.b$['javax.swing.JOptionPane'].setValue$O.apply(this.b$['javax.swing.JOptionPane'], [this.b$['javax.swing.ProgressMonitor'].cancelOption[0]]);
});

Clazz.newMeth(C$, 'windowActivated$java_awt_event_WindowEvent',  function (we) {
if (!this.gotFocus) {
this.b$['javax.swing.JOptionPane'].selectInitialValue$.apply(this.b$['javax.swing.JOptionPane'], []);
this.gotFocus=true;
}});
})()
), Clazz.new_($I$(5,1),[this, null],P$.ProgressMonitor$ProgressOptionPane$1)));
this.addPropertyChangeListener$java_beans_PropertyChangeListener(((P$.ProgressMonitor$ProgressOptionPane$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ProgressMonitor$ProgressOptionPane$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (event) {
if (this.$finals$.dialog.isVisible$() && event.getSource$() === this.b$['javax.swing.ProgressMonitor.ProgressOptionPane']   && (event.getPropertyName$().equals$O("value") || event.getPropertyName$().equals$O("inputValue") ) ) {
this.$finals$.dialog.setVisible$Z(false);
this.$finals$.dialog.dispose$();
}});
})()
), Clazz.new_(P$.ProgressMonitor$ProgressOptionPane$2.$init$,[this, {dialog:dialog}])));
return dialog;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:01 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
