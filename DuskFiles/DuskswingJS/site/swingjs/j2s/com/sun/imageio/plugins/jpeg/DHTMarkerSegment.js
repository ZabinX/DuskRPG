(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.jpeg"),I$=[[0,'com.sun.imageio.plugins.jpeg.MarkerSegment','javax.imageio.metadata.IIOMetadataNode','javax.imageio.plugins.jpeg.JPEGHuffmanTable','java.util.ArrayList',['com.sun.imageio.plugins.jpeg.DHTMarkerSegment','.Htable']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DHTMarkerSegment", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'com.sun.imageio.plugins.jpeg.MarkerSegment');
C$.$classes$=[['Htable',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tables=Clazz.new_($I$(4,1));
},1);

C$.$fields$=[['O',['tables','java.util.List']]]

Clazz.newMeth(C$, 'c$$Z',  function (needFour) {
;C$.superclazz.c$$I.apply(this,[196]);C$.$init$.apply(this);
this.tables.add$O(Clazz.new_([this, null, $I$(3).StdDCLuminance, true, 0],$I$(5,1).c$$javax_imageio_plugins_jpeg_JPEGHuffmanTable$Z$I));
if (needFour) {
this.tables.add$O(Clazz.new_([this, null, $I$(3).StdDCChrominance, true, 1],$I$(5,1).c$$javax_imageio_plugins_jpeg_JPEGHuffmanTable$Z$I));
}this.tables.add$O(Clazz.new_([this, null, $I$(3).StdACLuminance, false, 0],$I$(5,1).c$$javax_imageio_plugins_jpeg_JPEGHuffmanTable$Z$I));
if (needFour) {
this.tables.add$O(Clazz.new_([this, null, $I$(3).StdACChrominance, false, 1],$I$(5,1).c$$javax_imageio_plugins_jpeg_JPEGHuffmanTable$Z$I));
}}, 1);

Clazz.newMeth(C$, 'c$$com_sun_imageio_plugins_jpeg_JPEGBuffer',  function (buffer) {
;C$.superclazz.c$$com_sun_imageio_plugins_jpeg_JPEGBuffer.apply(this,[buffer]);C$.$init$.apply(this);
var count=this.length;
while (count > 0){
var newGuy=Clazz.new_($I$(5,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer,[this, null, buffer]);
this.tables.add$O(newGuy);
count-=1 + 16 + newGuy.values.length ;
}
buffer.bufAvail-=this.length;
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_plugins_jpeg_JPEGHuffmanTableA$javax_imageio_plugins_jpeg_JPEGHuffmanTableA',  function (dcTables, acTables) {
;C$.superclazz.c$$I.apply(this,[196]);C$.$init$.apply(this);
for (var i=0; i < dcTables.length; i++) {
this.tables.add$O(Clazz.new_($I$(5,1).c$$javax_imageio_plugins_jpeg_JPEGHuffmanTable$Z$I,[this, null, dcTables[i], true, i]));
}
for (var i=0; i < acTables.length; i++) {
this.tables.add$O(Clazz.new_($I$(5,1).c$$javax_imageio_plugins_jpeg_JPEGHuffmanTable$Z$I,[this, null, acTables[i], false, i]));
}
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node',  function (node) {
;C$.superclazz.c$$I.apply(this,[196]);C$.$init$.apply(this);
var children=node.getChildNodes$();
var size=children.getLength$();
if ((size < 1) || (size > 4) ) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["Invalid DHT node", node]);
}for (var i=0; i < size; i++) {
this.tables.add$O(Clazz.new_([this, null, children.item$I(i)],$I$(5,1).c$$org_w3c_dom_Node));
}
}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
var newGuy=C$.superclazz.prototype.clone$.apply(this, []);
newGuy.tables=Clazz.new_([this.tables.size$()],$I$(4,1).c$$I);
var iter=this.tables.iterator$();
while (iter.hasNext$()){
var table=iter.next$();
newGuy.tables.add$O(table.clone$());
}
return newGuy;
});

Clazz.newMeth(C$, 'getNativeNode$',  function () {
var node=Clazz.new_($I$(2,1).c$$S,["dht"]);
for (var i=0; i < this.tables.size$(); i++) {
var table=this.tables.get$I(i);
node.appendChild$org_w3c_dom_Node(table.getNativeNode$());
}
return node;
});

Clazz.newMeth(C$, 'write$javax_imageio_stream_ImageOutputStream',  function (ios) {
});

Clazz.newMeth(C$, 'print$',  function () {
this.printTag$S("DHT");
System.out.println$S("Num tables: " + Integer.toString$I(this.tables.size$()));
for (var i=0; i < this.tables.size$(); i++) {
var table=this.tables.get$I(i);
table.print$();
}
System.out.println$();
});

Clazz.newMeth(C$, 'getHtableFromNode$org_w3c_dom_Node',  function (node) {
return Clazz.new_($I$(5,1).c$$org_w3c_dom_Node,[this, null, node]);
});

Clazz.newMeth(C$, 'addHtable$javax_imageio_plugins_jpeg_JPEGHuffmanTable$Z$I',  function (table, isDC, id) {
this.tables.add$O(Clazz.new_($I$(5,1).c$$javax_imageio_plugins_jpeg_JPEGHuffmanTable$Z$I,[this, null, table, isDC, id]));
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.DHTMarkerSegment, "Htable", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.numCodes=Clazz.array(Short.TYPE, [16]);
},1);

C$.$fields$=[['I',['tableClass','tableID'],'O',['numCodes','short[]','+values']]]

Clazz.newMeth(C$, 'c$$com_sun_imageio_plugins_jpeg_JPEGBuffer',  function (buffer) {
;C$.$init$.apply(this);
this.tableClass=buffer.buf[buffer.bufPtr] >>> 4;
this.tableID=buffer.buf[buffer.bufPtr++] & 15;
for (var i=0; i < 16; i++) {
this.numCodes[i]=((buffer.buf[buffer.bufPtr++] & 255)|0);
}
var numValues=0;
for (var i=0; i < 16; i++) {
numValues+=this.numCodes[i];
}
this.values=Clazz.array(Short.TYPE, [numValues]);
for (var i=0; i < numValues; i++) {
this.values[i]=((buffer.buf[buffer.bufPtr++] & 255)|0);
}
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_plugins_jpeg_JPEGHuffmanTable$Z$I',  function (table, isDC, id) {
;C$.$init$.apply(this);
this.tableClass=isDC ? 0 : 1;
this.tableID=id;
this.numCodes=table.getLengths$();
this.values=table.getValues$();
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node',  function (node) {
;C$.$init$.apply(this);
if (node.getNodeName$().equals$O("dhtable")) {
var attrs=node.getAttributes$();
var count=attrs.getLength$();
if (count != 2) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["dhtable node must have 2 attributes", node]);
}this.tableClass=$I$(1).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "class", 0, 1, true);
this.tableID=$I$(1).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "htableId", 0, 3, true);
if (Clazz.instanceOf(node, "javax.imageio.metadata.IIOMetadataNode")) {
var ourNode=node;
var table=ourNode.getUserObject$();
if (table == null ) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["dhtable node must have user object", node]);
}this.numCodes=table.getLengths$();
this.values=table.getValues$();
} else {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["dhtable node must have user object", node]);
}} else {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["Invalid node, expected dqtable", node]);
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
if (this.numCodes != null ) {
newGuy.numCodes=this.numCodes.clone$();
}if (this.values != null ) {
newGuy.values=this.values.clone$();
}return newGuy;
});

Clazz.newMeth(C$, 'getNativeNode$',  function () {
var node=Clazz.new_($I$(2,1).c$$S,["dhtable"]);
node.setAttribute$S$S("class", Integer.toString$I(this.tableClass));
node.setAttribute$S$S("htableId", Integer.toString$I(this.tableID));
node.setUserObject$O(Clazz.new_($I$(3,1).c$$HA$HA,[this.numCodes, this.values]));
return node;
});

Clazz.newMeth(C$, 'print$',  function () {
System.out.println$S("Huffman Table");
System.out.println$S("table class: " + ((this.tableClass == 0) ? "DC" : "AC"));
System.out.println$S("table id: " + Integer.toString$I(this.tableID));
(Clazz.new_($I$(3,1).c$$HA$HA,[this.numCodes, this.values])).toString();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:54 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
