(function(){var P$=Clazz.newPackage("org.apache.xerces.jaxp.datatype"),p$1={},I$=[[0,['javax.xml.datatype.DatatypeConstants','.Field'],'javax.xml.datatype.DatatypeConstants','java.math.BigDecimal','javax.xml.datatype.XMLGregorianCalendar','org.apache.xerces.jaxp.datatype.XMLGregorianCalendarImpl','java.math.BigInteger','java.util.GregorianCalendar','StringBuffer','org.apache.xerces.jaxp.datatype.SerializedDuration']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DurationImpl", null, 'javax.xml.datatype.Duration', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['signum'],'O',['years','java.math.BigInteger','+months','+days','+hours','+minutes','seconds','java.math.BigDecimal']]
,['O',['FIELDS','javax.xml.datatype.DatatypeConstants.Field[]','ZERO','java.math.BigDecimal','TEST_POINTS','javax.xml.datatype.XMLGregorianCalendar[]','FACTORS','java.math.BigDecimal[]']]]

Clazz.newMeth(C$, 'getSign$',  function () {
return this.signum;
});

Clazz.newMeth(C$, 'calcSignum$Z',  function (isPositive) {
if ((this.years == null  || this.years.signum$() == 0 ) && (this.months == null  || this.months.signum$() == 0 ) && (this.days == null  || this.days.signum$() == 0 ) && (this.hours == null  || this.hours.signum$() == 0 ) && (this.minutes == null  || this.minutes.signum$() == 0 ) && (this.seconds == null  || this.seconds.signum$() == 0 )  ) {
return 0;
}if (isPositive) {
return 1;
} else {
return -1;
}}, p$1);

Clazz.newMeth(C$, 'c$$Z$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigDecimal',  function (isPositive, years, months, days, hours, minutes, seconds) {
Clazz.super_(C$, this);
this.years=years;
this.months=months;
this.days=days;
this.hours=hours;
this.minutes=minutes;
this.seconds=seconds;
this.signum=p$1.calcSignum$Z.apply(this, [isPositive]);
if (years == null  && months == null   && days == null   && hours == null   && minutes == null   && seconds == null  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Date fields are all null"]);
}C$.testNonNegative$java_math_BigInteger$javax_xml_datatype_DatatypeConstants_Field(years, $I$(2).YEARS);
C$.testNonNegative$java_math_BigInteger$javax_xml_datatype_DatatypeConstants_Field(months, $I$(2).MONTHS);
C$.testNonNegative$java_math_BigInteger$javax_xml_datatype_DatatypeConstants_Field(days, $I$(2).DAYS);
C$.testNonNegative$java_math_BigInteger$javax_xml_datatype_DatatypeConstants_Field(hours, $I$(2).HOURS);
C$.testNonNegative$java_math_BigInteger$javax_xml_datatype_DatatypeConstants_Field(minutes, $I$(2).MINUTES);
C$.testNonNegative$java_math_BigDecimal$javax_xml_datatype_DatatypeConstants_Field(seconds, $I$(2).SECONDS);
}, 1);

Clazz.newMeth(C$, 'testNonNegative$java_math_BigInteger$javax_xml_datatype_DatatypeConstants_Field',  function (n, f) {
if (n != null  && n.signum$() < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Date field is negative:" + f.toString()]);
}}, 1);

Clazz.newMeth(C$, 'testNonNegative$java_math_BigDecimal$javax_xml_datatype_DatatypeConstants_Field',  function (n, f) {
if (n != null  && n.signum$() < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Date field is negative:" + f.toString()]);
}}, 1);

Clazz.newMeth(C$, 'c$$Z$I$I$I$I$I$I',  function (isPositive, years, months, days, hours, minutes, seconds) {
C$.c$$Z$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigDecimal.apply(this, [isPositive, C$.wrap$I(years), C$.wrap$I(months), C$.wrap$I(days), C$.wrap$I(hours), C$.wrap$I(minutes), seconds != 0 ? $I$(3).valueOf$J(seconds) : null]);
}, 1);

Clazz.newMeth(C$, 'wrap$I',  function (i) {
if (i == -2147483648) {
return null;
}return $I$(6).valueOf$J(i);
}, 1);

Clazz.newMeth(C$, 'c$$J',  function (durationInMilliSeconds) {
Clazz.super_(C$, this);
var is0x8000000000000000L=false;
var l=durationInMilliSeconds;
if (Long.$gt(l,0 )) {
this.signum=1;
} else if (Long.$lt(l,0 )) {
this.signum=-1;
if (Long.$eq(l,[0,549755813888,-1] )) {
(l=Long.$inc(l,1));
is0x8000000000000000L=true;
}(l=Long.$mul(l,(-1)));
} else {
this.signum=0;
}this.years=null;
this.months=null;
this.seconds=$I$(3,"valueOf$J$I",[Long.$add((Long.$mod(l,60000)),(is0x8000000000000000L ? 1 : 0)), 3]);
(l=Long.$div(l,(60000)));
this.minutes=(Long.$eq(l,0 )) ? null : $I$(6,"valueOf$J",[Long.$mod(l,60)]);
(l=Long.$div(l,(60)));
this.hours=(Long.$eq(l,0 )) ? null : $I$(6,"valueOf$J",[Long.$mod(l,24)]);
(l=Long.$div(l,(24)));
this.days=(Long.$eq(l,0 )) ? null : $I$(6).valueOf$J(l);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (lexicalRepresentation) {
Clazz.super_(C$, this);
var s=lexicalRepresentation;
var positive;
var idx=Clazz.array(Integer.TYPE, [1]);
var length=s.length$();
var timeRequired=false;
if (lexicalRepresentation == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}idx[0]=0;
if (length != idx[0] && s.charAt$I(idx[0]) == "-" ) {
++idx[0];
positive=false;
} else {
positive=true;
}if (length != idx[0] && s.charAt$I(idx[0]++) != "P" ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[s]);
}var dateLen=0;
var dateParts=Clazz.array(String, [3]);
var datePartsIndex=Clazz.array(Integer.TYPE, [3]);
while (length != idx[0] && C$.isDigit$C(s.charAt$I(idx[0]))  && dateLen < 3 ){
datePartsIndex[dateLen]=idx[0];
dateParts[dateLen++]=C$.parsePiece$S$IA(s, idx);
}
if (length != idx[0]) {
if (s.charAt$I(idx[0]++) == "T") {
timeRequired=true;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[s]);
}}var timeLen=0;
var timeParts=Clazz.array(String, [3]);
var timePartsIndex=Clazz.array(Integer.TYPE, [3]);
while (length != idx[0] && C$.isDigitOrPeriod$C(s.charAt$I(idx[0]))  && timeLen < 3 ){
timePartsIndex[timeLen]=idx[0];
timeParts[timeLen++]=C$.parsePiece$S$IA(s, idx);
}
if (timeRequired && timeLen == 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[s]);
}if (length != idx[0]) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[s]);
}if (dateLen == 0 && timeLen == 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[s]);
}C$.organizeParts$S$SA$IA$I$S(s, dateParts, datePartsIndex, dateLen, "YMD");
C$.organizeParts$S$SA$IA$I$S(s, timeParts, timePartsIndex, timeLen, "HMS");
this.years=C$.parseBigInteger$S$S$I(s, dateParts[0], datePartsIndex[0]);
this.months=C$.parseBigInteger$S$S$I(s, dateParts[1], datePartsIndex[1]);
this.days=C$.parseBigInteger$S$S$I(s, dateParts[2], datePartsIndex[2]);
this.hours=C$.parseBigInteger$S$S$I(s, timeParts[0], timePartsIndex[0]);
this.minutes=C$.parseBigInteger$S$S$I(s, timeParts[1], timePartsIndex[1]);
this.seconds=C$.parseBigDecimal$S$S$I(s, timeParts[2], timePartsIndex[2]);
this.signum=p$1.calcSignum$Z.apply(this, [positive]);
}, 1);

Clazz.newMeth(C$, 'isDigit$C',  function (ch) {
return "0" <= ch && ch <= "9" ;
}, 1);

Clazz.newMeth(C$, 'isDigitOrPeriod$C',  function (ch) {
return C$.isDigit$C(ch) || ch == "." ;
}, 1);

Clazz.newMeth(C$, 'parsePiece$S$IA',  function (whole, idx) {
var start=idx[0];
while (idx[0] < whole.length$() && C$.isDigitOrPeriod$C(whole.charAt$I(idx[0])) ){
++idx[0];
}
if (idx[0] == whole.length$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[whole]);
}++idx[0];
return whole.substring$I$I(start, idx[0]);
}, 1);

Clazz.newMeth(C$, 'organizeParts$S$SA$IA$I$S',  function (whole, parts, partsIndex, len, tokens) {
var idx=tokens.length$();
for (var i=len - 1; i >= 0; i--) {
if (parts[i] == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[whole]);
}var nidx=tokens.lastIndexOf$I$I(parts[i].charAt$I(parts[i].length$() - 1), idx - 1);
if (nidx == -1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[whole]);
}for (var j=nidx + 1; j < idx; j++) {
parts[j]=null;
}
idx=nidx;
parts[idx]=parts[i];
partsIndex[idx]=partsIndex[i];
}
for (idx--; idx >= 0; idx--) {
parts[idx]=null;
}
}, 1);

Clazz.newMeth(C$, 'parseBigInteger$S$S$I',  function (whole, part, index) {
if (part == null ) {
return null;
}part=part.substring$I$I(0, part.length$() - 1);
return Clazz.new_($I$(6,1).c$$S,[part]);
}, 1);

Clazz.newMeth(C$, 'parseBigDecimal$S$S$I',  function (whole, part, index) {
if (part == null ) {
return null;
}part=part.substring$I$I(0, part.length$() - 1);
return Clazz.new_($I$(3,1).c$$S,[part]);
}, 1);

Clazz.newMeth(C$, 'compare$javax_xml_datatype_Duration',  function (rhs) {
var maxintAsBigInteger=$I$(6).valueOf$J(2147483647);
if (this.years != null  && this.years.compareTo$java_math_BigInteger(maxintAsBigInteger) == 1 ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,[this.getClass$().getName$() + "#compare(Duration duration)" + " years too large to be supported by this implementation " + this.years.toString() ]);
}if (this.months != null  && this.months.compareTo$java_math_BigInteger(maxintAsBigInteger) == 1 ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,[this.getClass$().getName$() + "#compare(Duration duration)" + " months too large to be supported by this implementation " + this.months.toString() ]);
}if (this.days != null  && this.days.compareTo$java_math_BigInteger(maxintAsBigInteger) == 1 ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,[this.getClass$().getName$() + "#compare(Duration duration)" + " days too large to be supported by this implementation " + this.days.toString() ]);
}if (this.hours != null  && this.hours.compareTo$java_math_BigInteger(maxintAsBigInteger) == 1 ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,[this.getClass$().getName$() + "#compare(Duration duration)" + " hours too large to be supported by this implementation " + this.hours.toString() ]);
}if (this.minutes != null  && this.minutes.compareTo$java_math_BigInteger(maxintAsBigInteger) == 1 ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,[this.getClass$().getName$() + "#compare(Duration duration)" + " minutes too large to be supported by this implementation " + this.minutes.toString() ]);
}if (this.seconds != null  && this.seconds.toBigInteger$().compareTo$java_math_BigInteger(maxintAsBigInteger) == 1 ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,[this.getClass$().getName$() + "#compare(Duration duration)" + " seconds too large to be supported by this implementation " + this.seconds.toString() ]);
}var rhsYears=rhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).YEARS);
if (rhsYears != null  && rhsYears.compareTo$java_math_BigInteger(maxintAsBigInteger) == 1 ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,[this.getClass$().getName$() + "#compare(Duration duration)" + " years too large to be supported by this implementation " + rhsYears.toString() ]);
}var rhsMonths=rhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).MONTHS);
if (rhsMonths != null  && rhsMonths.compareTo$java_math_BigInteger(maxintAsBigInteger) == 1 ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,[this.getClass$().getName$() + "#compare(Duration duration)" + " months too large to be supported by this implementation " + rhsMonths.toString() ]);
}var rhsDays=rhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).DAYS);
if (rhsDays != null  && rhsDays.compareTo$java_math_BigInteger(maxintAsBigInteger) == 1 ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,[this.getClass$().getName$() + "#compare(Duration duration)" + " days too large to be supported by this implementation " + rhsDays.toString() ]);
}var rhsHours=rhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).HOURS);
if (rhsHours != null  && rhsHours.compareTo$java_math_BigInteger(maxintAsBigInteger) == 1 ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,[this.getClass$().getName$() + "#compare(Duration duration)" + " hours too large to be supported by this implementation " + rhsHours.toString() ]);
}var rhsMinutes=rhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).MINUTES);
if (rhsMinutes != null  && rhsMinutes.compareTo$java_math_BigInteger(maxintAsBigInteger) == 1 ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,[this.getClass$().getName$() + "#compare(Duration duration)" + " minutes too large to be supported by this implementation " + rhsMinutes.toString() ]);
}var rhsSecondsAsBigDecimal=rhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).SECONDS);
var rhsSeconds=null;
if (rhsSecondsAsBigDecimal != null ) {
rhsSeconds=rhsSecondsAsBigDecimal.toBigInteger$();
}if (rhsSeconds != null  && rhsSeconds.compareTo$java_math_BigInteger(maxintAsBigInteger) == 1 ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,[this.getClass$().getName$() + "#compare(Duration duration)" + " seconds too large to be supported by this implementation " + rhsSeconds.toString() ]);
}var lhsCalendar=Clazz.new_($I$(7,1).c$$I$I$I$I$I$I,[1970, 1, 1, 0, 0, 0]);
lhsCalendar.add$I$I(1, this.getYears$() * this.getSign$());
lhsCalendar.add$I$I(2, this.getMonths$() * this.getSign$());
lhsCalendar.add$I$I(6, this.getDays$() * this.getSign$());
lhsCalendar.add$I$I(11, this.getHours$() * this.getSign$());
lhsCalendar.add$I$I(12, this.getMinutes$() * this.getSign$());
lhsCalendar.add$I$I(13, this.getSeconds$() * this.getSign$());
var rhsCalendar=Clazz.new_($I$(7,1).c$$I$I$I$I$I$I,[1970, 1, 1, 0, 0, 0]);
rhsCalendar.add$I$I(1, rhs.getYears$() * rhs.getSign$());
rhsCalendar.add$I$I(2, rhs.getMonths$() * rhs.getSign$());
rhsCalendar.add$I$I(6, rhs.getDays$() * rhs.getSign$());
rhsCalendar.add$I$I(11, rhs.getHours$() * rhs.getSign$());
rhsCalendar.add$I$I(12, rhs.getMinutes$() * rhs.getSign$());
rhsCalendar.add$I$I(13, rhs.getSeconds$() * rhs.getSign$());
if (lhsCalendar.equals$O(rhsCalendar)) {
return 0;
}return p$1.compareDates$javax_xml_datatype_Duration$javax_xml_datatype_Duration.apply(this, [this, rhs]);
});

Clazz.newMeth(C$, 'compareDates$javax_xml_datatype_Duration$javax_xml_datatype_Duration',  function (duration1, duration2) {
var resultA=2;
var resultB=2;
var tempA=C$.TEST_POINTS[0].clone$();
var tempB=C$.TEST_POINTS[0].clone$();
tempA.add$javax_xml_datatype_Duration(duration1);
tempB.add$javax_xml_datatype_Duration(duration2);
resultA=tempA.compare$javax_xml_datatype_XMLGregorianCalendar(tempB);
if (resultA == 2) {
return 2;
}tempA=C$.TEST_POINTS[1].clone$();
tempB=C$.TEST_POINTS[1].clone$();
tempA.add$javax_xml_datatype_Duration(duration1);
tempB.add$javax_xml_datatype_Duration(duration2);
resultB=tempA.compare$javax_xml_datatype_XMLGregorianCalendar(tempB);
resultA=p$1.compareResults$I$I.apply(this, [resultA, resultB]);
if (resultA == 2) {
return 2;
}tempA=C$.TEST_POINTS[2].clone$();
tempB=C$.TEST_POINTS[2].clone$();
tempA.add$javax_xml_datatype_Duration(duration1);
tempB.add$javax_xml_datatype_Duration(duration2);
resultB=tempA.compare$javax_xml_datatype_XMLGregorianCalendar(tempB);
resultA=p$1.compareResults$I$I.apply(this, [resultA, resultB]);
if (resultA == 2) {
return 2;
}tempA=C$.TEST_POINTS[3].clone$();
tempB=C$.TEST_POINTS[3].clone$();
tempA.add$javax_xml_datatype_Duration(duration1);
tempB.add$javax_xml_datatype_Duration(duration2);
resultB=tempA.compare$javax_xml_datatype_XMLGregorianCalendar(tempB);
resultA=p$1.compareResults$I$I.apply(this, [resultA, resultB]);
return resultA;
}, p$1);

Clazz.newMeth(C$, 'compareResults$I$I',  function (resultA, resultB) {
if (resultB == 2) {
return 2;
} else if (resultA != resultB) {
return 2;
}return resultA;
}, p$1);

Clazz.newMeth(C$, 'hashCode$',  function () {
var cal=C$.TEST_POINTS[0].toGregorianCalendar$();
this.addTo$java_util_Calendar(cal);
return Long.$ival(C$.getCalendarTimeInMillis$java_util_Calendar(cal));
});

Clazz.newMeth(C$, 'toString',  function () {
var buf=Clazz.new_($I$(8,1));
if (this.signum < 0) {
buf.append$C("-");
}buf.append$C("P");
if (this.years != null ) {
buf.append$O(this.years).append$C("Y");
}if (this.months != null ) {
buf.append$O(this.months).append$C("M");
}if (this.days != null ) {
buf.append$O(this.days).append$C("D");
}if (this.hours != null  || this.minutes != null   || this.seconds != null  ) {
buf.append$C("T");
if (this.hours != null ) {
buf.append$O(this.hours).append$C("H");
}if (this.minutes != null ) {
buf.append$O(this.minutes).append$C("M");
}if (this.seconds != null ) {
buf.append$S(p$1.toString$java_math_BigDecimal.apply(this, [this.seconds])).append$C("S");
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
buf=Clazz.new_($I$(8,1).c$$S,[intString]);
buf.insert$I$C(insertionPoint, ".");
} else {
buf=Clazz.new_([3 - insertionPoint + intString.length$()],$I$(8,1).c$$I);
buf.append$S("0.");
for (var i=0; i < -insertionPoint; i++) {
buf.append$C("0");
}
buf.append$S(intString);
}return buf.toString();
}, p$1);

Clazz.newMeth(C$, 'isSet$javax_xml_datatype_DatatypeConstants_Field',  function (field) {
if (field == null ) {
var methodName="javax.xml.datatype.Duration#isSet(DatatypeConstants.Field field)";
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["cannot be called with field == null"]);
}if (field === $I$(2).YEARS ) {
return this.years != null ;
}if (field === $I$(2).MONTHS ) {
return this.months != null ;
}if (field === $I$(2).DAYS ) {
return this.days != null ;
}if (field === $I$(2).HOURS ) {
return this.hours != null ;
}if (field === $I$(2).MINUTES ) {
return this.minutes != null ;
}if (field === $I$(2).SECONDS ) {
return this.seconds != null ;
}var methodName="javax.xml.datatype.Duration#isSet(DatatypeConstants.Field field)";
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["unknown field " + field.toString()]);
});

Clazz.newMeth(C$, 'getField$javax_xml_datatype_DatatypeConstants_Field',  function (field) {
if (field == null ) {
var methodName="javax.xml.datatype.Duration#isSet(DatatypeConstants.Field field) ";
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["cannot be called with field == null"]);
}if (field === $I$(2).YEARS ) {
return this.years;
}if (field === $I$(2).MONTHS ) {
return this.months;
}if (field === $I$(2).DAYS ) {
return this.days;
}if (field === $I$(2).HOURS ) {
return this.hours;
}if (field === $I$(2).MINUTES ) {
return this.minutes;
}if (field === $I$(2).SECONDS ) {
return this.seconds;
}var methodName="javax.xml.datatype.Duration#(getSet(DatatypeConstants.Field field)";
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["unknown field " + field.toString()]);
});

Clazz.newMeth(C$, 'getYears$',  function () {
return p$1.getInt$javax_xml_datatype_DatatypeConstants_Field.apply(this, [$I$(2).YEARS]);
});

Clazz.newMeth(C$, 'getMonths$',  function () {
return p$1.getInt$javax_xml_datatype_DatatypeConstants_Field.apply(this, [$I$(2).MONTHS]);
});

Clazz.newMeth(C$, 'getDays$',  function () {
return p$1.getInt$javax_xml_datatype_DatatypeConstants_Field.apply(this, [$I$(2).DAYS]);
});

Clazz.newMeth(C$, 'getHours$',  function () {
return p$1.getInt$javax_xml_datatype_DatatypeConstants_Field.apply(this, [$I$(2).HOURS]);
});

Clazz.newMeth(C$, 'getMinutes$',  function () {
return p$1.getInt$javax_xml_datatype_DatatypeConstants_Field.apply(this, [$I$(2).MINUTES]);
});

Clazz.newMeth(C$, 'getSeconds$',  function () {
return p$1.getInt$javax_xml_datatype_DatatypeConstants_Field.apply(this, [$I$(2).SECONDS]);
});

Clazz.newMeth(C$, 'getInt$javax_xml_datatype_DatatypeConstants_Field',  function (field) {
var n=this.getField$javax_xml_datatype_DatatypeConstants_Field(field);
if (n == null ) {
return 0;
} else {
return n.intValue$();
}}, p$1);

Clazz.newMeth(C$, 'getTimeInMillis$java_util_Calendar',  function (startInstant) {
var cal=startInstant.clone$();
this.addTo$java_util_Calendar(cal);
return Long.$sub(C$.getCalendarTimeInMillis$java_util_Calendar(cal),C$.getCalendarTimeInMillis$java_util_Calendar(startInstant));
});

Clazz.newMeth(C$, 'getTimeInMillis$java_util_Date',  function (startInstant) {
var cal=Clazz.new_($I$(7,1));
cal.setTime$java_util_Date(startInstant);
this.addTo$java_util_Calendar(cal);
return Long.$sub(C$.getCalendarTimeInMillis$java_util_Calendar(cal),startInstant.getTime$());
});

Clazz.newMeth(C$, 'normalizeWith$java_util_Calendar',  function (startTimeInstant) {
var c=startTimeInstant.clone$();
c.add$I$I(1, this.getYears$() * this.signum);
c.add$I$I(2, this.getMonths$() * this.signum);
c.add$I$I(5, this.getDays$() * this.signum);
var diff=Long.$sub(C$.getCalendarTimeInMillis$java_util_Calendar(c),C$.getCalendarTimeInMillis$java_util_Calendar(startTimeInstant));
var days=Long.$ival((Long.$div(diff,(86400000))));
return Clazz.new_(C$.c$$Z$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigDecimal,[days >= 0, null, null, C$.wrap$I(Math.abs(days)), this.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).HOURS), this.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).MINUTES), this.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).SECONDS)]);
});

Clazz.newMeth(C$, 'multiply$I',  function (factor) {
return this.multiply$java_math_BigDecimal($I$(3).valueOf$J(factor));
});

Clazz.newMeth(C$, 'multiply$java_math_BigDecimal',  function (factor) {
var carry=C$.ZERO;
var factorSign=factor.signum$();
factor=factor.abs$();
var buf=Clazz.array($I$(3), [6]);
for (var i=0; i < 5; i++) {
var bd=p$1.getFieldAsBigDecimal$javax_xml_datatype_DatatypeConstants_Field.apply(this, [C$.FIELDS[i]]);
bd=bd.multiply$java_math_BigDecimal(factor).add$java_math_BigDecimal(carry);
buf[i]=bd.setScale$I$I(0, 1);
bd=bd.subtract$java_math_BigDecimal(buf[i]);
if (i == 1) {
if (bd.signum$() != 0) {
throw Clazz.new_(Clazz.load('IllegalStateException'));
} else {
carry=C$.ZERO;
}} else {
carry=bd.multiply$java_math_BigDecimal(C$.FACTORS[i]);
}}
if (this.seconds != null ) {
buf[5]=this.seconds.multiply$java_math_BigDecimal(factor).add$java_math_BigDecimal(carry);
} else {
buf[5]=carry;
}return Clazz.new_(C$.c$$Z$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigDecimal,[this.signum * factorSign >= 0, C$.toBigInteger$java_math_BigDecimal$Z(buf[0], null == this.years ), C$.toBigInteger$java_math_BigDecimal$Z(buf[1], null == this.months ), C$.toBigInteger$java_math_BigDecimal$Z(buf[2], null == this.days ), C$.toBigInteger$java_math_BigDecimal$Z(buf[3], null == this.hours ), C$.toBigInteger$java_math_BigDecimal$Z(buf[4], null == this.minutes ), (buf[5].signum$() == 0 && this.seconds == null  ) ? null : buf[5]]);
});

Clazz.newMeth(C$, 'getFieldAsBigDecimal$javax_xml_datatype_DatatypeConstants_Field',  function (f) {
if (f === $I$(2).SECONDS ) {
if (this.seconds != null ) {
return this.seconds;
} else {
return C$.ZERO;
}} else {
var bi=this.getField$javax_xml_datatype_DatatypeConstants_Field(f);
if (bi == null ) {
return C$.ZERO;
} else {
return Clazz.new_($I$(3,1).c$$java_math_BigInteger,[bi]);
}}}, p$1);

Clazz.newMeth(C$, 'toBigInteger$java_math_BigDecimal$Z',  function (value, canBeNull) {
if (canBeNull && value.signum$() == 0 ) {
return null;
} else {
return value.unscaledValue$();
}}, 1);

Clazz.newMeth(C$, 'add$javax_xml_datatype_Duration',  function (rhs) {
var lhs=this;
var buf=Clazz.array($I$(3), [6]);
buf[0]=C$.sanitize$java_math_BigInteger$I(lhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).YEARS), lhs.getSign$()).add$java_math_BigDecimal(C$.sanitize$java_math_BigInteger$I(rhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).YEARS), rhs.getSign$()));
buf[1]=C$.sanitize$java_math_BigInteger$I(lhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).MONTHS), lhs.getSign$()).add$java_math_BigDecimal(C$.sanitize$java_math_BigInteger$I(rhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).MONTHS), rhs.getSign$()));
buf[2]=C$.sanitize$java_math_BigInteger$I(lhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).DAYS), lhs.getSign$()).add$java_math_BigDecimal(C$.sanitize$java_math_BigInteger$I(rhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).DAYS), rhs.getSign$()));
buf[3]=C$.sanitize$java_math_BigInteger$I(lhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).HOURS), lhs.getSign$()).add$java_math_BigDecimal(C$.sanitize$java_math_BigInteger$I(rhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).HOURS), rhs.getSign$()));
buf[4]=C$.sanitize$java_math_BigInteger$I(lhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).MINUTES), lhs.getSign$()).add$java_math_BigDecimal(C$.sanitize$java_math_BigInteger$I(rhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).MINUTES), rhs.getSign$()));
buf[5]=C$.sanitize$java_math_BigDecimal$I(lhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).SECONDS), lhs.getSign$()).add$java_math_BigDecimal(C$.sanitize$java_math_BigDecimal$I(rhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).SECONDS), rhs.getSign$()));
C$.alignSigns$java_math_BigDecimalA$I$I(buf, 0, 2);
C$.alignSigns$java_math_BigDecimalA$I$I(buf, 2, 6);
var s=0;
for (var i=0; i < 6; i++) {
if (s * buf[i].signum$() < 0) {
throw Clazz.new_(Clazz.load('IllegalStateException'));
}if (s == 0) {
s=buf[i].signum$();
}}
return Clazz.new_(C$.c$$Z$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigDecimal,[s >= 0, C$.toBigInteger$java_math_BigDecimal$Z(C$.sanitize$java_math_BigDecimal$I(buf[0], s), lhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).YEARS) == null  && rhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).YEARS) == null  ), C$.toBigInteger$java_math_BigDecimal$Z(C$.sanitize$java_math_BigDecimal$I(buf[1], s), lhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).MONTHS) == null  && rhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).MONTHS) == null  ), C$.toBigInteger$java_math_BigDecimal$Z(C$.sanitize$java_math_BigDecimal$I(buf[2], s), lhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).DAYS) == null  && rhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).DAYS) == null  ), C$.toBigInteger$java_math_BigDecimal$Z(C$.sanitize$java_math_BigDecimal$I(buf[3], s), lhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).HOURS) == null  && rhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).HOURS) == null  ), C$.toBigInteger$java_math_BigDecimal$Z(C$.sanitize$java_math_BigDecimal$I(buf[4], s), lhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).MINUTES) == null  && rhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).MINUTES) == null  ), (buf[5].signum$() == 0 && lhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).SECONDS) == null   && rhs.getField$javax_xml_datatype_DatatypeConstants_Field($I$(2).SECONDS) == null  ) ? null : C$.sanitize$java_math_BigDecimal$I(buf[5], s)]);
});

Clazz.newMeth(C$, 'alignSigns$java_math_BigDecimalA$I$I',  function (buf, start, end) {
var touched;
do {
touched=false;
var s=0;
for (var i=start; i < end; i++) {
if (s * buf[i].signum$() < 0) {
touched=true;
var borrow=buf[i].abs$().divide$java_math_BigDecimal$I(C$.FACTORS[i - 1], 0);
if (buf[i].signum$() > 0) {
borrow=borrow.negate$();
}buf[i - 1]=buf[i - 1].subtract$java_math_BigDecimal(borrow);
buf[i]=buf[i].add$java_math_BigDecimal(borrow.multiply$java_math_BigDecimal(C$.FACTORS[i - 1]));
}if (buf[i].signum$() != 0) {
s=buf[i].signum$();
}}
} while (touched);
}, 1);

Clazz.newMeth(C$, 'sanitize$java_math_BigInteger$I',  function (value, signum) {
if (signum == 0 || value == null  ) {
return C$.ZERO;
}if (signum > 0) {
return Clazz.new_($I$(3,1).c$$java_math_BigInteger,[value]);
}return Clazz.new_([value.negate$()],$I$(3,1).c$$java_math_BigInteger);
}, 1);

Clazz.newMeth(C$, 'sanitize$java_math_BigDecimal$I',  function (value, signum) {
if (signum == 0 || value == null  ) {
return C$.ZERO;
}if (signum > 0) {
return value;
}return value.negate$();
}, 1);

Clazz.newMeth(C$, 'subtract$javax_xml_datatype_Duration',  function (rhs) {
return this.add$javax_xml_datatype_Duration(rhs.negate$());
});

Clazz.newMeth(C$, 'negate$',  function () {
return Clazz.new_(C$.c$$Z$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigDecimal,[this.signum <= 0, this.years, this.months, this.days, this.hours, this.minutes, this.seconds]);
});

Clazz.newMeth(C$, 'signum$',  function () {
return this.signum;
});

Clazz.newMeth(C$, 'addTo$java_util_Calendar',  function (calendar) {
calendar.add$I$I(1, this.getYears$() * this.signum);
calendar.add$I$I(2, this.getMonths$() * this.signum);
calendar.add$I$I(5, this.getDays$() * this.signum);
calendar.add$I$I(10, this.getHours$() * this.signum);
calendar.add$I$I(12, this.getMinutes$() * this.signum);
calendar.add$I$I(13, this.getSeconds$() * this.signum);
if (this.seconds != null ) {
var fraction=this.seconds.subtract$java_math_BigDecimal(this.seconds.setScale$I$I(0, 1));
var millisec=fraction.movePointRight$I(3).intValue$();
calendar.add$I$I(14, millisec * this.signum);
}});

Clazz.newMeth(C$, 'addTo$java_util_Date',  function (date) {
var cal=Clazz.new_($I$(7,1));
cal.setTime$java_util_Date(date);
this.addTo$java_util_Calendar(cal);
date.setTime$J(C$.getCalendarTimeInMillis$java_util_Calendar(cal));
});

Clazz.newMeth(C$, 'getCalendarTimeInMillis$java_util_Calendar',  function (cal) {
return cal.getTime$().getTime$();
}, 1);

Clazz.newMeth(C$, 'writeReplace',  function () {
return Clazz.new_([this.toString()],$I$(9,1).c$$S);
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.FIELDS=Clazz.array($I$(1), -1, [$I$(2).YEARS, $I$(2).MONTHS, $I$(2).DAYS, $I$(2).HOURS, $I$(2).MINUTES, $I$(2).SECONDS]);
C$.ZERO=$I$(3).valueOf$J(0);
C$.TEST_POINTS=Clazz.array($I$(4), -1, [$I$(5).parse$S("1696-09-01T00:00:00Z"), $I$(5).parse$S("1697-02-01T00:00:00Z"), $I$(5).parse$S("1903-03-01T00:00:00Z"), $I$(5).parse$S("1903-07-01T00:00:00Z")]);
C$.FACTORS=Clazz.array($I$(3), -1, [$I$(3).valueOf$J(12), null, $I$(3).valueOf$J(24), $I$(3).valueOf$J(60), $I$(3).valueOf$J(60)]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
