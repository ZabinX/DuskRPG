(function(){var P$=Clazz.newPackage("java.awt.geom"),I$=[[0,['java.awt.geom.Rectangle2D','.Double'],'java.awt.geom.Rectangle2D','java.awt.geom.RectIterator']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Rectangle2D", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.awt.geom.RectangularShape');
C$.$classes$=[['Float',9],['Double',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['iterator','java.awt.geom.RectIterator']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'setRect$java_awt_geom_Rectangle2D',  function (r) {
this.setRect$D$D$D$D(r.getX$(), r.getY$(), r.getWidth$(), r.getHeight$());
});

Clazz.newMeth(C$, 'intersectsLine$D$D$D$D',  function (x1, y1, x2, y2) {
var out1;
var out2;
if ((out2=this.outcode$D$D(x2, y2)) == 0) {
return true;
}while ((out1=this.outcode$D$D(x1, y1)) != 0){
if ((out1 & out2) != 0) {
return false;
}if ((out1 & (5)) != 0) {
var x=this.getX$();
if ((out1 & 4) != 0) {
x+=this.getWidth$();
}y1=y1 + (x - x1) * (y2 - y1) / (x2 - x1);
x1=x;
} else {
var y=this.getY$();
if ((out1 & 8) != 0) {
y+=this.getHeight$();
}x1=x1 + (y - y1) * (x2 - x1) / (y2 - y1);
y1=y;
}}
return true;
});

Clazz.newMeth(C$, 'intersectsLine$java_awt_geom_Line2D',  function (l) {
return this.intersectsLine$D$D$D$D(l.getX1$(), l.getY1$(), l.getX2$(), l.getY2$());
});

Clazz.newMeth(C$, 'outcode$java_awt_geom_Point2D',  function (p) {
return this.outcode$D$D(p.getX$(), p.getY$());
});

Clazz.newMeth(C$, 'setFrame$D$D$D$D',  function (x, y, w, h) {
this.setRect$D$D$D$D(x, y, w, h);
});

Clazz.newMeth(C$, 'contains$D$D',  function (x, y) {
var x0=this.getX$();
var y0=this.getY$();
return (x >= x0  && y >= y0   && x < x0 + this.getWidth$()   && y < y0 + this.getHeight$()  );
});

Clazz.newMeth(C$, 'intersects$D$D$D$D',  function (x, y, w, h) {
if (this.isEmpty$() || w <= 0   || h <= 0  ) {
return false;
}var x0=this.getX$();
var y0=this.getY$();
return (x + w > x0  && y + h > y0   && x < x0 + this.getWidth$()   && y < y0 + this.getHeight$()  );
});

Clazz.newMeth(C$, 'contains$D$D$D$D',  function (x, y, w, h) {
if (this.isEmpty$() || w <= 0   || h <= 0  ) {
return false;
}var x0=this.getX$();
var y0=this.getY$();
return (x >= x0  && y >= y0   && (x + w) <= x0 + this.getWidth$()   && (y + h) <= y0 + this.getHeight$()  );
});

Clazz.newMeth(C$, 'intersect$java_awt_geom_Rectangle2D$java_awt_geom_Rectangle2D$java_awt_geom_Rectangle2D',  function (src1, src2, dest) {
var x1=Math.max(src1.getMinX$(), src2.getMinX$());
var y1=Math.max(src1.getMinY$(), src2.getMinY$());
var x2=Math.min(src1.getMaxX$(), src2.getMaxX$());
var y2=Math.min(src1.getMaxY$(), src2.getMaxY$());
dest.setFrame$D$D$D$D(x1, y1, x2 - x1, y2 - y1);
}, 1);

Clazz.newMeth(C$, 'union$java_awt_geom_Rectangle2D$java_awt_geom_Rectangle2D$java_awt_geom_Rectangle2D',  function (src1, src2, dest) {
var x1=Math.min(src1.getMinX$(), src2.getMinX$());
var y1=Math.min(src1.getMinY$(), src2.getMinY$());
var x2=Math.max(src1.getMaxX$(), src2.getMaxX$());
var y2=Math.max(src1.getMaxY$(), src2.getMaxY$());
dest.setFrameFromDiagonal$D$D$D$D(x1, y1, x2, y2);
}, 1);

Clazz.newMeth(C$, 'add$D$D',  function (newx, newy) {
var x1=Math.min(this.getMinX$(), newx);
var x2=Math.max(this.getMaxX$(), newx);
var y1=Math.min(this.getMinY$(), newy);
var y2=Math.max(this.getMaxY$(), newy);
this.setRect$D$D$D$D(x1, y1, x2 - x1, y2 - y1);
});

Clazz.newMeth(C$, 'add$java_awt_geom_Point2D',  function (pt) {
this.add$D$D(pt.getX$(), pt.getY$());
});

Clazz.newMeth(C$, 'add$java_awt_geom_Rectangle2D',  function (r) {
var x1=Math.min(this.getMinX$(), r.getMinX$());
var x2=Math.max(this.getMaxX$(), r.getMaxX$());
var y1=Math.min(this.getMinY$(), r.getMinY$());
var y2=Math.max(this.getMaxY$(), r.getMaxY$());
this.setRect$D$D$D$D(x1, y1, x2 - x1, y2 - y1);
});

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform',  function (at) {
return (this.iterator == null  ? this.iterator=Clazz.new_($I$(3,1)) : this.iterator).set$java_awt_geom_Rectangle2D$java_awt_geom_AffineTransform(this, at);
});

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform$D',  function (at, flatness) {
return (this.iterator == null  ? this.iterator=Clazz.new_($I$(3,1)) : this.iterator).set$java_awt_geom_Rectangle2D$java_awt_geom_AffineTransform(this, at);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var bits=java.lang.Double.doubleToLongBits$D(this.getX$());
(bits=Long.$add(bits,(Long.$mul(java.lang.Double.doubleToLongBits$D(this.getY$()),37))));
(bits=Long.$add(bits,(Long.$mul(java.lang.Double.doubleToLongBits$D(this.getWidth$()),43))));
(bits=Long.$add(bits,(Long.$mul(java.lang.Double.doubleToLongBits$D(this.getHeight$()),47))));
return ((Long.$ival(bits)) ^ (Long.$ival((Long.$sr(bits,32)))));
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj === this ) {
return true;
}if (Clazz.instanceOf(obj, "java.awt.geom.Rectangle2D")) {
var r2d=obj;
return ((this.getX$() == r2d.getX$() ) && (this.getY$() == r2d.getY$() ) && (this.getWidth$() == r2d.getWidth$() ) && (this.getHeight$() == r2d.getHeight$() )  );
}return false;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Rectangle2D, "Float", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.geom.Rectangle2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['x','y','width','height']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$F$F$F$F',  function (x, y, w, h) {
Clazz.super_(C$, this);
this.setRect$F$F$F$F(x, y, w, h);
}, 1);

Clazz.newMeth(C$, 'getX$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getY$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.height;
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return (this.width <= 0.0 ) || (this.height <= 0.0 ) ;
});

Clazz.newMeth(C$, 'setRect$F$F$F$F',  function (x, y, w, h) {
this.x=x;
this.y=y;
this.width=w;
this.height=h;
});

Clazz.newMeth(C$, 'setRect$D$D$D$D',  function (x, y, w, h) {
this.x=x;
this.y=y;
this.width=w;
this.height=h;
});

Clazz.newMeth(C$, 'setRect$java_awt_geom_Rectangle2D',  function (r) {
this.x=r.getX$();
this.y=r.getY$();
this.width=r.getWidth$();
this.height=r.getHeight$();
});

Clazz.newMeth(C$, 'outcode$D$D',  function (x, y) {
var out=0;
if (this.width <= 0 ) {
out|=5;
} else if (x < this.x ) {
out|=1;
} else if (x > this.x + this.width ) {
out|=4;
}if (this.height <= 0 ) {
out|=10;
} else if (y < this.y ) {
out|=2;
} else if (y > this.y + this.height ) {
out|=8;
}return out;
});

Clazz.newMeth(C$, 'getBounds2D$',  function () {
return Clazz.new_(C$.c$$F$F$F$F,[this.x, this.y, this.width, this.height]);
});

Clazz.newMeth(C$, 'createIntersection$java_awt_geom_Rectangle2D',  function (r) {
var dest;
if (Clazz.instanceOf(r, "java.awt.geom.Rectangle2D.Float")) {
dest=Clazz.new_(C$);
} else {
dest=Clazz.new_($I$(1,1));
}$I$(2).intersect$java_awt_geom_Rectangle2D$java_awt_geom_Rectangle2D$java_awt_geom_Rectangle2D(this, r, dest);
return dest;
});

Clazz.newMeth(C$, 'createUnion$java_awt_geom_Rectangle2D',  function (r) {
var dest;
if (Clazz.instanceOf(r, "java.awt.geom.Rectangle2D.Float")) {
dest=Clazz.new_(C$);
} else {
dest=Clazz.new_($I$(1,1));
}$I$(2).union$java_awt_geom_Rectangle2D$java_awt_geom_Rectangle2D$java_awt_geom_Rectangle2D(this, r, dest);
return dest;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[x=" + new Float(this.x).toString() + ",y=" + new Float(this.y).toString() + ",w=" + new Float(this.width).toString() + ",h=" + new Float(this.height).toString() + "]" ;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Rectangle2D, "Double", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.geom.Rectangle2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['x','y','width','height']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$D$D$D$D',  function (x, y, w, h) {
Clazz.super_(C$, this);
this.setRect$D$D$D$D(x, y, w, h);
}, 1);

Clazz.newMeth(C$, 'getX$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getY$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.height;
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return (this.width <= 0.0 ) || (this.height <= 0.0 ) ;
});

Clazz.newMeth(C$, 'setRect$D$D$D$D',  function (x, y, w, h) {
this.x=x;
this.y=y;
this.width=w;
this.height=h;
});

Clazz.newMeth(C$, 'setRect$java_awt_geom_Rectangle2D',  function (r) {
this.x=r.getX$();
this.y=r.getY$();
this.width=r.getWidth$();
this.height=r.getHeight$();
});

Clazz.newMeth(C$, 'outcode$D$D',  function (x, y) {
var out=0;
if (this.width <= 0 ) {
out|=5;
} else if (x < this.x ) {
out|=1;
} else if (x > this.x + this.width ) {
out|=4;
}if (this.height <= 0 ) {
out|=10;
} else if (y < this.y ) {
out|=2;
} else if (y > this.y + this.height ) {
out|=8;
}return out;
});

Clazz.newMeth(C$, 'getBounds2D$',  function () {
return Clazz.new_(C$.c$$D$D$D$D,[this.x, this.y, this.width, this.height]);
});

Clazz.newMeth(C$, 'createIntersection$java_awt_geom_Rectangle2D',  function (r) {
var dest=Clazz.new_(C$);
$I$(2).intersect$java_awt_geom_Rectangle2D$java_awt_geom_Rectangle2D$java_awt_geom_Rectangle2D(this, r, dest);
return dest;
});

Clazz.newMeth(C$, 'createUnion$java_awt_geom_Rectangle2D',  function (r) {
var dest=Clazz.new_(C$);
$I$(2).union$java_awt_geom_Rectangle2D$java_awt_geom_Rectangle2D$java_awt_geom_Rectangle2D(this, r, dest);
return dest;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[x=" + new Double(this.x).toString() + ",y=" + new Double(this.y).toString() + ",w=" + new Double(this.width).toString() + ",h=" + new Double(this.height).toString() + "]" ;
});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
