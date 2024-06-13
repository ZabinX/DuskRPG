(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DSAPrivateKeySpec", null, null, 'java.security.spec.KeySpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['x','java.math.BigInteger','+p','+q','+g']]]

Clazz.newMeth(C$, 'c$$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger',  function (x, p, q, g) {
;C$.$init$.apply(this);
this.x=x;
this.p=p;
this.q=q;
this.g=g;
}, 1);

Clazz.newMeth(C$, 'getX$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getP$',  function () {
return this.p;
});

Clazz.newMeth(C$, 'getQ$',  function () {
return this.q;
});

Clazz.newMeth(C$, 'getG$',  function () {
return this.g;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:28 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
