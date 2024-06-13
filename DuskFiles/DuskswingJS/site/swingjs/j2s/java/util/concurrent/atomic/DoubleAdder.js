(function(){var P$=Clazz.newPackage("java.util.concurrent.atomic"),p$1={},p$2={},I$=[[0,'java.util.concurrent.atomic.DoubleAdder','java.util.concurrent.atomic.Striped64',['java.util.concurrent.atomic.DoubleAdder','.SerializationProxy']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DoubleAdder", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.concurrent.atomic.Striped64', 'java.io.Serializable');
C$.$classes$=[['SerializationProxy',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'add$D',  function (x) {
var as;
var b;
var v;
var m;
var a;
if ((as=this.cells) != null  || !this.casBase$J$J(b=this.base, Double.doubleToRawLongBits$D(Double.longBitsToDouble$J(b) + x)) ) {
var uncontended=true;
if (as == null  || (m=as.length - 1) < 0  || (a=as[$I$(2).getProbe$() & m]) == null   || !(uncontended=a.cas$J$J(v=a.value, Double.doubleToRawLongBits$D(Double.longBitsToDouble$J(v) + x))) ) this.doubleAccumulate$D$java_util_function_DoubleBinaryOperator$Z(x, null, uncontended);
}});

Clazz.newMeth(C$, 'sum$',  function () {
var as=this.cells;
var a;
var sum=Double.longBitsToDouble$J(this.base);
if (as != null ) {
for (var i=0; i < as.length; ++i) {
if ((a=as[i]) != null ) sum+=Double.longBitsToDouble$J(a.value);
}
}return sum;
});

Clazz.newMeth(C$, 'reset$',  function () {
var as=this.cells;
var a;
this.base=0;
if (as != null ) {
for (var i=0; i < as.length; ++i) {
if ((a=as[i]) != null ) a.value=0;
}
}});

Clazz.newMeth(C$, 'sumThenReset$',  function () {
var as=this.cells;
var a;
var sum=Double.longBitsToDouble$J(this.base);
this.base=0;
if (as != null ) {
for (var i=0; i < as.length; ++i) {
if ((a=as[i]) != null ) {
var v=a.value;
a.value=0;
sum+=Double.longBitsToDouble$J(v);
}}
}return sum;
});

Clazz.newMeth(C$, 'toString',  function () {
return Double.toString$D(this.sum$());
});

Clazz.newMeth(C$, 'doubleValue$',  function () {
return this.sum$();
});

Clazz.newMeth(C$, 'longValue$',  function () {
return Clazz.toLong(this.sum$());
});

Clazz.newMeth(C$, 'intValue$',  function () {
return (this.sum$()|0);
});

Clazz.newMeth(C$, 'floatValue$',  function () {
return this.sum$();
});

Clazz.newMeth(C$, 'writeReplace',  function () {
return Clazz.new_($I$(3,1).c$$java_util_concurrent_atomic_DoubleAdder,[this]);
}, p$2);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["Proxy required"]);
}, p$2);
;
(function(){/*c*/var C$=Clazz.newClass(P$.DoubleAdder, "SerializationProxy", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['value']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_atomic_DoubleAdder',  function (a) {
;C$.$init$.apply(this);
this.value=a.sum$();
}, 1);

Clazz.newMeth(C$, 'readResolve',  function () {
var a=Clazz.new_($I$(1,1));
a.base=Double.doubleToRawLongBits$D(this.value);
return a;
}, p$1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:38 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
