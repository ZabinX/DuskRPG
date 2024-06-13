(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.bmp"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BMPMetadataFormat", null, 'javax.imageio.metadata.IIOMetadataFormatImpl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['instance','javax.imageio.metadata.IIOMetadataFormat']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S$I.apply(this,["javax_imageio_bmp_1.0", 2]);C$.$init$.apply(this);
this.addElement$S$S$I("ImageDescriptor", "javax_imageio_bmp_1.0", 0);
this.addAttribute$S$S$I$Z$S("ImageDescriptor", "bmpVersion", 0, true, null);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("ImageDescriptor", "width", 2, true, null, "0", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("ImageDescriptor", "height", 2, true, null, "1", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("ImageDescriptor", "bitsPerPixel", 2, true, null, "1", "65535", true, true);
this.addAttribute$S$S$I$Z$S("ImageDescriptor", "compression", 2, false, null);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("ImageDescriptor", "imageSize", 2, true, null, "1", "65535", true, true);
this.addElement$S$S$I("PixelsPerMeter", "javax_imageio_bmp_1.0", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("PixelsPerMeter", "X", 2, false, null, "1", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("PixelsPerMeter", "Y", 2, false, null, "1", "65535", true, true);
this.addElement$S$S$I("ColorsUsed", "javax_imageio_bmp_1.0", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("ColorsUsed", "value", 2, true, null, "0", "65535", true, true);
this.addElement$S$S$I("ColorsImportant", "javax_imageio_bmp_1.0", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("ColorsImportant", "value", 2, false, null, "0", "65535", true, true);
this.addElement$S$S$I("BI_BITFIELDS_Mask", "javax_imageio_bmp_1.0", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("BI_BITFIELDS_Mask", "red", 2, false, null, "0", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("BI_BITFIELDS_Mask", "green", 2, false, null, "0", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("BI_BITFIELDS_Mask", "blue", 2, false, null, "0", "65535", true, true);
this.addElement$S$S$I("ColorSpace", "javax_imageio_bmp_1.0", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("ColorSpace", "value", 2, false, null, "0", "65535", true, true);
this.addElement$S$S$I("LCS_CALIBRATED_RGB", "javax_imageio_bmp_1.0", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("LCS_CALIBRATED_RGB", "redX", 4, false, null, "0", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("LCS_CALIBRATED_RGB", "redY", 4, false, null, "0", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("LCS_CALIBRATED_RGB", "redZ", 4, false, null, "0", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("LCS_CALIBRATED_RGB", "greenX", 4, false, null, "0", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("LCS_CALIBRATED_RGB", "greenY", 4, false, null, "0", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("LCS_CALIBRATED_RGB", "greenZ", 4, false, null, "0", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("LCS_CALIBRATED_RGB", "blueX", 4, false, null, "0", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("LCS_CALIBRATED_RGB", "blueY", 4, false, null, "0", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("LCS_CALIBRATED_RGB", "blueZ", 4, false, null, "0", "65535", true, true);
this.addElement$S$S$I("LCS_CALIBRATED_RGB_GAMMA", "javax_imageio_bmp_1.0", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("LCS_CALIBRATED_RGB_GAMMA", "red", 2, false, null, "0", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("LCS_CALIBRATED_RGB_GAMMA", "green", 2, false, null, "0", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("LCS_CALIBRATED_RGB_GAMMA", "blue", 2, false, null, "0", "65535", true, true);
this.addElement$S$S$I("Intent", "javax_imageio_bmp_1.0", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("Intent", "value", 2, false, null, "0", "65535", true, true);
this.addElement$S$S$I$I("Palette", "javax_imageio_bmp_1.0", 2, 256);
this.addAttribute$S$S$I$Z$S("Palette", "sizeOfPalette", 2, true, null);
this.addBooleanAttribute$S$S$Z$Z("Palette", "sortFlag", false, false);
this.addElement$S$S$I("PaletteEntry", "Palette", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("PaletteEntry", "index", 2, true, null, "0", "255", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("PaletteEntry", "red", 2, true, null, "0", "255", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("PaletteEntry", "green", 2, true, null, "0", "255", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("PaletteEntry", "blue", 2, true, null, "0", "255", true, true);
this.addElement$S$S$I$I("CommentExtensions", "javax_imageio_bmp_1.0", 1, 2147483647);
this.addElement$S$S$I("CommentExtension", "CommentExtensions", 0);
this.addAttribute$S$S$I$Z$S("CommentExtension", "value", 0, true, null);
}, 1);

Clazz.newMeth(C$, 'canNodeAppear$S$javax_imageio_ImageTypeSpecifier',  function (elementName, imageType) {
return true;
});

Clazz.newMeth(C$, 'getInstance$',  function () {
if (C$.instance == null ) {
C$.instance=Clazz.new_(C$);
}return C$.instance;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.instance=null;
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
