(function(){var P$=Clazz.newPackage("sun.awt.geom"),I$=[[0,'InternalError','sun.awt.geom.Curve']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Order1", null, 'sun.awt.geom.Curve');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['x0','y0','x1','y1','xmin','xmax']]]

Clazz.newMeth(C$, 'c$$D$D$D$D$I',  function (x0, y0, x1, y1, direction) {
;C$.superclazz.c$$I.apply(this,[direction]);C$.$init$.apply(this);
this.x0=x0;
this.y0=y0;
this.x1=x1;
this.y1=y1;
if (x0 < x1 ) {
this.xmin=x0;
this.xmax=x1;
} else {
this.xmin=x1;
this.xmax=x0;
}}, 1);

Clazz.newMeth(C$, 'getOrder$',  function () {
return 1;
});

Clazz.newMeth(C$, 'getXTop$',  function () {
return this.x0;
});

Clazz.newMeth(C$, 'getYTop$',  function () {
return this.y0;
});

Clazz.newMeth(C$, 'getXBot$',  function () {
return this.x1;
});

Clazz.newMeth(C$, 'getYBot$',  function () {
return this.y1;
});

Clazz.newMeth(C$, 'getXMin$',  function () {
return this.xmin;
});

Clazz.newMeth(C$, 'getXMax$',  function () {
return this.xmax;
});

Clazz.newMeth(C$, 'getX0$',  function () {
return (this.direction == 1) ? this.x0 : this.x1;
});

Clazz.newMeth(C$, 'getY0$',  function () {
return (this.direction == 1) ? this.y0 : this.y1;
});

Clazz.newMeth(C$, 'getX1$',  function () {
return (this.direction == -1) ? this.x0 : this.x1;
});

Clazz.newMeth(C$, 'getY1$',  function () {
return (this.direction == -1) ? this.y0 : this.y1;
});

Clazz.newMeth(C$, 'XforY$D',  function (y) {
if (this.x0 == this.x1  || y <= this.y0  ) {
return this.x0;
}if (y >= this.y1 ) {
return this.x1;
}return (this.x0 + (y - this.y0) * (this.x1 - this.x0) / (this.y1 - this.y0));
});

Clazz.newMeth(C$, 'TforY$D',  function (y) {
if (y <= this.y0 ) {
return 0;
}if (y >= this.y1 ) {
return 1;
}return (y - this.y0) / (this.y1 - this.y0);
});

Clazz.newMeth(C$, 'XforT$D',  function (t) {
return this.x0 + t * (this.x1 - this.x0);
});

Clazz.newMeth(C$, 'YforT$D',  function (t) {
return this.y0 + t * (this.y1 - this.y0);
});

Clazz.newMeth(C$, 'dXforT$D$I',  function (t, deriv) {
switch (deriv) {
case 0:
return this.x0 + t * (this.x1 - this.x0);
case 1:
return (this.x1 - this.x0);
default:
return 0;
}
});

Clazz.newMeth(C$, 'dYforT$D$I',  function (t, deriv) {
switch (deriv) {
case 0:
return this.y0 + t * (this.y1 - this.y0);
case 1:
return (this.y1 - this.y0);
default:
return 0;
}
});

Clazz.newMeth(C$, 'nextVertical$D$D',  function (t0, t1) {
return t1;
});

Clazz.newMeth(C$, 'accumulateCrossings$sun_awt_geom_Crossings',  function (c) {
var xlo=c.getXLo$();
var ylo=c.getYLo$();
var xhi=c.getXHi$();
var yhi=c.getYHi$();
if (this.xmin >= xhi ) {
return false;
}var xstart;
var ystart;
var xend;
var yend;
if (this.y0 < ylo ) {
if (this.y1 <= ylo ) {
return false;
}ystart=ylo;
xstart=this.XforY$D(ylo);
} else {
if (this.y0 >= yhi ) {
return false;
}ystart=this.y0;
xstart=this.x0;
}if (this.y1 > yhi ) {
yend=yhi;
xend=this.XforY$D(yhi);
} else {
yend=this.y1;
xend=this.x1;
}if (xstart >= xhi  && xend >= xhi  ) {
return false;
}if (xstart > xlo  || xend > xlo  ) {
return true;
}c.record$D$D$I(ystart, yend, this.direction);
return false;
});

Clazz.newMeth(C$, 'enlarge$java_awt_geom_Rectangle2D',  function (r) {
r.add$D$D(this.x0, this.y0);
r.add$D$D(this.x1, this.y1);
});

Clazz.newMeth(C$, 'getSubCurve$D$D$I',  function (ystart, yend, dir) {
if (ystart == this.y0  && yend == this.y1  ) {
return this.getWithDirection$I(dir);
}if (this.x0 == this.x1 ) {
return Clazz.new_(C$.c$$D$D$D$D$I,[this.x0, ystart, this.x1, yend, dir]);
}var num=this.x0 - this.x1;
var denom=this.y0 - this.y1;
var xstart=(this.x0 + (ystart - this.y0) * num / denom);
var xend=(this.x0 + (yend - this.y0) * num / denom);
return Clazz.new_(C$.c$$D$D$D$D$I,[xstart, ystart, xend, yend, dir]);
});

Clazz.newMeth(C$, 'getReversedCurve$',  function () {
return Clazz.new_(C$.c$$D$D$D$D$I,[this.x0, this.y0, this.x1, this.y1, -this.direction]);
});

Clazz.newMeth(C$, 'compareTo$sun_awt_geom_Curve$DA',  function (other, yrange) {
if (!(Clazz.instanceOf(other, "sun.awt.geom.Order1"))) {
return C$.superclazz.prototype.compareTo$sun_awt_geom_Curve$DA.apply(this, [other, yrange]);
}var c1=other;
if (yrange[1] <= yrange[0] ) {
throw Clazz.new_($I$(1,1).c$$S,["yrange already screwed up..."]);
}yrange[1]=Math.min(Math.min(yrange[1], this.y1), c1.y1);
if (yrange[1] <= yrange[0] ) {
throw Clazz.new_(["backstepping from " + new Double(yrange[0]).toString() + " to " + new Double(yrange[1]).toString() ],$I$(1,1).c$$S);
}if (this.xmax <= c1.xmin ) {
return (this.xmin == c1.xmax ) ? 0 : -1;
}if (this.xmin >= c1.xmax ) {
return 1;
}var dxa=this.x1 - this.x0;
var dya=this.y1 - this.y0;
var dxb=c1.x1 - c1.x0;
var dyb=c1.y1 - c1.y0;
var denom=dxb * dya - dxa * dyb;
var y;
if (denom != 0 ) {
var num=((this.x0 - c1.x0) * dya * dyb  - this.y0 * dxa * dyb  + c1.y0 * dxb * dya );
y=num / denom;
if (y <= yrange[0] ) {
y=Math.min(this.y1, c1.y1);
} else {
if (y < yrange[1] ) {
yrange[1]=y;
}y=Math.max(this.y0, c1.y0);
}} else {
y=Math.max(this.y0, c1.y0);
}return $I$(2,"orderof$D$D",[this.XforY$D(y), c1.XforY$D(y)]);
});

Clazz.newMeth(C$, 'getSegment$DA',  function (coords) {
if (this.direction == 1) {
coords[0]=this.x1;
coords[1]=this.y1;
} else {
coords[0]=this.x0;
coords[1]=this.y0;
}return 1;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
