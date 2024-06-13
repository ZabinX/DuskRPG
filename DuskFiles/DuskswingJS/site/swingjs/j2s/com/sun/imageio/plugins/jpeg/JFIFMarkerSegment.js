(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.jpeg"),p$1={},I$=[[0,['com.sun.imageio.plugins.jpeg.JFIFMarkerSegment','.JFIFThumbJPEG'],['com.sun.imageio.plugins.jpeg.JFIFMarkerSegment','.JFIFThumbPalette'],['com.sun.imageio.plugins.jpeg.JFIFMarkerSegment','.JFIFThumbRGB'],'com.sun.imageio.plugins.jpeg.MarkerSegment',['com.sun.imageio.plugins.jpeg.JFIFMarkerSegment','.IllegalThumbException'],'InternalError','javax.imageio.metadata.IIOMetadataNode','java.awt.image.DataBufferByte','java.awt.image.Raster','java.awt.image.ComponentColorModel',['com.sun.imageio.plugins.jpeg.JPEG','.JCS'],'java.awt.image.BufferedImage','java.awt.image.IndexColorModel','com.sun.imageio.plugins.jpeg.JPEGMetadata','java.io.ByteArrayOutputStream','javax.imageio.stream.MemoryCacheImageOutputStream','com.sun.imageio.plugins.jpeg.JPEGImageWriter','javax.imageio.ImageTypeSpecifier','com.sun.imageio.plugins.jpeg.JFIFMarkerSegment','javax.imageio.IIOImage','com.sun.imageio.plugins.jpeg.SOFMarkerSegment','com.sun.imageio.plugins.jpeg.JPEGImageReader',['com.sun.imageio.plugins.jpeg.JFIFMarkerSegment','.JFIFThumbJPEG','.ThumbnailReadListener'],'java.util.ArrayList','java.awt.color.ICC_Profile',['com.sun.imageio.plugins.jpeg.JFIFMarkerSegment','.JFIFExtensionMarkerSegment'],['com.sun.imageio.plugins.jpeg.JFIFMarkerSegment','.ICCMarkerSegment']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JFIFMarkerSegment", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'com.sun.imageio.plugins.jpeg.MarkerSegment');
C$.$classes$=[['IllegalThumbException',2],['JFIFExtensionMarkerSegment',0],['JFIFThumb',1024],['JFIFThumbUncompressed',1024],['JFIFThumbRGB',0],['JFIFThumbPalette',0],['JFIFThumbJPEG',0],['ICCMarkerSegment',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.thumb=null;
this.extSegments=Clazz.new_($I$(24,1));
this.iccSegment=null;
this.MAX_THUMB_WIDTH=255;
this.MAX_THUMB_HEIGHT=255;
this.debug=false;
this.inICC=false;
this.tempICCSegment=null;
},1);

C$.$fields$=[['Z',['debug','inICC'],'I',['majorVersion','minorVersion','resUnits','Xdensity','Ydensity','thumbWidth','thumbHeight','MAX_THUMB_WIDTH','MAX_THUMB_HEIGHT'],'O',['thumb','com.sun.imageio.plugins.jpeg.JFIFMarkerSegment.JFIFThumbRGB','extSegments','java.util.ArrayList','iccSegment','com.sun.imageio.plugins.jpeg.JFIFMarkerSegment.ICCMarkerSegment','+tempICCSegment']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$I.apply(this,[224]);C$.$init$.apply(this);
this.majorVersion=1;
this.minorVersion=2;
this.resUnits=0;
this.Xdensity=1;
this.Ydensity=1;
this.thumbWidth=0;
this.thumbHeight=0;
}, 1);

Clazz.newMeth(C$, 'c$$com_sun_imageio_plugins_jpeg_JPEGBuffer',  function (buffer) {
;C$.superclazz.c$$com_sun_imageio_plugins_jpeg_JPEGBuffer.apply(this,[buffer]);C$.$init$.apply(this);
buffer.bufPtr+=5;
this.majorVersion=buffer.buf[buffer.bufPtr++];
this.minorVersion=buffer.buf[buffer.bufPtr++];
this.resUnits=buffer.buf[buffer.bufPtr++];
this.Xdensity=(buffer.buf[buffer.bufPtr++] & 255) << 8;
this.Xdensity|=buffer.buf[buffer.bufPtr++] & 255;
this.Ydensity=(buffer.buf[buffer.bufPtr++] & 255) << 8;
this.Ydensity|=buffer.buf[buffer.bufPtr++] & 255;
this.thumbWidth=buffer.buf[buffer.bufPtr++] & 255;
this.thumbHeight=buffer.buf[buffer.bufPtr++] & 255;
buffer.bufAvail-=14;
if (this.thumbWidth > 0) {
this.thumb=Clazz.new_($I$(3,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer$I$I,[this, null, buffer, this.thumbWidth, this.thumbHeight]);
}}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node',  function (node) {
C$.c$.apply(this, []);
this.updateFromNativeNode$org_w3c_dom_Node$Z(node, true);
}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
var newGuy=C$.superclazz.prototype.clone$.apply(this, []);
if (!this.extSegments.isEmpty$()) {
newGuy.extSegments=Clazz.new_($I$(24,1));
for (var iter=this.extSegments.iterator$(); iter.hasNext$(); ) {
var jfxx=iter.next$();
newGuy.extSegments.add$O(jfxx.clone$());
}
}if (this.iccSegment != null ) {
newGuy.iccSegment=this.iccSegment.clone$();
}return newGuy;
});

Clazz.newMeth(C$, 'addJFXX$com_sun_imageio_plugins_jpeg_JPEGBuffer$com_sun_imageio_plugins_jpeg_JPEGImageReader',  function (buffer, reader) {
this.extSegments.add$O(Clazz.new_($I$(26,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer$com_sun_imageio_plugins_jpeg_JPEGImageReader,[this, null, buffer, reader]));
});

Clazz.newMeth(C$, 'addICC$com_sun_imageio_plugins_jpeg_JPEGBuffer',  function (buffer) {
if (this.inICC == false ) {
if (this.iccSegment != null ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["> 1 ICC APP2 Marker Segment not supported"]);
}this.tempICCSegment=Clazz.new_($I$(27,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer,[this, null, buffer]);
if (this.inICC == false ) {
this.iccSegment=this.tempICCSegment;
this.tempICCSegment=null;
}} else {
if (this.tempICCSegment.addData$com_sun_imageio_plugins_jpeg_JPEGBuffer(buffer) == true ) {
this.iccSegment=this.tempICCSegment;
this.tempICCSegment=null;
}}});

Clazz.newMeth(C$, 'addICC$java_awt_color_ICC_ColorSpace',  function (cs) {
if (this.iccSegment != null ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["> 1 ICC APP2 Marker Segment not supported"]);
}this.iccSegment=Clazz.new_($I$(27,1).c$$java_awt_color_ICC_ColorSpace,[this, null, cs]);
});

Clazz.newMeth(C$, 'getNativeNode$',  function () {
var node=Clazz.new_($I$(7,1).c$$S,["app0JFIF"]);
node.setAttribute$S$S("majorVersion", Integer.toString$I(this.majorVersion));
node.setAttribute$S$S("minorVersion", Integer.toString$I(this.minorVersion));
node.setAttribute$S$S("resUnits", Integer.toString$I(this.resUnits));
node.setAttribute$S$S("Xdensity", Integer.toString$I(this.Xdensity));
node.setAttribute$S$S("Ydensity", Integer.toString$I(this.Ydensity));
node.setAttribute$S$S("thumbWidth", Integer.toString$I(this.thumbWidth));
node.setAttribute$S$S("thumbHeight", Integer.toString$I(this.thumbHeight));
if (!this.extSegments.isEmpty$()) {
var JFXXnode=Clazz.new_($I$(7,1).c$$S,["JFXX"]);
node.appendChild$org_w3c_dom_Node(JFXXnode);
for (var iter=this.extSegments.iterator$(); iter.hasNext$(); ) {
var seg=iter.next$();
JFXXnode.appendChild$org_w3c_dom_Node(seg.getNativeNode$());
}
}if (this.iccSegment != null ) {
node.appendChild$org_w3c_dom_Node(this.iccSegment.getNativeNode$());
}return node;
});

Clazz.newMeth(C$, 'updateFromNativeNode$org_w3c_dom_Node$Z',  function (node, fromScratch) {
var attrs=node.getAttributes$();
if (attrs.getLength$() > 0) {
var value=$I$(4).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "majorVersion", 0, 255, false);
this.majorVersion=(value != -1) ? value : this.majorVersion;
value=$I$(4).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "minorVersion", 0, 255, false);
this.minorVersion=(value != -1) ? value : this.minorVersion;
value=$I$(4).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "resUnits", 0, 2, false);
this.resUnits=(value != -1) ? value : this.resUnits;
value=$I$(4).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "Xdensity", 1, 65535, false);
this.Xdensity=(value != -1) ? value : this.Xdensity;
value=$I$(4).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "Ydensity", 1, 65535, false);
this.Ydensity=(value != -1) ? value : this.Ydensity;
value=$I$(4).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "thumbWidth", 0, 255, false);
this.thumbWidth=(value != -1) ? value : this.thumbWidth;
value=$I$(4).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "thumbHeight", 0, 255, false);
this.thumbHeight=(value != -1) ? value : this.thumbHeight;
}if (node.hasChildNodes$()) {
var children=node.getChildNodes$();
var count=children.getLength$();
if (count > 2) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["app0JFIF node cannot have > 2 children", node]);
}for (var i=0; i < count; i++) {
var child=children.item$I(i);
var name=child.getNodeName$();
if (name.equals$O("JFXX")) {
if ((!this.extSegments.isEmpty$()) && fromScratch ) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["app0JFIF node cannot have > 1 JFXX node", node]);
}var exts=child.getChildNodes$();
var extCount=exts.getLength$();
for (var j=0; j < extCount; j++) {
var ext=exts.item$I(j);
this.extSegments.add$O(Clazz.new_($I$(26,1).c$$org_w3c_dom_Node,[this, null, ext]));
}
}if (name.equals$O("app2ICC")) {
if ((this.iccSegment != null ) && fromScratch ) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["> 1 ICC APP2 Marker Segment not supported", node]);
}this.iccSegment=Clazz.new_($I$(27,1).c$$org_w3c_dom_Node,[this, null, child]);
}}
}});

Clazz.newMeth(C$, 'getThumbnailWidth$I',  function (index) {
if (this.thumb != null ) {
if (index == 0) {
return this.thumb.getWidth$();
}--index;
}var jfxx=this.extSegments.get$I(index);
return jfxx.thumb.getWidth$();
});

Clazz.newMeth(C$, 'getThumbnailHeight$I',  function (index) {
if (this.thumb != null ) {
if (index == 0) {
return this.thumb.getHeight$();
}--index;
}var jfxx=this.extSegments.get$I(index);
return jfxx.thumb.getHeight$();
});

Clazz.newMeth(C$, 'getThumbnail$javax_imageio_stream_ImageInputStream$I$com_sun_imageio_plugins_jpeg_JPEGImageReader',  function (iis, index, reader) {
reader.thumbnailStarted$I(index);
var ret=null;
if ((this.thumb != null ) && (index == 0) ) {
ret=this.thumb.getThumbnail$javax_imageio_stream_ImageInputStream$com_sun_imageio_plugins_jpeg_JPEGImageReader(iis, reader);
} else {
if (this.thumb != null ) {
--index;
}var jfxx=this.extSegments.get$I(index);
ret=jfxx.thumb.getThumbnail$javax_imageio_stream_ImageInputStream$com_sun_imageio_plugins_jpeg_JPEGImageReader(iis, reader);
}reader.thumbnailComplete$();
return ret;
});

Clazz.newMeth(C$, 'write$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter',  function (ios, writer) {
this.write$javax_imageio_stream_ImageOutputStream$java_awt_image_BufferedImage$com_sun_imageio_plugins_jpeg_JPEGImageWriter(ios, null, writer);
});

Clazz.newMeth(C$, 'write$javax_imageio_stream_ImageOutputStream$java_awt_image_BufferedImage$com_sun_imageio_plugins_jpeg_JPEGImageWriter',  function (ios, thumb, writer) {
var thumbWidth=0;
var thumbHeight=0;
var thumbLength=0;
var thumbData=null;
if (thumb != null ) {
thumbWidth=thumb.getWidth$();
thumbHeight=thumb.getHeight$();
if ((thumbWidth > 255) || (thumbHeight > 255) ) {
writer.warningOccurred$I(12);
}thumbWidth=Math.min(thumbWidth, 255);
thumbHeight=Math.min(thumbHeight, 255);
thumbData=thumb.getRaster$().getPixels$I$I$I$I$IA(0, 0, thumbWidth, thumbHeight, null);
thumbLength=thumbData.length;
}this.length=14 + 2 + thumbLength ;
this.writeTag$javax_imageio_stream_ImageOutputStream(ios);
var id=Clazz.array(Byte.TYPE, -1, [74, 70, 73, 70, 0]);
ios.write$BA(id);
ios.write$I(this.majorVersion);
ios.write$I(this.minorVersion);
ios.write$I(this.resUnits);
$I$(4).write2bytes$javax_imageio_stream_ImageOutputStream$I(ios, this.Xdensity);
$I$(4).write2bytes$javax_imageio_stream_ImageOutputStream$I(ios, this.Ydensity);
ios.write$I(thumbWidth);
ios.write$I(thumbHeight);
if (thumbData != null ) {
writer.thumbnailStarted$I(0);
this.writeThumbnailData$javax_imageio_stream_ImageOutputStream$IA$com_sun_imageio_plugins_jpeg_JPEGImageWriter(ios, thumbData, writer);
writer.thumbnailComplete$();
}});

Clazz.newMeth(C$, 'writeThumbnailData$javax_imageio_stream_ImageOutputStream$IA$com_sun_imageio_plugins_jpeg_JPEGImageWriter',  function (ios, thumbData, writer) {
var progInterval=(thumbData.length/20|0);
if (progInterval == 0) {
progInterval=1;
}for (var i=0; i < thumbData.length; i++) {
ios.write$I(thumbData[i]);
if ((i > progInterval) && (i % progInterval == 0) ) {
writer.thumbnailProgress$F((i * 100) / (thumbData.length));
}}
});

Clazz.newMeth(C$, 'writeWithThumbs$javax_imageio_stream_ImageOutputStream$java_util_List$com_sun_imageio_plugins_jpeg_JPEGImageWriter',  function (ios, thumbnails, writer) {
if (thumbnails != null ) {
var jfxx=null;
if (thumbnails.size$() == 1) {
if (!this.extSegments.isEmpty$()) {
jfxx=this.extSegments.get$I(0);
}p$1.writeThumb$javax_imageio_stream_ImageOutputStream$java_awt_image_BufferedImage$com_sun_imageio_plugins_jpeg_JFIFMarkerSegment_JFIFExtensionMarkerSegment$I$Z$com_sun_imageio_plugins_jpeg_JPEGImageWriter.apply(this, [ios, thumbnails.get$I(0), jfxx, 0, true, writer]);
} else {
this.write$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter(ios, writer);
for (var i=0; i < thumbnails.size$(); i++) {
jfxx=null;
if (i < this.extSegments.size$()) {
jfxx=this.extSegments.get$I(i);
}p$1.writeThumb$javax_imageio_stream_ImageOutputStream$java_awt_image_BufferedImage$com_sun_imageio_plugins_jpeg_JFIFMarkerSegment_JFIFExtensionMarkerSegment$I$Z$com_sun_imageio_plugins_jpeg_JPEGImageWriter.apply(this, [ios, thumbnails.get$I(i), jfxx, i, false, writer]);
}
}} else {
this.write$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter(ios, writer);
}});

Clazz.newMeth(C$, 'writeThumb$javax_imageio_stream_ImageOutputStream$java_awt_image_BufferedImage$com_sun_imageio_plugins_jpeg_JFIFMarkerSegment_JFIFExtensionMarkerSegment$I$Z$com_sun_imageio_plugins_jpeg_JPEGImageWriter',  function (ios, thumb, jfxx, index, onlyOne, writer) {
var cm=thumb.getColorModel$();
var cs=cm.getColorSpace$();
if (Clazz.instanceOf(cm, "java.awt.image.IndexColorModel")) {
if (onlyOne) {
this.write$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter(ios, writer);
}if ((jfxx == null ) || (jfxx.code == 17) ) {
p$1.writeJFXXSegment$I$java_awt_image_BufferedImage$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter.apply(this, [index, thumb, ios, writer]);
} else {
var thumbRGB=(cm).convertToIntDiscrete$java_awt_image_Raster$Z(thumb.getRaster$(), false);
jfxx.setThumbnail$java_awt_image_BufferedImage(thumbRGB);
writer.thumbnailStarted$I(index);
jfxx.write$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter(ios, writer);
writer.thumbnailComplete$();
}} else if (cs.getType$() == 5) {
if (jfxx == null ) {
if (onlyOne) {
this.write$javax_imageio_stream_ImageOutputStream$java_awt_image_BufferedImage$com_sun_imageio_plugins_jpeg_JPEGImageWriter(ios, thumb, writer);
} else {
p$1.writeJFXXSegment$I$java_awt_image_BufferedImage$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter.apply(this, [index, thumb, ios, writer]);
}} else {
if (onlyOne) {
this.write$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter(ios, writer);
}if (jfxx.code == 17) {
p$1.writeJFXXSegment$I$java_awt_image_BufferedImage$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter.apply(this, [index, thumb, ios, writer]);
writer.warningOccurred$I(14);
} else {
jfxx.setThumbnail$java_awt_image_BufferedImage(thumb);
writer.thumbnailStarted$I(index);
jfxx.write$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter(ios, writer);
writer.thumbnailComplete$();
}}} else if (cs.getType$() == 6) {
if (jfxx == null ) {
if (onlyOne) {
var thumbRGB=C$.expandGrayThumb$java_awt_image_BufferedImage(thumb);
this.write$javax_imageio_stream_ImageOutputStream$java_awt_image_BufferedImage$com_sun_imageio_plugins_jpeg_JPEGImageWriter(ios, thumbRGB, writer);
} else {
p$1.writeJFXXSegment$I$java_awt_image_BufferedImage$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter.apply(this, [index, thumb, ios, writer]);
}} else {
if (onlyOne) {
this.write$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter(ios, writer);
}if (jfxx.code == 19) {
var thumbRGB=C$.expandGrayThumb$java_awt_image_BufferedImage(thumb);
p$1.writeJFXXSegment$I$java_awt_image_BufferedImage$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter.apply(this, [index, thumbRGB, ios, writer]);
} else if (jfxx.code == 16) {
jfxx.setThumbnail$java_awt_image_BufferedImage(thumb);
writer.thumbnailStarted$I(index);
jfxx.write$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter(ios, writer);
writer.thumbnailComplete$();
} else if (jfxx.code == 17) {
p$1.writeJFXXSegment$I$java_awt_image_BufferedImage$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter.apply(this, [index, thumb, ios, writer]);
writer.warningOccurred$I(15);
}}} else {
writer.warningOccurred$I(9);
}}, p$1);

Clazz.newMeth(C$, 'writeJFXXSegment$I$java_awt_image_BufferedImage$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter',  function (index, thumbnail, ios, writer) {
var jfxx=null;
try {
jfxx=Clazz.new_($I$(26,1).c$$java_awt_image_BufferedImage,[this, null, thumbnail]);
} catch (e) {
if (Clazz.exceptionOf(e,"com.sun.imageio.plugins.jpeg.JFIFMarkerSegment.IllegalThumbException")){
writer.warningOccurred$I(9);
return;
} else {
throw e;
}
}
writer.thumbnailStarted$I(index);
jfxx.write$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter(ios, writer);
writer.thumbnailComplete$();
}, p$1);

Clazz.newMeth(C$, 'expandGrayThumb$java_awt_image_BufferedImage',  function (thumb) {
var ret=Clazz.new_([thumb.getWidth$(), thumb.getHeight$(), 1],$I$(12,1).c$$I$I$I);
var g=ret.getGraphics$();
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(thumb, 0, 0, null);
return ret;
}, 1);

Clazz.newMeth(C$, 'writeDefaultJFIF$javax_imageio_stream_ImageOutputStream$java_util_List$java_awt_color_ICC_Profile$com_sun_imageio_plugins_jpeg_JPEGImageWriter',  function (ios, thumbnails, iccProfile, writer) {
var jfif=Clazz.new_(C$);
jfif.writeWithThumbs$javax_imageio_stream_ImageOutputStream$java_util_List$com_sun_imageio_plugins_jpeg_JPEGImageWriter(ios, thumbnails, writer);
if (iccProfile != null ) {
C$.writeICC$java_awt_color_ICC_Profile$javax_imageio_stream_ImageOutputStream(iccProfile, ios);
}}, 1);

Clazz.newMeth(C$, 'print$',  function () {
this.printTag$S("JFIF");
System.out.print$S("Version ");
System.out.print$I(this.majorVersion);
System.out.println$S(".0" + Integer.toString$I(this.minorVersion));
System.out.print$S("Resolution units: ");
System.out.println$I(this.resUnits);
System.out.print$S("X density: ");
System.out.println$I(this.Xdensity);
System.out.print$S("Y density: ");
System.out.println$I(this.Ydensity);
System.out.print$S("Thumbnail Width: ");
System.out.println$I(this.thumbWidth);
System.out.print$S("Thumbnail Height: ");
System.out.println$I(this.thumbHeight);
if (!this.extSegments.isEmpty$()) {
for (var iter=this.extSegments.iterator$(); iter.hasNext$(); ) {
var extSegment=iter.next$();
extSegment.print$();
}
}if (this.iccSegment != null ) {
this.iccSegment.print$();
}});

Clazz.newMeth(C$, 'writeICC$java_awt_color_ICC_Profile$javax_imageio_stream_ImageOutputStream',  function (profile, ios) {
var LENGTH_LENGTH=2;
var ID="ICC_PROFILE";
var ID_LENGTH="ICC_PROFILE".length$() + 1;
var COUNTS_LENGTH=2;
var MAX_ICC_CHUNK_SIZE=65535 - LENGTH_LENGTH - ID_LENGTH - COUNTS_LENGTH ;
var data=profile.getData$();
var numChunks=(data.length/MAX_ICC_CHUNK_SIZE|0);
if ((data.length % MAX_ICC_CHUNK_SIZE) != 0) {
++numChunks;
}var chunkNum=1;
var offset=0;
for (var i=0; i < numChunks; i++) {
var dataLength=Math.min(data.length - offset, MAX_ICC_CHUNK_SIZE);
var segLength=dataLength + COUNTS_LENGTH + ID_LENGTH + LENGTH_LENGTH ;
ios.write$I(255);
ios.write$I(226);
$I$(4).write2bytes$javax_imageio_stream_ImageOutputStream$I(ios, segLength);
var id="ICC_PROFILE".getBytes$S("US-ASCII");
ios.write$BA(id);
ios.write$I(0);
ios.write$I(chunkNum++);
ios.write$I(numChunks);
ios.write$BA$I$I(data, offset, dataLength);
offset+=dataLength;
}
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.JFIFMarkerSegment, "IllegalThumbException", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JFIFMarkerSegment, "JFIFExtensionMarkerSegment", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'com.sun.imageio.plugins.jpeg.MarkerSegment');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['code'],'O',['thumb','com.sun.imageio.plugins.jpeg.JFIFMarkerSegment.JFIFThumb']]]

Clazz.newMeth(C$, 'c$$com_sun_imageio_plugins_jpeg_JPEGBuffer$com_sun_imageio_plugins_jpeg_JPEGImageReader',  function (buffer, reader) {
;C$.superclazz.c$$com_sun_imageio_plugins_jpeg_JPEGBuffer.apply(this,[buffer]);C$.$init$.apply(this);
buffer.bufPtr+=5;
this.code=buffer.buf[buffer.bufPtr++] & 255;
buffer.bufAvail-=6;
if (this.code == 16) {
this.thumb=Clazz.new_($I$(1,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer$I$com_sun_imageio_plugins_jpeg_JPEGImageReader,[this, null, buffer, this.length, reader]);
} else {
buffer.loadBuf$I(2);
var thumbX=buffer.buf[buffer.bufPtr++] & 255;
var thumbY=buffer.buf[buffer.bufPtr++] & 255;
buffer.bufAvail-=2;
if (this.code == 17) {
this.thumb=Clazz.new_($I$(2,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer$I$I,[this, null, buffer, thumbX, thumbY]);
} else {
this.thumb=Clazz.new_($I$(3,1).c$$com_sun_imageio_plugins_jpeg_JPEGBuffer$I$I,[this, null, buffer, thumbX, thumbY]);
}}}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node',  function (node) {
;C$.superclazz.c$$I.apply(this,[224]);C$.$init$.apply(this);
var attrs=node.getAttributes$();
if (attrs.getLength$() > 0) {
this.code=$I$(4).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "extensionCode", 16, 19, false);
if (this.code == 18) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["invalid extensionCode attribute value", node]);
}} else {
this.code=18;
}if (node.getChildNodes$().getLength$() != 1) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["app0JFXX node must have exactly 1 child", node]);
}var child=node.getFirstChild$();
var name=child.getNodeName$();
if (name.equals$O("JFIFthumbJPEG")) {
if (this.code == 18) {
this.code=16;
}this.thumb=Clazz.new_($I$(1,1).c$$org_w3c_dom_Node,[this, null, child]);
} else if (name.equals$O("JFIFthumbPalette")) {
if (this.code == 18) {
this.code=17;
}this.thumb=Clazz.new_($I$(2,1).c$$org_w3c_dom_Node,[this, null, child]);
} else if (name.equals$O("JFIFthumbRGB")) {
if (this.code == 18) {
this.code=19;
}this.thumb=Clazz.new_($I$(3,1).c$$org_w3c_dom_Node,[this, null, child]);
} else {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["unrecognized app0JFXX child node", node]);
}}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_BufferedImage',  function (thumbnail) {
;C$.superclazz.c$$I.apply(this,[224]);C$.$init$.apply(this);
var cm=thumbnail.getColorModel$();
var csType=cm.getColorSpace$().getType$();
if (cm.hasAlpha$()) {
throw Clazz.new_($I$(5,1),[this, null]);
}if (Clazz.instanceOf(cm, "java.awt.image.IndexColorModel")) {
this.code=17;
this.thumb=Clazz.new_($I$(2,1).c$$java_awt_image_BufferedImage,[this, null, thumbnail]);
} else if (csType == 5) {
this.code=19;
this.thumb=Clazz.new_($I$(3,1).c$$java_awt_image_BufferedImage,[this, null, thumbnail]);
} else if (csType == 6) {
this.code=16;
this.thumb=Clazz.new_($I$(1,1).c$$java_awt_image_BufferedImage,[this, null, thumbnail]);
} else {
throw Clazz.new_($I$(5,1),[this, null]);
}}, 1);

Clazz.newMeth(C$, 'setThumbnail$java_awt_image_BufferedImage',  function (thumbnail) {
try {
switch (this.code) {
case 17:
this.thumb=Clazz.new_($I$(2,1).c$$java_awt_image_BufferedImage,[this, null, thumbnail]);
break;
case 19:
this.thumb=Clazz.new_($I$(3,1).c$$java_awt_image_BufferedImage,[this, null, thumbnail]);
break;
case 16:
this.thumb=Clazz.new_($I$(1,1).c$$java_awt_image_BufferedImage,[this, null, thumbnail]);
break;
}
} catch (e) {
if (Clazz.exceptionOf(e,"com.sun.imageio.plugins.jpeg.JFIFMarkerSegment.IllegalThumbException")){
throw Clazz.new_($I$(6,1).c$$S$Throwable,["Illegal thumb in setThumbnail!", e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'clone$',  function () {
var newGuy=C$.superclazz.prototype.clone$.apply(this, []);
if (this.thumb != null ) {
newGuy.thumb=this.thumb.clone$();
}return newGuy;
});

Clazz.newMeth(C$, 'getNativeNode$',  function () {
var node=Clazz.new_($I$(7,1).c$$S,["app0JFXX"]);
node.setAttribute$S$S("extensionCode", Integer.toString$I(this.code));
node.appendChild$org_w3c_dom_Node(this.thumb.getNativeNode$());
return node;
});

Clazz.newMeth(C$, 'write$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter',  function (ios, writer) {
this.length=2 + 6 + this.thumb.getLength$() ;
this.writeTag$javax_imageio_stream_ImageOutputStream(ios);
var id=Clazz.array(Byte.TYPE, -1, [74, 70, 88, 88, 0]);
ios.write$BA(id);
ios.write$I(this.code);
this.thumb.write$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter(ios, writer);
});

Clazz.newMeth(C$, 'print$',  function () {
this.printTag$S("JFXX");
this.thumb.print$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JFIFMarkerSegment, "JFIFThumb", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.streamPos=(Long.$neg(1));
},1);

C$.$fields$=[['J',['streamPos']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$com_sun_imageio_plugins_jpeg_JPEGBuffer',  function (buffer) {
;C$.$init$.apply(this);
this.streamPos=buffer.getStreamPosition$();
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
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JFIFMarkerSegment, "JFIFThumbUncompressed", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['com.sun.imageio.plugins.jpeg.JFIFMarkerSegment','.JFIFThumb']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.thumbnail=null;
},1);

C$.$fields$=[['I',['thumbWidth','thumbHeight'],'S',['name'],'O',['thumbnail','java.awt.image.BufferedImage']]]

Clazz.newMeth(C$, 'c$$com_sun_imageio_plugins_jpeg_JPEGBuffer$I$I$I$S',  function (buffer, width, height, skip, name) {
;C$.superclazz.c$$com_sun_imageio_plugins_jpeg_JPEGBuffer.apply(this,[buffer]);C$.$init$.apply(this);
this.thumbWidth=width;
this.thumbHeight=height;
buffer.skipData$I(skip);
this.name=name;
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node$S',  function (node, name) {
Clazz.super_(C$, this);
this.thumbWidth=0;
this.thumbHeight=0;
this.name=name;
var attrs=node.getAttributes$();
var count=attrs.getLength$();
if (count > 2) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,[name + " node cannot have > 2 attributes", node]);
}if (count != 0) {
var value=$I$(4).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "thumbWidth", 0, 255, false);
this.thumbWidth=(value != -1) ? value : this.thumbWidth;
value=$I$(4).getAttributeValue$org_w3c_dom_Node$org_w3c_dom_NamedNodeMap$S$I$I$Z(node, attrs, "thumbHeight", 0, 255, false);
this.thumbHeight=(value != -1) ? value : this.thumbHeight;
}}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_BufferedImage',  function (thumb) {
Clazz.super_(C$, this);
this.thumbnail=thumb;
this.thumbWidth=thumb.getWidth$();
this.thumbHeight=thumb.getHeight$();
this.name=null;
}, 1);

Clazz.newMeth(C$, 'readByteBuffer$javax_imageio_stream_ImageInputStream$BA$com_sun_imageio_plugins_jpeg_JPEGImageReader$F$F',  function (iis, data, reader, workPortion, workOffset) {
var progInterval=Math.max((((data.length/20 / workPortion |0))|0), 1);
for (var offset=0; offset < data.length; ) {
var len=Math.min(progInterval, data.length - offset);
iis.read$BA$I$I(data, offset, len);
offset+=progInterval;
var percentDone=(offset * 100) / data.length * workPortion + workOffset;
if (percentDone > 100.0 ) {
percentDone=100.0;
}reader.thumbnailProgress$F(percentDone);
}
});

Clazz.newMeth(C$, 'getWidth$',  function () {
return this.thumbWidth;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
return this.thumbHeight;
});

Clazz.newMeth(C$, 'getNativeNode$',  function () {
var node=Clazz.new_($I$(7,1).c$$S,[this.name]);
node.setAttribute$S$S("thumbWidth", Integer.toString$I(this.thumbWidth));
node.setAttribute$S$S("thumbHeight", Integer.toString$I(this.thumbHeight));
return node;
});

Clazz.newMeth(C$, 'write$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter',  function (ios, writer) {
if ((this.thumbWidth > 255) || (this.thumbHeight > 255) ) {
writer.warningOccurred$I(12);
}this.thumbWidth=Math.min(this.thumbWidth, 255);
this.thumbHeight=Math.min(this.thumbHeight, 255);
ios.write$I(this.thumbWidth);
ios.write$I(this.thumbHeight);
});

Clazz.newMeth(C$, 'writePixels$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter',  function (ios, writer) {
if ((this.thumbWidth > 255) || (this.thumbHeight > 255) ) {
writer.warningOccurred$I(12);
}this.thumbWidth=Math.min(this.thumbWidth, 255);
this.thumbHeight=Math.min(this.thumbHeight, 255);
var data=this.thumbnail.getRaster$().getPixels$I$I$I$I$IA(0, 0, this.thumbWidth, this.thumbHeight, null);
this.b$['com.sun.imageio.plugins.jpeg.JFIFMarkerSegment'].writeThumbnailData$javax_imageio_stream_ImageOutputStream$IA$com_sun_imageio_plugins_jpeg_JPEGImageWriter.apply(this.b$['com.sun.imageio.plugins.jpeg.JFIFMarkerSegment'], [ios, data, writer]);
});

Clazz.newMeth(C$, 'print$',  function () {
System.out.print$S(this.name + " width: ");
System.out.println$I(this.thumbWidth);
System.out.print$S(this.name + " height: ");
System.out.println$I(this.thumbHeight);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JFIFMarkerSegment, "JFIFThumbRGB", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['com.sun.imageio.plugins.jpeg.JFIFMarkerSegment','.JFIFThumbUncompressed']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$com_sun_imageio_plugins_jpeg_JPEGBuffer$I$I',  function (buffer, width, height) {
;C$.superclazz.c$$com_sun_imageio_plugins_jpeg_JPEGBuffer$I$I$I$S.apply(this,[buffer, width, height, width * height * 3 , "JFIFthumbRGB"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node',  function (node) {
;C$.superclazz.c$$org_w3c_dom_Node$S.apply(this,[node, "JFIFthumbRGB"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_BufferedImage',  function (thumb) {
;C$.superclazz.c$$java_awt_image_BufferedImage.apply(this,[thumb]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getLength$',  function () {
return (this.thumbWidth * this.thumbHeight * 3 );
});

Clazz.newMeth(C$, 'getThumbnail$javax_imageio_stream_ImageInputStream$com_sun_imageio_plugins_jpeg_JPEGImageReader',  function (iis, reader) {
iis.mark$();
iis.seek$J(this.streamPos);
var buffer=Clazz.new_([this.getLength$()],$I$(8,1).c$$I);
this.readByteBuffer$javax_imageio_stream_ImageInputStream$BA$com_sun_imageio_plugins_jpeg_JPEGImageReader$F$F(iis, buffer.getData$(), reader, 1.0, 0.0);
iis.reset$();
var raster=$I$(9,"createInterleavedRaster$java_awt_image_DataBuffer$I$I$I$I$IA$java_awt_Point",[buffer, this.thumbWidth, this.thumbHeight, this.thumbWidth * 3, 3, Clazz.array(Integer.TYPE, -1, [0, 1, 2]), null]);
var cm=Clazz.new_([$I$(11).sRGB, false, false, 1, 0],$I$(10,1).c$$java_awt_color_ColorSpace$Z$Z$I$I);
return Clazz.new_($I$(12,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[cm, raster, false, null]);
});

Clazz.newMeth(C$, 'write$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter',  function (ios, writer) {
C$.superclazz.prototype.write$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter.apply(this, [ios, writer]);
this.writePixels$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter(ios, writer);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JFIFMarkerSegment, "JFIFThumbPalette", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['com.sun.imageio.plugins.jpeg.JFIFMarkerSegment','.JFIFThumbUncompressed']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$com_sun_imageio_plugins_jpeg_JPEGBuffer$I$I',  function (buffer, width, height) {
;C$.superclazz.c$$com_sun_imageio_plugins_jpeg_JPEGBuffer$I$I$I$S.apply(this,[buffer, width, height, 768 + width * height, "JFIFThumbPalette"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node',  function (node) {
;C$.superclazz.c$$org_w3c_dom_Node$S.apply(this,[node, "JFIFThumbPalette"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_BufferedImage',  function (thumb) {
;C$.superclazz.c$$java_awt_image_BufferedImage.apply(this,[thumb]);C$.$init$.apply(this);
var icm=this.thumbnail.getColorModel$();
if (icm.getMapSize$() > 256) {
throw Clazz.new_($I$(5,1),[this, null]);
}}, 1);

Clazz.newMeth(C$, 'getLength$',  function () {
return (this.thumbWidth * this.thumbHeight + 768);
});

Clazz.newMeth(C$, 'getThumbnail$javax_imageio_stream_ImageInputStream$com_sun_imageio_plugins_jpeg_JPEGImageReader',  function (iis, reader) {
iis.mark$();
iis.seek$J(this.streamPos);
var palette=Clazz.array(Byte.TYPE, [768]);
var palettePart=(768.0) / this.getLength$();
this.readByteBuffer$javax_imageio_stream_ImageInputStream$BA$com_sun_imageio_plugins_jpeg_JPEGImageReader$F$F(iis, palette, reader, palettePart, 0.0);
var buffer=Clazz.new_($I$(8,1).c$$I,[this.thumbWidth * this.thumbHeight]);
this.readByteBuffer$javax_imageio_stream_ImageInputStream$BA$com_sun_imageio_plugins_jpeg_JPEGImageReader$F$F(iis, buffer.getData$(), reader, 1.0 - palettePart, palettePart);
iis.read$();
iis.reset$();
var cm=Clazz.new_($I$(13,1).c$$I$I$BA$I$Z,[8, 256, palette, 0, false]);
var sm=cm.createCompatibleSampleModel$I$I(this.thumbWidth, this.thumbHeight);
var raster=$I$(9).createWritableRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point(sm, buffer, null);
return Clazz.new_($I$(12,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[cm, raster, false, null]);
});

Clazz.newMeth(C$, 'write$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter',  function (ios, writer) {
C$.superclazz.prototype.write$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter.apply(this, [ios, writer]);
var palette=Clazz.array(Byte.TYPE, [768]);
var icm=this.thumbnail.getColorModel$();
var reds=Clazz.array(Byte.TYPE, [256]);
var greens=Clazz.array(Byte.TYPE, [256]);
var blues=Clazz.array(Byte.TYPE, [256]);
icm.getReds$BA(reds);
icm.getGreens$BA(greens);
icm.getBlues$BA(blues);
for (var i=0; i < 256; i++) {
palette[i * 3]=reds[i];
palette[i * 3 + 1]=greens[i];
palette[i * 3 + 2]=blues[i];
}
ios.write$BA(palette);
this.writePixels$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter(ios, writer);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JFIFMarkerSegment, "JFIFThumbJPEG", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['com.sun.imageio.plugins.jpeg.JFIFMarkerSegment','.JFIFThumb']);
C$.$classes$=[['ThumbnailReadListener',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.thumbMetadata=null;
this.data=null;
},1);

C$.$fields$=[['O',['thumbMetadata','com.sun.imageio.plugins.jpeg.JPEGMetadata','data','byte[]']]]

Clazz.newMeth(C$, 'c$$com_sun_imageio_plugins_jpeg_JPEGBuffer$I$com_sun_imageio_plugins_jpeg_JPEGImageReader',  function (buffer, length, reader) {
;C$.superclazz.c$$com_sun_imageio_plugins_jpeg_JPEGBuffer.apply(this,[buffer]);C$.$init$.apply(this);
var finalPos=Long.$add(this.streamPos,(length - 6));
buffer.iis.seek$J(this.streamPos);
this.thumbMetadata=Clazz.new_($I$(14,1).c$$Z$Z$javax_imageio_stream_ImageInputStream$com_sun_imageio_plugins_jpeg_JPEGImageReader,[false, true, buffer.iis, reader]);
buffer.iis.seek$J(finalPos);
buffer.bufAvail=0;
buffer.bufPtr=0;
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node',  function (node) {
Clazz.super_(C$, this);
if (node.getChildNodes$().getLength$() > 1) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["JFIFThumbJPEG node must have 0 or 1 child", node]);
}var child=node.getFirstChild$();
if (child != null ) {
var name=child.getNodeName$();
if (!name.equals$O("markerSequence")) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["JFIFThumbJPEG child must be a markerSequence node", node]);
}this.thumbMetadata=Clazz.new_($I$(14,1).c$$Z$Z,[false, true]);
this.thumbMetadata.setFromMarkerSequenceNode$org_w3c_dom_Node(child);
}}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_BufferedImage',  function (thumb) {
Clazz.super_(C$, this);
var INITIAL_BUFSIZE=4096;
var MAZ_BUFSIZE=65527;
try {
var baos=Clazz.new_($I$(15,1).c$$I,[INITIAL_BUFSIZE]);
var mos=Clazz.new_($I$(16,1).c$$java_io_OutputStream,[baos]);
var thumbWriter=Clazz.new_($I$(17,1).c$$javax_imageio_spi_ImageWriterSpi,[null]);
thumbWriter.setOutput$O(mos);
var metadata=thumbWriter.getDefaultImageMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam(Clazz.new_($I$(18,1).c$$java_awt_image_RenderedImage,[thumb]), null);
var jfif=metadata.findMarkerSegment$Class$Z(Clazz.getClass($I$(19)), true);
if (jfif == null ) {
throw Clazz.new_($I$(5,1),[this, null]);
}metadata.markerSequence.remove$O(jfif);
thumbWriter.write$javax_imageio_IIOImage(Clazz.new_($I$(20,1).c$$java_awt_image_RenderedImage$java_util_List$javax_imageio_metadata_IIOMetadata,[thumb, null, metadata]));
thumbWriter.dispose$();
if (baos.size$() > MAZ_BUFSIZE) {
throw Clazz.new_($I$(5,1),[this, null]);
}this.data=baos.toByteArray$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(5,1),[this, null]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getWidth$',  function () {
var retval=0;
var sof=this.thumbMetadata.findMarkerSegment$Class$Z(Clazz.getClass($I$(21)), true);
if (sof != null ) {
retval=sof.samplesPerLine;
}return retval;
});

Clazz.newMeth(C$, 'getHeight$',  function () {
var retval=0;
var sof=this.thumbMetadata.findMarkerSegment$Class$Z(Clazz.getClass($I$(21)), true);
if (sof != null ) {
retval=sof.numLines;
}return retval;
});

Clazz.newMeth(C$, 'getThumbnail$javax_imageio_stream_ImageInputStream$com_sun_imageio_plugins_jpeg_JPEGImageReader',  function (iis, reader) {
iis.mark$();
iis.seek$J(this.streamPos);
var thumbReader=Clazz.new_($I$(22,1).c$$javax_imageio_spi_ImageReaderSpi,[null]);
thumbReader.setInput$O(iis);
thumbReader.addIIOReadProgressListener$javax_imageio_event_IIOReadProgressListener(Clazz.new_($I$(23,1).c$$com_sun_imageio_plugins_jpeg_JPEGImageReader,[this, null, reader]));
var ret=thumbReader.read$I$javax_imageio_ImageReadParam(0, null);
thumbReader.dispose$();
iis.reset$();
return ret;
});

Clazz.newMeth(C$, 'clone$',  function () {
var newGuy=C$.superclazz.prototype.clone$.apply(this, []);
if (this.thumbMetadata != null ) {
newGuy.thumbMetadata=this.thumbMetadata.clone$();
}return newGuy;
});

Clazz.newMeth(C$, 'getNativeNode$',  function () {
var node=Clazz.new_($I$(7,1).c$$S,["JFIFthumbJPEG"]);
if (this.thumbMetadata != null ) {
node.appendChild$org_w3c_dom_Node(this.thumbMetadata.getNativeTree$());
}return node;
});

Clazz.newMeth(C$, 'getLength$',  function () {
if (this.data == null ) {
return 0;
} else {
return this.data.length;
}});

Clazz.newMeth(C$, 'write$javax_imageio_stream_ImageOutputStream$com_sun_imageio_plugins_jpeg_JPEGImageWriter',  function (ios, writer) {
var progInterval=(this.data.length/20|0);
if (progInterval == 0) {
progInterval=1;
}for (var offset=0; offset < this.data.length; ) {
var len=Math.min(progInterval, this.data.length - offset);
ios.write$BA$I$I(this.data, offset, len);
offset+=progInterval;
var percentDone=(offset * 100) / this.data.length;
if (percentDone > 100.0 ) {
percentDone=100.0;
}writer.thumbnailProgress$F(percentDone);
}
});

Clazz.newMeth(C$, 'print$',  function () {
System.out.println$S("JFIF thumbnail stored as JPEG");
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JFIFMarkerSegment.JFIFThumbJPEG, "ThumbnailReadListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'javax.imageio.event.IIOReadProgressListener');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.reader=null;
},1);

C$.$fields$=[['O',['reader','com.sun.imageio.plugins.jpeg.JPEGImageReader']]]

Clazz.newMeth(C$, 'c$$com_sun_imageio_plugins_jpeg_JPEGImageReader',  function (reader) {
;C$.$init$.apply(this);
this.reader=reader;
}, 1);

Clazz.newMeth(C$, 'sequenceStarted$javax_imageio_ImageReader$I',  function (source, minIndex) {
});

Clazz.newMeth(C$, 'sequenceComplete$javax_imageio_ImageReader',  function (source) {
});

Clazz.newMeth(C$, 'imageStarted$javax_imageio_ImageReader$I',  function (source, imageIndex) {
});

Clazz.newMeth(C$, 'imageProgress$javax_imageio_ImageReader$F',  function (source, percentageDone) {
this.reader.thumbnailProgress$F(percentageDone);
});

Clazz.newMeth(C$, 'imageComplete$javax_imageio_ImageReader',  function (source) {
});

Clazz.newMeth(C$, 'thumbnailStarted$javax_imageio_ImageReader$I$I',  function (source, imageIndex, thumbnailIndex) {
});

Clazz.newMeth(C$, 'thumbnailProgress$javax_imageio_ImageReader$F',  function (source, percentageDone) {
});

Clazz.newMeth(C$, 'thumbnailComplete$javax_imageio_ImageReader',  function (source) {
});

Clazz.newMeth(C$, 'readAborted$javax_imageio_ImageReader',  function (source) {
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JFIFMarkerSegment, "ICCMarkerSegment", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'com.sun.imageio.plugins.jpeg.MarkerSegment');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.chunks=null;
this.profile=null;
},1);

C$.$fields$=[['I',['chunksRead','numChunks'],'O',['chunks','java.util.ArrayList','profile','byte[]']]]

Clazz.newMeth(C$, 'c$$java_awt_color_ICC_ColorSpace',  function (cs) {
;C$.superclazz.c$$I.apply(this,[226]);C$.$init$.apply(this);
this.chunks=null;
this.chunksRead=0;
this.numChunks=0;
this.profile=cs.getProfile$().getData$();
}, 1);

Clazz.newMeth(C$, 'c$$com_sun_imageio_plugins_jpeg_JPEGBuffer',  function (buffer) {
;C$.superclazz.c$$com_sun_imageio_plugins_jpeg_JPEGBuffer.apply(this,[buffer]);C$.$init$.apply(this);
if (false) {
System.out.println$S("Creating new ICC segment");
}buffer.bufPtr+=12;
buffer.bufAvail-=12;
this.length-=12;
var chunkNum=buffer.buf[buffer.bufPtr] & 255;
this.numChunks=buffer.buf[buffer.bufPtr + 1] & 255;
if (chunkNum > this.numChunks) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Image format Error; chunk num > num chunks"]);
}if (this.numChunks == 1) {
this.length-=2;
this.profile=Clazz.array(Byte.TYPE, [this.length]);
buffer.bufPtr+=2;
buffer.bufAvail-=2;
buffer.readData$BA(this.profile);
this.b$['com.sun.imageio.plugins.jpeg.JFIFMarkerSegment'].inICC=false;
} else {
var profileData=Clazz.array(Byte.TYPE, [this.length]);
this.length-=2;
buffer.readData$BA(profileData);
this.chunks=Clazz.new_($I$(24,1));
this.chunks.add$O(profileData);
this.chunksRead=1;
this.b$['com.sun.imageio.plugins.jpeg.JFIFMarkerSegment'].inICC=true;
}}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node',  function (node) {
;C$.superclazz.c$$I.apply(this,[226]);C$.$init$.apply(this);
if (Clazz.instanceOf(node, "javax.imageio.metadata.IIOMetadataNode")) {
var ourNode=node;
var prof=ourNode.getUserObject$();
if (prof != null ) {
this.profile=prof.getData$();
}}}, 1);

Clazz.newMeth(C$, 'clone$',  function () {
var newGuy=C$.superclazz.prototype.clone$.apply(this, []);
if (this.profile != null ) {
newGuy.profile=this.profile.clone$();
}return newGuy;
});

Clazz.newMeth(C$, 'addData$com_sun_imageio_plugins_jpeg_JPEGBuffer',  function (buffer) {
if (false) {
System.out.println$S("Adding to ICC segment");
}++buffer.bufPtr;
--buffer.bufAvail;
var dataLen=(buffer.buf[buffer.bufPtr++] & 255) << 8;
dataLen|=buffer.buf[buffer.bufPtr++] & 255;
buffer.bufAvail-=2;
dataLen-=2;
buffer.bufPtr+=12;
buffer.bufAvail-=12;
dataLen-=12;
var chunkNum=buffer.buf[buffer.bufPtr] & 255;
if (chunkNum > this.numChunks) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Image format Error; chunk num > num chunks"]);
}var newNumChunks=buffer.buf[buffer.bufPtr + 1] & 255;
if (this.numChunks != newNumChunks) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Image format Error; icc num chunks mismatch"]);
}dataLen-=2;
if (false) {
System.out.println$S("chunkNum: " + chunkNum + ", numChunks: " + this.numChunks + ", dataLen: " + dataLen );
}var retval=false;
var profileData=Clazz.array(Byte.TYPE, [dataLen]);
buffer.readData$BA(profileData);
this.chunks.add$O(profileData);
this.length+=dataLen;
++this.chunksRead;
if (this.chunksRead < this.numChunks) {
this.b$['com.sun.imageio.plugins.jpeg.JFIFMarkerSegment'].inICC=true;
} else {
if (false) {
System.out.println$S("Completing profile; total length is " + this.length);
}this.profile=Clazz.array(Byte.TYPE, [this.length]);
var index=0;
for (var i=1; i <= this.numChunks; i++) {
var foundIt=false;
for (var chunk=0; chunk < this.chunks.size$(); chunk++) {
var chunkData=this.chunks.get$I(chunk);
if (chunkData[0] == i) {
System.arraycopy$O$I$O$I$I(chunkData, 2, this.profile, index, chunkData.length - 2);
index+=chunkData.length - 2;
foundIt=true;
}}
if (foundIt == false ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Image Format Error: Missing ICC chunk num " + i]);
}}
this.chunks=null;
this.chunksRead=0;
this.numChunks=0;
this.b$['com.sun.imageio.plugins.jpeg.JFIFMarkerSegment'].inICC=false;
retval=true;
}return retval;
});

Clazz.newMeth(C$, 'getNativeNode$',  function () {
var node=Clazz.new_($I$(7,1).c$$S,["app2ICC"]);
if (this.profile != null ) {
node.setUserObject$O($I$(25).getInstance$BA(this.profile));
}return node;
});

Clazz.newMeth(C$, 'write$javax_imageio_stream_ImageOutputStream',  function (ios) {
});

Clazz.newMeth(C$, 'print$',  function () {
this.printTag$S("ICC Profile APP2");
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:54 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
