(function(){var P$=Clazz.newPackage("sun.misc"),p$1={},I$=[[0,'java.util.Arrays','StringBuilder','java.math.BigInteger']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FDBigInteger");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isImmutable=false;
},1);

C$.$fields$=[['Z',['isImmutable'],'I',['offset','nWords'],'O',['data','int[]']]
,['O',['SMALL_5_POW','int[]','LONG_5_POW','long[]','POW_5_CACHE','sun.misc.FDBigInteger[]','ZERO','sun.misc.FDBigInteger']]]

Clazz.newMeth(C$, 'c$$IA$I',  function (data, offset) {
;C$.$init$.apply(this);
this.data=data;
this.offset=offset;
this.nWords=data.length;
p$1.trimLeadingZeros.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$J$CA$I$I',  function (lValue, digits, kDigits, nDigits) {
;C$.$init$.apply(this);
var n=Math.max(((nDigits + 8)/9|0), 2);
this.data=Clazz.array(Integer.TYPE, [n]);
this.data[0]=Long.$ival(lValue);
this.data[1]=Long.$ival((Long.$usr(lValue,32)));
this.offset=0;
this.nWords=2;
var i=kDigits;
var limit=nDigits - 5;
var v;
while (i < limit){
var ilim=i + 5;
v=digits[i++].$c() - 48;
while (i < ilim){
v=10 * v + digits[i++].$c() - 48;
}
p$1.multAddMe$I$I.apply(this, [100000, v]);
}
var factor=1;
v=0;
while (i < nDigits){
v=10 * v + digits[i++].$c() - 48;
factor*=10;
}
if (factor != 1) {
p$1.multAddMe$I$I.apply(this, [factor, v]);
}p$1.trimLeadingZeros.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'valueOfPow52$I$I',  function (p5, p2) {
if (p5 != 0) {
if (p2 == 0) {
return C$.big5pow$I(p5);
} else if (p5 < C$.SMALL_5_POW.length) {
var pow5=C$.SMALL_5_POW[p5];
var wordcount=p2 >> 5;
var bitcount=p2 & 31;
if (bitcount == 0) {
return Clazz.new_(C$.c$$IA$I,[Clazz.array(Integer.TYPE, -1, [pow5]), wordcount]);
} else {
return Clazz.new_(C$.c$$IA$I,[Clazz.array(Integer.TYPE, -1, [pow5 << bitcount, pow5 >>> (32 - bitcount)]), wordcount]);
}} else {
return C$.big5pow$I(p5).leftShift$I(p2);
}} else {
return C$.valueOfPow2$I(p2);
}}, 1);

Clazz.newMeth(C$, 'valueOfMulPow52$J$I$I',  function (value, p5, p2) {
Clazz.assert(C$, this, function(){return p5 >= 0}, function(){return p5});
Clazz.assert(C$, this, function(){return p2 >= 0}, function(){return p2});
var v0=Long.$ival(value);
var v1=Long.$ival((Long.$usr(value,32)));
var wordcount=p2 >> 5;
var bitcount=p2 & 31;
if (p5 != 0) {
if (p5 < C$.SMALL_5_POW.length) {
var pow5=Long.$and(C$.SMALL_5_POW[p5],4294967295);
var carry=Long.$mul((Long.$and(v0,4294967295)),pow5);
v0=Long.$ival(carry);
(carry=Long.$usr(carry,(32)));
carry=Long.$add(Long.$mul((Long.$and(v1,4294967295)),pow5),carry);
v1=Long.$ival(carry);
var v2=Long.$ival((Long.$usr(carry,32)));
if (bitcount == 0) {
return Clazz.new_(C$.c$$IA$I,[Clazz.array(Integer.TYPE, -1, [v0, v1, v2]), wordcount]);
} else {
return Clazz.new_(C$.c$$IA$I,[Clazz.array(Integer.TYPE, -1, [v0 << bitcount, (v1 << bitcount) | (v0 >>> (32 - bitcount)), (v2 << bitcount) | (v1 >>> (32 - bitcount)), v2 >>> (32 - bitcount)]), wordcount]);
}} else {
var pow5=C$.big5pow$I(p5);
var r;
if (v1 == 0) {
r=Clazz.array(Integer.TYPE, [pow5.nWords + 1 + ((p2 != 0) ? 1 : 0) ]);
C$.mult$IA$I$I$IA(pow5.data, pow5.nWords, v0, r);
} else {
r=Clazz.array(Integer.TYPE, [pow5.nWords + 2 + ((p2 != 0) ? 1 : 0) ]);
C$.mult$IA$I$I$I$IA(pow5.data, pow5.nWords, v0, v1, r);
}return (Clazz.new_(C$.c$$IA$I,[r, pow5.offset])).leftShift$I(p2);
}} else if (p2 != 0) {
if (bitcount == 0) {
return Clazz.new_(C$.c$$IA$I,[Clazz.array(Integer.TYPE, -1, [v0, v1]), wordcount]);
} else {
return Clazz.new_(C$.c$$IA$I,[Clazz.array(Integer.TYPE, -1, [v0 << bitcount, (v1 << bitcount) | (v0 >>> (32 - bitcount)), v1 >>> (32 - bitcount)]), wordcount]);
}}return Clazz.new_(C$.c$$IA$I,[Clazz.array(Integer.TYPE, -1, [v0, v1]), 0]);
}, 1);

Clazz.newMeth(C$, 'valueOfPow2$I',  function (p2) {
var wordcount=p2 >> 5;
var bitcount=p2 & 31;
return Clazz.new_(C$.c$$IA$I,[Clazz.array(Integer.TYPE, -1, [1 << bitcount]), wordcount]);
}, 1);

Clazz.newMeth(C$, 'trimLeadingZeros',  function () {
var i=this.nWords;
if (i > 0 && (this.data[--i] == 0) ) {
while (i > 0 && this.data[i - 1] == 0 ){
--i;
}
this.nWords=i;
if (i == 0) {
this.offset=0;
}}}, p$1);

Clazz.newMeth(C$, 'getNormalizationBias$',  function () {
if (this.nWords == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Zero value cannot be normalized"]);
}var zeros=Integer.numberOfLeadingZeros$I(this.data[this.nWords - 1]);
return (zeros < 4) ? 28 + zeros : zeros - 4;
});

Clazz.newMeth(C$, 'leftShift$IA$I$IA$I$I$I',  function (src, idx, result, bitcount, anticount, prev) {
for (; idx > 0; idx--) {
var v=(prev << bitcount);
prev=src[idx - 1];
v|=(prev >>> anticount);
result[idx]=v;
}
var v=prev << bitcount;
result[0]=v;
}, 1);

Clazz.newMeth(C$, 'leftShift$I',  function (shift) {
if (shift == 0 || this.nWords == 0 ) {
return this;
}var wordcount=shift >> 5;
var bitcount=shift & 31;
if (this.isImmutable) {
if (bitcount == 0) {
return Clazz.new_(C$.c$$IA$I,[$I$(1).copyOf$IA$I(this.data, this.nWords), this.offset + wordcount]);
} else {
var anticount=32 - bitcount;
var idx=this.nWords - 1;
var prev=this.data[idx];
var hi=prev >>> anticount;
var result;
if (hi != 0) {
result=Clazz.array(Integer.TYPE, [this.nWords + 1]);
result[this.nWords]=hi;
} else {
result=Clazz.array(Integer.TYPE, [this.nWords]);
}C$.leftShift$IA$I$IA$I$I$I(this.data, idx, result, bitcount, anticount, prev);
return Clazz.new_(C$.c$$IA$I,[result, this.offset + wordcount]);
}} else {
if (bitcount != 0) {
var anticount=32 - bitcount;
if ((this.data[0] << bitcount) == 0) {
var idx=0;
var prev=this.data[idx];
for (; idx < this.nWords - 1; idx++) {
var v=(prev >>> anticount);
prev=this.data[idx + 1];
v|=(prev << bitcount);
this.data[idx]=v;
}
var v=prev >>> anticount;
this.data[idx]=v;
if (v == 0) {
--this.nWords;
}++this.offset;
} else {
var idx=this.nWords - 1;
var prev=this.data[idx];
var hi=prev >>> anticount;
var result=this.data;
var src=this.data;
if (hi != 0) {
if (this.nWords == this.data.length) {
this.data=result=Clazz.array(Integer.TYPE, [this.nWords + 1]);
}result[this.nWords++]=hi;
}C$.leftShift$IA$I$IA$I$I$I(src, idx, result, bitcount, anticount, prev);
}}this.offset+=wordcount;
return this;
}});

Clazz.newMeth(C$, 'size',  function () {
return this.nWords + this.offset;
}, p$1);

Clazz.newMeth(C$, 'quoRemIteration$sun_misc_FDBigInteger',  function (S) {
Clazz.assert(C$, this, function(){return !this.isImmutable}, function(){return "cannot modify immutable value"});
var thSize=p$1.size.apply(this, []);
var sSize=p$1.size.apply(S, []);
if (thSize < sSize) {
var p=C$.multAndCarryBy10$IA$I$IA(this.data, this.nWords, this.data);
if (p != 0) {
this.data[this.nWords++]=p;
} else {
p$1.trimLeadingZeros.apply(this, []);
}return 0;
} else if (thSize > sSize) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["disparate values"]);
}var q=Long.$div((Long.$and(this.data[this.nWords - 1],4294967295)),(Long.$and(S.data[S.nWords - 1],4294967295)));
var diff=p$1.multDiffMe$J$sun_misc_FDBigInteger.apply(this, [q, S]);
if (Long.$ne(diff,0 )) {
var sum=0;
var tStart=S.offset - this.offset;
var sd=S.data;
var td=this.data;
while (Long.$eq(sum,0 )){
for (var sIndex=0, tIndex=tStart; tIndex < this.nWords; sIndex++, tIndex++) {
(sum=Long.$add(sum,(Long.$add((Long.$and(td[tIndex],4294967295)),(Long.$and(sd[sIndex],4294967295))))));
td[tIndex]=Long.$ival(sum);
(sum=Long.$usr(sum,(32)));
}
Clazz.assert(C$, this, function(){return Long.$eq(sum,0 ) || Long.$eq(sum,1 ) }, function(){return sum});
(q=Long.$sub(q,(1)));
}
}var p=C$.multAndCarryBy10$IA$I$IA(this.data, this.nWords, this.data);
Clazz.assert(C$, this, function(){return p == 0}, function(){return p});
p$1.trimLeadingZeros.apply(this, []);
return Long.$ival(q);
});

Clazz.newMeth(C$, 'multBy10$',  function () {
if (this.nWords == 0) {
return this;
}if (this.isImmutable) {
var res=Clazz.array(Integer.TYPE, [this.nWords + 1]);
res[this.nWords]=C$.multAndCarryBy10$IA$I$IA(this.data, this.nWords, res);
return Clazz.new_(C$.c$$IA$I,[res, this.offset]);
} else {
var p=C$.multAndCarryBy10$IA$I$IA(this.data, this.nWords, this.data);
if (p != 0) {
if (this.nWords == this.data.length) {
if (this.data[0] == 0) {
System.arraycopy$O$I$O$I$I(this.data, 1, this.data, 0, --this.nWords);
++this.offset;
} else {
this.data=$I$(1).copyOf$IA$I(this.data, this.data.length + 1);
}}this.data[this.nWords++]=p;
} else {
p$1.trimLeadingZeros.apply(this, []);
}return this;
}});

Clazz.newMeth(C$, 'multByPow52$I$I',  function (p5, p2) {
if (this.nWords == 0) {
return this;
}var res=this;
if (p5 != 0) {
var r;
var extraSize=(p2 != 0) ? 1 : 0;
if (p5 < C$.SMALL_5_POW.length) {
r=Clazz.array(Integer.TYPE, [this.nWords + 1 + extraSize ]);
C$.mult$IA$I$I$IA(this.data, this.nWords, C$.SMALL_5_POW[p5], r);
res=Clazz.new_(C$.c$$IA$I,[r, this.offset]);
} else {
var pow5=C$.big5pow$I(p5);
r=Clazz.array(Integer.TYPE, [this.nWords + p$1.size.apply(pow5, []) + extraSize ]);
C$.mult$IA$I$IA$I$IA(this.data, this.nWords, pow5.data, pow5.nWords, r);
res=Clazz.new_(C$.c$$IA$I,[r, this.offset + pow5.offset]);
}}return res.leftShift$I(p2);
});

Clazz.newMeth(C$, 'mult$IA$I$IA$I$IA',  function (s1, s1Len, s2, s2Len, dst) {
for (var i=0; i < s1Len; i++) {
var v=Long.$and(s1[i],4294967295);
var p=0;
for (var j=0; j < s2Len; j++) {
(p=Long.$add(p,(Long.$add((Long.$and(dst[i + j],4294967295)),Long.$mul(v,(Long.$and(s2[j],4294967295)))))));
dst[i + j]=Long.$ival(p);
(p=Long.$usr(p,(32)));
}
dst[i + s2Len]=Long.$ival(p);
}
}, 1);

Clazz.newMeth(C$, 'leftInplaceSub$sun_misc_FDBigInteger',  function (subtrahend) {
Clazz.assert(C$, this, function(){return p$1.size.apply(this, []) >= p$1.size.apply(subtrahend, [])}, function(){return "result should be positive"});
var minuend;
if (this.isImmutable) {
minuend=Clazz.new_(C$.c$$IA$I,[this.data.clone$(), this.offset]);
} else {
minuend=this;
}var offsetDiff=subtrahend.offset - minuend.offset;
var sData=subtrahend.data;
var mData=minuend.data;
var subLen=subtrahend.nWords;
var minLen=minuend.nWords;
if (offsetDiff < 0) {
var rLen=minLen - offsetDiff;
if (rLen < mData.length) {
System.arraycopy$O$I$O$I$I(mData, 0, mData, -offsetDiff, minLen);
$I$(1).fill$IA$I$I$I(mData, 0, -offsetDiff, 0);
} else {
var r=Clazz.array(Integer.TYPE, [rLen]);
System.arraycopy$O$I$O$I$I(mData, 0, r, -offsetDiff, minLen);
minuend.data=mData=r;
}minuend.offset=subtrahend.offset;
minuend.nWords=minLen=rLen;
offsetDiff=0;
}var borrow=0;
var mIndex=offsetDiff;
for (var sIndex=0; sIndex < subLen && mIndex < minLen ; sIndex++, mIndex++) {
var diff=Long.$add(Long.$sub((Long.$and(mData[mIndex],4294967295)),(Long.$and(sData[sIndex],4294967295))),borrow);
mData[mIndex]=Long.$ival(diff);
borrow=Long.$sr(diff,32);
}
for (; Long.$ne(borrow,0 ) && mIndex < minLen ; mIndex++) {
var diff=Long.$add((Long.$and(mData[mIndex],4294967295)),borrow);
mData[mIndex]=Long.$ival(diff);
borrow=Long.$sr(diff,32);
}
Clazz.assert(C$, this, function(){return Long.$eq(borrow,0 )}, function(){return borrow});
p$1.trimLeadingZeros.apply(minuend, []);
return minuend;
});

Clazz.newMeth(C$, 'rightInplaceSub$sun_misc_FDBigInteger',  function (subtrahend) {
Clazz.assert(C$, this, function(){return p$1.size.apply(this, []) >= p$1.size.apply(subtrahend, [])}, function(){return "result should be positive"});
var minuend=this;
if (subtrahend.isImmutable) {
subtrahend=Clazz.new_(C$.c$$IA$I,[subtrahend.data.clone$(), subtrahend.offset]);
}var offsetDiff=minuend.offset - subtrahend.offset;
var sData=subtrahend.data;
var mData=minuend.data;
var subLen=subtrahend.nWords;
var minLen=minuend.nWords;
if (offsetDiff < 0) {
var rLen=minLen;
if (rLen < sData.length) {
System.arraycopy$O$I$O$I$I(sData, 0, sData, -offsetDiff, subLen);
$I$(1).fill$IA$I$I$I(sData, 0, -offsetDiff, 0);
} else {
var r=Clazz.array(Integer.TYPE, [rLen]);
System.arraycopy$O$I$O$I$I(sData, 0, r, -offsetDiff, subLen);
subtrahend.data=sData=r;
}subtrahend.offset=minuend.offset;
subLen-=offsetDiff;
offsetDiff=0;
} else {
var rLen=minLen + offsetDiff;
if (rLen >= sData.length) {
subtrahend.data=sData=$I$(1).copyOf$IA$I(sData, rLen);
}}var sIndex=0;
var borrow=0;
for (; sIndex < offsetDiff; sIndex++) {
var diff=Long.$add(Long.$sub(0,(Long.$and(sData[sIndex],4294967295))),borrow);
sData[sIndex]=Long.$ival(diff);
borrow=Long.$sr(diff,32);
}
for (var mIndex=0; mIndex < minLen; sIndex++, mIndex++) {
var diff=Long.$add(Long.$sub((Long.$and(mData[mIndex],4294967295)),(Long.$and(sData[sIndex],4294967295))),borrow);
sData[sIndex]=Long.$ival(diff);
borrow=Long.$sr(diff,32);
}
Clazz.assert(C$, this, function(){return Long.$eq(borrow,0 )}, function(){return borrow});
subtrahend.nWords=sIndex;
p$1.trimLeadingZeros.apply(subtrahend, []);
return subtrahend;
});

Clazz.newMeth(C$, 'checkZeroTail$IA$I',  function (a, from) {
while (from > 0){
if (a[--from] != 0) {
return 1;
}}
return 0;
}, 1);

Clazz.newMeth(C$, 'cmp$sun_misc_FDBigInteger',  function (other) {
var aSize=this.nWords + this.offset;
var bSize=other.nWords + other.offset;
if (aSize > bSize) {
return 1;
} else if (aSize < bSize) {
return -1;
}var aLen=this.nWords;
var bLen=other.nWords;
while (aLen > 0 && bLen > 0 ){
var a=this.data[--aLen];
var b=other.data[--bLen];
if (a != b) {
return (Long.$lt((Long.$and(a,4294967295)),(Long.$and(b,4294967295)) )) ? -1 : 1;
}}
if (aLen > 0) {
return C$.checkZeroTail$IA$I(this.data, aLen);
}if (bLen > 0) {
return -C$.checkZeroTail$IA$I(other.data, bLen);
}return 0;
});

Clazz.newMeth(C$, 'cmpPow52$I$I',  function (p5, p2) {
if (p5 == 0) {
var wordcount=p2 >> 5;
var bitcount=p2 & 31;
var size=this.nWords + this.offset;
if (size > wordcount + 1) {
return 1;
} else if (size < wordcount + 1) {
return -1;
}var a=this.data[this.nWords - 1];
var b=1 << bitcount;
if (a != b) {
return (Long.$lt((Long.$and(a,4294967295)),(Long.$and(b,4294967295)) )) ? -1 : 1;
}return C$.checkZeroTail$IA$I(this.data, this.nWords - 1);
}return this.cmp$sun_misc_FDBigInteger(C$.big5pow$I(p5).leftShift$I(p2));
});

Clazz.newMeth(C$, 'addAndCmp$sun_misc_FDBigInteger$sun_misc_FDBigInteger',  function (x, y) {
var big;
var small;
var xSize=p$1.size.apply(x, []);
var ySize=p$1.size.apply(y, []);
var bSize;
var sSize;
if (xSize >= ySize) {
big=x;
small=y;
bSize=xSize;
sSize=ySize;
} else {
big=y;
small=x;
bSize=ySize;
sSize=xSize;
}var thSize=p$1.size.apply(this, []);
if (bSize == 0) {
return thSize == 0 ? 0 : 1;
}if (sSize == 0) {
return this.cmp$sun_misc_FDBigInteger(big);
}if (bSize > thSize) {
return -1;
}if (bSize + 1 < thSize) {
return 1;
}var top=(Long.$and(big.data[big.nWords - 1],4294967295));
if (sSize == bSize) {
(top=Long.$add(top,((Long.$and(small.data[small.nWords - 1],4294967295)))));
}if (Long.$eq((Long.$usr(top,32)),0 )) {
if (Long.$eq((Long.$usr((Long.$add(top,1)),32)),0 )) {
if (bSize < thSize) {
return 1;
}var v=(Long.$and(this.data[this.nWords - 1],4294967295));
if (Long.$lt(v,top )) {
return -1;
}if (Long.$gt(v,Long.$add(top,1) )) {
return 1;
}}} else {
if (bSize + 1 > thSize) {
return -1;
}(top=Long.$usr(top,(32)));
var v=(Long.$and(this.data[this.nWords - 1],4294967295));
if (Long.$lt(v,top )) {
return -1;
}if (Long.$gt(v,Long.$add(top,1) )) {
return 1;
}}return this.cmp$sun_misc_FDBigInteger(p$1.add$sun_misc_FDBigInteger.apply(big, [small]));
});

Clazz.newMeth(C$, 'makeImmutable$',  function () {
this.isImmutable=true;
});

Clazz.newMeth(C$, 'mult$I',  function (i) {
if (this.nWords == 0) {
return this;
}var r=Clazz.array(Integer.TYPE, [this.nWords + 1]);
C$.mult$IA$I$I$IA(this.data, this.nWords, i, r);
return Clazz.new_(C$.c$$IA$I,[r, this.offset]);
}, p$1);

Clazz.newMeth(C$, 'mult$sun_misc_FDBigInteger',  function (other) {
if (this.nWords == 0) {
return this;
}if (p$1.size.apply(this, []) == 1) {
return p$1.mult$I.apply(other, [this.data[0]]);
}if (other.nWords == 0) {
return other;
}if (p$1.size.apply(other, []) == 1) {
return p$1.mult$I.apply(this, [other.data[0]]);
}var r=Clazz.array(Integer.TYPE, [this.nWords + other.nWords]);
C$.mult$IA$I$IA$I$IA(this.data, this.nWords, other.data, other.nWords, r);
return Clazz.new_(C$.c$$IA$I,[r, this.offset + other.offset]);
}, p$1);

Clazz.newMeth(C$, 'add$sun_misc_FDBigInteger',  function (other) {
var big;
var small;
var bigLen;
var smallLen;
var tSize=p$1.size.apply(this, []);
var oSize=p$1.size.apply(other, []);
if (tSize >= oSize) {
big=this;
bigLen=tSize;
small=other;
smallLen=oSize;
} else {
big=other;
bigLen=oSize;
small=this;
smallLen=tSize;
}var r=Clazz.array(Integer.TYPE, [bigLen + 1]);
var i=0;
var carry=0;
for (; i < smallLen; i++) {
(carry=Long.$add(carry,(Long.$add((i < big.offset ? 0 : (Long.$and(big.data[i - big.offset],4294967295))),((i < small.offset ? 0 : (Long.$and(small.data[i - small.offset],4294967295))))))));
r[i]=Long.$ival(carry);
(carry=Long.$sr(carry,(32)));
}
for (; i < bigLen; i++) {
(carry=Long.$add(carry,((i < big.offset ? 0 : (Long.$and(big.data[i - big.offset],4294967295))))));
r[i]=Long.$ival(carry);
(carry=Long.$sr(carry,(32)));
}
r[bigLen]=Long.$ival(carry);
return Clazz.new_(C$.c$$IA$I,[r, 0]);
}, p$1);

Clazz.newMeth(C$, 'multAddMe$I$I',  function (iv, addend) {
var v=Long.$and(iv,4294967295);
var p=Long.$add(Long.$mul(v,(Long.$and(this.data[0],4294967295))),(Long.$and(addend,4294967295)));
this.data[0]=Long.$ival(p);
(p=Long.$usr(p,(32)));
for (var i=1; i < this.nWords; i++) {
(p=Long.$add(p,(Long.$mul(v,(Long.$and(this.data[i],4294967295))))));
this.data[i]=Long.$ival(p);
(p=Long.$usr(p,(32)));
}
if (Long.$ne(p,0 )) {
this.data[this.nWords++]=Long.$ival(p);
}}, p$1);

Clazz.newMeth(C$, 'multDiffMe$J$sun_misc_FDBigInteger',  function (q, S) {
var diff=0;
if (Long.$ne(q,0 )) {
var deltaSize=S.offset - this.offset;
if (deltaSize >= 0) {
var sd=S.data;
var td=this.data;
for (var sIndex=0, tIndex=deltaSize; sIndex < S.nWords; sIndex++, tIndex++) {
(diff=Long.$add(diff,(Long.$sub((Long.$and(td[tIndex],4294967295)),Long.$mul(q,(Long.$and(sd[sIndex],4294967295)))))));
td[tIndex]=Long.$ival(diff);
(diff=Long.$sr(diff,(32)));
}
} else {
deltaSize=-deltaSize;
var rd=Clazz.array(Integer.TYPE, [this.nWords + deltaSize]);
var sIndex=0;
var rIndex=0;
var sd=S.data;
for (; rIndex < deltaSize && sIndex < S.nWords ; sIndex++, rIndex++) {
(diff=Long.$sub(diff,(Long.$mul(q,(Long.$and(sd[sIndex],4294967295))))));
rd[rIndex]=Long.$ival(diff);
(diff=Long.$sr(diff,(32)));
}
var tIndex=0;
var td=this.data;
for (; sIndex < S.nWords; sIndex++, tIndex++, rIndex++) {
(diff=Long.$add(diff,(Long.$sub((Long.$and(td[tIndex],4294967295)),Long.$mul(q,(Long.$and(sd[sIndex],4294967295)))))));
rd[rIndex]=Long.$ival(diff);
(diff=Long.$sr(diff,(32)));
}
this.nWords+=deltaSize;
this.offset-=deltaSize;
this.data=rd;
}}return diff;
}, p$1);

Clazz.newMeth(C$, 'multAndCarryBy10$IA$I$IA',  function (src, srcLen, dst) {
var carry=0;
for (var i=0; i < srcLen; i++) {
var product=Long.$add(Long.$mul((Long.$and(src[i],4294967295)),10),carry);
dst[i]=Long.$ival(product);
carry=Long.$usr(product,32);
}
return Long.$ival(carry);
}, 1);

Clazz.newMeth(C$, 'mult$IA$I$I$IA',  function (src, srcLen, value, dst) {
var val=Long.$and(value,4294967295);
var carry=0;
for (var i=0; i < srcLen; i++) {
var product=Long.$add(Long.$mul((Long.$and(src[i],4294967295)),val),carry);
dst[i]=Long.$ival(product);
carry=Long.$usr(product,32);
}
dst[srcLen]=Long.$ival(carry);
}, 1);

Clazz.newMeth(C$, 'mult$IA$I$I$I$IA',  function (src, srcLen, v0, v1, dst) {
var v=Long.$and(v0,4294967295);
var carry=0;
for (var j=0; j < srcLen; j++) {
var product=Long.$add(Long.$mul(v,(Long.$and(src[j],4294967295))),carry);
dst[j]=Long.$ival(product);
carry=Long.$usr(product,32);
}
dst[srcLen]=Long.$ival(carry);
v=Long.$and(v1,4294967295);
carry=0;
for (var j=0; j < srcLen; j++) {
var product=Long.$add(Long.$add((Long.$and(dst[j + 1],4294967295)),Long.$mul(v,(Long.$and(src[j],4294967295)))),carry);
dst[j + 1]=Long.$ival(product);
carry=Long.$usr(product,32);
}
dst[srcLen + 1]=Long.$ival(carry);
}, 1);

Clazz.newMeth(C$, 'big5pow$I',  function (p) {
Clazz.assert(C$, this, function(){return p >= 0}, function(){return p});
if (p < 340) {
return C$.POW_5_CACHE[p];
}return C$.big5powRec$I(p);
}, 1);

Clazz.newMeth(C$, 'big5powRec$I',  function (p) {
if (p < 340) {
return C$.POW_5_CACHE[p];
}var q;
var r;
q=p >> 1;
r=p - q;
var bigq=C$.big5powRec$I(q);
if (r < C$.SMALL_5_POW.length) {
return p$1.mult$I.apply(bigq, [C$.SMALL_5_POW[r]]);
} else {
return p$1.mult$sun_misc_FDBigInteger.apply(bigq, [C$.big5powRec$I(r)]);
}}, 1);

Clazz.newMeth(C$, 'toHexString$',  function () {
if (this.nWords == 0) {
return "0";
}var sb=Clazz.new_([(this.nWords + this.offset) * 8],$I$(2,1).c$$I);
for (var i=this.nWords - 1; i >= 0; i--) {
var subStr=Integer.toHexString$I(this.data[i]);
for (var j=subStr.length$(); j < 8; j++) {
sb.append$C("0");
}
sb.append$S(subStr);
}
for (var i=this.offset; i > 0; i--) {
sb.append$S("00000000");
}
return sb.toString();
});

Clazz.newMeth(C$, 'toBigInteger$',  function () {
var magnitude=Clazz.array(Byte.TYPE, [this.nWords * 4 + 1]);
for (var i=0; i < this.nWords; i++) {
var w=this.data[i];
magnitude[magnitude.length - 4 * i - 1]=(w|0);
magnitude[magnitude.length - 4 * i - 2]=((w >> 8)|0);
magnitude[magnitude.length - 4 * i - 3]=((w >> 16)|0);
magnitude[magnitude.length - 4 * i - 4]=((w >> 24)|0);
}
return Clazz.new_($I$(3,1).c$$BA,[magnitude]).shiftLeft$I(this.offset * 32);
});

Clazz.newMeth(C$, 'toString',  function () {
return this.toBigInteger$().toString();
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.SMALL_5_POW=Clazz.array(Integer.TYPE, -1, [1, 5, 25, 125, 625, 3125, 15625, 78125, 390625, 1953125, 9765625, 48828125, 244140625, 1220703125]);
C$.LONG_5_POW=Clazz.array(Long.TYPE, -1, [1, 5, 25, 125, 625, 3125, 15625, 78125, 390625, 1953125, 9765625, 48828125, 244140625, 1220703125, 6103515625, 30517578125, 152587890625, 762939453125, 3814697265625, 19073486328125, 95367431640625, 476837158203125, 2384185791015625, [12752365,710542735,1], [13430177,3552713678,1], [42021,17763568394,1], [210105,88817841970,1]]);
{
C$.POW_5_CACHE=Clazz.array(C$, [340]);
var i=0;
while (i < C$.SMALL_5_POW.length){
var pow5=Clazz.new_(C$.c$$IA$I,[Clazz.array(Integer.TYPE, -1, [C$.SMALL_5_POW[i]]), 0]);
pow5.makeImmutable$();
C$.POW_5_CACHE[i]=pow5;
++i;
}
var prev=C$.POW_5_CACHE[i - 1];
while (i < 340){
C$.POW_5_CACHE[i]=prev=p$1.mult$I.apply(prev, [5]);
prev.makeImmutable$();
++i;
}
};
C$.ZERO=Clazz.new_(C$.c$$IA$I,[Clazz.array(Integer.TYPE, [0]), 0]);
{
C$.ZERO.makeImmutable$();
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
