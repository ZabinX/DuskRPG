(function(){var P$=Clazz.newPackage("sun.awt.geom"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Edge");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['activey','lastLimit'],'I',['ctag','etag','equivalence','lastResult'],'O',['curve','sun.awt.geom.Curve','lastEdge','sun.awt.geom.Edge']]]

Clazz.newMeth(C$, 'c$$sun_awt_geom_Curve$I',  function (c, ctag) {
C$.c$$sun_awt_geom_Curve$I$I.apply(this, [c, ctag, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$sun_awt_geom_Curve$I$I',  function (c, ctag, etag) {
;C$.$init$.apply(this);
this.curve=c;
this.ctag=ctag;
this.etag=etag;
}, 1);

Clazz.newMeth(C$, 'getCurve$',  function () {
return this.curve;
});

Clazz.newMeth(C$, 'getCurveTag$',  function () {
return this.ctag;
});

Clazz.newMeth(C$, 'getEdgeTag$',  function () {
return this.etag;
});

Clazz.newMeth(C$, 'setEdgeTag$I',  function (etag) {
this.etag=etag;
});

Clazz.newMeth(C$, 'getEquivalence$',  function () {
return this.equivalence;
});

Clazz.newMeth(C$, 'setEquivalence$I',  function (eq) {
this.equivalence=eq;
});

Clazz.newMeth(C$, 'compareTo$sun_awt_geom_Edge$DA',  function (other, yrange) {
if (other === this.lastEdge  && yrange[0] < this.lastLimit  ) {
if (yrange[1] > this.lastLimit ) {
yrange[1]=this.lastLimit;
}return this.lastResult;
}if (this === other.lastEdge  && yrange[0] < other.lastLimit  ) {
if (yrange[1] > other.lastLimit ) {
yrange[1]=other.lastLimit;
}return 0 - other.lastResult;
}var ret=this.curve.compareTo$sun_awt_geom_Curve$DA(other.curve, yrange);
this.lastEdge=other;
this.lastLimit=yrange[1];
this.lastResult=ret;
return ret;
});

Clazz.newMeth(C$, 'record$D$I',  function (yend, etag) {
this.activey=yend;
this.etag=etag;
});

Clazz.newMeth(C$, 'isActiveFor$D$I',  function (y, etag) {
return (this.etag == etag && this.activey >= y  );
});

Clazz.newMeth(C$, 'toString',  function () {
return ("Edge[" + this.curve + ", " + (this.ctag == 0 ? "L" : "R") + ", " + (this.etag == 1 ? "I" : (this.etag == -1 ? "O" : "N")) + "]" );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
