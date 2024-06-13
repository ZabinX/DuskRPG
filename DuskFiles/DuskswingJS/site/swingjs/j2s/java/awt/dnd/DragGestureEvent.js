(function(){var P$=Clazz.newPackage("java.awt.dnd"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DragGestureEvent", null, 'java.util.EventObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['action'],'O',['events','java.util.List','dragSource','java.awt.dnd.DragSource','component','java.awt.Component','origin','java.awt.Point']]]

Clazz.newMeth(C$, 'c$$java_awt_dnd_DragGestureRecognizer$I$java_awt_Point$java_util_List',  function (dgr, act, ori, evs) {
;C$.superclazz.c$$O.apply(this,[dgr]);C$.$init$.apply(this);
if ((this.component=dgr.getComponent$()) == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null component"]);
if ((this.dragSource=dgr.getDragSource$()) == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null DragSource"]);
if (evs == null  || evs.isEmpty$() ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null or empty list of events"]);
if (act != 1 && act != 2  && act != 1073741824 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad action"]);
if (ori == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null origin"]);
this.events=evs;
this.action=act;
this.origin=ori;
}, 1);

Clazz.newMeth(C$, 'getSourceAsDragGestureRecognizer$',  function () {
return this.getSource$();
});

Clazz.newMeth(C$, 'getComponent$',  function () {
return this.component;
});

Clazz.newMeth(C$, 'getDragSource$',  function () {
return this.dragSource;
});

Clazz.newMeth(C$, 'getDragOrigin$',  function () {
return this.origin;
});

Clazz.newMeth(C$, 'iterator$',  function () {
return this.events.iterator$();
});

Clazz.newMeth(C$, 'toArray$',  function () {
return this.events.toArray$();
});

Clazz.newMeth(C$, 'toArray$OA',  function (array) {
return this.events.toArray$OA(array);
});

Clazz.newMeth(C$, 'getDragAction$',  function () {
return this.action;
});

Clazz.newMeth(C$, 'getTriggerEvent$',  function () {
return this.getSourceAsDragGestureRecognizer$().getTriggerEvent$();
});

Clazz.newMeth(C$, 'startDrag$java_awt_Cursor$java_awt_datatransfer_Transferable',  function (dragCursor, transferable) {
this.dragSource.startDrag$java_awt_dnd_DragGestureEvent$java_awt_Cursor$java_awt_datatransfer_Transferable$java_awt_dnd_DragSourceListener(this, dragCursor, transferable, null);
});

Clazz.newMeth(C$, 'startDrag$java_awt_Cursor$java_awt_datatransfer_Transferable$java_awt_dnd_DragSourceListener',  function (dragCursor, transferable, dsl) {
this.dragSource.startDrag$java_awt_dnd_DragGestureEvent$java_awt_Cursor$java_awt_datatransfer_Transferable$java_awt_dnd_DragSourceListener(this, dragCursor, transferable, dsl);
});

Clazz.newMeth(C$, 'startDrag$java_awt_Cursor$java_awt_Image$java_awt_Point$java_awt_datatransfer_Transferable$java_awt_dnd_DragSourceListener',  function (dragCursor, dragImage, imageOffset, transferable, dsl) {
this.dragSource.startDrag$java_awt_dnd_DragGestureEvent$java_awt_Cursor$java_awt_Image$java_awt_Point$java_awt_datatransfer_Transferable$java_awt_dnd_DragSourceListener(this, dragCursor, dragImage, imageOffset, transferable, dsl);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:08 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
