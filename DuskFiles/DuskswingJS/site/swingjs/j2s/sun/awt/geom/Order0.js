(function(){var P$=Clazz.newPackage("sun.awt.geom");
/*c*/var C$=Clazz.newClass(P$, "Order0", null, 'sun.awt.geom.Curve');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['x','y']]]

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
;C$.superclazz.c$$I.apply(this,[1]);C$.$init$.apply(this);
this.x=x;
this.y=y;
}, 1);

Clazz.newMeth(C$, 'getOrder$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getXTop$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getYTop$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'getXBot$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getYBot$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getX0$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getY0$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'getX1$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getY1$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'XforY$D',  function (y) {
return y;
});

Clazz.newMeth(C$, 'TforY$D',  function (y) {
return 0;
});

Clazz.newMeth(C$, 'XforT$D',  function (t) {
return this.x;
});

Clazz.newMeth(C$, 'YforT$D',  function (t) {
return this.y;
});

Clazz.newMeth(C$, 'dXforT$D$I',  function (t, deriv) {
return 0;
});

Clazz.newMeth(C$, 'dYforT$D$I',  function (t, deriv) {
return 0;
});

Clazz.newMeth(C$, 'nextVertical$D$D',  function (t0, t1) {
return t1;
});

Clazz.newMeth(C$, 'crossingsFor$D$D',  function (x, y) {
return 0;
});

Clazz.newMeth(C$, 'accumulateCrossings$sun_awt_geom_Crossings',  function (c) {
return (this.x > c.getXLo$()  && this.x < c.getXHi$()   && this.y > c.getYLo$()   && this.y < c.getYHi$()  );
});

Clazz.newMeth(C$, 'enlarge$java_awt_geom_Rectangle2D',  function (r) {
r.add$D$D(this.x, this.y);
});

Clazz.newMeth(C$, 'getSubCurve$D$D$I',  function (ystart, yend, dir) {
return this;
});

Clazz.newMeth(C$, 'getReversedCurve$',  function () {
return this;
});

Clazz.newMeth(C$, 'getSegment$DA',  function (coords) {
coords[0]=this.x;
coords[1]=this.y;
return 0;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
