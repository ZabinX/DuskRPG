(function(){var P$=Clazz.newPackage("javax.swing.text"),p$1={},I$=[[0,'javax.swing.text.Utilities','javax.swing.text.SegmentCache','java.awt.Rectangle',['javax.swing.text.Position','.Bias'],'java.awt.Toolkit']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GlyphPainter1", null, ['javax.swing.text.GlyphView','.GlyphPainter']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['metrics','java.awt.FontMetrics']]]

Clazz.newMeth(C$, 'getSpan$javax_swing_text_GlyphView$I$I$javax_swing_text_TabExpander$F',  function (v, p0, p1, e, x) {
this.sync$javax_swing_text_GlyphView(v);
var text=v.getText$I$I(p0, p1);
var justificationData=p$1.getJustificationData$javax_swing_text_GlyphView.apply(this, [v]);
var width=$I$(1,"getTabbedTextWidth$javax_swing_text_View$javax_swing_text_Segment$java_awt_FontMetrics$I$javax_swing_text_TabExpander$I$IA",[v, text, this.metrics, (x|0), e, p0, justificationData]);
$I$(2).releaseSharedSegment$javax_swing_text_Segment(text);
return width;
});

Clazz.newMeth(C$, 'getHeight$javax_swing_text_GlyphView',  function (v) {
this.sync$javax_swing_text_GlyphView(v);
return this.metrics.getHeight$();
});

Clazz.newMeth(C$, 'getAscent$javax_swing_text_GlyphView',  function (v) {
this.sync$javax_swing_text_GlyphView(v);
return this.metrics.getAscent$();
});

Clazz.newMeth(C$, 'getDescent$javax_swing_text_GlyphView',  function (v) {
this.sync$javax_swing_text_GlyphView(v);
return this.metrics.getDescent$();
});

Clazz.newMeth(C$, 'paint$javax_swing_text_GlyphView$java_awt_Graphics$java_awt_Shape$I$I',  function (v, g, a, p0, p1) {
});

Clazz.newMeth(C$, 'modelToView$javax_swing_text_GlyphView$I$javax_swing_text_Position_Bias$java_awt_Shape',  function (v, pos, bias, a) {
this.sync$javax_swing_text_GlyphView(v);
var alloc=(Clazz.instanceOf(a, "java.awt.Rectangle")) ? a : a.getBounds$();
var p0=v.getStartOffset$();
var p1=v.getEndOffset$();
var expander=v.getTabExpander$();
var text;
if (pos == p1) {
return Clazz.new_([alloc.x + alloc.width, alloc.y, 0, this.metrics.getHeight$()],$I$(3,1).c$$I$I$I$I);
}if ((pos >= p0) && (pos <= p1) ) {
text=v.getText$I$I(p0, pos);
var justificationData=p$1.getJustificationData$javax_swing_text_GlyphView.apply(this, [v]);
var width=$I$(1).getTabbedTextWidth$javax_swing_text_View$javax_swing_text_Segment$java_awt_FontMetrics$I$javax_swing_text_TabExpander$I$IA(v, text, this.metrics, alloc.x, expander, p0, justificationData);
$I$(2).releaseSharedSegment$javax_swing_text_Segment(text);
return Clazz.new_([alloc.x + width, alloc.y, 0, this.metrics.getHeight$()],$I$(3,1).c$$I$I$I$I);
}throw Clazz.new_(Clazz.load('javax.swing.text.BadLocationException').c$$S$I,["modelToView - can\'t convert", p1]);
});

Clazz.newMeth(C$, 'viewToModel$javax_swing_text_GlyphView$F$F$java_awt_Shape$javax_swing_text_Position_BiasA',  function (v, x, y, a, biasReturn) {
this.sync$javax_swing_text_GlyphView(v);
var alloc=(Clazz.instanceOf(a, "java.awt.Rectangle")) ? a : a.getBounds$();
var p0=v.getStartOffset$();
var p1=v.getEndOffset$();
var expander=v.getTabExpander$();
var text=v.getText$I$I(p0, p1);
var justificationData=p$1.getJustificationData$javax_swing_text_GlyphView.apply(this, [v]);
var offs=$I$(1,"getTabbedTextOffset$javax_swing_text_View$javax_swing_text_Segment$java_awt_FontMetrics$I$I$javax_swing_text_TabExpander$I$IA",[v, text, this.metrics, alloc.x, (x|0), expander, p0, justificationData]);
$I$(2).releaseSharedSegment$javax_swing_text_Segment(text);
var retValue=p0 + offs;
if (retValue == p1) {
--retValue;
}biasReturn[0]=$I$(4).Forward;
return retValue;
});

Clazz.newMeth(C$, 'getBoundedPosition$javax_swing_text_GlyphView$I$F$F',  function (v, p0, x, len) {
this.sync$javax_swing_text_GlyphView(v);
var expander=v.getTabExpander$();
var s=v.getText$I$I(p0, v.getEndOffset$());
var justificationData=p$1.getJustificationData$javax_swing_text_GlyphView.apply(this, [v]);
var index=$I$(1,"getTabbedTextOffset$javax_swing_text_View$javax_swing_text_Segment$java_awt_FontMetrics$I$I$javax_swing_text_TabExpander$I$Z$IA",[v, s, this.metrics, (x|0), ((x + len)|0), expander, p0, false, justificationData]);
$I$(2).releaseSharedSegment$javax_swing_text_Segment(s);
var p1=p0 + index;
return p1;
});

Clazz.newMeth(C$, 'sync$javax_swing_text_GlyphView',  function (v) {
var f=v.getFont$();
if ((this.metrics == null ) || (!f.equals$O(this.metrics.getFont$())) ) {
var c=v.getContainer$();
this.metrics=(c != null ) ? c.getFontMetrics$java_awt_Font(f) : $I$(5).getDefaultToolkit$().getFontMetrics$java_awt_Font(f);
}});

Clazz.newMeth(C$, 'getJustificationData$javax_swing_text_GlyphView',  function (v) {
var parent=v.getParent$();
var ret=null;
if (Clazz.instanceOf(parent, "javax.swing.text.ParagraphView.Row")) {
var row=(parent);
ret=row.justificationData;
}return ret;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:19 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
