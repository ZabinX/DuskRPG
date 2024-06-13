(function(){var P$=java.util,I$=[[0,'java.util.Objects','java.util.Spliterators','java.util.stream.StreamSupport']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "Collection", null, null, 'Iterable');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'removeIf$java_util_function_Predicate',  function (filter) {
$I$(1).requireNonNull$O(filter);
var removed=false;
var each=this.iterator$();
while (each.hasNext$()){
if (filter.test$O(each.next$())) {
each.remove$();
removed=true;
}}
return removed;
});

Clazz.newMeth(C$, 'spliterator$',  function () {
return $I$(2).spliterator$java_util_Collection$I(this, 0);
});

Clazz.newMeth(C$, 'stream$',  function () {
return $I$(3,"stream$java_util_Spliterator$Z",[this.spliterator$(), false]);
});

Clazz.newMeth(C$, 'parallelStream$',  function () {
return $I$(3,"stream$java_util_Spliterator$Z",[this.spliterator$(), true]);
});
};})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:31 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
