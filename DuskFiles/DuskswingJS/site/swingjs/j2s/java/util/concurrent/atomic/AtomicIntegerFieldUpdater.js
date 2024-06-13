(function(){var P$=Clazz.newPackage("java.util.concurrent.atomic"),p$1={},I$=[[0,'sun.misc.Unsafe','java.security.AccessController','sun.reflect.misc.ReflectUtil','java.lang.reflect.Modifier',['java.util.concurrent.atomic.AtomicIntegerFieldUpdater','.AtomicIntegerFieldUpdaterImpl'],'sun.reflect.Reflection']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AtomicIntegerFieldUpdater", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['AtomicIntegerFieldUpdaterImpl',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'newUpdater$Class$S',  function (tclass, fieldName) {
return Clazz.new_([tclass, fieldName, $I$(6).getCallerClass$()],$I$(5,1).c$$Class$S$Class);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAndSet$O$I',  function (obj, newValue) {
var prev;
do {
prev=this.get$O(obj);
} while (!this.compareAndSet$O$I$I(obj, prev, newValue));
return prev;
});

Clazz.newMeth(C$, 'getAndIncrement$O',  function (obj) {
var prev;
var next;
do {
prev=this.get$O(obj);
next=prev + 1;
} while (!this.compareAndSet$O$I$I(obj, prev, next));
return prev;
});

Clazz.newMeth(C$, 'getAndDecrement$O',  function (obj) {
var prev;
var next;
do {
prev=this.get$O(obj);
next=prev - 1;
} while (!this.compareAndSet$O$I$I(obj, prev, next));
return prev;
});

Clazz.newMeth(C$, 'getAndAdd$O$I',  function (obj, delta) {
var prev;
var next;
do {
prev=this.get$O(obj);
next=prev + delta;
} while (!this.compareAndSet$O$I$I(obj, prev, next));
return prev;
});

Clazz.newMeth(C$, 'incrementAndGet$O',  function (obj) {
var prev;
var next;
do {
prev=this.get$O(obj);
next=prev + 1;
} while (!this.compareAndSet$O$I$I(obj, prev, next));
return next;
});

Clazz.newMeth(C$, 'decrementAndGet$O',  function (obj) {
var prev;
var next;
do {
prev=this.get$O(obj);
next=prev - 1;
} while (!this.compareAndSet$O$I$I(obj, prev, next));
return next;
});

Clazz.newMeth(C$, 'addAndGet$O$I',  function (obj, delta) {
var prev;
var next;
do {
prev=this.get$O(obj);
next=prev + delta;
} while (!this.compareAndSet$O$I$I(obj, prev, next));
return next;
});

Clazz.newMeth(C$, 'getAndUpdate$O$java_util_function_IntUnaryOperator',  function (obj, updateFunction) {
var prev;
var next;
do {
prev=this.get$O(obj);
next=updateFunction.applyAsInt$I(prev);
} while (!this.compareAndSet$O$I$I(obj, prev, next));
return prev;
});

Clazz.newMeth(C$, 'updateAndGet$O$java_util_function_IntUnaryOperator',  function (obj, updateFunction) {
var prev;
var next;
do {
prev=this.get$O(obj);
next=updateFunction.applyAsInt$I(prev);
} while (!this.compareAndSet$O$I$I(obj, prev, next));
return next;
});

Clazz.newMeth(C$, 'getAndAccumulate$O$I$java_util_function_IntBinaryOperator',  function (obj, x, accumulatorFunction) {
var prev;
var next;
do {
prev=this.get$O(obj);
next=accumulatorFunction.applyAsInt$I$I(prev, x);
} while (!this.compareAndSet$O$I$I(obj, prev, next));
return prev;
});

Clazz.newMeth(C$, 'accumulateAndGet$O$I$java_util_function_IntBinaryOperator',  function (obj, x, accumulatorFunction) {
var prev;
var next;
do {
prev=this.get$O(obj);
next=accumulatorFunction.applyAsInt$I$I(prev, x);
} while (!this.compareAndSet$O$I$I(obj, prev, next));
return next;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AtomicIntegerFieldUpdater, "AtomicIntegerFieldUpdaterImpl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.atomic.AtomicIntegerFieldUpdater');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['offset'],'O',['tclass','Class','+cclass']]
,['O',['unsafe','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'c$$Class$S$Class',  function (tclass, fieldName, $caller) {
Clazz.super_(C$, this);
var field;
var modifiers;
try {
field=$I$(2,"doPrivileged$java_security_PrivilegedExceptionAction",[((P$.AtomicIntegerFieldUpdater$AtomicIntegerFieldUpdaterImpl$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AtomicIntegerFieldUpdater$AtomicIntegerFieldUpdaterImpl$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return this.$finals$.tclass.getDeclaredField$S(this.$finals$.fieldName);
});
})()
), Clazz.new_(P$.AtomicIntegerFieldUpdater$AtomicIntegerFieldUpdaterImpl$1.$init$,[this, {tclass:tclass,fieldName:fieldName}]))]);
modifiers=field.getModifiers$();
$I$(3).ensureMemberAccess$Class$Class$O$I($caller, tclass, null, modifiers);
var cl=tclass.getClassLoader$();
var ccl=$caller.getClassLoader$();
if ((ccl != null ) && (ccl !== cl ) && ((cl == null ) || !C$.isAncestor$ClassLoader$ClassLoader(cl, ccl) )  ) {
$I$(3).checkPackageAccess$Class(tclass);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.security.PrivilegedActionException")){
var pae = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[pae.getException$()]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var ex = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[ex]);
}
} else {
throw e$$;
}
}
var fieldt=field.getType$();
if (fieldt !== Integer.TYPE ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be integer type"]);
if (!$I$(4).isVolatile$I(modifiers)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be volatile type"]);
this.cclass=($I$(4).isProtected$I(modifiers) && $caller !== tclass  ) ? $caller : null;
this.tclass=tclass;
this.offset=C$.unsafe.objectFieldOffset$java_lang_reflect_Field(field);
}, 1);

Clazz.newMeth(C$, 'isAncestor$ClassLoader$ClassLoader',  function (first, second) {
var acl=first;
do {
acl=acl.getParent$();
if (second === acl ) {
return true;
}} while (acl != null );
return false;
}, 1);

Clazz.newMeth(C$, 'fullCheck$O',  function (obj) {
if (!this.tclass.isInstance$O(obj)) throw Clazz.new_(Clazz.load('ClassCastException'));
if (this.cclass != null ) p$1.ensureProtectedAccess$O.apply(this, [obj]);
}, p$1);

Clazz.newMeth(C$, 'compareAndSet$O$I$I',  function (obj, expect, update) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$O.apply(this, [obj]);
return C$.unsafe.compareAndSwapInt$O$J$I$I(obj, this.offset, expect, update);
});

Clazz.newMeth(C$, 'weakCompareAndSet$O$I$I',  function (obj, expect, update) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$O.apply(this, [obj]);
return C$.unsafe.compareAndSwapInt$O$J$I$I(obj, this.offset, expect, update);
});

Clazz.newMeth(C$, 'set$O$I',  function (obj, newValue) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$O.apply(this, [obj]);
C$.unsafe.putIntVolatile$O$J$I(obj, this.offset, newValue);
});

Clazz.newMeth(C$, 'lazySet$O$I',  function (obj, newValue) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$O.apply(this, [obj]);
C$.unsafe.putOrderedInt$O$J$I(obj, this.offset, newValue);
});

Clazz.newMeth(C$, 'get$O',  function (obj) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$O.apply(this, [obj]);
return C$.unsafe.getIntVolatile$O$J(obj, this.offset);
});

Clazz.newMeth(C$, 'getAndSet$O$I',  function (obj, newValue) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$O.apply(this, [obj]);
return C$.unsafe.getAndSetInt$O$J$I(obj, this.offset, newValue);
});

Clazz.newMeth(C$, 'getAndIncrement$O',  function (obj) {
return this.getAndAdd$O$I(obj, 1);
});

Clazz.newMeth(C$, 'getAndDecrement$O',  function (obj) {
return this.getAndAdd$O$I(obj, -1);
});

Clazz.newMeth(C$, 'getAndAdd$O$I',  function (obj, delta) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$O.apply(this, [obj]);
return C$.unsafe.getAndAddInt$O$J$I(obj, this.offset, delta);
});

Clazz.newMeth(C$, 'incrementAndGet$O',  function (obj) {
return this.getAndAdd$O$I(obj, 1) + 1;
});

Clazz.newMeth(C$, 'decrementAndGet$O',  function (obj) {
return this.getAndAdd$O$I(obj, -1) - 1;
});

Clazz.newMeth(C$, 'addAndGet$O$I',  function (obj, delta) {
return this.getAndAdd$O$I(obj, delta) + delta;
});

Clazz.newMeth(C$, 'ensureProtectedAccess$O',  function (obj) {
if (this.cclass.isInstance$O(obj)) {
return;
}throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[Clazz.new_(Clazz.load('IllegalAccessException').c$$S,["Class " + this.cclass.getName$() + " can not access a protected member of class " + this.tclass.getName$() + " using an instance of " + obj.getClass$().getName$() ])]);
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.unsafe=$I$(1).getUnsafe$();
};

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
