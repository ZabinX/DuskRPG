(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.png"),p$1={},I$=[[0,'com.sun.imageio.plugins.common.SubImageInputStream','com.sun.imageio.plugins.common.InputStreamAdapter','java.awt.Point','com.sun.imageio.plugins.png.PNGMetadata','java.io.ByteArrayOutputStream','java.io.ByteArrayInputStream','java.util.zip.InflaterInputStream','StringBuilder','java.awt.image.DataBufferByte','java.awt.image.Raster','java.awt.image.DataBufferUShort','com.sun.imageio.plugins.common.ReaderUtil','com.sun.imageio.plugins.png.PNGImageDataEnumeration','java.io.SequenceInputStream','java.util.zip.Inflater','java.io.BufferedInputStream','java.io.DataInputStream','javax.imageio.ImageReader','java.awt.Rectangle','java.util.ArrayList','javax.imageio.ImageTypeSpecifier','java.awt.color.ColorSpace','java.util.Arrays','javax.imageio.ImageReadParam']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PNGImageReader", null, 'javax.imageio.ImageReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.stream=null;
this.gotHeader=false;
this.gotMetadata=false;
this.lastParam=null;
this.imageStartPosition=(Long.$neg(1));
this.sourceRegion=null;
this.sourceXSubsampling=-1;
this.sourceYSubsampling=-1;
this.sourceMinProgressivePass=0;
this.sourceMaxProgressivePass=6;
this.sourceBands=null;
this.destinationBands=null;
this.destinationOffset=Clazz.new_($I$(3,1).c$$I$I,[0, 0]);
this.metadata=Clazz.new_($I$(4,1));
this.pixelStream=null;
this.theImage=null;
this.pixelsDone=0;
},1);

C$.$fields$=[['Z',['gotHeader','gotMetadata'],'I',['sourceXSubsampling','sourceYSubsampling','sourceMinProgressivePass','sourceMaxProgressivePass','pixelsDone','totalPixels'],'J',['imageStartPosition'],'O',['stream','javax.imageio.stream.ImageInputStream','lastParam','javax.imageio.ImageReadParam','sourceRegion','java.awt.Rectangle','sourceBands','int[]','+destinationBands','destinationOffset','java.awt.Point','metadata','com.sun.imageio.plugins.png.PNGMetadata','pixelStream','java.io.DataInputStream','theImage','java.awt.image.BufferedImage']]
,['O',['inputBandsForColorType','int[]','+adam7XOffset','+adam7YOffset','+adam7XSubsampling','+adam7YSubsampling','bandOffsets','int[][]']]]

Clazz.newMeth(C$, 'c$$javax_imageio_spi_ImageReaderSpi',  function (originatingProvider) {
;C$.superclazz.c$$javax_imageio_spi_ImageReaderSpi.apply(this,[originatingProvider]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setInput$O$Z$Z',  function (input, seekForwardOnly, ignoreMetadata) {
C$.superclazz.prototype.setInput$O$Z$Z.apply(this, [input, seekForwardOnly, ignoreMetadata]);
this.stream=input;
p$1.resetStreamSettings.apply(this, []);
});

Clazz.newMeth(C$, 'readNullTerminatedString$S$I',  function (charset, maxLen) {
var baos=Clazz.new_($I$(5,1));
var b;
var count=0;
while ((maxLen > count++) && ((b=this.stream.read$()) != 0) ){
if (b == -1) throw Clazz.new_(Clazz.load('java.io.EOFException'));
baos.write$I(b);
}
return  String.instantialize(baos.toByteArray$(), charset);
}, p$1);

Clazz.newMeth(C$, 'readHeader',  function () {
if (this.gotHeader) {
return;
}if (this.stream == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Input source not set!"]);
}try {
var signature=Clazz.array(Byte.TYPE, [8]);
this.stream.readFully$BA(signature);
if (signature[0] != -119 || signature[1] != 80  || signature[2] != 78  || signature[3] != 71  || signature[4] != 13  || signature[5] != 10  || signature[6] != 26  || signature[7] != 10 ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Bad PNG signature!"]);
}var IHDR_length=this.stream.readInt$();
if (IHDR_length != 13) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Bad length for IHDR chunk!"]);
}var IHDR_type=this.stream.readInt$();
if (IHDR_type != 1229472850) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Bad type for IHDR chunk!"]);
}this.metadata=Clazz.new_($I$(4,1));
var width=this.stream.readInt$();
var height=this.stream.readInt$();
this.stream.readFully$BA$I$I(signature, 0, 5);
var bitDepth=signature[0] & 255;
var colorType=signature[1] & 255;
var compressionMethod=signature[2] & 255;
var filterMethod=signature[3] & 255;
var interlaceMethod=signature[4] & 255;
this.stream.skipBytes$I(4);
this.stream.flushBefore$J(this.stream.getStreamPosition$());
if (width == 0) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Image width == 0!"]);
}if (height == 0) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Image height == 0!"]);
}if (bitDepth != 1 && bitDepth != 2  && bitDepth != 4  && bitDepth != 8  && bitDepth != 16 ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Bit depth must be 1, 2, 4, 8, or 16!"]);
}if (colorType != 0 && colorType != 2  && colorType != 3  && colorType != 4  && colorType != 6 ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Color type must be 0, 2, 3, 4, or 6!"]);
}if (colorType == 3 && bitDepth == 16 ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Bad color type/bit depth combination!"]);
}if ((colorType == 2 || colorType == 6  || colorType == 4 ) && (bitDepth != 8 && bitDepth != 16 ) ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Bad color type/bit depth combination!"]);
}if (compressionMethod != 0) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Unknown compression method (not 0)!"]);
}if (filterMethod != 0) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Unknown filter method (not 0)!"]);
}if (interlaceMethod != 0 && interlaceMethod != 1 ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Unknown interlace method (not 0 or 1)!"]);
}this.metadata.IHDR_present=true;
this.metadata.IHDR_width=width;
this.metadata.IHDR_height=height;
this.metadata.IHDR_bitDepth=bitDepth;
this.metadata.IHDR_colorType=colorType;
this.metadata.IHDR_compressionMethod=compressionMethod;
this.metadata.IHDR_filterMethod=filterMethod;
this.metadata.IHDR_interlaceMethod=interlaceMethod;
this.gotHeader=true;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["I/O error reading PNG header!", e]);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'parse_PLTE_chunk$I',  function (chunkLength) {
if (this.metadata.PLTE_present) {
this.processWarningOccurred$S("A PNG image may not contain more than one PLTE chunk.\nThe chunk wil be ignored.");
return;
} else if (this.metadata.IHDR_colorType == 0 || this.metadata.IHDR_colorType == 4 ) {
this.processWarningOccurred$S("A PNG gray or gray alpha image cannot have a PLTE chunk.\nThe chunk wil be ignored.");
return;
}var palette=Clazz.array(Byte.TYPE, [chunkLength]);
this.stream.readFully$BA(palette);
var numEntries=(chunkLength/3|0);
if (this.metadata.IHDR_colorType == 3) {
var maxEntries=1 << this.metadata.IHDR_bitDepth;
if (numEntries > maxEntries) {
this.processWarningOccurred$S("PLTE chunk contains too many entries for bit depth, ignoring extras.");
numEntries=maxEntries;
}numEntries=Math.min(numEntries, maxEntries);
}var paletteEntries;
if (numEntries > 16) {
paletteEntries=256;
} else if (numEntries > 4) {
paletteEntries=16;
} else if (numEntries > 2) {
paletteEntries=4;
} else {
paletteEntries=2;
}this.metadata.PLTE_present=true;
this.metadata.PLTE_red=Clazz.array(Byte.TYPE, [paletteEntries]);
this.metadata.PLTE_green=Clazz.array(Byte.TYPE, [paletteEntries]);
this.metadata.PLTE_blue=Clazz.array(Byte.TYPE, [paletteEntries]);
var index=0;
for (var i=0; i < numEntries; i++) {
this.metadata.PLTE_red[i]=palette[index++];
this.metadata.PLTE_green[i]=palette[index++];
this.metadata.PLTE_blue[i]=palette[index++];
}
}, p$1);

Clazz.newMeth(C$, 'parse_bKGD_chunk',  function () {
if (this.metadata.IHDR_colorType == 3) {
this.metadata.bKGD_colorType=3;
this.metadata.bKGD_index=this.stream.readUnsignedByte$();
} else if (this.metadata.IHDR_colorType == 0 || this.metadata.IHDR_colorType == 4 ) {
this.metadata.bKGD_colorType=0;
this.metadata.bKGD_gray=this.stream.readUnsignedShort$();
} else {
this.metadata.bKGD_colorType=2;
this.metadata.bKGD_red=this.stream.readUnsignedShort$();
this.metadata.bKGD_green=this.stream.readUnsignedShort$();
this.metadata.bKGD_blue=this.stream.readUnsignedShort$();
}this.metadata.bKGD_present=true;
}, p$1);

Clazz.newMeth(C$, 'parse_cHRM_chunk',  function () {
this.metadata.cHRM_whitePointX=this.stream.readInt$();
this.metadata.cHRM_whitePointY=this.stream.readInt$();
this.metadata.cHRM_redX=this.stream.readInt$();
this.metadata.cHRM_redY=this.stream.readInt$();
this.metadata.cHRM_greenX=this.stream.readInt$();
this.metadata.cHRM_greenY=this.stream.readInt$();
this.metadata.cHRM_blueX=this.stream.readInt$();
this.metadata.cHRM_blueY=this.stream.readInt$();
this.metadata.cHRM_present=true;
}, p$1);

Clazz.newMeth(C$, 'parse_gAMA_chunk',  function () {
var gamma=this.stream.readInt$();
this.metadata.gAMA_gamma=gamma;
this.metadata.gAMA_present=true;
}, p$1);

Clazz.newMeth(C$, 'parse_hIST_chunk$I',  function (chunkLength) {
if (!this.metadata.PLTE_present) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["hIST chunk without prior PLTE chunk!"]);
}this.metadata.hIST_histogram=Clazz.array(Character.TYPE, [(chunkLength/2|0)]);
this.stream.readFully$CA$I$I(this.metadata.hIST_histogram, 0, this.metadata.hIST_histogram.length);
this.metadata.hIST_present=true;
}, p$1);

Clazz.newMeth(C$, 'parse_iCCP_chunk$I',  function (chunkLength) {
var keyword=p$1.readNullTerminatedString$S$I.apply(this, ["ISO-8859-1", 80]);
this.metadata.iCCP_profileName=keyword;
this.metadata.iCCP_compressionMethod=this.stream.readUnsignedByte$();
var compressedProfile=Clazz.array(Byte.TYPE, [chunkLength - keyword.length$() - 2 ]);
this.stream.readFully$BA(compressedProfile);
this.metadata.iCCP_compressedProfile=compressedProfile;
this.metadata.iCCP_present=true;
}, p$1);

Clazz.newMeth(C$, 'parse_iTXt_chunk$I',  function (chunkLength) {
var chunkStart=this.stream.getStreamPosition$();
var keyword=p$1.readNullTerminatedString$S$I.apply(this, ["ISO-8859-1", 80]);
this.metadata.iTXt_keyword.add$O(keyword);
var compressionFlag=this.stream.readUnsignedByte$();
this.metadata.iTXt_compressionFlag.add$O(Boolean.valueOf$Z(compressionFlag == 1));
var compressionMethod=this.stream.readUnsignedByte$();
this.metadata.iTXt_compressionMethod.add$O(Integer.valueOf$I(compressionMethod));
var languageTag=p$1.readNullTerminatedString$S$I.apply(this, ["UTF8", 80]);
this.metadata.iTXt_languageTag.add$O(languageTag);
var pos=this.stream.getStreamPosition$();
var maxLen=Long.$ival((Long.$sub(Long.$add(chunkStart,chunkLength),pos)));
var translatedKeyword=p$1.readNullTerminatedString$S$I.apply(this, ["UTF8", maxLen]);
this.metadata.iTXt_translatedKeyword.add$O(translatedKeyword);
var text;
pos=this.stream.getStreamPosition$();
var b=Clazz.array(Byte.TYPE, [Long.$ival((Long.$sub(Long.$add(chunkStart,chunkLength),pos)))]);
this.stream.readFully$BA(b);
if (compressionFlag == 1) {
text= String.instantialize(C$.inflate$BA(b), "UTF8");
} else {
text= String.instantialize(b, "UTF8");
}this.metadata.iTXt_text.add$O(text);
}, p$1);

Clazz.newMeth(C$, 'parse_pHYs_chunk',  function () {
this.metadata.pHYs_pixelsPerUnitXAxis=this.stream.readInt$();
this.metadata.pHYs_pixelsPerUnitYAxis=this.stream.readInt$();
this.metadata.pHYs_unitSpecifier=this.stream.readUnsignedByte$();
this.metadata.pHYs_present=true;
}, p$1);

Clazz.newMeth(C$, 'parse_sBIT_chunk',  function () {
var colorType=this.metadata.IHDR_colorType;
if (colorType == 0 || colorType == 4 ) {
this.metadata.sBIT_grayBits=this.stream.readUnsignedByte$();
} else if (colorType == 2 || colorType == 3  || colorType == 6 ) {
this.metadata.sBIT_redBits=this.stream.readUnsignedByte$();
this.metadata.sBIT_greenBits=this.stream.readUnsignedByte$();
this.metadata.sBIT_blueBits=this.stream.readUnsignedByte$();
}if (colorType == 4 || colorType == 6 ) {
this.metadata.sBIT_alphaBits=this.stream.readUnsignedByte$();
}this.metadata.sBIT_colorType=colorType;
this.metadata.sBIT_present=true;
}, p$1);

Clazz.newMeth(C$, 'parse_sPLT_chunk$I',  function (chunkLength) {
this.metadata.sPLT_paletteName=p$1.readNullTerminatedString$S$I.apply(this, ["ISO-8859-1", 80]);
chunkLength-=this.metadata.sPLT_paletteName.length$() + 1;
var sampleDepth=this.stream.readUnsignedByte$();
this.metadata.sPLT_sampleDepth=sampleDepth;
var numEntries=(chunkLength/(4 * ((sampleDepth/8|0)) + 2)|0);
this.metadata.sPLT_red=Clazz.array(Integer.TYPE, [numEntries]);
this.metadata.sPLT_green=Clazz.array(Integer.TYPE, [numEntries]);
this.metadata.sPLT_blue=Clazz.array(Integer.TYPE, [numEntries]);
this.metadata.sPLT_alpha=Clazz.array(Integer.TYPE, [numEntries]);
this.metadata.sPLT_frequency=Clazz.array(Integer.TYPE, [numEntries]);
if (sampleDepth == 8) {
for (var i=0; i < numEntries; i++) {
this.metadata.sPLT_red[i]=this.stream.readUnsignedByte$();
this.metadata.sPLT_green[i]=this.stream.readUnsignedByte$();
this.metadata.sPLT_blue[i]=this.stream.readUnsignedByte$();
this.metadata.sPLT_alpha[i]=this.stream.readUnsignedByte$();
this.metadata.sPLT_frequency[i]=this.stream.readUnsignedShort$();
}
} else if (sampleDepth == 16) {
for (var i=0; i < numEntries; i++) {
this.metadata.sPLT_red[i]=this.stream.readUnsignedShort$();
this.metadata.sPLT_green[i]=this.stream.readUnsignedShort$();
this.metadata.sPLT_blue[i]=this.stream.readUnsignedShort$();
this.metadata.sPLT_alpha[i]=this.stream.readUnsignedShort$();
this.metadata.sPLT_frequency[i]=this.stream.readUnsignedShort$();
}
} else {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["sPLT sample depth not 8 or 16!"]);
}this.metadata.sPLT_present=true;
}, p$1);

Clazz.newMeth(C$, 'parse_sRGB_chunk',  function () {
this.metadata.sRGB_renderingIntent=this.stream.readUnsignedByte$();
this.metadata.sRGB_present=true;
}, p$1);

Clazz.newMeth(C$, 'parse_tEXt_chunk$I',  function (chunkLength) {
var keyword=p$1.readNullTerminatedString$S$I.apply(this, ["ISO-8859-1", 80]);
this.metadata.tEXt_keyword.add$O(keyword);
var b=Clazz.array(Byte.TYPE, [chunkLength - keyword.length$() - 1 ]);
this.stream.readFully$BA(b);
this.metadata.tEXt_text.add$O( String.instantialize(b, "ISO-8859-1"));
}, p$1);

Clazz.newMeth(C$, 'parse_tIME_chunk',  function () {
this.metadata.tIME_year=this.stream.readUnsignedShort$();
this.metadata.tIME_month=this.stream.readUnsignedByte$();
this.metadata.tIME_day=this.stream.readUnsignedByte$();
this.metadata.tIME_hour=this.stream.readUnsignedByte$();
this.metadata.tIME_minute=this.stream.readUnsignedByte$();
this.metadata.tIME_second=this.stream.readUnsignedByte$();
this.metadata.tIME_present=true;
}, p$1);

Clazz.newMeth(C$, 'parse_tRNS_chunk$I',  function (chunkLength) {
var colorType=this.metadata.IHDR_colorType;
if (colorType == 3) {
if (!this.metadata.PLTE_present) {
this.processWarningOccurred$S("tRNS chunk without prior PLTE chunk, ignoring it.");
return;
}var maxEntries=this.metadata.PLTE_red.length;
var numEntries=chunkLength;
if (numEntries > maxEntries) {
this.processWarningOccurred$S("tRNS chunk has more entries than prior PLTE chunk, ignoring extras.");
numEntries=maxEntries;
}this.metadata.tRNS_alpha=Clazz.array(Byte.TYPE, [numEntries]);
this.metadata.tRNS_colorType=3;
this.stream.read$BA$I$I(this.metadata.tRNS_alpha, 0, numEntries);
this.stream.skipBytes$I(chunkLength - numEntries);
} else if (colorType == 0) {
if (chunkLength != 2) {
this.processWarningOccurred$S("tRNS chunk for gray image must have length 2, ignoring chunk.");
this.stream.skipBytes$I(chunkLength);
return;
}this.metadata.tRNS_gray=this.stream.readUnsignedShort$();
this.metadata.tRNS_colorType=0;
} else if (colorType == 2) {
if (chunkLength != 6) {
this.processWarningOccurred$S("tRNS chunk for RGB image must have length 6, ignoring chunk.");
this.stream.skipBytes$I(chunkLength);
return;
}this.metadata.tRNS_red=this.stream.readUnsignedShort$();
this.metadata.tRNS_green=this.stream.readUnsignedShort$();
this.metadata.tRNS_blue=this.stream.readUnsignedShort$();
this.metadata.tRNS_colorType=2;
} else {
this.processWarningOccurred$S("Gray+Alpha and RGBS images may not have a tRNS chunk, ignoring it.");
return;
}this.metadata.tRNS_present=true;
}, p$1);

Clazz.newMeth(C$, 'inflate$BA',  function (b) {
var bais=Clazz.new_($I$(6,1).c$$BA,[b]);
var iis=Clazz.new_($I$(7,1).c$$java_io_InputStream,[bais]);
var baos=Clazz.new_($I$(5,1));
var c;
try {
while ((c=iis.read$()) != -1){
baos.write$I(c);
}
} finally {
iis.close$();
}
return baos.toByteArray$();
}, 1);

Clazz.newMeth(C$, 'parse_zTXt_chunk$I',  function (chunkLength) {
var keyword=p$1.readNullTerminatedString$S$I.apply(this, ["ISO-8859-1", 80]);
this.metadata.zTXt_keyword.add$O(keyword);
var method=this.stream.readUnsignedByte$();
this.metadata.zTXt_compressionMethod.add$O( new Integer(method));
var b=Clazz.array(Byte.TYPE, [chunkLength - keyword.length$() - 2 ]);
this.stream.readFully$BA(b);
this.metadata.zTXt_text.add$O( String.instantialize(C$.inflate$BA(b), "ISO-8859-1"));
}, p$1);

Clazz.newMeth(C$, 'readMetadata',  function () {
if (this.gotMetadata) {
return;
}p$1.readHeader.apply(this, []);
var colorType=this.metadata.IHDR_colorType;
if (this.ignoreMetadata && colorType != 3 ) {
try {
while (true){
var chunkLength=this.stream.readInt$();
var chunkType=this.stream.readInt$();
if (chunkType == 1229209940) {
this.stream.skipBytes$I(-8);
this.imageStartPosition=this.stream.getStreamPosition$();
break;
} else {
this.stream.skipBytes$I(chunkLength + 4);
}}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["Error skipping PNG metadata", e]);
} else {
throw e;
}
}
this.gotMetadata=true;
return;
}try {
 loop : while (true){
var chunkLength=this.stream.readInt$();
var chunkType=this.stream.readInt$();
var chunkCRC;
if (chunkLength < 0) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Invalid chunk lenght " + chunkLength]);
};try {
this.stream.mark$();
this.stream.seek$J(Long.$add(this.stream.getStreamPosition$(),chunkLength));
chunkCRC=this.stream.readInt$();
this.stream.reset$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Invalid chunk length " + chunkLength]);
} else {
throw e;
}
}
switch (chunkType) {
case 1229209940:
this.stream.skipBytes$I(-8);
this.imageStartPosition=this.stream.getStreamPosition$();
break loop;
case 1347179589:
p$1.parse_PLTE_chunk$I.apply(this, [chunkLength]);
break;
case 1649100612:
p$1.parse_bKGD_chunk.apply(this, []);
break;
case 1665684045:
p$1.parse_cHRM_chunk.apply(this, []);
break;
case 1732332865:
p$1.parse_gAMA_chunk.apply(this, []);
break;
case 1749635924:
p$1.parse_hIST_chunk$I.apply(this, [chunkLength]);
break;
case 1766015824:
p$1.parse_iCCP_chunk$I.apply(this, [chunkLength]);
break;
case 1767135348:
p$1.parse_iTXt_chunk$I.apply(this, [chunkLength]);
break;
case 1883789683:
p$1.parse_pHYs_chunk.apply(this, []);
break;
case 1933723988:
p$1.parse_sBIT_chunk.apply(this, []);
break;
case 1934642260:
p$1.parse_sPLT_chunk$I.apply(this, [chunkLength]);
break;
case 1934772034:
p$1.parse_sRGB_chunk.apply(this, []);
break;
case 1950701684:
p$1.parse_tEXt_chunk$I.apply(this, [chunkLength]);
break;
case 1950960965:
p$1.parse_tIME_chunk.apply(this, []);
break;
case 1951551059:
p$1.parse_tRNS_chunk$I.apply(this, [chunkLength]);
break;
case 2052348020:
p$1.parse_zTXt_chunk$I.apply(this, [chunkLength]);
break;
default:
var b=Clazz.array(Byte.TYPE, [chunkLength]);
this.stream.readFully$BA(b);
var chunkName=Clazz.new_($I$(8,1).c$$I,[4]);
chunkName.append$C(String.fromCharCode((chunkType >>> 24)));
chunkName.append$C(String.fromCharCode(((chunkType >> 16) & 255)));
chunkName.append$C(String.fromCharCode(((chunkType >> 8) & 255)));
chunkName.append$C(String.fromCharCode((chunkType & 255)));
var ancillaryBit=chunkType >>> 28;
if (ancillaryBit == 0) {
this.processWarningOccurred$S("Encountered unknown chunk with critical bit set!");
}this.metadata.unknownChunkType.add$O(chunkName.toString());
this.metadata.unknownChunkData.add$O(b);
break;
}
if (chunkCRC != this.stream.readInt$()) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Failed to read a chunk of type " + chunkType]);
}this.stream.flushBefore$J(this.stream.getStreamPosition$());
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["Error reading PNG metadata", e]);
} else {
throw e;
}
}
this.gotMetadata=true;
}, p$1);

Clazz.newMeth(C$, 'decodeSubFilter$BA$I$I$I',  function (curr, coff, count, bpp) {
for (var i=bpp; i < count; i++) {
var val;
val=curr[i + coff] & 255;
val+=curr[i + coff - bpp] & 255;
curr[i + coff]=(val|0);
}
}, 1);

Clazz.newMeth(C$, 'decodeUpFilter$BA$I$BA$I$I',  function (curr, coff, prev, poff, count) {
for (var i=0; i < count; i++) {
var raw=curr[i + coff] & 255;
var prior=prev[i + poff] & 255;
curr[i + coff]=((raw + prior)|0);
}
}, 1);

Clazz.newMeth(C$, 'decodeAverageFilter$BA$I$BA$I$I$I',  function (curr, coff, prev, poff, count, bpp) {
var raw;
var priorPixel;
var priorRow;
for (var i=0; i < bpp; i++) {
raw=curr[i + coff] & 255;
priorRow=prev[i + poff] & 255;
curr[i + coff]=((raw + (priorRow/2|0))|0);
}
for (var i=bpp; i < count; i++) {
raw=curr[i + coff] & 255;
priorPixel=curr[i + coff - bpp] & 255;
priorRow=prev[i + poff] & 255;
curr[i + coff]=((raw + ((priorPixel + priorRow)/2|0))|0);
}
}, 1);

Clazz.newMeth(C$, 'paethPredictor$I$I$I',  function (a, b, c) {
var p=a + b - c;
var pa=Math.abs(p - a);
var pb=Math.abs(p - b);
var pc=Math.abs(p - c);
if ((pa <= pb) && (pa <= pc) ) {
return a;
} else if (pb <= pc) {
return b;
} else {
return c;
}}, 1);

Clazz.newMeth(C$, 'decodePaethFilter$BA$I$BA$I$I$I',  function (curr, coff, prev, poff, count, bpp) {
var raw;
var priorPixel;
var priorRow;
var priorRowPixel;
for (var i=0; i < bpp; i++) {
raw=curr[i + coff] & 255;
priorRow=prev[i + poff] & 255;
curr[i + coff]=((raw + priorRow)|0);
}
for (var i=bpp; i < count; i++) {
raw=curr[i + coff] & 255;
priorPixel=curr[i + coff - bpp] & 255;
priorRow=prev[i + poff] & 255;
priorRowPixel=prev[i + poff - bpp] & 255;
curr[i + coff]=((raw + C$.paethPredictor$I$I$I(priorPixel, priorRow, priorRowPixel))|0);
}
}, 1);

Clazz.newMeth(C$, 'createRaster$I$I$I$I$I',  function (width, height, bands, scanlineStride, bitDepth) {
var dataBuffer;
var ras=null;
var origin=Clazz.new_($I$(3,1).c$$I$I,[0, 0]);
if ((bitDepth < 8) && (bands == 1) ) {
dataBuffer=Clazz.new_($I$(9,1).c$$I,[height * scanlineStride]);
ras=$I$(10).createPackedRaster$java_awt_image_DataBuffer$I$I$I$java_awt_Point(dataBuffer, width, height, bitDepth, origin);
} else if (bitDepth <= 8) {
dataBuffer=Clazz.new_($I$(9,1).c$$I,[height * scanlineStride]);
ras=$I$(10).createInterleavedRaster$java_awt_image_DataBuffer$I$I$I$I$IA$java_awt_Point(dataBuffer, width, height, scanlineStride, bands, C$.bandOffsets[bands], origin);
} else {
dataBuffer=Clazz.new_($I$(11,1).c$$I,[height * scanlineStride]);
ras=$I$(10).createInterleavedRaster$java_awt_image_DataBuffer$I$I$I$I$IA$java_awt_Point(dataBuffer, width, height, scanlineStride, bands, C$.bandOffsets[bands], origin);
}return ras;
}, p$1);

Clazz.newMeth(C$, 'skipPass$I$I',  function (passWidth, passHeight) {
if ((passWidth == 0) || (passHeight == 0) ) {
return;
}var inputBands=C$.inputBandsForColorType[this.metadata.IHDR_colorType];
var bytesPerRow=((inputBands * passWidth * this.metadata.IHDR_bitDepth  + 7)/8|0);
for (var srcY=0; srcY < passHeight; srcY++) {
this.pixelStream.skipBytes$I(1 + bytesPerRow);
if (this.abortRequested$()) {
return;
}}
}, p$1);

Clazz.newMeth(C$, 'updateImageProgress$I',  function (newPixels) {
this.pixelsDone+=newPixels;
this.processImageProgress$F(100.0 * this.pixelsDone / this.totalPixels);
}, p$1);

Clazz.newMeth(C$, 'decodePass$I$I$I$I$I$I$I',  function (passNum, xStart, yStart, xStep, yStep, passWidth, passHeight) {
if ((passWidth == 0) || (passHeight == 0) ) {
return;
}var imRas=this.theImage.getWritableTile$I$I(0, 0);
var dstMinX=imRas.getMinX$();
var dstMaxX=dstMinX + imRas.getWidth$() - 1;
var dstMinY=imRas.getMinY$();
var dstMaxY=dstMinY + imRas.getHeight$() - 1;
var vals=$I$(12).computeUpdatedPixels$java_awt_Rectangle$java_awt_Point$I$I$I$I$I$I$I$I$I$I$I$I(this.sourceRegion, this.destinationOffset, dstMinX, dstMinY, dstMaxX, dstMaxY, this.sourceXSubsampling, this.sourceYSubsampling, xStart, yStart, passWidth, passHeight, xStep, yStep);
var updateMinX=vals[0];
var updateMinY=vals[1];
var updateWidth=vals[2];
var updateXStep=vals[4];
var updateYStep=vals[5];
var bitDepth=this.metadata.IHDR_bitDepth;
var inputBands=C$.inputBandsForColorType[this.metadata.IHDR_colorType];
var bytesPerPixel=(bitDepth == 16) ? 2 : 1;
bytesPerPixel*=inputBands;
var bytesPerRow=((inputBands * passWidth * bitDepth  + 7)/8|0);
var eltsPerRow=(bitDepth == 16) ? (bytesPerRow/2|0) : bytesPerRow;
if (updateWidth == 0) {
for (var srcY=0; srcY < passHeight; srcY++) {
p$1.updateImageProgress$I.apply(this, [passWidth]);
this.pixelStream.skipBytes$I(1 + bytesPerRow);
}
return;
}var sourceX=(updateMinX - this.destinationOffset.x) * this.sourceXSubsampling + this.sourceRegion.x;
var srcX=((sourceX - xStart)/xStep|0);
var srcXStep=(updateXStep * this.sourceXSubsampling/xStep|0);
var byteData=null;
var shortData=null;
var curr=Clazz.array(Byte.TYPE, [bytesPerRow]);
var prior=Clazz.array(Byte.TYPE, [bytesPerRow]);
var passRow=p$1.createRaster$I$I$I$I$I.apply(this, [passWidth, 1, inputBands, eltsPerRow, bitDepth]);
var ps=passRow.getPixel$I$I$IA(0, 0, null);
var dataBuffer=passRow.getDataBuffer$();
var type=dataBuffer.getDataType$();
if (type == 0) {
byteData=(dataBuffer).getData$();
} else {
shortData=(dataBuffer).getData$();
}this.processPassStarted$java_awt_image_BufferedImage$I$I$I$I$I$I$I$IA(this.theImage, passNum, this.sourceMinProgressivePass, this.sourceMaxProgressivePass, updateMinX, updateMinY, updateXStep, updateYStep, this.destinationBands);
if (this.sourceBands != null ) {
passRow=passRow.createWritableChild$I$I$I$I$I$I$IA(0, 0, passRow.getWidth$(), 1, 0, 0, this.sourceBands);
}if (this.destinationBands != null ) {
imRas=imRas.createWritableChild$I$I$I$I$I$I$IA(0, 0, imRas.getWidth$(), imRas.getHeight$(), 0, 0, this.destinationBands);
}var adjustBitDepths=false;
var outputSampleSize=imRas.getSampleModel$().getSampleSize$();
var numBands=outputSampleSize.length;
for (var b=0; b < numBands; b++) {
if (outputSampleSize[b] != bitDepth) {
adjustBitDepths=true;
break;
}}
var scale=null;
if (adjustBitDepths) {
var maxInSample=(1 << bitDepth) - 1;
var halfMaxInSample=(maxInSample/2|0);
scale=Clazz.array(Integer.TYPE, [numBands, null]);
for (var b=0; b < numBands; b++) {
var maxOutSample=(1 << outputSampleSize[b]) - 1;
scale[b]=Clazz.array(Integer.TYPE, [maxInSample + 1]);
for (var s=0; s <= maxInSample; s++) {
scale[b][s]=((s * maxOutSample + halfMaxInSample)/maxInSample|0);
}
}
}var useSetRect=srcXStep == 1 && updateXStep == 1  && !adjustBitDepths  && (Clazz.instanceOf(imRas, "sun.awt.image.ByteInterleavedRaster")) ;
if (useSetRect) {
passRow=passRow.createWritableChild$I$I$I$I$I$I$IA(srcX, 0, updateWidth, 1, 0, 0, null);
}for (var srcY=0; srcY < passHeight; srcY++) {
p$1.updateImageProgress$I.apply(this, [passWidth]);
var filter=this.pixelStream.read$();
try {
var tmp=prior;
prior=curr;
curr=tmp;
this.pixelStream.readFully$BA$I$I(curr, 0, bytesPerRow);
} catch (ze) {
if (Clazz.exceptionOf(ze,"java.util.zip.ZipException")){
throw ze;
} else {
throw ze;
}
}
switch (filter) {
case 0:
break;
case 1:
C$.decodeSubFilter$BA$I$I$I(curr, 0, bytesPerRow, bytesPerPixel);
break;
case 2:
C$.decodeUpFilter$BA$I$BA$I$I(curr, 0, prior, 0, bytesPerRow);
break;
case 3:
C$.decodeAverageFilter$BA$I$BA$I$I$I(curr, 0, prior, 0, bytesPerRow, bytesPerPixel);
break;
case 4:
C$.decodePaethFilter$BA$I$BA$I$I$I(curr, 0, prior, 0, bytesPerRow, bytesPerPixel);
break;
default:
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Unknown row filter type (= " + filter + ")!" ]);
}
if (bitDepth < 16) {
System.arraycopy$O$I$O$I$I(curr, 0, byteData, 0, bytesPerRow);
} else {
var idx=0;
for (var j=0; j < eltsPerRow; j++) {
shortData[j]=(((curr[idx] << 8) | (curr[idx + 1] & 255))|0);
idx+=2;
}
}var sourceY=srcY * yStep + yStart;
if ((sourceY >= this.sourceRegion.y) && (sourceY < this.sourceRegion.y + this.sourceRegion.height) && (((sourceY - this.sourceRegion.y) % this.sourceYSubsampling) == 0)  ) {
var dstY=this.destinationOffset.y + ((sourceY - this.sourceRegion.y)/this.sourceYSubsampling|0);
if (dstY < dstMinY) {
continue;
}if (dstY > dstMaxY) {
break;
}if (useSetRect) {
imRas.setRect$I$I$java_awt_image_Raster(updateMinX, dstY, passRow);
} else {
var newSrcX=srcX;
for (var dstX=updateMinX; dstX < updateMinX + updateWidth; dstX+=updateXStep) {
passRow.getPixel$I$I$IA(newSrcX, 0, ps);
if (adjustBitDepths) {
for (var b=0; b < numBands; b++) {
ps[b]=scale[b][ps[b]];
}
}imRas.setPixel$I$I$IA(dstX, dstY, ps);
newSrcX+=srcXStep;
}
}this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.theImage, updateMinX, dstY, updateWidth, 1, updateXStep, updateYStep, this.destinationBands);
if (this.abortRequested$()) {
return;
}}}
this.processPassComplete$java_awt_image_BufferedImage(this.theImage);
}, p$1);

Clazz.newMeth(C$, 'decodeImage',  function () {
var width=this.metadata.IHDR_width;
var height=this.metadata.IHDR_height;
this.pixelsDone=0;
this.totalPixels=width * height;
this.clearAbortRequest$();
if (this.metadata.IHDR_interlaceMethod == 0) {
p$1.decodePass$I$I$I$I$I$I$I.apply(this, [0, 0, 0, 1, 1, width, height]);
} else {
for (var i=0; i <= this.sourceMaxProgressivePass; i++) {
var XOffset=C$.adam7XOffset[i];
var YOffset=C$.adam7YOffset[i];
var XSubsampling=C$.adam7XSubsampling[i];
var YSubsampling=C$.adam7YSubsampling[i];
var xbump=C$.adam7XSubsampling[i + 1] - 1;
var ybump=C$.adam7YSubsampling[i + 1] - 1;
if (i >= this.sourceMinProgressivePass) {
p$1.decodePass$I$I$I$I$I$I$I.apply(this, [i, XOffset, YOffset, XSubsampling, YSubsampling, ((width + xbump)/XSubsampling|0), ((height + ybump)/YSubsampling|0)]);
} else {
p$1.skipPass$I$I.apply(this, [((width + xbump)/XSubsampling|0), ((height + ybump)/YSubsampling|0)]);
}if (this.abortRequested$()) {
return;
}}
}}, p$1);

Clazz.newMeth(C$, 'readImage$javax_imageio_ImageReadParam',  function (param) {
p$1.readMetadata.apply(this, []);
var width=this.metadata.IHDR_width;
var height=this.metadata.IHDR_height;
this.sourceXSubsampling=1;
this.sourceYSubsampling=1;
this.sourceMinProgressivePass=0;
this.sourceMaxProgressivePass=6;
this.sourceBands=null;
this.destinationBands=null;
this.destinationOffset=Clazz.new_($I$(3,1).c$$I$I,[0, 0]);
if (param != null ) {
this.sourceXSubsampling=param.getSourceXSubsampling$();
this.sourceYSubsampling=param.getSourceYSubsampling$();
this.sourceMinProgressivePass=Math.max(param.getSourceMinProgressivePass$(), 0);
this.sourceMaxProgressivePass=Math.min(param.getSourceMaxProgressivePass$(), 6);
this.sourceBands=param.getSourceBands$();
this.destinationBands=param.getDestinationBands$();
this.destinationOffset=param.getDestinationOffset$();
}var inf=null;
try {
this.stream.seek$J(this.imageStartPosition);
var e=Clazz.new_($I$(13,1).c$$javax_imageio_stream_ImageInputStream,[this.stream]);
var is=Clazz.new_($I$(14,1).c$$java_util_Enumeration,[e]);
inf=Clazz.new_($I$(15,1));
is=Clazz.new_($I$(7,1).c$$java_io_InputStream$java_util_zip_Inflater,[is, inf]);
is=Clazz.new_($I$(16,1).c$$java_io_InputStream,[is]);
this.pixelStream=Clazz.new_($I$(17,1).c$$java_io_InputStream,[is]);
this.theImage=$I$(18,"getDestination$javax_imageio_ImageReadParam$java_util_Iterator$I$I",[param, this.getImageTypes$I(0), width, height]);
var destRegion=Clazz.new_($I$(19,1).c$$I$I$I$I,[0, 0, 0, 0]);
this.sourceRegion=Clazz.new_($I$(19,1).c$$I$I$I$I,[0, 0, 0, 0]);
$I$(18).computeRegions$javax_imageio_ImageReadParam$I$I$java_awt_image_BufferedImage$java_awt_Rectangle$java_awt_Rectangle(param, width, height, this.theImage, this.sourceRegion, destRegion);
this.destinationOffset.setLocation$java_awt_Point(destRegion.getLocation$());
var colorType=this.metadata.IHDR_colorType;
$I$(18,"checkReadParamBandSettings$javax_imageio_ImageReadParam$I$I",[param, C$.inputBandsForColorType[colorType], this.theImage.getSampleModel$().getNumBands$()]);
this.processImageStarted$I(0);
p$1.decodeImage.apply(this, []);
if (this.abortRequested$()) {
this.processReadAborted$();
} else {
this.processImageComplete$();
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["Error reading PNG image data", e]);
} else {
throw e;
}
} finally {
if (inf != null ) {
inf.end$();
}}
}, p$1);

Clazz.newMeth(C$, 'getNumImages$Z',  function (allowSearch) {
if (this.stream == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No input source set!"]);
}if (this.seekForwardOnly && allowSearch ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["seekForwardOnly and allowSearch can\'t both be true!"]);
}return 1;
});

Clazz.newMeth(C$, 'getWidth$I',  function (imageIndex) {
if (imageIndex != 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["imageIndex != 0!"]);
}p$1.readHeader.apply(this, []);
return this.metadata.IHDR_width;
});

Clazz.newMeth(C$, 'getHeight$I',  function (imageIndex) {
if (imageIndex != 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["imageIndex != 0!"]);
}p$1.readHeader.apply(this, []);
return this.metadata.IHDR_height;
});

Clazz.newMeth(C$, 'getImageTypes$I',  function (imageIndex) {
if (imageIndex != 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["imageIndex != 0!"]);
}p$1.readHeader.apply(this, []);
var l=Clazz.new_($I$(20,1).c$$I,[1]);
var rgb;
var gray;
var bandOffsets;
var bitDepth=this.metadata.IHDR_bitDepth;
var colorType=this.metadata.IHDR_colorType;
var dataType;
if (bitDepth <= 8) {
dataType=0;
} else {
dataType=1;
}switch (colorType) {
case 0:
l.add$O($I$(21).createGrayscale$I$I$Z(bitDepth, dataType, false));
break;
case 2:
if (bitDepth == 8) {
l.add$O($I$(21).createFromBufferedImageType$I(5));
l.add$O($I$(21).createFromBufferedImageType$I(1));
l.add$O($I$(21).createFromBufferedImageType$I(4));
}rgb=$I$(22).getInstance$I(1000);
bandOffsets=Clazz.array(Integer.TYPE, [3]);
bandOffsets[0]=0;
bandOffsets[1]=1;
bandOffsets[2]=2;
l.add$O($I$(21).createInterleaved$java_awt_color_ColorSpace$IA$I$Z$Z(rgb, bandOffsets, dataType, false, false));
break;
case 3:
p$1.readMetadata.apply(this, []);
var plength=1 << bitDepth;
var red=this.metadata.PLTE_red;
var green=this.metadata.PLTE_green;
var blue=this.metadata.PLTE_blue;
if (this.metadata.PLTE_red.length < plength) {
red=$I$(23).copyOf$BA$I(this.metadata.PLTE_red, plength);
$I$(23).fill$BA$I$I$B(red, this.metadata.PLTE_red.length, plength, this.metadata.PLTE_red[this.metadata.PLTE_red.length - 1]);
green=$I$(23).copyOf$BA$I(this.metadata.PLTE_green, plength);
$I$(23).fill$BA$I$I$B(green, this.metadata.PLTE_green.length, plength, this.metadata.PLTE_green[this.metadata.PLTE_green.length - 1]);
blue=$I$(23).copyOf$BA$I(this.metadata.PLTE_blue, plength);
$I$(23).fill$BA$I$I$B(blue, this.metadata.PLTE_blue.length, plength, this.metadata.PLTE_blue[this.metadata.PLTE_blue.length - 1]);
}var alpha=null;
if (this.metadata.tRNS_present && (this.metadata.tRNS_alpha != null ) ) {
if (this.metadata.tRNS_alpha.length == red.length) {
alpha=this.metadata.tRNS_alpha;
} else {
alpha=$I$(23).copyOf$BA$I(this.metadata.tRNS_alpha, red.length);
$I$(23).fill$BA$I$I$B(alpha, this.metadata.tRNS_alpha.length, red.length, -1);
}}l.add$O($I$(21).createIndexed$BA$BA$BA$BA$I$I(red, green, blue, alpha, bitDepth, 0));
break;
case 4:
gray=$I$(22).getInstance$I(1003);
bandOffsets=Clazz.array(Integer.TYPE, [2]);
bandOffsets[0]=0;
bandOffsets[1]=1;
l.add$O($I$(21).createInterleaved$java_awt_color_ColorSpace$IA$I$Z$Z(gray, bandOffsets, dataType, true, false));
break;
case 6:
if (bitDepth == 8) {
l.add$O($I$(21).createFromBufferedImageType$I(6));
l.add$O($I$(21).createFromBufferedImageType$I(2));
}rgb=$I$(22).getInstance$I(1000);
bandOffsets=Clazz.array(Integer.TYPE, [4]);
bandOffsets[0]=0;
bandOffsets[1]=1;
bandOffsets[2]=2;
bandOffsets[3]=3;
l.add$O($I$(21).createInterleaved$java_awt_color_ColorSpace$IA$I$Z$Z(rgb, bandOffsets, dataType, true, false));
break;
default:
break;
}
return l.iterator$();
});

Clazz.newMeth(C$, 'getRawImageType$I',  function (imageIndex) {
var types=this.getImageTypes$I(imageIndex);
var raw=null;
do {
raw=types.next$();
} while (types.hasNext$());
return raw;
});

Clazz.newMeth(C$, 'getDefaultReadParam$',  function () {
return Clazz.new_($I$(24,1));
});

Clazz.newMeth(C$, 'getStreamMetadata$',  function () {
return null;
});

Clazz.newMeth(C$, 'getImageMetadata$I',  function (imageIndex) {
if (imageIndex != 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["imageIndex != 0!"]);
}p$1.readMetadata.apply(this, []);
return this.metadata;
});

Clazz.newMeth(C$, 'read$I$javax_imageio_ImageReadParam',  function (imageIndex, param) {
if (imageIndex != 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["imageIndex != 0!"]);
}p$1.readImage$javax_imageio_ImageReadParam.apply(this, [param]);
return this.theImage;
});

Clazz.newMeth(C$, 'reset$',  function () {
C$.superclazz.prototype.reset$.apply(this, []);
p$1.resetStreamSettings.apply(this, []);
});

Clazz.newMeth(C$, 'resetStreamSettings',  function () {
this.gotHeader=false;
this.gotMetadata=false;
this.metadata=null;
this.pixelStream=null;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.inputBandsForColorType=Clazz.array(Integer.TYPE, -1, [1, -1, 3, 1, 2, -1, 4]);
C$.adam7XOffset=Clazz.array(Integer.TYPE, -1, [0, 4, 0, 2, 0, 1, 0]);
C$.adam7YOffset=Clazz.array(Integer.TYPE, -1, [0, 0, 4, 0, 2, 0, 1]);
C$.adam7XSubsampling=Clazz.array(Integer.TYPE, -1, [8, 8, 4, 4, 2, 2, 1, 1]);
C$.adam7YSubsampling=Clazz.array(Integer.TYPE, -1, [8, 8, 8, 4, 4, 2, 2, 1]);
C$.bandOffsets=Clazz.array(Integer.TYPE, -2, [null, Clazz.array(Integer.TYPE, -1, [0]), Clazz.array(Integer.TYPE, -1, [0, 1]), Clazz.array(Integer.TYPE, -1, [0, 1, 2]), Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3])]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:55 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
