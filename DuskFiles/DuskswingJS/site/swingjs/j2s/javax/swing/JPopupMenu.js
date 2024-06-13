(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'javax.swing.SwingUtilities','javax.swing.DefaultSingleSelectionModel','javax.swing.MenuSelectionManager','javax.swing.JMenuItem','java.awt.Point',['javax.swing.JPopupMenu','.Separator'],'java.util.Vector','javax.swing.event.PopupMenuListener','javax.swing.event.MenuKeyListener','javax.swing.event.PopupMenuEvent','javax.swing.PopupFactory','java.awt.JSComponent','java.awt.Dimension','java.awt.Insets','javax.swing.event.MenuKeyEvent','javax.swing.MenuElement']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JPopupMenu", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JComponent', 'javax.swing.MenuElement');
C$.$classes$=[['Separator',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.label=null;
this.paintBorder=true;
this.margin=null;
this.lightWeightPopup=true;
},1);

C$.$fields$=[['Z',['haveLoc','paintBorder','lightWeightPopup'],'I',['desiredLocationX','desiredLocationY'],'S',['label'],'O',['invoker','java.awt.Component','popup','javax.swing.Popup','frame','java.awt.JSFrame','margin','java.awt.Insets','selectionModel','javax.swing.SingleSelectionModel']]
,['O',['defaultLWPopupEnabledKey','java.lang.Object']]]

Clazz.newMeth(C$, 'setDefaultLightWeightPopupEnabled$Z',  function (aFlag) {
$I$(1,"appContextPut$O$O",[C$.defaultLWPopupEnabledKey, Boolean.valueOf$Z(aFlag)]);
}, 1);

Clazz.newMeth(C$, 'getDefaultLightWeightPopupEnabled$',  function () {
var b=$I$(1).appContextGet$O(C$.defaultLWPopupEnabledKey);
if (b == null ) {
$I$(1).appContextPut$O$O(C$.defaultLWPopupEnabledKey, Boolean.TRUE);
return true;
}return b.booleanValue$();
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (label) {
Clazz.super_(C$, this);
this.label=label;
this.lightWeightPopup=C$.getDefaultLightWeightPopupEnabled$();
this.setSelectionModel$javax_swing_SingleSelectionModel(Clazz.new_($I$(2,1)));
this.enableEvents$J(16);
this.setOpaque$Z(true);
this.updateUI$();
}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "PopupMenuUI";
});

Clazz.newMeth(C$, 'processFocusEvent$java_awt_event_FocusEvent',  function (evt) {
C$.superclazz.prototype.processFocusEvent$java_awt_event_FocusEvent.apply(this, [evt]);
});

Clazz.newMeth(C$, 'processKeyEvent$java_awt_event_KeyEvent',  function (evt) {
$I$(3).defaultManager$().processKeyEvent$java_awt_event_KeyEvent(evt);
if (evt.isConsumed$()) {
return;
}C$.superclazz.prototype.processKeyEvent$java_awt_event_KeyEvent.apply(this, [evt]);
});

Clazz.newMeth(C$, 'getSelectionModel$',  function () {
return this.selectionModel;
});

Clazz.newMeth(C$, 'setSelectionModel$javax_swing_SingleSelectionModel',  function (model) {
this.selectionModel=model;
});

Clazz.newMeth(C$, 'add$javax_swing_JMenuItem',  function (menuItem) {
C$.superclazz.prototype.add$java_awt_Component.apply(this, [menuItem]);
return menuItem;
});

Clazz.newMeth(C$, 'add$S',  function (s) {
return this.add$javax_swing_JMenuItem(Clazz.new_($I$(4,1).c$$S,[s]));
});

Clazz.newMeth(C$, 'add$javax_swing_Action',  function (a) {
var mi=this.createActionComponent$javax_swing_Action(a);
mi.setAction$javax_swing_Action(a);
this.add$javax_swing_JMenuItem(mi);
return mi;
});

Clazz.newMeth(C$, 'adjustPopupLocationToFitScreen$I$I',  function (xposition, yposition) {
var p=Clazz.new_($I$(5,1).c$$I$I,[xposition, yposition]);
return p;
});

Clazz.newMeth(C$, 'createActionComponent$javax_swing_Action',  function (a) {
var mi=((P$.JPopupMenu$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JPopupMenu$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JMenuItem'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createActionPropertyChangeListener$javax_swing_Action',  function (a) {
var pcl=this.b$['javax.swing.JPopupMenu'].createActionChangeListener$javax_swing_JMenuItem.apply(this.b$['javax.swing.JPopupMenu'], [this]);
if (pcl == null ) {
pcl=C$.superclazz.prototype.createActionPropertyChangeListener$javax_swing_Action.apply(this, [a]);
}return pcl;
});
})()
), Clazz.new_($I$(4,1),[this, null],P$.JPopupMenu$1));
mi.setHorizontalTextPosition$I(11);
mi.setVerticalTextPosition$I(0);
return mi;
});

Clazz.newMeth(C$, 'createActionChangeListener$javax_swing_JMenuItem',  function (b) {
return b.createActionPropertyChangeListener0$javax_swing_Action(b.getAction$());
});

Clazz.newMeth(C$, 'remove$I',  function (pos) {
if (pos < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["index less than zero."]);
}if (pos > this.getComponentCount$() - 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["index greater than the number of items."]);
}C$.superclazz.prototype.remove$I.apply(this, [pos]);
});

Clazz.newMeth(C$, 'setLightWeightPopupEnabled$Z',  function (aFlag) {
this.lightWeightPopup=aFlag;
});

Clazz.newMeth(C$, 'isLightWeightPopupEnabled$',  function () {
return this.lightWeightPopup;
});

Clazz.newMeth(C$, 'getLabel$',  function () {
return this.label;
});

Clazz.newMeth(C$, 'setLabel$S',  function (label) {
var oldValue=this.label;
this.label=label;
this.firePropertyChange$S$O$O("label", oldValue, label);
this.invalidate$();
this.秘repaint$();
});

Clazz.newMeth(C$, 'addSeparator$',  function () {
var sep=Clazz.new_($I$(6,1));
sep.秘j2sInvalidateOnAdd=false;
this.add$java_awt_Component(sep);
});

Clazz.newMeth(C$, 'insert$javax_swing_Action$I',  function (a, index) {
var mi=this.createActionComponent$javax_swing_Action(a);
mi.setAction$javax_swing_Action(a);
this.insert$java_awt_Component$I(mi, index);
});

Clazz.newMeth(C$, 'insert$java_awt_Component$I',  function (component, index) {
if (index < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["index less than zero."]);
}var nitems=this.getComponentCount$();
var tempItems=Clazz.new_($I$(7,1));
for (var i=index; i < nitems; i++) {
tempItems.addElement$O(this.getComponent$I(index));
this.remove$I(index);
}
this.add$java_awt_Component(component);
for (var i=0; i < tempItems.size$(); i++) {
this.add$java_awt_Component(tempItems.elementAt$I(i));
}
});

Clazz.newMeth(C$, 'addPopupMenuListener$javax_swing_event_PopupMenuListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(8),['popupMenuCanceled$javax_swing_event_PopupMenuEvent','popupMenuWillBecomeInvisible$javax_swing_event_PopupMenuEvent','popupMenuWillBecomeVisible$javax_swing_event_PopupMenuEvent']), l);
});

Clazz.newMeth(C$, 'removePopupMenuListener$javax_swing_event_PopupMenuListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(8),['popupMenuCanceled$javax_swing_event_PopupMenuEvent','popupMenuWillBecomeInvisible$javax_swing_event_PopupMenuEvent','popupMenuWillBecomeVisible$javax_swing_event_PopupMenuEvent']), l);
});

Clazz.newMeth(C$, 'getPopupMenuListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(8),['popupMenuCanceled$javax_swing_event_PopupMenuEvent','popupMenuWillBecomeInvisible$javax_swing_event_PopupMenuEvent','popupMenuWillBecomeVisible$javax_swing_event_PopupMenuEvent']));
});

Clazz.newMeth(C$, 'addMenuKeyListener$javax_swing_event_MenuKeyListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(9),['menuKeyPressed$javax_swing_event_MenuKeyEvent','menuKeyReleased$javax_swing_event_MenuKeyEvent','menuKeyTyped$javax_swing_event_MenuKeyEvent']), l);
});

Clazz.newMeth(C$, 'removeMenuKeyListener$javax_swing_event_MenuKeyListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(9),['menuKeyPressed$javax_swing_event_MenuKeyEvent','menuKeyReleased$javax_swing_event_MenuKeyEvent','menuKeyTyped$javax_swing_event_MenuKeyEvent']), l);
});

Clazz.newMeth(C$, 'getMenuKeyListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(9),['menuKeyPressed$javax_swing_event_MenuKeyEvent','menuKeyReleased$javax_swing_event_MenuKeyEvent','menuKeyTyped$javax_swing_event_MenuKeyEvent']));
});

Clazz.newMeth(C$, 'firePopupMenuWillBecomeVisible$',  function () {
var listeners=this.listenerList.getListenerList$();
var e=null;
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(8),['popupMenuCanceled$javax_swing_event_PopupMenuEvent','popupMenuWillBecomeInvisible$javax_swing_event_PopupMenuEvent','popupMenuWillBecomeVisible$javax_swing_event_PopupMenuEvent']) ) {
if (e == null ) e=Clazz.new_($I$(10,1).c$$O,[this]);
(listeners[i + 1]).popupMenuWillBecomeVisible$javax_swing_event_PopupMenuEvent(e);
}}
});

Clazz.newMeth(C$, 'firePopupMenuWillBecomeInvisible$',  function () {
var listeners=this.listenerList.getListenerList$();
var e=null;
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(8),['popupMenuCanceled$javax_swing_event_PopupMenuEvent','popupMenuWillBecomeInvisible$javax_swing_event_PopupMenuEvent','popupMenuWillBecomeVisible$javax_swing_event_PopupMenuEvent']) ) {
if (e == null ) e=Clazz.new_($I$(10,1).c$$O,[this]);
(listeners[i + 1]).popupMenuWillBecomeInvisible$javax_swing_event_PopupMenuEvent(e);
}}
});

Clazz.newMeth(C$, 'firePopupMenuCanceled$',  function () {
var listeners=this.listenerList.getListenerList$();
var e=null;
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(8),['popupMenuCanceled$javax_swing_event_PopupMenuEvent','popupMenuWillBecomeInvisible$javax_swing_event_PopupMenuEvent','popupMenuWillBecomeVisible$javax_swing_event_PopupMenuEvent']) ) {
if (e == null ) e=Clazz.new_($I$(10,1).c$$O,[this]);
(listeners[i + 1]).popupMenuCanceled$javax_swing_event_PopupMenuEvent(e);
}}
});

Clazz.newMeth(C$, 'alwaysOnTop$',  function () {
return true;
});

Clazz.newMeth(C$, 'pack$',  function () {
if (this.popup != null ) {
var pref=this.getPreferredSize$();
if (pref == null  || pref.width != this.getWidth$()  || pref.height != this.getHeight$() ) {
this.popup=p$1.getPopup.apply(this, []);
} else {
this.validate$();
}}});

Clazz.newMeth(C$, 'hide$',  function () {
System.out.println$S("JPopupMenu hide");
C$.superclazz.prototype.hide$.apply(this, []);
});

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
if (b == this.isVisible$() ) {
if (b) {
this.getUI$().setVisible$Z(true);
}return;
}this.getUI$().setVisible$Z(b);
if (!b) {
this.popup=null;
if (this.invoker != null  && this.invoker.isFocusable$() ) this.invoker.requestFocus$();
}});

Clazz.newMeth(C$, 'isShowing$',  function () {
return this.isVisible$() && this.invoker.isShowing$() ;
});

Clazz.newMeth(C$, 'getPopup',  function () {
var oldPopup=this.popup;
if (oldPopup != null ) {
oldPopup.hide$();
}var popupFactory=$I$(11).getSharedInstance$();
if (this.isLightWeightPopupEnabled$()) {
popupFactory.setPopupType$I(0);
} else {
popupFactory.setPopupType$I(1);
}this.haveLoc=true;
var newPopup=(this.getUI$()).getPopup$javax_swing_JPopupMenu$I$I(this, this.desiredLocationX, this.desiredLocationY);
popupFactory.setPopupType$I(0);
newPopup.show$();
return newPopup;
}, p$1);

Clazz.newMeth(C$, 'isVisible$',  function () {
return (this.ui).isJSPopupVisible$();
});

Clazz.newMeth(C$, 'setLocation$I$I',  function (x, y) {
var oldX=this.desiredLocationX;
var oldY=this.desiredLocationY;
this.haveLoc=true;
this.desiredLocationX=x;
this.desiredLocationY=y;
if (this.popup != null  && (x != oldX || y != oldY ) ) {
this.popup=p$1.getPopup.apply(this, []);
}});

Clazz.newMeth(C$, 'isPopupMenu',  function () {
return ((this.invoker != null ) && !(Clazz.instanceOf(this.invoker, "javax.swing.JMenu")) );
}, p$1);

Clazz.newMeth(C$, 'getInvoker$',  function () {
return this.invoker;
});

Clazz.newMeth(C$, 'setInvoker$java_awt_Component',  function (invoker) {
var oldInvoker=this.invoker;
this.invoker=invoker;
if ((oldInvoker !== this.invoker ) && (this.ui != null ) ) {
(this.ui).reinstallUI$javax_swing_JComponent$javax_swing_JComponent(this, invoker);
}this.invalidate$();
});

Clazz.newMeth(C$, 'show$java_awt_Component$I$I',  function (invoker, x, y) {
this.setInvoker$java_awt_Component(invoker);
var invokerOrigin;
if (invoker != null ) {
invokerOrigin=invoker.getLocationOnScreen$();
var lx;
var ly;
lx=Long.$add((invokerOrigin.x),(x));
ly=Long.$add((invokerOrigin.y),(y));
if (Long.$gt(lx,2147483647 )) lx=2147483647;
if (Long.$lt(lx,-2147483648 )) lx=-2147483648;
if (Long.$gt(ly,2147483647 )) ly=2147483647;
if (Long.$lt(ly,-2147483648 )) ly=-2147483648;
this.setLocation$I$I(Long.$ival(lx), Long.$ival(ly));
} else {
this.setLocation$I$I(x, y);
}this.setVisible$Z(true);
});

Clazz.newMeth(C$, 'getRootPopupMenu$',  function () {
var mp=this;
while ((mp != null ) && (p$1.isPopupMenu.apply(mp, []) != true ) && (mp.getInvoker$() != null ) && (mp.getInvoker$().getParent$() != null ) && (Clazz.instanceOf(mp.getInvoker$().getParent$(), "javax.swing.JPopupMenu"))  ){
mp=mp.getInvoker$().getParent$();
}
return mp;
});

Clazz.newMeth(C$, 'getComponentAtIndex$I',  function (i) {
return this.getComponent$I(i);
});

Clazz.newMeth(C$, 'getComponentIndex$java_awt_Component',  function (c) {
var ncomponents=this.getComponentCount$();
var components=$I$(12).秘getChildArray$java_awt_Container(this);
for (var i=0; i < ncomponents; i++) {
var comp=components[i];
if (comp === c ) return i;
}
return -1;
});

Clazz.newMeth(C$, 'setPopupSize$java_awt_Dimension',  function (d) {
return;
});

Clazz.newMeth(C$, 'setPopupSize$I$I',  function (width, height) {
this.setPopupSize$java_awt_Dimension(Clazz.new_($I$(13,1).c$$I$I,[width, height]));
});

Clazz.newMeth(C$, 'setSelected$java_awt_Component',  function (sel) {
var model=this.getSelectionModel$();
var index=this.getComponentIndex$java_awt_Component(sel);
model.setSelectedIndex$I(index);
});

Clazz.newMeth(C$, 'isBorderPainted$',  function () {
return this.paintBorder;
});

Clazz.newMeth(C$, 'setBorderPainted$Z',  function (b) {
this.paintBorder=b;
this.秘repaint$();
});

Clazz.newMeth(C$, 'paintBorder$java_awt_Graphics',  function (g) {
if (this.isBorderPainted$()) {
C$.superclazz.prototype.paintBorder$java_awt_Graphics.apply(this, [g]);
}});

Clazz.newMeth(C$, 'getMargin$',  function () {
if (this.margin == null ) {
return Clazz.new_($I$(14,1).c$$I$I$I$I,[0, 0, 0, 0]);
} else {
return this.margin;
}});

Clazz.newMeth(C$, 'isSubPopupMenu$javax_swing_JPopupMenu',  function (popup) {
var ncomponents=this.getComponentCount$();
var components=$I$(12).秘getChildArray$java_awt_Container(this);
for (var i=0; i < ncomponents; i++) {
var comp=components[i];
if (Clazz.instanceOf(comp, "javax.swing.JMenu")) {
var menu=comp;
var subPopup=menu.getPopupMenu$();
if (subPopup === popup ) return true;
if (subPopup.isSubPopupMenu$javax_swing_JPopupMenu(popup)) return true;
}}
return false;
});

Clazz.newMeth(C$, 'paramString$',  function () {
var labelString=(this.label != null  ? this.label : "");
var paintBorderString=(this.paintBorder ? "true" : "false");
var marginString=(this.margin != null  ? this.margin.toString() : "");
var lightWeightPopupEnabledString=(this.isLightWeightPopupEnabled$() ? "true" : "false");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",desiredLocationX=" + this.desiredLocationX + ",desiredLocationY=" + this.desiredLocationY + ",label=" + labelString + ",lightWeightPopupEnabled=" + lightWeightPopupEnabledString + ",margin=" + marginString + ",paintBorder=" + paintBorderString ;
});

Clazz.newMeth(C$, 'processMouseEvent$java_awt_event_MouseEvent$javax_swing_MenuElementA$javax_swing_MenuSelectionManager',  function (event, path, manager) {
});

Clazz.newMeth(C$, 'processKeyEvent$java_awt_event_KeyEvent$javax_swing_MenuElementA$javax_swing_MenuSelectionManager',  function (e, path, manager) {
var mke=Clazz.new_([e.getComponent$(), e.getID$(), e.getWhen$(), e.getModifiers$(), e.getKeyCode$(), e.getKeyChar$(), path, manager],$I$(15,1).c$$java_awt_Component$I$J$I$I$C$javax_swing_MenuElementA$javax_swing_MenuSelectionManager);
mke.bdata=e.bdata ||null;
p$1.processMenuKeyEvent$javax_swing_event_MenuKeyEvent.apply(this, [mke]);
if (mke.isConsumed$()) {
e.consume$();
}});

Clazz.newMeth(C$, 'processMenuKeyEvent$javax_swing_event_MenuKeyEvent',  function (e) {
switch (e.getID$()) {
case 401:
p$1.fireMenuKeyPressed$javax_swing_event_MenuKeyEvent.apply(this, [e]);
break;
case 402:
p$1.fireMenuKeyReleased$javax_swing_event_MenuKeyEvent.apply(this, [e]);
break;
case 400:
p$1.fireMenuKeyTyped$javax_swing_event_MenuKeyEvent.apply(this, [e]);
break;
default:
break;
}
}, p$1);

Clazz.newMeth(C$, 'fireMenuKeyPressed$javax_swing_event_MenuKeyEvent',  function (event) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(9),['menuKeyPressed$javax_swing_event_MenuKeyEvent','menuKeyReleased$javax_swing_event_MenuKeyEvent','menuKeyTyped$javax_swing_event_MenuKeyEvent']) ) {
(listeners[i + 1]).menuKeyPressed$javax_swing_event_MenuKeyEvent(event);
}}
}, p$1);

Clazz.newMeth(C$, 'fireMenuKeyReleased$javax_swing_event_MenuKeyEvent',  function (event) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(9),['menuKeyPressed$javax_swing_event_MenuKeyEvent','menuKeyReleased$javax_swing_event_MenuKeyEvent','menuKeyTyped$javax_swing_event_MenuKeyEvent']) ) {
(listeners[i + 1]).menuKeyReleased$javax_swing_event_MenuKeyEvent(event);
}}
}, p$1);

Clazz.newMeth(C$, 'fireMenuKeyTyped$javax_swing_event_MenuKeyEvent',  function (event) {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(9),['menuKeyPressed$javax_swing_event_MenuKeyEvent','menuKeyReleased$javax_swing_event_MenuKeyEvent','menuKeyTyped$javax_swing_event_MenuKeyEvent']) ) {
(listeners[i + 1]).menuKeyTyped$javax_swing_event_MenuKeyEvent(event);
}}
}, p$1);

Clazz.newMeth(C$, 'menuSelectionChanged$Z',  function (isIncluded) {
});

Clazz.newMeth(C$, 'getSubElements$',  function () {
var result;
var tmp=Clazz.new_($I$(7,1));
var c=this.getComponentCount$();
var i;
var m;
for (i=0; i < c; i++) {
m=this.getComponent$I(i);
if (Clazz.instanceOf(m, "javax.swing.MenuElement")) tmp.addElement$O(m);
}
result=Clazz.array($I$(16), [tmp.size$()]);
for (i=0, c=tmp.size$(); i < c; i++) result[i]=tmp.elementAt$I(i);

return result;
});

Clazz.newMeth(C$, 'getComponent$',  function () {
return this;
});

Clazz.newMeth(C$, 'isPopupTrigger$java_awt_event_MouseEvent',  function (e) {
return (this.getUI$()).isPopupTrigger$java_awt_event_MouseEvent(e);
});

C$.$static$=function(){C$.$static$=0;
C$.defaultLWPopupEnabledKey= Clazz.new_();
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JPopupMenu, "Separator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.JSeparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I.apply(this,[0]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "PopupMenuSeparatorUI";
});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
