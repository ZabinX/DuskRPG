(function(){var P$=Clazz.newPackage("javax.swing.text"),I$=[[0,'javax.swing.text.StyleConstants',['javax.swing.text.Position','.Bias']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Utilities");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getJComponent$javax_swing_text_View',  function (view) {
if (view != null ) {
var component=view.getContainer$();
if (Clazz.instanceOf(component, "javax.swing.JComponent")) {
return component;
}}return null;
}, 1);

Clazz.newMeth(C$, 'getTabbedTextWidth$javax_swing_text_Segment$java_awt_FontMetrics$I$javax_swing_text_TabExpander$I',  function (s, metrics, x, e, startOffset) {
return C$.getTabbedTextWidth$javax_swing_text_View$javax_swing_text_Segment$java_awt_FontMetrics$I$javax_swing_text_TabExpander$I$IA(null, s, metrics, x, e, startOffset, null);
}, 1);

Clazz.newMeth(C$, 'getTabbedTextWidth$javax_swing_text_View$javax_swing_text_Segment$java_awt_FontMetrics$I$javax_swing_text_TabExpander$I$IA',  function (view, s, metrics, x, e, startOffset, justificationData) {
var nextX=x;
var txt=s.array;
var txtOffset=s.offset;
var n=s.offset + s.count;
var charCount=0;
var spaceAddon=0;
var spaceAddonLeftoverEnd=-1;
var startJustifiableContent=0;
var endJustifiableContent=0;
if (justificationData != null ) {
var offset=-startOffset + txtOffset;
var parent=null;
if (view != null  && (parent=view.getParent$()) != null  ) {
offset+=parent.getStartOffset$();
}spaceAddon=justificationData[0];
spaceAddonLeftoverEnd=justificationData[1] + offset;
startJustifiableContent=justificationData[2] + offset;
endJustifiableContent=justificationData[3] + offset;
}for (var i=txtOffset; i < n; i++) {
if (txt[i] == "\t" || ((spaceAddon != 0 || i <= spaceAddonLeftoverEnd ) && (txt[i] == " ") && startJustifiableContent <= i   && i <= endJustifiableContent ) ) {
nextX+=metrics.charsWidth$CA$I$I(txt, i - charCount, charCount);
charCount=0;
if (txt[i] == "\t") {
if (e != null ) {
nextX=(e.nextTabStop$F$I(nextX, startOffset + i - txtOffset)|0);
} else {
nextX+=metrics.charWidth$C(" ");
}} else if (txt[i] == " ") {
nextX+=metrics.charWidth$C(" ") + spaceAddon;
if (i <= spaceAddonLeftoverEnd) {
++nextX;
}}} else if (txt[i] == "\n") {
nextX+=metrics.charsWidth$CA$I$I(txt, i - charCount, charCount);
charCount=0;
} else {
++charCount;
}}
nextX+=metrics.charsWidth$CA$I$I(txt, n - charCount, charCount);
return nextX - x;
}, 1);

Clazz.newMeth(C$, 'getTabbedTextOffset$javax_swing_text_Segment$java_awt_FontMetrics$I$I$javax_swing_text_TabExpander$I',  function (s, metrics, x0, x, e, startOffset) {
return C$.getTabbedTextOffset$javax_swing_text_Segment$java_awt_FontMetrics$I$I$javax_swing_text_TabExpander$I$Z(s, metrics, x0, x, e, startOffset, true);
}, 1);

Clazz.newMeth(C$, 'getTabbedTextOffset$javax_swing_text_View$javax_swing_text_Segment$java_awt_FontMetrics$I$I$javax_swing_text_TabExpander$I$IA',  function (view, s, metrics, x0, x, e, startOffset, justificationData) {
return C$.getTabbedTextOffset$javax_swing_text_View$javax_swing_text_Segment$java_awt_FontMetrics$I$I$javax_swing_text_TabExpander$I$Z$IA(view, s, metrics, x0, x, e, startOffset, true, justificationData);
}, 1);

Clazz.newMeth(C$, 'getTabbedTextOffset$javax_swing_text_Segment$java_awt_FontMetrics$I$I$javax_swing_text_TabExpander$I$Z',  function (s, metrics, x0, x, e, startOffset, round) {
return C$.getTabbedTextOffset$javax_swing_text_View$javax_swing_text_Segment$java_awt_FontMetrics$I$I$javax_swing_text_TabExpander$I$Z$IA(null, s, metrics, x0, x, e, startOffset, round, null);
}, 1);

Clazz.newMeth(C$, 'getTabbedTextOffset$javax_swing_text_View$javax_swing_text_Segment$java_awt_FontMetrics$I$I$javax_swing_text_TabExpander$I$Z$IA',  function (view, s, metrics, x0, x, e, startOffset, round, justificationData) {
if (x0 >= x) {
return 0;
}var currX=x0;
var nextX=currX;
var txt=s.array;
var txtOffset=s.offset;
var txtCount=s.count;
var spaceAddon=0;
var spaceAddonLeftoverEnd=-1;
var startJustifiableContent=0;
var endJustifiableContent=0;
if (justificationData != null ) {
var offset=-startOffset + txtOffset;
var parent=null;
if (view != null  && (parent=view.getParent$()) != null  ) {
offset+=parent.getStartOffset$();
}spaceAddon=justificationData[0];
spaceAddonLeftoverEnd=justificationData[1] + offset;
startJustifiableContent=justificationData[2] + offset;
endJustifiableContent=justificationData[3] + offset;
}var n=s.offset + s.count;
for (var i=s.offset; i < n; i++) {
if (txt[i] == "\t" || ((spaceAddon != 0 || i <= spaceAddonLeftoverEnd ) && (txt[i] == " ") && startJustifiableContent <= i   && i <= endJustifiableContent ) ) {
if (txt[i] == "\t") {
if (e != null ) {
nextX=(e.nextTabStop$F$I(nextX, startOffset + i - txtOffset)|0);
} else {
nextX+=metrics.charWidth$C(" ");
}} else if (txt[i] == " ") {
nextX+=metrics.charWidth$C(" ") + spaceAddon;
if (i <= spaceAddonLeftoverEnd) {
++nextX;
}}} else {
nextX+=metrics.charWidth$C(txt[i]);
}if ((x >= currX) && (x < nextX) ) {
if ((round == false ) || ((x - currX) < (nextX - x)) ) {
return i - txtOffset;
} else {
return i + 1 - txtOffset;
}}currX=nextX;
}
return txtCount;
}, 1);

Clazz.newMeth(C$, 'getBreakLocation$javax_swing_text_Segment$java_awt_FontMetrics$I$I$javax_swing_text_TabExpander$I',  function (s, metrics, x0, x, e, startOffset) {
return 0;
}, 1);

Clazz.newMeth(C$, 'getRowStart$javax_swing_text_JTextComponent$I',  function (c, offs) {
var r=c.modelToView$I(offs);
if (r == null ) {
return -1;
}var lastOffs=offs;
var y=r.y;
while ((r != null ) && (y == r.y) ){
if (r.height != 0) {
offs=lastOffs;
}lastOffs-=1;
r=(lastOffs >= 0) ? c.modelToView$I(lastOffs) : null;
}
return offs;
}, 1);

Clazz.newMeth(C$, 'getRowEnd$javax_swing_text_JTextComponent$I',  function (c, offs) {
var r=c.modelToView$I(offs);
if (r == null ) {
return -1;
}var n=c.getDocument$().getLength$();
var lastOffs=offs;
var y=r.y;
while ((r != null ) && (y == r.y) ){
if (r.height != 0) {
offs=lastOffs;
}lastOffs+=1;
r=(lastOffs <= n) ? c.modelToView$I(lastOffs) : null;
}
return offs;
}, 1);

Clazz.newMeth(C$, 'getPositionAbove$javax_swing_text_JTextComponent$I$I',  function (c, offs, x) {
var lastOffs=C$.getRowStart$javax_swing_text_JTextComponent$I(c, offs) - 1;
if (lastOffs < 0) {
return -1;
}var bestSpan=2147483647;
var y=0;
var r=null;
if (lastOffs >= 0) {
r=c.modelToView$I(lastOffs);
y=r.y;
}while ((r != null ) && (y == r.y) ){
var span=Math.abs(r.x - x);
if (span < bestSpan) {
offs=lastOffs;
bestSpan=span;
}lastOffs-=1;
r=(lastOffs >= 0) ? c.modelToView$I(lastOffs) : null;
}
return offs;
}, 1);

Clazz.newMeth(C$, 'getPositionBelow$javax_swing_text_JTextComponent$I$I',  function (c, offs, x) {
var lastOffs=C$.getRowEnd$javax_swing_text_JTextComponent$I(c, offs) + 1;
if (lastOffs <= 0) {
return -1;
}var bestSpan=2147483647;
var n=c.getDocument$().getLength$();
var y=0;
var r=null;
if (lastOffs <= n) {
r=c.modelToView$I(lastOffs);
y=r.y;
}while ((r != null ) && (y == r.y) ){
var span=Math.abs(x - r.x);
if (span < bestSpan) {
offs=lastOffs;
bestSpan=span;
}lastOffs+=1;
r=(lastOffs <= n) ? c.modelToView$I(lastOffs) : null;
}
return offs;
}, 1);

Clazz.newMeth(C$, 'getWordStart$javax_swing_text_JTextComponent$I',  function (c, offs) {
return 0;
}, 1);

Clazz.newMeth(C$, 'getWordEnd$javax_swing_text_JTextComponent$I',  function (c, offs) {
return 0;
}, 1);

Clazz.newMeth(C$, 'getNextWord$javax_swing_text_JTextComponent$I',  function (c, offs) {
var nextWord;
var line=C$.getParagraphElement$javax_swing_text_JTextComponent$I(c, offs);
for (nextWord=C$.getNextWordInParagraph$javax_swing_text_JTextComponent$javax_swing_text_Element$I$Z(c, line, offs, false); nextWord == -1; nextWord=C$.getNextWordInParagraph$javax_swing_text_JTextComponent$javax_swing_text_Element$I$Z(c, line, offs, true)) {
offs=line.getEndOffset$();
line=C$.getParagraphElement$javax_swing_text_JTextComponent$I(c, offs);
}
return nextWord;
}, 1);

Clazz.newMeth(C$, 'getNextWordInParagraph$javax_swing_text_JTextComponent$javax_swing_text_Element$I$Z',  function (c, line, offs, first) {
return 0;
}, 1);

Clazz.newMeth(C$, 'getPreviousWord$javax_swing_text_JTextComponent$I',  function (c, offs) {
var prevWord;
var line=C$.getParagraphElement$javax_swing_text_JTextComponent$I(c, offs);
for (prevWord=C$.getPrevWordInParagraph$javax_swing_text_JTextComponent$javax_swing_text_Element$I(c, line, offs); prevWord == -1; prevWord=C$.getPrevWordInParagraph$javax_swing_text_JTextComponent$javax_swing_text_Element$I(c, line, offs)) {
offs=line.getStartOffset$() - 1;
line=C$.getParagraphElement$javax_swing_text_JTextComponent$I(c, offs);
}
return prevWord;
}, 1);

Clazz.newMeth(C$, 'getPrevWordInParagraph$javax_swing_text_JTextComponent$javax_swing_text_Element$I',  function (c, line, offs) {
return 0;
}, 1);

Clazz.newMeth(C$, 'getParagraphElement$javax_swing_text_JTextComponent$I',  function (c, offs) {
var doc=c.getDocument$();
if (Clazz.instanceOf(doc, "javax.swing.text.StyledDocument")) {
return (doc).getParagraphElement$I(offs);
}var map=doc.getDefaultRootElement$();
var index=map.getElementIndex$I(offs);
var paragraph=map.getElement$I(index);
if ((offs >= paragraph.getStartOffset$()) && (offs < paragraph.getEndOffset$()) ) {
return paragraph;
}return null;
}, 1);

Clazz.newMeth(C$, 'isComposedTextElement$javax_swing_text_Document$I',  function (doc, offset) {
var elem=doc.getDefaultRootElement$();
while (!elem.isLeaf$()){
elem=elem.getElement$I(elem.getElementIndex$I(offset));
}
return C$.isComposedTextElement$javax_swing_text_Element(elem);
}, 1);

Clazz.newMeth(C$, 'isComposedTextElement$javax_swing_text_Element',  function (elem) {
var as=elem.getAttributes$();
return C$.isComposedTextAttributeDefined$javax_swing_text_AttributeSet(as);
}, 1);

Clazz.newMeth(C$, 'isComposedTextAttributeDefined$javax_swing_text_AttributeSet',  function (as) {
return ((as != null ) && (as.isDefined$O($I$(1).ComposedTextAttribute)) );
}, 1);

Clazz.newMeth(C$, 'isLeftToRight$java_awt_Component',  function (c) {
return c.getComponentOrientation$().isLeftToRight$();
}, 1);

Clazz.newMeth(C$, 'getNextVisualPositionFrom$javax_swing_text_View$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA',  function (v, pos, b, alloc, direction, biasRet) {
if (v.getViewCount$() == 0) {
return pos;
}var top=(direction == 1 || direction == 7 );
var retValue;
if (pos == -1) {
var childIndex=(top) ? v.getViewCount$() - 1 : 0;
var child=v.getView$I(childIndex);
var childBounds=v.getChildAllocation$I$java_awt_Shape(childIndex, alloc);
retValue=child.getNextVisualPositionFrom$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA(pos, b, childBounds, direction, biasRet);
if (retValue == -1 && !top  && v.getViewCount$() > 1 ) {
child=v.getView$I(1);
childBounds=v.getChildAllocation$I$java_awt_Shape(1, alloc);
retValue=child.getNextVisualPositionFrom$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA(-1, biasRet[0], childBounds, direction, biasRet);
}} else {
var increment=(top) ? -1 : 1;
var childIndex;
if (b === $I$(2).Backward  && pos > 0 ) {
childIndex=v.getViewIndex$I$javax_swing_text_Position_Bias(pos - 1, $I$(2).Forward);
} else {
childIndex=v.getViewIndex$I$javax_swing_text_Position_Bias(pos, $I$(2).Forward);
}var child=v.getView$I(childIndex);
var childBounds=v.getChildAllocation$I$java_awt_Shape(childIndex, alloc);
retValue=child.getNextVisualPositionFrom$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA(pos, b, childBounds, direction, biasRet);
if ((direction == 3 || direction == 7 ) && (Clazz.instanceOf(v, "javax.swing.text.CompositeView")) && (v).flipEastAndWestAtEnds$I$javax_swing_text_Position_Bias(pos, b)  ) {
increment*=-1;
}childIndex+=increment;
if (retValue == -1 && childIndex >= 0  && childIndex < v.getViewCount$() ) {
child=v.getView$I(childIndex);
childBounds=v.getChildAllocation$I$java_awt_Shape(childIndex, alloc);
retValue=child.getNextVisualPositionFrom$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA(-1, b, childBounds, direction, biasRet);
if (retValue == pos && biasRet[0] !== b  ) {
return C$.getNextVisualPositionFrom$javax_swing_text_View$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA(v, pos, biasRet[0], alloc, direction, biasRet);
}} else if (retValue != -1 && biasRet[0] !== b   && ((increment == 1 && child.getEndOffset$() == retValue ) || (increment == -1 && child.getStartOffset$() == retValue ) )  && childIndex >= 0  && childIndex < v.getViewCount$() ) {
child=v.getView$I(childIndex);
childBounds=v.getChildAllocation$I$java_awt_Shape(childIndex, alloc);
var originalBias=biasRet[0];
var nextPos=child.getNextVisualPositionFrom$I$javax_swing_text_Position_Bias$java_awt_Shape$I$javax_swing_text_Position_BiasA(-1, b, childBounds, direction, biasRet);
if (biasRet[0] === b ) {
retValue=nextPos;
} else {
biasRet[0]=originalBias;
}}}return retValue;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
