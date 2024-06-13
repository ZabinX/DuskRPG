(function(){var P$=Clazz.newPackage("sun.font"),p$1={},I$=[[0,'sun.font.BidiUtils','InternalError',['java.awt.geom.Rectangle2D','.Float'],'sun.font.CoreMetrics','java.awt.geom.AffineTransform','java.awt.geom.GeneralPath']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GraphicComponent", null, null, ['sun.font.TextLineComponent', ['sun.font.Decoration','sun.font.Decoration.Label']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.visualBounds=null;
},1);

C$.$fields$=[['F',['graphicAdvance'],'I',['graphicCount'],'O',['graphic','java.awt.font.GraphicAttribute','charsLtoV','int[]','levels','byte[]','visualBounds','java.awt.geom.Rectangle2D','baseTx','java.awt.geom.AffineTransform','cm','sun.font.CoreMetrics','decorator','sun.font.Decoration']]]

Clazz.newMeth(C$, 'c$$java_awt_font_GraphicAttribute$sun_font_Decoration$IA$BA$I$I$java_awt_geom_AffineTransform',  function (graphic, decorator, charsLtoV, levels, start, limit, baseTx) {
;C$.$init$.apply(this);
if (limit <= start) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["0 or negative length in GraphicComponent"]);
}this.graphic=graphic;
this.graphicAdvance=graphic.getAdvance$();
this.decorator=decorator;
this.cm=C$.createCoreMetrics$java_awt_font_GraphicAttribute(graphic);
this.baseTx=baseTx;
p$1.initLocalOrdering$IA$BA$I$I.apply(this, [charsLtoV, levels, start, limit]);
}, 1);

Clazz.newMeth(C$, 'c$$sun_font_GraphicComponent$I$I$I',  function (parent, start, limit, dir) {
;C$.$init$.apply(this);
this.graphic=parent.graphic;
this.graphicAdvance=parent.graphicAdvance;
this.decorator=parent.decorator;
this.cm=parent.cm;
this.baseTx=parent.baseTx;
var charsLtoV=null;
var levels=null;
if (dir == 2) {
charsLtoV=parent.charsLtoV;
levels=parent.levels;
} else if (dir == 0 || dir == 1 ) {
limit-=start;
start=0;
if (dir == 1) {
charsLtoV=Clazz.array(Integer.TYPE, [limit]);
levels=Clazz.array(Byte.TYPE, [limit]);
for (var i=0; i < limit; i++) {
charsLtoV[i]=limit - i - 1 ;
levels[i]=1;
}
}} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid direction flag"]);
}p$1.initLocalOrdering$IA$BA$I$I.apply(this, [charsLtoV, levels, start, limit]);
}, 1);

Clazz.newMeth(C$, 'initLocalOrdering$IA$BA$I$I',  function (charsLtoV, levels, start, limit) {
this.graphicCount=limit - start;
if (charsLtoV == null  || charsLtoV.length == this.graphicCount ) {
this.charsLtoV=charsLtoV;
} else {
this.charsLtoV=$I$(1).createNormalizedMap$IA$BA$I$I(charsLtoV, levels, start, limit);
}if (levels == null  || levels.length == this.graphicCount ) {
this.levels=levels;
} else {
this.levels=Clazz.array(Byte.TYPE, [this.graphicCount]);
System.arraycopy$O$I$O$I$I(levels, start, this.levels, 0, this.graphicCount);
}}, p$1);

Clazz.newMeth(C$, 'isSimple$',  function () {
return false;
});

Clazz.newMeth(C$, 'getPixelBounds$java_awt_font_FontRenderContext$F$F',  function (frc, x, y) {
throw Clazz.new_($I$(2,1).c$$S,["do not call if isSimple returns false"]);
});

Clazz.newMeth(C$, 'handleGetVisualBounds$',  function () {
var bounds=this.graphic.getBounds$();
var width=bounds.getWidth$() + this.graphicAdvance * (this.graphicCount - 1);
return Clazz.new_([bounds.getX$(), bounds.getY$(), width, bounds.getHeight$()],$I$(3,1).c$$F$F$F$F);
});

Clazz.newMeth(C$, 'getCoreMetrics$',  function () {
return this.cm;
});

Clazz.newMeth(C$, 'createCoreMetrics$java_awt_font_GraphicAttribute',  function (graphic) {
return Clazz.new_([graphic.getAscent$(), graphic.getDescent$(), 2.0, graphic.getAscent$() + graphic.getDescent$() + 2.0 , graphic.getAlignment$(), Clazz.array(Float.TYPE, -1, [0, -graphic.getAscent$() / 2, -graphic.getAscent$()]), -graphic.getAscent$() / 2, graphic.getAscent$() / 12, graphic.getDescent$() / 3, graphic.getAscent$() / 12, 0, 0],$I$(4,1).c$$F$F$F$F$I$FA$F$F$F$F$F$F);
}, 1);

Clazz.newMeth(C$, 'getItalicAngle$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getVisualBounds$',  function () {
if (this.visualBounds == null ) {
this.visualBounds=this.decorator.getVisualBounds$sun_font_Decoration_Label(this);
}var bounds=Clazz.new_($I$(3,1));
bounds.setRect$java_awt_geom_Rectangle2D(this.visualBounds);
return bounds;
});

Clazz.newMeth(C$, 'handleGetOutline$F$F',  function (x, y) {
var matrix=Clazz.array(Double.TYPE, -1, [1, 0, 0, 1, x, y]);
if (this.graphicCount == 1) {
var tx=Clazz.new_($I$(5,1).c$$DA,[matrix]);
return this.graphic.getOutline$java_awt_geom_AffineTransform(tx);
}var gp=Clazz.new_($I$(6,1));
for (var i=0; i < this.graphicCount; ++i) {
var tx=Clazz.new_($I$(5,1).c$$DA,[matrix]);
gp.append$java_awt_Shape$Z(this.graphic.getOutline$java_awt_geom_AffineTransform(tx), false);
matrix[4]+=this.graphicAdvance;
}
return gp;
});

Clazz.newMeth(C$, 'getBaselineTransform$',  function () {
return this.baseTx;
});

Clazz.newMeth(C$, 'getOutline$F$F',  function (x, y) {
return this.decorator.getOutline$sun_font_Decoration_Label$F$F(this, x, y);
});

Clazz.newMeth(C$, 'handleDraw$java_awt_Graphics2D$F$F',  function (g2d, x, y) {
for (var i=0; i < this.graphicCount; i++) {
this.graphic.draw$java_awt_Graphics2D$F$F(g2d, x, y);
x+=this.graphicAdvance;
}
});

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$F$F',  function (g2d, x, y) {
this.decorator.drawTextAndDecorations$sun_font_Decoration_Label$java_awt_Graphics2D$F$F(this, g2d, x, y);
});

Clazz.newMeth(C$, 'getCharVisualBounds$I',  function (index) {
return this.decorator.getCharVisualBounds$sun_font_Decoration_Label$I(this, index);
});

Clazz.newMeth(C$, 'getNumCharacters$',  function () {
return this.graphicCount;
});

Clazz.newMeth(C$, 'getCharX$I',  function (index) {
var visIndex=this.charsLtoV == null  ? index : this.charsLtoV[index];
return this.graphicAdvance * visIndex;
});

Clazz.newMeth(C$, 'getCharY$I',  function (index) {
return 0;
});

Clazz.newMeth(C$, 'getCharAdvance$I',  function (index) {
return this.graphicAdvance;
});

Clazz.newMeth(C$, 'caretAtOffsetIsValid$I',  function (index) {
return true;
});

Clazz.newMeth(C$, 'handleGetCharVisualBounds$I',  function (index) {
var bounds=this.graphic.getBounds$();
var charBounds=Clazz.new_($I$(3,1));
charBounds.setRect$java_awt_geom_Rectangle2D(bounds);
charBounds.x+=this.graphicAdvance * index;
return charBounds;
});

Clazz.newMeth(C$, 'getLineBreakIndex$I$F',  function (start, width) {
var index=((width / this.graphicAdvance)|0);
if (index > this.graphicCount - start) {
index=this.graphicCount - start;
}return index;
});

Clazz.newMeth(C$, 'getAdvanceBetween$I$I',  function (start, limit) {
return this.graphicAdvance * (limit - start);
});

Clazz.newMeth(C$, 'getLogicalBounds$',  function () {
var left=0;
var top=-this.cm.ascent;
var width=this.graphicAdvance * this.graphicCount;
var height=this.cm.descent - top;
return Clazz.new_($I$(3,1).c$$F$F$F$F,[left, top, width, height]);
});

Clazz.newMeth(C$, 'getAdvance$',  function () {
return this.graphicAdvance * this.graphicCount;
});

Clazz.newMeth(C$, 'getItalicBounds$',  function () {
return this.getLogicalBounds$();
});

Clazz.newMeth(C$, 'getSubset$I$I$I',  function (start, limit, dir) {
if (start < 0 || limit > this.graphicCount  || start >= limit ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid range.  start=" + start + "; limit=" + limit ]);
}if (start == 0 && limit == this.graphicCount  && dir == 2 ) {
return this;
}return Clazz.new_(C$.c$$sun_font_GraphicComponent$I$I$I,[this, start, limit, dir]);
});

Clazz.newMeth(C$, 'toString',  function () {
return "[graphic=" + this.graphic + ":count=" + this.getNumCharacters$() + "]" ;
});

Clazz.newMeth(C$, 'getNumJustificationInfos$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getJustificationInfos$java_awt_font_GlyphJustificationInfoA$I$I$I',  function (infos, infoStart, charStart, charLimit) {
});

Clazz.newMeth(C$, 'applyJustificationDeltas$FA$I$ZA',  function (deltas, deltaStart, flags) {
return this;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
