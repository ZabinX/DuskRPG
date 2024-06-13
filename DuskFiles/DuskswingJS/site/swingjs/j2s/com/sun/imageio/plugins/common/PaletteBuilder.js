(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.common"),p$1={},I$=[[0,'javax.imageio.ImageTypeSpecifier','java.awt.image.BufferedImage','java.awt.Color',['com.sun.imageio.plugins.common.PaletteBuilder','.ColorNode'],'java.awt.image.IndexColorModel']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PaletteBuilder", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ColorNode',4]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['requiredSize','numNodes','maxNodes','currLevel','currSize','transparency'],'O',['src','java.awt.image.RenderedImage','srcColorModel','java.awt.image.ColorModel','srcRaster','java.awt.image.Raster','root','com.sun.imageio.plugins.common.PaletteBuilder.ColorNode','reduceList','com.sun.imageio.plugins.common.PaletteBuilder.ColorNode[]','+palette','transColor','com.sun.imageio.plugins.common.PaletteBuilder.ColorNode']]]

Clazz.newMeth(C$, 'createIndexedImage$java_awt_image_RenderedImage',  function (src) {
var pb=Clazz.new_(C$.c$$java_awt_image_RenderedImage,[src]);
pb.buildPalette$();
return pb.getIndexedImage$();
}, 1);

Clazz.newMeth(C$, 'createIndexColorModel$java_awt_image_RenderedImage',  function (img) {
var pb=Clazz.new_(C$.c$$java_awt_image_RenderedImage,[img]);
pb.buildPalette$();
return pb.getIndexColorModel$();
}, 1);

Clazz.newMeth(C$, 'canCreatePalette$javax_imageio_ImageTypeSpecifier',  function (type) {
if (type == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["type == null"]);
}return true;
}, 1);

Clazz.newMeth(C$, 'canCreatePalette$java_awt_image_RenderedImage',  function (image) {
if (image == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["image == null"]);
}var type=Clazz.new_($I$(1,1).c$$java_awt_image_RenderedImage,[image]);
return C$.canCreatePalette$javax_imageio_ImageTypeSpecifier(type);
}, 1);

Clazz.newMeth(C$, 'getIndexedImage$',  function () {
var icm=this.getIndexColorModel$();
var dst=Clazz.new_([this.src.getWidth$(), this.src.getHeight$(), 13, icm],$I$(2,1).c$$I$I$I$java_awt_image_IndexColorModel);
var wr=dst.getRaster$();
for (var y=0; y < dst.getHeight$(); y++) {
for (var x=0; x < dst.getWidth$(); x++) {
var aColor=p$1.getSrcColor$I$I.apply(this, [x, y]);
wr.setSample$I$I$I$I(x, y, 0, this.findColorIndex$com_sun_imageio_plugins_common_PaletteBuilder_ColorNode$java_awt_Color(this.root, aColor));
}
}
return dst;
});

Clazz.newMeth(C$, 'c$$java_awt_image_RenderedImage',  function (src) {
C$.c$$java_awt_image_RenderedImage$I.apply(this, [src, 256]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_RenderedImage$I',  function (src, size) {
;C$.$init$.apply(this);
this.src=src;
this.srcColorModel=src.getColorModel$();
this.srcRaster=src.getData$();
this.transparency=this.srcColorModel.getTransparency$();
this.requiredSize=size;
}, 1);

Clazz.newMeth(C$, 'getSrcColor$I$I',  function (x, y) {
var argb=this.srcColorModel.getRGB$O(this.srcRaster.getDataElements$I$I$O(x, y, null));
return Clazz.new_([argb, this.transparency != 1],$I$(3,1).c$$I$Z);
}, p$1);

Clazz.newMeth(C$, 'findColorIndex$com_sun_imageio_plugins_common_PaletteBuilder_ColorNode$java_awt_Color',  function (aNode, aColor) {
if (this.transparency != 1 && aColor.getAlpha$() != 255 ) {
return 0;
}if (aNode.isLeaf) {
return aNode.paletteIndex;
} else {
var childIndex=this.getBranchIndex$java_awt_Color$I(aColor, aNode.level);
return this.findColorIndex$com_sun_imageio_plugins_common_PaletteBuilder_ColorNode$java_awt_Color(aNode.children[childIndex], aColor);
}});

Clazz.newMeth(C$, 'buildPalette$',  function () {
this.reduceList=Clazz.array($I$(4), [9]);
for (var i=0; i < this.reduceList.length; i++) {
this.reduceList[i]=null;
}
this.numNodes=0;
this.maxNodes=0;
this.root=null;
this.currSize=0;
this.currLevel=8;
var w=this.src.getWidth$();
var h=this.src.getHeight$();
for (var y=0; y < h; y++) {
for (var x=0; x < w; x++) {
var aColor=p$1.getSrcColor$I$I.apply(this, [w - x - 1 , h - y - 1 ]);
if (this.transparency != 1 && aColor.getAlpha$() != 255 ) {
if (this.transColor == null ) {
--this.requiredSize;
this.transColor=Clazz.new_($I$(4,1),[this, null]);
this.transColor.isLeaf=true;
}this.transColor=this.insertNode$com_sun_imageio_plugins_common_PaletteBuilder_ColorNode$java_awt_Color$I(this.transColor, aColor, 0);
} else {
this.root=this.insertNode$com_sun_imageio_plugins_common_PaletteBuilder_ColorNode$java_awt_Color$I(this.root, aColor, 0);
}if (this.currSize > this.requiredSize) {
this.reduceTree$();
}}
}
});

Clazz.newMeth(C$, 'insertNode$com_sun_imageio_plugins_common_PaletteBuilder_ColorNode$java_awt_Color$I',  function (aNode, aColor, aLevel) {
if (aNode == null ) {
aNode=Clazz.new_($I$(4,1),[this, null]);
++this.numNodes;
if (this.numNodes > this.maxNodes) {
this.maxNodes=this.numNodes;
}aNode.level=aLevel;
aNode.isLeaf=(aLevel > 8);
if (aNode.isLeaf) {
++this.currSize;
}}++aNode.colorCount;
(aNode.red=Long.$add(aNode.red,(aColor.getRed$())));
(aNode.green=Long.$add(aNode.green,(aColor.getGreen$())));
(aNode.blue=Long.$add(aNode.blue,(aColor.getBlue$())));
if (!aNode.isLeaf) {
var branchIndex=this.getBranchIndex$java_awt_Color$I(aColor, aLevel);
if (aNode.children[branchIndex] == null ) {
++aNode.childCount;
if (aNode.childCount == 2) {
aNode.nextReducible=this.reduceList[aLevel];
this.reduceList[aLevel]=aNode;
}}aNode.children[branchIndex]=this.insertNode$com_sun_imageio_plugins_common_PaletteBuilder_ColorNode$java_awt_Color$I(aNode.children[branchIndex], aColor, aLevel + 1);
}return aNode;
});

Clazz.newMeth(C$, 'getIndexColorModel$',  function () {
var size=this.currSize;
if (this.transColor != null ) {
++size;
}var red=Clazz.array(Byte.TYPE, [size]);
var green=Clazz.array(Byte.TYPE, [size]);
var blue=Clazz.array(Byte.TYPE, [size]);
var index=0;
this.palette=Clazz.array($I$(4), [size]);
if (this.transColor != null ) {
++index;
}if (this.root != null ) {
this.findPaletteEntry$com_sun_imageio_plugins_common_PaletteBuilder_ColorNode$I$BA$BA$BA(this.root, index, red, green, blue);
}var icm=null;
if (this.transColor != null ) {
icm=Clazz.new_($I$(5,1).c$$I$I$BA$BA$BA$I,[8, size, red, green, blue, 0]);
} else {
icm=Clazz.new_($I$(5,1).c$$I$I$BA$BA$BA,[8, this.currSize, red, green, blue]);
}return icm;
});

Clazz.newMeth(C$, 'findPaletteEntry$com_sun_imageio_plugins_common_PaletteBuilder_ColorNode$I$BA$BA$BA',  function (aNode, index, red, green, blue) {
if (aNode.isLeaf) {
red[index]=((Long.$div(aNode.red,aNode.colorCount))|0);
green[index]=((Long.$div(aNode.green,aNode.colorCount))|0);
blue[index]=((Long.$div(aNode.blue,aNode.colorCount))|0);
aNode.paletteIndex=index;
this.palette[index]=aNode;
++index;
} else {
for (var i=0; i < 8; i++) {
if (aNode.children[i] != null ) {
index=this.findPaletteEntry$com_sun_imageio_plugins_common_PaletteBuilder_ColorNode$I$BA$BA$BA(aNode.children[i], index, red, green, blue);
}}
}return index;
});

Clazz.newMeth(C$, 'getBranchIndex$java_awt_Color$I',  function (aColor, aLevel) {
if (aLevel > 8 || aLevel < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid octree node depth: " + aLevel]);
}var shift=8 - aLevel;
var red_index=1 & ((255 & aColor.getRed$()) >> shift);
var green_index=1 & ((255 & aColor.getGreen$()) >> shift);
var blue_index=1 & ((255 & aColor.getBlue$()) >> shift);
var index=(red_index << 2) | (green_index << 1) | blue_index ;
return index;
});

Clazz.newMeth(C$, 'reduceTree$',  function () {
var level=this.reduceList.length - 1;
while (this.reduceList[level] == null  && level >= 0 ){
--level;
}
var thisNode=this.reduceList[level];
if (thisNode == null ) {
return;
}var pList=thisNode;
var minColorCount=pList.colorCount;
var cnt=1;
while (pList.nextReducible != null ){
if (minColorCount > pList.nextReducible.colorCount) {
thisNode=pList;
minColorCount=pList.colorCount;
}pList=pList.nextReducible;
++cnt;
}
if (thisNode === this.reduceList[level] ) {
this.reduceList[level]=thisNode.nextReducible;
} else {
pList=thisNode.nextReducible;
thisNode.nextReducible=pList.nextReducible;
thisNode=pList;
}if (thisNode.isLeaf) {
return;
}var leafChildCount=thisNode.getLeafChildCount$();
thisNode.isLeaf=true;
this.currSize-=(leafChildCount - 1);
var aDepth=thisNode.level;
for (var i=0; i < 8; i++) {
thisNode.children[i]=this.freeTree$com_sun_imageio_plugins_common_PaletteBuilder_ColorNode(thisNode.children[i]);
}
thisNode.childCount=0;
});

Clazz.newMeth(C$, 'freeTree$com_sun_imageio_plugins_common_PaletteBuilder_ColorNode',  function (aNode) {
if (aNode == null ) {
return null;
}for (var i=0; i < 8; i++) {
aNode.children[i]=this.freeTree$com_sun_imageio_plugins_common_PaletteBuilder_ColorNode(aNode.children[i]);
}
--this.numNodes;
return null;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.PaletteBuilder, "ColorNode", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isLeaf'],'I',['childCount','colorCount','paletteIndex','level'],'J',['red','blue','green'],'O',['children','com.sun.imageio.plugins.common.PaletteBuilder.ColorNode[]','nextReducible','com.sun.imageio.plugins.common.PaletteBuilder.ColorNode']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.isLeaf=false;
this.level=0;
this.childCount=0;
this.children=Clazz.array(C$, [8]);
for (var i=0; i < 8; i++) {
this.children[i]=null;
}
this.colorCount=0;
this.red=this.green=this.blue=0;
this.paletteIndex=0;
}, 1);

Clazz.newMeth(C$, 'getLeafChildCount$',  function () {
if (this.isLeaf) {
return 0;
}var cnt=0;
for (var i=0; i < this.children.length; i++) {
if (this.children[i] != null ) {
if (this.children[i].isLeaf) {
++cnt;
} else {
cnt+=this.children[i].getLeafChildCount$();
}}}
return cnt;
});

Clazz.newMeth(C$, 'getRGB$',  function () {
var r=(Long.$ival(this.red)/this.colorCount|0);
var g=(Long.$ival(this.green)/this.colorCount|0);
var b=(Long.$ival(this.blue)/this.colorCount|0);
var c=-16777216 | (255 & r) << 16 | (255 & g) << 8 | (255 & b);
return c;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
