(function(){var P$=Clazz.newPackage("java.awt.geom"),I$=[[0,['java.awt.geom.Point2D','.Float'],['java.awt.geom.Rectangle2D','.Float'],['java.awt.geom.Point2D','.Double'],['java.awt.geom.Rectangle2D','.Double'],'java.awt.geom.Line2D','java.awt.geom.QuadIterator','java.awt.geom.FlatteningPathIterator']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "QuadCurve2D", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.awt.Shape', 'Cloneable']);
C$.$classes$=[['Float',9],['Double',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setCurve$DA$I',  function (coords, offset) {
this.setCurve$D$D$D$D$D$D(coords[offset + 0], coords[offset + 1], coords[offset + 2], coords[offset + 3], coords[offset + 4], coords[offset + 5]);
});

Clazz.newMeth(C$, 'setCurve$java_awt_geom_Point2D$java_awt_geom_Point2D$java_awt_geom_Point2D',  function (p1, cp, p2) {
this.setCurve$D$D$D$D$D$D(p1.getX$(), p1.getY$(), cp.getX$(), cp.getY$(), p2.getX$(), p2.getY$());
});

Clazz.newMeth(C$, 'setCurve$java_awt_geom_Point2DA$I',  function (pts, offset) {
this.setCurve$D$D$D$D$D$D(pts[offset + 0].getX$(), pts[offset + 0].getY$(), pts[offset + 1].getX$(), pts[offset + 1].getY$(), pts[offset + 2].getX$(), pts[offset + 2].getY$());
});

Clazz.newMeth(C$, 'setCurve$java_awt_geom_QuadCurve2D',  function (c) {
this.setCurve$D$D$D$D$D$D(c.getX1$(), c.getY1$(), c.getCtrlX$(), c.getCtrlY$(), c.getX2$(), c.getY2$());
});

Clazz.newMeth(C$, 'getFlatnessSq$D$D$D$D$D$D',  function (x1, y1, ctrlx, ctrly, x2, y2) {
return $I$(5).ptSegDistSq$D$D$D$D$D$D(x1, y1, x2, y2, ctrlx, ctrly);
}, 1);

Clazz.newMeth(C$, 'getFlatness$D$D$D$D$D$D',  function (x1, y1, ctrlx, ctrly, x2, y2) {
return $I$(5).ptSegDist$D$D$D$D$D$D(x1, y1, x2, y2, ctrlx, ctrly);
}, 1);

Clazz.newMeth(C$, 'getFlatnessSq$DA$I',  function (coords, offset) {
return $I$(5).ptSegDistSq$D$D$D$D$D$D(coords[offset + 0], coords[offset + 1], coords[offset + 4], coords[offset + 5], coords[offset + 2], coords[offset + 3]);
}, 1);

Clazz.newMeth(C$, 'getFlatness$DA$I',  function (coords, offset) {
return $I$(5).ptSegDist$D$D$D$D$D$D(coords[offset + 0], coords[offset + 1], coords[offset + 4], coords[offset + 5], coords[offset + 2], coords[offset + 3]);
}, 1);

Clazz.newMeth(C$, 'getFlatnessSq$',  function () {
return $I$(5,"ptSegDistSq$D$D$D$D$D$D",[this.getX1$(), this.getY1$(), this.getX2$(), this.getY2$(), this.getCtrlX$(), this.getCtrlY$()]);
});

Clazz.newMeth(C$, 'getFlatness$',  function () {
return $I$(5,"ptSegDist$D$D$D$D$D$D",[this.getX1$(), this.getY1$(), this.getX2$(), this.getY2$(), this.getCtrlX$(), this.getCtrlY$()]);
});

Clazz.newMeth(C$, 'subdivide$java_awt_geom_QuadCurve2D$java_awt_geom_QuadCurve2D',  function (left, right) {
C$.subdivide$java_awt_geom_QuadCurve2D$java_awt_geom_QuadCurve2D$java_awt_geom_QuadCurve2D(this, left, right);
});

Clazz.newMeth(C$, 'subdivide$java_awt_geom_QuadCurve2D$java_awt_geom_QuadCurve2D$java_awt_geom_QuadCurve2D',  function (src, left, right) {
var x1=src.getX1$();
var y1=src.getY1$();
var ctrlx=src.getCtrlX$();
var ctrly=src.getCtrlY$();
var x2=src.getX2$();
var y2=src.getY2$();
var ctrlx1=(x1 + ctrlx) / 2.0;
var ctrly1=(y1 + ctrly) / 2.0;
var ctrlx2=(x2 + ctrlx) / 2.0;
var ctrly2=(y2 + ctrly) / 2.0;
ctrlx=(ctrlx1 + ctrlx2) / 2.0;
ctrly=(ctrly1 + ctrly2) / 2.0;
if (left != null ) {
left.setCurve$D$D$D$D$D$D(x1, y1, ctrlx1, ctrly1, ctrlx, ctrly);
}if (right != null ) {
right.setCurve$D$D$D$D$D$D(ctrlx, ctrly, ctrlx2, ctrly2, x2, y2);
}}, 1);

Clazz.newMeth(C$, 'subdivide$DA$I$DA$I$DA$I',  function (src, srcoff, left, leftoff, right, rightoff) {
var x1=src[srcoff + 0];
var y1=src[srcoff + 1];
var ctrlx=src[srcoff + 2];
var ctrly=src[srcoff + 3];
var x2=src[srcoff + 4];
var y2=src[srcoff + 5];
if (left != null ) {
left[leftoff + 0]=x1;
left[leftoff + 1]=y1;
}if (right != null ) {
right[rightoff + 4]=x2;
right[rightoff + 5]=y2;
}x1=(x1 + ctrlx) / 2.0;
y1=(y1 + ctrly) / 2.0;
x2=(x2 + ctrlx) / 2.0;
y2=(y2 + ctrly) / 2.0;
ctrlx=(x1 + x2) / 2.0;
ctrly=(y1 + y2) / 2.0;
if (left != null ) {
left[leftoff + 2]=x1;
left[leftoff + 3]=y1;
left[leftoff + 4]=ctrlx;
left[leftoff + 5]=ctrly;
}if (right != null ) {
right[rightoff + 0]=ctrlx;
right[rightoff + 1]=ctrly;
right[rightoff + 2]=x2;
right[rightoff + 3]=y2;
}}, 1);

Clazz.newMeth(C$, 'solveQuadratic$DA',  function (eqn) {
return C$.solveQuadratic$DA$DA(eqn, eqn);
}, 1);

Clazz.newMeth(C$, 'solveQuadratic$DA$DA',  function (eqn, res) {
var a=eqn[2];
var b=eqn[1];
var c=eqn[0];
var roots=0;
if (a == 0.0 ) {
if (b == 0.0 ) {
return -1;
}res[roots++]=-c / b;
} else {
var d=b * b - 4.0 * a * c ;
if (d < 0.0 ) {
return 0;
}d=Math.sqrt(d);
if (b < 0.0 ) {
d=-d;
}var q=(b + d) / -2.0;
res[roots++]=q / a;
if (q != 0.0 ) {
res[roots++]=c / q;
}}return roots;
}, 1);

Clazz.newMeth(C$, 'contains$D$D',  function (x, y) {
var x1=this.getX1$();
var y1=this.getY1$();
var xc=this.getCtrlX$();
var yc=this.getCtrlY$();
var x2=this.getX2$();
var y2=this.getY2$();
var kx=x1 - 2 * xc + x2;
var ky=y1 - 2 * yc + y2;
var dx=x - x1;
var dy=y - y1;
var dxl=x2 - x1;
var dyl=y2 - y1;
var t0=(dx * ky - dy * kx) / (dxl * ky - dyl * kx);
if (t0 < 0  || t0 > 1   || t0 != t0  ) {
return false;
}var xb=kx * t0 * t0  + 2 * (xc - x1) * t0  + x1;
var yb=ky * t0 * t0  + 2 * (yc - y1) * t0  + y1;
var xl=dxl * t0 + x1;
var yl=dyl * t0 + y1;
return (x >= xb  && x < xl  ) || (x >= xl  && x < xb  ) || (y >= yb  && y < yl  ) || (y >= yl  && y < yb  )  ;
});

Clazz.newMeth(C$, 'contains$java_awt_geom_Point2D',  function (p) {
return this.contains$D$D(p.getX$(), p.getY$());
});

Clazz.newMeth(C$, 'fillEqn$DA$D$D$D$D',  function (eqn, val, c1, cp, c2) {
eqn[0]=c1 - val;
eqn[1]=cp + cp - c1 - c1;
eqn[2]=c1 - cp - cp  + c2;
return;
}, 1);

Clazz.newMeth(C$, 'evalQuadratic$DA$I$Z$Z$DA$D$D$D',  function (vals, num, include0, include1, inflect, c1, ctrl, c2) {
var j=0;
for (var i=0; i < num; i++) {
var t=vals[i];
if ((include0 ? t >= 0  : t > 0 ) && (include1 ? t <= 1  : t < 1 ) && (inflect == null  || inflect[1] + 2 * inflect[2] * t  != 0  )  ) {
var u=1 - t;
vals[j++]=c1 * u * u  + 2 * ctrl * t * u  + c2 * t * t ;
}}
return j;
}, 1);

Clazz.newMeth(C$, 'getTag$D$D$D',  function (coord, low, high) {
if (coord <= low ) {
return (coord < low  ? -2 : -1);
}if (coord >= high ) {
return (coord > high  ? 2 : 1);
}return 0;
}, 1);

Clazz.newMeth(C$, 'inwards$I$I$I',  function (pttag, opt1tag, opt2tag) {
switch (pttag) {
case -2:
case 2:
default:
return false;
case -1:
return (opt1tag >= 0 || opt2tag >= 0 );
case 0:
return true;
case 1:
return (opt1tag <= 0 || opt2tag <= 0 );
}
}, 1);

Clazz.newMeth(C$, 'intersects$D$D$D$D',  function (x, y, w, h) {
if (w <= 0  || h <= 0  ) {
return false;
}var x1=this.getX1$();
var y1=this.getY1$();
var x1tag=C$.getTag$D$D$D(x1, x, x + w);
var y1tag=C$.getTag$D$D$D(y1, y, y + h);
if (x1tag == 0 && y1tag == 0 ) {
return true;
}var x2=this.getX2$();
var y2=this.getY2$();
var x2tag=C$.getTag$D$D$D(x2, x, x + w);
var y2tag=C$.getTag$D$D$D(y2, y, y + h);
if (x2tag == 0 && y2tag == 0 ) {
return true;
}var ctrlx=this.getCtrlX$();
var ctrly=this.getCtrlY$();
var ctrlxtag=C$.getTag$D$D$D(ctrlx, x, x + w);
var ctrlytag=C$.getTag$D$D$D(ctrly, y, y + h);
if (x1tag < 0 && x2tag < 0  && ctrlxtag < 0 ) {
return false;
}if (y1tag < 0 && y2tag < 0  && ctrlytag < 0 ) {
return false;
}if (x1tag > 0 && x2tag > 0  && ctrlxtag > 0 ) {
return false;
}if (y1tag > 0 && y2tag > 0  && ctrlytag > 0 ) {
return false;
}if (C$.inwards$I$I$I(x1tag, x2tag, ctrlxtag) && C$.inwards$I$I$I(y1tag, y2tag, ctrlytag) ) {
return true;
}if (C$.inwards$I$I$I(x2tag, x1tag, ctrlxtag) && C$.inwards$I$I$I(y2tag, y1tag, ctrlytag) ) {
return true;
}var xoverlap=(x1tag * x2tag <= 0);
var yoverlap=(y1tag * y2tag <= 0);
if (x1tag == 0 && x2tag == 0  && yoverlap ) {
return true;
}if (y1tag == 0 && y2tag == 0  && xoverlap ) {
return true;
}var eqn=Clazz.array(Double.TYPE, [3]);
var res=Clazz.array(Double.TYPE, [3]);
if (!yoverlap) {
C$.fillEqn$DA$D$D$D$D(eqn, (y1tag < 0 ? y : y + h), y1, ctrly, y2);
return (C$.solveQuadratic$DA$DA(eqn, res) == 2 && C$.evalQuadratic$DA$I$Z$Z$DA$D$D$D(res, 2, true, true, null, x1, ctrlx, x2) == 2  && C$.getTag$D$D$D(res[0], x, x + w) * C$.getTag$D$D$D(res[1], x, x + w) <= 0 );
}if (!xoverlap) {
C$.fillEqn$DA$D$D$D$D(eqn, (x1tag < 0 ? x : x + w), x1, ctrlx, x2);
return (C$.solveQuadratic$DA$DA(eqn, res) == 2 && C$.evalQuadratic$DA$I$Z$Z$DA$D$D$D(res, 2, true, true, null, y1, ctrly, y2) == 2  && C$.getTag$D$D$D(res[0], y, y + h) * C$.getTag$D$D$D(res[1], y, y + h) <= 0 );
}var dx=x2 - x1;
var dy=y2 - y1;
var k=y2 * x1 - x2 * y1;
var c1tag;
var c2tag;
if (y1tag == 0) {
c1tag=x1tag;
} else {
c1tag=C$.getTag$D$D$D((k + dx * (y1tag < 0 ? y : y + h)) / dy, x, x + w);
}if (y2tag == 0) {
c2tag=x2tag;
} else {
c2tag=C$.getTag$D$D$D((k + dx * (y2tag < 0 ? y : y + h)) / dy, x, x + w);
}if (c1tag * c2tag <= 0) {
return true;
}c1tag=((c1tag * x1tag <= 0) ? y1tag : y2tag);
C$.fillEqn$DA$D$D$D$D(eqn, (c2tag < 0 ? x : x + w), x1, ctrlx, x2);
var num=C$.solveQuadratic$DA$DA(eqn, res);
C$.evalQuadratic$DA$I$Z$Z$DA$D$D$D(res, num, true, true, null, y1, ctrly, y2);
c2tag=C$.getTag$D$D$D(res[0], y, y + h);
return (c1tag * c2tag <= 0);
});

Clazz.newMeth(C$, 'intersects$java_awt_geom_Rectangle2D',  function (r) {
return this.intersects$D$D$D$D(r.getX$(), r.getY$(), r.getWidth$(), r.getHeight$());
});

Clazz.newMeth(C$, 'contains$D$D$D$D',  function (x, y, w, h) {
if (w <= 0  || h <= 0  ) {
return false;
}return (this.contains$D$D(x, y) && this.contains$D$D(x + w, y) && this.contains$D$D(x + w, y + h) && this.contains$D$D(x, y + h)  );
});

Clazz.newMeth(C$, 'contains$java_awt_geom_Rectangle2D',  function (r) {
return this.contains$D$D$D$D(r.getX$(), r.getY$(), r.getWidth$(), r.getHeight$());
});

Clazz.newMeth(C$, 'getBounds$',  function () {
return this.getBounds2D$().getBounds$();
});

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform',  function (at) {
return Clazz.new_($I$(6,1).c$$java_awt_geom_QuadCurve2D$java_awt_geom_AffineTransform,[this, at]);
});

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform$D',  function (at, flatness) {
return Clazz.new_([this.getPathIterator$java_awt_geom_AffineTransform(at), flatness],$I$(7,1).c$$java_awt_geom_PathIterator$D);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.QuadCurve2D, "Float", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.geom.QuadCurve2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['x1','y1','ctrlx','ctrly','x2','y2']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$F$F$F$F$F$F',  function (x1, y1, ctrlx, ctrly, x2, y2) {
Clazz.super_(C$, this);
this.setCurve$F$F$F$F$F$F(x1, y1, ctrlx, ctrly, x2, y2);
}, 1);

Clazz.newMeth(C$, 'getX1$',  function () {
return this.x1;
});

Clazz.newMeth(C$, 'getY1$',  function () {
return this.y1;
});

Clazz.newMeth(C$, 'getP1$',  function () {
return Clazz.new_($I$(1,1).c$$F$F,[this.x1, this.y1]);
});

Clazz.newMeth(C$, 'getCtrlX$',  function () {
return this.ctrlx;
});

Clazz.newMeth(C$, 'getCtrlY$',  function () {
return this.ctrly;
});

Clazz.newMeth(C$, 'getCtrlPt$',  function () {
return Clazz.new_($I$(1,1).c$$F$F,[this.ctrlx, this.ctrly]);
});

Clazz.newMeth(C$, 'getX2$',  function () {
return this.x2;
});

Clazz.newMeth(C$, 'getY2$',  function () {
return this.y2;
});

Clazz.newMeth(C$, 'getP2$',  function () {
return Clazz.new_($I$(1,1).c$$F$F,[this.x2, this.y2]);
});

Clazz.newMeth(C$, 'setCurve$D$D$D$D$D$D',  function (x1, y1, ctrlx, ctrly, x2, y2) {
this.x1=x1;
this.y1=y1;
this.ctrlx=ctrlx;
this.ctrly=ctrly;
this.x2=x2;
this.y2=y2;
});

Clazz.newMeth(C$, 'setCurve$F$F$F$F$F$F',  function (x1, y1, ctrlx, ctrly, x2, y2) {
this.x1=x1;
this.y1=y1;
this.ctrlx=ctrlx;
this.ctrly=ctrly;
this.x2=x2;
this.y2=y2;
});

Clazz.newMeth(C$, 'getBounds2D$',  function () {
var left=Math.min(Math.min(this.x1, this.x2), this.ctrlx);
var top=Math.min(Math.min(this.y1, this.y2), this.ctrly);
var right=Math.max(Math.max(this.x1, this.x2), this.ctrlx);
var bottom=Math.max(Math.max(this.y1, this.y2), this.ctrly);
return Clazz.new_($I$(2,1).c$$F$F$F$F,[left, top, right - left, bottom - top]);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.QuadCurve2D, "Double", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.geom.QuadCurve2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['x1','y1','ctrlx','ctrly','x2','y2']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$D$D$D$D$D$D',  function (x1, y1, ctrlx, ctrly, x2, y2) {
Clazz.super_(C$, this);
this.setCurve$D$D$D$D$D$D(x1, y1, ctrlx, ctrly, x2, y2);
}, 1);

Clazz.newMeth(C$, 'getX1$',  function () {
return this.x1;
});

Clazz.newMeth(C$, 'getY1$',  function () {
return this.y1;
});

Clazz.newMeth(C$, 'getP1$',  function () {
return Clazz.new_($I$(3,1).c$$D$D,[this.x1, this.y1]);
});

Clazz.newMeth(C$, 'getCtrlX$',  function () {
return this.ctrlx;
});

Clazz.newMeth(C$, 'getCtrlY$',  function () {
return this.ctrly;
});

Clazz.newMeth(C$, 'getCtrlPt$',  function () {
return Clazz.new_($I$(3,1).c$$D$D,[this.ctrlx, this.ctrly]);
});

Clazz.newMeth(C$, 'getX2$',  function () {
return this.x2;
});

Clazz.newMeth(C$, 'getY2$',  function () {
return this.y2;
});

Clazz.newMeth(C$, 'getP2$',  function () {
return Clazz.new_($I$(3,1).c$$D$D,[this.x2, this.y2]);
});

Clazz.newMeth(C$, 'setCurve$D$D$D$D$D$D',  function (x1, y1, ctrlx, ctrly, x2, y2) {
this.x1=x1;
this.y1=y1;
this.ctrlx=ctrlx;
this.ctrly=ctrly;
this.x2=x2;
this.y2=y2;
});

Clazz.newMeth(C$, 'getBounds2D$',  function () {
var left=Math.min(Math.min(this.x1, this.x2), this.ctrlx);
var top=Math.min(Math.min(this.y1, this.y2), this.ctrly);
var right=Math.max(Math.max(this.x1, this.x2), this.ctrlx);
var bottom=Math.max(Math.max(this.y1, this.y2), this.ctrly);
return Clazz.new_($I$(4,1).c$$D$D$D$D,[left, top, right - left, bottom - top]);
});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
