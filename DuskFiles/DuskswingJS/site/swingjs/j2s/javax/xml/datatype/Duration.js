(function(){var P$=Clazz.newPackage("javax.xml.datatype"),p$1={},I$=[[0,'javax.xml.datatype.DatatypeConstants','java.util.GregorianCalendar','java.math.BigDecimal','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Duration");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getXMLSchemaType$',  function () {
var yearSet=this.isSet$javax_xml_datatype_DatatypeConstants_Field($I$(1).YEARS);
var monthSet=this.isSet$javax_xml_datatype_DatatypeConstants_Field($I$(1).MONTHS);
var daySet=this.isSet$javax_xml_datatype_DatatypeConstants_Field($I$(1).DAYS);
var hourSet=this.isSet$javax_xml_datatype_DatatypeConstants_Field($I$(1).HOURS);
var minuteSet=this.isSet$javax_xml_datatype_DatatypeConstants_Field($I$(1).MINUTES);
var secondSet=this.isSet$javax_xml_datatype_DatatypeConstants_Field($I$(1).SECONDS);
if (yearSet && monthSet && daySet && hourSet && minuteSet && secondSet  ) {
return $I$(1).DURATION;
}if (!yearSet && !monthSet && daySet && hourSet && minuteSet && secondSet  ) {
return $I$(1).DURATION_DAYTIME;
}if (yearSet && monthSet && !daySet && !hourSet && !minuteSet && !secondSet  ) {
return $I$(1).DURATION_YEARMONTH;
}throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["javax.xml.datatype.Duration#getXMLSchemaType(): this Duration does not match one of the XML Schema date/time datatypes: year set = " + yearSet + " month set = " + monthSet + " day set = " + daySet + " hour set = " + hourSet + " minute set = " + minuteSet + " second set = " + secondSet ]);
});

Clazz.newMeth(C$, 'getYears$',  function () {
return this.getField$javax_xml_datatype_DatatypeConstants_Field($I$(1).YEARS).intValue$();
});

Clazz.newMeth(C$, 'getMonths$',  function () {
return this.getField$javax_xml_datatype_DatatypeConstants_Field($I$(1).MONTHS).intValue$();
});

Clazz.newMeth(C$, 'getDays$',  function () {
return this.getField$javax_xml_datatype_DatatypeConstants_Field($I$(1).DAYS).intValue$();
});

Clazz.newMeth(C$, 'getHours$',  function () {
return this.getField$javax_xml_datatype_DatatypeConstants_Field($I$(1).HOURS).intValue$();
});

Clazz.newMeth(C$, 'getMinutes$',  function () {
return this.getField$javax_xml_datatype_DatatypeConstants_Field($I$(1).MINUTES).intValue$();
});

Clazz.newMeth(C$, 'getSeconds$',  function () {
return this.getField$javax_xml_datatype_DatatypeConstants_Field($I$(1).SECONDS).intValue$();
});

Clazz.newMeth(C$, 'getTimeInMillis$java_util_Calendar',  function (startInstant) {
var cal=startInstant.clone$();
this.addTo$java_util_Calendar(cal);
return Long.$sub(C$.getCalendarTimeInMillis$java_util_Calendar(cal),C$.getCalendarTimeInMillis$java_util_Calendar(startInstant));
});

Clazz.newMeth(C$, 'getTimeInMillis$java_util_Date',  function (startInstant) {
var cal=Clazz.new_($I$(2,1));
cal.setTime$java_util_Date(startInstant);
this.addTo$java_util_Calendar(cal);
return Long.$sub(C$.getCalendarTimeInMillis$java_util_Calendar(cal),startInstant.getTime$());
});

Clazz.newMeth(C$, 'addTo$java_util_Date',  function (date) {
if (date == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Cannot call " + this.getClass$().getName$() + "#addTo(Date date) with date == null." ]);
}var cal=Clazz.new_($I$(2,1));
cal.setTime$java_util_Date(date);
this.addTo$java_util_Calendar(cal);
date.setTime$J(C$.getCalendarTimeInMillis$java_util_Calendar(cal));
});

Clazz.newMeth(C$, 'subtract$javax_xml_datatype_Duration',  function (rhs) {
return this.add$javax_xml_datatype_Duration(rhs.negate$());
});

Clazz.newMeth(C$, 'multiply$I',  function (factor) {
return this.multiply$java_math_BigDecimal(Clazz.new_([String.valueOf$I(factor)],$I$(3,1).c$$S));
});

Clazz.newMeth(C$, 'isLongerThan$javax_xml_datatype_Duration',  function (duration) {
return this.compare$javax_xml_datatype_Duration(duration) == 1;
});

Clazz.newMeth(C$, 'isShorterThan$javax_xml_datatype_Duration',  function (duration) {
return this.compare$javax_xml_datatype_Duration(duration) == -1;
});

Clazz.newMeth(C$, 'equals$O',  function (duration) {
if (duration == null  || !(Clazz.instanceOf(duration, "javax.xml.datatype.Duration")) ) {
return false;
}return this.compare$javax_xml_datatype_Duration(duration) == 0;
});

Clazz.newMeth(C$, 'toString',  function () {
var buf=Clazz.new_($I$(4,1));
if (this.getSign$() < 0) {
buf.append$C("-");
}buf.append$C("P");
var years=this.getField$javax_xml_datatype_DatatypeConstants_Field($I$(1).YEARS);
if (years != null ) {
buf.append$S(years + "Y");
}var months=this.getField$javax_xml_datatype_DatatypeConstants_Field($I$(1).MONTHS);
if (months != null ) {
buf.append$S(months + "M");
}var days=this.getField$javax_xml_datatype_DatatypeConstants_Field($I$(1).DAYS);
if (days != null ) {
buf.append$S(days + "D");
}var hours=this.getField$javax_xml_datatype_DatatypeConstants_Field($I$(1).HOURS);
var minutes=this.getField$javax_xml_datatype_DatatypeConstants_Field($I$(1).MINUTES);
var seconds=this.getField$javax_xml_datatype_DatatypeConstants_Field($I$(1).SECONDS);
if (hours != null  || minutes != null   || seconds != null  ) {
buf.append$C("T");
if (hours != null ) {
buf.append$S(hours + "H");
}if (minutes != null ) {
buf.append$S(minutes + "M");
}if (seconds != null ) {
buf.append$S(p$1.toString$java_math_BigDecimal.apply(this, [seconds]) + "S");
}}return buf.toString();
});

Clazz.newMeth(C$, 'toString$java_math_BigDecimal',  function (bd) {
var intString=bd.unscaledValue$().toString();
var scale=bd.scale$();
if (scale == 0) {
return intString;
}var buf;
var insertionPoint=intString.length$() - scale;
if (insertionPoint == 0) {
return "0." + intString;
} else if (insertionPoint > 0) {
buf=Clazz.new_($I$(4,1).c$$S,[intString]);
buf.insert$I$C(insertionPoint, ".");
} else {
buf=Clazz.new_([3 - insertionPoint + intString.length$()],$I$(4,1).c$$I);
buf.append$S("0.");
for (var i=0; i < -insertionPoint; i++) {
buf.append$C("0");
}
buf.append$S(intString);
}return buf.toString();
}, p$1);

Clazz.newMeth(C$, 'getCalendarTimeInMillis$java_util_Calendar',  function (cal) {
return cal.getTime$().getTime$();
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
