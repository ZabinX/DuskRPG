(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ImageFilter", null, null, ['java.awt.image.ImageConsumer', 'Cloneable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['consumer','java.awt.image.ImageConsumer']]]

Clazz.newMeth(C$, 'getFilterInstance$java_awt_image_ImageConsumer',  function (ic) {
var instance=this.clone$();
instance.consumer=ic;
return instance;
});

Clazz.newMeth(C$, 'setDimensions$I$I',  function (width, height) {
this.consumer.setDimensions$I$I(width, height);
});

Clazz.newMeth(C$, 'setProperties$java_util_Hashtable',  function (props) {
var p=props.clone$();
var o=p.get$O("filters");
if (o == null ) {
p.put$O$O("filters", this.toString());
} else if (Clazz.instanceOf(o, "java.lang.String")) {
p.put$O$O("filters", (o) + this.toString());
}this.consumer.setProperties$java_util_Hashtable(p);
});

Clazz.newMeth(C$, 'setColorModel$java_awt_image_ColorModel',  function (model) {
this.consumer.setColorModel$java_awt_image_ColorModel(model);
});

Clazz.newMeth(C$, 'setHints$I',  function (hints) {
this.consumer.setHints$I(hints);
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$java_awt_image_ColorModel$BA$I$I',  function (x, y, w, h, model, pixels, off, scansize) {
this.consumer.setPixels$I$I$I$I$java_awt_image_ColorModel$BA$I$I(x, y, w, h, model, pixels, off, scansize);
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I',  function (x, y, w, h, model, pixels, off, scansize) {
this.consumer.setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I(x, y, w, h, model, pixels, off, scansize);
});

Clazz.newMeth(C$, 'imageComplete$I',  function (status) {
this.consumer.imageComplete$I(status);
});

Clazz.newMeth(C$, 'resendTopDownLeftRight$java_awt_image_ImageProducer',  function (ip) {
ip.requestTopDownLeftRightResend$java_awt_image_ImageConsumer(this);
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
