(function(){var P$=Clazz.newPackage("sun.awt.image"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ImageConsumerQueue");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['interested','secure'],'O',['next','sun.awt.image.ImageConsumerQueue','consumer','java.awt.image.ImageConsumer','securityContext','java.lang.Object']]]

Clazz.newMeth(C$, 'removeConsumer$sun_awt_image_ImageConsumerQueue$java_awt_image_ImageConsumer$Z',  function (cqbase, ic, stillinterested) {
var cqprev=null;
for (var cq=cqbase; cq != null ; cq=cq.next) {
if (cq.consumer === ic ) {
if (cqprev == null ) {
cqbase=cq.next;
} else {
cqprev.next=cq.next;
}cq.interested=stillinterested;
break;
}cqprev=cq;
}
return cqbase;
}, 1);

Clazz.newMeth(C$, 'isConsumer$sun_awt_image_ImageConsumerQueue$java_awt_image_ImageConsumer',  function (cqbase, ic) {
for (var cq=cqbase; cq != null ; cq=cq.next) {
if (cq.consumer === ic ) {
return true;
}}
return false;
}, 1);

Clazz.newMeth(C$, 'c$$sun_awt_image_InputStreamImageSource$java_awt_image_ImageConsumer',  function (src, ic) {
;C$.$init$.apply(this);
this.consumer=ic;
this.interested=true;
this.secure=true;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return ("[" + this.consumer + ", " + (this.interested ? "" : "not ") + "interested" + (this.securityContext != null  ? ", " + this.securityContext : "") + "]" );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
