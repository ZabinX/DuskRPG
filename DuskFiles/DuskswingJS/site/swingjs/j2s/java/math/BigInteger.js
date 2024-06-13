(function(){var P$=Clazz.newPackage("java.math"),p$1={},I$=[[0,'sun.misc.Unsafe','java.math.BigInteger','ExceptionInInitializerError','java.io.ObjectStreamField','java.math.BitSieve','java.util.concurrent.ThreadLocalRandom','java.util.Arrays','java.math.MutableBigInteger','StringBuilder',['java.math.BigInteger','.UnsafeHolder']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BigInteger", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'Number', 'Comparable');
C$.$classes$=[['UnsafeHolder',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['signum','bitCount','bitLength','lowestSetBit','firstNonzeroIntNum'],'O',['mag','int[]']]
,['D',['LOG_TWO'],'O',['bitsPerDigit','long[]','SMALL_PRIME_PRODUCT','java.math.BigInteger','posConst','java.math.BigInteger[]','+negConst','powerCache','java.math.BigInteger[][]','logCache','double[]','ZERO','java.math.BigInteger','+ONE','+TWO','+NEGATIVE_ONE','+TEN','bnExpModThreshTable','int[]','zeros','String[]','digitsPerLong','int[]','longRadix','java.math.BigInteger[]','digitsPerInt','int[]','+intRadix','serialPersistentFields','java.io.ObjectStreamField[]']]]

Clazz.newMeth(C$, 'c$$BA',  function (val) {
Clazz.super_(C$, this);
if (val.length == 0) throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["Zero length BigInteger"]);
if (val[0] < 0) {
this.mag=C$.makePositive$BA(val);
this.signum=-1;
} else {
this.mag=C$.stripLeadingZeroBytes$BA(val);
this.signum=(this.mag.length == 0 ? 0 : 1);
}if (this.mag.length >= 67108864) {
p$1.checkRange.apply(this, []);
}}, 1);

Clazz.newMeth(C$, 'c$$IA',  function (val) {
Clazz.super_(C$, this);
if (val.length == 0) throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["Zero length BigInteger"]);
if (val[0] < 0) {
this.mag=C$.makePositive$IA(val);
this.signum=-1;
} else {
this.mag=C$.trustedStripLeadingZeroInts$IA(val);
this.signum=(this.mag.length == 0 ? 0 : 1);
}if (this.mag.length >= 67108864) {
p$1.checkRange.apply(this, []);
}}, 1);

Clazz.newMeth(C$, 'c$$I$BA',  function (signum, magnitude) {
Clazz.super_(C$, this);
this.mag=C$.stripLeadingZeroBytes$BA(magnitude);
if (signum < -1 || signum > 1 ) throw (Clazz.new_(Clazz.load('NumberFormatException').c$$S,["Invalid signum value"]));
if (this.mag.length == 0) {
this.signum=0;
} else {
if (signum == 0) throw (Clazz.new_(Clazz.load('NumberFormatException').c$$S,["signum-magnitude mismatch"]));
this.signum=signum;
}if (this.mag.length >= 67108864) {
p$1.checkRange.apply(this, []);
}}, 1);

Clazz.newMeth(C$, 'c$$I$IA',  function (signum, magnitude) {
Clazz.super_(C$, this);
this.mag=C$.stripLeadingZeroInts$IA(magnitude);
if (signum < -1 || signum > 1 ) throw (Clazz.new_(Clazz.load('NumberFormatException').c$$S,["Invalid signum value"]));
if (this.mag.length == 0) {
this.signum=0;
} else {
if (signum == 0) throw (Clazz.new_(Clazz.load('NumberFormatException').c$$S,["signum-magnitude mismatch"]));
this.signum=signum;
}if (this.mag.length >= 67108864) {
p$1.checkRange.apply(this, []);
}}, 1);

Clazz.newMeth(C$, 'c$$S$I',  function (val, radix) {
Clazz.super_(C$, this);
var cursor=0;
var numDigits;
var len=val.length$();
if (radix < 2 || radix > 36 ) throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["Radix out of range"]);
if (len == 0) throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["Zero length BigInteger"]);
var sign=1;
var index1=val.lastIndexOf$I("-");
var index2=val.lastIndexOf$I("+");
if (index1 >= 0) {
if (index1 != 0 || index2 >= 0 ) {
throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["Illegal embedded sign character"]);
}sign=-1;
cursor=1;
} else if (index2 >= 0) {
if (index2 != 0) {
throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["Illegal embedded sign character"]);
}cursor=1;
}if (cursor == len) throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["Zero length BigInteger"]);
while (cursor < len && Character.digit$C$I(val.charAt$I(cursor), radix) == 0 ){
++cursor;
}
if (cursor == len) {
this.signum=0;
this.mag=C$.ZERO.mag;
return;
}numDigits=len - cursor;
this.signum=sign;
var numBits=Long.$add((Long.$usr((Long.$mul(numDigits,C$.bitsPerDigit[radix])),10)),1);
if (Long.$ge(Long.$add(numBits,31),(4294967296) )) {
C$.reportOverflow$();
}var numWords=Long.$ival((Long.$add(numBits,31))) >>> 5;
var magnitude=Clazz.array(Integer.TYPE, [numWords]);
var firstGroupLen=numDigits % C$.digitsPerInt[radix];
if (firstGroupLen == 0) firstGroupLen=C$.digitsPerInt[radix];
var group=val.substring$I$I(cursor, cursor+=firstGroupLen);
magnitude[numWords - 1]=Integer.parseInt$S$I(group, radix);
if (magnitude[numWords - 1] < 0) throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["Illegal digit"]);
var superRadix=C$.intRadix[radix];
var groupVal=0;
while (cursor < len){
group=val.substring$I$I(cursor, cursor+=C$.digitsPerInt[radix]);
groupVal=Integer.parseInt$S$I(group, radix);
if (groupVal < 0) throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,["Illegal digit"]);
C$.destructiveMulAdd$IA$I$I(magnitude, superRadix, groupVal);
}
this.mag=C$.trustedStripLeadingZeroInts$IA(magnitude);
if (this.mag.length >= 67108864) {
p$1.checkRange.apply(this, []);
}}, 1);

Clazz.newMeth(C$, 'c$$CA$I$I',  function (val, sign, len) {
Clazz.super_(C$, this);
var cursor=0;
var numDigits;
while (cursor < len && Character.digit$C$I(val[cursor], 10) == 0 ){
++cursor;
}
if (cursor == len) {
this.signum=0;
this.mag=C$.ZERO.mag;
return;
}numDigits=len - cursor;
this.signum=sign;
var numWords;
if (len < 10) {
numWords=1;
} else {
var numBits=Long.$add((Long.$usr((Long.$mul(numDigits,C$.bitsPerDigit[10])),10)),1);
if (Long.$ge(Long.$add(numBits,31),(4294967296) )) {
C$.reportOverflow$();
}numWords=Long.$ival((Long.$add(numBits,31))) >>> 5;
}var magnitude=Clazz.array(Integer.TYPE, [numWords]);
var firstGroupLen=numDigits % C$.digitsPerInt[10];
if (firstGroupLen == 0) firstGroupLen=C$.digitsPerInt[10];
magnitude[numWords - 1]=p$1.parseInt$CA$I$I.apply(this, [val, cursor, cursor+=firstGroupLen]);
while (cursor < len){
var groupVal=p$1.parseInt$CA$I$I.apply(this, [val, cursor, cursor+=C$.digitsPerInt[10]]);
C$.destructiveMulAdd$IA$I$I(magnitude, C$.intRadix[10], groupVal);
}
this.mag=C$.trustedStripLeadingZeroInts$IA(magnitude);
if (this.mag.length >= 67108864) {
p$1.checkRange.apply(this, []);
}}, 1);

Clazz.newMeth(C$, 'parseInt$CA$I$I',  function (source, start, end) {
var result=Character.digit$C$I(source[start++], 10);
if (result == -1) throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,[ String.instantialize(source)]);
for (var index=start; index < end; index++) {
var nextVal=Character.digit$C$I(source[index], 10);
if (nextVal == -1) throw Clazz.new_(Clazz.load('NumberFormatException').c$$S,[ String.instantialize(source)]);
result=10 * result + nextVal;
}
return result;
}, p$1);

Clazz.newMeth(C$, 'destructiveMulAdd$IA$I$I',  function (x, y, z) {
var ylong=Long.$and(y,4294967295);
var zlong=Long.$and(z,4294967295);
var len=x.length;
var product=0;
var carry=0;
for (var i=len - 1; i >= 0; i--) {
product=Long.$add(Long.$mul(ylong,(Long.$and(x[i],4294967295))),carry);
x[i]=Long.$ival(product);
carry=Long.$usr(product,32);
}
var sum=Long.$add((Long.$and(x[len - 1],4294967295)),zlong);
x[len - 1]=Long.$ival(sum);
carry=Long.$usr(sum,32);
for (var i=len - 2; i >= 0; i--) {
sum=Long.$add((Long.$and(x[i],4294967295)),carry);
x[i]=Long.$ival(sum);
carry=Long.$usr(sum,32);
}
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (val) {
C$.c$$S$I.apply(this, [val, 10]);
}, 1);

Clazz.newMeth(C$, 'c$$I$java_util_Random',  function (numBits, rnd) {
C$.c$$I$BA.apply(this, [1, C$.randomBits$I$java_util_Random(numBits, rnd)]);
}, 1);

Clazz.newMeth(C$, 'randomBits$I$java_util_Random',  function (numBits, rnd) {
if (numBits < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["numBits must be non-negative"]);
var numBytes=Long.$ival((Long.$div((Long.$add(numBits,7)),8)));
var randomBits=Clazz.array(Byte.TYPE, [numBytes]);
if (numBytes > 0) {
rnd.nextBytes$BA(randomBits);
var excessBits=8 * numBytes - numBits;
randomBits[0]=(randomBits[0]&((1 << (8 - excessBits)) - 1)|0);
}return randomBits;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$java_util_Random',  function (bitLength, certainty, rnd) {
Clazz.super_(C$, this);
var prime;
if (bitLength < 2) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["bitLength < 2"]);
prime=(bitLength < 95 ? C$.smallPrime$I$I$java_util_Random(bitLength, certainty, rnd) : C$.largePrime$I$I$java_util_Random(bitLength, certainty, rnd));
this.signum=1;
this.mag=prime.mag;
}, 1);

Clazz.newMeth(C$, 'probablePrime$I$java_util_Random',  function (bitLength, rnd) {
if (bitLength < 2) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["bitLength < 2"]);
return (bitLength < 95 ? C$.smallPrime$I$I$java_util_Random(bitLength, 100, rnd) : C$.largePrime$I$I$java_util_Random(bitLength, 100, rnd));
}, 1);

Clazz.newMeth(C$, 'smallPrime$I$I$java_util_Random',  function (bitLength, certainty, rnd) {
var magLen=(bitLength + 31) >>> 5;
var temp=Clazz.array(Integer.TYPE, [magLen]);
var highBit=1 << ((bitLength + 31) & 31);
var highMask=(highBit << 1) - 1;
while (true){
for (var i=0; i < magLen; i++) temp[i]=rnd.nextInt$();

temp[0]=(temp[0] & highMask) | highBit;
if (bitLength > 2) temp[magLen - 1]|=1;
var p=Clazz.new_(C$.c$$IA$I,[temp, 1]);
if (bitLength > 6) {
var r=p.remainder$java_math_BigInteger(C$.SMALL_PRIME_PRODUCT).longValue$();
if ((Long.$eq(Long.$mod(r,3),0 )) || (Long.$eq(Long.$mod(r,5),0 )) || (Long.$eq(Long.$mod(r,7),0 )) || (Long.$eq(Long.$mod(r,11),0 )) || (Long.$eq(Long.$mod(r,13),0 )) || (Long.$eq(Long.$mod(r,17),0 )) || (Long.$eq(Long.$mod(r,19),0 )) || (Long.$eq(Long.$mod(r,23),0 )) || (Long.$eq(Long.$mod(r,29),0 )) || (Long.$eq(Long.$mod(r,31),0 )) || (Long.$eq(Long.$mod(r,37),0 )) || (Long.$eq(Long.$mod(r,41),0 ))  ) continue;
}if (bitLength < 4) return p;
if (p.primeToCertainty$I$java_util_Random(certainty, rnd)) return p;
}
}, 1);

Clazz.newMeth(C$, 'largePrime$I$I$java_util_Random',  function (bitLength, certainty, rnd) {
var p;
p=Clazz.new_(C$.c$$I$java_util_Random,[bitLength, rnd]).setBit$I(bitLength - 1);
p.mag[p.mag.length - 1]&=-2;
var searchLen=C$.getPrimeSearchLen$I(bitLength);
var searchSieve=Clazz.new_($I$(5,1).c$$java_math_BigInteger$I,[p, searchLen]);
var candidate=searchSieve.retrieve$java_math_BigInteger$I$java_util_Random(p, certainty, rnd);
while ((candidate == null ) || (candidate.bitLength$() != bitLength) ){
p=p.add$java_math_BigInteger(C$.valueOf$J(2 * searchLen));
if (p.bitLength$() != bitLength) p=Clazz.new_(C$.c$$I$java_util_Random,[bitLength, rnd]).setBit$I(bitLength - 1);
p.mag[p.mag.length - 1]&=-2;
searchSieve=Clazz.new_($I$(5,1).c$$java_math_BigInteger$I,[p, searchLen]);
candidate=searchSieve.retrieve$java_math_BigInteger$I$java_util_Random(p, certainty, rnd);
}
return candidate;
}, 1);

Clazz.newMeth(C$, 'nextProbablePrime$',  function () {
if (this.signum < 0) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["start < 0: " + this]);
if ((this.signum == 0) || this.equals$O(C$.ONE) ) return C$.TWO;
var result=this.add$java_math_BigInteger(C$.ONE);
if (result.bitLength$() < 95) {
if (!result.testBit$I(0)) result=result.add$java_math_BigInteger(C$.ONE);
while (true){
if (result.bitLength$() > 6) {
var r=result.remainder$java_math_BigInteger(C$.SMALL_PRIME_PRODUCT).longValue$();
if ((Long.$eq(Long.$mod(r,3),0 )) || (Long.$eq(Long.$mod(r,5),0 )) || (Long.$eq(Long.$mod(r,7),0 )) || (Long.$eq(Long.$mod(r,11),0 )) || (Long.$eq(Long.$mod(r,13),0 )) || (Long.$eq(Long.$mod(r,17),0 )) || (Long.$eq(Long.$mod(r,19),0 )) || (Long.$eq(Long.$mod(r,23),0 )) || (Long.$eq(Long.$mod(r,29),0 )) || (Long.$eq(Long.$mod(r,31),0 )) || (Long.$eq(Long.$mod(r,37),0 )) || (Long.$eq(Long.$mod(r,41),0 ))  ) {
result=result.add$java_math_BigInteger(C$.TWO);
continue;
}}if (result.bitLength$() < 4) return result;
if (result.primeToCertainty$I$java_util_Random(100, null)) return result;
result=result.add$java_math_BigInteger(C$.TWO);
}
}if (result.testBit$I(0)) result=result.subtract$java_math_BigInteger(C$.ONE);
var searchLen=C$.getPrimeSearchLen$I(result.bitLength$());
while (true){
var searchSieve=Clazz.new_($I$(5,1).c$$java_math_BigInteger$I,[result, searchLen]);
var candidate=searchSieve.retrieve$java_math_BigInteger$I$java_util_Random(result, 100, null);
if (candidate != null ) return candidate;
result=result.add$java_math_BigInteger(C$.valueOf$J(2 * searchLen));
}
});

Clazz.newMeth(C$, 'getPrimeSearchLen$I',  function (bitLength) {
if (bitLength > 500000001) {
throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Prime search implementation restriction on bitLength"]);
}return (bitLength/20|0) * 64;
}, 1);

Clazz.newMeth(C$, 'primeToCertainty$I$java_util_Random',  function (certainty, random) {
var rounds=0;
var n=((Math.min(certainty, 2147483646) + 1)/2|0);
var sizeInBits=this.bitLength$();
if (sizeInBits < 100) {
rounds=50;
rounds=n < rounds ? n : rounds;
return p$1.passesMillerRabin$I$java_util_Random.apply(this, [rounds, random]);
}if (sizeInBits < 256) {
rounds=27;
} else if (sizeInBits < 512) {
rounds=15;
} else if (sizeInBits < 768) {
rounds=8;
} else if (sizeInBits < 1024) {
rounds=4;
} else {
rounds=2;
}rounds=n < rounds ? n : rounds;
return p$1.passesMillerRabin$I$java_util_Random.apply(this, [rounds, random]) && p$1.passesLucasLehmer.apply(this, []) ;
});

Clazz.newMeth(C$, 'passesLucasLehmer',  function () {
var thisPlusOne=this.add$java_math_BigInteger(C$.ONE);
var d=5;
while (C$.jacobiSymbol$I$java_math_BigInteger(d, this) != -1){
d=(d < 0) ? Math.abs(d) + 2 : -(d + 2);
}
var u=C$.lucasLehmerSequence$I$java_math_BigInteger$java_math_BigInteger(d, thisPlusOne, this);
return u.mod$java_math_BigInteger(this).equals$O(C$.ZERO);
}, p$1);

Clazz.newMeth(C$, 'jacobiSymbol$I$java_math_BigInteger',  function (p, n) {
if (p == 0) return 0;
var j=1;
var u=n.mag[n.mag.length - 1];
if (p < 0) {
p=-p;
var n8=u & 7;
if ((n8 == 3) || (n8 == 7) ) j=-j;
}while ((p & 3) == 0)p>>=2;

if ((p & 1) == 0) {
p>>=1;
if (((u ^ (u >> 1)) & 2) != 0) j=-j;
}if (p == 1) return j;
if ((p & u & 2 ) != 0) j=-j;
u=n.mod$java_math_BigInteger(C$.valueOf$J(p)).intValue$();
while (u != 0){
while ((u & 3) == 0)u>>=2;

if ((u & 1) == 0) {
u>>=1;
if (((p ^ (p >> 1)) & 2) != 0) j=-j;
}if (u == 1) return j;
var t=u;
u=p;
p=t;
if ((u & p & 2 ) != 0) j=-j;
u%=p;
}
return 0;
}, 1);

Clazz.newMeth(C$, 'lucasLehmerSequence$I$java_math_BigInteger$java_math_BigInteger',  function (z, k, n) {
var d=C$.valueOf$J(z);
var u=C$.ONE;
var u2;
var v=C$.ONE;
var v2;
for (var i=k.bitLength$() - 2; i >= 0; i--) {
u2=u.multiply$java_math_BigInteger(v).mod$java_math_BigInteger(n);
v2=p$1.square.apply(v, []).add$java_math_BigInteger(d.multiply$java_math_BigInteger(p$1.square.apply(u, []))).mod$java_math_BigInteger(n);
if (v2.testBit$I(0)) v2=v2.subtract$java_math_BigInteger(n);
v2=v2.shiftRight$I(1);
u=u2;
v=v2;
if (k.testBit$I(i)) {
u2=u.add$java_math_BigInteger(v).mod$java_math_BigInteger(n);
if (u2.testBit$I(0)) u2=u2.subtract$java_math_BigInteger(n);
u2=u2.shiftRight$I(1);
v2=v.add$java_math_BigInteger(d.multiply$java_math_BigInteger(u)).mod$java_math_BigInteger(n);
if (v2.testBit$I(0)) v2=v2.subtract$java_math_BigInteger(n);
v2=v2.shiftRight$I(1);
u=u2;
v=v2;
}}
return u;
}, 1);

Clazz.newMeth(C$, 'passesMillerRabin$I$java_util_Random',  function (iterations, rnd) {
var thisMinusOne=this.subtract$java_math_BigInteger(C$.ONE);
var m=thisMinusOne;
var a=m.getLowestSetBit$();
m=m.shiftRight$I(a);
if (rnd == null ) {
rnd=$I$(6).current$();
}for (var i=0; i < iterations; i++) {
var b;
do {
b=Clazz.new_(C$.c$$I$java_util_Random,[this.bitLength$(), rnd]);
} while (b.compareTo$java_math_BigInteger(C$.ONE) <= 0 || b.compareTo$java_math_BigInteger(this) >= 0 );
var j=0;
var z=b.modPow$java_math_BigInteger$java_math_BigInteger(m, this);
while (!((j == 0 && z.equals$O(C$.ONE) ) || z.equals$O(thisMinusOne) )){
if (j > 0 && z.equals$O(C$.ONE)  || ++j == a ) return false;
z=z.modPow$java_math_BigInteger$java_math_BigInteger(C$.TWO, this);
}
}
return true;
}, p$1);

Clazz.newMeth(C$, 'c$$IA$I',  function (magnitude, signum) {
Clazz.super_(C$, this);
this.signum=(magnitude.length == 0 ? 0 : signum);
this.mag=magnitude;
if (this.mag.length >= 67108864) {
p$1.checkRange.apply(this, []);
}}, 1);

Clazz.newMeth(C$, 'checkRange',  function () {
if (this.mag.length > 67108864 || this.mag.length == 67108864 && this.mag[0] < 0  ) {
C$.reportOverflow$();
}}, p$1);

Clazz.newMeth(C$, 'reportOverflow$',  function () {
throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["BigInteger would overflow supported range"]);
}, 1);

Clazz.newMeth(C$, 'valueOf$J',  function (val) {
if (Long.$eq(val,0 )) return C$.ZERO;
if (Long.$gt(val,0 ) && Long.$le(val,16 ) ) return C$.posConst[Long.$ival(val)];
 else if (Long.$lt(val,0 ) && Long.$ge(val,-16 ) ) return C$.negConst[Long.$ival((Long.$neg(val)))];
return Clazz.new_(C$.c$$J,[val]);
}, 1);

Clazz.newMeth(C$, 'c$$J',  function (val) {
Clazz.super_(C$, this);
if (Long.$lt(val,0 )) {
val=(Long.$neg(val));
this.signum=-1;
} else {
this.signum=1;
}var highWord=Long.$ival((Long.$usr(val,32)));
if (highWord == 0) {
this.mag=Clazz.array(Integer.TYPE, [1]);
this.mag[0]=Long.$ival(val);
} else {
this.mag=Clazz.array(Integer.TYPE, [2]);
this.mag[0]=highWord;
this.mag[1]=Long.$ival(val);
}}, 1);

Clazz.newMeth(C$, 'valueOf$IA',  function (val) {
return (val[0] > 0 ? Clazz.new_(C$.c$$IA$I,[val, 1]) : Clazz.new_(C$.c$$IA,[val]));
}, 1);

Clazz.newMeth(C$, ['add$java_math_BigInteger','add'],  function (val) {
if (val.signum == 0) return this;
if (this.signum == 0) return val;
if (val.signum == this.signum) return Clazz.new_(C$.c$$IA$I,[C$.add$IA$IA(this.mag, val.mag), this.signum]);
var cmp=this.compareMagnitude$java_math_BigInteger(val);
if (cmp == 0) return C$.ZERO;
var resultMag=(cmp > 0 ? C$.subtract$IA$IA(this.mag, val.mag) : C$.subtract$IA$IA(val.mag, this.mag));
resultMag=C$.trustedStripLeadingZeroInts$IA(resultMag);
return Clazz.new_(C$.c$$IA$I,[resultMag, cmp == this.signum ? 1 : -1]);
});

Clazz.newMeth(C$, 'add$J',  function (val) {
if (Long.$eq(val,0 )) return this;
if (this.signum == 0) return C$.valueOf$J(val);
if (Long.signum$J(val) == this.signum) return Clazz.new_(C$.c$$IA$I,[C$.add$IA$J(this.mag, Math.abs$J(val)), this.signum]);
var cmp=this.compareMagnitude$J(val);
if (cmp == 0) return C$.ZERO;
var resultMag=(cmp > 0 ? C$.subtract$IA$J(this.mag, Math.abs$J(val)) : C$.subtract$J$IA(Math.abs$J(val), this.mag));
resultMag=C$.trustedStripLeadingZeroInts$IA(resultMag);
return Clazz.new_(C$.c$$IA$I,[resultMag, cmp == this.signum ? 1 : -1]);
});

Clazz.newMeth(C$, 'add$IA$J',  function (x, val) {
var sum=0;
var xIndex=x.length;
var result;
var highWord=Long.$ival((Long.$usr(val,32)));
if (highWord == 0) {
result=Clazz.array(Integer.TYPE, [xIndex]);
sum=Long.$add((Long.$and(x[--xIndex],4294967295)),val);
result[xIndex]=Long.$ival(sum);
} else {
if (xIndex == 1) {
result=Clazz.array(Integer.TYPE, [2]);
sum=Long.$add(val,(Long.$and(x[0],4294967295)));
result[1]=Long.$ival(sum);
result[0]=Long.$ival((Long.$usr(sum,32)));
return result;
} else {
result=Clazz.array(Integer.TYPE, [xIndex]);
sum=Long.$add((Long.$and(x[--xIndex],4294967295)),(Long.$and(val,4294967295)));
result[xIndex]=Long.$ival(sum);
sum=Long.$add((Long.$and(x[--xIndex],4294967295)),(Long.$and(highWord,4294967295)) , (Long.$usr(sum,32)) );
result[xIndex]=Long.$ival(sum);
}}var carry=(Long.$ne(Long.$usr(sum,32),0 ));
while (xIndex > 0 && carry )carry=((result[--xIndex]=x[xIndex] + 1) == 0);

while (xIndex > 0)result[--xIndex]=x[xIndex];

if (carry) {
var bigger=Clazz.array(Integer.TYPE, [result.length + 1]);
System.arraycopy$O$I$O$I$I(result, 0, bigger, 1, result.length);
bigger[0]=1;
return bigger;
}return result;
}, 1);

Clazz.newMeth(C$, 'add$IA$IA',  function (x, y) {
if (x.length < y.length) {
var tmp=x;
x=y;
y=tmp;
}var xIndex=x.length;
var yIndex=y.length;
var result=Clazz.array(Integer.TYPE, [xIndex]);
var sum=0;
if (yIndex == 1) {
sum=Long.$add((Long.$and(x[--xIndex],4294967295)),(Long.$and(y[0],4294967295)));
result[xIndex]=Long.$ival(sum);
} else {
while (yIndex > 0){
sum=Long.$add((Long.$and(x[--xIndex],4294967295)),(Long.$and(y[--yIndex],4294967295)) , (Long.$usr(sum,32)) );
result[xIndex]=Long.$ival(sum);
}
}var carry=(Long.$ne(Long.$usr(sum,32),0 ));
while (xIndex > 0 && carry )carry=((result[--xIndex]=x[xIndex] + 1) == 0);

while (xIndex > 0)result[--xIndex]=x[xIndex];

if (carry) {
var bigger=Clazz.array(Integer.TYPE, [result.length + 1]);
System.arraycopy$O$I$O$I$I(result, 0, bigger, 1, result.length);
bigger[0]=1;
return bigger;
}return result;
}, 1);

Clazz.newMeth(C$, 'subtract$J$IA',  function (val, little) {
var highWord=Long.$ival((Long.$usr(val,32)));
if (highWord == 0) {
var result=Clazz.array(Integer.TYPE, [1]);
result[0]=Long.$ival((Long.$sub(val,(Long.$and(little[0],4294967295)))));
return result;
} else {
var result=Clazz.array(Integer.TYPE, [2]);
if (little.length == 1) {
var difference=Long.$sub((Long.$and(Long.$ival(val),4294967295)),(Long.$and(little[0],4294967295)));
result[1]=Long.$ival(difference);
var borrow=(Long.$ne(Long.$sr(difference,32),0 ));
if (borrow) {
result[0]=highWord - 1;
} else {
result[0]=highWord;
}return result;
} else {
var difference=Long.$sub((Long.$and(Long.$ival(val),4294967295)),(Long.$and(little[1],4294967295)));
result[1]=Long.$ival(difference);
difference=Long.$add(Long.$sub((Long.$and(highWord,4294967295)),(Long.$and(little[0],4294967295))),(Long.$sr(difference,32)));
result[0]=Long.$ival(difference);
return result;
}}}, 1);

Clazz.newMeth(C$, 'subtract$IA$J',  function (big, val) {
var highWord=Long.$ival((Long.$usr(val,32)));
var bigIndex=big.length;
var result=Clazz.array(Integer.TYPE, [bigIndex]);
var difference=0;
if (highWord == 0) {
difference=Long.$sub((Long.$and(big[--bigIndex],4294967295)),val);
result[bigIndex]=Long.$ival(difference);
} else {
difference=Long.$sub((Long.$and(big[--bigIndex],4294967295)),(Long.$and(val,4294967295)));
result[bigIndex]=Long.$ival(difference);
difference=Long.$add(Long.$sub((Long.$and(big[--bigIndex],4294967295)),(Long.$and(highWord,4294967295))),(Long.$sr(difference,32)));
result[bigIndex]=Long.$ival(difference);
}var borrow=(Long.$ne(Long.$sr(difference,32),0 ));
while (bigIndex > 0 && borrow )borrow=((result[--bigIndex]=big[bigIndex] - 1) == -1);

while (bigIndex > 0)result[--bigIndex]=big[bigIndex];

return result;
}, 1);

Clazz.newMeth(C$, ['subtract$java_math_BigInteger','sub'],  function (val) {
if (val.signum == 0) return this;
if (this.signum == 0) return val.negate$();
if (val.signum != this.signum) return Clazz.new_(C$.c$$IA$I,[C$.add$IA$IA(this.mag, val.mag), this.signum]);
var cmp=this.compareMagnitude$java_math_BigInteger(val);
if (cmp == 0) return C$.ZERO;
var resultMag=(cmp > 0 ? C$.subtract$IA$IA(this.mag, val.mag) : C$.subtract$IA$IA(val.mag, this.mag));
resultMag=C$.trustedStripLeadingZeroInts$IA(resultMag);
return Clazz.new_(C$.c$$IA$I,[resultMag, cmp == this.signum ? 1 : -1]);
});

Clazz.newMeth(C$, 'subtract$IA$IA',  function (big, little) {
var bigIndex=big.length;
var result=Clazz.array(Integer.TYPE, [bigIndex]);
var littleIndex=little.length;
var difference=0;
while (littleIndex > 0){
difference=Long.$add(Long.$sub((Long.$and(big[--bigIndex],4294967295)),(Long.$and(little[--littleIndex],4294967295))),(Long.$sr(difference,32)));
result[bigIndex]=Long.$ival(difference);
}
var borrow=(Long.$ne(Long.$sr(difference,32),0 ));
while (bigIndex > 0 && borrow )borrow=((result[--bigIndex]=big[bigIndex] - 1) == -1);

while (bigIndex > 0)result[--bigIndex]=big[bigIndex];

return result;
}, 1);

Clazz.newMeth(C$, ['multiply$java_math_BigInteger','mul'],  function (val) {
if (val.signum == 0 || this.signum == 0 ) return C$.ZERO;
var xlen=this.mag.length;
if (val === this  && xlen > 20 ) {
return p$1.square.apply(this, []);
}var ylen=val.mag.length;
if ((xlen < 80) || (ylen < 80) ) {
var resultSign=this.signum == val.signum ? 1 : -1;
if (val.mag.length == 1) {
return C$.multiplyByInt$IA$I$I(this.mag, val.mag[0], resultSign);
}if (this.mag.length == 1) {
return C$.multiplyByInt$IA$I$I(val.mag, this.mag[0], resultSign);
}var result=p$1.multiplyToLen$IA$I$IA$I$IA.apply(this, [this.mag, xlen, val.mag, ylen, null]);
result=C$.trustedStripLeadingZeroInts$IA(result);
return Clazz.new_(C$.c$$IA$I,[result, resultSign]);
} else {
if ((xlen < 240) && (ylen < 240) ) {
return C$.multiplyKaratsuba$java_math_BigInteger$java_math_BigInteger(this, val);
} else {
return C$.multiplyToomCook3$java_math_BigInteger$java_math_BigInteger(this, val);
}}});

Clazz.newMeth(C$, 'multiplyByInt$IA$I$I',  function (x, y, sign) {
if (Integer.bitCount$I(y) == 1) {
return Clazz.new_(C$.c$$IA$I,[C$.shiftLeft$IA$I(x, Integer.numberOfTrailingZeros$I(y)), sign]);
}var xlen=x.length;
var rmag=Clazz.array(Integer.TYPE, [xlen + 1]);
var carry=0;
var yl=Long.$and(y,4294967295);
var rstart=rmag.length - 1;
for (var i=xlen - 1; i >= 0; i--) {
var product=Long.$add(Long.$mul((Long.$and(x[i],4294967295)),yl),carry);
rmag[rstart--]=Long.$ival(product);
carry=Long.$usr(product,32);
}
if (Long.$eq(carry,0 )) {
rmag=$I$(7).copyOfRange$IA$I$I(rmag, 1, rmag.length);
} else {
rmag[rstart]=Long.$ival(carry);
}return Clazz.new_(C$.c$$IA$I,[rmag, sign]);
}, 1);

Clazz.newMeth(C$, 'multiply$J',  function (v) {
if (Long.$eq(v,0 ) || this.signum == 0 ) return C$.ZERO;
if (Long.$eq(v,[0,549755813888,-1] )) return this.multiply$java_math_BigInteger(C$.valueOf$J(v));
var rsign=(Long.$gt(v,0 ) ? this.signum : -this.signum);
if (Long.$lt(v,0 )) v=(Long.$neg(v));
var dh=Long.$usr(v,32);
var dl=Long.$and(v,4294967295);
var xlen=this.mag.length;
var value=this.mag;
var rmag=(Long.$eq(dh,0 )) ? (Clazz.array(Integer.TYPE, [xlen + 1])) : (Clazz.array(Integer.TYPE, [xlen + 2]));
var carry=0;
var rstart=rmag.length - 1;
for (var i=xlen - 1; i >= 0; i--) {
var product=Long.$add(Long.$mul((Long.$and(value[i],4294967295)),dl),carry);
rmag[rstart--]=Long.$ival(product);
carry=Long.$usr(product,32);
}
rmag[rstart]=Long.$ival(carry);
if (Long.$ne(dh,0 )) {
carry=0;
rstart=rmag.length - 2;
for (var i=xlen - 1; i >= 0; i--) {
var product=Long.$add(Long.$add(Long.$mul((Long.$and(value[i],4294967295)),dh),(Long.$and(rmag[rstart],4294967295))),carry);
rmag[rstart--]=Long.$ival(product);
carry=Long.$usr(product,32);
}
rmag[0]=Long.$ival(carry);
}if (Long.$eq(carry,0 )) rmag=$I$(7).copyOfRange$IA$I$I(rmag, 1, rmag.length);
return Clazz.new_(C$.c$$IA$I,[rmag, rsign]);
});

Clazz.newMeth(C$, 'multiplyToLen$IA$I$IA$I$IA',  function (x, xlen, y, ylen, z) {
var xstart=xlen - 1;
var ystart=ylen - 1;
if (z == null  || z.length < (xlen + ylen) ) z=Clazz.array(Integer.TYPE, [xlen + ylen]);
var carry=0;
for (var j=ystart, k=ystart + 1 + xstart ; j >= 0; j--, k--) {
var product=Long.$add(Long.$mul((Long.$and(y[j],4294967295)),(Long.$and(x[xstart],4294967295))),carry);
z[k]=Long.$ival(product);
carry=Long.$usr(product,32);
}
z[xstart]=Long.$ival(carry);
for (var i=xstart - 1; i >= 0; i--) {
carry=0;
for (var j=ystart, k=ystart + 1 + i ; j >= 0; j--, k--) {
var product=Long.$add(Long.$add(Long.$mul((Long.$and(y[j],4294967295)),(Long.$and(x[i],4294967295))),(Long.$and(z[k],4294967295))),carry);
z[k]=Long.$ival(product);
carry=Long.$usr(product,32);
}
z[i]=Long.$ival(carry);
}
return z;
}, p$1);

Clazz.newMeth(C$, 'multiplyKaratsuba$java_math_BigInteger$java_math_BigInteger',  function (x, y) {
var xlen=x.mag.length;
var ylen=y.mag.length;
var half=((Math.max(xlen, ylen) + 1)/2|0);
var xl=p$1.getLower$I.apply(x, [half]);
var xh=p$1.getUpper$I.apply(x, [half]);
var yl=p$1.getLower$I.apply(y, [half]);
var yh=p$1.getUpper$I.apply(y, [half]);
var p1=xh.multiply$java_math_BigInteger(yh);
var p2=xl.multiply$java_math_BigInteger(yl);
var p3=xh.add$java_math_BigInteger(xl).multiply$java_math_BigInteger(yh.add$java_math_BigInteger(yl));
var result=p1.shiftLeft$I(32 * half).add$java_math_BigInteger(p3.subtract$java_math_BigInteger(p1).subtract$java_math_BigInteger(p2)).shiftLeft$I(32 * half).add$java_math_BigInteger(p2);
if (x.signum != y.signum) {
return result.negate$();
} else {
return result;
}}, 1);

Clazz.newMeth(C$, 'multiplyToomCook3$java_math_BigInteger$java_math_BigInteger',  function (a, b) {
var alen=a.mag.length;
var blen=b.mag.length;
var largest=Math.max(alen, blen);
var k=((largest + 2)/3|0);
var r=largest - 2 * k;
var a0;
var a1;
var a2;
var b0;
var b1;
var b2;
a2=p$1.getToomSlice$I$I$I$I.apply(a, [k, r, 0, largest]);
a1=p$1.getToomSlice$I$I$I$I.apply(a, [k, r, 1, largest]);
a0=p$1.getToomSlice$I$I$I$I.apply(a, [k, r, 2, largest]);
b2=p$1.getToomSlice$I$I$I$I.apply(b, [k, r, 0, largest]);
b1=p$1.getToomSlice$I$I$I$I.apply(b, [k, r, 1, largest]);
b0=p$1.getToomSlice$I$I$I$I.apply(b, [k, r, 2, largest]);
var v0;
var v1;
var v2;
var vm1;
var vinf;
var t1;
var t2;
var tm1;
var da1;
var db1;
v0=a0.multiply$java_math_BigInteger(b0);
da1=a2.add$java_math_BigInteger(a0);
db1=b2.add$java_math_BigInteger(b0);
vm1=da1.subtract$java_math_BigInteger(a1).multiply$java_math_BigInteger(db1.subtract$java_math_BigInteger(b1));
da1=da1.add$java_math_BigInteger(a1);
db1=db1.add$java_math_BigInteger(b1);
v1=da1.multiply$java_math_BigInteger(db1);
v2=da1.add$java_math_BigInteger(a2).shiftLeft$I(1).subtract$java_math_BigInteger(a0).multiply$java_math_BigInteger(db1.add$java_math_BigInteger(b2).shiftLeft$I(1).subtract$java_math_BigInteger(b0));
vinf=a2.multiply$java_math_BigInteger(b2);
t2=p$1.exactDivideBy3.apply(v2.subtract$java_math_BigInteger(vm1), []);
tm1=v1.subtract$java_math_BigInteger(vm1).shiftRight$I(1);
t1=v1.subtract$java_math_BigInteger(v0);
t2=t2.subtract$java_math_BigInteger(t1).shiftRight$I(1);
t1=t1.subtract$java_math_BigInteger(tm1).subtract$java_math_BigInteger(vinf);
t2=t2.subtract$java_math_BigInteger(vinf.shiftLeft$I(1));
tm1=tm1.subtract$java_math_BigInteger(t2);
var ss=k * 32;
var result=vinf.shiftLeft$I(ss).add$java_math_BigInteger(t2).shiftLeft$I(ss).add$java_math_BigInteger(t1).shiftLeft$I(ss).add$java_math_BigInteger(tm1).shiftLeft$I(ss).add$java_math_BigInteger(v0);
if (a.signum != b.signum) {
return result.negate$();
} else {
return result;
}}, 1);

Clazz.newMeth(C$, 'getToomSlice$I$I$I$I',  function (lowerSize, upperSize, slice, fullsize) {
var start;
var end;
var sliceSize;
var len;
var offset;
len=this.mag.length;
offset=fullsize - len;
if (slice == 0) {
start=0 - offset;
end=upperSize - 1 - offset ;
} else {
start=upperSize + (slice - 1) * lowerSize - offset;
end=start + lowerSize - 1;
}if (start < 0) {
start=0;
}if (end < 0) {
return C$.ZERO;
}sliceSize=(end - start) + 1;
if (sliceSize <= 0) {
return C$.ZERO;
}if (start == 0 && sliceSize >= len ) {
return this.abs$();
}var intSlice=Clazz.array(Integer.TYPE, [sliceSize]);
System.arraycopy$O$I$O$I$I(this.mag, start, intSlice, 0, sliceSize);
return Clazz.new_(C$.c$$IA$I,[C$.trustedStripLeadingZeroInts$IA(intSlice), 1]);
}, p$1);

Clazz.newMeth(C$, 'exactDivideBy3',  function () {
var len=this.mag.length;
var result=Clazz.array(Integer.TYPE, [len]);
var x;
var w;
var q;
var borrow;
borrow=0;
for (var i=len - 1; i >= 0; i--) {
x=(Long.$and(this.mag[i],4294967295));
w=Long.$sub(x,borrow);
if (Long.$gt(borrow,x )) {
borrow=1;
} else {
borrow=0;
}q=Long.$and((Long.$mul(w,2863311531)),4294967295);
result[i]=Long.$ival(q);
if (Long.$ge(q,1431655766 )) {
(borrow=Long.$inc(borrow,1));
if (Long.$ge(q,2863311531 )) (borrow=Long.$inc(borrow,1));
}}
result=C$.trustedStripLeadingZeroInts$IA(result);
return Clazz.new_(C$.c$$IA$I,[result, this.signum]);
}, p$1);

Clazz.newMeth(C$, 'getLower$I',  function (n) {
var len=this.mag.length;
if (len <= n) {
return this.abs$();
}var lowerInts=Clazz.array(Integer.TYPE, [n]);
System.arraycopy$O$I$O$I$I(this.mag, len - n, lowerInts, 0, n);
return Clazz.new_(C$.c$$IA$I,[C$.trustedStripLeadingZeroInts$IA(lowerInts), 1]);
}, p$1);

Clazz.newMeth(C$, 'getUpper$I',  function (n) {
var len=this.mag.length;
if (len <= n) {
return C$.ZERO;
}var upperLen=len - n;
var upperInts=Clazz.array(Integer.TYPE, [upperLen]);
System.arraycopy$O$I$O$I$I(this.mag, 0, upperInts, 0, upperLen);
return Clazz.new_(C$.c$$IA$I,[C$.trustedStripLeadingZeroInts$IA(upperInts), 1]);
}, p$1);

Clazz.newMeth(C$, 'square',  function () {
if (this.signum == 0) {
return C$.ZERO;
}var len=this.mag.length;
if (len < 128) {
var z=C$.squareToLen$IA$I$IA(this.mag, len, null);
return Clazz.new_(C$.c$$IA$I,[C$.trustedStripLeadingZeroInts$IA(z), 1]);
} else {
if (len < 216) {
return p$1.squareKaratsuba.apply(this, []);
} else {
return p$1.squareToomCook3.apply(this, []);
}}}, p$1);

Clazz.newMeth(C$, 'squareToLen$IA$I$IA',  function (x, len, z) {
var zlen=len << 1;
if (z == null  || z.length < zlen ) z=Clazz.array(Integer.TYPE, [zlen]);
var lastProductLowWord=0;
for (var j=0, i=0; j < len; j++) {
var piece=(Long.$and(x[j],4294967295));
var product=Long.$mul(piece,piece);
z[i++]=(lastProductLowWord << 31) | Long.$ival((Long.$usr(product,33)));
z[i++]=Long.$ival((Long.$usr(product,1)));
lastProductLowWord=Long.$ival(product);
}
for (var i=len, offset=1; i > 0; i--, offset+=2) {
var t=x[i - 1];
t=C$.mulAdd$IA$IA$I$I$I(z, x, offset, i - 1, t);
C$.addOne$IA$I$I$I(z, offset - 1, i, t);
}
C$.primitiveLeftShift$IA$I$I(z, zlen, 1);
z[zlen - 1]|=x[len - 1] & 1;
return z;
}, 1);

Clazz.newMeth(C$, 'squareKaratsuba',  function () {
var half=((this.mag.length + 1)/2|0);
var xl=p$1.getLower$I.apply(this, [half]);
var xh=p$1.getUpper$I.apply(this, [half]);
var xhs=p$1.square.apply(xh, []);
var xls=p$1.square.apply(xl, []);
return xhs.shiftLeft$I(half * 32).add$java_math_BigInteger(p$1.square.apply(xl.add$java_math_BigInteger(xh), []).subtract$java_math_BigInteger(xhs.add$java_math_BigInteger(xls))).shiftLeft$I(half * 32).add$java_math_BigInteger(xls);
}, p$1);

Clazz.newMeth(C$, 'squareToomCook3',  function () {
var len=this.mag.length;
var k=((len + 2)/3|0);
var r=len - 2 * k;
var a0;
var a1;
var a2;
a2=p$1.getToomSlice$I$I$I$I.apply(this, [k, r, 0, len]);
a1=p$1.getToomSlice$I$I$I$I.apply(this, [k, r, 1, len]);
a0=p$1.getToomSlice$I$I$I$I.apply(this, [k, r, 2, len]);
var v0;
var v1;
var v2;
var vm1;
var vinf;
var t1;
var t2;
var tm1;
var da1;
v0=p$1.square.apply(a0, []);
da1=a2.add$java_math_BigInteger(a0);
vm1=p$1.square.apply(da1.subtract$java_math_BigInteger(a1), []);
da1=da1.add$java_math_BigInteger(a1);
v1=p$1.square.apply(da1, []);
vinf=p$1.square.apply(a2, []);
v2=p$1.square.apply(da1.add$java_math_BigInteger(a2).shiftLeft$I(1).subtract$java_math_BigInteger(a0), []);
t2=p$1.exactDivideBy3.apply(v2.subtract$java_math_BigInteger(vm1), []);
tm1=v1.subtract$java_math_BigInteger(vm1).shiftRight$I(1);
t1=v1.subtract$java_math_BigInteger(v0);
t2=t2.subtract$java_math_BigInteger(t1).shiftRight$I(1);
t1=t1.subtract$java_math_BigInteger(tm1).subtract$java_math_BigInteger(vinf);
t2=t2.subtract$java_math_BigInteger(vinf.shiftLeft$I(1));
tm1=tm1.subtract$java_math_BigInteger(t2);
var ss=k * 32;
return vinf.shiftLeft$I(ss).add$java_math_BigInteger(t2).shiftLeft$I(ss).add$java_math_BigInteger(t1).shiftLeft$I(ss).add$java_math_BigInteger(tm1).shiftLeft$I(ss).add$java_math_BigInteger(v0);
}, p$1);

Clazz.newMeth(C$, ['divide$java_math_BigInteger','div'],  function (val) {
if (val.mag.length < 80 || this.mag.length - val.mag.length < 40 ) {
return p$1.divideKnuth$java_math_BigInteger.apply(this, [val]);
} else {
return p$1.divideBurnikelZiegler$java_math_BigInteger.apply(this, [val]);
}});

Clazz.newMeth(C$, 'divideKnuth$java_math_BigInteger',  function (val) {
var q=Clazz.new_($I$(8,1));
var a=Clazz.new_($I$(8,1).c$$IA,[this.mag]);
var b=Clazz.new_($I$(8,1).c$$IA,[val.mag]);
a.divideKnuth$java_math_MutableBigInteger$java_math_MutableBigInteger$Z(b, q, false);
return q.toBigInteger$I(this.signum * val.signum);
}, p$1);

Clazz.newMeth(C$, 'divideAndRemainder$java_math_BigInteger',  function (val) {
if (val.mag.length < 80 || this.mag.length - val.mag.length < 40 ) {
return p$1.divideAndRemainderKnuth$java_math_BigInteger.apply(this, [val]);
} else {
return p$1.divideAndRemainderBurnikelZiegler$java_math_BigInteger.apply(this, [val]);
}});

Clazz.newMeth(C$, 'divideAndRemainderKnuth$java_math_BigInteger',  function (val) {
var result=Clazz.array(C$, [2]);
var q=Clazz.new_($I$(8,1));
var a=Clazz.new_($I$(8,1).c$$IA,[this.mag]);
var b=Clazz.new_($I$(8,1).c$$IA,[val.mag]);
var r=a.divideKnuth$java_math_MutableBigInteger$java_math_MutableBigInteger(b, q);
result[0]=q.toBigInteger$I(this.signum == val.signum ? 1 : -1);
result[1]=r.toBigInteger$I(this.signum);
return result;
}, p$1);

Clazz.newMeth(C$, 'remainder$java_math_BigInteger',  function (val) {
if (val.mag.length < 80 || this.mag.length - val.mag.length < 40 ) {
return p$1.remainderKnuth$java_math_BigInteger.apply(this, [val]);
} else {
return p$1.remainderBurnikelZiegler$java_math_BigInteger.apply(this, [val]);
}});

Clazz.newMeth(C$, 'remainderKnuth$java_math_BigInteger',  function (val) {
var q=Clazz.new_($I$(8,1));
var a=Clazz.new_($I$(8,1).c$$IA,[this.mag]);
var b=Clazz.new_($I$(8,1).c$$IA,[val.mag]);
return a.divideKnuth$java_math_MutableBigInteger$java_math_MutableBigInteger(b, q).toBigInteger$I(this.signum);
}, p$1);

Clazz.newMeth(C$, 'divideBurnikelZiegler$java_math_BigInteger',  function (val) {
return p$1.divideAndRemainderBurnikelZiegler$java_math_BigInteger.apply(this, [val])[0];
}, p$1);

Clazz.newMeth(C$, 'remainderBurnikelZiegler$java_math_BigInteger',  function (val) {
return p$1.divideAndRemainderBurnikelZiegler$java_math_BigInteger.apply(this, [val])[1];
}, p$1);

Clazz.newMeth(C$, 'divideAndRemainderBurnikelZiegler$java_math_BigInteger',  function (val) {
var q=Clazz.new_($I$(8,1));
var r=Clazz.new_($I$(8,1).c$$java_math_BigInteger,[this]).divideAndRemainderBurnikelZiegler$java_math_MutableBigInteger$java_math_MutableBigInteger(Clazz.new_($I$(8,1).c$$java_math_BigInteger,[val]), q);
var qBigInt=q.isZero$() ? C$.ZERO : q.toBigInteger$I(this.signum * val.signum);
var rBigInt=r.isZero$() ? C$.ZERO : r.toBigInteger$I(this.signum);
return Clazz.array(C$, -1, [qBigInt, rBigInt]);
}, p$1);

Clazz.newMeth(C$, 'pow$I',  function (exponent) {
if (exponent < 0) {
throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Negative exponent"]);
}if (this.signum == 0) {
return (exponent == 0 ? C$.ONE : this);
}var partToSquare=this.abs$();
var powersOfTwo=partToSquare.getLowestSetBit$();
var bitsToShift=Long.$mul(powersOfTwo,exponent);
if (Long.$gt(bitsToShift,2147483647 )) {
C$.reportOverflow$();
}var remainingBits;
if (powersOfTwo > 0) {
partToSquare=partToSquare.shiftRight$I(powersOfTwo);
remainingBits=partToSquare.bitLength$();
if (remainingBits == 1) {
if (this.signum < 0 && (exponent & 1) == 1 ) {
return C$.NEGATIVE_ONE.shiftLeft$I(powersOfTwo * exponent);
} else {
return C$.ONE.shiftLeft$I(powersOfTwo * exponent);
}}} else {
remainingBits=partToSquare.bitLength$();
if (remainingBits == 1) {
if (this.signum < 0 && (exponent & 1) == 1 ) {
return C$.NEGATIVE_ONE;
} else {
return C$.ONE;
}}}var scaleFactor=Long.$mul(remainingBits,exponent);
if (partToSquare.mag.length == 1 && Long.$le(scaleFactor,62 ) ) {
var newSign=(this.signum < 0 && (exponent & 1) == 1  ? -1 : 1);
var result=1;
var baseToPow2=Long.$and(partToSquare.mag[0],4294967295);
var workingExponent=exponent;
while (workingExponent != 0){
if ((workingExponent & 1) == 1) {
result=Long.$mul(result,baseToPow2);
}if ((workingExponent>>>=1) != 0) {
baseToPow2=Long.$mul(baseToPow2,baseToPow2);
}}
if (powersOfTwo > 0) {
if (Long.$le(Long.$add(bitsToShift,scaleFactor),62 )) {
return C$.valueOf$J(Long.$mul((Long.$sl(result,bitsToShift)),newSign));
} else {
return C$.valueOf$J(Long.$mul(result,newSign)).shiftLeft$I(Long.$ival(bitsToShift));
}} else {
return C$.valueOf$J(Long.$mul(result,newSign));
}} else {
var answer=C$.ONE;
var workingExponent=exponent;
while (workingExponent != 0){
if ((workingExponent & 1) == 1) {
answer=answer.multiply$java_math_BigInteger(partToSquare);
}if ((workingExponent>>>=1) != 0) {
partToSquare=p$1.square.apply(partToSquare, []);
}}
if (powersOfTwo > 0) {
answer=answer.shiftLeft$I(powersOfTwo * exponent);
}if (this.signum < 0 && (exponent & 1) == 1 ) {
return answer.negate$();
} else {
return answer;
}}});

Clazz.newMeth(C$, 'gcd$java_math_BigInteger',  function (val) {
if (val.signum == 0) return this.abs$();
 else if (this.signum == 0) return val.abs$();
var a=Clazz.new_($I$(8,1).c$$java_math_BigInteger,[this]);
var b=Clazz.new_($I$(8,1).c$$java_math_BigInteger,[val]);
var result=a.hybridGCD$java_math_MutableBigInteger(b);
return result.toBigInteger$I(1);
});

Clazz.newMeth(C$, 'bitLengthForInt$I',  function (n) {
return 32 - Integer.numberOfLeadingZeros$I(n);
}, 1);

Clazz.newMeth(C$, 'leftShift$IA$I$I',  function (a, len, n) {
var nInts=n >>> 5;
var nBits=n & 31;
var bitsInHighWord=C$.bitLengthForInt$I(a[0]);
if (n <= (32 - bitsInHighWord)) {
C$.primitiveLeftShift$IA$I$I(a, len, nBits);
return a;
} else {
if (nBits <= (32 - bitsInHighWord)) {
var result=Clazz.array(Integer.TYPE, [nInts + len]);
System.arraycopy$O$I$O$I$I(a, 0, result, 0, len);
C$.primitiveLeftShift$IA$I$I(result, result.length, nBits);
return result;
} else {
var result=Clazz.array(Integer.TYPE, [nInts + len + 1 ]);
System.arraycopy$O$I$O$I$I(a, 0, result, 0, len);
C$.primitiveRightShift$IA$I$I(result, result.length, 32 - nBits);
return result;
}}}, 1);

Clazz.newMeth(C$, 'primitiveRightShift$IA$I$I',  function (a, len, n) {
var n2=32 - n;
for (var i=len - 1, c=a[i]; i > 0; i--) {
var b=c;
c=a[i - 1];
a[i]=(c << n2) | (b >>> n);
}
a[0]>>>=n;
}, 1);

Clazz.newMeth(C$, 'primitiveLeftShift$IA$I$I',  function (a, len, n) {
if (len == 0 || n == 0 ) return;
var n2=32 - n;
for (var i=0, c=a[i], m=i + len - 1; i < m; i++) {
var b=c;
c=a[i + 1];
a[i]=(b << n) | (c >>> n2);
}
a[len - 1]<<=n;
}, 1);

Clazz.newMeth(C$, 'bitLength$IA$I',  function (val, len) {
if (len == 0) return 0;
return ((len - 1) << 5) + C$.bitLengthForInt$I(val[0]);
}, 1);

Clazz.newMeth(C$, 'abs$',  function () {
return (this.signum >= 0 ? this : this.negate$());
});

Clazz.newMeth(C$, 'negate$',  function () {
return Clazz.new_(C$.c$$IA$I,[this.mag, -this.signum]);
});

Clazz.newMeth(C$, 'signum$',  function () {
return this.signum;
});

Clazz.newMeth(C$, 'mod$java_math_BigInteger',  function (m) {
if (m.signum <= 0) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["BigInteger: modulus not positive"]);
var result=this.remainder$java_math_BigInteger(m);
return (result.signum >= 0 ? result : result.add$java_math_BigInteger(m));
});

Clazz.newMeth(C$, 'modPow$java_math_BigInteger$java_math_BigInteger',  function (exponent, m) {
if (m.signum <= 0) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["BigInteger: modulus not positive"]);
if (exponent.signum == 0) return (m.equals$O(C$.ONE) ? C$.ZERO : C$.ONE);
if (this.equals$O(C$.ONE)) return (m.equals$O(C$.ONE) ? C$.ZERO : C$.ONE);
if (this.equals$O(C$.ZERO) && exponent.signum >= 0 ) return C$.ZERO;
if (this.equals$O(C$.negConst[1]) && (!exponent.testBit$I(0)) ) return (m.equals$O(C$.ONE) ? C$.ZERO : C$.ONE);
var invertResult;
if ((invertResult=(exponent.signum < 0))) exponent=exponent.negate$();
var base=(this.signum < 0 || this.compareTo$java_math_BigInteger(m) >= 0  ? this.mod$java_math_BigInteger(m) : this);
var result;
if (m.testBit$I(0)) {
result=p$1.oddModPow$java_math_BigInteger$java_math_BigInteger.apply(base, [exponent, m]);
} else {
var p=m.getLowestSetBit$();
var m1=m.shiftRight$I(p);
var m2=C$.ONE.shiftLeft$I(p);
var base2=(this.signum < 0 || this.compareTo$java_math_BigInteger(m1) >= 0  ? this.mod$java_math_BigInteger(m1) : this);
var a1=(m1.equals$O(C$.ONE) ? C$.ZERO : p$1.oddModPow$java_math_BigInteger$java_math_BigInteger.apply(base2, [exponent, m1]));
var a2=p$1.modPow2$java_math_BigInteger$I.apply(base, [exponent, p]);
var y1=m2.modInverse$java_math_BigInteger(m1);
var y2=m1.modInverse$java_math_BigInteger(m2);
if (m.mag.length < 33554432) {
result=a1.multiply$java_math_BigInteger(m2).multiply$java_math_BigInteger(y1).add$java_math_BigInteger(a2.multiply$java_math_BigInteger(m1).multiply$java_math_BigInteger(y2)).mod$java_math_BigInteger(m);
} else {
var t1=Clazz.new_($I$(8,1));
Clazz.new_([a1.multiply$java_math_BigInteger(m2)],$I$(8,1).c$$java_math_BigInteger).multiply$java_math_MutableBigInteger$java_math_MutableBigInteger(Clazz.new_($I$(8,1).c$$java_math_BigInteger,[y1]), t1);
var t2=Clazz.new_($I$(8,1));
Clazz.new_([a2.multiply$java_math_BigInteger(m1)],$I$(8,1).c$$java_math_BigInteger).multiply$java_math_MutableBigInteger$java_math_MutableBigInteger(Clazz.new_($I$(8,1).c$$java_math_BigInteger,[y2]), t2);
t1.add$java_math_MutableBigInteger(t2);
var q=Clazz.new_($I$(8,1));
result=t1.divide$java_math_MutableBigInteger$java_math_MutableBigInteger(Clazz.new_($I$(8,1).c$$java_math_BigInteger,[m]), q).toBigInteger$();
}}return (invertResult ? result.modInverse$java_math_BigInteger(m) : result);
});

Clazz.newMeth(C$, 'oddModPow$java_math_BigInteger$java_math_BigInteger',  function (y, z) {
if (y.equals$O(C$.ONE)) return this;
if (this.signum == 0) return C$.ZERO;
var base=this.mag.clone$();
var exp=y.mag;
var mod=z.mag;
var modLen=mod.length;
var wbits=0;
var ebits=C$.bitLength$IA$I(exp, exp.length);
if ((ebits != 17) || (exp[0] != 65537) ) {
while (ebits > C$.bnExpModThreshTable[wbits]){
++wbits;
}
}var tblmask=1 << wbits;
var table=Clazz.array(Integer.TYPE, [tblmask, null]);
for (var i=0; i < tblmask; i++) table[i]=Clazz.array(Integer.TYPE, [modLen]);

var inv=-$I$(8).inverseMod32$I(mod[modLen - 1]);
var a=C$.leftShift$IA$I$I(base, base.length, modLen << 5);
var q=Clazz.new_($I$(8,1));
var a2=Clazz.new_($I$(8,1).c$$IA,[a]);
var b2=Clazz.new_($I$(8,1).c$$IA,[mod]);
var r=a2.divide$java_math_MutableBigInteger$java_math_MutableBigInteger(b2, q);
table[0]=r.toIntArray$();
if (table[0].length < modLen) {
var offset=modLen - table[0].length;
var t2=Clazz.array(Integer.TYPE, [modLen]);
for (var i=0; i < table[0].length; i++) t2[i + offset]=table[0][i];

table[0]=t2;
}var b=C$.squareToLen$IA$I$IA(table[0], modLen, null);
b=C$.montReduce$IA$IA$I$I(b, mod, modLen, inv);
var t=$I$(7).copyOf$IA$I(b, modLen);
for (var i=1; i < tblmask; i++) {
var prod=p$1.multiplyToLen$IA$I$IA$I$IA.apply(this, [t, modLen, table[i - 1], modLen, null]);
table[i]=C$.montReduce$IA$IA$I$I(prod, mod, modLen, inv);
}
var bitpos=1 << ((ebits - 1) & (31));
var buf=0;
var elen=exp.length;
var eIndex=0;
for (var i=0; i <= wbits; i++) {
buf=(buf << 1) | (((exp[eIndex] & bitpos) != 0) ? 1 : 0);
bitpos>>>=1;
if (bitpos == 0) {
++eIndex;
bitpos=-2147483648;
--elen;
}}
var multpos=ebits;
--ebits;
var isone=true;
multpos=ebits - wbits;
while ((buf & 1) == 0){
buf>>>=1;
++multpos;
}
var mult=table[buf >>> 1];
buf=0;
if (multpos == ebits) isone=false;
while (true){
--ebits;
buf<<=1;
if (elen != 0) {
buf|=((exp[eIndex] & bitpos) != 0) ? 1 : 0;
bitpos>>>=1;
if (bitpos == 0) {
++eIndex;
bitpos=-2147483648;
--elen;
}}if ((buf & tblmask) != 0) {
multpos=ebits - wbits;
while ((buf & 1) == 0){
buf>>>=1;
++multpos;
}
mult=table[buf >>> 1];
buf=0;
}if (ebits == multpos) {
if (isone) {
b=mult.clone$();
isone=false;
} else {
t=b;
a=p$1.multiplyToLen$IA$I$IA$I$IA.apply(this, [t, modLen, mult, modLen, a]);
a=C$.montReduce$IA$IA$I$I(a, mod, modLen, inv);
t=a;
a=b;
b=t;
}}if (ebits == 0) break;
if (!isone) {
t=b;
a=C$.squareToLen$IA$I$IA(t, modLen, a);
a=C$.montReduce$IA$IA$I$I(a, mod, modLen, inv);
t=a;
a=b;
b=t;
}}
var t2=Clazz.array(Integer.TYPE, [2 * modLen]);
System.arraycopy$O$I$O$I$I(b, 0, t2, modLen, modLen);
b=C$.montReduce$IA$IA$I$I(t2, mod, modLen, inv);
t2=$I$(7).copyOf$IA$I(b, modLen);
return Clazz.new_(C$.c$$I$IA,[1, t2]);
}, p$1);

Clazz.newMeth(C$, 'montReduce$IA$IA$I$I',  function (n, mod, mlen, inv) {
var c=0;
var len=mlen;
var offset=0;
do {
var nEnd=n[n.length - 1 - offset ];
var carry=C$.mulAdd$IA$IA$I$I$I(n, mod, offset, mlen, inv * nEnd);
c+=C$.addOne$IA$I$I$I(n, offset, mlen, carry);
++offset;
} while (--len > 0);
while (c > 0)c+=C$.subN$IA$IA$I(n, mod, mlen);

while (C$.intArrayCmpToLen$IA$IA$I(n, mod, mlen) >= 0)C$.subN$IA$IA$I(n, mod, mlen);

return n;
}, 1);

Clazz.newMeth(C$, 'intArrayCmpToLen$IA$IA$I',  function (arg1, arg2, len) {
for (var i=0; i < len; i++) {
var b1=Long.$and(arg1[i],4294967295);
var b2=Long.$and(arg2[i],4294967295);
if (Long.$lt(b1,b2 )) return -1;
if (Long.$gt(b1,b2 )) return 1;
}
return 0;
}, 1);

Clazz.newMeth(C$, 'subN$IA$IA$I',  function (a, b, len) {
var sum=0;
while (--len >= 0){
sum=Long.$add(Long.$sub((Long.$and(a[len],4294967295)),(Long.$and(b[len],4294967295))),(Long.$sr(sum,32)));
a[len]=Long.$ival(sum);
}
return Long.$ival((Long.$sr(sum,32)));
}, 1);

Clazz.newMeth(C$, 'mulAdd$IA$IA$I$I$I',  function (out, $in, offset, len, k) {
var kLong=Long.$and(k,4294967295);
var carry=0;
offset=out.length - offset - 1 ;
for (var j=len - 1; j >= 0; j--) {
var product=Long.$add(Long.$add(Long.$mul((Long.$and($in[j],4294967295)),kLong),(Long.$and(out[offset],4294967295))),carry);
out[offset--]=Long.$ival(product);
carry=Long.$usr(product,32);
}
return Long.$ival(carry);
}, 1);

Clazz.newMeth(C$, 'addOne$IA$I$I$I',  function (a, offset, mlen, carry) {
offset=a.length - 1 - mlen - offset ;
var t=Long.$add((Long.$and(a[offset],4294967295)),(Long.$and(carry,4294967295)));
a[offset]=Long.$ival(t);
if (Long.$eq((Long.$usr(t,32)),0 )) return 0;
while (--mlen >= 0){
if (--offset < 0) {
return 1;
} else {
++a[offset];
if (a[offset] != 0) return 0;
}}
return 1;
}, 1);

Clazz.newMeth(C$, 'modPow2$java_math_BigInteger$I',  function (exponent, p) {
var result=C$.ONE;
var baseToPow2=p$1.mod2$I.apply(this, [p]);
var expOffset=0;
var limit=exponent.bitLength$();
if (this.testBit$I(0)) limit=(p - 1) < limit ? (p - 1) : limit;
while (expOffset < limit){
if (exponent.testBit$I(expOffset)) result=p$1.mod2$I.apply(result.multiply$java_math_BigInteger(baseToPow2), [p]);
++expOffset;
if (expOffset < limit) baseToPow2=p$1.mod2$I.apply(p$1.square.apply(baseToPow2, []), [p]);
}
return result;
}, p$1);

Clazz.newMeth(C$, 'mod2$I',  function (p) {
if (this.bitLength$() <= p) return this;
var numInts=(p + 31) >>> 5;
var mag=Clazz.array(Integer.TYPE, [numInts]);
System.arraycopy$O$I$O$I$I(this.mag, (this.mag.length - numInts), mag, 0, numInts);
var excessBits=(numInts << 5) - p;
mag[0]=Long.$ival(Long.$and(mag[0],(Long.$sub((Long.$sl(1,(32 - excessBits))),1))));
return (mag[0] == 0 ? Clazz.new_(C$.c$$I$IA,[1, mag]) : Clazz.new_(C$.c$$IA$I,[mag, 1]));
}, p$1);

Clazz.newMeth(C$, 'modInverse$java_math_BigInteger',  function (m) {
if (m.signum != 1) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["BigInteger: modulus not positive"]);
if (m.equals$O(C$.ONE)) return C$.ZERO;
var modVal=this;
if (this.signum < 0 || (this.compareMagnitude$java_math_BigInteger(m) >= 0) ) modVal=this.mod$java_math_BigInteger(m);
if (modVal.equals$O(C$.ONE)) return C$.ONE;
var a=Clazz.new_($I$(8,1).c$$java_math_BigInteger,[modVal]);
var b=Clazz.new_($I$(8,1).c$$java_math_BigInteger,[m]);
var result=a.mutableModInverse$java_math_MutableBigInteger(b);
return result.toBigInteger$I(1);
});

Clazz.newMeth(C$, 'shiftLeft$I',  function (n) {
if (this.signum == 0) return C$.ZERO;
if (n > 0) {
return Clazz.new_(C$.c$$IA$I,[C$.shiftLeft$IA$I(this.mag, n), this.signum]);
} else if (n == 0) {
return this;
} else {
return p$1.shiftRightImpl$I.apply(this, [-n]);
}});

Clazz.newMeth(C$, 'shiftLeft$IA$I',  function (mag, n) {
var nInts=n >>> 5;
var nBits=n & 31;
var magLen=mag.length;
var newMag=null;
if (nBits == 0) {
newMag=Clazz.array(Integer.TYPE, [magLen + nInts]);
System.arraycopy$O$I$O$I$I(mag, 0, newMag, 0, magLen);
} else {
var i=0;
var nBits2=32 - nBits;
var highBits=mag[0] >>> nBits2;
if (highBits != 0) {
newMag=Clazz.array(Integer.TYPE, [magLen + nInts + 1 ]);
newMag[i++]=highBits;
} else {
newMag=Clazz.array(Integer.TYPE, [magLen + nInts]);
}var j=0;
while (j < magLen - 1)newMag[i++]=mag[j++] << nBits | mag[j] >>> nBits2;

newMag[i]=mag[j] << nBits;
}return newMag;
}, 1);

Clazz.newMeth(C$, 'shiftRight$I',  function (n) {
if (this.signum == 0) return C$.ZERO;
if (n > 0) {
return p$1.shiftRightImpl$I.apply(this, [n]);
} else if (n == 0) {
return this;
} else {
return Clazz.new_(C$.c$$IA$I,[C$.shiftLeft$IA$I(this.mag, -n), this.signum]);
}});

Clazz.newMeth(C$, 'shiftRightImpl$I',  function (n) {
var nInts=n >>> 5;
var nBits=n & 31;
var magLen=this.mag.length;
var newMag=null;
if (nInts >= magLen) return (this.signum >= 0 ? C$.ZERO : C$.negConst[1]);
if (nBits == 0) {
var newMagLen=magLen - nInts;
newMag=$I$(7).copyOf$IA$I(this.mag, newMagLen);
} else {
var i=0;
var highBits=this.mag[0] >>> nBits;
if (highBits != 0) {
newMag=Clazz.array(Integer.TYPE, [magLen - nInts]);
newMag[i++]=highBits;
} else {
newMag=Clazz.array(Integer.TYPE, [magLen - nInts - 1 ]);
}var nBits2=32 - nBits;
var j=0;
while (j < magLen - nInts - 1 )newMag[i++]=(this.mag[j++] << nBits2) | (this.mag[j] >>> nBits);

}if (this.signum < 0) {
var onesLost=false;
for (var i=magLen - 1, j=magLen - nInts; i >= j && !onesLost ; i--) onesLost=(this.mag[i] != 0);

if (!onesLost && nBits != 0 ) onesLost=(this.mag[magLen - nInts - 1 ] << (32 - nBits) != 0);
if (onesLost) newMag=this.javaIncrement$IA(newMag);
}return Clazz.new_(C$.c$$IA$I,[newMag, this.signum]);
}, p$1);

Clazz.newMeth(C$, 'javaIncrement$IA',  function (val) {
var lastSum=0;
for (var i=val.length - 1; i >= 0 && lastSum == 0 ; i--) lastSum=(val[i]+=1);

if (lastSum == 0) {
val=Clazz.array(Integer.TYPE, [val.length + 1]);
val[0]=1;
}return val;
});

Clazz.newMeth(C$, 'and$java_math_BigInteger',  function (val) {
var result=Clazz.array(Integer.TYPE, [Math.max(p$1.intLength.apply(this, []), p$1.intLength.apply(val, []))]);
for (var i=0; i < result.length; i++) result[i]=(p$1.getInt$I.apply(this, [result.length - i - 1 ]) & p$1.getInt$I.apply(val, [result.length - i - 1 ]));

return C$.valueOf$IA(result);
});

Clazz.newMeth(C$, 'or$java_math_BigInteger',  function (val) {
var result=Clazz.array(Integer.TYPE, [Math.max(p$1.intLength.apply(this, []), p$1.intLength.apply(val, []))]);
for (var i=0; i < result.length; i++) result[i]=(p$1.getInt$I.apply(this, [result.length - i - 1 ]) | p$1.getInt$I.apply(val, [result.length - i - 1 ]));

return C$.valueOf$IA(result);
});

Clazz.newMeth(C$, 'xor$java_math_BigInteger',  function (val) {
var result=Clazz.array(Integer.TYPE, [Math.max(p$1.intLength.apply(this, []), p$1.intLength.apply(val, []))]);
for (var i=0; i < result.length; i++) result[i]=(p$1.getInt$I.apply(this, [result.length - i - 1 ]) ^ p$1.getInt$I.apply(val, [result.length - i - 1 ]));

return C$.valueOf$IA(result);
});

Clazz.newMeth(C$, 'not$',  function () {
var result=Clazz.array(Integer.TYPE, [p$1.intLength.apply(this, [])]);
for (var i=0; i < result.length; i++) result[i]=~p$1.getInt$I.apply(this, [result.length - i - 1 ]);

return C$.valueOf$IA(result);
});

Clazz.newMeth(C$, 'andNot$java_math_BigInteger',  function (val) {
var result=Clazz.array(Integer.TYPE, [Math.max(p$1.intLength.apply(this, []), p$1.intLength.apply(val, []))]);
for (var i=0; i < result.length; i++) result[i]=(p$1.getInt$I.apply(this, [result.length - i - 1 ]) & ~p$1.getInt$I.apply(val, [result.length - i - 1 ]));

return C$.valueOf$IA(result);
});

Clazz.newMeth(C$, 'testBit$I',  function (n) {
if (n < 0) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Negative bit address"]);
return (p$1.getInt$I.apply(this, [n >>> 5]) & (1 << (n & 31))) != 0;
});

Clazz.newMeth(C$, 'setBit$I',  function (n) {
if (n < 0) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Negative bit address"]);
var intNum=n >>> 5;
var result=Clazz.array(Integer.TYPE, [Math.max(p$1.intLength.apply(this, []), intNum + 2)]);
for (var i=0; i < result.length; i++) result[result.length - i - 1 ]=p$1.getInt$I.apply(this, [i]);

result[result.length - intNum - 1 ]|=(1 << (n & 31));
return C$.valueOf$IA(result);
});

Clazz.newMeth(C$, 'clearBit$I',  function (n) {
if (n < 0) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Negative bit address"]);
var intNum=n >>> 5;
var result=Clazz.array(Integer.TYPE, [Math.max(p$1.intLength.apply(this, []), ((n + 1) >>> 5) + 1)]);
for (var i=0; i < result.length; i++) result[result.length - i - 1 ]=p$1.getInt$I.apply(this, [i]);

result[result.length - intNum - 1 ]&=~(1 << (n & 31));
return C$.valueOf$IA(result);
});

Clazz.newMeth(C$, 'flipBit$I',  function (n) {
if (n < 0) throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["Negative bit address"]);
var intNum=n >>> 5;
var result=Clazz.array(Integer.TYPE, [Math.max(p$1.intLength.apply(this, []), intNum + 2)]);
for (var i=0; i < result.length; i++) result[result.length - i - 1 ]=p$1.getInt$I.apply(this, [i]);

result[result.length - intNum - 1 ]^=(1 << (n & 31));
return C$.valueOf$IA(result);
});

Clazz.newMeth(C$, 'getLowestSetBit$',  function () {
var lsb=this.lowestSetBit - 2;
if (lsb == -2) {
lsb=0;
if (this.signum == 0) {
lsb-=1;
} else {
var i;
var b;
for (i=0; (b=p$1.getInt$I.apply(this, [i])) == 0; i++) ;
lsb+=(i << 5) + Integer.numberOfTrailingZeros$I(b);
}this.lowestSetBit=lsb + 2;
}return lsb;
});

Clazz.newMeth(C$, 'bitLength$',  function () {
var n=this.bitLength - 1;
if (n == -1) {
var m=this.mag;
var len=m.length;
if (len == 0) {
n=0;
} else {
var magBitLength=((len - 1) << 5) + C$.bitLengthForInt$I(this.mag[0]);
if (this.signum < 0) {
var pow2=(Integer.bitCount$I(this.mag[0]) == 1);
for (var i=1; i < len && pow2 ; i++) pow2=(this.mag[i] == 0);

n=(pow2 ? magBitLength - 1 : magBitLength);
} else {
n=magBitLength;
}}this.bitLength=n + 1;
}return n;
});

Clazz.newMeth(C$, 'bitCount$',  function () {
var bc=this.bitCount - 1;
if (bc == -1) {
bc=0;
for (var i=0; i < this.mag.length; i++) bc+=Integer.bitCount$I(this.mag[i]);

if (this.signum < 0) {
var magTrailingZeroCount=0;
var j;
for (j=this.mag.length - 1; this.mag[j] == 0; j--) magTrailingZeroCount+=32;

magTrailingZeroCount+=Integer.numberOfTrailingZeros$I(this.mag[j]);
bc+=magTrailingZeroCount - 1;
}this.bitCount=bc + 1;
}return bc;
});

Clazz.newMeth(C$, 'isProbablePrime$I',  function (certainty) {
if (certainty <= 0) return true;
var w=this.abs$();
if (w.equals$O(C$.TWO)) return true;
if (!w.testBit$I(0) || w.equals$O(C$.ONE) ) return false;
return w.primeToCertainty$I$java_util_Random(certainty, null);
});

Clazz.newMeth(C$, ['compareTo$java_math_BigInteger','compareTo$O'],  function (val) {
if (this.signum == val.signum) {
switch (this.signum) {
case 1:
return this.compareMagnitude$java_math_BigInteger(val);
case -1:
return val.compareMagnitude$java_math_BigInteger(this);
default:
return 0;
}
}return this.signum > val.signum ? 1 : -1;
});

Clazz.newMeth(C$, 'compareMagnitude$java_math_BigInteger',  function (val) {
var m1=this.mag;
var len1=m1.length;
var m2=val.mag;
var len2=m2.length;
if (len1 < len2) return -1;
if (len1 > len2) return 1;
for (var i=0; i < len1; i++) {
var a=m1[i];
var b=m2[i];
if (a != b) return (Long.$lt((Long.$and(a,4294967295)),(Long.$and(b,4294967295)) )) ? -1 : 1;
}
return 0;
});

Clazz.newMeth(C$, 'compareMagnitude$J',  function (val) {
var m1=this.mag;
var len=m1.length;
if (len > 2) {
return 1;
}if (Long.$lt(val,0 )) {
val=(Long.$neg(val));
}var highWord=Long.$ival((Long.$usr(val,32)));
if (highWord == 0) {
if (len < 1) return -1;
if (len > 1) return 1;
var a=m1[0];
var b=Long.$ival(val);
if (a != b) {
return (Long.$lt((Long.$and(a,4294967295)),(Long.$and(b,4294967295)) )) ? -1 : 1;
}return 0;
} else {
if (len < 2) return -1;
var a=m1[0];
var b=highWord;
if (a != b) {
return (Long.$lt((Long.$and(a,4294967295)),(Long.$and(b,4294967295)) )) ? -1 : 1;
}a=m1[1];
b=Long.$ival(val);
if (a != b) {
return (Long.$lt((Long.$and(a,4294967295)),(Long.$and(b,4294967295)) )) ? -1 : 1;
}return 0;
}});

Clazz.newMeth(C$, 'equals$O',  function (x) {
if (x === this ) return true;
if (!(Clazz.instanceOf(x, "java.math.BigInteger"))) return false;
var xInt=x;
if (xInt.signum != this.signum) return false;
var m=this.mag;
var len=m.length;
var xm=xInt.mag;
if (len != xm.length) return false;
for (var i=0; i < len; i++) if (xm[i] != m[i]) return false;

return true;
});

Clazz.newMeth(C$, 'min$java_math_BigInteger',  function (val) {
return (this.compareTo$java_math_BigInteger(val) < 0 ? this : val);
});

Clazz.newMeth(C$, 'max$java_math_BigInteger',  function (val) {
return (this.compareTo$java_math_BigInteger(val) > 0 ? this : val);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var hashCode=0;
for (var i=0; i < this.mag.length; i++) hashCode=Long.$ival((Long.$add(31 * hashCode,(Long.$and(this.mag[i],4294967295)))));

return hashCode * this.signum;
});

Clazz.newMeth(C$, 'toString$I',  function (radix) {
if (this.signum == 0) return "0";
if (radix < 2 || radix > 36 ) radix=10;
if (this.mag.length <= 20) return p$1.smallToString$I.apply(this, [radix]);
var sb=Clazz.new_($I$(9,1));
if (this.signum < 0) {
C$.toString$java_math_BigInteger$StringBuilder$I$I(this.negate$(), sb, radix, 0);
sb.insert$I$C(0, "-");
} else C$.toString$java_math_BigInteger$StringBuilder$I$I(this, sb, radix, 0);
return sb.toString();
});

Clazz.newMeth(C$, 'smallToString$I',  function (radix) {
if (this.signum == 0) {
return "0";
}var maxNumDigitGroups=((4 * this.mag.length + 6)/7|0);
var digitGroup=Clazz.array(String, [maxNumDigitGroups]);
var tmp=this.abs$();
var numGroups=0;
while (tmp.signum != 0){
var d=C$.longRadix[radix];
var q=Clazz.new_($I$(8,1));
var a=Clazz.new_($I$(8,1).c$$IA,[tmp.mag]);
var b=Clazz.new_($I$(8,1).c$$IA,[d.mag]);
var r=a.divide$java_math_MutableBigInteger$java_math_MutableBigInteger(b, q);
var q2=q.toBigInteger$I(tmp.signum * d.signum);
var r2=r.toBigInteger$I(tmp.signum * d.signum);
digitGroup[numGroups++]=Long.toString$J$I(r2.longValue$(), radix);
tmp=q2;
}
var buf=Clazz.new_($I$(9,1).c$$I,[numGroups * C$.digitsPerLong[radix] + 1]);
if (this.signum < 0) {
buf.append$C("-");
}buf.append$S(digitGroup[numGroups - 1]);
for (var i=numGroups - 2; i >= 0; i--) {
var numLeadingZeros=C$.digitsPerLong[radix] - digitGroup[i].length$();
if (numLeadingZeros != 0) {
buf.append$S(C$.zeros[numLeadingZeros]);
}buf.append$S(digitGroup[i]);
}
return buf.toString();
}, p$1);

Clazz.newMeth(C$, 'toString$java_math_BigInteger$StringBuilder$I$I',  function (u, sb, radix, digits) {
if (u.mag.length <= 20) {
var s=p$1.smallToString$I.apply(u, [radix]);
if ((s.length$() < digits) && (sb.length$() > 0) ) {
for (var i=s.length$(); i < digits; i++) {
sb.append$C("0");
}
}sb.append$S(s);
return;
}var b;
var n;
b=u.bitLength$();
n=Long.$ival(Math.round$D(Math.log(b * C$.LOG_TWO / C$.logCache[radix]) / C$.LOG_TWO - 1.0));
var v=C$.getRadixConversionCache$I$I(radix, n);
var results;
results=u.divideAndRemainder$java_math_BigInteger(v);
var expectedDigits=1 << n;
C$.toString$java_math_BigInteger$StringBuilder$I$I(results[0], sb, radix, digits - expectedDigits);
C$.toString$java_math_BigInteger$StringBuilder$I$I(results[1], sb, radix, expectedDigits);
}, 1);

Clazz.newMeth(C$, 'getRadixConversionCache$I$I',  function (radix, exponent) {
var cacheLine=C$.powerCache[radix];
if (exponent < cacheLine.length) {
return cacheLine[exponent];
}var oldLength=cacheLine.length;
cacheLine=$I$(7).copyOf$OA$I(cacheLine, exponent + 1);
for (var i=oldLength; i <= exponent; i++) {
cacheLine[i]=cacheLine[i - 1].pow$I(2);
}
var pc=C$.powerCache;
if (exponent >= pc[radix].length) {
pc=pc.clone$();
pc[radix]=cacheLine;
C$.powerCache=pc;
}return cacheLine[exponent];
}, 1);

Clazz.newMeth(C$, ['toString','valueOf'],  function () {
return this.toString$I(10);
});

Clazz.newMeth(C$, 'toByteArray$',  function () {
var byteLen=(this.bitLength$()/8|0) + 1;
var byteArray=Clazz.array(Byte.TYPE, [byteLen]);
for (var i=byteLen - 1, bytesCopied=4, nextInt=0, intIndex=0; i >= 0; i--) {
if (bytesCopied == 4) {
nextInt=p$1.getInt$I.apply(this, [intIndex++]);
bytesCopied=1;
} else {
nextInt>>>=8;
++bytesCopied;
}byteArray[i]=(nextInt|0);
}
return byteArray;
});

Clazz.newMeth(C$, 'intValue$',  function () {
var result=0;
result=p$1.getInt$I.apply(this, [0]);
return result;
});

Clazz.newMeth(C$, 'longValue$',  function () {
var result=0;
for (var i=1; i >= 0; i--) result=Long.$add((Long.$sl(result,32)),(Long.$and(p$1.getInt$I.apply(this, [i]),4294967295)));

return result;
});

Clazz.newMeth(C$, 'floatValue$',  function () {
if (this.signum == 0) {
return 0.0;
}var exponent=((this.mag.length - 1) << 5) + C$.bitLengthForInt$I(this.mag[0]) - 1;
if (exponent < 63) {
return Long.$fval(this.longValue$());
} else if (exponent > 127) {
return this.signum > 0 ? Infinity : -Infinity;
}var shift=exponent - 24;
var twiceSignifFloor;
var nBits=shift & 31;
var nBits2=32 - nBits;
if (nBits == 0) {
twiceSignifFloor=this.mag[0];
} else {
twiceSignifFloor=this.mag[0] >>> nBits;
if (twiceSignifFloor == 0) {
twiceSignifFloor=(this.mag[0] << nBits2) | (this.mag[1] >>> nBits);
}}var signifFloor=twiceSignifFloor >> 1;
signifFloor&=8388607;
var increment=(twiceSignifFloor & 1) != 0 && ((signifFloor & 1) != 0 || this.abs$().getLowestSetBit$() < shift ) ;
var signifRounded=increment ? signifFloor + 1 : signifFloor;
var bits=((exponent + 127)) << (23);
bits+=signifRounded;
bits|=this.signum & -2147483648;
return Float.intBitsToFloat$I(bits);
});

Clazz.newMeth(C$, 'doubleValue$',  function () {
if (this.signum == 0) {
return 0.0;
}var exponent=((this.mag.length - 1) << 5) + C$.bitLengthForInt$I(this.mag[0]) - 1;
if (exponent < 63) {
return Long.$dval(this.longValue$());
} else if (exponent > 1023) {
return this.signum > 0 ? Infinity : -Infinity;
}var shift=exponent - 53;
var twiceSignifFloor;
var nBits=shift & 31;
var nBits2=32 - nBits;
var highBits;
var lowBits;
if (nBits == 0) {
highBits=this.mag[0];
lowBits=this.mag[1];
} else {
highBits=this.mag[0] >>> nBits;
lowBits=(this.mag[0] << nBits2) | (this.mag[1] >>> nBits);
if (highBits == 0) {
highBits=lowBits;
lowBits=(this.mag[1] << nBits2) | (this.mag[2] >>> nBits);
}}twiceSignifFloor=Long.$or((Long.$sl((Long.$and(highBits,4294967295)),32)),(Long.$and(lowBits,4294967295)));
var signifFloor=Long.$sr(twiceSignifFloor,1);
(signifFloor=Long.$and(signifFloor,(4503599627370495)));
var increment=Long.$ne((Long.$and(twiceSignifFloor,1)),0 ) && (Long.$ne((Long.$and(signifFloor,1)),0 ) || this.abs$().getLowestSetBit$() < shift ) ;
var signifRounded=increment ? Long.$add(signifFloor,1) : signifFloor;
var bits=Long.$sl(((exponent + 1023)),(52));
(bits=Long.$add(bits,(signifRounded)));
(bits=Long.$or(bits,(Long.$and(this.signum,[0,549755813888,-1]))));
return Double.longBitsToDouble$J(bits);
});

Clazz.newMeth(C$, 'stripLeadingZeroInts$IA',  function (val) {
var vlen=val.length;
var keep;
for (keep=0; keep < vlen && val[keep] == 0 ; keep++) ;
return $I$(7).copyOfRange$IA$I$I(val, keep, vlen);
}, 1);

Clazz.newMeth(C$, 'trustedStripLeadingZeroInts$IA',  function (val) {
var vlen=val.length;
var keep;
for (keep=0; keep < vlen && val[keep] == 0 ; keep++) ;
return keep == 0 ? val : $I$(7).copyOfRange$IA$I$I(val, keep, vlen);
}, 1);

Clazz.newMeth(C$, 'stripLeadingZeroBytes$BA',  function (a) {
var byteLength=a.length;
var keep;
for (keep=0; keep < byteLength && a[keep] == 0 ; keep++) ;
var intLength=((byteLength - keep) + 3) >>> 2;
var result=Clazz.array(Integer.TYPE, [intLength]);
var b=byteLength - 1;
for (var i=intLength - 1; i >= 0; i--) {
result[i]=a[b--] & 255;
var bytesRemaining=b - keep + 1;
var bytesToTransfer=Math.min(3, bytesRemaining);
for (var j=8; j <= (bytesToTransfer << 3); j+=8) result[i]|=((a[b--] & 255) << j);

}
return result;
}, 1);

Clazz.newMeth(C$, 'makePositive$BA',  function (a) {
var keep;
var k;
var byteLength=a.length;
for (keep=0; keep < byteLength && a[keep] == -1 ; keep++) ;
for (k=keep; k < byteLength && a[k] == 0 ; k++) ;
var extraByte=(k == byteLength) ? 1 : 0;
var intLength=((byteLength - keep + extraByte) + 3) >>> 2;
var result=Clazz.array(Integer.TYPE, [intLength]);
var b=byteLength - 1;
for (var i=intLength - 1; i >= 0; i--) {
result[i]=a[b--] & 255;
var numBytesToTransfer=Math.min(3, b - keep + 1);
if (numBytesToTransfer < 0) numBytesToTransfer=0;
for (var j=8; j <= 8 * numBytesToTransfer; j+=8) result[i]|=((a[b--] & 255) << j);

var mask=-1 >>> (8 * (3 - numBytesToTransfer));
result[i]=~result[i] & mask;
}
for (var i=result.length - 1; i >= 0; i--) {
result[i]=Long.$ival((Long.$add((Long.$and(result[i],4294967295)),1)));
if (result[i] != 0) break;
}
return result;
}, 1);

Clazz.newMeth(C$, 'makePositive$IA',  function (a) {
var keep;
var j;
for (keep=0; keep < a.length && a[keep] == -1 ; keep++) ;
for (j=keep; j < a.length && a[j] == 0 ; j++) ;
var extraInt=(j == a.length ? 1 : 0);
var result=Clazz.array(Integer.TYPE, [a.length - keep + extraInt]);
for (var i=keep; i < a.length; i++) result[i - keep + extraInt]=~a[i];

for (var i=result.length - 1; ++result[i] == 0; i--) ;
return result;
}, 1);

Clazz.newMeth(C$, 'intLength',  function () {
return (this.bitLength$() >>> 5) + 1;
}, p$1);

Clazz.newMeth(C$, 'signInt',  function () {
return this.signum < 0 ? -1 : 0;
}, p$1);

Clazz.newMeth(C$, 'getInt$I',  function (n) {
if (n < 0) return 0;
if (n >= this.mag.length) return p$1.signInt.apply(this, []);
var magInt=this.mag[this.mag.length - n - 1 ];
return (this.signum >= 0 ? magInt : (n <= p$1.firstNonzeroIntNum.apply(this, []) ? -magInt : ~magInt));
}, p$1);

Clazz.newMeth(C$, 'firstNonzeroIntNum',  function () {
var fn=this.firstNonzeroIntNum - 2;
if (fn == -2) {
fn=0;
var i;
var mlen=this.mag.length;
for (i=mlen - 1; i >= 0 && this.mag[i] == 0 ; i--) ;
fn=mlen - i - 1 ;
this.firstNonzeroIntNum=fn + 2;
}return fn;
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
var fields=s.readFields$();
var sign=fields.get$S$I("signum", -2);
var magnitude=fields.get$S$O("magnitude", null);
if (sign < -1 || sign > 1 ) {
var message="BigInteger: Invalid signum value";
if (fields.defaulted$S("signum")) message="BigInteger: Signum not present in stream";
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,[message]);
}var mag=C$.stripLeadingZeroBytes$BA(magnitude);
if ((mag.length == 0) != (sign == 0) ) {
var message="BigInteger: signum-magnitude mismatch";
if (fields.defaulted$S("magnitude")) message="BigInteger: Magnitude not present in stream";
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,[message]);
}$I$(10).putSign$java_math_BigInteger$I(this, sign);
$I$(10).putMag$java_math_BigInteger$IA(this, mag);
if (mag.length >= 67108864) {
try {
p$1.checkRange.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"ArithmeticException")){
throw Clazz.new_(Clazz.load('java.io.StreamCorruptedException').c$$S,["BigInteger: Out of the supported range"]);
} else {
throw e;
}
}
}}, p$1);

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (s) {
var fields=s.putFields$();
fields.put$S$I("signum", this.signum);
fields.put$S$O("magnitude", p$1.magSerializedForm.apply(this, []));
fields.put$S$I("bitCount", -1);
fields.put$S$I("bitLength", -1);
fields.put$S$I("lowestSetBit", -2);
fields.put$S$I("firstNonzeroByteNum", -2);
s.writeFields$();
}, p$1);

Clazz.newMeth(C$, 'magSerializedForm',  function () {
var len=this.mag.length;
var bitLen=(len == 0 ? 0 : ((len - 1) << 5) + C$.bitLengthForInt$I(this.mag[0]));
var byteLen=(bitLen + 7) >>> 3;
var result=Clazz.array(Byte.TYPE, [byteLen]);
for (var i=byteLen - 1, bytesCopied=4, intIndex=len - 1, nextInt=0; i >= 0; i--) {
if (bytesCopied == 4) {
nextInt=this.mag[intIndex--];
bytesCopied=1;
} else {
nextInt>>>=8;
++bytesCopied;
}result[i]=(nextInt|0);
}
return result;
}, p$1);

Clazz.newMeth(C$, 'longValueExact$',  function () {
if (this.mag.length <= 2 && this.bitLength$() <= 63 ) return this.longValue$();
 else throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["BigInteger out of long range"]);
});

Clazz.newMeth(C$, 'intValueExact$',  function () {
if (this.mag.length <= 1 && this.bitLength$() <= 31 ) return this.intValue$();
 else throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["BigInteger out of int range"]);
});

Clazz.newMeth(C$, 'shortValueExact$',  function () {
if (this.mag.length <= 1 && this.bitLength$() <= 31 ) {
var value=this.intValue$();
if (value >= -32768 && value <= 32767 ) return this.shortValue$();
}throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["BigInteger out of short range"]);
});

Clazz.newMeth(C$, 'byteValueExact$',  function () {
if (this.mag.length <= 1 && this.bitLength$() <= 31 ) {
var value=this.intValue$();
if (value >= -128 && value <= 127 ) return this.byteValue$();
}throw Clazz.new_(Clazz.load('ArithmeticException').c$$S,["BigInteger out of byte range"]);
});

C$.$static$=function(){C$.$static$=0;
{
};
C$.bitsPerDigit=Clazz.array(Long.TYPE, -1, [0, 0, 1024, 1624, 2048, 2378, 2648, 2875, 3072, 3247, 3402, 3543, 3672, 3790, 3899, 4001, 4096, 4186, 4271, 4350, 4426, 4498, 4567, 4633, 4696, 4756, 4814, 4870, 4923, 4975, 5025, 5074, 5120, 5166, 5210, 5253, 5295]);
C$.SMALL_PRIME_PRODUCT=C$.valueOf$J(152125131763605);
C$.posConst=Clazz.array(C$, [17]);
C$.negConst=Clazz.array(C$, [17]);
C$.LOG_TWO=Math.log(2.0);
{
for (var i=1; i <= 16; i++) {
var magnitude=Clazz.array(Integer.TYPE, [1]);
magnitude[0]=i;
C$.posConst[i]=Clazz.new_(C$.c$$IA$I,[magnitude, 1]);
C$.negConst[i]=Clazz.new_(C$.c$$IA$I,[magnitude, -1]);
}
C$.powerCache=Clazz.array(C$, [37, null]);
C$.logCache=Clazz.array(Double.TYPE, [37]);
for (var i=2; i <= 36; i++) {
C$.powerCache[i]=Clazz.array(C$, -1, [C$.valueOf$J(i)]);
C$.logCache[i]=Math.log(i);
}
};
C$.ZERO=Clazz.new_(C$.c$$IA$I,[Clazz.array(Integer.TYPE, [0]), 0]);
C$.ONE=C$.valueOf$J(1);
C$.TWO=C$.valueOf$J(2);
C$.NEGATIVE_ONE=C$.valueOf$J(-1);
C$.TEN=C$.valueOf$J(10);
C$.bnExpModThreshTable=Clazz.array(Integer.TYPE, -1, [7, 25, 81, 241, 673, 1793, 2147483647]);
C$.zeros=Clazz.array(String, [64]);
{
C$.zeros[63]="000000000000000000000000000000000000000000000000000000000000000";
for (var i=0; i < 63; i++) C$.zeros[i]=C$.zeros[63].substring$I$I(0, i);

};
C$.digitsPerLong=Clazz.array(Integer.TYPE, -1, [0, 0, 62, 39, 31, 27, 24, 22, 20, 19, 18, 18, 17, 17, 16, 16, 15, 15, 15, 14, 14, 14, 14, 13, 13, 13, 13, 13, 13, 12, 12, 12, 12, 12, 12, 12, 12]);
C$.longRadix=Clazz.array(C$, -1, [null, null, C$.valueOf$J([0,274877906944,1]), C$.valueOf$J([6289419,241551110328,1]), C$.valueOf$J([0,274877906944,1]), C$.valueOf$J([1050525,444089209850,1]), C$.valueOf$J([0,282429536481,1]), C$.valueOf$J([2253073,233043494736,1]), C$.valueOf$J([0,68719476736,1]), C$.valueOf$J([2096473,80517036776,1]), C$.valueOf$J([6553600,59604644775,1]), C$.valueOf$J([4171065,331396896451,1]), C$.valueOf$J([0,132239526912,1]), C$.valueOf$J([1824589,515604968034,1]), C$.valueOf$J([8454144,129816135037,1]), C$.valueOf$J([16348929,391507646781,1]), C$.valueOf$J([0,68719476736,1]), C$.valueOf$J([2218481,170613709182,1]), C$.valueOf$J([6062080,402131117372,1]), C$.valueOf$J([4210457,47624509679,1]), C$.valueOf$J([0,97656250000,1]), C$.valueOf$J([12644169,193352695257,1]), C$.valueOf$J([10633216,370849446858,1]), C$.valueOf$J([1734071,30042908307,1]), C$.valueOf$J([0,52242776064,1]), C$.valueOf$J([210105,88817841970,1]), C$.valueOf$J([12558336,147888235640,1]), C$.valueOf$J([6289419,241551110328,1]), C$.valueOf$J([0,387556041628,1]), C$.valueOf$J([4090737,21089004469,1]), C$.valueOf$J([1314816,31676352024,1]), C$.valueOf$J([8586881,46948360430,1]), C$.valueOf$J([0,68719476736,1]), C$.valueOf$J([6228353,99413962063,1]), C$.valueOf$J([2887680,142241757136,1]), C$.valueOf$J([7232625,201417238000,1]), C$.valueOf$J([0,282429536481,1])]);
C$.digitsPerInt=Clazz.array(Integer.TYPE, -1, [0, 0, 30, 19, 15, 13, 11, 11, 10, 9, 9, 8, 8, 8, 8, 7, 7, 7, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 5]);
C$.intRadix=Clazz.array(Integer.TYPE, -1, [0, 0, 1073741824, 1162261467, 1073741824, 1220703125, 362797056, 1977326743, 1073741824, 387420489, 1000000000, 214358881, 429981696, 815730721, 1475789056, 170859375, 268435456, 410338673, 612220032, 893871739, 1280000000, 1801088541, 113379904, 148035889, 191102976, 244140625, 308915776, 387420489, 481890304, 594823321, 729000000, 887503681, 1073741824, 1291467969, 1544804416, 1838265625, 60466176]);
C$.serialPersistentFields=Clazz.array($I$(4), -1, [Clazz.new_($I$(4,1).c$$S$Class,["signum", Integer.TYPE]), Clazz.new_(["magnitude", Clazz.array(Byte.TYPE, -1)],$I$(4,1).c$$S$Class), Clazz.new_($I$(4,1).c$$S$Class,["bitCount", Integer.TYPE]), Clazz.new_($I$(4,1).c$$S$Class,["bitLength", Integer.TYPE]), Clazz.new_($I$(4,1).c$$S$Class,["firstNonzeroByteNum", Integer.TYPE]), Clazz.new_($I$(4,1).c$$S$Class,["lowestSetBit", Integer.TYPE])]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.BigInteger, "UnsafeHolder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['J',['signumOffset','magOffset'],'O',['unsafe','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'putSign$java_math_BigInteger$I',  function (bi, sign) {
C$.unsafe.putIntVolatile$O$J$I(bi, C$.signumOffset, sign);
}, 1);

Clazz.newMeth(C$, 'putMag$java_math_BigInteger$IA',  function (bi, magnitude) {
C$.unsafe.putObjectVolatile$O$J$O(bi, C$.magOffset, magnitude);
}, 1);

C$.$static$=function(){C$.$static$=0;
{
try {
C$.unsafe=$I$(1).getUnsafe$();
C$.signumOffset=C$.unsafe.objectFieldOffset$java_lang_reflect_Field(Clazz.getClass($I$(2)).getDeclaredField$S("signum"));
C$.magOffset=C$.unsafe.objectFieldOffset$java_lang_reflect_Field(Clazz.getClass($I$(2)).getDeclaredField$S("mag"));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
throw Clazz.new_($I$(3,1).c$$Throwable,[ex]);
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
