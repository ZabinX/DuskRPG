(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'Runtime',['java.util.concurrent.Exchanger','.Slot'],'java.util.concurrent.atomic.AtomicInteger',['java.util.concurrent.Exchanger','.Node'],'java.util.concurrent.locks.LockSupport','Thread']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Exchanger", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Node',26],['Slot',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.arena=Clazz.array($I$(2), [32]);
this.max=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['O',['arena','java.util.concurrent.Exchanger.Slot[]','max','java.util.concurrent.atomic.AtomicInteger']]
,['I',['NCPU','FULL','SPINS','TIMED_SPINS'],'O',['CANCEL','java.lang.Object','+NULL_ITEM']]]

Clazz.newMeth(C$, 'doExchange$O$Z$J',  function (item, timed, nanos) {
var me=Clazz.new_($I$(4,1).c$$O,[item]);
var index=p$1.hashIndex.apply(this, []);
var fails=0;
for (; ; ) {
var y;
var slot=this.arena[index];
if (slot == null ) p$1.createSlot$I.apply(this, [index]);
 else if ((y=slot.get$()) != null  && slot.compareAndSet$O$O(y, null) ) {
var you=y;
if (you.compareAndSet$O$O(null, item)) {
$I$(5).unpark$Thread(you.waiter);
return you.item;
}} else if (y == null  && slot.compareAndSet$O$O(null, me) ) {
if (index == 0) return timed ? p$1.awaitNanos$java_util_concurrent_Exchanger_Node$java_util_concurrent_Exchanger_Slot$J.apply(this, [me, slot, nanos]) : C$.await$java_util_concurrent_Exchanger_Node$java_util_concurrent_Exchanger_Slot(me, slot);
var v=C$.spinWait$java_util_concurrent_Exchanger_Node$java_util_concurrent_Exchanger_Slot(me, slot);
if (v !== C$.CANCEL ) return v;
me=Clazz.new_($I$(4,1).c$$O,[item]);
var m=this.max.get$();
if (m > (index>>>=1)) this.max.compareAndSet$I$I(m, m - 1);
} else if (++fails > 1) {
var m=this.max.get$();
if (fails > 3 && m < C$.FULL  && this.max.compareAndSet$I$I(m, m + 1) ) index=m + 1;
 else if (--index < 0) index=m;
}}
}, p$1);

Clazz.newMeth(C$, 'hashIndex',  function () {
var id=$I$(6).currentThread$().getId$();
var hash=((Long.$ival((Long.$xor(id,(Long.$usr(id,32)))))) ^ -2128831035) * 16777619;
var m=this.max.get$();
var nbits=(((-1024 >> m) & 4) | ((504 >>> m) & 2) | ((-65294 >>> m) & 1) );
var index;
while ((index=hash & ((1 << nbits) - 1)) > m)hash=(hash >>> nbits) | (hash << (33 - nbits));

return index;
}, p$1);

Clazz.newMeth(C$, 'createSlot$I',  function (index) {
var newSlot=Clazz.new_($I$(2,1));
var a=this.arena;
{
if (a[index] == null ) a[index]=newSlot;
}}, p$1);

Clazz.newMeth(C$, 'tryCancel$java_util_concurrent_Exchanger_Node$java_util_concurrent_Exchanger_Slot',  function (node, slot) {
if (!node.compareAndSet$O$O(null, C$.CANCEL)) return false;
if (slot.get$() === node ) slot.compareAndSet$O$O(node, null);
return true;
}, 1);

Clazz.newMeth(C$, 'spinWait$java_util_concurrent_Exchanger_Node$java_util_concurrent_Exchanger_Slot',  function (node, slot) {
var spins=C$.SPINS;
for (; ; ) {
var v=node.get$();
if (v != null ) return v;
 else if (spins > 0) --spins;
 else C$.tryCancel$java_util_concurrent_Exchanger_Node$java_util_concurrent_Exchanger_Slot(node, slot);
}
}, 1);

Clazz.newMeth(C$, 'await$java_util_concurrent_Exchanger_Node$java_util_concurrent_Exchanger_Slot',  function (node, slot) {
var w=$I$(6).currentThread$();
var spins=C$.SPINS;
for (; ; ) {
var v=node.get$();
if (v != null ) return v;
 else if (spins > 0) --spins;
 else if (node.waiter == null ) node.waiter=w;
 else if (w.isInterrupted$()) C$.tryCancel$java_util_concurrent_Exchanger_Node$java_util_concurrent_Exchanger_Slot(node, slot);
 else $I$(5).park$O(node);
}
}, 1);

Clazz.newMeth(C$, 'awaitNanos$java_util_concurrent_Exchanger_Node$java_util_concurrent_Exchanger_Slot$J',  function (node, slot, nanos) {
var spins=C$.TIMED_SPINS;
var lastTime=0;
var w=null;
for (; ; ) {
var v=node.get$();
if (v != null ) return v;
var now=System.nanoTime$();
if (w == null ) w=$I$(6).currentThread$();
 else (nanos=Long.$sub(nanos,(Long.$sub(now,lastTime))));
lastTime=now;
if (Long.$gt(nanos,0 )) {
if (spins > 0) --spins;
 else if (node.waiter == null ) node.waiter=w;
 else if (w.isInterrupted$()) C$.tryCancel$java_util_concurrent_Exchanger_Node$java_util_concurrent_Exchanger_Slot(node, slot);
 else $I$(5).parkNanos$O$J(node, nanos);
} else if (C$.tryCancel$java_util_concurrent_Exchanger_Node$java_util_concurrent_Exchanger_Slot(node, slot) && !w.isInterrupted$() ) return p$1.scanOnTimeout$java_util_concurrent_Exchanger_Node.apply(this, [node]);
}
}, p$1);

Clazz.newMeth(C$, 'scanOnTimeout$java_util_concurrent_Exchanger_Node',  function (node) {
var y;
for (var j=this.arena.length - 1; j >= 0; --j) {
var slot=this.arena[j];
if (slot != null ) {
while ((y=slot.get$()) != null ){
if (slot.compareAndSet$O$O(y, null)) {
var you=y;
if (you.compareAndSet$O$O(null, node.item)) {
$I$(5).unpark$Thread(you.waiter);
return you.item;
}}}
}}
return C$.CANCEL;
}, p$1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'exchange$O',  function (x) {
if (!$I$(6).interrupted$()) {
var v=p$1.doExchange$O$Z$J.apply(this, [x == null  ? C$.NULL_ITEM : x, false, 0]);
if (v === C$.NULL_ITEM ) return null;
if (v !== C$.CANCEL ) return v;
$I$(6).interrupted$();
}throw Clazz.new_(Clazz.load('InterruptedException'));
});

Clazz.newMeth(C$, 'exchange$O$J$java_util_concurrent_TimeUnit',  function (x, timeout, unit) {
if (!$I$(6).interrupted$()) {
var v=p$1.doExchange$O$Z$J.apply(this, [x == null  ? C$.NULL_ITEM : x, true, unit.toNanos$J(timeout)]);
if (v === C$.NULL_ITEM ) return null;
if (v !== C$.CANCEL ) return v;
if (!$I$(6).interrupted$()) throw Clazz.new_(Clazz.load('java.util.concurrent.TimeoutException'));
}throw Clazz.new_(Clazz.load('InterruptedException'));
});

C$.$static$=function(){C$.$static$=0;
C$.NCPU=$I$(1).getRuntime$().availableProcessors$();
C$.FULL=Math.max(0, Math.min(32, (C$.NCPU/2|0)) - 1);
C$.SPINS=(C$.NCPU == 1) ? 0 : 2000;
C$.TIMED_SPINS=(C$.SPINS/20|0);
C$.CANCEL= Clazz.new_();
C$.NULL_ITEM= Clazz.new_();
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Exchanger, "Node", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.atomic.AtomicReference');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['item','java.lang.Object','waiter','Thread']]]

Clazz.newMeth(C$, 'c$$O',  function (item) {
Clazz.super_(C$, this);
this.item=item;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Exchanger, "Slot", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.util.concurrent.atomic.AtomicReference');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['q0','q1','q2','q3','q4','q5','q6','q7','q8','q9','qa','qb','qc','qd','qe']]]

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:36 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
