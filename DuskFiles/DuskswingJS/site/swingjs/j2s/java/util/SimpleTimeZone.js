(function(){var P$=java.util,p$1={},I$=[[0,'sun.util.calendar.CalendarSystem','java.util.TimeZone','sun.util.calendar.CalendarUtils']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SimpleTimeZone", null, 'java.util.TimeZone');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.useDaylight=false;
this.monthLength=C$.staticMonthLength;
this.serialVersionOnStream=2;
},1);

C$.$fields$=[['Z',['useDaylight'],'I',['startMonth','startDay','startDayOfWeek','startTime','startTimeMode','endMonth','endDay','endDayOfWeek','endTime','endTimeMode','startYear','rawOffset','startMode','endMode','dstSavings','serialVersionOnStream'],'J',['cacheYear','cacheStart','cacheEnd'],'O',['monthLength','byte[]']]
,['O',['staticMonthLength','byte[]','+staticLeapMonthLength','gcal','sun.util.calendar.Gregorian']]]

Clazz.newMeth(C$, 'c$$I$S',  function (rawOffset, ID) {
Clazz.super_(C$, this);
this.rawOffset=rawOffset;
this.setID$S(ID);
this.dstSavings=3600000;
}, 1);

Clazz.newMeth(C$, 'c$$I$S$I$I$I$I$I$I$I$I',  function (rawOffset, ID, startMonth, startDay, startDayOfWeek, startTime, endMonth, endDay, endDayOfWeek, endTime) {
C$.c$$I$S$I$I$I$I$I$I$I$I$I$I$I.apply(this, [rawOffset, ID, startMonth, startDay, startDayOfWeek, startTime, 0, endMonth, endDay, endDayOfWeek, endTime, 0, 3600000]);
}, 1);

Clazz.newMeth(C$, 'c$$I$S$I$I$I$I$I$I$I$I$I',  function (rawOffset, ID, startMonth, startDay, startDayOfWeek, startTime, endMonth, endDay, endDayOfWeek, endTime, dstSavings) {
C$.c$$I$S$I$I$I$I$I$I$I$I$I$I$I.apply(this, [rawOffset, ID, startMonth, startDay, startDayOfWeek, startTime, 0, endMonth, endDay, endDayOfWeek, endTime, 0, dstSavings]);
}, 1);

Clazz.newMeth(C$, 'c$$I$S$I$I$I$I$I$I$I$I$I$I$I',  function (rawOffset, ID, startMonth, startDay, startDayOfWeek, startTime, startTimeMode, endMonth, endDay, endDayOfWeek, endTime, endTimeMode, dstSavings) {
Clazz.super_(C$, this);
this.setID$S(ID);
this.rawOffset=rawOffset;
this.startMonth=startMonth;
this.startDay=startDay;
this.startDayOfWeek=startDayOfWeek;
this.startTime=startTime;
this.startTimeMode=startTimeMode;
this.endMonth=endMonth;
this.endDay=endDay;
this.endDayOfWeek=endDayOfWeek;
this.endTime=endTime;
this.endTimeMode=endTimeMode;
this.dstSavings=dstSavings;
p$1.decodeRules.apply(this, []);
if (dstSavings <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal daylight saving value: " + dstSavings]);
}}, 1);

Clazz.newMeth(C$, 'setStartYear$I',  function (year) {
this.startYear=year;
p$1.invalidateCache.apply(this, []);
});

Clazz.newMeth(C$, 'setStartRule$I$I$I$I',  function (startMonth, startDay, startDayOfWeek, startTime) {
this.startMonth=startMonth;
this.startDay=startDay;
this.startDayOfWeek=startDayOfWeek;
this.startTime=startTime;
this.startTimeMode=0;
p$1.decodeStartRule.apply(this, []);
p$1.invalidateCache.apply(this, []);
});

Clazz.newMeth(C$, 'setStartRule$I$I$I',  function (startMonth, startDay, startTime) {
this.setStartRule$I$I$I$I(startMonth, startDay, 0, startTime);
});

Clazz.newMeth(C$, 'setStartRule$I$I$I$I$Z',  function (startMonth, startDay, startDayOfWeek, startTime, after) {
if (after) {
this.setStartRule$I$I$I$I(startMonth, startDay, -startDayOfWeek, startTime);
} else {
this.setStartRule$I$I$I$I(startMonth, -startDay, -startDayOfWeek, startTime);
}});

Clazz.newMeth(C$, 'setEndRule$I$I$I$I',  function (endMonth, endDay, endDayOfWeek, endTime) {
this.endMonth=endMonth;
this.endDay=endDay;
this.endDayOfWeek=endDayOfWeek;
this.endTime=endTime;
this.endTimeMode=0;
p$1.decodeEndRule.apply(this, []);
p$1.invalidateCache.apply(this, []);
});

Clazz.newMeth(C$, 'setEndRule$I$I$I',  function (endMonth, endDay, endTime) {
this.setEndRule$I$I$I$I(endMonth, endDay, 0, endTime);
});

Clazz.newMeth(C$, 'setEndRule$I$I$I$I$Z',  function (endMonth, endDay, endDayOfWeek, endTime, after) {
if (after) {
this.setEndRule$I$I$I$I(endMonth, endDay, -endDayOfWeek, endTime);
} else {
this.setEndRule$I$I$I$I(endMonth, -endDay, -endDayOfWeek, endTime);
}});

Clazz.newMeth(C$, 'getOffset$J',  function (date) {
return this.getOffsets$J$IA(date, null);
});

Clazz.newMeth(C$, 'getOffsets$J$IA',  function (date, offsets) {
var offset=this.rawOffset;
 computeOffset : if (this.useDaylight) {
{
if (Long.$ne(this.cacheStart,0 )) {
if (Long.$ge(date,this.cacheStart ) && Long.$lt(date,this.cacheEnd ) ) {
offset+=this.dstSavings;
break computeOffset;
}}}var cal=Long.$ge(date,-12219292800000 ) ? p$1.getGcal.apply(this, []) : $I$(1).forName$S("julian");
var cdate=cal.newCalendarDate$java_util_TimeZone($I$(2).NO_TIMEZONE);
cal.getCalendarDate$J$sun_util_calendar_CalendarDate(Long.$add(date,this.rawOffset), cdate);
var year=cdate.getNormalizedYear$();
if (year >= this.startYear) {
cdate.setTimeOfDay$I$I$I$I(0, 0, 0, 0);
offset=p$1.getOffset$sun_util_calendar_BaseCalendar$sun_util_calendar_BaseCalendar_Date$I$J.apply(this, [cal, cdate, year, date]);
}}if (offsets != null ) {
offsets[0]=this.rawOffset;
offsets[1]=offset - this.rawOffset;
}return offset;
});

Clazz.newMeth(C$, 'getGcal',  function () {
return (C$.gcal == null  ? (C$.gcal=$I$(1).getGregorianCalendar$()) : C$.gcal);
}, p$1);

Clazz.newMeth(C$, 'getOffset$I$I$I$I$I$I',  function (era, year, month, day, dayOfWeek, millis) {
if (era != 1 && era != 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal era " + era]);
}var y=year;
if (era == 0) {
y=1 - y;
}if (y >= 292278994) {
y=2800 + y % 2800;
} else if (y <= -292269054) {
y=Long.$ival($I$(3).mod$J$J(y, 28));
}var m=month + 1;
var cal=p$1.getGcal.apply(this, []);
var cdate=cal.newCalendarDate$java_util_TimeZone($I$(2).NO_TIMEZONE);
cdate.setDate$I$I$I(y, m, day);
var time=cal.getTime$sun_util_calendar_CalendarDate(cdate);
(time=Long.$add(time,(millis - this.rawOffset)));
if (Long.$lt(time,-12219292800000 )) {
cal=$I$(1).forName$S("julian");
cdate=cal.newCalendarDate$java_util_TimeZone($I$(2).NO_TIMEZONE);
cdate.setNormalizedDate$I$I$I(y, m, day);
time=Long.$sub(Long.$add(cal.getTime$sun_util_calendar_CalendarDate(cdate),millis),this.rawOffset);
}if ((cdate.getNormalizedYear$() != y) || (cdate.getMonth$() != m) || (cdate.getDayOfMonth$() != day) || (dayOfWeek < 1 || dayOfWeek > 7 ) || (millis < 0 || millis >= (86400000) )  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}if (!this.useDaylight || year < this.startYear  || era != 1 ) {
return this.rawOffset;
}return p$1.getOffset$sun_util_calendar_BaseCalendar$sun_util_calendar_BaseCalendar_Date$I$J.apply(this, [cal, cdate, y, time]);
});

Clazz.newMeth(C$, 'getOffset$sun_util_calendar_BaseCalendar$sun_util_calendar_BaseCalendar_Date$I$J',  function (cal, cdate, year, time) {
{
if (Long.$ne(this.cacheStart,0 )) {
if (Long.$ge(time,this.cacheStart ) && Long.$lt(time,this.cacheEnd ) ) {
return this.rawOffset + this.dstSavings;
}if (Long.$eq(year,this.cacheYear )) {
return this.rawOffset;
}}}var start=p$1.getStart$sun_util_calendar_BaseCalendar$sun_util_calendar_BaseCalendar_Date$I.apply(this, [cal, cdate, year]);
var end=p$1.getEnd$sun_util_calendar_BaseCalendar$sun_util_calendar_BaseCalendar_Date$I.apply(this, [cal, cdate, year]);
var offset=this.rawOffset;
if (Long.$le(start,end )) {
if (Long.$ge(time,start ) && Long.$lt(time,end ) ) {
offset+=this.dstSavings;
}{
this.cacheYear=year;
this.cacheStart=start;
this.cacheEnd=end;
}} else {
if (Long.$lt(time,end )) {
start=p$1.getStart$sun_util_calendar_BaseCalendar$sun_util_calendar_BaseCalendar_Date$I.apply(this, [cal, cdate, year - 1]);
if (Long.$ge(time,start )) {
offset+=this.dstSavings;
}} else if (Long.$ge(time,start )) {
end=p$1.getEnd$sun_util_calendar_BaseCalendar$sun_util_calendar_BaseCalendar_Date$I.apply(this, [cal, cdate, year + 1]);
if (Long.$lt(time,end )) {
offset+=this.dstSavings;
}}if (Long.$le(start,end )) {
{
this.cacheYear=Long.$sub(this.startYear,1);
this.cacheStart=start;
this.cacheEnd=end;
}}}return offset;
}, p$1);

Clazz.newMeth(C$, 'getStart$sun_util_calendar_BaseCalendar$sun_util_calendar_BaseCalendar_Date$I',  function (cal, cdate, year) {
var time=this.startTime;
if (this.startTimeMode != 2) {
time-=this.rawOffset;
}return p$1.getTransition$sun_util_calendar_BaseCalendar$sun_util_calendar_BaseCalendar_Date$I$I$I$I$I$I.apply(this, [cal, cdate, this.startMode, year, this.startMonth, this.startDay, this.startDayOfWeek, time]);
}, p$1);

Clazz.newMeth(C$, 'getEnd$sun_util_calendar_BaseCalendar$sun_util_calendar_BaseCalendar_Date$I',  function (cal, cdate, year) {
var time=this.endTime;
if (this.endTimeMode != 2) {
time-=this.rawOffset;
}if (this.endTimeMode == 0) {
time-=this.dstSavings;
}return p$1.getTransition$sun_util_calendar_BaseCalendar$sun_util_calendar_BaseCalendar_Date$I$I$I$I$I$I.apply(this, [cal, cdate, this.endMode, year, this.endMonth, this.endDay, this.endDayOfWeek, time]);
}, p$1);

Clazz.newMeth(C$, 'getTransition$sun_util_calendar_BaseCalendar$sun_util_calendar_BaseCalendar_Date$I$I$I$I$I$I',  function (cal, cdate, mode, year, month, dayOfMonth, dayOfWeek, timeOfDay) {
cdate.setNormalizedYear$I(year);
cdate.setMonth$I(month + 1);
switch (mode) {
case 1:
cdate.setDayOfMonth$I(dayOfMonth);
break;
case 2:
cdate.setDayOfMonth$I(1);
if (dayOfMonth < 0) {
cdate.setDayOfMonth$I(cal.getMonthLength$sun_util_calendar_CalendarDate(cdate));
}cdate=cal.getNthDayOfWeek$I$I$sun_util_calendar_CalendarDate(dayOfMonth, dayOfWeek, cdate);
break;
case 3:
cdate.setDayOfMonth$I(dayOfMonth);
cdate=cal.getNthDayOfWeek$I$I$sun_util_calendar_CalendarDate(1, dayOfWeek, cdate);
break;
case 4:
cdate.setDayOfMonth$I(dayOfMonth);
cdate=cal.getNthDayOfWeek$I$I$sun_util_calendar_CalendarDate(-1, dayOfWeek, cdate);
break;
}
return Long.$add(cal.getTime$sun_util_calendar_CalendarDate(cdate),timeOfDay);
}, p$1);

Clazz.newMeth(C$, 'getRawOffset$',  function () {
return this.rawOffset;
});

Clazz.newMeth(C$, 'setRawOffset$I',  function (offsetMillis) {
this.rawOffset=offsetMillis;
});

Clazz.newMeth(C$, 'setDSTSavings$I',  function (millisSavedDuringDST) {
if (millisSavedDuringDST <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal daylight saving value: " + millisSavedDuringDST]);
}this.dstSavings=millisSavedDuringDST;
});

Clazz.newMeth(C$, 'getDSTSavings$',  function () {
if (this.useDaylight) {
return this.dstSavings;
}return 0;
});

Clazz.newMeth(C$, 'useDaylightTime$',  function () {
return this.useDaylight;
});

Clazz.newMeth(C$, 'inDaylightTime$java_util_Date',  function (date) {
return (this.getOffset$J(date.getTime$()) != this.rawOffset);
});

Clazz.newMeth(C$, 'clone$',  function () {
return C$.superclazz.prototype.clone$.apply(this, []);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.startMonth ^ this.startDay ^ this.startDayOfWeek ^ this.startTime ^ this.endMonth ^ this.endDay ^ this.endDayOfWeek ^ this.endTime ^ this.rawOffset ;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) {
return true;
}if (!(Clazz.instanceOf(obj, "java.util.SimpleTimeZone"))) {
return false;
}var that=obj;
return this.getID$().equals$O(that.getID$()) && this.hasSameRules$java_util_TimeZone(that) ;
});

Clazz.newMeth(C$, 'hasSameRules$java_util_TimeZone',  function (other) {
if (this === other ) {
return true;
}if (!(Clazz.instanceOf(other, "java.util.SimpleTimeZone"))) {
return false;
}var that=other;
return this.rawOffset == that.rawOffset && this.useDaylight == that.useDaylight   && (!this.useDaylight || (this.dstSavings == that.dstSavings && this.startMode == that.startMode  && this.startMonth == that.startMonth  && this.startDay == that.startDay  && this.startDayOfWeek == that.startDayOfWeek  && this.startTime == that.startTime  && this.startTimeMode == that.startTimeMode  && this.endMode == that.endMode  && this.endMonth == that.endMonth  && this.endDay == that.endDay  && this.endDayOfWeek == that.endDayOfWeek  && this.endTime == that.endTime  && this.endTimeMode == that.endTimeMode  && this.startYear == that.startYear ) ) ;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[id=" + this.getID$() + ",offset=" + this.rawOffset + ",dstSavings=" + this.dstSavings + ",useDaylight=" + this.useDaylight + ",startYear=" + this.startYear + ",startMode=" + this.startMode + ",startMonth=" + this.startMonth + ",startDay=" + this.startDay + ",startDayOfWeek=" + this.startDayOfWeek + ",startTime=" + this.startTime + ",startTimeMode=" + this.startTimeMode + ",endMode=" + this.endMode + ",endMonth=" + this.endMonth + ",endDay=" + this.endDay + ",endDayOfWeek=" + this.endDayOfWeek + ",endTime=" + this.endTime + ",endTimeMode=" + this.endTimeMode + ']' ;
});

Clazz.newMeth(C$, 'invalidateCache',  function () {
this.cacheYear=this.startYear - 1;
this.cacheStart=this.cacheEnd=0;
}, p$1);

Clazz.newMeth(C$, 'decodeRules',  function () {
p$1.decodeStartRule.apply(this, []);
p$1.decodeEndRule.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'decodeStartRule',  function () {
this.useDaylight=(this.startDay != 0) && (this.endDay != 0) ;
if (this.startDay != 0) {
if (this.startMonth < 0 || this.startMonth > 11 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal start month " + this.startMonth]);
}if (this.startTime < 0 || this.startTime > 86400000 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal start time " + this.startTime]);
}if (this.startDayOfWeek == 0) {
this.startMode=1;
} else {
if (this.startDayOfWeek > 0) {
this.startMode=2;
} else {
this.startDayOfWeek=-this.startDayOfWeek;
if (this.startDay > 0) {
this.startMode=3;
} else {
this.startDay=-this.startDay;
this.startMode=4;
}}if (this.startDayOfWeek > 7) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal start day of week " + this.startDayOfWeek]);
}}if (this.startMode == 2) {
if (this.startDay < -5 || this.startDay > 5 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal start day of week in month " + this.startDay]);
}} else if (this.startDay < 1 || this.startDay > C$.staticMonthLength[this.startMonth] ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal start day " + this.startDay]);
}}}, p$1);

Clazz.newMeth(C$, 'decodeEndRule',  function () {
this.useDaylight=(this.startDay != 0) && (this.endDay != 0) ;
if (this.endDay != 0) {
if (this.endMonth < 0 || this.endMonth > 11 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal end month " + this.endMonth]);
}if (this.endTime < 0 || this.endTime > 86400000 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal end time " + this.endTime]);
}if (this.endDayOfWeek == 0) {
this.endMode=1;
} else {
if (this.endDayOfWeek > 0) {
this.endMode=2;
} else {
this.endDayOfWeek=-this.endDayOfWeek;
if (this.endDay > 0) {
this.endMode=3;
} else {
this.endDay=-this.endDay;
this.endMode=4;
}}if (this.endDayOfWeek > 7) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal end day of week " + this.endDayOfWeek]);
}}if (this.endMode == 2) {
if (this.endDay < -5 || this.endDay > 5 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal end day of week in month " + this.endDay]);
}} else if (this.endDay < 1 || this.endDay > C$.staticMonthLength[this.endMonth] ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal end day " + this.endDay]);
}}}, p$1);

Clazz.newMeth(C$, 'makeRulesCompatible',  function () {
switch (this.startMode) {
case 1:
this.startDay=1 + ((this.startDay/7|0));
this.startDayOfWeek=1;
break;
case 3:
if (this.startDay != 1) {
this.startDay=1 + ((this.startDay/7|0));
}break;
case 4:
if (this.startDay >= 30) {
this.startDay=-1;
} else {
this.startDay=1 + ((this.startDay/7|0));
}break;
}
switch (this.endMode) {
case 1:
this.endDay=1 + ((this.endDay/7|0));
this.endDayOfWeek=1;
break;
case 3:
if (this.endDay != 1) {
this.endDay=1 + ((this.endDay/7|0));
}break;
case 4:
if (this.endDay >= 30) {
this.endDay=-1;
} else {
this.endDay=1 + ((this.endDay/7|0));
}break;
}
switch (this.startTimeMode) {
case 2:
this.startTime+=this.rawOffset;
break;
}
while (this.startTime < 0){
this.startTime+=86400000;
this.startDayOfWeek=1 + ((this.startDayOfWeek + 5) % 7);
}
while (this.startTime >= 86400000){
this.startTime-=86400000;
this.startDayOfWeek=1 + (this.startDayOfWeek % 7);
}
switch (this.endTimeMode) {
case 2:
this.endTime+=this.rawOffset + this.dstSavings;
break;
case 1:
this.endTime+=this.dstSavings;
}
while (this.endTime < 0){
this.endTime+=86400000;
this.endDayOfWeek=1 + ((this.endDayOfWeek + 5) % 7);
}
while (this.endTime >= 86400000){
this.endTime-=86400000;
this.endDayOfWeek=1 + (this.endDayOfWeek % 7);
}
}, p$1);

Clazz.newMeth(C$, 'packRules',  function () {
var rules=Clazz.array(Byte.TYPE, [6]);
rules[0]=(this.startDay|0);
rules[1]=(this.startDayOfWeek|0);
rules[2]=(this.endDay|0);
rules[3]=(this.endDayOfWeek|0);
rules[4]=(this.startTimeMode|0);
rules[5]=(this.endTimeMode|0);
return rules;
}, p$1);

Clazz.newMeth(C$, 'unpackRules$BA',  function (rules) {
this.startDay=rules[0];
this.startDayOfWeek=rules[1];
this.endDay=rules[2];
this.endDayOfWeek=rules[3];
if (rules.length >= 6) {
this.startTimeMode=rules[4];
this.endTimeMode=rules[5];
}}, p$1);

Clazz.newMeth(C$, 'packTimes',  function () {
var times=Clazz.array(Integer.TYPE, [2]);
times[0]=this.startTime;
times[1]=this.endTime;
return times;
}, p$1);

Clazz.newMeth(C$, 'unpackTimes$IA',  function (times) {
this.startTime=times[0];
this.endTime=times[1];
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.staticMonthLength=Clazz.array(Byte.TYPE, -1, [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
C$.staticLeapMonthLength=Clazz.array(Byte.TYPE, -1, [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
