(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.Objects','java.util.stream.Collectors','java.util.Collections','java.util.EnumSet',['java.util.stream.Collector','.Characteristics'],['java.util.stream.Collectors','.CollectorImpl']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "Collector", function(){
});
C$.$classes$=[['Characteristics',25]];

Clazz.newMeth(C$, 'of$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_stream_Collector_CharacteristicsA',  function (supplier, accumulator, combiner, characteristics) {
$I$(1).requireNonNull$O(supplier);
$I$(1).requireNonNull$O(accumulator);
$I$(1).requireNonNull$O(combiner);
$I$(1).requireNonNull$O(characteristics);
var cs=(characteristics.length == 0) ? $I$(2).CH_ID : $I$(3,"unmodifiableSet$java_util_Set",[$I$(4,"of$Enum$EnumA",[$I$(5).IDENTITY_FINISH, characteristics])]);
return Clazz.new_($I$(6,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_Set,[supplier, accumulator, combiner, cs]);
}, 1);

Clazz.newMeth(C$, 'of$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_function_Function$java_util_stream_Collector_CharacteristicsA',  function (supplier, accumulator, combiner, finisher, characteristics) {
$I$(1).requireNonNull$O(supplier);
$I$(1).requireNonNull$O(accumulator);
$I$(1).requireNonNull$O(combiner);
$I$(1).requireNonNull$O(finisher);
$I$(1).requireNonNull$O(characteristics);
var cs=$I$(2).CH_NOID;
if (characteristics.length > 0) {
cs=$I$(4,"noneOf$Class",[Clazz.getClass($I$(5))]);
$I$(3).addAll$java_util_Collection$OA(cs, characteristics);
cs=$I$(3).unmodifiableSet$java_util_Set(cs);
}return Clazz.new_($I$(6,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_function_Function$java_util_Set,[supplier, accumulator, combiner, finisher, cs]);
}, 1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.Collector, "Characteristics", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "CONCURRENT", 0, []);
Clazz.newEnumConst($vals, C$.c$, "UNORDERED", 1, []);
Clazz.newEnumConst($vals, C$.c$, "IDENTITY_FINISH", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:41 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
