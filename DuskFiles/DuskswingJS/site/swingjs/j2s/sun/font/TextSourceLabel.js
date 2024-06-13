(function(){var P$=Clazz.newPackage("sun.font"),p$1={},I$=[[0,['java.awt.geom.Rectangle2D','.Float'],'sun.font.AttributeValues','swingjs.JSUtil']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TextSourceLabel", null, 'sun.font.TextLabel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['source','sun.font.TextSource','lb','java.awt.geom.Rectangle2D','+ab','+vb','+ib','gv','java.awt.font.GlyphVector']]]

Clazz.newMeth(C$, 'c$$sun_font_TextSource',  function (source) {
C$.c$$sun_font_TextSource$java_awt_geom_Rectangle2D$java_awt_geom_Rectangle2D$java_awt_font_GlyphVector.apply(this, [source, null, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$sun_font_TextSource$java_awt_geom_Rectangle2D$java_awt_geom_Rectangle2D$java_awt_font_GlyphVector',  function (source, lb, ab, gv) {
Clazz.super_(C$, this);
this.source=source;
this.lb=lb;
this.ab=ab;
this.gv=gv;
}, 1);

Clazz.newMeth(C$, 'getSource$',  function () {
return this.source;
});

Clazz.newMeth(C$, 'getLogicalBounds$F$F',  function (x, y) {
if (this.lb == null ) {
this.lb=this.createLogicalBounds$();
}return Clazz.new_([(this.lb.getX$() + x), (this.lb.getY$() + y), this.lb.getWidth$(), this.lb.getHeight$()],$I$(1,1).c$$F$F$F$F);
});

Clazz.newMeth(C$, 'getVisualBounds$F$F',  function (x, y) {
if (this.vb == null ) {
this.vb=this.createVisualBounds$();
}return Clazz.new_([(this.vb.getX$() + x), (this.vb.getY$() + y), this.vb.getWidth$(), this.vb.getHeight$()],$I$(1,1).c$$F$F$F$F);
});

Clazz.newMeth(C$, 'getAlignBounds$F$F',  function (x, y) {
if (this.ab == null ) {
this.ab=this.createAlignBounds$();
}return Clazz.new_([(this.ab.getX$() + x), (this.ab.getY$() + y), this.ab.getWidth$(), this.ab.getHeight$()],$I$(1,1).c$$F$F$F$F);
});

Clazz.newMeth(C$, 'getItalicBounds$F$F',  function (x, y) {
if (this.ib == null ) {
this.ib=this.createItalicBounds$();
}return Clazz.new_([(this.ib.getX$() + x), (this.ib.getY$() + y), this.ib.getWidth$(), this.ib.getHeight$()],$I$(1,1).c$$F$F$F$F);
});

Clazz.newMeth(C$, 'getPixelBounds$java_awt_font_FontRenderContext$F$F',  function (frc, x, y) {
return p$1.getGV.apply(this, []).getPixelBounds$java_awt_font_FontRenderContext$F$F(frc, x, y);
});

Clazz.newMeth(C$, 'getBaselineTransform$',  function () {
var font=this.source.getFont$();
if (font.hasLayoutAttributes$()) {
return $I$(2,"getBaselineTransform$java_util_Map",[font.getAttributes$()]);
}return null;
});

Clazz.newMeth(C$, 'getOutline$F$F',  function (x, y) {
return p$1.getGV.apply(this, []).getOutline$F$F(x, y);
});

Clazz.newMeth(C$, 'draw$java_awt_Graphics2D$F$F',  function (g, x, y) {
$I$(3).notImplemented$S(null);
});

Clazz.newMeth(C$, 'createLogicalBounds$',  function () {
return p$1.getGV.apply(this, []).getLogicalBounds$();
});

Clazz.newMeth(C$, 'createVisualBounds$',  function () {
return p$1.getGV.apply(this, []).getVisualBounds$();
});

Clazz.newMeth(C$, 'createItalicBounds$',  function () {
return p$1.getGV.apply(this, []).getLogicalBounds$();
});

Clazz.newMeth(C$, 'createAlignBounds$',  function () {
return this.createLogicalBounds$();
});

Clazz.newMeth(C$, 'getGV',  function () {
$I$(3).notImplemented$S(null);
return null;
}, p$1);

Clazz.newMeth(C$, 'createGV$',  function () {
$I$(3).notImplemented$S(null);
return this.gv;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
