(function(){var P$=Clazz.newPackage("java.util.concurrent"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CopyOnWriteArrayList", null, 'java.util.ArrayList');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection',  function (c) {
;C$.superclazz.c$$java_util_Collection.apply(this,[c]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$OA',  function (toCopyIn) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
for (var i=0, n=toCopyIn.length; i < n; i++) this.add$O(toCopyIn[i]);

}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:36 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
