(function(){var P$=Clazz.newPackage("sun.awt.image"),I$=[[0,'java.awt.GraphicsEnvironment','java.awt.Font']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "OffScreenImage", null, 'java.awt.image.BufferedImage');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['c','java.awt.Component','defaultFont','java.awt.Font']]]

Clazz.newMeth(C$, 'c$$I$I$I',  function (width, height, imageType) {
;C$.superclazz.c$$I$I$I.apply(this,[width, height, imageType]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getGraphics$',  function () {
return this.createGraphics$();
});

Clazz.newMeth(C$, 'createGraphics$',  function () {
if (this.c == null ) {
var env=$I$(1).getLocalGraphicsEnvironment$();
return env.createGraphics$java_awt_image_BufferedImage(this);
}var font=this.c.getFont$();
if (font == null ) {
if (this.defaultFont == null ) {
this.defaultFont=Clazz.new_($I$(2,1).c$$S$I$I,["Dialog", 0, 12]);
}font=this.defaultFont;
}return null;
});

Clazz.newMeth(C$, 'getSource$',  function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
