(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.gif"),I$=[[0,'java.util.Arrays','com.sun.imageio.plugins.gif.GIFStreamMetadata']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GIFStreamMetadataFormat", null, 'javax.imageio.metadata.IIOMetadataFormatImpl');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['instance','javax.imageio.metadata.IIOMetadataFormat']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S$I.apply(this,["javax_imageio_gif_stream_1.0", 2]);C$.$init$.apply(this);
this.addElement$S$S$I("Version", "javax_imageio_gif_stream_1.0", 0);
this.addAttribute$S$S$I$Z$S$java_util_List("Version", "value", 0, true, null, $I$(1,"asList$OA",[$I$(2).versionStrings]));
this.addElement$S$S$I("LogicalScreenDescriptor", "javax_imageio_gif_stream_1.0", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("LogicalScreenDescriptor", "logicalScreenWidth", 2, true, null, "1", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("LogicalScreenDescriptor", "logicalScreenHeight", 2, true, null, "1", "65535", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("LogicalScreenDescriptor", "colorResolution", 2, true, null, "1", "8", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("LogicalScreenDescriptor", "pixelAspectRatio", 2, true, null, "0", "255", true, true);
this.addElement$S$S$I$I("GlobalColorTable", "javax_imageio_gif_stream_1.0", 2, 256);
this.addAttribute$S$S$I$Z$S$java_util_List("GlobalColorTable", "sizeOfGlobalColorTable", 2, true, null, $I$(1,"asList$OA",[$I$(2).colorTableSizes]));
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("GlobalColorTable", "backgroundColorIndex", 2, true, null, "0", "255", true, true);
this.addBooleanAttribute$S$S$Z$Z("GlobalColorTable", "sortFlag", false, false);
this.addElement$S$S$I("ColorTableEntry", "GlobalColorTable", 0);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("ColorTableEntry", "index", 2, true, null, "0", "255", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("ColorTableEntry", "red", 2, true, null, "0", "255", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("ColorTableEntry", "green", 2, true, null, "0", "255", true, true);
this.addAttribute$S$S$I$Z$S$S$S$Z$Z("ColorTableEntry", "blue", 2, true, null, "0", "255", true, true);
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
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:53 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
