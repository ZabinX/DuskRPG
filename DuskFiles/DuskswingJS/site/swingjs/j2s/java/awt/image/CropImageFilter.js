(function(){var P$=Clazz.newPackage("java.awt.image"),p$1={},I$=[[0,'java.awt.Rectangle']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CropImageFilter", null, 'java.awt.image.ImageFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['cropX','cropY','cropW','cropH']]]

Clazz.newMeth(C$, 'c$$I$I$I$I',  function (x, y, w, h) {
Clazz.super_(C$, this);
this.cropX=x;
this.cropY=y;
this.cropW=w;
this.cropH=h;
}, 1);

Clazz.newMeth(C$, 'setProperties$java_util_Hashtable',  function (props) {
var p=props.clone$();
p.put$O$O("croprect", Clazz.new_($I$(1,1).c$$I$I$I$I,[this.cropX, this.cropY, this.cropW, this.cropH]));
C$.superclazz.prototype.setProperties$java_util_Hashtable.apply(this, [p]);
});

Clazz.newMeth(C$, 'setDimensions$I$I',  function (w, h) {
this.consumer.setDimensions$I$I(this.cropW, this.cropH);
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$java_awt_image_ColorModel$BA$I$I',  function (x, y, w, h, model, pixels, off, scansize) {
var x1=x;
if (x1 < this.cropX) {
x1=this.cropX;
}var x2=p$1.addWithoutOverflow$I$I.apply(this, [x, w]);
if (x2 > this.cropX + this.cropW) {
x2=this.cropX + this.cropW;
}var y1=y;
if (y1 < this.cropY) {
y1=this.cropY;
}var y2=p$1.addWithoutOverflow$I$I.apply(this, [y, h]);
if (y2 > this.cropY + this.cropH) {
y2=this.cropY + this.cropH;
}if (x1 >= x2 || y1 >= y2 ) {
return;
}this.consumer.setPixels$I$I$I$I$java_awt_image_ColorModel$BA$I$I(x1 - this.cropX, y1 - this.cropY, (x2 - x1), (y2 - y1), model, pixels, off + (y1 - y) * scansize + (x1 - x), scansize);
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I',  function (x, y, w, h, model, pixels, off, scansize) {
var x1=x;
if (x1 < this.cropX) {
x1=this.cropX;
}var x2=p$1.addWithoutOverflow$I$I.apply(this, [x, w]);
if (x2 > this.cropX + this.cropW) {
x2=this.cropX + this.cropW;
}var y1=y;
if (y1 < this.cropY) {
y1=this.cropY;
}var y2=p$1.addWithoutOverflow$I$I.apply(this, [y, h]);
if (y2 > this.cropY + this.cropH) {
y2=this.cropY + this.cropH;
}if (x1 >= x2 || y1 >= y2 ) {
return;
}this.consumer.setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I(x1 - this.cropX, y1 - this.cropY, (x2 - x1), (y2 - y1), model, pixels, off + (y1 - y) * scansize + (x1 - x), scansize);
});

Clazz.newMeth(C$, 'addWithoutOverflow$I$I',  function (x, w) {
var x2=x + w;
if (x > 0 && w > 0  && x2 < 0 ) {
x2=2147483647;
} else if (x < 0 && w < 0  && x2 > 0 ) {
x2=-2147483648;
}return x2;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
