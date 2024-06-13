(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.gif"),p$1={},I$=[[0,'javax.imageio.metadata.IIOMetadataNode']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GIFImageMetadata", null, 'com.sun.imageio.plugins.gif.GIFMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.interlaceFlag=false;
this.sortFlag=false;
this.localColorTable=null;
this.disposalMethod=0;
this.userInputFlag=false;
this.transparentColorFlag=false;
this.delayTime=0;
this.transparentColorIndex=0;
this.hasPlainTextExtension=false;
this.applicationIDs=null;
this.authenticationCodes=null;
this.applicationData=null;
this.comments=null;
},1);

C$.$fields$=[['Z',['interlaceFlag','sortFlag','userInputFlag','transparentColorFlag','hasPlainTextExtension'],'I',['imageLeftPosition','imageTopPosition','imageWidth','imageHeight','disposalMethod','delayTime','transparentColorIndex','textGridLeft','textGridTop','textGridWidth','textGridHeight','characterCellWidth','characterCellHeight','textForegroundColor','textBackgroundColor'],'O',['localColorTable','byte[]','+text','applicationIDs','java.util.List','+authenticationCodes','+applicationData','+comments']]
,['O',['disposalMethodNames','String[]']]]

Clazz.newMeth(C$, 'c$$Z$S$S$SA$SA',  function (standardMetadataFormatSupported, nativeMetadataFormatName, nativeMetadataFormatClassName, extraMetadataFormatNames, extraMetadataFormatClassNames) {
;C$.superclazz.c$$Z$S$S$SA$SA.apply(this,[standardMetadataFormatSupported, nativeMetadataFormatName, nativeMetadataFormatClassName, extraMetadataFormatNames, extraMetadataFormatClassNames]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$Z$S$S$SA$SA.apply(this, [true, "javax_imageio_gif_image_1.0", "com.sun.imageio.plugins.gif.GIFImageMetadataFormat", null, null]);
}, 1);

Clazz.newMeth(C$, 'isReadOnly$',  function () {
return true;
});

Clazz.newMeth(C$, 'getAsTree$S',  function (formatName) {
if (formatName.equals$O("javax_imageio_gif_image_1.0")) {
return p$1.getNativeTree.apply(this, []);
} else if (formatName.equals$O("javax_imageio_1.0")) {
return this.getStandardTree$();
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a recognized format!"]);
}});

Clazz.newMeth(C$, 'toISO8859$BA',  function (data) {
try {
return  String.instantialize(data, "ISO-8859-1");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
return "";
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'getNativeTree',  function () {
var node;
var root=Clazz.new_($I$(1,1).c$$S,["javax_imageio_gif_image_1.0"]);
node=Clazz.new_($I$(1,1).c$$S,["ImageDescriptor"]);
node.setAttribute$S$S("imageLeftPosition", Integer.toString$I(this.imageLeftPosition));
node.setAttribute$S$S("imageTopPosition", Integer.toString$I(this.imageTopPosition));
node.setAttribute$S$S("imageWidth", Integer.toString$I(this.imageWidth));
node.setAttribute$S$S("imageHeight", Integer.toString$I(this.imageHeight));
node.setAttribute$S$S("interlaceFlag", this.interlaceFlag ? "TRUE" : "FALSE");
root.appendChild$org_w3c_dom_Node(node);
if (this.localColorTable != null ) {
node=Clazz.new_($I$(1,1).c$$S,["LocalColorTable"]);
var numEntries=(this.localColorTable.length/3|0);
node.setAttribute$S$S("sizeOfLocalColorTable", Integer.toString$I(numEntries));
node.setAttribute$S$S("sortFlag", this.sortFlag ? "TRUE" : "FALSE");
for (var i=0; i < numEntries; i++) {
var entry=Clazz.new_($I$(1,1).c$$S,["ColorTableEntry"]);
entry.setAttribute$S$S("index", Integer.toString$I(i));
var r=this.localColorTable[3 * i] & 255;
var g=this.localColorTable[3 * i + 1] & 255;
var b=this.localColorTable[3 * i + 2] & 255;
entry.setAttribute$S$S("red", Integer.toString$I(r));
entry.setAttribute$S$S("green", Integer.toString$I(g));
entry.setAttribute$S$S("blue", Integer.toString$I(b));
node.appendChild$org_w3c_dom_Node(entry);
}
root.appendChild$org_w3c_dom_Node(node);
}node=Clazz.new_($I$(1,1).c$$S,["GraphicControlExtension"]);
node.setAttribute$S$S("disposalMethod", C$.disposalMethodNames[this.disposalMethod]);
node.setAttribute$S$S("userInputFlag", this.userInputFlag ? "TRUE" : "FALSE");
node.setAttribute$S$S("transparentColorFlag", this.transparentColorFlag ? "TRUE" : "FALSE");
node.setAttribute$S$S("delayTime", Integer.toString$I(this.delayTime));
node.setAttribute$S$S("transparentColorIndex", Integer.toString$I(this.transparentColorIndex));
root.appendChild$org_w3c_dom_Node(node);
if (this.hasPlainTextExtension) {
node=Clazz.new_($I$(1,1).c$$S,["PlainTextExtension"]);
node.setAttribute$S$S("textGridLeft", Integer.toString$I(this.textGridLeft));
node.setAttribute$S$S("textGridTop", Integer.toString$I(this.textGridTop));
node.setAttribute$S$S("textGridWidth", Integer.toString$I(this.textGridWidth));
node.setAttribute$S$S("textGridHeight", Integer.toString$I(this.textGridHeight));
node.setAttribute$S$S("characterCellWidth", Integer.toString$I(this.characterCellWidth));
node.setAttribute$S$S("characterCellHeight", Integer.toString$I(this.characterCellHeight));
node.setAttribute$S$S("textForegroundColor", Integer.toString$I(this.textForegroundColor));
node.setAttribute$S$S("textBackgroundColor", Integer.toString$I(this.textBackgroundColor));
node.setAttribute$S$S("text", p$1.toISO8859$BA.apply(this, [this.text]));
root.appendChild$org_w3c_dom_Node(node);
}var numAppExtensions=this.applicationIDs == null  ? 0 : this.applicationIDs.size$();
if (numAppExtensions > 0) {
node=Clazz.new_($I$(1,1).c$$S,["ApplicationExtensions"]);
for (var i=0; i < numAppExtensions; i++) {
var appExtNode=Clazz.new_($I$(1,1).c$$S,["ApplicationExtension"]);
var applicationID=this.applicationIDs.get$I(i);
appExtNode.setAttribute$S$S("applicationID", p$1.toISO8859$BA.apply(this, [applicationID]));
var authenticationCode=this.authenticationCodes.get$I(i);
appExtNode.setAttribute$S$S("authenticationCode", p$1.toISO8859$BA.apply(this, [authenticationCode]));
var appData=this.applicationData.get$I(i);
appExtNode.setUserObject$O(appData.clone$());
node.appendChild$org_w3c_dom_Node(appExtNode);
}
root.appendChild$org_w3c_dom_Node(node);
}var numComments=this.comments == null  ? 0 : this.comments.size$();
if (numComments > 0) {
node=Clazz.new_($I$(1,1).c$$S,["CommentExtensions"]);
for (var i=0; i < numComments; i++) {
var commentNode=Clazz.new_($I$(1,1).c$$S,["CommentExtension"]);
var comment=this.comments.get$I(i);
commentNode.setAttribute$S$S("value", p$1.toISO8859$BA.apply(this, [comment]));
node.appendChild$org_w3c_dom_Node(commentNode);
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
node=Clazz.new_($I$(1,1).c$$S,["NumChannels"]);
node.setAttribute$S$S("value", this.transparentColorFlag ? "4" : "3");
chroma_node.appendChild$org_w3c_dom_Node(node);
node=Clazz.new_($I$(1,1).c$$S,["BlackIsZero"]);
node.setAttribute$S$S("value", "TRUE");
chroma_node.appendChild$org_w3c_dom_Node(node);
if (this.localColorTable != null ) {
node=Clazz.new_($I$(1,1).c$$S,["Palette"]);
var numEntries=(this.localColorTable.length/3|0);
for (var i=0; i < numEntries; i++) {
var entry=Clazz.new_($I$(1,1).c$$S,["PaletteEntry"]);
entry.setAttribute$S$S("index", Integer.toString$I(i));
entry.setAttribute$S$S("red", Integer.toString$I(this.localColorTable[3 * i] & 255));
entry.setAttribute$S$S("green", Integer.toString$I(this.localColorTable[3 * i + 1] & 255));
entry.setAttribute$S$S("blue", Integer.toString$I(this.localColorTable[3 * i + 2] & 255));
node.appendChild$org_w3c_dom_Node(entry);
}
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
node=Clazz.new_($I$(1,1).c$$S,["NumProgressiveScans"]);
node.setAttribute$S$S("value", this.interlaceFlag ? "4" : "1");
compression_node.appendChild$org_w3c_dom_Node(node);
return compression_node;
});

Clazz.newMeth(C$, 'getStandardDataNode$',  function () {
var data_node=Clazz.new_($I$(1,1).c$$S,["Data"]);
var node=null;
node=Clazz.new_($I$(1,1).c$$S,["SampleFormat"]);
node.setAttribute$S$S("value", "Index");
data_node.appendChild$org_w3c_dom_Node(node);
return data_node;
});

Clazz.newMeth(C$, 'getStandardDimensionNode$',  function () {
var dimension_node=Clazz.new_($I$(1,1).c$$S,["Dimension"]);
var node=null;
node=Clazz.new_($I$(1,1).c$$S,["ImageOrientation"]);
node.setAttribute$S$S("value", "Normal");
dimension_node.appendChild$org_w3c_dom_Node(node);
node=Clazz.new_($I$(1,1).c$$S,["HorizontalPixelOffset"]);
node.setAttribute$S$S("value", Integer.toString$I(this.imageLeftPosition));
dimension_node.appendChild$org_w3c_dom_Node(node);
node=Clazz.new_($I$(1,1).c$$S,["VerticalPixelOffset"]);
node.setAttribute$S$S("value", Integer.toString$I(this.imageTopPosition));
dimension_node.appendChild$org_w3c_dom_Node(node);
return dimension_node;
});

Clazz.newMeth(C$, 'getStandardTextNode$',  function () {
if (this.comments == null ) {
return null;
}var commentIter=this.comments.iterator$();
if (!commentIter.hasNext$()) {
return null;
}var text_node=Clazz.new_($I$(1,1).c$$S,["Text"]);
var node=null;
while (commentIter.hasNext$()){
var comment=commentIter.next$();
var s=null;
try {
s= String.instantialize(comment, "ISO-8859-1");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Encoding ISO-8859-1 unknown!"]);
} else {
throw e;
}
}
node=Clazz.new_($I$(1,1).c$$S,["TextEntry"]);
node.setAttribute$S$S("value", s);
node.setAttribute$S$S("encoding", "ISO-8859-1");
node.setAttribute$S$S("compression", "none");
text_node.appendChild$org_w3c_dom_Node(node);
}
return text_node;
});

Clazz.newMeth(C$, 'getStandardTransparencyNode$',  function () {
if (!this.transparentColorFlag) {
return null;
}var transparency_node=Clazz.new_($I$(1,1).c$$S,["Transparency"]);
var node=null;
node=Clazz.new_($I$(1,1).c$$S,["TransparentIndex"]);
node.setAttribute$S$S("value", Integer.toString$I(this.transparentColorIndex));
transparency_node.appendChild$org_w3c_dom_Node(node);
return transparency_node;
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
C$.disposalMethodNames=Clazz.array(String, -1, ["none", "doNotDispose", "restoreToBackgroundColor", "restoreToPrevious", "undefinedDisposalMethod4", "undefinedDisposalMethod5", "undefinedDisposalMethod6", "undefinedDisposalMethod7"]);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:53 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
