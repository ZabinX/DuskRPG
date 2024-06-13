(function(){var P$=Clazz.newPackage("java.awt.geom"),I$=[[0,['java.awt.geom.Point2D','.Float'],['java.awt.geom.Rectangle2D','.Float'],['java.awt.geom.Point2D','.Double'],['java.awt.geom.Rectangle2D','.Double'],'java.awt.geom.LineIterator','InternalError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Line2D", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.awt.Shape', 'Cloneable']);
C$.$classes$=[['Float',9],['Double',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setLine$java_awt_geom_Point2D$java_awt_geom_Point2D',  function (p1, p2) {
this.setLine$D$D$D$D(p1.getX$(), p1.getY$(), p2.getX$(), p2.getY$());
});

Clazz.newMeth(C$, 'setLine$java_awt_geom_Line2D',  function (l) {
this.setLine$D$D$D$D(l.getX1$(), l.getY1$(), l.getX2$(), l.getY2$());
});

Clazz.newMeth(C$, 'relativeCCW$D$D$D$D$D$D',  function (x1, y1, x2, y2, px, py) {
return C$.relativeCCWImpl$D$D$D$D$D$D(x1, y1, x2, y2, px, py);
}, 1);

Clazz.newMeth(C$, 'relativeCCWImpl$D$D$D$D$D$D',  function (x1, y1, x2, y2, px, py) {
x2-=x1;
y2-=y1;
px-=x1;
py-=y1;
var ccw=px * y2 - py * x2;
if (ccw == 0.0 ) {
ccw=px * x2 + py * y2;
if (ccw > 0.0 ) {
px-=x2;
py-=y2;
ccw=px * x2 + py * y2;
if (ccw < 0.0 ) {
ccw=0.0;
}}}return (ccw < 0.0 ) ? -1 : ((ccw > 0.0 ) ? 1 : 0);
}, 1);

Clazz.newMeth(C$, 'relativeCCW$D$D',  function (px, py) {
return C$.relativeCCWImpl$D$D$D$D$D$D(this.getX1$(), this.getY1$(), this.getX2$(), this.getY2$(), px, py);
});

Clazz.newMeth(C$, 'relativeCCW$java_awt_geom_Point2D',  function (p) {
return C$.relativeCCWImpl$D$D$D$D$D$D(this.getX1$(), this.getY1$(), this.getX2$(), this.getY2$(), p.getX$(), p.getY$());
});

Clazz.newMeth(C$, 'linesIntersect$D$D$D$D$D$D$D$D',  function (x1, y1, x2, y2, x3, y3, x4, y4) {
return ((C$.relativeCCWImpl$D$D$D$D$D$D(x1, y1, x2, y2, x3, y3) * C$.relativeCCWImpl$D$D$D$D$D$D(x1, y1, x2, y2, x4, y4) <= 0) && (C$.relativeCCWImpl$D$D$D$D$D$D(x3, y3, x4, y4, x1, y1) * C$.relativeCCWImpl$D$D$D$D$D$D(x3, y3, x4, y4, x2, y2) <= 0) );
}, 1);

Clazz.newMeth(C$, 'intersectsLine$D$D$D$D',  function (x1, y1, x2, y2) {
return C$.linesIntersect$D$D$D$D$D$D$D$D(x1, y1, x2, y2, this.getX1$(), this.getY1$(), this.getX2$(), this.getY2$());
});

Clazz.newMeth(C$, 'intersectsLine$java_awt_geom_Line2D',  function (l) {
return C$.linesIntersect$D$D$D$D$D$D$D$D(l.getX1$(), l.getY1$(), l.getX2$(), l.getY2$(), this.getX1$(), this.getY1$(), this.getX2$(), this.getY2$());
});

Clazz.newMeth(C$, 'ptSegDistSq$D$D$D$D$D$D',  function (x1, y1, x2, y2, px, py) {
x2-=x1;
y2-=y1;
px-=x1;
py-=y1;
var dotprod=px * x2 + py * y2;
var projlenSq;
if (dotprod <= 0.0 ) {
projlenSq=0.0;
} else {
px=x2 - px;
py=y2 - py;
dotprod=px * x2 + py * y2;
if (dotprod <= 0.0 ) {
projlenSq=0.0;
} else {
projlenSq=dotprod * dotprod / (x2 * x2 + y2 * y2);
}}var lenSq=px * px + py * py - projlenSq;
if (lenSq < 0 ) {
lenSq=0;
}return lenSq;
}, 1);

Clazz.newMeth(C$, 'ptSegDist$D$D$D$D$D$D',  function (x1, y1, x2, y2, px, py) {
return Math.sqrt(C$.ptSegDistSq$D$D$D$D$D$D(x1, y1, x2, y2, px, py));
}, 1);

Clazz.newMeth(C$, 'ptSegDistSq$D$D',  function (px, py) {
return C$.ptSegDistSq$D$D$D$D$D$D(this.getX1$(), this.getY1$(), this.getX2$(), this.getY2$(), px, py);
});

Clazz.newMeth(C$, 'ptSegDistSq$java_awt_geom_Point2D',  function (pt) {
return C$.ptSegDistSq$D$D$D$D$D$D(this.getX1$(), this.getY1$(), this.getX2$(), this.getY2$(), pt.getX$(), pt.getY$());
});

Clazz.newMeth(C$, 'ptSegDist$D$D',  function (px, py) {
return C$.ptSegDist$D$D$D$D$D$D(this.getX1$(), this.getY1$(), this.getX2$(), this.getY2$(), px, py);
});

Clazz.newMeth(C$, 'ptSegDist$java_awt_geom_Point2D',  function (pt) {
return C$.ptSegDist$D$D$D$D$D$D(this.getX1$(), this.getY1$(), this.getX2$(), this.getY2$(), pt.getX$(), pt.getY$());
});

Clazz.newMeth(C$, 'ptLineDistSq$D$D$D$D$D$D',  function (x1, y1, x2, y2, px, py) {
x2-=x1;
y2-=y1;
px-=x1;
py-=y1;
var dotprod=px * x2 + py * y2;
var projlenSq=dotprod * dotprod / (x2 * x2 + y2 * y2);
var lenSq=px * px + py * py - projlenSq;
if (lenSq < 0 ) {
lenSq=0;
}return lenSq;
}, 1);

Clazz.newMeth(C$, 'ptLineDist$D$D$D$D$D$D',  function (x1, y1, x2, y2, px, py) {
return Math.sqrt(C$.ptLineDistSq$D$D$D$D$D$D(x1, y1, x2, y2, px, py));
}, 1);

Clazz.newMeth(C$, 'ptLineDistSq$D$D',  function (px, py) {
return C$.ptLineDistSq$D$D$D$D$D$D(this.getX1$(), this.getY1$(), this.getX2$(), this.getY2$(), px, py);
});

Clazz.newMeth(C$, 'ptLineDistSq$java_awt_geom_Point2D',  function (pt) {
return C$.ptLineDistSq$D$D$D$D$D$D(this.getX1$(), this.getY1$(), this.getX2$(), this.getY2$(), pt.getX$(), pt.getY$());
});

Clazz.newMeth(C$, 'ptLineDist$D$D',  function (px, py) {
return C$.ptLineDist$D$D$D$D$D$D(this.getX1$(), this.getY1$(), this.getX2$(), this.getY2$(), px, py);
});

Clazz.newMeth(C$, 'ptLineDist$java_awt_geom_Point2D',  function (pt) {
return C$.ptLineDist$D$D$D$D$D$D(this.getX1$(), this.getY1$(), this.getX2$(), this.getY2$(), pt.getX$(), pt.getY$());
});

Clazz.newMeth(C$, 'contains$D$D',  function (x, y) {
return false;
});

Clazz.newMeth(C$, 'contains$java_awt_geom_Point2D',  function (p) {
return false;
});

Clazz.newMeth(C$, 'intersects$D$D$D$D',  function (x, y, w, h) {
return this.intersects$java_awt_geom_Rectangle2D(Clazz.new_($I$(4,1).c$$D$D$D$D,[x, y, w, h]));
});

Clazz.newMeth(C$, 'intersects$java_awt_geom_Rectangle2D',  function (r) {
return r.intersectsLine$D$D$D$D(this.getX1$(), this.getY1$(), this.getX2$(), this.getY2$());
});

Clazz.newMeth(C$, 'contains$D$D$D$D',  function (x, y, w, h) {
return false;
});

Clazz.newMeth(C$, 'contains$java_awt_geom_Rectangle2D',  function (r) {
return false;
});

Clazz.newMeth(C$, 'getBounds$',  function () {
return this.getBounds2D$().getBounds$();
});

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform',  function (at) {
return Clazz.new_($I$(5,1).c$$java_awt_geom_Line2D$java_awt_geom_AffineTransform,[this, at]);
});

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform$D',  function (at, flatness) {
return Clazz.new_($I$(5,1).c$$java_awt_geom_Line2D$java_awt_geom_AffineTransform,[this, at]);
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(6,1));
} else {
throw e;
}
}
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Line2D, "Float", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.geom.Line2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['x1','y1','x2','y2']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$F$F$F$F',  function (x1, y1, x2, y2) {
Clazz.super_(C$, this);
this.setLine$F$F$F$F(x1, y1, x2, y2);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_Point2D$java_awt_geom_Point2D',  function (p1, p2) {
Clazz.super_(C$, this);
this.setLine$java_awt_geom_Point2D$java_awt_geom_Point2D(p1, p2);
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

Clazz.newMeth(C$, 'getX2$',  function () {
return this.x2;
});

Clazz.newMeth(C$, 'getY2$',  function () {
return this.y2;
});

Clazz.newMeth(C$, 'getP2$',  function () {
return Clazz.new_($I$(1,1).c$$F$F,[this.x2, this.y2]);
});

Clazz.newMeth(C$, 'setLine$D$D$D$D',  function (x1, y1, x2, y2) {
this.x1=x1;
this.y1=y1;
this.x2=x2;
this.y2=y2;
});

Clazz.newMeth(C$, 'setLine$F$F$F$F',  function (x1, y1, x2, y2) {
this.x1=x1;
this.y1=y1;
this.x2=x2;
this.y2=y2;
});

Clazz.newMeth(C$, 'getBounds2D$',  function () {
var x;
var y;
var w;
var h;
if (this.x1 < this.x2 ) {
x=this.x1;
w=this.x2 - this.x1;
} else {
x=this.x2;
w=this.x1 - this.x2;
}if (this.y1 < this.y2 ) {
y=this.y1;
h=this.y2 - this.y1;
} else {
y=this.y2;
h=this.y1 - this.y2;
}return Clazz.new_($I$(2,1).c$$F$F$F$F,[x, y, w, h]);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Line2D, "Double", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.geom.Line2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['x1','y1','x2','y2']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$D$D$D$D',  function (x1, y1, x2, y2) {
Clazz.super_(C$, this);
this.setLine$D$D$D$D(x1, y1, x2, y2);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_Point2D$java_awt_geom_Point2D',  function (p1, p2) {
Clazz.super_(C$, this);
this.setLine$java_awt_geom_Point2D$java_awt_geom_Point2D(p1, p2);
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

Clazz.newMeth(C$, 'getX2$',  function () {
return this.x2;
});

Clazz.newMeth(C$, 'getY2$',  function () {
return this.y2;
});

Clazz.newMeth(C$, 'getP2$',  function () {
return Clazz.new_($I$(3,1).c$$D$D,[this.x2, this.y2]);
});

Clazz.newMeth(C$, 'setLine$D$D$D$D',  function (x1, y1, x2, y2) {
this.x1=x1;
this.y1=y1;
this.x2=x2;
this.y2=y2;
});

Clazz.newMeth(C$, 'getBounds2D$',  function () {
var x;
var y;
var w;
var h;
if (this.x1 < this.x2 ) {
x=this.x1;
w=this.x2 - this.x1;
} else {
x=this.x2;
w=this.x1 - this.x2;
}if (this.y1 < this.y2 ) {
y=this.y1;
h=this.y2 - this.y1;
} else {
y=this.y2;
h=this.y1 - this.y2;
}return Clazz.new_($I$(4,1).c$$D$D$D$D,[x, y, w, h]);
});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
