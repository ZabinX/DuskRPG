(function(){var P$=Clazz.newPackage("java.math"),p$1={},I$=[[0,'java.math.BigInteger','StringBuilder','sun.misc.Unsafe','java.math.BigDecimal','ExceptionInInitializerError',['java.math.BigDecimal','.StringBuilderHelper'],'ThreadLocal','java.math.MathContext','java.math.RoundingMode',['java.math.BigDecimal','.LongOverflow'],'AssertionError','java.util.Arrays',['java.math.BigDecimal','.UnsafeHolder'],'java.math.MutableBigInteger']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BigDecimal", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'Number', 'Comparable');
C$.$classes$=[['LongOverflow',10],['StringBuilderHelper',8],['UnsafeHolder',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['scale','precision'],'J',['intCompact'],'S',['stringCache'],'O',['intVal','java.math.BigInteger']]
,['I',['BIG_TEN_POWERS_TABLE_INITLEN','BIG_TEN_POWERS_TABLE_MAX'],'O',['INFLATED_BIGINT','java.math.BigInteger','threadLocalStringBuilderHelper','ThreadLocal','zeroThroughTen','java.math.BigDecimal[]','+ZERO_SCALED_BY','ZERO','java.math.BigDecimal','+ONE','+TEN','double10pow','double[]','float10pow','float[]','LONG_TEN_POWERS_TABLE','long[]','BIG_TEN_POWERS_TABLE','java.math.BigInteger[]','THRESHOLDS_TABLE','long[]','LONGLONG_TEN_POWERS_TABLE','long[][]']]]

Clazz.newMeth(C$, 'c$$java_math_BigInteger$J$I$I',  function (intVal, val, scale, prec) {
Clazz.super_(C$, this);
this.scale=scale;
this.precision=prec;
this.intCompact=val;
this.intVal=intVal;
}, 1);

Clazz.newMeth(C$, 'c$$CA$I$I',  function ($in, offset, len) {
C$.c$$CA$I$I$java_math_MathContext.apply(this, [$in, offset, len, $I$(8).UNLIMITED]);
}, 1);

Clazz.newMeth(C$, 'c$$CA$I$I$java_math_MathContext',  function ($in, offset, len, mc) {
Clazz.super_(C$, this);
if (offset + len > $in.length || offset < 0 ) throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["Bad offset or len arguments for char[] input."]);
var prec=0;
var scl=0;
var rs=0;
var rb=null;
try {
var isneg=false;
if ($in[offset] == "-") {
isneg=true;
++offset;
--len;
} else if ($in[offset] == "+") {
++offset;
--len;
}var dot=false;
var exp=0;
var c;
var isCompact=(len <= 18);
var idx=0;
if (isCompact) {
for (; len > 0; offset++, len--) {
c=$in[offset];
if ((c == "0")) {
if (prec == 0) prec=1;
 else if (Long.$ne(rs,0 )) {
(rs=Long.$mul(rs,(10)));
++prec;
}if (dot) ++scl;
} else if ((c >= "1" && c <= "9" )) {
var digit=c.$c() - 48;
if (prec != 1 || Long.$ne(rs,0 ) ) ++prec;
rs=Long.$add(Long.$mul(rs,10),digit);
if (dot) ++scl;
} else if (c == ".") {
if (dot) throw Clazz.new_(Clazz.load('NumberFormatException'));
dot=true;
} else if (Character.isDigit$C(c)) {
var digit=Character.digit$C$I(c, 10);
if (digit == 0) {
if (prec == 0) prec=1;
 else if (Long.$ne(rs,0 )) {
(rs=Long.$mul(rs,(10)));
++prec;
}} else {
if (prec != 1 || Long.$ne(rs,0 ) ) ++prec;
rs=Long.$add(Long.$mul(rs,10),digit);
}if (dot) ++scl;
} else if ((c == "e") || (c == "E") ) {
exp=C$.parseExp$CA$I$I($in, offset, len);
if (Long.$ne(Long.$ival(exp),exp )) throw Clazz.new_(Clazz.load('NumberFormatException'));
break;
} else {
throw Clazz.new_(Clazz.load('NumberFormatException'));
}}
if (prec == 0) throw Clazz.new_(Clazz.load('NumberFormatException'));
if (Long.$ne(exp,0 )) {
scl=p$1.adjustScale$I$J.apply(this, [scl, exp]);
}rs=isneg ? (Long.$neg(rs)) : rs;
var mcp=mc.precision;
var drop=prec - mcp;
if (mcp > 0 && drop > 0 ) {
while (drop > 0){
scl=C$.checkScaleNonZero$J(Long.$sub(scl,drop));
rs=C$.divideAndRound$J$J$I(rs, C$.LONG_TEN_POWERS_TABLE[drop], mc.roundingMode.oldMode);
prec=C$.longDigitLength$J(rs);
drop=prec - mcp;
}
}} else {
var coeff=Clazz.array(Character.TYPE, [len]);
for (; len > 0; offset++, len--) {
c=$in[offset];
if ((c >= "0" && c <= "9" ) || Character.isDigit$C(c) ) {
if (c == "0" || Character.digit$C$I(c, 10) == 0 ) {
if (prec == 0) {
coeff[idx]=c;
prec=1;
} else if (idx != 0) {
coeff[idx++]=c;
++prec;
}} else {
if (prec != 1 || idx != 0 ) ++prec;
coeff[idx++]=c;
}if (dot) ++scl;
continue;
}if (c == ".") {
if (dot) throw Clazz.new_(Clazz.load('NumberFormatException'));
dot=true;
continue;
}if ((c != "e") && (c != "E") ) throw Clazz.new_(Clazz.load('NumberFormatException'));
exp=C$.parseExp$CA$I$I($in, offset, len);
if (Long.$ne(Long.$ival(exp),exp )) throw Clazz.new_(Clazz.load('NumberFormatException'));
break;
}
if (prec == 0) throw Clazz.new_(Clazz.load('NumberFormatException'));
if (Long.$ne(exp,0 )) {
scl=p$1.adjustScale$I$J.apply(this, [scl, exp]);
}rb=Clazz.new_($I$(1,1).c$$CA$I$I,[coeff, isneg ? -1 : 1, prec]);
rs=C$.compactValFor$java_math_BigInteger(rb);
var mcp=mc.precision;
if (mcp > 0 && (prec > mcp) ) {
if (Long.$eq(rs,[0,549755813888,-1] )) {
var drop=prec - mcp;
while (drop > 0){
scl=C$.checkScaleNonZero$J(Long.$sub(scl,drop));
rb=C$.divideAndRoundByTenPow$java_math_BigInteger$I$I(rb, drop, mc.roundingMode.oldMode);
rs=C$.compactValFor$java_math_BigInteger(rb);
if (Long.$ne(rs,[0,549755813888,-1] )) {
prec=C$.longDigitLength$J(rs);
break;
}prec=C$.bigDigitLength$java_math_BigInteger(rb);
drop=prec - mcp;
}
}if (Long.$ne(rs,[0,549755813888,-1] )) {
var drop=prec - mcp;
while (drop > 0){
scl=C$.checkScaleNonZero$J(Long.$sub(scl,drop));
rs=C$.divideAndRound$J$J$I(rs, C$.LONG_TEN_POWERS_TABLE[drop], mc.roundingMode.oldMode);
prec=C$.longDigitLength$J(rs);
drop=prec - mcp;
}
rb=null;
}}}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ArrayIndexOutOfBoundsException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('NumberFormatException'));
}
} else if (Clazz.exceptionOf(e$$,"NegativeArraySizeException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('NumberFormatException'));
}
} else {
throw e$$;
}
}
this.scale=scl;
this.precision=prec;
this.intCompact=rs;
this.intVal=rb;
}, 1);

Clazz.newMeth(C$, 'adjustScale$I$J',  function (scl, exp) {
var adjustedScale=Long.$sub(scl,exp);
if (Long.$gt(adjustedScale,2147483647 ) || Long.$lt(adjustedScale,-2147483648 ) ) throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["Scale out of range."]);
scl=Long.$ival(adjustedScale);
return scl;
}, p$1);

Clazz.newMeth(C$, 'parseExp$CA$I$I',  function ($in, offset, len) {
var exp=0;
++offset;
var c=$in[offset];
--len;
var negexp=(c == "-");
if (negexp || c == "+" ) {
++offset;
c=$in[offset];
--len;
}if (len <= 0) throw Clazz.new_(Clazz.load('NumberFormatException'));
while (len > 10 && (c == "0" || (Character.digit$C$I(c, 10) == 0) ) ){
++offset;
c=$in[offset];
--len;
}
if (len > 10) throw Clazz.new_(Clazz.load('NumberFormatException'));
for (; ; len--) {
var v;
if (c >= "0" && c <= "9" ) {
v=c.$c() - 48;
} else {
v=Character.digit$C$I(c, 10);
if (v < 0) throw Clazz.new_(Clazz.load('NumberFormatException'));
}exp=Long.$add(Long.$mul(exp,10),v);
if (len == 1) break;
++offset;
c=$in[offset];
}
if (negexp) exp=(Long.$neg(exp));
return exp;
}, 1);

Clazz.newMeth(C$, 'c$$CA',  function ($in) {
C$.c$$CA$I$I.apply(this, [$in, 0, $in.length]);
}, 1);

Clazz.newMeth(C$, 'c$$CA$java_math_MathContext',  function ($in, mc) {
C$.c$$CA$I$I$java_math_MathContext.apply(this, [$in, 0, $in.length, mc]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (val) {
C$.c$$CA$I$I.apply(this, [val.toCharArray$(), 0, val.length$()]);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_math_MathContext',  function (val, mc) {
C$.c$$CA$I$I$java_math_MathContext.apply(this, [val.toCharArray$(), 0, val.length$(), mc]);
}, 1);

Clazz.newMeth(C$, 'c$$D',  function (val) {
C$.c$$D$java_math_MathContext.apply(this, [val, $I$(8).UNLIMITED]);
}, 1);

Clazz.newMeth(C$, 'c$$D$java_math_MathContext',  function (val, mc) {
Clazz.super_(C$, this);
if (Double.isInfinite$D(val) || Double.isNaN$D(val) ) throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["Infinite or NaN"]);
var valBits=Double.doubleToLongBits$D(val);
var sign=(Long.$eq((Long.$sr(valBits,63)),0 ) ? 1 : -1);
var exponent=Long.$ival((Long.$and((Long.$sr(valBits,52)),2047)));
var significand=(exponent == 0 ? Long.$sl((Long.$and(valBits,(4503599627370495))),1) : Long.$or((Long.$and(valBits,(4503599627370495))),(4503599627370496)));
exponent-=1075;
if (Long.$eq(significand,0 )) {
this.intVal=$I$(1).ZERO;
this.scale=0;
this.intCompact=0;
this.precision=1;
return;
}while (Long.$eq((Long.$and(significand,1)),0 )){
(significand=Long.$sr(significand,(1)));
++exponent;
}
var scale=0;
var intVal;
var compactVal=Long.$mul(sign,significand);
if (exponent == 0) {
intVal=(Long.$eq(compactVal,[0,549755813888,-1] )) ? C$.INFLATED_BIGINT : null;
} else {
if (exponent < 0) {
intVal=$I$(1).valueOf$J(5).pow$I(-exponent).multiply$J(compactVal);
scale=-exponent;
} else {
intVal=$I$(1).valueOf$J(2).pow$I(exponent).multiply$J(compactVal);
}compactVal=C$.compactValFor$java_math_BigInteger(intVal);
}var prec=0;
var mcp=mc.precision;
if (mcp > 0) {
var mode=mc.roundingMode.oldMode;
var drop;
if (Long.$eq(compactVal,[0,549755813888,-1] )) {
prec=C$.bigDigitLength$java_math_BigInteger(intVal);
drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(Long.$sub(scale,drop));
intVal=C$.divideAndRoundByTenPow$java_math_BigInteger$I$I(intVal, drop, mode);
compactVal=C$.compactValFor$java_math_BigInteger(intVal);
if (Long.$ne(compactVal,[0,549755813888,-1] )) {
break;
}prec=C$.bigDigitLength$java_math_BigInteger(intVal);
drop=prec - mcp;
}
}if (Long.$ne(compactVal,[0,549755813888,-1] )) {
prec=C$.longDigitLength$J(compactVal);
drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(Long.$sub(scale,drop));
compactVal=C$.divideAndRound$J$J$I(compactVal, C$.LONG_TEN_POWERS_TABLE[drop], mc.roundingMode.oldMode);
prec=C$.longDigitLength$J(compactVal);
drop=prec - mcp;
}
intVal=null;
}}this.intVal=intVal;
this.intCompact=compactVal;
this.scale=scale;
this.precision=prec;
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigInteger',  function (val) {
Clazz.super_(C$, this);
this.scale=0;
this.intVal=val;
this.intCompact=C$.compactValFor$java_math_BigInteger(val);
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigInteger$java_math_MathContext',  function (val, mc) {
C$.c$$java_math_BigInteger$I$java_math_MathContext.apply(this, [val, 0, mc]);
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigInteger$I',  function (unscaledVal, scale) {
Clazz.super_(C$, this);
this.intVal=unscaledVal;
this.intCompact=C$.compactValFor$java_math_BigInteger(unscaledVal);
this.scale=scale;
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigInteger$I$java_math_MathContext',  function (unscaledVal, scale, mc) {
Clazz.super_(C$, this);
var compactVal=C$.compactValFor$java_math_BigInteger(unscaledVal);
var mcp=mc.precision;
var prec=0;
if (mcp > 0) {
var mode=mc.roundingMode.oldMode;
if (Long.$eq(compactVal,[0,549755813888,-1] )) {
prec=C$.bigDigitLength$java_math_BigInteger(unscaledVal);
var drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(Long.$sub(scale,drop));
unscaledVal=C$.divideAndRoundByTenPow$java_math_BigInteger$I$I(unscaledVal, drop, mode);
compactVal=C$.compactValFor$java_math_BigInteger(unscaledVal);
if (Long.$ne(compactVal,[0,549755813888,-1] )) {
break;
}prec=C$.bigDigitLength$java_math_BigInteger(unscaledVal);
drop=prec - mcp;
}
}if (Long.$ne(compactVal,[0,549755813888,-1] )) {
prec=C$.longDigitLength$J(compactVal);
var drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(Long.$sub(scale,drop));
compactVal=C$.divideAndRound$J$J$I(compactVal, C$.LONG_TEN_POWERS_TABLE[drop], mode);
prec=C$.longDigitLength$J(compactVal);
drop=prec - mcp;
}
unscaledVal=null;
}}this.intVal=unscaledVal;
this.intCompact=compactVal;
this.scale=scale;
this.precision=prec;
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (val) {
Clazz.super_(C$, this);
this.intCompact=val;
this.scale=0;
this.intVal=null;
}, 1);

Clazz.newMeth(C$, 'c$$I$java_math_MathContext',  function (val, mc) {
Clazz.super_(C$, this);
var mcp=mc.precision;
var compactVal=val;
var scale=0;
var prec=0;
if (mcp > 0) {
prec=C$.longDigitLength$J(compactVal);
var drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(Long.$sub(scale,drop));
compactVal=C$.divideAndRound$J$J$I(compactVal, C$.LONG_TEN_POWERS_TABLE[drop], mc.roundingMode.oldMode);
prec=C$.longDigitLength$J(compactVal);
drop=prec - mcp;
}
}this.intVal=null;
this.intCompact=compactVal;
this.scale=scale;
this.precision=prec;
}, 1);

Clazz.newMeth(C$, 'c$$J',  function (val) {
Clazz.super_(C$, this);
this.intCompact=val;
this.intVal=(Long.$eq(val,[0,549755813888,-1] )) ? C$.INFLATED_BIGINT : null;
this.scale=0;
}, 1);

Clazz.newMeth(C$, 'c$$J$java_math_MathContext',  function (val, mc) {
Clazz.super_(C$, this);
var mcp=mc.precision;
var mode=mc.roundingMode.oldMode;
var prec=0;
var scale=0;
var intVal=(Long.$eq(val,[0,549755813888,-1] )) ? C$.INFLATED_BIGINT : null;
if (mcp > 0) {
if (Long.$eq(val,[0,549755813888,-1] )) {
prec=19;
var drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(Long.$sub(scale,drop));
intVal=C$.divideAndRoundByTenPow$java_math_BigInteger$I$I(intVal, drop, mode);
val=C$.compactValFor$java_math_BigInteger(intVal);
if (Long.$ne(val,[0,549755813888,-1] )) {
break;
}prec=C$.bigDigitLength$java_math_BigInteger(intVal);
drop=prec - mcp;
}
}if (Long.$ne(val,[0,549755813888,-1] )) {
prec=C$.longDigitLength$J(val);
var drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(Long.$sub(scale,drop));
val=C$.divideAndRound$J$J$I(val, C$.LONG_TEN_POWERS_TABLE[drop], mc.roundingMode.oldMode);
prec=C$.longDigitLength$J(val);
drop=prec - mcp;
}
intVal=null;
}}this.intVal=intVal;
this.intCompact=val;
this.scale=scale;
this.precision=prec;
}, 1);

Clazz.newMeth(C$, 'valueOf$J$I',  function (unscaledVal, scale) {
if (scale == 0) return C$.valueOf$J(unscaledVal);
 else if (Long.$eq(unscaledVal,0 )) {
return C$.zeroValueOf$I(scale);
}return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[Long.$eq(unscaledVal,[0,549755813888,-1] ) ? C$.INFLATED_BIGINT : null, unscaledVal, scale, 0]);
}, 1);

Clazz.newMeth(C$, 'valueOf$J',  function (val) {
if (Long.$ge(val,0 ) && Long.$lt(val,C$.zeroThroughTen.length ) ) return C$.zeroThroughTen[Long.$ival(val)];
 else if (Long.$ne(val,[0,549755813888,-1] )) return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[null, val, 0, 0]);
return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[C$.INFLATED_BIGINT, val, 0, 0]);
}, 1);

Clazz.newMeth(C$, 'valueOf$J$I$I',  function (unscaledVal, scale, prec) {
if (scale == 0 && Long.$ge(unscaledVal,0 )  && Long.$lt(unscaledVal,C$.zeroThroughTen.length ) ) {
return C$.zeroThroughTen[Long.$ival(unscaledVal)];
} else if (Long.$eq(unscaledVal,0 )) {
return C$.zeroValueOf$I(scale);
}return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[Long.$eq(unscaledVal,[0,549755813888,-1] ) ? C$.INFLATED_BIGINT : null, unscaledVal, scale, prec]);
}, 1);

Clazz.newMeth(C$, 'valueOf$java_math_BigInteger$I$I',  function (intVal, scale, prec) {
var val=C$.compactValFor$java_math_BigInteger(intVal);
if (Long.$eq(val,0 )) {
return C$.zeroValueOf$I(scale);
} else if (scale == 0 && Long.$ge(val,0 )  && Long.$lt(val,C$.zeroThroughTen.length ) ) {
return C$.zeroThroughTen[Long.$ival(val)];
}return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[intVal, val, scale, prec]);
}, 1);

Clazz.newMeth(C$, 'zeroValueOf$I',  function (scale) {
if (scale >= 0 && scale < C$.ZERO_SCALED_BY.length ) return C$.ZERO_SCALED_BY[scale];
 else return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, scale, 1]);
}, 1);

Clazz.newMeth(C$, 'valueOf$D',  function (val) {
return Clazz.new_(C$.c$$S,[Double.toString$D(val)]);
}, 1);

Clazz.newMeth(C$, 'add$java_math_BigDecimal',  function (augend) {
if (Long.$ne(this.intCompact,[0,549755813888,-1] )) {
if ((Long.$ne(augend.intCompact,[0,549755813888,-1] ))) {
return C$.add$J$I$J$I(this.intCompact, this.scale, augend.intCompact, augend.scale);
} else {
return C$.add$J$I$java_math_BigInteger$I(this.intCompact, this.scale, augend.intVal, augend.scale);
}} else {
if ((Long.$ne(augend.intCompact,[0,549755813888,-1] ))) {
return C$.add$J$I$java_math_BigInteger$I(augend.intCompact, augend.scale, this.intVal, this.scale);
} else {
return C$.add$java_math_BigInteger$I$java_math_BigInteger$I(this.intVal, this.scale, augend.intVal, augend.scale);
}}});

Clazz.newMeth(C$, 'add$java_math_BigDecimal$java_math_MathContext',  function (augend, mc) {
if (mc.precision == 0) return this.add$java_math_BigDecimal(augend);
var lhs=this;
{
var lhsIsZero=lhs.signum$() == 0;
var augendIsZero=augend.signum$() == 0;
if (lhsIsZero || augendIsZero ) {
var preferredScale=Math.max(lhs.scale$(), augend.scale$());
var result;
if (lhsIsZero && augendIsZero ) return C$.zeroValueOf$I(preferredScale);
result=lhsIsZero ? C$.doRound$java_math_BigDecimal$java_math_MathContext(augend, mc) : C$.doRound$java_math_BigDecimal$java_math_MathContext(lhs, mc);
if (result.scale$() == preferredScale) return result;
 else if (result.scale$() > preferredScale) {
return C$.stripZerosToMatchScale$java_math_BigInteger$J$I$I(result.intVal, result.intCompact, result.scale, preferredScale);
} else {
var precisionDiff=mc.precision - result.precision$();
var scaleDiff=preferredScale - result.scale$();
if (precisionDiff >= scaleDiff) return result.setScale$I(preferredScale);
 else return result.setScale$I(result.scale$() + precisionDiff);
}}}var padding=Long.$sub(lhs.scale,augend.scale);
if (Long.$ne(padding,0 )) {
var arg=p$1.preAlign$java_math_BigDecimal$java_math_BigDecimal$J$java_math_MathContext.apply(this, [lhs, augend, padding, mc]);
C$.matchScale$java_math_BigDecimalA(arg);
lhs=arg[0];
augend=arg[1];
}return C$.doRound$java_math_BigInteger$I$java_math_MathContext(p$1.inflated.apply(lhs, []).add$java_math_BigInteger(p$1.inflated.apply(augend, [])), lhs.scale, mc);
});

Clazz.newMeth(C$, 'preAlign$java_math_BigDecimal$java_math_BigDecimal$J$java_math_MathContext',  function (lhs, augend, padding, mc) {
var big;
var small;
if (Long.$lt(padding,0 )) {
big=lhs;
small=augend;
} else {
big=augend;
small=lhs;
}var estResultUlpScale=Long.$add(Long.$sub(big.scale,big.precision$()),mc.precision);
var smallHighDigitPos=Long.$add(Long.$sub(small.scale,small.precision$()),1);
if (Long.$gt(smallHighDigitPos,big.scale + 2 ) && Long.$gt(smallHighDigitPos,Long.$add(estResultUlpScale,2) ) ) {
small=C$.valueOf$J$I(small.signum$(), p$1.checkScale$J.apply(this, [Long.$add(Math.max$J$J(big.scale, estResultUlpScale),3)]));
}var result=Clazz.array(C$, -1, [big, small]);
return result;
}, p$1);

Clazz.newMeth(C$, 'subtract$java_math_BigDecimal',  function (subtrahend) {
if (Long.$ne(this.intCompact,[0,549755813888,-1] )) {
if ((Long.$ne(subtrahend.intCompact,[0,549755813888,-1] ))) {
return C$.add$J$I$J$I(this.intCompact, this.scale, (Long.$neg(subtrahend.intCompact)), subtrahend.scale);
} else {
return C$.add$J$I$java_math_BigInteger$I(this.intCompact, this.scale, subtrahend.intVal.negate$(), subtrahend.scale);
}} else {
if ((Long.$ne(subtrahend.intCompact,[0,549755813888,-1] ))) {
return C$.add$J$I$java_math_BigInteger$I((Long.$neg(subtrahend.intCompact)), subtrahend.scale, this.intVal, this.scale);
} else {
return C$.add$java_math_BigInteger$I$java_math_BigInteger$I(this.intVal, this.scale, subtrahend.intVal.negate$(), subtrahend.scale);
}}});

Clazz.newMeth(C$, 'subtract$java_math_BigDecimal$java_math_MathContext',  function (subtrahend, mc) {
if (mc.precision == 0) return this.subtract$java_math_BigDecimal(subtrahend);
return this.add$java_math_BigDecimal$java_math_MathContext(subtrahend.negate$(), mc);
});

Clazz.newMeth(C$, 'multiply$java_math_BigDecimal',  function (multiplicand) {
var productScale=p$1.checkScale$J.apply(this, [Long.$add(this.scale,multiplicand.scale)]);
if (Long.$ne(this.intCompact,[0,549755813888,-1] )) {
if ((Long.$ne(multiplicand.intCompact,[0,549755813888,-1] ))) {
return C$.multiply$J$J$I(this.intCompact, multiplicand.intCompact, productScale);
} else {
return C$.multiply$J$java_math_BigInteger$I(this.intCompact, multiplicand.intVal, productScale);
}} else {
if ((Long.$ne(multiplicand.intCompact,[0,549755813888,-1] ))) {
return C$.multiply$J$java_math_BigInteger$I(multiplicand.intCompact, this.intVal, productScale);
} else {
return C$.multiply$java_math_BigInteger$java_math_BigInteger$I(this.intVal, multiplicand.intVal, productScale);
}}});

Clazz.newMeth(C$, 'multiply$java_math_BigDecimal$java_math_MathContext',  function (multiplicand, mc) {
if (mc.precision == 0) return this.multiply$java_math_BigDecimal(multiplicand);
var productScale=p$1.checkScale$J.apply(this, [Long.$add(this.scale,multiplicand.scale)]);
if (Long.$ne(this.intCompact,[0,549755813888,-1] )) {
if ((Long.$ne(multiplicand.intCompact,[0,549755813888,-1] ))) {
return C$.multiplyAndRound$J$J$I$java_math_MathContext(this.intCompact, multiplicand.intCompact, productScale, mc);
} else {
return C$.multiplyAndRound$J$java_math_BigInteger$I$java_math_MathContext(this.intCompact, multiplicand.intVal, productScale, mc);
}} else {
if ((Long.$ne(multiplicand.intCompact,[0,549755813888,-1] ))) {
return C$.multiplyAndRound$J$java_math_BigInteger$I$java_math_MathContext(multiplicand.intCompact, this.intVal, productScale, mc);
} else {
return C$.multiplyAndRound$java_math_BigInteger$java_math_BigInteger$I$java_math_MathContext(this.intVal, multiplicand.intVal, productScale, mc);
}}});

Clazz.newMeth(C$, 'divide$java_math_BigDecimal$I$I',  function (divisor, scale, roundingMode) {
if (roundingMode < 0 || roundingMode > 7 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid rounding mode"]);
if (Long.$ne(this.intCompact,[0,549755813888,-1] )) {
if ((Long.$ne(divisor.intCompact,[0,549755813888,-1] ))) {
return C$.divide$J$I$J$I$I$I(this.intCompact, this.scale, divisor.intCompact, divisor.scale, scale, roundingMode);
} else {
return C$.divide$J$I$java_math_BigInteger$I$I$I(this.intCompact, this.scale, divisor.intVal, divisor.scale, scale, roundingMode);
}} else {
if ((Long.$ne(divisor.intCompact,[0,549755813888,-1] ))) {
return C$.divide$java_math_BigInteger$I$J$I$I$I(this.intVal, this.scale, divisor.intCompact, divisor.scale, scale, roundingMode);
} else {
return C$.divide$java_math_BigInteger$I$java_math_BigInteger$I$I$I(this.intVal, this.scale, divisor.intVal, divisor.scale, scale, roundingMode);
}}});

Clazz.newMeth(C$, 'divide$java_math_BigDecimal$I$java_math_RoundingMode',  function (divisor, scale, roundingMode) {
return this.divide$java_math_BigDecimal$I$I(divisor, scale, roundingMode.oldMode);
});

Clazz.newMeth(C$, 'divide$java_math_BigDecimal$I',  function (divisor, roundingMode) {
return this.divide$java_math_BigDecimal$I$I(divisor, this.scale, roundingMode);
});

Clazz.newMeth(C$, 'divide$java_math_BigDecimal$java_math_RoundingMode',  function (divisor, roundingMode) {
return this.divide$java_math_BigDecimal$I$I(divisor, this.scale, roundingMode.oldMode);
});

Clazz.newMeth(C$, 'divide$java_math_BigDecimal',  function (divisor) {
if (divisor.signum$() == 0) {
if (this.signum$() == 0) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Division undefined"]);
throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Division by zero"]);
}var preferredScale=C$.saturateLong$J(Long.$sub(this.scale,divisor.scale));
if (this.signum$() == 0) return C$.zeroValueOf$I(preferredScale);
 else {
var mc=Clazz.new_([Long.$ival(Math.min$J$J(Long.$add(this.precision$(),Clazz.toLong(Math.ceil(10.0 * divisor.precision$() / 3.0))), 2147483647)), $I$(9).UNNECESSARY],$I$(8,1).c$$I$java_math_RoundingMode);
var quotient;
try {
quotient=this.divide$java_math_BigDecimal$java_math_MathContext(divisor, mc);
} catch (e) {
if (Clazz.exceptionOf(e,"ArithmeticException")){
throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Non-terminating decimal expansion; no exact representable decimal result."]);
} else {
throw e;
}
}
var quotientScale=quotient.scale$();
if (preferredScale > quotientScale) return quotient.setScale$I$I(preferredScale, 7);
return quotient;
}});

Clazz.newMeth(C$, 'divide$java_math_BigDecimal$java_math_MathContext',  function (divisor, mc) {
var mcp=mc.precision;
if (mcp == 0) return this.divide$java_math_BigDecimal(divisor);
var dividend=this;
var preferredScale=Long.$sub(dividend.scale,divisor.scale);
if (divisor.signum$() == 0) {
if (dividend.signum$() == 0) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Division undefined"]);
throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Division by zero"]);
}if (dividend.signum$() == 0) return C$.zeroValueOf$I(C$.saturateLong$J(preferredScale));
var xscale=dividend.precision$();
var yscale=divisor.precision$();
if (Long.$ne(dividend.intCompact,[0,549755813888,-1] )) {
if (Long.$ne(divisor.intCompact,[0,549755813888,-1] )) {
return C$.divide$J$I$J$I$J$java_math_MathContext(dividend.intCompact, xscale, divisor.intCompact, yscale, preferredScale, mc);
} else {
return C$.divide$J$I$java_math_BigInteger$I$J$java_math_MathContext(dividend.intCompact, xscale, divisor.intVal, yscale, preferredScale, mc);
}} else {
if (Long.$ne(divisor.intCompact,[0,549755813888,-1] )) {
return C$.divide$java_math_BigInteger$I$J$I$J$java_math_MathContext(dividend.intVal, xscale, divisor.intCompact, yscale, preferredScale, mc);
} else {
return C$.divide$java_math_BigInteger$I$java_math_BigInteger$I$J$java_math_MathContext(dividend.intVal, xscale, divisor.intVal, yscale, preferredScale, mc);
}}});

Clazz.newMeth(C$, 'divideToIntegralValue$java_math_BigDecimal',  function (divisor) {
var preferredScale=C$.saturateLong$J(Long.$sub(this.scale,divisor.scale));
if (p$1.compareMagnitude$java_math_BigDecimal.apply(this, [divisor]) < 0) {
return C$.zeroValueOf$I(preferredScale);
}if (this.signum$() == 0 && divisor.signum$() != 0 ) return this.setScale$I$I(preferredScale, 7);
var maxDigits=Long.$ival(Math.min$J$J(Long.$add(this.precision$(),Clazz.toLong(Math.ceil(10.0 * divisor.precision$() / 3.0)) , Math.abs$J(Long.$sub(this.scale$(),divisor.scale$())) , 2 ), 2147483647));
var quotient=this.divide$java_math_BigDecimal$java_math_MathContext(divisor, Clazz.new_([maxDigits, $I$(9).DOWN],$I$(8,1).c$$I$java_math_RoundingMode));
if (quotient.scale > 0) {
quotient=quotient.setScale$I$java_math_RoundingMode(0, $I$(9).DOWN);
quotient=C$.stripZerosToMatchScale$java_math_BigInteger$J$I$I(quotient.intVal, quotient.intCompact, quotient.scale, preferredScale);
}if (quotient.scale < preferredScale) {
quotient=quotient.setScale$I$I(preferredScale, 7);
}return quotient;
});

Clazz.newMeth(C$, 'divideToIntegralValue$java_math_BigDecimal$java_math_MathContext',  function (divisor, mc) {
if (mc.precision == 0 || (p$1.compareMagnitude$java_math_BigDecimal.apply(this, [divisor]) < 0) ) return this.divideToIntegralValue$java_math_BigDecimal(divisor);
var preferredScale=C$.saturateLong$J(Long.$sub(this.scale,divisor.scale));
var result=this.divide$java_math_BigDecimal$java_math_MathContext(divisor, Clazz.new_([mc.precision, $I$(9).DOWN],$I$(8,1).c$$I$java_math_RoundingMode));
if (result.scale$() < 0) {
var product=result.multiply$java_math_BigDecimal(divisor);
if (p$1.compareMagnitude$java_math_BigDecimal.apply(this.subtract$java_math_BigDecimal(product), [divisor]) >= 0) {
throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Division impossible"]);
}} else if (result.scale$() > 0) {
result=result.setScale$I$java_math_RoundingMode(0, $I$(9).DOWN);
}var precisionDiff;
if ((preferredScale > result.scale$()) && (precisionDiff=mc.precision - result.precision$()) > 0 ) {
return result.setScale$I(result.scale$() + Math.min(precisionDiff, preferredScale - result.scale));
} else {
return C$.stripZerosToMatchScale$java_math_BigInteger$J$I$I(result.intVal, result.intCompact, result.scale, preferredScale);
}});

Clazz.newMeth(C$, 'remainder$java_math_BigDecimal',  function (divisor) {
var divrem=this.divideAndRemainder$java_math_BigDecimal(divisor);
return divrem[1];
});

Clazz.newMeth(C$, 'remainder$java_math_BigDecimal$java_math_MathContext',  function (divisor, mc) {
var divrem=this.divideAndRemainder$java_math_BigDecimal$java_math_MathContext(divisor, mc);
return divrem[1];
});

Clazz.newMeth(C$, 'divideAndRemainder$java_math_BigDecimal',  function (divisor) {
var result=Clazz.array(C$, [2]);
result[0]=this.divideToIntegralValue$java_math_BigDecimal(divisor);
result[1]=this.subtract$java_math_BigDecimal(result[0].multiply$java_math_BigDecimal(divisor));
return result;
});

Clazz.newMeth(C$, 'divideAndRemainder$java_math_BigDecimal$java_math_MathContext',  function (divisor, mc) {
if (mc.precision == 0) return this.divideAndRemainder$java_math_BigDecimal(divisor);
var result=Clazz.array(C$, [2]);
var lhs=this;
result[0]=lhs.divideToIntegralValue$java_math_BigDecimal$java_math_MathContext(divisor, mc);
result[1]=lhs.subtract$java_math_BigDecimal(result[0].multiply$java_math_BigDecimal(divisor));
return result;
});

Clazz.newMeth(C$, 'pow$I',  function (n) {
if (n < 0 || n > 999999999 ) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Invalid operation"]);
var newScale=p$1.checkScale$J.apply(this, [Long.$mul(this.scale,n)]);
return Clazz.new_(C$.c$$java_math_BigInteger$I,[p$1.inflated.apply(this, []).pow$I(n), newScale]);
});

Clazz.newMeth(C$, 'pow$I$java_math_MathContext',  function (n, mc) {
if (mc.precision == 0) return this.pow$I(n);
if (n < -999999999 || n > 999999999 ) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Invalid operation"]);
if (n == 0) return C$.ONE;
var lhs=this;
var workmc=mc;
var mag=Math.abs(n);
if (mc.precision > 0) {
var elength=C$.longDigitLength$J(mag);
if (elength > mc.precision) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Invalid operation"]);
workmc=Clazz.new_($I$(8,1).c$$I$java_math_RoundingMode,[mc.precision + elength + 1 , mc.roundingMode]);
}var acc=C$.ONE;
var seenbit=false;
for (var i=1; ; i++) {
mag+=mag;
if ((mag | 0) < 0) {
seenbit=true;
acc=acc.multiply$java_math_BigDecimal$java_math_MathContext(lhs, workmc);
}if (i == 31) break;
if (seenbit) acc=acc.multiply$java_math_BigDecimal$java_math_MathContext(acc, workmc);
}
if (n < 0) acc=C$.ONE.divide$java_math_BigDecimal$java_math_MathContext(acc, workmc);
return C$.doRound$java_math_BigDecimal$java_math_MathContext(acc, mc);
});

Clazz.newMeth(C$, 'abs$',  function () {
return (this.signum$() < 0 ? this.negate$() : this);
});

Clazz.newMeth(C$, 'abs$java_math_MathContext',  function (mc) {
return (this.signum$() < 0 ? this.negate$java_math_MathContext(mc) : this.plus$java_math_MathContext(mc));
});

Clazz.newMeth(C$, 'negate$',  function () {
if (Long.$eq(this.intCompact,[0,549755813888,-1] )) {
return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[this.intVal.negate$(), [0,549755813888,-1], this.scale, this.precision]);
} else {
return C$.valueOf$J$I$I((Long.$neg(this.intCompact)), this.scale, this.precision);
}});

Clazz.newMeth(C$, 'negate$java_math_MathContext',  function (mc) {
return this.negate$().plus$java_math_MathContext(mc);
});

Clazz.newMeth(C$, 'plus$',  function () {
return this;
});

Clazz.newMeth(C$, 'plus$java_math_MathContext',  function (mc) {
if (mc.precision == 0) return this;
return C$.doRound$java_math_BigDecimal$java_math_MathContext(this, mc);
});

Clazz.newMeth(C$, 'signum$',  function () {
return (Long.$ne(this.intCompact,[0,549755813888,-1] )) ? Long.signum$J(this.intCompact) : this.intVal.signum$();
});

Clazz.newMeth(C$, 'scale$',  function () {
return this.scale;
});

Clazz.newMeth(C$, 'precision$',  function () {
var result=this.precision;
if (result == 0) {
var s=this.intCompact;
if (Long.$ne(s,[0,549755813888,-1] )) result=C$.longDigitLength$J(s);
 else result=C$.bigDigitLength$java_math_BigInteger(this.intVal);
this.precision=result;
}return result;
});

Clazz.newMeth(C$, 'unscaledValue$',  function () {
return p$1.inflated.apply(this, []);
});

Clazz.newMeth(C$, 'round$java_math_MathContext',  function (mc) {
return this.plus$java_math_MathContext(mc);
});

Clazz.newMeth(C$, 'setScale$I$java_math_RoundingMode',  function (newScale, roundingMode) {
return this.setScale$I$I(newScale, roundingMode.oldMode);
});

Clazz.newMeth(C$, 'setScale$I$I',  function (newScale, roundingMode) {
if (roundingMode < 0 || roundingMode > 7 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid rounding mode"]);
var oldScale=this.scale;
if (newScale == oldScale) return this;
if (this.signum$() == 0) return C$.zeroValueOf$I(newScale);
if (Long.$ne(this.intCompact,[0,549755813888,-1] )) {
var rs=this.intCompact;
if (newScale > oldScale) {
var raise=p$1.checkScale$J.apply(this, [Long.$sub(newScale,oldScale)]);
if (Long.$ne((rs=C$.longMultiplyPowerTen$J$I(rs, raise)),[0,549755813888,-1] )) {
return C$.valueOf$J$I(rs, newScale);
}var rb=p$1.bigMultiplyPowerTen$I.apply(this, [raise]);
return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[rb, [0,549755813888,-1], newScale, (this.precision > 0) ? this.precision + raise : 0]);
} else {
var drop=p$1.checkScale$J.apply(this, [Long.$sub(oldScale,newScale)]);
if (drop < C$.LONG_TEN_POWERS_TABLE.length) {
return C$.divideAndRound$J$J$I$I$I(rs, C$.LONG_TEN_POWERS_TABLE[drop], newScale, roundingMode, newScale);
} else {
return C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I(p$1.inflated.apply(this, []), C$.bigTenToThe$I(drop), newScale, roundingMode, newScale);
}}} else {
if (newScale > oldScale) {
var raise=p$1.checkScale$J.apply(this, [Long.$sub(newScale,oldScale)]);
var rb=C$.bigMultiplyPowerTen$java_math_BigInteger$I(this.intVal, raise);
return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[rb, [0,549755813888,-1], newScale, (this.precision > 0) ? this.precision + raise : 0]);
} else {
var drop=p$1.checkScale$J.apply(this, [Long.$sub(oldScale,newScale)]);
if (drop < C$.LONG_TEN_POWERS_TABLE.length) return C$.divideAndRound$java_math_BigInteger$J$I$I$I(this.intVal, C$.LONG_TEN_POWERS_TABLE[drop], newScale, roundingMode, newScale);
 else return C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I(this.intVal, C$.bigTenToThe$I(drop), newScale, roundingMode, newScale);
}}});

Clazz.newMeth(C$, 'setScale$I',  function (newScale) {
return this.setScale$I$I(newScale, 7);
});

Clazz.newMeth(C$, 'movePointLeft$I',  function (n) {
var newScale=p$1.checkScale$J.apply(this, [Long.$add(this.scale,n)]);
var num=Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[this.intVal, this.intCompact, newScale, 0]);
return num.scale < 0 ? num.setScale$I$I(0, 7) : num;
});

Clazz.newMeth(C$, 'movePointRight$I',  function (n) {
var newScale=p$1.checkScale$J.apply(this, [Long.$sub(this.scale,n)]);
var num=Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[this.intVal, this.intCompact, newScale, 0]);
return num.scale < 0 ? num.setScale$I$I(0, 7) : num;
});

Clazz.newMeth(C$, 'scaleByPowerOfTen$I',  function (n) {
return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[this.intVal, this.intCompact, p$1.checkScale$J.apply(this, [Long.$sub(this.scale,n)]), this.precision]);
});

Clazz.newMeth(C$, 'stripTrailingZeros$',  function () {
if (Long.$eq(this.intCompact,0 ) || (this.intVal != null  && this.intVal.signum$() == 0 ) ) {
return C$.ZERO;
} else if (Long.$ne(this.intCompact,[0,549755813888,-1] )) {
return C$.createAndStripZerosToMatchScale$J$I$J(this.intCompact, this.scale, [0,549755813888,-1]);
} else {
return C$.createAndStripZerosToMatchScale$java_math_BigInteger$I$J(this.intVal, this.scale, [0,549755813888,-1]);
}});

Clazz.newMeth(C$, ['compareTo$java_math_BigDecimal','compareTo$O'],  function (val) {
if (this.scale == val.scale) {
var xs=this.intCompact;
var ys=val.intCompact;
if (Long.$ne(xs,[0,549755813888,-1] ) && Long.$ne(ys,[0,549755813888,-1] ) ) return Long.$ne(xs,ys ) ? ((Long.$gt(xs,ys )) ? 1 : -1) : 0;
}var xsign=this.signum$();
var ysign=val.signum$();
if (xsign != ysign) return (xsign > ysign) ? 1 : -1;
if (xsign == 0) return 0;
var cmp=p$1.compareMagnitude$java_math_BigDecimal.apply(this, [val]);
return (xsign > 0) ? cmp : -cmp;
});

Clazz.newMeth(C$, 'compareMagnitude$java_math_BigDecimal',  function (val) {
var ys=val.intCompact;
var xs=this.intCompact;
if (Long.$eq(xs,0 )) return (Long.$eq(ys,0 )) ? 0 : -1;
if (Long.$eq(ys,0 )) return 1;
var sdiff=Long.$sub(this.scale,val.scale);
if (Long.$ne(sdiff,0 )) {
var xae=Long.$sub(this.precision$(),this.scale);
var yae=Long.$sub(val.precision$(),val.scale);
if (Long.$lt(xae,yae )) return -1;
if (Long.$gt(xae,yae )) return 1;
var rb=null;
if (Long.$lt(sdiff,0 )) {
if (Long.$gt(sdiff,-2147483648 ) && (Long.$eq(xs,[0,549755813888,-1] ) || Long.$eq((xs=C$.longMultiplyPowerTen$J$I(xs, Long.$ival((Long.$neg(sdiff))))),[0,549755813888,-1] ) )  && Long.$eq(ys,[0,549755813888,-1] ) ) {
rb=p$1.bigMultiplyPowerTen$I.apply(this, [Long.$ival((Long.$neg(sdiff)))]);
return rb.compareMagnitude$java_math_BigInteger(val.intVal);
}} else {
if (Long.$le(sdiff,2147483647 ) && (Long.$eq(ys,[0,549755813888,-1] ) || Long.$eq((ys=C$.longMultiplyPowerTen$J$I(ys, Long.$ival(sdiff))),[0,549755813888,-1] ) )  && Long.$eq(xs,[0,549755813888,-1] ) ) {
rb=p$1.bigMultiplyPowerTen$I.apply(val, [Long.$ival(sdiff)]);
return this.intVal.compareMagnitude$java_math_BigInteger(rb);
}}}if (Long.$ne(xs,[0,549755813888,-1] )) return (Long.$ne(ys,[0,549755813888,-1] )) ? C$.longCompareMagnitude$J$J(xs, ys) : -1;
 else if (Long.$ne(ys,[0,549755813888,-1] )) return 1;
 else return this.intVal.compareMagnitude$java_math_BigInteger(val.intVal);
}, p$1);

Clazz.newMeth(C$, 'equals$O',  function (x) {
if (!(Clazz.instanceOf(x, "java.math.BigDecimal"))) return false;
var xDec=x;
if (x === this ) return true;
if (this.scale != xDec.scale) return false;
var s=this.intCompact;
var xs=xDec.intCompact;
if (Long.$ne(s,[0,549755813888,-1] )) {
if (Long.$eq(xs,[0,549755813888,-1] )) xs=C$.compactValFor$java_math_BigInteger(xDec.intVal);
return Long.$eq(xs,s );
} else if (Long.$ne(xs,[0,549755813888,-1] )) return Long.$eq(xs,C$.compactValFor$java_math_BigInteger(this.intVal) );
return p$1.inflated.apply(this, []).equals$O(p$1.inflated.apply(xDec, []));
});

Clazz.newMeth(C$, 'min$java_math_BigDecimal',  function (val) {
return (this.compareTo$java_math_BigDecimal(val) <= 0 ? this : val);
});

Clazz.newMeth(C$, 'max$java_math_BigDecimal',  function (val) {
return (this.compareTo$java_math_BigDecimal(val) >= 0 ? this : val);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
if (Long.$ne(this.intCompact,[0,549755813888,-1] )) {
var val2=(Long.$lt(this.intCompact,0 )) ? (Long.$neg(this.intCompact)) : this.intCompact;
var temp=Long.$ival((Long.$add((Long.$ival((Long.$usr(val2,32)))) * 31,(Long.$and(val2,4294967295)))));
return 31 * ((Long.$lt(this.intCompact,0 )) ? -temp : temp) + this.scale;
} else return 31 * this.intVal.hashCode$() + this.scale;
});

Clazz.newMeth(C$, ['toString','valueOf'],  function () {
var sc=this.stringCache;
if (sc == null ) this.stringCache=sc=p$1.layoutChars$Z.apply(this, [true]);
return sc;
});

Clazz.newMeth(C$, 'toEngineeringString$',  function () {
return p$1.layoutChars$Z.apply(this, [false]);
});

Clazz.newMeth(C$, 'toPlainString$',  function () {
if (this.scale == 0) {
if (Long.$ne(this.intCompact,[0,549755813888,-1] )) {
return Long.toString$J(this.intCompact);
} else {
return this.intVal.toString();
}}if (this.scale < 0) {
if (this.signum$() == 0) {
return "0";
}var tailingZeros=C$.checkScaleNonZero$J(((Long.$neg(this.scale))));
var buf;
if (Long.$ne(this.intCompact,[0,549755813888,-1] )) {
buf=Clazz.new_($I$(2,1).c$$I,[20 + tailingZeros]);
buf.append$J(this.intCompact);
} else {
var str=this.intVal.toString();
buf=Clazz.new_([str.length$() + tailingZeros],$I$(2,1).c$$I);
buf.append$S(str);
}for (var i=0; i < tailingZeros; i++) buf.append$C("0");

return buf.toString();
}var str;
if (Long.$ne(this.intCompact,[0,549755813888,-1] )) {
str=Long.toString$J(Math.abs$J(this.intCompact));
} else {
str=this.intVal.abs$().toString();
}return p$1.getValueString$I$S$I.apply(this, [this.signum$(), str, this.scale]);
});

Clazz.newMeth(C$, 'getValueString$I$S$I',  function (signum, intString, scale) {
var buf;
var insertionPoint=intString.length$() - scale;
if (insertionPoint == 0) {
return (signum < 0 ? "-0." : "0.") + intString;
} else if (insertionPoint > 0) {
buf=Clazz.new_($I$(2,1).c$$S,[intString]);
buf.insert$I$C(insertionPoint, ".");
if (signum < 0) buf.insert$I$C(0, "-");
} else {
buf=Clazz.new_([3 - insertionPoint + intString.length$()],$I$(2,1).c$$I);
buf.append$S(signum < 0 ? "-0." : "0.");
for (var i=0; i < -insertionPoint; i++) buf.append$C("0");

buf.append$S(intString);
}return buf.toString();
}, p$1);

Clazz.newMeth(C$, 'toBigInteger$',  function () {
return p$1.inflated.apply(this.setScale$I$I(0, 1), []);
});

Clazz.newMeth(C$, 'toBigIntegerExact$',  function () {
return p$1.inflated.apply(this.setScale$I$I(0, 7), []);
});

Clazz.newMeth(C$, 'longValue$',  function () {
return (Long.$ne(this.intCompact,[0,549755813888,-1] ) && this.scale == 0 ) ? this.intCompact : this.toBigInteger$().longValue$();
});

Clazz.newMeth(C$, 'longValueExact$',  function () {
if (Long.$ne(this.intCompact,[0,549755813888,-1] ) && this.scale == 0 ) return this.intCompact;
if ((this.precision$() - this.scale) > 19) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Overflow"]);
if (this.signum$() == 0) return 0;
if ((this.precision$() - this.scale) <= 0) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Rounding necessary"]);
var num=this.setScale$I$I(0, 7);
if (num.precision$() >= 19) $I$(10).check$java_math_BigDecimal(num);
return p$1.inflated.apply(num, []).longValue$();
});

Clazz.newMeth(C$, 'intValue$',  function () {
return (Long.$ne(this.intCompact,[0,549755813888,-1] ) && this.scale == 0 ) ? Long.$ival(this.intCompact) : this.toBigInteger$().intValue$();
});

Clazz.newMeth(C$, 'intValueExact$',  function () {
var num;
num=this.longValueExact$();
if (Long.$ne(Long.$ival(num),num )) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Overflow"]);
return Long.$ival(num);
});

Clazz.newMeth(C$, 'shortValueExact$',  function () {
var num;
num=this.longValueExact$();
if (Long.$ne(($s$[0] = num, $s$[0]),num )) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Overflow"]);
return ($s$[0] = num, $s$[0]);
});

Clazz.newMeth(C$, 'byteValueExact$',  function () {
var num;
num=this.longValueExact$();
if (Long.$ne(($b$[0] = num, $b$[0]),num )) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Overflow"]);
return ($b$[0] = num, $b$[0]);
});

Clazz.newMeth(C$, 'floatValue$',  function () {
if (Long.$ne(this.intCompact,[0,549755813888,-1] )) {
if (this.scale == 0) {
return Long.$fval(this.intCompact);
} else {
if (Long.$lt(Math.abs$J(this.intCompact),4194304 )) {
if (this.scale > 0 && this.scale < C$.float10pow.length ) {
return Long.$fval(this.intCompact) / C$.float10pow[this.scale];
} else if (this.scale < 0 && this.scale > -C$.float10pow.length ) {
return Long.$fval(this.intCompact) * C$.float10pow[-this.scale];
}}}}return Float.parseFloat$S(this.toString());
});

Clazz.newMeth(C$, 'doubleValue$',  function () {
if (Long.$ne(this.intCompact,[0,549755813888,-1] )) {
if (this.scale == 0) {
return Long.$dval(this.intCompact);
} else {
if (Long.$lt(Math.abs$J(this.intCompact),4503599627370496 )) {
if (this.scale > 0 && this.scale < C$.double10pow.length ) {
return Long.$dval(this.intCompact) / C$.double10pow[this.scale];
} else if (this.scale < 0 && this.scale > -C$.double10pow.length ) {
return Long.$dval(this.intCompact) * C$.double10pow[-this.scale];
}}}}return Double.parseDouble$S(this.toString());
});

Clazz.newMeth(C$, 'ulp$',  function () {
return C$.valueOf$J$I$I(1, this.scale$(), 1);
});

Clazz.newMeth(C$, 'layoutChars$Z',  function (sci) {
if (this.scale == 0) return (Long.$ne(this.intCompact,[0,549755813888,-1] )) ? Long.toString$J(this.intCompact) : this.intVal.toString();
if (this.scale == 2 && Long.$ge(this.intCompact,0 )  && Long.$lt(this.intCompact,2147483647 ) ) {
var lowInt=Long.$ival(this.intCompact) % 100;
var highInt=(Long.$ival(this.intCompact)/100|0);
return (Integer.toString$I(highInt) + '.' + $I$(6).DIGIT_TENS[lowInt] + $I$(6).DIGIT_ONES[lowInt] );
}var sbHelper=C$.threadLocalStringBuilderHelper.get$();
var coeff;
var offset;
if (Long.$ne(this.intCompact,[0,549755813888,-1] )) {
offset=sbHelper.putIntCompact$J(Math.abs$J(this.intCompact));
coeff=sbHelper.getCompactCharArray$();
} else {
offset=0;
coeff=this.intVal.abs$().toString().toCharArray$();
}var buf=sbHelper.getStringBuilder$();
if (this.signum$() < 0) buf.append$C("-");
var coeffLen=coeff.length - offset;
var adjusted=Long.$add((Long.$neg(this.scale)),(coeffLen - 1));
if ((this.scale >= 0) && (Long.$ge(adjusted,-6 )) ) {
var pad=this.scale - coeffLen;
if (pad >= 0) {
buf.append$C("0");
buf.append$C(".");
for (; pad > 0; pad--) {
buf.append$C("0");
}
buf.append$CA$I$I(coeff, offset, coeffLen);
} else {
buf.append$CA$I$I(coeff, offset, -pad);
buf.append$C(".");
buf.append$CA$I$I(coeff, -pad + offset, this.scale);
}} else {
if (sci) {
buf.append$C(coeff[offset]);
if (coeffLen > 1) {
buf.append$C(".");
buf.append$CA$I$I(coeff, offset + 1, coeffLen - 1);
}} else {
var sig=Long.$ival((Long.$mod(adjusted,3)));
if (sig < 0) sig+=3;
(adjusted=Long.$sub(adjusted,(sig)));
++sig;
if (this.signum$() == 0) {
switch (sig) {
case 1:
buf.append$C("0");
break;
case 2:
buf.append$S("0.00");
(adjusted=Long.$add(adjusted,(3)));
break;
case 3:
buf.append$S("0.0");
(adjusted=Long.$add(adjusted,(3)));
break;
default:
throw Clazz.new_($I$(11,1).c$$O,["Unexpected sig value " + sig]);
}
} else if (sig >= coeffLen) {
buf.append$CA$I$I(coeff, offset, coeffLen);
for (var i=sig - coeffLen; i > 0; i--) buf.append$C("0");

} else {
buf.append$CA$I$I(coeff, offset, sig);
buf.append$C(".");
buf.append$CA$I$I(coeff, offset + sig, coeffLen - sig);
}}if (Long.$ne(adjusted,0 )) {
buf.append$C("E");
if (Long.$gt(adjusted,0 )) buf.append$C("+");
buf.append$J(adjusted);
}}return buf.toString();
}, p$1);

Clazz.newMeth(C$, 'bigTenToThe$I',  function (n) {
if (n < 0) return $I$(1).ZERO;
if (n < C$.BIG_TEN_POWERS_TABLE_MAX) {
var pows=C$.BIG_TEN_POWERS_TABLE;
if (n < pows.length) return pows[n];
 else return C$.expandBigIntegerTenPowers$I(n);
}return $I$(1).TEN.pow$I(n);
}, 1);

Clazz.newMeth(C$, 'expandBigIntegerTenPowers$I',  function (n) {
{
var pows=C$.BIG_TEN_POWERS_TABLE;
var curLen=pows.length;
if (curLen <= n) {
var newLen=curLen << 1;
while (newLen <= n)newLen<<=1;

pows=$I$(12).copyOf$OA$I(pows, newLen);
for (var i=curLen; i < newLen; i++) pows[i]=pows[i - 1].multiply$java_math_BigInteger($I$(1).TEN);

C$.BIG_TEN_POWERS_TABLE=pows;
}return pows[n];
}}, 1);

Clazz.newMeth(C$, 'longMultiplyPowerTen$J$I',  function (val, n) {
if (Long.$eq(val,0 ) || n <= 0 ) return val;
var tab=C$.LONG_TEN_POWERS_TABLE;
var bounds=C$.THRESHOLDS_TABLE;
if (n < tab.length && n < bounds.length ) {
var tenpower=tab[n];
if (Long.$eq(val,1 )) return tenpower;
if (Long.$le(Math.abs$J(val),bounds[n] )) return Long.$mul(val,tenpower);
}return [0,549755813888,-1];
}, 1);

Clazz.newMeth(C$, 'bigMultiplyPowerTen$I',  function (n) {
if (n <= 0) return p$1.inflated.apply(this, []);
if (Long.$ne(this.intCompact,[0,549755813888,-1] )) return C$.bigTenToThe$I(n).multiply$J(this.intCompact);
 else return this.intVal.multiply$java_math_BigInteger(C$.bigTenToThe$I(n));
}, p$1);

Clazz.newMeth(C$, 'inflated',  function () {
if (this.intVal == null ) {
return $I$(1).valueOf$J(this.intCompact);
}return this.intVal;
}, p$1);

Clazz.newMeth(C$, 'matchScale$java_math_BigDecimalA',  function (val) {
if (val[0].scale == val[1].scale) {
return;
} else if (val[0].scale < val[1].scale) {
val[0]=val[0].setScale$I$I(val[1].scale, 7);
} else if (val[1].scale < val[0].scale) {
val[1]=val[1].setScale$I$I(val[0].scale, 7);
}}, 1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
s.defaultReadObject$();
if (this.intVal == null ) {
var message="BigDecimal: null intVal in stream";
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,[message]);
}$I$(13,"setIntCompactVolatile$java_math_BigDecimal$J",[this, C$.compactValFor$java_math_BigInteger(this.intVal)]);
}, p$1);

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (s) {
if (this.intVal == null ) $I$(13,"setIntValVolatile$java_math_BigDecimal$java_math_BigInteger",[this, $I$(1).valueOf$J(this.intCompact)]);
s.defaultWriteObject$();
}, p$1);

Clazz.newMeth(C$, 'longDigitLength$J',  function (x) {
if (Long.$lt(x,0 )) x=(Long.$neg(x));
if (Long.$lt(x,10 )) return 1;
var r=((64 - Long.numberOfLeadingZeros$J(x) + 1) * 1233) >>> 12;
var tab=C$.LONG_TEN_POWERS_TABLE;
return (r >= tab.length || Long.$lt(x,tab[r] ) ) ? r : r + 1;
}, 1);

Clazz.newMeth(C$, 'bigDigitLength$java_math_BigInteger',  function (b) {
if (b.signum == 0) return 1;
var r=Long.$ival((Long.$usr((Long.$mul((Long.$add(b.bitLength$(),1)),646456993)),31)));
return b.compareMagnitude$java_math_BigInteger(C$.bigTenToThe$I(r)) < 0 ? r : r + 1;
}, 1);

Clazz.newMeth(C$, 'checkScale$J',  function (val) {
var asInt=Long.$ival(val);
if (Long.$ne(asInt,val )) {
asInt=Long.$gt(val,2147483647 ) ? 2147483647 : -2147483648;
var b;
if (Long.$ne(this.intCompact,0 ) && ((b=this.intVal) == null  || b.signum$() != 0 ) ) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,[asInt > 0 ? "Underflow" : "Overflow"]);
}return asInt;
}, p$1);

Clazz.newMeth(C$, 'compactValFor$java_math_BigInteger',  function (b) {
var m=b.mag;
var len=m.length;
if (len == 0) return 0;
var d=m[0];
if (len > 2 || (len == 2 && d < 0 ) ) return [0,549755813888,-1];
var u=(len == 2) ? (Long.$add((Long.$and(m[1],4294967295)),(Long.$sl((d),32)))) : (Long.$and((d),4294967295));
return (b.signum < 0) ? (Long.$neg(u)) : u;
}, 1);

Clazz.newMeth(C$, 'longCompareMagnitude$J$J',  function (x, y) {
if (Long.$lt(x,0 )) x=(Long.$neg(x));
if (Long.$lt(y,0 )) y=(Long.$neg(y));
return (Long.$lt(x,y )) ? -1 : ((Long.$eq(x,y )) ? 0 : 1);
}, 1);

Clazz.newMeth(C$, 'saturateLong$J',  function (s) {
var i=Long.$ival(s);
return (Long.$eq(s,i )) ? i : (Long.$lt(s,0 ) ? -2147483648 : 2147483647);
}, 1);

Clazz.newMeth(C$, 'print$S$java_math_BigDecimal',  function (name, bd) {
System.err.format$S$OA("%s:\tintCompact %d\tintVal %d\tscale %d\tprecision %d%n", Clazz.array(java.lang.Object, -1, [name, Long.valueOf$J(bd.intCompact), bd.intVal, Integer.valueOf$I(bd.scale), Integer.valueOf$I(bd.precision)]));
}, 1);

Clazz.newMeth(C$, 'audit',  function () {
if (Long.$eq(this.intCompact,[0,549755813888,-1] )) {
if (this.intVal == null ) {
C$.print$S$java_math_BigDecimal("audit", this);
throw Clazz.new_($I$(11,1).c$$O,["null intVal"]);
}if (this.precision > 0 && this.precision != C$.bigDigitLength$java_math_BigInteger(this.intVal) ) {
C$.print$S$java_math_BigDecimal("audit", this);
throw Clazz.new_($I$(11,1).c$$O,["precision mismatch"]);
}} else {
if (this.intVal != null ) {
var val=this.intVal.longValue$();
if (Long.$ne(val,this.intCompact )) {
C$.print$S$java_math_BigDecimal("audit", this);
throw Clazz.new_(["Inconsistent state, intCompact=" + Long.$s(this.intCompact) + "\t intVal=" + Long.$s(val) ],$I$(11,1).c$$O);
}}if (this.precision > 0 && this.precision != C$.longDigitLength$J(this.intCompact) ) {
C$.print$S$java_math_BigDecimal("audit", this);
throw Clazz.new_($I$(11,1).c$$O,["precision mismatch"]);
}}return this;
}, p$1);

Clazz.newMeth(C$, 'checkScaleNonZero$J',  function (val) {
var asInt=Long.$ival(val);
if (Long.$ne(asInt,val )) {
throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,[asInt > 0 ? "Underflow" : "Overflow"]);
}return asInt;
}, 1);

Clazz.newMeth(C$, 'checkScale$J$J',  function (intCompact, val) {
var asInt=Long.$ival(val);
if (Long.$ne(asInt,val )) {
asInt=Long.$gt(val,2147483647 ) ? 2147483647 : -2147483648;
if (Long.$ne(intCompact,0 )) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,[asInt > 0 ? "Underflow" : "Overflow"]);
}return asInt;
}, 1);

Clazz.newMeth(C$, 'checkScale$java_math_BigInteger$J',  function (intVal, val) {
var asInt=Long.$ival(val);
if (Long.$ne(asInt,val )) {
asInt=Long.$gt(val,2147483647 ) ? 2147483647 : -2147483648;
if (intVal.signum$() != 0) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,[asInt > 0 ? "Underflow" : "Overflow"]);
}return asInt;
}, 1);

Clazz.newMeth(C$, 'doRound$java_math_BigDecimal$java_math_MathContext',  function (val, mc) {
var mcp=mc.precision;
var wasDivided=false;
if (mcp > 0) {
var intVal=val.intVal;
var compactVal=val.intCompact;
var scale=val.scale;
var prec=val.precision$();
var mode=mc.roundingMode.oldMode;
var drop;
if (Long.$eq(compactVal,[0,549755813888,-1] )) {
drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(Long.$sub(scale,drop));
intVal=C$.divideAndRoundByTenPow$java_math_BigInteger$I$I(intVal, drop, mode);
wasDivided=true;
compactVal=C$.compactValFor$java_math_BigInteger(intVal);
if (Long.$ne(compactVal,[0,549755813888,-1] )) {
prec=C$.longDigitLength$J(compactVal);
break;
}prec=C$.bigDigitLength$java_math_BigInteger(intVal);
drop=prec - mcp;
}
}if (Long.$ne(compactVal,[0,549755813888,-1] )) {
drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(Long.$sub(scale,drop));
compactVal=C$.divideAndRound$J$J$I(compactVal, C$.LONG_TEN_POWERS_TABLE[drop], mc.roundingMode.oldMode);
wasDivided=true;
prec=C$.longDigitLength$J(compactVal);
drop=prec - mcp;
intVal=null;
}
}return wasDivided ? Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[intVal, compactVal, scale, prec]) : val;
}return val;
}, 1);

Clazz.newMeth(C$, 'doRound$J$I$java_math_MathContext',  function (compactVal, scale, mc) {
var mcp=mc.precision;
if (mcp > 0 && mcp < 19 ) {
var prec=C$.longDigitLength$J(compactVal);
var drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(Long.$sub(scale,drop));
compactVal=C$.divideAndRound$J$J$I(compactVal, C$.LONG_TEN_POWERS_TABLE[drop], mc.roundingMode.oldMode);
prec=C$.longDigitLength$J(compactVal);
drop=prec - mcp;
}
return C$.valueOf$J$I$I(compactVal, scale, prec);
}return C$.valueOf$J$I(compactVal, scale);
}, 1);

Clazz.newMeth(C$, 'doRound$java_math_BigInteger$I$java_math_MathContext',  function (intVal, scale, mc) {
var mcp=mc.precision;
var prec=0;
if (mcp > 0) {
var compactVal=C$.compactValFor$java_math_BigInteger(intVal);
var mode=mc.roundingMode.oldMode;
var drop;
if (Long.$eq(compactVal,[0,549755813888,-1] )) {
prec=C$.bigDigitLength$java_math_BigInteger(intVal);
drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(Long.$sub(scale,drop));
intVal=C$.divideAndRoundByTenPow$java_math_BigInteger$I$I(intVal, drop, mode);
compactVal=C$.compactValFor$java_math_BigInteger(intVal);
if (Long.$ne(compactVal,[0,549755813888,-1] )) {
break;
}prec=C$.bigDigitLength$java_math_BigInteger(intVal);
drop=prec - mcp;
}
}if (Long.$ne(compactVal,[0,549755813888,-1] )) {
prec=C$.longDigitLength$J(compactVal);
drop=prec - mcp;
while (drop > 0){
scale=C$.checkScaleNonZero$J(Long.$sub(scale,drop));
compactVal=C$.divideAndRound$J$J$I(compactVal, C$.LONG_TEN_POWERS_TABLE[drop], mc.roundingMode.oldMode);
prec=C$.longDigitLength$J(compactVal);
drop=prec - mcp;
}
return C$.valueOf$J$I$I(compactVal, scale, prec);
}}return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[intVal, [0,549755813888,-1], scale, prec]);
}, 1);

Clazz.newMeth(C$, 'divideAndRoundByTenPow$java_math_BigInteger$I$I',  function (intVal, tenPow, roundingMode) {
if (tenPow < C$.LONG_TEN_POWERS_TABLE.length) intVal=C$.divideAndRound$java_math_BigInteger$J$I(intVal, C$.LONG_TEN_POWERS_TABLE[tenPow], roundingMode);
 else intVal=C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I(intVal, C$.bigTenToThe$I(tenPow), roundingMode);
return intVal;
}, 1);

Clazz.newMeth(C$, 'divideAndRound$J$J$I$I$I',  function (ldividend, ldivisor, scale, roundingMode, preferredScale) {
var qsign;
var q=Long.$div(ldividend,ldivisor);
if (roundingMode == 1 && scale == preferredScale ) return C$.valueOf$J$I(q, scale);
var r=Long.$mod(ldividend,ldivisor);
qsign=((Long.$lt(ldividend,0 )) == (Long.$lt(ldivisor,0 )) ) ? 1 : -1;
if (Long.$ne(r,0 )) {
var increment=C$.needIncrement$J$I$I$J$J(ldivisor, roundingMode, qsign, q, r);
return C$.valueOf$J$I((increment ? Long.$add(q,qsign) : q), scale);
} else {
if (preferredScale != scale) return C$.createAndStripZerosToMatchScale$J$I$J(q, scale, preferredScale);
 else return C$.valueOf$J$I(q, scale);
}}, 1);

Clazz.newMeth(C$, 'divideAndRound$J$J$I',  function (ldividend, ldivisor, roundingMode) {
var qsign;
var q=Long.$div(ldividend,ldivisor);
if (roundingMode == 1) return q;
var r=Long.$mod(ldividend,ldivisor);
qsign=((Long.$lt(ldividend,0 )) == (Long.$lt(ldivisor,0 )) ) ? 1 : -1;
if (Long.$ne(r,0 )) {
var increment=C$.needIncrement$J$I$I$J$J(ldivisor, roundingMode, qsign, q, r);
return increment ? Long.$add(q,qsign) : q;
} else {
return q;
}}, 1);

Clazz.newMeth(C$, 'commonNeedIncrement$I$I$I$Z',  function (roundingMode, qsign, cmpFracHalf, oddQuot) {
switch (roundingMode) {
case 7:
throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Rounding necessary"]);
case 0:
return true;
case 1:
return false;
case 2:
return qsign > 0;
case 3:
return qsign < 0;
default:
if (cmpFracHalf < 0) return false;
 else if (cmpFracHalf > 0) return true;
 else {
switch (roundingMode) {
case 5:
return false;
case 4:
return true;
case 6:
return oddQuot;
default:
throw Clazz.new_($I$(11,1).c$$O,["Unexpected rounding mode" + roundingMode]);
}
}}
}, 1);

Clazz.newMeth(C$, 'needIncrement$J$I$I$J$J',  function (ldivisor, roundingMode, qsign, q, r) {
var cmpFracHalf;
if (Long.$le(r,[0,274877906944,-1] ) || Long.$gt(r,[16777215,274877906943,1] ) ) {
cmpFracHalf=1;
} else {
cmpFracHalf=C$.longCompareMagnitude$J$J(Long.$mul(2,r), ldivisor);
}return C$.commonNeedIncrement$I$I$I$Z(roundingMode, qsign, cmpFracHalf, Long.$ne((Long.$and(q,1)),0 ));
}, 1);

Clazz.newMeth(C$, 'divideAndRound$java_math_BigInteger$J$I',  function (bdividend, ldivisor, roundingMode) {
var isRemainderZero;
var qsign;
var r=0;
var mq=null;
var mdividend=Clazz.new_($I$(14,1).c$$IA,[bdividend.mag]);
mq=Clazz.new_($I$(14,1));
r=mdividend.divide$J$java_math_MutableBigInteger(ldivisor, mq);
isRemainderZero=(Long.$eq(r,0 ));
qsign=(Long.$lt(ldivisor,0 )) ? -bdividend.signum : bdividend.signum;
if (!isRemainderZero) {
if (C$.needIncrement$J$I$I$java_math_MutableBigInteger$J(ldivisor, roundingMode, qsign, mq, r)) {
mq.add$java_math_MutableBigInteger($I$(14).ONE);
}}return mq.toBigInteger$I(qsign);
}, 1);

Clazz.newMeth(C$, 'divideAndRound$java_math_BigInteger$J$I$I$I',  function (bdividend, ldivisor, scale, roundingMode, preferredScale) {
var isRemainderZero;
var qsign;
var r=0;
var mq=null;
var mdividend=Clazz.new_($I$(14,1).c$$IA,[bdividend.mag]);
mq=Clazz.new_($I$(14,1));
r=mdividend.divide$J$java_math_MutableBigInteger(ldivisor, mq);
isRemainderZero=(Long.$eq(r,0 ));
qsign=(Long.$lt(ldivisor,0 )) ? -bdividend.signum : bdividend.signum;
if (!isRemainderZero) {
if (C$.needIncrement$J$I$I$java_math_MutableBigInteger$J(ldivisor, roundingMode, qsign, mq, r)) {
mq.add$java_math_MutableBigInteger($I$(14).ONE);
}return mq.toBigDecimal$I$I(qsign, scale);
} else {
if (preferredScale != scale) {
var compactVal=mq.toCompactValue$I(qsign);
if (Long.$ne(compactVal,[0,549755813888,-1] )) {
return C$.createAndStripZerosToMatchScale$J$I$J(compactVal, scale, preferredScale);
}var intVal=mq.toBigInteger$I(qsign);
return C$.createAndStripZerosToMatchScale$java_math_BigInteger$I$J(intVal, scale, preferredScale);
} else {
return mq.toBigDecimal$I$I(qsign, scale);
}}}, 1);

Clazz.newMeth(C$, 'needIncrement$J$I$I$java_math_MutableBigInteger$J',  function (ldivisor, roundingMode, qsign, mq, r) {
var cmpFracHalf;
if (Long.$le(r,[0,274877906944,-1] ) || Long.$gt(r,[16777215,274877906943,1] ) ) {
cmpFracHalf=1;
} else {
cmpFracHalf=C$.longCompareMagnitude$J$J(Long.$mul(2,r), ldivisor);
}return C$.commonNeedIncrement$I$I$I$Z(roundingMode, qsign, cmpFracHalf, mq.isOdd$());
}, 1);

Clazz.newMeth(C$, 'divideAndRound$java_math_BigInteger$java_math_BigInteger$I',  function (bdividend, bdivisor, roundingMode) {
var isRemainderZero;
var qsign;
var mdividend=Clazz.new_($I$(14,1).c$$IA,[bdividend.mag]);
var mq=Clazz.new_($I$(14,1));
var mdivisor=Clazz.new_($I$(14,1).c$$IA,[bdivisor.mag]);
var mr=mdividend.divide$java_math_MutableBigInteger$java_math_MutableBigInteger(mdivisor, mq);
isRemainderZero=mr.isZero$();
qsign=(bdividend.signum != bdivisor.signum) ? -1 : 1;
if (!isRemainderZero) {
if (C$.needIncrement$java_math_MutableBigInteger$I$I$java_math_MutableBigInteger$java_math_MutableBigInteger(mdivisor, roundingMode, qsign, mq, mr)) {
mq.add$java_math_MutableBigInteger($I$(14).ONE);
}}return mq.toBigInteger$I(qsign);
}, 1);

Clazz.newMeth(C$, 'divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I',  function (bdividend, bdivisor, scale, roundingMode, preferredScale) {
var isRemainderZero;
var qsign;
var mdividend=Clazz.new_($I$(14,1).c$$IA,[bdividend.mag]);
var mq=Clazz.new_($I$(14,1));
var mdivisor=Clazz.new_($I$(14,1).c$$IA,[bdivisor.mag]);
var mr=mdividend.divide$java_math_MutableBigInteger$java_math_MutableBigInteger(mdivisor, mq);
isRemainderZero=mr.isZero$();
qsign=(bdividend.signum != bdivisor.signum) ? -1 : 1;
if (!isRemainderZero) {
if (C$.needIncrement$java_math_MutableBigInteger$I$I$java_math_MutableBigInteger$java_math_MutableBigInteger(mdivisor, roundingMode, qsign, mq, mr)) {
mq.add$java_math_MutableBigInteger($I$(14).ONE);
}return mq.toBigDecimal$I$I(qsign, scale);
} else {
if (preferredScale != scale) {
var compactVal=mq.toCompactValue$I(qsign);
if (Long.$ne(compactVal,[0,549755813888,-1] )) {
return C$.createAndStripZerosToMatchScale$J$I$J(compactVal, scale, preferredScale);
}var intVal=mq.toBigInteger$I(qsign);
return C$.createAndStripZerosToMatchScale$java_math_BigInteger$I$J(intVal, scale, preferredScale);
} else {
return mq.toBigDecimal$I$I(qsign, scale);
}}}, 1);

Clazz.newMeth(C$, 'needIncrement$java_math_MutableBigInteger$I$I$java_math_MutableBigInteger$java_math_MutableBigInteger',  function (mdivisor, roundingMode, qsign, mq, mr) {
var cmpFracHalf=mr.compareHalf$java_math_MutableBigInteger(mdivisor);
return C$.commonNeedIncrement$I$I$I$Z(roundingMode, qsign, cmpFracHalf, mq.isOdd$());
}, 1);

Clazz.newMeth(C$, 'createAndStripZerosToMatchScale$java_math_BigInteger$I$J',  function (intVal, scale, preferredScale) {
var qr;
while (intVal.compareMagnitude$java_math_BigInteger($I$(1).TEN) >= 0 && Long.$gt(scale,preferredScale ) ){
if (intVal.testBit$I(0)) break;
qr=intVal.divideAndRemainder$java_math_BigInteger($I$(1).TEN);
if (qr[1].signum$() != 0) break;
intVal=qr[0];
scale=C$.checkScale$java_math_BigInteger$J(intVal, Long.$sub(scale,1));
}
return C$.valueOf$java_math_BigInteger$I$I(intVal, scale, 0);
}, 1);

Clazz.newMeth(C$, 'createAndStripZerosToMatchScale$J$I$J',  function (compactVal, scale, preferredScale) {
while (Long.$ge(Math.abs$J(compactVal),10 ) && Long.$gt(scale,preferredScale ) ){
if (Long.$ne((Long.$and(compactVal,1)),0 )) break;
var r=Long.$mod(compactVal,10);
if (Long.$ne(r,0 )) break;
(compactVal=Long.$div(compactVal,(10)));
scale=C$.checkScale$J$J(compactVal, Long.$sub(scale,1));
}
return C$.valueOf$J$I(compactVal, scale);
}, 1);

Clazz.newMeth(C$, 'stripZerosToMatchScale$java_math_BigInteger$J$I$I',  function (intVal, intCompact, scale, preferredScale) {
if (Long.$ne(intCompact,[0,549755813888,-1] )) {
return C$.createAndStripZerosToMatchScale$J$I$J(intCompact, scale, preferredScale);
} else {
return C$.createAndStripZerosToMatchScale$java_math_BigInteger$I$J(intVal == null  ? C$.INFLATED_BIGINT : intVal, scale, preferredScale);
}}, 1);

Clazz.newMeth(C$, 'add$J$J',  function (xs, ys) {
var sum=Long.$add(xs,ys);
if (Long.$ge(((Long.$and((Long.$xor(sum,xs)),(Long.$xor(sum,ys))))),0 )) {
return sum;
}return [0,549755813888,-1];
}, 1);

Clazz.newMeth(C$, 'add$J$J$I',  function (xs, ys, scale) {
var sum=C$.add$J$J(xs, ys);
if (Long.$ne(sum,[0,549755813888,-1] )) return C$.valueOf$J$I(sum, scale);
return Clazz.new_(C$.c$$java_math_BigInteger$I,[$I$(1).valueOf$J(xs).add$J(ys), scale]);
}, 1);

Clazz.newMeth(C$, 'add$J$I$J$I',  function (xs, scale1, ys, scale2) {
var sdiff=Long.$sub(scale1,scale2);
if (Long.$eq(sdiff,0 )) {
return C$.add$J$J$I(xs, ys, scale1);
} else if (Long.$lt(sdiff,0 )) {
var raise=C$.checkScale$J$J(xs, (Long.$neg(sdiff)));
var scaledX=C$.longMultiplyPowerTen$J$I(xs, raise);
if (Long.$ne(scaledX,[0,549755813888,-1] )) {
return C$.add$J$J$I(scaledX, ys, scale2);
} else {
var bigsum=C$.bigMultiplyPowerTen$J$I(xs, raise).add$J(ys);
return (Long.$ge((Long.$xor(xs,ys)),0 )) ? Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[bigsum, [0,549755813888,-1], scale2, 0]) : C$.valueOf$java_math_BigInteger$I$I(bigsum, scale2, 0);
}} else {
var raise=C$.checkScale$J$J(ys, sdiff);
var scaledY=C$.longMultiplyPowerTen$J$I(ys, raise);
if (Long.$ne(scaledY,[0,549755813888,-1] )) {
return C$.add$J$J$I(xs, scaledY, scale1);
} else {
var bigsum=C$.bigMultiplyPowerTen$J$I(ys, raise).add$J(xs);
return (Long.$ge((Long.$xor(xs,ys)),0 )) ? Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[bigsum, [0,549755813888,-1], scale1, 0]) : C$.valueOf$java_math_BigInteger$I$I(bigsum, scale1, 0);
}}}, 1);

Clazz.newMeth(C$, 'add$J$I$java_math_BigInteger$I',  function (xs, scale1, snd, scale2) {
var rscale=scale1;
var sdiff=Long.$sub(rscale,scale2);
var sameSigns=(Long.signum$J(xs) == snd.signum);
var sum;
if (Long.$lt(sdiff,0 )) {
var raise=C$.checkScale$J$J(xs, (Long.$neg(sdiff)));
rscale=scale2;
var scaledX=C$.longMultiplyPowerTen$J$I(xs, raise);
if (Long.$eq(scaledX,[0,549755813888,-1] )) {
sum=snd.add$java_math_BigInteger(C$.bigMultiplyPowerTen$J$I(xs, raise));
} else {
sum=snd.add$J(scaledX);
}} else {
var raise=C$.checkScale$java_math_BigInteger$J(snd, sdiff);
snd=C$.bigMultiplyPowerTen$java_math_BigInteger$I(snd, raise);
sum=snd.add$J(xs);
}return (sameSigns) ? Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[sum, [0,549755813888,-1], rscale, 0]) : C$.valueOf$java_math_BigInteger$I$I(sum, rscale, 0);
}, 1);

Clazz.newMeth(C$, 'add$java_math_BigInteger$I$java_math_BigInteger$I',  function (fst, scale1, snd, scale2) {
var rscale=scale1;
var sdiff=Long.$sub(rscale,scale2);
if (Long.$ne(sdiff,0 )) {
if (Long.$lt(sdiff,0 )) {
var raise=C$.checkScale$java_math_BigInteger$J(fst, (Long.$neg(sdiff)));
rscale=scale2;
fst=C$.bigMultiplyPowerTen$java_math_BigInteger$I(fst, raise);
} else {
var raise=C$.checkScale$java_math_BigInteger$J(snd, sdiff);
snd=C$.bigMultiplyPowerTen$java_math_BigInteger$I(snd, raise);
}}var sum=fst.add$java_math_BigInteger(snd);
return (fst.signum == snd.signum) ? Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[sum, [0,549755813888,-1], rscale, 0]) : C$.valueOf$java_math_BigInteger$I$I(sum, rscale, 0);
}, 1);

Clazz.newMeth(C$, 'bigMultiplyPowerTen$J$I',  function (value, n) {
if (n <= 0) return $I$(1).valueOf$J(value);
return C$.bigTenToThe$I(n).multiply$J(value);
}, 1);

Clazz.newMeth(C$, 'bigMultiplyPowerTen$java_math_BigInteger$I',  function (value, n) {
if (n <= 0) return value;
if (n < C$.LONG_TEN_POWERS_TABLE.length) {
return value.multiply$J(C$.LONG_TEN_POWERS_TABLE[n]);
}return value.multiply$java_math_BigInteger(C$.bigTenToThe$I(n));
}, 1);

Clazz.newMeth(C$, 'divideSmallFastPath$J$I$J$I$J$java_math_MathContext',  function (xs, xscale, ys, yscale, preferredScale, mc) {
var mcp=mc.precision;
var roundingMode=mc.roundingMode.oldMode;
var xraise=yscale - xscale;
var scaledX=(xraise == 0) ? xs : C$.longMultiplyPowerTen$J$I(xs, xraise);
var quotient;
var cmp=C$.longCompareMagnitude$J$J(scaledX, ys);
if (cmp > 0) {
yscale-=1;
var scl=C$.checkScaleNonZero$J(Long.$add(Long.$sub(Long.$add(preferredScale,yscale),xscale),mcp));
if (C$.checkScaleNonZero$J(Long.$sub(Long.$add(mcp,yscale),xscale)) > 0) {
var raise=C$.checkScaleNonZero$J(Long.$sub(Long.$add(mcp,yscale),xscale));
var scaledXs;
if (Long.$eq((scaledXs=C$.longMultiplyPowerTen$J$I(xs, raise)),[0,549755813888,-1] )) {
quotient=null;
if ((mcp - 1) >= 0 && (mcp - 1) < C$.LONG_TEN_POWERS_TABLE.length ) {
quotient=C$.multiplyDivideAndRound$J$J$J$I$I$I(C$.LONG_TEN_POWERS_TABLE[mcp - 1], scaledX, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}if (quotient == null ) {
var rb=C$.bigMultiplyPowerTen$J$I(scaledX, mcp - 1);
quotient=C$.divideAndRound$java_math_BigInteger$J$I$I$I(rb, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}} else {
quotient=C$.divideAndRound$J$J$I$I$I(scaledXs, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}} else {
var newScale=C$.checkScaleNonZero$J(Long.$sub(xscale,mcp));
if (newScale == yscale) {
quotient=C$.divideAndRound$J$J$I$I$I(xs, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
} else {
var raise=C$.checkScaleNonZero$J(Long.$sub(newScale,yscale));
var scaledYs;
if (Long.$eq((scaledYs=C$.longMultiplyPowerTen$J$I(ys, raise)),[0,549755813888,-1] )) {
var rb=C$.bigMultiplyPowerTen$J$I(ys, raise);
quotient=C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I($I$(1).valueOf$J(xs), rb, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
} else {
quotient=C$.divideAndRound$J$J$I$I$I(xs, scaledYs, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}}}} else {
var scl=C$.checkScaleNonZero$J(Long.$add(Long.$sub(Long.$add(preferredScale,yscale),xscale),mcp));
if (cmp == 0) {
quotient=C$.roundedTenPower$I$I$I$I(((Long.$lt(scaledX,0 )) == (Long.$lt(ys,0 )) ) ? 1 : -1, mcp, scl, C$.checkScaleNonZero$J(preferredScale));
} else {
var scaledXs;
if (Long.$eq((scaledXs=C$.longMultiplyPowerTen$J$I(scaledX, mcp)),[0,549755813888,-1] )) {
quotient=null;
if (mcp < C$.LONG_TEN_POWERS_TABLE.length) {
quotient=C$.multiplyDivideAndRound$J$J$J$I$I$I(C$.LONG_TEN_POWERS_TABLE[mcp], scaledX, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}if (quotient == null ) {
var rb=C$.bigMultiplyPowerTen$J$I(scaledX, mcp);
quotient=C$.divideAndRound$java_math_BigInteger$J$I$I$I(rb, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}} else {
quotient=C$.divideAndRound$J$J$I$I$I(scaledXs, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}}}return C$.doRound$java_math_BigDecimal$java_math_MathContext(quotient, mc);
}, 1);

Clazz.newMeth(C$, 'divide$J$I$J$I$J$java_math_MathContext',  function (xs, xscale, ys, yscale, preferredScale, mc) {
var mcp=mc.precision;
if (xscale <= yscale && yscale < 18  && mcp < 18 ) {
return C$.divideSmallFastPath$J$I$J$I$J$java_math_MathContext(xs, xscale, ys, yscale, preferredScale, mc);
}if (C$.compareMagnitudeNormalized$J$I$J$I(xs, xscale, ys, yscale) > 0) {
yscale-=1;
}var roundingMode=mc.roundingMode.oldMode;
var scl=C$.checkScaleNonZero$J(Long.$add(Long.$sub(Long.$add(preferredScale,yscale),xscale),mcp));
var quotient;
if (C$.checkScaleNonZero$J(Long.$sub(Long.$add(mcp,yscale),xscale)) > 0) {
var raise=C$.checkScaleNonZero$J(Long.$sub(Long.$add(mcp,yscale),xscale));
var scaledXs;
if (Long.$eq((scaledXs=C$.longMultiplyPowerTen$J$I(xs, raise)),[0,549755813888,-1] )) {
var rb=C$.bigMultiplyPowerTen$J$I(xs, raise);
quotient=C$.divideAndRound$java_math_BigInteger$J$I$I$I(rb, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
} else {
quotient=C$.divideAndRound$J$J$I$I$I(scaledXs, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}} else {
var newScale=C$.checkScaleNonZero$J(Long.$sub(xscale,mcp));
if (newScale == yscale) {
quotient=C$.divideAndRound$J$J$I$I$I(xs, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
} else {
var raise=C$.checkScaleNonZero$J(Long.$sub(newScale,yscale));
var scaledYs;
if (Long.$eq((scaledYs=C$.longMultiplyPowerTen$J$I(ys, raise)),[0,549755813888,-1] )) {
var rb=C$.bigMultiplyPowerTen$J$I(ys, raise);
quotient=C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I($I$(1).valueOf$J(xs), rb, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
} else {
quotient=C$.divideAndRound$J$J$I$I$I(xs, scaledYs, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}}}return C$.doRound$java_math_BigDecimal$java_math_MathContext(quotient, mc);
}, 1);

Clazz.newMeth(C$, 'divide$java_math_BigInteger$I$J$I$J$java_math_MathContext',  function (xs, xscale, ys, yscale, preferredScale, mc) {
if ((-C$.compareMagnitudeNormalized$J$I$java_math_BigInteger$I(ys, yscale, xs, xscale)) > 0) {
yscale-=1;
}var mcp=mc.precision;
var roundingMode=mc.roundingMode.oldMode;
var quotient;
var scl=C$.checkScaleNonZero$J(Long.$add(Long.$sub(Long.$add(preferredScale,yscale),xscale),mcp));
if (C$.checkScaleNonZero$J(Long.$sub(Long.$add(mcp,yscale),xscale)) > 0) {
var raise=C$.checkScaleNonZero$J(Long.$sub(Long.$add(mcp,yscale),xscale));
var rb=C$.bigMultiplyPowerTen$java_math_BigInteger$I(xs, raise);
quotient=C$.divideAndRound$java_math_BigInteger$J$I$I$I(rb, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
} else {
var newScale=C$.checkScaleNonZero$J(Long.$sub(xscale,mcp));
if (newScale == yscale) {
quotient=C$.divideAndRound$java_math_BigInteger$J$I$I$I(xs, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
} else {
var raise=C$.checkScaleNonZero$J(Long.$sub(newScale,yscale));
var scaledYs;
if (Long.$eq((scaledYs=C$.longMultiplyPowerTen$J$I(ys, raise)),[0,549755813888,-1] )) {
var rb=C$.bigMultiplyPowerTen$J$I(ys, raise);
quotient=C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I(xs, rb, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
} else {
quotient=C$.divideAndRound$java_math_BigInteger$J$I$I$I(xs, scaledYs, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}}}return C$.doRound$java_math_BigDecimal$java_math_MathContext(quotient, mc);
}, 1);

Clazz.newMeth(C$, 'divide$J$I$java_math_BigInteger$I$J$java_math_MathContext',  function (xs, xscale, ys, yscale, preferredScale, mc) {
if (C$.compareMagnitudeNormalized$J$I$java_math_BigInteger$I(xs, xscale, ys, yscale) > 0) {
yscale-=1;
}var mcp=mc.precision;
var roundingMode=mc.roundingMode.oldMode;
var quotient;
var scl=C$.checkScaleNonZero$J(Long.$add(Long.$sub(Long.$add(preferredScale,yscale),xscale),mcp));
if (C$.checkScaleNonZero$J(Long.$sub(Long.$add(mcp,yscale),xscale)) > 0) {
var raise=C$.checkScaleNonZero$J(Long.$sub(Long.$add(mcp,yscale),xscale));
var rb=C$.bigMultiplyPowerTen$J$I(xs, raise);
quotient=C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I(rb, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
} else {
var newScale=C$.checkScaleNonZero$J(Long.$sub(xscale,mcp));
var raise=C$.checkScaleNonZero$J(Long.$sub(newScale,yscale));
var rb=C$.bigMultiplyPowerTen$java_math_BigInteger$I(ys, raise);
quotient=C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I($I$(1).valueOf$J(xs), rb, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}return C$.doRound$java_math_BigDecimal$java_math_MathContext(quotient, mc);
}, 1);

Clazz.newMeth(C$, 'divide$java_math_BigInteger$I$java_math_BigInteger$I$J$java_math_MathContext',  function (xs, xscale, ys, yscale, preferredScale, mc) {
if (C$.compareMagnitudeNormalized$java_math_BigInteger$I$java_math_BigInteger$I(xs, xscale, ys, yscale) > 0) {
yscale-=1;
}var mcp=mc.precision;
var roundingMode=mc.roundingMode.oldMode;
var quotient;
var scl=C$.checkScaleNonZero$J(Long.$add(Long.$sub(Long.$add(preferredScale,yscale),xscale),mcp));
if (C$.checkScaleNonZero$J(Long.$sub(Long.$add(mcp,yscale),xscale)) > 0) {
var raise=C$.checkScaleNonZero$J(Long.$sub(Long.$add(mcp,yscale),xscale));
var rb=C$.bigMultiplyPowerTen$java_math_BigInteger$I(xs, raise);
quotient=C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I(rb, ys, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
} else {
var newScale=C$.checkScaleNonZero$J(Long.$sub(xscale,mcp));
var raise=C$.checkScaleNonZero$J(Long.$sub(newScale,yscale));
var rb=C$.bigMultiplyPowerTen$java_math_BigInteger$I(ys, raise);
quotient=C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I(xs, rb, scl, roundingMode, C$.checkScaleNonZero$J(preferredScale));
}return C$.doRound$java_math_BigDecimal$java_math_MathContext(quotient, mc);
}, 1);

Clazz.newMeth(C$, 'multiplyDivideAndRound$J$J$J$I$I$I',  function (dividend0, dividend1, divisor, scale, roundingMode, preferredScale) {
var qsign=Long.signum$J(dividend0) * Long.signum$J(dividend1) * Long.signum$J(divisor) ;
dividend0=Math.abs$J(dividend0);
dividend1=Math.abs$J(dividend1);
divisor=Math.abs$J(divisor);
var d0_hi=Long.$usr(dividend0,32);
var d0_lo=Long.$and(dividend0,4294967295);
var d1_hi=Long.$usr(dividend1,32);
var d1_lo=Long.$and(dividend1,4294967295);
var product=Long.$mul(d0_lo,d1_lo);
var d0=Long.$and(product,4294967295);
var d1=Long.$usr(product,32);
product=Long.$add(Long.$mul(d0_hi,d1_lo),d1);
d1=Long.$and(product,4294967295);
var d2=Long.$usr(product,32);
product=Long.$add(Long.$mul(d0_lo,d1_hi),d1);
d1=Long.$and(product,4294967295);
(d2=Long.$add(d2,(Long.$usr(product,32))));
var d3=Long.$usr(d2,32);
(d2=Long.$and(d2,(4294967295)));
product=Long.$add(Long.$mul(d0_hi,d1_hi),d2);
d2=Long.$and(product,4294967295);
d3=Long.$and((Long.$add((Long.$usr(product,32)),d3)),4294967295);
var dividendHi=C$.make64$J$J(d3, d2);
var dividendLo=C$.make64$J$J(d1, d0);
return C$.divideAndRound128$J$J$J$I$I$I$I(dividendHi, dividendLo, divisor, qsign, scale, roundingMode, preferredScale);
}, 1);

Clazz.newMeth(C$, 'divideAndRound128$J$J$J$I$I$I$I',  function (dividendHi, dividendLo, divisor, sign, scale, roundingMode, preferredScale) {
if (Long.$ge(dividendHi,divisor )) {
return null;
}var shift=Long.numberOfLeadingZeros$J(divisor);
(divisor=Long.$sl(divisor,(shift)));
var v1=Long.$usr(divisor,32);
var v0=Long.$and(divisor,4294967295);
var tmp=Long.$sl(dividendLo,shift);
var u1=Long.$usr(tmp,32);
var u0=Long.$and(tmp,4294967295);
tmp=Long.$or((Long.$sl(dividendHi,shift)),(Long.$usr(dividendLo,64 - shift)));
var u2=Long.$and(tmp,4294967295);
var q1;
var r_tmp;
if (Long.$eq(v1,1 )) {
q1=tmp;
r_tmp=0;
} else if (Long.$ge(tmp,0 )) {
q1=Long.$div(tmp,v1);
r_tmp=Long.$sub(tmp,Long.$mul(q1,v1));
} else {
var rq=C$.divRemNegativeLong$J$J(tmp, v1);
q1=rq[1];
r_tmp=rq[0];
}while (Long.$ge(q1,4294967296 ) || C$.unsignedLongCompare$J$J(Long.$mul(q1,v0), C$.make64$J$J(r_tmp, u1)) ){
(q1=Long.$inc(q1,-1));
(r_tmp=Long.$add(r_tmp,(v1)));
if (Long.$ge(r_tmp,4294967296 )) break;
}
tmp=C$.mulsub$J$J$J$J$J(u2, u1, v1, v0, q1);
u1=Long.$and(tmp,4294967295);
var q0;
if (Long.$eq(v1,1 )) {
q0=tmp;
r_tmp=0;
} else if (Long.$ge(tmp,0 )) {
q0=Long.$div(tmp,v1);
r_tmp=Long.$sub(tmp,Long.$mul(q0,v1));
} else {
var rq=C$.divRemNegativeLong$J$J(tmp, v1);
q0=rq[1];
r_tmp=rq[0];
}while (Long.$ge(q0,4294967296 ) || C$.unsignedLongCompare$J$J(Long.$mul(q0,v0), C$.make64$J$J(r_tmp, u0)) ){
(q0=Long.$inc(q0,-1));
(r_tmp=Long.$add(r_tmp,(v1)));
if (Long.$ge(r_tmp,4294967296 )) break;
}
if (Long.$ival(q1) < 0) {
var mq=Clazz.new_([Clazz.array(Integer.TYPE, -1, [Long.$ival(q1), Long.$ival(q0)])],$I$(14,1).c$$IA);
if (roundingMode == 1 && scale == preferredScale ) {
return mq.toBigDecimal$I$I(sign, scale);
}var r=Long.$usr(C$.mulsub$J$J$J$J$J(u1, u0, v1, v0, q0),shift);
if (Long.$ne(r,0 )) {
if (C$.needIncrement$J$I$I$java_math_MutableBigInteger$J(Long.$usr(divisor,shift), roundingMode, sign, mq, r)) {
mq.add$java_math_MutableBigInteger($I$(14).ONE);
}return mq.toBigDecimal$I$I(sign, scale);
} else {
if (preferredScale != scale) {
var intVal=mq.toBigInteger$I(sign);
return C$.createAndStripZerosToMatchScale$java_math_BigInteger$I$J(intVal, scale, preferredScale);
} else {
return mq.toBigDecimal$I$I(sign, scale);
}}}var q=C$.make64$J$J(q1, q0);
(q=Long.$mul(q,(sign)));
if (roundingMode == 1 && scale == preferredScale ) return C$.valueOf$J$I(q, scale);
var r=Long.$usr(C$.mulsub$J$J$J$J$J(u1, u0, v1, v0, q0),shift);
if (Long.$ne(r,0 )) {
var increment=C$.needIncrement$J$I$I$J$J(Long.$usr(divisor,shift), roundingMode, sign, q, r);
return C$.valueOf$J$I((increment ? Long.$add(q,sign) : q), scale);
} else {
if (preferredScale != scale) {
return C$.createAndStripZerosToMatchScale$J$I$J(q, scale, preferredScale);
} else {
return C$.valueOf$J$I(q, scale);
}}}, 1);

Clazz.newMeth(C$, 'roundedTenPower$I$I$I$I',  function (qsign, raise, scale, preferredScale) {
if (scale > preferredScale) {
var diff=scale - preferredScale;
if (diff < raise) {
return C$.scaledTenPow$I$I$I(raise - diff, qsign, preferredScale);
} else {
return C$.valueOf$J$I(qsign, scale - raise);
}} else {
return C$.scaledTenPow$I$I$I(raise, qsign, scale);
}}, 1);

Clazz.newMeth(C$, 'scaledTenPow$I$I$I',  function (n, sign, scale) {
if (n < C$.LONG_TEN_POWERS_TABLE.length) return C$.valueOf$J$I(Long.$mul(sign,C$.LONG_TEN_POWERS_TABLE[n]), scale);
 else {
var unscaledVal=C$.bigTenToThe$I(n);
if (sign == -1) {
unscaledVal=unscaledVal.negate$();
}return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[unscaledVal, [0,549755813888,-1], scale, n + 1]);
}}, 1);

Clazz.newMeth(C$, 'divRemNegativeLong$J$J',  function (n, d) {
var q=Long.$div((Long.$usr(n,1)),(Long.$usr(d,1)));
var r=Long.$sub(n,Long.$mul(q,d));
while (Long.$lt(r,0 )){
(r=Long.$add(r,(d)));
(q=Long.$inc(q,-1));
}
while (Long.$ge(r,d )){
(r=Long.$sub(r,(d)));
(q=Long.$inc(q,1));
}
return Clazz.array(Long.TYPE, -1, [r, q]);
}, 1);

Clazz.newMeth(C$, 'make64$J$J',  function (hi, lo) {
return Long.$or(Long.$sl(hi,32),lo);
}, 1);

Clazz.newMeth(C$, 'mulsub$J$J$J$J$J',  function (u1, u0, v1, v0, q0) {
var tmp=Long.$sub(u0,Long.$mul(q0,v0));
return C$.make64$J$J(Long.$sub(Long.$add(u1,(Long.$usr(tmp,32))),Long.$mul(q0,v1)), Long.$and(tmp,4294967295));
}, 1);

Clazz.newMeth(C$, 'unsignedLongCompare$J$J',  function (one, two) {
return Long.$gt((Long.$add(one,[0,549755813888,-1])),(Long.$add(two,[0,549755813888,-1])) );
}, 1);

Clazz.newMeth(C$, 'unsignedLongCompareEq$J$J',  function (one, two) {
return Long.$ge((Long.$add(one,[0,549755813888,-1])),(Long.$add(two,[0,549755813888,-1])) );
}, 1);

Clazz.newMeth(C$, 'compareMagnitudeNormalized$J$I$J$I',  function (xs, xscale, ys, yscale) {
var sdiff=xscale - yscale;
if (sdiff != 0) {
if (sdiff < 0) {
xs=C$.longMultiplyPowerTen$J$I(xs, -sdiff);
} else {
ys=C$.longMultiplyPowerTen$J$I(ys, sdiff);
}}if (Long.$ne(xs,[0,549755813888,-1] )) return (Long.$ne(ys,[0,549755813888,-1] )) ? C$.longCompareMagnitude$J$J(xs, ys) : -1;
 else return 1;
}, 1);

Clazz.newMeth(C$, 'compareMagnitudeNormalized$J$I$java_math_BigInteger$I',  function (xs, xscale, ys, yscale) {
if (Long.$eq(xs,0 )) return -1;
var sdiff=xscale - yscale;
if (sdiff < 0) {
if (Long.$eq(C$.longMultiplyPowerTen$J$I(xs, -sdiff),[0,549755813888,-1] )) {
return C$.bigMultiplyPowerTen$J$I(xs, -sdiff).compareMagnitude$java_math_BigInteger(ys);
}}return -1;
}, 1);

Clazz.newMeth(C$, 'compareMagnitudeNormalized$java_math_BigInteger$I$java_math_BigInteger$I',  function (xs, xscale, ys, yscale) {
var sdiff=xscale - yscale;
if (sdiff < 0) {
return C$.bigMultiplyPowerTen$java_math_BigInteger$I(xs, -sdiff).compareMagnitude$java_math_BigInteger(ys);
} else {
return xs.compareMagnitude$java_math_BigInteger(C$.bigMultiplyPowerTen$java_math_BigInteger$I(ys, sdiff));
}}, 1);

Clazz.newMeth(C$, 'multiply$J$J',  function (x, y) {
var product=Long.$mul(x,y);
var ax=Math.abs$J(x);
var ay=Math.abs$J(y);
if ((Long.$eq(Long.$usr((Long.$or(ax,ay)),31),0 )) || (Long.$eq(y,0 )) || (Long.$eq(Long.$div(product,y),x ))  ) {
return product;
}return [0,549755813888,-1];
}, 1);

Clazz.newMeth(C$, 'multiply$J$J$I',  function (x, y, scale) {
var product=C$.multiply$J$J(x, y);
if (Long.$ne(product,[0,549755813888,-1] )) {
return C$.valueOf$J$I(product, scale);
}return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).valueOf$J(x).multiply$J(y), [0,549755813888,-1], scale, 0]);
}, 1);

Clazz.newMeth(C$, 'multiply$J$java_math_BigInteger$I',  function (x, y, scale) {
if (Long.$eq(x,0 )) {
return C$.zeroValueOf$I(scale);
}return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[y.multiply$J(x), [0,549755813888,-1], scale, 0]);
}, 1);

Clazz.newMeth(C$, 'multiply$java_math_BigInteger$java_math_BigInteger$I',  function (x, y, scale) {
return Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[x.multiply$java_math_BigInteger(y), [0,549755813888,-1], scale, 0]);
}, 1);

Clazz.newMeth(C$, 'multiplyAndRound$J$J$I$java_math_MathContext',  function (x, y, scale, mc) {
var product=C$.multiply$J$J(x, y);
if (Long.$ne(product,[0,549755813888,-1] )) {
return C$.doRound$J$I$java_math_MathContext(product, scale, mc);
}var rsign=1;
if (Long.$lt(x,0 )) {
x=(Long.$neg(x));
rsign=-1;
}if (Long.$lt(y,0 )) {
y=(Long.$neg(y));
rsign*=-1;
}var m0_hi=Long.$usr(x,32);
var m0_lo=Long.$and(x,4294967295);
var m1_hi=Long.$usr(y,32);
var m1_lo=Long.$and(y,4294967295);
product=Long.$mul(m0_lo,m1_lo);
var m0=Long.$and(product,4294967295);
var m1=Long.$usr(product,32);
product=Long.$add(Long.$mul(m0_hi,m1_lo),m1);
m1=Long.$and(product,4294967295);
var m2=Long.$usr(product,32);
product=Long.$add(Long.$mul(m0_lo,m1_hi),m1);
m1=Long.$and(product,4294967295);
(m2=Long.$add(m2,(Long.$usr(product,32))));
var m3=Long.$usr(m2,32);
(m2=Long.$and(m2,(4294967295)));
product=Long.$add(Long.$mul(m0_hi,m1_hi),m2);
m2=Long.$and(product,4294967295);
m3=Long.$and((Long.$add((Long.$usr(product,32)),m3)),4294967295);
var mHi=C$.make64$J$J(m3, m2);
var mLo=C$.make64$J$J(m1, m0);
var res=C$.doRound128$J$J$I$I$java_math_MathContext(mHi, mLo, rsign, scale, mc);
if (res != null ) {
return res;
}res=Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).valueOf$J(x).multiply$J(Long.$mul(y,rsign)), [0,549755813888,-1], scale, 0]);
return C$.doRound$java_math_BigDecimal$java_math_MathContext(res, mc);
}, 1);

Clazz.newMeth(C$, 'multiplyAndRound$J$java_math_BigInteger$I$java_math_MathContext',  function (x, y, scale, mc) {
if (Long.$eq(x,0 )) {
return C$.zeroValueOf$I(scale);
}return C$.doRound$java_math_BigInteger$I$java_math_MathContext(y.multiply$J(x), scale, mc);
}, 1);

Clazz.newMeth(C$, 'multiplyAndRound$java_math_BigInteger$java_math_BigInteger$I$java_math_MathContext',  function (x, y, scale, mc) {
return C$.doRound$java_math_BigInteger$I$java_math_MathContext(x.multiply$java_math_BigInteger(y), scale, mc);
}, 1);

Clazz.newMeth(C$, 'doRound128$J$J$I$I$java_math_MathContext',  function (hi, lo, sign, scale, mc) {
var mcp=mc.precision;
var drop;
var res=null;
if (((drop=C$.precision$J$J(hi, lo) - mcp) > 0) && (drop < C$.LONG_TEN_POWERS_TABLE.length) ) {
scale=C$.checkScaleNonZero$J(Long.$sub(scale,drop));
res=C$.divideAndRound128$J$J$J$I$I$I$I(hi, lo, C$.LONG_TEN_POWERS_TABLE[drop], sign, scale, mc.roundingMode.oldMode, scale);
}if (res != null ) {
return C$.doRound$java_math_BigDecimal$java_math_MathContext(res, mc);
}return null;
}, 1);

Clazz.newMeth(C$, 'precision$J$J',  function (hi, lo) {
if (Long.$eq(hi,0 )) {
if (Long.$ge(lo,0 )) {
return C$.longDigitLength$J(lo);
}return (C$.unsignedLongCompareEq$J$J(lo, C$.LONGLONG_TEN_POWERS_TABLE[0][1])) ? 20 : 19;
}var r=((128 - Long.numberOfLeadingZeros$J(hi) + 1) * 1233) >>> 12;
var idx=r - 19;
return (idx >= C$.LONGLONG_TEN_POWERS_TABLE.length || C$.longLongCompareMagnitude$J$J$J$J(hi, lo, C$.LONGLONG_TEN_POWERS_TABLE[idx][0], C$.LONGLONG_TEN_POWERS_TABLE[idx][1]) ) ? r : r + 1;
}, 1);

Clazz.newMeth(C$, 'longLongCompareMagnitude$J$J$J$J',  function (hi0, lo0, hi1, lo1) {
if (Long.$ne(hi0,hi1 )) {
return Long.$lt(hi0,hi1 );
}return Long.$lt((Long.$add(lo0,[0,549755813888,-1])),(Long.$add(lo1,[0,549755813888,-1])) );
}, 1);

Clazz.newMeth(C$, 'divide$J$I$J$I$I$I',  function (dividend, dividendScale, divisor, divisorScale, scale, roundingMode) {
if (C$.checkScale$J$J(dividend, Long.$add(scale,divisorScale)) > dividendScale) {
var newScale=scale + divisorScale;
var raise=newScale - dividendScale;
if (raise < C$.LONG_TEN_POWERS_TABLE.length) {
var xs=dividend;
if (Long.$ne((xs=C$.longMultiplyPowerTen$J$I(xs, raise)),[0,549755813888,-1] )) {
return C$.divideAndRound$J$J$I$I$I(xs, divisor, scale, roundingMode, scale);
}var q=C$.multiplyDivideAndRound$J$J$J$I$I$I(C$.LONG_TEN_POWERS_TABLE[raise], dividend, divisor, scale, roundingMode, scale);
if (q != null ) {
return q;
}}var scaledDividend=C$.bigMultiplyPowerTen$J$I(dividend, raise);
return C$.divideAndRound$java_math_BigInteger$J$I$I$I(scaledDividend, divisor, scale, roundingMode, scale);
} else {
var newScale=C$.checkScale$J$J(divisor, Long.$sub(dividendScale,scale));
var raise=newScale - divisorScale;
if (raise < C$.LONG_TEN_POWERS_TABLE.length) {
var ys=divisor;
if (Long.$ne((ys=C$.longMultiplyPowerTen$J$I(ys, raise)),[0,549755813888,-1] )) {
return C$.divideAndRound$J$J$I$I$I(dividend, ys, scale, roundingMode, scale);
}}var scaledDivisor=C$.bigMultiplyPowerTen$J$I(divisor, raise);
return C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I($I$(1).valueOf$J(dividend), scaledDivisor, scale, roundingMode, scale);
}}, 1);

Clazz.newMeth(C$, 'divide$java_math_BigInteger$I$J$I$I$I',  function (dividend, dividendScale, divisor, divisorScale, scale, roundingMode) {
if (C$.checkScale$java_math_BigInteger$J(dividend, Long.$add(scale,divisorScale)) > dividendScale) {
var newScale=scale + divisorScale;
var raise=newScale - dividendScale;
var scaledDividend=C$.bigMultiplyPowerTen$java_math_BigInteger$I(dividend, raise);
return C$.divideAndRound$java_math_BigInteger$J$I$I$I(scaledDividend, divisor, scale, roundingMode, scale);
} else {
var newScale=C$.checkScale$J$J(divisor, Long.$sub(dividendScale,scale));
var raise=newScale - divisorScale;
if (raise < C$.LONG_TEN_POWERS_TABLE.length) {
var ys=divisor;
if (Long.$ne((ys=C$.longMultiplyPowerTen$J$I(ys, raise)),[0,549755813888,-1] )) {
return C$.divideAndRound$java_math_BigInteger$J$I$I$I(dividend, ys, scale, roundingMode, scale);
}}var scaledDivisor=C$.bigMultiplyPowerTen$J$I(divisor, raise);
return C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I(dividend, scaledDivisor, scale, roundingMode, scale);
}}, 1);

Clazz.newMeth(C$, 'divide$J$I$java_math_BigInteger$I$I$I',  function (dividend, dividendScale, divisor, divisorScale, scale, roundingMode) {
if (C$.checkScale$J$J(dividend, Long.$add(scale,divisorScale)) > dividendScale) {
var newScale=scale + divisorScale;
var raise=newScale - dividendScale;
var scaledDividend=C$.bigMultiplyPowerTen$J$I(dividend, raise);
return C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I(scaledDividend, divisor, scale, roundingMode, scale);
} else {
var newScale=C$.checkScale$java_math_BigInteger$J(divisor, Long.$sub(dividendScale,scale));
var raise=newScale - divisorScale;
var scaledDivisor=C$.bigMultiplyPowerTen$java_math_BigInteger$I(divisor, raise);
return C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I($I$(1).valueOf$J(dividend), scaledDivisor, scale, roundingMode, scale);
}}, 1);

Clazz.newMeth(C$, 'divide$java_math_BigInteger$I$java_math_BigInteger$I$I$I',  function (dividend, dividendScale, divisor, divisorScale, scale, roundingMode) {
if (C$.checkScale$java_math_BigInteger$J(dividend, Long.$add(scale,divisorScale)) > dividendScale) {
var newScale=scale + divisorScale;
var raise=newScale - dividendScale;
var scaledDividend=C$.bigMultiplyPowerTen$java_math_BigInteger$I(dividend, raise);
return C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I(scaledDividend, divisor, scale, roundingMode, scale);
} else {
var newScale=C$.checkScale$java_math_BigInteger$J(divisor, Long.$sub(dividendScale,scale));
var raise=newScale - divisorScale;
var scaledDivisor=C$.bigMultiplyPowerTen$java_math_BigInteger$I(divisor, raise);
return C$.divideAndRound$java_math_BigInteger$java_math_BigInteger$I$I$I(dividend, scaledDivisor, scale, roundingMode, scale);
}}, 1);

C$.$static$=function(){C$.$static$=0;
C$.INFLATED_BIGINT=$I$(1).valueOf$J([0,549755813888,-1]);
C$.threadLocalStringBuilderHelper=((P$.BigDecimal$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "BigDecimal$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('ThreadLocal'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'initialValue$',  function () {
return Clazz.new_($I$(6,1));
});
})()
), Clazz.new_($I$(7,1),[this, null],P$.BigDecimal$1));
C$.zeroThroughTen=Clazz.array(C$, -1, [Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 0, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ONE, 1, 0, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).valueOf$J(2), 2, 0, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).valueOf$J(3), 3, 0, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).valueOf$J(4), 4, 0, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).valueOf$J(5), 5, 0, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).valueOf$J(6), 6, 0, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).valueOf$J(7), 7, 0, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).valueOf$J(8), 8, 0, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).valueOf$J(9), 9, 0, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).TEN, 10, 0, 2])]);
C$.ZERO_SCALED_BY=Clazz.array(C$, -1, [C$.zeroThroughTen[0], Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 1, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 2, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 3, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 4, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 5, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 6, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 7, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 8, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 9, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 10, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 11, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 12, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 13, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 14, 1]), Clazz.new_(C$.c$$java_math_BigInteger$J$I$I,[$I$(1).ZERO, 0, 15, 1])]);
C$.ZERO=C$.zeroThroughTen[0];
C$.ONE=C$.zeroThroughTen[1];
C$.TEN=C$.zeroThroughTen[10];
C$.double10pow=Clazz.array(Double.TYPE, -1, [1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, 1.0E7, 1.0E8, 1.0E9, 1.0E10, 1.0E11, 1.0E12, 1.0E13, 1.0E14, 1.0E15, 1.0E16, 1.0E17, 1.0E18, 1.0E19, 1.0E20, 1.0E21, 1.0E22]);
C$.float10pow=Clazz.array(Float.TYPE, -1, [1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, 1.0E7, 1.0E8, 1.0E9, 1.0E10]);
C$.LONG_TEN_POWERS_TABLE=Clazz.array(Long.TYPE, -1, [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 10000000000, 100000000000, 1000000000000, 10000000000000, 100000000000000, 1000000000000000, [12648448,596046447,1], [9043968,5960464477,1], [6553600,59604644775,1]]);
C$.BIG_TEN_POWERS_TABLE=Clazz.array($I$(1), -1, [$I$(1).ONE, $I$(1).valueOf$J(10), $I$(1).valueOf$J(100), $I$(1).valueOf$J(1000), $I$(1).valueOf$J(10000), $I$(1).valueOf$J(100000), $I$(1).valueOf$J(1000000), $I$(1).valueOf$J(10000000), $I$(1).valueOf$J(100000000), $I$(1).valueOf$J(1000000000), $I$(1).valueOf$J(10000000000), $I$(1).valueOf$J(100000000000), $I$(1).valueOf$J(1000000000000), $I$(1).valueOf$J(10000000000000), $I$(1).valueOf$J(100000000000000), $I$(1).valueOf$J(1000000000000000), $I$(1).valueOf$J([12648448,596046447,1]), $I$(1).valueOf$J([9043968,5960464477,1]), $I$(1).valueOf$J([6553600,59604644775,1])]);
C$.BIG_TEN_POWERS_TABLE_INITLEN=C$.BIG_TEN_POWERS_TABLE.length;
C$.BIG_TEN_POWERS_TABLE_MAX=16 * C$.BIG_TEN_POWERS_TABLE_INITLEN;
C$.THRESHOLDS_TABLE=Clazz.array(Long.TYPE, -1, [[16777215,549755813887,1], [13421772,54975581388,1], [14763950,5497558138,1], [14898167,549755813,1], 922337203685477, 92233720368547, 9223372036854, 922337203685, 92233720368, 9223372036, 922337203, 92233720, 9223372, 922337, 92233, 9223, 922, 92, 9]);
C$.LONGLONG_TEN_POWERS_TABLE=Clazz.array(Long.TYPE, -2, [Clazz.array(Long.TYPE, -1, [0, [1572864,503465180022,-1]]), Clazz.array(Long.TYPE, -1, [5, [1048576,462906338659,1]]), Clazz.array(Long.TYPE, -1, [54, [10485760,231016875486,1]]), Clazz.array(Long.TYPE, -1, [542, [4194304,111145499314,1]]), Clazz.array(Long.TYPE, -1, [5421, [8388608,11943365366,1]]), Clazz.array(Long.TYPE, -1, [54210, [0,119433653665,1]]), Clazz.array(Long.TYPE, -1, [542101, [0,94824908874,1]]), Clazz.array(Long.TYPE, -1, [5421010, [0,151262539036,-1]]), Clazz.array(Long.TYPE, -1, [54210108, [0,413113762584,-1]]), Clazz.array(Long.TYPE, -1, [542101086, [0,266908885264,1]]), Clazz.array(Long.TYPE, -1, [5421010862, [0,470065597088,1]]), Clazz.array(Long.TYPE, -1, [54210108624, [0,302609459776,1]]), Clazz.array(Long.TYPE, -1, [542101086242, [0,272440285568,-1]]), Clazz.array(Long.TYPE, -1, [5421010862427, [0,525379600128,-1]]), Clazz.array(Long.TYPE, -1, [54210108624275, [0,243762137600,1]]), Clazz.array(Long.TYPE, -1, [542101086242752, [0,238598120448,1]]), Clazz.array(Long.TYPE, -1, [5421010862427522, [0,186957948928,1]]), Clazz.array(Long.TYPE, -1, [[13174549,3231174267,1], [0,329443766272,-1]]), Clazz.array(Long.TYPE, -1, [[14304985,32311742677,1], [0,4097220608,1]]), Clazz.array(Long.TYPE, -1, [[8832122,323117426778,1], [0,40972206080,1]])]);
};
var $s$ = new Int16Array(1);
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.BigDecimal, "LongOverflow", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['LONGMIN','java.math.BigInteger','+LONGMAX']]]

Clazz.newMeth(C$, 'check$java_math_BigDecimal',  function (num) {
var intVal=p$1.inflated.apply(num, []);
if (intVal.compareTo$java_math_BigInteger(C$.LONGMIN) < 0 || intVal.compareTo$java_math_BigInteger(C$.LONGMAX) > 0 ) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Overflow"]);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.LONGMIN=$I$(1).valueOf$J([0,549755813888,-1]);
C$.LONGMAX=$I$(1).valueOf$J([16777215,549755813887,1]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BigDecimal, "StringBuilderHelper", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['sb','StringBuilder','cmpCharArray','char[]']]
,['O',['DIGIT_TENS','char[]','+DIGIT_ONES']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.sb=Clazz.new_($I$(2,1));
this.cmpCharArray=Clazz.array(Character.TYPE, [19]);
}, 1);

Clazz.newMeth(C$, 'getStringBuilder$',  function () {
this.sb.setLength$I(0);
return this.sb;
});

Clazz.newMeth(C$, 'getCompactCharArray$',  function () {
return this.cmpCharArray;
});

Clazz.newMeth(C$, 'putIntCompact$J',  function (intCompact) {
var s=Long.toString$J$I(intCompact, 10);
var charPos=this.cmpCharArray.length;
for (var i=s.length$(); --i >= 0; ) {
this.cmpCharArray[--charPos]=s.charAt$I(i);
}
return charPos;
});

C$.$static$=function(){C$.$static$=0;
C$.DIGIT_TENS=Clazz.array(Character.TYPE, -1, ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "3", "3", "3", "3", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "7", "7", "7", "7", "7", "7", "7", "7", "7", "7", "8", "8", "8", "8", "8", "8", "8", "8", "8", "8", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9"]);
C$.DIGIT_ONES=Clazz.array(Character.TYPE, -1, ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BigDecimal, "UnsafeHolder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['J',['intCompactOffset','intValOffset'],'O',['unsafe','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'setIntCompactVolatile$java_math_BigDecimal$J',  function (bd, val) {
C$.unsafe.putLongVolatile$O$J$J(bd, C$.intCompactOffset, val);
}, 1);

Clazz.newMeth(C$, 'setIntValVolatile$java_math_BigDecimal$java_math_BigInteger',  function (bd, val) {
C$.unsafe.putObjectVolatile$O$J$O(bd, C$.intValOffset, val);
}, 1);

C$.$static$=function(){C$.$static$=0;
{
try {
C$.unsafe=$I$(3).getUnsafe$();
C$.intCompactOffset=C$.unsafe.objectFieldOffset$java_lang_reflect_Field(Clazz.getClass($I$(4)).getDeclaredField$S("intCompact"));
C$.intValOffset=C$.unsafe.objectFieldOffset$java_lang_reflect_Field(Clazz.getClass($I$(4)).getDeclaredField$S("intVal"));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
throw Clazz.new_($I$(5,1).c$$Throwable,[ex]);
} else {
throw ex;
}
}
};
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:18 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
