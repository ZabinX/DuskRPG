(function(){var P$=Clazz.newPackage("javajs.img"),p$1={},I$=[[0,'javajs.util.Rdr']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BMPDecoder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['bis','java.io.BufferedInputStream','temp','byte[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'decodeWindowsBMP$BA',  function (bytes) {
try {
this.bis=$I$(1).getBIS$BA(bytes);
this.temp=Clazz.array(Byte.TYPE, [4]);
if (p$1.readByte.apply(this, []) != 66  || p$1.readByte.apply(this, []) != 77  ) return null;
p$1.readInt.apply(this, []);
p$1.readShort.apply(this, []);
p$1.readShort.apply(this, []);
p$1.readInt.apply(this, []);
var imageWidth;
var imageHeight;
var bitsPerPixel;
var nColors=0;
var imageSize=0;
var headerSize=p$1.readInt.apply(this, []);
switch (headerSize) {
case 12:
imageWidth=p$1.readShort.apply(this, []);
imageHeight=p$1.readShort.apply(this, []);
p$1.readShort.apply(this, []);
bitsPerPixel=p$1.readShort.apply(this, []);
break;
case 40:
imageWidth=p$1.readInt.apply(this, []);
imageHeight=p$1.readInt.apply(this, []);
p$1.readShort.apply(this, []);
bitsPerPixel=p$1.readShort.apply(this, []);
var ncompression=p$1.readInt.apply(this, []);
if (ncompression != 0) {
System.out.println$S("BMP Compression is :" + ncompression + " -- aborting" );
return null;
}imageSize=p$1.readInt.apply(this, []);
p$1.readInt.apply(this, []);
p$1.readInt.apply(this, []);
nColors=p$1.readInt.apply(this, []);
p$1.readInt.apply(this, []);
break;
default:
System.out.println$S("BMP Header unrecognized, length=" + headerSize + " -- aborting" );
return null;
}
var isYReversed=(imageHeight < 0);
if (isYReversed) imageHeight=-imageHeight;
var nPixels=imageHeight * imageWidth;
var bytesPerPixel=(bitsPerPixel/8|0);
nColors=(nColors > 0 ? nColors : 1 << bitsPerPixel);
var npad=(bytesPerPixel == 4 ? 0 : imageSize == 0 ? 4 - (imageWidth % 4) : ((imageSize/imageHeight|0)) - imageWidth * bytesPerPixel) % 4;
var palette;
var buf=Clazz.array(Integer.TYPE, [nPixels]);
var dpt=(isYReversed ? imageWidth : -imageWidth);
var pt0=(isYReversed ? 0 : nPixels + dpt);
var pt1=(isYReversed ? nPixels : dpt);
switch (bitsPerPixel) {
case 32:
case 24:
for (var pt=pt0; pt != pt1; pt+=dpt, p$1.pad$I.apply(this, [npad])) for (var i=0; i < imageWidth; i++) buf[pt + i]=p$1.readColor$I.apply(this, [bytesPerPixel]);


break;
case 8:
palette=Clazz.array(Integer.TYPE, [nColors]);
for (var i=0; i < nColors; i++) palette[i]=p$1.readColor$I.apply(this, [4]);

for (var pt=pt0; pt != pt1; pt+=dpt, p$1.pad$I.apply(this, [npad])) for (var i=0; i < imageWidth; i++) buf[pt + i]=palette[p$1.readByte.apply(this, [])];


break;
case 4:
npad=(4 - ((((imageWidth + 1)/2|0)) % 4)) % 4;
palette=Clazz.array(Integer.TYPE, [nColors]);
for (var i=0; i < nColors; i++) palette[i]=p$1.readColor$I.apply(this, [4]);

var b4=0;
for (var pt=pt0; pt != pt1; pt+=dpt, p$1.pad$I.apply(this, [npad])) for (var i=0, shift=4; i < imageWidth; i++, shift=4 - shift) buf[pt + i]=palette[((shift == 4 ? (b4=p$1.readByte.apply(this, [])) : b4) >> shift) & 15];


break;
case 1:
var color1=p$1.readColor$I.apply(this, [3]);
var color2=p$1.readColor$I.apply(this, [3]);
npad=(4 - ((((imageWidth + 7)/8|0)) % 4)) % 4;
var b=0;
for (var pt=pt0; pt != pt1; pt+=dpt, p$1.pad$I.apply(this, [npad])) for (var i=0, bpt=-1; i < imageWidth; i++, bpt--) {
if (bpt < 0) {
b=p$1.readByte.apply(this, []);
bpt=7;
}buf[pt + i]=((b & (1 << bpt)) == 0 ? color1 : color2);
}

break;
case 64:
case 2:
default:
System.out.println$S("Not a 32-, 24-, 8-, 4-, or 1-bit Windows Bitmap, aborting...");
return null;
}
return Clazz.array(java.lang.Object, -1, [buf, Integer.valueOf$I(imageWidth), Integer.valueOf$I(imageHeight)]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S("Caught exception in loadbitmap!");
} else {
throw e;
}
}
return null;
});

Clazz.newMeth(C$, 'pad$I',  function (npad) {
for (var i=0; i < npad; i++) p$1.readByte.apply(this, []);

return true;
}, p$1);

Clazz.newMeth(C$, 'readColor$I',  function (n) {
this.bis.read$BA$I$I(this.temp, 0, n);
return -16777216 | ((this.temp[2] & 255) << 16) | ((this.temp[1] & 255) << 8) | this.temp[0] & 255;
}, p$1);

Clazz.newMeth(C$, 'readInt',  function () {
this.bis.read$BA$I$I(this.temp, 0, 4);
return ((this.temp[3] & 255) << 24) | ((this.temp[2] & 255) << 16) | ((this.temp[1] & 255) << 8) | this.temp[0] & 255 ;
}, p$1);

Clazz.newMeth(C$, 'readShort',  function () {
this.bis.read$BA$I$I(this.temp, 0, 2);
return ((this.temp[1] & 255) << 8) | this.temp[0] & 255;
}, p$1);

Clazz.newMeth(C$, 'readByte',  function () {
this.bis.read$BA$I$I(this.temp, 0, 1);
return this.temp[0] & 255;
}, p$1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
