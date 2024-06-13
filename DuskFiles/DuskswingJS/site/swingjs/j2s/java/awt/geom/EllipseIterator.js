(function(){var P$=Clazz.newPackage("java.awt.geom"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "EllipseIterator", null, null, 'java.awt.geom.PathIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['x','y','w','h'],'I',['index'],'O',['affine','java.awt.geom.AffineTransform']]
,['O',['ctrlpts','double[][]']]]

Clazz.newMeth(C$, 'c$$java_awt_geom_Ellipse2D$java_awt_geom_AffineTransform',  function (e, at) {
;C$.$init$.apply(this);
this.x=e.getX$();
this.y=e.getY$();
this.w=e.getWidth$();
this.h=e.getHeight$();
this.affine=at;
if (this.w < 0  || this.h < 0  ) {
this.index=6;
}}, 1);

Clazz.newMeth(C$, 'getWindingRule$',  function () {
return 1;
});

Clazz.newMeth(C$, 'isDone$',  function () {
return this.index > 5;
});

Clazz.newMeth(C$, 'next$',  function () {
++this.index;
});

Clazz.newMeth(C$, 'currentSegment$FA',  function (coords) {
if (this.isDone$()) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["ellipse iterator out of bounds"]);
}if (this.index == 5) {
return 4;
}if (this.index == 0) {
var ctrls=C$.ctrlpts[3];
coords[0]=(this.x + ctrls[4] * this.w);
coords[1]=(this.y + ctrls[5] * this.h);
if (this.affine != null ) {
this.affine.transform$FA$I$FA$I$I(coords, 0, coords, 0, 1);
}return 0;
}var ctrls=C$.ctrlpts[this.index - 1];
coords[0]=(this.x + ctrls[0] * this.w);
coords[1]=(this.y + ctrls[1] * this.h);
coords[2]=(this.x + ctrls[2] * this.w);
coords[3]=(this.y + ctrls[3] * this.h);
coords[4]=(this.x + ctrls[4] * this.w);
coords[5]=(this.y + ctrls[5] * this.h);
if (this.affine != null ) {
this.affine.transform$FA$I$FA$I$I(coords, 0, coords, 0, 3);
}return 3;
});

Clazz.newMeth(C$, 'currentSegment$DA',  function (coords) {
if (this.isDone$()) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["ellipse iterator out of bounds"]);
}if (this.index == 5) {
return 4;
}if (this.index == 0) {
var ctrls=C$.ctrlpts[3];
coords[0]=this.x + ctrls[4] * this.w;
coords[1]=this.y + ctrls[5] * this.h;
if (this.affine != null ) {
this.affine.transform$DA$I$DA$I$I(coords, 0, coords, 0, 1);
}return 0;
}var ctrls=C$.ctrlpts[this.index - 1];
coords[0]=this.x + ctrls[0] * this.w;
coords[1]=this.y + ctrls[1] * this.h;
coords[2]=this.x + ctrls[2] * this.w;
coords[3]=this.y + ctrls[3] * this.h;
coords[4]=this.x + ctrls[4] * this.w;
coords[5]=this.y + ctrls[5] * this.h;
if (this.affine != null ) {
this.affine.transform$DA$I$DA$I$I(coords, 0, coords, 0, 3);
}return 3;
});

C$.$static$=function(){C$.$static$=0;
C$.ctrlpts=Clazz.array(Double.TYPE, -2, [Clazz.array(Double.TYPE, -1, [1.0, 0.7761423749153966, 0.7761423749153966, 1.0, 0.5, 1.0]), Clazz.array(Double.TYPE, -1, [0.22385762508460333, 1.0, 0.0, 0.7761423749153966, 0.0, 0.5]), Clazz.array(Double.TYPE, -1, [0.0, 0.22385762508460333, 0.22385762508460333, 0.0, 0.5, 0.0]), Clazz.array(Double.TYPE, -1, [0.7761423749153966, 0.0, 1.0, 0.22385762508460333, 1.0, 0.5])]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
