(function(){var P$=Clazz.newPackage("java.awt.image"),p$1={},I$=[[0,'java.util.Vector','java.util.Hashtable','java.awt.image.ColorModel','java.awt.image.BufferedImage']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MemoryImageSource", null, null, 'java.awt.image.ImageProducer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.theConsumers=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['animating','fullbuffers'],'I',['width','height','pixeloffset','pixelscan'],'O',['model','java.awt.image.ColorModel','pixels','java.lang.Object','properties','java.util.Hashtable','theConsumers','java.util.Vector']]]

Clazz.newMeth(C$, 'c$$I$I$java_awt_image_ColorModel$BA$I$I',  function (w, h, cm, pix, off, scan) {
;C$.$init$.apply(this);
p$1.initialize$I$I$java_awt_image_ColorModel$O$I$I$java_util_Hashtable.apply(this, [w, h, cm, pix, off, scan, null]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$java_awt_image_ColorModel$BA$I$I$java_util_Hashtable',  function (w, h, cm, pix, off, scan, props) {
;C$.$init$.apply(this);
p$1.initialize$I$I$java_awt_image_ColorModel$O$I$I$java_util_Hashtable.apply(this, [w, h, cm, pix, off, scan, props]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$java_awt_image_ColorModel$IA$I$I',  function (w, h, cm, pix, off, scan) {
;C$.$init$.apply(this);
p$1.initialize$I$I$java_awt_image_ColorModel$O$I$I$java_util_Hashtable.apply(this, [w, h, cm, pix, off, scan, null]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$java_awt_image_ColorModel$IA$I$I$java_util_Hashtable',  function (w, h, cm, pix, off, scan, props) {
;C$.$init$.apply(this);
p$1.initialize$I$I$java_awt_image_ColorModel$O$I$I$java_util_Hashtable.apply(this, [w, h, cm, pix, off, scan, props]);
}, 1);

Clazz.newMeth(C$, 'initialize$I$I$java_awt_image_ColorModel$O$I$I$java_util_Hashtable',  function (w, h, cm, pix, off, scan, props) {
this.width=w;
this.height=h;
this.model=cm;
this.pixels=pix;
this.pixeloffset=off;
this.pixelscan=scan;
if (props == null ) {
props=Clazz.new_($I$(2,1));
}this.properties=props;
}, p$1);

Clazz.newMeth(C$, 'c$$I$I$IA$I$I',  function (w, h, pix, off, scan) {
;C$.$init$.apply(this);
p$1.initialize$I$I$java_awt_image_ColorModel$O$I$I$java_util_Hashtable.apply(this, [w, h, $I$(3).getRGBdefault$(), pix, off, scan, null]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$IA$I$I$java_util_Hashtable',  function (w, h, pix, off, scan, props) {
;C$.$init$.apply(this);
p$1.initialize$I$I$java_awt_image_ColorModel$O$I$I$java_util_Hashtable.apply(this, [w, h, $I$(3).getRGBdefault$(), pix, off, scan, props]);
}, 1);

Clazz.newMeth(C$, 'addConsumer$java_awt_image_ImageConsumer',  function (ic) {
if (this.theConsumers.contains$O(ic)) {
return;
}this.theConsumers.addElement$O(ic);
try {
p$1.initConsumer$java_awt_image_ImageConsumer.apply(this, [ic]);
p$1.sendPixels$java_awt_image_ImageConsumer$I$I$I$I.apply(this, [ic, 0, 0, this.width, this.height]);
if (this.isConsumer$java_awt_image_ImageConsumer(ic)) {
ic.imageComplete$I(this.animating ? 2 : 3);
if (!this.animating && this.isConsumer$java_awt_image_ImageConsumer(ic) ) {
ic.imageComplete$I(1);
this.removeConsumer$java_awt_image_ImageConsumer(ic);
}}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (this.isConsumer$java_awt_image_ImageConsumer(ic)) {
ic.imageComplete$I(1);
}} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'isConsumer$java_awt_image_ImageConsumer',  function (ic) {
return this.theConsumers.contains$O(ic);
});

Clazz.newMeth(C$, 'removeConsumer$java_awt_image_ImageConsumer',  function (ic) {
this.theConsumers.removeElement$O(ic);
});

Clazz.newMeth(C$, 'startProduction$java_awt_image_ImageConsumer',  function (ic) {
this.addConsumer$java_awt_image_ImageConsumer(ic);
});

Clazz.newMeth(C$, 'requestTopDownLeftRightResend$java_awt_image_ImageConsumer',  function (ic) {
});

Clazz.newMeth(C$, 'setAnimated$Z',  function (animated) {
this.animating=animated;
if (!this.animating) {
var enum_=this.theConsumers.elements$();
while (enum_.hasMoreElements$()){
var ic=enum_.nextElement$();
ic.imageComplete$I(3);
if (this.isConsumer$java_awt_image_ImageConsumer(ic)) {
ic.imageComplete$I(1);
}}
this.theConsumers.removeAllElements$();
}});

Clazz.newMeth(C$, 'setFullBufferUpdates$Z',  function (fullbuffers) {
if (this.fullbuffers == fullbuffers ) {
return;
}this.fullbuffers=fullbuffers;
if (this.animating) {
var enum_=this.theConsumers.elements$();
while (enum_.hasMoreElements$()){
var ic=enum_.nextElement$();
ic.setHints$I(fullbuffers ? (6) : 1);
}
}});

Clazz.newMeth(C$, 'newPixels$',  function () {
this.newPixels$I$I$I$I$Z(0, 0, this.width, this.height, true);
});

Clazz.newMeth(C$, 'newPixels$I$I$I$I',  function (x, y, w, h) {
this.newPixels$I$I$I$I$Z(x, y, w, h, true);
});

Clazz.newMeth(C$, 'newPixels$I$I$I$I$Z',  function (x, y, w, h, framenotify) {
$I$(4).秘newPixelsFromMemorySource$O(this.pixels);
if (this.animating) {
if (this.fullbuffers) {
x=y=0;
w=this.width;
h=this.height;
} else {
if (x < 0) {
w+=x;
x=0;
}if (x + w > this.width) {
w=this.width - x;
}if (y < 0) {
h+=y;
y=0;
}if (y + h > this.height) {
h=this.height - y;
}}if ((w <= 0 || h <= 0 ) && !framenotify ) {
return;
}var enum_=this.theConsumers.elements$();
while (enum_.hasMoreElements$()){
var ic=enum_.nextElement$();
if (w > 0 && h > 0 ) {
p$1.sendPixels$java_awt_image_ImageConsumer$I$I$I$I.apply(this, [ic, x, y, w, h]);
}if (framenotify && this.isConsumer$java_awt_image_ImageConsumer(ic) ) {
ic.imageComplete$I(2);
}}
}});

Clazz.newMeth(C$, 'newPixels$BA$java_awt_image_ColorModel$I$I',  function (newpix, newmodel, offset, scansize) {
this.pixels=newpix;
this.model=newmodel;
this.pixeloffset=offset;
this.pixelscan=scansize;
this.newPixels$();
});

Clazz.newMeth(C$, 'newPixels$IA$java_awt_image_ColorModel$I$I',  function (newpix, newmodel, offset, scansize) {
this.pixels=newpix;
this.model=newmodel;
this.pixeloffset=offset;
this.pixelscan=scansize;
this.newPixels$();
});

Clazz.newMeth(C$, 'initConsumer$java_awt_image_ImageConsumer',  function (ic) {
if (this.isConsumer$java_awt_image_ImageConsumer(ic)) {
ic.setDimensions$I$I(this.width, this.height);
}if (this.isConsumer$java_awt_image_ImageConsumer(ic)) {
ic.setProperties$java_util_Hashtable(this.properties);
}if (this.isConsumer$java_awt_image_ImageConsumer(ic)) {
ic.setColorModel$java_awt_image_ColorModel(this.model);
}if (this.isConsumer$java_awt_image_ImageConsumer(ic)) {
ic.setHints$I(this.animating ? (this.fullbuffers ? (6) : 1) : (30));
}}, p$1);

Clazz.newMeth(C$, 'sendPixels$java_awt_image_ImageConsumer$I$I$I$I',  function (ic, x, y, w, h) {
var off=this.pixeloffset + this.pixelscan * y + x;
if (this.isConsumer$java_awt_image_ImageConsumer(ic)) {
if (Clazz.instanceOf(this.pixels, Clazz.array(Byte.TYPE, -1))) {
ic.setPixels$I$I$I$I$java_awt_image_ColorModel$BA$I$I(x, y, w, h, this.model, this.pixels, off, this.pixelscan);
} else {
ic.setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I(x, y, w, h, this.model, this.pixels, off, this.pixelscan);
}}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
