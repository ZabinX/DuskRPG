(function(){var P$=java.util,I$=[[0,['java.util.JSHashMap','.KeyIterator'],['java.util.JSHashMap','.EntryIterator'],['java.util.JSHashMap','.KeySet'],['java.util.JSHashMap','.EntrySet'],'InternalError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSHashMap", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractMap', ['java.util.Map', 'Cloneable', 'java.io.Serializable']);
C$.$classes$=[['KeySet',16],['EntrySet',16],['KeyIterator',0],['ValueIterator',16],['EntryIterator',16]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.jsmap={} ||null;
},1);

C$.$fields$=[['I',['size','modCount'],'O',['entrySet','java.util.Set','jsmap','java.lang.Object']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map',  function (m) {
Clazz.super_(C$, this);
this.putMapEntries$java_util_Map$Z(m, false);
}, 1);

Clazz.newMeth(C$, 'putMapEntries$java_util_Map$Z',  function (m, evict) {
var s=m.size$();
if (s > 0) {
for (var e, $e = m.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var hash=0;
var key=e.getKey$();
var value=e.getValue$();
this.putVal$O$O$Z$Z(key, value, false, evict);
}
}});

Clazz.newMeth(C$, 'size$',  function () {
return this.size;
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.size == 0;
});

Clazz.newMeth(C$, 'get$O',  function (key) {

var v = this.jsmap[key]; return (v === undefined ? null : v);
return null;
});

Clazz.newMeth(C$, 'containsKey$O',  function (key) {

return this.jsmap[key] !== undefined;
return false;
});

Clazz.newMeth(C$, 'put$O$O',  function (key, value) {
return this.putVal$O$O$Z$Z(key, value, false, true);
});

Clazz.newMeth(C$, 'putVal$O$O$Z$Z',  function (key, value, onlyIfAbsent, evict) {

var v = this.jsmap[key];
if (!onlyIfAbsent || v == null) { this.jsmap[key] = value;
this.modCount++;
if (v === undefined) this.size++;
return v;
}
return null;
});

Clazz.newMeth(C$, 'putAll$java_util_Map',  function (m) {
this.putMapEntries$java_util_Map$Z(m, true);
});

Clazz.newMeth(C$, 'remove$O',  function (key) {
++this.modCount;

var v = this.jsmap[key];
delete this.jsmap.key;
return (v === undefined ? null : v);
return null;
});

Clazz.newMeth(C$, 'clear$',  function () {

this.jsmap={};
++this.modCount;
this.size=0;
});

Clazz.newMeth(C$, 'containsValue$O',  function (value) {
return false;
});

Clazz.newMeth(C$, 'keySet$',  function () {
var ks;
return (ks=this.keySet) == null  ? (this.keySet=Clazz.new_($I$(3,1),[this, null])) : ks;
});

Clazz.newMeth(C$, 'entrySet$',  function () {
var es;
return (es=this.entrySet) == null  ? (this.entrySet=Clazz.new_($I$(4,1),[this, null])) : es;
});

Clazz.newMeth(C$, 'getOrDefault$O$O',  function (key, defaultValue) {

var val = jsmap[key];
return (val === undefined ? defaultValue : val);
return null;
});

Clazz.newMeth(C$, 'putIfAbsent$O$O',  function (key, value) {

var val = jsmap[key]; if (val !== null && val !== undefined) return val;
return this.putVal$O$O$Z$Z(key, value, true, true);
});

Clazz.newMeth(C$, 'remove$O$O',  function (key, value) {
++this.modCount;

var v = this.jsmap[key];
if (v !== undefined) this.size--;
if (v != null && v.equals$O(value)) { delete this.jsmap.key;
return true;
}
return false;
});

Clazz.newMeth(C$, 'replace$O$O$O',  function (key, oldValue, newValue) {
var v=null;

v = this.jsmap[key];
if (v == null || !v.equals$O(oldValue)) { return false;
}
this.put$O$O(key, newValue);
return true;
});

Clazz.newMeth(C$, 'replace$O$O',  function (key, value) {
var v=null;

v = this.jsmap[key];
if (v == null) { return null;
}
this.put$O$O(key, value);
return v;
});

Clazz.newMeth(C$, 'computeIfAbsent$O$java_util_function_Function',  function (key, mappingFunction) {
if (mappingFunction == null ) throw Clazz.new_(Clazz.load('NullPointerException'));

var v = this.jsmap[key];
if (v != null) return v;
var v=mappingFunction.apply$O(key);
if (v == null ) {
return null;
}return this.put$O$O(key, v);
});

Clazz.newMeth(C$, 'clone$',  function () {
var result;
try {
result=C$.superclazz.prototype.clone$.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(5,1).c$$Throwable,[e]);
} else {
throw e;
}
}
result.reinitialize$();
result.putMapEntries$java_util_Map$Z(this, false);
return result;
});

Clazz.newMeth(C$, 'reinitialize$',  function () {
this.entrySet=null;
this.keySet=null;
this.values=null;
this.modCount=0;
this.size=0;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSHashMap, "KeySet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'size$',  function () {
return this.b$['java.util.JSHashMap'].size;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.b$['java.util.JSHashMap'].clear$.apply(this.b$['java.util.JSHashMap'], []);
});

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(1,1).c$$O,[this, null, this.b$['java.util.JSHashMap'].jsmap]);
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
return this.b$['java.util.JSHashMap'].containsKey$O.apply(this.b$['java.util.JSHashMap'], [o]);
});

Clazz.newMeth(C$, 'remove$O',  function (key) {
return this.b$['java.util.JSHashMap'].remove$O.apply(this.b$['java.util.JSHashMap'], [key]) != null ;
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer',  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var a=null;
if (this.b$['java.util.JSHashMap'].size > 0) {
var map=this.b$['java.util.JSHashMap'].jsmap;
var mc=this.b$['java.util.JSHashMap'].modCount;

a = [];
for (var k in map)a.push(k);
for (var i=0; i < this.b$['java.util.JSHashMap'].size; ++i) {
action.accept$O(a[i]);
}
if (this.b$['java.util.JSHashMap'].modCount != mc) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSHashMap, "EntrySet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'size$',  function () {
return this.b$['java.util.JSHashMap'].size;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.b$['java.util.JSHashMap'].clear$.apply(this.b$['java.util.JSHashMap'], []);
});

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(2,1).c$$O,[this, null, this.b$['java.util.JSHashMap'].jsmap]);
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var e=o;
var key=e.getKey$();
return (o.equals$O(this.b$['java.util.JSHashMap'].get$O.apply(this.b$['java.util.JSHashMap'], [key])));
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
if (Clazz.instanceOf(o, "java.util.Map.Entry")) {
var e=o;
var key=e.getKey$();
var value=e.getValue$();
return this.b$['java.util.JSHashMap'].remove$O$O.apply(this.b$['java.util.JSHashMap'], [key, value]);
}return false;
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer',  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var a=null;
if (this.b$['java.util.JSHashMap'].size > 0) {
var map=this.b$['java.util.JSHashMap'].jsmap;
var mc=this.b$['java.util.JSHashMap'].modCount;

a = [];
for (var k in map)a.push([k, map[k]]);
for (var i=0; i < this.b$['java.util.JSHashMap'].size; ++i) {
var key=null;
var value=null;
action.accept$O(((P$.JSHashMap$EntrySet$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JSHashMap$EntrySet$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['java.util.Map','java.util.Map.Entry']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getKey$',  function () {
return this.$finals$.key;
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.$finals$.value;
});

Clazz.newMeth(C$, 'setValue$O',  function (val) {
this.b$['java.util.JSHashMap'].put$O$O.apply(this.b$['java.util.JSHashMap'], [this.$finals$.key, val]);
return this.$finals$.value;
});
})()
), Clazz.new_(P$.JSHashMap$EntrySet$1.$init$,[this, {key:key,value:value}])));
}
if (this.b$['java.util.JSHashMap'].modCount != mc) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSHashMap, "KeyIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['a','Object[]']]]

Clazz.newMeth(C$, 'c$$O',  function (map) {
;C$.$init$.apply(this);

a = [];
for (var k in map) { a.push(k);
}
}, 1);

Clazz.newMeth(C$, 'next$',  function () {

return a.shift();
return null;
});

Clazz.newMeth(C$, 'hasNext$',  function () {
return !!a.length ||false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSHashMap, "ValueIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['a','Object[]']]]

Clazz.newMeth(C$, 'c$$O',  function (map) {
;C$.$init$.apply(this);

a = [];
for (var k in map) { a.push([k, map[k]]);
}
}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return !!a.length ||false;
});

Clazz.newMeth(C$, 'next$',  function () {

return a.shift();
return null;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSHashMap, "EntryIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['a','Object[]']]]

Clazz.newMeth(C$, 'c$$O',  function (map) {
;C$.$init$.apply(this);

a = [];
for (var k in map) { a.push([k, map[k]]);
}
}, 1);

Clazz.newMeth(C$, 'next$',  function () {
var key=null;
var value=null;
return ((P$.JSHashMap$EntryIterator$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JSHashMap$EntryIterator$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['java.util.Map','java.util.Map.Entry']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getKey$',  function () {
return this.$finals$.key;
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.$finals$.value;
});

Clazz.newMeth(C$, 'setValue$O',  function (val) {
this.b$['java.util.JSHashMap'].put$O$O.apply(this.b$['java.util.JSHashMap'], [this.$finals$.key, val]);
return this.$finals$.value;
});
})()
), Clazz.new_(P$.JSHashMap$EntryIterator$1.$init$,[this, {value:value,key:key}]));
});

Clazz.newMeth(C$, 'hasNext$',  function () {
return !!a.length ||false;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:33 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
