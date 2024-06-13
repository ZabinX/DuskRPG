(function(){var P$=Clazz.newPackage("java.awt"),p$1={},I$=[[0,'java.util.Arrays','java.awt.Rectangle',['sun.awt.geom.Crossings','.EvenOdd'],['java.awt.Polygon','.PolygonPathIterator']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Polygon", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.awt.Shape');
C$.$classes$=[['PolygonPathIterator',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['npoints'],'O',['xpoints','int[]','+ypoints','bounds','java.awt.Rectangle']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.xpoints=Clazz.array(Integer.TYPE, [4]);
this.ypoints=Clazz.array(Integer.TYPE, [4]);
}, 1);

Clazz.newMeth(C$, 'c$$IA$IA$I',  function (xpoints, ypoints, npoints) {
;C$.$init$.apply(this);
if (npoints > xpoints.length || npoints > ypoints.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["npoints > xpoints.length || npoints > ypoints.length"]);
}if (npoints < 0) {
throw Clazz.new_(Clazz.load('NegativeArraySizeException').c$$S,["npoints < 0"]);
}this.npoints=npoints;
this.xpoints=$I$(1).copyOf$IA$I(xpoints, npoints);
this.ypoints=$I$(1).copyOf$IA$I(ypoints, npoints);
}, 1);

Clazz.newMeth(C$, 'reset$',  function () {
this.npoints=0;
this.bounds=null;
});

Clazz.newMeth(C$, 'invalidate$',  function () {
this.bounds=null;
});

Clazz.newMeth(C$, 'translate$I$I',  function (deltaX, deltaY) {
for (var i=0; i < this.npoints; i++) {
this.xpoints[i]+=deltaX;
this.ypoints[i]+=deltaY;
}
if (this.bounds != null ) {
this.bounds.translate$I$I(deltaX, deltaY);
}});

Clazz.newMeth(C$, 'calculateBounds$IA$IA$I',  function (xpoints, ypoints, npoints) {
var boundsMinX=2147483647;
var boundsMinY=2147483647;
var boundsMaxX=-2147483648;
var boundsMaxY=-2147483648;
for (var i=0; i < npoints; i++) {
var x=xpoints[i];
boundsMinX=Math.min(boundsMinX, x);
boundsMaxX=Math.max(boundsMaxX, x);
var y=ypoints[i];
boundsMinY=Math.min(boundsMinY, y);
boundsMaxY=Math.max(boundsMaxY, y);
}
this.bounds=Clazz.new_($I$(2,1).c$$I$I$I$I,[boundsMinX, boundsMinY, boundsMaxX - boundsMinX, boundsMaxY - boundsMinY]);
});

Clazz.newMeth(C$, 'updateBounds$I$I',  function (x, y) {
if (x < this.bounds.x) {
this.bounds.width=this.bounds.width + (this.bounds.x - x);
this.bounds.x=x;
} else {
this.bounds.width=Math.max(this.bounds.width, x - this.bounds.x);
}if (y < this.bounds.y) {
this.bounds.height=this.bounds.height + (this.bounds.y - y);
this.bounds.y=y;
} else {
this.bounds.height=Math.max(this.bounds.height, y - this.bounds.y);
}});

Clazz.newMeth(C$, 'addPoint$I$I',  function (x, y) {
if (this.npoints >= this.xpoints.length || this.npoints >= this.ypoints.length ) {
var newLength=this.npoints * 2;
if (newLength < 4) {
newLength=4;
} else if ((newLength & (newLength - 1)) != 0) {
newLength=Integer.highestOneBit$I(newLength);
}this.xpoints=$I$(1).copyOf$IA$I(this.xpoints, newLength);
this.ypoints=$I$(1).copyOf$IA$I(this.ypoints, newLength);
}this.xpoints[this.npoints]=x;
this.ypoints[this.npoints]=y;
++this.npoints;
if (this.bounds != null ) {
this.updateBounds$I$I(x, y);
}});

Clazz.newMeth(C$, 'getBounds$',  function () {
return this.getBoundingBox$();
});

Clazz.newMeth(C$, 'getBoundingBox$',  function () {
if (this.npoints == 0) {
return Clazz.new_($I$(2,1));
}if (this.bounds == null ) {
this.calculateBounds$IA$IA$I(this.xpoints, this.ypoints, this.npoints);
}return this.bounds.getBounds$();
});

Clazz.newMeth(C$, 'contains$java_awt_Point',  function (p) {
return this.contains$I$I(p.x, p.y);
});

Clazz.newMeth(C$, 'contains$I$I',  function (x, y) {
return this.contains$D$D(x, y);
});

Clazz.newMeth(C$, 'inside$I$I',  function (x, y) {
return this.contains$D$D(x, y);
});

Clazz.newMeth(C$, 'getBounds2D$',  function () {
return this.getBounds$();
});

Clazz.newMeth(C$, 'contains$D$D',  function (x, y) {
if (this.npoints <= 2 || !this.getBoundingBox$().contains$D$D(x, y) ) {
return false;
}var hits=0;
var lastx=this.xpoints[this.npoints - 1];
var lasty=this.ypoints[this.npoints - 1];
var curx;
var cury;
for (var i=0; i < this.npoints; lastx=curx, lasty=cury, i++) {
curx=this.xpoints[i];
cury=this.ypoints[i];
if (cury == lasty) {
continue;
}var leftx;
if (curx < lastx) {
if (x >= lastx ) {
continue;
}leftx=curx;
} else {
if (x >= curx ) {
continue;
}leftx=lastx;
}var test1;
var test2;
if (cury < lasty) {
if (y < cury  || y >= lasty  ) {
continue;
}if (x < leftx ) {
++hits;
continue;
}test1=x - curx;
test2=y - cury;
} else {
if (y < lasty  || y >= cury  ) {
continue;
}if (x < leftx ) {
++hits;
continue;
}test1=x - lastx;
test2=y - lasty;
}if (test1 < (test2 / (lasty - cury) * (lastx - curx)) ) {
++hits;
}}
return ((hits & 1) != 0);
});

Clazz.newMeth(C$, 'getCrossings$D$D$D$D',  function (xlo, ylo, xhi, yhi) {
var cross=Clazz.new_($I$(3,1).c$$D$D$D$D,[xlo, ylo, xhi, yhi]);
var lastx=this.xpoints[this.npoints - 1];
var lasty=this.ypoints[this.npoints - 1];
var curx;
var cury;
for (var i=0; i < this.npoints; i++) {
curx=this.xpoints[i];
cury=this.ypoints[i];
if (cross.accumulateLine$D$D$D$D(lastx, lasty, curx, cury)) {
return null;
}lastx=curx;
lasty=cury;
}
return cross;
}, p$1);

Clazz.newMeth(C$, 'contains$java_awt_geom_Point2D',  function (p) {
return this.contains$D$D(p.getX$(), p.getY$());
});

Clazz.newMeth(C$, 'intersects$D$D$D$D',  function (x, y, w, h) {
if (this.npoints <= 0 || !this.getBoundingBox$().intersects$D$D$D$D(x, y, w, h) ) {
return false;
}var cross=p$1.getCrossings$D$D$D$D.apply(this, [x, y, x + w, y + h]);
return (cross == null  || !cross.isEmpty$() );
});

Clazz.newMeth(C$, 'intersects$java_awt_geom_Rectangle2D',  function (r) {
return this.intersects$D$D$D$D(r.getX$(), r.getY$(), r.getWidth$(), r.getHeight$());
});

Clazz.newMeth(C$, 'contains$D$D$D$D',  function (x, y, w, h) {
if (this.npoints <= 0 || !this.getBoundingBox$().intersects$D$D$D$D(x, y, w, h) ) {
return false;
}var cross=p$1.getCrossings$D$D$D$D.apply(this, [x, y, x + w, y + h]);
return (cross != null  && cross.covers$D$D(y, y + h) );
});

Clazz.newMeth(C$, 'contains$java_awt_geom_Rectangle2D',  function (r) {
return this.contains$D$D$D$D(r.getX$(), r.getY$(), r.getWidth$(), r.getHeight$());
});

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform',  function (at) {
return Clazz.new_($I$(4,1).c$$java_awt_Polygon$java_awt_geom_AffineTransform,[this, null, this, at]);
});

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform$D',  function (at, flatness) {
return this.getPathIterator$java_awt_geom_AffineTransform(at);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Polygon, "PolygonPathIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.geom.PathIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index'],'O',['poly','java.awt.Polygon','transform','java.awt.geom.AffineTransform']]]

Clazz.newMeth(C$, 'c$$java_awt_Polygon$java_awt_geom_AffineTransform',  function (pg, at) {
;C$.$init$.apply(this);
this.poly=pg;
this.transform=at;
if (pg.npoints == 0) {
this.index=1;
}}, 1);

Clazz.newMeth(C$, 'getWindingRule$',  function () {
return 0;
});

Clazz.newMeth(C$, 'isDone$',  function () {
return this.index > this.poly.npoints;
});

Clazz.newMeth(C$, 'next$',  function () {
++this.index;
});

Clazz.newMeth(C$, 'currentSegment$FA',  function (coords) {
if (this.index >= this.poly.npoints) {
return 4;
}coords[0]=this.poly.xpoints[this.index];
coords[1]=this.poly.ypoints[this.index];
if (this.transform != null ) {
this.transform.transform$FA$I$FA$I$I(coords, 0, coords, 0, 1);
}return (this.index == 0 ? 0 : 1);
});

Clazz.newMeth(C$, 'currentSegment$DA',  function (coords) {
if (this.index >= this.poly.npoints) {
return 4;
}coords[0]=this.poly.xpoints[this.index];
coords[1]=this.poly.ypoints[this.index];
if (this.transform != null ) {
this.transform.transform$DA$I$DA$I$I(coords, 0, coords, 0, 1);
}return (this.index == 0 ? 0 : 1);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:06 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
