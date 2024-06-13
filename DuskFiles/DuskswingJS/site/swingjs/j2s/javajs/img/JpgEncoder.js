(function(){var P$=Clazz.newPackage("javajs.img"),p$1={},p$2={},p$3={},I$=[[0,'javajs.img.JpegObj','javajs.img.DCT','javajs.img.Huffman','javajs.util.AU']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JpgEncoder", null, 'javajs.img.ImageEncoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.defaultQuality=100;
},1);

C$.$fields$=[['I',['defaultQuality'],'S',['applicationTag'],'O',['jpegObj','javajs.img.JpegObj','huf','javajs.img.Huffman','dct','javajs.img.DCT']]
,['O',['eoi','byte[]','+jfif','+soi']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'setParams$java_util_Map',  function (params) {
if (this.quality <= 0) this.quality=(params.containsKey$O("qualityJPG") ? (params.get$O("qualityJPG")).intValue$() : this.defaultQuality);
this.jpegObj=Clazz.new_($I$(1,1));
this.jpegObj.comment=params.get$O("comment");
this.applicationTag=params.get$O("jpgAppTag");
});

Clazz.newMeth(C$, 'generate$',  function () {
this.jpegObj.imageWidth=this.width;
this.jpegObj.imageHeight=this.height;
this.dct=Clazz.new_($I$(2,1).c$$I,[this.quality]);
this.huf=Clazz.new_($I$(3,1).c$$I$I,[this.width, this.height]);
if (this.jpegObj == null ) return;
this.jpegObj.getYCCArray$IA(this.pixels);
var longState=p$1.writeHeaders$javajs_img_JpegObj$javajs_img_DCT.apply(this, [this.jpegObj, this.dct]);
p$1.writeCompressedData$javajs_img_JpegObj$javajs_img_DCT$javajs_img_Huffman.apply(this, [this.jpegObj, this.dct, this.huf]);
this.writeMarker$BA(C$.eoi);
if (longState != null ) {
var b=longState.getBytes$();
this.out.write$BA$I$I(b, 0, b.length);
}});

Clazz.newMeth(C$, 'writeCompressedData$javajs_img_JpegObj$javajs_img_DCT$javajs_img_Huffman',  function (jpegObj, dct, huf) {
var i;
var j;
var r;
var c;
var a;
var b;
var comp;
var xpos;
var ypos;
var xblockoffset;
var yblockoffset;
var inputArray;
var dctArray1=Clazz.array(Float.TYPE, [8, 8]);
var dctArray2=Clazz.array(Double.TYPE, [8, 8]);
var dctArray3=Clazz.array(Integer.TYPE, [64]);
var lastDCvalue=Clazz.array(Integer.TYPE, [jpegObj.numberOfComponents]);
var minBlockWidth;
var minBlockHeight;
minBlockWidth=((huf.imageWidth % 8 != 0) ? ((Math.floor(huf.imageWidth / 8.0) + 1)|0) * 8 : huf.imageWidth);
minBlockHeight=((huf.imageHeight % 8 != 0) ? ((Math.floor(huf.imageHeight / 8.0) + 1)|0) * 8 : huf.imageHeight);
for (comp=0; comp < jpegObj.numberOfComponents; comp++) {
minBlockWidth=Math.min(minBlockWidth, jpegObj.blockWidth[comp]);
minBlockHeight=Math.min(minBlockHeight, jpegObj.blockHeight[comp]);
}
xpos=0;
for (r=0; r < minBlockHeight; r++) {
for (c=0; c < minBlockWidth; c++) {
xpos=c * 8;
ypos=r * 8;
for (comp=0; comp < jpegObj.numberOfComponents; comp++) {
inputArray=jpegObj.components[comp];
var vsampF=jpegObj.vsampFactor[comp];
var hsampF=jpegObj.hsampFactor[comp];
var qNumber=jpegObj.qtableNumber[comp];
var dcNumber=jpegObj.dctableNumber[comp];
var acNumber=jpegObj.actableNumber[comp];
for (i=0; i < vsampF; i++) {
for (j=0; j < hsampF; j++) {
xblockoffset=j * 8;
yblockoffset=i * 8;
for (a=0; a < 8; a++) {
for (b=0; b < 8; b++) {
dctArray1[a][b]=inputArray[ypos + yblockoffset + a ][xpos + xblockoffset + b ];
}
}
dctArray2=$I$(2).forwardDCT$FAA(dctArray1);
dctArray3=$I$(2).quantizeBlock$DAA$DA(dctArray2, dct.divisors[qNumber]);
huf.HuffmanBlockEncoder$javajs_util_OC$IA$I$I$I(this.out, dctArray3, lastDCvalue[comp], dcNumber, acNumber);
lastDCvalue[comp]=dctArray3[0];
}
}
}
}
}
huf.flushBuffer$javajs_util_OC(this.out);
}, p$1);

Clazz.newMeth(C$, 'writeHeaders$javajs_img_JpegObj$javajs_img_DCT',  function (jpegObj, dct) {
var i;
var j;
var index;
var offset;
var tempArray;
this.writeMarker$BA(C$.soi);
this.writeArray$BA(C$.jfif);
var comment=null;
if (jpegObj.comment != null  && jpegObj.comment.length$() > 0 ) p$1.writeString$S$B.apply(this, [jpegObj.comment, -31]);
p$1.writeString$S$B.apply(this, ["JPEG Encoder Copyright 1998, James R. Weeks and BioElectroMech.\n\n", -2]);
var dqt=Clazz.array(Byte.TYPE, [134]);
dqt[0]=-1;
dqt[1]=-37;
dqt[2]=(0|0);
dqt[3]=-124;
offset=4;
for (i=0; i < 2; i++) {
dqt[offset++]=(((0) + i)|0);
tempArray=dct.quantum[i];
for (j=0; j < 64; j++) {
dqt[offset++]=(tempArray[$I$(3).jpegNaturalOrder[j]]|0);
}
}
this.writeArray$BA(dqt);
var sof=Clazz.array(Byte.TYPE, [19]);
sof[0]=-1;
sof[1]=-64;
sof[2]=(0|0);
sof[3]=(17|0);
sof[4]=(jpegObj.precision|0);
sof[5]=(((jpegObj.imageHeight >> 8) & 255)|0);
sof[6]=(((jpegObj.imageHeight) & 255)|0);
sof[7]=(((jpegObj.imageWidth >> 8) & 255)|0);
sof[8]=(((jpegObj.imageWidth) & 255)|0);
sof[9]=(jpegObj.numberOfComponents|0);
index=10;
for (i=0; i < sof[9]; i++) {
sof[index++]=(jpegObj.compID[i]|0);
sof[index++]=(((jpegObj.hsampFactor[i] << 4) + jpegObj.vsampFactor[i])|0);
sof[index++]=(jpegObj.qtableNumber[i]|0);
}
this.writeArray$BA(sof);
this.WriteDHTHeader$IA$IA($I$(3).bitsDCluminance, $I$(3).valDCluminance);
this.WriteDHTHeader$IA$IA($I$(3).bitsACluminance, $I$(3).valACluminance);
this.WriteDHTHeader$IA$IA($I$(3).bitsDCchrominance, $I$(3).valDCchrominance);
this.WriteDHTHeader$IA$IA($I$(3).bitsACchrominance, $I$(3).valACchrominance);
var sos=Clazz.array(Byte.TYPE, [14]);
sos[0]=-1;
sos[1]=-38;
sos[2]=(0|0);
sos[3]=(12|0);
sos[4]=(jpegObj.numberOfComponents|0);
index=5;
for (i=0; i < sos[4]; i++) {
sos[index++]=(jpegObj.compID[i]|0);
sos[index++]=(((jpegObj.dctableNumber[i] << 4) + jpegObj.actableNumber[i])|0);
}
sos[index++]=(jpegObj.ss|0);
sos[index++]=(jpegObj.se|0);
sos[index++]=(((jpegObj.ah << 4) + jpegObj.al)|0);
this.writeArray$BA(sos);
return comment;
}, p$1);

Clazz.newMeth(C$, 'writeString$S$B',  function (s, id) {
var len=s.length$();
var i0=0;
var suffix=this.applicationTag;
while (i0 < len){
var nBytes=len - i0;
if (nBytes > 65510) {
nBytes=65500;
var pt=s.lastIndexOf$I$I("\n", i0 + nBytes);
if (pt > i0 + 1) nBytes=pt - i0;
}if (i0 + nBytes == len) suffix="";
p$1.writeTag$I$B.apply(this, [nBytes + suffix.length$(), id]);
this.writeArray$BA(s.substring$I$I(i0, i0 + nBytes).getBytes$());
if (suffix.length$() > 0) this.writeArray$BA(suffix.getBytes$());
i0+=nBytes;
}
}, p$1);

Clazz.newMeth(C$, 'writeTag$I$B',  function (length, id) {
length+=2;
var com=Clazz.array(Byte.TYPE, [4]);
com[0]=-1;
com[1]=id;
com[2]=(((length >> 8) & 255)|0);
com[3]=((length & 255)|0);
this.writeArray$BA(com);
}, p$1);

Clazz.newMeth(C$, 'WriteDHTHeader$IA$IA',  function (bits, val) {
var dht;
var bytes=0;
for (var j=1; j < 17; j++) bytes+=bits[j];

dht=Clazz.array(Byte.TYPE, [21 + bytes]);
dht[0]=-1;
dht[1]=-60;
var index=4;
for (var j=0; j < 17; j++) dht[index++]=(bits[j]|0);

for (var j=0; j < bytes; j++) dht[index++]=(val[j]|0);

dht[2]=((((index - 2) >> 8) & 255)|0);
dht[3]=(((index - 2) & 255)|0);
this.writeArray$BA(dht);
});

Clazz.newMeth(C$, 'writeMarker$BA',  function (data) {
this.out.write$BA$I$I(data, 0, 2);
});

Clazz.newMeth(C$, 'writeArray$BA',  function (data) {
this.out.write$BA$I$I(data, 0, data.length);
});

C$.$static$=function(){C$.$static$=0;
C$.eoi=Clazz.array(Byte.TYPE, -1, [-1, -39]);
C$.jfif=Clazz.array(Byte.TYPE, -1, [-1, -32, 0, 16, 74, 70, 73, 70, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0]);
C$.soi=Clazz.array(Byte.TYPE, -1, [-1, -40]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
