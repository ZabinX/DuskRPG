(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'java.awt.Font','java.awt.Toolkit','swingjs.JSUtil','java.awt.Point','java.awt.GraphicsDevice']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSGraphicsEnvironment", null, 'java.awt.GraphicsEnvironment');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['device','java.awt.GraphicsDevice','availableFonts','java.awt.Font[]']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
System.out.println$S("JSGraphicsEnvironment initialized");
}, 1);

Clazz.newMeth(C$, 'createGraphics$java_awt_image_BufferedImage',  function (img) {
return img.秘getImageGraphic$().create$();
});

Clazz.newMeth(C$, 'getAllFonts$',  function () {
if (C$.availableFonts == null ) {
var names=this.getAvailableFontFamilyNames$();
C$.availableFonts=Clazz.array($I$(1), [names.length]);
for (var i=names.length; --i >= 0; ) C$.availableFonts[i]=Clazz.new_($I$(1,1).c$$S$I$I,[names[i], 0, 1]);

}return C$.availableFonts;
});

Clazz.newMeth(C$, 'getAvailableFontFamilyNames$',  function () {
return $I$(2).getDefaultToolkit$().getFontList$();
});

Clazz.newMeth(C$, 'getAvailableFontFamilyNames$java_util_Locale',  function (l) {
return $I$(2).getDefaultToolkit$().getFontList$();
});

Clazz.newMeth(C$, 'getDefaultScreenDevice$',  function () {
if (C$.device == null ) C$.device=$I$(3).getInstance$S("swingjs.JSScreenDevice");
return C$.device;
});

Clazz.newMeth(C$, 'getCenterPoint$',  function () {
var d=$I$(2).getDefaultToolkit$().getScreenSize$();
return Clazz.new_([(d.width/2|0), (d.height/2|0)],$I$(4,1).c$$I$I);
});

Clazz.newMeth(C$, 'getScreenDevices$',  function () {
return Clazz.array($I$(5), -1, [this.getDefaultScreenDevice$()]);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:59 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
