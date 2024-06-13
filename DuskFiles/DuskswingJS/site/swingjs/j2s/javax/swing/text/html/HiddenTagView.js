(function(){var P$=Clazz.newPackage("javax.swing.text.html"),I$=[[0,'javax.swing.text.html.HiddenTagView','java.awt.Insets','java.awt.Color',['javax.swing.text.html.HiddenTagView','.StartTagBorder'],['javax.swing.text.html.HiddenTagView','.EndTagBorder'],'javax.swing.JTextField','javax.swing.JPanel','java.awt.BorderLayout','java.awt.Toolkit','javax.swing.SwingUtilities','javax.swing.text.StyleConstants','javax.swing.text.SimpleAttributeSet',['javax.swing.text.html.HTML','.UnknownTag'],['javax.swing.text.html.HTML','.Attribute']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HiddenTagView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.text.html.EditableView', 'javax.swing.event.DocumentListener');
C$.$classes$=[['StartTagBorder',8],['EndTagBorder',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isSettingAttributes'],'F',['yAlign']]
,['O',['UnknownTagBorderColor','java.awt.Color','StartBorder','javax.swing.border.Border','+EndBorder']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (e) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[e]);C$.$init$.apply(this);
this.yAlign=1;
}, 1);

Clazz.newMeth(C$, 'createComponent$',  function () {
var tf=Clazz.new_([this.getElement$().getName$()],$I$(6,1).c$$S);
var doc=this.getDocument$();
var font;
if (Clazz.instanceOf(doc, "javax.swing.text.StyledDocument")) {
font=(doc).getFont$javax_swing_text_AttributeSet(this.getAttributes$());
tf.setFont$java_awt_Font(font);
} else {
font=tf.getFont$();
}tf.getDocument$().addDocumentListener$javax_swing_event_DocumentListener(this);
this.updateYAlign$java_awt_Font(font);
var panel=Clazz.new_([Clazz.new_($I$(8,1))],$I$(7,1).c$$java_awt_LayoutManager);
panel.setBackground$java_awt_Color(null);
if (this.isEndTag$()) {
panel.setBorder$javax_swing_border_Border(C$.EndBorder);
} else {
panel.setBorder$javax_swing_border_Border(C$.StartBorder);
}panel.add$java_awt_Component(tf);
return panel;
});

Clazz.newMeth(C$, 'getAlignment$I',  function (axis) {
if (axis == 1) {
return this.yAlign;
}return 0.5;
});

Clazz.newMeth(C$, 'getMinimumSpan$I',  function (axis) {
if (axis == 0 && this.isVisible$() ) {
return Math.max(30, C$.superclazz.prototype.getPreferredSpan$I.apply(this, [axis]));
}return C$.superclazz.prototype.getMinimumSpan$I.apply(this, [axis]);
});

Clazz.newMeth(C$, 'getPreferredSpan$I',  function (axis) {
if (axis == 0 && this.isVisible$() ) {
return Math.max(30, C$.superclazz.prototype.getPreferredSpan$I.apply(this, [axis]));
}return C$.superclazz.prototype.getPreferredSpan$I.apply(this, [axis]);
});

Clazz.newMeth(C$, 'getMaximumSpan$I',  function (axis) {
if (axis == 0 && this.isVisible$() ) {
return Math.max(30, C$.superclazz.prototype.getMaximumSpan$I.apply(this, [axis]));
}return C$.superclazz.prototype.getMaximumSpan$I.apply(this, [axis]);
});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent',  function (e) {
this.updateModelFromText$();
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent',  function (e) {
this.updateModelFromText$();
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent',  function (e) {
this.updateModelFromText$();
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (e, a, f) {
if (!this.isSettingAttributes) {
this.setTextFromModel$();
}});

Clazz.newMeth(C$, 'updateYAlign$java_awt_Font',  function (font) {
var c=this.getContainer$();
var fm=(c != null ) ? c.getFontMetrics$java_awt_Font(font) : $I$(9).getDefaultToolkit$().getFontMetrics$java_awt_Font(font);
var h=fm.getHeight$();
var d=fm.getDescent$();
this.yAlign=(h > 0 ) ? (h - d) / h : 0;
});

Clazz.newMeth(C$, 'resetBorder$',  function () {
var comp=this.getComponent$();
if (comp != null ) {
if (this.isEndTag$()) {
(comp).setBorder$javax_swing_border_Border(C$.EndBorder);
} else {
(comp).setBorder$javax_swing_border_Border(C$.StartBorder);
}}});

Clazz.newMeth(C$, 'setTextFromModel$',  function () {
if ($I$(10).isEventDispatchThread$()) {
this._setTextFromModel$();
} else {
$I$(10,"invokeLater$Runnable",[((P$.HiddenTagView$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "HiddenTagView$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['javax.swing.text.html.HiddenTagView']._setTextFromModel$.apply(this.b$['javax.swing.text.html.HiddenTagView'], []);
});
})()
), Clazz.new_(P$.HiddenTagView$1.$init$,[this, null]))]);
}});

Clazz.newMeth(C$, '_setTextFromModel$',  function () {
var doc=this.getDocument$();
try {
this.isSettingAttributes=true;
if (Clazz.instanceOf(doc, "javax.swing.text.AbstractDocument")) {
(doc).readLock$();
}var text=this.getTextComponent$();
if (text != null ) {
text.setText$S(this.getRepresentedText$());
this.resetBorder$();
var host=this.getContainer$();
if (host != null ) {
this.preferenceChanged$javax_swing_text_View$Z$Z(this, true, true);
host.repaint$();
}}} finally {
this.isSettingAttributes=false;
if (Clazz.instanceOf(doc, "javax.swing.text.AbstractDocument")) {
(doc).readUnlock$();
}}
});

Clazz.newMeth(C$, 'updateModelFromText$',  function () {
if (!this.isSettingAttributes) {
if ($I$(10).isEventDispatchThread$()) {
this._updateModelFromText$();
} else {
$I$(10,"invokeLater$Runnable",[((P$.HiddenTagView$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "HiddenTagView$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
this.b$['javax.swing.text.html.HiddenTagView']._updateModelFromText$.apply(this.b$['javax.swing.text.html.HiddenTagView'], []);
});
})()
), Clazz.new_(P$.HiddenTagView$2.$init$,[this, null]))]);
}}});

Clazz.newMeth(C$, '_updateModelFromText$',  function () {
var doc=this.getDocument$();
var name=this.getElement$().getAttributes$().getAttribute$O($I$(11).NameAttribute);
if ((Clazz.instanceOf(name, "javax.swing.text.html.HTML.UnknownTag")) && (Clazz.instanceOf(doc, "javax.swing.text.StyledDocument")) ) {
var sas=Clazz.new_($I$(12,1));
var textComponent=this.getTextComponent$();
if (textComponent != null ) {
var text=textComponent.getText$();
this.isSettingAttributes=true;
try {
sas.addAttribute$O$O($I$(11).NameAttribute, Clazz.new_($I$(13,1).c$$S,[text]));
(doc).setCharacterAttributes$I$I$javax_swing_text_AttributeSet$Z(this.getStartOffset$(), this.getEndOffset$() - this.getStartOffset$(), sas, false);
} finally {
this.isSettingAttributes=false;
}
}}});

Clazz.newMeth(C$, 'getTextComponent$',  function () {
var comp=this.getComponent$();
return (comp == null ) ? null : (comp).getComponent$I(0);
});

Clazz.newMeth(C$, 'getRepresentedText$',  function () {
var retValue=this.getElement$().getName$();
return (retValue == null ) ? "" : retValue;
});

Clazz.newMeth(C$, 'isEndTag$',  function () {
var as=this.getElement$().getAttributes$();
if (as != null ) {
var end=as.getAttribute$O($I$(14).ENDTAG);
if (end != null  && (Clazz.instanceOf(end, "java.lang.String"))  && (end).equals$O("true") ) {
return true;
}}return false;
});

C$.$static$=function(){C$.$static$=0;
C$.UnknownTagBorderColor=$I$(3).black;
C$.StartBorder=Clazz.new_($I$(4,1));
C$.EndBorder=Clazz.new_($I$(5,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.HiddenTagView, "StartTagBorder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['javax.swing.border.Border', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I',  function (c, g, x, y, width, height) {
g.setColor$java_awt_Color($I$(1).UnknownTagBorderColor);
x+=3;
width-=(6);
g.drawLine$I$I$I$I(x, y + 3, x, y + height - 3);
g.drawArc$I$I$I$I$I$I(x, y + height - 6 - 1, 6, 6, 180, 90);
g.drawArc$I$I$I$I$I$I(x, y, 6, 6, 90, 90);
g.drawLine$I$I$I$I(x + 3, y, x + width - 6, y);
g.drawLine$I$I$I$I(x + 3, y + height - 1, x + width - 6, y + height - 1);
g.drawLine$I$I$I$I(x + width - 6, y, x + width - 1, y + (height/2|0));
g.drawLine$I$I$I$I(x + width - 6, y + height, x + width - 1, y + (height/2|0));
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component',  function (c) {
return Clazz.new_($I$(2,1).c$$I$I$I$I,[2, 5, 2, 11]);
});

Clazz.newMeth(C$, 'isBorderOpaque$',  function () {
return false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HiddenTagView, "EndTagBorder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['javax.swing.border.Border', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I',  function (c, g, x, y, width, height) {
g.setColor$java_awt_Color($I$(1).UnknownTagBorderColor);
x+=3;
width-=(6);
g.drawLine$I$I$I$I(x + width - 1, y + 3, x + width - 1, y + height - 3);
g.drawArc$I$I$I$I$I$I(x + width - 6 - 1, y + height - 6 - 1, 6, 6, 270, 90);
g.drawArc$I$I$I$I$I$I(x + width - 6 - 1, y, 6, 6, 0, 90);
g.drawLine$I$I$I$I(x + 6, y, x + width - 3, y);
g.drawLine$I$I$I$I(x + 6, y + height - 1, x + width - 3, y + height - 1);
g.drawLine$I$I$I$I(x + 6, y, x, y + (height/2|0));
g.drawLine$I$I$I$I(x + 6, y + height, x, y + (height/2|0));
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component',  function (c) {
return Clazz.new_($I$(2,1).c$$I$I$I$I,[2, 11, 2, 5]);
});

Clazz.newMeth(C$, 'isBorderOpaque$',  function () {
return false;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
