(function(){var P$=Clazz.newPackage("java.awt.image"),p$1={},I$=[[0,'java.awt.image.ColorModel','java.awt.image.DataBufferByte','java.awt.image.Raster','java.awt.image.BufferedImage','InternalError','java.awt.image.DataBufferInt']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BufferedImageFilter", null, 'java.awt.image.ImageFilter', 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['width','height'],'O',['bufferedImageOp','java.awt.image.BufferedImageOp','model','java.awt.image.ColorModel','bytePixels','byte[]','intPixels','int[]']]]

Clazz.newMeth(C$, 'c$$java_awt_image_BufferedImageOp',  function (op) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
if (op == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Operation cannot be null"]);
}this.bufferedImageOp=op;
}, 1);

Clazz.newMeth(C$, 'getBufferedImageOp$',  function () {
return this.bufferedImageOp;
});

Clazz.newMeth(C$, 'setDimensions$I$I',  function (width, height) {
if (width <= 0 || height <= 0 ) {
this.imageComplete$I(3);
return;
}this.width=width;
this.height=height;
});

Clazz.newMeth(C$, 'setColorModel$java_awt_image_ColorModel',  function (model) {
this.model=model;
});

Clazz.newMeth(C$, 'convertToRGB',  function () {
var size=this.width * this.height;
var newpixels=Clazz.array(Integer.TYPE, [size]);
if (this.bytePixels != null ) {
for (var i=0; i < size; i++) {
newpixels[i]=this.model.getRGB$I(this.bytePixels[i] & 255);
}
} else if (this.intPixels != null ) {
for (var i=0; i < size; i++) {
newpixels[i]=this.model.getRGB$I(this.intPixels[i]);
}
}this.bytePixels=null;
this.intPixels=newpixels;
this.model=$I$(1).getRGBdefault$();
}, p$1);

Clazz.newMeth(C$, 'setPixels$I$I$I$I$java_awt_image_ColorModel$BA$I$I',  function (x, y, w, h, model, pixels, off, scansize) {
if (w < 0 || h < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Width (" + w + ") and height (" + h + ") must be > 0" ]);
}if (w == 0 || h == 0 ) {
return;
}if (y < 0) {
var diff=-y;
if (diff >= h) {
return;
}off+=scansize * diff;
y+=diff;
h-=diff;
}if (y + h > this.height) {
h=this.height - y;
if (h <= 0) {
return;
}}if (x < 0) {
var diff=-x;
if (diff >= w) {
return;
}off+=diff;
x+=diff;
w-=diff;
}if (x + w > this.width) {
w=this.width - x;
if (w <= 0) {
return;
}}var dstPtr=y * this.width + x;
if (this.intPixels == null ) {
if (this.bytePixels == null ) {
this.bytePixels=Clazz.array(Byte.TYPE, [this.width * this.height]);
this.model=model;
} else if (this.model !== model ) {
p$1.convertToRGB.apply(this, []);
}if (this.bytePixels != null ) {
for (var sh=h; sh > 0; sh--) {
System.arraycopy$O$I$O$I$I(pixels, off, this.bytePixels, dstPtr, w);
off+=scansize;
dstPtr+=this.width;
}
}}if (this.intPixels != null ) {
var dstRem=this.width - w;
var srcRem=scansize - w;
for (var sh=h; sh > 0; sh--) {
for (var sw=w; sw > 0; sw--) {
this.intPixels[dstPtr++]=model.getRGB$I(pixels[off++] & 255);
}
off+=srcRem;
dstPtr+=dstRem;
}
}});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I',  function (x, y, w, h, model, pixels, off, scansize) {
if (w < 0 || h < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Width (" + w + ") and height (" + h + ") must be > 0" ]);
}if (w == 0 || h == 0 ) {
return;
}if (y < 0) {
var diff=-y;
if (diff >= h) {
return;
}off+=scansize * diff;
y+=diff;
h-=diff;
}if (y + h > this.height) {
h=this.height - y;
if (h <= 0) {
return;
}}if (x < 0) {
var diff=-x;
if (diff >= w) {
return;
}off+=diff;
x+=diff;
w-=diff;
}if (x + w > this.width) {
w=this.width - x;
if (w <= 0) {
return;
}}if (this.intPixels == null ) {
if (this.bytePixels == null ) {
this.intPixels=Clazz.array(Integer.TYPE, [this.width * this.height]);
this.model=model;
} else {
p$1.convertToRGB.apply(this, []);
}}var dstPtr=y * this.width + x;
if (this.model === model ) {
for (var sh=h; sh > 0; sh--) {
System.arraycopy$O$I$O$I$I(pixels, off, this.intPixels, dstPtr, w);
off+=scansize;
dstPtr+=this.width;
}
} else {
if (this.model !== $I$(1).getRGBdefault$() ) {
p$1.convertToRGB.apply(this, []);
}var dstRem=this.width - w;
var srcRem=scansize - w;
for (var sh=h; sh > 0; sh--) {
for (var sw=w; sw > 0; sw--) {
this.intPixels[dstPtr++]=model.getRGB$I(pixels[off++]);
}
off+=srcRem;
dstPtr+=dstRem;
}
}});

Clazz.newMeth(C$, 'imageComplete$I',  function (status) {
var wr;
switch (status) {
case 1:
case 4:
this.model=null;
this.width=-1;
this.height=-1;
this.intPixels=null;
this.bytePixels=null;
break;
case 2:
case 3:
if (this.width <= 0 || this.height <= 0 ) break;
if (Clazz.instanceOf(this.model, "java.awt.image.DirectColorModel")) {
if (this.intPixels == null ) break;
wr=p$1.createDCMraster.apply(this, []);
} else if (Clazz.instanceOf(this.model, "java.awt.image.IndexColorModel")) {
var bandOffsets=Clazz.array(Integer.TYPE, -1, [0]);
if (this.bytePixels == null ) break;
var db=Clazz.new_($I$(2,1).c$$BA$I,[this.bytePixels, this.width * this.height]);
wr=$I$(3).createInterleavedRaster$java_awt_image_DataBuffer$I$I$I$I$IA$java_awt_Point(db, this.width, this.height, this.width, 1, bandOffsets, null);
} else {
p$1.convertToRGB.apply(this, []);
if (this.intPixels == null ) break;
wr=p$1.createDCMraster.apply(this, []);
}var bi=Clazz.new_([this.model, wr, this.model.isAlphaPremultiplied$(), null],$I$(4,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable);
bi=this.bufferedImageOp.filter$java_awt_image_BufferedImage$java_awt_image_BufferedImage(bi, null);
var r=bi.getRaster$();
var cm=bi.getColorModel$();
var w=r.getWidth$();
var h=r.getHeight$();
this.consumer.setDimensions$I$I(w, h);
this.consumer.setColorModel$java_awt_image_ColorModel(cm);
if (Clazz.instanceOf(cm, "java.awt.image.DirectColorModel")) {
var db=r.getDataBuffer$();
this.consumer.setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I(0, 0, w, h, cm, db.getData$(), 0, w);
} else if (Clazz.instanceOf(cm, "java.awt.image.IndexColorModel")) {
var db=r.getDataBuffer$();
this.consumer.setPixels$I$I$I$I$java_awt_image_ColorModel$BA$I$I(0, 0, w, h, cm, db.getData$(), 0, w);
} else {
throw Clazz.new_($I$(5,1).c$$S,["Unknown color model " + cm]);
}break;
}
this.consumer.imageComplete$I(status);
});

Clazz.newMeth(C$, 'createDCMraster',  function () {
var wr;
var dcm=this.model;
var hasAlpha=this.model.hasAlpha$();
var bandMasks=Clazz.array(Integer.TYPE, [3 + (hasAlpha ? 1 : 0)]);
bandMasks[0]=dcm.getRedMask$();
bandMasks[1]=dcm.getGreenMask$();
bandMasks[2]=dcm.getBlueMask$();
if (hasAlpha) {
bandMasks[3]=dcm.getAlphaMask$();
}var db=Clazz.new_($I$(6,1).c$$IA$I,[this.intPixels, this.width * this.height]);
wr=$I$(3).createPackedRaster$java_awt_image_DataBuffer$I$I$I$IA$java_awt_Point(db, this.width, this.height, this.width, bandMasks, null);
return wr;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:11 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
