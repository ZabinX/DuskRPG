(function(){var P$=Clazz.newPackage("java.awt.dnd"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DnDEventMulticaster", null, 'java.awt.AWTEventMulticaster', ['java.awt.dnd.DragSourceListener', 'java.awt.dnd.DragSourceMotionListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_EventListener$java_util_EventListener',  function (a, b) {
;C$.superclazz.c$$java_util_EventListener$java_util_EventListener.apply(this,[a, b]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'dragEnter$java_awt_dnd_DragSourceDragEvent',  function (dsde) {
(this.a).dragEnter$java_awt_dnd_DragSourceDragEvent(dsde);
(this.b).dragEnter$java_awt_dnd_DragSourceDragEvent(dsde);
});

Clazz.newMeth(C$, 'dragOver$java_awt_dnd_DragSourceDragEvent',  function (dsde) {
(this.a).dragOver$java_awt_dnd_DragSourceDragEvent(dsde);
(this.b).dragOver$java_awt_dnd_DragSourceDragEvent(dsde);
});

Clazz.newMeth(C$, 'dropActionChanged$java_awt_dnd_DragSourceDragEvent',  function (dsde) {
(this.a).dropActionChanged$java_awt_dnd_DragSourceDragEvent(dsde);
(this.b).dropActionChanged$java_awt_dnd_DragSourceDragEvent(dsde);
});

Clazz.newMeth(C$, 'dragExit$java_awt_dnd_DragSourceEvent',  function (dse) {
(this.a).dragExit$java_awt_dnd_DragSourceEvent(dse);
(this.b).dragExit$java_awt_dnd_DragSourceEvent(dse);
});

Clazz.newMeth(C$, 'dragDropEnd$java_awt_dnd_DragSourceDropEvent',  function (dsde) {
(this.a).dragDropEnd$java_awt_dnd_DragSourceDropEvent(dsde);
(this.b).dragDropEnd$java_awt_dnd_DragSourceDropEvent(dsde);
});

Clazz.newMeth(C$, 'dragMouseMoved$java_awt_dnd_DragSourceDragEvent',  function (dsde) {
(this.a).dragMouseMoved$java_awt_dnd_DragSourceDragEvent(dsde);
(this.b).dragMouseMoved$java_awt_dnd_DragSourceDragEvent(dsde);
});

Clazz.newMeth(C$, 'add$java_awt_dnd_DragSourceListener$java_awt_dnd_DragSourceListener',  function (a, b) {
return C$.addInternal$java_util_EventListener$java_util_EventListener(a, b);
}, 1);

Clazz.newMeth(C$, 'add$java_awt_dnd_DragSourceMotionListener$java_awt_dnd_DragSourceMotionListener',  function (a, b) {
return C$.addInternal$java_util_EventListener$java_util_EventListener(a, b);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_dnd_DragSourceListener$java_awt_dnd_DragSourceListener',  function (l, oldl) {
return C$.removeInternal$java_util_EventListener$java_util_EventListener(l, oldl);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_dnd_DragSourceMotionListener$java_awt_dnd_DragSourceMotionListener',  function (l, ol) {
return C$.removeInternal$java_util_EventListener$java_util_EventListener(l, ol);
}, 1);

Clazz.newMeth(C$, 'addInternal$java_util_EventListener$java_util_EventListener',  function (a, b) {
if (a == null ) return b;
if (b == null ) return a;
return Clazz.new_(C$.c$$java_util_EventListener$java_util_EventListener,[a, b]);
}, 1);

Clazz.newMeth(C$, 'remove$java_util_EventListener',  function (oldl) {
if (oldl === this.a ) return this.b;
if (oldl === this.b ) return this.a;
var a2=C$.removeInternal$java_util_EventListener$java_util_EventListener(this.a, oldl);
var b2=C$.removeInternal$java_util_EventListener$java_util_EventListener(this.b, oldl);
if (a2 === this.a  && b2 === this.b  ) {
return this;
}return C$.addInternal$java_util_EventListener$java_util_EventListener(a2, b2);
});

Clazz.newMeth(C$, 'removeInternal$java_util_EventListener$java_util_EventListener',  function (l, oldl) {
if (l === oldl  || l == null  ) {
return null;
} else if (Clazz.instanceOf(l, "java.awt.dnd.DnDEventMulticaster")) {
return (l).remove$java_util_EventListener(oldl);
} else {
return l;
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:08 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
