(function(){var P$=Clazz.newPackage("javajs.util"),p$1={},I$=[[0,'javajs.util.T3']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "A4", null, null, ['javajs.api.JSONEncodable', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['x','y','z','angle']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.z=1.0;
}, 1);

Clazz.newMeth(C$, 'new4$F$F$F$F',  function (x, y, z, angle) {
var a=Clazz.new_(C$);
a.set4$F$F$F$F(x, y, z, angle);
return a;
}, 1);

Clazz.newMeth(C$, 'newAA$javajs_util_A4',  function (a1) {
var a=Clazz.new_(C$);
a.set4$F$F$F$F(a1.x, a1.y, a1.z, a1.angle);
return a;
}, 1);

Clazz.newMeth(C$, 'newVA$javajs_util_V3$F',  function (axis, angle) {
var a=Clazz.new_(C$);
a.setVA$javajs_util_V3$F(axis, angle);
return a;
}, 1);

Clazz.newMeth(C$, 'setVA$javajs_util_V3$F',  function (axis, angle) {
this.x=axis.x;
this.y=axis.y;
this.z=axis.z;
this.angle=angle;
});

Clazz.newMeth(C$, 'set4$F$F$F$F',  function (x, y, z, angle) {
this.x=x;
this.y=y;
this.z=z;
this.angle=angle;
});

Clazz.newMeth(C$, 'setAA$javajs_util_A4',  function (a) {
this.x=a.x;
this.y=a.y;
this.z=a.z;
this.angle=a.angle;
});

Clazz.newMeth(C$, 'setM$javajs_util_M3',  function (m1) {
p$1.setFromMat$D$D$D$D$D$D$D$D$D.apply(this, [m1.m00, m1.m01, m1.m02, m1.m10, m1.m11, m1.m12, m1.m20, m1.m21, m1.m22]);
});

Clazz.newMeth(C$, 'setFromMat$D$D$D$D$D$D$D$D$D',  function (m00, m01, m02, m10, m11, m12, m20, m21, m22) {
var cos=(m00 + m11 + m22  - 1.0) * 0.5;
this.x=(m21 - m12);
this.y=(m02 - m20);
this.z=(m10 - m01);
var sin=0.5 * Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
if (sin == 0  && cos == 1  ) {
this.x=this.y=0;
this.z=1;
this.angle=0;
} else {
this.angle=Math.atan2(sin, cos);
}}, p$1);

Clazz.newMeth(C$, 'hashCode$',  function () {
return $I$(1).floatToIntBits$F(this.x) ^ $I$(1).floatToIntBits$F(this.y) ^ $I$(1).floatToIntBits$F(this.z) ^ $I$(1).floatToIntBits$F(this.angle) ;
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (!(Clazz.instanceOf(o, "javajs.util.A4"))) return false;
var a1=o;
return this.x == a1.x  && this.y == a1.y   && this.z == a1.z   && this.angle == a1.angle  ;
});

Clazz.newMeth(C$, 'toString',  function () {
return "(" + new Float(this.x).toString() + ", " + new Float(this.y).toString() + ", " + new Float(this.z).toString() + ", " + new Float(this.angle).toString() + ")" ;
});

Clazz.newMeth(C$, 'toJSON$',  function () {
return "[" + new Float(this.x).toString() + "," + new Float(this.y).toString() + "," + new Float(this.z).toString() + "," + new Float((this.angle * 180.0 / 3.141592653589793)).toString() + "]" ;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
