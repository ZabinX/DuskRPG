(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.png"),p$1={},I$=[[0,'java.util.ArrayList','javax.imageio.metadata.IIOMetadataNode','StringBuffer','java.util.StringTokenizer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PNGMetadata", null, 'javax.imageio.metadata.IIOMetadata', 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.PLTE_order=null;
this.iTXt_keyword=Clazz.new_($I$(1,1));
this.iTXt_compressionFlag=Clazz.new_($I$(1,1));
this.iTXt_compressionMethod=Clazz.new_($I$(1,1));
this.iTXt_languageTag=Clazz.new_($I$(1,1));
this.iTXt_translatedKeyword=Clazz.new_($I$(1,1));
this.iTXt_text=Clazz.new_($I$(1,1));
this.tEXt_keyword=Clazz.new_($I$(1,1));
this.tEXt_text=Clazz.new_($I$(1,1));
this.zTXt_keyword=Clazz.new_($I$(1,1));
this.zTXt_compressionMethod=Clazz.new_($I$(1,1));
this.zTXt_text=Clazz.new_($I$(1,1));
this.unknownChunkType=Clazz.new_($I$(1,1));
this.unknownChunkData=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['IHDR_present','PLTE_present','bKGD_present','cHRM_present','gAMA_present','hIST_present','iCCP_present','pHYs_present','sBIT_present','sPLT_present','sRGB_present','tIME_present','tRNS_present'],'I',['IHDR_width','IHDR_height','IHDR_bitDepth','IHDR_colorType','IHDR_compressionMethod','IHDR_filterMethod','IHDR_interlaceMethod','bKGD_colorType','bKGD_index','bKGD_gray','bKGD_red','bKGD_green','bKGD_blue','cHRM_whitePointX','cHRM_whitePointY','cHRM_redX','cHRM_redY','cHRM_greenX','cHRM_greenY','cHRM_blueX','cHRM_blueY','gAMA_gamma','iCCP_compressionMethod','pHYs_pixelsPerUnitXAxis','pHYs_pixelsPerUnitYAxis','pHYs_unitSpecifier','sBIT_colorType','sBIT_grayBits','sBIT_redBits','sBIT_greenBits','sBIT_blueBits','sBIT_alphaBits','sPLT_sampleDepth','sRGB_renderingIntent','tIME_year','tIME_month','tIME_day','tIME_hour','tIME_minute','tIME_second','tRNS_colorType','tRNS_gray','tRNS_red','tRNS_green','tRNS_blue'],'S',['iCCP_profileName','sPLT_paletteName'],'O',['PLTE_red','byte[]','+PLTE_green','+PLTE_blue','PLTE_order','int[]','hIST_histogram','char[]','iCCP_compressedProfile','byte[]','iTXt_keyword','java.util.ArrayList','+iTXt_compressionFlag','+iTXt_compressionMethod','+iTXt_languageTag','+iTXt_translatedKeyword','+iTXt_text','sPLT_red','int[]','+sPLT_green','+sPLT_blue','+sPLT_alpha','+sPLT_frequency','tEXt_keyword','java.util.ArrayList','+tEXt_text','tRNS_alpha','byte[]','zTXt_keyword','java.util.ArrayList','+zTXt_compressionMethod','+zTXt_text','+unknownChunkType','+unknownChunkData']]
,['O',['IHDR_colorTypeNames','String[]','IHDR_numChannels','int[]','IHDR_bitDepths','String[]','+IHDR_compressionMethodNames','+IHDR_filterMethodNames','+IHDR_interlaceMethodNames','+iCCP_compressionMethodNames','+zTXt_compressionMethodNames','+unitSpecifierNames','+renderingIntentNames','+colorSpaceTypeNames']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$Z$S$S$SA$SA.apply(this,[true, "javax_imageio_png_1.0", "com.sun.imageio.plugins.png.PNGMetadataFormat", null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_metadata_IIOMetadata',  function (metadata) {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'initialize$javax_imageio_ImageTypeSpecifier$I',  function (imageType, numBands) {
var colorModel=imageType.getColorModel$();
var sampleModel=imageType.getSampleModel$();
var sampleSize=sampleModel.getSampleSize$();
var bitDepth=sampleSize[0];
for (var i=1; i < sampleSize.length; i++) {
if (sampleSize[i] > bitDepth) {
bitDepth=sampleSize[i];
}}
if (sampleSize.length > 1 && bitDepth < 8 ) {
bitDepth=8;
}if (bitDepth > 2 && bitDepth < 4 ) {
bitDepth=4;
} else if (bitDepth > 4 && bitDepth < 8 ) {
bitDepth=8;
} else if (bitDepth > 8 && bitDepth < 16 ) {
bitDepth=16;
} else if (bitDepth > 16) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["bitDepth > 16!"]);
}this.IHDR_bitDepth=bitDepth;
if (Clazz.instanceOf(colorModel, "java.awt.image.IndexColorModel")) {
var icm=colorModel;
var size=icm.getMapSize$();
var reds=Clazz.array(Byte.TYPE, [size]);
icm.getReds$BA(reds);
var greens=Clazz.array(Byte.TYPE, [size]);
icm.getGreens$BA(greens);
var blues=Clazz.array(Byte.TYPE, [size]);
icm.getBlues$BA(blues);
var isGray=false;
if (!this.IHDR_present || (this.IHDR_colorType != 3) ) {
isGray=true;
var scale=(255/((1 << this.IHDR_bitDepth) - 1)|0);
for (var i=0; i < size; i++) {
var red=reds[i];
if ((red != ($b$[0] = (i * scale), $b$[0])) || (red != greens[i]) || (red != blues[i])  ) {
isGray=false;
break;
}}
}var hasAlpha=colorModel.hasAlpha$();
var alpha=null;
if (hasAlpha) {
alpha=Clazz.array(Byte.TYPE, [size]);
icm.getAlphas$BA(alpha);
}if (isGray && hasAlpha && (bitDepth == 8 || bitDepth == 16 )  ) {
this.IHDR_colorType=4;
} else if (isGray && !hasAlpha ) {
this.IHDR_colorType=0;
} else {
this.IHDR_colorType=3;
this.PLTE_present=true;
this.PLTE_order=null;
this.PLTE_red=reds.clone$();
this.PLTE_green=greens.clone$();
this.PLTE_blue=blues.clone$();
if (hasAlpha) {
this.tRNS_present=true;
this.tRNS_colorType=3;
this.PLTE_order=Clazz.array(Integer.TYPE, [alpha.length]);
var newAlpha=Clazz.array(Byte.TYPE, [alpha.length]);
var newIndex=0;
for (var i=0; i < alpha.length; i++) {
if (alpha[i] != -1) {
this.PLTE_order[i]=newIndex;
newAlpha[newIndex]=alpha[i];
++newIndex;
}}
var numTransparent=newIndex;
for (var i=0; i < alpha.length; i++) {
if (alpha[i] == -1) {
this.PLTE_order[i]=newIndex++;
}}
var oldRed=this.PLTE_red;
var oldGreen=this.PLTE_green;
var oldBlue=this.PLTE_blue;
var len=oldRed.length;
this.PLTE_red=Clazz.array(Byte.TYPE, [len]);
this.PLTE_green=Clazz.array(Byte.TYPE, [len]);
this.PLTE_blue=Clazz.array(Byte.TYPE, [len]);
for (var i=0; i < len; i++) {
this.PLTE_red[this.PLTE_order[i]]=oldRed[i];
this.PLTE_green[this.PLTE_order[i]]=oldGreen[i];
this.PLTE_blue[this.PLTE_order[i]]=oldBlue[i];
}
this.tRNS_alpha=Clazz.array(Byte.TYPE, [numTransparent]);
System.arraycopy$O$I$O$I$I(newAlpha, 0, this.tRNS_alpha, 0, numTransparent);
}}} else {
if (numBands == 1) {
this.IHDR_colorType=0;
} else if (numBands == 2) {
this.IHDR_colorType=4;
} else if (numBands == 3) {
this.IHDR_colorType=2;
} else if (numBands == 4) {
this.IHDR_colorType=6;
} else {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Number of bands not 1-4!"]);
}}this.IHDR_present=true;
});

Clazz.newMeth(C$, 'isReadOnly$',  function () {
return false;
});

Clazz.newMeth(C$, 'cloneBytesArrayList$java_util_ArrayList',  function ($in) {
if ($in == null ) {
return null;
} else {
var list=Clazz.new_([$in.size$()],$I$(1,1).c$$I);
for (var b, $b = $in.iterator$(); $b.hasNext$()&&((b=($b.next$())),1);) {
list.add$O((b == null ) ? null : b.clone$());
}
return list;
}}, p$1);

Clazz.newMeth(C$, 'clone$',  function () {
var metadata;
try {
metadata=Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
return null;
} else {
throw e;
}
}
metadata.unknownChunkData=p$1.cloneBytesArrayList$java_util_ArrayList.apply(this, [this.unknownChunkData]);
return metadata;
});

Clazz.newMeth(C$, 'getAsTree$S',  function (formatName) {
if (formatName.equals$O("javax_imageio_png_1.0")) {
return p$1.getNativeTree.apply(this, []);
} else if (formatName.equals$O("javax_imageio_1.0")) {
return this.getStandardTree$();
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a recognized format!"]);
}});

Clazz.newMeth(C$, 'getNativeTree',  function () {
var node=null;
var root=Clazz.new_($I$(2,1).c$$S,["javax_imageio_png_1.0"]);
if (this.IHDR_present) {
var IHDR_node=Clazz.new_($I$(2,1).c$$S,["IHDR"]);
IHDR_node.setAttribute$S$S("width", Integer.toString$I(this.IHDR_width));
IHDR_node.setAttribute$S$S("height", Integer.toString$I(this.IHDR_height));
IHDR_node.setAttribute$S$S("bitDepth", Integer.toString$I(this.IHDR_bitDepth));
IHDR_node.setAttribute$S$S("colorType", C$.IHDR_colorTypeNames[this.IHDR_colorType]);
IHDR_node.setAttribute$S$S("compressionMethod", C$.IHDR_compressionMethodNames[this.IHDR_compressionMethod]);
IHDR_node.setAttribute$S$S("filterMethod", C$.IHDR_filterMethodNames[this.IHDR_filterMethod]);
IHDR_node.setAttribute$S$S("interlaceMethod", C$.IHDR_interlaceMethodNames[this.IHDR_interlaceMethod]);
root.appendChild$org_w3c_dom_Node(IHDR_node);
}if (this.PLTE_present) {
var PLTE_node=Clazz.new_($I$(2,1).c$$S,["PLTE"]);
var numEntries=this.PLTE_red.length;
for (var i=0; i < numEntries; i++) {
var entry=Clazz.new_($I$(2,1).c$$S,["PLTEEntry"]);
entry.setAttribute$S$S("index", Integer.toString$I(i));
entry.setAttribute$S$S("red", Integer.toString$I(this.PLTE_red[i] & 255));
entry.setAttribute$S$S("green", Integer.toString$I(this.PLTE_green[i] & 255));
entry.setAttribute$S$S("blue", Integer.toString$I(this.PLTE_blue[i] & 255));
PLTE_node.appendChild$org_w3c_dom_Node(entry);
}
root.appendChild$org_w3c_dom_Node(PLTE_node);
}if (this.bKGD_present) {
var bKGD_node=Clazz.new_($I$(2,1).c$$S,["bKGD"]);
if (this.bKGD_colorType == 3) {
node=Clazz.new_($I$(2,1).c$$S,["bKGD_Palette"]);
node.setAttribute$S$S("index", Integer.toString$I(this.bKGD_index));
} else if (this.bKGD_colorType == 0) {
node=Clazz.new_($I$(2,1).c$$S,["bKGD_Grayscale"]);
node.setAttribute$S$S("gray", Integer.toString$I(this.bKGD_gray));
} else if (this.bKGD_colorType == 2) {
node=Clazz.new_($I$(2,1).c$$S,["bKGD_RGB"]);
node.setAttribute$S$S("red", Integer.toString$I(this.bKGD_red));
node.setAttribute$S$S("green", Integer.toString$I(this.bKGD_green));
node.setAttribute$S$S("blue", Integer.toString$I(this.bKGD_blue));
}bKGD_node.appendChild$org_w3c_dom_Node(node);
root.appendChild$org_w3c_dom_Node(bKGD_node);
}if (this.cHRM_present) {
var cHRM_node=Clazz.new_($I$(2,1).c$$S,["cHRM"]);
cHRM_node.setAttribute$S$S("whitePointX", Integer.toString$I(this.cHRM_whitePointX));
cHRM_node.setAttribute$S$S("whitePointY", Integer.toString$I(this.cHRM_whitePointY));
cHRM_node.setAttribute$S$S("redX", Integer.toString$I(this.cHRM_redX));
cHRM_node.setAttribute$S$S("redY", Integer.toString$I(this.cHRM_redY));
cHRM_node.setAttribute$S$S("greenX", Integer.toString$I(this.cHRM_greenX));
cHRM_node.setAttribute$S$S("greenY", Integer.toString$I(this.cHRM_greenY));
cHRM_node.setAttribute$S$S("blueX", Integer.toString$I(this.cHRM_blueX));
cHRM_node.setAttribute$S$S("blueY", Integer.toString$I(this.cHRM_blueY));
root.appendChild$org_w3c_dom_Node(cHRM_node);
}if (this.gAMA_present) {
var gAMA_node=Clazz.new_($I$(2,1).c$$S,["gAMA"]);
gAMA_node.setAttribute$S$S("value", Integer.toString$I(this.gAMA_gamma));
root.appendChild$org_w3c_dom_Node(gAMA_node);
}if (this.hIST_present) {
var hIST_node=Clazz.new_($I$(2,1).c$$S,["hIST"]);
for (var i=0; i < this.hIST_histogram.length; i++) {
var hist=Clazz.new_($I$(2,1).c$$S,["hISTEntry"]);
hist.setAttribute$S$S("index", Integer.toString$I(i));
hist.setAttribute$S$S("value", Integer.toString$I(this.hIST_histogram[i].$c()));
hIST_node.appendChild$org_w3c_dom_Node(hist);
}
root.appendChild$org_w3c_dom_Node(hIST_node);
}if (this.iCCP_present) {
var iCCP_node=Clazz.new_($I$(2,1).c$$S,["iCCP"]);
iCCP_node.setAttribute$S$S("profileName", this.iCCP_profileName);
iCCP_node.setAttribute$S$S("compressionMethod", C$.iCCP_compressionMethodNames[this.iCCP_compressionMethod]);
var profile=this.iCCP_compressedProfile;
if (profile != null ) {
profile=(profile).clone$();
}iCCP_node.setUserObject$O(profile);
root.appendChild$org_w3c_dom_Node(iCCP_node);
}if (this.iTXt_keyword.size$() > 0) {
var iTXt_parent=Clazz.new_($I$(2,1).c$$S,["iTXt"]);
for (var i=0; i < this.iTXt_keyword.size$(); i++) {
var iTXt_node=Clazz.new_($I$(2,1).c$$S,["iTXtEntry"]);
iTXt_node.setAttribute$S$S("keyword", this.iTXt_keyword.get$I(i));
iTXt_node.setAttribute$S$S("compressionFlag", this.iTXt_compressionFlag.get$I(i).booleanValue$() ? "TRUE" : "FALSE");
iTXt_node.setAttribute$S$S("compressionMethod", this.iTXt_compressionMethod.get$I(i).toString());
iTXt_node.setAttribute$S$S("languageTag", this.iTXt_languageTag.get$I(i));
iTXt_node.setAttribute$S$S("translatedKeyword", this.iTXt_translatedKeyword.get$I(i));
iTXt_node.setAttribute$S$S("text", this.iTXt_text.get$I(i));
iTXt_parent.appendChild$org_w3c_dom_Node(iTXt_node);
}
root.appendChild$org_w3c_dom_Node(iTXt_parent);
}if (this.pHYs_present) {
var pHYs_node=Clazz.new_($I$(2,1).c$$S,["pHYs"]);
pHYs_node.setAttribute$S$S("pixelsPerUnitXAxis", Integer.toString$I(this.pHYs_pixelsPerUnitXAxis));
pHYs_node.setAttribute$S$S("pixelsPerUnitYAxis", Integer.toString$I(this.pHYs_pixelsPerUnitYAxis));
pHYs_node.setAttribute$S$S("unitSpecifier", C$.unitSpecifierNames[this.pHYs_unitSpecifier]);
root.appendChild$org_w3c_dom_Node(pHYs_node);
}if (this.sBIT_present) {
var sBIT_node=Clazz.new_($I$(2,1).c$$S,["sBIT"]);
if (this.sBIT_colorType == 0) {
node=Clazz.new_($I$(2,1).c$$S,["sBIT_Grayscale"]);
node.setAttribute$S$S("gray", Integer.toString$I(this.sBIT_grayBits));
} else if (this.sBIT_colorType == 4) {
node=Clazz.new_($I$(2,1).c$$S,["sBIT_GrayAlpha"]);
node.setAttribute$S$S("gray", Integer.toString$I(this.sBIT_grayBits));
node.setAttribute$S$S("alpha", Integer.toString$I(this.sBIT_alphaBits));
} else if (this.sBIT_colorType == 2) {
node=Clazz.new_($I$(2,1).c$$S,["sBIT_RGB"]);
node.setAttribute$S$S("red", Integer.toString$I(this.sBIT_redBits));
node.setAttribute$S$S("green", Integer.toString$I(this.sBIT_greenBits));
node.setAttribute$S$S("blue", Integer.toString$I(this.sBIT_blueBits));
} else if (this.sBIT_colorType == 6) {
node=Clazz.new_($I$(2,1).c$$S,["sBIT_RGBAlpha"]);
node.setAttribute$S$S("red", Integer.toString$I(this.sBIT_redBits));
node.setAttribute$S$S("green", Integer.toString$I(this.sBIT_greenBits));
node.setAttribute$S$S("blue", Integer.toString$I(this.sBIT_blueBits));
node.setAttribute$S$S("alpha", Integer.toString$I(this.sBIT_alphaBits));
} else if (this.sBIT_colorType == 3) {
node=Clazz.new_($I$(2,1).c$$S,["sBIT_Palette"]);
node.setAttribute$S$S("red", Integer.toString$I(this.sBIT_redBits));
node.setAttribute$S$S("green", Integer.toString$I(this.sBIT_greenBits));
node.setAttribute$S$S("blue", Integer.toString$I(this.sBIT_blueBits));
}sBIT_node.appendChild$org_w3c_dom_Node(node);
root.appendChild$org_w3c_dom_Node(sBIT_node);
}if (this.sPLT_present) {
var sPLT_node=Clazz.new_($I$(2,1).c$$S,["sPLT"]);
sPLT_node.setAttribute$S$S("name", this.sPLT_paletteName);
sPLT_node.setAttribute$S$S("sampleDepth", Integer.toString$I(this.sPLT_sampleDepth));
var numEntries=this.sPLT_red.length;
for (var i=0; i < numEntries; i++) {
var entry=Clazz.new_($I$(2,1).c$$S,["sPLTEntry"]);
entry.setAttribute$S$S("index", Integer.toString$I(i));
entry.setAttribute$S$S("red", Integer.toString$I(this.sPLT_red[i]));
entry.setAttribute$S$S("green", Integer.toString$I(this.sPLT_green[i]));
entry.setAttribute$S$S("blue", Integer.toString$I(this.sPLT_blue[i]));
entry.setAttribute$S$S("alpha", Integer.toString$I(this.sPLT_alpha[i]));
entry.setAttribute$S$S("frequency", Integer.toString$I(this.sPLT_frequency[i]));
sPLT_node.appendChild$org_w3c_dom_Node(entry);
}
root.appendChild$org_w3c_dom_Node(sPLT_node);
}if (this.sRGB_present) {
var sRGB_node=Clazz.new_($I$(2,1).c$$S,["sRGB"]);
sRGB_node.setAttribute$S$S("renderingIntent", C$.renderingIntentNames[this.sRGB_renderingIntent]);
root.appendChild$org_w3c_dom_Node(sRGB_node);
}if (this.tEXt_keyword.size$() > 0) {
var tEXt_parent=Clazz.new_($I$(2,1).c$$S,["tEXt"]);
for (var i=0; i < this.tEXt_keyword.size$(); i++) {
var tEXt_node=Clazz.new_($I$(2,1).c$$S,["tEXtEntry"]);
tEXt_node.setAttribute$S$S("keyword", this.tEXt_keyword.get$I(i));
tEXt_node.setAttribute$S$S("value", this.tEXt_text.get$I(i));
tEXt_parent.appendChild$org_w3c_dom_Node(tEXt_node);
}
root.appendChild$org_w3c_dom_Node(tEXt_parent);
}if (this.tIME_present) {
var tIME_node=Clazz.new_($I$(2,1).c$$S,["tIME"]);
tIME_node.setAttribute$S$S("year", Integer.toString$I(this.tIME_year));
tIME_node.setAttribute$S$S("month", Integer.toString$I(this.tIME_month));
tIME_node.setAttribute$S$S("day", Integer.toString$I(this.tIME_day));
tIME_node.setAttribute$S$S("hour", Integer.toString$I(this.tIME_hour));
tIME_node.setAttribute$S$S("minute", Integer.toString$I(this.tIME_minute));
tIME_node.setAttribute$S$S("second", Integer.toString$I(this.tIME_second));
root.appendChild$org_w3c_dom_Node(tIME_node);
}if (this.tRNS_present) {
var tRNS_node=Clazz.new_($I$(2,1).c$$S,["tRNS"]);
if (this.tRNS_colorType == 3) {
node=Clazz.new_($I$(2,1).c$$S,["tRNS_Palette"]);
for (var i=0; i < this.tRNS_alpha.length; i++) {
var entry=Clazz.new_($I$(2,1).c$$S,["tRNS_PaletteEntry"]);
entry.setAttribute$S$S("index", Integer.toString$I(i));
entry.setAttribute$S$S("alpha", Integer.toString$I(this.tRNS_alpha[i] & 255));
node.appendChild$org_w3c_dom_Node(entry);
}
} else if (this.tRNS_colorType == 0) {
node=Clazz.new_($I$(2,1).c$$S,["tRNS_Grayscale"]);
node.setAttribute$S$S("gray", Integer.toString$I(this.tRNS_gray));
} else if (this.tRNS_colorType == 2) {
node=Clazz.new_($I$(2,1).c$$S,["tRNS_RGB"]);
node.setAttribute$S$S("red", Integer.toString$I(this.tRNS_red));
node.setAttribute$S$S("green", Integer.toString$I(this.tRNS_green));
node.setAttribute$S$S("blue", Integer.toString$I(this.tRNS_blue));
}tRNS_node.appendChild$org_w3c_dom_Node(node);
root.appendChild$org_w3c_dom_Node(tRNS_node);
}if (this.zTXt_keyword.size$() > 0) {
var zTXt_parent=Clazz.new_($I$(2,1).c$$S,["zTXt"]);
for (var i=0; i < this.zTXt_keyword.size$(); i++) {
var zTXt_node=Clazz.new_($I$(2,1).c$$S,["zTXtEntry"]);
zTXt_node.setAttribute$S$S("keyword", this.zTXt_keyword.get$I(i));
var cm=(this.zTXt_compressionMethod.get$I(i)).intValue$();
zTXt_node.setAttribute$S$S("compressionMethod", C$.zTXt_compressionMethodNames[cm]);
zTXt_node.setAttribute$S$S("text", this.zTXt_text.get$I(i));
zTXt_parent.appendChild$org_w3c_dom_Node(zTXt_node);
}
root.appendChild$org_w3c_dom_Node(zTXt_parent);
}if (this.unknownChunkType.size$() > 0) {
var unknown_parent=Clazz.new_($I$(2,1).c$$S,["UnknownChunks"]);
for (var i=0; i < this.unknownChunkType.size$(); i++) {
var unknown_node=Clazz.new_($I$(2,1).c$$S,["UnknownChunk"]);
unknown_node.setAttribute$S$S("type", this.unknownChunkType.get$I(i));
unknown_node.setUserObject$O(this.unknownChunkData.get$I(i));
unknown_parent.appendChild$org_w3c_dom_Node(unknown_node);
}
root.appendChild$org_w3c_dom_Node(unknown_parent);
}return root;
}, p$1);

Clazz.newMeth(C$, 'getNumChannels',  function () {
var numChannels=C$.IHDR_numChannels[this.IHDR_colorType];
if (this.IHDR_colorType == 3 && this.tRNS_present  && this.tRNS_colorType == this.IHDR_colorType ) {
numChannels=4;
}return numChannels;
}, p$1);

Clazz.newMeth(C$, 'getStandardChromaNode$',  function () {
var chroma_node=Clazz.new_($I$(2,1).c$$S,["Chroma"]);
var node=null;
node=Clazz.new_($I$(2,1).c$$S,["ColorSpaceType"]);
node.setAttribute$S$S("name", C$.colorSpaceTypeNames[this.IHDR_colorType]);
chroma_node.appendChild$org_w3c_dom_Node(node);
node=Clazz.new_($I$(2,1).c$$S,["NumChannels"]);
node.setAttribute$S$S("value", Integer.toString$I(p$1.getNumChannels.apply(this, [])));
chroma_node.appendChild$org_w3c_dom_Node(node);
if (this.gAMA_present) {
node=Clazz.new_($I$(2,1).c$$S,["Gamma"]);
node.setAttribute$S$S("value", Float.toString$F(this.gAMA_gamma * 1.0E-5));
chroma_node.appendChild$org_w3c_dom_Node(node);
}node=Clazz.new_($I$(2,1).c$$S,["BlackIsZero"]);
node.setAttribute$S$S("value", "TRUE");
chroma_node.appendChild$org_w3c_dom_Node(node);
if (this.PLTE_present) {
var hasAlpha=this.tRNS_present && (this.tRNS_colorType == 3) ;
node=Clazz.new_($I$(2,1).c$$S,["Palette"]);
for (var i=0; i < this.PLTE_red.length; i++) {
var entry=Clazz.new_($I$(2,1).c$$S,["PaletteEntry"]);
entry.setAttribute$S$S("index", Integer.toString$I(i));
entry.setAttribute$S$S("red", Integer.toString$I(this.PLTE_red[i] & 255));
entry.setAttribute$S$S("green", Integer.toString$I(this.PLTE_green[i] & 255));
entry.setAttribute$S$S("blue", Integer.toString$I(this.PLTE_blue[i] & 255));
if (hasAlpha) {
var alpha=(i < this.tRNS_alpha.length) ? (this.tRNS_alpha[i] & 255) : 255;
entry.setAttribute$S$S("alpha", Integer.toString$I(alpha));
}node.appendChild$org_w3c_dom_Node(entry);
}
chroma_node.appendChild$org_w3c_dom_Node(node);
}if (this.bKGD_present) {
if (this.bKGD_colorType == 3) {
node=Clazz.new_($I$(2,1).c$$S,["BackgroundIndex"]);
node.setAttribute$S$S("value", Integer.toString$I(this.bKGD_index));
} else {
node=Clazz.new_($I$(2,1).c$$S,["BackgroundColor"]);
var r;
var g;
var b;
if (this.bKGD_colorType == 0) {
r=g=b=this.bKGD_gray;
} else {
r=this.bKGD_red;
g=this.bKGD_green;
b=this.bKGD_blue;
}node.setAttribute$S$S("red", Integer.toString$I(r));
node.setAttribute$S$S("green", Integer.toString$I(g));
node.setAttribute$S$S("blue", Integer.toString$I(b));
}chroma_node.appendChild$org_w3c_dom_Node(node);
}return chroma_node;
});

Clazz.newMeth(C$, 'getStandardCompressionNode$',  function () {
var compression_node=Clazz.new_($I$(2,1).c$$S,["Compression"]);
var node=null;
node=Clazz.new_($I$(2,1).c$$S,["CompressionTypeName"]);
node.setAttribute$S$S("value", "deflate");
compression_node.appendChild$org_w3c_dom_Node(node);
node=Clazz.new_($I$(2,1).c$$S,["Lossless"]);
node.setAttribute$S$S("value", "TRUE");
compression_node.appendChild$org_w3c_dom_Node(node);
node=Clazz.new_($I$(2,1).c$$S,["NumProgressiveScans"]);
node.setAttribute$S$S("value", (this.IHDR_interlaceMethod == 0) ? "1" : "7");
compression_node.appendChild$org_w3c_dom_Node(node);
return compression_node;
});

Clazz.newMeth(C$, 'repeat$S$I',  function (s, times) {
if (times == 1) {
return s;
}var sb=Clazz.new_([(s.length$() + 1) * times - 1],$I$(3,1).c$$I);
sb.append$S(s);
for (var i=1; i < times; i++) {
sb.append$S(" ");
sb.append$S(s);
}
return sb.toString();
}, p$1);

Clazz.newMeth(C$, 'getStandardDataNode$',  function () {
var data_node=Clazz.new_($I$(2,1).c$$S,["Data"]);
var node=null;
node=Clazz.new_($I$(2,1).c$$S,["PlanarConfiguration"]);
node.setAttribute$S$S("value", "PixelInterleaved");
data_node.appendChild$org_w3c_dom_Node(node);
node=Clazz.new_($I$(2,1).c$$S,["SampleFormat"]);
node.setAttribute$S$S("value", this.IHDR_colorType == 3 ? "Index" : "UnsignedIntegral");
data_node.appendChild$org_w3c_dom_Node(node);
var bitDepth=Integer.toString$I(this.IHDR_bitDepth);
node=Clazz.new_($I$(2,1).c$$S,["BitsPerSample"]);
node.setAttribute$S$S("value", p$1.repeat$S$I.apply(this, [bitDepth, p$1.getNumChannels.apply(this, [])]));
data_node.appendChild$org_w3c_dom_Node(node);
if (this.sBIT_present) {
node=Clazz.new_($I$(2,1).c$$S,["SignificantBitsPerSample"]);
var sbits;
if (this.sBIT_colorType == 0 || this.sBIT_colorType == 4 ) {
sbits=Integer.toString$I(this.sBIT_grayBits);
} else {
sbits=Integer.toString$I(this.sBIT_redBits) + " " + Integer.toString$I(this.sBIT_greenBits) + " " + Integer.toString$I(this.sBIT_blueBits) ;
}if (this.sBIT_colorType == 4 || this.sBIT_colorType == 6 ) {
sbits+=" " + Integer.toString$I(this.sBIT_alphaBits);
}node.setAttribute$S$S("value", sbits);
data_node.appendChild$org_w3c_dom_Node(node);
}return data_node;
});

Clazz.newMeth(C$, 'getStandardDimensionNode$',  function () {
var dimension_node=Clazz.new_($I$(2,1).c$$S,["Dimension"]);
var node=null;
node=Clazz.new_($I$(2,1).c$$S,["PixelAspectRatio"]);
var ratio=this.pHYs_present ? this.pHYs_pixelsPerUnitXAxis / this.pHYs_pixelsPerUnitYAxis : 1.0;
node.setAttribute$S$S("value", Float.toString$F(ratio));
dimension_node.appendChild$org_w3c_dom_Node(node);
node=Clazz.new_($I$(2,1).c$$S,["ImageOrientation"]);
node.setAttribute$S$S("value", "Normal");
dimension_node.appendChild$org_w3c_dom_Node(node);
if (this.pHYs_present && this.pHYs_unitSpecifier == 1 ) {
node=Clazz.new_($I$(2,1).c$$S,["HorizontalPixelSize"]);
node.setAttribute$S$S("value", Float.toString$F(1000.0 / this.pHYs_pixelsPerUnitXAxis));
dimension_node.appendChild$org_w3c_dom_Node(node);
node=Clazz.new_($I$(2,1).c$$S,["VerticalPixelSize"]);
node.setAttribute$S$S("value", Float.toString$F(1000.0 / this.pHYs_pixelsPerUnitYAxis));
dimension_node.appendChild$org_w3c_dom_Node(node);
}return dimension_node;
});

Clazz.newMeth(C$, 'getStandardDocumentNode$',  function () {
if (!this.tIME_present) {
return null;
}var document_node=Clazz.new_($I$(2,1).c$$S,["Document"]);
var node=null;
node=Clazz.new_($I$(2,1).c$$S,["ImageModificationTime"]);
node.setAttribute$S$S("year", Integer.toString$I(this.tIME_year));
node.setAttribute$S$S("month", Integer.toString$I(this.tIME_month));
node.setAttribute$S$S("day", Integer.toString$I(this.tIME_day));
node.setAttribute$S$S("hour", Integer.toString$I(this.tIME_hour));
node.setAttribute$S$S("minute", Integer.toString$I(this.tIME_minute));
node.setAttribute$S$S("second", Integer.toString$I(this.tIME_second));
document_node.appendChild$org_w3c_dom_Node(node);
return document_node;
});

Clazz.newMeth(C$, 'getStandardTextNode$',  function () {
var numEntries=this.tEXt_keyword.size$() + this.iTXt_keyword.size$() + this.zTXt_keyword.size$() ;
if (numEntries == 0) {
return null;
}var text_node=Clazz.new_($I$(2,1).c$$S,["Text"]);
var node=null;
for (var i=0; i < this.tEXt_keyword.size$(); i++) {
node=Clazz.new_($I$(2,1).c$$S,["TextEntry"]);
node.setAttribute$S$S("keyword", this.tEXt_keyword.get$I(i));
node.setAttribute$S$S("value", this.tEXt_text.get$I(i));
node.setAttribute$S$S("encoding", "ISO-8859-1");
node.setAttribute$S$S("compression", "none");
text_node.appendChild$org_w3c_dom_Node(node);
}
for (var i=0; i < this.iTXt_keyword.size$(); i++) {
node=Clazz.new_($I$(2,1).c$$S,["TextEntry"]);
node.setAttribute$S$S("keyword", this.iTXt_keyword.get$I(i));
node.setAttribute$S$S("value", this.iTXt_text.get$I(i));
node.setAttribute$S$S("language", this.iTXt_languageTag.get$I(i));
if ((this.iTXt_compressionFlag.get$I(i)).valueOf()) {
node.setAttribute$S$S("compression", "zip");
} else {
node.setAttribute$S$S("compression", "none");
}text_node.appendChild$org_w3c_dom_Node(node);
}
for (var i=0; i < this.zTXt_keyword.size$(); i++) {
node=Clazz.new_($I$(2,1).c$$S,["TextEntry"]);
node.setAttribute$S$S("keyword", this.zTXt_keyword.get$I(i));
node.setAttribute$S$S("value", this.zTXt_text.get$I(i));
node.setAttribute$S$S("compression", "zip");
text_node.appendChild$org_w3c_dom_Node(node);
}
return text_node;
});

Clazz.newMeth(C$, 'getStandardTransparencyNode$',  function () {
var transparency_node=Clazz.new_($I$(2,1).c$$S,["Transparency"]);
var node=null;
node=Clazz.new_($I$(2,1).c$$S,["Alpha"]);
var hasAlpha=(this.IHDR_colorType == 6) || (this.IHDR_colorType == 4) || (this.IHDR_colorType == 3 && this.tRNS_present  && (this.tRNS_colorType == this.IHDR_colorType)  && (this.tRNS_alpha != null ) )  ;
node.setAttribute$S$S("value", hasAlpha ? "nonpremultipled" : "none");
transparency_node.appendChild$org_w3c_dom_Node(node);
if (this.tRNS_present) {
node=Clazz.new_($I$(2,1).c$$S,["TransparentColor"]);
if (this.tRNS_colorType == 2) {
node.setAttribute$S$S("value", Integer.toString$I(this.tRNS_red) + " " + Integer.toString$I(this.tRNS_green) + " " + Integer.toString$I(this.tRNS_blue) );
} else if (this.tRNS_colorType == 0) {
node.setAttribute$S$S("value", Integer.toString$I(this.tRNS_gray));
}transparency_node.appendChild$org_w3c_dom_Node(node);
}return transparency_node;
});

Clazz.newMeth(C$, 'fatal$org_w3c_dom_Node$S',  function (node, reason) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,[reason, node]);
}, p$1);

Clazz.newMeth(C$, 'getStringAttribute$org_w3c_dom_Node$S$S$Z',  function (node, name, defaultValue, required) {
var attr=node.getAttributes$().getNamedItem$S(name);
if (attr == null ) {
if (!required) {
return defaultValue;
} else {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Required attribute " + name + " not present!" ]);
}}return attr.getNodeValue$();
}, p$1);

Clazz.newMeth(C$, 'getIntAttribute$org_w3c_dom_Node$S$I$Z',  function (node, name, defaultValue, required) {
var value=p$1.getStringAttribute$org_w3c_dom_Node$S$S$Z.apply(this, [node, name, null, required]);
if (value == null ) {
return defaultValue;
}return Integer.parseInt$S(value);
}, p$1);

Clazz.newMeth(C$, 'getFloatAttribute$org_w3c_dom_Node$S$F$Z',  function (node, name, defaultValue, required) {
var value=p$1.getStringAttribute$org_w3c_dom_Node$S$S$Z.apply(this, [node, name, null, required]);
if (value == null ) {
return defaultValue;
}return Float.parseFloat$S(value);
}, p$1);

Clazz.newMeth(C$, 'getIntAttribute$org_w3c_dom_Node$S',  function (node, name) {
return p$1.getIntAttribute$org_w3c_dom_Node$S$I$Z.apply(this, [node, name, -1, true]);
}, p$1);

Clazz.newMeth(C$, 'getFloatAttribute$org_w3c_dom_Node$S',  function (node, name) {
return p$1.getFloatAttribute$org_w3c_dom_Node$S$F$Z.apply(this, [node, name, -1.0, true]);
}, p$1);

Clazz.newMeth(C$, 'getBooleanAttribute$org_w3c_dom_Node$S$Z$Z',  function (node, name, defaultValue, required) {
var attr=node.getAttributes$().getNamedItem$S(name);
if (attr == null ) {
if (!required) {
return defaultValue;
} else {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Required attribute " + name + " not present!" ]);
}}var value=attr.getNodeValue$();
if (value.equals$O("TRUE") || value.equals$O("true") ) {
return true;
} else if (value.equals$O("FALSE") || value.equals$O("false") ) {
return false;
} else {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Attribute " + name + " must be 'TRUE' or 'FALSE'!" ]);
return false;
}}, p$1);

Clazz.newMeth(C$, 'getBooleanAttribute$org_w3c_dom_Node$S',  function (node, name) {
return p$1.getBooleanAttribute$org_w3c_dom_Node$S$Z$Z.apply(this, [node, name, false, true]);
}, p$1);

Clazz.newMeth(C$, 'getEnumeratedAttribute$org_w3c_dom_Node$S$SA$I$Z',  function (node, name, legalNames, defaultValue, required) {
var attr=node.getAttributes$().getNamedItem$S(name);
if (attr == null ) {
if (!required) {
return defaultValue;
} else {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Required attribute " + name + " not present!" ]);
}}var value=attr.getNodeValue$();
for (var i=0; i < legalNames.length; i++) {
if (value.equals$O(legalNames[i])) {
return i;
}}
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Illegal value for attribute " + name + "!" ]);
return -1;
}, p$1);

Clazz.newMeth(C$, 'getEnumeratedAttribute$org_w3c_dom_Node$S$SA',  function (node, name, legalNames) {
return p$1.getEnumeratedAttribute$org_w3c_dom_Node$S$SA$I$Z.apply(this, [node, name, legalNames, -1, true]);
}, p$1);

Clazz.newMeth(C$, 'getAttribute$org_w3c_dom_Node$S$S$Z',  function (node, name, defaultValue, required) {
var attr=node.getAttributes$().getNamedItem$S(name);
if (attr == null ) {
if (!required) {
return defaultValue;
} else {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Required attribute " + name + " not present!" ]);
}}return attr.getNodeValue$();
}, p$1);

Clazz.newMeth(C$, 'getAttribute$org_w3c_dom_Node$S',  function (node, name) {
return p$1.getAttribute$org_w3c_dom_Node$S$S$Z.apply(this, [node, name, null, true]);
}, p$1);

Clazz.newMeth(C$, 'mergeTree$S$org_w3c_dom_Node',  function (formatName, root) {
if (formatName.equals$O("javax_imageio_png_1.0")) {
if (root == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["root == null!"]);
}p$1.mergeNativeTree$org_w3c_dom_Node.apply(this, [root]);
} else if (formatName.equals$O("javax_imageio_1.0")) {
if (root == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["root == null!"]);
}p$1.mergeStandardTree$org_w3c_dom_Node.apply(this, [root]);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a recognized format!"]);
}});

Clazz.newMeth(C$, 'mergeNativeTree$org_w3c_dom_Node',  function (root) {
var node=root;
if (!node.getNodeName$().equals$O("javax_imageio_png_1.0")) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Root must be javax_imageio_png_1.0"]);
}node=node.getFirstChild$();
while (node != null ){
var name=node.getNodeName$();
if (name.equals$O("IHDR")) {
this.IHDR_width=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [node, "width"]);
this.IHDR_height=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [node, "height"]);
this.IHDR_bitDepth=(Integer.valueOf$S(C$.IHDR_bitDepths[p$1.getEnumeratedAttribute$org_w3c_dom_Node$S$SA.apply(this, [node, "bitDepth", C$.IHDR_bitDepths])])).$c();
this.IHDR_colorType=p$1.getEnumeratedAttribute$org_w3c_dom_Node$S$SA.apply(this, [node, "colorType", C$.IHDR_colorTypeNames]);
this.IHDR_compressionMethod=p$1.getEnumeratedAttribute$org_w3c_dom_Node$S$SA.apply(this, [node, "compressionMethod", C$.IHDR_compressionMethodNames]);
this.IHDR_filterMethod=p$1.getEnumeratedAttribute$org_w3c_dom_Node$S$SA.apply(this, [node, "filterMethod", C$.IHDR_filterMethodNames]);
this.IHDR_interlaceMethod=p$1.getEnumeratedAttribute$org_w3c_dom_Node$S$SA.apply(this, [node, "interlaceMethod", C$.IHDR_interlaceMethodNames]);
this.IHDR_present=true;
} else if (name.equals$O("PLTE")) {
var red=Clazz.array(Byte.TYPE, [256]);
var green=Clazz.array(Byte.TYPE, [256]);
var blue=Clazz.array(Byte.TYPE, [256]);
var maxindex=-1;
var PLTE_entry=node.getFirstChild$();
if (PLTE_entry == null ) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Palette has no entries!"]);
}while (PLTE_entry != null ){
if (!PLTE_entry.getNodeName$().equals$O("PLTEEntry")) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Only a PLTEEntry may be a child of a PLTE!"]);
}var index=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [PLTE_entry, "index"]);
if (index < 0 || index > 255 ) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Bad value for PLTEEntry attribute index!"]);
}if (index > maxindex) {
maxindex=index;
}red[index]=(p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [PLTE_entry, "red"])|0);
green[index]=(p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [PLTE_entry, "green"])|0);
blue[index]=(p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [PLTE_entry, "blue"])|0);
PLTE_entry=PLTE_entry.getNextSibling$();
}
var numEntries=maxindex + 1;
this.PLTE_red=Clazz.array(Byte.TYPE, [numEntries]);
this.PLTE_green=Clazz.array(Byte.TYPE, [numEntries]);
this.PLTE_blue=Clazz.array(Byte.TYPE, [numEntries]);
System.arraycopy$O$I$O$I$I(red, 0, this.PLTE_red, 0, numEntries);
System.arraycopy$O$I$O$I$I(green, 0, this.PLTE_green, 0, numEntries);
System.arraycopy$O$I$O$I$I(blue, 0, this.PLTE_blue, 0, numEntries);
this.PLTE_present=true;
} else if (name.equals$O("bKGD")) {
this.bKGD_present=false;
var bKGD_node=node.getFirstChild$();
if (bKGD_node == null ) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "bKGD node has no children!"]);
}var bKGD_name=bKGD_node.getNodeName$();
if (bKGD_name.equals$O("bKGD_Palette")) {
this.bKGD_index=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [bKGD_node, "index"]);
this.bKGD_colorType=3;
} else if (bKGD_name.equals$O("bKGD_Grayscale")) {
this.bKGD_gray=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [bKGD_node, "gray"]);
this.bKGD_colorType=0;
} else if (bKGD_name.equals$O("bKGD_RGB")) {
this.bKGD_red=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [bKGD_node, "red"]);
this.bKGD_green=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [bKGD_node, "green"]);
this.bKGD_blue=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [bKGD_node, "blue"]);
this.bKGD_colorType=2;
} else {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Bad child of a bKGD node!"]);
}if (bKGD_node.getNextSibling$() != null ) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "bKGD node has more than one child!"]);
}this.bKGD_present=true;
} else if (name.equals$O("cHRM")) {
this.cHRM_whitePointX=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [node, "whitePointX"]);
this.cHRM_whitePointY=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [node, "whitePointY"]);
this.cHRM_redX=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [node, "redX"]);
this.cHRM_redY=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [node, "redY"]);
this.cHRM_greenX=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [node, "greenX"]);
this.cHRM_greenY=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [node, "greenY"]);
this.cHRM_blueX=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [node, "blueX"]);
this.cHRM_blueY=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [node, "blueY"]);
this.cHRM_present=true;
} else if (name.equals$O("gAMA")) {
this.gAMA_gamma=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [node, "value"]);
this.gAMA_present=true;
} else if (name.equals$O("hIST")) {
var hist=Clazz.array(Character.TYPE, [256]);
var maxindex=-1;
var hIST_entry=node.getFirstChild$();
if (hIST_entry == null ) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "hIST node has no children!"]);
}while (hIST_entry != null ){
if (!hIST_entry.getNodeName$().equals$O("hISTEntry")) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Only a hISTEntry may be a child of a hIST!"]);
}var index=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [hIST_entry, "index"]);
if (index < 0 || index > 255 ) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Bad value for histEntry attribute index!"]);
}if (index > maxindex) {
maxindex=index;
}hist[index]=String.fromCharCode(p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [hIST_entry, "value"]));
hIST_entry=hIST_entry.getNextSibling$();
}
var numEntries=maxindex + 1;
this.hIST_histogram=Clazz.array(Character.TYPE, [numEntries]);
System.arraycopy$O$I$O$I$I(hist, 0, this.hIST_histogram, 0, numEntries);
this.hIST_present=true;
} else if (name.equals$O("iCCP")) {
this.iCCP_profileName=p$1.getAttribute$org_w3c_dom_Node$S.apply(this, [node, "profileName"]);
this.iCCP_compressionMethod=p$1.getEnumeratedAttribute$org_w3c_dom_Node$S$SA.apply(this, [node, "compressionMethod", C$.iCCP_compressionMethodNames]);
var compressedProfile=(node).getUserObject$();
if (compressedProfile == null ) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "No ICCP profile present in user object!"]);
}if (!(Clazz.instanceOf(compressedProfile, Clazz.array(Byte.TYPE, -1)))) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "User object not a byte array!"]);
}this.iCCP_compressedProfile=(compressedProfile).clone$();
this.iCCP_present=true;
} else if (name.equals$O("iTXt")) {
var iTXt_node=node.getFirstChild$();
while (iTXt_node != null ){
if (!iTXt_node.getNodeName$().equals$O("iTXtEntry")) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Only an iTXtEntry may be a child of an iTXt!"]);
}var keyword=p$1.getAttribute$org_w3c_dom_Node$S.apply(this, [iTXt_node, "keyword"]);
if (p$1.isValidKeyword$S.apply(this, [keyword])) {
this.iTXt_keyword.add$O(keyword);
var compressionFlag=p$1.getBooleanAttribute$org_w3c_dom_Node$S.apply(this, [iTXt_node, "compressionFlag"]);
this.iTXt_compressionFlag.add$O(Boolean.valueOf$Z(compressionFlag));
var compressionMethod=p$1.getAttribute$org_w3c_dom_Node$S.apply(this, [iTXt_node, "compressionMethod"]);
this.iTXt_compressionMethod.add$O(Integer.valueOf$S(compressionMethod));
var languageTag=p$1.getAttribute$org_w3c_dom_Node$S.apply(this, [iTXt_node, "languageTag"]);
this.iTXt_languageTag.add$O(languageTag);
var translatedKeyword=p$1.getAttribute$org_w3c_dom_Node$S.apply(this, [iTXt_node, "translatedKeyword"]);
this.iTXt_translatedKeyword.add$O(translatedKeyword);
var text=p$1.getAttribute$org_w3c_dom_Node$S.apply(this, [iTXt_node, "text"]);
this.iTXt_text.add$O(text);
}iTXt_node=iTXt_node.getNextSibling$();
}
} else if (name.equals$O("pHYs")) {
this.pHYs_pixelsPerUnitXAxis=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [node, "pixelsPerUnitXAxis"]);
this.pHYs_pixelsPerUnitYAxis=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [node, "pixelsPerUnitYAxis"]);
this.pHYs_unitSpecifier=p$1.getEnumeratedAttribute$org_w3c_dom_Node$S$SA.apply(this, [node, "unitSpecifier", C$.unitSpecifierNames]);
this.pHYs_present=true;
} else if (name.equals$O("sBIT")) {
this.sBIT_present=false;
var sBIT_node=node.getFirstChild$();
if (sBIT_node == null ) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "sBIT node has no children!"]);
}var sBIT_name=sBIT_node.getNodeName$();
if (sBIT_name.equals$O("sBIT_Grayscale")) {
this.sBIT_grayBits=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [sBIT_node, "gray"]);
this.sBIT_colorType=0;
} else if (sBIT_name.equals$O("sBIT_GrayAlpha")) {
this.sBIT_grayBits=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [sBIT_node, "gray"]);
this.sBIT_alphaBits=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [sBIT_node, "alpha"]);
this.sBIT_colorType=4;
} else if (sBIT_name.equals$O("sBIT_RGB")) {
this.sBIT_redBits=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [sBIT_node, "red"]);
this.sBIT_greenBits=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [sBIT_node, "green"]);
this.sBIT_blueBits=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [sBIT_node, "blue"]);
this.sBIT_colorType=2;
} else if (sBIT_name.equals$O("sBIT_RGBAlpha")) {
this.sBIT_redBits=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [sBIT_node, "red"]);
this.sBIT_greenBits=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [sBIT_node, "green"]);
this.sBIT_blueBits=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [sBIT_node, "blue"]);
this.sBIT_alphaBits=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [sBIT_node, "alpha"]);
this.sBIT_colorType=6;
} else if (sBIT_name.equals$O("sBIT_Palette")) {
this.sBIT_redBits=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [sBIT_node, "red"]);
this.sBIT_greenBits=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [sBIT_node, "green"]);
this.sBIT_blueBits=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [sBIT_node, "blue"]);
this.sBIT_colorType=3;
} else {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Bad child of an sBIT node!"]);
}if (sBIT_node.getNextSibling$() != null ) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "sBIT node has more than one child!"]);
}this.sBIT_present=true;
} else if (name.equals$O("sPLT")) {
this.sPLT_paletteName=p$1.getAttribute$org_w3c_dom_Node$S.apply(this, [node, "name"]);
this.sPLT_sampleDepth=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [node, "sampleDepth"]);
var red=Clazz.array(Integer.TYPE, [256]);
var green=Clazz.array(Integer.TYPE, [256]);
var blue=Clazz.array(Integer.TYPE, [256]);
var alpha=Clazz.array(Integer.TYPE, [256]);
var frequency=Clazz.array(Integer.TYPE, [256]);
var maxindex=-1;
var sPLT_entry=node.getFirstChild$();
if (sPLT_entry == null ) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "sPLT node has no children!"]);
}while (sPLT_entry != null ){
if (!sPLT_entry.getNodeName$().equals$O("sPLTEntry")) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Only an sPLTEntry may be a child of an sPLT!"]);
}var index=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [sPLT_entry, "index"]);
if (index < 0 || index > 255 ) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Bad value for PLTEEntry attribute index!"]);
}if (index > maxindex) {
maxindex=index;
}red[index]=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [sPLT_entry, "red"]);
green[index]=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [sPLT_entry, "green"]);
blue[index]=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [sPLT_entry, "blue"]);
alpha[index]=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [sPLT_entry, "alpha"]);
frequency[index]=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [sPLT_entry, "frequency"]);
sPLT_entry=sPLT_entry.getNextSibling$();
}
var numEntries=maxindex + 1;
this.sPLT_red=Clazz.array(Integer.TYPE, [numEntries]);
this.sPLT_green=Clazz.array(Integer.TYPE, [numEntries]);
this.sPLT_blue=Clazz.array(Integer.TYPE, [numEntries]);
this.sPLT_alpha=Clazz.array(Integer.TYPE, [numEntries]);
this.sPLT_frequency=Clazz.array(Integer.TYPE, [numEntries]);
System.arraycopy$O$I$O$I$I(red, 0, this.sPLT_red, 0, numEntries);
System.arraycopy$O$I$O$I$I(green, 0, this.sPLT_green, 0, numEntries);
System.arraycopy$O$I$O$I$I(blue, 0, this.sPLT_blue, 0, numEntries);
System.arraycopy$O$I$O$I$I(alpha, 0, this.sPLT_alpha, 0, numEntries);
System.arraycopy$O$I$O$I$I(frequency, 0, this.sPLT_frequency, 0, numEntries);
this.sPLT_present=true;
} else if (name.equals$O("sRGB")) {
this.sRGB_renderingIntent=p$1.getEnumeratedAttribute$org_w3c_dom_Node$S$SA.apply(this, [node, "renderingIntent", C$.renderingIntentNames]);
this.sRGB_present=true;
} else if (name.equals$O("tEXt")) {
var tEXt_node=node.getFirstChild$();
while (tEXt_node != null ){
if (!tEXt_node.getNodeName$().equals$O("tEXtEntry")) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Only an tEXtEntry may be a child of an tEXt!"]);
}var keyword=p$1.getAttribute$org_w3c_dom_Node$S.apply(this, [tEXt_node, "keyword"]);
this.tEXt_keyword.add$O(keyword);
var text=p$1.getAttribute$org_w3c_dom_Node$S.apply(this, [tEXt_node, "value"]);
this.tEXt_text.add$O(text);
tEXt_node=tEXt_node.getNextSibling$();
}
} else if (name.equals$O("tIME")) {
this.tIME_year=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [node, "year"]);
this.tIME_month=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [node, "month"]);
this.tIME_day=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [node, "day"]);
this.tIME_hour=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [node, "hour"]);
this.tIME_minute=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [node, "minute"]);
this.tIME_second=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [node, "second"]);
this.tIME_present=true;
} else if (name.equals$O("tRNS")) {
this.tRNS_present=false;
var tRNS_node=node.getFirstChild$();
if (tRNS_node == null ) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "tRNS node has no children!"]);
}var tRNS_name=tRNS_node.getNodeName$();
if (tRNS_name.equals$O("tRNS_Palette")) {
var alpha=Clazz.array(Byte.TYPE, [256]);
var maxindex=-1;
var tRNS_paletteEntry=tRNS_node.getFirstChild$();
if (tRNS_paletteEntry == null ) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "tRNS_Palette node has no children!"]);
}while (tRNS_paletteEntry != null ){
if (!tRNS_paletteEntry.getNodeName$().equals$O("tRNS_PaletteEntry")) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Only a tRNS_PaletteEntry may be a child of a tRNS_Palette!"]);
}var index=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [tRNS_paletteEntry, "index"]);
if (index < 0 || index > 255 ) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Bad value for tRNS_PaletteEntry attribute index!"]);
}if (index > maxindex) {
maxindex=index;
}alpha[index]=(p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [tRNS_paletteEntry, "alpha"])|0);
tRNS_paletteEntry=tRNS_paletteEntry.getNextSibling$();
}
var numEntries=maxindex + 1;
this.tRNS_alpha=Clazz.array(Byte.TYPE, [numEntries]);
this.tRNS_colorType=3;
System.arraycopy$O$I$O$I$I(alpha, 0, this.tRNS_alpha, 0, numEntries);
} else if (tRNS_name.equals$O("tRNS_Grayscale")) {
this.tRNS_gray=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [tRNS_node, "gray"]);
this.tRNS_colorType=0;
} else if (tRNS_name.equals$O("tRNS_RGB")) {
this.tRNS_red=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [tRNS_node, "red"]);
this.tRNS_green=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [tRNS_node, "green"]);
this.tRNS_blue=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [tRNS_node, "blue"]);
this.tRNS_colorType=2;
} else {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Bad child of a tRNS node!"]);
}if (tRNS_node.getNextSibling$() != null ) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "tRNS node has more than one child!"]);
}this.tRNS_present=true;
} else if (name.equals$O("zTXt")) {
var zTXt_node=node.getFirstChild$();
while (zTXt_node != null ){
if (!zTXt_node.getNodeName$().equals$O("zTXtEntry")) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Only an zTXtEntry may be a child of an zTXt!"]);
}var keyword=p$1.getAttribute$org_w3c_dom_Node$S.apply(this, [zTXt_node, "keyword"]);
this.zTXt_keyword.add$O(keyword);
var compressionMethod=p$1.getEnumeratedAttribute$org_w3c_dom_Node$S$SA.apply(this, [zTXt_node, "compressionMethod", C$.zTXt_compressionMethodNames]);
this.zTXt_compressionMethod.add$O( new Integer(compressionMethod));
var text=p$1.getAttribute$org_w3c_dom_Node$S.apply(this, [zTXt_node, "text"]);
this.zTXt_text.add$O(text);
zTXt_node=zTXt_node.getNextSibling$();
}
} else if (name.equals$O("UnknownChunks")) {
var unknown_node=node.getFirstChild$();
while (unknown_node != null ){
if (!unknown_node.getNodeName$().equals$O("UnknownChunk")) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Only an UnknownChunk may be a child of an UnknownChunks!"]);
}var chunkType=p$1.getAttribute$org_w3c_dom_Node$S.apply(this, [unknown_node, "type"]);
var chunkData=(unknown_node).getUserObject$();
if (chunkType.length$() != 4) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [unknown_node, "Chunk type must be 4 characters!"]);
}if (chunkData == null ) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [unknown_node, "No chunk data present in user object!"]);
}if (!(Clazz.instanceOf(chunkData, Clazz.array(Byte.TYPE, -1)))) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [unknown_node, "User object not a byte array!"]);
}this.unknownChunkType.add$O(chunkType);
this.unknownChunkData.add$O((chunkData).clone$());
unknown_node=unknown_node.getNextSibling$();
}
} else {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Unknown child of root node!"]);
}node=node.getNextSibling$();
}
}, p$1);

Clazz.newMeth(C$, 'isValidKeyword$S',  function (s) {
var len=s.length$();
if (len < 1 || len >= 80 ) {
return false;
}if (s.startsWith$S(" ") || s.endsWith$S(" ") || s.contains$CharSequence("  ")  ) {
return false;
}return p$1.isISOLatin$S$Z.apply(this, [s, false]);
}, p$1);

Clazz.newMeth(C$, 'isISOLatin$S$Z',  function (s, isLineFeedAllowed) {
var len=s.length$();
for (var i=0; i < len; i++) {
var c=s.charAt$I(i);
if (c.$c() < 32  || c.$c() > 255   || (c.$c() > 126  && c.$c() < 161  ) ) {
if (!isLineFeedAllowed || c.$c() != 16  ) {
return false;
}}}
return true;
}, p$1);

Clazz.newMeth(C$, 'mergeStandardTree$org_w3c_dom_Node',  function (root) {
var node=root;
if (!node.getNodeName$().equals$O("javax_imageio_1.0")) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Root must be javax_imageio_1.0"]);
}node=node.getFirstChild$();
while (node != null ){
var name=node.getNodeName$();
if (name.equals$O("Chroma")) {
var child=node.getFirstChild$();
while (child != null ){
var childName=child.getNodeName$();
if (childName.equals$O("Gamma")) {
var gamma=p$1.getFloatAttribute$org_w3c_dom_Node$S.apply(this, [child, "value"]);
this.gAMA_present=true;
this.gAMA_gamma=((gamma * 100000 + 0.5)|0);
} else if (childName.equals$O("Palette")) {
var red=Clazz.array(Byte.TYPE, [256]);
var green=Clazz.array(Byte.TYPE, [256]);
var blue=Clazz.array(Byte.TYPE, [256]);
var maxindex=-1;
var entry=child.getFirstChild$();
while (entry != null ){
var index=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [entry, "index"]);
if (index >= 0 && index <= 255 ) {
red[index]=(p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [entry, "red"])|0);
green[index]=(p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [entry, "green"])|0);
blue[index]=(p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [entry, "blue"])|0);
if (index > maxindex) {
maxindex=index;
}}entry=entry.getNextSibling$();
}
var numEntries=maxindex + 1;
this.PLTE_red=Clazz.array(Byte.TYPE, [numEntries]);
this.PLTE_green=Clazz.array(Byte.TYPE, [numEntries]);
this.PLTE_blue=Clazz.array(Byte.TYPE, [numEntries]);
System.arraycopy$O$I$O$I$I(red, 0, this.PLTE_red, 0, numEntries);
System.arraycopy$O$I$O$I$I(green, 0, this.PLTE_green, 0, numEntries);
System.arraycopy$O$I$O$I$I(blue, 0, this.PLTE_blue, 0, numEntries);
this.PLTE_present=true;
} else if (childName.equals$O("BackgroundIndex")) {
this.bKGD_present=true;
this.bKGD_colorType=3;
this.bKGD_index=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [child, "value"]);
} else if (childName.equals$O("BackgroundColor")) {
var red=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [child, "red"]);
var green=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [child, "green"]);
var blue=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [child, "blue"]);
if (red == green && red == blue ) {
this.bKGD_colorType=0;
this.bKGD_gray=red;
} else {
this.bKGD_red=red;
this.bKGD_green=green;
this.bKGD_blue=blue;
}this.bKGD_present=true;
}child=child.getNextSibling$();
}
} else if (name.equals$O("Compression")) {
var child=node.getFirstChild$();
while (child != null ){
var childName=child.getNodeName$();
if (childName.equals$O("NumProgressiveScans")) {
var scans=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [child, "value"]);
this.IHDR_interlaceMethod=(scans > 1) ? 1 : 0;
}child=child.getNextSibling$();
}
} else if (name.equals$O("Data")) {
var child=node.getFirstChild$();
while (child != null ){
var childName=child.getNodeName$();
if (childName.equals$O("BitsPerSample")) {
var s=p$1.getAttribute$org_w3c_dom_Node$S.apply(this, [child, "value"]);
var t=Clazz.new_($I$(4,1).c$$S,[s]);
var maxBits=-1;
while (t.hasMoreTokens$()){
var bits=Integer.parseInt$S(t.nextToken$());
if (bits > maxBits) {
maxBits=bits;
}}
if (maxBits < 1) {
maxBits=1;
}if (maxBits == 3) maxBits=4;
if (maxBits > 4 || maxBits < 8 ) {
maxBits=8;
}if (maxBits > 8) {
maxBits=16;
}this.IHDR_bitDepth=maxBits;
} else if (childName.equals$O("SignificantBitsPerSample")) {
var s=p$1.getAttribute$org_w3c_dom_Node$S.apply(this, [child, "value"]);
var t=Clazz.new_($I$(4,1).c$$S,[s]);
var numTokens=t.countTokens$();
if (numTokens == 1) {
this.sBIT_colorType=0;
this.sBIT_grayBits=Integer.parseInt$S(t.nextToken$());
} else if (numTokens == 2) {
this.sBIT_colorType=4;
this.sBIT_grayBits=Integer.parseInt$S(t.nextToken$());
this.sBIT_alphaBits=Integer.parseInt$S(t.nextToken$());
} else if (numTokens == 3) {
this.sBIT_colorType=2;
this.sBIT_redBits=Integer.parseInt$S(t.nextToken$());
this.sBIT_greenBits=Integer.parseInt$S(t.nextToken$());
this.sBIT_blueBits=Integer.parseInt$S(t.nextToken$());
} else if (numTokens == 4) {
this.sBIT_colorType=6;
this.sBIT_redBits=Integer.parseInt$S(t.nextToken$());
this.sBIT_greenBits=Integer.parseInt$S(t.nextToken$());
this.sBIT_blueBits=Integer.parseInt$S(t.nextToken$());
this.sBIT_alphaBits=Integer.parseInt$S(t.nextToken$());
}if (numTokens >= 1 && numTokens <= 4 ) {
this.sBIT_present=true;
}}child=child.getNextSibling$();
}
} else if (name.equals$O("Dimension")) {
var gotWidth=false;
var gotHeight=false;
var gotAspectRatio=false;
var width=-1.0;
var height=-1.0;
var aspectRatio=-1.0;
var child=node.getFirstChild$();
while (child != null ){
var childName=child.getNodeName$();
if (childName.equals$O("PixelAspectRatio")) {
aspectRatio=p$1.getFloatAttribute$org_w3c_dom_Node$S.apply(this, [child, "value"]);
gotAspectRatio=true;
} else if (childName.equals$O("HorizontalPixelSize")) {
width=p$1.getFloatAttribute$org_w3c_dom_Node$S.apply(this, [child, "value"]);
gotWidth=true;
} else if (childName.equals$O("VerticalPixelSize")) {
height=p$1.getFloatAttribute$org_w3c_dom_Node$S.apply(this, [child, "value"]);
gotHeight=true;
}child=child.getNextSibling$();
}
if (gotWidth && gotHeight ) {
this.pHYs_present=true;
this.pHYs_unitSpecifier=1;
this.pHYs_pixelsPerUnitXAxis=((width * 1000 + 0.5)|0);
this.pHYs_pixelsPerUnitYAxis=((height * 1000 + 0.5)|0);
} else if (gotAspectRatio) {
this.pHYs_present=true;
this.pHYs_unitSpecifier=0;
var denom=1;
for (; denom < 100; denom++) {
var num=((aspectRatio * denom)|0);
if (Math.abs((num/denom|0) - aspectRatio) < 0.001 ) {
break;
}}
this.pHYs_pixelsPerUnitXAxis=((aspectRatio * denom)|0);
this.pHYs_pixelsPerUnitYAxis=denom;
}} else if (name.equals$O("Document")) {
var child=node.getFirstChild$();
while (child != null ){
var childName=child.getNodeName$();
if (childName.equals$O("ImageModificationTime")) {
this.tIME_present=true;
this.tIME_year=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [child, "year"]);
this.tIME_month=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [child, "month"]);
this.tIME_day=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [child, "day"]);
this.tIME_hour=p$1.getIntAttribute$org_w3c_dom_Node$S$I$Z.apply(this, [child, "hour", 0, false]);
this.tIME_minute=p$1.getIntAttribute$org_w3c_dom_Node$S$I$Z.apply(this, [child, "minute", 0, false]);
this.tIME_second=p$1.getIntAttribute$org_w3c_dom_Node$S$I$Z.apply(this, [child, "second", 0, false]);
}child=child.getNextSibling$();
}
} else if (name.equals$O("Text")) {
var child=node.getFirstChild$();
while (child != null ){
var childName=child.getNodeName$();
if (childName.equals$O("TextEntry")) {
var keyword=p$1.getAttribute$org_w3c_dom_Node$S$S$Z.apply(this, [child, "keyword", "", false]);
var value=p$1.getAttribute$org_w3c_dom_Node$S.apply(this, [child, "value"]);
var language=p$1.getAttribute$org_w3c_dom_Node$S$S$Z.apply(this, [child, "language", "", false]);
var compression=p$1.getAttribute$org_w3c_dom_Node$S$S$Z.apply(this, [child, "compression", "none", false]);
if (!p$1.isValidKeyword$S.apply(this, [keyword])) {
} else if (p$1.isISOLatin$S$Z.apply(this, [value, true])) {
if (compression.equals$O("zip")) {
this.zTXt_keyword.add$O(keyword);
this.zTXt_text.add$O(value);
this.zTXt_compressionMethod.add$O(Integer.valueOf$I(0));
} else {
this.tEXt_keyword.add$O(keyword);
this.tEXt_text.add$O(value);
}} else {
this.iTXt_keyword.add$O(keyword);
this.iTXt_compressionFlag.add$O(Boolean.valueOf$Z(compression.equals$O("zip")));
this.iTXt_compressionMethod.add$O(Integer.valueOf$I(0));
this.iTXt_languageTag.add$O(language);
this.iTXt_translatedKeyword.add$O(keyword);
this.iTXt_text.add$O(value);
}}child=child.getNextSibling$();
}
}node=node.getNextSibling$();
}
}, p$1);

Clazz.newMeth(C$, 'reset$',  function () {
this.IHDR_present=false;
this.PLTE_present=false;
this.bKGD_present=false;
this.cHRM_present=false;
this.gAMA_present=false;
this.hIST_present=false;
this.iCCP_present=false;
this.iTXt_keyword=Clazz.new_($I$(1,1));
this.iTXt_compressionFlag=Clazz.new_($I$(1,1));
this.iTXt_compressionMethod=Clazz.new_($I$(1,1));
this.iTXt_languageTag=Clazz.new_($I$(1,1));
this.iTXt_translatedKeyword=Clazz.new_($I$(1,1));
this.iTXt_text=Clazz.new_($I$(1,1));
this.pHYs_present=false;
this.sBIT_present=false;
this.sPLT_present=false;
this.sRGB_present=false;
this.tEXt_keyword=Clazz.new_($I$(1,1));
this.tEXt_text=Clazz.new_($I$(1,1));
this.tIME_present=false;
this.tRNS_present=false;
this.zTXt_keyword=Clazz.new_($I$(1,1));
this.zTXt_compressionMethod=Clazz.new_($I$(1,1));
this.zTXt_text=Clazz.new_($I$(1,1));
this.unknownChunkType=Clazz.new_($I$(1,1));
this.unknownChunkData=Clazz.new_($I$(1,1));
});

C$.$static$=function(){C$.$static$=0;
C$.IHDR_colorTypeNames=Clazz.array(String, -1, ["Grayscale", null, "RGB", "Palette", "GrayAlpha", null, "RGBAlpha"]);
C$.IHDR_numChannels=Clazz.array(Integer.TYPE, -1, [1, 0, 3, 3, 2, 0, 4]);
C$.IHDR_bitDepths=Clazz.array(String, -1, ["1", "2", "4", "8", "16"]);
C$.IHDR_compressionMethodNames=Clazz.array(String, -1, ["deflate"]);
C$.IHDR_filterMethodNames=Clazz.array(String, -1, ["adaptive"]);
C$.IHDR_interlaceMethodNames=Clazz.array(String, -1, ["none", "adam7"]);
C$.iCCP_compressionMethodNames=Clazz.array(String, -1, ["deflate"]);
C$.zTXt_compressionMethodNames=Clazz.array(String, -1, ["deflate"]);
C$.unitSpecifierNames=Clazz.array(String, -1, ["unknown", "meter"]);
C$.renderingIntentNames=Clazz.array(String, -1, ["Perceptual", "Relative colorimetric", "Saturation", "Absolute colorimetric"]);
C$.colorSpaceTypeNames=Clazz.array(String, -1, ["GRAY", null, "RGB", "RGB", "GRAY", null, "RGB"]);
};
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
