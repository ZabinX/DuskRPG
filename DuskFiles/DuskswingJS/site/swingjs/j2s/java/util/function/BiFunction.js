(function(){var P$=Clazz.newPackage("java.util.function"),I$=[[0,'java.util.Objects']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "BiFunction");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'andThen$java_util_function_Function',  function (after) {
$I$(1).requireNonNull$O(after);
return ((P$.BiFunction$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "BiFunction$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$O$O',  function (t, u) { return (this.$finals$.after.apply$O.apply(this.$finals$.after, [this.apply$O$O(t, u)]));});
})()
), Clazz.new_(P$.BiFunction$lambda1.$init$,[this, {after:after}]));
});
};})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
