(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.awt.AWTEventMulticaster','java.util.HashMap','sun.awt.NullComponentPeer','java.awt.Insets','swingjs.JSToolkit','java.awt.Cursor','java.awt.Dimension',['java.awt.Toolkit','.SelectiveAWTEventListener'],['java.awt.Toolkit','.ToolkitEventMulticaster'],'java.awt.event.AWTEventListener','java.awt.event.AWTEventListenerProxy','java.util.ArrayList','java.beans.PropertyChangeSupport']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Toolkit", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ToolkitEventMulticaster',10],['SelectiveAWTEventListener',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.desktopProperties=Clazz.new_($I$(2,1));
this.desktopPropsSupport=C$.createPropertyChangeSupport$java_awt_Toolkit(this);
this.calls=Clazz.array(Integer.TYPE, [32]);
this.eventListener=null;
this.listener2SelectiveListener=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['desktopProperties','java.util.Map','desktopPropsSupport','java.beans.PropertyChangeSupport','calls','int[]','eventListener','java.awt.event.AWTEventListener','listener2SelectiveListener','java.util.HashMap']]
,['J',['enabledOnToolkitMask'],'O',['lightweightMarker','java.awt.peer.LightweightPeer','toolkit','java.awt.Toolkit','resources','java.util.ResourceBundle']]]

Clazz.newMeth(C$, 'createComponent$java_awt_Component',  function (target) {
if (C$.lightweightMarker == null ) {
C$.lightweightMarker=Clazz.new_($I$(3,1));
}return C$.lightweightMarker;
});

Clazz.newMeth(C$, 'loadSystemColors$IA',  function (systemColors) {
});

Clazz.newMeth(C$, 'setDynamicLayout$Z',  function (dynamic) {
});

Clazz.newMeth(C$, 'isDynamicLayoutSet$',  function () {
if (this !== C$.getDefaultToolkit$() ) {
return C$.getDefaultToolkit$().isDynamicLayoutSet$();
} else {
return false;
}});

Clazz.newMeth(C$, 'isDynamicLayoutActive$',  function () {
if (this !== C$.getDefaultToolkit$() ) {
return C$.getDefaultToolkit$().isDynamicLayoutActive$();
} else {
return false;
}});

Clazz.newMeth(C$, 'getScreenInsets$java_awt_GraphicsConfiguration',  function (gc) {
if (this !== C$.getDefaultToolkit$() ) {
return C$.getDefaultToolkit$().getScreenInsets$java_awt_GraphicsConfiguration(gc);
} else {
return Clazz.new_($I$(4,1).c$$I$I$I$I,[0, 0, 0, 0]);
}});

Clazz.newMeth(C$, 'getDefaultToolkit$',  function () {
return (C$.toolkit == null  ? C$.toolkit=Clazz.new_($I$(5,1)) : C$.toolkit);
}, 1);

Clazz.newMeth(C$, 'createImage$BA',  function (imagedata) {
return this.createImage$BA$I$I(imagedata, 0, imagedata.length);
});

Clazz.newMeth(C$, 'getPrintJob$java_awt_JSFrame$S$java_awt_JobAttributes$java_awt_PageAttributes',  function (frame, jobtitle, jobAttributes, pageAttributes) {
if (this !== C$.getDefaultToolkit$() ) {
return C$.getDefaultToolkit$().getPrintJob$java_awt_JSFrame$S$java_awt_JobAttributes$java_awt_PageAttributes(frame, jobtitle, jobAttributes, pageAttributes);
} else {
return this.getPrintJob$java_awt_JSFrame$S$java_util_Properties(frame, jobtitle, null);
}});

Clazz.newMeth(C$, 'getPrintJob$java_awt_Frame$S$java_awt_JobAttributes$java_awt_PageAttributes',  function (frame, jobtitle, jobAttributes, pageAttributes) {
if (this !== C$.getDefaultToolkit$() ) {
return C$.getDefaultToolkit$().getPrintJob$java_awt_Frame$S$java_awt_JobAttributes$java_awt_PageAttributes(frame, jobtitle, jobAttributes, pageAttributes);
} else {
return this.getPrintJob$java_awt_Frame$S$java_util_Properties(frame, jobtitle, null);
}});

Clazz.newMeth(C$, 'getSystemSelection$',  function () {
if (this !== C$.getDefaultToolkit$() ) {
return C$.getDefaultToolkit$().getSystemSelection$();
} else {
return null;
}});

Clazz.newMeth(C$, 'getMenuShortcutKeyMask$',  function () {
return 2;
});

Clazz.newMeth(C$, 'getNativeContainer$java_awt_Component',  function (c) {
return null;
}, 1);

Clazz.newMeth(C$, 'createCustomCursor$java_awt_Image$java_awt_Point$S',  function (cursor, hotSpot, name) {
return (name == null  ? Clazz.new_($I$(6,1).c$$I,[0]) : Clazz.new_($I$(6,1).c$$S,[name]));
});

Clazz.newMeth(C$, 'getBestCursorSize$I$I',  function (preferredWidth, preferredHeight) {
return Clazz.new_($I$(7,1).c$$I$I,[0, 0]);
});

Clazz.newMeth(C$, 'getMaximumCursorColors$',  function () {
return 0;
});

Clazz.newMeth(C$, 'isFrameStateSupported$I',  function (state) {
return (state == 0);
});

Clazz.newMeth(C$, 'getProperty$S$S',  function (key, defaultValue) {
if (C$.resources != null ) {
try {
return C$.resources.getString$S(key);
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.MissingResourceException")){
} else {
throw e;
}
}
}return defaultValue;
}, 1);

Clazz.newMeth(C$, 'getSystemEventQueue$',  function () {
return this.getSystemEventQueueImpl$();
});

Clazz.newMeth(C$, 'getEventQueue$',  function () {
return C$.getDefaultToolkit$().getSystemEventQueueImpl$();
}, 1);

Clazz.newMeth(C$, 'createDragGestureRecognizer$Class$java_awt_dnd_DragSource$java_awt_Component$I$java_awt_dnd_DragGestureListener',  function (abstractRecognizerClass, ds, c, srcActions, dgl) {
return null;
});

Clazz.newMeth(C$, 'getDesktopProperty$S',  function (propertyName) {
if (this.desktopProperties.isEmpty$()) {
this.initializeDesktopProperties$();
}var value;
if (propertyName.equals$O("awt.dynamicLayoutSupported")) {
value=this.lazilyLoadDesktopProperty$S(propertyName);
return value;
}value=this.desktopProperties.get$O(propertyName);
if (value == null ) {
value=this.lazilyLoadDesktopProperty$S(propertyName);
if (value != null ) {
this.setDesktopProperty$S$O(propertyName, value);
}}if (Clazz.instanceOf(value, "java.awt.RenderingHints")) {
value=(value).clone$();
}return value;
});

Clazz.newMeth(C$, 'setDesktopProperty$S$O',  function (name, newValue) {
var oldValue;
{
oldValue=this.desktopProperties.get$O(name);
this.desktopProperties.put$O$O(name, newValue);
}this.desktopPropsSupport.firePropertyChange$S$O$O(name, oldValue, newValue);
});

Clazz.newMeth(C$, 'lazilyLoadDesktopProperty$S',  function (name) {
return null;
});

Clazz.newMeth(C$, 'initializeDesktopProperties$',  function () {
});

Clazz.newMeth(C$, 'addPropertyChangeListener$S$java_beans_PropertyChangeListener',  function (name, pcl) {
this.desktopPropsSupport.addPropertyChangeListener$S$java_beans_PropertyChangeListener(name, pcl);
});

Clazz.newMeth(C$, 'removePropertyChangeListener$S$java_beans_PropertyChangeListener',  function (name, pcl) {
this.desktopPropsSupport.removePropertyChangeListener$S$java_beans_PropertyChangeListener(name, pcl);
});

Clazz.newMeth(C$, 'getPropertyChangeListeners$',  function () {
return this.desktopPropsSupport.getPropertyChangeListeners$();
});

Clazz.newMeth(C$, 'getPropertyChangeListeners$S',  function (propertyName) {
return this.desktopPropsSupport.getPropertyChangeListeners$S(propertyName);
});

Clazz.newMeth(C$, 'isAlwaysOnTopSupported$',  function () {
return true;
});

Clazz.newMeth(C$, 'deProxyAWTEventListener$java_awt_event_AWTEventListener',  function (l) {
var localL=l;
if (localL == null ) {
return null;
}if (Clazz.instanceOf(l, "java.awt.event.AWTEventListenerProxy")) {
localL=(l).getListener$();
}return localL;
}, 1);

Clazz.newMeth(C$, 'addAWTEventListener$java_awt_event_AWTEventListener$J',  function (listener, eventMask) {
var localL=C$.deProxyAWTEventListener$java_awt_event_AWTEventListener(listener);
if (localL == null ) {
return;
}{
var selectiveListener=this.listener2SelectiveListener.get$O(localL);
if (selectiveListener == null ) {
selectiveListener=Clazz.new_($I$(8,1).c$$java_awt_event_AWTEventListener$J,[this, null, localL, eventMask]);
this.listener2SelectiveListener.put$O$O(localL, selectiveListener);
this.eventListener=$I$(9).add$java_awt_event_AWTEventListener$java_awt_event_AWTEventListener(this.eventListener, selectiveListener);
}selectiveListener.orEventMasks$J(eventMask);
(C$.enabledOnToolkitMask=Long.$or(C$.enabledOnToolkitMask,(eventMask)));
var mask=eventMask;
for (var i=0; i < 32; i++) {
if (Long.$eq(mask,0 )) {
break;
}if (Long.$ne((Long.$and(mask,1)),0 )) {
++this.calls[i];
}(mask=Long.$usr(mask,(1)));
}
}});

Clazz.newMeth(C$, 'removeAWTEventListener$java_awt_event_AWTEventListener',  function (listener) {
var localL=C$.deProxyAWTEventListener$java_awt_event_AWTEventListener(listener);
if (listener == null ) {
return;
}{
var selectiveListener=this.listener2SelectiveListener.get$O(localL);
if (selectiveListener != null ) {
this.listener2SelectiveListener.remove$O(localL);
var listenerCalls=selectiveListener.getCalls$();
for (var i=0; i < 32; i++) {
this.calls[i]-=listenerCalls[i];
if (this.calls[i] == 0) {
(C$.enabledOnToolkitMask=Long.$and(C$.enabledOnToolkitMask,((Long.$not((Long.$sl(1,i)))))));
}}
}this.eventListener=$I$(9,"remove$java_awt_event_AWTEventListener$java_awt_event_AWTEventListener",[this.eventListener, (selectiveListener == null ) ? localL : selectiveListener]);
}});

Clazz.newMeth(C$, 'enabledOnToolkit$J',  function (eventMask) {
return Long.$ne((Long.$and(C$.enabledOnToolkitMask,eventMask)),0 );
}, 1);

Clazz.newMeth(C$, 'countAWTEventListeners$J',  function (eventMask) {
var ci=0;
for (; Long.$ne(eventMask,0 ); (eventMask=Long.$usr(eventMask,(1))), ci++) {
}
--ci;
return this.calls[ci];
});

Clazz.newMeth(C$, 'getAWTEventListeners$',  function () {
{
var la=$I$(1,"getListeners$java_util_EventListener$Class",[this.eventListener, Clazz.getClass($I$(10),['eventDispatched$java_awt_AWTEvent'])]);
var ret=Clazz.array($I$(10), [la.length]);
for (var i=0; i < la.length; i++) {
var sael=la[i];
var tempL=sael.getListener$();
ret[i]=Clazz.new_([sael.getEventMask$(), tempL],$I$(11,1).c$$J$java_awt_event_AWTEventListener);
}
return ret;
}});

Clazz.newMeth(C$, 'getAWTEventListeners$J',  function (eventMask) {
{
var la=$I$(1,"getListeners$java_util_EventListener$Class",[this.eventListener, Clazz.getClass($I$(10),['eventDispatched$java_awt_AWTEvent'])]);
var list=Clazz.new_($I$(12,1).c$$I,[la.length]);
for (var i=0; i < la.length; i++) {
var sael=la[i];
if (Long.$eq((Long.$and(sael.getEventMask$(),eventMask)),eventMask )) {
list.add$O(Clazz.new_([sael.getEventMask$(), sael.getListener$()],$I$(11,1).c$$J$java_awt_event_AWTEventListener));
}}
return list.toArray$OA(Clazz.array($I$(10), [0]));
}});

Clazz.newMeth(C$, 'notifyAWTEventListeners$java_awt_AWTEvent',  function (theEvent) {
var eventListener=this.eventListener;
if (eventListener != null ) {
eventListener.eventDispatched$java_awt_AWTEvent(theEvent);
}});

Clazz.newMeth(C$, 'createPropertyChangeSupport$java_awt_Toolkit',  function (toolkit) {
return Clazz.new_($I$(13,1).c$$O,[toolkit]);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Toolkit, "ToolkitEventMulticaster", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.awt.AWTEventMulticaster', 'java.awt.event.AWTEventListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_awt_event_AWTEventListener$java_awt_event_AWTEventListener',  function (a, b) {
;C$.superclazz.c$$java_util_EventListener$java_util_EventListener.apply(this,[a, b]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'add$java_awt_event_AWTEventListener$java_awt_event_AWTEventListener',  function (a, b) {
if (a == null ) return b;
if (b == null ) return a;
return Clazz.new_(C$.c$$java_awt_event_AWTEventListener$java_awt_event_AWTEventListener,[a, b]);
}, 1);

Clazz.newMeth(C$, 'remove$java_awt_event_AWTEventListener$java_awt_event_AWTEventListener',  function (l, oldl) {
return $I$(1).removeInternal$java_util_EventListener$java_util_EventListener(l, oldl);
}, 1);

Clazz.newMeth(C$, 'remove$java_util_EventListener',  function (oldl) {
if (oldl === this.a ) return this.b;
if (oldl === this.b ) return this.a;
var a2=$I$(1).removeInternal$java_util_EventListener$java_util_EventListener(this.a, oldl);
var b2=$I$(1).removeInternal$java_util_EventListener$java_util_EventListener(this.b, oldl);
if (a2 === this.a  && b2 === this.b  ) {
return this;
}return C$.add$java_awt_event_AWTEventListener$java_awt_event_AWTEventListener(a2, b2);
});

Clazz.newMeth(C$, 'eventDispatched$java_awt_AWTEvent',  function (event) {
(this.a).eventDispatched$java_awt_AWTEvent(event);
(this.b).eventDispatched$java_awt_AWTEvent(event);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Toolkit, "SelectiveAWTEventListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.awt.event.AWTEventListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.calls=Clazz.array(Integer.TYPE, [32]);
},1);

C$.$fields$=[['J',['eventMask'],'O',['listener','java.awt.event.AWTEventListener','calls','int[]']]]

Clazz.newMeth(C$, 'getListener$',  function () {
return this.listener;
});

Clazz.newMeth(C$, 'getEventMask$',  function () {
return this.eventMask;
});

Clazz.newMeth(C$, 'getCalls$',  function () {
return this.calls;
});

Clazz.newMeth(C$, 'orEventMasks$J',  function (mask) {
(this.eventMask=Long.$or(this.eventMask,(mask)));
for (var i=0; i < 32; i++) {
if (Long.$eq(mask,0 )) {
break;
}if (Long.$ne((Long.$and(mask,1)),0 )) {
++this.calls[i];
}(mask=Long.$usr(mask,(1)));
}
});

Clazz.newMeth(C$, 'c$$java_awt_event_AWTEventListener$J',  function (l, mask) {
;C$.$init$.apply(this);
this.listener=l;
this.eventMask=mask;
}, 1);

Clazz.newMeth(C$, 'eventDispatched$java_awt_AWTEvent',  function (event) {
var eventBit=0;
if ((Long.$ne((eventBit=Long.$and(this.eventMask,1)),0 ) && event.id >= 100  && event.id <= 103 ) || (Long.$ne((eventBit=Long.$and(this.eventMask,2)),0 ) && event.id >= 300  && event.id <= 301 ) || (Long.$ne((eventBit=Long.$and(this.eventMask,4)),0 ) && event.id >= 1004  && event.id <= 1005 ) || (Long.$ne((eventBit=Long.$and(this.eventMask,8)),0 ) && event.id >= 400  && event.id <= 402 ) || (Long.$ne((eventBit=Long.$and(this.eventMask,131072)),0 ) && event.id == 507 ) || (Long.$ne((eventBit=Long.$and(this.eventMask,32)),0 ) && (event.id == 503 || event.id == 506 ) ) || (Long.$ne((eventBit=Long.$and(this.eventMask,16)),0 ) && event.id != 503  && event.id != 506  && event.id != 507  && event.id >= 500  && event.id <= 507 ) || (Long.$ne((eventBit=Long.$and(this.eventMask,64)),0 ) && (event.id >= 200 && event.id <= 209 ) ) || (Long.$ne((eventBit=Long.$and(this.eventMask,128)),0 ) && event.id >= 1001  && event.id <= 1001 ) || (Long.$ne((eventBit=Long.$and(this.eventMask,256)),0 ) && event.id >= 601  && event.id <= 601 ) || (Long.$ne((eventBit=Long.$and(this.eventMask,512)),0 ) && event.id >= 701  && event.id <= 701 ) || (Long.$ne((eventBit=Long.$and(this.eventMask,1024)),0 ) && event.id >= 900  && event.id <= 900 ) || (Long.$ne((eventBit=Long.$and(this.eventMask,2048)),0 ) && event.id >= 1100  && event.id <= 1101 ) || (Long.$ne((eventBit=Long.$and(this.eventMask,8192)),0 ) && event.id >= 800  && event.id <= 801 ) || (Long.$ne((eventBit=Long.$and(this.eventMask,16384)),0 ) && event.id >= 1200  && event.id <= 1201 ) || (Long.$ne((eventBit=Long.$and(this.eventMask,32768)),0 ) && event.id == 1400 ) || (Long.$ne((eventBit=Long.$and(this.eventMask,65536)),0 ) && (event.id == 1401 || event.id == 1402 ) ) || (Long.$ne((eventBit=Long.$and(this.eventMask,262144)),0 ) && event.id == 209 ) || (Long.$ne((eventBit=Long.$and(this.eventMask,524288)),0 ) && (event.id == 207 || event.id == 208 ) )  ) {
var ci=0;
for (var eMask=eventBit; Long.$ne(eMask,0 ); (eMask=Long.$usr(eMask,(1))), ci++) {
}
--ci;
for (var i=0; i < this.calls[ci]; i++) {
this.listener.eventDispatched$java_awt_AWTEvent(event);
}
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:07 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
