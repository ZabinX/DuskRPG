(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'java.lang.reflect.Array','javajs.util.T3','java.util.Arrays','javajs.util.Lst','java.util.Hashtable','javajs.util.PT']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AU");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'ensureLength$O$I',  function (array, minimumLength) {
return (array != null  && C$.getLength$O(array) >= minimumLength  ? array : C$.arrayCopyObject$O$I(array, minimumLength));
}, 1);

Clazz.newMeth(C$, 'ensureLengthS$SA$I',  function (array, minimumLength) {
return (array != null  && array.length >= minimumLength  ? array : C$.arrayCopyS$SA$I(array, minimumLength));
}, 1);

Clazz.newMeth(C$, 'ensureLengthA$FA$I',  function (array, minimumLength) {
return (array != null  && array.length >= minimumLength  ? array : C$.arrayCopyF$FA$I(array, minimumLength));
}, 1);

Clazz.newMeth(C$, 'ensureLengthD$DA$I',  function (array, minimumLength) {
return (array != null  && array.length >= minimumLength  ? array : C$.arrayCopyD$DA$I(array, minimumLength));
}, 1);

Clazz.newMeth(C$, 'ensureLengthI$IA$I',  function (array, minimumLength) {
return (array != null  && array.length >= minimumLength  ? array : C$.arrayCopyI$IA$I(array, minimumLength));
}, 1);

Clazz.newMeth(C$, 'ensureLengthShort$HA$I',  function (array, minimumLength) {
return (array != null  && array.length >= minimumLength  ? array : C$.arrayCopyShort$HA$I(array, minimumLength));
}, 1);

Clazz.newMeth(C$, 'ensureLengthByte$BA$I',  function (array, minimumLength) {
return (array != null  && array.length >= minimumLength  ? array : C$.arrayCopyByte$BA$I(array, minimumLength));
}, 1);

Clazz.newMeth(C$, 'doubleLength$O',  function (array) {
return C$.arrayCopyObject$O$I(array, (array == null  ? 16 : 2 * C$.getLength$O(array)));
}, 1);

Clazz.newMeth(C$, 'doubleLengthS$SA',  function (array) {
return C$.arrayCopyS$SA$I(array, (array == null  ? 16 : 2 * array.length));
}, 1);

Clazz.newMeth(C$, 'doubleLengthD$DA',  function (array) {
return C$.arrayCopyD$DA$I(array, (array == null  ? 16 : 2 * array.length));
}, 1);

Clazz.newMeth(C$, 'doubleLengthF$FA',  function (array) {
return C$.arrayCopyF$FA$I(array, (array == null  ? 16 : 2 * array.length));
}, 1);

Clazz.newMeth(C$, 'doubleLengthI$IA',  function (array) {
return C$.arrayCopyI$IA$I(array, (array == null  ? 16 : 2 * array.length));
}, 1);

Clazz.newMeth(C$, 'doubleLengthShort$HA',  function (array) {
return C$.arrayCopyShort$HA$I(array, (array == null  ? 16 : 2 * array.length));
}, 1);

Clazz.newMeth(C$, 'doubleLengthByte$BA',  function (array) {
return C$.arrayCopyByte$BA$I(array, (array == null  ? 16 : 2 * array.length));
}, 1);

Clazz.newMeth(C$, 'doubleLengthBool$ZA',  function (array) {
return C$.arrayCopyBool$ZA$I(array, (array == null  ? 16 : 2 * array.length));
}, 1);

Clazz.newMeth(C$, 'deleteElements$O$I$I',  function (array, firstElement, nElements) {
if (nElements == 0 || array == null  ) return array;
var oldLength=C$.getLength$O(array);
if (firstElement >= oldLength) return array;
var n=oldLength - (firstElement + nElements);
if (n < 0) n=0;
var t=C$.newInstanceO$O$I(array, firstElement + n);
if (firstElement > 0) System.arraycopy$O$I$O$I$I(array, 0, t, 0, firstElement);
if (n > 0) System.arraycopy$O$I$O$I$I(array, firstElement + nElements, t, firstElement, n);
return t;
}, 1);

Clazz.newMeth(C$, 'arrayCopyObject$O$I',  function (array, newLength) {
var oldLength=(array == null  ? -1 : C$.getLength$O(array));
if (newLength < 0) newLength=oldLength;
if (newLength == oldLength) return array;
{
if (newLength < oldLength) return Clazz.array(-1, array, 0, newLength);
}
var t=C$.newInstanceO$O$I(array, newLength);
if (oldLength > 0) System.arraycopy$O$I$O$I$I(array, 0, t, 0, oldLength < newLength ? oldLength : newLength);
return t;
}, 1);

Clazz.newMeth(C$, 'newInstanceO$O$I',  function (array, n) {
return Clazz.array(array.getClass$().getComponentType$(), n);
}, 1);

Clazz.newMeth(C$, 'getLength$O',  function (array) {
{
return array.length
}
}, 1);

Clazz.newMeth(C$, 'arrayCopyS$SA$I',  function (array, newLength) {
var oldLength=(array == null  ? -1 : array.length);
if (newLength < 0) newLength=oldLength;
{
if (newLength < oldLength) return Clazz.array(-1, array, 0, newLength);
}
var t=Clazz.array(String, [newLength]);
if (array != null ) {
System.arraycopy$O$I$O$I$I(array, 0, t, 0, oldLength < newLength ? oldLength : newLength);
}return t;
}, 1);

Clazz.newMeth(C$, 'arrayCopyII$IAA$I',  function (array, newLength) {
var t=C$.newInt2$I(newLength);
if (array != null ) {
var oldLength=array.length;
System.arraycopy$O$I$O$I$I(array, 0, t, 0, oldLength < newLength ? oldLength : newLength);
}return t;
}, 1);

Clazz.newMeth(C$, 'arrayCopyPt$javajs_util_T3A$I',  function (array, newLength) {
if (newLength < 0) newLength=array.length;
var t=Clazz.array($I$(2), [newLength]);
if (array != null ) {
var oldLength=array.length;
System.arraycopy$O$I$O$I$I(array, 0, t, 0, oldLength < newLength ? oldLength : newLength);
}return t;
}, 1);

Clazz.newMeth(C$, 'arrayCopyF$FA$I',  function (array, newLength) {
var oldLength=(array == null  ? -1 : array.length);
if (newLength < 0) newLength=oldLength;
{
if (newLength < oldLength) return Clazz.array(-1, array, 0, newLength);
}
var t=Clazz.array(Float.TYPE, [newLength]);
if (array != null ) {
System.arraycopy$O$I$O$I$I(array, 0, t, 0, oldLength < newLength ? oldLength : newLength);
}return t;
}, 1);

Clazz.newMeth(C$, 'arrayCopyD$DA$I',  function (array, newLength) {
var oldLength=(array == null  ? -1 : array.length);
if (newLength < 0) newLength=oldLength;
{
if (newLength < oldLength) return Clazz.array(-1, array, 0, newLength);
}
var t=Clazz.array(Double.TYPE, [newLength]);
if (array != null ) {
System.arraycopy$O$I$O$I$I(array, 0, t, 0, oldLength < newLength ? oldLength : newLength);
}return t;
}, 1);

Clazz.newMeth(C$, 'arrayCopyI$IA$I',  function (array, newLength) {
var oldLength=(array == null  ? -1 : array.length);
if (newLength < 0) newLength=oldLength;
{
if (newLength < oldLength) return Clazz.array(-1, array, 0, newLength);
}
var t=Clazz.array(Integer.TYPE, [newLength]);
if (array != null ) {
System.arraycopy$O$I$O$I$I(array, 0, t, 0, oldLength < newLength ? oldLength : newLength);
}return t;
}, 1);

Clazz.newMeth(C$, 'arrayCopyRangeI$IA$I$I',  function (array, i0, n) {
if (array == null ) return null;
var oldLength=array.length;
if (n == -1) n=oldLength;
if (n == -2) n=(oldLength/2|0);
{
return Clazz.array(-1, array, i0, n);
}
}, 1);

Clazz.newMeth(C$, 'arrayCopyRangeRevI$IA$I$I',  function (array, i0, n) {
if (array == null ) return null;
{
return Clazz.array(-1, array, i0, n).reverse();
}
}, 1);

Clazz.newMeth(C$, 'arrayCopyShort$HA$I',  function (array, newLength) {
var oldLength=(array == null  ? -1 : array.length);
if (newLength < 0) newLength=oldLength;
{
if (newLength < oldLength) return Clazz.array(-1, array, 0, newLength);
}
var t=Clazz.array(Short.TYPE, [newLength]);
if (array != null ) {
System.arraycopy$O$I$O$I$I(array, 0, t, 0, oldLength < newLength ? oldLength : newLength);
}return t;
}, 1);

Clazz.newMeth(C$, 'arrayCopyByte$BA$I',  function (array, newLength) {
var oldLength=(array == null  ? -1 : array.length);
if (newLength < 0) newLength=oldLength;
{
if (newLength < oldLength) return Clazz.array(-1, array, 0, newLength);
}
var t=Clazz.array(Byte.TYPE, [newLength]);
if (array != null ) {
System.arraycopy$O$I$O$I$I(array, 0, t, 0, oldLength < newLength ? oldLength : newLength);
}return t;
}, 1);

Clazz.newMeth(C$, 'arrayCopyBool$ZA$I',  function (array, newLength) {
var oldLength=(array == null  ? -1 : array.length);
if (newLength < 0) newLength=oldLength;
{
if (newLength < oldLength) return Clazz.array(-1, array, 0, newLength);
}
var t=Clazz.array(Boolean.TYPE, [newLength]);
if (array != null ) {
System.arraycopy$O$I$O$I$I(array, 0, t, 0, oldLength < newLength ? oldLength : newLength);
}return t;
}, 1);

Clazz.newMeth(C$, 'swapInt$IA$I$I',  function (array, indexA, indexB) {
var t=array[indexA];
array[indexA]=array[indexB];
array[indexB]=t;
}, 1);

Clazz.newMeth(C$, 'dumpArray$S$FAA$I$I$I$I',  function (msg, A, x1, x2, y1, y2) {
var s="dumpArray: " + msg + "\n" ;
for (var x=x1; x <= x2; x++) s+="\t*" + x + "*" ;

for (var y=y2; y >= y1; y--) {
s+="\n*" + y + "*" ;
for (var x=x1; x <= x2; x++) s+="\t" + (new Float(x < A.length && y < A[x].length  ? A[x][y] : NaN).toString());

}
return s;
}, 1);

Clazz.newMeth(C$, 'dumpIntArray$IA$I',  function (A, n) {
var str="";
for (var i=0; i < n; i++) str+=" " + A[i];

return str;
}, 1);

Clazz.newMeth(C$, 'sortedItem$javajs_util_Lst$I',  function (v, n) {
if (v.size$() == 0) return null;
if (v.size$() == 1) return v.get$I(0);
var keys=v.toArray$OA(Clazz.array(String, [v.size$()]));
$I$(3).sort$OA(keys);
return keys[n % keys.length];
}, 1);

Clazz.newMeth(C$, 'createArrayOfArrayList$I',  function (size) {
return Clazz.array($I$(4), [size]);
}, 1);

Clazz.newMeth(C$, 'createArrayOfHashtable$I',  function (size) {
return Clazz.array($I$(5), [size]);
}, 1);

Clazz.newMeth(C$, 'swap$OA$I$I',  function (o, i, j) {
var oi=o[i];
o[i]=o[j];
o[j]=oi;
}, 1);

Clazz.newMeth(C$, 'newFloat2$I',  function (n) {
return Clazz.array(Float.TYPE, [n, null]);
}, 1);

Clazz.newMeth(C$, 'newBool2$I',  function (n) {
return Clazz.array(Boolean.TYPE, [n, null]);
}, 1);

Clazz.newMeth(C$, 'newInt2$I',  function (n) {
return Clazz.array(Integer.TYPE, [n, null]);
}, 1);

Clazz.newMeth(C$, 'newInt3$I$I',  function (nx, ny) {
return (ny < 0 ? Clazz.array(Integer.TYPE, [nx, null, null]) : Clazz.array(Integer.TYPE, [nx, ny, null]));
}, 1);

Clazz.newMeth(C$, 'newFloat3$I$I',  function (nx, ny) {
return (ny < 0 ? Clazz.array(Float.TYPE, [nx, null, null]) : Clazz.array(Float.TYPE, [nx, ny, null]));
}, 1);

Clazz.newMeth(C$, 'newInt4$I',  function (n) {
return Clazz.array(Integer.TYPE, [n, null, null, null]);
}, 1);

Clazz.newMeth(C$, 'newShort2$I',  function (n) {
return Clazz.array(Short.TYPE, [n, null]);
}, 1);

Clazz.newMeth(C$, 'newByte2$I',  function (n) {
return Clazz.array(Byte.TYPE, [n, null]);
}, 1);

Clazz.newMeth(C$, 'newDouble2$I',  function (n) {
return Clazz.array(Double.TYPE, [n, null]);
}, 1);

Clazz.newMeth(C$, 'removeMapKeys$java_util_Map$S',  function (map, root) {
var list=Clazz.new_($I$(4,1));
for (var key, $key = map.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) if (key.startsWith$S(root)) list.addLast$O(key);

for (var i=list.size$(); --i >= 0; ) map.remove$O(list.get$I(i));

return list.size$();
}, 1);

Clazz.newMeth(C$, 'isAS$O',  function (x) {
return Clazz.instanceOf(x, Clazz.array(String, -1));
}, 1);

Clazz.newMeth(C$, 'isASS$O',  function (x) {
return Clazz.instanceOf(x, Clazz.array(String, -2));
}, 1);

Clazz.newMeth(C$, 'isAP$O',  function (x) {
return Clazz.instanceOf(x, Clazz.array($I$(2), -1));
}, 1);

Clazz.newMeth(C$, 'isAF$O',  function (x) {
return Clazz.instanceOf(x, Clazz.array(Float.TYPE, -1));
}, 1);

Clazz.newMeth(C$, 'isAFloat$O',  function (x) {
return Clazz.instanceOf(x, Clazz.array(Float, -1));
}, 1);

Clazz.newMeth(C$, 'isADouble$O',  function (x) {
return Clazz.instanceOf(x, Clazz.array(Double, -1));
}, 1);

Clazz.newMeth(C$, 'isAD$O',  function (x) {
return Clazz.instanceOf(x, Clazz.array(Double.TYPE, -1));
}, 1);

Clazz.newMeth(C$, 'isADD$O',  function (x) {
return Clazz.instanceOf(x, Clazz.array(Double.TYPE, -2));
}, 1);

Clazz.newMeth(C$, 'isAB$O',  function (x) {
return Clazz.instanceOf(x, Clazz.array(Byte.TYPE, -1));
}, 1);

Clazz.newMeth(C$, 'isAI$O',  function (x) {
return Clazz.instanceOf(x, Clazz.array(Integer.TYPE, -1));
}, 1);

Clazz.newMeth(C$, 'isAII$O',  function (x) {
return (Clazz.instanceOf(x, Clazz.array(Integer.TYPE, -2)));
}, 1);

Clazz.newMeth(C$, 'isAFF$O',  function (x) {
return Clazz.instanceOf(x, Clazz.array(Float.TYPE, -2));
}, 1);

Clazz.newMeth(C$, 'isAFFF$O',  function (x) {
return Clazz.instanceOf(x, Clazz.array(Float.TYPE, -3));
}, 1);

Clazz.newMeth(C$, 'ensureSignedBytes$BA',  function (b) {
if (b != null ) {
{
for (var i = b.length; --i >= 0;) { var j = b[i] & 0xFF; if (j >= 0x80) j -= 0x100; b[i] = j; }
}
}return b;
}, 1);

Clazz.newMeth(C$, 'asFloatA$DA',  function (a) {
{
a.__ARRAYTYPE = "FA"; return a;
}
}, 1);

Clazz.newMeth(C$, 'toFloatA$DA',  function (a) {
var f=Clazz.array(Float.TYPE, [a.length]);
for (var i=f.length; --i >= 0; ) f[i]=a[i];

return f;
}, 1);

Clazz.newMeth(C$, 'asDoubleA$FA',  function (a) {
{
a.__ARRAYTYPE = "DA"; return a;
}
}, 1);

Clazz.newMeth(C$, 'toDoubleA$FA',  function (a) {
var f=Clazz.array(Double.TYPE, [a.length]);
for (var i=f.length; --i >= 0; ) f[i]=$I$(6).toDouble$F(a[i]);

return f;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
