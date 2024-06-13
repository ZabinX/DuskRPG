(function(){var P$=Clazz.newPackage("sun.util.locale.provider"),p$1={},I$=[[0,'sun.util.locale.provider.LocaleProviderAdapter','java.text.SimpleDateFormat']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DateFormatProviderImpl", null, 'java.text.spi.DateFormatProvider', 'sun.util.locale.provider.AvailableLanguageTags');

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

Clazz.newMeth(C$, 'getTimeInstance$I$java_util_Locale',  function (style, locale) {
return p$1.getInstance$I$I$java_util_Locale.apply(this, [-1, style, locale]);
});

Clazz.newMeth(C$, 'getDateInstance$I$java_util_Locale',  function (style, locale) {
return p$1.getInstance$I$I$java_util_Locale.apply(this, [style, -1, locale]);
});

Clazz.newMeth(C$, 'getDateTimeInstance$I$I$java_util_Locale',  function (dateStyle, timeStyle, locale) {
return p$1.getInstance$I$I$java_util_Locale.apply(this, [dateStyle, timeStyle, locale]);
});

Clazz.newMeth(C$, 'getInstance$I$I$java_util_Locale',  function (dateStyle, timeStyle, locale) {
if (locale == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var sdf=Clazz.new_($I$(2,1).c$$S$java_util_Locale,["", locale]);
var cal=sdf.getCalendar$();
try {
var pattern=$I$(1).forType$sun_util_locale_provider_LocaleProviderAdapter_Type(this.type).getLocaleResources$java_util_Locale(locale).getDateTimePattern$I$I$java_util_Calendar(timeStyle, dateStyle, cal);
sdf.applyPattern$S(pattern);
} catch (mre) {
if (Clazz.exceptionOf(mre,"java.util.MissingResourceException")){
sdf.applyPattern$S("M/d/yy h:mm a");
} else {
throw mre;
}
}
return sdf;
}, p$1);

Clazz.newMeth(C$, 'getAvailableLanguageTags$',  function () {
return this.langtags;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
