(function(){var P$=Clazz.newPackage("javax.swing.text.html"),I$=[[0,['javax.swing.text.html.CSS','.Attribute']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InlineView", null, 'javax.swing.text.LabelView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['nowrap'],'O',['attr','javax.swing.text.AttributeSet']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[elem]);C$.$init$.apply(this);
var sheet=this.getStyleSheet$();
this.attr=sheet.getViewAttributes$javax_swing_text_View(this);
}, 1);

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (e, a, f) {
C$.superclazz.prototype.insertUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory.apply(this, [e, a, f]);
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (e, a, f) {
C$.superclazz.prototype.removeUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory.apply(this, [e, a, f]);
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (e, a, f) {
C$.superclazz.prototype.changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory.apply(this, [e, a, f]);
var sheet=this.getStyleSheet$();
this.attr=sheet.getViewAttributes$javax_swing_text_View(this);
this.preferenceChanged$javax_swing_text_View$Z$Z(null, true, true);
});

Clazz.newMeth(C$, 'getAttributes$',  function () {
return this.attr;
});

Clazz.newMeth(C$, 'getBreakWeight$I$F$F',  function (axis, pos, len) {
if (this.nowrap) {
return 0;
}return C$.superclazz.prototype.getBreakWeight$I$F$F.apply(this, [axis, pos, len]);
});

Clazz.newMeth(C$, 'breakView$I$I$F$F',  function (axis, offset, pos, len) {
return C$.superclazz.prototype.breakView$I$I$F$F.apply(this, [axis, offset, pos, len]);
});

Clazz.newMeth(C$, 'setPropertiesFromAttributes$',  function () {
C$.superclazz.prototype.setPropertiesFromAttributes$.apply(this, []);
var a=this.getAttributes$();
var decor=a.getAttribute$O($I$(1).TEXT_DECORATION);
var u=(decor != null ) ? (decor.toString().indexOf$S("underline") >= 0) : false;
this.setUnderline$Z(u);
var s=(decor != null ) ? (decor.toString().indexOf$S("line-through") >= 0) : false;
this.setStrikeThrough$Z(s);
var vAlign=a.getAttribute$O($I$(1).VERTICAL_ALIGN);
s=(vAlign != null ) ? (vAlign.toString().indexOf$S("sup") >= 0) : false;
this.setSuperscript$Z(s);
s=(vAlign != null ) ? (vAlign.toString().indexOf$S("sub") >= 0) : false;
this.setSubscript$Z(s);
var whitespace=a.getAttribute$O($I$(1).WHITE_SPACE);
if ((whitespace != null ) && whitespace.equals$O("nowrap") ) {
this.nowrap=true;
} else {
this.nowrap=false;
}var doc=this.getDocument$();
var bg=doc.getBackground$javax_swing_text_AttributeSet(a);
if (bg != null ) {
this.setBackground$java_awt_Color(bg);
}});

Clazz.newMeth(C$, 'getStyleSheet$',  function () {
var doc=this.getDocument$();
return doc.getStyleSheet$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:29 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
