(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'javax.swing.JInternalFrame','javax.swing.SwingUtilities','java.awt.JSComponent','sun.awt.AppContext',['javax.swing.JInternalFrame','.FocusPropertyChangeListener'],['javax.swing.JInternalFrame','.JDesktopIcon'],'javax.swing.UIManager','javax.swing.JLayeredPane','sun.swing.SwingUtilities2','javax.swing.event.InternalFrameListener','javax.swing.event.InternalFrameEvent','java.beans.VetoableChangeSupport','java.beans.VetoableChangeListener']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JInternalFrame", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JFrame', ['javax.swing.WindowConstants', 'javax.swing.RootPaneContainer']);
C$.$classes$=[['FocusPropertyChangeListener',10],['JDesktopIcon',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.normalBounds=null;
},1);

C$.$fields$=[['Z',['closable','isClosed','maximizable','isMaximum','iconable','isIcon','isSelected','opened','isDragging'],'O',['vetoableChangeSupport','java.beans.VetoableChangeSupport','frameIcon','javax.swing.Icon','desktopIcon','javax.swing.JInternalFrame.JDesktopIcon','lastCursor','java.awt.Cursor','normalBounds','java.awt.Rectangle','lastFocusOwner','java.awt.Component','desktop','javax.swing.JDesktopPane']]]

Clazz.newMeth(C$, 'addPropertyChangeListenerIfNecessary$',  function () {
if ($I$(4).getAppContext$().get$O("JInternalFramePropertyChangeListener") == null ) {
var focusListener=Clazz.new_($I$(5,1));
$I$(4).getAppContext$().put$O$O("JInternalFramePropertyChangeListener", focusListener);
}}, 1);

Clazz.newMeth(C$, 'updateLastFocusOwner$java_awt_Component',  function (component) {
if (component != null ) {
var parent=component;
while (parent != null ){
if (Clazz.instanceOf(parent, "javax.swing.JInternalFrame")) {
p$1.setLastFocusOwner$java_awt_Component.apply((parent), [component]);
break;
}parent=parent.getParent$();
}
}}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S$Z$Z$Z$Z.apply(this, ["", false, false, false, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (title) {
C$.c$$S$Z$Z$Z$Z.apply(this, [title, false, false, false, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z',  function (title, resizable) {
C$.c$$S$Z$Z$Z$Z.apply(this, [title, resizable, false, false, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z$Z',  function (title, resizable, closable) {
C$.c$$S$Z$Z$Z$Z.apply(this, [title, resizable, closable, false, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z$Z$Z',  function (title, resizable, closable, maximizable) {
C$.c$$S$Z$Z$Z$Z.apply(this, [title, resizable, closable, maximizable, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z$Z$Z$Z',  function (title, resizable, closable, maximizable, iconifiable) {
;C$.superclazz.c$$S$java_awt_GraphicsConfiguration.apply(this,[title, null]);C$.$init$.apply(this);
this.秘paintClass=C$ ||null;
this.defaultCloseOperation=2;
this.resizable=resizable;
this.closable=closable;
this.maximizable=maximizable;
this.isMaximum=false;
this.iconable=iconifiable;
this.isIcon=false;
this.desktopIcon=Clazz.new_($I$(6,1).c$$javax_swing_JInternalFrame,[this]);
C$.addPropertyChangeListenerIfNecessary$();
}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "InternalFrameUI";
});

Clazz.newMeth(C$, 'getUI$',  function () {
return this.ui;
});

Clazz.newMeth(C$, 'setUI$javax_swing_plaf_InternalFrameUI',  function (ui) {
var checkingEnabled=this.isRootPaneCheckingEnabled$();
try {
this.setRootPaneCheckingEnabled$Z(false);
C$.superclazz.prototype.setUI$javax_swing_plaf_ComponentUI.apply(this, [ui]);
} finally {
this.setRootPaneCheckingEnabled$Z(checkingEnabled);
}
});

Clazz.newMeth(C$, 'updateUI$',  function () {
C$.superclazz.prototype.updateUI$.apply(this, []);
this.invalidate$();
if (this.desktopIcon != null ) {
this.desktopIcon.updateUIWhenHidden$();
}});

Clazz.newMeth(C$, 'updateUIWhenHidden$',  function () {
this.setUI$javax_swing_plaf_InternalFrameUI($I$(7).getUI$java_awt_Component(this));
this.invalidate$();
var children=$I$(3).秘getChildArray$java_awt_Container(this.desktop);
var n=this.desktop.getComponentCount$();
for (var i=0; i < n; i++) {
$I$(2).updateComponentTreeUI$java_awt_Component(children[i]);
}
});

Clazz.newMeth(C$, 'setClosable$Z',  function (b) {
var oldValue=this.closable ? Boolean.TRUE : Boolean.FALSE;
var newValue=b ? Boolean.TRUE : Boolean.FALSE;
this.closable=b;
this.firePropertyChange$S$O$O("closable", oldValue, newValue);
});

Clazz.newMeth(C$, 'isClosable$',  function () {
return this.closable;
});

Clazz.newMeth(C$, 'isClosed$',  function () {
return this.isClosed;
});

Clazz.newMeth(C$, 'setClosed$Z',  function (b) {
if (this.isClosed == b ) {
return;
}var oldValue=this.isClosed ? Boolean.TRUE : Boolean.FALSE;
var newValue=b ? Boolean.TRUE : Boolean.FALSE;
if (b) {
this.fireInternalFrameEvent$I(25550);
}this.fireVetoableChange$S$O$O("closed", oldValue, newValue);
this.isClosed=b;
if (this.isClosed) {
this.setVisible$Z(false);
}this.firePropertyChange$S$O$O("closed", oldValue, newValue);
if (this.isClosed) {
this.dispose$();
} else if (!this.opened) {
}});

Clazz.newMeth(C$, 'setIconifiable$Z',  function (b) {
var oldValue=this.iconable ? Boolean.TRUE : Boolean.FALSE;
var newValue=b ? Boolean.TRUE : Boolean.FALSE;
this.iconable=b;
this.firePropertyChange$S$O$O("iconable", oldValue, newValue);
});

Clazz.newMeth(C$, 'isIconifiable$',  function () {
return this.iconable;
});

Clazz.newMeth(C$, 'isIcon$',  function () {
return this.isIcon;
});

Clazz.newMeth(C$, 'setIcon$Z',  function (b) {
if (this.isIcon == b ) {
return;
}this.firePropertyChange$S$O$O("ancestor", null, this.getParent$());
var oldValue=this.isIcon ? Boolean.TRUE : Boolean.FALSE;
var newValue=b ? Boolean.TRUE : Boolean.FALSE;
this.fireVetoableChange$S$O$O("icon", oldValue, newValue);
this.isIcon=b;
this.firePropertyChange$S$O$O("icon", oldValue, newValue);
if (b) this.fireInternalFrameEvent$I(25552);
 else this.fireInternalFrameEvent$I(25553);
});

Clazz.newMeth(C$, 'setMaximizable$Z',  function (b) {
var oldValue=this.maximizable ? Boolean.TRUE : Boolean.FALSE;
var newValue=b ? Boolean.TRUE : Boolean.FALSE;
this.maximizable=b;
this.firePropertyChange$S$O$O("maximizable", oldValue, newValue);
});

Clazz.newMeth(C$, 'isMaximizable$',  function () {
return this.maximizable;
});

Clazz.newMeth(C$, 'isMaximum$',  function () {
return this.isMaximum;
});

Clazz.newMeth(C$, 'setMaximum$Z',  function (b) {
if (this.isMaximum == b ) {
return;
}var oldValue=this.isMaximum ? Boolean.TRUE : Boolean.FALSE;
var newValue=b ? Boolean.TRUE : Boolean.FALSE;
this.fireVetoableChange$S$O$O("maximum", oldValue, newValue);
this.isMaximum=b;
this.firePropertyChange$S$O$O("maximum", oldValue, newValue);
});

Clazz.newMeth(C$, 'setSelected$Z',  function (selected) {
if (selected && this.isSelected ) {
this.restoreSubcomponentFocus$();
return;
}if ((this.isSelected == selected ) || (selected && (this.isIcon ? !this.desktopIcon.isShowing$() : !this.isShowing$()) ) ) {
return;
}var oldValue=this.isSelected ? Boolean.TRUE : Boolean.FALSE;
var newValue=selected ? Boolean.TRUE : Boolean.FALSE;
this.fireVetoableChange$S$O$O("selected", oldValue, newValue);
if (selected) {
this.restoreSubcomponentFocus$();
}this.isSelected=selected;
this.firePropertyChange$S$O$O("selected", oldValue, newValue);
if (this.isSelected) this.fireInternalFrameEvent$I(25554);
 else this.fireInternalFrameEvent$I(25555);
});

Clazz.newMeth(C$, 'isSelected$',  function () {
return this.isSelected;
});

Clazz.newMeth(C$, 'setFrameIcon$javax_swing_Icon',  function (icon) {
var oldIcon=this.frameIcon;
this.frameIcon=icon;
this.firePropertyChange$S$O$O("frameIcon", oldIcon, icon);
});

Clazz.newMeth(C$, 'getFrameIcon$',  function () {
return this.frameIcon;
});

Clazz.newMeth(C$, 'moveToFront$',  function () {
if (this.isIcon$()) {
if (Clazz.instanceOf(this.getDesktopIcon$().getParent$(), "javax.swing.JLayeredPane")) {
(this.getDesktopIcon$().getParent$()).moveToFront$java_awt_Component(this.getDesktopIcon$());
}} else if (Clazz.instanceOf(this.getParent$(), "javax.swing.JLayeredPane")) {
(this.getParent$()).moveToFront$java_awt_Component(this);
}});

Clazz.newMeth(C$, 'moveToBack$',  function () {
if (this.isIcon$()) {
if (Clazz.instanceOf(this.getDesktopIcon$().getParent$(), "javax.swing.JLayeredPane")) {
(this.getDesktopIcon$().getParent$()).moveToBack$java_awt_Component(this.getDesktopIcon$());
}} else if (Clazz.instanceOf(this.getParent$(), "javax.swing.JLayeredPane")) {
(this.getParent$()).moveToBack$java_awt_Component(this);
}});

Clazz.newMeth(C$, 'getLastCursor$',  function () {
return this.lastCursor;
});

Clazz.newMeth(C$, 'setCursor$java_awt_Cursor',  function (cursor) {
if (cursor == null ) {
this.lastCursor=null;
C$.superclazz.prototype.setCursor$java_awt_Cursor.apply(this, [cursor]);
return;
}var type=cursor.getType$();
if (!(type == 4 || type == 5  || type == 6  || type == 7  || type == 8  || type == 9  || type == 10  || type == 11 )) {
this.lastCursor=cursor;
}C$.superclazz.prototype.setCursor$java_awt_Cursor.apply(this, [cursor]);
});

Clazz.newMeth(C$, 'setLayer$Integer',  function (layer) {
if (this.getParent$() != null  && Clazz.instanceOf(this.getParent$(), "javax.swing.JLayeredPane") ) {
var p=this.getParent$();
p.setLayer$java_awt_Component$I$I(this, layer.intValue$(), p.getPosition$java_awt_Component(this));
} else {
$I$(8,"putLayer$javax_swing_JComponent$I",[this, layer.intValue$()]);
}});

Clazz.newMeth(C$, 'setLayer$I',  function (layer) {
this.setLayer$Integer( new Integer(layer));
});

Clazz.newMeth(C$, 'getLayer$',  function () {
return $I$(8).getLayer$javax_swing_JComponent(this);
});

Clazz.newMeth(C$, 'getDesktopPane$',  function () {
return this.desktop;
});

Clazz.newMeth(C$, 'setDesktopIcon$javax_swing_JInternalFrame_JDesktopIcon',  function (d) {
var oldValue=this.getDesktopIcon$();
this.desktopIcon=d;
this.firePropertyChange$S$O$O("desktopIcon", oldValue, d);
});

Clazz.newMeth(C$, 'getDesktopIcon$',  function () {
return this.desktopIcon;
});

Clazz.newMeth(C$, 'getNormalBounds$',  function () {
if (this.normalBounds != null ) {
return this.normalBounds;
} else {
return this.getBounds$();
}});

Clazz.newMeth(C$, 'setNormalBounds$java_awt_Rectangle',  function (r) {
this.normalBounds=r;
});

Clazz.newMeth(C$, 'getFocusOwner$',  function () {
if (this.isSelected$()) {
return this.lastFocusOwner;
}return null;
});

Clazz.newMeth(C$, 'getMostRecentFocusOwner$',  function () {
if (this.isSelected$()) {
return this.getFocusOwner$();
}if (this.lastFocusOwner != null ) {
return this.lastFocusOwner;
}return this.getContentPane$();
});

Clazz.newMeth(C$, 'restoreSubcomponentFocus$',  function () {
if (this.isIcon$()) {
$I$(9,"compositeRequestFocus$java_awt_Component",[this.getDesktopIcon$()]);
} else {
this.lastFocusOwner=this.getMostRecentFocusOwner$();
if (this.lastFocusOwner == null ) {
this.lastFocusOwner=this.getContentPane$();
}this.lastFocusOwner.requestFocus$();
}});

Clazz.newMeth(C$, 'setLastFocusOwner$java_awt_Component',  function (component) {
this.lastFocusOwner=component;
}, p$1);

Clazz.newMeth(C$, 'reshape$I$I$I$I',  function (x, y, width, height) {
C$.superclazz.prototype.reshape$I$I$I$I.apply(this, [x, y, width, height]);
});

Clazz.newMeth(C$, 'addInternalFrameListener$javax_swing_event_InternalFrameListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(10),['internalFrameActivated$javax_swing_event_InternalFrameEvent','internalFrameClosed$javax_swing_event_InternalFrameEvent','internalFrameClosing$javax_swing_event_InternalFrameEvent','internalFrameDeactivated$javax_swing_event_InternalFrameEvent','internalFrameDeiconified$javax_swing_event_InternalFrameEvent','internalFrameIconified$javax_swing_event_InternalFrameEvent','internalFrameOpened$javax_swing_event_InternalFrameEvent']), l);
this.enableEvents$J(0);
});

Clazz.newMeth(C$, 'removeInternalFrameListener$javax_swing_event_InternalFrameListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(10),['internalFrameActivated$javax_swing_event_InternalFrameEvent','internalFrameClosed$javax_swing_event_InternalFrameEvent','internalFrameClosing$javax_swing_event_InternalFrameEvent','internalFrameDeactivated$javax_swing_event_InternalFrameEvent','internalFrameDeiconified$javax_swing_event_InternalFrameEvent','internalFrameIconified$javax_swing_event_InternalFrameEvent','internalFrameOpened$javax_swing_event_InternalFrameEvent']), l);
});

Clazz.newMeth(C$, 'getInternalFrameListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(10),['internalFrameActivated$javax_swing_event_InternalFrameEvent','internalFrameClosed$javax_swing_event_InternalFrameEvent','internalFrameClosing$javax_swing_event_InternalFrameEvent','internalFrameDeactivated$javax_swing_event_InternalFrameEvent','internalFrameDeiconified$javax_swing_event_InternalFrameEvent','internalFrameIconified$javax_swing_event_InternalFrameEvent','internalFrameOpened$javax_swing_event_InternalFrameEvent']));
});

Clazz.newMeth(C$, 'fireInternalFrameEvent$I',  function (id) {
var listeners=this.listenerList.getListenerList$();
var e=null;
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(10),['internalFrameActivated$javax_swing_event_InternalFrameEvent','internalFrameClosed$javax_swing_event_InternalFrameEvent','internalFrameClosing$javax_swing_event_InternalFrameEvent','internalFrameDeactivated$javax_swing_event_InternalFrameEvent','internalFrameDeiconified$javax_swing_event_InternalFrameEvent','internalFrameIconified$javax_swing_event_InternalFrameEvent','internalFrameOpened$javax_swing_event_InternalFrameEvent']) ) {
if (e == null ) {
e=Clazz.new_($I$(11,1).c$$javax_swing_JInternalFrame$I,[this, id]);
}switch (e.getID$()) {
case 25549:
(listeners[i + 1]).internalFrameOpened$javax_swing_event_InternalFrameEvent(e);
break;
case 25550:
(listeners[i + 1]).internalFrameClosing$javax_swing_event_InternalFrameEvent(e);
break;
case 25551:
(listeners[i + 1]).internalFrameClosed$javax_swing_event_InternalFrameEvent(e);
break;
case 25552:
(listeners[i + 1]).internalFrameIconified$javax_swing_event_InternalFrameEvent(e);
break;
case 25553:
(listeners[i + 1]).internalFrameDeiconified$javax_swing_event_InternalFrameEvent(e);
break;
case 25554:
(listeners[i + 1]).internalFrameActivated$javax_swing_event_InternalFrameEvent(e);
break;
case 25555:
(listeners[i + 1]).internalFrameDeactivated$javax_swing_event_InternalFrameEvent(e);
break;
default:
break;
}
}}
});

Clazz.newMeth(C$, 'doDefaultCloseAction$',  function () {
this.fireInternalFrameEvent$I(25550);
switch (this.defaultCloseOperation) {
case 0:
break;
case 1:
this.setVisible$Z(false);
if (this.isSelected$()) try {
this.setSelected$Z(false);
} catch (pve) {
if (Clazz.exceptionOf(pve,"java.beans.PropertyVetoException")){
} else {
throw pve;
}
}
break;
case 2:
try {
this.fireVetoableChange$S$O$O("closed", Boolean.FALSE, Boolean.TRUE);
this.isClosed=true;
this.setVisible$Z(false);
this.firePropertyChange$S$O$O("closed", Boolean.FALSE, Boolean.TRUE);
this.dispose$();
} catch (pve) {
if (Clazz.exceptionOf(pve,"java.beans.PropertyVetoException")){
} else {
throw pve;
}
}
break;
default:
break;
}
});

Clazz.newMeth(C$, 'fireVetoableChange$S$O$O',  function (propertyName, oldValue, newValue) {
if (this.vetoableChangeSupport == null ) {
return;
}this.vetoableChangeSupport.fireVetoableChange$S$O$O(propertyName, oldValue, newValue);
});

Clazz.newMeth(C$, 'addVetoableChangeListener$java_beans_VetoableChangeListener',  function (listener) {
if (this.vetoableChangeSupport == null ) {
this.vetoableChangeSupport=Clazz.new_($I$(12,1).c$$O,[this]);
}this.vetoableChangeSupport.addVetoableChangeListener$java_beans_VetoableChangeListener(listener);
});

Clazz.newMeth(C$, 'removeVetoableChangeListener$java_beans_VetoableChangeListener',  function (listener) {
if (this.vetoableChangeSupport == null ) {
return;
}this.vetoableChangeSupport.removeVetoableChangeListener$java_beans_VetoableChangeListener(listener);
});

Clazz.newMeth(C$, 'getVetoableChangeListeners$',  function () {
if (this.vetoableChangeSupport == null ) {
return Clazz.array($I$(13), [0]);
}return this.vetoableChangeSupport.getVetoableChangeListeners$();
});

Clazz.newMeth(C$, 'setDefaultCloseOperation$I',  function (operation) {
this.defaultCloseOperation=operation;
});

Clazz.newMeth(C$, 'getDefaultCloseOperation$',  function () {
return this.defaultCloseOperation;
});

Clazz.newMeth(C$, 'pack$',  function () {
try {
if (this.isIcon$()) {
this.setIcon$Z(false);
} else if (this.isMaximum$()) {
this.setMaximum$Z(false);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.beans.PropertyVetoException")){
return;
} else {
throw e;
}
}
this.setSize$java_awt_Dimension(this.getPreferredSize$());
this.validate$();
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
return this.preferredSize$();
});

Clazz.newMeth(C$, 'getInsets$',  function () {
return this.秘getInsets$();
});

Clazz.newMeth(C$, 'show$',  function () {
if (this.isVisible$()) {
return;
}if (!this.opened) {
this.fireInternalFrameEvent$I(25549);
this.opened=true;
}this.getDesktopIcon$().setVisible$Z(true);
this.toFront$();
C$.superclazz.prototype.show$.apply(this, []);
if (this.isIcon) {
return;
}if (!this.isSelected$()) {
try {
this.setSelected$Z(true);
} catch (pve) {
if (Clazz.exceptionOf(pve,"java.beans.PropertyVetoException")){
} else {
throw pve;
}
}
}});

Clazz.newMeth(C$, 'hide$',  function () {
if (this.isIcon$()) {
this.getDesktopIcon$().setVisible$Z(false);
}C$.superclazz.prototype.hide$.apply(this, []);
});

Clazz.newMeth(C$, 'dispose$',  function () {
if (this.isVisible$()) {
this.setVisible$Z(false);
}if (this.isSelected$()) {
try {
this.setSelected$Z(false);
} catch (pve) {
if (Clazz.exceptionOf(pve,"java.beans.PropertyVetoException")){
} else {
throw pve;
}
}
}if (!this.isClosed) {
this.firePropertyChange$S$O$O("closed", Boolean.FALSE, Boolean.TRUE);
this.isClosed=true;
}this.fireInternalFrameEvent$I(25551);
});

Clazz.newMeth(C$, 'toFront$',  function () {
this.moveToFront$();
});

Clazz.newMeth(C$, 'toBack$',  function () {
this.moveToBack$();
});

Clazz.newMeth(C$, 'setFocusCycleRoot$Z',  function (focusCycleRoot) {
});

Clazz.newMeth(C$, 'isFocusCycleRoot$',  function () {
return true;
});

Clazz.newMeth(C$, 'getFocusCycleRootAncestor$',  function () {
return null;
});

Clazz.newMeth(C$, 'getWarningString$',  function () {
return null;
});

Clazz.newMeth(C$, 'getContainer$',  function () {
return this.getParent$();
});

Clazz.newMeth(C$, 'paramString$',  function () {
return "[JInternalFrame " + this.getTitle$() + "]" ;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
C$.superclazz.prototype.paint$java_awt_Graphics.apply(this, [this.getRootPane$().getGraphics$()]);
});

Clazz.newMeth(C$, 'setDesktop$javax_swing_JDesktopPane',  function (jDesktopPane) {
this.desktop=jDesktopPane;
});

Clazz.newMeth(C$, 'checkInternalFrameMouseDown$',  function () {
});

Clazz.newMeth(C$, 'addNotify$',  function () {
C$.superclazz.prototype.addNotify$.apply(this, []);
(this.parent).getTopLevelAncestor$().秘setIsDesktop$();
});

Clazz.newMeth(C$, '秘frameAddNodify$javax_swing_JRootPane',  function (rootPane) {
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JInternalFrame, "FocusPropertyChangeListener", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (e.getPropertyName$() === "permanentFocusOwner" ) {
$I$(1,"updateLastFocusOwner$java_awt_Component",[e.getNewValue$()]);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JInternalFrame, "JDesktopIcon", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JComponent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['internalFrame','javax.swing.JInternalFrame']]]

Clazz.newMeth(C$, 'c$$javax_swing_JInternalFrame',  function (f) {
Clazz.super_(C$, this);
this.setVisible$Z(false);
this.setInternalFrame$javax_swing_JInternalFrame(f);
this.updateUI$();
}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "DesktopIconUI";
});

Clazz.newMeth(C$, 'getInternalFrame$',  function () {
return this.internalFrame;
});

Clazz.newMeth(C$, 'setInternalFrame$javax_swing_JInternalFrame',  function (f) {
this.internalFrame=f;
});

Clazz.newMeth(C$, 'getDesktopPane$',  function () {
if (this.getInternalFrame$() != null ) return this.getInternalFrame$().getDesktopPane$();
return null;
});

Clazz.newMeth(C$, 'updateUI$',  function () {
C$.superclazz.prototype.updateUI$.apply(this, []);
this.invalidate$();
var r=this.getPreferredSize$();
this.setSize$I$I(r.width, r.height);
if (this.internalFrame != null  && this.internalFrame.getUI$() != null  ) {
$I$(2).updateComponentTreeUI$java_awt_Component(this.internalFrame);
}});

Clazz.newMeth(C$, 'updateUIWhenHidden$',  function () {
C$.superclazz.prototype.updateUI$.apply(this, []);
var r=this.getPreferredSize$();
this.setSize$I$I(r.width, r.height);
this.invalidate$();
var children=$I$(3).秘getChildArray$java_awt_Container(this);
if (children != null ) {
for (var i=0, n=this.getComponentCount$(); i < n; i++) {
$I$(2).updateComponentTreeUI$java_awt_Component(children[i]);
}
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:55 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
