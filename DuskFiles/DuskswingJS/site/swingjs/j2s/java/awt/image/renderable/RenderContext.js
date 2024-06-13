(function(){var P$=Clazz.newPackage("java.awt.image.renderable"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RenderContext", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['hints','java.awt.RenderingHints','usr2dev','java.awt.geom.AffineTransform','aoi','java.awt.Shape']]]

Clazz.newMeth(C$, 'c$$java_awt_geom_AffineTransform$java_awt_Shape$java_awt_RenderingHints',  function (usr2dev, aoi, hints) {
;C$.$init$.apply(this);
this.hints=hints;
this.aoi=aoi;
this.usr2dev=usr2dev.clone$();
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_AffineTransform',  function (usr2dev) {
C$.c$$java_awt_geom_AffineTransform$java_awt_Shape$java_awt_RenderingHints.apply(this, [usr2dev, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_AffineTransform$java_awt_RenderingHints',  function (usr2dev, hints) {
C$.c$$java_awt_geom_AffineTransform$java_awt_Shape$java_awt_RenderingHints.apply(this, [usr2dev, null, hints]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_AffineTransform$java_awt_Shape',  function (usr2dev, aoi) {
C$.c$$java_awt_geom_AffineTransform$java_awt_Shape$java_awt_RenderingHints.apply(this, [usr2dev, aoi, null]);
}, 1);

Clazz.newMeth(C$, 'getRenderingHints$',  function () {
return this.hints;
});

Clazz.newMeth(C$, 'setRenderingHints$java_awt_RenderingHints',  function (hints) {
this.hints=hints;
});

Clazz.newMeth(C$, 'setTransform$java_awt_geom_AffineTransform',  function (newTransform) {
this.usr2dev=newTransform.clone$();
});

Clazz.newMeth(C$, 'preConcatenateTransform$java_awt_geom_AffineTransform',  function (modTransform) {
this.preConcetenateTransform$java_awt_geom_AffineTransform(modTransform);
});

Clazz.newMeth(C$, 'preConcetenateTransform$java_awt_geom_AffineTransform',  function (modTransform) {
this.usr2dev.preConcatenate$java_awt_geom_AffineTransform(modTransform);
});

Clazz.newMeth(C$, 'concatenateTransform$java_awt_geom_AffineTransform',  function (modTransform) {
this.concetenateTransform$java_awt_geom_AffineTransform(modTransform);
});

Clazz.newMeth(C$, 'concetenateTransform$java_awt_geom_AffineTransform',  function (modTransform) {
this.usr2dev.concatenate$java_awt_geom_AffineTransform(modTransform);
});

Clazz.newMeth(C$, 'getTransform$',  function () {
return this.usr2dev.clone$();
});

Clazz.newMeth(C$, 'setAreaOfInterest$java_awt_Shape',  function (newAoi) {
this.aoi=newAoi;
});

Clazz.newMeth(C$, 'getAreaOfInterest$',  function () {
return this.aoi;
});

Clazz.newMeth(C$, 'clone$',  function () {
var newRenderContext=Clazz.new_(C$.c$$java_awt_geom_AffineTransform$java_awt_Shape$java_awt_RenderingHints,[this.usr2dev, this.aoi, this.hints]);
return newRenderContext;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:13 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
