(function(){var P$=Clazz.newPackage("sun.awt.image"),p$1={},I$=[[0,'sun.awt.image.ImageConsumerQueue','sun.awt.image.ImageFetcher','Thread']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InputStreamImageSource", null, null, ['java.awt.image.ImageProducer', 'sun.awt.image.ImageFetchable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.awaitingFetch=false;
},1);

C$.$fields$=[['Z',['awaitingFetch'],'O',['consumers','sun.awt.image.ImageConsumerQueue','decoder','sun.awt.image.ImageDecoder','+decoders']]]

Clazz.newMeth(C$, 'countConsumers$sun_awt_image_ImageConsumerQueue',  function (cq) {
var i=0;
while (cq != null ){
++i;
cq=cq.next;
}
return i;
});

Clazz.newMeth(C$, 'countConsumers$',  function () {
var id=this.decoders;
var i=this.countConsumers$sun_awt_image_ImageConsumerQueue(this.consumers);
while (id != null ){
i+=this.countConsumers$sun_awt_image_ImageConsumerQueue(id.queue);
id=id.next;
}
return i;
});

Clazz.newMeth(C$, 'addConsumer$java_awt_image_ImageConsumer',  function (ic) {
this.addConsumer$java_awt_image_ImageConsumer$Z(ic, false);
});

Clazz.newMeth(C$, 'printQueue$sun_awt_image_ImageConsumerQueue$S',  function (cq, prefix) {
while (cq != null ){
System.out.println$S(prefix + cq);
cq=cq.next;
}
});

Clazz.newMeth(C$, 'printQueues$S',  function (title) {
System.out.println$S(title + "[ -----------");
this.printQueue$sun_awt_image_ImageConsumerQueue$S(this.consumers, "  ");
for (var id=this.decoders; id != null ; id=id.next) {
System.out.println$S("    " + id);
this.printQueue$sun_awt_image_ImageConsumerQueue$S(id.queue, "      ");
}
System.out.println$S("----------- ]" + title);
});

Clazz.newMeth(C$, 'addConsumer$java_awt_image_ImageConsumer$Z',  function (ic, produce) {
for (var id=this.decoders; id != null ; id=id.next) {
if (id.isConsumer$java_awt_image_ImageConsumer(ic)) {
return;
}}
var cq=this.consumers;
while (cq != null  && cq.consumer !== ic  ){
cq=cq.next;
}
if (cq == null ) {
cq=Clazz.new_($I$(1,1).c$$sun_awt_image_InputStreamImageSource$java_awt_image_ImageConsumer,[this, ic]);
cq.next=this.consumers;
this.consumers=cq;
} else {
if (!cq.secure) {
var context=null;
var security=System.getSecurityManager$();
if (security != null ) {
context=security.getSecurityContext$();
}if (cq.securityContext == null ) {
cq.securityContext=context;
} else if (!cq.securityContext.equals$O(context)) {
p$1.errorConsumer$sun_awt_image_ImageConsumerQueue$Z.apply(this, [cq, false]);
throw Clazz.new_(Clazz.load('SecurityException').c$$S,["Applets are trading image data!"]);
}}cq.interested=true;
}if (produce && this.decoder == null  ) {
p$1.startProduction.apply(this, []);
}});

Clazz.newMeth(C$, 'isConsumer$java_awt_image_ImageConsumer',  function (ic) {
for (var id=this.decoders; id != null ; id=id.next) {
if (id.isConsumer$java_awt_image_ImageConsumer(ic)) {
return true;
}}
return $I$(1).isConsumer$sun_awt_image_ImageConsumerQueue$java_awt_image_ImageConsumer(this.consumers, ic);
});

Clazz.newMeth(C$, 'errorAllConsumers$sun_awt_image_ImageConsumerQueue$Z',  function (cq, needReload) {
while (cq != null ){
if (cq.interested) {
p$1.errorConsumer$sun_awt_image_ImageConsumerQueue$Z.apply(this, [cq, needReload]);
}cq=cq.next;
}
}, p$1);

Clazz.newMeth(C$, 'errorConsumer$sun_awt_image_ImageConsumerQueue$Z',  function (cq, needReload) {
cq.consumer.imageComplete$I(1);
this.removeConsumer$java_awt_image_ImageConsumer(cq.consumer);
}, p$1);

Clazz.newMeth(C$, 'removeConsumer$java_awt_image_ImageConsumer',  function (ic) {
for (var id=this.decoders; id != null ; id=id.next) {
id.removeConsumer$java_awt_image_ImageConsumer(ic);
}
this.consumers=$I$(1).removeConsumer$sun_awt_image_ImageConsumerQueue$java_awt_image_ImageConsumer$Z(this.consumers, ic, false);
});

Clazz.newMeth(C$, 'startProduction$java_awt_image_ImageConsumer',  function (ic) {
this.addConsumer$java_awt_image_ImageConsumer$Z(ic, true);
});

Clazz.newMeth(C$, 'startProduction',  function () {
if (!this.awaitingFetch) {
$I$(2).add$sun_awt_image_ImageFetchable(this);
this.awaitingFetch=true;
}}, p$1);

Clazz.newMeth(C$, 'requestTopDownLeftRightResend$java_awt_image_ImageConsumer',  function (ic) {
});

Clazz.newMeth(C$, 'decoderForType$java_io_InputStream$S',  function (is, content_type) {
return null;
});

Clazz.newMeth(C$, 'getDecoder$java_io_InputStream',  function (is) {
return null;
});

Clazz.newMeth(C$, 'doFetch$',  function () {
{
if (this.consumers == null ) {
this.awaitingFetch=false;
return;
}}var imgd=this.getDecoder$();
if (imgd == null ) {
p$1.badDecoder.apply(this, []);
} else {
p$1.setDecoder$sun_awt_image_ImageDecoder.apply(this, [imgd]);
try {
imgd.produceImage$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
e.printStackTrace$();
}
} else if (Clazz.exceptionOf(e$$,"sun.awt.image.ImageFormatException")){
var e = e$$;
{
e.printStackTrace$();
}
} else {
throw e$$;
}
} finally {
p$1.removeDecoder$sun_awt_image_ImageDecoder.apply(this, [imgd]);
if ($I$(3).currentThread$().isInterrupted$() || !$I$(3).currentThread$().isAlive$() ) {
p$1.errorAllConsumers$sun_awt_image_ImageConsumerQueue$Z.apply(this, [imgd.queue, true]);
} else {
p$1.errorAllConsumers$sun_awt_image_ImageConsumerQueue$Z.apply(this, [imgd.queue, false]);
}}
}});

Clazz.newMeth(C$, 'badDecoder',  function () {
var cq;
{
cq=this.consumers;
this.consumers=null;
this.awaitingFetch=false;
}p$1.errorAllConsumers$sun_awt_image_ImageConsumerQueue$Z.apply(this, [cq, false]);
}, p$1);

Clazz.newMeth(C$, 'setDecoder$sun_awt_image_ImageDecoder',  function (mydecoder) {
var cq;
{
mydecoder.next=this.decoders;
this.decoders=mydecoder;
this.decoder=mydecoder;
cq=this.consumers;
mydecoder.queue=cq;
this.consumers=null;
this.awaitingFetch=false;
}}, p$1);

Clazz.newMeth(C$, 'removeDecoder$sun_awt_image_ImageDecoder',  function (mydecoder) {
this.doneDecoding$sun_awt_image_ImageDecoder(mydecoder);
var idprev=null;
for (var id=this.decoders; id != null ; id=id.next) {
if (id === mydecoder ) {
if (idprev == null ) {
this.decoders=id.next;
} else {
idprev.next=id.next;
}break;
}idprev=id;
}
}, p$1);

Clazz.newMeth(C$, 'doneDecoding$sun_awt_image_ImageDecoder',  function (mydecoder) {
if (this.decoder === mydecoder ) {
this.decoder=null;
if (this.consumers != null ) {
p$1.startProduction.apply(this, []);
}}});

Clazz.newMeth(C$, 'latchConsumers$sun_awt_image_ImageDecoder',  function (id) {
this.doneDecoding$sun_awt_image_ImageDecoder(id);
});

Clazz.newMeth(C$, 'flush$',  function () {
this.decoder=null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
