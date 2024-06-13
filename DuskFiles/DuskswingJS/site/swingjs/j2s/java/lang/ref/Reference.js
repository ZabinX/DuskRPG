(function(){var P$=Clazz.newPackage("java.lang.ref"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Reference");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['referent','<T>']]]

Clazz.newMeth(C$, 'get$',  function () {
return this.referent;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.referent=null;
});

Clazz.newMeth(C$, 'isEnqueued$',  function () {
return false;
});

Clazz.newMeth(C$, 'enqueue$',  function () {
return false;
});

Clazz.newMeth(C$, 'c$$O',  function (referent) {
C$.c$$O$java_lang_ref_ReferenceQueue.apply(this, [referent, null]);
}, 1);

Clazz.newMeth(C$, 'c$$O$java_lang_ref_ReferenceQueue',  function (referent, queue) {
;C$.$init$.apply(this);
this.referent=referent;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:18 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
