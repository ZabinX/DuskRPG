(function(){var P$=Clazz.newPackage("java.security.cert"),p$1={},I$=[[0,['java.security.cert.CertPathValidatorException','.BasicReason']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CertPathValidatorException", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.security.GeneralSecurityException');
C$.$classes$=[['Reason',9],['BasicReason',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.index=-1;
this.reason=$I$(1).UNSPECIFIED;
},1);

C$.$fields$=[['I',['index'],'O',['certPath','java.security.cert.CertPath','reason','java.security.cert.CertPathValidatorException.Reason']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S$Throwable.apply(this, [null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (msg) {
C$.c$$S$Throwable.apply(this, [msg, null]);
}, 1);

Clazz.newMeth(C$, 'c$$Throwable',  function (cause) {
C$.c$$S$Throwable.apply(this, [(cause == null  ? null : cause.toString()), cause]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Throwable',  function (msg, cause) {
C$.c$$S$Throwable$java_security_cert_CertPath$I.apply(this, [msg, cause, null, -1]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Throwable$java_security_cert_CertPath$I',  function (msg, cause, certPath, index) {
C$.c$$S$Throwable$java_security_cert_CertPath$I$java_security_cert_CertPathValidatorException_Reason.apply(this, [msg, cause, certPath, index, $I$(1).UNSPECIFIED]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Throwable$java_security_cert_CertPath$I$java_security_cert_CertPathValidatorException_Reason',  function (msg, cause, certPath, index, reason) {
;C$.superclazz.c$$S$Throwable.apply(this,[msg, cause]);C$.$init$.apply(this);
if (certPath == null  && index != -1 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}if (index < -1 || (certPath != null  && index >= certPath.getCertificates$().size$() ) ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}if (reason == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["reason can\'t be null"]);
}this.certPath=certPath;
this.index=index;
this.reason=reason;
}, 1);

Clazz.newMeth(C$, 'getCertPath$',  function () {
return this.certPath;
});

Clazz.newMeth(C$, 'getIndex$',  function () {
return this.index;
});

Clazz.newMeth(C$, 'getReason$',  function () {
return this.reason;
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (stream) {
stream.defaultReadObject$();
if (this.reason == null ) {
this.reason=$I$(1).UNSPECIFIED;
}if (this.certPath == null  && this.index != -1 ) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["certpath is null and index != -1"]);
}if (this.index < -1 || (this.certPath != null  && this.index >= this.certPath.getCertificates$().size$() ) ) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["index out of range"]);
}}, p$1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.CertPathValidatorException, "Reason", function(){
}, null, 'java.io.Serializable');

C$.$clinit$=2;
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.CertPathValidatorException, "BasicReason", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum', [['java.security.cert.CertPathValidatorException','java.security.cert.CertPathValidatorException.Reason']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "UNSPECIFIED", 0, []);
Clazz.newEnumConst($vals, C$.c$, "EXPIRED", 1, []);
Clazz.newEnumConst($vals, C$.c$, "NOT_YET_VALID", 2, []);
Clazz.newEnumConst($vals, C$.c$, "REVOKED", 3, []);
Clazz.newEnumConst($vals, C$.c$, "UNDETERMINED_REVOCATION_STATUS", 4, []);
Clazz.newEnumConst($vals, C$.c$, "INVALID_SIGNATURE", 5, []);
Clazz.newEnumConst($vals, C$.c$, "ALGORITHM_CONSTRAINED", 6, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:26 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
