(function(){var P$=Clazz.newPackage("java.security"),p$1={},I$=[[0,'javax.crypto.Cipher',['java.security.Signature','.CipherAdapter'],'java.security.Signature','AssertionError','java.io.ByteArrayOutputStream','java.util.Arrays','sun.security.util.Debug','sun.security.jca.ServiceId','java.util.concurrent.ConcurrentHashMap','sun.security.jca.GetInstance',['java.security.Signature','.Delegate'],'java.security.SignatureSpi','java.security.Security']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Signature", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.security.SignatureSpi');
C$.$classes$=[['Delegate',10],['CipherAdapter',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.state=0;
},1);

C$.$fields$=[['I',['state'],'S',['algorithm'],'O',['provider','java.security.Provider']]
,['Z',['skipDebug'],'O',['debug','sun.security.util.Debug','+pdebug','rsaIds','java.util.List','signatureInfo','java.util.Map']]]

Clazz.newMeth(C$, 'c$$S',  function (algorithm) {
Clazz.super_(C$, this);
this.algorithm=algorithm;
}, 1);

Clazz.newMeth(C$, 'getInstance$S',  function (algorithm) {
var list;
if (algorithm.equalsIgnoreCase$S("NONEwithRSA")) {
list=$I$(10).getServices$java_util_List(C$.rsaIds);
} else {
list=$I$(10).getServices$S$S("Signature", algorithm);
}var t=list.iterator$();
if (t.hasNext$() == false ) {
throw Clazz.new_(Clazz.load('java.security.NoSuchAlgorithmException').c$$S,[algorithm + " Signature not available"]);
}var failure;
do {
var s=t.next$();
if (C$.isSpi$java_security_Provider_Service(s)) {
return Clazz.new_($I$(11,1).c$$java_security_Provider_Service$java_util_Iterator$S,[s, t, algorithm]);
} else {
try {
var instance=$I$(10,"getInstance$java_security_Provider_Service$Class",[s, Clazz.getClass($I$(12))]);
return C$.getInstance$sun_security_jca_GetInstance_Instance$S(instance, algorithm);
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.NoSuchAlgorithmException")){
failure=e;
} else {
throw e;
}
}
}} while (t.hasNext$());
throw failure;
}, 1);

Clazz.newMeth(C$, 'getInstance$sun_security_jca_GetInstance_Instance$S',  function (instance, algorithm) {
var sig;
if (Clazz.instanceOf(instance.impl, "java.security.Signature")) {
sig=instance.impl;
sig.algorithm=algorithm;
} else {
var spi=instance.impl;
sig=Clazz.new_($I$(11,1).c$$java_security_SignatureSpi$S,[spi, algorithm]);
}sig.provider=instance.provider;
return sig;
}, 1);

Clazz.newMeth(C$, 'isSpi$java_security_Provider_Service',  function (s) {
if (s.getType$().equals$O("Cipher")) {
return true;
}var className=s.getClassName$();
var result=C$.signatureInfo.get$O(className);
if (result == null ) {
try {
var instance=s.newInstance$O(null);
var r=(Clazz.instanceOf(instance, "java.security.SignatureSpi")) && (Clazz.instanceOf(instance, "java.security.Signature") == false ) ;
if ((C$.debug != null ) && (r == false ) ) {
C$.debug.println$S("Not a SignatureSpi " + className);
C$.debug.println$S("Delayed provider selection may not be " + "available for algorithm " + s.getAlgorithm$() );
}result=Boolean.valueOf$Z(r);
C$.signatureInfo.put$O$O(className, result);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return false;
} else {
throw e;
}
}
}return result.booleanValue$();
}, 1);

Clazz.newMeth(C$, 'getInstance$S$S',  function (algorithm, provider) {
if (algorithm.equalsIgnoreCase$S("NONEwithRSA")) {
if ((provider == null ) || (provider.length$() == 0) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["missing provider"]);
}var p=$I$(13).getProvider$S(provider);
if (p == null ) {
throw Clazz.new_(Clazz.load('java.security.NoSuchProviderException').c$$S,["no such provider: " + provider]);
}return C$.getInstanceRSA$java_security_Provider(p);
}var instance=$I$(10,"getInstance$S$Class$S$S",["Signature", Clazz.getClass($I$(12)), algorithm, provider]);
return C$.getInstance$sun_security_jca_GetInstance_Instance$S(instance, algorithm);
}, 1);

Clazz.newMeth(C$, 'getInstance$S$java_security_Provider',  function (algorithm, provider) {
if (algorithm.equalsIgnoreCase$S("NONEwithRSA")) {
if (provider == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["missing provider"]);
}return C$.getInstanceRSA$java_security_Provider(provider);
}var instance=$I$(10,"getInstance$S$Class$S$java_security_Provider",["Signature", Clazz.getClass($I$(12)), algorithm, provider]);
return C$.getInstance$sun_security_jca_GetInstance_Instance$S(instance, algorithm);
}, 1);

Clazz.newMeth(C$, 'getInstanceRSA$java_security_Provider',  function (p) {
var s=p.getService$S$S("Signature", "NONEwithRSA");
if (s != null ) {
var instance=$I$(10,"getInstance$java_security_Provider_Service$Class",[s, Clazz.getClass($I$(12))]);
return C$.getInstance$sun_security_jca_GetInstance_Instance$S(instance, "NONEwithRSA");
}try {
var c=$I$(1).getInstance$S$java_security_Provider("RSA/ECB/PKCS1Padding", p);
return Clazz.new_([Clazz.new_($I$(2,1).c$$javax_crypto_Cipher,[c]), "NONEwithRSA"],$I$(11,1).c$$java_security_SignatureSpi$S);
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.GeneralSecurityException")){
throw Clazz.new_(Clazz.load('java.security.NoSuchAlgorithmException').c$$S$Throwable,["no such algorithm: " + "NONEwithRSA" + " for provider " + p.getName$() , e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getProvider$',  function () {
this.chooseFirstProvider$();
return this.provider;
});

Clazz.newMeth(C$, 'chooseFirstProvider$',  function () {
});

Clazz.newMeth(C$, 'initVerify$java_security_PublicKey',  function (publicKey) {
this.engineInitVerify$java_security_PublicKey(publicKey);
this.state=3;
if (!C$.skipDebug && C$.pdebug != null  ) {
C$.pdebug.println$S("Signature." + this.algorithm + " verification algorithm from: " + this.provider.getName$() );
}});

Clazz.newMeth(C$, 'initVerify$java_security_cert_Certificate',  function (certificate) {
if (Clazz.instanceOf(certificate, "java.security.cert.X509Certificate")) {
var cert=certificate;
var critSet=cert.getCriticalExtensionOIDs$();
if (critSet != null  && !critSet.isEmpty$()  && critSet.contains$O("2.5.29.15") ) {
var keyUsageInfo=cert.getKeyUsage$();
if ((keyUsageInfo != null ) && (keyUsageInfo[0] == false ) ) throw Clazz.new_(Clazz.load('java.security.InvalidKeyException').c$$S,["Wrong key usage"]);
}}var publicKey=certificate.getPublicKey$();
this.engineInitVerify$java_security_PublicKey(publicKey);
this.state=3;
if (!C$.skipDebug && C$.pdebug != null  ) {
C$.pdebug.println$S("Signature." + this.algorithm + " verification algorithm from: " + this.provider.getName$() );
}});

Clazz.newMeth(C$, 'initSign$java_security_PrivateKey',  function (privateKey) {
this.engineInitSign$java_security_PrivateKey(privateKey);
this.state=2;
if (!C$.skipDebug && C$.pdebug != null  ) {
C$.pdebug.println$S("Signature." + this.algorithm + " signing algorithm from: " + this.provider.getName$() );
}});

Clazz.newMeth(C$, 'initSign$java_security_PrivateKey$java_security_SecureRandom',  function (privateKey, random) {
this.engineInitSign$java_security_PrivateKey$java_security_SecureRandom(privateKey, random);
this.state=2;
if (!C$.skipDebug && C$.pdebug != null  ) {
C$.pdebug.println$S("Signature." + this.algorithm + " signing algorithm from: " + this.provider.getName$() );
}});

Clazz.newMeth(C$, 'sign$',  function () {
if (this.state == 2) {
return this.engineSign$();
}throw Clazz.new_(Clazz.load('java.security.SignatureException').c$$S,["object not initialized for signing"]);
});

Clazz.newMeth(C$, 'sign$BA$I$I',  function (outbuf, offset, len) {
if (outbuf == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No output buffer given"]);
}if (offset < 0 || len < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["offset or len is less than 0"]);
}if (outbuf.length - offset < len) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Output buffer too small for specified offset and length"]);
}if (this.state != 2) {
throw Clazz.new_(Clazz.load('java.security.SignatureException').c$$S,["object not initialized for signing"]);
}return this.engineSign$BA$I$I(outbuf, offset, len);
});

Clazz.newMeth(C$, 'verify$BA',  function (signature) {
if (this.state == 3) {
return this.engineVerify$BA(signature);
}throw Clazz.new_(Clazz.load('java.security.SignatureException').c$$S,["object not initialized for verification"]);
});

Clazz.newMeth(C$, 'verify$BA$I$I',  function (signature, offset, length) {
if (this.state == 3) {
if (signature == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["signature is null"]);
}if (offset < 0 || length < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["offset or length is less than 0"]);
}if (signature.length - offset < length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["signature too small for specified offset and length"]);
}return this.engineVerify$BA$I$I(signature, offset, length);
}throw Clazz.new_(Clazz.load('java.security.SignatureException').c$$S,["object not initialized for verification"]);
});

Clazz.newMeth(C$, 'update$B',  function (b) {
if (this.state == 3 || this.state == 2 ) {
this.engineUpdate$B(b);
} else {
throw Clazz.new_(Clazz.load('java.security.SignatureException').c$$S,["object not initialized for signature or verification"]);
}});

Clazz.newMeth(C$, 'update$BA',  function (data) {
this.update$BA$I$I(data, 0, data.length);
});

Clazz.newMeth(C$, 'update$BA$I$I',  function (data, off, len) {
if (this.state == 2 || this.state == 3 ) {
if (data == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["data is null"]);
}if (off < 0 || len < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["off or len is less than 0"]);
}if (data.length - off < len) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["data too small for specified offset and length"]);
}this.engineUpdate$BA$I$I(data, off, len);
} else {
throw Clazz.new_(Clazz.load('java.security.SignatureException').c$$S,["object not initialized for signature or verification"]);
}});

Clazz.newMeth(C$, 'update$java_nio_ByteBuffer',  function (data) {
if ((this.state != 2) && (this.state != 3) ) {
throw Clazz.new_(Clazz.load('java.security.SignatureException').c$$S,["object not initialized for signature or verification"]);
}if (data == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.engineUpdate$java_nio_ByteBuffer(data);
});

Clazz.newMeth(C$, 'getAlgorithm$',  function () {
return this.algorithm;
});

Clazz.newMeth(C$, 'toString',  function () {
var initState="";
switch (this.state) {
case 0:
initState="<not initialized>";
break;
case 3:
initState="<initialized for verifying>";
break;
case 2:
initState="<initialized for signing>";
break;
}
return "Signature object: " + this.getAlgorithm$() + initState ;
});

Clazz.newMeth(C$, 'setParameter$S$O',  function (param, value) {
this.engineSetParameter$S$O(param, value);
});

Clazz.newMeth(C$, 'setParameter$java_security_spec_AlgorithmParameterSpec',  function (params) {
this.engineSetParameter$java_security_spec_AlgorithmParameterSpec(params);
});

Clazz.newMeth(C$, 'getParameters$',  function () {
return this.engineGetParameters$();
});

Clazz.newMeth(C$, 'getParameter$S',  function (param) {
return this.engineGetParameter$S(param);
});

Clazz.newMeth(C$, 'clone$',  function () {
if (Clazz.instanceOf(this, "java.lang.Cloneable")) {
return C$.superclazz.prototype.clone$.apply(this, []);
} else {
throw Clazz.new_(Clazz.load('CloneNotSupportedException'));
}});

C$.$static$=function(){C$.$static$=0;
C$.debug=$I$(7).getInstance$S$S("jca", "Signature");
C$.pdebug=$I$(7).getInstance$S$S("provider", "Provider");
C$.skipDebug=$I$(7,"isOn$S",["engine="]) && !$I$(7).isOn$S("signature") ;
C$.rsaIds=$I$(6,"asList$OA",[Clazz.array($I$(8), -1, [Clazz.new_($I$(8,1).c$$S$S,["Signature", "NONEwithRSA"]), Clazz.new_($I$(8,1).c$$S$S,["Cipher", "RSA/ECB/PKCS1Padding"]), Clazz.new_($I$(8,1).c$$S$S,["Cipher", "RSA/ECB"]), Clazz.new_($I$(8,1).c$$S$S,["Cipher", "RSA//PKCS1Padding"]), Clazz.new_($I$(8,1).c$$S$S,["Cipher", "RSA"])])]);
{
C$.signatureInfo=Clazz.new_($I$(9,1));
var TRUE=Boolean.TRUE;
C$.signatureInfo.put$O$O("sun.security.provider.DSA$RawDSA", TRUE);
C$.signatureInfo.put$O$O("sun.security.provider.DSA$SHA1withDSA", TRUE);
C$.signatureInfo.put$O$O("sun.security.rsa.RSASignature$MD2withRSA", TRUE);
C$.signatureInfo.put$O$O("sun.security.rsa.RSASignature$MD5withRSA", TRUE);
C$.signatureInfo.put$O$O("sun.security.rsa.RSASignature$SHA1withRSA", TRUE);
C$.signatureInfo.put$O$O("sun.security.rsa.RSASignature$SHA256withRSA", TRUE);
C$.signatureInfo.put$O$O("sun.security.rsa.RSASignature$SHA384withRSA", TRUE);
C$.signatureInfo.put$O$O("sun.security.rsa.RSASignature$SHA512withRSA", TRUE);
C$.signatureInfo.put$O$O("com.sun.net.ssl.internal.ssl.RSASignature", TRUE);
C$.signatureInfo.put$O$O("sun.security.pkcs11.P11Signature", TRUE);
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Signature, "Delegate", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.security.Signature');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['sigSpi','java.security.SignatureSpi','lock','java.lang.Object','firstService','java.security.Provider.Service','serviceIterator','java.util.Iterator']]
,['I',['warnCount']]]

Clazz.newMeth(C$, 'c$$java_security_SignatureSpi$S',  function (sigSpi, algorithm) {
;C$.superclazz.c$$S.apply(this,[algorithm]);C$.$init$.apply(this);
this.sigSpi=sigSpi;
this.lock=null;
}, 1);

Clazz.newMeth(C$, 'c$$java_security_Provider_Service$java_util_Iterator$S',  function (service, iterator, algorithm) {
;C$.superclazz.c$$S.apply(this,[algorithm]);C$.$init$.apply(this);
this.firstService=service;
this.serviceIterator=iterator;
this.lock= Clazz.new_();
}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
this.chooseFirstProvider$();
if (Clazz.instanceOf(this.sigSpi, "java.lang.Cloneable")) {
var sigSpiClone=this.sigSpi.clone$();
var that=Clazz.new_(C$.c$$java_security_SignatureSpi$S,[sigSpiClone, (this).algorithm]);
that.provider=(this).provider;
return that;
} else {
throw Clazz.new_(Clazz.load('CloneNotSupportedException'));
}});

Clazz.newMeth(C$, 'newInstance$java_security_Provider_Service',  function (s) {
if (s.getType$().equals$O("Cipher")) {
try {
var c=$I$(1,"getInstance$S$java_security_Provider",["RSA/ECB/PKCS1Padding", s.getProvider$()]);
return Clazz.new_($I$(2,1).c$$javax_crypto_Cipher,[c]);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.crypto.NoSuchPaddingException")){
throw Clazz.new_(Clazz.load('java.security.NoSuchAlgorithmException').c$$Throwable,[e]);
} else {
throw e;
}
}
} else {
var o=s.newInstance$O(null);
if (Clazz.instanceOf(o, "java.security.SignatureSpi") == false ) {
throw Clazz.new_(Clazz.load('java.security.NoSuchAlgorithmException').c$$S,["Not a SignatureSpi: " + o.getClass$().getName$()]);
}return o;
}}, 1);

Clazz.newMeth(C$, 'chooseFirstProvider$',  function () {
if (this.sigSpi != null ) {
return;
}{
if (this.sigSpi != null ) {
return;
}if ($I$(3).debug != null ) {
var w=--C$.warnCount;
if (w >= 0) {
$I$(3).debug.println$S("Signature.init() not first method called, disabling delayed provider selection");
if (w == 0) {
$I$(3).debug.println$S("Further warnings of this type will be suppressed");
}Clazz.new_(Clazz.load('Exception').c$$S,["Call trace"]).printStackTrace$();
}}var lastException=null;
while ((this.firstService != null ) || this.serviceIterator.hasNext$() ){
var s;
if (this.firstService != null ) {
s=this.firstService;
this.firstService=null;
} else {
s=this.serviceIterator.next$();
}if ($I$(3).isSpi$java_security_Provider_Service(s) == false ) {
continue;
}try {
this.sigSpi=C$.newInstance$java_security_Provider_Service(s);
this.provider=s.getProvider$();
this.firstService=null;
this.serviceIterator=null;
return;
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.NoSuchAlgorithmException")){
lastException=e;
} else {
throw e;
}
}
}
var e=Clazz.new_(Clazz.load('java.security.ProviderException').c$$S,["Could not construct SignatureSpi instance"]);
if (lastException != null ) {
e.initCause$Throwable(lastException);
}throw e;
}});

Clazz.newMeth(C$, 'chooseProvider$I$java_security_Key$java_security_SecureRandom',  function (type, key, random) {
{
if (this.sigSpi != null ) {
p$1.init$java_security_SignatureSpi$I$java_security_Key$java_security_SecureRandom.apply(this, [this.sigSpi, type, key, random]);
return;
}var lastException=null;
while ((this.firstService != null ) || this.serviceIterator.hasNext$() ){
var s;
if (this.firstService != null ) {
s=this.firstService;
this.firstService=null;
} else {
s=this.serviceIterator.next$();
}if (s.supportsParameter$O(key) == false ) {
continue;
}if ($I$(3).isSpi$java_security_Provider_Service(s) == false ) {
continue;
}try {
var spi=C$.newInstance$java_security_Provider_Service(s);
p$1.init$java_security_SignatureSpi$I$java_security_Key$java_security_SecureRandom.apply(this, [spi, type, key, random]);
this.provider=s.getProvider$();
this.sigSpi=spi;
this.firstService=null;
this.serviceIterator=null;
return;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (lastException == null ) {
lastException=e;
}} else {
throw e;
}
}
}
if (Clazz.instanceOf(lastException, "java.security.InvalidKeyException")) {
throw lastException;
}if (Clazz.instanceOf(lastException, "java.lang.RuntimeException")) {
throw lastException;
}var k=(key != null ) ? key.getClass$().getName$() : "(null)";
throw Clazz.new_(Clazz.load('java.security.InvalidKeyException').c$$S$Throwable,["No installed provider supports this key: " + k, lastException]);
}}, p$1);

Clazz.newMeth(C$, 'init$java_security_SignatureSpi$I$java_security_Key$java_security_SecureRandom',  function (spi, type, key, random) {
switch (type) {
case 1:
spi.engineInitVerify$java_security_PublicKey(key);
break;
case 2:
spi.engineInitSign$java_security_PrivateKey(key);
break;
case 3:
spi.engineInitSign$java_security_PrivateKey$java_security_SecureRandom(key, random);
break;
default:
throw Clazz.new_($I$(4,1).c$$O,["Internal error: " + type]);
}
}, p$1);

Clazz.newMeth(C$, 'engineInitVerify$java_security_PublicKey',  function (publicKey) {
if (this.sigSpi != null ) {
this.sigSpi.engineInitVerify$java_security_PublicKey(publicKey);
} else {
p$1.chooseProvider$I$java_security_Key$java_security_SecureRandom.apply(this, [1, publicKey, null]);
}});

Clazz.newMeth(C$, 'engineInitSign$java_security_PrivateKey',  function (privateKey) {
if (this.sigSpi != null ) {
this.sigSpi.engineInitSign$java_security_PrivateKey(privateKey);
} else {
p$1.chooseProvider$I$java_security_Key$java_security_SecureRandom.apply(this, [2, privateKey, null]);
}});

Clazz.newMeth(C$, 'engineInitSign$java_security_PrivateKey$java_security_SecureRandom',  function (privateKey, sr) {
if (this.sigSpi != null ) {
this.sigSpi.engineInitSign$java_security_PrivateKey$java_security_SecureRandom(privateKey, sr);
} else {
p$1.chooseProvider$I$java_security_Key$java_security_SecureRandom.apply(this, [3, privateKey, sr]);
}});

Clazz.newMeth(C$, 'engineUpdate$B',  function (b) {
this.chooseFirstProvider$();
this.sigSpi.engineUpdate$B(b);
});

Clazz.newMeth(C$, 'engineUpdate$BA$I$I',  function (b, off, len) {
this.chooseFirstProvider$();
this.sigSpi.engineUpdate$BA$I$I(b, off, len);
});

Clazz.newMeth(C$, 'engineUpdate$java_nio_ByteBuffer',  function (data) {
this.chooseFirstProvider$();
this.sigSpi.engineUpdate$java_nio_ByteBuffer(data);
});

Clazz.newMeth(C$, 'engineSign$',  function () {
this.chooseFirstProvider$();
return this.sigSpi.engineSign$();
});

Clazz.newMeth(C$, 'engineSign$BA$I$I',  function (outbuf, offset, len) {
this.chooseFirstProvider$();
return this.sigSpi.engineSign$BA$I$I(outbuf, offset, len);
});

Clazz.newMeth(C$, 'engineVerify$BA',  function (sigBytes) {
this.chooseFirstProvider$();
return this.sigSpi.engineVerify$BA(sigBytes);
});

Clazz.newMeth(C$, 'engineVerify$BA$I$I',  function (sigBytes, offset, length) {
this.chooseFirstProvider$();
return this.sigSpi.engineVerify$BA$I$I(sigBytes, offset, length);
});

Clazz.newMeth(C$, 'engineSetParameter$S$O',  function (param, value) {
this.chooseFirstProvider$();
this.sigSpi.engineSetParameter$S$O(param, value);
});

Clazz.newMeth(C$, 'engineSetParameter$java_security_spec_AlgorithmParameterSpec',  function (params) {
this.chooseFirstProvider$();
this.sigSpi.engineSetParameter$java_security_spec_AlgorithmParameterSpec(params);
});

Clazz.newMeth(C$, 'engineGetParameter$S',  function (param) {
this.chooseFirstProvider$();
return this.sigSpi.engineGetParameter$S(param);
});

Clazz.newMeth(C$, 'engineGetParameters$',  function () {
this.chooseFirstProvider$();
return this.sigSpi.engineGetParameters$();
});

C$.$static$=function(){C$.$static$=0;
C$.warnCount=10;
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Signature, "CipherAdapter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.security.SignatureSpi');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['cipher','javax.crypto.Cipher','data','java.io.ByteArrayOutputStream']]]

Clazz.newMeth(C$, 'c$$javax_crypto_Cipher',  function (cipher) {
Clazz.super_(C$, this);
this.cipher=cipher;
}, 1);

Clazz.newMeth(C$, 'engineInitVerify$java_security_PublicKey',  function (publicKey) {
this.cipher.init$I$java_security_Key(2, publicKey);
if (this.data == null ) {
this.data=Clazz.new_($I$(5,1).c$$I,[128]);
} else {
this.data.reset$();
}});

Clazz.newMeth(C$, 'engineInitSign$java_security_PrivateKey',  function (privateKey) {
this.cipher.init$I$java_security_Key(1, privateKey);
this.data=null;
});

Clazz.newMeth(C$, 'engineInitSign$java_security_PrivateKey$java_security_SecureRandom',  function (privateKey, random) {
this.cipher.init$I$java_security_Key$java_security_SecureRandom(1, privateKey, random);
this.data=null;
});

Clazz.newMeth(C$, 'engineUpdate$B',  function (b) {
this.engineUpdate$BA$I$I(Clazz.array(Byte.TYPE, -1, [b]), 0, 1);
});

Clazz.newMeth(C$, 'engineUpdate$BA$I$I',  function (b, off, len) {
if (this.data != null ) {
this.data.write$BA$I$I(b, off, len);
return;
}var out=this.cipher.update$BA$I$I(b, off, len);
if ((out != null ) && (out.length != 0) ) {
throw Clazz.new_(Clazz.load('java.security.SignatureException').c$$S,["Cipher unexpectedly returned data"]);
}});

Clazz.newMeth(C$, 'engineSign$',  function () {
try {
return this.cipher.doFinal$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.crypto.IllegalBlockSizeException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('java.security.SignatureException').c$$S$Throwable,["doFinal() failed", e]);
}
} else if (Clazz.exceptionOf(e$$,"javax.crypto.BadPaddingException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('java.security.SignatureException').c$$S$Throwable,["doFinal() failed", e]);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'engineVerify$BA',  function (sigBytes) {
try {
var out=this.cipher.doFinal$BA(sigBytes);
var dataBytes=this.data.toByteArray$();
this.data.reset$();
return $I$(6).equals$BA$BA(out, dataBytes);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.crypto.BadPaddingException")){
var e = e$$;
{
return false;
}
} else if (Clazz.exceptionOf(e$$,"javax.crypto.IllegalBlockSizeException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('java.security.SignatureException').c$$S$Throwable,["doFinal() failed", e]);
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'engineSetParameter$S$O',  function (param, value) {
throw Clazz.new_(Clazz.load('java.security.InvalidParameterException').c$$S,["Parameters not supported"]);
});

Clazz.newMeth(C$, 'engineGetParameter$S',  function (param) {
throw Clazz.new_(Clazz.load('java.security.InvalidParameterException').c$$S,["Parameters not supported"]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:26 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
