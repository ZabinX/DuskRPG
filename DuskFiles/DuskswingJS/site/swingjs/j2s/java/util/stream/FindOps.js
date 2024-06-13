(function(){var P$=Clazz.newPackage("java.util.stream"),p$1={},I$=[[0,'java.util.stream.StreamOpFlag',['java.util.stream.FindOps','.FindTask'],'java.util.Optional','java.util.OptionalInt','java.util.OptionalLong','java.util.OptionalDouble',['java.util.stream.FindOps','.FindOp'],'java.util.stream.StreamShape',['java.util.stream.FindOps','.FindSink','.OfRef'],['java.util.stream.FindOps','.FindSink','.OfInt'],['java.util.stream.FindOps','.FindSink','.OfLong'],['java.util.stream.FindOps','.FindSink','.OfDouble']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FindOps", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['FindOp',26],['FindSink',1034],['FindTask',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'makeRef$Z',  function (mustFindFirst) {
return Clazz.new_([mustFindFirst, $I$(8).REFERENCE, $I$(3).empty$(), (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "FindOps$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'test$O',  function (t) { return t.isPresent$.apply(t,[])});
})()
)); return Clazz.new_(P$.FindOps$lambda1.$init$,[this, null])})($I$(3)), ((P$.FindOps$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "FindOps$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$',  function () { return Clazz.new_($I$(9,1),[])});
})()
), Clazz.new_(P$.FindOps$lambda2.$init$,[this, null]))],$I$(7,1).c$$Z$java_util_stream_StreamShape$O$java_util_function_Predicate$java_util_function_Supplier);
}, 1);

Clazz.newMeth(C$, 'makeInt$Z',  function (mustFindFirst) {
return Clazz.new_([mustFindFirst, $I$(8).INT_VALUE, $I$(4).empty$(), (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "FindOps$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'test$O',  function (t) { return t.isPresent$.apply(t,[])});
})()
)); return Clazz.new_(P$.FindOps$lambda3.$init$,[this, null])})($I$(4)), ((P$.FindOps$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "FindOps$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$',  function () { return Clazz.new_($I$(10,1),[])});
})()
), Clazz.new_(P$.FindOps$lambda4.$init$,[this, null]))],$I$(7,1).c$$Z$java_util_stream_StreamShape$O$java_util_function_Predicate$java_util_function_Supplier);
}, 1);

Clazz.newMeth(C$, 'makeLong$Z',  function (mustFindFirst) {
return Clazz.new_([mustFindFirst, $I$(8).LONG_VALUE, $I$(5).empty$(), (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "FindOps$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'test$O',  function (t) { return t.isPresent$.apply(t,[])});
})()
)); return Clazz.new_(P$.FindOps$lambda5.$init$,[this, null])})($I$(5)), ((P$.FindOps$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "FindOps$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$',  function () { return Clazz.new_($I$(11,1),[])});
})()
), Clazz.new_(P$.FindOps$lambda6.$init$,[this, null]))],$I$(7,1).c$$Z$java_util_stream_StreamShape$O$java_util_function_Predicate$java_util_function_Supplier);
}, 1);

Clazz.newMeth(C$, 'makeDouble$Z',  function (mustFindFirst) {
return Clazz.new_([mustFindFirst, $I$(8).DOUBLE_VALUE, $I$(6).empty$(), (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "FindOps$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'test$O',  function (t) { return t.isPresent$.apply(t,[])});
})()
)); return Clazz.new_(P$.FindOps$lambda7.$init$,[this, null])})($I$(6)), ((P$.FindOps$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "FindOps$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_C*/
Clazz.newMeth(C$, 'get$',  function () { return Clazz.new_($I$(12,1),[])});
})()
), Clazz.new_(P$.FindOps$lambda8.$init$,[this, null]))],$I$(7,1).c$$Z$java_util_stream_StreamShape$O$java_util_function_Predicate$java_util_function_Supplier);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.FindOps, "FindOp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.stream.TerminalOp');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['mustFindFirst'],'O',['shape','java.util.stream.StreamShape','emptyValue','<O>','presentPredicate','java.util.function.Predicate','sinkSupplier','java.util.function.Supplier']]]

Clazz.newMeth(C$, 'c$$Z$java_util_stream_StreamShape$O$java_util_function_Predicate$java_util_function_Supplier',  function (mustFindFirst, shape, emptyValue, presentPredicate, sinkSupplier) {
;C$.$init$.apply(this);
this.mustFindFirst=mustFindFirst;
this.shape=shape;
this.emptyValue=emptyValue;
this.presentPredicate=presentPredicate;
this.sinkSupplier=sinkSupplier;
}, 1);

Clazz.newMeth(C$, 'getOpFlags$',  function () {
return $I$(1).IS_SHORT_CIRCUIT | (this.mustFindFirst ? 0 : $I$(1).NOT_ORDERED);
});

Clazz.newMeth(C$, 'inputShape$',  function () {
return this.shape;
});

Clazz.newMeth(C$, 'evaluateSequential$java_util_stream_PipelineHelper$java_util_Spliterator',  function (helper, spliterator) {
var result=helper.wrapAndCopyInto$java_util_stream_Sink$java_util_Spliterator(this.sinkSupplier.get$(), spliterator).get$();
return result != null  ? result : this.emptyValue;
});

Clazz.newMeth(C$, 'evaluateParallel$java_util_stream_PipelineHelper$java_util_Spliterator',  function (helper, spliterator) {
return Clazz.new_($I$(2,1).c$$java_util_stream_FindOps_FindOp$java_util_stream_PipelineHelper$java_util_Spliterator,[this, helper, spliterator]).invoke$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FindOps, "FindSink", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.stream.TerminalSink');
C$.$classes$=[['OfRef',24],['OfInt',24],['OfLong',24],['OfDouble',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['hasValue'],'O',['value','<T>']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'accept$O',  function (value) {
if (!this.hasValue) {
this.hasValue=true;
this.value=value;
}});

Clazz.newMeth(C$, 'cancellationRequested$',  function () {
return this.hasValue;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.FindOps.FindSink, "OfRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.FindOps','.FindSink']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'get$',  function () {
return this.hasValue ? $I$(3).of$O(this.value) : null;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FindOps.FindSink, "OfInt", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.FindOps','.FindSink'], [['java.util.stream.Sink','java.util.stream.Sink.OfInt']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$I',  function (value) {
this.accept$O(value);
});

Clazz.newMeth(C$, 'get$',  function () {
return this.hasValue ? $I$(4,"of$I",[(this.value).$c()]) : null;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FindOps.FindSink, "OfLong", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.FindOps','.FindSink'], [['java.util.stream.Sink','java.util.stream.Sink.OfLong']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$J',  function (value) {
this.accept$O(value);
});

Clazz.newMeth(C$, 'get$',  function () {
return this.hasValue ? $I$(5,"of$J",[(this.value).valueOf()]) : null;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FindOps.FindSink, "OfDouble", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.stream.FindOps','.FindSink'], [['java.util.stream.Sink','java.util.stream.Sink.OfDouble']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$D',  function (value) {
this.accept$O(value);
});

Clazz.newMeth(C$, 'get$',  function () {
return this.hasValue ? $I$(6,"of$D",[(this.value).valueOf()]) : null;
});

Clazz.newMeth(C$);
})()
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FindOps, "FindTask", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.stream.AbstractShortCircuitTask');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['op','java.util.stream.FindOps.FindOp']]]

Clazz.newMeth(C$, 'c$$java_util_stream_FindOps_FindOp$java_util_stream_PipelineHelper$java_util_Spliterator',  function (op, helper, spliterator) {
;C$.superclazz.c$$java_util_stream_PipelineHelper$java_util_Spliterator.apply(this,[helper, spliterator]);C$.$init$.apply(this);
this.op=op;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_stream_FindOps_FindTask$java_util_Spliterator',  function (parent, spliterator) {
;C$.superclazz.c$$java_util_stream_AbstractShortCircuitTask$java_util_Spliterator.apply(this,[parent, spliterator]);C$.$init$.apply(this);
this.op=parent.op;
}, 1);

Clazz.newMeth(C$, 'makeChild$java_util_Spliterator',  function (spliterator) {
return Clazz.new_(C$.c$$java_util_stream_FindOps_FindTask$java_util_Spliterator,[this, spliterator]);
});

Clazz.newMeth(C$, 'getEmptyResult$',  function () {
return this.op.emptyValue;
});

Clazz.newMeth(C$, 'foundResult$O',  function (answer) {
if (this.isLeftmostNode$()) this.shortCircuit$O(answer);
 else this.cancelLaterNodes$();
}, p$1);

Clazz.newMeth(C$, 'doLeaf$',  function () {
var result=this.helper.wrapAndCopyInto$java_util_stream_Sink$java_util_Spliterator(this.op.sinkSupplier.get$(), this.spliterator).get$();
if (!this.op.mustFindFirst) {
if (result != null ) this.shortCircuit$O(result);
return null;
} else {
if (result != null ) {
p$1.foundResult$O.apply(this, [result]);
return result;
} else return null;
}});

Clazz.newMeth(C$, 'onCompletion$java_util_concurrent_CountedCompleter',  function ($caller) {
if (this.op.mustFindFirst) {
for (var child=this.leftChild, p=null; child !== p ; p=child, child=this.rightChild) {
var result=child.getLocalResult$();
if (result != null  && this.op.presentPredicate.test$O(result) ) {
this.setLocalResult$O(result);
p$1.foundResult$O.apply(this, [result]);
break;
}}
}C$.superclazz.prototype.onCompletion$java_util_concurrent_CountedCompleter.apply(this, [$caller]);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:41 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
