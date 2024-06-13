(function(){var P$=Clazz.newPackage("javax.swing.text"),I$=[[0,'javax.swing.text.StyleConstants','javax.swing.text.StateInvariantError','java.awt.Toolkit']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LabelView", null, 'javax.swing.text.GlyphView', 'javax.swing.text.TabableView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['underline','strike','superscript','subscript'],'O',['font','java.awt.Font','fg','java.awt.Color','+bg']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[elem]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'sync$',  function () {
if (this.font == null ) {
this.setPropertiesFromAttributes$();
}});

Clazz.newMeth(C$, 'setUnderline$Z',  function (u) {
this.underline=u;
});

Clazz.newMeth(C$, 'setStrikeThrough$Z',  function (s) {
this.strike=s;
});

Clazz.newMeth(C$, 'setSuperscript$Z',  function (s) {
this.superscript=s;
});

Clazz.newMeth(C$, 'setSubscript$Z',  function (s) {
this.subscript=s;
});

Clazz.newMeth(C$, 'setBackground$java_awt_Color',  function (bg) {
this.bg=bg;
});

Clazz.newMeth(C$, 'setPropertiesFromAttributes$',  function () {
var attr=this.getAttributes$();
if (attr != null ) {
var d=this.getDocument$();
if (Clazz.instanceOf(d, "javax.swing.text.StyledDocument")) {
var doc=d;
this.font=doc.getFont$javax_swing_text_AttributeSet(attr);
this.fg=doc.getForeground$javax_swing_text_AttributeSet(attr);
if (attr.isDefined$O($I$(1).Background)) {
this.bg=doc.getBackground$javax_swing_text_AttributeSet(attr);
} else {
this.bg=null;
}this.setUnderline$Z($I$(1).isUnderline$javax_swing_text_AttributeSet(attr));
this.setStrikeThrough$Z($I$(1).isStrikeThrough$javax_swing_text_AttributeSet(attr));
this.setSuperscript$Z($I$(1).isSuperscript$javax_swing_text_AttributeSet(attr));
this.setSubscript$Z($I$(1).isSubscript$javax_swing_text_AttributeSet(attr));
} else {
throw Clazz.new_($I$(2,1).c$$S,["LabelView needs StyledDocument"]);
}}});

Clazz.newMeth(C$, 'getFontMetrics$',  function () {
this.sync$();
var c=this.getContainer$();
return (c != null ) ? c.getFontMetrics$java_awt_Font(this.font) : $I$(3).getDefaultToolkit$().getFontMetrics$java_awt_Font(this.font);
});

Clazz.newMeth(C$, 'getBackground$',  function () {
this.sync$();
return this.bg;
});

Clazz.newMeth(C$, 'getForeground$',  function () {
this.sync$();
return this.fg;
});

Clazz.newMeth(C$, 'getFont$',  function () {
this.sync$();
return this.font;
});

Clazz.newMeth(C$, 'isUnderline$',  function () {
this.sync$();
return this.underline;
});

Clazz.newMeth(C$, 'isStrikeThrough$',  function () {
this.sync$();
return this.strike;
});

Clazz.newMeth(C$, 'isSubscript$',  function () {
this.sync$();
return this.subscript;
});

Clazz.newMeth(C$, 'isSuperscript$',  function () {
this.sync$();
return this.superscript;
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (e, a, f) {
this.font=null;
C$.superclazz.prototype.changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory.apply(this, [e, a, f]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:21 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
