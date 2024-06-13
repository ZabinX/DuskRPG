(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RSAPublicKeySpec", null, null, 'java.security.spec.KeySpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['modulus','java.math.BigInteger','+publicExponent']]]

Clazz.newMeth(C$, 'c$$java_math_BigInteger$java_math_BigInteger',  function (modulus, publicExponent) {
;C$.$init$.apply(this);
this.modulus=modulus;
this.publicExponent=publicExponent;
}, 1);

Clazz.newMeth(C$, 'getModulus$',  function () {
return this.modulus;
});

Clazz.newMeth(C$, 'getPublicExponent$',  function () {
return this.publicExponent;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
