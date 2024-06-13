(function(){var P$=Clazz.newPackage("sun.util.locale.provider"),p$1={},I$=[[0,'sun.util.locale.provider.LocaleProviderAdapter','sun.util.locale.provider.RuleBasedBreakIterator','sun.util.locale.provider.DictionaryBasedBreakIterator','InternalError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BreakIteratorProviderImpl", null, 'java.text.spi.BreakIteratorProvider', 'sun.util.locale.provider.AvailableLanguageTags');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['type','sun.util.locale.provider.LocaleProviderAdapter.Type','langtags','java.util.Set']]]

Clazz.newMeth(C$, 'c$$sun_util_locale_provider_LocaleProviderAdapter_Type$java_util_Set',  function (type, langtags) {
Clazz.super_(C$, this);
this.type=type;
this.langtags=langtags;
}, 1);

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
return $I$(1).toLocaleArray$java_util_Set(this.langtags);
});

Clazz.newMeth(C$, 'getWordInstance$java_util_Locale',  function (locale) {
return p$1.getBreakInstance$java_util_Locale$I$S$S.apply(this, [locale, 1, "WordData", "WordDictionary"]);
});

Clazz.newMeth(C$, 'getLineInstance$java_util_Locale',  function (locale) {
return p$1.getBreakInstance$java_util_Locale$I$S$S.apply(this, [locale, 2, "LineData", "LineDictionary"]);
});

Clazz.newMeth(C$, 'getCharacterInstance$java_util_Locale',  function (locale) {
return p$1.getBreakInstance$java_util_Locale$I$S$S.apply(this, [locale, 0, "CharacterData", "CharacterDictionary"]);
});

Clazz.newMeth(C$, 'getSentenceInstance$java_util_Locale',  function (locale) {
return p$1.getBreakInstance$java_util_Locale$I$S$S.apply(this, [locale, 3, "SentenceData", "SentenceDictionary"]);
});

Clazz.newMeth(C$, 'getBreakInstance$java_util_Locale$I$S$S',  function (locale, type, dataName, dictionaryName) {
if (locale == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var lr=$I$(1).forJRE$().getLocaleResources$java_util_Locale(locale);
var classNames=lr.getBreakIteratorInfo$S("BreakIteratorClasses");
var dataFile=lr.getBreakIteratorInfo$S(dataName);
try {
switch (classNames[type]) {
case "RuleBasedBreakIterator":
return Clazz.new_($I$(2,1).c$$S,[dataFile]);
case "DictionaryBasedBreakIterator":
var dictionaryFile=lr.getBreakIteratorInfo$S(dictionaryName);
return Clazz.new_($I$(3,1).c$$S$S,[dataFile, dictionaryFile]);
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid break iterator class \"" + classNames[type] + "\"" ]);
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException") || Clazz.exceptionOf(e,"java.util.MissingResourceException") || Clazz.exceptionOf(e,"IllegalArgumentException")){
throw Clazz.new_([e.toString(), e],$I$(4,1).c$$S$Throwable);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'getAvailableLanguageTags$',  function () {
return this.langtags;
});

Clazz.newMeth(C$, 'isSupportedLocale$java_util_Locale',  function (locale) {
return $I$(1).isSupportedLocale$java_util_Locale$sun_util_locale_provider_LocaleProviderAdapter_Type$java_util_Set(locale, this.type, this.langtags);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
