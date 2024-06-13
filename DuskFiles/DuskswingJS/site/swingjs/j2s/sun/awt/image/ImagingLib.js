(function(){var P$=Clazz.newPackage("sun.awt.image"),I$=[[0,'swingjs.JSGraphicsCompositor']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImagingLib");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['verbose']]]

Clazz.newMeth(C$, 'filter$java_awt_image_RasterOp$java_awt_image_Raster$java_awt_image_WritableRaster',  function (op, src, dst) {
if (dst == null ) {
dst=op.createCompatibleDestRaster$java_awt_image_Raster(src);
}return $I$(1).filterRaster$java_awt_image_Raster$java_awt_image_WritableRaster$java_awt_image_RasterOp(src, dst, op);
}, 1);

Clazz.newMeth(C$, 'filter$java_awt_image_BufferedImageOp$java_awt_image_BufferedImage$java_awt_image_BufferedImage',  function (op, src, dst) {
if (C$.verbose) {
System.out.println$S("in filter and op is " + op + "bufimage is " + src + " and " + dst );
}if (dst == null ) {
dst=op.createCompatibleDestImage$java_awt_image_BufferedImage$java_awt_image_ColorModel(src, null);
}return $I$(1).filterImage$java_awt_image_BufferedImage$java_awt_image_BufferedImage$java_awt_image_BufferedImageOp(src, dst, op);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.verbose=false;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
