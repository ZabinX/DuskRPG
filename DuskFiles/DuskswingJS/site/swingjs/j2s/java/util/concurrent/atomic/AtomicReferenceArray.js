(function(){var P$=Clazz.newPackage("java.util.concurrent.atomic"),p$1={},I$=[[0,'sun.misc.Unsafe','Error','java.util.Arrays','StringBuilder','java.lang.reflect.Array']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AtomicReferenceArray", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['array','Object[]']]
,['I',['base','shift'],'J',['arrayFieldOffset'],'O',['unsafe','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'checkedByteOffset$I',  function (i) {
if (i < 0 || i >= this.array.length ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["index " + i]);
return C$.byteOffset$I(i);
}, p$1);

Clazz.newMeth(C$, 'byteOffset$I',  function (i) {
return Long.$add((Long.$sl(i,C$.shift)),C$.base);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (length) {
;C$.$init$.apply(this);
this.array=Clazz.array(java.lang.Object, [length]);
}, 1);

Clazz.newMeth(C$, 'c$$OA',  function (array) {
;C$.$init$.apply(this);
this.array=$I$(3,"copyOf$OA$I$Class",[array, array.length, Clazz.array(java.lang.Object, -1)]);
}, 1);

Clazz.newMeth(C$, 'length$',  function () {
return this.array.length;
});

Clazz.newMeth(C$, 'get$I',  function (i) {
return p$1.getRaw$J.apply(this, [p$1.checkedByteOffset$I.apply(this, [i])]);
});

Clazz.newMeth(C$, 'getRaw$J',  function (offset) {
return C$.unsafe.getObjectVolatile$O$J(this.array, offset);
}, p$1);

Clazz.newMeth(C$, 'set$I$O',  function (i, newValue) {
C$.unsafe.putObjectVolatile$O$J$O(this.array, p$1.checkedByteOffset$I.apply(this, [i]), newValue);
});

Clazz.newMeth(C$, 'lazySet$I$O',  function (i, newValue) {
C$.unsafe.putOrderedObject$O$J$O(this.array, p$1.checkedByteOffset$I.apply(this, [i]), newValue);
});

Clazz.newMeth(C$, 'getAndSet$I$O',  function (i, newValue) {
return C$.unsafe.getAndSetObject$O$J$O(this.array, p$1.checkedByteOffset$I.apply(this, [i]), newValue);
});

Clazz.newMeth(C$, 'compareAndSet$I$O$O',  function (i, expect, update) {
return p$1.compareAndSetRaw$J$O$O.apply(this, [p$1.checkedByteOffset$I.apply(this, [i]), expect, update]);
});

Clazz.newMeth(C$, 'compareAndSetRaw$J$O$O',  function (offset, expect, update) {
return C$.unsafe.compareAndSwapObject$O$J$O$O(this.array, offset, expect, update);
}, p$1);

Clazz.newMeth(C$, 'weakCompareAndSet$I$O$O',  function (i, expect, update) {
return this.compareAndSet$I$O$O(i, expect, update);
});

Clazz.newMeth(C$, 'getAndUpdate$I$java_util_function_UnaryOperator',  function (i, updateFunction) {
var offset=p$1.checkedByteOffset$I.apply(this, [i]);
var prev;
var next;
do {
prev=p$1.getRaw$J.apply(this, [offset]);
next=updateFunction.apply$O(prev);
} while (!p$1.compareAndSetRaw$J$O$O.apply(this, [offset, prev, next]));
return prev;
});

Clazz.newMeth(C$, 'updateAndGet$I$java_util_function_UnaryOperator',  function (i, updateFunction) {
var offset=p$1.checkedByteOffset$I.apply(this, [i]);
var prev;
var next;
do {
prev=p$1.getRaw$J.apply(this, [offset]);
next=updateFunction.apply$O(prev);
} while (!p$1.compareAndSetRaw$J$O$O.apply(this, [offset, prev, next]));
return next;
});

Clazz.newMeth(C$, 'getAndAccumulate$I$O$java_util_function_BinaryOperator',  function (i, x, accumulatorFunction) {
var offset=p$1.checkedByteOffset$I.apply(this, [i]);
var prev;
var next;
do {
prev=p$1.getRaw$J.apply(this, [offset]);
next=accumulatorFunction.apply$O$O(prev, x);
} while (!p$1.compareAndSetRaw$J$O$O.apply(this, [offset, prev, next]));
return prev;
});

Clazz.newMeth(C$, 'accumulateAndGet$I$O$java_util_function_BinaryOperator',  function (i, x, accumulatorFunction) {
var offset=p$1.checkedByteOffset$I.apply(this, [i]);
var prev;
var next;
do {
prev=p$1.getRaw$J.apply(this, [offset]);
next=accumulatorFunction.apply$O$O(prev, x);
} while (!p$1.compareAndSetRaw$J$O$O.apply(this, [offset, prev, next]));
return next;
});

Clazz.newMeth(C$, 'toString',  function () {
var iMax=this.array.length - 1;
if (iMax == -1) return "[]";
var b=Clazz.new_($I$(4,1));
b.append$C("[");
for (var i=0; ; i++) {
b.append$O(p$1.getRaw$J.apply(this, [C$.byteOffset$I(i)]));
if (i == iMax) return b.append$C("]").toString();
b.append$C(",").append$C(" ");
}
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
var a=s.readFields$().get$S$O("array", null);
if (a == null  || !a.getClass$().isArray$() ) throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Not array type"]);
if (a.getClass$() !== Clazz.array(java.lang.Object, -1) ) a=$I$(3,"copyOf$OA$I$Class",[a, $I$(5).getLength$O(a), Clazz.array(java.lang.Object, -1)]);
C$.unsafe.putObjectVolatile$O$J$O(this, C$.arrayFieldOffset, a);
}, p$1);

C$.$static$=function(){C$.$static$=0;
{
try {
C$.unsafe=$I$(1).getUnsafe$();
C$.arrayFieldOffset=C$.unsafe.objectFieldOffset$java_lang_reflect_Field(Clazz.getClass(C$).getDeclaredField$S("array"));
C$.base=C$.unsafe.arrayBaseOffset$Class(Clazz.array(java.lang.Object, -1));
var scale=C$.unsafe.arrayIndexScale$Class(Clazz.array(java.lang.Object, -1));
if ((scale & (scale - 1)) != 0) throw Clazz.new_($I$(2,1).c$$S,["data type scale not a power of two"]);
C$.shift=31 - Integer.numberOfLeadingZeros$I(scale);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_($I$(2,1).c$$Throwable,[e]);
} else {
throw e;
}
}
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
