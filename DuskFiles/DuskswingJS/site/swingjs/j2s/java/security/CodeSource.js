(function(){var P$=Clazz.newPackage("java.security"),p$1={},I$=[[0,'java.util.ArrayList','java.security.cert.Certificate','java.net.SocketPermission','StringBuilder','java.util.Hashtable','java.security.cert.CertificateFactory','java.io.ByteArrayInputStream','java.security.CodeSigner']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CodeSource", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.signers=null;
this.certs=null;
this.factory=null;
},1);

C$.$fields$=[['O',['location','java.net.URL','signers','java.security.CodeSigner[]','certs','java.security.cert.Certificate[]','sp','java.net.SocketPermission','factory','java.security.cert.CertificateFactory']]]

Clazz.newMeth(C$, 'c$$java_net_URL$java_security_cert_CertificateA',  function (url, certs) {
;C$.$init$.apply(this);
this.location=url;
if (certs != null ) {
this.certs=certs.clone$();
}}, 1);

Clazz.newMeth(C$, 'c$$java_net_URL$java_security_CodeSignerA',  function (url, signers) {
;C$.$init$.apply(this);
this.location=url;
if (signers != null ) {
this.signers=signers.clone$();
}}, 1);

Clazz.newMeth(C$, 'hashCode$',  function () {
if (this.location != null ) return this.location.hashCode$();
 else return 0;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj === this ) return true;
if (!(Clazz.instanceOf(obj, "java.security.CodeSource"))) return false;
var cs=obj;
if (this.location == null ) {
if (cs.location != null ) return false;
} else {
if (!this.location.equals$O(cs.location)) return false;
}return p$1.matchCerts$java_security_CodeSource$Z.apply(this, [cs, true]);
});

Clazz.newMeth(C$, 'getLocation$',  function () {
return this.location;
});

Clazz.newMeth(C$, 'getCertificates$',  function () {
if (this.certs != null ) {
return this.certs.clone$();
} else if (this.signers != null ) {
var certChains=Clazz.new_($I$(1,1));
for (var i=0; i < this.signers.length; i++) {
certChains.addAll$java_util_Collection(this.signers[i].getSignerCertPath$().getCertificates$());
}
this.certs=certChains.toArray$OA(Clazz.array($I$(2), [certChains.size$()]));
return this.certs.clone$();
} else {
return null;
}});

Clazz.newMeth(C$, 'getCodeSigners$',  function () {
if (this.signers != null ) {
return this.signers.clone$();
} else if (this.certs != null ) {
this.signers=p$1.convertCertArrayToSignerArray$java_security_cert_CertificateA.apply(this, [this.certs]);
return this.signers.clone$();
} else {
return null;
}});

Clazz.newMeth(C$, 'implies$java_security_CodeSource',  function (codesource) {
if (codesource == null ) return false;
return p$1.matchCerts$java_security_CodeSource$Z.apply(this, [codesource, false]) && p$1.matchLocation$java_security_CodeSource.apply(this, [codesource]) ;
});

Clazz.newMeth(C$, 'matchCerts$java_security_CodeSource$Z',  function (that, strict) {
var match;
if (this.certs == null  && this.signers == null  ) {
if (strict) {
return (that.certs == null  && that.signers == null  );
} else {
return true;
}} else if (this.signers != null  && that.signers != null  ) {
if (strict && this.signers.length != that.signers.length ) {
return false;
}for (var i=0; i < this.signers.length; i++) {
match=false;
for (var j=0; j < that.signers.length; j++) {
if (this.signers[i].equals$O(that.signers[j])) {
match=true;
break;
}}
if (!match) return false;
}
return true;
} else if (this.certs != null  && that.certs != null  ) {
if (strict && this.certs.length != that.certs.length ) {
return false;
}for (var i=0; i < this.certs.length; i++) {
match=false;
for (var j=0; j < that.certs.length; j++) {
if (this.certs[i].equals$O(that.certs[j])) {
match=true;
break;
}}
if (!match) return false;
}
return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'matchLocation$java_security_CodeSource',  function (that) {
if (this.location == null ) return true;
if ((that == null ) || (that.location == null ) ) return false;
if (this.location.equals$O(that.location)) return true;
if (!this.location.getProtocol$().equalsIgnoreCase$S(that.location.getProtocol$())) return false;
var thisPort=this.location.getPort$();
if (thisPort != -1) {
var thatPort=that.location.getPort$();
var port=thatPort != -1 ? thatPort : that.location.getDefaultPort$();
if (thisPort != port) return false;
}if (this.location.getFile$().endsWith$S("/-")) {
var thisPath=this.location.getFile$().substring$I$I(0, this.location.getFile$().length$() - 1);
if (!that.location.getFile$().startsWith$S(thisPath)) return false;
} else if (this.location.getFile$().endsWith$S("/*")) {
var last=that.location.getFile$().lastIndexOf$I("/");
if (last == -1) return false;
var thisPath=this.location.getFile$().substring$I$I(0, this.location.getFile$().length$() - 1);
var thatPath=that.location.getFile$().substring$I$I(0, last + 1);
if (!thatPath.equals$O(thisPath)) return false;
} else {
if ((!that.location.getFile$().equals$O(this.location.getFile$())) && (!that.location.getFile$().equals$O(this.location.getFile$() + "/")) ) {
return false;
}}if (this.location.getRef$() != null  && !this.location.getRef$().equals$O(that.location.getRef$()) ) {
return false;
}var thisHost=this.location.getHost$();
var thatHost=that.location.getHost$();
if (thisHost != null ) {
if (("".equals$O(thisHost) || "localhost".equals$O(thisHost) ) && ("".equals$O(thatHost) || "localhost".equals$O(thatHost) ) ) {
} else if (!thisHost.equals$O(thatHost)) {
if (thatHost == null ) {
return false;
}if (this.sp == null ) {
this.sp=Clazz.new_($I$(3,1).c$$S$S,[thisHost, "resolve"]);
}if (that.sp == null ) {
that.sp=Clazz.new_($I$(3,1).c$$S$S,[thatHost, "resolve"]);
}if (!this.sp.implies$java_security_Permission(that.sp)) {
return false;
}}}return true;
}, p$1);

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(4,1));
sb.append$S("(");
sb.append$O(this.location);
if (this.certs != null  && this.certs.length > 0 ) {
for (var i=0; i < this.certs.length; i++) {
sb.append$S(" " + this.certs[i]);
}
} else if (this.signers != null  && this.signers.length > 0 ) {
for (var i=0; i < this.signers.length; i++) {
sb.append$S(" " + this.signers[i]);
}
} else {
sb.append$S(" <no signer certificates>");
}sb.append$S(")");
return sb.toString();
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (oos) {
oos.defaultWriteObject$();
if (this.certs == null  || this.certs.length == 0 ) {
oos.writeInt$I(0);
} else {
oos.writeInt$I(this.certs.length);
for (var i=0; i < this.certs.length; i++) {
var cert=this.certs[i];
try {
oos.writeUTF$S(cert.getType$());
var encoded=cert.getEncoded$();
oos.writeInt$I(encoded.length);
oos.write$BA(encoded);
} catch (cee) {
if (Clazz.exceptionOf(cee,"java.security.cert.CertificateEncodingException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[cee.getMessage$()]);
} else {
throw cee;
}
}
}
}if (this.signers != null  && this.signers.length > 0 ) {
oos.writeObject$O(this.signers);
}}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (ois) {
var cf;
var cfs=null;
ois.defaultReadObject$();
var size=ois.readInt$();
if (size > 0) {
cfs=Clazz.new_($I$(5,1).c$$I,[3]);
this.certs=Clazz.array($I$(2), [size]);
}for (var i=0; i < size; i++) {
var certType=ois.readUTF$();
if (cfs.containsKey$O(certType)) {
cf=cfs.get$O(certType);
} else {
try {
cf=$I$(6).getInstance$S(certType);
} catch (ce) {
if (Clazz.exceptionOf(ce,"java.security.cert.CertificateException")){
throw Clazz.new_(Clazz.load('ClassNotFoundException').c$$S,["Certificate factory for " + certType + " not found" ]);
} else {
throw ce;
}
}
cfs.put$O$O(certType, cf);
}var encoded=null;
try {
encoded=Clazz.array(Byte.TYPE, [ois.readInt$()]);
} catch (oome) {
if (Clazz.exceptionOf(oome,"OutOfMemoryError")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Certificate too big"]);
} else {
throw oome;
}
}
ois.readFully$BA(encoded);
var bais=Clazz.new_($I$(7,1).c$$BA,[encoded]);
try {
this.certs[i]=cf.generateCertificate$java_io_InputStream(bais);
} catch (ce) {
if (Clazz.exceptionOf(ce,"java.security.cert.CertificateException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[ce.getMessage$()]);
} else {
throw ce;
}
}
bais.close$();
}
try {
this.signers=(ois.readObject$()).clone$();
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
} else {
throw ioe;
}
}
}, p$1);

Clazz.newMeth(C$, 'convertCertArrayToSignerArray$java_security_cert_CertificateA',  function (certs) {
if (certs == null ) {
return null;
}try {
if (this.factory == null ) {
this.factory=$I$(6).getInstance$S("X.509");
}var i=0;
var signers=Clazz.new_($I$(1,1));
while (i < certs.length){
var certChain=Clazz.new_($I$(1,1));
certChain.add$O(certs[i++]);
var j=i;
while (j < certs.length && Clazz.instanceOf(certs[j], "java.security.cert.X509Certificate")  && (certs[j]).getBasicConstraints$() != -1 ){
certChain.add$O(certs[j]);
++j;
}
i=j;
var certPath=this.factory.generateCertPath$java_util_List(certChain);
signers.add$O(Clazz.new_($I$(8,1).c$$java_security_cert_CertPath$java_security_Timestamp,[certPath, null]));
}
if (signers.isEmpty$()) {
return null;
} else {
return signers.toArray$OA(Clazz.array($I$(8), [signers.size$()]));
}} catch (e) {
if (Clazz.exceptionOf(e,"java.security.cert.CertificateException")){
return null;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
