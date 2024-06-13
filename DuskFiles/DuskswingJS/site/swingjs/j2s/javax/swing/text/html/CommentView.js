(function(){var P$=Clazz.newPackage("javax.swing.text.html"),I$=[[0,'java.awt.Color',['javax.swing.text.html.CommentView','.CommentBorder'],'javax.swing.JTextArea','javax.swing.text.SimpleAttributeSet',['javax.swing.text.html.HTML','.Attribute']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CommentView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.text.html.HiddenTagView');
C$.$classes$=[['CommentBorder',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['CBorder','javax.swing.border.Border']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (e) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[e]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createComponent$',  function () {
var host=this.getContainer$();
if (host != null  && !(host).isEditable$() ) {
return null;
}var ta=Clazz.new_([this.getRepresentedText$()],$I$(3,1).c$$S);
var doc=this.getDocument$();
var font;
if (Clazz.instanceOf(doc, "javax.swing.text.StyledDocument")) {
font=(doc).getFont$javax_swing_text_AttributeSet(this.getAttributes$());
ta.setFont$java_awt_Font(font);
} else {
font=ta.getFont$();
}this.updateYAlign$java_awt_Font(font);
ta.setBorder$javax_swing_border_Border(C$.CBorder);
ta.getDocument$().addDocumentListener$javax_swing_event_DocumentListener(this);
ta.setFocusable$Z(this.isVisible$());
return ta;
});

Clazz.newMeth(C$, 'resetBorder$',  function () {
});

Clazz.newMeth(C$, '_updateModelFromText$',  function () {
var textC=this.getTextComponent$();
var doc=this.getDocument$();
if (textC != null  && doc != null  ) {
var text=textC.getText$();
var sas=Clazz.new_($I$(4,1));
this.isSettingAttributes=true;
try {
sas.addAttribute$O$O($I$(5).COMMENT, text);
(doc).setCharacterAttributes$I$I$javax_swing_text_AttributeSet$Z(this.getStartOffset$(), this.getEndOffset$() - this.getStartOffset$(), sas, false);
} finally {
this.isSettingAttributes=false;
}
}});

Clazz.newMeth(C$, 'getTextComponent$',  function () {
return this.getComponent$();
});

Clazz.newMeth(C$, 'getRepresentedText$',  function () {
var as=this.getElement$().getAttributes$();
if (as != null ) {
var comment=as.getAttribute$O($I$(5).COMMENT);
if (Clazz.instanceOf(comment, "java.lang.String")) {
return comment;
}}return "";
});

C$.$static$=function(){C$.$static$=0;
C$.CBorder=Clazz.new_($I$(2,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.CommentView, "CommentBorder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.border.LineBorder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$java_awt_Color$I.apply(this,[$I$(1).black, 1]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I',  function (c, g, x, y, width, height) {
C$.superclazz.prototype.paintBorder$java_awt_Component$java_awt_Graphics$I$I$I$I.apply(this, [c, g, x + 3, y, width - 9, height]);
});

Clazz.newMeth(C$, 'getBorderInsets$java_awt_Component$java_awt_Insets',  function (c, insets) {
var retI=C$.superclazz.prototype.getBorderInsets$java_awt_Component$java_awt_Insets.apply(this, [c, insets]);
retI.left+=3;
retI.right+=3;
return retI;
});

Clazz.newMeth(C$, 'isBorderOpaque$',  function () {
return false;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:26 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
