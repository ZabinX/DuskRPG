(function(){var P$=Clazz.newPackage("swingjs"),p$1={},I$=[[0,'Thread','java.awt.Insets','swingjs.JSMouse','swingjs.JSGraphics2D','swingjs.api.js.DOMNode','swingjs.plaf.Resizer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSFrameViewer", null, 'swingjs.JSApp', 'swingjs.api.js.JSInterface');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.resizable=true;
},1);

C$.$fields$=[['Z',['resizable'],'S',['frameID','canvasId'],'O',['jsgraphics','swingjs.JSGraphics2D','top','javax.swing.RootPaneContainer','appletViewer','swingjs.JSAppletViewer','resizer','swingjs.plaf.Resizer','insets','java.awt.Insets','display','java.lang.Object','applet','javax.swing.JApplet','mouse','swingjs.JSMouse','canvas','swingjs.api.js.HTML5Canvas']]
,['I',['canvasCount'],'O',['canvas00','swingjs.api.js.HTML5Canvas']]]

Clazz.newMeth(C$, 'getTopComponent$',  function () {
return this.top;
});

Clazz.newMeth(C$, 'getInsets$',  function () {
return this.insets;
});

Clazz.newMeth(C$, 'c$$java_util_Hashtable',  function (params) {
;C$.superclazz.c$$java_util_Hashtable.apply(this,[params]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setForWindow$javax_swing_RootPaneContainer',  function (c) {
this.isFrame=true;
this.top=c;
if ((this.top).秘appletViewer == null ) {
(this.top).秘appletViewer=$I$(1).currentThread$().getThreadGroup$().秘getAppletViewer$();
}this.appletViewer=(this.top).秘appletViewer;
if (Clazz.instanceOf(c, "javax.swing.JApplet")) this.applet=c;
this.fullName=this.appletViewer.fullName;
this.canvas=null;
this.jsgraphics=null;
this.insets=Clazz.new_($I$(2,1).c$$I$I$I$I,[20, 0, 0, 0]);
this.getGraphics$I$I$javax_swing_RootPaneContainer(0, 0, c);
return this;
});

Clazz.newMeth(C$, 'cacheFileByName$S$Z',  function (fileName, isAdd) {
return 0;
});

Clazz.newMeth(C$, 'cachePut$S$O',  function (key, data) {
});

Clazz.newMeth(C$, 'destroy$',  function () {
});

Clazz.newMeth(C$, 'getFullName$',  function () {
return this.fullName;
});

Clazz.newMeth(C$, 'openFileAsyncSpecial$S$I',  function (fileName, flags) {
});

Clazz.newMeth(C$, 'processMouseEvent$I$I$I$I$J$O$I',  function (id, x, y, modifiers, time, jqevent, scroll) {
p$1.getMouse.apply(this, []).processEvent$I$I$I$I$J$O$I(id, x, y, modifiers, time, jqevent, scroll);
return false;
});

Clazz.newMeth(C$, 'getMouse',  function () {
return (this.mouse == null  ? this.mouse=Clazz.new_($I$(3,1).c$$swingjs_JSFrameViewer,[this]) : this.mouse);
}, p$1);

Clazz.newMeth(C$, 'processTwoPointGesture$FAAA',  function (touches) {
p$1.getMouse.apply(this, []).processTwoPointGesture$FAAA(touches);
});

Clazz.newMeth(C$, 'setDisplay$swingjs_api_js_HTML5Canvas',  function (canvas) {
this.canvas=canvas;
this.jsgraphics=null;
});

Clazz.newMeth(C$, 'setScreenDimension$I$I',  function (width, height) {
this.setGraphics$java_awt_Graphics$I$I$javax_swing_RootPaneContainer((this.jsgraphics=null), width, height, this.top);
if (this.top != null ) (this.top).秘resizeOriginal$I$I(width, height);
});

Clazz.newMeth(C$, 'setGraphics$java_awt_Graphics$I$I$javax_swing_RootPaneContainer',  function (g, width, height, window) {
return (g == null  ? this.getGraphics$I$I$javax_swing_RootPaneContainer(width, height, window) : g);
});

Clazz.newMeth(C$, 'setStatusDragDropped$I$I$I$S',  function (mode, x, y, fileName) {
return false;
});

Clazz.newMeth(C$, 'startHoverWatcher$Z',  function (enable) {
});

Clazz.newMeth(C$, 'getGraphics$',  function () {
return this.getGraphics$I$I$javax_swing_RootPaneContainer(0, 0, this.top);
});

Clazz.newMeth(C$, 'getGraphics$I$I$javax_swing_RootPaneContainer',  function (wNew, hNew, window) {
if (window == null ) window=this.top;
if (window == null ) return null;
var c=window;
if (wNew == 0) {
wNew=Math.max(0, window.getContentPane$().getWidth$());
hNew=Math.max(0, window.getContentPane$().getHeight$());
}var wOld=0;
var hOld=0;
if (c.秘canvas != null ) {

wOld = c.秘canvas.width; hOld = c.秘canvas.height;
}if (wNew >= 0 && hNew >= 0  && (wOld != wNew || hOld != hNew  || c.秘canvas == null   || this.jsgraphics == null  ) ) {
this.jsgraphics=Clazz.new_([c.秘canvas=p$1.newCanvas$I$I$javax_swing_RootPaneContainer.apply(this, [wNew, hNew, window])],$I$(4,1).c$$O);
}return this.jsgraphics;
});

Clazz.newMeth(C$, 'newCanvas$I$I$javax_swing_RootPaneContainer',  function (width, height, window) {
if (this.isApplet) {
var c=this.html5Applet._getHtml5Canvas();
if (c != null ) {
return this.canvas=c;
}}if (width == 0 || height == 0 ) {
width=height=0;
if (C$.canvas00 != null ) return C$.canvas00;
}var userFramedApplet=null;
var root=window.getRootPane$();
var contentPane=window.getContentPane$();
if (contentPane.getComponentCount$() > 0) {
var app=contentPane.getComponent$I(0);
if (Clazz.instanceOf(app, "javax.swing.JApplet")) root=(userFramedApplet=app).getRootPane$();
}var rootNode=(root == null  ? null : (root.getUI$()).domNode);
if (rootNode != null ) $I$(5).dispose(this.canvas);
this.display=this.canvasId=this.appletViewer.appletName + "秘canvas" + ++C$.canvasCount ;
this.canvas=$I$(5).createElement("canvas", this.canvasId);
if (userFramedApplet != null ) {
var appViewer=userFramedApplet.getFrameViewer$();
appViewer.setDisplay$swingjs_api_js_HTML5Canvas(this.canvas);
}var iTop=(root == null  ? 0 : root.getContentPane$().getY$());
$I$(5).setTopLeftAbsolute(this.canvas, iTop, 0);
$I$(5).setStyles(this.canvas, ["width", width + "px", "height", height + "px"]);
if (width > 0) {
var ui=root.getParent$().秘getUI$();
if (ui != null ) ui.updateDOMNode$();
if (this.resizer != null ) this.resizer.setPosition$I$I(0, 0);
if (rootNode != null ) {
rootNode.appendChild(this.canvas);
}} else {
C$.canvas00=this.canvas;
}
this.canvas.width = width; this.canvas.height = height;
return this.canvas;
}, p$1);

Clazz.newMeth(C$, 'setResizable$Z',  function (tf) {
this.resizable=tf;
if (!this.isResizable$()) this.resizable=false;
if (this.resizer != null ) this.resizer.setEnabled$Z(this.resizable);
 else if (this.resizable && p$1.newResizer.apply(this, []) != null  ) this.resizer.setPosition$I$I(0, 0);
});

Clazz.newMeth(C$, 'isResizable$',  function () {
return this.resizable && (!this.appletViewer.haveResizable || this.appletViewer.isResizable ) ;
});

Clazz.newMeth(C$, 'getResizer$',  function () {
return (this.resizer != null  || !this.isResizable$()  ? this.resizer : p$1.newResizer.apply(this, []));
});

Clazz.newMeth(C$, 'newResizer',  function () {
this.resizer=Clazz.new_($I$(6,1)).set$swingjs_JSFrameViewer$javax_swing_RootPaneContainer(this, this.top);
if (this.resizer != null ) this.resizer.show$();
return this.resizer;
}, p$1);

Clazz.newMeth(C$, 'getDiv$S',  function (id) {
{
return J2S.$(this.html5Applet, id)[0];
}
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:59 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
