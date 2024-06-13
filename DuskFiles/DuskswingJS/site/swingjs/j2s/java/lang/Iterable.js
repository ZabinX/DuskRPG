(function(){var P$=java.lang,I$=[[0,'java.util.Objects','java.util.Spliterators']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "Iterable");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer',  function (action) {
$I$(1).requireNonNull$O(action);
for (var t, $t = this.iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
action.accept$O(t);
}
});

Clazz.newMeth(C$, 'spliterator$',  function () {
return $I$(2,"spliteratorUnknownSize$java_util_Iterator$I",[this.iterator$(), 0]);
});
};})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:16 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
