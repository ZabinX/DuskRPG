(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.jpeg"),I$=[[0,'com.sun.imageio.plugins.jpeg.MarkerSegment','javax.imageio.metadata.IIOMetadataNode',['com.sun.imageio.plugins.jpeg.SOSMarkerSegment','.ScanComponentSpec']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SOSMarkerSegment", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'com.sun.imageio.plugins.jpeg.MarkerSegment');
C$.$classes$=[['ScanComponentSpec',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['startSpectralSelection','endSpectralSelection','approxHigh','approxLow'],'O',['componentSpecs','com.sun.imageio.plugins.jpeg.SOSMarkerSegment.ScanComponentSpec[]']]]

Clazz.newMeth(C$, 'c$$Z$BA$I',  function (willSubsample, componentIDs, numComponents) {
;C$.superclazz.c$$I.apply(this,[218]);C$.$init$.apply(this);
this.startSpectralSelection=0;
this.endSpectralSelection=63;
this.approxHigh=0;
this.approxLow=0;
this.componentSpecs=Clazz.array($I$(3), [numComponents]);
for (var i=0; i < numComponents; i++) {
var tableSel=0;
if (willSubsample) {
if ((i == 1) || (i == 2) ) {
tableSel=1;
}}this.componentSpecs[i]=Clazz.new_($I$(3,1).c$$B$I,[this, null, componentIDs[i], tableSel]);
}
}, 1);

Clazz.newMeth(C$, 'c$$com_sun_imageio_plugins_jpeg_JPEGBuffer',  function (buffer) {
;C$.superclazz.c$$com_sun_imageio_plugins_jpeg_JPEGBuffer.apply(this,[buffer]);C$.$init$.apply(this);
var numComponents=buffer.buf[buffer.bufPtr++];
this.componentSpecs=Clazz.array($I$(3), [numComponents]);
for (var i=0; i < numComponents; i++) {
this.componentSpecs[i]=Clazz.new_($I$(3,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer,[this, null, buffer]);
}
this.startSpectralSelection=buffer.buf[buffer.bufPtr++];
this.endSpectralSelection=buffer.buf[buffer.bufPtr++];
this.approxHigh=buffer.buf[buffer.bufPtr] >> 4;
this.approxLow=buffer.buf[buffer.bufPtr++] & 15;
buffer.bufAvail-=this.length;
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node',  function (node) {
;C$.superclazz.c$$I.apply(this,[218]);C$.$init$.apply(this);
this.startSpectralSelection=0;
this.endSpectralSelection=63;
this.approxHigh=0;
this.approxLow=0;
this.updateFromNativeNode$org_w3c_dom_Node$Z(node, true);
}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
var newGuy=C$.superclazz.prototype.clone$.apply(this, []);
if (this.componentSpecs != null ) {
newGuy.componentSpecs=this.componentSpecs.clone$();
for (var i=0; i < this.componentSpecs.length; i++) {
newGuy.componentSpecs[i]=this.componentSpecs[i].clone$();
}
}return newGuy;
});

Clazz.newMeth(C$, 'getNativeNode$',  function () {
var node=Clazz.new_($I$(2,1).c$$S,["sos"]);
node.setAttribute$S$S("numScanComponents", Integer.toString$I(this.componentSpecs.length));
node.setAttribute$S$S("startSpectralSelection", Integer.toString$I(this.startSpectralSelection));
node.setAttribute$S$S("endSpectralSelection", Integer.toString$I(this.endSpectralSelection));
node.setAttribute$S$S("approxHigh", Integer.toString$I(this.approxHigh));
node.setAttribute$S$S("approxLow", Integer.toString$I(this.approxLow));
for (var i=0; i < this.componentSpecs.length; i++) {
node.appendChild$org_w3c_dom_Node(this.componentSpecs[i].getNativeNode$());
}
return node;
});

Clazz.newMeth(C$, 'updateFromNativeNode$org_w3c_dom_Node$Z',  function (node, fromScratch) {
var attrs=node.getAttributes$();
var numComponents=$I$(1).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "numScanComponents", 1, 4, true);
var value=$I$(1).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "startSpectralSelection", 0, 63, false);
this.startSpectralSelection=(value != -1) ? value : this.startSpectralSelection;
value=$I$(1).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "endSpectralSelection", 0, 63, false);
this.endSpectralSelection=(value != -1) ? value : this.endSpectralSelection;
value=$I$(1).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "approxHigh", 0, 15, false);
this.approxHigh=(value != -1) ? value : this.approxHigh;
value=$I$(1).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "approxLow", 0, 15, false);
this.approxLow=(value != -1) ? value : this.approxLow;
var children=node.getChildNodes$();
if (children.getLength$() != numComponents) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["numScanComponents must match the number of children", node]);
}this.componentSpecs=Clazz.array($I$(3), [numComponents]);
for (var i=0; i < numComponents; i++) {
this.componentSpecs[i]=Clazz.new_([this, null, children.item$I(i)],$I$(3,1).c$$org_w3c_dom_Node);
}
});

Clazz.newMeth(C$, 'write$javax_imageio_stream_ImageOutputStream',  function (ios) {
});

Clazz.newMeth(C$, 'print$',  function () {
this.printTag$S("SOS");
System.out.print$S("Start spectral selection: ");
System.out.println$I(this.startSpectralSelection);
System.out.print$S("End spectral selection: ");
System.out.println$I(this.endSpectralSelection);
System.out.print$S("Approx high: ");
System.out.println$I(this.approxHigh);
System.out.print$S("Approx low: ");
System.out.println$I(this.approxLow);
System.out.print$S("Num scan components: ");
System.out.println$I(this.componentSpecs.length);
for (var i=0; i < this.componentSpecs.length; i++) {
this.componentSpecs[i].print$();
}
});

Clazz.newMeth(C$, 'getScanComponentSpec$B$I',  function (componentSel, tableSel) {
return Clazz.new_($I$(3,1).c$$B$I,[this, null, componentSel, tableSel]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.SOSMarkerSegment, "ScanComponentSpec", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['componentSelector','dcHuffTable','acHuffTable']]]

Clazz.newMeth(C$, 'c$$B$I',  function (componentSel, tableSel) {
;C$.$init$.apply(this);
this.componentSelector=componentSel;
this.dcHuffTable=tableSel;
this.acHuffTable=tableSel;
}, 1);

Clazz.newMeth(C$, 'c$$com_sun_imageio_plugins_jpeg_JPEGBuffer',  function (buffer) {
;C$.$init$.apply(this);
this.componentSelector=buffer.buf[buffer.bufPtr++];
this.dcHuffTable=buffer.buf[buffer.bufPtr] >> 4;
this.acHuffTable=buffer.buf[buffer.bufPtr++] & 15;
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node',  function (node) {
;C$.$init$.apply(this);
var attrs=node.getAttributes$();
this.componentSelector=$I$(1).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "componentSelector", 0, 255, true);
this.dcHuffTable=$I$(1).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "dcHuffTable", 0, 3, true);
this.acHuffTable=$I$(1).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "acHuffTable", 0, 3, true);
}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
} else {
throw e;
}
}
return null;
});

Clazz.newMeth(C$, 'getNativeNode$',  function () {
var node=Clazz.new_($I$(2,1).c$$S,["scanComponentSpec"]);
node.setAttribute$S$S("componentSelector", Integer.toString$I(this.componentSelector));
node.setAttribute$S$S("dcHuffTable", Integer.toString$I(this.dcHuffTable));
node.setAttribute$S$S("acHuffTable", Integer.toString$I(this.acHuffTable));
return node;
});

Clazz.newMeth(C$, 'print$',  function () {
System.out.print$S("Component Selector: ");
System.out.println$I(this.componentSelector);
System.out.print$S("DC huffman table: ");
System.out.println$I(this.dcHuffTable);
System.out.print$S("AC huffman table: ");
System.out.println$I(this.acHuffTable);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:55 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
