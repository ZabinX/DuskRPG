(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'java.util.concurrent.atomic.AtomicReferenceFieldUpdater',['java.util.concurrent.ConcurrentLinkedQueue','.Node'],'java.util.ArrayList',['java.util.concurrent.ConcurrentLinkedQueue','.Itr']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ConcurrentLinkedQueue", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractQueue', ['java.util.Queue', 'java.io.Serializable']);
C$.$classes$=[['Node',10],['Itr',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.head=Clazz.new_($I$(2,1).c$$O$java_util_concurrent_ConcurrentLinkedQueue_Node,[null, null]);
this.tail=this.head;
},1);

C$.$fields$=[['O',['head','java.util.concurrent.ConcurrentLinkedQueue.Node','+tail']]
,['O',['tailUpdater','java.util.concurrent.atomic.AtomicReferenceFieldUpdater','+headUpdater']]]

Clazz.newMeth(C$, 'casTail$java_util_concurrent_ConcurrentLinkedQueue_Node$java_util_concurrent_ConcurrentLinkedQueue_Node',  function (cmp, val) {
return C$.tailUpdater.compareAndSet$O$O$O(this, cmp, val);
}, p$1);

Clazz.newMeth(C$, 'casHead$java_util_concurrent_ConcurrentLinkedQueue_Node$java_util_concurrent_ConcurrentLinkedQueue_Node',  function (cmp, val) {
return C$.headUpdater.compareAndSet$O$O$O(this, cmp, val);
}, p$1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection',  function (c) {
Clazz.super_(C$, this);
for (var it=c.iterator$(); it.hasNext$(); ) this.add$O(it.next$());

}, 1);

Clazz.newMeth(C$, 'add$O',  function (e) {
return this.offer$O(e);
});

Clazz.newMeth(C$, 'offer$O',  function (e) {
if (e == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var n=Clazz.new_($I$(2,1).c$$O$java_util_concurrent_ConcurrentLinkedQueue_Node,[e, null]);
for (; ; ) {
var t=this.tail;
var s=t.getNext$();
if (t === this.tail ) {
if (s == null ) {
if (t.casNext$java_util_concurrent_ConcurrentLinkedQueue_Node$java_util_concurrent_ConcurrentLinkedQueue_Node(s, n)) {
p$1.casTail$java_util_concurrent_ConcurrentLinkedQueue_Node$java_util_concurrent_ConcurrentLinkedQueue_Node.apply(this, [t, n]);
return true;
}} else {
p$1.casTail$java_util_concurrent_ConcurrentLinkedQueue_Node$java_util_concurrent_ConcurrentLinkedQueue_Node.apply(this, [t, s]);
}}}
});

Clazz.newMeth(C$, 'poll$',  function () {
for (; ; ) {
var h=this.head;
var t=this.tail;
var first=h.getNext$();
if (h === this.head ) {
if (h === t ) {
if (first == null ) return null;
 else p$1.casTail$java_util_concurrent_ConcurrentLinkedQueue_Node$java_util_concurrent_ConcurrentLinkedQueue_Node.apply(this, [t, first]);
} else if (p$1.casHead$java_util_concurrent_ConcurrentLinkedQueue_Node$java_util_concurrent_ConcurrentLinkedQueue_Node.apply(this, [h, first])) {
var item=first.getItem$();
if (item != null ) {
first.setItem$O(null);
return item;
}}}}
});

Clazz.newMeth(C$, 'peek$',  function () {
for (; ; ) {
var h=this.head;
var t=this.tail;
var first=h.getNext$();
if (h === this.head ) {
if (h === t ) {
if (first == null ) return null;
 else p$1.casTail$java_util_concurrent_ConcurrentLinkedQueue_Node$java_util_concurrent_ConcurrentLinkedQueue_Node.apply(this, [t, first]);
} else {
var item=first.getItem$();
if (item != null ) return item;
 else p$1.casHead$java_util_concurrent_ConcurrentLinkedQueue_Node$java_util_concurrent_ConcurrentLinkedQueue_Node.apply(this, [h, first]);
}}}
});

Clazz.newMeth(C$, 'first$',  function () {
for (; ; ) {
var h=this.head;
var t=this.tail;
var first=h.getNext$();
if (h === this.head ) {
if (h === t ) {
if (first == null ) return null;
 else p$1.casTail$java_util_concurrent_ConcurrentLinkedQueue_Node$java_util_concurrent_ConcurrentLinkedQueue_Node.apply(this, [t, first]);
} else {
if (first.getItem$() != null ) return first;
 else p$1.casHead$java_util_concurrent_ConcurrentLinkedQueue_Node$java_util_concurrent_ConcurrentLinkedQueue_Node.apply(this, [h, first]);
}}}
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.first$() == null ;
});

Clazz.newMeth(C$, 'size$',  function () {
var count=0;
for (var p=this.first$(); p != null ; p=p.getNext$()) {
if (p.getItem$() != null ) {
if (++count == 2147483647) break;
}}
return count;
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
if (o == null ) return false;
for (var p=this.first$(); p != null ; p=p.getNext$()) {
var item=p.getItem$();
if (item != null  && o.equals$O(item) ) return true;
}
return false;
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
if (o == null ) return false;
for (var p=this.first$(); p != null ; p=p.getNext$()) {
var item=p.getItem$();
if (item != null  && o.equals$O(item)  && p.casItem$O$O(item, null) ) return true;
}
return false;
});

Clazz.newMeth(C$, 'toArray$',  function () {
var al=Clazz.new_($I$(3,1));
for (var p=this.first$(); p != null ; p=p.getNext$()) {
var item=p.getItem$();
if (item != null ) al.add$O(item);
}
return al.toArray$();
});

Clazz.newMeth(C$, 'toArray$OA',  function (a) {
var k=0;
var p;
for (p=this.first$(); p != null  && k < a.length ; p=p.getNext$()) {
var item=p.getItem$();
if (item != null ) a[k++]=item;
}
if (p == null ) {
if (k < a.length) a[k]=null;
return a;
}var al=Clazz.new_($I$(3,1));
for (var q=this.first$(); q != null ; q=q.getNext$()) {
var item=q.getItem$();
if (item != null ) al.add$O(item);
}
return al.toArray$OA(a);
});

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(4,1),[this, null]);
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (s) {
s.defaultWriteObject$();
for (var p=this.first$(); p != null ; p=p.getNext$()) {
var item=p.getItem$();
if (item != null ) s.writeObject$O(item);
}
s.writeObject$O(null);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
s.defaultReadObject$();
this.head=Clazz.new_($I$(2,1).c$$O$java_util_concurrent_ConcurrentLinkedQueue_Node,[null, null]);
this.tail=this.head;
for (; ; ) {
var item=s.readObject$();
if (item == null ) break;
 else this.offer$O(item);
}
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.tailUpdater=$I$(1,"newUpdater$Class$Class$S",[Clazz.getClass(C$), Clazz.getClass($I$(2)), "tail"]);
C$.headUpdater=$I$(1,"newUpdater$Class$Class$S",[Clazz.getClass(C$), Clazz.getClass($I$(2)), "head"]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ConcurrentLinkedQueue, "Node", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['item','<E>','next','java.util.concurrent.ConcurrentLinkedQueue.Node']]
,['O',['nextUpdater','java.util.concurrent.atomic.AtomicReferenceFieldUpdater','+itemUpdater']]]

Clazz.newMeth(C$, 'c$$O$java_util_concurrent_ConcurrentLinkedQueue_Node',  function (x, n) {
;C$.$init$.apply(this);
this.item=x;
this.next=n;
}, 1);

Clazz.newMeth(C$, 'getItem$',  function () {
return this.item;
});

Clazz.newMeth(C$, 'casItem$O$O',  function (cmp, val) {
return C$.itemUpdater.compareAndSet$O$O$O(this, cmp, val);
});

Clazz.newMeth(C$, 'setItem$O',  function (val) {
C$.itemUpdater.set$O$O(this, val);
});

Clazz.newMeth(C$, 'getNext$',  function () {
return this.next;
});

Clazz.newMeth(C$, 'casNext$java_util_concurrent_ConcurrentLinkedQueue_Node$java_util_concurrent_ConcurrentLinkedQueue_Node',  function (cmp, val) {
return C$.nextUpdater.compareAndSet$O$O$O(this, cmp, val);
});

Clazz.newMeth(C$, 'setNext$java_util_concurrent_ConcurrentLinkedQueue_Node',  function (val) {
C$.nextUpdater.set$O$O(this, val);
});

C$.$static$=function(){C$.$static$=0;
C$.nextUpdater=$I$(1,"newUpdater$Class$Class$S",[Clazz.getClass(C$), Clazz.getClass(C$), "next"]);
C$.itemUpdater=$I$(1,"newUpdater$Class$Class$S",[Clazz.getClass(C$), Clazz.getClass(java.lang.Object), "item"]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ConcurrentLinkedQueue, "Itr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['nextNode','java.util.concurrent.ConcurrentLinkedQueue.Node','nextItem','<E>','lastRet','java.util.concurrent.ConcurrentLinkedQueue.Node']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
p$1.advance.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'advance',  function () {
this.lastRet=this.nextNode;
var x=this.nextItem;
var p=(this.nextNode == null ) ? this.b$['java.util.concurrent.ConcurrentLinkedQueue'].first$.apply(this.b$['java.util.concurrent.ConcurrentLinkedQueue'], []) : this.nextNode.getNext$();
for (; ; ) {
if (p == null ) {
this.nextNode=null;
this.nextItem=null;
return x;
}var item=p.getItem$();
if (item != null ) {
this.nextNode=p;
this.nextItem=item;
return x;
} else p=p.getNext$();
}
}, p$1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.nextNode != null ;
});

Clazz.newMeth(C$, 'next$',  function () {
if (this.nextNode == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
return p$1.advance.apply(this, []);
});

Clazz.newMeth(C$, 'remove$',  function () {
var l=this.lastRet;
if (l == null ) throw Clazz.new_(Clazz.load('IllegalStateException'));
l.setItem$O(null);
this.lastRet=null;
});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:36 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
