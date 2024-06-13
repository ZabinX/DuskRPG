(function(){var P$=Clazz.newPackage("javax.imageio.plugins.jpeg"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JPEGImageWriteParam", null, 'javax.imageio.ImageWriteParam');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.qTables=null;
this.DCHuffmanTables=null;
this.ACHuffmanTables=null;
this.optimizeHuffman=false;
this.compressionNames=Clazz.array(String, -1, ["JPEG"]);
this.qualityVals=Clazz.array(Float.TYPE, -1, [0.0, 0.3, 0.75, 1.0]);
this.qualityDescs=Clazz.array(String, -1, ["Low quality", "Medium quality", "Visually lossless"]);
},1);

C$.$fields$=[['Z',['optimizeHuffman'],'O',['qTables','javax.imageio.plugins.jpeg.JPEGQTable[]','DCHuffmanTables','javax.imageio.plugins.jpeg.JPEGHuffmanTable[]','+ACHuffmanTables','compressionNames','String[]','qualityVals','float[]','qualityDescs','String[]']]]

Clazz.newMeth(C$, 'c$$java_util_Locale',  function (locale) {
;C$.superclazz.c$$java_util_Locale.apply(this,[locale]);C$.$init$.apply(this);
this.canWriteProgressive=true;
this.progressiveMode=0;
this.canWriteCompressed=true;
this.compressionTypes=this.compressionNames;
this.compressionType=this.compressionTypes[0];
this.compressionQuality=0.75;
}, 1);

Clazz.newMeth(C$, 'unsetCompression$',  function () {
if (this.getCompressionMode$() != 2) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Compression mode not MODE_EXPLICIT!"]);
}this.compressionQuality=0.75;
});

Clazz.newMeth(C$, 'isCompressionLossless$',  function () {
if (this.getCompressionMode$() != 2) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Compression mode not MODE_EXPLICIT!"]);
}return false;
});

Clazz.newMeth(C$, 'getCompressionQualityDescriptions$',  function () {
if (this.getCompressionMode$() != 2) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Compression mode not MODE_EXPLICIT!"]);
}if ((this.getCompressionTypes$() != null ) && (this.getCompressionType$() == null ) ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No compression type set!"]);
}return this.qualityDescs.clone$();
});

Clazz.newMeth(C$, 'getCompressionQualityValues$',  function () {
if (this.getCompressionMode$() != 2) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Compression mode not MODE_EXPLICIT!"]);
}if ((this.getCompressionTypes$() != null ) && (this.getCompressionType$() == null ) ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No compression type set!"]);
}return this.qualityVals.clone$();
});

Clazz.newMeth(C$, 'areTablesSet$',  function () {
return (this.qTables != null );
});

Clazz.newMeth(C$, 'setEncodeTables$javax_imageio_plugins_jpeg_JPEGQTableA$javax_imageio_plugins_jpeg_JPEGHuffmanTableA$javax_imageio_plugins_jpeg_JPEGHuffmanTableA',  function (qTables, DCHuffmanTables, ACHuffmanTables) {
if ((qTables == null ) || (DCHuffmanTables == null ) || (ACHuffmanTables == null ) || (qTables.length > 4) || (DCHuffmanTables.length > 4) || (ACHuffmanTables.length > 4) || (DCHuffmanTables.length != ACHuffmanTables.length)  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid JPEG table arrays"]);
}this.qTables=qTables.clone$();
this.DCHuffmanTables=DCHuffmanTables.clone$();
this.ACHuffmanTables=ACHuffmanTables.clone$();
});

Clazz.newMeth(C$, 'unsetEncodeTables$',  function () {
this.qTables=null;
this.DCHuffmanTables=null;
this.ACHuffmanTables=null;
});

Clazz.newMeth(C$, 'getQTables$',  function () {
return (this.qTables != null ) ? this.qTables.clone$() : null;
});

Clazz.newMeth(C$, 'getDCHuffmanTables$',  function () {
return (this.DCHuffmanTables != null ) ? this.DCHuffmanTables.clone$() : null;
});

Clazz.newMeth(C$, 'getACHuffmanTables$',  function () {
return (this.ACHuffmanTables != null ) ? this.ACHuffmanTables.clone$() : null;
});

Clazz.newMeth(C$, 'setOptimizeHuffmanTables$Z',  function (optimize) {
this.optimizeHuffman=optimize;
});

Clazz.newMeth(C$, 'getOptimizeHuffmanTables$',  function () {
return this.optimizeHuffman;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
