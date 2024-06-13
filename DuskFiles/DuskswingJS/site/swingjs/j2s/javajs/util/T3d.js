(function(){var P$=Clazz.newPackage("javajs.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "T3d", null, null, ['javajs.api.JSONEncodable', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['x','y','z']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$D$D$D',  function (x, y, z) {
this.x=x;
this.y=y;
this.z=z;
});

Clazz.newMeth(C$, 'setA$DA',  function (t) {
this.x=t[0];
this.y=t[1];
this.z=t[2];
});

Clazz.newMeth(C$, 'setT$javajs_util_T3d',  function (t1) {
this.x=t1.x;
this.y=t1.y;
this.z=t1.z;
});

Clazz.newMeth(C$, 'add2$javajs_util_T3d$javajs_util_T3d',  function (t1, t2) {
this.x=t1.x + t2.x;
this.y=t1.y + t2.y;
this.z=t1.z + t2.z;
});

Clazz.newMeth(C$, 'add$javajs_util_T3d',  function (t) {
this.x+=t.x;
this.y+=t.y;
this.z+=t.z;
});

Clazz.newMeth(C$, 'distanceSquared$javajs_util_T3d',  function (p1) {
var dx=this.x - p1.x;
var dy=this.y - p1.y;
var dz=this.z - p1.z;
return (dx * dx + dy * dy + dz * dz);
});

Clazz.newMeth(C$, 'distance$javajs_util_T3d',  function (p1) {
return Math.sqrt(this.distanceSquared$javajs_util_T3d(p1));
});

Clazz.newMeth(C$, 'sub2$javajs_util_T3d$javajs_util_T3d',  function (t1, t2) {
this.x=t1.x - t2.x;
this.y=t1.y - t2.y;
this.z=t1.z - t2.z;
});

Clazz.newMeth(C$, 'sub$javajs_util_T3d',  function (t1) {
this.x-=t1.x;
this.y-=t1.y;
this.z-=t1.z;
});

Clazz.newMeth(C$, 'scale$D',  function (s) {
this.x*=s;
this.y*=s;
this.z*=s;
});

Clazz.newMeth(C$, 'add3$D$D$D',  function (a, b, c) {
this.x+=a;
this.y+=b;
this.z+=c;
});

Clazz.newMeth(C$, 'scaleAdd$D$javajs_util_T3d$javajs_util_T3d',  function (s, t1, t2) {
this.x=s * t1.x + t2.x;
this.y=s * t1.y + t2.y;
this.z=s * t1.z + t2.z;
});

Clazz.newMeth(C$, 'scaleAdd2$D$javajs_util_T3d$javajs_util_T3d',  function (s, t1, t2) {
this.x=s * t1.x + t2.x;
this.y=s * t1.y + t2.y;
this.z=s * t1.z + t2.z;
});

Clazz.newMeth(C$, 'ave$javajs_util_T3d$javajs_util_T3d',  function (a, b) {
this.x=(a.x + b.x) / 2.0;
this.y=(a.y + b.y) / 2.0;
this.z=(a.z + b.z) / 2.0;
});

Clazz.newMeth(C$, 'dot$javajs_util_T3d',  function (v) {
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

Clazz.newMeth(C$, 'cross$javajs_util_T3d$javajs_util_T3d',  function (v1, v2) {
this.set$D$D$D(v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var xbits=C$.doubleToLongBits0$D(this.x);
var ybits=C$.doubleToLongBits0$D(this.y);
var zbits=C$.doubleToLongBits0$D(this.z);
return Long.$ival((Long.$xor(xbits,(Long.$sr(xbits,32)) , ybits , (Long.$sr(ybits,32)) , zbits , (Long.$sr(zbits,32)) )));
});

Clazz.newMeth(C$, 'doubleToLongBits0$D',  function (d) {
return (d == 0  ? 0 : Double.doubleToLongBits$D(d));
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (t1) {
if (!(Clazz.instanceOf(t1, "javajs.util.T3d"))) return false;
var t2=t1;
return (this.x == t2.x  && this.y == t2.y   && this.z == t2.z  );
});

Clazz.newMeth(C$, 'toString',  function () {
return "{" + new Double(this.x).toString() + ", " + new Double(this.y).toString() + ", " + new Double(this.z).toString() + "}" ;
});

Clazz.newMeth(C$, 'doubleToIntBits$D',  function (x) {
return (x == 0  ? 0 : Float.floatToIntBits$F(x));
}, 1);

Clazz.newMeth(C$, 'toJSON$',  function () {
return "[" + new Double(this.x).toString() + "," + new Double(this.y).toString() + "," + new Double(this.z).toString() + "]" ;
});

Clazz.newMeth(C$, 'setP$javajs_util_T3d',  function (t) {
this.set$D$D$D(t.x, t.y, t.z);
return this;
});

Clazz.newMeth(C$, 'putP$javajs_util_T3d',  function (t) {
t.set$D$D$D(this.x, this.y, this.z);
return t;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
