(function(){var P$=Clazz.newPackage("sun.util.locale.provider"),p$1={},I$=[[0,'sun.util.locale.provider.LocaleProviderAdapter','java.util.Locale']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CurrencyNameProviderImpl", null, 'java.util.spi.CurrencyNameProvider', 'sun.util.locale.provider.AvailableLanguageTags');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['type','sun.util.locale.provider.LocaleProviderAdapter.Type','langtags','java.util.Set']]]

Clazz.newMeth(C$, 'c$$sun_util_locale_provider_LocaleProviderAdapter_Type$java_util_Set',  function (type, langtags) {
Clazz.super_(C$, this);
this.type=type;
this.langtags=langtags;
}, 1);

Clazz.newMeth(C$, 'getAvailableLanguageTags$',  function () {
return this.langtags;
});

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
return $I$(1).toLocaleArray$java_util_Set(this.langtags);
});

Clazz.newMeth(C$, 'getSymbol$S$java_util_Locale',  function (currencyCode, locale) {
return p$1.getString$S$java_util_Locale.apply(this, [currencyCode.toUpperCase$java_util_Locale($I$(2).ROOT), locale]);
});

Clazz.newMeth(C$, 'getDisplayName$S$java_util_Locale',  function (currencyCode, locale) {
return p$1.getString$S$java_util_Locale.apply(this, [currencyCode.toLowerCase$java_util_Locale($I$(2).ROOT), locale]);
});

Clazz.newMeth(C$, 'getString$S$java_util_Locale',  function (key, locale) {
if (locale == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return $I$(1).forType$sun_util_locale_provider_LocaleProviderAdapter_Type(this.type).getLocaleResources$java_util_Locale(locale).getCurrencyName$S(key);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
