(function(){var P$=Clazz.newPackage("sun.java2d.loops"),I$=[[0,'sun.java2d.SunCompositeContext']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "XORComposite", null, null, 'java.awt.Composite');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['xorPixel','alphaMask'],'O',['xorColor','java.awt.Color']]]

Clazz.newMeth(C$, 'c$$java_awt_Color$sun_java2d_SurfaceData',  function (xorColor, sd) {
;C$.$init$.apply(this);
this.xorColor=xorColor;
this.xorPixel=xorColor.getRGB$();
this.alphaMask=-16777216;
}, 1);

Clazz.newMeth(C$, 'getXorColor$',  function () {
return this.xorColor;
});

Clazz.newMeth(C$, 'getXorPixel$',  function () {
return this.xorPixel;
});

Clazz.newMeth(C$, 'getAlphaMask$',  function () {
return this.alphaMask;
});

Clazz.newMeth(C$, 'createContext$java_awt_image_ColorModel$java_awt_image_ColorModel$java_awt_RenderingHints',  function (srcColorModel, dstColorModel, hints) {
return Clazz.new_($I$(1,1).c$$sun_java2d_loops_XORComposite$java_awt_image_ColorModel$java_awt_image_ColorModel,[this, srcColorModel, dstColorModel]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
