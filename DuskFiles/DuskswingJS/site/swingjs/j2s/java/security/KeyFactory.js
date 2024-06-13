(function(){var P$=Clazz.newPackage("java.security"),p$1={},I$=[[0,'sun.security.util.Debug','sun.security.jca.GetInstance','java.security.KeyFactorySpi']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "KeyFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lock= Clazz.new_();
},1);

C$.$fields$=[['S',['algorithm'],'O',['provider','java.security.Provider','spi','java.security.KeyFactorySpi','lock','java.lang.Object','serviceIterator','java.util.Iterator']]
,['O',['debug','sun.security.util.Debug']]]

Clazz.newMeth(C$, 'c$$java_security_KeyFactorySpi$java_security_Provider$S',  function (keyFacSpi, provider, algorithm) {
;C$.$init$.apply(this);
this.spi=keyFacSpi;
this.provider=provider;
this.algorithm=algorithm;
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (algorithm) {
;C$.$init$.apply(this);
this.algorithm=algorithm;
var list=$I$(2).getServices$S$S("KeyFactory", algorithm);
this.serviceIterator=list.iterator$();
if (p$1.nextSpi$java_security_KeyFactorySpi.apply(this, [null]) == null ) {
throw Clazz.new_(Clazz.load('java.security.NoSuchAlgorithmException').c$$S,[algorithm + " KeyFactory not available"]);
}}, 1);

Clazz.newMeth(C$, 'getInstance$S',  function (algorithm) {
return Clazz.new_(C$.c$$S,[algorithm]);
}, 1);

Clazz.newMeth(C$, 'getInstance$S$S',  function (algorithm, provider) {
var instance=$I$(2,"getInstance$S$Class$S$S",["KeyFactory", Clazz.getClass($I$(3)), algorithm, provider]);
return Clazz.new_(C$.c$$java_security_KeyFactorySpi$java_security_Provider$S,[instance.impl, instance.provider, algorithm]);
}, 1);

Clazz.newMeth(C$, 'getInstance$S$java_security_Provider',  function (algorithm, provider) {
var instance=$I$(2,"getInstance$S$Class$S$java_security_Provider",["KeyFactory", Clazz.getClass($I$(3)), algorithm, provider]);
return Clazz.new_(C$.c$$java_security_KeyFactorySpi$java_security_Provider$S,[instance.impl, instance.provider, algorithm]);
}, 1);

Clazz.newMeth(C$, 'getProvider$',  function () {
{
this.serviceIterator=null;
return this.provider;
}});

Clazz.newMeth(C$, 'getAlgorithm$',  function () {
return this.algorithm;
});

Clazz.newMeth(C$, 'nextSpi$java_security_KeyFactorySpi',  function (oldSpi) {
{
if ((oldSpi != null ) && (oldSpi !== this.spi ) ) {
return this.spi;
}if (this.serviceIterator == null ) {
return null;
}while (this.serviceIterator.hasNext$()){
var s=this.serviceIterator.next$();
try {
var obj=s.newInstance$O(null);
if (Clazz.instanceOf(obj, "java.security.KeyFactorySpi") == false ) {
continue;
}var spi=obj;
this.provider=s.getProvider$();
this.spi=spi;
return spi;
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.NoSuchAlgorithmException")){
} else {
throw e;
}
}
}
this.serviceIterator=null;
return null;
}}, p$1);

Clazz.newMeth(C$, 'generatePublic$java_security_spec_KeySpec',  function (keySpec) {
if (this.serviceIterator == null ) {
return this.spi.engineGeneratePublic$java_security_spec_KeySpec(keySpec);
}var failure=null;
var mySpi=this.spi;
do {
try {
return mySpi.engineGeneratePublic$java_security_spec_KeySpec(keySpec);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (failure == null ) {
failure=e;
}mySpi=p$1.nextSpi$java_security_KeyFactorySpi.apply(this, [mySpi]);
} else {
throw e;
}
}
} while (mySpi != null );
if (Clazz.instanceOf(failure, "java.lang.RuntimeException")) {
throw failure;
}if (Clazz.instanceOf(failure, "java.security.spec.InvalidKeySpecException")) {
throw failure;
}throw Clazz.new_(Clazz.load('java.security.spec.InvalidKeySpecException').c$$S$Throwable,["Could not generate public key", failure]);
});

Clazz.newMeth(C$, 'generatePrivate$java_security_spec_KeySpec',  function (keySpec) {
if (this.serviceIterator == null ) {
return this.spi.engineGeneratePrivate$java_security_spec_KeySpec(keySpec);
}var failure=null;
var mySpi=this.spi;
do {
try {
return mySpi.engineGeneratePrivate$java_security_spec_KeySpec(keySpec);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (failure == null ) {
failure=e;
}mySpi=p$1.nextSpi$java_security_KeyFactorySpi.apply(this, [mySpi]);
} else {
throw e;
}
}
} while (mySpi != null );
if (Clazz.instanceOf(failure, "java.lang.RuntimeException")) {
throw failure;
}if (Clazz.instanceOf(failure, "java.security.spec.InvalidKeySpecException")) {
throw failure;
}throw Clazz.new_(Clazz.load('java.security.spec.InvalidKeySpecException').c$$S$Throwable,["Could not generate private key", failure]);
});

Clazz.newMeth(C$, 'getKeySpec$java_security_Key$Class',  function (key, keySpec) {
if (this.serviceIterator == null ) {
return this.spi.engineGetKeySpec$java_security_Key$Class(key, keySpec);
}var failure=null;
var mySpi=this.spi;
do {
try {
return mySpi.engineGetKeySpec$java_security_Key$Class(key, keySpec);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (failure == null ) {
failure=e;
}mySpi=p$1.nextSpi$java_security_KeyFactorySpi.apply(this, [mySpi]);
} else {
throw e;
}
}
} while (mySpi != null );
if (Clazz.instanceOf(failure, "java.lang.RuntimeException")) {
throw failure;
}if (Clazz.instanceOf(failure, "java.security.spec.InvalidKeySpecException")) {
throw failure;
}throw Clazz.new_(Clazz.load('java.security.spec.InvalidKeySpecException').c$$S$Throwable,["Could not get key spec", failure]);
});

Clazz.newMeth(C$, 'translateKey$java_security_Key',  function (key) {
if (this.serviceIterator == null ) {
return this.spi.engineTranslateKey$java_security_Key(key);
}var failure=null;
var mySpi=this.spi;
do {
try {
return mySpi.engineTranslateKey$java_security_Key(key);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (failure == null ) {
failure=e;
}mySpi=p$1.nextSpi$java_security_KeyFactorySpi.apply(this, [mySpi]);
} else {
throw e;
}
}
} while (mySpi != null );
if (Clazz.instanceOf(failure, "java.lang.RuntimeException")) {
throw failure;
}if (Clazz.instanceOf(failure, "java.security.InvalidKeyException")) {
throw failure;
}throw Clazz.new_(Clazz.load('java.security.InvalidKeyException').c$$S$Throwable,["Could not translate key", failure]);
});

C$.$static$=function(){C$.$static$=0;
C$.debug=$I$(1).getInstance$S$S("jca", "KeyFactory");
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
