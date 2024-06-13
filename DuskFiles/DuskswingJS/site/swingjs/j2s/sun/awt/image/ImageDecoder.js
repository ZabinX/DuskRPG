(function(){var P$=Clazz.newPackage("sun.awt.image"),I$=[[0,'Thread','sun.awt.image.ImageConsumerQueue']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageDecoder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['aborted','finished'],'O',['source','sun.awt.image.InputStreamImageSource','input','java.io.InputStream','feeder','Thread','queue','sun.awt.image.ImageConsumerQueue','next','sun.awt.image.ImageDecoder']]]

Clazz.newMeth(C$, 'c$$sun_awt_image_InputStreamImageSource$java_io_InputStream',  function (src, is) {
;C$.$init$.apply(this);
this.source=src;
this.input=is;
this.feeder=$I$(1).currentThread$();
}, 1);

Clazz.newMeth(C$, 'isConsumer$java_awt_image_ImageConsumer',  function (ic) {
return $I$(2).isConsumer$sun_awt_image_ImageConsumerQueue$java_awt_image_ImageConsumer(this.queue, ic);
});

Clazz.newMeth(C$, 'removeConsumer$java_awt_image_ImageConsumer',  function (ic) {
this.queue=$I$(2).removeConsumer$sun_awt_image_ImageConsumerQueue$java_awt_image_ImageConsumer$Z(this.queue, ic, false);
if (!this.finished && this.queue == null  ) {
this.abort$();
}});

Clazz.newMeth(C$, 'nextConsumer$sun_awt_image_ImageConsumerQueue',  function (cq) {
{
if (this.aborted) {
return null;
}cq=((cq == null ) ? this.queue : cq.next);
while (cq != null ){
if (cq.interested) {
return cq;
}cq=cq.next;
}
}return null;
});

Clazz.newMeth(C$, 'setDimensions$I$I',  function (w, h) {
var cq=null;
var count=0;
while ((cq=this.nextConsumer$sun_awt_image_ImageConsumerQueue(cq)) != null ){
cq.consumer.setDimensions$I$I(w, h);
++count;
}
return count;
});

Clazz.newMeth(C$, 'setProperties$java_util_Hashtable',  function (props) {
var cq=null;
var count=0;
while ((cq=this.nextConsumer$sun_awt_image_ImageConsumerQueue(cq)) != null ){
cq.consumer.setProperties$java_util_Hashtable(props);
++count;
}
return count;
});

Clazz.newMeth(C$, 'setColorModel$java_awt_image_ColorModel',  function (model) {
var cq=null;
var count=0;
while ((cq=this.nextConsumer$sun_awt_image_ImageConsumerQueue(cq)) != null ){
cq.consumer.setColorModel$java_awt_image_ColorModel(model);
++count;
}
return count;
});

Clazz.newMeth(C$, 'setHints$I',  function (hints) {
var cq=null;
var count=0;
while ((cq=this.nextConsumer$sun_awt_image_ImageConsumerQueue(cq)) != null ){
cq.consumer.setHints$I(hints);
++count;
}
return count;
});

Clazz.newMeth(C$, 'headerComplete$',  function () {
this.feeder.setPriority$I(3);
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$java_awt_image_ColorModel$BA$I$I',  function (x, y, w, h, model, pix, off, scansize) {
this.source.latchConsumers$sun_awt_image_ImageDecoder(this);
var cq=null;
var count=0;
while ((cq=this.nextConsumer$sun_awt_image_ImageConsumerQueue(cq)) != null ){
cq.consumer.setPixels$I$I$I$I$java_awt_image_ColorModel$BA$I$I(x, y, w, h, model, pix, off, scansize);
++count;
}
return count;
});

Clazz.newMeth(C$, 'setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I',  function (x, y, w, h, model, pix, off, scansize) {
this.source.latchConsumers$sun_awt_image_ImageDecoder(this);
var cq=null;
var count=0;
while ((cq=this.nextConsumer$sun_awt_image_ImageConsumerQueue(cq)) != null ){
cq.consumer.setPixels$I$I$I$I$java_awt_image_ColorModel$IA$I$I(x, y, w, h, model, pix, off, scansize);
++count;
}
return count;
});

Clazz.newMeth(C$, 'imageComplete$I$Z',  function (status, done) {
this.source.latchConsumers$sun_awt_image_ImageDecoder(this);
if (done) {
this.finished=true;
this.source.doneDecoding$sun_awt_image_ImageDecoder(this);
}var cq=null;
var count=0;
while ((cq=this.nextConsumer$sun_awt_image_ImageConsumerQueue(cq)) != null ){
cq.consumer.imageComplete$I(status);
++count;
}
return count;
});

Clazz.newMeth(C$, 'abort$',  function () {
this.aborted=true;
this.source.doneDecoding$sun_awt_image_ImageDecoder(this);
this.close$();
this.feeder.interrupt$();
});

Clazz.newMeth(C$, 'close$',  function () {
if (this.input != null ) {
try {
this.input.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
