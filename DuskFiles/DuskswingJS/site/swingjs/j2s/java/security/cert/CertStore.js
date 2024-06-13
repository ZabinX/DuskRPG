(function(){var P$=Clazz.newPackage("java.security.cert"),I$=[[0,'sun.security.jca.GetInstance','java.security.cert.CertStoreSpi','java.security.AccessController','java.security.Security']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CertStore");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['type'],'O',['storeSpi','java.security.cert.CertStoreSpi','provider','java.security.Provider','params','java.security.cert.CertStoreParameters']]]

Clazz.newMeth(C$, 'c$$java_security_cert_CertStoreSpi$java_security_Provider$S$java_security_cert_CertStoreParameters',  function (storeSpi, provider, type, params) {
;C$.$init$.apply(this);
this.storeSpi=storeSpi;
this.provider=provider;
this.type=type;
if (params != null ) this.params=params.clone$();
}, 1);

Clazz.newMeth(C$, 'getCertificates$java_security_cert_CertSelector',  function (selector) {
return this.storeSpi.engineGetCertificates$java_security_cert_CertSelector(selector);
});

Clazz.newMeth(C$, 'getCRLs$java_security_cert_CRLSelector',  function (selector) {
return this.storeSpi.engineGetCRLs$java_security_cert_CRLSelector(selector);
});

Clazz.newMeth(C$, 'getInstance$S$java_security_cert_CertStoreParameters',  function (type, params) {
try {
var instance=$I$(1,"getInstance$S$Class$S$O",["CertStore", Clazz.getClass($I$(2)), type, params]);
return Clazz.new_(C$.c$$java_security_cert_CertStoreSpi$java_security_Provider$S$java_security_cert_CertStoreParameters,[instance.impl, instance.provider, type, params]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.NoSuchAlgorithmException")){
return C$.handleException$java_security_NoSuchAlgorithmException(e);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'handleException$java_security_NoSuchAlgorithmException',  function (e) {
var cause=e.getCause$();
if (Clazz.instanceOf(cause, "java.security.InvalidAlgorithmParameterException")) {
throw cause;
}throw e;
}, 1);

Clazz.newMeth(C$, 'getInstance$S$java_security_cert_CertStoreParameters$S',  function (type, params, provider) {
try {
var instance=$I$(1,"getInstance$S$Class$S$O$S",["CertStore", Clazz.getClass($I$(2)), type, params, provider]);
return Clazz.new_(C$.c$$java_security_cert_CertStoreSpi$java_security_Provider$S$java_security_cert_CertStoreParameters,[instance.impl, instance.provider, type, params]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.NoSuchAlgorithmException")){
return C$.handleException$java_security_NoSuchAlgorithmException(e);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getInstance$S$java_security_cert_CertStoreParameters$java_security_Provider',  function (type, params, provider) {
try {
var instance=$I$(1,"getInstance$S$Class$S$O$java_security_Provider",["CertStore", Clazz.getClass($I$(2)), type, params, provider]);
return Clazz.new_(C$.c$$java_security_cert_CertStoreSpi$java_security_Provider$S$java_security_cert_CertStoreParameters,[instance.impl, instance.provider, type, params]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.NoSuchAlgorithmException")){
return C$.handleException$java_security_NoSuchAlgorithmException(e);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getCertStoreParameters$',  function () {
return (this.params == null  ? null : this.params.clone$());
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'getProvider$',  function () {
return this.provider;
});

Clazz.newMeth(C$, 'getDefaultType$',  function () {
var cstype;
cstype=$I$(3,"doPrivileged$java_security_PrivilegedAction",[((P$.CertStore$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CertStore$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return $I$(4).getProperty$S("certstore.type");
});
})()
), Clazz.new_(P$.CertStore$1.$init$,[this, null]))]);
if (cstype == null ) {
cstype="LDAP";
}return cstype;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:26 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
