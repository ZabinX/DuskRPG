(function(){var P$=Clazz.newPackage("javax.xml.datatype"),I$=[[0,'java.util.regex.Pattern','javax.xml.datatype.FactoryFinder','java.math.BigInteger','java.math.BigDecimal','javax.xml.datatype.DatatypeConstants']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DatatypeFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['DATATYPEFACTORY_IMPLEMENTATION_CLASS'],'O',['XDTSCHEMA_YMD','java.util.regex.Pattern','+XDTSCHEMA_DTD']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'newInstance$',  function () {
try {
return $I$(2).find$S$S("javax.xml.datatype.DatatypeFactory", C$.DATATYPEFACTORY_IMPLEMENTATION_CLASS);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.xml.datatype.FactoryFinder.ConfigurationError")){
throw Clazz.new_(Clazz.load('javax.xml.datatype.DatatypeConfigurationException').c$$S$Throwable,[e.getMessage$(), e.getException$()]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'newInstance$S$ClassLoader',  function (factoryClassName, classLoader) {
try {
return $I$(2).newInstance$S$ClassLoader$Z(factoryClassName, classLoader, false);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.xml.datatype.FactoryFinder.ConfigurationError")){
throw Clazz.new_(Clazz.load('javax.xml.datatype.DatatypeConfigurationException').c$$S$Throwable,[e.getMessage$(), e.getException$()]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'newDuration$Z$I$I$I$I$I$I',  function (isPositive, years, months, days, hours, minutes, seconds) {
var realYears=(years != -2147483648) ? $I$(3).valueOf$J(years) : null;
var realMonths=(months != -2147483648) ? $I$(3).valueOf$J(months) : null;
var realDays=(days != -2147483648) ? $I$(3).valueOf$J(days) : null;
var realHours=(hours != -2147483648) ? $I$(3).valueOf$J(hours) : null;
var realMinutes=(minutes != -2147483648) ? $I$(3).valueOf$J(minutes) : null;
var realSeconds=(seconds != -2147483648) ? $I$(4).valueOf$J(seconds) : null;
return this.newDuration$Z$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigDecimal(isPositive, realYears, realMonths, realDays, realHours, realMinutes, realSeconds);
});

Clazz.newMeth(C$, 'newDurationDayTime$S',  function (lexicalRepresentation) {
if (lexicalRepresentation == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Trying to create an xdt:dayTimeDuration with an invalid lexical representation of \"null\""]);
}var matcher=C$.XDTSCHEMA_DTD.matcher$CharSequence(lexicalRepresentation);
if (!matcher.matches$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Trying to create an xdt:dayTimeDuration with an invalid lexical representation of \"" + lexicalRepresentation + "\", data model requires years and months only." ]);
}return this.newDuration$S(lexicalRepresentation);
});

Clazz.newMeth(C$, 'newDurationDayTime$J',  function (durationInMilliseconds) {
return this.newDuration$J(durationInMilliseconds);
});

Clazz.newMeth(C$, 'newDurationDayTime$Z$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger',  function (isPositive, day, hour, minute, second) {
return this.newDuration$Z$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigDecimal(isPositive, null, null, day, hour, minute, (second != null ) ? Clazz.new_($I$(4,1).c$$java_math_BigInteger,[second]) : null);
});

Clazz.newMeth(C$, 'newDurationDayTime$Z$I$I$I$I',  function (isPositive, day, hour, minute, second) {
return this.newDurationDayTime$Z$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger(isPositive, $I$(3).valueOf$J(day), $I$(3).valueOf$J(hour), $I$(3).valueOf$J(minute), $I$(3).valueOf$J(second));
});

Clazz.newMeth(C$, 'newDurationYearMonth$S',  function (lexicalRepresentation) {
if (lexicalRepresentation == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Trying to create an xdt:yearMonthDuration with an invalid lexical representation of \"null\""]);
}var matcher=C$.XDTSCHEMA_YMD.matcher$CharSequence(lexicalRepresentation);
if (!matcher.matches$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Trying to create an xdt:yearMonthDuration with an invalid lexical representation of \"" + lexicalRepresentation + "\", data model requires days and times only." ]);
}return this.newDuration$S(lexicalRepresentation);
});

Clazz.newMeth(C$, 'newDurationYearMonth$J',  function (durationInMilliseconds) {
var fullDuration=this.newDuration$J(durationInMilliseconds);
var isPositive=(fullDuration.getSign$() == -1) ? false : true;
var years=fullDuration.getField$javax_xml_datatype_DatatypeConstants_Field($I$(5).YEARS);
if (years == null ) {
years=$I$(3).ZERO;
}var months=fullDuration.getField$javax_xml_datatype_DatatypeConstants_Field($I$(5).MONTHS);
if (months == null ) {
months=$I$(3).ZERO;
}return this.newDurationYearMonth$Z$java_math_BigInteger$java_math_BigInteger(isPositive, years, months);
});

Clazz.newMeth(C$, 'newDurationYearMonth$Z$java_math_BigInteger$java_math_BigInteger',  function (isPositive, year, month) {
return this.newDuration$Z$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigDecimal(isPositive, year, month, null, null, null, null);
});

Clazz.newMeth(C$, 'newDurationYearMonth$Z$I$I',  function (isPositive, year, month) {
return this.newDurationYearMonth$Z$java_math_BigInteger$java_math_BigInteger(isPositive, $I$(3).valueOf$J(year), $I$(3).valueOf$J(month));
});

Clazz.newMeth(C$, 'newXMLGregorianCalendar$I$I$I$I$I$I$I$I',  function (year, month, day, hour, minute, second, millisecond, timezone) {
var realYear=(year != -2147483648) ? $I$(3).valueOf$J(year) : null;
var realMillisecond=null;
if (millisecond != -2147483648) {
if (millisecond < 0 || millisecond > 1000 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["javax.xml.datatype.DatatypeFactory#newXMLGregorianCalendar(" + "int year, int month, int day, int hour, int minute, int second, int millisecond, int timezone)" + "with invalid millisecond: " + millisecond ]);
}realMillisecond=$I$(4).valueOf$J(millisecond).movePointLeft$I(3);
}return this.newXMLGregorianCalendar$java_math_BigInteger$I$I$I$I$I$java_math_BigDecimal$I(realYear, month, day, hour, minute, second, realMillisecond, timezone);
});

Clazz.newMeth(C$, 'newXMLGregorianCalendarDate$I$I$I$I',  function (year, month, day, timezone) {
return this.newXMLGregorianCalendar$I$I$I$I$I$I$I$I(year, month, day, -2147483648, -2147483648, -2147483648, -2147483648, timezone);
});

Clazz.newMeth(C$, 'newXMLGregorianCalendarTime$I$I$I$I',  function (hours, minutes, seconds, timezone) {
return this.newXMLGregorianCalendar$I$I$I$I$I$I$I$I(-2147483648, -2147483648, -2147483648, hours, minutes, seconds, -2147483648, timezone);
});

Clazz.newMeth(C$, 'newXMLGregorianCalendarTime$I$I$I$java_math_BigDecimal$I',  function (hours, minutes, seconds, fractionalSecond, timezone) {
return this.newXMLGregorianCalendar$java_math_BigInteger$I$I$I$I$I$java_math_BigDecimal$I(null, -2147483648, -2147483648, hours, minutes, seconds, fractionalSecond, timezone);
});

Clazz.newMeth(C$, 'newXMLGregorianCalendarTime$I$I$I$I$I',  function (hours, minutes, seconds, milliseconds, timezone) {
var realMilliseconds=null;
if (milliseconds != -2147483648) {
if (milliseconds < 0 || milliseconds > 1000 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["javax.xml.datatype.DatatypeFactory#newXMLGregorianCalendarTime(" + "int hours, int minutes, int seconds, int milliseconds, int timezone)" + "with invalid milliseconds: " + milliseconds ]);
}realMilliseconds=$I$(4).valueOf$J(milliseconds).movePointLeft$I(3);
}return this.newXMLGregorianCalendarTime$I$I$I$java_math_BigDecimal$I(hours, minutes, seconds, realMilliseconds, timezone);
});

C$.$static$=function(){C$.$static$=0;
C$.DATATYPEFACTORY_IMPLEMENTATION_CLASS= String.instantialize("org.apache.xerces.jaxp.datatype.DatatypeFactoryImpl");
C$.XDTSCHEMA_YMD=$I$(1).compile$S("[^DT]*");
C$.XDTSCHEMA_DTD=$I$(1).compile$S("[^YM]*[DT].*");
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
