(function(){var P$=Clazz.newPackage("java.security"),p$1={},I$=[[0,'StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Timestamp", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.myhash=-1;
},1);

C$.$fields$=[['I',['myhash'],'O',['timestamp','java.util.Date','signerCertPath','java.security.cert.CertPath']]]

Clazz.newMeth(C$, 'c$$java_util_Date$java_security_cert_CertPath',  function (timestamp, signerCertPath) {
;C$.$init$.apply(this);
if (timestamp == null  || signerCertPath == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.timestamp=Clazz.new_(java.util.Date.c$$J,[timestamp.getTime$()]);
this.signerCertPath=signerCertPath;
}, 1);

Clazz.newMeth(C$, 'getTimestamp$',  function () {
return Clazz.new_(java.util.Date.c$$J,[this.timestamp.getTime$()]);
});

Clazz.newMeth(C$, 'getSignerCertPath$',  function () {
return this.signerCertPath;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
if (this.myhash == -1) {
this.myhash=this.timestamp.hashCode$() + this.signerCertPath.hashCode$();
}return this.myhash;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj == null  || (!(Clazz.instanceOf(obj, "java.security.Timestamp"))) ) {
return false;
}var that=obj;
if (this === that ) {
return true;
}return (this.timestamp.equals$O(that.getTimestamp$()) && this.signerCertPath.equals$O(that.getSignerCertPath$()) );
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(1,1));
sb.append$S("(");
sb.append$S("timestamp: " + this.timestamp);
var certs=this.signerCertPath.getCertificates$();
if (!certs.isEmpty$()) {
sb.append$S("TSA: " + certs.get$I(0));
} else {
sb.append$S("TSA: <empty>");
}sb.append$S(")");
return sb.toString();
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (ois) {
ois.defaultReadObject$();
this.myhash=-1;
this.timestamp=Clazz.new_(java.util.Date.c$$J,[this.timestamp.getTime$()]);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:26 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
