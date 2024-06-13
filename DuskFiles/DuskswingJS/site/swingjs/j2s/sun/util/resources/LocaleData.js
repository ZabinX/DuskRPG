(function(){var P$=Clazz.newPackage("sun.util.resources"),p$1={},I$=[[0,['java.util.ResourceBundle','.Control'],'java.util.ArrayList','sun.util.locale.provider.LocaleDataMetaInfo','java.util.Locale',['sun.util.locale.provider.LocaleProviderAdapter','.Type'],'java.util.Arrays','java.util.ResourceBundle',['sun.util.resources.LocaleData','.LocaleDataResourceBundleControl'],'java.security.AccessController',['sun.util.resources.LocaleData','.SupplementaryResourceBundleControl']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LocaleData", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['LocaleDataResourceBundleControl',10],['SupplementaryResourceBundleControl',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$sun_util_locale_provider_LocaleProviderAdapter_Type',  function (type) {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getCalendarData$java_util_Locale',  function (locale) {
return C$.getBundle$S$java_util_Locale("sun.util.resources.CalendarData", locale);
}, 1);

Clazz.newMeth(C$, 'getCurrencyNames$java_util_Locale',  function (locale) {
return C$.getBundle$S$java_util_Locale("sun.util.resources.CurrencyNames", locale);
}, 1);

Clazz.newMeth(C$, 'getLocaleNames$java_util_Locale',  function (locale) {
return C$.getBundle$S$java_util_Locale("sun.util.resources.LocaleNames", locale);
}, 1);

Clazz.newMeth(C$, 'getTimeZoneNames$java_util_Locale',  function (locale) {
return C$.getBundle$S$java_util_Locale("sun.util.resources.TimeZoneNames", locale);
}, 1);

Clazz.newMeth(C$, 'getBreakIteratorInfo$java_util_Locale',  function (locale) {
return C$.getBundle$S$java_util_Locale("sun.text.resources.BreakIteratorInfo", locale);
}, 1);

Clazz.newMeth(C$, 'getCollationData$java_util_Locale',  function (locale) {
return C$.getBundle$S$java_util_Locale("sun.text.resources.CollationData", locale);
}, 1);

Clazz.newMeth(C$, 'getDateFormatData$java_util_Locale',  function (locale) {
return C$.getBundle$S$java_util_Locale("sun.text.resources.FormatData", locale);
}, 1);

Clazz.newMeth(C$, 'setSupplementary$sun_util_resources_ParallelListResourceBundle',  function (formatData) {
if (!formatData.areParallelContentsComplete$()) {
var suppName="sun.text.resources.JavaTimeSupplementary";
p$1.setSupplementary$S$sun_util_resources_ParallelListResourceBundle.apply(this, [suppName, formatData]);
}});

Clazz.newMeth(C$, 'setSupplementary$S$sun_util_resources_ParallelListResourceBundle',  function (suppName, formatData) {
var parent=formatData.getParent$();
var resetKeySet=false;
if (parent != null ) {
resetKeySet=p$1.setSupplementary$S$sun_util_resources_ParallelListResourceBundle.apply(this, [suppName, parent]);
}var supp=C$.getSupplementary$S$java_util_Locale(suppName, formatData.getLocale$());
formatData.setParallelContents$sun_util_resources_OpenListResourceBundle(supp);
resetKeySet=!!(resetKeySet|(supp != null ));
if (resetKeySet) {
formatData.resetKeySet$();
}return resetKeySet;
}, p$1);

Clazz.newMeth(C$, 'getNumberFormatData$java_util_Locale',  function (locale) {
return C$.getBundle$S$java_util_Locale("sun.text.resources.FormatData", locale);
}, 1);

Clazz.newMeth(C$, 'getBundle$S$java_util_Locale',  function (baseName, locale) {
return $I$(7,"getBundle$S$java_util_Locale$java_util_ResourceBundle_Control",[baseName, locale, $I$(8).$INSTANCE]);
}, 1);

Clazz.newMeth(C$, 'getSupplementary$S$java_util_Locale',  function (baseName, locale) {
return $I$(9,"doPrivileged$java_security_PrivilegedAction",[((P$.LocaleData$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "LocaleData$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var rb=null;
try {
rb=$I$(7,"getBundle$S$java_util_Locale$java_util_ResourceBundle_Control",[this.$finals$.baseName, this.$finals$.locale, $I$(10).$$INSTANCE]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.MissingResourceException")){
} else {
throw e;
}
}
return rb;
});
})()
), Clazz.new_(P$.LocaleData$1.$init$,[this, {locale:locale,baseName:baseName}]))]);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.LocaleData, "LocaleDataResourceBundleControl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.ResourceBundle','.Control']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$INSTANCE','sun.util.resources.LocaleData.LocaleDataResourceBundleControl']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getFormats$S',  function (name) {
return name.indexOf$S(".text.") >= 0 || name.indexOf$S("Time") >= 0  ? $I$(1).FORMAT_CLASS : $I$(1).FORMAT_PROPERTIES;
});

Clazz.newMeth(C$, 'getCandidateLocales$S$java_util_Locale',  function (baseName, locale) {
var candidates=C$.superclazz.prototype.getCandidateLocales$S$java_util_Locale.apply(this, [baseName, locale]);
var list=Clazz.new_($I$(2,1));
var localeString=$I$(3).getSupportedLocaleString$S(baseName);
if (localeString != null  && localeString.length$() != 0 ) {
for (var l=candidates.iterator$(); l.hasNext$(); ) {
var loc=l.next$();
var lstr;
if (loc.getScript$().length$() > 0) {
lstr=loc.toLanguageTag$().replaceAll$S$S("-", "_");
} else {
lstr=loc.toString();
var idx=lstr.indexOf$S("_#");
if (idx >= 0) {
lstr=lstr.substring$I$I(0, idx);
}}if (lstr.length$() != 0 && localeString.indexOf$S(" " + lstr + " " ) == -1 ) {
l.remove$();
}}
}if (locale.getLanguage$() !== "en"  && baseName.contains$CharSequence(".cldr")  && baseName.endsWith$S("TimeZoneNames") ) {
candidates.add$I$O(candidates.size$() - 1, $I$(4).ENGLISH);
}return candidates;
});

Clazz.newMeth(C$, 'getFallbackLocale$S$java_util_Locale',  function (baseName, locale) {
if (baseName == null  || locale == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return null;
});

Clazz.newMeth(C$, 'toBundleName$S$java_util_Locale',  function (baseName, locale) {
var newBaseName=baseName;
var lang=locale.getLanguage$();
if (lang.length$() > 0) {
if (baseName.startsWith$S($I$(5).JRE.getUtilResourcesPackage$()) || baseName.startsWith$S($I$(5).JRE.getTextResourcesPackage$()) ) {
Clazz.assert(C$, this, function(){return $I$(5).JRE.getUtilResourcesPackage$().length$() == $I$(5).JRE.getTextResourcesPackage$().length$()});
var index=$I$(5).JRE.getUtilResourcesPackage$().length$();
if (baseName.indexOf$S$I(".cldr", index) > 0) {
index+=".cldr".length$();
}newBaseName=baseName.substring$I$I(0, index + 1) + lang + baseName.substring$I(index) ;
}}return C$.superclazz.prototype.toBundleName$S$java_util_Locale.apply(this, [newBaseName, locale]);
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.$INSTANCE=Clazz.new_(C$);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LocaleData, "SupplementaryResourceBundleControl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.util.resources.LocaleData','.LocaleDataResourceBundleControl']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$$INSTANCE','sun.util.resources.LocaleData.SupplementaryResourceBundleControl']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getCandidateLocales$S$java_util_Locale',  function (baseName, locale) {
return $I$(6,"asList$OA",[Clazz.array($I$(4), -1, [locale])]);
});

Clazz.newMeth(C$, 'getTimeToLive$S$java_util_Locale',  function (baseName, locale) {
Clazz.assert(C$, this, function(){return baseName.contains$CharSequence("JavaTimeSupplementary")});
return -1;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.$$INSTANCE=Clazz.new_(C$);
};
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
