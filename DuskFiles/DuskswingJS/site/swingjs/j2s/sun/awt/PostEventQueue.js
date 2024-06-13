(function(){var P$=Clazz.newPackage("sun.awt"),I$=[[0,'sun.awt.EventQueueItem','sun.awt.SunToolkit']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PostEventQueue");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.queueHead=null;
this.queueTail=null;
},1);

C$.$fields$=[['O',['queueHead','sun.awt.EventQueueItem','+queueTail','eventQueue','java.awt.EventQueue']]]

Clazz.newMeth(C$, 'c$$java_awt_EventQueue',  function (eq) {
;C$.$init$.apply(this);
this.eventQueue=eq;
}, 1);

Clazz.newMeth(C$, 'noEvents$',  function () {
return this.queueHead == null ;
});

Clazz.newMeth(C$, 'flush$',  function () {
if (this.queueHead != null ) {
var tempQueue;
{
tempQueue=this.queueHead;
this.queueHead=this.queueTail=null;
while (tempQueue != null ){
this.eventQueue.postEvent$java_awt_AWTEvent(tempQueue.event);
tempQueue=tempQueue.next;
}
}}});

Clazz.newMeth(C$, 'postEvent$java_awt_AWTEvent',  function (event) {
var item=Clazz.new_($I$(1,1).c$$java_awt_AWTEvent,[event]);
{
if (this.queueHead == null ) {
this.queueHead=this.queueTail=item;
} else {
this.queueTail.next=item;
this.queueTail=item;
}}$I$(2).wakeupEventQueue$java_awt_EventQueue$Z(this.eventQueue, false);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:42 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
