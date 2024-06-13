(function(){var P$=Clazz.newPackage("javax.swing.text.html"),p$1={},I$=[[0,'javax.swing.text.StyleConstants',['javax.swing.text.html.HTML','.Attribute'],['javax.swing.text.html.CSS','.Attribute'],'java.awt.Color',['javax.swing.text.Position','.Bias']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HRuleView", null, 'javax.swing.text.View');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.alignment=1;
this.noshade=null;
this.size=0;
},1);

C$.$fields$=[['F',['topMargin','bottomMargin','leftMargin','rightMargin'],'I',['alignment','size'],'S',['noshade'],'O',['widthValue','javax.swing.text.html.CSS.LengthValue','attr','javax.swing.text.AttributeSet']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[elem]);C$.$init$.apply(this);
this.setPropertiesFromAttributes$();
}, 1);

Clazz.newMeth(C$, 'setPropertiesFromAttributes$',  function () {
var sheet=(this.getDocument$()).getStyleSheet$();
var eAttr=this.getElement$().getAttributes$();
this.attr=sheet.getViewAttributes$javax_swing_text_View(this);
this.alignment=1;
this.size=0;
this.noshade=null;
this.widthValue=null;
if (this.attr != null ) {
if (this.attr.getAttribute$O($I$(1).Alignment) != null ) {
this.alignment=$I$(1).getAlignment$javax_swing_text_AttributeSet(this.attr);
}this.noshade=eAttr.getAttribute$O($I$(2).NOSHADE);
var value=eAttr.getAttribute$O($I$(2).SIZE);
if (value != null  && (Clazz.instanceOf(value, "java.lang.String")) ) {
try {
this.size=Integer.parseInt$S(value);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
this.size=1;
} else {
throw e;
}
}
}value=this.attr.getAttribute$O($I$(3).WIDTH);
if (value != null  && (Clazz.instanceOf(value, "javax.swing.text.html.CSS.LengthValue")) ) {
this.widthValue=value;
}this.topMargin=p$1.getLength$javax_swing_text_html_CSS_Attribute$javax_swing_text_AttributeSet.apply(this, [$I$(3).MARGIN_TOP, this.attr]);
this.bottomMargin=p$1.getLength$javax_swing_text_html_CSS_Attribute$javax_swing_text_AttributeSet.apply(this, [$I$(3).MARGIN_BOTTOM, this.attr]);
this.leftMargin=p$1.getLength$javax_swing_text_html_CSS_Attribute$javax_swing_text_AttributeSet.apply(this, [$I$(3).MARGIN_LEFT, this.attr]);
this.rightMargin=p$1.getLength$javax_swing_text_html_CSS_Attribute$javax_swing_text_AttributeSet.apply(this, [$I$(3).MARGIN_RIGHT, this.attr]);
} else {
this.topMargin=this.bottomMargin=this.leftMargin=this.rightMargin=0;
}this.size=Math.max(2, this.size);
});

Clazz.newMeth(C$, 'getLength$javax_swing_text_html_CSS_Attribute$javax_swing_text_AttributeSet',  function (key, a) {
var lv=a.getAttribute$O(key);
var len=(lv != null ) ? lv.getValue$() : 0;
return len;
}, p$1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape',  function (g, a) {
var alloc=(Clazz.instanceOf(a, "java.awt.Rectangle")) ? a : a.getBounds$();
var x=0;
var y=alloc.y + 3 + (this.topMargin|0) ;
var width=alloc.width - ((this.leftMargin + this.rightMargin)|0);
if (this.widthValue != null ) {
width=(this.widthValue.getValue$F(width)|0);
}var height=alloc.height - (3 + 3 + (this.topMargin|0) + (this.bottomMargin|0) );
if (this.size > 0) height=this.size;
switch (this.alignment) {
case 1:
x=alloc.x + ((alloc.width/2|0)) - ((width/2|0));
break;
case 2:
x=alloc.x + alloc.width - width - (this.rightMargin|0);
break;
case 0:
default:
x=alloc.x + (this.leftMargin|0);
break;
}
if (this.noshade != null ) {
g.setColor$java_awt_Color($I$(4).black);
g.fillRect$I$I$I$I(x, y, width, height);
} else {
var bg=this.getContainer$().getBackground$();
var bottom;
var top;
if (bg == null  || bg.equals$O($I$(4).white) ) {
top=$I$(4).darkGray;
bottom=$I$(4).lightGray;
} else {
top=$I$(4).darkGray;
bottom=$I$(4).white;
}g.setColor$java_awt_Color(bottom);
g.drawLine$I$I$I$I(x + width - 1, y, x + width - 1, y + height - 1);
g.drawLine$I$I$I$I(x, y + height - 1, x + width - 1, y + height - 1);
g.setColor$java_awt_Color(top);
g.drawLine$I$I$I$I(x, y, x + width - 1, y);
g.drawLine$I$I$I$I(x, y, x, y + height - 1);
}});

Clazz.newMeth(C$, 'getPreferredSpan$I',  function (axis) {
switch (axis) {
case 0:
return 1;
case 1:
if (this.size > 0) {
return this.size + 3 + 3 + this.topMargin + this.bottomMargin ;
} else {
if (this.noshade != null ) {
return 2 + 3 + 3 + this.topMargin + this.bottomMargin ;
} else {
return 3 + 3 + this.topMargin + this.bottomMargin ;
}}default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid axis: " + axis]);
}
});

Clazz.newMeth(C$, 'getResizeWeight$I',  function (axis) {
if (axis == 0) {
return 1;
} else if (axis == 1) {
return 0;
} else {
return 0;
}});

Clazz.newMeth(C$, 'getBreakWeight$I$F$F',  function (axis, pos, len) {
if (axis == 0) {
return 3000;
}return 0;
});

Clazz.newMeth(C$, 'breakView$I$I$F$F',  function (axis, offset, pos, len) {
return null;
});

Clazz.newMeth(C$, 'modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias',  function (pos, a, b) {
var p0=this.getStartOffset$();
var p1=this.getEndOffset$();
if ((pos >= p0) && (pos <= p1) ) {
var r=a.getBounds$();
if (pos == p1) {
r.x+=r.width;
}r.width=0;
return r;
}return null;
});

Clazz.newMeth(C$, 'viewToModel$F$F$java_awt_Shape$javax_swing_text_Position_BiasA',  function (x, y, a, bias) {
var alloc=a;
if (x < alloc.x + ((alloc.width/2|0)) ) {
bias[0]=$I$(5).Forward;
return this.getStartOffset$();
}bias[0]=$I$(5).Backward;
return this.getEndOffset$();
});

Clazz.newMeth(C$, 'getAttributes$',  function () {
return this.attr;
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (changes, a, f) {
C$.superclazz.prototype.changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory.apply(this, [changes, a, f]);
var pos=changes.getOffset$();
if (pos <= this.getStartOffset$() && (pos + changes.getLength$()) >= this.getEndOffset$() ) {
this.setPropertiesFromAttributes$();
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:27 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
