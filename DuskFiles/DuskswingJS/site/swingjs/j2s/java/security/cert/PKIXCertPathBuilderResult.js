(function(){var P$=Clazz.newPackage("java.security.cert"),I$=[[0,'StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PKIXCertPathBuilderResult", null, 'java.security.cert.PKIXCertPathValidatorResult', 'java.security.cert.CertPathBuilderResult');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['certPath','java.security.cert.CertPath']]]

Clazz.newMeth(C$, 'c$$java_security_cert_CertPath$java_security_cert_TrustAnchor$java_security_cert_PolicyNode$java_security_PublicKey',  function (certPath, trustAnchor, policyTree, subjectPublicKey) {
;C$.superclazz.c$$java_security_cert_TrustAnchor$java_security_cert_PolicyNode$java_security_PublicKey.apply(this,[trustAnchor, policyTree, subjectPublicKey]);C$.$init$.apply(this);
if (certPath == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["certPath must be non-null"]);
this.certPath=certPath;
}, 1);

Clazz.newMeth(C$, 'getCertPath$',  function () {
return this.certPath;
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(1,1));
sb.append$S("PKIXCertPathBuilderResult: [\n");
sb.append$S("  Certification Path: " + this.certPath + "\n" );
sb.append$S("  Trust Anchor: " + this.getTrustAnchor$().toString() + "\n" );
sb.append$S("  Policy Tree: " + String.valueOf$O(this.getPolicyTree$()) + "\n" );
sb.append$S("  Subject Public Key: " + this.getPublicKey$() + "\n" );
sb.append$S("]");
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:27 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
