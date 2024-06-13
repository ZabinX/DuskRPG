(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'java.awt.event.MouseEvent','javax.swing.Timer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Autoscroller", null, null, 'java.awt.event.ActionListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['sharedInstance','javax.swing.Autoscroller','event','java.awt.event.MouseEvent','timer','javax.swing.Timer','component','javax.swing.JComponent']]]

Clazz.newMeth(C$, 'stop$javax_swing_JComponent',  function (c) {
p$1._stop$javax_swing_JComponent.apply(C$.sharedInstance, [c]);
}, 1);

Clazz.newMeth(C$, 'isRunning$javax_swing_JComponent',  function (c) {
return p$1._isRunning$javax_swing_JComponent.apply(C$.sharedInstance, [c]);
}, 1);

Clazz.newMeth(C$, 'processMouseDragged$java_awt_event_MouseEvent',  function (e) {
p$1._processMouseDragged$java_awt_event_MouseEvent.apply(C$.sharedInstance, [e]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'start$javax_swing_JComponent$java_awt_event_MouseEvent',  function (c, e) {
var screenLocation=c.getLocationOnScreen$();
if (C$.component !== c ) {
p$1._stop$javax_swing_JComponent.apply(this, [C$.component]);
}C$.component=c;
C$.event=Clazz.new_([C$.component, e.getID$(), e.getWhen$(), e.getModifiers$(), e.getX$() + screenLocation.x, e.getY$() + screenLocation.y, e.getXOnScreen$(), e.getYOnScreen$(), e.getClickCount$(), e.isPopupTrigger$(), 0],$I$(1,1).c$$java_awt_Component$I$J$I$I$I$I$I$I$Z$I);
if (C$.timer == null ) {
C$.timer=Clazz.new_($I$(2,1).c$$I$java_awt_event_ActionListener,[100, this]);
}if (!C$.timer.isRunning$()) {
C$.timer.start$();
}}, p$1);

Clazz.newMeth(C$, '_stop$javax_swing_JComponent',  function (c) {
if (C$.component === c ) {
if (C$.timer != null ) {
C$.timer.stop$();
}C$.timer=null;
C$.event=null;
C$.component=null;
}}, p$1);

Clazz.newMeth(C$, '_isRunning$javax_swing_JComponent',  function (c) {
return (c === C$.component  && C$.timer != null   && C$.timer.isRunning$() );
}, p$1);

Clazz.newMeth(C$, '_processMouseDragged$java_awt_event_MouseEvent',  function (e) {
var component=e.getComponent$();
var stop=true;
if (component.isShowing$()) {
var visibleRect=component.getVisibleRect$();
stop=visibleRect.contains$I$I(e.getX$(), e.getY$());
}if (stop) {
p$1._stop$javax_swing_JComponent.apply(this, [component]);
} else {
p$1.start$javax_swing_JComponent$java_awt_event_MouseEvent.apply(this, [component, e]);
}}, p$1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (x) {
var component=C$.component;
if (component == null  || !component.isShowing$()  || (C$.event == null ) ) {
p$1._stop$javax_swing_JComponent.apply(this, [component]);
return;
}var screenLocation=component.getLocationOnScreen$();
var e=Clazz.new_([component, C$.event.getID$(), C$.event.getWhen$(), C$.event.getModifiers$(), C$.event.getX$() - screenLocation.x, C$.event.getY$() - screenLocation.y, C$.event.getXOnScreen$(), C$.event.getYOnScreen$(), C$.event.getClickCount$(), C$.event.isPopupTrigger$(), 0],$I$(1,1).c$$java_awt_Component$I$J$I$I$I$I$I$I$Z$I);
component.superProcessMouseMotionEvent$java_awt_event_MouseEvent(e);
});

C$.$static$=function(){C$.$static$=0;
C$.sharedInstance=Clazz.new_(C$);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
