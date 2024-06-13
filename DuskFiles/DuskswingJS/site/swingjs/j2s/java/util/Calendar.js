(function(){var P$=java.util,p$1={},p$2={},I$=[[0,'java.util.Calendar','java.util.Locale','java.util.TimeZone','java.util.GregorianCalendar','sun.util.BuddhistCalendar','java.util.JapaneseImperialCalendar','java.util.HashSet','java.util.Collections','java.util.concurrent.ConcurrentHashMap',['java.util.Locale','.Category'],'sun.util.locale.provider.LocaleProviderAdapter','sun.util.spi.CalendarProvider','java.text.DateFormat','sun.util.locale.provider.CalendarDataUtility','java.text.DateFormatSymbols','java.util.HashMap',['java.util.Calendar','.AvailableCalendarTypes'],'InternalError','StringBuilder','java.time.Instant']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Calendar", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.io.Serializable', 'Cloneable', 'Comparable']);
C$.$classes$=[['Builder',9],['AvailableCalendarTypes',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lenient=true;
this.sharedZone=false;
this.nextStamp=2;
this.serialVersionOnStream=1;
},1);

C$.$fields$=[['Z',['isTimeSet','areFieldsSet','areAllFieldsSet','lenient','sharedZone'],'I',['firstDayOfWeek','minimalDaysInFirstWeek','nextStamp','serialVersionOnStream'],'J',['time'],'O',['fields','int[]','isSet','boolean[]','stamp','int[]','zone','java.util.TimeZone']]
,['O',['cachedLocaleData','java.util.concurrent.ConcurrentMap','FIELD_NAME','String[]']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$java_util_TimeZone$java_util_Locale.apply(this, [$I$(3).getDefaultRef$(), $I$(2,"getDefault$java_util_Locale_Category",[$I$(10).FORMAT])]);
this.sharedZone=true;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_TimeZone$java_util_Locale',  function (zone, aLocale) {
;C$.$init$.apply(this);
this.fields=Clazz.array(Integer.TYPE, [17]);
this.isSet=Clazz.array(Boolean.TYPE, [17]);
this.stamp=Clazz.array(Integer.TYPE, [17]);
this.zone=zone;
p$2.setWeekCountData$java_util_Locale.apply(this, [aLocale]);
}, 1);

Clazz.newMeth(C$, 'getInstance$',  function () {
return C$.createCalendar$java_util_TimeZone$java_util_Locale($I$(3).getDefault$(), $I$(2,"getDefault$java_util_Locale_Category",[$I$(10).FORMAT]));
}, 1);

Clazz.newMeth(C$, 'getInstance$java_util_TimeZone',  function (zone) {
return C$.createCalendar$java_util_TimeZone$java_util_Locale(zone, $I$(2,"getDefault$java_util_Locale_Category",[$I$(10).FORMAT]));
}, 1);

Clazz.newMeth(C$, 'getInstance$java_util_Locale',  function (aLocale) {
return C$.createCalendar$java_util_TimeZone$java_util_Locale($I$(3).getDefault$(), aLocale);
}, 1);

Clazz.newMeth(C$, 'getInstance$java_util_TimeZone$java_util_Locale',  function (zone, aLocale) {
return C$.createCalendar$java_util_TimeZone$java_util_Locale(zone, aLocale);
}, 1);

Clazz.newMeth(C$, 'createCalendar$java_util_TimeZone$java_util_Locale',  function (zone, aLocale) {
var provider=$I$(11,"getAdapter$Class$java_util_Locale",[Clazz.getClass($I$(12)), aLocale]).getCalendarProvider$();
if (provider != null ) {
try {
return provider.getInstance$java_util_TimeZone$java_util_Locale(zone, aLocale);
} catch (iae) {
if (Clazz.exceptionOf(iae,"IllegalArgumentException")){
} else {
throw iae;
}
}
}var cal=null;
if (aLocale.hasExtensions$()) {
var caltype=aLocale.getUnicodeLocaleType$S("ca");
if (caltype != null ) {
switch (caltype) {
case "buddhist":
cal=Clazz.new_($I$(5,1).c$$java_util_TimeZone$java_util_Locale,[zone, aLocale]);
break;
case "japanese":
cal=Clazz.new_($I$(6,1).c$$java_util_TimeZone$java_util_Locale,[zone, aLocale]);
break;
case "gregory":
cal=Clazz.new_($I$(4,1).c$$java_util_TimeZone$java_util_Locale,[zone, aLocale]);
break;
}
}}if (cal == null ) {
if (aLocale.getLanguage$() === "th"  && aLocale.getCountry$() === "TH"  ) {
cal=Clazz.new_($I$(5,1).c$$java_util_TimeZone$java_util_Locale,[zone, aLocale]);
} else if (aLocale.getVariant$() === "JP"  && aLocale.getLanguage$() === "ja"   && aLocale.getCountry$() === "JP"  ) {
cal=Clazz.new_($I$(6,1).c$$java_util_TimeZone$java_util_Locale,[zone, aLocale]);
} else {
cal=Clazz.new_($I$(4,1).c$$java_util_TimeZone$java_util_Locale,[zone, aLocale]);
}}return cal;
}, 1);

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
return $I$(13).getAvailableLocales$();
}, 1);

Clazz.newMeth(C$, 'getTime$',  function () {
return Clazz.new_(java.util.Date.c$$J,[this.getTimeInMillis$()]);
});

Clazz.newMeth(C$, 'setTime$java_util_Date',  function (date) {
this.setTimeInMillis$J(date.getTime$());
});

Clazz.newMeth(C$, 'getTimeInMillis$',  function () {
if (!this.isTimeSet) {
p$2.updateTime.apply(this, []);
}return this.time;
});

Clazz.newMeth(C$, 'setTimeInMillis$J',  function (millis) {
if (Long.$eq(this.time,millis ) && this.isTimeSet  && this.areFieldsSet  && this.areAllFieldsSet  && (Clazz.instanceOf(this.zone, "sun.util.calendar.ZoneInfo"))  && !(this.zone).isDirty$() ) {
return;
}this.time=millis;
this.isTimeSet=true;
this.areFieldsSet=false;
this.computeFields$();
this.areAllFieldsSet=this.areFieldsSet=true;
});

Clazz.newMeth(C$, 'get$I',  function (field) {
this.complete$();
return this.internalGet$I(field);
});

Clazz.newMeth(C$, 'internalGet$I',  function (field) {
return this.fields[field];
});

Clazz.newMeth(C$, 'internalSet$I$I',  function (field, value) {
this.fields[field]=value;
});

Clazz.newMeth(C$, 'set$I$I',  function (field, value) {
if (this.areFieldsSet && !this.areAllFieldsSet ) {
this.computeFields$();
}this.internalSet$I$I(field, value);
this.isTimeSet=false;
this.areFieldsSet=false;
this.isSet[field]=true;
this.stamp[field]=this.nextStamp++;
if (this.nextStamp == 2147483647) {
p$2.adjustStamp.apply(this, []);
}});

Clazz.newMeth(C$, 'set$I$I$I',  function (year, month, date) {
this.set$I$I(1, year);
this.set$I$I(2, month);
this.set$I$I(5, date);
});

Clazz.newMeth(C$, 'set$I$I$I$I$I',  function (year, month, date, hourOfDay, minute) {
this.set$I$I(1, year);
this.set$I$I(2, month);
this.set$I$I(5, date);
this.set$I$I(11, hourOfDay);
this.set$I$I(12, minute);
});

Clazz.newMeth(C$, 'set$I$I$I$I$I$I',  function (year, month, date, hourOfDay, minute, second) {
this.set$I$I(1, year);
this.set$I$I(2, month);
this.set$I$I(5, date);
this.set$I$I(11, hourOfDay);
this.set$I$I(12, minute);
this.set$I$I(13, second);
});

Clazz.newMeth(C$, 'clear$',  function () {
for (var i=0; i < this.fields.length; ) {
this.stamp[i]=this.fields[i]=0;
this.isSet[i++]=false;
}
this.areAllFieldsSet=this.areFieldsSet=false;
this.isTimeSet=false;
});

Clazz.newMeth(C$, 'clear$I',  function (field) {
this.fields[field]=0;
this.stamp[field]=0;
this.isSet[field]=false;
this.areAllFieldsSet=this.areFieldsSet=false;
this.isTimeSet=false;
});

Clazz.newMeth(C$, 'isSet$I',  function (field) {
return this.stamp[field] != 0;
});

Clazz.newMeth(C$, 'getDisplayName$I$I$java_util_Locale',  function (field, style, locale) {
if (!this.checkDisplayNameParams$I$I$I$I$java_util_Locale$I(field, style, 1, 4, locale, 645)) {
return null;
}var calendarType=this.getCalendarType$();
var fieldValue=this.get$I(field);
if (p$2.isStandaloneStyle$I.apply(this, [style]) || p$2.isNarrowFormatStyle$I.apply(this, [style]) ) {
var val=$I$(14).retrieveFieldValueName$S$I$I$I$java_util_Locale(calendarType, field, fieldValue, style, locale);
if (val == null ) {
if (p$2.isNarrowFormatStyle$I.apply(this, [style])) {
val=$I$(14,"retrieveFieldValueName$S$I$I$I$java_util_Locale",[calendarType, field, fieldValue, p$2.toStandaloneStyle$I.apply(this, [style]), locale]);
} else if (p$2.isStandaloneStyle$I.apply(this, [style])) {
val=$I$(14,"retrieveFieldValueName$S$I$I$I$java_util_Locale",[calendarType, field, fieldValue, this.getBaseStyle$I(style), locale]);
}}return val;
}var symbols=$I$(15).getInstance$java_util_Locale(locale);
var strings=p$2.getFieldStrings$I$I$java_text_DateFormatSymbols.apply(this, [field, style, symbols]);
if (strings != null ) {
if (fieldValue < strings.length) {
return strings[fieldValue];
}}return null;
});

Clazz.newMeth(C$, 'getDisplayNames$I$I$java_util_Locale',  function (field, style, locale) {
if (!this.checkDisplayNameParams$I$I$I$I$java_util_Locale$I(field, style, 0, 4, locale, 645)) {
return null;
}var calendarType=this.getCalendarType$();
if (style == 0 || p$2.isStandaloneStyle$I.apply(this, [style])  || p$2.isNarrowFormatStyle$I.apply(this, [style]) ) {
var map;
map=$I$(14).retrieveFieldValueNames$S$I$I$java_util_Locale(calendarType, field, style, locale);
if (map == null ) {
if (p$2.isNarrowFormatStyle$I.apply(this, [style])) {
map=$I$(14,"retrieveFieldValueNames$S$I$I$java_util_Locale",[calendarType, field, p$2.toStandaloneStyle$I.apply(this, [style]), locale]);
} else if (style != 0) {
map=$I$(14,"retrieveFieldValueNames$S$I$I$java_util_Locale",[calendarType, field, this.getBaseStyle$I(style), locale]);
}}return map;
}return p$2.getDisplayNamesImpl$I$I$java_util_Locale.apply(this, [field, style, locale]);
});

Clazz.newMeth(C$, 'getDisplayNamesImpl$I$I$java_util_Locale',  function (field, style, locale) {
var symbols=$I$(15).getInstance$java_util_Locale(locale);
var strings=p$2.getFieldStrings$I$I$java_text_DateFormatSymbols.apply(this, [field, style, symbols]);
if (strings != null ) {
var names=Clazz.new_($I$(16,1));
for (var i=0; i < strings.length; i++) {
if (strings[i].length$() == 0) {
continue;
}names.put$O$O(strings[i], Integer.valueOf$I(i));
}
return names;
}return null;
}, p$2);

Clazz.newMeth(C$, 'checkDisplayNameParams$I$I$I$I$java_util_Locale$I',  function (field, style, minStyle, maxStyle, locale, fieldMask) {
var baseStyle=this.getBaseStyle$I(style);
if (field < 0 || field >= this.fields.length  || baseStyle < minStyle  || baseStyle > maxStyle ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}if (locale == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}return C$.isFieldSet$I$I(fieldMask, field);
});

Clazz.newMeth(C$, 'getFieldStrings$I$I$java_text_DateFormatSymbols',  function (field, style, symbols) {
var baseStyle=this.getBaseStyle$I(style);
if (baseStyle == 4) {
return null;
}var strings=null;
switch (field) {
case 0:
strings=symbols.getEras$();
break;
case 2:
strings=(baseStyle == 2) ? symbols.getMonths$() : symbols.getShortMonths$();
break;
case 7:
strings=(baseStyle == 2) ? symbols.getWeekdays$() : symbols.getShortWeekdays$();
break;
case 9:
strings=symbols.getAmPmStrings$();
break;
}
return strings;
}, p$2);

Clazz.newMeth(C$, 'complete$',  function () {
if (!this.isTimeSet) {
p$2.updateTime.apply(this, []);
}if (!this.areFieldsSet || !this.areAllFieldsSet ) {
this.computeFields$();
this.areAllFieldsSet=this.areFieldsSet=true;
}});

Clazz.newMeth(C$, 'isExternallySet$I',  function (field) {
return this.stamp[field] >= 2;
});

Clazz.newMeth(C$, 'getSetStateFields$',  function () {
var mask=0;
for (var i=0; i < this.fields.length; i++) {
if (this.stamp[i] != 0) {
mask|=1 << i;
}}
return mask;
});

Clazz.newMeth(C$, 'setFieldsComputed$I',  function (fieldMask) {
if (fieldMask == 131071) {
for (var i=0; i < this.fields.length; i++) {
this.stamp[i]=1;
this.isSet[i]=true;
}
this.areFieldsSet=this.areAllFieldsSet=true;
} else {
for (var i=0; i < this.fields.length; i++) {
if ((fieldMask & 1) == 1) {
this.stamp[i]=1;
this.isSet[i]=true;
} else {
if (this.areAllFieldsSet && !this.isSet[i] ) {
this.areAllFieldsSet=false;
}}fieldMask>>>=1;
}
}});

Clazz.newMeth(C$, 'setFieldsNormalized$I',  function (fieldMask) {
if (fieldMask != 131071) {
for (var i=0; i < this.fields.length; i++) {
if ((fieldMask & 1) == 0) {
this.stamp[i]=this.fields[i]=0;
this.isSet[i]=false;
}fieldMask>>=1;
}
}this.areFieldsSet=true;
this.areAllFieldsSet=false;
});

Clazz.newMeth(C$, 'isPartiallyNormalized$',  function () {
return this.areFieldsSet && !this.areAllFieldsSet ;
});

Clazz.newMeth(C$, 'isFullyNormalized$',  function () {
return this.areFieldsSet && this.areAllFieldsSet ;
});

Clazz.newMeth(C$, 'setUnnormalized$',  function () {
this.areFieldsSet=this.areAllFieldsSet=false;
});

Clazz.newMeth(C$, 'isFieldSet$I$I',  function (fieldMask, field) {
return (fieldMask & (1 << field)) != 0;
}, 1);

Clazz.newMeth(C$, 'selectFields$',  function () {
var fieldMask=2;
if (this.stamp[0] != 0) {
fieldMask|=1;
}var dowStamp=this.stamp[7];
var monthStamp=this.stamp[2];
var domStamp=this.stamp[5];
var womStamp=C$.aggregateStamp$I$I(this.stamp[4], dowStamp);
var dowimStamp=C$.aggregateStamp$I$I(this.stamp[8], dowStamp);
var doyStamp=this.stamp[6];
var woyStamp=C$.aggregateStamp$I$I(this.stamp[3], dowStamp);
var bestStamp=domStamp;
if (womStamp > bestStamp) {
bestStamp=womStamp;
}if (dowimStamp > bestStamp) {
bestStamp=dowimStamp;
}if (doyStamp > bestStamp) {
bestStamp=doyStamp;
}if (woyStamp > bestStamp) {
bestStamp=woyStamp;
}if (bestStamp == 0) {
womStamp=this.stamp[4];
dowimStamp=Math.max(this.stamp[8], dowStamp);
woyStamp=this.stamp[3];
bestStamp=Math.max(Math.max(womStamp, dowimStamp), woyStamp);
if (bestStamp == 0) {
bestStamp=domStamp=monthStamp;
}}if (bestStamp == domStamp || (bestStamp == womStamp && this.stamp[4] >= this.stamp[3] )  || (bestStamp == dowimStamp && this.stamp[8] >= this.stamp[3] ) ) {
fieldMask|=4;
if (bestStamp == domStamp) {
fieldMask|=32;
} else {
Clazz.assert(C$, this, function(){return (bestStamp == womStamp || bestStamp == dowimStamp )});
if (dowStamp != 0) {
fieldMask|=128;
}if (womStamp == dowimStamp) {
if (this.stamp[4] >= this.stamp[8]) {
fieldMask|=16;
} else {
fieldMask|=256;
}} else {
if (bestStamp == womStamp) {
fieldMask|=16;
} else {
Clazz.assert(C$, this, function(){return (bestStamp == dowimStamp)});
if (this.stamp[8] != 0) {
fieldMask|=256;
}}}}} else {
Clazz.assert(C$, this, function(){return (bestStamp == doyStamp || bestStamp == woyStamp  || bestStamp == 0 )});
if (bestStamp == doyStamp) {
fieldMask|=64;
} else {
Clazz.assert(C$, this, function(){return (bestStamp == woyStamp)});
if (dowStamp != 0) {
fieldMask|=128;
}fieldMask|=8;
}}var hourOfDayStamp=this.stamp[11];
var hourStamp=C$.aggregateStamp$I$I(this.stamp[10], this.stamp[9]);
bestStamp=(hourStamp > hourOfDayStamp) ? hourStamp : hourOfDayStamp;
if (bestStamp == 0) {
bestStamp=Math.max(this.stamp[10], this.stamp[9]);
}if (bestStamp != 0) {
if (bestStamp == hourOfDayStamp) {
fieldMask|=2048;
} else {
fieldMask|=1024;
if (this.stamp[9] != 0) {
fieldMask|=512;
}}}if (this.stamp[12] != 0) {
fieldMask|=4096;
}if (this.stamp[13] != 0) {
fieldMask|=8192;
}if (this.stamp[14] != 0) {
fieldMask|=16384;
}if (this.stamp[15] >= 2) {
fieldMask|=32768;
}if (this.stamp[16] >= 2) {
fieldMask|=65536;
}return fieldMask;
});

Clazz.newMeth(C$, 'getBaseStyle$I',  function (style) {
return style & ~32768;
});

Clazz.newMeth(C$, 'toStandaloneStyle$I',  function (style) {
return style | 32768;
}, p$2);

Clazz.newMeth(C$, 'isStandaloneStyle$I',  function (style) {
return (style & 32768) != 0;
}, p$2);

Clazz.newMeth(C$, 'isNarrowStyle$I',  function (style) {
return style == 4 || style == 32772 ;
}, p$2);

Clazz.newMeth(C$, 'isNarrowFormatStyle$I',  function (style) {
return style == 4;
}, p$2);

Clazz.newMeth(C$, 'aggregateStamp$I$I',  function (stamp_a, stamp_b) {
if (stamp_a == 0 || stamp_b == 0 ) {
return 0;
}return (stamp_a > stamp_b) ? stamp_a : stamp_b;
}, 1);

Clazz.newMeth(C$, 'getAvailableCalendarTypes$',  function () {
return $I$(17).SET;
}, 1);

Clazz.newMeth(C$, 'getCalendarType$',  function () {
return this.getClass$().getName$();
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) {
return true;
}try {
var that=obj;
return p$2.compareTo$J.apply(this, [C$.getMillisOf$java_util_Calendar(that)]) == 0 && this.lenient == that.lenient   && this.firstDayOfWeek == that.firstDayOfWeek  && this.minimalDaysInFirstWeek == that.minimalDaysInFirstWeek  && this.zone.equals$O(that.zone) ;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return false;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var otheritems=(this.lenient ? 1 : 0) | (this.firstDayOfWeek << 1) | (this.minimalDaysInFirstWeek << 4) | (this.zone.hashCode$() << 7) ;
var t=C$.getMillisOf$java_util_Calendar(this);
return Long.$ival(t) ^ Long.$ival((Long.$sr(t,32))) ^ otheritems ;
});

Clazz.newMeth(C$, 'before$O',  function (when) {
return Clazz.instanceOf(when, "java.util.Calendar") && this.compareTo$java_util_Calendar(when) < 0 ;
});

Clazz.newMeth(C$, 'after$O',  function (when) {
return Clazz.instanceOf(when, "java.util.Calendar") && this.compareTo$java_util_Calendar(when) > 0 ;
});

Clazz.newMeth(C$, ['compareTo$java_util_Calendar','compareTo$O'],  function (anotherCalendar) {
return p$2.compareTo$J.apply(this, [C$.getMillisOf$java_util_Calendar(anotherCalendar)]);
});

Clazz.newMeth(C$, 'roll$I$I',  function (field, amount) {
while (amount > 0){
this.roll$I$Z(field, true);
--amount;
}
while (amount < 0){
this.roll$I$Z(field, false);
++amount;
}
});

Clazz.newMeth(C$, 'setTimeZone$java_util_TimeZone',  function (value) {
this.zone=value;
this.sharedZone=false;
this.areAllFieldsSet=this.areFieldsSet=false;
});

Clazz.newMeth(C$, 'getTimeZone$',  function () {
if (this.sharedZone) {
this.zone=this.zone.clone$();
this.sharedZone=false;
}return this.zone;
});

Clazz.newMeth(C$, 'getZone$',  function () {
return this.zone;
});

Clazz.newMeth(C$, 'setZoneShared$Z',  function (shared) {
this.sharedZone=shared;
});

Clazz.newMeth(C$, 'setLenient$Z',  function (lenient) {
this.lenient=lenient;
});

Clazz.newMeth(C$, 'isLenient$',  function () {
return this.lenient;
});

Clazz.newMeth(C$, 'setFirstDayOfWeek$I',  function (value) {
if (this.firstDayOfWeek == value) {
return;
}this.firstDayOfWeek=value;
p$2.invalidateWeekFields.apply(this, []);
});

Clazz.newMeth(C$, 'getFirstDayOfWeek$',  function () {
return this.firstDayOfWeek;
});

Clazz.newMeth(C$, 'setMinimalDaysInFirstWeek$I',  function (value) {
if (this.minimalDaysInFirstWeek == value) {
return;
}this.minimalDaysInFirstWeek=value;
p$2.invalidateWeekFields.apply(this, []);
});

Clazz.newMeth(C$, 'getMinimalDaysInFirstWeek$',  function () {
return this.minimalDaysInFirstWeek;
});

Clazz.newMeth(C$, 'isWeekDateSupported$',  function () {
return false;
});

Clazz.newMeth(C$, 'getWeekYear$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'setWeekDate$I$I$I',  function (weekYear, weekOfYear, dayOfWeek) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getWeeksInWeekYear$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'getActualMinimum$I',  function (field) {
var fieldValue=this.getGreatestMinimum$I(field);
var endValue=this.getMinimum$I(field);
if (fieldValue == endValue) {
return fieldValue;
}var work=this.clone$();
work.setLenient$Z(true);
var result=fieldValue;
do {
work.set$I$I(field, fieldValue);
if (work.get$I(field) != fieldValue) {
break;
} else {
result=fieldValue;
--fieldValue;
}} while (fieldValue >= endValue);
return result;
});

Clazz.newMeth(C$, 'getActualMaximum$I',  function (field) {
var fieldValue=this.getLeastMaximum$I(field);
var endValue=this.getMaximum$I(field);
if (fieldValue == endValue) {
return fieldValue;
}var work=this.clone$();
work.setLenient$Z(true);
if (field == 3 || field == 4 ) {
work.set$I$I(7, this.firstDayOfWeek);
}var result=fieldValue;
do {
work.set$I$I(field, fieldValue);
if (work.get$I(field) != fieldValue) {
break;
} else {
result=fieldValue;
++fieldValue;
}} while (fieldValue <= endValue);
return result;
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
var other=Clazz.clone(this);
other.fields=Clazz.array(Integer.TYPE, [17]);
other.isSet=Clazz.array(Boolean.TYPE, [17]);
other.stamp=Clazz.array(Integer.TYPE, [17]);
for (var i=0; i < 17; i++) {
other.fields[i]=this.fields[i];
other.stamp[i]=this.stamp[i];
other.isSet[i]=this.isSet[i];
}
other.zone=this.zone.clone$();
return other;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(18,1).c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getFieldName$I',  function (field) {
return C$.FIELD_NAME[field];
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
var buffer=Clazz.new_($I$(19,1).c$$I,[800]);
buffer.append$S(this.getClass$().getName$()).append$C("[");
C$.appendValue$StringBuilder$S$Z$J(buffer, "time", this.isTimeSet, this.time);
buffer.append$S(",areFieldsSet=").append$Z(this.areFieldsSet);
buffer.append$S(",areAllFieldsSet=").append$Z(this.areAllFieldsSet);
buffer.append$S(",lenient=").append$Z(this.lenient);
buffer.append$S(",zone=").append$O(this.zone);
C$.appendValue$StringBuilder$S$Z$J(buffer, ",firstDayOfWeek", true, this.firstDayOfWeek);
C$.appendValue$StringBuilder$S$Z$J(buffer, ",minimalDaysInFirstWeek", true, this.minimalDaysInFirstWeek);
for (var i=0; i < 17; ++i) {
buffer.append$C(",");
C$.appendValue$StringBuilder$S$Z$J(buffer, C$.FIELD_NAME[i], this.isSet$I(i), this.fields[i]);
}
buffer.append$C("]");
return buffer.toString();
});

Clazz.newMeth(C$, 'appendValue$StringBuilder$S$Z$J',  function (sb, item, valid, value) {
sb.append$S(item).append$C("=");
if (valid) {
sb.append$J(value);
} else {
sb.append$C("?");
}}, 1);

Clazz.newMeth(C$, 'setWeekCountData$java_util_Locale',  function (desiredLocale) {
var data=C$.cachedLocaleData.get$O(desiredLocale);
if (data == null ) {
data=Clazz.array(Integer.TYPE, [2]);
data[0]=$I$(14).retrieveFirstDayOfWeek$java_util_Locale(desiredLocale);
data[1]=$I$(14).retrieveMinimalDaysInFirstWeek$java_util_Locale(desiredLocale);
C$.cachedLocaleData.putIfAbsent$O$O(desiredLocale, data);
}this.firstDayOfWeek=data[0];
this.minimalDaysInFirstWeek=data[1];
}, p$2);

Clazz.newMeth(C$, 'updateTime',  function () {
this.computeTime$();
this.isTimeSet=true;
}, p$2);

Clazz.newMeth(C$, 'compareTo$J',  function (t) {
var thisTime=C$.getMillisOf$java_util_Calendar(this);
return (Long.$gt(thisTime,t )) ? 1 : (Long.$eq(thisTime,t )) ? 0 : -1;
}, p$2);

Clazz.newMeth(C$, 'getMillisOf$java_util_Calendar',  function (calendar) {
if (calendar.isTimeSet) {
return calendar.time;
}var cal=calendar.clone$();
cal.setLenient$Z(true);
return cal.getTimeInMillis$();
}, 1);

Clazz.newMeth(C$, 'adjustStamp',  function () {
var max=2;
var newStamp=2;
for (; ; ) {
var min=2147483647;
for (var i=0; i < this.stamp.length; i++) {
var v=this.stamp[i];
if (v >= newStamp && min > v ) {
min=v;
}if (max < v) {
max=v;
}}
if (max != min && min == 2147483647 ) {
break;
}for (var i=0; i < this.stamp.length; i++) {
if (this.stamp[i] == min) {
this.stamp[i]=newStamp;
}}
++newStamp;
if (min == max) {
break;
}}
this.nextStamp=newStamp;
}, p$2);

Clazz.newMeth(C$, 'invalidateWeekFields',  function () {
if (this.stamp[4] != 1 && this.stamp[3] != 1 ) {
return;
}var cal=this.clone$();
cal.setLenient$Z(true);
cal.clear$I(4);
cal.clear$I(3);
if (this.stamp[4] == 1) {
var weekOfMonth=cal.get$I(4);
if (this.fields[4] != weekOfMonth) {
this.fields[4]=weekOfMonth;
}}if (this.stamp[3] == 1) {
var weekOfYear=cal.get$I(3);
if (this.fields[3] != weekOfYear) {
this.fields[3]=weekOfYear;
}}}, p$2);

Clazz.newMeth(C$, 'toInstant$',  function () {
return $I$(20,"ofEpochMilli$J",[this.getTimeInMillis$()]);
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.cachedLocaleData=Clazz.new_($I$(9,1).c$$I,[3]);
C$.FIELD_NAME=Clazz.array(String, -1, ["ERA", "YEAR", "MONTH", "WEEK_OF_YEAR", "WEEK_OF_MONTH", "DAY_OF_MONTH", "DAY_OF_YEAR", "DAY_OF_WEEK", "DAY_OF_WEEK_IN_MONTH", "AM_PM", "HOUR", "HOUR_OF_DAY", "MINUTE", "SECOND", "MILLISECOND", "ZONE_OFFSET", "DST_OFFSET"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Calendar, "Builder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lenient=true;
},1);

C$.$fields$=[['Z',['lenient'],'I',['nextStamp','maxFieldIndex','firstDayOfWeek','minimalDaysInFirstWeek'],'J',['instant'],'S',['type'],'O',['fields','int[]','zone','java.util.TimeZone','locale','java.util.Locale']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setInstant$J',  function (instant) {
if (this.fields != null ) {
throw Clazz.new_(Clazz.load('IllegalStateException'));
}this.instant=instant;
this.nextStamp=1;
return this;
});

Clazz.newMeth(C$, 'setInstant$java_util_Date',  function (instant) {
return this.setInstant$J(instant.getTime$());
});

Clazz.newMeth(C$, 'set$I$I',  function (field, value) {
if (field < 0 || field >= 17 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["field is invalid"]);
}if (p$1.isInstantSet.apply(this, [])) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["instant has been set"]);
}p$1.allocateFields.apply(this, []);
p$1.internalSet$I$I.apply(this, [field, value]);
return this;
});

Clazz.newMeth(C$, 'setFields$IA',  function (fieldValuePairs) {
var len=fieldValuePairs.length;
if ((len % 2) != 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}if (p$1.isInstantSet.apply(this, [])) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["instant has been set"]);
}if ((this.nextStamp + (len/2|0)) < 0) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["stamp counter overflow"]);
}p$1.allocateFields.apply(this, []);
for (var i=0; i < len; ) {
var field=fieldValuePairs[i++];
if (field < 0 || field >= 17 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["field is invalid"]);
}p$1.internalSet$I$I.apply(this, [field, fieldValuePairs[i++]]);
}
return this;
});

Clazz.newMeth(C$, 'setDate$I$I$I',  function (year, month, dayOfMonth) {
return this.setFields$IA(Clazz.array(Integer.TYPE, -1, [1, year, 2, month, 5, dayOfMonth]));
});

Clazz.newMeth(C$, 'setTimeOfDay$I$I$I',  function (hourOfDay, minute, second) {
return this.setTimeOfDay$I$I$I$I(hourOfDay, minute, second, 0);
});

Clazz.newMeth(C$, 'setTimeOfDay$I$I$I$I',  function (hourOfDay, minute, second, millis) {
return this.setFields$IA(Clazz.array(Integer.TYPE, -1, [11, hourOfDay, 12, minute, 13, second, 14, millis]));
});

Clazz.newMeth(C$, 'setWeekDate$I$I$I',  function (weekYear, weekOfYear, dayOfWeek) {
p$1.allocateFields.apply(this, []);
p$1.internalSet$I$I.apply(this, [17, weekYear]);
p$1.internalSet$I$I.apply(this, [3, weekOfYear]);
p$1.internalSet$I$I.apply(this, [7, dayOfWeek]);
return this;
});

Clazz.newMeth(C$, 'setTimeZone$java_util_TimeZone',  function (zone) {
if (zone == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.zone=zone;
return this;
});

Clazz.newMeth(C$, 'setLenient$Z',  function (lenient) {
this.lenient=lenient;
return this;
});

Clazz.newMeth(C$, 'setCalendarType$S',  function (type) {
if (type.equals$O("gregorian")) {
type="gregory";
}if (!$I$(1).getAvailableCalendarTypes$().contains$O(type) && !type.equals$O("iso8601") ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["unknown calendar type: " + type]);
}if (this.type == null ) {
this.type=type;
} else {
if (!this.type.equals$O(type)) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["calendar type override"]);
}}return this;
});

Clazz.newMeth(C$, 'setLocale$java_util_Locale',  function (locale) {
if (locale == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.locale=locale;
return this;
});

Clazz.newMeth(C$, 'setWeekDefinition$I$I',  function (firstDayOfWeek, minimalDaysInFirstWeek) {
if (!p$1.isValidWeekParameter$I.apply(this, [firstDayOfWeek]) || !p$1.isValidWeekParameter$I.apply(this, [minimalDaysInFirstWeek]) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.firstDayOfWeek=firstDayOfWeek;
this.minimalDaysInFirstWeek=minimalDaysInFirstWeek;
return this;
});

Clazz.newMeth(C$, 'build$',  function () {
if (this.locale == null ) {
this.locale=$I$(2).getDefault$();
}if (this.zone == null ) {
this.zone=$I$(3).getDefault$();
}var cal;
if (this.type == null ) {
this.type=this.locale.getUnicodeLocaleType$S("ca");
}if (this.type == null ) {
if (this.locale.getCountry$() === "TH"  && this.locale.getLanguage$() === "th"  ) {
this.type="buddhist";
} else {
this.type="gregory";
}}switch (this.type) {
case "gregory":
cal=Clazz.new_($I$(4,1).c$$java_util_TimeZone$java_util_Locale$Z,[this.zone, this.locale, true]);
break;
case "iso8601":
var gcal=Clazz.new_($I$(4,1).c$$java_util_TimeZone$java_util_Locale$Z,[this.zone, this.locale, true]);
gcal.setGregorianChange$java_util_Date(Clazz.new_(java.util.Date.c$$J,[[0,549755813888,-1]]));
this.setWeekDefinition$I$I(2, 4);
cal=gcal;
break;
case "buddhist":
cal=Clazz.new_($I$(5,1).c$$java_util_TimeZone$java_util_Locale,[this.zone, this.locale]);
cal.clear$();
break;
case "japanese":
cal=Clazz.new_($I$(6,1).c$$java_util_TimeZone$java_util_Locale$Z,[this.zone, this.locale, true]);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["unknown calendar type: " + this.type]);
}
cal.setLenient$Z(this.lenient);
if (this.firstDayOfWeek != 0) {
cal.setFirstDayOfWeek$I(this.firstDayOfWeek);
cal.setMinimalDaysInFirstWeek$I(this.minimalDaysInFirstWeek);
}if (p$1.isInstantSet.apply(this, [])) {
cal.setTimeInMillis$J(this.instant);
cal.complete$();
return cal;
}if (this.fields != null ) {
var weekDate=p$1.isSet$I.apply(this, [17]) && this.fields[17] > this.fields[1] ;
if (weekDate && !cal.isWeekDateSupported$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["week date is unsupported by " + this.type]);
}for (var stamp=2; stamp < this.nextStamp; stamp++) {
for (var index=0; index <= this.maxFieldIndex; index++) {
if (this.fields[index] == stamp) {
cal.set$I$I(index, this.fields[18 + index]);
break;
}}
}
if (weekDate) {
var weekOfYear=p$1.isSet$I.apply(this, [3]) ? this.fields[21] : 1;
var dayOfWeek=p$1.isSet$I.apply(this, [7]) ? this.fields[25] : cal.getFirstDayOfWeek$();
cal.setWeekDate$I$I$I(this.fields[35], weekOfYear, dayOfWeek);
}cal.complete$();
}return cal;
});

Clazz.newMeth(C$, 'allocateFields',  function () {
if (this.fields == null ) {
this.fields=Clazz.array(Integer.TYPE, [36]);
this.nextStamp=2;
this.maxFieldIndex=-1;
}}, p$1);

Clazz.newMeth(C$, 'internalSet$I$I',  function (field, value) {
this.fields[field]=this.nextStamp++;
if (this.nextStamp < 0) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["stamp counter overflow"]);
}this.fields[18 + field]=value;
if (field > this.maxFieldIndex && field < 17 ) {
this.maxFieldIndex=field;
}}, p$1);

Clazz.newMeth(C$, 'isInstantSet',  function () {
return this.nextStamp == 1;
}, p$1);

Clazz.newMeth(C$, 'isSet$I',  function (index) {
return this.fields != null  && this.fields[index] > 0 ;
}, p$1);

Clazz.newMeth(C$, 'isValidWeekParameter$I',  function (value) {
return value > 0 && value <= 7 ;
}, p$1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Calendar, "AvailableCalendarTypes", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['SET','java.util.Set']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
{
var set=Clazz.new_($I$(7,1).c$$I,[3]);
set.add$O("gregory");
set.add$O("buddhist");
set.add$O("japanese");
C$.SET=$I$(8).unmodifiableSet$java_util_Set(set);
};
};
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:31 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
