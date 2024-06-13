(function(){var P$=Clazz.newPackage("java.awt"),p$1={},I$=[[0,'java.awt.KeyboardFocusManager','java.util.LinkedList',['sun.awt.CausedFocusEvent','.Cause'],'sun.awt.AppContext',['java.awt.DefaultKeyboardFocusManager','.DefaultKeyboardFocusManagerSentEvent'],'sun.awt.SunToolkit','java.awt.SequencedEvent','java.awt.event.WindowEvent','sun.awt.CausedFocusEvent','java.awt.EventQueue','java.awt.AWTKeyStroke',['java.awt.DefaultKeyboardFocusManager','.TypeAheadMarker']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DefaultKeyboardFocusManager", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.awt.KeyboardFocusManager');
C$.$classes$=[['TypeAheadMarker',10],['DefaultKeyboardFocusManagerSentEvent',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.realOppositeWindowWR=null;
this.realOppositeComponentWR=null;
this.enqueuedKeyEvents=Clazz.new_($I$(2,1));
this.typeAheadMarkers=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['consumeNextKeyTyped'],'I',['inSendMessage'],'O',['realOppositeWindowWR','java.awt.Window','realOppositeComponentWR','java.awt.Component','enqueuedKeyEvents','java.util.LinkedList','+typeAheadMarkers']]]

Clazz.newMeth(C$, 'getOwningFrameDialog$java_awt_Window',  function (window) {
var owindow;
while (window != null  && !(Clazz.instanceOf((owindow=window), "javax.swing.JApplet") || Clazz.instanceOf(window, "java.awt.JSFrame") || Clazz.instanceOf(window, "java.awt.JSDialog")  ) ){
window=window.getParent$();
}
return window;
}, p$1);

Clazz.newMeth(C$, 'restoreFocus$java_awt_event_FocusEvent$java_awt_Window',  function (fe, newFocusedWindow) {
var realOppositeComponent=this.realOppositeComponentWR;
var vetoedComponent=fe.getComponent$();
if (newFocusedWindow != null  && p$1.restoreFocus$java_awt_Window$java_awt_Component$Z.apply(this, [newFocusedWindow, vetoedComponent, false]) ) {
} else if (realOppositeComponent != null  && p$1.doRestoreFocus$java_awt_Component$java_awt_Component$Z.apply(this, [realOppositeComponent, vetoedComponent, false]) ) {
} else if (fe.getOppositeComponent$() != null  && p$1.doRestoreFocus$java_awt_Component$java_awt_Component$Z.apply(this, [fe.getOppositeComponent$(), vetoedComponent, false]) ) {
} else {
this.clearGlobalFocusOwnerPriv$();
}}, p$1);

Clazz.newMeth(C$, 'restoreFocus$java_awt_event_WindowEvent',  function (we) {
var realOppositeWindow=this.realOppositeWindowWR;
if (realOppositeWindow != null  && p$1.restoreFocus$java_awt_Window$java_awt_Component$Z.apply(this, [realOppositeWindow, null, false]) ) {
} else if (we.getOppositeWindow$() != null  && p$1.restoreFocus$java_awt_Window$java_awt_Component$Z.apply(this, [we.getOppositeWindow$(), null, false]) ) {
} else {
this.clearGlobalFocusOwnerPriv$();
}}, p$1);

Clazz.newMeth(C$, 'restoreFocus$java_awt_Window$java_awt_Component$Z',  function (aWindow, vetoedComponent, clearOnFailure) {
var toFocus=$I$(1).getMostRecentFocusOwner$java_awt_Window(aWindow);
if (toFocus != null  && toFocus !== vetoedComponent   && p$1.doRestoreFocus$java_awt_Component$java_awt_Component$Z.apply(this, [toFocus, vetoedComponent, false]) ) {
return true;
} else if (clearOnFailure) {
this.clearGlobalFocusOwnerPriv$();
return true;
} else {
return false;
}}, p$1);

Clazz.newMeth(C$, 'restoreFocus$java_awt_Component$Z',  function (toFocus, clearOnFailure) {
return p$1.doRestoreFocus$java_awt_Component$java_awt_Component$Z.apply(this, [toFocus, null, clearOnFailure]);
}, p$1);

Clazz.newMeth(C$, 'doRestoreFocus$java_awt_Component$java_awt_Component$Z',  function (toFocus, vetoedComponent, clearOnFailure) {
if (toFocus !== vetoedComponent  && toFocus.isShowing$()  && toFocus.canBeFocusOwner$()  && toFocus.requestFocus$Z$sun_awt_CausedFocusEvent_Cause(false, $I$(3).ROLLBACK) ) {
return true;
} else {
var nextFocus=toFocus.getNextFocusCandidate$();
if (nextFocus != null  && nextFocus !== vetoedComponent   && nextFocus.requestFocusInWindow$sun_awt_CausedFocusEvent_Cause($I$(3).ROLLBACK) ) {
return true;
} else if (clearOnFailure) {
this.clearGlobalFocusOwnerPriv$();
return true;
} else {
return false;
}}}, p$1);

Clazz.newMeth(C$, 'sendMessage$java_awt_Component$java_awt_AWTEvent',  function (target, e) {
e.isPosted=true;
var myAppContext=$I$(4).getAppContext$();
var targetAppContext=target.appContext;
var se=Clazz.new_($I$(5,1).c$$java_awt_AWTEvent$sun_awt_AppContext,[e, myAppContext]);
if (myAppContext === targetAppContext ) {
se.dispatch$();
} else {
if (targetAppContext.isDisposed$()) {
return false;
}se.dispatch$();
}return se.dispatched;
}, 1);

Clazz.newMeth(C$, 'repostIfFollowsKeyEvents$java_awt_event_WindowEvent',  function (e) {
if (!(Clazz.instanceOf(e, "sun.awt.TimedWindowEvent"))) {
return false;
}var we=e;
var time=we.getWhen$();
{
var ke=this.enqueuedKeyEvents.isEmpty$() ? null : this.enqueuedKeyEvents.getFirst$();
if (ke != null  && Long.$ge(time,ke.getWhen$() ) ) {
var marker=this.typeAheadMarkers.isEmpty$() ? null : this.typeAheadMarkers.getFirst$();
if (marker != null ) {
var toplevel=marker.untilFocused.getContainingWindow$();
if (toplevel != null  && toplevel.isFocused$() ) {
$I$(6,"postEvent$sun_awt_AppContext$java_awt_AWTEvent",[$I$(4).getAppContext$(), Clazz.new_($I$(7,1).c$$java_awt_AWTEvent,[e])]);
return true;
}}}}return false;
}, p$1);

Clazz.newMeth(C$, 'dispatchEvent$java_awt_AWTEvent',  function (e) {
switch (e.getID$()) {
case 501:
case 500:
(this.peer).checkFrameFocusOnMouseDown$java_awt_AWTEvent(e);
return false;
case 502:
return false;
case 207:
{
if (p$1.repostIfFollowsKeyEvents$java_awt_event_WindowEvent.apply(this, [e])) {
break;
}var we=e;
var oldFocusedWindow=this.getGlobalFocusedWindow$();
var newFocusedWindow=we.getWindow$();
if (newFocusedWindow === oldFocusedWindow ) {
break;
}if (!(newFocusedWindow.isFocusableWindow$() && newFocusedWindow.isVisible$() && newFocusedWindow.isDisplayable$()  )) {
p$1.restoreFocus$java_awt_event_WindowEvent.apply(this, [we]);
break;
}if (oldFocusedWindow != null ) {
var isEventDispatched=C$.sendMessage$java_awt_Component$java_awt_AWTEvent(oldFocusedWindow, Clazz.new_($I$(8,1).c$$java_awt_Window$I$java_awt_Window,[oldFocusedWindow, 208, newFocusedWindow]));
if (!isEventDispatched) {
this.setGlobalFocusOwner$java_awt_Component(null);
this.setGlobalFocusedWindow$java_awt_Window(null);
}}var newActiveWindow=p$1.getOwningFrameDialog$java_awt_Window.apply(this, [newFocusedWindow]);
var currentActiveWindow=this.getGlobalActiveWindow$();
if (newActiveWindow !== currentActiveWindow ) {
C$.sendMessage$java_awt_Component$java_awt_AWTEvent(newActiveWindow, Clazz.new_($I$(8,1).c$$java_awt_Window$I$java_awt_Window,[newActiveWindow, 205, currentActiveWindow]));
if (newActiveWindow !== this.getGlobalActiveWindow$() ) {
p$1.restoreFocus$java_awt_event_WindowEvent.apply(this, [we]);
break;
}}this.setGlobalFocusedWindow$java_awt_Window(newFocusedWindow);
if (newFocusedWindow !== this.getGlobalFocusedWindow$() ) {
p$1.restoreFocus$java_awt_event_WindowEvent.apply(this, [we]);
break;
}if (this.inSendMessage == 0) {
var toFocus=$I$(1).getMostRecentFocusOwner$java_awt_Window(newFocusedWindow);
if ((toFocus == null ) && newFocusedWindow.isFocusableWindow$() ) {
toFocus=newFocusedWindow.getFocusTraversalPolicy$().getInitialComponent$java_awt_Window(newFocusedWindow);
}var tempLost=null;
{
tempLost=newFocusedWindow.setTemporaryLostComponent$java_awt_Component(null);
}if (tempLost != null ) {
tempLost.requestFocusInWindow$sun_awt_CausedFocusEvent_Cause($I$(3).ACTIVATION);
}if (toFocus != null  && toFocus !== tempLost  ) {
toFocus.requestFocusInWindow$sun_awt_CausedFocusEvent_Cause($I$(3).ACTIVATION);
}}var realOppositeWindow=this.realOppositeWindowWR;
if (realOppositeWindow !== we.getOppositeWindow$() ) {
we=Clazz.new_($I$(8,1).c$$java_awt_Window$I$java_awt_Window,[newFocusedWindow, 207, realOppositeWindow]);
}return p$1.typeAheadAssertions$java_awt_Component$java_awt_AWTEvent.apply(this, [newFocusedWindow, we]);
}case 205:
{
var we=e;
var oldActiveWindow=this.getGlobalActiveWindow$();
var newActiveWindow=we.getWindow$();
if (oldActiveWindow === newActiveWindow ) {
break;
}if (oldActiveWindow != null ) {
var isEventDispatched=C$.sendMessage$java_awt_Component$java_awt_AWTEvent(oldActiveWindow, Clazz.new_($I$(8,1).c$$java_awt_Window$I$java_awt_Window,[oldActiveWindow, 206, newActiveWindow]));
if (!isEventDispatched) {
this.setGlobalActiveWindow$java_awt_Window(null);
}if (this.getGlobalActiveWindow$() != null ) {
break;
}}this.setGlobalActiveWindow$java_awt_Window(newActiveWindow);
if (newActiveWindow !== this.getGlobalActiveWindow$() ) {
break;
}return p$1.typeAheadAssertions$java_awt_Component$java_awt_AWTEvent.apply(this, [newActiveWindow, we]);
}case 1004:
{
var fe=e;
var cause=(Clazz.instanceOf(fe, "sun.awt.CausedFocusEvent")) ? (fe).getCause$() : $I$(3).UNKNOWN;
var oldFocusOwner=this.getGlobalFocusOwner$();
var newFocusOwner=fe.getComponent$();
if (oldFocusOwner === newFocusOwner ) {
this.dequeueKeyEvents$J$java_awt_Component(-1, newFocusOwner);
break;
}if (oldFocusOwner != null ) {
var isEventDispatched=C$.sendMessage$java_awt_Component$java_awt_AWTEvent(oldFocusOwner, Clazz.new_([oldFocusOwner, 1005, fe.isTemporary$(), newFocusOwner, cause],$I$(9,1).c$$java_awt_Component$I$Z$java_awt_Component$sun_awt_CausedFocusEvent_Cause));
if (!isEventDispatched) {
this.setGlobalFocusOwner$java_awt_Component(null);
if (!fe.isTemporary$()) {
this.setGlobalPermanentFocusOwner$java_awt_Component(null);
}}}var newFocusedWindow=$I$(6).getContainingWindow$java_awt_Component(newFocusOwner);
var currentFocusedWindow=this.getGlobalFocusedWindow$();
if (newFocusedWindow != null  && newFocusedWindow !== currentFocusedWindow  ) {
C$.sendMessage$java_awt_Component$java_awt_AWTEvent(newFocusedWindow, Clazz.new_($I$(8,1).c$$java_awt_Window$I$java_awt_Window,[newFocusedWindow, 207, currentFocusedWindow]));
if (newFocusedWindow !== this.getGlobalFocusedWindow$() ) {
this.dequeueKeyEvents$J$java_awt_Component(-1, newFocusOwner);
break;
}}if (!(newFocusOwner.isFocusable$() && newFocusOwner.isShowing$() && (newFocusOwner.isEnabled$() || cause.equals$O($I$(3).UNKNOWN) )  )) {
this.dequeueKeyEvents$J$java_awt_Component(-1, newFocusOwner);
if ($I$(1).isAutoFocusTransferEnabled$()) {
if (newFocusedWindow == null ) {
p$1.restoreFocus$java_awt_event_FocusEvent$java_awt_Window.apply(this, [fe, currentFocusedWindow]);
} else {
p$1.restoreFocus$java_awt_event_FocusEvent$java_awt_Window.apply(this, [fe, newFocusedWindow]);
}$I$(1).setMostRecentFocusOwner$java_awt_Window$java_awt_Component(newFocusedWindow, null);
}break;
}this.setGlobalFocusOwner$java_awt_Component(newFocusOwner);
if (newFocusOwner !== this.getGlobalFocusOwner$() ) {
this.dequeueKeyEvents$J$java_awt_Component(-1, newFocusOwner);
if ($I$(1).isAutoFocusTransferEnabled$()) {
p$1.restoreFocus$java_awt_event_FocusEvent$java_awt_Window.apply(this, [fe, newFocusedWindow]);
}break;
}if (!fe.isTemporary$()) {
this.setGlobalPermanentFocusOwner$java_awt_Component(newFocusOwner);
if (newFocusOwner !== this.getGlobalPermanentFocusOwner$() ) {
this.dequeueKeyEvents$J$java_awt_Component(-1, newFocusOwner);
if ($I$(1).isAutoFocusTransferEnabled$()) {
p$1.restoreFocus$java_awt_event_FocusEvent$java_awt_Window.apply(this, [fe, newFocusedWindow]);
}break;
}}var realOppositeComponent=this.realOppositeComponentWR;
if (realOppositeComponent != null  && realOppositeComponent !== fe.getOppositeComponent$()  ) {
fe=Clazz.new_([newFocusOwner, 1004, fe.isTemporary$(), realOppositeComponent, cause],$I$(9,1).c$$java_awt_Component$I$Z$java_awt_Component$sun_awt_CausedFocusEvent_Cause);
(fe).isPosted=true;
}return p$1.typeAheadAssertions$java_awt_Component$java_awt_AWTEvent.apply(this, [newFocusOwner, fe]);
}case 1005:
{
var fe=e;
var currentFocusOwner=this.getGlobalFocusOwner$();
if (currentFocusOwner == null ) {
break;
}if (currentFocusOwner === fe.getOppositeComponent$() ) {
break;
}this.setGlobalFocusOwner$java_awt_Component(null);
if (this.getGlobalFocusOwner$() != null ) {
p$1.restoreFocus$java_awt_Component$Z.apply(this, [currentFocusOwner, true]);
break;
}if (!fe.isTemporary$()) {
this.setGlobalPermanentFocusOwner$java_awt_Component(null);
if (this.getGlobalPermanentFocusOwner$() != null ) {
p$1.restoreFocus$java_awt_Component$Z.apply(this, [currentFocusOwner, true]);
break;
}} else {
var owningWindow=currentFocusOwner.getContainingWindow$();
if (owningWindow != null ) {
owningWindow.setTemporaryLostComponent$java_awt_Component(currentFocusOwner);
}}this.setNativeFocusOwner$java_awt_Component(null);
fe.setSource$O(currentFocusOwner);
this.realOppositeComponentWR=(fe.getOppositeComponent$() != null ) ? currentFocusOwner : null;
return p$1.typeAheadAssertions$java_awt_Component$java_awt_AWTEvent.apply(this, [currentFocusOwner, fe]);
}case 206:
{
var we=e;
var currentActiveWindow=this.getGlobalActiveWindow$();
if (currentActiveWindow == null ) {
break;
}if (currentActiveWindow !== e.getSource$() ) {
break;
}this.setGlobalActiveWindow$java_awt_Window(null);
if (this.getGlobalActiveWindow$() != null ) {
break;
}we.setSource$O(currentActiveWindow);
return p$1.typeAheadAssertions$java_awt_Component$java_awt_AWTEvent.apply(this, [currentActiveWindow, we]);
}case 208:
{
if (p$1.repostIfFollowsKeyEvents$java_awt_event_WindowEvent.apply(this, [e])) {
break;
}var we=e;
var currentFocusedWindow=this.getGlobalFocusedWindow$();
var losingFocusWindow=we.getWindow$();
var activeWindow=this.getGlobalActiveWindow$();
var oppositeWindow=we.getOppositeWindow$();
if (currentFocusedWindow == null ) {
break;
}if (this.inSendMessage == 0 && losingFocusWindow === activeWindow   && oppositeWindow === currentFocusedWindow  ) {
break;
}var currentFocusOwner=this.getGlobalFocusOwner$();
if (currentFocusOwner != null ) {
var oppositeComp=null;
if (oppositeWindow != null ) {
oppositeComp=oppositeWindow.getTemporaryLostComponent$();
if (oppositeComp == null ) {
oppositeComp=oppositeWindow.getMostRecentFocusOwner$();
}}if (oppositeComp == null ) {
oppositeComp=oppositeWindow;
}C$.sendMessage$java_awt_Component$java_awt_AWTEvent(currentFocusOwner, Clazz.new_([currentFocusOwner, 1005, true, oppositeComp, $I$(3).ACTIVATION],$I$(9,1).c$$java_awt_Component$I$Z$java_awt_Component$sun_awt_CausedFocusEvent_Cause));
}this.setGlobalFocusedWindow$java_awt_Window(null);
if (this.getGlobalFocusedWindow$() != null ) {
p$1.restoreFocus$java_awt_Window$java_awt_Component$Z.apply(this, [currentFocusedWindow, null, true]);
break;
}we.setSource$O(currentFocusedWindow);
this.realOppositeWindowWR=(oppositeWindow != null ) ? currentFocusedWindow : null;
p$1.typeAheadAssertions$java_awt_Component$java_awt_AWTEvent.apply(this, [currentFocusedWindow, we]);
if (oppositeWindow == null ) {
C$.sendMessage$java_awt_Component$java_awt_AWTEvent(activeWindow, Clazz.new_($I$(8,1).c$$java_awt_Window$I$java_awt_Window,[activeWindow, 206, null]));
if (this.getGlobalActiveWindow$() != null ) {
p$1.restoreFocus$java_awt_Window$java_awt_Component$Z.apply(this, [currentFocusedWindow, null, true]);
}}break;
}case 400:
case 401:
case 402:
return p$1.typeAheadAssertions$java_awt_Component$java_awt_AWTEvent.apply(this, [null, e]);
default:
return false;
}
return true;
});

Clazz.newMeth(C$, 'dispatchKeyEvent$java_awt_event_KeyEvent',  function (e) {
var focusOwner=((e).isPosted) ? this.getFocusOwner$() : e.getComponent$();
if (focusOwner != null  && focusOwner.isShowing$()  && focusOwner.canBeFocusOwner$() ) {
if (!e.isConsumed$()) {
var comp=e.getComponent$();
if (comp != null  && comp.isEnabled$() ) {
this.redispatchEvent$java_awt_Component$java_awt_AWTEvent(comp, e);
}}}var stopPostProcessing=false;
var processors=this.getKeyEventPostProcessors$();
if (processors != null ) {
for (var iter=processors.iterator$(); !stopPostProcessing && iter.hasNext$() ; ) {
stopPostProcessing=iter.next$().postProcessKeyEvent$java_awt_event_KeyEvent(e);
}
}if (!stopPostProcessing) {
this.postProcessKeyEvent$java_awt_event_KeyEvent(e);
}var source=e.getComponent$();
var peer=source.getPeer$();
if (peer == null  || Clazz.instanceOf(peer, "java.awt.peer.LightweightPeer") ) {
var target=source.getNativeContainer$();
if (target != null ) {
peer=target.getPeer$();
}}if (peer != null ) {
peer.handleEvent$java_awt_AWTEvent(e);
}return true;
});

Clazz.newMeth(C$, 'postProcessKeyEvent$java_awt_event_KeyEvent',  function (e) {
if (!e.isConsumed$()) {
var target=e.getComponent$();
var p=(Clazz.instanceOf(target, "java.awt.Container") ? target : target.getParent$());
if (p != null ) {
p.postProcessKeyEvent$java_awt_event_KeyEvent(e);
}}return true;
});

Clazz.newMeth(C$, 'pumpApprovedKeyEvents',  function () {
var ke;
do {
ke=null;
{
if (this.enqueuedKeyEvents.size$() != 0) {
ke=this.enqueuedKeyEvents.getFirst$();
if (this.typeAheadMarkers.size$() != 0) {
var marker=this.typeAheadMarkers.getFirst$();
if (Long.$gt(ke.getWhen$(),marker.after )) {
ke=null;
}}if (ke != null ) {
this.enqueuedKeyEvents.removeFirst$();
}}}if (ke != null ) {
p$1.preDispatchKeyEvent$java_awt_event_KeyEvent.apply(this, [ke]);
}} while (ke != null );
}, p$1);

Clazz.newMeth(C$, 'typeAheadAssertions$java_awt_Component$java_awt_AWTEvent',  function (target, e) {
p$1.pumpApprovedKeyEvents.apply(this, []);
switch (e.getID$()) {
case 400:
case 401:
case 402:
{
var ke=e;
{
if (e.isPosted && this.typeAheadMarkers.size$() != 0 ) {
var marker=this.typeAheadMarkers.getFirst$();
if (Long.$gt(ke.getWhen$(),marker.after )) {
this.enqueuedKeyEvents.addLast$O(ke);
return true;
}}}return p$1.preDispatchKeyEvent$java_awt_event_KeyEvent.apply(this, [ke]);
}case 1004:
{
var found=false;
if (p$1.hasMarker$java_awt_Component.apply(this, [target])) {
for (var iter=this.typeAheadMarkers.iterator$(); iter.hasNext$(); ) {
if (iter.next$().untilFocused === target ) {
found=true;
} else if (found) {
break;
}iter.remove$();
}
} else {
}}this.redispatchEvent$java_awt_Component$java_awt_AWTEvent(target, e);
p$1.pumpApprovedKeyEvents.apply(this, []);
return true;
default:
this.redispatchEvent$java_awt_Component$java_awt_AWTEvent(target, e);
return true;
}
}, p$1);

Clazz.newMeth(C$, 'hasMarker$java_awt_Component',  function (comp) {
for (var iter=this.typeAheadMarkers.iterator$(); iter.hasNext$(); ) {
if (iter.next$().untilFocused === comp ) {
return true;
}}
return false;
}, p$1);

Clazz.newMeth(C$, 'clearMarkers$',  function () {
{
this.typeAheadMarkers.clear$();
}});

Clazz.newMeth(C$, 'preDispatchKeyEvent$java_awt_event_KeyEvent',  function (ke) {
if ((ke).isPosted) {
var focusOwner=this.getFocusOwner$();
ke.setSource$O(((focusOwner != null ) ? focusOwner : this.getFocusedWindow$()));
}if (ke.getSource$() == null ) {
return true;
}$I$(10).setCurrentEventAndMostRecentTime$java_awt_AWTEvent(ke);
var dispatchers=this.getKeyEventDispatchers$();
if (dispatchers != null ) {
for (var iter=dispatchers.iterator$(); iter.hasNext$(); ) {
if (iter.next$().dispatchKeyEvent$java_awt_event_KeyEvent(ke)) {
return true;
}}
}return this.dispatchKeyEvent$java_awt_event_KeyEvent(ke);
}, p$1);

Clazz.newMeth(C$, 'consumeNextKeyTyped$java_awt_event_KeyEvent',  function (e) {
this.consumeNextKeyTyped=true;
});

Clazz.newMeth(C$, 'consumeTraversalKey$java_awt_event_KeyEvent',  function (e) {
e.consume$();
this.consumeNextKeyTyped=(e.getID$() == 401) && !e.isActionKey$() ;
}, p$1);

Clazz.newMeth(C$, 'consumeProcessedKeyEvent$java_awt_event_KeyEvent',  function (e) {
if ((e.getID$() == 400) && this.consumeNextKeyTyped ) {
e.consume$();
this.consumeNextKeyTyped=false;
return true;
}return false;
}, p$1);

Clazz.newMeth(C$, 'processKeyEvent$java_awt_Component$java_awt_event_KeyEvent',  function (focusedComponent, e) {
if (p$1.consumeProcessedKeyEvent$java_awt_event_KeyEvent.apply(this, [e])) {
return;
}if (e.getID$() == 400) {
return;
}if (focusedComponent.getFocusTraversalKeysEnabled$() && !e.isConsumed$() ) {
var stroke=$I$(11).getAWTKeyStrokeForEvent$java_awt_event_KeyEvent(e);
var oppStroke=$I$(11,"getAWTKeyStroke$I$I$Z",[stroke.getKeyCode$(), stroke.getModifiers$(), !stroke.isOnKeyRelease$()]);
var toTest;
var contains;
var containsOpp;
toTest=focusedComponent.getFocusTraversalKeys$I(0);
contains=toTest.contains$O(stroke);
containsOpp=toTest.contains$O(oppStroke);
if (contains || containsOpp ) {
p$1.consumeTraversalKey$java_awt_event_KeyEvent.apply(this, [e]);
if (contains) {
this.focusNextComponent$java_awt_Component(focusedComponent);
}return;
} else if (e.getID$() == 401) {
this.consumeNextKeyTyped=false;
}toTest=focusedComponent.getFocusTraversalKeys$I(1);
contains=toTest.contains$O(stroke);
containsOpp=toTest.contains$O(oppStroke);
if (contains || containsOpp ) {
p$1.consumeTraversalKey$java_awt_event_KeyEvent.apply(this, [e]);
if (contains) {
this.focusPreviousComponent$java_awt_Component(focusedComponent);
}return;
}toTest=focusedComponent.getFocusTraversalKeys$I(2);
contains=toTest.contains$O(stroke);
containsOpp=toTest.contains$O(oppStroke);
if (contains || containsOpp ) {
p$1.consumeTraversalKey$java_awt_event_KeyEvent.apply(this, [e]);
if (contains) {
this.upFocusCycle$java_awt_Component(focusedComponent);
}return;
}if (!((Clazz.instanceOf(focusedComponent, "java.awt.Container")) && (focusedComponent).isFocusCycleRoot$() )) {
return;
}toTest=focusedComponent.getFocusTraversalKeys$I(3);
contains=toTest.contains$O(stroke);
containsOpp=toTest.contains$O(oppStroke);
if (contains || containsOpp ) {
p$1.consumeTraversalKey$java_awt_event_KeyEvent.apply(this, [e]);
if (contains) {
this.downFocusCycle$java_awt_Container(focusedComponent);
}}}});

Clazz.newMeth(C$, 'enqueueKeyEvents$J$java_awt_Component',  function (after, untilFocused) {
if (untilFocused == null ) {
return;
}var insertionIndex=0;
var i=this.typeAheadMarkers.size$();
var iter=this.typeAheadMarkers.listIterator$I(i);
for (; i > 0; i--) {
var marker=iter.previous$();
if (Long.$le(marker.after,after )) {
insertionIndex=i;
break;
}}
this.typeAheadMarkers.add$I$O(insertionIndex, Clazz.new_($I$(12,1).c$$J$java_awt_Component,[after, untilFocused]));
});

Clazz.newMeth(C$, 'dequeueKeyEvents$J$java_awt_Component',  function (after, untilFocused) {
if (untilFocused == null ) {
return;
}var marker;
var iter=this.typeAheadMarkers.listIterator$I((Long.$ge(after,0 )) ? this.typeAheadMarkers.size$() : 0);
if (Long.$lt(after,0 )) {
while (iter.hasNext$()){
marker=iter.next$();
if (marker.untilFocused === untilFocused ) {
iter.remove$();
return;
}}
} else {
while (iter.hasPrevious$()){
marker=iter.previous$();
if (marker.untilFocused === untilFocused  && Long.$eq(marker.after,after ) ) {
iter.remove$();
return;
}}
}});

Clazz.newMeth(C$, 'discardKeyEvents$java_awt_Component',  function (comp) {
if (comp == null ) {
return;
}var start=-1;
for (var iter=this.typeAheadMarkers.iterator$(); iter.hasNext$(); ) {
var marker=iter.next$();
var toTest=marker.untilFocused;
var match=(toTest === comp );
while (!match && toTest != null   && !(Clazz.instanceOf(toTest, "java.awt.Window")) ){
toTest=toTest.getParent$();
match=(toTest === comp );
}
if (match) {
if (Long.$lt(start,0 )) {
start=marker.after;
}iter.remove$();
} else if (Long.$ge(start,0 )) {
p$1.purgeStampedEvents$J$J.apply(this, [start, marker.after]);
start=-1;
}}
p$1.purgeStampedEvents$J$J.apply(this, [start, -1]);
});

Clazz.newMeth(C$, 'purgeStampedEvents$J$J',  function (start, end) {
if (Long.$lt(start,0 )) {
return;
}for (var iter=this.enqueuedKeyEvents.iterator$(); iter.hasNext$(); ) {
var ke=iter.next$();
var time=ke.getWhen$();
if (Long.$lt(start,time ) && (Long.$lt(end,0 ) || Long.$le(time,end ) ) ) {
iter.remove$();
}if (Long.$ge(end,0 ) && Long.$gt(time,end ) ) {
break;
}}
}, p$1);

Clazz.newMeth(C$, 'focusPreviousComponent$java_awt_Component',  function (aComponent) {
if (aComponent != null ) {
aComponent.transferFocusBackward$();
}});

Clazz.newMeth(C$, 'focusNextComponent$java_awt_Component',  function (aComponent) {
if (aComponent != null ) {
aComponent.transferFocus$();
}});

Clazz.newMeth(C$, 'upFocusCycle$java_awt_Component',  function (aComponent) {
if (aComponent != null ) {
aComponent.transferFocusUpCycle$();
}});

Clazz.newMeth(C$, 'downFocusCycle$java_awt_Container',  function (aContainer) {
if (aContainer != null  && aContainer.isFocusCycleRoot$() ) {
aContainer.transferFocusDownCycle$();
}});
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultKeyboardFocusManager, "TypeAheadMarker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['J',['after'],'O',['untilFocused','java.awt.Component']]]

Clazz.newMeth(C$, 'c$$J$java_awt_Component',  function (after, untilFocused) {
;C$.$init$.apply(this);
this.after=after;
this.untilFocused=untilFocused;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return ">>> Marker after " + Long.$s(this.after) + " on " + this.untilFocused ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultKeyboardFocusManager, "DefaultKeyboardFocusManagerSentEvent", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.SentEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_awt_AWTEvent$sun_awt_AppContext',  function (nested, toNotify) {
;C$.superclazz.c$$java_awt_AWTEvent$sun_awt_AppContext.apply(this,[nested, toNotify]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'dispatch$',  function () {
var manager=$I$(1).getCurrentKeyboardFocusManager$();
var defaultManager=(Clazz.instanceOf(manager, "java.awt.DefaultKeyboardFocusManager")) ? manager : null;
if (defaultManager != null ) {
{
++defaultManager.inSendMessage;
}}C$.superclazz.prototype.dispatch$.apply(this, []);
if (defaultManager != null ) {
{
--defaultManager.inSendMessage;
}}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
