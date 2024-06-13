(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.jpeg"),I$=[[0,'javax.imageio.plugins.jpeg.JPEGQTable','com.sun.imageio.plugins.jpeg.JPEG','com.sun.imageio.plugins.jpeg.MarkerSegment','javax.imageio.metadata.IIOMetadataNode','java.util.ArrayList',['com.sun.imageio.plugins.jpeg.DQTMarkerSegment','.Qtable']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DQTMarkerSegment", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'com.sun.imageio.plugins.jpeg.MarkerSegment');
C$.$classes$=[['Qtable',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.tables=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['O',['tables','java.util.List']]]

Clazz.newMeth(C$, 'c$$F$Z',  function (quality, needTwo) {
;C$.superclazz.c$$I.apply(this,[219]);C$.$init$.apply(this);
this.tables.add$O(Clazz.new_($I$(6,1).c$$Z$F,[this, null, true, quality]));
if (needTwo) {
this.tables.add$O(Clazz.new_($I$(6,1).c$$Z$F,[this, null, false, quality]));
}}, 1);

Clazz.newMeth(C$, 'c$$com_sun_imageio_plugins_jpeg_JPEGBuffer',  function (buffer) {
;C$.superclazz.c$$com_sun_imageio_plugins_jpeg_JPEGBuffer.apply(this,[buffer]);C$.$init$.apply(this);
var count=this.length;
while (count > 0){
var newGuy=Clazz.new_($I$(6,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer,[this, null, buffer]);
this.tables.add$O(newGuy);
count-=newGuy.data.length + 1;
}
buffer.bufAvail-=this.length;
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_plugins_jpeg_JPEGQTableA',  function (qtables) {
;C$.superclazz.c$$I.apply(this,[219]);C$.$init$.apply(this);
for (var i=0; i < qtables.length; i++) {
this.tables.add$O(Clazz.new_($I$(6,1).c$$javax_imageio_plugins_jpeg_JPEGQTable$I,[this, null, qtables[i], i]));
}
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node',  function (node) {
;C$.superclazz.c$$I.apply(this,[219]);C$.$init$.apply(this);
var children=node.getChildNodes$();
var size=children.getLength$();
if ((size < 1) || (size > 4) ) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["Invalid DQT node", node]);
}for (var i=0; i < size; i++) {
this.tables.add$O(Clazz.new_([this, null, children.item$I(i)],$I$(6,1).c$$org_w3c_dom_Node));
}
}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
var newGuy=C$.superclazz.prototype.clone$.apply(this, []);
newGuy.tables=Clazz.new_([this.tables.size$()],$I$(5,1).c$$I);
var iter=this.tables.iterator$();
while (iter.hasNext$()){
var table=iter.next$();
newGuy.tables.add$O(table.clone$());
}
return newGuy;
});

Clazz.newMeth(C$, 'getNativeNode$',  function () {
var node=Clazz.new_($I$(4,1).c$$S,["dqt"]);
for (var i=0; i < this.tables.size$(); i++) {
var table=this.tables.get$I(i);
node.appendChild$org_w3c_dom_Node(table.getNativeNode$());
}
return node;
});

Clazz.newMeth(C$, 'write$javax_imageio_stream_ImageOutputStream',  function (ios) {
});

Clazz.newMeth(C$, 'print$',  function () {
this.printTag$S("DQT");
System.out.println$S("Num tables: " + Integer.toString$I(this.tables.size$()));
for (var i=0; i < this.tables.size$(); i++) {
var table=this.tables.get$I(i);
table.print$();
}
System.out.println$();
});

Clazz.newMeth(C$, 'getChromaForLuma$com_sun_imageio_plugins_jpeg_DQTMarkerSegment_Qtable',  function (luma) {
var newGuy=null;
var allSame=true;
for (var i=1; i < luma.QTABLE_SIZE; i++) {
if (luma.data[i] != luma.data[i - 1]) {
allSame=false;
break;
}}
if (allSame) {
newGuy=luma.clone$();
newGuy.tableID=1;
} else {
var largestPos=0;
for (var i=1; i < luma.QTABLE_SIZE; i++) {
if (luma.data[i] > luma.data[largestPos]) {
largestPos=i;
}}
var scaleFactor=((luma.data[largestPos])) / (($I$(1).K1Div2Luminance.getTable$()[largestPos]));
var jpegTable=$I$(1).K2Div2Chrominance.getScaledInstance$F$Z(scaleFactor, true);
newGuy=Clazz.new_($I$(6,1).c$$javax_imageio_plugins_jpeg_JPEGQTable$I,[this, null, jpegTable, 1]);
}return newGuy;
});

Clazz.newMeth(C$, 'getQtableFromNode$org_w3c_dom_Node',  function (node) {
return Clazz.new_($I$(6,1).c$$org_w3c_dom_Node,[this, null, node]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.DQTMarkerSegment, "Qtable", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.QTABLE_SIZE=64;
this.zigzag=Clazz.array(Integer.TYPE, -1, [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63]);
},1);

C$.$fields$=[['I',['elementPrecision','tableID','QTABLE_SIZE'],'O',['data','int[]','+zigzag']]]

Clazz.newMeth(C$, 'c$$Z$F',  function (wantLuma, quality) {
;C$.$init$.apply(this);
this.elementPrecision=0;
var base=null;
if (wantLuma) {
this.tableID=0;
base=$I$(1).K1Div2Luminance;
} else {
this.tableID=1;
base=$I$(1).K2Div2Chrominance;
}if (quality != 0.75 ) {
quality=$I$(2).convertToLinearQuality$F(quality);
if (wantLuma) {
base=$I$(1).K1Luminance.getScaledInstance$F$Z(quality, true);
} else {
base=$I$(1).K2Div2Chrominance.getScaledInstance$F$Z(quality, true);
}}this.data=base.getTable$();
}, 1);

Clazz.newMeth(C$, 'c$$com_sun_imageio_plugins_jpeg_JPEGBuffer',  function (buffer) {
;C$.$init$.apply(this);
this.elementPrecision=buffer.buf[buffer.bufPtr] >>> 4;
this.tableID=buffer.buf[buffer.bufPtr++] & 15;
if (this.elementPrecision != 0) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Unsupported element precision"]);
}this.data=Clazz.array(Integer.TYPE, [64]);
for (var i=0; i < 64; i++) {
this.data[i]=buffer.buf[buffer.bufPtr + this.zigzag[i]] & 255;
}
buffer.bufPtr+=64;
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_plugins_jpeg_JPEGQTable$I',  function (table, id) {
;C$.$init$.apply(this);
this.elementPrecision=0;
this.tableID=id;
this.data=table.getTable$();
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node',  function (node) {
;C$.$init$.apply(this);
if (node.getNodeName$().equals$O("dqtable")) {
var attrs=node.getAttributes$();
var count=attrs.getLength$();
if ((count < 1) || (count > 2) ) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["dqtable node must have 1 or 2 attributes", node]);
}this.elementPrecision=0;
this.tableID=$I$(3).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "qtableId", 0, 3, true);
if (Clazz.instanceOf(node, "javax.imageio.metadata.IIOMetadataNode")) {
var ourNode=node;
var table=ourNode.getUserObject$();
if (table == null ) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["dqtable node must have user object", node]);
}this.data=table.getTable$();
} else {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["dqtable node must have user object", node]);
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
if (this.data != null ) {
newGuy.data=this.data.clone$();
}return newGuy;
});

Clazz.newMeth(C$, 'getNativeNode$',  function () {
var node=Clazz.new_($I$(4,1).c$$S,["dqtable"]);
node.setAttribute$S$S("elementPrecision", Integer.toString$I(this.elementPrecision));
node.setAttribute$S$S("qtableId", Integer.toString$I(this.tableID));
node.setUserObject$O(Clazz.new_($I$(1,1).c$$IA,[this.data]));
return node;
});

Clazz.newMeth(C$, 'print$',  function () {
System.out.println$S("Table id: " + Integer.toString$I(this.tableID));
System.out.println$S("Element precision: " + Integer.toString$I(this.elementPrecision));
(Clazz.new_($I$(1,1).c$$IA,[this.data])).toString();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:54 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
