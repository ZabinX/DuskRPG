(function(){var P$=Clazz.newPackage("java.security.cert"),I$=[[0,'InternalError','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PKIXCertPathValidatorResult", null, null, 'java.security.cert.CertPathValidatorResult');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['trustAnchor','java.security.cert.TrustAnchor','policyTree','java.security.cert.PolicyNode','subjectPublicKey','java.security.PublicKey']]]

Clazz.newMeth(C$, 'c$$java_security_cert_TrustAnchor$java_security_cert_PolicyNode$java_security_PublicKey',  function (trustAnchor, policyTree, subjectPublicKey) {
;C$.$init$.apply(this);
if (subjectPublicKey == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["subjectPublicKey must be non-null"]);
if (trustAnchor == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["trustAnchor must be non-null"]);
this.trustAnchor=trustAnchor;
this.policyTree=policyTree;
this.subjectPublicKey=subjectPublicKey;
}, 1);

Clazz.newMeth(C$, 'getTrustAnchor$',  function () {
return this.trustAnchor;
});

Clazz.newMeth(C$, 'getPolicyTree$',  function () {
return this.policyTree;
});

Clazz.newMeth(C$, 'getPublicKey$',  function () {
return this.subjectPublicKey;
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_([e.toString(), e],$I$(1,1).c$$S$Throwable);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(2,1));
sb.append$S("PKIXCertPathValidatorResult: [\n");
sb.append$S("  Trust Anchor: " + this.trustAnchor.toString() + "\n" );
sb.append$S("  Policy Tree: " + String.valueOf$O(this.policyTree) + "\n" );
sb.append$S("  Subject Public Key: " + this.subjectPublicKey + "\n" );
sb.append$S("]");
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:27 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
