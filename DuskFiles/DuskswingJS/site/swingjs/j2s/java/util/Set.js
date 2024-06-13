(function(){var P$=java.util,I$=[[0,'java.util.Spliterators','java.util.ImmutableCollections',['java.util.ImmutableCollections','.Set12'],['java.util.ImmutableCollections','.SetN'],'java.util.HashSet']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "Set", null, null, 'java.util.Collection');

C$.$clinit$=2;

Clazz.newMeth(C$, 'of$',  function () {
return $I$(2).emptySet$();
}, 1);

Clazz.newMeth(C$, 'of$O',  function (e1) {
return Clazz.new_($I$(3,1).c$$O,[e1]);
}, 1);

Clazz.newMeth(C$, 'of$O$O',  function (e1, e2) {
return Clazz.new_($I$(3,1).c$$O$O,[e1, e2]);
}, 1);

Clazz.newMeth(C$, 'of$O$O$O',  function (e1, e2, e3) {
return Clazz.new_([Clazz.array(java.lang.Object, -1, [e1, e2, e3])],$I$(4,1).c$$OA);
}, 1);

Clazz.newMeth(C$, 'of$O$O$O$O',  function (e1, e2, e3, e4) {
return Clazz.new_([Clazz.array(java.lang.Object, -1, [e1, e2, e3, e4])],$I$(4,1).c$$OA);
}, 1);

Clazz.newMeth(C$, 'of$O$O$O$O$O',  function (e1, e2, e3, e4, e5) {
return Clazz.new_([Clazz.array(java.lang.Object, -1, [e1, e2, e3, e4, e5])],$I$(4,1).c$$OA);
}, 1);

Clazz.newMeth(C$, 'of$O$O$O$O$O$O',  function (e1, e2, e3, e4, e5, e6) {
return Clazz.new_([Clazz.array(java.lang.Object, -1, [e1, e2, e3, e4, e5, e6])],$I$(4,1).c$$OA);
}, 1);

Clazz.newMeth(C$, 'of$O$O$O$O$O$O$O',  function (e1, e2, e3, e4, e5, e6, e7) {
return Clazz.new_([Clazz.array(java.lang.Object, -1, [e1, e2, e3, e4, e5, e6, e7])],$I$(4,1).c$$OA);
}, 1);

Clazz.newMeth(C$, 'of$O$O$O$O$O$O$O$O',  function (e1, e2, e3, e4, e5, e6, e7, e8) {
return Clazz.new_([Clazz.array(java.lang.Object, -1, [e1, e2, e3, e4, e5, e6, e7, e8])],$I$(4,1).c$$OA);
}, 1);

Clazz.newMeth(C$, 'of$O$O$O$O$O$O$O$O$O',  function (e1, e2, e3, e4, e5, e6, e7, e8, e9) {
return Clazz.new_([Clazz.array(java.lang.Object, -1, [e1, e2, e3, e4, e5, e6, e7, e8, e9])],$I$(4,1).c$$OA);
}, 1);

Clazz.newMeth(C$, 'of$O$O$O$O$O$O$O$O$O$O',  function (e1, e2, e3, e4, e5, e6, e7, e8, e9, e10) {
return Clazz.new_([Clazz.array(java.lang.Object, -1, [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10])],$I$(4,1).c$$OA);
}, 1);

Clazz.newMeth(C$, 'of$OA',  function (elements) {
switch (elements.length) {
case 0:
return $I$(2).emptySet$();
case 1:
return Clazz.new_($I$(3,1).c$$O,[elements[0]]);
case 2:
return Clazz.new_($I$(3,1).c$$O$O,[elements[0], elements[1]]);
default:
return Clazz.new_($I$(4,1).c$$OA,[elements]);
}
}, 1);

Clazz.newMeth(C$, 'copyOf$java_util_Collection',  function (coll) {
if (Clazz.instanceOf(coll, "java.util.ImmutableCollections.AbstractImmutableSet")) {
return coll;
} else {
return C$.of$OA(Clazz.new_($I$(5,1).c$$java_util_Collection,[coll]).toArray$());
}}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'spliterator$',  function () {
return $I$(1).spliterator$java_util_Collection$I(this, 1);
});
};})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
