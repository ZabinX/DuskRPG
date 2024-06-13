(function(){var P$=Clazz.newPackage("java.awt"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Point", null, 'java.awt.geom.Point2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['x','y']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I$I.apply(this, [0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Point',  function (p) {
C$.c$$I$I.apply(this, [p.x, p.y]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I',  function (x, y) {
Clazz.super_(C$, this);
this.x=x;
this.y=y;
}, 1);

Clazz.newMeth(C$, 'getX$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getY$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'getLocation$',  function () {
return Clazz.new_(C$.c$$I$I,[this.x, this.y]);
});

Clazz.newMeth(C$, 'setLocation$java_awt_Point',  function (p) {
this.setLocation$I$I(p.x, p.y);
});

Clazz.newMeth(C$, 'setLocation$I$I',  function (x, y) {
this.move$I$I(x, y);
});

Clazz.newMeth(C$, 'setLocation$D$D',  function (x, y) {
this.x=(Math.floor(x + 0.5)|0);
this.y=(Math.floor(y + 0.5)|0);
});

Clazz.newMeth(C$, 'move$I$I',  function (x, y) {
this.x=x;
this.y=y;
});

Clazz.newMeth(C$, 'translate$I$I',  function (dx, dy) {
this.x+=dx;
this.y+=dy;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (Clazz.instanceOf(obj, "java.awt.Point")) {
var pt=obj;
return (this.x == pt.x) && (this.y == pt.y) ;
}return C$.superclazz.prototype.equals$O.apply(this, [obj]);
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[x=" + this.x + ",y=" + this.y + "]" ;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:06 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
