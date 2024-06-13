(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'swingjs.JSUtil','swingjs.api.js.DOMNode','swingjs.api.js.JSFunction','swingjs.api.js.JSInterface','java.awt.Rectangle','java.awt.Color','java.awt.Dimension']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Resizer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.offsetx=-4;
this.offsety=-4;
this.minSize=10;
this.enabled=true;
this.allowResize=true;
},1);

C$.$fields$=[['Z',['enabled','allowResize'],'I',['offsetx','offsety','minSize','titleHeight'],'O',['rootPane','javax.swing.JRootPane','resizer','swingjs.api.js.DOMNode','+rootNode','+rubberBand','jframe','javax.swing.JFrame','rpc','javax.swing.RootPaneContainer']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'set$swingjs_JSFrameViewer$javax_swing_RootPaneContainer',  function (viewer, top) {
this.rpc=top;
this.rootPane=this.rpc.getRootPane$();
this.titleHeight=viewer.getInsets$().top;
if (viewer.isApplet) {
this.rootNode=viewer.getDiv$S("appletdiv");
} else {
this.jframe=this.rpc;
this.rootNode=(this.jframe.getUI$()).getDOMNode$();
}return (this.rootNode == null  ? null : this);
});

Clazz.newMeth(C$, 'show$',  function () {
if (!this.allowResize || !this.enabled ) return;
if (this.resizer == null ) p$1.createAndShowResizer.apply(this, []);
 else $I$(1).jQuery.$(this.resizer).show();
this.setPosition$I$I(0, 0);
});

Clazz.newMeth(C$, 'hide$',  function () {
$I$(1).jQuery.$(this.resizer).hide();
});

Clazz.newMeth(C$, 'setMin$I',  function (min) {
this.minSize=min;
});

Clazz.newMeth(C$, 'createAndShowResizer',  function () {
var id=this.rootPane.秘htmlName + "_resizer";
this.resizer=$I$(2).createElement("div", id);
$I$(2).setSize(this.resizer, 10, 10);
$I$(2).setStyles(this.resizer, ["background-color", "red", "opacity", "0", "cursor", "nwse-resize"]);
$I$(1).jQuery.$(this.resizer).addClass("swingjs-resizer");
this.rubberBand=$I$(2).createElement("div", id + "_rb");
$I$(2).setStyles(this.rubberBand, ["border", "1px dashed #FF00FF", "z-index", "100000", "position", "absolute", "left", "0px", "top", "0px", "display", "none"]);
this.rootNode.appendChild(this.resizer);
this.rootNode.appendChild(this.rubberBand);
var fHandleResizer=null;
var fHandleDOMResize=null;
var me=this;
{
fHandleResizer = function(xyev,type){me.fHandleResizer$I$I$I( xyev.dx, xyev.dy,type)};
}
$I$(1).J2S.setDraggable(this.resizer, Clazz.array($I$(3), -1, [fHandleResizer]));
$I$(1).jQuery.$(this.rootNode).resize(fHandleDOMResize);
}, p$1);

Clazz.newMeth(C$, 'setPosition$I$I',  function (dw, dh) {
var r=p$1.getFrameOffset$I$I.apply(this, [dw, dh]);
$I$(2).setTopLeftAbsolute(this.resizer, r.height + this.offsety, r.width + this.offsetx);
$I$(2).setSize(this.rubberBand, r.width, r.height);
});

Clazz.newMeth(C$, 'getDOMNode$',  function () {
return this.resizer;
});

Clazz.newMeth(C$, 'fHandleResizer$I$I$I',  function (dx, dy, type) {
if (!this.enabled || !this.allowResize ) return;
switch (type) {
case 503:
break;
case 501:
$I$(2).setStyle(this.resizer, "background-color", "green");
$I$(2).setVisible(this.rubberBand, true);
$I$(4).setCursor("nwse-resize");
break;
case 506:
this.setPosition$I$I(dx, dy);
break;
case 502:
$I$(2).setStyle(this.resizer, "background-color", "red");
$I$(2).setVisible(this.rubberBand, false);
$I$(4).setCursor("auto");
this.fHandleDOMResize$O$I$I(null, dx, dy);
}
});

Clazz.newMeth(C$, 'fHandleDOMResize$O$I$I',  function (event, dw, dh) {
var r;
if (!this.enabled) return;
if (event == null ) {
r=p$1.getFrameOffset$I$I.apply(this, [dw, dh]);
} else {
$I$(2,"getCSSRectangle",[this.rootNode, r=Clazz.new_($I$(5,1))]);
}if (this.jframe == null ) {
this.rootPane.getGraphics$().setColor$java_awt_Color($I$(6).WHITE);
this.rootPane.getGraphics$().fillRect$I$I$I$I(0, 0, r.width, r.height);
(this.rootPane.getParent$()).resizeHTML$I$I(r.width, r.height);
} else {
this.jframe.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(7,1).c$$I$I,[r.width, r.height]));
this.jframe.invalidateTree$();
this.jframe.repackContainer$();
if (Clazz.instanceOf(this.jframe, "javax.swing.JInternalFrame")) {
try {
(this.jframe).setSelected$Z(true);
} catch (e) {
if (Clazz.exceptionOf(e,"java.beans.PropertyVetoException")){
} else {
throw e;
}
}
} else {
this.jframe.toFront$();
}}this.setPosition$I$I(0, 0);
});

Clazz.newMeth(C$, 'getFrameOffset$I$I',  function (dw, dh) {
var r=(this.rpc).getBounds$();
if (r.width + dw > this.minSize) r.width+=dw;
if (r.height + dh > this.minSize) r.height+=dh;
return r;
}, p$1);

Clazz.newMeth(C$, 'setAllowResize$Z',  function (b) {
this.allowResize=b;
});

Clazz.newMeth(C$, 'setEnabled$Z',  function (b) {
this.enabled=b;
if (b) this.show$();
 else this.hide$();
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
