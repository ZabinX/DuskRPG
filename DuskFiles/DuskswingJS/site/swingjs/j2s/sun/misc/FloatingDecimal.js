(function(){var P$=Clazz.newPackage("sun.misc"),p$1={},I$=[[0,'sun.misc.FDBigInteger','java.util.Arrays','java.util.regex.Pattern',['sun.misc.FloatingDecimal','.ExceptionalBinaryToASCIIBuffer'],['sun.misc.FloatingDecimal','.BinaryToASCIIBuffer'],'ThreadLocal',['sun.misc.FloatingDecimal','.PreparedASCIIToBinaryBuffer'],['sun.misc.FloatingDecimal','.ASCIIToBinaryBuffer'],['sun.misc.FloatingDecimal','.HexFloatPattern'],'AssertionError']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FloatingDecimal", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['BinaryToASCIIConverter',9],['ExceptionalBinaryToASCIIBuffer',10],['BinaryToASCIIBuffer',8],['ASCIIToBinaryConverter',8],['PreparedASCIIToBinaryBuffer',8],['ASCIIToBinaryBuffer',8],['HexFloatPattern',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['I',['INFINITY_LENGTH','NAN_LENGTH'],'O',['B2AC_POSITIVE_INFINITY','sun.misc.FloatingDecimal.BinaryToASCIIConverter','+B2AC_NEGATIVE_INFINITY','+B2AC_NOT_A_NUMBER','+B2AC_POSITIVE_ZERO','+B2AC_NEGATIVE_ZERO','threadLocalBinaryToASCIIBuffer','ThreadLocal','A2BC_POSITIVE_INFINITY','sun.misc.FloatingDecimal.ASCIIToBinaryConverter','+A2BC_NEGATIVE_INFINITY','+A2BC_NOT_A_NUMBER','+A2BC_POSITIVE_ZERO','+A2BC_NEGATIVE_ZERO']]]

Clazz.newMeth(C$, 'toJavaFormatString$D',  function (d) {
return C$.getBinaryToASCIIConverter$D(d).toJavaFormatString$();
}, 1);

Clazz.newMeth(C$, 'toJavaFormatString$F',  function (f) {
return C$.getBinaryToASCIIConverter$F(f).toJavaFormatString$();
}, 1);

Clazz.newMeth(C$, 'appendTo$D$Appendable',  function (d, buf) {
C$.getBinaryToASCIIConverter$D(d).appendTo$Appendable(buf);
}, 1);

Clazz.newMeth(C$, 'appendTo$F$Appendable',  function (f, buf) {
C$.getBinaryToASCIIConverter$F(f).appendTo$Appendable(buf);
}, 1);

Clazz.newMeth(C$, 'parseDouble$S',  function (s) {
return C$.readJavaFormatString$S(s).doubleValue$();
}, 1);

Clazz.newMeth(C$, 'parseFloat$S',  function (s) {
return C$.readJavaFormatString$S(s).floatValue$();
}, 1);

Clazz.newMeth(C$, 'getBinaryToASCIIBuffer$',  function () {
return C$.threadLocalBinaryToASCIIBuffer.get$();
}, 1);

Clazz.newMeth(C$, 'getBinaryToASCIIConverter$D',  function (d) {
return C$.getBinaryToASCIIConverter$D$Z(d, true);
}, 1);

Clazz.newMeth(C$, 'getBinaryToASCIIConverter$D$Z',  function (d, isCompatibleFormat) {
var dBits=Double.doubleToRawLongBits$D(d);
var isNegative=Long.$ne((Long.$and(dBits,[0,549755813888,-1])),0 );
var fractBits=Long.$and(dBits,4503599627370495);
var binExp=Long.$ival((Long.$sr((Long.$and(dBits,[0,549487378432,1])),52)));
if (binExp == 2047) {
if (Long.$eq(fractBits,0 )) {
return isNegative ? C$.B2AC_NEGATIVE_INFINITY : C$.B2AC_POSITIVE_INFINITY;
} else {
return C$.B2AC_NOT_A_NUMBER;
}}var nSignificantBits;
if (binExp == 0) {
if (Long.$eq(fractBits,0 )) {
return isNegative ? C$.B2AC_NEGATIVE_ZERO : C$.B2AC_POSITIVE_ZERO;
}var leadingZeros=Long.numberOfLeadingZeros$J(fractBits);
var shift=leadingZeros - (11);
(fractBits=Long.$sl(fractBits,(shift)));
binExp=1 - shift;
nSignificantBits=64 - leadingZeros;
} else {
(fractBits=Long.$or(fractBits,(4503599627370496)));
nSignificantBits=53;
}binExp-=1023;
var buf=C$.getBinaryToASCIIBuffer$();
p$1.setSign$Z.apply(buf, [isNegative]);
p$1.dtoa$I$J$I$Z.apply(buf, [binExp, fractBits, nSignificantBits, isCompatibleFormat]);
return buf;
}, 1);

Clazz.newMeth(C$, 'getBinaryToASCIIConverter$F',  function (f) {
var fBits=Float.floatToRawIntBits$F(f);
var isNegative=(fBits & -2147483648) != 0;
var fractBits=fBits & 8388607;
var binExp=(fBits & 2139095040) >> 23;
if (binExp == (255)) {
if (Long.$eq(fractBits,0 )) {
return isNegative ? C$.B2AC_NEGATIVE_INFINITY : C$.B2AC_POSITIVE_INFINITY;
} else {
return C$.B2AC_NOT_A_NUMBER;
}}var nSignificantBits;
if (binExp == 0) {
if (fractBits == 0) {
return isNegative ? C$.B2AC_NEGATIVE_ZERO : C$.B2AC_POSITIVE_ZERO;
}var leadingZeros=Integer.numberOfLeadingZeros$I(fractBits);
var shift=leadingZeros - (8);
fractBits<<=shift;
binExp=1 - shift;
nSignificantBits=32 - leadingZeros;
} else {
fractBits|=8388608;
nSignificantBits=24;
}binExp-=127;
var buf=C$.getBinaryToASCIIBuffer$();
p$1.setSign$Z.apply(buf, [isNegative]);
p$1.dtoa$I$J$I$Z.apply(buf, [binExp, Long.$sl((fractBits),(29)), nSignificantBits, true]);
return buf;
}, 1);

Clazz.newMeth(C$, 'readJavaFormatString$S',  function ($in) {
var isNegative=false;
var signSeen=false;
var decExp;
var c;
 parseNumber : try {
$in=$in.trim$();
var len=$in.length$();
if (len == 0) {
throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["empty String"]);
}var i=0;
switch (($in.charCodeAt$I(i))) {
case 45:
isNegative=true;
case 43:
++i;
signSeen=true;
}
c=$in.charAt$I(i);
if (c == "N") {
if ((len - i) == C$.NAN_LENGTH && $in.indexOf$S$I("NaN", i) == i ) {
return C$.A2BC_NOT_A_NUMBER;
}break parseNumber;
} else if (c == "I") {
if ((len - i) == C$.INFINITY_LENGTH && $in.indexOf$S$I("Infinity", i) == i ) {
return isNegative ? C$.A2BC_NEGATIVE_INFINITY : C$.A2BC_POSITIVE_INFINITY;
}break parseNumber;
} else if (c == "0") {
if (len > i + 1) {
var ch=$in.charAt$I(i + 1);
if (ch == "x" || ch == "X" ) {
return C$.parseHexString$S($in);
}}}var digits=Clazz.array(Character.TYPE, [len]);
var nDigits=0;
var decSeen=false;
var decPt=0;
var nLeadZero=0;
var nTrailZero=0;
 skipLeadingZerosLoop : while (i < len){
c=$in.charAt$I(i);
if (c == "0") {
++nLeadZero;
} else if (c == ".") {
if (decSeen) {
throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["multiple points"]);
}decPt=i;
if (signSeen) {
decPt-=1;
}decSeen=true;
} else {
break skipLeadingZerosLoop;
}++i;
}
 digitLoop : while (i < len){
c=$in.charAt$I(i);
if (c >= "1" && c <= "9" ) {
digits[nDigits++]=c;
nTrailZero=0;
} else if (c == "0") {
digits[nDigits++]=c;
++nTrailZero;
} else if (c == ".") {
if (decSeen) {
throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["multiple points"]);
}decPt=i;
if (signSeen) {
decPt-=1;
}decSeen=true;
} else {
break digitLoop;
}++i;
}
nDigits-=nTrailZero;
var isZero=(nDigits == 0);
if (isZero && nLeadZero == 0 ) {
break parseNumber;
}if (decSeen) {
decExp=decPt - nLeadZero;
} else {
decExp=nDigits + nTrailZero;
}if ((i < len) && (((c=$in.charAt$I(i)) == "e") || (c == "E") ) ) {
var expSign=1;
var expVal=0;
var reallyBig=214748364;
var expOverflow=false;
switch (($in.charCodeAt$I(++i))) {
case 45:
expSign=-1;
case 43:
++i;
}
var expAt=i;
 expLoop : while (i < len){
if (expVal >= reallyBig) {
expOverflow=true;
}c=$in.charAt$I(i++);
if (c >= "0" && c <= "9" ) {
expVal=expVal * 10 + (c.$c() - 48);
} else {
--i;
break expLoop;
}}
var expLimit=324 + nDigits + nTrailZero ;
if (expOverflow || (expVal > expLimit) ) {
decExp=expSign * expLimit;
} else {
decExp=decExp + expSign * expVal;
}if (i == expAt) {
break parseNumber;
}}if (i < len && ((i != len - 1) || ($in.charAt$I(i) != "f" && $in.charAt$I(i) != "F"  && $in.charAt$I(i) != "d"  && $in.charAt$I(i) != "D" ) ) ) {
break parseNumber;
}if (isZero) {
return isNegative ? C$.A2BC_NEGATIVE_ZERO : C$.A2BC_POSITIVE_ZERO;
}return Clazz.new_($I$(8,1).c$$Z$I$CA$I,[isNegative, decExp, digits, nDigits]);
} catch (e) {
if (Clazz.exceptionOf(e,"StringIndexOutOfBoundsException")){
} else {
throw e;
}
}
throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["For input string: \"" + $in + "\"" ]);
}, 1);

Clazz.newMeth(C$, 'parseHexString$S',  function (s) {
var m=$I$(9).VALUE.matcher$CharSequence(s);
var validInput=m.matches$();
if (!validInput) {
throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["For input string: \"" + s + "\"" ]);
} else {
var group1=m.group$I(1);
var isNegative=((group1 != null ) && group1.equals$O("-") );
var significandString=null;
var signifLength=0;
var exponentAdjust=0;
{
var leftDigits=0;
var rightDigits=0;
var group4;
if ((group4=m.group$I(4)) != null ) {
significandString=C$.stripLeadingZeros$S(group4);
leftDigits=significandString.length$();
} else {
var group6=C$.stripLeadingZeros$S(m.group$I(6));
leftDigits=group6.length$();
var group7=m.group$I(7);
rightDigits=group7.length$();
significandString=((group6 == null ) ? "" : group6) + group7;
}significandString=C$.stripLeadingZeros$S(significandString);
signifLength=significandString.length$();
if (leftDigits >= 1) {
exponentAdjust=4 * (leftDigits - 1);
} else {
exponentAdjust=-4 * (rightDigits - signifLength + 1);
}if (signifLength == 0) {
return isNegative ? C$.A2BC_NEGATIVE_ZERO : C$.A2BC_POSITIVE_ZERO;
}}var group8=m.group$I(8);
var positiveExponent=(group8 == null ) || group8.equals$O("+") ;
var unsignedRawExponent;
try {
unsignedRawExponent=Integer.parseInt$S(m.group$I(9));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
return isNegative ? (positiveExponent ? C$.A2BC_NEGATIVE_INFINITY : C$.A2BC_NEGATIVE_ZERO) : (positiveExponent ? C$.A2BC_POSITIVE_INFINITY : C$.A2BC_POSITIVE_ZERO);
} else {
throw e;
}
}
var rawExponent=Long.$mul((positiveExponent ? 1 : (Long.$neg(1))),unsignedRawExponent);
var exponent=Long.$add(rawExponent,exponentAdjust);
var round=false;
var sticky=false;
var nextShift=0;
var significand=0;
var leadingDigit=C$.getHexDigit$S$I(significandString, 0);
if (Long.$eq(leadingDigit,1 )) {
(significand=Long.$or(significand,(Long.$sl(leadingDigit,52))));
nextShift=48;
} else if (Long.$le(leadingDigit,3 )) {
(significand=Long.$or(significand,(Long.$sl(leadingDigit,51))));
nextShift=47;
(exponent=Long.$add(exponent,(1)));
} else if (Long.$le(leadingDigit,7 )) {
(significand=Long.$or(significand,(Long.$sl(leadingDigit,50))));
nextShift=46;
(exponent=Long.$add(exponent,(2)));
} else if (Long.$le(leadingDigit,15 )) {
(significand=Long.$or(significand,(Long.$sl(leadingDigit,49))));
nextShift=45;
(exponent=Long.$add(exponent,(3)));
} else {
throw Clazz.new_($I$(10,1).c$$O,["Result from digit conversion too large!"]);
}var i=0;
for (i=1; i < signifLength && nextShift >= 0 ; i++) {
var currentDigit=C$.getHexDigit$S$I(significandString, i);
(significand=Long.$or(significand,((Long.$sl(currentDigit,nextShift)))));
nextShift-=4;
}
if (i < signifLength) {
var currentDigit=C$.getHexDigit$S$I(significandString, i);
switch (nextShift) {
case -1:
(significand=Long.$or(significand,((Long.$sr((Long.$and(currentDigit,14)),1)))));
round=Long.$ne((Long.$and(currentDigit,1)),0 );
break;
case -2:
(significand=Long.$or(significand,((Long.$sr((Long.$and(currentDigit,12)),2)))));
round=Long.$ne((Long.$and(currentDigit,2)),0 );
sticky=Long.$ne((Long.$and(currentDigit,1)),0 );
break;
case -3:
(significand=Long.$or(significand,((Long.$sr((Long.$and(currentDigit,8)),3)))));
round=Long.$ne((Long.$and(currentDigit,4)),0 );
sticky=Long.$ne((Long.$and(currentDigit,3)),0 );
break;
case -4:
round=(Long.$ne((Long.$and(currentDigit,8)),0 ));
sticky=Long.$ne((Long.$and(currentDigit,7)),0 );
break;
default:
throw Clazz.new_($I$(10,1).c$$O,["Unexpected shift distance remainder."]);
}
++i;
while (i < signifLength && !sticky ){
currentDigit=C$.getHexDigit$S$I(significandString, i);
sticky=sticky || (Long.$ne(currentDigit,0 )) ;
++i;
}
}var floatBits=isNegative ? -2147483648 : 0;
if (Long.$ge(exponent,-126 )) {
if (Long.$gt(exponent,127 )) {
floatBits|=2139095040;
} else {
var threshShift=28;
var floatSticky=Long.$ne((Long.$and(significand,(Long.$sub((Long.$sl(1,threshShift)),1)))),0 ) || round  || sticky ;
var iValue=Long.$ival((Long.$usr(significand,threshShift)));
if ((iValue & 3) != 1 || floatSticky ) {
++iValue;
}floatBits|=((((Long.$ival(exponent)) + (126))) << 23) + (iValue >> 1);
}} else {
if (Long.$lt(exponent,-150 )) {
} else {
var threshShift=Long.$ival((Long.$sub((-98),exponent)));
Clazz.assert(C$, this, function(){return threshShift >= 29});
Clazz.assert(C$, this, function(){return threshShift < 53});
var floatSticky=Long.$ne((Long.$and(significand,(Long.$sub((Long.$sl(1,threshShift)),1)))),0 ) || round  || sticky ;
var iValue=Long.$ival((Long.$usr(significand,threshShift)));
if ((iValue & 3) != 1 || floatSticky ) {
++iValue;
}floatBits|=iValue >> 1;
}}var fValue=Float.intBitsToFloat$I(floatBits);
if (Long.$gt(exponent,1023 )) {
return isNegative ? C$.A2BC_NEGATIVE_INFINITY : C$.A2BC_POSITIVE_INFINITY;
} else {
if (Long.$le(exponent,1023 ) && Long.$ge(exponent,-1022 ) ) {
significand=Long.$or((Long.$and((Long.$sl((Long.$add(exponent,1023)),(52))),[0,549487378432,1])),(Long.$and(4503599627370495,significand)));
} else {
if (Long.$lt(exponent,(-1075) )) {
return isNegative ? C$.A2BC_NEGATIVE_ZERO : C$.A2BC_POSITIVE_ZERO;
} else {
sticky=sticky || round ;
round=false;
var bitsDiscarded=53 - (Long.$ival(exponent) - -1074 + 1);
Clazz.assert(C$, this, function(){return bitsDiscarded >= 1 && bitsDiscarded <= 53 });
round=Long.$ne((Long.$and(significand,(Long.$sl(1,(bitsDiscarded - 1))))),0 );
if (bitsDiscarded > 1) {
var mask=(Long.$not((Long.$sl(((Long.$not(0))),(bitsDiscarded - 1)))));
sticky=sticky || (Long.$ne((Long.$and(significand,mask)),0 )) ;
}significand=Long.$sr(significand,bitsDiscarded);
significand=Long.$or((0),(Long.$and(4503599627370495,significand)));
}}var leastZero=(Long.$eq((Long.$and(significand,1)),0 ));
if ((leastZero && round && sticky  ) || ((!leastZero) && round ) ) {
(significand=Long.$inc(significand,1));
}var value=isNegative ? Double.longBitsToDouble$J(Long.$or(significand,[0,549755813888,-1])) : Double.longBitsToDouble$J(significand);
return Clazz.new_($I$(7,1).c$$D$F,[value, fValue]);
}}}, 1);

Clazz.newMeth(C$, 'stripLeadingZeros$S',  function (s) {
if (!s.isEmpty$() && s.charAt$I(0) == "0" ) {
for (var i=1; i < s.length$(); i++) {
if (s.charAt$I(i) != "0") {
return s.substring$I(i);
}}
return "";
}return s;
}, 1);

Clazz.newMeth(C$, 'getHexDigit$S$I',  function (s, position) {
var value=Character.digit$C$I(s.charAt$I(position), 16);
if (value <= -1 || value >= 16 ) {
throw Clazz.new_(["Unexpected failure of digit conversion of " + s.charAt$I(position)],$I$(10,1).c$$O);
}return value;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.INFINITY_LENGTH="Infinity".length$();
C$.NAN_LENGTH="NaN".length$();
C$.B2AC_POSITIVE_INFINITY=Clazz.new_($I$(4,1).c$$S$Z,["Infinity", false]);
C$.B2AC_NEGATIVE_INFINITY=Clazz.new_($I$(4,1).c$$S$Z,["-Infinity", true]);
C$.B2AC_NOT_A_NUMBER=Clazz.new_($I$(4,1).c$$S$Z,["NaN", false]);
C$.B2AC_POSITIVE_ZERO=Clazz.new_([false, Clazz.array(Character.TYPE, -1, ["0"])],$I$(5,1).c$$Z$CA);
C$.B2AC_NEGATIVE_ZERO=Clazz.new_([true, Clazz.array(Character.TYPE, -1, ["0"])],$I$(5,1).c$$Z$CA);
C$.threadLocalBinaryToASCIIBuffer=((P$.FloatingDecimal$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "FloatingDecimal$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('ThreadLocal'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'initialValue$',  function () {
return Clazz.new_($I$(5,1));
});
})()
), Clazz.new_($I$(6,1),[this, null],P$.FloatingDecimal$1));
C$.A2BC_POSITIVE_INFINITY=Clazz.new_($I$(7,1).c$$D$F,[Infinity, Infinity]);
C$.A2BC_NEGATIVE_INFINITY=Clazz.new_($I$(7,1).c$$D$F,[-Infinity, -Infinity]);
C$.A2BC_NOT_A_NUMBER=Clazz.new_($I$(7,1).c$$D$F,[NaN, NaN]);
C$.A2BC_POSITIVE_ZERO=Clazz.new_($I$(7,1).c$$D$F,[0.0, 0.0]);
C$.A2BC_NEGATIVE_ZERO=Clazz.new_($I$(7,1).c$$D$F,[-0.0, -0.0]);
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.FloatingDecimal, "BinaryToASCIIConverter", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FloatingDecimal, "ExceptionalBinaryToASCIIBuffer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['sun.misc.FloatingDecimal','sun.misc.FloatingDecimal.BinaryToASCIIConverter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isNegative'],'S',['image']]]

Clazz.newMeth(C$, 'c$$S$Z',  function (image, isNegative) {
;C$.$init$.apply(this);
this.image=image;
this.isNegative=isNegative;
}, 1);

Clazz.newMeth(C$, 'toJavaFormatString$',  function () {
return this.image;
});

Clazz.newMeth(C$, 'appendTo$Appendable',  function (buf) {
if (Clazz.instanceOf(buf, "java.lang.StringBuilder")) {
(buf).append$S(this.image);
} else if (Clazz.instanceOf(buf, "java.lang.StringBuffer")) {
(buf).append$S(this.image);
} else {
Clazz.assert(C$, this, function(){return false});
}});

Clazz.newMeth(C$, 'getDecimalExponent$',  function () {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Exceptional value does not have an exponent"]);
});

Clazz.newMeth(C$, 'getDigits$CA',  function (digits) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Exceptional value does not have digits"]);
});

Clazz.newMeth(C$, 'isNegative$',  function () {
return this.isNegative;
});

Clazz.newMeth(C$, 'isExceptional$',  function () {
return true;
});

Clazz.newMeth(C$, 'digitsRoundedUp$',  function () {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Exceptional value is not rounded"]);
});

Clazz.newMeth(C$, 'decimalDigitsExact$',  function () {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Exceptional value is not exact"]);
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FloatingDecimal, "BinaryToASCIIBuffer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['sun.misc.FloatingDecimal','sun.misc.FloatingDecimal.BinaryToASCIIConverter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.buffer=Clazz.array(Character.TYPE, [26]);
this.exactDecimalConversion=false;
this.decimalDigitsRoundedUp=false;
},1);

C$.$fields$=[['Z',['isNegative','exactDecimalConversion','decimalDigitsRoundedUp'],'I',['decExponent','firstDigitIndex','nDigits'],'O',['digits','char[]','+buffer']]
,['O',['insignificantDigitsNumber','int[]','+N_5_BITS']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.digits=Clazz.array(Character.TYPE, [20]);
}, 1);

Clazz.newMeth(C$, 'c$$Z$CA',  function (isNegative, digits) {
;C$.$init$.apply(this);
this.isNegative=isNegative;
this.decExponent=0;
this.digits=digits;
this.firstDigitIndex=0;
this.nDigits=digits.length;
}, 1);

Clazz.newMeth(C$, 'toJavaFormatString$',  function () {
var len=p$1.getChars$CA.apply(this, [this.buffer]);
return  String.instantialize(this.buffer, 0, len);
});

Clazz.newMeth(C$, 'appendTo$Appendable',  function (buf) {
var len=p$1.getChars$CA.apply(this, [this.buffer]);
if (Clazz.instanceOf(buf, "java.lang.StringBuilder")) {
(buf).append$CA$I$I(this.buffer, 0, len);
} else if (Clazz.instanceOf(buf, "java.lang.StringBuffer")) {
(buf).append$CA$I$I(this.buffer, 0, len);
} else {
Clazz.assert(C$, this, function(){return false});
}});

Clazz.newMeth(C$, 'getDecimalExponent$',  function () {
return this.decExponent;
});

Clazz.newMeth(C$, 'getDigits$CA',  function (digits) {
System.arraycopy$O$I$O$I$I(this.digits, this.firstDigitIndex, digits, 0, this.nDigits);
return this.nDigits;
});

Clazz.newMeth(C$, 'isNegative$',  function () {
return this.isNegative;
});

Clazz.newMeth(C$, 'isExceptional$',  function () {
return false;
});

Clazz.newMeth(C$, 'digitsRoundedUp$',  function () {
return this.decimalDigitsRoundedUp;
});

Clazz.newMeth(C$, 'decimalDigitsExact$',  function () {
return this.exactDecimalConversion;
});

Clazz.newMeth(C$, 'setSign$Z',  function (isNegative) {
this.isNegative=isNegative;
}, p$1);

Clazz.newMeth(C$, 'developLongDigits$I$J$I',  function (decExponent, lvalue, insignificantDigits) {
if (insignificantDigits != 0) {
var pow10=Long.$sl($I$(1).LONG_5_POW[insignificantDigits],insignificantDigits);
var residue=Long.$mod(lvalue,pow10);
(lvalue=Long.$div(lvalue,(pow10)));
decExponent+=insignificantDigits;
if (Long.$ge(residue,(Long.$sr(pow10,1)) )) {
(lvalue=Long.$inc(lvalue,1));
}}var digitno=this.digits.length - 1;
var c;
if (Long.$le(lvalue,2147483647 )) {
Clazz.assert(C$, this, function(){return Long.$gt(lvalue,0 )}, function(){return lvalue});
var ivalue=Long.$ival(lvalue);
c=ivalue % 10;
ivalue=(ivalue/(10)|0);
while (c == 0){
++decExponent;
c=ivalue % 10;
ivalue=(ivalue/(10)|0);
}
while (ivalue != 0){
this.digits[digitno--]=String.fromCharCode((c + 48));
++decExponent;
c=ivalue % 10;
ivalue=(ivalue/(10)|0);
}
this.digits[digitno]=String.fromCharCode((c + 48));
} else {
c=Long.$ival((Long.$mod(lvalue,10)));
(lvalue=Long.$div(lvalue,(10)));
while (c == 0){
++decExponent;
c=Long.$ival((Long.$mod(lvalue,10)));
(lvalue=Long.$div(lvalue,(10)));
}
while (Long.$ne(lvalue,0 )){
this.digits[digitno--]=String.fromCharCode((c + 48));
++decExponent;
c=Long.$ival((Long.$mod(lvalue,10)));
(lvalue=Long.$div(lvalue,(10)));
}
this.digits[digitno]=String.fromCharCode((c + 48));
}this.decExponent=decExponent + 1;
this.firstDigitIndex=digitno;
this.nDigits=this.digits.length - digitno;
}, p$1);

Clazz.newMeth(C$, 'dtoa$I$J$I$Z',  function (binExp, fractBits, nSignificantBits, isCompatibleFormat) {
Clazz.assert(C$, this, function(){return Long.$gt(fractBits,0 )});
Clazz.assert(C$, this, function(){return Long.$ne((Long.$and(fractBits,4503599627370496)),0 )});
var tailZeros=Long.numberOfTrailingZeros$J(fractBits);
var nFractBits=53 - tailZeros;
this.decimalDigitsRoundedUp=false;
this.exactDecimalConversion=false;
var nTinyBits=Math.max(0, nFractBits - binExp - 1 );
if (binExp <= 62 && binExp >= -21 ) {
if ((nTinyBits < $I$(1).LONG_5_POW.length) && ((nFractBits + C$.N_5_BITS[nTinyBits]) < 64) ) {
if (nTinyBits == 0) {
var insignificant;
if (binExp > nSignificantBits) {
insignificant=C$.insignificantDigitsForPow2$I(binExp - nSignificantBits - 1 );
} else {
insignificant=0;
}if (binExp >= 52) {
(fractBits=Long.$sl(fractBits,((binExp - 52))));
} else {
(fractBits=Long.$usr(fractBits,((52 - binExp))));
}p$1.developLongDigits$I$J$I.apply(this, [0, fractBits, insignificant]);
return;
}}}var decExp=C$.estimateDecExp$J$I(fractBits, binExp);
var B2;
var B5;
var S2;
var S5;
var M2;
var M5;
B5=Math.max(0, -decExp);
B2=B5 + nTinyBits + binExp ;
S5=Math.max(0, decExp);
S2=S5 + nTinyBits;
M5=B5;
M2=B2 - nSignificantBits;
(fractBits=Long.$usr(fractBits,(tailZeros)));
B2-=nFractBits - 1;
var common2factor=Math.min(B2, S2);
B2-=common2factor;
S2-=common2factor;
M2-=common2factor;
if (nFractBits == 1) {
M2-=1;
}if (M2 < 0) {
B2-=M2;
S2-=M2;
M2=0;
}var ndigit=0;
var low;
var high;
var lowDigitDifference;
var q;
var Bbits=nFractBits + B2 + ((B5 < C$.N_5_BITS.length) ? C$.N_5_BITS[B5] : (B5 * 3)) ;
var tenSbits=S2 + 1 + (((S5 + 1) < C$.N_5_BITS.length) ? C$.N_5_BITS[(S5 + 1)] : ((S5 + 1) * 3)) ;
if (Bbits < 64 && tenSbits < 64 ) {
if (Bbits < 32 && tenSbits < 32 ) {
var b=(Long.$ival(fractBits) * $I$(1).SMALL_5_POW[B5]) << B2;
var s=$I$(1).SMALL_5_POW[S5] << S2;
var m=$I$(1).SMALL_5_POW[M5] << M2;
var tens=s * 10;
ndigit=0;
q=(b/s|0);
b=10 * (b % s);
m*=10;
low=(b < m);
high=(b + m > tens);
Clazz.assert(C$, this, function(){return q < 10}, function(){return q});
if ((q == 0) && !high ) {
--decExp;
} else {
this.digits[ndigit++]=String.fromCharCode((48 + q));
}if (!isCompatibleFormat || decExp < -3  || decExp >= 8 ) {
high=low=false;
}while (!low && !high ){
q=(b/s|0);
b=10 * (b % s);
m*=10;
Clazz.assert(C$, this, function(){return q < 10}, function(){return q});
if (Long.$gt(m,0 )) {
low=(b < m);
high=(b + m > tens);
} else {
low=true;
high=true;
}this.digits[ndigit++]=String.fromCharCode((48 + q));
}
lowDigitDifference=(b << 1) - tens;
this.exactDecimalConversion=(b == 0);
} else {
var b=Long.$sl((Long.$mul(fractBits,$I$(1).LONG_5_POW[B5])),B2);
var s=Long.$sl($I$(1).LONG_5_POW[S5],S2);
var m=Long.$sl($I$(1).LONG_5_POW[M5],M2);
var tens=Long.$mul(s,10);
ndigit=0;
q=Long.$ival((Long.$div(b,s)));
b=Long.$mul(10,(Long.$mod(b,s)));
(m=Long.$mul(m,(10)));
low=(Long.$lt(b,m ));
high=(Long.$gt(Long.$add(b,m),tens ));
Clazz.assert(C$, this, function(){return q < 10}, function(){return q});
if ((q == 0) && !high ) {
--decExp;
} else {
this.digits[ndigit++]=String.fromCharCode((48 + q));
}if (!isCompatibleFormat || decExp < -3  || decExp >= 8 ) {
high=low=false;
}while (!low && !high ){
q=Long.$ival((Long.$div(b,s)));
b=Long.$mul(10,(Long.$mod(b,s)));
(m=Long.$mul(m,(10)));
Clazz.assert(C$, this, function(){return q < 10}, function(){return q});
if (Long.$gt(m,0 )) {
low=(Long.$lt(b,m ));
high=(Long.$gt(Long.$add(b,m),tens ));
} else {
low=true;
high=true;
}this.digits[ndigit++]=String.fromCharCode((48 + q));
}
lowDigitDifference=Long.$sub((Long.$sl(b,1)),tens);
this.exactDecimalConversion=(Long.$eq(b,0 ));
}} else {
var Sval=$I$(1).valueOfPow52$I$I(S5, S2);
var shiftBias=Sval.getNormalizationBias$();
Sval=Sval.leftShift$I(shiftBias);
var Bval=$I$(1).valueOfMulPow52$J$I$I(fractBits, B5, B2 + shiftBias);
var Mval=$I$(1).valueOfPow52$I$I(M5 + 1, M2 + shiftBias + 1 );
var tenSval=$I$(1).valueOfPow52$I$I(S5 + 1, S2 + shiftBias + 1 );
ndigit=0;
q=Bval.quoRemIteration$sun_misc_FDBigInteger(Sval);
low=(Bval.cmp$sun_misc_FDBigInteger(Mval) < 0);
high=tenSval.addAndCmp$sun_misc_FDBigInteger$sun_misc_FDBigInteger(Bval, Mval) <= 0;
Clazz.assert(C$, this, function(){return q < 10}, function(){return q});
if ((q == 0) && !high ) {
--decExp;
} else {
this.digits[ndigit++]=String.fromCharCode((48 + q));
}if (!isCompatibleFormat || decExp < -3  || decExp >= 8 ) {
high=low=false;
}while (!low && !high ){
q=Bval.quoRemIteration$sun_misc_FDBigInteger(Sval);
Clazz.assert(C$, this, function(){return q < 10}, function(){return q});
Mval=Mval.multBy10$();
low=(Bval.cmp$sun_misc_FDBigInteger(Mval) < 0);
high=tenSval.addAndCmp$sun_misc_FDBigInteger$sun_misc_FDBigInteger(Bval, Mval) <= 0;
this.digits[ndigit++]=String.fromCharCode((48 + q));
}
if (high && low ) {
Bval=Bval.leftShift$I(1);
lowDigitDifference=Bval.cmp$sun_misc_FDBigInteger(tenSval);
} else {
lowDigitDifference=0;
}this.exactDecimalConversion=(Bval.cmp$sun_misc_FDBigInteger($I$(1).ZERO) == 0);
}this.decExponent=decExp + 1;
this.firstDigitIndex=0;
this.nDigits=ndigit;
if (high) {
if (low) {
if (Long.$eq(lowDigitDifference,0 )) {
if (((this.digits[this.firstDigitIndex + this.nDigits - 1]).$c() & 1) != 0) {
p$1.roundup.apply(this, []);
}} else if (Long.$gt(lowDigitDifference,0 )) {
p$1.roundup.apply(this, []);
}} else {
p$1.roundup.apply(this, []);
}}}, p$1);

Clazz.newMeth(C$, 'roundup',  function () {
var i=(this.firstDigitIndex + this.nDigits - 1);
var q=this.digits[i].$c();
if (q == 57 ) {
while (q == 57  && i > this.firstDigitIndex ){
this.digits[i]="0";
q=this.digits[--i].$c();
}
if (q == 57 ) {
this.decExponent+=1;
this.digits[this.firstDigitIndex]="1";
return;
}}this.digits[i]=String.fromCharCode((q + 1));
this.decimalDigitsRoundedUp=true;
}, p$1);

Clazz.newMeth(C$, 'estimateDecExp$J$I',  function (fractBits, binExp) {
var d2=Double.longBitsToDouble$J(Long.$or([0,274609471488,1],(Long.$and(fractBits,4503599627370495))));
var d=(d2 - 1.5) * 0.289529654 + 0.176091259 + binExp * 0.301029995663981;
var dBits=Double.doubleToRawLongBits$D(d);
var exponent=Long.$ival((Long.$sr((Long.$and(dBits,[0,549487378432,1])),52))) - 1023;
var isNegative=Long.$ne((Long.$and(dBits,[0,549755813888,-1])),0 );
if (exponent >= 0 && exponent < 52 ) {
var mask=Long.$sr(4503599627370495,exponent);
var r=Long.$ival((Long.$sr((Long.$or((Long.$and(dBits,4503599627370495)),4503599627370496)),(52 - exponent))));
return isNegative ? ((Long.$eq((Long.$and(mask,dBits)),0 )) ? -r : -r - 1) : r;
} else if (exponent < 0) {
return ((Long.$eq((Long.$and(dBits,(Long.$not([0,549755813888,-1])))),0 )) ? 0 : ((isNegative) ? -1 : 0));
} else {
return (d|0);
}}, 1);

Clazz.newMeth(C$, 'insignificantDigits$I',  function (insignificant) {
var i;
for (i=0; Long.$ge(insignificant,10 ); i++) {
insignificant=Long.$ival(Long.$div(insignificant,(10)));
}
return i;
}, 1);

Clazz.newMeth(C$, 'insignificantDigitsForPow2$I',  function (p2) {
if (p2 > 1 && p2 < C$.insignificantDigitsNumber.length ) {
return C$.insignificantDigitsNumber[p2];
}return 0;
}, 1);

Clazz.newMeth(C$, 'getChars$CA',  function (result) {
Clazz.assert(C$, this, function(){return this.nDigits <= 19}, function(){return this.nDigits});
var i=0;
if (this.isNegative) {
result[0]="-";
i=1;
}if (this.decExponent > 0 && this.decExponent < 8 ) {
var charLength=Math.min(this.nDigits, this.decExponent);
System.arraycopy$O$I$O$I$I(this.digits, this.firstDigitIndex, result, i, charLength);
i+=charLength;
if (charLength < this.decExponent) {
charLength=this.decExponent - charLength;
$I$(2).fill$CA$I$I$C(result, i, i + charLength, "0");
i+=charLength;
result[i++]=".";
result[i++]="0";
} else {
result[i++]=".";
if (charLength < this.nDigits) {
var t=this.nDigits - charLength;
System.arraycopy$O$I$O$I$I(this.digits, this.firstDigitIndex + charLength, result, i, t);
i+=t;
} else {
result[i++]="0";
}}} else if (this.decExponent <= 0 && this.decExponent > -3 ) {
result[i++]="0";
result[i++]=".";
if (this.decExponent != 0) {
$I$(2).fill$CA$I$I$C(result, i, i - this.decExponent, "0");
i-=this.decExponent;
}System.arraycopy$O$I$O$I$I(this.digits, this.firstDigitIndex, result, i, this.nDigits);
i+=this.nDigits;
} else {
result[i++]=this.digits[this.firstDigitIndex];
result[i++]=".";
if (this.nDigits > 1) {
System.arraycopy$O$I$O$I$I(this.digits, this.firstDigitIndex + 1, result, i, this.nDigits - 1);
i+=this.nDigits - 1;
} else {
result[i++]="0";
}result[i++]="E";
var e;
if (this.decExponent <= 0) {
result[i++]="-";
e=-this.decExponent + 1;
} else {
e=this.decExponent - 1;
}if (e <= 9) {
result[i++]=String.fromCharCode((e + 48));
} else if (e <= 99) {
result[i++]=String.fromCharCode(((e/10|0) + 48));
result[i++]=String.fromCharCode((e % 10 + 48));
} else {
result[i++]=String.fromCharCode(((e/100|0) + 48));
e%=100;
result[i++]=String.fromCharCode(((e/10|0) + 48));
result[i++]=String.fromCharCode((e % 10 + 48));
}}return i;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.insignificantDigitsNumber=Clazz.array(Integer.TYPE, -1, [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 15, 16, 16, 16, 17, 17, 17, 18, 18, 18, 19]);
C$.N_5_BITS=Clazz.array(Integer.TYPE, -1, [0, 3, 5, 7, 10, 12, 14, 17, 19, 21, 24, 26, 28, 31, 33, 35, 38, 40, 42, 45, 47, 49, 52, 54, 56, 59, 61]);
};
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.FloatingDecimal, "ASCIIToBinaryConverter", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FloatingDecimal, "PreparedASCIIToBinaryBuffer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['sun.misc.FloatingDecimal','sun.misc.FloatingDecimal.ASCIIToBinaryConverter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['doubleVal'],'F',['floatVal']]]

Clazz.newMeth(C$, 'c$$D$F',  function (doubleVal, floatVal) {
;C$.$init$.apply(this);
this.doubleVal=doubleVal;
this.floatVal=floatVal;
}, 1);

Clazz.newMeth(C$, 'doubleValue$',  function () {
return this.doubleVal;
});

Clazz.newMeth(C$, 'floatValue$',  function () {
return this.floatVal;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FloatingDecimal, "ASCIIToBinaryBuffer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['sun.misc.FloatingDecimal','sun.misc.FloatingDecimal.ASCIIToBinaryConverter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isNegative'],'I',['decExponent','nDigits'],'O',['digits','char[]']]
,['I',['MAX_SMALL_TEN','SINGLE_MAX_SMALL_TEN'],'O',['SMALL_10_POW','double[]','SINGLE_SMALL_10_POW','float[]','BIG_10_POW','double[]','+TINY_10_POW']]]

Clazz.newMeth(C$, 'c$$Z$I$CA$I',  function (negSign, decExponent, digits, n) {
;C$.$init$.apply(this);
this.isNegative=negSign;
this.decExponent=decExponent;
this.digits=digits;
this.nDigits=n;
}, 1);

Clazz.newMeth(C$, 'doubleValue$',  function () {
var kDigits=Math.min(this.nDigits, 16);
var iValue=this.digits[0].$c() - 48;
var iDigits=Math.min(kDigits, 9);
for (var i=1; i < iDigits; i++) {
iValue=iValue * 10 + this.digits[i].$c() - 48;
}
var lValue=iValue;
for (var i=iDigits; i < kDigits; i++) {
lValue=Long.$add(Long.$mul(lValue,10),(this.digits[i].$c() - 48));
}
var dValue=Long.$dval(lValue);
var exp=this.decExponent - kDigits;
if (this.nDigits <= 15) {
if (exp == 0 || dValue == 0.0  ) {
return (this.isNegative) ? -dValue : dValue;
} else if (exp >= 0) {
if (exp <= C$.MAX_SMALL_TEN) {
var rValue=dValue * C$.SMALL_10_POW[exp];
return (this.isNegative) ? -rValue : rValue;
}var slop=15 - kDigits;
if (exp <= C$.MAX_SMALL_TEN + slop) {
dValue*=C$.SMALL_10_POW[slop];
var rValue=dValue * C$.SMALL_10_POW[exp - slop];
return (this.isNegative) ? -rValue : rValue;
}} else {
if (exp >= -C$.MAX_SMALL_TEN) {
var rValue=dValue / C$.SMALL_10_POW[-exp];
return (this.isNegative) ? -rValue : rValue;
}}}if (exp > 0) {
if (this.decExponent > 309) {
return (this.isNegative) ? -Infinity : Infinity;
}if ((exp & 15) != 0) {
dValue*=C$.SMALL_10_POW[exp & 15];
}if ((exp>>=4) != 0) {
var j;
for (j=0; exp > 1; j++, exp>>=1) {
if ((exp & 1) != 0) {
dValue*=C$.BIG_10_POW[j];
}}
var t=dValue * C$.BIG_10_POW[j];
if (Double.isInfinite$D(t)) {
t=dValue / 2.0;
t*=C$.BIG_10_POW[j];
if (Double.isInfinite$D(t)) {
return (this.isNegative) ? -Infinity : Infinity;
}t=1.7976931348623157E308;
}dValue=t;
}} else if (exp < 0) {
exp=-exp;
if (this.decExponent < -325) {
return (this.isNegative) ? -0.0 : 0.0;
}if ((exp & 15) != 0) {
dValue/=C$.SMALL_10_POW[exp & 15];
}if ((exp>>=4) != 0) {
var j;
for (j=0; exp > 1; j++, exp>>=1) {
if ((exp & 1) != 0) {
dValue*=C$.TINY_10_POW[j];
}}
var t=dValue * C$.TINY_10_POW[j];
if (t == 0.0 ) {
t=dValue * 2.0;
t*=C$.TINY_10_POW[j];
if (t == 0.0 ) {
return (this.isNegative) ? -0.0 : 0.0;
}t=4.9E-324;
}dValue=t;
}}if (this.nDigits > 1100) {
this.nDigits=1101;
this.digits[1100]="1";
}var bigD0=Clazz.new_($I$(1,1).c$$J$CA$I$I,[lValue, this.digits, kDigits, this.nDigits]);
exp=this.decExponent - this.nDigits;
var ieeeBits=Double.doubleToRawLongBits$D(dValue);
var B5=Math.max(0, -exp);
var D5=Math.max(0, exp);
bigD0=bigD0.multByPow52$I$I(D5, 0);
bigD0.makeImmutable$();
var bigD=null;
var prevD2=0;
 correctionLoop : while (true){
var binexp=Long.$ival((Long.$usr(ieeeBits,52)));
var bigBbits=Long.$and(ieeeBits,4503599627370495);
if (binexp > 0) {
(bigBbits=Long.$or(bigBbits,(4503599627370496)));
} else {
Clazz.assert(C$, this, function(){return Long.$ne(bigBbits,0 )}, function(){return bigBbits});
var leadingZeros=Long.numberOfLeadingZeros$J(bigBbits);
var shift=leadingZeros - (11);
(bigBbits=Long.$sl(bigBbits,(shift)));
binexp=1 - shift;
}binexp-=1023;
var lowOrderZeros=Long.numberOfTrailingZeros$J(bigBbits);
(bigBbits=Long.$usr(bigBbits,(lowOrderZeros)));
var bigIntExp=binexp - 52 + lowOrderZeros;
var bigIntNBits=53 - lowOrderZeros;
var B2=B5;
var D2=D5;
var Ulp2;
if (bigIntExp >= 0) {
B2+=bigIntExp;
} else {
D2-=bigIntExp;
}Ulp2=B2;
var hulpbias;
if (binexp <= -1023) {
hulpbias=binexp + lowOrderZeros + 1023 ;
} else {
hulpbias=1 + lowOrderZeros;
}B2+=hulpbias;
D2+=hulpbias;
var common2=Math.min(B2, Math.min(D2, Ulp2));
B2-=common2;
D2-=common2;
Ulp2-=common2;
var bigB=$I$(1).valueOfMulPow52$J$I$I(bigBbits, B5, B2);
if (bigD == null  || prevD2 != D2 ) {
bigD=bigD0.leftShift$I(D2);
prevD2=D2;
}var diff;
var cmpResult;
var overvalue;
if ((cmpResult=bigB.cmp$sun_misc_FDBigInteger(bigD)) > 0) {
overvalue=true;
diff=bigB.leftInplaceSub$sun_misc_FDBigInteger(bigD);
if ((bigIntNBits == 1) && (bigIntExp > -1022) ) {
Ulp2-=1;
if (Ulp2 < 0) {
Ulp2=0;
diff=diff.leftShift$I(1);
}}} else if (cmpResult < 0) {
overvalue=false;
diff=bigD.rightInplaceSub$sun_misc_FDBigInteger(bigB);
} else {
break correctionLoop;
}cmpResult=diff.cmpPow52$I$I(B5, Ulp2);
if ((cmpResult) < 0) {
break correctionLoop;
} else if (cmpResult == 0) {
if (Long.$ne((Long.$and(ieeeBits,1)),0 )) {
(ieeeBits=Long.$add(ieeeBits,(overvalue ? -1 : 1)));
}break correctionLoop;
} else {
(ieeeBits=Long.$add(ieeeBits,(overvalue ? -1 : 1)));
if (Long.$eq(ieeeBits,0 ) || Long.$eq(ieeeBits,[0,549487378432,1] ) ) {
break correctionLoop;
}continue;
}}
if (this.isNegative) {
(ieeeBits=Long.$or(ieeeBits,([0,549755813888,-1])));
}return Double.longBitsToDouble$J(ieeeBits);
});

Clazz.newMeth(C$, 'floatValue$',  function () {
var kDigits=Math.min(this.nDigits, 8);
var iValue=this.digits[0].$c() - 48;
for (var i=1; i < kDigits; i++) {
iValue=iValue * 10 + this.digits[i].$c() - 48;
}
var fValue=iValue;
var exp=this.decExponent - kDigits;
if (this.nDigits <= 7) {
if (exp == 0 || fValue == 0.0  ) {
return (this.isNegative) ? -fValue : fValue;
} else if (exp >= 0) {
if (exp <= C$.SINGLE_MAX_SMALL_TEN) {
fValue*=C$.SINGLE_SMALL_10_POW[exp];
return (this.isNegative) ? -fValue : fValue;
}var slop=7 - kDigits;
if (exp <= C$.SINGLE_MAX_SMALL_TEN + slop) {
fValue*=C$.SINGLE_SMALL_10_POW[slop];
fValue*=C$.SINGLE_SMALL_10_POW[exp - slop];
return (this.isNegative) ? -fValue : fValue;
}} else {
if (exp >= -C$.SINGLE_MAX_SMALL_TEN) {
fValue/=C$.SINGLE_SMALL_10_POW[-exp];
return (this.isNegative) ? -fValue : fValue;
}}} else if ((this.decExponent >= this.nDigits) && (this.nDigits + this.decExponent <= 15) ) {
var lValue=iValue;
for (var i=kDigits; i < this.nDigits; i++) {
lValue=Long.$add(Long.$mul(lValue,10),(this.digits[i].$c() - 48));
}
var dValue=Long.$dval(lValue);
exp=this.decExponent - this.nDigits;
dValue*=C$.SMALL_10_POW[exp];
fValue=dValue;
return (this.isNegative) ? -fValue : fValue;
}var dValue=fValue;
if (exp > 0) {
if (this.decExponent > 39) {
return (this.isNegative) ? -Infinity : Infinity;
}if ((exp & 15) != 0) {
dValue*=C$.SMALL_10_POW[exp & 15];
}if ((exp>>=4) != 0) {
var j;
for (j=0; exp > 0; j++, exp>>=1) {
if ((exp & 1) != 0) {
dValue*=C$.BIG_10_POW[j];
}}
}} else if (exp < 0) {
exp=-exp;
if (this.decExponent < -46) {
return (this.isNegative) ? -0.0 : 0.0;
}if ((exp & 15) != 0) {
dValue/=C$.SMALL_10_POW[exp & 15];
}if ((exp>>=4) != 0) {
var j;
for (j=0; exp > 0; j++, exp>>=1) {
if ((exp & 1) != 0) {
dValue*=C$.TINY_10_POW[j];
}}
}}fValue=Math.max(1.4E-45, Math.min(3.4028235E38, dValue));
if (this.nDigits > 200) {
this.nDigits=201;
this.digits[200]="1";
}var bigD0=Clazz.new_($I$(1,1).c$$J$CA$I$I,[iValue, this.digits, kDigits, this.nDigits]);
exp=this.decExponent - this.nDigits;
var ieeeBits=Float.floatToRawIntBits$F(fValue);
var B5=Math.max(0, -exp);
var D5=Math.max(0, exp);
bigD0=bigD0.multByPow52$I$I(D5, 0);
bigD0.makeImmutable$();
var bigD=null;
var prevD2=0;
 correctionLoop : while (true){
var binexp=ieeeBits >>> 23;
var bigBbits=ieeeBits & 8388607;
if (binexp > 0) {
bigBbits|=8388608;
} else {
Clazz.assert(C$, this, function(){return bigBbits != 0}, function(){return bigBbits});
var leadingZeros=Integer.numberOfLeadingZeros$I(bigBbits);
var shift=leadingZeros - (8);
bigBbits<<=shift;
binexp=1 - shift;
}binexp-=127;
var lowOrderZeros=Integer.numberOfTrailingZeros$I(bigBbits);
bigBbits>>>=lowOrderZeros;
var bigIntExp=binexp - 23 + lowOrderZeros;
var bigIntNBits=24 - lowOrderZeros;
var B2=B5;
var D2=D5;
var Ulp2;
if (bigIntExp >= 0) {
B2+=bigIntExp;
} else {
D2-=bigIntExp;
}Ulp2=B2;
var hulpbias;
if (binexp <= -127) {
hulpbias=binexp + lowOrderZeros + 127 ;
} else {
hulpbias=1 + lowOrderZeros;
}B2+=hulpbias;
D2+=hulpbias;
var common2=Math.min(B2, Math.min(D2, Ulp2));
B2-=common2;
D2-=common2;
Ulp2-=common2;
var bigB=$I$(1).valueOfMulPow52$J$I$I(bigBbits, B5, B2);
if (bigD == null  || prevD2 != D2 ) {
bigD=bigD0.leftShift$I(D2);
prevD2=D2;
}var diff;
var cmpResult;
var overvalue;
if ((cmpResult=bigB.cmp$sun_misc_FDBigInteger(bigD)) > 0) {
overvalue=true;
diff=bigB.leftInplaceSub$sun_misc_FDBigInteger(bigD);
if ((bigIntNBits == 1) && (bigIntExp > -126) ) {
Ulp2-=1;
if (Ulp2 < 0) {
Ulp2=0;
diff=diff.leftShift$I(1);
}}} else if (cmpResult < 0) {
overvalue=false;
diff=bigD.rightInplaceSub$sun_misc_FDBigInteger(bigB);
} else {
break correctionLoop;
}cmpResult=diff.cmpPow52$I$I(B5, Ulp2);
if ((cmpResult) < 0) {
break correctionLoop;
} else if (cmpResult == 0) {
if ((ieeeBits & 1) != 0) {
ieeeBits+=overvalue ? -1 : 1;
}break correctionLoop;
} else {
ieeeBits+=overvalue ? -1 : 1;
if (ieeeBits == 0 || ieeeBits == 2139095040 ) {
break correctionLoop;
}continue;
}}
if (this.isNegative) {
ieeeBits|=-2147483648;
}return Float.intBitsToFloat$I(ieeeBits);
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.SMALL_10_POW=Clazz.array(Double.TYPE, -1, [1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, 1.0E7, 1.0E8, 1.0E9, 1.0E10, 1.0E11, 1.0E12, 1.0E13, 1.0E14, 1.0E15, 1.0E16, 1.0E17, 1.0E18, 1.0E19, 1.0E20, 1.0E21, 1.0E22]);
C$.SINGLE_SMALL_10_POW=Clazz.array(Float.TYPE, -1, [1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, 1.0E7, 1.0E8, 1.0E9, 1.0E10]);
C$.BIG_10_POW=Clazz.array(Double.TYPE, -1, [1.0E16, 1.0E32, 1.0E64, 1.0E128, 1.0E256]);
C$.TINY_10_POW=Clazz.array(Double.TYPE, -1, [1.0E-16, 1.0E-32, 1.0E-64, 1.0E-128, 1.0E-256]);
C$.MAX_SMALL_TEN=C$.SMALL_10_POW.length - 1;
C$.SINGLE_MAX_SMALL_TEN=C$.SINGLE_SMALL_10_POW.length - 1;
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FloatingDecimal, "HexFloatPattern", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['VALUE','java.util.regex.Pattern']]]

C$.$static$=function(){C$.$static$=0;
C$.VALUE=$I$(3,"compile$S",["([-+])?0[xX](((\\p{XDigit}+)\\.?)|((\\p{XDigit}*)\\.(\\p{XDigit}+)))[pP]([-+])?(\\p{Digit}+)[fFdD]?"]);
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
