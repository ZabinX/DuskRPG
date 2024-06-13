(function(){var P$=Clazz.newPackage("sun.font"),p$1={},I$=[[0,'sun.font.AttributeValues','java.awt.geom.AffineTransform','sun.font.CoreMetrics',['java.awt.geom.Rectangle2D','.Float'],'sun.font.Decoration','sun.font.GlyphLayout','sun.font.TextSource','StringBuffer','java.awt.font.GlyphJustificationInfo']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ExtendedTextSourceLabel", null, 'sun.font.ExtendedTextLabel', [['sun.font.Decoration','sun.font.Decoration.Label']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['source','sun.font.TextSource','decorator','sun.font.Decoration','font','java.awt.Font','baseTX','java.awt.geom.AffineTransform','cm','sun.font.CoreMetrics','lb','java.awt.geom.Rectangle2D','+ab','+vb','+ib','gv','sun.font.StandardGlyphVector','charinfo','float[]']]]

Clazz.newMeth(C$, 'c$$sun_font_TextSource$sun_font_Decoration',  function (source, decorator) {
Clazz.super_(C$, this);
this.source=source;
this.decorator=decorator;
p$1.finishInit.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$sun_font_TextSource$sun_font_ExtendedTextSourceLabel$I',  function (source, oldLabel, offset) {
Clazz.super_(C$, this);
this.source=source;
this.decorator=oldLabel.decorator;
p$1.finishInit.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'finishInit',  function () {
this.font=this.source.getFont$();
var atts=this.font.getAttributes$();
this.baseTX=$I$(1).getBaselineTransform$java_util_Map(atts);
if (this.baseTX == null ) {
this.cm=this.source.getCoreMetrics$();
} else {
var charTX=$I$(1).getCharTransform$java_util_Map(atts);
if (charTX == null ) {
charTX=Clazz.new_($I$(2,1));
}this.font=this.font.deriveFont$java_awt_geom_AffineTransform(charTX);
var lm=this.font.getLineMetrics$CA$I$I$java_awt_font_FontRenderContext(p$1.sourceGetChars.apply(this, []), this.source.getStart$(), this.source.getStart$() + this.source.getLength$(), this.source.getFRC$());
this.cm=$I$(3).get$java_awt_font_LineMetrics(lm);
}}, p$1);

Clazz.newMeth(C$, 'getLogicalBounds$',  function () {
return this.getLogicalBounds$F$F(0, 0);
});

Clazz.newMeth(C$, 'getLogicalBounds$F$F',  function (x, y) {
if (this.lb == null ) {
this.lb=this.createLogicalBounds$();
}return Clazz.new_([(this.lb.getX$() + x), (this.lb.getY$() + y), this.lb.getWidth$(), this.lb.getHeight$()],$I$(4,1).c$$F$F$F$F);
});

Clazz.newMeth(C$, 'getAdvance$',  function () {
if (this.lb == null ) {
this.lb=this.createLogicalBounds$();
}return this.lb.getWidth$();
});

Clazz.newMeth(C$, 'getVisualBounds$F$F',  function (x, y) {
if (this.vb == null ) {
this.vb=this.decorator.getVisualBounds$sun_font_Decoration_Label(this);
}return Clazz.new_([(this.vb.getX$() + x), (this.vb.getY$() + y), this.vb.getWidth$(), this.vb.getHeight$()],$I$(4,1).c$$F$F$F$F);
});

Clazz.newMeth(C$, 'getAlignBounds$F$F',  function (x, y) {
if (this.ab == null ) {
this.ab=this.createAlignBounds$();
}return Clazz.new_([(this.ab.getX$() + x), (this.ab.getY$() + y), this.ab.getWidth$(), this.ab.getHeight$()],$I$(4,1).c$$F$F$F$F);
});

Clazz.newMeth(C$, 'getItalicBounds$F$F',  function (x, y) {
if (this.ib == null ) {
this.ib=this.createItalicBounds$();
}return Clazz.new_([(this.ib.getX$() + x), (this.ib.getY$() + y), this.ib.getWidth$(), this.ib.getHeight$()],$I$(4,1).c$$F$F$F$F);
});

Clazz.newMeth(C$, 'getPixelBounds$java_awt_font_FontRenderContext$F$F',  function (frc, x, y) {
return p$1.getGV.apply(this, []).getPixelBounds$java_awt_font_FontRenderContext$F$F(frc, x, y);
});

Clazz.newMeth(C$, 'isSimple$',  function () {
return this.decorator === $I$(5).getPlainDecoration$()  && this.baseTX == null  ;
});

Clazz.newMeth(C$, 'getBaselineTransform$',  function () {
return this.baseTX;
});

Clazz.newMeth(C$, 'handleGetOutline$F$F',  function (x, y) {
return p$1.getGV.apply(this, []).getOutline$F$F(x, y);
});

Clazz.newMeth(C$, 'getOutline$F$F',  function (x, y) {
return this.decorator.getOutline$sun_font_Decoration_Label$F$F(this, x, y);
});

Clazz.newMeth(C$, 'handleDraw$java_awt_Graphics2D$F$F',  function (g, x, y) {
(g).drawText$CA$java_awt_Font$F$F(p$1.sourceGetChars.apply(this, []), this.font, x, y);
});

Clazz.newMeth(C$, 'sourceGetChars',  function () {
var chars=null;

if (this.source.__CLASS_NAME__.indexOf("sun.font") == 0) chars = this.source.chars;
return (chars == null  ? this.source.getChars$() : chars);
}, p$1);

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$F$F',  function (g, x, y) {
this.decorator.drawTextAndDecorations$sun_font_Decoration_Label$java_awt_Graphics2D$F$F(this, g, x, y);
});

Clazz.newMeth(C$, 'createLogicalBounds$',  function () {
return p$1.getGV.apply(this, []).getLogicalBounds$();
});

Clazz.newMeth(C$, 'handleGetVisualBounds$',  function () {
return p$1.getGV.apply(this, []).getVisualBounds$();
});

Clazz.newMeth(C$, 'createAlignBounds$',  function () {
var info=p$1.getCharinfo.apply(this, []);
var al=0.0;
var at=-this.cm.ascent;
var aw=0.0;
var ah=this.cm.ascent + this.cm.descent;
if (this.charinfo == null  || this.charinfo.length == 0 ) {
return Clazz.new_($I$(4,1).c$$F$F$F$F,[al, at, aw, ah]);
}var lineIsLTR=(this.source.getLayoutFlags$() & 8) == 0;
var rn=info.length - 8;
if (lineIsLTR) {
while (rn > 0 && info[rn + 6] == 0  ){
rn-=8;
}
}if (rn >= 0) {
var ln=0;
while (ln < rn && ((info[ln + 2] == 0 ) || (!lineIsLTR && info[ln + 6] == 0  ) ) ){
ln+=8;
}
al=Math.max(0.0, info[ln + 0]);
aw=info[rn + 0] + info[rn + 2] - al;
}return Clazz.new_($I$(4,1).c$$F$F$F$F,[al, at, aw, ah]);
});

Clazz.newMeth(C$, 'createItalicBounds$',  function () {
var ia=this.cm.italicAngle;
var lb=this.getLogicalBounds$();
var l=lb.getMinX$();
var t=-this.cm.ascent;
var r=lb.getMaxX$();
var b=this.cm.descent;
if (ia != 0 ) {
if (ia > 0 ) {
l-=ia * (b - this.cm.ssOffset);
r-=ia * (t - this.cm.ssOffset);
} else {
l-=ia * (t - this.cm.ssOffset);
r-=ia * (b - this.cm.ssOffset);
}}return Clazz.new_($I$(4,1).c$$F$F$F$F,[l, t, r - l, b - t]);
});

Clazz.newMeth(C$, 'getGV',  function () {
if (this.gv == null ) {
this.gv=this.createGV$();
}return this.gv;
}, p$1);

Clazz.newMeth(C$, 'createGV$',  function () {
var frc=this.source.getFRC$();
var flags=this.source.getLayoutFlags$();
var context=p$1.sourceGetChars.apply(this, []);
var start=this.source.getStart$();
var length=this.source.getLength$();
var gl=$I$(6).get$sun_font_GlyphLayout_LayoutEngineFactory(null);
this.gv=gl.layout$java_awt_Font$java_awt_font_FontRenderContext$CA$I$I$I$sun_font_StandardGlyphVector(this.font, frc, context, start, length, flags, null);
$I$(6).done$sun_font_GlyphLayout(gl);
return this.gv;
});

Clazz.newMeth(C$, 'getNumCharacters$',  function () {
return this.source.getLength$();
});

Clazz.newMeth(C$, 'getCoreMetrics$',  function () {
return this.cm;
});

Clazz.newMeth(C$, 'getCharX$I',  function (index) {
p$1.validate$I.apply(this, [index]);
var charinfo=p$1.getCharinfo.apply(this, []);
var idx=this.l2v$I(index) * 8 + 0;
if (charinfo == null  || idx >= charinfo.length ) {
return 0.0;
} else {
return charinfo[idx];
}});

Clazz.newMeth(C$, 'getCharY$I',  function (index) {
p$1.validate$I.apply(this, [index]);
var charinfo=p$1.getCharinfo.apply(this, []);
var idx=this.l2v$I(index) * 8 + 1;
if (charinfo == null  || idx >= charinfo.length ) {
return 0.0;
} else {
return charinfo[idx];
}});

Clazz.newMeth(C$, 'getCharAdvance$I',  function (index) {
p$1.validate$I.apply(this, [index]);
var charinfo=p$1.getCharinfo.apply(this, []);
var idx=this.l2v$I(index) * 8 + 2;
if (charinfo == null  || idx >= charinfo.length ) {
return 0.0;
} else {
return charinfo[idx];
}});

Clazz.newMeth(C$, 'handleGetCharVisualBounds$I',  function (index) {
p$1.validate$I.apply(this, [index]);
var charinfo=p$1.getCharinfo.apply(this, []);
index=this.l2v$I(index) * 8;
if (charinfo == null  || (index + 7) >= charinfo.length ) {
return Clazz.new_($I$(4,1));
}return Clazz.new_($I$(4,1).c$$F$F$F$F,[charinfo[index + 4], charinfo[index + 5], charinfo[index + 6], charinfo[index + 7]]);
});

Clazz.newMeth(C$, 'getCharVisualBounds$I$F$F',  function (index, x, y) {
var bounds=this.decorator.getCharVisualBounds$sun_font_Decoration_Label$I(this, index);
if (x != 0  || y != 0  ) {
bounds.setRect$D$D$D$D(bounds.getX$() + x, bounds.getY$() + y, bounds.getWidth$(), bounds.getHeight$());
}return bounds;
});

Clazz.newMeth(C$, 'validate$I',  function (index) {
if (index < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["index " + index + " < 0" ]);
} else if (index >= this.source.getLength$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["index " + index + " < " + this.source.getLength$() ]);
}}, p$1);

Clazz.newMeth(C$, 'logicalToVisual$I',  function (logicalIndex) {
p$1.validate$I.apply(this, [logicalIndex]);
return this.l2v$I(logicalIndex);
});

Clazz.newMeth(C$, 'visualToLogical$I',  function (visualIndex) {
p$1.validate$I.apply(this, [visualIndex]);
return this.v2l$I(visualIndex);
});

Clazz.newMeth(C$, 'getLineBreakIndex$I$F',  function (start, width) {
var charinfo=p$1.getCharinfo.apply(this, []);
var length=this.source.getLength$();
--start;
while (width >= 0  && ++start < length ){
var cidx=this.l2v$I(start) * 8 + 2;
if (cidx >= charinfo.length) {
break;
}var adv=charinfo[cidx];
width-=adv;
}
return start;
});

Clazz.newMeth(C$, 'getAdvanceBetween$I$I',  function (start, limit) {
var a=0.0;
var charinfo=p$1.getCharinfo.apply(this, []);
--start;
while (++start < limit){
var cidx=this.l2v$I(start) * 8 + 2;
if (cidx >= charinfo.length) {
break;
}a+=charinfo[cidx];
}
return a;
});

Clazz.newMeth(C$, 'caretAtOffsetIsValid$I',  function (offset) {
if (offset == 0 || offset == this.source.getLength$() ) {
return true;
}var c=p$1.sourceGetChars.apply(this, [])[this.source.getStart$() + offset];
if (c == "\t" || c == "\n"  || c == "\r" ) {
return true;
}var v=this.l2v$I(offset);
var idx=v * 8 + 2;
var charinfo=p$1.getCharinfo.apply(this, []);
if (charinfo == null  || idx >= charinfo.length ) {
return false;
} else {
return charinfo[idx] != 0 ;
}});

Clazz.newMeth(C$, 'getCharinfo',  function () {
if (this.charinfo == null ) {
this.charinfo=this.createCharinfo$();
}return this.charinfo;
}, p$1);

Clazz.newMeth(C$, 'createCharinfo$',  function () {
var gv=p$1.getGV.apply(this, []);
var glyphinfo=null;
try {
glyphinfo=gv.getGlyphInfo$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$O(this.source);
} else {
throw e;
}
}
var numGlyphs=gv.getNumGlyphs$();
if (numGlyphs == 0) {
return glyphinfo;
}var indices=gv.getGlyphCharIndices$I$I$IA(0, numGlyphs, null);
var DEBUG=false;
if (DEBUG) {
System.err.println$S("number of glyphs: " + numGlyphs);
for (var i=0; i < numGlyphs; ++i) {
System.err.println$S("g: " + i + ", x: " + new Float(glyphinfo[i * 8 + 0]).toString() + ", a: " + new Float(glyphinfo[i * 8 + 2]).toString() + ", n: " + indices[i] );
}
}var minIndex=indices[0];
var maxIndex=minIndex;
var nextMin=0;
var cp=0;
var cx=0;
var gp=0;
var gx=0;
var gxlimit=numGlyphs;
var pdelta=8;
var xdelta=1;
var ltr=(this.source.getLayoutFlags$() & 1) == 0;
if (!ltr) {
minIndex=indices[numGlyphs - 1];
maxIndex=minIndex;
nextMin=0;
cp=glyphinfo.length - 8;
cx=0;
gp=glyphinfo.length - 8;
gx=numGlyphs - 1;
gxlimit=-1;
pdelta=-8;
xdelta=-1;
}var cposl=0;
var cposr=0;
var cvisl=0;
var cvist=0;
var cvisr=0;
var cvisb=0;
var baseline=0;
var mustCopy=false;
while (gx != gxlimit){
var haveCopy=false;
var clusterExtraGlyphs=0;
minIndex=indices[gx];
maxIndex=minIndex;
gx+=xdelta;
gp+=pdelta;
while (gx != gxlimit && ((glyphinfo[gp + 2] == 0 ) || (minIndex != nextMin) || (indices[gx] <= maxIndex) || (maxIndex - minIndex > clusterExtraGlyphs)  ) ){
if (!haveCopy) {
var gps=gp - pdelta;
cposl=glyphinfo[gps + 0];
cposr=cposl + glyphinfo[gps + 2];
cvisl=glyphinfo[gps + 4];
cvist=glyphinfo[gps + 5];
cvisr=cvisl + glyphinfo[gps + 6];
cvisb=cvist + glyphinfo[gps + 7];
haveCopy=true;
}++clusterExtraGlyphs;
var radvx=glyphinfo[gp + 2];
if (radvx != 0 ) {
var rposx=glyphinfo[gp + 0];
cposl=Math.min(cposl, rposx);
cposr=Math.max(cposr, rposx + radvx);
}var rvisw=glyphinfo[gp + 6];
if (rvisw != 0 ) {
var rvisx=glyphinfo[gp + 4];
var rvisy=glyphinfo[gp + 5];
cvisl=Math.min(cvisl, rvisx);
cvist=Math.min(cvist, rvisy);
cvisr=Math.max(cvisr, rvisx + rvisw);
cvisb=Math.max(cvisb, rvisy + glyphinfo[gp + 7]);
}minIndex=Math.min(minIndex, indices[gx]);
maxIndex=Math.max(maxIndex, indices[gx]);
gx+=xdelta;
gp+=pdelta;
}
if (DEBUG) {
System.out.println$S("minIndex = " + minIndex + ", maxIndex = " + maxIndex );
}nextMin=maxIndex + 1;
glyphinfo[cp + 1]=baseline;
glyphinfo[cp + 3]=0;
if (haveCopy) {
glyphinfo[cp + 0]=cposl;
glyphinfo[cp + 2]=cposr - cposl;
glyphinfo[cp + 4]=cvisl;
glyphinfo[cp + 5]=cvist;
glyphinfo[cp + 6]=cvisr - cvisl;
glyphinfo[cp + 7]=cvisb - cvist;
if (maxIndex - minIndex < clusterExtraGlyphs) {
mustCopy=true;
}if (minIndex < maxIndex) {
if (!ltr) {
cposr=cposl;
}cvisr-=cvisl;
cvisb-=cvist;
var iMinIndex=minIndex;
var icp=(cp/8|0);
while (minIndex < maxIndex){
++minIndex;
cx+=xdelta;
cp+=pdelta;
if (cp < 0 || cp >= glyphinfo.length ) {
if (DEBUG) System.out.println$S("minIndex = " + iMinIndex + ", maxIndex = " + maxIndex + ", cp = " + icp );
}glyphinfo[cp + 0]=cposr;
glyphinfo[cp + 1]=baseline;
glyphinfo[cp + 2]=0;
glyphinfo[cp + 3]=0;
glyphinfo[cp + 4]=cvisl;
glyphinfo[cp + 5]=cvist;
glyphinfo[cp + 6]=cvisr;
glyphinfo[cp + 7]=cvisb;
}
}haveCopy=false;
} else if (mustCopy) {
var gpr=gp - pdelta;
glyphinfo[cp + 0]=glyphinfo[gpr + 0];
glyphinfo[cp + 2]=glyphinfo[gpr + 2];
glyphinfo[cp + 4]=glyphinfo[gpr + 4];
glyphinfo[cp + 5]=glyphinfo[gpr + 5];
glyphinfo[cp + 6]=glyphinfo[gpr + 6];
glyphinfo[cp + 7]=glyphinfo[gpr + 7];
}cp+=pdelta;
cx+=xdelta;
}
if (mustCopy && !ltr ) {
cp-=pdelta;
System.arraycopy$O$I$O$I$I(glyphinfo, cp, glyphinfo, 0, glyphinfo.length - cp);
}if (DEBUG) {
var chars=p$1.sourceGetChars.apply(this, []);
var start=this.source.getStart$();
var length=this.source.getLength$();
System.out.println$S("char info for " + length + " characters" );
for (var i=0; i < length * 8; ) {
System.out.println$S(" ch: " + Integer.toHexString$I(chars[start + this.v2l$I((i/8|0))].$c()) + " x: " + new Float(glyphinfo[i++]).toString() + " y: " + new Float(glyphinfo[i++]).toString() + " xa: " + new Float(glyphinfo[i++]).toString() + " ya: " + new Float(glyphinfo[i++]).toString() + " l: " + new Float(glyphinfo[i++]).toString() + " t: " + new Float(glyphinfo[i++]).toString() + " w: " + new Float(glyphinfo[i++]).toString() + " h: " + new Float(glyphinfo[i++]).toString() );
}
}return glyphinfo;
});

Clazz.newMeth(C$, 'l2v$I',  function (index) {
return (this.source.getLayoutFlags$() & 1) == 0 ? index : this.source.getLength$() - 1 - index ;
});

Clazz.newMeth(C$, 'v2l$I',  function (index) {
return (this.source.getLayoutFlags$() & 1) == 0 ? index : this.source.getLength$() - 1 - index ;
});

Clazz.newMeth(C$, 'getSubset$I$I$I',  function (start, limit, dir) {
return Clazz.new_(C$.c$$sun_font_TextSource$sun_font_Decoration,[this.source.getSubSource$I$I$I(start, limit - start, dir), this.decorator]);
});

Clazz.newMeth(C$, 'toString',  function () {
if (true) {
return this.source.toString$Z($I$(7).WITHOUT_CONTEXT);
}var buf=Clazz.new_($I$(8,1));
buf.append$S(C$.superclazz.prototype.toString.apply(this, []));
buf.append$S("[source:");
buf.append$S(this.source.toString$Z($I$(7).WITHOUT_CONTEXT));
buf.append$S(", lb:");
buf.append$O(this.lb);
buf.append$S(", ab:");
buf.append$O(this.ab);
buf.append$S(", vb:");
buf.append$O(this.vb);
buf.append$S(", gv:");
buf.append$O(this.gv);
buf.append$S(", ci: ");
if (this.charinfo == null ) {
buf.append$S("null");
} else {
buf.append$F(this.charinfo[0]);
for (var i=1; i < this.charinfo.length; ) {
buf.append$S(i % 8 == 0 ? "; " : ", ");
buf.append$F(this.charinfo[i]);
}
}buf.append$S("]");
return buf.toString();
});

Clazz.newMeth(C$, 'getNumJustificationInfos$',  function () {
return p$1.getGV.apply(this, []).getNumGlyphs$();
});

Clazz.newMeth(C$, 'getJustificationInfos$java_awt_font_GlyphJustificationInfoA$I$I$I',  function (infos, infoStart, charStart, charLimit) {
var gv=p$1.getGV.apply(this, []);
var charinfo=p$1.getCharinfo.apply(this, []);
var size=gv.getFont$().getSize2D$();
var nullInfo=Clazz.new_($I$(9,1).c$$F$Z$I$F$F$Z$I$F$F,[0, false, 3, 0, 0, false, 3, 0, 0]);
var spaceInfo=Clazz.new_($I$(9,1).c$$F$Z$I$F$F$Z$I$F$F,[size, true, 1, 0, size, true, 1, 0, size / 4.0]);
var kanjiInfo=Clazz.new_($I$(9,1).c$$F$Z$I$F$F$Z$I$F$F,[size, true, 2, size, size, false, 3, 0, 0]);
var chars=p$1.sourceGetChars.apply(this, []);
var offset=this.source.getStart$();
var numGlyphs=gv.getNumGlyphs$();
var minGlyph=0;
var maxGlyph=numGlyphs;
var ltr=(this.source.getLayoutFlags$() & 1) == 0;
if (charStart != 0 || charLimit != this.source.getLength$() ) {
if (ltr) {
minGlyph=charStart;
maxGlyph=charLimit;
} else {
minGlyph=numGlyphs - charLimit;
maxGlyph=numGlyphs - charStart;
}}for (var i=0; i < numGlyphs; ++i) {
var info=null;
if (i >= minGlyph && i < maxGlyph ) {
if (charinfo[i * 8 + 2] == 0 ) {
info=nullInfo;
} else {
var ci=this.v2l$I(i);
var c=chars[offset + ci];
if (Character.isWhitespace$C(c)) {
info=spaceInfo;
} else if (c.$c() >= 19968  && (c.$c() < 40960 )  || (c.$c() >= 44032  && c.$c() < 55216  )  || (c.$c() >= 63744  && c.$c() < 64256  ) ) {
info=kanjiInfo;
} else {
info=nullInfo;
}}}infos[infoStart + i]=info;
}
});

Clazz.newMeth(C$, 'applyJustificationDeltas$FA$I$ZA',  function (deltas, deltaStart, flags) {
var newCharinfo=p$1.getCharinfo.apply(this, []).clone$();
flags[0]=false;
var newgv=p$1.getGV.apply(this, []).clone$();
var newPositions=newgv.getGlyphPositions$FA(null);
var numGlyphs=newgv.getNumGlyphs$();
var chars=p$1.sourceGetChars.apply(this, []);
var offset=this.source.getStart$();
var deltaPos=0;
for (var i=0; i < numGlyphs; ++i) {
if (Character.isWhitespace$C(chars[offset + this.v2l$I(i)])) {
newPositions[i * 2]+=deltaPos;
var deltaAdv=deltas[deltaStart + i * 2] + deltas[deltaStart + i * 2 + 1];
newCharinfo[i * 8 + 0]+=deltaPos;
newCharinfo[i * 8 + 4]+=deltaPos;
newCharinfo[i * 8 + 2]+=deltaAdv;
deltaPos+=deltaAdv;
} else {
deltaPos+=deltas[deltaStart + i * 2];
newPositions[i * 2]+=deltaPos;
newCharinfo[i * 8 + 0]+=deltaPos;
newCharinfo[i * 8 + 4]+=deltaPos;
deltaPos+=deltas[deltaStart + i * 2 + 1];
}}
newPositions[numGlyphs * 2]+=deltaPos;
newgv.setGlyphPositions$FA(newPositions);
var result=Clazz.new_(C$.c$$sun_font_TextSource$sun_font_Decoration,[this.source, this.decorator]);
result.gv=newgv;
result.charinfo=newCharinfo;
return result;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
