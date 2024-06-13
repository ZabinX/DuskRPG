(function(){var P$=Clazz.newPackage("java.awt.geom"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LineIterator", null, null, 'java.awt.geom.PathIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index'],'O',['line','java.awt.geom.Line2D','affine','java.awt.geom.AffineTransform']]]

Clazz.newMeth(C$, 'c$$java_awt_geom_Line2D$java_awt_geom_AffineTransform',  function (l, at) {
;C$.$init$.apply(this);
this.line=l;
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
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["line iterator out of bounds"]);
}var type;
if (this.index == 0) {
coords[0]=this.line.getX1$();
coords[1]=this.line.getY1$();
type=0;
} else {
coords[0]=this.line.getX2$();
coords[1]=this.line.getY2$();
type=1;
}if (this.affine != null ) {
this.affine.transform$FA$I$FA$I$I(coords, 0, coords, 0, 1);
}return type;
});

Clazz.newMeth(C$, 'currentSegment$DA',  function (coords) {
if (this.isDone$()) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["line iterator out of bounds"]);
}var type;
if (this.index == 0) {
coords[0]=this.line.getX1$();
coords[1]=this.line.getY1$();
type=0;
} else {
coords[0]=this.line.getX2$();
coords[1]=this.line.getY2$();
type=1;
}if (this.affine != null ) {
this.affine.transform$DA$I$DA$I$I(coords, 0, coords, 0, 1);
}return type;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
