(function(){var P$=Clazz.newPackage("java.security.cert"),p$1={},I$=[[0,'javax.security.auth.x500.X500Principal','sun.security.x509.NameConstraintsExtension','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TrustAnchor");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['caName'],'O',['pubKey','java.security.PublicKey','caPrincipal','javax.security.auth.x500.X500Principal','trustedCert','java.security.cert.X509Certificate','ncBytes','byte[]','nc','sun.security.x509.NameConstraintsExtension']]]

Clazz.newMeth(C$, 'c$$java_security_cert_X509Certificate$BA',  function (trustedCert, nameConstraints) {
;C$.$init$.apply(this);
if (trustedCert == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["the trustedCert parameter must be non-null"]);
this.trustedCert=trustedCert;
this.pubKey=null;
this.caName=null;
this.caPrincipal=null;
p$1.setNameConstraints$BA.apply(this, [nameConstraints]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_security_auth_x500_X500Principal$java_security_PublicKey$BA',  function (caPrincipal, pubKey, nameConstraints) {
;C$.$init$.apply(this);
if ((caPrincipal == null ) || (pubKey == null ) ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.trustedCert=null;
this.caPrincipal=caPrincipal;
this.caName=caPrincipal.getName$();
this.pubKey=pubKey;
p$1.setNameConstraints$BA.apply(this, [nameConstraints]);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_security_PublicKey$BA',  function (caName, pubKey, nameConstraints) {
;C$.$init$.apply(this);
if (pubKey == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["the pubKey parameter must be non-null"]);
if (caName == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["the caName parameter must be non-null"]);
if (caName.length$() == 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["the caName parameter must be a non-empty String"]);
this.caPrincipal=Clazz.new_($I$(1,1).c$$S,[caName]);
this.pubKey=pubKey;
this.caName=caName;
this.trustedCert=null;
p$1.setNameConstraints$BA.apply(this, [nameConstraints]);
}, 1);

Clazz.newMeth(C$, 'getTrustedCert$',  function () {
return this.trustedCert;
});

Clazz.newMeth(C$, 'getCA$',  function () {
return this.caPrincipal;
});

Clazz.newMeth(C$, 'getCAName$',  function () {
return this.caName;
});

Clazz.newMeth(C$, 'getCAPublicKey$',  function () {
return this.pubKey;
});

Clazz.newMeth(C$, 'setNameConstraints$BA',  function (bytes) {
if (bytes == null ) {
this.ncBytes=null;
this.nc=null;
} else {
this.ncBytes=bytes.clone$();
try {
this.nc=Clazz.new_($I$(2,1).c$$Boolean$O,[Boolean.FALSE, bytes]);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
var iae=Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[ioe.getMessage$()]);
iae.initCause$Throwable(ioe);
throw iae;
} else {
throw ioe;
}
}
}}, p$1);

Clazz.newMeth(C$, 'getNameConstraints$',  function () {
return this.ncBytes == null  ? null : this.ncBytes.clone$();
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(3,1));
sb.append$S("[\n");
if (this.pubKey != null ) {
sb.append$S("  Trusted CA Public Key: " + this.pubKey.toString() + "\n" );
sb.append$S("  Trusted CA Issuer Name: " + String.valueOf$O(this.caName) + "\n" );
} else {
sb.append$S("  Trusted CA cert: " + this.trustedCert.toString() + "\n" );
}if (this.nc != null ) sb.append$S("  Name Constraints: " + this.nc.toString() + "\n" );
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:28 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
