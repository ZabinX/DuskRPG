(function(){var P$=Clazz.newPackage("java.awt"),p$1={},p$2={},I$=[[0,'java.awt.Component','java.awt.Insets','javajs.util.Lst','java.awt.Toolkit','java.awt.event.ContainerEvent','java.awt.Dimension',['java.awt.GraphicsCallback','.PaintCallback'],['java.awt.GraphicsCallback','.PaintAllCallback'],['java.awt.GraphicsCallback','.PaintHeavyweightComponentsCallback'],'java.awt.AWTEventMulticaster','java.awt.event.ContainerListener',['java.awt.Container','.DropTargetEventTargetFilter'],['java.awt.Container','.MouseEventTargetFilter'],'java.awt.LightweightDispatcher','java.awt.KeyboardFocusManager','swingjs.JSMouse','java.awt.event.MouseEvent',['swingjs.JSDnD','.JSDropMouseEvent'],'java.awt.event.MouseWheelEvent']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LightweightDispatcher", null, null, 'java.awt.event.AWTEventListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isMouseInNativeContainer=false;
},1);

C$.$fields$=[['Z',['isMouseInNativeContainer'],'J',['eventMask'],'O',['targetLastDown','java.awt.Component','+targetLastKnown','nativeContainer','java.awt.Container','mouseEventTarget','java.awt.Component','+targetLastEntered']]]

Clazz.newMeth(C$, 'c$$java_awt_Container',  function (nativeContainer) {
;C$.$init$.apply(this);
this.nativeContainer=nativeContainer;
this.mouseEventTarget=null;
this.eventMask=0;
}, 1);

Clazz.newMeth(C$, 'dispose$',  function () {
p$2.stopListeningForOtherDrags.apply(this, []);
this.mouseEventTarget=null;
});

Clazz.newMeth(C$, 'enableEvents$J',  function (events) {
(this.eventMask=Long.$or(this.eventMask,(events)));
});

Clazz.newMeth(C$, 'dispatchEvent$java_awt_AWTEvent',  function (e) {
var ret=false;
if (Clazz.instanceOf(e, "swingjs.JSDnD.JSDropMouseEvent")) {
var sdde=e;
ret=p$2.processDropTargetEvent$sun_awt_dnd_SunDropTargetEvent.apply(this, [sdde]);
} else {
if (Clazz.instanceOf(e, "java.awt.event.MouseEvent") && Long.$ne((Long.$and(this.eventMask,131120)),0 ) ) {
var me=e;
ret=p$2.processMouseEvent$java_awt_event_MouseEvent.apply(this, [me]);
}}return ret;
});

Clazz.newMeth(C$, 'isMouseGrab$java_awt_event_MouseEvent',  function (e) {
var modifiers=e.getModifiersEx$();
if (e.getID$() == 501 || e.getID$() == 502 ) {
switch (e.getButton$()) {
case 1:
modifiers^=1024;
break;
case 2:
modifiers^=2048;
break;
case 3:
modifiers^=4096;
break;
}
}return ((modifiers & (7168)) != 0);
}, p$2);

Clazz.newMeth(C$, 'processMouseEvent$java_awt_event_MouseEvent',  function (e) {
var id=e.getID$();
var mouseOver=this.nativeContainer.getMouseEventTarget$I$I$Z(e.getX$(), e.getY$(), true);
p$2.trackMouseEnterExit$java_awt_Component$java_awt_event_MouseEvent.apply(this, [mouseOver, e]);
var actualTarget;
switch (id) {
case 506:
case 502:
actualTarget=this.targetLastDown;
break;
case 505:
actualTarget=this.targetLastKnown;
break;
default:
actualTarget=$I$(16).getJ2SEventTarget$java_awt_event_MouseEvent(e);
break;
}
this.targetLastKnown=(actualTarget == null  ? mouseOver : actualTarget);
if (id == 501) this.targetLastDown=this.targetLastKnown;
if (actualTarget != null ) this.mouseEventTarget=actualTarget;
 else if (!p$2.isMouseGrab$java_awt_event_MouseEvent.apply(this, [e]) && id != 500 ) {
this.mouseEventTarget=(mouseOver !== this.nativeContainer ) ? mouseOver : null;
}if (this.mouseEventTarget != null ) {
switch (id) {
case 504:
case 505:
if ($I$(16).getJ2SEventTarget$java_awt_event_MouseEvent(e) === this.mouseEventTarget ) this.retargetMouseEvent$java_awt_Component$I$java_awt_event_MouseEvent(this.mouseEventTarget, id, e);
break;
case 501:
this.checkInternalFrameMouseDown$java_awt_JSComponent(e.getSource$());
this.retargetMouseEvent$java_awt_Component$I$java_awt_event_MouseEvent(this.mouseEventTarget, id, e);
break;
case 502:
this.targetLastDown=null;
this.retargetMouseEvent$java_awt_Component$I$java_awt_event_MouseEvent(this.mouseEventTarget, id, e);
break;
case 500:
this.targetLastDown=null;
if (mouseOver === this.mouseEventTarget ) {
this.retargetMouseEvent$java_awt_Component$I$java_awt_event_MouseEvent(mouseOver, id, e);
}break;
case 503:
this.retargetMouseEvent$java_awt_Component$I$java_awt_event_MouseEvent(this.mouseEventTarget, id, e);
break;
case 506:
if (p$2.isMouseGrab$java_awt_event_MouseEvent.apply(this, [e])) {
this.retargetMouseEvent$java_awt_Component$I$java_awt_event_MouseEvent(this.mouseEventTarget, id, e);
}break;
case 507:
this.retargetMouseEvent$java_awt_Component$I$java_awt_event_MouseEvent(mouseOver, id, e);
break;
}
e.consume$();
}return e.isConsumed$();
}, p$2);

Clazz.newMeth(C$, 'processDropTargetEvent$sun_awt_dnd_SunDropTargetEvent',  function (e) {
var id=e.getID$();
var x=e.getX$();
var y=e.getY$();
if (!this.nativeContainer.contains$I$I(x, y)) {
var d=this.nativeContainer.getSize$();
if (d.width <= x) {
x=d.width - 1;
} else if (x < 0) {
x=0;
}if (d.height <= y) {
y=d.height - 1;
} else if (y < 0) {
y=0;
}}var mouseOver=this.nativeContainer.getDropTargetEventTarget$I$I$Z(x, y, true);
p$2.trackMouseEnterExit$java_awt_Component$java_awt_event_MouseEvent.apply(this, [mouseOver, e]);
if (mouseOver !== this.nativeContainer  && mouseOver != null  ) {
switch (id) {
case 504:
case 505:
break;
default:
this.retargetMouseEvent$java_awt_Component$I$java_awt_event_MouseEvent(mouseOver, id, e);
e.consume$();
break;
}
}return e.isConsumed$();
}, p$2);

Clazz.newMeth(C$, 'checkInternalFrameMouseDown$java_awt_JSComponent',  function (c) {
var fv=c.getFrameViewer$();
var top=fv.getTopComponent$();
if (top.getUIClassID$() === "InternalFrameUI" ) try {
(top).setSelected$Z(true);
} catch (e) {
if (Clazz.exceptionOf(e,"java.beans.PropertyVetoException")){
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'trackMouseEnterExit$java_awt_Component$java_awt_event_MouseEvent',  function (targetOver, e) {
var targetEnter=null;
var id=e.getID$();
if (Clazz.instanceOf(e, "java.awt.ActiveEvent")) {
this.targetLastEntered=null;
return;
}if (id == 505) {
this.isMouseInNativeContainer=false;
p$2.stopListeningForOtherDrags.apply(this, []);
} else if (id != 506 && id != 1500  && this.isMouseInNativeContainer == false  ) {
this.isMouseInNativeContainer=true;
p$2.startListeningForOtherDrags.apply(this, []);
}if (this.isMouseInNativeContainer) {
targetEnter=targetOver;
}if (this.targetLastEntered === targetEnter ) {
return;
}if (this.targetLastEntered != null ) {
this.retargetMouseEvent$java_awt_Component$I$java_awt_event_MouseEvent(this.targetLastEntered, 505, e);
}if (id == 505) {
e.consume$();
}if (targetEnter != null ) {
this.retargetMouseEvent$java_awt_Component$I$java_awt_event_MouseEvent(targetEnter, 504, e);
}if (id == 504) {
e.consume$();
}this.targetLastEntered=targetEnter;
}, p$2);

Clazz.newMeth(C$, 'startListeningForOtherDrags',  function () {
}, p$2);

Clazz.newMeth(C$, 'stopListeningForOtherDrags',  function () {
}, p$2);

Clazz.newMeth(C$, 'eventDispatched$java_awt_AWTEvent',  function (e) {
var isForeignDrag=(Clazz.instanceOf(e, "java.awt.event.MouseEvent")) && (e.id == 506) && (e.getSource$() !== this.nativeContainer )  ;
if (!isForeignDrag) {
return;
}var srcEvent=e;
var me;
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.nativeContainer.getTreeLock$());
{
var srcComponent=srcEvent.getComponent$();
if (!srcComponent.isShowing$()) {
return;
}var c=this.nativeContainer;
while (c != null  && !(Clazz.instanceOf(c, "java.awt.Window")) ){
c=c.getParent_NoClientCode$();
}
if ((c == null ) || (c).isModalBlocked$() ) {
return;
}me=Clazz.new_([this.nativeContainer, 1500, srcEvent.getWhen$(), srcEvent.getModifiersEx$() | srcEvent.getModifiers$(), srcEvent.getX$(), srcEvent.getY$(), srcEvent.getXOnScreen$(), srcEvent.getYOnScreen$(), srcEvent.getClickCount$(), srcEvent.isPopupTrigger$(), srcEvent.getButton$()],$I$(17,1).c$$java_awt_Component$I$J$I$I$I$I$I$I$Z$I);
(srcEvent).copyPrivateDataInto$java_awt_AWTEvent(me);
}var targetOver=this.nativeContainer.getMouseEventTarget$I$I$Z(me.getX$(), me.getY$(), true);
p$2.trackMouseEnterExit$java_awt_Component$java_awt_event_MouseEvent.apply(this, [targetOver, me]);
});

Clazz.newMeth(C$, 'retargetMouseEvent$java_awt_Component$I$java_awt_event_MouseEvent',  function (target, id, e) {
if (target == null ) {
return;
}var x=e.getX$();
var y=e.getY$();
var component=target;
var p=(target).秘getUI$().getTargetParent$();
if (p != null ) {
target=component=p;
}for (; component != null  && component !== this.nativeContainer  ; component=component.getParent$()) {
x-=component.x;
y-=component.y;
if ((component).getUIClassID$() === "PopupMenuUI" ) break;
}
var retargeted;
if (component != null ) {
if (Clazz.instanceOf(e, "swingjs.JSDnD.JSDropMouseEvent")) {
retargeted=Clazz.new_($I$(18,1).c$$java_awt_Component$I$I$I,[target, id, x, y]);
} else if (id == 507) {
retargeted=Clazz.new_([target, id, e.getWhen$(), e.getModifiersEx$() | e.getModifiers$(), x, y, e.getXOnScreen$(), e.getYOnScreen$(), e.getClickCount$(), e.isPopupTrigger$(), (e).getScrollType$(), (e).getScrollAmount$(), (e).getWheelRotation$(), (e).getPreciseWheelRotation$()],$I$(19,1).c$$java_awt_Component$I$J$I$I$I$I$I$I$Z$I$I$I$D);
} else {
retargeted=Clazz.new_([target, id, e.getWhen$(), e.getModifiersEx$() | e.getModifiers$(), x, y, e.getXOnScreen$(), e.getYOnScreen$(), e.getClickCount$(), e.isPopupTrigger$(), e.getButton$()],$I$(17,1).c$$java_awt_Component$I$J$I$I$I$I$I$I$Z$I);
}(e).copyPrivateDataInto$java_awt_AWTEvent(retargeted);
if (target === this.nativeContainer ) {
(target).dispatchEventToSelf$java_awt_AWTEvent(retargeted);
} else {
if (this.nativeContainer.modalComp != null ) {
if ((this.nativeContainer.modalComp).isAncestorOf$java_awt_Component(target)) {
target.dispatchEvent$java_awt_AWTEvent(retargeted);
} else {
e.consume$();
}} else {
target.dispatchEvent$java_awt_AWTEvent(retargeted);
$I$(16).setPropagation$java_awt_Component$java_awt_event_MouseEvent(target, e);
}}}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
