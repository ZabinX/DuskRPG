(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.png"),I$=[[0,'java.util.Arrays','com.sun.imageio.plugins.png.PNGMetadata']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PNGMetadataFormat", null, 'javax.imageio.metadata.IIOMetadataFormatImpl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['S',['VALUE_0','VALUE_1','VALUE_12','VALUE_23','VALUE_31','VALUE_59','VALUE_60','VALUE_255','VALUE_MAX_16','VALUE_MAX_32'],'O',['instance','javax.imageio.metadata.IIOMetadataFormat']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S$I.apply(this,["javax_imageio_png_1.0", 2]);C$.$init$.apply(this);
this.addElement$S$S$I("IHDR", "javax_imageio_png_1.0", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("IHDR", "width", 2, true, null, C$.VALUE_1, C$.VALUE_MAX_32, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("IHDR", "height", 2, true, null, C$.VALUE_1, C$.VALUE_MAX_32, true, true);
this.addAttribute$S$S$I$Z$S$java_util_List("IHDR", "bitDepth", 2, true, null, $I$(1,"asList$OA",[$I$(2).IHDR_bitDepths]));
var colorTypes=Clazz.array(String, -1, ["Grayscale", "RGB", "Palette", "GrayAlpha", "RGBAlpha"]);
this.addAttribute$S$S$I$Z$S$java_util_List("IHDR", "colorType", 0, true, null, $I$(1).asList$OA(colorTypes));
this.addAttribute$S$S$I$Z$S$java_util_List("IHDR", "compressionMethod", 0, true, null, $I$(1,"asList$OA",[$I$(2).IHDR_compressionMethodNames]));
this.addAttribute$S$S$I$Z$S$java_util_List("IHDR", "filterMethod", 0, true, null, $I$(1,"asList$OA",[$I$(2).IHDR_filterMethodNames]));
this.addAttribute$S$S$I$Z$S$java_util_List("IHDR", "interlaceMethod", 0, true, null, $I$(1,"asList$OA",[$I$(2).IHDR_interlaceMethodNames]));
this.addElement$S$S$I$I("PLTE", "javax_imageio_png_1.0", 1, 256);
this.addElement$S$S$I("PLTEEntry", "PLTE", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("PLTEEntry", "index", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("PLTEEntry", "red", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("PLTEEntry", "green", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("PLTEEntry", "blue", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addElement$S$S$I("bKGD", "javax_imageio_png_1.0", 3);
this.addElement$S$S$I("bKGD_Grayscale", "bKGD", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("bKGD_Grayscale", "gray", 2, true, null, C$.VALUE_0, C$.VALUE_MAX_16, true, true);
this.addElement$S$S$I("bKGD_RGB", "bKGD", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("bKGD_RGB", "red", 2, true, null, C$.VALUE_0, C$.VALUE_MAX_16, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("bKGD_RGB", "green", 2, true, null, C$.VALUE_0, C$.VALUE_MAX_16, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("bKGD_RGB", "blue", 2, true, null, C$.VALUE_0, C$.VALUE_MAX_16, true, true);
this.addElement$S$S$I("bKGD_Palette", "bKGD", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("bKGD_Palette", "index", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addElement$S$S$I("cHRM", "javax_imageio_png_1.0", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("cHRM", "whitePointX", 2, true, null, C$.VALUE_0, C$.VALUE_MAX_16, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("cHRM", "whitePointY", 2, true, null, C$.VALUE_0, C$.VALUE_MAX_16, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("cHRM", "redX", 2, true, null, C$.VALUE_0, C$.VALUE_MAX_16, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("cHRM", "redY", 2, true, null, C$.VALUE_0, C$.VALUE_MAX_16, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("cHRM", "greenX", 2, true, null, C$.VALUE_0, C$.VALUE_MAX_16, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("cHRM", "greenY", 2, true, null, C$.VALUE_0, C$.VALUE_MAX_16, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("cHRM", "blueX", 2, true, null, C$.VALUE_0, C$.VALUE_MAX_16, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("cHRM", "blueY", 2, true, null, C$.VALUE_0, C$.VALUE_MAX_16, true, true);
this.addElement$S$S$I("gAMA", "javax_imageio_png_1.0", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("gAMA", "value", 2, true, null, C$.VALUE_0, C$.VALUE_MAX_32, true, true);
this.addElement$S$S$I$I("hIST", "javax_imageio_png_1.0", 1, 256);
this.addElement$S$S$I("hISTEntry", "hIST", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("hISTEntry", "index", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("hISTEntry", "value", 2, true, null, C$.VALUE_0, C$.VALUE_MAX_16, true, true);
this.addElement$S$S$I("iCCP", "javax_imageio_png_1.0", 0);
this.addAttribute$S$S$I$Z$S("iCCP", "profileName", 0, true, null);
this.addAttribute$S$S$I$Z$S$java_util_List("iCCP", "compressionMethod", 0, true, null, $I$(1,"asList$OA",[$I$(2).iCCP_compressionMethodNames]));
this.addObjectValue$S$Class$I$I("iCCP", Byte.TYPE, 0, 2147483647);
this.addElement$S$S$I$I("iTXt", "javax_imageio_png_1.0", 1, 2147483647);
this.addElement$S$S$I("iTXtEntry", "iTXt", 0);
this.addAttribute$S$S$I$Z$S("iTXtEntry", "keyword", 0, true, null);
this.addBooleanAttribute$S$S$Z$Z("iTXtEntry", "compressionFlag", false, false);
this.addAttribute$S$S$I$Z$S("iTXtEntry", "compressionMethod", 0, true, null);
this.addAttribute$S$S$I$Z$S("iTXtEntry", "languageTag", 0, true, null);
this.addAttribute$S$S$I$Z$S("iTXtEntry", "translatedKeyword", 0, true, null);
this.addAttribute$S$S$I$Z$S("iTXtEntry", "text", 0, true, null);
this.addElement$S$S$I("pHYS", "javax_imageio_png_1.0", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("pHYS", "pixelsPerUnitXAxis", 2, true, null, C$.VALUE_0, C$.VALUE_MAX_32, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("pHYS", "pixelsPerUnitYAxis", 2, true, null, C$.VALUE_0, C$.VALUE_MAX_32, true, true);
this.addAttribute$S$S$I$Z$S$java_util_List("pHYS", "unitSpecifier", 0, true, null, $I$(1,"asList$OA",[$I$(2).unitSpecifierNames]));
this.addElement$S$S$I("sBIT", "javax_imageio_png_1.0", 3);
this.addElement$S$S$I("sBIT_Grayscale", "sBIT", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sBIT_Grayscale", "gray", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addElement$S$S$I("sBIT_GrayAlpha", "sBIT", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sBIT_GrayAlpha", "gray", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sBIT_GrayAlpha", "alpha", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addElement$S$S$I("sBIT_RGB", "sBIT", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sBIT_RGB", "red", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sBIT_RGB", "green", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sBIT_RGB", "blue", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addElement$S$S$I("sBIT_RGBAlpha", "sBIT", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sBIT_RGBAlpha", "red", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sBIT_RGBAlpha", "green", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sBIT_RGBAlpha", "blue", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sBIT_RGBAlpha", "alpha", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addElement$S$S$I("sBIT_Palette", "sBIT", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sBIT_Palette", "red", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sBIT_Palette", "green", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sBIT_Palette", "blue", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addElement$S$S$I$I("sPLT", "javax_imageio_png_1.0", 1, 256);
this.addElement$S$S$I("sPLTEntry", "sPLT", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sPLTEntry", "index", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sPLTEntry", "red", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sPLTEntry", "green", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sPLTEntry", "blue", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sPLTEntry", "alpha", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addElement$S$S$I("sRGB", "javax_imageio_png_1.0", 0);
this.addAttribute$S$S$I$Z$S$java_util_List("sRGB", "renderingIntent", 0, true, null, $I$(1,"asList$OA",[$I$(2).renderingIntentNames]));
this.addElement$S$S$I$I("tEXt", "javax_imageio_png_1.0", 1, 2147483647);
this.addElement$S$S$I("tEXtEntry", "tEXt", 0);
this.addAttribute$S$S$I$Z$S("tEXtEntry", "keyword", 0, true, null);
this.addAttribute$S$S$I$Z$S("tEXtEntry", "value", 0, true, null);
this.addElement$S$S$I("tIME", "javax_imageio_png_1.0", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("tIME", "year", 2, true, null, C$.VALUE_0, C$.VALUE_MAX_16, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("tIME", "month", 2, true, null, C$.VALUE_1, C$.VALUE_12, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("tIME", "day", 2, true, null, C$.VALUE_1, C$.VALUE_31, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("tIME", "hour", 2, true, null, C$.VALUE_0, C$.VALUE_23, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("tIME", "minute", 2, true, null, C$.VALUE_0, C$.VALUE_59, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("tIME", "second", 2, true, null, C$.VALUE_0, C$.VALUE_60, true, true);
this.addElement$S$S$I("tRNS", "javax_imageio_png_1.0", 3);
this.addElement$S$S$I("tRNS_Grayscale", "tRNS", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("tRNS_Grayscale", "gray", 2, true, null, C$.VALUE_0, C$.VALUE_MAX_16, true, true);
this.addElement$S$S$I("tRNS_RGB", "tRNS", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("tRNS_RGB", "red", 2, true, null, C$.VALUE_0, C$.VALUE_MAX_16, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("tRNS_RGB", "green", 2, true, null, C$.VALUE_0, C$.VALUE_MAX_16, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("tRNS_RGB", "blue", 2, true, null, C$.VALUE_0, C$.VALUE_MAX_16, true, true);
this.addElement$S$S$I("tRNS_Palette", "tRNS", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("tRNS_Palette", "index", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("tRNS_Palette", "alpha", 2, true, null, C$.VALUE_0, C$.VALUE_255, true, true);
this.addElement$S$S$I$I("zTXt", "javax_imageio_png_1.0", 1, 2147483647);
this.addElement$S$S$I("zTXtEntry", "zTXt", 0);
this.addAttribute$S$S$I$Z$S("zTXtEntry", "keyword", 0, true, null);
this.addAttribute$S$S$I$Z$S$java_util_List("zTXtEntry", "compressionMethod", 0, true, null, $I$(1,"asList$OA",[$I$(2).zTXt_compressionMethodNames]));
this.addAttribute$S$S$I$Z$S("zTXtEntry", "text", 0, true, null);
this.addElement$S$S$I$I("UnknownChunks", "javax_imageio_png_1.0", 1, 2147483647);
this.addElement$S$S$I("UnknownChunk", "UnknownChunks", 0);
this.addAttribute$S$S$I$Z$S("UnknownChunk", "type", 0, true, null);
this.addObjectValue$S$Class$I$I("UnknownChunk", Byte.TYPE, 0, 2147483647);
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
C$.VALUE_0="0";
C$.VALUE_1="1";
C$.VALUE_12="12";
C$.VALUE_23="23";
C$.VALUE_31="31";
C$.VALUE_59="59";
C$.VALUE_60="60";
C$.VALUE_255="255";
C$.VALUE_MAX_16="65535";
C$.VALUE_MAX_32="2147483647";
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
