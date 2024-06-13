(function(){var P$=java.util,I$=[[0,'java.util.Objects','java.util.Arrays','java.util.Spliterators','java.util.ImmutableCollections',['java.util.ImmutableCollections','.List12'],['java.util.ImmutableCollections','.ListN']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "List", null, null, 'java.util.Collection');

C$.$clinit$=2;

Clazz.newMeth(C$, 'of$',  function () {
return $I$(4).emptyList$();
}, 1);

Clazz.newMeth(C$, 'of$O',  function (e1) {
return Clazz.new_($I$(5,1).c$$O,[e1]);
}, 1);

Clazz.newMeth(C$, 'of$O$O',  function (e1, e2) {
return Clazz.new_($I$(5,1).c$$O$O,[e1, e2]);
}, 1);

Clazz.newMeth(C$, 'of$O$O$O',  function (e1, e2, e3) {
return Clazz.new_([Clazz.array(java.lang.Object, -1, [e1, e2, e3])],$I$(6,1).c$$OA);
}, 1);

Clazz.newMeth(C$, 'of$O$O$O$O',  function (e1, e2, e3, e4) {
return Clazz.new_([Clazz.array(java.lang.Object, -1, [e1, e2, e3, e4])],$I$(6,1).c$$OA);
}, 1);

Clazz.newMeth(C$, 'of$O$O$O$O$O',  function (e1, e2, e3, e4, e5) {
return Clazz.new_([Clazz.array(java.lang.Object, -1, [e1, e2, e3, e4, e5])],$I$(6,1).c$$OA);
}, 1);

Clazz.newMeth(C$, 'of$O$O$O$O$O$O',  function (e1, e2, e3, e4, e5, e6) {
return Clazz.new_([Clazz.array(java.lang.Object, -1, [e1, e2, e3, e4, e5, e6])],$I$(6,1).c$$OA);
}, 1);

Clazz.newMeth(C$, 'of$O$O$O$O$O$O$O',  function (e1, e2, e3, e4, e5, e6, e7) {
return Clazz.new_([Clazz.array(java.lang.Object, -1, [e1, e2, e3, e4, e5, e6, e7])],$I$(6,1).c$$OA);
}, 1);

Clazz.newMeth(C$, 'of$O$O$O$O$O$O$O$O',  function (e1, e2, e3, e4, e5, e6, e7, e8) {
return Clazz.new_([Clazz.array(java.lang.Object, -1, [e1, e2, e3, e4, e5, e6, e7, e8])],$I$(6,1).c$$OA);
}, 1);

Clazz.newMeth(C$, 'of$O$O$O$O$O$O$O$O$O',  function (e1, e2, e3, e4, e5, e6, e7, e8, e9) {
return Clazz.new_([Clazz.array(java.lang.Object, -1, [e1, e2, e3, e4, e5, e6, e7, e8, e9])],$I$(6,1).c$$OA);
}, 1);

Clazz.newMeth(C$, 'of$O$O$O$O$O$O$O$O$O$O',  function (e1, e2, e3, e4, e5, e6, e7, e8, e9, e10) {
return Clazz.new_([Clazz.array(java.lang.Object, -1, [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10])],$I$(6,1).c$$OA);
}, 1);

Clazz.newMeth(C$, 'of$OA',  function (elements) {
switch (elements.length) {
case 0:
return $I$(4).emptyList$();
case 1:
return Clazz.new_($I$(5,1).c$$O,[elements[0]]);
case 2:
return Clazz.new_($I$(5,1).c$$O$O,[elements[0], elements[1]]);
default:
return Clazz.new_($I$(6,1).c$$OA,[elements]);
}
}, 1);

Clazz.newMeth(C$, 'copyOf$java_util_Collection',  function (coll) {
return $I$(4).listCopy$java_util_Collection(coll);
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'replaceAll$java_util_function_UnaryOperator',  function (operator) {
$I$(1).requireNonNull$O(operator);
var li=this.listIterator$();
while (li.hasNext$()){
li.set$O(operator.apply$O(li.next$()));
}
});

Clazz.newMeth(C$, 'sort$java_util_Comparator',  function (c) {
var a=this.toArray$();
$I$(2).sort$OA$java_util_Comparator(a, c);
var i=this.listIterator$();
for (var e, $e = 0, $$e = a; $e<$$e.length&&((e=($$e[$e])),1);$e++) {
i.next$();
i.set$O(e);
}
});

Clazz.newMeth(C$, 'spliterator$',  function () {
return $I$(3).spliterator$java_util_Collection$I(this, 16);
});
};})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:33 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
