(function(){var P$=Clazz.newPackage("javax.swing.text"),p$1={},I$=[[0,'java.util.Arrays','javax.swing.text.StateInvariantError','javax.swing.text.StyleConstants','java.awt.font.TextAttribute',['javax.swing.text.Position','.Bias'],['javax.swing.text.ParagraphView','.Row'],'javax.swing.text.Segment']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ParagraphView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.text.FlowView', 'javax.swing.text.TabExpander');
C$.$classes$=[['Row',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.firstLineIndent=0;
},1);

C$.$fields$=[['F',['lineSpacing'],'I',['justification','firstLineIndent','tabBase']]
,['O',['i18nStrategy','Class','tabChars','char[]','+tabDecimalChars']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element$I.apply(this,[elem, 1]);C$.$init$.apply(this);
this.setPropertiesFromAttributes$();
var doc=elem.getDocument$();
var i18nFlag=doc.getProperty$O("i18n");
if ((i18nFlag != null ) && i18nFlag.equals$O(Boolean.TRUE) ) {
try {
if (C$.i18nStrategy == null ) {
var classname="javax.swing.text.TextLayoutStrategy";
var loader=this.getClass$().getClassLoader$();
if (loader != null ) {
C$.i18nStrategy=loader.loadClass$S(classname);
} else {
C$.i18nStrategy=Clazz.forName(classname);
}}var o=C$.i18nStrategy.newInstance$();
if (Clazz.instanceOf(o, "javax.swing.text.FlowView.FlowStrategy")) {
this.strategy=o;
}} catch (e) {
throw Clazz.new_(["ParagraphView: Can't create i18n strategy: " + e.getMessage$()],$I$(2,1).c$$S);
}
}}, 1);

Clazz.newMeth(C$, 'setJustification$I',  function (j) {
this.justification=j;
});

Clazz.newMeth(C$, 'setLineSpacing$F',  function (ls) {
this.lineSpacing=ls;
});

Clazz.newMeth(C$, 'setFirstLineIndent$F',  function (fi) {
this.firstLineIndent=(fi|0);
});

Clazz.newMeth(C$, 'setPropertiesFromAttributes$',  function () {
var attr=this.getAttributes$();
if (attr != null ) {
this.setParagraphInsets$javax_swing_text_AttributeSet(attr);
var a=attr.getAttribute$O($I$(3).Alignment);
var alignment;
if (a == null ) {
var doc=this.getElement$().getDocument$();
var o=doc.getProperty$O($I$(4).RUN_DIRECTION);
if ((o != null ) && o.equals$O($I$(4).RUN_DIRECTION_RTL) ) {
alignment=2;
} else {
alignment=0;
}} else {
alignment=a.intValue$();
}this.setJustification$I(alignment);
this.setLineSpacing$F($I$(3).getLineSpacing$javax_swing_text_AttributeSet(attr));
this.setFirstLineIndent$F($I$(3).getFirstLineIndent$javax_swing_text_AttributeSet(attr));
}});

Clazz.newMeth(C$, 'getLayoutViewCount$',  function () {
return this.layoutPool.getViewCount$();
});

Clazz.newMeth(C$, 'getLayoutView$I',  function (index) {
return this.layoutPool.getView$I(index);
});

Clazz.newMeth(C$, 'adjustRow$javax_swing_text_ParagraphView_Row$I$I',  function (r, desiredSpan, x) {
});

Clazz.newMeth(C$, 'getNextNorthSouthVisualPositionFrom$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA',  function (pos, b, a, direction, biasRet) {
var vIndex;
if (pos == -1) {
vIndex=(direction == 1) ? this.getViewCount$() - 1 : 0;
} else {
if (b === $I$(5).Backward  && pos > 0 ) {
vIndex=this.getViewIndexAtPosition$I(pos - 1);
} else {
vIndex=this.getViewIndexAtPosition$I(pos);
}if (direction == 1) {
if (vIndex == 0) {
return -1;
}--vIndex;
} else if (++vIndex >= this.getViewCount$()) {
return -1;
}}var text=this.getContainer$();
var c=text.getCaret$();
var magicPoint;
magicPoint=(c != null ) ? c.getMagicCaretPosition$() : null;
var x;
if (magicPoint == null ) {
var posBounds;
try {
posBounds=(text.getUI$()).modelToView$javax_swing_text_JTextComponent$I$javax_swing_text_Position_Bias(text, pos, b);
} catch (exc) {
if (Clazz.exceptionOf(exc,"javax.swing.text.BadLocationException")){
posBounds=null;
} else {
throw exc;
}
}
if (posBounds == null ) {
x=0;
} else {
x=posBounds.getBounds$().x;
}} else {
x=magicPoint.x;
}return this.getClosestPositionTo$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA$I$I(pos, b, a, direction, biasRet, vIndex, x);
});

Clazz.newMeth(C$, 'getClosestPositionTo$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA$I$I',  function (pos, b, a, direction, biasRet, rowIndex, x) {
var text=this.getContainer$();
var doc=this.getDocument$();
var aDoc=(Clazz.instanceOf(doc, "javax.swing.text.AbstractDocument")) ? doc : null;
var row=this.getView$I(rowIndex);
var lastPos=-1;
biasRet[0]=$I$(5).Forward;
for (var vc=0, numViews=row.getViewCount$(); vc < numViews; vc++) {
var v=row.getView$I(vc);
var start=v.getStartOffset$();
var ltr=(aDoc != null ) ? aDoc.isLeftToRight$I$I(start, start + 1) : true;
if (ltr) {
lastPos=start;
for (var end=v.getEndOffset$(); lastPos < end; lastPos++) {
var xx=text.modelToView$I(lastPos).getBounds$().x;
if (xx >= x ) {
while (++lastPos < end && text.modelToView$I(lastPos).getBounds$().x == xx  ){
}
return --lastPos;
}}
--lastPos;
} else {
for (lastPos=v.getEndOffset$() - 1; lastPos >= start; lastPos--) {
var xx=text.modelToView$I(lastPos).getBounds$().x;
if (xx >= x ) {
while (--lastPos >= start && text.modelToView$I(lastPos).getBounds$().x == xx  ){
}
return ++lastPos;
}}
++lastPos;
}}
if (lastPos == -1) {
return this.getStartOffset$();
}return lastPos;
});

Clazz.newMeth(C$, 'flipEastAndWestAtEnds$I$javax_swing_text_Position_Bias',  function (position, bias) {
var doc=this.getDocument$();
if (Clazz.instanceOf(doc, "javax.swing.text.AbstractDocument") && !(doc).isLeftToRight$I$I(this.getStartOffset$(), this.getStartOffset$() + 1) ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getFlowSpan$I',  function (index) {
var child=this.getView$I(index);
var adjust=0;
if (Clazz.instanceOf(child, "javax.swing.text.ParagraphView.Row")) {
var row=child;
adjust=row.getLeftInset$() + row.getRightInset$();
}return (this.layoutSpan == 2147483647) ? this.layoutSpan : (this.layoutSpan - adjust);
});

Clazz.newMeth(C$, 'getFlowStart$I',  function (index) {
var child=this.getView$I(index);
var adjust=0;
if (Clazz.instanceOf(child, "javax.swing.text.ParagraphView.Row")) {
var row=child;
adjust=row.getLeftInset$();
}return this.tabBase + adjust;
});

Clazz.newMeth(C$, 'createRow$',  function () {
return Clazz.new_([this, null, this.getElement$()],$I$(6,1).c$$javax_swing_text_Element);
});

Clazz.newMeth(C$, 'nextTabStop$F$I',  function (x, tabOffset) {
if (this.justification != 0) return x + 10.0;
x-=this.tabBase;
var tabs=this.getTabSet$();
if (tabs == null ) {
return (this.tabBase + ((((x|0)/72|0) + 1) * 72));
}var tab=tabs.getTabAfter$F(x + 0.01);
if (tab == null ) {
return this.tabBase + x + 5.0 ;
}var alignment=tab.getAlignment$();
var offset;
switch (alignment) {
default:
case 0:
return this.tabBase + tab.getPosition$();
case 5:
return this.tabBase + tab.getPosition$();
case 1:
case 2:
offset=this.findOffsetToCharactersInString$CA$I(C$.tabChars, tabOffset + 1);
break;
case 4:
offset=this.findOffsetToCharactersInString$CA$I(C$.tabDecimalChars, tabOffset + 1);
break;
}
if (offset == -1) {
offset=this.getEndOffset$();
}var charsSize=this.getPartialSize$I$I(tabOffset + 1, offset);
switch (alignment) {
case 1:
case 4:
return this.tabBase + Math.max(x, tab.getPosition$() - charsSize);
case 2:
return this.tabBase + Math.max(x, tab.getPosition$() - charsSize / 2.0);
}
return x;
});

Clazz.newMeth(C$, 'getTabSet$',  function () {
return $I$(3,"getTabSet$javax_swing_text_AttributeSet",[this.getElement$().getAttributes$()]);
});

Clazz.newMeth(C$, 'getPartialSize$I$I',  function (startOffset, endOffset) {
var size=0.0;
var viewIndex;
var numViews=this.getViewCount$();
var view;
var viewEnd;
var tempEnd;
viewIndex=this.getElement$().getElementIndex$I(startOffset);
numViews=this.layoutPool.getViewCount$();
while (startOffset < endOffset && viewIndex < numViews ){
view=this.layoutPool.getView$I(viewIndex++);
viewEnd=view.getEndOffset$();
tempEnd=Math.min(endOffset, viewEnd);
if (Clazz.instanceOf(view, "javax.swing.text.TabableView")) size+=(view).getPartialSpan$I$I(startOffset, tempEnd);
 else if (startOffset == view.getStartOffset$() && tempEnd == view.getEndOffset$() ) size+=view.getPreferredSpan$I(0);
 else return 0.0;
startOffset=viewEnd;
}
return size;
});

Clazz.newMeth(C$, 'findOffsetToCharactersInString$CA$I',  function (string, start) {
var stringLength=string.length;
var end=this.getEndOffset$();
var seg=Clazz.new_($I$(7,1));
try {
this.getDocument$().getText$I$I$javax_swing_text_Segment(start, end - start, seg);
} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
return -1;
} else {
throw ble;
}
}
for (var counter=seg.offset, maxCounter=seg.offset + seg.count; counter < maxCounter; counter++) {
var currentChar=seg.array[counter];
for (var subCounter=0; subCounter < stringLength; subCounter++) {
if (currentChar == string[subCounter]) return counter - seg.offset + start;
}
}
return -1;
});

Clazz.newMeth(C$, 'getTabBase$',  function () {
return this.tabBase;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape',  function (g, a) {
var alloc=(Clazz.instanceOf(a, "java.awt.Rectangle")) ? a : a.getBounds$();
this.tabBase=alloc.x + this.getLeftInset$();
C$.superclazz.prototype.paint$java_awt_Graphics$java_awt_Shape.apply(this, [g, a]);
if (this.firstLineIndent < 0) {
var sh=this.getChildAllocation$I$java_awt_Shape(0, a);
if ((sh != null ) && sh.intersects$java_awt_geom_Rectangle2D(alloc) ) {
var x=alloc.x + this.getLeftInset$() + this.firstLineIndent ;
var y=alloc.y + this.getTopInset$();
var clip=g.getClipBounds$();
this.tempRect.x=x + this.getOffset$I$I(0, 0);
this.tempRect.y=y + this.getOffset$I$I(1, 0);
this.tempRect.width=this.getSpan$I$I(0, 0) - this.firstLineIndent;
this.tempRect.height=this.getSpan$I$I(1, 0);
if (this.tempRect.intersects$java_awt_Rectangle(clip)) {
this.tempRect.x=this.tempRect.x - this.firstLineIndent;
this.paintChild$java_awt_Graphics$java_awt_Rectangle$I(g, this.tempRect, 0);
}}}});

Clazz.newMeth(C$, 'getAlignment$I',  function (axis) {
switch (axis) {
case 1:
var a=0.5;
if (this.getViewCount$() != 0) {
var paragraphSpan=(this.getPreferredSpan$I(1)|0);
var v=this.getView$I(0);
var rowSpan=(v.getPreferredSpan$I(1)|0);
a=(paragraphSpan != 0) ? (((rowSpan/2|0))) / paragraphSpan : 0;
}return a;
case 0:
return 0.5;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid axis: " + axis]);
}
});

Clazz.newMeth(C$, 'breakView$I$F$java_awt_Shape',  function (axis, len, a) {
if (axis == 1) {
if (a != null ) {
var alloc=a.getBounds$();
this.setSize$F$F(alloc.width, alloc.height);
}return this;
}return this;
});

Clazz.newMeth(C$, 'getBreakWeight$I$F',  function (axis, len) {
if (axis == 1) {
return 0;
}return 0;
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (changes, a, f) {
this.setPropertiesFromAttributes$();
this.layoutChanged$I(0);
this.layoutChanged$I(1);
C$.superclazz.prototype.changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory.apply(this, [changes, a, f]);
});

C$.$static$=function(){C$.$static$=0;
{
C$.tabChars=Clazz.array(Character.TYPE, [1]);
C$.tabChars[0]="\t";
C$.tabDecimalChars=Clazz.array(Character.TYPE, [2]);
C$.tabDecimalChars[0]="\t";
C$.tabDecimalChars[1]=".";
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ParagraphView, "Row", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.text.BoxView');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.justificationData=(null|0);
},1);

C$.$fields$=[['O',['justificationData','int[]']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element$I.apply(this,[elem, 0]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'loadChildren$javax_swing_text_ViewFactory',  function (f) {
});

Clazz.newMeth(C$, 'getAttributes$',  function () {
var p=this.getParent$();
return (p != null ) ? p.getAttributes$() : null;
});

Clazz.newMeth(C$, 'getAlignment$I',  function (axis) {
if (axis == 0) {
switch (this.b$['javax.swing.text.ParagraphView'].justification) {
case 0:
return 0;
case 2:
return 1;
case 1:
return 0.5;
case 3:
var rv=0.5;
if (p$1.isJustifiableDocument.apply(this, [])) {
rv=0.0;
}return rv;
}
}return C$.superclazz.prototype.getAlignment$I.apply(this, [axis]);
});

Clazz.newMeth(C$, 'modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias',  function (pos, a, b) {
var r=a.getBounds$();
var v=this.getViewAtPosition$I$java_awt_Rectangle(pos, r);
if ((v != null ) && (!v.getElement$().isLeaf$()) ) {
return C$.superclazz.prototype.modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias.apply(this, [pos, a, b]);
}r=a.getBounds$();
var height=r.height;
var y=r.y;
var loc=C$.superclazz.prototype.modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias.apply(this, [pos, a, b]);
r=loc.getBounds$();
r.height=height;
r.y=y;
return r;
});

Clazz.newMeth(C$, 'getStartOffset$',  function () {
var offs=2147483647;
var n=this.getViewCount$();
for (var i=0; i < n; i++) {
var v=this.getView$I(i);
offs=Math.min(offs, v.getStartOffset$());
}
return offs;
});

Clazz.newMeth(C$, 'getEndOffset$',  function () {
var offs=0;
var n=this.getViewCount$();
for (var i=0; i < n; i++) {
var v=this.getView$I(i);
offs=Math.max(offs, v.getEndOffset$());
}
return offs;
});

Clazz.newMeth(C$, 'layoutMinorAxis$I$I$IA$IA',  function (targetSpan, axis, offsets, spans) {
this.baselineLayout$I$I$IA$IA(targetSpan, axis, offsets, spans);
});

Clazz.newMeth(C$, 'calculateMinorAxisRequirements$I$javax_swing_SizeRequirements',  function (axis, r) {
return this.baselineRequirements$I$javax_swing_SizeRequirements(axis, r);
});

Clazz.newMeth(C$, 'isLastRow',  function () {
var parent;
return ((parent=this.getParent$()) == null  || this === parent.getView$I(parent.getViewCount$() - 1)  );
}, p$1);

Clazz.newMeth(C$, 'isBrokenRow',  function () {
var rv=false;
var viewsCount=this.getViewCount$();
if (viewsCount > 0) {
var lastView=this.getView$I(viewsCount - 1);
if (lastView.getBreakWeight$I$F$F(0, 0, 0) >= 3000) {
rv=true;
}}return rv;
}, p$1);

Clazz.newMeth(C$, 'isJustifiableDocument',  function () {
return (!Boolean.TRUE.equals$O(this.getDocument$().getProperty$O("i18n")));
}, p$1);

Clazz.newMeth(C$, 'isJustifyEnabled',  function () {
var ret=(this.b$['javax.swing.text.ParagraphView'].justification == 3);
ret=ret && p$1.isJustifiableDocument.apply(this, []) ;
ret=ret && !p$1.isLastRow.apply(this, []) ;
ret=ret && !p$1.isBrokenRow.apply(this, []) ;
return ret;
}, p$1);

Clazz.newMeth(C$, 'calculateMajorAxisRequirements$I$javax_swing_SizeRequirements',  function (axis, r) {
var oldJustficationData=this.justificationData;
this.justificationData=null;
var ret=C$.superclazz.prototype.calculateMajorAxisRequirements$I$javax_swing_SizeRequirements.apply(this, [axis, r]);
if (p$1.isJustifyEnabled.apply(this, [])) {
this.justificationData=oldJustficationData;
}return ret;
});

Clazz.newMeth(C$, 'layoutMajorAxis$I$I$IA$IA',  function (targetSpan, axis, offsets, spans) {
var oldJustficationData=this.justificationData;
this.justificationData=null;
C$.superclazz.prototype.layoutMajorAxis$I$I$IA$IA.apply(this, [targetSpan, axis, offsets, spans]);
if (!p$1.isJustifyEnabled.apply(this, [])) {
return;
}var currentSpan=0;
for (var span, $span = 0, $$span = spans; $span<$$span.length&&((span=($$span[$span])),1);$span++) {
currentSpan+=span;
}
if (currentSpan == targetSpan) {
return;
}var extendableSpaces=0;
var startJustifiableContent=-1;
var endJustifiableContent=-1;
var lastLeadingSpaces=0;
var rowStartOffset=this.getStartOffset$();
var rowEndOffset=this.getEndOffset$();
var spaceMap=Clazz.array(Integer.TYPE, [rowEndOffset - rowStartOffset]);
$I$(1).fill$IA$I(spaceMap, 0);
for (var i=this.getViewCount$() - 1; i >= 0; i--) {
var view=this.getView$I(i);
if (Clazz.instanceOf(view, "javax.swing.text.GlyphView")) {
var justificationInfo=(view).getJustificationInfo$I(rowStartOffset);
var viewStartOffset=view.getStartOffset$();
var offset=viewStartOffset - rowStartOffset;
for (var j=0; j < justificationInfo.spaceMap.length$(); j++) {
if (justificationInfo.spaceMap.get$I(j)) {
spaceMap[j + offset]=1;
}}
if (startJustifiableContent > 0) {
if (justificationInfo.end >= 0) {
extendableSpaces+=justificationInfo.trailingSpaces;
} else {
lastLeadingSpaces+=justificationInfo.trailingSpaces;
}}if (justificationInfo.start >= 0) {
startJustifiableContent=justificationInfo.start + viewStartOffset;
extendableSpaces+=lastLeadingSpaces;
}if (justificationInfo.end >= 0 && endJustifiableContent < 0 ) {
endJustifiableContent=justificationInfo.end + viewStartOffset;
}extendableSpaces+=justificationInfo.contentSpaces;
lastLeadingSpaces=justificationInfo.leadingSpaces;
if (justificationInfo.hasTab) {
break;
}}}
if (extendableSpaces <= 0) {
return;
}var adjustment=(targetSpan - currentSpan);
var spaceAddon=(extendableSpaces > 0) ? (adjustment/extendableSpaces|0) : 0;
var spaceAddonLeftoverEnd=-1;
for (var i=startJustifiableContent - rowStartOffset, leftover=adjustment - spaceAddon * extendableSpaces; leftover > 0; leftover-=spaceMap[i], i++) {
spaceAddonLeftoverEnd=i;
}
if (spaceAddon > 0 || spaceAddonLeftoverEnd >= 0 ) {
this.justificationData=(oldJustficationData != null ) ? oldJustficationData : Clazz.array(Integer.TYPE, [4]);
this.justificationData[0]=spaceAddon;
this.justificationData[1]=spaceAddonLeftoverEnd;
this.justificationData[2]=startJustifiableContent - rowStartOffset;
this.justificationData[3]=endJustifiableContent - rowStartOffset;
C$.superclazz.prototype.layoutMajorAxis$I$I$IA$IA.apply(this, [targetSpan, axis, offsets, spans]);
}});

Clazz.newMeth(C$, 'getMaximumSpan$I',  function (axis) {
var ret;
if (0 == axis && p$1.isJustifyEnabled.apply(this, []) ) {
ret=3.4028235E38;
} else {
ret=C$.superclazz.prototype.getMaximumSpan$I.apply(this, [axis]);
}return ret;
});

Clazz.newMeth(C$, 'getViewIndexAtPosition$I',  function (pos) {
if (pos < this.getStartOffset$() || pos >= this.getEndOffset$() ) return -1;
for (var counter=this.getViewCount$() - 1; counter >= 0; counter--) {
var v=this.getView$I(counter);
if (pos >= v.getStartOffset$() && pos < v.getEndOffset$() ) {
return counter;
}}
return -1;
});

Clazz.newMeth(C$, 'getLeftInset$',  function () {
var parentView;
var adjustment=0;
if ((parentView=this.getParent$()) != null ) {
if (this === parentView.getView$I(0) ) {
adjustment=this.b$['javax.swing.text.ParagraphView'].firstLineIndent;
}}return ($s$[0] = (C$.superclazz.prototype.getLeftInset$.apply(this, []) + adjustment), $s$[0]);
});

Clazz.newMeth(C$, 'getBottomInset$',  function () {
return ($s$[0] = (C$.superclazz.prototype.getBottomInset$.apply(this, []) + ((this.minorRequest != null ) ? this.minorRequest.preferred : 0) * this.b$['javax.swing.text.ParagraphView'].lineSpacing), $s$[0]);
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:22 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
