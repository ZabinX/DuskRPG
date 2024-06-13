(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'swingjs.plaf.JSComponentUI','swingjs.api.js.DOMNode','javax.swing.text.WrappedPlainView','javax.swing.text.PlainView','java.awt.Point']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSTextAreaUI", null, 'swingjs.plaf.JSTextUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.isTextView=true;
this.setDoPropagate$();
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
if (this.domNode == null ) {
this.valueNode=this.domNode=$I$(1,"newDOMObject$S$S$SA",["textarea", this.id, Clazz.array(String, -1, ["spellcheck", "\u79d8FALSE", "autocomplete", "off"])]);
this.allowPaintedBackground=false;
this.focusNode=this.enableNode=this.textNode=this.domNode;
$I$(2).setStyles(this.domNode, ["box-sizing", "border-box", "resize", "none", "border", "none", "margin", "0px", "padding", "1px", "scrollbar-width", "thin"]);
this.bindJSKeyEvents$swingjs_api_js_DOMNode$Z(this.focusNode, true);
}var area=this.jc;
$I$(2).setStyles(this.domNode, ["white-space", null, "overflow-wrap", null]);
if (area.getLineWrap$()) {
$I$(2,"setStyle",[this.domNode, "overflow-wrap", area.getWrapStyleWord$() ? null : "anywhere"]);
} else {
$I$(2).setStyle(this.domNode, "white-space", "pre");
}this.textListener.checkDocument$();
this.setCssFont$swingjs_api_js_DOMNode$java_awt_Font($I$(2,"setAttr",[this.domNode, "value", this.setCurrentText$()]), this.c.getFont$());
this.updateJSCursor$S("areaupdate");
return C$.superclazz.prototype.updateDOMNode$.apply(this, []);
});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var prop=e.getPropertyName$();
switch (prop) {
case "ancestor":
this.setJ2sMouseHandler$();
break;
case "JSToEnd":
p$1.toEnd.apply(this, []);
break;
}
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'toEnd',  function () {
var node=this.domNode;
if (node == null ) return;

node.scrollTop = node.scrollHeight;
}, p$1);

Clazz.newMeth(C$, 'updateRootView$',  function () {
this.useRootView=true;
this.rootView.setView$javax_swing_text_View(this.create$javax_swing_text_Element(this.editor.getDocument$().getDefaultRootElement$()));
});

Clazz.newMeth(C$, 'getTextAreaTextSize$java_awt_Dimension',  function (d) {
var sh=0;
var sw=0;
{
var h = this.domNode.style.height;
this.domNode.style.height = null;
sh = this.domNode.scrollHeight;
this.domNode.style.height = h;
var w = this.domNode.style.width;
this.domNode.style.width = null;
sw = this.domNode.scrollWidth;
this.domNode.style.width = w;
}
d.width=sw;
d.height=sh;
});

Clazz.newMeth(C$, 'getPropertyPrefix$',  function () {
return "TextArea";
});

Clazz.newMeth(C$, 'setHTMLElement$',  function () {
return $I$(2,"setStyles",[this.setHTMLElementCUI$(), ["position", "absolute"]]);
});

Clazz.newMeth(C$, 'create$javax_swing_text_Element',  function (elem) {
var area=this.c;
var v;
if (area.getLineWrap$()) {
v=Clazz.new_([elem, area.getWrapStyleWord$()],$I$(3,1).c$$javax_swing_text_Element$Z);
} else {
v=Clazz.new_($I$(4,1).c$$javax_swing_text_Element,[elem]);
}return v;
});

Clazz.newMeth(C$, 'isFocusable$',  function () {
return false;
});

Clazz.newMeth(C$, 'getMaximumSize$javax_swing_JComponent',  function (jc) {
return $I$(1).ANY_SIZE;
});

Clazz.newMeth(C$, 'handleTab$O$S',  function (jqEvent, type) {
if (type !== "keydown" ) return Boolean.valueOf$Z(false);
var val=this.getJSTextValue$();
var pt=Clazz.new_($I$(5,1));
this.getJSMarkAndDot$java_awt_Point$I(pt, 0);
var x=Math.min(pt.x, pt.y);
var y=Math.max(pt.x, pt.y);
val=val.substring$I$I(0, x) + "\t" + val.substring$I(y) ;
this.editor.setTextFromUI$S(val);
pt.x=pt.y=++x;
this.setJSMarkAndDot$I$I$Z(x, x, false);
this.checkNewEditorTextValue$();
this.setJavaMarkAndDot$java_awt_Point(pt);
return Boolean.valueOf$Z(false);
});

Clazz.newMeth(C$, 'caretUpdatedByProgram$javax_swing_event_CaretEvent',  function (e) {
if (!this.jc.isVisible$() || !this.isAWT || this.domNode == null   ) return;
var pt=e.getDot$();

this.domNode.scrollTo && this.domNode.scrollTo(0, pt);
});

Clazz.newMeth(C$, 'scrollToVisible$java_awt_Rectangle',  function (aRect) {
$I$(2).setAttrInt(this.domNode, "scrollLeft", aRect.x);
$I$(2).setAttrInt(this.domNode, "scrollTop", aRect.y);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
