(function(){var P$=Clazz.newPackage("javajs.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "V3", null, 'javajs.util.T3');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'newV$javajs_util_T3',  function (t) {
return C$.new3$F$F$F(t.x, t.y, t.z);
}, 1);

Clazz.newMeth(C$, 'newVsub$javajs_util_T3$javajs_util_T3',  function (t1, t2) {
return C$.new3$F$F$F(t1.x - t2.x, t1.y - t2.y, t1.z - t2.z);
}, 1);

Clazz.newMeth(C$, 'new3$F$F$F',  function (x, y, z) {
var v=Clazz.new_(C$);
v.x=x;
v.y=y;
v.z=z;
return v;
}, 1);

Clazz.newMeth(C$, 'angle$javajs_util_V3',  function (v1) {
var xx=this.y * v1.z - this.z * v1.y;
var yy=this.z * v1.x - this.x * v1.z;
var zz=this.x * v1.y - this.y * v1.x;
var cross=Math.sqrt(xx * xx + yy * yy + zz * zz);
return Math.abs(Math.atan2(cross, this.dot$javajs_util_T3(v1)));
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
