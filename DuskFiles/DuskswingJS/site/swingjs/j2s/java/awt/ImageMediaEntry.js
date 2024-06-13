(function(){var P$=Clazz.newPackage("java.awt"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ImageMediaEntry", null, 'java.awt.MediaEntry', ['java.awt.image.ImageObserver', 'java.io.Serializable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['width','height'],'O',['image','java.awt.Image']]]

Clazz.newMeth(C$, 'c$$java_awt_MediaTracker$java_awt_Image$I$I$I',  function (mt, img, c, w, h) {
;C$.superclazz.c$$java_awt_MediaTracker$I.apply(this,[mt, c]);C$.$init$.apply(this);
this.image=img;
this.width=w;
this.height=h;
}, 1);

Clazz.newMeth(C$, 'matches$java_awt_Image$I$I',  function (img, w, h) {
return (this.image === img  && this.width == w  && this.height == h );
});

Clazz.newMeth(C$, 'getMedia$',  function () {
return this.image;
});

Clazz.newMeth(C$, 'getStatus$Z$Z',  function (doLoad, doVerify) {
if (doVerify) {
var flags=this.tracker.target.checkImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, this.width, this.height, null);
var s=this.parseflags$I(flags);
if (s == 0) {
if ((this.status & (12)) != 0) {
this.setStatus$I(2);
}} else if (s != this.status) {
this.setStatus$I(s);
}}return C$.superclazz.prototype.getStatus$Z$Z.apply(this, [doLoad, doVerify]);
});

Clazz.newMeth(C$, 'startLoad$',  function () {
this.setStatus$I(8);
});

Clazz.newMeth(C$, 'parseflags$I',  function (infoflags) {
if ((infoflags & 64) != 0) {
return 4;
} else if ((infoflags & 128) != 0) {
return 2;
} else if ((infoflags & (48)) != 0) {
return 8;
}return 0;
});

Clazz.newMeth(C$, 'imageUpdate$java_awt_Image$I$I$I$I$I',  function (img, infoflags, x, y, w, h) {
if (this.cancelled) {
return false;
}var s=this.parseflags$I(infoflags);
if (s != 0 && s != this.status ) {
this.setStatus$I(s);
}return ((this.status & 1) != 0);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:05 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
