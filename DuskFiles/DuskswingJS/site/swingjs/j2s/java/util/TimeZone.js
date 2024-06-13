(function(){var P$=java.util,I$=[[0,'java.util.Locale',['java.util.Locale','.Category'],'sun.util.locale.provider.TimeZoneNameUtility','sun.util.calendar.ZoneInfoFile','java.time.ZoneId','sun.util.calendar.ZoneInfo','InternalError']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TimeZone", null, null, ['java.io.Serializable', 'Cloneable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['ID']]
,['O',['NO_TIMEZONE','java.util.TimeZone','+defaultTimeZone','+mainAppContextDefault']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getOffset$J',  function (date) {
if (this.inDaylightTime$java_util_Date(Clazz.new_(java.util.Date.c$$J,[date]))) {
return this.getRawOffset$() + this.getDSTSavings$();
}return this.getRawOffset$();
});

Clazz.newMeth(C$, 'getOffsets$J$IA',  function (date, offsets) {
var rawoffset=this.getRawOffset$();
var dstoffset=0;
if (this.inDaylightTime$java_util_Date(Clazz.new_(java.util.Date.c$$J,[date]))) {
dstoffset=this.getDSTSavings$();
}if (offsets != null ) {
offsets[0]=rawoffset;
offsets[1]=dstoffset;
}return rawoffset + dstoffset;
});

Clazz.newMeth(C$, 'getID$',  function () {
return this.ID;
});

Clazz.newMeth(C$, 'setID$S',  function (ID) {
if (ID == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.ID=ID;
});

Clazz.newMeth(C$, 'getDisplayName$',  function () {
return this.getDisplayName$Z$I$java_util_Locale(false, 1, $I$(1,"getDefault$java_util_Locale_Category",[$I$(2).DISPLAY]));
});

Clazz.newMeth(C$, 'getDisplayName$java_util_Locale',  function (locale) {
return this.getDisplayName$Z$I$java_util_Locale(false, 1, locale);
});

Clazz.newMeth(C$, 'getDisplayName$Z$I',  function (daylight, style) {
return this.getDisplayName$Z$I$java_util_Locale(daylight, style, $I$(1,"getDefault$java_util_Locale_Category",[$I$(2).DISPLAY]));
});

Clazz.newMeth(C$, 'getDisplayName$Z$I$java_util_Locale',  function (daylight, style, locale) {
if (style != 0 && style != 1 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal style: " + style]);
}var id=this.getID$();
var name=$I$(3).retrieveDisplayName$S$Z$I$java_util_Locale(id, daylight, style, locale);
if (name != null ) {
return name;
}if (id.startsWith$S("GMT") && id.length$() > 3 ) {
var sign=id.charAt$I(3);
if (sign == "+" || sign == "-" ) {
return id;
}}var offset=this.getRawOffset$();
if (daylight) {
offset+=this.getDSTSavings$();
}return $I$(4).toCustomID$I(offset);
});

Clazz.newMeth(C$, 'getDisplayNames$S$java_util_Locale',  function (id, locale) {
return $I$(3).retrieveDisplayNames$S$java_util_Locale(id, locale);
}, 1);

Clazz.newMeth(C$, 'getDSTSavings$',  function () {
if (this.useDaylightTime$()) {
return 3600000;
}return 0;
});

Clazz.newMeth(C$, 'observesDaylightTime$',  function () {
return this.useDaylightTime$() || this.inDaylightTime$java_util_Date(Clazz.new_(java.util.Date)) ;
});

Clazz.newMeth(C$, 'getTimeZone$S',  function (ID) {
return C$.getTimeZone$S$Z(ID, true);
}, 1);

Clazz.newMeth(C$, 'getTimeZone$java_time_ZoneId',  function (zoneId) {
var tzid=zoneId.getId$();
var c=tzid.charAt$I(0);
if (c == "+" || c == "-" ) {
tzid="GMT" + tzid;
} else if (c == "Z" && tzid.length$() == 1 ) {
tzid="UTC";
}return C$.getTimeZone$S$Z(tzid, true);
}, 1);

Clazz.newMeth(C$, 'toZoneId$',  function () {
var id=this.getID$();
if ($I$(4).useOldMapping$() && id.length$() == 3 ) {
if ("EST".equals$O(id)) return $I$(5).of$S("America/New_York");
if ("MST".equals$O(id)) return $I$(5).of$S("America/Denver");
if ("HST".equals$O(id)) return $I$(5).of$S("America/Honolulu");
}return $I$(5,"of$S$java_util_Map",[id, $I$(5).SHORT_IDS]);
});

Clazz.newMeth(C$, 'getTimeZone$S$Z',  function (ID, fallback) {
var tz=$I$(6).getTimeZone$S(ID);
if (tz == null ) {
tz=C$.parseCustomTimeZone$S(ID);
if (tz == null  && fallback ) {
tz=Clazz.new_($I$(6,1).c$$S$I,["GMT", 0]);
}}return tz;
}, 1);

Clazz.newMeth(C$, 'getAvailableIDs$I',  function (rawOffset) {
return $I$(6).getAvailableIDs$I(rawOffset);
}, 1);

Clazz.newMeth(C$, 'getAvailableIDs$',  function () {
return $I$(6).getAvailableIDs$();
}, 1);

Clazz.newMeth(C$, 'getTimeZoneOffsetMillis$',  function () {
return 1?-(new Date()).getTimezoneOffset() * 60000 :0;
}, 1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return C$.getDefaultRef$().clone$();
}, 1);

Clazz.newMeth(C$, 'getDefaultRef$',  function () {
var defaultZone=C$.defaultTimeZone;
if (defaultZone == null ) {
defaultZone=C$.setDefaultZone$();
Clazz.assert(C$, this, function(){return defaultZone != null });
}return defaultZone;
}, 1);

Clazz.newMeth(C$, 'getGMTID$I',  function (gmtOffset) {
var isNegative=(gmtOffset < 0);
if (isNegative) gmtOffset=-gmtOffset;
gmtOffset=(gmtOffset/60000|0);
var hours=(gmtOffset/60|0);
var min=gmtOffset - hours * 60;
var NN="00" + hours;
NN=NN.substring$I(NN.length$() - 2);
var MM="00" + min;
MM=MM.substring$I(MM.length$() - 2);
return "GMT" + (isNegative ? "-" : "") + NN ;
}, 1);

Clazz.newMeth(C$, 'setDefaultZone$',  function () {
var tz;
var zoneID=null;
try {
zoneID=C$.getSystemTimeZoneID$();
if (zoneID == null ) {
zoneID="GMT";
}} catch (e) {
if (Clazz.exceptionOf(e,"NullPointerException")){
zoneID="GMT";
} else {
throw e;
}
}
tz=C$.getTimeZone$S$Z(zoneID, false);
C$.defaultTimeZone=tz;
return tz;
}, 1);

Clazz.newMeth(C$, 'getSystemTimeZoneID$',  function () {
var zoneID=null;
var d=Clazz.new_(java.util.Date);

zoneID = Intl.DateTimeFormat().resolvedOptions().timeZone;
return (zoneID == null  ? C$.getGMTID$I(C$.getTimeZoneOffsetMillis$()) : zoneID);
}, 1);

Clazz.newMeth(C$, 'setDefault$java_util_TimeZone',  function (zone) {
C$.defaultTimeZone=zone;
}, 1);

Clazz.newMeth(C$, 'hasSameRules$java_util_TimeZone',  function (other) {
return other != null  && this.getRawOffset$() == other.getRawOffset$()  && this.useDaylightTime$() == other.useDaylightTime$()  ;
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
var other=Clazz.clone(this);
other.ID=this.ID;
return other;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(7,1).c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'parseCustomTimeZone$S',  function (id) {
var length;
if ((length=id.length$()) < (5) || id.indexOf$S("GMT") != 0 ) {
return null;
}var zi;
var index=3;
var negative=false;
var c=id.charAt$I(index++);
if (c == "-") {
negative=true;
} else if (c != "+") {
return null;
}var hours=0;
var num=0;
var countDelim=0;
var len=0;
while (index < length){
c=id.charAt$I(index++);
if (c == ":") {
if (countDelim > 0) {
return null;
}if (len > 2) {
return null;
}hours=num;
++countDelim;
num=0;
len=0;
continue;
}if (c < "0" || c > "9" ) {
return null;
}num=num * 10 + (c.$c() - 48);
++len;
}
if (index != length) {
return null;
}if (countDelim == 0) {
if (len <= 2) {
hours=num;
num=0;
} else {
hours=(num/100|0);
num%=100;
}} else {
if (len != 2) {
return null;
}}if (hours > 23 || num > 59 ) {
return null;
}var gmtOffset=(hours * 60 + num) * 60 * 1000 ;
if (gmtOffset == 0) {
zi=Clazz.new_($I$(6,1).c$$S$I,["GMT", 0]);
if (negative) {
zi.setID$S("GMT-00:00");
} else {
zi.setID$S("GMT+00:00");
}} else {
zi=Clazz.new_($I$(6,1).c$$S$I,["GMT", negative ? -gmtOffset : gmtOffset]);
}return zi;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.NO_TIMEZONE=null;
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:35 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
