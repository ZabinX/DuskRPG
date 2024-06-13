(function(){var P$=Clazz.newPackage("swingjs.image"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JpgImageWriteParam", null, 'javax.imageio.ImageWriteParam');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_Locale',  function (l) {
;C$.superclazz.c$$java_util_Locale.apply(this,[l]);C$.$init$.apply(this);
this.canWriteCompressed=true;
this.compressionTypes=Clazz.array(String, -1, ["JPEG"]);
this.compressionMode=2;
this.compressionType="JPEG";
this.compressionQuality=0.75;
}, 1);

Clazz.newMeth(C$, 'unsetCompression$',  function () {
if (this.getCompressionMode$() != 2) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Compression mode not MODE_EXPLICIT!"]);
}this.compressionQuality=0.75;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:04 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
