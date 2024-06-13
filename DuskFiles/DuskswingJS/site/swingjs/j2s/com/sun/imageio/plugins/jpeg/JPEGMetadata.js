(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.jpeg"),p$1={},I$=[[0,'java.util.ArrayList','com.sun.imageio.plugins.jpeg.JPEGBuffer','com.sun.imageio.plugins.jpeg.SOFMarkerSegment','com.sun.imageio.plugins.jpeg.DQTMarkerSegment','com.sun.imageio.plugins.jpeg.DHTMarkerSegment','com.sun.imageio.plugins.jpeg.DRIMarkerSegment','com.sun.imageio.plugins.jpeg.JFIFMarkerSegment','com.sun.imageio.plugins.jpeg.MarkerSegment','com.sun.imageio.plugins.jpeg.AdobeMarkerSegment','com.sun.imageio.plugins.jpeg.COMMarkerSegment','com.sun.imageio.plugins.jpeg.SOSMarkerSegment','com.sun.imageio.plugins.jpeg.JPEG','InternalError',['com.sun.imageio.plugins.jpeg.JPEG','.JCS'],'java.awt.color.ColorSpace','javax.imageio.metadata.IIOMetadataNode','javax.imageio.plugins.jpeg.JPEGHuffmanTable','java.awt.Point',['com.sun.imageio.plugins.jpeg.SOFMarkerSegment','.ComponentSpec'],['com.sun.imageio.plugins.jpeg.SOSMarkerSegment','.ScanComponentSpec']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JPEGMetadata", null, 'javax.imageio.metadata.IIOMetadata', 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.resetSequence=null;
this.inThumb=false;
this.markerSequence=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['inThumb','hasAlpha','isStream','transparencyDone'],'O',['resetSequence','java.util.List','+markerSequence']]]

Clazz.newMeth(C$, 'c$$Z$Z',  function (isStream, inThumb) {
;C$.superclazz.c$$Z$S$S$SA$SA.apply(this,[true, "javax_imageio_jpeg_image_1.0", "com.sun.imageio.plugins.jpeg.JPEGImageMetadataFormat", null, null]);C$.$init$.apply(this);
this.inThumb=inThumb;
this.isStream=isStream;
if (isStream) {
this.nativeMetadataFormatName="javax_imageio_jpeg_stream_1.0";
this.nativeMetadataFormatClassName="com.sun.imageio.plugins.jpeg.JPEGStreamMetadataFormat";
}}, 1);

Clazz.newMeth(C$, 'c$$Z$Z$javax_imageio_stream_ImageInputStream$com_sun_imageio_plugins_jpeg_JPEGImageReader',  function (isStream, isThumb, iis, reader) {
C$.c$$Z$Z.apply(this, [isStream, isThumb]);
var buffer=Clazz.new_($I$(2,1).c$$javax_imageio_stream_ImageInputStream,[iis]);
buffer.loadBuf$I(0);
if (((buffer.buf[0] & 255) != 255) || ((buffer.buf[1] & 255) != 216) || ((buffer.buf[2] & 255) != 255)  ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Image format error"]);
}var done=false;
buffer.bufAvail-=2;
buffer.bufPtr=2;
var newGuy=null;
while (!done){
var buf;
var ptr;
buffer.loadBuf$I(1);
if (false) {
System.out.println$S("top of loop");
buffer.print$I(10);
}buffer.scanForFF$com_sun_imageio_plugins_jpeg_JPEGImageReader(reader);
switch (buffer.buf[buffer.bufPtr] & 255) {
case 0:
if (false) {
System.out.println$S("Skipping 0");
}--buffer.bufAvail;
++buffer.bufPtr;
break;
case 192:
case 193:
case 194:
if (isStream) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["SOF not permitted in stream metadata"]);
}newGuy=Clazz.new_($I$(3,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer,[buffer]);
break;
case 219:
newGuy=Clazz.new_($I$(4,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer,[buffer]);
break;
case 196:
newGuy=Clazz.new_($I$(5,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer,[buffer]);
break;
case 221:
newGuy=Clazz.new_($I$(6,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer,[buffer]);
break;
case 224:
buffer.loadBuf$I(8);
buf=buffer.buf;
ptr=buffer.bufPtr;
if ((buf[ptr + 3] == 74 ) && (buf[ptr + 4] == 70 ) && (buf[ptr + 5] == 73 ) && (buf[ptr + 6] == 70 ) && (buf[ptr + 7] == 0)  ) {
if (this.inThumb) {
reader.warningOccurred$I(1);
var dummy=Clazz.new_($I$(7,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer,[buffer]);
} else if (isStream) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["JFIF not permitted in stream metadata"]);
} else if (this.markerSequence.isEmpty$() == false ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["JFIF APP0 must be first marker after SOI"]);
} else {
newGuy=Clazz.new_($I$(7,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer,[buffer]);
}} else if ((buf[ptr + 3] == 74 ) && (buf[ptr + 4] == 70 ) && (buf[ptr + 5] == 88 ) && (buf[ptr + 6] == 88 ) && (buf[ptr + 7] == 0)  ) {
if (isStream) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["JFXX not permitted in stream metadata"]);
}if (this.inThumb) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["JFXX markers not allowed in JFIF JPEG thumbnail"]);
}var jfif=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(7)), true);
if (jfif == null ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["JFXX encountered without prior JFIF!"]);
}jfif.addJFXX$com_sun_imageio_plugins_jpeg_JPEGBuffer$com_sun_imageio_plugins_jpeg_JPEGImageReader(buffer, reader);
} else {
newGuy=Clazz.new_($I$(8,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer,[buffer]);
newGuy.loadData$com_sun_imageio_plugins_jpeg_JPEGBuffer(buffer);
}break;
case 226:
buffer.loadBuf$I(15);
if ((buffer.buf[buffer.bufPtr + 3] == 73 ) && (buffer.buf[buffer.bufPtr + 4] == 67 ) && (buffer.buf[buffer.bufPtr + 5] == 67 ) && (buffer.buf[buffer.bufPtr + 6] == 95 ) && (buffer.buf[buffer.bufPtr + 7] == 80 ) && (buffer.buf[buffer.bufPtr + 8] == 82 ) && (buffer.buf[buffer.bufPtr + 9] == 79 ) && (buffer.buf[buffer.bufPtr + 10] == 70 ) && (buffer.buf[buffer.bufPtr + 11] == 73 ) && (buffer.buf[buffer.bufPtr + 12] == 76 ) && (buffer.buf[buffer.bufPtr + 13] == 69 ) && (buffer.buf[buffer.bufPtr + 14] == 0)  ) {
if (isStream) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["ICC profiles not permitted in stream metadata"]);
}var jfif=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(7)), true);
if (jfif == null ) {
newGuy=Clazz.new_($I$(8,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer,[buffer]);
newGuy.loadData$com_sun_imageio_plugins_jpeg_JPEGBuffer(buffer);
} else {
jfif.addICC$com_sun_imageio_plugins_jpeg_JPEGBuffer(buffer);
}} else {
newGuy=Clazz.new_($I$(8,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer,[buffer]);
newGuy.loadData$com_sun_imageio_plugins_jpeg_JPEGBuffer(buffer);
}break;
case 238:
buffer.loadBuf$I(8);
if ((buffer.buf[buffer.bufPtr + 3] == 65 ) && (buffer.buf[buffer.bufPtr + 4] == 100 ) && (buffer.buf[buffer.bufPtr + 5] == 111 ) && (buffer.buf[buffer.bufPtr + 6] == 98 ) && (buffer.buf[buffer.bufPtr + 7] == 101 )  ) {
if (isStream) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Adobe APP14 markers not permitted in stream metadata"]);
}newGuy=Clazz.new_($I$(9,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer,[buffer]);
} else {
newGuy=Clazz.new_($I$(8,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer,[buffer]);
newGuy.loadData$com_sun_imageio_plugins_jpeg_JPEGBuffer(buffer);
}break;
case 254:
newGuy=Clazz.new_($I$(10,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer,[buffer]);
break;
case 218:
if (isStream) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["SOS not permitted in stream metadata"]);
}newGuy=Clazz.new_($I$(11,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer,[buffer]);
break;
case 208:
case 209:
case 210:
case 211:
case 212:
case 213:
case 214:
case 215:
if (false) {
System.out.println$S("Restart Marker");
}++buffer.bufPtr;
--buffer.bufAvail;
break;
case 217:
done=true;
++buffer.bufPtr;
--buffer.bufAvail;
break;
default:
newGuy=Clazz.new_($I$(8,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer,[buffer]);
newGuy.loadData$com_sun_imageio_plugins_jpeg_JPEGBuffer(buffer);
newGuy.unknown=true;
break;
}
if (newGuy != null ) {
this.markerSequence.add$O(newGuy);
if (false) {
newGuy.print$();
}newGuy=null;
}}
buffer.pushBack$();
if (!p$1.isConsistent.apply(this, [])) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Inconsistent metadata read from stream"]);
}}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_ImageWriteParam$com_sun_imageio_plugins_jpeg_JPEGImageWriter',  function (param, writer) {
C$.c$$Z$Z.apply(this, [true, false]);
var jparam=null;
if ((param != null ) && (Clazz.instanceOf(param, "javax.imageio.plugins.jpeg.JPEGImageWriteParam")) ) {
jparam=param;
if (!jparam.areTablesSet$()) {
jparam=null;
}}if (jparam != null ) {
this.markerSequence.add$O(Clazz.new_([jparam.getQTables$()],$I$(4,1).c$$javax_imageio_plugins_jpeg_JPEGQTableA));
this.markerSequence.add$O(Clazz.new_([jparam.getDCHuffmanTables$(), jparam.getACHuffmanTables$()],$I$(5,1).c$$javax_imageio_plugins_jpeg_JPEGHuffmanTableA$javax_imageio_plugins_jpeg_JPEGHuffmanTableA));
} else {
this.markerSequence.add$O(Clazz.new_([$I$(12).getDefaultQTables$()],$I$(4,1).c$$javax_imageio_plugins_jpeg_JPEGQTableA));
this.markerSequence.add$O(Clazz.new_([$I$(12).getDefaultHuffmanTables$Z(true), $I$(12).getDefaultHuffmanTables$Z(false)],$I$(5,1).c$$javax_imageio_plugins_jpeg_JPEGHuffmanTableA$javax_imageio_plugins_jpeg_JPEGHuffmanTableA));
}if (!p$1.isConsistent.apply(this, [])) {
throw Clazz.new_($I$(13,1).c$$S,["Default stream metadata is inconsistent"]);
}}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam$com_sun_imageio_plugins_jpeg_JPEGImageWriter',  function (imageType, param, writer) {
C$.c$$Z$Z.apply(this, [false, false]);
var wantJFIF=true;
var wantAdobe=false;
var transform=0;
var willSubsample=true;
var wantICC=false;
var wantProg=false;
var wantOptimized=false;
var wantExtended=false;
var wantQTables=true;
var wantHTables=true;
var quality=0.75;
var componentIDs=Clazz.array(Byte.TYPE, -1, [1, 2, 3, 4]);
var numComponents=0;
var destType=null;
if (param != null ) {
destType=param.getDestinationType$();
if (destType != null ) {
if (imageType != null ) {
writer.warningOccurred$I(0);
destType=null;
}}if (param.canWriteProgressive$()) {
if (param.getProgressiveMode$() == 1) {
wantProg=true;
wantOptimized=true;
wantHTables=false;
}}if (Clazz.instanceOf(param, "javax.imageio.plugins.jpeg.JPEGImageWriteParam")) {
var jparam=param;
if (jparam.areTablesSet$()) {
wantQTables=false;
wantHTables=false;
if ((jparam.getDCHuffmanTables$().length > 2) || (jparam.getACHuffmanTables$().length > 2) ) {
wantExtended=true;
}}if (!wantProg) {
wantOptimized=jparam.getOptimizeHuffmanTables$();
if (wantOptimized) {
wantHTables=false;
}}}if (param.canWriteCompressed$()) {
if (param.getCompressionMode$() == 2) {
quality=param.getCompressionQuality$();
}}}var cs=null;
if (destType != null ) {
var cm=destType.getColorModel$();
numComponents=cm.getNumComponents$();
var hasExtraComponents=(cm.getNumColorComponents$() != numComponents);
var hasAlpha=cm.hasAlpha$();
cs=cm.getColorSpace$();
var type=cs.getType$();
switch (type) {
case 6:
willSubsample=false;
if (hasExtraComponents) {
wantJFIF=false;
}break;
case 13:
if (cs === $I$(14).getYCC$() ) {
wantJFIF=false;
componentIDs[0]=89;
componentIDs[1]=67;
componentIDs[2]=99;
if (hasAlpha) {
componentIDs[3]=65;
}}break;
case 3:
if (hasExtraComponents) {
wantJFIF=false;
if (!hasAlpha) {
wantAdobe=true;
transform=2;
}}break;
case 5:
wantJFIF=false;
wantAdobe=true;
willSubsample=false;
componentIDs[0]=82;
componentIDs[1]=71;
componentIDs[2]=66;
if (hasAlpha) {
componentIDs[3]=65;
}break;
default:
wantJFIF=false;
willSubsample=false;
}
} else if (imageType != null ) {
var cm=imageType.getColorModel$();
numComponents=cm.getNumComponents$();
var hasExtraComponents=(cm.getNumColorComponents$() != numComponents);
var hasAlpha=cm.hasAlpha$();
cs=cm.getColorSpace$();
var type=cs.getType$();
switch (type) {
case 6:
willSubsample=false;
if (hasExtraComponents) {
wantJFIF=false;
}break;
case 5:
if (hasAlpha) {
wantJFIF=false;
}break;
case 13:
wantJFIF=false;
willSubsample=false;
if (cs.equals$O($I$(15).getInstance$I(1002))) {
willSubsample=true;
wantAdobe=true;
componentIDs[0]=89;
componentIDs[1]=67;
componentIDs[2]=99;
if (hasAlpha) {
componentIDs[3]=65;
}}break;
case 3:
if (hasExtraComponents) {
wantJFIF=false;
if (!hasAlpha) {
wantAdobe=true;
transform=2;
}}break;
case 9:
wantJFIF=false;
wantAdobe=true;
transform=2;
break;
default:
wantJFIF=false;
willSubsample=false;
}
}if (wantJFIF && $I$(12).isNonStandardICC$java_awt_color_ColorSpace(cs) ) {
wantICC=true;
}if (wantJFIF) {
var jfif=Clazz.new_($I$(7,1));
this.markerSequence.add$O(jfif);
if (wantICC) {
try {
jfif.addICC$java_awt_color_ICC_ColorSpace(cs);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}}if (wantAdobe) {
this.markerSequence.add$O(Clazz.new_($I$(9,1).c$$I,[transform]));
}if (wantQTables) {
this.markerSequence.add$O(Clazz.new_($I$(4,1).c$$F$Z,[quality, willSubsample]));
}if (wantHTables) {
this.markerSequence.add$O(Clazz.new_($I$(5,1).c$$Z,[willSubsample]));
}this.markerSequence.add$O(Clazz.new_($I$(3,1).c$$Z$Z$Z$BA$I,[wantProg, wantExtended, willSubsample, componentIDs, numComponents]));
if (!wantProg) {
this.markerSequence.add$O(Clazz.new_($I$(11,1).c$$Z$BA$I,[willSubsample, componentIDs, numComponents]));
}if (!p$1.isConsistent.apply(this, [])) {
throw Clazz.new_($I$(13,1).c$$S,["Default image metadata is inconsistent"]);
}}, 1);

Clazz.newMeth(C$, 'findMarkerSegment$I',  function (tag) {
var iter=this.markerSequence.iterator$();
while (iter.hasNext$()){
var seg=iter.next$();
if (seg.tag == tag) {
return seg;
}}
return null;
});

Clazz.newMeth(C$, 'findMarkerSegment$Class$Z',  function (cls, first) {
if (first) {
var iter=this.markerSequence.iterator$();
while (iter.hasNext$()){
var seg=iter.next$();
if (cls.isInstance$O(seg)) {
return seg;
}}
} else {
var iter=this.markerSequence.listIterator$I(this.markerSequence.size$());
while (iter.hasPrevious$()){
var seg=iter.previous$();
if (cls.isInstance$O(seg)) {
return seg;
}}
}return null;
});

Clazz.newMeth(C$, 'findMarkerSegmentPosition$Class$Z',  function (cls, first) {
if (first) {
var iter=this.markerSequence.listIterator$();
for (var i=0; iter.hasNext$(); i++) {
var seg=iter.next$();
if (cls.isInstance$O(seg)) {
return i;
}}
} else {
var iter=this.markerSequence.listIterator$I(this.markerSequence.size$());
for (var i=this.markerSequence.size$() - 1; iter.hasPrevious$(); i--) {
var seg=iter.previous$();
if (cls.isInstance$O(seg)) {
return i;
}}
}return -1;
}, p$1);

Clazz.newMeth(C$, 'findLastUnknownMarkerSegmentPosition',  function () {
var iter=this.markerSequence.listIterator$I(this.markerSequence.size$());
for (var i=this.markerSequence.size$() - 1; iter.hasPrevious$(); i--) {
var seg=iter.previous$();
if (seg.unknown == true ) {
return i;
}}
return -1;
}, p$1);

Clazz.newMeth(C$, 'clone$',  function () {
var newGuy=null;
try {
newGuy=Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
} else {
throw e;
}
}
if (this.markerSequence != null ) {
newGuy.markerSequence=p$1.cloneSequence.apply(this, []);
}newGuy.resetSequence=null;
return newGuy;
});

Clazz.newMeth(C$, 'cloneSequence',  function () {
if (this.markerSequence == null ) {
return null;
}var retval=Clazz.new_([this.markerSequence.size$()],$I$(1,1).c$$I);
var iter=this.markerSequence.iterator$();
while (iter.hasNext$()){
var seg=iter.next$();
retval.add$O(seg.clone$());
}
return retval;
}, p$1);

Clazz.newMeth(C$, 'getAsTree$S',  function (formatName) {
if (formatName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null formatName!"]);
}if (this.isStream) {
if (formatName.equals$O("javax_imageio_jpeg_stream_1.0")) {
return this.getNativeTree$();
}} else {
if (formatName.equals$O("javax_imageio_jpeg_image_1.0")) {
return this.getNativeTree$();
}if (formatName.equals$O("javax_imageio_1.0")) {
return this.getStandardTree$();
}}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported format name: " + formatName]);
});

Clazz.newMeth(C$, 'getNativeTree$',  function () {
var root;
var top;
var iter=this.markerSequence.iterator$();
if (this.isStream) {
root=Clazz.new_($I$(16,1).c$$S,["javax_imageio_jpeg_stream_1.0"]);
top=root;
} else {
var sequence=Clazz.new_($I$(16,1).c$$S,["markerSequence"]);
if (!this.inThumb) {
root=Clazz.new_($I$(16,1).c$$S,["javax_imageio_jpeg_image_1.0"]);
var header=Clazz.new_($I$(16,1).c$$S,["JPEGvariety"]);
root.appendChild$org_w3c_dom_Node(header);
var jfif=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(7)), true);
if (jfif != null ) {
iter.next$();
header.appendChild$org_w3c_dom_Node(jfif.getNativeNode$());
}root.appendChild$org_w3c_dom_Node(sequence);
} else {
root=sequence;
}top=sequence;
}while (iter.hasNext$()){
var seg=iter.next$();
top.appendChild$org_w3c_dom_Node(seg.getNativeNode$());
}
return root;
});

Clazz.newMeth(C$, 'getStandardChromaNode$',  function () {
this.hasAlpha=false;
var sof=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(3)), true);
if (sof == null ) {
return null;
}var chroma=Clazz.new_($I$(16,1).c$$S,["Chroma"]);
var csType=Clazz.new_($I$(16,1).c$$S,["ColorSpaceType"]);
chroma.appendChild$org_w3c_dom_Node(csType);
var numChannels=sof.componentSpecs.length;
var numChanNode=Clazz.new_($I$(16,1).c$$S,["NumChannels"]);
chroma.appendChild$org_w3c_dom_Node(numChanNode);
numChanNode.setAttribute$S$S("value", Integer.toString$I(numChannels));
if (this.findMarkerSegment$Class$Z(Clazz.getClass($I$(7)), true) != null ) {
if (numChannels == 1) {
csType.setAttribute$S$S("name", "GRAY");
} else {
csType.setAttribute$S$S("name", "YCbCr");
}return chroma;
}var adobe=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(9)), true);
if (adobe != null ) {
switch (adobe.transform) {
case 2:
csType.setAttribute$S$S("name", "YCCK");
break;
case 1:
csType.setAttribute$S$S("name", "YCbCr");
break;
case 0:
if (numChannels == 3) {
csType.setAttribute$S$S("name", "RGB");
} else if (numChannels == 4) {
csType.setAttribute$S$S("name", "CMYK");
}break;
}
return chroma;
}if (numChannels < 3) {
csType.setAttribute$S$S("name", "GRAY");
if (numChannels == 2) {
this.hasAlpha=true;
}return chroma;
}var idsAreJFIF=true;
for (var i=0; i < sof.componentSpecs.length; i++) {
var id=sof.componentSpecs[i].componentId;
if ((id < 1) || (id >= sof.componentSpecs.length) ) {
idsAreJFIF=false;
}}
if (idsAreJFIF) {
csType.setAttribute$S$S("name", "YCbCr");
if (numChannels == 4) {
this.hasAlpha=true;
}return chroma;
}if ((sof.componentSpecs[0].componentId == 82 ) && (sof.componentSpecs[1].componentId == 71 ) && (sof.componentSpecs[2].componentId == 66 )  ) {
csType.setAttribute$S$S("name", "RGB");
if ((numChannels == 4) && (sof.componentSpecs[3].componentId == 65 ) ) {
this.hasAlpha=true;
}return chroma;
}if ((sof.componentSpecs[0].componentId == 89 ) && (sof.componentSpecs[1].componentId == 67 ) && (sof.componentSpecs[2].componentId == 99 )  ) {
csType.setAttribute$S$S("name", "PhotoYCC");
if ((numChannels == 4) && (sof.componentSpecs[3].componentId == 65 ) ) {
this.hasAlpha=true;
}return chroma;
}var subsampled=false;
var hfactor=sof.componentSpecs[0].HsamplingFactor;
var vfactor=sof.componentSpecs[0].VsamplingFactor;
for (var i=1; i < sof.componentSpecs.length; i++) {
if ((sof.componentSpecs[i].HsamplingFactor != hfactor) || (sof.componentSpecs[i].VsamplingFactor != vfactor) ) {
subsampled=true;
break;
}}
if (subsampled) {
csType.setAttribute$S$S("name", "YCbCr");
if (numChannels == 4) {
this.hasAlpha=true;
}return chroma;
}if (numChannels == 3) {
csType.setAttribute$S$S("name", "RGB");
} else {
csType.setAttribute$S$S("name", "CMYK");
}return chroma;
});

Clazz.newMeth(C$, 'getStandardCompressionNode$',  function () {
var compression=Clazz.new_($I$(16,1).c$$S,["Compression"]);
var name=Clazz.new_($I$(16,1).c$$S,["CompressionTypeName"]);
name.setAttribute$S$S("value", "JPEG");
compression.appendChild$org_w3c_dom_Node(name);
var lossless=Clazz.new_($I$(16,1).c$$S,["Lossless"]);
lossless.setAttribute$S$S("value", "FALSE");
compression.appendChild$org_w3c_dom_Node(lossless);
var sosCount=0;
var iter=this.markerSequence.iterator$();
while (iter.hasNext$()){
var ms=iter.next$();
if (ms.tag == 218) {
++sosCount;
}}
if (sosCount != 0) {
var prog=Clazz.new_($I$(16,1).c$$S,["NumProgressiveScans"]);
prog.setAttribute$S$S("value", Integer.toString$I(sosCount));
compression.appendChild$org_w3c_dom_Node(prog);
}return compression;
});

Clazz.newMeth(C$, 'getStandardDimensionNode$',  function () {
var dim=Clazz.new_($I$(16,1).c$$S,["Dimension"]);
var orient=Clazz.new_($I$(16,1).c$$S,["ImageOrientation"]);
orient.setAttribute$S$S("value", "normal");
dim.appendChild$org_w3c_dom_Node(orient);
var jfif=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(7)), true);
if (jfif != null ) {
var aspectRatio;
if (jfif.resUnits == 0) {
aspectRatio=(jfif.Xdensity) / jfif.Ydensity;
} else {
aspectRatio=(jfif.Ydensity) / jfif.Xdensity;
}var aspect=Clazz.new_($I$(16,1).c$$S,["PixelAspectRatio"]);
aspect.setAttribute$S$S("value", Float.toString$F(aspectRatio));
dim.insertBefore$org_w3c_dom_Node$org_w3c_dom_Node(aspect, orient);
if (jfif.resUnits != 0) {
var scale=(jfif.resUnits == 1) ? 25.4 : 10.0;
var horiz=Clazz.new_($I$(16,1).c$$S,["HorizontalPixelSize"]);
horiz.setAttribute$S$S("value", Float.toString$F(scale / jfif.Xdensity));
dim.appendChild$org_w3c_dom_Node(horiz);
var vert=Clazz.new_($I$(16,1).c$$S,["VerticalPixelSize"]);
vert.setAttribute$S$S("value", Float.toString$F(scale / jfif.Ydensity));
dim.appendChild$org_w3c_dom_Node(vert);
}}return dim;
});

Clazz.newMeth(C$, 'getStandardTextNode$',  function () {
var text=null;
if (this.findMarkerSegment$I(254) != null ) {
text=Clazz.new_($I$(16,1).c$$S,["Text"]);
var iter=this.markerSequence.iterator$();
while (iter.hasNext$()){
var seg=iter.next$();
if (seg.tag == 254) {
var com=seg;
var entry=Clazz.new_($I$(16,1).c$$S,["TextEntry"]);
entry.setAttribute$S$S("keyword", "comment");
entry.setAttribute$S$S("value", com.getComment$());
text.appendChild$org_w3c_dom_Node(entry);
}}
}return text;
});

Clazz.newMeth(C$, 'getStandardTransparencyNode$',  function () {
var trans=null;
if (this.hasAlpha == true ) {
trans=Clazz.new_($I$(16,1).c$$S,["Transparency"]);
var alpha=Clazz.new_($I$(16,1).c$$S,["Alpha"]);
alpha.setAttribute$S$S("value", "nonpremultiplied");
trans.appendChild$org_w3c_dom_Node(alpha);
}return trans;
});

Clazz.newMeth(C$, 'isReadOnly$',  function () {
return false;
});

Clazz.newMeth(C$, 'mergeTree$S$org_w3c_dom_Node',  function (formatName, root) {
if (formatName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null formatName!"]);
}if (root == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null root!"]);
}var copy=null;
if (this.resetSequence == null ) {
this.resetSequence=p$1.cloneSequence.apply(this, []);
copy=this.resetSequence;
} else {
copy=p$1.cloneSequence.apply(this, []);
}if (this.isStream && (formatName.equals$O("javax_imageio_jpeg_stream_1.0")) ) {
p$1.mergeNativeTree$org_w3c_dom_Node.apply(this, [root]);
} else if (!this.isStream && (formatName.equals$O("javax_imageio_jpeg_image_1.0")) ) {
p$1.mergeNativeTree$org_w3c_dom_Node.apply(this, [root]);
} else if (!this.isStream && (formatName.equals$O("javax_imageio_1.0")) ) {
p$1.mergeStandardTree$org_w3c_dom_Node.apply(this, [root]);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported format name: " + formatName]);
}if (!p$1.isConsistent.apply(this, [])) {
this.markerSequence=copy;
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["Merged tree is invalid; original restored", root]);
}});

Clazz.newMeth(C$, 'mergeNativeTree$org_w3c_dom_Node',  function (root) {
var name=root.getNodeName$();
if (name != ((this.isStream) ? "javax_imageio_jpeg_stream_1.0" : "javax_imageio_jpeg_image_1.0")) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["Invalid root node name: " + name, root]);
}if (root.getChildNodes$().getLength$() != 2) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["JPEGvariety and markerSequence nodes must be present", root]);
}p$1.mergeJFIFsubtree$org_w3c_dom_Node.apply(this, [root.getFirstChild$()]);
p$1.mergeSequenceSubtree$org_w3c_dom_Node.apply(this, [root.getLastChild$()]);
}, p$1);

Clazz.newMeth(C$, 'mergeJFIFsubtree$org_w3c_dom_Node',  function (JPEGvariety) {
if (JPEGvariety.getChildNodes$().getLength$() != 0) {
var jfifNode=JPEGvariety.getFirstChild$();
var jfifSeg=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(7)), true);
if (jfifSeg != null ) {
jfifSeg.updateFromNativeNode$org_w3c_dom_Node$Z(jfifNode, false);
} else {
this.markerSequence.add$I$O(0, Clazz.new_($I$(7,1).c$$org_w3c_dom_Node,[jfifNode]));
}}}, p$1);

Clazz.newMeth(C$, 'mergeSequenceSubtree$org_w3c_dom_Node',  function (sequenceTree) {
var children=sequenceTree.getChildNodes$();
for (var i=0; i < children.getLength$(); i++) {
var node=children.item$I(i);
var name=node.getNodeName$();
if (name.equals$O("dqt")) {
p$1.mergeDQTNode$org_w3c_dom_Node.apply(this, [node]);
} else if (name.equals$O("dht")) {
p$1.mergeDHTNode$org_w3c_dom_Node.apply(this, [node]);
} else if (name.equals$O("dri")) {
p$1.mergeDRINode$org_w3c_dom_Node.apply(this, [node]);
} else if (name.equals$O("com")) {
p$1.mergeCOMNode$org_w3c_dom_Node.apply(this, [node]);
} else if (name.equals$O("app14Adobe")) {
p$1.mergeAdobeNode$org_w3c_dom_Node.apply(this, [node]);
} else if (name.equals$O("unknown")) {
p$1.mergeUnknownNode$org_w3c_dom_Node.apply(this, [node]);
} else if (name.equals$O("sof")) {
p$1.mergeSOFNode$org_w3c_dom_Node.apply(this, [node]);
} else if (name.equals$O("sos")) {
p$1.mergeSOSNode$org_w3c_dom_Node.apply(this, [node]);
} else {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["Invalid node: " + name, node]);
}}
}, p$1);

Clazz.newMeth(C$, 'mergeDQTNode$org_w3c_dom_Node',  function (node) {
var oldDQTs=Clazz.new_($I$(1,1));
var iter=this.markerSequence.iterator$();
while (iter.hasNext$()){
var seg=iter.next$();
if (Clazz.instanceOf(seg, "com.sun.imageio.plugins.jpeg.DQTMarkerSegment")) {
oldDQTs.add$O(seg);
}}
if (!oldDQTs.isEmpty$()) {
var children=node.getChildNodes$();
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
var childID=$I$(8).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(child, null, "qtableId", 0, 3, true);
var dqt=null;
var tableIndex=-1;
for (var j=0; j < oldDQTs.size$(); j++) {
var testDQT=oldDQTs.get$I(j);
for (var k=0; k < testDQT.tables.size$(); k++) {
var testTable=testDQT.tables.get$I(k);
if (childID == testTable.tableID) {
dqt=testDQT;
tableIndex=k;
break;
}}
if (dqt != null ) break;
}
if (dqt != null ) {
dqt.tables.set$I$O(tableIndex, dqt.getQtableFromNode$org_w3c_dom_Node(child));
} else {
dqt=oldDQTs.get$I(oldDQTs.size$() - 1);
dqt.tables.add$O(dqt.getQtableFromNode$org_w3c_dom_Node(child));
}}
} else {
var newGuy=Clazz.new_($I$(4,1).c$$org_w3c_dom_Node,[node]);
var firstDHT=p$1.findMarkerSegmentPosition$Class$Z.apply(this, [Clazz.getClass($I$(5)), true]);
var firstSOF=p$1.findMarkerSegmentPosition$Class$Z.apply(this, [Clazz.getClass($I$(3)), true]);
var firstSOS=p$1.findMarkerSegmentPosition$Class$Z.apply(this, [Clazz.getClass($I$(11)), true]);
if (firstDHT != -1) {
this.markerSequence.add$I$O(firstDHT, newGuy);
} else if (firstSOF != -1) {
this.markerSequence.add$I$O(firstSOF, newGuy);
} else if (firstSOS != -1) {
this.markerSequence.add$I$O(firstSOS, newGuy);
} else {
this.markerSequence.add$O(newGuy);
}}}, p$1);

Clazz.newMeth(C$, 'mergeDHTNode$org_w3c_dom_Node',  function (node) {
var oldDHTs=Clazz.new_($I$(1,1));
var iter=this.markerSequence.iterator$();
while (iter.hasNext$()){
var seg=iter.next$();
if (Clazz.instanceOf(seg, "com.sun.imageio.plugins.jpeg.DHTMarkerSegment")) {
oldDHTs.add$O(seg);
}}
if (!oldDHTs.isEmpty$()) {
var children=node.getChildNodes$();
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
var attrs=child.getAttributes$();
var childID=$I$(8).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(child, attrs, "htableId", 0, 3, true);
var childClass=$I$(8).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(child, attrs, "class", 0, 1, true);
var dht=null;
var tableIndex=-1;
for (var j=0; j < oldDHTs.size$(); j++) {
var testDHT=oldDHTs.get$I(j);
for (var k=0; k < testDHT.tables.size$(); k++) {
var testTable=testDHT.tables.get$I(k);
if ((childID == testTable.tableID) && (childClass == testTable.tableClass) ) {
dht=testDHT;
tableIndex=k;
break;
}}
if (dht != null ) break;
}
if (dht != null ) {
dht.tables.set$I$O(tableIndex, dht.getHtableFromNode$org_w3c_dom_Node(child));
} else {
dht=oldDHTs.get$I(oldDHTs.size$() - 1);
dht.tables.add$O(dht.getHtableFromNode$org_w3c_dom_Node(child));
}}
} else {
var newGuy=Clazz.new_($I$(5,1).c$$org_w3c_dom_Node,[node]);
var lastDQT=p$1.findMarkerSegmentPosition$Class$Z.apply(this, [Clazz.getClass($I$(4)), false]);
var firstSOF=p$1.findMarkerSegmentPosition$Class$Z.apply(this, [Clazz.getClass($I$(3)), true]);
var firstSOS=p$1.findMarkerSegmentPosition$Class$Z.apply(this, [Clazz.getClass($I$(11)), true]);
if (lastDQT != -1) {
this.markerSequence.add$I$O(lastDQT + 1, newGuy);
} else if (firstSOF != -1) {
this.markerSequence.add$I$O(firstSOF, newGuy);
} else if (firstSOS != -1) {
this.markerSequence.add$I$O(firstSOS, newGuy);
} else {
this.markerSequence.add$O(newGuy);
}}}, p$1);

Clazz.newMeth(C$, 'mergeDRINode$org_w3c_dom_Node',  function (node) {
var dri=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(6)), true);
if (dri != null ) {
dri.updateFromNativeNode$org_w3c_dom_Node$Z(node, false);
} else {
var newGuy=Clazz.new_($I$(6,1).c$$org_w3c_dom_Node,[node]);
var firstSOF=p$1.findMarkerSegmentPosition$Class$Z.apply(this, [Clazz.getClass($I$(3)), true]);
var firstSOS=p$1.findMarkerSegmentPosition$Class$Z.apply(this, [Clazz.getClass($I$(11)), true]);
if (firstSOF != -1) {
this.markerSequence.add$I$O(firstSOF, newGuy);
} else if (firstSOS != -1) {
this.markerSequence.add$I$O(firstSOS, newGuy);
} else {
this.markerSequence.add$O(newGuy);
}}}, p$1);

Clazz.newMeth(C$, 'mergeCOMNode$org_w3c_dom_Node',  function (node) {
var newGuy=Clazz.new_($I$(10,1).c$$org_w3c_dom_Node,[node]);
p$1.insertCOMMarkerSegment$com_sun_imageio_plugins_jpeg_COMMarkerSegment.apply(this, [newGuy]);
}, p$1);

Clazz.newMeth(C$, 'insertCOMMarkerSegment$com_sun_imageio_plugins_jpeg_COMMarkerSegment',  function (newGuy) {
var lastCOM=p$1.findMarkerSegmentPosition$Class$Z.apply(this, [Clazz.getClass($I$(10)), false]);
var hasJFIF=(this.findMarkerSegment$Class$Z(Clazz.getClass($I$(7)), true) != null );
var firstAdobe=p$1.findMarkerSegmentPosition$Class$Z.apply(this, [Clazz.getClass($I$(9)), true]);
if (lastCOM != -1) {
this.markerSequence.add$I$O(lastCOM + 1, newGuy);
} else if (hasJFIF) {
this.markerSequence.add$I$O(1, newGuy);
} else if (firstAdobe != -1) {
this.markerSequence.add$I$O(firstAdobe + 1, newGuy);
} else {
this.markerSequence.add$I$O(0, newGuy);
}}, p$1);

Clazz.newMeth(C$, 'mergeAdobeNode$org_w3c_dom_Node',  function (node) {
var adobe=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(9)), true);
if (adobe != null ) {
adobe.updateFromNativeNode$org_w3c_dom_Node$Z(node, false);
} else {
var newGuy=Clazz.new_($I$(9,1).c$$org_w3c_dom_Node,[node]);
p$1.insertAdobeMarkerSegment$com_sun_imageio_plugins_jpeg_AdobeMarkerSegment.apply(this, [newGuy]);
}}, p$1);

Clazz.newMeth(C$, 'insertAdobeMarkerSegment$com_sun_imageio_plugins_jpeg_AdobeMarkerSegment',  function (newGuy) {
var hasJFIF=(this.findMarkerSegment$Class$Z(Clazz.getClass($I$(7)), true) != null );
var lastUnknown=p$1.findLastUnknownMarkerSegmentPosition.apply(this, []);
if (hasJFIF) {
this.markerSequence.add$I$O(1, newGuy);
} else if (lastUnknown != -1) {
this.markerSequence.add$I$O(lastUnknown + 1, newGuy);
} else {
this.markerSequence.add$I$O(0, newGuy);
}}, p$1);

Clazz.newMeth(C$, 'mergeUnknownNode$org_w3c_dom_Node',  function (node) {
var newGuy=Clazz.new_($I$(8,1).c$$org_w3c_dom_Node,[node]);
var lastUnknown=p$1.findLastUnknownMarkerSegmentPosition.apply(this, []);
var hasJFIF=(this.findMarkerSegment$Class$Z(Clazz.getClass($I$(7)), true) != null );
var firstAdobe=p$1.findMarkerSegmentPosition$Class$Z.apply(this, [Clazz.getClass($I$(9)), true]);
if (lastUnknown != -1) {
this.markerSequence.add$I$O(lastUnknown + 1, newGuy);
} else if (hasJFIF) {
this.markerSequence.add$I$O(1, newGuy);
}if (firstAdobe != -1) {
this.markerSequence.add$I$O(firstAdobe, newGuy);
} else {
this.markerSequence.add$I$O(0, newGuy);
}}, p$1);

Clazz.newMeth(C$, 'mergeSOFNode$org_w3c_dom_Node',  function (node) {
var sof=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(3)), true);
if (sof != null ) {
sof.updateFromNativeNode$org_w3c_dom_Node$Z(node, false);
} else {
var newGuy=Clazz.new_($I$(3,1).c$$org_w3c_dom_Node,[node]);
var firstSOS=p$1.findMarkerSegmentPosition$Class$Z.apply(this, [Clazz.getClass($I$(11)), true]);
if (firstSOS != -1) {
this.markerSequence.add$I$O(firstSOS, newGuy);
} else {
this.markerSequence.add$O(newGuy);
}}}, p$1);

Clazz.newMeth(C$, 'mergeSOSNode$org_w3c_dom_Node',  function (node) {
var firstSOS=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(11)), true);
var lastSOS=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(11)), false);
if (firstSOS != null ) {
if (firstSOS !== lastSOS ) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["Can\'t merge SOS node into a tree with > 1 SOS node", node]);
}firstSOS.updateFromNativeNode$org_w3c_dom_Node$Z(node, false);
} else {
this.markerSequence.add$O(Clazz.new_($I$(11,1).c$$org_w3c_dom_Node,[node]));
}}, p$1);

Clazz.newMeth(C$, 'mergeStandardTree$org_w3c_dom_Node',  function (root) {
this.transparencyDone=false;
var children=root.getChildNodes$();
for (var i=0; i < children.getLength$(); i++) {
var node=children.item$I(i);
var name=node.getNodeName$();
if (name.equals$O("Chroma")) {
p$1.mergeStandardChromaNode$org_w3c_dom_Node$org_w3c_dom_NodeList.apply(this, [node, children]);
} else if (name.equals$O("Compression")) {
p$1.mergeStandardCompressionNode$org_w3c_dom_Node.apply(this, [node]);
} else if (name.equals$O("Data")) {
p$1.mergeStandardDataNode$org_w3c_dom_Node.apply(this, [node]);
} else if (name.equals$O("Dimension")) {
p$1.mergeStandardDimensionNode$org_w3c_dom_Node.apply(this, [node]);
} else if (name.equals$O("Document")) {
p$1.mergeStandardDocumentNode$org_w3c_dom_Node.apply(this, [node]);
} else if (name.equals$O("Text")) {
p$1.mergeStandardTextNode$org_w3c_dom_Node.apply(this, [node]);
} else if (name.equals$O("Transparency")) {
p$1.mergeStandardTransparencyNode$org_w3c_dom_Node.apply(this, [node]);
} else {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["Invalid node: " + name, node]);
}}
}, p$1);

Clazz.newMeth(C$, 'mergeStandardChromaNode$org_w3c_dom_Node$org_w3c_dom_NodeList',  function (node, siblings) {
if (this.transparencyDone) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["Transparency node must follow Chroma node", node]);
}var csType=node.getFirstChild$();
if ((csType == null ) || !csType.getNodeName$().equals$O("ColorSpaceType") ) {
return;
}var csName=csType.getAttributes$().getNamedItem$S("name").getNodeValue$();
var numChannels=0;
var wantJFIF=false;
var wantAdobe=false;
var transform=0;
var willSubsample=false;
var ids=Clazz.array(Byte.TYPE, -1, [1, 2, 3, 4]);
if (csName.equals$O("GRAY")) {
numChannels=1;
wantJFIF=true;
} else if (csName.equals$O("YCbCr")) {
numChannels=3;
wantJFIF=true;
willSubsample=true;
} else if (csName.equals$O("PhotoYCC")) {
numChannels=3;
wantAdobe=true;
transform=1;
ids[0]=89;
ids[1]=67;
ids[2]=99;
} else if (csName.equals$O("RGB")) {
numChannels=3;
wantAdobe=true;
transform=0;
ids[0]=82;
ids[1]=71;
ids[2]=66;
} else if ((csName.equals$O("XYZ")) || (csName.equals$O("Lab")) || (csName.equals$O("Luv")) || (csName.equals$O("YxY")) || (csName.equals$O("HSV")) || (csName.equals$O("HLS")) || (csName.equals$O("CMY")) || (csName.equals$O("3CLR"))  ) {
numChannels=3;
} else if (csName.equals$O("YCCK")) {
numChannels=4;
wantAdobe=true;
transform=2;
willSubsample=true;
} else if (csName.equals$O("CMYK")) {
numChannels=4;
wantAdobe=true;
transform=0;
} else if (csName.equals$O("4CLR")) {
numChannels=4;
} else {
return;
}var wantAlpha=false;
for (var i=0; i < siblings.getLength$(); i++) {
var trans=siblings.item$I(i);
if (trans.getNodeName$().equals$O("Transparency")) {
wantAlpha=p$1.wantAlpha$org_w3c_dom_Node.apply(this, [trans]);
break;
}}
if (wantAlpha) {
++numChannels;
wantJFIF=false;
if (ids[0] == 82) {
ids[3]=65;
wantAdobe=false;
}}var jfif=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(7)), true);
var adobe=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(9)), true);
var sof=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(3)), true);
var sos=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(11)), true);
if ((sof != null ) && (sof.tag == 194) ) {
if ((sof.componentSpecs.length != numChannels) && (sos != null ) ) {
return;
}}if (!wantJFIF && (jfif != null ) ) {
this.markerSequence.remove$O(jfif);
}if (wantJFIF && !this.isStream ) {
this.markerSequence.add$I$O(0, Clazz.new_($I$(7,1)));
}if (wantAdobe) {
if ((adobe == null ) && !this.isStream ) {
adobe=Clazz.new_($I$(9,1).c$$I,[transform]);
p$1.insertAdobeMarkerSegment$com_sun_imageio_plugins_jpeg_AdobeMarkerSegment.apply(this, [adobe]);
} else {
adobe.transform=transform;
}} else if (adobe != null ) {
this.markerSequence.remove$O(adobe);
}var updateQtables=false;
var updateHtables=false;
var progressive=false;
var subsampledSelectors=Clazz.array(Integer.TYPE, -1, [0, 1, 1, 0]);
var nonSubsampledSelectors=Clazz.array(Integer.TYPE, -1, [0, 0, 0, 0]);
var newTableSelectors=willSubsample ? subsampledSelectors : nonSubsampledSelectors;
var oldCompSpecs=null;
if (sof != null ) {
oldCompSpecs=sof.componentSpecs;
progressive=(sof.tag == 194);
this.markerSequence.set$I$O(this.markerSequence.indexOf$O(sof), Clazz.new_($I$(3,1).c$$Z$Z$Z$BA$I,[progressive, false, willSubsample, ids, numChannels]));
for (var i=0; i < oldCompSpecs.length; i++) {
if (oldCompSpecs[i].QtableSelector != newTableSelectors[i]) {
updateQtables=true;
}}
if (progressive) {
var idsDiffer=false;
for (var i=0; i < oldCompSpecs.length; i++) {
if (ids[i] != oldCompSpecs[i].componentId) {
idsDiffer=true;
}}
if (idsDiffer) {
for (var iter=this.markerSequence.iterator$(); iter.hasNext$(); ) {
var seg=iter.next$();
if (Clazz.instanceOf(seg, "com.sun.imageio.plugins.jpeg.SOSMarkerSegment")) {
var target=seg;
for (var i=0; i < target.componentSpecs.length; i++) {
var oldSelector=target.componentSpecs[i].componentSelector;
for (var j=0; j < oldCompSpecs.length; j++) {
if (oldCompSpecs[j].componentId == oldSelector) {
target.componentSpecs[i].componentSelector=ids[j];
}}
}
}}
}} else {
if (sos != null ) {
for (var i=0; i < sos.componentSpecs.length; i++) {
if ((sos.componentSpecs[i].dcHuffTable != newTableSelectors[i]) || (sos.componentSpecs[i].acHuffTable != newTableSelectors[i]) ) {
updateHtables=true;
}}
this.markerSequence.set$I$O(this.markerSequence.indexOf$O(sos), Clazz.new_($I$(11,1).c$$Z$BA$I,[willSubsample, ids, numChannels]));
}}} else {
if (this.isStream) {
updateQtables=true;
updateHtables=true;
}}if (updateQtables) {
var tableSegments=Clazz.new_($I$(1,1));
for (var iter=this.markerSequence.iterator$(); iter.hasNext$(); ) {
var seg=iter.next$();
if (Clazz.instanceOf(seg, "com.sun.imageio.plugins.jpeg.DQTMarkerSegment")) {
tableSegments.add$O(seg);
}}
if (!tableSegments.isEmpty$() && willSubsample ) {
var found=false;
for (var iter=tableSegments.iterator$(); iter.hasNext$(); ) {
var testdqt=iter.next$();
for (var tabiter=testdqt.tables.iterator$(); tabiter.hasNext$(); ) {
var tab=tabiter.next$();
if (tab.tableID == 1) {
found=true;
}}
}
if (!found) {
var table0=null;
for (var iter=tableSegments.iterator$(); iter.hasNext$(); ) {
var testdqt=iter.next$();
for (var tabiter=testdqt.tables.iterator$(); tabiter.hasNext$(); ) {
var tab=tabiter.next$();
if (tab.tableID == 0) {
table0=tab;
}}
}
var dqt=tableSegments.get$I(tableSegments.size$() - 1);
dqt.tables.add$O(dqt.getChromaForLuma$com_sun_imageio_plugins_jpeg_DQTMarkerSegment_Qtable(table0));
}}}if (updateHtables) {
var tableSegments=Clazz.new_($I$(1,1));
for (var iter=this.markerSequence.iterator$(); iter.hasNext$(); ) {
var seg=iter.next$();
if (Clazz.instanceOf(seg, "com.sun.imageio.plugins.jpeg.DHTMarkerSegment")) {
tableSegments.add$O(seg);
}}
if (!tableSegments.isEmpty$() && willSubsample ) {
var found=false;
for (var iter=tableSegments.iterator$(); iter.hasNext$(); ) {
var testdht=iter.next$();
for (var tabiter=testdht.tables.iterator$(); tabiter.hasNext$(); ) {
var tab=tabiter.next$();
if (tab.tableID == 1) {
found=true;
}}
}
if (!found) {
var lastDHT=tableSegments.get$I(tableSegments.size$() - 1);
lastDHT.addHtable$javax_imageio_plugins_jpeg_JPEGHuffmanTable$Z$I($I$(17).StdDCLuminance, true, 1);
lastDHT.addHtable$javax_imageio_plugins_jpeg_JPEGHuffmanTable$Z$I($I$(17).StdACLuminance, true, 1);
}}}}, p$1);

Clazz.newMeth(C$, 'wantAlpha$org_w3c_dom_Node',  function (transparency) {
var returnValue=false;
var alpha=transparency.getFirstChild$();
if (alpha.getNodeName$().equals$O("Alpha")) {
if (alpha.hasAttributes$()) {
var value=alpha.getAttributes$().getNamedItem$S("value").getNodeValue$();
if (!value.equals$O("none")) {
returnValue=true;
}}}this.transparencyDone=true;
return returnValue;
}, p$1);

Clazz.newMeth(C$, 'mergeStandardCompressionNode$org_w3c_dom_Node',  function (node) {
}, p$1);

Clazz.newMeth(C$, 'mergeStandardDataNode$org_w3c_dom_Node',  function (node) {
}, p$1);

Clazz.newMeth(C$, 'mergeStandardDimensionNode$org_w3c_dom_Node',  function (node) {
var jfif=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(7)), true);
if (jfif == null ) {
var canHaveJFIF=false;
var sof=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(3)), true);
if (sof != null ) {
var numChannels=sof.componentSpecs.length;
if ((numChannels == 1) || (numChannels == 3) ) {
canHaveJFIF=true;
for (var i=0; i < sof.componentSpecs.length; i++) {
if (sof.componentSpecs[i].componentId != i + 1) canHaveJFIF=false;
}
var adobe=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(9)), true);
if (adobe != null ) {
if (adobe.transform != ((numChannels == 1) ? 0 : 1)) {
canHaveJFIF=false;
}}}}if (canHaveJFIF) {
jfif=Clazz.new_($I$(7,1));
this.markerSequence.add$I$O(0, jfif);
}}if (jfif != null ) {
var children=node.getChildNodes$();
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
var attrs=child.getAttributes$();
var name=child.getNodeName$();
if (name.equals$O("PixelAspectRatio")) {
var valueString=attrs.getNamedItem$S("value").getNodeValue$();
var value=Float.parseFloat$S(valueString);
var p=C$.findIntegerRatio$F(value);
jfif.resUnits=0;
jfif.Xdensity=p.x;
jfif.Xdensity=p.y;
} else if (name.equals$O("HorizontalPixelSize")) {
var valueString=attrs.getNamedItem$S("value").getNodeValue$();
var value=Float.parseFloat$S(valueString);
var dpcm=Long.$ival(Math.round$D(1.0 / (value * 10.0)));
jfif.resUnits=2;
jfif.Xdensity=dpcm;
} else if (name.equals$O("VerticalPixelSize")) {
var valueString=attrs.getNamedItem$S("value").getNodeValue$();
var value=Float.parseFloat$S(valueString);
var dpcm=Long.$ival(Math.round$D(1.0 / (value * 10.0)));
jfif.resUnits=2;
jfif.Ydensity=dpcm;
}}
}}, p$1);

Clazz.newMeth(C$, 'findIntegerRatio$F',  function (value) {
var epsilon=0.005;
value=Math.abs(value);
if (value <= epsilon ) {
return Clazz.new_($I$(18,1).c$$I$I,[1, 255]);
}if (value >= 255 ) {
return Clazz.new_($I$(18,1).c$$I$I,[255, 1]);
}var inverted=false;
if (value < 1.0 ) {
value=1.0 / value;
inverted=true;
}var y=1;
var x=Math.round(value);
var ratio=x;
var delta=Math.abs(value - ratio);
while (delta > epsilon ){
++y;
x=Math.round(y * value);
ratio=x / y;
delta=Math.abs(value - ratio);
}
return inverted ? Clazz.new_($I$(18,1).c$$I$I,[y, x]) : Clazz.new_($I$(18,1).c$$I$I,[x, y]);
}, 1);

Clazz.newMeth(C$, 'mergeStandardDocumentNode$org_w3c_dom_Node',  function (node) {
}, p$1);

Clazz.newMeth(C$, 'mergeStandardTextNode$org_w3c_dom_Node',  function (node) {
var children=node.getChildNodes$();
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
var attrs=child.getAttributes$();
var comp=attrs.getNamedItem$S("compression");
var copyIt=true;
if (comp != null ) {
var compString=comp.getNodeValue$();
if (!compString.equals$O("none")) {
copyIt=false;
}}if (copyIt) {
var value=attrs.getNamedItem$S("value").getNodeValue$();
var com=Clazz.new_($I$(10,1).c$$S,[value]);
p$1.insertCOMMarkerSegment$com_sun_imageio_plugins_jpeg_COMMarkerSegment.apply(this, [com]);
}}
}, p$1);

Clazz.newMeth(C$, 'mergeStandardTransparencyNode$org_w3c_dom_Node',  function (node) {
if (!this.transparencyDone && !this.isStream ) {
var wantAlpha=p$1.wantAlpha$org_w3c_dom_Node.apply(this, [node]);
var jfif=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(7)), true);
var adobe=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(9)), true);
var sof=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(3)), true);
var sos=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(11)), true);
if ((sof != null ) && (sof.tag == 194) ) {
return;
}if (sof != null ) {
var numChannels=sof.componentSpecs.length;
var hadAlpha=(numChannels == 2) || (numChannels == 4) ;
if (hadAlpha != wantAlpha ) {
if (wantAlpha) {
++numChannels;
if (jfif != null ) {
this.markerSequence.remove$O(jfif);
}if (adobe != null ) {
adobe.transform=0;
}var newSpecs=Clazz.array($I$(19), [numChannels]);
for (var i=0; i < sof.componentSpecs.length; i++) {
newSpecs[i]=sof.componentSpecs[i];
}
var oldFirstID=($b$[0] = sof.componentSpecs[0].componentId, $b$[0]);
var newID=($b$[0] = ((oldFirstID > 1) ? "A" : String.fromCharCode(4)).$c(), $b$[0]);
newSpecs[numChannels - 1]=sof.getComponentSpec$B$I$I(newID, sof.componentSpecs[0].HsamplingFactor, sof.componentSpecs[0].QtableSelector);
sof.componentSpecs=newSpecs;
var newScanSpecs=Clazz.array($I$(20), [numChannels]);
for (var i=0; i < sos.componentSpecs.length; i++) {
newScanSpecs[i]=sos.componentSpecs[i];
}
newScanSpecs[numChannels - 1]=sos.getScanComponentSpec$B$I(newID, 0);
sos.componentSpecs=newScanSpecs;
} else {
--numChannels;
var newSpecs=Clazz.array($I$(19), [numChannels]);
for (var i=0; i < numChannels; i++) {
newSpecs[i]=sof.componentSpecs[i];
}
sof.componentSpecs=newSpecs;
var newScanSpecs=Clazz.array($I$(20), [numChannels]);
for (var i=0; i < numChannels; i++) {
newScanSpecs[i]=sos.componentSpecs[i];
}
sos.componentSpecs=newScanSpecs;
}}}}}, p$1);

Clazz.newMeth(C$, 'setFromTree$S$org_w3c_dom_Node',  function (formatName, root) {
if (formatName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null formatName!"]);
}if (root == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null root!"]);
}if (this.isStream && (formatName.equals$O("javax_imageio_jpeg_stream_1.0")) ) {
p$1.setFromNativeTree$org_w3c_dom_Node.apply(this, [root]);
} else if (!this.isStream && (formatName.equals$O("javax_imageio_jpeg_image_1.0")) ) {
p$1.setFromNativeTree$org_w3c_dom_Node.apply(this, [root]);
} else if (!this.isStream && (formatName.equals$O("javax_imageio_1.0")) ) {
C$.superclazz.prototype.setFromTree$S$org_w3c_dom_Node.apply(this, [formatName, root]);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported format name: " + formatName]);
}});

Clazz.newMeth(C$, 'setFromNativeTree$org_w3c_dom_Node',  function (root) {
if (this.resetSequence == null ) {
this.resetSequence=this.markerSequence;
}this.markerSequence=Clazz.new_($I$(1,1));
var name=root.getNodeName$();
if (name != ((this.isStream) ? "javax_imageio_jpeg_stream_1.0" : "javax_imageio_jpeg_image_1.0")) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["Invalid root node name: " + name, root]);
}if (!this.isStream) {
if (root.getChildNodes$().getLength$() != 2) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["JPEGvariety and markerSequence nodes must be present", root]);
}var JPEGvariety=root.getFirstChild$();
if (JPEGvariety.getChildNodes$().getLength$() != 0) {
this.markerSequence.add$O(Clazz.new_([JPEGvariety.getFirstChild$()],$I$(7,1).c$$org_w3c_dom_Node));
}}var markerSequenceNode=this.isStream ? root : root.getLastChild$();
this.setFromMarkerSequenceNode$org_w3c_dom_Node(markerSequenceNode);
}, p$1);

Clazz.newMeth(C$, 'setFromMarkerSequenceNode$org_w3c_dom_Node',  function (markerSequenceNode) {
var children=markerSequenceNode.getChildNodes$();
for (var i=0; i < children.getLength$(); i++) {
var node=children.item$I(i);
var childName=node.getNodeName$();
if (childName.equals$O("dqt")) {
this.markerSequence.add$O(Clazz.new_($I$(4,1).c$$org_w3c_dom_Node,[node]));
} else if (childName.equals$O("dht")) {
this.markerSequence.add$O(Clazz.new_($I$(5,1).c$$org_w3c_dom_Node,[node]));
} else if (childName.equals$O("dri")) {
this.markerSequence.add$O(Clazz.new_($I$(6,1).c$$org_w3c_dom_Node,[node]));
} else if (childName.equals$O("com")) {
this.markerSequence.add$O(Clazz.new_($I$(10,1).c$$org_w3c_dom_Node,[node]));
} else if (childName.equals$O("app14Adobe")) {
this.markerSequence.add$O(Clazz.new_($I$(9,1).c$$org_w3c_dom_Node,[node]));
} else if (childName.equals$O("unknown")) {
this.markerSequence.add$O(Clazz.new_($I$(8,1).c$$org_w3c_dom_Node,[node]));
} else if (childName.equals$O("sof")) {
this.markerSequence.add$O(Clazz.new_($I$(3,1).c$$org_w3c_dom_Node,[node]));
} else if (childName.equals$O("sos")) {
this.markerSequence.add$O(Clazz.new_($I$(11,1).c$$org_w3c_dom_Node,[node]));
} else {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["Invalid " + (this.isStream ? "stream " : "image ") + "child: " + childName , node]);
}}
});

Clazz.newMeth(C$, 'isConsistent',  function () {
var sof=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(3)), true);
var jfif=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(7)), true);
var adobe=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(9)), true);
var retval=true;
if (!this.isStream) {
if (sof != null ) {
var numSOFBands=sof.componentSpecs.length;
var numScanBands=p$1.countScanBands.apply(this, []);
if (numScanBands != 0) {
if (numScanBands != numSOFBands) {
retval=false;
}}if (jfif != null ) {
if ((numSOFBands != 1) && (numSOFBands != 3) ) {
retval=false;
}for (var i=0; i < numSOFBands; i++) {
if (sof.componentSpecs[i].componentId != i + 1) {
retval=false;
}}
if ((adobe != null ) && (((numSOFBands == 1) && (adobe.transform != 0) ) || ((numSOFBands == 3) && (adobe.transform != 1) ) ) ) {
retval=false;
}}} else {
var sos=this.findMarkerSegment$Class$Z(Clazz.getClass($I$(11)), true);
if ((jfif != null ) || (adobe != null ) || (sof != null ) || (sos != null )  ) {
retval=false;
}}}return retval;
}, p$1);

Clazz.newMeth(C$, 'countScanBands',  function () {
var ids=Clazz.new_($I$(1,1));
var iter=this.markerSequence.iterator$();
while (iter.hasNext$()){
var seg=iter.next$();
if (Clazz.instanceOf(seg, "com.sun.imageio.plugins.jpeg.SOSMarkerSegment")) {
var sos=seg;
var specs=sos.componentSpecs;
for (var i=0; i < specs.length; i++) {
var id= new Integer(specs[i].componentSelector);
if (!ids.contains$O(id)) {
ids.add$O(id);
}}
}}
return ids.size$();
}, p$1);

Clazz.newMeth(C$, 'writeToStream$javax_imageio_stream_ImageOutputStream$Z$Z$java_util_List$java_awt_color_ICC_Profile$Z$I$com_sun_imageio_plugins_jpeg_JPEGImageWriter',  function (ios, ignoreJFIF, forceJFIF, thumbnails, iccProfile, ignoreAdobe, newAdobeTransform, writer) {
if (forceJFIF) {
$I$(7).writeDefaultJFIF$javax_imageio_stream_ImageOutputStream$java_util_List$java_awt_color_ICC_Profile$com_sun_imageio_plugins_jpeg_JPEGImageWriter(ios, thumbnails, iccProfile, writer);
if ((ignoreAdobe == false ) && (newAdobeTransform != -1) ) {
if ((newAdobeTransform != 0) && (newAdobeTransform != 1) ) {
ignoreAdobe=true;
writer.warningOccurred$I(13);
}}}var iter=this.markerSequence.iterator$();
while (iter.hasNext$()){
var seg=iter.next$();
if (Clazz.instanceOf(seg, "com.sun.imageio.plugins.jpeg.JFIFMarkerSegment")) {
if (ignoreJFIF == false ) {
var jfif=seg;
jfif.writeWithThumbs$javax_imageio_stream_ImageOutputStream$java_util_List$com_sun_imageio_plugins_jpeg_JPEGImageWriter(ios, thumbnails, writer);
if (iccProfile != null ) {
$I$(7).writeICC$java_awt_color_ICC_Profile$javax_imageio_stream_ImageOutputStream(iccProfile, ios);
}}} else if (Clazz.instanceOf(seg, "com.sun.imageio.plugins.jpeg.AdobeMarkerSegment")) {
if (ignoreAdobe == false ) {
if (newAdobeTransform != -1) {
var newAdobe=seg.clone$();
newAdobe.transform=newAdobeTransform;
newAdobe.write$javax_imageio_stream_ImageOutputStream(ios);
} else if (forceJFIF) {
var adobe=seg;
if ((adobe.transform == 0) || (adobe.transform == 1) ) {
adobe.write$javax_imageio_stream_ImageOutputStream(ios);
} else {
writer.warningOccurred$I(13);
}} else {
seg.write$javax_imageio_stream_ImageOutputStream(ios);
}}} else {
seg.write$javax_imageio_stream_ImageOutputStream(ios);
}}
});

Clazz.newMeth(C$, 'reset$',  function () {
if (this.resetSequence != null ) {
this.markerSequence=this.resetSequence;
this.resetSequence=null;
}});

Clazz.newMeth(C$, 'print$',  function () {
for (var i=0; i < this.markerSequence.size$(); i++) {
var seg=this.markerSequence.get$I(i);
seg.print$();
}
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:55 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
