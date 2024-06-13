(function(){var P$=Clazz.newPackage("javax.swing.text"),p$1={},I$=[[0,'javax.swing.text.LabelView','javax.swing.text.ParagraphView','javax.swing.text.BoxView','javax.swing.text.ComponentView','javax.swing.text.IconView','javax.swing.text.SimpleAttributeSet','javax.swing.text.StyleConstants','javax.swing.UIManager','java.awt.Color',['javax.swing.text.StyledEditorKit','.StyledViewFactory'],'javax.swing.Action',['javax.swing.text.StyledEditorKit','.FontFamilyAction'],['javax.swing.text.StyledEditorKit','.FontSizeAction'],['javax.swing.text.StyledEditorKit','.AlignmentAction'],['javax.swing.text.StyledEditorKit','.BoldAction'],['javax.swing.text.StyledEditorKit','.ItalicAction'],['javax.swing.text.StyledEditorKit','.StyledInsertBreakAction'],['javax.swing.text.StyledEditorKit','.UnderlineAction'],'javax.swing.text.TextAction','javax.swing.text.DefaultStyledDocument',['javax.swing.text.StyledEditorKit','.AttributeTracker']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StyledEditorKit", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.text.DefaultEditorKit');
C$.$classes$=[['AttributeTracker',0],['StyledViewFactory',8],['StyledTextAction',1033],['FontFamilyAction',9],['FontSizeAction',9],['ForegroundAction',9],['AlignmentAction',9],['BoldAction',9],['ItalicAction',9],['UnderlineAction',9],['StyledInsertBreakAction',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['currentRun','javax.swing.text.Element','+currentParagraph','inputAttributes','javax.swing.text.MutableAttributeSet','inputAttributeUpdater','javax.swing.text.StyledEditorKit.AttributeTracker']]
,['O',['defaultFactory','javax.swing.text.ViewFactory','$defaultActions','javax.swing.Action[]']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
p$1.createInputAttributeUpdated.apply(this, []);
p$1.createInputAttributes.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getInputAttributes$',  function () {
return this.inputAttributes;
});

Clazz.newMeth(C$, 'getCharacterAttributeRun$',  function () {
return this.currentRun;
});

Clazz.newMeth(C$, 'getActions$',  function () {
return $I$(19,"augmentList$javax_swing_ActionA$javax_swing_ActionA",[C$.superclazz.prototype.getActions$.apply(this, []), C$.$defaultActions]);
});

Clazz.newMeth(C$, 'createDefaultDocument$',  function () {
return Clazz.new_($I$(20,1));
});

Clazz.newMeth(C$, 'install$javax_swing_JEditorPane',  function (c) {
c.addCaretListener$javax_swing_event_CaretListener(this.inputAttributeUpdater);
c.addPropertyChangeListener$java_beans_PropertyChangeListener(this.inputAttributeUpdater);
var caret=c.getCaret$();
if (caret != null ) {
this.inputAttributeUpdater.updateInputAttributes$I$I$javax_swing_text_JTextComponent(caret.getDot$(), caret.getMark$(), c);
}});

Clazz.newMeth(C$, 'deinstall$javax_swing_JEditorPane',  function (c) {
c.removeCaretListener$javax_swing_event_CaretListener(this.inputAttributeUpdater);
c.removePropertyChangeListener$java_beans_PropertyChangeListener(this.inputAttributeUpdater);
this.currentRun=null;
this.currentParagraph=null;
});

Clazz.newMeth(C$, 'getViewFactory$',  function () {
return C$.defaultFactory;
});

Clazz.newMeth(C$, 'clone$',  function () {
var o=C$.superclazz.prototype.clone$.apply(this, []);
o.currentRun=o.currentParagraph=null;
p$1.createInputAttributeUpdated.apply(o, []);
p$1.createInputAttributes.apply(o, []);
return o;
});

Clazz.newMeth(C$, 'createInputAttributes',  function () {
this.inputAttributes=((P$.StyledEditorKit$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "StyledEditorKit$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.text.SimpleAttributeSet'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getResolveParent$',  function () {
return (this.b$['javax.swing.text.StyledEditorKit'].currentParagraph != null ) ? this.b$['javax.swing.text.StyledEditorKit'].currentParagraph.getAttributes$() : null;
});

Clazz.newMeth(C$, 'clone$',  function () {
return Clazz.new_($I$(6,1).c$$javax_swing_text_AttributeSet,[this]);
});
})()
), Clazz.new_($I$(6,1),[this, null],P$.StyledEditorKit$1));
}, p$1);

Clazz.newMeth(C$, 'createInputAttributeUpdated',  function () {
this.inputAttributeUpdater=Clazz.new_($I$(21,1),[this, null]);
}, p$1);

Clazz.newMeth(C$, 'createInputAttributes$javax_swing_text_Element$javax_swing_text_MutableAttributeSet',  function (element, set) {
if (element.getAttributes$().getAttributeCount$() > 0 || element.getEndOffset$() - element.getStartOffset$() > 1  || element.getEndOffset$() < element.getDocument$().getLength$() ) {
set.removeAttributes$javax_swing_text_AttributeSet(set);
set.addAttributes$javax_swing_text_AttributeSet(element.getAttributes$());
set.removeAttribute$O($I$(7).ComponentAttribute);
set.removeAttribute$O($I$(7).IconAttribute);
set.removeAttribute$O("$ename");
set.removeAttribute$O($I$(7).ComposedTextAttribute);
}});

C$.$static$=function(){C$.$static$=0;
C$.defaultFactory=Clazz.new_($I$(10,1));
C$.$defaultActions=Clazz.array($I$(11), -1, [Clazz.new_($I$(12,1).c$$S$S,["font-family-SansSerif", "SansSerif"]), Clazz.new_($I$(12,1).c$$S$S,["font-family-Monospaced", "Monospaced"]), Clazz.new_($I$(12,1).c$$S$S,["font-family-Serif", "Serif"]), Clazz.new_($I$(13,1).c$$S$I,["font-size-8", 8]), Clazz.new_($I$(13,1).c$$S$I,["font-size-10", 10]), Clazz.new_($I$(13,1).c$$S$I,["font-size-12", 12]), Clazz.new_($I$(13,1).c$$S$I,["font-size-14", 14]), Clazz.new_($I$(13,1).c$$S$I,["font-size-16", 16]), Clazz.new_($I$(13,1).c$$S$I,["font-size-18", 18]), Clazz.new_($I$(13,1).c$$S$I,["font-size-24", 24]), Clazz.new_($I$(13,1).c$$S$I,["font-size-36", 36]), Clazz.new_($I$(13,1).c$$S$I,["font-size-48", 48]), Clazz.new_($I$(14,1).c$$S$I,["left-justify", 0]), Clazz.new_($I$(14,1).c$$S$I,["center-justify", 1]), Clazz.new_($I$(14,1).c$$S$I,["right-justify", 2]), Clazz.new_($I$(15,1)), Clazz.new_($I$(16,1)), Clazz.new_($I$(17,1)), Clazz.new_($I$(18,1))]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyledEditorKit, "AttributeTracker", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['javax.swing.event.CaretListener', 'java.beans.PropertyChangeListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'updateInputAttributes$I$I$javax_swing_text_JTextComponent',  function (dot, mark, c) {
var aDoc=c.getDocument$();
if (!(Clazz.instanceOf(aDoc, "javax.swing.text.StyledDocument"))) {
return;
}var start=Math.min(dot, mark);
var doc=aDoc;
var run;
this.b$['javax.swing.text.StyledEditorKit'].currentParagraph=doc.getParagraphElement$I(start);
if (this.b$['javax.swing.text.StyledEditorKit'].currentParagraph.getStartOffset$() == start || dot != mark ) {
run=doc.getCharacterElement$I(start);
} else {
run=doc.getCharacterElement$I(Math.max(start - 1, 0));
}if (run !== this.b$['javax.swing.text.StyledEditorKit'].currentRun ) {
this.b$['javax.swing.text.StyledEditorKit'].currentRun=run;
this.b$['javax.swing.text.StyledEditorKit'].createInputAttributes$javax_swing_text_Element$javax_swing_text_MutableAttributeSet.apply(this.b$['javax.swing.text.StyledEditorKit'], [this.b$['javax.swing.text.StyledEditorKit'].currentRun, this.b$['javax.swing.text.StyledEditorKit'].getInputAttributes$.apply(this.b$['javax.swing.text.StyledEditorKit'], [])]);
}});

Clazz.newMeth(C$, 'propertyChange$java_beans_PropertyChangeEvent',  function (evt) {
var newValue=evt.getNewValue$();
var source=evt.getSource$();
if ((Clazz.instanceOf(source, "javax.swing.text.JTextComponent")) && (Clazz.instanceOf(newValue, "javax.swing.text.Document")) ) {
this.updateInputAttributes$I$I$javax_swing_text_JTextComponent(0, 0, source);
}});

Clazz.newMeth(C$, 'caretUpdate$javax_swing_event_CaretEvent',  function (e) {
this.updateInputAttributes$I$I$javax_swing_text_JTextComponent(e.getDot$(), e.getMark$(), e.getSource$());
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyledEditorKit, "StyledViewFactory", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'javax.swing.text.ViewFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'create$javax_swing_text_Element',  function (elem) {
var kind=elem.getName$();
if (kind != null ) {
if (kind.equals$O("content")) {
return Clazz.new_($I$(1,1).c$$javax_swing_text_Element,[elem]);
} else if (kind.equals$O("paragraph")) {
return Clazz.new_($I$(2,1).c$$javax_swing_text_Element,[elem]);
} else if (kind.equals$O("section")) {
return Clazz.new_($I$(3,1).c$$javax_swing_text_Element$I,[elem, 1]);
} else if (kind.equals$O("component")) {
return Clazz.new_($I$(4,1).c$$javax_swing_text_Element,[elem]);
} else if (kind.equals$O("icon")) {
return Clazz.new_($I$(5,1).c$$javax_swing_text_Element,[elem]);
}}return Clazz.new_($I$(1,1).c$$javax_swing_text_Element,[elem]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyledEditorKit, "StyledTextAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javax.swing.text.TextAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (nm) {
;C$.superclazz.c$$S.apply(this,[nm]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getEditor$java_awt_event_ActionEvent',  function (e) {
var tcomp=this.getTextComponent$java_awt_event_ActionEvent(e);
if (Clazz.instanceOf(tcomp, "javax.swing.JEditorPane")) {
return tcomp;
}return null;
});

Clazz.newMeth(C$, 'getStyledDocument$javax_swing_JEditorPane',  function (e) {
var d=e.getDocument$();
if (Clazz.instanceOf(d, "javax.swing.text.StyledDocument")) {
return d;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["document must be StyledDocument"]);
});

Clazz.newMeth(C$, 'getStyledEditorKit$javax_swing_JEditorPane',  function (e) {
var k=e.getEditorKit$();
if (Clazz.instanceOf(k, "javax.swing.text.StyledEditorKit")) {
return k;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["EditorKit must be StyledEditorKit"]);
});

Clazz.newMeth(C$, 'setCharacterAttributes$javax_swing_JEditorPane$javax_swing_text_AttributeSet$Z',  function (editor, attr, replace) {
var p0=editor.getSelectionStart$();
var p1=editor.getSelectionEnd$();
if (p0 != p1) {
var doc=this.getStyledDocument$javax_swing_JEditorPane(editor);
doc.setCharacterAttributes$I$I$javax_swing_text_AttributeSet$Z(p0, p1 - p0, attr, replace);
}var k=this.getStyledEditorKit$javax_swing_JEditorPane(editor);
var inputAttributes=k.getInputAttributes$();
if (replace) {
inputAttributes.removeAttributes$javax_swing_text_AttributeSet(inputAttributes);
}inputAttributes.addAttributes$javax_swing_text_AttributeSet(attr);
});

Clazz.newMeth(C$, 'setParagraphAttributes$javax_swing_JEditorPane$javax_swing_text_AttributeSet$Z',  function (editor, attr, replace) {
var p0=editor.getSelectionStart$();
var p1=editor.getSelectionEnd$();
var doc=this.getStyledDocument$javax_swing_JEditorPane(editor);
doc.setParagraphAttributes$I$I$javax_swing_text_AttributeSet$Z(p0, p1 - p0, attr, replace);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyledEditorKit, "FontFamilyAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.StyledEditorKit','.StyledTextAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['family']]]

Clazz.newMeth(C$, 'c$$S$S',  function (nm, family) {
;C$.superclazz.c$$S.apply(this,[nm]);C$.$init$.apply(this);
this.family=family;
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var editor=this.getEditor$java_awt_event_ActionEvent(e);
if (editor != null ) {
var family=this.family;
if ((e != null ) && (e.getSource$() === editor ) ) {
var s=e.getActionCommand$();
if (s != null ) {
family=s;
}}if (family != null ) {
var attr=Clazz.new_($I$(6,1));
$I$(7).setFontFamily$javax_swing_text_MutableAttributeSet$S(attr, family);
this.setCharacterAttributes$javax_swing_JEditorPane$javax_swing_text_AttributeSet$Z(editor, attr, false);
} else {
$I$(8).getLookAndFeel$().provideErrorFeedback$java_awt_Component(editor);
}}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyledEditorKit, "FontSizeAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.StyledEditorKit','.StyledTextAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['size']]]

Clazz.newMeth(C$, 'c$$S$I',  function (nm, size) {
;C$.superclazz.c$$S.apply(this,[nm]);C$.$init$.apply(this);
this.size=size;
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var editor=this.getEditor$java_awt_event_ActionEvent(e);
if (editor != null ) {
var size=this.size;
if ((e != null ) && (e.getSource$() === editor ) ) {
var s=e.getActionCommand$();
try {
size=Integer.parseInt$S$I(s, 10);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
} else {
throw nfe;
}
}
}if (size != 0) {
var attr=Clazz.new_($I$(6,1));
$I$(7).setFontSize$javax_swing_text_MutableAttributeSet$I(attr, size);
this.setCharacterAttributes$javax_swing_JEditorPane$javax_swing_text_AttributeSet$Z(editor, attr, false);
} else {
$I$(8).getLookAndFeel$().provideErrorFeedback$java_awt_Component(editor);
}}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyledEditorKit, "ForegroundAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.StyledEditorKit','.StyledTextAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['fg','java.awt.Color']]]

Clazz.newMeth(C$, 'c$$S$java_awt_Color',  function (nm, fg) {
;C$.superclazz.c$$S.apply(this,[nm]);C$.$init$.apply(this);
this.fg=fg;
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var editor=this.getEditor$java_awt_event_ActionEvent(e);
if (editor != null ) {
var fg=this.fg;
if ((e != null ) && (e.getSource$() === editor ) ) {
var s=e.getActionCommand$();
try {
fg=$I$(9).decode$S(s);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
} else {
throw nfe;
}
}
}if (fg != null ) {
var attr=Clazz.new_($I$(6,1));
$I$(7).setForeground$javax_swing_text_MutableAttributeSet$java_awt_Color(attr, fg);
this.setCharacterAttributes$javax_swing_JEditorPane$javax_swing_text_AttributeSet$Z(editor, attr, false);
} else {
$I$(8).getLookAndFeel$().provideErrorFeedback$java_awt_Component(editor);
}}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyledEditorKit, "AlignmentAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.StyledEditorKit','.StyledTextAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['a']]]

Clazz.newMeth(C$, 'c$$S$I',  function (nm, a) {
;C$.superclazz.c$$S.apply(this,[nm]);C$.$init$.apply(this);
this.a=a;
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var editor=this.getEditor$java_awt_event_ActionEvent(e);
if (editor != null ) {
var a=this.a;
if ((e != null ) && (e.getSource$() === editor ) ) {
var s=e.getActionCommand$();
try {
a=Integer.parseInt$S$I(s, 10);
} catch (nfe) {
if (Clazz.exceptionOf(nfe,"NumberFormatException")){
} else {
throw nfe;
}
}
}var attr=Clazz.new_($I$(6,1));
$I$(7).setAlignment$javax_swing_text_MutableAttributeSet$I(attr, a);
this.setParagraphAttributes$javax_swing_JEditorPane$javax_swing_text_AttributeSet$Z(editor, attr, false);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyledEditorKit, "BoldAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.StyledEditorKit','.StyledTextAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["font-bold"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var editor=this.getEditor$java_awt_event_ActionEvent(e);
if (editor != null ) {
var kit=this.getStyledEditorKit$javax_swing_JEditorPane(editor);
var attr=kit.getInputAttributes$();
var bold=($I$(7).isBold$javax_swing_text_AttributeSet(attr)) ? false : true;
var sas=Clazz.new_($I$(6,1));
$I$(7).setBold$javax_swing_text_MutableAttributeSet$Z(sas, bold);
this.setCharacterAttributes$javax_swing_JEditorPane$javax_swing_text_AttributeSet$Z(editor, sas, false);
}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyledEditorKit, "ItalicAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.StyledEditorKit','.StyledTextAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["font-italic"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var editor=this.getEditor$java_awt_event_ActionEvent(e);
if (editor != null ) {
var kit=this.getStyledEditorKit$javax_swing_JEditorPane(editor);
var attr=kit.getInputAttributes$();
var italic=($I$(7).isItalic$javax_swing_text_AttributeSet(attr)) ? false : true;
var sas=Clazz.new_($I$(6,1));
$I$(7).setItalic$javax_swing_text_MutableAttributeSet$Z(sas, italic);
this.setCharacterAttributes$javax_swing_JEditorPane$javax_swing_text_AttributeSet$Z(editor, sas, false);
}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyledEditorKit, "UnderlineAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.StyledEditorKit','.StyledTextAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["font-underline"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var editor=this.getEditor$java_awt_event_ActionEvent(e);
if (editor != null ) {
var kit=this.getStyledEditorKit$javax_swing_JEditorPane(editor);
var attr=kit.getInputAttributes$();
var underline=($I$(7).isUnderline$javax_swing_text_AttributeSet(attr)) ? false : true;
var sas=Clazz.new_($I$(6,1));
$I$(7).setUnderline$javax_swing_text_MutableAttributeSet$Z(sas, underline);
this.setCharacterAttributes$javax_swing_JEditorPane$javax_swing_text_AttributeSet$Z(editor, sas, false);
}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StyledEditorKit, "StyledInsertBreakAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['javax.swing.text.StyledEditorKit','.StyledTextAction']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['tempSet','javax.swing.text.SimpleAttributeSet']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S.apply(this,["insert-break"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'actionPerformed$java_awt_event_ActionEvent',  function (e) {
var target=this.getEditor$java_awt_event_ActionEvent(e);
if (target != null ) {
if ((!target.isEditable$()) || (!target.isEnabled$()) ) {
$I$(8).getLookAndFeel$().provideErrorFeedback$java_awt_Component(target);
return;
}var sek=this.getStyledEditorKit$javax_swing_JEditorPane(target);
if (this.tempSet != null ) {
this.tempSet.removeAttributes$javax_swing_text_AttributeSet(this.tempSet);
} else {
this.tempSet=Clazz.new_($I$(6,1));
}this.tempSet.addAttributes$javax_swing_text_AttributeSet(sek.getInputAttributes$());
target.replaceSelection$S("\n");
var ia=sek.getInputAttributes$();
ia.removeAttributes$javax_swing_text_AttributeSet(ia);
ia.addAttributes$javax_swing_text_AttributeSet(this.tempSet);
this.tempSet.removeAttributes$javax_swing_text_AttributeSet(this.tempSet);
} else {
var text=this.getTextComponent$java_awt_event_ActionEvent(e);
if (text != null ) {
if ((!text.isEditable$()) || (!text.isEnabled$()) ) {
$I$(8).getLookAndFeel$().provideErrorFeedback$java_awt_Component(target);
return;
}text.replaceSelection$S("\n");
}}});
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
