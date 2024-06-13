(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},p$2={},I$=[[0,'java.awt.KeyboardFocusManager','javax.swing.SwingUtilities','javax.swing.UIManager','javax.swing.LookAndFeel',['swingjs.plaf.JSDesktopPaneUI','.JSDesktopManager'],'swingjs.plaf.LazyActionMap','sun.swing.DefaultLookup',['swingjs.plaf.JSDesktopPaneUI','.Actions'],['swingjs.plaf.JSDesktopPaneUI','.Handler']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSDesktopPaneUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSPanelUI');
C$.$classes$=[['Handler',2],['JSDesktopManager',2],['Actions',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['handler','swingjs.plaf.JSDesktopPaneUI.Handler','pcl','java.beans.PropertyChangeListener','desktop','javax.swing.JDesktopPane','desktopManager','javax.swing.DesktopManager']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.isDesktop=true;
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
var isNew=(this.domNode == null );
C$.superclazz.prototype.updateDOMNode$.apply(this, []);
if (isNew) {
this.$$O(this.domNode).addClass("swingjs-desktop");
}this.checkAllowDivOverflow$();
return this.domNode;
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (c) {
this.desktop=c;
this.installDefaults$();
this.installDesktopManager$();
this.installListeners$();
this.installKeyboardActions$();
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent',  function (c) {
this.uninstallKeyboardActions$();
this.uninstallListeners$();
this.uninstallDesktopManager$();
this.uninstallDefaults$();
this.desktop=null;
this.handler=null;
});

Clazz.newMeth(C$, 'installDefaults$',  function () {
if (this.desktop.getBackground$() == null  || Clazz.instanceOf(this.desktop.getBackground$(), "javax.swing.plaf.UIResource") ) {
this.desktop.setBackground$java_awt_Color($I$(3).getColor$O("Desktop.background"));
}$I$(4).installProperty$javax_swing_JComponent$S$O(this.desktop, "opaque", Boolean.TRUE);
});

Clazz.newMeth(C$, 'uninstallDefaults$',  function () {
});

Clazz.newMeth(C$, 'installListeners$',  function () {
this.pcl=this.createPropertyChangeListener$();
this.desktop.addPropertyChangeListener$java_beans_PropertyChangeListener(this.pcl);
});

Clazz.newMeth(C$, 'uninstallListeners$',  function () {
this.desktop.removePropertyChangeListener$java_beans_PropertyChangeListener(this.pcl);
this.pcl=null;
});

Clazz.newMeth(C$, 'installDesktopManager$',  function () {
this.desktopManager=this.desktop.getDesktopManager$();
if (this.desktopManager == null ) {
this.desktopManager=Clazz.new_($I$(5,1),[this, null]);
this.desktop.setDesktopManager$javax_swing_DesktopManager(this.desktopManager);
}});

Clazz.newMeth(C$, 'uninstallDesktopManager$',  function () {
if (Clazz.instanceOf(this.desktop.getDesktopManager$(), "javax.swing.plaf.UIResource")) {
this.desktop.setDesktopManager$javax_swing_DesktopManager(null);
}this.desktopManager=null;
});

Clazz.newMeth(C$, 'installKeyboardActions$',  function () {
var inputMap=this.getInputMap$I(2);
if (inputMap != null ) {
$I$(2).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.desktop, 2, inputMap);
}inputMap=this.getInputMap$I(1);
if (inputMap != null ) {
$I$(2).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.desktop, 1, inputMap);
}$I$(6,"installLazyActionMap$javax_swing_JComponent$Class$S",[this.desktop, Clazz.getClass(C$), "DesktopPane.actionMap"]);
this.registerKeyboardActions$();
});

Clazz.newMeth(C$, 'registerKeyboardActions$',  function () {
});

Clazz.newMeth(C$, 'unregisterKeyboardActions$',  function () {
});

Clazz.newMeth(C$, 'getInputMap$I',  function (condition) {
if (condition == 2) {
return this.createInputMap$I(condition);
} else if (condition == 1) {
return $I$(7).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.desktop, this, "Desktop.ancestorInputMap");
}return null;
});

Clazz.newMeth(C$, 'createInputMap$I',  function (condition) {
if (condition == 2) {
var bindings=$I$(7).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.desktop, this, "Desktop.windowBindings");
if (bindings != null ) {
return $I$(4).makeComponentInputMap$javax_swing_JComponent$OA(this.desktop, bindings);
}}return null;
});

Clazz.newMeth(C$, 'loadActionMap$swingjs_plaf_LazyActionMap',  function (map) {
map.put$javax_swing_Action(Clazz.new_([$I$(8).RESTORE],$I$(8,1).c$$S));
map.put$javax_swing_Action(Clazz.new_([$I$(8).CLOSE],$I$(8,1).c$$S));
map.put$javax_swing_Action(Clazz.new_([$I$(8).MOVE],$I$(8,1).c$$S));
map.put$javax_swing_Action(Clazz.new_([$I$(8).RESIZE],$I$(8,1).c$$S));
map.put$javax_swing_Action(Clazz.new_([$I$(8).LEFT],$I$(8,1).c$$S));
map.put$javax_swing_Action(Clazz.new_([$I$(8).SHRINK_LEFT],$I$(8,1).c$$S));
map.put$javax_swing_Action(Clazz.new_([$I$(8).RIGHT],$I$(8,1).c$$S));
map.put$javax_swing_Action(Clazz.new_([$I$(8).SHRINK_RIGHT],$I$(8,1).c$$S));
map.put$javax_swing_Action(Clazz.new_([$I$(8).UP],$I$(8,1).c$$S));
map.put$javax_swing_Action(Clazz.new_([$I$(8).SHRINK_UP],$I$(8,1).c$$S));
map.put$javax_swing_Action(Clazz.new_([$I$(8).DOWN],$I$(8,1).c$$S));
map.put$javax_swing_Action(Clazz.new_([$I$(8).SHRINK_DOWN],$I$(8,1).c$$S));
map.put$javax_swing_Action(Clazz.new_([$I$(8).ESCAPE],$I$(8,1).c$$S));
map.put$javax_swing_Action(Clazz.new_([$I$(8).MINIMIZE],$I$(8,1).c$$S));
map.put$javax_swing_Action(Clazz.new_([$I$(8).MAXIMIZE],$I$(8,1).c$$S));
map.put$javax_swing_Action(Clazz.new_([$I$(8).NEXT_FRAME],$I$(8,1).c$$S));
map.put$javax_swing_Action(Clazz.new_([$I$(8).PREVIOUS_FRAME],$I$(8,1).c$$S));
map.put$javax_swing_Action(Clazz.new_([$I$(8).NAVIGATE_NEXT],$I$(8,1).c$$S));
map.put$javax_swing_Action(Clazz.new_([$I$(8).NAVIGATE_PREVIOUS],$I$(8,1).c$$S));
}, 1);

Clazz.newMeth(C$, 'uninstallKeyboardActions$',  function () {
this.unregisterKeyboardActions$();
$I$(2).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.desktop, 2, null);
$I$(2).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.desktop, 1, null);
$I$(2).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(this.desktop, null);
});

Clazz.newMeth(C$, 'createPropertyChangeListener$',  function () {
return p$2.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'getHandler',  function () {
if (this.handler == null ) {
this.handler=Clazz.new_($I$(9,1),[this, null]);
}return this.handler;
}, p$2);
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSDesktopPaneUI, "Handler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.beans.PropertyChangeListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (evt) {
var propertyName=evt.getPropertyName$();
if ("desktopManager" === propertyName ) {
this.b$['swingjs.plaf.JSDesktopPaneUI'].installDesktopManager$.apply(this.b$['swingjs.plaf.JSDesktopPaneUI'], []);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSDesktopPaneUI, "JSDesktopManager", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.DefaultDesktopManager', 'javax.swing.plaf.UIResource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSDesktopPaneUI, "Actions", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.swing.UIAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.MOVE_RESIZE_INCREMENT=10;
},1);

C$.$fields$=[['I',['MOVE_RESIZE_INCREMENT']]
,['Z',['moving','resizing'],'S',['CLOSE','ESCAPE','MAXIMIZE','MINIMIZE','MOVE','RESIZE','RESTORE','LEFT','RIGHT','UP','DOWN','SHRINK_LEFT','SHRINK_RIGHT','SHRINK_UP','SHRINK_DOWN','NEXT_FRAME','PREVIOUS_FRAME','NAVIGATE_NEXT','NAVIGATE_PREVIOUS'],'O',['sourceFrame','javax.swing.JInternalFrame','focusOwner','java.awt.Component']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,[null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var dp=e.getSource$();
var key=this.getName$();
if (C$.CLOSE == key || C$.MAXIMIZE == key  || C$.MINIMIZE == key  || C$.RESTORE == key ) {
p$1.setState$javax_swing_JDesktopPane$S.apply(this, [dp, key]);
} else if (C$.ESCAPE == key) {
if (C$.sourceFrame === dp.getSelectedFrame$()  && C$.focusOwner != null  ) {
C$.focusOwner.requestFocus$();
}C$.moving=false;
C$.resizing=false;
C$.sourceFrame=null;
C$.focusOwner=null;
} else if (C$.MOVE == key || C$.RESIZE == key ) {
C$.sourceFrame=dp.getSelectedFrame$();
if (C$.sourceFrame == null ) {
return;
}C$.moving=(key == C$.MOVE) ? true : false;
C$.resizing=(key == C$.RESIZE) ? true : false;
C$.focusOwner=$I$(1).getCurrentKeyboardFocusManager$().getFocusOwner$();
if (!$I$(2).isDescendingFrom$java_awt_Component$java_awt_Component(C$.focusOwner, C$.sourceFrame)) {
C$.focusOwner=null;
}C$.sourceFrame.requestFocus$();
} else if (C$.LEFT == key || C$.RIGHT == key  || C$.UP == key  || C$.DOWN == key  || C$.SHRINK_RIGHT == key  || C$.SHRINK_LEFT == key  || C$.SHRINK_UP == key  || C$.SHRINK_DOWN == key ) {
var c=dp.getSelectedFrame$();
if (C$.sourceFrame == null  || c !== C$.sourceFrame   || $I$(1).getCurrentKeyboardFocusManager$().getFocusOwner$() !== C$.sourceFrame  ) {
return;
}var minOnScreenInsets=$I$(3).getInsets$O("Desktop.minOnScreenInsets");
var size=c.getSize$();
var minSize=c.getMinimumSize$();
var dpWidth=dp.getWidth$();
var dpHeight=dp.getHeight$();
var delta;
var loc=c.getLocation$();
if (C$.LEFT == key) {
if (C$.moving) {
c.setLocation$I$I(loc.x + size.width - 10 < minOnScreenInsets.right ? -size.width + minOnScreenInsets.right : loc.x - 10, loc.y);
} else if (C$.resizing) {
c.setLocation$I$I(loc.x - 10, loc.y);
c.setSize$I$I(size.width + 10, size.height);
}} else if (C$.RIGHT == key) {
if (C$.moving) {
c.setLocation$I$I(loc.x + 10 > dpWidth - minOnScreenInsets.left ? dpWidth - minOnScreenInsets.left : loc.x + 10, loc.y);
} else if (C$.resizing) {
c.setSize$I$I(size.width + 10, size.height);
}} else if (C$.UP == key) {
if (C$.moving) {
c.setLocation$I$I(loc.x, loc.y + size.height - 10 < minOnScreenInsets.bottom ? -size.height + minOnScreenInsets.bottom : loc.y - 10);
} else if (C$.resizing) {
c.setLocation$I$I(loc.x, loc.y - 10);
c.setSize$I$I(size.width, size.height + 10);
}} else if (C$.DOWN == key) {
if (C$.moving) {
c.setLocation$I$I(loc.x, loc.y + 10 > dpHeight - minOnScreenInsets.top ? dpHeight - minOnScreenInsets.top : loc.y + 10);
} else if (C$.resizing) {
c.setSize$I$I(size.width, size.height + 10);
}} else if (C$.SHRINK_LEFT == key && C$.resizing ) {
if (minSize.width < (size.width - 10)) {
delta=10;
} else {
delta=size.width - minSize.width;
}if (loc.x + size.width - delta < minOnScreenInsets.left) {
delta=loc.x + size.width - minOnScreenInsets.left;
}c.setSize$I$I(size.width - delta, size.height);
} else if (C$.SHRINK_RIGHT == key && C$.resizing ) {
if (minSize.width < (size.width - 10)) {
delta=10;
} else {
delta=size.width - minSize.width;
}if (loc.x + delta > dpWidth - minOnScreenInsets.right) {
delta=(dpWidth - minOnScreenInsets.right) - loc.x;
}c.setLocation$I$I(loc.x + delta, loc.y);
c.setSize$I$I(size.width - delta, size.height);
} else if (C$.SHRINK_UP == key && C$.resizing ) {
if (minSize.height < (size.height - 10)) {
delta=10;
} else {
delta=size.height - minSize.height;
}if (loc.y + size.height - delta < minOnScreenInsets.bottom) {
delta=loc.y + size.height - minOnScreenInsets.bottom;
}c.setSize$I$I(size.width, size.height - delta);
} else if (C$.SHRINK_DOWN == key && C$.resizing ) {
if (minSize.height < (size.height - 10)) {
delta=10;
} else {
delta=size.height - minSize.height;
}if (loc.y + delta > dpHeight - minOnScreenInsets.top) {
delta=(dpHeight - minOnScreenInsets.top) - loc.y;
}c.setLocation$I$I(loc.x, loc.y + delta);
c.setSize$I$I(size.width, size.height - delta);
}} else if (C$.NEXT_FRAME == key || C$.PREVIOUS_FRAME == key ) {
dp.selectFrame$Z((key == C$.NEXT_FRAME) ? true : false);
} else if (C$.NAVIGATE_NEXT == key || C$.NAVIGATE_PREVIOUS == key ) {
var moveForward=true;
if (C$.NAVIGATE_PREVIOUS == key) {
moveForward=false;
}var cycleRoot=dp.getFocusCycleRootAncestor$();
if (cycleRoot != null ) {
var policy=cycleRoot.getFocusTraversalPolicy$();
if (policy != null  && Clazz.instanceOf(policy, "javax.swing.SortingFocusTraversalPolicy") ) {
var sPolicy=policy;
var idc=sPolicy.getImplicitDownCycleTraversal$();
try {
sPolicy.setImplicitDownCycleTraversal$Z(false);
if (moveForward) {
$I$(1).getCurrentKeyboardFocusManager$().focusNextComponent$java_awt_Component(dp);
} else {
$I$(1).getCurrentKeyboardFocusManager$().focusPreviousComponent$java_awt_Component(dp);
}} finally {
sPolicy.setImplicitDownCycleTraversal$Z(idc);
}
}}}});

Clazz.newMeth(C$, 'setState$javax_swing_JDesktopPane$S',  function (dp, state) {
if (state == C$.CLOSE) {
var f=dp.getSelectedFrame$();
if (f == null ) {
return;
}f.doDefaultCloseAction$();
} else if (state == C$.MAXIMIZE) {
var f=dp.getSelectedFrame$();
if (f == null ) {
return;
}if (!f.isMaximum$()) {
if (f.isIcon$()) {
try {
f.setIcon$Z(false);
f.setMaximum$Z(true);
} catch (pve) {
if (Clazz.exceptionOf(pve,"java.beans.PropertyVetoException")){
} else {
throw pve;
}
}
} else {
try {
f.setMaximum$Z(true);
} catch (pve) {
if (Clazz.exceptionOf(pve,"java.beans.PropertyVetoException")){
} else {
throw pve;
}
}
}}} else if (state == C$.MINIMIZE) {
var f=dp.getSelectedFrame$();
if (f == null ) {
return;
}if (!f.isIcon$()) {
try {
f.setIcon$Z(true);
} catch (pve) {
if (Clazz.exceptionOf(pve,"java.beans.PropertyVetoException")){
} else {
throw pve;
}
}
}} else if (state == C$.RESTORE) {
var f=dp.getSelectedFrame$();
if (f == null ) {
return;
}try {
if (f.isIcon$()) {
f.setIcon$Z(false);
} else if (f.isMaximum$()) {
f.setMaximum$Z(false);
}f.setSelected$Z(true);
} catch (pve) {
if (Clazz.exceptionOf(pve,"java.beans.PropertyVetoException")){
} else {
throw pve;
}
}
}}, p$1);

Clazz.newMeth(C$, 'isEnabled$O',  function (sender) {
if (Clazz.instanceOf(sender, "javax.swing.JDesktopPane")) {
var dp=sender;
var action=this.getName$();
if (action == C$.NEXT_FRAME || action == C$.PREVIOUS_FRAME ) {
return true;
}var iFrame=dp.getSelectedFrame$();
if (iFrame == null ) {
return false;
} else if (action == C$.CLOSE) {
return iFrame.isClosable$();
} else if (action == C$.MINIMIZE) {
return iFrame.isIconifiable$();
} else if (action == C$.MAXIMIZE) {
return iFrame.isMaximizable$();
}return true;
}return false;
});

C$.$static$=function(){C$.$static$=0;
C$.CLOSE="close";
C$.ESCAPE="escape";
C$.MAXIMIZE="maximize";
C$.MINIMIZE="minimize";
C$.MOVE="move";
C$.RESIZE="resize";
C$.RESTORE="restore";
C$.LEFT="left";
C$.RIGHT="right";
C$.UP="up";
C$.DOWN="down";
C$.SHRINK_LEFT="shrinkLeft";
C$.SHRINK_RIGHT="shrinkRight";
C$.SHRINK_UP="shrinkUp";
C$.SHRINK_DOWN="shrinkDown";
C$.NEXT_FRAME="selectNextFrame";
C$.PREVIOUS_FRAME="selectPreviousFrame";
C$.NAVIGATE_NEXT="navigateNext";
C$.NAVIGATE_PREVIOUS="navigatePrevious";
C$.moving=false;
C$.resizing=false;
C$.sourceFrame=null;
C$.focusOwner=null;
};
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:06 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
