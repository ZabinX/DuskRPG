(function(){var P$=Clazz.newPackage("java.util.function"),I$=[[0,'java.util.Objects']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "IntPredicate");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'and$java_util_function_IntPredicate',  function (other) {
$I$(1).requireNonNull$O(other);
return ((P$.IntPredicate$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntPredicate$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntPredicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$I','test$O'],  function (value) { return (this.test$I(value) && this.$finals$.other.test$I(value) );});
})()
), Clazz.new_(P$.IntPredicate$lambda1.$init$,[this, {other:other}]));
});

Clazz.newMeth(C$, 'negate$',  function () {
return (P$.IntPredicate$lambda2$||(P$.IntPredicate$lambda2$=(((P$.IntPredicate$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntPredicate$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntPredicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$I','test$O'],  function (value) { return (!this.test$I(value));});
})()
), Clazz.new_(P$.IntPredicate$lambda2.$init$,[this, null])))));
});

Clazz.newMeth(C$, 'or$java_util_function_IntPredicate',  function (other) {
$I$(1).requireNonNull$O(other);
return ((P$.IntPredicate$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntPredicate$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntPredicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$I','test$O'],  function (value) { return (this.test$I(value) || this.$finals$.other.test$I(value) );});
})()
), Clazz.new_(P$.IntPredicate$lambda3.$init$,[this, {other:other}]));
});
};})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
