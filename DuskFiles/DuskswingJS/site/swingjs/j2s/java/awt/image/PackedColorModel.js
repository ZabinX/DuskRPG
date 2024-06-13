(function(){var P$=Clazz.newPackage("java.awt.image"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "PackedColorModel", null, 'java.awt.image.ColorModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['maskArray','int[]','+maskOffsets','scaleFactors','float[]']]]

Clazz.newMeth(C$, 'c$$java_awt_color_ColorSpace$I$IA$I$Z$I$I',  function (space, bits, colorMaskArray, alphaMask, isAlphaPremultiplied, trans, transferType) {
;C$.superclazz.c$$I$IA$java_awt_color_ColorSpace$Z$Z$I$I.apply(this,[bits, C$.createBitsArray$IA$I(colorMaskArray, alphaMask), space, (alphaMask == 0 ? false : true), isAlphaPremultiplied, trans, transferType]);C$.$init$.apply(this);
if (bits < 1 || bits > 32 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of bits must be between 1 and 32."]);
}this.maskArray=Clazz.array(Integer.TYPE, [this.numComponents]);
this.maskOffsets=Clazz.array(Integer.TYPE, [this.numComponents]);
this.scaleFactors=Clazz.array(Float.TYPE, [this.numComponents]);
for (var i=0; i < this.numColorComponents; i++) {
p$1.DecomposeMask$I$I$S.apply(this, [colorMaskArray[i], i, space.getName$I(i)]);
}
if (alphaMask != 0) {
p$1.DecomposeMask$I$I$S.apply(this, [alphaMask, this.numColorComponents, "alpha"]);
if (this.nBits[this.numComponents - 1] == 1) {
this.transparency=2;
}}}, 1);

Clazz.newMeth(C$, 'c$$java_awt_color_ColorSpace$I$I$I$I$I$Z$I$I',  function (space, bits, rmask, gmask, bmask, amask, isAlphaPremultiplied, trans, transferType) {
;C$.superclazz.c$$I$IA$java_awt_color_ColorSpace$Z$Z$I$I.apply(this,[bits, C$.createBitsArray$I$I$I$I(rmask, gmask, bmask, amask), space, (amask == 0 ? false : true), isAlphaPremultiplied, trans, transferType]);C$.$init$.apply(this);
if (space.getType$() != 5) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["ColorSpace must be TYPE_RGB."]);
}this.maskArray=Clazz.array(Integer.TYPE, [this.numComponents]);
this.maskOffsets=Clazz.array(Integer.TYPE, [this.numComponents]);
this.scaleFactors=Clazz.array(Float.TYPE, [this.numComponents]);
p$1.DecomposeMask$I$I$S.apply(this, [rmask, 0, "red"]);
p$1.DecomposeMask$I$I$S.apply(this, [gmask, 1, "green"]);
p$1.DecomposeMask$I$I$S.apply(this, [bmask, 2, "blue"]);
if (amask != 0) {
p$1.DecomposeMask$I$I$S.apply(this, [amask, 3, "alpha"]);
if (this.nBits[3] == 1) {
this.transparency=2;
}}}, 1);

Clazz.newMeth(C$, 'getMask$I',  function (index) {
return this.maskArray[index];
});

Clazz.newMeth(C$, 'getMasks$',  function () {
return this.maskArray.clone$();
});

Clazz.newMeth(C$, 'DecomposeMask$I$I$S',  function (mask, idx, componentName) {
var off=0;
var count=this.nBits[idx];
this.maskArray[idx]=mask;
if (mask != 0) {
while ((mask & 1) == 0){
mask>>>=1;
++off;
}
}if (off + count > this.pixel_bits) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[componentName + " mask " + Integer.toHexString$I(this.maskArray[idx]) + " overflows pixel (expecting " + this.pixel_bits + " bits" ]);
}this.maskOffsets[idx]=off;
if (count == 0) {
this.scaleFactors[idx]=256.0;
} else {
this.scaleFactors[idx]=255.0 / ((1 << count) - 1);
}}, p$1);

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (!(Clazz.instanceOf(obj, "java.awt.image.PackedColorModel"))) {
return false;
}if (!C$.superclazz.prototype.equals$O.apply(this, [obj])) {
return false;
}var cm=obj;
var numC=cm.getNumComponents$();
if (numC != this.numComponents) {
return false;
}for (var i=0; i < numC; i++) {
if (this.maskArray[i] != cm.getMask$I(i)) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'createBitsArray$IA$I',  function (colorMaskArray, alphaMask) {
var numColors=colorMaskArray.length;
var numAlpha=(alphaMask == 0 ? 0 : 1);
var arr=Clazz.array(Integer.TYPE, [numColors + numAlpha]);
for (var i=0; i < numColors; i++) {
arr[i]=C$.countBits$I(colorMaskArray[i]);
if (arr[i] < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Noncontiguous color mask (" + Integer.toHexString$I(colorMaskArray[i]) + "at index " + i ]);
}}
if (alphaMask != 0) {
arr[numColors]=C$.countBits$I(alphaMask);
if (arr[numColors] < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Noncontiguous alpha mask (" + Integer.toHexString$I(alphaMask)]);
}}return arr;
}, 1);

Clazz.newMeth(C$, 'createBitsArray$I$I$I$I',  function (rmask, gmask, bmask, amask) {
var arr=Clazz.array(Integer.TYPE, [3 + (amask == 0 ? 0 : 1)]);
arr[0]=C$.countBits$I(rmask);
arr[1]=C$.countBits$I(gmask);
arr[2]=C$.countBits$I(bmask);
if (arr[0] < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Noncontiguous red mask (" + Integer.toHexString$I(rmask)]);
} else if (arr[1] < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Noncontiguous green mask (" + Integer.toHexString$I(gmask)]);
} else if (arr[2] < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Noncontiguous blue mask (" + Integer.toHexString$I(bmask)]);
}if (amask != 0) {
arr[3]=C$.countBits$I(amask);
if (arr[3] < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Noncontiguous alpha mask (" + Integer.toHexString$I(amask)]);
}}return arr;
}, 1);

Clazz.newMeth(C$, 'countBits$I',  function (mask) {
var count=0;
if (mask != 0) {
while ((mask & 1) == 0){
mask>>>=1;
}
while ((mask & 1) == 1){
mask>>>=1;
++count;
}
}if (mask != 0) {
return -1;
}return count;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
