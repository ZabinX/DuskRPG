(function(){var P$=Clazz.newPackage("java.util.concurrent.atomic"),I$=[[0,'sun.misc.Unsafe','Error']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AtomicReference", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['value','<V>']]
,['J',['valueOffset'],'O',['unsafe','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'c$$O',  function (initialValue) {
;C$.$init$.apply(this);
this.value=initialValue;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'get$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'set$O',  function (newValue) {
this.value=newValue;
});

Clazz.newMeth(C$, 'lazySet$O',  function (newValue) {
C$.unsafe.putOrderedObject$O$J$O(this, C$.valueOffset, newValue);
});

Clazz.newMeth(C$, 'compareAndSet$O$O',  function (expect, update) {
return C$.unsafe.compareAndSwapObject$O$J$O$O(this, C$.valueOffset, expect, update);
});

Clazz.newMeth(C$, 'weakCompareAndSet$O$O',  function (expect, update) {
return C$.unsafe.compareAndSwapObject$O$J$O$O(this, C$.valueOffset, expect, update);
});

Clazz.newMeth(C$, 'getAndSet$O',  function (newValue) {
return C$.unsafe.getAndSetObject$O$J$O(this, C$.valueOffset, newValue);
});

Clazz.newMeth(C$, 'getAndUpdate$java_util_function_UnaryOperator',  function (updateFunction) {
var prev;
var next;
do {
prev=this.get$();
next=updateFunction.apply$O(prev);
} while (!this.compareAndSet$O$O(prev, next));
return prev;
});

Clazz.newMeth(C$, 'updateAndGet$java_util_function_UnaryOperator',  function (updateFunction) {
var prev;
var next;
do {
prev=this.get$();
next=updateFunction.apply$O(prev);
} while (!this.compareAndSet$O$O(prev, next));
return next;
});

Clazz.newMeth(C$, 'getAndAccumulate$O$java_util_function_BinaryOperator',  function (x, accumulatorFunction) {
var prev;
var next;
do {
prev=this.get$();
next=accumulatorFunction.apply$O$O(prev, x);
} while (!this.compareAndSet$O$O(prev, next));
return prev;
});

Clazz.newMeth(C$, 'accumulateAndGet$O$java_util_function_BinaryOperator',  function (x, accumulatorFunction) {
var prev;
var next;
do {
prev=this.get$();
next=accumulatorFunction.apply$O$O(prev, x);
} while (!this.compareAndSet$O$O(prev, next));
return next;
});

Clazz.newMeth(C$, 'toString',  function () {
return String.valueOf$O(this.get$());
});

C$.$static$=function(){C$.$static$=0;
C$.unsafe=$I$(1).getUnsafe$();
{
try {
C$.valueOffset=C$.unsafe.objectFieldOffset$java_lang_reflect_Field(Clazz.getClass(C$).getDeclaredField$S("value"));
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
throw Clazz.new_($I$(2,1).c$$Throwable,[ex]);
} else {
throw ex;
}
}
};
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
