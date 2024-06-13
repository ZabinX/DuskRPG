(function(){var P$=Clazz.newPackage("java.awt.geom"),p$1={},I$=[[0,['java.awt.geom.Rectangle2D','.Float'],['java.awt.geom.Rectangle2D','.Double'],'java.awt.geom.RoundRectIterator']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RoundRectangle2D", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.awt.geom.RectangularShape');
C$.$classes$=[['Float',9],['Double',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'setRoundRect$java_awt_geom_RoundRectangle2D',  function (rr) {
this.setRoundRect$D$D$D$D$D$D(rr.getX$(), rr.getY$(), rr.getWidth$(), rr.getHeight$(), rr.getArcWidth$(), rr.getArcHeight$());
});

Clazz.newMeth(C$, 'setFrame$D$D$D$D',  function (x, y, w, h) {
this.setRoundRect$D$D$D$D$D$D(x, y, w, h, this.getArcWidth$(), this.getArcHeight$());
});

Clazz.newMeth(C$, 'contains$D$D',  function (x, y) {
if (this.isEmpty$()) {
return false;
}var rrx0=this.getX$();
var rry0=this.getY$();
var rrx1=rrx0 + this.getWidth$();
var rry1=rry0 + this.getHeight$();
if (x < rrx0  || y < rry0   || x >= rrx1   || y >= rry1  ) {
return false;
}var aw=Math.min(this.getWidth$(), Math.abs(this.getArcWidth$())) / 2.0;
var ah=Math.min(this.getHeight$(), Math.abs(this.getArcHeight$())) / 2.0;
if (x >= (rrx0+=aw)  && x < (rrx0=rrx1 - aw)  ) {
return true;
}if (y >= (rry0+=ah)  && y < (rry0=rry1 - ah)  ) {
return true;
}x=(x - rrx0) / aw;
y=(y - rry0) / ah;
return (x * x + y * y <= 1.0 );
});

Clazz.newMeth(C$, 'classify$D$D$D$D',  function (coord, left, right, arcsize) {
if (coord < left ) {
return 0;
} else if (coord < left + arcsize ) {
return 1;
} else if (coord < right - arcsize ) {
return 2;
} else if (coord < right ) {
return 3;
} else {
return 4;
}}, p$1);

Clazz.newMeth(C$, 'intersects$D$D$D$D',  function (x, y, w, h) {
if (this.isEmpty$() || w <= 0   || h <= 0  ) {
return false;
}var rrx0=this.getX$();
var rry0=this.getY$();
var rrx1=rrx0 + this.getWidth$();
var rry1=rry0 + this.getHeight$();
if (x + w <= rrx0  || x >= rrx1   || y + h <= rry0   || y >= rry1  ) {
return false;
}var aw=Math.min(this.getWidth$(), Math.abs(this.getArcWidth$())) / 2.0;
var ah=Math.min(this.getHeight$(), Math.abs(this.getArcHeight$())) / 2.0;
var x0class=p$1.classify$D$D$D$D.apply(this, [x, rrx0, rrx1, aw]);
var x1class=p$1.classify$D$D$D$D.apply(this, [x + w, rrx0, rrx1, aw]);
var y0class=p$1.classify$D$D$D$D.apply(this, [y, rry0, rry1, ah]);
var y1class=p$1.classify$D$D$D$D.apply(this, [y + h, rry0, rry1, ah]);
if (x0class == 2 || x1class == 2  || y0class == 2  || y1class == 2 ) {
return true;
}if ((x0class < 2 && x1class > 2 ) || (y0class < 2 && y1class > 2 ) ) {
return true;
}x=(x1class == 1) ? (x=x + w - (rrx0 + aw)) : (x=x - (rrx1 - aw));
y=(y1class == 1) ? (y=y + h - (rry0 + ah)) : (y=y - (rry1 - ah));
x=x / aw;
y=y / ah;
return (x * x + y * y <= 1.0 );
});

Clazz.newMeth(C$, 'contains$D$D$D$D',  function (x, y, w, h) {
if (this.isEmpty$() || w <= 0   || h <= 0  ) {
return false;
}return (this.contains$D$D(x, y) && this.contains$D$D(x + w, y) && this.contains$D$D(x, y + h) && this.contains$D$D(x + w, y + h)  );
});

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform',  function (at) {
return Clazz.new_($I$(3,1).c$$java_awt_geom_RoundRectangle2D$java_awt_geom_AffineTransform,[this, at]);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var bits=java.lang.Double.doubleToLongBits$D(this.getX$());
(bits=Long.$add(bits,(Long.$mul(java.lang.Double.doubleToLongBits$D(this.getY$()),37))));
(bits=Long.$add(bits,(Long.$mul(java.lang.Double.doubleToLongBits$D(this.getWidth$()),43))));
(bits=Long.$add(bits,(Long.$mul(java.lang.Double.doubleToLongBits$D(this.getHeight$()),47))));
(bits=Long.$add(bits,(Long.$mul(java.lang.Double.doubleToLongBits$D(this.getArcWidth$()),53))));
(bits=Long.$add(bits,(Long.$mul(java.lang.Double.doubleToLongBits$D(this.getArcHeight$()),59))));
return ((Long.$ival(bits)) ^ (Long.$ival((Long.$sr(bits,32)))));
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj === this ) {
return true;
}if (Clazz.instanceOf(obj, "java.awt.geom.RoundRectangle2D")) {
var rr2d=obj;
return ((this.getX$() == rr2d.getX$() ) && (this.getY$() == rr2d.getY$() ) && (this.getWidth$() == rr2d.getWidth$() ) && (this.getHeight$() == rr2d.getHeight$() ) && (this.getArcWidth$() == rr2d.getArcWidth$() ) && (this.getArcHeight$() == rr2d.getArcHeight$() )  );
}return false;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.RoundRectangle2D, "Float", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.geom.RoundRectangle2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['x','y','width','height','arcwidth','archeight']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$F$F$F$F$F$F',  function (x, y, w, h, arcw, arch) {
Clazz.super_(C$, this);
this.setRoundRect$F$F$F$F$F$F(x, y, w, h, arcw, arch);
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

Clazz.newMeth(C$, 'getArcWidth$',  function () {
return this.arcwidth;
});

Clazz.newMeth(C$, 'getArcHeight$',  function () {
return this.archeight;
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return (this.width <= 0.0 ) || (this.height <= 0.0 ) ;
});

Clazz.newMeth(C$, 'setRoundRect$F$F$F$F$F$F',  function (x, y, w, h, arcw, arch) {
this.x=x;
this.y=y;
this.width=w;
this.height=h;
this.arcwidth=arcw;
this.archeight=arch;
});

Clazz.newMeth(C$, 'setRoundRect$D$D$D$D$D$D',  function (x, y, w, h, arcw, arch) {
this.x=x;
this.y=y;
this.width=w;
this.height=h;
this.arcwidth=arcw;
this.archeight=arch;
});

Clazz.newMeth(C$, 'setRoundRect$java_awt_geom_RoundRectangle2D',  function (rr) {
this.x=rr.getX$();
this.y=rr.getY$();
this.width=rr.getWidth$();
this.height=rr.getHeight$();
this.arcwidth=rr.getArcWidth$();
this.archeight=rr.getArcHeight$();
});

Clazz.newMeth(C$, 'getBounds2D$',  function () {
return Clazz.new_($I$(1,1).c$$F$F$F$F,[this.x, this.y, this.width, this.height]);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RoundRectangle2D, "Double", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.geom.RoundRectangle2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['x','y','width','height','arcwidth','archeight']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$D$D$D$D$D$D',  function (x, y, w, h, arcw, arch) {
Clazz.super_(C$, this);
this.setRoundRect$D$D$D$D$D$D(x, y, w, h, arcw, arch);
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

Clazz.newMeth(C$, 'getArcWidth$',  function () {
return this.arcwidth;
});

Clazz.newMeth(C$, 'getArcHeight$',  function () {
return this.archeight;
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return (this.width <= 0.0 ) || (this.height <= 0.0 ) ;
});

Clazz.newMeth(C$, 'setRoundRect$D$D$D$D$D$D',  function (x, y, w, h, arcw, arch) {
this.x=x;
this.y=y;
this.width=w;
this.height=h;
this.arcwidth=arcw;
this.archeight=arch;
});

Clazz.newMeth(C$, 'setRoundRect$java_awt_geom_RoundRectangle2D',  function (rr) {
this.x=rr.getX$();
this.y=rr.getY$();
this.width=rr.getWidth$();
this.height=rr.getHeight$();
this.arcwidth=rr.getArcWidth$();
this.archeight=rr.getArcHeight$();
});

Clazz.newMeth(C$, 'getBounds2D$',  function () {
return Clazz.new_($I$(2,1).c$$D$D$D$D,[this.x, this.y, this.width, this.height]);
});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
