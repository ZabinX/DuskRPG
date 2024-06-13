(function(){var P$=Clazz.newPackage("java.util.stream"),I$=[[0,'java.util.stream.Collectors',['java.util.AbstractMap','.SimpleImmutableEntry'],'java.util.Arrays',['java.util.Map','.Entry'],'java.util.AbstractSet','java.util.Collections','java.util.EnumSet',['java.util.stream.Collector','.Characteristics'],['java.util.stream.Collectors','.CollectorImpl'],'java.util.Collection','java.util.ArrayList','java.util.List','java.util.HashSet','java.util.Set','StringBuilder','java.util.StringJoiner','java.util.function.BinaryOperator','java.util.stream.Collectors$1OptionalBox','java.util.Optional','java.util.HashMap','java.util.Objects','java.util.concurrent.ConcurrentHashMap',['java.util.stream.Collectors','.Partition'],'java.util.IntSummaryStatistics','java.util.LongSummaryStatistics','java.util.DoubleSummaryStatistics']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Collectors", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['CollectorImpl',8],['Partition',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['CH_CONCURRENT_ID','java.util.Set','+CH_CONCURRENT_NOID','+CH_ID','+CH_UNORDERED_ID','+CH_NOID']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'throwingMerger$',  function () {
return (P$.Collectors$lambda1$||(P$.Collectors$lambda1$=(((P$.Collectors$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$O$O',  function (u, v) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[String.format$S$OA("Duplicate key %s", Clazz.array(java.lang.Object, -1, [u]))]);
});
})()
), Clazz.new_(P$.Collectors$lambda1.$init$,[this, null])))));
}, 1);

Clazz.newMeth(C$, 'castingIdentity$',  function () {
return (P$.Collectors$lambda2$||(P$.Collectors$lambda2$=(((P$.Collectors$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$O',  function (i) { return (i);});
})()
), Clazz.new_(P$.Collectors$lambda2.$init$,[this, null])))));
}, 1);

Clazz.newMeth(C$, 'toCollection$java_util_function_Supplier',  function (collectionFactory) {
return Clazz.new_([collectionFactory, (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_T*/
Clazz.newMeth(C$, 'accept$O$O',  function (t,u) { return t.add$O.apply(t,[u])});
})()
)); return Clazz.new_(P$.Collectors$lambda3.$init$,[this, null])})($I$(10)), ((P$.Collectors$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_util_Collection$java_util_Collection','apply$O$O'],  function (r1, r2) {
r1.addAll$java_util_Collection.apply(r1, [r2]);
return r1;
});
})()
), Clazz.new_(P$.Collectors$lambda4.$init$,[this, null])), C$.CH_ID],$I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_Set);
}, 1);

Clazz.newMeth(C$, 'toList$',  function () {
return Clazz.new_([((P$.Collectors$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$',  function () { return Clazz.new_($I$(11,1),[])});
})()
), Clazz.new_(P$.Collectors$lambda5.$init$,[this, null])), (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$O$O',  function (t,u) { return t.add$O.apply(t,[u])});
})()
)); return Clazz.new_(P$.Collectors$lambda6.$init$,[this, null])})($I$(12)), ((P$.Collectors$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_util_List$java_util_List','apply$O$O'],  function (left, right) {
left.addAll$java_util_Collection.apply(left, [right]);
return left;
});
})()
), Clazz.new_(P$.Collectors$lambda7.$init$,[this, null])), C$.CH_ID],$I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_Set);
}, 1);

Clazz.newMeth(C$, 'toSet$',  function () {
return Clazz.new_([((P$.Collectors$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$',  function () { return Clazz.new_($I$(13,1),[])});
})()
), Clazz.new_(P$.Collectors$lambda8.$init$,[this, null])), (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$O$O',  function (t,u) { return t.add$O.apply(t,[u])});
})()
)); return Clazz.new_(P$.Collectors$lambda9.$init$,[this, null])})($I$(14)), ((P$.Collectors$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_util_Set$java_util_Set','apply$O$O'],  function (left, right) {
left.addAll$java_util_Collection.apply(left, [right]);
return left;
});
})()
), Clazz.new_(P$.Collectors$lambda10.$init$,[this, null])), C$.CH_UNORDERED_ID],$I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_Set);
}, 1);

Clazz.newMeth(C$, 'joining$',  function () {
return Clazz.new_([((P$.Collectors$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$',  function () { return Clazz.new_($I$(15,1),[])});
})()
), Clazz.new_(P$.Collectors$lambda11.$init$,[this, null])), (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$O$O',  function (t,u) { return t.append$CharSequence.apply(t,[u])});
})()
)); return Clazz.new_(P$.Collectors$lambda12.$init$,[this, null])})($I$(15)), ((P$.Collectors$lambda13||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda13", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$StringBuilder$StringBuilder','apply$O$O'],  function (r1, r2) {
r1.append$CharSequence.apply(r1, [r2]);
return r1;
});
})()
), Clazz.new_(P$.Collectors$lambda13.$init$,[this, null])), (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda14", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$O',  function (t) { return t.toString.apply(t,[])});
})()
)); return Clazz.new_(P$.Collectors$lambda14.$init$,[this, null])})($I$(15)), C$.CH_NOID],$I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_function_Function$java_util_Set);
}, 1);

Clazz.newMeth(C$, 'joining$CharSequence',  function (delimiter) {
return C$.joining$CharSequence$CharSequence$CharSequence(delimiter, "", "");
}, 1);

Clazz.newMeth(C$, 'joining$CharSequence$CharSequence$CharSequence',  function (delimiter, prefix, suffix) {
return Clazz.new_([((P$.Collectors$lambda15||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda15", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$',  function () { return (Clazz.new_($I$(16,1).c$$CharSequence$CharSequence$CharSequence,[this.$finals$.delimiter, this.$finals$.prefix, this.$finals$.suffix]));});
})()
), Clazz.new_(P$.Collectors$lambda15.$init$,[this, {suffix:suffix,delimiter:delimiter,prefix:prefix}])), (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda16", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$O$O',  function (t,u) { return t.add$CharSequence.apply(t,[u])});
})()
)); return Clazz.new_(P$.Collectors$lambda16.$init$,[this, null])})($I$(16)), (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda17", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$O$O',  function (t,u) { return t.merge$java_util_StringJoiner.apply(t,[u])});
})()
)); return Clazz.new_(P$.Collectors$lambda17.$init$,[this, null])})($I$(16)), (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda18", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$O',  function (t) { return t.toString.apply(t,[])});
})()
)); return Clazz.new_(P$.Collectors$lambda18.$init$,[this, null])})($I$(16)), C$.CH_NOID],$I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_function_Function$java_util_Set);
}, 1);

Clazz.newMeth(C$, 'mapMerger$java_util_function_BinaryOperator',  function (mergeFunction) {
return ((P$.Collectors$lambda19||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda19", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_util_Map$java_util_Map','apply$O$O'],  function (m1, m2) {
for (var e, $e = m2.entrySet$.apply(m2, []).iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) m1.merge$O$O$java_util_function_BiFunction.apply(m1, [e.getKey$.apply(e, []), e.getValue$.apply(e, []), this.$finals$.mergeFunction]);

return m1;
});
})()
), Clazz.new_(P$.Collectors$lambda19.$init$,[this, {mergeFunction:mergeFunction}]));
}, 1);

Clazz.newMeth(C$, 'mapping$java_util_function_Function$java_util_stream_Collector',  function (mapper, downstream) {
var downstreamAccumulator=downstream.accumulator$();
return Clazz.new_([downstream.supplier$(), ((P$.Collectors$lambda20||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda20", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$O$O',  function (r, t) { return (this.$finals$.downstreamAccumulator.accept$O$O(r, this.$finals$.mapper.apply$O.apply(this.$finals$.mapper, [t])));});
})()
), Clazz.new_(P$.Collectors$lambda20.$init$,[this, {downstreamAccumulator:downstreamAccumulator,mapper:mapper}])), downstream.combiner$(), downstream.finisher$(), downstream.characteristics$()],$I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_function_Function$java_util_Set);
}, 1);

Clazz.newMeth(C$, 'collectingAndThen$java_util_stream_Collector$java_util_function_Function',  function (downstream, finisher) {
var characteristics=downstream.characteristics$();
if (characteristics.contains$O($I$(8).IDENTITY_FINISH)) {
if (characteristics.size$() == 1) characteristics=C$.CH_NOID;
 else {
characteristics=$I$(7).copyOf$java_util_Collection(characteristics);
characteristics.remove$O($I$(8).IDENTITY_FINISH);
characteristics=$I$(6).unmodifiableSet$java_util_Set(characteristics);
}}return Clazz.new_([downstream.supplier$(), downstream.accumulator$(), downstream.combiner$(), downstream.finisher$().andThen$java_util_function_Function(finisher), characteristics],$I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_function_Function$java_util_Set);
}, 1);

Clazz.newMeth(C$, 'counting$',  function () {
return C$.reducing$O$java_util_function_Function$java_util_function_BinaryOperator(Long.valueOf$J(0), (P$.Collectors$lambda21$||(P$.Collectors$lambda21$=(((P$.Collectors$lambda21||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda21", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$O',  function (e) { return (1);});
})()
), Clazz.new_(P$.Collectors$lambda21.$init$,[this, null]))))), (P$.Collectors$lambda22$||(P$.Collectors$lambda22$=((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda22", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'apply$O$O',  function (t,u) { return $$.sum$J$J.apply(null,[t,u])});
})()
)); return Clazz.new_(P$.Collectors$lambda22.$init$,[this, null])})(Long)))));
}, 1);

Clazz.newMeth(C$, 'minBy$java_util_Comparator',  function (comparator) {
return C$.reducing$java_util_function_BinaryOperator($I$(17).minBy$java_util_Comparator(comparator));
}, 1);

Clazz.newMeth(C$, 'maxBy$java_util_Comparator',  function (comparator) {
return C$.reducing$java_util_function_BinaryOperator($I$(17).maxBy$java_util_Comparator(comparator));
}, 1);

Clazz.newMeth(C$, 'summingInt$java_util_function_ToIntFunction',  function (mapper) {
return Clazz.new_([(P$.Collectors$lambda23$||(P$.Collectors$lambda23$=(((P$.Collectors$lambda23||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda23", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$',  function () { return (Clazz.array(Integer.TYPE, [1]));});
})()
), Clazz.new_(P$.Collectors$lambda23.$init$,[this, null]))))), ((P$.Collectors$lambda24||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda24", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$IA$O','accept$O$O'],  function (a, t) {
a[0]+=this.$finals$.mapper.applyAsInt$O.apply(this.$finals$.mapper, [t]);
});
})()
), Clazz.new_(P$.Collectors$lambda24.$init$,[this, {mapper:mapper}])), (P$.Collectors$lambda25$||(P$.Collectors$lambda25$=(((P$.Collectors$lambda25||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda25", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$IA$IA','apply$O$O'],  function (a, b) {
a[0]+=b[0];
return a;
});
})()
), Clazz.new_(P$.Collectors$lambda25.$init$,[this, null]))))), (P$.Collectors$lambda26$||(P$.Collectors$lambda26$=(((P$.Collectors$lambda26||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda26", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$IA','apply$O'],  function (a) { return (a[0]);});
})()
), Clazz.new_(P$.Collectors$lambda26.$init$,[this, null]))))), C$.CH_NOID],$I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_function_Function$java_util_Set);
}, 1);

Clazz.newMeth(C$, 'summingLong$java_util_function_ToLongFunction',  function (mapper) {
return Clazz.new_([(P$.Collectors$lambda27$||(P$.Collectors$lambda27$=(((P$.Collectors$lambda27||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda27", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$',  function () { return (Clazz.array(Long.TYPE, [1]));});
})()
), Clazz.new_(P$.Collectors$lambda27.$init$,[this, null]))))), ((P$.Collectors$lambda28||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda28", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$JA$O','accept$O$O'],  function (a, t) {
(a[0]=Long.$add(a[0],(this.$finals$.mapper.applyAsLong$O.apply(this.$finals$.mapper, [t]))));
});
})()
), Clazz.new_(P$.Collectors$lambda28.$init$,[this, {mapper:mapper}])), (P$.Collectors$lambda29$||(P$.Collectors$lambda29$=(((P$.Collectors$lambda29||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda29", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$JA$JA','apply$O$O'],  function (a, b) {
(a[0]=Long.$add(a[0],(b[0])));
return a;
});
})()
), Clazz.new_(P$.Collectors$lambda29.$init$,[this, null]))))), (P$.Collectors$lambda30$||(P$.Collectors$lambda30$=(((P$.Collectors$lambda30||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda30", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$JA','apply$O'],  function (a) { return (a[0]);});
})()
), Clazz.new_(P$.Collectors$lambda30.$init$,[this, null]))))), C$.CH_NOID],$I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_function_Function$java_util_Set);
}, 1);

Clazz.newMeth(C$, 'summingDouble$java_util_function_ToDoubleFunction',  function (mapper) {
return Clazz.new_([(P$.Collectors$lambda31$||(P$.Collectors$lambda31$=(((P$.Collectors$lambda31||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda31", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$',  function () { return (Clazz.array(Double.TYPE, [3]));});
})()
), Clazz.new_(P$.Collectors$lambda31.$init$,[this, null]))))), ((P$.Collectors$lambda32||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda32", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$DA$O','accept$O$O'],  function (a, t) {
$I$(1,"sumWithCompensation$DA$D",[a, this.$finals$.mapper.applyAsDouble$O.apply(this.$finals$.mapper, [t])]);
a[2]+=this.$finals$.mapper.applyAsDouble$O.apply(this.$finals$.mapper, [t]);
});
})()
), Clazz.new_(P$.Collectors$lambda32.$init$,[this, {mapper:mapper}])), (P$.Collectors$lambda33$||(P$.Collectors$lambda33$=(((P$.Collectors$lambda33||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda33", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$DA$DA','apply$O$O'],  function (a, b) {
$I$(1).sumWithCompensation$DA$D(a, b[0]);
a[2]+=b[2];
return $I$(1).sumWithCompensation$DA$D(a, b[1]);
});
})()
), Clazz.new_(P$.Collectors$lambda33.$init$,[this, null]))))), (P$.Collectors$lambda34$||(P$.Collectors$lambda34$=(((P$.Collectors$lambda34||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda34", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$DA','apply$O'],  function (a) { return ($I$(1).computeFinalSum$DA(a));});
})()
), Clazz.new_(P$.Collectors$lambda34.$init$,[this, null]))))), C$.CH_NOID],$I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_function_Function$java_util_Set);
}, 1);

Clazz.newMeth(C$, 'sumWithCompensation$DA$D',  function (intermediateSum, value) {
var tmp=value - intermediateSum[1];
var sum=intermediateSum[0];
var velvel=sum + tmp;
intermediateSum[1]=(velvel - sum) - tmp;
intermediateSum[0]=velvel;
return intermediateSum;
}, 1);

Clazz.newMeth(C$, 'computeFinalSum$DA',  function (summands) {
var tmp=summands[0] + summands[1];
var simpleSum=summands[summands.length - 1];
if (Double.isNaN$D(tmp) && Double.isInfinite$D(simpleSum) ) return simpleSum;
 else return tmp;
}, 1);

Clazz.newMeth(C$, 'averagingInt$java_util_function_ToIntFunction',  function (mapper) {
return Clazz.new_([(P$.Collectors$lambda35$||(P$.Collectors$lambda35$=(((P$.Collectors$lambda35||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda35", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$',  function () { return (Clazz.array(Long.TYPE, [2]));});
})()
), Clazz.new_(P$.Collectors$lambda35.$init$,[this, null]))))), ((P$.Collectors$lambda36||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda36", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$JA$O','accept$O$O'],  function (a, t) {
(a[0]=Long.$add(a[0],(this.$finals$.mapper.applyAsInt$O.apply(this.$finals$.mapper, [t]))));
(Clazz.incrAN(a,1,1,false));
});
})()
), Clazz.new_(P$.Collectors$lambda36.$init$,[this, {mapper:mapper}])), (P$.Collectors$lambda37$||(P$.Collectors$lambda37$=(((P$.Collectors$lambda37||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda37", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$JA$JA','apply$O$O'],  function (a, b) {
(a[0]=Long.$add(a[0],(b[0])));
(a[1]=Long.$add(a[1],(b[1])));
return a;
});
})()
), Clazz.new_(P$.Collectors$lambda37.$init$,[this, null]))))), (P$.Collectors$lambda38$||(P$.Collectors$lambda38$=(((P$.Collectors$lambda38||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda38", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$JA','apply$O'],  function (a) { return ((Long.$eq(a[1],0 )) ? 0.0 : Long.$dval(a[0]) / a[1]);});
})()
), Clazz.new_(P$.Collectors$lambda38.$init$,[this, null]))))), C$.CH_NOID],$I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_function_Function$java_util_Set);
}, 1);

Clazz.newMeth(C$, 'averagingLong$java_util_function_ToLongFunction',  function (mapper) {
return Clazz.new_([(P$.Collectors$lambda39$||(P$.Collectors$lambda39$=(((P$.Collectors$lambda39||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda39", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$',  function () { return (Clazz.array(Long.TYPE, [2]));});
})()
), Clazz.new_(P$.Collectors$lambda39.$init$,[this, null]))))), ((P$.Collectors$lambda40||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda40", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$JA$O','accept$O$O'],  function (a, t) {
(a[0]=Long.$add(a[0],(this.$finals$.mapper.applyAsLong$O.apply(this.$finals$.mapper, [t]))));
(Clazz.incrAN(a,1,1,false));
});
})()
), Clazz.new_(P$.Collectors$lambda40.$init$,[this, {mapper:mapper}])), (P$.Collectors$lambda41$||(P$.Collectors$lambda41$=(((P$.Collectors$lambda41||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda41", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$JA$JA','apply$O$O'],  function (a, b) {
(a[0]=Long.$add(a[0],(b[0])));
(a[1]=Long.$add(a[1],(b[1])));
return a;
});
})()
), Clazz.new_(P$.Collectors$lambda41.$init$,[this, null]))))), (P$.Collectors$lambda42$||(P$.Collectors$lambda42$=(((P$.Collectors$lambda42||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda42", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$JA','apply$O'],  function (a) { return ((Long.$eq(a[1],0 )) ? 0.0 : Long.$dval(a[0]) / a[1]);});
})()
), Clazz.new_(P$.Collectors$lambda42.$init$,[this, null]))))), C$.CH_NOID],$I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_function_Function$java_util_Set);
}, 1);

Clazz.newMeth(C$, 'averagingDouble$java_util_function_ToDoubleFunction',  function (mapper) {
return Clazz.new_([(P$.Collectors$lambda43$||(P$.Collectors$lambda43$=(((P$.Collectors$lambda43||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda43", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$',  function () { return (Clazz.array(Double.TYPE, [4]));});
})()
), Clazz.new_(P$.Collectors$lambda43.$init$,[this, null]))))), ((P$.Collectors$lambda44||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda44", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$DA$O','accept$O$O'],  function (a, t) {
$I$(1,"sumWithCompensation$DA$D",[a, this.$finals$.mapper.applyAsDouble$O.apply(this.$finals$.mapper, [t])]);
++a[2];
a[3]+=this.$finals$.mapper.applyAsDouble$O.apply(this.$finals$.mapper, [t]);
});
})()
), Clazz.new_(P$.Collectors$lambda44.$init$,[this, {mapper:mapper}])), (P$.Collectors$lambda45$||(P$.Collectors$lambda45$=(((P$.Collectors$lambda45||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda45", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$DA$DA','apply$O$O'],  function (a, b) {
$I$(1).sumWithCompensation$DA$D(a, b[0]);
$I$(1).sumWithCompensation$DA$D(a, b[1]);
a[2]+=b[2];
a[3]+=b[3];
return a;
});
})()
), Clazz.new_(P$.Collectors$lambda45.$init$,[this, null]))))), (P$.Collectors$lambda46$||(P$.Collectors$lambda46$=(((P$.Collectors$lambda46||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda46", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$DA','apply$O'],  function (a) { return ((a[2] == 0 ) ? 0.0 : ($I$(1).computeFinalSum$DA(a) / a[2]));});
})()
), Clazz.new_(P$.Collectors$lambda46.$init$,[this, null]))))), C$.CH_NOID],$I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_function_Function$java_util_Set);
}, 1);

Clazz.newMeth(C$, 'reducing$O$java_util_function_BinaryOperator',  function (identity, op) {
return Clazz.new_([C$.boxSupplier$O(identity), ((P$.Collectors$lambda47||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda47", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$OA$O','accept$O$O'],  function (a, t) {
a[0]=this.$finals$.op.apply$O$O.apply(this.$finals$.op, [a[0], t]);
});
})()
), Clazz.new_(P$.Collectors$lambda47.$init$,[this, {op:op}])), ((P$.Collectors$lambda48||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda48", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$OA$OA','apply$O$O'],  function (a, b) {
a[0]=this.$finals$.op.apply$O$O.apply(this.$finals$.op, [a[0], b[0]]);
return a;
});
})()
), Clazz.new_(P$.Collectors$lambda48.$init$,[this, {op:op}])), (P$.Collectors$lambda49$||(P$.Collectors$lambda49$=(((P$.Collectors$lambda49||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda49", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$OA','apply$O'],  function (a) { return (a[0]);});
})()
), Clazz.new_(P$.Collectors$lambda49.$init$,[this, null]))))), C$.CH_NOID],$I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_function_Function$java_util_Set);
}, 1);

Clazz.newMeth(C$, 'boxSupplier$O',  function (identity) {
return ((P$.Collectors$lambda50||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda50", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$',  function () { return (Clazz.array(java.lang.Object, -1, [this.$finals$.identity]));});
})()
), Clazz.new_(P$.Collectors$lambda50.$init$,[this, {identity:identity}]));
}, 1);

Clazz.newMeth(C$, 'reducing$java_util_function_BinaryOperator',  function (op) {
return Clazz.new_([((P$.Collectors$lambda51||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda51", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$',  function () { return Clazz.new_($I$(18,1),[this,{op:op}])});
})()
), Clazz.new_(P$.Collectors$lambda51.$init$,[this, null])), (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda52", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'accept$O$O',  function (t,u) { return t.accept$O.apply(t,[u])});
})()
)); return Clazz.new_(P$.Collectors$lambda52.$init$,[this, null])})($I$(18)), ((P$.Collectors$lambda53||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda53", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_util_stream_Collectors$1OptionalBox$java_util_stream_Collectors$1OptionalBox','apply$O$O'],  function (a, b) {
if (b.present) a.accept$O.apply(a, [b.value]);
return a;
});
})()
), Clazz.new_(P$.Collectors$lambda53.$init$,[this, null])), (P$.Collectors$lambda54$||(P$.Collectors$lambda54$=(((P$.Collectors$lambda54||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda54", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_util_stream_Collectors$1OptionalBox','apply$O'],  function (a) { return ($I$(19).ofNullable$O(a.value));});
})()
), Clazz.new_(P$.Collectors$lambda54.$init$,[this, null]))))), C$.CH_NOID],$I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_function_Function$java_util_Set);
}, 1);

Clazz.newMeth(C$, 'reducing$O$java_util_function_Function$java_util_function_BinaryOperator',  function (identity, mapper, op) {
return Clazz.new_([C$.boxSupplier$O(identity), ((P$.Collectors$lambda55||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda55", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$OA$O','accept$O$O'],  function (a, t) {
a[0]=this.$finals$.op.apply$O$O.apply(this.$finals$.op, [a[0], this.$finals$.mapper.apply$O.apply(this.$finals$.mapper, [t])]);
});
})()
), Clazz.new_(P$.Collectors$lambda55.$init$,[this, {op:op,mapper:mapper}])), ((P$.Collectors$lambda56||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda56", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$OA$OA','apply$O$O'],  function (a, b) {
a[0]=this.$finals$.op.apply$O$O.apply(this.$finals$.op, [a[0], b[0]]);
return a;
});
})()
), Clazz.new_(P$.Collectors$lambda56.$init$,[this, {op:op}])), (P$.Collectors$lambda57$||(P$.Collectors$lambda57$=(((P$.Collectors$lambda57||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda57", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$OA','apply$O'],  function (a) { return (a[0]);});
})()
), Clazz.new_(P$.Collectors$lambda57.$init$,[this, null]))))), C$.CH_NOID],$I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_function_Function$java_util_Set);
}, 1);

Clazz.newMeth(C$, 'groupingBy$java_util_function_Function',  function (classifier) {
return C$.groupingBy$java_util_function_Function$java_util_stream_Collector(classifier, C$.toList$());
}, 1);

Clazz.newMeth(C$, 'groupingBy$java_util_function_Function$java_util_stream_Collector',  function (classifier, downstream) {
return C$.groupingBy$java_util_function_Function$java_util_function_Supplier$java_util_stream_Collector(classifier, ((P$.Collectors$lambda58||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda58", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$',  function () { return Clazz.new_($I$(20,1),[])});
})()
), Clazz.new_(P$.Collectors$lambda58.$init$,[this, null])), downstream);
}, 1);

Clazz.newMeth(C$, 'groupingBy$java_util_function_Function$java_util_function_Supplier$java_util_stream_Collector',  function (classifier, mapFactory, downstream) {
var downstreamSupplier=downstream.supplier$();
var downstreamAccumulator=downstream.accumulator$();
var accumulator=((P$.Collectors$lambda59||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda59", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$java_util_Map$O','accept$O$O'],  function (m, t) {
var key=$I$(21,"requireNonNull$O$S",[this.$finals$.classifier.apply$O.apply(this.$finals$.classifier, [t]), "element cannot be mapped to a null key"]);
var container=m.computeIfAbsent$O$java_util_function_Function.apply(m, [key, ((P$.Collectors$lambda59$60||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda59$60", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$O',  function (k) { return (this.$finals$.downstreamSupplier.get$.apply(this.$finals$.downstreamSupplier, []));});
})()
), Clazz.new_(P$.Collectors$lambda59$60.$init$,[this, {downstreamSupplier:this.$finals$.downstreamSupplier}]))]);
this.$finals$.downstreamAccumulator.accept$O$O(container, t);
});
})()
), Clazz.new_(P$.Collectors$lambda59.$init$,[this, {downstreamSupplier:downstreamSupplier,classifier:classifier,downstreamAccumulator:downstreamAccumulator}]));
var merger=C$.mapMerger$java_util_function_BinaryOperator(downstream.combiner$());
var mangledFactory=mapFactory;
if (downstream.characteristics$().contains$O($I$(8).IDENTITY_FINISH)) {
return Clazz.new_($I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_Set,[mangledFactory, accumulator, merger, C$.CH_ID]);
} else {
var downstreamFinisher=downstream.finisher$();
var finisher=((P$.Collectors$lambda60||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda60", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_util_Map','apply$O'],  function (intermediate) {
intermediate.replaceAll$java_util_function_BiFunction.apply(intermediate, [((P$.Collectors$lambda60$61||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda60$61", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$O$O',  function (k, v) { return (this.$finals$.downstreamFinisher.apply$O.apply(this.$finals$.downstreamFinisher, [v]));});
})()
), Clazz.new_(P$.Collectors$lambda60$61.$init$,[this, {downstreamFinisher:this.$finals$.downstreamFinisher}]))]);
var castResult=intermediate;
return castResult;
});
})()
), Clazz.new_(P$.Collectors$lambda60.$init$,[this, {downstreamFinisher:downstreamFinisher}]));
return Clazz.new_($I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_function_Function$java_util_Set,[mangledFactory, accumulator, merger, finisher, C$.CH_NOID]);
}}, 1);

Clazz.newMeth(C$, 'groupingByConcurrent$java_util_function_Function',  function (classifier) {
return C$.groupingByConcurrent$java_util_function_Function$java_util_function_Supplier$java_util_stream_Collector(classifier, ((P$.Collectors$lambda61||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda61", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$',  function () { return Clazz.new_($I$(22,1),[])});
})()
), Clazz.new_(P$.Collectors$lambda61.$init$,[this, null])), C$.toList$());
}, 1);

Clazz.newMeth(C$, 'groupingByConcurrent$java_util_function_Function$java_util_stream_Collector',  function (classifier, downstream) {
return C$.groupingByConcurrent$java_util_function_Function$java_util_function_Supplier$java_util_stream_Collector(classifier, ((P$.Collectors$lambda62||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda62", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$',  function () { return Clazz.new_($I$(22,1),[])});
})()
), Clazz.new_(P$.Collectors$lambda62.$init$,[this, null])), downstream);
}, 1);

Clazz.newMeth(C$, 'groupingByConcurrent$java_util_function_Function$java_util_function_Supplier$java_util_stream_Collector',  function (classifier, mapFactory, downstream) {
var downstreamSupplier=downstream.supplier$();
var downstreamAccumulator=downstream.accumulator$();
var merger=C$.mapMerger$java_util_function_BinaryOperator(downstream.combiner$());
var mangledFactory=mapFactory;
var accumulator;
if (downstream.characteristics$().contains$O($I$(8).CONCURRENT)) {
accumulator=((P$.Collectors$lambda63||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda63", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$java_util_concurrent_ConcurrentMap$O','accept$O$O'],  function (m, t) {
var key=$I$(21,"requireNonNull$O$S",[this.$finals$.classifier.apply$O.apply(this.$finals$.classifier, [t]), "element cannot be mapped to a null key"]);
var resultContainer=m.computeIfAbsent$O$java_util_function_Function.apply(m, [key, ((P$.Collectors$lambda63$64||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda63$64", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$O',  function (k) { return (this.$finals$.downstreamSupplier.get$.apply(this.$finals$.downstreamSupplier, []));});
})()
), Clazz.new_(P$.Collectors$lambda63$64.$init$,[this, {downstreamSupplier:this.$finals$.downstreamSupplier}]))]);
this.$finals$.downstreamAccumulator.accept$O$O(resultContainer, t);
});
})()
), Clazz.new_(P$.Collectors$lambda63.$init$,[this, {downstreamSupplier:downstreamSupplier,classifier:classifier,downstreamAccumulator:downstreamAccumulator}]));
} else {
accumulator=((P$.Collectors$lambda64||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda64", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$java_util_concurrent_ConcurrentMap$O','accept$O$O'],  function (m, t) {
var key=$I$(21,"requireNonNull$O$S",[this.$finals$.classifier.apply$O.apply(this.$finals$.classifier, [t]), "element cannot be mapped to a null key"]);
var resultContainer=m.computeIfAbsent$O$java_util_function_Function.apply(m, [key, ((P$.Collectors$lambda64$65||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda64$65", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$O',  function (k) { return (this.$finals$.downstreamSupplier.get$.apply(this.$finals$.downstreamSupplier, []));});
})()
), Clazz.new_(P$.Collectors$lambda64$65.$init$,[this, {downstreamSupplier:this.$finals$.downstreamSupplier}]))]);
{
this.$finals$.downstreamAccumulator.accept$O$O(resultContainer, t);
}});
})()
), Clazz.new_(P$.Collectors$lambda64.$init$,[this, {downstreamSupplier:downstreamSupplier,classifier:classifier,downstreamAccumulator:downstreamAccumulator}]));
}if (downstream.characteristics$().contains$O($I$(8).IDENTITY_FINISH)) {
return Clazz.new_($I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_Set,[mangledFactory, accumulator, merger, C$.CH_CONCURRENT_ID]);
} else {
var downstreamFinisher=downstream.finisher$();
var finisher=((P$.Collectors$lambda65||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda65", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_util_concurrent_ConcurrentMap','apply$O'],  function (intermediate) {
intermediate.replaceAll$java_util_function_BiFunction.apply(intermediate, [((P$.Collectors$lambda65$66||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda65$66", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$O$O',  function (k, v) { return (this.$finals$.downstreamFinisher.apply$O.apply(this.$finals$.downstreamFinisher, [v]));});
})()
), Clazz.new_(P$.Collectors$lambda65$66.$init$,[this, {downstreamFinisher:this.$finals$.downstreamFinisher}]))]);
var castResult=intermediate;
return castResult;
});
})()
), Clazz.new_(P$.Collectors$lambda65.$init$,[this, {downstreamFinisher:downstreamFinisher}]));
return Clazz.new_($I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_function_Function$java_util_Set,[mangledFactory, accumulator, merger, finisher, C$.CH_CONCURRENT_NOID]);
}}, 1);

Clazz.newMeth(C$, 'partitioningBy$java_util_function_Predicate',  function (predicate) {
return C$.partitioningBy$java_util_function_Predicate$java_util_stream_Collector(predicate, C$.toList$());
}, 1);

Clazz.newMeth(C$, 'partitioningBy$java_util_function_Predicate$java_util_stream_Collector',  function (predicate, downstream) {
var downstreamAccumulator=downstream.accumulator$();
var accumulator=((P$.Collectors$lambda66||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda66", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$java_util_stream_Collectors_Partition$O','accept$O$O'],  function (result, t) { return (this.$finals$.downstreamAccumulator.accept$O$O(this.$finals$.predicate.test$O.apply(this.$finals$.predicate, [t]) ? result.forTrue : result.forFalse, t));});
})()
), Clazz.new_(P$.Collectors$lambda66.$init$,[this, {predicate:predicate,downstreamAccumulator:downstreamAccumulator}]));
var op=downstream.combiner$();
var merger=((P$.Collectors$lambda67||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda67", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_util_stream_Collectors_Partition$java_util_stream_Collectors_Partition','apply$O$O'],  function (left, right) { return (Clazz.new_([this.$finals$.op.apply$O$O.apply(this.$finals$.op, [left.forTrue, right.forTrue]), this.$finals$.op.apply$O$O.apply(this.$finals$.op, [left.forFalse, right.forFalse])],$I$(23,1).c$$O$O));});
})()
), Clazz.new_(P$.Collectors$lambda67.$init$,[this, {op:op}]));
var supplier=((P$.Collectors$lambda68||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda68", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$',  function () { return (Clazz.new_([this.$finals$.downstream.supplier$.apply(this.$finals$.downstream, []).get$(), this.$finals$.downstream.supplier$.apply(this.$finals$.downstream, []).get$()],$I$(23,1).c$$O$O));});
})()
), Clazz.new_(P$.Collectors$lambda68.$init$,[this, {downstream:downstream}]));
if (downstream.characteristics$().contains$O($I$(8).IDENTITY_FINISH)) {
return Clazz.new_($I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_Set,[supplier, accumulator, merger, C$.CH_ID]);
} else {
var finisher=((P$.Collectors$lambda69||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda69", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_util_stream_Collectors_Partition','apply$O'],  function (par) { return (Clazz.new_([this.$finals$.downstream.finisher$.apply(this.$finals$.downstream, []).apply$O(par.forTrue), this.$finals$.downstream.finisher$.apply(this.$finals$.downstream, []).apply$O(par.forFalse)],$I$(23,1).c$$O$O));});
})()
), Clazz.new_(P$.Collectors$lambda69.$init$,[this, {downstream:downstream}]));
return Clazz.new_($I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_function_Function$java_util_Set,[supplier, accumulator, merger, finisher, C$.CH_NOID]);
}}, 1);

Clazz.newMeth(C$, 'toMap$java_util_function_Function$java_util_function_Function',  function (keyMapper, valueMapper) {
return C$.toMap$java_util_function_Function$java_util_function_Function$java_util_function_BinaryOperator$java_util_function_Supplier(keyMapper, valueMapper, C$.throwingMerger$(), ((P$.Collectors$lambda70||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda70", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$',  function () { return Clazz.new_($I$(20,1),[])});
})()
), Clazz.new_(P$.Collectors$lambda70.$init$,[this, null])));
}, 1);

Clazz.newMeth(C$, 'toMap$java_util_function_Function$java_util_function_Function$java_util_function_BinaryOperator',  function (keyMapper, valueMapper, mergeFunction) {
return C$.toMap$java_util_function_Function$java_util_function_Function$java_util_function_BinaryOperator$java_util_function_Supplier(keyMapper, valueMapper, mergeFunction, ((P$.Collectors$lambda71||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda71", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$',  function () { return Clazz.new_($I$(20,1),[])});
})()
), Clazz.new_(P$.Collectors$lambda71.$init$,[this, null])));
}, 1);

Clazz.newMeth(C$, 'toMap$java_util_function_Function$java_util_function_Function$java_util_function_BinaryOperator$java_util_function_Supplier',  function (keyMapper, valueMapper, mergeFunction, mapSupplier) {
var accumulator=((P$.Collectors$lambda72||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda72", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$java_util_Map$O','accept$O$O'],  function (map, element) { return (map.merge$O$O$java_util_function_BiFunction.apply(map, [this.$finals$.keyMapper.apply$O.apply(this.$finals$.keyMapper, [element]), this.$finals$.valueMapper.apply$O.apply(this.$finals$.valueMapper, [element]), this.$finals$.mergeFunction]));});
})()
), Clazz.new_(P$.Collectors$lambda72.$init$,[this, {valueMapper:valueMapper,mergeFunction:mergeFunction,keyMapper:keyMapper}]));
return Clazz.new_([mapSupplier, accumulator, C$.mapMerger$java_util_function_BinaryOperator(mergeFunction), C$.CH_ID],$I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_Set);
}, 1);

Clazz.newMeth(C$, 'toConcurrentMap$java_util_function_Function$java_util_function_Function',  function (keyMapper, valueMapper) {
return C$.toConcurrentMap$java_util_function_Function$java_util_function_Function$java_util_function_BinaryOperator$java_util_function_Supplier(keyMapper, valueMapper, C$.throwingMerger$(), ((P$.Collectors$lambda73||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda73", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$',  function () { return Clazz.new_($I$(22,1),[])});
})()
), Clazz.new_(P$.Collectors$lambda73.$init$,[this, null])));
}, 1);

Clazz.newMeth(C$, 'toConcurrentMap$java_util_function_Function$java_util_function_Function$java_util_function_BinaryOperator',  function (keyMapper, valueMapper, mergeFunction) {
return C$.toConcurrentMap$java_util_function_Function$java_util_function_Function$java_util_function_BinaryOperator$java_util_function_Supplier(keyMapper, valueMapper, mergeFunction, ((P$.Collectors$lambda74||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda74", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$',  function () { return Clazz.new_($I$(22,1),[])});
})()
), Clazz.new_(P$.Collectors$lambda74.$init$,[this, null])));
}, 1);

Clazz.newMeth(C$, 'toConcurrentMap$java_util_function_Function$java_util_function_Function$java_util_function_BinaryOperator$java_util_function_Supplier',  function (keyMapper, valueMapper, mergeFunction, mapSupplier) {
var accumulator=((P$.Collectors$lambda75||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda75", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$java_util_concurrent_ConcurrentMap$O','accept$O$O'],  function (map, element) { return (map.merge$O$O$java_util_function_BiFunction.apply(map, [this.$finals$.keyMapper.apply$O.apply(this.$finals$.keyMapper, [element]), this.$finals$.valueMapper.apply$O.apply(this.$finals$.valueMapper, [element]), this.$finals$.mergeFunction]));});
})()
), Clazz.new_(P$.Collectors$lambda75.$init$,[this, {mergeFunction:mergeFunction,keyMapper:keyMapper,valueMapper:valueMapper}]));
return Clazz.new_([mapSupplier, accumulator, C$.mapMerger$java_util_function_BinaryOperator(mergeFunction), C$.CH_CONCURRENT_ID],$I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_Set);
}, 1);

Clazz.newMeth(C$, 'summarizingInt$java_util_function_ToIntFunction',  function (mapper) {
return Clazz.new_([((P$.Collectors$lambda76||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda76", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$',  function () { return Clazz.new_($I$(24,1),[])});
})()
), Clazz.new_(P$.Collectors$lambda76.$init$,[this, null])), ((P$.Collectors$lambda77||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda77", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$java_util_IntSummaryStatistics$O','accept$O$O'],  function (r, t) { return (r.accept$I.apply(r, [this.$finals$.mapper.applyAsInt$O.apply(this.$finals$.mapper, [t])]));});
})()
), Clazz.new_(P$.Collectors$lambda77.$init$,[this, {mapper:mapper}])), ((P$.Collectors$lambda78||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda78", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_util_IntSummaryStatistics$java_util_IntSummaryStatistics','apply$O$O'],  function (l, r) {
l.combine$java_util_IntSummaryStatistics.apply(l, [r]);
return l;
});
})()
), Clazz.new_(P$.Collectors$lambda78.$init$,[this, null])), C$.CH_ID],$I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_Set);
}, 1);

Clazz.newMeth(C$, 'summarizingLong$java_util_function_ToLongFunction',  function (mapper) {
return Clazz.new_([((P$.Collectors$lambda79||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda79", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$',  function () { return Clazz.new_($I$(25,1),[])});
})()
), Clazz.new_(P$.Collectors$lambda79.$init$,[this, null])), ((P$.Collectors$lambda80||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda80", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$java_util_LongSummaryStatistics$O','accept$O$O'],  function (r, t) { return (r.accept$J.apply(r, [this.$finals$.mapper.applyAsLong$O.apply(this.$finals$.mapper, [t])]));});
})()
), Clazz.new_(P$.Collectors$lambda80.$init$,[this, {mapper:mapper}])), ((P$.Collectors$lambda81||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda81", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_util_LongSummaryStatistics$java_util_LongSummaryStatistics','apply$O$O'],  function (l, r) {
l.combine$java_util_LongSummaryStatistics.apply(l, [r]);
return l;
});
})()
), Clazz.new_(P$.Collectors$lambda81.$init$,[this, null])), C$.CH_ID],$I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_Set);
}, 1);

Clazz.newMeth(C$, 'summarizingDouble$java_util_function_ToDoubleFunction',  function (mapper) {
return Clazz.new_([((P$.Collectors$lambda82||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda82", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$',  function () { return Clazz.new_($I$(26,1),[])});
})()
), Clazz.new_(P$.Collectors$lambda82.$init$,[this, null])), ((P$.Collectors$lambda83||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda83", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$java_util_DoubleSummaryStatistics$O','accept$O$O'],  function (r, t) { return (r.accept$D.apply(r, [this.$finals$.mapper.applyAsDouble$O.apply(this.$finals$.mapper, [t])]));});
})()
), Clazz.new_(P$.Collectors$lambda83.$init$,[this, {mapper:mapper}])), ((P$.Collectors$lambda84||
(function(){/*m*/var C$=Clazz.newClass(P$, "Collectors$lambda84", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BinaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$java_util_DoubleSummaryStatistics$java_util_DoubleSummaryStatistics','apply$O$O'],  function (l, r) {
l.combine$java_util_DoubleSummaryStatistics.apply(l, [r]);
return l;
});
})()
), Clazz.new_(P$.Collectors$lambda84.$init$,[this, null])), C$.CH_ID],$I$(9,1).c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_Set);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.CH_CONCURRENT_ID=$I$(6,"unmodifiableSet$java_util_Set",[$I$(7,"of$Enum$Enum$Enum",[$I$(8).CONCURRENT, $I$(8).UNORDERED, $I$(8).IDENTITY_FINISH])]);
C$.CH_CONCURRENT_NOID=$I$(6,"unmodifiableSet$java_util_Set",[$I$(7,"of$Enum$Enum",[$I$(8).CONCURRENT, $I$(8).UNORDERED])]);
C$.CH_ID=$I$(6,"unmodifiableSet$java_util_Set",[$I$(7,"of$Enum",[$I$(8).IDENTITY_FINISH])]);
C$.CH_UNORDERED_ID=$I$(6,"unmodifiableSet$java_util_Set",[$I$(7,"of$Enum$Enum",[$I$(8).UNORDERED, $I$(8).IDENTITY_FINISH])]);
C$.CH_NOID=$I$(6).emptySet$();
};
;
(function(){/*l*/var C$=Clazz.newClass(P$, "Collectors$1OptionalBox", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.function.Consumer', 2);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.value=null;
this.present=false;
},1);

C$.$fields$=[['Z',['present'],'O',['value','<T>']]]

Clazz.newMeth(C$, 'accept$O',  function (t) {
if (this.present) {
this.value=this.$finals$.op.apply$O$O(this.value, t);
} else {
this.value=t;
this.present=true;
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Collectors, "CollectorImpl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.stream.Collector');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['supplier','java.util.function.Supplier','accumulator','java.util.function.BiConsumer','combiner','java.util.function.BinaryOperator','finisher','java.util.function.Function','characteristics','java.util.Set']]]

Clazz.newMeth(C$, 'c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_function_Function$java_util_Set',  function (supplier, accumulator, combiner, finisher, characteristics) {
;C$.$init$.apply(this);
this.supplier=supplier;
this.accumulator=accumulator;
this.combiner=combiner;
this.finisher=finisher;
this.characteristics=characteristics;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_Set',  function (supplier, accumulator, combiner, characteristics) {
C$.c$$java_util_function_Supplier$java_util_function_BiConsumer$java_util_function_BinaryOperator$java_util_function_Function$java_util_Set.apply(this, [supplier, accumulator, combiner, $I$(1).castingIdentity$(), characteristics]);
}, 1);

Clazz.newMeth(C$, 'accumulator$',  function () {
return this.accumulator;
});

Clazz.newMeth(C$, 'supplier$',  function () {
return this.supplier;
});

Clazz.newMeth(C$, 'combiner$',  function () {
return this.combiner;
});

Clazz.newMeth(C$, 'finisher$',  function () {
return this.finisher;
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return this.characteristics;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Collectors, "Partition", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractMap', 'java.util.Map');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['forTrue','<T>','+forFalse']]]

Clazz.newMeth(C$, 'c$$O$O',  function (forTrue, forFalse) {
Clazz.super_(C$, this);
this.forTrue=forTrue;
this.forFalse=forFalse;
}, 1);

Clazz.newMeth(C$, 'entrySet$',  function () {
return ((P$.Collectors$Partition$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Collectors$Partition$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.util.AbstractSet'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'iterator$',  function () {
var falseEntry=Clazz.new_([Boolean.valueOf$Z(false), this.b$['java.util.stream.Collectors.Partition'].forFalse],$I$(2,1).c$$O$O);
var trueEntry=Clazz.new_([Boolean.valueOf$Z(true), this.b$['java.util.stream.Collectors.Partition'].forTrue],$I$(2,1).c$$O$O);
return $I$(3,"asList$OA",[Clazz.array($I$(4), -1, [falseEntry, trueEntry])]).iterator$();
});

Clazz.newMeth(C$, 'size$',  function () {
return 2;
});
})()
), Clazz.new_($I$(5,1),[this, null],P$.Collectors$Partition$1));
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:41 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
