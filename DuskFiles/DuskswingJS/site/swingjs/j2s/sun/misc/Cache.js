(function(){var P$=Clazz.newPackage("sun.misc"),p$1={},I$=[[0,'sun.misc.CacheEntry','Error','sun.misc.CacheEnumerator']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Cache", null, 'java.util.Dictionary');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['loadFactor'],'I',['count','threshold'],'O',['table','sun.misc.CacheEntry[]']]]

Clazz.newMeth(C$, 'init$I$F',  function (initialCapacity, loadFactor) {
if ((initialCapacity <= 0) || (loadFactor <= 0.0 ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.loadFactor=loadFactor;
this.table=Clazz.array($I$(1), [initialCapacity]);
this.threshold=((initialCapacity * loadFactor)|0);
}, p$1);

Clazz.newMeth(C$, 'c$$I$F',  function (initialCapacity, loadFactor) {
Clazz.super_(C$, this);
p$1.init$I$F.apply(this, [initialCapacity, loadFactor]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (initialCapacity) {
Clazz.super_(C$, this);
p$1.init$I$F.apply(this, [initialCapacity, 0.75]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
try {
p$1.init$I$F.apply(this, [101, 0.75]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"IllegalArgumentException")){
throw Clazz.new_($I$(2,1).c$$S,["panic"]);
} else {
throw ex;
}
}
}, 1);

Clazz.newMeth(C$, 'size$',  function () {
return this.count;
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return this.count == 0;
});

Clazz.newMeth(C$, 'keys$',  function () {
return Clazz.new_($I$(3,1).c$$sun_misc_CacheEntryA$Z,[this.table, true]);
});

Clazz.newMeth(C$, 'elements$',  function () {
return Clazz.new_($I$(3,1).c$$sun_misc_CacheEntryA$Z,[this.table, false]);
});

Clazz.newMeth(C$, 'get$O',  function (key) {
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
for (var e=tab[index]; e != null ; e=e.next) {
if ((e.hash == hash) && e.key.equals$O(key) ) {
return e.check$();
}}
return null;
});

Clazz.newMeth(C$, 'rehash$',  function () {
var oldCapacity=this.table.length;
var oldTable=this.table;
var newCapacity=oldCapacity * 2 + 1;
var newTable=Clazz.array($I$(1), [newCapacity]);
this.threshold=((newCapacity * this.loadFactor)|0);
this.table=newTable;
for (var i=oldCapacity; i-- > 0; ) {
for (var old=oldTable[i]; old != null ; ) {
var e=old;
old=old.next;
if (e.check$() != null ) {
var index=(e.hash & 2147483647) % newCapacity;
e.next=newTable[index];
newTable[index]=e;
} else --this.count;
}
}
});

Clazz.newMeth(C$, 'put$O$O',  function (key, value) {
if (value == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
var ne=null;
for (var e=tab[index]; e != null ; e=e.next) {
if ((e.hash == hash) && e.key.equals$O(key) ) {
var old=e.check$();
e.setThing$O(value);
return old;
} else if (e.check$() == null ) ne=e;
}
if (this.count >= this.threshold) {
this.rehash$();
return this.put$O$O(key, value);
}if (ne == null ) {
ne=Clazz.new_($I$(1,1));
ne.next=tab[index];
tab[index]=ne;
++this.count;
}ne.hash=hash;
ne.key=key;
ne.setThing$O(value);
return null;
});

Clazz.newMeth(C$, 'remove$O',  function (key) {
var tab=this.table;
var hash=key.hashCode$();
var index=(hash & 2147483647) % tab.length;
for (var e=tab[index], prev=null; e != null ; prev=e, e=e.next) {
if ((e.hash == hash) && e.key.equals$O(key) ) {
if (prev != null ) {
prev.next=e.next;
} else {
tab[index]=e.next;
}--this.count;
return e.check$();
}}
return null;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
