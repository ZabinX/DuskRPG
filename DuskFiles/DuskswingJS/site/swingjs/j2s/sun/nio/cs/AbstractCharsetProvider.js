(function(){var P$=Clazz.newPackage("sun.nio.cs"),p$1={},I$=[[0,'java.util.TreeMap','sun.misc.ASCIICaseInsensitiveComparator','java.lang.ref.SoftReference','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractCharsetProvider", null, 'java.nio.charset.spi.CharsetProvider');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.classMap=Clazz.new_([$I$(2).CASE_INSENSITIVE_ORDER],$I$(1,1).c$$java_util_Comparator);
this.aliasMap=Clazz.new_([$I$(2).CASE_INSENSITIVE_ORDER],$I$(1,1).c$$java_util_Comparator);
this.aliasNameMap=Clazz.new_([$I$(2).CASE_INSENSITIVE_ORDER],$I$(1,1).c$$java_util_Comparator);
this.cache=Clazz.new_([$I$(2).CASE_INSENSITIVE_ORDER],$I$(1,1).c$$java_util_Comparator);
},1);

C$.$fields$=[['S',['packagePrefix'],'O',['classMap','java.util.Map','+aliasMap','+aliasNameMap','+cache']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.packagePrefix="sun.nio.cs";
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (pkgPrefixName) {
Clazz.super_(C$, this);
this.packagePrefix=pkgPrefixName;
}, 1);

Clazz.newMeth(C$, 'put$java_util_Map$O$O',  function (m, name, value) {
if (!m.containsKey$O(name)) m.put$O$O(name, value);
}, 1);

Clazz.newMeth(C$, 'remove$java_util_Map$O',  function (m, name) {
var x=m.remove$O(name);
Clazz.assert(C$, this, function(){return (x != null )});
}, 1);

Clazz.newMeth(C$, 'charset$S$S$SA',  function (name, className, aliases) {
{
C$.put$java_util_Map$O$O(this.classMap, name, className);
for (var i=0; i < aliases.length; i++) C$.put$java_util_Map$O$O(this.aliasMap, aliases[i], name);

C$.put$java_util_Map$O$O(this.aliasNameMap, name, aliases);
this.cache.clear$();
}});

Clazz.newMeth(C$, 'deleteCharset$S$SA',  function (name, aliases) {
{
C$.remove$java_util_Map$O(this.classMap, name);
for (var i=0; i < aliases.length; i++) C$.remove$java_util_Map$O(this.aliasMap, aliases[i]);

C$.remove$java_util_Map$O(this.aliasNameMap, name);
this.cache.clear$();
}});

Clazz.newMeth(C$, 'init$',  function () {
});

Clazz.newMeth(C$, 'canonicalize$S',  function (charsetName) {
var acn=this.aliasMap.get$O(charsetName);
return (acn != null ) ? acn : charsetName;
}, p$1);

Clazz.newMeth(C$, 'lookup$S',  function (csn) {
var sr=this.cache.get$O(csn);
if (sr != null ) {
var cs=sr.get$();
if (cs != null ) return cs;
}var cln=this.classMap.get$O(csn);
if (cln == null ) return null;
try {
var c=Clazz.forName(this.packagePrefix + "." + cln , true, this.getClass$().getClassLoader$());
var cs=c.newInstance$();
this.cache.put$O$O(csn, Clazz.new_($I$(3,1).c$$O,[cs]));
return cs;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var x = e$$;
{
return null;
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var x = e$$;
{
return null;
}
} else if (Clazz.exceptionOf(e$$,"InstantiationException")){
var x = e$$;
{
return null;
}
} else {
throw e$$;
}
}
}, p$1);

Clazz.newMeth(C$, 'charsetForName$S',  function (charsetName) {
{
this.init$();
return p$1.lookup$S.apply(this, [p$1.canonicalize$S.apply(this, [charsetName])]);
}});

Clazz.newMeth(C$, 'charsets$',  function () {
var ks;
{
this.init$();
ks=Clazz.new_([this.classMap.keySet$()],$I$(4,1).c$$java_util_Collection);
}return ((P$.AbstractCharsetProvider$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AbstractCharsetProvider$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.i=ks.iterator$();
},1);

C$.$fields$=[['O',['i','java.util.Iterator']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.i.hasNext$();
});

Clazz.newMeth(C$, 'next$',  function () {
var csn=this.i.next$();
{
return p$1.lookup$S.apply(this.b$['sun.nio.cs.AbstractCharsetProvider'], [csn]);
}});

Clazz.newMeth(C$, 'remove$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});
})()
), Clazz.new_(P$.AbstractCharsetProvider$1.$init$,[this, null]));
});

Clazz.newMeth(C$, 'aliases$S',  function (charsetName) {
{
this.init$();
return this.aliasNameMap.get$O(charsetName);
}});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
