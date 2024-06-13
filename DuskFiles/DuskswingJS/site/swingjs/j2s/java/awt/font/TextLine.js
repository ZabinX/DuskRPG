(function(){var P$=Clazz.newPackage("java.awt.font"),p$1={},I$=[[0,['java.awt.font.TextLine','.Function'],['java.awt.font.TextLine','.TextLineMetrics'],['java.awt.geom.Point2D','.Double'],['sun.font.LayoutPathImpl','.SegmentPathBuilder'],['sun.font.LayoutPathImpl','.EmptyPath'],'java.awt.Rectangle','java.awt.image.BufferedImage','java.awt.Color','sun.font.BidiUtils',['java.awt.geom.Point2D','.Float'],'java.awt.geom.AffineTransform',['java.awt.geom.Rectangle2D','.Float'],'java.awt.geom.GeneralPath','StringBuilder','sun.font.AttributeValues','java.text.Bidi','sun.font.Decoration','sun.font.TextLabelFactory','sun.font.TextLineComponent','sun.font.CoreMetrics','sun.font.GraphicComponent','java.awt.font.StyledParagraph','java.awt.font.TextAttribute','java.awt.Font','sun.text.CodePointIterator','sun.font.FontResolver','java.awt.font.GlyphJustificationInfo','java.awt.font.TextJustifier']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TextLine", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['TextLineMetrics',24],['Function',1034]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fMetrics=null;
},1);

C$.$fields$=[['Z',['fIsDirectionLTR','isSimple'],'I',['fCharsStart','fCharsLimit'],'O',['fComponents','sun.font.TextLineComponent[]','fBaselineOffsets','float[]','fComponentVisualOrder','int[]','locs','float[]','fChars','char[]','fCharVisualOrder','int[]','+fCharLogicalOrder','fCharLevels','byte[]','lp','sun.font.LayoutPathImpl','pixelBounds','java.awt.Rectangle','frc','java.awt.font.FontRenderContext','fMetrics','java.awt.font.TextLine.TextLineMetrics']]
,['O',['fgPosAdvF','java.awt.font.TextLine.Function','+fgAdvanceF','+fgXPositionF','+fgYPositionF']]]

Clazz.newMeth(C$, 'c$$java_awt_font_FontRenderContext$sun_font_TextLineComponentA$FA$CA$I$I$IA$BA$Z',  function (frc, components, baselineOffsets, chars, charsStart, charsLimit, charLogicalOrder, charLevels, isDirectionLTR) {
;C$.$init$.apply(this);
var componentVisualOrder=C$.computeComponentOrder$sun_font_TextLineComponentA$IA(components, charLogicalOrder);
this.frc=frc;
this.fComponents=components;
this.fBaselineOffsets=baselineOffsets;
this.fComponentVisualOrder=componentVisualOrder;
this.fChars=chars;
this.fCharsStart=charsStart;
this.fCharsLimit=charsLimit;
this.fCharLogicalOrder=charLogicalOrder;
this.fCharLevels=charLevels;
this.fIsDirectionLTR=isDirectionLTR;
p$1.checkCtorArgs.apply(this, []);
p$1.init.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'checkCtorArgs',  function () {
var checkCharCount=0;
for (var i=0; i < this.fComponents.length; i++) {
checkCharCount+=this.fComponents[i].getNumCharacters$();
}
if (checkCharCount != this.characterCount$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid TextLine!  char count is different from sum of char counts of components."]);
}}, p$1);

Clazz.newMeth(C$, 'init',  function () {
var ascent=0;
var descent=0;
var leading=0;
var advance=0;
var maxGraphicHeight=0;
var maxGraphicHeightWithLeading=0;
var tlc;
var fitTopAndBottomGraphics=false;
this.isSimple=true;
for (var i=0; i < this.fComponents.length; i++) {
tlc=this.fComponents[i];
this.isSimple=!!(this.isSimple&(tlc.isSimple$()));
var cm=tlc.getCoreMetrics$();
var baseline=($b$[0] = cm.baselineIndex, $b$[0]);
if (baseline >= 0) {
var baselineOffset=this.fBaselineOffsets[baseline];
ascent=Math.max(ascent, -baselineOffset + cm.ascent);
var gd=baselineOffset + cm.descent;
descent=Math.max(descent, gd);
leading=Math.max(leading, gd + cm.leading);
} else {
fitTopAndBottomGraphics=true;
var graphicHeight=cm.ascent + cm.descent;
var graphicHeightWithLeading=graphicHeight + cm.leading;
maxGraphicHeight=Math.max(maxGraphicHeight, graphicHeight);
maxGraphicHeightWithLeading=Math.max(maxGraphicHeightWithLeading, graphicHeightWithLeading);
}}
if (fitTopAndBottomGraphics) {
if (maxGraphicHeight > ascent + descent ) {
descent=maxGraphicHeight - ascent;
}if (maxGraphicHeightWithLeading > ascent + leading ) {
leading=maxGraphicHeightWithLeading - ascent;
}}leading-=descent;
if (fitTopAndBottomGraphics) {
this.fBaselineOffsets=Clazz.array(Float.TYPE, -1, [this.fBaselineOffsets[0], this.fBaselineOffsets[1], this.fBaselineOffsets[2], descent, -ascent]);
}var x=0;
var y=0;
var pcm=null;
var needPath=false;
this.locs=Clazz.array(Float.TYPE, [this.fComponents.length * 2 + 2]);
for (var i=0, n=0; i < this.fComponents.length; ++i, n+=2) {
tlc=this.fComponents[p$1.getComponentLogicalIndex$I.apply(this, [i])];
var cm=tlc.getCoreMetrics$();
if ((pcm != null ) && (pcm.italicAngle != 0  || cm.italicAngle != 0  ) && (pcm.italicAngle != cm.italicAngle  || pcm.baselineIndex != cm.baselineIndex  || pcm.ssOffset != cm.ssOffset  )  ) {
var pb=pcm.effectiveBaselineOffset$FA(this.fBaselineOffsets);
var pa=pb - pcm.ascent;
var pd=pb + pcm.descent;
var cb=cm.effectiveBaselineOffset$FA(this.fBaselineOffsets);
var ca=cb - cm.ascent;
var cd=cb + cm.descent;
var a=Math.max(pa, ca);
var d=Math.min(pd, cd);
var pax=pcm.italicAngle * (pb - a);
var pdx=pcm.italicAngle * (pb - d);
var cax=cm.italicAngle * (cb - a);
var cdx=cm.italicAngle * (cb - d);
var dax=pax - cax;
var ddx=pdx - cdx;
var dx=Math.max(dax, ddx);
x+=dx;
y=cb;
} else {
y=cm.effectiveBaselineOffset$FA(this.fBaselineOffsets);
}this.locs[n]=x;
this.locs[n + 1]=y;
x+=tlc.getAdvance$();
pcm=cm;
needPath=!!(needPath|(tlc.getBaselineTransform$() != null ));
}
if (pcm.italicAngle != 0 ) {
var pb=pcm.effectiveBaselineOffset$FA(this.fBaselineOffsets);
var pa=pb - pcm.ascent;
var pd=pb + pcm.descent;
pb+=pcm.ssOffset;
var d;
if (pcm.italicAngle > 0 ) {
d=pb + pcm.ascent;
} else {
d=pb - pcm.descent;
}d*=pcm.italicAngle;
x+=d;
}this.locs[this.locs.length - 2]=x;
advance=x;
this.fMetrics=Clazz.new_($I$(2,1).c$$F$F$F$F,[ascent, descent, leading, advance]);
if (needPath) {
this.isSimple=false;
var pt=Clazz.new_($I$(3,1));
var tx=0;
var ty=0;
var builder=Clazz.new_($I$(4,1));
builder.moveTo$D$D(this.locs[0], 0);
for (var i=0, n=0; i < this.fComponents.length; ++i, n+=2) {
tlc=this.fComponents[p$1.getComponentLogicalIndex$I.apply(this, [i])];
var at=tlc.getBaselineTransform$();
if (at != null  && ((at.getType$() & 1) != 0) ) {
var dx=at.getTranslateX$();
var dy=at.getTranslateY$();
builder.moveTo$D$D(tx+=dx, ty+=dy);
}pt.x=this.locs[n + 2] - this.locs[n];
pt.y=0;
if (at != null ) {
at.deltaTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(pt, pt);
}builder.lineTo$D$D(tx+=pt.x, ty+=pt.y);
}
this.lp=builder.complete$();
if (this.lp == null ) {
tlc=this.fComponents[p$1.getComponentLogicalIndex$I.apply(this, [0])];
var at=tlc.getBaselineTransform$();
if (at != null ) {
this.lp=Clazz.new_($I$(5,1).c$$java_awt_geom_AffineTransform,[at]);
}}}}, p$1);

Clazz.newMeth(C$, 'getPixelBounds$java_awt_font_FontRenderContext$F$F',  function (frc, x, y) {
var result=null;
if (frc != null  && frc.equals$java_awt_font_FontRenderContext(this.frc) ) {
frc=null;
}var ix=(Math.floor(x)|0);
var iy=(Math.floor(y)|0);
var rx=x - ix;
var ry=y - iy;
var canCache=frc == null  && rx == 0   && ry == 0  ;
if (canCache && this.pixelBounds != null  ) {
result=Clazz.new_($I$(6,1).c$$java_awt_Rectangle,[this.pixelBounds]);
result.x+=ix;
result.y+=iy;
return result;
}if (this.isSimple) {
for (var i=0, n=0; i < this.fComponents.length; i++, n+=2) {
var tlc=this.fComponents[p$1.getComponentLogicalIndex$I.apply(this, [i])];
var pb=tlc.getPixelBounds$java_awt_font_FontRenderContext$F$F(frc, this.locs[n] + rx, this.locs[n + 1] + ry);
if (!pb.isEmpty$()) {
if (result == null ) {
result=pb;
} else {
result.add$java_awt_Rectangle(pb);
}}}
if (result == null ) {
result=Clazz.new_($I$(6,1).c$$I$I$I$I,[0, 0, 0, 0]);
}} else {
var MARGIN=3;
var r2d=this.getVisualBounds$();
if (this.lp != null ) {
r2d=this.lp.mapShape$java_awt_Shape(r2d).getBounds$();
}var bounds=r2d.getBounds$();
var im=Clazz.new_($I$(7,1).c$$I$I$I,[bounds.width + 6, bounds.height + 6, 2]);
var g2d=im.createGraphics$();
g2d.setColor$java_awt_Color($I$(8).WHITE);
g2d.fillRect$I$I$I$I(0, 0, im.getWidth$(), im.getHeight$());
g2d.setColor$java_awt_Color($I$(8).BLACK);
this.draw$java_awt_Graphics2D$F$F(g2d, rx + 3 - bounds.x, ry + 3 - bounds.y);
result=C$.computePixelBounds$java_awt_image_BufferedImage(im);
result.x-=3 - bounds.x;
result.y-=3 - bounds.y;
}if (canCache) {
this.pixelBounds=Clazz.new_($I$(6,1).c$$java_awt_Rectangle,[result]);
}result.x+=ix;
result.y+=iy;
return result;
});

Clazz.newMeth(C$, 'computePixelBounds$java_awt_image_BufferedImage',  function (im) {
var w=im.getWidth$();
var h=im.getHeight$();
var l=-1;
var t=-1;
var r=w;
var b=h;
{
var buf=Clazz.array(Integer.TYPE, [w]);
 loop : while (++t < h){
im.getRGB$I$I$I$I$IA$I$I(0, t, buf.length, 1, buf, 0, w);
for (var i=0; i < buf.length; i++) {
if (buf[i] != -1) {
break loop;
}}
}
}{
var buf=Clazz.array(Integer.TYPE, [w]);
 loop : while (--b > t){
im.getRGB$I$I$I$I$IA$I$I(0, b, buf.length, 1, buf, 0, w);
for (var i=0; i < buf.length; ++i) {
if (buf[i] != -1) {
break loop;
}}
}
++b;
}{
 loop : while (++l < r){
for (var i=t; i < b; ++i) {
var v=im.getRGB$I$I(l, i);
if (v != -1) {
break loop;
}}
}
}{
 loop : while (--r > l){
for (var i=t; i < b; ++i) {
var v=im.getRGB$I$I(r, i);
if (v != -1) {
break loop;
}}
}
++r;
}return Clazz.new_($I$(6,1).c$$I$I$I$I,[l, t, r - l, b - t]);
}, 1);

Clazz.newMeth(C$, 'characterCount$',  function () {
return this.fCharsLimit - this.fCharsStart;
});

Clazz.newMeth(C$, 'isDirectionLTR$',  function () {
return this.fIsDirectionLTR;
});

Clazz.newMeth(C$, 'getMetrics$',  function () {
return this.fMetrics;
});

Clazz.newMeth(C$, 'visualToLogical$I',  function (visualIndex) {
if (this.fCharLogicalOrder == null ) {
return visualIndex;
}if (this.fCharVisualOrder == null ) {
this.fCharVisualOrder=$I$(9).createInverseMap$IA(this.fCharLogicalOrder);
}return this.fCharVisualOrder[visualIndex];
});

Clazz.newMeth(C$, 'logicalToVisual$I',  function (logicalIndex) {
return (this.fCharLogicalOrder == null ) ? logicalIndex : this.fCharLogicalOrder[logicalIndex];
});

Clazz.newMeth(C$, 'getCharLevel$I',  function (logicalIndex) {
return this.fCharLevels == null  ? ($b$[0] = 0, $b$[0]) : this.fCharLevels[logicalIndex];
});

Clazz.newMeth(C$, 'isCharLTR$I',  function (logicalIndex) {
return (this.getCharLevel$I(logicalIndex) & 1) == 0;
});

Clazz.newMeth(C$, 'getCharType$I',  function (logicalIndex) {
return Character.getType$C(this.fChars[logicalIndex + this.fCharsStart]);
});

Clazz.newMeth(C$, 'isCharSpace$I',  function (logicalIndex) {
return Character.isSpaceChar$C(this.fChars[logicalIndex + this.fCharsStart]);
});

Clazz.newMeth(C$, 'isCharWhitespace$I',  function (logicalIndex) {
return Character.isWhitespace$C(this.fChars[logicalIndex + this.fCharsStart]);
});

Clazz.newMeth(C$, 'getCharAngle$I',  function (logicalIndex) {
return this.getCoreMetricsAt$I(logicalIndex).italicAngle;
});

Clazz.newMeth(C$, 'getCoreMetricsAt$I',  function (logicalIndex) {
if (logicalIndex < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Negative logicalIndex."]);
}if (logicalIndex > this.fCharsLimit - this.fCharsStart) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["logicalIndex too large."]);
}var currentTlc=0;
var tlcStart=0;
var tlcLimit=0;
do {
tlcLimit+=this.fComponents[currentTlc].getNumCharacters$();
if (tlcLimit > logicalIndex) {
break;
}++currentTlc;
tlcStart=tlcLimit;
} while (currentTlc < this.fComponents.length);
return this.fComponents[currentTlc].getCoreMetrics$();
});

Clazz.newMeth(C$, 'getCharAscent$I',  function (logicalIndex) {
return this.getCoreMetricsAt$I(logicalIndex).ascent;
});

Clazz.newMeth(C$, 'getCharDescent$I',  function (logicalIndex) {
return this.getCoreMetricsAt$I(logicalIndex).descent;
});

Clazz.newMeth(C$, 'getCharShift$I',  function (logicalIndex) {
return this.getCoreMetricsAt$I(logicalIndex).ssOffset;
});

Clazz.newMeth(C$, 'applyFunctionAtIndex$I$java_awt_font_TextLine_Function',  function (logicalIndex, f) {
if (logicalIndex < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Negative logicalIndex."]);
}var tlcStart=0;
for (var i=0; i < this.fComponents.length; i++) {
var tlcLimit=tlcStart + this.fComponents[i].getNumCharacters$();
if (tlcLimit > logicalIndex) {
return f.computeFunction$java_awt_font_TextLine$I$I(this, i, logicalIndex - tlcStart);
} else {
tlcStart=tlcLimit;
}}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["logicalIndex too large."]);
}, p$1);

Clazz.newMeth(C$, 'getCharAdvance$I',  function (logicalIndex) {
return p$1.applyFunctionAtIndex$I$java_awt_font_TextLine_Function.apply(this, [logicalIndex, C$.fgAdvanceF]);
});

Clazz.newMeth(C$, 'getCharXPosition$I',  function (logicalIndex) {
return p$1.applyFunctionAtIndex$I$java_awt_font_TextLine_Function.apply(this, [logicalIndex, C$.fgXPositionF]);
});

Clazz.newMeth(C$, 'getCharYPosition$I',  function (logicalIndex) {
return p$1.applyFunctionAtIndex$I$java_awt_font_TextLine_Function.apply(this, [logicalIndex, C$.fgYPositionF]);
});

Clazz.newMeth(C$, 'getCharLinePosition$I',  function (logicalIndex) {
return this.getCharXPosition$I(logicalIndex);
});

Clazz.newMeth(C$, 'getCharLinePosition$I$Z',  function (logicalIndex, leading) {
var f=this.isCharLTR$I(logicalIndex) == leading  ? C$.fgXPositionF : C$.fgPosAdvF;
return p$1.applyFunctionAtIndex$I$java_awt_font_TextLine_Function.apply(this, [logicalIndex, f]);
});

Clazz.newMeth(C$, 'caretAtOffsetIsValid$I',  function (offset) {
if (offset < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Negative offset."]);
}var tlcStart=0;
for (var i=0; i < this.fComponents.length; i++) {
var tlcLimit=tlcStart + this.fComponents[i].getNumCharacters$();
if (tlcLimit > offset) {
return this.fComponents[i].caretAtOffsetIsValid$I(offset - tlcStart);
} else {
tlcStart=tlcLimit;
}}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["logicalIndex too large."]);
});

Clazz.newMeth(C$, 'getComponentLogicalIndex$I',  function (vi) {
if (this.fComponentVisualOrder == null ) {
return vi;
}return this.fComponentVisualOrder[vi];
}, p$1);

Clazz.newMeth(C$, 'getComponentVisualIndex$I',  function (li) {
if (this.fComponentVisualOrder == null ) {
return li;
}for (var i=0; i < this.fComponentVisualOrder.length; ++i) {
if (this.fComponentVisualOrder[i] == li) {
return i;
}}
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["bad component index: " + li]);
}, p$1);

Clazz.newMeth(C$, 'getCharBounds$I',  function (logicalIndex) {
if (logicalIndex < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Negative logicalIndex."]);
}var tlcStart=0;
for (var i=0; i < this.fComponents.length; i++) {
var tlcLimit=tlcStart + this.fComponents[i].getNumCharacters$();
if (tlcLimit > logicalIndex) {
var tlc=this.fComponents[i];
var indexInTlc=logicalIndex - tlcStart;
var chBounds=tlc.getCharVisualBounds$I(indexInTlc);
var vi=p$1.getComponentVisualIndex$I.apply(this, [i]);
chBounds.setRect$D$D$D$D(chBounds.getX$() + this.locs[vi * 2], chBounds.getY$() + this.locs[vi * 2 + 1], chBounds.getWidth$(), chBounds.getHeight$());
return chBounds;
} else {
tlcStart=tlcLimit;
}}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["logicalIndex too large."]);
});

Clazz.newMeth(C$, 'getComponentShift$I',  function (index) {
var cm=this.fComponents[index].getCoreMetrics$();
return cm.effectiveBaselineOffset$FA(this.fBaselineOffsets);
}, p$1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$F$F',  function (g2, x, y) {
if (this.lp == null ) {
for (var i=0, n=0; i < this.fComponents.length; i++, n+=2) {
var tlc=this.fComponents[p$1.getComponentLogicalIndex$I.apply(this, [i])];
tlc.draw$java_awt_Graphics2D$F$F(g2, this.locs[n] + x, this.locs[n + 1] + y);
}
} else {
var pt=Clazz.new_($I$(10,1));
for (var i=0, n=0; i < this.fComponents.length; i++, n+=2) {
var tlc=this.fComponents[p$1.getComponentLogicalIndex$I.apply(this, [i])];
this.lp.pathToPoint$D$D$Z$java_awt_geom_Point2D(this.locs[n], this.locs[n + 1], false, pt);
pt.x+=x;
pt.y+=y;
var at=tlc.getBaselineTransform$();
if (at != null ) {
g2=g2.create$();
g2.translate$D$D(pt.x - at.getTranslateX$(), pt.y - at.getTranslateY$());
g2.transform$java_awt_geom_AffineTransform(at);
tlc.draw$java_awt_Graphics2D$F$F(g2, 0, 0);
g2.dispose$();
} else {
tlc.draw$java_awt_Graphics2D$F$F(g2, pt.x, pt.y);
}}
}});

Clazz.newMeth(C$, 'getVisualBounds$',  function () {
var result=null;
for (var i=0, n=0; i < this.fComponents.length; i++, n+=2) {
var tlc=this.fComponents[p$1.getComponentLogicalIndex$I.apply(this, [i])];
var r=tlc.getVisualBounds$();
var pt=Clazz.new_($I$(10,1).c$$F$F,[this.locs[n], this.locs[n + 1]]);
if (this.lp == null ) {
r.setRect$D$D$D$D(r.getMinX$() + pt.x, r.getMinY$() + pt.y, r.getWidth$(), r.getHeight$());
} else {
this.lp.pathToPoint$java_awt_geom_Point2D$Z$java_awt_geom_Point2D(pt, false, pt);
var at=tlc.getBaselineTransform$();
if (at != null ) {
var tx=$I$(11,"getTranslateInstance$D$D",[pt.x - at.getTranslateX$(), pt.y - at.getTranslateY$()]);
tx.concatenate$java_awt_geom_AffineTransform(at);
r=tx.createTransformedShape$java_awt_Shape(r).getBounds2D$();
} else {
r.setRect$D$D$D$D(r.getMinX$() + pt.x, r.getMinY$() + pt.y, r.getWidth$(), r.getHeight$());
}}if (result == null ) {
result=r;
} else {
result.add$java_awt_geom_Rectangle2D(r);
}}
if (result == null ) {
result=Clazz.new_($I$(12,1).c$$F$F$F$F,[3.4028235E38, 3.4028235E38, 1.4E-45, 1.4E-45]);
}return result;
});

Clazz.newMeth(C$, 'getItalicBounds$',  function () {
var left=3.4028235E38;
var right=-3.4028235E38;
var top=3.4028235E38;
var bottom=-3.4028235E38;
for (var i=0, n=0; i < this.fComponents.length; i++, n+=2) {
var tlc=this.fComponents[p$1.getComponentLogicalIndex$I.apply(this, [i])];
var tlcBounds=tlc.getItalicBounds$();
var x=this.locs[n];
var y=this.locs[n + 1];
left=Math.min(left, x + tlcBounds.getX$());
right=Math.max(right, x + tlcBounds.getMaxX$());
top=Math.min(top, y + tlcBounds.getY$());
bottom=Math.max(bottom, y + tlcBounds.getMaxY$());
}
return Clazz.new_($I$(12,1).c$$F$F$F$F,[left, top, right - left, bottom - top]);
});

Clazz.newMeth(C$, 'getOutline$java_awt_geom_AffineTransform',  function (tx) {
var dstShape=Clazz.new_($I$(13,1).c$$I,[1]);
for (var i=0, n=0; i < this.fComponents.length; i++, n+=2) {
var tlc=this.fComponents[p$1.getComponentLogicalIndex$I.apply(this, [i])];
dstShape.append$java_awt_Shape$Z(tlc.getOutline$F$F(this.locs[n], this.locs[n + 1]), false);
}
if (tx != null ) {
dstShape.transform$java_awt_geom_AffineTransform(tx);
}return dstShape;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return (this.fComponents.length << 16) ^ (this.fComponents[0].hashCode$() << 3) ^ (this.fCharsLimit - this.fCharsStart) ;
});

Clazz.newMeth(C$, 'toString',  function () {
var buf=Clazz.new_($I$(14,1));
for (var i=0; i < this.fComponents.length; i++) {
buf.append$O(this.fComponents[i]);
}
return buf.toString();
});

Clazz.newMeth(C$, 'fastCreateTextLine$java_awt_font_FontRenderContext$CA$java_awt_Font$sun_font_CoreMetrics$java_util_Map',  function (frc, chars, font, lm, attributes) {
var isDirectionLTR=true;
var levels=null;
var charsLtoV=null;
var bidi=null;
var characterCount=chars.length;
var requiresBidi=false;
var embs=null;
var values=null;
if (attributes != null ) {
values=$I$(15).fromMap$java_util_Map(attributes);
if (values.getRunDirection$() >= 0) {
isDirectionLTR=values.getRunDirection$() == 0;
requiresBidi=!isDirectionLTR;
}if (values.getBidiEmbedding$() != 0) {
requiresBidi=true;
var level=($b$[0] = values.getBidiEmbedding$(), $b$[0]);
embs=Clazz.array(Byte.TYPE, [characterCount]);
for (var i=0; i < embs.length; ++i) {
embs[i]=level;
}
}}if (!requiresBidi) {
requiresBidi=$I$(16).requiresBidi$CA$I$I(chars, 0, chars.length);
}if (requiresBidi) {
var bidiflags=values == null  ? -2 : values.getRunDirection$();
bidi=Clazz.new_($I$(16,1).c$$CA$I$BA$I$I$I,[chars, 0, embs, 0, chars.length, bidiflags]);
if (!bidi.isLeftToRight$()) {
levels=$I$(9).getLevels$java_text_Bidi(bidi);
var charsVtoL=$I$(9).createVisualToLogicalMap$BA(levels);
charsLtoV=$I$(9).createInverseMap$IA(charsVtoL);
isDirectionLTR=bidi.baseIsLeftToRight$();
}}var decorator=$I$(17).getDecoration$sun_font_AttributeValues(values);
var layoutFlags=0;
var factory=Clazz.new_($I$(18,1).c$$java_awt_font_FontRenderContext$CA$java_text_Bidi$I,[frc, chars, bidi, layoutFlags]);
var components=Clazz.array($I$(19), [1]);
components=C$.createComponentsOnRun$I$I$CA$IA$BA$sun_font_TextLabelFactory$java_awt_Font$sun_font_CoreMetrics$java_awt_font_FontRenderContext$sun_font_Decoration$sun_font_TextLineComponentA$I(0, chars.length, chars, charsLtoV, levels, factory, font, lm, frc, decorator, components, 0);
var numComponents=components.length;
while (components[numComponents - 1] == null ){
numComponents-=1;
}
if (numComponents != components.length) {
var temp=Clazz.array($I$(19), [numComponents]);
System.arraycopy$O$I$O$I$I(components, 0, temp, 0, numComponents);
components=temp;
}return Clazz.new_(C$.c$$java_awt_font_FontRenderContext$sun_font_TextLineComponentA$FA$CA$I$I$IA$BA$Z,[frc, components, lm.baselineOffsets, chars, 0, chars.length, charsLtoV, levels, isDirectionLTR]);
}, 1);

Clazz.newMeth(C$, 'expandArray$sun_font_TextLineComponentA',  function (orig) {
var newComponents=Clazz.array($I$(19), [orig.length + 8]);
System.arraycopy$O$I$O$I$I(orig, 0, newComponents, 0, orig.length);
return newComponents;
}, 1);

Clazz.newMeth(C$, 'createComponentsOnRun$I$I$CA$IA$BA$sun_font_TextLabelFactory$java_awt_Font$sun_font_CoreMetrics$java_awt_font_FontRenderContext$sun_font_Decoration$sun_font_TextLineComponentA$I',  function (runStart, runLimit, chars, charsLtoV, levels, factory, font, cm, frc, decorator, components, numComponents) {
var pos=runStart;
do {
var chunkLimit=C$.firstVisualChunk$IA$BA$I$I(charsLtoV, levels, pos, runLimit);
do {
var startPos=pos;
var lmCount;
if (cm == null ) {
var lineMetrics=font.getLineMetrics$CA$I$I$java_awt_font_FontRenderContext(chars, startPos, chunkLimit, frc);
cm=$I$(20).get$java_awt_font_LineMetrics(lineMetrics);
lmCount=lineMetrics.getNumChars$();
} else {
lmCount=(chunkLimit - startPos);
}var nextComponent=factory.createExtended$java_awt_Font$sun_font_CoreMetrics$sun_font_Decoration$I$I(font, cm, decorator, startPos, startPos + lmCount);
++numComponents;
if (numComponents >= components.length) {
components=C$.expandArray$sun_font_TextLineComponentA(components);
}components[numComponents - 1]=nextComponent;
pos+=lmCount;
} while (pos < chunkLimit);
} while (pos < runLimit);
return components;
}, 1);

Clazz.newMeth(C$, 'getComponents$java_awt_font_StyledParagraph$CA$I$I$IA$BA$sun_font_TextLabelFactory',  function (styledParagraph, chars, textStart, textLimit, charsLtoV, levels, factory) {
var frc=factory.getFontRenderContext$();
var numComponents=0;
var tempComponents=Clazz.array($I$(19), [1]);
var pos=textStart;
do {
var runLimit=Math.min(styledParagraph.getRunLimit$I(pos), textLimit);
var decorator=styledParagraph.getDecorationAt$I(pos);
var graphicOrFont=styledParagraph.getFontOrGraphicAt$I(pos);
if (Clazz.instanceOf(graphicOrFont, "java.awt.font.GraphicAttribute")) {
var baseRot=null;
var graphicAttribute=graphicOrFont;
do {
var chunkLimit=C$.firstVisualChunk$IA$BA$I$I(charsLtoV, levels, pos, runLimit);
var nextGraphic=Clazz.new_($I$(21,1).c$$java_awt_font_GraphicAttribute$sun_font_Decoration$IA$BA$I$I$java_awt_geom_AffineTransform,[graphicAttribute, decorator, charsLtoV, levels, pos, chunkLimit, baseRot]);
pos=chunkLimit;
++numComponents;
if (numComponents >= tempComponents.length) {
tempComponents=C$.expandArray$sun_font_TextLineComponentA(tempComponents);
}tempComponents[numComponents - 1]=nextGraphic;
} while (pos < runLimit);
} else {
var font=graphicOrFont;
tempComponents=C$.createComponentsOnRun$I$I$CA$IA$BA$sun_font_TextLabelFactory$java_awt_Font$sun_font_CoreMetrics$java_awt_font_FontRenderContext$sun_font_Decoration$sun_font_TextLineComponentA$I(pos, runLimit, chars, charsLtoV, levels, factory, font, null, frc, decorator, tempComponents, numComponents);
pos=runLimit;
numComponents=tempComponents.length;
while (tempComponents[numComponents - 1] == null ){
numComponents-=1;
}
}} while (pos < textLimit);
var components;
if (tempComponents.length == numComponents) {
components=tempComponents;
} else {
components=Clazz.array($I$(19), [numComponents]);
System.arraycopy$O$I$O$I$I(tempComponents, 0, components, 0, numComponents);
}return components;
}, 1);

Clazz.newMeth(C$, 'createLineFromText$CA$java_awt_font_StyledParagraph$sun_font_TextLabelFactory$Z$FA',  function (chars, styledParagraph, factory, isDirectionLTR, baselineOffsets) {
factory.setLineContext$I$I(0, chars.length);
var lineBidi=factory.getLineBidi$();
var charsLtoV=null;
var levels=null;
if (lineBidi != null ) {
levels=$I$(9).getLevels$java_text_Bidi(lineBidi);
var charsVtoL=$I$(9).createVisualToLogicalMap$BA(levels);
charsLtoV=$I$(9).createInverseMap$IA(charsVtoL);
}var components=C$.getComponents$java_awt_font_StyledParagraph$CA$I$I$IA$BA$sun_font_TextLabelFactory(styledParagraph, chars, 0, chars.length, charsLtoV, levels, factory);
return Clazz.new_(C$.c$$java_awt_font_FontRenderContext$sun_font_TextLineComponentA$FA$CA$I$I$IA$BA$Z,[factory.getFontRenderContext$(), components, baselineOffsets, chars, 0, chars.length, charsLtoV, levels, isDirectionLTR]);
}, 1);

Clazz.newMeth(C$, 'computeComponentOrder$sun_font_TextLineComponentA$IA',  function (components, charsLtoV) {
var componentOrder=null;
if (charsLtoV != null  && components.length > 1 ) {
componentOrder=Clazz.array(Integer.TYPE, [components.length]);
var gStart=0;
for (var i=0; i < components.length; i++) {
componentOrder[i]=charsLtoV[gStart];
gStart+=components[i].getNumCharacters$();
}
componentOrder=$I$(9).createContiguousOrder$IA(componentOrder);
componentOrder=$I$(9).createInverseMap$IA(componentOrder);
}return componentOrder;
}, 1);

Clazz.newMeth(C$, 'standardCreateTextLine$java_awt_font_FontRenderContext$java_text_AttributedCharacterIterator$CA$FA',  function (frc, text, chars, baselineOffsets) {
var styledParagraph=Clazz.new_($I$(22,1).c$$java_text_AttributedCharacterIterator$CA,[text, chars]);
var bidi=Clazz.new_($I$(16,1).c$$java_text_AttributedCharacterIterator,[text]);
if (bidi.isLeftToRight$()) {
bidi=null;
}var layoutFlags=0;
var factory=Clazz.new_($I$(18,1).c$$java_awt_font_FontRenderContext$CA$java_text_Bidi$I,[frc, chars, bidi, layoutFlags]);
var isDirectionLTR=true;
if (bidi != null ) {
isDirectionLTR=bidi.baseIsLeftToRight$();
}return C$.createLineFromText$CA$java_awt_font_StyledParagraph$sun_font_TextLabelFactory$Z$FA(chars, styledParagraph, factory, isDirectionLTR, baselineOffsets);
}, 1);

Clazz.newMeth(C$, 'advanceToFirstFont$java_text_AttributedCharacterIterator',  function (aci) {
for (var ch=aci.first$(); ch != "\uffff"; ch=aci.setIndex$I(aci.getRunLimit$())) {
if (aci.getAttribute$java_text_AttributedCharacterIterator_Attribute($I$(23).CHAR_REPLACEMENT) == null ) {
return true;
}}
return false;
}, 1);

Clazz.newMeth(C$, 'getNormalizedOffsets$FA$B',  function (baselineOffsets, baseline) {
if (baselineOffsets[baseline] != 0 ) {
var base=baselineOffsets[baseline];
var temp=Clazz.array(Float.TYPE, [baselineOffsets.length]);
for (var i=0; i < temp.length; i++) temp[i]=baselineOffsets[i] - base;

baselineOffsets=temp;
}return baselineOffsets;
}, 1);

Clazz.newMeth(C$, 'getFontAtCurrentPos$java_text_AttributedCharacterIterator',  function (aci) {
var value=aci.getAttribute$java_text_AttributedCharacterIterator_Attribute($I$(23).FONT);
if (value != null ) {
return value;
}if (aci.getAttribute$java_text_AttributedCharacterIterator_Attribute($I$(23).FAMILY) != null ) {
return $I$(24,"getFont$java_util_Map",[aci.getAttributes$()]);
}var ch=$I$(25).create$java_text_CharacterIterator(aci).next$();
if (ch != -1) {
var resolver=$I$(26).getInstance$();
return resolver.getFont$I$java_util_Map(resolver.getFontIndex$I(ch), aci.getAttributes$());
}return null;
}, 1);

Clazz.newMeth(C$, 'firstVisualChunk$IA$BA$I$I',  function (order, direction, start, limit) {
if (order != null  && direction != null  ) {
var dir=direction[start];
while (++start < limit && direction[start] == dir ){
}
return start;
}return limit;
}, 1);

Clazz.newMeth(C$, 'getJustifiedLine$F$F$I$I',  function (justificationWidth, justifyRatio, justStart, justLimit) {
var newComponents=Clazz.array($I$(19), [this.fComponents.length]);
System.arraycopy$O$I$O$I$I(this.fComponents, 0, newComponents, 0, this.fComponents.length);
var leftHang=0;
var adv=0;
var justifyDelta=0;
var rejustify=false;
do {
adv=C$.getAdvanceBetween$sun_font_TextLineComponentA$I$I(newComponents, 0, this.characterCount$());
var justifyAdvance=C$.getAdvanceBetween$sun_font_TextLineComponentA$I$I(newComponents, justStart, justLimit);
justifyDelta=(justificationWidth - justifyAdvance) * justifyRatio;
var infoPositions=Clazz.array(Integer.TYPE, [newComponents.length]);
var infoCount=0;
for (var visIndex=0; visIndex < newComponents.length; visIndex++) {
var logIndex=p$1.getComponentLogicalIndex$I.apply(this, [visIndex]);
infoPositions[logIndex]=infoCount;
infoCount+=newComponents[logIndex].getNumJustificationInfos$();
}
var infos=Clazz.array($I$(27), [infoCount]);
var compStart=0;
for (var i=0; i < newComponents.length; i++) {
var comp=newComponents[i];
var compLength=comp.getNumCharacters$();
var compLimit=compStart + compLength;
if (compLimit > justStart) {
var rangeMin=Math.max(0, justStart - compStart);
var rangeMax=Math.min(compLength, justLimit - compStart);
comp.getJustificationInfos$java_awt_font_GlyphJustificationInfoA$I$I$I(infos, infoPositions[i], rangeMin, rangeMax);
if (compLimit >= justLimit) {
break;
}}}
var infoStart=0;
var infoLimit=infoCount;
while (infoStart < infoLimit && infos[infoStart] == null  ){
++infoStart;
}
while (infoLimit > infoStart && infos[infoLimit - 1] == null  ){
--infoLimit;
}
var justifier=Clazz.new_($I$(28,1).c$$java_awt_font_GlyphJustificationInfoA$I$I,[infos, infoStart, infoLimit]);
var deltas=justifier.justify$F(justifyDelta);
var canRejustify=rejustify == false ;
var wantRejustify=false;
var flags=Clazz.array(Boolean.TYPE, [1]);
compStart=0;
for (var i=0; i < newComponents.length; i++) {
var comp=newComponents[i];
var compLength=comp.getNumCharacters$();
var compLimit=compStart + compLength;
if (compLimit > justStart) {
var rangeMin=Math.max(0, justStart - compStart);
var rangeMax=Math.min(compLength, justLimit - compStart);
newComponents[i]=comp.applyJustificationDeltas$FA$I$ZA(deltas, infoPositions[i] * 2, flags);
wantRejustify=!!(wantRejustify|(flags[0]));
if (compLimit >= justLimit) {
break;
}}}
rejustify=wantRejustify && !rejustify ;
} while (rejustify);
return Clazz.new_(C$.c$$java_awt_font_FontRenderContext$sun_font_TextLineComponentA$FA$CA$I$I$IA$BA$Z,[this.frc, newComponents, this.fBaselineOffsets, this.fChars, this.fCharsStart, this.fCharsLimit, this.fCharLogicalOrder, this.fCharLevels, this.fIsDirectionLTR]);
});

Clazz.newMeth(C$, 'getAdvanceBetween$sun_font_TextLineComponentA$I$I',  function (components, start, limit) {
var advance=0;
var tlcStart=0;
for (var i=0; i < components.length; i++) {
var comp=components[i];
var tlcLength=comp.getNumCharacters$();
var tlcLimit=tlcStart + tlcLength;
if (tlcLimit > start) {
var measureStart=Math.max(0, start - tlcStart);
var measureLimit=Math.min(tlcLength, limit - tlcStart);
advance+=comp.getAdvanceBetween$I$I(measureStart, measureLimit);
if (tlcLimit >= limit) {
break;
}}tlcStart=tlcLimit;
}
return advance;
}, 1);

Clazz.newMeth(C$, 'getLayoutPath$',  function () {
return this.lp;
});

C$.$static$=function(){C$.$static$=0;
C$.fgPosAdvF=((P$.TextLine$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "TextLine$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.awt.font.TextLine','.Function']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'computeFunction$java_awt_font_TextLine$I$I',  function (line, componentIndex, indexInArray) {
var tlc=line.fComponents[componentIndex];
var vi=p$1.getComponentVisualIndex$I.apply(line, [componentIndex]);
return line.locs[vi * 2] + tlc.getCharX$I(indexInArray) + tlc.getCharAdvance$I(indexInArray) ;
});
})()
), Clazz.new_($I$(1,1),[this, null],P$.TextLine$1));
C$.fgAdvanceF=((P$.TextLine$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "TextLine$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.awt.font.TextLine','.Function']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'computeFunction$java_awt_font_TextLine$I$I',  function (line, componentIndex, indexInArray) {
var tlc=line.fComponents[componentIndex];
return tlc.getCharAdvance$I(indexInArray);
});
})()
), Clazz.new_($I$(1,1),[this, null],P$.TextLine$2));
C$.fgXPositionF=((P$.TextLine$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "TextLine$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.awt.font.TextLine','.Function']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'computeFunction$java_awt_font_TextLine$I$I',  function (line, componentIndex, indexInArray) {
var vi=p$1.getComponentVisualIndex$I.apply(line, [componentIndex]);
var tlc=line.fComponents[componentIndex];
return line.locs[vi * 2] + tlc.getCharX$I(indexInArray);
});
})()
), Clazz.new_($I$(1,1),[this, null],P$.TextLine$3));
C$.fgYPositionF=((P$.TextLine$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "TextLine$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load(['java.awt.font.TextLine','.Function']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'computeFunction$java_awt_font_TextLine$I$I',  function (line, componentIndex, indexInArray) {
var tlc=line.fComponents[componentIndex];
var charPos=tlc.getCharY$I(indexInArray);
return charPos + p$1.getComponentShift$I.apply(line, [componentIndex]);
});
})()
), Clazz.new_($I$(1,1),[this, null],P$.TextLine$4));
};
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.TextLine, "TextLineMetrics", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['ascent','descent','leading','advance']]]

Clazz.newMeth(C$, 'c$$F$F$F$F',  function (ascent, descent, leading, advance) {
;C$.$init$.apply(this);
this.ascent=ascent;
this.descent=descent;
this.leading=leading;
this.advance=advance;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TextLine, "Function", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
