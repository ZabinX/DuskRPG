(function(){var P$=Clazz.newPackage("swingjs"),p$1={},I$=[[0,'swingjs.JSUtil','Thread','java.awt.event.FocusEvent','swingjs.JSToolkit','java.awt.JSComponent','java.awt.event.WindowEvent','java.awt.KeyboardFocusManager']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSFocusPeer", null, null, 'java.awt.peer.KeyboardFocusManagerPeer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['currentWindow','java.awt.Window','currentFocusOwner','java.awt.Component']]]

Clazz.newMeth(C$, 'setCurrentFocusedWindow$java_awt_Window',  function (win) {
this.currentWindow=win;
});

Clazz.newMeth(C$, 'clearGlobalFocusOwner$java_awt_Window',  function (activeWindow) {
this.currentFocusOwner=null;
});

Clazz.newMeth(C$, 'getCurrentFocusedWindow$',  function () {
var active=p$1.getAccessibleActiveElement.apply(this, []);
var o=$I$(1).jQuery.$(active).closest("swingjs-window");
return this.currentWindow=C$.getAccessibleComponentFor$swingjs_api_js_DOMNode(o[0]  ||null);
});

Clazz.newMeth(C$, 'getCurrentFocusOwner$O',  function (related) {
this.currentFocusOwner=C$.getAccessibleComponentFor$swingjs_api_js_DOMNode(related == null  ? p$1.getAccessibleActiveElement.apply(this, []) : related);
if (this.currentFocusOwner == null ) this.currentWindow=null;
return this.currentFocusOwner;
});

Clazz.newMeth(C$, 'setCurrentFocusOwner$java_awt_Component',  function (comp) {
this.currentFocusOwner=comp;
if (comp == null ) return;
((comp).ui).focus$();
});

Clazz.newMeth(C$, 'getAccessibleActiveElement',  function () {
var node=C$.getActiveElement$();
return (node == null  || C$.getAccessibleComponentFor$swingjs_api_js_DOMNode(node) == null   ? null : node);
}, p$1);

Clazz.newMeth(C$, 'getActiveElement$',  function () {
{
var node = document.activeElement;
return  (!node || node == document.body || !node.ui && !node["data-component"] ? null : node);
}
}, 1);

Clazz.newMeth(C$, 'getAccessibleComponentFor$swingjs_api_js_DOMNode',  function (node) {
var c=node && node.ui && node.ui.jc || node && node["data-component"]||null;
return (c != null  && c.getAppContext$().getThreadGroup$() === $I$(2).currentThread$().getThreadGroup$()   ? c : null);
}, 1);

Clazz.newMeth(C$, 'handleJSMouseEventFocus$java_awt_AWTEvent',  function (e) {
System.out.println$S("handling mouseeventfocus event " + e);
});

Clazz.newMeth(C$, 'getCurrentFocusOwner$',  function () {
return this.getCurrentFocusOwner$O(null);
});

Clazz.newMeth(C$, 'handleJSFocus$O$O$Z',  function (jco, related, focusGained) {
var c0=jco;
var e;
if (related == null ) {
e=Clazz.new_($I$(3,1).c$$java_awt_Component$I,[c0, focusGained ? 1004 : 1005]);
c0.dispatchEvent$java_awt_AWTEvent(e);
return;
}var other;
if (focusGained) {
other=C$.getAccessibleComponentFor$swingjs_api_js_DOMNode(related);
if (other != null  && other !== c0  ) {
other.dispatchEvent$java_awt_AWTEvent(Clazz.new_($I$(3,1).c$$java_awt_Component$I$Z$java_awt_Component,[other, 1005, false, c0]));
}c0.dispatchEvent$java_awt_AWTEvent(Clazz.new_($I$(3,1).c$$java_awt_Component$I$Z$java_awt_Component,[c0, 1004, false, other]));
} else {
other=$I$(4).getCurrentFocusOwner$O(related);
c0.dispatchEvent$java_awt_AWTEvent(Clazz.new_($I$(3,1).c$$java_awt_Component$I$Z$java_awt_Component,[c0, 1005, false, other]));
if (other != null  && other !== c0  ) other.dispatchEvent$java_awt_AWTEvent(Clazz.new_($I$(3,1).c$$java_awt_Component$I$Z$java_awt_Component,[other, 1004, false, c0]));
}}, 1);

Clazz.newMeth(C$, 'checkFrameFocusOnMouseDown$java_awt_AWTEvent',  function (e) {
var p=$I$(5,"秘getTopInvokableAncestor$java_awt_Component$Z",[e.getSource$(), true]);
if (p == null  || this.getCurrentFocusOwner$() != null  && p === this.currentWindow   ) return;
var w=this.currentWindow;
p.dispatchEvent$java_awt_AWTEvent(Clazz.new_($I$(6,1).c$$java_awt_Window$I,[p, 205]));
this.setCurrentFocusedWindow$java_awt_Window(p);
if (Clazz.instanceOf(p, "javax.swing.JInternalFrame")) {
try {
(p).setSelected$Z(true);
} catch (e1) {
if (Clazz.exceptionOf(e1,"java.beans.PropertyVetoException")){
e1.printStackTrace$();
} else {
throw e1;
}
}
} else if (Clazz.instanceOf(p, "java.awt.Window")) {
(p).toFront$();
}if (p.秘isFocusSetAndEnabled$()) {
((p).ui).focus$();
C$.handleJSFocus$O$O$Z(p, w, true);
}});

Clazz.newMeth(C$, 'focus$swingjs_api_js_DOMNode',  function (focusNode) {

focusNode.focus();
}, 1);

Clazz.newMeth(C$, 'setFocusLast$java_applet_JSApplet',  function (applet) {
var c=$I$(7).getMostRecentFocusOwner$java_awt_Window(applet);
if (c != null ) c.requestFocus$();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:59 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
