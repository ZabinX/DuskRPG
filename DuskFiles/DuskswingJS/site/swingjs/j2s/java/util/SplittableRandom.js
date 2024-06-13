(function(){var P$=java.util,p$1={},I$=[[0,'java.util.concurrent.atomic.AtomicLong','java.util.stream.StreamSupport',['java.util.SplittableRandom','.RandomIntsSpliterator'],['java.util.SplittableRandom','.RandomLongsSpliterator'],['java.util.SplittableRandom','.RandomDoublesSpliterator']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SplittableRandom", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['RandomIntsSpliterator',24],['RandomLongsSpliterator',24],['RandomDoublesSpliterator',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['seed','gamma']]
,['O',['defaultGen','java.util.concurrent.atomic.AtomicLong']]]

Clazz.newMeth(C$, 'c$$J$J',  function (seed, gamma) {
;C$.$init$.apply(this);
this.seed=seed;
this.gamma=gamma;
}, 1);

Clazz.newMeth(C$, 'mix64$J',  function (z) {
z=Long.$mul((Long.$xor(z,(Long.$usr(z,30)))),[1776199,277691798243,-1]);
z=Long.$mul((Long.$xor(z,(Long.$usr(z,27)))),[13561365,460361975020,-1]);
return Long.$xor(z,(Long.$usr(z,31)));
}, 1);

Clazz.newMeth(C$, 'mix32$J',  function (z) {
z=Long.$mul((Long.$xor(z,(Long.$usr(z,33)))),[9897461,423756426617,1]);
return Long.$ival((Long.$usr((Long.$mul((Long.$xor(z,(Long.$usr(z,28)))),[7588429,227015612983,-1])),32)));
}, 1);

Clazz.newMeth(C$, 'mixGamma$J',  function (z) {
z=Long.$mul((Long.$xor(z,(Long.$usr(z,33)))),[11170611,2924488722,-1]);
z=Long.$mul((Long.$xor(z,(Long.$usr(z,33)))),[8000429,254229742053,-1]);
z=Long.$or((Long.$xor(z,(Long.$usr(z,33)))),1);
var n=Long.bitCount$J(Long.$xor(z,(Long.$usr(z,1))));
return (n < 24) ? Long.$xor(z,[5592406,366503875925,-1]) : z;
}, 1);

Clazz.newMeth(C$, 'nextSeed',  function () {
return (this.seed=Long.$add(this.seed,(this.gamma)));
}, p$1);

Clazz.newMeth(C$, 'initialSeed$',  function () {
return (Long.$xor(C$.mix64$J(System.currentTimeMillis$()),C$.mix64$J(System.nanoTime$())));
}, 1);

Clazz.newMeth(C$, 'internalNextLong$J$J',  function (origin, bound) {
var r=C$.mix64$J(p$1.nextSeed.apply(this, []));
if (Long.$lt(origin,bound )) {
var n=Long.$sub(bound,origin);
var m=Long.$sub(n,1);
if (Long.$eq((Long.$and(n,m)),0 )) r=Long.$add((Long.$and(r,m)),origin);
 else if (Long.$gt(n,0 )) {
for (var u=Long.$usr(r,1); Long.$lt(Long.$sub(Long.$add(u,m),(r=Long.$mod(u,n))),0 ); u=Long.$usr(C$.mix64$J(p$1.nextSeed.apply(this, [])),1)) ;
(r=Long.$add(r,(origin)));
} else {
while (Long.$lt(r,origin ) || Long.$ge(r,bound ) )r=C$.mix64$J(p$1.nextSeed.apply(this, []));

}}return r;
});

Clazz.newMeth(C$, 'internalNextInt$I$I',  function (origin, bound) {
var r=C$.mix32$J(p$1.nextSeed.apply(this, []));
if (origin < bound) {
var n=bound - origin;
var m=n - 1;
if ((n & m) == 0) r=(r & m) + origin;
 else if (n > 0) {
for (var u=r >>> 1; u + m - (r=u % n) < 0; u=C$.mix32$J(p$1.nextSeed.apply(this, [])) >>> 1) ;
r+=origin;
} else {
while (r < origin || r >= bound )r=C$.mix32$J(p$1.nextSeed.apply(this, []));

}}return r;
});

Clazz.newMeth(C$, 'internalNextDouble$D$D',  function (origin, bound) {
var r=(Long.$usr(this.nextLong$(),11)) * 1.1102230246251565E-16;
if (origin < bound ) {
r=r * (bound - origin) + origin;
if (r >= bound ) r=Double.longBitsToDouble$J(Long.$sub(Double.doubleToLongBits$D(bound),1));
}return r;
});

Clazz.newMeth(C$, 'c$$J',  function (seed) {
C$.c$$J$J.apply(this, [seed, [11895787,419976070784,-1]]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
var s=C$.defaultGen.getAndAdd$J([9762858,259559486206,1]);
this.seed=C$.mix64$J(s);
this.gamma=C$.mixGamma$J(Long.$add(s,[11895787,419976070784,-1]));
}, 1);

Clazz.newMeth(C$, 'split$',  function () {
return Clazz.new_(C$.c$$J$J,[this.nextLong$(), C$.mixGamma$J(p$1.nextSeed.apply(this, []))]);
});

Clazz.newMeth(C$, 'nextInt$',  function () {
return C$.mix32$J(p$1.nextSeed.apply(this, []));
});

Clazz.newMeth(C$, 'nextInt$I',  function (bound) {
if (bound <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be positive"]);
var r=C$.mix32$J(p$1.nextSeed.apply(this, []));
var m=bound - 1;
if ((bound & m) == 0) r&=m;
 else {
for (var u=r >>> 1; u + m - (r=u % bound) < 0; u=C$.mix32$J(p$1.nextSeed.apply(this, [])) >>> 1) ;
}return r;
});

Clazz.newMeth(C$, 'nextInt$I$I',  function (origin, bound) {
if (origin >= bound) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return this.internalNextInt$I$I(origin, bound);
});

Clazz.newMeth(C$, 'nextLong$',  function () {
return C$.mix64$J(p$1.nextSeed.apply(this, []));
});

Clazz.newMeth(C$, 'nextLong$J',  function (bound) {
if (Long.$le(bound,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be positive"]);
var r=C$.mix64$J(p$1.nextSeed.apply(this, []));
var m=Long.$sub(bound,1);
if (Long.$eq((Long.$and(bound,m)),0 )) (r=Long.$and(r,(m)));
 else {
for (var u=Long.$usr(r,1); Long.$lt(Long.$sub(Long.$add(u,m),(r=Long.$mod(u,bound))),0 ); u=Long.$usr(C$.mix64$J(p$1.nextSeed.apply(this, [])),1)) ;
}return r;
});

Clazz.newMeth(C$, 'nextLong$J$J',  function (origin, bound) {
if (Long.$ge(origin,bound )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return this.internalNextLong$J$J(origin, bound);
});

Clazz.newMeth(C$, 'nextDouble$',  function () {
return (Long.$usr(C$.mix64$J(p$1.nextSeed.apply(this, [])),11)) * 1.1102230246251565E-16;
});

Clazz.newMeth(C$, 'nextDouble$D',  function (bound) {
if (!(bound > 0.0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be positive"]);
var result=(Long.$usr(C$.mix64$J(p$1.nextSeed.apply(this, [])),11)) * 1.1102230246251565E-16 * bound ;
return (result < bound ) ? result : Double.longBitsToDouble$J(Long.$sub(Double.doubleToLongBits$D(bound),1));
});

Clazz.newMeth(C$, 'nextDouble$D$D',  function (origin, bound) {
if (!(origin < bound )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return this.internalNextDouble$D$D(origin, bound);
});

Clazz.newMeth(C$, 'nextBoolean$',  function () {
return C$.mix32$J(p$1.nextSeed.apply(this, [])) < 0;
});

Clazz.newMeth(C$, 'ints$J',  function (streamSize) {
if (Long.$lt(streamSize,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
return $I$(2,"intStream$java_util_Spliterator_OfInt$Z",[Clazz.new_($I$(3,1).c$$java_util_SplittableRandom$J$J$I$I,[this, 0, streamSize, 2147483647, 0]), false]);
});

Clazz.newMeth(C$, 'ints$',  function () {
return $I$(2,"intStream$java_util_Spliterator_OfInt$Z",[Clazz.new_($I$(3,1).c$$java_util_SplittableRandom$J$J$I$I,[this, 0, [16777215,549755813887,1], 2147483647, 0]), false]);
});

Clazz.newMeth(C$, 'ints$J$I$I',  function (streamSize, randomNumberOrigin, randomNumberBound) {
if (Long.$lt(streamSize,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
if (randomNumberOrigin >= randomNumberBound) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(2,"intStream$java_util_Spliterator_OfInt$Z",[Clazz.new_($I$(3,1).c$$java_util_SplittableRandom$J$J$I$I,[this, 0, streamSize, randomNumberOrigin, randomNumberBound]), false]);
});

Clazz.newMeth(C$, 'ints$I$I',  function (randomNumberOrigin, randomNumberBound) {
if (randomNumberOrigin >= randomNumberBound) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(2,"intStream$java_util_Spliterator_OfInt$Z",[Clazz.new_($I$(3,1).c$$java_util_SplittableRandom$J$J$I$I,[this, 0, [16777215,549755813887,1], randomNumberOrigin, randomNumberBound]), false]);
});

Clazz.newMeth(C$, 'longs$J',  function (streamSize) {
if (Long.$lt(streamSize,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
return $I$(2,"longStream$java_util_Spliterator_OfLong$Z",[Clazz.new_($I$(4,1).c$$java_util_SplittableRandom$J$J$J$J,[this, 0, streamSize, [16777215,549755813887,1], 0]), false]);
});

Clazz.newMeth(C$, 'longs$',  function () {
return $I$(2,"longStream$java_util_Spliterator_OfLong$Z",[Clazz.new_($I$(4,1).c$$java_util_SplittableRandom$J$J$J$J,[this, 0, [16777215,549755813887,1], [16777215,549755813887,1], 0]), false]);
});

Clazz.newMeth(C$, 'longs$J$J$J',  function (streamSize, randomNumberOrigin, randomNumberBound) {
if (Long.$lt(streamSize,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
if (Long.$ge(randomNumberOrigin,randomNumberBound )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(2,"longStream$java_util_Spliterator_OfLong$Z",[Clazz.new_($I$(4,1).c$$java_util_SplittableRandom$J$J$J$J,[this, 0, streamSize, randomNumberOrigin, randomNumberBound]), false]);
});

Clazz.newMeth(C$, 'longs$J$J',  function (randomNumberOrigin, randomNumberBound) {
if (Long.$ge(randomNumberOrigin,randomNumberBound )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(2,"longStream$java_util_Spliterator_OfLong$Z",[Clazz.new_($I$(4,1).c$$java_util_SplittableRandom$J$J$J$J,[this, 0, [16777215,549755813887,1], randomNumberOrigin, randomNumberBound]), false]);
});

Clazz.newMeth(C$, 'doubles$J',  function (streamSize) {
if (Long.$lt(streamSize,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
return $I$(2,"doubleStream$java_util_Spliterator_OfDouble$Z",[Clazz.new_($I$(5,1).c$$java_util_SplittableRandom$J$J$D$D,[this, 0, streamSize, 1.7976931348623157E308, 0.0]), false]);
});

Clazz.newMeth(C$, 'doubles$',  function () {
return $I$(2,"doubleStream$java_util_Spliterator_OfDouble$Z",[Clazz.new_($I$(5,1).c$$java_util_SplittableRandom$J$J$D$D,[this, 0, [16777215,549755813887,1], 1.7976931348623157E308, 0.0]), false]);
});

Clazz.newMeth(C$, 'doubles$J$D$D',  function (streamSize, randomNumberOrigin, randomNumberBound) {
if (Long.$lt(streamSize,0 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["size must be non-negative"]);
if (!(randomNumberOrigin < randomNumberBound )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(2,"doubleStream$java_util_Spliterator_OfDouble$Z",[Clazz.new_($I$(5,1).c$$java_util_SplittableRandom$J$J$D$D,[this, 0, streamSize, randomNumberOrigin, randomNumberBound]), false]);
});

Clazz.newMeth(C$, 'doubles$D$D',  function (randomNumberOrigin, randomNumberBound) {
if (!(randomNumberOrigin < randomNumberBound )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bound must be greater than origin"]);
return $I$(2,"doubleStream$java_util_Spliterator_OfDouble$Z",[Clazz.new_($I$(5,1).c$$java_util_SplittableRandom$J$J$D$D,[this, 0, [16777215,549755813887,1], randomNumberOrigin, randomNumberBound]), false]);
});

C$.$static$=function(){C$.$static$=0;
C$.defaultGen=Clazz.new_([C$.initialSeed$()],$I$(1,1).c$$J);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.SplittableRandom, "RandomIntsSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfInt']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['origin','bound'],'J',['index','fence'],'O',['rng','java.util.SplittableRandom']]]

Clazz.newMeth(C$, 'c$$java_util_SplittableRandom$J$J$I$I',  function (rng, index, fence, origin, bound) {
;C$.$init$.apply(this);
this.rng=rng;
this.index=index;
this.fence=fence;
this.origin=origin;
this.bound=bound;
}, 1);

Clazz.newMeth(C$, 'trySplit$',  function () {
var i=this.index;
var m=Long.$usr((Long.$add(i,this.fence)),1);
return (Long.$le(m,i )) ? null : Clazz.new_(C$.c$$java_util_SplittableRandom$J$J$I$I,[this.rng.split$(), i, this.index=m, this.origin, this.bound]);
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
consumer.accept$I(this.rng.internalNextInt$I$I(this.origin, this.bound));
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
var r=this.rng;
var o=this.origin;
var b=this.bound;
do {
consumer.accept$I(r.internalNextInt$I$I(o, b));
} while (Long.$lt((i=Long.$inc(i,1)),f ));
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SplittableRandom, "RandomLongsSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfLong']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['index','fence','origin','bound'],'O',['rng','java.util.SplittableRandom']]]

Clazz.newMeth(C$, 'c$$java_util_SplittableRandom$J$J$J$J',  function (rng, index, fence, origin, bound) {
;C$.$init$.apply(this);
this.rng=rng;
this.index=index;
this.fence=fence;
this.origin=origin;
this.bound=bound;
}, 1);

Clazz.newMeth(C$, 'trySplit$',  function () {
var i=this.index;
var m=Long.$usr((Long.$add(i,this.fence)),1);
return (Long.$le(m,i )) ? null : Clazz.new_(C$.c$$java_util_SplittableRandom$J$J$J$J,[this.rng.split$(), i, this.index=m, this.origin, this.bound]);
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
consumer.accept$J(this.rng.internalNextLong$J$J(this.origin, this.bound));
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
var r=this.rng;
var o=this.origin;
var b=this.bound;
do {
consumer.accept$J(r.internalNextLong$J$J(o, b));
} while (Long.$lt((i=Long.$inc(i,1)),f ));
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SplittableRandom, "RandomDoublesSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfDouble']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['origin','bound'],'J',['index','fence'],'O',['rng','java.util.SplittableRandom']]]

Clazz.newMeth(C$, 'c$$java_util_SplittableRandom$J$J$D$D',  function (rng, index, fence, origin, bound) {
;C$.$init$.apply(this);
this.rng=rng;
this.index=index;
this.fence=fence;
this.origin=origin;
this.bound=bound;
}, 1);

Clazz.newMeth(C$, 'trySplit$',  function () {
var i=this.index;
var m=Long.$usr((Long.$add(i,this.fence)),1);
return (Long.$le(m,i )) ? null : Clazz.new_(C$.c$$java_util_SplittableRandom$J$J$D$D,[this.rng.split$(), i, this.index=m, this.origin, this.bound]);
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
consumer.accept$D(this.rng.internalNextDouble$D$D(this.origin, this.bound));
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
var r=this.rng;
var o=this.origin;
var b=this.bound;
do {
consumer.accept$D(r.internalNextDouble$D$D(o, b));
} while (Long.$lt((i=Long.$inc(i,1)),f ));
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
