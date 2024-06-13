(function(){var P$=Clazz.newPackage("java.text"),I$=[[0,'StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CalendarBuilder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['nextStamp','maxFieldIndex'],'O',['field','int[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.field=Clazz.array(Integer.TYPE, [36]);
this.nextStamp=2;
this.maxFieldIndex=-1;
}, 1);

Clazz.newMeth(C$, 'set$I$I',  function (index, value) {
if (index == 1000) {
index=7;
value=C$.toCalendarDayOfWeek$I(value);
}this.field[index]=this.nextStamp++;
this.field[18 + index]=value;
if (index > this.maxFieldIndex && index < 17 ) {
this.maxFieldIndex=index;
}return this;
});

Clazz.newMeth(C$, 'addYear$I',  function (value) {
this.field[19]+=value;
this.field[35]+=value;
return this;
});

Clazz.newMeth(C$, 'isSet$I',  function (index) {
if (index == 1000) {
index=7;
}return this.field[index] > 0;
});

Clazz.newMeth(C$, 'clear$I',  function (index) {
if (index == 1000) {
index=7;
}this.field[index]=0;
this.field[18 + index]=0;
return this;
});

Clazz.newMeth(C$, 'establish$java_util_Calendar',  function (cal) {
var weekDate=this.isSet$I(17) && this.field[17] > this.field[1] ;
if (weekDate && !cal.isWeekDateSupported$() ) {
if (!this.isSet$I(1)) {
this.set$I$I(1, this.field[35]);
}weekDate=false;
}cal.clear$();
for (var stamp=2; stamp < this.nextStamp; stamp++) {
for (var index=0; index <= this.maxFieldIndex; index++) {
if (this.field[index] == stamp) {
cal.set$I$I(index, this.field[18 + index]);
break;
}}
}
if (weekDate) {
var weekOfYear=this.isSet$I(3) ? this.field[21] : 1;
var dayOfWeek=this.isSet$I(7) ? this.field[25] : cal.getFirstDayOfWeek$();
if (!C$.isValidDayOfWeek$I(dayOfWeek) && cal.isLenient$() ) {
if (dayOfWeek >= 8) {
--dayOfWeek;
weekOfYear+=(dayOfWeek/7|0);
dayOfWeek=(dayOfWeek % 7) + 1;
} else {
while (dayOfWeek <= 0){
dayOfWeek+=7;
--weekOfYear;
}
}dayOfWeek=C$.toCalendarDayOfWeek$I(dayOfWeek);
}cal.setWeekDate$I$I$I(this.field[35], weekOfYear, dayOfWeek);
}return cal;
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(1,1));
sb.append$S("CalendarBuilder:[");
for (var i=0; i < this.field.length; i++) {
if (this.isSet$I(i)) {
sb.append$I(i).append$C("=").append$I(this.field[18 + i]).append$C(",");
}}
var lastIndex=sb.length$() - 1;
if (sb.charAt$I(lastIndex) == ",") {
sb.setLength$I(lastIndex);
}sb.append$C("]");
return sb.toString();
});

Clazz.newMeth(C$, 'toISODayOfWeek$I',  function (calendarDayOfWeek) {
return calendarDayOfWeek == 1 ? 7 : calendarDayOfWeek - 1;
}, 1);

Clazz.newMeth(C$, 'toCalendarDayOfWeek$I',  function (isoDayOfWeek) {
if (!C$.isValidDayOfWeek$I(isoDayOfWeek)) {
return isoDayOfWeek;
}return isoDayOfWeek == 7 ? 1 : isoDayOfWeek + 1;
}, 1);

Clazz.newMeth(C$, 'isValidDayOfWeek$I',  function (dayOfWeek) {
return dayOfWeek > 0 && dayOfWeek <= 7 ;
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
