(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "EllipticCurve");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['field','java.security.spec.ECField','a','java.math.BigInteger','+b','seed','byte[]']]]

Clazz.newMeth(C$, 'checkValidity$java_security_spec_ECField$java_math_BigInteger$S',  function (field, c, cName) {
if (Clazz.instanceOf(field, "java.security.spec.ECFieldFp")) {
var p=(field).getP$();
if (p.compareTo$java_math_BigInteger(c) != 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[cName + " is too large"]);
} else if (c.signum$() < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[cName + " is negative"]);
}} else if (Clazz.instanceOf(field, "java.security.spec.ECFieldF2m")) {
var m=(field).getM$();
if (c.bitLength$() > m) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[cName + " is too large"]);
}}}, 1);

Clazz.newMeth(C$, 'c$$java_security_spec_ECField$java_math_BigInteger$java_math_BigInteger',  function (field, a, b) {
C$.c$$java_security_spec_ECField$java_math_BigInteger$java_math_BigInteger$BA.apply(this, [field, a, b, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_security_spec_ECField$java_math_BigInteger$java_math_BigInteger$BA',  function (field, a, b, seed) {
;C$.$init$.apply(this);
if (field == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["field is null"]);
}if (a == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["first coefficient is null"]);
}if (b == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["second coefficient is null"]);
}C$.checkValidity$java_security_spec_ECField$java_math_BigInteger$S(field, a, "first coefficient");
C$.checkValidity$java_security_spec_ECField$java_math_BigInteger$S(field, b, "second coefficient");
this.field=field;
this.a=a;
this.b=b;
if (seed != null ) {
this.seed=seed.clone$();
} else {
this.seed=null;
}}, 1);

Clazz.newMeth(C$, 'getField$',  function () {
return this.field;
});

Clazz.newMeth(C$, 'getA$',  function () {
return this.a;
});

Clazz.newMeth(C$, 'getB$',  function () {
return this.b;
});

Clazz.newMeth(C$, 'getSeed$',  function () {
if (this.seed == null ) return null;
 else return this.seed.clone$();
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) return true;
if (Clazz.instanceOf(obj, "java.security.spec.EllipticCurve")) {
var curve=obj;
if ((this.field.equals$O(curve.field)) && (this.a.equals$O(curve.a)) && (this.b.equals$O(curve.b))  ) {
return true;
}}return false;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return (this.field.hashCode$() << 6 + (this.a.hashCode$() << 4) + (this.b.hashCode$() << 2) );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:28 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
