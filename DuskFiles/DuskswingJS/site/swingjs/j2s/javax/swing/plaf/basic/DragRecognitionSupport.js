(function(){var P$=Clazz.newPackage("javax.swing.plaf.basic"),p$1={},I$=[[0,'sun.awt.AppContext','javax.swing.SwingUtilities','sun.awt.dnd.SunDragSourceContextPeer','java.awt.dnd.DragSource']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DragRecognitionSupport", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['BeforeDrag',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['motionThreshold'],'O',['dndArmedEvent','java.awt.event.MouseEvent','component','javax.swing.JComponent']]]

Clazz.newMeth(C$, 'getDragRecognitionSupport$',  function () {
var support=$I$(1).getAppContext$().get$O(Clazz.getClass(C$));
if (support == null ) {
support=Clazz.new_(C$);
$I$(1).getAppContext$().put$O$O(Clazz.getClass(C$), support);
}return support;
}, 1);

Clazz.newMeth(C$, 'mousePressed$java_awt_event_MouseEvent',  function (me) {
return p$1.mousePressedImpl$java_awt_event_MouseEvent.apply(C$.getDragRecognitionSupport$(), [me]);
}, 1);

Clazz.newMeth(C$, 'mouseReleased$java_awt_event_MouseEvent',  function (me) {
return p$1.mouseReleasedImpl$java_awt_event_MouseEvent.apply(C$.getDragRecognitionSupport$(), [me]);
}, 1);

Clazz.newMeth(C$, 'mouseDragged$java_awt_event_MouseEvent$javax_swing_plaf_basic_DragRecognitionSupport_BeforeDrag',  function (me, bd) {
return p$1.mouseDraggedImpl$java_awt_event_MouseEvent$javax_swing_plaf_basic_DragRecognitionSupport_BeforeDrag.apply(C$.getDragRecognitionSupport$(), [me, bd]);
}, 1);

Clazz.newMeth(C$, 'clearState',  function () {
this.dndArmedEvent=null;
this.component=null;
}, p$1);

Clazz.newMeth(C$, 'mapDragOperationFromModifiers$java_awt_event_MouseEvent$javax_swing_TransferHandler',  function (me, th) {
if (th == null  || !$I$(2).isLeftMouseButton$java_awt_event_MouseEvent(me) ) {
return 0;
}return $I$(3,"convertModifiersToDropAction$I$I",[me.getModifiersEx$(), th.getSourceActions$javax_swing_JComponent(this.component)]);
}, p$1);

Clazz.newMeth(C$, 'mousePressedImpl$java_awt_event_MouseEvent',  function (me) {
this.component=me.getSource$();
if (p$1.mapDragOperationFromModifiers$java_awt_event_MouseEvent$javax_swing_TransferHandler.apply(this, [me, this.component.getTransferHandler$()]) != 0) {
this.motionThreshold=$I$(4).getDragThreshold$();
this.dndArmedEvent=me;
return true;
}p$1.clearState.apply(this, []);
return false;
}, p$1);

Clazz.newMeth(C$, 'mouseReleasedImpl$java_awt_event_MouseEvent',  function (me) {
if (this.dndArmedEvent == null ) {
return null;
}var retEvent=null;
if (me.getSource$() === this.component ) {
retEvent=this.dndArmedEvent;
}p$1.clearState.apply(this, []);
return retEvent;
}, p$1);

Clazz.newMeth(C$, 'mouseDraggedImpl$java_awt_event_MouseEvent$javax_swing_plaf_basic_DragRecognitionSupport_BeforeDrag',  function (me, bd) {
if (this.dndArmedEvent == null ) {
return false;
}if (me.getSource$() !== this.component ) {
p$1.clearState.apply(this, []);
return false;
}var dx=Math.abs(me.getX$() - this.dndArmedEvent.getX$());
var dy=Math.abs(me.getY$() - this.dndArmedEvent.getY$());
if ((dx > this.motionThreshold) || (dy > this.motionThreshold) ) {
var th=this.component.getTransferHandler$();
var action=p$1.mapDragOperationFromModifiers$java_awt_event_MouseEvent$javax_swing_TransferHandler.apply(this, [me, th]);
if (action != 0) {
if (bd != null ) {
bd.dragStarting$java_awt_event_MouseEvent(this.dndArmedEvent);
}th.exportAsDrag$javax_swing_JComponent$java_awt_event_InputEvent$I(this.component, this.dndArmedEvent, action);
p$1.clearState.apply(this, []);
}}return true;
}, p$1);
;
(function(){/*i*/var C$=Clazz.newInterface(P$.DragRecognitionSupport, "BeforeDrag", function(){
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:13 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
