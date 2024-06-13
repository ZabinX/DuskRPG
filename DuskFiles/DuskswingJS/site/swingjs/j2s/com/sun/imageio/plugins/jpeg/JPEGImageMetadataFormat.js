(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.jpeg"),I$=[[0,'java.util.ArrayList','java.awt.color.ICC_Profile','com.sun.imageio.plugins.jpeg.JPEG']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JPEGImageMetadataFormat", null, 'com.sun.imageio.plugins.jpeg.JPEGMetadataFormat');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['theInstance','com.sun.imageio.plugins.jpeg.JPEGImageMetadataFormat']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S$I.apply(this,["javax_imageio_jpeg_image_1.0", 1]);C$.$init$.apply(this);
this.addElement$S$S$I("JPEGvariety", "javax_imageio_jpeg_image_1.0", 3);
this.addElement$S$S$I("markerSequence", "javax_imageio_jpeg_image_1.0", 4);
this.addElement$S$S$I("app0JFIF", "JPEGvariety", 2);
this.addStreamElements$S("markerSequence");
this.addElement$S$S$I("app14Adobe", "markerSequence", 0);
this.addElement$S$S$I$I("sof", "markerSequence", 1, 4);
this.addElement$S$S$I$I("sos", "markerSequence", 1, 4);
this.addElement$S$S$I$I("JFXX", "app0JFIF", 1, 2147483647);
this.addElement$S$S$I("app0JFXX", "JFXX", 3);
this.addElement$S$S$I("app2ICC", "app0JFIF", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("app0JFIF", "majorVersion", 2, false, "1", "0", "255", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("app0JFIF", "minorVersion", 2, false, "2", "0", "255", true, true);
var resUnits=Clazz.new_($I$(1,1));
resUnits.add$O("0");
resUnits.add$O("1");
resUnits.add$O("2");
this.addAttribute$S$S$I$Z$S$java_util_List("app0JFIF", "resUnits", 2, false, "0", resUnits);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("app0JFIF", "Xdensity", 2, false, "1", "1", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("app0JFIF", "Ydensity", 2, false, "1", "1", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("app0JFIF", "thumbWidth", 2, false, "0", "0", "255", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("app0JFIF", "thumbHeight", 2, false, "0", "0", "255", true, true);
this.addElement$S$S$I("JFIFthumbJPEG", "app0JFXX", 2);
this.addElement$S$S$I("JFIFthumbPalette", "app0JFXX", 0);
this.addElement$S$S$I("JFIFthumbRGB", "app0JFXX", 0);
var codes=Clazz.new_($I$(1,1));
codes.add$O("16");
codes.add$O("17");
codes.add$O("19");
this.addAttribute$S$S$I$Z$S$java_util_List("app0JFXX", "extensionCode", 2, false, null, codes);
this.addChildElement$S$S("markerSequence", "JFIFthumbJPEG");
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("JFIFthumbPalette", "thumbWidth", 2, false, null, "0", "255", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("JFIFthumbPalette", "thumbHeight", 2, false, null, "0", "255", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("JFIFthumbRGB", "thumbWidth", 2, false, null, "0", "255", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("JFIFthumbRGB", "thumbHeight", 2, false, null, "0", "255", true, true);
this.addObjectValue$S$Class$Z$O("app2ICC", Clazz.getClass($I$(2)), false, null);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("app14Adobe", "version", 2, false, "100", "100", "255", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("app14Adobe", "flags0", 2, false, "0", "0", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("app14Adobe", "flags1", 2, false, "0", "0", "65535", true, true);
var transforms=Clazz.new_($I$(1,1));
transforms.add$O("0");
transforms.add$O("1");
transforms.add$O("2");
this.addAttribute$S$S$I$Z$S$java_util_List("app14Adobe", "transform", 2, true, null, transforms);
this.addElement$S$S$I("componentSpec", "sof", 0);
var procs=Clazz.new_($I$(1,1));
procs.add$O("0");
procs.add$O("1");
procs.add$O("2");
this.addAttribute$S$S$I$Z$S$java_util_List("sof", "process", 2, false, null, procs);
this.addAttribute$S$S$I$Z$S("sof", "samplePrecision", 2, false, "8");
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sof", "numLines", 2, false, null, "0", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sof", "samplesPerLine", 2, false, null, "0", "65535", true, true);
var comps=Clazz.new_($I$(1,1));
comps.add$O("1");
comps.add$O("2");
comps.add$O("3");
comps.add$O("4");
this.addAttribute$S$S$I$Z$S$java_util_List("sof", "numFrameComponents", 2, false, null, comps);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("componentSpec", "componentId", 2, true, null, "0", "255", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("componentSpec", "HsamplingFactor", 2, true, null, "1", "255", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("componentSpec", "VsamplingFactor", 2, true, null, "1", "255", true, true);
var tabids=Clazz.new_($I$(1,1));
tabids.add$O("0");
tabids.add$O("1");
tabids.add$O("2");
tabids.add$O("3");
this.addAttribute$S$S$I$Z$S$java_util_List("componentSpec", "QtableSelector", 2, true, null, tabids);
this.addElement$S$S$I("scanComponentSpec", "sos", 0);
this.addAttribute$S$S$I$Z$S$java_util_List("sos", "numScanComponents", 2, true, null, comps);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sos", "startSpectralSelection", 2, false, "0", "0", "63", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sos", "endSpectralSelection", 2, false, "63", "0", "63", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sos", "approxHigh", 2, false, "0", "0", "15", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("sos", "approxLow", 2, false, "0", "0", "15", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("scanComponentSpec", "componentSelector", 2, true, null, "0", "255", true, true);
this.addAttribute$S$S$I$Z$S$java_util_List("scanComponentSpec", "dcHuffTable", 2, true, null, tabids);
this.addAttribute$S$S$I$Z$S$java_util_List("scanComponentSpec", "acHuffTable", 2, true, null, tabids);
}, 1);

Clazz.newMeth(C$, 'canNodeAppear$S$javax_imageio_ImageTypeSpecifier',  function (elementName, imageType) {
if (elementName.equals$O(this.getRootName$()) || elementName.equals$O("JPEGvariety") || this.isInSubtree$S$S(elementName, "markerSequence")  ) {
return true;
}if ((this.isInSubtree$S$S(elementName, "app0JFIF")) && $I$(3).isJFIFcompliant$javax_imageio_ImageTypeSpecifier$Z(imageType, true) ) {
return true;
}return false;
});

Clazz.newMeth(C$, 'getInstance$',  function () {
if (C$.theInstance == null ) {
C$.theInstance=Clazz.new_(C$);
}return C$.theInstance;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.theInstance=null;
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:54 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
