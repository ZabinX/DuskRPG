(function(){var P$=java.util,p$1={},I$=[[0,'java.util.TreeMap','InternalError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TreeSet", null, 'java.util.AbstractSet', ['java.util.NavigableSet', 'Cloneable', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['m','java.util.NavigableMap']]
,['O',['PRESENT','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$java_util_NavigableMap',  function (m) {
Clazz.super_(C$, this);
this.m=m;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$java_util_NavigableMap.apply(this, [Clazz.new_($I$(1,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Comparator',  function (comparator) {
C$.c$$java_util_NavigableMap.apply(this, [Clazz.new_($I$(1,1).c$$java_util_Comparator,[comparator])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection',  function (c) {
C$.c$.apply(this, []);
this.addAll$java_util_Collection(c);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_SortedSet',  function (s) {
C$.c$$java_util_Comparator.apply(this, [s.comparator$()]);
this.addAll$java_util_Collection(s);
}, 1);

Clazz.newMeth(C$, 'iterator$',  function () {
return this.m.navigableKeySet$().iterator$();
});

Clazz.newMeth(C$, 'descendingIterator$',  function () {
return this.m.descendingKeySet$().iterator$();
});

Clazz.newMeth(C$, 'descendingSet$',  function () {
return Clazz.new_(C$.c$$java_util_NavigableMap,[this.m.descendingMap$()]);
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

Clazz.newMeth(C$, 'add$O',  function (e) {
return this.m.put$O$O(e, C$.PRESENT) == null ;
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
return this.m.remove$O(o) === C$.PRESENT ;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.m.clear$();
});

Clazz.newMeth(C$, 'addAll$java_util_Collection',  function (c) {
if (this.m.size$() == 0 && c.size$() > 0  && Clazz.instanceOf(c, "java.util.SortedSet")  && Clazz.instanceOf(this.m, "java.util.TreeMap") ) {
var set=c;
var map=this.m;
var cc=set.comparator$();
var mc=map.comparator$();
if (cc === mc  || (cc != null  && cc.equals$O(mc) ) ) {
map.addAllForTreeSet$java_util_SortedSet$O(set, C$.PRESENT);
return true;
}}return C$.superclazz.prototype.addAll$java_util_Collection.apply(this, [c]);
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

Clazz.newMeth(C$, 'comparator$',  function () {
return this.m.comparator$();
});

Clazz.newMeth(C$, 'first$',  function () {
return this.m.firstKey$();
});

Clazz.newMeth(C$, 'last$',  function () {
return this.m.lastKey$();
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

Clazz.newMeth(C$, 'pollFirst$',  function () {
var e=this.m.pollFirstEntry$();
return (e == null ) ? null : e.getKey$();
});

Clazz.newMeth(C$, 'pollLast$',  function () {
var e=this.m.pollLastEntry$();
return (e == null ) ? null : e.getKey$();
});

Clazz.newMeth(C$, 'clone$',  function () {
var clone;
try {
clone=Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(2,1).c$$Throwable,[e]);
} else {
throw e;
}
}
clone.m=Clazz.new_($I$(1,1).c$$java_util_SortedMap,[this.m]);
return clone;
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (s) {
s.defaultWriteObject$();
s.writeObject$O(this.m.comparator$());
s.writeInt$I(this.m.size$());
for (var e, $e = this.m.keySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) s.writeObject$O(e);

}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
s.defaultReadObject$();
var c=s.readObject$();
var tm=Clazz.new_($I$(1,1).c$$java_util_Comparator,[c]);
this.m=tm;
var size=s.readInt$();
tm.readTreeSet$I$java_io_ObjectInputStream$O(size, s, C$.PRESENT);
}, p$1);

Clazz.newMeth(C$, 'spliterator$',  function () {
return $I$(1).keySpliteratorFor$java_util_NavigableMap(this.m);
});

C$.$static$=function(){C$.$static$=0;
C$.PRESENT= Clazz.new_();
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:35 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
