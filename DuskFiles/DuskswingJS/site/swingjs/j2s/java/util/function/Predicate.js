(function(){var P$=Clazz.newPackage("java.util.function"),I$=[[0,'java.util.Objects']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "Predicate");

Clazz.newMeth(C$, 'isEqual$O',  function (targetRef) {
return (null == targetRef ) ? (P$.Predicate$lambda4$||(P$.Predicate$lambda4$=((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "Predicate$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'test$O',  function (t) { return $$.isNull$O.apply(null,[t])});
})()
)); return Clazz.new_(P$.Predicate$lambda4.$init$,[this, null])})($I$(1))))) : ((P$.Predicate$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "Predicate$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'test$O',  function (object) { return (this.$finals$.targetRef.equals$O.apply(this.$finals$.targetRef, [object]));});
})()
), Clazz.new_(P$.Predicate$lambda5.$init$,[this, {targetRef:targetRef}]));
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'and$java_util_function_Predicate',  function (other) {
$I$(1).requireNonNull$O(other);
return ((P$.Predicate$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Predicate$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'test$O',  function (t) { return (this.test$O(t) && this.$finals$.other.test$O(t) );});
})()
), Clazz.new_(P$.Predicate$lambda1.$init$,[this, {other:other}]));
});

Clazz.newMeth(C$, 'negate$',  function () {
return (P$.Predicate$lambda2$||(P$.Predicate$lambda2$=(((P$.Predicate$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Predicate$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'test$O',  function (t) { return (!this.test$O(t));});
})()
), Clazz.new_(P$.Predicate$lambda2.$init$,[this, null])))));
});

Clazz.newMeth(C$, 'or$java_util_function_Predicate',  function (other) {
$I$(1).requireNonNull$O(other);
return ((P$.Predicate$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Predicate$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'test$O',  function (t) { return (this.test$O(t) || this.$finals$.other.test$O(t) );});
})()
), Clazz.new_(P$.Predicate$lambda3.$init$,[this, {other:other}]));
});
};})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
