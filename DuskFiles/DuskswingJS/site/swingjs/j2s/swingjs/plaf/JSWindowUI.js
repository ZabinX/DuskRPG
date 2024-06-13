(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.plaf.JSComponentUI','swingjs.api.js.DOMNode']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSWindowUI", null, 'swingjs.plaf.JSComponentUI', ['java.awt.peer.WindowPeer', 'java.awt.event.WindowListener', 'java.awt.event.ComponentListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.defaultWidth=400;
this.defaultHeight=400;
},1);

C$.$fields$=[['Z',['isFrame','isDialog','isPopup'],'I',['z','defaultWidth','defaultHeight'],'O',['frameNode','swingjs.api.js.DOMNode','+titleBarNode','+titleNode','+closerNode','+layerNode','w','javax.swing.JWindow','window','java.awt.Window','font','java.awt.Font','modalNode','swingjs.api.js.DOMNode']]]

Clazz.newMeth(C$, 'setFrame$java_awt_Window$Z',  function (target, isFrame) {
this.window=target;
this.w=this.window;
this.isFrame=isFrame;
this.isContainer=this.isWindow=true;
var viewer=this.jc.秘appletViewer;
this.applet=viewer.html5Applet;
return this;
});

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
if (this.domNode == null ) {
this.containerNode=this.domNode=$I$(1,"newDOMObject$S$S$SA",["div", this.id, Clazz.array(String, -1, [])]);
this.setWindowClass$();
this.bindWindowEvents$();
}return this.domNode;
});

Clazz.newMeth(C$, 'setWindowClass$',  function () {
this.addClass$swingjs_api_js_DOMNode$S(this.domNode, "swingjs-window");
this.setZ$I(this.z);
});

Clazz.newMeth(C$, 'toFront$',  function () {
if (this.jc.秘isDesktop$()) {
this.jc.requestFocus$();
return;
}this.z=this.J2S.setWindowZIndex(this.domNode, 2147483647);
this.setZ$I(this.z);
if (this.modalNode != null ) $I$(2).setZ(this.modalNode, this.z - 1);
});

Clazz.newMeth(C$, 'toBack$',  function () {
this.z=this.J2S.setWindowZIndex(this.domNode, -2147483648);
this.setZ$I(this.z);
if (this.modalNode != null ) $I$(2).setZ(this.modalNode, this.z - 1);
});

Clazz.newMeth(C$, 'updateAlwaysOnTopState$',  function () {
});

Clazz.newMeth(C$, 'updateFocusableWindowState$',  function () {
System.out.println$S("JSWindow updateFocusable");
});

Clazz.newMeth(C$, 'requestWindowFocus$',  function () {
return false;
});

Clazz.newMeth(C$, 'setModalBlocked$java_awt_Dialog$Z',  function (blocker, blocked) {
this.modalBlocked=blocked;
});

Clazz.newMeth(C$, 'setModalBlocked$java_awt_JSDialog$Z',  function (blocker, blocked) {
this.modalBlocked=blocked;
});

Clazz.newMeth(C$, 'updateMinimumSize$',  function () {
});

Clazz.newMeth(C$, 'updateIconImages$',  function () {
});

Clazz.newMeth(C$, 'setOpacity$F',  function (opacity) {
});

Clazz.newMeth(C$, 'setOpaque$Z',  function (isOpaque) {
});

Clazz.newMeth(C$, 'updateWindow$java_awt_image_BufferedImage',  function (backBuffer) {
});

Clazz.newMeth(C$, 'repositionSecurityWarning$',  function () {
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.J2S.unsetMouse(this.domNode);
if (this.modalNode != null ) $I$(2).dispose(this.modalNode);
C$.superclazz.prototype.dispose$.apply(this, []);
});

Clazz.newMeth(C$, 'beginValidate$',  function () {
if (this.isDisposed) {
C$.setChildVisibilities$javax_swing_JComponent(this.window);
}});

Clazz.newMeth(C$, 'endValidate$',  function () {
if (this.isDisposed) {
this.undisposeUI$swingjs_api_js_DOMNode(null);
this.bindWindowEvents$();
this.isDisposed=false;
}});

Clazz.newMeth(C$, 'bindWindowEvents$',  function () {
this.setJ2sMouseHandler$();
this.setDraggableEvents$();
this.addJQueryFocusCallbacks$();
if (this.closerNode != null ) this.bindJQueryEvents$swingjs_api_js_DOMNode$S$I(this.closerNode, "click pointerup pointerenter pointerout mouseup mouseenter mouseout", -1);
});

Clazz.newMeth(C$, 'setDraggableEvents$',  function () {
});

Clazz.newMeth(C$, 'setChildVisibilities$javax_swing_JComponent',  function (jc) {
for (var i=jc.getComponentCount$(); --i >= 0; ) {
var c=jc.getComponent$I(i);
C$.setChildVisibilities$javax_swing_JComponent(c);
}
var ui=jc.ui;
if (jc.isVisible$()) ui.setVisible$Z(true);
}, 1);

Clazz.newMeth(C$, 'getInsets$',  function () {
return $I$(1).zeroInsets;
});

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
if (!this.isPopup) {
$I$(1).hideMenusAndToolTip$();
}C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
this.toFront$();
});

Clazz.newMeth(C$, 'windowOpened$java_awt_event_WindowEvent',  function (e) {
this.setComponentFocus$();
});

Clazz.newMeth(C$, 'windowClosing$java_awt_event_WindowEvent',  function (e) {
$I$(1).hideMenusAndToolTip$();
});

Clazz.newMeth(C$, 'windowClosed$java_awt_event_WindowEvent',  function (e) {
$I$(1).hideMenusAndToolTip$();
});

Clazz.newMeth(C$, 'windowIconified$java_awt_event_WindowEvent',  function (e) {
$I$(1).hideMenusAndToolTip$();
});

Clazz.newMeth(C$, 'windowDeiconified$java_awt_event_WindowEvent',  function (e) {
$I$(1).hideMenusAndToolTip$();
});

Clazz.newMeth(C$, 'windowActivated$java_awt_event_WindowEvent',  function (e) {
});

Clazz.newMeth(C$, 'windowDeactivated$java_awt_event_WindowEvent',  function (e) {
$I$(1).hideMenusAndToolTip$();
});

Clazz.newMeth(C$, 'componentResized$java_awt_event_ComponentEvent',  function (e) {
$I$(1).hideMenusAndToolTip$();
});

Clazz.newMeth(C$, 'componentMoved$java_awt_event_ComponentEvent',  function (e) {
$I$(1).hideMenusAndToolTip$();
});

Clazz.newMeth(C$, 'componentShown$java_awt_event_ComponentEvent',  function (e) {
$I$(1).hideMenusAndToolTip$();
});

Clazz.newMeth(C$, 'componentHidden$java_awt_event_ComponentEvent',  function (e) {
$I$(1).hideMenusAndToolTip$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
