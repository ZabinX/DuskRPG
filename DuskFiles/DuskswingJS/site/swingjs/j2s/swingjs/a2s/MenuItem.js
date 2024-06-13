(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'java.awt.MenuShortcut','javax.swing.KeyStroke']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MenuItem", null, 'javax.swing.JMenuItem', 'swingjs.a2s.AWTMenuItem');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isAWT$',  function () {
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (string) {
;C$.superclazz.c$$S.apply(this,[string]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_awt_MenuShortcut',  function (label, s) {
;C$.superclazz.c$$S.apply(this,[label]);C$.$init$.apply(this);
this.setShortcut$java_awt_MenuShortcut(s);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_MenuComponent',  function (comp) {
C$.superclazz.prototype.remove$java_awt_Component.apply(this, [comp]);
});

Clazz.newMeth(C$, 'getShortcut$',  function () {
var a=C$.superclazz.prototype.getAccelerator$.apply(this, []);
return (a == null  ? null : Clazz.new_([a.getKeyCode$(), (a.getModifiers$() & 1) != 0],$I$(1,1).c$$I$Z));
});

Clazz.newMeth(C$, 'setShortcut$java_awt_MenuShortcut',  function (s) {
C$.superclazz.prototype.setAccelerator$javax_swing_KeyStroke.apply(this, [$I$(2,"getKeyStroke$I$I",[s.getKey$(), 2 | (s.usesShiftModifier$() ? 1 : 0)])]);
});

Clazz.newMeth(C$, 'deleteShortcut$',  function () {
C$.superclazz.prototype.setAccelerator$javax_swing_KeyStroke.apply(this, [null]);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
