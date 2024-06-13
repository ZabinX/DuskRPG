(function(){var P$=Clazz.newPackage("javax.imageio"),p$1={},I$=[[0,'javax.imageio.ImageReadParam','java.util.ArrayList','javax.imageio.IIOImage','java.util.Locale','java.security.AccessController','Thread','java.util.ResourceBundle','java.awt.Rectangle']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageReader");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.input=null;
this.seekForwardOnly=false;
this.ignoreMetadata=false;
this.minIndex=0;
this.availableLocales=null;
this.locale=null;
this.warningListeners=null;
this.warningLocales=null;
this.progressListeners=null;
this.updateListeners=null;
this.abortFlag=false;
},1);

C$.$fields$=[['Z',['seekForwardOnly','ignoreMetadata','abortFlag'],'I',['minIndex'],'O',['originatingProvider','javax.imageio.spi.ImageReaderSpi','input','java.lang.Object','availableLocales','java.util.Locale[]','locale','java.util.Locale','warningListeners','java.util.List','+warningLocales','+progressListeners','+updateListeners']]]

Clazz.newMeth(C$, 'c$$javax_imageio_spi_ImageReaderSpi',  function (originatingProvider) {
;C$.$init$.apply(this);
this.originatingProvider=originatingProvider;
}, 1);

Clazz.newMeth(C$, 'getFormatName$',  function () {
return this.originatingProvider.getFormatNames$()[0];
});

Clazz.newMeth(C$, 'getOriginatingProvider$',  function () {
return this.originatingProvider;
});

Clazz.newMeth(C$, 'setInput$O$Z$Z',  function (input, seekForwardOnly, ignoreMetadata) {
if (input != null ) {
var found=false;
if (this.originatingProvider != null ) {
var classes=this.originatingProvider.getInputTypes$();
for (var i=0; i < classes.length; i++) {
if (classes[i].isInstance$O(input)) {
found=true;
break;
}}
} else {
if (Clazz.instanceOf(input, "javax.imageio.stream.ImageInputStream")) {
found=true;
}}if (!found) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Incorrect input type!"]);
}this.seekForwardOnly=seekForwardOnly;
this.ignoreMetadata=ignoreMetadata;
this.minIndex=0;
}this.input=input;
});

Clazz.newMeth(C$, 'setInput$O$Z',  function (input, seekForwardOnly) {
this.setInput$O$Z$Z(input, seekForwardOnly, false);
});

Clazz.newMeth(C$, 'setInput$O',  function (input) {
this.setInput$O$Z$Z(input, false, false);
});

Clazz.newMeth(C$, 'getInput$',  function () {
return this.input;
});

Clazz.newMeth(C$, 'isSeekForwardOnly$',  function () {
return this.seekForwardOnly;
});

Clazz.newMeth(C$, 'isIgnoringMetadata$',  function () {
return this.ignoreMetadata;
});

Clazz.newMeth(C$, 'getMinIndex$',  function () {
return this.minIndex;
});

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
if (this.availableLocales == null ) {
return null;
} else {
return this.availableLocales.clone$();
}});

Clazz.newMeth(C$, 'setLocale$java_util_Locale',  function (locale) {
if (locale != null ) {
var locales=this.getAvailableLocales$();
var found=false;
if (locales != null ) {
for (var i=0; i < locales.length; i++) {
if (locale.equals$O(locales[i])) {
found=true;
break;
}}
}if (!found) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid locale!"]);
}}this.locale=locale;
});

Clazz.newMeth(C$, 'getLocale$',  function () {
return this.locale;
});

Clazz.newMeth(C$, 'isRandomAccessEasy$I',  function (imageIndex) {
return false;
});

Clazz.newMeth(C$, 'getAspectRatio$I',  function (imageIndex) {
return this.getWidth$I(imageIndex) / this.getHeight$I(imageIndex);
});

Clazz.newMeth(C$, 'getRawImageType$I',  function (imageIndex) {
return this.getImageTypes$I(imageIndex).next$();
});

Clazz.newMeth(C$, 'getDefaultReadParam$',  function () {
return Clazz.new_($I$(1,1));
});

Clazz.newMeth(C$, 'getStreamMetadata$S$java_util_Set',  function (formatName, nodeNames) {
return p$1.getMetadata$S$java_util_Set$Z$I.apply(this, [formatName, nodeNames, true, 0]);
});

Clazz.newMeth(C$, 'getMetadata$S$java_util_Set$Z$I',  function (formatName, nodeNames, wantStream, imageIndex) {
if (formatName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["formatName == null!"]);
}if (nodeNames == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["nodeNames == null!"]);
}var metadata=wantStream ? this.getStreamMetadata$() : this.getImageMetadata$I(imageIndex);
if (metadata != null ) {
if (metadata.isStandardMetadataFormatSupported$() && formatName.equals$O("javax_imageio_1.0") ) {
return metadata;
}var nativeName=metadata.getNativeMetadataFormatName$();
if (nativeName != null  && formatName.equals$O(nativeName) ) {
return metadata;
}var extraNames=metadata.getExtraMetadataFormatNames$();
if (extraNames != null ) {
for (var i=0; i < extraNames.length; i++) {
if (formatName.equals$O(extraNames[i])) {
return metadata;
}}
}}return null;
}, p$1);

Clazz.newMeth(C$, 'getImageMetadata$I$S$java_util_Set',  function (imageIndex, formatName, nodeNames) {
return p$1.getMetadata$S$java_util_Set$Z$I.apply(this, [formatName, nodeNames, false, imageIndex]);
});

Clazz.newMeth(C$, 'read$I',  function (imageIndex) {
return this.read$I$javax_imageio_ImageReadParam(imageIndex, null);
});

Clazz.newMeth(C$, 'readAll$I$javax_imageio_ImageReadParam',  function (imageIndex, param) {
if (imageIndex < this.getMinIndex$()) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["imageIndex < getMinIndex()!"]);
}var im=this.read$I$javax_imageio_ImageReadParam(imageIndex, param);
var thumbnails=null;
var numThumbnails=this.getNumThumbnails$I(imageIndex);
if (numThumbnails > 0) {
thumbnails=Clazz.new_($I$(2,1));
for (var j=0; j < numThumbnails; j++) {
thumbnails.add$O(this.readThumbnail$I$I(imageIndex, j));
}
}var metadata=this.getImageMetadata$I(imageIndex);
return Clazz.new_($I$(3,1).c$$java_awt_image_RenderedImage$java_util_List$javax_imageio_metadata_IIOMetadata,[im, thumbnails, metadata]);
});

Clazz.newMeth(C$, 'readAll$java_util_Iterator',  function (params) {
var output=Clazz.new_($I$(2,1));
var imageIndex=this.getMinIndex$();
this.processSequenceStarted$I(imageIndex);
while (true){
var param=null;
if (params != null  && params.hasNext$() ) {
var o=params.next$();
if (o != null ) {
if (Clazz.instanceOf(o, "javax.imageio.ImageReadParam")) {
param=o;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non-ImageReadParam supplied as part of params!"]);
}}}var bi=null;
try {
bi=this.read$I$javax_imageio_ImageReadParam(imageIndex, param);
} catch (e) {
if (Clazz.exceptionOf(e,"IndexOutOfBoundsException")){
break;
} else {
throw e;
}
}
var thumbnails=null;
var numThumbnails=this.getNumThumbnails$I(imageIndex);
if (numThumbnails > 0) {
thumbnails=Clazz.new_($I$(2,1));
for (var j=0; j < numThumbnails; j++) {
thumbnails.add$O(this.readThumbnail$I$I(imageIndex, j));
}
}var metadata=this.getImageMetadata$I(imageIndex);
var im=Clazz.new_($I$(3,1).c$$java_awt_image_RenderedImage$java_util_List$javax_imageio_metadata_IIOMetadata,[bi, thumbnails, metadata]);
output.add$O(im);
++imageIndex;
}
this.processSequenceComplete$();
return output.iterator$();
});

Clazz.newMeth(C$, 'canReadRaster$',  function () {
return false;
});

Clazz.newMeth(C$, 'readRaster$I$javax_imageio_ImageReadParam',  function (imageIndex, param) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["readRaster not supported!"]);
});

Clazz.newMeth(C$, 'isImageTiled$I',  function (imageIndex) {
return false;
});

Clazz.newMeth(C$, 'getTileWidth$I',  function (imageIndex) {
return this.getWidth$I(imageIndex);
});

Clazz.newMeth(C$, 'getTileHeight$I',  function (imageIndex) {
return this.getHeight$I(imageIndex);
});

Clazz.newMeth(C$, 'getTileGridXOffset$I',  function (imageIndex) {
return 0;
});

Clazz.newMeth(C$, 'getTileGridYOffset$I',  function (imageIndex) {
return 0;
});

Clazz.newMeth(C$, 'readTile$I$I$I',  function (imageIndex, tileX, tileY) {
if ((tileX != 0) || (tileY != 0) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid tile indices"]);
}return this.read$I(imageIndex);
});

Clazz.newMeth(C$, 'readTileRaster$I$I$I',  function (imageIndex, tileX, tileY) {
if (!this.canReadRaster$()) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["readTileRaster not supported!"]);
}if ((tileX != 0) || (tileY != 0) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid tile indices"]);
}return this.readRaster$I$javax_imageio_ImageReadParam(imageIndex, null);
});

Clazz.newMeth(C$, 'readAsRenderedImage$I$javax_imageio_ImageReadParam',  function (imageIndex, param) {
return this.read$I$javax_imageio_ImageReadParam(imageIndex, param);
});

Clazz.newMeth(C$, 'readerSupportsThumbnails$',  function () {
return false;
});

Clazz.newMeth(C$, 'hasThumbnails$I',  function (imageIndex) {
return this.getNumThumbnails$I(imageIndex) > 0;
});

Clazz.newMeth(C$, 'getNumThumbnails$I',  function (imageIndex) {
return 0;
});

Clazz.newMeth(C$, 'getThumbnailWidth$I$I',  function (imageIndex, thumbnailIndex) {
return this.readThumbnail$I$I(imageIndex, thumbnailIndex).getWidth$();
});

Clazz.newMeth(C$, 'getThumbnailHeight$I$I',  function (imageIndex, thumbnailIndex) {
return this.readThumbnail$I$I(imageIndex, thumbnailIndex).getHeight$();
});

Clazz.newMeth(C$, 'readThumbnail$I$I',  function (imageIndex, thumbnailIndex) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Thumbnails not supported!"]);
});

Clazz.newMeth(C$, 'abort$',  function () {
this.abortFlag=true;
});

Clazz.newMeth(C$, 'abortRequested$',  function () {
return this.abortFlag;
});

Clazz.newMeth(C$, 'clearAbortRequest$',  function () {
this.abortFlag=false;
});

Clazz.newMeth(C$, 'addToList$java_util_List$O',  function (l, elt) {
if (l == null ) {
l=Clazz.new_($I$(2,1));
}l.add$O(elt);
return l;
}, 1);

Clazz.newMeth(C$, 'removeFromList$java_util_List$O',  function (l, elt) {
if (l == null ) {
return l;
}l.remove$O(elt);
if (l.size$() == 0) {
l=null;
}return l;
}, 1);

Clazz.newMeth(C$, 'addIIOReadWarningListener$javax_imageio_event_IIOReadWarningListener',  function (listener) {
if (listener == null ) {
return;
}this.warningListeners=C$.addToList$java_util_List$O(this.warningListeners, listener);
this.warningLocales=C$.addToList$java_util_List$O(this.warningLocales, this.getLocale$());
});

Clazz.newMeth(C$, 'removeIIOReadWarningListener$javax_imageio_event_IIOReadWarningListener',  function (listener) {
if (listener == null  || this.warningListeners == null  ) {
return;
}var index=this.warningListeners.indexOf$O(listener);
if (index != -1) {
this.warningListeners.remove$I(index);
this.warningLocales.remove$I(index);
if (this.warningListeners.size$() == 0) {
this.warningListeners=null;
this.warningLocales=null;
}}});

Clazz.newMeth(C$, 'removeAllIIOReadWarningListeners$',  function () {
this.warningListeners=null;
this.warningLocales=null;
});

Clazz.newMeth(C$, 'addIIOReadProgressListener$javax_imageio_event_IIOReadProgressListener',  function (listener) {
if (listener == null ) {
return;
}this.progressListeners=C$.addToList$java_util_List$O(this.progressListeners, listener);
});

Clazz.newMeth(C$, 'removeIIOReadProgressListener$javax_imageio_event_IIOReadProgressListener',  function (listener) {
if (listener == null  || this.progressListeners == null  ) {
return;
}this.progressListeners=C$.removeFromList$java_util_List$O(this.progressListeners, listener);
});

Clazz.newMeth(C$, 'removeAllIIOReadProgressListeners$',  function () {
this.progressListeners=null;
});

Clazz.newMeth(C$, 'addIIOReadUpdateListener$javax_imageio_event_IIOReadUpdateListener',  function (listener) {
if (listener == null ) {
return;
}this.updateListeners=C$.addToList$java_util_List$O(this.updateListeners, listener);
});

Clazz.newMeth(C$, 'removeIIOReadUpdateListener$javax_imageio_event_IIOReadUpdateListener',  function (listener) {
if (listener == null  || this.updateListeners == null  ) {
return;
}this.updateListeners=C$.removeFromList$java_util_List$O(this.updateListeners, listener);
});

Clazz.newMeth(C$, 'removeAllIIOReadUpdateListeners$',  function () {
this.updateListeners=null;
});

Clazz.newMeth(C$, 'processSequenceStarted$I',  function (minIndex) {
if (this.progressListeners == null ) {
return;
}var numListeners=this.progressListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.progressListeners.get$I(i);
listener.sequenceStarted$javax_imageio_ImageReader$I(this, minIndex);
}
});

Clazz.newMeth(C$, 'processSequenceComplete$',  function () {
if (this.progressListeners == null ) {
return;
}var numListeners=this.progressListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.progressListeners.get$I(i);
listener.sequenceComplete$javax_imageio_ImageReader(this);
}
});

Clazz.newMeth(C$, 'processImageStarted$I',  function (imageIndex) {
if (this.progressListeners == null ) {
return;
}var numListeners=this.progressListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.progressListeners.get$I(i);
listener.imageStarted$javax_imageio_ImageReader$I(this, imageIndex);
}
});

Clazz.newMeth(C$, 'processImageProgress$F',  function (percentageDone) {
if (this.progressListeners == null ) {
return;
}var numListeners=this.progressListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.progressListeners.get$I(i);
listener.imageProgress$javax_imageio_ImageReader$F(this, percentageDone);
}
});

Clazz.newMeth(C$, 'processImageComplete$',  function () {
if (this.progressListeners == null ) {
return;
}var numListeners=this.progressListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.progressListeners.get$I(i);
listener.imageComplete$javax_imageio_ImageReader(this);
}
});

Clazz.newMeth(C$, 'processThumbnailStarted$I$I',  function (imageIndex, thumbnailIndex) {
if (this.progressListeners == null ) {
return;
}var numListeners=this.progressListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.progressListeners.get$I(i);
listener.thumbnailStarted$javax_imageio_ImageReader$I$I(this, imageIndex, thumbnailIndex);
}
});

Clazz.newMeth(C$, 'processThumbnailProgress$F',  function (percentageDone) {
if (this.progressListeners == null ) {
return;
}var numListeners=this.progressListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.progressListeners.get$I(i);
listener.thumbnailProgress$javax_imageio_ImageReader$F(this, percentageDone);
}
});

Clazz.newMeth(C$, 'processThumbnailComplete$',  function () {
if (this.progressListeners == null ) {
return;
}var numListeners=this.progressListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.progressListeners.get$I(i);
listener.thumbnailComplete$javax_imageio_ImageReader(this);
}
});

Clazz.newMeth(C$, 'processReadAborted$',  function () {
if (this.progressListeners == null ) {
return;
}var numListeners=this.progressListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.progressListeners.get$I(i);
listener.readAborted$javax_imageio_ImageReader(this);
}
});

Clazz.newMeth(C$, 'processPassStarted$java_awt_image_BufferedImage$I$I$I$I$I$I$I$IA',  function (theImage, pass, minPass, maxPass, minX, minY, periodX, periodY, bands) {
if (this.updateListeners == null ) {
return;
}var numListeners=this.updateListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.updateListeners.get$I(i);
listener.passStarted$javax_imageio_ImageReader$java_awt_image_BufferedImage$I$I$I$I$I$I$I$IA(this, theImage, pass, minPass, maxPass, minX, minY, periodX, periodY, bands);
}
});

Clazz.newMeth(C$, 'processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA',  function (theImage, minX, minY, width, height, periodX, periodY, bands) {
if (this.updateListeners == null ) {
return;
}var numListeners=this.updateListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.updateListeners.get$I(i);
listener.imageUpdate$javax_imageio_ImageReader$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this, theImage, minX, minY, width, height, periodX, periodY, bands);
}
});

Clazz.newMeth(C$, 'processPassComplete$java_awt_image_BufferedImage',  function (theImage) {
if (this.updateListeners == null ) {
return;
}var numListeners=this.updateListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.updateListeners.get$I(i);
listener.passComplete$javax_imageio_ImageReader$java_awt_image_BufferedImage(this, theImage);
}
});

Clazz.newMeth(C$, 'processThumbnailPassStarted$java_awt_image_BufferedImage$I$I$I$I$I$I$I$IA',  function (theThumbnail, pass, minPass, maxPass, minX, minY, periodX, periodY, bands) {
if (this.updateListeners == null ) {
return;
}var numListeners=this.updateListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.updateListeners.get$I(i);
listener.thumbnailPassStarted$javax_imageio_ImageReader$java_awt_image_BufferedImage$I$I$I$I$I$I$I$IA(this, theThumbnail, pass, minPass, maxPass, minX, minY, periodX, periodY, bands);
}
});

Clazz.newMeth(C$, 'processThumbnailUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA',  function (theThumbnail, minX, minY, width, height, periodX, periodY, bands) {
if (this.updateListeners == null ) {
return;
}var numListeners=this.updateListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.updateListeners.get$I(i);
listener.thumbnailUpdate$javax_imageio_ImageReader$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this, theThumbnail, minX, minY, width, height, periodX, periodY, bands);
}
});

Clazz.newMeth(C$, 'processThumbnailPassComplete$java_awt_image_BufferedImage',  function (theThumbnail) {
if (this.updateListeners == null ) {
return;
}var numListeners=this.updateListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.updateListeners.get$I(i);
listener.thumbnailPassComplete$javax_imageio_ImageReader$java_awt_image_BufferedImage(this, theThumbnail);
}
});

Clazz.newMeth(C$, 'processWarningOccurred$S',  function (warning) {
if (this.warningListeners == null ) {
return;
}if (warning == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["warning == null!"]);
}var numListeners=this.warningListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.warningListeners.get$I(i);
listener.warningOccurred$javax_imageio_ImageReader$S(this, warning);
}
});

Clazz.newMeth(C$, 'processWarningOccurred$S$S',  function (baseName, keyword) {
if (this.warningListeners == null ) {
return;
}if (baseName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["baseName == null!"]);
}if (keyword == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["keyword == null!"]);
}var numListeners=this.warningListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.warningListeners.get$I(i);
var locale=this.warningLocales.get$I(i);
if (locale == null ) {
locale=$I$(4).getDefault$();
}var loader=$I$(5,"doPrivileged$java_security_PrivilegedAction",[((P$.ImageReader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageReader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return $I$(6).currentThread$().getContextClassLoader$();
});
})()
), Clazz.new_(P$.ImageReader$1.$init$,[this, null]))]);
var bundle=null;
try {
bundle=$I$(7).getBundle$S$java_util_Locale$O(baseName, locale, loader);
} catch (mre) {
if (Clazz.exceptionOf(mre,"java.util.MissingResourceException")){
try {
bundle=$I$(7).getBundle$S$java_util_Locale(baseName, locale);
} catch (mre1) {
if (Clazz.exceptionOf(mre1,"java.util.MissingResourceException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bundle not found!"]);
} else {
throw mre1;
}
}
} else {
throw mre;
}
}
var warning=null;
try {
warning=bundle.getString$S(keyword);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassCastException")){
var cce = e$$;
{
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Resource is not a String!"]);
}
} else if (Clazz.exceptionOf(e$$,"java.util.MissingResourceException")){
var mre = e$$;
{
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Resource is missing!"]);
}
} else {
throw e$$;
}
}
listener.warningOccurred$javax_imageio_ImageReader$S(this, warning);
}
});

Clazz.newMeth(C$, 'reset$',  function () {
this.setInput$O$Z$Z(null, false, false);
this.setLocale$java_util_Locale(null);
this.removeAllIIOReadUpdateListeners$();
this.removeAllIIOReadProgressListeners$();
this.removeAllIIOReadWarningListeners$();
this.clearAbortRequest$();
});

Clazz.newMeth(C$, 'dispose$',  function () {
});

Clazz.newMeth(C$, 'getSourceRegion$javax_imageio_ImageReadParam$I$I',  function (param, srcWidth, srcHeight) {
var sourceRegion=Clazz.new_($I$(8,1).c$$I$I$I$I,[0, 0, srcWidth, srcHeight]);
if (param != null ) {
var region=param.getSourceRegion$();
if (region != null ) {
sourceRegion=sourceRegion.intersection$java_awt_Rectangle(region);
}var subsampleXOffset=param.getSubsamplingXOffset$();
var subsampleYOffset=param.getSubsamplingYOffset$();
sourceRegion.x+=subsampleXOffset;
sourceRegion.y+=subsampleYOffset;
sourceRegion.width-=subsampleXOffset;
sourceRegion.height-=subsampleYOffset;
}return sourceRegion;
}, 1);

Clazz.newMeth(C$, 'computeRegions$javax_imageio_ImageReadParam$I$I$java_awt_image_BufferedImage$java_awt_Rectangle$java_awt_Rectangle',  function (param, srcWidth, srcHeight, image, srcRegion, destRegion) {
if (srcRegion == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["srcRegion == null!"]);
}if (destRegion == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["destRegion == null!"]);
}srcRegion.setBounds$I$I$I$I(0, 0, srcWidth, srcHeight);
destRegion.setBounds$I$I$I$I(0, 0, srcWidth, srcHeight);
var periodX=1;
var periodY=1;
var gridX=0;
var gridY=0;
if (param != null ) {
var paramSrcRegion=param.getSourceRegion$();
if (paramSrcRegion != null ) {
srcRegion.setBounds$java_awt_Rectangle(srcRegion.intersection$java_awt_Rectangle(paramSrcRegion));
}periodX=param.getSourceXSubsampling$();
periodY=param.getSourceYSubsampling$();
gridX=param.getSubsamplingXOffset$();
gridY=param.getSubsamplingYOffset$();
srcRegion.translate$I$I(gridX, gridY);
srcRegion.width-=gridX;
srcRegion.height-=gridY;
destRegion.setLocation$java_awt_Point(param.getDestinationOffset$());
}if (destRegion.x < 0) {
var delta=-destRegion.x * periodX;
srcRegion.x+=delta;
srcRegion.width-=delta;
destRegion.x=0;
}if (destRegion.y < 0) {
var delta=-destRegion.y * periodY;
srcRegion.y+=delta;
srcRegion.height-=delta;
destRegion.y=0;
}var subsampledWidth=((srcRegion.width + periodX - 1)/periodX|0);
var subsampledHeight=((srcRegion.height + periodY - 1)/periodY|0);
destRegion.width=subsampledWidth;
destRegion.height=subsampledHeight;
if (image != null ) {
var destImageRect=Clazz.new_([0, 0, image.getWidth$(), image.getHeight$()],$I$(8,1).c$$I$I$I$I);
destRegion.setBounds$java_awt_Rectangle(destRegion.intersection$java_awt_Rectangle(destImageRect));
if (destRegion.isEmpty$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Empty destination region!"]);
}var deltaX=destRegion.x + subsampledWidth - image.getWidth$();
if (deltaX > 0) {
srcRegion.width-=deltaX * periodX;
}var deltaY=destRegion.y + subsampledHeight - image.getHeight$();
if (deltaY > 0) {
srcRegion.height-=deltaY * periodY;
}}if (srcRegion.isEmpty$() || destRegion.isEmpty$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Empty region!"]);
}}, 1);

Clazz.newMeth(C$, 'checkReadParamBandSettings$javax_imageio_ImageReadParam$I$I',  function (param, numSrcBands, numDstBands) {
var srcBands=null;
var dstBands=null;
if (param != null ) {
srcBands=param.getSourceBands$();
dstBands=param.getDestinationBands$();
}var paramSrcBandLength=(srcBands == null ) ? numSrcBands : srcBands.length;
var paramDstBandLength=(dstBands == null ) ? numDstBands : dstBands.length;
if (paramSrcBandLength != paramDstBandLength) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["ImageReadParam num source & dest bands differ!"]);
}if (srcBands != null ) {
for (var i=0; i < srcBands.length; i++) {
if (srcBands[i] >= numSrcBands) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["ImageReadParam source bands contains a value >= the number of source bands!"]);
}}
}if (dstBands != null ) {
for (var i=0; i < dstBands.length; i++) {
if (dstBands[i] >= numDstBands) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["ImageReadParam dest bands contains a value >= the number of dest bands!"]);
}}
}}, 1);

Clazz.newMeth(C$, 'getDestination$javax_imageio_ImageReadParam$java_util_Iterator$I$I',  function (param, imageTypes, width, height) {
if (imageTypes == null  || !imageTypes.hasNext$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["imageTypes null or empty!"]);
}if (Long.$gt(Long.$mul(width,height),2147483647 )) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["width*height > Integer.MAX_VALUE!"]);
}var dest=null;
var imageType=null;
if (param != null ) {
dest=param.getDestination$();
if (dest != null ) {
return dest;
}imageType=param.getDestinationType$();
}if (imageType == null ) {
var o=imageTypes.next$();
if (!(Clazz.instanceOf(o, "javax.imageio.ImageTypeSpecifier"))) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non-ImageTypeSpecifier retrieved from imageTypes!"]);
}imageType=o;
} else {
var foundIt=false;
while (imageTypes.hasNext$()){
var type=imageTypes.next$();
if (type.equals$O(imageType)) {
foundIt=true;
break;
}}
if (!foundIt) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Destination type from ImageReadParam does not match!"]);
}}var srcRegion=Clazz.new_($I$(8,1).c$$I$I$I$I,[0, 0, 0, 0]);
var destRegion=Clazz.new_($I$(8,1).c$$I$I$I$I,[0, 0, 0, 0]);
C$.computeRegions$javax_imageio_ImageReadParam$I$I$java_awt_image_BufferedImage$java_awt_Rectangle$java_awt_Rectangle(param, width, height, null, srcRegion, destRegion);
var destWidth=destRegion.x + destRegion.width;
var destHeight=destRegion.y + destRegion.height;
return imageType.createBufferedImage$I$I(destWidth, destHeight);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
