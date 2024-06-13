(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.wbmp"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "WBMPMetadataFormat", null, 'javax.imageio.metadata.IIOMetadataFormatImpl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['instance','javax.imageio.metadata.IIOMetadataFormat']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S$I.apply(this,["javax_imageio_wbmp_1.0", 2]);C$.$init$.apply(this);
this.addElement$S$S$I("ImageDescriptor", "javax_imageio_wbmp_1.0", 0);
this.addAttribute$S$S$I$Z$S("ImageDescriptor", "WBMPType", 2, true, "0");
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("ImageDescriptor", "Width", 2, true, null, "0", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("ImageDescriptor", "Height", 2, true, null, "1", "65535", true, true);
}, 1);

Clazz.newMeth(C$, 'canNodeAppear$S$javax_imageio_ImageTypeSpecifier',  function (elementName, imageType) {
return true;
});

Clazz.newMeth(C$, 'getInstance$',  function () {
if (C$.instance == null ) {
C$.instance=Clazz.new_(C$);
}return C$.instance;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.instance=null;
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
