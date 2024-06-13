(function(){var P$=Clazz.newPackage("java.util.jar"),p$1={},p$2={},I$=[[0,'sun.security.util.ManifestEntryVerifier','sun.security.util.Debug','java.util.HashMap','java.security.CodeSigner','java.util.Hashtable','java.util.ArrayList','java.io.ByteArrayOutputStream','java.util.Locale','sun.security.util.SignatureFileVerifier','sun.security.util.ManifestDigester','java.security.cert.Certificate',['java.util.jar.JarVerifier','.VerifierCodeSource'],'java.security.CodeSource','java.util.jar.JarVerifier','java.util.Collections','java.util.zip.ZipEntry','java.util.HashSet']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JarVerifier", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['VerifierStream',8],['VerifierCodeSource',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.parsingBlockOrSF=false;
this.parsingMeta=true;
this.anyToVerify=true;
this.manifestRawBytes=($b$[0] = null, $b$[0]);
this.csdomain= Clazz.new_();
this.urlToCodeSourceMap=Clazz.new_($I$(3,1));
this.signerToCodeSource=Clazz.new_($I$(3,1));
this.emptySigner=Clazz.array($I$(4), [0]);
this.emptyEnumeration=((P$.JarVerifier$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JarVerifier$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Enumeration', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
return false;
});

Clazz.newMeth(C$, 'nextElement$',  function () {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});
})()
), Clazz.new_(P$.JarVerifier$1.$init$,[this, null]));
},1);

C$.$fields$=[['Z',['parsingBlockOrSF','parsingMeta','anyToVerify','eagerValidation'],'O',['verifiedSigners','java.util.Hashtable','+sigFileSigners','+sigFileData','pendingBlocks','java.util.ArrayList','+signerCache','baos','java.io.ByteArrayOutputStream','manDig','sun.security.util.ManifestDigester','manifestRawBytes','byte[]','csdomain','java.lang.Object','manifestDigests','java.util.List','urlToCodeSourceMap','java.util.Map','+signerToCodeSource','lastURL','java.net.URL','lastURLMap','java.util.Map','emptySigner','java.security.CodeSigner[]','signerMap','java.util.Map','emptyEnumeration','java.util.Enumeration','jarCodeSigners','java.util.List']]
,['O',['debug','sun.security.util.Debug']]]

Clazz.newMeth(C$, 'c$$BA',  function (rawBytes) {
;C$.$init$.apply(this);
this.manifestRawBytes=rawBytes;
this.sigFileSigners=Clazz.new_($I$(5,1));
this.verifiedSigners=Clazz.new_($I$(5,1));
this.sigFileData=Clazz.new_($I$(5,1).c$$I,[11]);
this.pendingBlocks=Clazz.new_($I$(6,1));
this.baos=Clazz.new_($I$(7,1));
this.manifestDigests=Clazz.new_($I$(6,1));
}, 1);

Clazz.newMeth(C$, 'beginEntry$java_util_jar_JarEntry$sun_security_util_ManifestEntryVerifier',  function (je, mev) {
if (je == null ) return;
if (C$.debug != null ) {
C$.debug.println$S("beginEntry " + je.getName$());
}var name=je.getName$();
if (this.parsingMeta) {
var uname=name.toUpperCase$java_util_Locale($I$(8).ENGLISH);
if ((uname.startsWith$S("META-INF/") || uname.startsWith$S("/META-INF/") )) {
if (je.isDirectory$()) {
mev.setEntry$S$java_util_jar_JarEntry(null, je);
return;
}if (uname.equals$O("META-INF/MANIFEST.MF") || uname.equals$O("META-INF/INDEX.LIST") ) {
return;
}if ($I$(9).isBlockOrSF$S(uname)) {
this.parsingBlockOrSF=true;
this.baos.reset$();
mev.setEntry$S$java_util_jar_JarEntry(null, je);
return;
}}}if (this.parsingMeta) {
this.doneWithMeta$();
}if (je.isDirectory$()) {
mev.setEntry$S$java_util_jar_JarEntry(null, je);
return;
}if (name.startsWith$S("./")) name=name.substring$I(2);
if (name.startsWith$S("/")) name=name.substring$I(1);
if (this.sigFileSigners.get$O(name) != null  || this.verifiedSigners.get$O(name) != null  ) {
mev.setEntry$S$java_util_jar_JarEntry(name, je);
return;
}mev.setEntry$S$java_util_jar_JarEntry(null, je);
return;
});

Clazz.newMeth(C$, 'update$I$sun_security_util_ManifestEntryVerifier',  function (b, mev) {
if (b != -1) {
if (this.parsingBlockOrSF) {
this.baos.write$I(b);
} else {
mev.update$B(($b$[0] = b, $b$[0]));
}} else {
p$2.processEntry$sun_security_util_ManifestEntryVerifier.apply(this, [mev]);
}});

Clazz.newMeth(C$, 'update$I$BA$I$I$sun_security_util_ManifestEntryVerifier',  function (n, b, off, len, mev) {
if (n != -1) {
if (this.parsingBlockOrSF) {
this.baos.write$BA$I$I(b, off, n);
} else {
mev.update$BA$I$I(b, off, n);
}} else {
p$2.processEntry$sun_security_util_ManifestEntryVerifier.apply(this, [mev]);
}});

Clazz.newMeth(C$, 'processEntry$sun_security_util_ManifestEntryVerifier',  function (mev) {
if (!this.parsingBlockOrSF) {
var je=mev.getEntry$();
if ((je != null ) && (je.signers == null ) ) {
je.signers=mev.verify$java_util_Hashtable$java_util_Hashtable(this.verifiedSigners, this.sigFileSigners);
je.certs=C$.mapSignersToCertArray$java_security_CodeSignerA(je.signers);
}} else {
try {
this.parsingBlockOrSF=false;
if (C$.debug != null ) {
C$.debug.println$S("processEntry: processing block");
}var uname=mev.getEntry$().getName$().toUpperCase$java_util_Locale($I$(8).ENGLISH);
if (uname.endsWith$S(".SF")) {
var key=uname.substring$I$I(0, uname.length$() - 3);
var bytes=this.baos.toByteArray$();
this.sigFileData.put$O$O(key, bytes);
var it=this.pendingBlocks.iterator$();
while (it.hasNext$()){
var sfv=it.next$();
if (sfv.needSignatureFile$S(key)) {
if (C$.debug != null ) {
C$.debug.println$S("processEntry: processing pending block");
}sfv.setSignatureFile$BA(bytes);
sfv.process$java_util_Hashtable$java_util_List$S(this.sigFileSigners, this.manifestDigests, null);
}}
return;
}var key=uname.substring$I$I(0, uname.lastIndexOf$S("."));
if (this.signerCache == null ) this.signerCache=Clazz.new_($I$(6,1));
if (this.manDig == null ) {
{
if (this.manDig == null ) {
this.manDig=Clazz.new_($I$(10,1).c$$BA,[this.manifestRawBytes]);
this.manifestRawBytes=null;
}}}var sfv=Clazz.new_([this.signerCache, this.manDig, uname, this.baos.toByteArray$()],$I$(9,1).c$$java_util_ArrayList$sun_security_util_ManifestDigester$S$BA);
if (sfv.needSignatureFileBytes$()) {
var bytes=this.sigFileData.get$O(key);
if (bytes == null ) {
if (C$.debug != null ) {
C$.debug.println$S("adding pending block");
}this.pendingBlocks.add$O(sfv);
return;
} else {
sfv.setSignatureFile$BA(bytes);
}}sfv.process$java_util_Hashtable$java_util_List$S(this.sigFileSigners, this.manifestDigests, null);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ioe = e$$;
{
if (C$.debug != null ) C$.debug.println$S("processEntry caught: " + ioe);
}
} else if (Clazz.exceptionOf(e$$,"java.security.SignatureException")){
var se = e$$;
{
if (C$.debug != null ) C$.debug.println$S("processEntry caught: " + se);
}
} else if (Clazz.exceptionOf(e$$,"java.security.NoSuchAlgorithmException")){
var nsae = e$$;
{
if (C$.debug != null ) C$.debug.println$S("processEntry caught: " + nsae);
}
} else if (Clazz.exceptionOf(e$$,"java.security.cert.CertificateException")){
var ce = e$$;
{
if (C$.debug != null ) C$.debug.println$S("processEntry caught: " + ce);
}
} else {
throw e$$;
}
}
}}, p$2);

Clazz.newMeth(C$, 'getCerts$S',  function (name) {
return C$.mapSignersToCertArray$java_security_CodeSignerA(this.getCodeSigners$S(name));
});

Clazz.newMeth(C$, 'getCerts$java_util_jar_JarFile$java_util_jar_JarEntry',  function (jar, entry) {
return C$.mapSignersToCertArray$java_security_CodeSignerA(this.getCodeSigners$java_util_jar_JarFile$java_util_jar_JarEntry(jar, entry));
});

Clazz.newMeth(C$, 'getCodeSigners$S',  function (name) {
return this.verifiedSigners.get$O(name);
});

Clazz.newMeth(C$, 'getCodeSigners$java_util_jar_JarFile$java_util_jar_JarEntry',  function (jar, entry) {
var name=entry.getName$();
if (this.eagerValidation && this.sigFileSigners.get$O(name) != null  ) {
try {
var s=jar.getInputStream$java_util_zip_ZipEntry(entry);
var buffer=Clazz.array(Byte.TYPE, [1024]);
var n=buffer.length;
while (n != -1){
n=s.read$BA$I$I(buffer, 0, buffer.length);
}
s.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}return this.getCodeSigners$S(name);
});

Clazz.newMeth(C$, 'mapSignersToCertArray$java_security_CodeSignerA',  function (signers) {
if (signers != null ) {
var certChains=Clazz.new_($I$(6,1));
for (var i=0; i < signers.length; i++) {
certChains.addAll$java_util_Collection(signers[i].getSignerCertPath$().getCertificates$());
}
return certChains.toArray$OA(Clazz.array($I$(11), [certChains.size$()]));
}return null;
}, 1);

Clazz.newMeth(C$, 'nothingToVerify$',  function () {
return (this.anyToVerify == false );
});

Clazz.newMeth(C$, 'doneWithMeta$',  function () {
this.parsingMeta=false;
this.anyToVerify=!this.sigFileSigners.isEmpty$();
this.baos=null;
this.sigFileData=null;
this.pendingBlocks=null;
this.signerCache=null;
this.manDig=null;
if (this.sigFileSigners.containsKey$O("META-INF/MANIFEST.MF")) {
var codeSigners=this.sigFileSigners.remove$O("META-INF/MANIFEST.MF");
this.verifiedSigners.put$O$O("META-INF/MANIFEST.MF", codeSigners);
}});

Clazz.newMeth(C$, 'mapSignersToCodeSource$java_net_URL$java_security_CodeSignerA',  function (url, signers) {
var map;
if (url === this.lastURL ) {
map=this.lastURLMap;
} else {
map=this.urlToCodeSourceMap.get$O(url);
if (map == null ) {
map=Clazz.new_($I$(3,1));
this.urlToCodeSourceMap.put$O$O(url, map);
}this.lastURLMap=map;
this.lastURL=url;
}var cs=map.get$O(signers);
if (cs == null ) {
cs=Clazz.new_($I$(12,1).c$$O$java_net_URL$java_security_CodeSignerA,[this.csdomain, url, signers]);
this.signerToCodeSource.put$O$O(signers, cs);
}return cs;
}, p$2);

Clazz.newMeth(C$, 'mapSignersToCodeSources$java_net_URL$java_util_List$Z',  function (url, signers, unsigned) {
var sources=Clazz.new_($I$(6,1));
for (var i=0; i < signers.size$(); i++) {
sources.add$O(p$2.mapSignersToCodeSource$java_net_URL$java_security_CodeSignerA.apply(this, [url, signers.get$I(i)]));
}
if (unsigned) {
sources.add$O(p$2.mapSignersToCodeSource$java_net_URL$java_security_CodeSignerA.apply(this, [url, null]));
}return sources.toArray$OA(Clazz.array($I$(13), [sources.size$()]));
}, p$2);

Clazz.newMeth(C$, 'findMatchingSigners$java_security_CodeSource',  function (cs) {
if (Clazz.instanceOf(cs, "java.util.jar.JarVerifier.VerifierCodeSource")) {
var vcs=cs;
if (vcs.isSameDomain$O(this.csdomain)) {
return p$1.getPrivateSigners.apply((cs), []);
}}var sources=p$2.mapSignersToCodeSources$java_net_URL$java_util_List$Z.apply(this, [cs.getLocation$(), p$2.getJarCodeSigners.apply(this, []), true]);
var sourceList=Clazz.new_($I$(6,1));
for (var i=0; i < sources.length; i++) {
sourceList.add$O(sources[i]);
}
var j=sourceList.indexOf$O(cs);
if (j != -1) {
var match;
match=p$1.getPrivateSigners.apply((sourceList.get$I(j)), []);
if (match == null ) {
match=this.emptySigner;
}return match;
}return null;
}, p$2);

Clazz.newMeth(C$, 'signerMap',  function () {
if (this.signerMap == null ) {
this.signerMap=Clazz.new_([this.verifiedSigners.size$() + this.sigFileSigners.size$()],$I$(3,1).c$$I);
this.signerMap.putAll$java_util_Map(this.verifiedSigners);
this.signerMap.putAll$java_util_Map(this.sigFileSigners);
}return this.signerMap;
}, p$2);

Clazz.newMeth(C$, 'entryNames$java_util_jar_JarFile$java_security_CodeSourceA',  function (jar, cs) {
var map=p$2.signerMap.apply(this, []);
var itor=map.entrySet$().iterator$();
var matchUnsigned=false;
var req=Clazz.new_($I$(6,1).c$$I,[cs.length]);
for (var i=0; i < cs.length; i++) {
var match=p$2.findMatchingSigners$java_security_CodeSource.apply(this, [cs[i]]);
if (match != null ) {
if (match.length > 0) {
req.add$O(match);
} else {
matchUnsigned=true;
}} else {
matchUnsigned=true;
}}
var signersReq=req;
var enum2=(matchUnsigned) ? p$2.unsignedEntryNames$java_util_jar_JarFile.apply(this, [jar]) : this.emptyEnumeration;
return ((P$.JarVerifier$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "JarVerifier$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Enumeration', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name']]]

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
if (this.name != null ) {
return true;
}while (this.$finals$.itor.hasNext$()){
var e=this.$finals$.itor.next$();
if (this.$finals$.signersReq.contains$O(e.getValue$())) {
this.name=e.getKey$();
return true;
}}
while (this.$finals$.enum2.hasMoreElements$()){
this.name=this.$finals$.enum2.nextElement$();
return true;
}
return false;
});

Clazz.newMeth(C$, 'nextElement$',  function () {
if (this.hasMoreElements$()) {
var value=this.name;
this.name=null;
return value;
}throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});
})()
), Clazz.new_(P$.JarVerifier$2.$init$,[this, {signersReq:signersReq,enum2:enum2,itor:itor}]));
});

Clazz.newMeth(C$, 'entries2$java_util_jar_JarFile$java_util_Enumeration',  function (jar, e) {
var map=Clazz.new_($I$(3,1));
map.putAll$java_util_Map(p$2.signerMap.apply(this, []));
var enum_=e;
return ((P$.JarVerifier$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "JarVerifier$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Enumeration', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.signers=null;
},1);

C$.$fields$=[['O',['signers','java.util.Enumeration','entry','java.util.jar.JarEntry']]]

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
if (this.entry != null ) {
return true;
}while (this.$finals$.enum_.hasMoreElements$()){
var ze=this.$finals$.enum_.nextElement$();
if ($I$(14,"isSigningRelated$S",[ze.getName$()])) {
continue;
}this.entry=this.$finals$.jar.newEntry$java_util_zip_ZipEntry(ze);
return true;
}
if (this.signers == null ) {
this.signers=$I$(15,"enumeration$java_util_Collection",[this.$finals$.map.keySet$()]);
}while (this.signers.hasMoreElements$()){
var name=this.signers.nextElement$();
this.entry=this.$finals$.jar.newEntry$java_util_zip_ZipEntry(Clazz.new_($I$(16,1).c$$S,[name]));
return true;
}
return false;
});

Clazz.newMeth(C$, 'nextElement$',  function () {
if (this.hasMoreElements$()) {
var je=this.entry;
this.$finals$.map.remove$O(je.getName$());
this.entry=null;
return je;
}throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});
})()
), Clazz.new_(P$.JarVerifier$3.$init$,[this, {enum_:enum_,jar:jar,map:map}]));
});

Clazz.newMeth(C$, 'isSigningRelated$S',  function (name) {
return $I$(9).isSigningRelated$S(name);
}, 1);

Clazz.newMeth(C$, 'unsignedEntryNames$java_util_jar_JarFile',  function (jar) {
var map=p$2.signerMap.apply(this, []);
var entries=jar.entries$();
return ((P$.JarVerifier$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "JarVerifier$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Enumeration', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name']]]

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
if (this.name != null ) {
return true;
}while (this.$finals$.entries.hasMoreElements$()){
var value;
var e=this.$finals$.entries.nextElement$();
value=e.getName$();
if (e.isDirectory$() || $I$(14).isSigningRelated$S(value) ) {
continue;
}if (this.$finals$.map.get$O(value) == null ) {
this.name=value;
return true;
}}
return false;
});

Clazz.newMeth(C$, 'nextElement$',  function () {
if (this.hasMoreElements$()) {
var value=this.name;
this.name=null;
return value;
}throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});
})()
), Clazz.new_(P$.JarVerifier$4.$init$,[this, {entries:entries,map:map}]));
}, p$2);

Clazz.newMeth(C$, 'getJarCodeSigners',  function () {
var signers;
if (this.jarCodeSigners == null ) {
var set=Clazz.new_($I$(17,1));
set.addAll$java_util_Collection(p$2.signerMap.apply(this, []).values$());
this.jarCodeSigners=Clazz.new_($I$(6,1));
this.jarCodeSigners.addAll$java_util_Collection(set);
}return this.jarCodeSigners;
}, p$2);

Clazz.newMeth(C$, 'getCodeSources$java_util_jar_JarFile$java_net_URL',  function (jar, url) {
var hasUnsigned=p$2.unsignedEntryNames$java_util_jar_JarFile.apply(this, [jar]).hasMoreElements$();
return p$2.mapSignersToCodeSources$java_net_URL$java_util_List$Z.apply(this, [url, p$2.getJarCodeSigners.apply(this, []), hasUnsigned]);
});

Clazz.newMeth(C$, 'getCodeSource$java_net_URL$S',  function (url, name) {
var signers;
signers=p$2.signerMap.apply(this, []).get$O(name);
return p$2.mapSignersToCodeSource$java_net_URL$java_security_CodeSignerA.apply(this, [url, signers]);
});

Clazz.newMeth(C$, 'getCodeSource$java_net_URL$java_util_jar_JarFile$java_util_jar_JarEntry',  function (url, jar, je) {
var signers;
return p$2.mapSignersToCodeSource$java_net_URL$java_security_CodeSignerA.apply(this, [url, this.getCodeSigners$java_util_jar_JarFile$java_util_jar_JarEntry(jar, je)]);
});

Clazz.newMeth(C$, 'setEagerValidation$Z',  function (eager) {
this.eagerValidation=eager;
});

Clazz.newMeth(C$, 'getManifestDigests$',  function () {
return $I$(15).unmodifiableList$java_util_List(this.manifestDigests);
});

Clazz.newMeth(C$, 'getUnsignedCS$java_net_URL',  function (url) {
return Clazz.new_($I$(12,1).c$$O$java_net_URL$java_security_cert_CertificateA,[null, url, null]);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.debug=$I$(2).getInstance$S("jar");
};
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.JarVerifier, "VerifierStream", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.io.InputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['numLeft'],'O',['is','java.io.InputStream','jv','java.util.jar.JarVerifier','mev','sun.security.util.ManifestEntryVerifier']]]

Clazz.newMeth(C$, 'c$$java_util_jar_Manifest$java_util_jar_JarEntry$java_io_InputStream$java_util_jar_JarVerifier',  function (man, je, is, jv) {
Clazz.super_(C$, this);
this.is=is;
this.jv=jv;
this.mev=Clazz.new_($I$(1,1).c$$java_util_jar_Manifest$S,[man, null]);
this.jv.beginEntry$java_util_jar_JarEntry$sun_security_util_ManifestEntryVerifier(je, this.mev);
this.numLeft=je.getSize$();
if (Long.$eq(this.numLeft,0 )) this.jv.update$I$sun_security_util_ManifestEntryVerifier(-1, this.mev);
}, 1);

Clazz.newMeth(C$, 'read$',  function () {
if (Long.$gt(this.numLeft,0 )) {
var b=this.is.read$();
this.jv.update$I$sun_security_util_ManifestEntryVerifier(b, this.mev);
(this.numLeft=Long.$inc(this.numLeft,-1));
if (Long.$eq(this.numLeft,0 )) this.jv.update$I$sun_security_util_ManifestEntryVerifier(-1, this.mev);
return b;
} else {
return -1;
}});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, off, len) {
if ((Long.$gt(this.numLeft,0 )) && (Long.$lt(this.numLeft,len )) ) {
len=Long.$ival(this.numLeft);
}if (Long.$gt(this.numLeft,0 )) {
var n=this.is.read$BA$I$I(b, off, len);
this.jv.update$I$BA$I$I$sun_security_util_ManifestEntryVerifier(n, b, off, len, this.mev);
(this.numLeft=Long.$sub(this.numLeft,(n)));
if (Long.$eq(this.numLeft,0 )) this.jv.update$I$BA$I$I$sun_security_util_ManifestEntryVerifier(-1, b, off, len, this.mev);
return n;
} else {
return -1;
}});

Clazz.newMeth(C$, 'close$',  function () {
if (this.is != null ) this.is.close$();
this.is=null;
this.mev=null;
this.jv=null;
});

Clazz.newMeth(C$, 'available$',  function () {
return this.is.available$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JarVerifier, "VerifierCodeSource", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.security.CodeSource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['vlocation','java.net.URL','vsigners','java.security.CodeSigner[]','vcerts','java.security.cert.Certificate[]','csdomain','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$O$java_net_URL$java_security_CodeSignerA',  function (csdomain, location, signers) {
;C$.superclazz.c$$java_net_URL$java_security_CodeSignerA.apply(this,[location, signers]);C$.$init$.apply(this);
this.csdomain=csdomain;
this.vlocation=location;
this.vsigners=signers;
}, 1);

Clazz.newMeth(C$, 'c$$O$java_net_URL$java_security_cert_CertificateA',  function (csdomain, location, certs) {
;C$.superclazz.c$$java_net_URL$java_security_cert_CertificateA.apply(this,[location, certs]);C$.$init$.apply(this);
this.csdomain=csdomain;
this.vlocation=location;
this.vcerts=certs;
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj === this ) {
return true;
}if (Clazz.instanceOf(obj, "java.util.jar.JarVerifier.VerifierCodeSource")) {
var that=obj;
if (this.isSameDomain$O(that.csdomain)) {
if (that.vsigners !== this.vsigners  || that.vcerts !== this.vcerts  ) {
return false;
}if (that.vlocation != null ) {
return that.vlocation.equals$O(this.vlocation);
} else if (this.vlocation != null ) {
return this.vlocation.equals$O(that.vlocation);
} else {
return true;
}}}return C$.superclazz.prototype.equals$O.apply(this, [obj]);
});

Clazz.newMeth(C$, 'isSameDomain$O',  function (csdomain) {
return this.csdomain === csdomain ;
});

Clazz.newMeth(C$, 'getPrivateSigners',  function () {
return this.vsigners;
}, p$1);

Clazz.newMeth(C$, 'getPrivateCertificates',  function () {
return this.vcerts;
}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
