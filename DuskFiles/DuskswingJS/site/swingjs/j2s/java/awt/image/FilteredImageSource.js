(function(){var P$=Clazz.newPackage("java.awt.image"),I$=[[0,'java.util.Hashtable']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FilteredImageSource", null, null, 'java.awt.image.ImageProducer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['src','java.awt.image.ImageProducer','filter','java.awt.image.ImageFilter','proxies','java.util.Hashtable']]]

Clazz.newMeth(C$, 'c$$java_awt_image_ImageProducer$java_awt_image_ImageFilter',  function (orig, imgf) {
;C$.$init$.apply(this);
this.src=orig;
this.filter=imgf;
}, 1);

Clazz.newMeth(C$, 'addConsumer$java_awt_image_ImageConsumer',  function (ic) {
if (this.proxies == null ) {
this.proxies=Clazz.new_($I$(1,1));
}if (!this.proxies.containsKey$O(ic)) {
var imgf=this.filter.getFilterInstance$java_awt_image_ImageConsumer(ic);
this.proxies.put$O$O(ic, imgf);
this.src.addConsumer$java_awt_image_ImageConsumer(imgf);
}});

Clazz.newMeth(C$, 'isConsumer$java_awt_image_ImageConsumer',  function (ic) {
return (this.proxies != null  && this.proxies.containsKey$O(ic) );
});

Clazz.newMeth(C$, 'removeConsumer$java_awt_image_ImageConsumer',  function (ic) {
if (this.proxies != null ) {
var imgf=this.proxies.get$O(ic);
if (imgf != null ) {
this.src.removeConsumer$java_awt_image_ImageConsumer(imgf);
this.proxies.remove$O(ic);
if (this.proxies.isEmpty$()) {
this.proxies=null;
}}}});

Clazz.newMeth(C$, 'startProduction$java_awt_image_ImageConsumer',  function (ic) {
if (this.proxies == null ) {
this.proxies=Clazz.new_($I$(1,1));
}var imgf=this.proxies.get$O(ic);
if (imgf == null ) {
imgf=this.filter.getFilterInstance$java_awt_image_ImageConsumer(ic);
this.proxies.put$O$O(ic, imgf);
}this.src.startProduction$java_awt_image_ImageConsumer(imgf);
});

Clazz.newMeth(C$, 'requestTopDownLeftRightResend$java_awt_image_ImageConsumer',  function (ic) {
if (this.proxies != null ) {
var imgf=this.proxies.get$O(ic);
if (imgf != null ) {
imgf.resendTopDownLeftRight$java_awt_image_ImageProducer(this.src);
}}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
