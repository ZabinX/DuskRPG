(function(){var P$=java.util,p$1={},p$2={},I$=[[0,'java.util.ArrayDeque','java.util.Arrays','OutOfMemoryError',['java.util.PriorityQueue','.Itr'],['java.util.PriorityQueue','.PriorityQueueSpliterator']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PriorityQueue", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractQueue', 'java.io.Serializable');
C$.$classes$=[['Itr',18],['PriorityQueueSpliterator',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.size=0;
this.modCount=0;
},1);

C$.$fields$=[['I',['size','modCount'],'O',['queue','Object[]','comparator','java.util.Comparator']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I$java_util_Comparator.apply(this, [11, null]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (initialCapacity) {
C$.c$$I$java_util_Comparator.apply(this, [initialCapacity, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Comparator',  function (comparator) {
C$.c$$I$java_util_Comparator.apply(this, [11, comparator]);
}, 1);

Clazz.newMeth(C$, 'c$$I$java_util_Comparator',  function (initialCapacity, comparator) {
Clazz.super_(C$, this);
if (initialCapacity < 1) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
this.queue=Clazz.array(java.lang.Object, [initialCapacity]);
this.comparator=comparator;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection',  function (c) {
Clazz.super_(C$, this);
if (Clazz.instanceOf(c, "java.util.SortedSet")) {
var ss=c;
this.comparator=ss.comparator$();
p$1.initElementsFromCollection$java_util_Collection.apply(this, [ss]);
} else if (Clazz.instanceOf(c, "java.util.PriorityQueue")) {
var pq=c;
this.comparator=pq.comparator$();
p$1.initFromPriorityQueue$java_util_PriorityQueue.apply(this, [pq]);
} else {
this.comparator=null;
p$1.initFromCollection$java_util_Collection.apply(this, [c]);
}}, 1);

Clazz.newMeth(C$, 'c$$java_util_PriorityQueue',  function (c) {
Clazz.super_(C$, this);
this.comparator=c.comparator$();
p$1.initFromPriorityQueue$java_util_PriorityQueue.apply(this, [c]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_SortedSet',  function (c) {
Clazz.super_(C$, this);
this.comparator=c.comparator$();
p$1.initElementsFromCollection$java_util_Collection.apply(this, [c]);
}, 1);

Clazz.newMeth(C$, 'initFromPriorityQueue$java_util_PriorityQueue',  function (c) {
if (c.getClass$() === Clazz.getClass(C$) ) {
this.queue=c.toArray$();
this.size=c.size$();
} else {
p$1.initFromCollection$java_util_Collection.apply(this, [c]);
}}, p$1);

Clazz.newMeth(C$, 'initElementsFromCollection$java_util_Collection',  function (c) {
var a=c.toArray$();
if (a.getClass$() !== Clazz.array(java.lang.Object, -1) ) a=$I$(2,"copyOf$OA$I$Class",[a, a.length, Clazz.array(java.lang.Object, -1)]);
var len=a.length;
if (len == 1 || this.comparator != null  ) for (var i=0; i < len; i++) if (a[i] == null ) throw Clazz.new_(Clazz.load('NullPointerException'));

this.queue=a;
this.size=a.length;
}, p$1);

Clazz.newMeth(C$, 'initFromCollection$java_util_Collection',  function (c) {
p$1.initElementsFromCollection$java_util_Collection.apply(this, [c]);
p$1.heapify.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'grow$I',  function (minCapacity) {
var oldCapacity=this.queue.length;
var newCapacity=oldCapacity + ((oldCapacity < 64) ? (oldCapacity + 2) : (oldCapacity >> 1));
if (newCapacity - 2147483639 > 0) newCapacity=C$.hugeCapacity$I(minCapacity);
this.queue=$I$(2).copyOf$OA$I(this.queue, newCapacity);
}, p$1);

Clazz.newMeth(C$, 'hugeCapacity$I',  function (minCapacity) {
if (minCapacity < 0) throw Clazz.new_($I$(3,1));
return (minCapacity > 2147483639) ? 2147483647 : 2147483639;
}, 1);

Clazz.newMeth(C$, 'add$O',  function (e) {
return this.offer$O(e);
});

Clazz.newMeth(C$, 'offer$O',  function (e) {
if (e == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
++this.modCount;
var i=this.size;
if (i >= this.queue.length) p$1.grow$I.apply(this, [i + 1]);
this.size=i + 1;
if (i == 0) this.queue[0]=e;
 else p$1.siftUp$I$O.apply(this, [i, e]);
return true;
});

Clazz.newMeth(C$, 'peek$',  function () {
return (this.size == 0) ? null : this.queue[0];
});

Clazz.newMeth(C$, 'indexOf$O',  function (o) {
if (o != null ) {
for (var i=0; i < this.size; i++) if (o.equals$O(this.queue[i])) return i;

}return -1;
}, p$1);

Clazz.newMeth(C$, 'remove$O',  function (o) {
var i=p$1.indexOf$O.apply(this, [o]);
if (i == -1) return false;
 else {
p$1.removeAt$I.apply(this, [i]);
return true;
}});

Clazz.newMeth(C$, 'removeEq$O',  function (o) {
for (var i=0; i < this.size; i++) {
if (o === this.queue[i] ) {
p$1.removeAt$I.apply(this, [i]);
return true;
}}
return false;
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
return p$1.indexOf$O.apply(this, [o]) != -1;
});

Clazz.newMeth(C$, 'toArray$',  function () {
return $I$(2).copyOf$OA$I(this.queue, this.size);
});

Clazz.newMeth(C$, 'toArray$OA',  function (a) {
var size=this.size;
if (a.length < size) return $I$(2,"copyOf$OA$I$Class",[this.queue, size, a.getClass$()]);
System.arraycopy$O$I$O$I$I(this.queue, 0, a, 0, size);
if (a.length > size) a[size]=null;
return a;
});

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(4,1),[this, null]);
});

Clazz.newMeth(C$, 'size$',  function () {
return this.size;
});

Clazz.newMeth(C$, 'clear$',  function () {
++this.modCount;
for (var i=0; i < this.size; i++) this.queue[i]=null;

this.size=0;
});

Clazz.newMeth(C$, 'poll$',  function () {
if (this.size == 0) return null;
var s=--this.size;
++this.modCount;
var result=this.queue[0];
var x=this.queue[s];
this.queue[s]=null;
if (s != 0) p$1.siftDown$I$O.apply(this, [0, x]);
return result;
});

Clazz.newMeth(C$, 'removeAt$I',  function (i) {
++this.modCount;
var s=--this.size;
if (s == i) this.queue[i]=null;
 else {
var moved=this.queue[s];
this.queue[s]=null;
p$1.siftDown$I$O.apply(this, [i, moved]);
if (this.queue[i] === moved ) {
p$1.siftUp$I$O.apply(this, [i, moved]);
if (this.queue[i] !== moved ) return moved;
}}return null;
}, p$1);

Clazz.newMeth(C$, 'siftUp$I$O',  function (k, x) {
if (this.comparator != null ) p$1.siftUpUsingComparator$I$O.apply(this, [k, x]);
 else p$1.siftUpComparable$I$O.apply(this, [k, x]);
}, p$1);

Clazz.newMeth(C$, 'siftUpComparable$I$O',  function (k, x) {
var key=x;
while (k > 0){
var parent=(k - 1) >>> 1;
var e=this.queue[parent];
if (key.compareTo$O(e) >= 0) break;
this.queue[k]=e;
k=parent;
}
this.queue[k]=key;
}, p$1);

Clazz.newMeth(C$, 'siftUpUsingComparator$I$O',  function (k, x) {
while (k > 0){
var parent=(k - 1) >>> 1;
var e=this.queue[parent];
if (this.comparator.compare$O$O(x, e) >= 0) break;
this.queue[k]=e;
k=parent;
}
this.queue[k]=x;
}, p$1);

Clazz.newMeth(C$, 'siftDown$I$O',  function (k, x) {
if (this.comparator != null ) p$1.siftDownUsingComparator$I$O.apply(this, [k, x]);
 else p$1.siftDownComparable$I$O.apply(this, [k, x]);
}, p$1);

Clazz.newMeth(C$, 'siftDownComparable$I$O',  function (k, x) {
var key=x;
var half=this.size >>> 1;
while (k < half){
var child=(k << 1) + 1;
var c=this.queue[child];
var right=child + 1;
if (right < this.size && (c).compareTo$O(this.queue[right]) > 0 ) c=this.queue[child=right];
if (key.compareTo$O(c) <= 0) break;
this.queue[k]=c;
k=child;
}
this.queue[k]=key;
}, p$1);

Clazz.newMeth(C$, 'siftDownUsingComparator$I$O',  function (k, x) {
var half=this.size >>> 1;
while (k < half){
var child=(k << 1) + 1;
var c=this.queue[child];
var right=child + 1;
if (right < this.size && this.comparator.compare$O$O(c, this.queue[right]) > 0 ) c=this.queue[child=right];
if (this.comparator.compare$O$O(x, c) <= 0) break;
this.queue[k]=c;
k=child;
}
this.queue[k]=x;
}, p$1);

Clazz.newMeth(C$, 'heapify',  function () {
for (var i=(this.size >>> 1) - 1; i >= 0; i--) p$1.siftDown$I$O.apply(this, [i, this.queue[i]]);

}, p$1);

Clazz.newMeth(C$, 'comparator$',  function () {
return this.comparator;
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (s) {
s.defaultWriteObject$();
s.writeInt$I(Math.max(2, this.size + 1));
for (var i=0; i < this.size; i++) s.writeObject$O(this.queue[i]);

}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
s.defaultReadObject$();
s.readInt$();
this.queue=Clazz.array(java.lang.Object, [this.size]);
for (var i=0; i < this.size; i++) this.queue[i]=s.readObject$();

p$1.heapify.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'spliterator$',  function () {
return Clazz.new_($I$(5,1).c$$java_util_PriorityQueue$I$I$I,[this, 0, -1, 0]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.PriorityQueue, "Itr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cursor=0;
this.lastRet=-1;
this.forgetMeNot=null;
this.lastRetElt=null;
this.expectedModCount=this.b$['java.util.PriorityQueue'].modCount;
},1);

C$.$fields$=[['I',['cursor','lastRet','expectedModCount'],'O',['forgetMeNot','java.util.ArrayDeque','lastRetElt','<E>']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.cursor < this.b$['java.util.PriorityQueue'].size || (this.forgetMeNot != null  && !this.forgetMeNot.isEmpty$() ) ;
});

Clazz.newMeth(C$, 'next$',  function () {
if (this.expectedModCount != this.b$['java.util.PriorityQueue'].modCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
if (this.cursor < this.b$['java.util.PriorityQueue'].size) return this.b$['java.util.PriorityQueue'].queue[this.lastRet=this.cursor++];
if (this.forgetMeNot != null ) {
this.lastRet=-1;
this.lastRetElt=this.forgetMeNot.poll$();
if (this.lastRetElt != null ) return this.lastRetElt;
}throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});

Clazz.newMeth(C$, 'remove$',  function () {
if (this.expectedModCount != this.b$['java.util.PriorityQueue'].modCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
if (this.lastRet != -1) {
var moved=p$1.removeAt$I.apply(this.b$['java.util.PriorityQueue'], [this.lastRet]);
this.lastRet=-1;
if (moved == null ) --this.cursor;
 else {
if (this.forgetMeNot == null ) this.forgetMeNot=Clazz.new_($I$(1,1));
this.forgetMeNot.add$O(moved);
}} else if (this.lastRetElt != null ) {
this.b$['java.util.PriorityQueue'].removeEq$O.apply(this.b$['java.util.PriorityQueue'], [this.lastRetElt]);
this.lastRetElt=null;
} else {
throw Clazz.new_(Clazz.load('IllegalStateException'));
}this.expectedModCount=this.b$['java.util.PriorityQueue'].modCount;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PriorityQueue, "PriorityQueueSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Spliterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index','fence','expectedModCount'],'O',['pq','java.util.PriorityQueue']]]

Clazz.newMeth(C$, 'c$$java_util_PriorityQueue$I$I$I',  function (pq, origin, fence, expectedModCount) {
;C$.$init$.apply(this);
this.pq=pq;
this.index=origin;
this.fence=fence;
this.expectedModCount=expectedModCount;
}, 1);

Clazz.newMeth(C$, 'getFence',  function () {
var hi;
if ((hi=this.fence) < 0) {
this.expectedModCount=this.pq.modCount;
hi=this.fence=this.pq.size;
}return hi;
}, p$2);

Clazz.newMeth(C$, 'trySplit$',  function () {
var hi=p$2.getFence.apply(this, []);
var lo=this.index;
var mid=(lo + hi) >>> 1;
return (lo >= mid) ? null : Clazz.new_(C$.c$$java_util_PriorityQueue$I$I$I,[this.pq, lo, this.index=mid, this.expectedModCount]);
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
var i;
var hi;
var mc;
var q;
var a;
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if ((q=this.pq) != null  && (a=q.queue) != null  ) {
if ((hi=this.fence) < 0) {
mc=q.modCount;
hi=q.size;
} else mc=this.expectedModCount;
if ((i=this.index) >= 0 && (this.index=hi) <= a.length ) {
for (var e; ; ++i) {
if (i < hi) {
if ((e=a[i]) == null ) break;
action.accept$O(e);
} else if (q.modCount != mc) break;
 else return;
}
}}throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer',  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var hi=p$2.getFence.apply(this, []);
var lo=this.index;
if (lo >= 0 && lo < hi ) {
this.index=lo + 1;
var e=this.pq.queue[lo];
if (e == null ) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
action.accept$O(e);
if (this.pq.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
return true;
}return false;
});

Clazz.newMeth(C$, 'estimateSize$',  function () {
return (p$2.getFence.apply(this, []) - this.index);
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return 16704;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:34 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
