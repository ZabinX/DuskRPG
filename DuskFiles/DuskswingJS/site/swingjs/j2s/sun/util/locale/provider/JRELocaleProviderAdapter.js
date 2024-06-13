(function(){var P$=Clazz.newPackage("sun.util.locale.provider"),I$=[[0,'sun.util.locale.provider.JRELocaleProviderAdapter','java.util.concurrent.ConcurrentHashMap',['sun.util.locale.provider.LocaleProviderAdapter','.Type'],'InternalError','sun.util.locale.provider.BreakIteratorProviderImpl','sun.util.locale.provider.CollatorProviderImpl','sun.util.locale.provider.DateFormatProviderImpl','sun.util.locale.provider.DateFormatSymbolsProviderImpl','sun.util.locale.provider.DecimalFormatSymbolsProviderImpl','sun.util.locale.provider.NumberFormatProviderImpl','sun.util.locale.provider.CurrencyNameProviderImpl','sun.util.locale.provider.LocaleNameProviderImpl','sun.util.locale.provider.TimeZoneNameProviderImpl','sun.util.locale.provider.CalendarDataProviderImpl','sun.util.locale.provider.CalendarNameProviderImpl','sun.util.locale.provider.CalendarProviderImpl','sun.util.locale.provider.LocaleResources','sun.util.resources.LocaleData',['sun.util.locale.provider.JRELocaleProviderAdapter','.AvailableJRELocales'],'sun.util.locale.provider.LocaleDataMetaInfo','java.util.HashSet','java.util.StringTokenizer','java.util.Locale','sun.util.locale.provider.JRELocaleConstants','java.io.File','java.security.AccessController']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JRELocaleProviderAdapter", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'sun.util.locale.provider.LocaleProviderAdapter', 'sun.util.locale.provider.ResourceBundleBasedAdapter');
C$.$classes$=[['AvailableJRELocales',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.langtagSets=Clazz.new_($I$(2,1));
this.localeResourcesMap=Clazz.new_($I$(2,1));
this.breakIteratorProvider=null;
this.collatorProvider=null;
this.dateFormatProvider=null;
this.dateFormatSymbolsProvider=null;
this.decimalFormatSymbolsProvider=null;
this.numberFormatProvider=null;
this.currencyNameProvider=null;
this.localeNameProvider=null;
this.timeZoneNameProvider=null;
this.calendarDataProvider=null;
this.calendarNameProvider=null;
this.calendarProvider=null;
},1);

C$.$fields$=[['O',['langtagSets','java.util.concurrent.ConcurrentMap','+localeResourcesMap','localeData','sun.util.resources.LocaleData','breakIteratorProvider','java.text.spi.BreakIteratorProvider','collatorProvider','java.text.spi.CollatorProvider','dateFormatProvider','java.text.spi.DateFormatProvider','dateFormatSymbolsProvider','java.text.spi.DateFormatSymbolsProvider','decimalFormatSymbolsProvider','java.text.spi.DecimalFormatSymbolsProvider','numberFormatProvider','java.text.spi.NumberFormatProvider','currencyNameProvider','java.util.spi.CurrencyNameProvider','localeNameProvider','java.util.spi.LocaleNameProvider','timeZoneNameProvider','java.util.spi.TimeZoneNameProvider','calendarDataProvider','java.util.spi.CalendarDataProvider','calendarNameProvider','java.util.spi.CalendarNameProvider','calendarProvider','sun.util.spi.CalendarProvider']]
,['O',['isNonENSupported','Boolean']]]

Clazz.newMeth(C$, 'getAdapterType$',  function () {
return $I$(3).JRE;
});

Clazz.newMeth(C$, 'getLocaleServiceProvider$Class',  function (c) {
switch (c.getSimpleName$()) {
case "BreakIteratorProvider":
return this.getBreakIteratorProvider$();
case "CollatorProvider":
return this.getCollatorProvider$();
case "DateFormatProvider":
return this.getDateFormatProvider$();
case "DateFormatSymbolsProvider":
return this.getDateFormatSymbolsProvider$();
case "DecimalFormatSymbolsProvider":
return this.getDecimalFormatSymbolsProvider$();
case "NumberFormatProvider":
return this.getNumberFormatProvider$();
case "CurrencyNameProvider":
return this.getCurrencyNameProvider$();
case "LocaleNameProvider":
return this.getLocaleNameProvider$();
case "TimeZoneNameProvider":
return this.getTimeZoneNameProvider$();
case "CalendarDataProvider":
return this.getCalendarDataProvider$();
case "CalendarNameProvider":
return this.getCalendarNameProvider$();
case "CalendarProvider":
return this.getCalendarProvider$();
default:
throw Clazz.new_($I$(4,1).c$$S,["should not come down here"]);
}
});

Clazz.newMeth(C$, 'getBreakIteratorProvider$',  function () {
if (this.breakIteratorProvider == null ) {
var provider=Clazz.new_([this.getAdapterType$(), this.getLanguageTagSet$S("FormatData")],$I$(5,1).c$$sun_util_locale_provider_LocaleProviderAdapter_Type$java_util_Set);
{
if (this.breakIteratorProvider == null ) {
this.breakIteratorProvider=provider;
}}}return this.breakIteratorProvider;
});

Clazz.newMeth(C$, 'getCollatorProvider$',  function () {
if (this.collatorProvider == null ) {
var provider=Clazz.new_([this.getAdapterType$(), this.getLanguageTagSet$S("CollationData")],$I$(6,1).c$$sun_util_locale_provider_LocaleProviderAdapter_Type$java_util_Set);
{
if (this.collatorProvider == null ) {
this.collatorProvider=provider;
}}}return this.collatorProvider;
});

Clazz.newMeth(C$, 'getDateFormatProvider$',  function () {
if (this.dateFormatProvider == null ) {
var provider=Clazz.new_([this.getAdapterType$(), this.getLanguageTagSet$S("FormatData")],$I$(7,1).c$$sun_util_locale_provider_LocaleProviderAdapter_Type$java_util_Set);
{
if (this.dateFormatProvider == null ) {
this.dateFormatProvider=provider;
}}}return this.dateFormatProvider;
});

Clazz.newMeth(C$, 'getDateFormatSymbolsProvider$',  function () {
if (this.dateFormatSymbolsProvider == null ) {
var provider=Clazz.new_([this.getAdapterType$(), this.getLanguageTagSet$S("FormatData")],$I$(8,1).c$$sun_util_locale_provider_LocaleProviderAdapter_Type$java_util_Set);
{
if (this.dateFormatSymbolsProvider == null ) {
this.dateFormatSymbolsProvider=provider;
}}}return this.dateFormatSymbolsProvider;
});

Clazz.newMeth(C$, 'getDecimalFormatSymbolsProvider$',  function () {
if (this.decimalFormatSymbolsProvider == null ) {
var provider=Clazz.new_([this.getAdapterType$(), this.getLanguageTagSet$S("FormatData")],$I$(9,1).c$$sun_util_locale_provider_LocaleProviderAdapter_Type$java_util_Set);
{
if (this.decimalFormatSymbolsProvider == null ) {
this.decimalFormatSymbolsProvider=provider;
}}}return this.decimalFormatSymbolsProvider;
});

Clazz.newMeth(C$, 'getNumberFormatProvider$',  function () {
if (this.numberFormatProvider == null ) {
var provider=Clazz.new_([this.getAdapterType$(), this.getLanguageTagSet$S("FormatData")],$I$(10,1).c$$sun_util_locale_provider_LocaleProviderAdapter_Type$java_util_Set);
{
if (this.numberFormatProvider == null ) {
this.numberFormatProvider=provider;
}}}return this.numberFormatProvider;
});

Clazz.newMeth(C$, 'getCurrencyNameProvider$',  function () {
if (this.currencyNameProvider == null ) {
var provider=Clazz.new_([this.getAdapterType$(), this.getLanguageTagSet$S("CurrencyNames")],$I$(11,1).c$$sun_util_locale_provider_LocaleProviderAdapter_Type$java_util_Set);
{
if (this.currencyNameProvider == null ) {
this.currencyNameProvider=provider;
}}}return this.currencyNameProvider;
});

Clazz.newMeth(C$, 'getLocaleNameProvider$',  function () {
if (this.localeNameProvider == null ) {
var provider=Clazz.new_([this.getAdapterType$(), this.getLanguageTagSet$S("LocaleNames")],$I$(12,1).c$$sun_util_locale_provider_LocaleProviderAdapter_Type$java_util_Set);
{
if (this.localeNameProvider == null ) {
this.localeNameProvider=provider;
}}}return this.localeNameProvider;
});

Clazz.newMeth(C$, 'getTimeZoneNameProvider$',  function () {
if (this.timeZoneNameProvider == null ) {
var provider=Clazz.new_([this.getAdapterType$(), this.getLanguageTagSet$S("TimeZoneNames")],$I$(13,1).c$$sun_util_locale_provider_LocaleProviderAdapter_Type$java_util_Set);
{
if (this.timeZoneNameProvider == null ) {
this.timeZoneNameProvider=provider;
}}}return this.timeZoneNameProvider;
});

Clazz.newMeth(C$, 'getCalendarDataProvider$',  function () {
if (this.calendarDataProvider == null ) {
var provider;
provider=Clazz.new_([this.getAdapterType$(), this.getLanguageTagSet$S("CalendarData")],$I$(14,1).c$$sun_util_locale_provider_LocaleProviderAdapter_Type$java_util_Set);
{
if (this.calendarDataProvider == null ) {
this.calendarDataProvider=provider;
}}}return this.calendarDataProvider;
});

Clazz.newMeth(C$, 'getCalendarNameProvider$',  function () {
if (this.calendarNameProvider == null ) {
var provider;
provider=Clazz.new_([this.getAdapterType$(), this.getLanguageTagSet$S("FormatData")],$I$(15,1).c$$sun_util_locale_provider_LocaleProviderAdapter_Type$java_util_Set);
{
if (this.calendarNameProvider == null ) {
this.calendarNameProvider=provider;
}}}return this.calendarNameProvider;
});

Clazz.newMeth(C$, 'getCalendarProvider$',  function () {
if (this.calendarProvider == null ) {
var provider=Clazz.new_([this.getAdapterType$(), this.getLanguageTagSet$S("CalendarData")],$I$(16,1).c$$sun_util_locale_provider_LocaleProviderAdapter_Type$java_util_Set);
{
if (this.calendarProvider == null ) {
this.calendarProvider=provider;
}}}return this.calendarProvider;
});

Clazz.newMeth(C$, 'getLocaleResources$java_util_Locale',  function (locale) {
var lr=this.localeResourcesMap.get$O(locale);
if (lr == null ) {
lr=Clazz.new_($I$(17,1).c$$sun_util_locale_provider_ResourceBundleBasedAdapter$java_util_Locale,[this, locale]);
var lrc=this.localeResourcesMap.putIfAbsent$O$O(locale, lr);
if (lrc != null ) {
lr=lrc;
}}return lr;
});

Clazz.newMeth(C$, 'getLocaleData$',  function () {
if (this.localeData == null ) {
{
if (this.localeData == null ) {
this.localeData=Clazz.new_([this.getAdapterType$()],$I$(18,1).c$$sun_util_locale_provider_LocaleProviderAdapter_Type);
}}}return this.localeData;
});

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
return $I$(19).localeList.clone$();
});

Clazz.newMeth(C$, 'getLanguageTagSet$S',  function (category) {
var tagset=this.langtagSets.get$O(category);
if (tagset == null ) {
tagset=this.createLanguageTagSet$S(category);
var ts=this.langtagSets.putIfAbsent$O$O(category, tagset);
if (ts != null ) {
tagset=ts;
}}return tagset;
});

Clazz.newMeth(C$, 'createLanguageTagSet$S',  function (category) {
var supportedLocaleString=$I$(20).getSupportedLocaleString$S(category);
var tagset=Clazz.new_($I$(21,1));
var tokens=Clazz.new_($I$(22,1).c$$S,[supportedLocaleString]);
while (tokens.hasMoreTokens$()){
var token=tokens.nextToken$();
if (token.equals$O("|")) {
if (C$.isNonENLangSupported$()) {
continue;
}break;
}tagset.add$O(token);
}
return tagset;
});

Clazz.newMeth(C$, 'createAvailableLocales$',  function () {
var supportedLocaleString=$I$(20).getSupportedLocaleString$S("AvailableLocales");
if (supportedLocaleString.length$() == 0) {
throw Clazz.new_($I$(4,1).c$$S,["No available locales for JRE"]);
}var barIndex=supportedLocaleString.indexOf$I("|");
var localeStringTokenizer;
if (C$.isNonENLangSupported$()) {
localeStringTokenizer=Clazz.new_([supportedLocaleString.substring$I$I(0, barIndex) + supportedLocaleString.substring$I(barIndex + 1)],$I$(22,1).c$$S);
} else {
localeStringTokenizer=Clazz.new_([supportedLocaleString.substring$I$I(0, barIndex)],$I$(22,1).c$$S);
}var length=localeStringTokenizer.countTokens$();
var locales=Clazz.array($I$(23), [length + 1]);
locales[0]=$I$(23).ROOT;
for (var i=1; i <= length; i++) {
var currentToken=localeStringTokenizer.nextToken$();
switch (currentToken) {
case "ja-JP-JP":
locales[i]=$I$(24).JA_JP_JP;
break;
case "no-NO-NY":
locales[i]=$I$(24).NO_NO_NY;
break;
case "th-TH-TH":
locales[i]=$I$(24).TH_TH_TH;
break;
default:
locales[i]=$I$(23).forLanguageTag$S(currentToken);
}
}
return locales;
}, 1);

Clazz.newMeth(C$, 'isNonENLangSupported$',  function () {
if (C$.isNonENSupported == null ) {
{
if (C$.isNonENSupported == null ) {
var sep=$I$(25).separator;
var localeDataJar=System.getProperty$S("java.home") + sep + "lib" + sep + "ext" + sep + "localedata.jar" ;
var f=Clazz.new_($I$(25,1).c$$S,[localeDataJar]);
C$.isNonENSupported=$I$(26,"doPrivileged$java_security_PrivilegedAction",[((P$.JRELocaleProviderAdapter$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JRELocaleProviderAdapter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return Boolean.valueOf$Z(this.$finals$.f.exists$());
});
})()
), Clazz.new_(P$.JRELocaleProviderAdapter$1.$init$,[this, {f:f}]))]);
}}}return (C$.isNonENSupported).valueOf();
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.isNonENSupported=null;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JRELocaleProviderAdapter, "AvailableJRELocales", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['localeList','java.util.Locale[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.localeList=$I$(1).createAvailableLocales$();
};
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
