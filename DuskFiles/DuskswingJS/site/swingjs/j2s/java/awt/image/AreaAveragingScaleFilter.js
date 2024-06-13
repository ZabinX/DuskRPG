(function(){var P$=Clazz.newPackage("java.awt.image"),p$1={},I$=[[0,'java.awt.image.ColorModel']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AreaAveragingScaleFilter", null, 'java.awt.image.ReplicateScaleFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['passthrough'],'I',['savedy','savedyrem'],'O',['reds','float[]','+greens','+blues','+alphas']]
,['O',['rgbmodel','java.awt.image.ColorModel']]]

Clazz.newMeth(C$, 'c$$I$I',  function (width, height) {
;C$.superclazz.c$$I$I.apply(this,[width, height]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setHints$I',  function (hints) {
this.passthrough=((hints & 6) != 6);
C$.superclazz.prototype.setHints$I.apply(this, [hints]);
});

Clazz.newMeth(C$, 'makeAccumBuffers',  function () {
this.reds=Clazz.array(Float.TYPE, [this.destWidth]);
this.greens=Clazz.array(Float.TYPE, [this.destWidth]);
this.blues=Clazz.array(Float.TYPE, [this.destWidth]);
this.alphas=Clazz.array(Float.TYPE, [this.destWidth]);
}, p$1);

Clazz.newMeth(C$, 'calcRow',  function () {
var origmult=(this.srcWidth) * this.srcHeight;
if (this.outpixbuf == null  || !(Clazz.instanceOf(this.outpixbuf, Clazz.array(Integer.TYPE, -1))) ) {
this.outpixbuf=Clazz.array(Integer.TYPE, [this.destWidth]);
}var outpix=this.outpixbuf;
for (var x=0; x < this.destWidth; x++) {
var mult=origmult;
var a=Math.round(this.alphas[x] / mult);
if (a <= 0) {
a=0;
} else if (a >= 255) {
a=255;
} else {
mult=this.alphas[x] / 255;
}var r=Math.round(this.reds[x] / mult);
var g=Math.round(this.greens[x] / mult);
var b=Math.round(this.blues[x] / mult);
if (r < 0) {
r=0;
} else if (r > 255) {
r=255;
}if (g < 0) {
g=0;
} else if (g > 255) {
g=255;
}if (b < 0) {
b=0;
} else if (b > 255) {
b=255;
}outpix[x]=(a << 24 | r << 16 | g << 8 | b);
}
return outpix;
}, p$1);

Clazz.newMeth(C$, 'accumPixels$I$I$I$I$java_awt_image_ColorModel$O$I$I',  function (x, y, w, h, model, pixels, off, scansize) {
if (this.reds == null ) {
p$1.makeAccumBuffers.apply(this, []);
}var sy=y;
var syrem=this.destHeight;
var dy;
var dyrem;
if (sy == 0) {
dy=0;
dyrem=0;
} else {
dy=this.savedy;
dyrem=this.savedyrem;
}while (sy < y + h){
var amty;
if (dyrem == 0) {
for (var i=0; i < this.destWidth; i++) {
this.alphas[i]=this.reds[i]=this.greens[i]=this.blues[i]=0.0;
}
dyrem=this.srcHeight;
}if (syrem < dyrem) {
amty=syrem;
} else {
amty=dyrem;
}var sx=0;
var dx=0;
var sxrem=0;
var dxrem=this.srcWidth;
var a=0.0;
var r=0.0;
var g=0.0;
var b=0.0;
while (sx < w){
if (sxrem == 0) {
sxrem=this.destWidth;
var rgb;
if (Clazz.instanceOf(pixels, Clazz.array(Byte.TYPE, -1))) {
rgb=(pixels)[off + sx] & 255;
} else {
rgb=(pixels)[off + sx];
}rgb=model.getRGB$I(rgb);
a=rgb >>> 24;
r=(rgb >> 16) & 255;
g=(rgb >> 8) & 255;
b=rgb & 255;
if (a != 255.0 ) {
var ascale=a / 255.0;
r*=ascale;
g*=ascale;
b*=ascale;
}}var amtx;
if (sxrem < dxrem) {
amtx=sxrem;
} else {
amtx=dxrem;
}var mult=(amtx) * amty;
this.alphas[dx]+=mult * a;
this.reds[dx]+=mult * r;
this.greens[dx]+=mult * g;
this.blues[dx]+=mult * b;
if ((sxrem-=amtx) == 0) {
++sx;
}if ((dxrem-=amtx) == 0) {
++dx;
dxrem=this.srcWidth;
}}
if ((dyrem-=amty) == 0) {
var outpix=p$1.calcRow.apply(this, []);
do {
this.consumer.setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I(0, dy, this.destWidth, 1, C$.rgbmodel, outpix, 0, this.destWidth);
++dy;
} while ((syrem-=amty) >= amty && amty == this.srcHeight );
} else {
syrem-=amty;
}if (syrem == 0) {
syrem=this.destHeight;
++sy;
off+=scansize;
}}
this.savedyrem=dyrem;
this.savedy=dy;
}, p$1);

Clazz.newMeth(C$, 'setPixels$I$I$I$I$java_awt_image_ColorModel$BA$I$I',  function (x, y, w, h, model, pixels, off, scansize) {
if (this.passthrough) {
C$.superclazz.prototype.setPixels$I$I$I$I$java_awt_image_ColorModel$BA$I$I.apply(this, [x, y, w, h, model, pixels, off, scansize]);
} else {
p$1.accumPixels$I$I$I$I$java_awt_image_ColorModel$O$I$I.apply(this, [x, y, w, h, model, pixels, off, scansize]);
}});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I',  function (x, y, w, h, model, pixels, off, scansize) {
if (this.passthrough) {
C$.superclazz.prototype.setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I.apply(this, [x, y, w, h, model, pixels, off, scansize]);
} else {
p$1.accumPixels$I$I$I$I$java_awt_image_ColorModel$O$I$I.apply(this, [x, y, w, h, model, pixels, off, scansize]);
}});

C$.$static$=function(){C$.$static$=0;
C$.rgbmodel=$I$(1).getRGBdefault$();
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:11 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
