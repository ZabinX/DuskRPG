(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.DefaultButtonModel',['javax.swing.JMenuItem','.MenuItemFocusListener'],'javax.swing.UIManager','javax.swing.event.MenuDragMouseEvent','javax.swing.event.MenuKeyEvent','javax.swing.event.MenuDragMouseListener','javax.swing.event.MenuKeyListener','javax.swing.MenuElement']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JMenuItem", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.AbstractButton', 'javax.swing.MenuElement');
C$.$classes$=[['MenuItemFocusListener',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isMouseDragged=false;
},1);

C$.$fields$=[['Z',['isMouseDragged'],'O',['accelerator','javax.swing.KeyStroke']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S$javax_swing_Icon.apply(this, [null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Icon',  function (icon) {
C$.c$$S$javax_swing_Icon.apply(this, [null, icon]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (text) {
C$.c$$S$javax_swing_Icon.apply(this, [text, null]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Action',  function (a) {
C$.c$.apply(this, []);
this.setAction$javax_swing_Action(a);
}, 1);

Clazz.newMeth(C$, 'c$$S$javax_swing_Icon',  function (text, icon) {
Clazz.super_(C$, this);
this.setModel$();
this.init$S$javax_swing_Icon(text, icon);
this.initFocusability$();
}, 1);

Clazz.newMeth(C$, 'c$$S$I',  function (text, mnemonic) {
Clazz.super_(C$, this);
this.setModel$();
this.init$S$javax_swing_Icon(text, null);
this.setMnemonic$I(mnemonic);
this.initFocusability$();
}, 1);

Clazz.newMeth(C$, 'setModel$',  function () {
this.setModel$javax_swing_ButtonModel(Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, 'setModel$javax_swing_ButtonModel',  function (newModel) {
C$.superclazz.prototype.setModel$javax_swing_ButtonModel.apply(this, [newModel]);
if (Clazz.instanceOf(newModel, "javax.swing.DefaultButtonModel")) {
(newModel).setMenuItem$Z(true);
}});

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "MenuItemUI";
});

Clazz.newMeth(C$, 'init$S$javax_swing_Icon',  function (text, icon) {
this.秘j2sInvalidateOnAdd=false;
this.updateUI$();
if (text != null ) this.setText$S(text);
if (icon != null ) this.setIcon$javax_swing_Icon(icon);
this.addFocusListener$java_awt_event_FocusListener(Clazz.new_($I$(2,1)));
this.setUIProperty$S$O("borderPainted", Boolean.FALSE);
this.setOpaque$Z(true);
this.setFocusPainted$Z(false);
this.setHorizontalTextPosition$I(11);
this.setHorizontalAlignment$I(10);
});

Clazz.newMeth(C$, 'initFocusability$',  function () {
this.setFocusable$Z(false);
});

Clazz.newMeth(C$, 'setArmed$Z',  function (b) {
var model=this.getModel$();
if (model.isArmed$() != b ) {
model.setArmed$Z(b);
}});

Clazz.newMeth(C$, 'isArmed$',  function () {
var model=this.getModel$();
return model.isArmed$();
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (b) {
if (!b && !$I$(3).getBoolean$O("MenuItem.disabledAreNavigable") ) {
this.setArmed$Z(false);
}C$.superclazz.prototype.setEnabled$Z.apply(this, [b]);
});

Clazz.newMeth(C$, 'alwaysOnTop$',  function () {
return true;
});

Clazz.newMeth(C$, 'setAccelerator$javax_swing_KeyStroke',  function (keyStroke) {
var oldAccelerator=this.accelerator;
this.accelerator=keyStroke;
this.秘repaint$();
this.revalidate$();
this.firePropertyChange$S$O$O("accelerator", oldAccelerator, this.accelerator);
});

Clazz.newMeth(C$, 'getAccelerator$',  function () {
return this.accelerator;
});

Clazz.newMeth(C$, 'configurePropertiesFromAction$javax_swing_Action',  function (a) {
C$.superclazz.prototype.configurePropertiesFromAction$javax_swing_Action.apply(this, [a]);
this.configureAcceleratorFromAction$javax_swing_Action(a);
});

Clazz.newMeth(C$, 'setIconFromAction$javax_swing_Action',  function (a) {
var icon=null;
if (a != null ) {
icon=a.getValue$S("SmallIcon");
}this.setIcon$javax_swing_Icon(icon);
});

Clazz.newMeth(C$, 'largeIconChanged$javax_swing_Action',  function (a) {
});

Clazz.newMeth(C$, 'smallIconChanged$javax_swing_Action',  function (a) {
this.setIconFromAction$javax_swing_Action(a);
});

Clazz.newMeth(C$, 'configureAcceleratorFromAction$javax_swing_Action',  function (a) {
var ks=(a == null ) ? null : a.getValue$S("AcceleratorKey");
this.setAccelerator$javax_swing_KeyStroke(ks);
});

Clazz.newMeth(C$, 'actionPropertyChanged$javax_swing_Action$S',  function (action, propertyName) {
if (propertyName == "AcceleratorKey") {
this.configureAcceleratorFromAction$javax_swing_Action(action);
} else {
C$.superclazz.prototype.actionPropertyChanged$javax_swing_Action$S.apply(this, [action, propertyName]);
}});

Clazz.newMeth(C$, 'processMouseEvent$java_awt_event_MouseEvent$javax_swing_MenuElementA$javax_swing_MenuSelectionManager',  function (e, path, manager) {
this.processMenuDragMouseEvent$javax_swing_event_MenuDragMouseEvent(Clazz.new_([e.getComponent$(), e.getID$(), e.getWhen$(), e.getModifiers$(), e.getX$(), e.getY$(), e.getXOnScreen$(), e.getYOnScreen$(), e.getClickCount$(), e.isPopupTrigger$(), path, manager],$I$(4,1).c$$java_awt_Component$I$J$I$I$I$I$I$I$Z$javax_swing_MenuElementA$javax_swing_MenuSelectionManager));
});

Clazz.newMeth(C$, 'processKeyEvent$java_awt_event_KeyEvent$javax_swing_MenuElementA$javax_swing_MenuSelectionManager',  function (e, path, manager) {
var mke=Clazz.new_([e.getComponent$(), e.getID$(), e.getWhen$(), e.getModifiers$(), e.getKeyCode$(), e.getKeyChar$(), path, manager],$I$(5,1).c$$java_awt_Component$I$J$I$I$C$javax_swing_MenuElementA$javax_swing_MenuSelectionManager);
mke.bdata=e.bdata ||null;
this.processMenuKeyEvent$javax_swing_event_MenuKeyEvent(mke);
if (mke.isConsumed$()) {
e.consume$();
}});

Clazz.newMeth(C$, 'processMenuDragMouseEvent$javax_swing_event_MenuDragMouseEvent',  function (e) {
switch (e.getID$()) {
case 504:
this.isMouseDragged=false;
this.fireMenuDragMouseEntered$javax_swing_event_MenuDragMouseEvent(e);
break;
case 505:
this.isMouseDragged=false;
this.fireMenuDragMouseExited$javax_swing_event_MenuDragMouseEvent(e);
break;
case 506:
this.isMouseDragged=true;
this.fireMenuDragMouseDragged$javax_swing_event_MenuDragMouseEvent(e);
break;
case 502:
if (this.isMouseDragged) this.fireMenuDragMouseReleased$javax_swing_event_MenuDragMouseEvent(e);
break;
default:
break;
}
});

Clazz.newMeth(C$, 'processMenuKeyEvent$javax_swing_event_MenuKeyEvent',  function (e) {
switch (e.getID$()) {
case 401:
this.fireMenuKeyPressed$javax_swing_event_MenuKeyEvent(e);
break;
case 402:
this.fireMenuKeyReleased$javax_swing_event_MenuKeyEvent(e);
break;
case 400:
this.fireMenuKeyTyped$javax_swing_event_MenuKeyEvent(e);
break;
default:
break;
}
});

Clazz.newMeth(C$, 'fireMenuDragMouseEntered$javax_swing_event_MenuDragMouseEvent',  function (event) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(6),['menuDragMouseDragged$javax_swing_event_MenuDragMouseEvent','menuDragMouseEntered$javax_swing_event_MenuDragMouseEvent','menuDragMouseExited$javax_swing_event_MenuDragMouseEvent','menuDragMouseReleased$javax_swing_event_MenuDragMouseEvent']) ) {
(listeners[i + 1]).menuDragMouseEntered$javax_swing_event_MenuDragMouseEvent(event);
}}
});

Clazz.newMeth(C$, 'fireMenuDragMouseExited$javax_swing_event_MenuDragMouseEvent',  function (event) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(6),['menuDragMouseDragged$javax_swing_event_MenuDragMouseEvent','menuDragMouseEntered$javax_swing_event_MenuDragMouseEvent','menuDragMouseExited$javax_swing_event_MenuDragMouseEvent','menuDragMouseReleased$javax_swing_event_MenuDragMouseEvent']) ) {
(listeners[i + 1]).menuDragMouseExited$javax_swing_event_MenuDragMouseEvent(event);
}}
});

Clazz.newMeth(C$, 'fireMenuDragMouseDragged$javax_swing_event_MenuDragMouseEvent',  function (event) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(6),['menuDragMouseDragged$javax_swing_event_MenuDragMouseEvent','menuDragMouseEntered$javax_swing_event_MenuDragMouseEvent','menuDragMouseExited$javax_swing_event_MenuDragMouseEvent','menuDragMouseReleased$javax_swing_event_MenuDragMouseEvent']) ) {
(listeners[i + 1]).menuDragMouseDragged$javax_swing_event_MenuDragMouseEvent(event);
}}
});

Clazz.newMeth(C$, 'fireMenuDragMouseReleased$javax_swing_event_MenuDragMouseEvent',  function (event) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(6),['menuDragMouseDragged$javax_swing_event_MenuDragMouseEvent','menuDragMouseEntered$javax_swing_event_MenuDragMouseEvent','menuDragMouseExited$javax_swing_event_MenuDragMouseEvent','menuDragMouseReleased$javax_swing_event_MenuDragMouseEvent']) ) {
(listeners[i + 1]).menuDragMouseReleased$javax_swing_event_MenuDragMouseEvent(event);
}}
});

Clazz.newMeth(C$, 'fireMenuKeyPressed$javax_swing_event_MenuKeyEvent',  function (event) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(7),['menuKeyPressed$javax_swing_event_MenuKeyEvent','menuKeyReleased$javax_swing_event_MenuKeyEvent','menuKeyTyped$javax_swing_event_MenuKeyEvent']) ) {
(listeners[i + 1]).menuKeyPressed$javax_swing_event_MenuKeyEvent(event);
}}
});

Clazz.newMeth(C$, 'fireMenuKeyReleased$javax_swing_event_MenuKeyEvent',  function (event) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(7),['menuKeyPressed$javax_swing_event_MenuKeyEvent','menuKeyReleased$javax_swing_event_MenuKeyEvent','menuKeyTyped$javax_swing_event_MenuKeyEvent']) ) {
(listeners[i + 1]).menuKeyReleased$javax_swing_event_MenuKeyEvent(event);
}}
});

Clazz.newMeth(C$, 'fireMenuKeyTyped$javax_swing_event_MenuKeyEvent',  function (event) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(7),['menuKeyPressed$javax_swing_event_MenuKeyEvent','menuKeyReleased$javax_swing_event_MenuKeyEvent','menuKeyTyped$javax_swing_event_MenuKeyEvent']) ) {
(listeners[i + 1]).menuKeyTyped$javax_swing_event_MenuKeyEvent(event);
}}
});

Clazz.newMeth(C$, 'menuSelectionChanged$Z',  function (isIncluded) {
this.setArmed$Z(isIncluded);
});

Clazz.newMeth(C$, 'getSubElements$',  function () {
return Clazz.array($I$(8), [0]);
});

Clazz.newMeth(C$, 'getComponent$',  function () {
return this;
});

Clazz.newMeth(C$, 'addMenuDragMouseListener$javax_swing_event_MenuDragMouseListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(6),['menuDragMouseDragged$javax_swing_event_MenuDragMouseEvent','menuDragMouseEntered$javax_swing_event_MenuDragMouseEvent','menuDragMouseExited$javax_swing_event_MenuDragMouseEvent','menuDragMouseReleased$javax_swing_event_MenuDragMouseEvent']), l);
});

Clazz.newMeth(C$, 'removeMenuDragMouseListener$javax_swing_event_MenuDragMouseListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(6),['menuDragMouseDragged$javax_swing_event_MenuDragMouseEvent','menuDragMouseEntered$javax_swing_event_MenuDragMouseEvent','menuDragMouseExited$javax_swing_event_MenuDragMouseEvent','menuDragMouseReleased$javax_swing_event_MenuDragMouseEvent']), l);
});

Clazz.newMeth(C$, 'getMenuDragMouseListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(6),['menuDragMouseDragged$javax_swing_event_MenuDragMouseEvent','menuDragMouseEntered$javax_swing_event_MenuDragMouseEvent','menuDragMouseExited$javax_swing_event_MenuDragMouseEvent','menuDragMouseReleased$javax_swing_event_MenuDragMouseEvent']));
});

Clazz.newMeth(C$, 'addMenuKeyListener$javax_swing_event_MenuKeyListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(7),['menuKeyPressed$javax_swing_event_MenuKeyEvent','menuKeyReleased$javax_swing_event_MenuKeyEvent','menuKeyTyped$javax_swing_event_MenuKeyEvent']), l);
});

Clazz.newMeth(C$, 'removeMenuKeyListener$javax_swing_event_MenuKeyListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(7),['menuKeyPressed$javax_swing_event_MenuKeyEvent','menuKeyReleased$javax_swing_event_MenuKeyEvent','menuKeyTyped$javax_swing_event_MenuKeyEvent']), l);
});

Clazz.newMeth(C$, 'getMenuKeyListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(7),['menuKeyPressed$javax_swing_event_MenuKeyEvent','menuKeyReleased$javax_swing_event_MenuKeyEvent','menuKeyTyped$javax_swing_event_MenuKeyEvent']));
});

Clazz.newMeth(C$, 'paramString$',  function () {
return C$.superclazz.prototype.paramString$.apply(this, []);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JMenuItem, "MenuItemFocusListener", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.awt.event.FocusListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (event) {
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (event) {
var mi=event.getSource$();
if (mi.isFocusPainted$()) {
mi.秘repaint$();
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
