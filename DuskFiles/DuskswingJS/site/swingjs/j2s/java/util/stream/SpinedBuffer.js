(function(){var P$=Clazz.newPackage("java.util.stream"),p$1={},p$2={},I$=[[0,'java.util.Objects','java.util.Arrays','java.util.Spliterators',['java.util.stream.SpinedBuffer','.OfPrimitive','.BaseSpliterator'],'java.util.ArrayList']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SpinedBuffer", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.stream.AbstractSpinedBuffer', ['java.util.function.Consumer', 'Iterable']);
C$.$classes$=[['OfPrimitive',1032],['OfInt',8],['OfLong',8],['OfDouble',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['curChunk','_.E[]','spine','Object[][]']]]

Clazz.newMeth(C$, 'c$$I',  function (initialCapacity) {
;C$.superclazz.c$$I.apply(this,[initialCapacity]);C$.$init$.apply(this);
this.curChunk=Clazz.array(java.lang.Object, [1 << this.initialChunkPower]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.curChunk=Clazz.array(java.lang.Object, [1 << this.initialChunkPower]);
}, 1);

Clazz.newMeth(C$, 'capacity$',  function () {
return (this.spineIndex == 0) ? this.curChunk.length : Long.$add(this.priorElementCount[this.spineIndex],this.spine[this.spineIndex].length);
});

Clazz.newMeth(C$, 'inflateSpine',  function () {
if (this.spine == null ) {
this.spine=Clazz.array(java.lang.Object, [8, null]);
this.priorElementCount=Clazz.array(Long.TYPE, [8]);
this.spine[0]=this.curChunk;
}}, p$2);

Clazz.newMeth(C$, 'ensureCapacity$J',  function (targetSize) {
var capacity=this.capacity$();
if (Long.$gt(targetSize,capacity )) {
p$2.inflateSpine.apply(this, []);
for (var i=this.spineIndex + 1; Long.$gt(targetSize,capacity ); i++) {
if (i >= this.spine.length) {
var newSpineSize=this.spine.length * 2;
this.spine=$I$(2).copyOf$OA$I(this.spine, newSpineSize);
this.priorElementCount=$I$(2).copyOf$JA$I(this.priorElementCount, newSpineSize);
}var nextChunkSize=this.chunkSize$I(i);
this.spine[i]=Clazz.array(java.lang.Object, [nextChunkSize]);
this.priorElementCount[i]=Long.$add(this.priorElementCount[i - 1],this.spine[i - 1].length);
(capacity=Long.$add(capacity,(nextChunkSize)));
}
}});

Clazz.newMeth(C$, 'increaseCapacity$',  function () {
this.ensureCapacity$J(Long.$add(this.capacity$(),1));
});

Clazz.newMeth(C$, 'get$J',  function (index) {
if (this.spineIndex == 0) {
if (Long.$lt(index,this.elementIndex )) return this.curChunk[(Long.$ival(index))];
 else throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[Long.toString$J(index)]);
}if (Long.$ge(index,this.count$() )) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[Long.toString$J(index)]);
for (var j=0; j <= this.spineIndex; j++) if (Long.$lt(index,Long.$add(this.priorElementCount[j],this.spine[j].length) )) return this.spine[j][(Long.$ival((Long.$sub(index,this.priorElementCount[j]))))];

throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[Long.toString$J(index)]);
});

Clazz.newMeth(C$, 'copyInto$OA$I',  function (array, offset) {
var finalOffset=Long.$add(offset,this.count$());
if (Long.$gt(finalOffset,array.length ) || Long.$lt(finalOffset,offset ) ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["does not fit"]);
}if (this.spineIndex == 0) System.arraycopy$O$I$O$I$I(this.curChunk, 0, array, offset, this.elementIndex);
 else {
for (var i=0; i < this.spineIndex; i++) {
System.arraycopy$O$I$O$I$I(this.spine[i], 0, array, offset, this.spine[i].length);
offset+=this.spine[i].length;
}
if (this.elementIndex > 0) System.arraycopy$O$I$O$I$I(this.curChunk, 0, array, offset, this.elementIndex);
}});

Clazz.newMeth(C$, 'asArray$java_util_function_IntFunction',  function (arrayFactory) {
var size=this.count$();
if (Long.$ge(size,2147483639 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
var result=arrayFactory.apply$I(Long.$ival(size));
this.copyInto$OA$I(result, 0);
return result;
});

Clazz.newMeth(C$, 'clear$',  function () {
if (this.spine != null ) {
this.curChunk=this.spine[0];
for (var i=0; i < this.curChunk.length; i++) this.curChunk[i]=null;

this.spine=null;
this.priorElementCount=null;
} else {
for (var i=0; i < this.elementIndex; i++) this.curChunk[i]=null;

}this.elementIndex=0;
this.spineIndex=0;
});

Clazz.newMeth(C$, 'iterator$',  function () {
return $I$(3,"iterator$java_util_Spliterator",[this.spliterator$()]);
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer',  function (consumer) {
for (var j=0; j < this.spineIndex; j++) for (var t, $t = 0, $$t = this.spine[j]; $t<$$t.length&&((t=($$t[$t])),1);$t++) consumer.accept$O(t);


for (var i=0; i < this.elementIndex; i++) consumer.accept$O(this.curChunk[i]);

});

Clazz.newMeth(C$, 'accept$O',  function (e) {
if (this.elementIndex == this.curChunk.length) {
p$2.inflateSpine.apply(this, []);
if (this.spineIndex + 1 >= this.spine.length || this.spine[this.spineIndex + 1] == null  ) this.increaseCapacity$();
this.elementIndex=0;
++this.spineIndex;
this.curChunk=this.spine[this.spineIndex];
}this.curChunk[this.elementIndex++]=e;
});

Clazz.newMeth(C$, 'toString',  function () {
var list=Clazz.new_($I$(5,1));
this.forEach$java_util_function_Consumer((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "SpinedBuffer$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$O',  function (t) { return $$.add$O.apply($$,[t])});
})()
)); return Clazz.new_(P$.SpinedBuffer$lambda1.$init$,[this, null])})(list));
return "SpinedBuffer:" + list.toString();
});

Clazz.newMeth(C$, 'spliterator$',  function () {
return Clazz.new_(P$.SpinedBuffer$1Splitr.$init$,[this, null]);
});
;
(function(){/*l*/var C$=Clazz.newClass(P$, "SpinedBuffer$1Splitr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Spliterator', 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['splSpineIndex','lastSpineIndex','splElementIndex','lastSpineElementFence'],'O',['splChunk','_.E[]']]]

Clazz.newMeth(C$, 'c$$I$I$I$I',  function (firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence) {
;C$.$init$.apply(this);
this.splSpineIndex=firstSpineIndex;
this.lastSpineIndex=lastSpineIndex;
this.splElementIndex=firstSpineElementIndex;
this.lastSpineElementFence=lastSpineElementFence;
Clazz.assert(C$, this, function(){return this.b$['java.util.stream.SpinedBuffer'].spine != null  || firstSpineIndex == 0 && lastSpineIndex == 0  });
this.splChunk=(this.b$['java.util.stream.SpinedBuffer'].spine == null ) ? this.b$['java.util.stream.SpinedBuffer'].curChunk : this.b$['java.util.stream.SpinedBuffer'].spine[firstSpineIndex];
}, 1);

Clazz.newMeth(C$, 'estimateSize$',  function () {
return (this.splSpineIndex == this.lastSpineIndex) ? Long.$sub(this.lastSpineElementFence,this.splElementIndex) : Long.$sub(Long.$sub(Long.$add(this.b$['java.util.stream.SpinedBuffer'].priorElementCount[this.lastSpineIndex],this.lastSpineElementFence),this.b$['java.util.stream.SpinedBuffer'].priorElementCount[this.splSpineIndex]),this.splElementIndex);
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return 16464;
});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer',  function (consumer) {
$I$(1).requireNonNull$O(consumer);
if (this.splSpineIndex < this.lastSpineIndex || (this.splSpineIndex == this.lastSpineIndex && this.splElementIndex < this.lastSpineElementFence ) ) {
consumer.accept$O(this.splChunk[this.splElementIndex++]);
if (this.splElementIndex == this.splChunk.length) {
this.splElementIndex=0;
++this.splSpineIndex;
if (this.b$['java.util.stream.SpinedBuffer'].spine != null  && this.splSpineIndex <= this.lastSpineIndex ) this.splChunk=this.b$['java.util.stream.SpinedBuffer'].spine[this.splSpineIndex];
}return true;
}return false;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (consumer) {
$I$(1).requireNonNull$O(consumer);
if (this.splSpineIndex < this.lastSpineIndex || (this.splSpineIndex == this.lastSpineIndex && this.splElementIndex < this.lastSpineElementFence ) ) {
var i=this.splElementIndex;
for (var sp=this.splSpineIndex; sp < this.lastSpineIndex; sp++) {
var chunk=this.b$['java.util.stream.SpinedBuffer'].spine[sp];
for (; i < chunk.length; i++) {
consumer.accept$O(chunk[i]);
}
i=0;
}
var chunk=(this.splSpineIndex == this.lastSpineIndex) ? this.splChunk : this.b$['java.util.stream.SpinedBuffer'].spine[this.lastSpineIndex];
var hElementIndex=this.lastSpineElementFence;
for (; i < hElementIndex; i++) {
consumer.accept$O(chunk[i]);
}
this.splSpineIndex=this.lastSpineIndex;
this.splElementIndex=this.lastSpineElementFence;
}});

Clazz.newMeth(C$, 'trySplit$',  function () {
if (this.splSpineIndex < this.lastSpineIndex) {
var ret=Clazz.new_(P$.SpinedBuffer$1Splitr.$init$,[this, null]);
this.splSpineIndex=this.lastSpineIndex;
this.splElementIndex=0;
this.splChunk=this.b$['java.util.stream.SpinedBuffer'].spine[this.splSpineIndex];
return ret;
} else if (this.splSpineIndex == this.lastSpineIndex) {
var t=((this.lastSpineElementFence - this.splElementIndex)/2|0);
if (t == 0) return null;
 else {
var ret=$I$(2).spliterator$OA$I$I(this.splChunk, this.splElementIndex, this.splElementIndex + t);
this.splElementIndex+=t;
return ret;
}} else {
return null;
}});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SpinedBuffer, "OfPrimitive", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.AbstractSpinedBuffer', 'Iterable');
C$.$classes$=[['BaseSpliterator',1024]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['curChunk','<T_ARR>','spine','_.T_ARR[]']]]

Clazz.newMeth(C$, 'c$$I',  function (initialCapacity) {
;C$.superclazz.c$$I.apply(this,[initialCapacity]);C$.$init$.apply(this);
this.curChunk=this.newArray$I(1 << this.initialChunkPower);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.curChunk=this.newArray$I(1 << this.initialChunkPower);
}, 1);

Clazz.newMeth(C$, 'capacity$',  function () {
return (this.spineIndex == 0) ? this.arrayLength$O(this.curChunk) : Long.$add(this.priorElementCount[this.spineIndex],this.arrayLength$O(this.spine[this.spineIndex]));
});

Clazz.newMeth(C$, 'inflateSpine',  function () {
if (this.spine == null ) {
this.spine=this.newArrayArray$I(8);
this.priorElementCount=Clazz.array(Long.TYPE, [8]);
this.spine[0]=this.curChunk;
}}, p$1);

Clazz.newMeth(C$, 'ensureCapacity$J',  function (targetSize) {
var capacity=this.capacity$();
if (Long.$gt(targetSize,capacity )) {
p$1.inflateSpine.apply(this, []);
for (var i=this.spineIndex + 1; Long.$gt(targetSize,capacity ); i++) {
if (i >= this.spine.length) {
var newSpineSize=this.spine.length * 2;
this.spine=$I$(2).copyOf$OA$I(this.spine, newSpineSize);
this.priorElementCount=$I$(2).copyOf$JA$I(this.priorElementCount, newSpineSize);
}var nextChunkSize=this.chunkSize$I(i);
this.spine[i]=this.newArray$I(nextChunkSize);
this.priorElementCount[i]=Long.$add(this.priorElementCount[i - 1],this.arrayLength$O(this.spine[i - 1]));
(capacity=Long.$add(capacity,(nextChunkSize)));
}
}});

Clazz.newMeth(C$, 'increaseCapacity$',  function () {
this.ensureCapacity$J(Long.$add(this.capacity$(),1));
});

Clazz.newMeth(C$, 'chunkFor$J',  function (index) {
if (this.spineIndex == 0) {
if (Long.$lt(index,this.elementIndex )) return 0;
 else throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[Long.toString$J(index)]);
}if (Long.$ge(index,this.count$() )) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[Long.toString$J(index)]);
for (var j=0; j <= this.spineIndex; j++) if (Long.$lt(index,Long.$add(this.priorElementCount[j],this.arrayLength$O(this.spine[j])) )) return j;

throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[Long.toString$J(index)]);
});

Clazz.newMeth(C$, 'copyInto$O$I',  function (array, offset) {
var finalOffset=Long.$add(offset,this.count$());
if (Long.$gt(finalOffset,this.arrayLength$O(array) ) || Long.$lt(finalOffset,offset ) ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["does not fit"]);
}if (this.spineIndex == 0) System.arraycopy$O$I$O$I$I(this.curChunk, 0, array, offset, this.elementIndex);
 else {
for (var i=0; i < this.spineIndex; i++) {
System.arraycopy$O$I$O$I$I(this.spine[i], 0, array, offset, this.arrayLength$O(this.spine[i]));
offset+=this.arrayLength$O(this.spine[i]);
}
if (this.elementIndex > 0) System.arraycopy$O$I$O$I$I(this.curChunk, 0, array, offset, this.elementIndex);
}});

Clazz.newMeth(C$, 'asPrimitiveArray$',  function () {
var size=this.count$();
if (Long.$ge(size,2147483639 )) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stream size exceeds max array size"]);
var result=this.newArray$I(Long.$ival(size));
this.copyInto$O$I(result, 0);
return result;
});

Clazz.newMeth(C$, 'preAccept$',  function () {
if (this.elementIndex == this.arrayLength$O(this.curChunk)) {
p$1.inflateSpine.apply(this, []);
if (this.spineIndex + 1 >= this.spine.length || this.spine[this.spineIndex + 1] == null  ) this.increaseCapacity$();
this.elementIndex=0;
++this.spineIndex;
this.curChunk=this.spine[this.spineIndex];
}});

Clazz.newMeth(C$, 'clear$',  function () {
if (this.spine != null ) {
this.curChunk=this.spine[0];
this.spine=null;
this.priorElementCount=null;
}this.elementIndex=0;
this.spineIndex=0;
});

Clazz.newMeth(C$, 'forEach$O',  function (consumer) {
for (var j=0; j < this.spineIndex; j++) this.arrayForEach$O$I$I$O(this.spine[j], 0, this.arrayLength$O(this.spine[j]), consumer);

this.arrayForEach$O$I$I$O(this.curChunk, 0, this.elementIndex, consumer);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.SpinedBuffer.OfPrimitive, "BaseSpliterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['java.util.Spliterator','java.util.Spliterator.OfPrimitive']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['splSpineIndex','lastSpineIndex','splElementIndex','lastSpineElementFence'],'O',['splChunk','<T_ARR>']]]

Clazz.newMeth(C$, 'c$$I$I$I$I',  function (firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence) {
;C$.$init$.apply(this);
this.splSpineIndex=firstSpineIndex;
this.lastSpineIndex=lastSpineIndex;
this.splElementIndex=firstSpineElementIndex;
this.lastSpineElementFence=lastSpineElementFence;
Clazz.assert(C$, this, function(){return this.b$['java.util.stream.SpinedBuffer.OfPrimitive'].spine != null  || firstSpineIndex == 0 && lastSpineIndex == 0  });
this.splChunk=(this.b$['java.util.stream.SpinedBuffer.OfPrimitive'].spine == null ) ? this.b$['java.util.stream.SpinedBuffer.OfPrimitive'].curChunk : this.b$['java.util.stream.SpinedBuffer.OfPrimitive'].spine[firstSpineIndex];
}, 1);

Clazz.newMeth(C$, 'estimateSize$',  function () {
return (this.splSpineIndex == this.lastSpineIndex) ? Long.$sub(this.lastSpineElementFence,this.splElementIndex) : Long.$sub(Long.$sub(Long.$add(this.b$['java.util.stream.SpinedBuffer.OfPrimitive'].priorElementCount[this.lastSpineIndex],this.lastSpineElementFence),this.b$['java.util.stream.SpinedBuffer.OfPrimitive'].priorElementCount[this.splSpineIndex]),this.splElementIndex);
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return 16464;
});

Clazz.newMeth(C$, 'tryAdvance$O',  function (consumer) {
$I$(1).requireNonNull$O(consumer);
if (this.splSpineIndex < this.lastSpineIndex || (this.splSpineIndex == this.lastSpineIndex && this.splElementIndex < this.lastSpineElementFence ) ) {
this.arrayForOne$O$I$O(this.splChunk, this.splElementIndex++, consumer);
if (this.splElementIndex == this.b$['java.util.stream.SpinedBuffer.OfPrimitive'].arrayLength$O.apply(this.b$['java.util.stream.SpinedBuffer.OfPrimitive'], [this.splChunk])) {
this.splElementIndex=0;
++this.splSpineIndex;
if (this.b$['java.util.stream.SpinedBuffer.OfPrimitive'].spine != null  && this.splSpineIndex <= this.lastSpineIndex ) this.splChunk=this.b$['java.util.stream.SpinedBuffer.OfPrimitive'].spine[this.splSpineIndex];
}return true;
}return false;
});

Clazz.newMeth(C$, 'forEachRemaining$O',  function (consumer) {
$I$(1).requireNonNull$O(consumer);
if (this.splSpineIndex < this.lastSpineIndex || (this.splSpineIndex == this.lastSpineIndex && this.splElementIndex < this.lastSpineElementFence ) ) {
var i=this.splElementIndex;
for (var sp=this.splSpineIndex; sp < this.lastSpineIndex; sp++) {
var chunk=this.b$['java.util.stream.SpinedBuffer.OfPrimitive'].spine[sp];
this.b$['java.util.stream.SpinedBuffer.OfPrimitive'].arrayForEach$O$I$I$O.apply(this.b$['java.util.stream.SpinedBuffer.OfPrimitive'], [chunk, i, this.b$['java.util.stream.SpinedBuffer.OfPrimitive'].arrayLength$O.apply(this.b$['java.util.stream.SpinedBuffer.OfPrimitive'], [chunk]), consumer]);
i=0;
}
var chunk=(this.splSpineIndex == this.lastSpineIndex) ? this.splChunk : this.b$['java.util.stream.SpinedBuffer.OfPrimitive'].spine[this.lastSpineIndex];
this.b$['java.util.stream.SpinedBuffer.OfPrimitive'].arrayForEach$O$I$I$O.apply(this.b$['java.util.stream.SpinedBuffer.OfPrimitive'], [chunk, i, this.lastSpineElementFence, consumer]);
this.splSpineIndex=this.lastSpineIndex;
this.splElementIndex=this.lastSpineElementFence;
}});

Clazz.newMeth(C$, 'trySplit$',  function () {
if (this.splSpineIndex < this.lastSpineIndex) {
var ret=this.newSpliterator$I$I$I$I(this.splSpineIndex, this.lastSpineIndex - 1, this.splElementIndex, this.b$['java.util.stream.SpinedBuffer.OfPrimitive'].arrayLength$O.apply(this.b$['java.util.stream.SpinedBuffer.OfPrimitive'], [this.b$['java.util.stream.SpinedBuffer.OfPrimitive'].spine[this.lastSpineIndex - 1]]));
this.splSpineIndex=this.lastSpineIndex;
this.splElementIndex=0;
this.splChunk=this.b$['java.util.stream.SpinedBuffer.OfPrimitive'].spine[this.splSpineIndex];
return ret;
} else if (this.splSpineIndex == this.lastSpineIndex) {
var t=((this.lastSpineElementFence - this.splElementIndex)/2|0);
if (t == 0) return null;
 else {
var ret=this.arraySpliterator$O$I$I(this.splChunk, this.splElementIndex, t);
this.splElementIndex+=t;
return ret;
}} else {
return null;
}});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SpinedBuffer, "OfInt", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.SpinedBuffer','.OfPrimitive'], 'java.util.function.IntConsumer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (initialCapacity) {
;C$.superclazz.c$$I.apply(this,[initialCapacity]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer',  function (consumer) {
if (Clazz.instanceOf(consumer, "java.util.function.IntConsumer")) {
this.forEach$O(consumer);
} else {
this.spliterator$().forEachRemaining$java_util_function_Consumer(consumer);
}});

Clazz.newMeth(C$, 'newArrayArray$I',  function (size) {
return Clazz.array(Integer.TYPE, [size, null]);
});

Clazz.newMeth(C$, 'newArray$I',  function (size) {
return Clazz.array(Integer.TYPE, [size]);
});

Clazz.newMeth(C$, ['arrayLength$IA','arrayLength$O'],  function (array) {
return array.length;
});

Clazz.newMeth(C$, ['arrayForEach$IA$I$I$java_util_function_IntConsumer','arrayForEach$O$I$I$O'],  function (array, from, to, consumer) {
for (var i=from; i < to; i++) consumer.accept$I(array[i]);

});

Clazz.newMeth(C$, 'accept$I',  function (i) {
this.preAccept$();
this.curChunk[this.elementIndex++]=i;
});

Clazz.newMeth(C$, 'get$J',  function (index) {
var ch=this.chunkFor$J(index);
if (this.spineIndex == 0 && ch == 0 ) return this.curChunk[Long.$ival(index)];
 else return this.spine[ch][Long.$ival((Long.$sub(index,this.priorElementCount[ch])))];
});

Clazz.newMeth(C$, 'iterator$',  function () {
return $I$(3,"iterator$java_util_Spliterator_OfInt",[this.spliterator$()]);
});

Clazz.newMeth(C$, 'spliterator$',  function () {
return Clazz.new_($I$(4,1).c$$I$I$I$I,[this, null, 0, this.spineIndex, 0, this.elementIndex],P$.SpinedBuffer$OfInt$1Splitr);
});

Clazz.newMeth(C$, 'toString',  function () {
var array=this.asPrimitiveArray$();
if (array.length < 200) {
return String.format$S$OA("%s[length=%d, chunks=%d]%s", Clazz.array(java.lang.Object, -1, [this.getClass$().getSimpleName$(), Integer.valueOf$I(array.length), Integer.valueOf$I(this.spineIndex), $I$(2).toString$IA(array)]));
} else {
var array2=$I$(2).copyOf$IA$I(array, 200);
return String.format$S$OA("%s[length=%d, chunks=%d]%s...", Clazz.array(java.lang.Object, -1, [this.getClass$().getSimpleName$(), Integer.valueOf$I(array.length), Integer.valueOf$I(this.spineIndex), $I$(2).toString$IA(array2)]));
}});
;
(function(){/*l*/var C$=Clazz.newClass(P$, "SpinedBuffer$OfInt$1Splitr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.stream.SpinedBuffer','.OfPrimitive','.BaseSpliterator'], [['java.util.Spliterator','java.util.Spliterator.OfInt']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I$I$I$I',  function (firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence) {
;C$.superclazz.c$$I$I$I$I.apply(this,[firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'newSpliterator$I$I$I$I',  function (firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence) {
return Clazz.new_($I$(4,1).c$$I$I$I$I,[this, null, firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence],C$);
});

Clazz.newMeth(C$, ['arrayForOne$IA$I$java_util_function_IntConsumer','arrayForOne$O$I$O'],  function (array, index, consumer) {
consumer.accept$I(array[index]);
});

Clazz.newMeth(C$, ['arraySpliterator$IA$I$I','arraySpliterator$O$I$I'],  function (array, offset, len) {
return $I$(2).spliterator$IA$I$I(array, offset, offset + len);
});

Clazz.newMeth(C$);
})()
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SpinedBuffer, "OfLong", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.SpinedBuffer','.OfPrimitive'], 'java.util.function.LongConsumer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (initialCapacity) {
;C$.superclazz.c$$I.apply(this,[initialCapacity]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer',  function (consumer) {
if (Clazz.instanceOf(consumer, "java.util.function.LongConsumer")) {
this.forEach$O(consumer);
} else {
this.spliterator$().forEachRemaining$java_util_function_Consumer(consumer);
}});

Clazz.newMeth(C$, 'newArrayArray$I',  function (size) {
return Clazz.array(Long.TYPE, [size, null]);
});

Clazz.newMeth(C$, 'newArray$I',  function (size) {
return Clazz.array(Long.TYPE, [size]);
});

Clazz.newMeth(C$, ['arrayLength$JA','arrayLength$O'],  function (array) {
return array.length;
});

Clazz.newMeth(C$, ['arrayForEach$JA$I$I$java_util_function_LongConsumer','arrayForEach$O$I$I$O'],  function (array, from, to, consumer) {
for (var i=from; i < to; i++) consumer.accept$J(array[i]);

});

Clazz.newMeth(C$, 'accept$J',  function (i) {
this.preAccept$();
this.curChunk[this.elementIndex++]=i;
});

Clazz.newMeth(C$, 'get$J',  function (index) {
var ch=this.chunkFor$J(index);
if (this.spineIndex == 0 && ch == 0 ) return this.curChunk[Long.$ival(index)];
 else return this.spine[ch][Long.$ival((Long.$sub(index,this.priorElementCount[ch])))];
});

Clazz.newMeth(C$, 'iterator$',  function () {
return $I$(3,"iterator$java_util_Spliterator_OfLong",[this.spliterator$()]);
});

Clazz.newMeth(C$, 'spliterator$',  function () {
return Clazz.new_($I$(4,1).c$$I$I$I$I,[this, null, 0, this.spineIndex, 0, this.elementIndex],P$.SpinedBuffer$OfLong$1Splitr);
});

Clazz.newMeth(C$, 'toString',  function () {
var array=this.asPrimitiveArray$();
if (array.length < 200) {
return String.format$S$OA("%s[length=%d, chunks=%d]%s", Clazz.array(java.lang.Object, -1, [this.getClass$().getSimpleName$(), Integer.valueOf$I(array.length), Integer.valueOf$I(this.spineIndex), $I$(2).toString$JA(array)]));
} else {
var array2=$I$(2).copyOf$JA$I(array, 200);
return String.format$S$OA("%s[length=%d, chunks=%d]%s...", Clazz.array(java.lang.Object, -1, [this.getClass$().getSimpleName$(), Integer.valueOf$I(array.length), Integer.valueOf$I(this.spineIndex), $I$(2).toString$JA(array2)]));
}});
;
(function(){/*l*/var C$=Clazz.newClass(P$, "SpinedBuffer$OfLong$1Splitr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.stream.SpinedBuffer','.OfPrimitive','.BaseSpliterator'], [['java.util.Spliterator','java.util.Spliterator.OfLong']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I$I$I$I',  function (firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence) {
;C$.superclazz.c$$I$I$I$I.apply(this,[firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'newSpliterator$I$I$I$I',  function (firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence) {
return Clazz.new_($I$(4,1).c$$I$I$I$I,[this, null, firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence],C$);
});

Clazz.newMeth(C$, ['arrayForOne$JA$I$java_util_function_LongConsumer','arrayForOne$O$I$O'],  function (array, index, consumer) {
consumer.accept$J(array[index]);
});

Clazz.newMeth(C$, ['arraySpliterator$JA$I$I','arraySpliterator$O$I$I'],  function (array, offset, len) {
return $I$(2).spliterator$JA$I$I(array, offset, offset + len);
});

Clazz.newMeth(C$);
})()
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SpinedBuffer, "OfDouble", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.SpinedBuffer','.OfPrimitive'], 'java.util.function.DoubleConsumer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (initialCapacity) {
;C$.superclazz.c$$I.apply(this,[initialCapacity]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer',  function (consumer) {
if (Clazz.instanceOf(consumer, "java.util.function.DoubleConsumer")) {
this.forEach$O(consumer);
} else {
this.spliterator$().forEachRemaining$java_util_function_Consumer(consumer);
}});

Clazz.newMeth(C$, 'newArrayArray$I',  function (size) {
return Clazz.array(Double.TYPE, [size, null]);
});

Clazz.newMeth(C$, 'newArray$I',  function (size) {
return Clazz.array(Double.TYPE, [size]);
});

Clazz.newMeth(C$, ['arrayLength$DA','arrayLength$O'],  function (array) {
return array.length;
});

Clazz.newMeth(C$, ['arrayForEach$DA$I$I$java_util_function_DoubleConsumer','arrayForEach$O$I$I$O'],  function (array, from, to, consumer) {
for (var i=from; i < to; i++) consumer.accept$D(array[i]);

});

Clazz.newMeth(C$, 'accept$D',  function (i) {
this.preAccept$();
this.curChunk[this.elementIndex++]=i;
});

Clazz.newMeth(C$, 'get$J',  function (index) {
var ch=this.chunkFor$J(index);
if (this.spineIndex == 0 && ch == 0 ) return this.curChunk[Long.$ival(index)];
 else return this.spine[ch][Long.$ival((Long.$sub(index,this.priorElementCount[ch])))];
});

Clazz.newMeth(C$, 'iterator$',  function () {
return $I$(3,"iterator$java_util_Spliterator_OfDouble",[this.spliterator$()]);
});

Clazz.newMeth(C$, 'spliterator$',  function () {
return Clazz.new_($I$(4,1).c$$I$I$I$I,[this, null, 0, this.spineIndex, 0, this.elementIndex],P$.SpinedBuffer$OfDouble$1Splitr);
});

Clazz.newMeth(C$, 'toString',  function () {
var array=this.asPrimitiveArray$();
if (array.length < 200) {
return String.format$S$OA("%s[length=%d, chunks=%d]%s", Clazz.array(java.lang.Object, -1, [this.getClass$().getSimpleName$(), Integer.valueOf$I(array.length), Integer.valueOf$I(this.spineIndex), $I$(2).toString$DA(array)]));
} else {
var array2=$I$(2).copyOf$DA$I(array, 200);
return String.format$S$OA("%s[length=%d, chunks=%d]%s...", Clazz.array(java.lang.Object, -1, [this.getClass$().getSimpleName$(), Integer.valueOf$I(array.length), Integer.valueOf$I(this.spineIndex), $I$(2).toString$DA(array2)]));
}});
;
(function(){/*l*/var C$=Clazz.newClass(P$, "SpinedBuffer$OfDouble$1Splitr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.stream.SpinedBuffer','.OfPrimitive','.BaseSpliterator'], [['java.util.Spliterator','java.util.Spliterator.OfDouble']], 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I$I$I$I',  function (firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence) {
;C$.superclazz.c$$I$I$I$I.apply(this,[firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'newSpliterator$I$I$I$I',  function (firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence) {
return Clazz.new_($I$(4,1).c$$I$I$I$I,[this, null, firstSpineIndex, lastSpineIndex, firstSpineElementIndex, lastSpineElementFence],C$);
});

Clazz.newMeth(C$, ['arrayForOne$DA$I$java_util_function_DoubleConsumer','arrayForOne$O$I$O'],  function (array, index, consumer) {
consumer.accept$D(array[index]);
});

Clazz.newMeth(C$, ['arraySpliterator$DA$I$I','arraySpliterator$O$I$I'],  function (array, offset, len) {
return $I$(2).spliterator$DA$I$I(array, offset, offset + len);
});

Clazz.newMeth(C$);
})()
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:42 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
