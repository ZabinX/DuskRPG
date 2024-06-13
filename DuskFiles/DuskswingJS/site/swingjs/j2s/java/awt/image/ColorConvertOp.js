(function(){var P$=Clazz.newPackage("java.awt.image"),p$1={},I$=[[0,'sun.java2d.cmm.ProfileDeferralMgr','java.awt.color.ICC_Profile','java.awt.color.ColorSpace','sun.java2d.cmm.ColorTransform','sun.java2d.cmm.CMSManager','java.awt.color.ICC_ColorSpace','java.awt.image.ComponentColorModel','java.awt.image.BufferedImage','java.awt.image.Raster','java.awt.Point',['java.awt.geom.Point2D','.Float'],'swingjs.JSUtil']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ColorConvertOp", null, null, ['java.awt.image.BufferedImageOp', 'java.awt.image.RasterOp']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['gotProfiles'],'O',['profileList','java.awt.color.ICC_Profile[]','CSList','java.awt.color.ColorSpace[]','thisTransform','sun.java2d.cmm.ColorTransform','+thisRasterTransform','thisSrcProfile','java.awt.color.ICC_Profile','+thisDestProfile','hints','java.awt.RenderingHints','srcMinVals','float[]','+srcMaxVals','+dstMinVals','+dstMaxVals']]]

Clazz.newMeth(C$, 'c$$java_awt_RenderingHints',  function (hints) {
;C$.$init$.apply(this);
this.profileList=Clazz.array($I$(2), [0]);
this.hints=hints;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_color_ColorSpace$java_awt_RenderingHints',  function (cspace, hints) {
;C$.$init$.apply(this);
if (cspace == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["ColorSpace cannot be null"]);
}if (Clazz.instanceOf(cspace, "java.awt.color.ICC_ColorSpace")) {
this.profileList=Clazz.array($I$(2), [1]);
this.profileList[0]=(cspace).getProfile$();
} else {
this.CSList=Clazz.array($I$(3), [1]);
this.CSList[0]=cspace;
}this.hints=hints;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_color_ColorSpace$java_awt_color_ColorSpace$java_awt_RenderingHints',  function (srcCspace, dstCspace, hints) {
;C$.$init$.apply(this);
if ((srcCspace == null ) || (dstCspace == null ) ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["ColorSpaces cannot be null"]);
}if ((Clazz.instanceOf(srcCspace, "java.awt.color.ICC_ColorSpace")) && (Clazz.instanceOf(dstCspace, "java.awt.color.ICC_ColorSpace")) ) {
this.profileList=Clazz.array($I$(2), [2]);
this.profileList[0]=(srcCspace).getProfile$();
this.profileList[1]=(dstCspace).getProfile$();
p$1.getMinMaxValsFromColorSpaces$java_awt_color_ColorSpace$java_awt_color_ColorSpace.apply(this, [srcCspace, dstCspace]);
} else {
this.CSList=Clazz.array($I$(3), [2]);
this.CSList[0]=srcCspace;
this.CSList[1]=dstCspace;
}this.hints=hints;
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_color_ICC_ProfileA$java_awt_RenderingHints',  function (profiles, hints) {
;C$.$init$.apply(this);
if (profiles == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Profiles cannot be null"]);
}this.gotProfiles=true;
this.profileList=Clazz.array($I$(2), [profiles.length]);
for (var i1=0; i1 < profiles.length; i1++) {
this.profileList[i1]=profiles[i1];
}
this.hints=hints;
}, 1);

Clazz.newMeth(C$, 'getICC_Profiles$',  function () {
if (this.gotProfiles) {
var profiles=Clazz.array($I$(2), [this.profileList.length]);
for (var i1=0; i1 < this.profileList.length; i1++) {
profiles[i1]=this.profileList[i1];
}
return profiles;
}return null;
});

Clazz.newMeth(C$, 'filter$java_awt_image_BufferedImage$java_awt_image_BufferedImage',  function (src, dest) {
var srcColorSpace;
var destColorSpace;
var savdest=null;
if (Clazz.instanceOf(src.getColorModel$(), "java.awt.image.IndexColorModel")) {
var icm=src.getColorModel$();
src=icm.convertToIntDiscrete$java_awt_image_Raster$Z(src.getRaster$(), true);
}srcColorSpace=src.getColorModel$().getColorSpace$();
if (dest != null ) {
if (Clazz.instanceOf(dest.getColorModel$(), "java.awt.image.IndexColorModel")) {
savdest=dest;
dest=null;
destColorSpace=null;
} else {
destColorSpace=dest.getColorModel$().getColorSpace$();
}} else {
destColorSpace=null;
}if ((this.CSList != null ) || (!(Clazz.instanceOf(srcColorSpace, "java.awt.color.ICC_ColorSpace"))) || ((dest != null ) && (!(Clazz.instanceOf(destColorSpace, "java.awt.color.ICC_ColorSpace"))) )  ) {
dest=p$1.nonICCBIFilter$java_awt_image_BufferedImage$java_awt_color_ColorSpace$java_awt_image_BufferedImage$java_awt_color_ColorSpace.apply(this, [src, srcColorSpace, dest, destColorSpace]);
} else {
dest=p$1.ICCBIFilter$java_awt_image_BufferedImage$java_awt_color_ColorSpace$java_awt_image_BufferedImage$java_awt_color_ColorSpace.apply(this, [src, srcColorSpace, dest, destColorSpace]);
}if (savdest != null ) {
var big=savdest.createGraphics$();
try {
big.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(dest, 0, 0, null);
} finally {
big.dispose$();
}
return savdest;
} else {
return dest;
}});

Clazz.newMeth(C$, 'ICCBIFilter$java_awt_image_BufferedImage$java_awt_color_ColorSpace$java_awt_image_BufferedImage$java_awt_color_ColorSpace',  function (src, srcColorSpace, dest, destColorSpace) {
var nProfiles=this.profileList.length;
var srcProfile=null;
var destProfile=null;
srcProfile=(srcColorSpace).getProfile$();
if (dest == null ) {
if (nProfiles == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Destination ColorSpace is undefined"]);
}destProfile=this.profileList[nProfiles - 1];
dest=this.createCompatibleDestImage$java_awt_image_BufferedImage$java_awt_image_ColorModel(src, null);
} else {
if (src.getHeight$() != dest.getHeight$() || src.getWidth$() != dest.getWidth$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Width or height of BufferedImages do not match"]);
}destProfile=(destColorSpace).getProfile$();
}if (srcProfile === destProfile ) {
var noTrans=true;
for (var i=0; i < nProfiles; i++) {
if (srcProfile !== this.profileList[i] ) {
noTrans=false;
break;
}}
if (noTrans) {
var g=dest.createGraphics$();
try {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(src, 0, 0, null);
} finally {
g.dispose$();
}
return dest;
}}if ((this.thisTransform == null ) || (this.thisSrcProfile !== srcProfile ) || (this.thisDestProfile !== destProfile )  ) {
p$1.updateBITransform$java_awt_color_ICC_Profile$java_awt_color_ICC_Profile.apply(this, [srcProfile, destProfile]);
}this.thisTransform.colorConvert$java_awt_image_BufferedImage$java_awt_image_BufferedImage(src, dest);
return dest;
}, p$1);

Clazz.newMeth(C$, 'updateBITransform$java_awt_color_ICC_Profile$java_awt_color_ICC_Profile',  function (srcProfile, destProfile) {
var theProfiles;
var i1;
var nProfiles;
var nTransforms;
var whichTrans;
var renderState;
var theTransforms;
var useSrc=false;
var useDest=false;
nProfiles=this.profileList.length;
nTransforms=nProfiles;
if ((nProfiles == 0) || (srcProfile !== this.profileList[0] ) ) {
nTransforms+=1;
useSrc=true;
}if ((nProfiles == 0) || (destProfile !== this.profileList[nProfiles - 1] ) || (nTransforms < 2)  ) {
nTransforms+=1;
useDest=true;
}theProfiles=Clazz.array($I$(2), [nTransforms]);
var idx=0;
if (useSrc) {
theProfiles[idx++]=srcProfile;
}for (i1=0; i1 < nProfiles; i1++) {
theProfiles[idx++]=this.profileList[i1];
}
if (useDest) {
theProfiles[idx]=destProfile;
}theTransforms=Clazz.array($I$(4), [nTransforms]);
if (theProfiles[0].getProfileClass$() == 2) {
renderState=1;
} else {
renderState=0;
}whichTrans=1;
var mdl=$I$(5).getModule$();
for (i1=0; i1 < nTransforms; i1++) {
if (i1 == nTransforms - 1) {
whichTrans=2;
} else {
if ((whichTrans == 4) && (theProfiles[i1].getProfileClass$() == 5) ) {
renderState=0;
whichTrans=1;
}}theTransforms[i1]=mdl.createTransform$java_awt_color_ICC_Profile$I$I(theProfiles[i1], renderState, whichTrans);
renderState=p$1.getRenderingIntent$java_awt_color_ICC_Profile.apply(this, [theProfiles[i1]]);
whichTrans=4;
}
this.thisTransform=mdl.createTransform$sun_java2d_cmm_ColorTransformA(theTransforms);
this.thisSrcProfile=srcProfile;
this.thisDestProfile=destProfile;
}, p$1);

Clazz.newMeth(C$, 'filter$java_awt_image_Raster$java_awt_image_WritableRaster',  function (src, dest) {
if (this.CSList != null ) {
return p$1.nonICCRasterFilter$java_awt_image_Raster$java_awt_image_WritableRaster.apply(this, [src, dest]);
}var nProfiles=this.profileList.length;
if (nProfiles < 2) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Source or Destination ColorSpace is undefined"]);
}if (src.getNumBands$() != this.profileList[0].getNumComponents$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Numbers of source Raster bands and source color space components do not match"]);
}if (dest == null ) {
dest=this.createCompatibleDestRaster$java_awt_image_Raster(src);
} else {
if (src.getHeight$() != dest.getHeight$() || src.getWidth$() != dest.getWidth$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Width or height of Rasters do not match"]);
}if (dest.getNumBands$() != this.profileList[nProfiles - 1].getNumComponents$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Numbers of destination Raster bands and destination color space components do not match"]);
}}if (this.thisRasterTransform == null ) {
var i1;
var whichTrans;
var renderState;
var theTransforms;
theTransforms=Clazz.array($I$(4), [nProfiles]);
if (this.profileList[0].getProfileClass$() == 2) {
renderState=1;
} else {
renderState=0;
}whichTrans=1;
var mdl=$I$(5).getModule$();
for (i1=0; i1 < nProfiles; i1++) {
if (i1 == nProfiles - 1) {
whichTrans=2;
} else {
if ((whichTrans == 4) && (this.profileList[i1].getProfileClass$() == 5) ) {
renderState=0;
whichTrans=1;
}}theTransforms[i1]=mdl.createTransform$java_awt_color_ICC_Profile$I$I(this.profileList[i1], renderState, whichTrans);
renderState=p$1.getRenderingIntent$java_awt_color_ICC_Profile.apply(this, [this.profileList[i1]]);
whichTrans=4;
}
this.thisRasterTransform=mdl.createTransform$sun_java2d_cmm_ColorTransformA(theTransforms);
}var srcTransferType=src.getTransferType$();
var dstTransferType=dest.getTransferType$();
if ((srcTransferType == 4) || (srcTransferType == 5) || (dstTransferType == 4) || (dstTransferType == 5)  ) {
if (this.srcMinVals == null ) {
p$1.getMinMaxValsFromProfiles$java_awt_color_ICC_Profile$java_awt_color_ICC_Profile.apply(this, [this.profileList[0], this.profileList[nProfiles - 1]]);
}this.thisRasterTransform.colorConvert$java_awt_image_Raster$java_awt_image_WritableRaster$FA$FA$FA$FA(src, dest, this.srcMinVals, this.srcMaxVals, this.dstMinVals, this.dstMaxVals);
} else {
this.thisRasterTransform.colorConvert$java_awt_image_Raster$java_awt_image_WritableRaster(src, dest);
}return dest;
});

Clazz.newMeth(C$, 'getBounds2D$java_awt_image_BufferedImage',  function (src) {
return this.getBounds2D$java_awt_image_Raster(src.getRaster$());
});

Clazz.newMeth(C$, 'getBounds2D$java_awt_image_Raster',  function (src) {
return src.getBounds$();
});

Clazz.newMeth(C$, 'createCompatibleDestImage$java_awt_image_BufferedImage$java_awt_image_ColorModel',  function (src, destCM) {
var cs=null;
;if (destCM == null ) {
if (this.CSList == null ) {
var nProfiles=this.profileList.length;
if (nProfiles == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Destination ColorSpace is undefined"]);
}var destProfile=this.profileList[nProfiles - 1];
cs=Clazz.new_($I$(6,1).c$$java_awt_color_ICC_Profile,[destProfile]);
} else {
var nSpaces=this.CSList.length;
cs=this.CSList[nSpaces - 1];
}}return p$1.createCompatibleDestImage$java_awt_image_BufferedImage$java_awt_image_ColorModel$java_awt_color_ColorSpace.apply(this, [src, destCM, cs]);
});

Clazz.newMeth(C$, 'createCompatibleDestImage$java_awt_image_BufferedImage$java_awt_image_ColorModel$java_awt_color_ColorSpace',  function (src, destCM, destCS) {
var image;
if (destCM == null ) {
var srcCM=src.getColorModel$();
var nbands=destCS.getNumComponents$();
var hasAlpha=srcCM.hasAlpha$();
if (hasAlpha) {
nbands+=1;
}var nbits=Clazz.array(Integer.TYPE, [nbands]);
for (var i=0; i < nbands; i++) {
nbits[i]=8;
}
destCM=Clazz.new_([destCS, nbits, hasAlpha, srcCM.isAlphaPremultiplied$(), srcCM.getTransparency$(), 0],$I$(7,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I);
}var w=src.getWidth$();
var h=src.getHeight$();
image=Clazz.new_([destCM, destCM.createCompatibleWritableRaster$I$I(w, h), destCM.isAlphaPremultiplied$(), null],$I$(8,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable);
return image;
}, p$1);

Clazz.newMeth(C$, 'createCompatibleDestRaster$java_awt_image_Raster',  function (src) {
var ncomponents;
if (this.CSList != null ) {
if (this.CSList.length != 2) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Destination ColorSpace is undefined"]);
}ncomponents=this.CSList[1].getNumComponents$();
} else {
var nProfiles=this.profileList.length;
if (nProfiles < 2) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Destination ColorSpace is undefined"]);
}ncomponents=this.profileList[nProfiles - 1].getNumComponents$();
}var dest=$I$(9,"createInterleavedRaster$I$I$I$I$java_awt_Point",[0, src.getWidth$(), src.getHeight$(), ncomponents, Clazz.new_([src.getMinX$(), src.getMinY$()],$I$(10,1).c$$I$I)]);
return dest;
});

Clazz.newMeth(C$, 'getPoint2D$java_awt_geom_Point2D$java_awt_geom_Point2D',  function (srcPt, dstPt) {
if (dstPt == null ) {
dstPt=Clazz.new_($I$(11,1));
}dstPt.setLocation$D$D(srcPt.getX$(), srcPt.getY$());
return dstPt;
});

Clazz.newMeth(C$, 'getRenderingIntent$java_awt_color_ICC_Profile',  function (profile) {
var header=profile.getData$I(1751474532);
var index=64;
return ((header[index + 2] & 255) << 8) | (header[index + 3] & 255);
}, p$1);

Clazz.newMeth(C$, 'getRenderingHints$',  function () {
return this.hints;
});

Clazz.newMeth(C$, 'nonICCBIFilter$java_awt_image_BufferedImage$java_awt_color_ColorSpace$java_awt_image_BufferedImage$java_awt_color_ColorSpace',  function (src, srcColorSpace, dst, dstColorSpace) {
$I$(12).notImplemented$S("ColorConvertOp does not implement ColorConvertOp.nonICCBIFilter");
return null;
}, p$1);

Clazz.newMeth(C$, 'nonICCRasterFilter$java_awt_image_Raster$java_awt_image_WritableRaster',  function (src, dst) {
$I$(12).notImplemented$S("ColorConvertOp does not implement ColorConvertOp.nonICCRRasterFilter");
return null;
}, p$1);

Clazz.newMeth(C$, 'getMinMaxValsFromProfiles$java_awt_color_ICC_Profile$java_awt_color_ICC_Profile',  function (srcProfile, dstProfile) {
var type=srcProfile.getColorSpaceType$();
var nc=srcProfile.getNumComponents$();
this.srcMinVals=Clazz.array(Float.TYPE, [nc]);
this.srcMaxVals=Clazz.array(Float.TYPE, [nc]);
p$1.setMinMax$I$I$FA$FA.apply(this, [type, nc, this.srcMinVals, this.srcMaxVals]);
type=dstProfile.getColorSpaceType$();
nc=dstProfile.getNumComponents$();
this.dstMinVals=Clazz.array(Float.TYPE, [nc]);
this.dstMaxVals=Clazz.array(Float.TYPE, [nc]);
p$1.setMinMax$I$I$FA$FA.apply(this, [type, nc, this.dstMinVals, this.dstMaxVals]);
}, p$1);

Clazz.newMeth(C$, 'setMinMax$I$I$FA$FA',  function (type, nc, minVals, maxVals) {
if (type == 1) {
minVals[0]=0.0;
maxVals[0]=100.0;
minVals[1]=-128.0;
maxVals[1]=127.0;
minVals[2]=-128.0;
maxVals[2]=127.0;
} else if (type == 0) {
minVals[0]=minVals[1]=minVals[2]=0.0;
maxVals[0]=maxVals[1]=maxVals[2]=1.9999695;
} else {
for (var i=0; i < nc; i++) {
minVals[i]=0.0;
maxVals[i]=1.0;
}
}}, p$1);

Clazz.newMeth(C$, 'getMinMaxValsFromColorSpaces$java_awt_color_ColorSpace$java_awt_color_ColorSpace',  function (srcCspace, dstCspace) {
var nc=srcCspace.getNumComponents$();
this.srcMinVals=Clazz.array(Float.TYPE, [nc]);
this.srcMaxVals=Clazz.array(Float.TYPE, [nc]);
for (var i=0; i < nc; i++) {
this.srcMinVals[i]=srcCspace.getMinValue$I(i);
this.srcMaxVals[i]=srcCspace.getMaxValue$I(i);
}
nc=dstCspace.getNumComponents$();
this.dstMinVals=Clazz.array(Float.TYPE, [nc]);
this.dstMaxVals=Clazz.array(Float.TYPE, [nc]);
for (var i=0; i < nc; i++) {
this.dstMinVals[i]=dstCspace.getMinValue$I(i);
this.dstMaxVals[i]=dstCspace.getMaxValue$I(i);
}
}, p$1);

C$.$static$=function(){C$.$static$=0;
{
if ($I$(1).deferring) {
$I$(1).activateProfiles$();
}};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:11 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
