(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'java.util.concurrent.ThreadLocalRandom','java.util.concurrent.atomic.AtomicInteger','java.util.concurrent.atomic.AtomicLong','java.io.ObjectStreamField','sun.misc.Unsafe','Thread','Error','java.security.SecureRandom','StrictMath','java.util.stream.StreamSupport',['java.util.concurrent.ThreadLocalRandom','.RandomIntsSpliterator'],['java.util.concurrent.ThreadLocalRandom','.RandomLongsSpliterator'],['java.util.concurrent.ThreadLocalRandom','.RandomDoublesSpliterator']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ThreadLocalRandom", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.Random');
C$.$classes$=[['RandomIntsSpliterator',24],['RandomLongsSpliterator',24],['RandomDoublesSpliterator',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['initialized']]
,['J',['SEED','PROBE','SECONDARY'],'O',['probeGenerator','java.util.concurrent.atomic.AtomicInteger','seeder','java.util.concurrent.atomic.AtomicLong','nextLocalGaussian','Double','instance','java.util.concurrent.ThreadLocalRandom','serialPersistentFields','java.io.ObjectStreamField[]','UNSAFE','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'initialSeed$',  function () {
var pp=(System.getProperty$S("java.util.secureRandomSeed"));
if (pp != null  && pp.equalsIgnoreCase$S("true") ) {
var seedBytes=$I$(8).getSeed$I(8);
var s=Long.$and((seedBytes[0]),255);
for (var i=1; i < 8; ++i) s=Long.$or((Long.$sl(s,8)),(Long.$and((seedBytes[i]),255)));

return s;
}return (Long.$xor(C$.mix64$J(System.currentTimeMillis$()),C$.mix64$J(System.nanoTime$())));
}, 1);

Clazz.newMeth(C$, 'mix64$J',  function (z) {
return C$.mix32$J(z);
}, 1);

Clazz.newMeth(C$, 'mix32$J',  function (z) {
z=Long.$mul((Long.$xor(z,(Long.$usr(z,33)))),[11170611,2924488722,-1]);
return Long.$ival((Long.$usr((Long.$mul((Long.$xor(z,(Long.$usr(z,33)))),[8000429,254229742053,-1])),32)));
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.initialized=true;
}, 1);

Clazz.newMeth(C$, 'localInit$',  function () {
var p=C$.probeGenerator.addAndGet$I(-1640531527);
var probe=(p == 0) ? 1 : p;
var seed=C$.mix64$J(C$.seeder.getAndAdd$J([3496133,294613252731,-1]));
var t=$I$(6).currentThread$();
C$.UNSAFE.putLong$O$J$J(t, C$.SEED, seed);
C$.UNSAFE.putInt$O$J$I(t, C$.PROBE, probe);
}, 1);

Clazz.newMeth(C$, 'current$',  function () {
if (C$.UNSAFE.getInt$O$J($I$(6).currentThread$(), C$.PROBE) == 0) C$.localInit$();
return C$.instance;
}, 1);

Clazz.newMeth(C$, 'setSeed$J',  function (seed) {
if (this.initialized) throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'nextSeed$',  function () {
var t;
var r;
C$.UNSAFE.putLong$O$J$J(t=$I$(6).currentThread$(), C$.SEED, r=Long.$add(C$.UNSAFE.getLong$O$J(t, C$.SEED),[11895787,419976070784,-1]));
return r;
});

Clazz.newMeth(C$, 'next$I',  function (bits) {
return Long.$ival((Long.$usr(C$.mix64$J(this.nextSeed$()),(64 - bits))));
});

Clazz.newMeth(C$, 'internalNextLong$J$J',  function (origin, bound) {
var r=C$.mix64$J(this.nextSeed$());
if (Long.$lt(origin,bound )) {
var n=Long.$sub(bound,origin);
var m=Long.$sub(n,1);
if (Long.$eq((Long.$and(n,m)),0 )) r=Long.$add((Long.$and(r,m)),origin);
 else if (Long.$gt(n,0 )) {
for (var u=Long.$usr(r,1); Long.$lt(Long.$sub(Long.$add(u,m),(r=Long.$mod(u,n))),0 ); u=Long.$usr(C$.mix64$J(this.nextSeed$()),1)) ;
(r=Long.$add(r,(origin)));
} else {
while (Long.$lt(r,origin ) || Long.$ge(r,bound ) )r=C$.mix64$J(this.nextSeed$());

}}return r;
});

Clazz.newMeth(C$, 'internalNextInt$I$I',  function (origin, bound) {
var r=C$.mix32$J(this.nextSeed$());
if (origin < bound) {
var n=bound - origin;
var m=n - 1;
if ((n & m) == 0) r=(r & m) + origin;
 else if (n > 0) {
for (var u=r >>> 1; u + m - (r=u % n) < 0; u=C$.mix32$J(this.nextSeed$()) >>> 1) ;
r+=origin;
} else {
while (r < origin || r >= bound )r=C$.mix32$J(this.nextSeed$());

}}return r;
});

Clazz.newMeth(C$, 'internalNextDouble$D$D',  function (origin, bound) {
var r=(Long.$usr(this.nextLong$(),11)) * 1.1102230246251565E-16;
if (origin < bound ) {
r=r * (bound - origin) + origin;
if (r >= bound ) r=Double.longBitsToDouble$J(Long.$sub(Double.doubleToLongBits$D(bound),1));
}return r;
});

Clazz.newMeth(C$, 'nextInt$',  function () {
return C$.mix32$J(this.nextSeed$());
});

Clazz.newMeth(C$, 'nextInt$I',  function (bound) {
if (bound <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be positive"]);
var r=C$.mix32$J(this.nextSeed$());
var m=bound - 1;
if ((bound & m) == 0) r&=m;
 else {
for (var u=r >>> 1; u + m - (r=u % bound) < 0; u=C$.mix32$J(this.nextSeed$()) >>> 1) ;
}return r;
});

Clazz.newMeth(C$, 'nextInt$I$I',  function (origin, bound) {
if (origin >= bound) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return this.internalNextInt$I$I(origin, bound);
});

Clazz.newMeth(C$, 'nextLong$',  function () {
return C$.mix64$J(this.nextSeed$());
});

Clazz.newMeth(C$, 'nextLong$J',  function (bound) {
if (Long.$le(bound,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be positive"]);
var r=C$.mix64$J(this.nextSeed$());
var m=Long.$sub(bound,1);
if (Long.$eq((Long.$and(bound,m)),0 )) (r=Long.$and(r,(m)));
 else {
for (var u=Long.$usr(r,1); Long.$lt(Long.$sub(Long.$add(u,m),(r=Long.$mod(u,bound))),0 ); u=Long.$usr(C$.mix64$J(this.nextSeed$()),1)) ;
}return r;
});

Clazz.newMeth(C$, 'nextLong$J$J',  function (origin, bound) {
if (Long.$ge(origin,bound )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return this.internalNextLong$J$J(origin, bound);
});

Clazz.newMeth(C$, 'nextDouble$',  function () {
return (Long.$usr(C$.mix64$J(this.nextSeed$()),11)) * 1.1102230246251565E-16;
});

Clazz.newMeth(C$, 'nextDouble$D',  function (bound) {
if (!(bound > 0.0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be positive"]);
var result=(Long.$usr(C$.mix64$J(this.nextSeed$()),11)) * 1.1102230246251565E-16 * bound ;
return (result < bound ) ? result : Double.longBitsToDouble$J(Long.$sub(Double.doubleToLongBits$D(bound),1));
});

Clazz.newMeth(C$, 'nextDouble$D$D',  function (origin, bound) {
if (!(origin < bound )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return this.internalNextDouble$D$D(origin, bound);
});

Clazz.newMeth(C$, 'nextBoolean$',  function () {
return C$.mix32$J(this.nextSeed$()) < 0;
});

Clazz.newMeth(C$, 'nextFloat$',  function () {
return (C$.mix32$J(this.nextSeed$()) >>> 8) * 5.9604645E-8;
});

Clazz.newMeth(C$, 'nextGaussian$',  function () {
var d=C$.nextLocalGaussian;
if (d != null ) {
C$.nextLocalGaussian=(null);
return d.doubleValue$();
}var v1;
var v2;
var s;
do {
v1=2 * this.nextDouble$() - 1;
v2=2 * this.nextDouble$() - 1;
s=v1 * v1 + v2 * v2;
} while (s >= 1  || s == 0  );
var multiplier=$I$(9,"sqrt$D",[-2 * $I$(9).log$D(s) / s]);
C$.nextLocalGaussian=( new Double(v2 * multiplier));
return v1 * multiplier;
});

Clazz.newMeth(C$, 'ints$J',  function (streamSize) {
if (Long.$lt(streamSize,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
return $I$(10,"intStream$java_util_Spliterator_OfInt$Z",[Clazz.new_($I$(11,1).c$$J$J$I$I,[0, streamSize, 2147483647, 0]), false]);
});

Clazz.newMeth(C$, 'ints$',  function () {
return $I$(10,"intStream$java_util_Spliterator_OfInt$Z",[Clazz.new_($I$(11,1).c$$J$J$I$I,[0, [16777215,549755813887,1], 2147483647, 0]), false]);
});

Clazz.newMeth(C$, 'ints$J$I$I',  function (streamSize, randomNumberOrigin, randomNumberBound) {
if (Long.$lt(streamSize,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
if (randomNumberOrigin >= randomNumberBound) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(10,"intStream$java_util_Spliterator_OfInt$Z",[Clazz.new_($I$(11,1).c$$J$J$I$I,[0, streamSize, randomNumberOrigin, randomNumberBound]), false]);
});

Clazz.newMeth(C$, 'ints$I$I',  function (randomNumberOrigin, randomNumberBound) {
if (randomNumberOrigin >= randomNumberBound) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(10,"intStream$java_util_Spliterator_OfInt$Z",[Clazz.new_($I$(11,1).c$$J$J$I$I,[0, [16777215,549755813887,1], randomNumberOrigin, randomNumberBound]), false]);
});

Clazz.newMeth(C$, 'longs$J',  function (streamSize) {
if (Long.$lt(streamSize,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
return $I$(10,"longStream$java_util_Spliterator_OfLong$Z",[Clazz.new_($I$(12,1).c$$J$J$J$J,[0, streamSize, [16777215,549755813887,1], 0]), false]);
});

Clazz.newMeth(C$, 'longs$',  function () {
return $I$(10,"longStream$java_util_Spliterator_OfLong$Z",[Clazz.new_($I$(12,1).c$$J$J$J$J,[0, [16777215,549755813887,1], [16777215,549755813887,1], 0]), false]);
});

Clazz.newMeth(C$, 'longs$J$J$J',  function (streamSize, randomNumberOrigin, randomNumberBound) {
if (Long.$lt(streamSize,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
if (Long.$ge(randomNumberOrigin,randomNumberBound )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(10,"longStream$java_util_Spliterator_OfLong$Z",[Clazz.new_($I$(12,1).c$$J$J$J$J,[0, streamSize, randomNumberOrigin, randomNumberBound]), false]);
});

Clazz.newMeth(C$, 'longs$J$J',  function (randomNumberOrigin, randomNumberBound) {
if (Long.$ge(randomNumberOrigin,randomNumberBound )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(10,"longStream$java_util_Spliterator_OfLong$Z",[Clazz.new_($I$(12,1).c$$J$J$J$J,[0, [16777215,549755813887,1], randomNumberOrigin, randomNumberBound]), false]);
});

Clazz.newMeth(C$, 'doubles$J',  function (streamSize) {
if (Long.$lt(streamSize,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
return $I$(10,"doubleStream$java_util_Spliterator_OfDouble$Z",[Clazz.new_($I$(13,1).c$$J$J$D$D,[0, streamSize, 1.7976931348623157E308, 0.0]), false]);
});

Clazz.newMeth(C$, 'doubles$',  function () {
return $I$(10,"doubleStream$java_util_Spliterator_OfDouble$Z",[Clazz.new_($I$(13,1).c$$J$J$D$D,[0, [16777215,549755813887,1], 1.7976931348623157E308, 0.0]), false]);
});

Clazz.newMeth(C$, 'doubles$J$D$D',  function (streamSize, randomNumberOrigin, randomNumberBound) {
if (Long.$lt(streamSize,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
if (!(randomNumberOrigin < randomNumberBound )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(10,"doubleStream$java_util_Spliterator_OfDouble$Z",[Clazz.new_($I$(13,1).c$$J$J$D$D,[0, streamSize, randomNumberOrigin, randomNumberBound]), false]);
});

Clazz.newMeth(C$, 'doubles$D$D',  function (randomNumberOrigin, randomNumberBound) {
if (!(randomNumberOrigin < randomNumberBound )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(10,"doubleStream$java_util_Spliterator_OfDouble$Z",[Clazz.new_($I$(13,1).c$$J$J$D$D,[0, [16777215,549755813887,1], randomNumberOrigin, randomNumberBound]), false]);
});

Clazz.newMeth(C$, 'getProbe$',  function () {
return C$.UNSAFE.getInt$O$J($I$(6).currentThread$(), C$.PROBE);
}, 1);

Clazz.newMeth(C$, 'advanceProbe$I',  function (probe) {
probe^=probe << 13;
probe^=probe >>> 17;
probe^=probe << 5;
C$.UNSAFE.putInt$O$J$I($I$(6).currentThread$(), C$.PROBE, probe);
return probe;
}, 1);

Clazz.newMeth(C$, 'nextSecondarySeed$',  function () {
var r;
var t=$I$(6).currentThread$();
if ((r=C$.UNSAFE.getInt$O$J(t, C$.SECONDARY)) != 0) {
r^=r << 13;
r^=r >>> 17;
r^=r << 5;
} else {
C$.localInit$();
if ((r=Long.$ival(C$.UNSAFE.getLong$O$J(t, C$.SEED))) == 0) r=1;
}C$.UNSAFE.putInt$O$J$I(t, C$.SECONDARY, r);
return r;
}, 1);

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (s) {
var fields=s.putFields$();
fields.put$S$J("rnd", C$.UNSAFE.getLong$O$J($I$(6).currentThread$(), C$.SEED));
fields.put$S$Z("initialized", true);
s.writeFields$();
}, p$1);

Clazz.newMeth(C$, 'readResolve',  function () {
return C$.current$();
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.probeGenerator=Clazz.new_($I$(2,1));
C$.seeder=Clazz.new_([C$.initialSeed$()],$I$(3,1).c$$J);
C$.instance=Clazz.new_(C$);
C$.serialPersistentFields=Clazz.array($I$(4), -1, [Clazz.new_($I$(4,1).c$$S$Class,["rnd", Long.TYPE]), Clazz.new_($I$(4,1).c$$S$Class,["initialized", Boolean.TYPE])]);
{
try {
C$.UNSAFE=$I$(5).getUnsafe$();
var tk=Clazz.getClass($I$(6));
C$.SEED=C$.UNSAFE.objectFieldOffset$java_lang_reflect_Field(tk.getDeclaredField$S("threadLocalRandomSeed"));
C$.PROBE=C$.UNSAFE.objectFieldOffset$java_lang_reflect_Field(tk.getDeclaredField$S("threadLocalRandomProbe"));
C$.SECONDARY=C$.UNSAFE.objectFieldOffset$java_lang_reflect_Field(tk.getDeclaredField$S("threadLocalRandomSecondarySeed"));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_($I$(7,1).c$$Throwable,[e]);
} else {
throw e;
}
}
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ThreadLocalRandom, "RandomIntsSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfInt']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['origin','bound'],'J',['index','fence']]]

Clazz.newMeth(C$, 'c$$J$J$I$I',  function (index, fence, origin, bound) {
;C$.$init$.apply(this);
this.index=index;
this.fence=fence;
this.origin=origin;
this.bound=bound;
}, 1);

Clazz.newMeth(C$, 'trySplit$',  function () {
var i=this.index;
var m=Long.$usr((Long.$add(i,this.fence)),1);
return (Long.$le(m,i )) ? null : Clazz.new_(C$.c$$J$J$I$I,[i, this.index=m, this.origin, this.bound]);
});

Clazz.newMeth(C$, 'estimateSize$',  function () {
return Long.$sub(this.fence,this.index);
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return (17728);
});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_IntConsumer','tryAdvance$O'],  function (consumer) {
if (consumer == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var i=this.index;
var f=this.fence;
if (Long.$lt(i,f )) {
consumer.accept$I($I$(1).current$().internalNextInt$I$I(this.origin, this.bound));
this.index=Long.$add(i,1);
return true;
}return false;
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_IntConsumer','forEachRemaining$O'],  function (consumer) {
if (consumer == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var i=this.index;
var f=this.fence;
if (Long.$lt(i,f )) {
this.index=f;
var o=this.origin;
var b=this.bound;
var rng=$I$(1).current$();
do {
consumer.accept$I(rng.internalNextInt$I$I(o, b));
} while (Long.$lt((i=Long.$inc(i,1)),f ));
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ThreadLocalRandom, "RandomLongsSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfLong']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['index','fence','origin','bound']]]

Clazz.newMeth(C$, 'c$$J$J$J$J',  function (index, fence, origin, bound) {
;C$.$init$.apply(this);
this.index=index;
this.fence=fence;
this.origin=origin;
this.bound=bound;
}, 1);

Clazz.newMeth(C$, 'trySplit$',  function () {
var i=this.index;
var m=Long.$usr((Long.$add(i,this.fence)),1);
return (Long.$le(m,i )) ? null : Clazz.new_(C$.c$$J$J$J$J,[i, this.index=m, this.origin, this.bound]);
});

Clazz.newMeth(C$, 'estimateSize$',  function () {
return Long.$sub(this.fence,this.index);
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return (17728);
});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_LongConsumer','tryAdvance$O'],  function (consumer) {
if (consumer == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var i=this.index;
var f=this.fence;
if (Long.$lt(i,f )) {
consumer.accept$J($I$(1).current$().internalNextLong$J$J(this.origin, this.bound));
this.index=Long.$add(i,1);
return true;
}return false;
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_LongConsumer','forEachRemaining$O'],  function (consumer) {
if (consumer == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var i=this.index;
var f=this.fence;
if (Long.$lt(i,f )) {
this.index=f;
var o=this.origin;
var b=this.bound;
var rng=$I$(1).current$();
do {
consumer.accept$J(rng.internalNextLong$J$J(o, b));
} while (Long.$lt((i=Long.$inc(i,1)),f ));
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ThreadLocalRandom, "RandomDoublesSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfDouble']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['origin','bound'],'J',['index','fence']]]

Clazz.newMeth(C$, 'c$$J$J$D$D',  function (index, fence, origin, bound) {
;C$.$init$.apply(this);
this.index=index;
this.fence=fence;
this.origin=origin;
this.bound=bound;
}, 1);

Clazz.newMeth(C$, 'trySplit$',  function () {
var i=this.index;
var m=Long.$usr((Long.$add(i,this.fence)),1);
return (Long.$le(m,i )) ? null : Clazz.new_(C$.c$$J$J$D$D,[i, this.index=m, this.origin, this.bound]);
});

Clazz.newMeth(C$, 'estimateSize$',  function () {
return Long.$sub(this.fence,this.index);
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return (17728);
});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_DoubleConsumer','tryAdvance$O'],  function (consumer) {
if (consumer == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var i=this.index;
var f=this.fence;
if (Long.$lt(i,f )) {
consumer.accept$D($I$(1).current$().internalNextDouble$D$D(this.origin, this.bound));
this.index=Long.$add(i,1);
return true;
}return false;
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_DoubleConsumer','forEachRemaining$O'],  function (consumer) {
if (consumer == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var i=this.index;
var f=this.fence;
if (Long.$lt(i,f )) {
this.index=f;
var o=this.origin;
var b=this.bound;
var rng=$I$(1).current$();
do {
consumer.accept$D(rng.internalNextDouble$D$D(o, b));
} while (Long.$lt((i=Long.$inc(i,1)),f ));
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
