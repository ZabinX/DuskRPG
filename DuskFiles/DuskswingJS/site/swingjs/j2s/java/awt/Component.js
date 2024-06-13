(function(){var P$=Clazz.newPackage("java.awt"),p$1={},I$=[[0,'java.util.HashMap','java.awt.ComponentOrientation','java.util.Set','sun.awt.AppContext','swingjs.JSToolkit','java.awt.Toolkit','java.awt.Point','java.awt.KeyboardFocusManager','java.awt.event.ComponentEvent','java.util.Locale','java.awt.Dimension','java.awt.Rectangle',['java.awt.Component','.BaselineResizeBehavior'],'java.awt.Cursor','java.awt.event.PaintEvent','java.awt.EventQueue','java.awt.event.MouseWheelEvent','java.awt.AWTEventMulticaster','java.awt.event.ComponentListener','java.awt.event.FocusListener','java.awt.event.HierarchyListener','java.awt.event.HierarchyEvent','java.awt.event.HierarchyBoundsListener','java.awt.event.KeyListener','java.awt.event.MouseListener','java.awt.event.MouseMotionListener','java.awt.event.MouseWheelListener','java.awt.event.InputMethodListener','java.beans.PropertyChangeListener','java.util.Collections','java.util.HashSet',['sun.awt.CausedFocusEvent','.Cause'],'javax.swing.JComponent',['java.awt.Component','.DummyRequestFocusController'],'java.beans.PropertyChangeSupport','sun.awt.SunToolkit']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Component", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.awt.image.ImageObserver');
C$.$classes$=[['AWTTreeLock',8],['BaselineResizeBehavior',25],['DummyRequestFocusController',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.visible=true;
this.enabled=true;
this.valid=false;
this.nameExplicitlySet=false;
this.focusable=true;
this.isFocusTraversableOverridden=0;
this.focusTraversalKeysEnabled=true;
this.componentOrientation=$I$(2).UNKNOWN;
this.newEventsOnly=false;
this.windowClosingException=null;
this.eventMask=4096;
this.changeSupportLock= Clazz.new_();
this.isPacked=false;
this.boundsOp=3;
this.coalescingEnabled=p$1.checkCoalescing.apply(this, []);
this.秘j2sInvalidateOnAdd=true;
this.autoFocusTransferOnDisposal=true;
},1);

C$.$fields$=[['Z',['visible','enabled','valid','nameExplicitlySet','focusable','秘isFocusableSet','focusTraversalKeysEnabled','minSizeSet','prefSizeSet','maxSizeSet','newEventsOnly','isPacked','backgroundEraseDisabled','coalescingEnabled','秘j2sInvalidateOnAdd','autoFocusTransferOnDisposal'],'I',['x','y','width','height','isFocusTraversableOverridden','boundsOp'],'J',['eventMask'],'S',['name'],'O',['peer','java.awt.peer.ComponentPeer','parent','java.awt.Container','appContext','sun.awt.AppContext','foreground','java.awt.Color','+background','font','java.awt.Font','+peerFont','cursor','java.awt.Cursor','locale','java.util.Locale','popups','java.util.Vector','focusTraversalKeys','java.util.Set[]','minSize','java.awt.Dimension','+prefSize','+maxSize','componentOrientation','java.awt.ComponentOrientation','componentListener','java.awt.event.ComponentListener','focusListener','java.awt.event.FocusListener','hierarchyListener','java.awt.event.HierarchyListener','hierarchyBoundsListener','java.awt.event.HierarchyBoundsListener','keyListener','java.awt.event.KeyListener','mouseListener','java.awt.event.MouseListener','mouseMotionListener','java.awt.event.MouseMotionListener','mouseWheelListener','java.awt.event.MouseWheelListener','inputMethodListener','java.awt.event.InputMethodListener','windowClosingException','RuntimeException','changeSupport','java.beans.PropertyChangeSupport','changeSupportLock','java.lang.Object','dropTarget','java.awt.dnd.DropTarget','graphicsConfig','java.awt.GraphicsConfiguration','eventCache','java.awt.EventQueueItem[]']]
,['Z',['isInc'],'I',['incRate'],'O',['focusTraversalKeyPropertyNames','String[]','coalesceMap','java.util.Map','requestFocusController','sun.awt.RequestFocusController']]]

Clazz.newMeth(C$, 'getAppContext$',  function () {
return this.appContext;
});

Clazz.newMeth(C$, 'getChangeSupportLock',  function () {
return this.changeSupportLock;
}, p$1);

Clazz.newMeth(C$, 'getBoundsOp$',  function () {
return this.boundsOp;
});

Clazz.newMeth(C$, 'setBoundsOp$I',  function (op) {
if (op == 5) {
this.boundsOp=3;
} else if (this.boundsOp == 3) {
this.boundsOp=op;
}});

Clazz.newMeth(C$, 'setBackgroundEraseDisabled$Z',  function (disabled) {
this.backgroundEraseDisabled=disabled;
});

Clazz.newMeth(C$, 'getBackgroundEraseDisabled$',  function () {
return this.backgroundEraseDisabled;
});

Clazz.newMeth(C$, 'requestFocusInWindow$java_awt_Component$sun_awt_CausedFocusEvent_Cause',  function (comp, cause) {
return comp.requestFocusInWindow$sun_awt_CausedFocusEvent_Cause(cause);
});

Clazz.newMeth(C$, 'requestFocus$java_awt_Component$sun_awt_CausedFocusEvent_Cause',  function (comp, cause) {
comp.requestFocus$sun_awt_CausedFocusEvent_Cause(cause);
});

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.setAppContext$();
}, 1);

Clazz.newMeth(C$, 'initializeFocusTraversalKeys$',  function () {
this.focusTraversalKeys=Clazz.array($I$(3), [3]);
});

Clazz.newMeth(C$, 'setAppContext$',  function () {
this.appContext=$I$(4).getAppContext$();
});

Clazz.newMeth(C$, 'constructComponentName$',  function () {
return null;
});

Clazz.newMeth(C$, 'getName$',  function () {
if (this.name == null  && !this.nameExplicitlySet ) {
{
if (this.name == null  && !this.nameExplicitlySet ) this.name=this.constructComponentName$();
}}return this.name;
});

Clazz.newMeth(C$, 'setName$S',  function (name) {
var oldName;
{
oldName=this.name;
this.name=name;
this.nameExplicitlySet=true;
}this.firePropertyChange$S$O$O("name", oldName, name);
});

Clazz.newMeth(C$, 'getParent$',  function () {
return this.getParent_NoClientCode$();
});

Clazz.newMeth(C$, 'getParent_NoClientCode$',  function () {
return this.parent;
});

Clazz.newMeth(C$, 'getContainer$',  function () {
return this.getParent$();
});

Clazz.newMeth(C$, 'getPeer$',  function () {
return (this.isDisplayable$() ? this.peer : null);
});

Clazz.newMeth(C$, 'setDropTarget$java_awt_dnd_DropTarget',  function (dt) {
if (dt === this.dropTarget  || (this.dropTarget != null  && this.dropTarget.equals$O(dt) ) ) return;
var old;
if ((old=this.dropTarget) != null ) {
if (this.peer != null ) this.dropTarget.removeNotify$java_awt_peer_ComponentPeer(this.peer);
var t=this.dropTarget;
this.dropTarget=null;
try {
t.setComponent$java_awt_Component(null);
} catch (iae) {
if (Clazz.exceptionOf(iae,"IllegalArgumentException")){
} else {
throw iae;
}
}
}if ((this.dropTarget=dt) != null ) {
try {
this.dropTarget.setComponent$java_awt_Component(this);
if (this.peer != null ) this.dropTarget.addNotify$java_awt_peer_ComponentPeer(this.peer);
} catch (iae) {
if (Clazz.exceptionOf(iae,"IllegalArgumentException")){
if (old != null ) {
try {
old.setComponent$java_awt_Component(this);
if (this.peer != null ) this.dropTarget.addNotify$java_awt_peer_ComponentPeer(this.peer);
} catch (iae1) {
if (Clazz.exceptionOf(iae1,"IllegalArgumentException")){
} else {
throw iae1;
}
}
}} else {
throw iae;
}
}
}});

Clazz.newMeth(C$, 'getDropTarget$',  function () {
return this.dropTarget;
});

Clazz.newMeth(C$, 'getGraphicsConfiguration$',  function () {
return $I$(5).getGraphicsConfiguration$();
});

Clazz.newMeth(C$, 'resetGC$',  function () {
});

Clazz.newMeth(C$, 'getToolkit$',  function () {
return $I$(6).getDefaultToolkit$();
});

Clazz.newMeth(C$, 'isValid$',  function () {
return this.valid;
});

Clazz.newMeth(C$, 'isDisplayable$',  function () {
return true;
});

Clazz.newMeth(C$, 'isVisible$',  function () {
return this.isVisible_NoClientCode$();
});

Clazz.newMeth(C$, 'isVisible_NoClientCode$',  function () {
return this.visible;
});

Clazz.newMeth(C$, 'isRecursivelyVisible$',  function () {
return this.visible && (this.parent == null  || this.parent.isRecursivelyVisible$() ) ;
});

Clazz.newMeth(C$, 'pointRelativeToComponent$java_awt_Point',  function (absolute) {
var compCoords=this.getLocationOnScreen$();
return Clazz.new_($I$(7,1).c$$I$I,[absolute.x - compCoords.x, absolute.y - compCoords.y]);
});

Clazz.newMeth(C$, 'getMousePosition$',  function () {
return null;
});

Clazz.newMeth(C$, 'isSameOrAncestorOf$java_awt_Component$Z',  function (comp, allowChildren) {
return comp === this ;
});

Clazz.newMeth(C$, 'isShowing$',  function () {
if (this.visible) {
var parent=this.parent;
return (parent == null ) || parent.isShowing$() ;
}return false;
});

Clazz.newMeth(C$, 'isEnabled$',  function () {
return this.isEnabledImpl$();
});

Clazz.newMeth(C$, 'isEnabledImpl$',  function () {
return this.enabled;
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (b) {
this.enable$Z(b);
});

Clazz.newMeth(C$, 'enable$',  function () {
if (!this.enabled) {
this.enabled=true;
if (this.peer != null ) {
this.peer.setEnabled$Z(true);
if (this.visible) {
this.updateCursorImmediately$();
}}}});

Clazz.newMeth(C$, 'enable$Z',  function (b) {
if (b) {
this.enable$();
} else {
this.disable$();
}});

Clazz.newMeth(C$, 'disable$',  function () {
if (this.enabled) {
$I$(8).clearMostRecentFocusOwner$java_awt_Component(this);
this.enabled=false;
if (this.peer != null ) {
this.peer.setEnabled$Z(false);
if (this.visible) {
this.updateCursorImmediately$();
}}}});

Clazz.newMeth(C$, 'isDoubleBuffered$',  function () {
return false;
});

Clazz.newMeth(C$, 'enableInputMethods$Z',  function (enable) {
if (enable) {
if (Long.$ne((Long.$and(this.eventMask,4096)),0 )) return;
if (this.isFocusOwner$()) {
}(this.eventMask=Long.$or(this.eventMask,(4096)));
} else {
if (Long.$ne((Long.$and(this.eventMask,4096)),0 )) {
}(this.eventMask=Long.$and(this.eventMask,((Long.$not(4096)))));
}});

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
if (b) {
this.show$();
} else {
this.hide$();
}});

Clazz.newMeth(C$, 'show$Z',  function (b) {
this.setVisible$Z(b);
});

Clazz.newMeth(C$, 'show$',  function () {
if (!this.visible) {
this.visible=true;
this.updatePeerVisibility$Z(true);
if (this.componentListener != null  || Long.$ne((Long.$and(this.eventMask,1)),0 )  || $I$(6).enabledOnToolkit$J(1) ) {
var e=Clazz.new_($I$(9,1).c$$java_awt_Component$I,[this, 102]);
$I$(6).getEventQueue$().postEvent$java_awt_AWTEvent(e);
}}var parent=this.parent;
if (parent != null ) {
parent.invalidate$();
}});

Clazz.newMeth(C$, 'updatePeerVisibility$Z',  function (isVisible) {
this.updatePeerVisibilityOrig$Z(isVisible);
});

Clazz.newMeth(C$, 'updatePeerVisibilityOrig$Z',  function (isVisible) {
this.peer.setVisible$Z(isVisible);
this.createHierarchyEvents$I$java_awt_Component$java_awt_Container$J$Z(1400, this, this.parent, 4, $I$(6).enabledOnToolkit$J(32768));
if (Clazz.instanceOf(this.peer, "java.awt.peer.LightweightPeer")) {
(this).秘repaint$();
}this.updateCursorImmediately$();
});

Clazz.newMeth(C$, 'getOrCreatePeer$',  function () {
return this.peer;
});

Clazz.newMeth(C$, 'containsFocus$',  function () {
return this.isFocusOwner$();
});

Clazz.newMeth(C$, 'clearMostRecentFocusOwnerOnHide$',  function () {
$I$(8).clearMostRecentFocusOwner$java_awt_Component(this);
});

Clazz.newMeth(C$, 'clearCurrentFocusCycleRootOnHide$',  function () {
});

Clazz.newMeth(C$, 'hide$',  function () {
this.isPacked=false;
if (this.visible) {
this.clearCurrentFocusCycleRootOnHide$();
this.clearMostRecentFocusOwnerOnHide$();
this.visible=false;
this.mixOnHiding$Z(this.isLightweight$());
if (this.containsFocus$() && $I$(8).isAutoFocusTransferEnabled$() ) {
this.transferFocus$Z(true);
}this.updatePeerVisibility$Z(false);
if (this.componentListener != null  || Long.$ne((Long.$and(this.eventMask,1)),0 )  || $I$(6).enabledOnToolkit$J(1) ) {
var e=Clazz.new_($I$(9,1).c$$java_awt_Component$I,[this, 103]);
$I$(6).getEventQueue$().postEvent$java_awt_AWTEvent(e);
}}var parent=this.parent;
if (parent != null  && !(this).秘winOrApplet ) {
parent.invalidate$();
}});

Clazz.newMeth(C$, 'getForeground$',  function () {
return this.getForeground_NoClient$();
});

Clazz.newMeth(C$, 'getForeground_NoClient$',  function () {
var foreground=this.foreground;
if (foreground != null ) {
return foreground;
}var parent=this.parent;
return (parent != null ) ? parent.getForeground$() : null;
});

Clazz.newMeth(C$, 'setForeground$java_awt_Color',  function (c) {
var oldColor=this.foreground;
this.foreground=c;
if (this.peer != null ) {
c=this.getForeground$();
if (c != null ) {
this.peer.setForeground$java_awt_Color(c);
}}this.firePropertyChange$S$O$O("foreground", oldColor, c);
});

Clazz.newMeth(C$, 'isForegroundSet$',  function () {
return (this.foreground != null );
});

Clazz.newMeth(C$, 'getBackground$',  function () {
return this.getBackground_NoClient$();
});

Clazz.newMeth(C$, 'getBackground_NoClient$',  function () {
var background=this.background;
if (background != null ) {
return background;
}var parent=this.parent;
return (parent != null ) ? parent.getBackground$() : null;
});

Clazz.newMeth(C$, 'setBackground$java_awt_Color',  function (c) {
var oldColor=this.background;
this.background=c;
if (this.peer != null ) {
c=this.getBackground$();
if (c != null ) {
this.peer.setBackground$java_awt_Color(c);
}}this.firePropertyChange$S$O$O("background", oldColor, c);
});

Clazz.newMeth(C$, 'isBackgroundSet$',  function () {
return (this.background != null );
});

Clazz.newMeth(C$, 'getFont$',  function () {
return this.getFont_NoClientCode$();
});

Clazz.newMeth(C$, 'getFont_NoClientCode$',  function () {
var font=this.font;
if (font != null ) {
return font;
}var parent=this.parent;
if (parent != null ) return parent.getFont_NoClientCode$();
return null;
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (f) {
var oldFont;
var newFont;
oldFont=this.font;
newFont=this.font=f;
if (this.peer != null ) {
f=this.getFont$();
if (f != null ) {
this.peer.setFont$java_awt_Font(f);
this.peerFont=f;
}}this.firePropertyChange$S$O$O("font", oldFont, newFont);
if (f !== oldFont  && (oldFont == null  || !oldFont.equals$O(f) ) ) {
this.invalidateIfValid$();
}});

Clazz.newMeth(C$, 'isFontSet$',  function () {
return this.font != null ;
});

Clazz.newMeth(C$, 'getLocale$',  function () {
var locale=this.locale;
if (locale != null ) {
return locale;
}return $I$(10).ENGLISH;
});

Clazz.newMeth(C$, 'setLocale$java_util_Locale',  function (l) {
var oldValue=this.locale;
this.locale=l;
this.firePropertyChange$S$O$O("locale", oldValue, l);
this.invalidateIfValid$();
});

Clazz.newMeth(C$, 'getLocation$',  function () {
return this.location$();
});

Clazz.newMeth(C$, 'getLocationOnScreen$',  function () {
return this.getLocationOnScreen_NoTreeLock$();
});

Clazz.newMeth(C$, 'getLocationOnScreen_NoTreeLock$',  function () {
if (this.isShowing$()) {
if (this.isLightweight$()) {
var host=this.getNativeContainer$();
if (host.peer == null ) return null;
var pt=host.peer.getLocationOnScreen$();
for (var c=this; c !== host ; c=c.getParent$()) {
pt.x+=c.x;
pt.y+=c.y;
}
return pt;
} else {
if (this.getOrCreatePeer$() == null ) return null;
var pt=this.peer.getLocationOnScreen$();
return pt;
}} else {
throw Clazz.new_(Clazz.load('java.awt.IllegalComponentStateException').c$$S,["component must be showing on the screen to determine its location"]);
}});

Clazz.newMeth(C$, 'location$',  function () {
return p$1.location_NoClientCode.apply(this, []);
});

Clazz.newMeth(C$, 'location_NoClientCode',  function () {
return Clazz.new_($I$(7,1).c$$I$I,[this.x, this.y]);
}, p$1);

Clazz.newMeth(C$, 'setLocation$I$I',  function (x, y) {
this.setBoundsOp$I(1);
this.setBounds$I$I$I$I(x, y, this.width, this.height);
});

Clazz.newMeth(C$, 'move$I$I',  function (x, y) {
this.setLocation$I$I(x, y);
});

Clazz.newMeth(C$, 'setLocation$java_awt_Point',  function (p) {
this.setLocation$I$I(p.x, p.y);
});

Clazz.newMeth(C$, 'getSize$',  function () {
return this.size$();
});

Clazz.newMeth(C$, 'size$',  function () {
return Clazz.new_($I$(11,1).c$$I$I,[this.width, this.height]);
});

Clazz.newMeth(C$, 'setSize$I$I',  function (width, height) {
this.resize$I$I(width, height);
});

Clazz.newMeth(C$, 'resize$I$I',  function (width, height) {
this.setBoundsOp$I(2);
this.setBounds$I$I$I$I(this.x, this.y, width, height);
});

Clazz.newMeth(C$, 'setSize$java_awt_Dimension',  function (d) {
this.setSize$I$I(d.width, d.height);
});

Clazz.newMeth(C$, 'setBounds$I$I$I$I',  function (x, y, width, height) {
this.reshape$I$I$I$I(x, y, width, height);
});

Clazz.newMeth(C$, 'setBounds$java_awt_Rectangle',  function (r) {
this.setBounds$I$I$I$I(r.x, r.y, r.width, r.height);
});

Clazz.newMeth(C$, 'reshape$I$I$I$I',  function (x, y, width, height) {
this.秘reshape$I$I$I$I$Z(x, y, width, height, true);
});

Clazz.newMeth(C$, '秘reshape$I$I$I$I$Z',  function (x, y, width, height, needNotify) {
needNotify=!!(needNotify&((this.parent == null  || !this.parent.秘isCRP )));
try {
this.setBoundsOp$I(3);
width=Math.max(0, width);
height=Math.max(0, height);
var resized=(this.width != width) || (this.height != height) ;
var moved=(this.x != x) || (this.y != y) ;
if (!resized && !moved ) {
return;
}var oldX=this.x;
var oldY=this.y;
var oldWidth=this.width;
var oldHeight=this.height;
this.x=x;
this.y=y;
this.width=width;
this.height=height;
if (resized) {
this.isPacked=false;
}this.mixOnReshaping$();
if (this.getOrCreatePeer$() != null ) {
p$1.reshapeNativePeer$I$I$I$I$I.apply(this, [x, y, width, height, this.getBoundsOp$()]);
resized=(oldWidth != this.width) || (oldHeight != this.height) ;
moved=(oldX != this.x) || (oldY != this.y) ;
if (resized) {
this.invalidate$();
}if (this.parent != null ) {
this.parent.invalidateIfValid$();
}}if (needNotify) {
p$1.notifyNewBounds$Z$Z.apply(this, [resized, moved]);
}if (resized) p$1.repaintParentIfNeeded$I$I$I$I.apply(this, [oldX, oldY, oldWidth, oldHeight]);
} finally {
this.setBoundsOp$I(5);
}
});

Clazz.newMeth(C$, 'repaintParentIfNeeded$I$I$I$I',  function (oldX, oldY, oldWidth, oldHeight) {
(this).秘repaintParentIfNeeded$I$I$I$I(oldX, oldY, oldWidth, oldHeight);
}, p$1);

Clazz.newMeth(C$, 'reshapeNativePeer$I$I$I$I$I',  function (x, y, width, height, op) {
if (this.peer != null ) this.peer.setBounds$I$I$I$I$I(0, 0, width, height, op);
}, p$1);

Clazz.newMeth(C$, 'notifyNewBounds$Z$Z',  function (resized, moved) {
if (this.componentListener != null  || Long.$ne((Long.$and(this.eventMask,1)),0 )  || $I$(6).enabledOnToolkit$J(1) ) {
if (resized) {
var e=Clazz.new_($I$(9,1).c$$java_awt_Component$I,[this, 101]);
$I$(6).getEventQueue$().postEvent$java_awt_AWTEvent(e);
}if (moved) {
var e=Clazz.new_($I$(9,1).c$$java_awt_Component$I,[this, 100]);
$I$(6).getEventQueue$().postEvent$java_awt_AWTEvent(e);
}} else {
if (Clazz.instanceOf(this, "java.awt.Container") && (this).countComponents$() > 0 ) {
var enabledOnToolkit=$I$(6).enabledOnToolkit$J(65536);
if (resized) {
(this).createChildHierarchyEvents$I$J$Z(1402, 0, enabledOnToolkit);
}if (moved) {
(this).createChildHierarchyEvents$I$J$Z(1401, 0, enabledOnToolkit);
}}}}, p$1);

Clazz.newMeth(C$, 'getX$',  function () {
return this.x;
});

Clazz.newMeth(C$, 'getY$',  function () {
return this.y;
});

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.height;
});

Clazz.newMeth(C$, 'getBounds$',  function () {
return Clazz.new_($I$(12,1).c$$I$I$I$I,[this.x, this.y, this.width, this.height]);
});

Clazz.newMeth(C$, 'getBounds$java_awt_Rectangle',  function (rv) {
if (rv == null ) return Clazz.new_([this.getX$(), this.getY$(), this.getWidth$(), this.getHeight$()],$I$(12,1).c$$I$I$I$I);
rv.setBounds$I$I$I$I(this.getX$(), this.getY$(), this.getWidth$(), this.getHeight$());
return rv;
});

Clazz.newMeth(C$, 'getSize$java_awt_Dimension',  function (rv) {
if (rv == null ) {
return Clazz.new_([this.getWidth$(), this.getHeight$()],$I$(11,1).c$$I$I);
} else {
rv.setSize$I$I(this.getWidth$(), this.getHeight$());
return rv;
}});

Clazz.newMeth(C$, 'getLocation$java_awt_Point',  function (rv) {
if (rv == null ) {
return Clazz.new_([this.getX$(), this.getY$()],$I$(7,1).c$$I$I);
} else {
rv.setLocation$I$I(this.getX$(), this.getY$());
return rv;
}});

Clazz.newMeth(C$, 'isOpaque$',  function () {
return true;
});

Clazz.newMeth(C$, 'isLightweight$',  function () {
return false;
});

Clazz.newMeth(C$, 'setPreferredSize$java_awt_Dimension',  function (preferredSize) {
this.setPrefSizeComp$java_awt_Dimension(preferredSize);
});

Clazz.newMeth(C$, 'setPrefSizeComp$java_awt_Dimension',  function (preferredSize) {
var old=(this.prefSizeSet ? this.prefSize : null);
this.prefSize=preferredSize;
this.prefSizeSet=(preferredSize != null );
this.firePropertyChange$S$O$O("preferredSize", old, preferredSize);
});

Clazz.newMeth(C$, 'isPreferredSizeSet$',  function () {
return this.prefSizeSet;
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
return this.preferredSize$();
});

Clazz.newMeth(C$, 'preferredSize$',  function () {
return this.prefSizeComp$();
});

Clazz.newMeth(C$, 'prefSizeComp$',  function () {
var dim=this.prefSize;
if (dim == null  || !(this.isPreferredSizeSet$() || this.isValid$() ) ) {
dim=(this.width != 0 || this.height != 0  ? null : this.isDisplayable$() && this.peer != null   ? this.peer.getPreferredSize$() : this.getMinimumSize$());
this.prefSize=dim;
}return (dim == null  ? Clazz.new_($I$(11,1).c$$I$I,[this.width, this.height]) : Clazz.new_($I$(11,1).c$$java_awt_Dimension,[dim]));
});

Clazz.newMeth(C$, 'setMinimumSize$java_awt_Dimension',  function (minimumSize) {
var old;
if (this.minSizeSet) {
old=this.minSize;
} else {
old=null;
}this.minSize=minimumSize;
this.minSizeSet=(minimumSize != null );
this.firePropertyChange$S$O$O("minimumSize", old, minimumSize);
});

Clazz.newMeth(C$, 'isMinimumSizeSet$',  function () {
return this.minSizeSet;
});

Clazz.newMeth(C$, 'getMinimumSize$',  function () {
return this.minimumSize$();
});

Clazz.newMeth(C$, 'minimumSize$',  function () {
var dim=this.minSize;
if (dim == null  || !this.isMinimumSizeSet$() && !this.isValid$()  ) {
this.minSize=(this.peer == null  ? this.size$() : Clazz.new_($I$(11,1).c$$I$I,[1, 1]));
dim=this.minSize;
}return Clazz.new_($I$(11,1).c$$java_awt_Dimension,[dim]);
});

Clazz.newMeth(C$, 'setMaximumSize$java_awt_Dimension',  function (maximumSize) {
var old;
if (this.maxSizeSet) {
old=this.maxSize;
} else {
old=null;
}this.maxSize=maximumSize;
this.maxSizeSet=(maximumSize != null );
this.firePropertyChange$S$O$O("maximumSize", old, maximumSize);
});

Clazz.newMeth(C$, 'isMaximumSizeSet$',  function () {
return this.maxSizeSet;
});

Clazz.newMeth(C$, 'getMaximumSize$',  function () {
return this.getMaxSizeComp$();
});

Clazz.newMeth(C$, 'getMaxSizeComp$',  function () {
return (this.isMaximumSizeSet$() ? this.maxSize : Clazz.new_($I$(11,1).c$$I$I,[32767, 32767]));
});

Clazz.newMeth(C$, 'getAlignmentX$',  function () {
return this.getAlignmentXComp$();
});

Clazz.newMeth(C$, 'getAlignmentXComp$',  function () {
return 0.5;
});

Clazz.newMeth(C$, 'getAlignmentY$',  function () {
return this.getAlignmentYComp$();
});

Clazz.newMeth(C$, 'getAlignmentYComp$',  function () {
return 0.5;
});

Clazz.newMeth(C$, 'getBaseline$I$I',  function (width, height) {
if (width < 0 || height < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Width and height must be >= 0"]);
}return -1;
});

Clazz.newMeth(C$, 'getBaselineResizeBehavior$',  function () {
return $I$(13).OTHER;
});

Clazz.newMeth(C$, 'doLayout$',  function () {
this.layout$();
});

Clazz.newMeth(C$, 'layout$',  function () {
});

Clazz.newMeth(C$, 'validate$',  function () {
this.valid=true;
});

Clazz.newMeth(C$, 'invalidate$',  function () {
this.invalidateComp$();
});

Clazz.newMeth(C$, 'invalidateComp$',  function () {
this.valid=false;
if (!this.isPreferredSizeSet$()) {
this.prefSize=null;
}if (!this.isMinimumSizeSet$()) {
this.minSize=null;
}if (!this.isMaximumSizeSet$()) {
this.maxSize=null;
}if (this.parent != null  && this.秘j2sInvalidateOnAdd ) {
this.parent.invalidateIfValid$();
}});

Clazz.newMeth(C$, 'invalidateIfValid$',  function () {
if (this.isValid$()) {
this.invalidate$();
}});

Clazz.newMeth(C$, 'getGraphics$',  function () {
var g;
if ((g=(this.parent == null  ? null : this.parent.getGraphics$())) != null ) g.setFont$java_awt_Font(this.getFont$());
return g;
});

Clazz.newMeth(C$, 'getTreeLock$',  function () {
return this;
});

Clazz.newMeth(C$, 'getFontMetrics$java_awt_Font',  function (font) {
return font.getFontMetrics$();
});

Clazz.newMeth(C$, 'setCursor$java_awt_Cursor',  function (cursor) {
this.cursor=cursor;
this.updateCursorImmediately$();
});

Clazz.newMeth(C$, 'updateCursorImmediately$',  function () {
if (this.peer != null ) this.peer.updateCursorImmediately$();
});

Clazz.newMeth(C$, 'getCursor$',  function () {
return this.getCursor_NoClientCode$();
});

Clazz.newMeth(C$, 'getCursor_NoClientCode$',  function () {
var cursor=this.cursor;
if (cursor != null ) {
return cursor;
}var parent=this.parent;
if (parent != null ) {
return parent.getCursor_NoClientCode$();
} else {
return $I$(14).getPredefinedCursor$I(0);
}});

Clazz.newMeth(C$, 'isCursorSet$',  function () {
return (this.cursor != null );
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
});

Clazz.newMeth(C$, 'update$java_awt_Graphics',  function (g) {
this.paint$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'paintAll$java_awt_Graphics',  function (g) {
});

Clazz.newMeth(C$, 'lightweightPaint$java_awt_Graphics',  function (g) {
this.lwPaintComp$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'lwPaintComp$java_awt_Graphics',  function (g) {
this.paint$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'paintHeavyweightComponents$java_awt_Graphics',  function (g) {
});

Clazz.newMeth(C$, 'repaint$',  function () {
this.repaint$J$I$I$I$I(0, 0, 0, this.width, this.height);
});

Clazz.newMeth(C$, 'repaint$J',  function (tm) {
this.repaint$J$I$I$I$I(tm, 0, 0, this.width, this.height);
});

Clazz.newMeth(C$, 'repaint$I$I$I$I',  function (x, y, width, height) {
this.repaint$J$I$I$I$I(0, x, y, width, height);
});

Clazz.newMeth(C$, 'repaint$J$I$I$I$I',  function (tm, x, y, width, height) {
this.秘repaintCmp$J$I$I$I$I(tm, x, y, width, height);
});

Clazz.newMeth(C$, '秘repaintCmp$J$I$I$I$I',  function (tm, x, y, width, height) {
if (this.canPaint$()) {
if (this.peer != null ) {
if (this.isVisible$() && width > 0  && height > 0 ) {
var e=Clazz.new_([this, 801, Clazz.new_($I$(12,1).c$$I$I$I$I,[x, y, width, height])],$I$(15,1).c$$java_awt_Component$I$java_awt_Rectangle);
$I$(6).getEventQueue$().postEvent$java_awt_AWTEvent(e);
} else {
this.peer.setVisible$Z(false);
}}} else if (this.parent != null ) {
var px=this.x + ((x < 0) ? 0 : x);
var py=this.y + ((y < 0) ? 0 : y);
var pwidth=(width > this.width) ? this.width : width;
var pheight=(height > this.height) ? this.height : height;
this.parent.repaint$J$I$I$I$I(tm, px, py, pwidth, pheight);
}});

Clazz.newMeth(C$, 'canPaint$',  function () {
return !(Clazz.instanceOf(this.peer, "java.awt.peer.LightweightPeer"));
});

Clazz.newMeth(C$, 'print$java_awt_Graphics',  function (g) {
this.paint$java_awt_Graphics(g);
});

Clazz.newMeth(C$, 'printAll$java_awt_Graphics',  function (g) {
});

Clazz.newMeth(C$, 'printHeavyweightComponents$java_awt_Graphics',  function (g) {
});

Clazz.newMeth(C$, 'imageUpdate$java_awt_Image$I$I$I$I$I',  function (img, infoflags, x, y, w, h) {
return false;
});

Clazz.newMeth(C$, 'createImage$java_awt_image_ImageProducer',  function (producer) {
return (this.isDisplayable$() ? (this.getToolkit$()).createImage$java_awt_Component$java_awt_image_ImageProducer(this, producer) : null);
});

Clazz.newMeth(C$, 'createImage$I$I',  function (width, height) {
return (this.isDisplayable$() ? (this.getToolkit$()).createImage$java_awt_Component$I$I(this, width, height) : null);
});

Clazz.newMeth(C$, 'createVolatileImage$I$I',  function (width, height) {
return null;
});

Clazz.newMeth(C$, 'createVolatileImage$I$I$java_awt_ImageCapabilities',  function (width, height, caps) {
return this.createVolatileImage$I$I(width, height);
});

Clazz.newMeth(C$, 'prepareImage$java_awt_Image$java_awt_image_ImageObserver',  function (image, observer) {
return this.prepareImage$java_awt_Image$I$I$java_awt_image_ImageObserver(image, -1, -1, observer);
});

Clazz.newMeth(C$, 'prepareImage$java_awt_Image$I$I$java_awt_image_ImageObserver',  function (image, width, height, observer) {
return false;
});

Clazz.newMeth(C$, 'checkImage$java_awt_Image$java_awt_image_ImageObserver',  function (image, observer) {
return this.checkImage$java_awt_Image$I$I$java_awt_image_ImageObserver(image, -1, -1, observer);
});

Clazz.newMeth(C$, 'checkImage$java_awt_Image$I$I$java_awt_image_ImageObserver',  function (image, width, height, observer) {
return 35;
});

Clazz.newMeth(C$, 'setIgnoreRepaint$Z',  function (ignoreRepaint) {
});

Clazz.newMeth(C$, 'getIgnoreRepaint$',  function () {
return false;
});

Clazz.newMeth(C$, 'contains$java_awt_Point',  function (p) {
return this.contains$I$I(p.x, p.y);
});

Clazz.newMeth(C$, 'contains$I$I',  function (x, y) {
return this.inside$I$I(x, y);
});

Clazz.newMeth(C$, 'inside$I$I',  function (x, y) {
return (x >= 0) && (x < this.width) && (y >= 0) && (y < this.height)  ;
});

Clazz.newMeth(C$, 'getComponentAt$I$I',  function (x, y) {
return this.locate$I$I(x, y);
});

Clazz.newMeth(C$, 'locate$I$I',  function (x, y) {
return this.contains$I$I(x, y) ? this : null;
});

Clazz.newMeth(C$, 'getComponentAt$java_awt_Point',  function (p) {
return this.getComponentAt$I$I(p.x, p.y);
});

Clazz.newMeth(C$, 'deliverEvent$java_awt_Event',  function (e) {
this.postEvent$java_awt_Event(e);
});

Clazz.newMeth(C$, 'dispatchEvent$java_awt_AWTEvent',  function (e) {
this.dispatchEventImpl$java_awt_AWTEvent(e);
});

Clazz.newMeth(C$, 'dispatchEventImpl$java_awt_AWTEvent',  function (e) {
this.dispatchEventImplComp$java_awt_AWTEvent(e);
});

Clazz.newMeth(C$, 'dispatchEventImplComp$java_awt_AWTEvent',  function (e) {
var id=e.getID$();
if (!(Clazz.instanceOf(e, "java.awt.event.KeyEvent"))) {
$I$(16).setCurrentEventAndMostRecentTime$java_awt_AWTEvent(e);
}if (Clazz.instanceOf(e, "swingjs.JSDnD.JSDropMouseEvent")) {
(e).dispatch$();
return;
}if (!e.focusManagerIsDispatching) {
if (e.isPosted) {
e=$I$(8).retargetFocusEvent$java_awt_AWTEvent(e);
e.isPosted=true;
}if ($I$(8).getCurrentKeyboardFocusManager$().dispatchEvent$java_awt_AWTEvent(e)) {
return;
}}var toolkit=$I$(6).getDefaultToolkit$();
toolkit.notifyAWTEventListeners$java_awt_AWTEvent(e);
if (!e.isConsumed$()) {
if (Clazz.instanceOf(e, "java.awt.event.KeyEvent")) {
$I$(8).getCurrentKeyboardFocusManager$().processKeyEvent$java_awt_Component$java_awt_event_KeyEvent(this, e);
if (e.isConsumed$()) {
return;
}}}switch (id) {
case 801:
(this).秘update$();
break;
case 401:
case 402:
var p=((Clazz.instanceOf(this, "java.awt.Container")) ? this : this.parent);
if (p != null ) {
p.preProcessKeyEvent$java_awt_event_KeyEvent(e);
}break;
case 201:
break;
default:
break;
}
if (this.newEventsOnly) {
if (this.eventEnabled$java_awt_AWTEvent(e)) {
this.processEvent$java_awt_AWTEvent(e);
}} else if (id == 507) {
this.autoProcessMouseWheel$java_awt_event_MouseWheelEvent(e);
}});

Clazz.newMeth(C$, 'autoProcessMouseWheel$java_awt_event_MouseWheelEvent',  function (e) {
});

Clazz.newMeth(C$, 'dispatchMouseWheelToAncestor$java_awt_event_MouseWheelEvent',  function (e) {
var newX;
var newY;
newX=e.getX$() + this.getX$();
newY=e.getY$() + this.getY$();
var newMWE;
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
var anc=this.getParent$();
while (anc != null  && !anc.eventEnabled$java_awt_AWTEvent(e) ){
newX+=anc.getX$();
newY+=anc.getY$();
if (!anc.isWindowOrJSApplet$()) {
anc=anc.getParent$();
} else {
break;
}}
if (anc != null  && anc.eventEnabled$java_awt_AWTEvent(e) ) {
newMWE=Clazz.new_([anc, e.getID$(), e.getWhen$(), e.getModifiers$(), newX, newY, e.getXOnScreen$(), e.getYOnScreen$(), e.getClickCount$(), e.isPopupTrigger$(), e.getScrollType$(), e.getScrollAmount$(), e.getWheelRotation$(), e.getPreciseWheelRotation$()],$I$(17,1).c$$java_awt_Component$I$J$I$I$I$I$I$I$Z$I$I$I$D);
(e).copyPrivateDataInto$java_awt_AWTEvent(newMWE);
anc.dispatchEventToSelf$java_awt_AWTEvent(newMWE);
}}return true;
});

Clazz.newMeth(C$, 'checkWindowClosingException$',  function () {
if (this.windowClosingException != null ) {
if (Clazz.instanceOf(this, "java.awt.JSDialog")) {
(this).interruptBlocking$();
} else {
this.windowClosingException.fillInStackTrace$();
this.windowClosingException.printStackTrace$();
this.windowClosingException=null;
}return true;
}return false;
});

Clazz.newMeth(C$, 'areInputMethodsEnabled$',  function () {
return (Long.$ne((Long.$and(this.eventMask,4096)),0 )) && (Long.$ne((Long.$and(this.eventMask,8)),0 ) || this.keyListener != null  ) ;
});

Clazz.newMeth(C$, 'eventEnabled$java_awt_AWTEvent',  function (e) {
return this.eventTypeEnabled$I(e.id);
});

Clazz.newMeth(C$, 'eventTypeEnabled$I',  function (type) {
switch (type) {
case 100:
case 101:
case 102:
case 103:
if (Long.$ne((Long.$and(this.eventMask,1)),0 ) || this.componentListener != null  ) {
return true;
}break;
case 1004:
case 1005:
if (Long.$ne((Long.$and(this.eventMask,4)),0 ) || this.focusListener != null  ) {
return true;
}break;
case 401:
case 402:
case 400:
if (Long.$ne((Long.$and(this.eventMask,8)),0 ) || this.keyListener != null  ) {
return true;
}break;
case 501:
case 502:
case 504:
case 505:
case 500:
if (Long.$ne((Long.$and(this.eventMask,16)),0 ) || this.mouseListener != null  ) {
return true;
}break;
case 503:
case 506:
if (Long.$ne((Long.$and(this.eventMask,32)),0 ) || this.mouseMotionListener != null  ) {
return true;
}break;
case 507:
if (Long.$ne((Long.$and(this.eventMask,131072)),0 ) || this.mouseWheelListener != null  ) {
return true;
}break;
case 1100:
case 1101:
if (Long.$ne((Long.$and(this.eventMask,2048)),0 ) || this.inputMethodListener != null  ) {
return true;
}break;
case 1400:
if (Long.$ne((Long.$and(this.eventMask,32768)),0 ) || this.hierarchyListener != null  ) {
return true;
}break;
case 1401:
case 1402:
if (Long.$ne((Long.$and(this.eventMask,65536)),0 ) || this.hierarchyBoundsListener != null  ) {
return true;
}break;
case 1001:
if (Long.$ne((Long.$and(this.eventMask,128)),0 )) {
return true;
}break;
case 900:
if (Long.$ne((Long.$and(this.eventMask,1024)),0 )) {
return true;
}break;
case 701:
if (Long.$ne((Long.$and(this.eventMask,512)),0 )) {
return true;
}break;
case 601:
if (Long.$ne((Long.$and(this.eventMask,256)),0 )) {
return true;
}break;
default:
break;
}
if (type > 1999) {
return true;
}return false;
});

Clazz.newMeth(C$, 'postEvent$java_awt_Event',  function (e) {
if (this.handleEvent$java_awt_Event(e)) {
e.consume$();
return true;
}var parent=this.parent;
var eventx=e.x;
var eventy=e.y;
if (parent != null ) {
e.translate$I$I(this.x, this.y);
if (parent.postEvent$java_awt_Event(e)) {
e.consume$();
return true;
}e.x=eventx;
e.y=eventy;
}return false;
});

Clazz.newMeth(C$, 'addComponentListener$java_awt_event_ComponentListener',  function (l) {
if (l == null ) {
return;
}this.componentListener=$I$(18).add$java_awt_event_ComponentListener$java_awt_event_ComponentListener(this.componentListener, l);
this.newEventsOnly=true;
});

Clazz.newMeth(C$, 'removeComponentListener$java_awt_event_ComponentListener',  function (l) {
if (l == null ) {
return;
}this.componentListener=$I$(18).remove$java_awt_event_ComponentListener$java_awt_event_ComponentListener(this.componentListener, l);
});

Clazz.newMeth(C$, 'getComponentListeners$',  function () {
return (this.getListeners$Class(Clazz.getClass($I$(19),['componentHidden$java_awt_event_ComponentEvent','componentMoved$java_awt_event_ComponentEvent','componentResized$java_awt_event_ComponentEvent','componentShown$java_awt_event_ComponentEvent'])));
});

Clazz.newMeth(C$, 'addFocusListener$java_awt_event_FocusListener',  function (l) {
if (l == null ) {
return;
}this.focusListener=$I$(18).add$java_awt_event_FocusListener$java_awt_event_FocusListener(this.focusListener, l);
this.newEventsOnly=true;
});

Clazz.newMeth(C$, 'removeFocusListener$java_awt_event_FocusListener',  function (l) {
if (l == null ) {
return;
}this.focusListener=$I$(18).remove$java_awt_event_FocusListener$java_awt_event_FocusListener(this.focusListener, l);
});

Clazz.newMeth(C$, 'getFocusListeners$',  function () {
return (this.getListeners$Class(Clazz.getClass($I$(20),['focusGained$java_awt_event_FocusEvent','focusLost$java_awt_event_FocusEvent'])));
});

Clazz.newMeth(C$, 'addHierarchyListener$java_awt_event_HierarchyListener',  function (l) {
if (l == null ) {
return;
}var notifyAncestors;
{
notifyAncestors=(this.hierarchyListener == null  && Long.$eq((Long.$and(this.eventMask,32768)),0 ) );
this.hierarchyListener=$I$(18).add$java_awt_event_HierarchyListener$java_awt_event_HierarchyListener(this.hierarchyListener, l);
notifyAncestors=(notifyAncestors && this.hierarchyListener != null  );
this.newEventsOnly=true;
}if (notifyAncestors) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
this.adjustListeningChildrenOnParent$J$I(32768, 1);
}}});

Clazz.newMeth(C$, 'removeHierarchyListener$java_awt_event_HierarchyListener',  function (l) {
if (l == null ) {
return;
}var notifyAncestors;
{
notifyAncestors=(this.hierarchyListener != null  && Long.$eq((Long.$and(this.eventMask,32768)),0 ) );
this.hierarchyListener=$I$(18).remove$java_awt_event_HierarchyListener$java_awt_event_HierarchyListener(this.hierarchyListener, l);
notifyAncestors=(notifyAncestors && this.hierarchyListener == null  );
}if (notifyAncestors) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
this.adjustListeningChildrenOnParent$J$I(32768, -1);
}}});

Clazz.newMeth(C$, 'getHierarchyListeners$',  function () {
return (this.getListeners$Class(Clazz.getClass($I$(21),['hierarchyChanged$java_awt_event_HierarchyEvent'])));
});

Clazz.newMeth(C$, 'addHierarchyBoundsListener$java_awt_event_HierarchyBoundsListener',  function (l) {
if (l == null ) {
return;
}var notifyAncestors;
notifyAncestors=(this.hierarchyBoundsListener == null  && Long.$eq((Long.$and(this.eventMask,65536)),0 ) );
this.hierarchyBoundsListener=$I$(18).add$java_awt_event_HierarchyBoundsListener$java_awt_event_HierarchyBoundsListener(this.hierarchyBoundsListener, l);
notifyAncestors=(notifyAncestors && this.hierarchyBoundsListener != null  );
this.newEventsOnly=true;
if (notifyAncestors) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
this.adjustListeningChildrenOnParent$J$I(65536, 1);
}}});

Clazz.newMeth(C$, 'removeHierarchyBoundsListener$java_awt_event_HierarchyBoundsListener',  function (l) {
if (l == null ) {
return;
}var notifyAncestors;
{
notifyAncestors=(this.hierarchyBoundsListener != null  && Long.$eq((Long.$and(this.eventMask,65536)),0 ) );
this.hierarchyBoundsListener=$I$(18).remove$java_awt_event_HierarchyBoundsListener$java_awt_event_HierarchyBoundsListener(this.hierarchyBoundsListener, l);
notifyAncestors=(notifyAncestors && this.hierarchyBoundsListener == null  );
}if (notifyAncestors) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
this.adjustListeningChildrenOnParent$J$I(65536, -1);
}}});

Clazz.newMeth(C$, 'numListening$J',  function (mask) {
return this.numListeningMask$J(mask);
});

Clazz.newMeth(C$, 'numListeningMask$J',  function (mask) {
if ((Long.$eq(mask,32768 ) && (this.hierarchyListener != null  || Long.$ne((Long.$and(this.eventMask,32768)),0 ) ) ) || (Long.$eq(mask,65536 ) && (this.hierarchyBoundsListener != null  || Long.$ne((Long.$and(this.eventMask,65536)),0 ) ) ) ) {
return 1;
} else {
return 0;
}});

Clazz.newMeth(C$, 'countHierarchyMembers$',  function () {
return 1;
});

Clazz.newMeth(C$, 'createHierarchyEvents$I$java_awt_Component$java_awt_Container$J$Z',  function (id, changed, changedParent, changeFlags, enabledOnToolkit) {
return this.createHierEventsComp$I$java_awt_Component$java_awt_Container$J$Z(id, changed, changedParent, changeFlags, enabledOnToolkit);
});

Clazz.newMeth(C$, 'createHierEventsComp$I$java_awt_Component$java_awt_Container$J$Z',  function (id, changed, changedParent, changeFlags, enabledOnToolkit) {
switch (id) {
case 1400:
if (this.hierarchyListener != null  || Long.$ne((Long.$and(this.eventMask,32768)),0 )  || enabledOnToolkit ) {
var e=Clazz.new_($I$(22,1).c$$java_awt_Component$I$java_awt_Component$java_awt_Container$J,[this, id, changed, changedParent, changeFlags]);
this.dispatchEvent$java_awt_AWTEvent(e);
return 1;
}break;
case 1401:
case 1402:
if (this.hierarchyBoundsListener != null  || Long.$ne((Long.$and(this.eventMask,65536)),0 )  || enabledOnToolkit ) {
var e=Clazz.new_($I$(22,1).c$$java_awt_Component$I$java_awt_Component$java_awt_Container,[this, id, changed, changedParent]);
this.dispatchEvent$java_awt_AWTEvent(e);
return 1;
}break;
default:
break;
}
return 0;
});

Clazz.newMeth(C$, 'getHierarchyBoundsListeners$',  function () {
return (this.getListeners$Class(Clazz.getClass($I$(23),['ancestorMoved$java_awt_event_HierarchyEvent','ancestorResized$java_awt_event_HierarchyEvent'])));
});

Clazz.newMeth(C$, 'adjustListeningChildrenOnParent$J$I',  function (mask, num) {
if (this.parent != null ) {
this.parent.adjustListeningChildren$J$I(mask, num);
}});

Clazz.newMeth(C$, 'addKeyListener$java_awt_event_KeyListener',  function (l) {
if (l == null ) {
return;
}this.keyListener=$I$(18).add$java_awt_event_KeyListener$java_awt_event_KeyListener(this.keyListener, l);
this.newEventsOnly=true;
});

Clazz.newMeth(C$, 'removeKeyListener$java_awt_event_KeyListener',  function (l) {
if (l == null ) {
return;
}this.keyListener=$I$(18).remove$java_awt_event_KeyListener$java_awt_event_KeyListener(this.keyListener, l);
});

Clazz.newMeth(C$, 'getKeyListeners$',  function () {
return (this.getListeners$Class(Clazz.getClass($I$(24),['keyPressed$java_awt_event_KeyEvent','keyReleased$java_awt_event_KeyEvent','keyTyped$java_awt_event_KeyEvent'])));
});

Clazz.newMeth(C$, 'addMouseListener$java_awt_event_MouseListener',  function (l) {
if (l == null ) {
return;
}this.mouseListener=$I$(18).add$java_awt_event_MouseListener$java_awt_event_MouseListener(this.mouseListener, l);
this.newEventsOnly=true;
if (Clazz.instanceOf(this.peer, "java.awt.peer.LightweightPeer") && this.parent != null  ) {
this.parent.proxyEnableEvents$J(16);
}});

Clazz.newMeth(C$, 'removeMouseListener$java_awt_event_MouseListener',  function (l) {
if (l == null ) {
return;
}this.mouseListener=$I$(18).remove$java_awt_event_MouseListener$java_awt_event_MouseListener(this.mouseListener, l);
});

Clazz.newMeth(C$, 'getMouseListeners$',  function () {
return (this.getListeners$Class(Clazz.getClass($I$(25),['mouseClicked$java_awt_event_MouseEvent','mouseEntered$java_awt_event_MouseEvent','mouseExited$java_awt_event_MouseEvent','mousePressed$java_awt_event_MouseEvent','mouseReleased$java_awt_event_MouseEvent'])));
});

Clazz.newMeth(C$, 'addMouseMotionListener$java_awt_event_MouseMotionListener',  function (l) {
if (l == null ) {
return;
}this.mouseMotionListener=$I$(18).add$java_awt_event_MouseMotionListener$java_awt_event_MouseMotionListener(this.mouseMotionListener, l);
this.newEventsOnly=true;
});

Clazz.newMeth(C$, 'removeMouseMotionListener$java_awt_event_MouseMotionListener',  function (l) {
if (l == null ) {
return;
}this.mouseMotionListener=$I$(18).remove$java_awt_event_MouseMotionListener$java_awt_event_MouseMotionListener(this.mouseMotionListener, l);
});

Clazz.newMeth(C$, 'getMouseMotionListeners$',  function () {
return (this.getListeners$Class(Clazz.getClass($I$(26),['mouseDragged$java_awt_event_MouseEvent','mouseMoved$java_awt_event_MouseEvent'])));
});

Clazz.newMeth(C$, 'addMouseWheelListener$java_awt_event_MouseWheelListener',  function (l) {
if (l == null ) {
return;
}this.mouseWheelListener=$I$(18).add$java_awt_event_MouseWheelListener$java_awt_event_MouseWheelListener(this.mouseWheelListener, l);
this.newEventsOnly=true;
});

Clazz.newMeth(C$, 'removeMouseWheelListener$java_awt_event_MouseWheelListener',  function (l) {
if (l == null ) {
return;
}this.mouseWheelListener=$I$(18).remove$java_awt_event_MouseWheelListener$java_awt_event_MouseWheelListener(this.mouseWheelListener, l);
});

Clazz.newMeth(C$, 'getMouseWheelListeners$',  function () {
return (this.getListeners$Class(Clazz.getClass($I$(27),['mouseWheelMoved$java_awt_event_MouseWheelEvent'])));
});

Clazz.newMeth(C$, 'addInputMethodListener$java_awt_event_InputMethodListener',  function (l) {
if (l == null ) {
return;
}this.inputMethodListener=$I$(18).add$java_awt_event_InputMethodListener$java_awt_event_InputMethodListener(this.inputMethodListener, l);
this.newEventsOnly=true;
});

Clazz.newMeth(C$, 'removeInputMethodListener$java_awt_event_InputMethodListener',  function (l) {
if (l == null ) {
return;
}this.inputMethodListener=$I$(18).remove$java_awt_event_InputMethodListener$java_awt_event_InputMethodListener(this.inputMethodListener, l);
});

Clazz.newMeth(C$, 'getInputMethodListeners$',  function () {
return (this.getListeners$Class(Clazz.getClass($I$(28),['caretPositionChanged$java_awt_event_InputMethodEvent','inputMethodTextChanged$java_awt_event_InputMethodEvent'])));
});

Clazz.newMeth(C$, 'getListeners$Class',  function (listenerType) {
return this.getListenersComp$Class(listenerType);
});

Clazz.newMeth(C$, 'getListenersComp$Class',  function (listenerType) {
var l=null;
if (listenerType === Clazz.getClass($I$(19),['componentHidden$java_awt_event_ComponentEvent','componentMoved$java_awt_event_ComponentEvent','componentResized$java_awt_event_ComponentEvent','componentShown$java_awt_event_ComponentEvent']) ) {
l=this.componentListener;
} else if (listenerType === Clazz.getClass($I$(20),['focusGained$java_awt_event_FocusEvent','focusLost$java_awt_event_FocusEvent']) ) {
l=this.focusListener;
} else if (listenerType === Clazz.getClass($I$(21),['hierarchyChanged$java_awt_event_HierarchyEvent']) ) {
l=this.hierarchyListener;
} else if (listenerType === Clazz.getClass($I$(23),['ancestorMoved$java_awt_event_HierarchyEvent','ancestorResized$java_awt_event_HierarchyEvent']) ) {
l=this.hierarchyBoundsListener;
} else if (listenerType === Clazz.getClass($I$(24),['keyPressed$java_awt_event_KeyEvent','keyReleased$java_awt_event_KeyEvent','keyTyped$java_awt_event_KeyEvent']) ) {
l=this.keyListener;
} else if (listenerType === Clazz.getClass($I$(25),['mouseClicked$java_awt_event_MouseEvent','mouseEntered$java_awt_event_MouseEvent','mouseExited$java_awt_event_MouseEvent','mousePressed$java_awt_event_MouseEvent','mouseReleased$java_awt_event_MouseEvent']) ) {
l=this.mouseListener;
} else if (listenerType === Clazz.getClass($I$(26),['mouseDragged$java_awt_event_MouseEvent','mouseMoved$java_awt_event_MouseEvent']) ) {
l=this.mouseMotionListener;
} else if (listenerType === Clazz.getClass($I$(27),['mouseWheelMoved$java_awt_event_MouseWheelEvent']) ) {
l=this.mouseWheelListener;
} else if (listenerType === Clazz.getClass($I$(28),['caretPositionChanged$java_awt_event_InputMethodEvent','inputMethodTextChanged$java_awt_event_InputMethodEvent']) ) {
l=this.inputMethodListener;
} else if (listenerType === Clazz.getClass($I$(29),['propertyChange$java_beans_PropertyChangeEvent']) ) {
return this.getPropertyChangeListeners$();
}return $I$(18).getListeners$java_util_EventListener$Class(l, listenerType);
});

Clazz.newMeth(C$, 'enableEvents$J',  function (eventsToEnable) {
var notifyAncestors=0;
{
if (Long.$ne((Long.$and(eventsToEnable,32768)),0 ) && this.hierarchyListener == null   && Long.$eq((Long.$and(this.eventMask,32768)),0 ) ) {
(notifyAncestors=Long.$or(notifyAncestors,(32768)));
}if (Long.$ne((Long.$and(eventsToEnable,65536)),0 ) && this.hierarchyBoundsListener == null   && Long.$eq((Long.$and(this.eventMask,65536)),0 ) ) {
(notifyAncestors=Long.$or(notifyAncestors,(65536)));
}(this.eventMask=Long.$or(this.eventMask,(eventsToEnable)));
this.newEventsOnly=true;
}if (this.parent != null  && Clazz.instanceOf(this.peer, "java.awt.peer.LightweightPeer") ) {
this.parent.proxyEnableEvents$J(this.eventMask);
}if (Long.$ne(notifyAncestors,0 )) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
this.adjustListeningChildrenOnParent$J$I(notifyAncestors, 1);
}}});

Clazz.newMeth(C$, 'disableEvents$J',  function (eventsToDisable) {
var notifyAncestors=0;
{
if (Long.$ne((Long.$and(eventsToDisable,32768)),0 ) && this.hierarchyListener == null   && Long.$ne((Long.$and(this.eventMask,32768)),0 ) ) {
(notifyAncestors=Long.$or(notifyAncestors,(32768)));
}if (Long.$ne((Long.$and(eventsToDisable,65536)),0 ) && this.hierarchyBoundsListener == null   && Long.$ne((Long.$and(this.eventMask,65536)),0 ) ) {
(notifyAncestors=Long.$or(notifyAncestors,(65536)));
}(this.eventMask=Long.$and(this.eventMask,((Long.$not(eventsToDisable)))));
}if (Long.$ne(notifyAncestors,0 )) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
this.adjustListeningChildrenOnParent$J$I(notifyAncestors, -1);
}}});

Clazz.newMeth(C$, 'checkCoalescing',  function () {
if (this.getClass$().getClassLoader$() == null ) {
return false;
}var clazz=this.getClass$().getName$();
{
var value=C$.coalesceMap.get$O(clazz);
if (value != null ) {
return value.booleanValue$();
}var enabled=Boolean.valueOf$Z(p$1.checkCoelescence.apply(this, []));
C$.coalesceMap.put$O$O(clazz, enabled);
return enabled.booleanValue$();
}}, p$1);

Clazz.newMeth(C$, 'checkCoelescence',  function () {
return this.coalesceEvents$java_awt_AWTEvent$java_awt_AWTEvent.exClazz != C$ ||false;
}, p$1);

Clazz.newMeth(C$, 'isCoalescingEnabled$',  function () {
return this.coalescingEnabled;
});

Clazz.newMeth(C$, 'coalesceEvents$java_awt_AWTEvent$java_awt_AWTEvent',  function (existingEvent, newEvent) {
return null;
});

Clazz.newMeth(C$, 'processEvent$java_awt_AWTEvent',  function (e) {
this.processEventComp$java_awt_AWTEvent(e);
});

Clazz.newMeth(C$, 'processEventComp$java_awt_AWTEvent',  function (e) {
var isActiveRetarget=!!e.dispatch$ ||false;
if (isActiveRetarget || Clazz.instanceOf(e, "java.awt.ActiveEvent") ) {
(e).dispatch$();
} else if (Clazz.instanceOf(e, "java.awt.event.FocusEvent")) {
this.processFocusEvent$java_awt_event_FocusEvent(e);
} else if (Clazz.instanceOf(e, "java.awt.event.MouseEvent")) {
switch (e.getID$()) {
case 501:
case 502:
case 500:
case 504:
case 505:
this.processMouseEvent$java_awt_event_MouseEvent(e);
break;
case 503:
case 506:
this.processMouseMotionEvent$java_awt_event_MouseEvent(e);
break;
case 507:
this.processMouseWheelEvent$java_awt_event_MouseWheelEvent(e);
break;
}
} else if (Clazz.instanceOf(e, "java.awt.event.KeyEvent")) {
this.processKeyEvent$java_awt_event_KeyEvent(e);
} else if (Clazz.instanceOf(e, "java.awt.event.ComponentEvent")) {
this.processComponentEvent$java_awt_event_ComponentEvent(e);
} else if (Clazz.instanceOf(e, "java.awt.event.InputMethodEvent")) {
this.processInputMethodEvent$java_awt_event_InputMethodEvent(e);
} else if (Clazz.instanceOf(e, "java.awt.event.HierarchyEvent")) {
switch (e.getID$()) {
case 1400:
this.processHierarchyEvent$java_awt_event_HierarchyEvent(e);
break;
case 1401:
case 1402:
this.processHierarchyBoundsEvent$java_awt_event_HierarchyEvent(e);
break;
}
}});

Clazz.newMeth(C$, 'processComponentEvent$java_awt_event_ComponentEvent',  function (e) {
var listener=this.componentListener;
if (listener != null ) {
var id=e.getID$();
switch (id) {
case 101:
listener.componentResized$java_awt_event_ComponentEvent(e);
break;
case 100:
listener.componentMoved$java_awt_event_ComponentEvent(e);
break;
case 102:
listener.componentShown$java_awt_event_ComponentEvent(e);
break;
case 103:
listener.componentHidden$java_awt_event_ComponentEvent(e);
break;
}
}});

Clazz.newMeth(C$, 'processFocusEvent$java_awt_event_FocusEvent',  function (e) {
var listener=this.focusListener;
if (listener != null ) {
var id=e.getID$();
switch (id) {
case 1004:
listener.focusGained$java_awt_event_FocusEvent(e);
break;
case 1005:
listener.focusLost$java_awt_event_FocusEvent(e);
break;
}
}});

Clazz.newMeth(C$, 'processKeyEvent$java_awt_event_KeyEvent',  function (e) {
var listener=this.keyListener;
if (listener != null  && ((this).秘isAWT$() || this.秘isFocusableSet || this.keyListener != null   ) ) {
var id=e.getID$();
switch (id) {
case 400:
listener.keyTyped$java_awt_event_KeyEvent(e);
break;
case 401:
listener.keyPressed$java_awt_event_KeyEvent(e);
break;
case 402:
listener.keyReleased$java_awt_event_KeyEvent(e);
break;
}
}});

Clazz.newMeth(C$, 'processMouseEvent$java_awt_event_MouseEvent',  function (e) {
var listener=this.mouseListener;
if (listener != null ) {
var id=e.getID$();
switch (id) {
case 501:
listener.mousePressed$java_awt_event_MouseEvent(e);
break;
case 502:
listener.mouseReleased$java_awt_event_MouseEvent(e);
break;
case 500:
listener.mouseClicked$java_awt_event_MouseEvent(e);
break;
case 505:
listener.mouseExited$java_awt_event_MouseEvent(e);
break;
case 504:
listener.mouseEntered$java_awt_event_MouseEvent(e);
break;
}
}});

Clazz.newMeth(C$, 'processMouseMotionEvent$java_awt_event_MouseEvent',  function (e) {
var listener=this.mouseMotionListener;
if (listener != null ) {
var id=e.getID$();
switch (id) {
case 503:
listener.mouseMoved$java_awt_event_MouseEvent(e);
break;
case 506:
listener.mouseDragged$java_awt_event_MouseEvent(e);
break;
}
}});

Clazz.newMeth(C$, 'processMouseWheelEvent$java_awt_event_MouseWheelEvent',  function (e) {
var listener=this.mouseWheelListener;
if (listener != null ) {
var id=e.getID$();
switch (id) {
case 507:
listener.mouseWheelMoved$java_awt_event_MouseWheelEvent(e);
break;
}
}});

Clazz.newMeth(C$, 'postsOldMouseEvents$',  function () {
return false;
});

Clazz.newMeth(C$, 'processInputMethodEvent$java_awt_event_InputMethodEvent',  function (e) {
var listener=this.inputMethodListener;
if (listener != null ) {
var id=e.getID$();
switch (id) {
case 1100:
listener.inputMethodTextChanged$java_awt_event_InputMethodEvent(e);
break;
case 1101:
listener.caretPositionChanged$java_awt_event_InputMethodEvent(e);
break;
}
}});

Clazz.newMeth(C$, 'processHierarchyEvent$java_awt_event_HierarchyEvent',  function (e) {
var listener=this.hierarchyListener;
if (listener != null ) {
var id=e.getID$();
switch (id) {
case 1400:
listener.hierarchyChanged$java_awt_event_HierarchyEvent(e);
break;
}
}});

Clazz.newMeth(C$, 'processHierarchyBoundsEvent$java_awt_event_HierarchyEvent',  function (e) {
var listener=this.hierarchyBoundsListener;
if (listener != null ) {
var id=e.getID$();
switch (id) {
case 1401:
listener.ancestorMoved$java_awt_event_HierarchyEvent(e);
break;
case 1402:
listener.ancestorResized$java_awt_event_HierarchyEvent(e);
break;
}
}});

Clazz.newMeth(C$, 'handleEvent$java_awt_Event',  function (evt) {
switch (evt.id) {
case 504:
return this.mouseEnter$java_awt_Event$I$I(evt, evt.x, evt.y);
case 505:
return this.mouseExit$java_awt_Event$I$I(evt, evt.x, evt.y);
case 503:
return this.mouseMove$java_awt_Event$I$I(evt, evt.x, evt.y);
case 501:
return this.mouseDown$java_awt_Event$I$I(evt, evt.x, evt.y);
case 506:
return this.mouseDrag$java_awt_Event$I$I(evt, evt.x, evt.y);
case 502:
return this.mouseUp$java_awt_Event$I$I(evt, evt.x, evt.y);
case 401:
case 403:
return this.keyDown$java_awt_Event$I(evt, evt.key);
case 402:
case 404:
return this.keyUp$java_awt_Event$I(evt, evt.key);
case 1001:
return this.action$java_awt_Event$O(evt, evt.arg);
case 1004:
return this.gotFocus$java_awt_Event$O(evt, evt.arg);
case 1005:
return this.lostFocus$java_awt_Event$O(evt, evt.arg);
}
return false;
});

Clazz.newMeth(C$, 'mouseDown$java_awt_Event$I$I',  function (evt, x, y) {
return false;
});

Clazz.newMeth(C$, 'mouseDrag$java_awt_Event$I$I',  function (evt, x, y) {
return false;
});

Clazz.newMeth(C$, 'mouseUp$java_awt_Event$I$I',  function (evt, x, y) {
return false;
});

Clazz.newMeth(C$, 'mouseMove$java_awt_Event$I$I',  function (evt, x, y) {
return false;
});

Clazz.newMeth(C$, 'mouseEnter$java_awt_Event$I$I',  function (evt, x, y) {
return false;
});

Clazz.newMeth(C$, 'mouseExit$java_awt_Event$I$I',  function (evt, x, y) {
return false;
});

Clazz.newMeth(C$, 'keyDown$java_awt_Event$I',  function (evt, key) {
return false;
});

Clazz.newMeth(C$, 'keyUp$java_awt_Event$I',  function (evt, key) {
return false;
});

Clazz.newMeth(C$, 'action$java_awt_Event$O',  function (evt, what) {
return false;
});

Clazz.newMeth(C$, 'addNotify$',  function () {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(this.getTreeLock$());
{
var peer=this.getOrCreatePeer$();
(this).秘setProxy$java_awt_Container(this.parent);
if (this.秘j2sInvalidateOnAdd) this.invalidate$();
if (this.dropTarget != null ) this.dropTarget.addNotify$java_awt_peer_ComponentPeer(peer);
this.peerFont=this.getFont$();
if (this.parent != null  && this.parent.peer != null  ) {
var parentContPeer=this.parent.peer;
}if (this.visible && peer != null  ) {
if (peer.isDisposed &&true) peer.setVisible$Z(true);
}if (this.hierarchyListener != null  || Long.$ne((Long.$and(this.eventMask,32768)),0 )  || $I$(6).enabledOnToolkit$J(32768) ) {
var e=Clazz.new_([this, 1400, this, this.parent, 2 | ((this.isRecursivelyVisible$()) ? 4 : 0)],$I$(22,1).c$$java_awt_Component$I$java_awt_Component$java_awt_Container$J);
this.dispatchEvent$java_awt_AWTEvent(e);
}}});

Clazz.newMeth(C$, 'getNativeContainer$',  function () {
var p=this.parent;
while (p != null  && !(Clazz.instanceOf(p, "java.applet.JSApplet"))  && Clazz.instanceOf(p.peer, "java.awt.peer.LightweightPeer") ){
p=p.getParent$();
}
return p;
});

Clazz.newMeth(C$, 'removeNotify$',  function () {
this.removeNotifyComp$();
});

Clazz.newMeth(C$, 'removeNotifyComp$',  function () {
$I$(8).clearMostRecentFocusOwner$java_awt_Component(this);
if ($I$(8).getCurrentKeyboardFocusManager$().getPermanentFocusOwner$() === this ) {
$I$(8).getCurrentKeyboardFocusManager$().setGlobalPermanentFocusOwner$java_awt_Component(null);
}if (this.isFocusOwner$() && $I$(8).isAutoFocusTransferEnabledFor$java_awt_Component(this) ) {
this.transferFocus$Z(true);
}var p=this.getOrCreatePeer$();
if (p != null ) {
if (this.visible) {
p.setVisible$Z(false);
}$I$(6).getEventQueue$().removeSourceEvents$O$Z(this, false);
$I$(8).getCurrentKeyboardFocusManager$().discardKeyEvents$java_awt_Component(this);
p.dispose$();
}if (this.hierarchyListener != null  || Long.$ne((Long.$and(this.eventMask,32768)),0 )  || $I$(6).enabledOnToolkit$J(32768) ) {
var e=Clazz.new_([this, 1400, this, this.parent, 2 | ((this.isRecursivelyVisible$()) ? 4 : 0)],$I$(22,1).c$$java_awt_Component$I$java_awt_Component$java_awt_Container$J);
this.dispatchEvent$java_awt_AWTEvent(e);
}});

Clazz.newMeth(C$, 'gotFocus$java_awt_Event$O',  function (evt, what) {
return false;
});

Clazz.newMeth(C$, 'lostFocus$java_awt_Event$O',  function (evt, what) {
return false;
});

Clazz.newMeth(C$, 'isFocusTraversable$',  function () {
if (this.isFocusTraversableOverridden == 0) {
this.isFocusTraversableOverridden=1;
}return this.focusable;
});

Clazz.newMeth(C$, 'isFocusable$',  function () {
return this.isFocusTraversable$();
});

Clazz.newMeth(C$, 'setFocusable$Z',  function (focusable) {
var oldFocusable;
{
oldFocusable=this.focusable;
this.focusable=focusable;
}this.isFocusTraversableOverridden=2;
this.秘isFocusableSet=true;
this.firePropertyChange$S$O$O("focusable", Boolean.valueOf$Z(oldFocusable), Boolean.valueOf$Z(focusable));
if (oldFocusable && !focusable ) {
if (this.isFocusOwner$() && $I$(8).isAutoFocusTransferEnabled$() ) {
this.transferFocus$Z(true);
}$I$(8).clearMostRecentFocusOwner$java_awt_Component(this);
}});

Clazz.newMeth(C$, 'isFocusTraversableOverridden$',  function () {
return (this.isFocusTraversableOverridden != 1);
});

Clazz.newMeth(C$, 'setFocusTraversalKeys$I$java_util_Set',  function (id, keystrokes) {
if (id < 0 || id >= 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid focus traversal key identifier"]);
}this.setFocusTraversalKeys_NoIDCheck$I$java_util_Set(id, keystrokes);
});

Clazz.newMeth(C$, 'getFocusTraversalKeys$I',  function (id) {
if (id < 0 || id >= 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid focus traversal key identifier"]);
}return this.getFocusTraversalKeys_NoIDCheck$I(id);
});

Clazz.newMeth(C$, 'setFocusTraversalKeys_NoIDCheck$I$java_util_Set',  function (id, keystrokes) {
var oldKeys;
{
if (this.focusTraversalKeys == null ) {
this.initializeFocusTraversalKeys$();
}if (keystrokes != null ) {
for (var keystroke, $keystroke = keystrokes.iterator$(); $keystroke.hasNext$()&&((keystroke=($keystroke.next$())),1);) {
if (keystroke == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["cannot set null focus traversal key"]);
}if (keystroke.getKeyChar$() != "\uffff") {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["focus traversal keys cannot map to KEY_TYPED events"]);
}for (var i=0; i < this.focusTraversalKeys.length; i++) {
if (i == id) {
continue;
}if (this.getFocusTraversalKeys_NoIDCheck$I(i).contains$O(keystroke)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["focus traversal keys must be unique for a Component"]);
}}
}
}oldKeys=this.focusTraversalKeys[id];
this.focusTraversalKeys[id]=(keystrokes != null ) ? $I$(30,"unmodifiableSet$java_util_Set",[Clazz.new_($I$(31,1).c$$java_util_Collection,[keystrokes])]) : null;
}this.firePropertyChange$S$O$O(C$.focusTraversalKeyPropertyNames[id], oldKeys, keystrokes);
});

Clazz.newMeth(C$, 'getFocusTraversalKeys_NoIDCheck$I',  function (id) {
var keystrokes=(this.focusTraversalKeys != null ) ? this.focusTraversalKeys[id] : null;
if (keystrokes != null ) {
return keystrokes;
} else {
var parent=this.parent;
if (parent != null ) {
return parent.getFocusTraversalKeys$I(id);
} else {
return $I$(8).getCurrentKeyboardFocusManager$().getDefaultFocusTraversalKeys$I(id);
}}});

Clazz.newMeth(C$, 'areFocusTraversalKeysSet$I',  function (id) {
if (id < 0 || id >= 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid focus traversal key identifier"]);
}return (this.focusTraversalKeys != null  && this.focusTraversalKeys[id] != null  );
});

Clazz.newMeth(C$, 'setFocusTraversalKeysEnabled$Z',  function (focusTraversalKeysEnabled) {
var oldFocusTraversalKeysEnabled;
{
oldFocusTraversalKeysEnabled=this.focusTraversalKeysEnabled;
this.focusTraversalKeysEnabled=focusTraversalKeysEnabled;
}this.firePropertyChange$S$Z$Z("focusTraversalKeysEnabled", oldFocusTraversalKeysEnabled, focusTraversalKeysEnabled);
});

Clazz.newMeth(C$, 'getFocusTraversalKeysEnabled$',  function () {
return this.focusTraversalKeysEnabled;
});

Clazz.newMeth(C$, 'requestFocus$',  function () {
this.requestFocusHelper$Z$Z(false, true);
});

Clazz.newMeth(C$, 'requestFocus$sun_awt_CausedFocusEvent_Cause',  function (cause) {
this.requestFocusHelper$Z$Z$sun_awt_CausedFocusEvent_Cause(false, true, cause);
});

Clazz.newMeth(C$, 'requestFocus$Z',  function (temporary) {
return this.requestFocusHelper$Z$Z(temporary, true);
});

Clazz.newMeth(C$, 'requestFocus$Z$sun_awt_CausedFocusEvent_Cause',  function (temporary, cause) {
return this.requestFocusHelper$Z$Z$sun_awt_CausedFocusEvent_Cause(temporary, true, cause);
});

Clazz.newMeth(C$, 'requestFocusInWindow$',  function () {
return this.requestFocusHelper$Z$Z(false, false);
});

Clazz.newMeth(C$, 'requestFocusInWindow$sun_awt_CausedFocusEvent_Cause',  function (cause) {
return this.requestFocusHelper$Z$Z$sun_awt_CausedFocusEvent_Cause(false, false, cause);
});

Clazz.newMeth(C$, 'requestFocusInWindow$Z',  function (temporary) {
return this.requestFocusHelper$Z$Z(temporary, false);
});

Clazz.newMeth(C$, 'requestFocusInWindow$Z$sun_awt_CausedFocusEvent_Cause',  function (temporary, cause) {
return this.requestFocusHelper$Z$Z$sun_awt_CausedFocusEvent_Cause(temporary, false, cause);
});

Clazz.newMeth(C$, 'requestFocusHelper$Z$Z',  function (temporary, focusedWindowChangeAllowed) {
return this.requestFocusHelper$Z$Z$sun_awt_CausedFocusEvent_Cause(temporary, focusedWindowChangeAllowed, $I$(32).UNKNOWN);
});

Clazz.newMeth(C$, 'requestFocusHelper$Z$Z$sun_awt_CausedFocusEvent_Cause',  function (temporary, focusedWindowChangeAllowed, cause) {
if (!p$1.isRequestFocusAccepted$Z$Z$sun_awt_CausedFocusEvent_Cause.apply(this, [temporary, focusedWindowChangeAllowed, cause])) {
return false;
}$I$(8).setMostRecentFocusOwner$java_awt_Component(this);
var window=this;
while ((window != null ) && !window.isWindowOrJSApplet$() ){
if (!window.isVisible$()) {
return false;
}window=window.parent;
}
var peer=this.peer;
var heavyweight=(!(this).秘winOrApplet && Clazz.instanceOf(peer, "java.awt.peer.LightweightPeer") ) ? this.getNativeContainer$() : this;
if (heavyweight == null  || !heavyweight.isVisible$() ) {
return false;
}peer=heavyweight.peer;
if (peer == null ) {
return false;
}var time=$I$(16).getMostRecentEventTime$();
var success=peer.requestFocus$java_awt_Component$Z$Z$J$sun_awt_CausedFocusEvent_Cause(this, temporary, focusedWindowChangeAllowed, time, cause);
if (!success) {
$I$(8).getCurrentKeyboardFocusManager$sun_awt_AppContext(this.appContext).dequeueKeyEvents$J$java_awt_Component(time, this);
} else {
}return success;
});

Clazz.newMeth(C$, 'isWindowOrJSApplet$',  function () {
return (this).秘winOrApplet;
});

Clazz.newMeth(C$, 'isJ2SWindowButNotJInternalFrame$',  function () {
return Clazz.instanceOf(this, "java.awt.Window") && (this).getUIClassID$() !== "InternalFrameUI"  ;
});

Clazz.newMeth(C$, 'isRequestFocusAccepted$Z$Z$sun_awt_CausedFocusEvent_Cause',  function (temporary, focusedWindowChangeAllowed, cause) {
if (!this.isFocusable$() || !this.isVisible$() ) {
return false;
}var peer=this.peer;
if (peer == null ) {
return false;
}var window=this.getContainingWindow$();
if (window == null  || !(window).isFocusableWindow$() ) {
return false;
}var focusOwner=$I$(8).getMostRecentFocusOwner$java_awt_Window(window);
if (focusOwner == null ) {
focusOwner=$I$(8).getCurrentKeyboardFocusManager$().getFocusOwner$();
if (focusOwner != null  && focusOwner.getContainingWindow$() !== window  ) {
focusOwner=null;
}}if (focusOwner === this  || focusOwner == null  ) {
return true;
}if ($I$(32).ACTIVATION === cause ) {
return true;
}if (C$.requestFocusController == null ) C$.requestFocusController=$I$(33).focusController;
var ret=C$.requestFocusController.acceptRequestFocus$java_awt_Component$java_awt_Component$Z$Z$sun_awt_CausedFocusEvent_Cause(focusOwner, this, temporary, focusedWindowChangeAllowed, cause);
return ret;
}, p$1);

Clazz.newMeth(C$, 'setRequestFocusController$sun_awt_RequestFocusController',  function (requestController) {
if (requestController == null ) {
C$.requestFocusController=Clazz.new_($I$(34,1));
} else {
C$.requestFocusController=requestController;
}}, 1);

Clazz.newMeth(C$, 'getFocusCycleRootAncestor$',  function () {
var rootAncestor=this.parent;
while (rootAncestor != null  && !rootAncestor.isFocusCycleRoot$() ){
rootAncestor=rootAncestor.parent;
}
return rootAncestor;
});

Clazz.newMeth(C$, 'isFocusCycleRoot$java_awt_Container',  function (container) {
return this.isFocusCycleRootComp$java_awt_Container(container);
});

Clazz.newMeth(C$, 'isFocusCycleRootComp$java_awt_Container',  function (container) {
var rootAncestor=this.getFocusCycleRootAncestor$();
return (rootAncestor === container );
});

Clazz.newMeth(C$, 'getTraversalRoot$',  function () {
return this.getFocusCycleRootAncestor$();
});

Clazz.newMeth(C$, 'transferFocus$',  function () {
this.nextFocus$();
});

Clazz.newMeth(C$, 'nextFocus$',  function () {
this.transferFocus$Z(false);
});

Clazz.newMeth(C$, 'transferFocus$Z',  function (clearOnFailure) {
var toFocus=this.getNextFocusCandidate$();
var res=false;
if (toFocus != null  && !toFocus.isFocusOwner$()  && toFocus !== this  ) {
res=toFocus.requestFocusInWindow$sun_awt_CausedFocusEvent_Cause($I$(32).TRAVERSAL_FORWARD);
}if (clearOnFailure && !res ) {
$I$(8).getCurrentKeyboardFocusManager$().clearGlobalFocusOwner$();
}return res;
});

Clazz.newMeth(C$, 'getNextFocusCandidate$',  function () {
var rootAncestor=this.getTraversalRoot$();
var comp=this;
while (rootAncestor != null  && !(rootAncestor.isShowing$() && rootAncestor.canBeFocusOwner$() ) ){
comp=rootAncestor;
rootAncestor=comp.getFocusCycleRootAncestor$();
}
var candidate=null;
if (rootAncestor != null ) {
var policy=rootAncestor.getFocusTraversalPolicy$();
var toFocus=policy.getComponentAfter$java_awt_Container$java_awt_Component(rootAncestor, comp);
if (toFocus == null ) {
toFocus=policy.getDefaultComponent$java_awt_Container(rootAncestor);
}candidate=toFocus;
}return candidate;
});

Clazz.newMeth(C$, 'transferFocusBackward$',  function () {
this.transferFocusBackward$Z(false);
});

Clazz.newMeth(C$, 'transferFocusBackward$Z',  function (clearOnFailure) {
var rootAncestor=this.getTraversalRoot$();
var comp=this;
while (rootAncestor != null  && !(rootAncestor.isShowing$() && rootAncestor.canBeFocusOwner$() ) ){
comp=rootAncestor;
rootAncestor=comp.getFocusCycleRootAncestor$();
}
var res=false;
if (rootAncestor != null ) {
var policy=rootAncestor.getFocusTraversalPolicy$();
var toFocus=policy.getComponentBefore$java_awt_Container$java_awt_Component(rootAncestor, comp);
if (toFocus == null ) {
toFocus=policy.getDefaultComponent$java_awt_Container(rootAncestor);
}if (toFocus != null ) {
res=toFocus.requestFocusInWindow$sun_awt_CausedFocusEvent_Cause($I$(32).TRAVERSAL_BACKWARD);
}}if (!res) {
$I$(8).getCurrentKeyboardFocusManager$().clearGlobalFocusOwner$();
}return res;
});

Clazz.newMeth(C$, 'transferFocusUpCycle$',  function () {
var rootAncestor;
for (rootAncestor=this.getFocusCycleRootAncestor$(); rootAncestor != null  && !(rootAncestor.isShowing$() && rootAncestor.isFocusable$() && rootAncestor.isEnabled$()  ) ; rootAncestor=rootAncestor.getFocusCycleRootAncestor$()) {
}
if (rootAncestor != null ) {
var rootAncestorRootAncestor=rootAncestor.getFocusCycleRootAncestor$();
$I$(8).getCurrentKeyboardFocusManager$().setGlobalCurrentFocusCycleRoot$java_awt_Container((rootAncestorRootAncestor != null ) ? rootAncestorRootAncestor : rootAncestor);
rootAncestor.requestFocus$sun_awt_CausedFocusEvent_Cause($I$(32).TRAVERSAL_UP);
} else {
var window=this.getContainingWindow$();
if (window != null ) {
var toFocus=window.getFocusTraversalPolicy$().getDefaultComponent$java_awt_Container(window);
if (toFocus != null ) {
$I$(8).getCurrentKeyboardFocusManager$().setGlobalCurrentFocusCycleRoot$java_awt_Container(window);
toFocus.requestFocus$sun_awt_CausedFocusEvent_Cause($I$(32).TRAVERSAL_UP);
}}}});

Clazz.newMeth(C$, 'hasFocus$',  function () {
return ($I$(8).getCurrentKeyboardFocusManager$().getFocusOwner$() === this );
});

Clazz.newMeth(C$, 'isFocusOwner$',  function () {
return this.hasFocus$();
});

Clazz.newMeth(C$, 'setAutoFocusTransferOnDisposal$Z',  function (value) {
this.autoFocusTransferOnDisposal=value;
});

Clazz.newMeth(C$, 'isAutoFocusTransferOnDisposal$',  function () {
return this.autoFocusTransferOnDisposal;
});

Clazz.newMeth(C$, 'add$java_awt_PopupMenu',  function (popup) {
popup.setInvoker$java_awt_Component(this);
});

Clazz.newMeth(C$, 'paramString$',  function () {
return this.paramStringComp$();
});

Clazz.newMeth(C$, 'paramStringComp$',  function () {
var thisName=this.getName$();
var str=(thisName != null  ? thisName : "");
str+=(
this.__JSID__ +
"");
if (!this.isValid$()) {
str+=",invalid";
}if (!this.visible) {
str+=",hidden";
}if (!this.enabled) {
str+=",disabled";
}str+=",parent:" + (this.parent == null  ? null : this.parent.getName$()) + "," + this.x + "," + this.y + "," + this.width + "x" + this.height ;
return str;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[" + this.paramString$() + "]" ;
});

Clazz.newMeth(C$, 'addPropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(p$1.getChangeSupportLock.apply(this, []));
{
if (listener == null ) {
return;
}if (this.changeSupport == null ) {
this.changeSupport=Clazz.new_($I$(35,1).c$$O,[this]);
}this.changeSupport.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
}});

Clazz.newMeth(C$, 'removePropertyChangeListener$java_beans_PropertyChangeListener',  function (listener) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(p$1.getChangeSupportLock.apply(this, []));
{
if (listener == null  || this.changeSupport == null  ) {
return;
}this.changeSupport.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
}});

Clazz.newMeth(C$, 'getPropertyChangeListeners$',  function () {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(p$1.getChangeSupportLock.apply(this, []));
{
if (this.changeSupport == null ) {
return Clazz.array($I$(29), [0]);
}return this.changeSupport.getPropertyChangeListeners$();
}});

Clazz.newMeth(C$, 'addPropertyChangeListener$S$java_beans_PropertyChangeListener',  function (propertyName, listener) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(p$1.getChangeSupportLock.apply(this, []));
{
if (listener == null ) {
return;
}if (this.changeSupport == null ) {
this.changeSupport=Clazz.new_($I$(35,1).c$$O,[this]);
}this.changeSupport.addPropertyChangeListener$S$java_beans_PropertyChangeListener(propertyName, listener);
}});

Clazz.newMeth(C$, 'removePropertyChangeListener$S$java_beans_PropertyChangeListener',  function (propertyName, listener) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(p$1.getChangeSupportLock.apply(this, []));
{
if (listener == null  || this.changeSupport == null  ) {
return;
}this.changeSupport.removePropertyChangeListener$S$java_beans_PropertyChangeListener(propertyName, listener);
}});

Clazz.newMeth(C$, 'getPropertyChangeListeners$S',  function (propertyName) {
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(p$1.getChangeSupportLock.apply(this, []));
{
if (this.changeSupport == null ) {
return Clazz.array($I$(29), [0]);
}return this.changeSupport.getPropertyChangeListeners$S(propertyName);
}});

Clazz.newMeth(C$, 'firePropertyChange$S$O$O',  function (propertyName, oldValue, newValue) {
var changeSupport;
/*sync org.eclipse.jdt.core.dom.MethodInvocation*/(p$1.getChangeSupportLock.apply(this, []));
{
changeSupport=this.changeSupport;
}if (changeSupport == null  || (oldValue != null  && newValue != null   && oldValue.equals$O(newValue) ) ) {
return;
}changeSupport.firePropertyChange$S$O$O(propertyName, oldValue, newValue);
});

Clazz.newMeth(C$, 'firePropertyChange$S$Z$Z',  function (propertyName, oldValue, newValue) {
var changeSupport=this.changeSupport;
if (changeSupport == null  || oldValue == newValue  ) {
return;
}changeSupport.firePropertyChange$S$O$O(propertyName, Boolean.valueOf$Z(oldValue), Boolean.valueOf$Z(newValue));
});

Clazz.newMeth(C$, 'firePropertyChange$S$I$I',  function (propertyName, oldValue, newValue) {
var changeSupport=this.changeSupport;
if (changeSupport == null  || oldValue == newValue ) {
return;
}changeSupport.firePropertyChange$S$O$O(propertyName, Integer.valueOf$I(oldValue), Integer.valueOf$I(newValue));
});

Clazz.newMeth(C$, 'firePropertyChange$S$B$B',  function (propertyName, oldValue, newValue) {
if (this.changeSupport == null  || oldValue == newValue ) {
return;
}this.firePropertyChange$S$O$O(propertyName, Byte.valueOf$B(oldValue), Byte.valueOf$B(newValue));
});

Clazz.newMeth(C$, 'firePropertyChange$S$C$C',  function (propertyName, oldValue, newValue) {
if (this.changeSupport == null  || oldValue == newValue ) {
return;
}this.firePropertyChange$S$O$O(propertyName, Clazz.new_(Character.c$$C,[oldValue]), Clazz.new_(Character.c$$C,[newValue]));
});

Clazz.newMeth(C$, 'firePropertyChange$S$H$H',  function (propertyName, oldValue, newValue) {
if (this.changeSupport == null  || oldValue == newValue ) {
return;
}this.firePropertyChange$S$O$O(propertyName, Short.valueOf$H(oldValue), Short.valueOf$H(newValue));
});

Clazz.newMeth(C$, 'firePropertyChange$S$J$J',  function (propertyName, oldValue, newValue) {
if (this.changeSupport == null  || Long.$eq(oldValue,newValue ) ) {
return;
}this.firePropertyChange$S$O$O(propertyName, Long.valueOf$J(oldValue), Long.valueOf$J(newValue));
});

Clazz.newMeth(C$, 'firePropertyChange$S$F$F',  function (propertyName, oldValue, newValue) {
if (this.changeSupport == null  || oldValue == newValue  ) {
return;
}this.firePropertyChange$S$O$O(propertyName, Float.valueOf$F(oldValue), Float.valueOf$F(newValue));
});

Clazz.newMeth(C$, 'firePropertyChange$S$D$D',  function (propertyName, oldValue, newValue) {
if (this.changeSupport == null  || oldValue == newValue  ) {
return;
}this.firePropertyChange$S$O$O(propertyName, Double.valueOf$D(oldValue), Double.valueOf$D(newValue));
});

Clazz.newMeth(C$, 'setComponentOrientation$java_awt_ComponentOrientation',  function (o) {
var oldValue=this.componentOrientation;
this.componentOrientation=o;
this.firePropertyChange$S$O$O("componentOrientation", oldValue, o);
this.invalidateIfValid$();
});

Clazz.newMeth(C$, 'getComponentOrientation$',  function () {
return this.componentOrientation;
});

Clazz.newMeth(C$, 'applyComponentOrientation$java_awt_ComponentOrientation',  function (orientation) {
this.applyCompOrientComp$java_awt_ComponentOrientation(orientation);
});

Clazz.newMeth(C$, 'applyCompOrientComp$java_awt_ComponentOrientation',  function (orientation) {
if (orientation == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}this.setComponentOrientation$java_awt_ComponentOrientation(orientation);
});

Clazz.newMeth(C$, 'canBeFocusOwner$',  function () {
if (this.isEnabled$() && this.isDisplayable$() && this.isVisible$() && this.isFocusable$()  ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'canBeFocusOwnerRecursively$',  function () {
if (!this.canBeFocusOwner$()) {
return false;
}if (this.parent != null ) {
return this.parent.canContainFocusOwner$java_awt_Component(this);
}return true;
});

Clazz.newMeth(C$, 'relocateComponent$',  function () {
});

Clazz.newMeth(C$, 'getContainingWindow$',  function () {
return $I$(36).getContainingWindow$java_awt_Component(this);
});

Clazz.newMeth(C$, 'isInstanceOf$O$S',  function (obj, className) {
if (obj == null ) return false;
if (className == null ) return false;
var cls=obj.getClass$();
while (cls != null ){
if (cls.getName$().equals$O(className)) {
return true;
}cls=cls.getSuperclass$();
}
return false;
}, 1);

Clazz.newMeth(C$, 'areBoundsValid$',  function () {
var cont=this.getContainer$();
return cont == null  || cont.isValid$()  || cont.getLayout$() == null  ;
});

Clazz.newMeth(C$, 'getLocationOnWindow$',  function () {
var curLocation=this.getLocation$();
for (var parent=this.getContainer$(); parent != null  && !parent.isWindowOrJSApplet$() ; parent=parent.getContainer$()) {
curLocation.x+=parent.getX$();
curLocation.y+=parent.getY$();
}
return curLocation;
});

Clazz.newMeth(C$, 'getSiblingIndexAbove$',  function () {
var parent=this.getContainer$();
if (parent == null ) {
return -1;
}var nextAbove=parent.getComponentZOrder$java_awt_Component(this) - 1;
return nextAbove < 0 ? -1 : nextAbove;
});

Clazz.newMeth(C$, 'getSiblingIndexBelow$',  function () {
var parent=this.getContainer$();
if (parent == null ) {
return -1;
}var nextBelow=parent.getComponentZOrder$java_awt_Component(this) + 1;
return nextBelow >= parent.getComponentCount$() ? -1 : nextBelow;
});

Clazz.newMeth(C$, 'mixOnShowing$',  function () {
});

Clazz.newMeth(C$, 'mixOnHiding$Z',  function (isLightweight) {
});

Clazz.newMeth(C$, 'mixOnReshaping$',  function () {
$I$(5).taintUI$java_awt_Component(this);
});

Clazz.newMeth(C$, 'mixOnZOrderChanging$I$I',  function (oldZorder, newZorder) {
});

Clazz.newMeth(C$, 'mixOnValidating$',  function () {
});

Clazz.newMeth(C$, 'doesClassImplement$Class$S',  function (cls, interfaceName) {
if (cls == null ) return false;
for (var c, $c = 0, $$c = cls.getInterfaces$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) {
if (c.getName$().equals$O(interfaceName)) {
return true;
}}
return C$.doesClassImplement$Class$S(cls.getSuperclass$(), interfaceName);
}, 1);

Clazz.newMeth(C$, 'doesImplement$O$S',  function (obj, interfaceName) {
if (obj == null ) return false;
if (interfaceName == null ) return false;
return C$.doesClassImplement$Class$S(obj.getClass$(), interfaceName);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.focusTraversalKeyPropertyNames=Clazz.array(String, -1, ["forwardFocusTraversalKeys", "backwardFocusTraversalKeys", "upCycleFocusTraversalKeys", "downCycleFocusTraversalKeys"]);
C$.coalesceMap=Clazz.new_($I$(1,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Component, "AWTTreeLock", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.Component, "BaselineResizeBehavior", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "CONSTANT_ASCENT", 0, []);
Clazz.newEnumConst($vals, C$.c$, "CONSTANT_DESCENT", 1, []);
Clazz.newEnumConst($vals, C$.c$, "CENTER_OFFSET", 2, []);
Clazz.newEnumConst($vals, C$.c$, "OTHER", 3, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Component, "DummyRequestFocusController", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'sun.awt.RequestFocusController');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'acceptRequestFocus$java_awt_Component$java_awt_Component$Z$Z$sun_awt_CausedFocusEvent_Cause',  function (from, to, temporary, focusedWindowChangeAllowed, cause) {
return true;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:01 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
