(function(){var P$=Clazz.newPackage("sun.awt.geom"),I$=[[0,'sun.awt.geom.Curve']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Order2", null, 'sun.awt.geom.Curve');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['x0','y0','cx0','cy0','x1','y1','xmin','xmax','xcoeff0','xcoeff1','xcoeff2','ycoeff0','ycoeff1','ycoeff2']]]

Clazz.newMeth(C$, 'insert$java_util_Vector$DA$D$D$D$D$D$D$I',  function (curves, tmp, x0, y0, cx0, cy0, x1, y1, direction) {
var numparams=C$.getHorizontalParams$D$D$D$DA(y0, cy0, y1, tmp);
if (numparams == 0) {
C$.addInstance$java_util_Vector$D$D$D$D$D$D$I(curves, x0, y0, cx0, cy0, x1, y1, direction);
return;
}var t=tmp[0];
tmp[0]=x0;
tmp[1]=y0;
tmp[2]=cx0;
tmp[3]=cy0;
tmp[4]=x1;
tmp[5]=y1;
C$.split$DA$I$D(tmp, 0, t);
var i0=(direction == 1) ? 0 : 4;
var i1=4 - i0;
C$.addInstance$java_util_Vector$D$D$D$D$D$D$I(curves, tmp[i0], tmp[i0 + 1], tmp[i0 + 2], tmp[i0 + 3], tmp[i0 + 4], tmp[i0 + 5], direction);
C$.addInstance$java_util_Vector$D$D$D$D$D$D$I(curves, tmp[i1], tmp[i1 + 1], tmp[i1 + 2], tmp[i1 + 3], tmp[i1 + 4], tmp[i1 + 5], direction);
}, 1);

Clazz.newMeth(C$, 'addInstance$java_util_Vector$D$D$D$D$D$D$I',  function (curves, x0, y0, cx0, cy0, x1, y1, direction) {
if (y0 > y1 ) {
curves.add$O(Clazz.new_(C$.c$$D$D$D$D$D$D$I,[x1, y1, cx0, cy0, x0, y0, -direction]));
} else if (y1 > y0 ) {
curves.add$O(Clazz.new_(C$.c$$D$D$D$D$D$D$I,[x0, y0, cx0, cy0, x1, y1, direction]));
}}, 1);

Clazz.newMeth(C$, 'getHorizontalParams$D$D$D$DA',  function (c0, cp, c1, ret) {
if (c0 <= cp  && cp <= c1  ) {
return 0;
}c0-=cp;
c1-=cp;
var denom=c0 + c1;
if (denom == 0 ) {
return 0;
}var t=c0 / denom;
if (t <= 0  || t >= 1  ) {
return 0;
}ret[0]=t;
return 1;
}, 1);

Clazz.newMeth(C$, 'split$DA$I$D',  function (coords, pos, t) {
var x0;
var y0;
var cx;
var cy;
var x1;
var y1;
coords[pos + 8]=x1=coords[pos + 4];
coords[pos + 9]=y1=coords[pos + 5];
cx=coords[pos + 2];
cy=coords[pos + 3];
x1=cx + (x1 - cx) * t;
y1=cy + (y1 - cy) * t;
x0=coords[pos + 0];
y0=coords[pos + 1];
x0=x0 + (cx - x0) * t;
y0=y0 + (cy - y0) * t;
cx=x0 + (x1 - x0) * t;
cy=y0 + (y1 - y0) * t;
coords[pos + 2]=x0;
coords[pos + 3]=y0;
coords[pos + 4]=cx;
coords[pos + 5]=cy;
coords[pos + 6]=x1;
coords[pos + 7]=y1;
}, 1);

Clazz.newMeth(C$, 'c$$D$D$D$D$D$D$I',  function (x0, y0, cx0, cy0, x1, y1, direction) {
;C$.superclazz.c$$I.apply(this,[direction]);C$.$init$.apply(this);
if (cy0 < y0 ) {
cy0=y0;
} else if (cy0 > y1 ) {
cy0=y1;
}this.x0=x0;
this.y0=y0;
this.cx0=cx0;
this.cy0=cy0;
this.x1=x1;
this.y1=y1;
this.xmin=Math.min(Math.min(x0, x1), cx0);
this.xmax=Math.max(Math.max(x0, x1), cx0);
this.xcoeff0=x0;
this.xcoeff1=cx0 + cx0 - x0 - x0;
this.xcoeff2=x0 - cx0 - cx0  + x1;
this.ycoeff0=y0;
this.ycoeff1=cy0 + cy0 - y0 - y0;
this.ycoeff2=y0 - cy0 - cy0  + y1;
}, 1);

Clazz.newMeth(C$, 'getOrder$',  function () {
return 2;
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

Clazz.newMeth(C$, 'getCX0$',  function () {
return this.cx0;
});

Clazz.newMeth(C$, 'getCY0$',  function () {
return this.cy0;
});

Clazz.newMeth(C$, 'getX1$',  function () {
return (this.direction == -1) ? this.x0 : this.x1;
});

Clazz.newMeth(C$, 'getY1$',  function () {
return (this.direction == -1) ? this.y0 : this.y1;
});

Clazz.newMeth(C$, 'XforY$D',  function (y) {
if (y <= this.y0 ) {
return this.x0;
}if (y >= this.y1 ) {
return this.x1;
}return this.XforT$D(this.TforY$D(y));
});

Clazz.newMeth(C$, 'TforY$D',  function (y) {
if (y <= this.y0 ) {
return 0;
}if (y >= this.y1 ) {
return 1;
}return C$.TforY$D$D$D$D(y, this.ycoeff0, this.ycoeff1, this.ycoeff2);
});

Clazz.newMeth(C$, 'TforY$D$D$D$D',  function (y, ycoeff0, ycoeff1, ycoeff2) {
ycoeff0-=y;
if (ycoeff2 == 0.0 ) {
var root=-ycoeff0 / ycoeff1;
if (root >= 0  && root <= 1  ) {
return root;
}} else {
var d=ycoeff1 * ycoeff1 - 4.0 * ycoeff2 * ycoeff0 ;
if (d >= 0.0 ) {
d=Math.sqrt(d);
if (ycoeff1 < 0.0 ) {
d=-d;
}var q=(ycoeff1 + d) / -2.0;
var root=q / ycoeff2;
if (root >= 0  && root <= 1  ) {
return root;
}if (q != 0.0 ) {
root=ycoeff0 / q;
if (root >= 0  && root <= 1  ) {
return root;
}}}}var y0=ycoeff0;
var y1=ycoeff0 + ycoeff1 + ycoeff2 ;
return (0 < (y0 + y1) / 2 ) ? 0.0 : 1.0;
}, 1);

Clazz.newMeth(C$, 'XforT$D',  function (t) {
return (this.xcoeff2 * t + this.xcoeff1) * t + this.xcoeff0;
});

Clazz.newMeth(C$, 'YforT$D',  function (t) {
return (this.ycoeff2 * t + this.ycoeff1) * t + this.ycoeff0;
});

Clazz.newMeth(C$, 'dXforT$D$I',  function (t, deriv) {
switch (deriv) {
case 0:
return (this.xcoeff2 * t + this.xcoeff1) * t + this.xcoeff0;
case 1:
return 2 * this.xcoeff2 * t  + this.xcoeff1;
case 2:
return 2 * this.xcoeff2;
default:
return 0;
}
});

Clazz.newMeth(C$, 'dYforT$D$I',  function (t, deriv) {
switch (deriv) {
case 0:
return (this.ycoeff2 * t + this.ycoeff1) * t + this.ycoeff0;
case 1:
return 2 * this.ycoeff2 * t  + this.ycoeff1;
case 2:
return 2 * this.ycoeff2;
default:
return 0;
}
});

Clazz.newMeth(C$, 'nextVertical$D$D',  function (t0, t1) {
var t=-this.xcoeff1 / (2 * this.xcoeff2);
if (t > t0  && t < t1  ) {
return t;
}return t1;
});

Clazz.newMeth(C$, 'enlarge$java_awt_geom_Rectangle2D',  function (r) {
r.add$D$D(this.x0, this.y0);
var t=-this.xcoeff1 / (2 * this.xcoeff2);
if (t > 0  && t < 1  ) {
r.add$D$D(this.XforT$D(t), this.YforT$D(t));
}r.add$D$D(this.x1, this.y1);
});

Clazz.newMeth(C$, 'getSubCurve$D$D$I',  function (ystart, yend, dir) {
var t0;
var t1;
if (ystart <= this.y0 ) {
if (yend >= this.y1 ) {
return this.getWithDirection$I(dir);
}t0=0;
} else {
t0=C$.TforY$D$D$D$D(ystart, this.ycoeff0, this.ycoeff1, this.ycoeff2);
}if (yend >= this.y1 ) {
t1=1;
} else {
t1=C$.TforY$D$D$D$D(yend, this.ycoeff0, this.ycoeff1, this.ycoeff2);
}var eqn=Clazz.array(Double.TYPE, [10]);
eqn[0]=this.x0;
eqn[1]=this.y0;
eqn[2]=this.cx0;
eqn[3]=this.cy0;
eqn[4]=this.x1;
eqn[5]=this.y1;
if (t1 < 1 ) {
C$.split$DA$I$D(eqn, 0, t1);
}var i;
if (t0 <= 0 ) {
i=0;
} else {
C$.split$DA$I$D(eqn, 0, t0 / t1);
i=4;
}return Clazz.new_(C$.c$$D$D$D$D$D$D$I,[eqn[i + 0], ystart, eqn[i + 2], eqn[i + 3], eqn[i + 4], yend, dir]);
});

Clazz.newMeth(C$, 'getReversedCurve$',  function () {
return Clazz.new_(C$.c$$D$D$D$D$D$D$I,[this.x0, this.y0, this.cx0, this.cy0, this.x1, this.y1, -this.direction]);
});

Clazz.newMeth(C$, 'getSegment$DA',  function (coords) {
coords[0]=this.cx0;
coords[1]=this.cy0;
if (this.direction == 1) {
coords[2]=this.x1;
coords[3]=this.y1;
} else {
coords[2]=this.x0;
coords[3]=this.y0;
}return 2;
});

Clazz.newMeth(C$, 'controlPointString$',  function () {
return ("(" + new Double($I$(1).round$D(this.cx0)).toString() + ", " + new Double($I$(1).round$D(this.cy0)).toString() + "), " );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
