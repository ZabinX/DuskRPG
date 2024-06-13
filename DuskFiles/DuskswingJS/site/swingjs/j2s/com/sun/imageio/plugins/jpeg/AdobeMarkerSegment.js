(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.jpeg"),I$=[[0,'javax.imageio.metadata.IIOMetadataNode','com.sun.imageio.plugins.jpeg.MarkerSegment']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AdobeMarkerSegment", null, 'com.sun.imageio.plugins.jpeg.MarkerSegment');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['version','flags0','flags1','transform']]]

Clazz.newMeth(C$, 'c$$I',  function (transform) {
;C$.superclazz.c$$I.apply(this,[238]);C$.$init$.apply(this);
this.version=101;
this.flags0=0;
this.flags1=0;
this.transform=transform;
}, 1);

Clazz.newMeth(C$, 'c$$com_sun_imageio_plugins_jpeg_JPEGBuffer',  function (buffer) {
;C$.superclazz.c$$com_sun_imageio_plugins_jpeg_JPEGBuffer.apply(this,[buffer]);C$.$init$.apply(this);
buffer.bufPtr+=5;
this.version=(buffer.buf[buffer.bufPtr++] & 255) << 8;
this.version|=buffer.buf[buffer.bufPtr++] & 255;
this.flags0=(buffer.buf[buffer.bufPtr++] & 255) << 8;
this.flags0|=buffer.buf[buffer.bufPtr++] & 255;
this.flags1=(buffer.buf[buffer.bufPtr++] & 255) << 8;
this.flags1|=buffer.buf[buffer.bufPtr++] & 255;
this.transform=buffer.buf[buffer.bufPtr++] & 255;
buffer.bufAvail-=this.length;
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node',  function (node) {
C$.c$$I.apply(this, [0]);
this.updateFromNativeNode$org_w3c_dom_Node$Z(node, true);
}, 1);

Clazz.newMeth(C$, 'getNativeNode$',  function () {
var node=Clazz.new_($I$(1,1).c$$S,["app14Adobe"]);
node.setAttribute$S$S("version", Integer.toString$I(this.version));
node.setAttribute$S$S("flags0", Integer.toString$I(this.flags0));
node.setAttribute$S$S("flags1", Integer.toString$I(this.flags1));
node.setAttribute$S$S("transform", Integer.toString$I(this.transform));
return node;
});

Clazz.newMeth(C$, 'updateFromNativeNode$org_w3c_dom_Node$Z',  function (node, fromScratch) {
var attrs=node.getAttributes$();
this.transform=$I$(2).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "transform", 0, 2, true);
var count=attrs.getLength$();
if (count > 4) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["Adobe APP14 node cannot have > 4 attributes", node]);
}if (count > 1) {
var value=$I$(2).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "version", 100, 255, false);
this.version=(value != -1) ? value : this.version;
value=$I$(2).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "flags0", 0, 65535, false);
this.flags0=(value != -1) ? value : this.flags0;
value=$I$(2).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "flags1", 0, 65535, false);
this.flags1=(value != -1) ? value : this.flags1;
}});

Clazz.newMeth(C$, 'write$javax_imageio_stream_ImageOutputStream',  function (ios) {
this.length=14;
this.writeTag$javax_imageio_stream_ImageOutputStream(ios);
var id=Clazz.array(Byte.TYPE, -1, [65, 100, 111, 98, 101]);
ios.write$BA(id);
$I$(2).write2bytes$javax_imageio_stream_ImageOutputStream$I(ios, this.version);
$I$(2).write2bytes$javax_imageio_stream_ImageOutputStream$I(ios, this.flags0);
$I$(2).write2bytes$javax_imageio_stream_ImageOutputStream$I(ios, this.flags1);
ios.write$I(this.transform);
});

Clazz.newMeth(C$, 'writeAdobeSegment$javax_imageio_stream_ImageOutputStream$I',  function (ios, transform) {
(Clazz.new_(C$.c$$I,[transform])).write$javax_imageio_stream_ImageOutputStream(ios);
}, 1);

Clazz.newMeth(C$, 'print$',  function () {
this.printTag$S("Adobe APP14");
System.out.print$S("Version: ");
System.out.println$I(this.version);
System.out.print$S("Flags0: 0x");
System.out.println$S(Integer.toHexString$I(this.flags0));
System.out.print$S("Flags1: 0x");
System.out.println$S(Integer.toHexString$I(this.flags1));
System.out.print$S("Transform: ");
System.out.println$I(this.transform);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:54 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
