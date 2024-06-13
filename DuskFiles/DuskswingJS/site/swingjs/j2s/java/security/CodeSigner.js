(function(){var P$=Clazz.newPackage("java.security"),p$1={},I$=[[0,'StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CodeSigner", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.myhash=-1;
},1);

C$.$fields$=[['I',['myhash'],'O',['signerCertPath','java.security.cert.CertPath','timestamp','java.security.Timestamp']]]

Clazz.newMeth(C$, 'c$$java_security_cert_CertPath$java_security_Timestamp',  function (signerCertPath, timestamp) {
;C$.$init$.apply(this);
if (signerCertPath == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.signerCertPath=signerCertPath;
this.timestamp=timestamp;
}, 1);

Clazz.newMeth(C$, 'getSignerCertPath$',  function () {
return this.signerCertPath;
});

Clazz.newMeth(C$, 'getTimestamp$',  function () {
return this.timestamp;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
if (this.myhash == -1) {
if (this.timestamp == null ) {
this.myhash=this.signerCertPath.hashCode$();
} else {
this.myhash=this.signerCertPath.hashCode$() + this.timestamp.hashCode$();
}}return this.myhash;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj == null  || (!(Clazz.instanceOf(obj, "java.security.CodeSigner"))) ) {
return false;
}var that=obj;
if (this === that ) {
return true;
}var thatTimestamp=that.getTimestamp$();
if (this.timestamp == null ) {
if (thatTimestamp != null ) {
return false;
}} else {
if (thatTimestamp == null  || (!this.timestamp.equals$O(thatTimestamp)) ) {
return false;
}}return this.signerCertPath.equals$O(that.getSignerCertPath$());
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(1,1));
sb.append$S("(");
sb.append$S("Signer: " + this.signerCertPath.getCertificates$().get$I(0));
if (this.timestamp != null ) {
sb.append$S("timestamp: " + this.timestamp);
}sb.append$S(")");
return sb.toString();
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (ois) {
ois.defaultReadObject$();
this.myhash=-1;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
