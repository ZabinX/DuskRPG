(function(){var P$=java.util,I$=[[0,'java.util.Spliterators']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LinkedHashSet", null, 'java.util.HashSet', ['java.util.Set', 'Cloneable', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I$F',  function (initialCapacity, loadFactor) {
;C$.superclazz.c$$I$F$Z.apply(this,[initialCapacity, loadFactor, true]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (initialCapacity) {
;C$.superclazz.c$$I$F$Z.apply(this,[initialCapacity, 0.75, true]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I$F$Z.apply(this,[16, 0.75, true]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection',  function (c) {
;C$.superclazz.c$$I$F$Z.apply(this,[Math.max(2 * c.size$(), 11), 0.75, true]);C$.$init$.apply(this);
this.addAll$java_util_Collection(c);
}, 1);

Clazz.newMeth(C$, 'spliterator$',  function () {
return $I$(1).spliterator$java_util_Collection$I(this, 17);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:33 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
