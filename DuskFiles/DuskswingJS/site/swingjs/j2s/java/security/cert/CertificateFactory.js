(function(){var P$=Clazz.newPackage("java.security.cert"),I$=[[0,'sun.security.jca.GetInstance','java.security.cert.CertificateFactorySpi']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CertificateFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['type'],'O',['provider','java.security.Provider','certFacSpi','java.security.cert.CertificateFactorySpi']]]

Clazz.newMeth(C$, 'c$$java_security_cert_CertificateFactorySpi$java_security_Provider$S',  function (certFacSpi, provider, type) {
;C$.$init$.apply(this);
this.certFacSpi=certFacSpi;
this.provider=provider;
this.type=type;
}, 1);

Clazz.newMeth(C$, 'getInstance$S',  function (type) {
try {
var instance=$I$(1,"getInstance$S$Class$S",["CertificateFactory", Clazz.getClass($I$(2)), type]);
return Clazz.new_(C$.c$$java_security_cert_CertificateFactorySpi$java_security_Provider$S,[instance.impl, instance.provider, type]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.NoSuchAlgorithmException")){
throw Clazz.new_(Clazz.load('java.security.cert.CertificateException').c$$S$Throwable,[type + " not found", e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getInstance$S$S',  function (type, provider) {
try {
var instance=$I$(1,"getInstance$S$Class$S$S",["CertificateFactory", Clazz.getClass($I$(2)), type, provider]);
return Clazz.new_(C$.c$$java_security_cert_CertificateFactorySpi$java_security_Provider$S,[instance.impl, instance.provider, type]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.NoSuchAlgorithmException")){
throw Clazz.new_(Clazz.load('java.security.cert.CertificateException').c$$S$Throwable,[type + " not found", e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getInstance$S$java_security_Provider',  function (type, provider) {
try {
var instance=$I$(1,"getInstance$S$Class$S$java_security_Provider",["CertificateFactory", Clazz.getClass($I$(2)), type, provider]);
return Clazz.new_(C$.c$$java_security_cert_CertificateFactorySpi$java_security_Provider$S,[instance.impl, instance.provider, type]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.NoSuchAlgorithmException")){
throw Clazz.new_(Clazz.load('java.security.cert.CertificateException').c$$S$Throwable,[type + " not found", e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getProvider$',  function () {
return this.provider;
});

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'generateCertificate$java_io_InputStream',  function (inStream) {
return this.certFacSpi.engineGenerateCertificate$java_io_InputStream(inStream);
});

Clazz.newMeth(C$, 'getCertPathEncodings$',  function () {
return (this.certFacSpi.engineGetCertPathEncodings$());
});

Clazz.newMeth(C$, 'generateCertPath$java_io_InputStream',  function (inStream) {
return (this.certFacSpi.engineGenerateCertPath$java_io_InputStream(inStream));
});

Clazz.newMeth(C$, 'generateCertPath$java_io_InputStream$S',  function (inStream, encoding) {
return (this.certFacSpi.engineGenerateCertPath$java_io_InputStream$S(inStream, encoding));
});

Clazz.newMeth(C$, 'generateCertPath$java_util_List',  function (certificates) {
return (this.certFacSpi.engineGenerateCertPath$java_util_List(certificates));
});

Clazz.newMeth(C$, 'generateCertificates$java_io_InputStream',  function (inStream) {
return this.certFacSpi.engineGenerateCertificates$java_io_InputStream(inStream);
});

Clazz.newMeth(C$, 'generateCRL$java_io_InputStream',  function (inStream) {
return this.certFacSpi.engineGenerateCRL$java_io_InputStream(inStream);
});

Clazz.newMeth(C$, 'generateCRLs$java_io_InputStream',  function (inStream) {
return this.certFacSpi.engineGenerateCRLs$java_io_InputStream(inStream);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:27 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
