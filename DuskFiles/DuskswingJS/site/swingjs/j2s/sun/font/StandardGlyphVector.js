(function(){var P$=Clazz.newPackage("sun.font"),p$1={},p$2={},I$=[[0,'java.awt.geom.AffineTransform','java.awt.Rectangle',['java.awt.geom.Point2D','.Float'],['sun.font.StandardGlyphVector','.GlyphStrike'],['java.awt.geom.Rectangle2D','.Float'],'StringBuffer','swingjs.JSUtil','java.awt.RenderingHints','java.awt.font.FontRenderContext',['sun.font.StandardGlyphVector','.GlyphTransformInfo'],'java.awt.Shape',['sun.font.StandardGlyphVector','.ADL'],'java.awt.geom.GeneralPath','sun.font.DelegatingShape','java.awt.font.GlyphMetrics','swingjs.JSFontMetrics']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StandardGlyphVector", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.awt.font.GlyphVector');
C$.$classes$=[['GlyphTransformInfo',24],['GlyphStrike',25],['ADL',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['flags'],'O',['font','java.awt.Font','frc','java.awt.font.FontRenderContext','glyphs','int[]','+userGlyphs','positions','float[]','charIndices','int[]','gti','sun.font.StandardGlyphVector.GlyphTransformInfo','ftx','java.awt.geom.AffineTransform','+dtx','+invdtx','+frctx','fontxx2D','sun.font.Font2D','fsref','sun.font.StandardGlyphVector.GlyphStrike','lbcacheRef','java.awt.Shape[]','+vbcacheRef']]]

Clazz.newMeth(C$, 'c$$java_awt_Font$S$java_awt_font_FontRenderContext',  function (font, str, frc) {
Clazz.super_(C$, this);
p$1.init$java_awt_Font$CA$I$I$java_awt_font_FontRenderContext$I.apply(this, [font, str.toCharArray$(), 0, str.length$(), frc, -1]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Font$CA$java_awt_font_FontRenderContext',  function (font, text, frc) {
Clazz.super_(C$, this);
p$1.init$java_awt_Font$CA$I$I$java_awt_font_FontRenderContext$I.apply(this, [font, text, 0, text.length, frc, -1]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Font$CA$I$I$java_awt_font_FontRenderContext',  function (font, text, start, count, frc) {
Clazz.super_(C$, this);
p$1.init$java_awt_Font$CA$I$I$java_awt_font_FontRenderContext$I.apply(this, [font, text, start, count, frc, -1]);
}, 1);

Clazz.newMeth(C$, 'getTracking$java_awt_Font',  function (font) {
if (font.hasLayoutAttributes$()) {
var values=(font.getAttributes$()).getValues$();
return values.getTracking$();
}return 0;
}, p$1);

Clazz.newMeth(C$, 'c$$java_awt_Font$java_awt_font_FontRenderContext$IA$FA$IA$I',  function (font, frc, glyphs, positions, indices, flags) {
Clazz.super_(C$, this);
this.initGlyphVector$java_awt_Font$java_awt_font_FontRenderContext$IA$FA$IA$I(font, frc, glyphs, positions, indices, flags);
var track=p$1.getTracking$java_awt_Font.apply(this, [font]);
if (track != 0 ) {
track*=font.getSize2D$();
var trackPt=Clazz.new_($I$(3,1).c$$F$F,[track, 0]);
if (font.isTransformed$()) {
$I$(7).notImplemented$S("font transformed!");
var at=font.getTransform$();
at.deltaTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(trackPt, trackPt);
}}}, 1);

Clazz.newMeth(C$, 'initGlyphVector$java_awt_Font$java_awt_font_FontRenderContext$IA$FA$IA$I',  function (font, frc, glyphs, positions, indices, flags) {
this.font=font;
this.frc=frc;
this.glyphs=glyphs;
this.userGlyphs=glyphs;
this.positions=positions;
this.charIndices=indices;
this.flags=flags;
p$1.initFontData.apply(this, []);
});

Clazz.newMeth(C$, 'c$$java_awt_Font$java_text_CharacterIterator$java_awt_font_FontRenderContext',  function (font, iter, frc) {
Clazz.super_(C$, this);
var offset=iter.getBeginIndex$();
var text=Clazz.array(Character.TYPE, [iter.getEndIndex$() - offset]);
for (var c=iter.first$(); c != "\uffff"; c=iter.next$()) {
text[iter.getIndex$() - offset]=c;
}
p$1.init$java_awt_Font$CA$I$I$java_awt_font_FontRenderContext$I.apply(this, [font, text, 0, text.length, frc, -1]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Font$IA$java_awt_font_FontRenderContext',  function (font, glyphs, frc) {
Clazz.super_(C$, this);
this.font=font;
this.frc=frc;
this.flags=-1;
p$1.initFontData.apply(this, []);
this.userGlyphs=glyphs;
this.glyphs=this.getValidatedGlyphs$IA(this.userGlyphs);
}, 1);

Clazz.newMeth(C$, 'getStandardGV$java_awt_font_GlyphVector$sun_java2d_loops_FontInfo',  function (gv, info) {
if (info.aaHint == 2) {
var aaHint=gv.getFontRenderContext$().getAntiAliasingHint$();
if (aaHint !== $I$(8).VALUE_TEXT_ANTIALIAS_ON  && aaHint !== $I$(8).VALUE_TEXT_ANTIALIAS_GASP  ) {
var frc=gv.getFontRenderContext$();
frc=Clazz.new_([frc.getTransform$(), $I$(8).VALUE_TEXT_ANTIALIAS_ON, frc.getFractionalMetricsHint$()],$I$(9,1).c$$java_awt_geom_AffineTransform$O$O);
return Clazz.new_(C$.c$$java_awt_font_GlyphVector$java_awt_font_FontRenderContext,[gv, frc]);
}}if (Clazz.instanceOf(gv, "sun.font.StandardGlyphVector")) {
return gv;
}return Clazz.new_(C$.c$$java_awt_font_GlyphVector$java_awt_font_FontRenderContext,[gv, gv.getFontRenderContext$()]);
}, 1);

Clazz.newMeth(C$, 'getFont$',  function () {
return this.font;
});

Clazz.newMeth(C$, 'getFontRenderContext$',  function () {
return this.frc;
});

Clazz.newMeth(C$, 'performDefaultLayout$',  function () {
this.positions=null;
if (p$1.getTracking$java_awt_Font.apply(this, [this.font]) == 0 ) {
p$1.clearFlags$I.apply(this, [2]);
}});

Clazz.newMeth(C$, 'getNumGlyphs$',  function () {
return this.glyphs.length;
});

Clazz.newMeth(C$, 'getGlyphCode$I',  function (glyphIndex) {
return this.userGlyphs[glyphIndex];
});

Clazz.newMeth(C$, 'getGlyphCodes$I$I$IA',  function (start, count, result) {
if (count < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["count = " + count]);
}if (start < 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["start = " + start]);
}if (start > this.glyphs.length - count) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["start + count = " + (start + count)]);
}if (result == null ) {
result=Clazz.array(Integer.TYPE, [count]);
}for (var i=0; i < count; ++i) {
result[i]=this.userGlyphs[i + start];
}
return result;
});

Clazz.newMeth(C$, 'getGlyphCharIndex$I',  function (ix) {
if (ix < 0 && ix >= this.glyphs.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["" + ix]);
}if (this.charIndices == null ) {
if ((this.getLayoutFlags$() & 4) != 0) {
return this.glyphs.length - 1 - ix ;
}return ix;
}return this.charIndices[ix];
});

Clazz.newMeth(C$, 'getGlyphCharIndices$I$I$IA',  function (start, count, result) {
if (start < 0 || count < 0  || (count > this.glyphs.length - start) ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["" + start + ", " + count ]);
}if (result == null ) {
result=Clazz.array(Integer.TYPE, [count]);
}if (this.charIndices == null ) {
if ((this.getLayoutFlags$() & 4) != 0) {
for (var i=0, n=this.glyphs.length - 1 - start ; i < count; ++i, --n) {
result[i]=n;
}
} else {
for (var i=0, n=start; i < count; ++i, ++n) {
result[i]=n;
}
}} else {
for (var i=0; i < count; ++i) {
result[i]=this.charIndices[i + start];
}
}return result;
});

Clazz.newMeth(C$, 'getLogicalBounds$',  function () {
p$1.setFRCTX.apply(this, []);
p$1.initPositions.apply(this, []);
var lm=this.font.getLineMetrics$S$java_awt_font_FontRenderContext("", this.frc);
var minX;
var minY;
var maxX;
var maxY;
minX=0;
minY=-lm.getAscent$();
maxX=0;
maxY=lm.getDescent$() + lm.getLeading$();
if (this.glyphs.length > 0) {
maxX=this.positions[this.positions.length - 2];
}return Clazz.new_($I$(5,1).c$$F$F$F$F,[minX, minY, maxX - minX, maxY - minY]);
});

Clazz.newMeth(C$, 'getVisualBounds$',  function () {
return this.getOutline$();
});

Clazz.newMeth(C$, 'getPixelBounds$java_awt_font_FontRenderContext$F$F',  function (renderFRC, x, y) {
return p$1.getGlyphsPixelBounds$java_awt_font_FontRenderContext$F$F$I$I.apply(this, [renderFRC, x, y, 0, this.glyphs.length]);
});

Clazz.newMeth(C$, 'getOutline$',  function () {
return p$1.getGlyphsOutline$I$I$F$F.apply(this, [0, this.glyphs.length, 0, 0]);
});

Clazz.newMeth(C$, 'getOutline$F$F',  function (x, y) {
return p$1.getGlyphsOutline$I$I$F$F.apply(this, [0, this.glyphs.length, x, y]);
});

Clazz.newMeth(C$, 'getGlyphOutline$I',  function (ix) {
return p$1.getGlyphsOutline$I$I$F$F.apply(this, [ix, 1, 0, 0]);
});

Clazz.newMeth(C$, 'getGlyphOutline$I$F$F',  function (ix, x, y) {
return p$1.getGlyphsOutline$I$I$F$F.apply(this, [ix, 1, x, y]);
});

Clazz.newMeth(C$, 'getGlyphPosition$I',  function (ix) {
p$1.initPositions.apply(this, []);
ix*=2;
return Clazz.new_($I$(3,1).c$$F$F,[this.positions[ix], this.positions[ix + 1]]);
});

Clazz.newMeth(C$, 'setGlyphPosition$I$java_awt_geom_Point2D',  function (ix, pos) {
p$1.initPositions.apply(this, []);
var ix2=ix << 1;
this.positions[ix2]=pos.getX$();
this.positions[ix2 + 1]=pos.getY$();
p$1.clearCaches$I.apply(this, [ix]);
p$1.addFlags$I.apply(this, [2]);
});

Clazz.newMeth(C$, 'getGlyphTransform$I',  function (ix) {
if (ix < 0 || ix >= this.glyphs.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["ix = " + ix]);
}if (this.gti != null ) {
return this.gti.getGlyphTransform$I(ix);
}return null;
});

Clazz.newMeth(C$, 'setGlyphTransform$I$java_awt_geom_AffineTransform',  function (ix, newTX) {
if (ix < 0 || ix >= this.glyphs.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["ix = " + ix]);
}if (this.gti == null ) {
if (newTX == null  || newTX.isIdentity$() ) {
return;
}this.gti=Clazz.new_($I$(10,1).c$$sun_font_StandardGlyphVector,[this]);
}this.gti.setGlyphTransform$I$java_awt_geom_AffineTransform(ix, newTX);
if (this.gti.transformCount$() == 0) {
this.gti=null;
}});

Clazz.newMeth(C$, 'getLayoutFlags$',  function () {
if (this.flags == -1) {
this.flags=0;
if (this.charIndices != null  && this.glyphs.length > 1 ) {
var ltr=true;
var rtl=true;
var rtlix=this.charIndices.length;
for (var i=0; i < this.charIndices.length && (ltr || rtl ) ; ++i) {
var cx=this.charIndices[i];
ltr=ltr && (cx == i) ;
rtl=rtl && (cx == --rtlix) ;
}
if (rtl) this.flags|=4;
if (!rtl && !ltr ) this.flags|=8;
}}return this.flags;
});

Clazz.newMeth(C$, 'getGlyphPositions$I$I$FA',  function (start, count, result) {
if (count < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["count = " + count]);
}if (start < 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["start = " + start]);
}if (start > this.glyphs.length + 1 - count) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["start + count = " + (start + count)]);
}return p$1.internalGetGlyphPositions$I$I$I$FA.apply(this, [start, count, 0, result]);
});

Clazz.newMeth(C$, 'getGlyphLogicalBounds$I',  function (ix) {
if (ix < 0 || ix >= this.glyphs.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["ix = " + ix]);
}var lbcache=this.lbcacheRef;
if (this.lbcacheRef == null ) lbcache=Clazz.array($I$(11), [this.glyphs.length]);
this.lbcacheRef=(lbcache);
var result=lbcache[ix];
if (result == null ) {
p$1.setFRCTX.apply(this, []);
p$1.initPositions.apply(this, []);
var adl=Clazz.new_($I$(12,1));
var gs=p$1.getGlyphStrike$I.apply(this, [ix]);
gs.getADL$sun_font_StandardGlyphVector_ADL(adl);
var adv=gs.strike.getGlyphMetrics$I(this.glyphs[ix]);
var wx=adv.x;
var wy=adv.y;
var hx=adl.descentX + adl.leadingX + adl.ascentX ;
var hy=adl.descentY + adl.leadingY + adl.ascentY ;
var x=this.positions[ix * 2] + gs.dx - adl.ascentX;
var y=this.positions[ix * 2 + 1] + gs.dy - adl.ascentY;
var gp=Clazz.new_($I$(13,1));
gp.moveTo$F$F(x, y);
gp.lineTo$F$F(x + wx, y + wy);
gp.lineTo$F$F(x + wx + hx , y + wy + hy );
gp.lineTo$F$F(x + hx, y + hy);
gp.closePath$();
result=Clazz.new_($I$(14,1).c$$java_awt_Shape,[gp]);
lbcache[ix]=result;
}return result;
});

Clazz.newMeth(C$, 'getGlyphVisualBounds$I',  function (ix) {
if (ix < 0 || ix >= this.glyphs.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["ix = " + ix]);
}var vbcache=this.vbcacheRef;
if (vbcache == null ) vbcache=this.vbcacheRef=Clazz.array($I$(11), [this.glyphs.length]);
var result=vbcache[ix];
if (result == null ) {
result=Clazz.new_([p$1.getGlyphOutlineBounds$I.apply(this, [ix])],$I$(14,1).c$$java_awt_Shape);
vbcache[ix]=result;
}return result;
});

Clazz.newMeth(C$, 'getGlyphPixelBounds$I$java_awt_font_FontRenderContext$F$F',  function (index, renderFRC, x, y) {
return p$1.getGlyphsPixelBounds$java_awt_font_FontRenderContext$F$F$I$I.apply(this, [renderFRC, x, y, index, 1]);
});

Clazz.newMeth(C$, 'getGlyphMetrics$I',  function (ix) {
if (ix < 0 || ix >= this.glyphs.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["ix = " + ix]);
}var vb=this.getGlyphVisualBounds$I(ix).getBounds2D$();
var pt=this.getGlyphPosition$I(ix);
vb.setRect$D$D$D$D(vb.getMinX$() - pt.getX$(), vb.getMinY$() - pt.getY$(), vb.getWidth$(), vb.getHeight$());
var adv=p$1.getGlyphStrike$I.apply(this, [ix]).strike.getGlyphMetrics$I(this.glyphs[ix]);
var gm=Clazz.new_($I$(15,1).c$$Z$F$F$java_awt_geom_Rectangle2D$B,[true, adv.x, adv.y, vb, 0]);
return gm;
});

Clazz.newMeth(C$, 'getGlyphJustificationInfo$I',  function (ix) {
if (ix < 0 || ix >= this.glyphs.length ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["ix = " + ix]);
}return null;
});

Clazz.newMeth(C$, 'equals$java_awt_font_GlyphVector',  function (rhs) {
if (this === rhs ) {
return true;
}if (rhs == null ) {
return false;
}try {
var other=rhs;
if (this.glyphs.length != other.glyphs.length) {
return false;
}for (var i=0; i < this.glyphs.length; ++i) {
if (this.glyphs[i] != other.glyphs[i]) {
return false;
}}
if (!this.font.equals$O(other.font)) {
return false;
}if (!this.frc.equals$java_awt_font_FontRenderContext(other.frc)) {
return false;
}if ((other.positions == null ) != (this.positions == null ) ) {
if (this.positions == null ) {
p$1.initPositions.apply(this, []);
} else {
p$1.initPositions.apply(other, []);
}}if (this.positions != null ) {
for (var i=0; i < this.positions.length; ++i) {
if (this.positions[i] != other.positions[i] ) {
return false;
}}
}if (this.gti == null ) {
return other.gti == null ;
} else {
return this.gti.equals$sun_font_StandardGlyphVector_GlyphTransformInfo(other.gti);
}} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.font.hashCode$() ^ this.glyphs.length;
});

Clazz.newMeth(C$, 'equals$O',  function (rhs) {
try {
return this.equals$java_awt_font_GlyphVector(rhs);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassCastException")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'copy$',  function () {
return this.clone$();
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
var result=Clazz.clone(this);
p$1.clearCaches.apply(result, []);
if (this.positions != null ) {
result.positions=this.positions.clone$();
}if (this.gti != null ) {
result.gti=Clazz.new_($I$(10,1).c$$sun_font_StandardGlyphVector$sun_font_StandardGlyphVector_GlyphTransformInfo,[result, this.gti]);
}return result;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
} else {
throw e;
}
}
return this;
});

Clazz.newMeth(C$, 'setGlyphPositions$FA$I$I$I',  function (srcPositions, srcStart, start, count) {
if (count < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["count = " + count]);
}p$1.initPositions.apply(this, []);
for (var i=start * 2, e=i + count * 2, p=srcStart; i < e; ++i, ++p) {
this.positions[i]=srcPositions[p];
}
p$1.clearCaches.apply(this, []);
p$1.addFlags$I.apply(this, [2]);
});

Clazz.newMeth(C$, 'setGlyphPositions$FA',  function (srcPositions) {
var requiredLength=this.glyphs.length * 2 + 2;
if (srcPositions.length != requiredLength) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["srcPositions.length != " + requiredLength]);
}this.positions=srcPositions.clone$();
p$1.clearCaches.apply(this, []);
p$1.addFlags$I.apply(this, [2]);
});

Clazz.newMeth(C$, 'getGlyphPositions$FA',  function (result) {
return p$1.internalGetGlyphPositions$I$I$I$FA.apply(this, [0, this.glyphs.length + 1, 0, result]);
});

Clazz.newMeth(C$, 'getGlyphTransforms$I$I$java_awt_geom_AffineTransformA',  function (start, count, result) {
if (start < 0 || count < 0  || start + count > this.glyphs.length ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["start: " + start + " count: " + count ]);
}if (this.gti == null ) {
return null;
}if (result == null ) {
result=Clazz.array($I$(1), [count]);
}for (var i=0; i < count; ++i, ++start) {
result[i]=this.gti.getGlyphTransform$I(start);
}
return result;
});

Clazz.newMeth(C$, 'getGlyphTransforms$',  function () {
return this.getGlyphTransforms$I$I$java_awt_geom_AffineTransformA(0, this.glyphs.length, null);
});

Clazz.newMeth(C$, 'setGlyphTransforms$java_awt_geom_AffineTransformA$I$I$I',  function (srcTransforms, srcStart, start, count) {
for (var i=start, e=start + count; i < e; ++i) {
this.setGlyphTransform$I$java_awt_geom_AffineTransform(i, srcTransforms[srcStart + i]);
}
});

Clazz.newMeth(C$, 'setGlyphTransforms$java_awt_geom_AffineTransformA',  function (srcTransforms) {
this.setGlyphTransforms$java_awt_geom_AffineTransformA$I$I$I(srcTransforms, 0, 0, this.glyphs.length);
});

Clazz.newMeth(C$, 'getGlyphInfo$',  function () {
p$1.setFRCTX.apply(this, []);
p$1.initPositions.apply(this, []);
var result=Clazz.array(Float.TYPE, [this.glyphs.length * 8]);
for (var i=0, n=0; i < this.glyphs.length; ++i, n+=8) {
var x=this.positions[i * 2];
var w=this.positions[i * 2 + 1];
result[n]=x;
result[n + 1]=0;
var glyphID=this.glyphs[i];
result[n + 2]=w;
result[n + 3]=0;
}
return result;
});

Clazz.newMeth(C$, 'pixellate$java_awt_font_FontRenderContext$java_awt_geom_Point2D$java_awt_Point',  function (renderFRC, loc, pxResult) {
if (renderFRC == null ) {
renderFRC=this.frc;
}var at=renderFRC.getTransform$();
at.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(loc, loc);
pxResult.x=(loc.getX$()|0);
pxResult.y=(loc.getY$()|0);
loc.setLocation$D$D(pxResult.x, pxResult.y);
try {
at.inverseTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(loc, loc);
} catch (e) {
if (Clazz.exceptionOf(e,"java.awt.geom.NoninvertibleTransformException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["must be able to invert frc transform"]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'needsPositions$DA',  function (devTX) {
return this.gti != null  || (this.getLayoutFlags$() & 2) != 0  || !C$.matchTX$DA$java_awt_geom_AffineTransform(devTX, this.frctx) ;
});

Clazz.newMeth(C$, 'setupGlyphImages$JA$FA$DA',  function (images, positions, devTX) {
p$1.initPositions.apply(this, []);
p$1.setRenderTransform$DA.apply(this, [devTX]);
if (this.gti != null ) {
return this.gti.setupGlyphImages$JA$FA$java_awt_geom_AffineTransform(images, positions, this.dtx);
}var gs=p$1.getDefaultStrike.apply(this, []);
gs.strike.getGlyphImagePtrs$IA$JA$I(this.glyphs, images, this.glyphs.length);
if (positions != null ) {
if (this.dtx.isIdentity$()) {
System.arraycopy$O$I$O$I$I(this.positions, 0, positions, 0, this.glyphs.length * 2);
} else {
this.dtx.transform$FA$I$FA$I$I(this.positions, 0, positions, 0, this.glyphs.length);
}}return gs;
});

Clazz.newMeth(C$, 'matchTX$DA$java_awt_geom_AffineTransform',  function (lhs, rhs) {
return lhs[0] == rhs.getScaleX$()  && lhs[1] == rhs.getShearY$()   && lhs[2] == rhs.getShearX$()   && lhs[3] == rhs.getScaleY$()  ;
}, 1);

Clazz.newMeth(C$, 'getNonTranslateTX$java_awt_geom_AffineTransform',  function (tx) {
if (tx.getTranslateX$() != 0  || tx.getTranslateY$() != 0  ) {
tx=Clazz.new_([tx.getScaleX$(), tx.getShearY$(), tx.getShearX$(), tx.getScaleY$(), 0, 0],$I$(1,1).c$$D$D$D$D$D$D);
}return tx;
}, 1);

Clazz.newMeth(C$, 'equalNonTranslateTX$java_awt_geom_AffineTransform$java_awt_geom_AffineTransform',  function (lhs, rhs) {
return lhs.getScaleX$() == rhs.getScaleX$()  && lhs.getShearY$() == rhs.getShearY$()   && lhs.getShearX$() == rhs.getShearX$()   && lhs.getScaleY$() == rhs.getScaleY$()  ;
}, 1);

Clazz.newMeth(C$, 'setRenderTransform$DA',  function (devTX) {
Clazz.assert(C$, this, function(){return (devTX.length == 4)});
if (!C$.matchTX$DA$java_awt_geom_AffineTransform(devTX, this.dtx)) {
p$1.resetDTX$java_awt_geom_AffineTransform.apply(this, [Clazz.new_($I$(1,1).c$$DA,[devTX])]);
}}, p$1);

Clazz.newMeth(C$, 'setDTX$java_awt_geom_AffineTransform',  function (tx) {
if (!C$.equalNonTranslateTX$java_awt_geom_AffineTransform$java_awt_geom_AffineTransform(this.dtx, tx)) {
p$1.resetDTX$java_awt_geom_AffineTransform.apply(this, [C$.getNonTranslateTX$java_awt_geom_AffineTransform(tx)]);
}}, p$1);

Clazz.newMeth(C$, 'setFRCTX',  function () {
if (!C$.equalNonTranslateTX$java_awt_geom_AffineTransform$java_awt_geom_AffineTransform(this.frctx, this.dtx)) {
p$1.resetDTX$java_awt_geom_AffineTransform.apply(this, [C$.getNonTranslateTX$java_awt_geom_AffineTransform(this.frctx)]);
}}, p$1);

Clazz.newMeth(C$, 'resetDTX$java_awt_geom_AffineTransform',  function (at) {
this.fsref=null;
this.dtx=at;
this.invdtx=null;
if (!this.dtx.isIdentity$()) {
try {
this.invdtx=this.dtx.createInverse$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.awt.geom.NoninvertibleTransformException")){
} else {
throw e;
}
}
}this.gti=null;
}, p$1);

Clazz.newMeth(C$, 'c$$java_awt_font_GlyphVector$java_awt_font_FontRenderContext',  function (gv, frc) {
Clazz.super_(C$, this);
this.font=gv.getFont$();
this.frc=frc;
p$1.initFontData.apply(this, []);
var nGlyphs=gv.getNumGlyphs$();
this.userGlyphs=gv.getGlyphCodes$I$I$IA(0, nGlyphs, null);
if (Clazz.instanceOf(gv, "sun.font.StandardGlyphVector")) {
this.glyphs=this.userGlyphs;
} else {
this.glyphs=this.getValidatedGlyphs$IA(this.userGlyphs);
}this.flags=gv.getLayoutFlags$() & 15;
if ((this.flags & 2) != 0) {
this.positions=gv.getGlyphPositions$I$I$FA(0, nGlyphs + 1, null);
}if ((this.flags & 8) != 0) {
this.charIndices=gv.getGlyphCharIndices$I$I$IA(0, nGlyphs, null);
}if ((this.flags & 1) != 0) {
var txs=Clazz.array($I$(1), [nGlyphs]);
for (var i=0; i < nGlyphs; ++i) {
txs[i]=gv.getGlyphTransform$I(i);
}
this.setGlyphTransforms$java_awt_geom_AffineTransformA(txs);
}}, 1);

Clazz.newMeth(C$, 'getValidatedGlyphs$IA',  function (oglyphs) {
var len=oglyphs.length;
var vglyphs=Clazz.array(Integer.TYPE, [len]);
for (var i=0; i < len; i++) {
vglyphs[i]=oglyphs[i];
}
return vglyphs;
});

Clazz.newMeth(C$, 'init$java_awt_Font$CA$I$I$java_awt_font_FontRenderContext$I',  function (font, text, start, count, frc, flags) {
if (start < 0 || count < 0  || start + count > text.length ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["start or count out of bounds"]);
}this.font=font;
this.frc=frc;
this.flags=flags;
if (p$1.getTracking$java_awt_Font.apply(this, [font]) != 0 ) {
p$1.addFlags$I.apply(this, [2]);
}if (start != 0) {
var temp=Clazz.array(Character.TYPE, [count]);
System.arraycopy$O$I$O$I$I(text, start, temp, 0, count);
text=temp;
}p$1.initFontData.apply(this, []);
this.glyphs=Clazz.array(Integer.TYPE, [count]);
this.userGlyphs=this.glyphs;
$I$(16).charsToGlyphs$I$CA$IA(count, text, this.glyphs);
}, p$1);

Clazz.newMeth(C$, 'initFontData',  function () {
var s=this.font.getSize2D$();
if (this.font.isTransformed$()) {
this.ftx=this.font.getTransform$();
if (this.ftx.getTranslateX$() != 0  || this.ftx.getTranslateY$() != 0  ) {
p$1.addFlags$I.apply(this, [2]);
}this.ftx.setTransform$D$D$D$D$D$D(this.ftx.getScaleX$(), this.ftx.getShearY$(), this.ftx.getShearX$(), this.ftx.getScaleY$(), 0, 0);
this.ftx.scale$D$D(s, s);
} else {
this.ftx=$I$(1).getScaleInstance$D$D(s, s);
}this.frctx=this.frc.getTransform$();
p$1.resetDTX$java_awt_geom_AffineTransform.apply(this, [C$.getNonTranslateTX$java_awt_geom_AffineTransform(this.frctx)]);
}, p$1);

Clazz.newMeth(C$, 'internalGetGlyphPositions$I$I$I$FA',  function (start, count, offset, result) {
if (result == null ) {
result=Clazz.array(Float.TYPE, [offset + count * 2]);
}p$1.initPositions.apply(this, []);
for (var i=offset, e=offset + count * 2, p=start * 2; i < e; ++i, ++p) {
result[i]=this.positions[p];
}
return result;
}, p$1);

Clazz.newMeth(C$, 'getGlyphOutlineBounds$I',  function (ix) {
p$1.setFRCTX.apply(this, []);
p$1.initPositions.apply(this, []);
return p$1.getGlyphStrike$I.apply(this, [ix]).getGlyphOutlineBounds$I$F$F(this.glyphs[ix], this.positions[ix * 2], this.positions[ix * 2 + 1] + this.font.getFontMetrics$().getHeight$());
}, p$1);

Clazz.newMeth(C$, 'getGlyphsOutline$I$I$F$F',  function (start, count, x, y) {
p$1.setFRCTX.apply(this, []);
p$1.initPositions.apply(this, []);
var h=$I$(16).fontAscent$java_awt_Font(this.font);
return Clazz.new_($I$(5,1).c$$F$F$F$F,[x + this.positions[start * 2], y + this.positions[start * 2 + 1] - h, this.positions[count * 2], this.positions[count * 2 + 1] + h]);
}, p$1);

Clazz.newMeth(C$, 'getGlyphsPixelBounds$java_awt_font_FontRenderContext$F$F$I$I',  function (frc, x, y, start, count) {
p$1.initPositions.apply(this, []);
var tx=null;
if (frc == null  || frc.equals$java_awt_font_FontRenderContext(this.frc) ) {
tx=this.frctx;
} else {
tx=frc.getTransform$();
}p$1.setDTX$java_awt_geom_AffineTransform.apply(this, [tx]);
if (this.gti != null ) {
return this.gti.getGlyphsPixelBounds$java_awt_geom_AffineTransform$F$F$I$I(tx, x, y, start, count);
}var fs=p$1.getDefaultStrike.apply(this, []).strike;
var result=null;
var r=Clazz.new_($I$(2,1));
var pt=Clazz.new_($I$(3,1));
var n=start * 2;
while (--count >= 0){
pt.x=x + this.positions[n++];
pt.y=y + this.positions[n++];
tx.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(pt, pt);
fs.getGlyphImageBounds$I$java_awt_geom_Point2D_Float$java_awt_Rectangle(this.glyphs[start++], pt, r);
if (!r.isEmpty$()) {
if (result == null ) {
result=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[r]);
} else {
result.add$java_awt_Rectangle(r);
}}}
return result != null  ? result : r;
}, p$1);

Clazz.newMeth(C$, 'clearCaches$I',  function (ix) {
if (this.lbcacheRef != null ) {
var lbcache=this.lbcacheRef;
if (lbcache != null ) {
lbcache[ix]=null;
}}if (this.vbcacheRef != null ) this.vbcacheRef[ix]=null;
}, p$1);

Clazz.newMeth(C$, 'clearCaches',  function () {
this.lbcacheRef=null;
this.vbcacheRef=null;
}, p$1);

Clazz.newMeth(C$, 'initPositions',  function () {
if (this.positions == null ) {
p$1.setFRCTX.apply(this, []);
this.positions=Clazz.array(Float.TYPE, [this.glyphs.length * 2 + 2]);
var trackPt=null;
var track=p$1.getTracking$java_awt_Font.apply(this, [this.font]);
if (track != 0 ) {
track*=this.font.getSize2D$();
trackPt=Clazz.new_($I$(3,1).c$$F$F,[track, 0]);
}var pt=Clazz.new_($I$(3,1).c$$F$F,[0, 0]);
if (this.font.isTransformed$()) {
var at=this.font.getTransform$();
at.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(pt, pt);
this.positions[0]=pt.x;
this.positions[1]=pt.y;
if (trackPt != null ) {
at.deltaTransform$java_awt_geom_Point2D$java_awt_geom_Point2D(trackPt, trackPt);
}}for (var i=0, n=2; i < this.glyphs.length; ++i, n+=2) {
p$1.getGlyphStrike$I.apply(this, [i]).addDefaultGlyphAdvance$I$java_awt_geom_Point2D_Float(this.glyphs[i], pt);
if (trackPt != null ) {
pt.x+=trackPt.x;
pt.y+=trackPt.y;
}this.positions[n]=pt.x;
this.positions[n + 1]=pt.y;
}
}}, p$1);

Clazz.newMeth(C$, 'addFlags$I',  function (newflags) {
this.flags=this.getLayoutFlags$() | newflags;
}, p$1);

Clazz.newMeth(C$, 'clearFlags$I',  function (clearedFlags) {
this.flags=this.getLayoutFlags$() & ~clearedFlags;
}, p$1);

Clazz.newMeth(C$, 'getGlyphStrike$I',  function (ix) {
if (this.gti == null ) {
return p$1.getDefaultStrike.apply(this, []);
} else {
return this.gti.getStrike$I(ix);
}}, p$1);

Clazz.newMeth(C$, 'getDefaultStrike',  function () {
var gs=null;
if (this.fsref != null ) {
gs=this.fsref;
}if (gs == null ) {
gs=$I$(4).create$sun_font_StandardGlyphVector$java_awt_geom_AffineTransform$java_awt_geom_AffineTransform(this, this.dtx, null);
this.fsref=gs;
}return gs;
}, p$1);

Clazz.newMeth(C$, 'toString',  function () {
return this.appendString$StringBuffer(null).toString();
});

Clazz.newMeth(C$, 'appendString$StringBuffer',  function (buf) {
if (buf == null ) {
buf=Clazz.new_($I$(6,1));
}try {
buf.append$S("SGV{font: ");
buf.append$S(this.font.toString());
buf.append$S(", frc: ");
buf.append$S(this.frc.toString());
buf.append$S(", glyphs: (");
buf.append$I(this.glyphs.length);
buf.append$S(")[");
for (var i=0; i < this.glyphs.length; ++i) {
if (i > 0) {
buf.append$S(", ");
}buf.append$S(Integer.toHexString$I(this.glyphs[i]));
}
buf.append$S("]");
if (this.positions != null ) {
buf.append$S(", positions: (");
buf.append$I(this.positions.length);
buf.append$S(")[");
for (var i=0; i < this.positions.length; i+=2) {
if (i > 0) {
buf.append$S(", ");
}buf.append$F(this.positions[i]);
buf.append$S("@");
buf.append$F(this.positions[i + 1]);
}
buf.append$S("]");
}if (this.charIndices != null ) {
buf.append$S(", indices: (");
buf.append$I(this.charIndices.length);
buf.append$S(")[");
for (var i=0; i < this.charIndices.length; ++i) {
if (i > 0) {
buf.append$S(", ");
}buf.append$I(this.charIndices[i]);
}
buf.append$S("]");
}buf.append$S(", flags:");
if (this.getLayoutFlags$() == 0) {
buf.append$S(" default");
} else {
if ((this.flags & 1) != 0) {
buf.append$S(" tx");
}if ((this.flags & 2) != 0) {
buf.append$S(" pos");
}if ((this.flags & 4) != 0) {
buf.append$S(" rtl");
}if ((this.flags & 8) != 0) {
buf.append$S(" complex");
}}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
buf.append$S(" " + e.getMessage$());
} else {
throw e;
}
}
buf.append$S("}");
return buf;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGlyphVector, "GlyphTransformInfo", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['haveAllStrikes'],'O',['sgv','sun.font.StandardGlyphVector','indices','int[]','transforms','double[]','strikesRef','sun.font.StandardGlyphVector.GlyphStrike[]']]]

Clazz.newMeth(C$, 'c$$sun_font_StandardGlyphVector',  function (sgv) {
;C$.$init$.apply(this);
this.sgv=sgv;
}, 1);

Clazz.newMeth(C$, 'c$$sun_font_StandardGlyphVector$sun_font_StandardGlyphVector_GlyphTransformInfo',  function (sgv, rhs) {
;C$.$init$.apply(this);
this.sgv=sgv;
this.indices=rhs.indices == null  ? null : rhs.indices.clone$();
this.transforms=rhs.transforms == null  ? null : rhs.transforms.clone$();
this.strikesRef=null;
}, 1);

Clazz.newMeth(C$, 'equals$sun_font_StandardGlyphVector_GlyphTransformInfo',  function (rhs) {
if (rhs == null ) {
return false;
}if (rhs === this ) {
return true;
}if (this.indices.length != rhs.indices.length) {
return false;
}if (this.transforms.length != rhs.transforms.length) {
return false;
}for (var i=0; i < this.indices.length; ++i) {
var tix=this.indices[i];
var rix=rhs.indices[i];
if ((tix == 0) != (rix == 0) ) {
return false;
}if (tix != 0) {
tix*=6;
rix*=6;
for (var j=6; j > 0; --j) {
if (this.indices[--tix] != rhs.indices[--rix]) {
return false;
}}
}}
return true;
});

Clazz.newMeth(C$, 'setGlyphTransform$I$java_awt_geom_AffineTransform',  function (glyphIndex, newTX) {
var temp=Clazz.array(Double.TYPE, [6]);
var isIdentity=true;
if (newTX == null  || newTX.isIdentity$() ) {
temp[0]=temp[3]=1.0;
} else {
isIdentity=false;
newTX.getMatrix$DA(temp);
}if (this.indices == null ) {
if (isIdentity) {
return;
}this.indices=Clazz.array(Integer.TYPE, [this.sgv.glyphs.length]);
this.indices[glyphIndex]=1;
this.transforms=temp;
} else {
var addSlot=false;
var newIndex=-1;
if (isIdentity) {
newIndex=0;
} else {
addSlot=true;
var i;
 loop : for (i=0; i < this.transforms.length; i+=6) {
for (var j=0; j < 6; ++j) {
if (this.transforms[i + j] != temp[j] ) {
continue loop;
}}
addSlot=false;
break;
}
newIndex=(i/6|0) + 1;
}var oldIndex=this.indices[glyphIndex];
if (newIndex != oldIndex) {
var removeSlot=false;
if (oldIndex != 0) {
removeSlot=true;
for (var i=0; i < this.indices.length; ++i) {
if (this.indices[i] == oldIndex && i != glyphIndex ) {
removeSlot=false;
break;
}}
}if (removeSlot && addSlot ) {
newIndex=oldIndex;
System.arraycopy$O$I$O$I$I(temp, 0, this.transforms, (newIndex - 1) * 6, 6);
} else if (removeSlot) {
if (this.transforms.length == 6) {
this.indices=null;
this.transforms=null;
p$1.clearCaches$I.apply(this.sgv, [glyphIndex]);
p$1.clearFlags$I.apply(this.sgv, [1]);
this.strikesRef=null;
return;
}var ttemp=Clazz.array(Double.TYPE, [this.transforms.length - 6]);
System.arraycopy$O$I$O$I$I(this.transforms, 0, ttemp, 0, (oldIndex - 1) * 6);
System.arraycopy$O$I$O$I$I(this.transforms, oldIndex * 6, ttemp, (oldIndex - 1) * 6, this.transforms.length - oldIndex * 6);
this.transforms=ttemp;
for (var i=0; i < this.indices.length; ++i) {
if (this.indices[i] > oldIndex) {
this.indices[i]-=1;
}}
if (newIndex > oldIndex) {
--newIndex;
}} else if (addSlot) {
var ttemp=Clazz.array(Double.TYPE, [this.transforms.length + 6]);
System.arraycopy$O$I$O$I$I(this.transforms, 0, ttemp, 0, this.transforms.length);
System.arraycopy$O$I$O$I$I(temp, 0, ttemp, this.transforms.length, 6);
this.transforms=ttemp;
}this.indices[glyphIndex]=newIndex;
}}p$1.clearCaches$I.apply(this.sgv, [glyphIndex]);
p$1.addFlags$I.apply(this.sgv, [1]);
this.strikesRef=null;
});

Clazz.newMeth(C$, 'getGlyphTransform$I',  function (ix) {
var index=this.indices[ix];
if (index == 0) {
return null;
}var x=(index - 1) * 6;
return Clazz.new_($I$(1,1).c$$D$D$D$D$D$D,[this.transforms[x + 0], this.transforms[x + 1], this.transforms[x + 2], this.transforms[x + 3], this.transforms[x + 4], this.transforms[x + 5]]);
});

Clazz.newMeth(C$, 'transformCount$',  function () {
if (this.transforms == null ) {
return 0;
}return (this.transforms.length/6|0);
});

Clazz.newMeth(C$, 'setupGlyphImages$JA$FA$java_awt_geom_AffineTransform',  function (images, positions, tx) {
var len=this.sgv.glyphs.length;
var sl=p$2.getAllStrikes.apply(this, []);
for (var i=0; i < len; ++i) {
var gs=sl[this.indices[i]];
var glyphID=this.sgv.glyphs[i];
images[i]=gs.strike.getGlyphImagePtr$I(glyphID);
gs.getGlyphPosition$I$I$FA$FA(glyphID, i * 2, this.sgv.positions, positions);
}
tx.transform$FA$I$FA$I$I(positions, 0, positions, 0, len);
return sl;
});

Clazz.newMeth(C$, 'getGlyphsPixelBounds$java_awt_geom_AffineTransform$F$F$I$I',  function (tx, x, y, start, count) {
var result=null;
var r=Clazz.new_($I$(2,1));
var pt=Clazz.new_($I$(3,1));
var n=start * 2;
while (--count >= 0){
var gs=this.getStrike$I(start);
pt.x=x + this.sgv.positions[n++] + gs.dx ;
pt.y=y + this.sgv.positions[n++] + gs.dy ;
tx.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(pt, pt);
gs.strike.getGlyphImageBounds$I$java_awt_geom_Point2D_Float$java_awt_Rectangle(this.sgv.glyphs[start++], pt, r);
if (!r.isEmpty$()) {
if (result == null ) {
result=Clazz.new_($I$(2,1).c$$java_awt_Rectangle,[r]);
} else {
result.add$java_awt_Rectangle(r);
}}}
return result != null  ? result : r;
});

Clazz.newMeth(C$, 'getStrike$I',  function (glyphIndex) {
if (this.indices != null ) {
var strikes=p$2.getStrikeArray.apply(this, []);
return p$2.getStrikeAtIndex$sun_font_StandardGlyphVector_GlyphStrikeA$I.apply(this, [strikes, this.indices[glyphIndex]]);
}return p$1.getDefaultStrike.apply(this.sgv, []);
});

Clazz.newMeth(C$, 'getAllStrikes',  function () {
if (this.indices == null ) {
return null;
}var strikes=p$2.getStrikeArray.apply(this, []);
if (!this.haveAllStrikes) {
for (var i=0; i < strikes.length; ++i) {
p$2.getStrikeAtIndex$sun_font_StandardGlyphVector_GlyphStrikeA$I.apply(this, [strikes, i]);
}
this.haveAllStrikes=true;
}return strikes;
}, p$2);

Clazz.newMeth(C$, 'getStrikeArray',  function () {
var strikes=null;
if (this.strikesRef != null ) {
strikes=this.strikesRef;
}if (strikes == null ) {
this.haveAllStrikes=false;
strikes=Clazz.array($I$(4), [this.transformCount$() + 1]);
this.strikesRef=strikes;
}return strikes;
}, p$2);

Clazz.newMeth(C$, 'getStrikeAtIndex$sun_font_StandardGlyphVector_GlyphStrikeA$I',  function (strikes, strikeIndex) {
var strike=strikes[strikeIndex];
if (strike == null ) {
if (strikeIndex == 0) {
strike=p$1.getDefaultStrike.apply(this.sgv, []);
} else {
var ix=(strikeIndex - 1) * 6;
var gtx=Clazz.new_($I$(1,1).c$$D$D$D$D$D$D,[this.transforms[ix], this.transforms[ix + 1], this.transforms[ix + 2], this.transforms[ix + 3], this.transforms[ix + 4], this.transforms[ix + 5]]);
strike=$I$(4).create$sun_font_StandardGlyphVector$java_awt_geom_AffineTransform$java_awt_geom_AffineTransform(this.sgv, this.sgv.dtx, gtx);
}strikes[strikeIndex]=strike;
}return strike;
}, p$2);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGlyphVector, "GlyphStrike", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['dx','dy'],'O',['sgv','sun.font.StandardGlyphVector','strike','sun.font.FontStrike']]]

Clazz.newMeth(C$, 'create$sun_font_StandardGlyphVector$java_awt_geom_AffineTransform$java_awt_geom_AffineTransform',  function (sgv, dtx, gtx) {
var dx=0;
var dy=0;
return null;
}, 1);

Clazz.newMeth(C$, 'layout$sun_font_Font2D$FA$I$I$sun_font_TextRecord$I$java_awt_geom_Point2D_Float$sun_font_GlyphLayout_GVData',  function (font2d, mat, gmask, baseIndex, tr, typo_flags, pt, data) {
var f=font2d;
var fm=f.getFontMetrics$();
var g2=0;
var x=0;
var y=0;
var w;
for (var g=0, p=tr.start; p < tr.limit; p++, g++) {
var ch=tr.text[p].$c();
if (Character.isHighSurrogate$C(String.fromCharCode(ch)) && p < tr.limit - 1  && Character.isLowSurrogate$C(tr.text[++p]) ) {
ch=Character.toCodePoint$C$C(String.fromCharCode(ch), tr.text[p]);
w=fm.getFloatWidth$I(ch);
} else if (ch > 255) {
w=fm.getFloatWidth$I(ch);
} else {
w=fm.getWidthsFloat$()[ch];
}data._indices[g]=p + baseIndex;
data._positions[g2++]=x;
data._positions[g2++]=y;
data._glyphs[g]=ch;
++data._count;
x+=w;
}
data._positions[g2++]=x;
data._positions[g2++]=y;
}, 1);

Clazz.newMeth(C$, 'c$$sun_font_StandardGlyphVector$sun_font_FontStrike$F$F',  function (sgv, strike, dx, dy) {
;C$.$init$.apply(this);
this.sgv=sgv;
this.strike=strike;
this.dx=dx;
this.dy=dy;
}, 1);

Clazz.newMeth(C$, 'getADL$sun_font_StandardGlyphVector_ADL',  function (result) {
var sm=this.strike.getFontMetrics$();
var delta=null;
if (this.sgv.font.isTransformed$()) {
delta=Clazz.new_($I$(3,1));
delta.x=this.sgv.font.getTransform$().getTranslateX$();
delta.y=this.sgv.font.getTransform$().getTranslateY$();
}result.ascentX=-sm.ascentX;
result.ascentY=-sm.ascentY;
result.descentX=sm.descentX;
result.descentY=sm.descentY;
result.leadingX=sm.leadingX;
result.leadingY=sm.leadingY;
});

Clazz.newMeth(C$, 'getGlyphPosition$I$I$FA$FA',  function (glyphID, ix, positions, result) {
result[ix]=positions[ix] + this.dx;
++ix;
result[ix]=positions[ix] + this.dy;
});

Clazz.newMeth(C$, 'addDefaultGlyphAdvance$I$java_awt_geom_Point2D_Float',  function (glyphID, result) {
var adv=this.strike.getGlyphMetrics$I(glyphID);
result.x+=adv.x + this.dx;
result.y+=adv.y + this.dy;
});

Clazz.newMeth(C$, 'getGlyphOutlineBounds$I$F$F',  function (glyphID, x, y) {
var result=null;
if (this.sgv.invdtx == null ) {
result=Clazz.new_($I$(5,1));
result.setRect$java_awt_geom_Rectangle2D(this.strike.getGlyphOutlineBounds$I(glyphID));
} else {
var gp=this.strike.getGlyphOutline$I$F$F(glyphID, 0, 0);
gp.transform$java_awt_geom_AffineTransform(this.sgv.invdtx);
result=gp.getBounds2D$();
}if (!result.isEmpty$()) {
result.setRect$D$D$D$D(result.getMinX$() + x + this.dx , result.getMinY$() + y + this.dy , result.getWidth$(), result.getHeight$());
}return result;
});

Clazz.newMeth(C$, 'appendGlyphOutline$I$java_awt_geom_GeneralPath$F$F',  function (glyphID, result, x, y) {
var gp=null;
if (this.sgv.invdtx == null ) {
gp=this.strike.getGlyphOutline$I$F$F(glyphID, x + this.dx, y + this.dy);
} else {
gp=this.strike.getGlyphOutline$I$F$F(glyphID, 0, 0);
gp.transform$java_awt_geom_AffineTransform(this.sgv.invdtx);
gp.transform$java_awt_geom_AffineTransform($I$(1).getTranslateInstance$D$D(x + this.dx, y + this.dy));
}var iterator=gp.getPathIterator$java_awt_geom_AffineTransform(null);
result.append$java_awt_geom_PathIterator$Z(iterator, false);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGlyphVector, "ADL", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['F',['ascentX','ascentY','descentX','descentY','leadingX','leadingY']]]

Clazz.newMeth(C$, 'toString',  function () {
return this.toStringBuffer$StringBuffer(null).toString();
});

Clazz.newMeth(C$, 'toStringBuffer$StringBuffer',  function (result) {
if (result == null ) {
result=Clazz.new_($I$(6,1));
}result.append$S("ax: ");
result.append$F(this.ascentX);
result.append$S(" ay: ");
result.append$F(this.ascentY);
result.append$S(" dx: ");
result.append$F(this.descentX);
result.append$S(" dy: ");
result.append$F(this.descentY);
result.append$S(" lx: ");
result.append$F(this.leadingX);
result.append$S(" ly: ");
result.append$F(this.leadingY);
return result;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
