(function(){var P$=Clazz.newPackage("javax.swing.text"),p$1={},I$=[[0,['javax.swing.text.Position','.Bias'],'javax.swing.text.SegmentCache','javax.swing.text.StateInvariantError','javax.swing.text.StyleConstants','javax.swing.text.AbstractDocument','java.util.BitSet',['javax.swing.text.GlyphView','.JustificationInfo']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GlyphView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.text.View', ['javax.swing.text.TabableView', 'Cloneable']);
C$.$classes$=[['JustificationInfo',8],['GlyphPainter',1033]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.justificationInfo=null;
},1);

C$.$fields$=[['Z',['impliedCR','skipWidth'],'I',['offset','length','x'],'O',['expander','javax.swing.text.TabExpander','painter','javax.swing.text.GlyphView.GlyphPainter','justificationInfo','javax.swing.text.GlyphView.JustificationInfo']]
,['O',['defaultPainter','javax.swing.text.GlyphView.GlyphPainter']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[elem]);C$.$init$.apply(this);
this.offset=0;
this.length=0;
var parent=elem.getParentElement$();
var attr=elem.getAttributes$();
this.impliedCR=(attr != null  && attr.getAttribute$O("CR") != null   && parent != null   && parent.getElementCount$() > 1 );
this.skipWidth=elem.getName$().equals$O("br");
}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
var o;
try {
o=Clazz.clone(this);
} catch (cnse) {
if (Clazz.exceptionOf(cnse,"CloneNotSupportedException")){
o=null;
} else {
throw cnse;
}
}
return o;
});

Clazz.newMeth(C$, 'getGlyphPainter$',  function () {
return this.painter;
});

Clazz.newMeth(C$, 'setGlyphPainter$javax_swing_text_GlyphView_GlyphPainter',  function (p) {
this.painter=p;
});

Clazz.newMeth(C$, 'getText$I$I',  function (p0, p1) {
var text=$I$(2).getSharedSegment$();
try {
var doc=this.getDocument$();
doc.getText$I$I$javax_swing_text_Segment(p0, p1 - p0, text);
} catch (bl) {
if (Clazz.exceptionOf(bl,"javax.swing.text.BadLocationException")){
throw Clazz.new_($I$(3,1).c$$S,["GlyphView: Stale view: " + bl]);
} else {
throw bl;
}
}
return text;
});

Clazz.newMeth(C$, 'getBackground$',  function () {
var doc=this.getDocument$();
if (Clazz.instanceOf(doc, "javax.swing.text.StyledDocument")) {
var attr=this.getAttributes$();
if (attr.isDefined$O($I$(4).Background)) {
return (doc).getBackground$javax_swing_text_AttributeSet(attr);
}}return null;
});

Clazz.newMeth(C$, 'getForeground$',  function () {
var doc=this.getDocument$();
if (Clazz.instanceOf(doc, "javax.swing.text.StyledDocument")) {
var attr=this.getAttributes$();
return (doc).getForeground$javax_swing_text_AttributeSet(attr);
}var c=this.getContainer$();
if (c != null ) {
return c.getForeground$();
}return null;
});

Clazz.newMeth(C$, 'getFont$',  function () {
var doc=this.getDocument$();
if (Clazz.instanceOf(doc, "javax.swing.text.StyledDocument")) {
var attr=this.getAttributes$();
return (doc).getFont$javax_swing_text_AttributeSet(attr);
}var c=this.getContainer$();
if (c != null ) {
return c.getFont$();
}return null;
});

Clazz.newMeth(C$, 'isUnderline$',  function () {
var attr=this.getAttributes$();
return $I$(4).isUnderline$javax_swing_text_AttributeSet(attr);
});

Clazz.newMeth(C$, 'isStrikeThrough$',  function () {
var attr=this.getAttributes$();
return $I$(4).isStrikeThrough$javax_swing_text_AttributeSet(attr);
});

Clazz.newMeth(C$, 'isSubscript$',  function () {
var attr=this.getAttributes$();
return $I$(4).isSubscript$javax_swing_text_AttributeSet(attr);
});

Clazz.newMeth(C$, 'isSuperscript$',  function () {
var attr=this.getAttributes$();
return $I$(4).isSuperscript$javax_swing_text_AttributeSet(attr);
});

Clazz.newMeth(C$, 'getTabExpander$',  function () {
return this.expander;
});

Clazz.newMeth(C$, 'checkPainter$',  function () {
if (this.painter == null ) {
if (C$.defaultPainter == null ) {
var classname="javax.swing.text.GlyphPainter1";
try {
var c;
var loader=this.getClass$().getClassLoader$();
if (loader != null ) {
c=loader.loadClass$S(classname);
} else {
c=Clazz.forName(classname);
}var o=c.newInstance$();
if (Clazz.instanceOf(o, "javax.swing.text.GlyphView.GlyphPainter")) {
C$.defaultPainter=o;
}} catch (e) {
throw Clazz.new_($I$(3,1).c$$S,["GlyphView: Can't load glyph painter: " + classname]);
}
}this.setGlyphPainter$javax_swing_text_GlyphView_GlyphPainter(C$.defaultPainter.getPainter$javax_swing_text_GlyphView$I$I(this, this.getStartOffset$(), this.getEndOffset$()));
}});

Clazz.newMeth(C$, 'getTabbedSpan$F$javax_swing_text_TabExpander',  function (x, e) {
this.checkPainter$();
var old=this.expander;
this.expander=e;
if (this.expander !== old ) {
this.preferenceChanged$javax_swing_text_View$Z$Z(null, true, false);
}this.x=(x|0);
var p0=this.getStartOffset$();
var p1=this.getEndOffset$();
var width=this.painter.getSpan$javax_swing_text_GlyphView$I$I$javax_swing_text_TabExpander$F(this, p0, p1, this.expander, x);
return width;
});

Clazz.newMeth(C$, 'getPartialSpan$I$I',  function (p0, p1) {
this.checkPainter$();
var width=this.painter.getSpan$javax_swing_text_GlyphView$I$I$javax_swing_text_TabExpander$F(this, p0, p1, this.expander, this.x);
return width;
});

Clazz.newMeth(C$, 'getStartOffset$',  function () {
var e=this.getElement$();
return (this.length > 0) ? e.getStartOffset$() + this.offset : e.getStartOffset$();
});

Clazz.newMeth(C$, 'getEndOffset$',  function () {
var e=this.getElement$();
return (this.length > 0) ? e.getStartOffset$() + this.offset + this.length  : e.getEndOffset$();
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape',  function (g, a) {
});

Clazz.newMeth(C$, 'paintTextUsingColor$java_awt_Graphics$java_awt_Shape$java_awt_Color$I$I',  function (g, a, c, p0, p1) {
g.setColor$java_awt_Color(c);
this.painter.paint$javax_swing_text_GlyphView$java_awt_Graphics$java_awt_Shape$I$I(this, g, a, p0, p1);
var underline=this.isUnderline$();
var strike=this.isStrikeThrough$();
if (underline || strike ) {
var alloc=(Clazz.instanceOf(a, "java.awt.Rectangle")) ? a : a.getBounds$();
var parent=this.getParent$();
if ((parent != null ) && (parent.getEndOffset$() == p1) ) {
var s=this.getText$I$I(p0, p1);
while (Character.isWhitespace$C(s.last$())){
p1-=1;
s.count-=1;
}
$I$(2).releaseSharedSegment$javax_swing_text_Segment(s);
}var x0=alloc.x;
var p=this.getStartOffset$();
if (p != p0) {
x0+=(this.painter.getSpan$javax_swing_text_GlyphView$I$I$javax_swing_text_TabExpander$F(this, p, p0, this.getTabExpander$(), x0)|0);
}var x1=x0 + (this.painter.getSpan$javax_swing_text_GlyphView$I$I$javax_swing_text_TabExpander$F(this, p0, p1, this.getTabExpander$(), x0)|0);
var y=alloc.y + alloc.height - (this.painter.getDescent$javax_swing_text_GlyphView(this)|0);
if (underline) {
var yTmp=y + 1;
g.drawLine$I$I$I$I(x0, yTmp, x1, yTmp);
}if (strike) {
var yTmp=y - ((this.painter.getAscent$javax_swing_text_GlyphView(this) * 0.3)|0);
g.drawLine$I$I$I$I(x0, yTmp, x1, yTmp);
}}});

Clazz.newMeth(C$, 'getPreferredSpan$I',  function (axis) {
if (this.impliedCR) {
return 0;
}this.checkPainter$();
var p0=this.getStartOffset$();
var p1=this.getEndOffset$();
switch (axis) {
case 0:
if (this.skipWidth) {
return 0;
}return this.painter.getSpan$javax_swing_text_GlyphView$I$I$javax_swing_text_TabExpander$F(this, p0, p1, this.expander, this.x);
case 1:
var h=this.painter.getHeight$javax_swing_text_GlyphView(this);
if (this.isSuperscript$()) {
h+=h / 3;
}return h;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid axis: " + axis]);
}
});

Clazz.newMeth(C$, 'getAlignment$I',  function (axis) {
this.checkPainter$();
if (axis == 1) {
var sup=this.isSuperscript$();
var sub=this.isSubscript$();
var h=this.painter.getHeight$javax_swing_text_GlyphView(this);
var d=this.painter.getDescent$javax_swing_text_GlyphView(this);
var a=this.painter.getAscent$javax_swing_text_GlyphView(this);
var align;
if (sup) {
align=1.0;
} else if (sub) {
align=(h > 0 ) ? (h - (d + (a / 2))) / h : 0;
} else {
align=(h > 0 ) ? (h - d) / h : 0;
}return align;
}return C$.superclazz.prototype.getAlignment$I.apply(this, [axis]);
});

Clazz.newMeth(C$, 'modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias',  function (pos, a, b) {
this.checkPainter$();
return this.painter.modelToView$javax_swing_text_GlyphView$I$javax_swing_text_Position_Bias$java_awt_Shape(this, pos, b, a);
});

Clazz.newMeth(C$, 'viewToModel$F$F$java_awt_Shape$javax_swing_text_Position_BiasA',  function (x, y, a, biasReturn) {
this.checkPainter$();
return this.painter.viewToModel$javax_swing_text_GlyphView$F$F$java_awt_Shape$javax_swing_text_Position_BiasA(this, x, y, a, biasReturn);
});

Clazz.newMeth(C$, 'getBreakWeight$I$F$F',  function (axis, pos, len) {
if (axis == 0) {
this.checkPainter$();
var p0=this.getStartOffset$();
var p1=this.painter.getBoundedPosition$javax_swing_text_GlyphView$I$F$F(this, p0, pos, len);
if (p1 == p0) {
return 0;
}if (p$1.getBreakSpot$I$I.apply(this, [p0, p1]) != -1) {
return 2000;
}if (p1 == this.getEndOffset$()) {
return 1000;
} else {
return 999;
}}return C$.superclazz.prototype.getBreakWeight$I$F$F.apply(this, [axis, pos, len]);
});

Clazz.newMeth(C$, 'breakView$I$I$F$F',  function (axis, p0, pos, len) {
if (axis == 0) {
this.checkPainter$();
var p1=this.painter.getBoundedPosition$javax_swing_text_GlyphView$I$F$F(this, p0, pos, len);
var breakSpot=p$1.getBreakSpot$I$I.apply(this, [p0, p1]);
if (breakSpot != -1) {
p1=breakSpot;
}if (p0 == this.getStartOffset$() && p1 == this.getEndOffset$() ) {
return this;
}var v=this.createFragment$I$I(p0, p1);
v.x=(pos|0);
return v;
}return this;
});

Clazz.newMeth(C$, 'getBreakSpot$I$I',  function (p0, p1) {
var doc=this.getDocument$();
if (doc != null  && Boolean.TRUE.equals$O(doc.getProperty$O($I$(5).MultiByteProperty)) ) {
return p$1.getBreakSpotUseBreakIterator$I$I.apply(this, [p0, p1]);
}return p$1.getBreakSpotUseWhitespace$I$I.apply(this, [p0, p1]);
}, p$1);

Clazz.newMeth(C$, 'getBreakSpotUseWhitespace$I$I',  function (p0, p1) {
var s=this.getText$I$I(p0, p1);
for (var ch=s.last$(); ch != "\uffff"; ch=s.previous$()) {
if (Character.isWhitespace$C(ch)) {
$I$(2).releaseSharedSegment$javax_swing_text_Segment(s);
return s.getIndex$() - s.getBeginIndex$() + 1 + p0;
}}
$I$(2).releaseSharedSegment$javax_swing_text_Segment(s);
return -1;
}, p$1);

Clazz.newMeth(C$, 'getBreakSpotUseBreakIterator$I$I',  function (p0, p1) {
return 0;
}, p$1);

Clazz.newMeth(C$, 'createFragment$I$I',  function (p0, p1) {
this.checkPainter$();
var elem=this.getElement$();
var v=this.clone$();
v.offset=p0 - elem.getStartOffset$();
v.length=p1 - p0;
v.painter=this.painter.getPainter$javax_swing_text_GlyphView$I$I(v, p0, p1);
v.justificationInfo=null;
return v;
});

Clazz.newMeth(C$, 'getNextVisualPositionFrom$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA',  function (pos, b, a, direction, biasRet) {
return this.painter.getNextVisualPositionFrom$javax_swing_text_GlyphView$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA(this, pos, b, a, direction, biasRet);
});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (e, a, f) {
this.justificationInfo=null;
p$1.syncCR.apply(this, []);
this.preferenceChanged$javax_swing_text_View$Z$Z(null, true, false);
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (e, a, f) {
this.justificationInfo=null;
p$1.syncCR.apply(this, []);
this.preferenceChanged$javax_swing_text_View$Z$Z(null, true, false);
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (e, a, f) {
p$1.syncCR.apply(this, []);
this.preferenceChanged$javax_swing_text_View$Z$Z(null, true, true);
});

Clazz.newMeth(C$, 'syncCR',  function () {
if (this.impliedCR) {
var parent=this.getElement$().getParentElement$();
this.impliedCR=(parent != null  && parent.getElementCount$() > 1 );
}}, p$1);

Clazz.newMeth(C$, 'getJustificationInfo$I',  function (rowStartOffset) {
if (this.justificationInfo != null ) {
return this.justificationInfo;
}var TRAILING=0;
var CONTENT=1;
var SPACES=2;
var startOffset=this.getStartOffset$();
var endOffset=this.getEndOffset$();
var segment=this.getText$I$I(startOffset, endOffset);
var txtOffset=segment.offset;
var txtEnd=segment.offset + segment.count - 1;
var startContentPosition=txtEnd + 1;
var endContentPosition=txtOffset - 1;
var trailingSpaces=0;
var contentSpaces=0;
var leadingSpaces=0;
var hasTab=false;
var spaceMap=Clazz.new_($I$(6,1).c$$I,[endOffset - startOffset + 1]);
for (var i=txtEnd, state=0; i >= txtOffset; i--) {
if (" " == segment.array[i]) {
spaceMap.set$I(i - txtOffset);
if (state == 0) {
++trailingSpaces;
} else if (state == 1) {
state=2;
leadingSpaces=1;
} else if (state == 2) {
++leadingSpaces;
}} else if ("\t" == segment.array[i]) {
hasTab=true;
break;
} else {
if (state == 0) {
if ("\n" != segment.array[i] && "\r" != segment.array[i] ) {
state=1;
endContentPosition=i;
}} else if (state == 1) {
} else if (state == 2) {
contentSpaces+=leadingSpaces;
leadingSpaces=0;
}startContentPosition=i;
}}
$I$(2).releaseSharedSegment$javax_swing_text_Segment(segment);
var startJustifiableContent=-1;
if (startContentPosition < txtEnd) {
startJustifiableContent=startContentPosition - txtOffset;
}var endJustifiableContent=-1;
if (endContentPosition > txtOffset) {
endJustifiableContent=endContentPosition - txtOffset;
}this.justificationInfo=Clazz.new_($I$(7,1).c$$I$I$I$I$I$Z$java_util_BitSet,[startJustifiableContent, endJustifiableContent, leadingSpaces, contentSpaces, trailingSpaces, hasTab, spaceMap]);
return this.justificationInfo;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.GlyphView, "JustificationInfo", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['hasTab'],'I',['start','end','leadingSpaces','contentSpaces','trailingSpaces'],'O',['spaceMap','java.util.BitSet']]]

Clazz.newMeth(C$, 'c$$I$I$I$I$I$Z$java_util_BitSet',  function (start, end, leadingSpaces, contentSpaces, trailingSpaces, hasTab, spaceMap) {
;C$.$init$.apply(this);
this.start=start;
this.end=end;
this.leadingSpaces=leadingSpaces;
this.contentSpaces=contentSpaces;
this.trailingSpaces=trailingSpaces;
this.hasTab=hasTab;
this.spaceMap=spaceMap;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GlyphView, "GlyphPainter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getPainter$javax_swing_text_GlyphView$I$I',  function (v, p0, p1) {
return this;
});

Clazz.newMeth(C$, 'getNextVisualPositionFrom$javax_swing_text_GlyphView$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA',  function (v, pos, b, a, direction, biasRet) {
var startOffset=v.getStartOffset$();
var endOffset=v.getEndOffset$();
switch (direction) {
case 1:
case 5:
if (pos != -1) {
return -1;
}var container=v.getContainer$();
if (Clazz.instanceOf(container, "javax.swing.text.JTextComponent")) {
var c=(container).getCaret$();
var magicPoint;
magicPoint=(c != null ) ? c.getMagicCaretPosition$() : null;
if (magicPoint == null ) {
biasRet[0]=$I$(1).Forward;
return startOffset;
}var value=v.viewToModel$F$F$java_awt_Shape$javax_swing_text_Position_BiasA(magicPoint.x, 0.0, a, biasRet);
return value;
}break;
case 3:
if (startOffset == v.getDocument$().getLength$()) {
if (pos == -1) {
biasRet[0]=$I$(1).Forward;
return startOffset;
}return -1;
}if (pos == -1) {
biasRet[0]=$I$(1).Forward;
return startOffset;
}if (pos == endOffset) {
return -1;
}if (++pos == endOffset) {
return -1;
} else {
biasRet[0]=$I$(1).Forward;
}return pos;
case 7:
if (startOffset == v.getDocument$().getLength$()) {
if (pos == -1) {
biasRet[0]=$I$(1).Forward;
return startOffset;
}return -1;
}if (pos == -1) {
biasRet[0]=$I$(1).Forward;
return endOffset - 1;
}if (pos == startOffset) {
return -1;
}biasRet[0]=$I$(1).Forward;
return (pos - 1);
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bad direction: " + direction]);
}
return pos;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:20 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
