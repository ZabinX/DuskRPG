(function(){var P$=Clazz.newPackage("java.awt.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AWTEventListenerProxy", null, 'java.util.EventListenerProxy', 'java.awt.event.AWTEventListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['eventMask']]]

Clazz.newMeth(C$, 'c$$J$java_awt_event_AWTEventListener',  function (eventMask, listener) {
;C$.superclazz.c$$java_util_EventListener.apply(this,[listener]);C$.$init$.apply(this);
this.eventMask=eventMask;
}, 1);

Clazz.newMeth(C$, 'eventDispatched$java_awt_AWTEvent',  function (evt) {
(this.getListener$()).eventDispatched$java_awt_AWTEvent(evt);
});

Clazz.newMeth(C$, 'getEventMask$',  function () {
return this.eventMask;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:08 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
