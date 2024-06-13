(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.jpeg"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JPEGStreamMetadataFormat", null, 'com.sun.imageio.plugins.jpeg.JPEGMetadataFormat');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['theInstance','com.sun.imageio.plugins.jpeg.JPEGStreamMetadataFormat']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S$I.apply(this,["javax_imageio_jpeg_stream_1.0", 4]);C$.$init$.apply(this);
this.addStreamElements$S(this.getRootName$());
}, 1);

Clazz.newMeth(C$, 'getInstance$',  function () {
if (C$.theInstance == null ) {
C$.theInstance=Clazz.new_(C$);
}return C$.theInstance;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.theInstance=null;
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:55 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
