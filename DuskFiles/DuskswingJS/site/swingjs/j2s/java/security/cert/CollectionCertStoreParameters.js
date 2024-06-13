(function(){var P$=Clazz.newPackage("java.security.cert"),I$=[[0,'java.util.Collections','InternalError','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CollectionCertStoreParameters", null, null, 'java.security.cert.CertStoreParameters');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['coll','java.util.Collection']]]

Clazz.newMeth(C$, 'c$$java_util_Collection',  function (collection) {
;C$.$init$.apply(this);
if (collection == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.coll=collection;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.coll=$I$(1).EMPTY_SET;
}, 1);

Clazz.newMeth(C$, 'getCollection$',  function () {
return this.coll;
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

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(3,1));
sb.append$S("CollectionCertStoreParameters: [\n");
sb.append$S("  collection: " + this.coll + "\n" );
sb.append$S("]");
return sb.toString();
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:27 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
