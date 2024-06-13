(function(){var P$=Clazz.newPackage("java.awt.font"),I$=[[0,'java.awt.Rectangle','java.awt.geom.AffineTransform']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GlyphVector", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getGlyphCharIndex$I',  function (glyphIndex) {
return glyphIndex;
});

Clazz.newMeth(C$, 'getGlyphCharIndices$I$I$IA',  function (beginGlyphIndex, numEntries, codeReturn) {
if (codeReturn == null ) {
codeReturn=Clazz.array(Integer.TYPE, [numEntries]);
}for (var i=0, j=beginGlyphIndex; i < numEntries; ++i, ++j) {
codeReturn[i]=this.getGlyphCharIndex$I(j);
}
return codeReturn;
});

Clazz.newMeth(C$, 'getPixelBounds$java_awt_font_FontRenderContext$F$F',  function (renderFRC, x, y) {
var rect=this.getVisualBounds$();
var l=(Math.floor(rect.getX$() + x)|0);
var t=(Math.floor(rect.getY$() + y)|0);
var r=(Math.ceil(rect.getMaxX$() + x)|0);
var b=(Math.ceil(rect.getMaxY$() + y)|0);
return Clazz.new_($I$(1,1).c$$I$I$I$I,[l, t, r - l, b - t]);
});

Clazz.newMeth(C$, 'getGlyphOutline$I$F$F',  function (glyphIndex, x, y) {
var s=this.getGlyphOutline$I(glyphIndex);
var at=$I$(2).getTranslateInstance$D$D(x, y);
return at.createTransformedShape$java_awt_Shape(s);
});

Clazz.newMeth(C$, 'getLayoutFlags$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getGlyphPixelBounds$I$java_awt_font_FontRenderContext$F$F',  function (index, renderFRC, x, y) {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
