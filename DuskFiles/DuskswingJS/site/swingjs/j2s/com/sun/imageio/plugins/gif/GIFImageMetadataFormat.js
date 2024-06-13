(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.gif"),I$=[[0,'java.util.Arrays','com.sun.imageio.plugins.gif.GIFStreamMetadata','com.sun.imageio.plugins.gif.GIFImageMetadata']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GIFImageMetadataFormat", null, 'javax.imageio.metadata.IIOMetadataFormatImpl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['instance','javax.imageio.metadata.IIOMetadataFormat']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S$I.apply(this,["javax_imageio_gif_image_1.0", 2]);C$.$init$.apply(this);
this.addElement$S$S$I("ImageDescriptor", "javax_imageio_gif_image_1.0", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("ImageDescriptor", "imageLeftPosition", 2, true, null, "0", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("ImageDescriptor", "imageTopPosition", 2, true, null, "0", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("ImageDescriptor", "imageWidth", 2, true, null, "1", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("ImageDescriptor", "imageHeight", 2, true, null, "1", "65535", true, true);
this.addBooleanAttribute$S$S$Z$Z("ImageDescriptor", "interlaceFlag", false, false);
this.addElement$S$S$I$I("LocalColorTable", "javax_imageio_gif_image_1.0", 2, 256);
this.addAttribute$S$S$I$Z$S$java_util_List("LocalColorTable", "sizeOfLocalColorTable", 2, true, null, $I$(1,"asList$OA",[$I$(2).colorTableSizes]));
this.addBooleanAttribute$S$S$Z$Z("LocalColorTable", "sortFlag", false, false);
this.addElement$S$S$I("ColorTableEntry", "LocalColorTable", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("ColorTableEntry", "index", 2, true, null, "0", "255", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("ColorTableEntry", "red", 2, true, null, "0", "255", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("ColorTableEntry", "green", 2, true, null, "0", "255", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("ColorTableEntry", "blue", 2, true, null, "0", "255", true, true);
this.addElement$S$S$I("GraphicControlExtension", "javax_imageio_gif_image_1.0", 0);
this.addAttribute$S$S$I$Z$S$java_util_List("GraphicControlExtension", "disposalMethod", 0, true, null, $I$(1,"asList$OA",[$I$(3).disposalMethodNames]));
this.addBooleanAttribute$S$S$Z$Z("GraphicControlExtension", "userInputFlag", false, false);
this.addBooleanAttribute$S$S$Z$Z("GraphicControlExtension", "transparentColorFlag", false, false);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("GraphicControlExtension", "delayTime", 2, true, null, "0", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("GraphicControlExtension", "transparentColorIndex", 2, true, null, "0", "255", true, true);
this.addElement$S$S$I("PlainTextExtension", "javax_imageio_gif_image_1.0", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("PlainTextExtension", "textGridLeft", 2, true, null, "0", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("PlainTextExtension", "textGridTop", 2, true, null, "0", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("PlainTextExtension", "textGridWidth", 2, true, null, "1", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("PlainTextExtension", "textGridHeight", 2, true, null, "1", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("PlainTextExtension", "characterCellWidth", 2, true, null, "1", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("PlainTextExtension", "characterCellHeight", 2, true, null, "1", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("PlainTextExtension", "textForegroundColor", 2, true, null, "0", "255", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("PlainTextExtension", "textBackgroundColor", 2, true, null, "0", "255", true, true);
this.addElement$S$S$I$I("ApplicationExtensions", "javax_imageio_gif_image_1.0", 1, 2147483647);
this.addElement$S$S$I("ApplicationExtension", "ApplicationExtensions", 0);
this.addAttribute$S$S$I$Z$S("ApplicationExtension", "applicationID", 0, true, null);
this.addAttribute$S$S$I$Z$S("ApplicationExtension", "authenticationCode", 0, true, null);
this.addObjectValue$S$Class$I$I("ApplicationExtension", Byte.TYPE, 0, 2147483647);
this.addElement$S$S$I$I("CommentExtensions", "javax_imageio_gif_image_1.0", 1, 2147483647);
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
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:53 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
