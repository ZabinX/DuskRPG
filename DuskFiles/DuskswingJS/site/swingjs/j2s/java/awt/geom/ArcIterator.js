(function(){var P$=Clazz.newPackage("java.awt.geom"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ArcIterator", null, null, 'java.awt.geom.PathIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['x','y','w','h','angStRad','increment','cv'],'I',['index','arcSegs','lineSegs'],'O',['affine','java.awt.geom.AffineTransform']]]

Clazz.newMeth(C$, 'c$$java_awt_geom_Arc2D$java_awt_geom_AffineTransform',  function (a, at) {
;C$.$init$.apply(this);
this.w=a.getWidth$() / 2;
this.h=a.getHeight$() / 2;
this.x=a.getX$() + this.w;
this.y=a.getY$() + this.h;
this.angStRad=-Math.toRadians(a.getAngleStart$());
this.affine=at;
var ext=-a.getAngleExtent$();
if (ext >= 360.0  || ext <= -360  ) {
this.arcSegs=4;
this.increment=1.5707963267948966;
this.cv=0.5522847498307933;
if (ext < 0 ) {
this.increment=-this.increment;
this.cv=-this.cv;
}} else {
this.arcSegs=(Math.ceil(Math.abs(ext) / 90.0)|0);
this.increment=Math.toRadians(ext / this.arcSegs);
this.cv=C$.btan$D(this.increment);
if (this.cv == 0 ) {
this.arcSegs=0;
}}switch (a.getArcType$()) {
case 0:
this.lineSegs=0;
break;
case 1:
this.lineSegs=1;
break;
case 2:
this.lineSegs=2;
break;
}
if (this.w < 0  || this.h < 0  ) {
this.arcSegs=this.lineSegs=-1;
}}, 1);

Clazz.newMeth(C$, 'getWindingRule$',  function () {
return 1;
});

Clazz.newMeth(C$, 'isDone$',  function () {
return this.index > this.arcSegs + this.lineSegs;
});

Clazz.newMeth(C$, 'next$',  function () {
++this.index;
});

Clazz.newMeth(C$, 'btan$D',  function (increment) {
increment/=2.0;
return 1.3333333333333333 * Math.sin(increment) / (1.0 + Math.cos(increment));
}, 1);

Clazz.newMeth(C$, 'currentSegment$FA',  function (coords) {
if (this.isDone$()) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["arc iterator out of bounds"]);
}var angle=this.angStRad;
if (this.index == 0) {
coords[0]=(this.x + Math.cos(angle) * this.w);
coords[1]=(this.y + Math.sin(angle) * this.h);
if (this.affine != null ) {
this.affine.transform$FA$I$FA$I$I(coords, 0, coords, 0, 1);
}return 0;
}if (this.index > this.arcSegs) {
if (this.index == this.arcSegs + this.lineSegs) {
return 4;
}coords[0]=this.x;
coords[1]=this.y;
if (this.affine != null ) {
this.affine.transform$FA$I$FA$I$I(coords, 0, coords, 0, 1);
}return 1;
}angle+=this.increment * (this.index - 1);
var relx=Math.cos(angle);
var rely=Math.sin(angle);
coords[0]=(this.x + (relx - this.cv * rely) * this.w);
coords[1]=(this.y + (rely + this.cv * relx) * this.h);
angle+=this.increment;
relx=Math.cos(angle);
rely=Math.sin(angle);
coords[2]=(this.x + (relx + this.cv * rely) * this.w);
coords[3]=(this.y + (rely - this.cv * relx) * this.h);
coords[4]=(this.x + relx * this.w);
coords[5]=(this.y + rely * this.h);
if (this.affine != null ) {
this.affine.transform$FA$I$FA$I$I(coords, 0, coords, 0, 3);
}return 3;
});

Clazz.newMeth(C$, 'currentSegment$DA',  function (coords) {
if (this.isDone$()) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["arc iterator out of bounds"]);
}var angle=this.angStRad;
if (this.index == 0) {
coords[0]=this.x + Math.cos(angle) * this.w;
coords[1]=this.y + Math.sin(angle) * this.h;
if (this.affine != null ) {
this.affine.transform$DA$I$DA$I$I(coords, 0, coords, 0, 1);
}return 0;
}if (this.index > this.arcSegs) {
if (this.index == this.arcSegs + this.lineSegs) {
return 4;
}coords[0]=this.x;
coords[1]=this.y;
if (this.affine != null ) {
this.affine.transform$DA$I$DA$I$I(coords, 0, coords, 0, 1);
}return 1;
}angle+=this.increment * (this.index - 1);
var relx=Math.cos(angle);
var rely=Math.sin(angle);
coords[0]=this.x + (relx - this.cv * rely) * this.w;
coords[1]=this.y + (rely + this.cv * relx) * this.h;
angle+=this.increment;
relx=Math.cos(angle);
rely=Math.sin(angle);
coords[2]=this.x + (relx + this.cv * rely) * this.w;
coords[3]=this.y + (rely - this.cv * relx) * this.h;
coords[4]=this.x + relx * this.w;
coords[5]=this.y + rely * this.h;
if (this.affine != null ) {
this.affine.transform$DA$I$DA$I$I(coords, 0, coords, 0, 3);
}return 3;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
