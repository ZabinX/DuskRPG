(function(){var P$=Clazz.newPackage("sun.awt.geom"),I$=[[0,'sun.awt.geom.Order0','sun.awt.geom.Order1','sun.awt.geom.Order2','sun.awt.geom.Order3','InternalError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Curve");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['direction']]]

Clazz.newMeth(C$, 'insertMove$java_util_Vector$D$D',  function (curves, x, y) {
curves.add$O(Clazz.new_($I$(1,1).c$$D$D,[x, y]));
}, 1);

Clazz.newMeth(C$, 'insertLine$java_util_Vector$D$D$D$D',  function (curves, x0, y0, x1, y1) {
if (y0 < y1 ) {
curves.add$O(Clazz.new_($I$(2,1).c$$D$D$D$D$I,[x0, y0, x1, y1, 1]));
} else if (y0 > y1 ) {
curves.add$O(Clazz.new_($I$(2,1).c$$D$D$D$D$I,[x1, y1, x0, y0, -1]));
} else {
}}, 1);

Clazz.newMeth(C$, 'insertQuad$java_util_Vector$D$D$DA',  function (curves, x0, y0, coords) {
var y1=coords[3];
if (y0 > y1 ) {
$I$(3).insert$java_util_Vector$DA$D$D$D$D$D$D$I(curves, coords, coords[2], y1, coords[0], coords[1], x0, y0, -1);
} else if (y0 == y1  && y0 == coords[1]  ) {
return;
} else {
$I$(3).insert$java_util_Vector$DA$D$D$D$D$D$D$I(curves, coords, x0, y0, coords[0], coords[1], coords[2], y1, 1);
}}, 1);

Clazz.newMeth(C$, 'insertCubic$java_util_Vector$D$D$DA',  function (curves, x0, y0, coords) {
var y1=coords[5];
if (y0 > y1 ) {
$I$(4).insert$java_util_Vector$DA$D$D$D$D$D$D$D$D$I(curves, coords, coords[4], y1, coords[2], coords[3], coords[0], coords[1], x0, y0, -1);
} else if (y0 == y1  && y0 == coords[1]   && y0 == coords[3]  ) {
return;
} else {
$I$(4).insert$java_util_Vector$DA$D$D$D$D$D$D$D$D$I(curves, coords, x0, y0, coords[0], coords[1], coords[2], coords[3], coords[4], y1, 1);
}}, 1);

Clazz.newMeth(C$, 'pointCrossingsForPath$java_awt_geom_PathIterator$D$D',  function (pi, px, py) {
if (pi.isDone$()) {
return 0;
}var coords=Clazz.array(Double.TYPE, [6]);
if (pi.currentSegment$DA(coords) != 0) {
throw Clazz.new_(Clazz.load('java.awt.geom.IllegalPathStateException').c$$S,["missing initial moveto in path definition"]);
}pi.next$();
var movx=coords[0];
var movy=coords[1];
var curx=movx;
var cury=movy;
var endx;
var endy;
var crossings=0;
while (!pi.isDone$()){
switch (pi.currentSegment$DA(coords)) {
case 0:
if (cury != movy ) {
crossings+=C$.pointCrossingsForLine$D$D$D$D$D$D(px, py, curx, cury, movx, movy);
}movx=curx=coords[0];
movy=cury=coords[1];
break;
case 1:
endx=coords[0];
endy=coords[1];
crossings+=C$.pointCrossingsForLine$D$D$D$D$D$D(px, py, curx, cury, endx, endy);
curx=endx;
cury=endy;
break;
case 2:
endx=coords[2];
endy=coords[3];
crossings+=C$.pointCrossingsForQuad$D$D$D$D$D$D$D$D$I(px, py, curx, cury, coords[0], coords[1], endx, endy, 0);
curx=endx;
cury=endy;
break;
case 3:
endx=coords[4];
endy=coords[5];
crossings+=C$.pointCrossingsForCubic$D$D$D$D$D$D$D$D$D$D$I(px, py, curx, cury, coords[0], coords[1], coords[2], coords[3], endx, endy, 0);
curx=endx;
cury=endy;
break;
case 4:
if (cury != movy ) {
crossings+=C$.pointCrossingsForLine$D$D$D$D$D$D(px, py, curx, cury, movx, movy);
}curx=movx;
cury=movy;
break;
}
pi.next$();
}
if (cury != movy ) {
crossings+=C$.pointCrossingsForLine$D$D$D$D$D$D(px, py, curx, cury, movx, movy);
}return crossings;
}, 1);

Clazz.newMeth(C$, 'pointCrossingsForLine$D$D$D$D$D$D',  function (px, py, x0, y0, x1, y1) {
if (py < y0  && py < y1  ) return 0;
if (py >= y0  && py >= y1  ) return 0;
if (px >= x0  && px >= x1  ) return 0;
if (px < x0  && px < x1  ) return (y0 < y1 ) ? 1 : -1;
var xintercept=x0 + (py - y0) * (x1 - x0) / (y1 - y0);
if (px >= xintercept ) return 0;
return (y0 < y1 ) ? 1 : -1;
}, 1);

Clazz.newMeth(C$, 'pointCrossingsForQuad$D$D$D$D$D$D$D$D$I',  function (px, py, x0, y0, xc, yc, x1, y1, level) {
if (py < y0  && py < yc   && py < y1  ) return 0;
if (py >= y0  && py >= yc   && py >= y1  ) return 0;
if (px >= x0  && px >= xc   && px >= x1  ) return 0;
if (px < x0  && px < xc   && px < x1  ) {
if (py >= y0 ) {
if (py < y1 ) return 1;
} else {
if (py >= y1 ) return -1;
}return 0;
}if (level > 52) return C$.pointCrossingsForLine$D$D$D$D$D$D(px, py, x0, y0, x1, y1);
var x0c=(x0 + xc) / 2;
var y0c=(y0 + yc) / 2;
var xc1=(xc + x1) / 2;
var yc1=(yc + y1) / 2;
xc=(x0c + xc1) / 2;
yc=(y0c + yc1) / 2;
if (Double.isNaN$D(xc) || Double.isNaN$D(yc) ) {
return 0;
}return (C$.pointCrossingsForQuad$D$D$D$D$D$D$D$D$I(px, py, x0, y0, x0c, y0c, xc, yc, level + 1) + C$.pointCrossingsForQuad$D$D$D$D$D$D$D$D$I(px, py, xc, yc, xc1, yc1, x1, y1, level + 1));
}, 1);

Clazz.newMeth(C$, 'pointCrossingsForCubic$D$D$D$D$D$D$D$D$D$D$I',  function (px, py, x0, y0, xc0, yc0, xc1, yc1, x1, y1, level) {
if (py < y0  && py < yc0   && py < yc1   && py < y1  ) return 0;
if (py >= y0  && py >= yc0   && py >= yc1   && py >= y1  ) return 0;
if (px >= x0  && px >= xc0   && px >= xc1   && px >= x1  ) return 0;
if (px < x0  && px < xc0   && px < xc1   && px < x1  ) {
if (py >= y0 ) {
if (py < y1 ) return 1;
} else {
if (py >= y1 ) return -1;
}return 0;
}if (level > 52) return C$.pointCrossingsForLine$D$D$D$D$D$D(px, py, x0, y0, x1, y1);
var xmid=(xc0 + xc1) / 2;
var ymid=(yc0 + yc1) / 2;
xc0=(x0 + xc0) / 2;
yc0=(y0 + yc0) / 2;
xc1=(xc1 + x1) / 2;
yc1=(yc1 + y1) / 2;
var xc0m=(xc0 + xmid) / 2;
var yc0m=(yc0 + ymid) / 2;
var xmc1=(xmid + xc1) / 2;
var ymc1=(ymid + yc1) / 2;
xmid=(xc0m + xmc1) / 2;
ymid=(yc0m + ymc1) / 2;
if (Double.isNaN$D(xmid) || Double.isNaN$D(ymid) ) {
return 0;
}return (C$.pointCrossingsForCubic$D$D$D$D$D$D$D$D$D$D$I(px, py, x0, y0, xc0, yc0, xc0m, yc0m, xmid, ymid, level + 1) + C$.pointCrossingsForCubic$D$D$D$D$D$D$D$D$D$D$I(px, py, xmid, ymid, xmc1, ymc1, xc1, yc1, x1, y1, level + 1));
}, 1);

Clazz.newMeth(C$, 'rectCrossingsForPath$java_awt_geom_PathIterator$D$D$D$D',  function (pi, rxmin, rymin, rxmax, rymax) {
if (rxmax <= rxmin  || rymax <= rymin  ) {
return 0;
}if (pi.isDone$()) {
return 0;
}var coords=Clazz.array(Double.TYPE, [6]);
if (pi.currentSegment$DA(coords) != 0) {
throw Clazz.new_(Clazz.load('java.awt.geom.IllegalPathStateException').c$$S,["missing initial moveto in path definition"]);
}pi.next$();
var curx;
var cury;
var movx;
var movy;
var endx;
var endy;
curx=movx=coords[0];
cury=movy=coords[1];
var crossings=0;
while (crossings != -2147483648 && !pi.isDone$() ){
switch (pi.currentSegment$DA(coords)) {
case 0:
if (curx != movx  || cury != movy  ) {
crossings=C$.rectCrossingsForLine$I$D$D$D$D$D$D$D$D(crossings, rxmin, rymin, rxmax, rymax, curx, cury, movx, movy);
}movx=curx=coords[0];
movy=cury=coords[1];
break;
case 1:
endx=coords[0];
endy=coords[1];
crossings=C$.rectCrossingsForLine$I$D$D$D$D$D$D$D$D(crossings, rxmin, rymin, rxmax, rymax, curx, cury, endx, endy);
curx=endx;
cury=endy;
break;
case 2:
endx=coords[2];
endy=coords[3];
crossings=C$.rectCrossingsForQuad$I$D$D$D$D$D$D$D$D$D$D$I(crossings, rxmin, rymin, rxmax, rymax, curx, cury, coords[0], coords[1], endx, endy, 0);
curx=endx;
cury=endy;
break;
case 3:
endx=coords[4];
endy=coords[5];
crossings=C$.rectCrossingsForCubic$I$D$D$D$D$D$D$D$D$D$D$D$D$I(crossings, rxmin, rymin, rxmax, rymax, curx, cury, coords[0], coords[1], coords[2], coords[3], endx, endy, 0);
curx=endx;
cury=endy;
break;
case 4:
if (curx != movx  || cury != movy  ) {
crossings=C$.rectCrossingsForLine$I$D$D$D$D$D$D$D$D(crossings, rxmin, rymin, rxmax, rymax, curx, cury, movx, movy);
}curx=movx;
cury=movy;
break;
}
pi.next$();
}
if (crossings != -2147483648 && (curx != movx  || cury != movy  ) ) {
crossings=C$.rectCrossingsForLine$I$D$D$D$D$D$D$D$D(crossings, rxmin, rymin, rxmax, rymax, curx, cury, movx, movy);
}return crossings;
}, 1);

Clazz.newMeth(C$, 'rectCrossingsForLine$I$D$D$D$D$D$D$D$D',  function (crossings, rxmin, rymin, rxmax, rymax, x0, y0, x1, y1) {
if (y0 >= rymax  && y1 >= rymax  ) return crossings;
if (y0 <= rymin  && y1 <= rymin  ) return crossings;
if (x0 <= rxmin  && x1 <= rxmin  ) return crossings;
if (x0 >= rxmax  && x1 >= rxmax  ) {
if (y0 < y1 ) {
if (y0 <= rymin ) ++crossings;
if (y1 >= rymax ) ++crossings;
} else if (y1 < y0 ) {
if (y1 <= rymin ) --crossings;
if (y0 >= rymax ) --crossings;
}return crossings;
}if ((x0 > rxmin  && x0 < rxmax   && y0 > rymin   && y0 < rymax  ) || (x1 > rxmin  && x1 < rxmax   && y1 > rymin   && y1 < rymax  ) ) {
return -2147483648;
}var xi0=x0;
if (y0 < rymin ) {
xi0+=((rymin - y0) * (x1 - x0) / (y1 - y0));
} else if (y0 > rymax ) {
xi0+=((rymax - y0) * (x1 - x0) / (y1 - y0));
}var xi1=x1;
if (y1 < rymin ) {
xi1+=((rymin - y1) * (x0 - x1) / (y0 - y1));
} else if (y1 > rymax ) {
xi1+=((rymax - y1) * (x0 - x1) / (y0 - y1));
}if (xi0 <= rxmin  && xi1 <= rxmin  ) return crossings;
if (xi0 >= rxmax  && xi1 >= rxmax  ) {
if (y0 < y1 ) {
if (y0 <= rymin ) ++crossings;
if (y1 >= rymax ) ++crossings;
} else if (y1 < y0 ) {
if (y1 <= rymin ) --crossings;
if (y0 >= rymax ) --crossings;
}return crossings;
}return -2147483648;
}, 1);

Clazz.newMeth(C$, 'rectCrossingsForQuad$I$D$D$D$D$D$D$D$D$D$D$I',  function (crossings, rxmin, rymin, rxmax, rymax, x0, y0, xc, yc, x1, y1, level) {
if (y0 >= rymax  && yc >= rymax   && y1 >= rymax  ) return crossings;
if (y0 <= rymin  && yc <= rymin   && y1 <= rymin  ) return crossings;
if (x0 <= rxmin  && xc <= rxmin   && x1 <= rxmin  ) return crossings;
if (x0 >= rxmax  && xc >= rxmax   && x1 >= rxmax  ) {
if (y0 < y1 ) {
if (y0 <= rymin  && y1 > rymin  ) ++crossings;
if (y0 < rymax  && y1 >= rymax  ) ++crossings;
} else if (y1 < y0 ) {
if (y1 <= rymin  && y0 > rymin  ) --crossings;
if (y1 < rymax  && y0 >= rymax  ) --crossings;
}return crossings;
}if ((x0 < rxmax  && x0 > rxmin   && y0 < rymax   && y0 > rymin  ) || (x1 < rxmax  && x1 > rxmin   && y1 < rymax   && y1 > rymin  ) ) {
return -2147483648;
}if (level > 52) {
return C$.rectCrossingsForLine$I$D$D$D$D$D$D$D$D(crossings, rxmin, rymin, rxmax, rymax, x0, y0, x1, y1);
}var x0c=(x0 + xc) / 2;
var y0c=(y0 + yc) / 2;
var xc1=(xc + x1) / 2;
var yc1=(yc + y1) / 2;
xc=(x0c + xc1) / 2;
yc=(y0c + yc1) / 2;
if (Double.isNaN$D(xc) || Double.isNaN$D(yc) ) {
return 0;
}crossings=C$.rectCrossingsForQuad$I$D$D$D$D$D$D$D$D$D$D$I(crossings, rxmin, rymin, rxmax, rymax, x0, y0, x0c, y0c, xc, yc, level + 1);
if (crossings != -2147483648) {
crossings=C$.rectCrossingsForQuad$I$D$D$D$D$D$D$D$D$D$D$I(crossings, rxmin, rymin, rxmax, rymax, xc, yc, xc1, yc1, x1, y1, level + 1);
}return crossings;
}, 1);

Clazz.newMeth(C$, 'rectCrossingsForCubic$I$D$D$D$D$D$D$D$D$D$D$D$D$I',  function (crossings, rxmin, rymin, rxmax, rymax, x0, y0, xc0, yc0, xc1, yc1, x1, y1, level) {
if (y0 >= rymax  && yc0 >= rymax   && yc1 >= rymax   && y1 >= rymax  ) {
return crossings;
}if (y0 <= rymin  && yc0 <= rymin   && yc1 <= rymin   && y1 <= rymin  ) {
return crossings;
}if (x0 <= rxmin  && xc0 <= rxmin   && xc1 <= rxmin   && x1 <= rxmin  ) {
return crossings;
}if (x0 >= rxmax  && xc0 >= rxmax   && xc1 >= rxmax   && x1 >= rxmax  ) {
if (y0 < y1 ) {
if (y0 <= rymin  && y1 > rymin  ) ++crossings;
if (y0 < rymax  && y1 >= rymax  ) ++crossings;
} else if (y1 < y0 ) {
if (y1 <= rymin  && y0 > rymin  ) --crossings;
if (y1 < rymax  && y0 >= rymax  ) --crossings;
}return crossings;
}if ((x0 > rxmin  && x0 < rxmax   && y0 > rymin   && y0 < rymax  ) || (x1 > rxmin  && x1 < rxmax   && y1 > rymin   && y1 < rymax  ) ) {
return -2147483648;
}if (level > 52) {
return C$.rectCrossingsForLine$I$D$D$D$D$D$D$D$D(crossings, rxmin, rymin, rxmax, rymax, x0, y0, x1, y1);
}var xmid=(xc0 + xc1) / 2;
var ymid=(yc0 + yc1) / 2;
xc0=(x0 + xc0) / 2;
yc0=(y0 + yc0) / 2;
xc1=(xc1 + x1) / 2;
yc1=(yc1 + y1) / 2;
var xc0m=(xc0 + xmid) / 2;
var yc0m=(yc0 + ymid) / 2;
var xmc1=(xmid + xc1) / 2;
var ymc1=(ymid + yc1) / 2;
xmid=(xc0m + xmc1) / 2;
ymid=(yc0m + ymc1) / 2;
if (Double.isNaN$D(xmid) || Double.isNaN$D(ymid) ) {
return 0;
}crossings=C$.rectCrossingsForCubic$I$D$D$D$D$D$D$D$D$D$D$D$D$I(crossings, rxmin, rymin, rxmax, rymax, x0, y0, xc0, yc0, xc0m, yc0m, xmid, ymid, level + 1);
if (crossings != -2147483648) {
crossings=C$.rectCrossingsForCubic$I$D$D$D$D$D$D$D$D$D$D$D$D$I(crossings, rxmin, rymin, rxmax, rymax, xmid, ymid, xmc1, ymc1, xc1, yc1, x1, y1, level + 1);
}return crossings;
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (direction) {
;C$.$init$.apply(this);
this.direction=direction;
}, 1);

Clazz.newMeth(C$, 'getDirection$',  function () {
return this.direction;
});

Clazz.newMeth(C$, 'getWithDirection$I',  function (direction) {
return (this.direction == direction ? this : this.getReversedCurve$());
});

Clazz.newMeth(C$, 'round$D',  function (v) {
return v;
}, 1);

Clazz.newMeth(C$, 'orderof$D$D',  function (x1, x2) {
if (x1 < x2 ) {
return -1;
}if (x1 > x2 ) {
return 1;
}return 0;
}, 1);

Clazz.newMeth(C$, 'signeddiffbits$D$D',  function (y1, y2) {
return (Long.$sub(Double.doubleToLongBits$D(y1),Double.doubleToLongBits$D(y2)));
}, 1);

Clazz.newMeth(C$, 'diffbits$D$D',  function (y1, y2) {
return Math.abs$J(Long.$sub(Double.doubleToLongBits$D(y1),Double.doubleToLongBits$D(y2)));
}, 1);

Clazz.newMeth(C$, 'prev$D',  function (v) {
return Double.longBitsToDouble$J(Long.$sub(Double.doubleToLongBits$D(v),1));
}, 1);

Clazz.newMeth(C$, 'next$D',  function (v) {
return Double.longBitsToDouble$J(Long.$add(Double.doubleToLongBits$D(v),1));
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return ("Curve[" + this.getOrder$() + ", " + ("(" + new Double(C$.round$D(this.getX0$())).toString() + ", " + new Double(C$.round$D(this.getY0$())).toString() + "), " ) + this.controlPointString$() + ("(" + new Double(C$.round$D(this.getX1$())).toString() + ", " + new Double(C$.round$D(this.getY1$())).toString() + "), " ) + (this.direction == 1 ? "D" : "U") + "]" );
});

Clazz.newMeth(C$, 'controlPointString$',  function () {
return "";
});

Clazz.newMeth(C$, 'crossingsFor$D$D',  function (x, y) {
if (y >= this.getYTop$()  && y < this.getYBot$()  ) {
if (x < this.getXMax$()  && (x < this.getXMin$()  || x < this.XforY$D(y)  ) ) {
return 1;
}}return 0;
});

Clazz.newMeth(C$, 'accumulateCrossings$sun_awt_geom_Crossings',  function (c) {
var xhi=c.getXHi$();
if (this.getXMin$() >= xhi ) {
return false;
}var xlo=c.getXLo$();
var ylo=c.getYLo$();
var yhi=c.getYHi$();
var y0=this.getYTop$();
var y1=this.getYBot$();
var tstart;
var ystart;
var tend;
var yend;
if (y0 < ylo ) {
if (y1 <= ylo ) {
return false;
}ystart=ylo;
tstart=this.TforY$D(ylo);
} else {
if (y0 >= yhi ) {
return false;
}ystart=y0;
tstart=0;
}if (y1 > yhi ) {
yend=yhi;
tend=this.TforY$D(yhi);
} else {
yend=y1;
tend=1;
}var hitLo=false;
var hitHi=false;
while (true){
var x=this.XforT$D(tstart);
if (x < xhi ) {
if (hitHi || x > xlo  ) {
return true;
}hitLo=true;
} else {
if (hitLo) {
return true;
}hitHi=true;
}if (tstart >= tend ) {
break;
}tstart=this.nextVertical$D$D(tstart, tend);
}
if (hitLo) {
c.record$D$D$I(ystart, yend, this.direction);
}return false;
});

Clazz.newMeth(C$, 'getSubCurve$D$D',  function (ystart, yend) {
return this.getSubCurve$D$D$I(ystart, yend, this.direction);
});

Clazz.newMeth(C$, 'compareTo$sun_awt_geom_Curve$DA',  function (that, yrange) {
var y0=yrange[0];
var y1=yrange[1];
y1=Math.min(Math.min(y1, this.getYBot$()), that.getYBot$());
if (y1 <= yrange[0] ) {
System.err.println$S("this == " + this);
System.err.println$S("that == " + that);
System.out.println$S("target range = " + new Double(yrange[0]).toString() + "=>" + new Double(yrange[1]).toString() );
throw Clazz.new_(["sun.awt.geom.Curve backstepping from " + new Double(yrange[0]).toString() + " to " + new Double(y1).toString() ],$I$(5,1).c$$S);
}yrange[1]=y1;
if (this.getXMax$() <= that.getXMin$() ) {
if (this.getXMin$() == that.getXMax$() ) {
return 0;
}return -1;
}if (this.getXMin$() >= that.getXMax$() ) {
return 1;
}var s0=this.TforY$D(y0);
var ys0=this.YforT$D(s0);
if (ys0 < y0 ) {
s0=this.refineTforY$D$D$D(s0, ys0, y0);
ys0=this.YforT$D(s0);
}var s1=this.TforY$D(y1);
if (this.YforT$D(s1) < y0 ) {
s1=this.refineTforY$D$D$D(s1, this.YforT$D(s1), y0);
}var t0=that.TforY$D(y0);
var yt0=that.YforT$D(t0);
if (yt0 < y0 ) {
t0=that.refineTforY$D$D$D(t0, yt0, y0);
yt0=that.YforT$D(t0);
}var t1=that.TforY$D(y1);
if (that.YforT$D(t1) < y0 ) {
t1=that.refineTforY$D$D$D(t1, that.YforT$D(t1), y0);
}var xs0=this.XforT$D(s0);
var xt0=that.XforT$D(t0);
var scale=Math.max(Math.abs(y0), Math.abs(y1));
var ymin=Math.max(scale * 1.0E-14, 1.0E-300);
if (this.fairlyClose$D$D(xs0, xt0)) {
var bump=ymin;
var maxbump=Math.min(ymin * 1.0E13, (y1 - y0) * 0.1);
var y=y0 + bump;
while (y <= y1 ){
if (this.fairlyClose$D$D(this.XforY$D(y), that.XforY$D(y))) {
if ((bump*=2) > maxbump ) {
bump=maxbump;
}} else {
y-=bump;
while (true){
bump/=2;
var newy=y + bump;
if (newy <= y ) {
break;
}if (this.fairlyClose$D$D(this.XforY$D(newy), that.XforY$D(newy))) {
y=newy;
}}
break;
}y+=bump;
}
if (y > y0 ) {
if (y < y1 ) {
yrange[1]=y;
}return 0;
}}if (ymin <= 0 ) {
System.out.println$S("ymin = " + new Double(ymin).toString());
}while (s0 < s1  && t0 < t1  ){
var sh=this.nextVertical$D$D(s0, s1);
var xsh=this.XforT$D(sh);
var ysh=this.YforT$D(sh);
var th=that.nextVertical$D$D(t0, t1);
var xth=that.XforT$D(th);
var yth=that.YforT$D(th);
try {
if (this.findIntersect$sun_awt_geom_Curve$DA$D$I$I$D$D$D$D$D$D$D$D$D$D$D$D(that, yrange, ymin, 0, 0, s0, xs0, ys0, sh, xsh, ysh, t0, xt0, yt0, th, xth, yth)) {
break;
}} catch (t) {
System.err.println$S("Error: " + t);
System.err.println$S("y range was " + new Double(yrange[0]).toString() + "=>" + new Double(yrange[1]).toString() );
System.err.println$S("s y range is " + new Double(ys0).toString() + "=>" + new Double(ysh).toString() );
System.err.println$S("t y range is " + new Double(yt0).toString() + "=>" + new Double(yth).toString() );
System.err.println$S("ymin is " + new Double(ymin).toString());
return 0;
}
if (ysh < yth ) {
if (ysh > yrange[0] ) {
if (ysh < yrange[1] ) {
yrange[1]=ysh;
}break;
}s0=sh;
xs0=xsh;
ys0=ysh;
} else {
if (yth > yrange[0] ) {
if (yth < yrange[1] ) {
yrange[1]=yth;
}break;
}t0=th;
xt0=xth;
yt0=yth;
}}
var ymid=(yrange[0] + yrange[1]) / 2;
return C$.orderof$D$D(this.XforY$D(ymid), that.XforY$D(ymid));
});

Clazz.newMeth(C$, 'findIntersect$sun_awt_geom_Curve$DA$D$I$I$D$D$D$D$D$D$D$D$D$D$D$D',  function (that, yrange, ymin, slevel, tlevel, s0, xs0, ys0, s1, xs1, ys1, t0, xt0, yt0, t1, xt1, yt1) {
if (ys0 > yt1  || yt0 > ys1  ) {
return false;
}if (Math.min(xs0, xs1) > Math.max(xt0, xt1)  || Math.max(xs0, xs1) < Math.min(xt0, xt1)  ) {
return false;
}if (s1 - s0 > 0.001 ) {
var s=(s0 + s1) / 2;
var xs=this.XforT$D(s);
var ys=this.YforT$D(s);
if (s == s0  || s == s1  ) {
System.out.println$S("s0 = " + new Double(s0).toString());
System.out.println$S("s1 = " + new Double(s1).toString());
throw Clazz.new_($I$(5,1).c$$S,["no s progress!"]);
}if (t1 - t0 > 0.001 ) {
var t=(t0 + t1) / 2;
var xt=that.XforT$D(t);
var yt=that.YforT$D(t);
if (t == t0  || t == t1  ) {
System.out.println$S("t0 = " + new Double(t0).toString());
System.out.println$S("t1 = " + new Double(t1).toString());
throw Clazz.new_($I$(5,1).c$$S,["no t progress!"]);
}if (ys >= yt0  && yt >= ys0  ) {
if (this.findIntersect$sun_awt_geom_Curve$DA$D$I$I$D$D$D$D$D$D$D$D$D$D$D$D(that, yrange, ymin, slevel + 1, tlevel + 1, s0, xs0, ys0, s, xs, ys, t0, xt0, yt0, t, xt, yt)) {
return true;
}}if (ys >= yt ) {
if (this.findIntersect$sun_awt_geom_Curve$DA$D$I$I$D$D$D$D$D$D$D$D$D$D$D$D(that, yrange, ymin, slevel + 1, tlevel + 1, s0, xs0, ys0, s, xs, ys, t, xt, yt, t1, xt1, yt1)) {
return true;
}}if (yt >= ys ) {
if (this.findIntersect$sun_awt_geom_Curve$DA$D$I$I$D$D$D$D$D$D$D$D$D$D$D$D(that, yrange, ymin, slevel + 1, tlevel + 1, s, xs, ys, s1, xs1, ys1, t0, xt0, yt0, t, xt, yt)) {
return true;
}}if (ys1 >= yt  && yt1 >= ys  ) {
if (this.findIntersect$sun_awt_geom_Curve$DA$D$I$I$D$D$D$D$D$D$D$D$D$D$D$D(that, yrange, ymin, slevel + 1, tlevel + 1, s, xs, ys, s1, xs1, ys1, t, xt, yt, t1, xt1, yt1)) {
return true;
}}} else {
if (ys >= yt0 ) {
if (this.findIntersect$sun_awt_geom_Curve$DA$D$I$I$D$D$D$D$D$D$D$D$D$D$D$D(that, yrange, ymin, slevel + 1, tlevel, s0, xs0, ys0, s, xs, ys, t0, xt0, yt0, t1, xt1, yt1)) {
return true;
}}if (yt1 >= ys ) {
if (this.findIntersect$sun_awt_geom_Curve$DA$D$I$I$D$D$D$D$D$D$D$D$D$D$D$D(that, yrange, ymin, slevel + 1, tlevel, s, xs, ys, s1, xs1, ys1, t0, xt0, yt0, t1, xt1, yt1)) {
return true;
}}}} else if (t1 - t0 > 0.001 ) {
var t=(t0 + t1) / 2;
var xt=that.XforT$D(t);
var yt=that.YforT$D(t);
if (t == t0  || t == t1  ) {
System.out.println$S("t0 = " + new Double(t0).toString());
System.out.println$S("t1 = " + new Double(t1).toString());
throw Clazz.new_($I$(5,1).c$$S,["no t progress!"]);
}if (yt >= ys0 ) {
if (this.findIntersect$sun_awt_geom_Curve$DA$D$I$I$D$D$D$D$D$D$D$D$D$D$D$D(that, yrange, ymin, slevel, tlevel + 1, s0, xs0, ys0, s1, xs1, ys1, t0, xt0, yt0, t, xt, yt)) {
return true;
}}if (ys1 >= yt ) {
if (this.findIntersect$sun_awt_geom_Curve$DA$D$I$I$D$D$D$D$D$D$D$D$D$D$D$D(that, yrange, ymin, slevel, tlevel + 1, s0, xs0, ys0, s1, xs1, ys1, t, xt, yt, t1, xt1, yt1)) {
return true;
}}} else {
var xlk=xs1 - xs0;
var ylk=ys1 - ys0;
var xnm=xt1 - xt0;
var ynm=yt1 - yt0;
var xmk=xt0 - xs0;
var ymk=yt0 - ys0;
var det=xnm * ylk - ynm * xlk;
if (det != 0 ) {
var detinv=1 / det;
var s=(xnm * ymk - ynm * xmk) * detinv;
var t=(xlk * ymk - ylk * xmk) * detinv;
if (s >= 0  && s <= 1   && t >= 0   && t <= 1  ) {
s=s0 + s * (s1 - s0);
t=t0 + t * (t1 - t0);
if (s < 0  || s > 1   || t < 0   || t > 1  ) {
System.out.println$S("Uh oh!");
}var y=(this.YforT$D(s) + that.YforT$D(t)) / 2;
if (y <= yrange[1]  && y > yrange[0]  ) {
yrange[1]=y;
return true;
}}}}return false;
});

Clazz.newMeth(C$, 'refineTforY$D$D$D',  function (t0, yt0, y0) {
var t1=1;
while (true){
var th=(t0 + t1) / 2;
if (th == t0  || th == t1  ) {
return t1;
}var y=this.YforT$D(th);
if (y < y0 ) {
t0=th;
yt0=y;
} else if (y > y0 ) {
t1=th;
} else {
return t1;
}}
});

Clazz.newMeth(C$, 'fairlyClose$D$D',  function (v1, v2) {
return (Math.abs(v1 - v2) < Math.max(Math.abs(v1), Math.abs(v2)) * 1.0E-10 );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
