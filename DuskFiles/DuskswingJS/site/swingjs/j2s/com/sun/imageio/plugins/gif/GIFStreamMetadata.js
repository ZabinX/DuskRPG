(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.gif"),p$1={},I$=[[0,'javax.imageio.metadata.IIOMetadataNode']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GIFStreamMetadata", null, 'com.sun.imageio.plugins.gif.GIFMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.globalColorTable=null;
},1);

C$.$fields$=[['Z',['sortFlag'],'I',['logicalScreenWidth','logicalScreenHeight','colorResolution','pixelAspectRatio','backgroundColorIndex'],'S',['version'],'O',['globalColorTable','byte[]']]
,['O',['versionStrings','String[]','+colorTableSizes']]]

Clazz.newMeth(C$, 'c$$Z$S$S$SA$SA',  function (standardMetadataFormatSupported, nativeMetadataFormatName, nativeMetadataFormatClassName, extraMetadataFormatNames, extraMetadataFormatClassNames) {
;C$.superclazz.c$$Z$S$S$SA$SA.apply(this,[standardMetadataFormatSupported, nativeMetadataFormatName, nativeMetadataFormatClassName, extraMetadataFormatNames, extraMetadataFormatClassNames]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$Z$S$S$SA$SA.apply(this, [true, "javax_imageio_gif_stream_1.0", "com.sun.imageio.plugins.gif.GIFStreamMetadataFormat", null, null]);
}, 1);

Clazz.newMeth(C$, 'isReadOnly$',  function () {
return true;
});

Clazz.newMeth(C$, 'getAsTree$S',  function (formatName) {
if (formatName.equals$O("javax_imageio_gif_stream_1.0")) {
return p$1.getNativeTree.apply(this, []);
} else if (formatName.equals$O("javax_imageio_1.0")) {
return this.getStandardTree$();
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a recognized format!"]);
}});

Clazz.newMeth(C$, 'getNativeTree',  function () {
var node;
var root=Clazz.new_($I$(1,1).c$$S,["javax_imageio_gif_stream_1.0"]);
node=Clazz.new_($I$(1,1).c$$S,["Version"]);
node.setAttribute$S$S("value", this.version);
root.appendChild$org_w3c_dom_Node(node);
node=Clazz.new_($I$(1,1).c$$S,["LogicalScreenDescriptor"]);
node.setAttribute$S$S("logicalScreenWidth", this.logicalScreenWidth == -1 ? "" : Integer.toString$I(this.logicalScreenWidth));
node.setAttribute$S$S("logicalScreenHeight", this.logicalScreenHeight == -1 ? "" : Integer.toString$I(this.logicalScreenHeight));
node.setAttribute$S$S("colorResolution", this.colorResolution == -1 ? "" : Integer.toString$I(this.colorResolution));
node.setAttribute$S$S("pixelAspectRatio", Integer.toString$I(this.pixelAspectRatio));
root.appendChild$org_w3c_dom_Node(node);
if (this.globalColorTable != null ) {
node=Clazz.new_($I$(1,1).c$$S,["GlobalColorTable"]);
var numEntries=(this.globalColorTable.length/3|0);
node.setAttribute$S$S("sizeOfGlobalColorTable", Integer.toString$I(numEntries));
node.setAttribute$S$S("backgroundColorIndex", Integer.toString$I(this.backgroundColorIndex));
node.setAttribute$S$S("sortFlag", this.sortFlag ? "TRUE" : "FALSE");
for (var i=0; i < numEntries; i++) {
var entry=Clazz.new_($I$(1,1).c$$S,["ColorTableEntry"]);
entry.setAttribute$S$S("index", Integer.toString$I(i));
var r=this.globalColorTable[3 * i] & 255;
var g=this.globalColorTable[3 * i + 1] & 255;
var b=this.globalColorTable[3 * i + 2] & 255;
entry.setAttribute$S$S("red", Integer.toString$I(r));
entry.setAttribute$S$S("green", Integer.toString$I(g));
entry.setAttribute$S$S("blue", Integer.toString$I(b));
node.appendChild$org_w3c_dom_Node(entry);
}
root.appendChild$org_w3c_dom_Node(node);
}return root;
}, p$1);

Clazz.newMeth(C$, 'getStandardChromaNode$',  function () {
var chroma_node=Clazz.new_($I$(1,1).c$$S,["Chroma"]);
var node=null;
node=Clazz.new_($I$(1,1).c$$S,["ColorSpaceType"]);
node.setAttribute$S$S("name", "RGB");
chroma_node.appendChild$org_w3c_dom_Node(node);
node=Clazz.new_($I$(1,1).c$$S,["BlackIsZero"]);
node.setAttribute$S$S("value", "TRUE");
chroma_node.appendChild$org_w3c_dom_Node(node);
if (this.globalColorTable != null ) {
node=Clazz.new_($I$(1,1).c$$S,["Palette"]);
var numEntries=(this.globalColorTable.length/3|0);
for (var i=0; i < numEntries; i++) {
var entry=Clazz.new_($I$(1,1).c$$S,["PaletteEntry"]);
entry.setAttribute$S$S("index", Integer.toString$I(i));
entry.setAttribute$S$S("red", Integer.toString$I(this.globalColorTable[3 * i] & 255));
entry.setAttribute$S$S("green", Integer.toString$I(this.globalColorTable[3 * i + 1] & 255));
entry.setAttribute$S$S("blue", Integer.toString$I(this.globalColorTable[3 * i + 2] & 255));
node.appendChild$org_w3c_dom_Node(entry);
}
chroma_node.appendChild$org_w3c_dom_Node(node);
node=Clazz.new_($I$(1,1).c$$S,["BackgroundIndex"]);
node.setAttribute$S$S("value", Integer.toString$I(this.backgroundColorIndex));
chroma_node.appendChild$org_w3c_dom_Node(node);
}return chroma_node;
});

Clazz.newMeth(C$, 'getStandardCompressionNode$',  function () {
var compression_node=Clazz.new_($I$(1,1).c$$S,["Compression"]);
var node=null;
node=Clazz.new_($I$(1,1).c$$S,["CompressionTypeName"]);
node.setAttribute$S$S("value", "lzw");
compression_node.appendChild$org_w3c_dom_Node(node);
node=Clazz.new_($I$(1,1).c$$S,["Lossless"]);
node.setAttribute$S$S("value", "TRUE");
compression_node.appendChild$org_w3c_dom_Node(node);
return compression_node;
});

Clazz.newMeth(C$, 'getStandardDataNode$',  function () {
var data_node=Clazz.new_($I$(1,1).c$$S,["Data"]);
var node=null;
node=Clazz.new_($I$(1,1).c$$S,["SampleFormat"]);
node.setAttribute$S$S("value", "Index");
data_node.appendChild$org_w3c_dom_Node(node);
node=Clazz.new_($I$(1,1).c$$S,["BitsPerSample"]);
node.setAttribute$S$S("value", this.colorResolution == -1 ? "" : Integer.toString$I(this.colorResolution));
data_node.appendChild$org_w3c_dom_Node(node);
return data_node;
});

Clazz.newMeth(C$, 'getStandardDimensionNode$',  function () {
var dimension_node=Clazz.new_($I$(1,1).c$$S,["Dimension"]);
var node=null;
node=Clazz.new_($I$(1,1).c$$S,["PixelAspectRatio"]);
var aspectRatio=1.0;
if (this.pixelAspectRatio != 0) {
aspectRatio=(this.pixelAspectRatio + 15) / 64.0;
}node.setAttribute$S$S("value", Float.toString$F(aspectRatio));
dimension_node.appendChild$org_w3c_dom_Node(node);
node=Clazz.new_($I$(1,1).c$$S,["ImageOrientation"]);
node.setAttribute$S$S("value", "Normal");
dimension_node.appendChild$org_w3c_dom_Node(node);
node=Clazz.new_($I$(1,1).c$$S,["HorizontalScreenSize"]);
node.setAttribute$S$S("value", this.logicalScreenWidth == -1 ? "" : Integer.toString$I(this.logicalScreenWidth));
dimension_node.appendChild$org_w3c_dom_Node(node);
node=Clazz.new_($I$(1,1).c$$S,["VerticalScreenSize"]);
node.setAttribute$S$S("value", this.logicalScreenHeight == -1 ? "" : Integer.toString$I(this.logicalScreenHeight));
dimension_node.appendChild$org_w3c_dom_Node(node);
return dimension_node;
});

Clazz.newMeth(C$, 'getStandardDocumentNode$',  function () {
var document_node=Clazz.new_($I$(1,1).c$$S,["Document"]);
var node=null;
node=Clazz.new_($I$(1,1).c$$S,["FormatVersion"]);
node.setAttribute$S$S("value", this.version);
document_node.appendChild$org_w3c_dom_Node(node);
return document_node;
});

Clazz.newMeth(C$, 'getStandardTextNode$',  function () {
return null;
});

Clazz.newMeth(C$, 'getStandardTransparencyNode$',  function () {
return null;
});

Clazz.newMeth(C$, 'setFromTree$S$org_w3c_dom_Node',  function (formatName, root) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Metadata is read-only!"]);
});

Clazz.newMeth(C$, 'mergeNativeTree$org_w3c_dom_Node',  function (root) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Metadata is read-only!"]);
});

Clazz.newMeth(C$, 'mergeStandardTree$org_w3c_dom_Node',  function (root) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Metadata is read-only!"]);
});

Clazz.newMeth(C$, 'reset$',  function () {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Metadata is read-only!"]);
});

C$.$static$=function(){C$.$static$=0;
C$.versionStrings=Clazz.array(String, -1, ["87a", "89a"]);
C$.colorTableSizes=Clazz.array(String, -1, ["2", "4", "8", "16", "32", "64", "128", "256"]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:53 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
