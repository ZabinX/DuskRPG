(function(){var P$=Clazz.newPackage("javax.imageio.plugins.jpeg"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JPEGImageReadParam", null, 'javax.imageio.ImageReadParam');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.qTables=null;
this.DCHuffmanTables=null;
this.ACHuffmanTables=null;
},1);

C$.$fields$=[['O',['qTables','javax.imageio.plugins.jpeg.JPEGQTable[]','DCHuffmanTables','javax.imageio.plugins.jpeg.JPEGHuffmanTable[]','+ACHuffmanTables']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'areTablesSet$',  function () {
return (this.qTables != null );
});

Clazz.newMeth(C$, 'setDecodeTables$javax_imageio_plugins_jpeg_JPEGQTableA$javax_imageio_plugins_jpeg_JPEGHuffmanTableA$javax_imageio_plugins_jpeg_JPEGHuffmanTableA',  function (qTables, DCHuffmanTables, ACHuffmanTables) {
if ((qTables == null ) || (DCHuffmanTables == null ) || (ACHuffmanTables == null ) || (qTables.length > 4) || (DCHuffmanTables.length > 4) || (ACHuffmanTables.length > 4) || (DCHuffmanTables.length != ACHuffmanTables.length)  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid JPEG table arrays"]);
}this.qTables=qTables.clone$();
this.DCHuffmanTables=DCHuffmanTables.clone$();
this.ACHuffmanTables=ACHuffmanTables.clone$();
});

Clazz.newMeth(C$, 'unsetDecodeTables$',  function () {
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
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
