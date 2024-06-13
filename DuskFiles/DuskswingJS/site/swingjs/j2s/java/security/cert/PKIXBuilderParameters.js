(function(){var P$=Clazz.newPackage("java.security.cert"),I$=[[0,'StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PKIXBuilderParameters", null, 'java.security.cert.PKIXParameters');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.maxPathLength=5;
},1);

C$.$fields$=[['I',['maxPathLength']]]

Clazz.newMeth(C$, 'c$$java_util_Set$java_security_cert_CertSelector',  function (trustAnchors, targetConstraints) {
;C$.superclazz.c$$java_util_Set.apply(this,[trustAnchors]);C$.$init$.apply(this);
this.setTargetCertConstraints$java_security_cert_CertSelector(targetConstraints);
}, 1);

Clazz.newMeth(C$, 'c$$java_security_KeyStore$java_security_cert_CertSelector',  function (keystore, targetConstraints) {
;C$.superclazz.c$$java_security_KeyStore.apply(this,[keystore]);C$.$init$.apply(this);
this.setTargetCertConstraints$java_security_cert_CertSelector(targetConstraints);
}, 1);

Clazz.newMeth(C$, 'setMaxPathLength$I',  function (maxPathLength) {
if (maxPathLength < -1) {
throw Clazz.new_(Clazz.load('java.security.InvalidParameterException').c$$S,["the maximum path length parameter can not be less than -1"]);
}this.maxPathLength=maxPathLength;
});

Clazz.newMeth(C$, 'getMaxPathLength$',  function () {
return this.maxPathLength;
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(1,1));
sb.append$S("[\n");
sb.append$S(C$.superclazz.prototype.toString.apply(this, []));
sb.append$S("  Maximum Path Length: " + this.maxPathLength + "\n" );
sb.append$S("]\n");
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:27 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
