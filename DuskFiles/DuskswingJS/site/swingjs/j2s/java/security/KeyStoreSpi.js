(function(){var P$=Clazz.newPackage("java.security"),I$=[[0,'javax.security.auth.callback.PasswordCallback','javax.security.auth.callback.Callback',['java.security.KeyStore','.TrustedCertificateEntry'],['java.security.KeyStore','.PrivateKeyEntry'],['java.security.KeyStore','.SecretKeyEntry']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "KeyStoreSpi");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'engineStore$java_security_KeyStore_LoadStoreParameter',  function (param) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'engineLoad$java_security_KeyStore_LoadStoreParameter',  function (param) {
if (param == null ) {
this.engineLoad$java_io_InputStream$CA(null, null);
return;
}if (Clazz.instanceOf(param, "java.security.KeyStore.SimpleLoadStoreParameter")) {
var protection=param.getProtectionParameter$();
var password;
if (Clazz.instanceOf(protection, "java.security.KeyStore.PasswordProtection")) {
password=(protection).getPassword$();
} else if (Clazz.instanceOf(protection, "java.security.KeyStore.CallbackHandlerProtection")) {
var handler=(protection).getCallbackHandler$();
var callback=Clazz.new_($I$(1,1).c$$S$Z,["Password: ", false]);
try {
handler.handle$javax_security_auth_callback_CallbackA(Clazz.array($I$(2), -1, [callback]));
} catch (e) {
if (Clazz.exceptionOf(e,"javax.security.auth.callback.UnsupportedCallbackException")){
throw Clazz.new_(Clazz.load('java.security.NoSuchAlgorithmException').c$$S$Throwable,["Could not obtain password", e]);
} else {
throw e;
}
}
password=callback.getPassword$();
callback.clearPassword$();
if (password == null ) {
throw Clazz.new_(Clazz.load('java.security.NoSuchAlgorithmException').c$$S,["No password provided"]);
}} else {
throw Clazz.new_(Clazz.load('java.security.NoSuchAlgorithmException').c$$S,["ProtectionParameter must be PasswordProtection or CallbackHandlerProtection"]);
}this.engineLoad$java_io_InputStream$CA(null, password);
return;
}throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'engineGetEntry$S$java_security_KeyStore_ProtectionParameter',  function (alias, protParam) {
if (!this.engineContainsAlias$S(alias)) {
return null;
}if (protParam == null ) {
if (this.engineIsCertificateEntry$S(alias)) {
return Clazz.new_([this.engineGetCertificate$S(alias)],$I$(3,1).c$$java_security_cert_Certificate);
} else {
throw Clazz.new_(Clazz.load('java.security.UnrecoverableKeyException').c$$S,["requested entry requires a password"]);
}}if (Clazz.instanceOf(protParam, "java.security.KeyStore.PasswordProtection")) {
if (this.engineIsCertificateEntry$S(alias)) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["trusted certificate entries are not password-protected"]);
} else if (this.engineIsKeyEntry$S(alias)) {
var pp=protParam;
var password=pp.getPassword$();
var key=this.engineGetKey$S$CA(alias, password);
if (Clazz.instanceOf(key, "java.security.PrivateKey")) {
var chain=this.engineGetCertificateChain$S(alias);
return Clazz.new_($I$(4,1).c$$java_security_PrivateKey$java_security_cert_CertificateA,[key, chain]);
} else if (Clazz.instanceOf(key, "javax.crypto.SecretKey")) {
return Clazz.new_($I$(5,1).c$$javax_crypto_SecretKey,[key]);
}}}throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'engineSetEntry$S$java_security_KeyStore_Entry$java_security_KeyStore_ProtectionParameter',  function (alias, entry, protParam) {
if (protParam != null  && !(Clazz.instanceOf(protParam, "java.security.KeyStore.PasswordProtection")) ) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["unsupported protection parameter"]);
}var pProtect=null;
if (protParam != null ) {
pProtect=protParam;
}if (Clazz.instanceOf(entry, "java.security.KeyStore.TrustedCertificateEntry")) {
if (protParam != null  && pProtect.getPassword$() != null  ) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["trusted certificate entries are not password-protected"]);
} else {
var tce=entry;
this.engineSetCertificateEntry$S$java_security_cert_Certificate(alias, tce.getTrustedCertificate$());
return;
}} else if (Clazz.instanceOf(entry, "java.security.KeyStore.PrivateKeyEntry")) {
if (pProtect == null  || pProtect.getPassword$() == null  ) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["non-null password required to create PrivateKeyEntry"]);
} else {
this.engineSetKeyEntry$S$java_security_Key$CA$java_security_cert_CertificateA(alias, (entry).getPrivateKey$(), pProtect.getPassword$(), (entry).getCertificateChain$());
return;
}} else if (Clazz.instanceOf(entry, "java.security.KeyStore.SecretKeyEntry")) {
if (pProtect == null  || pProtect.getPassword$() == null  ) {
throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["non-null password required to create SecretKeyEntry"]);
} else {
this.engineSetKeyEntry$S$java_security_Key$CA$java_security_cert_CertificateA(alias, (entry).getSecretKey$(), pProtect.getPassword$(), null);
return;
}}throw Clazz.new_(Clazz.load('java.security.KeyStoreException').c$$S,["unsupported entry type: " + entry.getClass$().getName$()]);
});

Clazz.newMeth(C$, 'engineEntryInstanceOf$S$Class',  function (alias, entryClass) {
if (entryClass === Clazz.getClass($I$(3)) ) {
return this.engineIsCertificateEntry$S(alias);
}if (entryClass === Clazz.getClass($I$(4)) ) {
return this.engineIsKeyEntry$S(alias) && this.engineGetCertificate$S(alias) != null  ;
}if (entryClass === Clazz.getClass($I$(5)) ) {
return this.engineIsKeyEntry$S(alias) && this.engineGetCertificate$S(alias) == null  ;
}return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:25 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
