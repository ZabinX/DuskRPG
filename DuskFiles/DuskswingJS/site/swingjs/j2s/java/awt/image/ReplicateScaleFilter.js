(function(){var P$=Clazz.newPackage("java.awt.image"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "ReplicateScaleFilter", null, 'java.awt.image.ImageFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['srcWidth','srcHeight','destWidth','destHeight'],'O',['srcrows','int[]','+srccols','outpixbuf','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$I$I',  function (width, height) {
Clazz.super_(C$, this);
if (width == 0 || height == 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Width (" + width + ") and height (" + height + ") must be non-zero" ]);
}this.destWidth=width;
this.destHeight=height;
}, 1);

Clazz.newMeth(C$, 'setProperties$java_util_Hashtable',  function (props) {
var p=props.clone$();
var key="rescale";
var val=this.destWidth + "x" + this.destHeight ;
var o=p.get$O(key);
if (o != null  && Clazz.instanceOf(o, "java.lang.String") ) {
val=(o) + ", " + val ;
}p.put$O$O(key, val);
C$.superclazz.prototype.setProperties$java_util_Hashtable.apply(this, [p]);
});

Clazz.newMeth(C$, 'setDimensions$I$I',  function (w, h) {
this.srcWidth=w;
this.srcHeight=h;
if (this.destWidth < 0) {
if (this.destHeight < 0) {
this.destWidth=this.srcWidth;
this.destHeight=this.srcHeight;
} else {
this.destWidth=(this.srcWidth * this.destHeight/this.srcHeight|0);
}} else if (this.destHeight < 0) {
this.destHeight=(this.srcHeight * this.destWidth/this.srcWidth|0);
}this.consumer.setDimensions$I$I(this.destWidth, this.destHeight);
});

Clazz.newMeth(C$, 'calculateMaps',  function () {
this.srcrows=Clazz.array(Integer.TYPE, [this.destHeight + 1]);
for (var y=0; y <= this.destHeight; y++) {
this.srcrows[y]=((2 * y * this.srcHeight  + this.srcHeight)/(2 * this.destHeight)|0);
}
this.srccols=Clazz.array(Integer.TYPE, [this.destWidth + 1]);
for (var x=0; x <= this.destWidth; x++) {
this.srccols[x]=((2 * x * this.srcWidth  + this.srcWidth)/(2 * this.destWidth)|0);
}
}, p$1);

Clazz.newMeth(C$, 'setPixels$I$I$I$I$java_awt_image_ColorModel$BA$I$I',  function (x, y, w, h, model, pixels, off, scansize) {
if (this.srcrows == null  || this.srccols == null  ) {
p$1.calculateMaps.apply(this, []);
}var sx;
var sy;
var dx1=((2 * x * this.destWidth  + this.srcWidth - 1)/(2 * this.srcWidth)|0);
var dy1=((2 * y * this.destHeight  + this.srcHeight - 1)/(2 * this.srcHeight)|0);
var outpix;
if (this.outpixbuf != null  && Clazz.instanceOf(this.outpixbuf, Clazz.array(Byte.TYPE, -1)) ) {
outpix=this.outpixbuf;
} else {
outpix=Clazz.array(Byte.TYPE, [this.destWidth]);
this.outpixbuf=outpix;
}for (var dy=dy1; (sy=this.srcrows[dy]) < y + h; dy++) {
var srcoff=off + scansize * (sy - y);
var dx;
for (dx=dx1; (sx=this.srccols[dx]) < x + w; dx++) {
outpix[dx]=pixels[srcoff + sx - x];
}
if (dx > dx1) {
this.consumer.setPixels$I$I$I$I$java_awt_image_ColorModel$BA$I$I(dx1, dy, dx - dx1, 1, model, outpix, dx1, this.destWidth);
}}
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I',  function (x, y, w, h, model, pixels, off, scansize) {
if (this.srcrows == null  || this.srccols == null  ) {
p$1.calculateMaps.apply(this, []);
}var sx;
var sy;
var dx1=((2 * x * this.destWidth  + this.srcWidth - 1)/(2 * this.srcWidth)|0);
var dy1=((2 * y * this.destHeight  + this.srcHeight - 1)/(2 * this.srcHeight)|0);
var outpix;
if (this.outpixbuf != null  && Clazz.instanceOf(this.outpixbuf, Clazz.array(Integer.TYPE, -1)) ) {
outpix=this.outpixbuf;
} else {
outpix=Clazz.array(Integer.TYPE, [this.destWidth]);
this.outpixbuf=outpix;
}for (var dy=dy1; (sy=this.srcrows[dy]) < y + h; dy++) {
var srcoff=off + scansize * (sy - y);
var dx;
for (dx=dx1; (sx=this.srccols[dx]) < x + w; dx++) {
outpix[dx]=pixels[srcoff + sx - x];
}
if (dx > dx1) {
this.consumer.setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I(dx1, dy, dx - dx1, 1, model, outpix, dx1, this.destWidth);
}}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
