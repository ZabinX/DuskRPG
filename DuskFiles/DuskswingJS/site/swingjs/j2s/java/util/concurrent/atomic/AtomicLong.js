(function(){var P$=Clazz.newPackage("java.util.concurrent.atomic"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AtomicLong", null, 'Number');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['value']]]

Clazz.newMeth(C$, 'c$$J',  function (initialValue) {
Clazz.super_(C$, this);
this.value=initialValue;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'get$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'set$J',  function (newValue) {
this.value=newValue;
});

Clazz.newMeth(C$, 'lazySet$J',  function (newValue) {
this.set$J(newValue);
});

Clazz.newMeth(C$, 'getAndSet$J',  function (newValue) {
var current=this.value;
this.set$J(newValue);
return current;
});

Clazz.newMeth(C$, 'compareAndSet$J$J',  function (expect, update) {
if (Long.$eq(this.value,expect )) {
this.value=update;
return true;
}return false;
});

Clazz.newMeth(C$, 'weakCompareAndSet$J$J',  function (expect, update) {
return this.compareAndSet$J$J(expect, update);
});

Clazz.newMeth(C$, 'getAndIncrement$',  function () {
while (true){
var current=this.get$();
var next=Long.$add(current,1);
if (this.compareAndSet$J$J(current, next)) return current;
}
});

Clazz.newMeth(C$, 'getAndDecrement$',  function () {
while (true){
var current=this.get$();
var next=Long.$sub(current,1);
if (this.compareAndSet$J$J(current, next)) return current;
}
});

Clazz.newMeth(C$, 'getAndAdd$J',  function (delta) {
while (true){
var current=this.get$();
var next=Long.$add(current,delta);
if (this.compareAndSet$J$J(current, next)) return current;
}
});

Clazz.newMeth(C$, 'incrementAndGet$',  function () {
for (; ; ) {
var current=this.get$();
var next=Long.$add(current,1);
if (this.compareAndSet$J$J(current, next)) return next;
}
});

Clazz.newMeth(C$, 'decrementAndGet$',  function () {
for (; ; ) {
var current=this.get$();
var next=Long.$sub(current,1);
if (this.compareAndSet$J$J(current, next)) return next;
}
});

Clazz.newMeth(C$, 'addAndGet$J',  function (delta) {
for (; ; ) {
var current=this.get$();
var next=Long.$add(current,delta);
if (this.compareAndSet$J$J(current, next)) return next;
}
});

Clazz.newMeth(C$, 'toString',  function () {
return Long.toString$J(this.get$());
});

Clazz.newMeth(C$, 'intValue$',  function () {
return Long.$ival(this.get$());
});

Clazz.newMeth(C$, 'longValue$',  function () {
return this.get$();
});

Clazz.newMeth(C$, 'floatValue$',  function () {
return Long.$fval(this.get$());
});

Clazz.newMeth(C$, 'doubleValue$',  function () {
return Long.$dval(this.get$());
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
