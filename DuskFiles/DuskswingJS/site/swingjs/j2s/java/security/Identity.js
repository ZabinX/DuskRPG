(function(){var P$=Clazz.newPackage("java.security"),p$1={},I$=[[0,'java.util.Vector','java.util.Arrays','java.security.Certificate']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Identity", null, null, ['java.security.Principal', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.info="No further information available.";
},1);

C$.$fields$=[['S',['name','info'],'O',['publicKey','java.security.PublicKey','scope','java.security.IdentityScope','certificates','java.util.Vector']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S.apply(this, ["restoring..."]);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_security_IdentityScope',  function (name, scope) {
C$.c$$S.apply(this, [name]);
if (scope != null ) {
scope.addIdentity$java_security_Identity(this);
}this.scope=scope;
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getScope$',  function () {
return this.scope;
});

Clazz.newMeth(C$, 'getPublicKey$',  function () {
return this.publicKey;
});

Clazz.newMeth(C$, 'setPublicKey$java_security_PublicKey',  function (key) {
C$.check$S("setIdentityPublicKey");
this.publicKey=key;
this.certificates=Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'setInfo$S',  function (info) {
C$.check$S("setIdentityInfo");
this.info=info;
});

Clazz.newMeth(C$, 'getInfo$',  function () {
return this.info;
});

Clazz.newMeth(C$, 'addCertificate$java_security_Certificate',  function (certificate) {
C$.check$S("addIdentityCertificate");
if (this.certificates == null ) {
this.certificates=Clazz.new_($I$(1,1));
}if (this.publicKey != null ) {
if (!p$1.keyEquals$java_security_Key$java_security_Key.apply(this, [this.publicKey, certificate.getPublicKey$()])) {
throw Clazz.new_(Clazz.load('java.security.KeyManagementException').c$$S,["public key different from cert public key"]);
}} else {
this.publicKey=certificate.getPublicKey$();
}this.certificates.addElement$O(certificate);
});

Clazz.newMeth(C$, 'keyEquals$java_security_Key$java_security_Key',  function (aKey, anotherKey) {
var aKeyFormat=aKey.getFormat$();
var anotherKeyFormat=anotherKey.getFormat$();
if (!!((aKeyFormat == null ) ^ (anotherKeyFormat == null ))) return false;
if (aKeyFormat != null  && anotherKeyFormat != null  ) if (!aKeyFormat.equalsIgnoreCase$S(anotherKeyFormat)) return false;
return $I$(2,"equals$BA$BA",[aKey.getEncoded$(), anotherKey.getEncoded$()]);
}, p$1);

Clazz.newMeth(C$, 'removeCertificate$java_security_Certificate',  function (certificate) {
C$.check$S("removeIdentityCertificate");
if (this.certificates != null ) {
this.certificates.removeElement$O(certificate);
}});

Clazz.newMeth(C$, 'certificates$',  function () {
if (this.certificates == null ) {
return Clazz.array($I$(3), [0]);
}var len=this.certificates.size$();
var certs=Clazz.array($I$(3), [len]);
this.certificates.copyInto$OA(certs);
return certs;
});

Clazz.newMeth(C$, 'equals$O',  function (identity) {
if (identity === this ) {
return true;
}if (Clazz.instanceOf(identity, "java.security.Identity")) {
var i=identity;
if (this.fullName$().equals$O(i.fullName$())) {
return true;
} else {
return this.identityEquals$java_security_Identity(i);
}}return false;
});

Clazz.newMeth(C$, 'identityEquals$java_security_Identity',  function (identity) {
if (!this.name.equalsIgnoreCase$S(identity.name)) return false;
if (!!((this.publicKey == null ) ^ (identity.publicKey == null ))) return false;
if (this.publicKey != null  && identity.publicKey != null  ) if (!this.publicKey.equals$O(identity.publicKey)) return false;
return true;
});

Clazz.newMeth(C$, 'fullName$',  function () {
var parsable=this.name;
if (this.scope != null ) {
parsable+="." + this.scope.getName$();
}return parsable;
});

Clazz.newMeth(C$, 'toString',  function () {
C$.check$S("printIdentity");
var printable=this.name;
if (this.scope != null ) {
printable+="[" + this.scope.getName$() + "]" ;
}return printable;
});

Clazz.newMeth(C$, 'toString$Z',  function (detailed) {
var out=this.toString();
if (detailed) {
out+="\n";
out+=this.printKeys$();
out+="\n" + this.printCertificates$();
if (this.info != null ) {
out+="\n\t" + this.info;
} else {
out+="\n\tno additional information available.";
}}return out;
});

Clazz.newMeth(C$, 'printKeys$',  function () {
var key="";
if (this.publicKey != null ) {
key="\tpublic key initialized";
} else {
key="\tno public key";
}return key;
});

Clazz.newMeth(C$, 'printCertificates$',  function () {
var out="";
if (this.certificates == null ) {
return "\tno certificates";
} else {
out+="\tcertificates: \n";
var i=1;
for (var cert, $cert = this.certificates.iterator$(); $cert.hasNext$()&&((cert=($cert.next$())),1);) {
out+="\tcertificate " + i++ + "\tfor  : " + cert.getPrincipal$() + "\n" ;
out+="\t\t\tfrom : " + cert.getGuarantor$() + "\n" ;
}
}return out;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.name.hashCode$();
});

Clazz.newMeth(C$, 'check$S',  function (directive) {
var security=System.getSecurityManager$();
if (security != null ) {
security.checkSecurityAccess$S(directive);
}}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
