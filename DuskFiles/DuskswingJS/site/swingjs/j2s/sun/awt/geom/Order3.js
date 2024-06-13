(function(){var P$=Clazz.newPackage("sun.awt.geom"),I$=[[0,'java.awt.geom.QuadCurve2D','sun.awt.geom.Order2','sun.awt.geom.Curve']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Order3", null, 'sun.awt.geom.Curve');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['x0','y0','cx0','cy0','cx1','cy1','x1','y1','xmin','xmax','xcoeff0','xcoeff1','xcoeff2','xcoeff3','ycoeff0','ycoeff1','ycoeff2','ycoeff3','TforY1','YforT1','TforY2','YforT2','TforY3','YforT3']]]

Clazz.newMeth(C$, 'insert$java_util_Vector$DA$D$D$D$D$D$D$D$D$I',  function (curves, tmp, x0, y0, cx0, cy0, cx1, cy1, x1, y1, direction) {
var numparams=C$.getHorizontalParams$D$D$D$D$DA(y0, cy0, cy1, y1, tmp);
if (numparams == 0) {
C$.addInstance$java_util_Vector$D$D$D$D$D$D$D$D$I(curves, x0, y0, cx0, cy0, cx1, cy1, x1, y1, direction);
return;
}tmp[3]=x0;
tmp[4]=y0;
tmp[5]=cx0;
tmp[6]=cy0;
tmp[7]=cx1;
tmp[8]=cy1;
tmp[9]=x1;
tmp[10]=y1;
var t=tmp[0];
if (numparams > 1 && t > tmp[1]  ) {
tmp[0]=tmp[1];
tmp[1]=t;
t=tmp[0];
}C$.split$DA$I$D(tmp, 3, t);
if (numparams > 1) {
t=(tmp[1] - t) / (1 - t);
C$.split$DA$I$D(tmp, 9, t);
}var index=3;
if (direction == -1) {
index+=numparams * 6;
}while (numparams >= 0){
C$.addInstance$java_util_Vector$D$D$D$D$D$D$D$D$I(curves, tmp[index + 0], tmp[index + 1], tmp[index + 2], tmp[index + 3], tmp[index + 4], tmp[index + 5], tmp[index + 6], tmp[index + 7], direction);
--numparams;
if (direction == 1) {
index+=6;
} else {
index-=6;
}}
}, 1);

Clazz.newMeth(C$, 'addInstance$java_util_Vector$D$D$D$D$D$D$D$D$I',  function (curves, x0, y0, cx0, cy0, cx1, cy1, x1, y1, direction) {
if (y0 > y1 ) {
curves.add$O(Clazz.new_(C$.c$$D$D$D$D$D$D$D$D$I,[x1, y1, cx1, cy1, cx0, cy0, x0, y0, -direction]));
} else if (y1 > y0 ) {
curves.add$O(Clazz.new_(C$.c$$D$D$D$D$D$D$D$D$I,[x0, y0, cx0, cy0, cx1, cy1, x1, y1, direction]));
}}, 1);

Clazz.newMeth(C$, 'getHorizontalParams$D$D$D$D$DA',  function (c0, cp0, cp1, c1, ret) {
if (c0 <= cp0  && cp0 <= cp1   && cp1 <= c1  ) {
return 0;
}c1-=cp1;
cp1-=cp0;
cp0-=c0;
ret[0]=cp0;
ret[1]=(cp1 - cp0) * 2;
ret[2]=(c1 - cp1 - cp1  + cp0);
var numroots=$I$(1).solveQuadratic$DA$DA(ret, ret);
var j=0;
for (var i=0; i < numroots; i++) {
var t=ret[i];
if (t > 0  && t < 1  ) {
if (j < i) {
ret[j]=t;
}++j;
}}
return j;
}, 1);

Clazz.newMeth(C$, 'split$DA$I$D',  function (coords, pos, t) {
var x0;
var y0;
var cx0;
var cy0;
var cx1;
var cy1;
var x1;
var y1;
coords[pos + 12]=x1=coords[pos + 6];
coords[pos + 13]=y1=coords[pos + 7];
cx1=coords[pos + 4];
cy1=coords[pos + 5];
x1=cx1 + (x1 - cx1) * t;
y1=cy1 + (y1 - cy1) * t;
x0=coords[pos + 0];
y0=coords[pos + 1];
cx0=coords[pos + 2];
cy0=coords[pos + 3];
x0=x0 + (cx0 - x0) * t;
y0=y0 + (cy0 - y0) * t;
cx0=cx0 + (cx1 - cx0) * t;
cy0=cy0 + (cy1 - cy0) * t;
cx1=cx0 + (x1 - cx0) * t;
cy1=cy0 + (y1 - cy0) * t;
cx0=x0 + (cx0 - x0) * t;
cy0=y0 + (cy0 - y0) * t;
coords[pos + 2]=x0;
coords[pos + 3]=y0;
coords[pos + 4]=cx0;
coords[pos + 5]=cy0;
coords[pos + 6]=cx0 + (cx1 - cx0) * t;
coords[pos + 7]=cy0 + (cy1 - cy0) * t;
coords[pos + 8]=cx1;
coords[pos + 9]=cy1;
coords[pos + 10]=x1;
coords[pos + 11]=y1;
}, 1);

Clazz.newMeth(C$, 'c$$D$D$D$D$D$D$D$D$I',  function (x0, y0, cx0, cy0, cx1, cy1, x1, y1, direction) {
;C$.superclazz.c$$I.apply(this,[direction]);C$.$init$.apply(this);
if (cy0 < y0 ) cy0=y0;
if (cy1 > y1 ) cy1=y1;
this.x0=x0;
this.y0=y0;
this.cx0=cx0;
this.cy0=cy0;
this.cx1=cx1;
this.cy1=cy1;
this.x1=x1;
this.y1=y1;
this.xmin=Math.min(Math.min(x0, x1), Math.min(cx0, cx1));
this.xmax=Math.max(Math.max(x0, x1), Math.max(cx0, cx1));
this.xcoeff0=x0;
this.xcoeff1=(cx0 - x0) * 3.0;
this.xcoeff2=(cx1 - cx0 - cx0  + x0) * 3.0;
this.xcoeff3=x1 - (cx1 - cx0) * 3.0 - x0;
this.ycoeff0=y0;
this.ycoeff1=(cy0 - y0) * 3.0;
this.ycoeff2=(cy1 - cy0 - cy0  + y0) * 3.0;
this.ycoeff3=y1 - (cy1 - cy0) * 3.0 - y0;
this.YforT1=this.YforT2=this.YforT3=y0;
}, 1);

Clazz.newMeth(C$, 'getOrder$',  function () {
return 3;
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
return (this.direction == 1) ? this.cx0 : this.cx1;
});

Clazz.newMeth(C$, 'getCY0$',  function () {
return (this.direction == 1) ? this.cy0 : this.cy1;
});

Clazz.newMeth(C$, 'getCX1$',  function () {
return (this.direction == -1) ? this.cx0 : this.cx1;
});

Clazz.newMeth(C$, 'getCY1$',  function () {
return (this.direction == -1) ? this.cy0 : this.cy1;
});

Clazz.newMeth(C$, 'getX1$',  function () {
return (this.direction == -1) ? this.x0 : this.x1;
});

Clazz.newMeth(C$, 'getY1$',  function () {
return (this.direction == -1) ? this.y0 : this.y1;
});

Clazz.newMeth(C$, 'TforY$D',  function (y) {
if (y <= this.y0 ) return 0;
if (y >= this.y1 ) return 1;
if (y == this.YforT1 ) return this.TforY1;
if (y == this.YforT2 ) return this.TforY2;
if (y == this.YforT3 ) return this.TforY3;
if (this.ycoeff3 == 0.0 ) {
return $I$(2).TforY$D$D$D$D(y, this.ycoeff0, this.ycoeff1, this.ycoeff2);
}var a=this.ycoeff2 / this.ycoeff3;
var b=this.ycoeff1 / this.ycoeff3;
var c=(this.ycoeff0 - y) / this.ycoeff3;
var Q=(a * a - 3.0 * b) / 9.0;
var R=(2.0 * a * a * a  - 9.0 * a * b  + 27.0 * c) / 54.0;
var R2=R * R;
var Q3=Q * Q * Q ;
var a_3=a / 3.0;
var t;
if (R2 < Q3 ) {
var theta=Math.acos(R / Math.sqrt(Q3));
Q=-2.0 * Math.sqrt(Q);
t=this.refine$D$D$D$D$D(a, b, c, y, Q * Math.cos(theta / 3.0) - a_3);
if (t < 0 ) {
t=this.refine$D$D$D$D$D(a, b, c, y, Q * Math.cos((theta + 6.283185307179586) / 3.0) - a_3);
}if (t < 0 ) {
t=this.refine$D$D$D$D$D(a, b, c, y, Q * Math.cos((theta - 6.283185307179586) / 3.0) - a_3);
}} else {
var neg=(R < 0.0 );
var S=Math.sqrt(R2 - Q3);
if (neg) {
R=-R;
}var A=Math.pow(R + S, 0.3333333333333333);
if (!neg) {
A=-A;
}var B=(A == 0.0 ) ? 0.0 : (Q / A);
t=this.refine$D$D$D$D$D(a, b, c, y, (A + B) - a_3);
}if (t < 0 ) {
var t0=0;
var t1=1;
while (true){
t=(t0 + t1) / 2;
if (t == t0  || t == t1  ) {
break;
}var yt=this.YforT$D(t);
if (yt < y ) {
t0=t;
} else if (yt > y ) {
t1=t;
} else {
break;
}}
}if (t >= 0 ) {
this.TforY3=this.TforY2;
this.YforT3=this.YforT2;
this.TforY2=this.TforY1;
this.YforT2=this.YforT1;
this.TforY1=t;
this.YforT1=y;
}return t;
});

Clazz.newMeth(C$, 'refine$D$D$D$D$D',  function (a, b, c, target, t) {
if (t < -0.1  || t > 1.1  ) {
return -1;
}var y=this.YforT$D(t);
var t0;
var t1;
if (y < target ) {
t0=t;
t1=1;
} else {
t0=0;
t1=t;
}var origt=t;
var origy=y;
var useslope=true;
while (y != target ){
if (!useslope) {
var t2=(t0 + t1) / 2;
if (t2 == t0  || t2 == t1  ) {
break;
}t=t2;
} else {
var slope=this.dYforT$D$I(t, 1);
if (slope == 0 ) {
useslope=false;
continue;
}var t2=t + ((target - y) / slope);
if (t2 == t  || t2 <= t0   || t2 >= t1  ) {
useslope=false;
continue;
}t=t2;
}y=this.YforT$D(t);
if (y < target ) {
t0=t;
} else if (y > target ) {
t1=t;
} else {
break;
}}
var verbose=false;
if (false && t >= 0   && t <= 1  ) {
y=this.YforT$D(t);
var tdiff=$I$(3).diffbits$D$D(t, origt);
var ydiff=$I$(3).diffbits$D$D(y, origy);
var yerr=$I$(3).diffbits$D$D(y, target);
if (Long.$gt(yerr,0 ) || (verbose && Long.$gt(tdiff,0 ) ) ) {
System.out.println$S("target was y = " + new Double(target).toString());
System.out.println$S("original was y = " + new Double(origy).toString() + ", t = " + new Double(origt).toString() );
System.out.println$S("final was y = " + new Double(y).toString() + ", t = " + new Double(t).toString() );
System.out.println$S("t diff is " + Long.$s(tdiff));
System.out.println$S("y diff is " + Long.$s(ydiff));
System.out.println$S("y error is " + Long.$s(yerr));
var tlow=$I$(3).prev$D(t);
var ylow=this.YforT$D(tlow);
var thi=$I$(3).next$D(t);
var yhi=this.YforT$D(thi);
if (Math.abs(target - ylow) < Math.abs(target - y)  || Math.abs(target - yhi) < Math.abs(target - y)  ) {
System.out.println$S("adjacent y's = [" + new Double(ylow).toString() + ", " + new Double(yhi).toString() + "]" );
}}}return (t > 1 ) ? -1 : t;
});

Clazz.newMeth(C$, 'XforY$D',  function (y) {
if (y <= this.y0 ) {
return this.x0;
}if (y >= this.y1 ) {
return this.x1;
}return this.XforT$D(this.TforY$D(y));
});

Clazz.newMeth(C$, 'XforT$D',  function (t) {
return (((this.xcoeff3 * t) + this.xcoeff2) * t + this.xcoeff1) * t + this.xcoeff0;
});

Clazz.newMeth(C$, 'YforT$D',  function (t) {
return (((this.ycoeff3 * t) + this.ycoeff2) * t + this.ycoeff1) * t + this.ycoeff0;
});

Clazz.newMeth(C$, 'dXforT$D$I',  function (t, deriv) {
switch (deriv) {
case 0:
return (((this.xcoeff3 * t) + this.xcoeff2) * t + this.xcoeff1) * t + this.xcoeff0;
case 1:
return ((3 * this.xcoeff3 * t ) + 2 * this.xcoeff2) * t + this.xcoeff1;
case 2:
return (6 * this.xcoeff3 * t ) + 2 * this.xcoeff2;
case 3:
return 6 * this.xcoeff3;
default:
return 0;
}
});

Clazz.newMeth(C$, 'dYforT$D$I',  function (t, deriv) {
switch (deriv) {
case 0:
return (((this.ycoeff3 * t) + this.ycoeff2) * t + this.ycoeff1) * t + this.ycoeff0;
case 1:
return ((3 * this.ycoeff3 * t ) + 2 * this.ycoeff2) * t + this.ycoeff1;
case 2:
return (6 * this.ycoeff3 * t ) + 2 * this.ycoeff2;
case 3:
return 6 * this.ycoeff3;
default:
return 0;
}
});

Clazz.newMeth(C$, 'nextVertical$D$D',  function (t0, t1) {
var eqn=Clazz.array(Double.TYPE, -1, [this.xcoeff1, 2 * this.xcoeff2, 3 * this.xcoeff3]);
var numroots=$I$(1).solveQuadratic$DA$DA(eqn, eqn);
for (var i=0; i < numroots; i++) {
if (eqn[i] > t0  && eqn[i] < t1  ) {
t1=eqn[i];
}}
return t1;
});

Clazz.newMeth(C$, 'enlarge$java_awt_geom_Rectangle2D',  function (r) {
r.add$D$D(this.x0, this.y0);
var eqn=Clazz.array(Double.TYPE, -1, [this.xcoeff1, 2 * this.xcoeff2, 3 * this.xcoeff3]);
var numroots=$I$(1).solveQuadratic$DA$DA(eqn, eqn);
for (var i=0; i < numroots; i++) {
var t=eqn[i];
if (t > 0  && t < 1  ) {
r.add$D$D(this.XforT$D(t), this.YforT$D(t));
}}
r.add$D$D(this.x1, this.y1);
});

Clazz.newMeth(C$, 'getSubCurve$D$D$I',  function (ystart, yend, dir) {
if (ystart <= this.y0  && yend >= this.y1  ) {
return this.getWithDirection$I(dir);
}var eqn=Clazz.array(Double.TYPE, [14]);
var t0;
var t1;
t0=this.TforY$D(ystart);
t1=this.TforY$D(yend);
eqn[0]=this.x0;
eqn[1]=this.y0;
eqn[2]=this.cx0;
eqn[3]=this.cy0;
eqn[4]=this.cx1;
eqn[5]=this.cy1;
eqn[6]=this.x1;
eqn[7]=this.y1;
if (t0 > t1 ) {
var t=t0;
t0=t1;
t1=t;
}if (t1 < 1 ) {
C$.split$DA$I$D(eqn, 0, t1);
}var i;
if (t0 <= 0 ) {
i=0;
} else {
C$.split$DA$I$D(eqn, 0, t0 / t1);
i=6;
}return Clazz.new_(C$.c$$D$D$D$D$D$D$D$D$I,[eqn[i + 0], ystart, eqn[i + 2], eqn[i + 3], eqn[i + 4], eqn[i + 5], eqn[i + 6], yend, dir]);
});

Clazz.newMeth(C$, 'getReversedCurve$',  function () {
return Clazz.new_(C$.c$$D$D$D$D$D$D$D$D$I,[this.x0, this.y0, this.cx0, this.cy0, this.cx1, this.cy1, this.x1, this.y1, -this.direction]);
});

Clazz.newMeth(C$, 'getSegment$DA',  function (coords) {
if (this.direction == 1) {
coords[0]=this.cx0;
coords[1]=this.cy0;
coords[2]=this.cx1;
coords[3]=this.cy1;
coords[4]=this.x1;
coords[5]=this.y1;
} else {
coords[0]=this.cx1;
coords[1]=this.cy1;
coords[2]=this.cx0;
coords[3]=this.cy0;
coords[4]=this.x0;
coords[5]=this.y0;
}return 3;
});

Clazz.newMeth(C$, 'controlPointString$',  function () {
return (("(" + new Double($I$(3,"round$D",[this.getCX0$()])).toString() + ", " + new Double($I$(3,"round$D",[this.getCY0$()])).toString() + "), " ) + ("(" + new Double($I$(3,"round$D",[this.getCX1$()])).toString() + ", " + new Double($I$(3,"round$D",[this.getCY1$()])).toString() + "), " ));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
