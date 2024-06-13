(function(){var P$=Clazz.newPackage("java.security.cert"),I$=[[0,'sun.security.x509.X509CRLImpl','java.util.Arrays']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "X509CRL", null, 'java.security.cert.CRL', 'java.security.cert.X509Extension');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['issuerPrincipal','javax.security.auth.x500.X500Principal']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["X.509"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (other) {
if (this === other ) {
return true;
}if (!(Clazz.instanceOf(other, "java.security.cert.X509CRL"))) {
return false;
}try {
var thisCRL=$I$(1).getEncodedInternal$java_security_cert_X509CRL(this);
var otherCRL=$I$(1).getEncodedInternal$java_security_cert_X509CRL(other);
return $I$(2).equals$BA$BA(thisCRL, otherCRL);
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.cert.CRLException")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var retval=0;
try {
var crlData=$I$(1).getEncodedInternal$java_security_cert_X509CRL(this);
for (var i=1; i < crlData.length; i++) {
retval+=crlData[i] * i;
}
return retval;
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.cert.CRLException")){
return retval;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'verify$java_security_PublicKey$java_security_Provider',  function (key, sigProvider) {
});

Clazz.newMeth(C$, 'getIssuerX500Principal$',  function () {
if (this.issuerPrincipal == null ) {
this.issuerPrincipal=$I$(1).getIssuerX500Principal$java_security_cert_X509CRL(this);
}return this.issuerPrincipal;
});

Clazz.newMeth(C$, 'getRevokedCertificate$java_security_cert_X509Certificate',  function (certificate) {
var certIssuer=certificate.getIssuerX500Principal$();
var crlIssuer=this.getIssuerX500Principal$();
if (certIssuer.equals$O(crlIssuer) == false ) {
return null;
}return this.getRevokedCertificate$java_math_BigInteger(certificate.getSerialNumber$());
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:28 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
