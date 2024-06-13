(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'javax.swing.MenuSelectionManager','javax.swing.MenuElement','swingjs.plaf.JSComponentUI','swingjs.api.js.DOMNode','java.awt.Insets',['swingjs.plaf.JSMenuBarUI','.Actions'],'swingjs.plaf.DefaultMenuLayout','javax.swing.LookAndFeel','javax.swing.SwingUtilities','swingjs.plaf.LazyActionMap','sun.swing.DefaultLookup',['swingjs.plaf.JSMenuBarUI','.Handler']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSMenuBarUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSPanelUI', 'java.awt.event.ContainerListener');
C$.$classes$=[['Handler',2],['Actions',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['installed'],'O',['menuBar','javax.swing.JMenuBar','changeListener','javax.swing.event.ChangeListener','containerListener','java.awt.event.ContainerListener','handler','swingjs.plaf.JSMenuBarUI.Handler','keyListener','java.awt.event.KeyListener']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.isContainer=true;
this.allowPaintedBackground=false;
this.setDoc$();
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
if (this.domNode == null ) {
this.containerNode=this.domNode=$I$(3,"newDOMObject$S$S$SA",["div", this.id, Clazz.array(String, -1, [])]);
$I$(4).setTopLeftAbsolute(this.domNode, 0, 0);
}this.setBackgroundImpl$java_awt_Color(this.jc.isOpaque$() ? this.getBackground$() : null);
return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'propertyChangedFromListener$java_beans_PropertyChangeEvent$S',  function (e, prop) {
C$.superclazz.prototype.propertyChangedFromListener$java_beans_PropertyChangeEvent$S.apply(this, [e, prop]);
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var prop=e.getPropertyName$();
if (!this.installed && this.jc.getRootPane$() != null  ) {
this.jc.getRootPane$().addKeyListener$java_awt_event_KeyListener(this.keyListener);
this.installed=true;
}C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'getContainerHeight$',  function () {
var m=this.menuBar.getInsets$();
this.height=this.getFont$().getFontMetrics$().getHeight$() + m.top + m.bottom ;
return this.height;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
var top=this.menuBar.getTopLevelAncestor$();
if (Clazz.instanceOf(top, "javax.swing.JApplet")) ((top).getUI$()).adjustCanvasForMenuBar$();
});

Clazz.newMeth(C$, 'getInsets$',  function () {
return Clazz.new_($I$(5,1).c$$I$I$I$I,[0, 10, 0, 10]);
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent',  function (jc) {
var d=null;
return d;
});

Clazz.newMeth(C$, 'componentAdded$java_awt_event_ContainerEvent',  function (e) {
});

Clazz.newMeth(C$, 'componentRemoved$java_awt_event_ContainerEvent',  function (e) {
$I$(4).detachAll(this.domNode);
this.setTainted$();
this.setHTMLElement$();
});

Clazz.newMeth(C$, 'loadActionMap$swingjs_plaf_LazyActionMap',  function (map) {
map.put$javax_swing_Action(Clazz.new_($I$(6,1).c$$S,["takeFocus"]));
}, 1);

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (c) {
this.menuBar=c;
this.installDefaults$();
this.installListeners$();
this.installKeyboardActions$();
});

Clazz.newMeth(C$, 'installDefaults$',  function () {
if (this.menuBar.getLayout$() == null  || Clazz.instanceOf(this.menuBar.getLayout$(), "javax.swing.plaf.UIResource") ) {
this.menuBar.setLayout$java_awt_LayoutManager(Clazz.new_($I$(7,1).c$$java_awt_Container$I,[this.menuBar, 2]));
this.menuBar.addContainerListener$java_awt_event_ContainerListener(this);
}$I$(8).installProperty$javax_swing_JComponent$S$O(this.menuBar, "opaque", Boolean.TRUE);
$I$(8).installBorder$javax_swing_JComponent$S(this.menuBar, "MenuBar.border");
$I$(8).installColorsAndFont$javax_swing_JComponent$S$S$S(this.menuBar, "MenuBar.background", "MenuBar.foreground", "MenuBar.font");
this.menuBar.setOpaque$Z(true);
});

Clazz.newMeth(C$, 'installListeners$',  function () {
this.containerListener=this.createContainerListener$();
this.changeListener=this.createChangeListener$();
this.keyListener=this.createKeyListener$();
for (var i=0; i < this.menuBar.getMenuCount$(); i++) {
var menu=this.menuBar.getMenu$I(i);
if (menu != null ) menu.getModel$().addChangeListener$javax_swing_event_ChangeListener(this.changeListener);
}
this.menuBar.addContainerListener$java_awt_event_ContainerListener(this.containerListener);
});

Clazz.newMeth(C$, 'installKeyboardActions$',  function () {
var inputMap=this.getInputMap$I(2);
$I$(9).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.menuBar, 2, inputMap);
$I$(10,"installLazyActionMap$javax_swing_JComponent$Class$S",[this.menuBar, Clazz.getClass(C$), "MenuBar.actionMap"]);
});

Clazz.newMeth(C$, 'getInputMap$I',  function (condition) {
if (condition == 2) {
var bindings=$I$(11).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.menuBar, this, "MenuBar.windowBindings");
if (bindings != null ) {
return $I$(8).makeComponentInputMap$javax_swing_JComponent$OA(this.menuBar, bindings);
}}return null;
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent',  function (c) {
this.uninstallDefaults$();
this.uninstallListeners$();
this.uninstallKeyboardActions$();
this.menuBar=null;
});

Clazz.newMeth(C$, 'uninstallDefaults$',  function () {
if (this.menuBar != null ) {
$I$(8).uninstallBorder$javax_swing_JComponent(this.menuBar);
}});

Clazz.newMeth(C$, 'uninstallListeners$',  function () {
this.menuBar.removeContainerListener$java_awt_event_ContainerListener(this.containerListener);
for (var i=0; i < this.menuBar.getMenuCount$(); i++) {
var menu=this.menuBar.getMenu$I(i);
if (menu != null ) menu.getModel$().removeChangeListener$javax_swing_event_ChangeListener(this.changeListener);
}
this.containerListener=null;
this.changeListener=null;
this.handler=null;
});

Clazz.newMeth(C$, 'uninstallKeyboardActions$',  function () {
$I$(9).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.menuBar, 2, null);
$I$(9).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(this.menuBar, null);
});

Clazz.newMeth(C$, 'createContainerListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createChangeListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'createKeyListener$',  function () {
return p$1.getHandler.apply(this, []);
});

Clazz.newMeth(C$, 'getHandler',  function () {
if (this.handler == null ) {
this.handler=Clazz.new_($I$(12,1),[this, null]);
}return this.handler;
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSMenuBarUI, "Handler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['javax.swing.event.ChangeListener', 'java.awt.event.ContainerListener', 'java.awt.event.KeyListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
for (var i=0, c=this.b$['swingjs.plaf.JSMenuBarUI'].menuBar.getMenuCount$(); i < c; i++) {
var menu=this.b$['swingjs.plaf.JSMenuBarUI'].menuBar.getMenu$I(i);
if (menu != null  && menu.isSelected$() ) {
this.b$['swingjs.plaf.JSMenuBarUI'].menuBar.getSelectionModel$().setSelectedIndex$I(i);
return;
}}
this.b$['swingjs.plaf.JSMenuBarUI'].menuBar.getSelectionModel$().clearSelection$();
});

Clazz.newMeth(C$, 'componentAdded$java_awt_event_ContainerEvent',  function (e) {
var c=e.getChild$();
if (Clazz.instanceOf(c, "javax.swing.JMenu")) (c).getModel$().addChangeListener$javax_swing_event_ChangeListener(this.b$['swingjs.plaf.JSMenuBarUI'].changeListener);
});

Clazz.newMeth(C$, 'componentRemoved$java_awt_event_ContainerEvent',  function (e) {
var c=e.getChild$();
if (Clazz.instanceOf(c, "javax.swing.JMenu")) (c).getModel$().removeChangeListener$javax_swing_event_ChangeListener(this.b$['swingjs.plaf.JSMenuBarUI'].changeListener);
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (e) {
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
var msm=$I$(1).defaultManager$();
msm.setCurrentPath$javax_swing_JComponent(null);
msm.processKeyEvent$java_awt_event_KeyEvent(e);
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSMenuBarUI, "Actions", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.swing.UIAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (key) {
;C$.superclazz.c$$S.apply(this,[key]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var menuBar=e.getSource$();
var defaultManager=$I$(1).defaultManager$();
var me;
var subElements;
var menu=menuBar.getMenu$I(0);
if (menu != null ) {
me=Clazz.array($I$(2), [3]);
me[0]=menuBar;
me[1]=menu;
me[2]=menu.getPopupMenu$();
defaultManager.setSelectedPath$javax_swing_MenuElementA(me);
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:08 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
