(function(){var P$=Clazz.newPackage("java.awt.geom"),p$1={},I$=[[0,'java.util.Vector','sun.awt.geom.Curve',['sun.awt.geom.AreaOp','.EOWindOp'],['sun.awt.geom.AreaOp','.NZWindOp'],['sun.awt.geom.AreaOp','.AddOp'],['sun.awt.geom.AreaOp','.SubOp'],['sun.awt.geom.AreaOp','.IntOp'],['sun.awt.geom.AreaOp','.XorOp'],['java.awt.geom.Rectangle2D','.Double'],'sun.awt.geom.Crossings','java.awt.geom.AreaIterator','java.awt.geom.FlatteningPathIterator']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Area", null, null, ['java.awt.Shape', 'Cloneable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['+curves','cachedBounds','java.awt.geom.Rectangle2D']]
,['O',['EmptyCurves','java.util.Vector']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.curves=C$.EmptyCurves;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Shape',  function (s) {
;C$.$init$.apply(this);
if (Clazz.instanceOf(s, "java.awt.geom.Area")) {
this.curves=(s).curves;
} else {
this.curves=C$.pathToCurves$java_awt_geom_PathIterator(s.getPathIterator$java_awt_geom_AffineTransform(null));
}}, 1);

Clazz.newMeth(C$, 'pathToCurves$java_awt_geom_PathIterator',  function (pi) {
var curves=Clazz.new_($I$(1,1));
var windingRule=pi.getWindingRule$();
var coords=Clazz.array(Double.TYPE, [23]);
var movx=0;
var movy=0;
var curx=0;
var cury=0;
var newx;
var newy;
while (!pi.isDone$()){
switch (pi.currentSegment$DA(coords)) {
case 0:
$I$(2).insertLine$java_util_Vector$D$D$D$D(curves, curx, cury, movx, movy);
curx=movx=coords[0];
cury=movy=coords[1];
$I$(2).insertMove$java_util_Vector$D$D(curves, movx, movy);
break;
case 1:
newx=coords[0];
newy=coords[1];
$I$(2).insertLine$java_util_Vector$D$D$D$D(curves, curx, cury, newx, newy);
curx=newx;
cury=newy;
break;
case 2:
newx=coords[2];
newy=coords[3];
$I$(2).insertQuad$java_util_Vector$D$D$DA(curves, curx, cury, coords);
curx=newx;
cury=newy;
break;
case 3:
newx=coords[4];
newy=coords[5];
$I$(2).insertCubic$java_util_Vector$D$D$DA(curves, curx, cury, coords);
curx=newx;
cury=newy;
break;
case 4:
$I$(2).insertLine$java_util_Vector$D$D$D$D(curves, curx, cury, movx, movy);
curx=movx;
cury=movy;
break;
}
pi.next$();
}
$I$(2).insertLine$java_util_Vector$D$D$D$D(curves, curx, cury, movx, movy);
var operator;
if (windingRule == 0) {
operator=Clazz.new_($I$(3,1));
} else {
operator=Clazz.new_($I$(4,1));
}return operator.calculate$java_util_Vector$java_util_Vector(curves, C$.EmptyCurves);
}, 1);

Clazz.newMeth(C$, 'add$java_awt_geom_Area',  function (rhs) {
this.curves=Clazz.new_($I$(5,1)).calculate$java_util_Vector$java_util_Vector(this.curves, rhs.curves);
p$1.invalidateBounds.apply(this, []);
});

Clazz.newMeth(C$, 'subtract$java_awt_geom_Area',  function (rhs) {
this.curves=Clazz.new_($I$(6,1)).calculate$java_util_Vector$java_util_Vector(this.curves, rhs.curves);
p$1.invalidateBounds.apply(this, []);
});

Clazz.newMeth(C$, 'intersect$java_awt_geom_Area',  function (rhs) {
this.curves=Clazz.new_($I$(7,1)).calculate$java_util_Vector$java_util_Vector(this.curves, rhs.curves);
p$1.invalidateBounds.apply(this, []);
});

Clazz.newMeth(C$, 'exclusiveOr$java_awt_geom_Area',  function (rhs) {
this.curves=Clazz.new_($I$(8,1)).calculate$java_util_Vector$java_util_Vector(this.curves, rhs.curves);
p$1.invalidateBounds.apply(this, []);
});

Clazz.newMeth(C$, 'reset$',  function () {
this.curves=Clazz.new_($I$(1,1));
p$1.invalidateBounds.apply(this, []);
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return (this.curves.size$() == 0);
});

Clazz.newMeth(C$, 'isPolygonal$',  function () {
var enum_=this.curves.elements$();
while (enum_.hasMoreElements$()){
if ((enum_.nextElement$()).getOrder$() > 1) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'isRectangular$',  function () {
var size=this.curves.size$();
if (size == 0) {
return true;
}if (size > 3) {
return false;
}var c1=this.curves.get$I(1);
var c2=this.curves.get$I(2);
if (c1.getOrder$() != 1 || c2.getOrder$() != 1 ) {
return false;
}if (c1.getXTop$() != c1.getXBot$()  || c2.getXTop$() != c2.getXBot$()  ) {
return false;
}if (c1.getYTop$() != c2.getYTop$()  || c1.getYBot$() != c2.getYBot$()  ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'isSingular$',  function () {
if (this.curves.size$() < 3) {
return true;
}var enum_=this.curves.elements$();
enum_.nextElement$();
while (enum_.hasMoreElements$()){
if ((enum_.nextElement$()).getOrder$() == 0) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'invalidateBounds',  function () {
this.cachedBounds=null;
}, p$1);

Clazz.newMeth(C$, 'getCachedBounds',  function () {
if (this.cachedBounds != null ) {
return this.cachedBounds;
}var r=Clazz.new_($I$(9,1));
if (this.curves.size$() > 0) {
var c=this.curves.get$I(0);
r.setRect$D$D$D$D(c.getX0$(), c.getY0$(), 0, 0);
for (var i=1; i < this.curves.size$(); i++) {
(this.curves.get$I(i)).enlarge$java_awt_geom_Rectangle2D(r);
}
}return (this.cachedBounds=r);
}, p$1);

Clazz.newMeth(C$, 'getBounds2D$',  function () {
return p$1.getCachedBounds.apply(this, []).getBounds2D$();
});

Clazz.newMeth(C$, 'getBounds$',  function () {
return p$1.getCachedBounds.apply(this, []).getBounds$();
});

Clazz.newMeth(C$, 'clone$',  function () {
return Clazz.new_(C$.c$$java_awt_Shape,[this]);
});

Clazz.newMeth(C$, 'equals$java_awt_geom_Area',  function (other) {
if (other === this ) {
return true;
}if (other == null ) {
return false;
}var c=Clazz.new_($I$(8,1)).calculate$java_util_Vector$java_util_Vector(this.curves, other.curves);
return c.isEmpty$();
});

Clazz.newMeth(C$, 'transform$java_awt_geom_AffineTransform',  function (t) {
if (t == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["transform must not be null"]);
}this.curves=C$.pathToCurves$java_awt_geom_PathIterator(this.getPathIterator$java_awt_geom_AffineTransform(t));
p$1.invalidateBounds.apply(this, []);
});

Clazz.newMeth(C$, 'createTransformedArea$java_awt_geom_AffineTransform',  function (t) {
var a=Clazz.new_(C$.c$$java_awt_Shape,[this]);
a.transform$java_awt_geom_AffineTransform(t);
return a;
});

Clazz.newMeth(C$, 'contains$D$D',  function (x, y) {
if (!p$1.getCachedBounds.apply(this, []).contains$D$D(x, y)) {
return false;
}var enum_=this.curves.elements$();
var crossings=0;
while (enum_.hasMoreElements$()){
var c=enum_.nextElement$();
crossings+=c.crossingsFor$D$D(x, y);
}
return ((crossings & 1) == 1);
});

Clazz.newMeth(C$, 'contains$java_awt_geom_Point2D',  function (p) {
return this.contains$D$D(p.getX$(), p.getY$());
});

Clazz.newMeth(C$, 'contains$D$D$D$D',  function (x, y, w, h) {
if (w < 0  || h < 0  ) {
return false;
}if (!p$1.getCachedBounds.apply(this, []).contains$D$D$D$D(x, y, w, h)) {
return false;
}var c=$I$(10).findCrossings$java_util_Vector$D$D$D$D(this.curves, x, y, x + w, y + h);
return (c != null  && c.covers$D$D(y, y + h) );
});

Clazz.newMeth(C$, 'contains$java_awt_geom_Rectangle2D',  function (r) {
return this.contains$D$D$D$D(r.getX$(), r.getY$(), r.getWidth$(), r.getHeight$());
});

Clazz.newMeth(C$, 'intersects$D$D$D$D',  function (x, y, w, h) {
if (w < 0  || h < 0  ) {
return false;
}if (!p$1.getCachedBounds.apply(this, []).intersects$D$D$D$D(x, y, w, h)) {
return false;
}var c=$I$(10).findCrossings$java_util_Vector$D$D$D$D(this.curves, x, y, x + w, y + h);
return (c == null  || !c.isEmpty$() );
});

Clazz.newMeth(C$, 'intersects$java_awt_geom_Rectangle2D',  function (r) {
return this.intersects$D$D$D$D(r.getX$(), r.getY$(), r.getWidth$(), r.getHeight$());
});

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform',  function (at) {
return Clazz.new_($I$(11,1).c$$java_util_Vector$java_awt_geom_AffineTransform,[this.curves, at]);
});

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform$D',  function (at, flatness) {
return Clazz.new_([this.getPathIterator$java_awt_geom_AffineTransform(at), flatness],$I$(12,1).c$$java_awt_geom_PathIterator$D);
});

C$.$static$=function(){C$.$static$=0;
C$.EmptyCurves=Clazz.new_($I$(1,1));
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
