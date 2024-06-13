(function(){var P$=Clazz.newPackage("java.math"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SignedMutableBigInteger", null, 'java.math.MutableBigInteger');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sign=1;
},1);

C$.$fields$=[['I',['sign']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (val) {
;C$.superclazz.c$$I.apply(this,[val]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_math_MutableBigInteger',  function (val) {
;C$.superclazz.c$$java_math_MutableBigInteger.apply(this,[val]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'signedAdd$java_math_SignedMutableBigInteger',  function (addend) {
if (this.sign == addend.sign) this.add$java_math_MutableBigInteger(addend);
 else this.sign=this.sign * this.subtract$java_math_MutableBigInteger(addend);
});

Clazz.newMeth(C$, 'signedAdd$java_math_MutableBigInteger',  function (addend) {
if (this.sign == 1) this.add$java_math_MutableBigInteger(addend);
 else this.sign=this.sign * this.subtract$java_math_MutableBigInteger(addend);
});

Clazz.newMeth(C$, 'signedSubtract$java_math_SignedMutableBigInteger',  function (addend) {
if (this.sign == addend.sign) this.sign=this.sign * this.subtract$java_math_MutableBigInteger(addend);
 else this.add$java_math_MutableBigInteger(addend);
});

Clazz.newMeth(C$, 'signedSubtract$java_math_MutableBigInteger',  function (addend) {
if (this.sign == 1) this.sign=this.sign * this.subtract$java_math_MutableBigInteger(addend);
 else this.add$java_math_MutableBigInteger(addend);
if (this.intLen == 0) this.sign=1;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.toBigInteger$I(this.sign).toString();
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:18 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
