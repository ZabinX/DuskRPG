(function(){var P$=Clazz.newPackage("java.security.cert"),I$=[[0,'java.util.Collections','java.util.ArrayList','java.util.HashMap','java.util.HashSet']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PKIXRevocationChecker", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.security.cert.PKIXCertPathChecker');
C$.$classes$=[['Option',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.ocspExtensions=$I$(1).emptyList$();
this.ocspResponses=$I$(1).emptyMap$();
this.options=$I$(1).emptySet$();
},1);

C$.$fields$=[['O',['ocspResponder','java.net.URI','ocspResponderCert','java.security.cert.X509Certificate','ocspExtensions','java.util.List','ocspResponses','java.util.Map','options','java.util.Set']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'setOcspResponder$java_net_URI',  function (uri) {
this.ocspResponder=uri;
});

Clazz.newMeth(C$, 'getOcspResponder$',  function () {
return this.ocspResponder;
});

Clazz.newMeth(C$, 'setOcspResponderCert$java_security_cert_X509Certificate',  function (cert) {
this.ocspResponderCert=cert;
});

Clazz.newMeth(C$, 'getOcspResponderCert$',  function () {
return this.ocspResponderCert;
});

Clazz.newMeth(C$, 'setOcspExtensions$java_util_List',  function (extensions) {
this.ocspExtensions=(extensions == null ) ? $I$(1).emptyList$() : Clazz.new_($I$(2,1).c$$java_util_Collection,[extensions]);
});

Clazz.newMeth(C$, 'getOcspExtensions$',  function () {
return $I$(1).unmodifiableList$java_util_List(this.ocspExtensions);
});

Clazz.newMeth(C$, 'setOcspResponses$java_util_Map',  function (responses) {
if (responses == null ) {
this.ocspResponses=$I$(1).emptyMap$();
} else {
var copy=Clazz.new_([responses.size$()],$I$(3,1).c$$I);
for (var e, $e = responses.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
copy.put$O$O(e.getKey$(), e.getValue$().clone$());
}
this.ocspResponses=copy;
}});

Clazz.newMeth(C$, 'getOcspResponses$',  function () {
var copy=Clazz.new_([this.ocspResponses.size$()],$I$(3,1).c$$I);
for (var e, $e = this.ocspResponses.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
copy.put$O$O(e.getKey$(), e.getValue$().clone$());
}
return copy;
});

Clazz.newMeth(C$, 'setOptions$java_util_Set',  function (options) {
this.options=(options == null ) ? $I$(1).emptySet$() : Clazz.new_($I$(4,1).c$$java_util_Collection,[options]);
});

Clazz.newMeth(C$, 'getOptions$',  function () {
return $I$(1).unmodifiableSet$java_util_Set(this.options);
});

Clazz.newMeth(C$, 'clone$',  function () {
var copy=C$.superclazz.prototype.clone$.apply(this, []);
copy.ocspExtensions=Clazz.new_($I$(2,1).c$$java_util_Collection,[this.ocspExtensions]);
copy.ocspResponses=Clazz.new_($I$(3,1).c$$java_util_Map,[this.ocspResponses]);
for (var entry, $entry = copy.ocspResponses.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var encoded=entry.getValue$();
entry.setValue$O(encoded.clone$());
}
copy.options=Clazz.new_($I$(4,1).c$$java_util_Collection,[this.options]);
return copy;
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.PKIXRevocationChecker, "Option", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "ONLY_END_ENTITY", 0, []);
Clazz.newEnumConst($vals, C$.c$, "PREFER_CRLS", 1, []);
Clazz.newEnumConst($vals, C$.c$, "NO_FALLBACK", 2, []);
Clazz.newEnumConst($vals, C$.c$, "SOFT_FAIL", 3, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:28 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
