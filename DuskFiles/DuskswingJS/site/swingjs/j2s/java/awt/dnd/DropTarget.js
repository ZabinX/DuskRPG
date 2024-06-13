(function(){var P$=Clazz.newPackage("java.awt.dnd"),p$1={},I$=[[0,'java.awt.Rectangle','java.awt.Toolkit','javax.swing.Timer','java.awt.datatransfer.SystemFlavorMap','java.awt.dnd.DropTargetContext',['java.awt.dnd.DropTarget','.DropTargetAutoScroller']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DropTarget", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['java.awt.dnd.DropTargetListener', 'java.io.Serializable']);
C$.$classes$=[['DropTargetAutoScroller',12]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dropTargetContext=this.createDropTargetContext$();
this.actions=3;
this.active=true;
this.flavorMap=$I$(4).getDefaultFlavorMap$();
},1);

C$.$fields$=[['Z',['active'],'I',['actions'],'O',['dropTargetContext','java.awt.dnd.DropTargetContext','component','java.awt.Component','componentPeer','java.awt.peer.ComponentPeer','+nativePeer','autoScroller','java.awt.dnd.DropTarget.DropTargetAutoScroller','dtListener','java.awt.dnd.DropTargetListener','flavorMap','java.awt.datatransfer.FlavorMap']]]

Clazz.newMeth(C$, 'c$$java_awt_Component$I$java_awt_dnd_DropTargetListener$Z$java_awt_datatransfer_FlavorMap',  function (c, ops, dtl, act, fm) {
;C$.$init$.apply(this);
this.component=c;
this.setDefaultActions$I(ops);
if (dtl != null ) try {
this.addDropTargetListener$java_awt_dnd_DropTargetListener(dtl);
} catch (tmle) {
if (Clazz.exceptionOf(tmle,"java.util.TooManyListenersException")){
} else {
throw tmle;
}
}
if (c != null ) {
c.setDropTarget$java_awt_dnd_DropTarget(this);
this.setActive$Z(act);
}if (fm != null ) this.flavorMap=fm;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$I$java_awt_dnd_DropTargetListener$Z',  function (c, ops, dtl, act) {
C$.c$$java_awt_Component$I$java_awt_dnd_DropTargetListener$Z$java_awt_datatransfer_FlavorMap.apply(this, [c, ops, dtl, act, null]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$java_awt_Component$I$java_awt_dnd_DropTargetListener$Z$java_awt_datatransfer_FlavorMap.apply(this, [null, 3, null, true, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$java_awt_dnd_DropTargetListener',  function (c, dtl) {
C$.c$$java_awt_Component$I$java_awt_dnd_DropTargetListener$Z$java_awt_datatransfer_FlavorMap.apply(this, [c, 3, dtl, true, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Component$I$java_awt_dnd_DropTargetListener',  function (c, ops, dtl) {
C$.c$$java_awt_Component$I$java_awt_dnd_DropTargetListener$Z.apply(this, [c, ops, dtl, true]);
}, 1);

Clazz.newMeth(C$, 'setComponent$java_awt_Component',  function (c) {
if (this.component === c  || this.component != null  && this.component.equals$O(c)  ) return;
var old;
var oldPeer=null;
if ((old=this.component) != null ) {
this.clearAutoscroll$();
this.component=null;
if (this.componentPeer != null ) {
oldPeer=this.componentPeer;
this.removeNotify$java_awt_peer_ComponentPeer(this.componentPeer);
}old.setDropTarget$java_awt_dnd_DropTarget(null);
}if ((this.component=c) != null ) try {
c.setDropTarget$java_awt_dnd_DropTarget(this);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (old != null ) {
old.setDropTarget$java_awt_dnd_DropTarget(this);
this.addNotify$java_awt_peer_ComponentPeer(oldPeer);
}} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getComponent$',  function () {
return this.component;
});

Clazz.newMeth(C$, 'setDefaultActions$I',  function (ops) {
this.getDropTargetContext$().setTargetActions$I(ops & (1073741827));
});

Clazz.newMeth(C$, 'doSetDefaultActions$I',  function (ops) {
this.actions=ops;
});

Clazz.newMeth(C$, 'getDefaultActions$',  function () {
return this.actions;
});

Clazz.newMeth(C$, 'setActive$Z',  function (isActive) {
if (isActive != this.active ) {
this.active=isActive;
}if (!this.active) this.clearAutoscroll$();
});

Clazz.newMeth(C$, 'isActive$',  function () {
return this.active;
});

Clazz.newMeth(C$, 'addDropTargetListener$java_awt_dnd_DropTargetListener',  function (dtl) {
if (dtl == null ) return;
if (this.equals$O(dtl)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["DropTarget may not be its own Listener"]);
if (this.dtListener == null ) this.dtListener=dtl;
 else throw Clazz.new_(Clazz.load('java.util.TooManyListenersException'));
});

Clazz.newMeth(C$, 'removeDropTargetListener$java_awt_dnd_DropTargetListener',  function (dtl) {
if (dtl != null  && this.dtListener != null  ) {
if (this.dtListener.equals$O(dtl)) this.dtListener=null;
 else throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["listener mismatch"]);
}});

Clazz.newMeth(C$, 'dragEnter$java_awt_dnd_DropTargetDragEvent',  function (dtde) {
if (!this.active) return;
if (this.dtListener != null ) {
this.dtListener.dragEnter$java_awt_dnd_DropTargetDragEvent(dtde);
} else dtde.getDropTargetContext$().setTargetActions$I(0);
this.initializeAutoscrolling$java_awt_Point(dtde.getLocation$());
});

Clazz.newMeth(C$, 'dragOver$java_awt_dnd_DropTargetDragEvent',  function (dtde) {
if (!this.active) return;
if (this.dtListener != null  && this.active ) this.dtListener.dragOver$java_awt_dnd_DropTargetDragEvent(dtde);
this.updateAutoscroll$java_awt_Point(dtde.getLocation$());
});

Clazz.newMeth(C$, 'dropActionChanged$java_awt_dnd_DropTargetDragEvent',  function (dtde) {
if (!this.active) return;
if (this.dtListener != null ) this.dtListener.dropActionChanged$java_awt_dnd_DropTargetDragEvent(dtde);
this.updateAutoscroll$java_awt_Point(dtde.getLocation$());
});

Clazz.newMeth(C$, 'dragExit$java_awt_dnd_DropTargetEvent',  function (dte) {
if (!this.active) return;
if (this.dtListener != null  && this.active ) this.dtListener.dragExit$java_awt_dnd_DropTargetEvent(dte);
this.clearAutoscroll$();
});

Clazz.newMeth(C$, 'drop$java_awt_dnd_DropTargetDropEvent',  function (dtde) {
this.clearAutoscroll$();
if (this.dtListener != null  && this.active ) this.dtListener.drop$java_awt_dnd_DropTargetDropEvent(dtde);
 else {
dtde.rejectDrop$();
}});

Clazz.newMeth(C$, 'getFlavorMap$',  function () {
return this.flavorMap;
});

Clazz.newMeth(C$, 'setFlavorMap$java_awt_datatransfer_FlavorMap',  function (fm) {
this.flavorMap=fm == null  ? $I$(4).getDefaultFlavorMap$() : fm;
});

Clazz.newMeth(C$, 'addNotify$java_awt_peer_ComponentPeer',  function (peer) {
if (peer === this.componentPeer ) return;
this.componentPeer=peer;
for (var c=this.component; c != null  && Clazz.instanceOf(peer, "java.awt.peer.LightweightPeer") ; c=c.getParent$()) {
peer=c.peer ||null;
}
if (peer == null ) peer=this.componentPeer;
this.nativePeer=peer;
(peer).addDropTarget$java_awt_dnd_DropTarget(this);
});

Clazz.newMeth(C$, 'removeNotify$java_awt_peer_ComponentPeer',  function (peer) {
if (this.nativePeer != null ) (this.nativePeer).removeDropTarget$java_awt_dnd_DropTarget(this);
this.componentPeer=this.nativePeer=null;
});

Clazz.newMeth(C$, 'getDropTargetContext$',  function () {
return this.dropTargetContext;
});

Clazz.newMeth(C$, 'createDropTargetContext$',  function () {
return Clazz.new_($I$(5,1).c$$java_awt_dnd_DropTarget,[this]);
});

Clazz.newMeth(C$, 'createDropTargetAutoScroller$java_awt_Component$java_awt_Point',  function (c, p) {
return Clazz.new_($I$(6,1).c$$java_awt_Component$java_awt_Point,[c, p]);
});

Clazz.newMeth(C$, 'initializeAutoscrolling$java_awt_Point',  function (p) {
if (this.component == null  || !(Clazz.instanceOf(this.component, "java.awt.dnd.Autoscroll")) ) return;
this.autoScroller=this.createDropTargetAutoScroller$java_awt_Component$java_awt_Point(this.component, p);
});

Clazz.newMeth(C$, 'updateAutoscroll$java_awt_Point',  function (dragCursorLocn) {
if (this.autoScroller != null ) this.autoScroller.updateLocation$java_awt_Point(dragCursorLocn);
});

Clazz.newMeth(C$, 'clearAutoscroll$',  function () {
if (this.autoScroller != null ) {
this.autoScroller.stop$();
this.autoScroller=null;
}});
;
(function(){/*c*/var C$=Clazz.newClass(P$.DropTarget, "DropTargetAutoScroller", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.outer=Clazz.new_($I$(1,1));
this.inner=Clazz.new_($I$(1,1));
this.hysteresis=10;
},1);

C$.$fields$=[['I',['hysteresis'],'O',['component','java.awt.Component','autoScroll','java.awt.dnd.Autoscroll','timer','javax.swing.Timer','locn','java.awt.Point','+prev','outer','java.awt.Rectangle','+inner']]]

Clazz.newMeth(C$, 'c$$java_awt_Component$java_awt_Point',  function (c, p) {
;C$.$init$.apply(this);
this.component=c;
this.autoScroll=this.component;
var t=$I$(2).getDefaultToolkit$();
var initial=Integer.valueOf$I(100);
var interval=Integer.valueOf$I(100);
try {
initial=t.getDesktopProperty$S("DnD.Autoscroll.initialDelay");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
try {
interval=t.getDesktopProperty$S("DnD.Autoscroll.interval");
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
this.timer=Clazz.new_([interval.intValue$(), this],$I$(3,1).c$$I$java_awt_event_ActionListener);
this.timer.setCoalesce$Z(true);
this.timer.setInitialDelay$I(initial.intValue$());
this.locn=p;
this.prev=p;
try {
this.hysteresis=(t.getDesktopProperty$S("DnD.Autoscroll.cursorHysteresis")).intValue$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
this.timer.start$();
}, 1);

Clazz.newMeth(C$, 'updateRegion',  function () {
var i=this.autoScroll.getAutoscrollInsets$();
var size=this.component.getSize$();
if (size.width != this.outer.width || size.height != this.outer.height ) this.outer.reshape$I$I$I$I(0, 0, size.width, size.height);
if (this.inner.x != i.left || this.inner.y != i.top ) this.inner.setLocation$I$I(i.left, i.top);
var newWidth=size.width - (i.left + i.right);
var newHeight=size.height - (i.top + i.bottom);
if (newWidth != this.inner.width || newHeight != this.inner.height ) this.inner.setSize$I$I(newWidth, newHeight);
}, p$1);

Clazz.newMeth(C$, 'updateLocation$java_awt_Point',  function (newLocn) {
this.prev=this.locn;
this.locn=newLocn;
if (Math.abs(this.locn.x - this.prev.x) > this.hysteresis || Math.abs(this.locn.y - this.prev.y) > this.hysteresis ) {
if (this.timer.isRunning$()) this.timer.stop$();
} else {
if (!this.timer.isRunning$()) this.timer.start$();
}});

Clazz.newMeth(C$, 'stop$',  function () {
this.timer.stop$();
});

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
p$1.updateRegion.apply(this, []);
if (this.outer.contains$java_awt_Point(this.locn) && !this.inner.contains$java_awt_Point(this.locn) ) this.autoScroll.autoscroll$java_awt_Point(this.locn);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:08 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
