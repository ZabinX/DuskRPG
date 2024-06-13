(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.jpeg"),I$=[[0,'javax.imageio.metadata.IIOMetadataNode']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MarkerSegment", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.data=null;
this.unknown=false;
},1);

C$.$fields$=[['Z',['unknown'],'I',['tag','length'],'O',['data','byte[]']]]

Clazz.newMeth(C$, 'c$$com_sun_imageio_plugins_jpeg_JPEGBuffer',  function (buffer) {
;C$.$init$.apply(this);
buffer.loadBuf$I(3);
this.tag=buffer.buf[buffer.bufPtr++] & 255;
this.length=(buffer.buf[buffer.bufPtr++] & 255) << 8;
this.length|=buffer.buf[buffer.bufPtr++] & 255;
this.length-=2;
if (this.length < 0) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Invalid segment length: " + this.length]);
}buffer.bufAvail-=3;
buffer.loadBuf$I(this.length);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (tag) {
;C$.$init$.apply(this);
this.tag=tag;
this.length=0;
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node',  function (node) {
;C$.$init$.apply(this);
this.tag=C$.getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, null, "MarkerTag", 0, 255, true);
this.length=0;
if (Clazz.instanceOf(node, "javax.imageio.metadata.IIOMetadataNode")) {
var iioNode=node;
try {
this.data=iioNode.getUserObject$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
var newGuy=Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["Can\'t get User Object", node]);
newGuy.initCause$Throwable(e);
throw newGuy;
} else {
throw e;
}
}
} else {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["Node must have User Object", node]);
}}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
var newGuy=null;
try {
newGuy=Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
} else {
throw e;
}
}
if (this.data != null ) {
newGuy.data=this.data.clone$();
}return newGuy;
});

Clazz.newMeth(C$, 'loadData$com_sun_imageio_plugins_jpeg_JPEGBuffer',  function (buffer) {
this.data=Clazz.array(Byte.TYPE, [this.length]);
buffer.readData$BA(this.data);
});

Clazz.newMeth(C$, 'getNativeNode$',  function () {
var node=Clazz.new_($I$(1,1).c$$S,["unknown"]);
node.setAttribute$S$S("MarkerTag", Integer.toString$I(this.tag));
node.setUserObject$O(this.data);
return node;
});

Clazz.newMeth(C$, 'getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z',  function (node, attrs, name, min, max, required) {
if (attrs == null ) {
attrs=node.getAttributes$();
}var valueString=attrs.getNamedItem$S(name).getNodeValue$();
var value=-1;
if (valueString == null ) {
if (required) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,[name + " attribute not found", node]);
}} else {
value=Integer.parseInt$S(valueString);
if ((value < min) || (value > max) ) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,[name + " attribute out of range", node]);
}}return value;
}, 1);

Clazz.newMeth(C$, 'writeTag$javax_imageio_stream_ImageOutputStream',  function (ios) {
ios.write$I(255);
ios.write$I(this.tag);
C$.write2bytes$javax_imageio_stream_ImageOutputStream$I(ios, this.length);
});

Clazz.newMeth(C$, 'write$javax_imageio_stream_ImageOutputStream',  function (ios) {
this.length=2 + ((this.data != null ) ? this.data.length : 0);
this.writeTag$javax_imageio_stream_ImageOutputStream(ios);
if (this.data != null ) {
ios.write$BA(this.data);
}});

Clazz.newMeth(C$, 'write2bytes$javax_imageio_stream_ImageOutputStream$I',  function (ios, value) {
ios.write$I((value >> 8) & 255);
ios.write$I(value & 255);
}, 1);

Clazz.newMeth(C$, 'printTag$S',  function (prefix) {
System.out.println$S(prefix + " marker segment - marker = 0x" + Integer.toHexString$I(this.tag) );
System.out.println$S("length: " + this.length);
});

Clazz.newMeth(C$, 'print$',  function () {
this.printTag$S("Unknown");
if (this.length > 10) {
System.out.print$S("First 5 bytes:");
for (var i=0; i < 5; i++) {
System.out.print$S(" Ox" + Integer.toHexString$I((this.data[i]|0)));
}
System.out.print$S("\nLast 5 bytes:");
for (var i=this.data.length - 5; i < this.data.length; i++) {
System.out.print$S(" Ox" + Integer.toHexString$I((this.data[i]|0)));
}
} else {
System.out.print$S("Data:");
for (var i=0; i < this.data.length; i++) {
System.out.print$S(" Ox" + Integer.toHexString$I((this.data[i]|0)));
}
}System.out.println$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:55 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
