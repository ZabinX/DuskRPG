(function(){var P$=Clazz.newPackage("java.awt.geom"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "QuadIterator", null, null, 'java.awt.geom.PathIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index'],'O',['quad','java.awt.geom.QuadCurve2D','affine','java.awt.geom.AffineTransform']]]

Clazz.newMeth(C$, 'c$$java_awt_geom_QuadCurve2D$java_awt_geom_AffineTransform',  function (q, at) {
;C$.$init$.apply(this);
this.quad=q;
this.affine=at;
}, 1);

Clazz.newMeth(C$, 'getWindingRule$',  function () {
return 1;
});

Clazz.newMeth(C$, 'isDone$',  function () {
return (this.index > 1);
});

Clazz.newMeth(C$, 'next$',  function () {
++this.index;
});

Clazz.newMeth(C$, 'currentSegment$FA',  function (coords) {
if (this.isDone$()) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["quad iterator iterator out of bounds"]);
}var type;
if (this.index == 0) {
coords[0]=this.quad.getX1$();
coords[1]=this.quad.getY1$();
type=0;
} else {
coords[0]=this.quad.getCtrlX$();
coords[1]=this.quad.getCtrlY$();
coords[2]=this.quad.getX2$();
coords[3]=this.quad.getY2$();
type=2;
}if (this.affine != null ) {
this.affine.transform$FA$I$FA$I$I(coords, 0, coords, 0, this.index == 0 ? 1 : 2);
}return type;
});

Clazz.newMeth(C$, 'currentSegment$DA',  function (coords) {
if (this.isDone$()) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["quad iterator iterator out of bounds"]);
}var type;
if (this.index == 0) {
coords[0]=this.quad.getX1$();
coords[1]=this.quad.getY1$();
type=0;
} else {
coords[0]=this.quad.getCtrlX$();
coords[1]=this.quad.getCtrlY$();
coords[2]=this.quad.getX2$();
coords[3]=this.quad.getY2$();
type=2;
}if (this.affine != null ) {
this.affine.transform$DA$I$DA$I$I(coords, 0, coords, 0, this.index == 0 ? 1 : 2);
}return type;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
