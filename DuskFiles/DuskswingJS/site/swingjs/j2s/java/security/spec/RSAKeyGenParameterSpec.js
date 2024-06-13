(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[[0,'java.math.BigInteger']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RSAKeyGenParameterSpec", null, null, 'java.security.spec.AlgorithmParameterSpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['keysize'],'O',['+publicExponent']]
,['O',['F0','java.math.BigInteger','+F4']]]

Clazz.newMeth(C$, 'c$$I$java_math_BigInteger',  function (keysize, publicExponent) {
;C$.$init$.apply(this);
this.keysize=keysize;
this.publicExponent=publicExponent;
}, 1);

Clazz.newMeth(C$, 'getKeysize$',  function () {
return this.keysize;
});

Clazz.newMeth(C$, 'getPublicExponent$',  function () {
return this.publicExponent;
});

C$.$static$=function(){C$.$static$=0;
C$.F0=$I$(1).valueOf$J(3);
C$.F4=$I$(1).valueOf$J(65537);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
