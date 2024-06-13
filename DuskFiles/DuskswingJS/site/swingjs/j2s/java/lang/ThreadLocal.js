(function(){var P$=java.lang,p$1={},p$2={},I$=[[0,'java.util.Objects',['ThreadLocal','.ThreadLocalMap','.Entry'],'java.util.concurrent.atomic.AtomicInteger',['ThreadLocal','.SuppliedThreadLocal'],'Thread',['ThreadLocal','.ThreadLocalMap']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ThreadLocal", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['SuppliedThreadLocal',24],['ThreadLocalMap',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.threadLocalHashCode=C$.nextHashCode$();
},1);

C$.$fields$=[['I',['threadLocalHashCode']]
,['O',['nextHashCode','java.util.concurrent.atomic.AtomicInteger']]]

Clazz.newMeth(C$, 'nextHashCode$',  function () {
return C$.nextHashCode.getAndAdd$I(1640531527);
}, 1);

Clazz.newMeth(C$, 'initialValue$',  function () {
return null;
});

Clazz.newMeth(C$, 'withInitial$java_util_function_Supplier',  function (supplier) {
return Clazz.new_($I$(4,1).c$$java_util_function_Supplier,[supplier]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'get$',  function () {
var t=$I$(5).currentThread$();
var map=this.getMap$Thread(t);
if (map != null ) {
var e=p$1.getEntry$ThreadLocal.apply(map, [this]);
if (e != null ) {
var result=e.value;
return result;
}}return p$2.setInitialValue.apply(this, []);
});

Clazz.newMeth(C$, 'setInitialValue',  function () {
var value=this.initialValue$();
var t=$I$(5).currentThread$();
var map=this.getMap$Thread(t);
if (map != null ) p$1.set$ThreadLocal$O.apply(map, [this, value]);
 else this.createMap$Thread$O(t, value);
return value;
}, p$2);

Clazz.newMeth(C$, 'set$O',  function (value) {
var t=$I$(5).currentThread$();
var map=this.getMap$Thread(t);
if (map != null ) p$1.set$ThreadLocal$O.apply(map, [this, value]);
 else this.createMap$Thread$O(t, value);
});

Clazz.newMeth(C$, 'remove$',  function () {
var m=this.getMap$Thread($I$(5).currentThread$());
if (m != null ) p$1.remove$ThreadLocal.apply(m, [this]);
});

Clazz.newMeth(C$, 'getMap$Thread',  function (t) {
return t.threadLocals;
});

Clazz.newMeth(C$, 'createMap$Thread$O',  function (t, firstValue) {
t.threadLocals=Clazz.new_($I$(6,1).c$$ThreadLocal$O,[this, firstValue]);
});

Clazz.newMeth(C$, 'createInheritedMap$ThreadLocal_ThreadLocalMap',  function (parentMap) {
return Clazz.new_($I$(6,1).c$$ThreadLocal_ThreadLocalMap,[parentMap]);
}, 1);

Clazz.newMeth(C$, 'childValue$O',  function (parentValue) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

C$.$static$=function(){C$.$static$=0;
C$.nextHashCode=Clazz.new_($I$(3,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ThreadLocal, "SuppliedThreadLocal", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'ThreadLocal');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['supplier','java.util.function.Supplier']]]

Clazz.newMeth(C$, 'c$$java_util_function_Supplier',  function (supplier) {
Clazz.super_(C$, this);
this.supplier=$I$(1).requireNonNull$O(supplier);
}, 1);

Clazz.newMeth(C$, 'initialValue$',  function () {
return this.supplier.get$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ThreadLocal, "ThreadLocalMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});
C$.$classes$=[['Entry',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.size=0;
},1);

C$.$fields$=[['I',['size','threshold'],'O',['table','ThreadLocal.ThreadLocalMap.Entry[]']]]

Clazz.newMeth(C$, 'setThreshold$I',  function (len) {
this.threshold=(len * 2/3|0);
}, p$1);

Clazz.newMeth(C$, 'nextIndex$I$I',  function (i, len) {
return ((i + 1 < len) ? i + 1 : 0);
}, 1);

Clazz.newMeth(C$, 'prevIndex$I$I',  function (i, len) {
return ((i - 1 >= 0) ? i - 1 : len - 1);
}, 1);

Clazz.newMeth(C$, 'c$$ThreadLocal$O',  function (firstKey, firstValue) {
;C$.$init$.apply(this);
this.table=Clazz.array($I$(2), [16]);
var i=firstKey.threadLocalHashCode & (15);
this.table[i]=Clazz.new_($I$(2,1).c$$ThreadLocal$O,[firstKey, firstValue]);
this.size=1;
p$1.setThreshold$I.apply(this, [16]);
}, 1);

Clazz.newMeth(C$, 'c$$ThreadLocal_ThreadLocalMap',  function (parentMap) {
;C$.$init$.apply(this);
var parentTable=parentMap.table;
var len=parentTable.length;
p$1.setThreshold$I.apply(this, [len]);
this.table=Clazz.array($I$(2), [len]);
for (var j=0; j < len; j++) {
var e=parentTable[j];
if (e != null ) {
var key=e.get$();
if (key != null ) {
var value=key.childValue$O(e.value);
var c=Clazz.new_($I$(2,1).c$$ThreadLocal$O,[key, value]);
var h=key.threadLocalHashCode & (len - 1);
while (this.table[h] != null )h=C$.nextIndex$I$I(h, len);

this.table[h]=c;
++this.size;
}}}
}, 1);

Clazz.newMeth(C$, 'getEntry$ThreadLocal',  function (key) {
var i=key.threadLocalHashCode & (this.table.length - 1);
var e=this.table[i];
if (e != null  && e.get$() === key  ) return e;
 else return p$1.getEntryAfterMiss$ThreadLocal$I$ThreadLocal_ThreadLocalMap_Entry.apply(this, [key, i, e]);
}, p$1);

Clazz.newMeth(C$, 'getEntryAfterMiss$ThreadLocal$I$ThreadLocal_ThreadLocalMap_Entry',  function (key, i, e) {
var tab=this.table;
var len=tab.length;
while (e != null ){
var k=e.get$();
if (k === key ) return e;
if (k == null ) p$1.expungeStaleEntry$I.apply(this, [i]);
 else i=C$.nextIndex$I$I(i, len);
e=tab[i];
}
return null;
}, p$1);

Clazz.newMeth(C$, 'set$ThreadLocal$O',  function (key, value) {
var tab=this.table;
var len=tab.length;
var i=key.threadLocalHashCode & (len - 1);
for (var e=tab[i]; e != null ; e=tab[i=C$.nextIndex$I$I(i, len)]) {
var k=e.get$();
if (k === key ) {
e.value=value;
return;
}if (k == null ) {
p$1.replaceStaleEntry$ThreadLocal$O$I.apply(this, [key, value, i]);
return;
}}
tab[i]=Clazz.new_($I$(2,1).c$$ThreadLocal$O,[key, value]);
var sz=++this.size;
if (!p$1.cleanSomeSlots$I$I.apply(this, [i, sz]) && sz >= this.threshold ) p$1.rehash.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'remove$ThreadLocal',  function (key) {
var tab=this.table;
var len=tab.length;
var i=key.threadLocalHashCode & (len - 1);
for (var e=tab[i]; e != null ; e=tab[i=C$.nextIndex$I$I(i, len)]) {
if (e.get$() === key ) {
e.clear$();
p$1.expungeStaleEntry$I.apply(this, [i]);
return;
}}
}, p$1);

Clazz.newMeth(C$, 'replaceStaleEntry$ThreadLocal$O$I',  function (key, value, staleSlot) {
var tab=this.table;
var len=tab.length;
var e;
var slotToExpunge=staleSlot;
for (var i=C$.prevIndex$I$I(staleSlot, len); (e=tab[i]) != null ; i=C$.prevIndex$I$I(i, len)) if (e.get$() == null ) slotToExpunge=i;

for (var i=C$.nextIndex$I$I(staleSlot, len); (e=tab[i]) != null ; i=C$.nextIndex$I$I(i, len)) {
var k=e.get$();
if (k === key ) {
e.value=value;
tab[i]=tab[staleSlot];
tab[staleSlot]=e;
if (slotToExpunge == staleSlot) slotToExpunge=i;
p$1.cleanSomeSlots$I$I.apply(this, [p$1.expungeStaleEntry$I.apply(this, [slotToExpunge]), len]);
return;
}if (k == null  && slotToExpunge == staleSlot ) slotToExpunge=i;
}
tab[staleSlot].value=null;
tab[staleSlot]=Clazz.new_($I$(2,1).c$$ThreadLocal$O,[key, value]);
if (slotToExpunge != staleSlot) p$1.cleanSomeSlots$I$I.apply(this, [p$1.expungeStaleEntry$I.apply(this, [slotToExpunge]), len]);
}, p$1);

Clazz.newMeth(C$, 'expungeStaleEntry$I',  function (staleSlot) {
var tab=this.table;
var len=tab.length;
tab[staleSlot].value=null;
tab[staleSlot]=null;
--this.size;
var e;
var i;
for (i=C$.nextIndex$I$I(staleSlot, len); (e=tab[i]) != null ; i=C$.nextIndex$I$I(i, len)) {
var k=e.get$();
if (k == null ) {
e.value=null;
tab[i]=null;
--this.size;
} else {
var h=k.threadLocalHashCode & (len - 1);
if (h != i) {
tab[i]=null;
while (tab[h] != null )h=C$.nextIndex$I$I(h, len);

tab[h]=e;
}}}
return i;
}, p$1);

Clazz.newMeth(C$, 'cleanSomeSlots$I$I',  function (i, n) {
var removed=false;
var tab=this.table;
var len=tab.length;
do {
i=C$.nextIndex$I$I(i, len);
var e=tab[i];
if (e != null  && e.get$() == null  ) {
n=len;
removed=true;
i=p$1.expungeStaleEntry$I.apply(this, [i]);
}} while ((n>>>=1) != 0);
return removed;
}, p$1);

Clazz.newMeth(C$, 'rehash',  function () {
p$1.expungeStaleEntries.apply(this, []);
if (this.size >= this.threshold - (this.threshold/4|0)) p$1.resize.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'resize',  function () {
var oldTab=this.table;
var oldLen=oldTab.length;
var newLen=oldLen * 2;
var newTab=Clazz.array($I$(2), [newLen]);
var count=0;
for (var j=0; j < oldLen; ++j) {
var e=oldTab[j];
if (e != null ) {
var k=e.get$();
if (k == null ) {
e.value=null;
} else {
var h=k.threadLocalHashCode & (newLen - 1);
while (newTab[h] != null )h=C$.nextIndex$I$I(h, newLen);

newTab[h]=e;
++count;
}}}
p$1.setThreshold$I.apply(this, [newLen]);
this.size=count;
this.table=newTab;
}, p$1);

Clazz.newMeth(C$, 'expungeStaleEntries',  function () {
var tab=this.table;
var len=tab.length;
for (var j=0; j < len; j++) {
var e=tab[j];
if (e != null  && e.get$() == null  ) p$1.expungeStaleEntry$I.apply(this, [j]);
}
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ThreadLocal.ThreadLocalMap, "Entry", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.lang.ref.WeakReference');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['value','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$ThreadLocal$O',  function (k, v) {
;C$.superclazz.c$$O.apply(this,[k]);C$.$init$.apply(this);
this.value=v;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:17 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
