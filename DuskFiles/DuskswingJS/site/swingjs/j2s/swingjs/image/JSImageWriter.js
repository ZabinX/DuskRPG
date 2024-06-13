(function(){var P$=Clazz.newPackage("swingjs.image"),p$1={},I$=[[0,'java.util.Hashtable','javajs.util.OC','javax.imageio.IIOImage','swingjs.JSUtil','swingjs.JSToolkit','javajs.util.PT','swingjs.api.Interface']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSImageWriter", null, 'javax.imageio.ImageWriter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.params=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['params','java.util.Map','$locale','java.util.Locale']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$javax_imageio_spi_ImageWriterSpi.apply(this,[null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setImage$java_awt_image_RenderedImage',  function (im) {
this.params.put$O$O("image", im);
});

Clazz.newMeth(C$, 'setMetaData$O',  function (streamMetadata) {
});

Clazz.newMeth(C$, 'write$java_awt_image_RenderedImage$S$java_io_OutputStream',  function (im, fileName, out) {
try {
var outputChannel=null;
if (Clazz.instanceOf(out, "javajs.util.OC")) {
outputChannel=out;
fileName=null;
}if (outputChannel == null ) {
outputChannel=Clazz.new_($I$(2,1)).setParams$javajs_api_BytePoster$S$Z$java_io_OutputStream(null, fileName, false, out);
}this.params.put$O$O("outputChannel", outputChannel);
this.write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam(null, Clazz.new_($I$(3,1).c$$java_awt_image_RenderedImage$java_util_List$javax_imageio_metadata_IIOMetadata,[im, null, null]), null);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return false;
} else {
throw e;
}
}
return true;
});

Clazz.newMeth(C$, 'write$javax_imageio_IIOImage',  function (image) {
this.params.put$O$O("image", image.getRenderedImage$());
try {
this.writeImage$java_util_Map(this.params);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
if (Clazz.instanceOf(e, "java.io.IOException")) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[(e).getMessage$()]);
e.printStackTrace$();
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'writeToFileOrStream$S$java_io_OutputStream',  function (fileName, out) {
var outputChannel=this.params.get$O("outputChannel");
if (out != null ) {
outputChannel=Clazz.new_($I$(2,1));
outputChannel.setParams$javajs_api_BytePoster$S$Z$java_io_OutputStream(null, fileName, false, out);
this.params.put$O$O("outputChannel", outputChannel);
}if (outputChannel != null ) fileName=outputChannel.getFileName$();
try {
var o=this.writeImage$java_util_Map(this.params);
if (Clazz.instanceOf(o, "java.lang.String")) {
System.out.println$S("ImageWriter: " + o);
return false;
}if (out == null  && o != null  ) $I$(4,"saveFile$S$O$S$S",[fileName, o, this.params.get$O("mimeType"), null]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return false;
} else {
throw e;
}
}
return true;
});

Clazz.newMeth(C$, 'writeImage$java_util_Map',  function (params) {
var image=params.get$O("image");
if (image == null  && !params.containsKey$O("rgbbuf") ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["image == null!"]);
var bytes=null;
var errMsg=null;
var type=params.get$O("type");
if (type == null ) type="png";
type=type.toUpperCase$();
var fileName=params.get$O("fileName");
var software=params.get$O("software");
if (software == null ) {
software="SwingJS";
}var comment=params.get$O("comment");
if (comment == null ) params.put$O$O("comment", software);
var out=params.get$O("outputChannel");
var asBytes=(out == null  && fileName == null  );
var closeChannel=(out == null  && fileName != null  );
var isOK=false;
try {
if (out == null  && (out=p$1.getOutputChannel$S.apply(this, [fileName])) == null  ) return "ERROR: canceled";
fileName=out.getFileName$();
params.put$O$O("date", $I$(5).getDateFormat$S("8601"));
if (type.startsWith$S("JP")) {
type=$I$(6).rep$S$S$S(type, "E", "");
if (type.equals$O("JPG64")) {
params.put$O$O("outputChannelTemp", p$1.getOutputChannel$S.apply(this, [null]));
}} else if (type.equals$O("PDF")) {
} else if (type.startsWith$S("PNG")) {
}var errRet=Clazz.array(String, [1]);
isOK=p$1.createTheImage$java_awt_image_BufferedImage$S$javajs_util_OC$java_util_Map$SA.apply(this, [image, type, out, params, errRet]);
if (closeChannel) out.closeChannel$();
if (isOK) {
if (asBytes) bytes=out.toByteArray$();
} else {
errMsg=errRet[0];
}} finally {
if (bytes != null  || out != null  ) params.put$O$O("byteCount", Integer.valueOf$I(bytes != null  ? bytes.length : isOK ? out.getByteCount$() : -1));
}
return (errMsg == null  ? bytes : errMsg);
});

Clazz.newMeth(C$, 'getOutputChannel$S',  function (fileName) {
var outputChannel=Clazz.new_($I$(2,1));
return outputChannel.setParams$javajs_api_BytePoster$S$Z$java_io_OutputStream(null, fileName, false, null);
}, p$1);

Clazz.newMeth(C$, 'createTheImage$java_awt_image_BufferedImage$S$javajs_util_OC$java_util_Map$SA',  function (image, type, out, params, errRet) {
params.put$O$O("mimeType", "image/" + type.toLowerCase$());
type=type.substring$I$I(0, 1) + type.substring$I(1).toLowerCase$();
var ie=$I$(7).getInstance$S$Z("javajs.img." + type + "Encoder" , true);
if (ie == null ) {
errRet[0]="Image encoder type " + type + " not available" ;
return false;
}var doClose=true;
var pixels;
var w;
var h;
try {
if (image == null ) {
w=(params.get$O("width")).intValue$();
h=(params.get$O("height")).intValue$();
pixels=params.get$O("rgbbuf");
} else {
w=image.getWidth$();
h=image.getHeight$();
pixels=image.getRGB$I$I$I$I$IA$I$I(0, 0, w, h, Clazz.array(Integer.TYPE, [w * h]), 0, w);
}params.put$O$O("imageWidth", Integer.valueOf$I(w));
params.put$O$O("imageHeight", Integer.valueOf$I(h));
params.put$O$O("imagePixels", pixels);
doClose=ie.createImage$S$javajs_util_OC$java_util_Map(type, out, params);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
errRet[0]=e.toString();
out.cancel$();
doClose=true;
} else {
throw e;
}
} finally {
if (doClose) out.closeChannel$();
}
return (errRet[0] == null );
}, p$1);

Clazz.newMeth(C$, 'getLocale$',  function () {
return this.$locale;
});

Clazz.newMeth(C$, 'getDefaultStreamMetadata$javax_imageio_ImageWriteParam',  function (param) {
return null;
});

Clazz.newMeth(C$, 'getDefaultImageMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam',  function (imageType, param) {
return null;
});

Clazz.newMeth(C$, 'convertStreamMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageWriteParam',  function (inData, param) {
return null;
});

Clazz.newMeth(C$, 'convertImageMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam',  function (inData, imageType, param) {
return null;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:04 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
