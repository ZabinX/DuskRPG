(function(){var P$=Clazz.newPackage("java.awt"),p$1={},I$=[[0,'java.awt.Color','java.util.Vector','java.awt.Cursor','java.awt.BorderLayout',['java.awt.JSComponent','.ModalExclusionType'],'java.util.ArrayList','java.awt.Toolkit','java.awt.event.WindowEvent','java.util.Locale','java.util.Arrays','swingjs.JSToolkit','sun.awt.AppContext',['java.awt.Dialog','.ModalExclusionType'],'java.awt.AWTEventMulticaster','java.awt.event.WindowListener','java.awt.event.WindowFocusListener','java.awt.event.WindowStateListener','java.awt.KeyboardFocusManager','java.awt.ComponentOrientation','java.util.ResourceBundle','java.awt.GraphicsEnvironment','java.awt.Point']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Window", null, 'javax.swing.JComponent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.syncLWRequests=false;
this.beforeFirstShow=true;
this.ownedWindowList=Clazz.new_($I$(2,1));
this.focusableWindowState=true;
this.isInShow=false;
this.opacity=1.0;
this.shape=null;
this.isTrayIconWindow=false;
this.locationByPlatform=false;
this.opaque=true;
},1);

C$.$fields$=[['Z',['syncLWRequests','beforeFirstShow','alwaysOnTop','showWithParent','focusableWindowState','isInShow','isTrayIconWindow','_disposed','locationByPlatform','opaque'],'F',['opacity'],'I',['state'],'S',['warningString'],'O',['icons','java.util.List','temporaryLostComponent','java.awt.Component','ownedWindowList','java.util.Vector','modalBlocker','java.awt.JSDialog','modalExclusionType','java.awt.JSComponent.ModalExclusionType','windowListener','java.awt.event.WindowListener','windowStateListener','java.awt.event.WindowStateListener','windowFocusListener','java.awt.event.WindowFocusListener','shape','java.awt.Shape']]
,['Z',['systemSyncLWRequests'],'I',['nameCounter'],'O',['TRANSPARENT_BACKGROUND_COLOR','java.awt.Color']]]

Clazz.newMeth(C$, 'setOpaque$java_awt_Window$Z',  function (window, opaque) {
var bg=window.getBackground$();
if (bg == null ) {
bg=Clazz.new_($I$(1,1).c$$I$I$I$I,[0, 0, 0, 0]);
}window.setBackground$java_awt_Color(Clazz.new_([bg.getRed$(), bg.getGreen$(), bg.getBlue$(), opaque ? 255 : 0],$I$(1,1).c$$I$I$I$I));
});

Clazz.newMeth(C$, 'updateWindow$',  function () {
});

Clazz.newMeth(C$, 'setLWRequestStatus$Z',  function (status) {
this.syncLWRequests=status;
});

Clazz.newMeth(C$, 'isAutoRequestFocus$',  function () {
return true;
});

Clazz.newMeth(C$, 'isTrayIconWindow$',  function () {
return this.isTrayIconWindow;
});

Clazz.newMeth(C$, 'setTrayIconWindow$Z',  function (isTrayIconWindow) {
this.isTrayIconWindow=isTrayIconWindow;
});

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$java_awt_Window$java_awt_GraphicsConfiguration.apply(this, [null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_GraphicsConfiguration',  function (gc) {
C$.c$$java_awt_Window$java_awt_GraphicsConfiguration.apply(this, [null, gc]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Frame',  function (owner) {
C$.c$$java_awt_Window$java_awt_GraphicsConfiguration.apply(this, [owner, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window',  function (owner) {
C$.c$$java_awt_Window$java_awt_GraphicsConfiguration.apply(this, [owner, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Window$java_awt_GraphicsConfiguration',  function (owner, gc) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.秘winOrApplet=true;
this.秘paintClass=this.秘updateClass=C$ ||null;
this.setAppContext$();
this.parent=owner;
if (owner != null ) owner.addOwnedWindow$java_awt_Window(this);
this.syncLWRequests=C$.systemSyncLWRequests;
p$1.addToWindowList.apply(this, []);
this.cursor=$I$(3).getPredefinedCursor$I(0);
this.visible=false;
this.setLayout$java_awt_LayoutManager(Clazz.new_($I$(4,1)));
var screenBounds=this.getGraphicsConfiguration$().getBounds$();
var screenInsets=this.getToolkit$().getScreenInsets$java_awt_GraphicsConfiguration(this.graphicsConfig);
var x=this.getX$() + screenBounds.x + screenInsets.left ;
var y=this.getY$() + screenBounds.y + screenInsets.top ;
if (x != (this).x || y != (this).y ) {
this.setLocation$I$I(x, y);
this.setLocationByPlatform$Z(false);
}this.modalExclusionType=$I$(5).NO_EXCLUDE;
}, 1);

Clazz.newMeth(C$, 'constructComponentName$',  function () {
{
return "win" + C$.nameCounter++;
}});

Clazz.newMeth(C$, 'getIconImages$',  function () {
var icons=this.icons;
if (icons == null  || icons.size$() == 0 ) {
return Clazz.new_($I$(6,1));
}return Clazz.new_($I$(6,1).c$$java_util_Collection,[icons]);
});

Clazz.newMeth(C$, 'setIconImages$java_util_List',  function (icons) {
this.icons=(icons == null ) ? Clazz.new_($I$(6,1)) : Clazz.new_($I$(6,1).c$$java_util_Collection,[icons]);
this.firePropertyChange$S$O$O("iconImage", null, null);
});

Clazz.newMeth(C$, 'setIconImage$java_awt_Image',  function (image) {
var imageList=Clazz.new_($I$(6,1));
if (image != null ) {
imageList.add$O(image);
}this.setIconImages$java_util_List(imageList);
});

Clazz.newMeth(C$, 'addNotify$',  function () {
var parent=this.parent;
if (parent != null  && parent.peer == null  ) parent.addNotify$();
this.getOrCreatePeer$();
if (parent != null ) this.秘appletViewer=parent.秘appletViewer;
this.秘appletViewer.addWindow$java_awt_Window(this);
C$.superclazz.prototype.addNotify$.apply(this, []);
});

Clazz.newMeth(C$, 'getOrCreatePeer$',  function () {
return (this.ui == null  ? null : this.peer == null  ? (this.peer=this.getToolkit$().createWindow$java_awt_Window(this)) : this.peer);
});

Clazz.newMeth(C$, 'removeNotify$',  function () {
this.秘appletViewer.allWindows.removeObj$O(this);
C$.superclazz.prototype.removeNotify$.apply(this, []);
});

Clazz.newMeth(C$, 'pack$',  function () {
var parent=this.parent;
if (parent != null  && parent.getPeer$() == null  ) {
parent.addNotify$();
}if (this.peer == null ) {
this.addNotify$();
}if (this.beforeFirstShow) {
this.isPacked=true;
}this.repackContainer$();
});

Clazz.newMeth(C$, 'setMinimumSize$java_awt_Dimension',  function (minimumSize) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
C$.superclazz.prototype.setMinimumSize$java_awt_Dimension.apply(this, [minimumSize]);
var size=this.getSize$();
if (this.isMinimumSizeSet$()) {
if (size.width < minimumSize.width || size.height < minimumSize.height ) {
var nw=Math.max(this.width, minimumSize.width);
var nh=Math.max(this.height, minimumSize.height);
this.setSize$I$I(nw, nh);
}}}});

Clazz.newMeth(C$, 'setSize$java_awt_Dimension',  function (d) {
C$.superclazz.prototype.setSize$java_awt_Dimension.apply(this, [d]);
});

Clazz.newMeth(C$, 'setSize$I$I',  function (width, height) {
C$.superclazz.prototype.setSize$I$I.apply(this, [width, height]);
});

Clazz.newMeth(C$, 'reshape$I$I$I$I',  function (x, y, width, height) {
if (this.isMinimumSizeSet$()) {
var minSize=this.getMinimumSize$();
if (width < minSize.width) {
width=minSize.width;
}if (height < minSize.height) {
height=minSize.height;
}}C$.superclazz.prototype.reshape$I$I$I$I.apply(this, [x, y, width, height]);
});

Clazz.newMeth(C$, 'closeSplashScreen$',  function () {
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
this.paintContainer$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'update$java_awt_Graphics',  function (g) {
this.updateContainer$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'printAll$java_awt_Graphics',  function (g) {
C$.superclazz.prototype.printAll$java_awt_Graphics.apply(this, [g]);
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
return this.preferredSize$();
});

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
if (b) {
this.show$();
} else {
this.hide$();
}});

Clazz.newMeth(C$, 'show$',  function () {
if (this.ui != null  && (this.ui).isDisposed ) this.addNotify$();
this.validate$();
this.isInShow=true;
if (this.visible) {
this.toFront$();
} else {
this.beforeFirstShow=false;
C$.closeSplashScreen$();
C$.superclazz.prototype.show$.apply(this, []);
for (var i=0; i < this.ownedWindowList.size$(); i++) {
var child=this.ownedWindowList.elementAt$I(i);
if ((child != null ) && child.showWithParent ) {
child.show$();
child.showWithParent=false;
}}
if (Clazz.instanceOf(this, "java.awt.JSFrame") || Clazz.instanceOf(this, "java.awt.JSDialog") ) {
C$.updateChildFocusableWindowState$java_awt_Window(this);
}}this.isInShow=false;
if ((this.state & 1) == 0) {
this.秘repaint$();
this.postWindowEvent$I(200);
this.state|=1;
}});

Clazz.newMeth(C$, 'updateChildFocusableWindowState$java_awt_Window',  function (w) {
for (var i=0; i < w.ownedWindowList.size$(); i++) {
var child=w.ownedWindowList.elementAt$I(i);
if (child != null ) {
C$.updateChildFocusableWindowState$java_awt_Window(child);
}}
}, 1);

Clazz.newMeth(C$, 'postWindowEvent$I',  function (id) {
if (this.windowListener != null  || Long.$ne((Long.$and(this.eventMask,64)),0 )  || $I$(7).enabledOnToolkit$J(64) ) {
var e=Clazz.new_($I$(8,1).c$$java_awt_Window$I,[this, id]);
$I$(7).getEventQueue$().postEvent$java_awt_AWTEvent(e);
}});

Clazz.newMeth(C$, 'hide$',  function () {
{
for (var i=0; i < this.ownedWindowList.size$(); i++) {
var child=this.ownedWindowList.elementAt$I(i);
if ((child != null ) && child.visible ) {
child.hide$();
child.showWithParent=true;
}}
}C$.superclazz.prototype.hide$.apply(this, []);
});

Clazz.newMeth(C$, 'clearMostRecentFocusOwnerOnHide$',  function () {
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.doDispose$();
});

Clazz.newMeth(C$, 'disposeImpl$',  function () {
this.dispose$();
if (!this._disposed && this.getPeer$() != null  ) {
this.doDispose$();
}});

Clazz.newMeth(C$, 'doDispose$',  function () {
this._disposed=true;
var me=this;
var action=((P$.Window$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Window$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var parent=this.b$['java.awt.Window'].getOwner$.apply(this.b$['java.awt.Window'], []);
if (parent != null ) {
parent.removeOwnedWindow$java_awt_Window(this.$finals$.me);
}var ui=this.$finals$.me.getUI$();
if (ui != null ) {
ui.reinstallUI$javax_swing_JComponent$javax_swing_JComponent(this.$finals$.me, null);
}var ownedWindowArray;
{
ownedWindowArray=Clazz.array(java.lang.Object, [this.b$['java.awt.Window'].ownedWindowList.size$()]);
this.b$['java.awt.Window'].ownedWindowList.copyInto$OA(ownedWindowArray);
}for (var i=0; i < ownedWindowArray.length; i++) {
var child=ownedWindowArray[i];
if (child != null ) child.disposeImpl$();
}
this.b$['java.awt.Window'].hide$.apply(this.b$['java.awt.Window'], []);
this.b$['java.awt.Window'].beforeFirstShow=true;
this.b$['java.awt.Window'].removeNotify$.apply(this.b$['java.awt.Window'], []);
this.b$['java.awt.Container'].clearCurrentFocusCycleRootOnHide$.apply(this.b$['java.awt.Container'], []);
});
})()
), Clazz.new_(P$.Window$1.$init$,[this, {me:me}]));
action.run$();
this.postWindowEvent$I(202);
});

Clazz.newMeth(C$, 'adjustListeningChildrenOnParent$J$I',  function (mask, num) {
});

Clazz.newMeth(C$, 'adjustDecendantsOnParent$I',  function (num) {
});

Clazz.newMeth(C$, 'toFront$',  function () {
this.toFront_NoClientCode$();
});

Clazz.newMeth(C$, 'toFront_NoClientCode$',  function () {
if (this.visible) {
var peer=this.peer;
if (peer != null ) {
peer.toFront$();
}if (this.isModalBlocked$()) {
this.modalBlocker.toFront_NoClientCode$();
}for (var i=0; i < this.ownedWindowList.size$(); i++) {
if (this.ownedWindowList.get$I(i).isVisible$()) this.ownedWindowList.get$I(i).toFront$();
}
}});

Clazz.newMeth(C$, 'toBack$',  function () {
this.toBack_NoClientCode$();
});

Clazz.newMeth(C$, 'toBack_NoClientCode$',  function () {
if (this.isAlwaysOnTop$()) {
try {
this.setAlwaysOnTop$Z(false);
} catch (e) {
if (Clazz.exceptionOf(e,"SecurityException")){
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'getToolkit$',  function () {
return $I$(7).getDefaultToolkit$();
});

Clazz.newMeth(C$, 'getWarningString$',  function () {
return this.warningString;
});

Clazz.newMeth(C$, 'getLocale$',  function () {
if (this.locale == null ) {
return $I$(9).getDefault$();
}return this.locale;
});

Clazz.newMeth(C$, 'setCursor$java_awt_Cursor',  function (cursor) {
if (cursor == null ) {
cursor=$I$(3).getPredefinedCursor$I(0);
}C$.superclazz.prototype.setCursor$java_awt_Cursor.apply(this, [cursor]);
});

Clazz.newMeth(C$, 'getOwner$',  function () {
return this.getOwner_NoClientCode$();
});

Clazz.newMeth(C$, 'getOwner_NoClientCode$',  function () {
return this.parent;
});

Clazz.newMeth(C$, 'getOwnedWindows$',  function () {
return this.getOwnedWindows_NoClientCode$();
});

Clazz.newMeth(C$, 'getOwnedWindows_NoClientCode$',  function () {
var realCopy;
{
var fullSize=this.ownedWindowList.size$();
var realSize=0;
var fullCopy=Clazz.array(C$, [fullSize]);
for (var i=0; i < fullSize; i++) {
fullCopy[realSize]=this.ownedWindowList.elementAt$I(i);
if (fullCopy[realSize] != null ) {
++realSize;
}}
if (fullSize != realSize) {
realCopy=$I$(10).copyOf$OA$I(fullCopy, realSize);
} else {
realCopy=fullCopy;
}}return realCopy;
});

Clazz.newMeth(C$, 'isModalBlocked$',  function () {
return this.modalBlocker != null ;
});

Clazz.newMeth(C$, 'setModalBlocked$java_awt_JSDialog$Z$Z',  function (blocker, blocked, peerCall) {
this.modalBlocker=blocked ? blocker : null;
if (peerCall) {
var peer=this.peer;
if (peer != null ) {
peer.setModalBlocked$java_awt_JSDialog$Z(blocker, blocked);
}}});

Clazz.newMeth(C$, 'setModalBlocked$java_awt_Dialog$Z$Z',  function (blocker, blocked, peerCall) {
this.setModalBlocked$java_awt_JSDialog$Z$Z(blocker, blocked, peerCall);
});

Clazz.newMeth(C$, 'getModalBlocker$',  function () {
return this.modalBlocker;
});

Clazz.newMeth(C$, 'getAllWindows$',  function () {
var v=Clazz.new_($I$(6,1));
v.addAll$java_util_Collection($I$(11).getAppletViewer$().allWindows);
return v;
}, 1);

Clazz.newMeth(C$, 'getAllUnblockedWindows$',  function () {
var allWindows=$I$(11).getAppletViewer$().allWindows;
var unblocked=Clazz.new_($I$(6,1));
for (var i=0; i < allWindows.size$(); i++) {
var w=allWindows.get$I(i);
if (!w.isModalBlocked$()) {
unblocked.add$O(w);
}}
return unblocked;
}, 1);

Clazz.newMeth(C$, 'getWindows$sun_awt_AppContext',  function (appContext) {
{
var realCopy;
var windowList=appContext.get$O(Clazz.getClass(C$));
if (windowList != null ) {
var fullSize=windowList.size$();
var realSize=0;
var fullCopy=Clazz.array(C$, [fullSize]);
for (var i=0; i < fullSize; i++) {
var w=windowList.get$I(i);
if (w != null ) {
fullCopy[realSize++]=w;
}}
if (fullSize != realSize) {
realCopy=$I$(10).copyOf$OA$I(fullCopy, realSize);
} else {
realCopy=fullCopy;
}} else {
realCopy=Clazz.array(C$, [0]);
}return realCopy;
}}, 1);

Clazz.newMeth(C$, 'getWindows$',  function () {
return C$.getWindows$sun_awt_AppContext($I$(12).getAppContext$());
}, 1);

Clazz.newMeth(C$, 'getOwnerlessWindows$',  function () {
var allWindows=C$.getWindows$();
var ownerlessCount=0;
for (var w, $w = 0, $$w = allWindows; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (w.getOwner$() == null ) {
++ownerlessCount;
}}
var ownerless=Clazz.array(C$, [ownerlessCount]);
var c=0;
for (var w, $w = 0, $$w = allWindows; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (w.getOwner$() == null ) {
ownerless[c++]=w;
}}
return ownerless;
}, 1);

Clazz.newMeth(C$, 'getDocumentRoot$',  function () {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
var w=this;
while (w.getOwner$() != null ){
w=w.getOwner$();
}
return w;
}});

Clazz.newMeth(C$, 'setModalExclusionType$java_awt_Dialog_ModalExclusionType',  function (exclusionType) {
var type=exclusionType;
if (type == null ) {
type=$I$(5).NO_EXCLUDE;
} else if (!$I$(7).getDefaultToolkit$().isModalExclusionTypeSupported$java_awt_Dialog_ModalExclusionType(exclusionType)) {
type=$I$(5).NO_EXCLUDE;
}var n=type.ordinal$();
if (this.modalExclusionType.ordinal$() == n) {
return;
}switch (n) {
case 0:
this.modalExclusionType=$I$(5).NO_EXCLUDE;
break;
case 1:
this.modalExclusionType=$I$(5).APPLICATION_EXCLUDE;
break;
case 2:
this.modalExclusionType=$I$(5).TOOLKIT_EXCLUDE;
break;
}
});

Clazz.newMeth(C$, 'getModalExclusionType$',  function () {
if (this.modalExclusionType === $I$(5).APPLICATION_EXCLUDE ) return $I$(13).APPLICATION_EXCLUDE;
if (this.modalExclusionType === $I$(5).NO_EXCLUDE ) return $I$(13).NO_EXCLUDE;
if (this.modalExclusionType === $I$(5).TOOLKIT_EXCLUDE ) return $I$(13).TOOLKIT_EXCLUDE;
return null;
});

Clazz.newMeth(C$, 'isModalExcluded$java_awt_Dialog_ModalExclusionType',  function (exclusionType) {
if ((this.modalExclusionType != null ) && this.modalExclusionType.ordinal$() >= exclusionType.ordinal$() ) {
return true;
}var owner=this.getOwner_NoClientCode$();
return (owner != null ) && owner.isModalExcluded$java_awt_Dialog_ModalExclusionType(exclusionType) ;
});

Clazz.newMeth(C$, 'addWindowListener$java_awt_event_WindowListener',  function (l) {
if (l == null ) {
return;
}this.newEventsOnly=true;
this.windowListener=$I$(14).add$java_awt_event_WindowListener$java_awt_event_WindowListener(this.windowListener, l);
});

Clazz.newMeth(C$, 'addWindowStateListener$java_awt_event_WindowStateListener',  function (l) {
if (l == null ) {
return;
}this.windowStateListener=$I$(14).add$java_awt_event_WindowStateListener$java_awt_event_WindowStateListener(this.windowStateListener, l);
this.newEventsOnly=true;
});

Clazz.newMeth(C$, 'addWindowFocusListener$java_awt_event_WindowFocusListener',  function (l) {
if (l == null ) {
return;
}this.windowFocusListener=$I$(14).add$java_awt_event_WindowFocusListener$java_awt_event_WindowFocusListener(this.windowFocusListener, l);
this.newEventsOnly=true;
});

Clazz.newMeth(C$, 'removeWindowListener$java_awt_event_WindowListener',  function (l) {
if (l == null ) {
return;
}this.windowListener=$I$(14).remove$java_awt_event_WindowListener$java_awt_event_WindowListener(this.windowListener, l);
});

Clazz.newMeth(C$, 'removeWindowStateListener$java_awt_event_WindowStateListener',  function (l) {
if (l == null ) {
return;
}this.windowStateListener=$I$(14).remove$java_awt_event_WindowStateListener$java_awt_event_WindowStateListener(this.windowStateListener, l);
});

Clazz.newMeth(C$, 'removeWindowFocusListener$java_awt_event_WindowFocusListener',  function (l) {
if (l == null ) {
return;
}this.windowFocusListener=$I$(14).remove$java_awt_event_WindowFocusListener$java_awt_event_WindowFocusListener(this.windowFocusListener, l);
});

Clazz.newMeth(C$, 'getWindowListeners$',  function () {
return (this.getListeners$Class(Clazz.getClass($I$(15),['windowActivated$java_awt_event_WindowEvent','windowClosed$java_awt_event_WindowEvent','windowClosing$java_awt_event_WindowEvent','windowDeactivated$java_awt_event_WindowEvent','windowDeiconified$java_awt_event_WindowEvent','windowIconified$java_awt_event_WindowEvent','windowOpened$java_awt_event_WindowEvent'])));
});

Clazz.newMeth(C$, 'getWindowFocusListeners$',  function () {
return (this.getListeners$Class(Clazz.getClass($I$(16),['windowGainedFocus$java_awt_event_WindowEvent','windowLostFocus$java_awt_event_WindowEvent'])));
});

Clazz.newMeth(C$, 'getWindowStateListeners$',  function () {
return (this.getListeners$Class(Clazz.getClass($I$(17),['windowStateChanged$java_awt_event_WindowEvent'])));
});

Clazz.newMeth(C$, 'getListeners$Class',  function (listenerType) {
var l=null;
if (listenerType === Clazz.getClass($I$(16),['windowGainedFocus$java_awt_event_WindowEvent','windowLostFocus$java_awt_event_WindowEvent']) ) {
l=this.windowFocusListener;
} else if (listenerType === Clazz.getClass($I$(17),['windowStateChanged$java_awt_event_WindowEvent']) ) {
l=this.windowStateListener;
} else if (listenerType === Clazz.getClass($I$(15),['windowActivated$java_awt_event_WindowEvent','windowClosed$java_awt_event_WindowEvent','windowClosing$java_awt_event_WindowEvent','windowDeactivated$java_awt_event_WindowEvent','windowDeiconified$java_awt_event_WindowEvent','windowIconified$java_awt_event_WindowEvent','windowOpened$java_awt_event_WindowEvent']) ) {
l=this.windowListener;
} else {
return C$.superclazz.prototype.getListeners$Class.apply(this, [listenerType]);
}return $I$(14).getListeners$java_util_EventListener$Class(l, listenerType);
});

Clazz.newMeth(C$, 'eventEnabled$java_awt_AWTEvent',  function (e) {
switch (e.id) {
case 200:
case 201:
case 202:
case 203:
case 204:
case 205:
case 206:
if (Long.$ne((Long.$and(this.eventMask,64)),0 ) || this.windowListener != null  ) {
return true;
}return false;
case 207:
case 208:
if (Long.$ne((Long.$and(this.eventMask,524288)),0 ) || this.windowFocusListener != null  ) {
return true;
}return false;
case 209:
if (Long.$ne((Long.$and(this.eventMask,262144)),0 ) || this.windowStateListener != null  ) {
return true;
}return false;
default:
break;
}
return C$.superclazz.prototype.eventEnabled$java_awt_AWTEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'processEvent$java_awt_AWTEvent',  function (e) {
if (Clazz.instanceOf(e, "java.awt.event.WindowEvent")) {
switch (e.getID$()) {
case 200:
case 201:
case 202:
case 203:
case 204:
case 205:
case 206:
this.processWindowEvent$java_awt_event_WindowEvent(e);
break;
case 207:
case 208:
this.processWindowFocusEvent$java_awt_event_WindowEvent(e);
break;
case 209:
this.processWindowStateEvent$java_awt_event_WindowEvent(e);
default:
break;
}
return;
}this.processEventCont$java_awt_AWTEvent(e);
});

Clazz.newMeth(C$, 'processWindowEvent$java_awt_event_WindowEvent',  function (e) {
var listener=this.windowListener;
if (listener != null ) {
switch (e.getID$()) {
case 200:
listener.windowOpened$java_awt_event_WindowEvent(e);
break;
case 201:
listener.windowClosing$java_awt_event_WindowEvent(e);
break;
case 202:
listener.windowClosed$java_awt_event_WindowEvent(e);
break;
case 203:
listener.windowIconified$java_awt_event_WindowEvent(e);
break;
case 204:
listener.windowDeiconified$java_awt_event_WindowEvent(e);
break;
case 205:
listener.windowActivated$java_awt_event_WindowEvent(e);
break;
case 206:
listener.windowDeactivated$java_awt_event_WindowEvent(e);
break;
default:
break;
}
}});

Clazz.newMeth(C$, 'processWindowFocusEvent$java_awt_event_WindowEvent',  function (e) {
var listener=this.windowFocusListener;
if (listener != null ) {
switch (e.getID$()) {
case 207:
listener.windowGainedFocus$java_awt_event_WindowEvent(e);
break;
case 208:
listener.windowLostFocus$java_awt_event_WindowEvent(e);
break;
default:
break;
}
}});

Clazz.newMeth(C$, 'processWindowStateEvent$java_awt_event_WindowEvent',  function (e) {
var listener=this.windowStateListener;
if (listener != null ) {
switch (e.getID$()) {
case 209:
listener.windowStateChanged$java_awt_event_WindowEvent(e);
break;
default:
break;
}
}});

Clazz.newMeth(C$, 'preProcessKeyEvent$java_awt_event_KeyEvent',  function (e) {
});

Clazz.newMeth(C$, 'postProcessKeyEvent$java_awt_event_KeyEvent',  function (e) {
});

Clazz.newMeth(C$, 'setAlwaysOnTop$Z',  function (alwaysOnTop) {
var oldAlwaysOnTop;
{
oldAlwaysOnTop=this.alwaysOnTop;
this.alwaysOnTop=alwaysOnTop;
}if (oldAlwaysOnTop != alwaysOnTop ) {
if (this.isAlwaysOnTopSupported$()) {
}this.firePropertyChange$S$Z$Z("alwaysOnTop", oldAlwaysOnTop, alwaysOnTop);
}});

Clazz.newMeth(C$, 'isAlwaysOnTopSupported$',  function () {
return $I$(7).getDefaultToolkit$().isAlwaysOnTopSupported$();
});

Clazz.newMeth(C$, 'isAlwaysOnTop$',  function () {
return this.alwaysOnTop;
});

Clazz.newMeth(C$, 'getFocusOwner$',  function () {
return (this.isFocused$()) ? $I$(18).getCurrentKeyboardFocusManager$().getFocusOwner$() : null;
});

Clazz.newMeth(C$, 'getMostRecentFocusOwner$',  function () {
if (this.isFocused$()) {
return this.getFocusOwner$();
} else {
var mostRecent=$I$(18).getMostRecentFocusOwner$java_awt_Window(this);
if (mostRecent != null ) {
return mostRecent;
} else {
return (this.isFocusableWindow$()) ? this.getFocusTraversalPolicy$().getInitialComponent$java_awt_Window(this) : null;
}}});

Clazz.newMeth(C$, 'isActive$',  function () {
return ($I$(18).getCurrentKeyboardFocusManager$().getActiveWindow$() === this );
});

Clazz.newMeth(C$, 'isFocused$',  function () {
return ($I$(18).getCurrentKeyboardFocusManager$().getGlobalFocusedWindow$() === this );
});

Clazz.newMeth(C$, 'getFocusTraversalKeys$I',  function (id) {
if (id < 0 || id >= 4 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid focus traversal key identifier"]);
}var keystrokes=(this.focusTraversalKeys != null ) ? this.focusTraversalKeys[id] : null;
if (keystrokes != null ) {
return keystrokes;
} else {
return $I$(18).getCurrentKeyboardFocusManager$().getDefaultFocusTraversalKeys$I(id);
}});

Clazz.newMeth(C$, 'setFocusCycleRoot$Z',  function (focusCycleRoot) {
});

Clazz.newMeth(C$, 'isFocusCycleRoot$',  function () {
return true;
});

Clazz.newMeth(C$, 'getFocusCycleRootAncestor$',  function () {
return null;
});

Clazz.newMeth(C$, 'isFocusableWindow$',  function () {
if (!this.getFocusableWindowState$()) {
return false;
}if (Clazz.instanceOf(this, "java.awt.JSFrame") || Clazz.instanceOf(this, "java.awt.JSDialog") ) {
return true;
}if (this.getFocusTraversalPolicy$().getDefaultComponent$java_awt_Container(this) == null ) {
return false;
}for (var owner=this.getOwner$(); owner != null ; owner=owner.getOwner$()) {
if (Clazz.instanceOf(owner, "java.awt.JSFrame") || Clazz.instanceOf(owner, "java.awt.JSDialog") ) {
return owner.isShowing$();
}}
return false;
});

Clazz.newMeth(C$, 'getFocusableWindowState$',  function () {
return this.focusableWindowState;
});

Clazz.newMeth(C$, 'setFocusableWindowState$Z',  function (focusableWindowState) {
var oldFocusableWindowState;
{
oldFocusableWindowState=this.focusableWindowState;
this.focusableWindowState=focusableWindowState;
}this.firePropertyChange$S$Z$Z("focusableWindowState", oldFocusableWindowState, focusableWindowState);
if (oldFocusableWindowState && !focusableWindowState && this.isFocused$()  ) {
for (var owner=this.getOwner$(); owner != null ; owner=owner.getOwner$()) {
}
}});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
C$.superclazz.prototype.addPropertyChangeListener$java_beans_PropertyChangeListener.apply(this, [listener]);
});

Clazz.newMeth(C$, 'addPropertyChangeListener$S$java_beans_PropertyChangeListener',  function (propertyName, listener) {
C$.superclazz.prototype.addPropertyChangeListener$S$java_beans_PropertyChangeListener.apply(this, [propertyName, listener]);
});

Clazz.newMeth(C$, 'dispatchEventImpl$java_awt_AWTEvent',  function (e) {
if (e.getID$() == 101) {
this.invalidate$();
this.validate$();
}C$.superclazz.prototype.dispatchEventImpl$java_awt_AWTEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'postEvent$java_awt_Event',  function (e) {
if (this.handleEvent$java_awt_Event(e)) {
e.consume$();
return true;
}return false;
});

Clazz.newMeth(C$, 'isShowing$',  function () {
return this.visible;
});

Clazz.newMeth(C$, 'applyResourceBundle$java_util_ResourceBundle',  function (rb) {
this.applyComponentOrientation$java_awt_ComponentOrientation($I$(19).getOrientation$java_util_ResourceBundle(rb));
});

Clazz.newMeth(C$, 'applyResourceBundle$S',  function (rbName) {
this.applyResourceBundle$java_util_ResourceBundle($I$(20).getBundle$S(rbName));
});

Clazz.newMeth(C$, 'addOwnedWindow$java_awt_Window',  function (weakWindow) {
if (weakWindow != null ) {
weakWindow.秘appletViewer=this.秘appletViewer;
{
if (!this.ownedWindowList.contains$O(weakWindow)) {
this.ownedWindowList.addElement$O(weakWindow);
}}}});

Clazz.newMeth(C$, 'removeOwnedWindow$java_awt_Window',  function (weakWindow) {
if (weakWindow != null ) {
this.ownedWindowList.removeElement$O(weakWindow);
}});

Clazz.newMeth(C$, 'connectOwnedWindow$java_awt_Window',  function (child) {
child.parent=this;
this.addOwnedWindow$java_awt_Window(child);
});

Clazz.newMeth(C$, 'addToWindowList',  function () {
var windowList=this.appContext.get$O(Clazz.getClass(C$));
if (windowList == null ) {
windowList=Clazz.new_($I$(2,1));
this.appContext.put$O$O(Clazz.getClass(C$), windowList);
}windowList.add$O(this);
}, p$1);

Clazz.newMeth(C$, 'getGraphicsConfiguration$',  function () {
if (this.graphicsConfig == null ) this.graphicsConfig=$I$(11).getGraphicsConfiguration$();
return this.graphicsConfig;
});

Clazz.newMeth(C$, 'resetGC$',  function () {
});

Clazz.newMeth(C$, 'setLocationRelativeTo$java_awt_Component',  function (c) {
var root=null;
if (c != null ) {
if (c.isWindowOrJSApplet$()) {
root=c;
} else {
var parent;
for (parent=c.getParent$(); parent != null ; parent=parent.getParent$()) {
if (parent.isWindowOrJSApplet$()) {
root=parent;
break;
}}
}}var invokerScreenLocation;
if (c != null  && !c.isShowing$()  || root == null   || !root.isShowing$()  || (invokerScreenLocation=c.getLocationOnScreen$()) == null  ) {
var paneSize=this.getSize$();
var centerPoint=$I$(21).getLocalGraphicsEnvironment$().getCenterPoint$();
this.setLocation$I$I(centerPoint.x - (paneSize.width/2|0), centerPoint.y - (paneSize.height/2|0));
} else {
var invokerSize=c.getSize$();
var windowBounds=this.getBounds$();
var dx=invokerScreenLocation.x + ((invokerSize.width - windowBounds.width) >> 1);
var dy=invokerScreenLocation.y + ((invokerSize.height - windowBounds.height) >> 1);
var ss=root.getGraphicsConfiguration$().getBounds$();
if (dy + windowBounds.height > ss.y + ss.height) {
dy=ss.y + ss.height - windowBounds.height;
if (invokerScreenLocation.x - ss.x + (invokerSize.width/2|0) < (ss.width/2|0)) {
dx=invokerScreenLocation.x + invokerSize.width;
} else {
dx=invokerScreenLocation.x - windowBounds.width;
}}if (dx + windowBounds.width > ss.x + ss.width) {
dx=ss.x + ss.width - windowBounds.width;
}if (dx < ss.x) dx=ss.x;
if (dy < ss.y) dy=ss.y;
this.setLocation$I$I(dx, dy);
}});

Clazz.newMeth(C$, 'deliverMouseWheelToAncestor$java_awt_event_MouseWheelEvent',  function (e) {
});

Clazz.newMeth(C$, 'dispatchMouseWheelToAncestor$java_awt_event_MouseWheelEvent',  function (e) {
return false;
});

Clazz.newMeth(C$, 'getTemporaryLostComponent$',  function () {
return this.temporaryLostComponent;
});

Clazz.newMeth(C$, 'setTemporaryLostComponent$java_awt_Component',  function (component) {
var previousComp=this.temporaryLostComponent;
if (component == null  || component.canBeFocusOwner$() ) {
this.temporaryLostComponent=component;
} else {
this.temporaryLostComponent=null;
}return previousComp;
});

Clazz.newMeth(C$, 'canContainFocusOwner$java_awt_Component',  function (focusOwnerCandidate) {
return C$.superclazz.prototype.canContainFocusOwner$java_awt_Component.apply(this, [focusOwnerCandidate]) && this.isFocusableWindow$() ;
});

Clazz.newMeth(C$, 'setLocationByPlatform$Z',  function (locationByPlatform) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
if (locationByPlatform && this.isShowing$() ) {
throw Clazz.new_(Clazz.load('java.awt.IllegalComponentStateException').c$$S,["The window is showing on screen."]);
}this.locationByPlatform=locationByPlatform;
}});

Clazz.newMeth(C$, 'isLocationByPlatform$',  function () {
return this.locationByPlatform;
});

Clazz.newMeth(C$, 'setBounds$I$I$I$I',  function (x, y, width, height) {
C$.superclazz.prototype.setBounds$I$I$I$I.apply(this, [x, y, width, height]);
});

Clazz.newMeth(C$, 'setBounds$java_awt_Rectangle',  function (r) {
this.setBounds$I$I$I$I(r.x, r.y, r.width, r.height);
});

Clazz.newMeth(C$, 'isRecursivelyVisible$',  function () {
return this.visible;
});

Clazz.newMeth(C$, 'getOpacity$',  function () {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
return this.opacity;
}});

Clazz.newMeth(C$, 'setOpacity$F',  function (opacity) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
if (opacity < 0.0  || opacity > 1.0  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The value of opacity should be in the range [0.0f .. 1.0f]."]);
}this.opacity=opacity;
}});

Clazz.newMeth(C$, 'getShape$',  function () {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
return this.shape;
}});

Clazz.newMeth(C$, 'setShape$java_awt_Shape',  function (shape) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
this.shape=shape;
}});

Clazz.newMeth(C$, 'isOpaque$',  function () {
return this.opaque;
});

Clazz.newMeth(C$, 'setOpaque$Z',  function (opaque) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
C$.setLayersOpaque$java_awt_Component$Z(this, opaque);
this.opaque=opaque;
var peer=this.getPeer$();
if (peer != null ) {
peer.setOpaque$Z(opaque);
}}});

Clazz.newMeth(C$, 'setLayersOpaque$java_awt_Component$Z',  function (component, isOpaque) {
if (Clazz.instanceOf(component, "javax.swing.RootPaneContainer")) {
var rpc=component;
var root=rpc.getRootPane$();
var lp=root.getLayeredPane$();
var c=root.getContentPane$();
var content=(Clazz.instanceOf(c, "javax.swing.JComponent") ? c : null);
lp.setOpaque$Z(isOpaque);
root.setOpaque$Z(isOpaque);
root.setDoubleBuffered$Z(isOpaque);
if (content != null ) {
content.setOpaque$Z(isOpaque);
content.setDoubleBuffered$Z(isOpaque);
var numChildren=content.getComponentCount$();
if (numChildren > 0) {
var child=content.getComponent$I(0);
if (Clazz.instanceOf(child, "javax.swing.RootPaneContainer")) {
C$.setLayersOpaque$java_awt_Component$Z(child, isOpaque);
}}}}var bg=component.getBackground$();
var hasTransparentBg=C$.TRANSPARENT_BACKGROUND_COLOR.equals$O(bg);
var container=null;
if (Clazz.instanceOf(component, "java.awt.Container")) {
container=component;
}if (isOpaque) {
if (hasTransparentBg) {
var newColor=null;
if (container != null  && container.preserveBackgroundColor != null  ) {
newColor=container.preserveBackgroundColor;
} else {
newColor=Clazz.new_($I$(1,1).c$$I$I$I,[255, 255, 255]);
}component.setBackground$java_awt_Color(newColor);
}} else {
if (!hasTransparentBg && container != null  ) {
container.preserveBackgroundColor=bg;
}component.setBackground$java_awt_Color(C$.TRANSPARENT_BACKGROUND_COLOR);
}}, 1);

Clazz.newMeth(C$, 'getContainer$',  function () {
return null;
});

Clazz.newMeth(C$, 'mixOnReshaping$',  function () {
});

Clazz.newMeth(C$, 'getLocationOnWindow$',  function () {
return Clazz.new_($I$(22,1).c$$I$I,[0, 0]);
});

Clazz.newMeth(C$, 'isValidateRoot$',  function () {
return true;
});

Clazz.newMeth(C$, 'revalidate$',  function () {
if (this.ui != null ) (this.ui).setTainted$();
this.invalidate$();
this.validate$();
});

C$.$static$=function(){C$.$static$=0;
C$.systemSyncLWRequests=false;
C$.nameCounter=0;
C$.TRANSPARENT_BACKGROUND_COLOR=Clazz.new_($I$(1,1).c$$I$I$I$I,[0, 0, 0, 0]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:07 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
