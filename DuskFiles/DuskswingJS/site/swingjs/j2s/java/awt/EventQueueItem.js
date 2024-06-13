(function(){var P$=Clazz.newPackage("java.awt"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "EventQueueItem");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['id'],'O',['event','java.awt.AWTEvent','next','java.awt.EventQueueItem']]]

Clazz.newMeth(C$, 'c$$java_awt_AWTEvent',  function (evt) {
;C$.$init$.apply(this);
this.event=evt;
this.id=evt.getID$();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:03 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
