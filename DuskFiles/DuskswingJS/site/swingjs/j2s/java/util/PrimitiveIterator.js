(function(){var P$=java.util,I$=[[0,'java.util.Objects']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "PrimitiveIterator", function(){
}, null, 'java.util.Iterator');
C$.$classes$=[['OfInt',9],['OfLong',9],['OfDouble',9]];

C$.$clinit$=2;
;
(function(){/*i*/var C$=Clazz.newInterface(P$.PrimitiveIterator, "OfInt", function(){
}, null, 'java.util.PrimitiveIterator');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_IntConsumer','forEachRemaining$O'],  function (action) {
$I$(1).requireNonNull$O(action);
while (this.hasNext$())action.accept$I(this.nextInt$());

});

Clazz.newMeth(C$, 'next$',  function () {
return Integer.valueOf$I(this.nextInt$());
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
if (Clazz.instanceOf(action, "java.util.function.IntConsumer")) {
this.forEachRemaining$java_util_function_IntConsumer(action);
} else {
$I$(1).requireNonNull$O(action);
this.forEachRemaining$java_util_function_IntConsumer((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "PrimitiveIterator$OfInt$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['accept$I','accept$O'],  function (t) { return $$.accept$O.apply($$,[t])});
})()
)); return Clazz.new_(P$.PrimitiveIterator$OfInt$lambda1.$init$,[this, null])})(action));
}});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.PrimitiveIterator, "OfLong", function(){
}, null, 'java.util.PrimitiveIterator');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_LongConsumer','forEachRemaining$O'],  function (action) {
$I$(1).requireNonNull$O(action);
while (this.hasNext$())action.accept$J(this.nextLong$());

});

Clazz.newMeth(C$, 'next$',  function () {
return Long.valueOf$J(this.nextLong$());
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
if (Clazz.instanceOf(action, "java.util.function.LongConsumer")) {
this.forEachRemaining$java_util_function_LongConsumer(action);
} else {
$I$(1).requireNonNull$O(action);
this.forEachRemaining$java_util_function_LongConsumer((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "PrimitiveIterator$OfLong$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.LongConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['accept$J','accept$O'],  function (t) { return $$.accept$O.apply($$,[t])});
})()
)); return Clazz.new_(P$.PrimitiveIterator$OfLong$lambda1.$init$,[this, null])})(action));
}});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.PrimitiveIterator, "OfDouble", function(){
}, null, 'java.util.PrimitiveIterator');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['forEachRemaining$java_util_function_DoubleConsumer','forEachRemaining$O'],  function (action) {
$I$(1).requireNonNull$O(action);
while (this.hasNext$())action.accept$D(this.nextDouble$());

});

Clazz.newMeth(C$, 'next$',  function () {
return Double.valueOf$D(this.nextDouble$());
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
if (Clazz.instanceOf(action, "java.util.function.DoubleConsumer")) {
this.forEachRemaining$java_util_function_DoubleConsumer(action);
} else {
$I$(1).requireNonNull$O(action);
this.forEachRemaining$java_util_function_DoubleConsumer((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "PrimitiveIterator$OfDouble$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['accept$D','accept$O'],  function (t) { return $$.accept$O.apply($$,[t])});
})()
)); return Clazz.new_(P$.PrimitiveIterator$OfDouble$lambda1.$init$,[this, null])})(action));
}});
};})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:33 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
