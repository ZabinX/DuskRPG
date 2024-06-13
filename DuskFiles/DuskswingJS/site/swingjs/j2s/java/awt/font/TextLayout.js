(function(){var P$=Clazz.newPackage("java.awt.font"),p$1={},I$=[[0,['java.awt.font.TextLayout','.CaretPolicy'],'java.text.AttributedString','java.awt.font.TextAttribute','sun.font.FontResolver','sun.text.CodePointIterator','java.awt.font.TextLine','sun.font.AttributeValues','sun.font.CoreMetrics','sun.font.GraphicComponent','InternalError','Error',['java.awt.geom.Rectangle2D','.Float'],'java.awt.font.TextHitInfo','java.awt.geom.GeneralPath','java.awt.Shape','java.awt.geom.AffineTransform',['java.awt.geom.Point2D','.Float']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TextLayout", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'Cloneable');
C$.$classes$=[['CaretPolicy',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.isVerticalLine=false;
this.lineMetrics=null;
this.cacheIsValid=false;
this.naturalBounds=null;
this.boundsRect=null;
this.caretsInLigaturesAreAllowed=false;
},1);

C$.$fields$=[['Z',['isVerticalLine','cacheIsValid','caretsInLigaturesAreAllowed'],'B',['baseline'],'F',['visibleAdvance','justifyRatio'],'I',['characterCount','hashCodeCache'],'O',['baselineOffsets','float[]','textLine','java.awt.font.TextLine','lineMetrics','java.awt.font.TextLine.TextLineMetrics','naturalBounds','java.awt.geom.Rectangle2D','+boundsRect']]
,['F',['dx','dy'],'O',['DEFAULT_CARET_POLICY','java.awt.font.TextLayout.CaretPolicy']]]

Clazz.newMeth(C$, 'c$$S$java_awt_Font$java_awt_font_FontRenderContext',  function (string, font, frc) {
;C$.$init$.apply(this);
if (font == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Null font passed to TextLayout constructor."]);
}if (string == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Null string passed to TextLayout constructor."]);
}if (string.length$() == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Zero length string passed to TextLayout constructor."]);
}var attributes=null;
if (font.hasLayoutAttributes$()) {
attributes=font.getAttributes$();
}var text=string.toCharArray$();
if (C$.sameBaselineUpTo$java_awt_Font$CA$I$I(font, text, 0, text.length) == text.length) {
p$1.fastInit$CA$java_awt_Font$java_util_Map$java_awt_font_FontRenderContext.apply(this, [text, font, attributes, frc]);
} else {
var as=attributes == null  ? Clazz.new_($I$(2,1).c$$S,[string]) : Clazz.new_($I$(2,1).c$$S$java_util_Map,[string, attributes]);
as.addAttribute$java_text_AttributedCharacterIterator_Attribute$O($I$(3).FONT, font);
p$1.standardInit$java_text_AttributedCharacterIterator$CA$java_awt_font_FontRenderContext.apply(this, [as.getIterator$(), text, frc]);
}}, 1);

Clazz.newMeth(C$, 'c$$S$java_util_Map$java_awt_font_FontRenderContext',  function (string, attributes, frc) {
;C$.$init$.apply(this);
if (string == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Null string passed to TextLayout constructor."]);
}if (attributes == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Null map passed to TextLayout constructor."]);
}if (string.length$() == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Zero length string passed to TextLayout constructor."]);
}var text=string.toCharArray$();
var font=C$.singleFont$CA$I$I$java_util_Map(text, 0, text.length, attributes);
if (font != null ) {
p$1.fastInit$CA$java_awt_Font$java_util_Map$java_awt_font_FontRenderContext.apply(this, [text, font, attributes, frc]);
} else {
var as=Clazz.new_($I$(2,1).c$$S$java_util_Map,[string, attributes]);
p$1.standardInit$java_text_AttributedCharacterIterator$CA$java_awt_font_FontRenderContext.apply(this, [as.getIterator$(), text, frc]);
}}, 1);

Clazz.newMeth(C$, 'singleFont$CA$I$I$java_util_Map',  function (text, start, limit, attributes) {
if (attributes.get$O($I$(3).CHAR_REPLACEMENT) != null ) {
return null;
}var font=null;
try {
font=attributes.get$O($I$(3).FONT);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
} else {
throw e;
}
}
if (font == null ) {
if (attributes.get$O($I$(3).FAMILY) != null ) {
} else {
var resolver=$I$(4).getInstance$();
var iter=$I$(5).create$CA$I$I(text, start, limit);
var fontIndex=resolver.nextFontRunIndex$sun_text_CodePointIterator(iter);
if (iter.charIndex$() == limit) {
font=resolver.getFont$I$java_util_Map(fontIndex, attributes);
}}}if (C$.sameBaselineUpTo$java_awt_Font$CA$I$I(font, text, start, limit) != limit) {
return null;
}return font;
}, 1);

Clazz.newMeth(C$, 'c$$java_text_AttributedCharacterIterator$java_awt_font_FontRenderContext',  function (text, frc) {
;C$.$init$.apply(this);
if (text == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Null iterator passed to TextLayout constructor."]);
}var start=text.getBeginIndex$();
var limit=text.getEndIndex$();
if (start == limit) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Zero length iterator passed to TextLayout constructor."]);
}var len=limit - start;
text.first$();
var chars=Clazz.array(Character.TYPE, [len]);
var n=0;
for (var c=text.first$(); c != "\uffff"; c=text.next$()) {
chars[n++]=c;
}
text.first$();
if (text.getRunLimit$() == limit) {
var attributes=text.getAttributes$();
var font=C$.singleFont$CA$I$I$java_util_Map(chars, 0, len, attributes);
if (font != null ) {
p$1.fastInit$CA$java_awt_Font$java_util_Map$java_awt_font_FontRenderContext.apply(this, [chars, font, attributes, frc]);
return;
}}p$1.standardInit$java_text_AttributedCharacterIterator$CA$java_awt_font_FontRenderContext.apply(this, [text, chars, frc]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_font_TextLine$B$FA$F',  function (textLine, baseline, baselineOffsets, justifyRatio) {
;C$.$init$.apply(this);
this.characterCount=textLine.characterCount$();
this.baseline=baseline;
this.baselineOffsets=baselineOffsets;
this.textLine=textLine;
this.justifyRatio=justifyRatio;
}, 1);

Clazz.newMeth(C$, 'paragraphInit$B$sun_font_CoreMetrics$java_util_Map$CA',  function (aBaseline, lm, paragraphAttrs, text) {
this.baseline=aBaseline;
this.baselineOffsets=$I$(6).getNormalizedOffsets$FA$B(lm.baselineOffsets, this.baseline);
this.justifyRatio=$I$(7).getJustification$java_util_Map(paragraphAttrs);
}, p$1);

Clazz.newMeth(C$, 'fastInit$CA$java_awt_Font$java_util_Map$java_awt_font_FontRenderContext',  function (chars, font, attrs, frc) {
this.isVerticalLine=false;
var lm=font.getLineMetrics$CA$I$I$java_awt_font_FontRenderContext(chars, 0, chars.length, frc);
var cm=$I$(8).get$java_awt_font_LineMetrics(lm);
var glyphBaseline=($b$[0] = cm.baselineIndex, $b$[0]);
if (attrs == null ) {
this.baseline=glyphBaseline;
this.baselineOffsets=cm.baselineOffsets;
this.justifyRatio=1.0;
} else {
p$1.paragraphInit$B$sun_font_CoreMetrics$java_util_Map$CA.apply(this, [glyphBaseline, cm, attrs, chars]);
}this.characterCount=chars.length;
this.textLine=$I$(6).fastCreateTextLine$java_awt_font_FontRenderContext$CA$java_awt_Font$sun_font_CoreMetrics$java_util_Map(frc, chars, font, cm, attrs);
}, p$1);

Clazz.newMeth(C$, 'standardInit$java_text_AttributedCharacterIterator$CA$java_awt_font_FontRenderContext',  function (text, chars, frc) {
this.characterCount=chars.length;
{
var paragraphAttrs=text.getAttributes$();
var haveFont=$I$(6).advanceToFirstFont$java_text_AttributedCharacterIterator(text);
if (haveFont) {
var defaultFont=$I$(6).getFontAtCurrentPos$java_text_AttributedCharacterIterator(text);
var charsStart=text.getIndex$() - text.getBeginIndex$();
var lm=defaultFont.getLineMetrics$CA$I$I$java_awt_font_FontRenderContext(chars, charsStart, charsStart + 1, frc);
var cm=$I$(8).get$java_awt_font_LineMetrics(lm);
p$1.paragraphInit$B$sun_font_CoreMetrics$java_util_Map$CA.apply(this, [($b$[0] = cm.baselineIndex, $b$[0]), cm, paragraphAttrs, chars]);
} else {
var graphic=paragraphAttrs.get$O($I$(3).CHAR_REPLACEMENT);
var defaultBaseline=C$.getBaselineFromGraphic$java_awt_font_GraphicAttribute(graphic);
var cm=$I$(9).createCoreMetrics$java_awt_font_GraphicAttribute(graphic);
p$1.paragraphInit$B$sun_font_CoreMetrics$java_util_Map$CA.apply(this, [defaultBaseline, cm, paragraphAttrs, chars]);
}}this.textLine=$I$(6).standardCreateTextLine$java_awt_font_FontRenderContext$java_text_AttributedCharacterIterator$CA$FA(frc, text, chars, this.baselineOffsets);
}, p$1);

Clazz.newMeth(C$, 'ensureCache',  function () {
if (!this.cacheIsValid) {
p$1.buildCache.apply(this, []);
}}, p$1);

Clazz.newMeth(C$, 'buildCache',  function () {
this.lineMetrics=this.textLine.getMetrics$();
if (this.textLine.isDirectionLTR$()) {
var lastNonSpace=this.characterCount - 1;
while (lastNonSpace != -1){
var logIndex=this.textLine.visualToLogical$I(lastNonSpace);
if (!this.textLine.isCharSpace$I(logIndex)) {
break;
} else {
--lastNonSpace;
}}
if (lastNonSpace == this.characterCount - 1) {
this.visibleAdvance=this.lineMetrics.advance;
} else if (lastNonSpace == -1) {
this.visibleAdvance=0;
} else {
var logIndex=this.textLine.visualToLogical$I(lastNonSpace);
this.visibleAdvance=this.textLine.getCharLinePosition$I(logIndex) + this.textLine.getCharAdvance$I(logIndex);
}} else {
var leftmostNonSpace=0;
while (leftmostNonSpace != this.characterCount){
var logIndex=this.textLine.visualToLogical$I(leftmostNonSpace);
if (!this.textLine.isCharSpace$I(logIndex)) {
break;
} else {
++leftmostNonSpace;
}}
if (leftmostNonSpace == this.characterCount) {
this.visibleAdvance=0;
} else if (leftmostNonSpace == 0) {
this.visibleAdvance=this.lineMetrics.advance;
} else {
var logIndex=this.textLine.visualToLogical$I(leftmostNonSpace);
var pos=this.textLine.getCharLinePosition$I(logIndex);
this.visibleAdvance=this.lineMetrics.advance - pos;
}}this.naturalBounds=null;
this.boundsRect=null;
this.hashCodeCache=0;
this.cacheIsValid=true;
}, p$1);

Clazz.newMeth(C$, 'getNaturalBounds',  function () {
p$1.ensureCache.apply(this, []);
if (this.naturalBounds == null ) {
this.naturalBounds=this.textLine.getItalicBounds$();
}return this.naturalBounds;
}, p$1);

Clazz.newMeth(C$, 'clone$',  function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(10,1).c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'checkTextHit$java_awt_font_TextHitInfo',  function (hit) {
if (hit == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["TextHitInfo is null."]);
}if (hit.getInsertionIndex$() < 0 || hit.getInsertionIndex$() > this.characterCount ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["TextHitInfo is out of range"]);
}}, p$1);

Clazz.newMeth(C$, 'getJustifiedLayout$F',  function (justificationWidth) {
if (justificationWidth <= 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["justificationWidth <= 0 passed to TextLayout.getJustifiedLayout()"]);
}if (this.justifyRatio == -53.9 ) {
throw Clazz.new_($I$(11,1).c$$S,["Can\'t justify again."]);
}p$1.ensureCache.apply(this, []);
var limit=this.characterCount;
while (limit > 0 && this.textLine.isCharWhitespace$I(limit - 1) ){
--limit;
}
var newLine=this.textLine.getJustifiedLine$F$F$I$I(justificationWidth, this.justifyRatio, 0, limit);
if (newLine != null ) {
return Clazz.new_(C$.c$$java_awt_font_TextLine$B$FA$F,[newLine, this.baseline, this.baselineOffsets, -53.9]);
}return this;
});

Clazz.newMeth(C$, 'handleJustify$F',  function (justificationWidth) {
});

Clazz.newMeth(C$, 'getBaseline$',  function () {
return this.baseline;
});

Clazz.newMeth(C$, 'getBaselineOffsets$',  function () {
var offsets=Clazz.array(Float.TYPE, [this.baselineOffsets.length]);
System.arraycopy$O$I$O$I$I(this.baselineOffsets, 0, offsets, 0, offsets.length);
return offsets;
});

Clazz.newMeth(C$, 'getAdvance$',  function () {
p$1.ensureCache.apply(this, []);
return this.lineMetrics.advance;
});

Clazz.newMeth(C$, 'getVisibleAdvance$',  function () {
p$1.ensureCache.apply(this, []);
return this.visibleAdvance;
});

Clazz.newMeth(C$, 'getAscent$',  function () {
p$1.ensureCache.apply(this, []);
return this.lineMetrics.ascent;
});

Clazz.newMeth(C$, 'getDescent$',  function () {
p$1.ensureCache.apply(this, []);
return this.lineMetrics.descent;
});

Clazz.newMeth(C$, 'getLeading$',  function () {
p$1.ensureCache.apply(this, []);
return this.lineMetrics.leading;
});

Clazz.newMeth(C$, 'getBounds$',  function () {
p$1.ensureCache.apply(this, []);
if (this.boundsRect == null ) {
var vb=this.textLine.getVisualBounds$();
if (C$.dx != 0  || C$.dy != 0  ) {
vb.setRect$D$D$D$D(vb.getX$() - C$.dx, vb.getY$() - C$.dy, vb.getWidth$(), vb.getHeight$());
}this.boundsRect=vb;
}var bounds=Clazz.new_($I$(12,1));
bounds.setRect$java_awt_geom_Rectangle2D(this.boundsRect);
return bounds;
});

Clazz.newMeth(C$, 'getPixelBounds$java_awt_font_FontRenderContext$F$F',  function (frc, x, y) {
return this.textLine.getPixelBounds$java_awt_font_FontRenderContext$F$F(frc, x, y);
});

Clazz.newMeth(C$, 'isLeftToRight$',  function () {
return this.textLine.isDirectionLTR$();
});

Clazz.newMeth(C$, 'isVertical$',  function () {
return this.isVerticalLine;
});

Clazz.newMeth(C$, 'getCharacterCount$',  function () {
return this.characterCount;
});

Clazz.newMeth(C$, 'getCaretInfo$I$java_awt_geom_Rectangle2D$FA',  function (caret, bounds, info) {
var top1X;
var top2X;
var bottom1X;
var bottom2X;
if (caret == 0 || caret == this.characterCount ) {
var pos;
var logIndex;
if (caret == this.characterCount) {
logIndex=this.textLine.visualToLogical$I(this.characterCount - 1);
pos=this.textLine.getCharLinePosition$I(logIndex) + this.textLine.getCharAdvance$I(logIndex);
} else {
logIndex=this.textLine.visualToLogical$I(caret);
pos=this.textLine.getCharLinePosition$I(logIndex);
}var angle=this.textLine.getCharAngle$I(logIndex);
var shift=this.textLine.getCharShift$I(logIndex);
pos+=angle * shift;
top1X=top2X=pos + angle * this.textLine.getCharAscent$I(logIndex);
bottom1X=bottom2X=pos - angle * this.textLine.getCharDescent$I(logIndex);
} else {
{
var logIndex=this.textLine.visualToLogical$I(caret - 1);
var angle1=this.textLine.getCharAngle$I(logIndex);
var pos1=this.textLine.getCharLinePosition$I(logIndex) + this.textLine.getCharAdvance$I(logIndex);
if (angle1 != 0 ) {
pos1+=angle1 * this.textLine.getCharShift$I(logIndex);
top1X=pos1 + angle1 * this.textLine.getCharAscent$I(logIndex);
bottom1X=pos1 - angle1 * this.textLine.getCharDescent$I(logIndex);
} else {
top1X=bottom1X=pos1;
}}{
var logIndex=this.textLine.visualToLogical$I(caret);
var angle2=this.textLine.getCharAngle$I(logIndex);
var pos2=this.textLine.getCharLinePosition$I(logIndex);
if (angle2 != 0 ) {
pos2+=angle2 * this.textLine.getCharShift$I(logIndex);
top2X=pos2 + angle2 * this.textLine.getCharAscent$I(logIndex);
bottom2X=pos2 - angle2 * this.textLine.getCharDescent$I(logIndex);
} else {
top2X=bottom2X=pos2;
}}}var topX=(top1X + top2X) / 2;
var bottomX=(bottom1X + bottom2X) / 2;
if (info == null ) {
info=Clazz.array(Float.TYPE, [2]);
}if (this.isVerticalLine) {
info[1]=((topX - bottomX) / bounds.getWidth$());
info[0]=(topX + (info[1] * bounds.getX$()));
} else {
info[1]=((topX - bottomX) / bounds.getHeight$());
info[0]=(bottomX + (info[1] * bounds.getMaxY$()));
}return info;
}, p$1);

Clazz.newMeth(C$, 'getCaretInfo$java_awt_font_TextHitInfo$java_awt_geom_Rectangle2D',  function (hit, bounds) {
p$1.ensureCache.apply(this, []);
p$1.checkTextHit$java_awt_font_TextHitInfo.apply(this, [hit]);
return p$1.getCaretInfoTestInternal$java_awt_font_TextHitInfo$java_awt_geom_Rectangle2D.apply(this, [hit, bounds]);
});

Clazz.newMeth(C$, 'getCaretInfoTestInternal$java_awt_font_TextHitInfo$java_awt_geom_Rectangle2D',  function (hit, bounds) {
p$1.ensureCache.apply(this, []);
p$1.checkTextHit$java_awt_font_TextHitInfo.apply(this, [hit]);
var info=Clazz.array(Float.TYPE, [6]);
p$1.getCaretInfo$I$java_awt_geom_Rectangle2D$FA.apply(this, [p$1.hitToCaret$java_awt_font_TextHitInfo.apply(this, [hit]), bounds, info]);
var iangle;
var ixbase;
var p1x;
var p1y;
var p2x;
var p2y;
var charix=hit.getCharIndex$();
var lead=hit.isLeadingEdge$();
var ltr=this.textLine.isDirectionLTR$();
var horiz=!this.isVertical$();
if (charix == -1 || charix == this.characterCount ) {
var m=this.textLine.getMetrics$();
var low=ltr == (charix == -1) ;
iangle=0;
if (horiz) {
p1x=p2x=low ? 0 : m.advance;
p1y=-m.ascent;
p2y=m.descent;
} else {
p1y=p2y=low ? 0 : m.advance;
p1x=m.descent;
p2x=m.ascent;
}} else {
var thiscm=this.textLine.getCoreMetricsAt$I(charix);
iangle=thiscm.italicAngle;
ixbase=this.textLine.getCharLinePosition$I$Z(charix, lead);
if (thiscm.baselineIndex < 0) {
var m=this.textLine.getMetrics$();
if (horiz) {
p1x=p2x=ixbase;
if (thiscm.baselineIndex == -1) {
p1y=-m.ascent;
p2y=p1y + thiscm.height;
} else {
p2y=m.descent;
p1y=p2y - thiscm.height;
}} else {
p1y=p2y=ixbase;
p1x=m.descent;
p2x=m.ascent;
}} else {
var bo=this.baselineOffsets[thiscm.baselineIndex];
if (horiz) {
ixbase+=iangle * thiscm.ssOffset;
p1x=ixbase + iangle * thiscm.ascent;
p2x=ixbase - iangle * thiscm.descent;
p1y=bo - thiscm.ascent;
p2y=bo + thiscm.descent;
} else {
ixbase-=iangle * thiscm.ssOffset;
p1y=ixbase + iangle * thiscm.ascent;
p2y=ixbase - iangle * thiscm.descent;
p1x=bo + thiscm.ascent;
p2x=bo + thiscm.descent;
}}}info[2]=p1x;
info[3]=p1y;
info[4]=p2x;
info[5]=p2y;
return info;
}, p$1);

Clazz.newMeth(C$, 'getCaretInfo$java_awt_font_TextHitInfo',  function (hit) {
return this.getCaretInfo$java_awt_font_TextHitInfo$java_awt_geom_Rectangle2D(hit, p$1.getNaturalBounds.apply(this, []));
});

Clazz.newMeth(C$, 'hitToCaret$java_awt_font_TextHitInfo',  function (hit) {
var hitIndex=hit.getCharIndex$();
if (hitIndex < 0) {
return this.textLine.isDirectionLTR$() ? 0 : this.characterCount;
} else if (hitIndex >= this.characterCount) {
return this.textLine.isDirectionLTR$() ? this.characterCount : 0;
}var visIndex=this.textLine.logicalToVisual$I(hitIndex);
if (hit.isLeadingEdge$() != this.textLine.isCharLTR$I(hitIndex) ) {
++visIndex;
}return visIndex;
}, p$1);

Clazz.newMeth(C$, 'caretToHit$I',  function (caret) {
if (caret == 0 || caret == this.characterCount ) {
if ((caret == this.characterCount) == this.textLine.isDirectionLTR$() ) {
return $I$(13).leading$I(this.characterCount);
} else {
return $I$(13).trailing$I(-1);
}} else {
var charIndex=this.textLine.visualToLogical$I(caret);
var leading=this.textLine.isCharLTR$I(charIndex);
return leading ? $I$(13).leading$I(charIndex) : $I$(13).trailing$I(charIndex);
}}, p$1);

Clazz.newMeth(C$, 'caretIsValid$I',  function (caret) {
if (caret == this.characterCount || caret == 0 ) {
return true;
}var offset=this.textLine.visualToLogical$I(caret);
if (!this.textLine.isCharLTR$I(offset)) {
offset=this.textLine.visualToLogical$I(caret - 1);
if (this.textLine.isCharLTR$I(offset)) {
return true;
}}return this.textLine.caretAtOffsetIsValid$I(offset);
}, p$1);

Clazz.newMeth(C$, 'getNextRightHit$java_awt_font_TextHitInfo',  function (hit) {
p$1.ensureCache.apply(this, []);
p$1.checkTextHit$java_awt_font_TextHitInfo.apply(this, [hit]);
var caret=p$1.hitToCaret$java_awt_font_TextHitInfo.apply(this, [hit]);
if (caret == this.characterCount) {
return null;
}do {
++caret;
} while (!p$1.caretIsValid$I.apply(this, [caret]));
return p$1.caretToHit$I.apply(this, [caret]);
});

Clazz.newMeth(C$, 'getNextRightHit$I$java_awt_font_TextLayout_CaretPolicy',  function (offset, policy) {
if (offset < 0 || offset > this.characterCount ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Offset out of bounds in TextLayout.getNextRightHit()"]);
}if (policy == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Null CaretPolicy passed to TextLayout.getNextRightHit()"]);
}var hit1=$I$(13).afterOffset$I(offset);
var hit2=hit1.getOtherHit$();
var nextHit=this.getNextRightHit$java_awt_font_TextHitInfo(policy.getStrongCaret$java_awt_font_TextHitInfo$java_awt_font_TextHitInfo$java_awt_font_TextLayout(hit1, hit2, this));
if (nextHit != null ) {
var otherHit=this.getVisualOtherHit$java_awt_font_TextHitInfo(nextHit);
return policy.getStrongCaret$java_awt_font_TextHitInfo$java_awt_font_TextHitInfo$java_awt_font_TextLayout(otherHit, nextHit, this);
} else {
return null;
}});

Clazz.newMeth(C$, 'getNextRightHit$I',  function (offset) {
return this.getNextRightHit$I$java_awt_font_TextLayout_CaretPolicy(offset, C$.DEFAULT_CARET_POLICY);
});

Clazz.newMeth(C$, 'getNextLeftHit$java_awt_font_TextHitInfo',  function (hit) {
p$1.ensureCache.apply(this, []);
p$1.checkTextHit$java_awt_font_TextHitInfo.apply(this, [hit]);
var caret=p$1.hitToCaret$java_awt_font_TextHitInfo.apply(this, [hit]);
if (caret == 0) {
return null;
}do {
--caret;
} while (!p$1.caretIsValid$I.apply(this, [caret]));
return p$1.caretToHit$I.apply(this, [caret]);
});

Clazz.newMeth(C$, 'getNextLeftHit$I$java_awt_font_TextLayout_CaretPolicy',  function (offset, policy) {
if (policy == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Null CaretPolicy passed to TextLayout.getNextLeftHit()"]);
}if (offset < 0 || offset > this.characterCount ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Offset out of bounds in TextLayout.getNextLeftHit()"]);
}var hit1=$I$(13).afterOffset$I(offset);
var hit2=hit1.getOtherHit$();
var nextHit=this.getNextLeftHit$java_awt_font_TextHitInfo(policy.getStrongCaret$java_awt_font_TextHitInfo$java_awt_font_TextHitInfo$java_awt_font_TextLayout(hit1, hit2, this));
if (nextHit != null ) {
var otherHit=this.getVisualOtherHit$java_awt_font_TextHitInfo(nextHit);
return policy.getStrongCaret$java_awt_font_TextHitInfo$java_awt_font_TextHitInfo$java_awt_font_TextLayout(otherHit, nextHit, this);
} else {
return null;
}});

Clazz.newMeth(C$, 'getNextLeftHit$I',  function (offset) {
return this.getNextLeftHit$I$java_awt_font_TextLayout_CaretPolicy(offset, C$.DEFAULT_CARET_POLICY);
});

Clazz.newMeth(C$, 'getVisualOtherHit$java_awt_font_TextHitInfo',  function (hit) {
p$1.ensureCache.apply(this, []);
p$1.checkTextHit$java_awt_font_TextHitInfo.apply(this, [hit]);
var hitCharIndex=hit.getCharIndex$();
var charIndex;
var leading;
if (hitCharIndex == -1 || hitCharIndex == this.characterCount ) {
var visIndex;
if (this.textLine.isDirectionLTR$() == (hitCharIndex == -1) ) {
visIndex=0;
} else {
visIndex=this.characterCount - 1;
}charIndex=this.textLine.visualToLogical$I(visIndex);
if (this.textLine.isDirectionLTR$() == (hitCharIndex == -1) ) {
leading=this.textLine.isCharLTR$I(charIndex);
} else {
leading=!this.textLine.isCharLTR$I(charIndex);
}} else {
var visIndex=this.textLine.logicalToVisual$I(hitCharIndex);
var movedToRight;
if (this.textLine.isCharLTR$I(hitCharIndex) == hit.isLeadingEdge$() ) {
--visIndex;
movedToRight=false;
} else {
++visIndex;
movedToRight=true;
}if (visIndex > -1 && visIndex < this.characterCount ) {
charIndex=this.textLine.visualToLogical$I(visIndex);
leading=movedToRight == this.textLine.isCharLTR$I(charIndex) ;
} else {
charIndex=(movedToRight == this.textLine.isDirectionLTR$() ) ? this.characterCount : -1;
leading=charIndex == this.characterCount;
}}return leading ? $I$(13).leading$I(charIndex) : $I$(13).trailing$I(charIndex);
});

Clazz.newMeth(C$, 'getCaretPath$java_awt_font_TextHitInfo$java_awt_geom_Rectangle2D',  function (hit, bounds) {
var info=this.getCaretInfo$java_awt_font_TextHitInfo$java_awt_geom_Rectangle2D(hit, bounds);
return Clazz.array(Double.TYPE, -1, [info[2], info[3], info[4], info[5]]);
}, p$1);

Clazz.newMeth(C$, 'getCaretPath$I$java_awt_geom_Rectangle2D$Z',  function (caret, bounds, clipToBounds) {
var info=p$1.getCaretInfo$I$java_awt_geom_Rectangle2D$FA.apply(this, [caret, bounds, null]);
var pos=info[0];
var slope=info[1];
var x0;
var y0;
var x1;
var y1;
var x2=-3141.59;
var y2=-2.7;
var left=bounds.getX$();
var right=left + bounds.getWidth$();
var top=bounds.getY$();
var bottom=top + bounds.getHeight$();
var threePoints=false;
if (this.isVerticalLine) {
if (slope >= 0 ) {
x0=left;
x1=right;
} else {
x1=left;
x0=right;
}y0=pos + x0 * slope;
y1=pos + x1 * slope;
if (clipToBounds) {
if (y0 < top ) {
if (slope <= 0  || y1 <= top  ) {
y0=y1=top;
} else {
threePoints=true;
y0=top;
y2=top;
x2=x1 + (top - y1) / slope;
if (y1 > bottom ) {
y1=bottom;
}}} else if (y1 > bottom ) {
if (slope >= 0  || y0 >= bottom  ) {
y0=y1=bottom;
} else {
threePoints=true;
y1=bottom;
y2=bottom;
x2=x0 + (bottom - x1) / slope;
}}}} else {
if (slope >= 0 ) {
y0=bottom;
y1=top;
} else {
y1=bottom;
y0=top;
}x0=pos - y0 * slope;
x1=pos - y1 * slope;
if (clipToBounds) {
if (x0 < left ) {
if (slope <= 0  || x1 <= left  ) {
x0=x1=left;
} else {
threePoints=true;
x0=left;
x2=left;
y2=y1 - (left - x1) / slope;
if (x1 > right ) {
x1=right;
}}} else if (x1 > right ) {
if (slope >= 0  || x0 >= right  ) {
x0=x1=right;
} else {
threePoints=true;
x1=right;
x2=right;
y2=y0 - (right - x0) / slope;
}}}}return threePoints ? Clazz.array(Double.TYPE, -1, [x0, y0, x2, y2, x1, y1]) : Clazz.array(Double.TYPE, -1, [x0, y0, x1, y1]);
}, p$1);

Clazz.newMeth(C$, 'pathToShape$DA$Z$sun_font_LayoutPathImpl',  function (path, close, lp) {
var result=Clazz.new_($I$(14,1).c$$I$I,[0, path.length]);
result.moveTo$F$F(path[0], path[1]);
for (var i=2; i < path.length; i+=2) {
result.lineTo$F$F(path[i], path[i + 1]);
}
if (close) {
result.closePath$();
}if (lp != null ) {
result=lp.mapShape$java_awt_Shape(result);
}return result;
}, 1);

Clazz.newMeth(C$, 'getCaretShape$java_awt_font_TextHitInfo$java_awt_geom_Rectangle2D',  function (hit, bounds) {
p$1.ensureCache.apply(this, []);
p$1.checkTextHit$java_awt_font_TextHitInfo.apply(this, [hit]);
if (bounds == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Null Rectangle2D passed to TextLayout.getCaret()"]);
}return C$.pathToShape$DA$Z$sun_font_LayoutPathImpl(p$1.getCaretPath$java_awt_font_TextHitInfo$java_awt_geom_Rectangle2D.apply(this, [hit, bounds]), false, this.textLine.getLayoutPath$());
});

Clazz.newMeth(C$, 'getCaretShape$java_awt_font_TextHitInfo',  function (hit) {
return this.getCaretShape$java_awt_font_TextHitInfo$java_awt_geom_Rectangle2D(hit, p$1.getNaturalBounds.apply(this, []));
});

Clazz.newMeth(C$, 'getStrongHit$java_awt_font_TextHitInfo$java_awt_font_TextHitInfo',  function (hit1, hit2) {
var hit1Level=this.getCharacterLevel$I(hit1.getCharIndex$());
var hit2Level=this.getCharacterLevel$I(hit2.getCharIndex$());
if (hit1Level == hit2Level) {
if (hit2.isLeadingEdge$() && !hit1.isLeadingEdge$() ) {
return hit2;
} else {
return hit1;
}} else {
return (hit1Level < hit2Level) ? hit1 : hit2;
}}, p$1);

Clazz.newMeth(C$, 'getCharacterLevel$I',  function (index) {
if (index < -1 || index > this.characterCount ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Index is out of range in getCharacterLevel."]);
}p$1.ensureCache.apply(this, []);
if (index == -1 || index == this.characterCount ) {
return ($b$[0] = (this.textLine.isDirectionLTR$() ? 0 : 1), $b$[0]);
}return this.textLine.getCharLevel$I(index);
});

Clazz.newMeth(C$, 'getCaretShapes$I$java_awt_geom_Rectangle2D$java_awt_font_TextLayout_CaretPolicy',  function (offset, bounds, policy) {
p$1.ensureCache.apply(this, []);
if (offset < 0 || offset > this.characterCount ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Offset out of bounds in TextLayout.getCaretShapes()"]);
}if (bounds == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Null Rectangle2D passed to TextLayout.getCaretShapes()"]);
}if (policy == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Null CaretPolicy passed to TextLayout.getCaretShapes()"]);
}var result=Clazz.array($I$(15), [2]);
var hit=$I$(13).afterOffset$I(offset);
var hitCaret=p$1.hitToCaret$java_awt_font_TextHitInfo.apply(this, [hit]);
var lp=this.textLine.getLayoutPath$();
var hitShape=C$.pathToShape$DA$Z$sun_font_LayoutPathImpl(p$1.getCaretPath$java_awt_font_TextHitInfo$java_awt_geom_Rectangle2D.apply(this, [hit, bounds]), false, lp);
var otherHit=hit.getOtherHit$();
var otherCaret=p$1.hitToCaret$java_awt_font_TextHitInfo.apply(this, [otherHit]);
if (hitCaret == otherCaret) {
result[0]=hitShape;
} else {
var otherShape=C$.pathToShape$DA$Z$sun_font_LayoutPathImpl(p$1.getCaretPath$java_awt_font_TextHitInfo$java_awt_geom_Rectangle2D.apply(this, [otherHit, bounds]), false, lp);
var strongHit=policy.getStrongCaret$java_awt_font_TextHitInfo$java_awt_font_TextHitInfo$java_awt_font_TextLayout(hit, otherHit, this);
var hitIsStrong=strongHit.equals$java_awt_font_TextHitInfo(hit);
if (hitIsStrong) {
result[0]=hitShape;
result[1]=otherShape;
} else {
result[0]=otherShape;
result[1]=hitShape;
}}return result;
});

Clazz.newMeth(C$, 'getCaretShapes$I$java_awt_geom_Rectangle2D',  function (offset, bounds) {
return this.getCaretShapes$I$java_awt_geom_Rectangle2D$java_awt_font_TextLayout_CaretPolicy(offset, bounds, C$.DEFAULT_CARET_POLICY);
});

Clazz.newMeth(C$, 'getCaretShapes$I',  function (offset) {
return this.getCaretShapes$I$java_awt_geom_Rectangle2D$java_awt_font_TextLayout_CaretPolicy(offset, p$1.getNaturalBounds.apply(this, []), C$.DEFAULT_CARET_POLICY);
});

Clazz.newMeth(C$, 'boundingShape$DA$DA',  function (path0, path1) {
var result=C$.pathToShape$DA$Z$sun_font_LayoutPathImpl(path0, false, null);
var sameDirection;
if (this.isVerticalLine) {
sameDirection=(path0[1] > path0[path0.length - 1] ) == (path1[1] > path1[path1.length - 1] ) ;
} else {
sameDirection=(path0[0] > path0[path0.length - 2] ) == (path1[0] > path1[path1.length - 2] ) ;
}var start;
var limit;
var increment;
if (sameDirection) {
start=path1.length - 2;
limit=-2;
increment=-2;
} else {
start=0;
limit=path1.length;
increment=2;
}for (var i=start; i != limit; i+=increment) {
result.lineTo$F$F(path1[i], path1[i + 1]);
}
result.closePath$();
return result;
}, p$1);

Clazz.newMeth(C$, 'caretBoundingShape$I$I$java_awt_geom_Rectangle2D',  function (caret0, caret1, bounds) {
if (caret0 > caret1) {
var temp=caret0;
caret0=caret1;
caret1=temp;
}return p$1.boundingShape$DA$DA.apply(this, [p$1.getCaretPath$I$java_awt_geom_Rectangle2D$Z.apply(this, [caret0, bounds, true]), p$1.getCaretPath$I$java_awt_geom_Rectangle2D$Z.apply(this, [caret1, bounds, true])]);
}, p$1);

Clazz.newMeth(C$, 'leftShape$java_awt_geom_Rectangle2D',  function (bounds) {
var path0;
if (this.isVerticalLine) {
path0=Clazz.array(Double.TYPE, -1, [bounds.getX$(), bounds.getY$(), bounds.getX$() + bounds.getWidth$(), bounds.getY$()]);
} else {
path0=Clazz.array(Double.TYPE, -1, [bounds.getX$(), bounds.getY$() + bounds.getHeight$(), bounds.getX$(), bounds.getY$()]);
}var path1=p$1.getCaretPath$I$java_awt_geom_Rectangle2D$Z.apply(this, [0, bounds, true]);
return p$1.boundingShape$DA$DA.apply(this, [path0, path1]);
}, p$1);

Clazz.newMeth(C$, 'rightShape$java_awt_geom_Rectangle2D',  function (bounds) {
var path1;
if (this.isVerticalLine) {
path1=Clazz.array(Double.TYPE, -1, [bounds.getX$(), bounds.getY$() + bounds.getHeight$(), bounds.getX$() + bounds.getWidth$(), bounds.getY$() + bounds.getHeight$()]);
} else {
path1=Clazz.array(Double.TYPE, -1, [bounds.getX$() + bounds.getWidth$(), bounds.getY$() + bounds.getHeight$(), bounds.getX$() + bounds.getWidth$(), bounds.getY$()]);
}var path0=p$1.getCaretPath$I$java_awt_geom_Rectangle2D$Z.apply(this, [this.characterCount, bounds, true]);
return p$1.boundingShape$DA$DA.apply(this, [path0, path1]);
}, p$1);

Clazz.newMeth(C$, 'getLogicalRangesForVisualSelection$java_awt_font_TextHitInfo$java_awt_font_TextHitInfo',  function (firstEndpoint, secondEndpoint) {
p$1.ensureCache.apply(this, []);
p$1.checkTextHit$java_awt_font_TextHitInfo.apply(this, [firstEndpoint]);
p$1.checkTextHit$java_awt_font_TextHitInfo.apply(this, [secondEndpoint]);
var included=Clazz.array(Boolean.TYPE, [this.characterCount]);
var startIndex=p$1.hitToCaret$java_awt_font_TextHitInfo.apply(this, [firstEndpoint]);
var limitIndex=p$1.hitToCaret$java_awt_font_TextHitInfo.apply(this, [secondEndpoint]);
if (startIndex > limitIndex) {
var t=startIndex;
startIndex=limitIndex;
limitIndex=t;
}if (startIndex < limitIndex) {
var visIndex=startIndex;
while (visIndex < limitIndex){
included[this.textLine.visualToLogical$I(visIndex)]=true;
++visIndex;
}
}var count=0;
var inrun=false;
for (var i=0; i < this.characterCount; i++) {
if (included[i] != inrun ) {
inrun=!inrun;
if (inrun) {
++count;
}}}
var ranges=Clazz.array(Integer.TYPE, [count * 2]);
count=0;
inrun=false;
for (var i=0; i < this.characterCount; i++) {
if (included[i] != inrun ) {
ranges[count++]=i;
inrun=!inrun;
}}
if (inrun) {
ranges[count++]=this.characterCount;
}return ranges;
});

Clazz.newMeth(C$, 'getVisualHighlightShape$java_awt_font_TextHitInfo$java_awt_font_TextHitInfo$java_awt_geom_Rectangle2D',  function (firstEndpoint, secondEndpoint, bounds) {
p$1.ensureCache.apply(this, []);
p$1.checkTextHit$java_awt_font_TextHitInfo.apply(this, [firstEndpoint]);
p$1.checkTextHit$java_awt_font_TextHitInfo.apply(this, [secondEndpoint]);
if (bounds == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Null Rectangle2D passed to TextLayout.getVisualHighlightShape()"]);
}var result=Clazz.new_($I$(14,1).c$$I,[0]);
var firstCaret=p$1.hitToCaret$java_awt_font_TextHitInfo.apply(this, [firstEndpoint]);
var secondCaret=p$1.hitToCaret$java_awt_font_TextHitInfo.apply(this, [secondEndpoint]);
result.append$java_awt_Shape$Z(p$1.caretBoundingShape$I$I$java_awt_geom_Rectangle2D.apply(this, [firstCaret, secondCaret, bounds]), false);
if (firstCaret == 0 || secondCaret == 0 ) {
var ls=p$1.leftShape$java_awt_geom_Rectangle2D.apply(this, [bounds]);
if (!ls.getBounds$().isEmpty$()) result.append$java_awt_Shape$Z(ls, false);
}if (firstCaret == this.characterCount || secondCaret == this.characterCount ) {
var rs=p$1.rightShape$java_awt_geom_Rectangle2D.apply(this, [bounds]);
if (!rs.getBounds$().isEmpty$()) {
result.append$java_awt_Shape$Z(rs, false);
}}var lp=this.textLine.getLayoutPath$();
if (lp != null ) {
result=lp.mapShape$java_awt_Shape(result);
}return result;
});

Clazz.newMeth(C$, 'getVisualHighlightShape$java_awt_font_TextHitInfo$java_awt_font_TextHitInfo',  function (firstEndpoint, secondEndpoint) {
return this.getVisualHighlightShape$java_awt_font_TextHitInfo$java_awt_font_TextHitInfo$java_awt_geom_Rectangle2D(firstEndpoint, secondEndpoint, p$1.getNaturalBounds.apply(this, []));
});

Clazz.newMeth(C$, 'getLogicalHighlightShape$I$I$java_awt_geom_Rectangle2D',  function (firstEndpoint, secondEndpoint, bounds) {
if (bounds == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Null Rectangle2D passed to TextLayout.getLogicalHighlightShape()"]);
}p$1.ensureCache.apply(this, []);
if (firstEndpoint > secondEndpoint) {
var t=firstEndpoint;
firstEndpoint=secondEndpoint;
secondEndpoint=t;
}if (firstEndpoint < 0 || secondEndpoint > this.characterCount ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Range is invalid in TextLayout.getLogicalHighlightShape()"]);
}var result=Clazz.new_($I$(14,1).c$$I,[0]);
var carets=Clazz.array(Integer.TYPE, [10]);
var count=0;
if (firstEndpoint < secondEndpoint) {
var logIndex=firstEndpoint;
do {
carets[count++]=p$1.hitToCaret$java_awt_font_TextHitInfo.apply(this, [$I$(13).leading$I(logIndex)]);
var ltr=this.textLine.isCharLTR$I(logIndex);
do {
++logIndex;
} while (logIndex < secondEndpoint && this.textLine.isCharLTR$I(logIndex) == ltr  );
var hitCh=logIndex;
carets[count++]=p$1.hitToCaret$java_awt_font_TextHitInfo.apply(this, [$I$(13).trailing$I(hitCh - 1)]);
if (count == carets.length) {
var temp=Clazz.array(Integer.TYPE, [carets.length + 10]);
System.arraycopy$O$I$O$I$I(carets, 0, temp, 0, count);
carets=temp;
}} while (logIndex < secondEndpoint);
} else {
count=2;
carets[0]=carets[1]=p$1.hitToCaret$java_awt_font_TextHitInfo.apply(this, [$I$(13).leading$I(firstEndpoint)]);
}for (var i=0; i < count; i+=2) {
result.append$java_awt_Shape$Z(p$1.caretBoundingShape$I$I$java_awt_geom_Rectangle2D.apply(this, [carets[i], carets[i + 1], bounds]), false);
}
if (firstEndpoint != secondEndpoint) {
if ((this.textLine.isDirectionLTR$() && firstEndpoint == 0 ) || (!this.textLine.isDirectionLTR$() && secondEndpoint == this.characterCount ) ) {
var ls=p$1.leftShape$java_awt_geom_Rectangle2D.apply(this, [bounds]);
if (!ls.getBounds$().isEmpty$()) {
result.append$java_awt_Shape$Z(ls, false);
}}if ((this.textLine.isDirectionLTR$() && secondEndpoint == this.characterCount ) || (!this.textLine.isDirectionLTR$() && firstEndpoint == 0 ) ) {
var rs=p$1.rightShape$java_awt_geom_Rectangle2D.apply(this, [bounds]);
if (!rs.getBounds$().isEmpty$()) {
result.append$java_awt_Shape$Z(rs, false);
}}}var lp=this.textLine.getLayoutPath$();
if (lp != null ) {
result=lp.mapShape$java_awt_Shape(result);
}return result;
});

Clazz.newMeth(C$, 'getLogicalHighlightShape$I$I',  function (firstEndpoint, secondEndpoint) {
return this.getLogicalHighlightShape$I$I$java_awt_geom_Rectangle2D(firstEndpoint, secondEndpoint, p$1.getNaturalBounds.apply(this, []));
});

Clazz.newMeth(C$, 'getBlackBoxBounds$I$I',  function (firstEndpoint, secondEndpoint) {
p$1.ensureCache.apply(this, []);
if (firstEndpoint > secondEndpoint) {
var t=firstEndpoint;
firstEndpoint=secondEndpoint;
secondEndpoint=t;
}if (firstEndpoint < 0 || secondEndpoint > this.characterCount ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid range passed to TextLayout.getBlackBoxBounds()"]);
}var result=Clazz.new_($I$(14,1).c$$I,[1]);
if (firstEndpoint < this.characterCount) {
for (var logIndex=firstEndpoint; logIndex < secondEndpoint; logIndex++) {
var r=this.textLine.getCharBounds$I(logIndex);
if (!r.isEmpty$()) {
result.append$java_awt_Shape$Z(r, false);
}}
}if (C$.dx != 0  || C$.dy != 0  ) {
var tx=$I$(16).getTranslateInstance$D$D(C$.dx, C$.dy);
result=tx.createTransformedShape$java_awt_Shape(result);
}var lp=this.textLine.getLayoutPath$();
if (lp != null ) {
result=lp.mapShape$java_awt_Shape(result);
}return result;
});

Clazz.newMeth(C$, 'caretToPointDistance$FA$F$F',  function (caretInfo, x, y) {
var lineDistance=this.isVerticalLine ? y : x;
var distanceOffBaseline=this.isVerticalLine ? -x : y;
return lineDistance - caretInfo[0] + (distanceOffBaseline * caretInfo[1]);
}, p$1);

Clazz.newMeth(C$, 'hitTestChar$F$F$java_awt_geom_Rectangle2D',  function (x, y, bounds) {
var lp=this.textLine.getLayoutPath$();
var prev=false;
if (lp != null ) {
var pt=Clazz.new_($I$(17,1).c$$F$F,[x, y]);
prev=lp.pointToPath$java_awt_geom_Point2D$java_awt_geom_Point2D(pt, pt);
x=pt.x;
y=pt.y;
}if (this.isVertical$()) {
if (y < bounds.getMinY$() ) {
return $I$(13).leading$I(0);
} else if (y >= bounds.getMaxY$() ) {
return $I$(13).trailing$I(this.characterCount - 1);
}} else {
if (x < bounds.getMinX$() ) {
return this.isLeftToRight$() ? $I$(13).leading$I(0) : $I$(13).trailing$I(this.characterCount - 1);
} else if (x >= bounds.getMaxX$() ) {
return this.isLeftToRight$() ? $I$(13).trailing$I(this.characterCount - 1) : $I$(13).leading$I(0);
}}var distance=1.7976931348623157E308;
var index=0;
var trail=-1;
var lcm=null;
var icx=0;
var icy=0;
var ia=0;
var cy=0;
var dya=0;
var ydsq=0;
for (var i=0; i < this.characterCount; ++i) {
if (!this.textLine.caretAtOffsetIsValid$I(i)) {
continue;
}if (trail == -1) {
trail=i;
}var cm=this.textLine.getCoreMetricsAt$I(i);
if (cm !== lcm ) {
lcm=cm;
if (cm.baselineIndex == -1) {
cy=-(this.textLine.getMetrics$().ascent - cm.ascent) + cm.ssOffset;
} else if (cm.baselineIndex == -2) {
cy=this.textLine.getMetrics$().descent - cm.descent + cm.ssOffset;
} else {
cy=cm.effectiveBaselineOffset$FA(this.baselineOffsets) + cm.ssOffset;
}var dy=(cm.descent - cm.ascent) / 2 - cy;
dya=dy * cm.italicAngle;
cy+=dy;
ydsq=(cy - y) * (cy - y);
}var cx=this.textLine.getCharXPosition$I(i);
var ca=this.textLine.getCharAdvance$I(i);
var dx=ca / 2;
cx+=dx - dya;
var nd=Math.sqrt(4 * (cx - x) * (cx - x)  + ydsq);
if (nd < distance ) {
distance=nd;
index=i;
trail=-1;
icx=cx;
icy=cy;
ia=cm.italicAngle;
}}
var left=x < icx - (y - icy) * ia ;
var leading=this.textLine.isCharLTR$I(index) == left ;
if (trail == -1) {
trail=this.characterCount;
}var result=leading ? $I$(13).leading$I(index) : $I$(13).trailing$I(trail - 1);
return result;
});

Clazz.newMeth(C$, 'hitTestChar$F$F',  function (x, y) {
return this.hitTestChar$F$F$java_awt_geom_Rectangle2D(x, y, p$1.getNaturalBounds.apply(this, []));
});

Clazz.newMeth(C$, 'hashCode$',  function () {
if (this.hashCodeCache == 0) {
p$1.ensureCache.apply(this, []);
this.hashCodeCache=this.textLine.hashCode$();
}return this.hashCodeCache;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
return (Clazz.instanceOf(obj, "java.awt.font.TextLayout")) && this.equals$java_awt_font_TextLayout(obj) ;
});

Clazz.newMeth(C$, 'equals$java_awt_font_TextLayout',  function (rhs) {
if (rhs == null ) {
return false;
}if (rhs === this ) {
return true;
}p$1.ensureCache.apply(this, []);
return this.textLine.equals$O(rhs.textLine);
});

Clazz.newMeth(C$, 'toString',  function () {
p$1.ensureCache.apply(this, []);
return this.textLine.toString();
});

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$F$F',  function (g2, x, y) {
if (g2 == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Null Graphics2D passed to TextLayout.draw()"]);
}this.textLine.draw$java_awt_Graphics2D$F$F(g2, x - C$.dx, y - C$.dy);
});

Clazz.newMeth(C$, 'getTextLineForTesting$',  function () {
return this.textLine;
});

Clazz.newMeth(C$, 'sameBaselineUpTo$java_awt_Font$CA$I$I',  function (font, text, start, limit) {
return limit;
}, 1);

Clazz.newMeth(C$, 'getBaselineFromGraphic$java_awt_font_GraphicAttribute',  function (graphic) {
var alignment=($b$[0] = graphic.getAlignment$(), $b$[0]);
if (alignment == -2 || alignment == -1 ) {
return 0;
} else {
return alignment;
}}, 1);

Clazz.newMeth(C$, 'getOutline$java_awt_geom_AffineTransform',  function (tx) {
p$1.ensureCache.apply(this, []);
var result=this.textLine.getOutline$java_awt_geom_AffineTransform(tx);
var lp=this.textLine.getLayoutPath$();
if (lp != null ) {
result=lp.mapShape$java_awt_Shape(result);
}return result;
});

Clazz.newMeth(C$, 'getLayoutPath$',  function () {
return this.textLine.getLayoutPath$();
});

Clazz.newMeth(C$, 'hitToPoint$java_awt_font_TextHitInfo$java_awt_geom_Point2D',  function (hit, point) {
if (hit == null  || point == null  ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,[(hit == null  ? "hit" : "point") + " can't be null"]);
}p$1.ensureCache.apply(this, []);
p$1.checkTextHit$java_awt_font_TextHitInfo.apply(this, [hit]);
var adv=0;
var off=0;
var ix=hit.getCharIndex$();
var leading=hit.isLeadingEdge$();
var ltr;
if (ix == -1 || ix == this.textLine.characterCount$() ) {
ltr=this.textLine.isDirectionLTR$();
adv=(ltr == (ix == -1) ) ? 0 : this.lineMetrics.advance;
} else {
ltr=this.textLine.isCharLTR$I(ix);
adv=this.textLine.getCharLinePosition$I$Z(ix, leading);
off=this.textLine.getCharYPosition$I(ix);
}point.setLocation$D$D(adv, off);
var lp=this.textLine.getLayoutPath$();
if (lp != null ) {
lp.pathToPoint$java_awt_geom_Point2D$Z$java_awt_geom_Point2D(point, ltr != leading , point);
}});

C$.$static$=function(){C$.$static$=0;
C$.DEFAULT_CARET_POLICY=Clazz.new_($I$(1,1));
};
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.TextLayout, "CaretPolicy", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getStrongCaret$java_awt_font_TextHitInfo$java_awt_font_TextHitInfo$java_awt_font_TextLayout',  function (hit1, hit2, layout) {
return p$1.getStrongHit$java_awt_font_TextHitInfo$java_awt_font_TextHitInfo.apply(layout, [hit1, hit2]);
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:10 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
