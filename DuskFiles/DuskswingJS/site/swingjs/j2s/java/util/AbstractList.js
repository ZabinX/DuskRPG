(function(){var P$=java.util,p$1={},p$2={},I$=[[0,['java.util.AbstractList','.Itr'],['java.util.AbstractList','.ListItr'],'java.util.RandomAccessSubList','java.util.SubList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractList", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractCollection', 'java.util.List');
C$.$classes$=[['Itr',2],['ListItr',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.modCount=0;
},1);

C$.$fields$=[['I',['modCount']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'add$O',  function (e) {
this.add$I$O(this.size$(), e);
return true;
});

Clazz.newMeth(C$, 'set$I$O',  function (index, element) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'add$I$O',  function (index, element) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'remove$I',  function (index) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'indexOf$O',  function (o) {
var it=this.listIterator$();
if (o == null ) {
while (it.hasNext$())if (it.next$() == null ) return it.previousIndex$();

} else {
while (it.hasNext$())if (o.equals$O(it.next$())) return it.previousIndex$();

}return -1;
});

Clazz.newMeth(C$, 'lastIndexOf$O',  function (o) {
var it=this.listIterator$I(this.size$());
if (o == null ) {
while (it.hasPrevious$())if (it.previous$() == null ) return it.nextIndex$();

} else {
while (it.hasPrevious$())if (o.equals$O(it.previous$())) return it.nextIndex$();

}return -1;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.removeRange$I$I(0, this.size$());
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection',  function (index, c) {
p$1.rangeCheckForAdd$I.apply(this, [index]);
var modified=false;
for (var e, $e = c.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
this.add$I$O(index++, e);
modified=true;
}
return modified;
});

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(1,1),[this, null]);
});

Clazz.newMeth(C$, 'listIterator$',  function () {
return this.listIterator$I(0);
});

Clazz.newMeth(C$, 'listIterator$I',  function (index) {
p$1.rangeCheckForAdd$I.apply(this, [index]);
return Clazz.new_($I$(2,1).c$$I,[this, null, index]);
});

Clazz.newMeth(C$, 'subList$I$I',  function (fromIndex, toIndex) {
return (Clazz.instanceOf(this, "java.util.RandomAccess") ? Clazz.new_($I$(3,1).c$$java_util_AbstractList$I$I,[this, fromIndex, toIndex]) : Clazz.new_($I$(4,1).c$$java_util_AbstractList$I$I,[this, fromIndex, toIndex]));
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (o === this ) return true;
if (!(Clazz.instanceOf(o, "java.util.List"))) return false;
var e1=this.listIterator$();
var e2=(o).listIterator$();
while (e1.hasNext$() && e2.hasNext$() ){
var o1=e1.next$();
var o2=e2.next$();
if (!(o1 == null  ? o2 == null  : o1.equals$O(o2))) return false;
}
return !(e1.hasNext$() || e2.hasNext$() );
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var hashCode=1;
for (var e, $e = this.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) hashCode=(31 * hashCode + (e == null  ? 0 : e.hashCode$())) & -1;

return hashCode;
});

Clazz.newMeth(C$, 'removeRange$I$I',  function (fromIndex, toIndex) {
var it=this.listIterator$I(fromIndex);
for (var i=0, n=toIndex - fromIndex; i < n; i++) {
it.next$();
it.remove$();
}
});

Clazz.newMeth(C$, 'rangeCheckForAdd$I',  function (index) {
if (index < 0 || index > this.size$() ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[p$1.outOfBoundsMsg$I.apply(this, [index])]);
}, p$1);

Clazz.newMeth(C$, 'outOfBoundsMsg$I',  function (index) {
return "Index: " + index + ", Size: " + this.size$() ;
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractList, "Itr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cursor=0;
this.lastRet=-1;
this.expectedModCount=this.b$['java.util.AbstractList'].modCount;
},1);

C$.$fields$=[['I',['cursor','lastRet','expectedModCount']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.cursor != this.b$['java.util.AbstractCollection'].size$.apply(this.b$['java.util.AbstractCollection'], []);
});

Clazz.newMeth(C$, 'next$',  function () {
this.checkForComodification$();
try {
var i=this.cursor;
var next=this.b$['java.util.AbstractList'].get$I.apply(this.b$['java.util.AbstractList'], [i]);
this.lastRet=i;
this.cursor=i + 1;
return next;
} catch (e) {
if (Clazz.exceptionOf(e,"IndexOutOfBoundsException")){
this.checkForComodification$();
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'remove$',  function () {
if (this.lastRet < 0) throw Clazz.new_(Clazz.load('IllegalStateException'));
this.checkForComodification$();
try {
this.b$['java.util.AbstractList'].remove$I.apply(this.b$['java.util.AbstractList'], [this.lastRet]);
if (this.lastRet < this.cursor) --this.cursor;
this.lastRet=-1;
this.expectedModCount=this.b$['java.util.AbstractList'].modCount;
} catch (e) {
if (Clazz.exceptionOf(e,"IndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'checkForComodification$',  function () {
if (this.b$['java.util.AbstractList'].modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractList, "ListItr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.AbstractList','.Itr'], 'java.util.ListIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I',  function (index) {
Clazz.super_(C$, this);
this.cursor=index;
}, 1);

Clazz.newMeth(C$, 'hasPrevious$',  function () {
return this.cursor != 0;
});

Clazz.newMeth(C$, 'previous$',  function () {
this.checkForComodification$();
try {
var i=this.cursor - 1;
var previous=this.b$['java.util.AbstractList'].get$I.apply(this.b$['java.util.AbstractList'], [i]);
this.lastRet=this.cursor=i;
return previous;
} catch (e) {
if (Clazz.exceptionOf(e,"IndexOutOfBoundsException")){
this.checkForComodification$();
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'nextIndex$',  function () {
return this.cursor;
});

Clazz.newMeth(C$, 'previousIndex$',  function () {
return this.cursor - 1;
});

Clazz.newMeth(C$, 'set$O',  function (e) {
if (this.lastRet < 0) throw Clazz.new_(Clazz.load('IllegalStateException'));
this.checkForComodification$();
try {
this.b$['java.util.AbstractList'].set$I$O.apply(this.b$['java.util.AbstractList'], [this.lastRet, e]);
this.expectedModCount=this.b$['java.util.AbstractList'].modCount;
} catch (ex) {
if (Clazz.exceptionOf(ex,"IndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'add$O',  function (e) {
this.checkForComodification$();
try {
var i=this.cursor;
this.b$['java.util.AbstractList'].add$I$O.apply(this.b$['java.util.AbstractList'], [i, e]);
this.lastRet=-1;
this.cursor=i + 1;
this.expectedModCount=this.b$['java.util.AbstractList'].modCount;
} catch (ex) {
if (Clazz.exceptionOf(ex,"IndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
} else {
throw ex;
}
}
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
