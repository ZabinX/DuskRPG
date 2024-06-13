(function(){var P$=java.lang,I$=[[0,'StringUTF16','CharacterDataLatin1','ConditionalSpecialCasing','java.util.Arrays','String9']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StringLatin1", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['CharsSpliterator',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'charAt$BA$I',  function (value, index) {
if (index < 0 || index >= value.length ) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[index]);
}return String.fromCharCode((value[index] & 255));
}, 1);

Clazz.newMeth(C$, 'canEncode$I',  function (cp) {
return cp >>> 8 == 0;
}, 1);

Clazz.newMeth(C$, 'length$BA',  function (value) {
return value.length;
}, 1);

Clazz.newMeth(C$, 'codePointAt$BA$I$I',  function (value, index, end) {
return value[index] & 255;
}, 1);

Clazz.newMeth(C$, 'codePointBefore$BA$I',  function (value, index) {
return value[index - 1] & 255;
}, 1);

Clazz.newMeth(C$, 'codePointCount$BA$I$I',  function (value, beginIndex, endIndex) {
return endIndex - beginIndex;
}, 1);

Clazz.newMeth(C$, 'toChars$BA',  function (value) {
var dst=Clazz.array(Character.TYPE, [value.length]);
C$.inflate$BA$I$CA$I$I(value, 0, dst, 0, value.length);
return dst;
}, 1);

Clazz.newMeth(C$, 'inflate$BA$I$I',  function (value, off, len) {
var ret=$I$(1).newBytesFor$I(len);
C$.inflate$BA$I$BA$I$I(value, off, ret, 0, len);
return ret;
}, 1);

Clazz.newMeth(C$, 'getChars$BA$I$I$CA$I',  function (value, srcBegin, srcEnd, dst, dstBegin) {
C$.inflate$BA$I$CA$I$I(value, srcBegin, dst, dstBegin, srcEnd - srcBegin);
}, 1);

Clazz.newMeth(C$, 'getBytes$BA$I$I$BA$I',  function (value, srcBegin, srcEnd, dst, dstBegin) {
System.arraycopy$O$I$O$I$I(value, srcBegin, dst, dstBegin, srcEnd - srcBegin);
}, 1);

Clazz.newMeth(C$, 'equals$BA$BA',  function (value, other) {
if (value.length == other.length) {
for (var i=0; i < value.length; i++) {
if (value[i] != other[i]) {
return false;
}}
return true;
}return false;
}, 1);

Clazz.newMeth(C$, 'compareTo$BA$BA',  function (value, other) {
var len1=value.length;
var len2=other.length;
var lim=Math.min(len1, len2);
for (var k=0; k < lim; k++) {
if (value[k] != other[k]) {
return (C$.getChar$BA$I(value, k)).$c() - (C$.getChar$BA$I(other, k)).$c();
}}
return len1 - len2;
}, 1);

Clazz.newMeth(C$, 'compareToUTF16$BA$BA',  function (value, other) {
var len1=C$.length$BA(value);
var len2=$I$(1).length$BA(other);
var lim=Math.min(len1, len2);
for (var k=0; k < lim; k++) {
var c1=C$.getChar$BA$I(value, k);
var c2=$I$(1).getChar$BA$I(other, k);
if (c1 != c2) {
return c1.$c() - c2.$c();
}}
return len1 - len2;
}, 1);

Clazz.newMeth(C$, 'compareToCI$BA$BA',  function (value, other) {
var len1=value.length;
var len2=other.length;
var lim=Math.min(len1, len2);
for (var k=0; k < lim; k++) {
if (value[k] != other[k]) {
var c1=String.fromCharCode($I$(2).instance.toUpperCase$I(C$.getChar$BA$I(value, k).$c()));
var c2=String.fromCharCode($I$(2).instance.toUpperCase$I(C$.getChar$BA$I(other, k).$c()));
if (c1 != c2) {
c1=Character.toLowerCase$C(c1);
c2=Character.toLowerCase$C(c2);
if (c1 != c2) {
return c1.$c() - c2.$c();
}}}}
return len1 - len2;
}, 1);

Clazz.newMeth(C$, 'compareToCI_UTF16$BA$BA',  function (value, other) {
var len1=C$.length$BA(value);
var len2=$I$(1).length$BA(other);
var lim=Math.min(len1, len2);
for (var k=0; k < lim; k++) {
var c1=C$.getChar$BA$I(value, k);
var c2=$I$(1).getChar$BA$I(other, k);
if (c1 != c2) {
c1=Character.toUpperCase$C(c1);
c2=Character.toUpperCase$C(c2);
if (c1 != c2) {
c1=Character.toLowerCase$C(c1);
c2=Character.toLowerCase$C(c2);
if (c1 != c2) {
return c1.$c() - c2.$c();
}}}}
return len1 - len2;
}, 1);

Clazz.newMeth(C$, 'hashCode$BA',  function (value) {
var h=0;
for (var v, $v = 0, $$v = value; $v<$$v.length&&((v=($$v[$v])),1);$v++) {
h=31 * h + (v & 255);
}
return h;
}, 1);

Clazz.newMeth(C$, 'indexOf$BA$I$I',  function (value, ch, fromIndex) {
if (!C$.canEncode$I(ch)) {
return -1;
}var max=value.length;
if (fromIndex < 0) {
fromIndex=0;
} else if (fromIndex >= max) {
return -1;
}var c=($b$[0] = ch, $b$[0]);
for (var i=fromIndex; i < max; i++) {
if (value[i] == c) {
return i;
}}
return -1;
}, 1);

Clazz.newMeth(C$, 'indexOf$BA$BA',  function (value, str) {
if (str.length == 0) {
return 0;
}if (value.length == 0) {
return -1;
}return C$.indexOf$BA$I$BA$I$I(value, value.length, str, str.length, 0);
}, 1);

Clazz.newMeth(C$, 'indexOf$BA$I$BA$I$I',  function (value, valueCount, str, strCount, fromIndex) {
var first=str[0];
var max=(valueCount - strCount);
for (var i=fromIndex; i <= max; i++) {
if (value[i] != first) {
while (++i <= max && value[i] != first );
}if (i <= max) {
var j=i + 1;
var end=j + strCount - 1;
for (var k=1; j < end && value[j] == str[k] ; j++, k++) ;
if (j == end) {
return i;
}}}
return -1;
}, 1);

Clazz.newMeth(C$, 'lastIndexOf$BA$I$BA$I$I',  function (src, srcCount, tgt, tgtCount, fromIndex) {
var min=tgtCount - 1;
var i=min + fromIndex;
var strLastIndex=tgtCount - 1;
var strLastChar=String.fromCharCode((tgt[strLastIndex] & 255));
 startSearchForLastChar : while (true){
while (i >= min && (src[i] & 255) != strLastChar.$c()  ){
--i;
}
if (i < min) {
return -1;
}var j=i - 1;
var start=j - strLastIndex;
var k=strLastIndex - 1;
while (j > start){
if ((src[j--] & 255) != (tgt[k--] & 255)) {
--i;
continue startSearchForLastChar;
}}
return start + 1;
}
}, 1);

Clazz.newMeth(C$, 'lastIndexOf$BA$I$I',  function (value, ch, fromIndex) {
if (!C$.canEncode$I(ch)) {
return -1;
}var off=Math.min(fromIndex, value.length - 1);
for (; off >= 0; off--) {
if (value[off] == ($b$[0] = ch, $b$[0])) {
return off;
}}
return -1;
}, 1);

Clazz.newMeth(C$, 'replace$BA$C$C',  function (value, oldChar, newChar) {
if (C$.canEncode$I(oldChar.$c())) {
var len=value.length;
var i=-1;
while (++i < len){
if (value[i] == ($b$[0] = oldChar.$c(), $b$[0])) {
break;
}}
if (i < len) {
if (C$.canEncode$I(newChar.$c())) {
var buf=Clazz.array(Byte.TYPE, [len]);
for (var j=0; j < i; j++) {
buf[j]=value[j];
}
while (i < len){
var c=value[i];
buf[i]=(c == (oldChar.$c()|0)) ? (newChar.$c()|0) : c;
++i;
}
return  String.instantialize(buf, 0);
} else {
var buf=$I$(1).newBytesFor$I(len);
C$.inflate$BA$I$BA$I$I(value, 0, buf, 0, i);
while (i < len){
var c=String.fromCharCode((value[i] & 255));
$I$(1,"putChar$BA$I$I",[buf, i, (c == oldChar) ? newChar : c.$c()]);
++i;
}
return  String.instantialize(buf, 1);
}}}return null;
}, 1);

Clazz.newMeth(C$, 'regionMatchesCI$BA$I$BA$I$I',  function (value, toffset, other, ooffset, len) {
var last=toffset + len;
while (toffset < last){
var c1=String.fromCharCode((value[toffset++] & 255));
var c2=String.fromCharCode((other[ooffset++] & 255));
if (c1 == c2) {
continue;
}var u1=Character.toUpperCase$C(c1);
var u2=Character.toUpperCase$C(c2);
if (u1 == u2) {
continue;
}if (Character.toLowerCase$C(u1) == Character.toLowerCase$C(u2)) {
continue;
}return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'regionMatchesCI_UTF16$BA$I$BA$I$I',  function (value, toffset, other, ooffset, len) {
var last=toffset + len;
while (toffset < last){
var c1=String.fromCharCode((value[toffset++] & 255));
var c2=$I$(1).getChar$BA$I(other, ooffset++);
if (c1 == c2) {
continue;
}var u1=Character.toUpperCase$C(c1);
var u2=Character.toUpperCase$C(c2);
if (u1 == u2) {
continue;
}if (Character.toLowerCase$C(u1) == Character.toLowerCase$C(u2)) {
continue;
}return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'toLowerCase$S$BA$java_util_Locale',  function (str, value, locale) {
if (locale == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var first;
var len=value.length;
for (first=0; first < len; first++) {
var cp=value[first] & 255;
if (cp != Character.toLowerCase$I(cp)) {
break;
}}
if (first == len) return str;
var lang=locale.getLanguage$();
if (lang === "tr"  || lang === "az"   || lang === "lt"  ) {
return C$.toLowerCaseEx$S$BA$I$java_util_Locale$Z(str, value, first, locale, true);
}var result=Clazz.array(Byte.TYPE, [len]);
System.arraycopy$O$I$O$I$I(value, 0, result, 0, first);
for (var i=first; i < len; i++) {
var cp=value[i] & 255;
cp=Character.toLowerCase$I(cp);
if (!C$.canEncode$I(cp)) {
return C$.toLowerCaseEx$S$BA$I$java_util_Locale$Z(str, value, first, locale, false);
}result[i]=(cp|0);
}
return  String.instantialize(result, 0);
}, 1);

Clazz.newMeth(C$, 'toLowerCaseEx$S$BA$I$java_util_Locale$Z',  function (str, value, first, locale, localeDependent) {
var result=$I$(1).newBytesFor$I(value.length);
var resultOffset=0;
for (var i=0; i < first; i++) {
$I$(1).putChar$BA$I$I(result, resultOffset++, value[i] & 255);
}
for (var i=first; i < value.length; i++) {
var srcChar=value[i] & 255;
var lowerChar;
var lowerCharArray;
if (localeDependent) {
lowerChar=$I$(3).toLowerCaseEx$S$I$java_util_Locale(str, i, locale);
} else {
lowerChar=Character.toLowerCase$I(srcChar);
}if (Character.isBmpCodePoint$I(lowerChar)) {
$I$(1).putChar$BA$I$I(result, resultOffset++, lowerChar);
} else {
if (lowerChar == -1) {
lowerCharArray=$I$(3).toLowerCaseCharArray$S$I$java_util_Locale(str, i, locale);
} else {
lowerCharArray=Character.toChars$I(lowerChar);
}var mapLen=lowerCharArray.length;
if (mapLen > 1) {
var result2=$I$(1,"newBytesFor$I",[(result.length >> 1) + mapLen - 1]);
System.arraycopy$O$I$O$I$I(result, 0, result2, 0, resultOffset << 1);
result=result2;
}for (var x=0; x < mapLen; ++x) {
$I$(1,"putChar$BA$I$I",[result, resultOffset++, lowerCharArray[x].$c()]);
}
}}
return $I$(1).newString$BA$I$I(result, 0, resultOffset);
}, 1);

Clazz.newMeth(C$, 'toUpperCase$S$BA$java_util_Locale',  function (str, value, locale) {
if (locale == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var first;
var len=value.length;
for (first=0; first < len; first++) {
var cp=value[first] & 255;
if (cp != Character.toUpperCaseEx$I(cp)) {
break;
}}
if (first == len) {
return str;
}var lang=locale.getLanguage$();
if (lang === "tr"  || lang === "az"   || lang === "lt"  ) {
return C$.toUpperCaseEx$S$BA$I$java_util_Locale$Z(str, value, first, locale, true);
}var result=Clazz.array(Byte.TYPE, [len]);
System.arraycopy$O$I$O$I$I(value, 0, result, 0, first);
for (var i=first; i < len; i++) {
var cp=value[i] & 255;
cp=Character.toUpperCaseEx$I(cp);
if (!C$.canEncode$I(cp)) {
return C$.toUpperCaseEx$S$BA$I$java_util_Locale$Z(str, value, first, locale, false);
}result[i]=(cp|0);
}
return  String.instantialize(result, 0);
}, 1);

Clazz.newMeth(C$, 'toUpperCaseEx$S$BA$I$java_util_Locale$Z',  function (str, value, first, locale, localeDependent) {
var result=$I$(1).newBytesFor$I(value.length);
var resultOffset=0;
for (var i=0; i < first; i++) {
$I$(1).putChar$BA$I$I(result, resultOffset++, value[i] & 255);
}
for (var i=first; i < value.length; i++) {
var srcChar=value[i] & 255;
var upperChar;
var upperCharArray;
if (localeDependent) {
upperChar=$I$(3).toUpperCaseEx$S$I$java_util_Locale(str, i, locale);
} else {
upperChar=Character.toUpperCaseEx$I(srcChar);
}if (Character.isBmpCodePoint$I(upperChar)) {
$I$(1).putChar$BA$I$I(result, resultOffset++, upperChar);
} else {
if (upperChar == -1) {
if (localeDependent) {
upperCharArray=$I$(3).toUpperCaseCharArray$S$I$java_util_Locale(str, i, locale);
} else {
upperCharArray=Character.toUpperCaseCharArray$I(srcChar);
}} else {
upperCharArray=Character.toChars$I(upperChar);
}var mapLen=upperCharArray.length;
if (mapLen > 1) {
var result2=$I$(1,"newBytesFor$I",[(result.length >> 1) + mapLen - 1]);
System.arraycopy$O$I$O$I$I(result, 0, result2, 0, resultOffset << 1);
result=result2;
}for (var x=0; x < mapLen; ++x) {
$I$(1,"putChar$BA$I$I",[result, resultOffset++, upperCharArray[x].$c()]);
}
}}
return $I$(1).newString$BA$I$I(result, 0, resultOffset);
}, 1);

Clazz.newMeth(C$, 'trim$BA',  function (value) {
var len=value.length;
var st=0;
while ((st < len) && ((value[st] & 255) <= 32 ) ){
++st;
}
while ((st < len) && ((value[len - 1] & 255) <= 32 ) ){
--len;
}
return ((st > 0) || (len < value.length) ) ? C$.newString$BA$I$I(value, st, len - st) : null;
}, 1);

Clazz.newMeth(C$, 'putChar$BA$I$I',  function (val, index, c) {
val[index]=((c)|0);
}, 1);

Clazz.newMeth(C$, 'getChar$BA$I',  function (val, index) {
return String.fromCharCode((val[index] & 255));
}, 1);

Clazz.newMeth(C$, 'toBytes$IA$I$I',  function (val, off, len) {
var ret=Clazz.array(Byte.TYPE, [len]);
for (var i=0; i < len; i++) {
var cp=val[off++];
if (!C$.canEncode$I(cp)) {
return null;
}ret[i]=(cp|0);
}
return ret;
}, 1);

Clazz.newMeth(C$, 'toBytes$C',  function (c) {
return Clazz.array(Byte.TYPE, -1, [($b$[0] = c.$c(), $b$[0])]);
}, 1);

Clazz.newMeth(C$, 'newString$BA$I$I',  function (val, index, len) {
return  String.instantialize($I$(4).copyOfRange$BA$I$I(val, index, index + len), 0);
}, 1);

Clazz.newMeth(C$, 'fillNull$BA$I$I',  function (val, index, end) {
$I$(4).fill$BA$I$I$B(val, index, end, 0);
}, 1);

Clazz.newMeth(C$, 'inflate$BA$I$CA$I$I',  function (src, srcOff, dst, dstOff, len) {
for (var i=0; i < len; i++) {
dst[dstOff++]=String.fromCharCode((src[srcOff++] & 255));
}
}, 1);

Clazz.newMeth(C$, 'inflate$BA$I$BA$I$I',  function (src, srcOff, dst, dstOff, len) {
$I$(5).checkBoundsOffCount$I$I$I(dstOff << 1, len << 1, dst.length);
for (var i=0; i < len; i++) {
$I$(1).putChar$BA$I$I(dst, dstOff++, src[srcOff++] & 255);
}
}, 1);
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.StringLatin1, "CharsSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfInt']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index','fence','cs'],'O',['array','byte[]']]]

Clazz.newMeth(C$, 'c$$BA$I',  function (array, acs) {
C$.c$$BA$I$I$I.apply(this, [array, 0, array.length, acs]);
}, 1);

Clazz.newMeth(C$, 'c$$BA$I$I$I',  function (array, origin, fence, acs) {
;C$.$init$.apply(this);
this.array=array;
this.index=origin;
this.fence=fence;
this.cs=acs | 16 | 64 | 16384 ;
}, 1);

Clazz.newMeth(C$, 'trySplit$',  function () {
var lo=this.index;
var mid=(lo + this.fence) >>> 1;
return (lo >= mid) ? null : Clazz.new_(C$.c$$BA$I$I$I,[this.array, lo, this.index=mid, this.cs]);
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_IntConsumer','forEachRemaining$O'],  function (action) {
var a;
var i;
var hi;
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if ((a=this.array).length >= (hi=this.fence) && (i=this.index) >= 0  && i < (this.index=hi) ) {
do {
action.accept$I(a[i] & 255);
} while (++i < hi);
}});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_IntConsumer','tryAdvance$O'],  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.index >= 0 && this.index < this.fence ) {
action.accept$I(this.array[this.index++] & 255);
return true;
}return false;
});

Clazz.newMeth(C$, 'estimateSize$',  function () {
return (this.fence - this.index);
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return this.cs;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:17 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
