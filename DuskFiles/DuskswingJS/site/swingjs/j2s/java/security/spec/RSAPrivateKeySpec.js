(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RSAPrivateKeySpec", null, null, 'java.security.spec.KeySpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['modulus','java.math.BigInteger','+privateExponent']]]

Clazz.newMeth(C$, 'c$$java_math_BigInteger$java_math_BigInteger',  function (modulus, privateExponent) {
;C$.$init$.apply(this);
this.modulus=modulus;
this.privateExponent=privateExponent;
}, 1);

Clazz.newMeth(C$, 'getModulus$',  function () {
return this.modulus;
});

Clazz.newMeth(C$, 'getPrivateExponent$',  function () {
return this.privateExponent;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
