(function(){var P$=Clazz.newPackage("java.util.concurrent.atomic"),p$1={},p$2={},I$=[[0,'java.util.concurrent.atomic.DoubleAccumulator','java.util.concurrent.atomic.Striped64',['java.util.concurrent.atomic.DoubleAccumulator','.SerializationProxy']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DoubleAccumulator", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.concurrent.atomic.Striped64', 'java.io.Serializable');
C$.$classes$=[['SerializationProxy',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['identity'],'O',['$function','java.util.function.DoubleBinaryOperator']]]

Clazz.newMeth(C$, 'c$$java_util_function_DoubleBinaryOperator$D',  function (accumulatorFunction, identity) {
Clazz.super_(C$, this);
this.$function=accumulatorFunction;
this.base=this.identity=Double.doubleToRawLongBits$D(identity);
}, 1);

Clazz.newMeth(C$, 'accumulate$D',  function (x) {
var as;
var b;
var v;
var r;
var m;
var a;
if ((as=this.cells) != null  || Long.$ne((r=Double.doubleToRawLongBits$D(this.$function.applyAsDouble$D$D(Double.longBitsToDouble$J(b=this.base), x))),b ) && !this.casBase$J$J(b, r)  ) {
var uncontended=true;
if (as == null  || (m=as.length - 1) < 0  || (a=as[$I$(2).getProbe$() & m]) == null   || !(uncontended=Long.$eq((r=Double.doubleToRawLongBits$D(this.$function.applyAsDouble$D$D(Double.longBitsToDouble$J(v=a.value), x))),v ) || a.cas$J$J(v, r) ) ) this.doubleAccumulate$D$java_util_function_DoubleBinaryOperator$Z(x, this.$function, uncontended);
}});

Clazz.newMeth(C$, 'get$',  function () {
var as=this.cells;
var a;
var result=Double.longBitsToDouble$J(this.base);
if (as != null ) {
for (var i=0; i < as.length; ++i) {
if ((a=as[i]) != null ) result=this.$function.applyAsDouble$D$D(result, Double.longBitsToDouble$J(a.value));
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
var result=Double.longBitsToDouble$J(this.base);
this.base=this.identity;
if (as != null ) {
for (var i=0; i < as.length; ++i) {
if ((a=as[i]) != null ) {
var v=Double.longBitsToDouble$J(a.value);
a.value=this.identity;
result=this.$function.applyAsDouble$D$D(result, v);
}}
}return result;
});

Clazz.newMeth(C$, 'toString',  function () {
return Double.toString$D(this.get$());
});

Clazz.newMeth(C$, 'doubleValue$',  function () {
return this.get$();
});

Clazz.newMeth(C$, 'longValue$',  function () {
return Clazz.toLong(this.get$());
});

Clazz.newMeth(C$, 'intValue$',  function () {
return (this.get$()|0);
});

Clazz.newMeth(C$, 'floatValue$',  function () {
return this.get$();
});

Clazz.newMeth(C$, 'writeReplace',  function () {
return Clazz.new_($I$(3,1).c$$java_util_concurrent_atomic_DoubleAccumulator,[this]);
}, p$2);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Proxy required"]);
}, p$2);
;
(function(){/*c*/var C$=Clazz.newClass(P$.DoubleAccumulator, "SerializationProxy", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['value'],'J',['identity'],'O',['$function','java.util.function.DoubleBinaryOperator']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_atomic_DoubleAccumulator',  function (a) {
;C$.$init$.apply(this);
this.$function=a.$function;
this.identity=a.identity;
this.value=a.get$();
}, 1);

Clazz.newMeth(C$, 'readResolve',  function () {
var d=Double.longBitsToDouble$J(this.identity);
var a=Clazz.new_($I$(1,1).c$$java_util_function_DoubleBinaryOperator$D,[this.$function, d]);
a.base=Double.doubleToRawLongBits$D(this.value);
return a;
}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
