(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.Objects',['java.util.stream.ReferencePipeline','.Head'],'java.util.stream.StreamOpFlag',['java.util.stream.IntPipeline','.Head'],['java.util.stream.LongPipeline','.Head'],['java.util.stream.DoublePipeline','.Head']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StreamSupport");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'stream$java_util_Spliterator$Z',  function (spliterator, parallel) {
$I$(1).requireNonNull$O(spliterator);
return Clazz.new_([spliterator, $I$(3).fromCharacteristics$java_util_Spliterator(spliterator), parallel],$I$(2,1).c$$java_util_Spliterator$I$Z);
}, 1);

Clazz.newMeth(C$, 'stream$java_util_function_Supplier$I$Z',  function (supplier, characteristics, parallel) {
$I$(1).requireNonNull$O(supplier);
return Clazz.new_([supplier, $I$(3).fromCharacteristics$I(characteristics), parallel],$I$(2,1).c$$java_util_function_Supplier$I$Z);
}, 1);

Clazz.newMeth(C$, 'intStream$java_util_Spliterator_OfInt$Z',  function (spliterator, parallel) {
return Clazz.new_([spliterator, $I$(3).fromCharacteristics$java_util_Spliterator(spliterator), parallel],$I$(4,1).c$$java_util_Spliterator$I$Z);
}, 1);

Clazz.newMeth(C$, 'intStream$java_util_function_Supplier$I$Z',  function (supplier, characteristics, parallel) {
return Clazz.new_([supplier, $I$(3).fromCharacteristics$I(characteristics), parallel],$I$(4,1).c$$java_util_function_Supplier$I$Z);
}, 1);

Clazz.newMeth(C$, 'longStream$java_util_Spliterator_OfLong$Z',  function (spliterator, parallel) {
return Clazz.new_([spliterator, $I$(3).fromCharacteristics$java_util_Spliterator(spliterator), parallel],$I$(5,1).c$$java_util_Spliterator$I$Z);
}, 1);

Clazz.newMeth(C$, 'longStream$java_util_function_Supplier$I$Z',  function (supplier, characteristics, parallel) {
return Clazz.new_([supplier, $I$(3).fromCharacteristics$I(characteristics), parallel],$I$(5,1).c$$java_util_function_Supplier$I$Z);
}, 1);

Clazz.newMeth(C$, 'doubleStream$java_util_Spliterator_OfDouble$Z',  function (spliterator, parallel) {
return Clazz.new_([spliterator, $I$(3).fromCharacteristics$java_util_Spliterator(spliterator), parallel],$I$(6,1).c$$java_util_Spliterator$I$Z);
}, 1);

Clazz.newMeth(C$, 'doubleStream$java_util_function_Supplier$I$Z',  function (supplier, characteristics, parallel) {
return Clazz.new_([supplier, $I$(3).fromCharacteristics$I(characteristics), parallel],$I$(6,1).c$$java_util_function_Supplier$I$Z);
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
