(function(){var P$=Clazz.newPackage("java.math"),p$1={},I$=[[0,'java.math.MutableBigInteger','java.math.BigInteger']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BitSieve");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['length'],'O',['bits','long[]']]
,['O',['smallSieve','java.math.BitSieve']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.length=9600;
this.bits=Clazz.array(Long.TYPE, [(C$.unitIndex$I(this.length - 1) + 1)]);
p$1.set$I.apply(this, [0]);
var nextIndex=1;
var nextPrime=3;
do {
p$1.sieveSingle$I$I$I.apply(this, [this.length, nextIndex + nextPrime, nextPrime]);
nextIndex=p$1.sieveSearch$I$I.apply(this, [this.length, nextIndex + 1]);
nextPrime=2 * nextIndex + 1;
} while ((nextIndex > 0) && (nextPrime < this.length) );
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigInteger$I',  function (base, searchLen) {
;C$.$init$.apply(this);
this.bits=Clazz.array(Long.TYPE, [(C$.unitIndex$I(searchLen - 1) + 1)]);
this.length=searchLen;
var start=0;
var step=p$1.sieveSearch$I$I.apply(C$.smallSieve, [C$.smallSieve.length, start]);
var convertedStep=(step * 2) + 1;
var b=Clazz.new_($I$(1,1).c$$java_math_BigInteger,[base]);
var q=Clazz.new_($I$(1,1));
do {
start=b.divideOneWord$I$java_math_MutableBigInteger(convertedStep, q);
start=convertedStep - start;
if (start % 2 == 0) start+=convertedStep;
p$1.sieveSingle$I$I$I.apply(this, [searchLen, ((start - 1)/2|0), convertedStep]);
step=p$1.sieveSearch$I$I.apply(C$.smallSieve, [C$.smallSieve.length, step + 1]);
convertedStep=(step * 2) + 1;
} while (step > 0);
}, 1);

Clazz.newMeth(C$, 'unitIndex$I',  function (bitIndex) {
return bitIndex >>> 6;
}, 1);

Clazz.newMeth(C$, 'bit$I',  function (bitIndex) {
return Long.$sl(1,(bitIndex & (63)));
}, 1);

Clazz.newMeth(C$, 'get$I',  function (bitIndex) {
var unitIndex=C$.unitIndex$I(bitIndex);
return (Long.$ne((Long.$and(this.bits[unitIndex],C$.bit$I(bitIndex))),0 ));
}, p$1);

Clazz.newMeth(C$, 'set$I',  function (bitIndex) {
var unitIndex=C$.unitIndex$I(bitIndex);
(this.bits[$k$=unitIndex]=Long.$or(this.bits[$k$],(C$.bit$I(bitIndex))));
}, p$1);

Clazz.newMeth(C$, 'sieveSearch$I$I',  function (limit, start) {
if (start >= limit) return -1;
var index=start;
do {
if (!p$1.get$I.apply(this, [index])) return index;
++index;
} while (index < limit - 1);
return -1;
}, p$1);

Clazz.newMeth(C$, 'sieveSingle$I$I$I',  function (limit, start, step) {
while (start < limit){
p$1.set$I.apply(this, [start]);
start+=step;
}
}, p$1);

Clazz.newMeth(C$, 'retrieve$java_math_BigInteger$I$java_util_Random',  function (initValue, certainty, random) {
var offset=1;
for (var i=0; i < this.bits.length; i++) {
var nextLong=(Long.$not(this.bits[i]));
for (var j=0; j < 64; j++) {
if (Long.$eq((Long.$and(nextLong,1)),1 )) {
var candidate=initValue.add$java_math_BigInteger($I$(2).valueOf$J(offset));
if (candidate.primeToCertainty$I$java_util_Random(certainty, random)) return candidate;
}(nextLong=Long.$usr(nextLong,(1)));
offset+=2;
}
}
return null;
});

C$.$static$=function(){C$.$static$=0;
C$.smallSieve=Clazz.new_(C$);
};
var $k$;
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:18 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
