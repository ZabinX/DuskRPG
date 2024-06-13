(function(){var P$=Clazz.newPackage("sun.awt"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PeerEvent", null, 'java.awt.event.InvocationEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['flags']]]

Clazz.newMeth(C$, 'c$$O$Runnable$J',  function (source, runnable, flags) {
C$.c$$O$Runnable$O$Z$J.apply(this, [source, runnable, null, false, flags]);
}, 1);

Clazz.newMeth(C$, 'c$$O$Runnable$O$Z$J',  function (source, runnable, notifier, catchExceptions, flags) {
;C$.superclazz.c$$O$I$Runnable$O$Z.apply(this,[source, 1200, runnable, notifier, catchExceptions]);C$.$init$.apply(this);
this.flags=flags;
}, 1);

Clazz.newMeth(C$, 'getFlags$',  function () {
return this.flags;
});

Clazz.newMeth(C$, 'coalesceEvents$sun_awt_PeerEvent',  function (newEvent) {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:42 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
