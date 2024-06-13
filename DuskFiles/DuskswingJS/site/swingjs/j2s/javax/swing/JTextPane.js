(function(){var P$=Clazz.newPackage("javax.swing"),p$1={},I$=[[0,'javax.swing.JEditorPane','javax.swing.UIManager','javax.swing.text.StyleConstants','javax.swing.text.StyledEditorKit']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JTextPane", null, 'javax.swing.JEditorPane');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
var editorKit=this.createDefaultEditorKit$();
var contentType=editorKit.getContentType$();
if (contentType != null  && $I$(1).getEditorKitClassNameForContentType$S(contentType) == $I$(1).defaultEditorKitMap.get$O(contentType) ) {
this.setEditorKitForContentType$S$javax_swing_text_EditorKit(contentType, editorKit);
}this.setEditorKit$javax_swing_text_EditorKit(editorKit);
}, 1);

Clazz.newMeth(C$, 'getUIClassID$',  function () {
return "TextPaneUI";
});

Clazz.newMeth(C$, 'c$$javax_swing_text_StyledDocument',  function (doc) {
C$.c$.apply(this, []);
this.setStyledDocument$javax_swing_text_StyledDocument(doc);
}, 1);

Clazz.newMeth(C$, 'setDocument$javax_swing_text_Document',  function (doc) {
if (Clazz.instanceOf(doc, "javax.swing.text.StyledDocument")) {
C$.superclazz.prototype.setDocument$javax_swing_text_Document.apply(this, [doc]);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Model must be StyledDocument"]);
}});

Clazz.newMeth(C$, 'setStyledDocument$javax_swing_text_StyledDocument',  function (doc) {
C$.superclazz.prototype.setDocument$javax_swing_text_Document.apply(this, [doc]);
});

Clazz.newMeth(C$, 'getStyledDocument$',  function () {
return this.getDocument$();
});

Clazz.newMeth(C$, 'replaceSelection$S',  function (content) {
p$1.replaceSelection$S$Z.apply(this, [content, true]);
});

Clazz.newMeth(C$, 'replaceSelection$S$Z',  function (content, checkEditable) {
if (checkEditable && !this.isEditable$() ) {
$I$(2).getLookAndFeel$().provideErrorFeedback$java_awt_Component(this);
return;
}var doc=this.getStyledDocument$();
if (doc != null ) {
try {
var caret=this.getCaret$();
var p0=Math.min(caret.getDot$(), caret.getMark$());
var p1=Math.max(caret.getDot$(), caret.getMark$());
var attr=this.getInputAttributes$().copyAttributes$();
if (Clazz.instanceOf(doc, "javax.swing.text.AbstractDocument")) {
(doc).replace$I$I$S$javax_swing_text_AttributeSet$javax_swing_text_JTextComponent(p0, p1 - p0, content, attr, this);
} else {
if (p0 != p1) {
doc.remove$I$I(p0, p1 - p0);
}if (content != null  && content.length$() > 0 ) {
doc.insertString$I$S$javax_swing_text_AttributeSet(p0, content, attr);
}}} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
$I$(2).getLookAndFeel$().provideErrorFeedback$java_awt_Component(this);
} else {
throw e;
}
}
}}, p$1);

Clazz.newMeth(C$, 'insertComponent$java_awt_Component',  function (c) {
var inputAttributes=this.getInputAttributes$();
inputAttributes.removeAttributes$javax_swing_text_AttributeSet(inputAttributes);
$I$(3).setComponent$javax_swing_text_MutableAttributeSet$java_awt_Component(inputAttributes, c);
p$1.replaceSelection$S$Z.apply(this, [" ", false]);
inputAttributes.removeAttributes$javax_swing_text_AttributeSet(inputAttributes);
});

Clazz.newMeth(C$, 'insertIcon$javax_swing_Icon',  function (g) {
var inputAttributes=this.getInputAttributes$();
inputAttributes.removeAttributes$javax_swing_text_AttributeSet(inputAttributes);
$I$(3).setIcon$javax_swing_text_MutableAttributeSet$javax_swing_Icon(inputAttributes, g);
p$1.replaceSelection$S$Z.apply(this, [" ", false]);
inputAttributes.removeAttributes$javax_swing_text_AttributeSet(inputAttributes);
});

Clazz.newMeth(C$, 'addStyle$S$javax_swing_text_Style',  function (nm, parent) {
var doc=this.getStyledDocument$();
return doc.addStyle$S$javax_swing_text_Style(nm, parent);
});

Clazz.newMeth(C$, 'removeStyle$S',  function (nm) {
var doc=this.getStyledDocument$();
doc.removeStyle$S(nm);
});

Clazz.newMeth(C$, 'getStyle$S',  function (nm) {
var doc=this.getStyledDocument$();
return doc.getStyle$S(nm);
});

Clazz.newMeth(C$, 'setLogicalStyle$javax_swing_text_Style',  function (s) {
var doc=this.getStyledDocument$();
doc.setLogicalStyle$I$javax_swing_text_Style(this.getCaretPosition$(), s);
});

Clazz.newMeth(C$, 'getLogicalStyle$',  function () {
var doc=this.getStyledDocument$();
return doc.getLogicalStyle$I(this.getCaretPosition$());
});

Clazz.newMeth(C$, 'getCharacterAttributes$',  function () {
var doc=this.getStyledDocument$();
var run=doc.getCharacterElement$I(this.getCaretPosition$());
if (run != null ) {
return run.getAttributes$();
}return null;
});

Clazz.newMeth(C$, 'setCharacterAttributes$javax_swing_text_AttributeSet$Z',  function (attr, replace) {
var p0=this.getSelectionStart$();
var p1=this.getSelectionEnd$();
if (p0 != p1) {
var doc=this.getStyledDocument$();
doc.setCharacterAttributes$I$I$javax_swing_text_AttributeSet$Z(p0, p1 - p0, attr, replace);
} else {
var inputAttributes=this.getInputAttributes$();
if (replace) {
inputAttributes.removeAttributes$javax_swing_text_AttributeSet(inputAttributes);
}inputAttributes.addAttributes$javax_swing_text_AttributeSet(attr);
}});

Clazz.newMeth(C$, 'getParagraphAttributes$',  function () {
var doc=this.getStyledDocument$();
var paragraph=doc.getParagraphElement$I(this.getCaretPosition$());
if (paragraph != null ) {
return paragraph.getAttributes$();
}return null;
});

Clazz.newMeth(C$, 'setParagraphAttributes$javax_swing_text_AttributeSet$Z',  function (attr, replace) {
var p0=this.getSelectionStart$();
var p1=this.getSelectionEnd$();
var doc=this.getStyledDocument$();
doc.setParagraphAttributes$I$I$javax_swing_text_AttributeSet$Z(p0, p1 - p0, attr, replace);
});

Clazz.newMeth(C$, 'getInputAttributes$',  function () {
return this.getStyledEditorKit$().getInputAttributes$();
});

Clazz.newMeth(C$, 'getStyledEditorKit$',  function () {
return this.getEditorKit$();
});

Clazz.newMeth(C$, 'createDefaultEditorKit$',  function () {
return Clazz.new_($I$(4,1));
});

Clazz.newMeth(C$, 'setEditorKit$javax_swing_text_EditorKit',  function (kit) {
if (Clazz.instanceOf(kit, "javax.swing.text.StyledEditorKit")) {
C$.superclazz.prototype.setEditorKit$javax_swing_text_EditorKit.apply(this, [kit]);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be StyledEditorKit"]);
}});

Clazz.newMeth(C$, 'paramString$',  function () {
return C$.superclazz.prototype.paramString$.apply(this, []);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:59 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
