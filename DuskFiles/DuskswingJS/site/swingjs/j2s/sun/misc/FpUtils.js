(function(){var P$=Clazz.newPackage("sun.misc"),I$=[[0,'StrictMath']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FpUtils");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getExponent$D',  function (d) {
return Math.getExponent$D(d);
}, 1);

Clazz.newMeth(C$, 'getExponent$F',  function (f) {
return Math.getExponent$F(f);
}, 1);

Clazz.newMeth(C$, 'rawCopySign$D$D',  function (magnitude, sign) {
return Math.copySign(magnitude, sign);
}, 1);

Clazz.newMeth(C$, 'rawCopySign$F$F',  function (magnitude, sign) {
return Math.copySign(magnitude, sign);
}, 1);

Clazz.newMeth(C$, 'isFinite$D',  function (d) {
return Double.isFinite$D(d);
}, 1);

Clazz.newMeth(C$, 'isFinite$F',  function (f) {
return Float.isFinite$F(f);
}, 1);

Clazz.newMeth(C$, 'isInfinite$D',  function (d) {
return Double.isInfinite$D(d);
}, 1);

Clazz.newMeth(C$, 'isInfinite$F',  function (f) {
return Float.isInfinite$F(f);
}, 1);

Clazz.newMeth(C$, 'isNaN$D',  function (d) {
return Double.isNaN$D(d);
}, 1);

Clazz.newMeth(C$, 'isNaN$F',  function (f) {
return Float.isNaN$F(f);
}, 1);

Clazz.newMeth(C$, 'isUnordered$D$D',  function (arg1, arg2) {
return C$.isNaN$D(arg1) || C$.isNaN$D(arg2) ;
}, 1);

Clazz.newMeth(C$, 'isUnordered$F$F',  function (arg1, arg2) {
return C$.isNaN$F(arg1) || C$.isNaN$F(arg2) ;
}, 1);

Clazz.newMeth(C$, 'ilogb$D',  function (d) {
var exponent=C$.getExponent$D(d);
switch (exponent) {
case 1024:
if (C$.isNaN$D(d)) return (1073741824);
 else return (268435456);
case -1023:
if (d == 0.0 ) {
return -(268435456);
} else {
var transducer=Double.doubleToRawLongBits$D(d);
(transducer=Long.$and(transducer,(4503599627370495)));
Clazz.assert(C$, this, function(){return (Long.$ne(transducer,0 ))});
while (Long.$lt(transducer,(4503599627370496) )){
(transducer=Long.$mul(transducer,(2)));
--exponent;
}
++exponent;
Clazz.assert(C$, this, function(){return (exponent >= -1074 && exponent < -1022 )});
return exponent;
}default:
Clazz.assert(C$, this, function(){return (exponent >= -1022 && exponent <= 1023 )});
return exponent;
}
}, 1);

Clazz.newMeth(C$, 'ilogb$F',  function (f) {
var exponent=C$.getExponent$F(f);
switch (exponent) {
case 128:
if (C$.isNaN$F(f)) return (1073741824);
 else return (268435456);
case -127:
if (f == 0.0 ) {
return -(268435456);
} else {
var transducer=Float.floatToRawIntBits$F(f);
transducer&=8388607;
Clazz.assert(C$, this, function(){return (transducer != 0)});
while (transducer < (8388608)){
transducer*=2;
--exponent;
}
++exponent;
Clazz.assert(C$, this, function(){return (exponent >= -149 && exponent < -126 )});
return exponent;
}default:
Clazz.assert(C$, this, function(){return (exponent >= -126 && exponent <= 127 )});
return exponent;
}
}, 1);

Clazz.newMeth(C$, 'scalb$D$I',  function (d, scale_factor) {
return Math.scalb(d, scale_factor);
}, 1);

Clazz.newMeth(C$, 'scalb$F$I',  function (f, scale_factor) {
return Math.scalb(f, scale_factor);
}, 1);

Clazz.newMeth(C$, 'nextAfter$D$D',  function (start, direction) {
return Math.nextAfter$D$D(start, direction);
}, 1);

Clazz.newMeth(C$, 'nextAfter$F$D',  function (start, direction) {
return Math.nextAfter$F$D(start, direction);
}, 1);

Clazz.newMeth(C$, 'nextUp$D',  function (d) {
return Math.nextUp$D(d);
}, 1);

Clazz.newMeth(C$, 'nextUp$F',  function (f) {
return Math.nextUp$F(f);
}, 1);

Clazz.newMeth(C$, 'nextDown$D',  function (d) {
return Math.nextDown$D(d);
}, 1);

Clazz.newMeth(C$, 'nextDown$F',  function (f) {
return Math.nextDown$F(f);
}, 1);

Clazz.newMeth(C$, 'copySign$D$D',  function (magnitude, sign) {
return $I$(1).copySign$D$D(magnitude, sign);
}, 1);

Clazz.newMeth(C$, 'copySign$F$F',  function (magnitude, sign) {
return $I$(1).copySign$F$F(magnitude, sign);
}, 1);

Clazz.newMeth(C$, 'ulp$D',  function (d) {
return Math.ulp$D(d);
}, 1);

Clazz.newMeth(C$, 'ulp$F',  function (f) {
return Math.ulp$F(f);
}, 1);

Clazz.newMeth(C$, 'signum$D',  function (d) {
return Math.signum(d);
}, 1);

Clazz.newMeth(C$, 'signum$F',  function (f) {
return Math.signum(f);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
