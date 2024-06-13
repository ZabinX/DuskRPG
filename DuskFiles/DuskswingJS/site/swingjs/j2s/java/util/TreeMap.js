(function(){var P$=java.util,p$1={},I$=[[0,['java.util.TreeMap','.ValueIterator'],'java.util.TreeMap',['java.util.TreeMap','.ValueSpliterator'],['java.util.TreeMap','.EntryIterator'],['java.util.TreeMap','.EntrySpliterator'],['java.util.TreeMap','.KeySet'],['java.util.TreeMap','.NavigableSubMap','.SubMapEntryIterator'],['java.util.TreeMap','.DescendingSubMap'],['java.util.TreeMap','.NavigableSubMap','.SubMapKeyIterator'],['java.util.TreeMap','.NavigableSubMap','.DescendingSubMapKeyIterator'],['java.util.TreeMap','.AscendingSubMap','.AscendingEntrySetView'],['java.util.TreeMap','.NavigableSubMap','.DescendingSubMapEntryIterator'],'java.util.Collections',['java.util.TreeMap','.AscendingSubMap'],['java.util.TreeMap','.DescendingSubMap','.DescendingEntrySetView'],'InternalError',['java.util.Map','.Entry'],['java.util.TreeMap','.Entry'],['java.util.TreeMap','.Values'],['java.util.TreeMap','.EntrySet'],'java.util.Objects',['java.util.TreeMap','.KeyIterator'],['java.util.TreeMap','.DescendingKeyIterator'],['java.util.AbstractMap','.SimpleImmutableEntry'],['java.util.TreeMap','.KeySpliterator'],['java.util.TreeMap','.DescendingKeySpliterator']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TreeMap", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractMap', ['java.util.NavigableMap', 'Cloneable', 'java.io.Serializable']);
C$.$classes$=[['Values',0],['EntrySet',0],['KeySet',24],['PrivateEntryIterator',1024],['EntryIterator',16],['ValueIterator',16],['KeyIterator',16],['DescendingKeyIterator',16],['NavigableSubMap',1032],['AscendingSubMap',24],['DescendingSubMap',24],['SubMap',2],['Entry',24],['TreeMapSpliterator',8],['KeySpliterator',24],['DescendingKeySpliterator',24],['ValueSpliterator',24],['EntrySpliterator',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.size=0;
this.modCount=0;
},1);

C$.$fields$=[['I',['size','modCount'],'O',['comparator','java.util.Comparator','root','java.util.TreeMap.Entry','entrySet','java.util.TreeMap.EntrySet','navigableKeySet','java.util.TreeMap.KeySet','descendingMap','java.util.NavigableMap']]
,['O',['UNBOUNDED','java.lang.Object']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.comparator=null;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Comparator',  function (comparator) {
Clazz.super_(C$, this);
this.comparator=comparator;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map',  function (m) {
Clazz.super_(C$, this);
this.comparator=null;
this.putAll$java_util_Map(m);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_SortedMap',  function (m) {
Clazz.super_(C$, this);
this.comparator=m.comparator$();
try {
p$1.buildFromSorted$I$java_util_Iterator$java_io_ObjectInputStream$O.apply(this, [m.size$(), m.entrySet$().iterator$(), null, null]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var cannotHappen = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var cannotHappen = e$$;
{
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'size$',  function () {
return this.size;
});

Clazz.newMeth(C$, 'containsKey$O',  function (key) {
return this.getEntry$O(key) != null ;
});

Clazz.newMeth(C$, 'containsValue$O',  function (value) {
for (var e=this.getFirstEntry$(); e != null ; e=C$.successor$java_util_TreeMap_Entry(e)) if (C$.valEquals$O$O(value, e.value)) return true;

return false;
});

Clazz.newMeth(C$, 'get$O',  function (key) {
var p=this.getEntry$O(key);
return (p == null  ? null : p.value);
});

Clazz.newMeth(C$, 'comparator$',  function () {
return this.comparator;
});

Clazz.newMeth(C$, 'firstKey$',  function () {
return C$.key$java_util_TreeMap_Entry(this.getFirstEntry$());
});

Clazz.newMeth(C$, 'lastKey$',  function () {
return C$.key$java_util_TreeMap_Entry(this.getLastEntry$());
});

Clazz.newMeth(C$, 'putAll$java_util_Map',  function (map) {
var mapSize=map.size$();
if (this.size == 0 && mapSize != 0  && Clazz.instanceOf(map, "java.util.SortedMap") ) {
var c=(map).comparator$();
if (c === this.comparator  || (c != null  && c.equals$O(this.comparator) ) ) {
++this.modCount;
try {
p$1.buildFromSorted$I$java_util_Iterator$java_io_ObjectInputStream$O.apply(this, [mapSize, map.entrySet$().iterator$(), null, null]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var cannotHappen = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var cannotHappen = e$$;
{
}
} else {
throw e$$;
}
}
return;
}}C$.superclazz.prototype.putAll$java_util_Map.apply(this, [map]);
});

Clazz.newMeth(C$, 'getEntry$O',  function (key) {
if (this.comparator != null ) return this.getEntryUsingComparator$O(key);
if (key == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var k=key;
var p=this.root;
while (p != null ){
var cmp=k.compareTo$O(p.key);
if (cmp < 0) p=p.left;
 else if (cmp > 0) p=p.right;
 else return p;
}
return null;
});

Clazz.newMeth(C$, 'getEntryUsingComparator$O',  function (key) {
var k=key;
var cpr=this.comparator;
if (cpr != null ) {
var p=this.root;
while (p != null ){
var cmp=cpr.compare$O$O(k, p.key);
if (cmp < 0) p=p.left;
 else if (cmp > 0) p=p.right;
 else return p;
}
}return null;
});

Clazz.newMeth(C$, 'getCeilingEntry$O',  function (key) {
var p=this.root;
while (p != null ){
var cmp=this.compare$O$O(key, p.key);
if (cmp < 0) {
if (p.left != null ) p=p.left;
 else return p;
} else if (cmp > 0) {
if (p.right != null ) {
p=p.right;
} else {
var parent=p.parent;
var ch=p;
while (parent != null  && ch === parent.right  ){
ch=parent;
parent=parent.parent;
}
return parent;
}} else return p;
}
return null;
});

Clazz.newMeth(C$, 'getFloorEntry$O',  function (key) {
var p=this.root;
while (p != null ){
var cmp=this.compare$O$O(key, p.key);
if (cmp > 0) {
if (p.right != null ) p=p.right;
 else return p;
} else if (cmp < 0) {
if (p.left != null ) {
p=p.left;
} else {
var parent=p.parent;
var ch=p;
while (parent != null  && ch === parent.left  ){
ch=parent;
parent=parent.parent;
}
return parent;
}} else return p;
}
return null;
});

Clazz.newMeth(C$, 'getHigherEntry$O',  function (key) {
var p=this.root;
while (p != null ){
var cmp=this.compare$O$O(key, p.key);
if (cmp < 0) {
if (p.left != null ) p=p.left;
 else return p;
} else {
if (p.right != null ) {
p=p.right;
} else {
var parent=p.parent;
var ch=p;
while (parent != null  && ch === parent.right  ){
ch=parent;
parent=parent.parent;
}
return parent;
}}}
return null;
});

Clazz.newMeth(C$, 'getLowerEntry$O',  function (key) {
var p=this.root;
while (p != null ){
var cmp=this.compare$O$O(key, p.key);
if (cmp > 0) {
if (p.right != null ) p=p.right;
 else return p;
} else {
if (p.left != null ) {
p=p.left;
} else {
var parent=p.parent;
var ch=p;
while (parent != null  && ch === parent.left  ){
ch=parent;
parent=parent.parent;
}
return parent;
}}}
return null;
});

Clazz.newMeth(C$, 'put$O$O',  function (key, value) {
var t=this.root;
if (t == null ) {
this.compare$O$O(key, key);
this.root=Clazz.new_($I$(18,1).c$$O$O$java_util_TreeMap_Entry,[key, value, null]);
this.size=1;
++this.modCount;
return null;
}var cmp;
var parent;
var cpr=this.comparator;
if (cpr != null ) {
do {
parent=t;
cmp=cpr.compare$O$O(key, t.key);
if (cmp < 0) t=t.left;
 else if (cmp > 0) t=t.right;
 else return t.setValue$O(value);
} while (t != null );
} else {
if (key == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var k=key;
do {
parent=t;
cmp=k.compareTo$O(t.key);
if (cmp < 0) t=t.left;
 else if (cmp > 0) t=t.right;
 else return t.setValue$O(value);
} while (t != null );
}var e=Clazz.new_($I$(18,1).c$$O$O$java_util_TreeMap_Entry,[key, value, parent]);
if (cmp < 0) parent.left=e;
 else parent.right=e;
p$1.fixAfterInsertion$java_util_TreeMap_Entry.apply(this, [e]);
++this.size;
++this.modCount;
return null;
});

Clazz.newMeth(C$, 'remove$O',  function (key) {
var p=this.getEntry$O(key);
if (p == null ) return null;
var oldValue=p.value;
p$1.deleteEntry$java_util_TreeMap_Entry.apply(this, [p]);
return oldValue;
});

Clazz.newMeth(C$, 'clear$',  function () {
++this.modCount;
this.size=0;
this.root=null;
});

Clazz.newMeth(C$, 'clone$',  function () {
var clone;
try {
clone=C$.superclazz.prototype.clone$.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(16,1).c$$Throwable,[e]);
} else {
throw e;
}
}
clone.root=null;
clone.size=0;
clone.modCount=0;
clone.entrySet=null;
clone.navigableKeySet=null;
clone.descendingMap=null;
try {
p$1.buildFromSorted$I$java_util_Iterator$java_io_ObjectInputStream$O.apply(clone, [this.size, this.entrySet$().iterator$(), null, null]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var cannotHappen = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var cannotHappen = e$$;
{
}
} else {
throw e$$;
}
}
return clone;
});

Clazz.newMeth(C$, 'firstEntry$',  function () {
return C$.exportEntry$java_util_TreeMap_Entry(this.getFirstEntry$());
});

Clazz.newMeth(C$, 'lastEntry$',  function () {
return C$.exportEntry$java_util_TreeMap_Entry(this.getLastEntry$());
});

Clazz.newMeth(C$, 'pollFirstEntry$',  function () {
var p=this.getFirstEntry$();
var result=C$.exportEntry$java_util_TreeMap_Entry(p);
if (p != null ) p$1.deleteEntry$java_util_TreeMap_Entry.apply(this, [p]);
return result;
});

Clazz.newMeth(C$, 'pollLastEntry$',  function () {
var p=this.getLastEntry$();
var result=C$.exportEntry$java_util_TreeMap_Entry(p);
if (p != null ) p$1.deleteEntry$java_util_TreeMap_Entry.apply(this, [p]);
return result;
});

Clazz.newMeth(C$, 'lowerEntry$O',  function (key) {
return C$.exportEntry$java_util_TreeMap_Entry(this.getLowerEntry$O(key));
});

Clazz.newMeth(C$, 'lowerKey$O',  function (key) {
return C$.keyOrNull$java_util_TreeMap_Entry(this.getLowerEntry$O(key));
});

Clazz.newMeth(C$, 'floorEntry$O',  function (key) {
return C$.exportEntry$java_util_TreeMap_Entry(this.getFloorEntry$O(key));
});

Clazz.newMeth(C$, 'floorKey$O',  function (key) {
return C$.keyOrNull$java_util_TreeMap_Entry(this.getFloorEntry$O(key));
});

Clazz.newMeth(C$, 'ceilingEntry$O',  function (key) {
return C$.exportEntry$java_util_TreeMap_Entry(this.getCeilingEntry$O(key));
});

Clazz.newMeth(C$, 'ceilingKey$O',  function (key) {
return C$.keyOrNull$java_util_TreeMap_Entry(this.getCeilingEntry$O(key));
});

Clazz.newMeth(C$, 'higherEntry$O',  function (key) {
return C$.exportEntry$java_util_TreeMap_Entry(this.getHigherEntry$O(key));
});

Clazz.newMeth(C$, 'higherKey$O',  function (key) {
return C$.keyOrNull$java_util_TreeMap_Entry(this.getHigherEntry$O(key));
});

Clazz.newMeth(C$, 'keySet$',  function () {
return this.navigableKeySet$();
});

Clazz.newMeth(C$, 'navigableKeySet$',  function () {
var nks=this.navigableKeySet;
return (nks != null ) ? nks : (this.navigableKeySet=Clazz.new_($I$(6,1).c$$java_util_NavigableMap,[this]));
});

Clazz.newMeth(C$, 'descendingKeySet$',  function () {
return this.descendingMap$().navigableKeySet$();
});

Clazz.newMeth(C$, 'values$',  function () {
var vs=this.values;
return (vs != null ) ? vs : (this.values=Clazz.new_($I$(19,1),[this, null]));
});

Clazz.newMeth(C$, 'entrySet$',  function () {
var es=this.entrySet;
return (es != null ) ? es : (this.entrySet=Clazz.new_($I$(20,1),[this, null]));
});

Clazz.newMeth(C$, 'descendingMap$',  function () {
var km=this.descendingMap;
return (km != null ) ? km : (this.descendingMap=Clazz.new_($I$(8,1).c$$java_util_TreeMap$Z$O$Z$Z$O$Z,[this, true, null, true, true, null, true]));
});

Clazz.newMeth(C$, 'subMap$O$Z$O$Z',  function (fromKey, fromInclusive, toKey, toInclusive) {
return Clazz.new_($I$(14,1).c$$java_util_TreeMap$Z$O$Z$Z$O$Z,[this, false, fromKey, fromInclusive, false, toKey, toInclusive]);
});

Clazz.newMeth(C$, 'headMap$O$Z',  function (toKey, inclusive) {
return Clazz.new_($I$(14,1).c$$java_util_TreeMap$Z$O$Z$Z$O$Z,[this, true, null, true, false, toKey, inclusive]);
});

Clazz.newMeth(C$, 'tailMap$O$Z',  function (fromKey, inclusive) {
return Clazz.new_($I$(14,1).c$$java_util_TreeMap$Z$O$Z$Z$O$Z,[this, false, fromKey, inclusive, true, null, true]);
});

Clazz.newMeth(C$, 'subMap$O$O',  function (fromKey, toKey) {
return this.subMap$O$Z$O$Z(fromKey, true, toKey, false);
});

Clazz.newMeth(C$, 'headMap$O',  function (toKey) {
return this.headMap$O$Z(toKey, false);
});

Clazz.newMeth(C$, 'tailMap$O',  function (fromKey) {
return this.tailMap$O$Z(fromKey, true);
});

Clazz.newMeth(C$, 'replace$O$O$O',  function (key, oldValue, newValue) {
var p=this.getEntry$O(key);
if (p != null  && $I$(21).equals$O$O(oldValue, p.value) ) {
p.value=newValue;
return true;
}return false;
});

Clazz.newMeth(C$, 'replace$O$O',  function (key, value) {
var p=this.getEntry$O(key);
if (p != null ) {
var oldValue=p.value;
p.value=value;
return oldValue;
}return null;
});

Clazz.newMeth(C$, 'forEach$java_util_function_BiConsumer',  function (action) {
$I$(21).requireNonNull$O(action);
var expectedModCount=this.modCount;
for (var e=this.getFirstEntry$(); e != null ; e=C$.successor$java_util_TreeMap_Entry(e)) {
action.accept$O$O(e.key, e.value);
if (expectedModCount != this.modCount) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}}
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_BiFunction',  function ($function) {
$I$(21).requireNonNull$O($function);
var expectedModCount=this.modCount;
for (var e=this.getFirstEntry$(); e != null ; e=C$.successor$java_util_TreeMap_Entry(e)) {
e.value=$function.apply$O$O(e.key, e.value);
if (expectedModCount != this.modCount) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}}
});

Clazz.newMeth(C$, 'keyIterator$',  function () {
return Clazz.new_([this, null, this.getFirstEntry$()],$I$(22,1).c$$java_util_TreeMap_Entry);
});

Clazz.newMeth(C$, 'descendingKeyIterator$',  function () {
return Clazz.new_([this, null, this.getLastEntry$()],$I$(23,1).c$$java_util_TreeMap_Entry);
});

Clazz.newMeth(C$, 'compare$O$O',  function (k1, k2) {
return this.comparator == null  ? (k1).compareTo$O(k2) : this.comparator.compare$O$O(k1, k2);
});

Clazz.newMeth(C$, 'valEquals$O$O',  function (o1, o2) {
return (o1 == null  ? o2 == null  : o1.equals$O(o2));
}, 1);

Clazz.newMeth(C$, 'exportEntry$java_util_TreeMap_Entry',  function (e) {
return (e == null ) ? null : Clazz.new_($I$(24,1).c$$java_util_Map_Entry,[e]);
}, 1);

Clazz.newMeth(C$, 'keyOrNull$java_util_TreeMap_Entry',  function (e) {
return (e == null ) ? null : e.key;
}, 1);

Clazz.newMeth(C$, 'key$java_util_TreeMap_Entry',  function (e) {
if (e == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
return e.key;
}, 1);

Clazz.newMeth(C$, 'getFirstEntry$',  function () {
var p=this.root;
if (p != null ) while (p.left != null )p=p.left;

return p;
});

Clazz.newMeth(C$, 'getLastEntry$',  function () {
var p=this.root;
if (p != null ) while (p.right != null )p=p.right;

return p;
});

Clazz.newMeth(C$, 'successor$java_util_TreeMap_Entry',  function (t) {
if (t == null ) return null;
 else if (t.right != null ) {
var p=t.right;
while (p.left != null )p=p.left;

return p;
} else {
var p=t.parent;
var ch=t;
while (p != null  && ch === p.right  ){
ch=p;
p=p.parent;
}
return p;
}}, 1);

Clazz.newMeth(C$, 'predecessor$java_util_TreeMap_Entry',  function (t) {
if (t == null ) return null;
 else if (t.left != null ) {
var p=t.left;
while (p.right != null )p=p.right;

return p;
} else {
var p=t.parent;
var ch=t;
while (p != null  && ch === p.left  ){
ch=p;
p=p.parent;
}
return p;
}}, 1);

Clazz.newMeth(C$, 'colorOf$java_util_TreeMap_Entry',  function (p) {
return (p == null  ? true : p.color);
}, 1);

Clazz.newMeth(C$, 'parentOf$java_util_TreeMap_Entry',  function (p) {
return (p == null  ? null : p.parent);
}, 1);

Clazz.newMeth(C$, 'setColor$java_util_TreeMap_Entry$Z',  function (p, c) {
if (p != null ) p.color=c;
}, 1);

Clazz.newMeth(C$, 'leftOf$java_util_TreeMap_Entry',  function (p) {
return (p == null ) ? null : p.left;
}, 1);

Clazz.newMeth(C$, 'rightOf$java_util_TreeMap_Entry',  function (p) {
return (p == null ) ? null : p.right;
}, 1);

Clazz.newMeth(C$, 'rotateLeft$java_util_TreeMap_Entry',  function (p) {
if (p != null ) {
var r=p.right;
p.right=r.left;
if (r.left != null ) r.left.parent=p;
r.parent=p.parent;
if (p.parent == null ) this.root=r;
 else if (p.parent.left === p ) p.parent.left=r;
 else p.parent.right=r;
r.left=p;
p.parent=r;
}}, p$1);

Clazz.newMeth(C$, 'rotateRight$java_util_TreeMap_Entry',  function (p) {
if (p != null ) {
var l=p.left;
p.left=l.right;
if (l.right != null ) l.right.parent=p;
l.parent=p.parent;
if (p.parent == null ) this.root=l;
 else if (p.parent.right === p ) p.parent.right=l;
 else p.parent.left=l;
l.right=p;
p.parent=l;
}}, p$1);

Clazz.newMeth(C$, 'fixAfterInsertion$java_util_TreeMap_Entry',  function (x) {
x.color=false;
while (x != null  && x !== this.root   && x.parent.color == false  ){
if (C$.parentOf$java_util_TreeMap_Entry(x) === C$.leftOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(x))) ) {
var y=C$.rightOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(x)));
if (C$.colorOf$java_util_TreeMap_Entry(y) == false ) {
C$.setColor$java_util_TreeMap_Entry$Z(C$.parentOf$java_util_TreeMap_Entry(x), true);
C$.setColor$java_util_TreeMap_Entry$Z(y, true);
C$.setColor$java_util_TreeMap_Entry$Z(C$.parentOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(x)), false);
x=C$.parentOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(x));
} else {
if (x === C$.rightOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(x)) ) {
x=C$.parentOf$java_util_TreeMap_Entry(x);
p$1.rotateLeft$java_util_TreeMap_Entry.apply(this, [x]);
}C$.setColor$java_util_TreeMap_Entry$Z(C$.parentOf$java_util_TreeMap_Entry(x), true);
C$.setColor$java_util_TreeMap_Entry$Z(C$.parentOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(x)), false);
p$1.rotateRight$java_util_TreeMap_Entry.apply(this, [C$.parentOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(x))]);
}} else {
var y=C$.leftOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(x)));
if (C$.colorOf$java_util_TreeMap_Entry(y) == false ) {
C$.setColor$java_util_TreeMap_Entry$Z(C$.parentOf$java_util_TreeMap_Entry(x), true);
C$.setColor$java_util_TreeMap_Entry$Z(y, true);
C$.setColor$java_util_TreeMap_Entry$Z(C$.parentOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(x)), false);
x=C$.parentOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(x));
} else {
if (x === C$.leftOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(x)) ) {
x=C$.parentOf$java_util_TreeMap_Entry(x);
p$1.rotateRight$java_util_TreeMap_Entry.apply(this, [x]);
}C$.setColor$java_util_TreeMap_Entry$Z(C$.parentOf$java_util_TreeMap_Entry(x), true);
C$.setColor$java_util_TreeMap_Entry$Z(C$.parentOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(x)), false);
p$1.rotateLeft$java_util_TreeMap_Entry.apply(this, [C$.parentOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(x))]);
}}}
this.root.color=true;
}, p$1);

Clazz.newMeth(C$, 'deleteEntry$java_util_TreeMap_Entry',  function (p) {
++this.modCount;
--this.size;
if (p.left != null  && p.right != null  ) {
var s=C$.successor$java_util_TreeMap_Entry(p);
p.key=s.key;
p.value=s.value;
p=s;
}var replacement=(p.left != null  ? p.left : p.right);
if (replacement != null ) {
replacement.parent=p.parent;
if (p.parent == null ) this.root=replacement;
 else if (p === p.parent.left ) p.parent.left=replacement;
 else p.parent.right=replacement;
p.left=p.right=p.parent=null;
if (p.color == true ) p$1.fixAfterDeletion$java_util_TreeMap_Entry.apply(this, [replacement]);
} else if (p.parent == null ) {
this.root=null;
} else {
if (p.color == true ) p$1.fixAfterDeletion$java_util_TreeMap_Entry.apply(this, [p]);
if (p.parent != null ) {
if (p === p.parent.left ) p.parent.left=null;
 else if (p === p.parent.right ) p.parent.right=null;
p.parent=null;
}}}, p$1);

Clazz.newMeth(C$, 'fixAfterDeletion$java_util_TreeMap_Entry',  function (x) {
while (x !== this.root  && C$.colorOf$java_util_TreeMap_Entry(x) == true  ){
if (x === C$.leftOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(x)) ) {
var sib=C$.rightOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(x));
if (C$.colorOf$java_util_TreeMap_Entry(sib) == false ) {
C$.setColor$java_util_TreeMap_Entry$Z(sib, true);
C$.setColor$java_util_TreeMap_Entry$Z(C$.parentOf$java_util_TreeMap_Entry(x), false);
p$1.rotateLeft$java_util_TreeMap_Entry.apply(this, [C$.parentOf$java_util_TreeMap_Entry(x)]);
sib=C$.rightOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(x));
}if (C$.colorOf$java_util_TreeMap_Entry(C$.leftOf$java_util_TreeMap_Entry(sib)) == true  && C$.colorOf$java_util_TreeMap_Entry(C$.rightOf$java_util_TreeMap_Entry(sib)) == true  ) {
C$.setColor$java_util_TreeMap_Entry$Z(sib, false);
x=C$.parentOf$java_util_TreeMap_Entry(x);
} else {
if (C$.colorOf$java_util_TreeMap_Entry(C$.rightOf$java_util_TreeMap_Entry(sib)) == true ) {
C$.setColor$java_util_TreeMap_Entry$Z(C$.leftOf$java_util_TreeMap_Entry(sib), true);
C$.setColor$java_util_TreeMap_Entry$Z(sib, false);
p$1.rotateRight$java_util_TreeMap_Entry.apply(this, [sib]);
sib=C$.rightOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(x));
}C$.setColor$java_util_TreeMap_Entry$Z(sib, C$.colorOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(x)));
C$.setColor$java_util_TreeMap_Entry$Z(C$.parentOf$java_util_TreeMap_Entry(x), true);
C$.setColor$java_util_TreeMap_Entry$Z(C$.rightOf$java_util_TreeMap_Entry(sib), true);
p$1.rotateLeft$java_util_TreeMap_Entry.apply(this, [C$.parentOf$java_util_TreeMap_Entry(x)]);
x=this.root;
}} else {
var sib=C$.leftOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(x));
if (C$.colorOf$java_util_TreeMap_Entry(sib) == false ) {
C$.setColor$java_util_TreeMap_Entry$Z(sib, true);
C$.setColor$java_util_TreeMap_Entry$Z(C$.parentOf$java_util_TreeMap_Entry(x), false);
p$1.rotateRight$java_util_TreeMap_Entry.apply(this, [C$.parentOf$java_util_TreeMap_Entry(x)]);
sib=C$.leftOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(x));
}if (C$.colorOf$java_util_TreeMap_Entry(C$.rightOf$java_util_TreeMap_Entry(sib)) == true  && C$.colorOf$java_util_TreeMap_Entry(C$.leftOf$java_util_TreeMap_Entry(sib)) == true  ) {
C$.setColor$java_util_TreeMap_Entry$Z(sib, false);
x=C$.parentOf$java_util_TreeMap_Entry(x);
} else {
if (C$.colorOf$java_util_TreeMap_Entry(C$.leftOf$java_util_TreeMap_Entry(sib)) == true ) {
C$.setColor$java_util_TreeMap_Entry$Z(C$.rightOf$java_util_TreeMap_Entry(sib), true);
C$.setColor$java_util_TreeMap_Entry$Z(sib, false);
p$1.rotateLeft$java_util_TreeMap_Entry.apply(this, [sib]);
sib=C$.leftOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(x));
}C$.setColor$java_util_TreeMap_Entry$Z(sib, C$.colorOf$java_util_TreeMap_Entry(C$.parentOf$java_util_TreeMap_Entry(x)));
C$.setColor$java_util_TreeMap_Entry$Z(C$.parentOf$java_util_TreeMap_Entry(x), true);
C$.setColor$java_util_TreeMap_Entry$Z(C$.leftOf$java_util_TreeMap_Entry(sib), true);
p$1.rotateRight$java_util_TreeMap_Entry.apply(this, [C$.parentOf$java_util_TreeMap_Entry(x)]);
x=this.root;
}}}
C$.setColor$java_util_TreeMap_Entry$Z(x, true);
}, p$1);

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (s) {
s.defaultWriteObject$();
s.writeInt$I(this.size);
for (var i=this.entrySet$().iterator$(); i.hasNext$(); ) {
var e=i.next$();
s.writeObject$O(e.getKey$());
s.writeObject$O(e.getValue$());
}
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
s.defaultReadObject$();
var size=s.readInt$();
p$1.buildFromSorted$I$java_util_Iterator$java_io_ObjectInputStream$O.apply(this, [size, null, s, null]);
}, p$1);

Clazz.newMeth(C$, 'readTreeSet$I$java_io_ObjectInputStream$O',  function (size, s, defaultVal) {
p$1.buildFromSorted$I$java_util_Iterator$java_io_ObjectInputStream$O.apply(this, [size, null, s, defaultVal]);
});

Clazz.newMeth(C$, 'addAllForTreeSet$java_util_SortedSet$O',  function (set, defaultVal) {
try {
p$1.buildFromSorted$I$java_util_Iterator$java_io_ObjectInputStream$O.apply(this, [set.size$(), set.iterator$(), null, defaultVal]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var cannotHappen = e$$;
{
}
} else if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var cannotHappen = e$$;
{
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'buildFromSorted$I$java_util_Iterator$java_io_ObjectInputStream$O',  function (size, it, str, defaultVal) {
this.size=size;
this.root=p$1.buildFromSorted$I$I$I$I$java_util_Iterator$java_io_ObjectInputStream$O.apply(this, [0, 0, size - 1, C$.computeRedLevel$I(size), it, str, defaultVal]);
}, p$1);

Clazz.newMeth(C$, 'buildFromSorted$I$I$I$I$java_util_Iterator$java_io_ObjectInputStream$O',  function (level, lo, hi, redLevel, it, str, defaultVal) {
if (hi < lo) return null;
var mid=(lo + hi) >>> 1;
var left=null;
if (lo < mid) left=p$1.buildFromSorted$I$I$I$I$java_util_Iterator$java_io_ObjectInputStream$O.apply(this, [level + 1, lo, mid - 1, redLevel, it, str, defaultVal]);
var key;
var value;
if (it != null ) {
if (defaultVal == null ) {
var entry=it.next$();
key=entry.getKey$();
value=entry.getValue$();
} else {
key=it.next$();
value=defaultVal;
}} else {
key=str.readObject$();
value=(defaultVal != null  ? defaultVal : str.readObject$());
}var middle=Clazz.new_($I$(18,1).c$$O$O$java_util_TreeMap_Entry,[key, value, null]);
if (level == redLevel) middle.color=false;
if (left != null ) {
middle.left=left;
left.parent=middle;
}if (mid < hi) {
var right=p$1.buildFromSorted$I$I$I$I$java_util_Iterator$java_io_ObjectInputStream$O.apply(this, [level + 1, mid + 1, hi, redLevel, it, str, defaultVal]);
middle.right=right;
right.parent=middle;
}return middle;
}, p$1);

Clazz.newMeth(C$, 'computeRedLevel$I',  function (sz) {
var level=0;
for (var m=sz - 1; m >= 0; m=(m/2|0) - 1) ++level;

return level;
}, 1);

Clazz.newMeth(C$, 'keySpliteratorFor$java_util_NavigableMap',  function (m) {
if (Clazz.instanceOf(m, "java.util.TreeMap")) {
var t=m;
return t.keySpliterator$();
}if (Clazz.instanceOf(m, "java.util.TreeMap.DescendingSubMap")) {
var dm=m;
var tm=dm.m;
if (dm === tm.descendingMap ) {
var t=tm;
return t.descendingKeySpliterator$();
}}var sm=m;
return sm.keySpliterator$();
}, 1);

Clazz.newMeth(C$, 'keySpliterator$',  function () {
return Clazz.new_($I$(25,1).c$$java_util_TreeMap$java_util_TreeMap_Entry$java_util_TreeMap_Entry$I$I$I,[this, null, null, 0, -1, 0]);
});

Clazz.newMeth(C$, 'descendingKeySpliterator$',  function () {
return Clazz.new_($I$(26,1).c$$java_util_TreeMap$java_util_TreeMap_Entry$java_util_TreeMap_Entry$I$I$I,[this, null, null, 0, -2, 0]);
});

C$.$static$=function(){C$.$static$=0;
C$.UNBOUNDED= Clazz.new_();
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap, "Values", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractCollection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_([this, null, this.b$['java.util.TreeMap'].getFirstEntry$.apply(this.b$['java.util.TreeMap'], [])],$I$(1,1).c$$java_util_TreeMap_Entry);
});

Clazz.newMeth(C$, 'size$',  function () {
return this.b$['java.util.TreeMap'].size$.apply(this.b$['java.util.TreeMap'], []);
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
return this.b$['java.util.TreeMap'].containsValue$O.apply(this.b$['java.util.TreeMap'], [o]);
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
for (var e=this.b$['java.util.TreeMap'].getFirstEntry$.apply(this.b$['java.util.TreeMap'], []); e != null ; e=$I$(2).successor$java_util_TreeMap_Entry(e)) {
if ($I$(2,"valEquals$O$O",[e.getValue$(), o])) {
p$1.deleteEntry$java_util_TreeMap_Entry.apply(this.b$['java.util.TreeMap'], [e]);
return true;
}}
return false;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.b$['java.util.TreeMap'].clear$.apply(this.b$['java.util.TreeMap'], []);
});

Clazz.newMeth(C$, 'spliterator$',  function () {
return Clazz.new_($I$(3,1).c$$java_util_TreeMap$java_util_TreeMap_Entry$java_util_TreeMap_Entry$I$I$I,[this.b$['java.util.TreeMap'], null, null, 0, -1, 0]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap, "EntrySet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_([this, null, this.b$['java.util.TreeMap'].getFirstEntry$.apply(this.b$['java.util.TreeMap'], [])],$I$(4,1).c$$java_util_TreeMap_Entry);
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var entry=o;
var value=entry.getValue$();
var p=this.b$['java.util.TreeMap'].getEntry$O.apply(this.b$['java.util.TreeMap'], [entry.getKey$()]);
return p != null  && $I$(2,"valEquals$O$O",[p.getValue$(), value]) ;
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var entry=o;
var value=entry.getValue$();
var p=this.b$['java.util.TreeMap'].getEntry$O.apply(this.b$['java.util.TreeMap'], [entry.getKey$()]);
if (p != null  && $I$(2,"valEquals$O$O",[p.getValue$(), value]) ) {
p$1.deleteEntry$java_util_TreeMap_Entry.apply(this.b$['java.util.TreeMap'], [p]);
return true;
}return false;
});

Clazz.newMeth(C$, 'size$',  function () {
return this.b$['java.util.TreeMap'].size$.apply(this.b$['java.util.TreeMap'], []);
});

Clazz.newMeth(C$, 'clear$',  function () {
this.b$['java.util.TreeMap'].clear$.apply(this.b$['java.util.TreeMap'], []);
});

Clazz.newMeth(C$, 'spliterator$',  function () {
return Clazz.new_($I$(5,1).c$$java_util_TreeMap$java_util_TreeMap_Entry$java_util_TreeMap_Entry$I$I$I,[this.b$['java.util.TreeMap'], null, null, 0, -1, 0]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap, "KeySet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractSet', 'java.util.NavigableSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['m','java.util.NavigableMap']]]

Clazz.newMeth(C$, 'c$$java_util_NavigableMap',  function (map) {
Clazz.super_(C$, this);
this.m=map;
}, 1);

Clazz.newMeth(C$, 'iterator$',  function () {
if (Clazz.instanceOf(this.m, "java.util.TreeMap")) return (this.m).keyIterator$();
 else return (this.m).keyIterator$();
});

Clazz.newMeth(C$, 'descendingIterator$',  function () {
if (Clazz.instanceOf(this.m, "java.util.TreeMap")) return (this.m).descendingKeyIterator$();
 else return (this.m).descendingKeyIterator$();
});

Clazz.newMeth(C$, 'size$',  function () {
return this.m.size$();
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.m.isEmpty$();
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
return this.m.containsKey$O(o);
});

Clazz.newMeth(C$, 'clear$',  function () {
this.m.clear$();
});

Clazz.newMeth(C$, 'lower$O',  function (e) {
return this.m.lowerKey$O(e);
});

Clazz.newMeth(C$, 'floor$O',  function (e) {
return this.m.floorKey$O(e);
});

Clazz.newMeth(C$, 'ceiling$O',  function (e) {
return this.m.ceilingKey$O(e);
});

Clazz.newMeth(C$, 'higher$O',  function (e) {
return this.m.higherKey$O(e);
});

Clazz.newMeth(C$, 'first$',  function () {
return this.m.firstKey$();
});

Clazz.newMeth(C$, 'last$',  function () {
return this.m.lastKey$();
});

Clazz.newMeth(C$, 'comparator$',  function () {
return this.m.comparator$();
});

Clazz.newMeth(C$, 'pollFirst$',  function () {
var e=this.m.pollFirstEntry$();
return (e == null ) ? null : e.getKey$();
});

Clazz.newMeth(C$, 'pollLast$',  function () {
var e=this.m.pollLastEntry$();
return (e == null ) ? null : e.getKey$();
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
var oldSize=this.size$();
this.m.remove$O(o);
return this.size$() != oldSize;
});

Clazz.newMeth(C$, 'subSet$O$Z$O$Z',  function (fromElement, fromInclusive, toElement, toInclusive) {
return Clazz.new_(C$.c$$java_util_NavigableMap,[this.m.subMap$O$Z$O$Z(fromElement, fromInclusive, toElement, toInclusive)]);
});

Clazz.newMeth(C$, 'headSet$O$Z',  function (toElement, inclusive) {
return Clazz.new_(C$.c$$java_util_NavigableMap,[this.m.headMap$O$Z(toElement, inclusive)]);
});

Clazz.newMeth(C$, 'tailSet$O$Z',  function (fromElement, inclusive) {
return Clazz.new_(C$.c$$java_util_NavigableMap,[this.m.tailMap$O$Z(fromElement, inclusive)]);
});

Clazz.newMeth(C$, 'subSet$O$O',  function (fromElement, toElement) {
return this.subSet$O$Z$O$Z(fromElement, true, toElement, false);
});

Clazz.newMeth(C$, 'headSet$O',  function (toElement) {
return this.headSet$O$Z(toElement, false);
});

Clazz.newMeth(C$, 'tailSet$O',  function (fromElement) {
return this.tailSet$O$Z(fromElement, true);
});

Clazz.newMeth(C$, 'descendingSet$',  function () {
return Clazz.new_(C$.c$$java_util_NavigableMap,[this.m.descendingMap$()]);
});

Clazz.newMeth(C$, 'spliterator$',  function () {
return $I$(2).keySpliteratorFor$java_util_NavigableMap(this.m);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap, "PrivateEntryIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['expectedModCount'],'O',['next','java.util.TreeMap.Entry','+lastReturned']]]

Clazz.newMeth(C$, 'c$$java_util_TreeMap_Entry',  function (first) {
;C$.$init$.apply(this);
this.expectedModCount=this.b$['java.util.TreeMap'].modCount;
this.lastReturned=null;
this.next=first;
}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.next != null ;
});

Clazz.newMeth(C$, 'nextEntry$',  function () {
var e=this.next;
if (e == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
if (this.b$['java.util.TreeMap'].modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
this.next=$I$(2).successor$java_util_TreeMap_Entry(e);
this.lastReturned=e;
return e;
});

Clazz.newMeth(C$, 'prevEntry$',  function () {
var e=this.next;
if (e == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
if (this.b$['java.util.TreeMap'].modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
this.next=$I$(2).predecessor$java_util_TreeMap_Entry(e);
this.lastReturned=e;
return e;
});

Clazz.newMeth(C$, 'remove$',  function () {
if (this.lastReturned == null ) throw Clazz.new_(Clazz.load('IllegalStateException'));
if (this.b$['java.util.TreeMap'].modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
if (this.lastReturned.left != null  && this.lastReturned.right != null  ) this.next=this.lastReturned;
p$1.deleteEntry$java_util_TreeMap_Entry.apply(this.b$['java.util.TreeMap'], [this.lastReturned]);
this.expectedModCount=this.b$['java.util.TreeMap'].modCount;
this.lastReturned=null;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap, "EntryIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.TreeMap','.PrivateEntryIterator']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_TreeMap_Entry',  function (first) {
;C$.superclazz.c$$java_util_TreeMap_Entry.apply(this,[first]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'next$',  function () {
return this.nextEntry$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap, "ValueIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.TreeMap','.PrivateEntryIterator']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_TreeMap_Entry',  function (first) {
;C$.superclazz.c$$java_util_TreeMap_Entry.apply(this,[first]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'next$',  function () {
return this.nextEntry$().value;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap, "KeyIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.TreeMap','.PrivateEntryIterator']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_TreeMap_Entry',  function (first) {
;C$.superclazz.c$$java_util_TreeMap_Entry.apply(this,[first]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'next$',  function () {
return this.nextEntry$().key;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap, "DescendingKeyIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.TreeMap','.PrivateEntryIterator']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_TreeMap_Entry',  function (first) {
;C$.superclazz.c$$java_util_TreeMap_Entry.apply(this,[first]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'next$',  function () {
return this.prevEntry$().key;
});

Clazz.newMeth(C$, 'remove$',  function () {
if (this.lastReturned == null ) throw Clazz.new_(Clazz.load('IllegalStateException'));
if (this.b$['java.util.TreeMap'].modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
p$1.deleteEntry$java_util_TreeMap_Entry.apply(this.b$['java.util.TreeMap'], [this.lastReturned]);
this.lastReturned=null;
this.expectedModCount=this.b$['java.util.TreeMap'].modCount;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap, "NavigableSubMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractMap', ['java.util.NavigableMap', 'java.io.Serializable']);
C$.$classes$=[['EntrySetView',1024],['SubMapIterator',1024],['SubMapEntryIterator',16],['DescendingSubMapEntryIterator',16],['SubMapKeyIterator',16],['DescendingSubMapKeyIterator',16]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['fromStart','toEnd','loInclusive','hiInclusive'],'O',['m','java.util.TreeMap','lo','<K>','+hi','descendingMapView','java.util.NavigableMap','entrySetView','java.util.TreeMap.NavigableSubMap.EntrySetView','navigableKeySetView','java.util.TreeMap.KeySet']]]

Clazz.newMeth(C$, 'c$$java_util_TreeMap$Z$O$Z$Z$O$Z',  function (m, fromStart, lo, loInclusive, toEnd, hi, hiInclusive) {
Clazz.super_(C$, this);
if (!fromStart && !toEnd ) {
if (m.compare$O$O(lo, hi) > 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["fromKey > toKey"]);
} else {
if (!fromStart) m.compare$O$O(lo, lo);
if (!toEnd) m.compare$O$O(hi, hi);
}this.m=m;
this.fromStart=fromStart;
this.lo=lo;
this.loInclusive=loInclusive;
this.toEnd=toEnd;
this.hi=hi;
this.hiInclusive=hiInclusive;
}, 1);

Clazz.newMeth(C$, 'tooLow$O',  function (key) {
if (!this.fromStart) {
var c=this.m.compare$O$O(key, this.lo);
if (c < 0 || (c == 0 && !this.loInclusive ) ) return true;
}return false;
});

Clazz.newMeth(C$, 'tooHigh$O',  function (key) {
if (!this.toEnd) {
var c=this.m.compare$O$O(key, this.hi);
if (c > 0 || (c == 0 && !this.hiInclusive ) ) return true;
}return false;
});

Clazz.newMeth(C$, 'inRange$O',  function (key) {
return !this.tooLow$O(key) && !this.tooHigh$O(key) ;
});

Clazz.newMeth(C$, 'inClosedRange$O',  function (key) {
return (this.fromStart || this.m.compare$O$O(key, this.lo) >= 0 ) && (this.toEnd || this.m.compare$O$O(this.hi, key) >= 0 ) ;
});

Clazz.newMeth(C$, 'inRange$O$Z',  function (key, inclusive) {
return inclusive ? this.inRange$O(key) : this.inClosedRange$O(key);
});

Clazz.newMeth(C$, 'absLowest$',  function () {
var e=(this.fromStart ? this.m.getFirstEntry$() : (this.loInclusive ? this.m.getCeilingEntry$O(this.lo) : this.m.getHigherEntry$O(this.lo)));
return (e == null  || this.tooHigh$O(e.key) ) ? null : e;
});

Clazz.newMeth(C$, 'absHighest$',  function () {
var e=(this.toEnd ? this.m.getLastEntry$() : (this.hiInclusive ? this.m.getFloorEntry$O(this.hi) : this.m.getLowerEntry$O(this.hi)));
return (e == null  || this.tooLow$O(e.key) ) ? null : e;
});

Clazz.newMeth(C$, 'absCeiling$O',  function (key) {
if (this.tooLow$O(key)) return this.absLowest$();
var e=this.m.getCeilingEntry$O(key);
return (e == null  || this.tooHigh$O(e.key) ) ? null : e;
});

Clazz.newMeth(C$, 'absHigher$O',  function (key) {
if (this.tooLow$O(key)) return this.absLowest$();
var e=this.m.getHigherEntry$O(key);
return (e == null  || this.tooHigh$O(e.key) ) ? null : e;
});

Clazz.newMeth(C$, 'absFloor$O',  function (key) {
if (this.tooHigh$O(key)) return this.absHighest$();
var e=this.m.getFloorEntry$O(key);
return (e == null  || this.tooLow$O(e.key) ) ? null : e;
});

Clazz.newMeth(C$, 'absLower$O',  function (key) {
if (this.tooHigh$O(key)) return this.absHighest$();
var e=this.m.getLowerEntry$O(key);
return (e == null  || this.tooLow$O(e.key) ) ? null : e;
});

Clazz.newMeth(C$, 'absHighFence$',  function () {
return (this.toEnd ? null : (this.hiInclusive ? this.m.getHigherEntry$O(this.hi) : this.m.getCeilingEntry$O(this.hi)));
});

Clazz.newMeth(C$, 'absLowFence$',  function () {
return (this.fromStart ? null : (this.loInclusive ? this.m.getLowerEntry$O(this.lo) : this.m.getFloorEntry$O(this.lo)));
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return (this.fromStart && this.toEnd ) ? this.m.isEmpty$() : this.entrySet$().isEmpty$();
});

Clazz.newMeth(C$, 'size$',  function () {
return (this.fromStart && this.toEnd ) ? this.m.size$() : this.entrySet$().size$();
});

Clazz.newMeth(C$, 'containsKey$O',  function (key) {
return this.inRange$O(key) && this.m.containsKey$O(key) ;
});

Clazz.newMeth(C$, 'put$O$O',  function (key, value) {
if (!this.inRange$O(key)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["key out of range"]);
return this.m.put$O$O(key, value);
});

Clazz.newMeth(C$, 'get$O',  function (key) {
return !this.inRange$O(key) ? null : this.m.get$O(key);
});

Clazz.newMeth(C$, 'remove$O',  function (key) {
return !this.inRange$O(key) ? null : this.m.remove$O(key);
});

Clazz.newMeth(C$, 'ceilingEntry$O',  function (key) {
return $I$(2,"exportEntry$java_util_TreeMap_Entry",[this.subCeiling$O(key)]);
});

Clazz.newMeth(C$, 'ceilingKey$O',  function (key) {
return $I$(2,"keyOrNull$java_util_TreeMap_Entry",[this.subCeiling$O(key)]);
});

Clazz.newMeth(C$, 'higherEntry$O',  function (key) {
return $I$(2,"exportEntry$java_util_TreeMap_Entry",[this.subHigher$O(key)]);
});

Clazz.newMeth(C$, 'higherKey$O',  function (key) {
return $I$(2,"keyOrNull$java_util_TreeMap_Entry",[this.subHigher$O(key)]);
});

Clazz.newMeth(C$, 'floorEntry$O',  function (key) {
return $I$(2,"exportEntry$java_util_TreeMap_Entry",[this.subFloor$O(key)]);
});

Clazz.newMeth(C$, 'floorKey$O',  function (key) {
return $I$(2,"keyOrNull$java_util_TreeMap_Entry",[this.subFloor$O(key)]);
});

Clazz.newMeth(C$, 'lowerEntry$O',  function (key) {
return $I$(2,"exportEntry$java_util_TreeMap_Entry",[this.subLower$O(key)]);
});

Clazz.newMeth(C$, 'lowerKey$O',  function (key) {
return $I$(2,"keyOrNull$java_util_TreeMap_Entry",[this.subLower$O(key)]);
});

Clazz.newMeth(C$, 'firstKey$',  function () {
return $I$(2,"key$java_util_TreeMap_Entry",[this.subLowest$()]);
});

Clazz.newMeth(C$, 'lastKey$',  function () {
return $I$(2,"key$java_util_TreeMap_Entry",[this.subHighest$()]);
});

Clazz.newMeth(C$, 'firstEntry$',  function () {
return $I$(2,"exportEntry$java_util_TreeMap_Entry",[this.subLowest$()]);
});

Clazz.newMeth(C$, 'lastEntry$',  function () {
return $I$(2,"exportEntry$java_util_TreeMap_Entry",[this.subHighest$()]);
});

Clazz.newMeth(C$, 'pollFirstEntry$',  function () {
var e=this.subLowest$();
var result=$I$(2).exportEntry$java_util_TreeMap_Entry(e);
if (e != null ) p$1.deleteEntry$java_util_TreeMap_Entry.apply(this.m, [e]);
return result;
});

Clazz.newMeth(C$, 'pollLastEntry$',  function () {
var e=this.subHighest$();
var result=$I$(2).exportEntry$java_util_TreeMap_Entry(e);
if (e != null ) p$1.deleteEntry$java_util_TreeMap_Entry.apply(this.m, [e]);
return result;
});

Clazz.newMeth(C$, 'navigableKeySet$',  function () {
var nksv=this.navigableKeySetView;
return (nksv != null ) ? nksv : (this.navigableKeySetView=Clazz.new_($I$(6,1).c$$java_util_NavigableMap,[this]));
});

Clazz.newMeth(C$, 'keySet$',  function () {
return this.navigableKeySet$();
});

Clazz.newMeth(C$, 'descendingKeySet$',  function () {
return this.descendingMap$().navigableKeySet$();
});

Clazz.newMeth(C$, 'subMap$O$O',  function (fromKey, toKey) {
return this.subMap$O$Z$O$Z(fromKey, true, toKey, false);
});

Clazz.newMeth(C$, 'headMap$O',  function (toKey) {
return this.headMap$O$Z(toKey, false);
});

Clazz.newMeth(C$, 'tailMap$O',  function (fromKey) {
return this.tailMap$O$Z(fromKey, true);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap.NavigableSubMap, "EntrySetView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.size=-1;
},1);

C$.$fields$=[['I',['size','sizeModCount']]]

Clazz.newMeth(C$, 'size$',  function () {
if (this.b$['java.util.TreeMap.NavigableSubMap'].fromStart && this.b$['java.util.TreeMap.NavigableSubMap'].toEnd ) return this.b$['java.util.TreeMap.NavigableSubMap'].m.size$();
if (this.size == -1 || this.sizeModCount != this.b$['java.util.TreeMap.NavigableSubMap'].m.modCount ) {
this.sizeModCount=this.b$['java.util.TreeMap.NavigableSubMap'].m.modCount;
this.size=0;
var i=this.iterator$();
while (i.hasNext$()){
++this.size;
i.next$();
}
}return this.size;
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
var n=this.b$['java.util.TreeMap.NavigableSubMap'].absLowest$.apply(this.b$['java.util.TreeMap.NavigableSubMap'], []);
return n == null  || this.b$['java.util.TreeMap.NavigableSubMap'].tooHigh$O.apply(this.b$['java.util.TreeMap.NavigableSubMap'], [n.key]) ;
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var entry=o;
var key=entry.getKey$();
if (!this.b$['java.util.TreeMap.NavigableSubMap'].inRange$O.apply(this.b$['java.util.TreeMap.NavigableSubMap'], [key])) return false;
var node=this.b$['java.util.TreeMap.NavigableSubMap'].m.getEntry$O(key);
return node != null  && $I$(2,"valEquals$O$O",[node.getValue$(), entry.getValue$()]) ;
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var entry=o;
var key=entry.getKey$();
if (!this.b$['java.util.TreeMap.NavigableSubMap'].inRange$O.apply(this.b$['java.util.TreeMap.NavigableSubMap'], [key])) return false;
var node=this.b$['java.util.TreeMap.NavigableSubMap'].m.getEntry$O(key);
if (node != null  && $I$(2,"valEquals$O$O",[node.getValue$(), entry.getValue$()]) ) {
p$1.deleteEntry$java_util_TreeMap_Entry.apply(this.b$['java.util.TreeMap.NavigableSubMap'].m, [node]);
return true;
}return false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap.NavigableSubMap, "SubMapIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['expectedModCount'],'O',['lastReturned','java.util.TreeMap.Entry','+next','fenceKey','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$java_util_TreeMap_Entry$java_util_TreeMap_Entry',  function (first, fence) {
;C$.$init$.apply(this);
this.expectedModCount=this.b$['java.util.TreeMap.NavigableSubMap'].m.modCount;
this.lastReturned=null;
this.next=first;
this.fenceKey=fence == null  ? $I$(2).UNBOUNDED : fence.key;
}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.next != null  && this.next.key !== this.fenceKey  ;
});

Clazz.newMeth(C$, 'nextEntry$',  function () {
var e=this.next;
if (e == null  || e.key === this.fenceKey  ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
if (this.b$['java.util.TreeMap.NavigableSubMap'].m.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
this.next=$I$(2).successor$java_util_TreeMap_Entry(e);
this.lastReturned=e;
return e;
});

Clazz.newMeth(C$, 'prevEntry$',  function () {
var e=this.next;
if (e == null  || e.key === this.fenceKey  ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
if (this.b$['java.util.TreeMap.NavigableSubMap'].m.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
this.next=$I$(2).predecessor$java_util_TreeMap_Entry(e);
this.lastReturned=e;
return e;
});

Clazz.newMeth(C$, 'removeAscending$',  function () {
if (this.lastReturned == null ) throw Clazz.new_(Clazz.load('IllegalStateException'));
if (this.b$['java.util.TreeMap.NavigableSubMap'].m.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
if (this.lastReturned.left != null  && this.lastReturned.right != null  ) this.next=this.lastReturned;
p$1.deleteEntry$java_util_TreeMap_Entry.apply(this.b$['java.util.TreeMap.NavigableSubMap'].m, [this.lastReturned]);
this.lastReturned=null;
this.expectedModCount=this.b$['java.util.TreeMap.NavigableSubMap'].m.modCount;
});

Clazz.newMeth(C$, 'removeDescending$',  function () {
if (this.lastReturned == null ) throw Clazz.new_(Clazz.load('IllegalStateException'));
if (this.b$['java.util.TreeMap.NavigableSubMap'].m.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
p$1.deleteEntry$java_util_TreeMap_Entry.apply(this.b$['java.util.TreeMap.NavigableSubMap'].m, [this.lastReturned]);
this.lastReturned=null;
this.expectedModCount=this.b$['java.util.TreeMap.NavigableSubMap'].m.modCount;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap.NavigableSubMap, "SubMapEntryIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.TreeMap','.NavigableSubMap','.SubMapIterator']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_TreeMap_Entry$java_util_TreeMap_Entry',  function (first, fence) {
;C$.superclazz.c$$java_util_TreeMap_Entry$java_util_TreeMap_Entry.apply(this,[first, fence]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'next$',  function () {
return this.nextEntry$();
});

Clazz.newMeth(C$, 'remove$',  function () {
this.removeAscending$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap.NavigableSubMap, "DescendingSubMapEntryIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.TreeMap','.NavigableSubMap','.SubMapIterator']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_TreeMap_Entry$java_util_TreeMap_Entry',  function (last, fence) {
;C$.superclazz.c$$java_util_TreeMap_Entry$java_util_TreeMap_Entry.apply(this,[last, fence]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'next$',  function () {
return this.prevEntry$();
});

Clazz.newMeth(C$, 'remove$',  function () {
this.removeDescending$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap.NavigableSubMap, "SubMapKeyIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.TreeMap','.NavigableSubMap','.SubMapIterator'], 'java.util.Spliterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_TreeMap_Entry$java_util_TreeMap_Entry',  function (first, fence) {
;C$.superclazz.c$$java_util_TreeMap_Entry$java_util_TreeMap_Entry.apply(this,[first, fence]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'next$',  function () {
return this.nextEntry$().key;
});

Clazz.newMeth(C$, 'remove$',  function () {
this.removeAscending$();
});

Clazz.newMeth(C$, 'trySplit$',  function () {
return null;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
while (this.hasNext$())action.accept$O(this.next$());

});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer',  function (action) {
if (this.hasNext$()) {
action.accept$O(this.next$());
return true;
}return false;
});

Clazz.newMeth(C$, 'estimateSize$',  function () {
return [16777215,549755813887,1];
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return 21;
});

Clazz.newMeth(C$, 'getComparator$',  function () {
return this.b$['java.util.TreeMap.NavigableSubMap'].comparator$.apply(this.b$['java.util.TreeMap.NavigableSubMap'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap.NavigableSubMap, "DescendingSubMapKeyIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.TreeMap','.NavigableSubMap','.SubMapIterator'], 'java.util.Spliterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_TreeMap_Entry$java_util_TreeMap_Entry',  function (last, fence) {
;C$.superclazz.c$$java_util_TreeMap_Entry$java_util_TreeMap_Entry.apply(this,[last, fence]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'next$',  function () {
return this.prevEntry$().key;
});

Clazz.newMeth(C$, 'remove$',  function () {
this.removeDescending$();
});

Clazz.newMeth(C$, 'trySplit$',  function () {
return null;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
while (this.hasNext$())action.accept$O(this.next$());

});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer',  function (action) {
if (this.hasNext$()) {
action.accept$O(this.next$());
return true;
}return false;
});

Clazz.newMeth(C$, 'estimateSize$',  function () {
return [16777215,549755813887,1];
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return 17;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap, "AscendingSubMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.TreeMap','.NavigableSubMap']);
C$.$classes$=[['AscendingEntrySetView',16]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_TreeMap$Z$O$Z$Z$O$Z',  function (m, fromStart, lo, loInclusive, toEnd, hi, hiInclusive) {
;C$.superclazz.c$$java_util_TreeMap$Z$O$Z$Z$O$Z.apply(this,[m, fromStart, lo, loInclusive, toEnd, hi, hiInclusive]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'comparator$',  function () {
return this.m.comparator$();
});

Clazz.newMeth(C$, 'subMap$O$Z$O$Z',  function (fromKey, fromInclusive, toKey, toInclusive) {
if (!this.inRange$O$Z(fromKey, fromInclusive)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["fromKey out of range"]);
if (!this.inRange$O$Z(toKey, toInclusive)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["toKey out of range"]);
return Clazz.new_(C$.c$$java_util_TreeMap$Z$O$Z$Z$O$Z,[this.m, false, fromKey, fromInclusive, false, toKey, toInclusive]);
});

Clazz.newMeth(C$, 'headMap$O$Z',  function (toKey, inclusive) {
if (!this.inRange$O$Z(toKey, inclusive)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["toKey out of range"]);
return Clazz.new_(C$.c$$java_util_TreeMap$Z$O$Z$Z$O$Z,[this.m, this.fromStart, this.lo, this.loInclusive, false, toKey, inclusive]);
});

Clazz.newMeth(C$, 'tailMap$O$Z',  function (fromKey, inclusive) {
if (!this.inRange$O$Z(fromKey, inclusive)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["fromKey out of range"]);
return Clazz.new_(C$.c$$java_util_TreeMap$Z$O$Z$Z$O$Z,[this.m, false, fromKey, inclusive, this.toEnd, this.hi, this.hiInclusive]);
});

Clazz.newMeth(C$, 'descendingMap$',  function () {
var mv=this.descendingMapView;
return (mv != null ) ? mv : (this.descendingMapView=Clazz.new_($I$(8,1).c$$java_util_TreeMap$Z$O$Z$Z$O$Z,[this.m, this.fromStart, this.lo, this.loInclusive, this.toEnd, this.hi, this.hiInclusive]));
});

Clazz.newMeth(C$, 'keyIterator$',  function () {
return Clazz.new_([this, null, this.absLowest$(), this.absHighFence$()],$I$(9,1).c$$java_util_TreeMap_Entry$java_util_TreeMap_Entry);
});

Clazz.newMeth(C$, 'keySpliterator$',  function () {
return Clazz.new_([this, null, this.absLowest$(), this.absHighFence$()],$I$(9,1).c$$java_util_TreeMap_Entry$java_util_TreeMap_Entry);
});

Clazz.newMeth(C$, 'descendingKeyIterator$',  function () {
return Clazz.new_([this, null, this.absHighest$(), this.absLowFence$()],$I$(10,1).c$$java_util_TreeMap_Entry$java_util_TreeMap_Entry);
});

Clazz.newMeth(C$, 'entrySet$',  function () {
var es=this.entrySetView;
return (es != null ) ? es : (this.entrySetView=Clazz.new_($I$(11,1),[this, null]));
});

Clazz.newMeth(C$, 'subLowest$',  function () {
return this.absLowest$();
});

Clazz.newMeth(C$, 'subHighest$',  function () {
return this.absHighest$();
});

Clazz.newMeth(C$, 'subCeiling$O',  function (key) {
return this.absCeiling$O(key);
});

Clazz.newMeth(C$, 'subHigher$O',  function (key) {
return this.absHigher$O(key);
});

Clazz.newMeth(C$, 'subFloor$O',  function (key) {
return this.absFloor$O(key);
});

Clazz.newMeth(C$, 'subLower$O',  function (key) {
return this.absLower$O(key);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap.AscendingSubMap, "AscendingEntrySetView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.TreeMap','.NavigableSubMap','.EntrySetView']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_([this, null, this.b$['java.util.TreeMap.NavigableSubMap'].absLowest$.apply(this.b$['java.util.TreeMap.NavigableSubMap'], []), this.b$['java.util.TreeMap.NavigableSubMap'].absHighFence$.apply(this.b$['java.util.TreeMap.NavigableSubMap'], [])],$I$(7,1).c$$java_util_TreeMap_Entry$java_util_TreeMap_Entry);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap, "DescendingSubMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.TreeMap','.NavigableSubMap']);
C$.$classes$=[['DescendingEntrySetView',16]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.reverseComparator=$I$(13).reverseOrder$java_util_Comparator(this.m.comparator);
},1);

C$.$fields$=[['O',['reverseComparator','java.util.Comparator']]]

Clazz.newMeth(C$, 'c$$java_util_TreeMap$Z$O$Z$Z$O$Z',  function (m, fromStart, lo, loInclusive, toEnd, hi, hiInclusive) {
;C$.superclazz.c$$java_util_TreeMap$Z$O$Z$Z$O$Z.apply(this,[m, fromStart, lo, loInclusive, toEnd, hi, hiInclusive]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'comparator$',  function () {
return this.reverseComparator;
});

Clazz.newMeth(C$, 'subMap$O$Z$O$Z',  function (fromKey, fromInclusive, toKey, toInclusive) {
if (!this.inRange$O$Z(fromKey, fromInclusive)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["fromKey out of range"]);
if (!this.inRange$O$Z(toKey, toInclusive)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["toKey out of range"]);
return Clazz.new_(C$.c$$java_util_TreeMap$Z$O$Z$Z$O$Z,[this.m, false, toKey, toInclusive, false, fromKey, fromInclusive]);
});

Clazz.newMeth(C$, 'headMap$O$Z',  function (toKey, inclusive) {
if (!this.inRange$O$Z(toKey, inclusive)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["toKey out of range"]);
return Clazz.new_(C$.c$$java_util_TreeMap$Z$O$Z$Z$O$Z,[this.m, false, toKey, inclusive, this.toEnd, this.hi, this.hiInclusive]);
});

Clazz.newMeth(C$, 'tailMap$O$Z',  function (fromKey, inclusive) {
if (!this.inRange$O$Z(fromKey, inclusive)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["fromKey out of range"]);
return Clazz.new_(C$.c$$java_util_TreeMap$Z$O$Z$Z$O$Z,[this.m, this.fromStart, this.lo, this.loInclusive, false, fromKey, inclusive]);
});

Clazz.newMeth(C$, 'descendingMap$',  function () {
var mv=this.descendingMapView;
return (mv != null ) ? mv : (this.descendingMapView=Clazz.new_($I$(14,1).c$$java_util_TreeMap$Z$O$Z$Z$O$Z,[this.m, this.fromStart, this.lo, this.loInclusive, this.toEnd, this.hi, this.hiInclusive]));
});

Clazz.newMeth(C$, 'keyIterator$',  function () {
return Clazz.new_([this, null, this.absHighest$(), this.absLowFence$()],$I$(10,1).c$$java_util_TreeMap_Entry$java_util_TreeMap_Entry);
});

Clazz.newMeth(C$, 'keySpliterator$',  function () {
return Clazz.new_([this, null, this.absHighest$(), this.absLowFence$()],$I$(10,1).c$$java_util_TreeMap_Entry$java_util_TreeMap_Entry);
});

Clazz.newMeth(C$, 'descendingKeyIterator$',  function () {
return Clazz.new_([this, null, this.absLowest$(), this.absHighFence$()],$I$(9,1).c$$java_util_TreeMap_Entry$java_util_TreeMap_Entry);
});

Clazz.newMeth(C$, 'entrySet$',  function () {
var es=this.entrySetView;
return (es != null ) ? es : (this.entrySetView=Clazz.new_($I$(15,1),[this, null]));
});

Clazz.newMeth(C$, 'subLowest$',  function () {
return this.absHighest$();
});

Clazz.newMeth(C$, 'subHighest$',  function () {
return this.absLowest$();
});

Clazz.newMeth(C$, 'subCeiling$O',  function (key) {
return this.absFloor$O(key);
});

Clazz.newMeth(C$, 'subHigher$O',  function (key) {
return this.absLower$O(key);
});

Clazz.newMeth(C$, 'subFloor$O',  function (key) {
return this.absCeiling$O(key);
});

Clazz.newMeth(C$, 'subLower$O',  function (key) {
return this.absHigher$O(key);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap.DescendingSubMap, "DescendingEntrySetView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.TreeMap','.NavigableSubMap','.EntrySetView']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_([this, null, this.b$['java.util.TreeMap.NavigableSubMap'].absHighest$.apply(this.b$['java.util.TreeMap.NavigableSubMap'], []), this.b$['java.util.TreeMap.NavigableSubMap'].absLowFence$.apply(this.b$['java.util.TreeMap.NavigableSubMap'], [])],$I$(12,1).c$$java_util_TreeMap_Entry$java_util_TreeMap_Entry);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap, "SubMap", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractMap', ['java.util.SortedMap', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fromStart=false;
this.toEnd=false;
},1);

C$.$fields$=[['Z',['fromStart','toEnd'],'O',['fromKey','<K>','+toKey']]]

Clazz.newMeth(C$, 'readResolve',  function () {
return Clazz.new_($I$(14,1).c$$java_util_TreeMap$Z$O$Z$Z$O$Z,[this.b$['java.util.TreeMap'], this.fromStart, this.fromKey, true, this.toEnd, this.toKey, false]);
}, p$1);

Clazz.newMeth(C$, 'entrySet$',  function () {
throw Clazz.new_($I$(16,1));
});

Clazz.newMeth(C$, 'lastKey$',  function () {
throw Clazz.new_($I$(16,1));
});

Clazz.newMeth(C$, 'firstKey$',  function () {
throw Clazz.new_($I$(16,1));
});

Clazz.newMeth(C$, 'subMap$O$O',  function (fromKey, toKey) {
throw Clazz.new_($I$(16,1));
});

Clazz.newMeth(C$, 'headMap$O',  function (toKey) {
throw Clazz.new_($I$(16,1));
});

Clazz.newMeth(C$, 'tailMap$O',  function (fromKey) {
throw Clazz.new_($I$(16,1));
});

Clazz.newMeth(C$, 'comparator$',  function () {
throw Clazz.new_($I$(16,1));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap, "Entry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['java.util.Map','java.util.Map.Entry']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.color=true;
},1);

C$.$fields$=[['Z',['color'],'O',['key','<K>','value','<V>','left','java.util.TreeMap.Entry','+right','+parent']]]

Clazz.newMeth(C$, 'c$$O$O$java_util_TreeMap_Entry',  function (key, value, parent) {
;C$.$init$.apply(this);
this.key=key;
this.value=value;
this.parent=parent;
}, 1);

Clazz.newMeth(C$, 'getKey$',  function () {
return this.key;
});

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'setValue$O',  function (value) {
var oldValue=this.value;
this.value=value;
return oldValue;
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var e=o;
return $I$(2,"valEquals$O$O",[this.key, e.getKey$()]) && $I$(2,"valEquals$O$O",[this.value, e.getValue$()]) ;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var keyHash=(this.key == null  ? 0 : this.key.hashCode$());
var valueHash=(this.value == null  ? 0 : this.value.hashCode$());
return keyHash ^ valueHash;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.key + "=" + this.value ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap, "TreeMapSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['side','est','expectedModCount'],'O',['tree','java.util.TreeMap','current','java.util.TreeMap.Entry','+fence']]]

Clazz.newMeth(C$, 'c$$java_util_TreeMap$java_util_TreeMap_Entry$java_util_TreeMap_Entry$I$I$I',  function (tree, origin, fence, side, est, expectedModCount) {
;C$.$init$.apply(this);
this.tree=tree;
this.current=origin;
this.fence=fence;
this.side=side;
this.est=est;
this.expectedModCount=expectedModCount;
}, 1);

Clazz.newMeth(C$, 'getEstimate$',  function () {
var s;
var t;
if ((s=this.est) < 0) {
if ((t=this.tree) != null ) {
this.current=(s == -1) ? t.getFirstEntry$() : t.getLastEntry$();
s=this.est=t.size;
this.expectedModCount=t.modCount;
} else s=this.est=0;
}return s;
});

Clazz.newMeth(C$, 'estimateSize$',  function () {
return this.getEstimate$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap, "KeySpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.TreeMap','.TreeMapSpliterator'], 'java.util.Spliterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_TreeMap$java_util_TreeMap_Entry$java_util_TreeMap_Entry$I$I$I',  function (tree, origin, fence, side, est, expectedModCount) {
;C$.superclazz.c$$java_util_TreeMap$java_util_TreeMap_Entry$java_util_TreeMap_Entry$I$I$I.apply(this,[tree, origin, fence, side, est, expectedModCount]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'trySplit$',  function () {
if (this.est < 0) this.getEstimate$();
var d=this.side;
var e=this.current;
var f=this.fence;
var s=((e == null  || e === f  ) ? null : (d == 0) ? this.tree.root : (d > 0) ? e.right : (d < 0 && f != null  ) ? f.left : null);
if (s != null  && s !== e   && s !== f   && this.tree.compare$O$O(e.key, s.key) < 0 ) {
this.side=1;
return Clazz.new_(C$.c$$java_util_TreeMap$java_util_TreeMap_Entry$java_util_TreeMap_Entry$I$I$I,[this.tree, e, this.current=s, -1, this.est>>>=1, this.expectedModCount]);
}return null;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.est < 0) this.getEstimate$();
var f=this.fence;
var e;
var p;
var pl;
if ((e=this.current) != null  && e !== f  ) {
this.current=f;
do {
action.accept$O(e.key);
if ((p=e.right) != null ) {
while ((pl=p.left) != null )p=pl;

} else {
while ((p=e.parent) != null  && e === p.right  )e=p;

}} while ((e=p) != null  && e !== f  );
if (this.tree.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer',  function (action) {
var e;
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.est < 0) this.getEstimate$();
if ((e=this.current) == null  || e === this.fence  ) return false;
this.current=$I$(2).successor$java_util_TreeMap_Entry(e);
action.accept$O(e.key);
if (this.tree.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
return true;
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return (this.side == 0 ? 64 : 0) | 1 | 4 | 16 ;
});

Clazz.newMeth(C$, 'getComparator$',  function () {
return this.tree.comparator;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap, "DescendingKeySpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.TreeMap','.TreeMapSpliterator'], 'java.util.Spliterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_TreeMap$java_util_TreeMap_Entry$java_util_TreeMap_Entry$I$I$I',  function (tree, origin, fence, side, est, expectedModCount) {
;C$.superclazz.c$$java_util_TreeMap$java_util_TreeMap_Entry$java_util_TreeMap_Entry$I$I$I.apply(this,[tree, origin, fence, side, est, expectedModCount]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'trySplit$',  function () {
if (this.est < 0) this.getEstimate$();
var d=this.side;
var e=this.current;
var f=this.fence;
var s=((e == null  || e === f  ) ? null : (d == 0) ? this.tree.root : (d < 0) ? e.left : (d > 0 && f != null  ) ? f.right : null);
if (s != null  && s !== e   && s !== f   && this.tree.compare$O$O(e.key, s.key) > 0 ) {
this.side=1;
return Clazz.new_(C$.c$$java_util_TreeMap$java_util_TreeMap_Entry$java_util_TreeMap_Entry$I$I$I,[this.tree, e, this.current=s, -1, this.est>>>=1, this.expectedModCount]);
}return null;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.est < 0) this.getEstimate$();
var f=this.fence;
var e;
var p;
var pr;
if ((e=this.current) != null  && e !== f  ) {
this.current=f;
do {
action.accept$O(e.key);
if ((p=e.left) != null ) {
while ((pr=p.right) != null )p=pr;

} else {
while ((p=e.parent) != null  && e === p.left  )e=p;

}} while ((e=p) != null  && e !== f  );
if (this.tree.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer',  function (action) {
var e;
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.est < 0) this.getEstimate$();
if ((e=this.current) == null  || e === this.fence  ) return false;
this.current=$I$(2).predecessor$java_util_TreeMap_Entry(e);
action.accept$O(e.key);
if (this.tree.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
return true;
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return (this.side == 0 ? 64 : 0) | 1 | 16 ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap, "ValueSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.TreeMap','.TreeMapSpliterator'], 'java.util.Spliterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_TreeMap$java_util_TreeMap_Entry$java_util_TreeMap_Entry$I$I$I',  function (tree, origin, fence, side, est, expectedModCount) {
;C$.superclazz.c$$java_util_TreeMap$java_util_TreeMap_Entry$java_util_TreeMap_Entry$I$I$I.apply(this,[tree, origin, fence, side, est, expectedModCount]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'trySplit$',  function () {
if (this.est < 0) this.getEstimate$();
var d=this.side;
var e=this.current;
var f=this.fence;
var s=((e == null  || e === f  ) ? null : (d == 0) ? this.tree.root : (d > 0) ? e.right : (d < 0 && f != null  ) ? f.left : null);
if (s != null  && s !== e   && s !== f   && this.tree.compare$O$O(e.key, s.key) < 0 ) {
this.side=1;
return Clazz.new_(C$.c$$java_util_TreeMap$java_util_TreeMap_Entry$java_util_TreeMap_Entry$I$I$I,[this.tree, e, this.current=s, -1, this.est>>>=1, this.expectedModCount]);
}return null;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.est < 0) this.getEstimate$();
var f=this.fence;
var e;
var p;
var pl;
if ((e=this.current) != null  && e !== f  ) {
this.current=f;
do {
action.accept$O(e.value);
if ((p=e.right) != null ) {
while ((pl=p.left) != null )p=pl;

} else {
while ((p=e.parent) != null  && e === p.right  )e=p;

}} while ((e=p) != null  && e !== f  );
if (this.tree.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer',  function (action) {
var e;
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.est < 0) this.getEstimate$();
if ((e=this.current) == null  || e === this.fence  ) return false;
this.current=$I$(2).successor$java_util_TreeMap_Entry(e);
action.accept$O(e.value);
if (this.tree.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
return true;
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return (this.side == 0 ? 64 : 0) | 16;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TreeMap, "EntrySpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.TreeMap','.TreeMapSpliterator'], 'java.util.Spliterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_TreeMap$java_util_TreeMap_Entry$java_util_TreeMap_Entry$I$I$I',  function (tree, origin, fence, side, est, expectedModCount) {
;C$.superclazz.c$$java_util_TreeMap$java_util_TreeMap_Entry$java_util_TreeMap_Entry$I$I$I.apply(this,[tree, origin, fence, side, est, expectedModCount]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'trySplit$',  function () {
if (this.est < 0) this.getEstimate$();
var d=this.side;
var e=this.current;
var f=this.fence;
var s=((e == null  || e === f  ) ? null : (d == 0) ? this.tree.root : (d > 0) ? e.right : (d < 0 && f != null  ) ? f.left : null);
if (s != null  && s !== e   && s !== f   && this.tree.compare$O$O(e.key, s.key) < 0 ) {
this.side=1;
return Clazz.new_(C$.c$$java_util_TreeMap$java_util_TreeMap_Entry$java_util_TreeMap_Entry$I$I$I,[this.tree, e, this.current=s, -1, this.est>>>=1, this.expectedModCount]);
}return null;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.est < 0) this.getEstimate$();
var f=this.fence;
var e;
var p;
var pl;
if ((e=this.current) != null  && e !== f  ) {
this.current=f;
do {
action.accept$O(e);
if ((p=e.right) != null ) {
while ((pl=p.left) != null )p=pl;

} else {
while ((p=e.parent) != null  && e === p.right  )e=p;

}} while ((e=p) != null  && e !== f  );
if (this.tree.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer',  function (action) {
var e;
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.est < 0) this.getEstimate$();
if ((e=this.current) == null  || e === this.fence  ) return false;
this.current=$I$(2).successor$java_util_TreeMap_Entry(e);
action.accept$O(e);
if (this.tree.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
return true;
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return (this.side == 0 ? 64 : 0) | 1 | 4 | 16 ;
});

Clazz.newMeth(C$, 'getComparator$',  function () {
if (this.tree.comparator != null ) {
return $I$(17).comparingByKey$java_util_Comparator(this.tree.comparator);
} else {
return ((P$.TreeMap$EntrySpliterator$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "TreeMap$EntrySpliterator$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.io.Serializable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['compare$java_util_Map_Entry$java_util_Map_Entry','compare$O$O'],  function (e1, e2) {
var k1=e1.getKey$.apply(e1, []);
return k1.compareTo$O.apply(k1, [e2.getKey$.apply(e2, [])]);
});
})()
), Clazz.new_(P$.TreeMap$EntrySpliterator$lambda1.$init$,[this, null]));
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:35 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
