(function(){var P$=Clazz.newPackage("sun.awt"),I$=[[0,'java.awt.Dimension','java.awt.Point','java.awt.Insets','java.awt.Rectangle']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "NullComponentPeer", null, null, ['java.awt.peer.LightweightPeer', 'java.awt.peer.PanelPeer']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isObscured$',  function () {
return false;
});

Clazz.newMeth(C$, 'canDetermineObscurity$',  function () {
return false;
});

Clazz.newMeth(C$, 'isFocusable$',  function () {
return false;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
});

Clazz.newMeth(C$, 'show$',  function () {
});

Clazz.newMeth(C$, 'hide$',  function () {
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (b) {
});

Clazz.newMeth(C$, 'enable$',  function () {
});

Clazz.newMeth(C$, 'disable$',  function () {
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics',  function (g) {
});

Clazz.newMeth(C$, 'repaint$J$I$I$I$I',  function (tm, x, y, width, height) {
});

Clazz.newMeth(C$, 'print$java_awt_Graphics',  function (g) {
});

Clazz.newMeth(C$, 'setBounds$I$I$I$I$I',  function (x, y, width, height, op) {
});

Clazz.newMeth(C$, 'reshape$I$I$I$I',  function (x, y, width, height) {
});

Clazz.newMeth(C$, 'coalescePaintEvent$java_awt_event_PaintEvent',  function (e) {
});

Clazz.newMeth(C$, 'handleEvent$java_awt_Event',  function (e) {
return false;
});

Clazz.newMeth(C$, 'handleEvent$java_awt_AWTEvent',  function (arg0) {
});

Clazz.newMeth(C$, 'getPreferredSize$',  function () {
return Clazz.new_($I$(1,1).c$$I$I,[1, 1]);
});

Clazz.newMeth(C$, 'getMinimumSize$',  function () {
return Clazz.new_($I$(1,1).c$$I$I,[1, 1]);
});

Clazz.newMeth(C$, 'getToolkit$',  function () {
return null;
});

Clazz.newMeth(C$, 'getColorModel$',  function () {
return null;
});

Clazz.newMeth(C$, 'getGraphics$',  function () {
return null;
});

Clazz.newMeth(C$, 'getGraphicsConfiguration$',  function () {
return null;
});

Clazz.newMeth(C$, 'getFontMetrics$java_awt_Font',  function (font) {
return null;
});

Clazz.newMeth(C$, 'dispose$',  function () {
});

Clazz.newMeth(C$, 'setForeground$java_awt_Color',  function (c) {
});

Clazz.newMeth(C$, 'setBackground$java_awt_Color',  function (c) {
});

Clazz.newMeth(C$, 'setFont$java_awt_Font',  function (f) {
});

Clazz.newMeth(C$, 'updateCursorImmediately$',  function () {
});

Clazz.newMeth(C$, 'setCursor$java_awt_Cursor',  function (cursor) {
});

Clazz.newMeth(C$, 'requestFocus$java_awt_Component$Z$Z$J$sun_awt_CausedFocusEvent_Cause',  function (lightweightChild, temporary, focusedWindowChangeAllowed, time, cause) {
return false;
});

Clazz.newMeth(C$, 'createImage$java_awt_image_ImageProducer',  function (producer) {
return null;
});

Clazz.newMeth(C$, 'createImage$I$I',  function (width, height) {
return null;
});

Clazz.newMeth(C$, 'prepareImage$java_awt_Image$I$I$java_awt_image_ImageObserver',  function (img, w, h, o) {
return false;
});

Clazz.newMeth(C$, 'checkImage$java_awt_Image$I$I$java_awt_image_ImageObserver',  function (img, w, h, o) {
return 0;
});

Clazz.newMeth(C$, 'getLocationOnScreen$',  function () {
return Clazz.new_($I$(2,1).c$$I$I,[0, 0]);
});

Clazz.newMeth(C$, 'insets$',  function () {
return Clazz.new_($I$(3,1).c$$I$I$I$I,[0, 0, 0, 0]);
});

Clazz.newMeth(C$, 'isPaintPending$',  function () {
return false;
});

Clazz.newMeth(C$, 'handlesWheelScrolling$',  function () {
return false;
});

Clazz.newMeth(C$, 'createVolatileImage$I$I',  function (width, height) {
return null;
});

Clazz.newMeth(C$, 'getBackBuffer$',  function () {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Page-flipping is not allowed on a lightweight component"]);
});

Clazz.newMeth(C$, 'destroyBuffers$',  function () {
});

Clazz.newMeth(C$, 'isReparentSupported$',  function () {
return false;
});

Clazz.newMeth(C$, 'reparent$java_awt_peer_ContainerPeer',  function (newNativeParent) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'restack$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'isRestackSupported$',  function () {
return false;
});

Clazz.newMeth(C$, 'layout$',  function () {
});

Clazz.newMeth(C$, 'getBounds$',  function () {
return Clazz.new_($I$(4,1).c$$I$I$I$I,[0, 0, 0, 0]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:42 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
