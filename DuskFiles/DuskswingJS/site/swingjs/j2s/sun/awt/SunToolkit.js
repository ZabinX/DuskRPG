(function(){var P$=Clazz.newPackage("sun.awt"),I$=[[0,'java.util.HashMap','java.awt.EventQueue','sun.awt.AppContext','sun.awt.PostEventQueue','Thread','sun.awt.AWTAutoShutdown','sun.awt.PeerEvent','java.awt.Toolkit','java.awt.Dimension','sun.font.FontDesignMetrics','java.util.Locale']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SunToolkit", null, 'java.awt.Toolkit', 'sun.awt.ComponentFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.windowClosingListener=null;
},1);

C$.$fields$=[['O',['windowClosingListener','sun.awt.WindowClosingListener']]
,['S',['dataTransfererClassName'],'O',['appContextMap','java.util.Map','imgCache','java.util.HashMap','startupLocale','java.util.Locale']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
var eventQueue;
eventQueue=Clazz.new_($I$(2,1));
var appContext=$I$(3).getAppContext$();
if (appContext != null ) {
appContext.put$O$O("AppContext_EVENT_QUEUE_KEY", eventQueue);
var postEventQueue=Clazz.new_($I$(4,1).c$$java_awt_EventQueue,[eventQueue]);
appContext.put$O$O("PostEventQueue", postEventQueue);
}}, 1);

Clazz.newMeth(C$, 'useBufferPerWindow$',  function () {
return false;
});

Clazz.newMeth(C$, 'createNewAppContext$',  function () {
var threadGroup=$I$(5).currentThread$().getThreadGroup$();
return C$.createNewAppContext$ThreadGroup(threadGroup);
}, 1);

Clazz.newMeth(C$, 'createNewAppContext$ThreadGroup',  function (threadGroup) {
var eventQueue;
var eqName=System.getProperty$S$S("AWT.EventQueueClass", "java.awt.EventQueue");
try {
eventQueue=Clazz.forName(eqName).newInstance$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Failed loading " + eqName + ": " + e );
eventQueue=Clazz.new_($I$(2,1));
} else {
throw e;
}
}
var appContext=Clazz.new_($I$(3,1).c$$ThreadGroup,[threadGroup]);
appContext.put$O$O("AppContext_EVENT_QUEUE_KEY", eventQueue);
var postEventQueue=Clazz.new_($I$(4,1).c$$java_awt_EventQueue,[eventQueue]);
appContext.put$O$O("PostEventQueue", postEventQueue);
return appContext;
}, 1);

Clazz.newMeth(C$, 'wakeupEventQueue$java_awt_EventQueue$Z',  function (q, isShutdown) {
q.wakeup$Z(isShutdown);
}, 1);

Clazz.newMeth(C$, 'targetToPeer$O',  function (target) {
if (target != null ) {
return $I$(6).getInstance$().getPeer$O(target);
}return null;
}, 1);

Clazz.newMeth(C$, 'targetCreatedPeer$O$O',  function (target, peer) {
if (target != null  && peer != null  ) {
$I$(6).getInstance$().registerPeer$O$O(target, peer);
}}, 1);

Clazz.newMeth(C$, 'targetDisposedPeer$O$O',  function (target, peer) {
if (target != null  && peer != null  ) {
$I$(6).getInstance$().unregisterPeer$O$O(target, peer);
}}, 1);

Clazz.newMeth(C$, 'setAppContext$O$sun_awt_AppContext',  function (target, context) {
return false;
}, 1);

Clazz.newMeth(C$, 'getAppContext$O',  function (target) {
if (Clazz.instanceOf(target, "java.awt.Component")) {
{
return target.appContext;
}
} else {
return null;
}}, 1);

Clazz.newMeth(C$, 'targetToAppContext$O',  function (target) {
if (target == null ) {
return null;
}var context=C$.getAppContext$O(target);
if (context == null ) {
context=C$.appContextMap.get$O(target);
}return context;
}, 1);

Clazz.newMeth(C$, 'setLWRequestStatus$java_awt_Window$Z',  function (changed, status) {
changed.setLWRequestStatus$Z(status);
}, 1);

Clazz.newMeth(C$, 'checkAndSetPolicy$java_awt_Container$Z',  function (cont, isSwingCont) {
}, 1);

Clazz.newMeth(C$, 'insertTargetMapping$O$sun_awt_AppContext',  function (target, appContext) {
if (!C$.setAppContext$O$sun_awt_AppContext(target, appContext)) {
C$.appContextMap.put$O$O(target, appContext);
}}, 1);

Clazz.newMeth(C$, 'postEvent$sun_awt_AppContext$java_awt_AWTEvent',  function (appContext, event) {
if (event == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}var postEventQueue=appContext.get$O("PostEventQueue");
if (postEventQueue != null ) {
postEventQueue.postEvent$java_awt_AWTEvent(event);
}}, 1);

Clazz.newMeth(C$, 'postPriorityEvent$java_awt_AWTEvent',  function (e) {
var pe=Clazz.new_([$I$(8).getDefaultToolkit$(), ((P$.SunToolkit$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SunToolkit$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.e.setPosted$();
(this.$finals$.e.getSource$()).dispatchEvent$java_awt_AWTEvent(this.$finals$.e);
});
})()
), Clazz.new_(P$.SunToolkit$1.$init$,[this, {e:e}])), 2],$I$(7,1).c$$O$Runnable$J);
C$.postEvent$sun_awt_AppContext$java_awt_AWTEvent(C$.targetToAppContext$O(e.getSource$()), pe);
}, 1);

Clazz.newMeth(C$, 'flushPendingEvents$',  function () {
var appContext=$I$(3).getAppContext$();
var postEventQueue=appContext.get$O("PostEventQueue");
if (postEventQueue != null ) {
postEventQueue.flush$();
}}, 1);

Clazz.newMeth(C$, 'isPostEventQueueEmpty$',  function () {
var appContext=$I$(3).getAppContext$();
var postEventQueue=appContext.get$O("PostEventQueue");
return (postEventQueue == null  || postEventQueue.noEvents$() );
}, 1);

Clazz.newMeth(C$, 'executeOnEventHandlerThread$O$Runnable',  function (target, runnable) {
C$.executeOnEventHandlerThread$sun_awt_PeerEvent(Clazz.new_($I$(7,1).c$$O$Runnable$J,[target, runnable, 1]));
}, 1);

Clazz.newMeth(C$, 'executeOnEventHandlerThread$O$Runnable$J',  function (target, runnable, when) {
C$.executeOnEventHandlerThread$sun_awt_PeerEvent(((P$.SunToolkit$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "SunToolkit$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('sun.awt.PeerEvent'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getWhen$',  function () {
return this.$finals$.when;
});
})()
), Clazz.new_($I$(7,1).c$$O$Runnable$J,[this, {when:when}, target, runnable, 1],P$.SunToolkit$2)));
}, 1);

Clazz.newMeth(C$, 'executeOnEventHandlerThread$sun_awt_PeerEvent',  function (peerEvent) {
C$.postEvent$sun_awt_AppContext$java_awt_AWTEvent(C$.targetToAppContext$O(peerEvent.getSource$()), peerEvent);
}, 1);

Clazz.newMeth(C$, 'invokeLaterOnAppContext$sun_awt_AppContext$Runnable',  function (appContext, dispatcher) {
C$.postEvent$sun_awt_AppContext$java_awt_AWTEvent(appContext, Clazz.new_([$I$(8).getDefaultToolkit$(), dispatcher, 1],$I$(7,1).c$$O$Runnable$J));
}, 1);

Clazz.newMeth(C$, 'isDispatchThreadForAppContext$O',  function (target) {
var appContext=C$.targetToAppContext$O(target);
var eq=appContext.get$O("AppContext_EVENT_QUEUE_KEY");
return $I$(2).isDispatchThread$();
}, 1);

Clazz.newMeth(C$, 'getScreenSize$',  function () {
return Clazz.new_([this.getScreenWidth$(), this.getScreenHeight$()],$I$(9,1).c$$I$I);
});

Clazz.newMeth(C$, 'getFontMetrics$java_awt_Font',  function (font) {
return $I$(10).getMetrics$java_awt_Font(font);
});

Clazz.newMeth(C$, 'getFontList$',  function () {
var hardwiredFontList=Clazz.array(String, -1, ["Dialog", "SansSerif", "Serif", "Monospaced", "DialogInput"]);
return hardwiredFontList;
});

Clazz.newMeth(C$, 'createPanel$java_awt_Panel',  function (target) {
return this.createComponent$java_awt_Component(target);
});

Clazz.newMeth(C$, 'disableBackgroundErase$java_awt_Component',  function (component) {
component.setBackgroundEraseDisabled$Z(true);
});

Clazz.newMeth(C$, 'getSunAwtNoerasebackground$',  function () {
return false;
}, 1);

Clazz.newMeth(C$, 'getSunAwtErasebackgroundonresize$',  function () {
return true;
}, 1);

Clazz.newMeth(C$, 'setOverrideRedirect$java_awt_Window',  function (target) {
});

Clazz.newMeth(C$, 'getImageFromHash$java_awt_Toolkit$java_net_URL',  function (tk, url) {
var img=C$.imgCache.get$O(url);
if (img == null ) {
try {
img=tk.createImage$java_net_URL(url);
C$.imgCache.put$O$O(url, img);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}return img;
}, 1);

Clazz.newMeth(C$, 'getImageFromHash$java_awt_Toolkit$S',  function (tk, filename) {
var img=C$.imgCache.get$O(filename);
if (img == null ) {
try {
tk.createImage$S(filename);
C$.imgCache.put$O$O(filename, img);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}return img;
}, 1);

Clazz.newMeth(C$, 'getImage$S',  function (filename) {
return C$.getImageFromHash$java_awt_Toolkit$S(this, filename);
});

Clazz.newMeth(C$, 'getImage$java_net_URL',  function (url) {
return C$.getImageFromHash$java_awt_Toolkit$java_net_URL(this, url);
});

Clazz.newMeth(C$, 'checkImage$java_awt_Image$I$I$java_awt_image_ImageObserver',  function (img, w, h, o) {
return 0;
});

Clazz.newMeth(C$, 'prepareImage$java_awt_Image$I$I$java_awt_image_ImageObserver',  function (img, w, h, o) {
if (w == 0 || h == 0 ) {
return true;
}return true;
});

Clazz.newMeth(C$, 'getSystemEventQueueImpl$',  function () {
return C$.getSystemEventQueueImplPP$sun_awt_AppContext($I$(3).getAppContext$());
});

Clazz.newMeth(C$, 'getSystemEventQueueImplPPS$',  function () {
return C$.getSystemEventQueueImplPP$sun_awt_AppContext($I$(3).getAppContext$());
}, 1);

Clazz.newMeth(C$, 'getSystemEventQueueImplPP$sun_awt_AppContext',  function (appContext) {
var theEventQueue=appContext.get$O("AppContext_EVENT_QUEUE_KEY");
return theEventQueue;
}, 1);

Clazz.newMeth(C$, 'getNativeContainer$java_awt_Component',  function (c) {
return $I$(8).getNativeContainer$java_awt_Component(c);
}, 1);

Clazz.newMeth(C$, 'getFocusAcceleratorKeyMask$',  function () {
return 8;
});

Clazz.newMeth(C$, 'enableInputMethodsForTextComponent$',  function () {
return false;
});

Clazz.newMeth(C$, 'getStartupLocale$',  function () {
if (C$.startupLocale == null ) {
C$.startupLocale=$I$(11).US;


}return C$.startupLocale;
}, 1);

Clazz.newMeth(C$, 'getDefaultKeyboardLocale$',  function () {
return C$.getStartupLocale$();
});

Clazz.newMeth(C$, 'setDataTransfererClassName$S',  function (className) {
C$.dataTransfererClassName=className;
}, 1);

Clazz.newMeth(C$, 'getDataTransfererClassName$',  function () {
if (C$.dataTransfererClassName == null ) {
$I$(8).getDefaultToolkit$();
}return C$.dataTransfererClassName;
}, 1);

Clazz.newMeth(C$, 'getWindowClosingListener$',  function () {
return this.windowClosingListener;
});

Clazz.newMeth(C$, 'setWindowClosingListener$sun_awt_WindowClosingListener',  function (wcl) {
this.windowClosingListener=wcl;
});

Clazz.newMeth(C$, 'windowClosingNotify$java_awt_event_WindowEvent',  function (event) {
if (this.windowClosingListener != null ) {
return this.windowClosingListener.windowClosingNotify$java_awt_event_WindowEvent(event);
} else {
return null;
}});

Clazz.newMeth(C$, 'windowClosingDelivered$java_awt_event_WindowEvent',  function (event) {
if (this.windowClosingListener != null ) {
return this.windowClosingListener.windowClosingDelivered$java_awt_event_WindowEvent(event);
} else {
return null;
}});

Clazz.newMeth(C$, 'isModalExcluded$java_awt_Window',  function (window) {
return true;
}, 1);

Clazz.newMeth(C$, 'getDesktopAAHints$',  function () {
return null;
});

Clazz.newMeth(C$, 'getContainingWindow$java_awt_Component',  function (comp) {
while (comp != null  && !comp.isWindowOrJSApplet$() ){
comp=comp.getParent$();
}
return comp;
}, 1);

Clazz.newMeth(C$, 'isNativeGTKAvailable$',  function () {
return false;
});

Clazz.newMeth(C$, 'isWindowOpacitySupported$',  function () {
return false;
});

Clazz.newMeth(C$, 'isWindowShapingSupported$',  function () {
return false;
});

Clazz.newMeth(C$, 'isWindowTranslucencySupported$',  function () {
return false;
});

Clazz.newMeth(C$, 'isTranslucencyCapable$java_awt_GraphicsConfiguration',  function (gc) {
return false;
});

Clazz.newMeth(C$, 'needUpdateWindow$',  function () {
return false;
});

C$.$static$=function(){C$.$static$=0;
C$.appContextMap=Clazz.new_($I$(1,1));
C$.imgCache=Clazz.new_($I$(1,1));
C$.startupLocale=null;
C$.dataTransfererClassName=null;
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
