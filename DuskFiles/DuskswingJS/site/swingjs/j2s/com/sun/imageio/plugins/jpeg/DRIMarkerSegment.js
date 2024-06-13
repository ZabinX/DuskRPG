(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.jpeg"),I$=[[0,'javax.imageio.metadata.IIOMetadataNode','com.sun.imageio.plugins.jpeg.MarkerSegment']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DRIMarkerSegment", null, 'com.sun.imageio.plugins.jpeg.MarkerSegment');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.restartInterval=0;
},1);

C$.$fields$=[['I',['restartInterval']]]

Clazz.newMeth(C$, 'c$$com_sun_imageio_plugins_jpeg_JPEGBuffer',  function (buffer) {
;C$.superclazz.c$$com_sun_imageio_plugins_jpeg_JPEGBuffer.apply(this,[buffer]);C$.$init$.apply(this);
this.restartInterval=(buffer.buf[buffer.bufPtr++] & 255) << 8;
this.restartInterval|=buffer.buf[buffer.bufPtr++] & 255;
buffer.bufAvail-=this.length;
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node',  function (node) {
;C$.superclazz.c$$I.apply(this,[221]);C$.$init$.apply(this);
this.updateFromNativeNode$org_w3c_dom_Node$Z(node, true);
}, 1);

Clazz.newMeth(C$, 'getNativeNode$',  function () {
var node=Clazz.new_($I$(1,1).c$$S,["dri"]);
node.setAttribute$S$S("interval", Integer.toString$I(this.restartInterval));
return node;
});

Clazz.newMeth(C$, 'updateFromNativeNode$org_w3c_dom_Node$Z',  function (node, fromScratch) {
this.restartInterval=$I$(2).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, null, "interval", 0, 65535, true);
});

Clazz.newMeth(C$, 'write$javax_imageio_stream_ImageOutputStream',  function (ios) {
});

Clazz.newMeth(C$, 'print$',  function () {
this.printTag$S("DRI");
System.out.println$S("Interval: " + Integer.toString$I(this.restartInterval));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:54 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
