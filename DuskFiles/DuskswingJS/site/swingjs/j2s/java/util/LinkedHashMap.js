(function(){var P$=java.util,p$1={},I$=[[0,['java.util.LinkedHashMap','.LinkedKeyIterator'],'java.util.Map','java.util.HashMap','java.util.Spliterators',['java.util.LinkedHashMap','.LinkedValueIterator'],['java.util.LinkedHashMap','.LinkedEntryIterator'],['java.util.LinkedHashMap','.Entry'],['java.util.HashMap','.TreeNode'],['java.util.LinkedHashMap','.LinkedKeySet'],['java.util.LinkedHashMap','.LinkedValues'],['java.util.LinkedHashMap','.LinkedEntrySet']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LinkedHashMap", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.HashMap', 'java.util.Map');
C$.$classes$=[['Entry',8],['LinkedKeySet',16],['LinkedValues',16],['LinkedEntrySet',16],['LinkedHashIterator',1024],['LinkedKeyIterator',16],['LinkedValueIterator',16],['LinkedEntryIterator',16]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['accessOrder'],'O',['head','java.util.LinkedHashMap.Entry','+tail']]]

Clazz.newMeth(C$, 'linkNodeLast$java_util_LinkedHashMap_Entry',  function (p) {
var last=this.tail;
this.tail=p;
if (last == null ) this.head=p;
 else {
p.before=last;
last.after=p;
}}, p$1);

Clazz.newMeth(C$, 'transferLinks$java_util_LinkedHashMap_Entry$java_util_LinkedHashMap_Entry',  function (src, dst) {
var b=dst.before=src.before;
var a=dst.after=src.after;
if (b == null ) this.head=dst;
 else b.after=dst;
if (a == null ) this.tail=dst;
 else a.before=dst;
}, p$1);

Clazz.newMeth(C$, 'reinitialize$',  function () {
C$.superclazz.prototype.reinitialize$.apply(this, []);
this.head=this.tail=null;
});

Clazz.newMeth(C$, 'newNode$I$O$O$java_util_HashMap_Node',  function (hash, key, value, e) {
var p=Clazz.new_($I$(7,1).c$$I$O$O$java_util_HashMap_Node,[hash, key, value, e]);
p$1.linkNodeLast$java_util_LinkedHashMap_Entry.apply(this, [p]);
return p;
});

Clazz.newMeth(C$, 'replacementNode$java_util_HashMap_Node$java_util_HashMap_Node',  function (p, next) {
var q=p;
var t=Clazz.new_($I$(7,1).c$$I$O$O$java_util_HashMap_Node,[q.hash, q.key, q.value, next]);
p$1.transferLinks$java_util_LinkedHashMap_Entry$java_util_LinkedHashMap_Entry.apply(this, [q, t]);
return t;
});

Clazz.newMeth(C$, 'newTreeNode$I$O$O$java_util_HashMap_Node',  function (hash, key, value, next) {
var p=Clazz.new_($I$(8,1).c$$I$O$O$java_util_HashMap_Node,[hash, key, value, next]);
p$1.linkNodeLast$java_util_LinkedHashMap_Entry.apply(this, [p]);
return p;
});

Clazz.newMeth(C$, 'replacementTreeNode$java_util_HashMap_Node$java_util_HashMap_Node',  function (p, next) {
var q=p;
var t=Clazz.new_($I$(8,1).c$$I$O$O$java_util_HashMap_Node,[q.hash, q.key, q.value, next]);
p$1.transferLinks$java_util_LinkedHashMap_Entry$java_util_LinkedHashMap_Entry.apply(this, [q, t]);
return t;
});

Clazz.newMeth(C$, 'afterNodeRemoval$java_util_HashMap_Node',  function (e) {
var p=e;
var b=p.before;
var a=p.after;
p.before=p.after=null;
if (b == null ) this.head=a;
 else b.after=a;
if (a == null ) this.tail=b;
 else a.before=b;
});

Clazz.newMeth(C$, 'afterNodeInsertion$Z',  function (evict) {
var first;
if (evict && (first=this.head) != null   && this.removeEldestEntry$java_util_Map_Entry(first) ) {
var key=first.key;
this.removeNode$I$O$O$Z$Z$I($I$(3).hash$O(key), key, null, false, true, 0);
}});

Clazz.newMeth(C$, 'afterNodeAccess$java_util_HashMap_Node',  function (e) {
var last;
if (this.accessOrder && (last=this.tail) !== e  ) {
var p=e;
var b=p.before;
var a=p.after;
p.after=null;
if (b == null ) this.head=a;
 else b.after=a;
if (a != null ) a.before=b;
 else last=b;
if (last == null ) this.head=p;
 else {
p.before=last;
last.after=p;
}this.tail=p;
++this.modCount;
}});

Clazz.newMeth(C$, 'internalWriteEntries$java_io_ObjectOutputStream',  function (s) {
for (var e=this.head; e != null ; e=e.after) {
s.writeObject$O(e.key);
s.writeObject$O(e.value);
}
});

Clazz.newMeth(C$, 'c$$I$F',  function (initialCapacity, loadFactor) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, loadFactor]);C$.$init$.apply(this);
this.accessOrder=false;
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (initialCapacity) {
;C$.superclazz.c$$I.apply(this,[initialCapacity]);C$.$init$.apply(this);
this.accessOrder=false;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.accessOrder=false;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map',  function (m) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.accessOrder=false;
this.putMapEntries$java_util_Map$Z(m, false);
}, 1);

Clazz.newMeth(C$, 'c$$I$F$Z',  function (initialCapacity, loadFactor, accessOrder) {
;C$.superclazz.c$$I$F.apply(this,[initialCapacity, loadFactor]);C$.$init$.apply(this);
this.accessOrder=accessOrder;
}, 1);

Clazz.newMeth(C$, 'containsValue$O',  function (value) {
for (var e=this.head; e != null ; e=e.after) {
var v=e.value;
if (v === value  || (value != null  && value.equals$O(v) ) ) return true;
}
return false;
});

Clazz.newMeth(C$, 'get$O',  function (key) {
var e;
if ((e=this.getNode$I$O($I$(3).hash$O(key), key)) == null ) return null;
if (this.accessOrder) this.afterNodeAccess$java_util_HashMap_Node(e);
return e.value;
});

Clazz.newMeth(C$, 'getOrDefault$O$O',  function (key, defaultValue) {
var e;
if ((e=this.getNode$I$O($I$(3).hash$O(key), key)) == null ) return defaultValue;
if (this.accessOrder) this.afterNodeAccess$java_util_HashMap_Node(e);
return e.value;
});

Clazz.newMeth(C$, 'clear$',  function () {
C$.superclazz.prototype.clear$.apply(this, []);
this.head=this.tail=null;
});

Clazz.newMeth(C$, 'removeEldestEntry$java_util_Map_Entry',  function (eldest) {
return false;
});

Clazz.newMeth(C$, 'keySet$',  function () {
var ks;
return (ks=this.keySet) == null  ? (this.keySet=Clazz.new_($I$(9,1),[this, null])) : ks;
});

Clazz.newMeth(C$, 'values$',  function () {
var vs;
return (vs=this.values) == null  ? (this.values=Clazz.new_($I$(10,1),[this, null])) : vs;
});

Clazz.newMeth(C$, 'entrySet$',  function () {
var es;
return (es=this.entrySet) == null  ? (this.entrySet=Clazz.new_($I$(11,1),[this, null])) : es;
});

Clazz.newMeth(C$, 'forEach$java_util_function_BiConsumer',  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var mc=this.modCount;
for (var e=this.head; e != null ; e=e.after) action.accept$O$O(e.key, e.value);

if (this.modCount != mc) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_BiFunction',  function ($function) {
if ($function == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var mc=this.modCount;
for (var e=this.head; e != null ; e=e.after) e.value=$function.apply$O$O(e.key, e.value);

if (this.modCount != mc) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$, '秘setJS$',  function () {
this.秘m=null;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.LinkedHashMap, "Entry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.HashMap','.Node']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['before','java.util.LinkedHashMap.Entry','+after']]]

Clazz.newMeth(C$, 'c$$I$O$O$java_util_HashMap_Node',  function (hash, key, value, next) {
;C$.superclazz.c$$I$O$O$java_util_HashMap_Node.apply(this,[hash, key, value, next]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LinkedHashMap, "LinkedKeySet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'size$',  function () {
return this.b$['java.util.LinkedHashMap'].size;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.b$['java.util.LinkedHashMap'].clear$.apply(this.b$['java.util.LinkedHashMap'], []);
});

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(1,1),[this, null]);
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
return this.b$['java.util.HashMap'].containsKey$O.apply(this.b$['java.util.HashMap'], [o]);
});

Clazz.newMeth(C$, 'remove$O',  function (key) {
switch ($I$(2).秘hasKey$java_util_Map$O(this.b$['java.util.LinkedHashMap'], key)) {
case 3:
return this.b$['java.util.HashMap'].removeNode$I$O$O$Z$Z$I.apply(this.b$['java.util.HashMap'], [3, key, null, false, true, 3]) != null ;
default:
case 1:
case 2:
return false;
case 0:
return this.b$['java.util.HashMap'].removeNode$I$O$O$Z$Z$I.apply(this.b$['java.util.HashMap'], [$I$(3).hash$O(key), key, null, false, true, 0]) != null ;
}
});

Clazz.newMeth(C$, 'spliterator$',  function () {
return $I$(4).spliterator$java_util_Collection$I(this, 81);
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer',  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var mc=this.b$['java.util.LinkedHashMap'].modCount;
for (var e=this.b$['java.util.LinkedHashMap'].head; e != null ; e=e.after) action.accept$O(e.key);

if (this.b$['java.util.LinkedHashMap'].modCount != mc) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LinkedHashMap, "LinkedValues", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractCollection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'size$',  function () {
return this.b$['java.util.LinkedHashMap'].size;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.b$['java.util.LinkedHashMap'].clear$.apply(this.b$['java.util.LinkedHashMap'], []);
});

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(5,1),[this, null]);
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
return this.b$['java.util.LinkedHashMap'].containsValue$O.apply(this.b$['java.util.LinkedHashMap'], [o]);
});

Clazz.newMeth(C$, 'spliterator$',  function () {
return $I$(4).spliterator$java_util_Collection$I(this, 80);
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer',  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var mc=this.b$['java.util.LinkedHashMap'].modCount;
for (var e=this.b$['java.util.LinkedHashMap'].head; e != null ; e=e.after) action.accept$O(e.value);

if (this.b$['java.util.LinkedHashMap'].modCount != mc) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LinkedHashMap, "LinkedEntrySet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'size$',  function () {
return this.b$['java.util.LinkedHashMap'].size;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.b$['java.util.LinkedHashMap'].clear$.apply(this.b$['java.util.LinkedHashMap'], []);
});

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(6,1),[this, null]);
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var e=o;
var key=e.getKey$();
var candidate=this.b$['java.util.HashMap'].getNode$I$O.apply(this.b$['java.util.HashMap'], [$I$(3).hash$O(key), key]);
return candidate != null  && candidate.equals$O(e) ;
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
if (Clazz.instanceOf(o, "java.util.Map.Entry")) {
var e=o;
var key=e.getKey$();
var value=e.getValue$();
switch ($I$(2).秘hasKey$java_util_Map$O(this.b$['java.util.LinkedHashMap'], key)) {
case 3:
return this.b$['java.util.HashMap'].removeNode$I$O$O$Z$Z$I.apply(this.b$['java.util.HashMap'], [3, key, value, true, true, 3]) != null ;
case 1:
case 2:
return false;
case 0:
return this.b$['java.util.HashMap'].removeNode$I$O$O$Z$Z$I.apply(this.b$['java.util.HashMap'], [$I$(3).hash$O(key), key, value, true, true, 0]) != null ;
}
}return false;
});

Clazz.newMeth(C$, 'spliterator$',  function () {
return $I$(4).spliterator$java_util_Collection$I(this, 81);
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer',  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var mc=this.b$['java.util.LinkedHashMap'].modCount;
for (var e=this.b$['java.util.LinkedHashMap'].head; e != null ; e=e.after) action.accept$O(e);

if (this.b$['java.util.LinkedHashMap'].modCount != mc) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LinkedHashMap, "LinkedHashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['expectedModCount'],'O',['nextItem','java.util.LinkedHashMap.Entry','+current']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.nextItem=this.b$['java.util.LinkedHashMap'].head;
this.expectedModCount=this.b$['java.util.LinkedHashMap'].modCount;
this.current=null;
}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.nextItem != null ;
});

Clazz.newMeth(C$, 'nextNode$',  function () {
var e=this.nextItem;
if (this.b$['java.util.LinkedHashMap'].modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
if (e == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
this.current=e;
this.nextItem=e.after;
return e;
});

Clazz.newMeth(C$, 'remove$',  function () {
var p=this.current;
if (p == null ) throw Clazz.new_(Clazz.load('IllegalStateException'));
if (this.b$['java.util.LinkedHashMap'].modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
this.current=null;
var key=p.key;
this.b$['java.util.HashMap'].removeNode$I$O$O$Z$Z$I.apply(this.b$['java.util.HashMap'], [$I$(3).hash$O(key), key, null, false, false, 0]);
this.expectedModCount=this.b$['java.util.LinkedHashMap'].modCount;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LinkedHashMap, "LinkedKeyIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.LinkedHashMap','.LinkedHashIterator'], 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'next$',  function () {
return this.nextNode$().getKey$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LinkedHashMap, "LinkedValueIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.LinkedHashMap','.LinkedHashIterator'], 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'next$',  function () {
return this.nextNode$().value;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LinkedHashMap, "LinkedEntryIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.LinkedHashMap','.LinkedHashIterator'], 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'next$',  function () {
return this.nextNode$();
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:33 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
