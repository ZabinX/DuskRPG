(function(){var P$=Clazz.newPackage("sun.awt"),p$1={},I$=[[0,'java.util.HashSet','java.util.IdentityHashMap','java.awt.AWTEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AWTAutoShutdown", null, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.busyThreadSet=Clazz.new_($I$(1,1).c$$I,[7]);
this.toolkitThreadBusy=false;
this.peerMap=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['toolkitThreadBusy'],'O',['busyThreadSet','java.util.HashSet','peerMap','java.util.Map']]
,['O',['theInstance','sun.awt.AWTAutoShutdown']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getInstance$',  function () {
return (C$.theInstance == null  ? (C$.theInstance=Clazz.new_(C$)) : C$.theInstance);
}, 1);

Clazz.newMeth(C$, 'notifyToolkitThreadBusy$',  function () {
p$1.setToolkitBusy$Z.apply(C$.getInstance$(), [true]);
}, 1);

Clazz.newMeth(C$, 'notifyToolkitThreadFree$',  function () {
p$1.setToolkitBusy$Z.apply(C$.getInstance$(), [false]);
}, 1);

Clazz.newMeth(C$, 'notifyThreadBusy$Thread',  function (thread) {
this.busyThreadSet.add$O(thread);
});

Clazz.newMeth(C$, 'notifyThreadFree$Thread',  function (thread) {
this.busyThreadSet.remove$O(thread);
});

Clazz.newMeth(C$, 'notifyPeerMapUpdated$',  function () {
if (!p$1.isReadyToShutdown.apply(this, [])) {
p$1.activateBlockerThread.apply(this, []);
}});

Clazz.newMeth(C$, 'isReadyToShutdown',  function () {
return (!this.toolkitThreadBusy && this.peerMap.isEmpty$() && this.busyThreadSet.isEmpty$()  );
}, p$1);

Clazz.newMeth(C$, 'setToolkitBusy$Z',  function (busy) {
if (busy != this.toolkitThreadBusy ) {
if (busy != this.toolkitThreadBusy ) {
if (busy) {
this.toolkitThreadBusy=busy;
} else {
this.toolkitThreadBusy=busy;
}}}}, p$1);

Clazz.newMeth(C$, 'run$',  function () {
});

Clazz.newMeth(C$, 'getShutdownEvent$',  function () {
return ((P$.AWTAutoShutdown$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AWTAutoShutdown$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('java.awt.AWTEvent'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
})()
), Clazz.new_([this, null, C$.getInstance$(), 0],$I$(3,1).c$$O$I,P$.AWTAutoShutdown$1));
}, 1);

Clazz.newMeth(C$, 'activateBlockerThread',  function () {
}, p$1);

Clazz.newMeth(C$, 'registerPeer$O$O',  function (target, peer) {
this.peerMap.put$O$O(target, peer);
this.notifyPeerMapUpdated$();
});

Clazz.newMeth(C$, 'unregisterPeer$O$O',  function (target, peer) {
if (this.peerMap.get$O(target) === peer ) {
this.peerMap.remove$O(target);
}});

Clazz.newMeth(C$, 'getPeer$O',  function (target) {
return this.peerMap.get$O(target);
});

Clazz.newMeth(C$, 'dumpPeers$java_util_logging_Logger',  function (aLog) {
aLog.fine$S("Mapped peers:");
for (var key, $key = this.peerMap.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
aLog.fine$S(key + "->" + this.peerMap.get$O(key) );
}
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:42 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
