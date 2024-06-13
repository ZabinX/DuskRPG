(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ECFieldFp", null, null, 'java.security.spec.ECField');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['p','java.math.BigInteger']]]

Clazz.newMeth(C$, 'c$$java_math_BigInteger',  function (p) {
;C$.$init$.apply(this);
if (p.signum$() != 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["p is not positive"]);
}this.p=p;
}, 1);

Clazz.newMeth(C$, 'getFieldSize$',  function () {
return this.p.bitLength$();
});

Clazz.newMeth(C$, 'getP$',  function () {
return this.p;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) return true;
if (Clazz.instanceOf(obj, "java.security.spec.ECFieldFp")) {
return (this.p.equals$O((obj).p));
}return false;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.p.hashCode$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:28 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
