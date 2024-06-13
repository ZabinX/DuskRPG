(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'java.awt.MenuShortcut','javax.swing.KeyStroke']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Menu", null, 'javax.swing.JMenu', ['swingjs.a2s.AWTMenu', 'java.awt.MenuContainer']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (title) {
C$.c$$S$Z.apply(this, [title, false]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S$Z.apply(this, ["", false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z',  function (title, isTearOff) {
;C$.superclazz.c$$S.apply(this,[title]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'countItems$',  function () {
return C$.superclazz.prototype.getComponentCount$.apply(this, []);
});

Clazz.newMeth(C$, 'getItem$I',  function (index) {
return C$.superclazz.prototype.getComponent$I.apply(this, [index]);
});

Clazz.newMeth(C$, 'add$java_awt_MenuItem',  function (mi) {
return C$.superclazz.prototype.add$java_awt_Component.apply(this, [mi]);
});

Clazz.newMeth(C$, 'insert$java_awt_MenuItem$I',  function (menuitem, index) {
C$.superclazz.prototype.insert$javax_swing_JMenuItem$I.apply(this, [menuitem, index]);
});

Clazz.newMeth(C$, 'remove$java_awt_MenuComponent',  function (comp) {
C$.superclazz.prototype.remove$java_awt_Component.apply(this, [comp]);
});

Clazz.newMeth(C$, 'getShortcut$',  function () {
var a=this.getAccelerator$();
return (a == null  ? null : Clazz.new_([a.getKeyCode$(), (a.getModifiers$() & 1) != 0],$I$(1,1).c$$I$Z));
});

Clazz.newMeth(C$, 'setShortcut$java_awt_MenuShortcut',  function (s) {
C$.superclazz.prototype.setAccelerator$javax_swing_KeyStroke.apply(this, [$I$(2,"getKeyStroke$I$I",[s.getKey$(), 2 | (s.usesShiftModifier$() ? 1 : 0)])]);
});

Clazz.newMeth(C$, 'deleteShortcut$',  function () {
C$.superclazz.prototype.setAccelerator$javax_swing_KeyStroke.apply(this, [null]);
});

Clazz.newMeth(C$, 'shortcuts$',  function () {
return null;
});

Clazz.newMeth(C$, 'deleteShortcut$java_awt_MenuShortcut',  function (s) {
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
