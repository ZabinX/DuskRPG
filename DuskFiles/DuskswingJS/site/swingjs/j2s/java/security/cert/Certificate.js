(function(){var P$=Clazz.newPackage("java.security.cert"),I$=[[0,'java.security.cert.CertificateFactory','java.io.ByteArrayInputStream','sun.security.x509.X509CertImpl','java.util.Arrays',['java.security.cert.Certificate','.CertificateRep']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Certificate", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Serializable');
C$.$classes$=[['CertificateRep',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.hash=-1;
},1);

C$.$fields$=[['I',['hash'],'S',['type']]]

Clazz.newMeth(C$, 'c$$S',  function (type) {
;C$.$init$.apply(this);
this.type=type;
}, 1);

Clazz.newMeth(C$, 'getType$',  function () {
return this.type;
});

Clazz.newMeth(C$, 'equals$O',  function (other) {
if (this === other ) {
return true;
}if (!(Clazz.instanceOf(other, "java.security.cert.Certificate"))) {
return false;
}try {
var thisCert=$I$(3).getEncodedInternal$java_security_cert_Certificate(this);
var otherCert=$I$(3).getEncodedInternal$java_security_cert_Certificate(other);
return $I$(4).equals$BA$BA(thisCert, otherCert);
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.cert.CertificateException")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var h=this.hash;
if (h == -1) {
try {
h=$I$(4,"hashCode$BA",[$I$(3).getEncodedInternal$java_security_cert_Certificate(this)]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.cert.CertificateException")){
h=0;
} else {
throw e;
}
}
this.hash=h;
}return h;
});

Clazz.newMeth(C$, 'verify$java_security_PublicKey$java_security_Provider',  function (key, sigProvider) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'writeReplace$',  function () {
try {
return Clazz.new_([this.type, this.getEncoded$()],$I$(5,1).c$$S$BA);
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.cert.CertificateException")){
throw Clazz.new_(Clazz.load('java.io.NotSerializableException').c$$S,["java.security.cert.Certificate: " + this.type + ": " + e.getMessage$() ]);
} else {
throw e;
}
}
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Certificate, "CertificateRep", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['type'],'O',['data','byte[]']]]

Clazz.newMeth(C$, 'c$$S$BA',  function (type, data) {
;C$.$init$.apply(this);
this.type=type;
this.data=data;
}, 1);

Clazz.newMeth(C$, 'readResolve$',  function () {
try {
var cf=$I$(1).getInstance$S(this.type);
return cf.generateCertificate$java_io_InputStream(Clazz.new_($I$(2,1).c$$BA,[this.data]));
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.cert.CertificateException")){
throw Clazz.new_(Clazz.load('java.io.NotSerializableException').c$$S,["java.security.cert.Certificate: " + this.type + ": " + e.getMessage$() ]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:26 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
