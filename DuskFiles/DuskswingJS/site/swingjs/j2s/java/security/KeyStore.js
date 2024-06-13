(function(){var P$=Clazz.newPackage("java.security"),I$=[[0,'java.util.Arrays','java.util.Collections','java.security.cert.X509Certificate','java.util.HashSet','StringBuilder','java.security.KeyStore','java.io.FileInputStream','javax.security.auth.callback.PasswordCallback','javax.security.auth.callback.Callback',['java.security.KeyStore','.PasswordProtection'],'java.security.AccessController',['java.security.KeyStore','.Builder','.FileBuilder'],['java.security.KeyStore','.SimpleLoadStoreParameter'],'sun.security.util.Debug','java.security.Security']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "KeyStore", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['LoadStoreParameter',9],['ProtectionParameter',9],['PasswordProtection',9],['CallbackHandlerProtection',9],['Entry',9],['PrivateKeyEntry',25],['SecretKeyEntry',25],['TrustedCertificateEntry',25],['Builder',1033],['SimpleLoadStoreParameter',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.initialized=false;
},1);

C$.$fields$=[['Z',['initialized'],'S',['type'],'O',['provider','java.security.Provider','keyStoreSpi','java.security.KeyStoreSpi']]
,['Z',['skipDebug'],'O',['pdebug','sun.security.util.Debug']]]

Clazz.newMeth(C$, 'c$$java_security_KeyStoreSpi$java_security_Provider$S',  function (keyStoreSpi, provider, type) {
;C$.$init$.apply(this);
this.keyStoreSpi=keyStoreSpi;
this.provider=provider;
this.type=type;
if (!C$.skipDebug && C$.pdebug != null  ) {
C$.pdebug.println$S("KeyStore." + type.toUpperCase$() + " type from: " + this.provider.getName$() );
}}, 1);

Clazz.newMeth(C$, 'getInstance$S',  function (type) {
try {
var objs=$I$(15).getImpl$S$S$S(type, "KeyStore", null);
return Clazz.new_(C$.c$$java_security_KeyStoreSpi$java_security_Provider$S,[objs[0], objs[1], type]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.security.NoSuchAlgorithmException")){
var nsae = e$$;
{
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S$Throwable,[type + " not found", nsae]);
}
} else if (Clazz.exceptionOf(e$$,"java.security.NoSuchProviderException")){
var nspe = e$$;
{
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S$Throwable,[type + " not found", nspe]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'getInstance$S$S',  function (type, provider) {
if (provider == null  || provider.length$() == 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["missing provider"]);
try {
var objs=$I$(15).getImpl$S$S$S(type, "KeyStore", provider);
return Clazz.new_(C$.c$$java_security_KeyStoreSpi$java_security_Provider$S,[objs[0], objs[1], type]);
} catch (nsae) {
if (Clazz.exceptionOf(nsae,"java.security.NoSuchAlgorithmException")){
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S$Throwable,[type + " not found", nsae]);
} else {
throw nsae;
}
}
}, 1);

Clazz.newMeth(C$, 'getInstance$S$java_security_Provider',  function (type, provider) {
if (provider == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["missing provider"]);
try {
var objs=$I$(15).getImpl$S$S$java_security_Provider(type, "KeyStore", provider);
return Clazz.new_(C$.c$$java_security_KeyStoreSpi$java_security_Provider$S,[objs[0], objs[1], type]);
} catch (nsae) {
if (Clazz.exceptionOf(nsae,"java.security.NoSuchAlgorithmException")){
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S$Throwable,[type + " not found", nsae]);
} else {
throw nsae;
}
}
}, 1);

Clazz.newMeth(C$, 'getDefaultType$',  function () {
var kstype;
kstype=$I$(11,"doPrivileged$java_security_PrivilegedAction",[((P$.KeyStore$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "KeyStore$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return $I$(15).getProperty$S("keystore.type");
});
})()
), Clazz.new_(P$.KeyStore$1.$init$,[this, null]))]);
if (kstype == null ) {
kstype="jks";
}return kstype;
}, 1);

Clazz.newMeth(C$, 'getProvider$',  function () {
return this.provider;
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'getKey$S$CA',  function (alias, password) {
if (!this.initialized) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["Uninitialized keystore"]);
}return this.keyStoreSpi.engineGetKey$S$CA(alias, password);
});

Clazz.newMeth(C$, 'getCertificateChain$S',  function (alias) {
if (!this.initialized) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["Uninitialized keystore"]);
}return this.keyStoreSpi.engineGetCertificateChain$S(alias);
});

Clazz.newMeth(C$, 'getCertificate$S',  function (alias) {
if (!this.initialized) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["Uninitialized keystore"]);
}return this.keyStoreSpi.engineGetCertificate$S(alias);
});

Clazz.newMeth(C$, 'getCreationDate$S',  function (alias) {
if (!this.initialized) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["Uninitialized keystore"]);
}return this.keyStoreSpi.engineGetCreationDate$S(alias);
});

Clazz.newMeth(C$, 'setKeyEntry$S$java_security_Key$CA$java_security_cert_CertificateA',  function (alias, key, password, chain) {
if (!this.initialized) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["Uninitialized keystore"]);
}if ((Clazz.instanceOf(key, "java.security.PrivateKey")) && (chain == null  || chain.length == 0 ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Private key must be accompanied by certificate chain"]);
}this.keyStoreSpi.engineSetKeyEntry$S$java_security_Key$CA$java_security_cert_CertificateA(alias, key, password, chain);
});

Clazz.newMeth(C$, 'setKeyEntry$S$BA$java_security_cert_CertificateA',  function (alias, key, chain) {
if (!this.initialized) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["Uninitialized keystore"]);
}this.keyStoreSpi.engineSetKeyEntry$S$BA$java_security_cert_CertificateA(alias, key, chain);
});

Clazz.newMeth(C$, 'setCertificateEntry$S$java_security_cert_Certificate',  function (alias, cert) {
if (!this.initialized) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["Uninitialized keystore"]);
}this.keyStoreSpi.engineSetCertificateEntry$S$java_security_cert_Certificate(alias, cert);
});

Clazz.newMeth(C$, 'deleteEntry$S',  function (alias) {
if (!this.initialized) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["Uninitialized keystore"]);
}this.keyStoreSpi.engineDeleteEntry$S(alias);
});

Clazz.newMeth(C$, 'aliases$',  function () {
if (!this.initialized) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["Uninitialized keystore"]);
}return this.keyStoreSpi.engineAliases$();
});

Clazz.newMeth(C$, 'containsAlias$S',  function (alias) {
if (!this.initialized) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["Uninitialized keystore"]);
}return this.keyStoreSpi.engineContainsAlias$S(alias);
});

Clazz.newMeth(C$, 'size$',  function () {
if (!this.initialized) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["Uninitialized keystore"]);
}return this.keyStoreSpi.engineSize$();
});

Clazz.newMeth(C$, 'isKeyEntry$S',  function (alias) {
if (!this.initialized) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["Uninitialized keystore"]);
}return this.keyStoreSpi.engineIsKeyEntry$S(alias);
});

Clazz.newMeth(C$, 'isCertificateEntry$S',  function (alias) {
if (!this.initialized) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["Uninitialized keystore"]);
}return this.keyStoreSpi.engineIsCertificateEntry$S(alias);
});

Clazz.newMeth(C$, 'getCertificateAlias$java_security_cert_Certificate',  function (cert) {
if (!this.initialized) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["Uninitialized keystore"]);
}return this.keyStoreSpi.engineGetCertificateAlias$java_security_cert_Certificate(cert);
});

Clazz.newMeth(C$, 'store$java_io_OutputStream$CA',  function (stream, password) {
if (!this.initialized) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["Uninitialized keystore"]);
}this.keyStoreSpi.engineStore$java_io_OutputStream$CA(stream, password);
});

Clazz.newMeth(C$, 'store$java_security_KeyStore_LoadStoreParameter',  function (param) {
if (!this.initialized) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["Uninitialized keystore"]);
}this.keyStoreSpi.engineStore$java_security_KeyStore_LoadStoreParameter(param);
});

Clazz.newMeth(C$, 'load$java_io_InputStream$CA',  function (stream, password) {
this.keyStoreSpi.engineLoad$java_io_InputStream$CA(stream, password);
this.initialized=true;
});

Clazz.newMeth(C$, 'load$java_security_KeyStore_LoadStoreParameter',  function (param) {
this.keyStoreSpi.engineLoad$java_security_KeyStore_LoadStoreParameter(param);
this.initialized=true;
});

Clazz.newMeth(C$, 'getEntry$S$java_security_KeyStore_ProtectionParameter',  function (alias, protParam) {
if (alias == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["invalid null input"]);
}if (!this.initialized) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["Uninitialized keystore"]);
}return this.keyStoreSpi.engineGetEntry$S$java_security_KeyStore_ProtectionParameter(alias, protParam);
});

Clazz.newMeth(C$, 'setEntry$S$java_security_KeyStore_Entry$java_security_KeyStore_ProtectionParameter',  function (alias, entry, protParam) {
if (alias == null  || entry == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["invalid null input"]);
}if (!this.initialized) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["Uninitialized keystore"]);
}this.keyStoreSpi.engineSetEntry$S$java_security_KeyStore_Entry$java_security_KeyStore_ProtectionParameter(alias, entry, protParam);
});

Clazz.newMeth(C$, 'entryInstanceOf$S$Class',  function (alias, entryClass) {
if (alias == null  || entryClass == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["invalid null input"]);
}if (!this.initialized) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["Uninitialized keystore"]);
}return this.keyStoreSpi.engineEntryInstanceOf$S$Class(alias, entryClass);
});

C$.$static$=function(){C$.$static$=0;
C$.pdebug=$I$(14).getInstance$S$S("provider", "Provider");
C$.skipDebug=$I$(14,"isOn$S",["engine="]) && !$I$(14).isOn$S("keystore") ;
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.KeyStore, "LoadStoreParameter", function(){
});
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.KeyStore, "ProtectionParameter", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.KeyStore, "PasswordProtection", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.security.KeyStore','java.security.KeyStore.ProtectionParameter'], 'javax.security.auth.Destroyable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.destroyed=false;
},1);

C$.$fields$=[['Z',['destroyed'],'S',['protectionAlgorithm'],'O',['password','char[]','protectionParameters','java.security.spec.AlgorithmParameterSpec']]]

Clazz.newMeth(C$, 'c$$CA',  function (password) {
;C$.$init$.apply(this);
this.password=(password == null ) ? null : password.clone$();
this.protectionAlgorithm=null;
this.protectionParameters=null;
}, 1);

Clazz.newMeth(C$, 'c$$CA$S$java_security_spec_AlgorithmParameterSpec',  function (password, protectionAlgorithm, protectionParameters) {
;C$.$init$.apply(this);
if (protectionAlgorithm == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["invalid null input"]);
}this.password=(password == null ) ? null : password.clone$();
this.protectionAlgorithm=protectionAlgorithm;
this.protectionParameters=protectionParameters;
}, 1);

Clazz.newMeth(C$, 'getProtectionAlgorithm$',  function () {
return this.protectionAlgorithm;
});

Clazz.newMeth(C$, 'getProtectionParameters$',  function () {
return this.protectionParameters;
});

Clazz.newMeth(C$, 'getPassword$',  function () {
if (this.destroyed) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["password has been cleared"]);
}return this.password;
});

Clazz.newMeth(C$, 'destroy$',  function () {
this.destroyed=true;
if (this.password != null ) {
$I$(1).fill$CA$C(this.password, " ");
}});

Clazz.newMeth(C$, 'isDestroyed$',  function () {
return this.destroyed;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.KeyStore, "CallbackHandlerProtection", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.security.KeyStore','java.security.KeyStore.ProtectionParameter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['handler','javax.security.auth.callback.CallbackHandler']]]

Clazz.newMeth(C$, 'c$$javax_security_auth_callback_CallbackHandler',  function (handler) {
;C$.$init$.apply(this);
if (handler == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["handler must not be null"]);
}this.handler=handler;
}, 1);

Clazz.newMeth(C$, 'getCallbackHandler$',  function () {
return this.handler;
});

Clazz.newMeth(C$);
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.KeyStore, "Entry", function(){
});
C$.$classes$=[['Attribute',9]];
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getAttributes$',  function () {
return $I$(2).emptySet$();
});
};;
(function(){/*i*/var C$=Clazz.newInterface(P$.KeyStore.Entry, "Attribute", function(){
});
})()
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.KeyStore, "PrivateKeyEntry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.security.KeyStore','java.security.KeyStore.Entry']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['privKey','java.security.PrivateKey','chain','java.security.cert.Certificate[]','attributes','java.util.Set']]]

Clazz.newMeth(C$, 'c$$java_security_PrivateKey$java_security_cert_CertificateA',  function (privateKey, chain) {
C$.c$$java_security_PrivateKey$java_security_cert_CertificateA$java_util_Set.apply(this, [privateKey, chain, $I$(2).emptySet$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_security_PrivateKey$java_security_cert_CertificateA$java_util_Set',  function (privateKey, chain, attributes) {
;C$.$init$.apply(this);
if (privateKey == null  || chain == null   || attributes == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["invalid null input"]);
}if (chain.length == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid zero-length input chain"]);
}var clonedChain=chain.clone$();
var certType=clonedChain[0].getType$();
for (var i=1; i < clonedChain.length; i++) {
if (!certType.equals$O(clonedChain[i].getType$())) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["chain does not contain certificates of the same type"]);
}}
if (!privateKey.getAlgorithm$().equals$O(clonedChain[0].getPublicKey$().getAlgorithm$())) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["private key algorithm does not match algorithm of public key in end entity certificate (at index 0)"]);
}this.privKey=privateKey;
if (Clazz.instanceOf(clonedChain[0], "java.security.cert.X509Certificate") && !(Clazz.instanceOf(clonedChain, Clazz.array($I$(3), -1))) ) {
this.chain=Clazz.array($I$(3), [clonedChain.length]);
System.arraycopy$O$I$O$I$I(clonedChain, 0, this.chain, 0, clonedChain.length);
} else {
this.chain=clonedChain;
}this.attributes=$I$(2,"unmodifiableSet$java_util_Set",[Clazz.new_($I$(4,1).c$$java_util_Collection,[attributes])]);
}, 1);

Clazz.newMeth(C$, 'getPrivateKey$',  function () {
return this.privKey;
});

Clazz.newMeth(C$, 'getCertificateChain$',  function () {
return this.chain.clone$();
});

Clazz.newMeth(C$, 'getCertificate$',  function () {
return this.chain[0];
});

Clazz.newMeth(C$, 'getAttributes$',  function () {
return this.attributes;
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(5,1));
sb.append$S("Private key entry and certificate chain with " + this.chain.length + " elements:\r\n" );
for (var cert, $cert = 0, $$cert = this.chain; $cert<$$cert.length&&((cert=($$cert[$cert])),1);$cert++) {
sb.append$O(cert);
sb.append$S("\r\n");
}
return sb.toString();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.KeyStore, "SecretKeyEntry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.security.KeyStore','java.security.KeyStore.Entry']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['sKey','javax.crypto.SecretKey','attributes','java.util.Set']]]

Clazz.newMeth(C$, 'c$$javax_crypto_SecretKey',  function (secretKey) {
;C$.$init$.apply(this);
if (secretKey == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["invalid null input"]);
}this.sKey=secretKey;
this.attributes=$I$(2).emptySet$();
}, 1);

Clazz.newMeth(C$, 'c$$javax_crypto_SecretKey$java_util_Set',  function (secretKey, attributes) {
;C$.$init$.apply(this);
if (secretKey == null  || attributes == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["invalid null input"]);
}this.sKey=secretKey;
this.attributes=$I$(2,"unmodifiableSet$java_util_Set",[Clazz.new_($I$(4,1).c$$java_util_Collection,[attributes])]);
}, 1);

Clazz.newMeth(C$, 'getSecretKey$',  function () {
return this.sKey;
});

Clazz.newMeth(C$, 'getAttributes$',  function () {
return this.attributes;
});

Clazz.newMeth(C$, 'toString',  function () {
return "Secret key entry with algorithm " + this.sKey.getAlgorithm$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.KeyStore, "TrustedCertificateEntry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.security.KeyStore','java.security.KeyStore.Entry']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['cert','java.security.cert.Certificate','attributes','java.util.Set']]]

Clazz.newMeth(C$, 'c$$java_security_cert_Certificate',  function (trustedCert) {
;C$.$init$.apply(this);
if (trustedCert == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["invalid null input"]);
}this.cert=trustedCert;
this.attributes=$I$(2).emptySet$();
}, 1);

Clazz.newMeth(C$, 'c$$java_security_cert_Certificate$java_util_Set',  function (trustedCert, attributes) {
;C$.$init$.apply(this);
if (trustedCert == null  || attributes == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["invalid null input"]);
}this.cert=trustedCert;
this.attributes=$I$(2,"unmodifiableSet$java_util_Set",[Clazz.new_($I$(4,1).c$$java_util_Collection,[attributes])]);
}, 1);

Clazz.newMeth(C$, 'getTrustedCertificate$',  function () {
return this.cert;
});

Clazz.newMeth(C$, 'getAttributes$',  function () {
return this.attributes;
});

Clazz.newMeth(C$, 'toString',  function () {
return "Trusted certificate entry:\r\n" + this.cert.toString();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.KeyStore, "Builder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['FileBuilder',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'newInstance$java_security_KeyStore$java_security_KeyStore_ProtectionParameter',  function (keyStore, protectionParameter) {
if ((keyStore == null ) || (protectionParameter == null ) ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (keyStore.initialized == false ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["KeyStore not initialized"]);
}return ((P$.KeyStore$Builder$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "KeyStore$Builder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.security.KeyStore','.Builder']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['getCalled']]]

Clazz.newMeth(C$, 'getKeyStore$',  function () {
this.getCalled=true;
return this.$finals$.keyStore;
});

Clazz.newMeth(C$, 'getProtectionParameter$S',  function (alias) {
if (alias == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (this.getCalled == false ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["getKeyStore() must be called first"]);
}return this.$finals$.protectionParameter;
});
})()
), Clazz.new_(C$,[this, {protectionParameter:protectionParameter,keyStore:keyStore}],P$.KeyStore$Builder$1));
}, 1);

Clazz.newMeth(C$, 'newInstance$S$java_security_Provider$java_io_File$java_security_KeyStore_ProtectionParameter',  function (type, provider, file, protection) {
if ((type == null ) || (file == null ) || (protection == null )  ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if ((Clazz.instanceOf(protection, "java.security.KeyStore.PasswordProtection") == false ) && (Clazz.instanceOf(protection, "java.security.KeyStore.CallbackHandlerProtection") == false ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Protection must be PasswordProtection or CallbackHandlerProtection"]);
}if (file.isFile$() == false ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["File does not exist or it does not refer " + "to a normal file: " + file ]);
}return Clazz.new_([type, provider, file, protection, $I$(11).getContext$()],$I$(12,1).c$$S$java_security_Provider$java_io_File$java_security_KeyStore_ProtectionParameter$java_security_AccessControlContext);
}, 1);

Clazz.newMeth(C$, 'newInstance$S$java_security_Provider$java_security_KeyStore_ProtectionParameter',  function (type, provider, protection) {
if ((type == null ) || (protection == null ) ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var context=$I$(11).getContext$();
return ((P$.KeyStore$Builder$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "KeyStore$Builder$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.security.KeyStore','.Builder']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.action=((P$.KeyStore$Builder$2$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "KeyStore$Builder$2$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'run$',  function () {
var ks;
if (this.$finals$.provider == null ) {
ks=$I$(6).getInstance$S(this.$finals$.type);
} else {
ks=$I$(6).getInstance$S$java_security_Provider(this.$finals$.type, this.$finals$.provider);
}var param=Clazz.new_($I$(13,1).c$$java_security_KeyStore_ProtectionParameter,[this.$finals$.protection]);
if (Clazz.instanceOf(this.$finals$.protection, "java.security.KeyStore.CallbackHandlerProtection") == false ) {
ks.load$java_security_KeyStore_LoadStoreParameter(param);
} else {
var tries=0;
while (true){
++tries;
try {
ks.load$java_security_KeyStore_LoadStoreParameter(param);
break;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
if (Clazz.instanceOf(e.getCause$(), "java.security.UnrecoverableKeyException")) {
if (tries < 3) {
continue;
} else {
this.b$['java.security.KeyStore$Builder$2'].oldException=e;
}}throw e;
} else {
throw e;
}
}
}
}this.b$['java.security.KeyStore$Builder$2'].getCalled=true;
return ks;
});
})()
), Clazz.new_(P$.KeyStore$Builder$2$1.$init$,[this, {type:type,provider:provider,protection:protection}]));
},1);

C$.$fields$=[['Z',['getCalled'],'O',['oldException','java.io.IOException','action','java.security.PrivilegedExceptionAction']]]

Clazz.newMeth(C$, 'getKeyStore$',  function () {
if (this.oldException != null ) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S$Throwable,["Previous KeyStore instantiation failed", this.oldException]);
}try {
return $I$(11).doPrivileged$java_security_PrivilegedExceptionAction$java_security_AccessControlContext(this.action, this.$finals$.context);
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.PrivilegedActionException")){
var cause=e.getCause$();
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S$Throwable,["KeyStore instantiation failed", cause]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getProtectionParameter$S',  function (alias) {
if (alias == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (this.getCalled == false ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["getKeyStore() must be called first"]);
}return this.$finals$.protection;
});
})()
), Clazz.new_(C$,[this, {context:context,protection:protection}],P$.KeyStore$Builder$2));
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.KeyStore.Builder, "FileBuilder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.security.KeyStore','.Builder']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['type'],'O',['provider','java.security.Provider','file','java.io.File','protection','java.security.KeyStore.ProtectionParameter','+keyProtection','context','java.security.AccessControlContext','keyStore','java.security.KeyStore','oldException','Throwable']]]

Clazz.newMeth(C$, 'c$$S$java_security_Provider$java_io_File$java_security_KeyStore_ProtectionParameter$java_security_AccessControlContext',  function (type, provider, file, protection, context) {
Clazz.super_(C$, this);
this.type=type;
this.provider=provider;
this.file=file;
this.protection=protection;
this.context=context;
}, 1);

Clazz.newMeth(C$, 'getKeyStore$',  function () {
if (this.keyStore != null ) {
return this.keyStore;
}if (this.oldException != null ) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S$Throwable,["Previous KeyStore instantiation failed", this.oldException]);
}var action=((P$.KeyStore$Builder$FileBuilder$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "KeyStore$Builder$FileBuilder$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if (Clazz.instanceOf(this.b$['java.security.KeyStore.Builder.FileBuilder'].protection, "java.security.KeyStore.CallbackHandlerProtection") == false ) {
return this.run0$();
}var tries=0;
while (true){
++tries;
try {
return this.run0$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
if ((tries < 3) && (Clazz.instanceOf(e.getCause$(), "java.security.UnrecoverableKeyException")) ) {
continue;
}throw e;
} else {
throw e;
}
}
}
});

Clazz.newMeth(C$, 'run0$',  function () {
var ks;
if (this.b$['java.security.KeyStore.Builder.FileBuilder'].provider == null ) {
ks=$I$(6).getInstance$S(this.b$['java.security.KeyStore.Builder.FileBuilder'].type);
} else {
ks=$I$(6).getInstance$S$java_security_Provider(this.b$['java.security.KeyStore.Builder.FileBuilder'].type, this.b$['java.security.KeyStore.Builder.FileBuilder'].provider);
}var $in=null;
var password=null;
try {
$in=Clazz.new_($I$(7,1).c$$java_io_File,[this.b$['java.security.KeyStore.Builder.FileBuilder'].file]);
if (Clazz.instanceOf(this.b$['java.security.KeyStore.Builder.FileBuilder'].protection, "java.security.KeyStore.PasswordProtection")) {
password=(this.b$['java.security.KeyStore.Builder.FileBuilder'].protection).getPassword$();
this.b$['java.security.KeyStore.Builder.FileBuilder'].keyProtection=this.b$['java.security.KeyStore.Builder.FileBuilder'].protection;
} else {
var handler=(this.b$['java.security.KeyStore.Builder.FileBuilder'].protection).getCallbackHandler$();
var callback=Clazz.new_(["Password for keystore " + this.b$['java.security.KeyStore.Builder.FileBuilder'].file.getName$(), false],$I$(8,1).c$$S$Z);
handler.handle$javax_security_auth_callback_CallbackA(Clazz.array($I$(9), -1, [callback]));
password=callback.getPassword$();
if (password == null ) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["No password provided"]);
}callback.clearPassword$();
this.b$['java.security.KeyStore.Builder.FileBuilder'].keyProtection=Clazz.new_($I$(10,1).c$$CA,[password]);
}ks.load$java_io_InputStream$CA($in, password);
return ks;
} finally {
if ($in != null ) {
$in.close$();
}}
});
})()
), Clazz.new_(P$.KeyStore$Builder$FileBuilder$1.$init$,[this, null]));
try {
this.keyStore=$I$(11).doPrivileged$java_security_PrivilegedExceptionAction$java_security_AccessControlContext(action, this.context);
return this.keyStore;
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.PrivilegedActionException")){
this.oldException=e.getCause$();
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S$Throwable,["KeyStore instantiation failed", this.oldException]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getProtectionParameter$S',  function (alias) {
if (alias == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (this.keyStore == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["getKeyStore() must be called first"]);
}return this.keyProtection;
});

Clazz.newMeth(C$);
})()
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.KeyStore, "SimpleLoadStoreParameter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.security.KeyStore','java.security.KeyStore.LoadStoreParameter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['protection','java.security.KeyStore.ProtectionParameter']]]

Clazz.newMeth(C$, 'c$$java_security_KeyStore_ProtectionParameter',  function (protection) {
;C$.$init$.apply(this);
this.protection=protection;
}, 1);

Clazz.newMeth(C$, 'getProtectionParameter$',  function () {
return this.protection;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:25 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
