(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.bmp"),p$1={},I$=[[0,'com.sun.imageio.plugins.common.I18N','javax.imageio.metadata.IIOMetadataNode','com.sun.imageio.plugins.bmp.BMPCompressionTypes','com.sun.imageio.plugins.common.ImageUtil']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BMPMetadata", null, 'javax.imageio.metadata.IIOMetadata', 'com.sun.imageio.plugins.bmp.BMPConstants');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.palette=null;
this.comments=null;
},1);

C$.$fields$=[['D',['redX','redY','redZ','greenX','greenY','greenZ','blueX','blueY','blueZ'],'I',['width','height','compression','imageSize','xPixelsPerMeter','yPixelsPerMeter','colorsUsed','colorsImportant','redMask','greenMask','blueMask','alphaMask','colorSpace','gammaRed','gammaGreen','gammaBlue','intent','paletteSize','red','green','blue'],'H',['bitsPerPixel'],'S',['bmpVersion'],'O',['palette','byte[]','comments','java.util.List']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$Z$S$S$SA$SA.apply(this,[true, "javax_imageio_bmp_1.0", "com.sun.imageio.plugins.bmp.BMPMetadataFormat", null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isReadOnly$',  function () {
return true;
});

Clazz.newMeth(C$, 'getAsTree$S',  function (formatName) {
if (formatName.equals$O("javax_imageio_bmp_1.0")) {
return p$1.getNativeTree.apply(this, []);
} else if (formatName.equals$O("javax_imageio_1.0")) {
return this.getStandardTree$();
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("BMPMetadata0")]);
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
var root=Clazz.new_($I$(2,1).c$$S,["javax_imageio_bmp_1.0"]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "BMPVersion", this.bmpVersion]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "Width",  new Integer(this.width)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "Height",  new Integer(this.height)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "BitsPerPixel",  new Short(this.bitsPerPixel)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "Compression",  new Integer(this.compression)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "ImageSize",  new Integer(this.imageSize)]);
var node=p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "PixelsPerMeter", null]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [node, "X",  new Integer(this.xPixelsPerMeter)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [node, "Y",  new Integer(this.yPixelsPerMeter)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "ColorsUsed",  new Integer(this.colorsUsed)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "ColorsImportant",  new Integer(this.colorsImportant)]);
var version=0;
for (var i=0; i < this.bmpVersion.length$(); i++) if (Character.isDigit$C(this.bmpVersion.charAt$I(i))) version=(this.bmpVersion.charCodeAt$I(i)) - 48;

if (version >= 4) {
node=p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "Mask", null]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [node, "Red",  new Integer(this.redMask)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [node, "Green",  new Integer(this.greenMask)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [node, "Blue",  new Integer(this.blueMask)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [node, "Alpha",  new Integer(this.alphaMask)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "ColorSpaceType",  new Integer(this.colorSpace)]);
node=p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "CIEXYZEndPoints", null]);
p$1.addXYZPoints$javax_imageio_metadata_IIOMetadataNode$S$D$D$D.apply(this, [node, "Red", this.redX, this.redY, this.redZ]);
p$1.addXYZPoints$javax_imageio_metadata_IIOMetadataNode$S$D$D$D.apply(this, [node, "Green", this.greenX, this.greenY, this.greenZ]);
p$1.addXYZPoints$javax_imageio_metadata_IIOMetadataNode$S$D$D$D.apply(this, [node, "Blue", this.blueX, this.blueY, this.blueZ]);
node=p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "Intent",  new Integer(this.intent)]);
}if ((this.palette != null ) && (this.paletteSize > 0) ) {
node=p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "Palette", null]);
var numComps=(this.palette.length/this.paletteSize|0);
for (var i=0, j=0; i < this.paletteSize; i++) {
var entry=p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [node, "PaletteEntry", null]);
this.red=this.palette[j++] & 255;
this.green=this.palette[j++] & 255;
this.blue=this.palette[j++] & 255;
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [entry, "Red",  new Byte(($b$[0] = this.red, $b$[0]))]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [entry, "Green",  new Byte(($b$[0] = this.green, $b$[0]))]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [entry, "Blue",  new Byte(($b$[0] = this.blue, $b$[0]))]);
if (numComps == 4) p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [entry, "Alpha",  new Byte(($b$[0] = (this.palette[j++] & 255), $b$[0]))]);
}
}return root;
}, p$1);

Clazz.newMeth(C$, 'getStandardChromaNode$',  function () {
if ((this.palette != null ) && (this.paletteSize > 0) ) {
var node=Clazz.new_($I$(2,1).c$$S,["Chroma"]);
var subNode=Clazz.new_($I$(2,1).c$$S,["Palette"]);
var numComps=(this.palette.length/this.paletteSize|0);
subNode.setAttribute$S$S("value", "" + numComps);
for (var i=0, j=0; i < this.paletteSize; i++) {
var subNode1=Clazz.new_($I$(2,1).c$$S,["PaletteEntry"]);
subNode1.setAttribute$S$S("index", "" + i);
subNode1.setAttribute$S$S("red", "" + this.palette[j++]);
subNode1.setAttribute$S$S("green", "" + this.palette[j++]);
subNode1.setAttribute$S$S("blue", "" + this.palette[j++]);
if (numComps == 4 && this.palette[j] != 0 ) subNode1.setAttribute$S$S("alpha", "" + this.palette[j++]);
subNode.appendChild$org_w3c_dom_Node(subNode1);
}
node.appendChild$org_w3c_dom_Node(subNode);
return node;
}return null;
});

Clazz.newMeth(C$, 'getStandardCompressionNode$',  function () {
var node=Clazz.new_($I$(2,1).c$$S,["Compression"]);
var subNode=Clazz.new_($I$(2,1).c$$S,["CompressionTypeName"]);
subNode.setAttribute$S$S("value", $I$(3).getName$I(this.compression));
node.appendChild$org_w3c_dom_Node(subNode);
return node;
});

Clazz.newMeth(C$, 'getStandardDataNode$',  function () {
var node=Clazz.new_($I$(2,1).c$$S,["Data"]);
var bits="";
if (this.bitsPerPixel == 24) bits="8 8 8 ";
 else if (this.bitsPerPixel == 16 || this.bitsPerPixel == 32 ) {
bits="" + p$1.countBits$I.apply(this, [this.redMask]) + " " + p$1.countBits$I.apply(this, [this.greenMask]) + p$1.countBits$I.apply(this, [this.blueMask]) + "" + p$1.countBits$I.apply(this, [this.alphaMask]) ;
}var subNode=Clazz.new_($I$(2,1).c$$S,["BitsPerSample"]);
subNode.setAttribute$S$S("value", bits);
node.appendChild$org_w3c_dom_Node(subNode);
return node;
});

Clazz.newMeth(C$, 'getStandardDimensionNode$',  function () {
if (this.yPixelsPerMeter > 0.0  && this.xPixelsPerMeter > 0.0  ) {
var node=Clazz.new_($I$(2,1).c$$S,["Dimension"]);
var ratio=(this.yPixelsPerMeter/this.xPixelsPerMeter|0);
var subNode=Clazz.new_($I$(2,1).c$$S,["PixelAspectRatio"]);
subNode.setAttribute$S$S("value", "" + new Float(ratio).toString());
node.appendChild$org_w3c_dom_Node(subNode);
subNode=Clazz.new_($I$(2,1).c$$S,["HorizontalPhysicalPixelSpacing"]);
subNode.setAttribute$S$S("value", "" + ((1/this.xPixelsPerMeter|0) * 1000));
node.appendChild$org_w3c_dom_Node(subNode);
subNode=Clazz.new_($I$(2,1).c$$S,["VerticalPhysicalPixelSpacing"]);
subNode.setAttribute$S$S("value", "" + ((1/this.yPixelsPerMeter|0) * 1000));
node.appendChild$org_w3c_dom_Node(subNode);
return node;
}return null;
});

Clazz.newMeth(C$, 'setFromTree$S$org_w3c_dom_Node',  function (formatName, root) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[$I$(1).getString$S("BMPMetadata1")]);
});

Clazz.newMeth(C$, 'mergeTree$S$org_w3c_dom_Node',  function (formatName, root) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[$I$(1).getString$S("BMPMetadata1")]);
});

Clazz.newMeth(C$, 'reset$',  function () {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[$I$(1).getString$S("BMPMetadata1")]);
});

Clazz.newMeth(C$, 'countBits$I',  function (num) {
var count=0;
while (num > 0){
if ((num & 1) == 1) ++count;
num>>>=1;
}
return count == 0 ? "" : "" + count;
}, p$1);

Clazz.newMeth(C$, 'addXYZPoints$javax_imageio_metadata_IIOMetadataNode$S$D$D$D',  function (root, name, x, y, z) {
var node=p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, name, null]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [node, "X",  new Double(x)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [node, "Y",  new Double(y)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [node, "Z",  new Double(z)]);
}, p$1);

Clazz.newMeth(C$, 'addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O',  function (root, name, object) {
var child=Clazz.new_($I$(2,1).c$$S,[name]);
if (object != null ) {
child.setUserObject$O(object);
child.setNodeValue$S($I$(4).convertObjectToString$O(object));
}root.appendChild$org_w3c_dom_Node(child);
return child;
}, p$1);
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
