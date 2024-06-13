(function(){var P$=Clazz.newPackage("sun.util.locale.provider"),p$1={},I$=[[0,'sun.util.locale.provider.LocaleProviderAdapter','java.text.DecimalFormatSymbols','java.text.DecimalFormat']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NumberFormatProviderImpl", null, 'java.text.spi.NumberFormatProvider', 'sun.util.locale.provider.AvailableLanguageTags');

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
return $I$(1).forType$sun_util_locale_provider_LocaleProviderAdapter_Type(this.type).getAvailableLocales$();
});

Clazz.newMeth(C$, 'isSupportedLocale$java_util_Locale',  function (locale) {
return $I$(1).isSupportedLocale$java_util_Locale$sun_util_locale_provider_LocaleProviderAdapter_Type$java_util_Set(locale, this.type, this.langtags);
});

Clazz.newMeth(C$, 'getCurrencyInstance$java_util_Locale',  function (locale) {
return p$1.getInstance$java_util_Locale$I.apply(this, [locale, 1]);
});

Clazz.newMeth(C$, 'getIntegerInstance$java_util_Locale',  function (locale) {
return p$1.getInstance$java_util_Locale$I.apply(this, [locale, 4]);
});

Clazz.newMeth(C$, 'getNumberInstance$java_util_Locale',  function (locale) {
return p$1.getInstance$java_util_Locale$I.apply(this, [locale, 0]);
});

Clazz.newMeth(C$, 'getPercentInstance$java_util_Locale',  function (locale) {
return p$1.getInstance$java_util_Locale$I.apply(this, [locale, 2]);
});

Clazz.newMeth(C$, 'getInstance$java_util_Locale$I',  function (locale, choice) {
if (locale == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var adapter=$I$(1).forType$sun_util_locale_provider_LocaleProviderAdapter_Type(this.type);
var numberPatterns=adapter.getLocaleResources$java_util_Locale(locale).getNumberPatterns$();
var symbols=$I$(2).getInstance$java_util_Locale(locale);
var entry=(choice == 4) ? 0 : choice;
var format=Clazz.new_($I$(3,1).c$$S$java_text_DecimalFormatSymbols,[numberPatterns[entry], symbols]);
if (choice == 4) {
format.setMaximumFractionDigits$I(0);
format.setDecimalSeparatorAlwaysShown$Z(false);
format.setParseIntegerOnly$Z(true);
} else if (choice == 1) {
C$.adjustForCurrencyDefaultFractionDigits$java_text_DecimalFormat$java_text_DecimalFormatSymbols(format, symbols);
}return format;
}, p$1);

Clazz.newMeth(C$, 'adjustForCurrencyDefaultFractionDigits$java_text_DecimalFormat$java_text_DecimalFormatSymbols',  function (format, symbols) {
format.setMinimumFractionDigits$I(2);
format.setMaximumFractionDigits$I(2);
}, 1);

Clazz.newMeth(C$, 'getAvailableLanguageTags$',  function () {
return this.langtags;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
