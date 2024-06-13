(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'javax.swing.UIManager','java.awt.Toolkit','java.awt.Rectangle','javax.swing.SwingUtilities','java.awt.Point','javax.swing.JPopupMenu','javax.swing.JMenuItem',['javax.swing.JPopupMenu','.Separator'],'Error','java.awt.Container','java.awt.JSComponent','javax.swing.event.MenuListener','javax.swing.event.MenuEvent',['javax.swing.JMenu','.MenuChangeListener'],['javax.swing.JMenu','.WinListener'],'javax.swing.MenuElement','javax.swing.MenuSelectionManager','java.util.Vector']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JMenu", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.JMenuItem', 'javax.swing.MenuElement');
C$.$classes$=[['MenuChangeListener',0],['WinListener',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.menuChangeListener=null;
this.menuEvent=null;
this.customMenuLocation=null;
},1);

C$.$fields$=[['I',['delay'],'O',['popupMenu','javax.swing.JPopupMenu','menuChangeListener','javax.swing.event.ChangeListener','menuEvent','javax.swing.event.MenuEvent','customMenuLocation','java.awt.Point','popupListener','javax.swing.JMenu.WinListener']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S.apply(this, [""]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (s) {
;C$.superclazz.c$$S.apply(this,[s]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_Action',  function (a) {
C$.c$.apply(this, []);
this.setAction$javax_swing_Action(a);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z',  function (s, b) {
C$.c$$S.apply(this, [s]);
}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "MenuUI";
});

Clazz.newMeth(C$, 'initFocusability$',  function () {
});

Clazz.newMeth(C$, 'updateUI$',  function () {
C$.superclazz.prototype.updateUI$.apply(this, []);
if (this.popupMenu != null ) {
this.popupMenu.setUI$javax_swing_plaf_ComponentUI($I$(1).getUI$java_awt_Component(this.popupMenu));
}});

Clazz.newMeth(C$, 'addNotify$',  function () {
C$.superclazz.prototype.addNotify$.apply(this, []);
if (this.popupMenu != null ) this.popupMenu.addNotify$();
});

Clazz.newMeth(C$, 'setModel$javax_swing_ButtonModel',  function (newModel) {
var oldModel=this.getModel$();
C$.superclazz.prototype.setModel$javax_swing_ButtonModel.apply(this, [newModel]);
if (oldModel != null  && this.menuChangeListener != null  ) {
oldModel.removeChangeListener$javax_swing_event_ChangeListener(this.menuChangeListener);
this.menuChangeListener=null;
}this.model=newModel;
if (newModel != null ) {
this.menuChangeListener=p$1.createMenuChangeListener.apply(this, []);
newModel.addChangeListener$javax_swing_event_ChangeListener(this.menuChangeListener);
}});

Clazz.newMeth(C$, 'isSelected$',  function () {
return this.getModel$().isSelected$();
});

Clazz.newMeth(C$, 'setSelected$Z',  function (b) {
var model=this.getModel$();
if (b != model.isSelected$() ) {
model.setSelected$Z(b);
}});

Clazz.newMeth(C$, 'isPopupMenuVisible$',  function () {
p$1.ensurePopupMenuCreated.apply(this, []);
return this.popupMenu.isVisible$();
});

Clazz.newMeth(C$, 'setPopupMenuVisible$Z',  function (b) {
if (!this.isEnabled$() || this.popupMenu == null  ) return;
if (b && this.popupMenu.getPeer$() == null  ) this.popupMenu.addNotify$();
var isVisible=this.isPopupMenuVisible$();
if (b != isVisible  && (this.isEnabled$() || !b ) ) {
p$1.ensurePopupMenuCreated.apply(this, []);
if (b && this.isShowing$() ) {
var p=p$1.getCustomMenuLocation.apply(this, []);
if (p == null ) {
p=this.getPopupMenuOrigin$();
}this.getPopupMenu$().show$java_awt_Component$I$I(this, p.x, p.y);
} else {
this.getPopupMenu$().setVisible$Z(false);
}}});

Clazz.newMeth(C$, 'getPopupMenuOrigin$',  function () {
var x=0;
var y=0;
var pm=this.getPopupMenu$();
var s=this.getSize$();
var pmSize=pm.getSize$();
if (pmSize.width == 0) {
pmSize=pm.getPreferredSize$();
}var position=this.getLocationOnScreen$();
var toolkit=$I$(2).getDefaultToolkit$();
var gc=this.getGraphicsConfiguration$();
var screenBounds=Clazz.new_([toolkit.getScreenSize$()],$I$(3,1).c$$java_awt_Dimension);
if (gc != null ) {
screenBounds=gc.getBounds$();
var screenInsets=toolkit.getScreenInsets$java_awt_GraphicsConfiguration(gc);
screenBounds.width-=Math.abs(screenInsets.left + screenInsets.right);
screenBounds.height-=Math.abs(screenInsets.top + screenInsets.bottom);
position.x-=Math.abs(screenInsets.left);
position.y-=Math.abs(screenInsets.top);
}var parent=this.getParent$();
if (Clazz.instanceOf(parent, "javax.swing.JPopupMenu")) {
var xOffset=$I$(1).getInt$O("Menu.submenuPopupOffsetX");
var yOffset=$I$(1).getInt$O("Menu.submenuPopupOffsetY");
if ($I$(4).isLeftToRight$java_awt_Component(this)) {
x=s.width + xOffset;
if (position.x + x + pmSize.width  >= screenBounds.width + screenBounds.x && screenBounds.width - s.width < 2 * (position.x - screenBounds.x) ) {
x=0 - xOffset - pmSize.width ;
}} else {
x=0 - xOffset - pmSize.width ;
if (position.x + x < screenBounds.x && screenBounds.width - s.width > 2 * (position.x - screenBounds.x) ) {
x=s.width + xOffset;
}}y=yOffset;
if (position.y + y + pmSize.height  >= screenBounds.height + screenBounds.y && screenBounds.height - s.height < 2 * (position.y - screenBounds.y) ) {
y=s.height - yOffset - pmSize.height ;
}} else {
var xOffset=$I$(1).getInt$O("Menu.menuPopupOffsetX");
var yOffset=$I$(1).getInt$O("Menu.menuPopupOffsetY");
if ($I$(4).isLeftToRight$java_awt_Component(this)) {
x=xOffset;
if (position.x + x + pmSize.width  >= screenBounds.width + screenBounds.x && screenBounds.width - s.width < 2 * (position.x - screenBounds.x) ) {
x=s.width - xOffset - pmSize.width ;
}} else {
x=s.width - xOffset - pmSize.width ;
if (position.x + x < screenBounds.x && screenBounds.width - s.width > 2 * (position.x - screenBounds.x) ) {
x=xOffset;
}}y=s.height + yOffset;
if (position.y + y + pmSize.height  >= screenBounds.height && screenBounds.height - s.height < 2 * (position.y - screenBounds.y) ) {
y=0 - yOffset - pmSize.height ;
}}return Clazz.new_($I$(5,1).c$$I$I,[x, y]);
});

Clazz.newMeth(C$, 'getDelay$',  function () {
return this.delay;
});

Clazz.newMeth(C$, 'setDelay$I',  function (d) {
if (d < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Delay must be a positive integer"]);
this.delay=d;
});

Clazz.newMeth(C$, 'ensurePopupMenuCreated',  function () {
if (this.popupMenu == null ) {
this.popupMenu=Clazz.new_($I$(6,1));
this.popupMenu.setInvoker$java_awt_Component(this);
this.popupListener=this.createWinListener$javax_swing_JPopupMenu(this.popupMenu);
}}, p$1);

Clazz.newMeth(C$, 'getCustomMenuLocation',  function () {
return this.customMenuLocation;
}, p$1);

Clazz.newMeth(C$, 'setMenuLocation$I$I',  function (x, y) {
this.customMenuLocation=Clazz.new_($I$(5,1).c$$I$I,[x, y]);
if (this.popupMenu != null ) this.popupMenu.setLocation$I$I(x, y);
});

Clazz.newMeth(C$, 'add$javax_swing_JMenuItem',  function (menuItem) {
p$1.ensurePopupMenuCreated.apply(this, []);
this.popupMenu.add$javax_swing_JMenuItem(menuItem);
this.firePropertyChange$S$O$O("JSitem", null, menuItem);
return menuItem;
});

Clazz.newMeth(C$, 'add$java_awt_Component',  function (c) {
p$1.ensurePopupMenuCreated.apply(this, []);
this.popupMenu.add$java_awt_Component(c);
this.firePropertyChange$S$O$O("JSitem", null, c);
return c;
});

Clazz.newMeth(C$, 'add$java_awt_Component$I',  function (c, index) {
p$1.ensurePopupMenuCreated.apply(this, []);
this.popupMenu.add$java_awt_Component$I(c, index);
this.firePropertyChange$S$O$O("JSitem", null, c);
return c;
});

Clazz.newMeth(C$, 'add$S',  function (s) {
return this.add$javax_swing_JMenuItem(Clazz.new_($I$(7,1).c$$S,[s]));
});

Clazz.newMeth(C$, 'add$javax_swing_Action',  function (a) {
var mi=this.createActionComponent$javax_swing_Action(a);
mi.setAction$javax_swing_Action(a);
this.add$javax_swing_JMenuItem(mi);
return mi;
});

Clazz.newMeth(C$, 'createActionComponent$javax_swing_Action',  function (a) {
var mi=((P$.JMenu$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JMenu$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.JMenuItem'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'createActionPropertyChangeListener$javax_swing_Action',  function (a) {
var pcl=this.b$['javax.swing.JMenu'].createActionChangeListener$javax_swing_JMenuItem.apply(this.b$['javax.swing.JMenu'], [this]);
if (pcl == null ) {
pcl=C$.superclazz.prototype.createActionPropertyChangeListener$javax_swing_Action.apply(this, [a]);
}return pcl;
});
})()
), Clazz.new_($I$(7,1),[this, null],P$.JMenu$1));
mi.setHorizontalTextPosition$I(11);
mi.setVerticalTextPosition$I(0);
return mi;
});

Clazz.newMeth(C$, 'createActionChangeListener$javax_swing_JMenuItem',  function (b) {
return b.createActionPropertyChangeListener0$javax_swing_Action(b.getAction$());
});

Clazz.newMeth(C$, 'addSeparator$',  function () {
p$1.ensurePopupMenuCreated.apply(this, []);
this.popupMenu.addSeparator$();
});

Clazz.newMeth(C$, 'insert$S$I',  function (s, pos) {
if (pos < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["index less than zero."]);
}p$1.ensurePopupMenuCreated.apply(this, []);
this.popupMenu.insert$java_awt_Component$I(Clazz.new_($I$(7,1).c$$S,[s]), pos);
});

Clazz.newMeth(C$, 'insert$javax_swing_JMenuItem$I',  function (mi, pos) {
if (pos < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["index less than zero."]);
}p$1.ensurePopupMenuCreated.apply(this, []);
this.popupMenu.insert$java_awt_Component$I(mi, pos);
return mi;
});

Clazz.newMeth(C$, 'insert$javax_swing_Action$I',  function (a, pos) {
if (pos < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["index less than zero."]);
}p$1.ensurePopupMenuCreated.apply(this, []);
var mi=Clazz.new_($I$(7,1).c$$javax_swing_Action,[a]);
mi.setHorizontalTextPosition$I(11);
mi.setVerticalTextPosition$I(0);
this.popupMenu.insert$java_awt_Component$I(mi, pos);
return mi;
});

Clazz.newMeth(C$, 'insertSeparator$I',  function (index) {
if (index < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["index less than zero."]);
}p$1.ensurePopupMenuCreated.apply(this, []);
var sep=Clazz.new_($I$(8,1));
sep.秘j2sInvalidateOnAdd=false;
this.popupMenu.insert$java_awt_Component$I(sep, index);
});

Clazz.newMeth(C$, 'getItem$I',  function (pos) {
if (pos < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["index less than zero."]);
}var c=this.getMenuComponent$I(pos);
if (Clazz.instanceOf(c, "javax.swing.JMenuItem")) {
var mi=c;
return mi;
}return null;
});

Clazz.newMeth(C$, 'getItemCount$',  function () {
return this.getMenuComponentCount$();
});

Clazz.newMeth(C$, 'isTearOff$',  function () {
throw Clazz.new_(["boolean isTearOff() {} not yet implemented"],$I$(9,1).c$$S);
});

Clazz.newMeth(C$, 'remove$javax_swing_JMenuItem',  function (item) {
this.remove$java_awt_Component(item);
});

Clazz.newMeth(C$, 'remove$I',  function (pos) {
if (pos < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["index less than zero."]);
}if (pos > this.getItemCount$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["index greater than the number of items."]);
}if (this.popupMenu != null ) this.popupMenu.remove$I(pos);
});

Clazz.newMeth(C$, 'remove$java_awt_Component',  function (c) {
if (this.popupMenu != null ) this.popupMenu.remove$java_awt_Component(c);
this.firePropertyChange$S$O$O("JSitem", c, null);
});

Clazz.newMeth(C$, 'removeAll$',  function () {
if (this.popupMenu != null ) this.popupMenu.removeAll$();
this.firePropertyChange$S$O$O("JSitem", this, null);
});

Clazz.newMeth(C$, 'getMenuComponentCount$',  function () {
return (this.popupMenu == null  ? 0 : this.popupMenu.getComponentCount$());
});

Clazz.newMeth(C$, 'getMenuComponent$I',  function (n) {
return (this.popupMenu == null  ? null : this.popupMenu.getComponent$I(n));
});

Clazz.newMeth(C$, 'getMenuComponents$',  function () {
return (this.popupMenu == null  ? $I$(10).EMPTY_ARRAY : this.popupMenu.getComponents$());
});

Clazz.newMeth(C$, 'getMenuArray$',  function () {
return $I$(11).秘getChildArray$java_awt_Container(this.popupMenu);
});

Clazz.newMeth(C$, 'isTopLevelMenu$',  function () {
return (Clazz.instanceOf(this.getParent$(), "javax.swing.JMenuBar"));
});

Clazz.newMeth(C$, 'isMenuComponent$java_awt_Component',  function (c) {
if (c === this ) return true;
if (Clazz.instanceOf(c, "javax.swing.JPopupMenu")) {
var comp=c;
if (comp === this.getPopupMenu$() ) return true;
}var ncomponents=this.getMenuComponentCount$();
var component=this.getMenuArray$();
for (var i=0; i < ncomponents; i++) {
var comp=component[i];
if (comp === c ) return true;
if (Clazz.instanceOf(comp, "javax.swing.JMenu")) {
var subMenu=comp;
if (subMenu.isMenuComponent$java_awt_Component(c)) return true;
}}
return false;
});

Clazz.newMeth(C$, 'getPopupMenu$',  function () {
p$1.ensurePopupMenuCreated.apply(this, []);
return this.popupMenu;
});

Clazz.newMeth(C$, 'addMenuListener$javax_swing_event_MenuListener',  function (l) {
this.listenerList.add$Class$java_util_EventListener(Clazz.getClass($I$(12),['menuCanceled$javax_swing_event_MenuEvent','menuDeselected$javax_swing_event_MenuEvent','menuSelected$javax_swing_event_MenuEvent']), l);
});

Clazz.newMeth(C$, 'removeMenuListener$javax_swing_event_MenuListener',  function (l) {
this.listenerList.remove$Class$java_util_EventListener(Clazz.getClass($I$(12),['menuCanceled$javax_swing_event_MenuEvent','menuDeselected$javax_swing_event_MenuEvent','menuSelected$javax_swing_event_MenuEvent']), l);
});

Clazz.newMeth(C$, 'getMenuListeners$',  function () {
return this.listenerList.getListeners$Class(Clazz.getClass($I$(12),['menuCanceled$javax_swing_event_MenuEvent','menuDeselected$javax_swing_event_MenuEvent','menuSelected$javax_swing_event_MenuEvent']));
});

Clazz.newMeth(C$, 'fireMenuSelected$',  function () {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(12),['menuCanceled$javax_swing_event_MenuEvent','menuDeselected$javax_swing_event_MenuEvent','menuSelected$javax_swing_event_MenuEvent']) ) {
if (listeners[i + 1] == null ) {
throw Clazz.new_([this.getText$() + " has a NULL Listener!! " + i ],$I$(9,1).c$$S);
} else {
if (this.menuEvent == null ) this.menuEvent=Clazz.new_($I$(13,1).c$$O,[this]);
(listeners[i + 1]).menuSelected$javax_swing_event_MenuEvent(this.menuEvent);
}}}
});

Clazz.newMeth(C$, 'fireMenuDeselected$',  function () {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(12),['menuCanceled$javax_swing_event_MenuEvent','menuDeselected$javax_swing_event_MenuEvent','menuSelected$javax_swing_event_MenuEvent']) ) {
if (listeners[i + 1] == null ) {
throw Clazz.new_([this.getText$() + " has a NULL Listener!! " + i ],$I$(9,1).c$$S);
} else {
if (this.menuEvent == null ) this.menuEvent=Clazz.new_($I$(13,1).c$$O,[this]);
(listeners[i + 1]).menuDeselected$javax_swing_event_MenuEvent(this.menuEvent);
}}}
});

Clazz.newMeth(C$, 'fireMenuCanceled$',  function () {
var listeners=this.listenerList.getListenerList$();
for (var i=listeners.length - 2; i >= 0; i-=2) {
if (listeners[i] === Clazz.getClass($I$(12),['menuCanceled$javax_swing_event_MenuEvent','menuDeselected$javax_swing_event_MenuEvent','menuSelected$javax_swing_event_MenuEvent']) ) {
if (listeners[i + 1] == null ) {
throw Clazz.new_([this.getText$() + " has a NULL Listener!! " + i ],$I$(9,1).c$$S);
} else {
if (this.menuEvent == null ) this.menuEvent=Clazz.new_($I$(13,1).c$$O,[this]);
(listeners[i + 1]).menuCanceled$javax_swing_event_MenuEvent(this.menuEvent);
}}}
});

Clazz.newMeth(C$, 'configureAcceleratorFromAction$javax_swing_Action',  function (a) {
});

Clazz.newMeth(C$, 'createMenuChangeListener',  function () {
return Clazz.new_($I$(14,1),[this, null]);
}, p$1);

Clazz.newMeth(C$, 'createWinListener$javax_swing_JPopupMenu',  function (p) {
return Clazz.new_($I$(15,1).c$$javax_swing_JPopupMenu,[this, null, p]);
});

Clazz.newMeth(C$, 'menuSelectionChanged$Z',  function (isIncluded) {
this.setSelected$Z(isIncluded);
});

Clazz.newMeth(C$, 'getSubElements$',  function () {
if (this.popupMenu == null ) return Clazz.array($I$(16), [0]);
 else {
var result=Clazz.array($I$(16), [1]);
result[0]=this.popupMenu;
return result;
}});

Clazz.newMeth(C$, 'getComponent$',  function () {
return this;
});

Clazz.newMeth(C$, 'applyComponentOrientation$java_awt_ComponentOrientation',  function (o) {
C$.superclazz.prototype.applyComponentOrientation$java_awt_ComponentOrientation.apply(this, [o]);
if (this.popupMenu != null ) {
var ncomponents=this.getMenuComponentCount$();
for (var i=0; i < ncomponents; ++i) {
this.getMenuComponent$I(i).applyComponentOrientation$java_awt_ComponentOrientation(o);
}
this.popupMenu.setComponentOrientation$java_awt_ComponentOrientation(o);
}});

Clazz.newMeth(C$, 'setComponentOrientation$java_awt_ComponentOrientation',  function (o) {
C$.superclazz.prototype.setComponentOrientation$java_awt_ComponentOrientation.apply(this, [o]);
if (this.popupMenu != null ) {
this.popupMenu.setComponentOrientation$java_awt_ComponentOrientation(o);
}});

Clazz.newMeth(C$, 'setAccelerator$javax_swing_KeyStroke',  function (keyStroke) {
throw Clazz.new_(["setAccelerator() is not defined for JMenu.  Use setMnemonic() instead."],$I$(9,1).c$$S);
});

Clazz.newMeth(C$, 'processKeyEvent$java_awt_event_KeyEvent',  function (evt) {
$I$(17).defaultManager$().processKeyEvent$java_awt_event_KeyEvent(evt);
if (evt.isConsumed$()) return;
C$.superclazz.prototype.processKeyEvent$java_awt_event_KeyEvent.apply(this, [evt]);
});

Clazz.newMeth(C$, 'doClick$I',  function (pressTime) {
var me=p$1.buildMenuElementArray$javax_swing_JMenu.apply(this, [this]);
if (me == null ) return;
$I$(17).defaultManager$().setSelectedPath$javax_swing_MenuElementA(me);
});

Clazz.newMeth(C$, 'buildMenuElementArray$javax_swing_JMenu',  function (leaf) {
var elements=Clazz.new_($I$(18,1));
var current=leaf.getPopupMenu$();
var pop;
var menu;
var bar;
while (true){
if (Clazz.instanceOf(current, "javax.swing.JPopupMenu")) {
pop=current;
elements.insertElementAt$O$I(pop, 0);
current=pop.getInvoker$();
} else if (Clazz.instanceOf(current, "javax.swing.JMenu")) {
menu=current;
elements.insertElementAt$O$I(menu, 0);
current=menu.getParent$();
} else if (Clazz.instanceOf(current, "javax.swing.JMenuBar")) {
bar=current;
elements.insertElementAt$O$I(bar, 0);
var me=Clazz.array($I$(16), [elements.size$()]);
elements.copyInto$OA(me);
return me;
} else {
return null;
}}
}, p$1);

Clazz.newMeth(C$, 'paramString$',  function () {
return C$.superclazz.prototype.paramString$.apply(this, []);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JMenu, "MenuChangeListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.swing.event.ChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isSelected=false;
},1);

C$.$fields$=[['Z',['isSelected']]]

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var model=e.getSource$();
var modelSelected=model.isSelected$();
if (modelSelected != this.isSelected ) {
if (modelSelected == true ) {
this.b$['javax.swing.JMenu'].fireMenuSelected$.apply(this.b$['javax.swing.JMenu'], []);
} else {
this.b$['javax.swing.JMenu'].fireMenuDeselected$.apply(this.b$['javax.swing.JMenu'], []);
}this.isSelected=modelSelected;
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JMenu, "WinListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.event.WindowAdapter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['popupMenu','javax.swing.JPopupMenu']]]

Clazz.newMeth(C$, 'c$$javax_swing_JPopupMenu',  function (p) {
Clazz.super_(C$, this);
this.popupMenu=p;
}, 1);

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
this.b$['javax.swing.JMenu'].setSelected$Z.apply(this.b$['javax.swing.JMenu'], [false]);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
