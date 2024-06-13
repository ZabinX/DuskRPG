(function(){var P$=Clazz.newPackage("java.awt.dnd"),I$=[[0,'java.util.ArrayList','java.awt.dnd.DragGestureEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DragGestureRecognizer", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.events=Clazz.new_($I$(1,1).c$$I,[1]);
},1);

C$.$fields$=[['I',['sourceActions'],'O',['dragSource','java.awt.dnd.DragSource','component','java.awt.Component','dragGestureListener','java.awt.dnd.DragGestureListener','events','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$$java_awt_dnd_DragSource$java_awt_Component$I$java_awt_dnd_DragGestureListener',  function (ds, c, sa, dgl) {
;C$.$init$.apply(this);
if (ds == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null DragSource"]);
this.dragSource=ds;
this.component=c;
this.sourceActions=sa & (1073741827);
try {
if (dgl != null ) this.addDragGestureListener$java_awt_dnd_DragGestureListener(dgl);
} catch (tmle) {
if (Clazz.exceptionOf(tmle,"java.util.TooManyListenersException")){
} else {
throw tmle;
}
}
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_dnd_DragSource$java_awt_Component$I',  function (ds, c, sa) {
C$.c$$java_awt_dnd_DragSource$java_awt_Component$I$java_awt_dnd_DragGestureListener.apply(this, [ds, c, sa, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_dnd_DragSource$java_awt_Component',  function (ds, c) {
C$.c$$java_awt_dnd_DragSource$java_awt_Component$I.apply(this, [ds, c, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_dnd_DragSource',  function (ds) {
C$.c$$java_awt_dnd_DragSource$java_awt_Component.apply(this, [ds, null]);
}, 1);

Clazz.newMeth(C$, 'getDragSource$',  function () {
return this.dragSource;
});

Clazz.newMeth(C$, 'getComponent$',  function () {
return this.component;
});

Clazz.newMeth(C$, 'setComponent$java_awt_Component',  function (c) {
if (this.component != null  && this.dragGestureListener != null  ) this.unregisterListeners$();
this.component=c;
if (this.component != null  && this.dragGestureListener != null  ) this.registerListeners$();
});

Clazz.newMeth(C$, 'getSourceActions$',  function () {
return this.sourceActions;
});

Clazz.newMeth(C$, 'setSourceActions$I',  function (actions) {
this.sourceActions=actions & (1073741827);
});

Clazz.newMeth(C$, 'getTriggerEvent$',  function () {
return this.events.isEmpty$() ? null : this.events.get$I(0);
});

Clazz.newMeth(C$, 'resetRecognizer$',  function () {
this.events.clear$();
});

Clazz.newMeth(C$, 'addDragGestureListener$java_awt_dnd_DragGestureListener',  function (dgl) {
if (this.dragGestureListener != null ) throw Clazz.new_(Clazz.load('java.util.TooManyListenersException'));
 else {
this.dragGestureListener=dgl;
if (this.component != null ) this.registerListeners$();
}});

Clazz.newMeth(C$, 'removeDragGestureListener$java_awt_dnd_DragGestureListener',  function (dgl) {
if (this.dragGestureListener == null  || !this.dragGestureListener.equals$O(dgl) ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
 else {
this.dragGestureListener=null;
if (this.component != null ) this.unregisterListeners$();
}});

Clazz.newMeth(C$, 'fireDragGestureRecognized$I$java_awt_Point',  function (dragAction, p) {
try {
if (this.dragGestureListener != null ) {
this.dragGestureListener.dragGestureRecognized$java_awt_dnd_DragGestureEvent(Clazz.new_($I$(2,1).c$$java_awt_dnd_DragGestureRecognizer$I$java_awt_Point$java_util_List,[this, dragAction, p, this.events]));
}} finally {
this.events.clear$();
}
});

Clazz.newMeth(C$, 'appendEvent$java_awt_event_InputEvent',  function (awtie) {
this.events.add$O(awtie);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:08 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
