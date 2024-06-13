(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'Thread','java.awt.Container','java.awt.Insets','javax.swing.JComponent','swingjs.JSFrameViewer','javax.swing.UIManager','swingjs.plaf.JSComponentUI','java.util.Arrays','swingjs.api.js.DOMNode','swingjs.JSUtil','javax.swing.JPanel','swingjs.JSMouse','swingjs.JSToolkit','swingjs.JSKeyEvent']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSComponent", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.awt.Component');
C$.$classes$=[['A2SComponentWrapper',9],['A2SWrappedComponent',9],['ModalExclusionType',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.秘appletViewer=$I$(1).currentThread$().getThreadGroup$().秘appletViewer;
this.秘iPaintMyself=0;
this.秘repaintAsUpdate=true;
},1);

C$.$fields$=[['Z',['秘winOrApplet','秘isRootPane','秘isContentPane','秘iPaintMyselfEntirely','秘repaintAsUpdate','秘isDesktop'],'I',['秘num','秘iPaintMyself'],'S',['秘htmlName','秘uiClassID'],'O',['秘keyAction','javax.swing.Action','秘tempInsets','java.awt.Insets','秘g','swingjs.JSGraphics2D','+秘gtemp','秘appletViewer','swingjs.JSAppletViewer','秘frameViewer','swingjs.JSFrameViewer','+秘topFrameViewer','秘canvas','swingjs.api.js.HTML5Canvas','ui','javax.swing.plaf.ComponentUI','秘peerVis','Boolean','秘border','javax.swing.border.AbstractBorder','秘paintClass','Class','+秘updateClass']]
,['Z',['秘isRepaint'],'I',['秘incr']]]

Clazz.newMeth(C$, '秘getUI$',  function () {
return this.ui;
});

Clazz.newMeth(C$, '秘paintsSelfEntirely$',  function () {
return this.秘iPaintMyselfEntirely;
});

Clazz.newMeth(C$, '秘setIsRepaint$Z',  function (b) {
C$.秘isRepaint=b;
}, 1);

Clazz.newMeth(C$, 'repaint$',  function () {
if (this.width <= 0 || this.height <= 0 ) return;
if (this.秘isAWT$()) {
this.秘repaintCmp$J$I$I$I$I(0, 0, 0, this.width, this.height);
} else {
this.repaint$J$I$I$I$I(0, 0, 0, this.width, this.height);
}});

Clazz.newMeth(C$, '秘resizeOriginal$I$I',  function (width, height) {
this.resize$I$I(width, height);
});

Clazz.newMeth(C$, '秘ensurePropertyChangeListener$java_awt_Component$java_awt_Component',  function (c, listener) {
if (Clazz.instanceOf(listener, "java.beans.PropertyChangeListener")) {
c.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
c.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
} else if (listener != null ) {
System.err.println$S("JSComponent: " + listener + " is not a PropertyChangeListener -- modal dialog will fail." );
}}, 1);

Clazz.newMeth(C$, '秘getChildArray$java_awt_Container',  function (c) {
return (c == null  ? $I$(2).EMPTY_ARRAY : c.getChildArray$());
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.秘num=++C$.秘incr;
}, 1);

Clazz.newMeth(C$, 'getGraphics$',  function () {
if (!this.秘winOrApplet && (this.width == 0 || this.height == 0  || !this.isVisible$() ) ) return null;
var g;
if (this.秘isRootPane || this.秘winOrApplet || this.秘isContentPane  ) {
g=this.秘frameViewer.getGraphics$().create$();
if (this.秘isContentPane) {
if (this.秘tempInsets == null ) this.秘tempInsets=Clazz.new_($I$(3,1).c$$I$I$I$I,[0, 0, 0, 0]);
(this).getRootPane$().getInsets$java_awt_Insets(this.秘tempInsets);
if (this.秘tempInsets.left != 0 || this.秘tempInsets.top != 0 ) g.translate$I$I(this.秘tempInsets.left, this.秘tempInsets.top);
}return g;
}if (this.parent == null ) {
return null;
}g=this.parent.getGraphics$();
if (g == null ) return null;
if (!$I$(4).isComponentObtainingGraphicsFrom$java_awt_Component(null) && !this.秘paintsSelf$() ) {
this.秘setPaintsSelf$I(1);
(this.ui).clearPaintPath$();
}g.translate$I$I(this.x, (this.秘isContentPane ? 0 : this.y));
g.clipRect$I$I$I$I(0, 0, this.width, this.height);
g.setFont$java_awt_Font(this.getFont$());
return g;
});

Clazz.newMeth(C$, 'addNotify$',  function () {
if (this.秘paintsSelf$() && this.ui != null  ) (this.ui).clearPaintPath$();
if (this.parent != null ) this.秘appletViewer=this.parent.秘appletViewer;
C$.superclazz.prototype.addNotify$.apply(this, []);
});

Clazz.newMeth(C$, 'setFrameViewer$swingjs_JSFrameViewer',  function (viewer) {
return this.秘frameViewer=(viewer == null  ? viewer=Clazz.new_($I$(5,1)).setForWindow$javax_swing_RootPaneContainer(this) : viewer);
});

Clazz.newMeth(C$, 'getFrameViewer$',  function () {
var parent=null;
return (this.秘topFrameViewer != null  ? this.秘topFrameViewer : this.秘frameViewer != null  ? this.秘topFrameViewer=this.秘frameViewer : (parent=this.getParent$()) == null  ? null : (this.秘topFrameViewer=parent.getFrameViewer$()));
});

Clazz.newMeth(C$, 'getHTMLName$S',  function (uid) {
return (this.秘htmlName == null  ? this.秘htmlName=this.appContext.getThreadGroup$().getName$() + "_" + uid + "_" + this.秘num  : this.秘htmlName);
});

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return (this.秘uiClassID == null  ? this.秘uiClassID="ComponentUI" : this.秘uiClassID);
});

Clazz.newMeth(C$, 'setUIClassID$S',  function (id) {
this.秘uiClassID=id;
});

Clazz.newMeth(C$, 'setUI$javax_swing_plaf_ComponentUI',  function (ui) {
this.ui=ui;
});

Clazz.newMeth(C$, 'getUI$',  function () {
return this.ui;
});

Clazz.newMeth(C$, 'isDisplayable$',  function () {
return this.ui != null  && this.秘getUI$().isDisplayable$() ;
});

Clazz.newMeth(C$, 'updatePeerVisibility$Z',  function (isVisible) {
if (this.getOrCreatePeer$() == null ) this.秘peerVis=(isVisible ? Boolean.TRUE : Boolean.FALSE);
 else this.updatePeerVisibilityOrig$Z(isVisible);
});

Clazz.newMeth(C$, 'getOrCreatePeer$',  function () {
return (this.ui == null  ? null : this.peer == null  ? (this.peer=this.getToolkit$().createComponent$java_awt_Component(this)) : this.peer);
});

Clazz.newMeth(C$, 'updateUI$',  function () {
if (this.秘uiClassID == null ) this.秘uiClassID=this.getUIClassID$();
if (this.ui == null ) this.setUI$javax_swing_plaf_ComponentUI($I$(6).getUI$java_awt_Component(this));
});

Clazz.newMeth(C$, '秘getJSGraphic2D$java_awt_Graphics',  function (g) {
return (g.mark$ ? g :null);
});

Clazz.newMeth(C$, '秘isAWT$',  function () {
return (!!this.isAWT$ ||false);
});

Clazz.newMeth(C$, '秘setIsAWT$',  function () {

this.isAWT$ = true;
});

Clazz.newMeth(C$, 'isBackgroundSet$',  function () {
return (this.background == null  ? false : this.isAWT$ ||false ? !(Clazz.instanceOf(this.background, "javax.swing.plaf.UIResource")) : true);
});

Clazz.newMeth(C$, 'isForegroundSet$',  function () {
return (this.foreground == null  ? false : this.isAWT$ ||false ? !(Clazz.instanceOf(this.foreground, "javax.swing.plaf.UIResource")) : true);
});

Clazz.newMeth(C$, 'isFontSet$',  function () {
return ((this.font == null  ? null : Boolean.valueOf$Z(this.isAWT$ ||false ? !(Clazz.instanceOf(this.font, "javax.swing.plaf.FontUIResource")) : true))).valueOf();
});

Clazz.newMeth(C$, '秘updateUIZOrder$',  function () {
var n=(this).getComponentCount$();
if (n < 2) return;
var components=C$.秘getChildArray$java_awt_Container(this);
var zorders=Clazz.array(Integer.TYPE, [n]);
for (var i=0; i < n; i++) zorders[i]=$I$(7).getInheritedZ$javax_swing_JComponent(components[i]);

$I$(8).sort$IA(zorders);
for (var i=0; i < n; i++) components[i].秘getUI$().setZ$I(zorders[n - 1 - i ]);

});

Clazz.newMeth(C$, 'invalidateComp$',  function () {
C$.superclazz.prototype.invalidateComp$.apply(this, []);
if (this.ui != null ) (this.ui).invalidate$();
});

Clazz.newMeth(C$, 'validate$',  function () {
var wasValid=this.isValid$();
C$.superclazz.prototype.validate$.apply(this, []);
if (this.ui != null  && !wasValid ) (this.ui).endValidate$();
});

Clazz.newMeth(C$, '秘paintWithBackgroundCheck$java_awt_Graphics',  function (g) {
var jcg=this.秘getJSGraphic2D$java_awt_Graphics(g);
this.秘checkBackgroundPainted$swingjs_JSGraphics2D$Z(jcg, true);
this.paint$java_awt_Graphics(g);
this.秘checkBackgroundPainted$swingjs_JSGraphics2D$Z(jcg, false);
});

Clazz.newMeth(C$, '秘paintContainerBackgroundCheck$java_awt_Graphics',  function (g) {
var jcg=this.秘getJSGraphic2D$java_awt_Graphics(g);
this.秘checkBackgroundPainted$swingjs_JSGraphics2D$Z(jcg, true);
(this).paintContainer$java_awt_Graphics(g);
this.秘checkBackgroundPainted$swingjs_JSGraphics2D$Z(jcg, false);
});

Clazz.newMeth(C$, 'addKeyListener$java_awt_event_KeyListener',  function (l) {
C$.superclazz.prototype.addKeyListener$java_awt_event_KeyListener.apply(this, [l]);
if (l != null  && this.ui != null  ) (this.ui).enableJSKeys$Z(true);
});

Clazz.newMeth(C$, 'removeKeyListener$java_awt_event_KeyListener',  function (l) {
C$.superclazz.prototype.removeKeyListener$java_awt_event_KeyListener.apply(this, [l]);
if (this.keyListener == null  && this.ui != null  ) (this.ui).enableJSKeys$Z(false);
});

Clazz.newMeth(C$, '秘jsInputMapSet$',  function () {
if (this.ui != null ) (this.ui).enableJSKeys$Z(true);
});

Clazz.newMeth(C$, '秘getTopInvokableAncestor$java_awt_Component$Z',  function (c, andFocusable) {
for (var p=c; p != null ; p=C$.秘nextHigher$java_awt_Component(p)) {
if (p.isWindowOrJSApplet$() && (!andFocusable || (p).isFocusableWindow$() ) ) {
return p;
}}
return null;
}, 1);

Clazz.newMeth(C$, '秘nextHigher$java_awt_Component',  function (c) {
var p=c.getParent$();
if (p == null  && Clazz.instanceOf(c, "javax.swing.JPopupMenu") ) p=(c).getInvoker$();
return p;
}, 1);

Clazz.newMeth(C$, '秘isFocusSetAndEnabled$',  function () {
return this.秘isFocusableSet && this.isFocusable$() ;
});

Clazz.newMeth(C$, '秘checkG$',  function () {
var isNew=(this.秘g) === Boolean.TRUE ;
if (isNew || this.秘g.getWidth$() != this.width  || this.秘g.getHeight$() != this.height ) {
if (!isNew) $I$(9,"dispose",[this.秘g.getCanvas$()]);
this.秘g=(this.createImage$I$I(this.width, this.height)).秘getImageGraphic$();
var c=this.秘g.getCanvas$();
var d=this.秘getUI$().getDOMNode$();
if (d !== c ) d.prepend(c);
}return this.秘g;
});

Clazz.newMeth(C$, '秘checkBackgroundPainted$swingjs_JSGraphics2D$Z',  function (jsg, init) {
if (jsg == null  || init ) {
this.秘gtemp=jsg;
(this.ui).paintBackground$swingjs_JSGraphics2D(jsg);
return;
}this.秘gtemp=null;
});

Clazz.newMeth(C$, '秘setPaintsSelf$I',  function (flag) {
flag=(this.秘iPaintMyself == 2 ? 2 : (this.秘iPaintMyself=flag));
var r;
return (flag == -1 || (r=(this).getRootPane$()) == null   || r.秘paintsSelf$()  ? flag : r.秘setPaintsSelf$I(1));
});

Clazz.newMeth(C$, '秘paintsSelf$',  function () {
if (this.秘iPaintMyself == 0) {
this.秘iPaintMyself=this.秘setPaintsSelf$I((this.秘iPaintMyselfEntirely=($I$(10).isOverridden$O$S$Class(this, "paint$java_awt_Graphics", this.秘paintClass) || $I$(10).isOverridden$O$S$Class(this, "paintComponent$java_awt_Graphics", javax.swing.JComponent ||null) || $I$(10).isOverridden$O$S$Class(this, "update$java_awt_Graphics", this.秘updateClass) || $I$(10).isOverridden$O$S$Class(this, "paintContainer$java_awt_Graphics", java.awt.Container ||null)  )) || this.秘paintsBorder$() && $I$(10).isOverridden$O$S$Class(this.秘border, "paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I", this.秘border.秘paintClass)   ? 1 : -1);
}return (this.秘iPaintMyself != -1);
});

Clazz.newMeth(C$, '秘paintsBorder$',  function () {
return (this.秘border != null  && !(Clazz.instanceOf(this.秘border, "javax.swing.plaf.BorderUIResource.CompoundBorderUIResource"))  && !(Clazz.instanceOf(this.秘border, "javax.swing.border.EmptyBorder")) );
});

Clazz.newMeth(C$, '秘selfOrChildIsPainted$',  function () {
return this.秘paintsSelf$();
});

Clazz.newMeth(C$, 'removeAll$',  function () {
this.秘setPaintsSelf$I(0);
(this).paintImmediately$I$I$I$I(0, 0, this.width, this.height);
});

Clazz.newMeth(C$, 'canPaint$',  function () {
return (C$.秘isRepaint && this.秘repaintAsUpdate && this.秘isAWT$()   || !(Clazz.instanceOf(this.peer, "java.awt.peer.LightweightPeer")) );
});

Clazz.newMeth(C$, '秘update$',  function () {
var g=this.getGraphics$();
try {
this.update$java_awt_Graphics(g);
} finally {
g.dispose$();
}
});

Clazz.newMeth(C$, '秘paint$java_awt_Graphics',  function (g) {
if (C$.秘isRepaint && this.秘isAWT$() && this.秘repaintAsUpdate  ) {
this.update$java_awt_Graphics(g);
} else {
this.paint$java_awt_Graphics(g);
}});

Clazz.newMeth(C$, '秘repaint$',  function () {
if (this.width <= 0 || this.height <= 0 ) return;
if (this.秘isAWT$()) {
this.秘repaintAsUpdate=false;
try {
C$.superclazz.prototype.repaint$.apply(this, []);
} finally {
this.秘repaintAsUpdate=true;
}
} else {
this.repaint$();
}});

Clazz.newMeth(C$, '秘setIsDesktop$',  function () {
this.秘isDesktop=true;
});

Clazz.newMeth(C$, '秘isDesktop$',  function () {
return this.秘isDesktop;
});

Clazz.newMeth(C$, '秘frameAddNodify$javax_swing_JRootPane',  function (rootPane) {
this.addNotify$();
rootPane.addNotify$();
});

Clazz.newMeth(C$, '秘transferFrameTo$javax_swing_JComponent',  function (jc) {
if (jc.秘frameViewer === this.秘frameViewer ) return jc;
if (jc.getUIClassID$() === "AppletUI" ) {
System.out.println$S("JSComponent setContentPane to applet; using content.contentPane instead");
jc=jc.getRootPane$().getContentPane$();
jc.秘isContentPane=false;
jc.getRootPane$().setContentPane$java_awt_Container(Clazz.new_($I$(11,1)));
}jc.秘frameViewer=this.秘frameViewer;
jc.秘topFrameViewer=this.秘topFrameViewer;
return jc;
});

Clazz.newMeth(C$, 'getInsets$',  function () {
return this.秘getInsets$();
});

Clazz.newMeth(C$, '秘getInsets$',  function () {
var i=(this.ui == null  ? null : this.秘getUI$().getInsets$());
return (i == null  ? $I$(2).NULL_INSETS : i);
});

Clazz.newMeth(C$, '秘repaintParentIfNeeded$I$I$I$I',  function (oldX, oldY, oldWidth, oldHeight) {
if (this.parent != null  && Clazz.instanceOf(this.peer, "java.awt.peer.LightweightPeer")  && this.isShowing$() ) {
if (this.秘getUI$().allowPaintedBackground && this.秘paintsSelf$() ) {
this.parent.repaint$I$I$I$I(oldX, oldY, oldWidth, oldHeight);
this.秘repaint$();
}}});

Clazz.newMeth(C$, '秘getLastKeyListener$',  function () {
var k=this.keyListener;
return (k == null  ? null : k.b || k.a ||k);
});

Clazz.newMeth(C$, '秘setProxy$java_awt_Container',  function (parent) {
if (parent != null ) {
var mask=0;
if ((this.mouseListener != null ) || (Long.$ne((Long.$and(this.eventMask,16)),0 )) ) {
(mask=Long.$or(mask,(16)));
}if ((this.mouseMotionListener != null ) || (Long.$ne((Long.$and(this.eventMask,32)),0 )) ) {
(mask=Long.$or(mask,(32)));
}if ((this.mouseWheelListener != null ) || (Long.$ne((Long.$and(this.eventMask,131072)),0 )) ) {
(mask=Long.$or(mask,(131072)));
}if (this.focusListener != null  || Long.$ne((Long.$and(this.eventMask,4)),0 ) ) {
(mask=Long.$or(mask,(4)));
}if (this.keyListener != null  || Long.$ne((Long.$and(this.eventMask,8)),0 ) ) {
(mask=Long.$or(mask,(8)));
}if (Long.$ne(mask,0 )) {
parent.proxyEnableEvents$J(mask);
}}});

Clazz.newMeth(C$, '秘dispatchKeyEvent$javax_swing_JComponent$I$O$J',  function (c, id, jqevent, time) {
if (id == 0) id=$I$(12).fixEventType$O$I(jqevent, 0);
var ui=(c == null  ? null : c.秘getUI$());
if (id == 400) {
if (ui != null  && !ui.j2sDoPropagate ) $I$(13).consumeEvent$O(jqevent);
return false;
}if (c != null ) {
var e=$I$(14).newJSKeyEvent$javax_swing_JComponent$O$I$Z(c, jqevent, id, false);
c.dispatchEvent$java_awt_AWTEvent(e);
if (!ui.j2sDoPropagate) $I$(13).consumeEvent$O(e);
if (!e.isConsumed$() && id == 401  && e.getKeyChar$() != "\uffff" ) {
e=$I$(14).newJSKeyEvent$javax_swing_JComponent$O$I$Z(c, jqevent, 400, false);
c.dispatchEvent$java_awt_AWTEvent(e);
if (!ui.j2sDoPropagate) $I$(13).consumeEvent$O(e);
}}return true;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.秘isRepaint=true;
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.JSComponent, "A2SComponentWrapper", function(){
});
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.JSComponent, "A2SWrappedComponent", function(){
});
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.JSComponent, "ModalExclusionType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "NO_EXCLUDE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "APPLICATION_EXCLUDE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "TOOLKIT_EXCLUDE", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:04 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
