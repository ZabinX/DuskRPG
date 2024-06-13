(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'swingjs.JSUtil','javax.swing.JDialog','javax.swing.SwingUtilities','java.awt.BorderLayout','javax.swing.UIManager','java.awt.event.WindowAdapter','javax.swing.JOptionPane','java.awt.event.ComponentAdapter','java.awt.JSComponent','javax.swing.ClientPropertyKey','javax.swing.JInternalFrame','javax.swing.event.InternalFrameAdapter','javax.swing.JLayeredPane']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JOptionPane", null, 'javax.swing.JComponent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.disposeOnHide=true;
},1);

C$.$fields$=[['Z',['wantsInput','disposeOnHide'],'I',['messageType','optionType'],'O',['icon','javax.swing.Icon','message','java.lang.Object','options','Object[]','initialValue','java.lang.Object','+value','selectionValues','Object[]','inputValue','java.lang.Object','+initialSelectionValue']]
,['Z',['USE_HTML5_MODAL_FOR_WARNINGS_AND_ERRORS'],'O',['UNINITIALIZED_VALUE','java.lang.Object','listener','java.awt.Component','sharedFrameKey','java.lang.Object']]]

Clazz.newMeth(C$, 'showInputDialog$O',  function (message) {
return C$.showInputDialog$java_awt_Component$O(null, message);
}, 1);

Clazz.newMeth(C$, 'showInputDialog$O$O',  function (message, initialSelectionValue) {
return C$.showInputDialog$java_awt_Component$O$O(null, message, initialSelectionValue);
}, 1);

Clazz.newMeth(C$, 'showInputDialog$java_awt_Component$O',  function (parentComponent, message) {
return C$.showInputDialog$java_awt_Component$O$S$I(parentComponent, message, "Input", 3);
}, 1);

Clazz.newMeth(C$, 'showInputDialog$java_awt_Component$O$O',  function (parentComponent, message, initialSelectionValue) {
return C$.showInputDialog$java_awt_Component$O$S$I$javax_swing_Icon$OA$O(parentComponent, message, "Input", 3, null, null, initialSelectionValue);
}, 1);

Clazz.newMeth(C$, 'showInputDialog$java_awt_Component$O$S$I',  function (parentComponent, message, title, messageType) {
return C$.showInputDialog$java_awt_Component$O$S$I$javax_swing_Icon$OA$O(parentComponent, message, title, messageType, null, null, null);
}, 1);

Clazz.newMeth(C$, 'showInputDialog$java_awt_Component$O$S$I$javax_swing_Icon$OA$O',  function (parentComponent, message, title, messageType, icon, selectionValues, initialSelectionValue) {
var value;
if (!C$.isListener$java_awt_Component(parentComponent)) {
if (!(Clazz.instanceOf(message, "java.lang.String"))) {
C$.warnJSDeveloper$();
message="non-string messages require a PropertyChangeListener in SwingJS";
}if (!(Clazz.instanceOf(initialSelectionValue, "java.lang.String"))) {
C$.warnJSDeveloper$();
initialSelectionValue=(initialSelectionValue == null  ? "" : initialSelectionValue.toString());
}var jsReturn=$I$(1).prompt$S$S(message, initialSelectionValue);
return (jsReturn == null  ? null : jsReturn);
}var pane=Clazz.new_(C$.c$$O$I$I$javax_swing_Icon$OA$O,[message, messageType, 2, icon, null, null]);
pane.setWantsInput$Z(true);
pane.setSelectionValues$OA(selectionValues);
pane.setInitialSelectionValue$O(initialSelectionValue);
pane.setComponentOrientation$java_awt_ComponentOrientation(((parentComponent == null ) ? C$.getRootFrame$() : parentComponent).getComponentOrientation$());
var style=C$.styleFromMessageType$I(messageType);
var dialog=p$1.createDialog$java_awt_Component$S$I.apply(pane, [parentComponent, title, style]);
pane.selectInitialValue$();
dialog.setVisible$Z(true);
return $I$(2).ASYNCHRONOUS_OBJECT;
}, 1);

Clazz.newMeth(C$, 'showMessageDialog$java_awt_Component$O',  function (parentComponent, message) {
C$.showMessageDialog$java_awt_Component$O$S$I(parentComponent, message, "Message", 1);
}, 1);

Clazz.newMeth(C$, 'showMessageDialog$java_awt_Component$O$S$I',  function (parentComponent, message, title, messageType) {
C$.showMessageDialog$java_awt_Component$O$S$I$javax_swing_Icon(parentComponent, message, title, messageType, null);
}, 1);

Clazz.newMeth(C$, 'showMessageDialog$java_awt_Component$O$S$I$javax_swing_Icon',  function (parentComponent, message, title, messageType, icon) {
var simplify=C$.USE_HTML5_MODAL_FOR_WARNINGS_AND_ERRORS && (messageType == 2 || messageType == 0 ) ;
var haveListener=C$.isListener$java_awt_Component(parentComponent);
if (simplify || !haveListener ) {
if (Clazz.instanceOf(message, "java.lang.String")) {
var s=C$.getMessageTypeString$I$S(messageType, ": ") + (title === "Message"  ? "" : title + "\n\n") + (Clazz.instanceOf(message, "java.lang.String") ? "" + message : "?") ;
$I$(1).alert$O(s);
return;
}C$.warnJSDeveloper$();
}C$.showOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O(parentComponent, message, title, -1, messageType, icon, null, null);
}, 1);

Clazz.newMeth(C$, 'isListener$java_awt_Component',  function (parentComponent) {
return Clazz.instanceOf((C$.listener != null  ? C$.listener : parentComponent), "java.beans.PropertyChangeListener");
}, 1);

Clazz.newMeth(C$, 'warnJSDeveloper$',  function () {
System.err.println$S("JOptionPane: Component does not implement PropertyChangeListener.");
}, 1);

Clazz.newMeth(C$, 'showConfirmDialog$java_awt_Component$O',  function (parentComponent, message) {
return C$.showConfirmDialog$java_awt_Component$O$S$I(parentComponent, message, "Confirm", 1);
}, 1);

Clazz.newMeth(C$, 'showConfirmDialog$java_awt_Component$O$S$I',  function (parentComponent, message, title, optionType) {
return C$.showConfirmDialog$java_awt_Component$O$S$I$I(parentComponent, message, title, optionType, 3);
}, 1);

Clazz.newMeth(C$, 'showConfirmDialog$java_awt_Component$O$S$I$I',  function (parentComponent, message, title, optionType, messageType) {
return C$.showConfirmDialog$java_awt_Component$O$S$I$I$javax_swing_Icon(parentComponent, message, title, optionType, messageType, null);
}, 1);

Clazz.newMeth(C$, 'showConfirmDialog$java_awt_Component$O$S$I$I$javax_swing_Icon',  function (parentComponent, message, title, optionType, messageType, icon) {
var options=Clazz.array(String, -1, ["ok"]);
switch (optionType) {
case 2:
options=Clazz.array(String, -1, ["ok", "cancel"]);
break;
case 1:
options=Clazz.array(String, -1, ["yes", "no", "cancel"]);
break;
case 0:
options=Clazz.array(String, -1, ["yes", "no"]);
break;
}
var jsReturn=true;
if (!C$.isListener$java_awt_Component(parentComponent)) {
if (!(Clazz.instanceOf(message, "java.lang.String"))) {
C$.warnJSDeveloper$();
message="?";
}jsReturn=$I$(1).confirm$S(message);
switch (optionType) {
case 2:
default:
return (jsReturn ? 0 : 2);
case 1:
return (jsReturn ? 0 : 2);
case 0:
return (jsReturn ? 0 : 1);
}
}return C$.showOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O(parentComponent, message, title, optionType, messageType, icon, options, null);
}, 1);

Clazz.newMeth(C$, 'showOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O',  function (parentComponent, message, title, optionType, messageType, icon, options, initialValue) {
if (!C$.isListener$java_awt_Component(parentComponent)) {
C$.warnJSDeveloper$();
return 2;
}var pane=Clazz.new_(C$.c$$O$I$I$javax_swing_Icon$OA$O,[message, messageType, optionType, icon, options, initialValue]);
pane.setInitialValue$O(initialValue);
pane.setComponentOrientation$java_awt_ComponentOrientation(((parentComponent == null ) ? C$.getRootFrame$() : parentComponent).getComponentOrientation$());
var style=C$.styleFromMessageType$I(messageType);
var dialog=p$1.createDialog$java_awt_Component$S$I.apply(pane, [parentComponent, title, style]);
pane.selectInitialValue$();
dialog.setVisible$Z(true);
return $I$(2).ASYNCHRONOUS_INTEGER;
}, 1);

Clazz.newMeth(C$, 'createDialog$java_awt_Component$S',  function (parentComponent, title) {
var style=C$.styleFromMessageType$I(this.getMessageType$());
this.disposeOnHide=false;
return p$1.createDialog$java_awt_Component$S$I.apply(this, [parentComponent, title, style]);
});

Clazz.newMeth(C$, 'createDialog$S',  function (title) {
var style=C$.styleFromMessageType$I(this.getMessageType$());
var dialog=Clazz.new_($I$(2,1).c$$java_awt_JSDialog$S$Z,[null, title, true]);
p$1.initDialog$javax_swing_JDialog$I$java_awt_Component.apply(this, [dialog, style, null]);
return dialog;
});

Clazz.newMeth(C$, 'createDialog$java_awt_Component$S$I',  function (parentComponent, title, style) {
var dialog;
var window=C$.getWindowForComponent$java_awt_Component(parentComponent);
if (Clazz.instanceOf(window, "java.awt.JSFrame")) {
dialog=Clazz.new_($I$(2,1).c$$java_awt_JSFrame$S$Z,[window, title, true]);
} else {
dialog=Clazz.new_($I$(2,1).c$$java_awt_JSDialog$S$Z,[window, title, true]);
}if (Clazz.instanceOf(window, "javax.swing.SwingUtilities.SharedOwnerFrame")) {
var ownerShutdownListener=$I$(3).getSharedOwnerFrameShutdownListener$();
dialog.addWindowListener$java_awt_event_WindowListener(ownerShutdownListener);
}p$1.initDialog$javax_swing_JDialog$I$java_awt_Component.apply(this, [dialog, style, parentComponent]);
return dialog;
}, p$1);

Clazz.newMeth(C$, 'initDialog$javax_swing_JDialog$I$java_awt_Component',  function (dialog, style, parentComponent) {
dialog.setComponentOrientation$java_awt_ComponentOrientation(this.getComponentOrientation$());
var contentPane=dialog.getContentPane$();
contentPane.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4,1)));
contentPane.add$java_awt_Component$O(this, "Center");
dialog.setResizable$Z(false);
if ($I$(2).isDefaultLookAndFeelDecorated$()) {
var supportsWindowDecorations=$I$(5).getLookAndFeel$().getSupportsWindowDecorations$();
if (supportsWindowDecorations) {
dialog.setUndecorated$Z(true);
this.getRootPane$().setWindowDecorationStyle$I(style);
}}dialog.pack$();
dialog.setLocationRelativeTo$java_awt_Component(parentComponent);
var adapter=((P$.JOptionPane$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JOptionPane$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.WindowAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.gotFocus=false;
},1);

C$.$fields$=[['Z',['gotFocus']]]

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (we) {
if (this.b$['javax.swing.JOptionPane'].wantsInput) this.b$['javax.swing.JOptionPane'].setInputValue$O.apply(this.b$['javax.swing.JOptionPane'], [null]);
 else this.b$['javax.swing.JOptionPane'].setValue$O.apply(this.b$['javax.swing.JOptionPane'], [Integer.valueOf$I(-1)]);
if (this.b$['javax.swing.JOptionPane'].disposeOnHide) {
this.$finals$.dialog.dispose$();
}});

Clazz.newMeth(C$, 'windowGainedFocus$java_awt_event_WindowEvent',  function (we) {
if (!this.gotFocus) {
this.b$['javax.swing.JOptionPane'].selectInitialValue$.apply(this.b$['javax.swing.JOptionPane'], []);
this.gotFocus=true;
}});
})()
), Clazz.new_($I$(6,1),[this, {dialog:dialog}],P$.JOptionPane$1));
dialog.addWindowListener$java_awt_event_WindowListener(adapter);
dialog.addWindowFocusListener$java_awt_event_WindowFocusListener(adapter);
dialog.addComponentListener$java_awt_event_ComponentListener(((P$.JOptionPane$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "JOptionPane$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.event.ComponentAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'componentShown$java_awt_event_ComponentEvent',  function (ce) {
this.b$['javax.swing.JOptionPane'].setValue$O.apply(this.b$['javax.swing.JOptionPane'], [$I$(7).UNINITIALIZED_VALUE]);
});
})()
), Clazz.new_($I$(8,1),[this, null],P$.JOptionPane$2)));
$I$(9,"秘ensurePropertyChangeListener$java_awt_Component$java_awt_Component",[this, (C$.listener == null  ? parentComponent : C$.listener)]);
this.addPropertyChangeListener$java_beans_PropertyChangeListener(((P$.JOptionPane$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "JOptionPane$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (event) {
if (this.$finals$.dialog.isVisible$() && event.getSource$() === this.b$['javax.swing.JOptionPane']   && (event.getPropertyName$().equals$O("value") || event.getPropertyName$().equals$O("inputValue") ) ) {
var value=event.getNewValue$();
if (value !== $I$(7).UNINITIALIZED_VALUE ) {
this.$finals$.dialog.setVisible$Z(false);
this.$finals$.dialog.dispose$();
}}});
})()
), Clazz.new_(P$.JOptionPane$3.$init$,[this, {dialog:dialog}])));
}, p$1);

Clazz.newMeth(C$, 'showInternalMessageDialog$java_awt_Component$O$S$I',  function (parentComponent, message, title, messageType) {
C$.showInternalMessageDialog$java_awt_Component$O$S$I$javax_swing_Icon(parentComponent, message, title, messageType, null);
}, 1);

Clazz.newMeth(C$, 'showInternalMessageDialog$java_awt_Component$O$S$I$javax_swing_Icon',  function (parentComponent, message, title, messageType, icon) {
C$.showInternalOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O(parentComponent, message, title, -1, messageType, icon, null, null);
}, 1);

Clazz.newMeth(C$, 'showInternalConfirmDialog$java_awt_Component$O',  function (parentComponent, message) {
return C$.showInternalConfirmDialog$java_awt_Component$O$S$I(parentComponent, message, $I$(5).getString$O("OptionPane.titleText"), 1);
}, 1);

Clazz.newMeth(C$, 'showInternalConfirmDialog$java_awt_Component$O$S$I',  function (parentComponent, message, title, optionType) {
return C$.showInternalConfirmDialog$java_awt_Component$O$S$I$I(parentComponent, message, title, optionType, 3);
}, 1);

Clazz.newMeth(C$, 'showInternalConfirmDialog$java_awt_Component$O$S$I$I',  function (parentComponent, message, title, optionType, messageType) {
return C$.showInternalConfirmDialog$java_awt_Component$O$S$I$I$javax_swing_Icon(parentComponent, message, title, optionType, messageType, null);
}, 1);

Clazz.newMeth(C$, 'showInternalConfirmDialog$java_awt_Component$O$S$I$I$javax_swing_Icon',  function (parentComponent, message, title, optionType, messageType, icon) {
return C$.showInternalOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O(parentComponent, message, title, optionType, messageType, icon, null, null);
}, 1);

Clazz.newMeth(C$, 'showInternalOptionDialog$java_awt_Component$O$S$I$I$javax_swing_Icon$OA$O',  function (parentComponent, message, title, optionType, messageType, icon, options, initialValue) {
var pane=Clazz.new_(C$.c$$O$I$I$javax_swing_Icon$OA$O,[message, messageType, optionType, icon, options, initialValue]);
pane.putClientProperty$O$O($I$(10).PopupFactory_FORCE_HEAVYWEIGHT_POPUP, Boolean.TRUE);
pane.setInitialValue$O(initialValue);
var dialog=pane.createInternalFrame$java_awt_Component$S(parentComponent, title);
pane.selectInitialValue$();
dialog.setVisible$Z(true);
if (dialog.isVisible$() && !dialog.isShowing$() ) {
var parent=dialog.getParent$();
while (parent != null ){
if (parent.isVisible$() == false ) {
parent.setVisible$Z(true);
}parent=parent.getParent$();
}
}if (Clazz.instanceOf(parentComponent, "javax.swing.JInternalFrame")) {
try {
(parentComponent).setSelected$Z(true);
} catch (e) {
if (Clazz.exceptionOf(e,"java.beans.PropertyVetoException")){
} else {
throw e;
}
}
}var selectedValue=pane.getValue$();
if (selectedValue == null ) {
return -1;
}if (options == null ) {
if (Clazz.instanceOf(selectedValue, "java.lang.Integer")) {
return (selectedValue).intValue$();
}return -1;
}for (var counter=0, maxCounter=options.length; counter < maxCounter; counter++) {
if (options[counter].equals$O(selectedValue)) {
return counter;
}}
return -1;
}, 1);

Clazz.newMeth(C$, 'showInternalInputDialog$java_awt_Component$O',  function (parentComponent, message) {
return C$.showInternalInputDialog$java_awt_Component$O$S$I(parentComponent, message, $I$(5).getString$O$java_awt_Component("OptionPane.inputDialogTitle", parentComponent), 3);
}, 1);

Clazz.newMeth(C$, 'showInternalInputDialog$java_awt_Component$O$S$I',  function (parentComponent, message, title, messageType) {
return C$.showInternalInputDialog$java_awt_Component$O$S$I$javax_swing_Icon$OA$O(parentComponent, message, title, messageType, null, null, null);
}, 1);

Clazz.newMeth(C$, 'showInternalInputDialog$java_awt_Component$O$S$I$javax_swing_Icon$OA$O',  function (parentComponent, message, title, messageType, icon, selectionValues, initialSelectionValue) {
var pane=Clazz.new_(C$.c$$O$I$I$javax_swing_Icon$OA$O,[message, messageType, 2, icon, null, null]);
pane.putClientProperty$O$O($I$(10).PopupFactory_FORCE_HEAVYWEIGHT_POPUP, Boolean.TRUE);
pane.setWantsInput$Z(true);
pane.setSelectionValues$OA(selectionValues);
pane.setInitialSelectionValue$O(initialSelectionValue);
var dialog=pane.createInternalFrame$java_awt_Component$S(parentComponent, title);
pane.selectInitialValue$();
dialog.setVisible$Z(true);
if (dialog.isVisible$() && !dialog.isShowing$() ) {
var parent=dialog.getParent$();
while (parent != null ){
if (parent.isVisible$() == false ) {
parent.setVisible$Z(true);
}parent=parent.getParent$();
}
}dialog.show$();
if (Clazz.instanceOf(parentComponent, "javax.swing.JInternalFrame")) {
try {
(parentComponent).setSelected$Z(true);
} catch (e) {
if (Clazz.exceptionOf(e,"java.beans.PropertyVetoException")){
} else {
throw e;
}
}
}var value=pane.getInputValue$();
if (value === C$.UNINITIALIZED_VALUE ) {
return null;
}return value;
}, 1);

Clazz.newMeth(C$, 'createInternalFrame$java_awt_Component$S',  function (parentComponent, title) {
var parent=C$.getDesktopPaneForComponent$java_awt_Component(parentComponent);
if (parent == null  && (parentComponent == null  || (parent=parentComponent.getParent$()) == null  ) ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["JOptionPane: parentComponent does not have a valid parent"]);
}var iFrame=Clazz.new_($I$(11,1).c$$S$Z$Z$Z$Z,[title, false, true, false, false]);
iFrame.putClientProperty$O$O("JInternalFrame.frameType", "optionDialog");
iFrame.putClientProperty$O$O("JInternalFrame.messageType",  new Integer(this.getMessageType$()));
iFrame.addInternalFrameListener$javax_swing_event_InternalFrameListener(((P$.JOptionPane$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "JOptionPane$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.event.InternalFrameAdapter'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'internalFrameClosing$javax_swing_event_InternalFrameEvent',  function (e) {
if (this.b$['javax.swing.JOptionPane'].getValue$.apply(this.b$['javax.swing.JOptionPane'], []) === $I$(7).UNINITIALIZED_VALUE ) {
this.b$['javax.swing.JOptionPane'].setValue$O.apply(this.b$['javax.swing.JOptionPane'], [null]);
}});
})()
), Clazz.new_($I$(12,1),[this, null],P$.JOptionPane$4)));
this.addPropertyChangeListener$java_beans_PropertyChangeListener(((P$.JOptionPane$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "JOptionPane$5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.beans.PropertyChangeListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (event) {
if (this.$finals$.iFrame.isVisible$() && event.getSource$() === this.b$['javax.swing.JOptionPane']   && event.getPropertyName$().equals$O("value") ) {
try {
this.$finals$.iFrame.setClosed$Z(true);
} catch (e) {
if (Clazz.exceptionOf(e,"java.beans.PropertyVetoException")){
} else {
throw e;
}
}
this.$finals$.iFrame.setVisible$Z(false);
}});
})()
), Clazz.new_(P$.JOptionPane$5.$init$,[this, {iFrame:iFrame}])));
iFrame.getContentPane$().add$java_awt_Component$O(this, "Center");
if (Clazz.instanceOf(parent, "javax.swing.JDesktopPane")) {
parent.add$java_awt_Component$O(iFrame, $I$(13).MODAL_LAYER);
} else {
parent.add$java_awt_Component$O(iFrame, "Center");
}var iFrameSize=iFrame.getPreferredSize$();
var rootSize=parent.getSize$();
var parentSize=parentComponent.getSize$();
iFrame.setBounds$I$I$I$I(((rootSize.width - iFrameSize.width)/2|0), ((rootSize.height - iFrameSize.height)/2|0), iFrameSize.width, iFrameSize.height);
var iFrameCoord=$I$(3).convertPoint$java_awt_Component$I$I$java_awt_Component(parentComponent, 0, 0, parent);
var x=((parentSize.width - iFrameSize.width)/2|0) + iFrameCoord.x;
var y=((parentSize.height - iFrameSize.height)/2|0) + iFrameCoord.y;
var ovrx=x + iFrameSize.width - rootSize.width;
var ovry=y + iFrameSize.height - rootSize.height;
x=Math.max((ovrx > 0 ? x - ovrx : x), 0);
y=Math.max((ovry > 0 ? y - ovry : y), 0);
iFrame.setBounds$I$I$I$I(x, y, iFrameSize.width, iFrameSize.height);
parent.validate$();
try {
iFrame.setSelected$Z(true);
} catch (e) {
if (Clazz.exceptionOf(e,"java.beans.PropertyVetoException")){
} else {
throw e;
}
}
return iFrame;
});

Clazz.newMeth(C$, 'getReturnIndex$O',  function (value) {
var selectedValue=this.getValue$();
var ret=-1;
if (selectedValue == null ) {
ret=-1;
} else if (this.options == null ) {
if (Clazz.instanceOf(selectedValue, "java.lang.Integer")) {
ret=(selectedValue).intValue$();
} else {
ret=-1;
}} else {
for (var counter=0, maxCounter=this.options.length; counter < maxCounter; counter++) {
if (this.options[counter].equals$O(selectedValue)) {
ret=counter;
break;
}}
}return ret;
});

Clazz.newMeth(C$, 'getFrameForComponent$java_awt_Component',  function (parentComponent) {
if (parentComponent == null ) return C$.getRootFrame$();
if (Clazz.instanceOf(parentComponent, "java.awt.JSFrame")) return parentComponent;
return C$.getFrameForComponent$java_awt_Component(parentComponent.getParent$());
}, 1);

Clazz.newMeth(C$, 'getWindowForComponent$java_awt_Component',  function (parentComponent) {
if (parentComponent == null ) return C$.getRootFrame$();
if (Clazz.instanceOf(parentComponent, "java.awt.JSFrame") || Clazz.instanceOf(parentComponent, "java.awt.JSDialog") ) return parentComponent;
return C$.getWindowForComponent$java_awt_Component(parentComponent.getParent$());
}, 1);

Clazz.newMeth(C$, 'getDesktopPaneForComponent$java_awt_Component',  function (parentComponent) {
if (parentComponent == null ) return null;
if (Clazz.instanceOf(parentComponent, "javax.swing.JDesktopPane")) return parentComponent;
return C$.getDesktopPaneForComponent$java_awt_Component(parentComponent.getParent$());
}, 1);

Clazz.newMeth(C$, 'setRootFrame$java_awt_JSFrame',  function (newRootFrame) {
if (newRootFrame != null ) {
$I$(3).appContextPut$O$O(C$.sharedFrameKey, newRootFrame);
} else {
$I$(3).appContextRemove$O(C$.sharedFrameKey);
}}, 1);

Clazz.newMeth(C$, 'setRootFrame$java_awt_Frame',  function (newRootFrame) {
if (newRootFrame != null ) {
$I$(3).appContextPut$O$O(C$.sharedFrameKey, newRootFrame);
} else {
$I$(3).appContextRemove$O(C$.sharedFrameKey);
}}, 1);

Clazz.newMeth(C$, 'getRootFrame$',  function () {
var sharedFrame=$I$(3).appContextGet$O(C$.sharedFrameKey);
if (sharedFrame == null ) {
sharedFrame=$I$(3).getSharedOwnerFrame$();
$I$(3).appContextPut$O$O(C$.sharedFrameKey, sharedFrame);
}return sharedFrame;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$O.apply(this, ["JOptionPane message"]);
}, 1);

Clazz.newMeth(C$, 'c$$O',  function (message) {
C$.c$$O$I.apply(this, [message, -1]);
}, 1);

Clazz.newMeth(C$, 'c$$O$I',  function (message, messageType) {
C$.c$$O$I$I.apply(this, [message, messageType, -1]);
}, 1);

Clazz.newMeth(C$, 'c$$O$I$I',  function (message, messageType, optionType) {
C$.c$$O$I$I$javax_swing_Icon.apply(this, [message, messageType, optionType, null]);
}, 1);

Clazz.newMeth(C$, 'c$$O$I$I$javax_swing_Icon',  function (message, messageType, optionType, icon) {
C$.c$$O$I$I$javax_swing_Icon$OA.apply(this, [message, messageType, optionType, icon, null]);
}, 1);

Clazz.newMeth(C$, 'c$$O$I$I$javax_swing_Icon$OA',  function (message, messageType, optionType, icon, options) {
C$.c$$O$I$I$javax_swing_Icon$OA$O.apply(this, [message, messageType, optionType, icon, options, null]);
}, 1);

Clazz.newMeth(C$, 'c$$O$I$I$javax_swing_Icon$OA$O',  function (message, messageType, optionType, icon, options, initialValue) {
Clazz.super_(C$, this);
this.message=message;
this.options=options;
this.initialValue=initialValue;
this.icon=icon;
this.setMessageType$I(messageType);
this.setOptionType$I(optionType);
this.value=C$.UNINITIALIZED_VALUE;
this.inputValue=C$.UNINITIALIZED_VALUE;
this.updateUI$();
}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "OptionPaneUI";
});

Clazz.newMeth(C$, 'setUI$javax_swing_plaf_OptionPaneUI',  function (ui) {
if (this.ui !== ui ) {
C$.superclazz.prototype.setUI$javax_swing_plaf_ComponentUI.apply(this, [ui]);
this.invalidate$();
}});

Clazz.newMeth(C$, 'setMessage$O',  function (newMessage) {
var oldMessage=this.message;
this.message=newMessage;
this.firePropertyChange$S$O$O("message", oldMessage, this.message);
});

Clazz.newMeth(C$, 'getMessage$',  function () {
return this.message;
});

Clazz.newMeth(C$, 'setIcon$javax_swing_Icon',  function (newIcon) {
var oldIcon=this.icon;
this.icon=newIcon;
this.firePropertyChange$S$O$O("icon", oldIcon, this.icon);
});

Clazz.newMeth(C$, 'getIcon$',  function () {
return this.icon;
});

Clazz.newMeth(C$, 'setValue$O',  function (newValue) {
var oldValue=this.value;
this.value=newValue;
this.firePropertyChange$S$O$O("value", oldValue, this.value);
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setOptions$OA',  function (newOptions) {
var oldOptions=this.options;
this.options=newOptions;
this.firePropertyChange$S$O$O("options", oldOptions, this.options);
});

Clazz.newMeth(C$, 'getOptions$',  function () {
if (this.options != null ) {
var optionCount=this.options.length;
var retOptions=Clazz.array(java.lang.Object, [optionCount]);
System.arraycopy$O$I$O$I$I(this.options, 0, retOptions, 0, optionCount);
return retOptions;
}return this.options;
});

Clazz.newMeth(C$, 'setInitialValue$O',  function (newInitialValue) {
var oldIV=this.initialValue;
this.initialValue=newInitialValue;
this.firePropertyChange$S$O$O("initialValue", oldIV, this.initialValue);
});

Clazz.newMeth(C$, 'getInitialValue$',  function () {
return this.initialValue;
});

Clazz.newMeth(C$, 'setMessageType$I',  function (newType) {
if (newType != 0 && newType != 1  && newType != 2  && newType != 3  && newType != -1 ) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["JOptionPane: type must be one of JOptionPane.ERROR_MESSAGE, JOptionPane.INFORMATION_MESSAGE, JOptionPane.WARNING_MESSAGE, JOptionPane.QUESTION_MESSAGE or JOptionPane.PLAIN_MESSAGE"]);
var oldType=this.messageType;
this.messageType=newType;
this.firePropertyChange$S$I$I("messageType", oldType, this.messageType);
});

Clazz.newMeth(C$, 'getMessageType$',  function () {
return this.messageType;
});

Clazz.newMeth(C$, 'setOptionType$I',  function (newType) {
if (newType != -1 && newType != 0  && newType != 1  && newType != 2 ) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["JOptionPane: option type must be one of JOptionPane.DEFAULT_OPTION, JOptionPane.YES_NO_OPTION, JOptionPane.YES_NO_CANCEL_OPTION or JOptionPane.OK_CANCEL_OPTION"]);
var oldType=this.optionType;
this.optionType=newType;
this.firePropertyChange$S$I$I("optionType", oldType, this.optionType);
});

Clazz.newMeth(C$, 'getOptionType$',  function () {
return this.optionType;
});

Clazz.newMeth(C$, 'setSelectionValues$OA',  function (newValues) {
var oldValues=this.selectionValues;
this.selectionValues=newValues;
this.firePropertyChange$S$O$O("selectionValues", oldValues, newValues);
if (this.selectionValues != null ) this.setWantsInput$Z(true);
});

Clazz.newMeth(C$, 'getSelectionValues$',  function () {
return this.selectionValues;
});

Clazz.newMeth(C$, 'setInitialSelectionValue$O',  function (newValue) {
var oldValue=this.initialSelectionValue;
this.initialSelectionValue=newValue;
this.firePropertyChange$S$O$O("initialSelectionValue", oldValue, newValue);
});

Clazz.newMeth(C$, 'getInitialSelectionValue$',  function () {
return this.initialSelectionValue;
});

Clazz.newMeth(C$, 'setInputValue$O',  function (newValue) {
var oldValue=this.inputValue;
this.inputValue=newValue;
this.firePropertyChange$S$O$O("inputValue", oldValue, newValue);
});

Clazz.newMeth(C$, 'getInputValue$',  function () {
return this.inputValue;
});

Clazz.newMeth(C$, 'getMaxCharactersPerLineCount$',  function () {
return 2147483647;
});

Clazz.newMeth(C$, 'setWantsInput$Z',  function (newValue) {
var oldValue=this.wantsInput;
this.wantsInput=newValue;
this.firePropertyChange$S$Z$Z("wantsInput", oldValue, newValue);
});

Clazz.newMeth(C$, 'getWantsInput$',  function () {
return this.wantsInput;
});

Clazz.newMeth(C$, 'selectInitialValue$',  function () {
var ui=this.getUI$();
if (ui != null ) {
ui.selectInitialValue$javax_swing_JOptionPane(this);
}});

Clazz.newMeth(C$, 'styleFromMessageType$I',  function (messageType) {
switch (messageType) {
case 0:
return 4;
case 3:
return 7;
case 2:
return 8;
case 1:
return 3;
case -1:
default:
return 2;
}
}, 1);

Clazz.newMeth(C$, 'paramString$',  function () {
var iconString=(this.icon != null  ? this.icon.toString() : "");
var initialValueString=(this.initialValue != null  ? this.initialValue.toString() : "");
var messageString=(this.message != null  ? this.message.toString() : "");
var messageTypeString=C$.getMessageTypeString$I$S(this.messageType, "_MESSAGE");
var optionTypeString;
if (this.optionType == -1) {
optionTypeString="DEFAULT_OPTION";
} else if (this.optionType == 0) {
optionTypeString="YES_NO_OPTION";
} else if (this.optionType == 1) {
optionTypeString="YES_NO_CANCEL_OPTION";
} else if (this.optionType == 2) {
optionTypeString="OK_CANCEL_OPTION";
} else optionTypeString="";
var wantsInputString=(this.wantsInput ? "true" : "false");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",icon=" + iconString + ",initialValue=" + initialValueString + ",message=" + messageString + ",messageType=" + messageTypeString + ",optionType=" + optionTypeString + ",wantsInput=" + wantsInputString ;
});

Clazz.newMeth(C$, 'getMessageTypeString$I$S',  function (messageType, trailer) {
var s;
switch (messageType) {
case 0:
s="ERROR";
break;
case 1:
s=(trailer === "_MESSAGE"  ? "INFORMATION" : "");
break;
case 2:
s="WARNING";
break;
case 3:
s=(trailer === "_MESSAGE"  ? "QUESTION" : "");
break;
case -1:
s=(trailer === "_MESSAGE"  ? "PLAIN" : "");
break;
default:
s="";
break;
}
return (s === ""  ? "" : s + trailer);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.UNINITIALIZED_VALUE="uninitializedValue";
C$.USE_HTML5_MODAL_FOR_WARNINGS_AND_ERRORS=true;
C$.sharedFrameKey=Clazz.getClass(C$);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
