(function(){var P$=Clazz.newPackage("javax.swing.text"),p$1={},p$2={},I$=[[0,['javax.swing.text.Position','.Bias'],'javax.swing.text.SegmentCache','javax.swing.text.Utilities','javax.swing.text.StateInvariantError','javax.swing.text.Segment','javax.swing.text.View',['javax.swing.text.WrappedPlainView','.WrappedLine']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "WrappedPlainView", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.text.BoxView', 'javax.swing.text.TabExpander');
C$.$classes$=[['WrappedLine',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['widthChanging','wordWrap'],'I',['tabBase','tabSize','sel0','sel1'],'O',['metrics','java.awt.FontMetrics','lineBuffer','javax.swing.text.Segment','unselected','java.awt.Color','+selected']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
C$.c$$javax_swing_text_Element$Z.apply(this, [elem, false]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_text_Element$Z',  function (elem, wordWrap) {
;C$.superclazz.c$$javax_swing_text_Element$I.apply(this,[elem, 1]);C$.$init$.apply(this);
this.wordWrap=wordWrap;
}, 1);

Clazz.newMeth(C$, 'getTabSize$',  function () {
var i=this.getDocument$().getProperty$O("tabSize");
var size=(i != null ) ? i.intValue$() : 8;
return size;
});

Clazz.newMeth(C$, 'drawLine$I$I$java_awt_Graphics$I$I',  function (p0, p1, g, x, y) {
var lineMap=this.getElement$();
var line=lineMap.getElement$I(lineMap.getElementIndex$I(p0));
var elem;
try {
if (line.isLeaf$()) {
p$1.drawText$javax_swing_text_Element$I$I$java_awt_Graphics$I$I.apply(this, [line, p0, p1, g, x, y]);
} else {
var idx=line.getElementIndex$I(p0);
var lastIdx=line.getElementIndex$I(p1);
for (; idx <= lastIdx; idx++) {
elem=line.getElement$I(idx);
var start=Math.max(elem.getStartOffset$(), p0);
var end=Math.min(elem.getEndOffset$(), p1);
x=p$1.drawText$javax_swing_text_Element$I$I$java_awt_Graphics$I$I.apply(this, [elem, start, end, g, x, y]);
}
}} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
throw Clazz.new_($I$(4,1).c$$S,["Can't render: " + p0 + "," + p1 ]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'drawText$javax_swing_text_Element$I$I$java_awt_Graphics$I$I',  function (elem, p0, p1, g, x, y) {
return x;
}, p$1);

Clazz.newMeth(C$, 'getLineBuffer$',  function () {
if (this.lineBuffer == null ) {
this.lineBuffer=Clazz.new_($I$(5,1));
}return this.lineBuffer;
});

Clazz.newMeth(C$, 'calculateBreakPosition$I$I',  function (p0, p1) {
var p;
var segment=$I$(2).getSharedSegment$();
this.loadText$javax_swing_text_Segment$I$I(segment, p0, p1);
var currentWidth=this.getWidth$();
if (currentWidth == 2147483647) {
currentWidth=(p$1.getDefaultSpan$I.apply(this, [0])|0);
}if (this.wordWrap) {
p=p0 + $I$(3).getBreakLocation$javax_swing_text_Segment$java_awt_FontMetrics$I$I$javax_swing_text_TabExpander$I(segment, this.metrics, this.tabBase, this.tabBase + currentWidth, this, p0);
} else {
p=p0 + $I$(3).getTabbedTextOffset$javax_swing_text_Segment$java_awt_FontMetrics$I$I$javax_swing_text_TabExpander$I$Z(segment, this.metrics, this.tabBase, this.tabBase + currentWidth, this, p0, false);
}$I$(2).releaseSharedSegment$javax_swing_text_Segment(segment);
return p;
});

Clazz.newMeth(C$, 'loadChildren$javax_swing_text_ViewFactory',  function (f) {
var e=this.getElement$();
var n=e.getElementCount$();
if (n > 0) {
var added=Clazz.array($I$(6), [n]);
for (var i=0; i < n; i++) {
added[i]=Clazz.new_([this, null, e.getElement$I(i)],$I$(7,1).c$$javax_swing_text_Element);
}
this.replace$I$I$javax_swing_text_ViewA(0, 0, added);
}});

Clazz.newMeth(C$, 'updateChildren$javax_swing_event_DocumentEvent$java_awt_Shape',  function (e, a) {
var elem=this.getElement$();
var ec=e.getChange$javax_swing_text_Element(elem);
if (ec != null ) {
var removedElems=ec.getChildrenRemoved$();
var addedElems=ec.getChildrenAdded$();
var added=Clazz.array($I$(6), [addedElems.length]);
for (var i=0; i < addedElems.length; i++) {
added[i]=Clazz.new_($I$(7,1).c$$javax_swing_text_Element,[this, null, addedElems[i]]);
}
this.replace$I$I$javax_swing_text_ViewA(ec.getIndex$(), removedElems.length, added);
if (a != null ) {
this.preferenceChanged$javax_swing_text_View$Z$Z(null, true, true);
this.getContainer$().秘repaint$();
}}this.updateMetrics$();
});

Clazz.newMeth(C$, 'loadText$javax_swing_text_Segment$I$I',  function (segment, p0, p1) {
try {
var doc=this.getDocument$();
doc.getText$I$I$javax_swing_text_Segment(p0, p1 - p0, segment);
} catch (bl) {
if (Clazz.exceptionOf(bl,"javax.swing.text.BadLocationException")){
throw Clazz.new_($I$(4,1).c$$S,["Can\'t get line text"]);
} else {
throw bl;
}
}
});

Clazz.newMeth(C$, 'updateMetrics$',  function () {
var host=this.getContainer$();
var f=host.getFont$();
this.metrics=host.getFontMetrics$java_awt_Font(f);
this.tabSize=this.getTabSize$() * this.metrics.charWidth$C("m");
});

Clazz.newMeth(C$, 'getDefaultSpan$I',  function (axis) {
var host=this.getContainer$();
var parent=null;
if (host != null ) {
parent=host.getParent$();
}switch (axis) {
case 0:
var defaultWidth=80 * this.metrics.charWidth$C("M");
var parentWidth=0;
if (parent != null ) {
parentWidth=parent.getWidth$();
}if (defaultWidth > parentWidth) {
return parentWidth;
}return defaultWidth;
case 1:
var defaultHeight=24 * this.metrics.getHeight$();
var parentHeight=0;
if (parent != null ) {
parentHeight=parent.getHeight$();
}if (defaultHeight > parentHeight) {
return parentHeight;
}return defaultHeight;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid axis: " + axis]);
}
}, p$1);

Clazz.newMeth(C$, 'nextTabStop$F$I',  function (x, tabOffset) {
if (this.tabSize == 0) return x;
var ntabs=(((x|0) - this.tabBase)/this.tabSize|0);
return this.tabBase + ((ntabs + 1) * this.tabSize);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape',  function (g, a) {
var alloc=a;
this.tabBase=alloc.x;
var host=this.getContainer$();
this.sel0=host.getSelectionStart$();
this.sel1=host.getSelectionEnd$();
this.unselected=(host.isEnabled$()) ? host.getForeground$() : host.getDisabledTextColor$();
var c=host.getCaret$();
this.selected=c.isSelectionVisible$() && host.getHighlighter$() != null   ? host.getSelectedTextColor$() : this.unselected;
g.setFont$java_awt_Font(host.getFont$());
C$.superclazz.prototype.paint$java_awt_Graphics$java_awt_Shape.apply(this, [g, a]);
});

Clazz.newMeth(C$, 'setSize$F$F',  function (width, height) {
this.updateMetrics$();
if ((width|0) != this.getWidth$()) {
this.preferenceChanged$javax_swing_text_View$Z$Z(null, true, true);
this.widthChanging=true;
}C$.superclazz.prototype.setSize$F$F.apply(this, [width, height]);
this.widthChanging=false;
});

Clazz.newMeth(C$, 'getPreferredSpan$I',  function (axis) {
this.updateMetrics$();
return C$.superclazz.prototype.getPreferredSpan$I.apply(this, [axis]);
});

Clazz.newMeth(C$, 'getMinimumSpan$I',  function (axis) {
this.updateMetrics$();
return C$.superclazz.prototype.getMinimumSpan$I.apply(this, [axis]);
});

Clazz.newMeth(C$, 'getMaximumSpan$I',  function (axis) {
this.updateMetrics$();
return C$.superclazz.prototype.getMaximumSpan$I.apply(this, [axis]);
});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (e, a, f) {
this.updateChildren$javax_swing_event_DocumentEvent$java_awt_Shape(e, a);
var alloc=((a != null ) && this.isAllocationValid$() ) ? this.getInsideAllocation$java_awt_Shape(a) : null;
var pos=e.getOffset$();
var v=this.getViewAtPosition$I$java_awt_Rectangle(pos, alloc);
if (v != null ) {
v.insertUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory(e, alloc, f);
}});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (e, a, f) {
this.updateChildren$javax_swing_event_DocumentEvent$java_awt_Shape(e, a);
var alloc=((a != null ) && this.isAllocationValid$() ) ? this.getInsideAllocation$java_awt_Shape(a) : null;
var pos=e.getOffset$();
var v=this.getViewAtPosition$I$java_awt_Rectangle(pos, alloc);
if (v != null ) {
v.removeUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory(e, alloc, f);
}});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (e, a, f) {
this.updateChildren$javax_swing_event_DocumentEvent$java_awt_Shape(e, a);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.WrappedPlainView, "WrappedLine", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.text.View');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['lineCount']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[elem]);C$.$init$.apply(this);
this.lineCount=-1;
}, 1);

Clazz.newMeth(C$, 'getPreferredSpan$I',  function (axis) {
switch (axis) {
case 0:
var width=this.b$['javax.swing.text.BoxView'].getWidth$.apply(this.b$['javax.swing.text.BoxView'], []);
if (width == 2147483647 ) {
width=p$1.getDefaultSpan$I.apply(this.b$['javax.swing.text.WrappedPlainView'], [axis]);
}return width;
case 1:
if (this.getDocument$().getLength$() > 0) {
if ((this.lineCount < 0) || this.b$['javax.swing.text.WrappedPlainView'].widthChanging ) {
this.breakLines$I(this.getStartOffset$());
}return this.lineCount * this.b$['javax.swing.text.WrappedPlainView'].metrics.getHeight$();
} else {
return p$1.getDefaultSpan$I.apply(this.b$['javax.swing.text.WrappedPlainView'], [axis]);
}default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid axis: " + axis]);
}
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape',  function (g, a) {
var alloc=a;
var y=alloc.y + this.b$['javax.swing.text.WrappedPlainView'].metrics.getAscent$();
var x=alloc.x;
var host=this.getContainer$();
var h=host.getHighlighter$();
var dh=(Clazz.instanceOf(h, "javax.swing.text.LayeredHighlighter")) ? h : null;
var start=this.getStartOffset$();
var end=this.getEndOffset$();
var p0=start;
var lineEnds=this.getLineEnds$();
for (var i=0; i < this.lineCount; i++) {
var p1=(lineEnds == null ) ? end : start + lineEnds[i];
if (dh != null ) {
var hOffset=(p1 == end) ? (p1 - 1) : p1;
dh.paintLayeredHighlights$java_awt_Graphics$I$I$java_awt_Shape$javax_swing_text_JTextComponent$javax_swing_text_View(g, p0, hOffset, a, host, this);
}this.b$['javax.swing.text.WrappedPlainView'].drawLine$I$I$java_awt_Graphics$I$I.apply(this.b$['javax.swing.text.WrappedPlainView'], [p0, p1, g, x, y]);
p0=p1;
y+=this.b$['javax.swing.text.WrappedPlainView'].metrics.getHeight$();
}
});

Clazz.newMeth(C$, 'modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias',  function (pos, a, b) {
var alloc=a.getBounds$();
alloc.height=this.b$['javax.swing.text.WrappedPlainView'].metrics.getHeight$();
alloc.width=1;
var p0=this.getStartOffset$();
if (pos < p0 || pos > this.getEndOffset$() ) {
throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["Position out of range", pos]);
}var testP=(b === $I$(1).Forward ) ? pos : Math.max(p0, pos - 1);
var line=0;
var lineEnds=this.getLineEnds$();
if (lineEnds != null ) {
line=p$2.findLine$I.apply(this, [testP - p0]);
if (line > 0) {
p0+=lineEnds[line - 1];
}alloc.y+=alloc.height * line;
}if (pos > p0) {
var segment=$I$(2).getSharedSegment$();
this.b$['javax.swing.text.WrappedPlainView'].loadText$javax_swing_text_Segment$I$I.apply(this.b$['javax.swing.text.WrappedPlainView'], [segment, p0, pos]);
alloc.x+=$I$(3).getTabbedTextWidth$javax_swing_text_Segment$java_awt_FontMetrics$I$javax_swing_text_TabExpander$I(segment, this.b$['javax.swing.text.WrappedPlainView'].metrics, alloc.x, this.b$['javax.swing.text.WrappedPlainView'], p0);
$I$(2).releaseSharedSegment$javax_swing_text_Segment(segment);
}return alloc;
});

Clazz.newMeth(C$, 'viewToModel$F$F$java_awt_Shape$javax_swing_text_Position_BiasA',  function (fx, fy, a, bias) {
bias[0]=$I$(1).Forward;
var alloc=a;
var x=(fx|0);
var y=(fy|0);
if (y < alloc.y) {
return this.getStartOffset$();
} else if (y > alloc.y + alloc.height) {
return this.getEndOffset$() - 1;
} else {
alloc.height=this.b$['javax.swing.text.WrappedPlainView'].metrics.getHeight$();
var line=(alloc.height > 0 ? ((y - alloc.y)/alloc.height|0) : this.lineCount - 1);
if (line >= this.lineCount) {
return this.getEndOffset$() - 1;
} else {
var p0=this.getStartOffset$();
var p1;
if (this.lineCount == 1) {
p1=this.getEndOffset$();
} else {
var lineEnds=this.getLineEnds$();
p1=p0 + lineEnds[line];
if (line > 0) {
p0+=lineEnds[line - 1];
}}if (x < alloc.x) {
return p0;
} else if (x > alloc.x + alloc.width) {
return p1 - 1;
} else {
var segment=$I$(2).getSharedSegment$();
this.b$['javax.swing.text.WrappedPlainView'].loadText$javax_swing_text_Segment$I$I.apply(this.b$['javax.swing.text.WrappedPlainView'], [segment, p0, p1]);
var n=$I$(3).getTabbedTextOffset$javax_swing_text_Segment$java_awt_FontMetrics$I$I$javax_swing_text_TabExpander$I(segment, this.b$['javax.swing.text.WrappedPlainView'].metrics, alloc.x, x, this.b$['javax.swing.text.WrappedPlainView'], p0);
$I$(2).releaseSharedSegment$javax_swing_text_Segment(segment);
return Math.min(p0 + n, p1 - 1);
}}}});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (e, a, f) {
p$2.update$javax_swing_event_DocumentEvent$java_awt_Shape.apply(this, [e, a]);
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (e, a, f) {
p$2.update$javax_swing_event_DocumentEvent$java_awt_Shape.apply(this, [e, a]);
});

Clazz.newMeth(C$, 'update$javax_swing_event_DocumentEvent$java_awt_Shape',  function (ev, a) {
var oldCount=this.lineCount;
this.breakLines$I(ev.getOffset$());
if (oldCount != this.lineCount) {
this.b$['javax.swing.text.WrappedPlainView'].preferenceChanged$javax_swing_text_View$Z$Z.apply(this.b$['javax.swing.text.WrappedPlainView'], [this, false, true]);
this.getContainer$().秘repaint$();
} else if (a != null ) {
var c=this.getContainer$();
var alloc=a;
c.repaint$I$I$I$I(alloc.x, alloc.y, alloc.width, alloc.height);
}}, p$2);

Clazz.newMeth(C$, 'getLineEnds$',  function () {
return null;
});

Clazz.newMeth(C$, 'breakLines$I',  function (startPos) {
var lineEnds=null;
return lineEnds;
});

Clazz.newMeth(C$, 'findLine$I',  function (offset) {
return 0;
}, p$2);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:25 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
