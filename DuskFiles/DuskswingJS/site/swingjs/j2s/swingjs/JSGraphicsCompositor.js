(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'sun.awt.image.SunWritableRaster']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSGraphicsCompositor");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['mat6','double[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setGraphicsCompositeAlpha$swingjs_JSGraphics2D$I',  function (g, alphaRule) {
var s=null;
switch (alphaRule) {
default:
case 3:
s="source-over";
break;
case 5:
s="source-in";
break;
case 7:
s="source-out";
break;
case 10:
s="source-atop";
break;
case 12:
s="xor";
break;
case 4:
s="destination-over";
break;
case 6:
s="destination-in";
break;
case 8:
s="destination-out";
break;
case 11:
s="destination-atop";
break;
}
{
g.ctx.globalCompositeOperation = s;
}
return true;
}, 1);

Clazz.newMeth(C$, 'drawImageOp$swingjs_JSGraphics2D$java_awt_image_BufferedImage$java_awt_image_BufferedImageOp$I$I',  function (g, img, op, x, y) {
var type=op.swingJStype ||0;
switch (type) {
case 82:
var rop=op;
var offsets=rop.getOffsets$FA(null);
var scaleFactors=rop.getScaleFactors$FA(null);
var canDo=(offsets.length == 4 && offsets[3] == 0  );
if (canDo) for (var i=0; i < 3; i++) if (offsets[i] != 0  || scaleFactors[i] != 1  ) {
canDo=false;
break;
}
if (canDo) {
g.setAlpha$F(scaleFactors[3]);
g.drawImageFromPixelsOrRaster$java_awt_Image$I$I$java_awt_image_ImageObserver(img, x, y, null);
g.setAlpha$F(1);
return true;
}break;
case 76:
break;
case 65:
break;
case 67:
break;
}
return false;
}, 1);

Clazz.newMeth(C$, 'filterRaster$java_awt_image_Raster$java_awt_image_WritableRaster$java_awt_image_RasterOp',  function (src, dst, op) {
if (dst == null ) {
dst=op.createCompatibleDestRaster$java_awt_image_Raster(src);
}var retRaster=null;
var type=0;
{
type = op.swingJStype;
}
switch (type) {
case 76:
var table=(op).getTable$();
if (Clazz.instanceOf(table, "java.awt.image.ByteLookupTable")) {
var bt=table;
if (C$.lookupByteRaster$java_awt_image_Raster$java_awt_image_WritableRaster$BAA(src, dst, bt.getTable$()) > 0) {
retRaster=dst;
}}break;
case 65:
var bOp=op;
var matrix=(C$.mat6 == null  ? C$.mat6=Clazz.array(Double.TYPE, [6]) : C$.mat6);
bOp.getTransform$().getMatrix$DA(matrix);
if (C$.transformRaster$java_awt_image_Raster$java_awt_image_WritableRaster$DA$I(src, dst, matrix, bOp.getInterpolationType$()) > 0) {
retRaster=dst;
}break;
case 67:
var cOp=op;
if (C$.convolveRaster$java_awt_image_Raster$java_awt_image_WritableRaster$java_awt_image_Kernel$I(src, dst, cOp.getKernel$(), cOp.getEdgeCondition$()) > 0) {
retRaster=dst;
}break;
default:
break;
}
if (retRaster != null ) {
$I$(1).markDirty$java_awt_image_WritableRaster(retRaster);
}return retRaster;
}, 1);

Clazz.newMeth(C$, 'convolveRaster$java_awt_image_Raster$java_awt_image_WritableRaster$java_awt_image_Kernel$I',  function (src, dst, kernel, edgeCondition) {
return 0;
}, 1);

Clazz.newMeth(C$, 'transformRaster$java_awt_image_Raster$java_awt_image_WritableRaster$DA$I',  function (src, dst, matrix, interpolationType) {
return 0;
}, 1);

Clazz.newMeth(C$, 'lookupByteRaster$java_awt_image_Raster$java_awt_image_WritableRaster$BAA',  function (src, dst, table) {
return 0;
}, 1);

Clazz.newMeth(C$, 'filterImage$java_awt_image_BufferedImage$java_awt_image_BufferedImage$java_awt_image_BufferedImageOp',  function (src, dst, op) {
var retBI=null;
var type=0;
{
type = op.swingJStype;
}
switch (type) {
default:
retBI=op.filter$java_awt_image_BufferedImage$java_awt_image_BufferedImage(src, dst);
break;
case 65:
var g=dst.秘getImageGraphic$();
g.drawImage$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver(src, (op).getTransform$(), null);
retBI=dst;
break;
case 76:
var table=(op).getTable$();
if (table.getOffset$() != 0) {
return null;
}if (Clazz.instanceOf(table, "java.awt.image.ByteLookupTable")) {
var bt=table;
if (C$.lookupByteBI$java_awt_image_BufferedImage$java_awt_image_BufferedImage$BAA(src, dst, bt.getTable$()) > 0) {
retBI=dst;
}}break;
case 67:
var cOp=op;
if (C$.convolveBI$java_awt_image_BufferedImage$java_awt_image_BufferedImage$java_awt_image_Kernel$I(src, dst, cOp.getKernel$(), cOp.getEdgeCondition$()) > 0) {
retBI=dst;
}break;
}
return retBI;
}, 1);

Clazz.newMeth(C$, 'convolveBI$java_awt_image_BufferedImage$java_awt_image_BufferedImage$java_awt_image_Kernel$I',  function (src, dst, kernel, edgeCondition) {
return 0;
}, 1);

Clazz.newMeth(C$, 'lookupByteBI$java_awt_image_BufferedImage$java_awt_image_BufferedImage$BAA',  function (src, dst, table) {
return 0;
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:59 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
