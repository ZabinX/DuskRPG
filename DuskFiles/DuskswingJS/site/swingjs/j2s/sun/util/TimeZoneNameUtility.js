(function(){var P$=Clazz.newPackage("sun.util"),I$=[[0,'sun.util.calendar.ZoneInfo','java.util.HashMap','java.util.LinkedList','sun.util.locale.provider.LocaleServiceProviderPool','java.util.spi.TimeZoneNameProvider',['sun.util.TimeZoneNameUtility','.TimeZoneNameGetter'],'sun.util.resources.LocaleData']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TimeZoneNameUtility", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['TimeZoneNameGetter',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['cachedBundles','java.util.HashMap','+cachedZoneData']]]

Clazz.newMeth(C$, 'getZoneStrings$java_util_Locale',  function (locale) {
var zones;
var data=C$.cachedZoneData.get$O(locale);
if (data == null ) {
zones=C$.loadZoneStrings$java_util_Locale(locale);
data=zones;
C$.cachedZoneData.put$O$O(locale, data);
}return data;
}, 1);

Clazz.newMeth(C$, 'loadZoneStrings$java_util_Locale',  function (locale) {
var zones=Clazz.new_($I$(3,1));
var rb=C$.getBundle$java_util_Locale(locale);
var keys=rb.getKeys$();
var names=null;
while (keys.hasMoreElements$()){
var key=keys.nextElement$();
names=C$.retrieveDisplayNames$sun_util_resources_OpenListResourceBundle$S$java_util_Locale(rb, key, locale);
if (names != null ) {
zones.add$O(names);
}}
var zonesArray=Clazz.array(String, [zones.size$(), null]);
return zones.toArray$OA(zonesArray);
}, 1);

Clazz.newMeth(C$, 'retrieveDisplayNames$S$java_util_Locale',  function (id, locale) {
var rb=C$.getBundle$java_util_Locale(locale);
return C$.retrieveDisplayNames$sun_util_resources_OpenListResourceBundle$S$java_util_Locale(rb, id, locale);
}, 1);

Clazz.newMeth(C$, 'retrieveDisplayNames$sun_util_resources_OpenListResourceBundle$S$java_util_Locale',  function (rb, id, locale) {
var pool=$I$(4,"getPool$Class",[Clazz.getClass($I$(5))]);
var names=null;
if (pool.hasProviders$()) {
names=pool.getLocalizedObject$sun_util_locale_provider_LocaleServiceProviderPool_LocalizedObjectGetter$java_util_Locale$OA($I$(6).INSTANCE, locale, Clazz.array(java.lang.Object, -1, [rb, id]));
}if (names == null ) {
try {
names=rb.getStringArray$S(id);
} catch (mre) {
if (Clazz.exceptionOf(mre,"java.util.MissingResourceException")){
} else {
throw mre;
}
}
}return names;
}, 1);

Clazz.newMeth(C$, 'getBundle$java_util_Locale',  function (locale) {
var rb;
var data=C$.cachedBundles.get$O(locale);
if (data == null ) {
rb=$I$(7).getTimeZoneNames$java_util_Locale(locale);
data=rb;
C$.cachedBundles.put$O$O(locale, data);
}return data;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.cachedBundles=Clazz.new_($I$(2,1));
C$.cachedZoneData=Clazz.new_($I$(2,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.TimeZoneNameUtility, "TimeZoneNameGetter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['sun.util.locale.provider.LocaleServiceProviderPool','sun.util.locale.provider.LocaleServiceProviderPool.LocalizedObjectGetter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['INSTANCE','sun.util.TimeZoneNameUtility.TimeZoneNameGetter']]]

Clazz.newMeth(C$, ['getObject$java_util_spi_TimeZoneNameProvider$java_util_Locale$S$OA','getObject$java_util_spi_LocaleServiceProvider$java_util_Locale$S$OA'],  function (timeZoneNameProvider, locale, requestID, params) {
Clazz.assert(C$, this, function(){return params.length == 0});
var names=null;
var queryID=requestID;
if (queryID.equals$O("GMT")) {
names=C$.buildZoneStrings$java_util_spi_TimeZoneNameProvider$java_util_Locale$S(timeZoneNameProvider, locale, queryID);
} else {
var aliases=$I$(1).getAliasTable$();
if (aliases != null ) {
if (aliases.containsKey$O(queryID)) {
var prevID=queryID;
while ((queryID=aliases.get$O(queryID)) != null ){
prevID=queryID;
}
queryID=prevID;
}names=C$.buildZoneStrings$java_util_spi_TimeZoneNameProvider$java_util_Locale$S(timeZoneNameProvider, locale, queryID);
if (names == null ) {
names=C$.examineAliases$java_util_spi_TimeZoneNameProvider$java_util_Locale$S$java_util_Map$java_util_Set(timeZoneNameProvider, locale, queryID, aliases, aliases.entrySet$());
}}}if (names != null ) {
names[0]=requestID;
}return names;
});

Clazz.newMeth(C$, 'examineAliases$java_util_spi_TimeZoneNameProvider$java_util_Locale$S$java_util_Map$java_util_Set',  function (tznp, locale, id, aliases, aliasesSet) {
if (aliases.containsValue$O(id)) {
for (var entry, $entry = aliasesSet.iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
if (entry.getValue$().equals$O(id)) {
var alias=entry.getKey$();
var names=C$.buildZoneStrings$java_util_spi_TimeZoneNameProvider$java_util_Locale$S(tznp, locale, alias);
if (names != null ) {
return names;
} else {
names=C$.examineAliases$java_util_spi_TimeZoneNameProvider$java_util_Locale$S$java_util_Map$java_util_Set(tznp, locale, alias, aliases, aliasesSet);
if (names != null ) {
return names;
}}}}
}return null;
}, 1);

Clazz.newMeth(C$, 'buildZoneStrings$java_util_spi_TimeZoneNameProvider$java_util_Locale$S',  function (tznp, locale, id) {
var names=Clazz.array(String, [5]);
for (var i=1; i <= 4; i++) {
names[i]=tznp.getDisplayName$S$Z$I$java_util_Locale(id, i >= 3, i % 2, locale);
if (i >= 3 && names[i] == null  ) {
names[i]=names[i - 2];
}}
if (names[1] == null ) {
names=null;
}return names;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.INSTANCE=Clazz.new_(C$);
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
