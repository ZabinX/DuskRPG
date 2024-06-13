(function(){var P$=Clazz.newPackage("java.awt.geom"),p$1={},I$=[[0,['java.awt.geom.Rectangle2D','.Float'],['java.awt.geom.Rectangle2D','.Double'],['java.awt.geom.Point2D','.Double'],'java.awt.geom.Line2D','java.awt.geom.ArcIterator']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Arc2D", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.awt.geom.RectangularShape');
C$.$classes$=[['Float',9],['Double',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['type']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I.apply(this, [0]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (type) {
Clazz.super_(C$, this);
this.setArcType$I(type);
}, 1);

Clazz.newMeth(C$, 'getArcType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'getStartPoint$',  function () {
var angle=Math.toRadians(-this.getAngleStart$());
var x=this.getX$() + (Math.cos(angle) * 0.5 + 0.5) * this.getWidth$();
var y=this.getY$() + (Math.sin(angle) * 0.5 + 0.5) * this.getHeight$();
return Clazz.new_($I$(3,1).c$$D$D,[x, y]);
});

Clazz.newMeth(C$, 'getEndPoint$',  function () {
var angle=Math.toRadians(-this.getAngleStart$() - this.getAngleExtent$());
var x=this.getX$() + (Math.cos(angle) * 0.5 + 0.5) * this.getWidth$();
var y=this.getY$() + (Math.sin(angle) * 0.5 + 0.5) * this.getHeight$();
return Clazz.new_($I$(3,1).c$$D$D,[x, y]);
});

Clazz.newMeth(C$, 'setArc$java_awt_geom_Point2D$java_awt_geom_Dimension2D$D$D$I',  function (loc, size, angSt, angExt, closure) {
this.setArc$D$D$D$D$D$D$I(loc.getX$(), loc.getY$(), size.getWidth$(), size.getHeight$(), angSt, angExt, closure);
});

Clazz.newMeth(C$, 'setArc$java_awt_geom_Rectangle2D$D$D$I',  function (rect, angSt, angExt, closure) {
this.setArc$D$D$D$D$D$D$I(rect.getX$(), rect.getY$(), rect.getWidth$(), rect.getHeight$(), angSt, angExt, closure);
});

Clazz.newMeth(C$, 'setArc$java_awt_geom_Arc2D',  function (a) {
this.setArc$D$D$D$D$D$D$I(a.getX$(), a.getY$(), a.getWidth$(), a.getHeight$(), a.getAngleStart$(), a.getAngleExtent$(), a.type);
});

Clazz.newMeth(C$, 'setArcByCenter$D$D$D$D$D$I',  function (x, y, radius, angSt, angExt, closure) {
this.setArc$D$D$D$D$D$D$I(x - radius, y - radius, radius * 2.0, radius * 2.0, angSt, angExt, closure);
});

Clazz.newMeth(C$, 'setArcByTangent$java_awt_geom_Point2D$java_awt_geom_Point2D$java_awt_geom_Point2D$D',  function (p1, p2, p3, radius) {
var ang1=Math.atan2(p1.getY$() - p2.getY$(), p1.getX$() - p2.getX$());
var ang2=Math.atan2(p3.getY$() - p2.getY$(), p3.getX$() - p2.getX$());
var diff=ang2 - ang1;
if (diff > 3.141592653589793 ) {
ang2-=6.283185307179586;
} else if (diff < -3.141592653589793 ) {
ang2+=6.283185307179586;
}var bisect=(ang1 + ang2) / 2.0;
var theta=Math.abs(ang2 - bisect);
var dist=radius / Math.sin(theta);
var x=p2.getX$() + dist * Math.cos(bisect);
var y=p2.getY$() + dist * Math.sin(bisect);
if (ang1 < ang2 ) {
ang1-=1.5707963267948966;
ang2+=1.5707963267948966;
} else {
ang1+=1.5707963267948966;
ang2-=1.5707963267948966;
}ang1=Math.toDegrees(-ang1);
ang2=Math.toDegrees(-ang2);
diff=ang2 - ang1;
if (diff < 0 ) {
diff+=360;
} else {
diff-=360;
}this.setArcByCenter$D$D$D$D$D$I(x, y, radius, ang1, diff, this.type);
});

Clazz.newMeth(C$, 'setAngleStart$java_awt_geom_Point2D',  function (p) {
var dx=this.getHeight$() * (p.getX$() - this.getCenterX$());
var dy=this.getWidth$() * (p.getY$() - this.getCenterY$());
this.setAngleStart$D(-Math.toDegrees(Math.atan2(dy, dx)));
});

Clazz.newMeth(C$, 'setAngles$D$D$D$D',  function (x1, y1, x2, y2) {
var x=this.getCenterX$();
var y=this.getCenterY$();
var w=this.getWidth$();
var h=this.getHeight$();
var ang1=Math.atan2(w * (y - y1), h * (x1 - x));
var ang2=Math.atan2(w * (y - y2), h * (x2 - x));
ang2-=ang1;
if (ang2 <= 0.0 ) {
ang2+=6.283185307179586;
}this.setAngleStart$D(Math.toDegrees(ang1));
this.setAngleExtent$D(Math.toDegrees(ang2));
});

Clazz.newMeth(C$, 'setAngles$java_awt_geom_Point2D$java_awt_geom_Point2D',  function (p1, p2) {
this.setAngles$D$D$D$D(p1.getX$(), p1.getY$(), p2.getX$(), p2.getY$());
});

Clazz.newMeth(C$, 'setArcType$I',  function (type) {
if (type < 0 || type > 2 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid type for Arc: " + type]);
}this.type=type;
});

Clazz.newMeth(C$, 'setFrame$D$D$D$D',  function (x, y, w, h) {
this.setArc$D$D$D$D$D$D$I(x, y, w, h, this.getAngleStart$(), this.getAngleExtent$(), this.type);
});

Clazz.newMeth(C$, 'getBounds2D$',  function () {
if (this.isEmpty$()) {
return this.makeBounds$D$D$D$D(this.getX$(), this.getY$(), this.getWidth$(), this.getHeight$());
}var x1;
var y1;
var x2;
var y2;
if (this.getArcType$() == 2) {
x1=y1=x2=y2=0.0;
} else {
x1=y1=1.0;
x2=y2=-1.0;
}var angle=0.0;
for (var i=0; i < 6; i++) {
if (i < 4) {
angle+=90.0;
if (!this.containsAngle$D(angle)) {
continue;
}} else if (i == 4) {
angle=this.getAngleStart$();
} else {
angle+=this.getAngleExtent$();
}var rads=Math.toRadians(-angle);
var xe=Math.cos(rads);
var ye=Math.sin(rads);
x1=Math.min(x1, xe);
y1=Math.min(y1, ye);
x2=Math.max(x2, xe);
y2=Math.max(y2, ye);
}
var w=this.getWidth$();
var h=this.getHeight$();
x2=(x2 - x1) * 0.5 * w ;
y2=(y2 - y1) * 0.5 * h ;
x1=this.getX$() + (x1 * 0.5 + 0.5) * w;
y1=this.getY$() + (y1 * 0.5 + 0.5) * h;
return this.makeBounds$D$D$D$D(x1, y1, x2, y2);
});

Clazz.newMeth(C$, 'normalizeDegrees$D',  function (angle) {
if (angle > 180.0 ) {
if (angle <= (540.0) ) {
angle=angle - 360.0;
} else {
angle=Math.IEEEremainder(angle, 360.0);
if (angle == -180.0 ) {
angle=180.0;
}}} else if (angle <= -180.0 ) {
if (angle > (-540.0) ) {
angle=angle + 360.0;
} else {
angle=Math.IEEEremainder(angle, 360.0);
if (angle == -180.0 ) {
angle=180.0;
}}}return angle;
}, 1);

Clazz.newMeth(C$, 'containsAngle$D',  function (angle) {
var angExt=this.getAngleExtent$();
var backwards=(angExt < 0.0 );
if (backwards) {
angExt=-angExt;
}if (angExt >= 360.0 ) {
return true;
}angle=C$.normalizeDegrees$D(angle) - C$.normalizeDegrees$D(this.getAngleStart$());
if (backwards) {
angle=-angle;
}if (angle < 0.0 ) {
angle+=360.0;
}return (angle >= 0.0 ) && (angle < angExt ) ;
});

Clazz.newMeth(C$, 'contains$D$D',  function (x, y) {
var ellw=this.getWidth$();
if (ellw <= 0.0 ) {
return false;
}var normx=(x - this.getX$()) / ellw - 0.5;
var ellh=this.getHeight$();
if (ellh <= 0.0 ) {
return false;
}var normy=(y - this.getY$()) / ellh - 0.5;
var distSq=(normx * normx + normy * normy);
if (distSq >= 0.25 ) {
return false;
}var angExt=Math.abs(this.getAngleExtent$());
if (angExt >= 360.0 ) {
return true;
}var inarc=this.containsAngle$D(-Math.toDegrees(Math.atan2(normy, normx)));
if (this.type == 2) {
return inarc;
}if (inarc) {
if (angExt >= 180.0 ) {
return true;
}} else {
if (angExt <= 180.0 ) {
return false;
}}var angle=Math.toRadians(-this.getAngleStart$());
var x1=Math.cos(angle);
var y1=Math.sin(angle);
angle+=Math.toRadians(-this.getAngleExtent$());
var x2=Math.cos(angle);
var y2=Math.sin(angle);
var inside=($I$(4).relativeCCW$D$D$D$D$D$D(x1, y1, x2, y2, 2 * normx, 2 * normy) * $I$(4).relativeCCW$D$D$D$D$D$D(x1, y1, x2, y2, 0, 0) >= 0);
return inarc ? !inside : inside;
});

Clazz.newMeth(C$, 'intersects$D$D$D$D',  function (x, y, w, h) {
var aw=this.getWidth$();
var ah=this.getHeight$();
if (w <= 0  || h <= 0   || aw <= 0   || ah <= 0  ) {
return false;
}var ext=this.getAngleExtent$();
if (ext == 0 ) {
return false;
}var ax=this.getX$();
var ay=this.getY$();
var axw=ax + aw;
var ayh=ay + ah;
var xw=x + w;
var yh=y + h;
if (x >= axw  || y >= ayh   || xw <= ax   || yh <= ay  ) {
return false;
}var axc=this.getCenterX$();
var ayc=this.getCenterY$();
var sp=this.getStartPoint$();
var ep=this.getEndPoint$();
var sx=sp.getX$();
var sy=sp.getY$();
var ex=ep.getX$();
var ey=ep.getY$();
if (ayc >= y  && ayc <= yh  ) {
if ((sx < xw  && ex < xw   && axc < xw   && axw > x   && this.containsAngle$D(0) ) || (sx > x  && ex > x   && axc > x   && ax < xw   && this.containsAngle$D(180) ) ) {
return true;
}}if (axc >= x  && axc <= xw  ) {
if ((sy > y  && ey > y   && ayc > y   && ay < yh   && this.containsAngle$D(90) ) || (sy < yh  && ey < yh   && ayc < yh   && ayh > y   && this.containsAngle$D(270) ) ) {
return true;
}}var rect=Clazz.new_($I$(2,1).c$$D$D$D$D,[x, y, w, h]);
if (this.type == 2 || Math.abs(ext) > 180  ) {
if (rect.intersectsLine$D$D$D$D(axc, ayc, sx, sy) || rect.intersectsLine$D$D$D$D(axc, ayc, ex, ey) ) {
return true;
}} else {
if (rect.intersectsLine$D$D$D$D(sx, sy, ex, ey)) {
return true;
}}if (this.contains$D$D(x, y) || this.contains$D$D(x + w, y) || this.contains$D$D(x, y + h) || this.contains$D$D(x + w, y + h)  ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'contains$D$D$D$D',  function (x, y, w, h) {
return p$1.contains$D$D$D$D$java_awt_geom_Rectangle2D.apply(this, [x, y, w, h, null]);
});

Clazz.newMeth(C$, 'contains$java_awt_geom_Rectangle2D',  function (r) {
return p$1.contains$D$D$D$D$java_awt_geom_Rectangle2D.apply(this, [r.getX$(), r.getY$(), r.getWidth$(), r.getHeight$(), r]);
});

Clazz.newMeth(C$, 'contains$D$D$D$D$java_awt_geom_Rectangle2D',  function (x, y, w, h, origrect) {
if (!(this.contains$D$D(x, y) && this.contains$D$D(x + w, y) && this.contains$D$D(x, y + h) && this.contains$D$D(x + w, y + h)  )) {
return false;
}if (this.type != 2 || Math.abs(this.getAngleExtent$()) <= 180.0  ) {
return true;
}if (origrect == null ) {
origrect=Clazz.new_($I$(2,1).c$$D$D$D$D,[x, y, w, h]);
}var halfW=this.getWidth$() / 2.0;
var halfH=this.getHeight$() / 2.0;
var xc=this.getX$() + halfW;
var yc=this.getY$() + halfH;
var angle=Math.toRadians(-this.getAngleStart$());
var xe=xc + halfW * Math.cos(angle);
var ye=yc + halfH * Math.sin(angle);
if (origrect.intersectsLine$D$D$D$D(xc, yc, xe, ye)) {
return false;
}angle+=Math.toRadians(-this.getAngleExtent$());
xe=xc + halfW * Math.cos(angle);
ye=yc + halfH * Math.sin(angle);
return !origrect.intersectsLine$D$D$D$D(xc, yc, xe, ye);
}, p$1);

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform',  function (at) {
return Clazz.new_($I$(5,1).c$$java_awt_geom_Arc2D$java_awt_geom_AffineTransform,[this, at]);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var bits=java.lang.Double.doubleToLongBits$D(this.getX$());
(bits=Long.$add(bits,(Long.$mul(java.lang.Double.doubleToLongBits$D(this.getY$()),37))));
(bits=Long.$add(bits,(Long.$mul(java.lang.Double.doubleToLongBits$D(this.getWidth$()),43))));
(bits=Long.$add(bits,(Long.$mul(java.lang.Double.doubleToLongBits$D(this.getHeight$()),47))));
(bits=Long.$add(bits,(Long.$mul(java.lang.Double.doubleToLongBits$D(this.getAngleStart$()),53))));
(bits=Long.$add(bits,(Long.$mul(java.lang.Double.doubleToLongBits$D(this.getAngleExtent$()),59))));
(bits=Long.$add(bits,(this.getArcType$() * 61)));
return ((Long.$ival(bits)) ^ (Long.$ival((Long.$sr(bits,32)))));
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj === this ) {
return true;
}if (Clazz.instanceOf(obj, "java.awt.geom.Arc2D")) {
var a2d=obj;
return ((this.getX$() == a2d.getX$() ) && (this.getY$() == a2d.getY$() ) && (this.getWidth$() == a2d.getWidth$() ) && (this.getHeight$() == a2d.getHeight$() ) && (this.getAngleStart$() == a2d.getAngleStart$() ) && (this.getAngleExtent$() == a2d.getAngleExtent$() ) && (this.getArcType$() == a2d.getArcType$())  );
}return false;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Arc2D, "Float", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.geom.Arc2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['x','y','width','height','start','extent']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I.apply(this,[0]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (type) {
;C$.superclazz.c$$I.apply(this,[type]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$F$F$F$F$F$F$I',  function (x, y, w, h, start, extent, type) {
;C$.superclazz.c$$I.apply(this,[type]);C$.$init$.apply(this);
this.x=x;
this.y=y;
this.width=w;
this.height=h;
this.start=start;
this.extent=extent;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_Rectangle2D$F$F$I',  function (ellipseBounds, start, extent, type) {
;C$.superclazz.c$$I.apply(this,[type]);C$.$init$.apply(this);
this.x=ellipseBounds.getX$();
this.y=ellipseBounds.getY$();
this.width=ellipseBounds.getWidth$();
this.height=ellipseBounds.getHeight$();
this.start=start;
this.extent=extent;
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

Clazz.newMeth(C$, 'getAngleStart$',  function () {
return this.start;
});

Clazz.newMeth(C$, 'getAngleExtent$',  function () {
return this.extent;
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return (this.width <= 0.0  || this.height <= 0.0  );
});

Clazz.newMeth(C$, 'setArc$D$D$D$D$D$D$I',  function (x, y, w, h, angSt, angExt, closure) {
this.setArcType$I(closure);
this.x=x;
this.y=y;
this.width=w;
this.height=h;
this.start=angSt;
this.extent=angExt;
});

Clazz.newMeth(C$, 'setAngleStart$D',  function (angSt) {
this.start=angSt;
});

Clazz.newMeth(C$, 'setAngleExtent$D',  function (angExt) {
this.extent=angExt;
});

Clazz.newMeth(C$, 'makeBounds$D$D$D$D',  function (x, y, w, h) {
return Clazz.new_($I$(1,1).c$$F$F$F$F,[x, y, w, h]);
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Arc2D, "Double", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.geom.Arc2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['x','y','width','height','start','extent']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I.apply(this,[0]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (type) {
;C$.superclazz.c$$I.apply(this,[type]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$D$D$D$D$D$D$I',  function (x, y, w, h, start, extent, type) {
;C$.superclazz.c$$I.apply(this,[type]);C$.$init$.apply(this);
this.x=x;
this.y=y;
this.width=w;
this.height=h;
this.start=start;
this.extent=extent;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_Rectangle2D$D$D$I',  function (ellipseBounds, start, extent, type) {
;C$.superclazz.c$$I.apply(this,[type]);C$.$init$.apply(this);
this.x=ellipseBounds.getX$();
this.y=ellipseBounds.getY$();
this.width=ellipseBounds.getWidth$();
this.height=ellipseBounds.getHeight$();
this.start=start;
this.extent=extent;
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

Clazz.newMeth(C$, 'getAngleStart$',  function () {
return this.start;
});

Clazz.newMeth(C$, 'getAngleExtent$',  function () {
return this.extent;
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return (this.width <= 0.0  || this.height <= 0.0  );
});

Clazz.newMeth(C$, 'setArc$D$D$D$D$D$D$I',  function (x, y, w, h, angSt, angExt, closure) {
this.setArcType$I(closure);
this.x=x;
this.y=y;
this.width=w;
this.height=h;
this.start=angSt;
this.extent=angExt;
});

Clazz.newMeth(C$, 'setAngleStart$D',  function (angSt) {
this.start=angSt;
});

Clazz.newMeth(C$, 'setAngleExtent$D',  function (angExt) {
this.extent=angExt;
});

Clazz.newMeth(C$, 'makeBounds$D$D$D$D',  function (x, y, w, h) {
return Clazz.new_($I$(2,1).c$$D$D$D$D,[x, y, w, h]);
});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
