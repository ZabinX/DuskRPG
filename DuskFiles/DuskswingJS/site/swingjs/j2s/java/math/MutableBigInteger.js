(function(){var P$=Clazz.newPackage("java.math"),p$1={},I$=[[0,'java.util.Arrays','java.math.BigInteger','java.math.BigDecimal','java.math.SignedMutableBigInteger']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MutableBigInteger");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.offset=0;
},1);

C$.$fields$=[['I',['intLen','offset'],'O',['value','int[]']]
,['O',['ONE','java.math.MutableBigInteger']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.value=Clazz.array(Integer.TYPE, [1]);
this.intLen=0;
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (val) {
;C$.$init$.apply(this);
this.value=Clazz.array(Integer.TYPE, [1]);
this.intLen=1;
this.value[0]=val;
}, 1);

Clazz.newMeth(C$, 'c$$IA',  function (val) {
;C$.$init$.apply(this);
this.value=val;
this.intLen=val.length;
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigInteger',  function (b) {
;C$.$init$.apply(this);
this.intLen=b.mag.length;
this.value=$I$(1).copyOf$IA$I(b.mag, this.intLen);
}, 1);

Clazz.newMeth(C$, 'c$$java_math_MutableBigInteger',  function (val) {
;C$.$init$.apply(this);
this.intLen=val.intLen;
this.value=$I$(1).copyOfRange$IA$I$I(val.value, val.offset, val.offset + this.intLen);
}, 1);

Clazz.newMeth(C$, 'ones$I',  function (n) {
if (n > this.value.length) this.value=Clazz.array(Integer.TYPE, [n]);
$I$(1).fill$IA$I(this.value, -1);
this.offset=0;
this.intLen=n;
}, p$1);

Clazz.newMeth(C$, 'getMagnitudeArray',  function () {
if (this.offset > 0 || this.value.length != this.intLen ) return $I$(1).copyOfRange$IA$I$I(this.value, this.offset, this.offset + this.intLen);
return this.value;
}, p$1);

Clazz.newMeth(C$, 'toLong',  function () {
Clazz.assert(C$, this, function(){return (this.intLen <= 2)}, function(){return "this MutableBigInteger exceeds the range of long"});
if (this.intLen == 0) return 0;
var d=Long.$and(this.value[this.offset],4294967295);
return (this.intLen == 2) ? Long.$or(Long.$sl(d,32),(Long.$and(this.value[this.offset + 1],4294967295))) : d;
}, p$1);

Clazz.newMeth(C$, 'toBigInteger$I',  function (sign) {
if (this.intLen == 0 || sign == 0 ) return $I$(2).ZERO;
return Clazz.new_([p$1.getMagnitudeArray.apply(this, []), sign],$I$(2,1).c$$IA$I);
});

Clazz.newMeth(C$, 'toBigInteger$',  function () {
this.normalize$();
return this.toBigInteger$I(this.isZero$() ? 0 : 1);
});

Clazz.newMeth(C$, 'toBigDecimal$I$I',  function (sign, scale) {
if (this.intLen == 0 || sign == 0 ) return $I$(3).zeroValueOf$I(scale);
var mag=p$1.getMagnitudeArray.apply(this, []);
var len=mag.length;
var d=mag[0];
if (len > 2 || (d < 0 && len == 2 ) ) return Clazz.new_([Clazz.new_($I$(2,1).c$$IA$I,[mag, sign]), [0,549755813888,-1], scale, 0],$I$(3,1).c$$java_math_BigInteger$J$I$I);
var v=(len == 2) ? (Long.$or((Long.$and(mag[1],4294967295)),Long.$sl((Long.$and(d,4294967295)),32))) : Long.$and(d,4294967295);
return $I$(3,"valueOf$J$I",[sign == -1 ? (Long.$neg(v)) : v, scale]);
});

Clazz.newMeth(C$, 'toCompactValue$I',  function (sign) {
if (this.intLen == 0 || sign == 0 ) return 0;
var mag=p$1.getMagnitudeArray.apply(this, []);
var len=mag.length;
var d=mag[0];
if (len > 2 || (d < 0 && len == 2 ) ) return [0,549755813888,-1];
var v=(len == 2) ? (Long.$or((Long.$and(mag[1],4294967295)),Long.$sl((Long.$and(d,4294967295)),32))) : Long.$and(d,4294967295);
return sign == -1 ? (Long.$neg(v)) : v;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.offset=this.intLen=0;
for (var index=0, n=this.value.length; index < n; index++) this.value[index]=0;

});

Clazz.newMeth(C$, 'reset$',  function () {
this.offset=this.intLen=0;
});

Clazz.newMeth(C$, 'compare$java_math_MutableBigInteger',  function (b) {
var blen=b.intLen;
if (this.intLen < blen) return -1;
if (this.intLen > blen) return 1;
var bval=b.value;
for (var i=this.offset, j=b.offset; i < this.intLen + this.offset; i++, j++) {
var b1=(this.value[i] + -2147483648) | 0;
var b2=(bval[j] + -2147483648) | 0;
if (b1 < b2) return -1;
if (b1 > b2) return 1;
}
return 0;
});

Clazz.newMeth(C$, 'compareShifted$java_math_MutableBigInteger$I',  function (b, ints) {
var blen=b.intLen;
var alen=this.intLen - ints;
if (alen < blen) return -1;
if (alen > blen) return 1;
var bval=b.value;
for (var i=this.offset, j=b.offset; i < alen + this.offset; i++, j++) {
var b1=(this.value[i] + -2147483648) | 0;
var b2=(bval[j] + -2147483648) | 0;
if (b1 < b2) return -1;
if (b1 > b2) return 1;
}
return 0;
}, p$1);

Clazz.newMeth(C$, 'compareHalf$java_math_MutableBigInteger',  function (b) {
var blen=b.intLen;
var len=this.intLen;
if (len <= 0) return blen <= 0 ? 0 : -1;
if (len > blen) return 1;
if (len < blen - 1) return -1;
var bval=b.value;
var bstart=0;
var carry=0;
if (len != blen) {
if (bval[bstart] == 1) {
++bstart;
carry=-2147483648;
} else return -1;
}var val=this.value;
for (var i=this.offset, j=bstart; i < len + this.offset; ) {
var bv=bval[j++];
var hb=Long.$and(((bv >>> 1) + carry),4294967295);
var v=Long.$and(val[i++],4294967295);
if (Long.$ne(v,hb )) return Long.$lt(v,hb ) ? -1 : 1;
carry=((bv & 1) << 31) | 0;
}
return carry == 0 ? 0 : -1;
});

Clazz.newMeth(C$, 'getLowestSetBit',  function () {
if (this.intLen == 0) return -1;
var j;
var b;
for (j=this.intLen - 1; (j > 0) && (this.value[j + this.offset] == 0) ; j--) ;
b=this.value[j + this.offset];
if (b == 0) return -1;
return ((this.intLen - 1 - j ) << 5) + Integer.numberOfTrailingZeros$I(b);
}, p$1);

Clazz.newMeth(C$, 'getInt$I',  function (index) {
return this.value[this.offset + index];
}, p$1);

Clazz.newMeth(C$, 'getLong$I',  function (index) {
return Long.$and(this.value[this.offset + index],4294967295);
}, p$1);

Clazz.newMeth(C$, 'normalize$',  function () {
if (this.intLen == 0) {
this.offset=0;
return;
}var index=this.offset;
if (this.value[index] != 0) return;
var indexBound=index + this.intLen;
do {
++index;
} while (index < indexBound && this.value[index] == 0 );
var numZeros=index - this.offset;
this.intLen-=numZeros;
this.offset=(this.intLen == 0 ? 0 : this.offset + numZeros);
});

Clazz.newMeth(C$, 'ensureCapacity$I',  function (len) {
if (this.value.length < len) {
this.value=Clazz.array(Integer.TYPE, [len]);
this.offset=0;
this.intLen=len;
}}, p$1);

Clazz.newMeth(C$, 'toIntArray$',  function () {
var result=Clazz.array(Integer.TYPE, [this.intLen]);
for (var i=0; i < this.intLen; i++) result[i]=this.value[this.offset + i];

return result;
});

Clazz.newMeth(C$, 'setInt$I$I',  function (index, val) {
this.value[this.offset + index]=val;
});

Clazz.newMeth(C$, 'setValue$IA$I',  function (val, length) {
this.value=val;
this.intLen=length;
this.offset=0;
});

Clazz.newMeth(C$, 'copyValue$java_math_MutableBigInteger',  function (src) {
var len=src.intLen;
if (this.value.length < len) this.value=Clazz.array(Integer.TYPE, [len]);
System.arraycopy$O$I$O$I$I(src.value, src.offset, this.value, 0, len);
this.intLen=len;
this.offset=0;
});

Clazz.newMeth(C$, 'copyValue$IA',  function (val) {
var len=val.length;
if (this.value.length < len) this.value=Clazz.array(Integer.TYPE, [len]);
System.arraycopy$O$I$O$I$I(val, 0, this.value, 0, len);
this.intLen=len;
this.offset=0;
});

Clazz.newMeth(C$, 'isOne$',  function () {
return (this.intLen == 1) && (this.value[this.offset] == 1) ;
});

Clazz.newMeth(C$, 'isZero$',  function () {
return (this.intLen == 0);
});

Clazz.newMeth(C$, 'isEven$',  function () {
return (this.intLen == 0) || ((this.value[this.offset + this.intLen - 1] & 1) == 0) ;
});

Clazz.newMeth(C$, 'isOdd$',  function () {
return this.isZero$() ? false : ((this.value[this.offset + this.intLen - 1] & 1) == 1);
});

Clazz.newMeth(C$, 'isNormal$',  function () {
if (this.intLen + this.offset > this.value.length) return false;
if (this.intLen == 0) return true;
return (this.value[this.offset] != 0);
});

Clazz.newMeth(C$, 'toString',  function () {
var b=this.toBigInteger$I(1);
return b.toString();
});

Clazz.newMeth(C$, 'safeRightShift$I',  function (n) {
if ((n/32|0) >= this.intLen) {
this.reset$();
} else {
this.rightShift$I(n);
}});

Clazz.newMeth(C$, 'rightShift$I',  function (n) {
if (this.intLen == 0) return;
var nInts=n >>> 5;
var nBits=n & 31;
this.intLen-=nInts;
if (nBits == 0) return;
var bitsInHighWord=$I$(2).bitLengthForInt$I(this.value[this.offset]);
if (nBits >= bitsInHighWord) {
p$1.primitiveLeftShift$I.apply(this, [32 - nBits]);
--this.intLen;
} else {
p$1.primitiveRightShift$I.apply(this, [nBits]);
}});

Clazz.newMeth(C$, 'safeLeftShift$I',  function (n) {
if (n > 0) {
this.leftShift$I(n);
}});

Clazz.newMeth(C$, 'leftShift$I',  function (n) {
if (this.intLen == 0) return;
var nInts=n >>> 5;
var nBits=n & 31;
var bitsInHighWord=$I$(2).bitLengthForInt$I(this.value[this.offset]);
if (n <= (32 - bitsInHighWord)) {
p$1.primitiveLeftShift$I.apply(this, [nBits]);
return;
}var newLen=this.intLen + nInts + 1 ;
if (nBits <= (32 - bitsInHighWord)) --newLen;
if (this.value.length < newLen) {
var result=Clazz.array(Integer.TYPE, [newLen]);
for (var i=0; i < this.intLen; i++) result[i]=this.value[this.offset + i];

this.setValue$IA$I(result, newLen);
} else if (this.value.length - this.offset >= newLen) {
for (var i=0; i < newLen - this.intLen; i++) this.value[this.offset + this.intLen + i ]=0;

} else {
for (var i=0; i < this.intLen; i++) this.value[i]=this.value[this.offset + i];

for (var i=this.intLen; i < newLen; i++) this.value[i]=0;

this.offset=0;
}this.intLen=newLen;
if (nBits == 0) return;
if (nBits <= (32 - bitsInHighWord)) p$1.primitiveLeftShift$I.apply(this, [nBits]);
 else p$1.primitiveRightShift$I.apply(this, [32 - nBits]);
});

Clazz.newMeth(C$, 'divadd$IA$IA$I',  function (a, result, offset) {
var carry=0;
for (var j=a.length - 1; j >= 0; j--) {
var sum=Long.$add((Long.$and(a[j],4294967295)),(Long.$and(result[j + offset],4294967295)) , carry );
result[j + offset]=Long.$ival(sum);
carry=Long.$usr(sum,32);
}
return Long.$ival(carry);
}, p$1);

Clazz.newMeth(C$, 'mulsub$IA$IA$I$I$I',  function (q, a, x, len, offset) {
var xLong=Long.$and(x,4294967295);
var carry=0;
offset+=len;
for (var j=len - 1; j >= 0; j--) {
var product=Long.$add(Long.$mul((Long.$and(a[j],4294967295)),xLong),carry);
var difference=Long.$sub(q[offset],product);
q[offset--]=Long.$ival(difference);
carry=Long.$add((Long.$usr(product,32)),((Long.$gt((Long.$and(difference,4294967295)),((Long.$and((~Long.$ival(product)),4294967295))) )) ? 1 : 0));
}
return Long.$ival(carry);
}, p$1);

Clazz.newMeth(C$, 'mulsubBorrow$IA$IA$I$I$I',  function (q, a, x, len, offset) {
var xLong=Long.$and(x,4294967295);
var carry=0;
offset+=len;
for (var j=len - 1; j >= 0; j--) {
var product=Long.$add(Long.$mul((Long.$and(a[j],4294967295)),xLong),carry);
var difference=Long.$sub(q[offset--],product);
carry=Long.$add((Long.$usr(product,32)),((Long.$gt((Long.$and(difference,4294967295)),((Long.$and((~Long.$ival(product)),4294967295))) )) ? 1 : 0));
}
return Long.$ival(carry);
}, p$1);

Clazz.newMeth(C$, 'primitiveRightShift$I',  function (n) {
var val=this.value;
var n2=32 - n;
for (var i=this.offset + this.intLen - 1, c=val[i]; i > this.offset; i--) {
var b=c;
c=val[i - 1];
val[i]=(c << n2) | (b >>> n);
}
val[this.offset]>>>=n;
}, p$1);

Clazz.newMeth(C$, 'primitiveLeftShift$I',  function (n) {
var val=this.value;
var n2=32 - n;
for (var i=this.offset, c=val[i], m=i + this.intLen - 1; i < m; i++) {
var b=c;
c=val[i + 1];
val[i]=(b << n) | (c >>> n2);
}
val[this.offset + this.intLen - 1]<<=n;
}, p$1);

Clazz.newMeth(C$, 'getLower$I',  function (n) {
if (this.isZero$()) {
return $I$(2).ZERO;
} else if (this.intLen < n) {
return this.toBigInteger$I(1);
} else {
var len=n;
while (len > 0 && this.value[this.offset + this.intLen - len] == 0 )--len;

var sign=len > 0 ? 1 : 0;
return Clazz.new_([$I$(1).copyOfRange$IA$I$I(this.value, this.offset + this.intLen - len, this.offset + this.intLen), sign],$I$(2,1).c$$IA$I);
}}, p$1);

Clazz.newMeth(C$, 'keepLower$I',  function (n) {
if (this.intLen >= n) {
this.offset+=this.intLen - n;
this.intLen=n;
}}, p$1);

Clazz.newMeth(C$, 'add$java_math_MutableBigInteger',  function (addend) {
var x=this.intLen;
var y=addend.intLen;
var resultLen=(this.intLen > addend.intLen ? this.intLen : addend.intLen);
var result=(this.value.length < resultLen ? Clazz.array(Integer.TYPE, [resultLen]) : this.value);
var rstart=result.length - 1;
var sum;
var carry=0;
while (x > 0 && y > 0 ){
--x;
--y;
sum=Long.$add((Long.$and(this.value[x + this.offset],4294967295)),(Long.$and(addend.value[y + addend.offset],4294967295)) , carry );
result[rstart--]=Long.$ival(sum);
carry=Long.$usr(sum,32);
}
while (x > 0){
--x;
if (Long.$eq(carry,0 ) && result === this.value   && rstart == (x + this.offset) ) return;
sum=Long.$add((Long.$and(this.value[x + this.offset],4294967295)),carry);
result[rstart--]=Long.$ival(sum);
carry=Long.$usr(sum,32);
}
while (y > 0){
--y;
sum=Long.$add((Long.$and(addend.value[y + addend.offset],4294967295)),carry);
result[rstart--]=Long.$ival(sum);
carry=Long.$usr(sum,32);
}
if (Long.$gt(carry,0 )) {
++resultLen;
if (result.length < resultLen) {
var temp=Clazz.array(Integer.TYPE, [resultLen]);
System.arraycopy$O$I$O$I$I(result, 0, temp, 1, result.length);
temp[0]=1;
result=temp;
} else {
result[rstart--]=1;
}}this.value=result;
this.intLen=resultLen;
this.offset=result.length - resultLen;
});

Clazz.newMeth(C$, 'addShifted$java_math_MutableBigInteger$I',  function (addend, n) {
if (addend.isZero$()) {
return;
}var x=this.intLen;
var y=addend.intLen + n;
var resultLen=(this.intLen > y ? this.intLen : y);
var result=(this.value.length < resultLen ? Clazz.array(Integer.TYPE, [resultLen]) : this.value);
var rstart=result.length - 1;
var sum;
var carry=0;
while (x > 0 && y > 0 ){
--x;
--y;
var bval=y + addend.offset < addend.value.length ? addend.value[y + addend.offset] : 0;
sum=Long.$add((Long.$and(this.value[x + this.offset],4294967295)),(Long.$and(bval,4294967295)) , carry );
result[rstart--]=Long.$ival(sum);
carry=Long.$usr(sum,32);
}
while (x > 0){
--x;
if (Long.$eq(carry,0 ) && result === this.value   && rstart == (x + this.offset) ) {
return;
}sum=Long.$add((Long.$and(this.value[x + this.offset],4294967295)),carry);
result[rstart--]=Long.$ival(sum);
carry=Long.$usr(sum,32);
}
while (y > 0){
--y;
var bval=y + addend.offset < addend.value.length ? addend.value[y + addend.offset] : 0;
sum=Long.$add((Long.$and(bval,4294967295)),carry);
result[rstart--]=Long.$ival(sum);
carry=Long.$usr(sum,32);
}
if (Long.$gt(carry,0 )) {
++resultLen;
if (result.length < resultLen) {
var temp=Clazz.array(Integer.TYPE, [resultLen]);
System.arraycopy$O$I$O$I$I(result, 0, temp, 1, result.length);
temp[0]=1;
result=temp;
} else {
result[rstart--]=1;
}}this.value=result;
this.intLen=resultLen;
this.offset=result.length - resultLen;
});

Clazz.newMeth(C$, 'addDisjoint$java_math_MutableBigInteger$I',  function (addend, n) {
if (addend.isZero$()) return;
var x=this.intLen;
var y=addend.intLen + n;
var resultLen=(this.intLen > y ? this.intLen : y);
var result;
if (this.value.length < resultLen) result=Clazz.array(Integer.TYPE, [resultLen]);
 else {
result=this.value;
$I$(1).fill$IA$I$I$I(this.value, this.offset + this.intLen, this.value.length, 0);
}var rstart=result.length - 1;
System.arraycopy$O$I$O$I$I(this.value, this.offset, result, rstart + 1 - x, x);
y-=x;
rstart-=x;
var len=Math.min(y, addend.value.length - addend.offset);
System.arraycopy$O$I$O$I$I(addend.value, addend.offset, result, rstart + 1 - y, len);
for (var i=rstart + 1 - y + len; i < rstart + 1; i++) result[i]=0;

this.value=result;
this.intLen=resultLen;
this.offset=result.length - resultLen;
});

Clazz.newMeth(C$, 'addLower$java_math_MutableBigInteger$I',  function (addend, n) {
var a=Clazz.new_(C$.c$$java_math_MutableBigInteger,[addend]);
if (a.offset + a.intLen >= n) {
a.offset=a.offset + a.intLen - n;
a.intLen=n;
}a.normalize$();
this.add$java_math_MutableBigInteger(a);
});

Clazz.newMeth(C$, 'subtract$java_math_MutableBigInteger',  function (b) {
var a=this;
var result=this.value;
var sign=a.compare$java_math_MutableBigInteger(b);
if (sign == 0) {
this.reset$();
return 0;
}if (sign < 0) {
var tmp=a;
a=b;
b=tmp;
}var resultLen=a.intLen;
if (result.length < resultLen) result=Clazz.array(Integer.TYPE, [resultLen]);
var diff=0;
var x=a.intLen;
var y=b.intLen;
var rstart=result.length - 1;
while (y > 0){
--x;
--y;
diff=Long.$sub((Long.$and(a.value[x + a.offset],4294967295)),(Long.$and(b.value[y + b.offset],4294967295)) , (Long.$ival((Long.$neg((Long.$sr(diff,32)))))) );
result[rstart--]=Long.$ival(diff);
}
while (x > 0){
--x;
diff=Long.$sub((Long.$and(a.value[x + a.offset],4294967295)),(Long.$ival((Long.$neg((Long.$sr(diff,32)))))));
result[rstart--]=Long.$ival(diff);
}
this.value=result;
this.intLen=resultLen;
this.offset=this.value.length - resultLen;
this.normalize$();
return sign;
});

Clazz.newMeth(C$, 'difference$java_math_MutableBigInteger',  function (b) {
var a=this;
var sign=a.compare$java_math_MutableBigInteger(b);
if (sign == 0) return 0;
if (sign < 0) {
var tmp=a;
a=b;
b=tmp;
}var diff=0;
var x=a.intLen;
var y=b.intLen;
while (y > 0){
--x;
--y;
diff=Long.$sub((Long.$and(a.value[a.offset + x],4294967295)),(Long.$and(b.value[b.offset + y],4294967295)) , (Long.$ival((Long.$neg((Long.$sr(diff,32)))))) );
a.value[a.offset + x]=Long.$ival(diff);
}
while (x > 0){
--x;
diff=Long.$sub((Long.$and(a.value[a.offset + x],4294967295)),(Long.$ival((Long.$neg((Long.$sr(diff,32)))))));
a.value[a.offset + x]=Long.$ival(diff);
}
a.normalize$();
return sign;
}, p$1);

Clazz.newMeth(C$, 'multiply$java_math_MutableBigInteger$java_math_MutableBigInteger',  function (y, z) {
var xLen=this.intLen;
var yLen=y.intLen;
var newLen=xLen + yLen;
if (z.value.length < newLen) z.value=Clazz.array(Integer.TYPE, [newLen]);
z.offset=0;
z.intLen=newLen;
var carry=0;
for (var j=yLen - 1, k=yLen + xLen - 1; j >= 0; j--, k--) {
var product=Long.$add(Long.$mul((Long.$and(y.value[j + y.offset],4294967295)),(Long.$and(this.value[xLen - 1 + this.offset],4294967295))),carry);
z.value[k]=Long.$ival(product);
carry=Long.$usr(product,32);
}
z.value[xLen - 1]=Long.$ival(carry);
for (var i=xLen - 2; i >= 0; i--) {
carry=0;
for (var j=yLen - 1, k=yLen + i; j >= 0; j--, k--) {
var product=Long.$add(Long.$add(Long.$mul((Long.$and(y.value[j + y.offset],4294967295)),(Long.$and(this.value[i + this.offset],4294967295))),(Long.$and(z.value[k],4294967295))),carry);
z.value[k]=Long.$ival(product);
carry=Long.$usr(product,32);
}
z.value[i]=Long.$ival(carry);
}
z.normalize$();
});

Clazz.newMeth(C$, 'mul$I$java_math_MutableBigInteger',  function (y, z) {
if (y == 1) {
z.copyValue$java_math_MutableBigInteger(this);
return;
}if (y == 0) {
z.clear$();
return;
}var ylong=Long.$and(y,4294967295);
var zval=(z.value.length < this.intLen + 1 ? Clazz.array(Integer.TYPE, [this.intLen + 1]) : z.value);
var carry=0;
for (var i=this.intLen - 1; i >= 0; i--) {
var product=Long.$add(Long.$mul(ylong,(Long.$and(this.value[i + this.offset],4294967295))),carry);
zval[i + 1]=Long.$ival(product);
carry=Long.$usr(product,32);
}
if (Long.$eq(carry,0 )) {
z.offset=1;
z.intLen=this.intLen;
} else {
z.offset=0;
z.intLen=this.intLen + 1;
zval[0]=Long.$ival(carry);
}z.value=zval;
});

Clazz.newMeth(C$, 'divideOneWord$I$java_math_MutableBigInteger',  function (divisor, quotient) {
var divisorLong=Long.$and(divisor,4294967295);
if (this.intLen == 1) {
var dividendValue=Long.$and(this.value[this.offset],4294967295);
var q=Long.$ival((Long.$div(dividendValue,divisorLong)));
var r=Long.$ival((Long.$sub(dividendValue,Long.$mul(q,divisorLong))));
quotient.value[0]=q;
quotient.intLen=(q == 0) ? 0 : 1;
quotient.offset=0;
return r;
}if (quotient.value.length < this.intLen) quotient.value=Clazz.array(Integer.TYPE, [this.intLen]);
quotient.offset=0;
quotient.intLen=this.intLen;
var shift=Integer.numberOfLeadingZeros$I(divisor);
var rem=this.value[this.offset];
var remLong=Long.$and(rem,4294967295);
if (Long.$lt(remLong,divisorLong )) {
quotient.value[0]=0;
} else {
quotient.value[0]=Long.$ival((Long.$div(remLong,divisorLong)));
rem=Long.$ival((Long.$sub(remLong,(Long.$mul(quotient.value[0],divisorLong)))));
remLong=Long.$and(rem,4294967295);
}var xlen=this.intLen;
while (--xlen > 0){
var dividendEstimate=Long.$or((Long.$sl(remLong,32)),(Long.$and(this.value[this.offset + this.intLen - xlen],4294967295)));
var q;
if (Long.$ge(dividendEstimate,0 )) {
q=Long.$ival((Long.$div(dividendEstimate,divisorLong)));
rem=Long.$ival((Long.$sub(dividendEstimate,Long.$mul(q,divisorLong))));
} else {
var tmp=C$.divWord$J$I(dividendEstimate, divisor);
q=Long.$ival((Long.$and(tmp,4294967295)));
rem=Long.$ival((Long.$usr(tmp,32)));
}quotient.value[this.intLen - xlen]=q;
remLong=Long.$and(rem,4294967295);
}
quotient.normalize$();
if (shift > 0) return rem % divisor;
 else return rem;
});

Clazz.newMeth(C$, 'divide$java_math_MutableBigInteger$java_math_MutableBigInteger',  function (b, quotient) {
return this.divide$java_math_MutableBigInteger$java_math_MutableBigInteger$Z(b, quotient, true);
});

Clazz.newMeth(C$, 'divide$java_math_MutableBigInteger$java_math_MutableBigInteger$Z',  function (b, quotient, needRemainder) {
if (b.intLen < 80 || this.intLen - b.intLen < 40 ) {
return this.divideKnuth$java_math_MutableBigInteger$java_math_MutableBigInteger$Z(b, quotient, needRemainder);
} else {
return this.divideAndRemainderBurnikelZiegler$java_math_MutableBigInteger$java_math_MutableBigInteger(b, quotient);
}});

Clazz.newMeth(C$, 'divideKnuth$java_math_MutableBigInteger$java_math_MutableBigInteger',  function (b, quotient) {
return this.divideKnuth$java_math_MutableBigInteger$java_math_MutableBigInteger$Z(b, quotient, true);
});

Clazz.newMeth(C$, 'divideKnuth$java_math_MutableBigInteger$java_math_MutableBigInteger$Z',  function (b, quotient, needRemainder) {
if (b.intLen == 0) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["BigInteger divide by zero"]);
if (this.intLen == 0) {
quotient.intLen=quotient.offset=0;
return needRemainder ? Clazz.new_(C$) : null;
}var cmp=this.compare$java_math_MutableBigInteger(b);
if (cmp < 0) {
quotient.intLen=quotient.offset=0;
return needRemainder ? Clazz.new_(C$.c$$java_math_MutableBigInteger,[this]) : null;
}if (cmp == 0) {
quotient.value[0]=quotient.intLen=1;
quotient.offset=0;
return needRemainder ? Clazz.new_(C$) : null;
}quotient.clear$();
if (b.intLen == 1) {
var r=this.divideOneWord$I$java_math_MutableBigInteger(b.value[b.offset], quotient);
if (needRemainder) {
if (r == 0) return Clazz.new_(C$);
return Clazz.new_(C$.c$$I,[r]);
} else {
return null;
}}if (this.intLen >= 6) {
var trailingZeroBits=Math.min(p$1.getLowestSetBit.apply(this, []), p$1.getLowestSetBit.apply(b, []));
if (trailingZeroBits >= 96) {
var a=Clazz.new_(C$.c$$java_math_MutableBigInteger,[this]);
b=Clazz.new_(C$.c$$java_math_MutableBigInteger,[b]);
a.rightShift$I(trailingZeroBits);
b.rightShift$I(trailingZeroBits);
var r=a.divideKnuth$java_math_MutableBigInteger$java_math_MutableBigInteger(b, quotient);
r.leftShift$I(trailingZeroBits);
return r;
}}return p$1.divideMagnitude$java_math_MutableBigInteger$java_math_MutableBigInteger$Z.apply(this, [b, quotient, needRemainder]);
});

Clazz.newMeth(C$, 'divideAndRemainderBurnikelZiegler$java_math_MutableBigInteger$java_math_MutableBigInteger',  function (b, quotient) {
var r=this.intLen;
var s=b.intLen;
quotient.offset=quotient.intLen=0;
if (r < s) {
return this;
} else {
var m=1 << (32 - Integer.numberOfLeadingZeros$I((s/80|0)));
var j=((s + m - 1)/m|0);
var n=j * m;
var n32=Long.$mul(32,n);
var sigma=Long.$ival(Math.max$J$J(0, Long.$sub(n32,b.bitLength$())));
var bShifted=Clazz.new_(C$.c$$java_math_MutableBigInteger,[b]);
bShifted.safeLeftShift$I(sigma);
var aShifted=Clazz.new_(C$.c$$java_math_MutableBigInteger,[this]);
aShifted.safeLeftShift$I(sigma);
var t=Long.$ival((Long.$div((Long.$add(aShifted.bitLength$(),n32)),n32)));
if (t < 2) {
t=2;
}var a1=p$1.getBlock$I$I$I.apply(aShifted, [t - 1, t, n]);
var z=p$1.getBlock$I$I$I.apply(aShifted, [t - 2, t, n]);
z.addDisjoint$java_math_MutableBigInteger$I(a1, n);
var qi=Clazz.new_(C$);
var ri;
for (var i=t - 2; i > 0; i--) {
ri=p$1.divide2n1n$java_math_MutableBigInteger$java_math_MutableBigInteger.apply(z, [bShifted, qi]);
z=p$1.getBlock$I$I$I.apply(aShifted, [i - 1, t, n]);
z.addDisjoint$java_math_MutableBigInteger$I(ri, n);
quotient.addShifted$java_math_MutableBigInteger$I(qi, i * n);
}
ri=p$1.divide2n1n$java_math_MutableBigInteger$java_math_MutableBigInteger.apply(z, [bShifted, qi]);
quotient.add$java_math_MutableBigInteger(qi);
ri.rightShift$I(sigma);
return ri;
}});

Clazz.newMeth(C$, 'divide2n1n$java_math_MutableBigInteger$java_math_MutableBigInteger',  function (b, quotient) {
var n=b.intLen;
if (n % 2 != 0 || n < 80 ) {
return this.divideKnuth$java_math_MutableBigInteger$java_math_MutableBigInteger(b, quotient);
}var aUpper=Clazz.new_(C$.c$$java_math_MutableBigInteger,[this]);
aUpper.safeRightShift$I(32 * ((n/2|0)));
p$1.keepLower$I.apply(this, [(n/2|0)]);
var q1=Clazz.new_(C$);
var r1=p$1.divide3n2n$java_math_MutableBigInteger$java_math_MutableBigInteger.apply(aUpper, [b, q1]);
this.addDisjoint$java_math_MutableBigInteger$I(r1, (n/2|0));
var r2=p$1.divide3n2n$java_math_MutableBigInteger$java_math_MutableBigInteger.apply(this, [b, quotient]);
quotient.addDisjoint$java_math_MutableBigInteger$I(q1, (n/2|0));
return r2;
}, p$1);

Clazz.newMeth(C$, 'divide3n2n$java_math_MutableBigInteger$java_math_MutableBigInteger',  function (b, quotient) {
var n=(b.intLen/2|0);
var a12=Clazz.new_(C$.c$$java_math_MutableBigInteger,[this]);
a12.safeRightShift$I(32 * n);
var b1=Clazz.new_(C$.c$$java_math_MutableBigInteger,[b]);
b1.safeRightShift$I(n * 32);
var b2=p$1.getLower$I.apply(b, [n]);
var r;
var d;
if (p$1.compareShifted$java_math_MutableBigInteger$I.apply(this, [b, n]) < 0) {
r=p$1.divide2n1n$java_math_MutableBigInteger$java_math_MutableBigInteger.apply(a12, [b1, quotient]);
d=Clazz.new_(C$.c$$java_math_BigInteger,[quotient.toBigInteger$().multiply$java_math_BigInteger(b2)]);
} else {
p$1.ones$I.apply(quotient, [n]);
a12.add$java_math_MutableBigInteger(b1);
b1.leftShift$I(32 * n);
a12.subtract$java_math_MutableBigInteger(b1);
r=a12;
d=Clazz.new_(C$.c$$java_math_BigInteger,[b2]);
d.leftShift$I(32 * n);
d.subtract$java_math_MutableBigInteger(Clazz.new_(C$.c$$java_math_BigInteger,[b2]));
}r.leftShift$I(32 * n);
r.addLower$java_math_MutableBigInteger$I(this, n);
while (r.compare$java_math_MutableBigInteger(d) < 0){
r.add$java_math_MutableBigInteger(b);
quotient.subtract$java_math_MutableBigInteger(C$.ONE);
}
r.subtract$java_math_MutableBigInteger(d);
return r;
}, p$1);

Clazz.newMeth(C$, 'getBlock$I$I$I',  function (index, numBlocks, blockLength) {
var blockStart=index * blockLength;
if (blockStart >= this.intLen) {
return Clazz.new_(C$);
}var blockEnd;
if (index == numBlocks - 1) {
blockEnd=this.intLen;
} else {
blockEnd=(index + 1) * blockLength;
}if (blockEnd > this.intLen) {
return Clazz.new_(C$);
}var newVal=$I$(1).copyOfRange$IA$I$I(this.value, this.offset + this.intLen - blockEnd, this.offset + this.intLen - blockStart);
return Clazz.new_(C$.c$$IA,[newVal]);
}, p$1);

Clazz.newMeth(C$, 'bitLength$',  function () {
if (this.intLen == 0) return 0;
return Long.$sub(Long.$mul(this.intLen,32),Integer.numberOfLeadingZeros$I(this.value[this.offset]));
});

Clazz.newMeth(C$, 'divide$J$java_math_MutableBigInteger',  function (v, quotient) {
if (Long.$eq(v,0 )) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["BigInteger divide by zero"]);
if (this.intLen == 0) {
quotient.intLen=quotient.offset=0;
return 0;
}if (Long.$lt(v,0 )) v=(Long.$neg(v));
var d=Long.$ival((Long.$usr(v,32)));
quotient.clear$();
if (d == 0) return Long.$and(this.divideOneWord$I$java_math_MutableBigInteger(Long.$ival(v), quotient),4294967295);
 else {
return p$1.toLong.apply(p$1.divideLongMagnitude$J$java_math_MutableBigInteger.apply(this, [v, quotient]), []);
}});

Clazz.newMeth(C$, 'copyAndShift$IA$I$I$IA$I$I',  function (src, srcFrom, srcLen, dst, dstFrom, shift) {
var n2=32 - shift;
var c=src[srcFrom];
for (var i=0; i < srcLen - 1; i++) {
var b=c;
c=src[++srcFrom];
dst[dstFrom + i]=(b << shift) | (c >>> n2);
}
dst[dstFrom + srcLen - 1]=c << shift;
}, 1);

Clazz.newMeth(C$, 'divideMagnitude$java_math_MutableBigInteger$java_math_MutableBigInteger$Z',  function (div, quotient, needRemainder) {
var shift=Integer.numberOfLeadingZeros$I(div.value[div.offset]);
var dlen=div.intLen;
var divisor;
var rem;
if (shift > 0) {
divisor=Clazz.array(Integer.TYPE, [dlen]);
C$.copyAndShift$IA$I$I$IA$I$I(div.value, div.offset, dlen, divisor, 0, shift);
if (Integer.numberOfLeadingZeros$I(this.value[this.offset]) >= shift) {
var remarr=Clazz.array(Integer.TYPE, [this.intLen + 1]);
rem=Clazz.new_(C$.c$$IA,[remarr]);
rem.intLen=this.intLen;
rem.offset=1;
C$.copyAndShift$IA$I$I$IA$I$I(this.value, this.offset, this.intLen, remarr, 1, shift);
} else {
var remarr=Clazz.array(Integer.TYPE, [this.intLen + 2]);
rem=Clazz.new_(C$.c$$IA,[remarr]);
rem.intLen=this.intLen + 1;
rem.offset=1;
var rFrom=this.offset;
var c=0;
var n2=32 - shift;
for (var i=1; i < this.intLen + 1; i++, rFrom++) {
var b=c;
c=this.value[rFrom];
remarr[i]=(b << shift) | (c >>> n2);
}
remarr[this.intLen + 1]=c << shift;
}} else {
divisor=$I$(1).copyOfRange$IA$I$I(div.value, div.offset, div.offset + div.intLen);
rem=Clazz.new_(C$.c$$IA,[Clazz.array(Integer.TYPE, [this.intLen + 1])]);
System.arraycopy$O$I$O$I$I(this.value, this.offset, rem.value, 1, this.intLen);
rem.intLen=this.intLen;
rem.offset=1;
}var nlen=rem.intLen;
var limit=nlen - dlen + 1;
if (quotient.value.length < limit) {
quotient.value=Clazz.array(Integer.TYPE, [limit]);
quotient.offset=0;
}quotient.intLen=limit;
var q=quotient.value;
if (rem.intLen == nlen) {
rem.offset=0;
rem.value[0]=0;
++rem.intLen;
}var dh=divisor[0];
var dhLong=Long.$and(dh,4294967295);
var dl=divisor[1];
for (var j=0; j < limit - 1; j++) {
var qhat=0;
var qrem=0;
var skipCorrection=false;
var nh=rem.value[j + rem.offset];
var nh2=(nh + -2147483648) | 0;
var nm=rem.value[j + 1 + rem.offset ];
if (nh == dh) {
qhat=~0;
qrem=nh + nm;
skipCorrection=((qrem + -2147483648) | 0) < nh2;
} else {
var nChunk=Long.$or((Long.$sl((nh),32)),(Long.$and(nm,4294967295)));
if (Long.$ge(nChunk,0 )) {
qhat=Long.$ival((Long.$div(nChunk,dhLong)));
qrem=Long.$ival((Long.$sub(nChunk,(Long.$mul(qhat,dhLong)))));
} else {
var tmp=C$.divWord$J$I(nChunk, dh);
qhat=Long.$ival((Long.$and(tmp,4294967295)));
qrem=Long.$ival((Long.$usr(tmp,32)));
}}if (qhat == 0) continue;
if (!skipCorrection) {
var nl=Long.$and(rem.value[j + 2 + rem.offset ],4294967295);
var rs=Long.$or((Long.$sl((Long.$and(qrem,4294967295)),32)),nl);
var estProduct=Long.$mul((Long.$and(dl,4294967295)),(Long.$and(qhat,4294967295)));
if (p$1.unsignedLongCompare$J$J.apply(this, [estProduct, rs])) {
--qhat;
qrem=Long.$ival((Long.$add((Long.$and(qrem,4294967295)),dhLong)));
if (Long.$ge((Long.$and(qrem,4294967295)),dhLong )) {
(estProduct=Long.$sub(estProduct,((Long.$and(dl,4294967295)))));
rs=Long.$or((Long.$sl((Long.$and(qrem,4294967295)),32)),nl);
if (p$1.unsignedLongCompare$J$J.apply(this, [estProduct, rs])) --qhat;
}}}rem.value[j + rem.offset]=0;
var borrow=p$1.mulsub$IA$IA$I$I$I.apply(this, [rem.value, divisor, qhat, dlen, j + rem.offset]);
if (borrow + -2147483648 > nh2) {
p$1.divadd$IA$IA$I.apply(this, [divisor, rem.value, j + 1 + rem.offset ]);
--qhat;
}q[j]=qhat;
}
var qhat=0;
var qrem=0;
var skipCorrection=false;
var nh=rem.value[limit - 1 + rem.offset];
var nh2=(nh + -2147483648) | 0;
var nm=rem.value[limit + rem.offset];
if (nh == dh) {
qhat=~0;
qrem=nh + nm;
skipCorrection=((qrem + -2147483648) | 0) < nh2;
} else {
var nChunk=Long.$or((Long.$sl((nh),32)),(Long.$and(nm,4294967295)));
if (Long.$ge(nChunk,0 )) {
qhat=Long.$ival((Long.$div(nChunk,dhLong)));
qrem=Long.$ival((Long.$sub(nChunk,(Long.$mul(qhat,dhLong)))));
} else {
var tmp=C$.divWord$J$I(nChunk, dh);
qhat=Long.$ival((Long.$and(tmp,4294967295)));
qrem=Long.$ival((Long.$usr(tmp,32)));
}}if (qhat != 0) {
if (!skipCorrection) {
var nl=Long.$and(rem.value[limit + 1 + rem.offset ],4294967295);
var rs=Long.$or((Long.$sl((Long.$and(qrem,4294967295)),32)),nl);
var estProduct=Long.$mul((Long.$and(dl,4294967295)),(Long.$and(qhat,4294967295)));
if (p$1.unsignedLongCompare$J$J.apply(this, [estProduct, rs])) {
--qhat;
qrem=Long.$ival((Long.$add((Long.$and(qrem,4294967295)),dhLong)));
if (Long.$ge((Long.$and(qrem,4294967295)),dhLong )) {
(estProduct=Long.$sub(estProduct,((Long.$and(dl,4294967295)))));
rs=Long.$or((Long.$sl((Long.$and(qrem,4294967295)),32)),nl);
if (p$1.unsignedLongCompare$J$J.apply(this, [estProduct, rs])) --qhat;
}}}var borrow;
rem.value[limit - 1 + rem.offset]=0;
if (needRemainder) borrow=p$1.mulsub$IA$IA$I$I$I.apply(this, [rem.value, divisor, qhat, dlen, limit - 1 + rem.offset]);
 else borrow=p$1.mulsubBorrow$IA$IA$I$I$I.apply(this, [rem.value, divisor, qhat, dlen, limit - 1 + rem.offset]);
if (((borrow + -2147483648) | 0) > nh2) {
if (needRemainder) p$1.divadd$IA$IA$I.apply(this, [divisor, rem.value, limit - 1 + 1 + rem.offset]);
--qhat;
}q[(limit - 1)]=qhat;
}if (needRemainder) {
if (shift > 0) rem.rightShift$I(shift);
rem.normalize$();
}quotient.normalize$();
return needRemainder ? rem : null;
}, p$1);

Clazz.newMeth(C$, 'divideLongMagnitude$J$java_math_MutableBigInteger',  function (ldivisor, quotient) {
var rem=Clazz.new_(C$.c$$IA,[Clazz.array(Integer.TYPE, [this.intLen + 1])]);
System.arraycopy$O$I$O$I$I(this.value, this.offset, rem.value, 1, this.intLen);
rem.intLen=this.intLen;
rem.offset=1;
var nlen=rem.intLen;
var limit=nlen - 2 + 1;
if (quotient.value.length < limit) {
quotient.value=Clazz.array(Integer.TYPE, [limit]);
quotient.offset=0;
}quotient.intLen=limit;
var q=quotient.value;
var shift=Long.numberOfLeadingZeros$J(ldivisor);
if (shift > 0) {
(ldivisor=Long.$sl(ldivisor,(shift)));
rem.leftShift$I(shift);
}if (rem.intLen == nlen) {
rem.offset=0;
rem.value[0]=0;
++rem.intLen;
}var dh=Long.$ival((Long.$usr(ldivisor,32)));
var dhLong=Long.$and(dh,4294967295);
var dl=Long.$ival((Long.$and(ldivisor,4294967295)));
for (var j=0; j < limit; j++) {
var qhat=0;
var qrem=0;
var skipCorrection=false;
var nh=rem.value[j + rem.offset];
var nh2=(nh + -2147483648) | 0;
var nm=rem.value[j + 1 + rem.offset ];
if (nh == dh) {
qhat=~0;
qrem=nh + nm;
skipCorrection=((qrem + -2147483648) | 0) < nh2;
} else {
var nChunk=Long.$or((Long.$sl((nh),32)),(Long.$and(nm,4294967295)));
if (Long.$ge(nChunk,0 )) {
qhat=Long.$ival((Long.$div(nChunk,dhLong)));
qrem=Long.$ival((Long.$sub(nChunk,(Long.$mul(qhat,dhLong)))));
} else {
var tmp=C$.divWord$J$I(nChunk, dh);
qhat=Long.$ival((Long.$and(tmp,4294967295)));
qrem=Long.$ival((Long.$usr(tmp,32)));
}}if (qhat == 0) continue;
if (!skipCorrection) {
var nl=Long.$and(rem.value[j + 2 + rem.offset ],4294967295);
var rs=Long.$or((Long.$sl((Long.$and(qrem,4294967295)),32)),nl);
var estProduct=Long.$mul((Long.$and(dl,4294967295)),(Long.$and(qhat,4294967295)));
if (p$1.unsignedLongCompare$J$J.apply(this, [estProduct, rs])) {
--qhat;
qrem=Long.$ival((Long.$add((Long.$and(qrem,4294967295)),dhLong)));
if (Long.$ge((Long.$and(qrem,4294967295)),dhLong )) {
(estProduct=Long.$sub(estProduct,((Long.$and(dl,4294967295)))));
rs=Long.$or((Long.$sl((Long.$and(qrem,4294967295)),32)),nl);
if (p$1.unsignedLongCompare$J$J.apply(this, [estProduct, rs])) --qhat;
}}}rem.value[j + rem.offset]=0;
var borrow=p$1.mulsubLong$IA$I$I$I$I.apply(this, [rem.value, dh, dl, qhat, j + rem.offset]);
if (((borrow + -2147483648) | 0) > nh2) {
p$1.divaddLong$I$I$IA$I.apply(this, [dh, dl, rem.value, j + 1 + rem.offset ]);
--qhat;
}q[j]=qhat;
}
if (shift > 0) rem.rightShift$I(shift);
quotient.normalize$();
rem.normalize$();
return rem;
}, p$1);

Clazz.newMeth(C$, 'divaddLong$I$I$IA$I',  function (dh, dl, result, offset) {
var carry=0;
var sum=Long.$add((Long.$and(dl,4294967295)),(Long.$and(result[1 + offset],4294967295)));
result[1 + offset]=Long.$ival(sum);
sum=Long.$add((Long.$and(dh,4294967295)),(Long.$and(result[offset],4294967295)) , carry );
result[offset]=Long.$ival(sum);
carry=Long.$usr(sum,32);
return Long.$ival(carry);
}, p$1);

Clazz.newMeth(C$, 'mulsubLong$IA$I$I$I$I',  function (q, dh, dl, x, offset) {
var xLong=Long.$and(x,4294967295);
offset+=2;
var product=Long.$mul((Long.$and(dl,4294967295)),xLong);
var difference=Long.$sub(q[offset],product);
q[offset--]=Long.$ival(difference);
var carry=Long.$add((Long.$usr(product,32)),((Long.$gt((Long.$and(difference,4294967295)),((Long.$and((~Long.$ival(product)),4294967295))) )) ? 1 : 0));
product=Long.$add(Long.$mul((Long.$and(dh,4294967295)),xLong),carry);
difference=Long.$sub(q[offset],product);
q[offset--]=Long.$ival(difference);
carry=Long.$add((Long.$usr(product,32)),((Long.$gt((Long.$and(difference,4294967295)),((Long.$and((~Long.$ival(product)),4294967295))) )) ? 1 : 0));
return Long.$ival(carry);
}, p$1);

Clazz.newMeth(C$, 'unsignedLongCompare$J$J',  function (one, two) {
return Long.$gt((Long.$add(one,[0,549755813888,-1])),(Long.$add(two,[0,549755813888,-1])) );
}, p$1);

Clazz.newMeth(C$, 'divWord$J$I',  function (n, d) {
var dLong=Long.$and(d,4294967295);
var r;
var q;
if (Long.$eq(dLong,1 )) {
q=Long.$ival(n);
r=0;
return Long.$or((Long.$sl(r,32)),(Long.$and(q,4294967295)));
}q=Long.$div((Long.$usr(n,1)),(Long.$usr(dLong,1)));
r=Long.$sub(n,Long.$mul(q,dLong));
while (Long.$lt(r,0 )){
(r=Long.$add(r,(dLong)));
(q=Long.$inc(q,-1));
}
while (Long.$ge(r,dLong )){
(r=Long.$sub(r,(dLong)));
(q=Long.$inc(q,1));
}
return Long.$or((Long.$sl(r,32)),(Long.$and(q,4294967295)));
}, 1);

Clazz.newMeth(C$, 'hybridGCD$java_math_MutableBigInteger',  function (b) {
var a=this;
var q=Clazz.new_(C$);
while (b.intLen != 0){
if (Math.abs(a.intLen - b.intLen) < 2) return p$1.binaryGCD$java_math_MutableBigInteger.apply(a, [b]);
var r=a.divide$java_math_MutableBigInteger$java_math_MutableBigInteger(b, q);
a=b;
b=r;
}
return a;
});

Clazz.newMeth(C$, 'binaryGCD$java_math_MutableBigInteger',  function (v) {
var u=this;
var r=Clazz.new_(C$);
var s1=p$1.getLowestSetBit.apply(u, []);
var s2=p$1.getLowestSetBit.apply(v, []);
var k=(s1 < s2) ? s1 : s2;
if (k != 0) {
u.rightShift$I(k);
v.rightShift$I(k);
}var uOdd=(k == s1);
var t=uOdd ? v : u;
var tsign=uOdd ? -1 : 1;
var lb;
while ((lb=p$1.getLowestSetBit.apply(t, [])) >= 0){
t.rightShift$I(lb);
if (tsign > 0) u=t;
 else v=t;
if (u.intLen < 2 && v.intLen < 2 ) {
var x=u.value[u.offset];
var y=v.value[v.offset];
x=C$.binaryGcd$I$I(x, y);
r.value[0]=x;
r.intLen=1;
r.offset=0;
if (k > 0) r.leftShift$I(k);
return r;
}if ((tsign=p$1.difference$java_math_MutableBigInteger.apply(u, [v])) == 0) break;
t=(tsign >= 0) ? u : v;
}
if (k > 0) u.leftShift$I(k);
return u;
}, p$1);

Clazz.newMeth(C$, 'binaryGcd$I$I',  function (a, b) {
if (b == 0) return a;
if (a == 0) return b;
var aZeros=Integer.numberOfTrailingZeros$I(a);
var bZeros=Integer.numberOfTrailingZeros$I(b);
a>>>=aZeros;
b>>>=bZeros;
var t=(aZeros < bZeros ? aZeros : bZeros);
while (a != b){
if (((a + -2147483648) | 0) > ((b + -2147483648) | 0)) {
a-=b;
a>>>=Integer.numberOfTrailingZeros$I(a);
} else {
b-=a;
b>>>=Integer.numberOfTrailingZeros$I(b);
}}
return a << t;
}, 1);

Clazz.newMeth(C$, 'mutableModInverse$java_math_MutableBigInteger',  function (p) {
if (p.isOdd$()) return p$1.modInverse$java_math_MutableBigInteger.apply(this, [p]);
if (this.isEven$()) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["BigInteger not invertible."]);
var powersOf2=p$1.getLowestSetBit.apply(p, []);
var oddMod=Clazz.new_(C$.c$$java_math_MutableBigInteger,[p]);
oddMod.rightShift$I(powersOf2);
if (oddMod.isOne$()) return this.modInverseMP2$I(powersOf2);
var oddPart=p$1.modInverse$java_math_MutableBigInteger.apply(this, [oddMod]);
var evenPart=this.modInverseMP2$I(powersOf2);
var y1=C$.modInverseBP2$java_math_MutableBigInteger$I(oddMod, powersOf2);
var y2=oddMod.modInverseMP2$I(powersOf2);
var temp1=Clazz.new_(C$);
var temp2=Clazz.new_(C$);
var result=Clazz.new_(C$);
oddPart.leftShift$I(powersOf2);
oddPart.multiply$java_math_MutableBigInteger$java_math_MutableBigInteger(y1, result);
evenPart.multiply$java_math_MutableBigInteger$java_math_MutableBigInteger(oddMod, temp1);
temp1.multiply$java_math_MutableBigInteger$java_math_MutableBigInteger(y2, temp2);
result.add$java_math_MutableBigInteger(temp2);
return result.divide$java_math_MutableBigInteger$java_math_MutableBigInteger(p, temp1);
});

Clazz.newMeth(C$, 'modInverseMP2$I',  function (k) {
if (this.isEven$()) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Non-invertible. (GCD != 1)"]);
if (k > 64) return this.euclidModInverse$I(k);
var t=C$.inverseMod32$I(this.value[this.offset + this.intLen - 1]);
if (k < 33) {
t=(k == 32 ? t : t & ((1 << k) - 1));
return Clazz.new_(C$.c$$I,[t]);
}var pLong=(Long.$and(this.value[this.offset + this.intLen - 1],4294967295));
if (this.intLen > 1) (pLong=Long.$or(pLong,((Long.$sl(this.value[this.offset + this.intLen - 2],32)))));
var tLong=Long.$and(t,4294967295);
tLong=Long.$mul(tLong,(Long.$sub(2,Long.$mul(pLong,tLong))));
tLong=(k == 64 ? tLong : Long.$and(tLong,(Long.$sub((Long.$sl(1,k)),1))));
var result=Clazz.new_(C$.c$$IA,[Clazz.array(Integer.TYPE, [2])]);
result.value[0]=Long.$ival((Long.$usr(tLong,32)));
result.value[1]=Long.$ival(tLong);
result.intLen=2;
result.normalize$();
return result;
});

Clazz.newMeth(C$, 'inverseMod32$I',  function (val) {
var v=val;
var t=val;
(t=Long.$mul(t,(Long.$sub(2,(Long.$mul(v,t))))));
(t=Long.$mul(t,(Long.$sub(2,(Long.$mul(v,t))))));
(t=Long.$mul(t,(Long.$sub(2,(Long.$mul(v,t))))));
(t=Long.$mul(t,(Long.$sub(2,(Long.$mul(v,t))))));
return Long.$ival(t);
}, 1);

Clazz.newMeth(C$, 'modInverseBP2$java_math_MutableBigInteger$I',  function (mod, k) {
return C$.fixup$java_math_MutableBigInteger$java_math_MutableBigInteger$I(Clazz.new_(C$.c$$I,[1]), Clazz.new_(C$.c$$java_math_MutableBigInteger,[mod]), k);
}, 1);

Clazz.newMeth(C$, 'modInverse$java_math_MutableBigInteger',  function (mod) {
var p=Clazz.new_(C$.c$$java_math_MutableBigInteger,[mod]);
var f=Clazz.new_(C$.c$$java_math_MutableBigInteger,[this]);
var g=Clazz.new_(C$.c$$java_math_MutableBigInteger,[p]);
var c=Clazz.new_($I$(4,1).c$$I,[1]);
var d=Clazz.new_($I$(4,1));
var temp=null;
var sTemp=null;
var k=0;
if (f.isEven$()) {
var trailingZeros=p$1.getLowestSetBit.apply(f, []);
f.rightShift$I(trailingZeros);
d.leftShift$I(trailingZeros);
k=trailingZeros;
}while (!f.isOne$()){
if (f.isZero$()) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["BigInteger not invertible."]);
if (f.compare$java_math_MutableBigInteger(g) < 0) {
temp=f;
f=g;
g=temp;
sTemp=d;
d=c;
c=sTemp;
}if (((f.value[f.offset + f.intLen - 1] ^ g.value[g.offset + g.intLen - 1]) & 3) == 0) {
f.subtract$java_math_MutableBigInteger(g);
c.signedSubtract$java_math_SignedMutableBigInteger(d);
} else {
f.add$java_math_MutableBigInteger(g);
c.signedAdd$java_math_SignedMutableBigInteger(d);
}var trailingZeros=p$1.getLowestSetBit.apply(f, []);
f.rightShift$I(trailingZeros);
d.leftShift$I(trailingZeros);
k+=trailingZeros;
}
while (c.sign < 0)c.signedAdd$java_math_MutableBigInteger(p);

return C$.fixup$java_math_MutableBigInteger$java_math_MutableBigInteger$I(c, p, k);
}, p$1);

Clazz.newMeth(C$, 'fixup$java_math_MutableBigInteger$java_math_MutableBigInteger$I',  function (c, p, k) {
var temp=Clazz.new_(C$);
var r=-C$.inverseMod32$I(p.value[p.offset + p.intLen - 1]);
for (var i=0, numWords=k >> 5; i < numWords; i++) {
var v=r * c.value[c.offset + c.intLen - 1];
p.mul$I$java_math_MutableBigInteger(v, temp);
c.add$java_math_MutableBigInteger(temp);
--c.intLen;
}
var numBits=k & 31;
if (numBits != 0) {
var v=r * c.value[c.offset + c.intLen - 1];
v&=((1 << numBits) - 1);
p.mul$I$java_math_MutableBigInteger(v, temp);
c.add$java_math_MutableBigInteger(temp);
c.rightShift$I(numBits);
}while (c.compare$java_math_MutableBigInteger(p) >= 0)c.subtract$java_math_MutableBigInteger(p);

return c;
}, 1);

Clazz.newMeth(C$, 'euclidModInverse$I',  function (k) {
var b=Clazz.new_(C$.c$$I,[1]);
b.leftShift$I(k);
var mod=Clazz.new_(C$.c$$java_math_MutableBigInteger,[b]);
var a=Clazz.new_(C$.c$$java_math_MutableBigInteger,[this]);
var q=Clazz.new_(C$);
var r=b.divide$java_math_MutableBigInteger$java_math_MutableBigInteger(a, q);
var swapper=b;
b=r;
r=swapper;
var t1=Clazz.new_(C$.c$$java_math_MutableBigInteger,[q]);
var t0=Clazz.new_(C$.c$$I,[1]);
var temp=Clazz.new_(C$);
while (!b.isOne$()){
r=a.divide$java_math_MutableBigInteger$java_math_MutableBigInteger(b, q);
if (r.intLen == 0) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["BigInteger not invertible."]);
swapper=r;
a=swapper;
if (q.intLen == 1) t1.mul$I$java_math_MutableBigInteger(q.value[q.offset], temp);
 else q.multiply$java_math_MutableBigInteger$java_math_MutableBigInteger(t1, temp);
swapper=q;
q=temp;
temp=swapper;
t0.add$java_math_MutableBigInteger(q);
if (a.isOne$()) return t0;
r=b.divide$java_math_MutableBigInteger$java_math_MutableBigInteger(a, q);
if (r.intLen == 0) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["BigInteger not invertible."]);
swapper=b;
b=r;
if (q.intLen == 1) t0.mul$I$java_math_MutableBigInteger(q.value[q.offset], temp);
 else q.multiply$java_math_MutableBigInteger$java_math_MutableBigInteger(t0, temp);
swapper=q;
q=temp;
temp=swapper;
t1.add$java_math_MutableBigInteger(q);
}
mod.subtract$java_math_MutableBigInteger(t1);
return mod;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.ONE=Clazz.new_(C$.c$$I,[1]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:18 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
