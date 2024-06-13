(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.jpeg"),I$=[[0,'com.sun.imageio.plugins.jpeg.JPEGMetadataFormatResources']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JPEGImageMetadataFormatResources", null, 'com.sun.imageio.plugins.jpeg.JPEGMetadataFormatResources');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['imageContents','Object[][]']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'getContents$',  function () {
var combinedContents=Clazz.array(java.lang.Object, [$I$(1).commonContents.length + C$.imageContents.length, 2]);
var combined=0;
for (var i=0; i < $I$(1).commonContents.length; i++, combined++) {
combinedContents[combined][0]=$I$(1).commonContents[i][0];
combinedContents[combined][1]=$I$(1).commonContents[i][1];
}
for (var i=0; i < C$.imageContents.length; i++, combined++) {
combinedContents[combined][0]=C$.imageContents[i][0];
combinedContents[combined][1]=C$.imageContents[i][1];
}
return combinedContents;
});

C$.$static$=function(){C$.$static$=0;
C$.imageContents=Clazz.array(java.lang.Object, -2, [Clazz.array(java.lang.Object, -1, ["JPEGvariety", "A node grouping all marker segments specific to the variety of stream being read/written (e.g. JFIF) - may be empty"]), Clazz.array(java.lang.Object, -1, ["markerSequence", "A node grouping all non-jfif marker segments"]), Clazz.array(java.lang.Object, -1, ["app0jfif", "A JFIF APP0 marker segment"]), Clazz.array(java.lang.Object, -1, ["app14Adobe", "An Adobe APP14 marker segment"]), Clazz.array(java.lang.Object, -1, ["sof", "A Start Of Frame marker segment"]), Clazz.array(java.lang.Object, -1, ["sos", "A Start Of Scan marker segment"]), Clazz.array(java.lang.Object, -1, ["app0JFXX", "A JFIF extension marker segment"]), Clazz.array(java.lang.Object, -1, ["app2ICC", "An ICC profile APP2 marker segment"]), Clazz.array(java.lang.Object, -1, ["JFIFthumbJPEG", "A JFIF thumbnail in JPEG format (no JFIF segments permitted)"]), Clazz.array(java.lang.Object, -1, ["JFIFthumbPalette", "A JFIF thumbnail as an RGB indexed image"]), Clazz.array(java.lang.Object, -1, ["JFIFthumbRGB", "A JFIF thumbnail as an RGB image"]), Clazz.array(java.lang.Object, -1, ["componentSpec", "A component specification for a frame"]), Clazz.array(java.lang.Object, -1, ["scanComponentSpec", "A component specification for a scan"]), Clazz.array(java.lang.Object, -1, ["app0JFIF/majorVersion", "The major JFIF version number"]), Clazz.array(java.lang.Object, -1, ["app0JFIF/minorVersion", "The minor JFIF version number"]), Clazz.array(java.lang.Object, -1, ["app0JFIF/resUnits", "The resolution units for Xdensity and Ydensity (0 = no units, just aspect ratio; 1 = dots/inch; 2 = dots/cm)"]), Clazz.array(java.lang.Object, -1, ["app0JFIF/Xdensity", "The horizontal density or aspect ratio numerator"]), Clazz.array(java.lang.Object, -1, ["app0JFIF/Ydensity", "The vertical density or aspect ratio denominator"]), Clazz.array(java.lang.Object, -1, ["app0JFIF/thumbWidth", "The width of the thumbnail, or 0 if there isn\'t one"]), Clazz.array(java.lang.Object, -1, ["app0JFIF/thumbHeight", "The height of the thumbnail, or 0 if there isn\'t one"]), Clazz.array(java.lang.Object, -1, ["app0JFXX/extensionCode", "The JFXX extension code identifying thumbnail type: (16 = JPEG, 17 = indexed, 19 = RGB"]), Clazz.array(java.lang.Object, -1, ["JFIFthumbPalette/thumbWidth", "The width of the thumbnail"]), Clazz.array(java.lang.Object, -1, ["JFIFthumbPalette/thumbHeight", "The height of the thumbnail"]), Clazz.array(java.lang.Object, -1, ["JFIFthumbRGB/thumbWidth", "The width of the thumbnail"]), Clazz.array(java.lang.Object, -1, ["JFIFthumbRGB/thumbHeight", "The height of the thumbnail"]), Clazz.array(java.lang.Object, -1, ["app14Adobe/version", "The version of Adobe APP14 marker segment"]), Clazz.array(java.lang.Object, -1, ["app14Adobe/flags0", "The flags0 variable of an APP14 marker segment"]), Clazz.array(java.lang.Object, -1, ["app14Adobe/flags1", "The flags1 variable of an APP14 marker segment"]), Clazz.array(java.lang.Object, -1, ["app14Adobe/transform", "The color transform applied to the image (0 = Unknown, 1 = YCbCr, 2 = YCCK)"]), Clazz.array(java.lang.Object, -1, ["sof/process", "The JPEG process (0 = Baseline sequential, 1 = Extended sequential, 2 = Progressive)"]), Clazz.array(java.lang.Object, -1, ["sof/samplePrecision", "The number of bits per sample"]), Clazz.array(java.lang.Object, -1, ["sof/numLines", "The number of lines in the image"]), Clazz.array(java.lang.Object, -1, ["sof/samplesPerLine", "The number of samples per line"]), Clazz.array(java.lang.Object, -1, ["sof/numFrameComponents", "The number of components in the image"]), Clazz.array(java.lang.Object, -1, ["componentSpec/componentId", "The id for this component"]), Clazz.array(java.lang.Object, -1, ["componentSpec/HsamplingFactor", "The horizontal sampling factor for this component"]), Clazz.array(java.lang.Object, -1, ["componentSpec/VsamplingFactor", "The vertical sampling factor for this component"]), Clazz.array(java.lang.Object, -1, ["componentSpec/QtableSelector", "The quantization table to use for this component"]), Clazz.array(java.lang.Object, -1, ["sos/numScanComponents", "The number of components in the scan"]), Clazz.array(java.lang.Object, -1, ["sos/startSpectralSelection", "The first spectral band included in this scan"]), Clazz.array(java.lang.Object, -1, ["sos/endSpectralSelection", "The last spectral band included in this scan"]), Clazz.array(java.lang.Object, -1, ["sos/approxHigh", "The highest bit position included in this scan"]), Clazz.array(java.lang.Object, -1, ["sos/approxLow", "The lowest bit position included in this scan"]), Clazz.array(java.lang.Object, -1, ["scanComponentSpec/componentSelector", "The id of this component"]), Clazz.array(java.lang.Object, -1, ["scanComponentSpec/dcHuffTable", "The huffman table to use for encoding DC coefficients"]), Clazz.array(java.lang.Object, -1, ["scanComponentSpec/acHuffTable", "The huffman table to use for encoding AC coefficients"])]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:54 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
