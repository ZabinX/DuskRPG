(function(){var P$=java.util,p$1={},p$2={},I$=[[0,'java.util.Objects',['java.util.ArrayDeque','.DeqIterator'],['java.util.ArrayDeque','.DescendingIterator'],'java.lang.reflect.Array','java.util.Arrays','AssertionError',['java.util.ArrayDeque','.DeqSpliterator']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ArrayDeque", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractCollection', ['java.util.Deque', 'Cloneable', 'java.io.Serializable']);
C$.$classes$=[['DeqIterator',2],['DescendingIterator',2],['DeqSpliterator',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['head','tail'],'O',['elements','Object[]']]]

Clazz.newMeth(C$, 'allocateElements$I',  function (numElements) {
var initialCapacity=8;
if (numElements >= initialCapacity) {
initialCapacity=numElements;
initialCapacity|=(initialCapacity >>> 1);
initialCapacity|=(initialCapacity >>> 2);
initialCapacity|=(initialCapacity >>> 4);
initialCapacity|=(initialCapacity >>> 8);
initialCapacity|=(initialCapacity >>> 16);
++initialCapacity;
if (initialCapacity < 0) initialCapacity>>>=1;
}this.elements=Clazz.array(java.lang.Object, [initialCapacity]);
}, p$1);

Clazz.newMeth(C$, 'doubleCapacity',  function () {
Clazz.assert(C$, this, function(){return this.head == this.tail});
var p=this.head;
var n=this.elements.length;
var r=n - p;
var newCapacity=n << 1;
if (newCapacity < 0) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Sorry, deque too big"]);
var a=Clazz.array(java.lang.Object, [newCapacity]);
System.arraycopy$O$I$O$I$I(this.elements, p, a, 0, r);
System.arraycopy$O$I$O$I$I(this.elements, 0, a, r, p);
this.elements=a;
this.head=0;
this.tail=n;
}, p$1);

Clazz.newMeth(C$, 'copyElements$OA',  function (a) {
if (this.head < this.tail) {
System.arraycopy$O$I$O$I$I(this.elements, this.head, a, 0, this.size$());
} else if (this.head > this.tail) {
var headPortionLen=this.elements.length - this.head;
System.arraycopy$O$I$O$I$I(this.elements, this.head, a, 0, headPortionLen);
System.arraycopy$O$I$O$I$I(this.elements, 0, a, headPortionLen, this.tail);
}return a;
}, p$1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.elements=Clazz.array(java.lang.Object, [16]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (numElements) {
Clazz.super_(C$, this);
p$1.allocateElements$I.apply(this, [numElements]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection',  function (c) {
Clazz.super_(C$, this);
p$1.allocateElements$I.apply(this, [c.size$()]);
this.addAll$java_util_Collection(c);
}, 1);

Clazz.newMeth(C$, 'addFirst$O',  function (e) {
if (e == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.elements[this.head=(this.head - 1) & (this.elements.length - 1)]=e;
if (this.head == this.tail) p$1.doubleCapacity.apply(this, []);
});

Clazz.newMeth(C$, 'addLast$O',  function (e) {
if (e == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.elements[this.tail]=e;
if ((this.tail=(this.tail + 1) & (this.elements.length - 1)) == this.head) p$1.doubleCapacity.apply(this, []);
});

Clazz.newMeth(C$, 'offerFirst$O',  function (e) {
this.addFirst$O(e);
return true;
});

Clazz.newMeth(C$, 'offerLast$O',  function (e) {
this.addLast$O(e);
return true;
});

Clazz.newMeth(C$, 'removeFirst$',  function () {
var x=this.pollFirst$();
if (x == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
return x;
});

Clazz.newMeth(C$, 'removeLast$',  function () {
var x=this.pollLast$();
if (x == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
return x;
});

Clazz.newMeth(C$, 'pollFirst$',  function () {
var h=this.head;
var result=this.elements[h];
if (result == null ) return null;
this.elements[h]=null;
this.head=(h + 1) & (this.elements.length - 1);
return result;
});

Clazz.newMeth(C$, 'pollLast$',  function () {
var t=(this.tail - 1) & (this.elements.length - 1);
var result=this.elements[t];
if (result == null ) return null;
this.elements[t]=null;
this.tail=t;
return result;
});

Clazz.newMeth(C$, 'getFirst$',  function () {
var result=this.elements[this.head];
if (result == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
return result;
});

Clazz.newMeth(C$, 'getLast$',  function () {
var result=this.elements[(this.tail - 1) & (this.elements.length - 1)];
if (result == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
return result;
});

Clazz.newMeth(C$, 'peekFirst$',  function () {
return this.elements[this.head];
});

Clazz.newMeth(C$, 'peekLast$',  function () {
return this.elements[(this.tail - 1) & (this.elements.length - 1)];
});

Clazz.newMeth(C$, 'removeFirstOccurrence$O',  function (o) {
if (o == null ) return false;
var mask=this.elements.length - 1;
var i=this.head;
var x;
while ((x=this.elements[i]) != null ){
if (o.equals$O(x)) {
p$1.delete$I.apply(this, [i]);
return true;
}i=(i + 1) & mask;
}
return false;
});

Clazz.newMeth(C$, 'removeLastOccurrence$O',  function (o) {
if (o == null ) return false;
var mask=this.elements.length - 1;
var i=(this.tail - 1) & mask;
var x;
while ((x=this.elements[i]) != null ){
if (o.equals$O(x)) {
p$1.delete$I.apply(this, [i]);
return true;
}i=(i - 1) & mask;
}
return false;
});

Clazz.newMeth(C$, 'add$O',  function (e) {
this.addLast$O(e);
return true;
});

Clazz.newMeth(C$, 'offer$O',  function (e) {
return this.offerLast$O(e);
});

Clazz.newMeth(C$, 'remove$',  function () {
return this.removeFirst$();
});

Clazz.newMeth(C$, 'poll$',  function () {
return this.pollFirst$();
});

Clazz.newMeth(C$, 'element$',  function () {
return this.getFirst$();
});

Clazz.newMeth(C$, 'peek$',  function () {
return this.peekFirst$();
});

Clazz.newMeth(C$, 'push$O',  function (e) {
this.addFirst$O(e);
});

Clazz.newMeth(C$, 'pop$',  function () {
return this.removeFirst$();
});

Clazz.newMeth(C$, 'checkInvariants',  function () {
Clazz.assert(C$, this, function(){return this.elements[this.tail] == null });
Clazz.assert(C$, this, function(){return this.head == this.tail ? this.elements[this.head] == null  : (this.elements[this.head] != null  && this.elements[(this.tail - 1) & (this.elements.length - 1)] != null  )});
Clazz.assert(C$, this, function(){return this.elements[(this.head - 1) & (this.elements.length - 1)] == null });
}, p$1);

Clazz.newMeth(C$, 'delete$I',  function (i) {
p$1.checkInvariants.apply(this, []);
var elements=this.elements;
var mask=elements.length - 1;
var h=this.head;
var t=this.tail;
var front=(i - h) & mask;
var back=(t - i) & mask;
if (front >= ((t - h) & mask)) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
if (front < back) {
if (h <= i) {
System.arraycopy$O$I$O$I$I(elements, h, elements, h + 1, front);
} else {
System.arraycopy$O$I$O$I$I(elements, 0, elements, 1, i);
elements[0]=elements[mask];
System.arraycopy$O$I$O$I$I(elements, h, elements, h + 1, mask - h);
}elements[h]=null;
this.head=(h + 1) & mask;
return false;
} else {
if (i < t) {
System.arraycopy$O$I$O$I$I(elements, i + 1, elements, i, back);
this.tail=t - 1;
} else {
System.arraycopy$O$I$O$I$I(elements, i + 1, elements, i, mask - i);
elements[mask]=elements[0];
System.arraycopy$O$I$O$I$I(elements, 1, elements, 0, t);
this.tail=(t - 1) & mask;
}return true;
}}, p$1);

Clazz.newMeth(C$, 'size$',  function () {
return (this.tail - this.head) & (this.elements.length - 1);
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.head == this.tail;
});

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(2,1),[this, null]);
});

Clazz.newMeth(C$, 'descendingIterator$',  function () {
return Clazz.new_($I$(3,1),[this, null]);
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
if (o == null ) return false;
var mask=this.elements.length - 1;
var i=this.head;
var x;
while ((x=this.elements[i]) != null ){
if (o.equals$O(x)) return true;
i=(i + 1) & mask;
}
return false;
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
return this.removeFirstOccurrence$O(o);
});

Clazz.newMeth(C$, 'clear$',  function () {
var h=this.head;
var t=this.tail;
if (h != t) {
this.head=this.tail=0;
var i=h;
var mask=this.elements.length - 1;
do {
this.elements[i]=null;
i=(i + 1) & mask;
} while (i != t);
}});

Clazz.newMeth(C$, 'toArray$',  function () {
return p$1.copyElements$OA.apply(this, [Clazz.array(java.lang.Object, [this.size$()])]);
});

Clazz.newMeth(C$, 'toArray$OA',  function (a) {
var size=this.size$();
if (a.length < size) a=Clazz.array(a.getClass$().getComponentType$(), size);
p$1.copyElements$OA.apply(this, [a]);
if (a.length > size) a[size]=null;
return a;
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
var result=Clazz.clone(this);
result.elements=$I$(5).copyOf$OA$I(this.elements, this.elements.length);
return result;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(6,1));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (s) {
s.defaultWriteObject$();
s.writeInt$I(this.size$());
var mask=this.elements.length - 1;
for (var i=this.head; i != this.tail; i=(i + 1) & mask) s.writeObject$O(this.elements[i]);

}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
s.defaultReadObject$();
var size=s.readInt$();
p$1.allocateElements$I.apply(this, [size]);
this.head=0;
this.tail=size;
for (var i=0; i < size; i++) this.elements[i]=s.readObject$();

}, p$1);

Clazz.newMeth(C$, 'spliterator$',  function () {
return Clazz.new_($I$(7,1).c$$java_util_ArrayDeque$I$I,[this, -1, -1]);
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayDeque, "DeqIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cursor=this.b$['java.util.ArrayDeque'].head;
this.fence=this.b$['java.util.ArrayDeque'].tail;
this.lastRet=-1;
},1);

C$.$fields$=[['I',['cursor','fence','lastRet']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.cursor != this.fence;
});

Clazz.newMeth(C$, 'next$',  function () {
if (this.cursor == this.fence) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
var result=this.b$['java.util.ArrayDeque'].elements[this.cursor];
if (this.b$['java.util.ArrayDeque'].tail != this.fence || result == null  ) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
this.lastRet=this.cursor;
this.cursor=(this.cursor + 1) & (this.b$['java.util.ArrayDeque'].elements.length - 1);
return result;
});

Clazz.newMeth(C$, 'remove$',  function () {
if (this.lastRet < 0) throw Clazz.new_(Clazz.load('IllegalStateException'));
if (p$1.delete$I.apply(this.b$['java.util.ArrayDeque'], [this.lastRet])) {
this.cursor=(this.cursor - 1) & (this.b$['java.util.ArrayDeque'].elements.length - 1);
this.fence=this.b$['java.util.ArrayDeque'].tail;
}this.lastRet=-1;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
$I$(1).requireNonNull$O(action);
var a=this.b$['java.util.ArrayDeque'].elements;
var m=a.length - 1;
var f=this.fence;
var i=this.cursor;
this.cursor=f;
while (i != f){
var e=a[i];
i=(i + 1) & m;
if (e == null ) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
action.accept$O(e);
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayDeque, "DescendingIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cursor=this.b$['java.util.ArrayDeque'].tail;
this.fence=this.b$['java.util.ArrayDeque'].head;
this.lastRet=-1;
},1);

C$.$fields$=[['I',['cursor','fence','lastRet']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.cursor != this.fence;
});

Clazz.newMeth(C$, 'next$',  function () {
if (this.cursor == this.fence) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
this.cursor=(this.cursor - 1) & (this.b$['java.util.ArrayDeque'].elements.length - 1);
var result=this.b$['java.util.ArrayDeque'].elements[this.cursor];
if (this.b$['java.util.ArrayDeque'].head != this.fence || result == null  ) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
this.lastRet=this.cursor;
return result;
});

Clazz.newMeth(C$, 'remove$',  function () {
if (this.lastRet < 0) throw Clazz.new_(Clazz.load('IllegalStateException'));
if (!p$1.delete$I.apply(this.b$['java.util.ArrayDeque'], [this.lastRet])) {
this.cursor=(this.cursor + 1) & (this.b$['java.util.ArrayDeque'].elements.length - 1);
this.fence=this.b$['java.util.ArrayDeque'].head;
}this.lastRet=-1;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayDeque, "DeqSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Spliterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['fence','index'],'O',['deq','java.util.ArrayDeque']]]

Clazz.newMeth(C$, 'c$$java_util_ArrayDeque$I$I',  function (deq, origin, fence) {
;C$.$init$.apply(this);
this.deq=deq;
this.index=origin;
this.fence=fence;
}, 1);

Clazz.newMeth(C$, 'getFence',  function () {
var t;
if ((t=this.fence) < 0) {
t=this.fence=this.deq.tail;
this.index=this.deq.head;
}return t;
}, p$2);

Clazz.newMeth(C$, 'trySplit$',  function () {
var t=p$2.getFence.apply(this, []);
var h=this.index;
var n=this.deq.elements.length;
if (h != t && ((h + 1) & (n - 1)) != t ) {
if (h > t) t+=n;
var m=((h + t) >>> 1) & (n - 1);
return Clazz.new_(C$.c$$java_util_ArrayDeque$I$I,[this.deq, h, this.index=m]);
}return null;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (consumer) {
if (consumer == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var a=this.deq.elements;
var m=a.length - 1;
var f=p$2.getFence.apply(this, []);
var i=this.index;
this.index=f;
while (i != f){
var e=a[i];
i=(i + 1) & m;
if (e == null ) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
consumer.accept$O(e);
}
});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer',  function (consumer) {
if (consumer == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var a=this.deq.elements;
var m=a.length - 1;
var f=p$2.getFence.apply(this, []);
var i=this.index;
if (i != this.fence) {
var e=a[i];
this.index=(i + 1) & m;
if (e == null ) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
consumer.accept$O(e);
return true;
}return false;
});

Clazz.newMeth(C$, 'estimateSize$',  function () {
var n=p$2.getFence.apply(this, []) - this.index;
if (n < 0) n+=this.deq.elements.length;
return n;
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return 16720;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
