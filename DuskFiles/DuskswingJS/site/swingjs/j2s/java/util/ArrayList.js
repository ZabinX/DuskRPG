(function(){var P$=java.util,p$1={},p$2={},I$=[[0,'java.util.Objects','java.util.ArrayList',['java.util.ArrayList','.ArrayListSpliterator'],'java.util.Arrays','OutOfMemoryError','InternalError',['java.util.ArrayList','.ListItr'],['java.util.ArrayList','.Itr'],['java.util.ArrayList','.SubList'],'java.util.BitSet']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ArrayList", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractList', ['java.util.List', 'java.util.RandomAccess', 'Cloneable', 'java.io.Serializable']);
C$.$classes$=[['Itr',2],['ListItr',2],['SubList',2],['ArrayListSpliterator',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['size'],'O',['+elementData']]
,['O',['EMPTY_ELEMENTDATA','Object[]','+DEFAULTCAPACITY_EMPTY_ELEMENTDATA']]]

Clazz.newMeth(C$, 'c$$I',  function (initialCapacity) {
Clazz.super_(C$, this);
if (initialCapacity > 0) {
this.elementData=Clazz.array(java.lang.Object, [initialCapacity]);
} else if (initialCapacity == 0) {
this.elementData=C$.EMPTY_ELEMENTDATA;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal Capacity: " + initialCapacity]);
}}, 1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.elementData=C$.DEFAULTCAPACITY_EMPTY_ELEMENTDATA;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection',  function (c) {
Clazz.super_(C$, this);
this.elementData=c.toArray$();
if ((this.size=this.elementData.length) != 0) {
if (this.elementData.getClass$() !== Clazz.array(java.lang.Object, -1) ) this.elementData=$I$(4,"copyOf$OA$I$Class",[this.elementData, this.size, Clazz.array(java.lang.Object, -1)]);
} else {
this.elementData=C$.EMPTY_ELEMENTDATA;
}}, 1);

Clazz.newMeth(C$, 'trimToSize$',  function () {
++this.modCount;
if (this.size < this.elementData.length) {
this.elementData=(this.size == 0) ? C$.EMPTY_ELEMENTDATA : $I$(4).copyOf$OA$I(this.elementData, this.size);
}});

Clazz.newMeth(C$, 'ensureCapacity$I',  function (minCapacity) {
var minExpand=(this.elementData !== C$.DEFAULTCAPACITY_EMPTY_ELEMENTDATA ) ? 0 : 10;
if (minCapacity > minExpand) {
p$1.ensureExplicitCapacity$I.apply(this, [minCapacity]);
}});

Clazz.newMeth(C$, 'ensureCapacityInternal$I',  function (minCapacity) {
if (this.elementData === C$.DEFAULTCAPACITY_EMPTY_ELEMENTDATA ) {
minCapacity=Math.max(10, minCapacity);
}p$1.ensureExplicitCapacity$I.apply(this, [minCapacity]);
}, p$1);

Clazz.newMeth(C$, 'ensureExplicitCapacity$I',  function (minCapacity) {
++this.modCount;
if (minCapacity - this.elementData.length > 0) p$1.grow$I.apply(this, [minCapacity]);
}, p$1);

Clazz.newMeth(C$, 'grow$I',  function (minCapacity) {
var oldCapacity=this.elementData.length;
var newCapacity=oldCapacity + (oldCapacity >> 1);
if (newCapacity - minCapacity < 0) newCapacity=minCapacity;
if (newCapacity - 2147483639 > 0) newCapacity=C$.hugeCapacity$I(minCapacity);
this.elementData=$I$(4).copyOf$OA$I(this.elementData, newCapacity);
}, p$1);

Clazz.newMeth(C$, 'hugeCapacity$I',  function (minCapacity) {
if (minCapacity < 0) throw Clazz.new_($I$(5,1));
return (minCapacity > 2147483639) ? 2147483647 : 2147483639;
}, 1);

Clazz.newMeth(C$, 'size$',  function () {
return this.size;
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.size == 0;
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
return this.indexOf$O(o) >= 0;
});

Clazz.newMeth(C$, 'indexOf$O',  function (o) {
if (o == null ) {
for (var i=0; i < this.size; i++) if (this.elementData[i] == null ) return i;

} else {
for (var i=0; i < this.size; i++) if (o.equals$O(this.elementData[i])) return i;

}return -1;
});

Clazz.newMeth(C$, 'lastIndexOf$O',  function (o) {
if (o == null ) {
for (var i=this.size - 1; i >= 0; i--) if (this.elementData[i] == null ) return i;

} else {
for (var i=this.size - 1; i >= 0; i--) if (o.equals$O(this.elementData[i])) return i;

}return -1;
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
var v=Clazz.clone(this);
v.elementData=$I$(4).copyOf$OA$I(this.elementData, this.size);
v.modCount=0;
return v;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(6,1).c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'toArray$',  function () {
return $I$(4).copyOf$OA$I(this.elementData, this.size);
});

Clazz.newMeth(C$, 'toArray$OA',  function (a) {
if (a.length < this.size) return $I$(4,"copyOf$OA$I$Class",[this.elementData, this.size, a.getClass$()]);
System.arraycopy$O$I$O$I$I(this.elementData, 0, a, 0, this.size);
if (a.length > this.size) a[this.size]=null;
return a;
});

Clazz.newMeth(C$, 'elementData$I',  function (index) {
return this.elementData[index];
});

Clazz.newMeth(C$, 'get$I',  function (index) {
p$1.rangeCheck$I.apply(this, [index]);
return this.elementData$I(index);
});

Clazz.newMeth(C$, 'set$I$O',  function (index, element) {
p$1.rangeCheck$I.apply(this, [index]);
var oldValue=this.elementData$I(index);
this.elementData[index]=element;
return oldValue;
});

Clazz.newMeth(C$, 'add$O',  function (e) {
p$1.ensureCapacityInternal$I.apply(this, [this.size + 1]);
this.elementData[this.size++]=e;
return true;
});

Clazz.newMeth(C$, 'add$I$O',  function (index, element) {
p$1.rangeCheckForAdd$I.apply(this, [index]);
p$1.ensureCapacityInternal$I.apply(this, [this.size + 1]);
System.arraycopy$O$I$O$I$I(this.elementData, index, this.elementData, index + 1, this.size - index);
this.elementData[index]=element;
++this.size;
});

Clazz.newMeth(C$, 'remove$I',  function (index) {
p$1.rangeCheck$I.apply(this, [index]);
++this.modCount;
var oldValue=this.elementData$I(index);
var numMoved=this.size - index - 1 ;
if (numMoved > 0) System.arraycopy$O$I$O$I$I(this.elementData, index + 1, this.elementData, index, numMoved);
this.elementData[--this.size]=null;
return oldValue;
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
if (o == null ) {
for (var index=0; index < this.size; index++) if (this.elementData[index] == null ) {
p$1.fastRemove$I.apply(this, [index]);
return true;
}
} else {
for (var index=0; index < this.size; index++) if (o.equals$O(this.elementData[index])) {
p$1.fastRemove$I.apply(this, [index]);
return true;
}
}return false;
});

Clazz.newMeth(C$, 'fastRemove$I',  function (index) {
++this.modCount;
var numMoved=this.size - index - 1 ;
if (numMoved > 0) System.arraycopy$O$I$O$I$I(this.elementData, index + 1, this.elementData, index, numMoved);
this.elementData[--this.size]=null;
}, p$1);

Clazz.newMeth(C$, 'clear$',  function () {
++this.modCount;
for (var i=0; i < this.size; i++) this.elementData[i]=null;

this.size=0;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection',  function (c) {
var a=c.toArray$();
var numNew=a.length;
p$1.ensureCapacityInternal$I.apply(this, [this.size + numNew]);
System.arraycopy$O$I$O$I$I(a, 0, this.elementData, this.size, numNew);
this.size+=numNew;
return numNew != 0;
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection',  function (index, c) {
p$1.rangeCheckForAdd$I.apply(this, [index]);
var a=c.toArray$();
var numNew=a.length;
p$1.ensureCapacityInternal$I.apply(this, [this.size + numNew]);
var numMoved=this.size - index;
if (numMoved > 0) System.arraycopy$O$I$O$I$I(this.elementData, index, this.elementData, index + numNew, numMoved);
System.arraycopy$O$I$O$I$I(a, 0, this.elementData, index, numNew);
this.size+=numNew;
return numNew != 0;
});

Clazz.newMeth(C$, 'removeRange$I$I',  function (fromIndex, toIndex) {
++this.modCount;
var numMoved=this.size - toIndex;
System.arraycopy$O$I$O$I$I(this.elementData, toIndex, this.elementData, fromIndex, numMoved);
var newSize=this.size - (toIndex - fromIndex);
for (var i=newSize; i < this.size; i++) {
this.elementData[i]=null;
}
this.size=newSize;
});

Clazz.newMeth(C$, 'rangeCheck$I',  function (index) {
if (index >= this.size) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[p$1.outOfBoundsMsg$I.apply(this, [index])]);
}, p$1);

Clazz.newMeth(C$, 'rangeCheckForAdd$I',  function (index) {
if (index > this.size || index < 0 ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[p$1.outOfBoundsMsg$I.apply(this, [index])]);
}, p$1);

Clazz.newMeth(C$, 'outOfBoundsMsg$I',  function (index) {
return "Index: " + index + ", Size: " + this.size ;
}, p$1);

Clazz.newMeth(C$, 'removeAll$java_util_Collection',  function (c) {
$I$(1).requireNonNull$O(c);
return p$1.batchRemove$java_util_Collection$Z.apply(this, [c, false]);
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection',  function (c) {
$I$(1).requireNonNull$O(c);
return p$1.batchRemove$java_util_Collection$Z.apply(this, [c, true]);
});

Clazz.newMeth(C$, 'batchRemove$java_util_Collection$Z',  function (c, complement) {
var elementData=this.elementData;
var r=0;
var w=0;
var modified=false;
try {
for (; r < this.size; r++) if (c.contains$O(elementData[r]) == complement ) elementData[w++]=elementData[r];

} finally {
if (r != this.size) {
System.arraycopy$O$I$O$I$I(elementData, r, elementData, w, this.size - r);
w+=this.size - r;
}if (w != this.size) {
for (var i=w; i < this.size; i++) elementData[i]=null;

this.modCount+=this.size - w;
this.size=w;
modified=true;
}}
return modified;
}, p$1);

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (s) {
var expectedModCount=this.modCount;
s.defaultWriteObject$();
s.writeInt$I(this.size);
for (var i=0; i < this.size; i++) {
s.writeObject$O(this.elementData[i]);
}
if (this.modCount != expectedModCount) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
this.elementData=C$.EMPTY_ELEMENTDATA;
s.defaultReadObject$();
s.readInt$();
if (this.size > 0) {
p$1.ensureCapacityInternal$I.apply(this, [this.size]);
var a=this.elementData;
for (var i=0; i < this.size; i++) {
a[i]=s.readObject$();
}
}}, p$1);

Clazz.newMeth(C$, 'listIterator$I',  function (index) {
if (index < 0 || index > this.size ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Index: " + index]);
return Clazz.new_($I$(7,1).c$$I,[this, null, index]);
});

Clazz.newMeth(C$, 'listIterator$',  function () {
return Clazz.new_($I$(7,1).c$$I,[this, null, 0]);
});

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(8,1),[this, null]);
});

Clazz.newMeth(C$, 'subList$I$I',  function (fromIndex, toIndex) {
C$.subListRangeCheck$I$I$I(fromIndex, toIndex, this.size);
return Clazz.new_($I$(9,1).c$$java_util_AbstractList$I$I$I,[this, null, this, 0, fromIndex, toIndex]);
});

Clazz.newMeth(C$, 'subListRangeCheck$I$I$I',  function (fromIndex, toIndex, size) {
if (fromIndex < 0) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["fromIndex = " + fromIndex]);
if (toIndex > size) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["toIndex = " + toIndex]);
if (fromIndex > toIndex) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["fromIndex(" + fromIndex + ") > toIndex(" + toIndex + ")" ]);
}, 1);

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer',  function (action) {
$I$(1).requireNonNull$O(action);
var expectedModCount=this.modCount;
var elementData=this.elementData;
var size=this.size;
for (var i=0; this.modCount == expectedModCount && i < size ; i++) {
action.accept$O(elementData[i]);
}
if (this.modCount != expectedModCount) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}});

Clazz.newMeth(C$, 'spliterator$',  function () {
return Clazz.new_($I$(3,1).c$$java_util_ArrayList$I$I$I,[this, 0, -1, 0]);
});

Clazz.newMeth(C$, 'removeIf$java_util_function_Predicate',  function (filter) {
$I$(1).requireNonNull$O(filter);
var removeCount=0;
var removeSet=Clazz.new_($I$(10,1).c$$I,[this.size]);
var expectedModCount=this.modCount;
var size=this.size;
for (var i=0; this.modCount == expectedModCount && i < size ; i++) {
var element=this.elementData[i];
if (filter.test$O(element)) {
removeSet.set$I(i);
++removeCount;
}}
if (this.modCount != expectedModCount) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}var anyToRemove=removeCount > 0;
if (anyToRemove) {
var newSize=size - removeCount;
for (var i=0, j=0; (i < size) && (j < newSize) ; i++, j++) {
i=removeSet.nextClearBit$I(i);
this.elementData[j]=this.elementData[i];
}
for (var k=newSize; k < size; k++) {
this.elementData[k]=null;
}
this.size=newSize;
if (this.modCount != expectedModCount) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}++this.modCount;
}return anyToRemove;
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_UnaryOperator',  function (operator) {
$I$(1).requireNonNull$O(operator);
var expectedModCount=this.modCount;
var size=this.size;
for (var i=0; this.modCount == expectedModCount && i < size ; i++) {
this.elementData[i]=operator.apply$O(this.elementData[i]);
}
if (this.modCount != expectedModCount) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}++this.modCount;
});

Clazz.newMeth(C$, 'sort$java_util_Comparator',  function (c) {
var expectedModCount=this.modCount;
$I$(4).sort$OA$I$I$java_util_Comparator(this.elementData, 0, this.size, c);
if (this.modCount != expectedModCount) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}++this.modCount;
});

C$.$static$=function(){C$.$static$=0;
C$.EMPTY_ELEMENTDATA=Clazz.array(java.lang.Object, -1, []);
C$.DEFAULTCAPACITY_EMPTY_ELEMENTDATA=Clazz.array(java.lang.Object, -1, []);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayList, "Itr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lastRet=-1;
this.expectedModCount=this.b$['java.util.ArrayList'].modCount;
},1);

C$.$fields$=[['I',['cursor','lastRet','expectedModCount']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.cursor != this.b$['java.util.ArrayList'].size;
});

Clazz.newMeth(C$, 'next$',  function () {
this.checkForComodification$();
var i=this.cursor;
if (i >= this.b$['java.util.ArrayList'].size) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
var elementData=this.b$['java.util.ArrayList'].elementData;
if (i >= elementData.length) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
this.cursor=i + 1;
return elementData[this.lastRet=i];
});

Clazz.newMeth(C$, 'remove$',  function () {
if (this.lastRet < 0) throw Clazz.new_(Clazz.load('IllegalStateException'));
this.checkForComodification$();
try {
this.b$['java.util.ArrayList'].remove$I.apply(this.b$['java.util.ArrayList'], [this.lastRet]);
this.cursor=this.lastRet;
this.lastRet=-1;
this.expectedModCount=this.b$['java.util.ArrayList'].modCount;
} catch (ex) {
if (Clazz.exceptionOf(ex,"IndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (consumer) {
$I$(1).requireNonNull$O(consumer);
var size=this.b$['java.util.ArrayList'].size;
var i=this.cursor;
if (i >= size) {
return;
}var elementData=this.b$['java.util.ArrayList'].elementData;
if (i >= elementData.length) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}while (i != size && this.b$['java.util.ArrayList'].modCount == this.expectedModCount ){
consumer.accept$O(elementData[i++]);
}
this.cursor=i;
this.lastRet=i - 1;
this.checkForComodification$();
});

Clazz.newMeth(C$, 'checkForComodification$',  function () {
if (this.b$['java.util.ArrayList'].modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayList, "ListItr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.ArrayList','.Itr'], 'java.util.ListIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I',  function (index) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.cursor=index;
}, 1);

Clazz.newMeth(C$, 'hasPrevious$',  function () {
return this.cursor != 0;
});

Clazz.newMeth(C$, 'nextIndex$',  function () {
return this.cursor;
});

Clazz.newMeth(C$, 'previousIndex$',  function () {
return this.cursor - 1;
});

Clazz.newMeth(C$, 'previous$',  function () {
this.checkForComodification$();
var i=this.cursor - 1;
if (i < 0) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
var elementData=this.b$['java.util.ArrayList'].elementData;
if (i >= elementData.length) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
this.cursor=i;
return elementData[this.lastRet=i];
});

Clazz.newMeth(C$, 'set$O',  function (e) {
if (this.lastRet < 0) throw Clazz.new_(Clazz.load('IllegalStateException'));
this.checkForComodification$();
try {
this.b$['java.util.ArrayList'].set$I$O.apply(this.b$['java.util.ArrayList'], [this.lastRet, e]);
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
this.b$['java.util.ArrayList'].add$I$O.apply(this.b$['java.util.ArrayList'], [i, e]);
this.cursor=i + 1;
this.lastRet=-1;
this.expectedModCount=this.b$['java.util.ArrayList'].modCount;
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
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayList, "SubList", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractList', 'java.util.RandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['parentOffset','offset','size'],'O',['parent','java.util.AbstractList']]]

Clazz.newMeth(C$, 'c$$java_util_AbstractList$I$I$I',  function (parent, offset, fromIndex, toIndex) {
Clazz.super_(C$, this);
this.parent=parent;
this.parentOffset=fromIndex;
this.offset=offset + fromIndex;
this.size=toIndex - fromIndex;
this.modCount=this.b$['java.util.ArrayList'].modCount;
}, 1);

Clazz.newMeth(C$, 'set$I$O',  function (index, e) {
p$1.rangeCheck$I.apply(this, [index]);
p$1.checkForComodification.apply(this, []);
var oldValue=this.b$['java.util.ArrayList'].elementData$I.apply(this.b$['java.util.ArrayList'], [this.offset + index]);
this.b$['java.util.ArrayList'].elementData[this.offset + index]=e;
return oldValue;
});

Clazz.newMeth(C$, 'get$I',  function (index) {
p$1.rangeCheck$I.apply(this, [index]);
p$1.checkForComodification.apply(this, []);
return this.b$['java.util.ArrayList'].elementData$I.apply(this.b$['java.util.ArrayList'], [this.offset + index]);
});

Clazz.newMeth(C$, 'size$',  function () {
p$1.checkForComodification.apply(this, []);
return this.size;
});

Clazz.newMeth(C$, 'add$I$O',  function (index, e) {
p$1.rangeCheckForAdd$I.apply(this, [index]);
p$1.checkForComodification.apply(this, []);
this.parent.add$I$O(this.parentOffset + index, e);
this.modCount=this.parent.modCount;
++this.size;
});

Clazz.newMeth(C$, 'remove$I',  function (index) {
p$1.rangeCheck$I.apply(this, [index]);
p$1.checkForComodification.apply(this, []);
var result=this.parent.remove$I(this.parentOffset + index);
this.modCount=this.parent.modCount;
--this.size;
return result;
});

Clazz.newMeth(C$, 'removeRange$I$I',  function (fromIndex, toIndex) {
p$1.checkForComodification.apply(this, []);
this.parent.removeRange$I$I(this.parentOffset + fromIndex, this.parentOffset + toIndex);
this.modCount=this.parent.modCount;
this.size-=toIndex - fromIndex;
});

Clazz.newMeth(C$, 'addAll$java_util_Collection',  function (c) {
return this.addAll$I$java_util_Collection(this.size, c);
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection',  function (index, c) {
p$1.rangeCheckForAdd$I.apply(this, [index]);
var cSize=c.size$();
if (cSize == 0) return false;
p$1.checkForComodification.apply(this, []);
this.parent.addAll$I$java_util_Collection(this.parentOffset + index, c);
this.modCount=this.parent.modCount;
this.size+=cSize;
return true;
});

Clazz.newMeth(C$, 'iterator$',  function () {
return this.listIterator$();
});

Clazz.newMeth(C$, 'listIterator$I',  function (index) {
p$1.checkForComodification.apply(this, []);
p$1.rangeCheckForAdd$I.apply(this, [index]);
var offset=this.offset;
return ((P$.ArrayList$SubList$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ArrayList$SubList$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.ListIterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cursor=index;
this.lastRet=-1;
this.expectedModCount=this.b$['java.util.ArrayList'].modCount;
},1);

C$.$fields$=[['I',['cursor','lastRet','expectedModCount']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.cursor != this.b$['java.util.ArrayList.SubList'].size;
});

Clazz.newMeth(C$, 'next$',  function () {
this.checkForComodification$();
var i=this.cursor;
if (i >= this.b$['java.util.ArrayList.SubList'].size) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
var elementData=this.b$['java.util.ArrayList'].elementData;
if (this.$finals$.offset + i >= elementData.length) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
this.cursor=i + 1;
return elementData[this.$finals$.offset + (this.lastRet=i)];
});

Clazz.newMeth(C$, 'hasPrevious$',  function () {
return this.cursor != 0;
});

Clazz.newMeth(C$, 'previous$',  function () {
this.checkForComodification$();
var i=this.cursor - 1;
if (i < 0) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
var elementData=this.b$['java.util.ArrayList'].elementData;
if (this.$finals$.offset + i >= elementData.length) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
this.cursor=i;
return elementData[this.$finals$.offset + (this.lastRet=i)];
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (consumer) {
$I$(1).requireNonNull$O(consumer);
var size=this.b$['java.util.ArrayList.SubList'].size;
var i=this.cursor;
if (i >= size) {
return;
}var elementData=this.b$['java.util.ArrayList'].elementData;
if (this.$finals$.offset + i >= elementData.length) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}while (i != size && this.b$['java.util.ArrayList.SubList'].modCount == this.expectedModCount ){
consumer.accept$O(elementData[this.$finals$.offset + (i++)]);
}
this.lastRet=this.cursor=i;
this.checkForComodification$();
});

Clazz.newMeth(C$, 'nextIndex$',  function () {
return this.cursor;
});

Clazz.newMeth(C$, 'previousIndex$',  function () {
return this.cursor - 1;
});

Clazz.newMeth(C$, 'remove$',  function () {
if (this.lastRet < 0) throw Clazz.new_(Clazz.load('IllegalStateException'));
this.checkForComodification$();
try {
this.b$['java.util.ArrayList.SubList'].remove$I.apply(this.b$['java.util.ArrayList.SubList'], [this.lastRet]);
this.cursor=this.lastRet;
this.lastRet=-1;
this.expectedModCount=this.b$['java.util.ArrayList'].modCount;
} catch (ex) {
if (Clazz.exceptionOf(ex,"IndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'set$O',  function (e) {
if (this.lastRet < 0) throw Clazz.new_(Clazz.load('IllegalStateException'));
this.checkForComodification$();
try {
this.b$['java.util.ArrayList'].set$I$O.apply(this.b$['java.util.ArrayList'], [this.$finals$.offset + this.lastRet, e]);
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
this.b$['java.util.ArrayList.SubList'].add$I$O.apply(this.b$['java.util.ArrayList.SubList'], [i, e]);
this.cursor=i + 1;
this.lastRet=-1;
this.expectedModCount=this.b$['java.util.ArrayList'].modCount;
} catch (ex) {
if (Clazz.exceptionOf(ex,"IndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
} else {
throw ex;
}
}
});

Clazz.newMeth(C$, 'checkForComodification$',  function () {
if (this.expectedModCount != this.b$['java.util.ArrayList'].modCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});
})()
), Clazz.new_(P$.ArrayList$SubList$1.$init$,[this, {offset:offset}]));
});

Clazz.newMeth(C$, 'subList$I$I',  function (fromIndex, toIndex) {
$I$(2).subListRangeCheck$I$I$I(fromIndex, toIndex, this.size);
return Clazz.new_(C$.c$$java_util_AbstractList$I$I$I,[this, null, this, this.offset, fromIndex, toIndex]);
});

Clazz.newMeth(C$, 'rangeCheck$I',  function (index) {
if (index < 0 || index >= this.size ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[p$1.outOfBoundsMsg$I.apply(this, [index])]);
}, p$1);

Clazz.newMeth(C$, 'rangeCheckForAdd$I',  function (index) {
if (index < 0 || index > this.size ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[p$1.outOfBoundsMsg$I.apply(this, [index])]);
}, p$1);

Clazz.newMeth(C$, 'outOfBoundsMsg$I',  function (index) {
return "Index: " + index + ", Size: " + this.size ;
}, p$1);

Clazz.newMeth(C$, 'checkForComodification',  function () {
if (this.b$['java.util.ArrayList'].modCount != this.modCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}, p$1);

Clazz.newMeth(C$, 'spliterator$',  function () {
p$1.checkForComodification.apply(this, []);
return Clazz.new_($I$(3,1).c$$java_util_ArrayList$I$I$I,[this.b$['java.util.ArrayList'], this.offset, this.offset + this.size, this.modCount]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ArrayList, "ArrayListSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Spliterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index','fence','expectedModCount'],'O',['list','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$java_util_ArrayList$I$I$I',  function (list, origin, fence, expectedModCount) {
;C$.$init$.apply(this);
this.list=list;
this.index=origin;
this.fence=fence;
this.expectedModCount=expectedModCount;
}, 1);

Clazz.newMeth(C$, 'getFence',  function () {
var hi;
var lst;
if ((hi=this.fence) < 0) {
if ((lst=this.list) == null ) hi=this.fence=0;
 else {
this.expectedModCount=lst.modCount;
hi=this.fence=lst.size;
}}return hi;
}, p$2);

Clazz.newMeth(C$, 'trySplit$',  function () {
var hi=p$2.getFence.apply(this, []);
var lo=this.index;
var mid=(lo + hi) >>> 1;
return (lo >= mid) ? null : Clazz.new_(C$.c$$java_util_ArrayList$I$I$I,[this.list, lo, this.index=mid, this.expectedModCount]);
});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer',  function (action) {
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var hi=p$2.getFence.apply(this, []);
var i=this.index;
if (i < hi) {
this.index=i + 1;
var e=this.list.elementData[i];
action.accept$O(e);
if (this.list.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
return true;
}return false;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
var i;
var hi;
var mc;
var lst;
var a;
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if ((lst=this.list) != null  && (a=lst.elementData) != null  ) {
if ((hi=this.fence) < 0) {
mc=lst.modCount;
hi=lst.size;
} else mc=this.expectedModCount;
if ((i=this.index) >= 0 && (this.index=hi) <= a.length ) {
for (; i < hi; ++i) {
var e=a[i];
action.accept$O(e);
}
if (lst.modCount == mc) return;
}}throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$, 'estimateSize$',  function () {
return (p$2.getFence.apply(this, []) - this.index);
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return 16464;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:30 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
