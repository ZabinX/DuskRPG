(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.gif"),p$1={},I$=[[0,'com.sun.imageio.plugins.gif.GIFMetadata','com.sun.imageio.plugins.gif.GIFImageMetadata','java.util.ArrayList','java.nio.charset.Charset']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GIFWritableImageMetadata", null, 'com.sun.imageio.plugins.gif.GIFImageMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$Z$S$S$SA$SA.apply(this,[true, "javax_imageio_gif_image_1.0", "com.sun.imageio.plugins.gif.GIFImageMetadataFormat", null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isReadOnly$',  function () {
return false;
});

Clazz.newMeth(C$, 'reset$',  function () {
this.imageLeftPosition=0;
this.imageTopPosition=0;
this.imageWidth=0;
this.imageHeight=0;
this.interlaceFlag=false;
this.sortFlag=false;
this.localColorTable=null;
this.disposalMethod=0;
this.userInputFlag=false;
this.transparentColorFlag=false;
this.delayTime=0;
this.transparentColorIndex=0;
this.hasPlainTextExtension=false;
this.textGridLeft=0;
this.textGridTop=0;
this.textGridWidth=0;
this.textGridHeight=0;
this.characterCellWidth=0;
this.characterCellHeight=0;
this.textForegroundColor=0;
this.textBackgroundColor=0;
this.text=null;
this.applicationIDs=null;
this.authenticationCodes=null;
this.applicationData=null;
this.comments=null;
});

Clazz.newMeth(C$, 'fromISO8859$S',  function (data) {
try {
return data.getBytes$S("ISO-8859-1");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
return "".getBytes$();
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'mergeNativeTree$org_w3c_dom_Node',  function (root) {
var node=root;
if (!node.getNodeName$().equals$O("javax_imageio_gif_image_1.0")) {
$I$(1).fatal$org_w3c_dom_Node$S(node, "Root must be javax_imageio_gif_image_1.0");
}node=node.getFirstChild$();
while (node != null ){
var name=node.getNodeName$();
if (name.equals$O("ImageDescriptor")) {
this.imageLeftPosition=$I$(1).getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(node, "imageLeftPosition", -1, true, true, 0, 65535);
this.imageTopPosition=$I$(1).getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(node, "imageTopPosition", -1, true, true, 0, 65535);
this.imageWidth=$I$(1).getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(node, "imageWidth", -1, true, true, 1, 65535);
this.imageHeight=$I$(1).getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(node, "imageHeight", -1, true, true, 1, 65535);
this.interlaceFlag=$I$(1).getBooleanAttribute$org_w3c_dom_Node$S$Z$Z(node, "interlaceFlag", false, true);
} else if (name.equals$O("LocalColorTable")) {
var sizeOfLocalColorTable=$I$(1).getIntAttribute$org_w3c_dom_Node$S$Z$I$I(node, "sizeOfLocalColorTable", true, 2, 256);
if (sizeOfLocalColorTable != 2 && sizeOfLocalColorTable != 4  && sizeOfLocalColorTable != 8  && sizeOfLocalColorTable != 16  && sizeOfLocalColorTable != 32  && sizeOfLocalColorTable != 64  && sizeOfLocalColorTable != 128  && sizeOfLocalColorTable != 256 ) {
$I$(1).fatal$org_w3c_dom_Node$S(node, "Bad value for LocalColorTable attribute sizeOfLocalColorTable!");
}this.sortFlag=$I$(1).getBooleanAttribute$org_w3c_dom_Node$S$Z$Z(node, "sortFlag", false, true);
this.localColorTable=this.getColorTable$org_w3c_dom_Node$S$Z$I(node, "ColorTableEntry", true, sizeOfLocalColorTable);
} else if (name.equals$O("GraphicControlExtension")) {
var disposalMethodName=$I$(1,"getStringAttribute$org_w3c_dom_Node$S$S$Z$SA",[node, "disposalMethod", null, true, $I$(2).disposalMethodNames]);
this.disposalMethod=0;
while (!disposalMethodName.equals$O($I$(2).disposalMethodNames[this.disposalMethod])){
++this.disposalMethod;
}
this.userInputFlag=$I$(1).getBooleanAttribute$org_w3c_dom_Node$S$Z$Z(node, "userInputFlag", false, true);
this.transparentColorFlag=$I$(1).getBooleanAttribute$org_w3c_dom_Node$S$Z$Z(node, "transparentColorFlag", false, true);
this.delayTime=$I$(1).getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(node, "delayTime", -1, true, true, 0, 65535);
this.transparentColorIndex=$I$(1).getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(node, "transparentColorIndex", -1, true, true, 0, 65535);
} else if (name.equals$O("PlainTextExtension")) {
this.hasPlainTextExtension=true;
this.textGridLeft=$I$(1).getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(node, "textGridLeft", -1, true, true, 0, 65535);
this.textGridTop=$I$(1).getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(node, "textGridTop", -1, true, true, 0, 65535);
this.textGridWidth=$I$(1).getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(node, "textGridWidth", -1, true, true, 1, 65535);
this.textGridHeight=$I$(1).getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(node, "textGridHeight", -1, true, true, 1, 65535);
this.characterCellWidth=$I$(1).getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(node, "characterCellWidth", -1, true, true, 1, 65535);
this.characterCellHeight=$I$(1).getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(node, "characterCellHeight", -1, true, true, 1, 65535);
this.textForegroundColor=$I$(1).getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(node, "textForegroundColor", -1, true, true, 0, 255);
this.textBackgroundColor=$I$(1).getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(node, "textBackgroundColor", -1, true, true, 0, 255);
var textString=$I$(1).getStringAttribute$org_w3c_dom_Node$S$S$Z$SA(node, "text", "", false, null);
this.text=p$1.fromISO8859$S.apply(this, [textString]);
} else if (name.equals$O("ApplicationExtensions")) {
var applicationExtension=node.getFirstChild$();
if (!applicationExtension.getNodeName$().equals$O("ApplicationExtension")) {
$I$(1).fatal$org_w3c_dom_Node$S(node, "Only a ApplicationExtension may be a child of a ApplicationExtensions!");
}var applicationIDString=$I$(1).getStringAttribute$org_w3c_dom_Node$S$S$Z$SA(applicationExtension, "applicationID", null, true, null);
var authenticationCodeString=$I$(1).getStringAttribute$org_w3c_dom_Node$S$S$Z$SA(applicationExtension, "authenticationCode", null, true, null);
var applicationExtensionData=applicationExtension.getUserObject$();
if (applicationExtensionData == null  || !(Clazz.instanceOf(applicationExtensionData, Clazz.array(Byte.TYPE, -1))) ) {
$I$(1).fatal$org_w3c_dom_Node$S(applicationExtension, "Bad user object in ApplicationExtension!");
}if (this.applicationIDs == null ) {
this.applicationIDs=Clazz.new_($I$(3,1));
this.authenticationCodes=Clazz.new_($I$(3,1));
this.applicationData=Clazz.new_($I$(3,1));
}this.applicationIDs.add$O(p$1.fromISO8859$S.apply(this, [applicationIDString]));
this.authenticationCodes.add$O(p$1.fromISO8859$S.apply(this, [authenticationCodeString]));
this.applicationData.add$O(applicationExtensionData);
} else if (name.equals$O("CommentExtensions")) {
var commentExtension=node.getFirstChild$();
if (commentExtension != null ) {
while (commentExtension != null ){
if (!commentExtension.getNodeName$().equals$O("CommentExtension")) {
$I$(1).fatal$org_w3c_dom_Node$S(node, "Only a CommentExtension may be a child of a CommentExtensions!");
}if (this.comments == null ) {
this.comments=Clazz.new_($I$(3,1));
}var comment=$I$(1).getStringAttribute$org_w3c_dom_Node$S$S$Z$SA(commentExtension, "value", null, true, null);
this.comments.add$O(p$1.fromISO8859$S.apply(this, [comment]));
commentExtension=commentExtension.getNextSibling$();
}
}} else {
$I$(1).fatal$org_w3c_dom_Node$S(node, "Unknown child of root node!");
}node=node.getNextSibling$();
}
});

Clazz.newMeth(C$, 'mergeStandardTree$org_w3c_dom_Node',  function (root) {
var node=root;
if (!node.getNodeName$().equals$O("javax_imageio_1.0")) {
$I$(1).fatal$org_w3c_dom_Node$S(node, "Root must be javax_imageio_1.0");
}node=node.getFirstChild$();
while (node != null ){
var name=node.getNodeName$();
if (name.equals$O("Chroma")) {
var childNode=node.getFirstChild$();
while (childNode != null ){
var childName=childNode.getNodeName$();
if (childName.equals$O("Palette")) {
this.localColorTable=this.getColorTable$org_w3c_dom_Node$S$Z$I(childNode, "PaletteEntry", false, -1);
break;
}childNode=childNode.getNextSibling$();
}
} else if (name.equals$O("Compression")) {
var childNode=node.getFirstChild$();
while (childNode != null ){
var childName=childNode.getNodeName$();
if (childName.equals$O("NumProgressiveScans")) {
var numProgressiveScans=$I$(1).getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(childNode, "value", 4, false, true, 1, 2147483647);
if (numProgressiveScans > 1) {
this.interlaceFlag=true;
}break;
}childNode=childNode.getNextSibling$();
}
} else if (name.equals$O("Dimension")) {
var childNode=node.getFirstChild$();
while (childNode != null ){
var childName=childNode.getNodeName$();
if (childName.equals$O("HorizontalPixelOffset")) {
this.imageLeftPosition=$I$(1).getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(childNode, "value", -1, true, true, 0, 65535);
} else if (childName.equals$O("VerticalPixelOffset")) {
this.imageTopPosition=$I$(1).getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(childNode, "value", -1, true, true, 0, 65535);
}childNode=childNode.getNextSibling$();
}
} else if (name.equals$O("Text")) {
var childNode=node.getFirstChild$();
while (childNode != null ){
var childName=childNode.getNodeName$();
if (childName.equals$O("TextEntry") && $I$(1).getAttribute$org_w3c_dom_Node$S$S$Z(childNode, "compression", "none", false).equals$O("none") && $I$(4,"isSupported$S",[$I$(1).getAttribute$org_w3c_dom_Node$S$S$Z(childNode, "encoding", "ISO-8859-1", false)])  ) {
var value=$I$(1).getAttribute$org_w3c_dom_Node$S(childNode, "value");
var comment=p$1.fromISO8859$S.apply(this, [value]);
if (this.comments == null ) {
this.comments=Clazz.new_($I$(3,1));
}this.comments.add$O(comment);
}childNode=childNode.getNextSibling$();
}
} else if (name.equals$O("Transparency")) {
var childNode=node.getFirstChild$();
while (childNode != null ){
var childName=childNode.getNodeName$();
if (childName.equals$O("TransparentIndex")) {
this.transparentColorIndex=$I$(1).getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(childNode, "value", -1, true, true, 0, 255);
this.transparentColorFlag=true;
break;
}childNode=childNode.getNextSibling$();
}
}node=node.getNextSibling$();
}
});

Clazz.newMeth(C$, 'setFromTree$S$org_w3c_dom_Node',  function (formatName, root) {
this.reset$();
this.mergeTree$S$org_w3c_dom_Node(formatName, root);
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:54 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
