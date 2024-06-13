(function(){var P$=Clazz.newPackage("sun.awt.image"),p$1={},I$=[[0,'Thread','java.awt.image.BufferedImage','java.awt.image.ColorModel','java.awt.image.DataBufferInt','sun.awt.image.SunWritableRaster','java.awt.image.Raster','java.awt.image.DirectColorModel']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageRepresentation", null, 'sun.awt.image.ImageWatched', 'java.awt.image.ImageConsumer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.width=-1;
this.height=-1;
this.srcModel=null;
this.srcLUT=null;
this.srcLUTtransIndex=-1;
this.numSrcLUT=0;
this.isDefaultBI=false;
this.isSameCM=false;
this.consuming=false;
},1);

C$.$fields$=[['Z',['forceCMhint','isDefaultBI','isSameCM','consuming'],'I',['tag','width','height','hints','availinfo','srcLUTtransIndex','numSrcLUT','sstride','numWaiters'],'O',['src','sun.awt.image.InputStreamImageSource','image','sun.awt.image.ToolkitImage','newbits','java.awt.Rectangle','bimage','java.awt.image.BufferedImage','biRaster','java.awt.image.WritableRaster','cmodel','java.awt.image.ColorModel','+srcModel','srcLUT','int[]']]]

Clazz.newMeth(C$, 'c$$sun_awt_image_ToolkitImage$java_awt_image_ColorModel$Z',  function (im, cmodel, forceCMhint) {
Clazz.super_(C$, this);
this.image=im;
if (Clazz.instanceOf(this.image.getSource$(), "sun.awt.image.InputStreamImageSource")) {
this.src=this.image.getSource$();
}this.setColorModel$java_awt_image_ColorModel(cmodel);
this.forceCMhint=forceCMhint;
}, 1);

Clazz.newMeth(C$, 'reconstruct$I',  function (flags) {
if (this.src != null ) {
this.src.checkSecurity$O$Z(null, false);
}var missinginfo=flags & ~this.availinfo;
if ((this.availinfo & 64) == 0 && missinginfo != 0 ) {
++this.numWaiters;
try {
this.startProduction$();
missinginfo=flags & ~this.availinfo;
while ((this.availinfo & 64) == 0 && missinginfo != 0 ){
try {
this.wait$();
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
$I$(1).currentThread$().interrupt$();
return;
} else {
throw e;
}
}
missinginfo=flags & ~this.availinfo;
}
} finally {
p$1.decrementWaiters.apply(this, []);
}
}});

Clazz.newMeth(C$, 'setDimensions$I$I',  function (w, h) {
if (this.src != null ) {
this.src.checkSecurity$O$Z(null, false);
}this.image.setDimensions$I$I(w, h);
this.newInfo$java_awt_Image$I$I$I$I$I(this.image, (3), 0, 0, w, h);
if (w <= 0 || h <= 0 ) {
this.imageComplete$I(1);
return;
}if (this.width != w || this.height != h ) {
this.bimage=null;
}this.width=w;
this.height=h;
this.availinfo|=3;
});

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.height;
});

Clazz.newMeth(C$, 'getColorModel$',  function () {
return this.cmodel;
});

Clazz.newMeth(C$, 'getBufferedImage$',  function () {
return this.bimage;
});

Clazz.newMeth(C$, 'createImage$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable',  function (cm, raster, isRasterPremultiplied, properties) {
var bi=Clazz.new_($I$(2,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[cm, raster, isRasterPremultiplied, null]);
bi.setAccelerationPriority$F(this.image.getAccelerationPriority$());
return bi;
});

Clazz.newMeth(C$, 'setProperties$java_util_Hashtable',  function (props) {
if (this.src != null ) {
this.src.checkSecurity$O$Z(null, false);
}this.image.setProperties$java_util_Hashtable(props);
this.newInfo$java_awt_Image$I$I$I$I$I(this.image, 4, 0, 0, 0, 0);
});

Clazz.newMeth(C$, 'setColorModel$java_awt_image_ColorModel',  function (model) {
if (this.src != null ) {
this.src.checkSecurity$O$Z(null, false);
}this.srcModel=model;
if (Clazz.instanceOf(model, "java.awt.image.IndexColorModel")) {
if (model.getTransparency$() == 3) {
this.cmodel=$I$(3).getRGBdefault$();
this.srcLUT=null;
} else {
var icm=model;
this.numSrcLUT=icm.getMapSize$();
this.srcLUT=Clazz.array(Integer.TYPE, [Math.max(this.numSrcLUT, 256)]);
icm.getRGBs$IA(this.srcLUT);
this.srcLUTtransIndex=icm.getTransparentPixel$();
this.cmodel=model;
}} else {
if (this.cmodel == null ) {
this.cmodel=model;
this.srcLUT=null;
} else if (Clazz.instanceOf(model, "java.awt.image.DirectColorModel")) {
var dcm=model;
if ((dcm.getRedMask$() == 16711680) && (dcm.getGreenMask$() == 65280) && (dcm.getBlueMask$() == 255)  ) {
this.cmodel=model;
this.srcLUT=null;
}}}this.isSameCM=(this.cmodel === model );
});

Clazz.newMeth(C$, 'createBufferedImage$',  function () {
this.isDefaultBI=false;
try {
this.biRaster=this.cmodel.createCompatibleWritableRaster$I$I(this.width, this.height);
this.bimage=this.createImage$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable(this.cmodel, this.biRaster, this.cmodel.isAlphaPremultiplied$(), null);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.cmodel=$I$(3).getRGBdefault$();
this.biRaster=this.cmodel.createCompatibleWritableRaster$I$I(this.width, this.height);
this.bimage=this.createImage$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable(this.cmodel, this.biRaster, false, null);
} else {
throw e;
}
}
var type=this.bimage.getType$();
if ((this.cmodel === $I$(3).getRGBdefault$() ) || (type == 1) || (type == 3)  ) {
this.isDefaultBI=true;
} else if (Clazz.instanceOf(this.cmodel, "java.awt.image.DirectColorModel")) {
var dcm=this.cmodel;
if (dcm.getRedMask$() == 16711680 && dcm.getGreenMask$() == 65280  && dcm.getBlueMask$() == 255 ) {
this.isDefaultBI=true;
}}});

Clazz.newMeth(C$, 'convertToRGB',  function () {
var w=this.bimage.getWidth$();
var h=this.bimage.getHeight$();
var size=w * h;
var dbi=Clazz.new_($I$(4,1).c$$I,[size]);
var newpixels=$I$(5).stealData$java_awt_image_DataBufferInt$I(dbi, 0);
if (Clazz.instanceOf(this.cmodel, "java.awt.image.IndexColorModel") && Clazz.instanceOf(this.biRaster, "sun.awt.image.ByteComponentRaster") && this.biRaster.getNumDataElements$() == 1  ) {
var bct=this.biRaster;
var data=bct.getDataStorage$();
var coff=bct.getDataOffset$I(0);
for (var i=0; i < size; i++) {
newpixels[i]=this.srcLUT[data[coff + i] & 255];
}
} else {
var srcpixels=null;
var off=0;
for (var y=0; y < h; y++) {
for (var x=0; x < w; x++) {
srcpixels=this.biRaster.getDataElements$I$I$O(x, y, srcpixels);
newpixels[off++]=this.cmodel.getRGB$O(srcpixels);
}
}
}$I$(5).markDirty$java_awt_image_DataBuffer(dbi);
this.isSameCM=false;
this.cmodel=$I$(3).getRGBdefault$();
var bandMasks=Clazz.array(Integer.TYPE, -1, [16711680, 65280, 255, -16777216]);
this.biRaster=$I$(6).createPackedRaster$java_awt_image_DataBuffer$I$I$I$IA$java_awt_Point(dbi, w, h, w, bandMasks, null);
this.bimage=this.createImage$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable(this.cmodel, this.biRaster, this.cmodel.isAlphaPremultiplied$(), null);
this.srcLUT=null;
this.isDefaultBI=true;
}, p$1);

Clazz.newMeth(C$, 'setHints$I',  function (h) {
if (this.src != null ) {
this.src.checkSecurity$O$Z(null, false);
}this.hints=h;
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$java_awt_image_ColorModel$BA$I$I',  function (x, y, w, h, model, pix, off, scansize) {
var lineOff=off;
var poff;
if (this.src != null ) {
this.src.checkSecurity$O$Z(null, false);
}{
if (this.bimage == null ) {
if (this.cmodel == null ) {
this.cmodel=model;
}this.createBufferedImage$();
}if (w <= 0 || h <= 0 ) {
return;
}var biWidth=this.biRaster.getWidth$();
var biHeight=this.biRaster.getHeight$();
var x1=x + w;
var y1=y + h;
if (x < 0) {
off-=x;
x=0;
} else if (x1 < 0) {
x1=biWidth;
}if (y < 0) {
off-=y * scansize;
y=0;
} else if (y1 < 0) {
y1=biHeight;
}if (x1 > biWidth) {
x1=biWidth;
}if (y1 > biHeight) {
y1=biHeight;
}if (x >= x1 || y >= y1 ) {
return;
}w=x1 - x;
h=y1 - y;
if (off < 0 || off >= pix.length ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Data offset out of bounds."]);
}var remainder=pix.length - off;
if (remainder < w) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Data array is too short."]);
}var num;
if (scansize < 0) {
num=((off/-scansize|0)) + 1;
} else if (scansize > 0) {
num=(((remainder - w)/scansize|0)) + 1;
} else {
num=h;
}if (h > num) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$S,["Data array is too short."]);
}if (this.isSameCM && (this.cmodel !== model ) && (this.srcLUT != null ) && (Clazz.instanceOf(model, "java.awt.image.IndexColorModel")) && (Clazz.instanceOf(this.biRaster, "sun.awt.image.ByteComponentRaster"))  ) {
p$1.convertToRGB.apply(this, []);
}if (this.isDefaultBI) {
var iraster=this.biRaster;
if (this.srcLUT != null  && Clazz.instanceOf(model, "java.awt.image.IndexColorModel") ) {
if (model !== this.srcModel ) {
(model).getRGBs$IA(this.srcLUT);
this.srcModel=model;
}var storage=Clazz.array(Integer.TYPE, [w * h]);
var soff=0;
for (var yoff=0; yoff < h; yoff++, lineOff+=scansize) {
poff=lineOff;
for (var i=0; i < w; i++) {
storage[soff++]=this.srcLUT[pix[poff++] & 255];
}
}
iraster.setDataElements$I$I$I$I$O(x, y, w, h, storage);
} else {
var storage=Clazz.array(Integer.TYPE, [w]);
for (var yoff=y; yoff < y + h; yoff++, lineOff+=scansize) {
poff=lineOff;
for (var i=0; i < w; i++) {
storage[i]=model.getRGB$I(pix[poff++] & 255);
}
iraster.setDataElements$I$I$I$I$O(x, yoff, w, 1, storage);
}
this.availinfo|=8;
}} else if ((this.cmodel === model ) && (Clazz.instanceOf(this.biRaster, "sun.awt.image.ByteComponentRaster")) && (this.biRaster.getNumDataElements$() == 1)  ) {
var bt=this.biRaster;
if (off == 0 && scansize == w ) {
bt.putByteData$I$I$I$I$BA(x, y, w, h, pix);
} else {
var bpix=Clazz.array(Byte.TYPE, [w]);
poff=off;
for (var yoff=y; yoff < y + h; yoff++) {
System.arraycopy$O$I$O$I$I(pix, poff, bpix, 0, w);
bt.putByteData$I$I$I$I$BA(x, yoff, w, 1, bpix);
poff+=scansize;
}
}} else {
for (var yoff=y; yoff < y + h; yoff++, lineOff+=scansize) {
poff=lineOff;
for (var xoff=x; xoff < x + w; xoff++) {
this.bimage.setRGB$I$I$I(xoff, yoff, model.getRGB$I(pix[poff++] & 255));
}
}
this.availinfo|=8;
}}if ((this.availinfo & 16) == 0) {
this.newInfo$java_awt_Image$I$I$I$I$I(this.image, 8, x, y, w, h);
}});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I',  function (x, y, w, h, model, pix, off, scansize) {
var lineOff=off;
var poff;
if (this.src != null ) {
this.src.checkSecurity$O$Z(null, false);
}{
if (this.bimage == null ) {
if (this.cmodel == null ) {
this.cmodel=model;
}this.createBufferedImage$();
}var storage=Clazz.array(Integer.TYPE, [w]);
var yoff;
var pixel;
if (Clazz.instanceOf(this.cmodel, "java.awt.image.IndexColorModel")) {
p$1.convertToRGB.apply(this, []);
}if ((model === this.cmodel ) && (Clazz.instanceOf(this.biRaster, "sun.awt.image.IntegerComponentRaster")) ) {
var iraster=this.biRaster;
if (off == 0 && scansize == w ) {
iraster.setDataElements$I$I$I$I$O(x, y, w, h, pix);
} else {
for (yoff=y; yoff < y + h; yoff++, lineOff+=scansize) {
System.arraycopy$O$I$O$I$I(pix, lineOff, storage, 0, w);
iraster.setDataElements$I$I$I$I$O(x, yoff, w, 1, storage);
}
}} else {
if (model.getTransparency$() != 1 && this.cmodel.getTransparency$() == 1 ) {
p$1.convertToRGB.apply(this, []);
}if (this.isDefaultBI) {
var iraster=this.biRaster;
var data=iraster.getDataStorage$();
if (this.cmodel.equals$O(model)) {
var sstride=iraster.getScanlineStride$();
var doff=y * sstride + x;
for (yoff=0; yoff < h; yoff++, lineOff+=scansize) {
System.arraycopy$O$I$O$I$I(pix, lineOff, data, doff, w);
doff+=sstride;
}
iraster.markDirty$();
} else {
for (yoff=y; yoff < y + h; yoff++, lineOff+=scansize) {
poff=lineOff;
for (var i=0; i < w; i++) {
storage[i]=model.getRGB$I(pix[poff++]);
}
iraster.setDataElements$I$I$I$I$O(x, yoff, w, 1, storage);
}
}this.availinfo|=8;
} else {
var tmp=null;
for (yoff=y; yoff < y + h; yoff++, lineOff+=scansize) {
poff=lineOff;
for (var xoff=x; xoff < x + w; xoff++) {
pixel=model.getRGB$I(pix[poff++]);
tmp=this.cmodel.getDataElements$I$O(pixel, tmp);
this.biRaster.setDataElements$I$I$O(xoff, yoff, tmp);
}
}
this.availinfo|=8;
}}}if (((this.availinfo & 16) == 0)) {
this.newInfo$java_awt_Image$I$I$I$I$I(this.image, 8, x, y, w, h);
}});

Clazz.newMeth(C$, 'getOpaqueRGBImage$',  function () {
if (this.bimage.getType$() == 2) {
var w=this.bimage.getWidth$();
var h=this.bimage.getHeight$();
var size=w * h;
var db=this.biRaster.getDataBuffer$();
var pixels=$I$(5).stealData$java_awt_image_DataBufferInt$I(db, 0);
for (var i=0; i < size; i++) {
if ((pixels[i] >>> 24) != 255) {
return this.bimage;
}}
var opModel=Clazz.new_($I$(7,1).c$$I$I$I$I,[24, 16711680, 65280, 255]);
var bandmasks=Clazz.array(Integer.TYPE, -1, [16711680, 65280, 255]);
var opRaster=$I$(6).createPackedRaster$java_awt_image_DataBuffer$I$I$I$IA$java_awt_Point(db, w, h, w, bandmasks, null);
try {
var opImage=this.createImage$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable(opModel, opRaster, false, null);
return opImage;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return this.bimage;
} else {
throw e;
}
}
}return this.bimage;
});

Clazz.newMeth(C$, 'imageComplete$I',  function (status) {
if (this.src != null ) {
this.src.checkSecurity$O$Z(null, false);
}var done;
var info;
switch (status) {
default:
case 4:
done=true;
info=128;
break;
case 1:
this.image.addInfo$I(64);
done=true;
info=64;
this.dispose$();
break;
case 3:
done=true;
info=32;
break;
case 2:
done=false;
info=16;
break;
}
{
if (done) {
this.image.getSource$().removeConsumer$java_awt_image_ImageConsumer(this);
this.consuming=false;
this.newbits=null;
if (this.bimage != null ) {
this.bimage=this.getOpaqueRGBImage$();
}}this.availinfo|=info;
this.notifyAll$();
}this.newInfo$java_awt_Image$I$I$I$I$I(this.image, info, 0, 0, this.width, this.height);
this.image.infoDone$I(status);
});

Clazz.newMeth(C$, 'startProduction$',  function () {
if (!this.consuming) {
this.consuming=true;
this.image.getSource$().startProduction$java_awt_image_ImageConsumer(this);
}});

Clazz.newMeth(C$, 'checkConsumption',  function () {
if (this.isWatcherListEmpty$() && this.numWaiters == 0  && ((this.availinfo & 32) == 0) ) {
this.dispose$();
}}, p$1);

Clazz.newMeth(C$, 'notifyWatcherListEmpty$',  function () {
p$1.checkConsumption.apply(this, []);
});

Clazz.newMeth(C$, 'decrementWaiters',  function () {
--this.numWaiters;
p$1.checkConsumption.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'prepare$java_awt_image_ImageObserver',  function (iw) {
if (this.src != null ) {
this.src.checkSecurity$O$Z(null, false);
}if ((this.availinfo & 64) != 0) {
if (iw != null ) {
iw.imageUpdate$java_awt_Image$I$I$I$I$I(this.image, 192, -1, -1, -1, -1);
}return false;
}var done=((this.availinfo & 32) != 0);
if (!done) {
this.addWatcher$java_awt_image_ImageObserver(iw);
this.startProduction$();
done=((this.availinfo & 32) != 0);
}return done;
});

Clazz.newMeth(C$, 'check$java_awt_image_ImageObserver',  function (iw) {
if (this.src != null ) {
this.src.checkSecurity$O$Z(null, false);
}if ((this.availinfo & (96)) == 0) {
this.addWatcher$java_awt_image_ImageObserver(iw);
}return this.availinfo;
});

Clazz.newMeth(C$, 'drawToBufImage$java_awt_Graphics$sun_awt_image_ToolkitImage$I$I$java_awt_Color$java_awt_image_ImageObserver',  function (g, img, x, y, bg, iw) {
if (this.src != null ) {
this.src.checkSecurity$O$Z(null, false);
}if ((this.availinfo & 64) != 0) {
if (iw != null ) {
iw.imageUpdate$java_awt_Image$I$I$I$I$I(this.image, 192, -1, -1, -1, -1);
}return false;
}var done=((this.availinfo & 32) != 0);
var abort=((this.availinfo & 128) != 0);
if (!done && !abort ) {
this.addWatcher$java_awt_image_ImageObserver(iw);
this.startProduction$();
done=((this.availinfo & 32) != 0);
}if (done || (0 != (this.availinfo & 16)) ) {
g.drawImage$java_awt_Image$I$I$java_awt_Color$java_awt_image_ImageObserver(this.bimage, x, y, bg, null);
}return done;
});

Clazz.newMeth(C$, 'drawToBufImage$java_awt_Graphics$sun_awt_image_ToolkitImage$I$I$I$I$java_awt_Color$java_awt_image_ImageObserver',  function (g, img, x, y, w, h, bg, iw) {
if (this.src != null ) {
this.src.checkSecurity$O$Z(null, false);
}if ((this.availinfo & 64) != 0) {
if (iw != null ) {
iw.imageUpdate$java_awt_Image$I$I$I$I$I(this.image, 192, -1, -1, -1, -1);
}return false;
}var done=((this.availinfo & 32) != 0);
var abort=((this.availinfo & 128) != 0);
if (!done && !abort ) {
this.addWatcher$java_awt_image_ImageObserver(iw);
this.startProduction$();
done=((this.availinfo & 32) != 0);
}if (done || (0 != (this.availinfo & 16)) ) {
g.drawImage$java_awt_Image$I$I$I$I$java_awt_Color$java_awt_image_ImageObserver(this.bimage, x, y, w, h, bg, null);
}return done;
});

Clazz.newMeth(C$, 'drawToBufImage$java_awt_Graphics$sun_awt_image_ToolkitImage$I$I$I$I$I$I$I$I$java_awt_Color$java_awt_image_ImageObserver',  function (g, img, dx1, dy1, dx2, dy2, sx1, sy1, sx2, sy2, bg, iw) {
if (this.src != null ) {
this.src.checkSecurity$O$Z(null, false);
}if ((this.availinfo & 64) != 0) {
if (iw != null ) {
iw.imageUpdate$java_awt_Image$I$I$I$I$I(this.image, 192, -1, -1, -1, -1);
}return false;
}var done=((this.availinfo & 32) != 0);
var abort=((this.availinfo & 128) != 0);
if (!done && !abort ) {
this.addWatcher$java_awt_image_ImageObserver(iw);
this.startProduction$();
done=((this.availinfo & 32) != 0);
}if (done || (0 != (this.availinfo & 16)) ) {
g.drawImage$java_awt_Image$I$I$I$I$I$I$I$I$java_awt_Color$java_awt_image_ImageObserver(this.bimage, dx1, dy1, dx2, dy2, sx1, sy1, sx2, sy2, bg, null);
}return done;
});

Clazz.newMeth(C$, 'drawToBufImage$java_awt_Graphics$sun_awt_image_ToolkitImage$java_awt_geom_AffineTransform$java_awt_image_ImageObserver',  function (g, img, xform, iw) {
var g2=g;
if (this.src != null ) {
this.src.checkSecurity$O$Z(null, false);
}if ((this.availinfo & 64) != 0) {
if (iw != null ) {
iw.imageUpdate$java_awt_Image$I$I$I$I$I(this.image, 192, -1, -1, -1, -1);
}return false;
}var done=((this.availinfo & 32) != 0);
var abort=((this.availinfo & 128) != 0);
if (!done && !abort ) {
this.addWatcher$java_awt_image_ImageObserver(iw);
this.startProduction$();
done=((this.availinfo & 32) != 0);
}if (done || (0 != (this.availinfo & 16)) ) {
g2.drawImage$java_awt_Image$java_awt_geom_AffineTransform$java_awt_image_ImageObserver(this.bimage, xform, null);
}return done;
});

Clazz.newMeth(C$, 'abort$',  function () {
this.image.getSource$().removeConsumer$java_awt_image_ImageConsumer(this);
this.consuming=false;
this.newbits=null;
this.bimage=null;
this.biRaster=null;
this.cmodel=null;
this.srcLUT=null;
this.isDefaultBI=false;
this.isSameCM=false;
this.newInfo$java_awt_Image$I$I$I$I$I(this.image, 128, -1, -1, -1, -1);
this.availinfo&=~(120);
});

Clazz.newMeth(C$, 'dispose$',  function () {
this.image.getSource$().removeConsumer$java_awt_image_ImageConsumer(this);
this.consuming=false;
this.newbits=null;
this.availinfo&=~(56);
});

Clazz.newMeth(C$, 'setAccelerationPriority$F',  function (priority) {
if (this.bimage != null ) {
this.bimage.setAccelerationPriority$F(priority);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
