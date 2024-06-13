(function(){var P$=Clazz.newPackage("sun.util.calendar"),I$=[[0,'java.util.TimeZone','InternalError','StringBuilder','sun.util.calendar.CalendarUtils']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CalendarDate", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dayOfWeek=-2147483648;
},1);

C$.$fields$=[['Z',['leapYear','normalized','forceStandardTime'],'I',['year','month','dayOfMonth','dayOfWeek','hours','minutes','seconds','millis','zoneOffset','daylightSaving'],'J',['fraction'],'O',['era','sun.util.calendar.Era','zoneinfo','java.util.TimeZone','locale','java.util.Locale']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$java_util_TimeZone.apply(this, [$I$(1).getDefault$()]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_TimeZone',  function (zone) {
;C$.$init$.apply(this);
this.zoneinfo=zone;
}, 1);

Clazz.newMeth(C$, 'getEra$',  function () {
return this.era;
});

Clazz.newMeth(C$, 'setEra$sun_util_calendar_Era',  function (era) {
if (this.era === era ) {
return this;
}this.era=era;
this.normalized=false;
return this;
});

Clazz.newMeth(C$, 'getYear$',  function () {
return this.year;
});

Clazz.newMeth(C$, 'setYear$I',  function (year) {
if (this.year != year) {
this.year=year;
this.normalized=false;
}return this;
});

Clazz.newMeth(C$, 'addYear$I',  function (n) {
if (n != 0) {
this.year+=n;
this.normalized=false;
}return this;
});

Clazz.newMeth(C$, 'isLeapYear$',  function () {
return this.leapYear;
});

Clazz.newMeth(C$, 'setLeapYear$Z',  function (leapYear) {
this.leapYear=leapYear;
});

Clazz.newMeth(C$, 'getMonth$',  function () {
return this.month;
});

Clazz.newMeth(C$, 'setMonth$I',  function (month) {
if (this.month != month) {
this.month=month;
this.normalized=false;
}return this;
});

Clazz.newMeth(C$, 'addMonth$I',  function (n) {
if (n != 0) {
this.month+=n;
this.normalized=false;
}return this;
});

Clazz.newMeth(C$, 'getDayOfMonth$',  function () {
return this.dayOfMonth;
});

Clazz.newMeth(C$, 'setDayOfMonth$I',  function (date) {
if (this.dayOfMonth != date) {
this.dayOfMonth=date;
this.normalized=false;
}return this;
});

Clazz.newMeth(C$, 'addDayOfMonth$I',  function (n) {
if (n != 0) {
this.dayOfMonth+=n;
this.normalized=false;
}return this;
});

Clazz.newMeth(C$, 'getDayOfWeek$',  function () {
if (!this.isNormalized$()) {
this.dayOfWeek=-2147483648;
}return this.dayOfWeek;
});

Clazz.newMeth(C$, 'getHours$',  function () {
return this.hours;
});

Clazz.newMeth(C$, 'setHours$I',  function (hours) {
if (this.hours != hours) {
this.hours=hours;
this.normalized=false;
}return this;
});

Clazz.newMeth(C$, 'addHours$I',  function (n) {
if (n != 0) {
this.hours+=n;
this.normalized=false;
}return this;
});

Clazz.newMeth(C$, 'getMinutes$',  function () {
return this.minutes;
});

Clazz.newMeth(C$, 'setMinutes$I',  function (minutes) {
if (this.minutes != minutes) {
this.minutes=minutes;
this.normalized=false;
}return this;
});

Clazz.newMeth(C$, 'addMinutes$I',  function (n) {
if (n != 0) {
this.minutes+=n;
this.normalized=false;
}return this;
});

Clazz.newMeth(C$, 'getSeconds$',  function () {
return this.seconds;
});

Clazz.newMeth(C$, 'setSeconds$I',  function (seconds) {
if (this.seconds != seconds) {
this.seconds=seconds;
this.normalized=false;
}return this;
});

Clazz.newMeth(C$, 'addSeconds$I',  function (n) {
if (n != 0) {
this.seconds+=n;
this.normalized=false;
}return this;
});

Clazz.newMeth(C$, 'getMillis$',  function () {
return this.millis;
});

Clazz.newMeth(C$, 'setMillis$I',  function (millis) {
if (this.millis != millis) {
this.millis=millis;
this.normalized=false;
}return this;
});

Clazz.newMeth(C$, 'addMillis$I',  function (n) {
if (n != 0) {
this.millis+=n;
this.normalized=false;
}return this;
});

Clazz.newMeth(C$, 'getTimeOfDay$',  function () {
if (!this.isNormalized$()) {
return this.fraction=[0,549755813888,-1];
}return this.fraction;
});

Clazz.newMeth(C$, 'setDate$I$I$I',  function (year, month, dayOfMonth) {
this.setYear$I(year);
this.setMonth$I(month);
this.setDayOfMonth$I(dayOfMonth);
return this;
});

Clazz.newMeth(C$, 'addDate$I$I$I',  function (year, month, dayOfMonth) {
this.addYear$I(year);
this.addMonth$I(month);
this.addDayOfMonth$I(dayOfMonth);
return this;
});

Clazz.newMeth(C$, 'setTimeOfDay$I$I$I$I',  function (hours, minutes, seconds, millis) {
this.setHours$I(hours);
this.setMinutes$I(minutes);
this.setSeconds$I(seconds);
this.setMillis$I(millis);
return this;
});

Clazz.newMeth(C$, 'addTimeOfDay$I$I$I$I',  function (hours, minutes, seconds, millis) {
this.addHours$I(hours);
this.addMinutes$I(minutes);
this.addSeconds$I(seconds);
this.addMillis$I(millis);
return this;
});

Clazz.newMeth(C$, 'setTimeOfDay$J',  function (fraction) {
this.fraction=fraction;
});

Clazz.newMeth(C$, 'isNormalized$',  function () {
return this.normalized;
});

Clazz.newMeth(C$, 'isStandardTime$',  function () {
return this.forceStandardTime;
});

Clazz.newMeth(C$, 'setStandardTime$Z',  function (standardTime) {
this.forceStandardTime=standardTime;
});

Clazz.newMeth(C$, 'isDaylightTime$',  function () {
if (this.isStandardTime$()) {
return false;
}return this.daylightSaving != 0;
});

Clazz.newMeth(C$, 'setLocale$java_util_Locale',  function (loc) {
this.locale=loc;
});

Clazz.newMeth(C$, 'getZone$',  function () {
return this.zoneinfo;
});

Clazz.newMeth(C$, 'setZone$java_util_TimeZone',  function (zoneinfo) {
this.zoneinfo=zoneinfo;
return this;
});

Clazz.newMeth(C$, 'isSameDate$sun_util_calendar_CalendarDate',  function (date) {
return this.getDayOfWeek$() == date.getDayOfWeek$() && this.getMonth$() == date.getMonth$()  && this.getYear$() == date.getYear$()  && this.getEra$() === date.getEra$()  ;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (!(Clazz.instanceOf(obj, "sun.util.calendar.CalendarDate"))) {
return false;
}var that=obj;
if (this.isNormalized$() != that.isNormalized$() ) {
return false;
}var hasZone=this.zoneinfo != null ;
var thatHasZone=that.zoneinfo != null ;
if (hasZone != thatHasZone ) {
return false;
}if (hasZone && !this.zoneinfo.equals$O(that.zoneinfo) ) {
return false;
}return (this.getEra$() === that.getEra$()  && this.year == that.year  && this.month == that.month  && this.dayOfMonth == that.dayOfMonth  && this.hours == that.hours  && this.minutes == that.minutes  && this.seconds == that.seconds  && this.millis == that.millis  && this.zoneOffset == that.zoneOffset );
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var hash=Long.$mul((Long.$add((Long.$mul((Long.$add((Long.$mul((Long.$sub(this.year,1970)),12)),(this.month - 1))),30)),this.dayOfMonth)),24);
hash=Long.$add((Long.$mul((Long.$add((Long.$mul((Long.$add((Long.$mul((Long.$add(hash,this.hours)),60)),this.minutes)),60)),this.seconds)),1000)),this.millis);
(hash=Long.$sub(hash,(this.zoneOffset)));
var normalized=this.isNormalized$() ? 1 : 0;
var era=0;
var e=this.getEra$();
if (e != null ) {
era=e.hashCode$();
}var zone=this.zoneinfo != null  ? this.zoneinfo.hashCode$() : 0;
return Long.$ival(hash) * Long.$ival((Long.$sr(hash,32))) ^ era ^ normalized ^ zone;
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(2,1));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(3,1));
$I$(4).sprintf0d$StringBuilder$I$I(sb, this.year, 4).append$C("-");
$I$(4).sprintf0d$StringBuilder$I$I(sb, this.month, 2).append$C("-");
$I$(4).sprintf0d$StringBuilder$I$I(sb, this.dayOfMonth, 2).append$C("T");
$I$(4).sprintf0d$StringBuilder$I$I(sb, this.hours, 2).append$C(":");
$I$(4).sprintf0d$StringBuilder$I$I(sb, this.minutes, 2).append$C(":");
$I$(4).sprintf0d$StringBuilder$I$I(sb, this.seconds, 2).append$C(".");
$I$(4).sprintf0d$StringBuilder$I$I(sb, this.millis, 3);
if (this.zoneOffset == 0) {
sb.append$C("Z");
} else if (this.zoneOffset != -2147483648) {
var offset;
var sign;
if (this.zoneOffset > 0) {
offset=this.zoneOffset;
sign="+";
} else {
offset=-this.zoneOffset;
sign="-";
}offset=(offset/60000|0);
sb.append$C(sign);
$I$(4,"sprintf0d$StringBuilder$I$I",[sb, (offset/60|0), 2]);
$I$(4).sprintf0d$StringBuilder$I$I(sb, offset % 60, 2);
} else {
sb.append$S(" local time");
}return sb.toString();
});

Clazz.newMeth(C$, 'setDayOfWeek$I',  function (dayOfWeek) {
this.dayOfWeek=dayOfWeek;
});

Clazz.newMeth(C$, 'setNormalized$Z',  function (normalized) {
this.normalized=normalized;
});

Clazz.newMeth(C$, 'getZoneOffset$',  function () {
return this.zoneOffset;
});

Clazz.newMeth(C$, 'setZoneOffset$I',  function (offset) {
this.zoneOffset=offset;
});

Clazz.newMeth(C$, 'getDaylightSaving$',  function () {
return this.daylightSaving;
});

Clazz.newMeth(C$, 'setDaylightSaving$I',  function (daylightSaving) {
this.daylightSaving=daylightSaving;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
