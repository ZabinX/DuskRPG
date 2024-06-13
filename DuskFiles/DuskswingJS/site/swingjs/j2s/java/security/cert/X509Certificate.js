(function(){var P$=Clazz.newPackage("java.security.cert"),I$=[[0,'sun.security.x509.X509CertImpl']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "X509Certificate", null, 'java.security.cert.Certificate', 'java.security.cert.X509Extension');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['subjectX500Principal','javax.security.auth.x500.X500Principal','+issuerX500Principal']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["X.509"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getIssuerX500Principal$',  function () {
if (this.issuerX500Principal == null ) {
this.issuerX500Principal=$I$(1).getIssuerX500Principal$java_security_cert_X509Certificate(this);
}return this.issuerX500Principal;
});

Clazz.newMeth(C$, 'getSubjectX500Principal$',  function () {
if (this.subjectX500Principal == null ) {
this.subjectX500Principal=$I$(1).getSubjectX500Principal$java_security_cert_X509Certificate(this);
}return this.subjectX500Principal;
});

Clazz.newMeth(C$, 'getExtendedKeyUsage$',  function () {
return $I$(1).getExtendedKeyUsage$java_security_cert_X509Certificate(this);
});

Clazz.newMeth(C$, 'getSubjectAlternativeNames$',  function () {
return $I$(1).getSubjectAlternativeNames$java_security_cert_X509Certificate(this);
});

Clazz.newMeth(C$, 'getIssuerAlternativeNames$',  function () {
return $I$(1).getIssuerAlternativeNames$java_security_cert_X509Certificate(this);
});

Clazz.newMeth(C$, 'verify$java_security_PublicKey$java_security_Provider',  function (key, sigProvider) {
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:28 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
