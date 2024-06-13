(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'java.awt.Insets','swingjs.plaf.JSComponentUI','swingjs.api.js.DOMNode','swingjs.JSUtil','swingjs.plaf.JSPopupMenuUI','java.awt.Toolkit','java.awt.event.ComponentEvent','javax.swing.Timer','java.awt.event.WindowEvent','javax.swing.LookAndFeel','java.awt.Rectangle']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSFrameUI", null, 'swingjs.plaf.JSWindowUI', ['java.awt.peer.FramePeer', ['swingjs.plaf.JSComponentUI','swingjs.plaf.JSComponentUI.Embeddable']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isInternalFrame','doEmbed','isHidden'],'I',['state','zModal'],'S',['appletPrefix'],'O',['frame','javax.swing.JFrame','closerWrap','swingjs.api.js.DOMNode','bounds','java.awt.Rectangle']]
,['O',['ZERO_INSETS','java.awt.Insets']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
$I$(2).frameZ+=1000;
this.z=$I$(2).frameZ;
this.isContainer=true;
this.defaultHeight=500;
this.defaultWidth=500;
this.setDoc$();
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
if (this.domNode == null ) {
this.containerNode=this.frameNode=this.domNode=$I$(2,"newDOMObject$S$S$SA",["div", this.id + "_frame", Clazz.array(String, -1, [])]);
if (this.isDummyFrame) {
$I$(3).setVisible(this.domNode, false);
return this.domNode;
}var w=this.c.getWidth$();
var h=this.c.getHeight$();
if (w == 0) w=this.defaultWidth;
if (h == 0) h=this.defaultHeight;
$I$(3).setSize(this.frameNode, w, h);
$I$(3).setTopLeftAbsolute(this.frameNode, 0, 0);
var node=this.getEmbedded$S("init");
if (node != null ) {
this.embeddingNode=node;
this.doEmbed=($I$(3).getWidth(node) > 0);
this.isHidden=!this.doEmbed;
}this.setWindowClass$();
if (!this.frame.isUndecorated$()) {
$I$(3).setStyles(this.frameNode, ["box-shadow", "0px 0px 10px gray", "box-sizing", "content-box"]);
this.titleBarNode=$I$(2,"newDOMObject$S$S$SA",["div", this.id + "_titlebar", Clazz.array(String, -1, [])]);
$I$(3).setTopLeftAbsolute(this.titleBarNode, 0, 0);
$I$(3).setStyles(this.titleBarNode, ["background-color", "#E0E0E0", "height", "20px", "font-size", "14px", "font-family", "sans-serif", "font-weight", "bold"]);
this.titleNode=$I$(2,"newDOMObject$S$S$SA",["label", this.id + "_title", Clazz.array(String, -1, [])]);
$I$(3).setTopLeftAbsolute(this.titleNode, 0, 0);
$I$(3).setStyles(this.titleNode, ["background-color", "#E0E0E0", "height", "20px", "overflow", "hidden"]);
this.closerWrap=$I$(2,"newDOMObject$S$S$SA",["div", this.id + "_closerwrap", Clazz.array(String, -1, [])]);
$I$(3).setTopLeftAbsolute(this.closerWrap, 0, 0);
$I$(3).setStyle(this.closerWrap, "text-align", "right");
this.closerNode=$I$(2,"newDOMObject$S$S$SA",["label", this.id + "_closer", Clazz.array(String, -1, ["innerHTML", "X"])]);
$I$(3).setStyles(this.closerNode, ["width", "20px", "height", "20px", "position", "absolute", "text-align", "center", "right", "0px"]);
this.frameNode.appendChild(this.titleBarNode);
this.titleBarNode.appendChild(this.titleNode);
this.titleBarNode.appendChild(this.closerWrap);
this.closerWrap.appendChild(this.closerNode);
$I$(3).setStyle(this.closerNode, "background-color", "#DDD");
}this.bindWindowEvents$();
var s=this.getInsets$();
$I$(3).setTopLeftAbsolute(this.frameNode, 0, 0);
$I$(3,"setAttrs",[this.frameNode, ["width", "" + this.frame.getWidth$() + s.left + s.right , "height", "" + this.frame.getHeight$() + s.top + s.bottom ]]);
this.addFocusHandler$();
}var strColor=$I$(2,"toCSSString$java_awt_Color",[this.c.getBackground$()]);
$I$(3).setStyle(this.domNode, "background-color", strColor);
$I$(3).setStyle(this.frameNode, "background", strColor);
$I$(3,"setStyle",[this.frameNode, "color", $I$(2,"toCSSString$java_awt_Color",[this.c.getForeground$()])]);
this.setInnerComponentBounds$I$I(this.width, this.height);
this.setTitle$S(this.frame.getTitle$());
if (!this.isDummyFrame) {
$I$(3,"setVisible",[this.domNode, this.jc.isVisible$()]);
}return this.domNode;
});

Clazz.newMeth(C$, 'getEmbedded$S',  function (type) {
var name=this.frame.getName$();
switch (type) {
case "name":
return name;
case "init":
var node=this.getEmbedded$S("node");
if (node == null ) return null;
var dim=this.getEmbedded$S("dim");
if (dim.width > 0) {
this.frame.setUndecorated$Z(true);
this.frame.setLocation$I$I(0, 0);
var resize=$I$(3).getStyle(node, "resize");
if (resize === "none" ) this.frame.秘freezeBounds$I$I(dim.width, dim.height);
} else {
$I$(3).setStyles(node, ["position", "relative", "overflow", "hidden"]);
}return node;
default:
if (this.appletPrefix == null ) {
this.appletPrefix=$I$(3,"getAttr",[$I$(4).getHTML5Applet$java_awt_Component(this.jc), "_id"]) + "-";
if ($I$(3).getEmbedded(this.appletPrefix + name, "node") == null ) this.appletPrefix="";
}return $I$(3).getEmbedded(this.appletPrefix + name, type);
}
});

Clazz.newMeth(C$, 'isFrameIndependent$',  function () {
return !this.doEmbed;
});

Clazz.newMeth(C$, 'setZ$I',  function (z) {
if (this.doEmbed) z=999;
C$.superclazz.prototype.setZ$I.apply(this, [z]);
});

Clazz.newMeth(C$, 'setDraggableEvents$',  function () {
if (this.doEmbed || this.frame.isUndecorated$() ) return;
var fnode=this.frameNode;
var fGetFrameParent=null;
{
var me = this; fGetFrameParent = function(mode, x, y) { switch(arguments.length) { case 1: if (mode == 501) me.selected$(); me.hideMenu$(); return $(fnode).parent(); case 3: if (mode == 506) { me.moveFrame$I$I(x, y); return null; } } return null; }
}
this.J2S.setDraggable(this.titleBarNode, fGetFrameParent);
});

Clazz.newMeth(C$, 'selected$',  function () {
(this.jc).toFront$();
});

Clazz.newMeth(C$, 'hideMenu$',  function () {
$I$(2).hideMenusAndToolTip$();
});

Clazz.newMeth(C$, 'moveFrame$I$I',  function (x, y) {
if (!this.isInternalFrame) {
x=Math.max(30 - this.frame.getWidth$(), x);
y=Math.max(0, y);
}$I$(5).closeAllMenus$();
this.frame.setLocation$I$I(x, y);
});

Clazz.newMeth(C$, 'getMoveCoords$I$I',  function (x, y) {
return Clazz.array(Integer.TYPE, -1, [x, y]);
});

Clazz.newMeth(C$, 'notifyFrameMoved$',  function () {
this.toFront$();
$I$(6).getEventQueue$().postEvent$java_awt_AWTEvent(Clazz.new_($I$(7,1).c$$java_awt_Component$I,[this.frame, 100]));
});

Clazz.newMeth(C$, 'handleJSEvent$O$I$O',  function (target, eventType, jQueryEvent) {
if (target === this.closerNode  && eventType == -1 ) {
switch (jQueryEvent.type ||"") {
case "click":
case "pointerup":
case "mouseup":
this.frameCloserAction$();
return true;
case "pointerout":
case "mouseout":
$I$(3).setStyle(this.closerNode, "background-color", "#DDD");
return true;
case "pointerenter":
case "mouseenter":
$I$(3).setStyle(this.closerNode, "background-color", "red");
return true;
}
}return false;
});

Clazz.newMeth(C$, 'frameCloserAction$',  function () {
var t=Clazz.new_([100, ((P$.JSFrameUI$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JSFrameUI$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ActionListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
this.b$['swingjs.plaf.JSFrameUI'].frame.dispatchEvent$java_awt_AWTEvent(Clazz.new_($I$(9,1).c$$java_awt_Window$I,[this.b$['swingjs.plaf.JSFrameUI'].frame, 201]));
});
})()
), Clazz.new_(P$.JSFrameUI$1.$init$,[this, null]))],$I$(8,1).c$$I$java_awt_event_ActionListener);
t.setRepeats$Z(false);
t.start$();
});

Clazz.newMeth(C$, 'closeFrame$',  function () {
if (!this.frame.isUndecorated$()) {
var tbar=this.titleBarNode;
{
J2S.setDraggable(tbar, false);
}
}this.J2S.unsetMouse(this.frameNode);
this.$$O(this.frameNode).remove();
this.$$O(this.outerNode).remove();
});

Clazz.newMeth(C$, 'setInnerComponentBounds$I$I',  function (width, height) {
$I$(3).setStyles(this.closerWrap, ["text-align", "right", "width", width + "px"]);
$I$(3,"setStyles",[this.titleNode, ["width", (width - 4) + "px", "height", "20px"]]);
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (jc) {
this.frame=this.c;
this.isDummyFrame=jc.__CLASS_NAME__ == "javax.swing.SwingUtilities.SharedOwnerFrame" ||false;
this.frame.addWindowListener$java_awt_event_WindowListener(this);
this.frame.addComponentListener$java_awt_event_ComponentListener(this);
$I$(10).installColorsAndFont$javax_swing_JComponent$S$S$S(jc, "Frame.background", "Frame.foreground", "Frame.font");
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent',  function (jc) {
this.closeFrame$();
this.frame.removeWindowListener$java_awt_event_WindowListener(this);
});

Clazz.newMeth(C$, 'setTitle$S',  function (title) {
if (this.titleNode != null ) $I$(3).setAttr(this.titleNode, "innerHTML", title);
});

Clazz.newMeth(C$, 'setMenuBar$O',  function (mb) {
});

Clazz.newMeth(C$, 'setResizable$Z',  function (resizeable) {
});

Clazz.newMeth(C$, 'setState$I',  function (state) {
this.state=state;
});

Clazz.newMeth(C$, 'getState$',  function () {
return this.state;
});

Clazz.newMeth(C$, 'setMaximizedBounds$java_awt_Rectangle',  function (bounds) {
});

Clazz.newMeth(C$, 'setBoundsPrivate$I$I$I$I',  function (x, y, width, height) {
this.bounds=Clazz.new_($I$(11,1).c$$I$I$I$I,[x, y, width, height]);
});

Clazz.newMeth(C$, 'getBoundsPrivate$',  function () {
return this.bounds;
});

Clazz.newMeth(C$, 'getInsets$',  function () {
var i=(this.isDummyFrame ? null : this.frame.isUndecorated$() ? C$.ZERO_INSETS : this.jc.getFrameViewer$().getInsets$());
return i;
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
if (e.getPropertyName$().equals$O("resizable")) {
var resizable=(e.getNewValue$()).booleanValue$();
if (this.jc.getFrameViewer$().isResizable$() == resizable ) return;
this.jc.getFrameViewer$().setResizable$Z(resizable);
}C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'setVisible$Z',  function (b) {
if (this.isDummyFrame) b=false;
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
if (this.isModal$()) {
this.modalBlocked=b;
if (b) {
this.$$O(this.body).after(this.modalNode);
this.addClass$swingjs_api_js_DOMNode$S(this.modalNode, "swingjs-window");
var sz=$I$(3).getStyle(this.domNode, "z-index");
var z=(+sz ||this.getInheritedZ$()) - 1;
$I$(3).setZ(this.modalNode, z);
}$I$(3).setVisible(this.modalNode, b);
}$I$(3).setVisible(this.domNode, b);
});

Clazz.newMeth(C$, 'isModal$',  function () {
return false;
});

C$.$static$=function(){C$.$static$=0;
C$.ZERO_INSETS=Clazz.new_($I$(1,1).c$$I$I$I$I,[0, 0, 0, 0]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:07 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
