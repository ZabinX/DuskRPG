(function(){var P$=Clazz.newPackage("java.util.concurrent.atomic"),p$1={},p$2={},I$=[[0,'java.util.concurrent.atomic.LongAccumulator','java.util.concurrent.atomic.Striped64',['java.util.concurrent.atomic.LongAccumulator','.SerializationProxy']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LongAccumulator", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.concurrent.atomic.Striped64', 'java.io.Serializable');
C$.$classes$=[['SerializationProxy',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['identity'],'O',['$function','java.util.function.LongBinaryOperator']]]

Clazz.newMeth(C$, 'c$$java_util_function_LongBinaryOperator$J',  function (accumulatorFunction, identity) {
Clazz.super_(C$, this);
this.$function=accumulatorFunction;
this.base=this.identity=identity;
}, 1);

Clazz.newMeth(C$, 'accumulate$J',  function (x) {
var as;
var b;
var v;
var r;
var m;
var a;
if ((as=this.cells) != null  || Long.$ne((r=this.$function.applyAsLong$J$J(b=this.base, x)),b ) && !this.casBase$J$J(b, r)  ) {
var uncontended=true;
if (as == null  || (m=as.length - 1) < 0  || (a=as[$I$(2).getProbe$() & m]) == null   || !(uncontended=Long.$eq((r=this.$function.applyAsLong$J$J(v=a.value, x)),v ) || a.cas$J$J(v, r) ) ) this.longAccumulate$J$java_util_function_LongBinaryOperator$Z(x, this.$function, uncontended);
}});

Clazz.newMeth(C$, 'get$',  function () {
var as=this.cells;
var a;
var result=this.base;
if (as != null ) {
for (var i=0; i < as.length; ++i) {
if ((a=as[i]) != null ) result=this.$function.applyAsLong$J$J(result, a.value);
}
}return result;
});

Clazz.newMeth(C$, 'reset$',  function () {
var as=this.cells;
var a;
this.base=this.identity;
if (as != null ) {
for (var i=0; i < as.length; ++i) {
if ((a=as[i]) != null ) a.value=this.identity;
}
}});

Clazz.newMeth(C$, 'getThenReset$',  function () {
var as=this.cells;
var a;
var result=this.base;
this.base=this.identity;
if (as != null ) {
for (var i=0; i < as.length; ++i) {
if ((a=as[i]) != null ) {
var v=a.value;
a.value=this.identity;
result=this.$function.applyAsLong$J$J(result, v);
}}
}return result;
});

Clazz.newMeth(C$, 'toString',  function () {
return Long.toString$J(this.get$());
});

Clazz.newMeth(C$, 'longValue$',  function () {
return this.get$();
});

Clazz.newMeth(C$, 'intValue$',  function () {
return Long.$ival(this.get$());
});

Clazz.newMeth(C$, 'floatValue$',  function () {
return Long.$fval(this.get$());
});

Clazz.newMeth(C$, 'doubleValue$',  function () {
return Long.$dval(this.get$());
});

Clazz.newMeth(C$, 'writeReplace',  function () {
return Clazz.new_($I$(3,1).c$$java_util_concurrent_atomic_LongAccumulator,[this]);
}, p$2);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Proxy required"]);
}, p$2);
;
(function(){/*c*/var C$=Clazz.newClass(P$.LongAccumulator, "SerializationProxy", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['value','identity'],'O',['$function','java.util.function.LongBinaryOperator']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_atomic_LongAccumulator',  function (a) {
;C$.$init$.apply(this);
this.$function=a.$function;
this.identity=a.identity;
this.value=a.get$();
}, 1);

Clazz.newMeth(C$, 'readResolve',  function () {
var a=Clazz.new_($I$(1,1).c$$java_util_function_LongBinaryOperator$J,[this.$function, this.identity]);
a.base=this.value;
return a;
}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
