(function(){var P$=java.util,p$1={},I$=[[0,'java.util.Objects',['java.util.LinkedList','.ListItr'],'java.util.Spliterators',['java.util.LinkedList','.Node'],['java.util.LinkedList','.DescendingIterator'],'InternalError','java.lang.reflect.Array',['java.util.LinkedList','.LLSpliterator']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LinkedList", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractSequentialList', ['java.util.List', 'java.util.Deque', 'Cloneable', 'java.io.Serializable']);
C$.$classes$=[['ListItr',2],['Node',10],['DescendingIterator',2],['LLSpliterator',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.size=0;
},1);

C$.$fields$=[['I',['size'],'O',['first','java.util.LinkedList.Node','+last']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection',  function (c) {
C$.c$.apply(this, []);
this.addAll$java_util_Collection(c);
}, 1);

Clazz.newMeth(C$, 'linkFirst$O',  function (e) {
var f=this.first;
var newNode=Clazz.new_($I$(4,1).c$$java_util_LinkedList_Node$O$java_util_LinkedList_Node,[null, e, f]);
this.first=newNode;
if (f == null ) this.last=newNode;
 else f.prev=newNode;
++this.size;
++this.modCount;
}, p$1);

Clazz.newMeth(C$, 'linkLast$O',  function (e) {
var l=this.last;
var newNode=Clazz.new_($I$(4,1).c$$java_util_LinkedList_Node$O$java_util_LinkedList_Node,[l, e, null]);
this.last=newNode;
if (l == null ) this.first=newNode;
 else l.next_=newNode;
++this.size;
++this.modCount;
});

Clazz.newMeth(C$, 'linkBefore$O$java_util_LinkedList_Node',  function (e, succ) {
var pred=succ.prev;
var newNode=Clazz.new_($I$(4,1).c$$java_util_LinkedList_Node$O$java_util_LinkedList_Node,[pred, e, succ]);
succ.prev=newNode;
if (pred == null ) this.first=newNode;
 else pred.next_=newNode;
++this.size;
++this.modCount;
});

Clazz.newMeth(C$, 'unlinkFirst$java_util_LinkedList_Node',  function (f) {
var element=f.item;
var next=f.next_;
f.item=null;
f.next_=null;
this.first=next;
if (next == null ) this.last=null;
 else next.prev=null;
--this.size;
++this.modCount;
return element;
}, p$1);

Clazz.newMeth(C$, 'unlinkLast$java_util_LinkedList_Node',  function (l) {
var element=l.item;
var prev=l.prev;
l.item=null;
l.prev=null;
this.last=prev;
if (prev == null ) this.first=null;
 else prev.next_=null;
--this.size;
++this.modCount;
return element;
}, p$1);

Clazz.newMeth(C$, 'unlink$java_util_LinkedList_Node',  function (x) {
var element=x.item;
var next=x.next_;
var prev=x.prev;
if (prev == null ) {
this.first=next;
} else {
prev.next_=next;
x.prev=null;
}if (next == null ) {
this.last=prev;
} else {
next.prev=prev;
x.next_=null;
}x.item=null;
--this.size;
++this.modCount;
return element;
});

Clazz.newMeth(C$, 'getFirst$',  function () {
var f=this.first;
if (f == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
return f.item;
});

Clazz.newMeth(C$, 'getLast$',  function () {
var l=this.last;
if (l == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
return l.item;
});

Clazz.newMeth(C$, 'removeFirst$',  function () {
var f=this.first;
if (f == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
return p$1.unlinkFirst$java_util_LinkedList_Node.apply(this, [f]);
});

Clazz.newMeth(C$, 'removeLast$',  function () {
var l=this.last;
if (l == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
return p$1.unlinkLast$java_util_LinkedList_Node.apply(this, [l]);
});

Clazz.newMeth(C$, 'addFirst$O',  function (e) {
p$1.linkFirst$O.apply(this, [e]);
});

Clazz.newMeth(C$, 'addLast$O',  function (e) {
this.linkLast$O(e);
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
return this.indexOf$O(o) != -1;
});

Clazz.newMeth(C$, 'size$',  function () {
return this.size;
});

Clazz.newMeth(C$, 'add$O',  function (e) {
this.linkLast$O(e);
return true;
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
if (o == null ) {
for (var x=this.first; x != null ; x=x.next_) {
if (x.item == null ) {
this.unlink$java_util_LinkedList_Node(x);
return true;
}}
} else {
for (var x=this.first; x != null ; x=x.next_) {
if (o.equals$O(x.item)) {
this.unlink$java_util_LinkedList_Node(x);
return true;
}}
}return false;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection',  function (c) {
return this.addAll$I$java_util_Collection(this.size, c);
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection',  function (index, c) {
p$1.checkPositionIndex$I.apply(this, [index]);
var a=c.toArray$();
var numNew=a.length;
if (numNew == 0) return false;
var pred;
var succ;
if (index == this.size) {
succ=null;
pred=this.last;
} else {
succ=this.node$I(index);
pred=succ.prev;
}for (var o, $o = 0, $$o = a; $o<$$o.length&&((o=($$o[$o])),1);$o++) {
var e=o;
var newNode=Clazz.new_($I$(4,1).c$$java_util_LinkedList_Node$O$java_util_LinkedList_Node,[pred, e, null]);
if (pred == null ) this.first=newNode;
 else pred.next_=newNode;
pred=newNode;
}
if (succ == null ) {
this.last=pred;
} else {
pred.next_=succ;
succ.prev=pred;
}this.size+=numNew;
++this.modCount;
return true;
});

Clazz.newMeth(C$, 'clear$',  function () {
for (var x=this.first; x != null ; ) {
var next=x.next_;
x.item=null;
x.next_=null;
x.prev=null;
x=next;
}
this.first=this.last=null;
this.size=0;
++this.modCount;
});

Clazz.newMeth(C$, 'get$I',  function (index) {
p$1.checkElementIndex$I.apply(this, [index]);
return this.node$I(index).item;
});

Clazz.newMeth(C$, 'set$I$O',  function (index, element) {
p$1.checkElementIndex$I.apply(this, [index]);
var x=this.node$I(index);
var oldVal=x.item;
x.item=element;
return oldVal;
});

Clazz.newMeth(C$, 'add$I$O',  function (index, element) {
p$1.checkPositionIndex$I.apply(this, [index]);
if (index == this.size) this.linkLast$O(element);
 else this.linkBefore$O$java_util_LinkedList_Node(element, this.node$I(index));
});

Clazz.newMeth(C$, 'remove$I',  function (index) {
p$1.checkElementIndex$I.apply(this, [index]);
return this.unlink$java_util_LinkedList_Node(this.node$I(index));
});

Clazz.newMeth(C$, 'isElementIndex$I',  function (index) {
return index >= 0 && index < this.size ;
}, p$1);

Clazz.newMeth(C$, 'isPositionIndex$I',  function (index) {
return index >= 0 && index <= this.size ;
}, p$1);

Clazz.newMeth(C$, 'outOfBoundsMsg$I',  function (index) {
return "Index: " + index + ", Size: " + this.size ;
}, p$1);

Clazz.newMeth(C$, 'checkElementIndex$I',  function (index) {
if (!p$1.isElementIndex$I.apply(this, [index])) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[p$1.outOfBoundsMsg$I.apply(this, [index])]);
}, p$1);

Clazz.newMeth(C$, 'checkPositionIndex$I',  function (index) {
if (!p$1.isPositionIndex$I.apply(this, [index])) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[p$1.outOfBoundsMsg$I.apply(this, [index])]);
}, p$1);

Clazz.newMeth(C$, 'node$I',  function (index) {
if (index < (this.size >> 1)) {
var x=this.first;
for (var i=0; i < index; i++) x=x.next_;

return x;
} else {
var x=this.last;
for (var i=this.size - 1; i > index; i--) x=x.prev;

return x;
}});

Clazz.newMeth(C$, 'indexOf$O',  function (o) {
var index=0;
if (o == null ) {
for (var x=this.first; x != null ; x=x.next_) {
if (x.item == null ) return index;
++index;
}
} else {
for (var x=this.first; x != null ; x=x.next_) {
if (o.equals$O(x.item)) return index;
++index;
}
}return -1;
});

Clazz.newMeth(C$, 'lastIndexOf$O',  function (o) {
var index=this.size;
if (o == null ) {
for (var x=this.last; x != null ; x=x.prev) {
--index;
if (x.item == null ) return index;
}
} else {
for (var x=this.last; x != null ; x=x.prev) {
--index;
if (o.equals$O(x.item)) return index;
}
}return -1;
});

Clazz.newMeth(C$, 'peek$',  function () {
var f=this.first;
return (f == null ) ? null : f.item;
});

Clazz.newMeth(C$, 'element$',  function () {
return this.getFirst$();
});

Clazz.newMeth(C$, 'poll$',  function () {
var f=this.first;
return (f == null ) ? null : p$1.unlinkFirst$java_util_LinkedList_Node.apply(this, [f]);
});

Clazz.newMeth(C$, 'remove$',  function () {
return this.removeFirst$();
});

Clazz.newMeth(C$, 'offer$O',  function (e) {
return this.add$O(e);
});

Clazz.newMeth(C$, 'offerFirst$O',  function (e) {
this.addFirst$O(e);
return true;
});

Clazz.newMeth(C$, 'offerLast$O',  function (e) {
this.addLast$O(e);
return true;
});

Clazz.newMeth(C$, 'peekFirst$',  function () {
var f=this.first;
return (f == null ) ? null : f.item;
});

Clazz.newMeth(C$, 'peekLast$',  function () {
var l=this.last;
return (l == null ) ? null : l.item;
});

Clazz.newMeth(C$, 'pollFirst$',  function () {
var f=this.first;
return (f == null ) ? null : p$1.unlinkFirst$java_util_LinkedList_Node.apply(this, [f]);
});

Clazz.newMeth(C$, 'pollLast$',  function () {
var l=this.last;
return (l == null ) ? null : p$1.unlinkLast$java_util_LinkedList_Node.apply(this, [l]);
});

Clazz.newMeth(C$, 'push$O',  function (e) {
this.addFirst$O(e);
});

Clazz.newMeth(C$, 'pop$',  function () {
return this.removeFirst$();
});

Clazz.newMeth(C$, 'removeFirstOccurrence$O',  function (o) {
return this.remove$O(o);
});

Clazz.newMeth(C$, 'removeLastOccurrence$O',  function (o) {
if (o == null ) {
for (var x=this.last; x != null ; x=x.prev) {
if (x.item == null ) {
this.unlink$java_util_LinkedList_Node(x);
return true;
}}
} else {
for (var x=this.last; x != null ; x=x.prev) {
if (o.equals$O(x.item)) {
this.unlink$java_util_LinkedList_Node(x);
return true;
}}
}return false;
});

Clazz.newMeth(C$, 'listIterator$I',  function (index) {
p$1.checkPositionIndex$I.apply(this, [index]);
return Clazz.new_($I$(2,1).c$$I,[this, null, index]);
});

Clazz.newMeth(C$, 'descendingIterator$',  function () {
return Clazz.new_($I$(5,1),[this, null]);
});

Clazz.newMeth(C$, 'superClone',  function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(6,1).c$$Throwable,[e]);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'clone$',  function () {
var clone=p$1.superClone.apply(this, []);
clone.first=clone.last=null;
clone.size=0;
clone.modCount=0;
for (var x=this.first; x != null ; x=x.next_) clone.add$O(x.item);

return clone;
});

Clazz.newMeth(C$, 'toArray$',  function () {
var result=Clazz.array(java.lang.Object, [this.size]);
var i=0;
for (var x=this.first; x != null ; x=x.next_) result[i++]=x.item;

return result;
});

Clazz.newMeth(C$, 'toArray$OA',  function (a) {
if (a.length < this.size) a=Clazz.array(a.getClass$().getComponentType$(), this.size);
var i=0;
var result=a;
for (var x=this.first; x != null ; x=x.next_) result[i++]=x.item;

if (a.length > this.size) a[this.size]=null;
return a;
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (s) {
s.defaultWriteObject$();
s.writeInt$I(this.size);
for (var x=this.first; x != null ; x=x.next_) s.writeObject$O(x.item);

}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
s.defaultReadObject$();
var size=s.readInt$();
for (var i=0; i < size; i++) this.linkLast$O(s.readObject$());

}, p$1);

Clazz.newMeth(C$, 'spliterator$',  function () {
return Clazz.new_($I$(8,1).c$$java_util_LinkedList$I$I,[this, -1, 0]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.LinkedList, "ListItr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.ListIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.expectedModCount=this.b$['java.util.LinkedList'].modCount;
},1);

C$.$fields$=[['I',['nextIndex','expectedModCount'],'O',['lastReturned','java.util.LinkedList.Node','+next']]]

Clazz.newMeth(C$, 'c$$I',  function (index) {
;C$.$init$.apply(this);
this.next=(index == this.b$['java.util.LinkedList'].size) ? null : this.b$['java.util.LinkedList'].node$I.apply(this.b$['java.util.LinkedList'], [index]);
this.nextIndex=index;
}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.nextIndex < this.b$['java.util.LinkedList'].size;
});

Clazz.newMeth(C$, 'next$',  function () {
this.checkForComodification$();
if (!this.hasNext$()) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
this.lastReturned=this.next;
this.next=this.next.next_;
++this.nextIndex;
return this.lastReturned.item;
});

Clazz.newMeth(C$, 'hasPrevious$',  function () {
return this.nextIndex > 0;
});

Clazz.newMeth(C$, 'previous$',  function () {
this.checkForComodification$();
if (!this.hasPrevious$()) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
this.lastReturned=this.next=(this.next == null ) ? this.b$['java.util.LinkedList'].last : this.next.prev;
--this.nextIndex;
return this.lastReturned.item;
});

Clazz.newMeth(C$, 'nextIndex$',  function () {
return this.nextIndex;
});

Clazz.newMeth(C$, 'previousIndex$',  function () {
return this.nextIndex - 1;
});

Clazz.newMeth(C$, 'remove$',  function () {
this.checkForComodification$();
if (this.lastReturned == null ) throw Clazz.new_(Clazz.load('IllegalStateException'));
var lastNext=this.lastReturned.next_;
this.b$['java.util.LinkedList'].unlink$java_util_LinkedList_Node.apply(this.b$['java.util.LinkedList'], [this.lastReturned]);
if (this.next === this.lastReturned ) this.next=lastNext;
 else --this.nextIndex;
this.lastReturned=null;
++this.expectedModCount;
});

Clazz.newMeth(C$, 'set$O',  function (e) {
if (this.lastReturned == null ) throw Clazz.new_(Clazz.load('IllegalStateException'));
this.checkForComodification$();
this.lastReturned.item=e;
});

Clazz.newMeth(C$, 'add$O',  function (e) {
this.checkForComodification$();
this.lastReturned=null;
if (this.next == null ) this.b$['java.util.LinkedList'].linkLast$O.apply(this.b$['java.util.LinkedList'], [e]);
 else this.b$['java.util.LinkedList'].linkBefore$O$java_util_LinkedList_Node.apply(this.b$['java.util.LinkedList'], [e, this.next]);
++this.nextIndex;
++this.expectedModCount;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
$I$(1).requireNonNull$O(action);
while (this.b$['java.util.LinkedList'].modCount == this.expectedModCount && this.nextIndex < this.b$['java.util.LinkedList'].size ){
action.accept$O(this.next.item);
this.lastReturned=this.next;
this.next=this.next.next_;
++this.nextIndex;
}
this.checkForComodification$();
});

Clazz.newMeth(C$, 'checkForComodification$',  function () {
if (this.b$['java.util.LinkedList'].modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LinkedList, "Node", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['item','<E>','next_','java.util.LinkedList.Node','+prev']]]

Clazz.newMeth(C$, 'c$$java_util_LinkedList_Node$O$java_util_LinkedList_Node',  function (prev, element, next) {
;C$.$init$.apply(this);
this.item=element;
this.next_=next;
this.prev=prev;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LinkedList, "DescendingIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.itr=Clazz.new_([this, null, this.b$['java.util.LinkedList'].size$.apply(this.b$['java.util.LinkedList'], [])],$I$(2,1).c$$I);
},1);

C$.$fields$=[['O',['itr','java.util.LinkedList.ListItr']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.itr.hasPrevious$();
});

Clazz.newMeth(C$, 'next$',  function () {
return this.itr.previous$();
});

Clazz.newMeth(C$, 'remove$',  function () {
this.itr.remove$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LinkedList, "LLSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Spliterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['est','expectedModCount','batch'],'O',['list','java.util.LinkedList','current','java.util.LinkedList.Node']]]

Clazz.newMeth(C$, 'c$$java_util_LinkedList$I$I',  function (list, est, expectedModCount) {
;C$.$init$.apply(this);
this.list=list;
this.est=est;
this.expectedModCount=expectedModCount;
}, 1);

Clazz.newMeth(C$, 'getEst$',  function () {
var s;
var lst;
if ((s=this.est) < 0) {
if ((lst=this.list) == null ) s=this.est=0;
 else {
this.expectedModCount=lst.modCount;
this.current=lst.first;
s=this.est=lst.size;
}}return s;
});

Clazz.newMeth(C$, 'estimateSize$',  function () {
return this.getEst$();
});

Clazz.newMeth(C$, 'trySplit$',  function () {
var p;
var s=this.getEst$();
if (s > 1 && (p=this.current) != null  ) {
var n=this.batch + 1024;
if (n > s) n=s;
if (n > 33554432) n=33554432;
var a=Clazz.array(java.lang.Object, [n]);
var j=0;
do {
a[j++]=p.item;
} while ((p=p.next_) != null  && j < n );
this.current=p;
this.batch=j;
this.est=s - j;
return $I$(3).spliterator$OA$I$I$I(a, 0, j, 16);
}return null;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
var p;
var n;
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if ((n=this.getEst$()) > 0 && (p=this.current) != null  ) {
this.current=null;
this.est=0;
do {
var e=p.item;
p=p.next_;
action.accept$O(e);
} while (p != null  && --n > 0 );
}if (this.list.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer',  function (action) {
var p;
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (this.getEst$() > 0 && (p=this.current) != null  ) {
--this.est;
var e=p.item;
this.current=p.next_;
action.accept$O(e);
if (this.list.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
return true;
}return false;
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return 16464;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:33 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
