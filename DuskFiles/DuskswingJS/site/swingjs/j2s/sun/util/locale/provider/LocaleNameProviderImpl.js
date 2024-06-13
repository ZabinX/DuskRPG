(function(){var P$=Clazz.newPackage("sun.util.locale.provider"),p$1={},I$=[[0,'sun.util.locale.provider.LocaleProviderAdapter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LocaleNameProviderImpl", null, 'java.util.spi.LocaleNameProvider', 'sun.util.locale.provider.AvailableLanguageTags');

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

Clazz.newMeth(C$, 'isSupportedLocale$java_util_Locale',  function (locale) {
return $I$(1).isSupportedLocale$java_util_Locale$sun_util_locale_provider_LocaleProviderAdapter_Type$java_util_Set(locale, this.type, this.langtags);
});

Clazz.newMeth(C$, 'getDisplayLanguage$S$java_util_Locale',  function (lang, locale) {
return p$1.getDisplayString$S$java_util_Locale.apply(this, [lang, locale]);
});

Clazz.newMeth(C$, 'getDisplayScript$S$java_util_Locale',  function (scriptCode, locale) {
return p$1.getDisplayString$S$java_util_Locale.apply(this, [scriptCode, locale]);
});

Clazz.newMeth(C$, 'getDisplayCountry$S$java_util_Locale',  function (ctry, locale) {
return p$1.getDisplayString$S$java_util_Locale.apply(this, [ctry, locale]);
});

Clazz.newMeth(C$, 'getDisplayVariant$S$java_util_Locale',  function (vrnt, locale) {
return p$1.getDisplayString$S$java_util_Locale.apply(this, ["%%" + vrnt, locale]);
});

Clazz.newMeth(C$, 'getDisplayString$S$java_util_Locale',  function (key, locale) {
if (key == null  || locale == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return $I$(1).forType$sun_util_locale_provider_LocaleProviderAdapter_Type(this.type).getLocaleResources$java_util_Locale(locale).getLocaleName$S(key);
}, p$1);

Clazz.newMeth(C$, 'getAvailableLanguageTags$',  function () {
return this.langtags;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
