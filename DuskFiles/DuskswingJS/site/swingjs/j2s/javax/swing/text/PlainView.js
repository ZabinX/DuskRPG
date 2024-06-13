(function(){var P$=Clazz.newPackage("javax.swing.text"),p$1={},I$=[[0,'javax.swing.text.Segment','javax.swing.text.SegmentCache','javax.swing.text.Utilities',['javax.swing.text.Position','.Bias'],['javax.swing.event.DocumentEvent','.EventType'],'java.awt.Rectangle']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PlainView", null, 'javax.swing.text.View', 'javax.swing.text.TabExpander');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['tabSize','tabBase','sel0','sel1','firstLineOffset'],'O',['metrics','java.awt.FontMetrics','longLine','javax.swing.text.Element','font','java.awt.Font','lineBuffer','javax.swing.text.Segment','unselected','java.awt.Color','+selected']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_Element',  function (elem) {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[elem]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getTabSize$',  function () {
var i=this.getDocument$().getProperty$O("tabSize");
var size=(i != null ) ? i.intValue$() : 8;
return size;
});

Clazz.newMeth(C$, 'getLineBuffer$',  function () {
if (this.lineBuffer == null ) {
this.lineBuffer=Clazz.new_($I$(1,1));
}return this.lineBuffer;
});

Clazz.newMeth(C$, 'updateMetrics$',  function () {
var host=this.getContainer$();
var f=host.getFont$();
if (this.font !== f ) {
p$1.calculateLongestLine.apply(this, []);
this.tabSize=this.getTabSize$() * this.metrics.charWidth$C("m");
}});

Clazz.newMeth(C$, 'getPreferredSpan$I',  function (axis) {
this.updateMetrics$();
switch (axis) {
case 0:
return p$1.getLineWidth$javax_swing_text_Element.apply(this, [this.longLine]);
case 1:
return this.getElement$().getElementCount$() * this.metrics.getHeight$();
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid axis: " + axis]);
}
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape',  function (g, a) {
});

Clazz.newMeth(C$, 'adjustPaintRegion$java_awt_Shape',  function (a) {
return a;
});

Clazz.newMeth(C$, 'modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias',  function (pos, a, b) {
var doc=this.getDocument$();
var map=this.getElement$();
var lineIndex=map.getElementIndex$I(pos);
if (lineIndex < 0) {
return this.lineToRect$java_awt_Shape$I(a, 0);
}var lineArea=this.lineToRect$java_awt_Shape$I(a, lineIndex);
this.tabBase=lineArea.x;
var line=map.getElement$I(lineIndex);
var p0=line.getStartOffset$();
var s=$I$(2).getSharedSegment$();
doc.getText$I$I$javax_swing_text_Segment(p0, pos - p0, s);
var xOffs=$I$(3).getTabbedTextWidth$javax_swing_text_Segment$java_awt_FontMetrics$I$javax_swing_text_TabExpander$I(s, this.metrics, this.tabBase, this, p0);
$I$(2).releaseSharedSegment$javax_swing_text_Segment(s);
lineArea.x+=xOffs;
lineArea.width=1;
lineArea.height=this.metrics.getHeight$();
return lineArea;
});

Clazz.newMeth(C$, 'viewToModel$F$F$java_awt_Shape$javax_swing_text_Position_BiasA',  function (fx, fy, a, bias) {
bias[0]=$I$(4).Forward;
var alloc=a.getBounds$();
var doc=this.getDocument$();
var x=(fx|0);
var y=(fy|0);
if (y < alloc.y) {
return this.getStartOffset$();
} else if (y > alloc.y + alloc.height) {
return this.getEndOffset$() - 1;
} else {
var map=doc.getDefaultRootElement$();
var fontHeight=this.metrics.getHeight$();
var lineIndex=(fontHeight > 0 ? Math.abs(((y - alloc.y)/fontHeight|0)) : map.getElementCount$() - 1);
if (lineIndex >= map.getElementCount$()) {
return this.getEndOffset$() - 1;
}var line=map.getElement$I(lineIndex);
if (lineIndex == 0) {
alloc.x+=this.firstLineOffset;
alloc.width-=this.firstLineOffset;
}if (x < alloc.x) {
return line.getStartOffset$();
} else if (x > alloc.x + alloc.width) {
return line.getEndOffset$() - 1;
} else {
try {
var p0=line.getStartOffset$();
var p1=line.getEndOffset$() - 1;
var s=$I$(2).getSharedSegment$();
doc.getText$I$I$javax_swing_text_Segment(p0, p1 - p0, s);
this.tabBase=alloc.x;
var offs=p0 + $I$(3).getTabbedTextOffset$javax_swing_text_Segment$java_awt_FontMetrics$I$I$javax_swing_text_TabExpander$I(s, this.metrics, this.tabBase, x, this, p0);
$I$(2).releaseSharedSegment$javax_swing_text_Segment(s);
return offs;
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
return -1;
} else {
throw e;
}
}
}}});

Clazz.newMeth(C$, 'insertUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (changes, a, f) {
this.updateDamage$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory(changes, a, f);
});

Clazz.newMeth(C$, 'removeUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (changes, a, f) {
this.updateDamage$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory(changes, a, f);
});

Clazz.newMeth(C$, 'changedUpdate$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (changes, a, f) {
this.updateDamage$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory(changes, a, f);
});

Clazz.newMeth(C$, 'setSize$F$F',  function (width, height) {
C$.superclazz.prototype.setSize$F$F.apply(this, [width, height]);
this.updateMetrics$();
});

Clazz.newMeth(C$, 'nextTabStop$F$I',  function (x, tabOffset) {
if (this.tabSize == 0) {
return x;
}var ntabs=((((x|0)) - this.tabBase)/this.tabSize|0);
return this.tabBase + ((ntabs + 1) * this.tabSize);
});

Clazz.newMeth(C$, 'updateDamage$javax_swing_event_DocumentEvent$java_awt_Shape$javax_swing_text_ViewFactory',  function (changes, a, f) {
var host=this.getContainer$();
this.updateMetrics$();
var elem=this.getElement$();
var ec=changes.getChange$javax_swing_text_Element(elem);
var added=(ec != null ) ? ec.getChildrenAdded$() : null;
var removed=(ec != null ) ? ec.getChildrenRemoved$() : null;
if (((added != null ) && (added.length > 0) ) || ((removed != null ) && (removed.length > 0) ) ) {
if (added != null ) {
var currWide=p$1.getLineWidth$javax_swing_text_Element.apply(this, [this.longLine]);
for (var i=0; i < added.length; i++) {
var w=p$1.getLineWidth$javax_swing_text_Element.apply(this, [added[i]]);
if (w > currWide) {
currWide=w;
this.longLine=added[i];
}}
}if (removed != null ) {
for (var i=0; i < removed.length; i++) {
if (removed[i] === this.longLine ) {
p$1.calculateLongestLine.apply(this, []);
break;
}}
}this.preferenceChanged$javax_swing_text_View$Z$Z(null, true, true);
(host).秘repaint$();
} else {
var map=this.getElement$();
var line=map.getElementIndex$I(changes.getOffset$());
this.damageLineRange$I$I$java_awt_Shape$java_awt_Component(line, line, a, host);
if (changes.getType$() === $I$(5).INSERT ) {
var w=p$1.getLineWidth$javax_swing_text_Element.apply(this, [this.longLine]);
var e=map.getElement$I(line);
if (e === this.longLine ) {
this.preferenceChanged$javax_swing_text_View$Z$Z(null, true, false);
} else if (p$1.getLineWidth$javax_swing_text_Element.apply(this, [e]) > w) {
this.longLine=e;
this.preferenceChanged$javax_swing_text_View$Z$Z(null, true, false);
}} else if (changes.getType$() === $I$(5).REMOVE ) {
if (map.getElement$I(line) === this.longLine ) {
p$1.calculateLongestLine.apply(this, []);
this.preferenceChanged$javax_swing_text_View$Z$Z(null, true, false);
}}}});

Clazz.newMeth(C$, 'damageLineRange$I$I$java_awt_Shape$java_awt_Component',  function (line0, line1, a, host) {
if (a != null ) {
var area0=this.lineToRect$java_awt_Shape$I(a, line0);
var area1=this.lineToRect$java_awt_Shape$I(a, line1);
if ((area0 != null ) && (area1 != null ) ) {
var damage=area0.union$java_awt_Rectangle(area1);
host.repaint$I$I$I$I(damage.x, damage.y, damage.width, damage.height);
} else {
(host).秘repaint$();
}}});

Clazz.newMeth(C$, 'lineToRect$java_awt_Shape$I',  function (a, line) {
var r=null;
this.updateMetrics$();
if (this.metrics != null ) {
var alloc=a.getBounds$();
if (line == 0) {
alloc.x+=this.firstLineOffset;
alloc.width-=this.firstLineOffset;
}r=Clazz.new_([alloc.x, alloc.y + (line * this.metrics.getHeight$()), alloc.width, this.metrics.getHeight$()],$I$(6,1).c$$I$I$I$I);
}return r;
});

Clazz.newMeth(C$, 'calculateLongestLine',  function () {
var c=this.getContainer$();
this.font=c.getFont$();
this.metrics=c.getFontMetrics$java_awt_Font(this.font);
var lines=this.getElement$();
var n=lines.getElementCount$();
var maxWidth=-1;
for (var i=0; i < n; i++) {
var line=lines.getElement$I(i);
var w=p$1.getLineWidth$javax_swing_text_Element.apply(this, [line]);
if (w > maxWidth) {
maxWidth=w;
this.longLine=line;
}}
}, p$1);

Clazz.newMeth(C$, 'getLineWidth$javax_swing_text_Element',  function (line) {
if (line == null ) {
return 0;
}var p0=line.getStartOffset$();
var p1=line.getEndOffset$();
var w;
var s=$I$(2).getSharedSegment$();
try {
line.getDocument$().getText$I$I$javax_swing_text_Segment(p0, p1 - p0, s);
w=$I$(3).getTabbedTextWidth$javax_swing_text_Segment$java_awt_FontMetrics$I$javax_swing_text_TabExpander$I(s, this.metrics, this.tabBase, this, p0);
} catch (ble) {
if (Clazz.exceptionOf(ble,"javax.swing.text.BadLocationException")){
w=0;
} else {
throw ble;
}
}
$I$(2).releaseSharedSegment$javax_swing_text_Segment(s);
return w;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:22 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
