(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[[0,'java.awt.RenderingHints','sun.awt.image.ImagingLib','java.awt.AlphaComposite',['java.awt.geom.Rectangle2D','.Float'],'java.awt.image.BufferedImage','InternalError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AffineTransformOp", null, null, ['java.awt.image.BufferedImageOp', 'java.awt.image.RasterOp']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.swingJStype="A".$c();
this.interpolationType=1;
},1);

C$.$fields$=[['I',['swingJStype','interpolationType'],'O',['xform','java.awt.geom.AffineTransform','hints','java.awt.RenderingHints']]]

Clazz.newMeth(C$, 'c$$java_awt_geom_AffineTransform$java_awt_RenderingHints',  function (xform, hints) {
;C$.$init$.apply(this);
this.validateTransform$java_awt_geom_AffineTransform(xform);
this.xform=xform.clone$();
this.hints=hints;
if (hints != null ) {
var value=hints.get$O($I$(1).KEY_INTERPOLATION);
if (value == null ) {
value=hints.get$O($I$(1).KEY_RENDERING);
if (value === $I$(1).VALUE_RENDER_SPEED ) {
this.interpolationType=1;
} else if (value === $I$(1).VALUE_RENDER_QUALITY ) {
this.interpolationType=2;
}} else if (value === $I$(1).VALUE_INTERPOLATION_NEAREST_NEIGHBOR ) {
this.interpolationType=1;
} else if (value === $I$(1).VALUE_INTERPOLATION_BILINEAR ) {
this.interpolationType=2;
} else if (value === $I$(1).VALUE_INTERPOLATION_BICUBIC ) {
this.interpolationType=3;
}} else {
this.interpolationType=1;
}}, 1);

Clazz.newMeth(C$, 'c$$java_awt_geom_AffineTransform$I',  function (xform, interpolationType) {
;C$.$init$.apply(this);
this.validateTransform$java_awt_geom_AffineTransform(xform);
this.xform=xform.clone$();
switch (interpolationType) {
case 1:
case 2:
case 3:
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown interpolation type: " + interpolationType]);
}
this.interpolationType=interpolationType;
}, 1);

Clazz.newMeth(C$, 'getInterpolationType$',  function () {
return this.interpolationType;
});

Clazz.newMeth(C$, 'filter$java_awt_image_BufferedImage$java_awt_image_BufferedImage',  function (src, dst) {
if (src == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["src image is null"]);
}if (src === dst ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["src image cannot be the same as the dst image"]);
}var srcCM=src.getColorModel$();
var dstCM;
var origDst=dst;
if (dst == null ) {
dst=this.createCompatibleDestImage$java_awt_image_BufferedImage$java_awt_image_ColorModel(src, null);
dstCM=srcCM;
origDst=dst;
} else {
dstCM=dst.getColorModel$();
if (srcCM.getColorSpace$().getType$() != dstCM.getColorSpace$().getType$()) {
throw Clazz.new_(Clazz.load('java.awt.image.ImagingOpException').c$$S,["SwingJS: Unable to transform src image"]);
}}if ($I$(2).filter$java_awt_image_BufferedImageOp$java_awt_image_BufferedImage$java_awt_image_BufferedImage(this, src, dst) == null ) {
dst=src;
System.out.println$S("Unable to transform src image");
}if (origDst !== dst ) {
var g=origDst.createGraphics$();
try {
g.setComposite$java_awt_Composite($I$(3).Src);
(g).drawImageFromPixelsOrRaster$java_awt_Image$I$I$java_awt_image_ImageObserver(dst, 0, 0, null);
} finally {
g.dispose$();
}
}return origDst;
});

Clazz.newMeth(C$, 'filter$java_awt_image_Raster$java_awt_image_WritableRaster',  function (src, dst) {
if (src == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["src image is null"]);
}if (dst == null ) {
dst=this.createCompatibleDestRaster$java_awt_image_Raster(src);
}if (src === dst ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["src image cannot be the same as the dst image"]);
}if (src.getNumBands$() != dst.getNumBands$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of src bands (" + src.getNumBands$() + ") does not match number of " + " dst bands (" + dst.getNumBands$() + ")" ]);
}if ($I$(2).filter$java_awt_image_RasterOp$java_awt_image_Raster$java_awt_image_WritableRaster(this, src, dst) == null ) {
throw Clazz.new_(Clazz.load('java.awt.image.ImagingOpException').c$$S,["Unable to transform src image"]);
}return dst;
});

Clazz.newMeth(C$, 'getBounds2D$java_awt_image_BufferedImage',  function (src) {
return this.getBounds2D$java_awt_image_Raster(src.getRaster$());
});

Clazz.newMeth(C$, 'getBounds2D$java_awt_image_Raster',  function (src) {
var w=src.getWidth$();
var h=src.getHeight$();
var pts=Clazz.array(Float.TYPE, -1, [0, 0, w, 0, w, h, 0, h]);
this.xform.transform$FA$I$FA$I$I(pts, 0, pts, 0, 4);
var fmaxX=pts[0];
var fmaxY=pts[1];
var fminX=pts[0];
var fminY=pts[1];
for (var i=2; i < 8; i+=2) {
if (pts[i] > fmaxX ) {
fmaxX=pts[i];
} else if (pts[i] < fminX ) {
fminX=pts[i];
}if (pts[i + 1] > fmaxY ) {
fmaxY=pts[i + 1];
} else if (pts[i + 1] < fminY ) {
fminY=pts[i + 1];
}}
return Clazz.new_($I$(4,1).c$$F$F$F$F,[fminX, fminY, fmaxX - fminX, fmaxY - fminY]);
});

Clazz.newMeth(C$, 'createCompatibleDestImage$java_awt_image_BufferedImage$java_awt_image_ColorModel',  function (src, destCM) {
var image;
var r=this.getBounds2D$java_awt_image_BufferedImage(src).getBounds$();
var w=r.x + r.width;
var h=r.y + r.height;
if (w <= 0) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Transformed width (" + w + ") is less than or equal to 0." ]);
}if (h <= 0) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Transformed height (" + h + ") is less than or equal to 0." ]);
}if (destCM == null ) {
var cm=src.getColorModel$();
if (this.interpolationType != 1 && (cm.getTransparency$() == 1) ) {
image=Clazz.new_($I$(5,1).c$$I$I$I,[w, h, 2]);
} else {
image=Clazz.new_([cm, src.getRaster$().createCompatibleWritableRaster$I$I(w, h), cm.isAlphaPremultiplied$(), null],$I$(5,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable);
}} else {
image=Clazz.new_([destCM, destCM.createCompatibleWritableRaster$I$I(w, h), destCM.isAlphaPremultiplied$(), null],$I$(5,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable);
}return image;
});

Clazz.newMeth(C$, 'createCompatibleDestRaster$java_awt_image_Raster',  function (src) {
var r=this.getBounds2D$java_awt_image_Raster(src);
return src.createCompatibleWritableRaster$I$I$I$I((r.getX$()|0), (r.getY$()|0), (r.getWidth$()|0), (r.getHeight$()|0));
});

Clazz.newMeth(C$, 'getPoint2D$java_awt_geom_Point2D$java_awt_geom_Point2D',  function (srcPt, dstPt) {
return this.xform.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(srcPt, dstPt);
});

Clazz.newMeth(C$, 'getTransform$',  function () {
return this.xform.clone$();
});

Clazz.newMeth(C$, 'getRenderingHints$',  function () {
if (this.hints == null ) {
var val;
switch (this.interpolationType) {
case 1:
val=$I$(1).VALUE_INTERPOLATION_NEAREST_NEIGHBOR;
break;
case 2:
val=$I$(1).VALUE_INTERPOLATION_BILINEAR;
break;
case 3:
val=$I$(1).VALUE_INTERPOLATION_BICUBIC;
break;
default:
throw Clazz.new_($I$(6,1).c$$S,["Unknown interpolation type " + this.interpolationType]);
}
this.hints=Clazz.new_([$I$(1).KEY_INTERPOLATION, val],$I$(1,1).c$$java_awt_RenderingHints_Key$O);
}return this.hints;
});

Clazz.newMeth(C$, 'validateTransform$java_awt_geom_AffineTransform',  function (xform) {
if (Math.abs(xform.getDeterminant$()) <= 4.9E-324 ) {
throw Clazz.new_(Clazz.load('java.awt.image.ImagingOpException').c$$S,["Unable to invert transform " + xform]);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:11 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
