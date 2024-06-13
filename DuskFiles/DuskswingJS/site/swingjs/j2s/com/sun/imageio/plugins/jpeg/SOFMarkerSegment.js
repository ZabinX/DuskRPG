(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.jpeg"),I$=[[0,'com.sun.imageio.plugins.jpeg.MarkerSegment','javax.imageio.metadata.IIOMetadataNode',['com.sun.imageio.plugins.jpeg.SOFMarkerSegment','.ComponentSpec']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SOFMarkerSegment", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'com.sun.imageio.plugins.jpeg.MarkerSegment');
C$.$classes$=[['ComponentSpec',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['samplePrecision','numLines','samplesPerLine'],'O',['componentSpecs','com.sun.imageio.plugins.jpeg.SOFMarkerSegment.ComponentSpec[]']]]

Clazz.newMeth(C$, 'c$$Z$Z$Z$BA$I',  function (wantProg, wantExtended, willSubsample, componentIDs, numComponents) {
;C$.superclazz.c$$I.apply(this,[wantProg ? 194 : wantExtended ? 193 : 192]);C$.$init$.apply(this);
this.samplePrecision=8;
this.numLines=0;
this.samplesPerLine=0;
this.componentSpecs=Clazz.array($I$(3), [numComponents]);
for (var i=0; i < numComponents; i++) {
var factor=1;
var qsel=0;
if (willSubsample) {
factor=2;
if ((i == 1) || (i == 2) ) {
factor=1;
qsel=1;
}}this.componentSpecs[i]=Clazz.new_($I$(3,1).c$$B$I$I,[this, null, componentIDs[i], factor, qsel]);
}
}, 1);

Clazz.newMeth(C$, 'c$$com_sun_imageio_plugins_jpeg_JPEGBuffer',  function (buffer) {
;C$.superclazz.c$$com_sun_imageio_plugins_jpeg_JPEGBuffer.apply(this,[buffer]);C$.$init$.apply(this);
this.samplePrecision=buffer.buf[buffer.bufPtr++];
this.numLines=(buffer.buf[buffer.bufPtr++] & 255) << 8;
this.numLines|=buffer.buf[buffer.bufPtr++] & 255;
this.samplesPerLine=(buffer.buf[buffer.bufPtr++] & 255) << 8;
this.samplesPerLine|=buffer.buf[buffer.bufPtr++] & 255;
var numComponents=buffer.buf[buffer.bufPtr++] & 255;
this.componentSpecs=Clazz.array($I$(3), [numComponents]);
for (var i=0; i < numComponents; i++) {
this.componentSpecs[i]=Clazz.new_($I$(3,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer,[this, null, buffer]);
}
buffer.bufAvail-=this.length;
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node',  function (node) {
;C$.superclazz.c$$I.apply(this,[192]);C$.$init$.apply(this);
this.samplePrecision=8;
this.numLines=0;
this.samplesPerLine=0;
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
var node=Clazz.new_($I$(2,1).c$$S,["sof"]);
node.setAttribute$S$S("process", Integer.toString$I(this.tag - 192));
node.setAttribute$S$S("samplePrecision", Integer.toString$I(this.samplePrecision));
node.setAttribute$S$S("numLines", Integer.toString$I(this.numLines));
node.setAttribute$S$S("samplesPerLine", Integer.toString$I(this.samplesPerLine));
node.setAttribute$S$S("numFrameComponents", Integer.toString$I(this.componentSpecs.length));
for (var i=0; i < this.componentSpecs.length; i++) {
node.appendChild$org_w3c_dom_Node(this.componentSpecs[i].getNativeNode$());
}
return node;
});

Clazz.newMeth(C$, 'updateFromNativeNode$org_w3c_dom_Node$Z',  function (node, fromScratch) {
var attrs=node.getAttributes$();
var value=$I$(1).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "process", 0, 2, false);
this.tag=(value != -1) ? value + 192 : this.tag;
value=$I$(1).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "samplePrecision", 8, 8, false);
value=$I$(1).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "numLines", 0, 65535, false);
this.numLines=(value != -1) ? value : this.numLines;
value=$I$(1).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "samplesPerLine", 0, 65535, false);
this.samplesPerLine=(value != -1) ? value : this.samplesPerLine;
var numComponents=$I$(1).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "numFrameComponents", 1, 4, false);
var children=node.getChildNodes$();
if (children.getLength$() != numComponents) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["numFrameComponents must match number of children", node]);
}this.componentSpecs=Clazz.array($I$(3), [numComponents]);
for (var i=0; i < numComponents; i++) {
this.componentSpecs[i]=Clazz.new_([this, null, children.item$I(i)],$I$(3,1).c$$org_w3c_dom_Node);
}
});

Clazz.newMeth(C$, 'write$javax_imageio_stream_ImageOutputStream',  function (ios) {
});

Clazz.newMeth(C$, 'print$',  function () {
this.printTag$S("SOF");
System.out.print$S("Sample precision: ");
System.out.println$I(this.samplePrecision);
System.out.print$S("Number of lines: ");
System.out.println$I(this.numLines);
System.out.print$S("Samples per line: ");
System.out.println$I(this.samplesPerLine);
System.out.print$S("Number of components: ");
System.out.println$I(this.componentSpecs.length);
for (var i=0; i < this.componentSpecs.length; i++) {
this.componentSpecs[i].print$();
}
});

Clazz.newMeth(C$, 'getIDencodedCSType$',  function () {
for (var i=0; i < this.componentSpecs.length; i++) {
if (this.componentSpecs[i].componentId < 65 ) {
return 0;
}}
switch (this.componentSpecs.length) {
case 3:
if ((this.componentSpecs[0].componentId == 82 ) && (this.componentSpecs[0].componentId == 71 ) && (this.componentSpecs[0].componentId == 66 )  ) {
return 2;
}if ((this.componentSpecs[0].componentId == 89 ) && (this.componentSpecs[0].componentId == 67 ) && (this.componentSpecs[0].componentId == 99 )  ) {
return 5;
}break;
case 4:
if ((this.componentSpecs[0].componentId == 82 ) && (this.componentSpecs[0].componentId == 71 ) && (this.componentSpecs[0].componentId == 66 ) && (this.componentSpecs[0].componentId == 65 )  ) {
return 6;
}if ((this.componentSpecs[0].componentId == 89 ) && (this.componentSpecs[0].componentId == 67 ) && (this.componentSpecs[0].componentId == 99 ) && (this.componentSpecs[0].componentId == 65 )  ) {
return 10;
}}
return 0;
});

Clazz.newMeth(C$, 'getComponentSpec$B$I$I',  function (id, factor, qSelector) {
return Clazz.new_($I$(3,1).c$$B$I$I,[this, null, id, factor, qSelector]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.SOFMarkerSegment, "ComponentSpec", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['componentId','HsamplingFactor','VsamplingFactor','QtableSelector']]]

Clazz.newMeth(C$, 'c$$B$I$I',  function (id, factor, qSelector) {
;C$.$init$.apply(this);
this.componentId=id;
this.HsamplingFactor=factor;
this.VsamplingFactor=factor;
this.QtableSelector=qSelector;
}, 1);

Clazz.newMeth(C$, 'c$$com_sun_imageio_plugins_jpeg_JPEGBuffer',  function (buffer) {
;C$.$init$.apply(this);
this.componentId=buffer.buf[buffer.bufPtr++];
this.HsamplingFactor=buffer.buf[buffer.bufPtr] >>> 4;
this.VsamplingFactor=buffer.buf[buffer.bufPtr++] & 15;
this.QtableSelector=buffer.buf[buffer.bufPtr++];
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node',  function (node) {
;C$.$init$.apply(this);
var attrs=node.getAttributes$();
this.componentId=$I$(1).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "componentId", 0, 255, true);
this.HsamplingFactor=$I$(1).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "HsamplingFactor", 1, 255, true);
this.VsamplingFactor=$I$(1).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "VsamplingFactor", 1, 255, true);
this.QtableSelector=$I$(1).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "QtableSelector", 0, 3, true);
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
var node=Clazz.new_($I$(2,1).c$$S,["componentSpec"]);
node.setAttribute$S$S("componentId", Integer.toString$I(this.componentId));
node.setAttribute$S$S("HsamplingFactor", Integer.toString$I(this.HsamplingFactor));
node.setAttribute$S$S("VsamplingFactor", Integer.toString$I(this.VsamplingFactor));
node.setAttribute$S$S("QtableSelector", Integer.toString$I(this.QtableSelector));
return node;
});

Clazz.newMeth(C$, 'print$',  function () {
System.out.print$S("Component ID: ");
System.out.println$I(this.componentId);
System.out.print$S("H sampling factor: ");
System.out.println$I(this.HsamplingFactor);
System.out.print$S("V sampling factor: ");
System.out.println$I(this.VsamplingFactor);
System.out.print$S("Q table selector: ");
System.out.println$I(this.QtableSelector);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:55 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
