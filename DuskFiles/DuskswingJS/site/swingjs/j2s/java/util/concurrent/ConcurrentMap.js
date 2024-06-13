(function(){var P$=Clazz.newPackage("java.util.concurrent"),I$=[[0,'java.util.Objects']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "ConcurrentMap", null, null, 'java.util.Map');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getOrDefault$O$O',  function (key, defaultValue) {
var v;
return ((v=this.get$O(key)) != null ) ? v : defaultValue;
});

Clazz.newMeth(C$, 'forEach$java_util_function_BiConsumer',  function (action) {
$I$(1).requireNonNull$O(action);
for (var entry, $entry = this.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var k;
var v;
try {
k=entry.getKey$();
v=entry.getValue$();
} catch (ise) {
if (Clazz.exceptionOf(ise,"IllegalStateException")){
continue;
} else {
throw ise;
}
}
action.accept$O$O(k, v);
}
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_BiFunction',  function ($function) {
$I$(1).requireNonNull$O($function);
this.forEach$java_util_function_BiConsumer(((P$.ConcurrentMap$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ConcurrentMap$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.BiConsumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$O$O',  function (k, v) {
while (!this.b$['java.util.concurrent.ConcurrentMap'].replace$O$O$O.apply(this.b$['java.util.concurrent.ConcurrentMap'], [k, v, this.$finals$.$function.apply$O$O.apply(this.$finals$.$function, [k, v])])){
if ((v=this.b$['java.util.Map'].get$O.apply(this.b$['java.util.Map'], [k])) == null ) {
break;
}}
});
})()
), Clazz.new_(P$.ConcurrentMap$lambda1.$init$,[this, {$function:$function}])));
});

Clazz.newMeth(C$, 'computeIfAbsent$O$java_util_function_Function',  function (key, mappingFunction) {
$I$(1).requireNonNull$O(mappingFunction);
var v;
var newValue;
return ((v=this.get$O(key)) == null  && (newValue=mappingFunction.apply$O(key)) != null   && (v=this.putIfAbsent$O$O(key, newValue)) == null  ) ? newValue : v;
});

Clazz.newMeth(C$, 'computeIfPresent$O$java_util_function_BiFunction',  function (key, remappingFunction) {
$I$(1).requireNonNull$O(remappingFunction);
var oldValue;
while ((oldValue=this.get$O(key)) != null ){
var newValue=remappingFunction.apply$O$O(key, oldValue);
if (newValue != null ) {
if (this.replace$O$O$O(key, oldValue, newValue)) return newValue;
} else if (this.remove$O$O(key, oldValue)) return null;
}
return oldValue;
});

Clazz.newMeth(C$, 'compute$O$java_util_function_BiFunction',  function (key, remappingFunction) {
$I$(1).requireNonNull$O(remappingFunction);
var oldValue=this.get$O(key);
for (; ; ) {
var newValue=remappingFunction.apply$O$O(key, oldValue);
if (newValue == null ) {
if (oldValue != null  || this.containsKey$O(key) ) {
if (this.remove$O$O(key, oldValue)) {
return null;
}oldValue=this.get$O(key);
} else {
return null;
}} else {
if (oldValue != null ) {
if (this.replace$O$O$O(key, oldValue, newValue)) {
return newValue;
}oldValue=this.get$O(key);
} else {
if ((oldValue=this.putIfAbsent$O$O(key, newValue)) == null ) {
return newValue;
}}}}
});

Clazz.newMeth(C$, 'merge$O$O$java_util_function_BiFunction',  function (key, value, remappingFunction) {
$I$(1).requireNonNull$O(remappingFunction);
$I$(1).requireNonNull$O(value);
var oldValue=this.get$O(key);
for (; ; ) {
if (oldValue != null ) {
var newValue=remappingFunction.apply$O$O(oldValue, value);
if (newValue != null ) {
if (this.replace$O$O$O(key, oldValue, newValue)) return newValue;
} else if (this.remove$O$O(key, oldValue)) {
return null;
}oldValue=this.get$O(key);
} else {
if ((oldValue=this.putIfAbsent$O$O(key, value)) == null ) {
return value;
}}}
});
};})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:36 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
