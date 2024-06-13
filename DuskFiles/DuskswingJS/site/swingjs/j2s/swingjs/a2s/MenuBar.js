(function(){var P$=Clazz.newPackage("swingjs.a2s"),I$=[[0,'java.awt.Insets','java.awt.Color','java.util.Vector']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MenuBar", null, 'javax.swing.JMenuBar', 'java.awt.MenuContainer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.helpMenu=null;
},1);

C$.$fields$=[['O',['helpMenu','java.awt.Menu']]
,['O',['awtInsets','java.awt.Insets']]]

Clazz.newMeth(C$, 'isAWT$',  function () {
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
C$.superclazz.prototype.setBackground$java_awt_Color.apply(this, [Clazz.new_($I$(2,1).c$$I,[15658734])]);
}, 1);

Clazz.newMeth(C$, 'getInsets$',  function () {
return C$.awtInsets;
});

Clazz.newMeth(C$, 'add$java_awt_Menu',  function (m) {
C$.superclazz.prototype.add$java_awt_Component.apply(this, [m]);
});

Clazz.newMeth(C$, 'add$java_awt_MenuItem',  function (m) {
C$.superclazz.prototype.add$java_awt_Component.apply(this, [m]);
});

Clazz.newMeth(C$, 'deleteShortcut$java_awt_MenuShortcut',  function (s) {
var nmenus=C$.superclazz.prototype.getMenuCount$.apply(this, []);
for (var i=0; i < nmenus; i++) {
(C$.superclazz.prototype.getMenu$I.apply(this, [i])).deleteShortcut$java_awt_MenuShortcut(s);
}
});

Clazz.newMeth(C$, 'shortcuts$',  function () {
var shortcuts=Clazz.new_($I$(3,1));
var nmenus=C$.superclazz.prototype.getMenuCount$.apply(this, []);
for (var i=0; i < nmenus; i++) {
var e=(C$.superclazz.prototype.getMenu$I.apply(this, [i])).shortcuts$();
while (e.hasMoreElements$()){
shortcuts.addElement$O(e.nextElement$());
}
}
return shortcuts.elements$();
});

Clazz.newMeth(C$, 'getHelpMenu$',  function () {
return this.helpMenu;
});

Clazz.newMeth(C$, 'setHelpMenu$java_awt_Menu',  function (m) {
if (this.helpMenu === m ) {
return;
}if (this.helpMenu != null ) {
this.remove$java_awt_MenuComponent(this.helpMenu);
}if (m.getParent$() !== this ) {
this.add$java_awt_Menu(m);
}this.helpMenu=m;
if (m != null ) {
m.isHelpMenu=true;
m.parent=this;
}});

Clazz.newMeth(C$, 'remove$java_awt_MenuComponent',  function (m) {
C$.superclazz.prototype.remove$java_awt_Component.apply(this, [m]);
});

Clazz.newMeth(C$, 'countMenus$',  function () {
return C$.superclazz.prototype.getMenuCount$.apply(this, []);
});

C$.$static$=function(){C$.$static$=0;
C$.awtInsets=Clazz.new_($I$(1,1).c$$I$I$I$I,[6, 10, 6, 10]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
