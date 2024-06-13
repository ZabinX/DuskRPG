(function(){var P$=Clazz.newPackage("sun.util.locale.provider"),p$1={},I$=[[0,'java.lang.ref.ReferenceQueue','java.util.HashMap','sun.util.resources.LocaleData','java.util.LinkedHashSet',['sun.util.locale.provider.LocaleProviderAdapter','.Type'],'sun.util.calendar.ZoneInfo','java.util.Calendar','sun.util.locale.provider.CalendarDataUtility','java.text.MessageFormat','StringBuilder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LocaleResources");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.referenceQueue=Clazz.new_($I$(1,1));
this.cache=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['locale','java.util.Locale','localeData','sun.util.resources.LocaleData','type','sun.util.locale.provider.LocaleProviderAdapter.Type','referenceQueue','java.lang.ref.ReferenceQueue','cache','java.util.HashMap']]
,['O',['NULLOBJECT','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$sun_util_locale_provider_ResourceBundleBasedAdapter$java_util_Locale',  function (adapter, locale) {
;C$.$init$.apply(this);
this.locale=locale;
this.localeData=adapter.getLocaleData$();
this.type=(adapter).getAdapterType$();
}, 1);

Clazz.newMeth(C$, 'getBreakIteratorInfo$S',  function (key) {
var biInfo;
var cacheKey="BII." + key;
biInfo=this.cache.get$O(cacheKey);
if (biInfo == null ) {
biInfo=$I$(3).getBreakIteratorInfo$java_util_Locale(this.locale).getObject$S(key);
this.cache.put$O$O(cacheKey, biInfo);
}return biInfo;
});

Clazz.newMeth(C$, 'getCalendarData$S',  function (key) {
var caldata;
var cacheKey="CALD." + key;
caldata=this.cache.get$O(cacheKey);
if ((caldata == null )) {
var rb=$I$(3).getCalendarData$java_util_Locale(this.locale);
if (rb.containsKey$S(key)) {
caldata=Integer.valueOf$I(Integer.parseInt$S(rb.getString$S(key)));
} else {
caldata=Integer.valueOf$I(0);
}this.cache.put$O$O(cacheKey, caldata);
}return (caldata).$c();
});

Clazz.newMeth(C$, 'getCollationData$',  function () {
var key="Rule";
var coldata="";
coldata=this.cache.get$O("COLD");
if (coldata == null ) {
var rb=$I$(3).getCollationData$java_util_Locale(this.locale);
if (rb.containsKey$S(key)) {
coldata=rb.getString$S(key);
}this.cache.put$O$O("COLD", coldata);
}return coldata;
});

Clazz.newMeth(C$, 'getDecimalFormatSymbolsData$',  function () {
var dfsdata;
dfsdata=this.cache.get$O("DFSD");
if (dfsdata == null ) {
var rb=$I$(3).getNumberFormatData$java_util_Locale(this.locale);
dfsdata=Clazz.array(java.lang.Object, [3]);
var numElemKey;
var numberType=this.locale.getUnicodeLocaleType$S("nu");
if (numberType != null ) {
numElemKey=numberType + ".NumberElements";
if (rb.containsKey$S(numElemKey)) {
dfsdata[0]=rb.getStringArray$S(numElemKey);
}}if (dfsdata[0] == null  && rb.containsKey$S("DefaultNumberingSystem") ) {
numElemKey=rb.getString$S("DefaultNumberingSystem") + ".NumberElements";
if (rb.containsKey$S(numElemKey)) {
dfsdata[0]=rb.getStringArray$S(numElemKey);
}}if (dfsdata[0] == null ) {
dfsdata[0]=rb.getStringArray$S("NumberElements");
}this.cache.put$O$O("DFSD", dfsdata);
}return dfsdata;
});

Clazz.newMeth(C$, 'getCurrencyName$S',  function (key) {
var currencyName=null;
var cacheKey="CN." + key;
currencyName=this.cache.get$O(cacheKey);
if (currencyName != null ) {
return currencyName;
}var olrb=$I$(3).getCurrencyNames$java_util_Locale(this.locale);
if (olrb.containsKey$S(key)) {
currencyName=olrb.getObject$S(key);
this.cache.put$O$O(cacheKey, currencyName);
}return currencyName;
});

Clazz.newMeth(C$, 'getLocaleName$S',  function (key) {
var localeName=null;
var cacheKey="LN." + key;
localeName=this.cache.get$O(cacheKey);
if (localeName != null ) {
return localeName;
}var olrb=$I$(3).getLocaleNames$java_util_Locale(this.locale);
if (olrb.containsKey$S(key)) {
localeName=olrb.getObject$S(key);
this.cache.put$O$O(cacheKey, localeName);
}return localeName;
});

Clazz.newMeth(C$, 'getTimeZoneNames$S$I',  function (key, size) {
var names=null;
var cacheKey="TZN." + size + '.' + key ;
names=this.cache.get$O(cacheKey);
if (names == null ) {
var tznb=$I$(3).getTimeZoneNames$java_util_Locale(this.locale);
if (tznb.containsKey$S(key)) {
names=tznb.getStringArray$S$I(key, size);
this.cache.put$O$O(cacheKey, names);
}}return names;
});

Clazz.newMeth(C$, 'getZoneIDs$',  function () {
var zoneIDs=null;
zoneIDs=this.cache.get$O("ZID");
if (zoneIDs == null ) {
var rb=$I$(3).getTimeZoneNames$java_util_Locale(this.locale);
zoneIDs=rb.keySet$();
this.cache.put$O$O("ZID", zoneIDs);
}return zoneIDs;
});

Clazz.newMeth(C$, 'getZoneStrings$',  function () {
var rb=$I$(3).getTimeZoneNames$java_util_Locale(this.locale);
var keyset=this.getZoneIDs$();
var value=Clazz.new_($I$(4,1));
for (var key, $key = keyset.iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
value.add$O(rb.getStringArray$S(key));
}
if (this.type === $I$(5).CLDR ) {
var aliases=$I$(6).getAliasTable$();
for (var alias, $alias = aliases.keySet$().iterator$(); $alias.hasNext$()&&((alias=($alias.next$())),1);) {
if (!keyset.contains$O(alias)) {
var tzid=aliases.get$O(alias);
if (keyset.contains$O(tzid)) {
var val=rb.getStringArray$S(tzid);
val[0]=alias;
value.add$O(val);
}}}
}return value.toArray$OA(Clazz.array(String, [0, null]));
});

Clazz.newMeth(C$, 'getCalendarNames$S',  function (key) {
var names=null;
var cacheKey="CALN." + key;
names=this.cache.get$O(cacheKey);
if (names == null ) {
var rb=$I$(3).getDateFormatData$java_util_Locale(this.locale);
if (rb.containsKey$S(key)) {
names=rb.getStringArray$S(key);
this.cache.put$O$O(cacheKey, names);
}}return names;
});

Clazz.newMeth(C$, 'getJavaTimeNames$S',  function (key) {
var names=null;
var cacheKey="CALN." + key;
names=this.cache.get$O(cacheKey);
if (names == null ) {
var rb=this.getJavaTimeFormatData$();
if (rb.containsKey$S(key)) {
names=rb.getStringArray$S(key);
this.cache.put$O$O(cacheKey, names);
}}return names;
});

Clazz.newMeth(C$, 'getDateTimePattern$I$I$java_util_Calendar',  function (timeStyle, dateStyle, cal) {
if (cal == null ) {
cal=$I$(7).getInstance$java_util_Locale(this.locale);
}return p$1.getDateTimePattern$S$I$I$S.apply(this, [null, timeStyle, dateStyle, "gregory"]);
});

Clazz.newMeth(C$, 'getJavaTimeDateTimePattern$I$I$S',  function (timeStyle, dateStyle, calType) {
calType=$I$(8).normalizeCalendarType$S(calType);
var pattern;
pattern=p$1.getDateTimePattern$S$I$I$S.apply(this, ["java.time.", timeStyle, dateStyle, calType]);
if (pattern == null ) {
pattern=p$1.getDateTimePattern$S$I$I$S.apply(this, [null, timeStyle, dateStyle, calType]);
}return pattern;
});

Clazz.newMeth(C$, 'getDateTimePattern$S$I$I$S',  function (prefix, timeStyle, dateStyle, calType) {
var pattern;
var timePattern=null;
var datePattern=null;
if (timeStyle >= 0) {
if (prefix != null ) {
timePattern=p$1.getDateTimePattern$S$S$I$S.apply(this, [prefix, "TimePatterns", timeStyle, calType]);
}if (timePattern == null ) {
timePattern=p$1.getDateTimePattern$S$S$I$S.apply(this, [null, "TimePatterns", timeStyle, calType]);
}}if (dateStyle >= 0) {
if (prefix != null ) {
datePattern=p$1.getDateTimePattern$S$S$I$S.apply(this, [prefix, "DatePatterns", dateStyle, calType]);
}if (datePattern == null ) {
datePattern=p$1.getDateTimePattern$S$S$I$S.apply(this, [null, "DatePatterns", dateStyle, calType]);
}}if (timeStyle >= 0) {
if (dateStyle >= 0) {
var dateTimePattern=null;
if (prefix != null ) {
dateTimePattern=p$1.getDateTimePattern$S$S$I$S.apply(this, [prefix, "DateTimePatterns", 0, calType]);
}if (dateTimePattern == null ) {
dateTimePattern=p$1.getDateTimePattern$S$S$I$S.apply(this, [null, "DateTimePatterns", 0, calType]);
}switch (dateTimePattern) {
case "{1} {0}":
pattern=datePattern + " " + timePattern ;
break;
case "{0} {1}":
pattern=timePattern + " " + datePattern ;
break;
default:
pattern=$I$(9,"format$S$OA",[dateTimePattern, Clazz.array(java.lang.Object, -1, [timePattern, datePattern])]);
break;
}
} else {
pattern=timePattern;
}} else if (dateStyle >= 0) {
pattern=datePattern;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No date or time style specified"]);
}return pattern;
}, p$1);

Clazz.newMeth(C$, 'getNumberPatterns$',  function () {
var numberPatterns=null;
numberPatterns=this.cache.get$O("NP");
if (numberPatterns == null ) {
var resource=$I$(3).getNumberFormatData$java_util_Locale(this.locale);
numberPatterns=resource.getStringArray$S("NumberPatterns");
this.cache.put$O$O("NP", numberPatterns);
}return numberPatterns;
});

Clazz.newMeth(C$, 'getJavaTimeFormatData$',  function () {
var rb=$I$(3).getDateFormatData$java_util_Locale(this.locale);
if (Clazz.instanceOf(rb, "sun.util.resources.ParallelListResourceBundle")) {
this.localeData.setSupplementary$sun_util_resources_ParallelListResourceBundle(rb);
}return rb;
});

Clazz.newMeth(C$, 'getDateTimePattern$S$S$I$S',  function (prefix, key, styleIndex, calendarType) {
var sb=Clazz.new_($I$(10,1));
if (prefix != null ) {
sb.append$S(prefix);
}if (!"gregory".equals$O(calendarType)) {
sb.append$S(calendarType).append$C(".");
}sb.append$S(key);
var resourceKey=sb.toString();
var cacheKey=sb.insert$I$S(0, "DTP.").toString();
var value=this.cache.get$O(cacheKey);
if (value == null ) {
var r=(prefix != null ) ? this.getJavaTimeFormatData$() : $I$(3).getDateFormatData$java_util_Locale(this.locale);
if (r.containsKey$S(resourceKey)) {
value=r.getStringArray$S(resourceKey);
} else {
Clazz.assert(C$, this, function(){return !resourceKey.equals$O(key)});
if (r.containsKey$S(key)) {
value=r.getStringArray$S(key);
}}this.cache.put$O$O(cacheKey, value);
}if (value === C$.NULLOBJECT ) {
Clazz.assert(C$, this, function(){return prefix != null });
return null;
}return (value)[styleIndex];
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.NULLOBJECT= Clazz.new_();
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
