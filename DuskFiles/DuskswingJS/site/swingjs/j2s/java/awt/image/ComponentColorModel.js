(function(){var P$=Clazz.newPackage("java.awt.image"),p$1={},I$=[[0,'java.awt.image.DataBuffer','java.util.Arrays','java.awt.image.Raster','java.awt.image.ComponentSampleModel']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ComponentColorModel", null, 'java.awt.image.ColorModel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['signed','is_sRGB_stdScale','is_LinearRGB_stdScale','is_LinearGray_stdScale','is_ICCGray_stdScale','needScaleInit','noUnnorm','nonStdScale'],'O',['tosRGB8LUT','byte[]','+fromsRGB8LUT8','fromsRGB8LUT16','short[]','+fromLinearGray16ToOtherGray16LUT','min','float[]','+diffMinMax','+compOffset','+compScale']]]

Clazz.newMeth(C$, 'c$$java_awt_color_ColorSpace$IA$Z$Z$I$I',  function (colorSpace, bits, hasAlpha, isAlphaPremultiplied, transparency, transferType) {
;C$.superclazz.c$$I$IA$java_awt_color_ColorSpace$Z$Z$I$I.apply(this,[C$.bitsHelper$I$java_awt_color_ColorSpace$Z(transferType, colorSpace, hasAlpha), C$.bitsArrayHelper$IA$I$java_awt_color_ColorSpace$Z(bits, transferType, colorSpace, hasAlpha), colorSpace, hasAlpha, isAlphaPremultiplied, transparency, transferType]);C$.$init$.apply(this);
switch (transferType) {
case 0:
case 1:
case 3:
this.signed=false;
this.needScaleInit=true;
break;
case 2:
this.signed=true;
this.needScaleInit=true;
break;
case 4:
case 5:
this.signed=true;
this.needScaleInit=false;
this.noUnnorm=true;
this.nonStdScale=false;
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["This constructor is not " + "compatible with transferType " + transferType ]);
}
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_color_ColorSpace$Z$Z$I$I',  function (colorSpace, hasAlpha, isAlphaPremultiplied, transparency, transferType) {
C$.c$$java_awt_color_ColorSpace$IA$Z$Z$I$I.apply(this, [colorSpace, null, hasAlpha, isAlphaPremultiplied, transparency, transferType]);
}, 1);

Clazz.newMeth(C$, 'bitsHelper$I$java_awt_color_ColorSpace$Z',  function (transferType, colorSpace, hasAlpha) {
var numBits=$I$(1).getDataTypeSize$I(transferType);
var numComponents=colorSpace.getNumComponents$();
if (hasAlpha) {
++numComponents;
}return numBits * numComponents;
}, 1);

Clazz.newMeth(C$, 'bitsArrayHelper$IA$I$java_awt_color_ColorSpace$Z',  function (origBits, transferType, colorSpace, hasAlpha) {
switch (transferType) {
case 0:
case 1:
case 3:
if (origBits != null ) {
return origBits;
}break;
default:
break;
}
var numBits=$I$(1).getDataTypeSize$I(transferType);
var numComponents=colorSpace.getNumComponents$();
if (hasAlpha) {
++numComponents;
}var bits=Clazz.array(Integer.TYPE, [numComponents]);
for (var i=0; i < numComponents; i++) {
bits[i]=numBits;
}
return bits;
}, 1);

Clazz.newMeth(C$, 'initScale',  function () {
this.needScaleInit=false;
if (this.nonStdScale || this.signed ) {
this.noUnnorm=true;
} else {
this.noUnnorm=false;
}var lowVal;
var highVal;
switch (this.transferType) {
case 0:
{
var bpixel=Clazz.array(Byte.TYPE, [this.numComponents]);
for (var i=0; i < this.numColorComponents; i++) {
bpixel[i]=(0|0);
}
if (this.supportsAlpha) {
bpixel[this.numColorComponents]=(((1 << this.nBits[this.numColorComponents]) - 1)|0);
}lowVal=this.getNormalizedComponents$O$FA$I(bpixel, null, 0);
for (var i=0; i < this.numColorComponents; i++) {
bpixel[i]=(((1 << this.nBits[i]) - 1)|0);
}
highVal=this.getNormalizedComponents$O$FA$I(bpixel, null, 0);
}break;
case 1:
{
var uspixel=Clazz.array(Short.TYPE, [this.numComponents]);
for (var i=0; i < this.numColorComponents; i++) {
uspixel[i]=(0|0);
}
if (this.supportsAlpha) {
uspixel[this.numColorComponents]=(((1 << this.nBits[this.numColorComponents]) - 1)|0);
}lowVal=this.getNormalizedComponents$O$FA$I(uspixel, null, 0);
for (var i=0; i < this.numColorComponents; i++) {
uspixel[i]=(((1 << this.nBits[i]) - 1)|0);
}
highVal=this.getNormalizedComponents$O$FA$I(uspixel, null, 0);
}break;
case 3:
{
var ipixel=Clazz.array(Integer.TYPE, [this.numComponents]);
for (var i=0; i < this.numColorComponents; i++) {
ipixel[i]=0;
}
if (this.supportsAlpha) {
ipixel[this.numColorComponents]=((1 << this.nBits[this.numColorComponents]) - 1);
}lowVal=this.getNormalizedComponents$O$FA$I(ipixel, null, 0);
for (var i=0; i < this.numColorComponents; i++) {
ipixel[i]=((1 << this.nBits[i]) - 1);
}
highVal=this.getNormalizedComponents$O$FA$I(ipixel, null, 0);
}break;
case 2:
{
var spixel=Clazz.array(Short.TYPE, [this.numComponents]);
for (var i=0; i < this.numColorComponents; i++) {
spixel[i]=(0|0);
}
if (this.supportsAlpha) {
spixel[this.numColorComponents]=(32767|0);
}lowVal=this.getNormalizedComponents$O$FA$I(spixel, null, 0);
for (var i=0; i < this.numColorComponents; i++) {
spixel[i]=(32767|0);
}
highVal=this.getNormalizedComponents$O$FA$I(spixel, null, 0);
}break;
default:
lowVal=highVal=null;
break;
}
this.nonStdScale=false;
for (var i=0; i < this.numColorComponents; i++) {
if ((lowVal[i] != 0.0 ) || (highVal[i] != 1.0 ) ) {
this.nonStdScale=true;
break;
}}
if (this.nonStdScale) {
this.noUnnorm=true;
this.is_sRGB_stdScale=false;
this.is_LinearRGB_stdScale=false;
this.is_LinearGray_stdScale=false;
this.is_ICCGray_stdScale=false;
this.compOffset=Clazz.array(Float.TYPE, [this.numColorComponents]);
this.compScale=Clazz.array(Float.TYPE, [this.numColorComponents]);
for (var i=0; i < this.numColorComponents; i++) {
this.compOffset[i]=lowVal[i];
this.compScale[i]=1.0 / (highVal[i] - lowVal[i]);
}
}}, p$1);

Clazz.newMeth(C$, 'getRGBComponent$I$I',  function (pixel, idx) {
if (this.numComponents > 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["More than one component per pixel"]);
}if (this.signed) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Component value is signed"]);
}if (this.needScaleInit) {
p$1.initScale.apply(this, []);
}var opixel=null;
switch (this.transferType) {
case 0:
{
var bpixel=Clazz.array(Byte.TYPE, -1, [($b$[0] = pixel, $b$[0])]);
opixel=bpixel;
}break;
case 1:
{
var spixel=Clazz.array(Short.TYPE, -1, [($s$[0] = pixel, $s$[0])]);
opixel=spixel;
}break;
case 3:
{
var ipixel=Clazz.array(Integer.TYPE, -1, [pixel]);
opixel=ipixel;
}break;
}
var norm=this.getNormalizedComponents$O$FA$I(opixel, null, 0);
var rgb=this.colorSpace.toRGB$FA(norm);
return ((rgb[idx] * 255.0 + 0.5)|0);
}, p$1);

Clazz.newMeth(C$, 'getRed$I',  function (pixel) {
return p$1.getRGBComponent$I$I.apply(this, [pixel, 0]);
});

Clazz.newMeth(C$, 'getGreen$I',  function (pixel) {
return p$1.getRGBComponent$I$I.apply(this, [pixel, 1]);
});

Clazz.newMeth(C$, 'getBlue$I',  function (pixel) {
return p$1.getRGBComponent$I$I.apply(this, [pixel, 2]);
});

Clazz.newMeth(C$, 'getAlpha$I',  function (pixel) {
if (this.supportsAlpha == false ) {
return 255;
}if (this.numComponents > 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["More than one component per pixel"]);
}if (this.signed) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Component value is signed"]);
}return ((((pixel) / ((1 << this.nBits[0]) - 1)) * 255.0 + 0.5)|0);
});

Clazz.newMeth(C$, 'getRGB$I',  function (pixel) {
if (this.numComponents > 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["More than one component per pixel"]);
}if (this.signed) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Component value is signed"]);
}return (this.getAlpha$I(pixel) << 24) | (this.getRed$I(pixel) << 16) | (this.getGreen$I(pixel) << 8) | (this.getBlue$I(pixel) << 0) ;
});

Clazz.newMeth(C$, 'extractComponent$O$I$I',  function (inData, idx, precision) {
var needAlpha=(this.supportsAlpha && this.isAlphaPremultiplied );
var alp=0;
var comp;
var mask=(1 << this.nBits[idx]) - 1;
switch (this.transferType) {
case 2:
{
var sdata=inData;
var scalefactor=((1 << precision) - 1);
if (needAlpha) {
var s=sdata[this.numColorComponents];
if (s != 0) {
return ((((sdata[idx]) / (s)) * scalefactor + 0.5)|0);
} else {
return 0;
}} else {
return (((sdata[idx] / 32767.0) * scalefactor + 0.5)|0);
}}case 4:
{
var fdata=inData;
var scalefactor=((1 << precision) - 1);
if (needAlpha) {
var f=fdata[this.numColorComponents];
if (f != 0.0 ) {
return ((((fdata[idx] / f) * scalefactor) + 0.5)|0);
} else {
return 0;
}} else {
return ((fdata[idx] * scalefactor + 0.5)|0);
}}case 5:
{
var ddata=inData;
var scalefactor=((1 << precision) - 1);
if (needAlpha) {
var d=ddata[this.numColorComponents];
if (d != 0.0 ) {
return ((((ddata[idx] / d) * scalefactor) + 0.5)|0);
} else {
return 0;
}} else {
return ((ddata[idx] * scalefactor + 0.5)|0);
}}case 0:
var bdata=inData;
comp=bdata[idx] & mask;
precision=8;
if (needAlpha) {
alp=bdata[this.numColorComponents] & mask;
}break;
case 1:
var usdata=inData;
comp=usdata[idx] & mask;
if (needAlpha) {
alp=usdata[this.numColorComponents] & mask;
}break;
case 3:
var idata=inData;
comp=idata[idx];
if (needAlpha) {
alp=idata[this.numColorComponents];
}break;
default:
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method has not " + "been implemented for transferType " + this.transferType ]);
}
if (needAlpha) {
if (alp != 0) {
var scalefactor=((1 << precision) - 1);
var fcomp=(comp) / (mask);
var invalp=(((1 << this.nBits[this.numColorComponents]) - 1)) / (alp);
return ((fcomp * invalp * scalefactor  + 0.5)|0);
} else {
return 0;
}} else {
if (this.nBits[idx] != precision) {
var scalefactor=((1 << precision) - 1);
var fcomp=(comp) / (mask);
return ((fcomp * scalefactor + 0.5)|0);
}return comp;
}}, p$1);

Clazz.newMeth(C$, 'getRGBComponent$O$I',  function (inData, idx) {
if (this.needScaleInit) {
p$1.initScale.apply(this, []);
}if (this.is_sRGB_stdScale) {
return p$1.extractComponent$O$I$I.apply(this, [inData, idx, 8]);
} else if (this.is_LinearRGB_stdScale) {
var lutidx=p$1.extractComponent$O$I$I.apply(this, [inData, idx, 16]);
return this.tosRGB8LUT[lutidx] & 255;
} else if (this.is_ICCGray_stdScale) {
var lutidx=p$1.extractComponent$O$I$I.apply(this, [inData, 0, 16]);
return this.tosRGB8LUT[lutidx] & 255;
}var norm=this.getNormalizedComponents$O$FA$I(inData, null, 0);
var rgb=this.colorSpace.toRGB$FA(norm);
return ((rgb[idx] * 255.0 + 0.5)|0);
}, p$1);

Clazz.newMeth(C$, 'getRed$O',  function (inData) {
return p$1.getRGBComponent$O$I.apply(this, [inData, 0]);
});

Clazz.newMeth(C$, 'getGreen$O',  function (inData) {
return p$1.getRGBComponent$O$I.apply(this, [inData, 1]);
});

Clazz.newMeth(C$, 'getBlue$O',  function (inData) {
return p$1.getRGBComponent$O$I.apply(this, [inData, 2]);
});

Clazz.newMeth(C$, 'getAlpha$O',  function (inData) {
if (this.supportsAlpha == false ) {
return 255;
}var alpha=0;
var aIdx=this.numColorComponents;
var mask=(1 << this.nBits[aIdx]) - 1;
switch (this.transferType) {
case 2:
var sdata=inData;
alpha=(((sdata[aIdx] / 32767.0) * 255.0 + 0.5)|0);
return alpha;
case 4:
var fdata=inData;
alpha=((fdata[aIdx] * 255.0 + 0.5)|0);
return alpha;
case 5:
var ddata=inData;
alpha=((ddata[aIdx] * 255.0 + 0.5)|0);
return alpha;
case 0:
var bdata=inData;
alpha=bdata[aIdx] & mask;
break;
case 1:
var usdata=inData;
alpha=usdata[aIdx] & mask;
break;
case 3:
var idata=inData;
alpha=idata[aIdx];
break;
default:
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method has not " + "been implemented for transferType " + this.transferType ]);
}
if (this.nBits[aIdx] == 8) {
return alpha;
} else {
return ((((alpha) / (((1 << this.nBits[aIdx]) - 1))) * 255.0 + 0.5)|0);
}});

Clazz.newMeth(C$, 'getRGB$O',  function (inData) {
if (this.needScaleInit) {
p$1.initScale.apply(this, []);
}if (this.is_sRGB_stdScale || this.is_LinearRGB_stdScale ) {
return (this.getAlpha$O(inData) << 24) | (this.getRed$O(inData) << 16) | (this.getGreen$O(inData) << 8) | (this.getBlue$O(inData)) ;
} else if (this.colorSpaceType == 6) {
var gray=this.getRed$O(inData);
return (this.getAlpha$O(inData) << 24) | (gray << 16) | (gray << 8) | gray ;
}var norm=this.getNormalizedComponents$O$FA$I(inData, null, 0);
var rgb=this.colorSpace.toRGB$FA(norm);
return (this.getAlpha$O(inData) << 24) | ((((rgb[0] * 255.0 + 0.5)|0)) << 16) | ((((rgb[1] * 255.0 + 0.5)|0)) << 8) | ((((rgb[2] * 255.0 + 0.5)|0)) << 0) ;
});

Clazz.newMeth(C$, 'getDataElements$I$O',  function (rgb, pixel) {
var red;
var grn;
var blu;
var alp;
red=(rgb >> 16) & 255;
grn=(rgb >> 8) & 255;
blu=rgb & 255;
if (this.needScaleInit) {
p$1.initScale.apply(this, []);
}if (this.signed) {
switch (this.transferType) {
case 2:
{
var sdata;
if (pixel == null ) {
sdata=Clazz.array(Short.TYPE, [this.numComponents]);
} else {
sdata=pixel;
}var factor;
if (this.is_sRGB_stdScale || this.is_LinearRGB_stdScale ) {
factor=128.49803;
if (this.is_LinearRGB_stdScale) {
red=this.fromsRGB8LUT16[red] & 65535;
grn=this.fromsRGB8LUT16[grn] & 65535;
blu=this.fromsRGB8LUT16[blu] & 65535;
factor=0.49999237;
}if (this.supportsAlpha) {
alp=(rgb >> 24) & 255;
sdata[3]=((alp * (128.49803) + 0.5)|0);
if (this.isAlphaPremultiplied) {
factor=alp * factor * (0.003921569) ;
}}sdata[0]=((red * factor + 0.5)|0);
sdata[1]=((grn * factor + 0.5)|0);
sdata[2]=((blu * factor + 0.5)|0);
} else if (this.is_LinearGray_stdScale) {
red=this.fromsRGB8LUT16[red] & 65535;
grn=this.fromsRGB8LUT16[grn] & 65535;
blu=this.fromsRGB8LUT16[blu] & 65535;
var gray=((0.2125 * red) + (0.7154 * grn) + (0.0721 * blu) ) / 65535.0;
factor=32767.0;
if (this.supportsAlpha) {
alp=(rgb >> 24) & 255;
sdata[1]=((alp * (128.49803) + 0.5)|0);
if (this.isAlphaPremultiplied) {
factor=alp * factor * (0.003921569) ;
}}sdata[0]=((gray * factor + 0.5)|0);
} else if (this.is_ICCGray_stdScale) {
red=this.fromsRGB8LUT16[red] & 65535;
grn=this.fromsRGB8LUT16[grn] & 65535;
blu=this.fromsRGB8LUT16[blu] & 65535;
var gray=(((0.2125 * red) + (0.7154 * grn) + (0.0721 * blu) + 0.5 )|0);
gray=this.fromLinearGray16ToOtherGray16LUT[gray] & 65535;
factor=0.49999237;
if (this.supportsAlpha) {
alp=(rgb >> 24) & 255;
sdata[1]=((alp * (128.49803) + 0.5)|0);
if (this.isAlphaPremultiplied) {
factor=alp * factor * (0.003921569) ;
}}sdata[0]=((gray * factor + 0.5)|0);
} else {
factor=0.003921569;
var norm=Clazz.array(Float.TYPE, [3]);
norm[0]=red * factor;
norm[1]=grn * factor;
norm[2]=blu * factor;
norm=this.colorSpace.fromRGB$FA(norm);
if (this.nonStdScale) {
for (var i=0; i < this.numColorComponents; i++) {
norm[i]=(norm[i] - this.compOffset[i]) * this.compScale[i];
if (norm[i] < 0.0 ) {
norm[i]=0.0;
}if (norm[i] > 1.0 ) {
norm[i]=1.0;
}}
}factor=32767.0;
if (this.supportsAlpha) {
alp=(rgb >> 24) & 255;
sdata[this.numColorComponents]=((alp * (128.49803) + 0.5)|0);
if (this.isAlphaPremultiplied) {
factor*=alp * (0.003921569);
}}for (var i=0; i < this.numColorComponents; i++) {
sdata[i]=((norm[i] * factor + 0.5)|0);
}
}return sdata;
}case 4:
{
var fdata;
if (pixel == null ) {
fdata=Clazz.array(Float.TYPE, [this.numComponents]);
} else {
fdata=pixel;
}var factor;
if (this.is_sRGB_stdScale || this.is_LinearRGB_stdScale ) {
if (this.is_LinearRGB_stdScale) {
red=this.fromsRGB8LUT16[red] & 65535;
grn=this.fromsRGB8LUT16[grn] & 65535;
blu=this.fromsRGB8LUT16[blu] & 65535;
factor=1.5259022E-5;
} else {
factor=0.003921569;
}if (this.supportsAlpha) {
alp=(rgb >> 24) & 255;
fdata[3]=alp * (0.003921569);
if (this.isAlphaPremultiplied) {
factor*=fdata[3];
}}fdata[0]=red * factor;
fdata[1]=grn * factor;
fdata[2]=blu * factor;
} else if (this.is_LinearGray_stdScale) {
red=this.fromsRGB8LUT16[red] & 65535;
grn=this.fromsRGB8LUT16[grn] & 65535;
blu=this.fromsRGB8LUT16[blu] & 65535;
fdata[0]=((0.2125 * red) + (0.7154 * grn) + (0.0721 * blu) ) / 65535.0;
if (this.supportsAlpha) {
alp=(rgb >> 24) & 255;
fdata[1]=alp * (0.003921569);
if (this.isAlphaPremultiplied) {
fdata[0]*=fdata[1];
}}} else if (this.is_ICCGray_stdScale) {
red=this.fromsRGB8LUT16[red] & 65535;
grn=this.fromsRGB8LUT16[grn] & 65535;
blu=this.fromsRGB8LUT16[blu] & 65535;
var gray=(((0.2125 * red) + (0.7154 * grn) + (0.0721 * blu) + 0.5 )|0);
fdata[0]=(this.fromLinearGray16ToOtherGray16LUT[gray] & 65535) / 65535.0;
if (this.supportsAlpha) {
alp=(rgb >> 24) & 255;
fdata[1]=alp * (0.003921569);
if (this.isAlphaPremultiplied) {
fdata[0]*=fdata[1];
}}} else {
var norm=Clazz.array(Float.TYPE, [3]);
factor=0.003921569;
norm[0]=red * factor;
norm[1]=grn * factor;
norm[2]=blu * factor;
norm=this.colorSpace.fromRGB$FA(norm);
if (this.supportsAlpha) {
alp=(rgb >> 24) & 255;
fdata[this.numColorComponents]=alp * factor;
if (this.isAlphaPremultiplied) {
factor*=alp;
for (var i=0; i < this.numColorComponents; i++) {
norm[i]*=factor;
}
}}for (var i=0; i < this.numColorComponents; i++) {
fdata[i]=norm[i];
}
}return fdata;
}case 5:
{
var ddata;
if (pixel == null ) {
ddata=Clazz.array(Double.TYPE, [this.numComponents]);
} else {
ddata=pixel;
}if (this.is_sRGB_stdScale || this.is_LinearRGB_stdScale ) {
var factor;
if (this.is_LinearRGB_stdScale) {
red=this.fromsRGB8LUT16[red] & 65535;
grn=this.fromsRGB8LUT16[grn] & 65535;
blu=this.fromsRGB8LUT16[blu] & 65535;
factor=1.5259021896696422E-5;
} else {
factor=0.00392156862745098;
}if (this.supportsAlpha) {
alp=(rgb >> 24) & 255;
ddata[3]=alp * (0.00392156862745098);
if (this.isAlphaPremultiplied) {
factor*=ddata[3];
}}ddata[0]=red * factor;
ddata[1]=grn * factor;
ddata[2]=blu * factor;
} else if (this.is_LinearGray_stdScale) {
red=this.fromsRGB8LUT16[red] & 65535;
grn=this.fromsRGB8LUT16[grn] & 65535;
blu=this.fromsRGB8LUT16[blu] & 65535;
ddata[0]=((0.2125 * red) + (0.7154 * grn) + (0.0721 * blu) ) / 65535.0;
if (this.supportsAlpha) {
alp=(rgb >> 24) & 255;
ddata[1]=alp * (0.00392156862745098);
if (this.isAlphaPremultiplied) {
ddata[0]*=ddata[1];
}}} else if (this.is_ICCGray_stdScale) {
red=this.fromsRGB8LUT16[red] & 65535;
grn=this.fromsRGB8LUT16[grn] & 65535;
blu=this.fromsRGB8LUT16[blu] & 65535;
var gray=(((0.2125 * red) + (0.7154 * grn) + (0.0721 * blu) + 0.5 )|0);
ddata[0]=(this.fromLinearGray16ToOtherGray16LUT[gray] & 65535) / 65535.0;
if (this.supportsAlpha) {
alp=(rgb >> 24) & 255;
ddata[1]=alp * (0.00392156862745098);
if (this.isAlphaPremultiplied) {
ddata[0]*=ddata[1];
}}} else {
var factor=0.003921569;
var norm=Clazz.array(Float.TYPE, [3]);
norm[0]=red * factor;
norm[1]=grn * factor;
norm[2]=blu * factor;
norm=this.colorSpace.fromRGB$FA(norm);
if (this.supportsAlpha) {
alp=(rgb >> 24) & 255;
ddata[this.numColorComponents]=alp * (0.00392156862745098);
if (this.isAlphaPremultiplied) {
factor*=alp;
for (var i=0; i < this.numColorComponents; i++) {
norm[i]*=factor;
}
}}for (var i=0; i < this.numColorComponents; i++) {
ddata[i]=norm[i];
}
}return ddata;
}}
}var intpixel;
if (this.transferType == 3 && pixel != null  ) {
intpixel=pixel;
} else {
intpixel=Clazz.array(Integer.TYPE, [this.numComponents]);
}if (this.is_sRGB_stdScale || this.is_LinearRGB_stdScale ) {
var precision;
var factor;
if (this.is_LinearRGB_stdScale) {
if (this.transferType == 0) {
red=this.fromsRGB8LUT8[red] & 255;
grn=this.fromsRGB8LUT8[grn] & 255;
blu=this.fromsRGB8LUT8[blu] & 255;
precision=8;
factor=0.003921569;
} else {
red=this.fromsRGB8LUT16[red] & 65535;
grn=this.fromsRGB8LUT16[grn] & 65535;
blu=this.fromsRGB8LUT16[blu] & 65535;
precision=16;
factor=1.5259022E-5;
}} else {
precision=8;
factor=0.003921569;
}if (this.supportsAlpha) {
alp=(rgb >> 24) & 255;
if (this.nBits[3] == 8) {
intpixel[3]=alp;
} else {
intpixel[3]=((alp * (0.003921569) * ((1 << this.nBits[3]) - 1)  + 0.5)|0);
}if (this.isAlphaPremultiplied) {
factor*=(alp * (0.003921569));
precision=-1;
}}if (this.nBits[0] == precision) {
intpixel[0]=red;
} else {
intpixel[0]=((red * factor * ((1 << this.nBits[0]) - 1)  + 0.5)|0);
}if (this.nBits[1] == precision) {
intpixel[1]=(grn);
} else {
intpixel[1]=((grn * factor * ((1 << this.nBits[1]) - 1)  + 0.5)|0);
}if (this.nBits[2] == precision) {
intpixel[2]=(blu);
} else {
intpixel[2]=((blu * factor * ((1 << this.nBits[2]) - 1)  + 0.5)|0);
}} else if (this.is_LinearGray_stdScale) {
red=this.fromsRGB8LUT16[red] & 65535;
grn=this.fromsRGB8LUT16[grn] & 65535;
blu=this.fromsRGB8LUT16[blu] & 65535;
var gray=((0.2125 * red) + (0.7154 * grn) + (0.0721 * blu) ) / 65535.0;
if (this.supportsAlpha) {
alp=(rgb >> 24) & 255;
if (this.nBits[1] == 8) {
intpixel[1]=alp;
} else {
intpixel[1]=((alp * (0.003921569) * ((1 << this.nBits[1]) - 1)  + 0.5)|0);
}if (this.isAlphaPremultiplied) {
gray*=(alp * (0.003921569));
}}intpixel[0]=((gray * ((1 << this.nBits[0]) - 1) + 0.5)|0);
} else if (this.is_ICCGray_stdScale) {
red=this.fromsRGB8LUT16[red] & 65535;
grn=this.fromsRGB8LUT16[grn] & 65535;
blu=this.fromsRGB8LUT16[blu] & 65535;
var gray16=(((0.2125 * red) + (0.7154 * grn) + (0.0721 * blu) + 0.5 )|0);
var gray=(this.fromLinearGray16ToOtherGray16LUT[gray16] & 65535) / 65535.0;
if (this.supportsAlpha) {
alp=(rgb >> 24) & 255;
if (this.nBits[1] == 8) {
intpixel[1]=alp;
} else {
intpixel[1]=((alp * (0.003921569) * ((1 << this.nBits[1]) - 1)  + 0.5)|0);
}if (this.isAlphaPremultiplied) {
gray*=(alp * (0.003921569));
}}intpixel[0]=((gray * ((1 << this.nBits[0]) - 1) + 0.5)|0);
} else {
var norm=Clazz.array(Float.TYPE, [3]);
var factor=0.003921569;
norm[0]=red * factor;
norm[1]=grn * factor;
norm[2]=blu * factor;
norm=this.colorSpace.fromRGB$FA(norm);
if (this.nonStdScale) {
for (var i=0; i < this.numColorComponents; i++) {
norm[i]=(norm[i] - this.compOffset[i]) * this.compScale[i];
if (norm[i] < 0.0 ) {
norm[i]=0.0;
}if (norm[i] > 1.0 ) {
norm[i]=1.0;
}}
}if (this.supportsAlpha) {
alp=(rgb >> 24) & 255;
if (this.nBits[this.numColorComponents] == 8) {
intpixel[this.numColorComponents]=alp;
} else {
intpixel[this.numColorComponents]=((alp * factor * ((1 << this.nBits[this.numColorComponents]) - 1)  + 0.5)|0);
}if (this.isAlphaPremultiplied) {
factor*=alp;
for (var i=0; i < this.numColorComponents; i++) {
norm[i]*=factor;
}
}}for (var i=0; i < this.numColorComponents; i++) {
intpixel[i]=((norm[i] * ((1 << this.nBits[i]) - 1) + 0.5)|0);
}
}switch (this.transferType) {
case 0:
{
var bdata;
if (pixel == null ) {
bdata=Clazz.array(Byte.TYPE, [this.numComponents]);
} else {
bdata=pixel;
}for (var i=0; i < this.numComponents; i++) {
bdata[i]=((255 & intpixel[i])|0);
}
return bdata;
}case 1:
{
var sdata;
if (pixel == null ) {
sdata=Clazz.array(Short.TYPE, [this.numComponents]);
} else {
sdata=pixel;
}for (var i=0; i < this.numComponents; i++) {
sdata[i]=((intpixel[i] & 65535)|0);
}
return sdata;
}case 3:
if (this.maxBits > 23) {
for (var i=0; i < this.numComponents; i++) {
if (intpixel[i] > ((1 << this.nBits[i]) - 1)) {
intpixel[i]=(1 << this.nBits[i]) - 1;
}}
}return intpixel;
}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["This method has not been " + "implemented for transferType " + this.transferType ]);
});

Clazz.newMeth(C$, 'getComponents$I$IA$I',  function (pixel, components, offset) {
if (this.numComponents > 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["More than one component per pixel"]);
}if (this.needScaleInit) {
p$1.initScale.apply(this, []);
}if (this.noUnnorm) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["This ColorModel does not support the unnormalized form"]);
}if (components == null ) {
components=Clazz.array(Integer.TYPE, [offset + 1]);
}components[offset + 0]=(pixel & ((1 << this.nBits[0]) - 1));
return components;
});

Clazz.newMeth(C$, 'getComponents$O$IA$I',  function (pixel, components, offset) {
var intpixel;
if (this.needScaleInit) {
p$1.initScale.apply(this, []);
}if (this.noUnnorm) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["This ColorModel does not support the unnormalized form"]);
}if (Clazz.instanceOf(pixel, Clazz.array(Integer.TYPE, -1))) {
intpixel=pixel;
} else {
intpixel=$I$(1).toIntArray$O(pixel);
if (intpixel == null ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method has not been " + "implemented for transferType " + this.transferType ]);
}}if (intpixel.length < this.numComponents) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Length of pixel array < number of components in model"]);
}if (components == null ) {
components=Clazz.array(Integer.TYPE, [offset + this.numComponents]);
} else if ((components.length - offset) < this.numComponents) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Length of components array < number of components in model"]);
}System.arraycopy$O$I$O$I$I(intpixel, 0, components, offset, this.numComponents);
return components;
});

Clazz.newMeth(C$, 'getUnnormalizedComponents$FA$I$IA$I',  function (normComponents, normOffset, components, offset) {
if (this.needScaleInit) {
p$1.initScale.apply(this, []);
}if (this.noUnnorm) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["This ColorModel does not support the unnormalized form"]);
}return C$.superclazz.prototype.getUnnormalizedComponents$FA$I$IA$I.apply(this, [normComponents, normOffset, components, offset]);
});

Clazz.newMeth(C$, 'getNormalizedComponents$IA$I$FA$I',  function (components, offset, normComponents, normOffset) {
if (this.needScaleInit) {
p$1.initScale.apply(this, []);
}if (this.noUnnorm) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["This ColorModel does not support the unnormalized form"]);
}return C$.superclazz.prototype.getNormalizedComponents$IA$I$FA$I.apply(this, [components, offset, normComponents, normOffset]);
});

Clazz.newMeth(C$, 'getDataElement$IA$I',  function (components, offset) {
if (this.needScaleInit) {
p$1.initScale.apply(this, []);
}if (this.numComponents == 1) {
if (this.noUnnorm) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["This ColorModel does not support the unnormalized form"]);
}return components[offset + 0];
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["This model returns " + this.numComponents + " elements in the pixel array." ]);
});

Clazz.newMeth(C$, 'getDataElements$IA$I$O',  function (components, offset, obj) {
if (this.needScaleInit) {
p$1.initScale.apply(this, []);
}if (this.noUnnorm) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["This ColorModel does not support the unnormalized form"]);
}if ((components.length - offset) < this.numComponents) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Component array too small" + " (should be " + this.numComponents ]);
}switch (this.transferType) {
case 3:
{
var pixel;
if (obj == null ) {
pixel=Clazz.array(Integer.TYPE, [this.numComponents]);
} else {
pixel=obj;
}System.arraycopy$O$I$O$I$I(components, offset, pixel, 0, this.numComponents);
return pixel;
}case 0:
{
var pixel;
if (obj == null ) {
pixel=Clazz.array(Byte.TYPE, [this.numComponents]);
} else {
pixel=obj;
}for (var i=0; i < this.numComponents; i++) {
pixel[i]=((components[offset + i] & 255)|0);
}
return pixel;
}case 1:
{
var pixel;
if (obj == null ) {
pixel=Clazz.array(Short.TYPE, [this.numComponents]);
} else {
pixel=obj;
}for (var i=0; i < this.numComponents; i++) {
pixel[i]=((components[offset + i] & 65535)|0);
}
return pixel;
}default:
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method has not been " + "implemented for transferType " + this.transferType ]);
}
});

Clazz.newMeth(C$, 'getDataElement$FA$I',  function (normComponents, normOffset) {
if (this.numComponents > 1) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["More than one component per pixel"]);
}if (this.signed) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Component value is signed"]);
}if (this.needScaleInit) {
p$1.initScale.apply(this, []);
}var pixel=this.getDataElements$FA$I$O(normComponents, normOffset, null);
switch (this.transferType) {
case 0:
{
var bpixel=pixel;
return bpixel[0] & 255;
}case 1:
{
var uspixel=pixel;
return uspixel[0] & 65535;
}case 3:
{
var ipixel=pixel;
return ipixel[0];
}default:
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method has not been " + "implemented for transferType " + this.transferType ]);
}
});

Clazz.newMeth(C$, 'getDataElements$FA$I$O',  function (normComponents, normOffset, obj) {
var needAlpha=this.supportsAlpha && this.isAlphaPremultiplied ;
var stdNormComponents;
if (this.needScaleInit) {
p$1.initScale.apply(this, []);
}if (this.nonStdScale) {
stdNormComponents=Clazz.array(Float.TYPE, [this.numComponents]);
for (var c=0, nc=normOffset; c < this.numColorComponents; c++, nc++) {
stdNormComponents[c]=(normComponents[nc] - this.compOffset[c]) * this.compScale[c];
if (stdNormComponents[c] < 0.0 ) {
stdNormComponents[c]=0.0;
}if (stdNormComponents[c] > 1.0 ) {
stdNormComponents[c]=1.0;
}}
if (this.supportsAlpha) {
stdNormComponents[this.numColorComponents]=normComponents[this.numColorComponents + normOffset];
}normOffset=0;
} else {
stdNormComponents=normComponents;
}switch (this.transferType) {
case 0:
var bpixel;
if (obj == null ) {
bpixel=Clazz.array(Byte.TYPE, [this.numComponents]);
} else {
bpixel=obj;
}if (needAlpha) {
var alpha=stdNormComponents[this.numColorComponents + normOffset];
for (var c=0, nc=normOffset; c < this.numColorComponents; c++, nc++) {
bpixel[c]=(((stdNormComponents[nc] * alpha) * (((1 << this.nBits[c]) - 1)) + 0.5)|0);
}
bpixel[this.numColorComponents]=((alpha * (((1 << this.nBits[this.numColorComponents]) - 1)) + 0.5)|0);
} else {
for (var c=0, nc=normOffset; c < this.numComponents; c++, nc++) {
bpixel[c]=((stdNormComponents[nc] * (((1 << this.nBits[c]) - 1)) + 0.5)|0);
}
}return bpixel;
case 1:
var uspixel;
if (obj == null ) {
uspixel=Clazz.array(Short.TYPE, [this.numComponents]);
} else {
uspixel=obj;
}if (needAlpha) {
var alpha=stdNormComponents[this.numColorComponents + normOffset];
for (var c=0, nc=normOffset; c < this.numColorComponents; c++, nc++) {
uspixel[c]=(((stdNormComponents[nc] * alpha) * (((1 << this.nBits[c]) - 1)) + 0.5)|0);
}
uspixel[this.numColorComponents]=((alpha * (((1 << this.nBits[this.numColorComponents]) - 1)) + 0.5)|0);
} else {
for (var c=0, nc=normOffset; c < this.numComponents; c++, nc++) {
uspixel[c]=((stdNormComponents[nc] * (((1 << this.nBits[c]) - 1)) + 0.5)|0);
}
}return uspixel;
case 3:
var ipixel;
if (obj == null ) {
ipixel=Clazz.array(Integer.TYPE, [this.numComponents]);
} else {
ipixel=obj;
}if (needAlpha) {
var alpha=stdNormComponents[this.numColorComponents + normOffset];
for (var c=0, nc=normOffset; c < this.numColorComponents; c++, nc++) {
ipixel[c]=(((stdNormComponents[nc] * alpha) * (((1 << this.nBits[c]) - 1)) + 0.5)|0);
}
ipixel[this.numColorComponents]=((alpha * (((1 << this.nBits[this.numColorComponents]) - 1)) + 0.5)|0);
} else {
for (var c=0, nc=normOffset; c < this.numComponents; c++, nc++) {
ipixel[c]=((stdNormComponents[nc] * (((1 << this.nBits[c]) - 1)) + 0.5)|0);
}
}return ipixel;
case 2:
var spixel;
if (obj == null ) {
spixel=Clazz.array(Short.TYPE, [this.numComponents]);
} else {
spixel=obj;
}if (needAlpha) {
var alpha=stdNormComponents[this.numColorComponents + normOffset];
for (var c=0, nc=normOffset; c < this.numColorComponents; c++, nc++) {
spixel[c]=((stdNormComponents[nc] * alpha * 32767.0  + 0.5)|0);
}
spixel[this.numColorComponents]=((alpha * 32767.0 + 0.5)|0);
} else {
for (var c=0, nc=normOffset; c < this.numComponents; c++, nc++) {
spixel[c]=((stdNormComponents[nc] * 32767.0 + 0.5)|0);
}
}return spixel;
case 4:
var fpixel;
if (obj == null ) {
fpixel=Clazz.array(Float.TYPE, [this.numComponents]);
} else {
fpixel=obj;
}if (needAlpha) {
var alpha=normComponents[this.numColorComponents + normOffset];
for (var c=0, nc=normOffset; c < this.numColorComponents; c++, nc++) {
fpixel[c]=normComponents[nc] * alpha;
}
fpixel[this.numColorComponents]=alpha;
} else {
for (var c=0, nc=normOffset; c < this.numComponents; c++, nc++) {
fpixel[c]=normComponents[nc];
}
}return fpixel;
case 5:
var dpixel;
if (obj == null ) {
dpixel=Clazz.array(Double.TYPE, [this.numComponents]);
} else {
dpixel=obj;
}if (needAlpha) {
var alpha=(normComponents[this.numColorComponents + normOffset]);
for (var c=0, nc=normOffset; c < this.numColorComponents; c++, nc++) {
dpixel[c]=normComponents[nc] * alpha;
}
dpixel[this.numColorComponents]=alpha;
} else {
for (var c=0, nc=normOffset; c < this.numComponents; c++, nc++) {
dpixel[c]=normComponents[nc];
}
}return dpixel;
default:
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method has not been " + "implemented for transferType " + this.transferType ]);
}
});

Clazz.newMeth(C$, 'getNormalizedComponents$O$FA$I',  function (pixel, normComponents, normOffset) {
if (normComponents == null ) {
normComponents=Clazz.array(Float.TYPE, [this.numComponents + normOffset]);
}switch (this.transferType) {
case 0:
var bpixel=pixel;
for (var c=0, nc=normOffset; c < this.numComponents; c++, nc++) {
normComponents[nc]=((bpixel[c] & 255)) / (((1 << this.nBits[c]) - 1));
}
break;
case 1:
var uspixel=pixel;
for (var c=0, nc=normOffset; c < this.numComponents; c++, nc++) {
normComponents[nc]=((uspixel[c] & 65535)) / (((1 << this.nBits[c]) - 1));
}
break;
case 3:
var ipixel=pixel;
for (var c=0, nc=normOffset; c < this.numComponents; c++, nc++) {
normComponents[nc]=(ipixel[c]) / (((1 << this.nBits[c]) - 1));
}
break;
case 2:
var spixel=pixel;
for (var c=0, nc=normOffset; c < this.numComponents; c++, nc++) {
normComponents[nc]=(spixel[c]) / 32767.0;
}
break;
case 4:
var fpixel=pixel;
for (var c=0, nc=normOffset; c < this.numComponents; c++, nc++) {
normComponents[nc]=fpixel[c];
}
break;
case 5:
var dpixel=pixel;
for (var c=0, nc=normOffset; c < this.numComponents; c++, nc++) {
normComponents[nc]=dpixel[c];
}
break;
default:
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method has not been " + "implemented for transferType " + this.transferType ]);
}
if (this.supportsAlpha && this.isAlphaPremultiplied ) {
var alpha=normComponents[this.numColorComponents + normOffset];
if (alpha != 0.0 ) {
var invAlpha=1.0 / alpha;
for (var c=normOffset; c < this.numColorComponents + normOffset; c++) {
normComponents[c]*=invAlpha;
}
}}if (this.min != null ) {
for (var c=0; c < this.numColorComponents; c++) {
normComponents[c + normOffset]=this.min[c] + this.diffMinMax[c] * normComponents[c + normOffset];
}
}return normComponents;
});

Clazz.newMeth(C$, 'coerceData$java_awt_image_WritableRaster$Z',  function (raster, isAlphaPremultiplied) {
if ((this.supportsAlpha == false ) || (this.isAlphaPremultiplied == isAlphaPremultiplied ) ) {
return this;
}var w=raster.getWidth$();
var h=raster.getHeight$();
var aIdx=raster.getNumBands$() - 1;
var normAlpha;
var rminX=raster.getMinX$();
var rY=raster.getMinY$();
var rX;
if (isAlphaPremultiplied) {
switch (this.transferType) {
case 0:
{
var pixel=null;
var zpixel=null;
var alphaScale=1.0 / (((1 << this.nBits[aIdx]) - 1));
for (var y=0; y < h; y++, rY++) {
rX=rminX;
for (var x=0; x < w; x++, rX++) {
pixel=raster.getDataElements$I$I$O(rX, rY, pixel);
normAlpha=(pixel[aIdx] & 255) * alphaScale;
if (normAlpha != 0.0 ) {
for (var c=0; c < aIdx; c++) {
pixel[c]=(((pixel[c] & 255) * normAlpha + 0.5)|0);
}
raster.setDataElements$I$I$O(rX, rY, pixel);
} else {
if (zpixel == null ) {
zpixel=Clazz.array(Byte.TYPE, [this.numComponents]);
$I$(2).fill$BA$B(zpixel, 0);
}raster.setDataElements$I$I$O(rX, rY, zpixel);
}}
}
}break;
case 1:
{
var pixel=null;
var zpixel=null;
var alphaScale=1.0 / (((1 << this.nBits[aIdx]) - 1));
for (var y=0; y < h; y++, rY++) {
rX=rminX;
for (var x=0; x < w; x++, rX++) {
pixel=raster.getDataElements$I$I$O(rX, rY, pixel);
normAlpha=(pixel[aIdx] & 65535) * alphaScale;
if (normAlpha != 0.0 ) {
for (var c=0; c < aIdx; c++) {
pixel[c]=(((pixel[c] & 65535) * normAlpha + 0.5)|0);
}
raster.setDataElements$I$I$O(rX, rY, pixel);
} else {
if (zpixel == null ) {
zpixel=Clazz.array(Short.TYPE, [this.numComponents]);
$I$(2).fill$HA$H(zpixel, 0);
}raster.setDataElements$I$I$O(rX, rY, zpixel);
}}
}
}break;
case 3:
{
var pixel=null;
var zpixel=null;
var alphaScale=1.0 / (((1 << this.nBits[aIdx]) - 1));
for (var y=0; y < h; y++, rY++) {
rX=rminX;
for (var x=0; x < w; x++, rX++) {
pixel=raster.getDataElements$I$I$O(rX, rY, pixel);
normAlpha=pixel[aIdx] * alphaScale;
if (normAlpha != 0.0 ) {
for (var c=0; c < aIdx; c++) {
pixel[c]=((pixel[c] * normAlpha + 0.5)|0);
}
raster.setDataElements$I$I$O(rX, rY, pixel);
} else {
if (zpixel == null ) {
zpixel=Clazz.array(Integer.TYPE, [this.numComponents]);
$I$(2).fill$IA$I(zpixel, 0);
}raster.setDataElements$I$I$O(rX, rY, zpixel);
}}
}
}break;
case 2:
{
var pixel=null;
var zpixel=null;
var alphaScale=3.051851E-5;
for (var y=0; y < h; y++, rY++) {
rX=rminX;
for (var x=0; x < w; x++, rX++) {
pixel=raster.getDataElements$I$I$O(rX, rY, pixel);
normAlpha=pixel[aIdx] * alphaScale;
if (normAlpha != 0.0 ) {
for (var c=0; c < aIdx; c++) {
pixel[c]=((pixel[c] * normAlpha + 0.5)|0);
}
raster.setDataElements$I$I$O(rX, rY, pixel);
} else {
if (zpixel == null ) {
zpixel=Clazz.array(Short.TYPE, [this.numComponents]);
$I$(2).fill$HA$H(zpixel, 0);
}raster.setDataElements$I$I$O(rX, rY, zpixel);
}}
}
}break;
case 4:
{
var pixel=null;
var zpixel=null;
for (var y=0; y < h; y++, rY++) {
rX=rminX;
for (var x=0; x < w; x++, rX++) {
pixel=raster.getDataElements$I$I$O(rX, rY, pixel);
normAlpha=pixel[aIdx];
if (normAlpha != 0.0 ) {
for (var c=0; c < aIdx; c++) {
pixel[c]*=normAlpha;
}
raster.setDataElements$I$I$O(rX, rY, pixel);
} else {
if (zpixel == null ) {
zpixel=Clazz.array(Float.TYPE, [this.numComponents]);
$I$(2).fill$FA$F(zpixel, 0.0);
}raster.setDataElements$I$I$O(rX, rY, zpixel);
}}
}
}break;
case 5:
{
var pixel=null;
var zpixel=null;
for (var y=0; y < h; y++, rY++) {
rX=rminX;
for (var x=0; x < w; x++, rX++) {
pixel=raster.getDataElements$I$I$O(rX, rY, pixel);
var dnormAlpha=pixel[aIdx];
if (dnormAlpha != 0.0 ) {
for (var c=0; c < aIdx; c++) {
pixel[c]*=dnormAlpha;
}
raster.setDataElements$I$I$O(rX, rY, pixel);
} else {
if (zpixel == null ) {
zpixel=Clazz.array(Double.TYPE, [this.numComponents]);
$I$(2).fill$DA$D(zpixel, 0.0);
}raster.setDataElements$I$I$O(rX, rY, zpixel);
}}
}
}break;
default:
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method has not been " + "implemented for transferType " + this.transferType ]);
}
} else {
switch (this.transferType) {
case 0:
{
var pixel=null;
var alphaScale=1.0 / (((1 << this.nBits[aIdx]) - 1));
for (var y=0; y < h; y++, rY++) {
rX=rminX;
for (var x=0; x < w; x++, rX++) {
pixel=raster.getDataElements$I$I$O(rX, rY, pixel);
normAlpha=(pixel[aIdx] & 255) * alphaScale;
if (normAlpha != 0.0 ) {
var invAlpha=1.0 / normAlpha;
for (var c=0; c < aIdx; c++) {
pixel[c]=(((pixel[c] & 255) * invAlpha + 0.5)|0);
}
raster.setDataElements$I$I$O(rX, rY, pixel);
}}
}
}break;
case 1:
{
var pixel=null;
var alphaScale=1.0 / (((1 << this.nBits[aIdx]) - 1));
for (var y=0; y < h; y++, rY++) {
rX=rminX;
for (var x=0; x < w; x++, rX++) {
pixel=raster.getDataElements$I$I$O(rX, rY, pixel);
normAlpha=(pixel[aIdx] & 65535) * alphaScale;
if (normAlpha != 0.0 ) {
var invAlpha=1.0 / normAlpha;
for (var c=0; c < aIdx; c++) {
pixel[c]=(((pixel[c] & 65535) * invAlpha + 0.5)|0);
}
raster.setDataElements$I$I$O(rX, rY, pixel);
}}
}
}break;
case 3:
{
var pixel=null;
var alphaScale=1.0 / (((1 << this.nBits[aIdx]) - 1));
for (var y=0; y < h; y++, rY++) {
rX=rminX;
for (var x=0; x < w; x++, rX++) {
pixel=raster.getDataElements$I$I$O(rX, rY, pixel);
normAlpha=pixel[aIdx] * alphaScale;
if (normAlpha != 0.0 ) {
var invAlpha=1.0 / normAlpha;
for (var c=0; c < aIdx; c++) {
pixel[c]=((pixel[c] * invAlpha + 0.5)|0);
}
raster.setDataElements$I$I$O(rX, rY, pixel);
}}
}
}break;
case 2:
{
var pixel=null;
var alphaScale=3.051851E-5;
for (var y=0; y < h; y++, rY++) {
rX=rminX;
for (var x=0; x < w; x++, rX++) {
pixel=raster.getDataElements$I$I$O(rX, rY, pixel);
normAlpha=pixel[aIdx] * alphaScale;
if (normAlpha != 0.0 ) {
var invAlpha=1.0 / normAlpha;
for (var c=0; c < aIdx; c++) {
pixel[c]=((pixel[c] * invAlpha + 0.5)|0);
}
raster.setDataElements$I$I$O(rX, rY, pixel);
}}
}
}break;
case 4:
{
var pixel=null;
for (var y=0; y < h; y++, rY++) {
rX=rminX;
for (var x=0; x < w; x++, rX++) {
pixel=raster.getDataElements$I$I$O(rX, rY, pixel);
normAlpha=pixel[aIdx];
if (normAlpha != 0.0 ) {
var invAlpha=1.0 / normAlpha;
for (var c=0; c < aIdx; c++) {
pixel[c]*=invAlpha;
}
raster.setDataElements$I$I$O(rX, rY, pixel);
}}
}
}break;
case 5:
{
var pixel=null;
for (var y=0; y < h; y++, rY++) {
rX=rminX;
for (var x=0; x < w; x++, rX++) {
pixel=raster.getDataElements$I$I$O(rX, rY, pixel);
var dnormAlpha=pixel[aIdx];
if (dnormAlpha != 0.0 ) {
var invAlpha=1.0 / dnormAlpha;
for (var c=0; c < aIdx; c++) {
pixel[c]*=invAlpha;
}
raster.setDataElements$I$I$O(rX, rY, pixel);
}}
}
}break;
default:
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["This method has not been " + "implemented for transferType " + this.transferType ]);
}
}if (!this.signed) {
return Clazz.new_(C$.c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[this.colorSpace, this.nBits, this.supportsAlpha, isAlphaPremultiplied, this.transparency, this.transferType]);
} else {
return Clazz.new_(C$.c$$java_awt_color_ColorSpace$Z$Z$I$I,[this.colorSpace, this.supportsAlpha, isAlphaPremultiplied, this.transparency, this.transferType]);
}});

Clazz.newMeth(C$, 'isCompatibleRaster$java_awt_image_Raster',  function (raster) {
var sm=raster.getSampleModel$();
if (Clazz.instanceOf(sm, "java.awt.image.ComponentSampleModel")) {
if (sm.getNumBands$() != this.getNumComponents$()) {
return false;
}for (var i=0; i < this.nBits.length; i++) {
if (sm.getSampleSize$I(i) < this.nBits[i]) {
return false;
}}
return (raster.getTransferType$() == this.transferType);
} else {
return false;
}});

Clazz.newMeth(C$, 'createCompatibleWritableRaster$I$I',  function (w, h) {
var raster=null;
switch (this.transferType) {
case 0:
case 1:
raster=$I$(3).createInterleavedRaster$I$I$I$I$java_awt_Point(this.transferType, w, h, this.numComponents, null);
break;
default:
var sm=this.createCompatibleSampleModel$I$I(w, h);
var db=sm.createDataBuffer$();
raster=$I$(3).createWritableRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point(sm, db, null);
}
return raster;
});

Clazz.newMeth(C$, 'createCompatibleSampleModel$I$I',  function (w, h) {
var bandOffsets=Clazz.array(Integer.TYPE, [this.numComponents]);
for (var i=0; i < this.numComponents; i++) {
bandOffsets[i]=i;
}
switch (this.transferType) {
case 0:
case 1:
return null;
default:
return Clazz.new_($I$(4,1).c$$I$I$I$I$I$IA,[this.transferType, w, h, this.numComponents, w * this.numComponents, bandOffsets]);
}
});

Clazz.newMeth(C$, 'isCompatibleSampleModel$java_awt_image_SampleModel',  function (sm) {
if (!(Clazz.instanceOf(sm, "java.awt.image.ComponentSampleModel"))) {
return false;
}if (this.numComponents != sm.getNumBands$()) {
return false;
}if (sm.getTransferType$() != this.transferType) {
return false;
}return true;
});

Clazz.newMeth(C$, 'getAlphaRaster$java_awt_image_WritableRaster',  function (raster) {
if (this.hasAlpha$() == false ) {
return null;
}var x=raster.getMinX$();
var y=raster.getMinY$();
var band=Clazz.array(Integer.TYPE, [1]);
band[0]=raster.getNumBands$() - 1;
return raster.createWritableChild$I$I$I$I$I$I$IA(x, y, raster.getWidth$(), raster.getHeight$(), x, y, band);
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (!C$.superclazz.prototype.equals$O.apply(this, [obj])) {
return false;
}if (obj.getClass$() !== this.getClass$() ) {
return false;
}return true;
});
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:12 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
