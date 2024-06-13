(function(){var P$=Clazz.newPackage("java.awt.geom"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AreaIterator", null, null, 'java.awt.geom.PathIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index'],'O',['transform','java.awt.geom.AffineTransform','curves','java.util.Vector','prevcurve','sun.awt.geom.Curve','+thiscurve']]]

Clazz.newMeth(C$, 'c$$java_util_Vector$java_awt_geom_AffineTransform',  function (curves, at) {
;C$.$init$.apply(this);
this.curves=curves;
this.transform=at;
if (curves.size$() >= 1) {
this.thiscurve=curves.get$I(0);
}}, 1);

Clazz.newMeth(C$, 'getWindingRule$',  function () {
return 1;
});

Clazz.newMeth(C$, 'isDone$',  function () {
return (this.prevcurve == null  && this.thiscurve == null  );
});

Clazz.newMeth(C$, 'next$',  function () {
if (this.prevcurve != null ) {
this.prevcurve=null;
} else {
this.prevcurve=this.thiscurve;
++this.index;
if (this.index < this.curves.size$()) {
this.thiscurve=this.curves.get$I(this.index);
if (this.thiscurve.getOrder$() != 0 && this.prevcurve.getX1$() == this.thiscurve.getX0$()   && this.prevcurve.getY1$() == this.thiscurve.getY0$()  ) {
this.prevcurve=null;
}} else {
this.thiscurve=null;
}}});

Clazz.newMeth(C$, 'currentSegment$FA',  function (coords) {
var dcoords=Clazz.array(Double.TYPE, [6]);
var segtype=this.currentSegment$DA(dcoords);
var numpoints=(segtype == 4 ? 0 : (segtype == 2 ? 2 : (segtype == 3 ? 3 : 1)));
for (var i=0; i < numpoints * 2; i++) {
coords[i]=dcoords[i];
}
return segtype;
});

Clazz.newMeth(C$, 'currentSegment$DA',  function (coords) {
var segtype;
var numpoints;
if (this.prevcurve != null ) {
if (this.thiscurve == null  || this.thiscurve.getOrder$() == 0 ) {
return 4;
}coords[0]=this.thiscurve.getX0$();
coords[1]=this.thiscurve.getY0$();
segtype=1;
numpoints=1;
} else if (this.thiscurve == null ) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["area iterator out of bounds"]);
} else {
segtype=this.thiscurve.getSegment$DA(coords);
numpoints=this.thiscurve.getOrder$();
if (numpoints == 0) {
numpoints=1;
}}if (this.transform != null ) {
this.transform.transform$DA$I$DA$I$I(coords, 0, coords, 0, numpoints);
}return segtype;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
