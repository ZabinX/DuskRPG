(function(){var P$=Clazz.newPackage("org.apache.xerces.jaxp.datatype"),p$1={},p$2={},I$=[[0,'InternalError','org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl','java.math.BigInteger','java.math.BigDecimal',['org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl','.Parser'],'org.apache.xerces.jaxp.datatype.DurationImpl','javax.xml.datatype.DatatypeConstants',['org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl','.DaysInMonth'],'java.util.Locale','java.util.GregorianCalendar','java.util.TimeZone','StringBuffer','org.apache.xerces.jaxp.datatype.SerializedXMLGregorianCalendar']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XMLGregorianCalendarImpl", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.xml.datatype.XMLGregorianCalendar', ['java.io.Serializable', 'Cloneable']);
C$.$classes$=[['DaysInMonth',10],['Parser',18]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.orig_year=-2147483648;
this.orig_month=-2147483648;
this.orig_day=-2147483648;
this.orig_hour=-2147483648;
this.orig_minute=-2147483648;
this.orig_second=-2147483648;
this.orig_timezone=-2147483648;
this.eon=null;
this.year=-2147483648;
this.month=-2147483648;
this.day=-2147483648;
this.timezone=-2147483648;
this.hour=-2147483648;
this.minute=-2147483648;
this.second=-2147483648;
this.fractionalSecond=null;
},1);

C$.$fields$=[['I',['orig_year','orig_month','orig_day','orig_hour','orig_minute','orig_second','orig_timezone','year','month','day','timezone','hour','minute','second'],'O',['orig_eon','java.math.BigInteger','orig_fracSeconds','java.math.BigDecimal','eon','java.math.BigInteger','fractionalSecond','java.math.BigDecimal']]
,['O',['BILLION_B','java.math.BigInteger','PURE_GREGORIAN_CHANGE','java.util.Date','MIN_FIELD_VALUE','int[]','+MAX_FIELD_VALUE','FIELD_NAME','String[]','LEAP_YEAR_DEFAULT','javax.xml.datatype.XMLGregorianCalendar','FOUR','java.math.BigInteger','+HUNDRED','+FOUR_HUNDRED','+SIXTY','+TWENTY_FOUR','+TWELVE','DECIMAL_ZERO','java.math.BigDecimal','+DECIMAL_ONE','+DECIMAL_SIXTY']]]

Clazz.newMeth(C$, 'c$$S',  function (lexicalRepresentation) {
Clazz.super_(C$, this);
var format=null;
var lexRep=lexicalRepresentation;
var NOT_FOUND=-1;
var lexRepLength=lexRep.length$();
if (lexRep.indexOf$I("T") != -1) {
format="%Y-%M-%DT%h:%m:%s%z";
} else if (lexRepLength >= 3 && lexRep.charAt$I(2) == ":" ) {
format="%h:%m:%s%z";
} else if (lexRep.startsWith$S("--")) {
if (lexRepLength >= 3 && lexRep.charAt$I(2) == "-" ) {
format="---%D%z";
} else if (lexRepLength == 4 || (lexRepLength >= 6 && (lexRep.charAt$I(4) == "+" || (lexRep.charAt$I(4) == "-" && (lexRep.charAt$I(5) == "-" || lexRepLength == 10 ) ) ) ) ) {
format="--%M--%z";
var p=Clazz.new_($I$(5,1).c$$S$S,[this, null, format, lexRep]);
try {
p.parse$();
if (!this.isValid$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["\"" + lexicalRepresentation + "\" is not a valid representation of an XML Gregorian Calendar value." ]);
}p$2.save.apply(this, []);
return;
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
format="--%M%z";
} else {
throw e;
}
}
} else {
format="--%M-%D%z";
}} else {
var countSeparator=0;
var timezoneOffset=lexRep.indexOf$I(":");
if (timezoneOffset != -1) {
lexRepLength-=6;
}for (var i=1; i < lexRepLength; i++) {
if (lexRep.charAt$I(i) == "-") {
++countSeparator;
}}
if (countSeparator == 0) {
format="%Y%z";
} else if (countSeparator == 1) {
format="%Y-%M%z";
} else {
format="%Y-%M-%D%z";
}}var p=Clazz.new_($I$(5,1).c$$S$S,[this, null, format, lexRep]);
p.parse$();
if (!this.isValid$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["\"" + lexicalRepresentation + "\" is not a valid representation of an XML Gregorian Calendar value." ]);
}p$2.save.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'save',  function () {
this.orig_eon=this.eon;
this.orig_year=this.year;
this.orig_month=this.month;
this.orig_day=this.day;
this.orig_hour=this.hour;
this.orig_minute=this.minute;
this.orig_second=this.second;
this.orig_fracSeconds=this.fractionalSecond;
this.orig_timezone=this.timezone;
}, p$2);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigInteger$I$I$I$I$I$java_math_BigDecimal$I',  function (year, month, day, hour, minute, second, fractionalSecond, timezone) {
Clazz.super_(C$, this);
this.setYear$java_math_BigInteger(year);
this.setMonth$I(month);
this.setDay$I(day);
this.setTime$I$I$I$java_math_BigDecimal(hour, minute, second, fractionalSecond);
this.setTimezone$I(timezone);
if (!this.isValid$()) {
var yearString="null";
if (year != null ) {
yearString=year.toString();
}var fractionalSecondString="null";
if (fractionalSecond != null ) {
fractionalSecondString=fractionalSecond.toString();
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["year = " + yearString + ", month = " + month + ", day = " + day + ", hour = " + hour + ", minute = " + minute + ", second = " + second + ", fractionalSecond = " + fractionalSecondString + ", timezone = " + timezone + ", is not a valid representation of an XML Gregorian Calendar value." ]);
}p$2.save.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$I$I$I$I',  function (year, month, day, hour, minute, second, millisecond, timezone) {
Clazz.super_(C$, this);
this.setYear$I(year);
this.setMonth$I(month);
this.setDay$I(day);
this.setTime$I$I$I(hour, minute, second);
this.setTimezone$I(timezone);
var realMilliseconds=null;
if (millisecond != -2147483648) {
realMilliseconds=$I$(4).valueOf$J$I(millisecond, 3);
}this.setFractionalSecond$java_math_BigDecimal(realMilliseconds);
if (!this.isValid$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["year = " + year + ", month = " + month + ", day = " + day + ", hour = " + hour + ", minute = " + minute + ", second = " + second + ", millisecond = " + millisecond + ", timezone = " + timezone + ", is not a valid representation of an XML Gregorian Calendar value." ]);
}p$2.save.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_GregorianCalendar',  function (cal) {
Clazz.super_(C$, this);
var year=cal.get$I(1);
if (cal.get$I(0) == 0) {
year=-year;
}this.setYear$I(year);
this.setMonth$I(cal.get$I(2) + 1);
this.setDay$I(cal.get$I(5));
this.setTime$I$I$I$I(cal.get$I(11), cal.get$I(12), cal.get$I(13), cal.get$I(14));
var offsetInMinutes=((cal.get$I(15) + cal.get$I(16))/(60000)|0);
this.setTimezone$I(offsetInMinutes);
p$2.save.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'createDateTime$java_math_BigInteger$I$I$I$I$I$java_math_BigDecimal$I',  function (year, month, day, hours, minutes, seconds, fractionalSecond, timezone) {
return Clazz.new_(C$.c$$java_math_BigInteger$I$I$I$I$I$java_math_BigDecimal$I,[year, month, day, hours, minutes, seconds, fractionalSecond, timezone]);
}, 1);

Clazz.newMeth(C$, 'createDateTime$I$I$I$I$I$I',  function (year, month, day, hour, minute, second) {
return Clazz.new_(C$.c$$I$I$I$I$I$I$I$I,[year, month, day, hour, minute, second, -2147483648, -2147483648]);
}, 1);

Clazz.newMeth(C$, 'createDateTime$I$I$I$I$I$I$I$I',  function (year, month, day, hours, minutes, seconds, milliseconds, timezone) {
return Clazz.new_(C$.c$$I$I$I$I$I$I$I$I,[year, month, day, hours, minutes, seconds, milliseconds, timezone]);
}, 1);

Clazz.newMeth(C$, 'createDate$I$I$I$I',  function (year, month, day, timezone) {
return Clazz.new_(C$.c$$I$I$I$I$I$I$I$I,[year, month, day, -2147483648, -2147483648, -2147483648, -2147483648, timezone]);
}, 1);

Clazz.newMeth(C$, 'createTime$I$I$I$I',  function (hours, minutes, seconds, timezone) {
return Clazz.new_(C$.c$$I$I$I$I$I$I$I$I,[-2147483648, -2147483648, -2147483648, hours, minutes, seconds, -2147483648, timezone]);
}, 1);

Clazz.newMeth(C$, 'createTime$I$I$I$java_math_BigDecimal$I',  function (hours, minutes, seconds, fractionalSecond, timezone) {
return Clazz.new_(C$.c$$java_math_BigInteger$I$I$I$I$I$java_math_BigDecimal$I,[null, -2147483648, -2147483648, hours, minutes, seconds, fractionalSecond, timezone]);
}, 1);

Clazz.newMeth(C$, 'createTime$I$I$I$I$I',  function (hours, minutes, seconds, milliseconds, timezone) {
return Clazz.new_(C$.c$$I$I$I$I$I$I$I$I,[-2147483648, -2147483648, -2147483648, hours, minutes, seconds, milliseconds, timezone]);
}, 1);

Clazz.newMeth(C$, 'getEon$',  function () {
return this.eon;
});

Clazz.newMeth(C$, 'getYear$',  function () {
return this.year;
});

Clazz.newMeth(C$, 'getEonAndYear$',  function () {
if (this.year != -2147483648 && this.eon != null  ) {
return this.eon.add$java_math_BigInteger($I$(3).valueOf$J(this.year));
}if (this.year != -2147483648 && this.eon == null  ) {
return $I$(3).valueOf$J(this.year);
}return null;
});

Clazz.newMeth(C$, 'getMonth$',  function () {
return this.month;
});

Clazz.newMeth(C$, 'getDay$',  function () {
return this.day;
});

Clazz.newMeth(C$, 'getTimezone$',  function () {
return this.timezone;
});

Clazz.newMeth(C$, 'getHour$',  function () {
return this.hour;
});

Clazz.newMeth(C$, 'getMinute$',  function () {
return this.minute;
});

Clazz.newMeth(C$, 'getSecond$',  function () {
return this.second;
});

Clazz.newMeth(C$, 'getSeconds',  function () {
if (this.second == -2147483648) {
return C$.DECIMAL_ZERO;
}var result=$I$(4).valueOf$J(this.second);
if (this.fractionalSecond != null ) {
return result.add$java_math_BigDecimal(this.fractionalSecond);
} else {
return result;
}}, p$2);

Clazz.newMeth(C$, 'getMillisecond$',  function () {
if (this.fractionalSecond == null ) {
return -2147483648;
} else {
return this.fractionalSecond.movePointRight$I(3).intValue$();
}});

Clazz.newMeth(C$, 'getFractionalSecond$',  function () {
return this.fractionalSecond;
});

Clazz.newMeth(C$, 'setYear$java_math_BigInteger',  function (year) {
if (year == null ) {
this.eon=null;
this.year=-2147483648;
} else {
var temp=year.remainder$java_math_BigInteger(C$.BILLION_B);
this.year=temp.intValue$();
p$2.setEon$java_math_BigInteger.apply(this, [year.subtract$java_math_BigInteger(temp)]);
}});

Clazz.newMeth(C$, 'setYear$I',  function (year) {
if (year == -2147483648) {
this.year=-2147483648;
this.eon=null;
} else if (Math.abs(year) < 1000000000) {
this.year=year;
this.eon=null;
} else {
var theYear=$I$(3).valueOf$J(year);
var remainder=theYear.remainder$java_math_BigInteger(C$.BILLION_B);
this.year=remainder.intValue$();
p$2.setEon$java_math_BigInteger.apply(this, [theYear.subtract$java_math_BigInteger(remainder)]);
}});

Clazz.newMeth(C$, 'setEon$java_math_BigInteger',  function (eon) {
if (eon != null  && eon.compareTo$java_math_BigInteger($I$(3).ZERO) == 0 ) {
this.eon=null;
} else {
this.eon=eon;
}}, p$2);

Clazz.newMeth(C$, 'setMonth$I',  function (month) {
p$2.checkFieldValueConstraint$I$I.apply(this, [1, month]);
this.month=month;
});

Clazz.newMeth(C$, 'setDay$I',  function (day) {
p$2.checkFieldValueConstraint$I$I.apply(this, [2, day]);
this.day=day;
});

Clazz.newMeth(C$, 'setTimezone$I',  function (offset) {
p$2.checkFieldValueConstraint$I$I.apply(this, [7, offset]);
this.timezone=offset;
});

Clazz.newMeth(C$, 'setTime$I$I$I',  function (hour, minute, second) {
this.setTime$I$I$I$java_math_BigDecimal(hour, minute, second, null);
});

Clazz.newMeth(C$, 'checkFieldValueConstraint$I$I',  function (field, value) {
if ((value < C$.MIN_FIELD_VALUE[field] && value != -2147483648 ) || value > C$.MAX_FIELD_VALUE[field] ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid value " + value + " for " + C$.FIELD_NAME[field] + " field" ]);
}}, p$2);

Clazz.newMeth(C$, 'setHour$I',  function (hour) {
p$2.checkFieldValueConstraint$I$I.apply(this, [3, hour]);
this.hour=hour;
});

Clazz.newMeth(C$, 'setMinute$I',  function (minute) {
p$2.checkFieldValueConstraint$I$I.apply(this, [4, minute]);
this.minute=minute;
});

Clazz.newMeth(C$, 'setSecond$I',  function (second) {
p$2.checkFieldValueConstraint$I$I.apply(this, [5, second]);
this.second=second;
});

Clazz.newMeth(C$, 'setTime$I$I$I$java_math_BigDecimal',  function (hour, minute, second, fractional) {
this.setHour$I(hour);
this.setMinute$I(minute);
this.setSecond$I(second);
this.setFractionalSecond$java_math_BigDecimal(fractional);
});

Clazz.newMeth(C$, 'setTime$I$I$I$I',  function (hour, minute, second, millisecond) {
this.setHour$I(hour);
this.setMinute$I(minute);
this.setSecond$I(second);
this.setMillisecond$I(millisecond);
});

Clazz.newMeth(C$, 'compare$javax_xml_datatype_XMLGregorianCalendar',  function (rhs) {
var result=2;
var P=this;
var Q=rhs;
if (P.getTimezone$() == Q.getTimezone$()) {
return C$.internalCompare$javax_xml_datatype_XMLGregorianCalendar$javax_xml_datatype_XMLGregorianCalendar(P, Q);
} else if (P.getTimezone$() != -2147483648 && Q.getTimezone$() != -2147483648 ) {
P=P.normalize$();
Q=Q.normalize$();
return C$.internalCompare$javax_xml_datatype_XMLGregorianCalendar$javax_xml_datatype_XMLGregorianCalendar(P, Q);
} else if (P.getTimezone$() != -2147483648) {
if (P.getTimezone$() != 0) {
P=P.normalize$();
}var MinQ=p$2.normalizeToTimezone$javax_xml_datatype_XMLGregorianCalendar$I.apply(this, [Q, 840]);
result=C$.internalCompare$javax_xml_datatype_XMLGregorianCalendar$javax_xml_datatype_XMLGregorianCalendar(P, MinQ);
if (result == -1) {
return result;
}var MaxQ=p$2.normalizeToTimezone$javax_xml_datatype_XMLGregorianCalendar$I.apply(this, [Q, -840]);
result=C$.internalCompare$javax_xml_datatype_XMLGregorianCalendar$javax_xml_datatype_XMLGregorianCalendar(P, MaxQ);
if (result == 1) {
return result;
} else {
return 2;
}} else {
if (Q.getTimezone$() != 0) {
Q=p$2.normalizeToTimezone$javax_xml_datatype_XMLGregorianCalendar$I.apply(this, [Q, Q.getTimezone$()]);
}var MaxP=p$2.normalizeToTimezone$javax_xml_datatype_XMLGregorianCalendar$I.apply(this, [P, -840]);
result=C$.internalCompare$javax_xml_datatype_XMLGregorianCalendar$javax_xml_datatype_XMLGregorianCalendar(MaxP, Q);
if (result == -1) {
return result;
}var MinP=p$2.normalizeToTimezone$javax_xml_datatype_XMLGregorianCalendar$I.apply(this, [P, 840]);
result=C$.internalCompare$javax_xml_datatype_XMLGregorianCalendar$javax_xml_datatype_XMLGregorianCalendar(MinP, Q);
if (result == 1) {
return result;
} else {
return 2;
}}});

Clazz.newMeth(C$, 'normalize$',  function () {
var normalized=p$2.normalizeToTimezone$javax_xml_datatype_XMLGregorianCalendar$I.apply(this, [this, this.timezone]);
if (this.getTimezone$() == -2147483648) {
normalized.setTimezone$I(-2147483648);
}if (this.getMillisecond$() == -2147483648) {
normalized.setMillisecond$I(-2147483648);
}return normalized;
});

Clazz.newMeth(C$, 'normalizeToTimezone$javax_xml_datatype_XMLGregorianCalendar$I',  function (cal, timezone) {
var minutes=timezone;
var result=cal.clone$();
minutes=-minutes;
var d=Clazz.new_([minutes >= 0, 0, 0, 0, 0, minutes < 0 ? -minutes : minutes, 0],$I$(6,1).c$$Z$I$I$I$I$I$I);
result.add$javax_xml_datatype_Duration(d);
result.setTimezone$I(0);
return result;
}, p$2);

Clazz.newMeth(C$, 'internalCompare$javax_xml_datatype_XMLGregorianCalendar$javax_xml_datatype_XMLGregorianCalendar',  function (P, Q) {
var result;
if (P.getEon$() === Q.getEon$() ) {
result=C$.compareField$I$I(P.getYear$(), Q.getYear$());
if (result != 0) {
return result;
}} else {
result=C$.compareField$java_math_BigInteger$java_math_BigInteger(P.getEonAndYear$(), Q.getEonAndYear$());
if (result != 0) {
return result;
}}result=C$.compareField$I$I(P.getMonth$(), Q.getMonth$());
if (result != 0) {
return result;
}result=C$.compareField$I$I(P.getDay$(), Q.getDay$());
if (result != 0) {
return result;
}result=C$.compareField$I$I(P.getHour$(), Q.getHour$());
if (result != 0) {
return result;
}result=C$.compareField$I$I(P.getMinute$(), Q.getMinute$());
if (result != 0) {
return result;
}result=C$.compareField$I$I(P.getSecond$(), Q.getSecond$());
if (result != 0) {
return result;
}result=C$.compareField$java_math_BigDecimal$java_math_BigDecimal(P.getFractionalSecond$(), Q.getFractionalSecond$());
return result;
}, 1);

Clazz.newMeth(C$, 'compareField$I$I',  function (Pfield, Qfield) {
if (Pfield == Qfield) {
return 0;
} else {
if (Pfield == -2147483648 || Qfield == -2147483648 ) {
return 2;
} else {
return (Pfield < Qfield ? -1 : 1);
}}}, 1);

Clazz.newMeth(C$, 'compareField$java_math_BigInteger$java_math_BigInteger',  function (Pfield, Qfield) {
if (Pfield == null ) {
return (Qfield == null  ? 0 : 2);
}if (Qfield == null ) {
return 2;
}return Pfield.compareTo$java_math_BigInteger(Qfield);
}, 1);

Clazz.newMeth(C$, 'compareField$java_math_BigDecimal$java_math_BigDecimal',  function (Pfield, Qfield) {
if (Pfield === Qfield ) {
return 0;
}if (Pfield == null ) {
Pfield=C$.DECIMAL_ZERO;
}if (Qfield == null ) {
Qfield=C$.DECIMAL_ZERO;
}return Pfield.compareTo$java_math_BigDecimal(Qfield);
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (obj === this ) {
return true;
}if (Clazz.instanceOf(obj, "javax.xml.datatype.XMLGregorianCalendar")) {
return this.compare$javax_xml_datatype_XMLGregorianCalendar(obj) == 0;
}return false;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var timezone=this.getTimezone$();
if (timezone == -2147483648) {
timezone=0;
}var gc=this;
if (timezone != 0) {
gc=p$2.normalizeToTimezone$javax_xml_datatype_XMLGregorianCalendar$I.apply(this, [this, this.getTimezone$()]);
}return gc.getYear$() + gc.getMonth$() + gc.getDay$() + gc.getHour$() + gc.getMinute$() + gc.getSecond$() ;
});

Clazz.newMeth(C$, 'parse$S',  function (lexicalRepresentation) {
return Clazz.new_(C$.c$$S,[lexicalRepresentation]);
}, 1);

Clazz.newMeth(C$, 'toXMLFormat$',  function () {
var typekind=this.getXMLSchemaType$();
var formatString=null;
if (typekind === $I$(7).DATETIME ) {
formatString="%Y-%M-%DT%h:%m:%s%z";
} else if (typekind === $I$(7).DATE ) {
formatString="%Y-%M-%D%z";
} else if (typekind === $I$(7).TIME ) {
formatString="%h:%m:%s%z";
} else if (typekind === $I$(7).GMONTH ) {
formatString="--%M--%z";
} else if (typekind === $I$(7).GDAY ) {
formatString="---%D%z";
} else if (typekind === $I$(7).GYEAR ) {
formatString="%Y%z";
} else if (typekind === $I$(7).GYEARMONTH ) {
formatString="%Y-%M%z";
} else if (typekind === $I$(7).GMONTHDAY ) {
formatString="--%M-%D%z";
}return p$2.format$S.apply(this, [formatString]);
});

Clazz.newMeth(C$, 'getXMLSchemaType$',  function () {
if (this.year != -2147483648 && this.month != -2147483648  && this.day != -2147483648  && this.hour != -2147483648  && this.minute != -2147483648  && this.second != -2147483648 ) {
return $I$(7).DATETIME;
}if (this.year != -2147483648 && this.month != -2147483648  && this.day != -2147483648  && this.hour == -2147483648  && this.minute == -2147483648  && this.second == -2147483648 ) {
return $I$(7).DATE;
}if (this.year == -2147483648 && this.month == -2147483648  && this.day == -2147483648  && this.hour != -2147483648  && this.minute != -2147483648  && this.second != -2147483648 ) {
return $I$(7).TIME;
}if (this.year != -2147483648 && this.month != -2147483648  && this.day == -2147483648  && this.hour == -2147483648  && this.minute == -2147483648  && this.second == -2147483648 ) {
return $I$(7).GYEARMONTH;
}if (this.year == -2147483648 && this.month != -2147483648  && this.day != -2147483648  && this.hour == -2147483648  && this.minute == -2147483648  && this.second == -2147483648 ) {
return $I$(7).GMONTHDAY;
}if (this.year != -2147483648 && this.month == -2147483648  && this.day == -2147483648  && this.hour == -2147483648  && this.minute == -2147483648  && this.second == -2147483648 ) {
return $I$(7).GYEAR;
}if (this.year == -2147483648 && this.month != -2147483648  && this.day == -2147483648  && this.hour == -2147483648  && this.minute == -2147483648  && this.second == -2147483648 ) {
return $I$(7).GMONTH;
}if (this.year == -2147483648 && this.month == -2147483648  && this.day != -2147483648  && this.hour == -2147483648  && this.minute == -2147483648  && this.second == -2147483648 ) {
return $I$(7).GDAY;
}throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[this.getClass$().getName$() + "#getXMLSchemaType() : Invalid XGC fields"]);
});

Clazz.newMeth(C$, 'isValid$',  function () {
if (this.month != -2147483648 && this.day != -2147483648 ) {
if (this.year != -2147483648) {
if (this.eon == null ) {
if (this.day > C$.maximumDayInMonthFor$I$I(this.year, this.month)) {
return false;
}} else if (this.day > C$.maximumDayInMonthFor$java_math_BigInteger$I(this.getEonAndYear$(), this.month)) {
return false;
}} else if (this.day > C$.maximumDayInMonthFor$I$I(2000, this.month)) {
return false;
}}if (this.hour == 24 && (this.minute != 0 || this.second != 0  || (this.fractionalSecond != null  && this.fractionalSecond.compareTo$java_math_BigDecimal(C$.DECIMAL_ZERO) != 0 ) ) ) {
return false;
}if (this.eon == null  && this.year == 0 ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'add$javax_xml_datatype_Duration',  function (duration) {
var fieldUndefined=Clazz.array(Boolean.TYPE, -1, [false, false, false, false, false, false]);
var signum=duration.getSign$();
var startMonth=this.getMonth$();
if (startMonth == -2147483648) {
startMonth=C$.MIN_FIELD_VALUE[1];
fieldUndefined[1]=true;
}var dMonths=C$.sanitize$Number$I(duration.getField$javax_xml_datatype_DatatypeConstants_Field($I$(7).MONTHS), signum);
var temp=$I$(3).valueOf$J(startMonth).add$java_math_BigInteger(dMonths);
this.setMonth$I(temp.subtract$java_math_BigInteger($I$(3).ONE).mod$java_math_BigInteger(C$.TWELVE).intValue$() + 1);
var carry=Clazz.new_([temp.subtract$java_math_BigInteger($I$(3).ONE)],$I$(4,1).c$$java_math_BigInteger).divide$java_math_BigDecimal$I(Clazz.new_($I$(4,1).c$$java_math_BigInteger,[C$.TWELVE]), 3).toBigInteger$();
var startYear=this.getEonAndYear$();
if (startYear == null ) {
fieldUndefined[0]=true;
startYear=$I$(3).ZERO;
}var dYears=C$.sanitize$Number$I(duration.getField$javax_xml_datatype_DatatypeConstants_Field($I$(7).YEARS), signum);
var endYear=startYear.add$java_math_BigInteger(dYears).add$java_math_BigInteger(carry);
this.setYear$java_math_BigInteger(endYear);
var startSeconds;
if (this.getSecond$() == -2147483648) {
fieldUndefined[5]=true;
startSeconds=C$.DECIMAL_ZERO;
} else {
startSeconds=p$2.getSeconds.apply(this, []);
}var dSeconds=$I$(6,"sanitize$java_math_BigDecimal$I",[duration.getField$javax_xml_datatype_DatatypeConstants_Field($I$(7).SECONDS), signum]);
var tempBD=startSeconds.add$java_math_BigDecimal(dSeconds);
var fQuotient=Clazz.new_([Clazz.new_([tempBD.toBigInteger$()],$I$(4,1).c$$java_math_BigInteger).divide$java_math_BigDecimal$I(C$.DECIMAL_SIXTY, 3).toBigInteger$()],$I$(4,1).c$$java_math_BigInteger);
var endSeconds=tempBD.subtract$java_math_BigDecimal(fQuotient.multiply$java_math_BigDecimal(C$.DECIMAL_SIXTY));
carry=fQuotient.toBigInteger$();
this.setSecond$I(endSeconds.intValue$());
var tempFracSeconds=endSeconds.subtract$java_math_BigDecimal(Clazz.new_([$I$(3,"valueOf$J",[this.getSecond$()])],$I$(4,1).c$$java_math_BigInteger));
if (tempFracSeconds.compareTo$java_math_BigDecimal(C$.DECIMAL_ZERO) < 0) {
this.setFractionalSecond$java_math_BigDecimal(C$.DECIMAL_ONE.add$java_math_BigDecimal(tempFracSeconds));
if (this.getSecond$() == 0) {
this.setSecond$I(59);
carry=carry.subtract$java_math_BigInteger($I$(3).ONE);
} else {
this.setSecond$I(this.getSecond$() - 1);
}} else {
this.setFractionalSecond$java_math_BigDecimal(tempFracSeconds);
}var startMinutes=this.getMinute$();
if (startMinutes == -2147483648) {
fieldUndefined[4]=true;
startMinutes=C$.MIN_FIELD_VALUE[4];
}var dMinutes=C$.sanitize$Number$I(duration.getField$javax_xml_datatype_DatatypeConstants_Field($I$(7).MINUTES), signum);
temp=$I$(3).valueOf$J(startMinutes).add$java_math_BigInteger(dMinutes).add$java_math_BigInteger(carry);
this.setMinute$I(temp.mod$java_math_BigInteger(C$.SIXTY).intValue$());
carry=Clazz.new_($I$(4,1).c$$java_math_BigInteger,[temp]).divide$java_math_BigDecimal$I(C$.DECIMAL_SIXTY, 3).toBigInteger$();
var startHours=this.getHour$();
if (startHours == -2147483648) {
fieldUndefined[3]=true;
startHours=C$.MIN_FIELD_VALUE[3];
}var dHours=C$.sanitize$Number$I(duration.getField$javax_xml_datatype_DatatypeConstants_Field($I$(7).HOURS), signum);
temp=$I$(3).valueOf$J(startHours).add$java_math_BigInteger(dHours).add$java_math_BigInteger(carry);
this.setHour$I(temp.mod$java_math_BigInteger(C$.TWENTY_FOUR).intValue$());
carry=Clazz.new_($I$(4,1).c$$java_math_BigInteger,[temp]).divide$java_math_BigDecimal$I(Clazz.new_($I$(4,1).c$$java_math_BigInteger,[C$.TWENTY_FOUR]), 3).toBigInteger$();
var tempDays;
var startDay=this.getDay$();
if (startDay == -2147483648) {
fieldUndefined[2]=true;
startDay=C$.MIN_FIELD_VALUE[2];
}var dDays=C$.sanitize$Number$I(duration.getField$javax_xml_datatype_DatatypeConstants_Field($I$(7).DAYS), signum);
var maxDayInMonth=C$.maximumDayInMonthFor$java_math_BigInteger$I(this.getEonAndYear$(), this.getMonth$());
if (startDay > maxDayInMonth) {
tempDays=$I$(3).valueOf$J(maxDayInMonth);
} else if (startDay < 1) {
tempDays=$I$(3).ONE;
} else {
tempDays=$I$(3).valueOf$J(startDay);
}var endDays=tempDays.add$java_math_BigInteger(dDays).add$java_math_BigInteger(carry);
var monthCarry;
var intTemp;
while (true){
if (endDays.compareTo$java_math_BigInteger($I$(3).ONE) < 0) {
var mdimf=null;
if (this.month >= 2) {
mdimf=$I$(3,"valueOf$J",[C$.maximumDayInMonthFor$java_math_BigInteger$I(this.getEonAndYear$(), this.getMonth$() - 1)]);
} else {
mdimf=$I$(3,"valueOf$J",[C$.maximumDayInMonthFor$java_math_BigInteger$I(this.getEonAndYear$().subtract$java_math_BigInteger($I$(3).valueOf$J(1)), 12)]);
}endDays=endDays.add$java_math_BigInteger(mdimf);
monthCarry=-1;
} else if (endDays.compareTo$java_math_BigInteger($I$(3,"valueOf$J",[C$.maximumDayInMonthFor$java_math_BigInteger$I(this.getEonAndYear$(), this.getMonth$())])) > 0) {
endDays=endDays.add$java_math_BigInteger($I$(3,"valueOf$J",[-C$.maximumDayInMonthFor$java_math_BigInteger$I(this.getEonAndYear$(), this.getMonth$())]));
monthCarry=1;
} else {
break;
}intTemp=this.getMonth$() + monthCarry;
var endMonth=(intTemp - 1) % (12);
var quotient;
if (endMonth < 0) {
endMonth=(12) + endMonth + 1 ;
quotient=$I$(4).valueOf$J(intTemp - 1).divide$java_math_BigDecimal$I(Clazz.new_($I$(4,1).c$$java_math_BigInteger,[C$.TWELVE]), 0).intValue$();
} else {
quotient=((intTemp - 1)/(12)|0);
endMonth+=1;
}this.setMonth$I(endMonth);
if (quotient != 0) {
this.setYear$java_math_BigInteger(this.getEonAndYear$().add$java_math_BigInteger($I$(3).valueOf$J(quotient)));
}}
this.setDay$I(endDays.intValue$());
for (var i=0; i <= 5; i++) {
if (fieldUndefined[i]) {
switch (i) {
case 0:
this.setYear$I(-2147483648);
break;
case 1:
this.setMonth$I(-2147483648);
break;
case 2:
this.setDay$I(-2147483648);
break;
case 3:
this.setHour$I(-2147483648);
break;
case 4:
this.setMinute$I(-2147483648);
break;
case 5:
this.setSecond$I(-2147483648);
this.setFractionalSecond$java_math_BigDecimal(null);
break;
}
}}
});

Clazz.newMeth(C$, 'maximumDayInMonthFor$java_math_BigInteger$I',  function (year, month) {
if (month != 2) {
return $I$(8).table[month];
} else {
if (year.mod$java_math_BigInteger(C$.FOUR_HUNDRED).equals$O($I$(3).ZERO) || (!year.mod$java_math_BigInteger(C$.HUNDRED).equals$O($I$(3).ZERO) && year.mod$java_math_BigInteger(C$.FOUR).equals$O($I$(3).ZERO) ) ) {
return 29;
} else {
return $I$(8).table[month];
}}}, 1);

Clazz.newMeth(C$, 'maximumDayInMonthFor$I$I',  function (year, month) {
if (month != 2) {
return $I$(8).table[month];
} else {
if (((year % 400) == 0) || (((year % 100) != 0) && ((year % 4) == 0) ) ) {
return 29;
} else {
return $I$(8).table[2];
}}}, 1);

Clazz.newMeth(C$, 'toGregorianCalendar$',  function () {
var result=null;
var DEFAULT_TIMEZONE_OFFSET=-2147483648;
var tz=this.getTimeZone$I(-2147483648);
var locale=$I$(9).getDefault$();
result=Clazz.new_($I$(10,1).c$$java_util_TimeZone$java_util_Locale,[tz, locale]);
result.clear$();
result.setGregorianChange$java_util_Date(C$.PURE_GREGORIAN_CHANGE);
if (this.year != -2147483648) {
if (this.eon == null ) {
result.set$I$I(0, this.year < 0 ? 0 : 1);
result.set$I$I(1, Math.abs(this.year));
} else {
var eonAndYear=this.getEonAndYear$();
result.set$I$I(0, eonAndYear.signum$() == -1 ? 0 : 1);
result.set$I$I(1, eonAndYear.abs$().intValue$());
}}if (this.month != -2147483648) {
result.set$I$I(2, this.month - 1);
}if (this.day != -2147483648) {
result.set$I$I(5, this.day);
}if (this.hour != -2147483648) {
result.set$I$I(11, this.hour);
}if (this.minute != -2147483648) {
result.set$I$I(12, this.minute);
}if (this.second != -2147483648) {
result.set$I$I(13, this.second);
}if (this.fractionalSecond != null ) {
result.set$I$I(14, this.getMillisecond$());
}return result;
});

Clazz.newMeth(C$, 'toGregorianCalendar$java_util_TimeZone$java_util_Locale$javax_xml_datatype_XMLGregorianCalendar',  function (timezone, aLocale, defaults) {
var result=null;
var tz=timezone;
if (tz == null ) {
var defaultZoneoffset=-2147483648;
if (defaults != null ) {
defaultZoneoffset=defaults.getTimezone$();
}tz=this.getTimeZone$I(defaultZoneoffset);
}if (aLocale == null ) {
aLocale=$I$(9).getDefault$();
}result=Clazz.new_($I$(10,1).c$$java_util_TimeZone$java_util_Locale,[tz, aLocale]);
result.clear$();
result.setGregorianChange$java_util_Date(C$.PURE_GREGORIAN_CHANGE);
if (this.year != -2147483648) {
if (this.eon == null ) {
result.set$I$I(0, this.year < 0 ? 0 : 1);
result.set$I$I(1, Math.abs(this.year));
} else {
var eonAndYear=this.getEonAndYear$();
result.set$I$I(0, eonAndYear.signum$() == -1 ? 0 : 1);
result.set$I$I(1, eonAndYear.abs$().intValue$());
}} else {
if (defaults != null ) {
var defaultYear=defaults.getYear$();
if (defaultYear != -2147483648) {
if (defaults.getEon$() == null ) {
result.set$I$I(0, defaultYear < 0 ? 0 : 1);
result.set$I$I(1, Math.abs(defaultYear));
} else {
var defaultEonAndYear=defaults.getEonAndYear$();
result.set$I$I(0, defaultEonAndYear.signum$() == -1 ? 0 : 1);
result.set$I$I(1, defaultEonAndYear.abs$().intValue$());
}}}}if (this.month != -2147483648) {
result.set$I$I(2, this.month - 1);
} else {
var defaultMonth=(defaults != null ) ? defaults.getMonth$() : -2147483648;
if (defaultMonth != -2147483648) {
result.set$I$I(2, defaultMonth - 1);
}}if (this.day != -2147483648) {
result.set$I$I(5, this.day);
} else {
var defaultDay=(defaults != null ) ? defaults.getDay$() : -2147483648;
if (defaultDay != -2147483648) {
result.set$I$I(5, defaultDay);
}}if (this.hour != -2147483648) {
result.set$I$I(11, this.hour);
} else {
var defaultHour=(defaults != null ) ? defaults.getHour$() : -2147483648;
if (defaultHour != -2147483648) {
result.set$I$I(11, defaultHour);
}}if (this.minute != -2147483648) {
result.set$I$I(12, this.minute);
} else {
var defaultMinute=(defaults != null ) ? defaults.getMinute$() : -2147483648;
if (defaultMinute != -2147483648) {
result.set$I$I(12, defaultMinute);
}}if (this.second != -2147483648) {
result.set$I$I(13, this.second);
} else {
var defaultSecond=(defaults != null ) ? defaults.getSecond$() : -2147483648;
if (defaultSecond != -2147483648) {
result.set$I$I(13, defaultSecond);
}}if (this.fractionalSecond != null ) {
result.set$I$I(14, this.getMillisecond$());
} else {
var defaultFractionalSecond=(defaults != null ) ? defaults.getFractionalSecond$() : null;
if (defaultFractionalSecond != null ) {
result.set$I$I(14, defaults.getMillisecond$());
}}return result;
});

Clazz.newMeth(C$, 'getTimeZone$I',  function (defaultZoneoffset) {
var result=null;
var zoneoffset=this.getTimezone$();
if (zoneoffset == -2147483648) {
zoneoffset=defaultZoneoffset;
}if (zoneoffset == -2147483648) {
result=$I$(11).getDefault$();
} else {
var sign=zoneoffset < 0 ? "-" : "+";
if (sign == "-") {
zoneoffset=-zoneoffset;
}var hour=(zoneoffset/60|0);
var minutes=zoneoffset - (hour * 60);
var customTimezoneId=Clazz.new_($I$(12,1).c$$I,[8]);
customTimezoneId.append$S("GMT");
customTimezoneId.append$C(sign);
customTimezoneId.append$I(hour);
if (minutes != 0) {
if (minutes < 10) {
customTimezoneId.append$C("0");
}customTimezoneId.append$I(minutes);
}result=$I$(11,"getTimeZone$S",[customTimezoneId.toString()]);
}return result;
});

Clazz.newMeth(C$, 'clone$',  function () {
return Clazz.new_(C$.c$$java_math_BigInteger$I$I$I$I$I$java_math_BigDecimal$I,[this.getEonAndYear$(), this.month, this.day, this.hour, this.minute, this.second, this.fractionalSecond, this.timezone]);
});

Clazz.newMeth(C$, 'clear$',  function () {
this.eon=null;
this.year=-2147483648;
this.month=-2147483648;
this.day=-2147483648;
this.timezone=-2147483648;
this.hour=-2147483648;
this.minute=-2147483648;
this.second=-2147483648;
this.fractionalSecond=null;
});

Clazz.newMeth(C$, 'setMillisecond$I',  function (millisecond) {
if (millisecond == -2147483648) {
this.fractionalSecond=null;
} else {
p$2.checkFieldValueConstraint$I$I.apply(this, [6, millisecond]);
this.fractionalSecond=$I$(4).valueOf$J$I(millisecond, 3);
}});

Clazz.newMeth(C$, 'setFractionalSecond$java_math_BigDecimal',  function (fractional) {
if (fractional != null ) {
if ((fractional.compareTo$java_math_BigDecimal(C$.DECIMAL_ZERO) < 0) || (fractional.compareTo$java_math_BigDecimal(C$.DECIMAL_ONE) > 0) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid fractional value " + fractional]);
}}this.fractionalSecond=fractional;
});

Clazz.newMeth(C$, 'isDigit$C',  function (ch) {
return "0" <= ch && ch <= "9" ;
}, 1);

Clazz.newMeth(C$, 'format$S',  function (format) {
var buf=Clazz.new_($I$(12,1));
var fidx=0;
var flen=format.length$();
while (fidx < flen){
var fch=format.charAt$I(fidx++);
if (fch != "%") {
buf.append$C(fch);
continue;
}switch ((format.charCodeAt$I(fidx++))) {
case 89:
if (this.eon == null ) {
var absYear=this.year;
if (absYear < 0) {
buf.append$C("-");
absYear=-this.year;
}p$2.printNumber$StringBuffer$I$I.apply(this, [buf, absYear, 4]);
} else {
p$2.printNumber$StringBuffer$java_math_BigInteger$I.apply(this, [buf, this.getEonAndYear$(), 4]);
}break;
case 77:
p$2.printNumber$StringBuffer$I$I.apply(this, [buf, this.getMonth$(), 2]);
break;
case 68:
p$2.printNumber$StringBuffer$I$I.apply(this, [buf, this.getDay$(), 2]);
break;
case 104:
p$2.printNumber$StringBuffer$I$I.apply(this, [buf, this.getHour$(), 2]);
break;
case 109:
p$2.printNumber$StringBuffer$I$I.apply(this, [buf, this.getMinute$(), 2]);
break;
case 115:
p$2.printNumber$StringBuffer$I$I.apply(this, [buf, this.getSecond$(), 2]);
if (this.getFractionalSecond$() != null ) {
var frac=p$2.toString$java_math_BigDecimal.apply(this, [this.getFractionalSecond$()]);
buf.append$S(frac.substring$I$I(1, frac.length$()));
}break;
case 122:
var offset=this.getTimezone$();
if (offset == 0) {
buf.append$C("Z");
} else if (offset != -2147483648) {
if (offset < 0) {
buf.append$C("-");
offset*=-1;
} else {
buf.append$C("+");
}p$2.printNumber$StringBuffer$I$I.apply(this, [buf, (offset/60|0), 2]);
buf.append$C(":");
p$2.printNumber$StringBuffer$I$I.apply(this, [buf, offset % 60, 2]);
}break;
default:
throw Clazz.new_($I$(1,1));
}
}
return buf.toString();
}, p$2);

Clazz.newMeth(C$, 'printNumber$StringBuffer$I$I',  function (out, number, nDigits) {
var s=String.valueOf$I(number);
for (var i=s.length$(); i < nDigits; i++) {
out.append$C("0");
}
out.append$S(s);
}, p$2);

Clazz.newMeth(C$, 'printNumber$StringBuffer$java_math_BigInteger$I',  function (out, number, nDigits) {
var s=number.toString();
for (var i=s.length$(); i < nDigits; i++) {
out.append$C("0");
}
out.append$S(s);
}, p$2);

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
buf=Clazz.new_($I$(12,1).c$$S,[intString]);
buf.insert$I$C(insertionPoint, ".");
} else {
buf=Clazz.new_([3 - insertionPoint + intString.length$()],$I$(12,1).c$$I);
buf.append$S("0.");
for (var i=0; i < -insertionPoint; i++) {
buf.append$C("0");
}
buf.append$S(intString);
}return buf.toString();
}, p$2);

Clazz.newMeth(C$, 'sanitize$Number$I',  function (value, signum) {
if (signum == 0 || value == null  ) {
return $I$(3).ZERO;
}return (signum < 0) ? (value).negate$() : value;
}, 1);

Clazz.newMeth(C$, 'reset$',  function () {
this.eon=this.orig_eon;
this.year=this.orig_year;
this.month=this.orig_month;
this.day=this.orig_day;
this.hour=this.orig_hour;
this.minute=this.orig_minute;
this.second=this.orig_second;
this.fractionalSecond=this.orig_fracSeconds;
this.timezone=this.orig_timezone;
});

Clazz.newMeth(C$, 'writeReplace',  function () {
return Clazz.new_([this.toXMLFormat$()],$I$(13,1).c$$S);
}, p$2);

C$.$static$=function(){C$.$static$=0;
C$.BILLION_B=$I$(3).valueOf$J(1000000000);
C$.PURE_GREGORIAN_CHANGE=Clazz.new_(java.util.Date.c$$J,[[0,549755813888,-1]]);
C$.MIN_FIELD_VALUE=Clazz.array(Integer.TYPE, -1, [-2147483648, 1, 1, 0, 0, 0, 0, -840]);
C$.MAX_FIELD_VALUE=Clazz.array(Integer.TYPE, -1, [2147483647, 12, 31, 24, 59, 60, 999, 840]);
C$.FIELD_NAME=Clazz.array(String, -1, ["Year", "Month", "Day", "Hour", "Minute", "Second", "Millisecond", "Timezone"]);
C$.LEAP_YEAR_DEFAULT=C$.createDateTime$I$I$I$I$I$I$I$I(400, 1, 1, 0, 0, 0, -2147483648, -2147483648);
C$.FOUR=$I$(3).valueOf$J(4);
C$.HUNDRED=$I$(3).valueOf$J(100);
C$.FOUR_HUNDRED=$I$(3).valueOf$J(400);
C$.SIXTY=$I$(3).valueOf$J(60);
C$.TWENTY_FOUR=$I$(3).valueOf$J(24);
C$.TWELVE=$I$(3).valueOf$J(12);
C$.DECIMAL_ZERO=$I$(4).valueOf$J(0);
C$.DECIMAL_ONE=$I$(4).valueOf$J(1);
C$.DECIMAL_SIXTY=$I$(4).valueOf$J(60);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.XMLGregorianCalendarImpl, "DaysInMonth", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['table','int[]']]]

C$.$static$=function(){C$.$static$=0;
C$.table=Clazz.array(Integer.TYPE, -1, [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.XMLGregorianCalendarImpl, "Parser", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['flen','vlen','fidx','vidx'],'S',['format','value']]]

Clazz.newMeth(C$, 'c$$S$S',  function (format, value) {
;C$.$init$.apply(this);
this.format=format;
this.value=value;
this.flen=format.length$();
this.vlen=value.length$();
}, 1);

Clazz.newMeth(C$, 'parse$',  function () {
while (this.fidx < this.flen){
var fch=this.format.charAt$I(this.fidx++);
if (fch != "%") {
p$1.skip$C.apply(this, [fch]);
continue;
}switch ((this.format.charCodeAt$I(this.fidx++))) {
case 89:
p$1.parseYear.apply(this, []);
break;
case 77:
this.b$['org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl'].setMonth$I.apply(this.b$['org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl'], [p$1.parseInt$I$I.apply(this, [2, 2])]);
break;
case 68:
this.b$['org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl'].setDay$I.apply(this.b$['org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl'], [p$1.parseInt$I$I.apply(this, [2, 2])]);
break;
case 104:
this.b$['org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl'].setHour$I.apply(this.b$['org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl'], [p$1.parseInt$I$I.apply(this, [2, 2])]);
break;
case 109:
this.b$['org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl'].setMinute$I.apply(this.b$['org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl'], [p$1.parseInt$I$I.apply(this, [2, 2])]);
break;
case 115:
this.b$['org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl'].setSecond$I.apply(this.b$['org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl'], [p$1.parseInt$I$I.apply(this, [2, 2])]);
if (p$1.peek.apply(this, []) == ".") {
this.b$['org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl'].setFractionalSecond$java_math_BigDecimal.apply(this.b$['org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl'], [p$1.parseBigDecimal.apply(this, [])]);
}break;
case 122:
var vch=p$1.peek.apply(this, []);
if (vch == "Z") {
++this.vidx;
this.b$['org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl'].setTimezone$I.apply(this.b$['org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl'], [0]);
} else if (vch == "+" || vch == "-" ) {
++this.vidx;
var h=p$1.parseInt$I$I.apply(this, [2, 2]);
p$1.skip$C.apply(this, [":"]);
var m=p$1.parseInt$I$I.apply(this, [2, 2]);
this.b$['org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl'].setTimezone$I.apply(this.b$['org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl'], [(h * 60 + m) * (vch == "+" ? 1 : -1)]);
}break;
default:
throw Clazz.new_($I$(1,1));
}
}
if (this.vidx != this.vlen) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[this.value]);
}});

Clazz.newMeth(C$, 'peek',  function () {
if (this.vidx == this.vlen) {
return "\uffff";
}return this.value.charAt$I(this.vidx);
}, p$1);

Clazz.newMeth(C$, 'read',  function () {
if (this.vidx == this.vlen) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[this.value]);
}return this.value.charAt$I(this.vidx++);
}, p$1);

Clazz.newMeth(C$, 'skip$C',  function (ch) {
if (p$1.read.apply(this, []) != ch) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[this.value]);
}}, p$1);

Clazz.newMeth(C$, 'parseYear',  function () {
var vstart=this.vidx;
var sign=0;
if (p$1.peek.apply(this, []) == "-") {
++this.vidx;
sign=1;
}while ($I$(2,"isDigit$C",[p$1.peek.apply(this, [])])){
++this.vidx;
}
var digits=this.vidx - vstart - sign ;
if (digits < 4) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[this.value]);
}var yearString=this.value.substring$I$I(vstart, this.vidx);
if (digits < 10) {
this.b$['org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl'].setYear$I.apply(this.b$['org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl'], [Integer.parseInt$S(yearString)]);
} else {
this.b$['org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl'].setYear$java_math_BigInteger.apply(this.b$['org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl'], [Clazz.new_($I$(3,1).c$$S,[yearString])]);
}}, p$1);

Clazz.newMeth(C$, 'parseInt$I$I',  function (minDigits, maxDigits) {
var vstart=this.vidx;
while ($I$(2,"isDigit$C",[p$1.peek.apply(this, [])]) && (this.vidx - vstart) < maxDigits ){
++this.vidx;
}
if ((this.vidx - vstart) < minDigits) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[this.value]);
}return Integer.parseInt$S(this.value.substring$I$I(vstart, this.vidx));
}, p$1);

Clazz.newMeth(C$, 'parseBigDecimal',  function () {
var vstart=this.vidx;
if (p$1.peek.apply(this, []) == ".") {
++this.vidx;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[this.value]);
}while ($I$(2,"isDigit$C",[p$1.peek.apply(this, [])])){
++this.vidx;
}
return Clazz.new_([this.value.substring$I$I(vstart, this.vidx)],$I$(4,1).c$$S);
}, p$1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
