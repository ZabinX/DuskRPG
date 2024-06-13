(function(){var P$=Clazz.newPackage("java.security.cert"),I$=[[0,'java.util.Collections','InternalError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PKIXCertPathChecker", null, null, ['java.security.cert.CertPathChecker', 'Cloneable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'check$java_security_cert_Certificate',  function (cert) {
this.check$java_security_cert_Certificate$java_util_Collection(cert, $I$(1).emptySet$());
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_([e.toString(), e],$I$(2,1).c$$S$Throwable);
} else {
throw e;
}
}
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:27 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
