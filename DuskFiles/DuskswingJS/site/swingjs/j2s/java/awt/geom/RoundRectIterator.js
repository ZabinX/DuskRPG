(function(){var P$=Clazz.newPackage("java.awt.geom"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RoundRectIterator", null, null, 'java.awt.geom.PathIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['x','y','w','h','aw','ah'],'I',['index'],'O',['affine','java.awt.geom.AffineTransform']]
,['D',['a','b','c','cv','acv'],'O',['ctrlpts','double[][]','types','int[]']]]

Clazz.newMeth(C$, 'c$$java_awt_geom_RoundRectangle2D$java_awt_geom_AffineTransform',  function (rr, at) {
;C$.$init$.apply(this);
this.x=rr.getX$();
this.y=rr.getY$();
this.w=rr.getWidth$();
this.h=rr.getHeight$();
this.aw=Math.min(this.w, Math.abs(rr.getArcWidth$()));
this.ah=Math.min(this.h, Math.abs(rr.getArcHeight$()));
this.affine=at;
if (this.aw < 0  || this.ah < 0  ) {
this.index=C$.ctrlpts.length;
}}, 1);

Clazz.newMeth(C$, 'getWindingRule$',  function () {
return 1;
});

Clazz.newMeth(C$, 'isDone$',  function () {
return this.index >= C$.ctrlpts.length;
});

Clazz.newMeth(C$, 'next$',  function () {
++this.index;
});

Clazz.newMeth(C$, 'currentSegment$FA',  function (coords) {
if (this.isDone$()) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["roundrect iterator out of bounds"]);
}var ctrls=C$.ctrlpts[this.index];
var nc=0;
for (var i=0; i < ctrls.length; i+=4) {
coords[nc++]=(this.x + ctrls[i + 0] * this.w + ctrls[i + 1] * this.aw);
coords[nc++]=(this.y + ctrls[i + 2] * this.h + ctrls[i + 3] * this.ah);
}
if (this.affine != null ) {
this.affine.transform$FA$I$FA$I$I(coords, 0, coords, 0, (nc/2|0));
}return C$.types[this.index];
});

Clazz.newMeth(C$, 'currentSegment$DA',  function (coords) {
if (this.isDone$()) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["roundrect iterator out of bounds"]);
}var ctrls=C$.ctrlpts[this.index];
var nc=0;
for (var i=0; i < ctrls.length; i+=4) {
coords[nc++]=(this.x + ctrls[i + 0] * this.w + ctrls[i + 1] * this.aw);
coords[nc++]=(this.y + ctrls[i + 2] * this.h + ctrls[i + 3] * this.ah);
}
if (this.affine != null ) {
this.affine.transform$DA$I$DA$I$I(coords, 0, coords, 0, (nc/2|0));
}return C$.types[this.index];
});

C$.$static$=function(){C$.$static$=0;
C$.a=1.0 - Math.cos(0.7853981633974483);
C$.b=Math.tan(0.7853981633974483);
C$.c=Math.sqrt(1.0 + C$.b * C$.b) - 1 + C$.a;
C$.cv=1.3333333333333333 * C$.a * C$.b / C$.c;
C$.acv=(1.0 - C$.cv) / 2.0;
C$.ctrlpts=Clazz.array(Double.TYPE, -2, [Clazz.array(Double.TYPE, -1, [0.0, 0.0, 0.0, 0.5]), Clazz.array(Double.TYPE, -1, [0.0, 0.0, 1.0, -0.5]), Clazz.array(Double.TYPE, -1, [0.0, 0.0, 1.0, -C$.acv, 0.0, C$.acv, 1.0, 0.0, 0.0, 0.5, 1.0, 0.0]), Clazz.array(Double.TYPE, -1, [1.0, -0.5, 1.0, 0.0]), Clazz.array(Double.TYPE, -1, [1.0, -C$.acv, 1.0, 0.0, 1.0, 0.0, 1.0, -C$.acv, 1.0, 0.0, 1.0, -0.5]), Clazz.array(Double.TYPE, -1, [1.0, 0.0, 0.0, 0.5]), Clazz.array(Double.TYPE, -1, [1.0, 0.0, 0.0, C$.acv, 1.0, -C$.acv, 0.0, 0.0, 1.0, -0.5, 0.0, 0.0]), Clazz.array(Double.TYPE, -1, [0.0, 0.5, 0.0, 0.0]), Clazz.array(Double.TYPE, -1, [0.0, C$.acv, 0.0, 0.0, 0.0, 0.0, 0.0, C$.acv, 0.0, 0.0, 0.0, 0.5]), Clazz.array(Double.TYPE, -1, [])]);
C$.types=Clazz.array(Integer.TYPE, -1, [0, 1, 3, 1, 3, 1, 3, 1, 3, 4]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
