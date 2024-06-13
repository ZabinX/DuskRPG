(function(){var P$=Clazz.newPackage("java.text"),I$=[[0,'java.util.concurrent.ConcurrentHashMap','java.util.Locale','sun.util.locale.provider.LocaleProviderAdapter','java.text.spi.CollatorProvider','java.lang.ref.SoftReference','sun.util.locale.provider.LocaleServiceProviderPool','InternalError']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Collator", null, null, ['java.util.Comparator', 'Cloneable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.strength=0;
this.decmp=0;
},1);

C$.$fields$=[['I',['strength','decmp']]
,['O',['cache','java.util.concurrent.ConcurrentMap']]]

Clazz.newMeth(C$, 'getInstance$',  function () {
return C$.getInstance$java_util_Locale($I$(2).getDefault$());
}, 1);

Clazz.newMeth(C$, 'getInstance$java_util_Locale',  function (desiredLocale) {
var ref=C$.cache.get$O(desiredLocale);
var result=(ref != null ) ? ref.get$() : null;
if (result == null ) {
var adapter;
adapter=$I$(3,"getAdapter$Class$java_util_Locale",[Clazz.getClass($I$(4)), desiredLocale]);
var provider=adapter.getCollatorProvider$();
result=provider.getInstance$java_util_Locale(desiredLocale);
if (result == null ) {
result=$I$(3).forJRE$().getCollatorProvider$().getInstance$java_util_Locale(desiredLocale);
}while (true){
if (ref != null ) {
C$.cache.remove$O$O(desiredLocale, ref);
}ref=C$.cache.putIfAbsent$O$O(desiredLocale, Clazz.new_($I$(5,1).c$$O,[result]));
if (ref == null ) {
break;
}var cachedColl=ref.get$();
if (cachedColl != null ) {
result=cachedColl;
break;
}}
}return result.clone$();
}, 1);

Clazz.newMeth(C$, 'compare$O$O',  function (o1, o2) {
return this.compare$S$S(o1, o2);
});

Clazz.newMeth(C$, 'equals$S$S',  function (source, target) {
return (this.compare$S$S(source, target) == 0);
});

Clazz.newMeth(C$, 'getStrength$',  function () {
return this.strength;
});

Clazz.newMeth(C$, 'setStrength$I',  function (newStrength) {
if ((newStrength != 0) && (newStrength != 1) && (newStrength != 2) && (newStrength != 3)  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Incorrect comparison level."]);
}this.strength=newStrength;
});

Clazz.newMeth(C$, 'getDecomposition$',  function () {
return this.decmp;
});

Clazz.newMeth(C$, 'setDecomposition$I',  function (decompositionMode) {
if ((decompositionMode != 0) && (decompositionMode != 1) && (decompositionMode != 2)  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Wrong decomposition mode."]);
}this.decmp=decompositionMode;
});

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
var pool=$I$(6,"getPool$Class",[Clazz.getClass($I$(4))]);
return pool.getAvailableLocales$();
}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(7,1).c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'equals$O',  function (that) {
if (this === that ) {
return true;
}if (that == null ) {
return false;
}if (this.getClass$() !== that.getClass$() ) {
return false;
}var other=that;
return ((this.strength == other.strength) && (this.decmp == other.decmp) );
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.strength=2;
this.decmp=1;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.cache=Clazz.new_($I$(1,1));
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
