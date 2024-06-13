(function(){var P$=Clazz.newPackage("java.security.cert"),p$1={},I$=[[0,'sun.security.util.Debug','sun.security.util.ObjectIdentifier','java.security.cert.CertPathHelperImpl','sun.security.x509.X500Name','javax.security.auth.x500.X500Principal','sun.security.x509.X509Key','sun.security.util.DerValue','java.util.Collections','java.util.HashSet','java.util.ArrayList','sun.security.x509.RFC822Name','sun.security.x509.DNSName','sun.security.x509.URIName','sun.security.x509.IPAddressName','sun.security.x509.OIDName','sun.security.x509.OtherName','sun.security.x509.X400Address','sun.security.x509.EDIPartyName','sun.security.x509.NameConstraintsExtension','java.util.Vector','sun.security.x509.CertificatePolicyId','sun.security.x509.CertificatePolicySet','StringBuffer','sun.misc.HexDumpEncoder','sun.security.util.DerInputStream','sun.security.x509.PrivateKeyUsageExtension','sun.security.x509.SubjectAlternativeNameExtension','sun.security.x509.CertificatePoliciesExtension','sun.security.x509.ExtendedKeyUsageExtension','java.util.Arrays','sun.security.x509.AlgorithmId','InternalError']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "X509CertSelector", null, null, 'java.security.cert.CertSelector');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.basicConstraints=-1;
this.matchAllSubjectAltNames=true;
},1);

C$.$fields$=[['Z',['matchAllSubjectAltNames'],'I',['basicConstraints'],'O',['serialNumber','java.math.BigInteger','issuer','javax.security.auth.x500.X500Principal','+subject','subjectKeyID','byte[]','+authorityKeyID','certificateValid','java.util.Date','+privateKeyValid','subjectPublicKeyAlgID','sun.security.util.ObjectIdentifier','subjectPublicKey','java.security.PublicKey','subjectPublicKeyBytes','byte[]','keyUsage','boolean[]','keyPurposeSet','java.util.Set','+keyPurposeOIDSet','+subjectAlternativeNames','+subjectAlternativeGeneralNames','policy','sun.security.x509.CertificatePolicySet','policySet','java.util.Set','+pathToNames','+pathToGeneralNames','nc','sun.security.x509.NameConstraintsExtension','ncBytes','byte[]','x509Cert','java.security.cert.X509Certificate']]
,['O',['debug','sun.security.util.Debug','ANY_EXTENDED_KEY_USAGE','sun.security.util.ObjectIdentifier','FALSE','Boolean','EXTENSION_OIDS','String[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setCertificate$java_security_cert_X509Certificate',  function (cert) {
this.x509Cert=cert;
});

Clazz.newMeth(C$, 'setSerialNumber$java_math_BigInteger',  function (serial) {
this.serialNumber=serial;
});

Clazz.newMeth(C$, 'setIssuer$javax_security_auth_x500_X500Principal',  function (issuer) {
this.issuer=issuer;
});

Clazz.newMeth(C$, 'setIssuer$S',  function (issuerDN) {
if (issuerDN == null ) {
this.issuer=null;
} else {
this.issuer=Clazz.new_($I$(4,1).c$$S,[issuerDN]).asX500Principal$();
}});

Clazz.newMeth(C$, 'setIssuer$BA',  function (issuerDN) {
try {
this.issuer=(issuerDN == null  ? null : Clazz.new_($I$(5,1).c$$BA,[issuerDN]));
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S$Throwable,["Invalid name", e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setSubject$javax_security_auth_x500_X500Principal',  function (subject) {
this.subject=subject;
});

Clazz.newMeth(C$, 'setSubject$S',  function (subjectDN) {
if (subjectDN == null ) {
this.subject=null;
} else {
this.subject=Clazz.new_($I$(4,1).c$$S,[subjectDN]).asX500Principal$();
}});

Clazz.newMeth(C$, 'setSubject$BA',  function (subjectDN) {
try {
this.subject=(subjectDN == null  ? null : Clazz.new_($I$(5,1).c$$BA,[subjectDN]));
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S$Throwable,["Invalid name", e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setSubjectKeyIdentifier$BA',  function (subjectKeyID) {
if (subjectKeyID == null ) {
this.subjectKeyID=null;
} else {
this.subjectKeyID=subjectKeyID.clone$();
}});

Clazz.newMeth(C$, 'setAuthorityKeyIdentifier$BA',  function (authorityKeyID) {
if (authorityKeyID == null ) {
this.authorityKeyID=null;
} else {
this.authorityKeyID=authorityKeyID.clone$();
}});

Clazz.newMeth(C$, 'setCertificateValid$java_util_Date',  function (certValid) {
if (certValid == null ) {
this.certificateValid=null;
} else {
this.certificateValid=certValid.clone$();
}});

Clazz.newMeth(C$, 'setPrivateKeyValid$java_util_Date',  function (privateKeyValid) {
if (privateKeyValid == null ) {
this.privateKeyValid=null;
} else {
this.privateKeyValid=privateKeyValid.clone$();
}});

Clazz.newMeth(C$, 'setSubjectPublicKeyAlgID$S',  function (oid) {
if (oid == null ) {
this.subjectPublicKeyAlgID=null;
} else {
this.subjectPublicKeyAlgID=Clazz.new_($I$(2,1).c$$S,[oid]);
}});

Clazz.newMeth(C$, 'setSubjectPublicKey$java_security_PublicKey',  function (key) {
if (key == null ) {
this.subjectPublicKey=null;
this.subjectPublicKeyBytes=null;
} else {
this.subjectPublicKey=key;
this.subjectPublicKeyBytes=key.getEncoded$();
}});

Clazz.newMeth(C$, 'setSubjectPublicKey$BA',  function (key) {
if (key == null ) {
this.subjectPublicKey=null;
this.subjectPublicKeyBytes=null;
} else {
this.subjectPublicKeyBytes=key.clone$();
this.subjectPublicKey=$I$(6,"parse$sun_security_util_DerValue",[Clazz.new_($I$(7,1).c$$BA,[this.subjectPublicKeyBytes])]);
}});

Clazz.newMeth(C$, 'setKeyUsage$ZA',  function (keyUsage) {
if (keyUsage == null ) {
this.keyUsage=null;
} else {
this.keyUsage=keyUsage.clone$();
}});

Clazz.newMeth(C$, 'setExtendedKeyUsage$java_util_Set',  function (keyPurposeSet) {
if ((keyPurposeSet == null ) || keyPurposeSet.isEmpty$() ) {
this.keyPurposeSet=null;
this.keyPurposeOIDSet=null;
} else {
this.keyPurposeSet=$I$(8,"unmodifiableSet$java_util_Set",[Clazz.new_($I$(9,1).c$$java_util_Collection,[keyPurposeSet])]);
this.keyPurposeOIDSet=Clazz.new_($I$(9,1));
for (var s, $s = this.keyPurposeSet.iterator$(); $s.hasNext$()&&((s=($s.next$())),1);) {
this.keyPurposeOIDSet.add$O(Clazz.new_($I$(2,1).c$$S,[s]));
}
}});

Clazz.newMeth(C$, 'setMatchAllSubjectAltNames$Z',  function (matchAllNames) {
this.matchAllSubjectAltNames=matchAllNames;
});

Clazz.newMeth(C$, 'setSubjectAlternativeNames$java_util_Collection',  function (names) {
if (names == null ) {
this.subjectAlternativeNames=null;
this.subjectAlternativeGeneralNames=null;
} else {
if (names.isEmpty$()) {
this.subjectAlternativeNames=null;
this.subjectAlternativeGeneralNames=null;
return;
}var tempNames=C$.cloneAndCheckNames$java_util_Collection(names);
this.subjectAlternativeGeneralNames=C$.parseNames$java_util_Collection(tempNames);
this.subjectAlternativeNames=tempNames;
}});

Clazz.newMeth(C$, 'addSubjectAlternativeName$I$S',  function (type, name) {
p$1.addSubjectAlternativeNameInternal$I$O.apply(this, [type, name]);
});

Clazz.newMeth(C$, 'addSubjectAlternativeName$I$BA',  function (type, name) {
p$1.addSubjectAlternativeNameInternal$I$O.apply(this, [type, name.clone$()]);
});

Clazz.newMeth(C$, 'addSubjectAlternativeNameInternal$I$O',  function (type, name) {
var tempName=C$.makeGeneralNameInterface$I$O(type, name);
if (this.subjectAlternativeNames == null ) {
this.subjectAlternativeNames=Clazz.new_($I$(9,1));
}if (this.subjectAlternativeGeneralNames == null ) {
this.subjectAlternativeGeneralNames=Clazz.new_($I$(9,1));
}var list=Clazz.new_($I$(10,1).c$$I,[2]);
list.add$O(Integer.valueOf$I(type));
list.add$O(name);
this.subjectAlternativeNames.add$O(list);
this.subjectAlternativeGeneralNames.add$O(tempName);
}, p$1);

Clazz.newMeth(C$, 'parseNames$java_util_Collection',  function (names) {
var genNames=Clazz.new_($I$(9,1));
for (var nameList, $nameList = names.iterator$(); $nameList.hasNext$()&&((nameList=($nameList.next$())),1);) {
if (nameList.size$() != 2) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["name list size not 2"]);
}var o=nameList.get$I(0);
if (!(Clazz.instanceOf(o, "java.lang.Integer"))) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["expected an Integer"]);
}var nameType=(o).intValue$();
o=nameList.get$I(1);
genNames.add$O(C$.makeGeneralNameInterface$I$O(nameType, o));
}
return genNames;
}, 1);

Clazz.newMeth(C$, 'equalNames$java_util_Collection$java_util_Collection',  function (object1, object2) {
if ((object1 == null ) || (object2 == null ) ) {
return object1 === object2 ;
}return object1.equals$O(object2);
}, 1);

Clazz.newMeth(C$, 'makeGeneralNameInterface$I$O',  function (type, name) {
var result;
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.makeGeneralNameInterface(" + type + ")..." );
}if (Clazz.instanceOf(name, "java.lang.String")) {
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.makeGeneralNameInterface() " + "name is String: " + name );
}switch (type) {
case 1:
result=Clazz.new_($I$(11,1).c$$S,[name]);
break;
case 2:
result=Clazz.new_($I$(12,1).c$$S,[name]);
break;
case 4:
result=Clazz.new_($I$(4,1).c$$S,[name]);
break;
case 6:
result=Clazz.new_($I$(13,1).c$$S,[name]);
break;
case 7:
result=Clazz.new_($I$(14,1).c$$S,[name]);
break;
case 8:
result=Clazz.new_($I$(15,1).c$$S,[name]);
break;
default:
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["unable to parse String names of type " + type]);
}
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.makeGeneralNameInterface() " + "result: " + result.toString() );
}} else if (Clazz.instanceOf(name, Clazz.array(Byte.TYPE, -1))) {
var val=Clazz.new_($I$(7,1).c$$BA,[name]);
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.makeGeneralNameInterface() is byte[]");
}switch (type) {
case 0:
result=Clazz.new_($I$(16,1).c$$sun_security_util_DerValue,[val]);
break;
case 1:
result=Clazz.new_($I$(11,1).c$$sun_security_util_DerValue,[val]);
break;
case 2:
result=Clazz.new_($I$(12,1).c$$sun_security_util_DerValue,[val]);
break;
case 3:
result=Clazz.new_($I$(17,1).c$$sun_security_util_DerValue,[val]);
break;
case 4:
result=Clazz.new_($I$(4,1).c$$sun_security_util_DerValue,[val]);
break;
case 5:
result=Clazz.new_($I$(18,1).c$$sun_security_util_DerValue,[val]);
break;
case 6:
result=Clazz.new_($I$(13,1).c$$sun_security_util_DerValue,[val]);
break;
case 7:
result=Clazz.new_($I$(14,1).c$$sun_security_util_DerValue,[val]);
break;
case 8:
result=Clazz.new_($I$(15,1).c$$sun_security_util_DerValue,[val]);
break;
default:
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["unable to parse byte array names of " + "type " + type ]);
}
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.makeGeneralNameInterface() result: " + result.toString());
}} else {
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.makeGeneralName() input name not String or byte array");
}throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["name not String or byte array"]);
}return result;
}, 1);

Clazz.newMeth(C$, 'setNameConstraints$BA',  function (bytes) {
if (bytes == null ) {
this.ncBytes=null;
this.nc=null;
} else {
this.ncBytes=bytes.clone$();
this.nc=Clazz.new_($I$(19,1).c$$Boolean$O,[C$.FALSE, bytes]);
}});

Clazz.newMeth(C$, 'setBasicConstraints$I',  function (minMaxPathLen) {
if (minMaxPathLen < -2) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["basic constraints less than -2"]);
}this.basicConstraints=minMaxPathLen;
});

Clazz.newMeth(C$, 'setPolicy$java_util_Set',  function (certPolicySet) {
if (certPolicySet == null ) {
this.policySet=null;
this.policy=null;
} else {
var tempSet=$I$(8,"unmodifiableSet$java_util_Set",[Clazz.new_($I$(9,1).c$$java_util_Collection,[certPolicySet])]);
var i=tempSet.iterator$();
var polIdVector=Clazz.new_($I$(20,1));
while (i.hasNext$()){
var o=i.next$();
if (!(Clazz.instanceOf(o, "java.lang.String"))) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["non String in certPolicySet"]);
}polIdVector.add$O(Clazz.new_([Clazz.new_($I$(2,1).c$$S,[o])],$I$(21,1).c$$sun_security_util_ObjectIdentifier));
}
this.policySet=tempSet;
this.policy=Clazz.new_($I$(22,1).c$$java_util_Vector,[polIdVector]);
}});

Clazz.newMeth(C$, 'setPathToNames$java_util_Collection',  function (names) {
if ((names == null ) || names.isEmpty$() ) {
this.pathToNames=null;
this.pathToGeneralNames=null;
} else {
var tempNames=C$.cloneAndCheckNames$java_util_Collection(names);
this.pathToGeneralNames=C$.parseNames$java_util_Collection(tempNames);
this.pathToNames=tempNames;
}});

Clazz.newMeth(C$, 'setPathToNamesInternal$java_util_Set',  function (names) {
this.pathToNames=$I$(8).emptySet$();
this.pathToGeneralNames=names;
});

Clazz.newMeth(C$, 'addPathToName$I$S',  function (type, name) {
p$1.addPathToNameInternal$I$O.apply(this, [type, name]);
});

Clazz.newMeth(C$, 'addPathToName$I$BA',  function (type, name) {
p$1.addPathToNameInternal$I$O.apply(this, [type, name.clone$()]);
});

Clazz.newMeth(C$, 'addPathToNameInternal$I$O',  function (type, name) {
var tempName=C$.makeGeneralNameInterface$I$O(type, name);
if (this.pathToGeneralNames == null ) {
this.pathToNames=Clazz.new_($I$(9,1));
this.pathToGeneralNames=Clazz.new_($I$(9,1));
}var list=Clazz.new_($I$(10,1).c$$I,[2]);
list.add$O(Integer.valueOf$I(type));
list.add$O(name);
this.pathToNames.add$O(list);
this.pathToGeneralNames.add$O(tempName);
}, p$1);

Clazz.newMeth(C$, 'getCertificate$',  function () {
return this.x509Cert;
});

Clazz.newMeth(C$, 'getSerialNumber$',  function () {
return this.serialNumber;
});

Clazz.newMeth(C$, 'getIssuer$',  function () {
return this.issuer;
});

Clazz.newMeth(C$, 'getIssuerAsString$',  function () {
return (this.issuer == null  ? null : this.issuer.getName$());
});

Clazz.newMeth(C$, 'getIssuerAsBytes$',  function () {
return (this.issuer == null  ? null : this.issuer.getEncoded$());
});

Clazz.newMeth(C$, 'getSubject$',  function () {
return this.subject;
});

Clazz.newMeth(C$, 'getSubjectAsString$',  function () {
return (this.subject == null  ? null : this.subject.getName$());
});

Clazz.newMeth(C$, 'getSubjectAsBytes$',  function () {
return (this.subject == null  ? null : this.subject.getEncoded$());
});

Clazz.newMeth(C$, 'getSubjectKeyIdentifier$',  function () {
if (this.subjectKeyID == null ) {
return null;
}return this.subjectKeyID.clone$();
});

Clazz.newMeth(C$, 'getAuthorityKeyIdentifier$',  function () {
if (this.authorityKeyID == null ) {
return null;
}return this.authorityKeyID.clone$();
});

Clazz.newMeth(C$, 'getCertificateValid$',  function () {
if (this.certificateValid == null ) {
return null;
}return this.certificateValid.clone$();
});

Clazz.newMeth(C$, 'getPrivateKeyValid$',  function () {
if (this.privateKeyValid == null ) {
return null;
}return this.privateKeyValid.clone$();
});

Clazz.newMeth(C$, 'getSubjectPublicKeyAlgID$',  function () {
if (this.subjectPublicKeyAlgID == null ) {
return null;
}return this.subjectPublicKeyAlgID.toString();
});

Clazz.newMeth(C$, 'getSubjectPublicKey$',  function () {
return this.subjectPublicKey;
});

Clazz.newMeth(C$, 'getKeyUsage$',  function () {
if (this.keyUsage == null ) {
return null;
}return this.keyUsage.clone$();
});

Clazz.newMeth(C$, 'getExtendedKeyUsage$',  function () {
return this.keyPurposeSet;
});

Clazz.newMeth(C$, 'getMatchAllSubjectAltNames$',  function () {
return this.matchAllSubjectAltNames;
});

Clazz.newMeth(C$, 'getSubjectAlternativeNames$',  function () {
if (this.subjectAlternativeNames == null ) {
return null;
}return C$.cloneNames$java_util_Collection(this.subjectAlternativeNames);
});

Clazz.newMeth(C$, 'cloneNames$java_util_Collection',  function (names) {
try {
return C$.cloneAndCheckNames$java_util_Collection(names);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["cloneNames encountered IOException: " + e.getMessage$()]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'cloneAndCheckNames$java_util_Collection',  function (names) {
var namesCopy=Clazz.new_($I$(9,1));
for (var o, $o = names.iterator$(); $o.hasNext$()&&((o=($o.next$())),1);) {
namesCopy.add$O(Clazz.new_($I$(10,1).c$$java_util_Collection,[o]));
}
for (var list, $list = namesCopy.iterator$(); $list.hasNext$()&&((list=($list.next$())),1);) {
var nameList=list;
if (nameList.size$() != 2) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["name list size not 2"]);
}var o=nameList.get$I(0);
if (!(Clazz.instanceOf(o, "java.lang.Integer"))) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["expected an Integer"]);
}var nameType=(o).intValue$();
if ((nameType < 0) || (nameType > 8) ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["name type not 0-8"]);
}var nameObject=nameList.get$I(1);
if (!(Clazz.instanceOf(nameObject, Clazz.array(Byte.TYPE, -1))) && !(Clazz.instanceOf(nameObject, "java.lang.String")) ) {
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.cloneAndCheckNames() name not byte array");
}throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["name not byte array or String"]);
}if (Clazz.instanceOf(nameObject, Clazz.array(Byte.TYPE, -1))) {
nameList.set$I$O(1, (nameObject).clone$());
}}
return namesCopy;
}, 1);

Clazz.newMeth(C$, 'getNameConstraints$',  function () {
if (this.ncBytes == null ) {
return null;
} else {
return this.ncBytes.clone$();
}});

Clazz.newMeth(C$, 'getBasicConstraints$',  function () {
return this.basicConstraints;
});

Clazz.newMeth(C$, 'getPolicy$',  function () {
return this.policySet;
});

Clazz.newMeth(C$, 'getPathToNames$',  function () {
if (this.pathToNames == null ) {
return null;
}return C$.cloneNames$java_util_Collection(this.pathToNames);
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(23,1));
sb.append$S("X509CertSelector: [\n");
if (this.x509Cert != null ) {
sb.append$S("  Certificate: " + this.x509Cert.toString() + "\n" );
}if (this.serialNumber != null ) {
sb.append$S("  Serial Number: " + this.serialNumber.toString() + "\n" );
}if (this.issuer != null ) {
sb.append$S("  Issuer: " + this.getIssuerAsString$() + "\n" );
}if (this.subject != null ) {
sb.append$S("  Subject: " + this.getSubjectAsString$() + "\n" );
}sb.append$S("  matchAllSubjectAltNames flag: " + String.valueOf$Z(this.matchAllSubjectAltNames) + "\n" );
if (this.subjectAlternativeNames != null ) {
sb.append$S("  SubjectAlternativeNames:\n");
var i=this.subjectAlternativeNames.iterator$();
while (i.hasNext$()){
var list=i.next$();
sb.append$S("    type " + list.get$I(0) + ", name " + list.get$I(1) + "\n" );
}
}if (this.subjectKeyID != null ) {
var enc=Clazz.new_($I$(24,1));
sb.append$S("  Subject Key Identifier: " + enc.encodeBuffer$BA(this.subjectKeyID) + "\n" );
}if (this.authorityKeyID != null ) {
var enc=Clazz.new_($I$(24,1));
sb.append$S("  Authority Key Identifier: " + enc.encodeBuffer$BA(this.authorityKeyID) + "\n" );
}if (this.certificateValid != null ) {
sb.append$S("  Certificate Valid: " + this.certificateValid.toString() + "\n" );
}if (this.privateKeyValid != null ) {
sb.append$S("  Private Key Valid: " + this.privateKeyValid.toString() + "\n" );
}if (this.subjectPublicKeyAlgID != null ) {
sb.append$S("  Subject Public Key AlgID: " + this.subjectPublicKeyAlgID.toString() + "\n" );
}if (this.subjectPublicKey != null ) {
sb.append$S("  Subject Public Key: " + this.subjectPublicKey.toString() + "\n" );
}if (this.keyUsage != null ) {
sb.append$S("  Key Usage: " + C$.keyUsageToString$ZA(this.keyUsage) + "\n" );
}if (this.keyPurposeSet != null ) {
sb.append$S("  Extended Key Usage: " + this.keyPurposeSet.toString() + "\n" );
}if (this.policy != null ) {
sb.append$S("  Policy: " + this.policy.toString() + "\n" );
}if (this.pathToGeneralNames != null ) {
sb.append$S("  Path to names:\n");
var i=this.pathToGeneralNames.iterator$();
while (i.hasNext$()){
sb.append$S("    " + i.next$() + "\n" );
}
}sb.append$S("]");
return sb.toString();
});

Clazz.newMeth(C$, 'keyUsageToString$ZA',  function (k) {
var s="KeyUsage [\n";
try {
if (k[0]) {
s+="  DigitalSignature\n";
}if (k[1]) {
s+="  Non_repudiation\n";
}if (k[2]) {
s+="  Key_Encipherment\n";
}if (k[3]) {
s+="  Data_Encipherment\n";
}if (k[4]) {
s+="  Key_Agreement\n";
}if (k[5]) {
s+="  Key_CertSign\n";
}if (k[6]) {
s+="  Crl_Sign\n";
}if (k[7]) {
s+="  Encipher_Only\n";
}if (k[8]) {
s+="  Decipher_Only\n";
}} catch (ex) {
if (Clazz.exceptionOf(ex,"ArrayIndexOutOfBoundsException")){
} else {
throw ex;
}
}
s+="]\n";
return (s);
}, 1);

Clazz.newMeth(C$, 'getExtensionObject$java_security_cert_X509Certificate$I',  function (cert, extId) {
if (Clazz.instanceOf(cert, "sun.security.x509.X509CertImpl")) {
var impl=cert;
switch (extId) {
case 0:
return impl.getPrivateKeyUsageExtension$();
case 1:
return impl.getSubjectAlternativeNameExtension$();
case 2:
return impl.getNameConstraintsExtension$();
case 3:
return impl.getCertificatePoliciesExtension$();
case 4:
return impl.getExtendedKeyUsageExtension$();
default:
return null;
}
}var rawExtVal=cert.getExtensionValue$S(C$.EXTENSION_OIDS[extId]);
if (rawExtVal == null ) {
return null;
}var $in=Clazz.new_($I$(25,1).c$$BA,[rawExtVal]);
var encoded=$in.getOctetString$();
switch (extId) {
case 0:
try {
return Clazz.new_($I$(26,1).c$$Boolean$O,[C$.FALSE, encoded]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.security.cert.CertificateException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[ex.getMessage$()]);
} else {
throw ex;
}
}
case 1:
return Clazz.new_($I$(27,1).c$$Boolean$O,[C$.FALSE, encoded]);
case 2:
return Clazz.new_($I$(19,1).c$$Boolean$O,[C$.FALSE, encoded]);
case 3:
return Clazz.new_($I$(28,1).c$$Boolean$O,[C$.FALSE, encoded]);
case 4:
return Clazz.new_($I$(29,1).c$$Boolean$O,[C$.FALSE, encoded]);
default:
return null;
}
}, 1);

Clazz.newMeth(C$, 'match$java_security_cert_Certificate',  function (cert) {
if (!(Clazz.instanceOf(cert, "java.security.cert.X509Certificate"))) {
return false;
}var xcert=cert;
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match(SN: " + (xcert.getSerialNumber$()).toString$I(16) + "\n  Issuer: " + xcert.getIssuerDN$() + "\n  Subject: " + xcert.getSubjectDN$() + ")" );
}if (this.x509Cert != null ) {
if (!this.x509Cert.equals$O(xcert)) {
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: certs don\'t match");
}return false;
}}if (this.serialNumber != null ) {
if (!this.serialNumber.equals$O(xcert.getSerialNumber$())) {
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: serial numbers don\'t match");
}return false;
}}if (this.issuer != null ) {
if (!this.issuer.equals$O(xcert.getIssuerX500Principal$())) {
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: issuer DNs don\'t match");
}return false;
}}if (this.subject != null ) {
if (!this.subject.equals$O(xcert.getSubjectX500Principal$())) {
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: subject DNs don\'t match");
}return false;
}}if (this.certificateValid != null ) {
try {
xcert.checkValidity$java_util_Date(this.certificateValid);
} catch (e) {
if (Clazz.exceptionOf(e,"java.security.cert.CertificateException")){
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: certificate not within validity period");
}return false;
} else {
throw e;
}
}
}if (this.subjectPublicKeyBytes != null ) {
var certKey=xcert.getPublicKey$().getEncoded$();
if (!$I$(30).equals$BA$BA(this.subjectPublicKeyBytes, certKey)) {
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: subject public keys don\'t match");
}return false;
}}var result=p$1.matchBasicConstraints$java_security_cert_X509Certificate.apply(this, [xcert]) && p$1.matchKeyUsage$java_security_cert_X509Certificate.apply(this, [xcert]) && p$1.matchExtendedKeyUsage$java_security_cert_X509Certificate.apply(this, [xcert]) && p$1.matchSubjectKeyID$java_security_cert_X509Certificate.apply(this, [xcert]) && p$1.matchAuthorityKeyID$java_security_cert_X509Certificate.apply(this, [xcert]) && p$1.matchPrivateKeyValid$java_security_cert_X509Certificate.apply(this, [xcert]) && p$1.matchSubjectPublicKeyAlgID$java_security_cert_X509Certificate.apply(this, [xcert]) && p$1.matchPolicy$java_security_cert_X509Certificate.apply(this, [xcert]) && p$1.matchSubjectAlternativeNames$java_security_cert_X509Certificate.apply(this, [xcert]) && p$1.matchPathToNames$java_security_cert_X509Certificate.apply(this, [xcert]) && p$1.matchNameConstraints$java_security_cert_X509Certificate.apply(this, [xcert])  ;
if (result && (C$.debug != null ) ) {
C$.debug.println$S("X509CertSelector.match returning: true");
}return result;
});

Clazz.newMeth(C$, 'matchSubjectKeyID$java_security_cert_X509Certificate',  function (xcert) {
if (this.subjectKeyID == null ) {
return true;
}try {
var extVal=xcert.getExtensionValue$S("2.5.29.14");
if (extVal == null ) {
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: no subject key ID extension");
}return false;
}var $in=Clazz.new_($I$(25,1).c$$BA,[extVal]);
var certSubjectKeyID=$in.getOctetString$();
if (certSubjectKeyID == null  || !$I$(30).equals$BA$BA(this.subjectKeyID, certSubjectKeyID) ) {
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: subject key IDs don\'t match");
}return false;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: exception in subject key ID check");
}return false;
} else {
throw ex;
}
}
return true;
}, p$1);

Clazz.newMeth(C$, 'matchAuthorityKeyID$java_security_cert_X509Certificate',  function (xcert) {
if (this.authorityKeyID == null ) {
return true;
}try {
var extVal=xcert.getExtensionValue$S("2.5.29.35");
if (extVal == null ) {
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: no authority key ID extension");
}return false;
}var $in=Clazz.new_($I$(25,1).c$$BA,[extVal]);
var certAuthKeyID=$in.getOctetString$();
if (certAuthKeyID == null  || !$I$(30).equals$BA$BA(this.authorityKeyID, certAuthKeyID) ) {
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: authority key IDs don\'t match");
}return false;
}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: exception in authority key ID check");
}return false;
} else {
throw ex;
}
}
return true;
}, p$1);

Clazz.newMeth(C$, 'matchPrivateKeyValid$java_security_cert_X509Certificate',  function (xcert) {
if (this.privateKeyValid == null ) {
return true;
}var ext=null;
try {
ext=C$.getExtensionObject$java_security_cert_X509Certificate$I(xcert, 0);
if (ext != null ) {
ext.valid$java_util_Date(this.privateKeyValid);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.security.cert.CertificateExpiredException")){
var e1 = e$$;
{
if (C$.debug != null ) {
var time="n/a";
try {
var notAfter=ext.get$S("not_after");
time=notAfter.toString();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.security.cert.CertificateException")){
} else {
throw ex;
}
}
C$.debug.println$S("X509CertSelector.match: private key usage not within validity date; ext.NOT_After: " + time + "; X509CertSelector: " + this.toString() );
e1.printStackTrace$();
}return false;
}
} else if (Clazz.exceptionOf(e$$,"java.security.cert.CertificateNotYetValidException")){
var e2 = e$$;
{
if (C$.debug != null ) {
var time="n/a";
try {
var notBefore=ext.get$S("not_before");
time=notBefore.toString();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.security.cert.CertificateException")){
} else {
throw ex;
}
}
C$.debug.println$S("X509CertSelector.match: private key usage not within validity date; ext.NOT_BEFORE: " + time + "; X509CertSelector: " + this.toString() );
e2.printStackTrace$();
}return false;
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e4 = e$$;
{
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: IOException in " + "private key usage check; X509CertSelector: " + this.toString() );
e4.printStackTrace$();
}return false;
}
} else {
throw e$$;
}
}
return true;
}, p$1);

Clazz.newMeth(C$, 'matchSubjectPublicKeyAlgID$java_security_cert_X509Certificate',  function (xcert) {
if (this.subjectPublicKeyAlgID == null ) {
return true;
}try {
var encodedKey=xcert.getPublicKey$().getEncoded$();
var val=Clazz.new_($I$(7,1).c$$BA,[encodedKey]);
if (val.tag != 48) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["invalid key format"]);
}var algID=$I$(31,"parse$sun_security_util_DerValue",[val.data.getDerValue$()]);
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: subjectPublicKeyAlgID = " + this.subjectPublicKeyAlgID + ", xcert subjectPublicKeyAlgID = " + algID.getOID$() );
}if (!this.subjectPublicKeyAlgID.equals$O(algID.getOID$())) {
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: subject public key alg IDs don\'t match");
}return false;
}} catch (e5) {
if (Clazz.exceptionOf(e5,"java.io.IOException")){
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: IOException in subject public key algorithm OID check");
}return false;
} else {
throw e5;
}
}
return true;
}, p$1);

Clazz.newMeth(C$, 'matchKeyUsage$java_security_cert_X509Certificate',  function (xcert) {
if (this.keyUsage == null ) {
return true;
}var certKeyUsage=xcert.getKeyUsage$();
if (certKeyUsage != null ) {
for (var keyBit=0; keyBit < this.keyUsage.length; keyBit++) {
if (this.keyUsage[keyBit] && ((keyBit >= certKeyUsage.length) || !certKeyUsage[keyBit] ) ) {
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: key usage bits don\'t match");
}return false;
}}
}return true;
}, p$1);

Clazz.newMeth(C$, 'matchExtendedKeyUsage$java_security_cert_X509Certificate',  function (xcert) {
if ((this.keyPurposeSet == null ) || this.keyPurposeSet.isEmpty$() ) {
return true;
}try {
var ext=C$.getExtensionObject$java_security_cert_X509Certificate$I(xcert, 4);
if (ext != null ) {
var certKeyPurposeVector=ext.get$S("usages");
if (!certKeyPurposeVector.contains$O(C$.ANY_EXTENDED_KEY_USAGE) && !certKeyPurposeVector.containsAll$java_util_Collection(this.keyPurposeOIDSet) ) {
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: cert failed extendedKeyUsage criterion");
}return false;
}}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: IOException in extended key usage check");
}return false;
} else {
throw ex;
}
}
return true;
}, p$1);

Clazz.newMeth(C$, 'matchSubjectAlternativeNames$java_security_cert_X509Certificate',  function (xcert) {
if ((this.subjectAlternativeNames == null ) || this.subjectAlternativeNames.isEmpty$() ) {
return true;
}try {
var sanExt=C$.getExtensionObject$java_security_cert_X509Certificate$I(xcert, 1);
if (sanExt == null ) {
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: no subject alternative name extension");
}return false;
}var certNames=sanExt.get$S("subject_name");
var i=this.subjectAlternativeGeneralNames.iterator$();
while (i.hasNext$()){
var matchName=i.next$();
var found=false;
for (var t=certNames.iterator$(); t.hasNext$() && !found ; ) {
var certName=(t.next$()).getName$();
found=certName.equals$O(matchName);
}
if (!found && (this.matchAllSubjectAltNames || !i.hasNext$() ) ) {
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: subject alternative name " + matchName + " not found" );
}return false;
} else if (found && !this.matchAllSubjectAltNames ) {
break;
}}
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
if (C$.debug != null ) C$.debug.println$S("X509CertSelector.match: IOException in subject alternative name check");
return false;
} else {
throw ex;
}
}
return true;
}, p$1);

Clazz.newMeth(C$, 'matchNameConstraints$java_security_cert_X509Certificate',  function (xcert) {
if (this.nc == null ) {
return true;
}try {
if (!this.nc.verify$java_security_cert_X509Certificate(xcert)) {
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: name constraints not satisfied");
}return false;
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: IOException in name constraints check");
}return false;
} else {
throw e;
}
}
return true;
}, p$1);

Clazz.newMeth(C$, 'matchPolicy$java_security_cert_X509Certificate',  function (xcert) {
if (this.policy == null ) {
return true;
}try {
var ext=C$.getExtensionObject$java_security_cert_X509Certificate$I(xcert, 3);
if (ext == null ) {
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: no certificate policy extension");
}return false;
}var policies=ext.get$S("policies");
var policyIDs=Clazz.new_([policies.size$()],$I$(10,1).c$$I);
for (var info, $info = policies.iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
policyIDs.add$O(info.getPolicyIdentifier$());
}
if (this.policy != null ) {
var foundOne=false;
if (this.policy.getCertPolicyIds$().isEmpty$()) {
if (policyIDs.isEmpty$()) {
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: cert failed policyAny criterion");
}return false;
}} else {
for (var id, $id = this.policy.getCertPolicyIds$().iterator$(); $id.hasNext$()&&((id=($id.next$())),1);) {
if (policyIDs.contains$O(id)) {
foundOne=true;
break;
}}
if (!foundOne) {
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: cert failed policyAny criterion");
}return false;
}}}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: IOException in certificate policy ID check");
}return false;
} else {
throw ex;
}
}
return true;
}, p$1);

Clazz.newMeth(C$, 'matchPathToNames$java_security_cert_X509Certificate',  function (xcert) {
if (this.pathToGeneralNames == null ) {
return true;
}try {
var ext=C$.getExtensionObject$java_security_cert_X509Certificate$I(xcert, 2);
if (ext == null ) {
return true;
}if ((C$.debug != null ) && $I$(1).isOn$S("certpath") ) {
C$.debug.println$S("X509CertSelector.match pathToNames:\n");
var i=this.pathToGeneralNames.iterator$();
while (i.hasNext$()){
C$.debug.println$S("    " + i.next$() + "\n" );
}
}var permitted=ext.get$S("permitted_subtrees");
var excluded=ext.get$S("excluded_subtrees");
if (excluded != null ) {
if (p$1.matchExcluded$sun_security_x509_GeneralSubtrees.apply(this, [excluded]) == false ) {
return false;
}}if (permitted != null ) {
if (p$1.matchPermitted$sun_security_x509_GeneralSubtrees.apply(this, [permitted]) == false ) {
return false;
}}} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: IOException in name constraints check");
}return false;
} else {
throw ex;
}
}
return true;
}, p$1);

Clazz.newMeth(C$, 'matchExcluded$sun_security_x509_GeneralSubtrees',  function (excluded) {
for (var t=excluded.iterator$(); t.hasNext$(); ) {
var tree=t.next$();
var excludedName=tree.getName$().getName$();
var i=this.pathToGeneralNames.iterator$();
while (i.hasNext$()){
var pathToName=i.next$();
if (excludedName.getType$() == pathToName.getType$()) {
switch (pathToName.constrains$sun_security_x509_GeneralNameInterface(excludedName)) {
case 2:
case 0:
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: name constraints inhibit path to specified name");
C$.debug.println$S("X509CertSelector.match: excluded name: " + pathToName);
}return false;
default:
}
}}
}
return true;
}, p$1);

Clazz.newMeth(C$, 'matchPermitted$sun_security_x509_GeneralSubtrees',  function (permitted) {
var i=this.pathToGeneralNames.iterator$();
while (i.hasNext$()){
var pathToName=i.next$();
var t=permitted.iterator$();
var permittedNameFound=false;
var nameTypeFound=false;
var names="";
while (t.hasNext$() && !permittedNameFound ){
var tree=t.next$();
var permittedName=tree.getName$().getName$();
if (permittedName.getType$() == pathToName.getType$()) {
nameTypeFound=true;
names=names + "  " + permittedName ;
switch (pathToName.constrains$sun_security_x509_GeneralNameInterface(permittedName)) {
case 2:
case 0:
permittedNameFound=true;
break;
default:
}
}}
if (!permittedNameFound && nameTypeFound ) {
if (C$.debug != null ) C$.debug.println$S("X509CertSelector.match: name constraints inhibit path to specified name; permitted names of type " + pathToName.getType$() + ": " + names );
return false;
}}
return true;
}, p$1);

Clazz.newMeth(C$, 'matchBasicConstraints$java_security_cert_X509Certificate',  function (xcert) {
if (this.basicConstraints == -1) {
return true;
}var maxPathLen=xcert.getBasicConstraints$();
if (this.basicConstraints == -2) {
if (maxPathLen != -1) {
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: not an EE cert");
}return false;
}} else {
if (maxPathLen < this.basicConstraints) {
if (C$.debug != null ) {
C$.debug.println$S("X509CertSelector.match: cert\'s maxPathLen is less than the min maxPathLen set by basicConstraints. (" + maxPathLen + " < " + this.basicConstraints + ")" );
}return false;
}}return true;
}, p$1);

Clazz.newMeth(C$, 'cloneSet$java_util_Set',  function (set) {
if (Clazz.instanceOf(set, "java.util.HashSet")) {
var clone=(set).clone$();
return clone;
} else {
return Clazz.new_($I$(9,1).c$$java_util_Collection,[set]);
}}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
try {
var copy=Clazz.clone(this);
if (this.subjectAlternativeNames != null ) {
copy.subjectAlternativeNames=C$.cloneSet$java_util_Set(this.subjectAlternativeNames);
copy.subjectAlternativeGeneralNames=C$.cloneSet$java_util_Set(this.subjectAlternativeGeneralNames);
}if (this.pathToGeneralNames != null ) {
copy.pathToNames=C$.cloneSet$java_util_Set(this.pathToNames);
copy.pathToGeneralNames=C$.cloneSet$java_util_Set(this.pathToGeneralNames);
}return copy;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_([e.toString(), e],$I$(32,1).c$$S$Throwable);
} else {
throw e;
}
}
});

C$.$static$=function(){C$.$static$=0;
C$.debug=$I$(1).getInstance$S("certpath");
C$.ANY_EXTENDED_KEY_USAGE=$I$(2,"newInternal$IA",[Clazz.array(Integer.TYPE, -1, [2, 5, 29, 37, 0])]);
{
$I$(3).initialize$();
};
C$.FALSE=Boolean.FALSE;
C$.EXTENSION_OIDS=Clazz.array(String, [5]);
{
C$.EXTENSION_OIDS[0]="2.5.29.16";
C$.EXTENSION_OIDS[1]="2.5.29.17";
C$.EXTENSION_OIDS[2]="2.5.29.30";
C$.EXTENSION_OIDS[3]="2.5.29.32";
C$.EXTENSION_OIDS[4]="2.5.29.37";
};
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:28 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
