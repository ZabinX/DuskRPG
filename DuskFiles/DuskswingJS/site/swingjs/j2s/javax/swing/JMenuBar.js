(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'javax.swing.border.EmptyBorder','javax.swing.DefaultSingleSelectionModel','Error','java.awt.JSComponent','java.awt.Insets','java.util.Vector','javax.swing.MenuElement','javax.swing.KeyboardManager']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JMenuBar", null, 'javax.swing.JComponent', 'javax.swing.MenuElement');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.paintBorder=false;
this.margin=null;
},1);

C$.$fields$=[['Z',['paintBorder'],'O',['selectionModel','javax.swing.SingleSelectionModel','margin','java.awt.Insets']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.setBorder$javax_swing_border_Border(Clazz.new_($I$(1,1).c$$I$I$I$I,[4, 4, 2, 4]));
this.setSelectionModel$javax_swing_SingleSelectionModel(Clazz.new_($I$(2,1)));
this.updateUI$();
}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "MenuBarUI";
});

Clazz.newMeth(C$, 'getSelectionModel$',  function () {
return this.selectionModel;
});

Clazz.newMeth(C$, 'setSelectionModel$javax_swing_SingleSelectionModel',  function (model) {
var oldValue=this.selectionModel;
this.selectionModel=model;
this.firePropertyChange$S$O$O("selectionModel", oldValue, this.selectionModel);
});

Clazz.newMeth(C$, 'add$javax_swing_JMenu',  function (c) {
C$.superclazz.prototype.add$java_awt_Component.apply(this, [c]);
return c;
});

Clazz.newMeth(C$, 'getMenu$I',  function (index) {
var c=this.getComponentAtIndex$I(index);
if (Clazz.instanceOf(c, "javax.swing.JMenu")) return c;
return null;
});

Clazz.newMeth(C$, 'getMenuCount$',  function () {
return this.getComponentCount$();
});

Clazz.newMeth(C$, 'setHelpMenu$javax_swing_JMenu',  function (menu) {
throw Clazz.new_(["setHelpMenu() not yet implemented."],$I$(3,1).c$$S);
});

Clazz.newMeth(C$, 'getHelpMenu$',  function () {
throw Clazz.new_(["getHelpMenu() not yet implemented."],$I$(3,1).c$$S);
});

Clazz.newMeth(C$, 'getComponentAtIndex$I',  function (i) {
if (i < 0 || i >= this.getComponentCount$() ) {
return null;
}return this.getComponent$I(i);
});

Clazz.newMeth(C$, 'getComponentIndex$java_awt_Component',  function (c) {
var ncomponents=this.getComponentCount$();
var components=$I$(4).秘getChildArray$java_awt_Container(this);
for (var i=0; i < ncomponents; i++) {
var comp=components[i];
if (comp === c ) return i;
}
return -1;
});

Clazz.newMeth(C$, 'setSelected$java_awt_Component',  function (sel) {
var model=this.getSelectionModel$();
var index=this.getComponentIndex$java_awt_Component(sel);
model.setSelectedIndex$I(index);
});

Clazz.newMeth(C$, 'isSelected$',  function () {
return this.selectionModel.isSelected$();
});

Clazz.newMeth(C$, 'isBorderPainted$',  function () {
return this.paintBorder;
});

Clazz.newMeth(C$, 'setBorderPainted$Z',  function (b) {
{

}
});

Clazz.newMeth(C$, 'paintBorder$java_awt_Graphics',  function (g) {
if (this.isBorderPainted$()) {
C$.superclazz.prototype.paintBorder$java_awt_Graphics.apply(this, [g]);
}});

Clazz.newMeth(C$, 'setMargin$java_awt_Insets',  function (m) {
var old=this.margin;
this.margin=m;
this.firePropertyChange$S$O$O("margin", old, m);
if (old == null  || !old.equals$O(m) ) {
this.revalidate$();
this.秘repaint$();
}});

Clazz.newMeth(C$, 'getMargin$',  function () {
if (this.margin == null ) {
return Clazz.new_($I$(5,1).c$$I$I$I$I,[0, 0, 0, 0]);
} else {
return this.margin;
}});

Clazz.newMeth(C$, 'processMouseEvent$java_awt_event_MouseEvent$javax_swing_MenuElementA$javax_swing_MenuSelectionManager',  function (event, path, manager) {
});

Clazz.newMeth(C$, 'processKeyEvent$java_awt_event_KeyEvent$javax_swing_MenuElementA$javax_swing_MenuSelectionManager',  function (e, path, manager) {
});

Clazz.newMeth(C$, 'menuSelectionChanged$Z',  function (isIncluded) {
});

Clazz.newMeth(C$, 'getSubElements$',  function () {
var result;
var tmp=Clazz.new_($I$(6,1));
var c=this.getComponentCount$();
var i;
var m;
for (i=0; i < c; i++) {
m=this.getComponent$I(i);
if (Clazz.instanceOf(m, "javax.swing.MenuElement")) tmp.addElement$O(m);
}
result=Clazz.array($I$(7), [tmp.size$()]);
for (i=0, c=tmp.size$(); i < c; i++) result[i]=tmp.elementAt$I(i);

return result;
});

Clazz.newMeth(C$, 'getComponent$',  function () {
return this;
});

Clazz.newMeth(C$, 'paramString$',  function () {
var paintBorderString=(this.paintBorder ? "true" : "false");
var marginString=(this.margin != null  ? this.margin.toString() : "");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",margin=" + marginString + ",paintBorder=" + paintBorderString ;
});

Clazz.newMeth(C$, 'processKeyBinding$javax_swing_KeyStroke$java_awt_event_KeyEvent$I$Z',  function (ks, e, condition, pressed) {
var retValue=C$.superclazz.prototype.processKeyBinding$javax_swing_KeyStroke$java_awt_event_KeyEvent$I$Z.apply(this, [ks, e, condition, pressed]);
if (!retValue) {
var subElements=this.getSubElements$();
for (var i=0; i < subElements.length; i++) {
if (C$.processBindingForKeyStrokeRecursive$javax_swing_MenuElement$javax_swing_KeyStroke$java_awt_event_KeyEvent$I$Z(subElements[i], ks, e, condition, pressed)) {
return true;
}}
}return retValue;
});

Clazz.newMeth(C$, 'processBindingForKeyStrokeRecursive$javax_swing_MenuElement$javax_swing_KeyStroke$java_awt_event_KeyEvent$I$Z',  function (elem, ks, e, condition, pressed) {
if (elem == null ) {
return false;
}var c=elem.getComponent$();
if (!(c.isVisible$() || (Clazz.instanceOf(c, "javax.swing.JPopupMenu")) ) || !c.isEnabled$() ) {
return false;
}if (c != null  && Clazz.instanceOf(c, "javax.swing.JComponent")  && (c).processKeyBinding$javax_swing_KeyStroke$java_awt_event_KeyEvent$I$Z(ks, e, condition, pressed) ) {
return true;
}var subElements=elem.getSubElements$();
for (var i=0; i < subElements.length; i++) {
if (C$.processBindingForKeyStrokeRecursive$javax_swing_MenuElement$javax_swing_KeyStroke$java_awt_event_KeyEvent$I$Z(subElements[i], ks, e, condition, pressed)) {
return true;
}}
return false;
}, 1);

Clazz.newMeth(C$, 'addNotify$',  function () {
C$.superclazz.prototype.addNotify$.apply(this, []);
$I$(8).getCurrentManager$().registerMenuBar$javax_swing_JMenuBar(this);
});

Clazz.newMeth(C$, 'removeNotify$',  function () {
C$.superclazz.prototype.removeNotify$.apply(this, []);
$I$(8).getCurrentManager$().unregisterMenuBar$javax_swing_JMenuBar(this);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
