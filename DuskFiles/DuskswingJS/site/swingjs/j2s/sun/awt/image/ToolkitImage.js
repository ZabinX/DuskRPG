(function(){var P$=Clazz.newPackage("sun.awt.image"),p$1={},I$=[[0,'java.awt.Image','Thread','java.util.Hashtable','sun.awt.image.ImageRepresentation','java.awt.image.ColorModel']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ToolkitImage", null, 'java.awt.Image');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.width=-1;
this.height=-1;
},1);

C$.$fields$=[['I',['width','height','availinfo'],'O',['source','java.awt.image.ImageProducer','src','sun.awt.image.InputStreamImageSource','imagerep','sun.awt.image.ImageRepresentation','properties','java.util.Hashtable']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_ImageProducer',  function (is) {
Clazz.super_(C$, this);
this.source=is;
if (Clazz.instanceOf(is, "sun.awt.image.InputStreamImageSource")) {
this.src=is;
}}, 1);

Clazz.newMeth(C$, 'getSource$',  function () {
return this.source;
});

Clazz.newMeth(C$, 'getWidth$',  function () {
if ((this.availinfo & 1) == 0) {
p$1.reconstruct$I.apply(this, [1]);
}return this.width;
});

Clazz.newMeth(C$, 'getWidth$java_awt_image_ImageObserver',  function (iw) {
if ((this.availinfo & 1) == 0) {
p$1.addWatcher$java_awt_image_ImageObserver$Z.apply(this, [iw, true]);
if ((this.availinfo & 1) == 0) {
return -1;
}}return this.width;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
if ((this.availinfo & 2) == 0) {
p$1.reconstruct$I.apply(this, [2]);
}return this.height;
});

Clazz.newMeth(C$, 'getHeight$java_awt_image_ImageObserver',  function (iw) {
if ((this.availinfo & 2) == 0) {
p$1.addWatcher$java_awt_image_ImageObserver$Z.apply(this, [iw, true]);
if ((this.availinfo & 2) == 0) {
return -1;
}}return this.height;
});

Clazz.newMeth(C$, 'getProperty$S$java_awt_image_ImageObserver',  function (name, observer) {
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["null property name is not allowed"]);
}if (this.properties == null ) {
p$1.addWatcher$java_awt_image_ImageObserver$Z.apply(this, [observer, true]);
if (this.properties == null ) {
return null;
}}var o=this.properties.get$O(name);
if (o == null ) {
o=$I$(1).UndefinedProperty;
}return o;
});

Clazz.newMeth(C$, 'hasError$',  function () {
return (this.availinfo & 64) != 0;
});

Clazz.newMeth(C$, 'check$java_awt_image_ImageObserver',  function (iw) {
if ((this.availinfo & 64) == 0 && ((~this.availinfo) & (7)) != 0 ) {
p$1.addWatcher$java_awt_image_ImageObserver$Z.apply(this, [iw, false]);
}return this.availinfo;
});

Clazz.newMeth(C$, 'preload$java_awt_image_ImageObserver',  function (iw) {
if ((this.availinfo & 32) == 0) {
p$1.addWatcher$java_awt_image_ImageObserver$Z.apply(this, [iw, true]);
}});

Clazz.newMeth(C$, 'addWatcher$java_awt_image_ImageObserver$Z',  function (iw, load) {
if ((this.availinfo & 64) != 0) {
if (iw != null ) {
iw.imageUpdate$java_awt_Image$I$I$I$I$I(this, 192, -1, -1, -1, -1);
}return;
}var ir=this.getImageRep$();
ir.addWatcher$java_awt_image_ImageObserver(iw);
if (load) {
ir.startProduction$();
}}, p$1);

Clazz.newMeth(C$, 'reconstruct$I',  function (flags) {
if ((flags & ~this.availinfo) != 0) {
if ((this.availinfo & 64) != 0) {
return;
}var ir=this.getImageRep$();
ir.startProduction$();
while ((flags & ~this.availinfo) != 0){
try {
this.wait$();
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
$I$(2).currentThread$().interrupt$();
return;
} else {
throw e;
}
}
if ((this.availinfo & 64) != 0) {
return;
}}
}}, p$1);

Clazz.newMeth(C$, 'addInfo$I',  function (newinfo) {
this.availinfo|=newinfo;
this.notifyAll$();
});

Clazz.newMeth(C$, 'setDimensions$I$I',  function (w, h) {
this.width=w;
this.height=h;
this.addInfo$I(3);
});

Clazz.newMeth(C$, 'setProperties$java_util_Hashtable',  function (props) {
if (props == null ) {
props=Clazz.new_($I$(3,1));
}this.properties=props;
this.addInfo$I(4);
});

Clazz.newMeth(C$, 'infoDone$I',  function (status) {
if (status == 1 || ((~this.availinfo) & (3)) != 0 ) {
this.addInfo$I(64);
} else if ((this.availinfo & 4) == 0) {
this.setProperties$java_util_Hashtable(null);
}});

Clazz.newMeth(C$, 'flush$',  function () {
var ir;
{
this.availinfo&=~64;
ir=this.imagerep;
this.imagerep=null;
}if (ir != null ) {
ir.abort$();
}if (this.src != null ) {
this.src.flush$();
}});

Clazz.newMeth(C$, 'makeImageRep$',  function () {
return Clazz.new_([this, $I$(5).getRGBdefault$(), false],$I$(4,1).c$$sun_awt_image_ToolkitImage$java_awt_image_ColorModel$Z);
});

Clazz.newMeth(C$, 'getImageRep$',  function () {
if (this.imagerep == null ) {
this.imagerep=this.makeImageRep$();
}return this.imagerep;
});

Clazz.newMeth(C$, 'getGraphics$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["getGraphics() not valid for images created with createImage(producer)"]);
});

Clazz.newMeth(C$, 'getColorModel$',  function () {
var imageRep=this.getImageRep$();
return imageRep.getColorModel$();
});

Clazz.newMeth(C$, 'getBufferedImage$',  function () {
var imageRep=this.getImageRep$();
return imageRep.getBufferedImage$();
});

Clazz.newMeth(C$, 'setAccelerationPriority$F',  function (priority) {
C$.superclazz.prototype.setAccelerationPriority$F.apply(this, [priority]);
var imageRep=this.getImageRep$();
imageRep.setAccelerationPriority$F(this.accelerationPriority);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
