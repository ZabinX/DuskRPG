(function(){var P$=Clazz.newPackage("sun.font"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DelegatingShape", null, null, 'java.awt.Shape');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['delegate','java.awt.Shape']]]

Clazz.newMeth(C$, 'c$$java_awt_Shape',  function (delegate) {
;C$.$init$.apply(this);
this.delegate=delegate;
}, 1);

Clazz.newMeth(C$, 'getBounds$',  function () {
return this.delegate.getBounds$();
});

Clazz.newMeth(C$, 'getBounds2D$',  function () {
return this.delegate.getBounds2D$();
});

Clazz.newMeth(C$, 'contains$D$D',  function (x, y) {
return this.delegate.contains$D$D(x, y);
});

Clazz.newMeth(C$, 'contains$java_awt_geom_Point2D',  function (p) {
return this.delegate.contains$java_awt_geom_Point2D(p);
});

Clazz.newMeth(C$, 'intersects$D$D$D$D',  function (x, y, w, h) {
return this.delegate.intersects$D$D$D$D(x, y, w, h);
});

Clazz.newMeth(C$, 'intersects$java_awt_geom_Rectangle2D',  function (r) {
return this.delegate.intersects$java_awt_geom_Rectangle2D(r);
});

Clazz.newMeth(C$, 'contains$D$D$D$D',  function (x, y, w, h) {
return this.delegate.contains$D$D$D$D(x, y, w, h);
});

Clazz.newMeth(C$, 'contains$java_awt_geom_Rectangle2D',  function (r) {
return this.delegate.contains$java_awt_geom_Rectangle2D(r);
});

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform',  function (at) {
return this.delegate.getPathIterator$java_awt_geom_AffineTransform(at);
});

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform$D',  function (at, flatness) {
return this.delegate.getPathIterator$java_awt_geom_AffineTransform$D(at, flatness);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
