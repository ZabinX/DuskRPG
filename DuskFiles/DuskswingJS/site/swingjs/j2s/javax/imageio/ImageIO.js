(function(){var P$=Clazz.newPackage("javax.imageio"),I$=[[0,'javax.imageio.ImageIO','javax.imageio.spi.ImageReaderSpi','java.util.Arrays','javax.imageio.spi.ImageWriterSpi',['javax.imageio.ImageIO','.SpiInfo'],'swingjs.JSUtil','java.io.FileOutputStream','java.util.HashSet','swingjs.image.PngImageWriter','swingjs.image.JpgImageWriter','swingjs.image.GifImageWriter','javax.imageio.spi.IIORegistry','sun.awt.AppContext',['javax.imageio.ImageIO','.CacheInfo'],'java.io.File','java.io.FilePermission','javax.imageio.spi.ImageInputStreamSpi','javax.imageio.spi.ImageOutputStreamSpi','java.util.Collections',['javax.imageio.ImageIO','.CanDecodeInputFilter'],['javax.imageio.ImageIO','.ImageReaderIterator'],['javax.imageio.ImageIO','.ContainsFilter'],['javax.imageio.ImageIO','.ImageWriterIterator'],['javax.imageio.ImageIO','.CanEncodeImageAndFormatFilter'],['javax.imageio.ImageIO','.TranscoderFilter'],'javax.imageio.spi.ImageTranscoderSpi',['javax.imageio.ImageIO','.ImageTranscoderIterator'],'java.awt.Toolkit','java.io.BufferedInputStream','javax.imageio.ImageTypeSpecifier']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ImageIO", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['CacheInfo',8],['SpiInfo',1034],['ImageReaderIterator',8],['CanDecodeInputFilter',8],['CanEncodeImageAndFormatFilter',8],['ContainsFilter',8],['ImageWriterIterator',8],['ImageTranscoderIterator',8],['TranscoderFilter',8]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['useSPI'],'I',['PNG','JPG','GIF','BMP'],'O',['readerTypes','String[]','readerMap','int[]','readerFormatNames','String[]','+readerSuffixes','theRegistry','javax.imageio.spi.IIORegistry','readerFormatNamesMethod','java.lang.reflect.Method','+readerFileSuffixesMethod','+readerMIMETypesMethod','+writerFormatNamesMethod','+writerFileSuffixesMethod','+writerMIMETypesMethod']]]

Clazz.newMeth(C$, 'getReaderFormatNames$',  function () {
return (C$.useSPI ? C$.getReaderWriterInfo$Class$javax_imageio_ImageIO_SpiInfo(Clazz.getClass($I$(2)), $I$(5).FORMAT_NAMES) : C$.readerFormatNames);
}, 1);

Clazz.newMeth(C$, 'getReaderMIMETypes$',  function () {
return C$.useSPI ? C$.getReaderWriterInfo$Class$javax_imageio_ImageIO_SpiInfo(Clazz.getClass($I$(2)), $I$(5).MIME_TYPES) : C$.readerTypes;
}, 1);

Clazz.newMeth(C$, 'getReaderFileSuffixes$',  function () {
return C$.useSPI ? C$.getReaderWriterInfo$Class$javax_imageio_ImageIO_SpiInfo(Clazz.getClass($I$(2)), $I$(5).FILE_SUFFIXES) : C$.readerSuffixes;
}, 1);

Clazz.newMeth(C$, 'readJS$java_net_URL',  function (input) {
return C$.read$java_io_InputStream(input.openStream$());
}, 1);

Clazz.newMeth(C$, 'readJS$javax_imageio_stream_ImageInputStream',  function (stream) {
$I$(6,"notImplemented$S",["ImageIO.read(ImageInputStream"]);
return null;
}, 1);

Clazz.newMeth(C$, 'writeJS$java_awt_image_RenderedImage$S$javax_imageio_stream_ImageOutputStream',  function (im, formatName, output) {
var writer=C$.getWriter$S(formatName);
return (writer != null  && (writer).write$java_awt_image_RenderedImage$S$java_io_OutputStream(im, null, output) );
}, 1);

Clazz.newMeth(C$, 'writeJS$java_awt_image_RenderedImage$S$java_io_File',  function (im, formatName, output) {
var writer=C$.getWriter$S(formatName);
return (writer != null  && (writer).write$java_awt_image_RenderedImage$S$java_io_OutputStream(im, output.getPath$(), Clazz.new_($I$(7,1).c$$java_io_File,[output])) );
}, 1);

Clazz.newMeth(C$, 'writeJS$java_awt_image_RenderedImage$S$java_io_OutputStream',  function (im, formatName, output) {
var writer=C$.getWriter$S(formatName);
return (writer != null  && (writer).write$java_awt_image_RenderedImage$S$java_io_OutputStream(im, null, output) );
}, 1);

Clazz.newMeth(C$, 'getWriter$S',  function (formatName) {
try {
return (C$.useSPI ? C$.getImageWritersByFormatName$S(formatName) : C$.getImageWritersByFormatNameJS$S(formatName)).next$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getImageWritersByFormatNameJS$S',  function (formatName) {
if (formatName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["formatName == null!"]);
}var set=Clazz.new_($I$(8,1));
switch (formatName.toLowerCase$()) {
case "png":
set.add$O(Clazz.new_($I$(9,1)));
break;
case "jpg":
case "jpeg":
set.add$O(Clazz.new_($I$(10,1)));
break;
case "gif":
set.add$O(Clazz.new_($I$(11,1)));
break;
default:
break;
}
return set.iterator$();
}, 1);

Clazz.newMeth(C$, 'getRegistry$',  function () {
return (C$.theRegistry == null  ? C$.theRegistry=$I$(12).getDefaultInstance$() : C$.theRegistry);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'scanForPlugins$',  function () {
C$.getRegistry$().registerApplicationClasspathSpis$();
}, 1);

Clazz.newMeth(C$, 'getCacheInfo$',  function () {
var context=$I$(13).getAppContext$();
var info=context.get$O(Clazz.getClass($I$(14)));
if (info == null ) {
info=Clazz.new_($I$(14,1));
context.put$O$O(Clazz.getClass($I$(14)), info);
}return info;
}, 1);

Clazz.newMeth(C$, 'getTempDir$',  function () {
return System.getProperty$S("java.io.tmpdir");
}, 1);

Clazz.newMeth(C$, 'hasCachePermission$',  function () {
var hasPermission=C$.getCacheInfo$().getHasPermission$();
if (hasPermission != null ) {
return hasPermission.booleanValue$();
} else {
try {
var security=System.getSecurityManager$();
if (security != null ) {
var cachedir=C$.getCacheDirectory$();
var cachepath;
if (cachedir != null ) {
cachepath=cachedir.getPath$();
} else {
cachepath=C$.getTempDir$();
if (cachepath == null  || cachepath.isEmpty$() ) {
C$.getCacheInfo$().setHasPermission$Boolean(Boolean.FALSE);
return false;
}}var filepath=cachepath;
if (!filepath.endsWith$S($I$(15).separator)) {
filepath+=$I$(15).separator;
}filepath+="*";
security.checkPermission$java_security_Permission(Clazz.new_($I$(16,1).c$$S$S,[filepath, "read, write, delete"]));
}} catch (e) {
if (Clazz.exceptionOf(e,"SecurityException")){
C$.getCacheInfo$().setHasPermission$Boolean(Boolean.FALSE);
return false;
} else {
throw e;
}
}
C$.getCacheInfo$().setHasPermission$Boolean(Boolean.TRUE);
return true;
}}, 1);

Clazz.newMeth(C$, 'setUseCache$Z',  function (useCache) {
C$.getCacheInfo$().setUseCache$Z(useCache);
}, 1);

Clazz.newMeth(C$, 'getUseCache$',  function () {
return C$.getCacheInfo$().getUseCache$();
}, 1);

Clazz.newMeth(C$, 'setCacheDirectory$java_io_File',  function (cacheDirectory) {
if ((cacheDirectory != null ) && !(cacheDirectory.isDirectory$()) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a directory!"]);
}C$.getCacheInfo$().setCacheDirectory$java_io_File(cacheDirectory);
C$.getCacheInfo$().setHasPermission$Boolean(null);
}, 1);

Clazz.newMeth(C$, 'getCacheDirectory$',  function () {
return C$.getCacheInfo$().getCacheDirectory$();
}, 1);

Clazz.newMeth(C$, 'createImageInputStream$O',  function (input) {
if (input == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["input == null!"]);
}var iter;
try {
iter=C$.getRegistry$().getServiceProviders$Class$Z(Clazz.getClass($I$(17)), true);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
return null;
} else {
throw e;
}
}
var usecache=C$.getUseCache$() && C$.hasCachePermission$() ;
while (iter.hasNext$()){
var spi=iter.next$();
if (spi.getInputClass$().isInstance$O(input)) {
try {
return spi.createInputStreamInstance$O$Z$java_io_File(input, usecache, C$.getCacheDirectory$());
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["Can\'t create cache file!", e]);
} else {
throw e;
}
}
}}
return null;
}, 1);

Clazz.newMeth(C$, 'createImageOutputStream$O',  function (output) {
if (output == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["output == null!"]);
}var iter;
try {
iter=C$.getRegistry$().getServiceProviders$Class$Z(Clazz.getClass($I$(18)), true);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
return null;
} else {
throw e;
}
}
var usecache=C$.getUseCache$() && C$.hasCachePermission$() ;
while (iter.hasNext$()){
var spi=iter.next$();
if (spi.getOutputClass$().isInstance$O(output)) {
try {
return spi.createOutputStreamInstance$O$Z$java_io_File(output, usecache, C$.getCacheDirectory$());
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["Can\'t create cache file!", e]);
} else {
throw e;
}
}
}}
return null;
}, 1);

Clazz.newMeth(C$, 'getReaderWriterInfo$Class$javax_imageio_ImageIO_SpiInfo',  function (spiClass, spiInfo) {
var iter;
try {
iter=C$.getRegistry$().getServiceProviders$Class$Z(spiClass, true);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
return Clazz.array(String, [0]);
} else {
throw e;
}
}
var s=Clazz.new_($I$(8,1));
while (iter.hasNext$()){
var spi=iter.next$();
$I$(19,"addAll$java_util_Collection$OA",[s, spiInfo.info$javax_imageio_spi_ImageReaderWriterSpi(spi)]);
}
return s.toArray$OA(Clazz.array(String, [s.size$()]));
}, 1);

Clazz.newMeth(C$, 'getImageReaders$O',  function (input) {
if (input == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["input == null!"]);
}var iter;
try {
iter=C$.getRegistry$().getServiceProviders$Class$javax_imageio_spi_ServiceRegistry_Filter$Z(Clazz.getClass($I$(2)), Clazz.new_($I$(20,1).c$$O,[input]), true);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
return $I$(19).emptyIterator$();
} else {
throw e;
}
}
return Clazz.new_($I$(21,1).c$$java_util_Iterator,[iter]);
}, 1);

Clazz.newMeth(C$, 'getImageReadersByFormatName$S',  function (formatName) {
if (formatName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["formatName == null!"]);
}var iter;
try {
iter=C$.getRegistry$().getServiceProviders$Class$javax_imageio_spi_ServiceRegistry_Filter$Z(Clazz.getClass($I$(2)), Clazz.new_($I$(22,1).c$$java_lang_reflect_Method$S,[C$.readerFormatNamesMethod, formatName]), true);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
return $I$(19).emptyIterator$();
} else {
throw e;
}
}
return Clazz.new_($I$(21,1).c$$java_util_Iterator,[iter]);
}, 1);

Clazz.newMeth(C$, 'getImageReadersBySuffix$S',  function (fileSuffix) {
if (fileSuffix == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["fileSuffix == null!"]);
}var iter;
try {
iter=C$.getRegistry$().getServiceProviders$Class$javax_imageio_spi_ServiceRegistry_Filter$Z(Clazz.getClass($I$(2)), Clazz.new_($I$(22,1).c$$java_lang_reflect_Method$S,[C$.readerFileSuffixesMethod, fileSuffix]), true);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
return $I$(19).emptyIterator$();
} else {
throw e;
}
}
return Clazz.new_($I$(21,1).c$$java_util_Iterator,[iter]);
}, 1);

Clazz.newMeth(C$, 'getImageReadersByMIMEType$S',  function (MIMEType) {
if (MIMEType == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["MIMEType == null!"]);
}var iter;
try {
iter=C$.getRegistry$().getServiceProviders$Class$javax_imageio_spi_ServiceRegistry_Filter$Z(Clazz.getClass($I$(2)), Clazz.new_($I$(22,1).c$$java_lang_reflect_Method$S,[C$.readerMIMETypesMethod, MIMEType]), true);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
return $I$(19).emptyIterator$();
} else {
throw e;
}
}
return Clazz.new_($I$(21,1).c$$java_util_Iterator,[iter]);
}, 1);

Clazz.newMeth(C$, 'getWriterFormatNames$',  function () {
return C$.getReaderWriterInfo$Class$javax_imageio_ImageIO_SpiInfo(Clazz.getClass($I$(4)), $I$(5).FORMAT_NAMES);
}, 1);

Clazz.newMeth(C$, 'getWriterMIMETypes$',  function () {
return C$.getReaderWriterInfo$Class$javax_imageio_ImageIO_SpiInfo(Clazz.getClass($I$(4)), $I$(5).MIME_TYPES);
}, 1);

Clazz.newMeth(C$, 'getWriterFileSuffixes$',  function () {
return C$.getReaderWriterInfo$Class$javax_imageio_ImageIO_SpiInfo(Clazz.getClass($I$(4)), $I$(5).FILE_SUFFIXES);
}, 1);

Clazz.newMeth(C$, 'contains$SA$S',  function (names, name) {
for (var i=0; i < names.length; i++) {
if (name.equalsIgnoreCase$S(names[i])) {
return true;
}}
return false;
}, 1);

Clazz.newMeth(C$, 'getImageWritersByFormatName$S',  function (formatName) {
if (formatName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["formatName == null!"]);
}var iter;
try {
iter=C$.getRegistry$().getServiceProviders$Class$javax_imageio_spi_ServiceRegistry_Filter$Z(Clazz.getClass($I$(4)), Clazz.new_($I$(22,1).c$$java_lang_reflect_Method$S,[C$.writerFormatNamesMethod, formatName]), true);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
return $I$(19).emptyIterator$();
} else {
throw e;
}
}
return Clazz.new_($I$(23,1).c$$java_util_Iterator,[iter]);
}, 1);

Clazz.newMeth(C$, 'getImageWritersBySuffix$S',  function (fileSuffix) {
if (fileSuffix == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["fileSuffix == null!"]);
}var iter;
try {
iter=C$.getRegistry$().getServiceProviders$Class$javax_imageio_spi_ServiceRegistry_Filter$Z(Clazz.getClass($I$(4)), Clazz.new_($I$(22,1).c$$java_lang_reflect_Method$S,[C$.writerFileSuffixesMethod, fileSuffix]), true);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
return $I$(19).emptyIterator$();
} else {
throw e;
}
}
return Clazz.new_($I$(23,1).c$$java_util_Iterator,[iter]);
}, 1);

Clazz.newMeth(C$, 'getImageWritersByMIMEType$S',  function (MIMEType) {
if (MIMEType == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["MIMEType == null!"]);
}var iter;
try {
iter=C$.getRegistry$().getServiceProviders$Class$javax_imageio_spi_ServiceRegistry_Filter$Z(Clazz.getClass($I$(4)), Clazz.new_($I$(22,1).c$$java_lang_reflect_Method$S,[C$.writerMIMETypesMethod, MIMEType]), true);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
return $I$(19).emptyIterator$();
} else {
throw e;
}
}
return Clazz.new_($I$(23,1).c$$java_util_Iterator,[iter]);
}, 1);

Clazz.newMeth(C$, 'getImageWriter$javax_imageio_ImageReader',  function (reader) {
if (reader == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["reader == null!"]);
}var readerSpi=reader.getOriginatingProvider$();
if (readerSpi == null ) {
var readerSpiIter;
try {
readerSpiIter=C$.getRegistry$().getServiceProviders$Class$Z(Clazz.getClass($I$(2)), false);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
return null;
} else {
throw e;
}
}
while (readerSpiIter.hasNext$()){
var temp=readerSpiIter.next$();
if (temp.isOwnReader$javax_imageio_ImageReader(reader)) {
readerSpi=temp;
break;
}}
if (readerSpi == null ) {
return null;
}}var writerNames=readerSpi.getImageWriterSpiNames$();
if (writerNames == null ) {
return null;
}var writerSpiClass=null;
try {
writerSpiClass=Clazz.forName(writerNames[0], true, ClassLoader.getSystemClassLoader$());
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
return null;
} else {
throw e;
}
}
var writerSpi=C$.getRegistry$().getServiceProviderByClass$Class(writerSpiClass);
if (writerSpi == null ) {
return null;
}try {
return writerSpi.createWriterInstance$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
C$.getRegistry$().deregisterServiceProvider$O$Class(writerSpi, Clazz.getClass($I$(4)));
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getImageReader$javax_imageio_ImageWriter',  function (writer) {
if (writer == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["writer == null!"]);
}var writerSpi=writer.getOriginatingProvider$();
if (writerSpi == null ) {
var writerSpiIter;
try {
writerSpiIter=C$.getRegistry$().getServiceProviders$Class$Z(Clazz.getClass($I$(4)), false);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
return null;
} else {
throw e;
}
}
while (writerSpiIter.hasNext$()){
var temp=writerSpiIter.next$();
if (temp.isOwnWriter$javax_imageio_ImageWriter(writer)) {
writerSpi=temp;
break;
}}
if (writerSpi == null ) {
return null;
}}var readerNames=writerSpi.getImageReaderSpiNames$();
if (readerNames == null ) {
return null;
}var readerSpiClass=null;
try {
readerSpiClass=Clazz.forName(readerNames[0], true, ClassLoader.getSystemClassLoader$());
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
return null;
} else {
throw e;
}
}
var readerSpi=C$.getRegistry$().getServiceProviderByClass$Class(readerSpiClass);
if (readerSpi == null ) {
return null;
}try {
return readerSpi.createReaderInstance$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
C$.getRegistry$().deregisterServiceProvider$O$Class(readerSpi, Clazz.getClass($I$(2)));
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getImageWriters$javax_imageio_ImageTypeSpecifier$S',  function (type, formatName) {
if (type == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["type == null!"]);
}if (formatName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["formatName == null!"]);
}var iter;
try {
iter=C$.getRegistry$().getServiceProviders$Class$javax_imageio_spi_ServiceRegistry_Filter$Z(Clazz.getClass($I$(4)), Clazz.new_($I$(24,1).c$$javax_imageio_ImageTypeSpecifier$S,[type, formatName]), true);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
return $I$(19).emptyIterator$();
} else {
throw e;
}
}
return Clazz.new_($I$(23,1).c$$java_util_Iterator,[iter]);
}, 1);

Clazz.newMeth(C$, 'getImageTranscoders$javax_imageio_ImageReader$javax_imageio_ImageWriter',  function (reader, writer) {
if (reader == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["reader == null!"]);
}if (writer == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["writer == null!"]);
}var readerSpi=reader.getOriginatingProvider$();
var writerSpi=writer.getOriginatingProvider$();
var filter=Clazz.new_($I$(25,1).c$$javax_imageio_spi_ImageReaderSpi$javax_imageio_spi_ImageWriterSpi,[readerSpi, writerSpi]);
var iter;
try {
iter=C$.getRegistry$().getServiceProviders$Class$javax_imageio_spi_ServiceRegistry_Filter$Z(Clazz.getClass($I$(26)), filter, true);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
return $I$(19).emptyIterator$();
} else {
throw e;
}
}
return Clazz.new_($I$(27,1).c$$java_util_Iterator,[iter]);
}, 1);

Clazz.newMeth(C$, 'read$java_io_File',  function (input) {
if (input == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["input == null!"]);
}if (!input.canRead$()) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Can\'t read input file!"]);
}var stream=C$.createImageInputStream$O(input);
if (stream == null ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Can\'t create an ImageInputStream!"]);
}var bi=C$.read$javax_imageio_stream_ImageInputStream(stream);
if (bi == null ) {
stream.close$();
}return bi;
}, 1);

Clazz.newMeth(C$, 'read$java_io_InputStream',  function (input) {
if (input == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["input == null!"]);
}if (!C$.useSPI) return C$.readJS$java_io_InputStream(input);
var stream=C$.createImageInputStream$O(input);
var bi=C$.read$javax_imageio_stream_ImageInputStream(stream);
if (bi == null ) {
stream.close$();
}return bi;
}, 1);

Clazz.newMeth(C$, 'readJS$java_io_InputStream',  function (input) {
return $I$(28).getDefaultToolkit$().createImage$BA($I$(6,"getSignedStreamBytes$java_io_BufferedInputStream",[Clazz.instanceOf(input, "java.io.BufferedInputStream") ? input : Clazz.new_($I$(29,1).c$$java_io_InputStream,[input])]));
}, 1);

Clazz.newMeth(C$, 'read$java_net_URL',  function (input) {
if (input == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["input == null!"]);
}if (!C$.useSPI) return C$.readJS$java_net_URL(input);
var istream=null;
try {
istream=input.openStream$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["Can\'t get input stream from URL!", e]);
} else {
throw e;
}
}
var stream=C$.createImageInputStream$O(istream);
var bi;
try {
bi=C$.read$javax_imageio_stream_ImageInputStream(stream);
if (bi == null ) {
stream.close$();
}} finally {
istream.close$();
}
return bi;
}, 1);

Clazz.newMeth(C$, 'read$javax_imageio_stream_ImageInputStream',  function (stream) {
if (stream == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["stream == null!"]);
}var iter=C$.getImageReaders$O(stream);
if (!iter.hasNext$()) {
return null;
}var reader=iter.next$();
var param=reader.getDefaultReadParam$();
reader.setInput$O$Z$Z(stream, true, true);
var bi;
try {
bi=reader.read$I$javax_imageio_ImageReadParam(0, param);
} finally {
reader.dispose$();
stream.close$();
}
return bi;
}, 1);

Clazz.newMeth(C$, 'write$java_awt_image_RenderedImage$S$javax_imageio_stream_ImageOutputStream',  function (im, formatName, output) {
if (im == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["im == null!"]);
}if (formatName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["formatName == null!"]);
}if (output == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["output == null!"]);
}return C$.useSPI ? C$.doWrite$java_awt_image_RenderedImage$javax_imageio_ImageWriter$javax_imageio_stream_ImageOutputStream(im, C$.getWriter$java_awt_image_RenderedImage$S(im, formatName), output) : C$.writeJS$java_awt_image_RenderedImage$S$javax_imageio_stream_ImageOutputStream(im, formatName, output);
}, 1);

Clazz.newMeth(C$, 'write$java_awt_image_RenderedImage$S$java_io_File',  function (im, formatName, output) {
if (output == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["output == null!"]);
}if (!C$.useSPI) return C$.writeJS$java_awt_image_RenderedImage$S$java_io_File(im, formatName, output);
var stream=null;
var writer=C$.getWriter$java_awt_image_RenderedImage$S(im, formatName);
if (writer == null ) {
return false;
}try {
output.delete$();
stream=C$.createImageOutputStream$O(output);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["Can\'t create output stream!", e]);
} else {
throw e;
}
}
try {
return C$.doWrite$java_awt_image_RenderedImage$javax_imageio_ImageWriter$javax_imageio_stream_ImageOutputStream(im, writer, stream);
} finally {
stream.close$();
}
}, 1);

Clazz.newMeth(C$, 'write$java_awt_image_RenderedImage$S$java_io_OutputStream',  function (im, formatName, output) {
if (output == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["output == null!"]);
}if (!C$.useSPI) return C$.writeJS$java_awt_image_RenderedImage$S$java_io_OutputStream(im, formatName, output);
var stream=null;
try {
stream=C$.createImageOutputStream$O(output);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["Can\'t create output stream!", e]);
} else {
throw e;
}
}
try {
return C$.doWrite$java_awt_image_RenderedImage$javax_imageio_ImageWriter$javax_imageio_stream_ImageOutputStream(im, C$.getWriter$java_awt_image_RenderedImage$S(im, formatName), stream);
} finally {
stream.close$();
}
}, 1);

Clazz.newMeth(C$, 'getWriter$java_awt_image_RenderedImage$S',  function (im, formatName) {
var type=$I$(30).createFromRenderedImage$java_awt_image_RenderedImage(im);
var iter=C$.getImageWriters$javax_imageio_ImageTypeSpecifier$S(type, formatName);
if (iter.hasNext$()) {
return iter.next$();
} else {
return null;
}}, 1);

Clazz.newMeth(C$, 'doWrite$java_awt_image_RenderedImage$javax_imageio_ImageWriter$javax_imageio_stream_ImageOutputStream',  function (im, writer, output) {
if (writer == null ) {
return false;
}writer.setOutput$O(output);
try {
writer.write$java_awt_image_RenderedImage(im);
} finally {
writer.dispose$();
output.flush$();
}
return true;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.PNG=0;
C$.JPG=1;
C$.GIF=2;
C$.BMP=3;
C$.readerTypes=Clazz.array(String, -1, ["image/png", "image/jpeg", "image/x-png", "image/vnd.wap.wbmp", "image/gif", "image/bmp"]);
C$.readerMap=Clazz.array(Integer.TYPE, -1, [C$.PNG, C$.JPG, C$.PNG, C$.BMP, C$.GIF, C$.BMP]);
C$.readerFormatNames=Clazz.array(String, -1, ["jpg", "BMP", "bmp", "JPG", "wbmp", "jpeg", "png", "PNG", "JPEG", "WBMP", "GIF", "gif"]);
C$.readerSuffixes=Clazz.array(String, -1, ["jpg", "bmp", "jpeg", "wbmp", "png", "gif"]);
{
try {
if (C$.useSPI) {
C$.readerFormatNamesMethod=Clazz.getClass($I$(2)).getMethod$S$ClassA("getFormatNames", Clazz.array(Class, -1, []));
C$.readerFileSuffixesMethod=Clazz.getClass($I$(2)).getMethod$S$ClassA("getFileSuffixes", Clazz.array(Class, -1, []));
C$.readerMIMETypesMethod=Clazz.getClass($I$(2)).getMethod$S$ClassA("getMIMETypes", Clazz.array(Class, -1, []));
C$.writerFormatNamesMethod=Clazz.getClass($I$(4)).getMethod$S$ClassA("getFormatNames", Clazz.array(Class, -1, []));
C$.writerFileSuffixesMethod=Clazz.getClass($I$(4)).getMethod$S$ClassA("getFileSuffixes", Clazz.array(Class, -1, []));
C$.writerMIMETypesMethod=Clazz.getClass($I$(4)).getMethod$S$ClassA("getMIMETypes", Clazz.array(Class, -1, []));
}} catch (e) {
if (Clazz.exceptionOf(e,"NoSuchMethodException")){
e.printStackTrace$();
} else {
throw e;
}
}
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageIO, "CacheInfo", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.useCache=$I$(1).useSPI;
this.cacheDirectory=null;
this.hasPermission=Boolean.TRUE;
},1);

C$.$fields$=[['Z',['useCache'],'O',['cacheDirectory','java.io.File','hasPermission','Boolean']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getUseCache$',  function () {
return this.useCache;
});

Clazz.newMeth(C$, 'setUseCache$Z',  function (useCache) {
this.useCache=useCache;
});

Clazz.newMeth(C$, 'getCacheDirectory$',  function () {
return this.cacheDirectory;
});

Clazz.newMeth(C$, 'setCacheDirectory$java_io_File',  function (cacheDirectory) {
this.cacheDirectory=cacheDirectory;
});

Clazz.newMeth(C$, 'getHasPermission$',  function () {
return this.hasPermission;
});

Clazz.newMeth(C$, 'setHasPermission$Boolean',  function (hasPermission) {
this.hasPermission=hasPermission;
});
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.ImageIO, "SpiInfo", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
(P$.ImageIO$SpiInfo$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageIO$SpiInfo$1", null, Clazz.load(['javax.imageio.ImageIO','.SpiInfo']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'info$javax_imageio_spi_ImageReaderWriterSpi',  function (spi) {
return spi.getFormatNames$();
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "FORMAT_NAMES", 0, [], javax.imageio.ImageIO$SpiInfo$1);
(P$.ImageIO$SpiInfo$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageIO$SpiInfo$2", null, Clazz.load(['javax.imageio.ImageIO','.SpiInfo']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'info$javax_imageio_spi_ImageReaderWriterSpi',  function (spi) {
return spi.getMIMETypes$();
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "MIME_TYPES", 1, [], javax.imageio.ImageIO$SpiInfo$2);
(P$.ImageIO$SpiInfo$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ImageIO$SpiInfo$3", null, Clazz.load(['javax.imageio.ImageIO','.SpiInfo']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'info$javax_imageio_spi_ImageReaderWriterSpi',  function (spi) {
return spi.getFileSuffixes$();
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "FILE_SUFFIXES", 2, [], javax.imageio.ImageIO$SpiInfo$3);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageIO, "ImageReaderIterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['iter','java.util.Iterator']]]

Clazz.newMeth(C$, 'c$$java_util_Iterator',  function (iter) {
;C$.$init$.apply(this);
this.iter=iter;
}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.iter.hasNext$();
});

Clazz.newMeth(C$, 'next$',  function () {
var spi=null;
try {
spi=this.iter.next$();
return spi.createReaderInstance$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
$I$(1).getRegistry$().deregisterServiceProvider$O$Class(spi, Clazz.getClass($I$(2)));
} else {
throw e;
}
}
return null;
});

Clazz.newMeth(C$, 'remove$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageIO, "CanDecodeInputFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['javax.imageio.spi.ServiceRegistry','javax.imageio.spi.ServiceRegistry.Filter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['input','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$O',  function (input) {
;C$.$init$.apply(this);
this.input=input;
}, 1);

Clazz.newMeth(C$, 'filter$O',  function (elt) {
try {
var spi=elt;
var stream=null;
if (Clazz.instanceOf(this.input, "javax.imageio.stream.ImageInputStream")) {
stream=this.input;
}var canDecode=false;
if (stream != null ) {
stream.mark$();
}canDecode=spi.canDecodeInput$O(this.input);
if (stream != null ) {
stream.reset$();
}return canDecode;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageIO, "CanEncodeImageAndFormatFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['javax.imageio.spi.ServiceRegistry','javax.imageio.spi.ServiceRegistry.Filter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['formatName'],'O',['type','javax.imageio.ImageTypeSpecifier']]]

Clazz.newMeth(C$, 'c$$javax_imageio_ImageTypeSpecifier$S',  function (type, formatName) {
;C$.$init$.apply(this);
this.type=type;
this.formatName=formatName;
}, 1);

Clazz.newMeth(C$, 'filter$O',  function (elt) {
var spi=elt;
return $I$(3,"asList$OA",[spi.getFormatNames$()]).contains$O(this.formatName) && spi.canEncodeImage$javax_imageio_ImageTypeSpecifier(this.type) ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageIO, "ContainsFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['javax.imageio.spi.ServiceRegistry','javax.imageio.spi.ServiceRegistry.Filter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name'],'O',['method','java.lang.reflect.Method']]]

Clazz.newMeth(C$, 'c$$java_lang_reflect_Method$S',  function (method, name) {
;C$.$init$.apply(this);
this.method=method;
this.name=name;
}, 1);

Clazz.newMeth(C$, 'filter$O',  function (elt) {
try {
return $I$(1,"contains$SA$S",[this.method.invoke$O$OA(elt, Clazz.array(java.lang.Object, -1, [])), this.name]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageIO, "ImageWriterIterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['iter','java.util.Iterator']]]

Clazz.newMeth(C$, 'c$$java_util_Iterator',  function (iter) {
;C$.$init$.apply(this);
this.iter=iter;
}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.iter.hasNext$();
});

Clazz.newMeth(C$, 'next$',  function () {
var spi=null;
try {
spi=this.iter.next$();
return spi.createWriterInstance$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
$I$(1).getRegistry$().deregisterServiceProvider$O$Class(spi, Clazz.getClass($I$(4)));
} else {
throw e;
}
}
return null;
});

Clazz.newMeth(C$, 'remove$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageIO, "ImageTranscoderIterator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['iter','java.util.Iterator']]]

Clazz.newMeth(C$, 'c$$java_util_Iterator',  function (iter) {
;C$.$init$.apply(this);
this.iter=iter;
}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.iter.hasNext$();
});

Clazz.newMeth(C$, 'next$',  function () {
var spi=null;
spi=this.iter.next$();
return spi.createTranscoderInstance$();
});

Clazz.newMeth(C$, 'remove$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageIO, "TranscoderFilter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['javax.imageio.spi.ServiceRegistry','javax.imageio.spi.ServiceRegistry.Filter']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['readerSpiName','writerSpiName']]]

Clazz.newMeth(C$, 'c$$javax_imageio_spi_ImageReaderSpi$javax_imageio_spi_ImageWriterSpi',  function (readerSpi, writerSpi) {
;C$.$init$.apply(this);
this.readerSpiName=readerSpi.getClass$().getName$();
this.writerSpiName=writerSpi.getClass$().getName$();
}, 1);

Clazz.newMeth(C$, 'filter$O',  function (elt) {
var spi=elt;
var readerName=spi.getReaderServiceProviderName$();
var writerName=spi.getWriterServiceProviderName$();
return (readerName.equals$O(this.readerSpiName) && writerName.equals$O(this.writerSpiName) );
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
