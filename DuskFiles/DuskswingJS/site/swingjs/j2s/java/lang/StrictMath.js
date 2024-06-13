(function(){var P$=java.lang;
/*c*/var C$=Clazz.newClass(P$, "StrictMath");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addExact$I$I',  function (x, y) {

return math.addExact$I$I(x, y);
}, 1);

Clazz.newMeth(C$, 'addExact$J$J',  function (x, y) {

return math.addExact$J$J(x, y);
}, 1);

Clazz.newMeth(C$, 'subtractExact$I$I',  function (x, y) {

return math.subtractExact$I$I(x, y);
}, 1);

Clazz.newMeth(C$, 'subtractExact$J$J',  function (x, y) {

return math.subtractExact$J$J(x, y);
}, 1);

Clazz.newMeth(C$, 'multiplyExact$I$I',  function (x, y) {

return math.multiplyExact$I$I(x, y);
}, 1);

Clazz.newMeth(C$, 'multiplyExact$J$J',  function (x, y) {

return math.multiplyExact$J$J(x, y);
}, 1);

Clazz.newMeth(C$, 'toIntExact$J',  function (value) {

return math.toIntExact$J(value);
}, 1);

Clazz.newMeth(C$, 'floorDiv$I$I',  function (x, y) {

return math.floorDiv$I$I(x, y);
}, 1);

Clazz.newMeth(C$, 'floorDiv$J$J',  function (x, y) {

return math.floorDiv$J$J(x, y);
}, 1);

Clazz.newMeth(C$, 'floorMod$I$I',  function (x, y) {

return math.floorMod$I$I(x, y);
}, 1);

Clazz.newMeth(C$, 'floorMod$J$J',  function (x, y) {

return math.floorMod$J$J(x, y);
}, 1);

Clazz.newMeth(C$, 'copySign$D$D',  function (magnitude, sign) {
return Math.copySign(magnitude, (Double.isNaN$D(sign) ? 1.0 : sign));
}, 1);

Clazz.newMeth(C$, 'copySign$F$F',  function (magnitude, sign) {
return Math.copySign(magnitude, (Float.isNaN$F(sign) ? 1.0 : sign));
}, 1);

Clazz.newMeth(C$, 'getExponent$F',  function (f) {
return Math.getExponent$F(f);
}, 1);

Clazz.newMeth(C$, 'getExponent$D',  function (d) {
return Math.getExponent$D(d);
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

Clazz.newMeth(C$, 'scalb$D$I',  function (d, scaleFactor) {
return Math.scalb(d, scaleFactor);
}, 1);

Clazz.newMeth(C$, 'scalb$F$I',  function (f, scaleFactor) {
return Math.scalb(f, scaleFactor);
}, 1);

Clazz.newMeth(C$, 'abs$D',  function (d) {

return Math.abs (d);
}, 1);

Clazz.newMeth(C$, 'abs$F',  function (f) {

return Math.abs (f);
}, 1);

Clazz.newMeth(C$, 'abs$I',  function (i) {
return i >= 0 ? i : -i;
}, 1);

Clazz.newMeth(C$, 'abs$J',  function (l) {
return Long.$ge(l,0 ) ? l : (Long.$neg(l));
}, 1);

Clazz.newMeth(C$, 'acos$D',  function (d) {

return Math.acos (d);
}, 1);

Clazz.newMeth(C$, 'asin$D',  function (d) {

return Math.asin (d);
}, 1);

Clazz.newMeth(C$, 'atan$D',  function (d) {

return Math.atan (d);
}, 1);

Clazz.newMeth(C$, 'atan2$D$D',  function (d1, d2) {

return Math.atan2 (d1, d2);
}, 1);

Clazz.newMeth(C$, 'cbrt$D',  function (d) {
return 0;
}, 1);

Clazz.newMeth(C$, 'ceil$D',  function (d) {

return Math.ceil (d);
}, 1);

Clazz.newMeth(C$, 'cosh$D',  function (d) {

return Math.cosh (d);
}, 1);

Clazz.newMeth(C$, 'cos$D',  function (d) {

return Math.cos (d);
}, 1);

Clazz.newMeth(C$, 'exp$D',  function (d) {

return Math.exp (d);
}, 1);

Clazz.newMeth(C$, 'expm1$D',  function (d) {
return 0;
}, 1);

Clazz.newMeth(C$, 'floor$D',  function (d) {

return Math.floor (d);
}, 1);

Clazz.newMeth(C$, 'hypot$D$D',  function (x, y) {

return Math.sqrt(x * x + y * y);
}, 1);

Clazz.newMeth(C$, 'IEEEremainder$D$D',  function (d1, d2) {
return Math.IEEEremainder(d1, d2);
}, 1);

Clazz.newMeth(C$, 'log$D',  function (d) {

return Math.log (d);
}, 1);

Clazz.newMeth(C$, 'log10$D',  function (d) {

return Math.log10 (d);
}, 1);

Clazz.newMeth(C$, 'log1p$D',  function (d) {

return Math.log(d + 1);
}, 1);

Clazz.newMeth(C$, 'max$D$D',  function (d1, d2) {

return Math.max (d1, d2);
}, 1);

Clazz.newMeth(C$, 'max$F$F',  function (f1, f2) {

return Math.max (f1, f2);
}, 1);

Clazz.newMeth(C$, 'max$I$I',  function (i1, i2) {

return Math.max (i1, i2);
}, 1);

Clazz.newMeth(C$, 'max$J$J',  function (l1, l2) {

return Math.max (l1, l2);
}, 1);

Clazz.newMeth(C$, 'min$D$D',  function (d1, d2) {

return Math.min (d1, d2);
}, 1);

Clazz.newMeth(C$, 'min$F$F',  function (f1, f2) {

return Math.min (f1, f2);
}, 1);

Clazz.newMeth(C$, 'min$I$I',  function (i1, i2) {

return Math.min (i1, i2);
}, 1);

Clazz.newMeth(C$, 'min$J$J',  function (l1, l2) {

return Math.min (l1, l2);
}, 1);

Clazz.newMeth(C$, 'pow$D$D',  function (d1, d2) {

return Math.pow (d1, d2);
}, 1);

Clazz.newMeth(C$, 'random$',  function () {

return Math.random ();
}, 1);

Clazz.newMeth(C$, 'rint$D',  function (d) {

return Math.round (d);
}, 1);

Clazz.newMeth(C$, 'round$D',  function (d) {

return Math.round (d);
}, 1);

Clazz.newMeth(C$, 'round$F',  function (f) {

return Math.round (f);
}, 1);

Clazz.newMeth(C$, 'signum$D',  function (d) {
if (Double.isNaN$D(d)) {
return NaN;
}var sig=d;
if (d > 0 ) {
sig=1.0;
} else if (d < 0 ) {
sig=-1.0;
}return sig;
}, 1);

Clazz.newMeth(C$, 'signum$F',  function (f) {
if (Float.isNaN$F(f)) {
return NaN;
}var sig=f;
if (f > 0 ) {
sig=1.0;
} else if (f < 0 ) {
sig=-1.0;
}return sig;
}, 1);

Clazz.newMeth(C$, 'sinh$D',  function (d) {

return Math.sinh (d);
}, 1);

Clazz.newMeth(C$, 'sin$D',  function (d) {

return Math.sin (d);
}, 1);

Clazz.newMeth(C$, 'sqrt$D',  function (d) {

return Math.sqrt (d);
}, 1);

Clazz.newMeth(C$, 'tan$D',  function (d) {

return Math.tan (d);
}, 1);

Clazz.newMeth(C$, 'tanh$D',  function (d) {

return Math.tanh (d);
}, 1);

Clazz.newMeth(C$, 'toDegrees$D',  function (angrad) {
return angrad * 180.0 / 3.141592653589793;
}, 1);

Clazz.newMeth(C$, 'toRadians$D',  function (angdeg) {
return angdeg / 180.0 * 3.141592653589793;
}, 1);

Clazz.newMeth(C$, 'ulp$D',  function (d) {

return Math.ulp(d);
}, 1);

Clazz.newMeth(C$, 'ulp$F',  function (f) {

return Math.ulp$F(f);
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:17 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
