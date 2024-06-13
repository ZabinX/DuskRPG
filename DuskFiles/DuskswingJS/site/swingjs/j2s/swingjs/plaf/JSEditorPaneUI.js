(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'swingjs.plaf.JSComponentUI','swingjs.api.js.DOMNode','javax.swing.text.JTextComponent','sun.swing.DefaultLookup',['javax.swing.text.JTextComponent','.KeyBinding'],'javax.swing.plaf.InputMapUIResource','javax.swing.UIManager','javajs.util.SB','swingjs.JSHTMLHelper','swingjs.JSToolkit','javax.swing.text.StyleConstants','java.awt.Color','javax.swing.SwingUtilities','swingjs.plaf.JSTextUI','java.awt.JSComponent','java.awt.Dimension']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSEditorPaneUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSTextUI', 'java.awt.event.KeyListener');
C$.$classes$=[['Node',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isTextPane=false;
this.isHtmlKit=false;
this.updateRunnable=((P$.JSEditorPaneUI$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JSEditorPaneUI$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'run$',  function () {
this.b$['swingjs.plaf.JSTextUI'].updateJSCursor$S.apply(this.b$['swingjs.plaf.JSTextUI'], ["editortext"]);
p$1.scrollAsNeeded$O.apply(this.b$['swingjs.plaf.JSEditorPaneUI'], [null]);
});
})()
), Clazz.new_(P$.JSEditorPaneUI$1.$init$,[this, null]));
},1);

C$.$fields$=[['Z',['isTextPane','isHtmlKit','isStyled','fbold','fital','isPressConsumed'],'I',['fsize'],'S',['jsPasteText','jsPasteHTML','currentHTML','mytext','rawHTML','ffamily','stemp'],'O',['myfont','java.awt.Font','bodyNode','swingjs.api.js.DOMNode','updateRunnable','Runnable','fback','java.awt.Color','+ffore','lastRange','Object[]','xyTemp','int[]']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.isEditorPane=this.isTextView=true;
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$',  function () {
if (this.domNode == null ) {
this.domNode=$I$(1,"newDOMObject$S$S$SA",["div", this.id, Clazz.array(String, -1, [])]);
$I$(2).setStyles(this.domNode, []);
this.$$O(this.domNode).addClass("swingjs-doc");
this.allowPaintedBackground=false;
this.focusNode=this.enableNode=this.textNode=this.domNode;
$I$(2).setStyles(this.domNode, ["resize", "none", "margin", "0px", "padding", "1px", "box-sizing", "border-box"]);
this.bindJSKeyEvents$swingjs_api_js_DOMNode$Z(this.focusNode, true);
var me=this;
this.$$O(this.domNode).on("paste", function(e){ return me.handleJSPasteEvent(e.originalEvent,e)} ||null);
}this.textListener.checkDocument$();
var font=this.c.getFont$();
var fontChanged=!font.equals$O(this.myfont);
if (fontChanged) this.setCssFont$swingjs_api_js_DOMNode$java_awt_Font(this.domNode, font);
$I$(2,"setAttrs",[this.domNode, ["contentEditable", this.isHtmlKit || this.editor.isEditable$()  ? "\u79d8TRUE" : "\u79d8FALSE", "spellcheck", "\u79d8FALSE"]]);
if (this.jc.getTopLevelAncestor$() != null ) {
if (fontChanged || this.editor.getText$() != this.mytext ) {
this.myfont=font;
this.setText$S(null);
}}return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent',  function (jc) {
C$.superclazz.prototype.installUI$javax_swing_JComponent.apply(this, [jc]);
if (this.getPropertyPrefix$() === "TextPane" ) return;
this.editor.addKeyListener$java_awt_event_KeyListener(this);
var doc=this.editor.getDocument$();
if (doc == null ) {
this.editor.setDocument$javax_swing_text_Document(this.getEditorKit$javax_swing_text_JTextComponent(this.editor).createDefaultDocument$());
} else {
}});

Clazz.newMeth(C$, 'installKeyboardActions$',  function () {
this.editor.setKeymap$javax_swing_text_Keymap(this.createKeymap$());
C$.superclazz.prototype.installKeyboardActions$.apply(this, []);
});

Clazz.newMeth(C$, 'createKeymap$',  function () {
var nm=this.getKeymapName$();
var map=$I$(3).getKeymap$S(nm);
if (map == null ) {
var parent=$I$(3).getKeymap$S("default");
map=$I$(3).addKeymap$S$javax_swing_text_Keymap(nm, parent);
var prefix=this.getPropertyPrefix$();
var o=$I$(4).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.editor, this, prefix + ".keyBindings");
if ((o != null ) && (Clazz.instanceOf(o, Clazz.array($I$(5), -1))) ) {
var bindings=o;
$I$(3,"loadKeymap$javax_swing_text_Keymap$javax_swing_text_JTextComponent_KeyBindingA$javax_swing_ActionA",[map, bindings, this.getComponent$().getActions$()]);
}}return map;
});

Clazz.newMeth(C$, 'getKeymapName$',  function () {
var nm=this.getClass$().getName$();
var index=nm.lastIndexOf$I(".");
if (index >= 0) {
nm=nm.substring$I$I(index + 1, nm.length$());
}return nm;
});

Clazz.newMeth(C$, 'getInputMap$',  function () {
var map=Clazz.new_($I$(6,1));
var shared=$I$(4,"get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S",[this.editor, this, this.getPropertyPrefix$() + ".focusInputMap"]);
if (shared != null ) {
map.setParent$javax_swing_InputMap(shared);
}return map;
});

Clazz.newMeth(C$, 'setBorder$S',  function (prefix) {
var b=this.editor.getBorder$();
if ((b == null ) || (Clazz.instanceOf(b, "javax.swing.plaf.UIResource")) ) {
this.editor.setBorder$javax_swing_border_Border($I$(7).getBorder$O(prefix + ".border"));
}});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (e) {
var prop=e.getPropertyName$();
switch (prop) {
case "editorKit":
this.isHtmlKit=(this.editor.秘jsHTMLHelper != null );
return;
case "text":
this.setCurrentText$();
return;
}
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'getJSDocOffset$swingjs_api_js_DOMNode',  function (node) {
var pt=0;
while (node !== this.domNode  && node != null  ){
var sib=$I$(2).getPreviousSibling(node);
while (sib != null ){
pt+=p$1.getJSCharCount$swingjs_api_js_DOMNode.apply(this, [sib]);
sib=$I$(2).getPreviousSibling(sib);
}
node=$I$(2).getParent(node);
}
return pt;
}, p$1);

Clazz.newMeth(C$, 'getJSCharCount$swingjs_api_js_DOMNode',  function (sib) {
var n=0;
switch (sib.tagName ||"") {
case "BR":
return 1;
case "DIV":
n=1;
break;
case "SPAN":
if (C$.isJSTAB$O(sib)) return 1;
break;
}
return n + (sib.textContent && sib.textContent.length ||0);
}, p$1);

Clazz.newMeth(C$, 'dispose$',  function () {
C$.superclazz.prototype.dispose$.apply(this, []);
this.mytext=this.currentHTML=null;
});

Clazz.newMeth(C$, 'setText$S',  function (text) {
var d=this.editor.getDocument$();
if (d == null ) return;
var html;
if (text == null ) text=this.editor.getText$();
if (this.isHtmlKit) {
this.mytext=html=text;
this.isHTML=true;
$I$(2).setAttr(this.domNode, "innerHTML", "");
html=this.editor.秘jsHTMLHelper.get$S$S("html", p$1.getInner$S$S.apply(this, [text, "body"]));
$I$(2).setAttrs(this.domNode, ["contentEditable", "\u79d8TRUE"]);
this.bodyNode=$I$(2).createElement("div", this.id0 + "_body");
this.domNode.appendChild(this.bodyNode);
var styles=this.editor.秘jsHTMLHelper.get$S$S("styles", "body");
if (styles != null ) $I$(2).setStyles(this.bodyNode, styles);
var css=this.editor.秘jsHTMLHelper.get$S$S("css", this.id);
p$1.setStyle$S$S.apply(this, [this.id0 + "_styles", css]);
} else {
this.bodyNode=this.domNode;
this.mytext=text;
this.isHTML=text.startsWith$S("<html");
if (this.isHTML) {
$I$(2).setAttrs(this.domNode, ["contentEditable", "\u79d8FALSE"]);
html=p$1.getInner$S$S.apply(this, [text, "body"]);
} else {
var sb=Clazz.new_($I$(8,1));
this.isStyled=Clazz.instanceOf((this.editor).getEditorKit$(), "javax.swing.text.StyledEditorKit");
p$1.fromJava$S$javajs_util_SB$javax_swing_text_Element$Z$javax_swing_text_AttributeSet.apply(this, [text, sb, d.getRootElements$()[0], true, null]);
html=sb.toString();
}}if (this.jc.isOpaque$()) this.setBackgroundDOM$swingjs_api_js_DOMNode$java_awt_Color(this.domNode, this.jc.getBackground$());
if (this.isHTML) {
if (this.currentHTML != null  && html.equals$O(this.rawHTML) ) return;
this.rawHTML=html;
html=this.fixText$S(html);
if (this.isHtmlKit) {
var page=this.editor.getDocument$().getProperty$O("stream");
if (page != null ) html=$I$(9).fixLinks$S$java_net_URL(html, page);
}}if (html == this.currentHTML) return;
this.currentText=text;
$I$(2,"setAttr",[this.bodyNode, "innerHTML", this.currentHTML=html]);
p$1.updateDataUI.apply(this, []);
$I$(10).dispatch$O$I$I(this.updateRunnable, 10, 0);
});

Clazz.newMeth(C$, 'dumpText$S',  function (text) {
text=text.replace$C$C("\n", ".").replace$C$C("\t", "^").replace$C$C(" ", "~").replace$C$C("\u00a0", "-").substring$I(text.indexOf$S(">") + 1);
return text;
});

Clazz.newMeth(C$, 'setStyle$S$S',  function (id, css) {
var d=$I$(2).getElement(id);
if (d == null ) {
this.$$O(this.body).append("<style id=" + id + ">" + css + "</style>" );
} else {
$I$(2).setAttr(d, "innerHTML", css);
}}, p$1);

Clazz.newMeth(C$, 'getInner$S$S',  function (html, tag) {
var pt=html.lastIndexOf$S("<" + tag);
if (pt >= 0) {
html=html.substring$I(html.indexOf$S$I(">", pt) + 1);
pt=html.indexOf$S$I("</" + tag + ">" , pt);
if (pt >= 0) html=html.substring$I$I(0, pt);
}return html;
}, p$1);

Clazz.newMeth(C$, 'updateDataUI',  function () {
var divs=this.$$O(this.domNode).find("*");
for (var i=divs.length; --i >= 0; ) this.setDataUI$swingjs_api_js_DOMNode(divs[i]);

}, p$1);

Clazz.newMeth(C$, 'fromJava$S$javajs_util_SB$javax_swing_text_Element$Z$javax_swing_text_AttributeSet',  function (text, sb, node, allowBR, currAttr) {
p$1.setEditorAttrs.apply(this, []);
var start=node.getStartOffset$();
var end=node.getEndOffset$();
if (end == start) return;
var isDiv=(start >= text.length$() || text.charAt$I(end - 1) == "\n" );
if (isDiv && start + 1 == end ) {
if (allowBR) {
sb.append$S("<br>");
}return;
}var isBranch=(Clazz.instanceOf(node, "javax.swing.text.AbstractDocument.BranchElement"));
var isPara=(this.isStyled && node.getName$() === "paragraph"  );
var a=node.getAttributes$();
var style=p$1.getCSSStyle$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [a, currAttr]);
var haveStyle=(style.length$() > 0);
if (haveStyle) style=" style=\"" + style + "\"" ;
sb.append$S(allowBR && (isDiv || isPara )  ? "<div" + style + ">"  : haveStyle ? "<span" + style + ">"  : "");
var isSub=p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [4, a, null]);
var isSup=!isSub && p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [8, a, null]) ;
if (isSub) sb.append$S("<sub>");
 else if (isSup) sb.append$S("<sup>");
if (isBranch) {
for (var i=0, n=node.getElementCount$(); i < n; i++) {
p$1.fromJava$S$javajs_util_SB$javax_swing_text_Element$Z$javax_swing_text_AttributeSet.apply(this, [text, sb, node.getElement$I(i), !isDiv && !isPara , a]);
}
} else {
var t=text.substring$I$I(start, isDiv ? end - 1 : end);
while (t.indexOf$S("  ") >= 0){
t=t.replaceAll$S$S("  ", "\u00a0 ");
}
if (t.indexOf$I("<") >= 0) {
t=t.replaceAll$S$S("<", "&lt;").replaceAll$S$S(">", "&gt;");
}if (t.indexOf$I("\t") >= 0) {
t=t.replaceAll$S$S("\t", "<span class=\"j2stab\">\u00a0\u00a0\u00a0\u00a0</span>");
}if (t.endsWith$S(" ")) t=t.substring$I$I(0, t.length$() - 1) + '\u00a0';
sb.append$S(t);
}if (isSup) sb.append$S("</sup>");
 else if (isSub) sb.append$S("</sub>");
sb.append$S(allowBR && (isDiv || isPara )  ? "</div>" : haveStyle ? "</span>" : "");
}, p$1);

Clazz.newMeth(C$, 'getCSSStyle$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet',  function (a, currAttr) {
var style="";
if (p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [128, a, currAttr])) style+="background:" + $I$(1,"toCSSString$java_awt_Color",[p$1.getBackground$javax_swing_text_AttributeSet.apply(this, [a])]) + ";" ;
if (p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [64, a, currAttr])) style+="color:" + $I$(1,"toCSSString$java_awt_Color",[p$1.getForeground$javax_swing_text_AttributeSet.apply(this, [a])]) + ";" ;
if (p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [1, a, currAttr])) style+="font-weight:" + (p$1.isBold$javax_swing_text_AttributeSet.apply(this, [a]) ? "bold;" : "normal;");
if (p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [2, a, currAttr])) style+="font-style:" + (p$1.isItalic$javax_swing_text_AttributeSet.apply(this, [a]) ? "italic;" : "normal;");
if (p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [32, a, currAttr])) style+="font-family:" + $I$(10,"getCSSFontFamilyName$S",[p$1.getFontFamily$javax_swing_text_AttributeSet.apply(this, [a])]) + ";" ;
if (p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [16, a, currAttr])) style+="font-size:" + p$1.getFontSize$javax_swing_text_AttributeSet.apply(this, [a]) + "px;" ;
return style;
}, p$1);

Clazz.newMeth(C$, 'setEditorAttrs',  function () {
this.ffamily=this.editor.getFont$().getFamily$();
this.fsize=this.editor.getFont$().getSize$();
this.fback=this.editor.getBackground$();
this.ffore=this.editor.getForeground$();
this.fbold=this.editor.getFont$().isBold$();
this.fital=this.editor.getFont$().isItalic$();
}, p$1);

Clazz.newMeth(C$, 'getFontFamily$javax_swing_text_AttributeSet',  function (a) {
var f=a.getAttribute$O($I$(11).Family);
return (f == null  ? this.ffamily : f);
}, p$1);

Clazz.newMeth(C$, 'getFontSize$javax_swing_text_AttributeSet',  function (a) {
var f=a.getAttribute$O($I$(11).Size);
return (f == null  ? this.fsize : f.intValue$());
}, p$1);

Clazz.newMeth(C$, 'isItalic$javax_swing_text_AttributeSet',  function (a) {
var f=a.getAttribute$O($I$(11).Italic);
return (f == null  ? this.fital : f.booleanValue$());
}, p$1);

Clazz.newMeth(C$, 'isBold$javax_swing_text_AttributeSet',  function (a) {
var f=a.getAttribute$O($I$(11).Bold);
return (f == null  ? this.fbold : f.booleanValue$());
}, p$1);

Clazz.newMeth(C$, 'getForeground$javax_swing_text_AttributeSet',  function (a) {
var f=a.getAttribute$O($I$(11).Foreground);
return (f == null  ? this.ffore : f);
}, p$1);

Clazz.newMeth(C$, 'getBackground$javax_swing_text_AttributeSet',  function (a) {
var f=a.getAttribute$O($I$(11).Background);
return (f == null  ? this.fback : f);
}, p$1);

Clazz.newMeth(C$, 'checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet',  function (attr, a, currAttr) {
switch (attr) {
case 1:
return (currAttr == null  || p$1.isBold$javax_swing_text_AttributeSet.apply(this, [a]) != p$1.isBold$javax_swing_text_AttributeSet.apply(this, [currAttr])  );
case 2:
return (currAttr == null  || p$1.isItalic$javax_swing_text_AttributeSet.apply(this, [a]) != p$1.isItalic$javax_swing_text_AttributeSet.apply(this, [currAttr])  );
case 4:
return $I$(11).isSubscript$javax_swing_text_AttributeSet(a);
case 8:
return $I$(11).isSuperscript$javax_swing_text_AttributeSet(a);
case 16:
return (currAttr == null  || p$1.getFontSize$javax_swing_text_AttributeSet.apply(this, [a]) != p$1.getFontSize$javax_swing_text_AttributeSet.apply(this, [currAttr]) );
case 32:
return (currAttr == null  || p$1.getFontFamily$javax_swing_text_AttributeSet.apply(this, [a]) != p$1.getFontFamily$javax_swing_text_AttributeSet.apply(this, [currAttr]) );
case 64:
var f=p$1.getForeground$javax_swing_text_AttributeSet.apply(this, [a]);
return f !== $I$(12).none  && (currAttr == null  || !f.equals$O(p$1.getForeground$javax_swing_text_AttributeSet.apply(this, [currAttr])) ) ;
case 128:
var b=p$1.getBackground$javax_swing_text_AttributeSet.apply(this, [a]);
return b !== $I$(12).none  && (currAttr == null  || !b.equals$O(p$1.getBackground$javax_swing_text_AttributeSet.apply(this, [currAttr])) ) ;
}
return false;
}, p$1);

Clazz.newMeth(C$, 'getPropertyPrefix$',  function () {
return "EditorPane";
});

Clazz.newMeth(C$, 'getJSNodePt$swingjs_api_js_DOMNode$I$OA$I',  function (dnode, pt, lastRange, level) {
var node=dnode ||null;
var isRoot=(lastRange == null );
pt=Math.max(0, pt);
var isTAB=C$.isJSTAB$O(dnode);
var r=1?[]:null;
try {
lastRange=p$1.setNode$OA$swingjs_plaf_JSEditorPaneUI_Node$I.apply(this, [null, node, 0]);
if (isTAB) {
return (pt == 0 ? r=lastRange : p$1.setNode$OA$swingjs_plaf_JSEditorPaneUI_Node$I.apply(this, [r, null, pt - 1]));
}var nodes=node.childNodes;
var tag=node.tagName;
var n=nodes.length;
if (tag === "BR"  || n == 1 && nodes[0].tagName === "BR"   ) {
return (pt == 0 ? p$1.setNode$OA$swingjs_plaf_JSEditorPaneUI_Node$I.apply(this, [r, node, 0]) : p$1.setNode$OA$swingjs_plaf_JSEditorPaneUI_Node$I.apply(this, [r, null, pt - 1]));
}var nlen=0;
var i1=(tag === "DIV"  || tag === "P"   ? 1 : 0);
for (var i=0; i < n; i++) {
node=nodes[i];
if (node.innerText != null ) {
r=this.getJSNodePt$swingjs_api_js_DOMNode$I$OA$I(node, pt, lastRange, ++level);
if (r[0] != null ) {
return r;
}pt=1?r[1] :0;
} else if (node.tagName === "BR" ) {
if (pt == 0) return p$1.setNode$OA$swingjs_plaf_JSEditorPaneUI_Node$I.apply(this, [r, node.parentNode, i]);
pt-=(isRoot ? 1 : 0);
} else {
nlen=node.length;
if (nlen >= pt) return r=p$1.setNode$OA$swingjs_plaf_JSEditorPaneUI_Node$I.apply(this, [lastRange, node, pt]);
lastRange=p$1.setNode$OA$swingjs_plaf_JSEditorPaneUI_Node$I.apply(this, [lastRange, node, nlen]);
pt-=nlen;
}}
if (!isRoot) return p$1.setNode$OA$swingjs_plaf_JSEditorPaneUI_Node$I.apply(this, [r, null, Math.max(0, pt - i1)]);
return r=lastRange;
} finally {
}
});

Clazz.newMeth(C$, 'setNode$OA$swingjs_plaf_JSEditorPaneUI_Node$I',  function (r, node, i) {

if (r) { r[0] = node;
r[1] = i;
return r;
} r = [node, i];
return r;
}, p$1);

Clazz.newMeth(C$, 'getJSTextValue$',  function () {
var s=C$.getInnerTextSafely$swingjs_api_js_DOMNode$Z$javajs_util_SB(this.domNode, false, null).toString().replaceAll$S$S("\u00a0", " ");
return s;
});

Clazz.newMeth(C$, 'getInnerTextSafely$swingjs_api_js_DOMNode$Z$javajs_util_SB',  function (node, isLast, sb) {
var isRoot=(sb == null );
if (isRoot) sb=Clazz.new_($I$(8,1));
var ret;
var tagName=$I$(2).getAttr(node, "tagName");
if (tagName == null ) {
sb.append$S($I$(2).getAttr(node, "data"));
ret=Boolean.TRUE;
} else {
ret=Boolean.FALSE;
var nodes=$I$(2).getAttr(node, "childNodes");
if (tagName === "BR"  || nodes.length == 1 && $I$(2).getAttr(nodes[0], "tagName") === "BR"   ) {
sb.append$S("\n");
} else if (tagName === "SPAN"  && C$.isJSTAB$O(node) ) {
sb.append$S("\t");
} else {
for (var i=0, n=nodes.length; i < n; i++) ret=C$.getInnerTextSafely$swingjs_api_js_DOMNode$Z$javajs_util_SB(nodes[i], i == n - 1, sb);

if ((!isRoot || isLast ) && ret === Boolean.TRUE  ) {
switch (tagName) {
case "DIV":
case "BR":
case "P":
sb.append$S("\n");
break;
}
}}}return (isRoot ? sb.toString() : ret);
}, 1);

Clazz.newMeth(C$, 'isJSTAB$O',  function (node) {
return node != null  && (node.nodeType != 3 && ("" + node.getAttribute("class")).indexOf("j2stab") >= 0 &&true) ;
}, 1);

Clazz.newMeth(C$, 'scrollToReference$S',  function (ref) {
var fn=this.$$O(this.focusNode);
var r=fn.find("[name=\"" + ref + "\"]" );
if (r.get(0) != null ) {
$I$(13,"invokeLater$Runnable",[((P$.JSEditorPaneUI$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "JSEditorPaneUI$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () {
this.$finals$.fn.scrollTop.apply(this.$finals$.fn, [0]);
this.$finals$.fn.scrollTop.apply(this.$finals$.fn, [this.$finals$.r.offset.apply(this.$finals$.r, []).top - this.$finals$.fn.offset.apply(this.$finals$.fn, []).top]);
});
})()
), Clazz.new_(P$.JSEditorPaneUI$lambda1.$init$,[this, {fn:fn,r:r}]))]);
}});

Clazz.newMeth(C$, 'setJSSelection$I$I$Z',  function (mark, dot, andScroll) {
if (this.isHtmlKit) return;
C$.superclazz.prototype.setJSSelection$I$I$Z.apply(this, [Math.min(mark, dot), Math.max(mark, dot), andScroll]);
});

Clazz.newMeth(C$, 'jsSelect$OA$OA$Z',  function (r1, r2, andScroll) {
p$1.fixTabRange$OA.apply(this, [r1]);
if (r1 !== r2 ) p$1.fixTabRange$OA.apply(this, [r2]);
if (r1[0] == null ) return;
andScroll=!!(andScroll|((this.jc.秘keyAction != null )));

var range = document.createRange();
range.setStart(r1[0], r1[1] || 0);
range.setEnd(r2[0], r2[1] || 0);
var sel = window.getSelection();
sel.removeAllRanges();
sel.addRange(range);
if (andScroll) {
p$1.scrollAsNeeded$O.apply(this, [r2[0]]);
}});

Clazz.newMeth(C$, 'scrollAsNeeded$O',  function (node) {
var isAtEnd=(this.editor.getCaret$().getDot$() >= this.editor.getText$().lastIndexOf$I("\n"));

if (isAtEnd) { this.domNode.scrollTop = this.domNode.scrollHeight;
return;
} if (node == null)return;
var h = 0; node.getBoundingClientRect || (node =  node.parentElement);
//
var od = $(this.domNode).offset();
var on = $(node).offset();
var hn = $(node).height();
var hd = $(this.domNode).height();
//
var top =       this.domNode.scrollTop;
var off = on.top + top -od.top;
//xxe = this.domNode;
//System.out.println([node.innerText,"top",top, "[",off |0, (off+hn)|0, "]bottom",(top+hd)|0]);
if (off < top) { //
this.domNode.scrollTop = off;
//
} else if (off+ hn + 20 > top + hd) { //
this.domNode.scrollTop = off + hn - hd +20;
//
} var top =       this.domNode.scrollTop;
//System.out.println([node.innerText,"top",top, "[",off |0, (off+hn)|0, "]bottom",(top+hd)|0]);
}, p$1);

Clazz.newMeth(C$, 'fixTabRange$OA',  function (r) {
var node=r[0];
var isStart=r[1] == 0||false;
if (C$.isJSTAB$O(node)) {
if (isStart) {
} else {
}}}, p$1);

Clazz.newMeth(C$, 'caretUpdatedByProgram$javax_swing_event_CaretEvent',  function (e) {
this.updateJSCursor$S("noscroll");
});

Clazz.newMeth(C$, 'getJSMarkAndDot$java_awt_Point$I',  function (pt, keycode) {
if (this.isHtmlKit) return false;
var dot=0;
var mark=0;
var apt=0;
var fpt=0;
var anode=null;
var fnode=null;
var apar=null;
var fpar=null;
var atag=null;
var ftag=null;
var alen=0;
var flen=0;
var toEnd=(keycode == 39 || keycode == 227 );
var toStart=(keycode == 37 || keycode == 226 );

//System.out.println("getJSMandD " + [toEnd,toStart]);
var s = window.getSelection(); anode = s.anchorNode;
if (anode) { apt = s.anchorOffset; if (anode.tagName) { anode = anode.childNodes[apt]; apt = 0; } else { alen = anode.length; apar = anode.parentElement; } fnode = s.focusNode; fpt = s.focusOffset;
if (fnode.tagName) { fnode = fnode.childNodes[fpt]; fpt = 0; } else { flen = fnode.length; fpar = fnode.parentElement; } }
if (anode == null  || fnode == null  ) {
System.out.println$S("JSEditorPaneUI anode or fnode is null ");
return false;
}var isAInTab=(alen == 4 && apt != 0  && C$.isJSTAB$O(apar) );
var isFInTab=(flen == 4 && fpt != 0  && C$.isJSTAB$O(fpar) );
var updateJS=false;
if (isAInTab) apt=(apt == 4 || (updateJS=toEnd)  ? 1 : 0);
if (isFInTab) fpt=(fpt == 4 || (updateJS=toEnd)  ? 1 : 0);
if (toStart && (isAInTab && apt == 0  || isFInTab && fpt == 0  ) ) updateJS=true;
mark=p$1.getJSDocOffset$swingjs_api_js_DOMNode.apply(this, [anode]);
dot=(anode === fnode  ? mark : p$1.getJSDocOffset$swingjs_api_js_DOMNode.apply(this, [fnode])) + fpt;
mark+=apt;
pt.x=mark;
pt.y=dot;
if (updateJS) this.setJSSelection$I$I$Z(mark, dot, false);
return true;
});

Clazz.newMeth(C$, 'setJSMarkAndDot$I$I$Z',  function (mark, dot, andScroll) {
if (this.isHtmlKit) return;
this.editor.getCaret$().setDot$I(dot);
p$1.updateDataUI.apply(this, []);
});

Clazz.newMeth(C$, 'isFocusable$',  function () {
return false;
});

Clazz.newMeth(C$, 'action$S$I',  function (what, data) {
if (this.isHtmlKit) return;
var p=-1;
switch (what) {
case "paste":
this.setText$S(null);
break;
case "delete":
try {
var doc=this.editor.getDocument$();
var caret=this.editor.getCaret$();
var dot=caret.getDot$();
var mark=caret.getMark$();
p=Math.min(dot, mark);
if (dot != mark) {
doc.remove$I$I(p, Math.abs(dot - mark));
} else {
var len=doc.getLength$();
if (data < 0 && dot == 0  || data > 0 && dot == len   || data == 0 ) return;
var delChars=1;
if (data < 0) dot-=2;
if (dot > 1 && dot < len - 1 ) {
var dotChars=doc.getText$I$I(dot, 2);
var c0=dotChars.charAt$I(0);
var c1=dotChars.charAt$I(1);
if (c0 >= "\ud800" && c0 <= "\udbff"  && c1 >= "\udc00"  && c1 <= "\udfff" ) {
delChars=2;
}}if (data < 0) {
if (delChars == 1) ++dot;
p=dot;
}doc.remove$I$I(dot, delChars);
}} catch (bl) {
if (Clazz.exceptionOf(bl,"javax.swing.text.BadLocationException")){
} else {
throw bl;
}
}
break;
}
if (p >= 0) {
this.setText$S(null);
this.setJSMarkAndDot$I$I$Z(p, p, false);
}});

Clazz.newMeth(C$, 'replaceText$S$I',  function (s, x) {
try {
if (x < 0) {
var xy=p$1.getJavaMarkAndDot.apply(this, []);
x=xy[0];
if (xy[1] > x) this.editor.getDocument$().remove$I$I(x, xy[1] - x);
}if (s != null ) this.editor.getDocument$().insertString$I$S$javax_swing_text_AttributeSet(x, s, null);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'getJavaMarkAndDot',  function () {
var x=this.editor.getCaret$().getMark$();
var y=this.editor.getCaret$().getDot$();
return Clazz.array(Integer.TYPE, -1, [Math.min(x, y), Math.max(x, y)]);
}, p$1);

Clazz.newMeth(C$, 'viewToModel$javax_swing_text_JTextComponent$java_awt_Point$javax_swing_text_Position_BiasA',  function (t, pt, biasReturn) {
return (this.isHtmlKit ? 0 : C$.superclazz.prototype.viewToModel$javax_swing_text_JTextComponent$java_awt_Point$javax_swing_text_Position_BiasA.apply(this, [t, pt, biasReturn]));
});

Clazz.newMeth(C$, 'handleCtrlV$I',  function (mode) {
this.getJSMarkAndDot$java_awt_Point$I($I$(14).markDot, 0);
var s=$I$(2).getAttr(this.domNode, "innerText");
switch (mode) {
case 401:
this.stemp=s;
this.xyTemp=p$1.getJavaMarkAndDot.apply(this, []);
return false;
case 400:
return false;
case 402:
return p$1.handleJSPasteRelease$S.apply(this, [s]);
}
return true;
});

Clazz.newMeth(C$, ['handleJSPasteEvent$swingjs_api_js_JQueryObject_JQEvent$O','handleJSPasteEvent'],  function (jqevent, e) {
var text=null;
var html=null;

var d = (e.originalEvent.clipboardData || window.clipboardData);
text = d.getData("text");
html = d.getData("text/html");
this.jsPasteText=text;
this.jsPasteHTML=(html.indexOf$I("\u00a0") >= 0 ? html.replaceAll$S$S("<span class=\"j2stab\">\u00a0\u00a0\u00a0\u00a0</span>", "\t").replaceAll$S$S("<span class=\"j2stab data-ui\">\u00a0\u00a0\u00a0\u00a0</span>", "\t") : html);
return false;
});

Clazz.newMeth(C$, 'handleJSPasteRelease$S',  function (s) {
if (this.isHtmlKit) {
return true;
}try {
var doc=this.editor.getDocument$();
var mark=this.xyTemp[0];
var dot=this.xyTemp[1];
var p=Math.min(dot, mark);
var a=null;
var text=this.jsPasteText;
if (Clazz.instanceOf(doc, "javax.swing.text.StyledDocument")) {
var sd=doc;
a=sd.getCharacterElement$I(p).getAttributes$();
if (this.jsPasteHTML.indexOf$I("\t") >= 0) {
text=C$.fixTabs$S$S(text, this.jsPasteHTML);
}}var len=text.length$();
if (dot != mark) doc.remove$I$I(p, Math.abs(dot - mark));
if (len > 0) doc.insertString$I$S$javax_swing_text_AttributeSet(p, text, a);
$I$(13,"invokeLater$Runnable",[((P$.JSEditorPaneUI$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "JSEditorPaneUI$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () {
this.b$['swingjs.plaf.JSEditorPaneUI'].editor.getCaret$.apply(this.b$['swingjs.plaf.JSEditorPaneUI'].editor, []).setDot$I.apply(this.b$['swingjs.plaf.JSEditorPaneUI'].editor.getCaret$.apply(this.b$['swingjs.plaf.JSEditorPaneUI'].editor, []), [this.$finals$.p + this.$finals$.len]);
});
})()
), Clazz.new_(P$.JSEditorPaneUI$lambda2.$init$,[this, {p:p,len:len}]))]);
} catch (bl) {
if (Clazz.exceptionOf(bl,"javax.swing.text.BadLocationException")){
} else {
throw bl;
}
}
return true;
}, p$1);

Clazz.newMeth(C$, 'fixTabs$S$S',  function (text, html) {
html=C$.replaceTag$S$S$S(html, "", "");

var s = "";
var p, q, i, j;
for (p = 0, q = 0, i = html.indexOf("\t"), j = text.indexOf("    "); i >= 0 && j >= 0; i = html.indexOf("\t", p), j = text.indexOf("    ", q)) { s += text.substring(q, j) + "\t";
p = i + 1;
q = j + 4;
} text = s + text.substring(q);
return text;
}, 1);

Clazz.newMeth(C$, 'replaceTag$S$S$S',  function (html, tag, rep) {
{
var S = html.replace(/\n/g,'').split("<" + tag);
var s = S[0];
for (var i = 1; i < S.length; i++) { var p = S[i].indexOf("/>");
var q = S[i].indexOf(">");
if (q >= 0 && (p < 0 || q < p)) p = q;
var t = S[i].substring(p + (q == p ? 1 : 2));
s += (rep.length ? "<" + tag + ">" : "") + t;
} !rep && (s = s.replaceAll("</" + tag + ">",""));
return s;
}
}, 1);

Clazz.newMeth(C$, 'tabCount$S',  function (s) {
var n=0;
for (var i=s.length$(); --i >= 0; ) if (s.charAt$I(i) == "\t") ++n;

return n;
}, p$1);

Clazz.newMeth(C$, 'setJSText$',  function () {
this.mytext=null;
C$.superclazz.prototype.setJSText$.apply(this, []);
});

Clazz.newMeth(C$, 'handleJSEvent$O$I$O',  function (target, eventType, jQueryEvent) {
var b=this.checkAllowEvent$O(jQueryEvent);
if (b != null ) return (b).valueOf();
switch (eventType) {
default:
return false;
case 504:
case 506:
case 505:
case 501:
case 502:
if (this.isHtmlKit) {
$I$(2).setAttrs(this.domNode, ["contentEditable", "\u79d8FALSE"]);
this.editor.秘jsHTMLHelper.handleJSEvent$O$I$O(target, eventType, jQueryEvent);
return true;
}return true;
case -2:
$I$(1).setIgnoreEvent$O(jQueryEvent);
if (this.isHtmlKit) {
$I$(2).setAttrs(this.domNode, ["contentEditable", "\u79d8TRUE"]);
return true;
}$I$(15,"秘dispatchKeyEvent$javax_swing_JComponent$I$O$J",[this.jc, 0, jQueryEvent, System.currentTimeMillis$()]);
return false;
}
});

Clazz.newMeth(C$, 'getMaximumSize$javax_swing_JComponent',  function (jc) {
return $I$(1).ANY_SIZE;
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent',  function (c) {
if (this.isTextPane) {
this.updateDOMNode$();
var sh=$I$(2).getStyle(this.domNode, "height");
var w=(this.scrollPaneUI != null  && this.scrollPaneUI.c.getWidth$() != 0  ? this.scrollPaneUI.c.getWidth$() : $I$(2).getWidth(this.domNode));
$I$(2).setStyle(this.domNode, "height", null);
var r=this.getBoundingRect$swingjs_api_js_DOMNode(this.domNode);
var h=(Math.max(0, Math.ceil(r.height))|0);
$I$(2).setStyle(this.domNode, "height", sh);
return Clazz.new_($I$(16,1).c$$I$I,[w, h]);
} else {
return C$.superclazz.prototype.getPreferredSize$javax_swing_JComponent.apply(this, [c]);
}});

Clazz.newMeth(C$, 'getMinimumSize$javax_swing_JComponent',  function (jc) {
var i=jc.getInsets$();
var d=Clazz.new_($I$(16,1));
d.width=(this.rootView.getMinimumSpan$I(0)|0) + i.left + i.right ;
d.height=(this.rootView.getMinimumSpan$I(1)|0) + i.top + i.bottom ;
return d;
});

Clazz.newMeth(C$, 'modelToView$javax_swing_text_JTextComponent$I$javax_swing_text_Position_Bias',  function (tc, pos, bias) {
var alloc=this.getVisibleEditorRect$();
var doc=this.editor.getDocument$();
var r1=this.getJSNodePt$swingjs_api_js_DOMNode$I$OA$I(this.focusNode, pos, null, 0);
try {
if (alloc != null ) {
this.rootView.setSize$F$F(alloc.width, alloc.height);
var s=this.rootView.modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias(pos, alloc, bias);
if (s != null ) {
return s.getBounds$();
}}} finally {
if (Clazz.instanceOf(doc, "javax.swing.text.AbstractDocument")) {
(doc).readUnlock$();
}}
return null;
});

Clazz.newMeth(C$, 'handleTab$O$S',  function (jqEvent, type) {
if (type === "keydown" ) p$1.checkKeyListeners.apply(this, []);
this.editor.setFocusTraversalKeysEnabled$Z(false);
return null;
});

Clazz.newMeth(C$, 'checkKeyListeners',  function () {
if (this.editor.秘getLastKeyListener$() !== this ) {
this.editor.removeKeyListener$java_awt_event_KeyListener(this);
this.editor.addKeyListener$java_awt_event_KeyListener(this);
}}, p$1);

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent',  function (e) {
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent',  function (e) {
if (e.getKeyCode$() == 9) {
if (!e.isConsumed$()) {
p$1.replaceText$S$I.apply(this, ["\t", -1]);
e.consume$();
}}});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent',  function (e) {
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSEditorPaneUI, "Node", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['length'],'S',['tagName','innerText','textContent'],'O',['childNodes','swingjs.plaf.JSEditorPaneUI.Node[]','parentNode','swingjs.plaf.JSEditorPaneUI.Node']]]

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:07 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
