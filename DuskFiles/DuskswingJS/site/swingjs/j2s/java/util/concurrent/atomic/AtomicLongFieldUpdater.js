(function(){var P$=Clazz.newPackage("java.util.concurrent.atomic"),p$1={},p$2={},I$=[[0,'sun.misc.Unsafe','java.security.AccessController','sun.reflect.misc.ReflectUtil','java.util.concurrent.atomic.AtomicLongFieldUpdater','java.lang.reflect.Modifier','sun.reflect.Reflection',['java.util.concurrent.atomic.AtomicLongFieldUpdater','.CASUpdater'],['java.util.concurrent.atomic.AtomicLongFieldUpdater','.LockedUpdater']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AtomicLongFieldUpdater", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['CASUpdater',10],['LockedUpdater',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'newUpdater$Class$S',  function (tclass, fieldName) {
var $caller=$I$(6).getCallerClass$();
if (true) return Clazz.new_($I$(7,1).c$$Class$S$Class,[tclass, fieldName, $caller]);
 else return Clazz.new_($I$(8,1).c$$Class$S$Class,[tclass, fieldName, $caller]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAndSet$O$J',  function (obj, newValue) {
var prev;
do {
prev=this.get$O(obj);
} while (!this.compareAndSet$O$J$J(obj, prev, newValue));
return prev;
});

Clazz.newMeth(C$, 'getAndIncrement$O',  function (obj) {
var prev;
var next;
do {
prev=this.get$O(obj);
next=Long.$add(prev,1);
} while (!this.compareAndSet$O$J$J(obj, prev, next));
return prev;
});

Clazz.newMeth(C$, 'getAndDecrement$O',  function (obj) {
var prev;
var next;
do {
prev=this.get$O(obj);
next=Long.$sub(prev,1);
} while (!this.compareAndSet$O$J$J(obj, prev, next));
return prev;
});

Clazz.newMeth(C$, 'getAndAdd$O$J',  function (obj, delta) {
var prev;
var next;
do {
prev=this.get$O(obj);
next=Long.$add(prev,delta);
} while (!this.compareAndSet$O$J$J(obj, prev, next));
return prev;
});

Clazz.newMeth(C$, 'incrementAndGet$O',  function (obj) {
var prev;
var next;
do {
prev=this.get$O(obj);
next=Long.$add(prev,1);
} while (!this.compareAndSet$O$J$J(obj, prev, next));
return next;
});

Clazz.newMeth(C$, 'decrementAndGet$O',  function (obj) {
var prev;
var next;
do {
prev=this.get$O(obj);
next=Long.$sub(prev,1);
} while (!this.compareAndSet$O$J$J(obj, prev, next));
return next;
});

Clazz.newMeth(C$, 'addAndGet$O$J',  function (obj, delta) {
var prev;
var next;
do {
prev=this.get$O(obj);
next=Long.$add(prev,delta);
} while (!this.compareAndSet$O$J$J(obj, prev, next));
return next;
});

Clazz.newMeth(C$, 'getAndUpdate$O$java_util_function_LongUnaryOperator',  function (obj, updateFunction) {
var prev;
var next;
do {
prev=this.get$O(obj);
next=updateFunction.applyAsLong$J(prev);
} while (!this.compareAndSet$O$J$J(obj, prev, next));
return prev;
});

Clazz.newMeth(C$, 'updateAndGet$O$java_util_function_LongUnaryOperator',  function (obj, updateFunction) {
var prev;
var next;
do {
prev=this.get$O(obj);
next=updateFunction.applyAsLong$J(prev);
} while (!this.compareAndSet$O$J$J(obj, prev, next));
return next;
});

Clazz.newMeth(C$, 'getAndAccumulate$O$J$java_util_function_LongBinaryOperator',  function (obj, x, accumulatorFunction) {
var prev;
var next;
do {
prev=this.get$O(obj);
next=accumulatorFunction.applyAsLong$J$J(prev, x);
} while (!this.compareAndSet$O$J$J(obj, prev, next));
return prev;
});

Clazz.newMeth(C$, 'accumulateAndGet$O$J$java_util_function_LongBinaryOperator',  function (obj, x, accumulatorFunction) {
var prev;
var next;
do {
prev=this.get$O(obj);
next=accumulatorFunction.applyAsLong$J$J(prev, x);
} while (!this.compareAndSet$O$J$J(obj, prev, next));
return next;
});

Clazz.newMeth(C$, 'isAncestor$ClassLoader$ClassLoader',  function (first, second) {
var acl=first;
do {
acl=acl.getParent$();
if (second === acl ) {
return true;
}} while (acl != null );
return false;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AtomicLongFieldUpdater, "CASUpdater", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.atomic.AtomicLongFieldUpdater');

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
field=$I$(2,"doPrivileged$java_security_PrivilegedExceptionAction",[((P$.AtomicLongFieldUpdater$CASUpdater$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AtomicLongFieldUpdater$CASUpdater$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return this.$finals$.tclass.getDeclaredField$S(this.$finals$.fieldName);
});
})()
), Clazz.new_(P$.AtomicLongFieldUpdater$CASUpdater$1.$init$,[this, {tclass:tclass,fieldName:fieldName}]))]);
modifiers=field.getModifiers$();
$I$(3).ensureMemberAccess$Class$Class$O$I($caller, tclass, null, modifiers);
var cl=tclass.getClassLoader$();
var ccl=$caller.getClassLoader$();
if ((ccl != null ) && (ccl !== cl ) && ((cl == null ) || !$I$(4).isAncestor$ClassLoader$ClassLoader(cl, ccl) )  ) {
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
if (fieldt !== Long.TYPE ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be long type"]);
if (!$I$(5).isVolatile$I(modifiers)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be volatile type"]);
this.cclass=($I$(5).isProtected$I(modifiers) && $caller !== tclass  ) ? $caller : null;
this.tclass=tclass;
this.offset=C$.unsafe.objectFieldOffset$java_lang_reflect_Field(field);
}, 1);

Clazz.newMeth(C$, 'fullCheck$O',  function (obj) {
if (!this.tclass.isInstance$O(obj)) throw Clazz.new_(Clazz.load('ClassCastException'));
if (this.cclass != null ) p$1.ensureProtectedAccess$O.apply(this, [obj]);
}, p$1);

Clazz.newMeth(C$, 'compareAndSet$O$J$J',  function (obj, expect, update) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$O.apply(this, [obj]);
return C$.unsafe.compareAndSwapLong$O$J$J$J(obj, this.offset, expect, update);
});

Clazz.newMeth(C$, 'weakCompareAndSet$O$J$J',  function (obj, expect, update) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$O.apply(this, [obj]);
return C$.unsafe.compareAndSwapLong$O$J$J$J(obj, this.offset, expect, update);
});

Clazz.newMeth(C$, 'set$O$J',  function (obj, newValue) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$O.apply(this, [obj]);
C$.unsafe.putLongVolatile$O$J$J(obj, this.offset, newValue);
});

Clazz.newMeth(C$, 'lazySet$O$J',  function (obj, newValue) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$O.apply(this, [obj]);
C$.unsafe.putOrderedLong$O$J$J(obj, this.offset, newValue);
});

Clazz.newMeth(C$, 'get$O',  function (obj) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$O.apply(this, [obj]);
return C$.unsafe.getLongVolatile$O$J(obj, this.offset);
});

Clazz.newMeth(C$, 'getAndSet$O$J',  function (obj, newValue) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$O.apply(this, [obj]);
return C$.unsafe.getAndSetLong$O$J$J(obj, this.offset, newValue);
});

Clazz.newMeth(C$, 'getAndIncrement$O',  function (obj) {
return this.getAndAdd$O$J(obj, 1);
});

Clazz.newMeth(C$, 'getAndDecrement$O',  function (obj) {
return this.getAndAdd$O$J(obj, -1);
});

Clazz.newMeth(C$, 'getAndAdd$O$J',  function (obj, delta) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$1.fullCheck$O.apply(this, [obj]);
return C$.unsafe.getAndAddLong$O$J$J(obj, this.offset, delta);
});

Clazz.newMeth(C$, 'incrementAndGet$O',  function (obj) {
return Long.$add(this.getAndAdd$O$J(obj, 1),1);
});

Clazz.newMeth(C$, 'decrementAndGet$O',  function (obj) {
return Long.$sub(this.getAndAdd$O$J(obj, -1),1);
});

Clazz.newMeth(C$, 'addAndGet$O$J',  function (obj, delta) {
return Long.$add(this.getAndAdd$O$J(obj, delta),delta);
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
;
(function(){/*c*/var C$=Clazz.newClass(P$.AtomicLongFieldUpdater, "LockedUpdater", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.atomic.AtomicLongFieldUpdater');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['offset'],'O',['tclass','Class','+cclass']]
,['O',['unsafe','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'c$$Class$S$Class',  function (tclass, fieldName, $caller) {
Clazz.super_(C$, this);
var field=null;
var modifiers=0;
try {
field=$I$(2,"doPrivileged$java_security_PrivilegedExceptionAction",[((P$.AtomicLongFieldUpdater$LockedUpdater$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AtomicLongFieldUpdater$LockedUpdater$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return this.$finals$.tclass.getDeclaredField$S(this.$finals$.fieldName);
});
})()
), Clazz.new_(P$.AtomicLongFieldUpdater$LockedUpdater$1.$init$,[this, {fieldName:fieldName,tclass:tclass}]))]);
modifiers=field.getModifiers$();
$I$(3).ensureMemberAccess$Class$Class$O$I($caller, tclass, null, modifiers);
var cl=tclass.getClassLoader$();
var ccl=$caller.getClassLoader$();
if ((ccl != null ) && (ccl !== cl ) && ((cl == null ) || !$I$(4).isAncestor$ClassLoader$ClassLoader(cl, ccl) )  ) {
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
if (fieldt !== Long.TYPE ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be long type"]);
if (!$I$(5).isVolatile$I(modifiers)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be volatile type"]);
this.cclass=($I$(5).isProtected$I(modifiers) && $caller !== tclass  ) ? $caller : null;
this.tclass=tclass;
this.offset=C$.unsafe.objectFieldOffset$java_lang_reflect_Field(field);
}, 1);

Clazz.newMeth(C$, 'fullCheck$O',  function (obj) {
if (!this.tclass.isInstance$O(obj)) throw Clazz.new_(Clazz.load('ClassCastException'));
if (this.cclass != null ) p$2.ensureProtectedAccess$O.apply(this, [obj]);
}, p$2);

Clazz.newMeth(C$, 'compareAndSet$O$J$J',  function (obj, expect, update) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$2.fullCheck$O.apply(this, [obj]);
{
var v=C$.unsafe.getLong$O$J(obj, this.offset);
if (Long.$ne(v,expect )) return false;
C$.unsafe.putLong$O$J$J(obj, this.offset, update);
return true;
}});

Clazz.newMeth(C$, 'weakCompareAndSet$O$J$J',  function (obj, expect, update) {
return this.compareAndSet$O$J$J(obj, expect, update);
});

Clazz.newMeth(C$, 'set$O$J',  function (obj, newValue) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$2.fullCheck$O.apply(this, [obj]);
{
C$.unsafe.putLong$O$J$J(obj, this.offset, newValue);
}});

Clazz.newMeth(C$, 'lazySet$O$J',  function (obj, newValue) {
this.set$O$J(obj, newValue);
});

Clazz.newMeth(C$, 'get$O',  function (obj) {
if (obj == null  || obj.getClass$() !== this.tclass   || this.cclass != null  ) p$2.fullCheck$O.apply(this, [obj]);
{
return C$.unsafe.getLong$O$J(obj, this.offset);
}});

Clazz.newMeth(C$, 'ensureProtectedAccess$O',  function (obj) {
if (this.cclass.isInstance$O(obj)) {
return;
}throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[Clazz.new_(Clazz.load('IllegalAccessException').c$$S,["Class " + this.cclass.getName$() + " can not access a protected member of class " + this.tclass.getName$() + " using an instance of " + obj.getClass$().getName$() ])]);
}, p$2);

C$.$static$=function(){C$.$static$=0;
C$.unsafe=$I$(1).getUnsafe$();
};

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
