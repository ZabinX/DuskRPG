(function(){var P$=Clazz.newPackage("java.security.cert"),p$1={},I$=[[0,'java.security.cert.CertPathHelperImpl','sun.security.util.Debug','java.util.HashSet','sun.security.x509.X500Name','javax.security.auth.x500.X500Principal','java.util.Collections','StringBuffer','sun.security.util.DerInputStream','sun.security.x509.CRLNumberExtension','InternalError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "X509CRLSelector", null, null, 'java.security.cert.CRLSelector');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.skew=0;
},1);

C$.$fields$=[['J',['skew'],'O',['issuerNames','java.util.HashSet','+issuerX500Principals','minCRL','java.math.BigInteger','+maxCRL','dateAndTime','java.util.Date','certChecking','java.security.cert.X509Certificate']]
,['O',['debug','sun.security.util.Debug']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setIssuers$java_util_Collection',  function (issuers) {
if ((issuers == null ) || issuers.isEmpty$() ) {
this.issuerNames=null;
this.issuerX500Principals=null;
} else {
this.issuerX500Principals=Clazz.new_($I$(3,1).c$$java_util_Collection,[issuers]);
this.issuerNames=Clazz.new_($I$(3,1));
for (var p, $p = this.issuerX500Principals.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
this.issuerNames.add$O(p.getEncoded$());
}
}});

Clazz.newMeth(C$, 'setIssuerNames$java_util_Collection',  function (names) {
if (names == null  || names.size$() == 0 ) {
this.issuerNames=null;
this.issuerX500Principals=null;
} else {
var tempNames=C$.cloneAndCheckIssuerNames$java_util_Collection(names);
this.issuerX500Principals=C$.parseIssuerNames$java_util_Collection(tempNames);
this.issuerNames=tempNames;
}});

Clazz.newMeth(C$, 'addIssuer$javax_security_auth_x500_X500Principal',  function (issuer) {
p$1.addIssuerNameInternal$O$javax_security_auth_x500_X500Principal.apply(this, [issuer.getEncoded$(), issuer]);
});

Clazz.newMeth(C$, 'addIssuerName$S',  function (name) {
p$1.addIssuerNameInternal$O$javax_security_auth_x500_X500Principal.apply(this, [name, Clazz.new_($I$(4,1).c$$S,[name]).asX500Principal$()]);
});

Clazz.newMeth(C$, 'addIssuerName$BA',  function (name) {
p$1.addIssuerNameInternal$O$javax_security_auth_x500_X500Principal.apply(this, [name.clone$(), Clazz.new_($I$(4,1).c$$BA,[name]).asX500Principal$()]);
});

Clazz.newMeth(C$, 'addIssuerNameInternal$O$javax_security_auth_x500_X500Principal',  function (name, principal) {
if (this.issuerNames == null ) {
this.issuerNames=Clazz.new_($I$(3,1));
}if (this.issuerX500Principals == null ) {
this.issuerX500Principals=Clazz.new_($I$(3,1));
}this.issuerNames.add$O(name);
this.issuerX500Principals.add$O(principal);
}, p$1);

Clazz.newMeth(C$, 'cloneAndCheckIssuerNames$java_util_Collection',  function (names) {
var namesCopy=Clazz.new_($I$(3,1));
var i=names.iterator$();
while (i.hasNext$()){
var nameObject=i.next$();
if (!(Clazz.instanceOf(nameObject, Clazz.array(Byte.TYPE, -1))) && !(Clazz.instanceOf(nameObject, "java.lang.String")) ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["name not byte array or String"]);
if (Clazz.instanceOf(nameObject, Clazz.array(Byte.TYPE, -1))) namesCopy.add$O((nameObject).clone$());
 else namesCopy.add$O(nameObject);
}
return (namesCopy);
}, 1);

Clazz.newMeth(C$, 'cloneIssuerNames$java_util_Collection',  function (names) {
try {
return C$.cloneAndCheckIssuerNames$java_util_Collection(names);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[ioe]);
} else {
throw ioe;
}
}
}, 1);

Clazz.newMeth(C$, 'parseIssuerNames$java_util_Collection',  function (names) {
var x500Principals=Clazz.new_($I$(3,1));
for (var t=names.iterator$(); t.hasNext$(); ) {
var nameObject=t.next$();
if (Clazz.instanceOf(nameObject, "java.lang.String")) {
x500Principals.add$O(Clazz.new_($I$(4,1).c$$S,[nameObject]).asX500Principal$());
} else {
try {
x500Principals.add$O(Clazz.new_($I$(5,1).c$$BA,[nameObject]));
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Invalid name"]).initCause$Throwable(e);
} else {
throw e;
}
}
}}
return x500Principals;
}, 1);

Clazz.newMeth(C$, 'setMinCRLNumber$java_math_BigInteger',  function (minCRL) {
this.minCRL=minCRL;
});

Clazz.newMeth(C$, 'setMaxCRLNumber$java_math_BigInteger',  function (maxCRL) {
this.maxCRL=maxCRL;
});

Clazz.newMeth(C$, 'setDateAndTime$java_util_Date',  function (dateAndTime) {
if (dateAndTime == null ) this.dateAndTime=null;
 else this.dateAndTime=Clazz.new_(java.util.Date.c$$J,[dateAndTime.getTime$()]);
this.skew=0;
});

Clazz.newMeth(C$, 'setDateAndTime$java_util_Date$J',  function (dateAndTime, skew) {
this.dateAndTime=(dateAndTime == null  ? null : Clazz.new_(java.util.Date.c$$J,[dateAndTime.getTime$()]));
this.skew=skew;
});

Clazz.newMeth(C$, 'setCertificateChecking$java_security_cert_X509Certificate',  function (cert) {
this.certChecking=cert;
});

Clazz.newMeth(C$, 'getIssuers$',  function () {
if (this.issuerX500Principals == null ) {
return null;
}return $I$(6).unmodifiableCollection$java_util_Collection(this.issuerX500Principals);
});

Clazz.newMeth(C$, 'getIssuerNames$',  function () {
if (this.issuerNames == null ) {
return null;
}return C$.cloneIssuerNames$java_util_Collection(this.issuerNames);
});

Clazz.newMeth(C$, 'getMinCRL$',  function () {
return this.minCRL;
});

Clazz.newMeth(C$, 'getMaxCRL$',  function () {
return this.maxCRL;
});

Clazz.newMeth(C$, 'getDateAndTime$',  function () {
if (this.dateAndTime == null ) return null;
return this.dateAndTime.clone$();
});

Clazz.newMeth(C$, 'getCertificateChecking$',  function () {
return this.certChecking;
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(7,1));
sb.append$S("X509CRLSelector: [\n");
if (this.issuerNames != null ) {
sb.append$S("  IssuerNames:\n");
var i=this.issuerNames.iterator$();
while (i.hasNext$())sb.append$S("    " + i.next$() + "\n" );

}if (this.minCRL != null ) sb.append$S("  minCRLNumber: " + this.minCRL + "\n" );
if (this.maxCRL != null ) sb.append$S("  maxCRLNumber: " + this.maxCRL + "\n" );
if (this.dateAndTime != null ) sb.append$S("  dateAndTime: " + this.dateAndTime + "\n" );
if (this.certChecking != null ) sb.append$S("  Certificate being checked: " + this.certChecking + "\n" );
sb.append$S("]");
return sb.toString();
});

Clazz.newMeth(C$, 'match$java_security_cert_CRL',  function (crl) {
if (!(Clazz.instanceOf(crl, "java.security.cert.X509CRL"))) {
return false;
}var xcrl=crl;
if (this.issuerNames != null ) {
var issuer=xcrl.getIssuerX500Principal$();
var i=this.issuerX500Principals.iterator$();
var found=false;
while (!found && i.hasNext$() ){
if (i.next$().equals$O(issuer)) {
found=true;
}}
if (!found) {
if (C$.debug != null ) {
C$.debug.println$S("X509CRLSelector.match: issuer DNs don\'t match");
}return false;
}}if ((this.minCRL != null ) || (this.maxCRL != null ) ) {
var crlNumExtVal=xcrl.getExtensionValue$S("2.5.29.20");
if (crlNumExtVal == null ) {
if (C$.debug != null ) {
C$.debug.println$S("X509CRLSelector.match: no CRLNumber");
}}var crlNum;
try {
var $in=Clazz.new_($I$(8,1).c$$BA,[crlNumExtVal]);
var encoded=$in.getOctetString$();
var crlNumExt=Clazz.new_($I$(9,1).c$$Boolean$O,[Boolean.FALSE, encoded]);
crlNum=crlNumExt.get$S("value");
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
if (C$.debug != null ) {
C$.debug.println$S("X509CRLSelector.match: exception in decoding CRL number");
}return false;
} else {
throw ex;
}
}
if (this.minCRL != null ) {
if (crlNum.compareTo$java_math_BigInteger(this.minCRL) < 0) {
if (C$.debug != null ) {
C$.debug.println$S("X509CRLSelector.match: CRLNumber too small");
}return false;
}}if (this.maxCRL != null ) {
if (crlNum.compareTo$java_math_BigInteger(this.maxCRL) > 0) {
if (C$.debug != null ) {
C$.debug.println$S("X509CRLSelector.match: CRLNumber too large");
}return false;
}}}if (this.dateAndTime != null ) {
var crlThisUpdate=xcrl.getThisUpdate$();
var nextUpdate=xcrl.getNextUpdate$();
if (nextUpdate == null ) {
if (C$.debug != null ) {
C$.debug.println$S("X509CRLSelector.match: nextUpdate null");
}return false;
}var nowPlusSkew=this.dateAndTime;
var nowMinusSkew=this.dateAndTime;
if (Long.$gt(this.skew,0 )) {
nowPlusSkew=Clazz.new_(java.util.Date.c$$J,[Long.$add(this.dateAndTime.getTime$(),this.skew)]);
nowMinusSkew=Clazz.new_(java.util.Date.c$$J,[Long.$sub(this.dateAndTime.getTime$(),this.skew)]);
}if (nowMinusSkew.after$java_util_Date(nextUpdate) || nowPlusSkew.before$java_util_Date(crlThisUpdate) ) {
if (C$.debug != null ) {
C$.debug.println$S("X509CRLSelector.match: update out of range");
}return false;
}}return true;
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
var copy=Clazz.clone(this);
if (this.issuerNames != null ) {
copy.issuerNames=Clazz.new_($I$(3,1).c$$java_util_Collection,[this.issuerNames]);
copy.issuerX500Principals=Clazz.new_($I$(3,1).c$$java_util_Collection,[this.issuerX500Principals]);
}return copy;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_([e.toString(), e],$I$(10,1).c$$S$Throwable);
} else {
throw e;
}
}
});

C$.$static$=function(){C$.$static$=0;
{
$I$(1).initialize$();
};
C$.debug=$I$(2).getInstance$S("certpath");
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:28 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
