(function(){var P$=Clazz.newPackage("java.util.concurrent.atomic"),p$1={},I$=[[0,'sun.misc.Unsafe',['java.util.concurrent.atomic.AtomicStampedReference','.Pair'],'NoSuchFieldError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AtomicStampedReference", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Pair',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['pair','java.util.concurrent.atomic.AtomicStampedReference.Pair']]
,['J',['pairOffset'],'O',['UNSAFE','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'c$$O$I',  function (initialRef, initialStamp) {
;C$.$init$.apply(this);
this.pair=$I$(2).of$O$I(initialRef, initialStamp);
}, 1);

Clazz.newMeth(C$, 'getReference$',  function () {
return this.pair.reference;
});

Clazz.newMeth(C$, 'getStamp$',  function () {
return this.pair.stamp;
});

Clazz.newMeth(C$, 'get$IA',  function (stampHolder) {
var pair=this.pair;
stampHolder[0]=pair.stamp;
return pair.reference;
});

Clazz.newMeth(C$, 'weakCompareAndSet$O$O$I$I',  function (expectedReference, newReference, expectedStamp, newStamp) {
return this.compareAndSet$O$O$I$I(expectedReference, newReference, expectedStamp, newStamp);
});

Clazz.newMeth(C$, 'compareAndSet$O$O$I$I',  function (expectedReference, newReference, expectedStamp, newStamp) {
var current=this.pair;
return expectedReference === current.reference  && expectedStamp == current.stamp  && ((newReference === current.reference  && newStamp == current.stamp ) || p$1.casPair$java_util_concurrent_atomic_AtomicStampedReference_Pair$java_util_concurrent_atomic_AtomicStampedReference_Pair.apply(this, [current, $I$(2).of$O$I(newReference, newStamp)]) ) ;
});

Clazz.newMeth(C$, 'set$O$I',  function (newReference, newStamp) {
var current=this.pair;
if (newReference !== current.reference  || newStamp != current.stamp ) this.pair=$I$(2).of$O$I(newReference, newStamp);
});

Clazz.newMeth(C$, 'attemptStamp$O$I',  function (expectedReference, newStamp) {
var current=this.pair;
return expectedReference === current.reference  && (newStamp == current.stamp || p$1.casPair$java_util_concurrent_atomic_AtomicStampedReference_Pair$java_util_concurrent_atomic_AtomicStampedReference_Pair.apply(this, [current, $I$(2).of$O$I(expectedReference, newStamp)]) ) ;
});

Clazz.newMeth(C$, 'casPair$java_util_concurrent_atomic_AtomicStampedReference_Pair$java_util_concurrent_atomic_AtomicStampedReference_Pair',  function (cmp, val) {
return C$.UNSAFE.compareAndSwapObject$O$J$O$O(this, C$.pairOffset, cmp, val);
}, p$1);

Clazz.newMeth(C$, 'objectFieldOffset$sun_misc_Unsafe$S$Class',  function (UNSAFE, field, klazz) {
try {
return UNSAFE.objectFieldOffset$java_lang_reflect_Field(klazz.getDeclaredField$S(field));
} catch (e) {
if (Clazz.exceptionOf(e,"NoSuchFieldException")){
var error=Clazz.new_($I$(3,1).c$$S,[field]);
error.initCause$Throwable(e);
throw error;
} else {
throw e;
}
}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.UNSAFE=$I$(1).getUnsafe$();
C$.pairOffset=C$.objectFieldOffset$sun_misc_Unsafe$S$Class(C$.UNSAFE, "pair", Clazz.getClass(C$));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.AtomicStampedReference, "Pair", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['stamp'],'O',['reference','<T>']]]

Clazz.newMeth(C$, 'c$$O$I',  function (reference, stamp) {
;C$.$init$.apply(this);
this.reference=reference;
this.stamp=stamp;
}, 1);

Clazz.newMeth(C$, 'of$O$I',  function (reference, stamp) {
return Clazz.new_(C$.c$$O$I,[reference, stamp]);
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
