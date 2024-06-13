(function(){var P$=Clazz.newPackage("java.text"),I$=[[0,['java.text.BreakIterator','.BreakIteratorCache'],'InternalError','java.text.StringCharacterIterator','java.util.Locale','sun.util.locale.provider.LocaleProviderAdapter','java.text.spi.BreakIteratorProvider','sun.util.locale.provider.LocaleServiceProviderPool']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BreakIterator", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Cloneable');
C$.$classes$=[['BreakIteratorCache',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['iterCache','java.text.BreakIterator.BreakIteratorCache[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(2,1).c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'preceding$I',  function (offset) {
var pos=this.following$I(offset);
while (pos >= offset && pos != -1 ){
pos=this.previous$();
}
return pos;
});

Clazz.newMeth(C$, 'isBoundary$I',  function (offset) {
if (offset == 0) {
return true;
}var boundary=this.following$I(offset - 1);
if (boundary == -1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}return boundary == offset;
});

Clazz.newMeth(C$, 'setText$S',  function (newText) {
this.setText$java_text_CharacterIterator(Clazz.new_($I$(3,1).c$$S,[newText]));
});

Clazz.newMeth(C$, 'getWordInstance$',  function () {
return C$.getWordInstance$java_util_Locale($I$(4).getDefault$());
}, 1);

Clazz.newMeth(C$, 'getWordInstance$java_util_Locale',  function (locale) {
return C$.getBreakInstance$java_util_Locale$I(locale, 1);
}, 1);

Clazz.newMeth(C$, 'getLineInstance$',  function () {
return C$.getLineInstance$java_util_Locale($I$(4).getDefault$());
}, 1);

Clazz.newMeth(C$, 'getLineInstance$java_util_Locale',  function (locale) {
return C$.getBreakInstance$java_util_Locale$I(locale, 2);
}, 1);

Clazz.newMeth(C$, 'getCharacterInstance$',  function () {
return C$.getCharacterInstance$java_util_Locale($I$(4).getDefault$());
}, 1);

Clazz.newMeth(C$, 'getCharacterInstance$java_util_Locale',  function (locale) {
return C$.getBreakInstance$java_util_Locale$I(locale, 0);
}, 1);

Clazz.newMeth(C$, 'getSentenceInstance$',  function () {
return C$.getSentenceInstance$java_util_Locale($I$(4).getDefault$());
}, 1);

Clazz.newMeth(C$, 'getSentenceInstance$java_util_Locale',  function (locale) {
return C$.getBreakInstance$java_util_Locale$I(locale, 3);
}, 1);

Clazz.newMeth(C$, 'getBreakInstance$java_util_Locale$I',  function (locale, type) {
if (C$.iterCache[type] != null ) {
var cache=C$.iterCache[type];
if (cache != null ) {
if (cache.getLocale$().equals$O(locale)) {
return cache.createBreakInstance$();
}}}var result=C$.createBreakInstance$java_util_Locale$I(locale, type);
var cache=Clazz.new_($I$(1,1).c$$java_util_Locale$java_text_BreakIterator,[locale, result]);
C$.iterCache[type]=cache;
return result;
}, 1);

Clazz.newMeth(C$, 'createBreakInstance$java_util_Locale$I',  function (locale, type) {
var adapter=$I$(5,"getAdapter$Class$java_util_Locale",[Clazz.getClass($I$(6)), locale]);
var iterator=C$.createBreakInstance$sun_util_locale_provider_LocaleProviderAdapter$java_util_Locale$I(adapter, locale, type);
if (iterator == null ) {
iterator=C$.createBreakInstance$sun_util_locale_provider_LocaleProviderAdapter$java_util_Locale$I($I$(5).forJRE$(), locale, type);
}return iterator;
}, 1);

Clazz.newMeth(C$, 'createBreakInstance$sun_util_locale_provider_LocaleProviderAdapter$java_util_Locale$I',  function (adapter, locale, type) {
var breakIteratorProvider=adapter.getBreakIteratorProvider$();
var iterator=null;
switch (type) {
case 0:
iterator=breakIteratorProvider.getCharacterInstance$java_util_Locale(locale);
break;
case 1:
iterator=breakIteratorProvider.getWordInstance$java_util_Locale(locale);
break;
case 2:
iterator=breakIteratorProvider.getLineInstance$java_util_Locale(locale);
break;
case 3:
iterator=breakIteratorProvider.getSentenceInstance$java_util_Locale(locale);
break;
}
return iterator;
}, 1);

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
var pool=$I$(7,"getPool$Class",[Clazz.getClass($I$(6))]);
return pool.getAvailableLocales$();
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.iterCache=Clazz.array($I$(1), [4]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.BreakIterator, "BreakIteratorCache", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['iter','java.text.BreakIterator','locale','java.util.Locale']]]

Clazz.newMeth(C$, 'c$$java_util_Locale$java_text_BreakIterator',  function (locale, iter) {
;C$.$init$.apply(this);
this.locale=locale;
this.iter=iter.clone$();
}, 1);

Clazz.newMeth(C$, 'getLocale$',  function () {
return this.locale;
});

Clazz.newMeth(C$, 'createBreakInstance$',  function () {
return this.iter.clone$();
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
