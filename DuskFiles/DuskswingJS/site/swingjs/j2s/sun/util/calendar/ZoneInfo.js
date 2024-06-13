(function(){var P$=Clazz.newPackage("sun.util.calendar"),p$1={},I$=[[0,'sun.util.calendar.CalendarSystem','sun.util.calendar.ZoneInfoFile','java.util.SimpleTimeZone']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ZoneInfo", null, 'java.util.TimeZone');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rawOffsetDiff=0;
this.willGMTOffsetChange=false;
this.dirty=false;
},1);

C$.$fields$=[['Z',['willGMTOffsetChange','dirty'],'I',['rawOffset','rawOffsetDiff','checksum','dstSavings'],'O',['transitions','long[]','offsets','int[]','+simpleTimeZoneParams','lastRule','java.util.SimpleTimeZone']]
,['O',['gcal','sun.util.calendar.CalendarSystem','aliasTable','java.util.Map']]]

Clazz.newMeth(C$, 'setRawOffsetReally$I',  function (offset) {
this.rawOffset=offset;
});

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$S$I',  function (ID, rawOffset) {
C$.c$$S$I$I$I$JA$IA$IA$Z.apply(this, [ID, rawOffset, 0, 0, null, null, null, false]);
}, 1);

Clazz.newMeth(C$, 'c$$S$I$I$I$JA$IA$IA$Z',  function (ID, rawOffset, dstSavings, checksum, transitions, offsets, simpleTimeZoneParams, willGMTOffsetChange) {
Clazz.super_(C$, this);
this.setID$S(ID);
this.rawOffset=rawOffset;
this.dstSavings=dstSavings;
this.checksum=checksum;
this.transitions=transitions;
this.offsets=offsets;
this.simpleTimeZoneParams=simpleTimeZoneParams;
this.willGMTOffsetChange=willGMTOffsetChange;
}, 1);

Clazz.newMeth(C$, 'getOffset$J',  function (date) {
return p$1.getOffsets$J$IA$I.apply(this, [date, null, 0]);
});

Clazz.newMeth(C$, 'getOffsets$J$IA',  function (utc, offsets) {
return p$1.getOffsets$J$IA$I.apply(this, [utc, offsets, 0]);
});

Clazz.newMeth(C$, 'getOffsetsByStandard$J$IA',  function (standard, offsets) {
return p$1.getOffsets$J$IA$I.apply(this, [standard, offsets, 1]);
});

Clazz.newMeth(C$, 'getOffsetsByWall$J$IA',  function (wall, offsets) {
return p$1.getOffsets$J$IA$I.apply(this, [wall, offsets, 2]);
});

Clazz.newMeth(C$, 'getOffsets$J$IA$I',  function (date, offsets, type) {
if (this.transitions == null ) {
var offset=p$1.getLastRawOffset.apply(this, []);
if (offsets != null ) {
offsets[0]=offset;
offsets[1]=0;
}return offset;
}(date=Long.$sub(date,(this.rawOffsetDiff)));
var index=p$1.getTransitionIndex$J$I.apply(this, [date, type]);
if (index < 0) {
var offset=p$1.getLastRawOffset.apply(this, []);
if (offsets != null ) {
offsets[0]=offset;
offsets[1]=0;
}return offset;
}if (index < this.transitions.length) {
var val=this.transitions[index];
var offset=this.offsets[Long.$ival((Long.$and(val,15)))] + this.rawOffsetDiff;
if (offsets != null ) {
var dst=Long.$ival((Long.$and((Long.$usr(val,4)),15)));
var save=(dst == 0) ? 0 : this.offsets[dst];
offsets[0]=offset - save;
offsets[1]=save;
}return offset;
}var tz=p$1.getLastRule.apply(this, []);
if (tz != null ) {
var rawoffset=tz.getRawOffset$();
var msec=date;
if (type != 0) {
(msec=Long.$sub(msec,(this.rawOffset)));
}var dstoffset=tz.inDaylightTime$java_util_Date(Clazz.new_(java.util.Date.c$$J,[msec])) ? tz.getDSTSavings$() : 0;
if (offsets != null ) {
offsets[0]=rawoffset;
offsets[1]=dstoffset;
}return rawoffset + dstoffset;
}var offset=p$1.getLastRawOffset.apply(this, []);
if (offsets != null ) {
offsets[0]=offset;
offsets[1]=0;
}return offset;
}, p$1);

Clazz.newMeth(C$, 'getTransitionIndex$J$I',  function (date, type) {
var low=0;
var high=this.transitions.length - 1;
while (low <= high){
var mid=((low + high)/2|0);
var val=this.transitions[mid];
var midVal=Long.$sr(val,12);
if (type != 0) {
(midVal=Long.$add(midVal,(this.offsets[Long.$ival((Long.$and(val,15)))])));
}if (type == 1) {
var dstIndex=Long.$ival((Long.$and((Long.$usr(val,4)),15)));
if (dstIndex != 0) {
(midVal=Long.$sub(midVal,(this.offsets[dstIndex])));
}}if (Long.$lt(midVal,date )) {
low=mid + 1;
} else if (Long.$gt(midVal,date )) {
high=mid - 1;
} else {
return mid;
}}
if (low >= this.transitions.length) {
return low;
}return low - 1;
}, p$1);

Clazz.newMeth(C$, 'getOffset$I$I$I$I$I$I',  function (era, year, month, day, dayOfWeek, milliseconds) {
if (milliseconds < 0 || milliseconds >= 86400000 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}if (era == 0) {
year=1 - year;
} else if (era != 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}if (C$.gcal == null ) C$.gcal=$I$(1).getGregorianCalendar$();
var date=C$.gcal.newCalendarDate$java_util_TimeZone(null);
date.setDate$I$I$I(year, month + 1, day);
if (C$.gcal.validate$sun_util_calendar_CalendarDate(date) == false ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}if (dayOfWeek < 1 || dayOfWeek > 7 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}if (this.transitions == null ) {
return p$1.getLastRawOffset.apply(this, []);
}var dateInMillis=Long.$add(C$.gcal.getTime$sun_util_calendar_CalendarDate(date),milliseconds);
(dateInMillis=Long.$sub(dateInMillis,(this.rawOffset)));
return p$1.getOffsets$J$IA$I.apply(this, [dateInMillis, null, 0]);
});

Clazz.newMeth(C$, 'setRawOffset$I',  function (offsetMillis) {
if (offsetMillis == this.rawOffset + this.rawOffsetDiff) {
return;
}this.rawOffsetDiff=offsetMillis - this.rawOffset;
if (this.lastRule != null ) {
this.lastRule.setRawOffset$I(offsetMillis);
}this.dirty=true;
});

Clazz.newMeth(C$, 'getRawOffset$',  function () {
if (!this.willGMTOffsetChange) {
return this.rawOffset + this.rawOffsetDiff;
}var offsets=Clazz.array(Integer.TYPE, [2]);
p$1.getOffsets$J$IA$I.apply(this, [System.currentTimeMillis$(), offsets, 0]);
return offsets[0];
});

Clazz.newMeth(C$, 'isDirty$',  function () {
return this.dirty;
});

Clazz.newMeth(C$, 'getLastRawOffset',  function () {
return this.rawOffset + this.rawOffsetDiff;
}, p$1);

Clazz.newMeth(C$, 'useDaylightTime$',  function () {
return (this.simpleTimeZoneParams != null );
});

Clazz.newMeth(C$, 'inDaylightTime$java_util_Date',  function (date) {
if (date == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (this.transitions == null ) {
return false;
}var utc=Long.$sub(date.getTime$(),this.rawOffsetDiff);
var index=p$1.getTransitionIndex$J$I.apply(this, [utc, 0]);
if (index < 0) {
return false;
}if (index < this.transitions.length) {
return Long.$ne((Long.$and(this.transitions[index],240)),0 );
}var tz=p$1.getLastRule.apply(this, []);
if (tz != null ) {
return tz.inDaylightTime$java_util_Date(date);
}return false;
});

Clazz.newMeth(C$, 'getDSTSavings$',  function () {
return this.dstSavings;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[id=\"" + this.getID$() + "\"" + ",offset=" + p$1.getLastRawOffset.apply(this, []) + ",dstSavings=" + this.dstSavings + ",useDaylight=" + this.useDaylightTime$() + ",transitions=" + ((this.transitions != null ) ? this.transitions.length : 0) + ",lastRule=" + (this.lastRule == null  ? this.getLastRuleInstance$() : this.lastRule) + "]" ;
});

Clazz.newMeth(C$, 'getAvailableIDs$',  function () {
return Clazz.array(String, -1, ["GMT"]);
}, 1);

Clazz.newMeth(C$, 'getAvailableIDs$I',  function (rawOffset) {
return (rawOffset == 0 ? C$.getAvailableIDs$() : Clazz.array(String, [0]));
}, 1);

Clazz.newMeth(C$, 'getTimeZone$S',  function (ID) {
if (ID.startsWith$S("GMT")) {
return null;
}return $I$(2).getZoneInfo$S(ID);
}, 1);

Clazz.newMeth(C$, 'getLastRule',  function () {
if (this.lastRule == null ) {
this.lastRule=this.getLastRuleInstance$();
}return this.lastRule;
}, p$1);

Clazz.newMeth(C$, 'getLastRuleInstance$',  function () {
if (this.simpleTimeZoneParams == null ) {
return null;
}if (this.simpleTimeZoneParams.length == 10) {
return Clazz.new_([p$1.getLastRawOffset.apply(this, []), this.getID$(), this.simpleTimeZoneParams[0], this.simpleTimeZoneParams[1], this.simpleTimeZoneParams[2], this.simpleTimeZoneParams[3], this.simpleTimeZoneParams[4], this.simpleTimeZoneParams[5], this.simpleTimeZoneParams[6], this.simpleTimeZoneParams[7], this.simpleTimeZoneParams[8], this.simpleTimeZoneParams[9], this.dstSavings],$I$(3,1).c$$I$S$I$I$I$I$I$I$I$I$I$I$I);
}return Clazz.new_([p$1.getLastRawOffset.apply(this, []), this.getID$(), this.simpleTimeZoneParams[0], this.simpleTimeZoneParams[1], this.simpleTimeZoneParams[2], this.simpleTimeZoneParams[3], this.simpleTimeZoneParams[4], this.simpleTimeZoneParams[5], this.simpleTimeZoneParams[6], this.simpleTimeZoneParams[7], this.dstSavings],$I$(3,1).c$$I$S$I$I$I$I$I$I$I$I$I);
});

Clazz.newMeth(C$, 'clone$',  function () {
var zi=C$.superclazz.prototype.clone$.apply(this, []);
zi.lastRule=null;
return zi;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return p$1.getLastRawOffset.apply(this, []) ^ this.checksum;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) {
return true;
}if (!(Clazz.instanceOf(obj, "sun.util.calendar.ZoneInfo"))) {
return false;
}var that=obj;
return (this.getID$().equals$O(that.getID$()) && (p$1.getLastRawOffset.apply(this, []) == p$1.getLastRawOffset.apply(that, [])) && (this.checksum == that.checksum)  );
});

Clazz.newMeth(C$, 'hasSameRules$java_util_TimeZone',  function (other) {
if (this === other ) {
return true;
}if (other == null ) {
return false;
}if (!(Clazz.instanceOf(other, "sun.util.calendar.ZoneInfo"))) {
if (this.getRawOffset$() != other.getRawOffset$()) {
return false;
}if ((this.transitions == null ) && (this.useDaylightTime$() == false ) && (other.useDaylightTime$() == false )  ) {
return true;
}return false;
}if (p$1.getLastRawOffset.apply(this, []) != p$1.getLastRawOffset.apply((other), [])) {
return false;
}return (this.checksum == (other).checksum);
});

Clazz.newMeth(C$, 'getAliasTable$',  function () {
var aliases=null;
var cache=C$.aliasTable;
if (cache != null ) {
aliases=cache;
if (aliases != null ) {
return aliases;
}}return aliases;
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
