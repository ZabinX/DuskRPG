(function(){var P$=Clazz.newPackage("sun.util.locale.provider"),I$=[[0,'sun.util.locale.provider.JRELocaleProviderAdapter','sun.util.locale.provider.SPILocaleProviderAdapter','java.util.concurrent.ConcurrentHashMap','java.util.ArrayList',['sun.util.locale.provider.LocaleProviderAdapter','.Type'],'java.util.Locale','sun.util.cldr.CLDRLocaleProviderAdapter','sun.util.locale.provider.HostLocaleProviderAdapter','sun.util.locale.provider.LocaleServiceProviderPool','sun.util.locale.provider.FallbackLocaleProviderAdapter','java.util.Collections','InternalError',['java.util.ResourceBundle','.Control'],'sun.util.locale.provider.JRELocaleConstants']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LocaleProviderAdapter", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Type',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['adapterPreference','java.util.List','jreLocaleProviderAdapter','sun.util.locale.provider.LocaleProviderAdapter','+spiLocaleProviderAdapter','+cldrLocaleProviderAdapter','+hostLocaleProviderAdapter','+fallbackLocaleProviderAdapter','defaultLocaleProviderAdapter','sun.util.locale.provider.LocaleProviderAdapter.Type','adapterCache','java.util.concurrent.ConcurrentMap']]]

Clazz.newMeth(C$, 'forType$sun_util_locale_provider_LocaleProviderAdapter_Type',  function (type) {
switch (type) {
case $I$(5).JRE:
return C$.jreLocaleProviderAdapter;
case $I$(5).CLDR:
return C$.cldrLocaleProviderAdapter;
case $I$(5).SPI:
return C$.spiLocaleProviderAdapter;
case $I$(5).HOST:
return C$.hostLocaleProviderAdapter;
case $I$(5).FALLBACK:
return C$.fallbackLocaleProviderAdapter;
default:
throw Clazz.new_($I$(12,1).c$$S,["unknown locale data adapter type"]);
}
}, 1);

Clazz.newMeth(C$, 'forJRE$',  function () {
return C$.jreLocaleProviderAdapter;
}, 1);

Clazz.newMeth(C$, 'getResourceBundleBased$',  function () {
for (var type, $type = C$.getAdapterPreference$().iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
if (type === $I$(5).JRE  || type === $I$(5).CLDR   || type === $I$(5).FALLBACK  ) {
return C$.forType$sun_util_locale_provider_LocaleProviderAdapter_Type(type);
}}
throw Clazz.new_($I$(12,1));
}, 1);

Clazz.newMeth(C$, 'getAdapterPreference$',  function () {
return C$.adapterPreference;
}, 1);

Clazz.newMeth(C$, 'getAdapter$Class$java_util_Locale',  function (providerClass, locale) {
var adapter;
var adapterMap=C$.adapterCache.get$O(providerClass);
if (adapterMap != null ) {
if ((adapter=adapterMap.get$O(locale)) != null ) {
return adapter;
}} else {
adapterMap=Clazz.new_($I$(3,1));
C$.adapterCache.putIfAbsent$O$O(providerClass, adapterMap);
}adapter=C$.findAdapter$Class$java_util_Locale(providerClass, locale);
if (adapter != null ) {
adapterMap.putIfAbsent$O$O(locale, adapter);
return adapter;
}var lookupLocales=$I$(13,"getControl$java_util_List",[$I$(13).FORMAT_DEFAULT]).getCandidateLocales$S$java_util_Locale("", locale);
for (var loc, $loc = lookupLocales.iterator$(); $loc.hasNext$()&&((loc=($loc.next$())),1);) {
if (loc.equals$O(locale)) {
continue;
}adapter=C$.findAdapter$Class$java_util_Locale(providerClass, loc);
if (adapter != null ) {
adapterMap.putIfAbsent$O$O(locale, adapter);
return adapter;
}}
adapterMap.putIfAbsent$O$O(locale, C$.fallbackLocaleProviderAdapter);
return C$.fallbackLocaleProviderAdapter;
}, 1);

Clazz.newMeth(C$, 'findAdapter$Class$java_util_Locale',  function (providerClass, locale) {
for (var type, $type = C$.getAdapterPreference$().iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
var adapter=C$.forType$sun_util_locale_provider_LocaleProviderAdapter_Type(type);
var provider=adapter.getLocaleServiceProvider$Class(providerClass);
if (provider != null ) {
if (provider.isSupportedLocale$java_util_Locale(locale)) {
return adapter;
}}}
return null;
}, 1);

Clazz.newMeth(C$, 'isSupportedLocale$java_util_Locale$sun_util_locale_provider_LocaleProviderAdapter_Type$java_util_Set',  function (locale, type, langtags) {
Clazz.assert(C$, this, function(){return type === $I$(5).JRE  || type === $I$(5).CLDR   || type === $I$(5).FALLBACK  });
if ($I$(6).ROOT.equals$O(locale)) {
return true;
}if (type === $I$(5).FALLBACK ) {
return false;
}locale=locale.stripExtensions$();
if (langtags.contains$O(locale.toLanguageTag$())) {
return true;
}if (type === $I$(5).JRE ) {
var oldname=locale.toString().replace$C$C("_", "-");
return langtags.contains$O(oldname) || "ja-JP-JP".equals$O(oldname) || "th-TH-TH".equals$O(oldname) || "no-NO-NY".equals$O(oldname)  ;
}return false;
}, 1);

Clazz.newMeth(C$, 'toLocaleArray$java_util_Set',  function (tags) {
var locs=Clazz.array($I$(6), [tags.size$() + 1]);
var index=0;
locs[index++]=$I$(6).ROOT;
for (var tag, $tag = tags.iterator$(); $tag.hasNext$()&&((tag=($tag.next$())),1);) {
switch (tag) {
case "ja-JP-JP":
locs[index++]=$I$(14).JA_JP_JP;
break;
case "th-TH-TH":
locs[index++]=$I$(14).TH_TH_TH;
break;
default:
locs[index++]=$I$(6).forLanguageTag$S(tag);
break;
}
}
return locs;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.jreLocaleProviderAdapter=Clazz.new_($I$(1,1));
C$.spiLocaleProviderAdapter=Clazz.new_($I$(2,1));
C$.cldrLocaleProviderAdapter=null;
C$.hostLocaleProviderAdapter=null;
C$.fallbackLocaleProviderAdapter=null;
C$.defaultLocaleProviderAdapter=null;
C$.adapterCache=Clazz.new_($I$(3,1));
{
var order=(System.getProperty$S("java.locale.providers"));
var typeList=Clazz.new_($I$(4,1));
if (order != null  && order.length$() != 0 ) {
var types=order.split$S(",");
for (var type, $type = 0, $$type = types; $type<$$type.length&&((type=($$type[$type])),1);$type++) {
try {
var aType=$I$(5,"valueOf$S",[type.trim$().toUpperCase$java_util_Locale($I$(6).ROOT)]);
switch (aType) {
case $I$(5).CLDR:
if (C$.cldrLocaleProviderAdapter == null ) {
C$.cldrLocaleProviderAdapter=Clazz.new_($I$(7,1));
}break;
case $I$(5).HOST:
if (C$.hostLocaleProviderAdapter == null ) {
C$.hostLocaleProviderAdapter=Clazz.new_($I$(8,1));
}break;
}
if (!typeList.contains$O(aType)) {
typeList.add$O(aType);
}} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException") || Clazz.exceptionOf(e,"UnsupportedOperationException")){
$I$(9,"config$Class$S",[Clazz.getClass(C$), e.toString()]);
} else {
throw e;
}
}
}
}if (!typeList.isEmpty$()) {
if (!typeList.contains$O($I$(5).JRE)) {
C$.fallbackLocaleProviderAdapter=Clazz.new_($I$(10,1));
typeList.add$O($I$(5).FALLBACK);
C$.defaultLocaleProviderAdapter=$I$(5).FALLBACK;
} else {
C$.defaultLocaleProviderAdapter=$I$(5).JRE;
}} else {
typeList.add$O($I$(5).JRE);
typeList.add$O($I$(5).SPI);
C$.defaultLocaleProviderAdapter=$I$(5).JRE;
}C$.adapterPreference=$I$(11).unmodifiableList$java_util_List(typeList);
};
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.LocaleProviderAdapter, "Type", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['UTIL_RESOURCES_PACKAGE','TEXT_RESOURCES_PACKAGE']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S$S.apply(this, [null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (util, text) {
;C$.$init$.apply(this);
this.UTIL_RESOURCES_PACKAGE=util;
this.TEXT_RESOURCES_PACKAGE=text;
}, 1);

Clazz.newMeth(C$, 'getUtilResourcesPackage$',  function () {
return this.UTIL_RESOURCES_PACKAGE;
});

Clazz.newMeth(C$, 'getTextResourcesPackage$',  function () {
return this.TEXT_RESOURCES_PACKAGE;
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S$S, "JRE", 0, ["sun.util.resources", "sun.text.resources"]);
Clazz.newEnumConst($vals, C$.c$$S$S, "CLDR", 1, ["sun.util.resources.cldr", "sun.text.resources.cldr"]);
Clazz.newEnumConst($vals, C$.c$, "SPI", 2, []);
Clazz.newEnumConst($vals, C$.c$, "HOST", 3, []);
Clazz.newEnumConst($vals, C$.c$$S$S, "FALLBACK", 4, ["sun.util.resources", "sun.text.resources"]);
};
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
