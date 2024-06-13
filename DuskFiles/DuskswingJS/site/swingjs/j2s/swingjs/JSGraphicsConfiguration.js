(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'java.awt.GraphicsEnvironment','java.awt.image.ColorModel','swingjs.api.Interface','swingjs.JSUtil','java.awt.Rectangle']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSGraphicsConfiguration", null, 'java.awt.GraphicsConfiguration');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
System.out.println$S("JSGraphicsConfiguration initialized");
}, 1);

Clazz.newMeth(C$, 'getDevice$',  function () {
return $I$(1).getLocalGraphicsEnvironment$().getDefaultScreenDevice$();
});

Clazz.newMeth(C$, 'createCompatibleImage$I$I',  function (width, height) {
var cm=this.getColorModel$();
var wr=cm.createCompatibleWritableRaster$I$I(width, height);
return this.newBufferedImage$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable(cm, wr, false, null);
});

Clazz.newMeth(C$, 'getColorModel$',  function () {
return $I$(2).getRGBdefault$();
});

Clazz.newMeth(C$, 'getColorModel$I',  function (transparency) {
return this.getColorModel$();
});

Clazz.newMeth(C$, 'getDefaultTransform$',  function () {
return $I$(3).getInstance$S$Z("java.awt.geom.AffineTransform", true);
});

Clazz.newMeth(C$, 'getNormalizingTransform$',  function () {
return this.getDefaultTransform$();
});

Clazz.newMeth(C$, 'getBounds$',  function () {
var doc=document ||null;
var d=$I$(4).jQuery.$(doc);
return Clazz.new_([d.width(), d.height()],$I$(5,1).c$$I$I);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:59 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
