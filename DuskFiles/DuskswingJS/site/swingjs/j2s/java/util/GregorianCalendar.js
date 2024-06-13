(function(){var P$=java.util,p$1={},I$=[[0,'sun.util.calendar.CalendarSystem','java.util.TimeZone','java.util.Locale',['java.util.Locale','.Category'],'sun.util.calendar.CalendarUtils','sun.util.calendar.AbstractCalendar','java.util.Calendar','java.time.ZonedDateTime','java.time.Instant','java.time.temporal.ChronoField']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GregorianCalendar", null, 'java.util.Calendar');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.gregorianCutover=-12219292800000;
this.gregorianCutoverDate=577736;
this.gregorianCutoverYear=1582;
this.gregorianCutoverYearJulian=1582;
this.cachedFixedDate=[0,549755813888,-1];
},1);

C$.$fields$=[['I',['gregorianCutoverYear','gregorianCutoverYearJulian'],'J',['gregorianCutover','gregorianCutoverDate','cachedFixedDate'],'O',['gdate','sun.util.calendar.BaseCalendar.Date','+cdate','calsys','sun.util.calendar.BaseCalendar','zoneOffsets','int[]','+originalFields']]
,['O',['MONTH_LENGTH','int[]','+LEAP_MONTH_LENGTH','+MIN_VALUES','+LEAST_MAX_VALUES','+MAX_VALUES','gcal','sun.util.calendar.Gregorian','jcal','sun.util.calendar.JulianCalendar','jeras','sun.util.calendar.Era[]']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$java_util_TimeZone$java_util_Locale.apply(this, [$I$(2).getDefaultRef$(), $I$(3,"getDefault$java_util_Locale_Category",[$I$(4).FORMAT])]);
this.setZoneShared$Z(true);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_TimeZone',  function (zone) {
C$.c$$java_util_TimeZone$java_util_Locale.apply(this, [zone, $I$(3,"getDefault$java_util_Locale_Category",[$I$(4).FORMAT])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Locale',  function (aLocale) {
C$.c$$java_util_TimeZone$java_util_Locale.apply(this, [$I$(2).getDefaultRef$(), aLocale]);
this.setZoneShared$Z(true);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_TimeZone$java_util_Locale',  function (zone, aLocale) {
;C$.superclazz.c$$java_util_TimeZone$java_util_Locale.apply(this,[zone, aLocale]);C$.$init$.apply(this);
this.gdate=C$.gcal.newCalendarDate$java_util_TimeZone(zone);
this.setTimeInMillis$J(System.currentTimeMillis$());
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I',  function (year, month, dayOfMonth) {
C$.c$$I$I$I$I$I$I$I.apply(this, [year, month, dayOfMonth, 0, 0, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$I',  function (year, month, dayOfMonth, hourOfDay, minute) {
C$.c$$I$I$I$I$I$I$I.apply(this, [year, month, dayOfMonth, hourOfDay, minute, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$I$I',  function (year, month, dayOfMonth, hourOfDay, minute, second) {
C$.c$$I$I$I$I$I$I$I.apply(this, [year, month, dayOfMonth, hourOfDay, minute, second, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$I$I$I',  function (year, month, dayOfMonth, hourOfDay, minute, second, millis) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.gdate=C$.gcal.newCalendarDate$java_util_TimeZone(this.getZone$());
this.set$I$I(1, year);
this.set$I$I(2, month);
this.set$I$I(5, dayOfMonth);
if (hourOfDay >= 12 && hourOfDay <= 23 ) {
this.internalSet$I$I(9, 1);
this.internalSet$I$I(10, hourOfDay - 12);
} else {
this.internalSet$I$I(10, hourOfDay);
}this.setFieldsComputed$I(1536);
this.set$I$I(11, hourOfDay);
this.set$I$I(12, minute);
this.set$I$I(13, second);
this.internalSet$I$I(14, millis);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_TimeZone$java_util_Locale$Z',  function (zone, locale, flag) {
;C$.superclazz.c$$java_util_TimeZone$java_util_Locale.apply(this,[zone, locale]);C$.$init$.apply(this);
this.gdate=C$.gcal.newCalendarDate$java_util_TimeZone(this.getZone$());
}, 1);

Clazz.newMeth(C$, 'setGregorianChange$java_util_Date',  function (date) {
var cutoverTime=date.getTime$();
if (Long.$eq(cutoverTime,this.gregorianCutover )) {
return;
}this.complete$();
p$1.setGregorianChange$J.apply(this, [cutoverTime]);
});

Clazz.newMeth(C$, 'setGregorianChange$J',  function (cutoverTime) {
this.gregorianCutover=cutoverTime;
this.gregorianCutoverDate=Long.$add($I$(5).floorDivide$J$J(cutoverTime, 86400000),719163);
if (Long.$eq(cutoverTime,[16777215,549755813887,1] )) {
(this.gregorianCutoverDate=Long.$inc(this.gregorianCutoverDate,1));
}var d=p$1.getGregorianCutoverDate.apply(this, []);
this.gregorianCutoverYear=d.getYear$();
var julianCal=C$.getJulianCalendarSystem$();
d=julianCal.newCalendarDate$java_util_TimeZone($I$(2).NO_TIMEZONE);
julianCal.getCalendarDateFromFixedDate$sun_util_calendar_CalendarDate$J(d, Long.$sub(this.gregorianCutoverDate,1));
this.gregorianCutoverYearJulian=d.getNormalizedYear$();
if (Long.$lt(this.time,this.gregorianCutover )) {
this.setUnnormalized$();
}}, p$1);

Clazz.newMeth(C$, 'getGregorianChange$',  function () {
return Clazz.new_(java.util.Date.c$$J,[this.gregorianCutover]);
});

Clazz.newMeth(C$, 'isLeapYear$I',  function (year) {
if ((year & 3) != 0) {
return false;
}if (year > this.gregorianCutoverYear) {
return (year % 100 != 0) || (year % 400 == 0) ;
}if (year < this.gregorianCutoverYearJulian) {
return true;
}var gregorian;
if (this.gregorianCutoverYear == this.gregorianCutoverYearJulian) {
var d=p$1.getCalendarDate$J.apply(this, [this.gregorianCutoverDate]);
gregorian=d.getMonth$() < 3;
} else {
gregorian=year == this.gregorianCutoverYear;
}return gregorian ? (year % 100 != 0) || (year % 400 == 0)  : true;
});

Clazz.newMeth(C$, 'getCalendarType$',  function () {
return "gregory";
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
return Clazz.instanceOf(obj, "java.util.GregorianCalendar") && C$.superclazz.prototype.equals$O.apply(this, [obj]) && Long.$eq(this.gregorianCutover,(obj).gregorianCutover )  ;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return C$.superclazz.prototype.hashCode$.apply(this, []) ^ Long.$ival(this.gregorianCutoverDate);
});

Clazz.newMeth(C$, 'add$I$I',  function (field, amount) {
if (amount == 0) {
return;
}if (field < 0 || field >= 15 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.complete$();
if (field == 1) {
var year=this.internalGet$I(1);
if (p$1.internalGetEra.apply(this, []) == 1) {
year+=amount;
if (year > 0) {
this.set$I$I(1, year);
} else {
this.set$I$I(1, 1 - year);
this.set$I$I(0, 0);
}} else {
year-=amount;
if (year > 0) {
this.set$I$I(1, year);
} else {
this.set$I$I(1, 1 - year);
this.set$I$I(0, 1);
}}p$1.pinDayOfMonth.apply(this, []);
} else if (field == 2) {
var month=this.internalGet$I(2) + amount;
var year=this.internalGet$I(1);
var y_amount;
if (month >= 0) {
y_amount=(month/12|0);
} else {
y_amount=((month + 1)/12|0) - 1;
}if (y_amount != 0) {
if (p$1.internalGetEra.apply(this, []) == 1) {
year+=y_amount;
if (year > 0) {
this.set$I$I(1, year);
} else {
this.set$I$I(1, 1 - year);
this.set$I$I(0, 0);
}} else {
year-=y_amount;
if (year > 0) {
this.set$I$I(1, year);
} else {
this.set$I$I(1, 1 - year);
this.set$I$I(0, 1);
}}}if (month >= 0) {
this.set$I$I(2, month % 12);
} else {
month%=12;
if (month < 0) {
month+=12;
}this.set$I$I(2, 0 + month);
}p$1.pinDayOfMonth.apply(this, []);
} else if (field == 0) {
var era=this.internalGet$I(0) + amount;
if (era < 0) {
era=0;
}if (era > 1) {
era=1;
}this.set$I$I(0, era);
} else {
var delta=amount;
var timeOfDay=0;
switch (field) {
case 10:
case 11:
(delta=Long.$mul(delta,(3600000)));
break;
case 12:
(delta=Long.$mul(delta,(60000)));
break;
case 13:
(delta=Long.$mul(delta,(1000)));
break;
case 14:
break;
case 3:
case 4:
case 8:
(delta=Long.$mul(delta,(7)));
break;
case 5:
case 6:
case 7:
break;
case 9:
delta=(amount/2|0);
timeOfDay=12 * (amount % 2);
break;
}
if (field >= 10) {
this.setTimeInMillis$J(Long.$add(this.time,delta));
return;
}var fd=p$1.getCurrentFixedDate.apply(this, []);
(timeOfDay=Long.$add(timeOfDay,(this.internalGet$I(11))));
(timeOfDay=Long.$mul(timeOfDay,(60)));
(timeOfDay=Long.$add(timeOfDay,(this.internalGet$I(12))));
(timeOfDay=Long.$mul(timeOfDay,(60)));
(timeOfDay=Long.$add(timeOfDay,(this.internalGet$I(13))));
(timeOfDay=Long.$mul(timeOfDay,(1000)));
(timeOfDay=Long.$add(timeOfDay,(this.internalGet$I(14))));
if (Long.$ge(timeOfDay,86400000 )) {
(fd=Long.$inc(fd,1));
(timeOfDay=Long.$sub(timeOfDay,(86400000)));
} else if (Long.$lt(timeOfDay,0 )) {
(fd=Long.$inc(fd,-1));
(timeOfDay=Long.$add(timeOfDay,(86400000)));
}(fd=Long.$add(fd,(delta)));
var zoneOffset=this.internalGet$I(15) + this.internalGet$I(16);
this.setTimeInMillis$J(Long.$sub(Long.$add(Long.$mul((Long.$sub(fd,719163)),86400000),timeOfDay),zoneOffset));
zoneOffset-=this.internalGet$I(15) + this.internalGet$I(16);
if (zoneOffset != 0) {
this.setTimeInMillis$J(Long.$add(this.time,zoneOffset));
var fd2=p$1.getCurrentFixedDate.apply(this, []);
if (Long.$ne(fd2,fd )) {
this.setTimeInMillis$J(Long.$sub(this.time,zoneOffset));
}}}});

Clazz.newMeth(C$, 'roll$I$Z',  function (field, up) {
this.roll$I$I(field, up ? 1 : -1);
});

Clazz.newMeth(C$, 'roll$I$I',  function (field, amount) {
if (amount == 0) {
return;
}if (field < 0 || field >= 15 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.complete$();
var min=this.getMinimum$I(field);
var max=this.getMaximum$I(field);
switch (field) {
case 9:
case 0:
case 1:
case 12:
case 13:
case 14:
break;
case 10:
case 11:
{
var unit=max + 1;
var h=this.internalGet$I(field);
var nh=(h + amount) % unit;
if (nh < 0) {
nh+=unit;
}(this.time=Long.$add(this.time,(3600000 * (nh - h))));
var d=this.calsys.getCalendarDate$J$java_util_TimeZone(this.time, this.getZone$());
if (this.internalGet$I(5) != d.getDayOfMonth$()) {
d.setDate$I$I$I(this.internalGet$I(1), this.internalGet$I(2) + 1, this.internalGet$I(5));
if (field == 10) {
Clazz.assert(C$, this, function(){return (this.internalGet$I(9) == 1)});
d.addHours$I(12);
}this.time=this.calsys.getTime$sun_util_calendar_CalendarDate(d);
}var hourOfDay=d.getHours$();
this.internalSet$I$I(field, hourOfDay % unit);
if (field == 10) {
this.internalSet$I$I(11, hourOfDay);
} else {
this.internalSet$I$I(9, (hourOfDay/12|0));
this.internalSet$I$I(10, hourOfDay % 12);
}var zoneOffset=d.getZoneOffset$();
var saving=d.getDaylightSaving$();
this.internalSet$I$I(15, zoneOffset - saving);
this.internalSet$I$I(16, saving);
return;
}case 2:
{
if (!p$1.isCutoverYear$I.apply(this, [this.cdate.getNormalizedYear$()])) {
var mon=(this.internalGet$I(2) + amount) % 12;
if (mon < 0) {
mon+=12;
}this.set$I$I(2, mon);
var monthLen=p$1.monthLength$I.apply(this, [mon]);
if (this.internalGet$I(5) > monthLen) {
this.set$I$I(5, monthLen);
}} else {
var yearLength=this.getActualMaximum$I(2) + 1;
var mon=(this.internalGet$I(2) + amount) % yearLength;
if (mon < 0) {
mon+=yearLength;
}this.set$I$I(2, mon);
var monthLen=this.getActualMaximum$I(5);
if (this.internalGet$I(5) > monthLen) {
this.set$I$I(5, monthLen);
}}return;
}case 3:
{
var y=this.cdate.getNormalizedYear$();
max=this.getActualMaximum$I(3);
this.set$I$I(7, this.internalGet$I(7));
var woy=this.internalGet$I(3);
var value=woy + amount;
if (!p$1.isCutoverYear$I.apply(this, [y])) {
var weekYear=this.getWeekYear$();
if (weekYear == y) {
if (value > min && value < max ) {
this.set$I$I(3, value);
return;
}var fd=p$1.getCurrentFixedDate.apply(this, []);
var day1=Long.$sub(fd,(7 * (woy - min)));
if (this.calsys.getYearFromFixedDate$J(day1) != y) {
++min;
}(fd=Long.$add(fd,(7 * (max - this.internalGet$I(3)))));
if (this.calsys.getYearFromFixedDate$J(fd) != y) {
--max;
}} else {
if (weekYear > y) {
if (amount < 0) {
++amount;
}woy=max;
} else {
if (amount > 0) {
amount-=woy - max;
}woy=min;
}}this.set$I$I(field, C$.getRolledValue$I$I$I$I(woy, amount, min, max));
return;
}var fd=p$1.getCurrentFixedDate.apply(this, []);
var cal;
if (this.gregorianCutoverYear == this.gregorianCutoverYearJulian) {
cal=p$1.getCutoverCalendarSystem.apply(this, []);
} else if (y == this.gregorianCutoverYear) {
cal=C$.gcal;
} else {
cal=C$.getJulianCalendarSystem$();
}var day1=Long.$sub(fd,(7 * (woy - min)));
if (cal.getYearFromFixedDate$J(day1) != y) {
++min;
}(fd=Long.$add(fd,(7 * (max - woy))));
cal=(Long.$ge(fd,this.gregorianCutoverDate )) ? C$.gcal : C$.getJulianCalendarSystem$();
if (cal.getYearFromFixedDate$J(fd) != y) {
--max;
}value=C$.getRolledValue$I$I$I$I(woy, amount, min, max) - 1;
var d=p$1.getCalendarDate$J.apply(this, [Long.$add(day1,value * 7)]);
this.set$I$I(2, d.getMonth$() - 1);
this.set$I$I(5, d.getDayOfMonth$());
return;
}case 4:
{
var isCutoverYear=p$1.isCutoverYear$I.apply(this, [this.cdate.getNormalizedYear$()]);
var dow=this.internalGet$I(7) - this.getFirstDayOfWeek$();
if (dow < 0) {
dow+=7;
}var fd=p$1.getCurrentFixedDate.apply(this, []);
var month1;
var monthLength;
if (isCutoverYear) {
month1=p$1.getFixedDateMonth1$sun_util_calendar_BaseCalendar_Date$J.apply(this, [this.cdate, fd]);
monthLength=p$1.actualMonthLength.apply(this, []);
} else {
month1=Long.$add(Long.$sub(fd,this.internalGet$I(5)),1);
monthLength=this.calsys.getMonthLength$sun_util_calendar_CalendarDate(this.cdate);
}var monthDay1st=$I$(6,"getDayOfWeekDateOnOrBefore$J$I",[Long.$add(month1,6), this.getFirstDayOfWeek$()]);
if (Long.$ival((Long.$sub(monthDay1st,month1))) >= this.getMinimalDaysInFirstWeek$()) {
(monthDay1st=Long.$sub(monthDay1st,(7)));
}max=this.getActualMaximum$I(field);
var value=C$.getRolledValue$I$I$I$I(this.internalGet$I(field), amount, 1, max) - 1;
var nfd=Long.$add(Long.$add(monthDay1st,value * 7),dow);
if (Long.$lt(nfd,month1 )) {
nfd=month1;
} else if (Long.$ge(nfd,(Long.$add(month1,monthLength)) )) {
nfd=Long.$sub(Long.$add(month1,monthLength),1);
}var dayOfMonth;
if (isCutoverYear) {
var d=p$1.getCalendarDate$J.apply(this, [nfd]);
dayOfMonth=d.getDayOfMonth$();
} else {
dayOfMonth=Long.$ival((Long.$sub(nfd,month1))) + 1;
}this.set$I$I(5, dayOfMonth);
return;
}case 5:
{
if (!p$1.isCutoverYear$I.apply(this, [this.cdate.getNormalizedYear$()])) {
max=this.calsys.getMonthLength$sun_util_calendar_CalendarDate(this.cdate);
break;
}var fd=p$1.getCurrentFixedDate.apply(this, []);
var month1=p$1.getFixedDateMonth1$sun_util_calendar_BaseCalendar_Date$J.apply(this, [this.cdate, fd]);
var value=C$.getRolledValue$I$I$I$I(Long.$ival((Long.$sub(fd,month1))), amount, 0, p$1.actualMonthLength.apply(this, []) - 1);
var d=p$1.getCalendarDate$J.apply(this, [Long.$add(month1,value)]);
Clazz.assert(C$, this, function(){return d.getMonth$() - 1 == this.internalGet$I(2)});
this.set$I$I(5, d.getDayOfMonth$());
return;
}case 6:
{
max=this.getActualMaximum$I(field);
if (!p$1.isCutoverYear$I.apply(this, [this.cdate.getNormalizedYear$()])) {
break;
}var fd=p$1.getCurrentFixedDate.apply(this, []);
var jan1=Long.$add(Long.$sub(fd,this.internalGet$I(6)),1);
var value=C$.getRolledValue$I$I$I$I(Long.$ival((Long.$sub(fd,jan1))) + 1, amount, min, max);
var d=p$1.getCalendarDate$J.apply(this, [Long.$sub(Long.$add(jan1,value),1)]);
this.set$I$I(2, d.getMonth$() - 1);
this.set$I$I(5, d.getDayOfMonth$());
return;
}case 7:
{
if (!p$1.isCutoverYear$I.apply(this, [this.cdate.getNormalizedYear$()])) {
var weekOfYear=this.internalGet$I(3);
if (weekOfYear > 1 && weekOfYear < 52 ) {
this.set$I$I(3, weekOfYear);
max=7;
break;
}}amount%=7;
if (amount == 0) {
return;
}var fd=p$1.getCurrentFixedDate.apply(this, []);
var dowFirst=$I$(6,"getDayOfWeekDateOnOrBefore$J$I",[fd, this.getFirstDayOfWeek$()]);
(fd=Long.$add(fd,(amount)));
if (Long.$lt(fd,dowFirst )) {
(fd=Long.$add(fd,(7)));
} else if (Long.$ge(fd,Long.$add(dowFirst,7) )) {
(fd=Long.$sub(fd,(7)));
}var d=p$1.getCalendarDate$J.apply(this, [fd]);
this.set$I$I(0, (d.getNormalizedYear$() <= 0 ? 0 : 1));
this.set$I$I$I(d.getYear$(), d.getMonth$() - 1, d.getDayOfMonth$());
return;
}case 8:
{
min=1;
if (!p$1.isCutoverYear$I.apply(this, [this.cdate.getNormalizedYear$()])) {
var dom=this.internalGet$I(5);
var monthLength=this.calsys.getMonthLength$sun_util_calendar_CalendarDate(this.cdate);
var lastDays=monthLength % 7;
max=(monthLength/7|0);
var x=(dom - 1) % 7;
if (x < lastDays) {
++max;
}this.set$I$I(7, this.internalGet$I(7));
break;
}var fd=p$1.getCurrentFixedDate.apply(this, []);
var month1=p$1.getFixedDateMonth1$sun_util_calendar_BaseCalendar_Date$J.apply(this, [this.cdate, fd]);
var monthLength=p$1.actualMonthLength.apply(this, []);
var lastDays=monthLength % 7;
max=(monthLength/7|0);
var x=Long.$ival((Long.$sub(fd,month1))) % 7;
if (x < lastDays) {
++max;
}var value=C$.getRolledValue$I$I$I$I(this.internalGet$I(field), amount, min, max) - 1;
fd=Long.$add(Long.$add(month1,value * 7),x);
var cal=(Long.$ge(fd,this.gregorianCutoverDate )) ? C$.gcal : C$.getJulianCalendarSystem$();
var d=cal.newCalendarDate$java_util_TimeZone($I$(2).NO_TIMEZONE);
cal.getCalendarDateFromFixedDate$sun_util_calendar_CalendarDate$J(d, fd);
this.set$I$I(5, d.getDayOfMonth$());
return;
}}
this.set$I$I(field, C$.getRolledValue$I$I$I$I(this.internalGet$I(field), amount, min, max));
});

Clazz.newMeth(C$, 'getMinimum$I',  function (field) {
return C$.MIN_VALUES[field];
});

Clazz.newMeth(C$, 'getMaximum$I',  function (field) {
switch (field) {
case 2:
case 5:
case 6:
case 3:
case 4:
case 8:
case 1:
{
if (this.gregorianCutoverYear > 200) {
break;
}var gc=this.clone$();
gc.setLenient$Z(true);
gc.setTimeInMillis$J(this.gregorianCutover);
var v1=gc.getActualMaximum$I(field);
gc.setTimeInMillis$J(Long.$sub(this.gregorianCutover,1));
var v2=gc.getActualMaximum$I(field);
return Math.max(C$.MAX_VALUES[field], Math.max(v1, v2));
}}
return C$.MAX_VALUES[field];
});

Clazz.newMeth(C$, 'getGreatestMinimum$I',  function (field) {
if (field == 5) {
var d=p$1.getGregorianCutoverDate.apply(this, []);
var mon1=p$1.getFixedDateMonth1$sun_util_calendar_BaseCalendar_Date$J.apply(this, [d, this.gregorianCutoverDate]);
d=p$1.getCalendarDate$J.apply(this, [mon1]);
return Math.max(C$.MIN_VALUES[field], d.getDayOfMonth$());
}return C$.MIN_VALUES[field];
});

Clazz.newMeth(C$, 'getLeastMaximum$I',  function (field) {
switch (field) {
case 2:
case 5:
case 6:
case 3:
case 4:
case 8:
case 1:
{
var gc=this.clone$();
gc.setLenient$Z(true);
gc.setTimeInMillis$J(this.gregorianCutover);
var v1=gc.getActualMaximum$I(field);
gc.setTimeInMillis$J(Long.$sub(this.gregorianCutover,1));
var v2=gc.getActualMaximum$I(field);
return Math.min(C$.LEAST_MAX_VALUES[field], Math.min(v1, v2));
}}
return C$.LEAST_MAX_VALUES[field];
});

Clazz.newMeth(C$, 'getActualMinimum$I',  function (field) {
if (field == 5) {
var gc=p$1.getNormalizedCalendar.apply(this, []);
var year=gc.cdate.getNormalizedYear$();
if (year == this.gregorianCutoverYear || year == this.gregorianCutoverYearJulian ) {
var month1=p$1.getFixedDateMonth1$sun_util_calendar_BaseCalendar_Date$J.apply(this, [gc.cdate, gc.calsys.getFixedDate$sun_util_calendar_CalendarDate(gc.cdate)]);
var d=p$1.getCalendarDate$J.apply(this, [month1]);
return d.getDayOfMonth$();
}}return this.getMinimum$I(field);
});

Clazz.newMeth(C$, 'getActualMaximum$I',  function (field) {
var fieldsForFixedMax=130689;
if ((130689 & (1 << field)) != 0) {
return this.getMaximum$I(field);
}var gc=p$1.getNormalizedCalendar.apply(this, []);
var date=gc.cdate;
var cal=gc.calsys;
var normalizedYear=date.getNormalizedYear$();
var value=-1;
switch (field) {
case 2:
{
if (!p$1.isCutoverYear$I.apply(gc, [normalizedYear])) {
value=11;
break;
}var nextJan1;
do {
nextJan1=C$.gcal.getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date(++normalizedYear, 1, 1, null);
} while (Long.$lt(nextJan1,this.gregorianCutoverDate ));
var d=date.clone$();
cal.getCalendarDateFromFixedDate$sun_util_calendar_CalendarDate$J(d, Long.$sub(nextJan1,1));
value=d.getMonth$() - 1;
}break;
case 5:
{
value=cal.getMonthLength$sun_util_calendar_CalendarDate(date);
if (!p$1.isCutoverYear$I.apply(gc, [normalizedYear]) || date.getDayOfMonth$() == value ) {
break;
}var fd=p$1.getCurrentFixedDate.apply(gc, []);
if (Long.$ge(fd,this.gregorianCutoverDate )) {
break;
}var monthLength=p$1.actualMonthLength.apply(gc, []);
var monthEnd=Long.$sub(Long.$add(p$1.getFixedDateMonth1$sun_util_calendar_BaseCalendar_Date$J.apply(gc, [gc.cdate, fd]),monthLength),1);
var d=p$1.getCalendarDate$J.apply(gc, [monthEnd]);
value=d.getDayOfMonth$();
}break;
case 6:
{
if (!p$1.isCutoverYear$I.apply(gc, [normalizedYear])) {
value=cal.getYearLength$sun_util_calendar_CalendarDate(date);
break;
}var jan1;
if (this.gregorianCutoverYear == this.gregorianCutoverYearJulian) {
var cocal=p$1.getCutoverCalendarSystem.apply(gc, []);
jan1=cocal.getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date(normalizedYear, 1, 1, null);
} else if (normalizedYear == this.gregorianCutoverYearJulian) {
jan1=cal.getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date(normalizedYear, 1, 1, null);
} else {
jan1=this.gregorianCutoverDate;
}var nextJan1=C$.gcal.getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date(++normalizedYear, 1, 1, null);
if (Long.$lt(nextJan1,this.gregorianCutoverDate )) {
nextJan1=this.gregorianCutoverDate;
}Clazz.assert(C$, this, function(){return Long.$le(jan1,cal.getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date(date.getNormalizedYear$(), date.getMonth$(), date.getDayOfMonth$(), date) )});
Clazz.assert(C$, this, function(){return Long.$ge(nextJan1,cal.getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date(date.getNormalizedYear$(), date.getMonth$(), date.getDayOfMonth$(), date) )});
value=Long.$ival((Long.$sub(nextJan1,jan1)));
}break;
case 3:
{
if (!p$1.isCutoverYear$I.apply(gc, [normalizedYear])) {
var d=cal.newCalendarDate$java_util_TimeZone($I$(2).NO_TIMEZONE);
d.setDate$I$I$I(date.getYear$(), 1, 1);
var dayOfWeek=cal.getDayOfWeek$sun_util_calendar_CalendarDate(d);
dayOfWeek-=this.getFirstDayOfWeek$();
if (dayOfWeek < 0) {
dayOfWeek+=7;
}value=52;
var magic=dayOfWeek + this.getMinimalDaysInFirstWeek$() - 1;
if ((magic == 6) || (date.isLeapYear$() && (magic == 5 || magic == 12 ) ) ) {
++value;
}break;
}if (gc === this ) {
gc=gc.clone$();
}var maxDayOfYear=this.getActualMaximum$I(6);
gc.set$I$I(6, maxDayOfYear);
value=gc.get$I(3);
if (this.internalGet$I(1) != gc.getWeekYear$()) {
gc.set$I$I(6, maxDayOfYear - 7);
value=gc.get$I(3);
}}break;
case 4:
{
if (!p$1.isCutoverYear$I.apply(gc, [normalizedYear])) {
var d=cal.newCalendarDate$java_util_TimeZone(null);
d.setDate$I$I$I(date.getYear$(), date.getMonth$(), 1);
var dayOfWeek=cal.getDayOfWeek$sun_util_calendar_CalendarDate(d);
var monthLength=cal.getMonthLength$sun_util_calendar_CalendarDate(d);
dayOfWeek-=this.getFirstDayOfWeek$();
if (dayOfWeek < 0) {
dayOfWeek+=7;
}var nDaysFirstWeek=7 - dayOfWeek;
value=3;
if (nDaysFirstWeek >= this.getMinimalDaysInFirstWeek$()) {
++value;
}monthLength-=nDaysFirstWeek + 21;
if (monthLength > 0) {
++value;
if (monthLength > 7) {
++value;
}}break;
}if (gc === this ) {
gc=gc.clone$();
}var y=gc.internalGet$I(1);
var m=gc.internalGet$I(2);
do {
value=gc.get$I(4);
gc.add$I$I(4, 1);
} while (gc.get$I(1) == y && gc.get$I(2) == m );
}break;
case 8:
{
var ndays;
var dow1;
var dow=date.getDayOfWeek$();
if (!p$1.isCutoverYear$I.apply(gc, [normalizedYear])) {
var d=date.clone$();
ndays=cal.getMonthLength$sun_util_calendar_CalendarDate(d);
d.setDayOfMonth$I(1);
cal.normalize$sun_util_calendar_CalendarDate(d);
dow1=d.getDayOfWeek$();
} else {
if (gc === this ) {
gc=this.clone$();
}ndays=p$1.actualMonthLength.apply(gc, []);
gc.set$I$I(5, gc.getActualMinimum$I(5));
dow1=gc.get$I(7);
}var x=dow - dow1;
if (x < 0) {
x+=7;
}ndays-=x;
value=((ndays + 6)/7|0);
}break;
case 1:
{
if (gc === this ) {
gc=this.clone$();
}var current=p$1.getYearOffsetInMillis.apply(gc, []);
if (p$1.internalGetEra.apply(gc, []) == 1) {
gc.setTimeInMillis$J([16777215,549755813887,1]);
value=gc.get$I(1);
var maxEnd=p$1.getYearOffsetInMillis.apply(gc, []);
if (Long.$gt(current,maxEnd )) {
--value;
}} else {
var mincal=Long.$ge(gc.getTimeInMillis$(),this.gregorianCutover ) ? C$.gcal : C$.getJulianCalendarSystem$();
var d=mincal.getCalendarDate$J$java_util_TimeZone([0,549755813888,-1], this.getZone$());
var maxEnd=Long.$add(Long.$mul((Long.$sub(cal.getDayOfYear$sun_util_calendar_CalendarDate(d),1)),24),d.getHours$());
(maxEnd=Long.$mul(maxEnd,(60)));
(maxEnd=Long.$add(maxEnd,(d.getMinutes$())));
(maxEnd=Long.$mul(maxEnd,(60)));
(maxEnd=Long.$add(maxEnd,(d.getSeconds$())));
(maxEnd=Long.$mul(maxEnd,(1000)));
(maxEnd=Long.$add(maxEnd,(d.getMillis$())));
value=d.getYear$();
if (value <= 0) {
Clazz.assert(C$, this, function(){return mincal === C$.gcal });
value=1 - value;
}if (Long.$lt(current,maxEnd )) {
--value;
}}}break;
default:
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[field]);
}
return value;
});

Clazz.newMeth(C$, 'getYearOffsetInMillis',  function () {
var t=(this.internalGet$I(6) - 1) * 24;
(t=Long.$add(t,(this.internalGet$I(11))));
(t=Long.$mul(t,(60)));
(t=Long.$add(t,(this.internalGet$I(12))));
(t=Long.$mul(t,(60)));
(t=Long.$add(t,(this.internalGet$I(13))));
(t=Long.$mul(t,(1000)));
return Long.$sub(Long.$add(t,this.internalGet$I(14)),(this.internalGet$I(15) + this.internalGet$I(16)));
}, p$1);

Clazz.newMeth(C$, 'clone$',  function () {
var other=C$.superclazz.prototype.clone$.apply(this, []);
other.gdate=this.gdate.clone$();
if (this.cdate != null ) {
if (this.cdate !== this.gdate ) {
other.cdate=this.cdate.clone$();
} else {
other.cdate=other.gdate;
}}other.originalFields=null;
other.zoneOffsets=null;
return other;
});

Clazz.newMeth(C$, 'getTimeZone$',  function () {
var zone=C$.superclazz.prototype.getTimeZone$.apply(this, []);
this.gdate.setZone$java_util_TimeZone(zone);
if (this.cdate != null  && this.cdate !== this.gdate  ) {
this.cdate.setZone$java_util_TimeZone(zone);
}return zone;
});

Clazz.newMeth(C$, 'setTimeZone$java_util_TimeZone',  function (zone) {
C$.superclazz.prototype.setTimeZone$java_util_TimeZone.apply(this, [zone]);
this.gdate.setZone$java_util_TimeZone(zone);
if (this.cdate != null  && this.cdate !== this.gdate  ) {
this.cdate.setZone$java_util_TimeZone(zone);
}});

Clazz.newMeth(C$, 'isWeekDateSupported$',  function () {
return true;
});

Clazz.newMeth(C$, 'getWeekYear$',  function () {
var year=this.get$I(1);
if (p$1.internalGetEra.apply(this, []) == 0) {
year=1 - year;
}if (year > this.gregorianCutoverYear + 1) {
var weekOfYear=this.internalGet$I(3);
if (this.internalGet$I(2) == 0) {
if (weekOfYear >= 52) {
--year;
}} else {
if (weekOfYear == 1) {
++year;
}}return year;
}var dayOfYear=this.internalGet$I(6);
var maxDayOfYear=this.getActualMaximum$I(6);
var minimalDays=this.getMinimalDaysInFirstWeek$();
if (dayOfYear > minimalDays && dayOfYear < (maxDayOfYear - 6) ) {
return year;
}var cal=this.clone$();
cal.setLenient$Z(true);
cal.setTimeZone$java_util_TimeZone($I$(2).getTimeZone$S("GMT"));
cal.set$I$I(6, 1);
cal.complete$();
var delta=this.getFirstDayOfWeek$() - cal.get$I(7);
if (delta != 0) {
if (delta < 0) {
delta+=7;
}cal.add$I$I(6, delta);
}var minDayOfYear=cal.get$I(6);
if (dayOfYear < minDayOfYear) {
if (minDayOfYear <= minimalDays) {
--year;
}} else {
cal.set$I$I(1, year + 1);
cal.set$I$I(6, 1);
cal.complete$();
var del=this.getFirstDayOfWeek$() - cal.get$I(7);
if (del != 0) {
if (del < 0) {
del+=7;
}cal.add$I$I(6, del);
}minDayOfYear=cal.get$I(6) - 1;
if (minDayOfYear == 0) {
minDayOfYear=7;
}if (minDayOfYear >= minimalDays) {
var days=maxDayOfYear - dayOfYear + 1;
if (days <= (7 - minDayOfYear)) {
++year;
}}}return year;
});

Clazz.newMeth(C$, 'setWeekDate$I$I$I',  function (weekYear, weekOfYear, dayOfWeek) {
if (dayOfWeek < 1 || dayOfWeek > 7 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid dayOfWeek: " + dayOfWeek]);
}var gc=this.clone$();
gc.setLenient$Z(true);
var era=gc.get$I(0);
gc.clear$();
gc.setTimeZone$java_util_TimeZone($I$(2).getTimeZone$S("GMT"));
gc.set$I$I(0, era);
gc.set$I$I(1, weekYear);
gc.set$I$I(3, 1);
gc.set$I$I(7, this.getFirstDayOfWeek$());
var days=dayOfWeek - this.getFirstDayOfWeek$();
if (days < 0) {
days+=7;
}days+=7 * (weekOfYear - 1);
if (days != 0) {
gc.add$I$I(6, days);
} else {
gc.complete$();
}if (!this.isLenient$() && (gc.getWeekYear$() != weekYear || gc.internalGet$I(3) != weekOfYear  || gc.internalGet$I(7) != dayOfWeek ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.set$I$I(0, gc.internalGet$I(0));
this.set$I$I(1, gc.internalGet$I(1));
this.set$I$I(2, gc.internalGet$I(2));
this.set$I$I(5, gc.internalGet$I(5));
this.internalSet$I$I(3, weekOfYear);
this.complete$();
});

Clazz.newMeth(C$, 'getWeeksInWeekYear$',  function () {
var gc=p$1.getNormalizedCalendar.apply(this, []);
var weekYear=gc.getWeekYear$();
if (weekYear == gc.internalGet$I(1)) {
return gc.getActualMaximum$I(3);
}if (gc === this ) {
gc=gc.clone$();
}gc.setWeekDate$I$I$I(weekYear, 2, this.internalGet$I(7));
return gc.getActualMaximum$I(3);
});

Clazz.newMeth(C$, 'computeFields$',  function () {
var mask;
if (this.isPartiallyNormalized$()) {
mask=this.getSetStateFields$();
var fieldMask=~mask & 131071;
if (fieldMask != 0 || this.calsys == null  ) {
mask|=p$1.computeFields$I$I.apply(this, [fieldMask, mask & (98304)]);
Clazz.assert(C$, this, function(){return mask == 131071});
}} else {
mask=131071;
p$1.computeFields$I$I.apply(this, [mask, 0]);
}this.setFieldsComputed$I(mask);
});

Clazz.newMeth(C$, 'computeFields$I$I',  function (fieldMask, tzMask) {
var zoneOffset=0;
var tz=this.getZone$();
if (this.zoneOffsets == null ) {
this.zoneOffsets=Clazz.array(Integer.TYPE, [2]);
}if (tzMask != (98304)) {
if (Clazz.instanceOf(tz, "sun.util.calendar.ZoneInfo")) {
zoneOffset=(tz).getOffsets$J$IA(this.time, this.zoneOffsets);
} else {
zoneOffset=tz.getOffset$J(this.time);
this.zoneOffsets[0]=tz.getRawOffset$();
this.zoneOffsets[1]=zoneOffset - this.zoneOffsets[0];
}}if (tzMask != 0) {
if ($I$(7).isFieldSet$I$I(tzMask, 15)) {
this.zoneOffsets[0]=this.internalGet$I(15);
}if ($I$(7).isFieldSet$I$I(tzMask, 16)) {
this.zoneOffsets[1]=this.internalGet$I(16);
}zoneOffset=this.zoneOffsets[0] + this.zoneOffsets[1];
}var fixedDate=Long.$div(zoneOffset,86400000);
var timeOfDay=zoneOffset % 86400000;
(fixedDate=Long.$add(fixedDate,(Long.$div(this.time,86400000))));
timeOfDay+=Long.$ival((Long.$mod(this.time,86400000)));
if (Long.$ge(timeOfDay,86400000 )) {
timeOfDay=Long.$ival(Long.$sub(timeOfDay,(86400000)));
(fixedDate=Long.$inc(fixedDate,1));
} else {
while (timeOfDay < 0){
timeOfDay=Long.$ival(Long.$add(timeOfDay,(86400000)));
(fixedDate=Long.$inc(fixedDate,-1));
}
}(fixedDate=Long.$add(fixedDate,(719163)));
var era=1;
var year;
if (Long.$ge(fixedDate,this.gregorianCutoverDate )) {
Clazz.assert(C$, this, function(){return Long.$eq(this.cachedFixedDate,[0,549755813888,-1] ) || this.gdate.isNormalized$() }, function(){return "cache control: not normalized"});
Clazz.assert(C$, this, function(){return Long.$eq(this.cachedFixedDate,[0,549755813888,-1] ) || Long.$eq(C$.gcal.getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date(this.gdate.getNormalizedYear$(), this.gdate.getMonth$(), this.gdate.getDayOfMonth$(), this.gdate),this.cachedFixedDate ) }, function(){return "cache control: inconsictency, cachedFixedDate=" + Long.$s(this.cachedFixedDate) + ", computed=" + Long.$s(C$.gcal.getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date(this.gdate.getNormalizedYear$(), this.gdate.getMonth$(), this.gdate.getDayOfMonth$(), this.gdate)) + ", date=" + this.gdate });
if (Long.$ne(fixedDate,this.cachedFixedDate )) {
C$.gcal.getCalendarDateFromFixedDate$sun_util_calendar_CalendarDate$J(this.gdate, fixedDate);
this.cachedFixedDate=fixedDate;
}year=this.gdate.getYear$();
if (year <= 0) {
year=1 - year;
era=0;
}this.calsys=C$.gcal;
this.cdate=this.gdate;
Clazz.assert(C$, this, function(){return this.cdate.getDayOfWeek$() > 0}, function(){return "dow=" + this.cdate.getDayOfWeek$() + ", date=" + this.cdate });
} else {
this.calsys=C$.getJulianCalendarSystem$();
this.cdate=C$.jcal.newCalendarDate$java_util_TimeZone(this.getZone$());
C$.jcal.getCalendarDateFromFixedDate$sun_util_calendar_CalendarDate$J(this.cdate, fixedDate);
var e=this.cdate.getEra$();
if (e === C$.jeras[0] ) {
era=0;
}year=this.cdate.getYear$();
}this.internalSet$I$I(0, era);
this.internalSet$I$I(1, year);
var mask=fieldMask | (3);
var month=this.cdate.getMonth$() - 1;
var dayOfMonth=this.cdate.getDayOfMonth$();
if ((fieldMask & (164)) != 0) {
this.internalSet$I$I(2, month);
this.internalSet$I$I(5, dayOfMonth);
this.internalSet$I$I(7, this.cdate.getDayOfWeek$());
mask|=164;
}if ((fieldMask & (32256)) != 0) {
if (timeOfDay != 0) {
var hours=(timeOfDay/3600000|0);
this.internalSet$I$I(11, hours);
this.internalSet$I$I(9, (hours/12|0));
this.internalSet$I$I(10, hours % 12);
var r=timeOfDay % 3600000;
this.internalSet$I$I(12, (r/60000|0));
r%=60000;
this.internalSet$I$I(13, (r/1000|0));
this.internalSet$I$I(14, r % 1000);
} else {
this.internalSet$I$I(11, 0);
this.internalSet$I$I(9, 0);
this.internalSet$I$I(10, 0);
this.internalSet$I$I(12, 0);
this.internalSet$I$I(13, 0);
this.internalSet$I$I(14, 0);
}mask|=(32256);
}if ((fieldMask & (98304)) != 0) {
this.internalSet$I$I(15, this.zoneOffsets[0]);
this.internalSet$I$I(16, this.zoneOffsets[1]);
mask|=(98304);
}if ((fieldMask & (344)) != 0) {
var normalizedYear=this.cdate.getNormalizedYear$();
var fixedDateJan1=this.calsys.getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date(normalizedYear, 1, 1, this.cdate);
var dayOfYear=Long.$ival((Long.$sub(fixedDate,fixedDateJan1))) + 1;
var fixedDateMonth1=Long.$add(Long.$sub(fixedDate,dayOfMonth),1);
var cutoverGap=0;
var cutoverYear=(this.calsys === C$.gcal ) ? this.gregorianCutoverYear : this.gregorianCutoverYearJulian;
var relativeDayOfMonth=dayOfMonth - 1;
if (normalizedYear == cutoverYear) {
if (this.gregorianCutoverYearJulian <= this.gregorianCutoverYear) {
fixedDateJan1=p$1.getFixedDateJan1$sun_util_calendar_BaseCalendar_Date$J.apply(this, [this.cdate, fixedDate]);
if (Long.$ge(fixedDate,this.gregorianCutoverDate )) {
fixedDateMonth1=p$1.getFixedDateMonth1$sun_util_calendar_BaseCalendar_Date$J.apply(this, [this.cdate, fixedDate]);
}}var realDayOfYear=Long.$ival((Long.$sub(fixedDate,fixedDateJan1))) + 1;
cutoverGap=dayOfYear - realDayOfYear;
dayOfYear=realDayOfYear;
relativeDayOfMonth=Long.$ival((Long.$sub(fixedDate,fixedDateMonth1)));
}this.internalSet$I$I(6, dayOfYear);
this.internalSet$I$I(8, (relativeDayOfMonth/7|0) + 1);
var weekOfYear=p$1.getWeekNumber$J$J.apply(this, [fixedDateJan1, fixedDate]);
if (weekOfYear == 0) {
var fixedDec31=Long.$sub(fixedDateJan1,1);
var prevJan1=Long.$sub(fixedDateJan1,365);
if (normalizedYear > (cutoverYear + 1)) {
if ($I$(5).isGregorianLeapYear$I(normalizedYear - 1)) {
(prevJan1=Long.$inc(prevJan1,-1));
}} else if (normalizedYear <= this.gregorianCutoverYearJulian) {
if ($I$(5).isJulianLeapYear$I(normalizedYear - 1)) {
(prevJan1=Long.$inc(prevJan1,-1));
}} else {
var calForJan1=this.calsys;
var prevYear=p$1.getCalendarDate$J.apply(this, [fixedDec31]).getNormalizedYear$();
if (prevYear == this.gregorianCutoverYear) {
calForJan1=p$1.getCutoverCalendarSystem.apply(this, []);
if (calForJan1 === C$.jcal ) {
prevJan1=calForJan1.getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date(prevYear, 1, 1, null);
} else {
prevJan1=this.gregorianCutoverDate;
calForJan1=C$.gcal;
}} else if (prevYear <= this.gregorianCutoverYearJulian) {
calForJan1=C$.getJulianCalendarSystem$();
prevJan1=calForJan1.getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date(prevYear, 1, 1, null);
}}weekOfYear=p$1.getWeekNumber$J$J.apply(this, [prevJan1, fixedDec31]);
} else {
if (normalizedYear > this.gregorianCutoverYear || normalizedYear < (this.gregorianCutoverYearJulian - 1) ) {
if (weekOfYear >= 52) {
var nextJan1=Long.$add(fixedDateJan1,365);
if (this.cdate.isLeapYear$()) {
(nextJan1=Long.$inc(nextJan1,1));
}var nextJan1st=$I$(6,"getDayOfWeekDateOnOrBefore$J$I",[Long.$add(nextJan1,6), this.getFirstDayOfWeek$()]);
var ndays=Long.$ival((Long.$sub(nextJan1st,nextJan1)));
if (ndays >= this.getMinimalDaysInFirstWeek$() && Long.$ge(fixedDate,(Long.$sub(nextJan1st,7)) ) ) {
weekOfYear=1;
}}} else {
var calForJan1=this.calsys;
var nextYear=normalizedYear + 1;
if (nextYear == (this.gregorianCutoverYearJulian + 1) && nextYear < this.gregorianCutoverYear ) {
nextYear=this.gregorianCutoverYear;
}if (nextYear == this.gregorianCutoverYear) {
calForJan1=p$1.getCutoverCalendarSystem.apply(this, []);
}var nextJan1;
if (nextYear > this.gregorianCutoverYear || this.gregorianCutoverYearJulian == this.gregorianCutoverYear  || nextYear == this.gregorianCutoverYearJulian ) {
nextJan1=calForJan1.getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date(nextYear, 1, 1, null);
} else {
nextJan1=this.gregorianCutoverDate;
calForJan1=C$.gcal;
}var nextJan1st=$I$(6,"getDayOfWeekDateOnOrBefore$J$I",[Long.$add(nextJan1,6), this.getFirstDayOfWeek$()]);
var ndays=Long.$ival((Long.$sub(nextJan1st,nextJan1)));
if (ndays >= this.getMinimalDaysInFirstWeek$() && Long.$ge(fixedDate,(Long.$sub(nextJan1st,7)) ) ) {
weekOfYear=1;
}}}this.internalSet$I$I(3, weekOfYear);
this.internalSet$I$I(4, p$1.getWeekNumber$J$J.apply(this, [fixedDateMonth1, fixedDate]));
mask|=(344);
}return mask;
}, p$1);

Clazz.newMeth(C$, 'getWeekNumber$J$J',  function (fixedDay1, fixedDate) {
var fixedDay1st=$I$(6,"getDayOfWeekDateOnOrBefore$J$I",[Long.$add(fixedDay1,6), this.getFirstDayOfWeek$()]);
var ndays=Long.$ival((Long.$sub(fixedDay1st,fixedDay1)));
Clazz.assert(C$, this, function(){return ndays <= 7});
if (ndays >= this.getMinimalDaysInFirstWeek$()) {
(fixedDay1st=Long.$sub(fixedDay1st,(7)));
}var normalizedDayOfPeriod=Long.$ival((Long.$sub(fixedDate,fixedDay1st)));
if (normalizedDayOfPeriod >= 0) {
return (normalizedDayOfPeriod/7|0) + 1;
}return $I$(5).floorDivide$I$I(normalizedDayOfPeriod, 7) + 1;
}, p$1);

Clazz.newMeth(C$, 'computeTime$',  function () {
if (!this.isLenient$()) {
if (this.originalFields == null ) {
this.originalFields=Clazz.array(Integer.TYPE, [17]);
}for (var field=0; field < 17; field++) {
var value=this.internalGet$I(field);
if (this.isExternallySet$I(field)) {
if (value < this.getMinimum$I(field) || value > this.getMaximum$I(field) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(7).getFieldName$I(field)]);
}}this.originalFields[field]=value;
}
}var fieldMask=this.selectFields$();
var year=this.isSet$I(1) ? this.internalGet$I(1) : 1970;
var era=p$1.internalGetEra.apply(this, []);
if (era == 0) {
year=1 - year;
} else if (era != 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid era"]);
}if (year <= 0 && !this.isSet$I(0) ) {
fieldMask|=1;
this.setFieldsComputed$I(1);
}var timeOfDay=0;
if ($I$(7).isFieldSet$I$I(fieldMask, 11)) {
(timeOfDay=Long.$add(timeOfDay,(this.internalGet$I(11))));
} else {
(timeOfDay=Long.$add(timeOfDay,(this.internalGet$I(10))));
if ($I$(7).isFieldSet$I$I(fieldMask, 9)) {
(timeOfDay=Long.$add(timeOfDay,(12 * this.internalGet$I(9))));
}}(timeOfDay=Long.$mul(timeOfDay,(60)));
(timeOfDay=Long.$add(timeOfDay,(this.internalGet$I(12))));
(timeOfDay=Long.$mul(timeOfDay,(60)));
(timeOfDay=Long.$add(timeOfDay,(this.internalGet$I(13))));
(timeOfDay=Long.$mul(timeOfDay,(1000)));
(timeOfDay=Long.$add(timeOfDay,(this.internalGet$I(14))));
var fixedDate=Long.$div(timeOfDay,86400000);
(timeOfDay=Long.$mod(timeOfDay,(86400000)));
while (Long.$lt(timeOfDay,0 )){
(timeOfDay=Long.$add(timeOfDay,(86400000)));
(fixedDate=Long.$inc(fixedDate,-1));
}
 calculateFixedDate : {
var gfd;
var jfd;
if (year > this.gregorianCutoverYear && year > this.gregorianCutoverYearJulian ) {
gfd=Long.$add(fixedDate,p$1.getFixedDate$sun_util_calendar_BaseCalendar$I$I.apply(this, [C$.gcal, year, fieldMask]));
if (Long.$ge(gfd,this.gregorianCutoverDate )) {
fixedDate=gfd;
break calculateFixedDate;
}jfd=Long.$add(fixedDate,p$1.getFixedDate$sun_util_calendar_BaseCalendar$I$I.apply(this, [C$.getJulianCalendarSystem$(), year, fieldMask]));
} else if (year < this.gregorianCutoverYear && year < this.gregorianCutoverYearJulian ) {
jfd=Long.$add(fixedDate,p$1.getFixedDate$sun_util_calendar_BaseCalendar$I$I.apply(this, [C$.getJulianCalendarSystem$(), year, fieldMask]));
if (Long.$lt(jfd,this.gregorianCutoverDate )) {
fixedDate=jfd;
break calculateFixedDate;
}gfd=jfd;
} else {
jfd=Long.$add(fixedDate,p$1.getFixedDate$sun_util_calendar_BaseCalendar$I$I.apply(this, [C$.getJulianCalendarSystem$(), year, fieldMask]));
gfd=Long.$add(fixedDate,p$1.getFixedDate$sun_util_calendar_BaseCalendar$I$I.apply(this, [C$.gcal, year, fieldMask]));
}if ($I$(7).isFieldSet$I$I(fieldMask, 6) || $I$(7).isFieldSet$I$I(fieldMask, 3) ) {
if (this.gregorianCutoverYear == this.gregorianCutoverYearJulian) {
fixedDate=jfd;
break calculateFixedDate;
} else if (year == this.gregorianCutoverYear) {
fixedDate=gfd;
break calculateFixedDate;
}}if (Long.$ge(gfd,this.gregorianCutoverDate )) {
if (Long.$ge(jfd,this.gregorianCutoverDate )) {
fixedDate=gfd;
} else {
if (this.calsys === C$.gcal  || this.calsys == null  ) {
fixedDate=gfd;
} else {
fixedDate=jfd;
}}} else {
if (Long.$lt(jfd,this.gregorianCutoverDate )) {
fixedDate=jfd;
} else {
if (!this.isLenient$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["the specified date doesn\'t exist"]);
}fixedDate=jfd;
}}}var millis=Long.$add(Long.$mul((Long.$sub(fixedDate,719163)),86400000),timeOfDay);
var zone=this.getZone$();
if (this.zoneOffsets == null ) {
this.zoneOffsets=Clazz.array(Integer.TYPE, [2]);
}var tzMask=fieldMask & (98304);
if (tzMask != (98304)) {
if (Clazz.instanceOf(zone, "sun.util.calendar.ZoneInfo")) {
(zone).getOffsetsByWall$J$IA(millis, this.zoneOffsets);
} else {
var gmtOffset=$I$(7).isFieldSet$I$I(fieldMask, 15) ? this.internalGet$I(15) : zone.getRawOffset$();
zone.getOffsets$J$IA(Long.$sub(millis,gmtOffset), this.zoneOffsets);
}}if (tzMask != 0) {
if ($I$(7).isFieldSet$I$I(tzMask, 15)) {
this.zoneOffsets[0]=this.internalGet$I(15);
}if ($I$(7).isFieldSet$I$I(tzMask, 16)) {
this.zoneOffsets[1]=this.internalGet$I(16);
}}(millis=Long.$sub(millis,(this.zoneOffsets[0] + this.zoneOffsets[1])));
this.time=millis;
var mask=p$1.computeFields$I$I.apply(this, [fieldMask | this.getSetStateFields$(), tzMask]);
if (!this.isLenient$()) {
for (var field=0; field < 17; field++) {
if (!this.isExternallySet$I(field)) {
continue;
}if (this.originalFields[field] != this.internalGet$I(field)) {
var s=this.originalFields[field] + " -> " + this.internalGet$I(field) ;
System.arraycopy$O$I$O$I$I(this.originalFields, 0, this.fields, 0, this.fields.length);
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(7).getFieldName$I(field) + ": " + s ]);
}}
}this.setFieldsNormalized$I(mask);
});

Clazz.newMeth(C$, 'getFixedDate$sun_util_calendar_BaseCalendar$I$I',  function (cal, year, fieldMask) {
var month=0;
if ($I$(7).isFieldSet$I$I(fieldMask, 2)) {
month=this.internalGet$I(2);
if (month > 11) {
year+=(month/12|0);
month%=12;
} else if (month < 0) {
var rem=Clazz.array(Integer.TYPE, [1]);
year+=$I$(5).floorDivide$I$I$IA(month, 12, rem);
month=rem[0];
}}var fixedDate=cal.getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date(year, month + 1, 1, cal === C$.gcal  ? this.gdate : null);
if ($I$(7).isFieldSet$I$I(fieldMask, 2)) {
if ($I$(7).isFieldSet$I$I(fieldMask, 5)) {
if (this.isSet$I(5)) {
(fixedDate=Long.$add(fixedDate,(this.internalGet$I(5))));
(fixedDate=Long.$inc(fixedDate,-1));
}} else {
if ($I$(7).isFieldSet$I$I(fieldMask, 4)) {
var firstDayOfWeek=$I$(6,"getDayOfWeekDateOnOrBefore$J$I",[Long.$add(fixedDate,6), this.getFirstDayOfWeek$()]);
if (Long.$ge((Long.$sub(firstDayOfWeek,fixedDate)),this.getMinimalDaysInFirstWeek$() )) {
(firstDayOfWeek=Long.$sub(firstDayOfWeek,(7)));
}if ($I$(7).isFieldSet$I$I(fieldMask, 7)) {
firstDayOfWeek=$I$(6,"getDayOfWeekDateOnOrBefore$J$I",[Long.$add(firstDayOfWeek,6), this.internalGet$I(7)]);
}fixedDate=Long.$add(firstDayOfWeek,7 * (this.internalGet$I(4) - 1));
} else {
var dayOfWeek;
if ($I$(7).isFieldSet$I$I(fieldMask, 7)) {
dayOfWeek=this.internalGet$I(7);
} else {
dayOfWeek=this.getFirstDayOfWeek$();
}var dowim;
if ($I$(7).isFieldSet$I$I(fieldMask, 8)) {
dowim=this.internalGet$I(8);
} else {
dowim=1;
}if (dowim >= 0) {
fixedDate=$I$(6,"getDayOfWeekDateOnOrBefore$J$I",[Long.$sub(Long.$add(fixedDate,(7 * dowim)),1), dayOfWeek]);
} else {
var lastDate=p$1.monthLength$I$I.apply(this, [month, year]) + (7 * (dowim + 1));
fixedDate=$I$(6,"getDayOfWeekDateOnOrBefore$J$I",[Long.$sub(Long.$add(fixedDate,lastDate),1), dayOfWeek]);
}}}} else {
if (year == this.gregorianCutoverYear && cal === C$.gcal   && Long.$lt(fixedDate,this.gregorianCutoverDate )  && this.gregorianCutoverYear != this.gregorianCutoverYearJulian ) {
fixedDate=this.gregorianCutoverDate;
}if ($I$(7).isFieldSet$I$I(fieldMask, 6)) {
(fixedDate=Long.$add(fixedDate,(this.internalGet$I(6))));
(fixedDate=Long.$inc(fixedDate,-1));
} else {
var firstDayOfWeek=$I$(6,"getDayOfWeekDateOnOrBefore$J$I",[Long.$add(fixedDate,6), this.getFirstDayOfWeek$()]);
if (Long.$ge((Long.$sub(firstDayOfWeek,fixedDate)),this.getMinimalDaysInFirstWeek$() )) {
(firstDayOfWeek=Long.$sub(firstDayOfWeek,(7)));
}if ($I$(7).isFieldSet$I$I(fieldMask, 7)) {
var dayOfWeek=this.internalGet$I(7);
if (dayOfWeek != this.getFirstDayOfWeek$()) {
firstDayOfWeek=$I$(6,"getDayOfWeekDateOnOrBefore$J$I",[Long.$add(firstDayOfWeek,6), dayOfWeek]);
}}fixedDate=Long.$add(firstDayOfWeek,Long.$mul(7,(Long.$sub(this.internalGet$I(3),1))));
}}return fixedDate;
}, p$1);

Clazz.newMeth(C$, 'getNormalizedCalendar',  function () {
var gc;
if (this.isFullyNormalized$()) {
gc=this;
} else {
gc=this.clone$();
gc.setLenient$Z(true);
gc.complete$();
}return gc;
}, p$1);

Clazz.newMeth(C$, 'getJulianCalendarSystem$',  function () {
if (C$.jcal == null ) {
C$.jcal=$I$(1).forName$S("julian");
C$.jeras=C$.jcal.getEras$();
}return C$.jcal;
}, 1);

Clazz.newMeth(C$, 'getCutoverCalendarSystem',  function () {
if (this.gregorianCutoverYearJulian < this.gregorianCutoverYear) {
return C$.gcal;
}return C$.getJulianCalendarSystem$();
}, p$1);

Clazz.newMeth(C$, 'isCutoverYear$I',  function (normalizedYear) {
var cutoverYear=(this.calsys === C$.gcal ) ? this.gregorianCutoverYear : this.gregorianCutoverYearJulian;
return normalizedYear == cutoverYear;
}, p$1);

Clazz.newMeth(C$, 'getFixedDateJan1$sun_util_calendar_BaseCalendar_Date$J',  function (date, fixedDate) {
Clazz.assert(C$, this, function(){return date.getNormalizedYear$() == this.gregorianCutoverYear || date.getNormalizedYear$() == this.gregorianCutoverYearJulian });
if (this.gregorianCutoverYear != this.gregorianCutoverYearJulian) {
if (Long.$ge(fixedDate,this.gregorianCutoverDate )) {
return this.gregorianCutoverDate;
}}var juliancal=C$.getJulianCalendarSystem$();
return juliancal.getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date(date.getNormalizedYear$(), 1, 1, null);
}, p$1);

Clazz.newMeth(C$, 'getFixedDateMonth1$sun_util_calendar_BaseCalendar_Date$J',  function (date, fixedDate) {
Clazz.assert(C$, this, function(){return date.getNormalizedYear$() == this.gregorianCutoverYear || date.getNormalizedYear$() == this.gregorianCutoverYearJulian });
var gCutover=p$1.getGregorianCutoverDate.apply(this, []);
if (gCutover.getMonth$() == 1 && gCutover.getDayOfMonth$() == 1 ) {
return Long.$add(Long.$sub(fixedDate,date.getDayOfMonth$()),1);
}var fixedDateMonth1;
if (date.getMonth$() == gCutover.getMonth$()) {
var jLastDate=p$1.getLastJulianDate.apply(this, []);
if (this.gregorianCutoverYear == this.gregorianCutoverYearJulian && gCutover.getMonth$() == jLastDate.getMonth$() ) {
fixedDateMonth1=C$.jcal.getFixedDate$I$I$I$sun_util_calendar_BaseCalendar_Date(date.getNormalizedYear$(), date.getMonth$(), 1, null);
} else {
fixedDateMonth1=this.gregorianCutoverDate;
}} else {
fixedDateMonth1=Long.$add(Long.$sub(fixedDate,date.getDayOfMonth$()),1);
}return fixedDateMonth1;
}, p$1);

Clazz.newMeth(C$, 'getCalendarDate$J',  function (fd) {
var cal=(Long.$ge(fd,this.gregorianCutoverDate )) ? C$.gcal : C$.getJulianCalendarSystem$();
var d=cal.newCalendarDate$java_util_TimeZone($I$(2).NO_TIMEZONE);
cal.getCalendarDateFromFixedDate$sun_util_calendar_CalendarDate$J(d, fd);
return d;
}, p$1);

Clazz.newMeth(C$, 'getGregorianCutoverDate',  function () {
return p$1.getCalendarDate$J.apply(this, [this.gregorianCutoverDate]);
}, p$1);

Clazz.newMeth(C$, 'getLastJulianDate',  function () {
return p$1.getCalendarDate$J.apply(this, [Long.$sub(this.gregorianCutoverDate,1)]);
}, p$1);

Clazz.newMeth(C$, 'monthLength$I$I',  function (month, year) {
return this.isLeapYear$I(year) ? C$.LEAP_MONTH_LENGTH[month] : C$.MONTH_LENGTH[month];
}, p$1);

Clazz.newMeth(C$, 'monthLength$I',  function (month) {
var year=this.internalGet$I(1);
if (p$1.internalGetEra.apply(this, []) == 0) {
year=1 - year;
}return p$1.monthLength$I$I.apply(this, [month, year]);
}, p$1);

Clazz.newMeth(C$, 'actualMonthLength',  function () {
var year=this.cdate.getNormalizedYear$();
if (year != this.gregorianCutoverYear && year != this.gregorianCutoverYearJulian ) {
return this.calsys.getMonthLength$sun_util_calendar_CalendarDate(this.cdate);
}var date=this.cdate.clone$();
var fd=this.calsys.getFixedDate$sun_util_calendar_CalendarDate(date);
var month1=p$1.getFixedDateMonth1$sun_util_calendar_BaseCalendar_Date$J.apply(this, [date, fd]);
var next1=Long.$add(month1,this.calsys.getMonthLength$sun_util_calendar_CalendarDate(date));
if (Long.$lt(next1,this.gregorianCutoverDate )) {
return Long.$ival((Long.$sub(next1,month1)));
}if (this.cdate !== this.gdate ) {
date=C$.gcal.newCalendarDate$java_util_TimeZone($I$(2).NO_TIMEZONE);
}C$.gcal.getCalendarDateFromFixedDate$sun_util_calendar_CalendarDate$J(date, next1);
next1=p$1.getFixedDateMonth1$sun_util_calendar_BaseCalendar_Date$J.apply(this, [date, next1]);
return Long.$ival((Long.$sub(next1,month1)));
}, p$1);

Clazz.newMeth(C$, 'yearLength$I',  function (year) {
return this.isLeapYear$I(year) ? 366 : 365;
}, p$1);

Clazz.newMeth(C$, 'yearLength',  function () {
var year=this.internalGet$I(1);
if (p$1.internalGetEra.apply(this, []) == 0) {
year=1 - year;
}return p$1.yearLength$I.apply(this, [year]);
}, p$1);

Clazz.newMeth(C$, 'pinDayOfMonth',  function () {
var year=this.internalGet$I(1);
var monthLen;
if (year > this.gregorianCutoverYear || year < this.gregorianCutoverYearJulian ) {
monthLen=p$1.monthLength$I.apply(this, [this.internalGet$I(2)]);
} else {
var gc=p$1.getNormalizedCalendar.apply(this, []);
monthLen=gc.getActualMaximum$I(5);
}var dom=this.internalGet$I(5);
if (dom > monthLen) {
this.set$I$I(5, monthLen);
}}, p$1);

Clazz.newMeth(C$, 'getCurrentFixedDate',  function () {
return (this.calsys === C$.gcal ) ? this.cachedFixedDate : this.calsys.getFixedDate$sun_util_calendar_CalendarDate(this.cdate);
}, p$1);

Clazz.newMeth(C$, 'getRolledValue$I$I$I$I',  function (value, amount, min, max) {
Clazz.assert(C$, this, function(){return value >= min && value <= max });
var range=max - min + 1;
amount%=range;
var n=value + amount;
if (n > max) {
n-=range;
} else if (n < min) {
n+=range;
}Clazz.assert(C$, this, function(){return n >= min && n <= max });
return n;
}, 1);

Clazz.newMeth(C$, 'internalGetEra',  function () {
return this.isSet$I(0) ? this.internalGet$I(0) : 1;
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (stream) {
stream.defaultReadObject$();
if (this.gdate == null ) {
this.gdate=C$.gcal.newCalendarDate$java_util_TimeZone(this.getZone$());
this.cachedFixedDate=[0,549755813888,-1];
}p$1.setGregorianChange$J.apply(this, [this.gregorianCutover]);
}, p$1);

Clazz.newMeth(C$, 'toZonedDateTime$',  function () {
return $I$(8,"ofInstant$java_time_Instant$java_time_ZoneId",[$I$(9,"ofEpochMilli$J",[this.getTimeInMillis$()]), this.getTimeZone$().toZoneId$()]);
});

Clazz.newMeth(C$, 'from$java_time_ZonedDateTime',  function (zdt) {
var cal=Clazz.new_(C$.c$$java_util_TimeZone,[$I$(2,"getTimeZone$java_time_ZoneId",[zdt.getZone$()])]);
cal.setGregorianChange$java_util_Date(Clazz.new_(java.util.Date.c$$J,[[0,549755813888,-1]]));
cal.setFirstDayOfWeek$I(2);
cal.setMinimalDaysInFirstWeek$I(4);
try {
cal.setTimeInMillis$J(Math.addExact$J$J(Math.multiplyExact$J$J(zdt.toEpochSecond$(), 1000), zdt.get$java_time_temporal_TemporalField($I$(10).MILLI_OF_SECOND)));
} catch (ex) {
if (Clazz.exceptionOf(ex,"ArithmeticException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$Throwable,[ex]);
} else {
throw ex;
}
}
return cal;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.MONTH_LENGTH=Clazz.array(Integer.TYPE, -1, [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
C$.LEAP_MONTH_LENGTH=Clazz.array(Integer.TYPE, -1, [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
C$.MIN_VALUES=Clazz.array(Integer.TYPE, -1, [0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, -46800000, 0]);
C$.LEAST_MAX_VALUES=Clazz.array(Integer.TYPE, -1, [1, 292269054, 11, 52, 4, 28, 365, 7, 4, 1, 11, 23, 59, 59, 999, 50400000, 1200000]);
C$.MAX_VALUES=Clazz.array(Integer.TYPE, -1, [1, 292278994, 11, 53, 6, 31, 366, 7, 6, 1, 11, 23, 59, 59, 999, 50400000, 7200000]);
C$.gcal=$I$(1).getGregorianCalendar$();
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:32 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
