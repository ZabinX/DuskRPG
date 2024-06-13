(function(){var P$=java.util,p$1={},I$=[[0,'java.util.Map','java.util.Objects',['java.util.Hashtable','.Entry'],'InternalError','StringBuilder','java.util.Collections',['java.util.Hashtable','.Enumerator'],['java.util.Hashtable','.KeySet'],['java.util.Hashtable','.EntrySet'],['java.util.Hashtable','.ValueCollection'],'java.util.HashMap']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Hashtable", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.Dictionary', ['java.util.Map', 'Cloneable', 'java.io.Serializable']);
C$.$classes$=[['KeySet',2],['EntrySet',2],['ValueCollection',2],['Entry',10],['Enumerator',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.秘allowJS=false;
this.modCount=0;
},1);

C$.$fields$=[['Z',['秘allowJS'],'F',['loadFactor'],'I',['count','threshold','modCount'],'O',['秘m','java.util.Map','table','java.util.Hashtable.Entry[]','keySet','java.util.Set','+entrySet','values','java.util.Collection']]]

Clazz.newMeth(C$, 'c$$I$F',  function (initialCapacity, loadFactor) {
Clazz.super_(C$, this);
if (initialCapacity < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal Capacity: " + initialCapacity]);
if (loadFactor <= 0  || Float.isNaN$F(loadFactor) ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal Load: " + new Float(loadFactor).toString()]);
if (initialCapacity == 0) initialCapacity=1;
this.loadFactor=loadFactor;
this.table=Clazz.array($I$(3), [initialCapacity]);
this.threshold=(Math.min(initialCapacity * loadFactor, 2147483640)|0);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (initialCapacity) {
C$.c$$I$F.apply(this, [initialCapacity, 0.75]);
this.秘allowJS=true;
this.秘setJS$();
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I$F.apply(this, [11, 0.75]);
this.秘allowJS=true;
this.秘setJS$();
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map',  function (t) {
C$.c$$I$F.apply(this, [Math.max(2 * t.size$(), 11), 0.75]);
this.秘allowJS=(t.allowJS ||false);
this.putAll$java_util_Map(t);
}, 1);

Clazz.newMeth(C$, 'size$',  function () {
return (this.秘m && this.秘m.size ||this.count);
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.size$() == 0;
});

Clazz.newMeth(C$, 'keys$',  function () {
return p$1.getEnumeration$I.apply(this, [0]);
});

Clazz.newMeth(C$, 'elements$',  function () {
return p$1.getEnumeration$I.apply(this, [1]);
});

Clazz.newMeth(C$, 'contains$O',  function (value) {
if (value == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (this.size$() == 0) return false;
if ($I$(1).秘isSimple$java_util_Map(this)) {
var m=this.秘m;

var iter = m.values(); for (var n = iter.next(); !n.done; n = iter.next()) { if (n.value == value || n.value.equals$O(value)) { return true; } }
} else {
var tab=this.table;
for (var i=tab.length; i-- > 0; ) {
for (var e=tab[i]; e != null ; e=e.next_) {
if (e.value.equals$O(value)) {
return true;
}}
}
}return false;
});

Clazz.newMeth(C$, 'containsValue$O',  function (value) {
return this.contains$O(value);
});

Clazz.newMeth(C$, 'containsKey$O',  function (key) {
switch ($I$(1).秘hasKey$java_util_Map$O(this, key)) {
case 0:
break;
case 1:
$I$(1).秘ensureJavaMap$java_util_Map(this);
break;
case 2:
return false;
case 3:
return true;
}
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
for (var e=tab[index]; e != null ; e=e.next_) {
if ((e.hash == hash) && e.key.equals$O(key) ) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'get$O',  function (key) {
if (key == null ) return null;
switch ($I$(1).秘hasKey$java_util_Map$O(this, key)) {
case 0:
break;
case 1:
$I$(1).秘ensureJavaMap$java_util_Map(this);
break;
case 2:
return null;
case 3:
var v=null;

v = this.秘m.get(key);
return v;
}
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
for (var e=tab[index]; e != null ; e=e.next_) {
if ((e.hash == hash) && e.key.equals$O(key) ) {
return e.value;
}}
return null;
});

Clazz.newMeth(C$, 'rehash$',  function () {
var oldCapacity=this.table.length;
var oldMap=this.table;
var newCapacity=(oldCapacity << 1) + 1;
if (newCapacity - 2147483639 > 0) {
if (oldCapacity == 2147483639) return;
newCapacity=2147483639;
}var newMap=Clazz.array($I$(3), [newCapacity]);
++this.modCount;
this.threshold=(Math.min(newCapacity * this.loadFactor, 2147483640)|0);
this.table=newMap;
for (var i=oldCapacity; i-- > 0; ) {
for (var old=oldMap[i]; old != null ; ) {
var e=old;
old=old.next_;
var index=(e.hash & 2147483647) % newCapacity;
e.next_=newMap[index];
newMap[index]=e;
}
}
});

Clazz.newMeth(C$, 'addEntry$I$O$O$I',  function (hash, key, value, index) {
++this.modCount;
var tab=this.table;
if (this.count >= this.threshold) {
this.rehash$();
tab=this.table;
hash=key.hashCode$();
index=(hash & 2147483647) % tab.length;
}var e=tab[index];
tab[index]=Clazz.new_($I$(3,1).c$$I$O$O$java_util_Hashtable_Entry,[hash, key, value, e]);
++this.count;
}, p$1);

Clazz.newMeth(C$, 'put$O$O',  function (key, value) {
if (value == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}switch ($I$(1).秘hasKey$java_util_Map$O(this, key)) {
case 0:
break;
case 1:
$I$(1).秘ensureJavaMap$java_util_Map(this);
break;
case 2:

this.秘m.set(key, value);
++this.modCount;
return null;
case 3:
var v0=null;

v0 = this.秘m.get(key); this.秘m.set(key, value);
++this.modCount;
return v0;
}
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
var entry=tab[index];
for (; entry != null ; entry=entry.next_) {
if ((entry.hash == hash) && entry.key.equals$O(key) ) {
var old=entry.value;
entry.value=value;
return old;
}}
p$1.addEntry$I$O$O$I.apply(this, [hash, key, value, index]);
return null;
});

Clazz.newMeth(C$, 'remove$O',  function (key) {
if (key == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Hashtable key may not be null"]);
switch ($I$(1).秘hasKey$java_util_Map$O(this, key)) {
case 0:
break;
case 1:
$I$(1).秘ensureJavaMap$java_util_Map(this);
break;
case 2:
return null;
case 3:
var v0=null;

v0 = this.秘m.get(key); this.秘m["delete"](key);
++this.modCount;
return v0;
}
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
var e=tab[index];
for (var prev=null; e != null ; prev=e, e=e.next_) {
if ((e.hash == hash) && e.key.equals$O(key) ) {
++this.modCount;
if (prev != null ) {
prev.next_=e.next_;
} else {
tab[index]=e.next_;
}--this.count;
var oldValue=e.value;
e.value=null;
return oldValue;
}}
return null;
});

Clazz.newMeth(C$, 'putAll$java_util_Map',  function (t) {
var key=null;
var value=null;
if ($I$(1).秘isSimple$java_util_Map(t)) {
var me=this;

t.秘m.forEach(function(value, key) {
me.put$O$O(key, value);

});
return;
}for (var e, $e = t.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) this.put$O$O(e.getKey$(), e.getValue$());

});

Clazz.newMeth(C$, 'clear$',  function () {
var tab=this.table;
++this.modCount;
if ($I$(1).秘isSimple$java_util_Map(this)) {

this.秘m.clear();
}this.秘setJS$();
for (var index=tab.length; --index >= 0; ) tab[index]=null;

this.count=0;
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
var t=Clazz.clone(this);
t.table=Clazz.array($I$(3), [this.table.length]);
for (var i=this.table.length; i-- > 0; ) {
t.table[i]=(this.table[i] != null ) ? this.table[i].clone$() : null;
}
t.keySet=null;
t.entrySet=null;
t.values=null;
t.modCount=0;
if ($I$(1).秘isSimple$java_util_Map(this)) {
t.秘setJS$();
var me=this;

me.秘m.forEach(function(value, key) { t.秘m.set(key, value); t.modCount++; });
} else {
t.秘m=null;
}return t;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(4,1).c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'toString',  function () {
var max=this.size$() - 1;
if (max == -1) return "{}";
var sb=Clazz.new_($I$(5,1));
var it=this.entrySet$().iterator$();
sb.append$C("{");
for (var i=0; ; i++) {
var e=it.next$();
var key=e.getKey$();
var value=e.getValue$();
sb.append$S(key === this  ? "(this Map)" : key.toString());
sb.append$C("=");
sb.append$S(value === this  ? "(this Map)" : value.toString());
if (i == max) return sb.append$C("}").toString();
sb.append$S(", ");
}
});

Clazz.newMeth(C$, 'getEnumeration$I',  function (type) {
if (this.size$() == 0) {
return $I$(6).emptyEnumeration$();
} else {
return Clazz.new_($I$(7,1).c$$I$Z,[this, null, type, false]);
}}, p$1);

Clazz.newMeth(C$, 'getIterator$I',  function (type) {
if (this.size$() == 0) {
return $I$(6).emptyIterator$();
} else {
return Clazz.new_($I$(7,1).c$$I$Z,[this, null, type, true]);
}}, p$1);

Clazz.newMeth(C$, 'keySet$',  function () {
if (this.keySet == null ) this.keySet=Clazz.new_($I$(8,1),[this, null]);
return this.keySet;
});

Clazz.newMeth(C$, 'entrySet$',  function () {
if (this.entrySet == null ) this.entrySet=Clazz.new_($I$(9,1),[this, null]);
return this.entrySet;
});

Clazz.newMeth(C$, 'values$',  function () {
if (this.values == null ) this.values=Clazz.new_($I$(10,1),[this, null]);
return this.values;
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (o === this ) return true;
if (!(Clazz.instanceOf(o, "java.util.Map"))) return false;
var t=o;
if (t.size$() != this.size$()) return false;
try {
var i=this.entrySet$().iterator$();
while (i.hasNext$()){
var e=i.next$();
var key=e.getKey$();
var value=e.getValue$();
if (value == null ) {
if (!(t.get$O(key) == null  && t.containsKey$O(key) )) return false;
} else {
if (!value.equals$O(t.get$O(key))) return false;
}}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassCastException")){
var unused = e$$;
{
return false;
}
} else if (Clazz.exceptionOf(e$$,"NullPointerException")){
var unused = e$$;
{
return false;
}
} else {
throw e$$;
}
}
return true;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var h=0;
if (this.count == 0 || this.loadFactor < 0  ) return h;
this.loadFactor=-this.loadFactor;
var tab=this.table;
for (var entry, $entry = 0, $$entry = tab; $entry<$$entry.length&&((entry=($$entry[$entry])),1);$entry++) {
while (entry != null ){
h+=entry.hashCode$();
entry=entry.next_;
}
}
this.loadFactor=-this.loadFactor;
return h;
});

Clazz.newMeth(C$, 'getOrDefault$O$O',  function (key, defaultValue) {
var result=this.get$O(key);
return (null == result ) ? defaultValue : result;
});

Clazz.newMeth(C$, 'forEach$java_util_function_BiConsumer',  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.size$() == 0) return;
var expectedModCount=this.modCount;
if ($I$(1).秘isSimple$java_util_Map(this)) {
var m=this.秘m;

m.forEach(function(value,key){ action.accept$O$O(key, value); });
} else {
var tab=this.table;
for (var entry, $entry = 0, $$entry = tab; $entry<$$entry.length&&((entry=($$entry[$entry])),1);$entry++) {
while (entry != null ){
action.accept$O$O(entry.key, entry.value);
entry=entry.next_;
}
}
}if (expectedModCount != this.modCount) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}});

Clazz.newMeth(C$, 'replaceAll$java_util_function_BiFunction',  function (f) {
$I$(2).requireNonNull$O(f);
if (this.size$() == 0) return;
var v;
var key=null;
var value=null;
var expectedModCount=this.modCount;
if ($I$(1).秘isSimple$java_util_Map(this)) {
var m=this.秘m;

m.forEach(function(value,key){
v=f.apply$O$O(key, value);
if (v == null ) throw Clazz.new_(Clazz.load('NullPointerException'));

m.set(key, value);
});
} else {
var tab=this.table;
for (var entry, $entry = 0, $$entry = tab; $entry<$$entry.length&&((entry=($$entry[$entry])),1);$entry++) {
while (entry != null ){
v=f.apply$O$O(entry.key, entry.value);
if (v == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
entry.value=v;
entry=entry.next_;
}
}
}if (expectedModCount != this.modCount) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}});

Clazz.newMeth(C$, 'putIfAbsent$O$O',  function (key, value) {
$I$(2).requireNonNull$O(value);
switch ($I$(1).秘hasKey$java_util_Map$O(this, key)) {
case 0:
break;
case 1:
$I$(1).秘ensureJavaMap$java_util_Map(this);
break;
case 2:

this.秘m.set(key, value);
++this.modCount;
return null;
case 3:
var v0=null;

v0 = this.秘m.get(key);
return v0;
}
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
var entry=tab[index];
for (; entry != null ; entry=entry.next_) {
if ((entry.hash == hash) && entry.key.equals$O(key) ) {
var old=entry.value;
if (old == null ) {
entry.value=value;
}return old;
}}
p$1.addEntry$I$O$O$I.apply(this, [hash, key, value, index]);
return null;
});

Clazz.newMeth(C$, 'remove$O$O',  function (key, value) {
$I$(2).requireNonNull$O(value);
switch ($I$(1).秘hasKey$java_util_Map$O(this, key)) {
case 0:
break;
case 1:
$I$(1).秘ensureJavaMap$java_util_Map(this);
break;
case 2:
return false;
case 3:
if (!this.get$O(key).equals$O(value)) return false;

this.秘m["delete"](key);
++this.modCount;
return true;
}
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
var e=tab[index];
for (var prev=null; e != null ; prev=e, e=e.next_) {
if ((e.hash == hash) && e.key.equals$O(key) && e.value.equals$O(value)  ) {
++this.modCount;
if (prev != null ) {
prev.next_=e.next_;
} else {
tab[index]=e.next_;
}--this.count;
e.value=null;
return true;
}}
return false;
});

Clazz.newMeth(C$, 'replace$O$O$O',  function (key, oldValue, newValue) {
$I$(2).requireNonNull$O(oldValue);
$I$(2).requireNonNull$O(newValue);
var v=null;
switch ($I$(1).秘hasKey$java_util_Map$O(this, key)) {
case 0:
break;
case 1:
$I$(1).秘ensureJavaMap$java_util_Map(this);
break;
case 2:
return false;
case 3:

v = this.秘m.get(key);
if (v == null  ? oldValue == null  : v.equals$O(oldValue)) {

this.秘m.set(key, newValue);
return true;
}return false;
}
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
var e=tab[index];
for (; e != null ; e=e.next_) {
if ((e.hash == hash) && e.key.equals$O(key) ) {
if (e.value.equals$O(oldValue)) {
e.value=newValue;
return true;
} else {
return false;
}}}
return false;
});

Clazz.newMeth(C$, 'replace$O$O',  function (key, value) {
switch ($I$(1).秘hasKey$java_util_Map$O(this, key)) {
case 0:
break;
case 1:
$I$(1).秘ensureJavaMap$java_util_Map(this);
break;
case 2:
return null;
case 3:
var v=null;

v = this.秘m.get(key);
this.秘m.set(key, value);
return v;
}
$I$(2).requireNonNull$O(value);
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
var e=tab[index];
for (; e != null ; e=e.next_) {
if ((e.hash == hash) && e.key.equals$O(key) ) {
var oldValue=e.value;
e.value=value;
return oldValue;
}}
return null;
});

Clazz.newMeth(C$, 'computeIfAbsent$O$java_util_function_Function',  function (key, mappingFunction) {
$I$(2).requireNonNull$O(mappingFunction);
var v=null;
switch ($I$(1).秘hasKey$java_util_Map$O(this, key)) {
case 0:
break;
case 1:
v=mappingFunction.apply$O(key);
if (v == null ) return null;
$I$(1).秘ensureJavaMap$java_util_Map(this);
break;
case 3:

v = this.秘m.get(key);
if (v != null ) return v;
case 2:
v=mappingFunction.apply$O(key);
if (v != null ) {

this.秘m.set(key, v);
}return v;
}
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
var e=tab[index];
for (; e != null ; e=e.next_) {
if (e.hash == hash && e.key.equals$O(key) ) {
return e.value;
}}
var newValue=mappingFunction.apply$O(key);
if (newValue != null ) {
p$1.addEntry$I$O$O$I.apply(this, [hash, key, newValue, index]);
}return newValue;
});

Clazz.newMeth(C$, 'computeIfPresent$O$java_util_function_BiFunction',  function (key, remappingFunction) {
$I$(2).requireNonNull$O(remappingFunction);
var v=null;
switch ($I$(1).秘hasKey$java_util_Map$O(this, key)) {
case 0:
break;
case 1:
$I$(1).秘ensureJavaMap$java_util_Map(this);
break;
case 2:
return null;
case 3:

v = this.秘m.get(key);
if (v != null ) {
v=remappingFunction.apply$O$O(key, v);
if (v == null ) {

this.秘m["delete"](key);
} else {

this.秘m.set(key, v);
}}return v;
}
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
var e=tab[index];
for (var prev=null; e != null ; prev=e, e=e.next_) {
if (e.hash == hash && e.key.equals$O(key) ) {
var newValue=remappingFunction.apply$O$O(key, e.value);
if (newValue == null ) {
++this.modCount;
if (prev != null ) {
prev.next_=e.next_;
} else {
tab[index]=e.next_;
}--this.count;
} else {
e.value=newValue;
}return newValue;
}}
return null;
});

Clazz.newMeth(C$, 'compute$O$java_util_function_BiFunction',  function (key, remappingFunction) {
$I$(2).requireNonNull$O(remappingFunction);
var v=null;
switch ($I$(1).秘hasKey$java_util_Map$O(this, key)) {
case 0:
break;
case 1:
v=remappingFunction.apply$O$O(key, null);
if (v == null ) return null;
$I$(1).秘ensureJavaMap$java_util_Map(this);
break;
case 3:

v = this.秘m.get(key);
if ((v=remappingFunction.apply$O$O(key, v)) == null ) {

this.秘m["delete"](key);
++this.modCount;
} else {

this.秘m.set(key, v);
}return v;
case 2:
if ((v=remappingFunction.apply$O$O(key, v)) != null ) {

this.秘m.set(key, v);
++this.modCount;
}return v;
}
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
var e=tab[index];
for (var prev=null; e != null ; prev=e, e=e.next_) {
if (e.hash == hash && $I$(2).equals$O$O(e.key, key) ) {
var newValue=remappingFunction.apply$O$O(key, e.value);
if (newValue == null ) {
++this.modCount;
if (prev != null ) {
prev.next_=e.next_;
} else {
tab[index]=e.next_;
}--this.count;
} else {
e.value=newValue;
}return newValue;
}}
var newValue=remappingFunction.apply$O$O(key, null);
if (newValue != null ) {
p$1.addEntry$I$O$O$I.apply(this, [hash, key, newValue, index]);
}return newValue;
});

Clazz.newMeth(C$, 'merge$O$O$java_util_function_BiFunction',  function (key, value, remappingFunction) {
if (value == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (remappingFunction == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var v=null;
switch ($I$(1).秘hasKey$java_util_Map$O(this, key)) {
case 0:
break;
case 1:
$I$(1).秘ensureJavaMap$java_util_Map(this);
break;
case 3:

v = this.秘m.get(key);
value=remappingFunction.apply$O$O(v, value);
if (value == null ) {

this.秘m["delete"](key);
++this.modCount;
} else {

this.秘m.set(key, value);
}return value;
case 2:
value=remappingFunction.apply$O$O(null, value);
if (value != null ) this.put$O$O(key, value);
return value;
}
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
var e=tab[index];
for (var prev=null; e != null ; prev=e, e=e.next_) {
if (e.hash == hash && e.key.equals$O(key) ) {
var newValue=remappingFunction.apply$O$O(e.value, value);
if (newValue == null ) {
++this.modCount;
if (prev != null ) {
prev.next_=e.next_;
} else {
tab[index]=e.next_;
}--this.count;
} else {
e.value=newValue;
}return newValue;
}}
if (value != null ) {
p$1.addEntry$I$O$O$I.apply(this, [hash, key, value, index]);
}return value;
});

Clazz.newMeth(C$, '秘setJS$',  function () {
this.秘m=(this.秘allowJS && $I$(11).USE_SIMPLE  ? new Map() ||null : null);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Hashtable, "KeySet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'iterator$',  function () {
return p$1.getIterator$I.apply(this.b$['java.util.Hashtable'], [0]);
});

Clazz.newMeth(C$, 'size$',  function () {
return this.b$['java.util.Hashtable'].size$.apply(this.b$['java.util.Hashtable'], []);
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
return this.b$['java.util.Hashtable'].containsKey$O.apply(this.b$['java.util.Hashtable'], [o]);
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
return this.b$['java.util.Hashtable'].remove$O.apply(this.b$['java.util.Hashtable'], [o]) != null ;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.b$['java.util.Hashtable'].clear$.apply(this.b$['java.util.Hashtable'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Hashtable, "EntrySet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'iterator$',  function () {
return p$1.getIterator$I.apply(this.b$['java.util.Hashtable'], [2]);
});

Clazz.newMeth(C$, ['add$java_util_Map_Entry','add$O'],  function (o) {
return C$.superclazz.prototype.add$O.apply(this, [o]);
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var entry=o;
var key=entry.getKey$();
switch ($I$(1).秘hasKey$java_util_Map$O(this.b$['java.util.Hashtable'], key)) {
case 0:
break;
case 1:
$I$(1).秘ensureJavaMap$java_util_Map(this.b$['java.util.Hashtable']);
break;
case 3:
var value=entry.getValue$();
var v=this.b$['java.util.Hashtable'].get$O.apply(this.b$['java.util.Hashtable'], [key]);
return (value === v  || value != null  && value.equals$O(key)  );
case 2:
return false;
}
var tab=this.b$['java.util.Hashtable'].table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
for (var e=tab[index]; e != null ; e=e.next_) if (e.hash == hash && e.equals$O(entry) ) return true;

return false;
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var entry=o;
var key=entry.getKey$();
switch ($I$(1).秘hasKey$java_util_Map$O(this.b$['java.util.Hashtable'], key)) {
case 0:
break;
case 1:
$I$(1).秘ensureJavaMap$java_util_Map(this.b$['java.util.Hashtable']);
break;
case 3:
var value=entry.getValue$();
if (value == null ) return false;
var v=this.b$['java.util.Hashtable'].get$O.apply(this.b$['java.util.Hashtable'], [key]);
if (v === value  || v.equals$O(value) ) {
this.b$['java.util.Hashtable'].remove$O.apply(this.b$['java.util.Hashtable'], [key]);
return true;
}return false;
case 2:
return false;
}
var tab=this.b$['java.util.Hashtable'].table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
var e=tab[index];
for (var prev=null; e != null ; prev=e, e=e.next_) {
if (e.hash == hash && e.equals$O(entry) ) {
++this.b$['java.util.Hashtable'].modCount;
if (prev != null ) prev.next_=e.next_;
 else tab[index]=e.next_;
--this.b$['java.util.Hashtable'].count;
e.value=null;
return true;
}}
return false;
});

Clazz.newMeth(C$, 'size$',  function () {
return this.b$['java.util.Hashtable'].size$.apply(this.b$['java.util.Hashtable'], []);
});

Clazz.newMeth(C$, 'clear$',  function () {
this.b$['java.util.Hashtable'].clear$.apply(this.b$['java.util.Hashtable'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Hashtable, "ValueCollection", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractCollection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'iterator$',  function () {
return p$1.getIterator$I.apply(this.b$['java.util.Hashtable'], [1]);
});

Clazz.newMeth(C$, 'size$',  function () {
return this.b$['java.util.Hashtable'].size$.apply(this.b$['java.util.Hashtable'], []);
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
return this.b$['java.util.Hashtable'].containsValue$O.apply(this.b$['java.util.Hashtable'], [o]);
});

Clazz.newMeth(C$, 'clear$',  function () {
this.b$['java.util.Hashtable'].clear$.apply(this.b$['java.util.Hashtable'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Hashtable, "Entry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Map','java.util.Map.Entry']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['hash'],'O',['key','<K>','value','<V>','next_','java.util.Hashtable.Entry']]]

Clazz.newMeth(C$, 'c$$I$O$O$java_util_Hashtable_Entry',  function (hash, key, value, next) {
;C$.$init$.apply(this);
this.hash=hash;
this.key=key;
this.value=value;
this.next_=next;
}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
return Clazz.new_(C$.c$$I$O$O$java_util_Hashtable_Entry,[this.hash, this.key, this.value, (this.next_ == null  ? null : this.next_.clone$())]);
});

Clazz.newMeth(C$, 'getKey$',  function () {
return this.key;
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$O',  function (value) {
if (value == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var oldValue=this.value;
this.value=value;
return oldValue;
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var e=o;
return (this.key == null  ? e.getKey$() == null  : this.key.equals$O(e.getKey$())) && (this.value == null  ? e.getValue$() == null  : this.value.equals$O(e.getValue$())) ;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.hash ^ $I$(2).hashCode$O(this.value);
});

Clazz.newMeth(C$, 'toString',  function () {
return this.key.toString() + "=" + this.value.toString() ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Hashtable, "Enumerator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['java.util.Enumeration', 'java.util.Iterator']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.table=this.b$['java.util.Hashtable'].table;
this.index=this.table.length;
},1);

C$.$fields$=[['Z',['isIterator'],'I',['index','type','expectedModCount'],'O',['table','java.util.Hashtable.Entry[]','next_','java.util.Hashtable.Entry','+current','jsMapIterator','java.util.Iterator']]]

Clazz.newMeth(C$, 'c$$I$Z',  function (type, iterator) {
;C$.$init$.apply(this);
this.type=type;
this.isIterator=iterator;
this.expectedModCount=this.b$['java.util.Hashtable'].modCount;
if ($I$(1).秘isSimple$java_util_Map(this.b$['java.util.Hashtable'])) {
var m=this.b$['java.util.Hashtable'].秘m;

this.jsMapIterator = m.entries();
this.next_ = this.jsMapIterator.next();
}}, 1);

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
if ($I$(1).秘isSimple$java_util_Map(this.b$['java.util.Hashtable'])) {
return this.next_ && !this.next_.done &&true;
} else {
var e=this.next_;
var i=this.index;
var t=this.table;
while (e == null  && i > 0 ){
e=t[--i];
}
this.next_=e;
this.index=i;
return e != null ;
}});

Clazz.newMeth(C$, 'nextElement$',  function () {
var node=this.next_;
if ($I$(1).秘isSimple$java_util_Map(this.b$['java.util.Hashtable'])) {
var t=this.type;
this.current=node;
this.next_=this.jsMapIterator.next() ||null;
if (node != null ) {
var k=null;
var v=null;
var done=false;

done = node.done;
if (!done) { if (t < 2) return node.value[t];
k = node.value[0];
v = node.value[1];
}
if (!done) {
return ((P$.Hashtable$Enumerator$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Hashtable$Enumerator$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.util.Hashtable','.Entry']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'setValue$O',  function (value) {
var m=this.b$['java.util.Hashtable'].modCount;
var v=this.b$['java.util.Hashtable'].put$O$O.apply(this.b$['java.util.Hashtable'], [this.getKey$(), value]);
this.b$['java.util.Hashtable'].modCount=m;
return v;
});
})()
), Clazz.new_($I$(3,1).c$$I$O$O$java_util_Hashtable_Entry,[this, null, 0, k, v, null],P$.Hashtable$Enumerator$1));
}}} else {
var i=this.index;
var t=this.table;
while (node == null  && i > 0 ){
node=t[--i];
}
this.next_=node;
this.index=i;
if (node != null ) {
var e=this.current=this.next_;
this.next_=e.next_;
return this.type == 0 ? e.key : (this.type == 1 ? e.value : e);
}}throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["Hashtable Enumerator"]);
});

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.hasMoreElements$();
});

Clazz.newMeth(C$, 'next$',  function () {
if (this.b$['java.util.Hashtable'].modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
return this.nextElement$();
});

Clazz.newMeth(C$, 'remove$',  function () {
if (!this.isIterator) throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
var p=this.current;
if (p == null ) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Hashtable Enumerator"]);
if (this.b$['java.util.Hashtable'].modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
if ($I$(1).秘isSimple$java_util_Map(this.b$['java.util.Hashtable'])) {
var key=null;

key = p.value[0];
this.b$['java.util.Hashtable'].remove$O.apply(this.b$['java.util.Hashtable'], [key]);
++this.expectedModCount;
} else {
{
var tab=this.b$['java.util.Hashtable'].table;
var index=(this.current.hash & 2147483647) % tab.length;
var e=tab[index];
for (var prev=null; e != null ; prev=e, e=e.next_) {
if (e === this.current ) {
++this.b$['java.util.Hashtable'].modCount;
++this.expectedModCount;
if (prev == null ) tab[index]=e.next_;
 else prev.next_=e.next_;
--this.b$['java.util.Hashtable'].count;
this.current=null;
return;
}}
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:32 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
