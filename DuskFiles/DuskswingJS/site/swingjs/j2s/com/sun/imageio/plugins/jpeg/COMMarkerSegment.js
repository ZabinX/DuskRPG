(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.jpeg"),I$=[[0,'javax.imageio.metadata.IIOMetadataNode']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "COMMarkerSegment", null, 'com.sun.imageio.plugins.jpeg.MarkerSegment');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$com_sun_imageio_plugins_jpeg_JPEGBuffer',  function (buffer) {
;C$.superclazz.c$$com_sun_imageio_plugins_jpeg_JPEGBuffer.apply(this,[buffer]);C$.$init$.apply(this);
this.loadData$com_sun_imageio_plugins_jpeg_JPEGBuffer(buffer);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (comment) {
;C$.superclazz.c$$I.apply(this,[254]);C$.$init$.apply(this);
this.data=comment.getBytes$();
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node',  function (node) {
;C$.superclazz.c$$I.apply(this,[254]);C$.$init$.apply(this);
if (Clazz.instanceOf(node, "javax.imageio.metadata.IIOMetadataNode")) {
var ourNode=node;
this.data=ourNode.getUserObject$();
}if (this.data == null ) {
var comment=node.getAttributes$().getNamedItem$S("comment").getNodeValue$();
if (comment != null ) {
this.data=comment.getBytes$();
} else {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["Empty comment node!", node]);
}}}, 1);

Clazz.newMeth(C$, 'getComment$',  function () {
try {
return  String.instantialize(this.data, "ISO-8859-1");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
} else {
throw e;
}
}
return null;
});

Clazz.newMeth(C$, 'getNativeNode$',  function () {
var node=Clazz.new_($I$(1,1).c$$S,["com"]);
node.setAttribute$S$S("comment", this.getComment$());
if (this.data != null ) {
node.setUserObject$O(this.data.clone$());
}return node;
});

Clazz.newMeth(C$, 'write$javax_imageio_stream_ImageOutputStream',  function (ios) {
this.length=2 + this.data.length;
this.writeTag$javax_imageio_stream_ImageOutputStream(ios);
ios.write$BA(this.data);
});

Clazz.newMeth(C$, 'print$',  function () {
this.printTag$S("COM");
System.out.println$S("<" + this.getComment$() + ">" );
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:54 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
