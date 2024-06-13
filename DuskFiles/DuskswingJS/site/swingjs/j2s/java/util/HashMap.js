(function(){var P$=java.util,I$=[[0,'java.util.Objects',['java.util.HashMap','.KeyIterator'],'java.util.Map','java.util.HashMap',['java.util.HashMap','.KeySpliterator'],['java.util.HashMap','.ValueIterator'],['java.util.HashMap','.ValueSpliterator'],['java.util.HashMap','.EntryIterator'],['java.util.HashMap','.EntrySpliterator'],['java.util.HashMap','.Node'],['java.util.HashMap','.KeySet'],['java.util.HashMap','.Values'],['java.util.HashMap','.EntrySet'],'InternalError',['java.util.HashMap','.TreeNode']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HashMap", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractMap', ['java.util.Map', 'Cloneable', 'java.io.Serializable']);
C$.$classes$=[['Node',8],['KeySet',16],['Values',16],['EntrySet',16],['HashIterator',1024],['KeyIterator',16],['ValueIterator',16],['EntryIterator',16],['HashMapSpliterator',8],['KeySpliterator',24],['ValueSpliterator',24],['EntrySpliterator',24],['TreeNode',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.秘allowJS=false;
},1);

C$.$fields$=[['Z',['秘allowJS'],'F',['loadFactor'],'I',['size','modCount','threshold'],'O',['秘m','java.util.Map','table','java.util.HashMap.Node[]','entrySet','java.util.Set']]
,['Z',['USE_SIMPLE']]]

Clazz.newMeth(C$, 'hash$O',  function (key) {
var h;
return (key == null ) ? 0 : (h=key.hashCode$()) ^ (h >>> 16);
}, 1);

Clazz.newMeth(C$, 'comparableClassFor$O',  function (x) {
if (Clazz.instanceOf(x, "java.lang.Comparable")) {
return x.getClass$();
}return null;
}, 1);

Clazz.newMeth(C$, 'compareComparables$Class$O$O',  function (kc, k, x) {
return (x == null  || x.getClass$() !== kc   ? 0 : (k).compareTo$O(x));
}, 1);

Clazz.newMeth(C$, 'tableSizeFor$I',  function (cap) {
var n=cap - 1;
n|=n >>> 1;
n|=n >>> 2;
n|=n >>> 4;
n|=n >>> 8;
n|=n >>> 16;
return (n < 0) ? 1 : (n >= 1073741824) ? 1073741824 : n + 1;
}, 1);

Clazz.newMeth(C$, 'c$$I$F',  function (initialCapacity, loadFactor) {
Clazz.super_(C$, this);
if (initialCapacity < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal initial capacity: " + initialCapacity]);
if (initialCapacity > 1073741824) initialCapacity=1073741824;
if (loadFactor <= 0  || Float.isNaN$F(loadFactor) ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal load factor: " + new Float(loadFactor).toString()]);
this.loadFactor=loadFactor;
this.threshold=C$.tableSizeFor$I(initialCapacity);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (initialCapacity) {
C$.c$$I$F.apply(this, [initialCapacity, 0.75]);
this.秘allowJS=true;
this.秘setJS$();
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.秘allowJS=true;
this.秘setJS$();
this.loadFactor=0.75;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map',  function (m) {
Clazz.super_(C$, this);
this.秘allowJS=(m.allowJS ||false);
this.秘setJS$();
this.loadFactor=0.75;
this.putMapEntries$java_util_Map$Z(m, false);
}, 1);

Clazz.newMeth(C$, 'putMapEntries$java_util_Map$Z',  function (mOriginal, evict) {
var n=mOriginal.size$();
if (n == 0) return;
var key=null;
var value=null;
if ($I$(3).秘isSimple$java_util_Map(this) && $I$(3).秘isSimple$java_util_Map(mOriginal) ) {
var me=this;

mOriginal.秘m.forEach(function(value, key) {
me.putVal$I$O$O$Z$Z$I(0, key, value, false, evict, $I$(3).秘hasKey$java_util_Map$O(me, key));

});
return;
}if (this.table == null ) {
var ft=(n / this.loadFactor) + 1.0;
var t=((ft < 1.07374182E9 ) ? (ft|0) : 1073741824);
if (t > this.threshold) this.threshold=C$.tableSizeFor$I(t);
} else if (n > this.threshold) this.resize$();
if ($I$(3).秘isSimple$java_util_Map(mOriginal)) {
var me=this;

mOriginal.秘m.forEach(function(value, key) {
me.putVal$I$O$O$Z$Z$I(C$.hash$O(key), key, value, false, evict, 0);

});
return;
}this.秘m=null;
for (var e, $e = mOriginal.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
key=e.getKey$();
value=e.getValue$();
this.putVal$I$O$O$Z$Z$I(C$.hash$O(key), key, value, false, evict, 0);
}
});

Clazz.newMeth(C$, 'size$',  function () {
return (this.秘m && this.秘m.size ||this.size);
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.size$() == 0;
});

Clazz.newMeth(C$, 'get$O',  function (key) {
switch ($I$(3).秘hasKey$java_util_Map$O(this, key)) {
case 0:
break;
case 1:
$I$(3).秘ensureJavaMap$java_util_Map(this);
break;
case 2:
return null;
case 3:
var v=null;

v = this.秘m.get(key);
return v;
}
var e;
return (e=this.getNode$I$O(C$.hash$O(key), key)) == null  ? null : e.value;
});

Clazz.newMeth(C$, 'getNode$I$O',  function (hash, key) {
var tab;
var first;
var e;
var n;
var k;
if ((tab=this.table) != null  && (n=tab.length) > 0  && (first=tab[(n - 1) & hash]) != null  ) {
if (first.hash == hash && ((k=first.key) === key  || (key != null  && key.equals$O(k) ) ) ) return first;
if ((e=first.next_) != null ) {
if (Clazz.instanceOf(first, "java.util.HashMap.TreeNode")) return (first).getTreeNode$I$O(hash, key);
do {
if (e.hash == hash && ((k=e.key) === key  || (key != null  && key.equals$O(k) ) ) ) return e;
} while ((e=e.next_) != null );
}}return null;
});

Clazz.newMeth(C$, 'containsKey$O',  function (key) {
switch ($I$(3).秘hasKey$java_util_Map$O(this, key)) {
case 0:
break;
case 1:
$I$(3).秘ensureJavaMap$java_util_Map(this);
break;
case 2:
return false;
case 3:
return true;
}
return this.getNode$I$O(C$.hash$O(key), key) != null ;
});

Clazz.newMeth(C$, 'put$O$O',  function (key, value) {
var type=$I$(3).秘hasKey$java_util_Map$O(this, key);
switch (type) {
case 0:
break;
case 1:
$I$(3).秘ensureJavaMap$java_util_Map(this);
break;
case 2:
case 3:
return this.putVal$I$O$O$Z$Z$I(1, key, value, false, true, type);
}
return this.putVal$I$O$O$Z$Z$I(C$.hash$O(key), key, value, false, true, 0);
});

Clazz.newMeth(C$, 'putVal$I$O$O$Z$Z$I',  function (hash, key, value, onlyIfAbsent, evict, mode) {
switch (mode) {
case 2:

this.秘m.set(key, value);
++this.modCount;
return null;
case 3:
var v0=(hash == 0 ? null : this.秘m.get(key) ||null);
if (!onlyIfAbsent || v0 == null  ) {

this.秘m.set(key, value);
}return v0;
case 0:
break;
}
var tab;
var p;
var n;
var i;
if ((tab=this.table) == null  || (n=tab.length) == 0 ) n=(tab=this.resize$()).length;
if ((p=tab[i=(n - 1) & hash]) == null ) tab[i]=this.newNode$I$O$O$java_util_HashMap_Node(hash, key, value, null);
 else {
var e;
var k;
if (p.hash == hash && ((k=p.key) === key  || (key != null  && key.equals$O(k) ) ) ) e=p;
 else if (Clazz.instanceOf(p, "java.util.HashMap.TreeNode")) e=(p).putTreeVal$java_util_HashMap$java_util_HashMap_NodeA$I$O$O(this, tab, hash, key, value);
 else {
for (var binCount=0; ; ++binCount) {
if ((e=p.next_) == null ) {
p.next_=this.newNode$I$O$O$java_util_HashMap_Node(hash, key, value, null);
if (binCount >= 7) this.treeifyBin$java_util_HashMap_NodeA$I(tab, hash);
break;
}if (e.hash == hash && ((k=e.key) === key  || (key != null  && key.equals$O(k) ) ) ) break;
p=e;
}
}if (e != null ) {
var oldValue=e.value;
if (!onlyIfAbsent || oldValue == null  ) e.value=value;
this.afterNodeAccess$java_util_HashMap_Node(e);
return oldValue;
}}++this.modCount;
if (++this.size > this.threshold) this.resize$();
this.afterNodeInsertion$Z(evict);
return null;
});

Clazz.newMeth(C$, 'resize$',  function () {
var oldTab=this.table;
var oldCap=(oldTab == null ) ? 0 : oldTab.length;
var oldThr=this.threshold;
var newCap;
var newThr=0;
if (oldCap > 0) {
if (oldCap >= 1073741824) {
this.threshold=2147483647;
return oldTab;
} else if ((newCap=oldCap << 1) < 1073741824 && oldCap >= 16 ) newThr=oldThr << 1;
} else if (oldThr > 0) newCap=oldThr;
 else {
newCap=16;
newThr=12;
}if (newThr == 0) {
var ft=newCap * this.loadFactor;
newThr=(newCap < 1073741824 && ft < 1.07374182E9   ? (ft|0) : 2147483647);
}this.threshold=newThr;
var newTab=Clazz.array($I$(10), [newCap]);
this.table=newTab;
if (oldTab != null ) {
for (var j=0; j < oldCap; ++j) {
var e;
if ((e=oldTab[j]) != null ) {
oldTab[j]=null;
if (e.next_ == null ) newTab[e.hash & (newCap - 1)]=e;
 else if (Clazz.instanceOf(e, "java.util.HashMap.TreeNode")) (e).split$java_util_HashMap$java_util_HashMap_NodeA$I$I(this, newTab, j, oldCap);
 else {
var loHead=null;
var loTail=null;
var hiHead=null;
var hiTail=null;
var next;
do {
next=e.next_;
if ((e.hash & oldCap) == 0) {
if (loTail == null ) loHead=e;
 else loTail.next_=e;
loTail=e;
} else {
if (hiTail == null ) hiHead=e;
 else hiTail.next_=e;
hiTail=e;
}} while ((e=next) != null );
if (loTail != null ) {
loTail.next_=null;
newTab[j]=loHead;
}if (hiTail != null ) {
hiTail.next_=null;
newTab[j + oldCap]=hiHead;
}}}}
}return newTab;
});

Clazz.newMeth(C$, 'treeifyBin$java_util_HashMap_NodeA$I',  function (tab, hash) {
var n;
var index;
var e;
if (tab == null  || (n=tab.length) < 64 ) this.resize$();
 else if ((e=tab[index=(n - 1) & hash]) != null ) {
var hd=null;
var tl=null;
do {
var p=this.replacementTreeNode$java_util_HashMap_Node$java_util_HashMap_Node(e, null);
if (tl == null ) hd=p;
 else {
p.prev=tl;
tl.next_=p;
}tl=p;
} while ((e=e.next_) != null );
if ((tab[index]=hd) != null ) hd.treeify$java_util_HashMap_NodeA(tab);
}});

Clazz.newMeth(C$, 'putAll$java_util_Map',  function (m) {
this.putMapEntries$java_util_Map$Z(m, true);
});

Clazz.newMeth(C$, 'remove$O',  function (key) {
switch ($I$(3).秘hasKey$java_util_Map$O(this, key)) {
case 0:
break;
case 1:
$I$(3).秘ensureJavaMap$java_util_Map(this);
break;
case 2:
return null;
case 3:
return this.removeNode$I$O$O$Z$Z$I(1, key, null, false, true, 3);
}
var e;
return (e=this.removeNode$I$O$O$Z$Z$I(C$.hash$O(key), key, null, false, true, 0)) == null  ? null : e.value;
});

Clazz.newMeth(C$, 'removeNode$I$O$O$Z$Z$I',  function (hash, key, value, matchValue, movable, mode) {
var v;
if (mode == 3) {
v=(hash == 1 || matchValue  ? this.秘m.get(key) ||null : null);
if (!matchValue || v === value   || (value != null  && value.equals$O(v) ) ) {

this.秘m["delete"](key);
++this.modCount;
switch (hash) {
case 1:
return v;
case 3:
return "true";
}
}return null;
}var tab;
var p;
var n;
var index;
if ((tab=this.table) != null  && (n=tab.length) > 0  && (p=tab[index=(n - 1) & hash]) != null  ) {
var node=null;
var e;
var k;
if (p.hash == hash && ((k=p.key) === key  || (key != null  && key.equals$O(k) ) ) ) node=p;
 else if ((e=p.next_) != null ) {
if (Clazz.instanceOf(p, "java.util.HashMap.TreeNode")) node=(p).getTreeNode$I$O(hash, key);
 else {
do {
if (e.hash == hash && ((k=e.key) === key  || (key != null  && key.equals$O(k) ) ) ) {
node=e;
break;
}p=e;
} while ((e=e.next_) != null );
}}if (node != null  && (!matchValue || (v=node.value) === value   || (value != null  && value.equals$O(v) ) ) ) {
if (Clazz.instanceOf(node, "java.util.HashMap.TreeNode")) (node).removeTreeNode$java_util_HashMap$java_util_HashMap_NodeA$Z(this, tab, movable);
 else if (node === p ) tab[index]=node.next_;
 else p.next_=node.next_;
++this.modCount;
--this.size;
this.afterNodeRemoval$java_util_HashMap_Node(node);
return node;
}}return null;
});

Clazz.newMeth(C$, 'clear$',  function () {
var tab;
++this.modCount;
if ($I$(3).秘isSimple$java_util_Map(this)) {

this.秘m.clear();
}this.秘setJS$();
if ((tab=this.table) != null  && this.size > 0 ) {
this.size=0;
for (var i=0; i < tab.length; ++i) tab[i]=null;

}});

Clazz.newMeth(C$, 'containsValue$O',  function (value) {
if (this.size$() == 0) return false;
if ($I$(3).秘isSimple$java_util_Map(this)) {
var m=this.秘m;

var iter = m.values();
for (var n = iter.next(); !n.done; n = iter.next()) { if (n.value == value || n.value.equals$O(value)) { return true;
} }
} else {
var tab;
var v;
if ((tab=this.table) != null ) {
for (var i=0; i < tab.length; ++i) {
for (var e=tab[i]; e != null ; e=e.next_) {
if ((v=e.value) === value  || (value != null  && value.equals$O(v) ) ) return true;
}
}
}}return false;
});

Clazz.newMeth(C$, 'keySet$',  function () {
var ks;
return (ks=this.keySet) == null  ? (this.keySet=Clazz.new_($I$(11,1),[this, null])) : ks;
});

Clazz.newMeth(C$, 'values$',  function () {
var vs;
return (vs=this.values) == null  ? (this.values=Clazz.new_($I$(12,1),[this, null])) : vs;
});

Clazz.newMeth(C$, 'entrySet$',  function () {
var es;
return (es=this.entrySet) == null  ? (this.entrySet=Clazz.new_($I$(13,1),[this, null])) : es;
});

Clazz.newMeth(C$, 'getOrDefault$O$O',  function (key, defaultValue) {
switch ($I$(3).秘hasKey$java_util_Map$O(this, key)) {
case 0:
break;
case 1:
$I$(3).秘ensureJavaMap$java_util_Map(this);
break;
case 2:
return defaultValue;
case 3:
var v=null;

v = this.秘m.get(key);
return (v == null  ? defaultValue : v);
}
var e;
return (e=this.getNode$I$O(C$.hash$O(key), key)) == null  ? defaultValue : e.value;
});

Clazz.newMeth(C$, 'putIfAbsent$O$O',  function (key, value) {
var type=$I$(3).秘hasKey$java_util_Map$O(this, key);
switch (type) {
case 0:
break;
case 1:
$I$(3).秘ensureJavaMap$java_util_Map(this);
break;
case 3:
case 2:
return this.putVal$I$O$O$Z$Z$I(1, key, value, true, true, type);
}
return this.putVal$I$O$O$Z$Z$I(C$.hash$O(key), key, value, true, true, 0);
});

Clazz.newMeth(C$, 'remove$O$O',  function (key, value) {
switch ($I$(3).秘hasKey$java_util_Map$O(this, key)) {
case 0:
break;
case 1:
$I$(3).秘ensureJavaMap$java_util_Map(this);
break;
case 2:
return false;
case 3:
return this.removeNode$I$O$O$Z$Z$I(3, key, value, true, true, 3) != null ;
}
return this.removeNode$I$O$O$Z$Z$I(C$.hash$O(key), key, value, true, true, 0) != null ;
});

Clazz.newMeth(C$, 'replace$O$O$O',  function (key, oldValue, newValue) {
var v=null;
switch ($I$(3).秘hasKey$java_util_Map$O(this, key)) {
case 0:
break;
case 1:
$I$(3).秘ensureJavaMap$java_util_Map(this);
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
var e;
if ((e=this.getNode$I$O(C$.hash$O(key), key)) != null  && ((v=e.value) === oldValue  || (v != null  && v.equals$O(oldValue) ) ) ) {
e.value=newValue;
this.afterNodeAccess$java_util_HashMap_Node(e);
return true;
}return false;
});

Clazz.newMeth(C$, 'replace$O$O',  function (key, value) {
switch ($I$(3).秘hasKey$java_util_Map$O(this, key)) {
case 0:
break;
case 1:
$I$(3).秘ensureJavaMap$java_util_Map(this);
break;
case 2:
return null;
case 3:
var v=null;

v = this.秘m.get(key); this.秘m.set(key, value);
return v;
}
var e;
if ((e=this.getNode$I$O(C$.hash$O(key), key)) != null ) {
var oldValue=e.value;
e.value=value;
this.afterNodeAccess$java_util_HashMap_Node(e);
return oldValue;
}return null;
});

Clazz.newMeth(C$, 'computeIfAbsent$O$java_util_function_Function',  function (key, mappingFunction) {
if (mappingFunction == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var v=null;
switch ($I$(3).秘hasKey$java_util_Map$O(this, key)) {
case 0:
break;
case 1:
v=mappingFunction.apply$O(key);
if (v == null ) return null;
$I$(3).秘ensureJavaMap$java_util_Map(this);
break;
case 3:
v=null;

v = this.秘m.get(key);
if (v != null ) return v;
v=mappingFunction.apply$O(key);
if (v != null ) this.putVal$I$O$O$Z$Z$I(0, key, v, false, true, 3);
return v;
case 2:
v=mappingFunction.apply$O(key);
if (v != null ) this.putVal$I$O$O$Z$Z$I(0, key, v, false, true, 2);
return v;
}
var hash=C$.hash$O(key);
var tab;
var first;
var n;
var i;
var binCount=0;
var t=null;
var old=null;
if (this.size > this.threshold || (tab=this.table) == null   || (n=tab.length) == 0 ) n=(tab=this.resize$()).length;
if ((first=tab[i=(n - 1) & hash]) != null ) {
if (Clazz.instanceOf(first, "java.util.HashMap.TreeNode")) old=(t=first).getTreeNode$I$O(hash, key);
 else {
var e=first;
var k;
do {
if (e.hash == hash && ((k=e.key) === key  || (key != null  && key.equals$O(k) ) ) ) {
old=e;
break;
}++binCount;
} while ((e=e.next_) != null );
}var oldValue;
if (old != null  && (oldValue=old.value) != null  ) {
this.afterNodeAccess$java_util_HashMap_Node(old);
return oldValue;
}}if (v == null  && (v=mappingFunction.apply$O(key)) == null  ) {
return null;
} else if (old != null ) {
old.value=v;
this.afterNodeAccess$java_util_HashMap_Node(old);
return v;
} else if (t != null ) {
t.putTreeVal$java_util_HashMap$java_util_HashMap_NodeA$I$O$O(this, tab, hash, key, v);
} else {
tab[i]=this.newNode$I$O$O$java_util_HashMap_Node(hash, key, v, first);
if (binCount >= 7) this.treeifyBin$java_util_HashMap_NodeA$I(tab, hash);
}++this.modCount;
++this.size;
this.afterNodeInsertion$Z(true);
return v;
});

Clazz.newMeth(C$, 'computeIfPresent$O$java_util_function_BiFunction',  function (key, remappingFunction) {
if (remappingFunction == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var v=null;
switch ($I$(3).秘hasKey$java_util_Map$O(this, key)) {
case 0:
break;
case 1:
$I$(3).秘ensureJavaMap$java_util_Map(this);
break;
case 2:
return null;
case 3:

v = this.秘m.get(key);
if (v != null ) {
v=remappingFunction.apply$O$O(key, v);
if (v == null ) {
this.removeNode$I$O$O$Z$Z$I(0, key, v, false, true, 3);
} else {
this.putVal$I$O$O$Z$Z$I(0, key, v, false, true, 3);
}}return v;
}
var e;
var hash=C$.hash$O(key);
if ((e=this.getNode$I$O(hash, key)) != null  && (v=e.value) != null  ) {
v=remappingFunction.apply$O$O(key, v);
if (v != null ) {
e.value=v;
this.afterNodeAccess$java_util_HashMap_Node(e);
return v;
} else this.removeNode$I$O$O$Z$Z$I(hash, key, null, false, true, 0);
}return null;
});

Clazz.newMeth(C$, 'compute$O$java_util_function_BiFunction',  function (key, remappingFunction) {
if (remappingFunction == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var v=null;
switch ($I$(3).秘hasKey$java_util_Map$O(this, key)) {
case 0:
break;
case 1:
v=remappingFunction.apply$O$O(key, null);
if (v == null ) return null;
$I$(3).秘ensureJavaMap$java_util_Map(this);
break;
case 2:
if ((v=remappingFunction.apply$O$O(key, v)) != null ) this.putVal$I$O$O$Z$Z$I(0, key, v, false, true, 2);
return v;
case 3:

v = this.秘m.get(key);
if ((v=remappingFunction.apply$O$O(key, v)) == null ) this.removeNode$I$O$O$Z$Z$I(0, key, null, false, true, 3);
 else this.putVal$I$O$O$Z$Z$I(0, key, v, false, true, 3);
return v;
}
var hash=C$.hash$O(key);
var tab;
var first;
var n;
var i;
var binCount=0;
var t=null;
var old=null;
if (this.size > this.threshold || (tab=this.table) == null   || (n=tab.length) == 0 ) n=(tab=this.resize$()).length;
if ((first=tab[i=(n - 1) & hash]) != null ) {
if (Clazz.instanceOf(first, "java.util.HashMap.TreeNode")) old=(t=first).getTreeNode$I$O(hash, key);
 else {
var e=first;
var k;
do {
if (e.hash == hash && ((k=e.key) === key  || (key != null  && key.equals$O(k) ) ) ) {
old=e;
break;
}++binCount;
} while ((e=e.next_) != null );
}}if (v == null  && old != null  ) v=old.value;
v=remappingFunction.apply$O$O(key, v);
if (old != null ) {
if (v != null ) {
old.value=v;
this.afterNodeAccess$java_util_HashMap_Node(old);
} else this.removeNode$I$O$O$Z$Z$I(hash, key, null, false, true, 0);
} else if (v != null ) {
if (t != null ) t.putTreeVal$java_util_HashMap$java_util_HashMap_NodeA$I$O$O(this, tab, hash, key, v);
 else {
tab[i]=this.newNode$I$O$O$java_util_HashMap_Node(hash, key, v, first);
if (binCount >= 7) this.treeifyBin$java_util_HashMap_NodeA$I(tab, hash);
}++this.modCount;
++this.size;
this.afterNodeInsertion$Z(true);
}return v;
});

Clazz.newMeth(C$, 'merge$O$O$java_util_function_BiFunction',  function (key, value, remappingFunction) {
if (value == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (remappingFunction == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var v=null;
switch ($I$(3).秘hasKey$java_util_Map$O(this, key)) {
case 0:
break;
case 1:
$I$(3).秘ensureJavaMap$java_util_Map(this);
break;
case 2:
value=remappingFunction.apply$O$O(null, value);
if (value != null ) this.putVal$I$O$O$Z$Z$I(0, key, value, false, true, 2);
return value;
case 3:

v = this.秘m.get(key);
if (v != null ) value=remappingFunction.apply$O$O(v, value);
if (value == null ) {
this.removeNode$I$O$O$Z$Z$I(0, key, null, false, true, 3);
} else {
this.putVal$I$O$O$Z$Z$I(0, key, value, false, true, 3);
}return value;
}
var hash=C$.hash$O(key);
var tab;
var first;
var n;
var i;
var binCount=0;
var t=null;
var old=null;
if (this.size > this.threshold || (tab=this.table) == null   || (n=tab.length) == 0 ) n=(tab=this.resize$()).length;
if ((first=tab[i=(n - 1) & hash]) != null ) {
if (Clazz.instanceOf(first, "java.util.HashMap.TreeNode")) old=(t=first).getTreeNode$I$O(hash, key);
 else {
var e=first;
var k;
do {
if (e.hash == hash && ((k=e.key) === key  || (key != null  && key.equals$O(k) ) ) ) {
old=e;
break;
}++binCount;
} while ((e=e.next_) != null );
}}if (old != null ) {
if (old.value != null ) v=remappingFunction.apply$O$O(old.value, value);
 else v=value;
if (v != null ) {
old.value=v;
this.afterNodeAccess$java_util_HashMap_Node(old);
} else this.removeNode$I$O$O$Z$Z$I(hash, key, null, false, true, 0);
return v;
}if (value != null ) {
if (t != null ) t.putTreeVal$java_util_HashMap$java_util_HashMap_NodeA$I$O$O(this, tab, hash, key, value);
 else {
tab[i]=this.newNode$I$O$O$java_util_HashMap_Node(hash, key, value, first);
if (binCount >= 7) this.treeifyBin$java_util_HashMap_NodeA$I(tab, hash);
}++this.modCount;
++this.size;
this.afterNodeInsertion$Z(true);
}return value;
});

Clazz.newMeth(C$, 'forEach$java_util_function_BiConsumer',  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.size$() == 0) return;
var mc=this.modCount;
if ($I$(3).秘isSimple$java_util_Map(this)) {
var m=this.秘m;

m.forEach(function(value,key){ action.accept$O$O(key, value); });
} else {
var tab;
if ((tab=this.table) != null ) {
for (var i=0; i < tab.length; ++i) {
for (var e=tab[i]; e != null ; e=e.next_) action.accept$O$O(e.key, e.value);

}
}}if (this.modCount != mc) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_BiFunction',  function (f) {
if (f == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.size$() == 0) return;
var mc=this.modCount;
if ($I$(3).秘isSimple$java_util_Map(this)) {
var m=this.秘m;

m.forEach(function(value,key){ m.set(key, f.apply$O$O(key, value)); });
} else {
var tab;
if ((tab=this.table) != null ) {
for (var i=0; i < tab.length; ++i) {
for (var e=tab[i]; e != null ; e=e.next_) {
e.value=f.apply$O$O(e.key, e.value);
}
}
}}if (this.modCount != mc) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$, 'clone$',  function () {
var result;
try {
result=C$.superclazz.prototype.clone$.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(14,1).c$$Throwable,[e]);
} else {
throw e;
}
}
result.reinitialize$();
result.putMapEntries$java_util_Map$Z(this, false);
return result;
});

Clazz.newMeth(C$, 'loadFactor$',  function () {
return this.loadFactor;
});

Clazz.newMeth(C$, 'capacity$',  function () {
return (this.table != null ) ? this.table.length : (this.threshold > 0) ? this.threshold : 16;
});

Clazz.newMeth(C$, 'newNode$I$O$O$java_util_HashMap_Node',  function (hash, key, value, next) {
return Clazz.new_($I$(10,1).c$$I$O$O$java_util_HashMap_Node,[hash, key, value, next]);
});

Clazz.newMeth(C$, 'getJSEntry$java_util_Map_Entry',  function (e) {
return ((P$.HashMap$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "HashMap$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, [['java.util.Map','java.util.Map.Entry']], 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getKey$',  function () {
var node=this.$finals$.e;
return (1 ? node.value[0] :null);
});

Clazz.newMeth(C$, 'getValue$',  function () {
var node=this.$finals$.e;
return (1 ? node.value[1] :null);
});

Clazz.newMeth(C$, 'setValue$O',  function (value) {
return this.b$['java.util.HashMap'].put$O$O.apply(this.b$['java.util.HashMap'], [this.getKey$(), value]);
});
})()
), Clazz.new_(P$.HashMap$1.$init$,[this, {e:e}]));
});

Clazz.newMeth(C$, 'replacementNode$java_util_HashMap_Node$java_util_HashMap_Node',  function (p, next) {
return Clazz.new_($I$(10,1).c$$I$O$O$java_util_HashMap_Node,[p.hash, p.key, p.value, next]);
});

Clazz.newMeth(C$, 'newTreeNode$I$O$O$java_util_HashMap_Node',  function (hash, key, value, next) {
return Clazz.new_($I$(15,1).c$$I$O$O$java_util_HashMap_Node,[hash, key, value, next]);
});

Clazz.newMeth(C$, 'replacementTreeNode$java_util_HashMap_Node$java_util_HashMap_Node',  function (p, next) {
return Clazz.new_($I$(15,1).c$$I$O$O$java_util_HashMap_Node,[p.hash, p.key, p.value, next]);
});

Clazz.newMeth(C$, 'reinitialize$',  function () {
this.table=null;
this.entrySet=null;
this.keySet=null;
this.values=null;
this.modCount=0;
this.threshold=0;
this.秘setJS$();
this.size=0;
});

Clazz.newMeth(C$, 'afterNodeAccess$java_util_HashMap_Node',  function (p) {
});

Clazz.newMeth(C$, 'afterNodeInsertion$Z',  function (evict) {
});

Clazz.newMeth(C$, 'afterNodeRemoval$java_util_HashMap_Node',  function (p) {
});

Clazz.newMeth(C$, 'internalWriteEntries$java_io_ObjectOutputStream',  function (s) {
var tab;
if (this.size > 0 && (tab=this.table) != null  ) {
for (var i=0; i < tab.length; ++i) {
for (var e=tab[i]; e != null ; e=e.next_) {
s.writeObject$O(e.key);
s.writeObject$O(e.value);
}
}
}});

Clazz.newMeth(C$, '秘setJS$',  function () {
this.秘m=(this.秘allowJS && C$.USE_SIMPLE  ? new Map() ||null : null);
});

C$.$static$=function(){C$.$static$=0;
C$.USE_SIMPLE=true;
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.HashMap, "Node", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Map','java.util.Map.Entry']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['hash'],'O',['key','<K>','value','<V>','next_','java.util.HashMap.Node']]]

Clazz.newMeth(C$, 'c$$I$O$O$java_util_HashMap_Node',  function (hash, key, value, next) {
;C$.$init$.apply(this);
this.hash=hash;
this.key=key;
this.value=value;
this.next_=next;
}, 1);

Clazz.newMeth(C$, 'getKey$',  function () {
return this.key;
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.key + "=" + this.value ;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return $I$(1).hashCode$O(this.key) ^ $I$(1).hashCode$O(this.value);
});

Clazz.newMeth(C$, 'setValue$O',  function (newValue) {
var oldValue=this.value;
this.value=newValue;
return oldValue;
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
return (o != null  && (o === this  || Clazz.instanceOf(o, "java.util.Map.Entry") && $I$(1,"equals$O$O",[this.key, (o).getKey$()]) && $I$(1,"equals$O$O",[this.value, (o).getValue$()])   ) );
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HashMap, "KeySet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'size$',  function () {
return this.b$['java.util.HashMap'].size;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.b$['java.util.HashMap'].clear$.apply(this.b$['java.util.HashMap'], []);
});

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(2,1),[this, null]);
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
return this.b$['java.util.HashMap'].containsKey$O.apply(this.b$['java.util.HashMap'], [o]);
});

Clazz.newMeth(C$, 'remove$O',  function (key) {
switch ($I$(3).秘hasKey$java_util_Map$O(this.b$['java.util.HashMap'], key)) {
case 0:
break;
case 1:
$I$(3).秘ensureJavaMap$java_util_Map(this.b$['java.util.HashMap']);
break;
case 2:
return false;
case 3:
return this.b$['java.util.HashMap'].removeNode$I$O$O$Z$Z$I.apply(this.b$['java.util.HashMap'], [3, key, null, false, true, 3]) != null ;
}
return this.b$['java.util.HashMap'].removeNode$I$O$O$Z$Z$I.apply(this.b$['java.util.HashMap'], [$I$(4).hash$O(key), key, null, false, true, 0]) != null ;
});

Clazz.newMeth(C$, 'spliterator$',  function () {
return Clazz.new_($I$(5,1).c$$java_util_HashMap$I$I$I$I,[this.b$['java.util.HashMap'], 0, -1, 0, 0]);
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer',  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.size$() == 0) return;
var mc=this.b$['java.util.HashMap'].modCount;
if ($I$(3).秘isSimple$java_util_Map(this.b$['java.util.HashMap'])) {
var m=this.b$['java.util.HashMap'].秘m;

m.forEach(function(value, key){ action.accept$O(key); });
} else {
var tab;
if ((tab=this.b$['java.util.HashMap'].table) != null ) {
for (var i=0; i < tab.length; ++i) {
for (var e=tab[i]; e != null ; e=e.next_) action.accept$O(e.key);

}
}}if (this.b$['java.util.HashMap'].modCount != mc) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HashMap, "Values", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractCollection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'size$',  function () {
return this.b$['java.util.HashMap'].size$.apply(this.b$['java.util.HashMap'], []);
});

Clazz.newMeth(C$, 'clear$',  function () {
this.b$['java.util.HashMap'].clear$.apply(this.b$['java.util.HashMap'], []);
});

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(6,1),[this, null]);
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
return this.b$['java.util.HashMap'].containsValue$O.apply(this.b$['java.util.HashMap'], [o]);
});

Clazz.newMeth(C$, 'spliterator$',  function () {
return Clazz.new_($I$(7,1).c$$java_util_HashMap$I$I$I$I,[this.b$['java.util.HashMap'], 0, -1, 0, 0]);
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer',  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.size$() == 0) return;
var mc=this.b$['java.util.HashMap'].modCount;
if ($I$(3).秘isSimple$java_util_Map(this.b$['java.util.HashMap'])) {
var m=this.b$['java.util.HashMap'].秘m;

m.forEach(function(value){ action.accept$O(value); });
} else {
var tab;
if ((tab=this.b$['java.util.HashMap'].table) != null ) {
for (var i=0; i < tab.length; ++i) {
for (var e=tab[i]; e != null ; e=e.next_) action.accept$O(e.value);

}
}}if (this.b$['java.util.HashMap'].modCount != mc) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HashMap, "EntrySet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'size$',  function () {
return this.b$['java.util.HashMap'].size$.apply(this.b$['java.util.HashMap'], []);
});

Clazz.newMeth(C$, 'clear$',  function () {
this.b$['java.util.HashMap'].clear$.apply(this.b$['java.util.HashMap'], []);
});

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(8,1),[this, null]);
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var e=o;
var key=e.getKey$();
if (!this.b$['java.util.HashMap'].containsKey$O.apply(this.b$['java.util.HashMap'], [key])) return false;
if ($I$(3).秘isSimple$java_util_Map(this.b$['java.util.HashMap'])) {
var value=e.getValue$();
var v=this.b$['java.util.HashMap'].get$O.apply(this.b$['java.util.HashMap'], [key]);
return (value === v  || value != null  && value.equals$O(v)  );
}var candidate=this.b$['java.util.HashMap'].getNode$I$O.apply(this.b$['java.util.HashMap'], [$I$(4).hash$O(key), key]);
return candidate != null  && candidate.equals$O(e) ;
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) {
return false;
}var e=o;
var key=e.getKey$();
var value=e.getValue$();
switch ($I$(3).秘hasKey$java_util_Map$O(this.b$['java.util.HashMap'], key)) {
default:
case 0:
return this.b$['java.util.HashMap'].removeNode$I$O$O$Z$Z$I.apply(this.b$['java.util.HashMap'], [$I$(4).hash$O(key), key, value, true, true, 0]) != null ;
case 1:
$I$(3).秘ensureJavaMap$java_util_Map(this.b$['java.util.HashMap']);
return this.b$['java.util.HashMap'].removeNode$I$O$O$Z$Z$I.apply(this.b$['java.util.HashMap'], [$I$(4).hash$O(key), key, value, true, true, 0]) != null ;
case 2:
return false;
case 3:
return this.b$['java.util.HashMap'].removeNode$I$O$O$Z$Z$I.apply(this.b$['java.util.HashMap'], [3, key, value, true, true, 3]) != null ;
}
});

Clazz.newMeth(C$, 'spliterator$',  function () {
return Clazz.new_($I$(9,1).c$$java_util_HashMap$I$I$I$I,[this.b$['java.util.HashMap'], 0, -1, 0, 0]);
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer',  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.size$() == 0) return;
var tab;
if ((tab=this.b$['java.util.HashMap'].table) != null ) {
var mc=this.b$['java.util.HashMap'].modCount;
for (var i=0; i < tab.length; ++i) {
for (var e=tab[i]; e != null ; e=e.next_) action.accept$O(e);

}
if (this.b$['java.util.HashMap'].modCount != mc) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HashMap, "HashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isSimple'],'I',['expectedModCount','index'],'O',['jsMapIterator','java.util.Iterator','next_','java.util.HashMap.Node','+current']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.expectedModCount=this.b$['java.util.HashMap'].modCount;
this.current=this.next_=null;
this.isSimple=$I$(3).秘isSimple$java_util_Map(this.b$['java.util.HashMap']);
if (this.isSimple) {
var m=this.b$['java.util.HashMap'].秘m;

this.jsMapIterator = m.entries();
this.next_ = this.jsMapIterator.next();
} else {
var t=this.b$['java.util.HashMap'].table;
this.index=0;
if (t != null  && this.b$['java.util.HashMap'].size > 0 ) {
do {
} while (this.index < t.length && (this.next_=t[this.index++]) == null  );
}}}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
if (this.isSimple) {
return this.next_ != null  && (!this.next_.done &&true) ;
} else {
return this.next_ != null ;
}});

Clazz.newMeth(C$, 'nextNode$',  function () {
if (this.b$['java.util.HashMap'].modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
var e=this.next_;
if (e == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
this.current=e;
if (this.isSimple) {
this.next_=this.jsMapIterator.next() ||null;
} else {
var t;
if ((this.next_=this.current.next_) == null  && (t=this.b$['java.util.HashMap'].table) != null  ) {
do {
} while (this.index < t.length && (this.next_=t[this.index++]) == null  );
}}return e;
});

Clazz.newMeth(C$, 'remove$',  function () {
var p=this.current;
if (p == null ) throw Clazz.new_(Clazz.load('IllegalStateException'));
if (this.b$['java.util.HashMap'].modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
this.current=null;
var key=null;
if (this.isSimple) {

key = p.value[0];
this.b$['java.util.HashMap'].removeNode$I$O$O$Z$Z$I.apply(this.b$['java.util.HashMap'], [0, key, null, false, false, 3]);
} else {
key=p.key;
this.b$['java.util.HashMap'].removeNode$I$O$O$Z$Z$I.apply(this.b$['java.util.HashMap'], [$I$(4).hash$O(key), key, null, false, false, 0]);
}this.expectedModCount=this.b$['java.util.HashMap'].modCount;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HashMap, "KeyIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.HashMap','.HashIterator'], 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'next$',  function () {
var n=this.nextNode$();
if (this.isSimple) {
return (1 ? n.value[0] :null);
} else {
return n.key;
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HashMap, "ValueIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.HashMap','.HashIterator'], 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'next$',  function () {
var n=this.nextNode$();
if (this.isSimple) {
return (1 ? n.value[1] :null);
} else {
return n.value;
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HashMap, "EntryIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.HashMap','.HashIterator'], 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'next$',  function () {
var e=this.nextNode$();
if (this.isSimple) {
return this.b$['java.util.HashMap'].getJSEntry$java_util_Map_Entry.apply(this.b$['java.util.HashMap'], [e]);
} else {
return e;
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HashMap, "HashMapSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isSimple'],'I',['index','fence','est','expectedModCount'],'O',['map','java.util.HashMap','current','java.util.HashMap.Node','jsMapIterator','java.util.Iterator']]]

Clazz.newMeth(C$, 'c$$java_util_HashMap$I$I$I$I',  function (map, origin, fence, est, expectedModCount) {
;C$.$init$.apply(this);
this.map=map;
this.index=origin;
this.fence=fence;
this.est=est;
this.expectedModCount=expectedModCount;
this.isSimple=$I$(3).秘isSimple$java_util_Map(map);
if (this.isSimple) {
var m=map.秘m;

this.jsMapIterator = m.entries();
}}, 1);

Clazz.newMeth(C$, 'getFence$',  function () {
var hi;
if ((hi=this.fence) < 0) {
var m=this.map;
this.est=m.size$();
this.expectedModCount=m.modCount;
var tab=m.table;
hi=this.fence=(tab == null ) ? 0 : tab.length;
}return hi;
});

Clazz.newMeth(C$, 'estimateSize$',  function () {
this.getFence$();
return this.est;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HashMap, "KeySpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.HashMap','.HashMapSpliterator'], 'java.util.Spliterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_HashMap$I$I$I$I',  function (m, origin, fence, est, expectedModCount) {
;C$.superclazz.c$$java_util_HashMap$I$I$I$I.apply(this,[m, origin, fence, est, expectedModCount]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'trySplit$',  function () {
if (this.isSimple) return null;
var hi=this.getFence$();
var lo=this.index;
var mid=(lo + hi) >>> 1;
return (lo >= mid || this.current != null  ) ? null : Clazz.new_(C$.c$$java_util_HashMap$I$I$I$I,[this.map, lo, this.index=mid, this.est>>>=1, this.expectedModCount]);
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var m=this.map;
var i;
var hi;
var mc;
var tab=m.table;
if ((hi=this.fence) < 0) {
mc=this.expectedModCount=m.modCount;
hi=this.fence=(tab == null ) ? 0 : tab.length;
} else mc=this.expectedModCount;
var p=null;
if (this.isSimple) {
while (true){
var k=null;

p = this.jsMapIterator.next(); if (p.done) p = null; else k = p.value[0];
if (p == null ) break;
action.accept$O(k);
}
} else if (tab != null  && tab.length >= hi  && (i=this.index) >= 0  && (i < (this.index=hi) || this.current != null  ) ) {
p=this.current;
this.current=null;
do {
if (p == null ) p=tab[i++];
 else {
action.accept$O(p.key);
p=p.next_;
}} while (p != null  || i < hi );
}if (m.modCount != mc) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer',  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var k=null;
var p=null;
if (this.isSimple) {

p = this.jsMapIterator.next(); if (p.done) p = null; else k = p.value[0];
if (p != null ) {
action.accept$O(k);
return true;
}} else {
var hi;
var tab=this.map.table;
if (tab != null  && tab.length >= (hi=this.getFence$())  && this.index >= 0 ) {
while (this.current != null  || this.index < hi ){
if (this.current == null ) this.current=tab[this.index++];
 else {
k=this.current.key;
this.current=this.current.next_;
action.accept$O(k);
if (this.map.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
return true;
}}
}}return false;
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return (this.fence < 0 || this.est == this.map.size$()  ? 64 : 0) | 1;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HashMap, "ValueSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.HashMap','.HashMapSpliterator'], 'java.util.Spliterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_HashMap$I$I$I$I',  function (m, origin, fence, est, expectedModCount) {
;C$.superclazz.c$$java_util_HashMap$I$I$I$I.apply(this,[m, origin, fence, est, expectedModCount]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'trySplit$',  function () {
if (this.isSimple) return null;
var hi=this.getFence$();
var lo=this.index;
var mid=(lo + hi) >>> 1;
return (lo >= mid || this.current != null  ) ? null : Clazz.new_(C$.c$$java_util_HashMap$I$I$I$I,[this.map, lo, this.index=mid, this.est>>>=1, this.expectedModCount]);
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var m=this.map;
var i;
var hi;
var mc;
var tab=m.table;
if ((hi=this.fence) < 0) {
mc=this.expectedModCount=m.modCount;
hi=this.fence=(tab == null ) ? 0 : tab.length;
} else mc=this.expectedModCount;
var p=null;
if (this.isSimple) {
while (true){
var v=null;

p = this.jsMapIterator.next(); if (p.done) p = null; else v = p.value[1];
if (p == null ) break;
action.accept$O(v);
}
} else if (tab != null  && tab.length >= hi  && (i=this.index) >= 0  && (i < (this.index=hi) || this.current != null  ) ) {
p=this.current;
this.current=null;
do {
if (p == null ) p=tab[i++];
 else {
action.accept$O(p.value);
p=p.next_;
}} while (p != null  || i < hi );
}if (m.modCount != mc) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer',  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var v=null;
var p=null;
if (this.isSimple) {

p = this.jsMapIterator.next(); if (p.done) p = null; else v = p.value[1];
if (p != null ) {
action.accept$O(v);
if (this.map.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
return true;
}} else {
var hi;
var tab=this.map.table;
if (tab != null  && tab.length >= (hi=this.getFence$())  && this.index >= 0 ) {
while (this.current != null  || this.index < hi ){
if (this.current == null ) this.current=tab[this.index++];
 else {
v=this.current.value;
this.current=this.current.next_;
action.accept$O(v);
if (this.map.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
return true;
}}
}}return false;
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return (this.fence < 0 || this.est == this.map.size$()  ? 64 : 0);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HashMap, "EntrySpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.HashMap','.HashMapSpliterator'], 'java.util.Spliterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_HashMap$I$I$I$I',  function (m, origin, fence, est, expectedModCount) {
;C$.superclazz.c$$java_util_HashMap$I$I$I$I.apply(this,[m, origin, fence, est, expectedModCount]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'trySplit$',  function () {
if (this.isSimple) return null;
var hi=this.getFence$();
var lo=this.index;
var mid=(lo + hi) >>> 1;
return (lo >= mid || this.current != null  ) ? null : Clazz.new_(C$.c$$java_util_HashMap$I$I$I$I,[this.map, lo, this.index=mid, this.est>>>=1, this.expectedModCount]);
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
var i;
var hi;
var mc;
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var m=this.map;
var tab=m.table;
if ((hi=this.fence) < 0) {
mc=this.expectedModCount=m.modCount;
hi=this.fence=(tab == null ) ? 0 : tab.length;
} else mc=this.expectedModCount;
var p=null;
if (this.isSimple) {
while (true){

p = this.jsMapIterator.next(); if (p.done) p = null;
if (p == null ) break;
action.accept$O(this.map.getJSEntry$java_util_Map_Entry(p));
}
} else if (tab != null  && tab.length >= hi  && (i=this.index) >= 0  && (i < (this.index=hi) || this.current != null  ) ) {
p=this.current;
this.current=null;
do {
if (p == null ) p=tab[i++];
 else {
action.accept$O(p);
p=p.next_;
}} while (p != null  || i < hi );
}if (m.modCount != mc) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer',  function (action) {
var hi;
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var tab=this.map.table;
var p=null;
if (this.isSimple) {

p = this.jsMapIterator.next(); if (p.done) p = null;
if (p != null ) {
action.accept$O(this.map.getJSEntry$java_util_Map_Entry(p));
if (this.map.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
return true;
}} else if (tab != null  && tab.length >= (hi=this.getFence$())  && this.index >= 0 ) {
while (this.current != null  || this.index < hi ){
if (this.current == null ) this.current=tab[this.index++];
 else {
var e=this.current;
this.current=this.current.next_;
action.accept$O(e);
if (this.map.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
return true;
}}
}return false;
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return (this.fence < 0 || this.est == this.map.size$()  ? 64 : 0) | 1;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HashMap, "TreeNode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.LinkedHashMap','.Entry']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['red'],'O',['parent','java.util.HashMap.TreeNode','+left','+right','+prev']]]

Clazz.newMeth(C$, 'c$$I$O$O$java_util_HashMap_Node',  function (hash, key, val, next) {
;C$.superclazz.c$$I$O$O$java_util_HashMap_Node.apply(this,[hash, key, val, next]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'root$',  function () {
for (var r=this, p; ; ) {
if ((p=r.parent) == null ) return r;
r=p;
}
});

Clazz.newMeth(C$, 'moveRootToFront$java_util_HashMap_NodeA$java_util_HashMap_TreeNode',  function (tab, root) {
var n;
if (root != null  && tab != null   && (n=tab.length) > 0 ) {
var index=(n - 1) & root.hash;
var first=tab[index];
if (root !== first ) {
var rn;
tab[index]=root;
var rp=root.prev;
if ((rn=root.next_) != null ) (rn).prev=rp;
if (rp != null ) rp.next_=rn;
if (first != null ) first.prev=root;
root.next_=first;
root.prev=null;
}Clazz.assert(C$, this, function(){return C$.checkInvariants$java_util_HashMap_TreeNode(root)});
}}, 1);

Clazz.newMeth(C$, 'find$I$O$Class',  function (h, k, kc) {
var p=this;
do {
var ph;
var dir;
var pk;
var pl=p.left;
var pr=p.right;
var q;
if ((ph=p.hash) > h) p=pl;
 else if (ph < h) p=pr;
 else if ((pk=p.key) === k  || (k != null  && k.equals$O(pk) ) ) return p;
 else if (pl == null ) p=pr;
 else if (pr == null ) p=pl;
 else if ((kc != null  || (kc=$I$(4).comparableClassFor$O(k)) != null  ) && (dir=$I$(4).compareComparables$Class$O$O(kc, k, pk)) != 0 ) p=(dir < 0) ? pl : pr;
 else if ((q=pr.find$I$O$Class(h, k, kc)) != null ) return q;
 else p=pl;
} while (p != null );
return null;
});

Clazz.newMeth(C$, 'getTreeNode$I$O',  function (h, k) {
return ((this.parent != null ) ? this.root$() : this).find$I$O$Class(h, k, null);
});

Clazz.newMeth(C$, 'tieBreakOrder$O$O',  function (a, b) {
var d;
if (a == null  || b == null   || (d=a.getClass$().getName$().compareTo$S(b.getClass$().getName$())) == 0 ) d=(System.identityHashCode$O(a) <= System.identityHashCode$O(b) ? -1 : 1);
return d;
}, 1);

Clazz.newMeth(C$, 'treeify$java_util_HashMap_NodeA',  function (tab) {
var root=null;
for (var x=this, next; x != null ; x=next) {
next=x.next_;
x.left=x.right=null;
if (root == null ) {
x.parent=null;
x.red=false;
root=x;
} else {
var k=x.key;
var h=x.hash;
var kc=null;
for (var p=root; ; ) {
var dir;
var ph;
var pk=p.key;
if ((ph=p.hash) > h) dir=-1;
 else if (ph < h) dir=1;
 else if ((kc == null  && (kc=$I$(4).comparableClassFor$O(k)) == null  ) || (dir=$I$(4).compareComparables$Class$O$O(kc, k, pk)) == 0 ) dir=C$.tieBreakOrder$O$O(k, pk);
var xp=p;
if ((p=(dir <= 0) ? p.left : p.right) == null ) {
x.parent=xp;
if (dir <= 0) xp.left=x;
 else xp.right=x;
root=C$.balanceInsertion$java_util_HashMap_TreeNode$java_util_HashMap_TreeNode(root, x);
break;
}}
}}
C$.moveRootToFront$java_util_HashMap_NodeA$java_util_HashMap_TreeNode(tab, root);
});

Clazz.newMeth(C$, 'untreeify$java_util_HashMap',  function (map) {
var hd=null;
var tl=null;
for (var q=this; q != null ; q=q.next_) {
var p=map.replacementNode$java_util_HashMap_Node$java_util_HashMap_Node(q, null);
if (tl == null ) hd=p;
 else tl.next_=p;
tl=p;
}
return hd;
});

Clazz.newMeth(C$, 'putTreeVal$java_util_HashMap$java_util_HashMap_NodeA$I$O$O',  function (map, tab, h, k, v) {
var kc=null;
var searched=false;
var root=(this.parent != null ) ? this.root$() : this;
for (var p=root; ; ) {
var dir;
var ph;
var pk;
if ((ph=p.hash) > h) dir=-1;
 else if (ph < h) dir=1;
 else if ((pk=p.key) === k  || (k != null  && k.equals$O(pk) ) ) return p;
 else if ((kc == null  && (kc=$I$(4).comparableClassFor$O(k)) == null  ) || (dir=$I$(4).compareComparables$Class$O$O(kc, k, pk)) == 0 ) {
if (!searched) {
var q;
var ch;
searched=true;
if (((ch=p.left) != null  && (q=ch.find$I$O$Class(h, k, kc)) != null  ) || ((ch=p.right) != null  && (q=ch.find$I$O$Class(h, k, kc)) != null  ) ) return q;
}dir=C$.tieBreakOrder$O$O(k, pk);
}var xp=p;
if ((p=(dir <= 0) ? p.left : p.right) == null ) {
var xpn=xp.next_;
var x=map.newTreeNode$I$O$O$java_util_HashMap_Node(h, k, v, xpn);
if (dir <= 0) xp.left=x;
 else xp.right=x;
xp.next_=x;
x.parent=x.prev=xp;
if (xpn != null ) (xpn).prev=x;
C$.moveRootToFront$java_util_HashMap_NodeA$java_util_HashMap_TreeNode(tab, C$.balanceInsertion$java_util_HashMap_TreeNode$java_util_HashMap_TreeNode(root, x));
return null;
}}
});

Clazz.newMeth(C$, 'removeTreeNode$java_util_HashMap$java_util_HashMap_NodeA$Z',  function (map, tab, movable) {
var n;
if (tab == null  || (n=tab.length) == 0 ) return;
var index=(n - 1) & this.hash;
var first=tab[index];
var root=first;
var rl;
var succ=this.next_;
var pred=this.prev;
if (pred == null ) tab[index]=first=succ;
 else pred.next_=succ;
if (succ != null ) succ.prev=pred;
if (first == null ) return;
if (root.parent != null ) root=root.root$();
if (root == null  || root.right == null   || (rl=root.left) == null   || rl.left == null  ) {
tab[index]=first.untreeify$java_util_HashMap(map);
return;
}var p=this;
var pl=this.left;
var pr=this.right;
var replacement;
if (pl != null  && pr != null  ) {
var s=pr;
var sl;
while ((sl=s.left) != null )s=sl;

var c=s.red;
s.red=p.red;
p.red=c;
var sr=s.right;
var pp=p.parent;
if (s === pr ) {
p.parent=s;
s.right=p;
} else {
var sp=s.parent;
if ((p.parent=sp) != null ) {
if (s === sp.left ) sp.left=p;
 else sp.right=p;
}if ((s.right=pr) != null ) pr.parent=s;
}p.left=null;
if ((p.right=sr) != null ) sr.parent=p;
if ((s.left=pl) != null ) pl.parent=s;
if ((s.parent=pp) == null ) root=s;
 else if (p === pp.left ) pp.left=s;
 else pp.right=s;
if (sr != null ) replacement=sr;
 else replacement=p;
} else if (pl != null ) replacement=pl;
 else if (pr != null ) replacement=pr;
 else replacement=p;
if (replacement !== p ) {
var pp=replacement.parent=p.parent;
if (pp == null ) root=replacement;
 else if (p === pp.left ) pp.left=replacement;
 else pp.right=replacement;
p.left=p.right=p.parent=null;
}var r=p.red ? root : C$.balanceDeletion$java_util_HashMap_TreeNode$java_util_HashMap_TreeNode(root, replacement);
if (replacement === p ) {
var pp=p.parent;
p.parent=null;
if (pp != null ) {
if (p === pp.left ) pp.left=null;
 else if (p === pp.right ) pp.right=null;
}}if (movable) C$.moveRootToFront$java_util_HashMap_NodeA$java_util_HashMap_TreeNode(tab, r);
});

Clazz.newMeth(C$, 'split$java_util_HashMap$java_util_HashMap_NodeA$I$I',  function (map, tab, index, bit) {
var b=this;
var loHead=null;
var loTail=null;
var hiHead=null;
var hiTail=null;
var lc=0;
var hc=0;
for (var e=b, next; e != null ; e=next) {
next=e.next_;
e.next_=null;
if ((e.hash & bit) == 0) {
if ((e.prev=loTail) == null ) loHead=e;
 else loTail.next_=e;
loTail=e;
++lc;
} else {
if ((e.prev=hiTail) == null ) hiHead=e;
 else hiTail.next_=e;
hiTail=e;
++hc;
}}
if (loHead != null ) {
if (lc <= 6) tab[index]=loHead.untreeify$java_util_HashMap(map);
 else {
tab[index]=loHead;
if (hiHead != null ) loHead.treeify$java_util_HashMap_NodeA(tab);
}}if (hiHead != null ) {
if (hc <= 6) tab[index + bit]=hiHead.untreeify$java_util_HashMap(map);
 else {
tab[index + bit]=hiHead;
if (loHead != null ) hiHead.treeify$java_util_HashMap_NodeA(tab);
}}});

Clazz.newMeth(C$, 'rotateLeft$java_util_HashMap_TreeNode$java_util_HashMap_TreeNode',  function (root, p) {
var r;
var pp;
var rl;
if (p != null  && (r=p.right) != null  ) {
if ((rl=p.right=r.left) != null ) rl.parent=p;
if ((pp=r.parent=p.parent) == null ) (root=r).red=false;
 else if (pp.left === p ) pp.left=r;
 else pp.right=r;
r.left=p;
p.parent=r;
}return root;
}, 1);

Clazz.newMeth(C$, 'rotateRight$java_util_HashMap_TreeNode$java_util_HashMap_TreeNode',  function (root, p) {
var l;
var pp;
var lr;
if (p != null  && (l=p.left) != null  ) {
if ((lr=p.left=l.right) != null ) lr.parent=p;
if ((pp=l.parent=p.parent) == null ) (root=l).red=false;
 else if (pp.right === p ) pp.right=l;
 else pp.left=l;
l.right=p;
p.parent=l;
}return root;
}, 1);

Clazz.newMeth(C$, 'balanceInsertion$java_util_HashMap_TreeNode$java_util_HashMap_TreeNode',  function (root, x) {
x.red=true;
for (var xp, xpp, xppl, xppr; ; ) {
if ((xp=x.parent) == null ) {
x.red=false;
return x;
} else if (!xp.red || (xpp=xp.parent) == null  ) return root;
if (xp === (xppl=xpp.left) ) {
if ((xppr=xpp.right) != null  && xppr.red ) {
xppr.red=false;
xp.red=false;
xpp.red=true;
x=xpp;
} else {
if (x === xp.right ) {
root=C$.rotateLeft$java_util_HashMap_TreeNode$java_util_HashMap_TreeNode(root, x=xp);
xpp=(xp=x.parent) == null  ? null : xp.parent;
}if (xp != null ) {
xp.red=false;
if (xpp != null ) {
xpp.red=true;
root=C$.rotateRight$java_util_HashMap_TreeNode$java_util_HashMap_TreeNode(root, xpp);
}}}} else {
if (xppl != null  && xppl.red ) {
xppl.red=false;
xp.red=false;
xpp.red=true;
x=xpp;
} else {
if (x === xp.left ) {
root=C$.rotateRight$java_util_HashMap_TreeNode$java_util_HashMap_TreeNode(root, x=xp);
xpp=(xp=x.parent) == null  ? null : xp.parent;
}if (xp != null ) {
xp.red=false;
if (xpp != null ) {
xpp.red=true;
root=C$.rotateLeft$java_util_HashMap_TreeNode$java_util_HashMap_TreeNode(root, xpp);
}}}}}
}, 1);

Clazz.newMeth(C$, 'balanceDeletion$java_util_HashMap_TreeNode$java_util_HashMap_TreeNode',  function (root, x) {
for (var xp, xpl, xpr; ; ) {
if (x == null  || x === root  ) return root;
 else if ((xp=x.parent) == null ) {
x.red=false;
return x;
} else if (x.red) {
x.red=false;
return root;
} else if ((xpl=xp.left) === x ) {
if ((xpr=xp.right) != null  && xpr.red ) {
xpr.red=false;
xp.red=true;
root=C$.rotateLeft$java_util_HashMap_TreeNode$java_util_HashMap_TreeNode(root, xp);
xpr=(xp=x.parent) == null  ? null : xp.right;
}if (xpr == null ) x=xp;
 else {
var sl=xpr.left;
var sr=xpr.right;
if ((sr == null  || !sr.red ) && (sl == null  || !sl.red ) ) {
xpr.red=true;
x=xp;
} else {
if (sr == null  || !sr.red ) {
if (sl != null ) sl.red=false;
xpr.red=true;
root=C$.rotateRight$java_util_HashMap_TreeNode$java_util_HashMap_TreeNode(root, xpr);
xpr=(xp=x.parent) == null  ? null : xp.right;
}if (xpr != null ) {
xpr.red=(xp == null ) ? false : xp.red;
if ((sr=xpr.right) != null ) sr.red=false;
}if (xp != null ) {
xp.red=false;
root=C$.rotateLeft$java_util_HashMap_TreeNode$java_util_HashMap_TreeNode(root, xp);
}x=root;
}}} else {
if (xpl != null  && xpl.red ) {
xpl.red=false;
xp.red=true;
root=C$.rotateRight$java_util_HashMap_TreeNode$java_util_HashMap_TreeNode(root, xp);
xpl=(xp=x.parent) == null  ? null : xp.left;
}if (xpl == null ) x=xp;
 else {
var sl=xpl.left;
var sr=xpl.right;
if ((sl == null  || !sl.red ) && (sr == null  || !sr.red ) ) {
xpl.red=true;
x=xp;
} else {
if (sl == null  || !sl.red ) {
if (sr != null ) sr.red=false;
xpl.red=true;
root=C$.rotateLeft$java_util_HashMap_TreeNode$java_util_HashMap_TreeNode(root, xpl);
xpl=(xp=x.parent) == null  ? null : xp.left;
}if (xpl != null ) {
xpl.red=(xp == null ) ? false : xp.red;
if ((sl=xpl.left) != null ) sl.red=false;
}if (xp != null ) {
xp.red=false;
root=C$.rotateRight$java_util_HashMap_TreeNode$java_util_HashMap_TreeNode(root, xp);
}x=root;
}}}}
}, 1);

Clazz.newMeth(C$, 'checkInvariants$java_util_HashMap_TreeNode',  function (t) {
var tp=t.parent;
var tl=t.left;
var tr=t.right;
var tb=t.prev;
var tn=t.next_;
if (tb != null  && tb.next_ !== t  ) return false;
if (tn != null  && tn.prev !== t  ) return false;
if (tp != null  && t !== tp.left   && t !== tp.right  ) return false;
if (tl != null  && (tl.parent !== t  || tl.hash > t.hash ) ) return false;
if (tr != null  && (tr.parent !== t  || tr.hash < t.hash ) ) return false;
if (t.red && tl != null   && tl.red  && tr != null   && tr.red ) return false;
if (tl != null  && !C$.checkInvariants$java_util_HashMap_TreeNode(tl) ) return false;
if (tr != null  && !C$.checkInvariants$java_util_HashMap_TreeNode(tr) ) return false;
return true;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:32 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
