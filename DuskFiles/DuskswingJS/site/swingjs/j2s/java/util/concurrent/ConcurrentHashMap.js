(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,['java.util.concurrent.ConcurrentHashMap','.HashEntry'],['java.util.concurrent.ConcurrentHashMap','.WriteThroughEntry'],['java.util.concurrent.ConcurrentHashMap','.KeyIterator'],['java.util.concurrent.ConcurrentHashMap','.ValueIterator'],['java.util.concurrent.ConcurrentHashMap','.EntryIterator'],['java.util.concurrent.ConcurrentHashMap','.Segment'],['java.util.concurrent.ConcurrentHashMap','.KeySet'],['java.util.concurrent.ConcurrentHashMap','.Values'],['java.util.concurrent.ConcurrentHashMap','.EntrySet']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ConcurrentHashMap", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.AbstractMap', ['java.util.concurrent.ConcurrentMap', 'java.io.Serializable']);
C$.$classes$=[['HashEntry',24],['Segment',24],['HashIterator',1024],['KeyIterator',16],['ValueIterator',16],['WriteThroughEntry',16],['EntryIterator',16],['KeySet',16],['Values',16],['EntrySet',16]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['segmentMask','segmentShift'],'O',['segments','java.util.concurrent.ConcurrentHashMap.Segment[]','$keySet','java.util.Set','+entrySet','$values','java.util.Collection']]]

Clazz.newMeth(C$, 'hash$I',  function (h) {
h+=(h << 15) ^ -12931;
h^=(h >>> 10);
h+=(h << 3);
h^=(h >>> 6);
h+=(h << 2) + (h << 14);
return h ^ (h >>> 16);
}, 1);

Clazz.newMeth(C$, 'segmentFor$I',  function (hash) {
return this.segments[(hash >>> this.segmentShift) & this.segmentMask];
});

Clazz.newMeth(C$, 'c$$I$F$I',  function (initialCapacity, loadFactor, concurrencyLevel) {
Clazz.super_(C$, this);
if (!(loadFactor > 0 ) || initialCapacity < 0  || concurrencyLevel <= 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
if (concurrencyLevel > 65536) concurrencyLevel=65536;
var sshift=0;
var ssize=1;
while (ssize < concurrencyLevel){
++sshift;
ssize<<=1;
}
this.segmentShift=32 - sshift;
this.segmentMask=ssize - 1;
this.segments=$I$(6).newArray$I(ssize);
if (initialCapacity > 1073741824) initialCapacity=1073741824;
var c=(initialCapacity/ssize|0);
if (c * ssize < initialCapacity) ++c;
var cap=1;
while (cap < c)cap<<=1;

for (var i=0; i < this.segments.length; ++i) this.segments[i]=Clazz.new_($I$(6,1).c$$I$F,[cap, loadFactor]);

}, 1);

Clazz.newMeth(C$, 'c$$I$F',  function (initialCapacity, loadFactor) {
C$.c$$I$F$I.apply(this, [initialCapacity, loadFactor, 16]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (initialCapacity) {
C$.c$$I$F$I.apply(this, [initialCapacity, 0.75, 16]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I$F$I.apply(this, [16, 0.75, 16]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map',  function (m) {
C$.c$$I$F$I.apply(this, [Math.max(((m.size$() / 0.75)|0) + 1, 16), 0.75, 16]);
this.putAll$java_util_Map(m);
}, 1);

Clazz.newMeth(C$, 'isEmpty$',  function () {
var segments=this.segments;
var mc=Clazz.array(Integer.TYPE, [segments.length]);
var mcsum=0;
for (var i=0; i < segments.length; ++i) {
if (segments[i].count != 0) return false;
 else mcsum+=mc[i]=segments[i].modCount;
}
if (mcsum != 0) {
for (var i=0; i < segments.length; ++i) {
if (segments[i].count != 0 || mc[i] != segments[i].modCount ) return false;
}
}return true;
});

Clazz.newMeth(C$, 'size$',  function () {
var segments=this.segments;
var sum=0;
var check=0;
var mc=Clazz.array(Integer.TYPE, [segments.length]);
for (var k=0; k < 2; ++k) {
check=0;
sum=0;
var mcsum=0;
for (var i=0; i < segments.length; ++i) {
(sum=Long.$add(sum,(segments[i].count)));
mcsum+=mc[i]=segments[i].modCount;
}
if (mcsum != 0) {
for (var i=0; i < segments.length; ++i) {
(check=Long.$add(check,(segments[i].count)));
if (mc[i] != segments[i].modCount) {
check=-1;
break;
}}
}if (Long.$eq(check,sum )) break;
}
if (Long.$ne(check,sum )) {
sum=0;
for (var i=0; i < segments.length; ++i) segments[i].lock$();

for (var i=0; i < segments.length; ++i) (sum=Long.$add(sum,(segments[i].count)));

for (var i=0; i < segments.length; ++i) segments[i].unlock$();

}if (Long.$gt(sum,2147483647 )) return 2147483647;
 else return Long.$ival(sum);
});

Clazz.newMeth(C$, 'get$O',  function (key) {
var hash=C$.hash$I(key.hashCode$());
return this.segmentFor$I(hash).get$O$I(key, hash);
});

Clazz.newMeth(C$, 'containsKey$O',  function (key) {
var hash=C$.hash$I(key.hashCode$());
return this.segmentFor$I(hash).containsKey$O$I(key, hash);
});

Clazz.newMeth(C$, 'containsValue$O',  function (value) {
if (value == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var segments=this.segments;
var mc=Clazz.array(Integer.TYPE, [segments.length]);
for (var k=0; k < 2; ++k) {
var mcsum=0;
for (var i=0; i < segments.length; ++i) {
mcsum+=mc[i]=segments[i].modCount;
if (segments[i].containsValue$O(value)) return true;
}
var cleanSweep=true;
if (mcsum != 0) {
for (var i=0; i < segments.length; ++i) {
if (mc[i] != segments[i].modCount) {
cleanSweep=false;
break;
}}
}if (cleanSweep) return false;
}
for (var i=0; i < segments.length; ++i) segments[i].lock$();

var found=false;
try {
for (var i=0; i < segments.length; ++i) {
if (segments[i].containsValue$O(value)) {
found=true;
break;
}}
} finally {
for (var i=0; i < segments.length; ++i) segments[i].unlock$();

}
return found;
});

Clazz.newMeth(C$, 'contains$O',  function (value) {
return this.containsValue$O(value);
});

Clazz.newMeth(C$, 'put$O$O',  function (key, value) {
if (value == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var hash=C$.hash$I(key.hashCode$());
return this.segmentFor$I(hash).put$O$I$O$Z(key, hash, value, false);
});

Clazz.newMeth(C$, 'putIfAbsent$O$O',  function (key, value) {
if (value == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var hash=C$.hash$I(key.hashCode$());
return this.segmentFor$I(hash).put$O$I$O$Z(key, hash, value, true);
});

Clazz.newMeth(C$, 'putAll$java_util_Map',  function (m) {
for (var e, $e = m.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) this.put$O$O(e.getKey$(), e.getValue$());

});

Clazz.newMeth(C$, 'remove$O',  function (key) {
var hash=C$.hash$I(key.hashCode$());
return this.segmentFor$I(hash).remove$O$I$O(key, hash, null);
});

Clazz.newMeth(C$, 'remove$O$O',  function (key, value) {
var hash=C$.hash$I(key.hashCode$());
if (value == null ) return false;
return this.segmentFor$I(hash).remove$O$I$O(key, hash, value) != null ;
});

Clazz.newMeth(C$, 'replace$O$O$O',  function (key, oldValue, newValue) {
if (oldValue == null  || newValue == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
var hash=C$.hash$I(key.hashCode$());
return this.segmentFor$I(hash).replace$O$I$O$O(key, hash, oldValue, newValue);
});

Clazz.newMeth(C$, 'replace$O$O',  function (key, value) {
if (value == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var hash=C$.hash$I(key.hashCode$());
return this.segmentFor$I(hash).replace$O$I$O(key, hash, value);
});

Clazz.newMeth(C$, 'clear$',  function () {
for (var i=0; i < this.segments.length; ++i) this.segments[i].clear$();

});

Clazz.newMeth(C$, 'keySet$',  function () {
var ks=this.$keySet;
return (ks != null ) ? ks : (this.$keySet=Clazz.new_($I$(7,1),[this, null]));
});

Clazz.newMeth(C$, 'values$',  function () {
var vs=this.$values;
return (vs != null ) ? vs : (this.$values=Clazz.new_($I$(8,1),[this, null]));
});

Clazz.newMeth(C$, 'entrySet$',  function () {
var es=this.entrySet;
return (es != null ) ? es : (this.entrySet=Clazz.new_($I$(9,1),[this, null]));
});

Clazz.newMeth(C$, 'keys$',  function () {
return Clazz.new_($I$(3,1),[this, null]);
});

Clazz.newMeth(C$, 'elements$',  function () {
return Clazz.new_($I$(4,1),[this, null]);
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (s) {
s.defaultWriteObject$();
for (var k=0; k < this.segments.length; ++k) {
var seg=this.segments[k];
seg.lock$();
try {
var tab=seg.table;
for (var i=0; i < tab.length; ++i) {
for (var e=tab[i]; e != null ; e=e.nextEntry) {
s.writeObject$O(e.key);
s.writeObject$O(e.value);
}
}
} finally {
seg.unlock$();
}
}
s.writeObject$O(null);
s.writeObject$O(null);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function (s) {
s.defaultReadObject$();
for (var i=0; i < this.segments.length; ++i) {
this.segments[i].setTable$java_util_concurrent_ConcurrentHashMap_HashEntryA(Clazz.array($I$(1), [1]));
}
for (; ; ) {
var key=s.readObject$();
var value=s.readObject$();
if (key == null ) break;
this.put$O$O(key, value);
}
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ConcurrentHashMap, "HashEntry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['hash'],'O',['key','<K>','value','<V>','nextEntry','java.util.concurrent.ConcurrentHashMap.HashEntry']]]

Clazz.newMeth(C$, 'c$$O$I$java_util_concurrent_ConcurrentHashMap_HashEntry$O',  function (key, hash, next, value) {
;C$.$init$.apply(this);
this.key=key;
this.hash=hash;
this.nextEntry=next;
this.value=value;
}, 1);

Clazz.newMeth(C$, 'newArray$I',  function (i) {
return Clazz.array(C$, [i]);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ConcurrentHashMap, "Segment", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['loadFactor'],'I',['count','modCount','threshold'],'O',['table','java.util.concurrent.ConcurrentHashMap.HashEntry[]']]]

Clazz.newMeth(C$, 'c$$I$F',  function (initialCapacity, lf) {
;C$.$init$.apply(this);
this.loadFactor=lf;
this.setTable$java_util_concurrent_ConcurrentHashMap_HashEntryA($I$(1).newArray$I(initialCapacity));
}, 1);

Clazz.newMeth(C$, 'newArray$I',  function (i) {
return Clazz.array(C$, [i]);
}, 1);

Clazz.newMeth(C$, 'setTable$java_util_concurrent_ConcurrentHashMap_HashEntryA',  function (newTable) {
this.threshold=((newTable.length * this.loadFactor)|0);
this.table=newTable;
});

Clazz.newMeth(C$, 'getFirst$I',  function (hash) {
var tab=this.table;
return tab[hash & (tab.length - 1)];
});

Clazz.newMeth(C$, 'readValueUnderLock$java_util_concurrent_ConcurrentHashMap_HashEntry',  function (e) {
this.lock$();
try {
return e.value;
} finally {
this.unlock$();
}
});

Clazz.newMeth(C$, 'unlock$',  function () {
});

Clazz.newMeth(C$, 'lock$',  function () {
});

Clazz.newMeth(C$, 'get$O$I',  function (key, hash) {
if (this.count != 0) {
var e=this.getFirst$I(hash);
while (e != null ){
if (e.hash == hash && key.equals$O(e.key) ) {
var v=e.value;
if (v != null ) return v;
return this.readValueUnderLock$java_util_concurrent_ConcurrentHashMap_HashEntry(e);
}e=e.nextEntry;
}
}return null;
});

Clazz.newMeth(C$, 'containsKey$O$I',  function (key, hash) {
if (this.count != 0) {
var e=this.getFirst$I(hash);
while (e != null ){
if (e.hash == hash && key.equals$O(e.key) ) return true;
e=e.nextEntry;
}
}return false;
});

Clazz.newMeth(C$, 'containsValue$O',  function (value) {
if (this.count != 0) {
var tab=this.table;
var len=tab.length;
for (var i=0; i < len; i++) {
for (var e=tab[i]; e != null ; e=e.nextEntry) {
var v=e.value;
if (v == null ) v=this.readValueUnderLock$java_util_concurrent_ConcurrentHashMap_HashEntry(e);
if (value.equals$O(v)) return true;
}
}
}return false;
});

Clazz.newMeth(C$, 'replace$O$I$O$O',  function (key, hash, oldValue, newValue) {
this.lock$();
try {
var e=this.getFirst$I(hash);
while (e != null  && (e.hash != hash || !key.equals$O(e.key) ) )e=e.nextEntry;

var replaced=false;
if (e != null  && oldValue.equals$O(e.value) ) {
replaced=true;
e.value=newValue;
}return replaced;
} finally {
this.unlock$();
}
});

Clazz.newMeth(C$, 'replace$O$I$O',  function (key, hash, newValue) {
this.lock$();
try {
var e=this.getFirst$I(hash);
while (e != null  && (e.hash != hash || !key.equals$O(e.key) ) )e=e.nextEntry;

var oldValue=null;
if (e != null ) {
oldValue=e.value;
e.value=newValue;
}return oldValue;
} finally {
this.unlock$();
}
});

Clazz.newMeth(C$, 'put$O$I$O$Z',  function (key, hash, value, onlyIfAbsent) {
this.lock$();
try {
var c=this.count;
if (c++ > this.threshold) this.rehash$();
var tab=this.table;
var index=hash & (tab.length - 1);
var first=tab[index];
var e=first;
while (e != null  && (e.hash != hash || !key.equals$O(e.key) ) )e=e.nextEntry;

var oldValue;
if (e != null ) {
oldValue=e.value;
if (!onlyIfAbsent) e.value=value;
} else {
oldValue=null;
++this.modCount;
tab[index]=Clazz.new_($I$(1,1).c$$O$I$java_util_concurrent_ConcurrentHashMap_HashEntry$O,[key, hash, first, value]);
this.count=c;
}return oldValue;
} finally {
this.unlock$();
}
});

Clazz.newMeth(C$, 'rehash$',  function () {
var oldTable=this.table;
var oldCapacity=oldTable.length;
if (oldCapacity >= 1073741824) return;
var newTable=$I$(1).newArray$I(oldCapacity << 1);
this.threshold=((newTable.length * this.loadFactor)|0);
var sizeMask=newTable.length - 1;
for (var i=0; i < oldCapacity; i++) {
var e=oldTable[i];
if (e != null ) {
var next=e.nextEntry;
var idx=e.hash & sizeMask;
if (next == null ) newTable[idx]=e;
 else {
var lastRun=e;
var lastIdx=idx;
for (var last=next; last != null ; last=last.nextEntry) {
var k=last.hash & sizeMask;
if (k != lastIdx) {
lastIdx=k;
lastRun=last;
}}
newTable[lastIdx]=lastRun;
for (var p=e; p !== lastRun ; p=p.nextEntry) {
var k=p.hash & sizeMask;
var n=newTable[k];
newTable[k]=Clazz.new_($I$(1,1).c$$O$I$java_util_concurrent_ConcurrentHashMap_HashEntry$O,[p.key, p.hash, n, p.value]);
}
}}}
this.table=newTable;
});

Clazz.newMeth(C$, 'remove$O$I$O',  function (key, hash, value) {
this.lock$();
try {
var c=this.count - 1;
var tab=this.table;
var index=hash & (tab.length - 1);
var first=tab[index];
var e=first;
while (e != null  && (e.hash != hash || !key.equals$O(e.key) ) )e=e.nextEntry;

var oldValue=null;
if (e != null ) {
var v=e.value;
if (value == null  || value.equals$O(v) ) {
oldValue=v;
++this.modCount;
var newFirst=e.nextEntry;
for (var p=first; p !== e ; p=p.nextEntry) newFirst=Clazz.new_($I$(1,1).c$$O$I$java_util_concurrent_ConcurrentHashMap_HashEntry$O,[p.key, p.hash, newFirst, p.value]);

tab[index]=newFirst;
this.count=c;
}}return oldValue;
} finally {
this.unlock$();
}
});

Clazz.newMeth(C$, 'clear$',  function () {
if (this.count != 0) {
this.lock$();
try {
var tab=this.table;
for (var i=0; i < tab.length; i++) tab[i]=null;

++this.modCount;
this.count=0;
} finally {
this.unlock$();
}
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ConcurrentHashMap, "HashIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['nextSegmentIndex','nextTableIndex'],'O',['currentTable','java.util.concurrent.ConcurrentHashMap.HashEntry[]','nextEntry','java.util.concurrent.ConcurrentHashMap.HashEntry','+lastReturned']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.nextSegmentIndex=this.b$['java.util.concurrent.ConcurrentHashMap'].segments.length - 1;
this.nextTableIndex=-1;
this.advance$();
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
return this.hasNext$();
});

Clazz.newMeth(C$, 'advance$',  function () {
if (this.nextEntry != null  && (this.nextEntry=this.nextEntry.nextEntry) != null  ) return;
while (this.nextTableIndex >= 0){
if ((this.nextEntry=this.currentTable[this.nextTableIndex--]) != null ) return;
}
while (this.nextSegmentIndex >= 0){
var seg=this.b$['java.util.concurrent.ConcurrentHashMap'].segments[this.nextSegmentIndex--];
if (seg.count != 0) {
this.currentTable=seg.table;
for (var j=this.currentTable.length - 1; j >= 0; --j) {
if ((this.nextEntry=this.currentTable[j]) != null ) {
this.nextTableIndex=j - 1;
return;
}}
}}
});

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.nextEntry != null ;
});

Clazz.newMeth(C$, 'nextEntry$',  function () {
if (this.nextEntry == null ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
this.lastReturned=this.nextEntry;
this.advance$();
return this.lastReturned;
});

Clazz.newMeth(C$, 'remove$',  function () {
if (this.lastReturned == null ) throw Clazz.new_(Clazz.load('IllegalStateException'));
this.b$['java.util.concurrent.ConcurrentHashMap'].remove$O.apply(this.b$['java.util.concurrent.ConcurrentHashMap'], [this.lastReturned.key]);
this.lastReturned=null;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ConcurrentHashMap, "KeyIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.concurrent.ConcurrentHashMap','.HashIterator'], ['java.util.Iterator', 'java.util.Enumeration']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'next$',  function () {
return C$.superclazz.prototype.nextEntry$.apply(this, []).key;
});

Clazz.newMeth(C$, 'nextElement$',  function () {
return C$.superclazz.prototype.nextEntry$.apply(this, []).key;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ConcurrentHashMap, "ValueIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.concurrent.ConcurrentHashMap','.HashIterator'], ['java.util.Iterator', 'java.util.Enumeration']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'next$',  function () {
return C$.superclazz.prototype.nextEntry$.apply(this, []).value;
});

Clazz.newMeth(C$, 'nextElement$',  function () {
return C$.superclazz.prototype.nextEntry$.apply(this, []).value;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ConcurrentHashMap, "WriteThroughEntry", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.AbstractMap','.SimpleEntry']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$O$O',  function (k, v) {
;C$.superclazz.c$$O$O.apply(this,[k, v]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setValue$O',  function (value) {
if (value == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var v=C$.superclazz.prototype.setValue$O.apply(this, [value]);
this.b$['java.util.concurrent.ConcurrentHashMap'].put$O$O.apply(this.b$['java.util.concurrent.ConcurrentHashMap'], [this.getKey$(), value]);
return v;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ConcurrentHashMap, "EntryIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['java.util.concurrent.ConcurrentHashMap','.HashIterator'], 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'next$',  function () {
var e=C$.superclazz.prototype.nextEntry$.apply(this, []);
return Clazz.new_($I$(2,1).c$$O$O,[this, null, e.key, e.value]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ConcurrentHashMap, "KeySet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(3,1),[this, null]);
});

Clazz.newMeth(C$, 'size$',  function () {
return this.b$['java.util.concurrent.ConcurrentHashMap'].size$.apply(this.b$['java.util.concurrent.ConcurrentHashMap'], []);
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.b$['java.util.concurrent.ConcurrentHashMap'].isEmpty$.apply(this.b$['java.util.concurrent.ConcurrentHashMap'], []);
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
return this.b$['java.util.concurrent.ConcurrentHashMap'].containsKey$O.apply(this.b$['java.util.concurrent.ConcurrentHashMap'], [o]);
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
return this.b$['java.util.concurrent.ConcurrentHashMap'].remove$O.apply(this.b$['java.util.concurrent.ConcurrentHashMap'], [o]) != null ;
});

Clazz.newMeth(C$, 'clear$',  function () {
this.b$['java.util.concurrent.ConcurrentHashMap'].clear$.apply(this.b$['java.util.concurrent.ConcurrentHashMap'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ConcurrentHashMap, "Values", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractCollection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(4,1),[this, null]);
});

Clazz.newMeth(C$, 'size$',  function () {
return this.b$['java.util.concurrent.ConcurrentHashMap'].size$.apply(this.b$['java.util.concurrent.ConcurrentHashMap'], []);
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.b$['java.util.concurrent.ConcurrentHashMap'].isEmpty$.apply(this.b$['java.util.concurrent.ConcurrentHashMap'], []);
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
return this.b$['java.util.concurrent.ConcurrentHashMap'].containsValue$O.apply(this.b$['java.util.concurrent.ConcurrentHashMap'], [o]);
});

Clazz.newMeth(C$, 'clear$',  function () {
this.b$['java.util.concurrent.ConcurrentHashMap'].clear$.apply(this.b$['java.util.concurrent.ConcurrentHashMap'], []);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ConcurrentHashMap, "EntrySet", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.AbstractSet');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'iterator$',  function () {
return Clazz.new_($I$(5,1),[this, null]);
});

Clazz.newMeth(C$, 'contains$O',  function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var e=o;
var v=this.b$['java.util.concurrent.ConcurrentHashMap'].get$O.apply(this.b$['java.util.concurrent.ConcurrentHashMap'], [e.getKey$()]);
return v != null  && v.equals$O(e.getValue$()) ;
});

Clazz.newMeth(C$, 'remove$O',  function (o) {
if (!(Clazz.instanceOf(o, "java.util.Map.Entry"))) return false;
var e=o;
return this.b$['java.util.concurrent.ConcurrentHashMap'].remove$O$O.apply(this.b$['java.util.concurrent.ConcurrentHashMap'], [e.getKey$(), e.getValue$()]);
});

Clazz.newMeth(C$, 'size$',  function () {
return this.b$['java.util.concurrent.ConcurrentHashMap'].size$.apply(this.b$['java.util.concurrent.ConcurrentHashMap'], []);
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.b$['java.util.concurrent.ConcurrentHashMap'].isEmpty$.apply(this.b$['java.util.concurrent.ConcurrentHashMap'], []);
});

Clazz.newMeth(C$, 'clear$',  function () {
this.b$['java.util.concurrent.ConcurrentHashMap'].clear$.apply(this.b$['java.util.concurrent.ConcurrentHashMap'], []);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:36 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
