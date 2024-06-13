(function(){var P$=Clazz.newPackage("java.awt.geom"),I$=[[0,'InternalError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Point2D", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Cloneable');
C$.$classes$=[['Float',9],['Double',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setLocation$java_awt_geom_Point2D',  function (p) {
this.setLocation$D$D(p.getX$(), p.getY$());
});

Clazz.newMeth(C$, 'distanceSq$D$D$D$D',  function (x1, y1, x2, y2) {
x1-=x2;
y1-=y2;
return (x1 * x1 + y1 * y1);
}, 1);

Clazz.newMeth(C$, 'distance$D$D$D$D',  function (x1, y1, x2, y2) {
x1-=x2;
y1-=y2;
return Math.sqrt(x1 * x1 + y1 * y1);
}, 1);

Clazz.newMeth(C$, 'distanceSq$D$D',  function (px, py) {
px-=this.getX$();
py-=this.getY$();
return (px * px + py * py);
});

Clazz.newMeth(C$, 'distanceSq$java_awt_geom_Point2D',  function (pt) {
var px=pt.getX$() - this.getX$();
var py=pt.getY$() - this.getY$();
return (px * px + py * py);
});

Clazz.newMeth(C$, 'distance$D$D',  function (px, py) {
px-=this.getX$();
py-=this.getY$();
return Math.sqrt(px * px + py * py);
});

Clazz.newMeth(C$, 'distance$java_awt_geom_Point2D',  function (pt) {
var px=pt.getX$() - this.getX$();
var py=pt.getY$() - this.getY$();
return Math.sqrt(px * px + py * py);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var bits=java.lang.Double.doubleToLongBits$D(this.getX$());
(bits=Long.$xor(bits,(Long.$mul(java.lang.Double.doubleToLongBits$D(this.getY$()),31))));
return ((Long.$ival(bits)) ^ (Long.$ival((Long.$sr(bits,32)))));
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(1,1));
} else {
throw e;
}
}
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Point2D, "Float", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.geom.Point2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['x','y']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$F$F',  function (x, y) {
Clazz.super_(C$, this);
this.x=x;
this.y=y;
}, 1);

Clazz.newMeth(C$, 'getX$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getY$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'setLocation$D$D',  function (x, y) {
this.x=x;
this.y=y;
});

Clazz.newMeth(C$, 'setLocation$F$F',  function (x, y) {
this.x=x;
this.y=y;
});

Clazz.newMeth(C$, 'toString',  function () {
return "Point2D.Float[" + new Float(this.x).toString() + ", " + new Float(this.y).toString() + "]" ;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Point2D, "Double", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.geom.Point2D');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['x','y']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$D$D',  function (x, y) {
Clazz.super_(C$, this);
this.x=x;
this.y=y;
}, 1);

Clazz.newMeth(C$, 'getX$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getY$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'setLocation$D$D',  function (x, y) {
this.x=x;
this.y=y;
});

Clazz.newMeth(C$, 'toString',  function () {
return "Point2D.Double[" + new Double(this.x).toString() + ", " + new Double(this.y).toString() + "]" ;
});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
