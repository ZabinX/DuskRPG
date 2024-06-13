(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[[0,'java.awt.image.ColorModel','java.awt.image.IndexColorModel']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RGBImageFilter", null, 'java.awt.image.ImageFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['canFilterIndexColorModel'],'O',['origmodel','java.awt.image.ColorModel','+newmodel']]]

Clazz.newMeth(C$, 'setColorModel$java_awt_image_ColorModel',  function (model) {
if (this.canFilterIndexColorModel && (Clazz.instanceOf(model, "java.awt.image.IndexColorModel")) ) {
var newcm=this.filterIndexColorModel$java_awt_image_IndexColorModel(model);
this.substituteColorModel$java_awt_image_ColorModel$java_awt_image_ColorModel(model, newcm);
this.consumer.setColorModel$java_awt_image_ColorModel(newcm);
} else {
this.consumer.setColorModel$java_awt_image_ColorModel($I$(1).getRGBdefault$());
}});

Clazz.newMeth(C$, 'substituteColorModel$java_awt_image_ColorModel$java_awt_image_ColorModel',  function (oldcm, newcm) {
this.origmodel=oldcm;
this.newmodel=newcm;
});

Clazz.newMeth(C$, 'filterIndexColorModel$java_awt_image_IndexColorModel',  function (icm) {
var mapsize=icm.getMapSize$();
var r=Clazz.array(Byte.TYPE, [mapsize]);
var g=Clazz.array(Byte.TYPE, [mapsize]);
var b=Clazz.array(Byte.TYPE, [mapsize]);
var a=Clazz.array(Byte.TYPE, [mapsize]);
icm.getReds$BA(r);
icm.getGreens$BA(g);
icm.getBlues$BA(b);
icm.getAlphas$BA(a);
var trans=icm.getTransparentPixel$();
var needalpha=false;
for (var i=0; i < mapsize; i++) {
var rgb=this.filterRGB$I$I$I(-1, -1, icm.getRGB$I(i));
a[i]=((rgb >> 24)|0);
if (a[i] != (($b$[0] = 255, $b$[0])) && i != trans ) {
needalpha=true;
}r[i]=((rgb >> 16)|0);
g[i]=((rgb >> 8)|0);
b[i]=((rgb >> 0)|0);
}
if (needalpha) {
return Clazz.new_([icm.getPixelSize$(), mapsize, r, g, b, a],$I$(2,1).c$$I$I$BA$BA$BA$BA);
} else {
return Clazz.new_([icm.getPixelSize$(), mapsize, r, g, b, trans],$I$(2,1).c$$I$I$BA$BA$BA$I);
}});

Clazz.newMeth(C$, 'filterRGBPixels$I$I$I$I$IA$I$I',  function (x, y, w, h, pixels, off, scansize) {
var index=off;
for (var cy=0; cy < h; cy++) {
for (var cx=0; cx < w; cx++) {
pixels[index]=this.filterRGB$I$I$I(x + cx, y + cy, pixels[index]);
++index;
}
index+=scansize - w;
}
this.consumer.setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I(x, y, w, h, $I$(1).getRGBdefault$(), pixels, off, scansize);
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$java_awt_image_ColorModel$BA$I$I',  function (x, y, w, h, model, pixels, off, scansize) {
if (model === this.origmodel ) {
this.consumer.setPixels$I$I$I$I$java_awt_image_ColorModel$BA$I$I(x, y, w, h, this.newmodel, pixels, off, scansize);
} else {
var filteredpixels=Clazz.array(Integer.TYPE, [w]);
var index=off;
for (var cy=0; cy < h; cy++) {
for (var cx=0; cx < w; cx++) {
filteredpixels[cx]=model.getRGB$I((pixels[index] & 255));
++index;
}
index+=scansize - w;
this.filterRGBPixels$I$I$I$I$IA$I$I(x, y + cy, w, 1, filteredpixels, 0, w);
}
}});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I',  function (x, y, w, h, model, pixels, off, scansize) {
if (model === this.origmodel ) {
this.consumer.setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I(x, y, w, h, this.newmodel, pixels, off, scansize);
} else {
var filteredpixels=Clazz.array(Integer.TYPE, [w]);
var index=off;
for (var cy=0; cy < h; cy++) {
for (var cx=0; cx < w; cx++) {
filteredpixels[cx]=model.getRGB$I(pixels[index]);
++index;
}
index+=scansize - w;
this.filterRGBPixels$I$I$I$I$IA$I$I(x, y + cy, w, 1, filteredpixels, 0, w);
}
}});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
