(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'java.io.File',['swingjs.plaf.JSFileChooserUI','.ApproveSelectionAction'],['swingjs.plaf.JSFileChooserUI','.CancelSelectionAction'],'javax.swing.JPanel','java.awt.BorderLayout','javax.swing.SwingUtilities','sun.swing.DefaultLookup','javax.swing.plaf.ActionMapUIResource','javax.swing.LookAndFeel']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSFileChooserUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSPanelUI');
C$.$classes$=[['ApproveSelectionAction',4],['CancelSelectionAction',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.openButtonMnemonic=0;
this.cancelButtonMnemonic=0;
this.openButtonText=null;
this.cancelButtonText=null;
this.openDialogTitleText=null;
this.approveSelectionAction=Clazz.new_($I$(2,1),[this, null]);
this.cancelSelectionAction=Clazz.new_($I$(3,1),[this, null]);
this.filechooser=null;
this.propertyChangeListener=null;
this.accessoryPanel=null;
this.readOnly=true;
this.usesSIngleFilePane=true;
},1);

C$.$fields$=[['Z',['readOnly','usesSIngleFilePane'],'I',['openButtonMnemonic','cancelButtonMnemonic'],'S',['openButtonText','cancelButtonText','openDialogTitleText'],'O',['approveSelectionAction','javax.swing.Action','+cancelSelectionAction','filechooser','javax.swing.JFileChooser','propertyChangeListener','java.beans.PropertyChangeListener','accessoryPanel','javax.swing.JPanel']]]

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (c) {
this.accessoryPanel=Clazz.new_([Clazz.new_($I$(5,1))],$I$(4,1).c$$java_awt_LayoutManager);
this.filechooser=c;
this.installDefaults$javax_swing_JFileChooser(this.filechooser);
this.installComponents$javax_swing_JFileChooser(this.filechooser);
this.installListeners$javax_swing_JFileChooser(this.filechooser);
this.filechooser.applyComponentOrientation$java_awt_ComponentOrientation(this.filechooser.getComponentOrientation$());
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent',  function (c) {
this.uninstallListeners$javax_swing_JFileChooser(this.filechooser);
this.uninstallComponents$javax_swing_JFileChooser(this.filechooser);
this.uninstallDefaults$javax_swing_JFileChooser(this.filechooser);
if (this.accessoryPanel != null ) {
this.accessoryPanel.removeAll$();
}this.accessoryPanel=null;
this.getFileChooser$().removeAll$();
});

Clazz.newMeth(C$, 'installComponents$javax_swing_JFileChooser',  function (fc) {
});

Clazz.newMeth(C$, 'uninstallComponents$javax_swing_JFileChooser',  function (fc) {
});

Clazz.newMeth(C$, 'installListeners$javax_swing_JFileChooser',  function (fc) {
this.propertyChangeListener=this.createPropertyChangeListener$javax_swing_JFileChooser(fc);
if (this.propertyChangeListener != null ) {
fc.addPropertyChangeListener$java_beans_PropertyChangeListener(this.propertyChangeListener);
}var inputMap=this.getInputMap$I(1);
$I$(6).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(fc, 1, inputMap);
var actionMap=this.getActionMap$();
$I$(6).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(fc, actionMap);
});

Clazz.newMeth(C$, 'getInputMap$I',  function (condition) {
if (condition == 1) {
return $I$(7,"get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S",[this.getFileChooser$(), this, "FileChooser.ancestorInputMap"]);
}return null;
});

Clazz.newMeth(C$, 'getActionMap$',  function () {
return this.createActionMap$();
});

Clazz.newMeth(C$, 'createActionMap$',  function () {
var map=Clazz.new_($I$(8,1));
map.put$O$javax_swing_Action("approveSelection", this.getApproveSelectionAction$());
map.put$O$javax_swing_Action("cancelSelection", this.getCancelSelectionAction$());
return map;
});

Clazz.newMeth(C$, 'uninstallListeners$javax_swing_JFileChooser',  function (fc) {
if (this.propertyChangeListener != null ) {
fc.removePropertyChangeListener$java_beans_PropertyChangeListener(this.propertyChangeListener);
}$I$(6).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(fc, 1, null);
$I$(6).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(fc, null);
});

Clazz.newMeth(C$, 'installDefaults$javax_swing_JFileChooser',  function (fc) {
this.installStrings$javax_swing_JFileChooser(fc);
$I$(9).installProperty$javax_swing_JComponent$S$O(fc, "opaque", Boolean.FALSE);
});

Clazz.newMeth(C$, 'installStrings$javax_swing_JFileChooser',  function (fc) {
this.openButtonText="Open";
this.openDialogTitleText="Open File";
this.cancelButtonText="Cancel";
});

Clazz.newMeth(C$, 'uninstallDefaults$javax_swing_JFileChooser',  function (fc) {
this.uninstallStrings$javax_swing_JFileChooser(fc);
});

Clazz.newMeth(C$, 'uninstallStrings$javax_swing_JFileChooser',  function (fc) {
this.openButtonText=null;
this.cancelButtonText=null;
});

Clazz.newMeth(C$, 'createPropertyChangeListener$javax_swing_JFileChooser',  function (fc) {
return null;
});

Clazz.newMeth(C$, 'getFileName$',  function () {
return null;
});

Clazz.newMeth(C$, 'getDirectoryName$',  function () {
return null;
});

Clazz.newMeth(C$, 'setFileName$S',  function (filename) {
});

Clazz.newMeth(C$, 'setDirectoryName$S',  function (dirname) {
});

Clazz.newMeth(C$, 'rescanCurrentDirectory$javax_swing_JFileChooser',  function (fc) {
});

Clazz.newMeth(C$, 'ensureFileIsVisible$javax_swing_JFileChooser$java_io_File',  function (fc, f) {
});

Clazz.newMeth(C$, 'getFileChooser$',  function () {
return this.filechooser;
});

Clazz.newMeth(C$, 'getAccessoryPanel$',  function () {
return this.accessoryPanel;
});

Clazz.newMeth(C$, 'getApproveButton$javax_swing_JFileChooser',  function (fc) {
return null;
});

Clazz.newMeth(C$, 'getApproveButtonToolTipText$javax_swing_JFileChooser',  function (fc) {
return null;
});

Clazz.newMeth(C$, 'getDialogTitle$javax_swing_JFileChooser',  function (fc) {
var dialogTitle=fc.getDialogTitle$();
if (dialogTitle != null ) {
return dialogTitle;
} else if (fc.getDialogType$() == 0) {
return this.openDialogTitleText;
} else {
return this.getApproveButtonText$javax_swing_JFileChooser(fc);
}});

Clazz.newMeth(C$, 'getApproveButtonMnemonic$javax_swing_JFileChooser',  function (fc) {
return 0;
});

Clazz.newMeth(C$, 'getApproveButtonText$javax_swing_JFileChooser',  function (fc) {
var buttonText=fc.getApproveButtonText$();
if (buttonText != null ) {
return buttonText;
} else if (fc.getDialogType$() == 0) {
return this.openButtonText;
} else {
return null;
}});

Clazz.newMeth(C$, 'getApproveSelectionAction$',  function () {
return this.approveSelectionAction;
});

Clazz.newMeth(C$, 'getCancelSelectionAction$',  function () {
return this.cancelSelectionAction;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSFileChooserUI, "ApproveSelectionAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["approveSelection"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var chooser=this.b$['swingjs.plaf.JSFileChooserUI'].getFileChooser$.apply(this.b$['swingjs.plaf.JSFileChooserUI'], []);
var filename=this.b$['swingjs.plaf.JSFileChooserUI'].getFileName$.apply(this.b$['swingjs.plaf.JSFileChooserUI'], []);
if (filename != null ) {
filename=filename.trim$();
}if (filename == null  || filename.equals$O("") ) {
return;
}var selectedFile=Clazz.new_($I$(1,1).c$$S,[filename]);
if (selectedFile != null ) {
chooser.setSelectedFile$java_io_File(selectedFile);
chooser.approveSelection$();
}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSFileChooserUI, "CancelSelectionAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['swingjs.plaf.JSFileChooserUI'].getFileChooser$.apply(this.b$['swingjs.plaf.JSFileChooserUI'], []).cancelSelection$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:07 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
