(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ECParameterSpec", null, null, 'java.security.spec.AlgorithmParameterSpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['h'],'O',['curve','java.security.spec.EllipticCurve','g','java.security.spec.ECPoint','n','java.math.BigInteger']]]

Clazz.newMeth(C$, 'c$$java_security_spec_EllipticCurve$java_security_spec_ECPoint$java_math_BigInteger$I',  function (curve, g, n, h) {
;C$.$init$.apply(this);
if (curve == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["curve is null"]);
}if (g == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["g is null"]);
}if (n == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["n is null"]);
}if (n.signum$() != 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["n is not positive"]);
}if (h <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["h is not positive"]);
}this.curve=curve;
this.g=g;
this.n=n;
this.h=h;
}, 1);

Clazz.newMeth(C$, 'getCurve$',  function () {
return this.curve;
});

Clazz.newMeth(C$, 'getGenerator$',  function () {
return this.g;
});

Clazz.newMeth(C$, 'getOrder$',  function () {
return this.n;
});

Clazz.newMeth(C$, 'getCofactor$',  function () {
return this.h;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:28 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
