(function(){var P$=Clazz.newPackage("swingjs.a2s");
/*c*/var C$=Clazz.newClass(P$, "Canvas", null, 'swingjs.a2s.Panel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_awt_GraphicsConfiguration',  function (config) {
C$.c$.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.秘setPaintsSelf$I(2);
this.秘paintClass=this.秘updateClass=C$ ||null;
}, 1);

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
return this.preferredSize$();
});

Clazz.newMeth(C$, 'preferredSize$',  function () {
return C$.superclazz.prototype.prefSizeComp$.apply(this, []);
});

Clazz.newMeth(C$, 'setBackground$java_awt_Color',  function (c) {
C$.superclazz.prototype.setBackground$java_awt_Color.apply(this, [c]);
C$.superclazz.prototype.setOpaque$Z.apply(this, [c != null ]);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
g.clearRect$I$I$I$I(0, 0, this.width, this.height);
});

Clazz.newMeth(C$, 'update$java_awt_Graphics',  function (g) {
g.clearRect$I$I$I$I(0, 0, this.width, this.height);
this.paint$java_awt_Graphics(g);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:01 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
