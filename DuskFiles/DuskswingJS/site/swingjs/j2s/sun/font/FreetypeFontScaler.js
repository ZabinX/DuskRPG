(function(){var P$=Clazz.newPackage("sun.font"),p$1={},I$=[[0,'sun.font.FontManagerNativeLibrary','sun.font.FontScaler','sun.font.NullFontScaler']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FreetypeFontScaler", null, 'sun.font.FontScaler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'initIDs$Class',  function (FFS) {
alert('native method must be replaced! initIDs');
}
, 2);

Clazz.newMeth(C$, 'invalidateScaler',  function () {
this.nativeScaler=0;
this.font=null;
throw Clazz.new_(Clazz.load('sun.font.FontScalerException'));
}, p$1);

Clazz.newMeth(C$, 'getFontMetrics$J',  function (pScalerContext) {
if (Long.$ne(this.nativeScaler,0 )) {
return p$1.getFontMetricsNative$sun_font_Font2D$J$J.apply(this, [this.font.get$(), pScalerContext, this.nativeScaler]);
}return $I$(2).getNullScaler$().getFontMetrics$J(0);
});

Clazz.newMeth(C$, 'getGlyphAdvance$J$I',  function (pScalerContext, glyphCode) {
if (Long.$ne(this.nativeScaler,0 )) {
return p$1.getGlyphAdvanceNative$sun_font_Font2D$J$J$I.apply(this, [this.font.get$(), pScalerContext, this.nativeScaler, glyphCode]);
}return $I$(2).getNullScaler$().getGlyphAdvance$J$I(0, glyphCode);
});

Clazz.newMeth(C$, 'getGlyphMetrics$J$I$java_awt_geom_Point2D_Float',  function (pScalerContext, glyphCode, metrics) {
if (Long.$ne(this.nativeScaler,0 )) {
p$1.getGlyphMetricsNative$sun_font_Font2D$J$J$I$java_awt_geom_Point2D_Float.apply(this, [this.font.get$(), pScalerContext, this.nativeScaler, glyphCode, metrics]);
return;
}$I$(2).getNullScaler$().getGlyphMetrics$J$I$java_awt_geom_Point2D_Float(0, glyphCode, metrics);
});

Clazz.newMeth(C$, 'getGlyphImage$J$I',  function (pScalerContext, glyphCode) {
if (Long.$ne(this.nativeScaler,0 )) {
return p$1.getGlyphImageNative$sun_font_Font2D$J$J$I.apply(this, [this.font.get$(), pScalerContext, this.nativeScaler, glyphCode]);
}return $I$(2).getNullScaler$().getGlyphImage$J$I(0, glyphCode);
});

Clazz.newMeth(C$, 'getGlyphOutlineBounds$J$I',  function (pScalerContext, glyphCode) {
if (Long.$ne(this.nativeScaler,0 )) {
return p$1.getGlyphOutlineBoundsNative$sun_font_Font2D$J$J$I.apply(this, [this.font.get$(), pScalerContext, this.nativeScaler, glyphCode]);
}return $I$(2).getNullScaler$().getGlyphOutlineBounds$J$I(0, glyphCode);
});

Clazz.newMeth(C$, 'getGlyphOutline$J$I$F$F',  function (pScalerContext, glyphCode, x, y) {
if (Long.$ne(this.nativeScaler,0 )) {
return p$1.getGlyphOutlineNative$sun_font_Font2D$J$J$I$F$F.apply(this, [this.font.get$(), pScalerContext, this.nativeScaler, glyphCode, x, y]);
}return $I$(2).getNullScaler$().getGlyphOutline$J$I$F$F(0, glyphCode, x, y);
});

Clazz.newMeth(C$, 'getGlyphVectorOutline$J$IA$I$F$F',  function (pScalerContext, glyphs, numGlyphs, x, y) {
if (Long.$ne(this.nativeScaler,0 )) {
return p$1.getGlyphVectorOutlineNative$sun_font_Font2D$J$J$IA$I$F$F.apply(this, [this.font.get$(), pScalerContext, this.nativeScaler, glyphs, numGlyphs, x, y]);
}return $I$(2).getNullScaler$().getGlyphVectorOutline$J$IA$I$F$F(0, glyphs, numGlyphs, x, y);
});

Clazz.newMeth(C$, 'getLayoutTableCache$',  function () {
return p$1.getLayoutTableCacheNative$J.apply(this, [this.nativeScaler]);
});

Clazz.newMeth(C$, 'dispose$',  function () {
if (Long.$ne(this.nativeScaler,0 )) {
p$1.disposeNativeScaler$sun_font_Font2D$J.apply(this, [this.font.get$(), this.nativeScaler]);
this.nativeScaler=0;
}});

Clazz.newMeth(C$, 'getNumGlyphs$',  function () {
if (Long.$ne(this.nativeScaler,0 )) {
return p$1.getNumGlyphsNative$J.apply(this, [this.nativeScaler]);
}return $I$(2).getNullScaler$().getNumGlyphs$();
});

Clazz.newMeth(C$, 'getMissingGlyphCode$',  function () {
if (Long.$ne(this.nativeScaler,0 )) {
return p$1.getMissingGlyphCodeNative$J.apply(this, [this.nativeScaler]);
}return $I$(2).getNullScaler$().getMissingGlyphCode$();
});

Clazz.newMeth(C$, 'getGlyphCode$C',  function (charCode) {
if (Long.$ne(this.nativeScaler,0 )) {
return p$1.getGlyphCodeNative$sun_font_Font2D$J$C.apply(this, [this.font.get$(), this.nativeScaler, charCode]);
}return $I$(2).getNullScaler$().getGlyphCode$C(charCode);
});

Clazz.newMeth(C$, 'getGlyphPoint$J$I$I',  function (pScalerContext, glyphCode, ptNumber) {
if (Long.$ne(this.nativeScaler,0 )) {
return this.getGlyphPointNative$sun_font_Font2D$J$J$I$I(this.font.get$(), pScalerContext, this.nativeScaler, glyphCode, ptNumber);
}return $I$(2).getNullScaler$().getGlyphPoint$J$I$I(pScalerContext, glyphCode, ptNumber);
});

Clazz.newMeth(C$, 'getUnitsPerEm$',  function () {
return p$1.getUnitsPerEMNative$J.apply(this, [this.nativeScaler]);
});

Clazz.newMeth(C$, 'createScalerContext$DA$I$I$F$F$Z',  function (matrix, aa, fm, boldness, italic, disableHinting) {
if (Long.$ne(this.nativeScaler,0 )) {
return this.createScalerContextNative$J$DA$I$I$F$F(this.nativeScaler, matrix, aa, fm, boldness, italic);
}return $I$(3).getNullScalerContext$();
});

Clazz.newMeth(C$, 'initNativeScaler$sun_font_Font2D$I$I$Z$I',  function (font, type, indexInCollection, supportsCJK, filesize) {
alert('native method must be replaced! initNativeScaler');
}
, p$1);

Clazz.newMeth(C$, 'getFontMetricsNative$sun_font_Font2D$J$J',  function (font, pScalerContext, pScaler) {
alert('native method must be replaced! getFontMetricsNative');
}
, p$1);

Clazz.newMeth(C$, 'getGlyphAdvanceNative$sun_font_Font2D$J$J$I',  function (font, pScalerContext, pScaler, glyphCode) {
alert('native method must be replaced! getGlyphAdvanceNative');
}
, p$1);

Clazz.newMeth(C$, 'getGlyphMetricsNative$sun_font_Font2D$J$J$I$java_awt_geom_Point2D_Float',  function (font, pScalerContext, pScaler, glyphCode, metrics) {
alert('native method must be replaced! getGlyphMetricsNative');
}
, p$1);

Clazz.newMeth(C$, 'getGlyphImageNative$sun_font_Font2D$J$J$I',  function (font, pScalerContext, pScaler, glyphCode) {
alert('native method must be replaced! getGlyphImageNative');
}
, p$1);

Clazz.newMeth(C$, 'getGlyphOutlineBoundsNative$sun_font_Font2D$J$J$I',  function (font, pScalerContext, pScaler, glyphCode) {
alert('native method must be replaced! getGlyphOutlineBoundsNative');
}
, p$1);

Clazz.newMeth(C$, 'getGlyphOutlineNative$sun_font_Font2D$J$J$I$F$F',  function (font, pScalerContext, pScaler, glyphCode, x, y) {
alert('native method must be replaced! getGlyphOutlineNative');
}
, p$1);

Clazz.newMeth(C$, 'getGlyphVectorOutlineNative$sun_font_Font2D$J$J$IA$I$F$F',  function (font, pScalerContext, pScaler, glyphs, numGlyphs, x, y) {
alert('native method must be replaced! getGlyphVectorOutlineNative');
}
, p$1);

Clazz.newMeth(C$, 'getGlyphPointNative$sun_font_Font2D$J$J$I$I',  function (font, pScalerContext, pScaler, glyphCode, ptNumber) {
alert('native method must be replaced! getGlyphPointNative');
}
);

Clazz.newMeth(C$, 'getLayoutTableCacheNative$J',  function (pScaler) {
alert('native method must be replaced! getLayoutTableCacheNative');
}
, p$1);

Clazz.newMeth(C$, 'disposeNativeScaler$sun_font_Font2D$J',  function (font2D, pScaler) {
alert('native method must be replaced! disposeNativeScaler');
}
, p$1);

Clazz.newMeth(C$, 'getGlyphCodeNative$sun_font_Font2D$J$C',  function (font, pScaler, charCode) {
alert('native method must be replaced! getGlyphCodeNative');
}
, p$1);

Clazz.newMeth(C$, 'getNumGlyphsNative$J',  function (pScaler) {
alert('native method must be replaced! getNumGlyphsNative');
}
, p$1);

Clazz.newMeth(C$, 'getMissingGlyphCodeNative$J',  function (pScaler) {
alert('native method must be replaced! getMissingGlyphCodeNative');
}
, p$1);

Clazz.newMeth(C$, 'getUnitsPerEMNative$J',  function (pScaler) {
alert('native method must be replaced! getUnitsPerEMNative');
}
, p$1);

Clazz.newMeth(C$, 'createScalerContextNative$J$DA$I$I$F$F',  function (pScaler, matrix, aa, fm, boldness, italic) {
alert('native method must be replaced! createScalerContextNative');
}
);

Clazz.newMeth(C$, 'invalidateScalerContext$J',  function (pScalerContext) {
});

C$.$static$=function(){C$.$static$=0;
{
$I$(1).load$();
C$.initIDs$Class(Clazz.getClass(C$));
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
