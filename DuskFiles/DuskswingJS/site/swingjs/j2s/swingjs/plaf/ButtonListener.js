(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'javax.swing.MenuSelectionManager','swingjs.plaf.ButtonListener','swingjs.plaf.JSComponentUI','swingjs.plaf.JSPopupMenuUI','javax.swing.MenuElement',['swingjs.plaf.ButtonListener','.Actions'],'swingjs.api.js.DOMNode','swingjs.plaf.LazyActionMap','javax.swing.SwingUtilities','javax.swing.UIManager','javax.swing.plaf.ComponentInputMapUIResource','sun.swing.DefaultLookup','javax.swing.KeyStroke']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ButtonListener", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.awt.event.MouseListener', 'java.awt.event.MouseMotionListener', 'java.awt.event.FocusListener', 'javax.swing.event.ChangeListener', 'java.beans.PropertyChangeListener']);
C$.$classes$=[['Actions',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['lastMnemonic'],'O',['ui','swingjs.plaf.JSButtonUI']]
,['Z',['crossMenuMnemonic']]]

Clazz.newMeth(C$, 'loadActionMap$swingjs_plaf_LazyActionMap',  function (map) {
map.put$javax_swing_Action(Clazz.new_($I$(6,1).c$$S,["pressed"]));
map.put$javax_swing_Action(Clazz.new_($I$(6,1).c$$S,["released"]));
map.put$javax_swing_Action(Clazz.new_($I$(6,1).c$$S$javax_swing_JMenu$Z,["selectMenu", null, true]));
map.put$javax_swing_Action(Clazz.new_($I$(6,1).c$$S,["doClick"]));
}, 1);

Clazz.newMeth(C$, 'c$$swingjs_plaf_JSButtonUI',  function (ui) {
;C$.$init$.apply(this);
this.ui=ui;
}, 1);

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var prop=e.getPropertyName$();
if (this.ui.isUIDisabled) return;
var b=e.getSource$();
if (prop == "contentAreaFilled") {
this.checkOpacity$javax_swing_AbstractButton(b);
return;
}if (prop == "mnemonic") {
this.updateMnemonicBinding$javax_swing_AbstractButton(b);
}if (this.ui.isMenuItem || this.ui.isMenu ) {
switch (prop) {
case "labelFor":
case "displayedMnemonic":
case "accelerator":
case "ancestor":
this.updateAcceleratorBinding$javax_swing_JComponent(b);
this.updateMnemonicBinding$javax_swing_AbstractButton(b);
break;
}
}this.ui.propertyChangedFromListener$java_beans_PropertyChangeEvent$S(e, prop);
});

Clazz.newMeth(C$, 'checkOpacity$javax_swing_AbstractButton',  function (b) {
if (!b.isContentAreaFilled$()) {
$I$(7).setStyles(this.ui.domNode, ["border", "none", "outline", "none"]);
}b.setOpaque$Z(b.isContentAreaFilled$());
});

Clazz.newMeth(C$, 'installKeyboardActions$javax_swing_JComponent',  function (c) {
$I$(8,"installLazyActionMap$javax_swing_JComponent$Class$S",[c, Clazz.getClass(C$), "Button.actionMap"]);
if (!this.ui.isMenu && !this.ui.isMenuItem ) {
var button=c;
this.updateMnemonicBinding$javax_swing_AbstractButton(button);
var km=this.getInputMap$I$javax_swing_JComponent(0, c);
$I$(9).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(c, 0, km);
return;
}if (this.ui.isMenu) C$.crossMenuMnemonic=$I$(10).getBoolean$O("Menu.crossMenuMnemonic");
this.createInputMap$javax_swing_JComponent(c);
this.updateAcceleratorBinding$javax_swing_JComponent(c);
});

Clazz.newMeth(C$, 'createInputMap$javax_swing_JComponent',  function (c) {
return Clazz.new_($I$(11,1).c$$javax_swing_JComponent,[c]);
});

Clazz.newMeth(C$, 'uninstallKeyboardActions$javax_swing_JComponent',  function (c) {
$I$(9).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(c, 2, null);
$I$(9).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(c, 0, null);
$I$(9).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(c, null);
});

Clazz.newMeth(C$, 'getInputMap$I$javax_swing_JComponent',  function (condition, c) {
if (condition == 0) {
return $I$(12,"get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S",[c, this.ui, this.ui.getPropertyPrefix$() + ".focusInputMap"]);
}return null;
});

Clazz.newMeth(C$, 'updateMnemonicBinding$javax_swing_AbstractButton',  function (b) {
var m=b.getMnemonic$();
this.ui.updateDOMNode$();
if (this.ui.isMenu && m != 0  && this.lastMnemonic != 0 ) {
this.ui.setMnemonic$I(m);
}if (m == this.lastMnemonic) return;
if (this.ui.isMenuItem || this.ui.isMenu ) {
var shortcutKeys=$I$(12).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.ui.menuItem, this.ui, "Menu.shortcutKeys");
if (shortcutKeys == null ) {
shortcutKeys=Clazz.array(Integer.TYPE, -1, [8]);
}var map=$I$(9).getUIInputMap$javax_swing_JComponent$I(this.ui.menuItem, 2);
if (this.lastMnemonic != 0 && map != null  ) {
for (var shortcutKey, $shortcutKey = 0, $$shortcutKey = shortcutKeys; $shortcutKey<$$shortcutKey.length&&((shortcutKey=($$shortcutKey[$shortcutKey])),1);$shortcutKey++) {
map.remove$javax_swing_KeyStroke($I$(13).getKeyStroke$I$I$Z(this.lastMnemonic, shortcutKey, false));
}
}if (m != 0) {
if (map == null ) {
map=this.createInputMap$javax_swing_JComponent(this.ui.menuItem);
$I$(9).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.ui.menuItem, 2, map);
}for (var i=shortcutKeys.length; --i >= 0; ) {
map.put$javax_swing_KeyStroke$O($I$(13).getKeyStroke$I$I$Z(m, shortcutKeys[i], false), this.ui.isMenu ? "selectMenu" : "doClick");
}
}}this.lastMnemonic=m;
if (this.ui.isMenuItem || this.ui.isMenu ) {
return;
}var map=$I$(9).getUIInputMap$javax_swing_JComponent$I(b, 2);
if (m != 0) {
if (map == null ) {
map=Clazz.new_($I$(11,1).c$$javax_swing_JComponent,[b]);
$I$(9).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(b, 2, map);
}map.clear$();
map.put$javax_swing_KeyStroke$O($I$(13).getKeyStroke$I$I$Z(m, 8, false), "pressed");
map.put$javax_swing_KeyStroke$O($I$(13).getKeyStroke$I$I$Z(m, 8, true), "released");
map.put$javax_swing_KeyStroke$O($I$(13).getKeyStroke$I$I$Z(m, 0, true), "released");
} else if (map != null ) {
map.clear$();
}});

Clazz.newMeth(C$, 'stateChanged$javax_swing_event_ChangeEvent',  function (e) {
var b=e.getSource$();
this.verifyButtonClick$javax_swing_AbstractButton$Z(b, false);
});

Clazz.newMeth(C$, 'focusGained$java_awt_event_FocusEvent',  function (e) {
});

Clazz.newMeth(C$, 'focusLost$java_awt_event_FocusEvent',  function (e) {
var b=e.getSource$();
var model=b.getModel$();
model.setArmed$Z(false);
model.setPressed$Z(false);
});

Clazz.newMeth(C$, 'mouseMoved$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mouseClicked$java_awt_event_MouseEvent',  function (e) {
});

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (e) {
if ($I$(9).isLeftMouseButton$java_awt_event_MouseEvent(e)) {
var b=e.getSource$();
var ui=b.秘getUI$();
if (ui.isMenu) {
var jm=b;
if (jm.isTopLevelMenu$()) {
var root=(b.getTopLevelAncestor$()).getRootPane$();
root.requestFocus$();
var mb=jm.getParent$();
var i=mb.getSelectionModel$().getSelectedIndex$();
if (i >= 0) mb.getMenu$I(i).setSelected$Z(false);
}jm.menuSelectionChanged$Z(true);
}}});

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (e) {
if ($I$(9).isLeftMouseButton$java_awt_event_MouseEvent(e)) {
var b=e.getSource$();
if (C$.checkHideMenus$javax_swing_AbstractButton(b)) return;
b.doClick$I(0);
this.verifyButtonClick$javax_swing_AbstractButton$Z(b, true);
}});

Clazz.newMeth(C$, 'checkHideMenus$javax_swing_AbstractButton',  function (b) {
var s=b.getUIClassID$();
if (s === "MenuUI" ) return true;
if (s.indexOf$S("MenuItemUI") >= 0) $I$(3).hideMenusAndToolTip$();
return false;
}, 1);

Clazz.newMeth(C$, 'mouseEntered$java_awt_event_MouseEvent',  function (e) {
var b=e.getSource$();
var model=b.getModel$();
if (b.isRolloverEnabled$() && !$I$(9).isLeftMouseButton$java_awt_event_MouseEvent(e) ) {
model.setRollover$Z(true);
}if (model.isPressed$()) model.setArmed$Z(true);
});

Clazz.newMeth(C$, 'mouseExited$java_awt_event_MouseEvent',  function (e) {
var b=e.getSource$();
var model=b.getModel$();
if (b.isRolloverEnabled$()) {
model.setRollover$Z(false);
}model.setArmed$Z(false);
});

Clazz.newMeth(C$, 'verifyButtonClick$javax_swing_AbstractButton$Z',  function (b, delayed) {
var btn=this.ui.actionNode;
if (btn == null  || this.ui.domNode == null  ) return true;
var state=b.getModel$().isSelected$();
{
if (delayed) { setTimeout(function(){ btn && btn.checked != state && (btn.checked = state); }, 0); } else { btn.checked = state; }
}
return true;
});

Clazz.newMeth(C$, 'updateAcceleratorBinding$javax_swing_JComponent',  function (jc) {
var a;
if (this.ui.isMenu && (this.ui.jc).isTopLevelMenu$() ) {
var i=(this.ui.jc).getMnemonic$();
if (i == 0) return;
a=$I$(13).getKeyStroke$I$I$Z(i, 8, false);
} else {
a=this.ui.menuItem.getAccelerator$();
}var map=$I$(9).getUIInputMap$javax_swing_JComponent$I(jc, 2);
if (map != null ) {
map.clear$();
}if (a != null ) {
if (map == null ) {
map=this.createInputMap$javax_swing_JComponent(jc);
$I$(9).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(jc, 2, map);
}map.put$javax_swing_KeyStroke$O(a, "doClick");
}});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ButtonListener, "Actions", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.swing.UIAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.force=false;
},1);

C$.$fields$=[['Z',['force'],'O',['menu','javax.swing.JMenu']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var b=e.getSource$();
if (b.秘getUI$().isModalBlocked$()) return;
var model=b.getModel$();
switch (this.getName$()) {
case "pressed":
model.setArmed$Z(true);
model.setPressed$Z(true);
if (!b.hasFocus$()) {
b.requestFocus$();
}break;
case "released":
model.setPressed$Z(false);
model.setArmed$Z(false);
break;
case "doClick":
var mi=e.getSource$();
$I$(1).defaultManager$().clearSelectedPath$();
if (!$I$(2).checkHideMenus$javax_swing_AbstractButton(mi)) {
mi.doClick$();
break;
}case "selectMenu":
var menu=p$1.getMenu$java_awt_event_ActionEvent.apply(this, [e]);
if (menu.isTopLevelMenu$()) {
$I$(3).hideMenusAndToolTip$();
var p=menu.getPopupMenu$();
menu.setPopupMenuVisible$Z(!p.isVisible$());
return;
}if (!$I$(2).crossMenuMnemonic) {
var pm=$I$(4).getLastPopup$();
if (pm != null  && pm !== menu.getParent$()  ) {
return;
}}var defaultManager=$I$(1).defaultManager$();
if (this.force) {
var cnt=menu.getParent$();
if (cnt != null  && Clazz.instanceOf(cnt, "javax.swing.JMenuBar") ) {
var me;
var subElements;
subElements=menu.getPopupMenu$().getSubElements$();
if (subElements.length > 0) {
me=Clazz.array($I$(5), [4]);
me[0]=cnt;
me[1]=menu;
me[2]=menu.getPopupMenu$();
me[3]=subElements[0];
} else {
me=Clazz.array($I$(5), [3]);
me[0]=cnt;
me[1]=menu;
me[2]=menu.getPopupMenu$();
}defaultManager.setSelectedPath$javax_swing_MenuElementA(me);
}} else {
var path=defaultManager.getSelectedPath$();
if (path.length > 0 && path[path.length - 1] === menu  ) {
C$.appendPath$javax_swing_MenuElementA$javax_swing_MenuElement(path, menu.getPopupMenu$());
}}break;
}
});

Clazz.newMeth(C$, 'isEnabled$O',  function (sender) {
if (Clazz.instanceOf(sender, "javax.swing.JMenu")) {
return (sender).isEnabled$();
}if (Clazz.instanceOf(sender, "javax.swing.JMenuItem")) {
return (sender).isEnabled$();
}if (Clazz.instanceOf(sender, "javax.swing.AbstractButton") && !(sender).getModel$().isEnabled$() ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'c$$S$javax_swing_JMenu$Z',  function (key, menu, shouldForce) {
;C$.superclazz.c$$S.apply(this,[key]);C$.$init$.apply(this);
this.menu=menu;
this.force=shouldForce;
}, 1);

Clazz.newMeth(C$, 'getMenu$java_awt_event_ActionEvent',  function (e) {
if (Clazz.instanceOf(e.getSource$(), "javax.swing.JMenu")) {
return e.getSource$();
}return this.menu;
}, p$1);

Clazz.newMeth(C$, 'appendPath$javax_swing_MenuElementA$javax_swing_MenuElement',  function (path, elem) {
var newPath=Clazz.array($I$(5), [path.length + 1]);
System.arraycopy$O$I$O$I$I(path, 0, newPath, 0, path.length);
newPath[path.length]=elem;
$I$(1).defaultManager$().setSelectedPath$javax_swing_MenuElementA(newPath);
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:05 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
