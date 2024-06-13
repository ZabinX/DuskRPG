(function(){var P$=Clazz.newPackage("sun.util.locale.provider"),p$1={},I$=[[0,'sun.util.locale.provider.LocaleProviderAdapter']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TimeZoneNameProviderImpl", null, 'java.util.spi.TimeZoneNameProvider');

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

Clazz.newMeth(C$, 'getDisplayName$S$Z$I$java_util_Locale',  function (id, daylight, style, locale) {
var names=p$1.getDisplayNameArray$S$I$java_util_Locale.apply(this, [id, 5, locale]);
if (names != null ) {
var index=daylight ? 3 : 1;
if (style == 0) {
++index;
}return names[index];
}return null;
});

Clazz.newMeth(C$, 'getGenericDisplayName$S$I$java_util_Locale',  function (id, style, locale) {
var names=p$1.getDisplayNameArray$S$I$java_util_Locale.apply(this, [id, 7, locale]);
if (names != null  && names.length >= 7 ) {
return names[(style == 1) ? 5 : 6];
}return null;
});

Clazz.newMeth(C$, 'getDisplayNameArray$S$I$java_util_Locale',  function (id, n, locale) {
if (id == null  || locale == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return $I$(1).forType$sun_util_locale_provider_LocaleProviderAdapter_Type(this.type).getLocaleResources$java_util_Locale(locale).getTimeZoneNames$S$I(id, n);
}, p$1);

Clazz.newMeth(C$, 'getZoneStrings$java_util_Locale',  function (locale) {
return $I$(1).forType$sun_util_locale_provider_LocaleProviderAdapter_Type(this.type).getLocaleResources$java_util_Locale(locale).getZoneStrings$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
