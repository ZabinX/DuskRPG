(function(){var P$=Clazz.newPackage("java.awt"),p$1={},I$=[[0,'java.awt.Component',['java.awt.EventFilter','.FilterAction'],'sun.awt.SunToolkit','javajs.util.Lst',['java.awt.EventDispatchThread','.StopDispatchEvent'],'Thread',['java.awt.EventDispatchThread','.HierarchyEventFilter'],'swingjs.JSToolkit','sun.awt.AWTAutoShutdown']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EventDispatchThread", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javajs.util.JSThread');
C$.$classes$=[['StopDispatchEvent',0],['HierarchyEventFilter',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.eventFilters=Clazz.new_($I$(4,1));
this.modalFiltersCount=0;
this.doDispatch=true;
},1);

C$.$fields$=[['Z',['doDispatch'],'I',['modalFiltersCount','id'],'O',['theQueue','java.awt.EventQueue','eventFilters','javajs.util.Lst','filter','java.awt.EventFilter','cond','java.awt.Conditional']]]

Clazz.newMeth(C$, 'myInit$',  function () {
this.addEventFilter$java_awt_EventFilter(this.filter);
return true;
});

Clazz.newMeth(C$, 'isLooping$',  function () {
return (this.doDispatch && (this.cond == null  || this.cond.evaluate$() ) && !this.isInterrupted$()   || (this.doDispatch=false) );
});

Clazz.newMeth(C$, 'myLoop$',  function () {
var myid=this.id;
var me=this;
this.dispatchAndReturn$Runnable$I(((P$.EventDispatchThread$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "EventDispatchThread$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () {
this.b$['java.awt.EventDispatchThread'].pumpOneEventForFilters$I.apply(this.b$['java.awt.EventDispatchThread'], [this.$finals$.myid]);
});
})()
), Clazz.new_(P$.EventDispatchThread$lambda1.$init$,[this, {myid:myid}])), 1);
return (this.doDispatch=false);
});

Clazz.newMeth(C$, 'getDelayMillis$',  function () {
return 0;
});

Clazz.newMeth(C$, 'whenDone$',  function () {
});

Clazz.newMeth(C$, 'doFinally$',  function () {
if (!this.doDispatch) p$1.finish.apply(this, []);
});

Clazz.newMeth(C$, 'onException$Exception',  function (e) {
});

Clazz.newMeth(C$, 'c$$ThreadGroup$S$java_awt_EventQueue',  function (group, name, queue) {
;C$.superclazz.c$$ThreadGroup$S.apply(this,[group, name]);C$.$init$.apply(this);
this.theQueue=queue;
}, 1);

Clazz.newMeth(C$, 'stopDispatchingImpl$Z',  function (wait) {
var stopEvent=Clazz.new_($I$(5,1),[this, null]);
if ($I$(6).currentThread$() !== this ) {
this.theQueue.postEventPrivate$java_awt_AWTEvent(stopEvent);
if (wait) {
try {
this.join$();
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
}} else {
stopEvent.dispatch$();
}{
if (this.theQueue.getDispatchThread$() === this ) {
this.theQueue.detachDispatchThread$();
}}});

Clazz.newMeth(C$, 'stopDispatching$',  function () {
this.stopDispatchingImpl$Z(true);
});

Clazz.newMeth(C$, 'stopDispatchingLater$',  function () {
this.stopDispatchingImpl$Z(false);
});

Clazz.newMeth(C$, 'start$',  function () {
C$.superclazz.prototype.start$.apply(this, []);
});

Clazz.newMeth(C$, 'run$',  function () {
this.pumpEvents$I$java_awt_Conditional(-1, null);
});

Clazz.newMeth(C$, 'pumpEvents$I$java_awt_Conditional',  function (id, cond) {
this.pumpEventsForHierarchy$I$java_awt_Conditional$java_awt_Component(id, cond, null);
});

Clazz.newMeth(C$, 'pumpEventsForHierarchy$I$java_awt_Conditional$java_awt_Component',  function (id, cond, modalComponent) {
this.pumpEventsForFilter$I$java_awt_Conditional$java_awt_EventFilter(id, cond, Clazz.new_($I$(7,1).c$$java_awt_Component,[modalComponent]));
});

Clazz.newMeth(C$, 'pumpEventsForFilter$I$java_awt_Conditional$java_awt_EventFilter',  function (id, cond, filter) {
this.filter=filter;
this.cond=cond;
this.id=id;
C$.superclazz.prototype.run1$I.apply(this, [0]);
});

Clazz.newMeth(C$, 'dispatchAndReturn$Runnable$I',  function (r, mode) {
var me=this;
var f=function() { r.run$();
me.run1$I(mode);
}||null;
$I$(8).dispatch$O$I$I(f, 1, 0);
});

Clazz.newMeth(C$, 'finish',  function () {
this.doDispatch=false;
this.removeEventFilter$java_awt_EventFilter(this.filter);
{
if (this.theQueue.getDispatchThread$() === this ) {
this.theQueue.detachDispatchThread$();
}if (this.theQueue.peekEvent$() != null  || !$I$(3).isPostEventQueueEmpty$() ) {
this.theQueue.initDispatchThread$();
}$I$(9).getInstance$().notifyThreadFree$Thread(this);
}}, p$1);

Clazz.newMeth(C$, 'addEventFilter$java_awt_EventFilter',  function (filter) {
{
if (!this.eventFilters.contains$O(filter)) {
if (Clazz.instanceOf(filter, "java.awt.ModalEventFilter")) {
var newFilter=filter;
var k=0;
for (k=0; k < this.eventFilters.size$(); k++) {
var f=this.eventFilters.get$I(k);
if (Clazz.instanceOf(f, "java.awt.ModalEventFilter")) {
var cf=f;
if (cf.compareTo$java_awt_ModalEventFilter(newFilter) > 0) {
break;
}}}
this.eventFilters.add$I$O(k, filter);
++this.modalFiltersCount;
} else {
this.eventFilters.addLast$O(filter);
}}}});

Clazz.newMeth(C$, 'removeEventFilter$java_awt_EventFilter',  function (filter) {
{
if (this.eventFilters.contains$O(filter)) {
if (Clazz.instanceOf(filter, "java.awt.ModalEventFilter")) {
--this.modalFiltersCount;
}this.eventFilters.removeObj$O(filter);
}}});

Clazz.newMeth(C$, 'pumpOneEventForFilters$I',  function (id) {
try {
var event;
var eventOK;
do {
event=(id == -1) ? this.theQueue.getNextEvent$() : this.theQueue.getNextEventForID$I(id);
if (event == null ) return (this.doDispatch=false);
eventOK=true;
{
for (var i=this.eventFilters.size$() - 1; i >= 0; i--) {
var f=this.eventFilters.get$I(i);
var accept=f.acceptEvent$java_awt_AWTEvent(event);
if (accept === $I$(2).REJECT ) {
eventOK=false;
break;
} else if (accept === $I$(2).ACCEPT_IMMEDIATELY ) {
break;
}}
}if (!eventOK) {
event.consume$();
}} while (eventOK == false );
this.theQueue.dispatchEvent$java_awt_AWTEvent(event);
return this.doDispatch=true;
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ThreadDeath")){
var death = e$$;
{
return this.doDispatch=false;
}
} else if (Clazz.exceptionOf(e$$,"InterruptedException")){
var interruptedException = e$$;
{
return this.doDispatch=false;
}
} else {
var e = e$$;
{
p$1.processException$Throwable$Z.apply(this, [e, this.modalFiltersCount > 0]);
}
}
}
return this.doDispatch=true;
});

Clazz.newMeth(C$, 'processException$Throwable$Z',  function (e, isModal) {
if (!p$1.handleException$Throwable.apply(this, [e])) {
if (isModal) {
System.err.println$S("Exception occurred during event dispatching:");
e.printStackTrace$();
} else if (Clazz.instanceOf(e, "java.lang.RuntimeException")) {
throw e;
} else if (Clazz.instanceOf(e, "java.lang.Error")) {
throw e;
} else {
var isTypeError=(!!e.stack ||false);
if (isTypeError) {
e.printStackTrace$();
}}}}, p$1);

Clazz.newMeth(C$, 'handleException$Throwable',  function (thrown) {
return false;
}, p$1);

Clazz.newMeth(C$, 'isDispatching$java_awt_EventQueue',  function (eq) {
return this.theQueue.equals$O(eq);
});

Clazz.newMeth(C$, 'getEventQueue$',  function () {
return this.theQueue;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.EventDispatchThread, "StopDispatchEvent", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.awt.AWTEvent', 'java.awt.ActiveEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$O$I.apply(this,[this.b$['java.awt.EventDispatchThread'], 0]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'dispatch$',  function () {
this.b$['java.awt.EventDispatchThread'].doDispatch=false;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EventDispatchThread, "HierarchyEventFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.awt.EventFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['modalComponent','java.awt.Component']]]

Clazz.newMeth(C$, 'c$$java_awt_Component',  function (modalComponent) {
;C$.$init$.apply(this);
this.modalComponent=modalComponent;
}, 1);

Clazz.newMeth(C$, 'acceptEvent$java_awt_AWTEvent',  function (event) {
if (this.modalComponent != null ) {
var eventID=event.getID$();
var mouseEvent=(eventID >= 500) && (eventID <= 507) ;
var actionEvent=(eventID >= 1001) && (eventID <= 1001) ;
var windowClosingEvent=(eventID == 201);
if ($I$(1).isInstanceOf$O$S(this.modalComponent, "javax.swing.JInternalFrame")) {
return windowClosingEvent ? $I$(2).REJECT : $I$(2).ACCEPT;
}if (mouseEvent || actionEvent || windowClosingEvent  ) {
var o=event.getSource$();
if (Clazz.instanceOf(o, "sun.awt.ModalExclude")) {
return $I$(2).ACCEPT;
} else if (Clazz.instanceOf(o, "java.awt.Component")) {
var c=o;
var modalExcluded=false;
if (Clazz.instanceOf(this.modalComponent, "java.awt.Container")) {
while (c !== this.modalComponent  && c != null  ){
if ((Clazz.instanceOf(c, "java.awt.Window")) && ($I$(3).isModalExcluded$java_awt_Window(c)) ) {
modalExcluded=true;
break;
}c=c.getParent$();
}
}if (!modalExcluded && (c !== this.modalComponent ) ) {
return $I$(2).REJECT;
}}}}return $I$(2).ACCEPT;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
