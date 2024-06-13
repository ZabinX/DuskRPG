(function(){var P$=java.util,p$1={},p$2={},p$3={},p$4={},p$5={},p$6={},p$7={},p$8={},I$=[[0,'java.util.ImmutableCollections',['java.util.ImmutableCollections','.SubList'],['java.util.ImmutableCollections','.ListItr'],'java.util.Objects',['java.util.ImmutableCollections','.AbstractImmutableList'],'java.util.CollSer',['java.util.ImmutableCollections','.SetN','.SetNIterator'],'java.util.Set','java.util.KeyValueHolder','InternalError',['java.util.ImmutableCollections','.MapN','.MapNIterator'],'java.util.AbstractSet','java.util.List',['java.util.ImmutableCollections','.ListN'],['java.util.ImmutableCollections','.SetN'],['java.util.ImmutableCollections','.MapN'],['java.util.ImmutableCollections','.Map1']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImmutableCollections", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['AbstractImmutableCollection',1032],['AbstractImmutableList',1032],['ListItr',24],['SubList',24],['List12',24],['ListN',25],['AbstractImmutableSet',1032],['Set12',24],['SetN',24],['AbstractImmutableMap',1032],['Map1',24],['MapN',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'uoe$',  function () {
return Clazz.new_(Clazz.load('UnsupportedOperationException'));
}, 1);

Clazz.newMeth(C$, 'listCopy$java_util_Collection',  function (coll) {
if (Clazz.instanceOf(coll, "java.util.ImmutableCollections.AbstractImmutableList") && coll.getClass$() !== Clazz.getClass($I$(2))  ) {
return coll;
} else {
return $I$(13,"of$OA",[coll.toArray$()]);
}}, 1);

Clazz.newMeth(C$, 'emptyList$',  function () {
return $I$(14).EMPTY_LIST;
}, 1);

Clazz.newMeth(C$, 'emptySet$',  function () {
return $I$(15).EMPTY_SET;
}, 1);

Clazz.newMeth(C$, 'emptyMap$',  function () {
return $I$(16).EMPTY_MAP;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImmutableCollections, "AbstractImmutableCollection", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractCollection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'add$O',  function (e) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'addAll$java_util_Collection',  function (c) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'clear$',  function () {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'removeAll$java_util_Collection',  function (c) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'removeIf$java_util_function_Predicate',  function (filter) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'retainAll$java_util_Collection',  function (c) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImmutableCollections, "AbstractImmutableList", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.ImmutableCollections','.AbstractImmutableCollection'], ['java.util.List', 'java.util.RandomAccess']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'add$I$O',  function (index, element) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'addAll$I$java_util_Collection',  function (index, c) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'remove$I',  function (index) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_UnaryOperator',  function (operator) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'set$I$O',  function (index, element) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'sort$java_util_Comparator',  function (c) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'subList$I$I',  function (fromIndex, toIndex) {
var size=this.size$();
C$.subListRangeCheck$I$I$I(fromIndex, toIndex, size);
return $I$(2).fromList$java_util_List$I$I(this, fromIndex, toIndex);
});

Clazz.newMeth(C$, 'subListRangeCheck$I$I$I',  function (fromIndex, toIndex, size) {
if (fromIndex < 0) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["fromIndex = " + fromIndex]);
if (toIndex > size) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["toIndex = " + toIndex]);
if (fromIndex > toIndex) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["fromIndex(" + fromIndex + ") > toIndex(" + toIndex + ")" ]);
}, 1);

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_([this, this.size$()],$I$(3,1).c$$java_util_List$I);
});

Clazz.newMeth(C$, 'listIterator$',  function () {
return this.listIterator$I(0);
});

Clazz.newMeth(C$, 'listIterator$I',  function (index) {
var size=this.size$();
if (index < 0 || index > size ) {
throw this.outOfBounds$I(index);
}return Clazz.new_($I$(3,1).c$$java_util_List$I$I,[this, size, index]);
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (o === this ) {
return true;
}if (!(Clazz.instanceOf(o, "java.util.List"))) {
return false;
}var oit=(o).iterator$();
for (var i=0, s=this.size$(); i < s; i++) {
if (!oit.hasNext$() || !this.get$I(i).equals$O(oit.next$()) ) {
return false;
}}
return !oit.hasNext$();
});

Clazz.newMeth(C$, 'indexOf$O',  function (o) {
$I$(4).requireNonNull$O(o);
for (var i=0, s=this.size$(); i < s; i++) {
if (o.equals$O(this.get$I(i))) {
return i;
}}
return -1;
});

Clazz.newMeth(C$, 'lastIndexOf$O',  function (o) {
$I$(4).requireNonNull$O(o);
for (var i=this.size$() - 1; i >= 0; i--) {
if (o.equals$O(this.get$I(i))) {
return i;
}}
return -1;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var hash=1;
for (var i=0, s=this.size$(); i < s; i++) {
hash=31 * hash + this.get$I(i).hashCode$();
}
return hash;
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
return this.indexOf$O(o) >= 0;
});

Clazz.newMeth(C$, 'outOfBounds$I',  function (index) {
return Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["Index: " + index + " Size: " + this.size$() ]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImmutableCollections, "ListItr", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.ListIterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isListIterator'],'I',['size','cursor'],'O',['list','java.util.List']]]

Clazz.newMeth(C$, 'c$$java_util_List$I',  function (list, size) {
;C$.$init$.apply(this);
this.list=list;
this.size=size;
this.cursor=0;
this.isListIterator=false;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List$I$I',  function (list, size, index) {
;C$.$init$.apply(this);
this.list=list;
this.size=size;
this.cursor=index;
this.isListIterator=true;
}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.cursor != this.size;
});

Clazz.newMeth(C$, 'next$',  function () {
try {
var i=this.cursor;
var next=this.list.get$I(i);
this.cursor=i + 1;
return next;
} catch (e) {
if (Clazz.exceptionOf(e,"IndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'remove$',  function () {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'hasPrevious$',  function () {
if (!this.isListIterator) {
throw $I$(1).uoe$();
}return this.cursor != 0;
});

Clazz.newMeth(C$, 'previous$',  function () {
if (!this.isListIterator) {
throw $I$(1).uoe$();
}try {
var i=this.cursor - 1;
var previous=this.list.get$I(i);
this.cursor=i;
return previous;
} catch (e) {
if (Clazz.exceptionOf(e,"IndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'nextIndex$',  function () {
if (!this.isListIterator) {
throw $I$(1).uoe$();
}return this.cursor;
});

Clazz.newMeth(C$, 'previousIndex$',  function () {
if (!this.isListIterator) {
throw $I$(1).uoe$();
}return this.cursor - 1;
});

Clazz.newMeth(C$, 'set$O',  function (e) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'add$O',  function (e) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImmutableCollections, "SubList", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.ImmutableCollections','.AbstractImmutableList'], 'java.util.RandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['offset','size'],'O',['root','java.util.List']]]

Clazz.newMeth(C$, 'c$$java_util_List$I$I',  function (root, offset, size) {
Clazz.super_(C$, this);
this.root=root;
this.offset=offset;
this.size=size;
}, 1);

Clazz.newMeth(C$, 'fromSubList$java_util_ImmutableCollections_SubList$I$I',  function (parent, fromIndex, toIndex) {
return Clazz.new_(C$.c$$java_util_List$I$I,[parent.root, parent.offset + fromIndex, toIndex - fromIndex]);
}, 1);

Clazz.newMeth(C$, 'fromList$java_util_List$I$I',  function (list, fromIndex, toIndex) {
return Clazz.new_(C$.c$$java_util_List$I$I,[list, fromIndex, toIndex - fromIndex]);
}, 1);

Clazz.newMeth(C$, 'get$I',  function (index) {
$I$(4).checkIndex$I$I(index, this.size);
return this.root.get$I(this.offset + index);
});

Clazz.newMeth(C$, 'size$',  function () {
return this.size;
});

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_([this, this.size$()],$I$(3,1).c$$java_util_List$I);
});

Clazz.newMeth(C$, 'listIterator$I',  function (index) {
p$1.rangeCheck$I.apply(this, [index]);
return Clazz.new_([this, this.size$(), index],$I$(3,1).c$$java_util_List$I$I);
});

Clazz.newMeth(C$, 'subList$I$I',  function (fromIndex, toIndex) {
$I$(5).subListRangeCheck$I$I$I(fromIndex, toIndex, this.size);
return C$.fromSubList$java_util_ImmutableCollections_SubList$I$I(this, fromIndex, toIndex);
});

Clazz.newMeth(C$, 'rangeCheck$I',  function (index) {
if (index < 0 || index > this.size ) {
throw this.outOfBounds$I(index);
}}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImmutableCollections, "List12", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.ImmutableCollections','.AbstractImmutableList'], 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['e0','<E>','+e1']]]

Clazz.newMeth(C$, 'c$$O',  function (e0) {
Clazz.super_(C$, this);
this.e0=$I$(4).requireNonNull$O(e0);
this.e1=null;
}, 1);

Clazz.newMeth(C$, 'c$$O$O',  function (e0, e1) {
Clazz.super_(C$, this);
this.e0=$I$(4).requireNonNull$O(e0);
this.e1=$I$(4).requireNonNull$O(e1);
}, 1);

Clazz.newMeth(C$, 'size$',  function () {
return this.e1 != null  ? 2 : 1;
});

Clazz.newMeth(C$, 'get$I',  function (index) {
if (index == 0) {
return this.e0;
} else if (index == 1 && this.e1 != null  ) {
return this.e1;
}throw this.outOfBounds$I(index);
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function ($in) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["not serial proxy"]);
}, p$2);

Clazz.newMeth(C$, 'writeReplace',  function () {
if (this.e1 == null ) {
return Clazz.new_([1, Clazz.array(java.lang.Object, -1, [this.e0])],$I$(6,1).c$$I$OA);
} else {
return Clazz.new_([1, Clazz.array(java.lang.Object, -1, [this.e0, this.e1])],$I$(6,1).c$$I$OA);
}}, p$2);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImmutableCollections, "ListN", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.ImmutableCollections','.AbstractImmutableList'], 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['elements','_.E[]']]
,['O',['EMPTY_LIST','java.util.List']]]

Clazz.newMeth(C$, 'c$$OA',  function (input) {
Clazz.super_(C$, this);
var tmp=Clazz.array(java.lang.Object, [input.length]);
for (var i=0; i < input.length; i++) {
tmp[i]=$I$(4).requireNonNull$O(input[i]);
}
this.elements=tmp;
}, 1);

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.size$() == 0;
});

Clazz.newMeth(C$, 'size$',  function () {
return this.elements.length;
});

Clazz.newMeth(C$, 'get$I',  function (index) {
return this.elements[index];
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function ($in) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["not serial proxy"]);
}, p$3);

Clazz.newMeth(C$, 'writeReplace',  function () {
return Clazz.new_($I$(6,1).c$$I$OA,[1, this.elements]);
}, p$3);

C$.$static$=function(){C$.$static$=0;
{
if (C$.EMPTY_LIST == null ) {
C$.EMPTY_LIST=Clazz.new_(C$.c$$OA,[Clazz.array(java.lang.Object, -1, [])]);
}};
};
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImmutableCollections, "AbstractImmutableSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.ImmutableCollections','.AbstractImmutableCollection'], 'java.util.Set');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (o === this ) {
return true;
} else if (!(Clazz.instanceOf(o, "java.util.Set"))) {
return false;
}var c=o;
if (c.size$() != this.size$()) {
return false;
}for (var e, $e = c.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
if (e == null  || !this.contains$O(e) ) {
return false;
}}
return true;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImmutableCollections, "Set12", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.ImmutableCollections','.AbstractImmutableSet'], 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['e0','<E>','+e1']]]

Clazz.newMeth(C$, 'c$$O',  function (e0) {
Clazz.super_(C$, this);
this.e0=$I$(4).requireNonNull$O(e0);
this.e1=null;
}, 1);

Clazz.newMeth(C$, 'c$$O$O',  function (e0, e1) {
Clazz.super_(C$, this);
if (e0.equals$O($I$(4).requireNonNull$O(e1))) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["duplicate element: " + e0]);
}this.e0=e0;
this.e1=e1;
}, 1);

Clazz.newMeth(C$, 'size$',  function () {
return (this.e1 == null ) ? 1 : 2;
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
return o.equals$O(this.e0) || o.equals$O(this.e1) ;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.e0.hashCode$() + (this.e1 == null  ? 0 : this.e1.hashCode$());
});

Clazz.newMeth(C$, 'iterator$',  function () {
return ((P$.ImmutableCollections$Set12$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImmutableCollections$Set12$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Iterator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.idx=this.b$['java.util.ImmutableCollections.Set12'].size$.apply(this.b$['java.util.ImmutableCollections.Set12'], []);
},1);

C$.$fields$=[['I',['idx']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.idx > 0;
});

Clazz.newMeth(C$, 'next$',  function () {
if (this.idx == 1) {
this.idx=0;
return true || this.b$['java.util.ImmutableCollections.Set12'].e1 == null   ? this.b$['java.util.ImmutableCollections.Set12'].e0 : this.b$['java.util.ImmutableCollections.Set12'].e1;
} else if (this.idx == 2) {
this.idx=1;
return true ? this.b$['java.util.ImmutableCollections.Set12'].e1 : this.b$['java.util.ImmutableCollections.Set12'].e0;
} else {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}});
})()
), Clazz.new_(P$.ImmutableCollections$Set12$1.$init$,[this, null]));
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function ($in) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["not serial proxy"]);
}, p$4);

Clazz.newMeth(C$, 'writeReplace',  function () {
if (this.e1 == null ) {
return Clazz.new_([2, Clazz.array(java.lang.Object, -1, [this.e0])],$I$(6,1).c$$I$OA);
} else {
return Clazz.new_([2, Clazz.array(java.lang.Object, -1, [this.e0, this.e1])],$I$(6,1).c$$I$OA);
}}, p$4);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImmutableCollections, "SetN", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.ImmutableCollections','.AbstractImmutableSet'], 'java.io.Serializable');
C$.$classes$=[['SetNIterator',18]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['size'],'O',['elements','_.E[]']]
,['O',['EMPTY_SET','java.util.Set']]]

Clazz.newMeth(C$, 'c$$OA',  function (input) {
Clazz.super_(C$, this);
this.size=input.length;
this.elements=Clazz.array(java.lang.Object, [2 * input.length]);
for (var i=0; i < input.length; i++) {
var e=input[i];
var idx=p$5.probe$O.apply(this, [e]);
if (idx >= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["duplicate element: " + e]);
} else {
this.elements[-(idx + 1)]=e;
}}
}, 1);

Clazz.newMeth(C$, 'size$',  function () {
return this.size;
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
$I$(4).requireNonNull$O(o);
return this.size > 0 && p$5.probe$O.apply(this, [o]) >= 0 ;
});

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(7,1),[this, null]);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var h=0;
for (var e, $e = 0, $$e = this.elements; $e<$$e.length&&((e=($$e[$e])),1);$e++) {
if (e != null ) {
h+=e.hashCode$();
}}
return h;
});

Clazz.newMeth(C$, 'probe$O',  function (pe) {
var idx=Math.floorMod(pe.hashCode$(), this.elements.length);
while (true){
var ee=this.elements[idx];
if (ee == null ) {
return -idx - 1;
} else if (pe.equals$O(ee)) {
return idx;
} else if (++idx == this.elements.length) {
idx=0;
}}
}, p$5);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function ($in) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["not serial proxy"]);
}, p$5);

Clazz.newMeth(C$, 'writeReplace',  function () {
var array=Clazz.array(java.lang.Object, [this.size]);
var dest=0;
for (var o, $o = 0, $$o = this.elements; $o<$$o.length&&((o=($$o[$o])),1);$o++) {
if (o != null ) {
array[dest++]=o;
}}
return Clazz.new_($I$(6,1).c$$I$OA,[2, array]);
}, p$5);

C$.$static$=function(){C$.$static$=0;
{
if (C$.EMPTY_SET == null ) {
C$.EMPTY_SET=Clazz.new_(C$.c$$OA,[Clazz.array(java.lang.Object, -1, [])]);
}};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImmutableCollections.SetN, "SetNIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['remaining','idx']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.remaining=this.b$['java.util.ImmutableCollections.SetN'].size$.apply(this.b$['java.util.ImmutableCollections.SetN'], []);
if (this.remaining > 0) {
this.idx=Math.floorMod(1, this.b$['java.util.ImmutableCollections.SetN'].elements.length);
}}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.remaining > 0;
});

Clazz.newMeth(C$, 'nextIndex',  function () {
var idx=this.idx;
if (true) {
if (++idx >= this.b$['java.util.ImmutableCollections.SetN'].elements.length) {
idx=0;
}} else {
if (--idx < 0) {
idx=this.b$['java.util.ImmutableCollections.SetN'].elements.length - 1;
}}return this.idx=idx;
}, p$5);

Clazz.newMeth(C$, 'next$',  function () {
if (this.hasNext$()) {
var element;
while ((element=this.b$['java.util.ImmutableCollections.SetN'].elements[p$5.nextIndex.apply(this, [])]) == null ){
}
--this.remaining;
return element;
} else {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}});
})()
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImmutableCollections, "AbstractImmutableMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.AbstractMap', 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'clear$',  function () {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'compute$O$java_util_function_BiFunction',  function (key, rf) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'computeIfAbsent$O$java_util_function_Function',  function (key, mf) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'computeIfPresent$O$java_util_function_BiFunction',  function (key, rf) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'merge$O$O$java_util_function_BiFunction',  function (key, value, rf) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'put$O$O',  function (key, value) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'putAll$java_util_Map',  function (m) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'putIfAbsent$O$O',  function (key, value) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'remove$O',  function (key) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'remove$O$O',  function (key, value) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'replace$O$O',  function (key, value) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'replace$O$O$O',  function (key, oldValue, newValue) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$, 'replaceAll$java_util_function_BiFunction',  function (f) {
throw $I$(1).uoe$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImmutableCollections, "Map1", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.ImmutableCollections','.AbstractImmutableMap']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['k0','<K>','v0','<V>']]]

Clazz.newMeth(C$, 'c$$O$O',  function (k0, v0) {
Clazz.super_(C$, this);
this.k0=$I$(4).requireNonNull$O(k0);
this.v0=$I$(4).requireNonNull$O(v0);
}, 1);

Clazz.newMeth(C$, 'entrySet$',  function () {
return $I$(8,"of$O",[Clazz.new_($I$(9,1).c$$O$O,[this.k0, this.v0])]);
});

Clazz.newMeth(C$, 'get$O',  function (o) {
return o.equals$O(this.k0) ? this.v0 : null;
});

Clazz.newMeth(C$, 'containsKey$O',  function (o) {
return o.equals$O(this.k0);
});

Clazz.newMeth(C$, 'containsValue$O',  function (o) {
return o.equals$O(this.v0);
});

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function ($in) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["not serial proxy"]);
}, p$6);

Clazz.newMeth(C$, 'writeReplace',  function () {
return Clazz.new_([3, Clazz.array(java.lang.Object, -1, [this.k0, this.v0])],$I$(6,1).c$$I$OA);
}, p$6);

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.k0.hashCode$() ^ this.v0.hashCode$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImmutableCollections, "MapN", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['java.util.ImmutableCollections','.AbstractImmutableMap']);
C$.$classes$=[['MapNIterator',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['size'],'O',['table','Object[]']]
,['O',['EMPTY_MAP','java.util.Map']]]

Clazz.newMeth(C$, 'c$$OA',  function (input) {
Clazz.super_(C$, this);
if ((input.length & 1) != 0) {
throw Clazz.new_($I$(10,1).c$$S,["length is odd"]);
}this.size=input.length >> 1;
var len=2 * input.length;
len=(len + 1) & ~1;
this.table=Clazz.array(java.lang.Object, [len]);
for (var i=0; i < input.length; i+=2) {
var k=$I$(4).requireNonNull$O(input[i]);
var v=$I$(4).requireNonNull$O(input[i + 1]);
var idx=p$7.probe$O.apply(this, [k]);
if (idx >= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["duplicate key: " + k]);
} else {
var dest=-(idx + 1);
this.table[dest]=k;
this.table[dest + 1]=v;
}}
}, 1);

Clazz.newMeth(C$, 'containsKey$O',  function (o) {
$I$(4).requireNonNull$O(o);
return this.size > 0 && p$7.probe$O.apply(this, [o]) >= 0 ;
});

Clazz.newMeth(C$, 'containsValue$O',  function (o) {
$I$(4).requireNonNull$O(o);
for (var i=1; i < this.table.length; i+=2) {
var v=this.table[i];
if (v != null  && o.equals$O(v) ) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var hash=0;
for (var i=0; i < this.table.length; i+=2) {
var k=this.table[i];
if (k != null ) {
hash+=k.hashCode$() ^ this.table[i + 1].hashCode$();
}}
return hash;
});

Clazz.newMeth(C$, 'get$O',  function (o) {
if (this.size == 0) {
$I$(4).requireNonNull$O(o);
return null;
}var i=p$7.probe$O.apply(this, [o]);
if (i >= 0) {
return this.table[i + 1];
} else {
return null;
}});

Clazz.newMeth(C$, 'size$',  function () {
return this.size;
});

Clazz.newMeth(C$, 'entrySet$',  function () {
return ((P$.ImmutableCollections$MapN$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImmutableCollections$MapN$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.util.AbstractSet'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'size$',  function () {
return this.b$['java.util.ImmutableCollections.MapN'].size;
});

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(11,1),[this, null]);
});
})()
), Clazz.new_($I$(12,1),[this, null],P$.ImmutableCollections$MapN$1));
});

Clazz.newMeth(C$, 'probe$O',  function (pk) {
var idx=Math.floorMod(pk.hashCode$(), this.table.length >> 1) << 1;
while (true){
var ek=this.table[idx];
if (ek == null ) {
return -idx - 1;
} else if (pk.equals$O(ek)) {
return idx;
} else if ((idx+=2) == this.table.length) {
idx=0;
}}
}, p$7);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function ($in) {
throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,["not serial proxy"]);
}, p$7);

Clazz.newMeth(C$, 'writeReplace',  function () {
var array=Clazz.array(java.lang.Object, [2 * this.size]);
var len=this.table.length;
var dest=0;
for (var i=0; i < len; i+=2) {
if (this.table[i] != null ) {
array[dest++]=this.table[i];
array[dest++]=this.table[i + 1];
}}
return Clazz.new_($I$(6,1).c$$I$OA,[3, array]);
}, p$7);

C$.$static$=function(){C$.$static$=0;
{
if (C$.EMPTY_MAP == null ) {
C$.EMPTY_MAP=Clazz.new_(C$.c$$OA,[Clazz.array(java.lang.Object, -1, [])]);
}};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImmutableCollections.MapN, "MapNIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['remaining','idx']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.remaining=this.b$['java.util.ImmutableCollections.MapN'].size$.apply(this.b$['java.util.ImmutableCollections.MapN'], []);
if (this.remaining > 0) {
this.idx=Math.floorMod(1, this.b$['java.util.ImmutableCollections.MapN'].table.length >> 1) << 1;
}}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.remaining > 0;
});

Clazz.newMeth(C$, 'nextIndex',  function () {
var idx=this.idx;
if ((idx+=2) >= this.b$['java.util.ImmutableCollections.MapN'].table.length) {
idx=0;
}return this.idx=idx;
}, p$7);

Clazz.newMeth(C$, 'next$',  function () {
if (this.hasNext$()) {
while (this.b$['java.util.ImmutableCollections.MapN'].table[p$7.nextIndex.apply(this, [])] == null ){
}
var e=Clazz.new_($I$(9,1).c$$O$O,[this.b$['java.util.ImmutableCollections.MapN'].table[this.idx], this.b$['java.util.ImmutableCollections.MapN'].table[this.idx + 1]]);
--this.remaining;
return e;
} else {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}});
})()
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:33 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
