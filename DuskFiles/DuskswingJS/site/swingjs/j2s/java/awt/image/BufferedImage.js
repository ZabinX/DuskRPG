(function(){var P$=Clazz.newPackage("java.awt.image"),p$1={},I$=[[0,['sun.java2d.StateTrackable','.State'],'java.awt.image.DirectColorModel','java.awt.image.ColorModel','java.awt.color.ColorSpace','java.awt.image.ComponentColorModel','java.awt.image.Raster','java.awt.image.IndexColorModel','java.awt.image.PixelInterleavedSampleModel','java.awt.image.SinglePixelPackedSampleModel','java.awt.image.MultiPixelPackedSampleModel','java.util.Hashtable','sun.awt.image.OffScreenImageSource','java.awt.Image','swingjs.api.js.HTML5Canvas','swingjs.JSGraphics2D','swingjs.api.js.DOMNode','java.awt.Point','java.awt.Rectangle',['sun.awt.image.PixelConverter','.UshortGray'],['sun.awt.image.PixelConverter','.ByteGray'],'java.awt.Color']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BufferedImage", null, 'java.awt.Image', ['java.awt.image.RenderedImage', 'java.awt.Transparency', 'java.awt.image.ImageObserver']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.秘state=0;
this.hasColor=true;
this.imageType=0;
this.gCount=0;
},1);

C$.$fields$=[['Z',['秘haveNewPixels','hasColor','isAlphaPremultiplied'],'I',['秘state','width','height','秘wxh','imageType','gCount'],'O',['colorModel','java.awt.image.ColorModel','raster','java.awt.image.WritableRaster','osis','sun.awt.image.OffScreenImageSource','properties','java.util.Hashtable','秘g','swingjs.JSGraphics2D','秘imgNode','swingjs.api.js.DOMNode','秘pix','java.lang.Object','秘canvas','swingjs.api.js.HTML5Canvas','秘component','java.awt.Component']]
,['I',['imageCount'],'O',['states','String[]']]]

Clazz.newMeth(C$, 'getStateString$',  function () {
var data=this.raster.data ||null;
var s="";
for (var i=0; i < C$.states.length; i++) {
if ((this.秘state & (1 << i)) != 0) s+=C$.states[i] + ";";
}
return "rasterDirty=" + this.秘isRasterDirty$Z(false) + " " + (s === ""  ? "UNINITIALIZED" : s) + " unDisposedGraphicCount=" + this.gCount + " data[0]=" + (data == null  ? null : Integer.toHexString$I(data[0])) ;
});

Clazz.newMeth(C$, '秘havePixels$',  function () {
return ((this.秘state & 48) != 0);
});

Clazz.newMeth(C$, '秘havePixels8$',  function () {
return ((this.秘state & 16) != 0);
});

Clazz.newMeth(C$, '秘havePixels32$',  function () {
return ((this.秘state & 32) != 0);
});

Clazz.newMeth(C$, '秘haveImage$',  function () {
return ((this.秘state & 1) != 0);
});

Clazz.newMeth(C$, '秘haveVideo$',  function () {
return ((this.秘state & 8) != 0);
});

Clazz.newMeth(C$, '秘haveRaster$',  function () {
return ((this.秘state & 2) != 0);
});

Clazz.newMeth(C$, '秘haveCanvas$',  function () {
return ((this.秘state & 4) != 0);
});

Clazz.newMeth(C$, '秘isRasterDirty$Z',  function (doReset) {
if (this.raster.dataBuffer.theTrackable.秘isDirty$Z(doReset)) {
return true;
}var b=this.raster.dataBuffer.theTrackable.getState$() === $I$(1).UNTRACKABLE ;
return b;
});

Clazz.newMeth(C$, '秘dataStolenAndHaveRaster$',  function () {
var b=this.秘haveNewPixels || this.秘isRasterDirty$Z(false) && this.秘haveRaster$()  ;
this.秘haveNewPixels=false;
return b;
});

Clazz.newMeth(C$, '秘dataStolenButNoRaster$',  function () {
return this.秘isRasterDirty$Z(false) && !this.秘haveRaster$() ;
});

Clazz.newMeth(C$, 'c$$I$I$I',  function (width, height, imageType) {
Clazz.super_(C$, this);
this.秘init$I$I$I(width, height, imageType);
}, 1);

Clazz.newMeth(C$, '秘init$I$I$I',  function (width, height, imageType) {
this.width=width;
this.height=height;
this.秘wxh=width * height;
if (imageType == -2147483648) {
imageType=-6;
this.秘state=8;
}switch (imageType) {
case 1:
this.colorModel=Clazz.new_($I$(2,1).c$$I$I$I$I$I,[24, 16711680, 65280, 255, 0]);
this.raster=this.colorModel.createCompatibleWritableRaster$I$I(width, height);
this.raster.秘setImage$java_awt_image_BufferedImage(this);
this.秘pix=(this.raster.getDataBuffer$()).data;
this.秘state=38;
break;
case 2:
this.colorModel=$I$(3).getRGBdefault$();
this.raster=this.colorModel.createCompatibleWritableRaster$I$I(width, height);
this.raster.秘setImage$java_awt_image_BufferedImage(this);
this.秘pix=(this.raster.getDataBuffer$()).data;
break;
case 3:
this.colorModel=Clazz.new_([$I$(4).getInstance$I(1000), 32, 16711680, 65280, 255, -16777216, true, 3],$I$(2,1).c$$java_awt_color_ColorSpace$I$I$I$I$I$Z$I);
this.raster=this.colorModel.createCompatibleWritableRaster$I$I(width, height);
break;
case 4:
this.colorModel=Clazz.new_($I$(2,1).c$$I$I$I$I,[24, 255, 65280, 16711680]);
this.raster=this.colorModel.createCompatibleWritableRaster$I$I(width, height);
break;
case 5:
{
var cs=$I$(4).getInstance$I(1000);
var nBits=Clazz.array(Integer.TYPE, -1, [8, 8, 8]);
var bOffs=Clazz.array(Integer.TYPE, -1, [2, 1, 0]);
this.colorModel=Clazz.new_($I$(5,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[cs, nBits, false, false, 1, 0]);
this.raster=$I$(6).createInterleavedRaster$I$I$I$I$I$IA$java_awt_Point(0, width, height, width * 3, 3, bOffs, null);
}break;
case 6:
{
var cs=$I$(4).getInstance$I(1000);
var nBits=Clazz.array(Integer.TYPE, -1, [8, 8, 8, 8]);
var bOffs=Clazz.array(Integer.TYPE, -1, [3, 2, 1, 0]);
this.colorModel=Clazz.new_($I$(5,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[cs, nBits, true, false, 3, 0]);
this.raster=$I$(6).createInterleavedRaster$I$I$I$I$I$IA$java_awt_Point(0, width, height, width * 4, 4, bOffs, null);
}break;
case -6:
{
var cs=$I$(4).getInstance$I(1000);
var nBits=Clazz.array(Integer.TYPE, -1, [8, 8, 8, 8]);
var bOffs=Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3]);
this.colorModel=Clazz.new_($I$(5,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[cs, nBits, true, false, 3, 0]);
this.raster=$I$(6).createInterleavedRaster$I$I$I$I$I$IA$java_awt_Point(0, width, height, width * 4, 4, bOffs, null);
this.秘pix=(this.raster.getDataBuffer$()).data;
if (this.秘haveVideo$()) {
this.秘state=46;
} else {
this.秘state=22;
}this.raster.秘setImage$java_awt_image_BufferedImage(this);
}break;
case 7:
{
var cs=$I$(4).getInstance$I(1000);
var nBits=Clazz.array(Integer.TYPE, -1, [8, 8, 8, 8]);
var bOffs=Clazz.array(Integer.TYPE, -1, [3, 2, 1, 0]);
this.colorModel=Clazz.new_($I$(5,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[cs, nBits, true, true, 3, 0]);
this.raster=$I$(6).createInterleavedRaster$I$I$I$I$I$IA$java_awt_Point(0, width, height, width * 4, 4, bOffs, null);
}break;
case 10:
{
var cs=$I$(4).getInstance$I(1003);
var nBits=Clazz.array(Integer.TYPE, -1, [8]);
this.colorModel=Clazz.new_($I$(5,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[cs, nBits, false, true, 1, 0]);
this.raster=this.colorModel.createCompatibleWritableRaster$I$I(width, height);
this.hasColor=false;
}break;
case 11:
{
var cs=$I$(4).getInstance$I(1003);
var nBits=Clazz.array(Integer.TYPE, -1, [16]);
this.colorModel=Clazz.new_($I$(5,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[cs, nBits, false, true, 1, 1]);
this.raster=this.colorModel.createCompatibleWritableRaster$I$I(width, height);
this.hasColor=false;
}break;
case 12:
var arr=Clazz.array(Byte.TYPE, -1, [0, -1]);
this.colorModel=Clazz.new_($I$(7,1).c$$I$I$BA$BA$BA,[1, 2, arr, arr, arr]);
this.raster=$I$(6).createPackedRaster$I$I$I$I$I$java_awt_Point(0, width, height, 1, 1, null);
break;
case 13:
var cmap=Clazz.array(Integer.TYPE, [256]);
var i=0;
for (var r=0; r < 256; r+=51) {
for (var g=0; g < 256; g+=51) {
for (var b=0; b < 256; b+=51) {
cmap[i++]=(r << 16) | (g << 8) | b ;
}
}
}
var grayIncr=(256/(256 - i)|0);
var gray=grayIncr * 3;
for (; i < 256; i++) {
cmap[i]=(gray << 16) | (gray << 8) | gray ;
gray+=grayIncr;
}
this.colorModel=Clazz.new_($I$(7,1).c$$I$I$IA$I$Z$I$I,[8, 256, cmap, 0, false, -1, 0]);
this.raster=$I$(6).createInterleavedRaster$I$I$I$I$java_awt_Point(0, width, height, 1, null);
break;
case 8:
this.colorModel=Clazz.new_($I$(2,1).c$$I$I$I$I,[16, 63488, 2016, 31]);
this.raster=this.colorModel.createCompatibleWritableRaster$I$I(width, height);
break;
case 9:
this.colorModel=Clazz.new_($I$(2,1).c$$I$I$I$I,[15, 31744, 992, 31]);
this.raster=this.colorModel.createCompatibleWritableRaster$I$I(width, height);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown image type " + imageType]);
}
this.raster.秘setStable$Z(true);
this.imageType=imageType;
});

Clazz.newMeth(C$, 'c$$I$I$I$java_awt_image_IndexColorModel',  function (width, height, imageType, cm) {
Clazz.super_(C$, this);
if (cm.hasAlpha$() && cm.isAlphaPremultiplied$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["This image types do not have premultiplied alpha."]);
}this.width=width;
this.height=height;
this.秘wxh=width * height;
switch (imageType) {
case 12:
var bits;
var mapSize=cm.getMapSize$();
if (mapSize <= 2) {
bits=1;
} else if (mapSize <= 4) {
bits=2;
} else if (mapSize <= 16) {
bits=4;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Color map for TYPE_BYTE_BINARY must have no more than 16 entries"]);
}this.raster=$I$(6).createPackedRaster$I$I$I$I$I$java_awt_Point(0, width, height, 1, bits, null);
break;
case 13:
this.raster=$I$(6).createInterleavedRaster$I$I$I$I$java_awt_Point(0, width, height, 1, null);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid image type (" + imageType + ").  Image type must" + " be either TYPE_BYTE_BINARY or " + " TYPE_BYTE_INDEXED" ]);
}
if (!cm.isCompatibleRaster$java_awt_image_Raster(this.raster)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Incompatible image type and IndexColorModel"]);
}this.colorModel=cm;
this.imageType=imageType;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable',  function (cm, raster, isRasterPremultiplied, properties) {
Clazz.super_(C$, this);
if (!cm.isCompatibleRaster$java_awt_image_Raster(raster)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Raster " + raster + " is incompatible with ColorModel " + cm ]);
}if ((raster.minX != 0) || (raster.minY != 0) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Raster " + raster + " has minX or minY not equal to zero: " + raster.minX + " " + raster.minY ]);
}this.colorModel=cm;
this.raster=raster;
this.width=raster.getWidth$();
this.height=raster.getHeight$();
this.秘wxh=this.width * this.height;
raster.秘setImage$java_awt_image_BufferedImage(this);
this.秘state=2;
this.properties=properties;
var numBands=raster.getNumBands$();
var isAlphaPre=cm.isAlphaPremultiplied$();
var cs;
var sm=raster.getSampleModel$();
cs=cm.getColorSpace$();
var csType=cs.getType$();
if (csType != 5) {
if (csType == 6 && Clazz.getClass($I$(5)).equals$O(cm.getClass$()) ) {
if (Clazz.instanceOf(sm, "java.awt.image.ComponentSampleModel") && (sm).getPixelStride$() != numBands ) {
this.imageType=0;
} else if (Clazz.instanceOf(raster, "sun.awt.image.ByteComponentRaster") && Clazz.getClass($I$(8)).equals$O(sm.getClass$()) && raster.getNumBands$() == 1   && cm.getComponentSize$I(0) == 8  && (raster).getPixelStride$() == 1 ) {
this.imageType=10;
} else if (Clazz.instanceOf(raster, "sun.awt.image.ShortComponentRaster") && Clazz.getClass($I$(8)).equals$O(sm.getClass$()) && raster.getNumBands$() == 1   && cm.getComponentSize$I(0) == 16  && (raster).getPixelStride$() == 1 ) {
this.imageType=11;
}} else {
this.imageType=0;
}return;
}if ((Clazz.instanceOf(raster, "sun.awt.image.IntegerComponentRaster")) && (numBands == 3 || numBands == 4 ) ) {
var iraster=raster;
var pixSize=cm.getPixelSize$();
if (iraster.getPixelStride$() == 1 && Clazz.getClass($I$(2)).equals$O(cm.getClass$())  && Clazz.getClass($I$(9)).equals$O(sm.getClass$())  && (pixSize == 32 || pixSize == 24 ) ) {
var dcm=cm;
var rmask=dcm.getRedMask$();
var gmask=dcm.getGreenMask$();
var bmask=dcm.getBlueMask$();
if (rmask == 16711680 && gmask == 65280  && bmask == 255 ) {
if (dcm.getAlphaMask$() == -16777216) {
this.imageType=(isAlphaPre ? 3 : 2);
} else {
if (!dcm.hasAlpha$()) {
this.imageType=1;
}}} else if (rmask == 255 && gmask == 65280  && bmask == 16711680 ) {
if (!dcm.hasAlpha$()) {
this.imageType=4;
}}}} else if ((Clazz.getClass($I$(7)).equals$O(cm.getClass$())) && (numBands == 1) && (!cm.hasAlpha$() || !isAlphaPre )  ) {
var icm=cm;
var pixSize=icm.getPixelSize$();
if (Clazz.instanceOf(raster, "sun.awt.image.BytePackedRaster") && Clazz.getClass($I$(10)).equals$O(sm.getClass$()) ) {
this.imageType=12;
} else if (Clazz.instanceOf(raster, "sun.awt.image.ByteComponentRaster") && Clazz.getClass($I$(8)).equals$O(sm.getClass$()) ) {
var braster=raster;
if (braster.getPixelStride$() == 1 && pixSize <= 8 ) {
this.imageType=13;
}}} else if ((Clazz.instanceOf(raster, "sun.awt.image.ShortComponentRaster")) && (Clazz.getClass($I$(2)).equals$O(cm.getClass$())) && (Clazz.getClass($I$(9)).equals$O(sm.getClass$())) && (numBands == 3) && !cm.hasAlpha$()  ) {
var dcm=cm;
if (dcm.getRedMask$() == 63488) {
if (dcm.getGreenMask$() == 2016 && dcm.getBlueMask$() == 31 ) {
this.imageType=8;
}} else if (dcm.getRedMask$() == 31744) {
if (dcm.getGreenMask$() == 992 && dcm.getBlueMask$() == 31 ) {
this.imageType=9;
}}} else if ((Clazz.instanceOf(raster, "sun.awt.image.ByteComponentRaster")) && (Clazz.instanceOf(cm, "java.awt.image.ComponentColorModel")) && (Clazz.instanceOf(raster.getSampleModel$(), "java.awt.image.PixelInterleavedSampleModel")) && (numBands == 3 || numBands == 4 )  ) {
var ccm=cm;
var csm=raster.getSampleModel$();
var braster=raster;
var offs=csm.getBandOffsets$();
if (ccm.getNumComponents$() != numBands) {
throw Clazz.new_(Clazz.load('java.awt.image.RasterFormatException').c$$S,["Number of components in ColorModel (" + ccm.getNumComponents$() + ") does not match # in " + " Raster (" + numBands + ")" ]);
}var nBits=ccm.getComponentSize$();
var is8bit=true;
for (var i=0; i < numBands; i++) {
if (nBits[i] != 8) {
is8bit=false;
break;
}}
if (is8bit && braster.getPixelStride$() == numBands  && offs[0] == numBands - 1  && offs[1] == numBands - 2  && offs[2] == numBands - 3  && Clazz.getClass($I$(5)).equals$O(ccm.getClass$())  && Clazz.getClass($I$(8)).equals$O(csm.getClass$()) ) {
if (numBands == 3 && !ccm.hasAlpha$() ) {
this.imageType=5;
} else if (offs[3] == 0 && ccm.hasAlpha$() ) {
this.imageType=(isAlphaPre ? 7 : 6);
}}}}, 1);

Clazz.newMeth(C$, 'getType$',  function () {
return this.imageType;
});

Clazz.newMeth(C$, 'getColorModel$',  function () {
return this.colorModel;
});

Clazz.newMeth(C$, 'getRaster$',  function () {
return this.raster;
});

Clazz.newMeth(C$, '秘ensureRasterUpToDate$',  function () {
if (this.秘isRasterDirty$Z(false) || !this.秘haveRaster$() && this.秘state != 0  ) {
p$1.秘updateStateFromHTML5Canvas$I$Z.apply(this, [0, false]);
p$1.秘unsetGraphics.apply(this, []);
}this.秘state|=2;
});

Clazz.newMeth(C$, '秘unsetGraphics',  function () {
this.秘state&=~(5);
this.秘imgNode=null;
}, p$1);

Clazz.newMeth(C$, '秘ensureCanGetRGBPixels',  function () {
switch (this.imageType) {
case 1:
case 3:
case 2:
if (this.秘havePixels32$()) {
} else if (this.秘haveCanvas$() || this.秘haveImage$() ) {
p$1.秘updateStateFromHTML5Canvas$I$Z.apply(this, [32, false]);
} else if (this.秘haveRaster$() || this.秘state == 0 ) {
p$1.秘getPixelsFromRaster$I.apply(this, [32]);
}return true;
default:
this.秘ensureRasterUpToDate$();
return false;
}
}, p$1);

Clazz.newMeth(C$, 'getAlphaRaster$',  function () {
return this.colorModel.getAlphaRaster$java_awt_image_WritableRaster(this.raster);
});

Clazz.newMeth(C$, 'getRGB$I$I',  function (x, y) {
var isStolen=this.秘isRasterDirty$Z(false);
if (isStolen && !this.秘haveRaster$() ) this.秘ensureRasterUpToDate$();
if (!isStolen && (this.秘haveCanvas$() || this.秘state == 0 ) && p$1.秘ensureCanGetRGBPixels.apply(this, [])  ) {
return (this.秘pix)[y * this.width + x];
}return this.colorModel.getRGB$O(this.raster.getDataElements$I$I$O(x, y, null));
});

Clazz.newMeth(C$, 'getRGB$I$I$I$I$IA$I$I',  function (startX, startY, w, h, rgbArray, offset, scansize) {
var isStolen=this.秘isRasterDirty$Z(false);
if (isStolen && !this.秘haveRaster$() ) this.秘ensureRasterUpToDate$();
if (!isStolen && (this.秘haveCanvas$() || this.秘state == 1  || this.秘state == 0 ) && p$1.秘ensureCanGetRGBPixels.apply(this, [])  ) {
var pixels=this.秘pix;
if (pixels != null ) {
if (pixels.length == this.秘wxh) {
for (var y=startY, yoff=offset; y < startY + h; y++, yoff+=scansize) for (var off=yoff, x=startX; x < startX + w; x++) rgbArray[off++]=pixels[y * this.width + x];


} else {
for (var y=startY, yoff=offset; y < startY + h; y++, yoff+=scansize) {
for (var off=yoff, x=startX, pt=(y * this.width) << 2; x < startX + w; x++) {
rgbArray[off++]=(pixels[pt++] << 16) | (pixels[pt++] << 8) | pixels[pt++] | (pixels[pt++] << 24) ;
}
}
}}} else {
var yoff=offset;
var off;
var data;
var nbands=this.raster.getNumBands$();
var dataType=this.raster.getDataBuffer$().getDataType$();
switch (dataType) {
case 0:
data=Clazz.array(Byte.TYPE, [nbands]);
break;
case 1:
data=Clazz.array(Short.TYPE, [nbands]);
break;
case 3:
data=Clazz.array(Integer.TYPE, [nbands]);
break;
case 4:
data=Clazz.array(Float.TYPE, [nbands]);
break;
case 5:
data=Clazz.array(Double.TYPE, [nbands]);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown data buffer type: " + dataType]);
}
if (rgbArray == null ) {
rgbArray=Clazz.array(Integer.TYPE, [offset + h * scansize]);
}for (var y=startY; y < startY + h; y++, yoff+=scansize) {
off=yoff;
for (var x=startX; x < startX + w; x++) {
rgbArray[off++]=this.colorModel.getRGB$O(this.raster.getDataElements$I$I$O(x, y, data));
}
}
}this.秘state|=2;
this.秘state&=~(5);
return rgbArray;
});

Clazz.newMeth(C$, 'setRGB$I$I$I',  function (x, y, rgb) {
var isStolen=this.秘isRasterDirty$Z(false);
if (isStolen && !this.秘haveRaster$() ) this.秘ensureRasterUpToDate$();
if (!isStolen && (this.秘haveCanvas$() || this.秘state == 1  || this.秘state == 0 ) && p$1.秘ensureCanGetRGBPixels.apply(this, [])  ) {
var pixels=this.秘pix;
pixels[y * this.width + x]=rgb;
} else {
this.raster.setDataElements$I$I$O(x, y, this.colorModel.getDataElements$I$O(rgb, null));
}});

Clazz.newMeth(C$, 'setRGB$I$I$I$I$IA$I$I',  function (startX, startY, w, h, rgbArray, offset, scansize) {
var isStolen=this.秘isRasterDirty$Z(false);
if (isStolen && !this.秘haveRaster$() ) this.秘ensureRasterUpToDate$();
if (!isStolen && (this.秘haveCanvas$() || this.秘state == 1  || this.秘state == 0 ) && p$1.秘ensureCanGetRGBPixels.apply(this, [])  ) {
var pixels=this.秘pix;
var width=this.width;
for (var y=startY, yoff=offset; y < startY + h; y++, yoff+=scansize) for (var x=startX, off=yoff; x < startX + w; x++) pixels[y * width + x]=rgbArray[off++];


} else {
var yoff=offset;
var off;
var pixel=null;
for (var y=startY; y < startY + h; y++, yoff+=scansize) {
off=yoff;
for (var x=startX; x < startX + w; x++) {
pixel=this.colorModel.getDataElements$I$O(rgbArray[off++], pixel);
this.raster.setDataElements$I$I$O(x, y, pixel);
}
}
}p$1.秘unsetGraphics.apply(this, []);
this.秘state|=2;
});

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.raster.getWidth$();
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.raster.getHeight$();
});

Clazz.newMeth(C$, 'getWidth$java_awt_image_ImageObserver',  function (observer) {
return this.raster.getWidth$();
});

Clazz.newMeth(C$, 'getHeight$java_awt_image_ImageObserver',  function (observer) {
return this.raster.getHeight$();
});

Clazz.newMeth(C$, 'getSource$',  function () {
if (this.osis == null ) {
if (this.properties == null ) {
this.properties=Clazz.new_($I$(11,1));
}this.osis=Clazz.new_($I$(12,1).c$$java_awt_image_BufferedImage$java_util_Hashtable,[this, this.properties]);
}return this.osis;
});

Clazz.newMeth(C$, 'getProperty$S$java_awt_image_ImageObserver',  function (name, observer) {
return this.getProperty$S(name);
});

Clazz.newMeth(C$, 'getProperty$S',  function (name) {
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["null property name is not allowed"]);
}if (this.properties == null ) {
return $I$(13).UndefinedProperty;
}var o=this.properties.get$O(name);
if (o == null ) {
o=$I$(13).UndefinedProperty;
}return o;
});

Clazz.newMeth(C$, 'getGraphics$',  function () {
return this.createGraphics$();
});

Clazz.newMeth(C$, 'createGraphics$',  function () {
if (this.秘haveRaster$()) this.flush$();
return this.秘getImageGraphic$().create$();
});

Clazz.newMeth(C$, '秘getImageGraphic$',  function () {
if (this.秘canvas == null ) {
this.秘canvas=$I$(14,"createCanvas",[this.getWidth$(), this.getHeight$(), "img" + ++C$.imageCount]);
}if (this.秘g == null ) {
this.秘g=Clazz.new_($I$(15,1).c$$O,[this.秘canvas]);
}if (this.秘dataStolenAndHaveRaster$()) {
if (this.秘pix != null ) this.秘g.drawImageFromPixelsOrRaster$java_awt_Image$I$I$java_awt_image_ImageObserver(this, 0, 0, this);
}var pix=this.秘pix;

pix && (pix.img = this);
++this.gCount;
this.秘g.image=this;
this.秘state=4;
var g2d=this.秘g;
if (this.秘component != null ) {
g2d.setFont$java_awt_Font(this.秘component.getFont$());
g2d.setBackground$java_awt_Color(this.秘component.getBackground$());
g2d.setColor$java_awt_Color(this.秘component.getForeground$());
}return g2d;
});

Clazz.newMeth(C$, '秘graphicsDisposed$',  function () {
var doSync=(this.秘haveCanvas$() && this.秘isRasterDirty$Z(false) );
this.秘state=4;
if (doSync) {
p$1.秘syncRaster.apply(this, []);
}});

Clazz.newMeth(C$, 'flush$',  function () {
var setRasterState=p$1.秘syncRaster.apply(this, []);
if (this.秘haveRaster$() && this.秘pix == null  ) {
p$1.秘getPixelsFromRaster$I.apply(this, [0]);
}this.秘getImageGraphic$();
if (setRasterState) this.秘state|=2;
while (this.gCount-- > 0)this.秘g.dispose$();

});

Clazz.newMeth(C$, '秘syncRaster',  function () {
var isStolen=this.秘isRasterDirty$Z(false);
var haveRaster=this.秘haveRaster$();
if (isStolen && !haveRaster ) this.秘ensureRasterUpToDate$();
return (isStolen || haveRaster );
}, p$1);

Clazz.newMeth(C$, '_setImageNode$O$Z',  function (node, async) {
this.秘setImageNode$O$Z(node, async);
});

Clazz.newMeth(C$, '秘setImageNode$O$Z',  function (node, async) {
this.秘imgNode=node;
if (this.秘haveVideo$()) {
this.秘state|=5;
} else {
if ($I$(16).getAttr(node, "tagName") === "VIDEO" ) {
this.秘pix=null;
if (this.秘canvas == null ) {
this.秘getImageGraphic$().dispose$();
}this.秘canvas.getContext("2d").drawImage(this.秘imgNode, 0, 0, this.width, this.height);
this.秘state=13;
} else {
this.秘state=5;
}}});

Clazz.newMeth(C$, 'createImageNode',  function () {
var imgNode=this.秘imgNode;
if (imgNode == null ) {
var w=this.getWidth$();
var h=this.getHeight$();
var canvas=this.秘canvas;
if (canvas == null ) {
this.getGraphics$();
canvas=this.秘canvas;
}imgNode=canvas;
$I$(16).setSize(imgNode, w, h);
}return imgNode;
}, p$1);

Clazz.newMeth(C$, 'getSubimage$I$I$I$I',  function (x, y, w, h) {
return Clazz.new_(C$.c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[this.colorModel, this.raster.createWritableChild$I$I$I$I$I$I$IA(x, y, w, h, 0, 0, null), this.colorModel.isAlphaPremultiplied$(), this.properties]);
});

Clazz.newMeth(C$, 'isAlphaPremultiplied$',  function () {
return this.colorModel.isAlphaPremultiplied$();
});

Clazz.newMeth(C$, 'coerceData$Z',  function (isAlphaPremultiplied) {
if (this.colorModel.hasAlpha$() && this.colorModel.isAlphaPremultiplied$() != isAlphaPremultiplied  ) {
this.colorModel=this.colorModel.coerceData$java_awt_image_WritableRaster$Z(this.raster, isAlphaPremultiplied);
}});

Clazz.newMeth(C$, 'getSources$',  function () {
return null;
});

Clazz.newMeth(C$, 'getPropertyNames$',  function () {
return null;
});

Clazz.newMeth(C$, 'getMinX$',  function () {
return this.raster.getMinX$();
});

Clazz.newMeth(C$, 'getMinY$',  function () {
return this.raster.getMinY$();
});

Clazz.newMeth(C$, 'getSampleModel$',  function () {
return this.raster.getSampleModel$();
});

Clazz.newMeth(C$, 'getNumXTiles$',  function () {
return 1;
});

Clazz.newMeth(C$, 'getNumYTiles$',  function () {
return 1;
});

Clazz.newMeth(C$, 'getMinTileX$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getMinTileY$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getTileWidth$',  function () {
return this.raster.getWidth$();
});

Clazz.newMeth(C$, 'getTileHeight$',  function () {
return this.raster.getHeight$();
});

Clazz.newMeth(C$, 'getTileGridXOffset$',  function () {
return this.raster.getSampleModelTranslateX$();
});

Clazz.newMeth(C$, 'getTileGridYOffset$',  function () {
return this.raster.getSampleModelTranslateY$();
});

Clazz.newMeth(C$, 'getTile$I$I',  function (tileX, tileY) {
if (tileX == 0 && tileY == 0 ) {
return this.raster;
}throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["BufferedImages only have one tile with index 0,0"]);
});

Clazz.newMeth(C$, 'getData$',  function () {
this.raster.dataBuffer.秘setDoCheckImage$Z(false);
var width=this.raster.getWidth$();
var height=this.raster.getHeight$();
var startX=this.raster.getMinX$();
var startY=this.raster.getMinY$();
var wr=$I$(6,"createWritableRaster$java_awt_image_SampleModel$java_awt_Point",[this.raster.getSampleModel$(), Clazz.new_([this.raster.getSampleModelTranslateX$(), this.raster.getSampleModelTranslateY$()],$I$(17,1).c$$I$I)]);
var tdata=null;
for (var i=startY; i < startY + height; i++) {
tdata=this.raster.getDataElements$I$I$I$I$O(startX, i, width, 1, tdata);
wr.setDataElements$I$I$I$I$O(startX, i, width, 1, tdata);
}
this.raster.dataBuffer.秘setDoCheckImage$Z(true);
return wr;
});

Clazz.newMeth(C$, 'getData$java_awt_Rectangle',  function (rect) {
this.raster.dataBuffer.秘setDoCheckImage$Z(false);
var sm=this.raster.getSampleModel$();
var nsm=sm.createCompatibleSampleModel$I$I(rect.width, rect.height);
var wr=$I$(6,"createWritableRaster$java_awt_image_SampleModel$java_awt_Point",[nsm, rect.getLocation$()]);
var width=rect.width;
var height=rect.height;
var startX=rect.x;
var startY=rect.y;
var tdata=null;
for (var i=startY; i < startY + height; i++) {
tdata=this.raster.getDataElements$I$I$I$I$O(startX, i, width, 1, tdata);
wr.setDataElements$I$I$I$I$O(startX, i, width, 1, tdata);
}
this.raster.dataBuffer.秘setDoCheckImage$Z(true);
return wr;
});

Clazz.newMeth(C$, 'copyData$java_awt_image_WritableRaster',  function (outRaster) {
if (outRaster == null ) {
return this.getData$();
}this.raster.dataBuffer.秘setDoCheckImage$Z(false);
var width=outRaster.getWidth$();
var height=outRaster.getHeight$();
var startX=outRaster.getMinX$();
var startY=outRaster.getMinY$();
var tdata=null;
for (var i=startY; i < startY + height; i++) {
tdata=this.raster.getDataElements$I$I$I$I$O(startX, i, width, 1, tdata);
outRaster.setDataElements$I$I$I$I$O(startX, i, width, 1, tdata);
}
this.raster.dataBuffer.秘setDoCheckImage$Z(true);
return outRaster;
});

Clazz.newMeth(C$, 'setData$java_awt_image_Raster',  function (r) {
var width=r.getWidth$();
var height=r.getHeight$();
var startX=r.getMinX$();
var startY=r.getMinY$();
var tdata=null;
var rclip=Clazz.new_($I$(18,1).c$$I$I$I$I,[startX, startY, width, height]);
var bclip=Clazz.new_($I$(18,1).c$$I$I$I$I,[0, 0, this.raster.width, this.raster.height]);
var intersect=rclip.intersection$java_awt_Rectangle(bclip);
if (intersect.isEmpty$()) {
return;
}width=intersect.width;
height=intersect.height;
startX=intersect.x;
startY=intersect.y;
this.raster.dataBuffer.秘setDoCheckImage$Z(false);
for (var i=startY; i < startY + height; i++) {
tdata=r.getPixels$I$I$I$I$IA(startX, i, width, 1, tdata);
this.raster.setPixels$I$I$I$I$IA(startX, i, width, 1, tdata);
}
this.raster.dataBuffer.秘setDoCheckImage$Z(true);
this.秘state=2;
});

Clazz.newMeth(C$, 'addTileObserver$java_awt_image_TileObserver',  function (to) {
});

Clazz.newMeth(C$, 'removeTileObserver$java_awt_image_TileObserver',  function (to) {
});

Clazz.newMeth(C$, 'isTileWritable$I$I',  function (tileX, tileY) {
if (tileX == 0 && tileY == 0 ) {
return true;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Only 1 tile in image"]);
});

Clazz.newMeth(C$, 'getWritableTileIndices$',  function () {
return Clazz.array($I$(17), -1, [Clazz.new_($I$(17,1).c$$I$I,[0, 0])]);
});

Clazz.newMeth(C$, 'hasTileWriters$',  function () {
return true;
});

Clazz.newMeth(C$, 'getWritableTile$I$I',  function (tileX, tileY) {
return this.raster;
});

Clazz.newMeth(C$, 'releaseWritableTile$I$I',  function (tileX, tileY) {
});

Clazz.newMeth(C$, 'getTransparency$',  function () {
return this.colorModel.getTransparency$();
});

Clazz.newMeth(C$, '秘setImageFromHTML5Canvas$swingjs_JSGraphics2D',  function (g) {
this.秘g=g;
this.width=this.raster.width;
this.height=this.raster.height;
p$1.秘updateStateFromHTML5Canvas$I$Z.apply(this, [0, true]);
});

Clazz.newMeth(C$, '秘updateStateFromHTML5Canvas$I$Z',  function (nBits, andSetImageNode) {
var g;
var node=null;
if ((g=this.秘g) == null  && (node=this.秘imgNode) == null  ) {
return;
}var canvas=(g == null  ? null : g.canvas ||null);
if (canvas == null ) {
canvas=$I$(16).createElement("canvas", null);

canvas.crossOrigin = "Anonymous";
}var w=this.width;
var h=this.height;
var data=$I$(14).getDataBufferBytes(canvas, node, w, h);
var buf=this.raster.getDataBuffer$();
this.秘pix=null;
var haveHTML5Pixels=false;
switch (this.imageType) {
case 1:
case 3:
case 2:
C$.toIntARGB$BA$IA$I(data, (this.秘pix=(buf).data), this.imageType == 1 ? 0 : -16777216);
if ((this.秘pix).length != this.秘wxh) this.秘pix=null;
break;
case -6:
(buf).data=data;
if (nBits != 32) {
this.秘pix=data;
haveHTML5Pixels=true;
}break;
case 4:
p$1.toInt3BGR$BA$IA.apply(this, [data, (buf).data]);
break;
case 5:
p$1.toByte3BGR$BA$BA.apply(this, [data, (buf).data]);
break;
case 6:
case 7:
p$1.toByteABGR$BA$BA.apply(this, [data, (buf).data]);
break;
case 10:
p$1.toByteGray$BA$BA.apply(this, [data, (buf).data]);
break;
case 11:
p$1.toUShortGray$BA$HA.apply(this, [data, (buf).data]);
break;
case 12:
case 13:
case 8:
case 9:
p$1.toRaster$BA.apply(this, [data]);
break;
}
if (this.秘pix == null ) {
C$.toIntARGB$BA$IA$I(data, (this.秘pix=Clazz.array(Integer.TYPE, [data.length >> 2])), -16777216);
}this.秘state=6;
this.秘state|=(haveHTML5Pixels ? 16 : 32);
this.秘imgNode=(andSetImageNode ? canvas : null);
if (andSetImageNode) {
this.秘state|=1;
}}, p$1);

Clazz.newMeth(C$, 'toIntARGB$BA$IA$I',  function (ctxData, iData, alpha) {
var n=ctxData.length >> 2;
for (var i=0, j=0; i < n; ) {
var argb=(ctxData[j++] << 16) | (ctxData[j++] << 8) | ctxData[j++] | alpha ;
iData[i++]=(ctxData[j++] == 0 ? 0 : argb);
}
}, 1);

Clazz.newMeth(C$, 'toByteABGR$BA$BA',  function (ctxData, buf) {
var n=ctxData.length;
for (var i=0, j=0; i < n; j+=4) {
buf[i++]=ctxData[j + 2];
buf[i++]=ctxData[j + 1];
buf[i++]=ctxData[j];
buf[i++]=ctxData[j + 3];
}
}, p$1);

Clazz.newMeth(C$, 'toByte3BGR$BA$BA',  function (ctxData, buf) {
var t=buf;
var n=(ctxData.length >> 2) * 3;
for (var i=0, j=0; i < n; j+=4) {
t[i++]=ctxData[j + 2];
t[i++]=ctxData[j + 1];
t[i++]=ctxData[j];
}
}, p$1);

Clazz.newMeth(C$, 'toRaster$BA',  function (ctxData) {
var cm=this.getColorModel$();
var iData=Clazz.array(Integer.TYPE, [ctxData.length >> 2]);
for (var i=0, pt=0, n=ctxData.length; i < n; i+=4) iData[pt++]=cm.getDataElement$IA$I(ctxData, i);

this.raster.setDataElements$I$I$I$I$O(0, 0, this.width, this.height, iData);
}, p$1);

Clazz.newMeth(C$, 'toUShortGray$BA$HA',  function (ctxData, buf) {
var pc=$I$(19).$$instance;
var n=ctxData.length >> 2;
for (var i=0, j=0; i < n; j++) {
var argb=(ctxData[j++] << 16) | (ctxData[j++] << 8) | ctxData[j++] | -16777216 ;
buf[i++]=(pc.rgbToPixel$I$java_awt_image_ColorModel(argb, null)|0);
}
}, p$1);

Clazz.newMeth(C$, 'toByteGray$BA$BA',  function (ctxData, buf) {
for (var i=0, p=0, n=buf.length; i < n; i++, p+=4) buf[i]=ctxData[p];

}, p$1);

Clazz.newMeth(C$, 'toInt3BGR$BA$IA',  function (ctxData, buf) {
var n=ctxData.length >> 2;
for (var i=0, j=0; i < n; ) {
var argb=(ctxData[j++]) | (ctxData[j++] << 8) | (ctxData[j++] << 16) | -16777216 ;
buf[i++]=(ctxData[j++] == 0 ? 0 : argb);
}
}, p$1);

Clazz.newMeth(C$, '秘isOpaque$',  function () {
switch (this.imageType) {
case 2:
case 3:
case 6:
case -6:
case 7:
return false;
case 1:
case 4:
case 5:
case 10:
case 11:
case 12:
case 13:
case 8:
case 9:
default:
return true;
}
});

Clazz.newMeth(C$, 'get秘pixFromRaster$',  function () {
if (!this.秘haveRaster$()) return null;
this.秘isRasterDirty$Z(true);
var r=this.raster;
switch (this.imageType) {
case 1:
case 2:
if ((r.dataBuffer).data.length != this.秘wxh) break;
return (r.dataBuffer).data;
case -6:
return this.秘pix;
}
this.秘haveNewPixels=true;
return p$1.秘getPixelsFromRaster$I.apply(this, [8]);
});

Clazz.newMeth(C$, '秘getPixelsFromRaster$I',  function (nbits) {
this.秘isRasterDirty$Z(true);
var wasUntrackable=(this.raster.dataBuffer.theTrackable.getState$() === $I$(1).UNTRACKABLE );
var n=this.秘wxh;
var b;
this.秘state&=~48;
switch (this.imageType) {
case -6:
b=(this.raster.getDataBuffer$()).getData$();
if (!wasUntrackable) this.raster.秘setStable$Z(true);
if (nbits == 32) {
var data=Clazz.array(Integer.TYPE, [n]);
C$.toIntARGB$BA$IA$I(b, data, -16777216);
this.秘state|=32;
} else {
this.秘state|=16;
}return this.秘pix=b;
case 1:
case 2:
if (nbits == 32) {
this.秘state|=32;
this.秘pix=(this.raster.getDataBuffer$()).getData$();
if (!wasUntrackable) this.raster.秘setStable$Z(true);
return this.秘pix;
}break;
}
var p=this.秘pix;
if (p == null  || p.length != n * 4 ) p=Clazz.array(Integer.TYPE, [n * 4]);
this.秘pix=p;
var cm=this.getColorModel$();
var isPacked=Clazz.instanceOf(cm, "java.awt.image.PackedColorModel");
var alpha=(!this.秘isOpaque$() ? 0 : cm.getNumColorComponents$() == 3 ? 255 : -1);
if (isPacked) {
var a=Clazz.array(Integer.TYPE, [n]);
this.raster.getDataElements$I$I$I$I$O(0, 0, this.width, this.height, a);
for (var i=0, pt=0; i < n; i++, pt+=4) {
cm.getComponents$I$IA$I(a[i], p, pt);
if ((alpha=cm.getAlpha$I(i)) != 0) p[pt + 3]=alpha;
}
} else {
var nc=cm.getNumComponents$();
this.raster.getPixels$I$I$I$I$IA(0, 0, this.width, this.height, p);
if (Clazz.instanceOf(cm, "java.awt.image.IndexColorModel")) {
var icm=cm;
var colors=icm.秘getColorMap$();
for (var i=n, pt=n * 4; i > 0; ) {
var index=(p[--i] << 2) + 4;
p[--pt]=colors[--index];
p[--pt]=colors[--index];
p[--pt]=colors[--index];
p[--pt]=colors[--index];
}
} else {
switch (nc) {
case 1:
for (var i=n, pt=n * 4; --i >= 0; ) {
var val=p[i] >> 8;
p[--pt]=255;
p[--pt]=val;
p[--pt]=val;
p[--pt]=val;
}
break;
case 3:
for (var i=n * 4, j=n * 3; --i >= 0; ) {
if (i % 4 == 3) p[i--]=255;
p[i]=p[--j];
}
break;
case 4:
this.getRaster$().getPixels$I$I$I$I$IA(0, 0, this.width, this.height, p);
break;
}
}}if (nbits == 32) {
var data=Clazz.array(Integer.TYPE, [n]);
C$.toIntARGB$BA$IA$I(p, data, -16777216);
this.秘state|=32;
} else {
this.秘state|=16;
}return p;
}, p$1);

Clazz.newMeth(C$, '秘getImageNode$I',  function (mode) {
if (this.秘isRasterDirty$Z(false)) this.秘state|=2;
switch (mode) {
default:
case 0:
return this.秘haveImage$() ? this.秘imgNode : this.秘dataStolenAndHaveRaster$() ? null : (this.秘haveRaster$() || this.秘canvas != null   ? this.秘canvas : p$1.createImageNode.apply(this, []));
case 2:
if (!this.秘isRasterDirty$Z(false)) return (this.秘canvas != null  && !this.秘haveVideo$()  ? this.秘canvas : this.秘imgNode != null  ? p$1.秘copyImageNode.apply(this, []) : p$1.createImageNode.apply(this, []));
case 1:
this.秘haveNewPixels=true;
p$1.秘getPixelsFromRaster$I.apply(this, [0]);
this.秘g=null;
this.秘getImageGraphic$();
var canvas=this.秘g.getCanvas$();
p$1.秘unsetGraphics.apply(this, []);
this.秘g=null;
return canvas;
}
});

Clazz.newMeth(C$, '秘copyImageNode',  function () {
if (this.秘haveVideo$()) return this.秘imgNode;
var node=$I$(16).createElement("img", null);
node.setAttribute("width", this.秘imgNode.getAttribute("width"));
node.setAttribute("height", this.秘imgNode.getAttribute("height"));
node.setAttribute("src", this.秘imgNode.getAttribute("src"));
return node;
}, p$1);

Clazz.newMeth(C$, '秘setPixels$IA',  function (argb) {
this.秘pix=argb;
this.秘state=4;
if (argb.length == this.秘wxh) {
this.秘state|=32;
switch (this.imageType) {
case 1:
case 3:
case 2:
(this.raster.dataBuffer).data=(this.raster).data=argb;
this.raster.秘setStable$Z(true);
this.秘state|=2;
break;
default:
break;
}
} else {
this.秘state|=16;
}});

Clazz.newMeth(C$, 'toString',  function () {
return ("BufferedImage@" + Integer.toHexString$I(this.hashCode$()) + ": type = " + this.imageType + " " + this.colorModel.toString() + " " + this.raster.toString() + " state:" + this.getStateString$() );
});

Clazz.newMeth(C$, '秘newPixelsFromMemorySource$O',  function (pixels) {
var img=pixels.img ||null;
if (img != null ) img.秘setPixels$IA(pixels);
}, 1);

Clazz.newMeth(C$, '秘getGraphicsColor$java_awt_Color',  function (c) {
if (this.hasColor) return c;
var pc;
switch (this.imageType) {
default:
case 11:
pc=$I$(19).$$instance;
break;
case 10:
pc=$I$(20).$instance;
break;
}
return Clazz.new_([pc.pixelToRgb$I$java_awt_image_ColorModel(pc.rgbToPixel$I$java_awt_image_ColorModel(c.getRGB$(), null), null)],$I$(21,1).c$$I);
});

Clazz.newMeth(C$, 'imageUpdate$java_awt_Image$I$I$I$I$I',  function (img, infoflags, x, y, width, height) {
return false;
});

C$.$static$=function(){C$.$static$=0;
C$.states=Clazz.array(String, -1, ["ImageOnly", "Raster", "Graphics", "Video", "8-bitPixels", "32-bitPixels"]);
C$.imageCount=0;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:11 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
