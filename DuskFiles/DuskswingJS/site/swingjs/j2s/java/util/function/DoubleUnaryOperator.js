(function(){var P$=Clazz.newPackage("java.util.function"),I$=[[0,'java.util.Objects']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "DoubleUnaryOperator");

Clazz.newMeth(C$, 'identity$',  function () {
return (P$.DoubleUnaryOperator$lambda3$||(P$.DoubleUnaryOperator$lambda3$=(((P$.DoubleUnaryOperator$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "DoubleUnaryOperator$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleUnaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['applyAsDouble$D','applyAsDouble$O'],  function (t) { return (t);});
})()
), Clazz.new_(P$.DoubleUnaryOperator$lambda3.$init$,[this, null])))));
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'compose$java_util_function_DoubleUnaryOperator',  function (before) {
$I$(1).requireNonNull$O(before);
return ((P$.DoubleUnaryOperator$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DoubleUnaryOperator$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleUnaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['applyAsDouble$D','applyAsDouble$O'],  function (v) { return (this.applyAsDouble$D(this.$finals$.before.applyAsDouble$D(v)));});
})()
), Clazz.new_(P$.DoubleUnaryOperator$lambda1.$init$,[this, {before:before}]));
});

Clazz.newMeth(C$, 'andThen$java_util_function_DoubleUnaryOperator',  function (after) {
$I$(1).requireNonNull$O(after);
return ((P$.DoubleUnaryOperator$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "DoubleUnaryOperator$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleUnaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['applyAsDouble$D','applyAsDouble$O'],  function (t) { return (this.$finals$.after.applyAsDouble$D(this.applyAsDouble$D(t)));});
})()
), Clazz.new_(P$.DoubleUnaryOperator$lambda2.$init$,[this, {after:after}]));
});
};})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
