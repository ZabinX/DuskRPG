(function(){var P$=Clazz.newPackage("java.security"),I$=[[0,'java.util.Random']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SecureRandom", null, 'java.util.Random');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['algorithm']]
,['O',['random','java.util.Random','seedGenerator','java.security.SecureRandom']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$J.apply(this,[C$.random.nextLong$()]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$BA',  function (seed) {
;C$.superclazz.c$$J.apply(this,[seed.hashCode$()]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_security_SecureRandomSpi$java_security_Provider',  function (secureRandomSpi, provider) {
C$.c$$java_security_SecureRandomSpi$java_security_Provider$S.apply(this, [secureRandomSpi, provider, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_security_SecureRandomSpi$java_security_Provider$S',  function (secureRandomSpi, provider, algorithm) {
;C$.superclazz.c$$J.apply(this,[0]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getInstance$S',  function (algorithm) {
return Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'getInstance$S$S',  function (algorithm, provider) {
return Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'getInstance$S$java_security_Provider',  function (algorithm, provider) {
return Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'getSecureRandomSpi$',  function () {
return null;
});

Clazz.newMeth(C$, 'getProvider$',  function () {
return null;
});

Clazz.newMeth(C$, 'getAlgorithm$',  function () {
return (this.algorithm != null ) ? this.algorithm : "unknown";
});

Clazz.newMeth(C$, 'setSeed$BA',  function (seed) {
C$.superclazz.prototype.setSeed$J.apply(this, [seed.hashCode$()]);
});

Clazz.newMeth(C$, 'setSeed$J',  function (seed) {
C$.superclazz.prototype.setSeed$J.apply(this, [seed]);
});

Clazz.newMeth(C$, 'nextBytes$BA',  function (bytes) {
C$.superclazz.prototype.nextBytes$BA.apply(this, [bytes]);
});

Clazz.newMeth(C$, 'next$I',  function (numBits) {
return C$.superclazz.prototype.next$I.apply(this, [numBits]);
});

Clazz.newMeth(C$, 'getSeed$I',  function (numBytes) {
if (C$.seedGenerator == null ) {
C$.seedGenerator=Clazz.new_(C$);
}return C$.seedGenerator.generateSeed$I(numBytes);
}, 1);

Clazz.newMeth(C$, 'generateSeed$I',  function (numBytes) {
C$.superclazz.prototype.setSeed$J.apply(this, [System.currentTimeMillis$()]);
var b=Clazz.array(Byte.TYPE, [numBytes]);
C$.superclazz.prototype.nextBytes$BA.apply(this, [b]);
return b;
});

Clazz.newMeth(C$, 'getInstanceStrong$',  function () {
return Clazz.new_(C$);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.random=Clazz.new_([System.currentTimeMillis$()],$I$(1,1).c$$J);
C$.seedGenerator=null;
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:25 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
