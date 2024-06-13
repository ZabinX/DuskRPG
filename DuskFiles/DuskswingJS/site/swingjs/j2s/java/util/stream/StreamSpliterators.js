(function(){var P$=Clazz.newPackage("java.util.stream"),p$1={},p$2={},I$=[[0,'java.util.stream.StreamOpFlag','java.util.stream.SpinedBuffer','java.util.Objects',['java.util.stream.SpinedBuffer','.OfInt'],['java.util.stream.SpinedBuffer','.OfLong'],['java.util.stream.SpinedBuffer','.OfDouble'],['java.util.stream.StreamSpliterators','.UnorderedSliceSpliterator','.PermitStatus'],['java.util.stream.StreamSpliterators','.ArrayBuffer','.OfRef'],['java.util.stream.StreamSpliterators','.ArrayBuffer','.OfInt'],['java.util.stream.StreamSpliterators','.ArrayBuffer','.OfLong'],['java.util.stream.StreamSpliterators','.ArrayBuffer','.OfDouble'],'java.util.concurrent.atomic.AtomicLong','java.util.concurrent.ConcurrentHashMap']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StreamSpliterators", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['AbstractWrappingSpliterator',1034],['WrappingSpliterator',24],['IntWrappingSpliterator',24],['LongWrappingSpliterator',24],['DoubleWrappingSpliterator',24],['DelegatingSpliterator',8],['SliceSpliterator',1032],['UnorderedSliceSpliterator',1032],['DistinctSpliterator',24],['InfiniteSupplyingSpliterator',1032],['ArrayBuffer',1032]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators, "AbstractWrappingSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Spliterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isParallel','finished'],'J',['nextToConsume'],'O',['ph','java.util.stream.PipelineHelper','spliteratorSupplier','java.util.function.Supplier','spliterator','java.util.Spliterator','bufferSink','java.util.stream.Sink','pusher','java.util.function.BooleanSupplier','buffer','<T_BUFFER extends java.util.stream.AbstractSpinedBuffer>']]]

Clazz.newMeth(C$, 'c$$java_util_stream_PipelineHelper$java_util_function_Supplier$Z',  function (ph, spliteratorSupplier, parallel) {
;C$.$init$.apply(this);
this.ph=ph;
this.spliteratorSupplier=spliteratorSupplier;
this.spliterator=null;
this.isParallel=parallel;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_PipelineHelper$java_util_Spliterator$Z',  function (ph, spliterator, parallel) {
;C$.$init$.apply(this);
this.ph=ph;
this.spliteratorSupplier=null;
this.spliterator=spliterator;
this.isParallel=parallel;
}, 1);

Clazz.newMeth(C$, 'init$',  function () {
if (this.spliterator == null ) {
this.spliterator=this.spliteratorSupplier.get$();
this.spliteratorSupplier=null;
}});

Clazz.newMeth(C$, 'doAdvance$',  function () {
if (this.buffer == null ) {
if (this.finished) return false;
this.init$();
this.initPartialTraversalState$();
this.nextToConsume=0;
this.bufferSink.begin$J(this.spliterator.getExactSizeIfKnown$());
return p$1.fillBuffer.apply(this, []);
} else {
(this.nextToConsume=Long.$inc(this.nextToConsume,1));
var hasNext=Long.$lt(this.nextToConsume,this.buffer.count$() );
if (!hasNext) {
this.nextToConsume=0;
this.buffer.clear$();
hasNext=p$1.fillBuffer.apply(this, []);
}return hasNext;
}});

Clazz.newMeth(C$, 'trySplit$',  function () {
if (this.isParallel && !this.finished ) {
this.init$();
var split=this.spliterator.trySplit$();
return (split == null ) ? null : this.wrap$java_util_Spliterator(split);
} else return null;
});

Clazz.newMeth(C$, 'fillBuffer',  function () {
while (Long.$eq(this.buffer.count$(),0 )){
if (this.bufferSink.cancellationRequested$() || !this.pusher.getAsBoolean$() ) {
if (this.finished) return false;
 else {
this.bufferSink.end$();
this.finished=true;
}}}
return true;
}, p$1);

Clazz.newMeth(C$, 'estimateSize$',  function () {
this.init$();
return this.spliterator.estimateSize$();
});

Clazz.newMeth(C$, 'getExactSizeIfKnown$',  function () {
this.init$();
return $I$(1).SIZED.isKnown$I(this.ph.getStreamAndOpFlags$()) ? this.spliterator.getExactSizeIfKnown$() : -1;
});

Clazz.newMeth(C$, 'characteristics$',  function () {
this.init$();
var c=$I$(1,"toCharacteristics$I",[$I$(1,"toStreamFlags$I",[this.ph.getStreamAndOpFlags$()])]);
if ((c & 64) != 0) {
c&=~(16448);
c|=(this.spliterator.characteristics$() & (16448));
}return c;
});

Clazz.newMeth(C$, 'getComparator$',  function () {
if (!this.hasCharacteristics$I(4)) throw Clazz.new_(Clazz.load('IllegalStateException'));
return null;
});

Clazz.newMeth(C$, 'toString',  function () {
return String.format$S$OA("%s[%s]", Clazz.array(java.lang.Object, -1, [this.getClass$().getName$(), this.spliterator]));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators, "WrappingSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.AbstractWrappingSpliterator']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_stream_PipelineHelper$java_util_function_Supplier$Z',  function (ph, supplier, parallel) {
;C$.superclazz.c$$java_util_stream_PipelineHelper$java_util_function_Supplier$Z.apply(this,[ph, supplier, parallel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_PipelineHelper$java_util_Spliterator$Z',  function (ph, spliterator, parallel) {
;C$.superclazz.c$$java_util_stream_PipelineHelper$java_util_Spliterator$Z.apply(this,[ph, spliterator, parallel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'wrap$java_util_Spliterator',  function (s) {
return Clazz.new_(C$.c$$java_util_stream_PipelineHelper$java_util_Spliterator$Z,[this.ph, s, this.isParallel]);
});

Clazz.newMeth(C$, 'initPartialTraversalState$',  function () {
var b=Clazz.new_($I$(2,1));
this.buffer=b;
this.bufferSink=this.ph.wrapSink$java_util_stream_Sink((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "StreamSpliterators$WrappingSpliterator$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.stream.Sink', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$O',  function (t) { return $$.accept$O.apply($$,[t])});
})()
)); return Clazz.new_(P$.StreamSpliterators$WrappingSpliterator$lambda1.$init$,[this, null])})(b));
this.pusher=((P$.StreamSpliterators$WrappingSpliterator$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "StreamSpliterators$WrappingSpliterator$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BooleanSupplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'getAsBoolean$',  function () { return (this.b$['java.util.stream.StreamSpliterators.WrappingSpliterator'].spliterator.tryAdvance$java_util_function_Consumer.apply(this.b$['java.util.stream.StreamSpliterators.WrappingSpliterator'].spliterator, [this.b$['java.util.stream.StreamSpliterators.WrappingSpliterator'].bufferSink]));});
})()
), Clazz.new_(P$.StreamSpliterators$WrappingSpliterator$lambda2.$init$,[this, null]));
});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer',  function (consumer) {
$I$(3).requireNonNull$O(consumer);
var hasNext=this.doAdvance$();
if (hasNext) consumer.accept$O(this.buffer.get$J(this.nextToConsume));
return hasNext;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (consumer) {
if (this.buffer == null  && !this.finished ) {
$I$(3).requireNonNull$O(consumer);
this.init$();
this.ph.wrapAndCopyInto$java_util_stream_Sink$java_util_Spliterator((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "StreamSpliterators$WrappingSpliterator$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.stream.Sink', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$O',  function (t) { return $$.accept$O.apply($$,[t])});
})()
)); return Clazz.new_(P$.StreamSpliterators$WrappingSpliterator$lambda3.$init$,[this, null])})(consumer), this.spliterator);
this.finished=true;
} else {
do {
} while (this.tryAdvance$java_util_function_Consumer(consumer));
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators, "IntWrappingSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.AbstractWrappingSpliterator'], [['java.util.Spliterator','java.util.Spliterator.OfInt']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_stream_PipelineHelper$java_util_function_Supplier$Z',  function (ph, supplier, parallel) {
;C$.superclazz.c$$java_util_stream_PipelineHelper$java_util_function_Supplier$Z.apply(this,[ph, supplier, parallel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_PipelineHelper$java_util_Spliterator$Z',  function (ph, spliterator, parallel) {
;C$.superclazz.c$$java_util_stream_PipelineHelper$java_util_Spliterator$Z.apply(this,[ph, spliterator, parallel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'wrap$java_util_Spliterator',  function (s) {
return Clazz.new_(C$.c$$java_util_stream_PipelineHelper$java_util_Spliterator$Z,[this.ph, s, this.isParallel]);
});

Clazz.newMeth(C$, 'initPartialTraversalState$',  function () {
var b=Clazz.new_($I$(4,1));
this.buffer=b;
this.bufferSink=this.ph.wrapSink$java_util_stream_Sink((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "StreamSpliterators$IntWrappingSpliterator$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['java.util.stream.Sink','java.util.stream.Sink.OfInt']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['accept$I','accept$O'],  function (t) { return $$.accept$I.apply($$,[t])});
})()
)); return Clazz.new_(P$.StreamSpliterators$IntWrappingSpliterator$lambda1.$init$,[this, null])})(b));
this.pusher=((P$.StreamSpliterators$IntWrappingSpliterator$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "StreamSpliterators$IntWrappingSpliterator$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BooleanSupplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'getAsBoolean$',  function () { return (this.b$['java.util.stream.StreamSpliterators.IntWrappingSpliterator'].spliterator.tryAdvance$java_util_function_Consumer.apply(this.b$['java.util.stream.StreamSpliterators.IntWrappingSpliterator'].spliterator, [this.b$['java.util.stream.StreamSpliterators.IntWrappingSpliterator'].bufferSink]));});
})()
), Clazz.new_(P$.StreamSpliterators$IntWrappingSpliterator$lambda2.$init$,[this, null]));
});

Clazz.newMeth(C$, 'trySplit$',  function () {
return C$.superclazz.prototype.trySplit$.apply(this, []);
});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_IntConsumer','tryAdvance$O'],  function (consumer) {
$I$(3).requireNonNull$O(consumer);
var hasNext=this.doAdvance$();
if (hasNext) consumer.accept$I(this.buffer.get$J(this.nextToConsume));
return hasNext;
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_IntConsumer','forEachRemaining$O'],  function (consumer) {
if (this.buffer == null  && !this.finished ) {
$I$(3).requireNonNull$O(consumer);
this.init$();
this.ph.wrapAndCopyInto$java_util_stream_Sink$java_util_Spliterator((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "StreamSpliterators$IntWrappingSpliterator$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['java.util.stream.Sink','java.util.stream.Sink.OfInt']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['accept$I','accept$O'],  function (t) { return $$.accept$I.apply($$,[t])});
})()
)); return Clazz.new_(P$.StreamSpliterators$IntWrappingSpliterator$lambda3.$init$,[this, null])})(consumer), this.spliterator);
this.finished=true;
} else {
do {
} while (this.tryAdvance$java_util_function_IntConsumer(consumer));
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators, "LongWrappingSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.AbstractWrappingSpliterator'], [['java.util.Spliterator','java.util.Spliterator.OfLong']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_stream_PipelineHelper$java_util_function_Supplier$Z',  function (ph, supplier, parallel) {
;C$.superclazz.c$$java_util_stream_PipelineHelper$java_util_function_Supplier$Z.apply(this,[ph, supplier, parallel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_PipelineHelper$java_util_Spliterator$Z',  function (ph, spliterator, parallel) {
;C$.superclazz.c$$java_util_stream_PipelineHelper$java_util_Spliterator$Z.apply(this,[ph, spliterator, parallel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'wrap$java_util_Spliterator',  function (s) {
return Clazz.new_(C$.c$$java_util_stream_PipelineHelper$java_util_Spliterator$Z,[this.ph, s, this.isParallel]);
});

Clazz.newMeth(C$, 'initPartialTraversalState$',  function () {
var b=Clazz.new_($I$(5,1));
this.buffer=b;
this.bufferSink=this.ph.wrapSink$java_util_stream_Sink((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "StreamSpliterators$LongWrappingSpliterator$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['java.util.stream.Sink','java.util.stream.Sink.OfLong']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['accept$J','accept$O'],  function (t) { return $$.accept$J.apply($$,[t])});
})()
)); return Clazz.new_(P$.StreamSpliterators$LongWrappingSpliterator$lambda1.$init$,[this, null])})(b));
this.pusher=((P$.StreamSpliterators$LongWrappingSpliterator$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "StreamSpliterators$LongWrappingSpliterator$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BooleanSupplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'getAsBoolean$',  function () { return (this.b$['java.util.stream.StreamSpliterators.LongWrappingSpliterator'].spliterator.tryAdvance$java_util_function_Consumer.apply(this.b$['java.util.stream.StreamSpliterators.LongWrappingSpliterator'].spliterator, [this.b$['java.util.stream.StreamSpliterators.LongWrappingSpliterator'].bufferSink]));});
})()
), Clazz.new_(P$.StreamSpliterators$LongWrappingSpliterator$lambda2.$init$,[this, null]));
});

Clazz.newMeth(C$, 'trySplit$',  function () {
return C$.superclazz.prototype.trySplit$.apply(this, []);
});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_LongConsumer','tryAdvance$O'],  function (consumer) {
$I$(3).requireNonNull$O(consumer);
var hasNext=this.doAdvance$();
if (hasNext) consumer.accept$J(this.buffer.get$J(this.nextToConsume));
return hasNext;
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_LongConsumer','forEachRemaining$O'],  function (consumer) {
if (this.buffer == null  && !this.finished ) {
$I$(3).requireNonNull$O(consumer);
this.init$();
this.ph.wrapAndCopyInto$java_util_stream_Sink$java_util_Spliterator((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "StreamSpliterators$LongWrappingSpliterator$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['java.util.stream.Sink','java.util.stream.Sink.OfLong']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['accept$J','accept$O'],  function (t) { return $$.accept$J.apply($$,[t])});
})()
)); return Clazz.new_(P$.StreamSpliterators$LongWrappingSpliterator$lambda3.$init$,[this, null])})(consumer), this.spliterator);
this.finished=true;
} else {
do {
} while (this.tryAdvance$java_util_function_LongConsumer(consumer));
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators, "DoubleWrappingSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.AbstractWrappingSpliterator'], [['java.util.Spliterator','java.util.Spliterator.OfDouble']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_stream_PipelineHelper$java_util_function_Supplier$Z',  function (ph, supplier, parallel) {
;C$.superclazz.c$$java_util_stream_PipelineHelper$java_util_function_Supplier$Z.apply(this,[ph, supplier, parallel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_PipelineHelper$java_util_Spliterator$Z',  function (ph, spliterator, parallel) {
;C$.superclazz.c$$java_util_stream_PipelineHelper$java_util_Spliterator$Z.apply(this,[ph, spliterator, parallel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'wrap$java_util_Spliterator',  function (s) {
return Clazz.new_(C$.c$$java_util_stream_PipelineHelper$java_util_Spliterator$Z,[this.ph, s, this.isParallel]);
});

Clazz.newMeth(C$, 'initPartialTraversalState$',  function () {
var b=Clazz.new_($I$(6,1));
this.buffer=b;
this.bufferSink=this.ph.wrapSink$java_util_stream_Sink((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "StreamSpliterators$DoubleWrappingSpliterator$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['java.util.stream.Sink','java.util.stream.Sink.OfDouble']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['accept$D','accept$O'],  function (t) { return $$.accept$D.apply($$,[t])});
})()
)); return Clazz.new_(P$.StreamSpliterators$DoubleWrappingSpliterator$lambda1.$init$,[this, null])})(b));
this.pusher=((P$.StreamSpliterators$DoubleWrappingSpliterator$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "StreamSpliterators$DoubleWrappingSpliterator$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BooleanSupplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'getAsBoolean$',  function () { return (this.b$['java.util.stream.StreamSpliterators.DoubleWrappingSpliterator'].spliterator.tryAdvance$java_util_function_Consumer.apply(this.b$['java.util.stream.StreamSpliterators.DoubleWrappingSpliterator'].spliterator, [this.b$['java.util.stream.StreamSpliterators.DoubleWrappingSpliterator'].bufferSink]));});
})()
), Clazz.new_(P$.StreamSpliterators$DoubleWrappingSpliterator$lambda2.$init$,[this, null]));
});

Clazz.newMeth(C$, 'trySplit$',  function () {
return C$.superclazz.prototype.trySplit$.apply(this, []);
});

Clazz.newMeth(C$, ['tryAdvance$java_util_function_DoubleConsumer','tryAdvance$O'],  function (consumer) {
$I$(3).requireNonNull$O(consumer);
var hasNext=this.doAdvance$();
if (hasNext) consumer.accept$D(this.buffer.get$J(this.nextToConsume));
return hasNext;
});

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_DoubleConsumer','forEachRemaining$O'],  function (consumer) {
if (this.buffer == null  && !this.finished ) {
$I$(3).requireNonNull$O(consumer);
this.init$();
this.ph.wrapAndCopyInto$java_util_stream_Sink$java_util_Spliterator((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "StreamSpliterators$DoubleWrappingSpliterator$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['java.util.stream.Sink','java.util.stream.Sink.OfDouble']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['accept$D','accept$O'],  function (t) { return $$.accept$D.apply($$,[t])});
})()
)); return Clazz.new_(P$.StreamSpliterators$DoubleWrappingSpliterator$lambda3.$init$,[this, null])})(consumer), this.spliterator);
this.finished=true;
} else {
do {
} while (this.tryAdvance$java_util_function_DoubleConsumer(consumer));
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators, "DelegatingSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Spliterator');
C$.$classes$=[['OfPrimitive',8],['OfInt',24],['OfLong',24],['OfDouble',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['supplier','java.util.function.Supplier','s','<T_SPLITR extends Spliterator<T>>']]]

Clazz.newMeth(C$, 'c$$java_util_function_Supplier',  function (supplier) {
;C$.$init$.apply(this);
this.supplier=supplier;
}, 1);

Clazz.newMeth(C$, 'get$',  function () {
if (this.s == null ) {
this.s=this.supplier.get$();
}return this.s;
});

Clazz.newMeth(C$, 'trySplit$',  function () {
return this.get$().trySplit$();
});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer',  function (consumer) {
return this.get$().tryAdvance$java_util_function_Consumer(consumer);
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (consumer) {
this.get$().forEachRemaining$java_util_function_Consumer(consumer);
});

Clazz.newMeth(C$, 'estimateSize$',  function () {
return this.get$().estimateSize$();
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return this.get$().characteristics$();
});

Clazz.newMeth(C$, 'getComparator$',  function () {
return this.get$().getComparator$();
});

Clazz.newMeth(C$, 'getExactSizeIfKnown$',  function () {
return this.get$().getExactSizeIfKnown$();
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[" + this.get$() + "]" ;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators.DelegatingSpliterator, "OfPrimitive", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.DelegatingSpliterator'], [['java.util.Spliterator','java.util.Spliterator.OfPrimitive']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_function_Supplier',  function (supplier) {
;C$.superclazz.c$$java_util_function_Supplier.apply(this,[supplier]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'tryAdvance$O',  function (consumer) {
return this.get$().tryAdvance$O(consumer);
});

Clazz.newMeth(C$, 'forEachRemaining$O',  function (consumer) {
this.get$().forEachRemaining$O(consumer);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators.DelegatingSpliterator, "OfInt", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.DelegatingSpliterator','.OfPrimitive'], [['java.util.Spliterator','java.util.Spliterator.OfInt']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_function_Supplier',  function (supplier) {
;C$.superclazz.c$$java_util_function_Supplier.apply(this,[supplier]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators.DelegatingSpliterator, "OfLong", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.DelegatingSpliterator','.OfPrimitive'], [['java.util.Spliterator','java.util.Spliterator.OfLong']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_function_Supplier',  function (supplier) {
;C$.superclazz.c$$java_util_function_Supplier.apply(this,[supplier]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators.DelegatingSpliterator, "OfDouble", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.DelegatingSpliterator','.OfPrimitive'], [['java.util.Spliterator','java.util.Spliterator.OfDouble']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_function_Supplier',  function (supplier) {
;C$.superclazz.c$$java_util_function_Supplier.apply(this,[supplier]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators, "SliceSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['OfRef',24],['OfPrimitive',1032],['OfInt',24],['OfLong',24],['OfDouble',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['sliceOrigin','sliceFence','index','fence'],'O',['s','<T_SPLITR extends Spliterator<T>>']]]

Clazz.newMeth(C$, 'c$$java_util_Spliterator$J$J$J$J',  function (s, sliceOrigin, sliceFence, origin, fence) {
;C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return s.hasCharacteristics$I(16384)});
this.s=s;
this.sliceOrigin=sliceOrigin;
this.sliceFence=sliceFence;
this.index=origin;
this.fence=fence;
}, 1);

Clazz.newMeth(C$, 'trySplit$',  function () {
if (Long.$ge(this.sliceOrigin,this.fence )) return null;
if (Long.$ge(this.index,this.fence )) return null;
while (true){
var leftSplit=this.s.trySplit$();
if (leftSplit == null ) return null;
var leftSplitFenceUnbounded=Long.$add(this.index,leftSplit.estimateSize$());
var leftSplitFence=Math.min$J$J(leftSplitFenceUnbounded, this.sliceFence);
if (Long.$ge(this.sliceOrigin,leftSplitFence )) {
this.index=leftSplitFence;
} else if (Long.$ge(leftSplitFence,this.sliceFence )) {
this.s=leftSplit;
this.fence=leftSplitFence;
} else if (Long.$ge(this.index,this.sliceOrigin ) && Long.$le(leftSplitFenceUnbounded,this.sliceFence ) ) {
this.index=leftSplitFence;
return leftSplit;
} else {
return this.makeSpliterator$java_util_Spliterator$J$J$J$J(leftSplit, this.sliceOrigin, this.sliceFence, this.index, this.index=leftSplitFence);
}}
});

Clazz.newMeth(C$, 'estimateSize$',  function () {
return (Long.$lt(this.sliceOrigin,this.fence )) ? Long.$sub(this.fence,Math.max$J$J(this.sliceOrigin, this.index)) : 0;
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return this.s.characteristics$();
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators.SliceSpliterator, "OfRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.SliceSpliterator'], 'java.util.Spliterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator$J$J',  function (s, sliceOrigin, sliceFence) {
C$.c$$java_util_Spliterator$J$J$J$J.apply(this, [s, sliceOrigin, sliceFence, 0, Math.min$J$J(s.estimateSize$(), sliceFence)]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator$J$J$J$J',  function (s, sliceOrigin, sliceFence, origin, fence) {
;C$.superclazz.c$$java_util_Spliterator$J$J$J$J.apply(this,[s, sliceOrigin, sliceFence, origin, fence]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'makeSpliterator$java_util_Spliterator$J$J$J$J',  function (s, sliceOrigin, sliceFence, origin, fence) {
return Clazz.new_(C$.c$$java_util_Spliterator$J$J$J$J,[s, sliceOrigin, sliceFence, origin, fence]);
});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer',  function (action) {
$I$(3).requireNonNull$O(action);
if (Long.$ge(this.sliceOrigin,this.fence )) return false;
while (Long.$gt(this.sliceOrigin,this.index )){
this.s.tryAdvance$java_util_function_Consumer((P$.StreamSpliterators$SliceSpliterator$OfRef$lambda1$||(P$.StreamSpliterators$SliceSpliterator$OfRef$lambda1$=(((P$.StreamSpliterators$SliceSpliterator$OfRef$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StreamSpliterators$SliceSpliterator$OfRef$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$O',  function (e) {
});
})()
), Clazz.new_(P$.StreamSpliterators$SliceSpliterator$OfRef$lambda1.$init$,[this, null]))))));
(this.index=Long.$inc(this.index,1));
}
if (Long.$ge(this.index,this.fence )) return false;
(this.index=Long.$inc(this.index,1));
return this.s.tryAdvance$java_util_function_Consumer(action);
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
$I$(3).requireNonNull$O(action);
if (Long.$ge(this.sliceOrigin,this.fence )) return;
if (Long.$ge(this.index,this.fence )) return;
if (Long.$ge(this.index,this.sliceOrigin ) && Long.$le((Long.$add(this.index,this.s.estimateSize$())),this.sliceFence ) ) {
this.s.forEachRemaining$java_util_function_Consumer(action);
this.index=this.fence;
} else {
while (Long.$gt(this.sliceOrigin,this.index )){
this.s.tryAdvance$java_util_function_Consumer((P$.StreamSpliterators$SliceSpliterator$OfRef$lambda2$||(P$.StreamSpliterators$SliceSpliterator$OfRef$lambda2$=(((P$.StreamSpliterators$SliceSpliterator$OfRef$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "StreamSpliterators$SliceSpliterator$OfRef$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$O',  function (e) {
});
})()
), Clazz.new_(P$.StreamSpliterators$SliceSpliterator$OfRef$lambda2.$init$,[this, null]))))));
(this.index=Long.$inc(this.index,1));
}
for (; Long.$lt(this.index,this.fence ); ([this.index,this.index=Long.$inc(this.index,1)][0])) {
this.s.tryAdvance$java_util_function_Consumer(action);
}
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators.SliceSpliterator, "OfPrimitive", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.SliceSpliterator'], [['java.util.Spliterator','java.util.Spliterator.OfPrimitive']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator_OfPrimitive$J$J',  function (s, sliceOrigin, sliceFence) {
C$.c$$java_util_Spliterator_OfPrimitive$J$J$J$J.apply(this, [s, sliceOrigin, sliceFence, 0, Math.min$J$J(s.estimateSize$(), sliceFence)]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator_OfPrimitive$J$J$J$J',  function (s, sliceOrigin, sliceFence, origin, fence) {
;C$.superclazz.c$$java_util_Spliterator$J$J$J$J.apply(this,[s, sliceOrigin, sliceFence, origin, fence]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'tryAdvance$O',  function (action) {
$I$(3).requireNonNull$O(action);
if (Long.$ge(this.sliceOrigin,this.fence )) return false;
while (Long.$gt(this.sliceOrigin,this.index )){
this.s.tryAdvance$O(this.emptyConsumer$());
(this.index=Long.$inc(this.index,1));
}
if (Long.$ge(this.index,this.fence )) return false;
(this.index=Long.$inc(this.index,1));
return this.s.tryAdvance$O(action);
});

Clazz.newMeth(C$, 'forEachRemaining$O',  function (action) {
$I$(3).requireNonNull$O(action);
if (Long.$ge(this.sliceOrigin,this.fence )) return;
if (Long.$ge(this.index,this.fence )) return;
if (Long.$ge(this.index,this.sliceOrigin ) && Long.$le((Long.$add(this.index,this.s.estimateSize$())),this.sliceFence ) ) {
this.s.forEachRemaining$O(action);
this.index=this.fence;
} else {
while (Long.$gt(this.sliceOrigin,this.index )){
this.s.tryAdvance$O(this.emptyConsumer$());
(this.index=Long.$inc(this.index,1));
}
for (; Long.$lt(this.index,this.fence ); ([this.index,this.index=Long.$inc(this.index,1)][0])) {
this.s.tryAdvance$O(action);
}
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators.SliceSpliterator, "OfInt", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.SliceSpliterator','.OfPrimitive'], [['java.util.Spliterator','java.util.Spliterator.OfInt']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator_OfInt$J$J',  function (s, sliceOrigin, sliceFence) {
;C$.superclazz.c$$java_util_Spliterator_OfPrimitive$J$J.apply(this,[s, sliceOrigin, sliceFence]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator_OfInt$J$J$J$J',  function (s, sliceOrigin, sliceFence, origin, fence) {
;C$.superclazz.c$$java_util_Spliterator_OfPrimitive$J$J$J$J.apply(this,[s, sliceOrigin, sliceFence, origin, fence]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['makeSpliterator$java_util_Spliterator_OfInt$J$J$J$J','makeSpliterator$java_util_Spliterator$J$J$J$J'],  function (s, sliceOrigin, sliceFence, origin, fence) {
return Clazz.new_(C$.c$$java_util_Spliterator_OfInt$J$J$J$J,[s, sliceOrigin, sliceFence, origin, fence]);
});

Clazz.newMeth(C$, 'emptyConsumer$',  function () {
return (P$.StreamSpliterators$SliceSpliterator$OfInt$lambda1$||(P$.StreamSpliterators$SliceSpliterator$OfInt$lambda1$=(((P$.StreamSpliterators$SliceSpliterator$OfInt$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StreamSpliterators$SliceSpliterator$OfInt$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$I','accept$O'],  function (e) {
});
})()
), Clazz.new_(P$.StreamSpliterators$SliceSpliterator$OfInt$lambda1.$init$,[this, null])))));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators.SliceSpliterator, "OfLong", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.SliceSpliterator','.OfPrimitive'], [['java.util.Spliterator','java.util.Spliterator.OfLong']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator_OfLong$J$J',  function (s, sliceOrigin, sliceFence) {
;C$.superclazz.c$$java_util_Spliterator_OfPrimitive$J$J.apply(this,[s, sliceOrigin, sliceFence]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator_OfLong$J$J$J$J',  function (s, sliceOrigin, sliceFence, origin, fence) {
;C$.superclazz.c$$java_util_Spliterator_OfPrimitive$J$J$J$J.apply(this,[s, sliceOrigin, sliceFence, origin, fence]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['makeSpliterator$java_util_Spliterator_OfLong$J$J$J$J','makeSpliterator$java_util_Spliterator$J$J$J$J'],  function (s, sliceOrigin, sliceFence, origin, fence) {
return Clazz.new_(C$.c$$java_util_Spliterator_OfLong$J$J$J$J,[s, sliceOrigin, sliceFence, origin, fence]);
});

Clazz.newMeth(C$, 'emptyConsumer$',  function () {
return (P$.StreamSpliterators$SliceSpliterator$OfLong$lambda1$||(P$.StreamSpliterators$SliceSpliterator$OfLong$lambda1$=(((P$.StreamSpliterators$SliceSpliterator$OfLong$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StreamSpliterators$SliceSpliterator$OfLong$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$J','accept$O'],  function (e) {
});
})()
), Clazz.new_(P$.StreamSpliterators$SliceSpliterator$OfLong$lambda1.$init$,[this, null])))));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators.SliceSpliterator, "OfDouble", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.SliceSpliterator','.OfPrimitive'], [['java.util.Spliterator','java.util.Spliterator.OfDouble']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator_OfDouble$J$J',  function (s, sliceOrigin, sliceFence) {
;C$.superclazz.c$$java_util_Spliterator_OfPrimitive$J$J.apply(this,[s, sliceOrigin, sliceFence]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator_OfDouble$J$J$J$J',  function (s, sliceOrigin, sliceFence, origin, fence) {
;C$.superclazz.c$$java_util_Spliterator_OfPrimitive$J$J$J$J.apply(this,[s, sliceOrigin, sliceFence, origin, fence]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['makeSpliterator$java_util_Spliterator_OfDouble$J$J$J$J','makeSpliterator$java_util_Spliterator$J$J$J$J'],  function (s, sliceOrigin, sliceFence, origin, fence) {
return Clazz.new_(C$.c$$java_util_Spliterator_OfDouble$J$J$J$J,[s, sliceOrigin, sliceFence, origin, fence]);
});

Clazz.newMeth(C$, 'emptyConsumer$',  function () {
return (P$.StreamSpliterators$SliceSpliterator$OfDouble$lambda1$||(P$.StreamSpliterators$SliceSpliterator$OfDouble$lambda1$=(((P$.StreamSpliterators$SliceSpliterator$OfDouble$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StreamSpliterators$SliceSpliterator$OfDouble$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$D','accept$O'],  function (e) {
});
})()
), Clazz.new_(P$.StreamSpliterators$SliceSpliterator$OfDouble$lambda1.$init$,[this, null])))));
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators, "UnorderedSliceSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['PermitStatus',24],['OfRef',24],['OfPrimitive',1032],['OfInt',24],['OfLong',24],['OfDouble',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['unlimited'],'J',['skipThreshold'],'O',['s','<T_SPLITR extends Spliterator<T>>','permits','java.util.concurrent.atomic.AtomicLong']]]

Clazz.newMeth(C$, 'c$$java_util_Spliterator$J$J',  function (s, skip, limit) {
;C$.$init$.apply(this);
this.s=s;
this.unlimited=Long.$lt(limit,0 );
this.skipThreshold=Long.$ge(limit,0 ) ? limit : 0;
this.permits=Clazz.new_([Long.$ge(limit,0 ) ? Long.$add(skip,limit) : skip],$I$(12,1).c$$J);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator$java_util_stream_StreamSpliterators_UnorderedSliceSpliterator',  function (s, parent) {
;C$.$init$.apply(this);
this.s=s;
this.unlimited=parent.unlimited;
this.permits=parent.permits;
this.skipThreshold=parent.skipThreshold;
}, 1);

Clazz.newMeth(C$, 'acquirePermits$J',  function (numElements) {
var remainingPermits;
var grabbing;
Clazz.assert(C$, this, function(){return Long.$gt(numElements,0 )});
do {
remainingPermits=this.permits.get$();
if (Long.$eq(remainingPermits,0 )) return this.unlimited ? numElements : 0;
grabbing=Math.min$J$J(remainingPermits, numElements);
} while (Long.$gt(grabbing,0 ) && !this.permits.compareAndSet$J$J(remainingPermits, Long.$sub(remainingPermits,grabbing)) );
if (this.unlimited) return Math.max$J$J(Long.$sub(numElements,grabbing), 0);
 else if (Long.$gt(remainingPermits,this.skipThreshold )) return Math.max$J$J(Long.$sub(grabbing,(Long.$sub(remainingPermits,this.skipThreshold))), 0);
 else return grabbing;
});

Clazz.newMeth(C$, 'permitStatus$',  function () {
if (Long.$gt(this.permits.get$(),0 )) return $I$(7).MAYBE_MORE;
 else return this.unlimited ? $I$(7).UNLIMITED : $I$(7).NO_MORE;
});

Clazz.newMeth(C$, 'trySplit$',  function () {
if (Long.$eq(this.permits.get$(),0 )) return null;
var split=this.s.trySplit$();
return split == null  ? null : this.makeSpliterator$java_util_Spliterator(split);
});

Clazz.newMeth(C$, 'estimateSize$',  function () {
return this.s.estimateSize$();
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return this.s.characteristics$() & ~(16464);
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.StreamSpliterators.UnorderedSliceSpliterator, "PermitStatus", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "NO_MORE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "MAYBE_MORE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "UNLIMITED", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators.UnorderedSliceSpliterator, "OfRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.UnorderedSliceSpliterator'], ['java.util.Spliterator', 'java.util.function.Consumer']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['tmpSlot','<T>']]]

Clazz.newMeth(C$, 'c$$java_util_Spliterator$J$J',  function (s, skip, limit) {
;C$.superclazz.c$$java_util_Spliterator$J$J.apply(this,[s, skip, limit]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator$java_util_stream_StreamSpliterators_UnorderedSliceSpliterator_OfRef',  function (s, parent) {
;C$.superclazz.c$$java_util_Spliterator$java_util_stream_StreamSpliterators_UnorderedSliceSpliterator.apply(this,[s, parent]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'accept$O',  function (t) {
this.tmpSlot=t;
});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer',  function (action) {
$I$(3).requireNonNull$O(action);
while (this.permitStatus$() !== $I$(7).NO_MORE ){
if (!this.s.tryAdvance$java_util_function_Consumer(this)) return false;
 else if (Long.$eq(this.acquirePermits$J(1),1 )) {
action.accept$O(this.tmpSlot);
this.tmpSlot=null;
return true;
}}
return false;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
$I$(3).requireNonNull$O(action);
var sb=null;
var permitStatus;
while ((permitStatus=this.permitStatus$()) !== $I$(7).NO_MORE ){
if (permitStatus === $I$(7).MAYBE_MORE ) {
if (sb == null ) sb=Clazz.new_($I$(8,1).c$$I,[128]);
 else sb.reset$();
var permitsRequested=0;
do {
} while (this.s.tryAdvance$java_util_function_Consumer(sb) && Long.$lt((permitsRequested=Long.$inc(permitsRequested,1)),128 ) );
if (Long.$eq(permitsRequested,0 )) return;
sb.forEach$java_util_function_Consumer$J(action, this.acquirePermits$J(permitsRequested));
} else {
this.s.forEachRemaining$java_util_function_Consumer(action);
return;
}}
});

Clazz.newMeth(C$, 'makeSpliterator$java_util_Spliterator',  function (s) {
return Clazz.new_(C$.c$$java_util_Spliterator$java_util_stream_StreamSpliterators_UnorderedSliceSpliterator_OfRef,[s, this]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators.UnorderedSliceSpliterator, "OfPrimitive", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.UnorderedSliceSpliterator'], [['java.util.Spliterator','java.util.Spliterator.OfPrimitive']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator_OfPrimitive$J$J',  function (s, skip, limit) {
;C$.superclazz.c$$java_util_Spliterator$J$J.apply(this,[s, skip, limit]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator_OfPrimitive$java_util_stream_StreamSpliterators_UnorderedSliceSpliterator_OfPrimitive',  function (s, parent) {
;C$.superclazz.c$$java_util_Spliterator$java_util_stream_StreamSpliterators_UnorderedSliceSpliterator.apply(this,[s, parent]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'tryAdvance$O',  function (action) {
$I$(3).requireNonNull$O(action);
var consumer=this;
while (this.permitStatus$() !== $I$(7).NO_MORE ){
if (!this.s.tryAdvance$O(consumer)) return false;
 else if (Long.$eq(this.acquirePermits$J(1),1 )) {
this.acceptConsumed$O(action);
return true;
}}
return false;
});

Clazz.newMeth(C$, 'forEachRemaining$O',  function (action) {
$I$(3).requireNonNull$O(action);
var sb=null;
var permitStatus;
while ((permitStatus=this.permitStatus$()) !== $I$(7).NO_MORE ){
if (permitStatus === $I$(7).MAYBE_MORE ) {
if (sb == null ) sb=this.bufferCreate$I(128);
 else sb.reset$();
var sbc=sb;
var permitsRequested=0;
do {
} while (this.s.tryAdvance$O(sbc) && Long.$lt((permitsRequested=Long.$inc(permitsRequested,1)),128 ) );
if (Long.$eq(permitsRequested,0 )) return;
sb.forEach$O$J(action, this.acquirePermits$J(permitsRequested));
} else {
this.s.forEachRemaining$O(action);
return;
}}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators.UnorderedSliceSpliterator, "OfInt", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.UnorderedSliceSpliterator','.OfPrimitive'], [['java.util.Spliterator','java.util.Spliterator.OfInt'], 'java.util.function.IntConsumer']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['tmpValue']]]

Clazz.newMeth(C$, 'c$$java_util_Spliterator_OfInt$J$J',  function (s, skip, limit) {
;C$.superclazz.c$$java_util_Spliterator_OfPrimitive$J$J.apply(this,[s, skip, limit]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator_OfInt$java_util_stream_StreamSpliterators_UnorderedSliceSpliterator_OfInt',  function (s, parent) {
;C$.superclazz.c$$java_util_Spliterator_OfPrimitive$java_util_stream_StreamSpliterators_UnorderedSliceSpliterator_OfPrimitive.apply(this,[s, parent]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'accept$I',  function (value) {
this.tmpValue=value;
});

Clazz.newMeth(C$, ['acceptConsumed$java_util_function_IntConsumer','acceptConsumed$O'],  function (action) {
action.accept$I(this.tmpValue);
});

Clazz.newMeth(C$, 'bufferCreate$I',  function (initialCapacity) {
return Clazz.new_($I$(9,1).c$$I,[initialCapacity]);
});

Clazz.newMeth(C$, ['makeSpliterator$java_util_Spliterator_OfInt','makeSpliterator$java_util_Spliterator'],  function (s) {
return Clazz.new_(C$.c$$java_util_Spliterator_OfInt$java_util_stream_StreamSpliterators_UnorderedSliceSpliterator_OfInt,[s, this]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators.UnorderedSliceSpliterator, "OfLong", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.UnorderedSliceSpliterator','.OfPrimitive'], [['java.util.Spliterator','java.util.Spliterator.OfLong'], 'java.util.function.LongConsumer']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['tmpValue']]]

Clazz.newMeth(C$, 'c$$java_util_Spliterator_OfLong$J$J',  function (s, skip, limit) {
;C$.superclazz.c$$java_util_Spliterator_OfPrimitive$J$J.apply(this,[s, skip, limit]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator_OfLong$java_util_stream_StreamSpliterators_UnorderedSliceSpliterator_OfLong',  function (s, parent) {
;C$.superclazz.c$$java_util_Spliterator_OfPrimitive$java_util_stream_StreamSpliterators_UnorderedSliceSpliterator_OfPrimitive.apply(this,[s, parent]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'accept$J',  function (value) {
this.tmpValue=value;
});

Clazz.newMeth(C$, ['acceptConsumed$java_util_function_LongConsumer','acceptConsumed$O'],  function (action) {
action.accept$J(this.tmpValue);
});

Clazz.newMeth(C$, 'bufferCreate$I',  function (initialCapacity) {
return Clazz.new_($I$(10,1).c$$I,[initialCapacity]);
});

Clazz.newMeth(C$, ['makeSpliterator$java_util_Spliterator_OfLong','makeSpliterator$java_util_Spliterator'],  function (s) {
return Clazz.new_(C$.c$$java_util_Spliterator_OfLong$java_util_stream_StreamSpliterators_UnorderedSliceSpliterator_OfLong,[s, this]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators.UnorderedSliceSpliterator, "OfDouble", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.UnorderedSliceSpliterator','.OfPrimitive'], [['java.util.Spliterator','java.util.Spliterator.OfDouble'], 'java.util.function.DoubleConsumer']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['tmpValue']]]

Clazz.newMeth(C$, 'c$$java_util_Spliterator_OfDouble$J$J',  function (s, skip, limit) {
;C$.superclazz.c$$java_util_Spliterator_OfPrimitive$J$J.apply(this,[s, skip, limit]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator_OfDouble$java_util_stream_StreamSpliterators_UnorderedSliceSpliterator_OfDouble',  function (s, parent) {
;C$.superclazz.c$$java_util_Spliterator_OfPrimitive$java_util_stream_StreamSpliterators_UnorderedSliceSpliterator_OfPrimitive.apply(this,[s, parent]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'accept$D',  function (value) {
this.tmpValue=value;
});

Clazz.newMeth(C$, ['acceptConsumed$java_util_function_DoubleConsumer','acceptConsumed$O'],  function (action) {
action.accept$D(this.tmpValue);
});

Clazz.newMeth(C$, 'bufferCreate$I',  function (initialCapacity) {
return Clazz.new_($I$(11,1).c$$I,[initialCapacity]);
});

Clazz.newMeth(C$, ['makeSpliterator$java_util_Spliterator_OfDouble','makeSpliterator$java_util_Spliterator'],  function (s) {
return Clazz.new_(C$.c$$java_util_Spliterator_OfDouble$java_util_stream_StreamSpliterators_UnorderedSliceSpliterator_OfDouble,[s, this]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators, "DistinctSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.util.Spliterator', 'java.util.function.Consumer']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['s','java.util.Spliterator','seen','java.util.concurrent.ConcurrentHashMap','tmpSlot','<T>']]
,['O',['NULL_VALUE','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$java_util_Spliterator',  function (s) {
C$.c$$java_util_Spliterator$java_util_concurrent_ConcurrentHashMap.apply(this, [s, Clazz.new_($I$(13,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Spliterator$java_util_concurrent_ConcurrentHashMap',  function (s, seen) {
;C$.$init$.apply(this);
this.s=s;
this.seen=seen;
}, 1);

Clazz.newMeth(C$, 'accept$O',  function (t) {
this.tmpSlot=t;
});

Clazz.newMeth(C$, 'mapNull$O',  function (t) {
return t != null  ? t : C$.NULL_VALUE;
}, p$2);

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer',  function (action) {
while (this.s.tryAdvance$java_util_function_Consumer(this)){
if (this.seen.putIfAbsent$O$O(p$2.mapNull$O.apply(this, [this.tmpSlot]), Boolean.TRUE) == null ) {
action.accept$O(this.tmpSlot);
this.tmpSlot=null;
return true;
}}
return false;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
this.s.forEachRemaining$java_util_function_Consumer(((P$.StreamSpliterators$DistinctSpliterator$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StreamSpliterators$DistinctSpliterator$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$O',  function (t) {
if (this.b$['java.util.stream.StreamSpliterators.DistinctSpliterator'].seen.putIfAbsent$O$O.apply(this.b$['java.util.stream.StreamSpliterators.DistinctSpliterator'].seen, [p$2.mapNull$O.apply(this.b$['java.util.stream.StreamSpliterators.DistinctSpliterator'], [t]), Boolean.TRUE]) == null ) {
this.$finals$.action.accept$O(t);
}});
})()
), Clazz.new_(P$.StreamSpliterators$DistinctSpliterator$lambda1.$init$,[this, {action:action}])));
});

Clazz.newMeth(C$, 'trySplit$',  function () {
var split=this.s.trySplit$();
return (split != null ) ? Clazz.new_(C$.c$$java_util_Spliterator$java_util_concurrent_ConcurrentHashMap,[split, this.seen]) : null;
});

Clazz.newMeth(C$, 'estimateSize$',  function () {
return this.s.estimateSize$();
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return (this.s.characteristics$() & ~(16468)) | 1;
});

Clazz.newMeth(C$, 'getComparator$',  function () {
return this.s.getComparator$();
});

C$.$static$=function(){C$.$static$=0;
C$.NULL_VALUE= Clazz.new_();
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators, "InfiniteSupplyingSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Spliterator');
C$.$classes$=[['OfRef',24],['OfInt',24],['OfLong',24],['OfDouble',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['estimate']]]

Clazz.newMeth(C$, 'c$$J',  function (estimate) {
;C$.$init$.apply(this);
this.estimate=estimate;
}, 1);

Clazz.newMeth(C$, 'estimateSize$',  function () {
return this.estimate;
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return 1024;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators.InfiniteSupplyingSpliterator, "OfRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.InfiniteSupplyingSpliterator']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['s','java.util.function.Supplier']]]

Clazz.newMeth(C$, 'c$$J$java_util_function_Supplier',  function (size, s) {
;C$.superclazz.c$$J.apply(this,[size]);C$.$init$.apply(this);
this.s=s;
}, 1);

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer',  function (action) {
$I$(3).requireNonNull$O(action);
action.accept$O(this.s.get$());
return true;
});

Clazz.newMeth(C$, 'trySplit$',  function () {
if (Long.$eq(this.estimate,0 )) return null;
return Clazz.new_(C$.c$$J$java_util_function_Supplier,[(this.estimate=Long.$usr(this.estimate,(1))), this.s]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators.InfiniteSupplyingSpliterator, "OfInt", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.InfiniteSupplyingSpliterator'], [['java.util.Spliterator','java.util.Spliterator.OfInt']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['s','java.util.function.IntSupplier']]]

Clazz.newMeth(C$, 'c$$J$java_util_function_IntSupplier',  function (size, s) {
;C$.superclazz.c$$J.apply(this,[size]);C$.$init$.apply(this);
this.s=s;
}, 1);

Clazz.newMeth(C$, ['tryAdvance$java_util_function_IntConsumer','tryAdvance$O'],  function (action) {
$I$(3).requireNonNull$O(action);
action.accept$I(this.s.getAsInt$());
return true;
});

Clazz.newMeth(C$, 'trySplit$',  function () {
if (Long.$eq(this.estimate,0 )) return null;
return Clazz.new_(C$.c$$J$java_util_function_IntSupplier,[this.estimate=Long.$usr(this.estimate,1), this.s]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators.InfiniteSupplyingSpliterator, "OfLong", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.InfiniteSupplyingSpliterator'], [['java.util.Spliterator','java.util.Spliterator.OfLong']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['s','java.util.function.LongSupplier']]]

Clazz.newMeth(C$, 'c$$J$java_util_function_LongSupplier',  function (size, s) {
;C$.superclazz.c$$J.apply(this,[size]);C$.$init$.apply(this);
this.s=s;
}, 1);

Clazz.newMeth(C$, ['tryAdvance$java_util_function_LongConsumer','tryAdvance$O'],  function (action) {
$I$(3).requireNonNull$O(action);
action.accept$J(this.s.getAsLong$());
return true;
});

Clazz.newMeth(C$, 'trySplit$',  function () {
if (Long.$eq(this.estimate,0 )) return null;
return Clazz.new_(C$.c$$J$java_util_function_LongSupplier,[this.estimate=Long.$usr(this.estimate,1), this.s]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators.InfiniteSupplyingSpliterator, "OfDouble", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.InfiniteSupplyingSpliterator'], [['java.util.Spliterator','java.util.Spliterator.OfDouble']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['s','java.util.function.DoubleSupplier']]]

Clazz.newMeth(C$, 'c$$J$java_util_function_DoubleSupplier',  function (size, s) {
;C$.superclazz.c$$J.apply(this,[size]);C$.$init$.apply(this);
this.s=s;
}, 1);

Clazz.newMeth(C$, ['tryAdvance$java_util_function_DoubleConsumer','tryAdvance$O'],  function (action) {
$I$(3).requireNonNull$O(action);
action.accept$D(this.s.getAsDouble$());
return true;
});

Clazz.newMeth(C$, 'trySplit$',  function () {
if (Long.$eq(this.estimate,0 )) return null;
return Clazz.new_(C$.c$$J$java_util_function_DoubleSupplier,[this.estimate=Long.$usr(this.estimate,1), this.s]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators, "ArrayBuffer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['OfRef',24],['OfPrimitive',1032],['OfInt',24],['OfLong',24],['OfDouble',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index']]]

Clazz.newMeth(C$, 'reset$',  function () {
this.index=0;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators.ArrayBuffer, "OfRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.ArrayBuffer'], 'java.util.function.Consumer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['array','Object[]']]]

Clazz.newMeth(C$, 'c$$I',  function (size) {
Clazz.super_(C$, this);
this.array=Clazz.array(java.lang.Object, [size]);
}, 1);

Clazz.newMeth(C$, 'accept$O',  function (t) {
this.array[this.index++]=t;
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer$J',  function (action, fence) {
for (var i=0; Long.$lt(i,fence ); i++) {
var t=this.array[i];
action.accept$O(t);
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators.ArrayBuffer, "OfPrimitive", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.ArrayBuffer']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['$index']]]

Clazz.newMeth(C$, 'reset$',  function () {
this.$index=0;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators.ArrayBuffer, "OfInt", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.ArrayBuffer','.OfPrimitive'], 'java.util.function.IntConsumer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['array','int[]']]]

Clazz.newMeth(C$, 'c$$I',  function (size) {
Clazz.super_(C$, this);
this.array=Clazz.array(Integer.TYPE, [size]);
}, 1);

Clazz.newMeth(C$, 'accept$I',  function (t) {
this.array[this.$index++]=t;
});

Clazz.newMeth(C$, ['forEach$java_util_function_IntConsumer$J','forEach$O$J'],  function (action, fence) {
for (var i=0; Long.$lt(i,fence ); i++) {
action.accept$I(this.array[i]);
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators.ArrayBuffer, "OfLong", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.ArrayBuffer','.OfPrimitive'], 'java.util.function.LongConsumer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['array','long[]']]]

Clazz.newMeth(C$, 'c$$I',  function (size) {
Clazz.super_(C$, this);
this.array=Clazz.array(Long.TYPE, [size]);
}, 1);

Clazz.newMeth(C$, 'accept$J',  function (t) {
this.array[this.$index++]=t;
});

Clazz.newMeth(C$, ['forEach$java_util_function_LongConsumer$J','forEach$O$J'],  function (action, fence) {
for (var i=0; Long.$lt(i,fence ); i++) {
action.accept$J(this.array[i]);
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StreamSpliterators.ArrayBuffer, "OfDouble", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.StreamSpliterators','.ArrayBuffer','.OfPrimitive'], 'java.util.function.DoubleConsumer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['array','double[]']]]

Clazz.newMeth(C$, 'c$$I',  function (size) {
Clazz.super_(C$, this);
this.array=Clazz.array(Double.TYPE, [size]);
}, 1);

Clazz.newMeth(C$, 'accept$D',  function (t) {
this.array[this.$index++]=t;
});

Clazz.newMeth(C$, ['forEach$java_util_function_DoubleConsumer$J','forEach$O$J'],  function (action, fence) {
for (var i=0; Long.$lt(i,fence ); i++) {
action.accept$D(this.array[i]);
}
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
