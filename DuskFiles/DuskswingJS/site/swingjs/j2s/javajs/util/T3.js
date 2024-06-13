(function(){var P$=Clazz.newPackage("javajs.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "T3", null, null, ['javajs.api.JSONEncodable', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['x','y','z']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$F$F$F',  function (x, y, z) {
this.x=x;
this.y=y;
this.z=z;
});

Clazz.newMeth(C$, 'setA$FA',  function (t) {
this.x=t[0];
this.y=t[1];
this.z=t[2];
});

Clazz.newMeth(C$, 'setT$javajs_util_T3',  function (t1) {
this.x=t1.x;
this.y=t1.y;
this.z=t1.z;
});

Clazz.newMeth(C$, 'add2$javajs_util_T3$javajs_util_T3',  function (t1, t2) {
this.x=t1.x + t2.x;
this.y=t1.y + t2.y;
this.z=t1.z + t2.z;
});

Clazz.newMeth(C$, 'add$javajs_util_T3',  function (t1) {
this.x+=t1.x;
this.y+=t1.y;
this.z+=t1.z;
});

Clazz.newMeth(C$, 'distanceSquared$javajs_util_T3',  function (p1) {
var dx=this.x - p1.x;
var dy=this.y - p1.y;
var dz=this.z - p1.z;
return (dx * dx + dy * dy + dz * dz);
});

Clazz.newMeth(C$, 'distance$javajs_util_T3',  function (p1) {
return Math.sqrt(this.distanceSquared$javajs_util_T3(p1));
});

Clazz.newMeth(C$, 'sub2$javajs_util_T3$javajs_util_T3',  function (t1, t2) {
this.x=t1.x - t2.x;
this.y=t1.y - t2.y;
this.z=t1.z - t2.z;
});

Clazz.newMeth(C$, 'sub$javajs_util_T3',  function (t1) {
this.x-=t1.x;
this.y-=t1.y;
this.z-=t1.z;
});

Clazz.newMeth(C$, 'scale$F',  function (s) {
this.x*=s;
this.y*=s;
this.z*=s;
});

Clazz.newMeth(C$, 'add3$F$F$F',  function (a, b, c) {
this.x+=a;
this.y+=b;
this.z+=c;
});

Clazz.newMeth(C$, 'scaleT$javajs_util_T3',  function (p) {
this.x*=p.x;
this.y*=p.y;
this.z*=p.z;
});

Clazz.newMeth(C$, 'scaleAdd2$F$javajs_util_T3$javajs_util_T3',  function (s, t1, t2) {
this.x=s * t1.x + t2.x;
this.y=s * t1.y + t2.y;
this.z=s * t1.z + t2.z;
});

Clazz.newMeth(C$, 'ave$javajs_util_T3$javajs_util_T3',  function (a, b) {
this.x=(a.x + b.x) / 2.0;
this.y=(a.y + b.y) / 2.0;
this.z=(a.z + b.z) / 2.0;
});

Clazz.newMeth(C$, 'dot$javajs_util_T3',  function (v) {
return this.x * v.x + this.y * v.y + this.z * v.z;
});

Clazz.newMeth(C$, 'lengthSquared$',  function () {
return this.x * this.x + this.y * this.y + this.z * this.z;
});

Clazz.newMeth(C$, 'length$',  function () {
return Math.sqrt(this.lengthSquared$());
});

Clazz.newMeth(C$, 'normalize$',  function () {
var d=this.length$();
this.x/=d;
this.y/=d;
this.z/=d;
});

Clazz.newMeth(C$, 'cross$javajs_util_T3$javajs_util_T3',  function (v1, v2) {
this.set$F$F$F(v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var bits=1;
bits=Long.$add(Long.$mul(31,bits),C$.floatToIntBits$F(this.x));
bits=Long.$add(Long.$mul(31,bits),C$.floatToIntBits$F(this.y));
bits=Long.$add(Long.$mul(31,bits),C$.floatToIntBits$F(this.z));
return Long.$ival((Long.$xor(bits,(Long.$sr(bits,32)))));
});

Clazz.newMeth(C$, 'floatToIntBits$F',  function (x) {
return (x == 0  ? 0 : Float.floatToIntBits$F(x));
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (t1) {
if (!(Clazz.instanceOf(t1, "javajs.util.T3"))) return false;
var t2=t1;
return (this.x == t2.x  && this.y == t2.y   && this.z == t2.z  );
});

Clazz.newMeth(C$, 'toString',  function () {
return "{" + new Float(this.x).toString() + ", " + new Float(this.y).toString() + ", " + new Float(this.z).toString() + "}" ;
});

Clazz.newMeth(C$, 'toJSON$',  function () {
return "[" + new Float(this.x).toString() + "," + new Float(this.y).toString() + "," + new Float(this.z).toString() + "]" ;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
