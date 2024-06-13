(function(){var P$=Clazz.newPackage("javajs.img"),p$1={},I$=[[0,'java.util.zip.Deflater','java.io.ByteArrayOutputStream','java.util.zip.DeflaterOutputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PngEncoder", null, 'javajs.img.CRCEncoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.filter=0;
},1);

C$.$fields$=[['Z',['encodeAlpha'],'I',['filter','bytesPerPixel','compressionLevel','byteWidth'],'S',['type','appPrefix','comment'],'O',['transparentColor','Integer','appData','byte[]','+bytes','+scanLines']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setParams$java_util_Map',  function (params) {
if (this.quality < 0) this.quality=(params.containsKey$O("qualityPNG") ? (params.get$O("qualityPNG")).intValue$() : 2);
if (this.quality > 9) this.quality=9;
this.encodeAlpha=false;
this.filter=0;
this.compressionLevel=this.quality;
this.transparentColor=params.get$O("transparentColor");
this.comment=params.get$O("comment");
this.type=(params.get$O("type") + "0000").substring$I$I(0, 4);
this.bytes=params.get$O("pngImgData");
this.appData=params.get$O("pngAppData");
this.appPrefix=params.get$O("pngAppPrefix");
});

Clazz.newMeth(C$, 'generate$',  function () {
if (this.bytes == null ) {
if (!p$1.pngEncode.apply(this, [])) {
this.out.cancel$();
return;
}this.bytes=this.getBytes$();
} else {
this.dataLen=this.bytes.length;
}var len=this.dataLen;
if (this.appData != null ) {
C$.setJmolTypeText$S$BA$I$I$S(this.appPrefix, this.bytes, len, this.appData.length, this.type);
this.out.write$BA$I$I(this.bytes, 0, len);
len=(this.bytes=this.appData).length;
}this.out.write$BA$I$I(this.bytes, 0, len);
});

Clazz.newMeth(C$, 'pngEncode',  function () {
var pngIdBytes=Clazz.array(Byte.TYPE, -1, [-119, 80, 78, 71, 13, 10, 26, 10]);
this.writeBytes$BA(pngIdBytes);
p$1.writeHeader.apply(this, []);
p$1.writeText$S.apply(this, [C$.getApplicationText$S$S$I$I(this.appPrefix, this.type, 0, 0)]);
p$1.writeText$S.apply(this, ["Software\u0000" + this.comment]);
p$1.writeText$S.apply(this, ["Creation Time\u0000" + this.date]);
if (!this.encodeAlpha && this.transparentColor != null  ) p$1.writeTransparentColor$I.apply(this, [this.transparentColor.intValue$()]);
return p$1.writeImageData.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'setJmolTypeText$S$BA$I$I$S',  function (prefix, b, nPNG, nState, type) {
var s="tEXt" + C$.getApplicationText$S$S$I$I(prefix, type, nPNG, nState);
var encoder=Clazz.new_(C$);
var test=s.substring$I$I(0, 4 + prefix.length$()).getBytes$();
for (var i=test.length; --i >= 0; ) if (b[i + 37] != test[i]) {
System.out.println$S("image is not of the right form; appending data, but not adding tEXt tag.");
return;
}
encoder.setData$BA$I(b, 37);
encoder.writeString$S(s);
encoder.writeCRC$();
}, 1);

Clazz.newMeth(C$, 'getApplicationText$S$S$I$I',  function (prefix, type, nPNG, nData) {
var sPNG="000000000" + nPNG;
sPNG=sPNG.substring$I(sPNG.length$() - 9);
var sData="000000000" + nData;
sData=sData.substring$I(sData.length$() - 9);
if (prefix == null ) prefix="#SwingJS.";
if (prefix.length$() < 9) prefix=(prefix + ".........");
if (prefix.length$() > 9) prefix=prefix.substring$I$I(0, 9);
return prefix + "\u0000" + type + sPNG + "+" + sData ;
}, 1);

Clazz.newMeth(C$, 'writeHeader',  function () {
this.writeInt4$I(13);
this.startPos=this.bytePos;
this.writeString$S("IHDR");
this.writeInt4$I(this.width);
this.writeInt4$I(this.height);
this.writeByte$I(8);
this.writeByte$I(this.encodeAlpha ? 6 : 2);
this.writeByte$I(0);
this.writeByte$I(0);
this.writeByte$I(0);
this.writeCRC$();
}, p$1);

Clazz.newMeth(C$, 'writeText$S',  function (msg) {
this.writeInt4$I(msg.length$());
this.startPos=this.bytePos;
this.writeString$S("tEXt" + msg);
this.writeCRC$();
}, p$1);

Clazz.newMeth(C$, 'writeTransparentColor$I',  function (icolor) {
this.writeInt4$I(6);
this.startPos=this.bytePos;
this.writeString$S("tRNS");
this.writeInt2$I((icolor >> 16) & 255);
this.writeInt2$I((icolor >> 8) & 255);
this.writeInt2$I(icolor & 255);
this.writeCRC$();
}, p$1);

Clazz.newMeth(C$, 'writeImageData',  function () {
this.bytesPerPixel=(this.encodeAlpha ? 4 : 3);
this.byteWidth=this.width * this.bytesPerPixel;
var scanWidth=this.byteWidth + 1;
var rowsLeft=this.height;
var nRows;
var scanPos;
var deflater=Clazz.new_($I$(1,1).c$$I,[this.compressionLevel]);
var outBytes=Clazz.new_($I$(2,1).c$$I,[1024]);
var compBytes=Clazz.new_($I$(3,1).c$$java_io_ByteArrayOutputStream$java_util_zip_Deflater,[outBytes, deflater]);
var pt=0;
try {
while (rowsLeft > 0){
nRows=Math.max(1, Math.min((32767/scanWidth|0), rowsLeft));
this.scanLines=Clazz.array(Byte.TYPE, [scanWidth * nRows]);
var nPixels=this.width * nRows;
scanPos=0;
for (var i=0; i < nPixels; i++, pt++) {
if (i % this.width == 0) {
this.scanLines[scanPos++]=(this.filter|0);
}this.scanLines[scanPos++]=(((this.pixels[pt] >> 16) & 255)|0);
this.scanLines[scanPos++]=(((this.pixels[pt] >> 8) & 255)|0);
this.scanLines[scanPos++]=(((this.pixels[pt]) & 255)|0);
if (this.encodeAlpha) {
this.scanLines[scanPos++]=(((this.pixels[pt] >> 24) & 255)|0);
}}
compBytes.write$BA$I$I(this.scanLines, 0, scanPos);
rowsLeft-=nRows;
}
compBytes.close$();
var compressedLines=outBytes.toByteArray$();
this.writeInt4$I(compressedLines.length);
this.startPos=this.bytePos;
this.writeString$S("IDAT");
this.writeBytes$BA(compressedLines);
this.writeCRC$();
p$1.writeEnd.apply(this, []);
deflater.finish$();
return true;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S(e.toString());
return false;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'writeEnd',  function () {
this.writeInt4$I(0);
this.startPos=this.bytePos;
this.writeString$S("IEND");
this.writeCRC$();
}, p$1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
