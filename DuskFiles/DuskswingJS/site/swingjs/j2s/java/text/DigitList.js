(function(){var P$=Clazz.newPackage("java.text"),p$1={},I$=[[0,'java.math.RoundingMode','java.math.BigDecimal','InternalError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DigitList", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.decimalAt=0;
this.count=0;
this.digits=Clazz.array(Character.TYPE, [19]);
this.roundingMode=$I$(1).HALF_EVEN;
this.isNegative=false;
},1);

C$.$fields$=[['Z',['isNegative'],'I',['decimalAt','count'],'O',['+digits','+data','roundingMode','java.math.RoundingMode']]
,['O',['LONG_MIN_REP','char[]']]]

Clazz.newMeth(C$, 'isZero$',  function () {
for (var i=0; i < this.count; ++i) {
if (this.digits[i] != "0") {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'setRoundingMode$java_math_RoundingMode',  function (r) {
this.roundingMode=r;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.decimalAt=0;
this.count=0;
});

Clazz.newMeth(C$, 'append$C',  function (digit) {
if (this.count == this.digits.length) {
var data=Clazz.array(Character.TYPE, [this.count + 100]);
System.arraycopy$O$I$O$I$I(this.digits, 0, data, 0, this.count);
this.digits=data;
}this.digits[this.count++]=digit;
});

Clazz.newMeth(C$, 'getDouble$',  function () {
if (this.count == 0) {
return 0.0;
}return Double.parseDouble$S("." + p$1.秘join$CA$I$I.apply(this, [this.digits, 0, this.count]) + "E" + this.decimalAt );
});

Clazz.newMeth(C$, 'getLong$',  function () {
if (this.count == 0) {
return 0;
}if (p$1.isLongMIN_VALUE.apply(this, [])) {
return [0,549755813888,-1];
}var temp="";
temp+=p$1.秘join$CA$I$I.apply(this, [this.digits, 0, this.count]);
for (var i=this.count; i < this.decimalAt; ++i) {
temp+="0";
}
return Long.parseLong$S(temp);
});

Clazz.newMeth(C$, '秘join$CA$I$I',  function (digits, i, count) {
return (digits.slice(i, i + count).join("") ||null);
}, p$1);

Clazz.newMeth(C$, 'getBigDecimal$',  function () {
if (this.count == 0) {
if (this.decimalAt == 0) {
return $I$(2).ZERO;
} else {
return Clazz.new_($I$(2,1).c$$S,["0E" + this.decimalAt]);
}}if (this.decimalAt == this.count) {
return Clazz.new_($I$(2,1).c$$CA$I$I,[this.digits, 0, this.count]);
} else {
return Clazz.new_($I$(2,1).c$$CA$I$I,[this.digits, 0, this.count]).scaleByPowerOfTen$I(this.decimalAt - this.count);
}});

Clazz.newMeth(C$, 'fitsIntoLong$Z$Z',  function (isPositive, ignoreNegativeZero) {
while (this.count > 0 && this.digits[this.count - 1] == "0" ){
--this.count;
}
if (this.count == 0) {
return isPositive || ignoreNegativeZero ;
}if (this.decimalAt < this.count || this.decimalAt > 19 ) {
return false;
}if (this.decimalAt < 19) return true;
for (var i=0; i < this.count; ++i) {
var dig=this.digits[i];
var max=C$.LONG_MIN_REP[i];
if (dig > max) return false;
if (dig < max) return true;
}
if (this.count < this.decimalAt) return true;
return !isPositive;
});

Clazz.newMeth(C$, 'setDouble$Z$D$I',  function (isNegative, source, maximumFractionDigits) {
this.set$Z$D$I$Z(isNegative, source, maximumFractionDigits, true);
});

Clazz.newMeth(C$, 'set$Z$D$I$Z',  function (isNegative, source, maximumDigits, fixedPoint) {
this.set$Z$S$I$Z(isNegative, Double.toString$D(source), maximumDigits, fixedPoint);
});

Clazz.newMeth(C$, 'set$Z$S$I$Z',  function (isNegative, s, maximumDigits, fixedPoint) {
this.isNegative=isNegative;
var len=s.length$();
var source=p$1.getDataChars$I.apply(this, [len]);
s.getChars$I$I$CA$I(0, len, source, 0);
this.decimalAt=-1;
this.count=0;
var exponent=0;
var leadingZerosAfterDecimal=0;
var nonZeroDigitSeen=false;
for (var i=0; i < len; ) {
var c=source[i++];
if (c == ".") {
this.decimalAt=this.count;
} else if (c == "e" || c == "E" ) {
exponent=C$.parseInt$CA$I$I(source, i, len);
break;
} else {
if (!nonZeroDigitSeen) {
nonZeroDigitSeen=(c != "0");
if (!nonZeroDigitSeen && this.decimalAt != -1 ) ++leadingZerosAfterDecimal;
}if (nonZeroDigitSeen) {
this.digits[this.count++]=c;
}}}
if (this.decimalAt == -1) {
this.decimalAt=this.count;
}if (nonZeroDigitSeen) {
this.decimalAt+=exponent - leadingZerosAfterDecimal;
}if (fixedPoint) {
if (-this.decimalAt > maximumDigits) {
this.count=0;
return;
} else if (-this.decimalAt == maximumDigits) {
if (p$1.shouldRoundUp$I.apply(this, [0])) {
this.count=1;
++this.decimalAt;
this.digits[0]="1";
} else {
this.count=0;
}return;
}}while (this.count > 1 && this.digits[this.count - 1] == "0" ){
--this.count;
}
p$1.round$I.apply(this, [fixedPoint ? (maximumDigits + this.decimalAt) : maximumDigits]);
});

Clazz.newMeth(C$, 'round$I',  function (maximumDigits) {
if (maximumDigits >= 0 && maximumDigits < this.count ) {
if (p$1.shouldRoundUp$I.apply(this, [maximumDigits])) {
for (; ; ) {
--maximumDigits;
if (maximumDigits < 0) {
this.digits[0]="1";
++this.decimalAt;
maximumDigits=0;
break;
}(this.digits[maximumDigits]=String.fromCharCode(this.digits[maximumDigits].$c()+1));
if (this.digits[maximumDigits] <= "9") break;
}
++maximumDigits;
}this.count=maximumDigits;
while (this.count > 1 && this.digits[this.count - 1] == "0" ){
--this.count;
}
}}, p$1);

Clazz.newMeth(C$, 'shouldRoundUp$I',  function (maximumDigits) {
if (maximumDigits < this.count) {
switch (this.roundingMode) {
case $I$(1).UP:
for (var i=maximumDigits; i < this.count; ++i) {
if (this.digits[i] != "0") {
return true;
}}
break;
case $I$(1).DOWN:
break;
case $I$(1).CEILING:
for (var i=maximumDigits; i < this.count; ++i) {
if (this.digits[i] != "0") {
return !this.isNegative;
}}
break;
case $I$(1).FLOOR:
for (var i=maximumDigits; i < this.count; ++i) {
if (this.digits[i] != "0") {
return this.isNegative;
}}
break;
case $I$(1).HALF_UP:
if (this.digits[maximumDigits] >= "5") {
return true;
}break;
case $I$(1).HALF_DOWN:
if (this.digits[maximumDigits] > "5") {
return true;
} else if (this.digits[maximumDigits] == "5") {
for (var i=maximumDigits + 1; i < this.count; ++i) {
if (this.digits[i] != "0") {
return true;
}}
}break;
case $I$(1).HALF_EVEN:
if (this.digits[maximumDigits] > "5") {
return true;
} else if (this.digits[maximumDigits] == "5") {
for (var i=maximumDigits + 1; i < this.count; ++i) {
if (this.digits[i] != "0") {
return true;
}}
return maximumDigits > 0 && ((this.digits[maximumDigits - 1]).$c() % 2 != 0) ;
}break;
case $I$(1).UNNECESSARY:
for (var i=maximumDigits; i < this.count; ++i) {
if (this.digits[i] != "0") {
throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Rounding needed with the rounding mode being set to RoundingMode.UNNECESSARY"]);
}}
break;
default:
Clazz.assert(C$, this, function(){return false});
}
}return false;
}, p$1);

Clazz.newMeth(C$, 'setExp$Z$J',  function (isNegative, source) {
this.setLong$Z$J$I(isNegative, source, 0);
});

Clazz.newMeth(C$, 'setLong$Z$J$I',  function (isNegative, source, maximumDigits) {
this.isNegative=isNegative;
if (Long.$le(source,0 )) {
if (Long.$eq(source,[0,549755813888,-1] )) {
this.decimalAt=this.count=19;
System.arraycopy$O$I$O$I$I(C$.LONG_MIN_REP, 0, this.digits, 0, this.count);
} else {
this.decimalAt=this.count=0;
}} else {
var left=19;
var right;
while (Long.$ge(source,1 )){
this.digits[--left]=String.fromCharCode((Long.$add(48,(Long.$mod(source,10)))));
source=Long.$div(source,10);
}
this.decimalAt=19 - left;
for (right=18; this.digits[right] == "0"; --right) {
}
this.count=right - left + 1;
System.arraycopy$O$I$O$I$I(this.digits, left, this.digits, 0, this.count);
}if (maximumDigits > 0) p$1.round$I.apply(this, [maximumDigits]);
});

Clazz.newMeth(C$, 'set$Z$java_math_BigDecimal$I$Z',  function (isNegative, source, maximumDigits, fixedPoint) {
var s=source.toString();
p$1.extendDigits$I.apply(this, [s.length$()]);
this.set$Z$S$I$Z(isNegative, s, maximumDigits, fixedPoint);
});

Clazz.newMeth(C$, 'set$Z$java_math_BigInteger$I',  function (isNegative, source, maximumDigits) {
this.isNegative=isNegative;
var s=source.toString();
var len=s.length$();
p$1.extendDigits$I.apply(this, [len]);
s.getChars$I$I$CA$I(0, len, this.digits, 0);
this.decimalAt=len;
var right;
for (right=len - 1; right >= 0 && this.digits[right] == "0" ; --right) ;
this.count=right + 1;
if (maximumDigits > 0) {
p$1.round$I.apply(this, [maximumDigits]);
}});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (this === obj ) return true;
if (!(Clazz.instanceOf(obj, "java.text.DigitList"))) return false;
var other=obj;
if (this.count != other.count || this.decimalAt != other.decimalAt ) return false;
for (var i=0; i < this.count; i++) if (this.digits[i] != other.digits[i]) return false;

return true;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var hashcode=this.decimalAt;
for (var i=0; i < this.count; i++) {
hashcode=hashcode * 37 + (this.digits[i]).$c();
}
return hashcode;
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
var other=Clazz.clone(this);
var newDigits=Clazz.array(Character.TYPE, [this.digits.length]);
System.arraycopy$O$I$O$I$I(this.digits, 0, newDigits, 0, this.digits.length);
other.digits=newDigits;
return other;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(3,1));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'isLongMIN_VALUE',  function () {
if (this.decimalAt != this.count || this.count != 19 ) {
return false;
}for (var i=0; i < this.count; ++i) {
if (this.digits[i] != C$.LONG_MIN_REP[i]) return false;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'parseInt$CA$I$I',  function (str, offset, strLen) {
var c;
var positive=true;
if ((c=str[offset]) == "-") {
positive=false;
++offset;
} else if (c == "+") {
++offset;
}var value=0;
while (offset < strLen){
c=str[offset++];
if (c >= "0" && c <= "9" ) {
value=value * 10 + (c.$c() - 48);
} else {
break;
}}
return positive ? value : -value;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
if (this.isZero$()) {
return "0";
}return "0." + p$1.秘join$CA$I$I.apply(this, [this.digits, 0, this.count]) + "x10^" + this.decimalAt ;
});

Clazz.newMeth(C$, 'extendDigits$I',  function (len) {
if (len > this.digits.length) {
this.digits=Clazz.array(Character.TYPE, [len]);
}}, p$1);

Clazz.newMeth(C$, 'getDataChars$I',  function (length) {
if (this.data == null  || this.data.length < length ) {
this.data=Clazz.array(Character.TYPE, [length]);
}return this.data;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.LONG_MIN_REP="9223372036854775808".toCharArray$();
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
