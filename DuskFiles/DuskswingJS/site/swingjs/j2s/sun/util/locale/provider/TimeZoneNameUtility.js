(function(){var P$=Clazz.newPackage("sun.util.locale.provider"),I$=[[0,'sun.util.calendar.ZoneInfo','java.util.concurrent.ConcurrentHashMap','java.lang.ref.SoftReference','sun.util.locale.provider.LocaleProviderAdapter','java.util.spi.TimeZoneNameProvider','java.util.LinkedList','sun.util.locale.provider.LocaleServiceProviderPool',['sun.util.locale.provider.TimeZoneNameUtility','.TimeZoneNameGetter'],['sun.util.locale.provider.TimeZoneNameUtility','.TimeZoneNameArrayGetter']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TimeZoneNameUtility", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['TimeZoneNameArrayGetter',10],['TimeZoneNameGetter',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['cachedZoneData','java.util.concurrent.ConcurrentHashMap','cachedDisplayNames','java.util.Map']]]

Clazz.newMeth(C$, 'getZoneStrings$java_util_Locale',  function (locale) {
var zones;
var data=C$.cachedZoneData.get$O(locale);
if (data == null  || ((zones=data.get$()) == null ) ) {
zones=C$.loadZoneStrings$java_util_Locale(locale);
data=Clazz.new_($I$(3,1).c$$O,[zones]);
C$.cachedZoneData.put$O$O(locale, data);
}return zones;
}, 1);

Clazz.newMeth(C$, 'loadZoneStrings$java_util_Locale',  function (locale) {
var adapter=$I$(4,"getAdapter$Class$java_util_Locale",[Clazz.getClass($I$(5)), locale]);
var provider=adapter.getTimeZoneNameProvider$();
if (Clazz.instanceOf(provider, "sun.util.locale.provider.TimeZoneNameProviderImpl")) {
return (provider).getZoneStrings$java_util_Locale(locale);
}var zoneIDs=$I$(4).forJRE$().getLocaleResources$java_util_Locale(locale).getZoneIDs$();
var zones=Clazz.new_($I$(6,1));
for (var key, $key = zoneIDs.iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var names=C$.retrieveDisplayNamesImpl$S$java_util_Locale(key, locale);
if (names != null ) {
zones.add$O(names);
}}
var zonesArray=Clazz.array(String, [zones.size$(), null]);
return zones.toArray$OA(zonesArray);
}, 1);

Clazz.newMeth(C$, 'retrieveDisplayNames$S$java_util_Locale',  function (id, locale) {
if (id == null  || locale == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return C$.retrieveDisplayNamesImpl$S$java_util_Locale(id, locale);
}, 1);

Clazz.newMeth(C$, 'retrieveGenericDisplayName$S$I$java_util_Locale',  function (id, style, locale) {
var pool=$I$(7,"getPool$Class",[Clazz.getClass($I$(5))]);
return pool.getLocalizedObject$sun_util_locale_provider_LocaleServiceProviderPool_LocalizedObjectGetter$java_util_Locale$S$OA($I$(8).INSTANCE, locale, "generic", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(style), id]));
}, 1);

Clazz.newMeth(C$, 'retrieveDisplayName$S$Z$I$java_util_Locale',  function (id, daylight, style, locale) {
var pool=$I$(7,"getPool$Class",[Clazz.getClass($I$(5))]);
return pool.getLocalizedObject$sun_util_locale_provider_LocaleServiceProviderPool_LocalizedObjectGetter$java_util_Locale$S$OA($I$(8).INSTANCE, locale, daylight ? "dst" : "std", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(style), id]));
}, 1);

Clazz.newMeth(C$, 'retrieveDisplayNamesImpl$S$java_util_Locale',  function (id, locale) {
var pool=$I$(7,"getPool$Class",[Clazz.getClass($I$(5))]);
var ref=C$.cachedDisplayNames.get$O(id);
if (ref != null ) {
var perLocale=ref.get$();
if (perLocale != null ) {
var names=perLocale.get$O(locale);
if (names != null ) {
return names;
}names=pool.getLocalizedObject$sun_util_locale_provider_LocaleServiceProviderPool_LocalizedObjectGetter$java_util_Locale$S$OA($I$(9).INSTANCE, locale, id, Clazz.array(java.lang.Object, -1, []));
if (names != null ) {
perLocale.put$O$O(locale, names);
}return names;
}}var names=pool.getLocalizedObject$sun_util_locale_provider_LocaleServiceProviderPool_LocalizedObjectGetter$java_util_Locale$S$OA($I$(9).INSTANCE, locale, id, Clazz.array(java.lang.Object, -1, []));
if (names != null ) {
var perLocale=Clazz.new_($I$(2,1));
perLocale.put$O$O(locale, names);
ref=Clazz.new_($I$(3,1).c$$O,[perLocale]);
C$.cachedDisplayNames.put$O$O(id, ref);
}return names;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.cachedZoneData=Clazz.new_($I$(2,1));
C$.cachedDisplayNames=Clazz.new_($I$(2,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.TimeZoneNameUtility, "TimeZoneNameArrayGetter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['sun.util.locale.provider.LocaleServiceProviderPool','sun.util.locale.provider.LocaleServiceProviderPool.LocalizedObjectGetter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['INSTANCE','sun.util.locale.provider.TimeZoneNameUtility.TimeZoneNameArrayGetter']]]

Clazz.newMeth(C$, ['getObject$java_util_spi_TimeZoneNameProvider$java_util_Locale$S$OA','getObject$java_util_spi_LocaleServiceProvider$java_util_Locale$S$OA'],  function (timeZoneNameProvider, locale, requestID, params) {
Clazz.assert(C$, this, function(){return params.length == 0});
var names=C$.buildZoneStrings$java_util_spi_TimeZoneNameProvider$java_util_Locale$S(timeZoneNameProvider, locale, requestID);
if (names == null ) {
var aliases=$I$(1).getAliasTable$();
if (aliases != null ) {
var canonicalID=aliases.get$O(requestID);
if (canonicalID != null ) {
names=C$.buildZoneStrings$java_util_spi_TimeZoneNameProvider$java_util_Locale$S(timeZoneNameProvider, locale, canonicalID);
}if (names == null ) {
names=C$.examineAliases$java_util_spi_TimeZoneNameProvider$java_util_Locale$S$java_util_Map(timeZoneNameProvider, locale, canonicalID == null  ? requestID : canonicalID, aliases);
}}}if (names != null ) {
names[0]=requestID;
}return names;
});

Clazz.newMeth(C$, 'examineAliases$java_util_spi_TimeZoneNameProvider$java_util_Locale$S$java_util_Map',  function (tznp, locale, id, aliases) {
if (aliases.containsValue$O(id)) {
for (var entry, $entry = aliases.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
if (entry.getValue$().equals$O(id)) {
var alias=entry.getKey$();
var names=C$.buildZoneStrings$java_util_spi_TimeZoneNameProvider$java_util_Locale$S(tznp, locale, alias);
if (names != null ) {
return names;
}names=C$.examineAliases$java_util_spi_TimeZoneNameProvider$java_util_Locale$S$java_util_Map(tznp, locale, alias, aliases);
if (names != null ) {
return names;
}}}
}return null;
}, 1);

Clazz.newMeth(C$, 'buildZoneStrings$java_util_spi_TimeZoneNameProvider$java_util_Locale$S',  function (tznp, locale, id) {
var names=Clazz.array(String, [5]);
for (var i=1; i <= 4; i++) {
names[i]=tznp.getDisplayName$S$Z$I$java_util_Locale(id, i >= 3, i % 2, locale);
if (names[i] == null ) {
switch (i) {
case 1:
return null;
case 2:
case 4:
names[i]=names[i - 1];
break;
case 3:
names[3]=names[1];
break;
}
}}
return names;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.INSTANCE=Clazz.new_(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TimeZoneNameUtility, "TimeZoneNameGetter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['sun.util.locale.provider.LocaleServiceProviderPool','sun.util.locale.provider.LocaleServiceProviderPool.LocalizedObjectGetter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['INSTANCE','sun.util.locale.provider.TimeZoneNameUtility.TimeZoneNameGetter']]]

Clazz.newMeth(C$, ['getObject$java_util_spi_TimeZoneNameProvider$java_util_Locale$S$OA','getObject$java_util_spi_LocaleServiceProvider$java_util_Locale$S$OA'],  function (timeZoneNameProvider, locale, requestID, params) {
Clazz.assert(C$, this, function(){return params.length == 2});
var style=((params[0]).valueOf()|0);
var tzid=params[1];
var value=C$.getName$java_util_spi_TimeZoneNameProvider$java_util_Locale$S$I$S(timeZoneNameProvider, locale, requestID, style, tzid);
if (value == null ) {
var aliases=$I$(1).getAliasTable$();
if (aliases != null ) {
var canonicalID=aliases.get$O(tzid);
if (canonicalID != null ) {
value=C$.getName$java_util_spi_TimeZoneNameProvider$java_util_Locale$S$I$S(timeZoneNameProvider, locale, requestID, style, canonicalID);
}if (value == null ) {
value=C$.examineAliases$java_util_spi_TimeZoneNameProvider$java_util_Locale$S$S$I$java_util_Map(timeZoneNameProvider, locale, requestID, canonicalID != null  ? canonicalID : tzid, style, aliases);
}}}return value;
});

Clazz.newMeth(C$, 'examineAliases$java_util_spi_TimeZoneNameProvider$java_util_Locale$S$S$I$java_util_Map',  function (tznp, locale, requestID, tzid, style, aliases) {
if (aliases.containsValue$O(tzid)) {
for (var entry, $entry = aliases.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
if (entry.getValue$().equals$O(tzid)) {
var alias=entry.getKey$();
var name=C$.getName$java_util_spi_TimeZoneNameProvider$java_util_Locale$S$I$S(tznp, locale, requestID, style, alias);
if (name != null ) {
return name;
}name=C$.examineAliases$java_util_spi_TimeZoneNameProvider$java_util_Locale$S$S$I$java_util_Map(tznp, locale, requestID, alias, style, aliases);
if (name != null ) {
return name;
}}}
}return null;
}, 1);

Clazz.newMeth(C$, 'getName$java_util_spi_TimeZoneNameProvider$java_util_Locale$S$I$S',  function (timeZoneNameProvider, locale, requestID, style, tzid) {
var value=null;
switch (requestID) {
case "std":
value=timeZoneNameProvider.getDisplayName$S$Z$I$java_util_Locale(tzid, false, style, locale);
break;
case "dst":
value=timeZoneNameProvider.getDisplayName$S$Z$I$java_util_Locale(tzid, true, style, locale);
break;
case "generic":
value=timeZoneNameProvider.getGenericDisplayName$S$I$java_util_Locale(tzid, style, locale);
break;
}
return value;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.INSTANCE=Clazz.new_(C$);
};

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
