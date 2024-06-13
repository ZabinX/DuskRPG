(function(){var P$=Clazz.newPackage("java.util.concurrent.atomic"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AtomicBoolean", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['value']]]

Clazz.newMeth(C$, 'c$$Z',  function (initialValue) {
;C$.$init$.apply(this);
this.value=initialValue ? 1 : 0;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'get$',  function () {
return this.value != 0;
});

Clazz.newMeth(C$, 'compareAndSet$Z$Z',  function (expect, update) {
var e=expect ? 1 : 0;
var u=update ? 1 : 0;
if (this.value == e) {
this.value=u;
return true;
}return false;
});

Clazz.newMeth(C$, 'weakCompareAndSet$Z$Z',  function (expect, update) {
return this.compareAndSet$Z$Z(expect, update);
});

Clazz.newMeth(C$, 'set$Z',  function (newValue) {
this.value=newValue ? 1 : 0;
});

Clazz.newMeth(C$, 'lazySet$Z',  function (newValue) {
this.value=newValue ? 1 : 0;
});

Clazz.newMeth(C$, 'getAndSet$Z',  function (newValue) {
for (; ; ) {
var current=this.get$();
if (this.compareAndSet$Z$Z(current, newValue)) return current;
}
});

Clazz.newMeth(C$, 'toString',  function () {
return "" + this.get$();
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
