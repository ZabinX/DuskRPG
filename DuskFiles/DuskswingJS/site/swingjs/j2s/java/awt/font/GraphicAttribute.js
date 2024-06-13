(function(){var P$=Clazz.newPackage("java.awt.font"),I$=[[0,['java.awt.geom.Rectangle2D','.Float'],'java.awt.font.GlyphJustificationInfo']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GraphicAttribute");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['fAlignment']]]

Clazz.newMeth(C$, 'c$$I',  function (alignment) {
;C$.$init$.apply(this);
if (alignment < -2 || alignment > 2 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad alignment"]);
}this.fAlignment=alignment;
}, 1);

Clazz.newMeth(C$, 'getBounds$',  function () {
var ascent=this.getAscent$();
return Clazz.new_([0, -ascent, this.getAdvance$(), ascent + this.getDescent$()],$I$(1,1).c$$F$F$F$F);
});

Clazz.newMeth(C$, 'getOutline$java_awt_geom_AffineTransform',  function (tx) {
var b=this.getBounds$();
if (tx != null ) {
b=tx.createTransformedShape$java_awt_Shape(b);
}return b;
});

Clazz.newMeth(C$, 'getAlignment$',  function () {
return this.fAlignment;
});

Clazz.newMeth(C$, 'getJustificationInfo$',  function () {
var advance=this.getAdvance$();
return Clazz.new_($I$(2,1).c$$F$Z$I$F$F$Z$I$F$F,[advance, false, 2, advance / 3, advance / 3, false, 1, 0, 0]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:09 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
