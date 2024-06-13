(function(){var P$=Clazz.newPackage("java.text"),I$=[[0,'java.util.HashMap','StringBuffer','java.text.DontCareFieldPosition','java.text.ParsePosition','java.util.Locale',['java.util.Locale','.Category'],'sun.util.locale.provider.LocaleServiceProviderPool','java.text.spi.DateFormatProvider','sun.util.locale.provider.LocaleProviderAdapter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DateFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.text.Format');
C$.$classes$=[['Field',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['calendar','java.util.Calendar','numberFormat','java.text.NumberFormat']]]

Clazz.newMeth(C$, 'format$O$StringBuffer$java_text_FieldPosition',  function (obj, toAppendTo, fieldPosition) {
if (Clazz.instanceOf(obj, "java.util.Date")) return this.format$java_util_Date$StringBuffer$java_text_FieldPosition(obj, toAppendTo, fieldPosition);
 else if (Clazz.instanceOf(obj, "java.lang.Number")) return this.format$java_util_Date$StringBuffer$java_text_FieldPosition(Clazz.new_(java.util.Date.c$$J,[(obj).longValue$()]), toAppendTo, fieldPosition);
 else throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot format given Object as a Date"]);
});

Clazz.newMeth(C$, 'format$java_util_Date',  function (date) {
return this.format$java_util_Date$StringBuffer$java_text_FieldPosition(date, Clazz.new_($I$(2,1)), $I$(3).INSTANCE).toString();
});

Clazz.newMeth(C$, 'parse$S',  function (source) {
var pos=Clazz.new_($I$(4,1).c$$I,[0]);
var result=this.parse$S$java_text_ParsePosition(source, pos);
if (pos.index == 0) throw Clazz.new_(Clazz.load('java.text.ParseException').c$$S$I,["Unparseable date: \"" + source + "\"" , pos.errorIndex]);
return result;
});

Clazz.newMeth(C$, 'parseObject$S$java_text_ParsePosition',  function (source, pos) {
return this.parse$S$java_text_ParsePosition(source, pos);
});

Clazz.newMeth(C$, 'getTimeInstance$',  function () {
return C$.get$I$I$I$java_util_Locale(2, 0, 1, $I$(5,"getDefault$java_util_Locale_Category",[$I$(6).FORMAT]));
}, 1);

Clazz.newMeth(C$, 'getTimeInstance$I',  function (style) {
return C$.get$I$I$I$java_util_Locale(style, 0, 1, $I$(5,"getDefault$java_util_Locale_Category",[$I$(6).FORMAT]));
}, 1);

Clazz.newMeth(C$, 'getTimeInstance$I$java_util_Locale',  function (style, aLocale) {
return C$.get$I$I$I$java_util_Locale(style, 0, 1, aLocale);
}, 1);

Clazz.newMeth(C$, 'getDateInstance$',  function () {
return C$.get$I$I$I$java_util_Locale(0, 2, 2, $I$(5,"getDefault$java_util_Locale_Category",[$I$(6).FORMAT]));
}, 1);

Clazz.newMeth(C$, 'getDateInstance$I',  function (style) {
return C$.get$I$I$I$java_util_Locale(0, style, 2, $I$(5,"getDefault$java_util_Locale_Category",[$I$(6).FORMAT]));
}, 1);

Clazz.newMeth(C$, 'getDateInstance$I$java_util_Locale',  function (style, aLocale) {
return C$.get$I$I$I$java_util_Locale(0, style, 2, aLocale);
}, 1);

Clazz.newMeth(C$, 'getDateTimeInstance$',  function () {
return C$.get$I$I$I$java_util_Locale(2, 2, 3, $I$(5,"getDefault$java_util_Locale_Category",[$I$(6).FORMAT]));
}, 1);

Clazz.newMeth(C$, 'getDateTimeInstance$I$I',  function (dateStyle, timeStyle) {
return C$.get$I$I$I$java_util_Locale(timeStyle, dateStyle, 3, $I$(5,"getDefault$java_util_Locale_Category",[$I$(6).FORMAT]));
}, 1);

Clazz.newMeth(C$, 'getDateTimeInstance$I$I$java_util_Locale',  function (dateStyle, timeStyle, aLocale) {
return C$.get$I$I$I$java_util_Locale(timeStyle, dateStyle, 3, aLocale);
}, 1);

Clazz.newMeth(C$, 'getInstance$',  function () {
return C$.getDateTimeInstance$I$I(3, 3);
}, 1);

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
var pool=$I$(7,"getPool$Class",[Clazz.getClass($I$(8))]);
return pool.getAvailableLocales$();
}, 1);

Clazz.newMeth(C$, 'setCalendar$java_util_Calendar',  function (newCalendar) {
this.calendar=newCalendar;
});

Clazz.newMeth(C$, 'getCalendar$',  function () {
return this.calendar;
});

Clazz.newMeth(C$, 'setNumberFormat$java_text_NumberFormat',  function (newNumberFormat) {
this.numberFormat=newNumberFormat;
});

Clazz.newMeth(C$, 'getNumberFormat$',  function () {
return this.numberFormat;
});

Clazz.newMeth(C$, 'setTimeZone$java_util_TimeZone',  function (zone) {
this.calendar.setTimeZone$java_util_TimeZone(zone);
});

Clazz.newMeth(C$, 'getTimeZone$',  function () {
return this.calendar.getTimeZone$();
});

Clazz.newMeth(C$, 'setLenient$Z',  function (lenient) {
this.calendar.setLenient$Z(lenient);
});

Clazz.newMeth(C$, 'isLenient$',  function () {
return this.calendar.isLenient$();
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.numberFormat.hashCode$();
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) return true;
if (obj == null  || this.getClass$() !== obj.getClass$()  ) return false;
var other=obj;
return (this.calendar.getFirstDayOfWeek$() == other.calendar.getFirstDayOfWeek$() && this.calendar.getMinimalDaysInFirstWeek$() == other.calendar.getMinimalDaysInFirstWeek$()  && this.calendar.isLenient$() == other.calendar.isLenient$()   && this.calendar.getTimeZone$().equals$O(other.calendar.getTimeZone$())  && this.numberFormat.equals$O(other.numberFormat) );
});

Clazz.newMeth(C$, 'clone$',  function () {
var other=C$.superclazz.prototype.clone$.apply(this, []);
other.calendar=this.calendar.clone$();
other.numberFormat=this.numberFormat.clone$();
return other;
});

Clazz.newMeth(C$, 'get$I$I$I$java_util_Locale',  function (timeStyle, dateStyle, flags, loc) {
if ((flags & 1) != 0) {
if (timeStyle < 0 || timeStyle > 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal time style " + timeStyle]);
}} else {
timeStyle=-1;
}if ((flags & 2) != 0) {
if (dateStyle < 0 || dateStyle > 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal date style " + dateStyle]);
}} else {
dateStyle=-1;
}var adapter=$I$(9,"getAdapter$Class$java_util_Locale",[Clazz.getClass($I$(8)), loc]);
var dateFormat=C$.get$sun_util_locale_provider_LocaleProviderAdapter$I$I$java_util_Locale(adapter, timeStyle, dateStyle, loc);
if (dateFormat == null ) {
dateFormat=C$.get$sun_util_locale_provider_LocaleProviderAdapter$I$I$java_util_Locale($I$(9).forJRE$(), timeStyle, dateStyle, loc);
}return dateFormat;
}, 1);

Clazz.newMeth(C$, 'get$sun_util_locale_provider_LocaleProviderAdapter$I$I$java_util_Locale',  function (adapter, timeStyle, dateStyle, loc) {
var provider=adapter.getDateFormatProvider$();
var dateFormat;
if (timeStyle == -1) {
dateFormat=provider.getDateInstance$I$java_util_Locale(dateStyle, loc);
} else {
if (dateStyle == -1) {
dateFormat=provider.getTimeInstance$I$java_util_Locale(timeStyle, loc);
} else {
dateFormat=provider.getDateTimeInstance$I$I$java_util_Locale(dateStyle, timeStyle, loc);
}}return dateFormat;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.DateFormat, "Field", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.text.Format','.Field']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['calendarField']]
,['O',['$instanceMap','java.util.Map','calendarToFieldMapping','java.text.DateFormat.Field[]','ERA','java.text.DateFormat.Field','+YEAR','+MONTH','+DAY_OF_MONTH','+HOUR_OF_DAY1','+HOUR_OF_DAY0','+MINUTE','+SECOND','+MILLISECOND','+DAY_OF_WEEK','+DAY_OF_YEAR','+DAY_OF_WEEK_IN_MONTH','+WEEK_OF_YEAR','+WEEK_OF_MONTH','+AM_PM','+HOUR1','+HOUR0','+TIME_ZONE']]]

Clazz.newMeth(C$, 'ofCalendarField$I',  function (calendarField) {
if (calendarField < 0 || calendarField >= C$.calendarToFieldMapping.length ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown Calendar constant " + calendarField]);
}return C$.calendarToFieldMapping[calendarField];
}, 1);

Clazz.newMeth(C$, 'c$$S$I',  function (name, calendarField) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
this.calendarField=calendarField;
if (this.getClass$() === Clazz.getClass(C$) ) {
C$.$instanceMap.put$O$O(name, this);
if (calendarField >= 0) {
C$.calendarToFieldMapping[calendarField]=this;
}}}, 1);

Clazz.newMeth(C$, 'getCalendarField$',  function () {
return this.calendarField;
});

Clazz.newMeth(C$, 'readResolve$',  function () {
if (this.getClass$() !== Clazz.getClass(C$) ) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["subclass didn\'t correctly implement readResolve"]);
}var instance=C$.$instanceMap.get$O(this.getName$());
if (instance != null ) {
return instance;
} else {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["unknown attribute name"]);
}});

C$.$static$=function(){C$.$static$=0;
C$.$instanceMap=Clazz.new_($I$(1,1).c$$I,[18]);
C$.calendarToFieldMapping=Clazz.array(C$, [17]);
C$.ERA=Clazz.new_(C$.c$$S$I,["era", 0]);
C$.YEAR=Clazz.new_(C$.c$$S$I,["year", 1]);
C$.MONTH=Clazz.new_(C$.c$$S$I,["month", 2]);
C$.DAY_OF_MONTH=Clazz.new_(C$.c$$S$I,["day of month", 5]);
C$.HOUR_OF_DAY1=Clazz.new_(C$.c$$S$I,["hour of day 1", -1]);
C$.HOUR_OF_DAY0=Clazz.new_(C$.c$$S$I,["hour of day", 11]);
C$.MINUTE=Clazz.new_(C$.c$$S$I,["minute", 12]);
C$.SECOND=Clazz.new_(C$.c$$S$I,["second", 13]);
C$.MILLISECOND=Clazz.new_(C$.c$$S$I,["millisecond", 14]);
C$.DAY_OF_WEEK=Clazz.new_(C$.c$$S$I,["day of week", 7]);
C$.DAY_OF_YEAR=Clazz.new_(C$.c$$S$I,["day of year", 6]);
C$.DAY_OF_WEEK_IN_MONTH=Clazz.new_(C$.c$$S$I,["day of week in month", 8]);
C$.WEEK_OF_YEAR=Clazz.new_(C$.c$$S$I,["week of year", 3]);
C$.WEEK_OF_MONTH=Clazz.new_(C$.c$$S$I,["week of month", 4]);
C$.AM_PM=Clazz.new_(C$.c$$S$I,["am pm", 9]);
C$.HOUR1=Clazz.new_(C$.c$$S$I,["hour 1", -1]);
C$.HOUR0=Clazz.new_(C$.c$$S$I,["hour", 10]);
C$.TIME_ZONE=Clazz.new_(C$.c$$S$I,["time zone", -1]);
};

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
