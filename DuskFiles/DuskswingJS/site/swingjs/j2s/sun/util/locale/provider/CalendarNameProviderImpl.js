(function(){var P$=Clazz.newPackage("sun.util.locale.provider"),p$1={},I$=[[0,'sun.util.locale.provider.LocaleProviderAdapter','java.util.TreeMap',['sun.util.locale.provider.CalendarNameProviderImpl','.LengthBasedComparator'],'java.util.Locale',['sun.util.locale.provider.LocaleProviderAdapter','.Type'],'StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CalendarNameProviderImpl", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.spi.CalendarNameProvider', 'sun.util.locale.provider.AvailableLanguageTags');
C$.$classes$=[['LengthBasedComparator',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['type','sun.util.locale.provider.LocaleProviderAdapter.Type','langtags','java.util.Set']]
,['O',['REST_OF_STYLES','int[]']]]

Clazz.newMeth(C$, 'c$$sun_util_locale_provider_LocaleProviderAdapter_Type$java_util_Set',  function (type, langtags) {
Clazz.super_(C$, this);
this.type=type;
this.langtags=langtags;
}, 1);

Clazz.newMeth(C$, 'getDisplayName$S$I$I$I$java_util_Locale',  function (calendarType, field, value, style, locale) {
return this.getDisplayNameImpl$S$I$I$I$java_util_Locale$Z(calendarType, field, value, style, locale, false);
});

Clazz.newMeth(C$, 'getJavaTimeDisplayName$S$I$I$I$java_util_Locale',  function (calendarType, field, value, style, locale) {
return this.getDisplayNameImpl$S$I$I$I$java_util_Locale$Z(calendarType, field, value, style, locale, true);
});

Clazz.newMeth(C$, 'getDisplayNameImpl$S$I$I$I$java_util_Locale$Z',  function (calendarType, field, value, style, locale, javatime) {
var name=null;
var key=p$1.getResourceKey$S$I$I$Z.apply(this, [calendarType, field, style, javatime]);
if (key != null ) {
var lr=$I$(1).forType$sun_util_locale_provider_LocaleProviderAdapter_Type(this.type).getLocaleResources$java_util_Locale(locale);
var strings=javatime ? lr.getJavaTimeNames$S(key) : lr.getCalendarNames$S(key);
if (strings != null  && strings.length > 0 ) {
if (field == 7 || field == 1 ) {
--value;
}if (value < 0 || value >= strings.length ) {
return null;
}name=strings[value];
if (name.length$() == 0 && (style == 32769 || style == 32770  || style == 32772 ) ) {
name=this.getDisplayName$S$I$I$I$java_util_Locale(calendarType, field, value, p$1.getBaseStyle$I.apply(this, [style]), locale);
}}}return name;
});

Clazz.newMeth(C$, 'getDisplayNames$S$I$I$java_util_Locale',  function (calendarType, field, style, locale) {
var names;
if (style == 0) {
names=p$1.getDisplayNamesImpl$S$I$I$java_util_Locale$Z.apply(this, [calendarType, field, 1, locale, false]);
for (var st, $st = 0, $$st = C$.REST_OF_STYLES; $st<$$st.length&&((st=($$st[$st])),1);$st++) {
names.putAll$java_util_Map(p$1.getDisplayNamesImpl$S$I$I$java_util_Locale$Z.apply(this, [calendarType, field, st, locale, false]));
}
} else {
names=p$1.getDisplayNamesImpl$S$I$I$java_util_Locale$Z.apply(this, [calendarType, field, style, locale, false]);
}return names.isEmpty$() ? null : names;
});

Clazz.newMeth(C$, 'getJavaTimeDisplayNames$S$I$I$java_util_Locale',  function (calendarType, field, style, locale) {
var names;
names=p$1.getDisplayNamesImpl$S$I$I$java_util_Locale$Z.apply(this, [calendarType, field, style, locale, true]);
return names.isEmpty$() ? null : names;
});

Clazz.newMeth(C$, 'getDisplayNamesImpl$S$I$I$java_util_Locale$Z',  function (calendarType, field, style, locale, javatime) {
var key=p$1.getResourceKey$S$I$I$Z.apply(this, [calendarType, field, style, javatime]);
var map=Clazz.new_([$I$(3).INSTANCE],$I$(2,1).c$$java_util_Comparator);
if (key != null ) {
var lr=$I$(1).forType$sun_util_locale_provider_LocaleProviderAdapter_Type(this.type).getLocaleResources$java_util_Locale(locale);
var strings=javatime ? lr.getJavaTimeNames$S(key) : lr.getCalendarNames$S(key);
if (strings != null ) {
if (!p$1.hasDuplicates$SA.apply(this, [strings])) {
if (field == 1) {
if (strings.length > 0) {
map.put$O$O(strings[0], Integer.valueOf$I(1));
}} else {
var base=(field == 7) ? 1 : 0;
for (var i=0; i < strings.length; i++) {
var name=strings[i];
if (name.length$() == 0) {
continue;
}map.put$O$O(name, Integer.valueOf$I(base + i));
}
}}}}return map;
}, p$1);

Clazz.newMeth(C$, 'getBaseStyle$I',  function (style) {
return style & ~(32768);
}, p$1);

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
return $I$(1).toLocaleArray$java_util_Set(this.langtags);
});

Clazz.newMeth(C$, 'isSupportedLocale$java_util_Locale',  function (locale) {
if ($I$(4).ROOT.equals$O(locale)) {
return true;
}var calendarType=null;
if (locale.hasExtensions$()) {
calendarType=locale.getUnicodeLocaleType$S("ca");
locale=locale.stripExtensions$();
}if (calendarType != null ) {
switch (calendarType) {
case "buddhist":
case "japanese":
case "gregory":
case "islamic":
case "roc":
break;
default:
return false;
}
}if (this.langtags.contains$O(locale.toLanguageTag$())) {
return true;
}if (this.type === $I$(5).JRE ) {
var oldname=locale.toString().replace$C$C("_", "-");
return this.langtags.contains$O(oldname);
}return false;
});

Clazz.newMeth(C$, 'getAvailableLanguageTags$',  function () {
return this.langtags;
});

Clazz.newMeth(C$, 'hasDuplicates$SA',  function (strings) {
var len=strings.length;
for (var i=0; i < len - 1; i++) {
var a=strings[i];
if (a != null ) {
for (var j=i + 1; j < len; j++) {
if (a.equals$O(strings[j])) {
return true;
}}
}}
return false;
}, p$1);

Clazz.newMeth(C$, 'getResourceKey$S$I$I$Z',  function (type, field, style, javatime) {
var baseStyle=p$1.getBaseStyle$I.apply(this, [style]);
var isStandalone=(style != baseStyle);
if ("gregory".equals$O(type)) {
type=null;
}var isNarrow=(baseStyle == 4);
var key=Clazz.new_($I$(6,1));
if (javatime) {
key.append$S("java.time.");
}switch (field) {
case 0:
if (type != null ) {
key.append$S(type).append$C(".");
}if (isNarrow) {
key.append$S("narrow.");
} else {
if (this.type === $I$(5).JRE ) {
if (javatime) {
if (baseStyle == 2) {
key.append$S("long.");
}}if (baseStyle == 1) {
key.append$S("short.");
}} else {
if (baseStyle == 2) {
key.append$S("long.");
}}}key.append$S("Eras");
break;
case 1:
if (!isNarrow) {
key.append$S(type).append$S(".FirstYear");
}break;
case 2:
if ("islamic".equals$O(type)) {
key.append$S(type).append$C(".");
}if (isStandalone) {
key.append$S("standalone.");
}key.append$S("Month").append$S(p$1.toStyleName$I.apply(this, [baseStyle]));
break;
case 7:
if (isStandalone && isNarrow ) {
key.append$S("standalone.");
}key.append$S("Day").append$S(p$1.toStyleName$I.apply(this, [baseStyle]));
break;
case 9:
if (isNarrow) {
key.append$S("narrow.");
}key.append$S("AmPmMarkers");
break;
}
return key.length$() > 0 ? key.toString() : null;
}, p$1);

Clazz.newMeth(C$, 'toStyleName$I',  function (baseStyle) {
switch (baseStyle) {
case 1:
return "Abbreviations";
case 4:
return "Narrows";
}
return "Names";
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.REST_OF_STYLES=Clazz.array(Integer.TYPE, -1, [32769, 2, 32770, 4, 32772]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.CalendarNameProviderImpl, "LengthBasedComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['INSTANCE','sun.util.locale.provider.CalendarNameProviderImpl.LengthBasedComparator']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['compare$S$S','compare$O$O'],  function (o1, o2) {
var n=o2.length$() - o1.length$();
return (n == 0) ? o1.compareTo$S(o2) : n;
});

C$.$static$=function(){C$.$static$=0;
C$.INSTANCE=Clazz.new_(C$);
};
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:57 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
