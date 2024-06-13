(function(){var P$=Clazz.newPackage("java.nio"),I$=[[0,'java.nio.ByteOrder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Bits");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['_ia','int[]','_ha','short[]','_fa','float[]','_da','double[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'swap$H',  function (x) {
return Short.reverseBytes$H(x);
}, 1);

Clazz.newMeth(C$, 'swap$C',  function (x) {
return Character.reverseBytes$C(x);
}, 1);

Clazz.newMeth(C$, 'swap$I',  function (x) {
return Integer.reverseBytes$I(x);
}, 1);

Clazz.newMeth(C$, 'swap$J',  function (x) {
return Long.reverseBytes$J(x);
}, 1);

Clazz.newMeth(C$, 'makeChar$B$B',  function (b1, b0) {
return String.fromCharCode(((b1 << 8) | (b0 & 255)));
}, 1);

Clazz.newMeth(C$, 'getCharL$java_nio_ByteBuffer$I',  function (bb, bi) {
return C$.makeChar$B$B(bb._get$I(bi + 1), bb._get$I(bi));
}, 1);

Clazz.newMeth(C$, 'getCharL$J',  function (a) {
return C$.makeChar$B$B(C$._get$J$I(a, 1), C$._get$J$I(a, 0));
}, 1);

Clazz.newMeth(C$, 'getCharB$java_nio_ByteBuffer$I',  function (bb, bi) {
return C$.makeChar$B$B(bb._get$I(bi), bb._get$I(bi + 1));
}, 1);

Clazz.newMeth(C$, 'getCharB$J',  function (a) {
return C$.makeChar$B$B(C$._get$J$I(a, 0), C$._get$J$I(a, 1));
}, 1);

Clazz.newMeth(C$, '_get$J$I',  function (a, i) {
switch (i) {
default:
case 0:
return ($b$[0] = (Long.$and(a,255)), $b$[0]);
case 1:
return ($b$[0] = (Long.$and((Long.$sr(a,8)),255)), $b$[0]);
case 2:
return ($b$[0] = (Long.$and((Long.$sr(a,16)),255)), $b$[0]);
case 3:
return ($b$[0] = (Long.$and((Long.$sr(a,24)),255)), $b$[0]);
case 4:
return ($b$[0] = (Long.$and((Long.$sr(a,32)),255)), $b$[0]);
case 5:
return ($b$[0] = (Long.$and((Long.$sr(a,40)),255)), $b$[0]);
case 6:
return ($b$[0] = (Long.$and((Long.$sr(a,48)),255)), $b$[0]);
case 7:
return ($b$[0] = (Long.$and((Long.$sr(a,56)),255)), $b$[0]);
}
}, 1);

Clazz.newMeth(C$, 'getChar$java_nio_ByteBuffer$I$Z',  function (bb, bi, bigEndian) {
return bigEndian ? C$.getCharB$java_nio_ByteBuffer$I(bb, bi) : C$.getCharL$java_nio_ByteBuffer$I(bb, bi);
}, 1);

Clazz.newMeth(C$, 'getChar$J$Z',  function (a, bigEndian) {
return bigEndian ? C$.getCharB$J(a) : C$.getCharL$J(a);
}, 1);

Clazz.newMeth(C$, 'char1$C',  function (x) {
return ($b$[0] = (x.$c() >> 8), $b$[0]);
}, 1);

Clazz.newMeth(C$, 'char0$C',  function (x) {
return ($b$[0] = (x).$c(), $b$[0]);
}, 1);

Clazz.newMeth(C$, 'putCharL$java_nio_ByteBuffer$I$C',  function (bb, bi, x) {
bb._put$I$B(bi, C$.char0$C(x));
bb._put$I$B(bi + 1, C$.char1$C(x));
}, 1);

Clazz.newMeth(C$, 'putCharB$java_nio_ByteBuffer$I$C',  function (bb, bi, x) {
bb._put$I$B(bi, C$.char1$C(x));
bb._put$I$B(bi + 1, C$.char0$C(x));
}, 1);

Clazz.newMeth(C$, 'putChar$java_nio_ByteBuffer$I$C$Z',  function (bb, bi, x, bigEndian) {
if (bigEndian) C$.putCharB$java_nio_ByteBuffer$I$C(bb, bi, x);
 else C$.putCharL$java_nio_ByteBuffer$I$C(bb, bi, x);
}, 1);

Clazz.newMeth(C$, 'makeShort$B$B',  function (b1, b0) {
return ($s$[0] = ((b1 << 8) | (b0 & 255)), $s$[0]);
}, 1);

Clazz.newMeth(C$, 'getShortL$java_nio_ByteBuffer$I',  function (bb, bi) {
return C$.makeShort$B$B(bb._get$I(bi + 1), bb._get$I(bi));
}, 1);

Clazz.newMeth(C$, 'getShortL$J',  function (a) {
return C$.makeShort$B$B(C$._get$J$I(a, 1), C$._get$J$I(a, 0));
}, 1);

Clazz.newMeth(C$, 'getShortB$java_nio_ByteBuffer$I',  function (bb, bi) {
return C$.makeShort$B$B(bb._get$I(bi), bb._get$I(bi + 1));
}, 1);

Clazz.newMeth(C$, 'getShortB$J',  function (a) {
return C$.makeShort$B$B(C$._get$J$I(a, 0), C$._get$J$I(a, 1));
}, 1);

Clazz.newMeth(C$, 'getShort$java_nio_ByteBuffer$I$Z',  function (bb, bi, bigEndian) {
return bigEndian ? C$.getShortB$java_nio_ByteBuffer$I(bb, bi) : C$.getShortL$java_nio_ByteBuffer$I(bb, bi);
}, 1);

Clazz.newMeth(C$, 'getShort$J$Z',  function (a, bigEndian) {
return bigEndian ? C$.getShortB$J(a) : C$.getShortL$J(a);
}, 1);

Clazz.newMeth(C$, 'short1$H',  function (x) {
return ($b$[0] = (x >> 8), $b$[0]);
}, 1);

Clazz.newMeth(C$, 'short0$H',  function (x) {
return ($b$[0] = (x), $b$[0]);
}, 1);

Clazz.newMeth(C$, 'putShortL$java_nio_ByteBuffer$I$H',  function (bb, bi, x) {
bb._put$I$B(bi, C$.short0$H(x));
bb._put$I$B(bi + 1, C$.short1$H(x));
}, 1);

Clazz.newMeth(C$, 'putShortB$java_nio_ByteBuffer$I$H',  function (bb, bi, x) {
bb._put$I$B(bi, C$.short1$H(x));
bb._put$I$B(bi + 1, C$.short0$H(x));
}, 1);

Clazz.newMeth(C$, 'putShort$java_nio_ByteBuffer$I$H$Z',  function (bb, bi, x, bigEndian) {
if (bigEndian) C$.putShortB$java_nio_ByteBuffer$I$H(bb, bi, x);
 else C$.putShortL$java_nio_ByteBuffer$I$H(bb, bi, x);
}, 1);

Clazz.newMeth(C$, 'makeInt$B$B$B$B',  function (b3, b2, b1, b0) {
return (((b3) << 24) | ((b2 & 255) << 16) | ((b1 & 255) << 8) | ((b0 & 255)) );
}, 1);

Clazz.newMeth(C$, 'getIntL$java_nio_ByteBuffer$I',  function (bb, bi) {
return C$.makeInt$B$B$B$B(bb._get$I(bi + 3), bb._get$I(bi + 2), bb._get$I(bi + 1), bb._get$I(bi));
}, 1);

Clazz.newMeth(C$, 'getIntL$J',  function (a) {
return C$.makeInt$B$B$B$B(C$._get$J$I(a, 3), C$._get$J$I(a, 2), C$._get$J$I(a, 1), C$._get$J$I(a, 0));
}, 1);

Clazz.newMeth(C$, 'getIntB$java_nio_ByteBuffer$I',  function (bb, bi) {
return C$.makeInt$B$B$B$B(bb._get$I(bi), bb._get$I(bi + 1), bb._get$I(bi + 2), bb._get$I(bi + 3));
}, 1);

Clazz.newMeth(C$, 'getIntB$J',  function (a) {
return C$.makeInt$B$B$B$B(C$._get$J$I(a, 0), C$._get$J$I(a, 1), C$._get$J$I(a, 2), C$._get$J$I(a, 3));
}, 1);

Clazz.newMeth(C$, 'getInt$java_nio_ByteBuffer$I$Z',  function (bb, bi, bigEndian) {
return bigEndian ? C$.getIntB$java_nio_ByteBuffer$I(bb, bi) : C$.getIntL$java_nio_ByteBuffer$I(bb, bi);
}, 1);

Clazz.newMeth(C$, 'getInt$J$Z',  function (a, bigEndian) {
return bigEndian ? C$.getIntB$J(a) : C$.getIntL$J(a);
}, 1);

Clazz.newMeth(C$, 'int3$I',  function (x) {
return ($b$[0] = (x >> 24), $b$[0]);
}, 1);

Clazz.newMeth(C$, 'int2$I',  function (x) {
return ($b$[0] = (x >> 16), $b$[0]);
}, 1);

Clazz.newMeth(C$, 'int1$I',  function (x) {
return ($b$[0] = (x >> 8), $b$[0]);
}, 1);

Clazz.newMeth(C$, 'int0$I',  function (x) {
return ($b$[0] = (x), $b$[0]);
}, 1);

Clazz.newMeth(C$, 'putIntL$java_nio_ByteBuffer$I$I',  function (bb, bi, x) {
bb._put$I$B(bi + 3, C$.int3$I(x));
bb._put$I$B(bi + 2, C$.int2$I(x));
bb._put$I$B(bi + 1, C$.int1$I(x));
bb._put$I$B(bi, C$.int0$I(x));
}, 1);

Clazz.newMeth(C$, 'putIntB$java_nio_ByteBuffer$I$I',  function (bb, bi, x) {
bb._put$I$B(bi, C$.int3$I(x));
bb._put$I$B(bi + 1, C$.int2$I(x));
bb._put$I$B(bi + 2, C$.int1$I(x));
bb._put$I$B(bi + 3, C$.int0$I(x));
}, 1);

Clazz.newMeth(C$, 'putInt$java_nio_ByteBuffer$I$I$Z',  function (bb, bi, x, bigEndian) {
if (bigEndian) C$.putIntB$java_nio_ByteBuffer$I$I(bb, bi, x);
 else C$.putIntL$java_nio_ByteBuffer$I$I(bb, bi, x);
}, 1);

Clazz.newMeth(C$, 'makeLong$B$B$B$B$B$B$B$B',  function (b7, b6, b5, b4, b3, b2, b1, b0) {
return (Long.$or((Long.$sl((b7),56)),(Long.$sl((Long.$and(b6,255)),48)) , (Long.$sl((Long.$and(b5,255)),40)) , (Long.$sl((Long.$and(b4,255)),32)) , (Long.$sl((Long.$and(b3,255)),24)) , (Long.$sl((Long.$and(b2,255)),16)) , (Long.$sl((Long.$and(b1,255)),8)) , ((Long.$and(b0,255))) ));
}, 1);

Clazz.newMeth(C$, 'getLongL$java_nio_ByteBuffer$I',  function (bb, bi) {
return C$.makeLong$B$B$B$B$B$B$B$B(bb._get$I(bi + 7), bb._get$I(bi + 6), bb._get$I(bi + 5), bb._get$I(bi + 4), bb._get$I(bi + 3), bb._get$I(bi + 2), bb._get$I(bi + 1), bb._get$I(bi));
}, 1);

Clazz.newMeth(C$, 'getLongL$J',  function (a) {
return a;
}, 1);

Clazz.newMeth(C$, 'getLongB$java_nio_ByteBuffer$I',  function (bb, bi) {
return C$.makeLong$B$B$B$B$B$B$B$B(bb._get$I(bi), bb._get$I(bi + 1), bb._get$I(bi + 2), bb._get$I(bi + 3), bb._get$I(bi + 4), bb._get$I(bi + 5), bb._get$I(bi + 6), bb._get$I(bi + 7));
}, 1);

Clazz.newMeth(C$, 'getLongB$J',  function (a) {
return C$.makeLong$B$B$B$B$B$B$B$B(C$._get$J$I(a, 0), C$._get$J$I(a, 1), C$._get$J$I(a, 2), C$._get$J$I(a, 3), C$._get$J$I(a, 4), C$._get$J$I(a, 5), C$._get$J$I(a, 6), C$._get$J$I(a, 7));
}, 1);

Clazz.newMeth(C$, 'getLong$java_nio_ByteBuffer$I$Z',  function (bb, bi, bigEndian) {
return bigEndian ? C$.getLongB$java_nio_ByteBuffer$I(bb, bi) : C$.getLongL$java_nio_ByteBuffer$I(bb, bi);
}, 1);

Clazz.newMeth(C$, 'getLong$J$Z',  function (a, bigEndian) {
return bigEndian ? C$.getLongB$J(a) : C$.getLongL$J(a);
}, 1);

Clazz.newMeth(C$, 'long7$J',  function (x) {
return ($b$[0] = (Long.$sr(x,56)), $b$[0]);
}, 1);

Clazz.newMeth(C$, 'long6$J',  function (x) {
return ($b$[0] = (Long.$sr(x,48)), $b$[0]);
}, 1);

Clazz.newMeth(C$, 'long5$J',  function (x) {
return ($b$[0] = (Long.$sr(x,40)), $b$[0]);
}, 1);

Clazz.newMeth(C$, 'long4$J',  function (x) {
return ($b$[0] = (Long.$sr(x,32)), $b$[0]);
}, 1);

Clazz.newMeth(C$, 'long3$J',  function (x) {
return ($b$[0] = (Long.$sr(x,24)), $b$[0]);
}, 1);

Clazz.newMeth(C$, 'long2$J',  function (x) {
return ($b$[0] = (Long.$sr(x,16)), $b$[0]);
}, 1);

Clazz.newMeth(C$, 'long1$J',  function (x) {
return ($b$[0] = (Long.$sr(x,8)), $b$[0]);
}, 1);

Clazz.newMeth(C$, 'long0$J',  function (x) {
return ($b$[0] = (x), $b$[0]);
}, 1);

Clazz.newMeth(C$, 'putLongL$java_nio_ByteBuffer$I$J',  function (bb, bi, x) {
bb._put$I$B(bi + 7, C$.long7$J(x));
bb._put$I$B(bi + 6, C$.long6$J(x));
bb._put$I$B(bi + 5, C$.long5$J(x));
bb._put$I$B(bi + 4, C$.long4$J(x));
bb._put$I$B(bi + 3, C$.long3$J(x));
bb._put$I$B(bi + 2, C$.long2$J(x));
bb._put$I$B(bi + 1, C$.long1$J(x));
bb._put$I$B(bi, C$.long0$J(x));
}, 1);

Clazz.newMeth(C$, 'putLongB$java_nio_ByteBuffer$I$J',  function (bb, bi, x) {
bb._put$I$B(bi, C$.long7$J(x));
bb._put$I$B(bi + 1, C$.long6$J(x));
bb._put$I$B(bi + 2, C$.long5$J(x));
bb._put$I$B(bi + 3, C$.long4$J(x));
bb._put$I$B(bi + 4, C$.long3$J(x));
bb._put$I$B(bi + 5, C$.long2$J(x));
bb._put$I$B(bi + 6, C$.long1$J(x));
bb._put$I$B(bi + 7, C$.long0$J(x));
}, 1);

Clazz.newMeth(C$, 'putLong$java_nio_ByteBuffer$I$J$Z',  function (bb, bi, x, bigEndian) {
if (bigEndian) C$.putLongB$java_nio_ByteBuffer$I$J(bb, bi, x);
 else C$.putLongL$java_nio_ByteBuffer$I$J(bb, bi, x);
}, 1);

Clazz.newMeth(C$, 'getFloatL$java_nio_ByteBuffer$I',  function (bb, bi) {
return Float.intBitsToFloat$I(C$.getIntL$java_nio_ByteBuffer$I(bb, bi));
}, 1);

Clazz.newMeth(C$, 'getFloatL$J',  function (a) {
return Float.intBitsToFloat$I(C$.getIntL$J(a));
}, 1);

Clazz.newMeth(C$, 'getFloatB$java_nio_ByteBuffer$I',  function (bb, bi) {
return Float.intBitsToFloat$I(C$.getIntB$java_nio_ByteBuffer$I(bb, bi));
}, 1);

Clazz.newMeth(C$, 'getFloatB$J',  function (a) {
return Float.intBitsToFloat$I(C$.getIntB$J(a));
}, 1);

Clazz.newMeth(C$, 'getFloat$java_nio_ByteBuffer$I$Z',  function (bb, bi, bigEndian) {
return bigEndian ? C$.getFloatB$java_nio_ByteBuffer$I(bb, bi) : C$.getFloatL$java_nio_ByteBuffer$I(bb, bi);
}, 1);

Clazz.newMeth(C$, 'getFloat$J$Z',  function (a, bigEndian) {
return bigEndian ? C$.getFloatB$J(a) : C$.getFloatL$J(a);
}, 1);

Clazz.newMeth(C$, 'putFloatL$java_nio_ByteBuffer$I$F',  function (bb, bi, x) {
C$.putIntL$java_nio_ByteBuffer$I$I(bb, bi, Float.floatToRawIntBits$F(x));
}, 1);

Clazz.newMeth(C$, 'putFloatB$java_nio_ByteBuffer$I$F',  function (bb, bi, x) {
C$.putIntB$java_nio_ByteBuffer$I$I(bb, bi, Float.floatToRawIntBits$F(x));
}, 1);

Clazz.newMeth(C$, 'putFloat$java_nio_ByteBuffer$I$F$Z',  function (bb, bi, x, bigEndian) {
if (bigEndian) C$.putFloatB$java_nio_ByteBuffer$I$F(bb, bi, x);
 else C$.putFloatL$java_nio_ByteBuffer$I$F(bb, bi, x);
}, 1);

Clazz.newMeth(C$, 'getDoubleL$java_nio_ByteBuffer$I',  function (bb, bi) {
return Double.longBitsToDouble$J(C$.getLongL$java_nio_ByteBuffer$I(bb, bi));
}, 1);

Clazz.newMeth(C$, 'getDoubleL$J',  function (a) {
return Double.longBitsToDouble$J(C$.getLongL$J(a));
}, 1);

Clazz.newMeth(C$, 'getDoubleB$java_nio_ByteBuffer$I',  function (bb, bi) {
return Double.longBitsToDouble$J(C$.getLongB$java_nio_ByteBuffer$I(bb, bi));
}, 1);

Clazz.newMeth(C$, 'getDoubleB$J',  function (a) {
return Double.longBitsToDouble$J(C$.getLongB$J(a));
}, 1);

Clazz.newMeth(C$, 'getDouble$java_nio_ByteBuffer$I$Z',  function (bb, bi, bigEndian) {
return bigEndian ? C$.getDoubleB$java_nio_ByteBuffer$I(bb, bi) : C$.getDoubleL$java_nio_ByteBuffer$I(bb, bi);
}, 1);

Clazz.newMeth(C$, 'getDouble$J$Z',  function (a, bigEndian) {
return bigEndian ? C$.getDoubleB$J(a) : C$.getDoubleL$J(a);
}, 1);

Clazz.newMeth(C$, 'putDoubleL$java_nio_ByteBuffer$I$D',  function (bb, bi, x) {
C$.putLongL$java_nio_ByteBuffer$I$J(bb, bi, Double.doubleToRawLongBits$D(x));
}, 1);

Clazz.newMeth(C$, 'putDoubleB$java_nio_ByteBuffer$I$D',  function (bb, bi, x) {
C$.putLongB$java_nio_ByteBuffer$I$J(bb, bi, Double.doubleToRawLongBits$D(x));
}, 1);

Clazz.newMeth(C$, 'putDouble$java_nio_ByteBuffer$I$D$Z',  function (bb, bi, x, bigEndian) {
if (bigEndian) C$.putDoubleB$java_nio_ByteBuffer$I$D(bb, bi, x);
 else C$.putDoubleL$java_nio_ByteBuffer$I$D(bb, bi, x);
}, 1);

Clazz.newMeth(C$, 'byteOrder$',  function () {
return $I$(1).LITTLE_ENDIAN;
}, 1);

Clazz.newMeth(C$, '_toInt32$BA',  function (b) {
{
return Clazz.array(new Int32Array(b.buffer), C$._ia);
}
}, 1);

Clazz.newMeth(C$, '_toInt16$BA',  function (b) {
{
return Clazz.array(new Int16Array(b.buffer), C$._ha);
}
}, 1);

Clazz.newMeth(C$, '_toFloat32$BA',  function (b) {
{
return Clazz.array(new Float32Array(b.buffer), C$._fa);
}
}, 1);

Clazz.newMeth(C$, '_toFloat64$BA',  function (b) {
{
return Clazz.array(new Float64Array(b.buffer), C$._da);
}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$._ia=Clazz.array(Integer.TYPE, [0]);
C$._ha=Clazz.array(Short.TYPE, [0]);
C$._fa=Clazz.array(Float.TYPE, [0]);
C$._da=Clazz.array(Double.TYPE, [0]);
};
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:19 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
