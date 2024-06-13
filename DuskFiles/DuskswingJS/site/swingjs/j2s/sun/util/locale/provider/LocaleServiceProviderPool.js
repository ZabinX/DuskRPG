(function(){var P$=Clazz.newPackage("sun.util.locale.provider"),p$1={},I$=[[0,'java.util.HashSet','sun.util.locale.provider.LocaleServiceProviderPool','java.util.Locale','java.util.concurrent.ConcurrentHashMap','java.text.spi.BreakIteratorProvider','java.text.spi.CollatorProvider','java.text.spi.DateFormatProvider','java.text.spi.DateFormatSymbolsProvider','java.text.spi.DecimalFormatSymbolsProvider','java.text.spi.NumberFormatProvider','java.util.spi.CurrencyNameProvider','java.util.spi.LocaleNameProvider','java.util.spi.TimeZoneNameProvider','java.util.spi.CalendarDataProvider','java.util.Collections','sun.util.locale.provider.LocaleProviderAdapter','sun.util.logging.PlatformLogger',['sun.util.locale.provider.LocaleServiceProviderPool','.AllAvailableLocales'],'java.util.Arrays',['sun.util.locale.provider.LocaleProviderAdapter','.Type'],'java.util.ArrayList',['java.util.ResourceBundle','.Control'],'sun.util.locale.provider.JRELocaleConstants',['java.util.Locale','.Builder']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LocaleServiceProviderPool", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['AllAvailableLocales',10],['LocalizedObjectGetter',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.providers=Clazz.new_($I$(4,1));
this.providersCache=Clazz.new_($I$(4,1));
this.availableLocales=null;
},1);

C$.$fields$=[['O',['providers','java.util.concurrent.ConcurrentMap','+providersCache','availableLocales','java.util.Set','providerClass','Class']]
,['O',['poolOfPools','java.util.concurrent.ConcurrentMap','spiClasses','Class[]','NULL_LIST','java.util.List']]]

Clazz.newMeth(C$, 'getPool$Class',  function (providerClass) {
var pool=C$.poolOfPools.get$O(providerClass);
if (pool == null ) {
var newPool=Clazz.new_(C$.c$$Class,[providerClass]);
pool=C$.poolOfPools.putIfAbsent$O$O(providerClass, newPool);
if (pool == null ) {
pool=newPool;
}}return pool;
}, 1);

Clazz.newMeth(C$, 'c$$Class',  function (c) {
;C$.$init$.apply(this);
this.providerClass=c;
for (var type, $type = $I$(16).getAdapterPreference$().iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
var lda=$I$(16).forType$sun_util_locale_provider_LocaleProviderAdapter_Type(type);
if (lda != null ) {
var provider=lda.getLocaleServiceProvider$Class(c);
if (provider != null ) {
this.providers.putIfAbsent$O$O(type, provider);
}}}
}, 1);

Clazz.newMeth(C$, 'config$Class$S',  function ($caller, message) {
var logger=$I$(17,"getLogger$S",[$caller.getCanonicalName$()]);
logger.config$S(message);
}, 1);

Clazz.newMeth(C$, 'getAllAvailableLocales$',  function () {
return $I$(18).allAvailableLocales.clone$();
}, 1);

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
var locList=Clazz.new_($I$(1,1));
locList.addAll$java_util_Collection(p$1.getAvailableLocaleSet.apply(this, []));
locList.addAll$java_util_Collection($I$(19,"asList$OA",[$I$(16).forJRE$().getAvailableLocales$()]));
var tmp=Clazz.array($I$(3), [locList.size$()]);
locList.toArray$OA(tmp);
return tmp;
});

Clazz.newMeth(C$, 'getAvailableLocaleSet',  function () {
if (this.availableLocales == null ) {
this.availableLocales=Clazz.new_($I$(1,1));
for (var lsp, $lsp = this.providers.values$().iterator$(); $lsp.hasNext$()&&((lsp=($lsp.next$())),1);) {
var locales=lsp.getAvailableLocales$();
for (var locale, $locale = 0, $$locale = locales; $locale<$$locale.length&&((locale=($$locale[$locale])),1);$locale++) {
this.availableLocales.add$O(C$.getLookupLocale$java_util_Locale(locale));
}
}
}return this.availableLocales;
}, p$1);

Clazz.newMeth(C$, 'hasProviders$',  function () {
return this.providers.size$() != 1 || (this.providers.get$O($I$(20).JRE) == null  && this.providers.get$O($I$(20).FALLBACK) == null  ) ;
});

Clazz.newMeth(C$, 'getLocalizedObject$sun_util_locale_provider_LocaleServiceProviderPool_LocalizedObjectGetter$java_util_Locale$OA',  function (getter, locale, params) {
return p$1.getLocalizedObjectImpl$sun_util_locale_provider_LocaleServiceProviderPool_LocalizedObjectGetter$java_util_Locale$Z$S$OA.apply(this, [getter, locale, true, null, params]);
});

Clazz.newMeth(C$, 'getLocalizedObject$sun_util_locale_provider_LocaleServiceProviderPool_LocalizedObjectGetter$java_util_Locale$S$OA',  function (getter, locale, key, params) {
return p$1.getLocalizedObjectImpl$sun_util_locale_provider_LocaleServiceProviderPool_LocalizedObjectGetter$java_util_Locale$Z$S$OA.apply(this, [getter, locale, false, key, params]);
});

Clazz.newMeth(C$, 'getLocalizedObjectImpl$sun_util_locale_provider_LocaleServiceProviderPool_LocalizedObjectGetter$java_util_Locale$Z$S$OA',  function (getter, locale, isObjectProvider, key, params) {
if (locale == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (!this.hasProviders$()) {
return getter.getObject$java_util_spi_LocaleServiceProvider$java_util_Locale$S$OA(this.providers.get$O($I$(16).defaultLocaleProviderAdapter), locale, key, params);
}var lookupLocales=C$.getLookupLocales$java_util_Locale(locale);
var available=p$1.getAvailableLocaleSet.apply(this, []);
for (var current, $current = lookupLocales.iterator$(); $current.hasNext$()&&((current=($current.next$())),1);) {
if (available.contains$O(current)) {
var providersObj;
for (var type, $type = p$1.findProviders$java_util_Locale.apply(this, [current]).iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
var lsp=this.providers.get$O(type);
providersObj=getter.getObject$java_util_spi_LocaleServiceProvider$java_util_Locale$S$OA(lsp, locale, key, params);
if (providersObj != null ) {
return providersObj;
} else if (isObjectProvider) {
C$.config$Class$S(Clazz.getClass(C$), "A locale sensitive service provider returned null for a localized objects,  which should not happen.  provider: " + lsp + " locale: " + locale );
}}
}}
return null;
}, p$1);

Clazz.newMeth(C$, 'findProviders$java_util_Locale',  function (locale) {
var providersList=this.providersCache.get$O(locale);
if (providersList == null ) {
for (var type, $type = $I$(16).getAdapterPreference$().iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
var lsp=this.providers.get$O(type);
if (lsp != null ) {
if (lsp.isSupportedLocale$java_util_Locale(locale)) {
if (providersList == null ) {
providersList=Clazz.new_($I$(21,1).c$$I,[2]);
}providersList.add$O(type);
}}}
if (providersList == null ) {
providersList=C$.NULL_LIST;
}var val=this.providersCache.putIfAbsent$O$O(locale, providersList);
if (val != null ) {
providersList=val;
}}return providersList;
}, p$1);

Clazz.newMeth(C$, 'getLookupLocales$java_util_Locale',  function (locale) {
var lookupLocales=$I$(22,"getNoFallbackControl$java_util_List",[$I$(22).FORMAT_DEFAULT]).getCandidateLocales$S$java_util_Locale("", locale);
return lookupLocales;
}, 1);

Clazz.newMeth(C$, 'getLookupLocale$java_util_Locale',  function (locale) {
var lookupLocale=locale;
if (locale.hasExtensions$() && !locale.equals$O($I$(23).JA_JP_JP) && !locale.equals$O($I$(23).TH_TH_TH)  ) {
var locbld=Clazz.new_($I$(24,1));
try {
locbld.setLocale$java_util_Locale(locale);
locbld.clearExtensions$();
lookupLocale=locbld.build$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.IllformedLocaleException")){
C$.config$Class$S(Clazz.getClass(C$), "A locale(" + locale + ") has non-empty extensions, but has illformed fields." );
lookupLocale=Clazz.new_([locale.getLanguage$(), locale.getCountry$(), locale.getVariant$()],$I$(3,1).c$$S$S$S);
} else {
throw e;
}
}
}return lookupLocale;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.poolOfPools=Clazz.new_($I$(4,1));
C$.spiClasses=Clazz.array(Class, -1, [Clazz.getClass($I$(5)), Clazz.getClass($I$(6)), Clazz.getClass($I$(7)), Clazz.getClass($I$(8)), Clazz.getClass($I$(9)), Clazz.getClass($I$(10)), Clazz.getClass($I$(11)), Clazz.getClass($I$(12)), Clazz.getClass($I$(13)), Clazz.getClass($I$(14))]);
C$.NULL_LIST=$I$(15).emptyList$();
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.LocaleServiceProviderPool, "AllAvailableLocales", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['allAvailableLocales','java.util.Locale[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
{
var all=Clazz.new_($I$(1,1));
for (var c, $c = 0, $$c = $I$(2).spiClasses; $c<$$c.length&&((c=($$c[$c])),1);$c++) {
var pool=$I$(2).getPool$Class(c);
all.addAll$java_util_Collection(p$1.getAvailableLocaleSet.apply(pool, []));
}
C$.allAvailableLocales=all.toArray$OA(Clazz.array($I$(3), [0]));
};
};
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.LocaleServiceProviderPool, "LocalizedObjectGetter", function(){
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
