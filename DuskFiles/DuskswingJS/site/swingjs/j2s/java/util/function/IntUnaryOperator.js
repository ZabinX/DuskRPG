(function(){var P$=Clazz.newPackage("java.util.function"),I$=[[0,'java.util.Objects']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "IntUnaryOperator");

Clazz.newMeth(C$, 'identity$',  function () {
return (P$.IntUnaryOperator$lambda3$||(P$.IntUnaryOperator$lambda3$=(((P$.IntUnaryOperator$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntUnaryOperator$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntUnaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['applyAsInt$I','applyAsInt$O'],  function (t) { return (t);});
})()
), Clazz.new_(P$.IntUnaryOperator$lambda3.$init$,[this, null])))));
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'compose$java_util_function_IntUnaryOperator',  function (before) {
$I$(1).requireNonNull$O(before);
return ((P$.IntUnaryOperator$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntUnaryOperator$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntUnaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['applyAsInt$I','applyAsInt$O'],  function (v) { return (this.applyAsInt$I(this.$finals$.before.applyAsInt$I(v)));});
})()
), Clazz.new_(P$.IntUnaryOperator$lambda1.$init$,[this, {before:before}]));
});

Clazz.newMeth(C$, 'andThen$java_util_function_IntUnaryOperator',  function (after) {
$I$(1).requireNonNull$O(after);
return ((P$.IntUnaryOperator$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntUnaryOperator$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntUnaryOperator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['applyAsInt$I','applyAsInt$O'],  function (t) { return (this.$finals$.after.applyAsInt$I(this.applyAsInt$I(t)));});
})()
), Clazz.new_(P$.IntUnaryOperator$lambda2.$init$,[this, {after:after}]));
});
};})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
