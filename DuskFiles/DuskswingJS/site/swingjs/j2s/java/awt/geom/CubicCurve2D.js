(function(){var P$=Clazz.newPackage("java.awt.geom"),I$=[[0,['java.awt.geom.Point2D','.Float'],['java.awt.geom.Rectangle2D','.Float'],['java.awt.geom.Point2D','.Double'],['java.awt.geom.Rectangle2D','.Double'],'java.awt.geom.Line2D','java.awt.geom.QuadCurve2D','sun.awt.geom.Curve','java.util.Arrays','swingjs.api.Interface','java.awt.geom.FlatteningPathIterator','InternalError']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CubicCurve2D", function(){
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
this.setCurve$D$D$D$D$D$D$D$D(coords[offset + 0], coords[offset + 1], coords[offset + 2], coords[offset + 3], coords[offset + 4], coords[offset + 5], coords[offset + 6], coords[offset + 7]);
});

Clazz.newMeth(C$, 'setCurve$java_awt_geom_Point2D$java_awt_geom_Point2D$java_awt_geom_Point2D$java_awt_geom_Point2D',  function (p1, cp1, cp2, p2) {
this.setCurve$D$D$D$D$D$D$D$D(p1.getX$(), p1.getY$(), cp1.getX$(), cp1.getY$(), cp2.getX$(), cp2.getY$(), p2.getX$(), p2.getY$());
});

Clazz.newMeth(C$, 'setCurve$java_awt_geom_Point2DA$I',  function (pts, offset) {
this.setCurve$D$D$D$D$D$D$D$D(pts[offset + 0].getX$(), pts[offset + 0].getY$(), pts[offset + 1].getX$(), pts[offset + 1].getY$(), pts[offset + 2].getX$(), pts[offset + 2].getY$(), pts[offset + 3].getX$(), pts[offset + 3].getY$());
});

Clazz.newMeth(C$, 'setCurve$java_awt_geom_CubicCurve2D',  function (c) {
this.setCurve$D$D$D$D$D$D$D$D(c.getX1$(), c.getY1$(), c.getCtrlX1$(), c.getCtrlY1$(), c.getCtrlX2$(), c.getCtrlY2$(), c.getX2$(), c.getY2$());
});

Clazz.newMeth(C$, 'getFlatnessSq$D$D$D$D$D$D$D$D',  function (x1, y1, ctrlx1, ctrly1, ctrlx2, ctrly2, x2, y2) {
return Math.max($I$(5).ptSegDistSq$D$D$D$D$D$D(x1, y1, x2, y2, ctrlx1, ctrly1), $I$(5).ptSegDistSq$D$D$D$D$D$D(x1, y1, x2, y2, ctrlx2, ctrly2));
}, 1);

Clazz.newMeth(C$, 'getFlatness$D$D$D$D$D$D$D$D',  function (x1, y1, ctrlx1, ctrly1, ctrlx2, ctrly2, x2, y2) {
return Math.sqrt(C$.getFlatnessSq$D$D$D$D$D$D$D$D(x1, y1, ctrlx1, ctrly1, ctrlx2, ctrly2, x2, y2));
}, 1);

Clazz.newMeth(C$, 'getFlatnessSq$DA$I',  function (coords, offset) {
return C$.getFlatnessSq$D$D$D$D$D$D$D$D(coords[offset + 0], coords[offset + 1], coords[offset + 2], coords[offset + 3], coords[offset + 4], coords[offset + 5], coords[offset + 6], coords[offset + 7]);
}, 1);

Clazz.newMeth(C$, 'getFlatness$DA$I',  function (coords, offset) {
return C$.getFlatness$D$D$D$D$D$D$D$D(coords[offset + 0], coords[offset + 1], coords[offset + 2], coords[offset + 3], coords[offset + 4], coords[offset + 5], coords[offset + 6], coords[offset + 7]);
}, 1);

Clazz.newMeth(C$, 'getFlatnessSq$',  function () {
return C$.getFlatnessSq$D$D$D$D$D$D$D$D(this.getX1$(), this.getY1$(), this.getCtrlX1$(), this.getCtrlY1$(), this.getCtrlX2$(), this.getCtrlY2$(), this.getX2$(), this.getY2$());
});

Clazz.newMeth(C$, 'getFlatness$',  function () {
return C$.getFlatness$D$D$D$D$D$D$D$D(this.getX1$(), this.getY1$(), this.getCtrlX1$(), this.getCtrlY1$(), this.getCtrlX2$(), this.getCtrlY2$(), this.getX2$(), this.getY2$());
});

Clazz.newMeth(C$, 'subdivide$java_awt_geom_CubicCurve2D$java_awt_geom_CubicCurve2D',  function (left, right) {
C$.subdivide$java_awt_geom_CubicCurve2D$java_awt_geom_CubicCurve2D$java_awt_geom_CubicCurve2D(this, left, right);
});

Clazz.newMeth(C$, 'subdivide$java_awt_geom_CubicCurve2D$java_awt_geom_CubicCurve2D$java_awt_geom_CubicCurve2D',  function (src, left, right) {
var x1=src.getX1$();
var y1=src.getY1$();
var ctrlx1=src.getCtrlX1$();
var ctrly1=src.getCtrlY1$();
var ctrlx2=src.getCtrlX2$();
var ctrly2=src.getCtrlY2$();
var x2=src.getX2$();
var y2=src.getY2$();
var centerx=(ctrlx1 + ctrlx2) / 2.0;
var centery=(ctrly1 + ctrly2) / 2.0;
ctrlx1=(x1 + ctrlx1) / 2.0;
ctrly1=(y1 + ctrly1) / 2.0;
ctrlx2=(x2 + ctrlx2) / 2.0;
ctrly2=(y2 + ctrly2) / 2.0;
var ctrlx12=(ctrlx1 + centerx) / 2.0;
var ctrly12=(ctrly1 + centery) / 2.0;
var ctrlx21=(ctrlx2 + centerx) / 2.0;
var ctrly21=(ctrly2 + centery) / 2.0;
centerx=(ctrlx12 + ctrlx21) / 2.0;
centery=(ctrly12 + ctrly21) / 2.0;
if (left != null ) {
left.setCurve$D$D$D$D$D$D$D$D(x1, y1, ctrlx1, ctrly1, ctrlx12, ctrly12, centerx, centery);
}if (right != null ) {
right.setCurve$D$D$D$D$D$D$D$D(centerx, centery, ctrlx21, ctrly21, ctrlx2, ctrly2, x2, y2);
}}, 1);

Clazz.newMeth(C$, 'subdivide$DA$I$DA$I$DA$I',  function (src, srcoff, left, leftoff, right, rightoff) {
var x1=src[srcoff + 0];
var y1=src[srcoff + 1];
var ctrlx1=src[srcoff + 2];
var ctrly1=src[srcoff + 3];
var ctrlx2=src[srcoff + 4];
var ctrly2=src[srcoff + 5];
var x2=src[srcoff + 6];
var y2=src[srcoff + 7];
if (left != null ) {
left[leftoff + 0]=x1;
left[leftoff + 1]=y1;
}if (right != null ) {
right[rightoff + 6]=x2;
right[rightoff + 7]=y2;
}x1=(x1 + ctrlx1) / 2.0;
y1=(y1 + ctrly1) / 2.0;
x2=(x2 + ctrlx2) / 2.0;
y2=(y2 + ctrly2) / 2.0;
var centerx=(ctrlx1 + ctrlx2) / 2.0;
var centery=(ctrly1 + ctrly2) / 2.0;
ctrlx1=(x1 + centerx) / 2.0;
ctrly1=(y1 + centery) / 2.0;
ctrlx2=(x2 + centerx) / 2.0;
ctrly2=(y2 + centery) / 2.0;
centerx=(ctrlx1 + ctrlx2) / 2.0;
centery=(ctrly1 + ctrly2) / 2.0;
if (left != null ) {
left[leftoff + 2]=x1;
left[leftoff + 3]=y1;
left[leftoff + 4]=ctrlx1;
left[leftoff + 5]=ctrly1;
left[leftoff + 6]=centerx;
left[leftoff + 7]=centery;
}if (right != null ) {
right[rightoff + 0]=centerx;
right[rightoff + 1]=centery;
right[rightoff + 2]=ctrlx2;
right[rightoff + 3]=ctrly2;
right[rightoff + 4]=x2;
right[rightoff + 5]=y2;
}}, 1);

Clazz.newMeth(C$, 'solveCubic$DA',  function (eqn) {
return C$.solveCubic$DA$DA(eqn, eqn);
}, 1);

Clazz.newMeth(C$, 'solveCubic$DA$DA',  function (eqn, res) {
var d=eqn[3];
if (d == 0.0 ) {
return $I$(6).solveQuadratic$DA$DA(eqn, res);
}var a=eqn[2] / d;
var b=eqn[1] / d;
var c=eqn[0] / d;
var roots=0;
var Q=(a * a - 3.0 * b) / 9.0;
var R=(2.0 * a * a * a  - 9.0 * a * b  + 27.0 * c) / 54.0;
var R2=R * R;
var Q3=Q * Q * Q ;
a=a / 3.0;
if (R2 < Q3 ) {
var theta=Math.acos(R / Math.sqrt(Q3));
Q=-2.0 * Math.sqrt(Q);
if (res === eqn ) {
eqn=Clazz.array(Double.TYPE, [4]);
System.arraycopy$O$I$O$I$I(res, 0, eqn, 0, 4);
}res[roots++]=Q * Math.cos(theta / 3.0) - a;
res[roots++]=Q * Math.cos((theta + 6.283185307179586) / 3.0) - a;
res[roots++]=Q * Math.cos((theta - 6.283185307179586) / 3.0) - a;
C$.fixRoots$DA$DA(res, eqn);
} else {
var neg=(R < 0.0 );
var S=Math.sqrt(R2 - Q3);
if (neg) {
R=-R;
}var A=Math.pow(R + S, 0.3333333333333333);
if (!neg) {
A=-A;
}var B=(A == 0.0 ) ? 0.0 : (Q / A);
res[roots++]=(A + B) - a;
}return roots;
}, 1);

Clazz.newMeth(C$, 'fixRoots$DA$DA',  function (res, eqn) {
var EPSILON=1.0E-5;
for (var i=0; i < 3; i++) {
var t=res[i];
if (Math.abs(t) < 1.0E-5 ) {
res[i]=C$.findZero$D$D$DA(t, 0, eqn);
} else if (Math.abs(t - 1) < 1.0E-5 ) {
res[i]=C$.findZero$D$D$DA(t, 1, eqn);
}}
}, 1);

Clazz.newMeth(C$, 'solveEqn$DA$I$D',  function (eqn, order, t) {
var v=eqn[order];
while (--order >= 0){
v=v * t + eqn[order];
}
return v;
}, 1);

Clazz.newMeth(C$, 'findZero$D$D$DA',  function (t, target, eqn) {
var slopeqn=Clazz.array(Double.TYPE, -1, [eqn[1], 2 * eqn[2], 3 * eqn[3]]);
var slope;
var origdelta=0;
var origt=t;
while (true){
slope=C$.solveEqn$DA$I$D(slopeqn, 2, t);
if (slope == 0 ) {
return t;
}var y=C$.solveEqn$DA$I$D(eqn, 3, t);
if (y == 0 ) {
return t;
}var delta=-(y / slope);
if (origdelta == 0 ) {
origdelta=delta;
}if (t < target ) {
if (delta < 0 ) return t;
} else if (t > target ) {
if (delta > 0 ) return t;
} else {
return (delta > 0  ? (target + 4.9E-324) : (target - 4.9E-324));
}var newt=t + delta;
if (t == newt ) {
return t;
}if (delta * origdelta < 0 ) {
var tag=(origt < t  ? C$.getTag$D$D$D(target, origt, t) : C$.getTag$D$D$D(target, t, origt));
if (tag != 0) {
return (origt + t) / 2;
}t=target;
} else {
t=newt;
}}
}, 1);

Clazz.newMeth(C$, 'contains$D$D',  function (x, y) {
if (!(x * 0.0 + y * 0.0 == 0.0 )) {
return false;
}var x1=this.getX1$();
var y1=this.getY1$();
var x2=this.getX2$();
var y2=this.getY2$();
var crossings=($I$(7).pointCrossingsForLine$D$D$D$D$D$D(x, y, x1, y1, x2, y2) + $I$(7,"pointCrossingsForCubic$D$D$D$D$D$D$D$D$D$D$I",[x, y, x1, y1, this.getCtrlX1$(), this.getCtrlY1$(), this.getCtrlX2$(), this.getCtrlY2$(), x2, y2, 0]));
return ((crossings & 1) == 1);
});

Clazz.newMeth(C$, 'contains$java_awt_geom_Point2D',  function (p) {
return this.contains$D$D(p.getX$(), p.getY$());
});

Clazz.newMeth(C$, 'fillEqn$DA$D$D$D$D$D',  function (eqn, val, c1, cp1, cp2, c2) {
eqn[0]=c1 - val;
eqn[1]=(cp1 - c1) * 3.0;
eqn[2]=(cp2 - cp1 - cp1  + c1) * 3.0;
eqn[3]=c2 + (cp1 - cp2) * 3.0 - c1;
return;
}, 1);

Clazz.newMeth(C$, 'evalCubic$DA$I$Z$Z$DA$D$D$D$D',  function (vals, num, include0, include1, inflect, c1, cp1, cp2, c2) {
var j=0;
for (var i=0; i < num; i++) {
var t=vals[i];
if ((include0 ? t >= 0  : t > 0 ) && (include1 ? t <= 1  : t < 1 ) && (inflect == null  || inflect[1] + (2 * inflect[2] + 3 * inflect[3] * t ) * t != 0  )  ) {
var u=1 - t;
vals[j++]=c1 * u * u * u  + 3 * cp1 * t * u * u  + 3 * cp2 * t * t * u  + c2 * t * t * t ;
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
}var ctrlx1=this.getCtrlX1$();
var ctrly1=this.getCtrlY1$();
var ctrlx2=this.getCtrlX2$();
var ctrly2=this.getCtrlY2$();
var ctrlx1tag=C$.getTag$D$D$D(ctrlx1, x, x + w);
var ctrly1tag=C$.getTag$D$D$D(ctrly1, y, y + h);
var ctrlx2tag=C$.getTag$D$D$D(ctrlx2, x, x + w);
var ctrly2tag=C$.getTag$D$D$D(ctrly2, y, y + h);
if (x1tag < 0 && x2tag < 0  && ctrlx1tag < 0  && ctrlx2tag < 0 ) {
return false;
}if (y1tag < 0 && y2tag < 0  && ctrly1tag < 0  && ctrly2tag < 0 ) {
return false;
}if (x1tag > 0 && x2tag > 0  && ctrlx1tag > 0  && ctrlx2tag > 0 ) {
return false;
}if (y1tag > 0 && y2tag > 0  && ctrly1tag > 0  && ctrly2tag > 0 ) {
return false;
}if (C$.inwards$I$I$I(x1tag, x2tag, ctrlx1tag) && C$.inwards$I$I$I(y1tag, y2tag, ctrly1tag) ) {
return true;
}if (C$.inwards$I$I$I(x2tag, x1tag, ctrlx2tag) && C$.inwards$I$I$I(y2tag, y1tag, ctrly2tag) ) {
return true;
}var xoverlap=(x1tag * x2tag <= 0);
var yoverlap=(y1tag * y2tag <= 0);
if (x1tag == 0 && x2tag == 0  && yoverlap ) {
return true;
}if (y1tag == 0 && y2tag == 0  && xoverlap ) {
return true;
}var eqn=Clazz.array(Double.TYPE, [4]);
var res=Clazz.array(Double.TYPE, [4]);
if (!yoverlap) {
C$.fillEqn$DA$D$D$D$D$D(eqn, (y1tag < 0 ? y : y + h), y1, ctrly1, ctrly2, y2);
var num=C$.solveCubic$DA$DA(eqn, res);
num=C$.evalCubic$DA$I$Z$Z$DA$D$D$D$D(res, num, true, true, null, x1, ctrlx1, ctrlx2, x2);
return (num == 2 && C$.getTag$D$D$D(res[0], x, x + w) * C$.getTag$D$D$D(res[1], x, x + w) <= 0 );
}if (!xoverlap) {
C$.fillEqn$DA$D$D$D$D$D(eqn, (x1tag < 0 ? x : x + w), x1, ctrlx1, ctrlx2, x2);
var num=C$.solveCubic$DA$DA(eqn, res);
num=C$.evalCubic$DA$I$Z$Z$DA$D$D$D$D(res, num, true, true, null, y1, ctrly1, ctrly2, y2);
return (num == 2 && C$.getTag$D$D$D(res[0], y, y + h) * C$.getTag$D$D$D(res[1], y, y + h) <= 0 );
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
C$.fillEqn$DA$D$D$D$D$D(eqn, (c2tag < 0 ? x : x + w), x1, ctrlx1, ctrlx2, x2);
var num=C$.solveCubic$DA$DA(eqn, res);
num=C$.evalCubic$DA$I$Z$Z$DA$D$D$D$D(res, num, true, true, null, y1, ctrly1, ctrly2, y2);
var tags=Clazz.array(Integer.TYPE, [num + 1]);
for (var i=0; i < num; i++) {
tags[i]=C$.getTag$D$D$D(res[i], y, y + h);
}
tags[num]=c1tag;
$I$(8).sort$IA(tags);
return ((num >= 1 && tags[0] * tags[1] <= 0 ) || (num >= 3 && tags[2] * tags[3] <= 0 ) );
});

Clazz.newMeth(C$, 'intersects$java_awt_geom_Rectangle2D',  function (r) {
return this.intersects$D$D$D$D(r.getX$(), r.getY$(), r.getWidth$(), r.getHeight$());
});

Clazz.newMeth(C$, 'contains$D$D$D$D',  function (x, y, w, h) {
if (w <= 0  || h <= 0  ) {
return false;
}if (!(this.contains$D$D(x, y) && this.contains$D$D(x + w, y) && this.contains$D$D(x + w, y + h) && this.contains$D$D(x, y + h)  )) {
return false;
}var rect=Clazz.new_($I$(4,1).c$$D$D$D$D,[x, y, w, h]);
return !rect.intersectsLine$D$D$D$D(this.getX1$(), this.getY1$(), this.getX2$(), this.getY2$());
});

Clazz.newMeth(C$, 'contains$java_awt_geom_Rectangle2D',  function (r) {
return this.contains$D$D$D$D(r.getX$(), r.getY$(), r.getWidth$(), r.getHeight$());
});

Clazz.newMeth(C$, 'getBounds$',  function () {
return this.getBounds2D$().getBounds$();
});

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform',  function (at) {
return ($I$(9).getInstance$S$Z("java.awt.geom.CubicInterator", false)).set$java_awt_geom_CubicCurve2D$java_awt_geom_AffineTransform(this, at);
});

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform$D',  function (at, flatness) {
return Clazz.new_([this.getPathIterator$java_awt_geom_AffineTransform(at), flatness],$I$(10,1).c$$java_awt_geom_PathIterator$D);
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(11,1));
} else {
throw e;
}
}
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.CubicCurve2D, "Float", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.geom.CubicCurve2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['x1','y1','ctrlx1','ctrly1','ctrlx2','ctrly2','x2','y2']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$F$F$F$F$F$F$F$F',  function (x1, y1, ctrlx1, ctrly1, ctrlx2, ctrly2, x2, y2) {
Clazz.super_(C$, this);
this.setCurve$F$F$F$F$F$F$F$F(x1, y1, ctrlx1, ctrly1, ctrlx2, ctrly2, x2, y2);
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

Clazz.newMeth(C$, 'getCtrlX1$',  function () {
return this.ctrlx1;
});

Clazz.newMeth(C$, 'getCtrlY1$',  function () {
return this.ctrly1;
});

Clazz.newMeth(C$, 'getCtrlP1$',  function () {
return Clazz.new_($I$(1,1).c$$F$F,[this.ctrlx1, this.ctrly1]);
});

Clazz.newMeth(C$, 'getCtrlX2$',  function () {
return this.ctrlx2;
});

Clazz.newMeth(C$, 'getCtrlY2$',  function () {
return this.ctrly2;
});

Clazz.newMeth(C$, 'getCtrlP2$',  function () {
return Clazz.new_($I$(1,1).c$$F$F,[this.ctrlx2, this.ctrly2]);
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

Clazz.newMeth(C$, 'setCurve$D$D$D$D$D$D$D$D',  function (x1, y1, ctrlx1, ctrly1, ctrlx2, ctrly2, x2, y2) {
this.x1=x1;
this.y1=y1;
this.ctrlx1=ctrlx1;
this.ctrly1=ctrly1;
this.ctrlx2=ctrlx2;
this.ctrly2=ctrly2;
this.x2=x2;
this.y2=y2;
});

Clazz.newMeth(C$, 'setCurve$F$F$F$F$F$F$F$F',  function (x1, y1, ctrlx1, ctrly1, ctrlx2, ctrly2, x2, y2) {
this.x1=x1;
this.y1=y1;
this.ctrlx1=ctrlx1;
this.ctrly1=ctrly1;
this.ctrlx2=ctrlx2;
this.ctrly2=ctrly2;
this.x2=x2;
this.y2=y2;
});

Clazz.newMeth(C$, 'getBounds2D$',  function () {
var left=Math.min(Math.min(this.x1, this.x2), Math.min(this.ctrlx1, this.ctrlx2));
var top=Math.min(Math.min(this.y1, this.y2), Math.min(this.ctrly1, this.ctrly2));
var right=Math.max(Math.max(this.x1, this.x2), Math.max(this.ctrlx1, this.ctrlx2));
var bottom=Math.max(Math.max(this.y1, this.y2), Math.max(this.ctrly1, this.ctrly2));
return Clazz.new_($I$(2,1).c$$F$F$F$F,[left, top, right - left, bottom - top]);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.CubicCurve2D, "Double", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.geom.CubicCurve2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['x1','y1','ctrlx1','ctrly1','ctrlx2','ctrly2','x2','y2']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$D$D$D$D$D$D$D$D',  function (x1, y1, ctrlx1, ctrly1, ctrlx2, ctrly2, x2, y2) {
Clazz.super_(C$, this);
this.setCurve$D$D$D$D$D$D$D$D(x1, y1, ctrlx1, ctrly1, ctrlx2, ctrly2, x2, y2);
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

Clazz.newMeth(C$, 'getCtrlX1$',  function () {
return this.ctrlx1;
});

Clazz.newMeth(C$, 'getCtrlY1$',  function () {
return this.ctrly1;
});

Clazz.newMeth(C$, 'getCtrlP1$',  function () {
return Clazz.new_($I$(3,1).c$$D$D,[this.ctrlx1, this.ctrly1]);
});

Clazz.newMeth(C$, 'getCtrlX2$',  function () {
return this.ctrlx2;
});

Clazz.newMeth(C$, 'getCtrlY2$',  function () {
return this.ctrly2;
});

Clazz.newMeth(C$, 'getCtrlP2$',  function () {
return Clazz.new_($I$(3,1).c$$D$D,[this.ctrlx2, this.ctrly2]);
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

Clazz.newMeth(C$, 'setCurve$D$D$D$D$D$D$D$D',  function (x1, y1, ctrlx1, ctrly1, ctrlx2, ctrly2, x2, y2) {
this.x1=x1;
this.y1=y1;
this.ctrlx1=ctrlx1;
this.ctrly1=ctrly1;
this.ctrlx2=ctrlx2;
this.ctrly2=ctrly2;
this.x2=x2;
this.y2=y2;
});

Clazz.newMeth(C$, 'getBounds2D$',  function () {
var left=Math.min(Math.min(this.x1, this.x2), Math.min(this.ctrlx1, this.ctrlx2));
var top=Math.min(Math.min(this.y1, this.y2), Math.min(this.ctrly1, this.ctrly2));
var right=Math.max(Math.max(this.x1, this.x2), Math.max(this.ctrlx1, this.ctrlx2));
var bottom=Math.max(Math.max(this.y1, this.y2), Math.max(this.ctrly1, this.ctrly2));
return Clazz.new_($I$(4,1).c$$D$D$D$D,[left, top, right - left, bottom - top]);
});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
