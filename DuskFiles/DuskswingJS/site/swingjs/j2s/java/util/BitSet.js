(function(){var P$=java.util,p$1={},I$=[[0,'java.util.Arrays','javajs.util.SB','java.util.stream.StreamSupport','java.util.Spliterators','java.nio.ByteBuffer','java.nio.ByteOrder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BitSet", null, null, ['Cloneable', 'javajs.api.JSONEncodable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.wordsInUse=0;
this.sizeIsSticky=false;
},1);

C$.$fields$=[['Z',['sizeIsSticky'],'I',['wordsInUse'],'O',['+words']]
,['O',['emptyBitmap','int[]']]]

Clazz.newMeth(C$, 'wordIndex$I',  function (bitIndex) {
return bitIndex >> 5;
}, 1);

Clazz.newMeth(C$, 'recalculateWordsInUse$',  function () {
var i;
for (i=this.wordsInUse - 1; i >= 0; i--) if (this.words[i] != 0) break;

this.wordsInUse=i + 1;
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
p$1.initWords$I.apply(this, [32]);
this.sizeIsSticky=false;
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (nbits) {
C$.c$.apply(this, []);
this.init$I(nbits);
}, 1);

Clazz.newMeth(C$, 'valueOf$JA',  function (longs) {
var n;
for (n=longs.length; n > 0 && Long.$eq(longs[n - 1],0 ) ; n--) ;
var words=Clazz.array(Integer.TYPE, [n * 2]);
var len=-1;
var last;
for (var i=0, pt=0; i < n; i++) {
var l=longs[i];
words[pt++]=Long.$ival(l);
words[pt++]=(last=Long.$ival((Long.$sr(l,32))));
if (last != 0) len=pt;
}
var bs=Clazz.new_(C$.c$$IA,[words]);
if (len < words.length) --bs.wordsInUse;
return bs;
}, 1);

Clazz.newMeth(C$, 'valueOf$java_nio_LongBuffer',  function (lb) {
lb=lb.slice$();
var n;
for (n=lb.remaining$(); n > 0 && Long.$eq(lb.get$I(n - 1),0 ) ; n--) ;
var words=Clazz.array(Long.TYPE, [n]);
lb.get$JA(words);
return C$.valueOf$JA(words);
}, 1);

Clazz.newMeth(C$, 'c$$IA',  function (words) {
;C$.$init$.apply(this);
this.words=words;
this.wordsInUse=words.length;
}, 1);

Clazz.newMeth(C$, 'init$I',  function (nbits) {
if (nbits < 0) throw Clazz.new_(Clazz.load('NegativeArraySizeException').c$$S,["nbits < 0: " + nbits]);
p$1.initWords$I.apply(this, [nbits]);
this.sizeIsSticky=true;
});

Clazz.newMeth(C$, 'initWords$I',  function (nbits) {
this.words=Clazz.array(Integer.TYPE, [C$.wordIndex$I(nbits - 1) + 1]);
}, p$1);

Clazz.newMeth(C$, 'ensureCapacity$I',  function (wordsRequired) {
if (this.words.length < wordsRequired) {
var request=Math.max(2 * this.words.length, wordsRequired);
p$1.setLength$I.apply(this, [request]);
this.sizeIsSticky=false;
}}, p$1);

Clazz.newMeth(C$, 'expandTo$I',  function (wordIndex) {
var wordsRequired=wordIndex + 1;
if (this.wordsInUse < wordsRequired) {
p$1.ensureCapacity$I.apply(this, [wordsRequired]);
this.wordsInUse=wordsRequired;
}});

Clazz.newMeth(C$, 'set$I',  function (bitIndex) {
if (bitIndex < 0) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["bitIndex < 0: " + bitIndex]);
var wordIndex=C$.wordIndex$I(bitIndex);
this.expandTo$I(wordIndex);
this.words[wordIndex]|=(1 << bitIndex);
});

Clazz.newMeth(C$, 'setBitTo$I$Z',  function (bitIndex, value) {
if (value) this.set$I(bitIndex);
 else this.clear$I(bitIndex);
});

Clazz.newMeth(C$, 'setBits$I$I',  function (fromIndex, toIndex) {
if (fromIndex == toIndex) return;
var startWordIndex=C$.wordIndex$I(fromIndex);
var endWordIndex=C$.wordIndex$I(toIndex - 1);
this.expandTo$I(endWordIndex);
var firstWordMask=-1 << fromIndex;
var lastWordMask=-1 >>> -toIndex;
if (startWordIndex == endWordIndex) {
this.words[startWordIndex]|=(firstWordMask & lastWordMask);
} else {
this.words[startWordIndex]|=firstWordMask;
for (var i=startWordIndex + 1; i < endWordIndex; i++) this.words[i]=-1;

this.words[endWordIndex]|=lastWordMask;
}});

Clazz.newMeth(C$, 'clear$I',  function (bitIndex) {
if (bitIndex < 0) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["bitIndex < 0: " + bitIndex]);
var wordIndex=C$.wordIndex$I(bitIndex);
if (wordIndex >= this.wordsInUse) return;
this.words[wordIndex]&=~(1 << bitIndex);
this.recalculateWordsInUse$();
});

Clazz.newMeth(C$, 'clearBits$I$I',  function (fromIndex, toIndex) {
if (fromIndex == toIndex) return;
var startWordIndex=C$.wordIndex$I(fromIndex);
if (startWordIndex >= this.wordsInUse) return;
var endWordIndex=C$.wordIndex$I(toIndex - 1);
if (endWordIndex >= this.wordsInUse) {
toIndex=this.length$();
endWordIndex=this.wordsInUse - 1;
}var firstWordMask=-1 << fromIndex;
var lastWordMask=-1 >>> -toIndex;
if (startWordIndex == endWordIndex) {
this.words[startWordIndex]&=~(firstWordMask & lastWordMask);
} else {
this.words[startWordIndex]&=~firstWordMask;
for (var i=startWordIndex + 1; i < endWordIndex; i++) this.words[i]=0;

this.words[endWordIndex]&=~lastWordMask;
}this.recalculateWordsInUse$();
});

Clazz.newMeth(C$, 'clearAll$',  function () {
while (this.wordsInUse > 0)this.words[--this.wordsInUse]=0;

});

Clazz.newMeth(C$, 'get$I',  function (bitIndex) {
if (bitIndex < 0) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["bitIndex < 0: " + bitIndex]);
var wordIndex=C$.wordIndex$I(bitIndex);
return (wordIndex < this.wordsInUse) && ((this.words[wordIndex] & (1 << bitIndex)) != 0) ;
});

Clazz.newMeth(C$, 'nextSetBit$I',  function (fromIndex) {
if (fromIndex < 0) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["fromIndex < 0: " + fromIndex]);
var u=C$.wordIndex$I(fromIndex);
if (u >= this.wordsInUse) return -1;
var word=this.words[u] & (-1 << fromIndex);
while (true){
if (word != 0) return (u * 32) + Integer.numberOfTrailingZeros$I(word);
if (++u == this.wordsInUse) return -1;
word=this.words[u];
}
});

Clazz.newMeth(C$, 'nextClearBit$I',  function (fromIndex) {
if (fromIndex < 0) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["fromIndex < 0: " + fromIndex]);
var u=C$.wordIndex$I(fromIndex);
if (u >= this.wordsInUse) return fromIndex;
var word=~this.words[u] & (-1 << fromIndex);
while (true){
if (word != 0) return (u * 32) + Integer.numberOfTrailingZeros$I(word);
if (++u == this.wordsInUse) return this.wordsInUse * 32;
word=~this.words[u];
}
});

Clazz.newMeth(C$, 'length$',  function () {
if (this.wordsInUse == 0) return 0;
return 32 * (this.wordsInUse - 1) + (32 - Integer.numberOfLeadingZeros$I(this.words[this.wordsInUse - 1]));
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.wordsInUse == 0;
});

Clazz.newMeth(C$, 'intersects$java_util_BitSet',  function (set) {
for (var i=Math.min(this.wordsInUse, set.wordsInUse) - 1; i >= 0; i--) if ((this.words[i] & set.words[i]) != 0) return true;

return false;
});

Clazz.newMeth(C$, 'cardinality$',  function () {
var sum=0;
for (var i=0; i < this.wordsInUse; i++) sum+=Integer.bitCount$I(this.words[i]);

return sum;
});

Clazz.newMeth(C$, 'and$java_util_BitSet',  function (set) {
if (this === set ) return;
while (this.wordsInUse > set.wordsInUse)this.words[--this.wordsInUse]=0;

for (var i=0; i < this.wordsInUse; i++) this.words[i]&=set.words[i];

this.recalculateWordsInUse$();
});

Clazz.newMeth(C$, 'or$java_util_BitSet',  function (set) {
if (this === set ) return;
var wordsInCommon=Math.min(this.wordsInUse, set.wordsInUse);
if (this.wordsInUse < set.wordsInUse) {
p$1.ensureCapacity$I.apply(this, [set.wordsInUse]);
this.wordsInUse=set.wordsInUse;
}for (var i=0; i < wordsInCommon; i++) this.words[i]|=set.words[i];

if (wordsInCommon < set.wordsInUse) System.arraycopy$O$I$O$I$I(set.words, wordsInCommon, this.words, wordsInCommon, this.wordsInUse - wordsInCommon);
});

Clazz.newMeth(C$, 'xor$java_util_BitSet',  function (set) {
var wordsInCommon=Math.min(this.wordsInUse, set.wordsInUse);
if (this.wordsInUse < set.wordsInUse) {
p$1.ensureCapacity$I.apply(this, [set.wordsInUse]);
this.wordsInUse=set.wordsInUse;
}for (var i=0; i < wordsInCommon; i++) this.words[i]^=set.words[i];

if (wordsInCommon < set.wordsInUse) System.arraycopy$O$I$O$I$I(set.words, wordsInCommon, this.words, wordsInCommon, set.wordsInUse - wordsInCommon);
this.recalculateWordsInUse$();
});

Clazz.newMeth(C$, 'andNot$java_util_BitSet',  function (set) {
for (var i=Math.min(this.wordsInUse, set.wordsInUse) - 1; i >= 0; i--) this.words[i]&=~set.words[i];

this.recalculateWordsInUse$();
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var h=1234;
for (var i=this.wordsInUse; --i >= 0; ) (h=Long.$xor(h,(this.words[i] * (i + 1))));

return Long.$ival((Long.$xor((Long.$sr(h,32)),h)));
});

Clazz.newMeth(C$, 'size$',  function () {
return this.words.length * 32;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (!(Clazz.instanceOf(obj, "java.util.BitSet"))) return false;
if (this === obj ) return true;
var set=obj;
if (this.wordsInUse != set.wordsInUse) return false;
for (var i=0; i < this.wordsInUse; i++) if (this.words[i] != set.words[i]) return false;

return true;
});

Clazz.newMeth(C$, 'clone$',  function () {
if (!this.sizeIsSticky && this.wordsInUse != this.words.length ) this.words=$I$(1).copyOf$IA$I(this.words, this.wordsInUse);
return C$.copy$java_util_BitSet(this);
});

Clazz.newMeth(C$, 'setLength$I',  function (n) {
if (n == this.words.length) return;
var a=Clazz.array(Integer.TYPE, [n]);
System.arraycopy$O$I$O$I$I(this.words, 0, a, 0, this.wordsInUse);
this.words=a;
}, p$1);

Clazz.newMeth(C$, 'toString',  function () {
return C$.escape$java_util_BitSet$C$C(this, "(", ")");
});

Clazz.newMeth(C$, 'copy$java_util_BitSet',  function (bitsetToCopy) {
var bs=Clazz.new_(C$);
var wordCount=bitsetToCopy.wordsInUse;
if (wordCount == 0) {
bs.words=C$.emptyBitmap;
} else {
bs.words=Clazz.array(Integer.TYPE, [bs.wordsInUse=wordCount]);
System.arraycopy$O$I$O$I$I(bitsetToCopy.words, 0, bs.words, 0, wordCount);
}return bs;
}, 1);

Clazz.newMeth(C$, 'cardinalityN$I',  function (max) {
var n=this.cardinality$();
for (var i=this.length$(); --i >= max; ) if (this.get$I(i)) --n;

return n;
});

Clazz.newMeth(C$, 'toJSON$',  function () {
var numBits=(this.wordsInUse > 128 ? this.cardinality$() : this.wordsInUse * 32);
var b=$I$(2).newN$I(6 * numBits + 2);
b.appendC$C("[");
var i=this.nextSetBit$I(0);
if (i != -1) {
b.appendI$I(i);
for (i=this.nextSetBit$I(i + 1); i >= 0; i=this.nextSetBit$I(i + 1)) {
var endOfRun=this.nextClearBit$I(i);
do {
b.append$S(", ").appendI$I(i);
} while (++i < endOfRun);
}
}b.appendC$C("]");
return b.toString();
});

Clazz.newMeth(C$, 'escape$java_util_BitSet$C$C',  function (bs, chOpen, chClose) {
if (bs == null ) return chOpen + "{}" + chClose ;
var s=Clazz.new_($I$(2,1));
s.append$S(chOpen + "{");
var imax=bs.length$();
var iLast=-1;
var iFirst=-2;
var i=-1;
while (++i <= imax){
var isSet=bs.get$I(i);
if (i == imax || iLast >= 0 && !isSet  ) {
if (iLast >= 0 && iFirst != iLast ) s.append$S((iFirst == iLast - 1 ? " " : ":") + iLast);
if (i == imax) break;
iLast=-1;
}if (bs.get$I(i)) {
if (iLast < 0) {
s.append$S((iFirst == -2 ? "" : " ") + i);
iFirst=i;
}iLast=i;
}}
s.append$S("}").appendC$C(chClose);
return s.toString();
}, 1);

Clazz.newMeth(C$, 'unescape$S',  function (str) {
var ch;
var len;
if (str == null  || (len=(str=str.trim$()).length$()) < 4  || str.equalsIgnoreCase$S("({null})")  || (ch=str.charAt$I(0)) != "(" && ch != "["   || str.charAt$I(len - 1) != (ch == "(" ? ")" : "]")  || str.charAt$I(1) != "{"  || str.indexOf$I("}") != len - 2 ) return null;
len-=2;
for (var i=len; --i >= 2; ) if ((((ch=str.charAt$I(i)).$c()) < 48  || ch.$c() > 57  ) && ch != " "  && ch != "\t"  && ch != ":" ) return null;

var lastN=len;
while (48 <= ((ch=str.charAt$I(--lastN)).$c())  && ch.$c() <= 57  ){
}
if (++lastN == len) lastN=0;
 else try {
lastN=Integer.parseInt$S(str.substring$I$I(lastN, len));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
return null;
} else {
throw e;
}
}
var bs=Clazz.new_(C$.c$$I,[lastN]);
lastN=-1;
var iPrev=-1;
var iThis=-2;
for (var i=2; i <= len; i++) {
switch ((ch=str.charAt$I(i)).$c()) {
case 9:
case 32:
case 125:
if (iThis < 0) break;
if (iThis < lastN) return null;
lastN=iThis;
if (iPrev < 0) iPrev=iThis;
bs.setBits$I$I(iPrev, iThis + 1);
iPrev=-1;
iThis=-2;
break;
case 58:
iPrev=lastN=iThis;
iThis=-2;
break;
default:
if (48 <= ch.$c()  && ch.$c() <= 57  ) {
if (iThis < 0) iThis=0;
iThis=(iThis * 10) + (ch.$c() - 48);
}}
}
return (iPrev >= 0 ? null : bs);
}, 1);

Clazz.newMeth(C$, 'flip$I',  function (bitIndex) {
if (bitIndex < 0) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["bitIndex < 0: " + bitIndex]);
var wordIndex=C$.wordIndex$I(bitIndex);
this.expandTo$I(wordIndex);
this.words[wordIndex]^=(1 << bitIndex);
});

Clazz.newMeth(C$, 'flip$I$I',  function (fromIndex, toIndex) {
if (fromIndex == toIndex) return;
var startWordIndex=C$.wordIndex$I(fromIndex);
var endWordIndex=C$.wordIndex$I(toIndex - 1);
this.expandTo$I(endWordIndex);
var firstWordMask=-1 << fromIndex;
var lastWordMask=-1 >>> -toIndex;
if (startWordIndex == endWordIndex) {
this.words[startWordIndex]^=(firstWordMask & lastWordMask);
} else {
this.words[startWordIndex]^=firstWordMask;
for (var i=startWordIndex + 1; i < endWordIndex; i++) this.words[i]^=-1;

this.words[endWordIndex]^=lastWordMask;
}});

Clazz.newMeth(C$, 'set$I$Z',  function (bitIndex, value) {
this.setBitTo$I$Z(bitIndex, value);
});

Clazz.newMeth(C$, 'set$I$I',  function (fromIndex, toIndex) {
this.setBits$I$I(fromIndex, toIndex);
});

Clazz.newMeth(C$, 'set$I$I$Z',  function (fromIndex, toIndex, value) {
if (value) this.set$I$I(fromIndex, toIndex);
 else this.clear$I$I(fromIndex, toIndex);
});

Clazz.newMeth(C$, 'clear$I$I',  function (fromIndex, toIndex) {
this.clearBits$I$I(fromIndex, toIndex);
});

Clazz.newMeth(C$, 'clear$',  function () {
this.clearAll$();
});

Clazz.newMeth(C$, 'get$I$I',  function (fromIndex, toIndex) {
var len=this.length$();
if (len <= fromIndex || fromIndex == toIndex ) return Clazz.new_(C$.c$$I,[0]);
if (toIndex > len) toIndex=len;
var result=Clazz.new_(C$.c$$I,[toIndex - fromIndex]);
var targetWords=C$.wordIndex$I(toIndex - fromIndex - 1 ) + 1;
var sourceIndex=C$.wordIndex$I(fromIndex);
var wordAligned=((fromIndex & 31) == 0);
for (var i=0; i < targetWords - 1; i++, sourceIndex++) result.words[i]=wordAligned ? this.words[sourceIndex] : (this.words[sourceIndex] >>> fromIndex) | (this.words[sourceIndex + 1] << -fromIndex);

var lastWordMask=-1 >>> -toIndex;
result.words[targetWords - 1]=((toIndex - 1) & 31) < (fromIndex & 31) ? ((this.words[sourceIndex] >>> fromIndex) | (this.words[sourceIndex + 1] & lastWordMask) << -fromIndex) : ((this.words[sourceIndex] & lastWordMask) >>> fromIndex);
result.wordsInUse=targetWords;
result.recalculateWordsInUse$();
return result;
});

Clazz.newMeth(C$, 'toLongArray$',  function () {
var a=Clazz.array(Long.TYPE, [((this.words.length + 1)/2|0)]);
for (var i=0, pt=0, n=this.words.length; i < n; i+=2) {
var l=(i == n - 1 ? 0 : this.words[i + 1]);
a[pt++]=Long.$or((Long.$sl(l,32)),(Long.$and(this.words[i],4294967295)));
}
return a;
});

Clazz.newMeth(C$, 'valueOf$IA',  function (longs) {
var n;
for (n=longs.length; n > 0 && longs[n - 1] == 0 ; n--) ;
return Clazz.new_(C$.c$$IA,[$I$(1).copyOf$IA$I(longs, n)]);
}, 1);

Clazz.newMeth(C$, 'previousSetBit$I',  function (fromIndex) {
if (fromIndex < 0) {
if (fromIndex == -1) return -1;
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["fromIndex < -1: " + fromIndex]);
}var u=C$.wordIndex$I(fromIndex);
if (u >= this.wordsInUse) return this.length$() - 1;
var word=this.words[u] & (-1 >>> -(fromIndex + 1));
while (true){
if (word != 0) return (u + 1) * 32 - 1 - Integer.numberOfLeadingZeros$I(word);
if (u-- == 0) return -1;
word=this.words[u];
}
});

Clazz.newMeth(C$, 'previousClearBit$I',  function (fromIndex) {
if (fromIndex < 0) {
if (fromIndex == -1) return -1;
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["fromIndex < -1: " + fromIndex]);
}var u=C$.wordIndex$I(fromIndex);
if (u >= this.wordsInUse) return fromIndex;
var word=~this.words[u] & (-1 >>> -(fromIndex + 1));
while (true){
if (word != 0) return (u + 1) * 32 - 1 - Integer.numberOfLeadingZeros$I(word);
if (u-- == 0) return -1;
word=~this.words[u];
}
});

Clazz.newMeth(C$, 'stream$',  function () {
return $I$(3,"intStream$java_util_function_Supplier$I$Z",[((P$.BitSet$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "BitSet$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$',  function () { return ($I$(4,"spliterator$java_util_PrimitiveIterator_OfInt$J$I",[Clazz.new_(P$.BitSet$1BitSetIterator.$init$,[this, null]), this.b$['java.util.BitSet'].cardinality$.apply(this.b$['java.util.BitSet'], []), 21]));});
})()
), Clazz.new_(P$.BitSet$lambda1.$init$,[this, null])), 16469, false]);
});

Clazz.newMeth(C$, 'toIntArray$',  function () {
return $I$(1).copyOf$IA$I(this.words, this.wordsInUse);
});

Clazz.newMeth(C$, 'valueOf$java_nio_IntBuffer',  function (lb) {
lb=lb.slice$();
var n;
for (n=lb.remaining$(); n > 0 && lb.get$I(n - 1) == 0 ; n--) ;
var words=Clazz.array(Integer.TYPE, [n]);
lb.get$IA(words);
return Clazz.new_(C$.c$$IA,[words]);
}, 1);

Clazz.newMeth(C$, 'valueOf$BA',  function (bytes) {
return C$.valueOf$java_nio_ByteBuffer($I$(5).wrap$BA(bytes));
}, 1);

Clazz.newMeth(C$, 'valueOf$java_nio_ByteBuffer',  function (bb) {
bb=bb.slice$().order$java_nio_ByteOrder($I$(6).LITTLE_ENDIAN);
var n;
for (n=bb.remaining$(); n > 0 && bb.get$I(n - 1) == 0 ; n--) ;
var words=Clazz.array(Integer.TYPE, [((n + 7)/4|0)]);
bb.limit$I(n);
var i=0;
while (bb.remaining$() >= 4)words[i++]=bb.getInt$();

for (var remaining=bb.remaining$(), j=0; j < remaining; j++) words[i]=Long.$ival(Long.$or(words[i],(Long.$sl((Long.$and(bb.get$(),255)),(j << 3)))));

return Clazz.new_(C$.c$$IA,[words]);
}, 1);

Clazz.newMeth(C$, 'toByteArray$',  function () {
var n=this.wordsInUse;
if (n == 0) return Clazz.array(Byte.TYPE, [0]);
var len=4 * (n - 1);
for (var x=this.words[n - 1]; x != 0; x>>>=8) ++len;

var bytes=Clazz.array(Byte.TYPE, [len]);
var bb=$I$(5).wrap$BA(bytes).order$java_nio_ByteOrder($I$(6).LITTLE_ENDIAN);
for (var i=0; i < n - 1; i++) bb.putInt$I(this.words[i]);

for (var x=this.words[n - 1]; x != 0; x>>>=8) bb.put$B(($b$[0] = (x & 255), $b$[0]));

return bytes;
});

C$.$static$=function(){C$.$static$=0;
C$.emptyBitmap=Clazz.array(Integer.TYPE, [0]);
};
var $b$ = new Int8Array(1);
;
(function(){/*l*/var C$=Clazz.newClass(P$, "BitSet$1BitSetIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.PrimitiveIterator','java.util.PrimitiveIterator.OfInt']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.next=this.b$['java.util.BitSet'].nextSetBit$I.apply(this.b$['java.util.BitSet'], [0]);
},1);

C$.$fields$=[['I',['next']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.next != -1;
});

Clazz.newMeth(C$, 'nextInt$',  function () {
if (this.next != -1) {
var ret=this.next;
this.next=this.b$['java.util.BitSet'].nextSetBit$I.apply(this.b$['java.util.BitSet'], [this.next + 1]);
return ret;
} else {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:31 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
