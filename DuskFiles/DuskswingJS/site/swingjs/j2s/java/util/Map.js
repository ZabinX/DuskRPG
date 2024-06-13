(function(){var P$=java.util,I$=[[0,'java.util.Objects']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "Map", function(){
});
C$.$classes$=[['Entry',9]];

Clazz.newMeth(C$, '秘ensureJavaMap$java_util_Map',  function (map) {

if (map.秘m) { var m = map.秘m;
map.秘m = null;
m.forEach(function(value, key){map.put$O$O(key, value);});
m.clear();
}
}, 1);

Clazz.newMeth(C$, '秘isSimple$java_util_Map',  function (map) {
{
return !!map.秘m;
}
}, 1);

Clazz.newMeth(C$, '秘hasKey$java_util_Map$O',  function (map, key) {
{
return (!map.秘m ? 0 : key != null && typeof key != "string" ? 1 : map.秘m.has(key) ? 3 : 2);
}
}, 1);

Clazz.newMeth(C$, '秘set$java_util_Map$O$O',  function (map, key, value) {

map.秘m.set(key == null ? null : key + "", value)
}, 1);

Clazz.newMeth(C$, '秘get$O$O',  function (map, key) {
{
return map.秘m.get(key == null ? null : key + "")
}
}, 1);
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getOrDefault$O$O',  function (key, defaultValue) {
var v;
return (((v=this.get$O(key)) != null ) || this.containsKey$O(key) ) ? v : defaultValue;
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
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException').c$$Throwable,[ise]);
} else {
throw ise;
}
}
action.accept$O$O(k, v);
}
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_BiFunction',  function ($function) {
$I$(1).requireNonNull$O($function);
for (var entry, $entry = this.entrySet$().iterator$(); $entry.hasNext$()&&((entry=($entry.next$())),1);) {
var k;
var v;
try {
k=entry.getKey$();
v=entry.getValue$();
} catch (ise) {
if (Clazz.exceptionOf(ise,"IllegalStateException")){
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException').c$$Throwable,[ise]);
} else {
throw ise;
}
}
v=$function.apply$O$O(k, v);
try {
entry.setValue$O(v);
} catch (ise) {
if (Clazz.exceptionOf(ise,"IllegalStateException")){
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException').c$$Throwable,[ise]);
} else {
throw ise;
}
}
}
});

Clazz.newMeth(C$, 'putIfAbsent$O$O',  function (key, value) {
var v=this.get$O(key);
if (v == null ) {
v=this.put$O$O(key, value);
}return v;
});

Clazz.newMeth(C$, 'remove$O$O',  function (key, value) {
var curValue=this.get$O(key);
if (!$I$(1).equals$O$O(curValue, value) || (curValue == null  && !this.containsKey$O(key) ) ) {
return false;
}this.remove$O(key);
return true;
});

Clazz.newMeth(C$, 'replace$O$O$O',  function (key, oldValue, newValue) {
var curValue=this.get$O(key);
if (!$I$(1).equals$O$O(curValue, oldValue) || (curValue == null  && !this.containsKey$O(key) ) ) {
return false;
}this.put$O$O(key, newValue);
return true;
});

Clazz.newMeth(C$, 'replace$O$O',  function (key, value) {
var curValue;
if (((curValue=this.get$O(key)) != null ) || this.containsKey$O(key) ) {
curValue=this.put$O$O(key, value);
}return curValue;
});

Clazz.newMeth(C$, 'computeIfAbsent$O$java_util_function_Function',  function (key, mappingFunction) {
$I$(1).requireNonNull$O(mappingFunction);
var v;
if ((v=this.get$O(key)) == null ) {
var newValue;
if ((newValue=mappingFunction.apply$O(key)) != null ) {
this.put$O$O(key, newValue);
return newValue;
}}return v;
});

Clazz.newMeth(C$, 'computeIfPresent$O$java_util_function_BiFunction',  function (key, remappingFunction) {
$I$(1).requireNonNull$O(remappingFunction);
var oldValue;
if ((oldValue=this.get$O(key)) != null ) {
var newValue=remappingFunction.apply$O$O(key, oldValue);
if (newValue != null ) {
this.put$O$O(key, newValue);
return newValue;
} else {
this.remove$O(key);
return null;
}} else {
return null;
}});

Clazz.newMeth(C$, 'compute$O$java_util_function_BiFunction',  function (key, remappingFunction) {
$I$(1).requireNonNull$O(remappingFunction);
var oldValue=this.get$O(key);
var newValue=remappingFunction.apply$O$O(key, oldValue);
if (newValue == null ) {
if (oldValue != null  || this.containsKey$O(key) ) {
this.remove$O(key);
return null;
} else {
return null;
}} else {
this.put$O$O(key, newValue);
return newValue;
}});

Clazz.newMeth(C$, 'merge$O$O$java_util_function_BiFunction',  function (key, value, remappingFunction) {
$I$(1).requireNonNull$O(remappingFunction);
$I$(1).requireNonNull$O(value);
var oldValue=this.get$O(key);
var newValue=(oldValue == null ) ? value : remappingFunction.apply$O$O(oldValue, value);
if (newValue == null ) {
this.remove$O(key);
} else {
this.put$O$O(key, newValue);
}return newValue;
});
};;
(function(){/*i*/var C$=Clazz.newInterface(P$.Map, "Entry", function(){
});

Clazz.newMeth(C$, 'comparingByKey$',  function () {
return ((P$.Map$Entry$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Map$Entry$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.Serializable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['compare$java_util_Map_Entry$java_util_Map_Entry','compare$O$O'],  function (c1, c2) { return (c1.getKey$.apply(c1, []).compareTo$O.apply(c1.getKey$.apply(c1, []), [c2.getKey$.apply(c2, [])]));});
})()
), Clazz.new_(P$.Map$Entry$lambda1.$init$,[this, null]));
}, 1);

Clazz.newMeth(C$, 'comparingByValue$',  function () {
return ((P$.Map$Entry$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "Map$Entry$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.Serializable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['compare$java_util_Map_Entry$java_util_Map_Entry','compare$O$O'],  function (c1, c2) { return (c1.getValue$.apply(c1, []).compareTo$O.apply(c1.getValue$.apply(c1, []), [c2.getValue$.apply(c2, [])]));});
})()
), Clazz.new_(P$.Map$Entry$lambda2.$init$,[this, null]));
}, 1);

Clazz.newMeth(C$, 'comparingByKey$java_util_Comparator',  function (cmp) {
$I$(1).requireNonNull$O(cmp);
return ((P$.Map$Entry$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "Map$Entry$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.Serializable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['compare$java_util_Map_Entry$java_util_Map_Entry','compare$O$O'],  function (c1, c2) { return (this.$finals$.cmp.compare$O$O.apply(this.$finals$.cmp, [c1.getKey$.apply(c1, []), c2.getKey$.apply(c2, [])]));});
})()
), Clazz.new_(P$.Map$Entry$lambda3.$init$,[this, {cmp:cmp}]));
}, 1);

Clazz.newMeth(C$, 'comparingByValue$java_util_Comparator',  function (cmp) {
$I$(1).requireNonNull$O(cmp);
return ((P$.Map$Entry$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "Map$Entry$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.Serializable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['compare$java_util_Map_Entry$java_util_Map_Entry','compare$O$O'],  function (c1, c2) { return (this.$finals$.cmp.compare$O$O.apply(this.$finals$.cmp, [c1.getValue$.apply(c1, []), c2.getValue$.apply(c2, [])]));});
})()
), Clazz.new_(P$.Map$Entry$lambda4.$init$,[this, {cmp:cmp}]));
}, 1);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:33 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
