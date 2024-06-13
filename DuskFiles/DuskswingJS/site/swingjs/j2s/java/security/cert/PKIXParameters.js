(function(){var P$=Clazz.newPackage("java.security.cert"),I$=[[0,'java.util.Collections','java.util.ArrayList','java.util.HashSet','java.security.cert.TrustAnchor','InternalError','StringBuffer']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PKIXParameters", null, null, 'java.security.cert.CertPathParameters');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.revocationEnabled=true;
this.explicitPolicyRequired=false;
this.policyMappingInhibited=false;
this.anyPolicyInhibited=false;
this.policyQualifiersRejected=true;
},1);

C$.$fields$=[['Z',['revocationEnabled','explicitPolicyRequired','policyMappingInhibited','anyPolicyInhibited','policyQualifiersRejected'],'S',['sigProvider'],'O',['unmodTrustAnchors','java.util.Set','date','java.util.Date','certPathCheckers','java.util.List','unmodInitialPolicies','java.util.Set','certStores','java.util.List','certSelector','java.security.cert.CertSelector']]]

Clazz.newMeth(C$, 'c$$java_util_Set',  function (trustAnchors) {
;C$.$init$.apply(this);
this.setTrustAnchors$java_util_Set(trustAnchors);
this.unmodInitialPolicies=$I$(1).emptySet$();
this.certPathCheckers=Clazz.new_($I$(2,1));
this.certStores=Clazz.new_($I$(2,1));
}, 1);

Clazz.newMeth(C$, 'c$$java_security_KeyStore',  function (keystore) {
;C$.$init$.apply(this);
if (keystore == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["the keystore parameter must be non-null"]);
var hashSet=Clazz.new_($I$(3,1));
var aliases=keystore.aliases$();
while (aliases.hasMoreElements$()){
var alias=aliases.nextElement$();
if (keystore.isCertificateEntry$S(alias)) {
var cert=keystore.getCertificate$S(alias);
if (Clazz.instanceOf(cert, "java.security.cert.X509Certificate")) hashSet.add$O(Clazz.new_($I$(4,1).c$$java_security_cert_X509Certificate$BA,[cert, null]));
}}
this.setTrustAnchors$java_util_Set(hashSet);
this.unmodInitialPolicies=$I$(1).emptySet$();
this.certPathCheckers=Clazz.new_($I$(2,1));
this.certStores=Clazz.new_($I$(2,1));
}, 1);

Clazz.newMeth(C$, 'getTrustAnchors$',  function () {
return this.unmodTrustAnchors;
});

Clazz.newMeth(C$, 'setTrustAnchors$java_util_Set',  function (trustAnchors) {
if (trustAnchors == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["the trustAnchors parameters must be non-null"]);
}if (trustAnchors.isEmpty$()) {
throw Clazz.new_(Clazz.load('java.security.InvalidAlgorithmParameterException').c$$S,["the trustAnchors parameter must be non-empty"]);
}for (var i=trustAnchors.iterator$(); i.hasNext$(); ) {
if (!(Clazz.instanceOf(i.next$(), "java.security.cert.TrustAnchor"))) {
throw Clazz.new_(Clazz.load('ClassCastException').c$$S,["all elements of set must be of type java.security.cert.TrustAnchor"]);
}}
this.unmodTrustAnchors=$I$(1,"unmodifiableSet$java_util_Set",[Clazz.new_($I$(3,1).c$$java_util_Collection,[trustAnchors])]);
});

Clazz.newMeth(C$, 'getInitialPolicies$',  function () {
return this.unmodInitialPolicies;
});

Clazz.newMeth(C$, 'setInitialPolicies$java_util_Set',  function (initialPolicies) {
if (initialPolicies != null ) {
for (var i=initialPolicies.iterator$(); i.hasNext$(); ) {
if (!(Clazz.instanceOf(i.next$(), "java.lang.String"))) throw Clazz.new_(Clazz.load('ClassCastException').c$$S,["all elements of set must be of type java.lang.String"]);
}
this.unmodInitialPolicies=$I$(1,"unmodifiableSet$java_util_Set",[Clazz.new_($I$(3,1).c$$java_util_Collection,[initialPolicies])]);
} else this.unmodInitialPolicies=$I$(1).emptySet$();
});

Clazz.newMeth(C$, 'setCertStores$java_util_List',  function (stores) {
if (stores == null ) {
this.certStores=Clazz.new_($I$(2,1));
} else {
for (var i=stores.iterator$(); i.hasNext$(); ) {
if (!(Clazz.instanceOf(i.next$(), "java.security.cert.CertStore"))) {
throw Clazz.new_(Clazz.load('ClassCastException').c$$S,["all elements of list must be of type java.security.cert.CertStore"]);
}}
this.certStores=Clazz.new_($I$(2,1).c$$java_util_Collection,[stores]);
}});

Clazz.newMeth(C$, 'addCertStore$java_security_cert_CertStore',  function (store) {
if (store != null ) {
this.certStores.add$O(store);
}});

Clazz.newMeth(C$, 'getCertStores$',  function () {
return $I$(1,"unmodifiableList$java_util_List",[Clazz.new_($I$(2,1).c$$java_util_Collection,[this.certStores])]);
});

Clazz.newMeth(C$, 'setRevocationEnabled$Z',  function (val) {
this.revocationEnabled=val;
});

Clazz.newMeth(C$, 'isRevocationEnabled$',  function () {
return this.revocationEnabled;
});

Clazz.newMeth(C$, 'setExplicitPolicyRequired$Z',  function (val) {
this.explicitPolicyRequired=val;
});

Clazz.newMeth(C$, 'isExplicitPolicyRequired$',  function () {
return this.explicitPolicyRequired;
});

Clazz.newMeth(C$, 'setPolicyMappingInhibited$Z',  function (val) {
this.policyMappingInhibited=val;
});

Clazz.newMeth(C$, 'isPolicyMappingInhibited$',  function () {
return this.policyMappingInhibited;
});

Clazz.newMeth(C$, 'setAnyPolicyInhibited$Z',  function (val) {
this.anyPolicyInhibited=val;
});

Clazz.newMeth(C$, 'isAnyPolicyInhibited$',  function () {
return this.anyPolicyInhibited;
});

Clazz.newMeth(C$, 'setPolicyQualifiersRejected$Z',  function (qualifiersRejected) {
this.policyQualifiersRejected=qualifiersRejected;
});

Clazz.newMeth(C$, 'getPolicyQualifiersRejected$',  function () {
return this.policyQualifiersRejected;
});

Clazz.newMeth(C$, 'getDate$',  function () {
if (this.date == null ) return null;
 else return this.date.clone$();
});

Clazz.newMeth(C$, 'setDate$java_util_Date',  function (date) {
if (date != null ) this.date=date.clone$();
 else date=null;
});

Clazz.newMeth(C$, 'setCertPathCheckers$java_util_List',  function (checkers) {
if (checkers != null ) {
var tmpList=Clazz.new_($I$(2,1));
for (var checker, $checker = checkers.iterator$(); $checker.hasNext$()&&((checker=($checker.next$())),1);) {
tmpList.add$O(checker.clone$());
}
this.certPathCheckers=tmpList;
} else {
this.certPathCheckers=Clazz.new_($I$(2,1));
}});

Clazz.newMeth(C$, 'getCertPathCheckers$',  function () {
var tmpList=Clazz.new_($I$(2,1));
for (var ck, $ck = this.certPathCheckers.iterator$(); $ck.hasNext$()&&((ck=($ck.next$())),1);) {
tmpList.add$O(ck.clone$());
}
return $I$(1).unmodifiableList$java_util_List(tmpList);
});

Clazz.newMeth(C$, 'addCertPathChecker$java_security_cert_PKIXCertPathChecker',  function (checker) {
if (checker != null ) {
this.certPathCheckers.add$O(checker.clone$());
}});

Clazz.newMeth(C$, 'getSigProvider$',  function () {
return this.sigProvider;
});

Clazz.newMeth(C$, 'setSigProvider$S',  function (sigProvider) {
this.sigProvider=sigProvider;
});

Clazz.newMeth(C$, 'getTargetCertConstraints$',  function () {
if (this.certSelector != null ) {
return this.certSelector.clone$();
} else {
return null;
}});

Clazz.newMeth(C$, 'setTargetCertConstraints$java_security_cert_CertSelector',  function (selector) {
if (selector != null ) this.certSelector=selector.clone$();
 else this.certSelector=null;
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
var copy=Clazz.clone(this);
if (this.certStores != null ) {
copy.certStores=Clazz.new_($I$(2,1).c$$java_util_Collection,[this.certStores]);
}if (this.certPathCheckers != null ) {
copy.certPathCheckers=Clazz.new_([this.certPathCheckers.size$()],$I$(2,1).c$$I);
for (var checker, $checker = this.certPathCheckers.iterator$(); $checker.hasNext$()&&((checker=($checker.next$())),1);) {
copy.certPathCheckers.add$O(checker.clone$());
}
}return copy;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_([e.toString(), e],$I$(5,1).c$$S$Throwable);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(6,1));
sb.append$S("[\n");
if (this.unmodTrustAnchors != null ) {
sb.append$S("  Trust Anchors: " + this.unmodTrustAnchors.toString() + "\n" );
}if (this.unmodInitialPolicies != null ) {
if (this.unmodInitialPolicies.isEmpty$()) {
sb.append$S("  Initial Policy OIDs: any\n");
} else {
sb.append$S("  Initial Policy OIDs: [" + this.unmodInitialPolicies.toString() + "]\n" );
}}sb.append$S("  Validity Date: " + String.valueOf$O(this.date) + "\n" );
sb.append$S("  Signature Provider: " + String.valueOf$O(this.sigProvider) + "\n" );
sb.append$S("  Default Revocation Enabled: " + this.revocationEnabled + "\n" );
sb.append$S("  Explicit Policy Required: " + this.explicitPolicyRequired + "\n" );
sb.append$S("  Policy Mapping Inhibited: " + this.policyMappingInhibited + "\n" );
sb.append$S("  Any Policy Inhibited: " + this.anyPolicyInhibited + "\n" );
sb.append$S("  Policy Qualifiers Rejected: " + this.policyQualifiersRejected + "\n" );
sb.append$S("  Target Cert Constraints: " + String.valueOf$O(this.certSelector) + "\n" );
if (this.certPathCheckers != null ) sb.append$S("  Certification Path Checkers: [" + this.certPathCheckers.toString() + "]\n" );
if (this.certStores != null ) sb.append$S("  CertStores: [" + this.certStores.toString() + "]\n" );
sb.append$S("]");
return sb.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:27 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
