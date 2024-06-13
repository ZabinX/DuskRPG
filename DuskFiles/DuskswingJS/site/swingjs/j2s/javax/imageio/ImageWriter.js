(function(){var P$=Clazz.newPackage("javax.imageio"),p$1={},I$=[[0,'javax.imageio.ImageWriteParam','javax.imageio.IIOImage','javax.imageio.ImageReader','java.util.Locale','java.security.AccessController','Thread','java.util.ResourceBundle']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageWriter", null, null, 'javax.imageio.ImageTranscoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.originatingProvider=null;
this.output=null;
this.availableLocales=null;
this.locale=null;
this.warningListeners=null;
this.warningLocales=null;
this.progressListeners=null;
this.abortFlag=false;
},1);

C$.$fields$=[['Z',['abortFlag'],'O',['originatingProvider','javax.imageio.spi.ImageWriterSpi','output','java.lang.Object','availableLocales','java.util.Locale[]','locale','java.util.Locale','warningListeners','java.util.List','+warningLocales','+progressListeners']]]

Clazz.newMeth(C$, 'c$$javax_imageio_spi_ImageWriterSpi',  function (originatingProvider) {
;C$.$init$.apply(this);
this.originatingProvider=originatingProvider;
}, 1);

Clazz.newMeth(C$, 'getOriginatingProvider$',  function () {
return this.originatingProvider;
});

Clazz.newMeth(C$, 'setOutput$O',  function (output) {
if (output != null ) {
var provider=this.getOriginatingProvider$();
if (provider != null ) {
var classes=provider.getOutputTypes$();
var found=false;
for (var i=0; i < classes.length; i++) {
if (classes[i].isInstance$O(output)) {
found=true;
break;
}}
if (!found) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal output type!"]);
}}}this.output=output;
});

Clazz.newMeth(C$, 'getOutput$',  function () {
return this.output;
});

Clazz.newMeth(C$, 'getAvailableLocales$',  function () {
return (this.availableLocales == null ) ? null : this.availableLocales.clone$();
});

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

Clazz.newMeth(C$, 'getDefaultWriteParam$',  function () {
return Clazz.new_([this.getLocale$()],$I$(1,1).c$$java_util_Locale);
});

Clazz.newMeth(C$, 'getNumThumbnailsSupported$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam$javax_imageio_metadata_IIOMetadata$javax_imageio_metadata_IIOMetadata',  function (imageType, param, streamMetadata, imageMetadata) {
return 0;
});

Clazz.newMeth(C$, 'getPreferredThumbnailSizes$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam$javax_imageio_metadata_IIOMetadata$javax_imageio_metadata_IIOMetadata',  function (imageType, param, streamMetadata, imageMetadata) {
return null;
});

Clazz.newMeth(C$, 'canWriteRasters$',  function () {
return false;
});

Clazz.newMeth(C$, 'write$javax_imageio_IIOImage',  function (image) {
this.write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam(null, image, null);
});

Clazz.newMeth(C$, 'write$java_awt_image_RenderedImage',  function (image) {
this.write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam(null, Clazz.new_($I$(2,1).c$$java_awt_image_RenderedImage$java_util_List$javax_imageio_metadata_IIOMetadata,[image, null, null]), null);
});

Clazz.newMeth(C$, 'unsupported',  function () {
if (this.getOutput$() == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["getOutput() == null!"]);
}throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Unsupported write variant!"]);
}, p$1);

Clazz.newMeth(C$, 'canWriteSequence$',  function () {
return false;
});

Clazz.newMeth(C$, 'prepareWriteSequence$javax_imageio_metadata_IIOMetadata',  function (streamMetadata) {
p$1.unsupported.apply(this, []);
});

Clazz.newMeth(C$, 'writeToSequence$javax_imageio_IIOImage$javax_imageio_ImageWriteParam',  function (image, param) {
p$1.unsupported.apply(this, []);
});

Clazz.newMeth(C$, 'endWriteSequence$',  function () {
p$1.unsupported.apply(this, []);
});

Clazz.newMeth(C$, 'canReplaceStreamMetadata$',  function () {
if (this.getOutput$() == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["getOutput() == null!"]);
}return false;
});

Clazz.newMeth(C$, 'replaceStreamMetadata$javax_imageio_metadata_IIOMetadata',  function (streamMetadata) {
p$1.unsupported.apply(this, []);
});

Clazz.newMeth(C$, 'canReplaceImageMetadata$I',  function (imageIndex) {
if (this.getOutput$() == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["getOutput() == null!"]);
}return false;
});

Clazz.newMeth(C$, 'replaceImageMetadata$I$javax_imageio_metadata_IIOMetadata',  function (imageIndex, imageMetadata) {
p$1.unsupported.apply(this, []);
});

Clazz.newMeth(C$, 'canInsertImage$I',  function (imageIndex) {
if (this.getOutput$() == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["getOutput() == null!"]);
}return false;
});

Clazz.newMeth(C$, 'writeInsert$I$javax_imageio_IIOImage$javax_imageio_ImageWriteParam',  function (imageIndex, image, param) {
p$1.unsupported.apply(this, []);
});

Clazz.newMeth(C$, 'canRemoveImage$I',  function (imageIndex) {
if (this.getOutput$() == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["getOutput() == null!"]);
}return false;
});

Clazz.newMeth(C$, 'removeImage$I',  function (imageIndex) {
p$1.unsupported.apply(this, []);
});

Clazz.newMeth(C$, 'canWriteEmpty$',  function () {
if (this.getOutput$() == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["getOutput() == null!"]);
}return false;
});

Clazz.newMeth(C$, 'prepareWriteEmpty$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageTypeSpecifier$I$I$javax_imageio_metadata_IIOMetadata$java_util_List$javax_imageio_ImageWriteParam',  function (streamMetadata, imageType, width, height, imageMetadata, thumbnails, param) {
p$1.unsupported.apply(this, []);
});

Clazz.newMeth(C$, 'endWriteEmpty$',  function () {
if (this.getOutput$() == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["getOutput() == null!"]);
}throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No call to prepareWriteEmpty!"]);
});

Clazz.newMeth(C$, 'canInsertEmpty$I',  function (imageIndex) {
if (this.getOutput$() == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["getOutput() == null!"]);
}return false;
});

Clazz.newMeth(C$, 'prepareInsertEmpty$I$javax_imageio_ImageTypeSpecifier$I$I$javax_imageio_metadata_IIOMetadata$java_util_List$javax_imageio_ImageWriteParam',  function (imageIndex, imageType, width, height, imageMetadata, thumbnails, param) {
p$1.unsupported.apply(this, []);
});

Clazz.newMeth(C$, 'endInsertEmpty$',  function () {
p$1.unsupported.apply(this, []);
});

Clazz.newMeth(C$, 'canReplacePixels$I',  function (imageIndex) {
if (this.getOutput$() == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["getOutput() == null!"]);
}return false;
});

Clazz.newMeth(C$, 'prepareReplacePixels$I$java_awt_Rectangle',  function (imageIndex, region) {
p$1.unsupported.apply(this, []);
});

Clazz.newMeth(C$, 'replacePixels$java_awt_image_RenderedImage$javax_imageio_ImageWriteParam',  function (image, param) {
p$1.unsupported.apply(this, []);
});

Clazz.newMeth(C$, 'replacePixels$java_awt_image_Raster$javax_imageio_ImageWriteParam',  function (raster, param) {
p$1.unsupported.apply(this, []);
});

Clazz.newMeth(C$, 'endReplacePixels$',  function () {
p$1.unsupported.apply(this, []);
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

Clazz.newMeth(C$, 'addIIOWriteWarningListener$javax_imageio_event_IIOWriteWarningListener',  function (listener) {
if (listener == null ) {
return;
}this.warningListeners=$I$(3).addToList$java_util_List$O(this.warningListeners, listener);
this.warningLocales=$I$(3,"addToList$java_util_List$O",[this.warningLocales, this.getLocale$()]);
});

Clazz.newMeth(C$, 'removeIIOWriteWarningListener$javax_imageio_event_IIOWriteWarningListener',  function (listener) {
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

Clazz.newMeth(C$, 'removeAllIIOWriteWarningListeners$',  function () {
this.warningListeners=null;
this.warningLocales=null;
});

Clazz.newMeth(C$, 'addIIOWriteProgressListener$javax_imageio_event_IIOWriteProgressListener',  function (listener) {
if (listener == null ) {
return;
}this.progressListeners=$I$(3).addToList$java_util_List$O(this.progressListeners, listener);
});

Clazz.newMeth(C$, 'removeIIOWriteProgressListener$javax_imageio_event_IIOWriteProgressListener',  function (listener) {
if (listener == null  || this.progressListeners == null  ) {
return;
}this.progressListeners=$I$(3).removeFromList$java_util_List$O(this.progressListeners, listener);
});

Clazz.newMeth(C$, 'removeAllIIOWriteProgressListeners$',  function () {
this.progressListeners=null;
});

Clazz.newMeth(C$, 'processImageStarted$I',  function (imageIndex) {
if (this.progressListeners == null ) {
return;
}var numListeners=this.progressListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.progressListeners.get$I(i);
listener.imageStarted$javax_imageio_ImageWriter$I(this, imageIndex);
}
});

Clazz.newMeth(C$, 'processImageProgress$F',  function (percentageDone) {
if (this.progressListeners == null ) {
return;
}var numListeners=this.progressListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.progressListeners.get$I(i);
listener.imageProgress$javax_imageio_ImageWriter$F(this, percentageDone);
}
});

Clazz.newMeth(C$, 'processImageComplete$',  function () {
if (this.progressListeners == null ) {
return;
}var numListeners=this.progressListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.progressListeners.get$I(i);
listener.imageComplete$javax_imageio_ImageWriter(this);
}
});

Clazz.newMeth(C$, 'processThumbnailStarted$I$I',  function (imageIndex, thumbnailIndex) {
if (this.progressListeners == null ) {
return;
}var numListeners=this.progressListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.progressListeners.get$I(i);
listener.thumbnailStarted$javax_imageio_ImageWriter$I$I(this, imageIndex, thumbnailIndex);
}
});

Clazz.newMeth(C$, 'processThumbnailProgress$F',  function (percentageDone) {
if (this.progressListeners == null ) {
return;
}var numListeners=this.progressListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.progressListeners.get$I(i);
listener.thumbnailProgress$javax_imageio_ImageWriter$F(this, percentageDone);
}
});

Clazz.newMeth(C$, 'processThumbnailComplete$',  function () {
if (this.progressListeners == null ) {
return;
}var numListeners=this.progressListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.progressListeners.get$I(i);
listener.thumbnailComplete$javax_imageio_ImageWriter(this);
}
});

Clazz.newMeth(C$, 'processWriteAborted$',  function () {
if (this.progressListeners == null ) {
return;
}var numListeners=this.progressListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.progressListeners.get$I(i);
listener.writeAborted$javax_imageio_ImageWriter(this);
}
});

Clazz.newMeth(C$, 'processWarningOccurred$I$S',  function (imageIndex, warning) {
if (this.warningListeners == null ) {
return;
}if (warning == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["warning == null!"]);
}var numListeners=this.warningListeners.size$();
for (var i=0; i < numListeners; i++) {
var listener=this.warningListeners.get$I(i);
listener.warningOccurred$javax_imageio_ImageWriter$I$S(this, imageIndex, warning);
}
});

Clazz.newMeth(C$, 'processWarningOccurred$I$S$S',  function (imageIndex, baseName, keyword) {
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
}var loader=$I$(5,"doPrivileged$java_security_PrivilegedAction",[((P$.ImageWriter$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageWriter$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return $I$(6).currentThread$().getContextClassLoader$();
});
})()
), Clazz.new_(P$.ImageWriter$1.$init$,[this, null]))]);
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
listener.warningOccurred$javax_imageio_ImageWriter$I$S(this, imageIndex, warning);
}
});

Clazz.newMeth(C$, 'reset$',  function () {
this.setOutput$O(null);
this.setLocale$java_util_Locale(null);
this.removeAllIIOWriteWarningListeners$();
this.removeAllIIOWriteProgressListeners$();
this.clearAbortRequest$();
});

Clazz.newMeth(C$, 'dispose$',  function () {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
