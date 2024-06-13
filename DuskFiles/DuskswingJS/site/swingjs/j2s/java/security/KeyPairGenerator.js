(function(){var P$=Clazz.newPackage("java.security"),p$1={},I$=[[0,'java.security.KeyPairGenerator','AssertionError','sun.security.util.Debug',['java.security.KeyPairGenerator','.Delegate'],'sun.security.jca.GetInstance','java.security.KeyPairGeneratorSpi','sun.security.jca.JCAUtil']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "KeyPairGenerator", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.security.KeyPairGeneratorSpi');
C$.$classes$=[['Delegate',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['algorithm'],'O',['provider','java.security.Provider']]
,['Z',['skipDebug'],'O',['pdebug','sun.security.util.Debug']]]

Clazz.newMeth(C$, 'c$$S',  function (algorithm) {
Clazz.super_(C$, this);
this.algorithm=algorithm;
}, 1);

Clazz.newMeth(C$, 'getAlgorithm$',  function () {
return this.algorithm;
});

Clazz.newMeth(C$, 'getInstance$sun_security_jca_GetInstance_Instance$S',  function (instance, algorithm) {
var kpg;
if (Clazz.instanceOf(instance.impl, "java.security.KeyPairGenerator")) {
kpg=instance.impl;
} else {
var spi=instance.impl;
kpg=Clazz.new_($I$(4,1).c$$java_security_KeyPairGeneratorSpi$S,[spi, algorithm]);
}kpg.provider=instance.provider;
if (!C$.skipDebug && C$.pdebug != null  ) {
C$.pdebug.println$S("KeyPairGenerator." + algorithm + " algorithm from: " + kpg.provider.getName$() );
}return kpg;
}, 1);

Clazz.newMeth(C$, 'getInstance$S',  function (algorithm) {
var list=$I$(5).getServices$S$S("KeyPairGenerator", algorithm);
var t=list.iterator$();
if (t.hasNext$() == false ) {
throw Clazz.new_(Clazz.load('java.security.NoSuchAlgorithmException').c$$S,[algorithm + " KeyPairGenerator not available"]);
}var failure=null;
do {
var s=t.next$();
try {
var instance=$I$(5,"getInstance$java_security_Provider_Service$Class",[s, Clazz.getClass($I$(6))]);
if (Clazz.instanceOf(instance.impl, "java.security.KeyPairGenerator")) {
return C$.getInstance$sun_security_jca_GetInstance_Instance$S(instance, algorithm);
} else {
return Clazz.new_($I$(4,1).c$$sun_security_jca_GetInstance_Instance$java_util_Iterator$S,[instance, t, algorithm]);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.security.NoSuchAlgorithmException")){
if (failure == null ) {
failure=e;
}} else {
throw e;
}
}
} while (t.hasNext$());
throw failure;
}, 1);

Clazz.newMeth(C$, 'getInstance$S$S',  function (algorithm, provider) {
var instance=$I$(5,"getInstance$S$Class$S$S",["KeyPairGenerator", Clazz.getClass($I$(6)), algorithm, provider]);
return C$.getInstance$sun_security_jca_GetInstance_Instance$S(instance, algorithm);
}, 1);

Clazz.newMeth(C$, 'getInstance$S$java_security_Provider',  function (algorithm, provider) {
var instance=$I$(5,"getInstance$S$Class$S$java_security_Provider",["KeyPairGenerator", Clazz.getClass($I$(6)), algorithm, provider]);
return C$.getInstance$sun_security_jca_GetInstance_Instance$S(instance, algorithm);
}, 1);

Clazz.newMeth(C$, 'getProvider$',  function () {
this.disableFailover$();
return this.provider;
});

Clazz.newMeth(C$, 'disableFailover$',  function () {
});

Clazz.newMeth(C$, 'initialize$I',  function (keysize) {
this.initialize$I$java_security_SecureRandom(keysize, $I$(7).getSecureRandom$());
});

Clazz.newMeth(C$, 'initialize$I$java_security_SecureRandom',  function (keysize, random) {
});

Clazz.newMeth(C$, 'initialize$java_security_spec_AlgorithmParameterSpec',  function (params) {
this.initialize$java_security_spec_AlgorithmParameterSpec$java_security_SecureRandom(params, $I$(7).getSecureRandom$());
});

Clazz.newMeth(C$, 'initialize$java_security_spec_AlgorithmParameterSpec$java_security_SecureRandom',  function (params, random) {
});

Clazz.newMeth(C$, 'genKeyPair$',  function () {
return this.generateKeyPair$();
});

Clazz.newMeth(C$, 'generateKeyPair$',  function () {
return null;
});

C$.$static$=function(){C$.$static$=0;
C$.pdebug=$I$(3).getInstance$S$S("provider", "Provider");
C$.skipDebug=$I$(3,"isOn$S",["engine="]) && !$I$(3).isOn$S("keypairgenerator") ;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.KeyPairGenerator, "Delegate", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.security.KeyPairGenerator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lock= Clazz.new_();
},1);

C$.$fields$=[['I',['initType','initKeySize'],'O',['spi','java.security.KeyPairGeneratorSpi','lock','java.lang.Object','serviceIterator','java.util.Iterator','initParams','java.security.spec.AlgorithmParameterSpec','initRandom','java.security.SecureRandom']]]

Clazz.newMeth(C$, 'c$$java_security_KeyPairGeneratorSpi$S',  function (spi, algorithm) {
;C$.superclazz.c$$S.apply(this,[algorithm]);C$.$init$.apply(this);
this.spi=spi;
}, 1);

Clazz.newMeth(C$, 'c$$sun_security_jca_GetInstance_Instance$java_util_Iterator$S',  function (instance, serviceIterator, algorithm) {
;C$.superclazz.c$$S.apply(this,[algorithm]);C$.$init$.apply(this);
this.spi=instance.impl;
this.provider=instance.provider;
this.serviceIterator=serviceIterator;
this.initType=1;
if (!$I$(1).skipDebug && $I$(1).pdebug != null  ) {
$I$(1).pdebug.println$S("KeyPairGenerator." + algorithm + " algorithm from: " + this.provider.getName$() );
}}, 1);

Clazz.newMeth(C$, 'nextSpi$java_security_KeyPairGeneratorSpi$Z',  function (oldSpi, reinit) {
{
if ((oldSpi != null ) && (oldSpi !== this.spi ) ) {
return this.spi;
}if (this.serviceIterator == null ) {
return null;
}while (this.serviceIterator.hasNext$()){
var s=this.serviceIterator.next$();
try {
var inst=s.newInstance$O(null);
if (Clazz.instanceOf(inst, "java.security.KeyPairGeneratorSpi") == false ) {
continue;
}if (Clazz.instanceOf(inst, "java.security.KeyPairGenerator")) {
continue;
}var spi=inst;
if (reinit) {
if (this.initType == 2) {
spi.initialize$I$java_security_SecureRandom(this.initKeySize, this.initRandom);
} else if (this.initType == 3) {
spi.initialize$java_security_spec_AlgorithmParameterSpec$java_security_SecureRandom(this.initParams, this.initRandom);
} else if (this.initType != 1) {
throw Clazz.new_($I$(2,1).c$$O,["KeyPairGenerator initType: " + this.initType]);
}}this.provider=s.getProvider$();
this.spi=spi;
return spi;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}
this.disableFailover$();
return null;
}}, p$1);

Clazz.newMeth(C$, 'disableFailover$',  function () {
this.serviceIterator=null;
this.initType=0;
this.initParams=null;
this.initRandom=null;
});

Clazz.newMeth(C$, 'initialize$I$java_security_SecureRandom',  function (keysize, random) {
if (this.serviceIterator == null ) {
this.spi.initialize$I$java_security_SecureRandom(keysize, random);
return;
}var failure=null;
var mySpi=this.spi;
do {
try {
mySpi.initialize$I$java_security_SecureRandom(keysize, random);
this.initType=2;
this.initKeySize=keysize;
this.initParams=null;
this.initRandom=random;
return;
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
if (failure == null ) {
failure=e;
}mySpi=p$1.nextSpi$java_security_KeyPairGeneratorSpi$Z.apply(this, [mySpi, false]);
} else {
throw e;
}
}
} while (mySpi != null );
throw failure;
});

Clazz.newMeth(C$, 'initialize$java_security_spec_AlgorithmParameterSpec$java_security_SecureRandom',  function (params, random) {
if (this.serviceIterator == null ) {
this.spi.initialize$java_security_spec_AlgorithmParameterSpec$java_security_SecureRandom(params, random);
return;
}var failure=null;
var mySpi=this.spi;
do {
try {
mySpi.initialize$java_security_spec_AlgorithmParameterSpec$java_security_SecureRandom(params, random);
this.initType=3;
this.initKeySize=0;
this.initParams=params;
this.initRandom=random;
return;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (failure == null ) {
failure=e;
}mySpi=p$1.nextSpi$java_security_KeyPairGeneratorSpi$Z.apply(this, [mySpi, false]);
} else {
throw e;
}
}
} while (mySpi != null );
if (Clazz.instanceOf(failure, "java.lang.RuntimeException")) {
throw failure;
}throw failure;
});

Clazz.newMeth(C$, 'generateKeyPair$',  function () {
if (this.serviceIterator == null ) {
return this.spi.generateKeyPair$();
}var failure=null;
var mySpi=this.spi;
do {
try {
return mySpi.generateKeyPair$();
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
if (failure == null ) {
failure=e;
}mySpi=p$1.nextSpi$java_security_KeyPairGeneratorSpi$Z.apply(this, [mySpi, true]);
} else {
throw e;
}
}
} while (mySpi != null );
throw failure;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
