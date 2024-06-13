(function(){var P$=java.util,p$1={},p$2={},I$=[[0,'java.util.Objects','java.util.Arrays','OutOfMemoryError','InternalError','java.util.Collections',['java.util.Vector','.ListItr'],['java.util.Vector','.Itr'],'java.util.BitSet',['java.util.Vector','.VectorSpliterator']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Vector", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractList', ['java.util.List', 'java.util.RandomAccess', 'Cloneable', 'java.io.Serializable']);
C$.$classes$=[['Itr',2],['ListItr',16],['VectorSpliterator',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['elementCount','capacityIncrement'],'O',['elementData','Object[]']]]

Clazz.newMeth(C$, 'c$$I$I',  function (initialCapacity, capacityIncrement) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
if (initialCapacity < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal Capacity: " + initialCapacity]);
this.elementData=Clazz.array(java.lang.Object, [initialCapacity]);
this.capacityIncrement=capacityIncrement;
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (initialCapacity) {
C$.c$$I$I.apply(this, [initialCapacity, 0]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I.apply(this, [10]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Collection',  function (c) {
Clazz.super_(C$, this);
this.elementData=c.toArray$();
this.elementCount=this.elementData.length;
if (this.elementData.getClass$() !== Clazz.array(java.lang.Object, -1) ) this.elementData=$I$(2,"copyOf$OA$I$Class",[this.elementData, this.elementCount, Clazz.array(java.lang.Object, -1)]);
}, 1);

Clazz.newMeth(C$, 'copyInto$OA',  function (anArray) {
System.arraycopy$O$I$O$I$I(this.elementData, 0, anArray, 0, this.elementCount);
});

Clazz.newMeth(C$, 'trimToSize$',  function () {
++this.modCount;
var oldCapacity=this.elementData.length;
if (this.elementCount < oldCapacity) {
this.elementData=$I$(2).copyOf$OA$I(this.elementData, this.elementCount);
}});

Clazz.newMeth(C$, 'ensureCapacity$I',  function (minCapacity) {
if (minCapacity > 0) {
++this.modCount;
p$2.ensureCapacityHelper$I.apply(this, [minCapacity]);
}});

Clazz.newMeth(C$, 'ensureCapacityHelper$I',  function (minCapacity) {
if (minCapacity - this.elementData.length > 0) p$2.grow$I.apply(this, [minCapacity]);
}, p$2);

Clazz.newMeth(C$, 'grow$I',  function (minCapacity) {
var oldCapacity=this.elementData.length;
var newCapacity=oldCapacity + ((this.capacityIncrement > 0) ? this.capacityIncrement : oldCapacity);
if (newCapacity - minCapacity < 0) newCapacity=minCapacity;
if (newCapacity - 2147483639 > 0) newCapacity=C$.hugeCapacity$I(minCapacity);
this.elementData=$I$(2).copyOf$OA$I(this.elementData, newCapacity);
}, p$2);

Clazz.newMeth(C$, 'hugeCapacity$I',  function (minCapacity) {
if (minCapacity < 0) throw Clazz.new_($I$(3,1));
return (minCapacity > 2147483639) ? 2147483647 : 2147483639;
}, 1);

Clazz.newMeth(C$, 'setSize$I',  function (newSize) {
++this.modCount;
if (newSize > this.elementCount) {
p$2.ensureCapacityHelper$I.apply(this, [newSize]);
} else {
for (var i=newSize; i < this.elementCount; i++) {
this.elementData[i]=null;
}
}this.elementCount=newSize;
});

Clazz.newMeth(C$, 'capacity$',  function () {
return this.elementData.length;
});

Clazz.newMeth(C$, 'size$',  function () {
return this.elementCount;
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.elementCount == 0;
});

Clazz.newMeth(C$, 'elements$',  function () {
return ((P$.Vector$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Vector$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Enumeration', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.count=0;
},1);

C$.$fields$=[['I',['count']]]

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
return this.count < this.b$['java.util.Vector'].elementCount;
});

Clazz.newMeth(C$, 'nextElement$',  function () {
{
if (this.count < this.b$['java.util.Vector'].elementCount) {
return this.b$['java.util.Vector'].elementData$I.apply(this.b$['java.util.Vector'], [this.count++]);
}}throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["Vector Enumeration"]);
});
})()
), Clazz.new_(P$.Vector$1.$init$,[this, null]));
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
return this.indexOf$O$I(o, 0) >= 0;
});

Clazz.newMeth(C$, 'indexOf$O',  function (o) {
return this.indexOf$O$I(o, 0);
});

Clazz.newMeth(C$, 'indexOf$O$I',  function (o, index) {
if (o == null ) {
for (var i=index; i < this.elementCount; i++) if (this.elementData[i] == null ) return i;

} else {
for (var i=index; i < this.elementCount; i++) if (o.equals$O(this.elementData[i])) return i;

}return -1;
});

Clazz.newMeth(C$, 'lastIndexOf$O',  function (o) {
return this.lastIndexOf$O$I(o, this.elementCount - 1);
});

Clazz.newMeth(C$, 'lastIndexOf$O$I',  function (o, index) {
if (index >= this.elementCount) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[index + " >= " + this.elementCount ]);
if (o == null ) {
for (var i=index; i >= 0; i--) if (this.elementData[i] == null ) return i;

} else {
for (var i=index; i >= 0; i--) if (o.equals$O(this.elementData[i])) return i;

}return -1;
});

Clazz.newMeth(C$, 'elementAt$I',  function (index) {
if (index >= this.elementCount) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,[index + " >= " + this.elementCount ]);
}return this.elementData$I(index);
});

Clazz.newMeth(C$, 'firstElement$',  function () {
if (this.elementCount == 0) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}return this.elementData$I(0);
});

Clazz.newMeth(C$, 'lastElement$',  function () {
if (this.elementCount == 0) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}return this.elementData$I(this.elementCount - 1);
});

Clazz.newMeth(C$, 'setElementAt$O$I',  function (obj, index) {
if (index >= this.elementCount) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,[index + " >= " + this.elementCount ]);
}this.elementData[index]=obj;
});

Clazz.newMeth(C$, 'removeElementAt$I',  function (index) {
++this.modCount;
if (index >= this.elementCount) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,[index + " >= " + this.elementCount ]);
} else if (index < 0) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[index]);
}var j=this.elementCount - index - 1 ;
if (j > 0) {
System.arraycopy$O$I$O$I$I(this.elementData, index + 1, this.elementData, index, j);
}--this.elementCount;
this.elementData[this.elementCount]=null;
});

Clazz.newMeth(C$, 'insertElementAt$O$I',  function (obj, index) {
++this.modCount;
if (index > this.elementCount) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,[index + " > " + this.elementCount ]);
}p$2.ensureCapacityHelper$I.apply(this, [this.elementCount + 1]);
System.arraycopy$O$I$O$I$I(this.elementData, index, this.elementData, index + 1, this.elementCount - index);
this.elementData[index]=obj;
++this.elementCount;
});

Clazz.newMeth(C$, 'addElement$O',  function (obj) {
++this.modCount;
p$2.ensureCapacityHelper$I.apply(this, [this.elementCount + 1]);
this.elementData[this.elementCount++]=obj;
});

Clazz.newMeth(C$, 'removeElement$O',  function (obj) {
++this.modCount;
var i=this.indexOf$O(obj);
if (i >= 0) {
this.removeElementAt$I(i);
return true;
}return false;
});

Clazz.newMeth(C$, 'removeAllElements$',  function () {
++this.modCount;
for (var i=0; i < this.elementCount; i++) this.elementData[i]=null;

this.elementCount=0;
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
var v=Clazz.clone(this);
v.elementData=$I$(2).copyOf$OA$I(this.elementData, this.elementCount);
v.modCount=0;
return v;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(4,1).c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'toArray$',  function () {
return $I$(2).copyOf$OA$I(this.elementData, this.elementCount);
});

Clazz.newMeth(C$, 'toArray$OA',  function (a) {
if (a.length < this.elementCount) return $I$(2,"copyOf$OA$I$Class",[this.elementData, this.elementCount, a.getClass$()]);
System.arraycopy$O$I$O$I$I(this.elementData, 0, a, 0, this.elementCount);
if (a.length > this.elementCount) a[this.elementCount]=null;
return a;
});

Clazz.newMeth(C$, 'elementData$I',  function (index) {
return this.elementData[index];
});

Clazz.newMeth(C$, 'get$I',  function (index) {
if (index >= this.elementCount) throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[index]);
return this.elementData$I(index);
});

Clazz.newMeth(C$, 'set$I$O',  function (index, element) {
if (index >= this.elementCount) throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[index]);
var oldValue=this.elementData$I(index);
this.elementData[index]=element;
return oldValue;
});

Clazz.newMeth(C$, 'add$O',  function (e) {
++this.modCount;
p$2.ensureCapacityHelper$I.apply(this, [this.elementCount + 1]);
this.elementData[this.elementCount++]=e;
return true;
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
return this.removeElement$O(o);
});

Clazz.newMeth(C$, 'add$I$O',  function (index, element) {
this.insertElementAt$O$I(element, index);
});

Clazz.newMeth(C$, 'remove$I',  function (index) {
++this.modCount;
if (index >= this.elementCount) throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[index]);
var oldValue=this.elementData$I(index);
var numMoved=this.elementCount - index - 1 ;
if (numMoved > 0) System.arraycopy$O$I$O$I$I(this.elementData, index + 1, this.elementData, index, numMoved);
this.elementData[--this.elementCount]=null;
return oldValue;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.removeAllElements$();
});

Clazz.newMeth(C$, 'containsAll$java_util_Collection',  function (c) {
return C$.superclazz.prototype.containsAll$java_util_Collection.apply(this, [c]);
});

Clazz.newMeth(C$, 'addAll$java_util_Collection',  function (c) {
++this.modCount;
var a=c.toArray$();
var numNew=a.length;
p$2.ensureCapacityHelper$I.apply(this, [this.elementCount + numNew]);
System.arraycopy$O$I$O$I$I(a, 0, this.elementData, this.elementCount, numNew);
this.elementCount+=numNew;
return numNew != 0;
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection',  function (c) {
return C$.superclazz.prototype.removeAll$java_util_Collection.apply(this, [c]);
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection',  function (c) {
return C$.superclazz.prototype.retainAll$java_util_Collection.apply(this, [c]);
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection',  function (index, c) {
++this.modCount;
if (index < 0 || index > this.elementCount ) throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[index]);
var a=c.toArray$();
var numNew=a.length;
p$2.ensureCapacityHelper$I.apply(this, [this.elementCount + numNew]);
var numMoved=this.elementCount - index;
if (numMoved > 0) System.arraycopy$O$I$O$I$I(this.elementData, index, this.elementData, index + numNew, numMoved);
System.arraycopy$O$I$O$I$I(a, 0, this.elementData, index, numNew);
this.elementCount+=numNew;
return numNew != 0;
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
return C$.superclazz.prototype.equals$O.apply(this, [o]);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return C$.superclazz.prototype.hashCode$.apply(this, []);
});

Clazz.newMeth(C$, 'toString',  function () {
return C$.superclazz.prototype.toString.apply(this, []);
});

Clazz.newMeth(C$, 'subList$I$I',  function (fromIndex, toIndex) {
return $I$(5,"synchronizedList$java_util_List$O",[C$.superclazz.prototype.subList$I$I.apply(this, [fromIndex, toIndex]), this]);
});

Clazz.newMeth(C$, 'removeRange$I$I',  function (fromIndex, toIndex) {
++this.modCount;
var numMoved=this.elementCount - toIndex;
System.arraycopy$O$I$O$I$I(this.elementData, toIndex, this.elementData, fromIndex, numMoved);
var newElementCount=this.elementCount - (toIndex - fromIndex);
while (this.elementCount != newElementCount)this.elementData[--this.elementCount]=null;

});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (s) {
var fields=s.putFields$();
var data;
{
fields.put$S$I("capacityIncrement", this.capacityIncrement);
fields.put$S$I("elementCount", this.elementCount);
data=this.elementData.clone$();
}fields.put$S$O("elementData", data);
s.writeFields$();
}, p$2);

Clazz.newMeth(C$, 'listIterator$I',  function (index) {
if (index < 0 || index > this.elementCount ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Index: " + index]);
return Clazz.new_($I$(6,1).c$$I,[this, null, index]);
});

Clazz.newMeth(C$, 'listIterator$',  function () {
return Clazz.new_($I$(6,1).c$$I,[this, null, 0]);
});

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(7,1),[this, null]);
});

Clazz.newMeth(C$, 'forEach$java_util_function_Consumer',  function (action) {
$I$(1).requireNonNull$O(action);
var expectedModCount=this.modCount;
var elementData=this.elementData;
var elementCount=this.elementCount;
for (var i=0; this.modCount == expectedModCount && i < elementCount ; i++) {
action.accept$O(elementData[i]);
}
if (this.modCount != expectedModCount) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}});

Clazz.newMeth(C$, 'removeIf$java_util_function_Predicate',  function (filter) {
$I$(1).requireNonNull$O(filter);
var removeCount=0;
var size=this.elementCount;
var removeSet=Clazz.new_($I$(8,1).c$$I,[size]);
var expectedModCount=this.modCount;
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
this.elementCount=newSize;
if (this.modCount != expectedModCount) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}++this.modCount;
}return anyToRemove;
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_UnaryOperator',  function (operator) {
$I$(1).requireNonNull$O(operator);
var expectedModCount=this.modCount;
var size=this.elementCount;
for (var i=0; this.modCount == expectedModCount && i < size ; i++) {
this.elementData[i]=operator.apply$O(this.elementData[i]);
}
if (this.modCount != expectedModCount) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}++this.modCount;
});

Clazz.newMeth(C$, 'sort$java_util_Comparator',  function (c) {
var expectedModCount=this.modCount;
$I$(2).sort$OA$I$I$java_util_Comparator(this.elementData, 0, this.elementCount, c);
if (this.modCount != expectedModCount) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}++this.modCount;
});

Clazz.newMeth(C$, 'spliterator$',  function () {
return Clazz.new_($I$(9,1).c$$java_util_Vector$OA$I$I$I,[this, null, 0, -1, 0]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Vector, "Itr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lastRet=-1;
this.expectedModCount=this.b$['java.util.Vector'].modCount;
},1);

C$.$fields$=[['I',['cursor','lastRet','expectedModCount']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.cursor != this.b$['java.util.Vector'].elementCount;
});

Clazz.newMeth(C$, 'next$',  function () {
{
this.checkForComodification$();
var i=this.cursor;
if (i >= this.b$['java.util.Vector'].elementCount) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
this.cursor=i + 1;
return this.b$['java.util.Vector'].elementData$I.apply(this.b$['java.util.Vector'], [this.lastRet=i]);
}});

Clazz.newMeth(C$, 'remove$',  function () {
if (this.lastRet == -1) throw Clazz.new_(Clazz.load('IllegalStateException'));
{
this.checkForComodification$();
this.b$['java.util.Vector'].remove$I.apply(this.b$['java.util.Vector'], [this.lastRet]);
this.expectedModCount=this.b$['java.util.Vector'].modCount;
}this.cursor=this.lastRet;
this.lastRet=-1;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
$I$(1).requireNonNull$O(action);
{
var size=this.b$['java.util.Vector'].elementCount;
var i=this.cursor;
if (i >= size) {
return;
}var elementData=this.b$['java.util.Vector'].elementData;
if (i >= elementData.length) {
throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
}while (i != size && this.b$['java.util.Vector'].modCount == this.expectedModCount ){
action.accept$O(elementData[i++]);
}
this.cursor=i;
this.lastRet=i - 1;
this.checkForComodification$();
}});

Clazz.newMeth(C$, 'checkForComodification$',  function () {
if (this.b$['java.util.Vector'].modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Vector, "ListItr", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.Vector','.Itr'], 'java.util.ListIterator');

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
{
this.checkForComodification$();
var i=this.cursor - 1;
if (i < 0) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
this.cursor=i;
return this.b$['java.util.Vector'].elementData$I.apply(this.b$['java.util.Vector'], [this.lastRet=i]);
}});

Clazz.newMeth(C$, 'set$O',  function (e) {
if (this.lastRet == -1) throw Clazz.new_(Clazz.load('IllegalStateException'));
{
this.checkForComodification$();
this.b$['java.util.Vector'].set$I$O.apply(this.b$['java.util.Vector'], [this.lastRet, e]);
}});

Clazz.newMeth(C$, 'add$O',  function (e) {
var i=this.cursor;
{
this.checkForComodification$();
this.b$['java.util.Vector'].add$I$O.apply(this.b$['java.util.Vector'], [i, e]);
this.expectedModCount=this.b$['java.util.Vector'].modCount;
}this.cursor=i + 1;
this.lastRet=-1;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Vector, "VectorSpliterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Spliterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index','fence','expectedModCount'],'O',['list','java.util.Vector','array','Object[]']]]

Clazz.newMeth(C$, 'c$$java_util_Vector$OA$I$I$I',  function (list, array, origin, fence, expectedModCount) {
;C$.$init$.apply(this);
this.list=list;
this.array=array;
this.index=origin;
this.fence=fence;
this.expectedModCount=expectedModCount;
}, 1);

Clazz.newMeth(C$, 'getFence',  function () {
var hi;
if ((hi=this.fence) < 0) {
{
this.array=this.list.elementData;
this.expectedModCount=this.list.modCount;
hi=this.fence=this.list.elementCount;
}}return hi;
}, p$1);

Clazz.newMeth(C$, 'trySplit$',  function () {
var hi=p$1.getFence.apply(this, []);
var lo=this.index;
var mid=(lo + hi) >>> 1;
return (lo >= mid) ? null : Clazz.new_(C$.c$$java_util_Vector$OA$I$I$I,[this.list, this.array, lo, this.index=mid, this.expectedModCount]);
});

Clazz.newMeth(C$, 'tryAdvance$java_util_function_Consumer',  function (action) {
var i;
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if (p$1.getFence.apply(this, []) > (i=this.index)) {
this.index=i + 1;
action.accept$O(this.array[i]);
if (this.list.modCount != this.expectedModCount) throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
return true;
}return false;
});

Clazz.newMeth(C$, 'forEachRemaining$java_util_function_Consumer',  function (action) {
var i;
var hi;
var lst;
var a;
if (action == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
if ((lst=this.list) != null ) {
if ((hi=this.fence) < 0) {
{
this.expectedModCount=lst.modCount;
a=this.array=lst.elementData;
hi=this.fence=lst.elementCount;
}} else a=this.array;
if (a != null  && (i=this.index) >= 0  && (this.index=hi) <= a.length ) {
while (i < hi)action.accept$O(a[i++]);

if (lst.modCount == this.expectedModCount) return;
}}throw Clazz.new_(Clazz.load('java.util.ConcurrentModificationException'));
});

Clazz.newMeth(C$, 'estimateSize$',  function () {
return (p$1.getFence.apply(this, []) - this.index);
});

Clazz.newMeth(C$, 'characteristics$',  function () {
return 16464;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:35 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
