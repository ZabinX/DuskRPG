(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'java.awt.Font','javax.swing.JLabel',['javax.swing.JPopupMenu','.Separator']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PopupMenu", null, 'javax.swing.JPopupMenu', 'swingjs.a2s.AWTPopupMenu');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isAWT$',  function () {
});

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (string) {
;C$.superclazz.c$$S.apply(this,[string]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getFont$',  function () {
if (this.font == null  && this.parent == null  ) this.font=Clazz.new_($I$(1,1).c$$S$I$I,["Dialog", 0, 12]);
return C$.superclazz.prototype.getFont$.apply(this, []);
});

Clazz.newMeth(C$, 'countItems$',  function () {
return C$.superclazz.prototype.getComponentCount$.apply(this, []);
});

Clazz.newMeth(C$, 'add$java_awt_MenuItem',  function (mi) {
return C$.superclazz.prototype.add$java_awt_Component.apply(this, [mi]);
});

Clazz.newMeth(C$, 'getItemCount$',  function () {
return C$.superclazz.prototype.getComponentCount$.apply(this, []);
});

Clazz.newMeth(C$, 'getItem$I',  function (index) {
return C$.superclazz.prototype.getComponent$I.apply(this, [index]);
});

Clazz.newMeth(C$, 'insert$java_awt_MenuItem$I',  function (menuitem, index) {
C$.superclazz.prototype.insert$java_awt_Component$I.apply(this, [menuitem, index]);
});

Clazz.newMeth(C$, 'insert$S$I',  function (label, index) {
C$.superclazz.prototype.insert$java_awt_Component$I.apply(this, [Clazz.new_($I$(2,1).c$$S,[label]), index]);
});

Clazz.newMeth(C$, 'insertSeparator$I',  function (index) {
var sep=Clazz.new_($I$(3,1));
sep.秘j2sInvalidateOnAdd=false;
this.insert$java_awt_Component$I(sep, index);
});

Clazz.newMeth(C$, 'remove$java_awt_MenuComponent',  function (comp) {
C$.superclazz.prototype.remove$java_awt_Component.apply(this, [comp]);
});

Clazz.newMeth(C$, 'isTearOff$',  function () {
return false;
});

Clazz.newMeth(C$, 'getShortcut$',  function () {
return null;
});

Clazz.newMeth(C$, 'setShortcut$java_awt_MenuShortcut',  function (s) {
});

Clazz.newMeth(C$, 'deleteShortcut$',  function () {
});

Clazz.newMeth(C$, 'setActionCommand$S',  function (command) {
});

Clazz.newMeth(C$, 'getActionCommand$',  function () {
return null;
});

Clazz.newMeth(C$, 'addActionListener$java_awt_event_ActionListener',  function (l) {
});

Clazz.newMeth(C$, 'removeActionListener$java_awt_event_ActionListener',  function (l) {
});

Clazz.newMeth(C$, 'getActionListeners$',  function () {
return null;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
