(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'java.io.File','java.net.URL','javajs.util.Rdr','javajs.util.AU','java.io.BufferedInputStream','java.io.ByteArrayInputStream','javajs.util.ZipTools','swingjs.api.Interface','java.util.Hashtable','java.awt.Toolkit','java.util.Locale','javajs.util.AjaxURLConnection','swingjs.json.JSON','java.awt.Color','Thread','sun.awt.AppContext','java.util.HashMap','swingjs.api.js.DOMNode','swingjs.JSToolkit',['swingjs.JSDnD','.JSTransferable']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSUtil", null, null, 'swingjs.api.JSUtilI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['Z',['debugging','useCache'],'O',['J2S','swingjs.api.js.J2SInterface','fileCache','java.util.Hashtable','zipTools','javajs.util.ZipTools','jQuery','swingjs.api.js.JQuery','mapNotImpl','java.util.Map','ctxTemp','java.lang.Object']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['newJSUtil$','newJSUtil'],  function () {
return Clazz.new_(C$);
}, 1);

Clazz.newMeth(C$, 'getFileCache$',  function () {
return (C$.fileCache == null  ? C$.fileCache=C$.J2S.getSetJavaFileCache(null) : C$.fileCache);
}, 1);

Clazz.newMeth(C$, 'getCachedFileData$S',  function (path) {
return C$.getCachedFileData$S$Z(path, false);
}, 1);

Clazz.newMeth(C$, 'getCachedFileData$S$Z',  function (path, asBytes) {
var o=(C$.getFileCache$() != null  ? C$.fileCache.get$O(C$.fixCachePath$S(path)) : null);
return (Clazz.instanceOf(o, Clazz.array(Byte.TYPE, -1)) ? o : null);
}, 1);

Clazz.newMeth(C$, 'getCachedFileList$java_io_File',  function (dir) {
var path=C$.fixCachePath$S(dir.getAbsolutePath$());
if (!path.endsWith$S("/")) path+="/";
var len=path.length$();
var map=C$.getFileCache$();
var a=Clazz.array(String, [0]);
var dirs="/";
for (var e, $e = map.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
if (e.getValue$() === Boolean.FALSE ) continue;
var fs=e.getKey$();
if (fs.startsWith$S(path)) {
var name=fs.substring$I(len);
var pt=name.indexOf$S("/");
if (pt >= 0) {
var fdir="/" + name.substring$I$I(0, pt + 1);
if (dirs.indexOf$S(fdir) >= 0) continue;
dirs+=fdir;
name=name.substring$I$I(0, pt);
}
name && a.push(name);
}}
return a;
}, 1);

Clazz.newMeth(C$, 'removeCachedFileData$S',  function (path) {
if (C$.getFileCache$() == null ) return null;
path=C$.fixCachePath$S(path);
return (("/" + path).startsWith$S($I$(1).temporaryDirectory) ? C$.fileCache.remove$O(path) : C$.fileCache.put$O$O(path, Boolean.FALSE));
}, 1);

Clazz.newMeth(C$, 'getFileContents$O$Z$swingjs_api_js_JSFunction',  function (uriOrJSFile, asBytes, fWhenDone) {
var isFile=(Clazz.instanceOf(uriOrJSFile, "java.io.File"));
var uri=uriOrJSFile.toString();
if (isFile) {
var bytes=uriOrJSFile.秘bytes ||null;
if (bytes != null ) {
C$.setFileBytesStatic$O$O(uriOrJSFile, bytes);
return bytes;
}if ((uriOrJSFile).秘isTempFile) return C$.getCachedFileData$S$Z(uri, true);
uri=C$.J2S.getResourcePath(uri, true);
}var data=null;
if (asBytes && uri.indexOf$S(":/") < 0 ) {
data=C$.getCachedFileData$S(uri);
if (data != null ) return data;
if (!uri.startsWith$S("/")) uri="/" + uri;
uri="http://." + uri;
}if (data == null ) {
data=C$.getCachedFileData$S(uri);
}if (data == null  && !uri.startsWith$S("./") ) {
if (!isFile) {
try {
var url=Clazz.new_($I$(2,1).c$$S,[uri]);
var stream=url.getContent$();
return (asBytes ? $I$(3).streamToBytes$java_io_InputStream(stream) : $I$(3).streamToString$java_io_InputStream(stream));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}data=C$.J2S.getFileData(uri, fWhenDone, false, asBytes);
if (data == null ) {
C$.removeCachedFileData$S(uri);
} else if (Clazz.instanceOf(data, Clazz.array(Byte.TYPE, -1))) {
C$.setFileBytesStatic$O$O(uriOrJSFile, data);
}}return data;
}, 1);

Clazz.newMeth(C$, 'fixCachePath$S',  function (uri) {
return C$.J2S.fixCachePath(uri);
}, 1);

Clazz.newMeth(C$, 'getFileAsString$S',  function (filename) {
var data=C$.getFileContents$O$Z$swingjs_api_js_JSFunction(filename, false, null);
return C$.ensureString$O(data);
}, 1);

Clazz.newMeth(C$, 'ensureString$O',  function (data) {
if (data == null ) return null;
if (Clazz.instanceOf(data, Clazz.array(Byte.TYPE, -1))) return  String.instantialize(data);
if (Clazz.instanceOf(data, "java.lang.String") || Clazz.instanceOf(data, "javajs.util.SB") ) return data.toString();
if (Clazz.instanceOf(data, "java.io.InputStream")) try {
return $I$(3).streamToString$java_io_InputStream(data);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'getFileAsBytes$O$Z',  function (file, checkNotFound) {
var data=C$.getFileAsBytes$O(file);
if (data == null ) return null;
if (checkNotFound) {
if (data.length == 0) return null;
if (data.length == 2) {
if (data[0] == 13 && data[1] == 10 ) return null;
}if (data.length == 39) {
if ( String.instantialize(data).equals$O("NetworkError: A network error occurred.")) return null;
}}return data;
}, 1);

Clazz.newMeth(C$, 'getFileAsBytes$O',  function (file) {
var data=C$.getFileContents$O$Z$swingjs_api_js_JSFunction(file, true, null);
if (data == null  || data === Boolean.FALSE  ) return null;
var b=null;
if (Clazz.instanceOf(data, Clazz.array(Byte.TYPE, -1))) {
b=data;
} else if (Clazz.instanceOf(data, "java.lang.String")) {
b=(data).getBytes$();
} else if (Clazz.instanceOf(data, "javajs.util.SB")) {
b=$I$(3).getBytesFromSB$javajs_util_SB(data);
} else if (Clazz.instanceOf(data, "java.io.InputStream")) {
try {
b=$I$(3).getLimitedStreamBytes$java_io_InputStream$J(data, -1);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}return $I$(4).ensureSignedBytes$BA(b);
}, 1);

Clazz.newMeth(C$, 'haveCachedResource$S$Z',  function (resourceName, isJavaPath) {
var path=C$.J2S.getResourcePath(resourceName, isJavaPath);
return (path != null  && C$.getCachedFileData$S(path) != null  );
}, 1);

Clazz.newMeth(C$, 'getJavaResource$S$Z$Z$Z',  function (resourceName, isJavaPath, doCache, doProcess) {
System.out.println$S("JSUtil getting Java resource " + resourceName);
var path=C$.J2S.getResourcePath(resourceName, isJavaPath);
if (path == null ) return null;
var data=C$.getCachedFileData$S(path);
if (data === Boolean.FALSE ) return null;
if (data == null ) {
data=C$.J2S.getFileData(path, null, false, false);
if (data == null ) {
if (C$.useCache && doCache ) {
C$.removeCachedFileData$S(path);
}} else if (C$.useCache && doCache ) {
C$.cacheFileData$S$O(path, data);
}}var sdata=C$.ensureString$O(data);
var ok=(sdata != null  && sdata.indexOf$S("[Exception") != 0 );
System.out.println$S("Processing " + path + " [" + (ok ? "" + sdata.length$() : sdata) + "]" );
return (!ok ? null : !doProcess ? sdata : path.endsWith$S(".css") ? C$.processCSS$S$S(sdata, path) : path.endsWith$S(".js") ? C$.processJS$S$S(sdata, resourceName) : sdata);
}, 1);

Clazz.newMeth(C$, 'getCachedResourceAsStream$S',  function (name) {
System.out.println$S("JSUtil getting Java resource " + name);
var path=C$.J2S.getResourcePath(name, false);
if (path == null ) return null;
var stream;
var data=C$.getCachedFileData$S(path);
if (Clazz.instanceOf(data, Clazz.array(Byte.TYPE, -1))) {
return Clazz.new_([Clazz.new_($I$(6,1).c$$BA,[data])],$I$(5,1).c$$java_io_InputStream);
}if (Clazz.instanceOf(data, "java.lang.Boolean")) {
return null;
}stream=C$.getResourceAsStream$S(name);
data=stream && stream.$in.buf ||null;
if (stream != null  && C$.useCache ) C$.cacheFileData$S$O(path, data);
return stream;
}, 1);

Clazz.newMeth(C$, 'cacheFileData$S$O',  function (path, data) {
path=C$.fixCachePath$S(path);
if (data == null ) {
System.out.println$S("JSUtil releasing cached bytes for " + path);
C$.getFileCache$().remove$O(path);
} else {
var count="?";
if (Clazz.instanceOf(data, Clazz.array(Byte.TYPE, -1))) count="" + (data).length;
 else if (Clazz.instanceOf(data, "java.lang.String")) count="" + (data).length$();
if (!C$.getFileCache$().containsKey$O(path)) System.out.println$S("JSUtil caching " + count + " bytes for " + path );
C$.getFileCache$().put$O$O(path, data);
}}, 1);

Clazz.newMeth(C$, 'loadJavaResourcesFromZip$ClassLoader$S$java_util_Map',  function (cl, zipFileName, mapByteData) {
if (mapByteData == null ) mapByteData=C$.getFileCache$();
var fileList="";
try {
var bis=Clazz.new_([cl.getResourceAsStream$S(zipFileName)],$I$(5,1).c$$java_io_InputStream);
var prefix=C$.J2S.getResourcePath(null, true);
fileList=$I$(7).cacheZipContents$java_io_BufferedInputStream$S$java_util_Map$Z(bis, prefix, mapByteData, false);
} catch (e) {
System.out.println$S("JSUtil could not cache files from " + zipFileName);
return;
}
if (C$.debugging) System.out.println$S("JSUtil loaded resources from " + zipFileName + ":\n" + fileList );
}, 1);

Clazz.newMeth(C$, 'getZipTools$',  function () {
return (C$.zipTools == null  ? (C$.zipTools=$I$(8).getInstance$S$Z("javajs.util.ZipTools", true)) : C$.zipTools);
}, 1);

Clazz.newMeth(C$, 'loadStaticResource$S',  function (file) {
var s="alert('" + file + "' was not found)" ;
if (!C$.J2S.isResourceLoaded(file, false)) {
s=C$.getJavaResource$S$Z$Z$Z(file, true, false, true);
C$.J2S.isResourceLoaded(file, true);
}return s;
}, 1);

Clazz.newMeth(C$, 'isClassLoaded$S',  function (className) {
return (Clazz._isClassDefined(className) ||false);
}, 1);

Clazz.newMeth(C$, 'processCSS$S$S',  function (css, path) {
if (path != null  && css.indexOf$S("images/") >= 0 ) {
path=path.substring$I$I(0, path.lastIndexOf$S("/") + 1) + "images/";
css=css.replaceAll$S$S("images/", path);
}C$.jQuery.$("head").append(C$.jQuery.$("<style type='text/css'>" + css + "</style>" ));
return css;
}, 1);

Clazz.newMeth(C$, 'processJS$S$S',  function (js, resourceName) {
try {
{
if (js.indexOf(";//# sourceURL=") < 0) js += ";//# sourceURL=" + J2S.thisApplet._j2sPath + "/" + resourceName;
eval(js);
}
} catch (e) {
C$.alert$O("error processing " + js);
return null;
}
return js;
}, 1);

Clazz.newMeth(C$, 'getJQuery$',  function () {
if (C$.jQuery != null ) return C$.jQuery;
{
if (!window.jQuery) alert( "jQuery is required for SwingJS, but window.jQuery is not defined." ); jQuery.$ || (jQuery.$ = jQuery); return(jQuery);
}
}, 1);

Clazz.newMeth(C$, 'parseJSONRaw$S',  function (json) {
return C$.getJQuery$().parseJSON(json);
}, 1);

Clazz.newMeth(C$, 'getStackTrace$I',  function (n) {
return Clazz._getStackTrace(n) ||null;
}, 1);

Clazz.newMeth(C$, 'getStackTrace$',  function () {
{
return Clazz._getStackTrace();
}
}, 1);

Clazz.newMeth(C$, 'notImplemented$S',  function (msg) {
if (C$.mapNotImpl == null ) C$.mapNotImpl=Clazz.new_($I$(9,1));
var s=C$.J2S.getCaller();

var cl = s.claxxOwner || s.exClazz;
s = (cl ? cl.__CLASS_NAME__ + "." : "") + s.exName;
if (C$.mapNotImpl.containsKey$O(s + msg)) return;
C$.mapNotImpl.put$O$O(s + msg, Boolean.TRUE);
System.out.println$S(s + " has not been implemented in SwingJS. " + (msg === ""  ? "" : (msg == null  ? "" : msg) + C$.getStackTrace$I(-5)) );
}, 1);

Clazz.newMeth(C$, 'log$S',  function (msg) {
{
System.out.println(msg);
console.log(msg);
}
}, 1);

Clazz.newMeth(C$, 'getInstance$S',  function (className) {
return $I$(8).getInstance$S$Z(className, false);
}, 1);

Clazz.newMeth(C$, 'readyCallback$S$S$java_awt_JSComponent$swingjs_JSAppletViewer',  function (aname, fname, applet, appletPanel) {
try {
C$.J2S.readyCallback(aname, fname, true, applet, appletPanel);
} catch (e) {
System.out.println$S("JSUtil Error running readyCallback method for " + fname + " -- check your page JavaScript" );
}
}, 1);

Clazz.newMeth(C$, 'getSignedStreamBytes$java_io_BufferedInputStream',  function (bis) {
try {
return $I$(4,"ensureSignedBytes$BA",[$I$(3).getStreamAsBytes$java_io_BufferedInputStream$javajs_util_OC(bis, null)]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'saveFile$S$O$S$S',  function (fileName, data, mimeType, encoding) {
C$.J2S.saveFile(fileName, data, mimeType, encoding);
}, 1);

Clazz.newMeth(C$, 'getResourceAsStream$S',  function (name) {
return $I$(10).getDefaultToolkit$().getClass$().getClassLoader$().getResourceAsStream$S(name);
}, 1);

Clazz.newMeth(C$, 'getResource$S',  function (name) {
return $I$(10).getDefaultToolkit$().getClass$().getClassLoader$().getResource$S(name);
}, 1);

Clazz.newMeth(C$, 'getDefaultLocale$S',  function (language) {
var region;
var country;
var variant;
if (language == null ) language=C$.J2S.getDefaultLanguage(true);
language=language.replaceAll$S$S("-", "_");
if (language == null  || language.length$() == 0  || language.equalsIgnoreCase$S("en") ) language="en_US";
var i=language.indexOf$I("_");
if (i > 0) {
region=language.substring$I(i + 1);
language=language.substring$I$I(0, i);
} else {
region="";
}region=region.toUpperCase$();
i=region.indexOf$I("_");
if (i > 0) {
country=region.substring$I$I(0, i);
variant=region.substring$I(i + 1);
} else {
country=region;
variant="";
}return Clazz.new_($I$(11,1).c$$S$S$S,[language, country, variant]);
}, 1);

Clazz.newMeth(C$, 'getURLInputStream$java_net_URL$Z',  function (url, andDelete) {
try {
var bis=$I$(12).getAttachedStreamData$java_net_URL$Z(url, andDelete);
return (bis == null  ? url.openStream$() : bis);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'displayURL$S$S',  function (url, target) {
C$.showWebPage$O$O(url, target);
});

Clazz.newMeth(C$, 'showWebPage$O$O',  function (url, target) {
var surl=(Clazz.instanceOf(url, "java.lang.String") ? url : url.toString());
{
if (target) window.open(surl, target); else window.open(url.toString());
}
}, 1);

Clazz.newMeth(C$, 'warn$S',  function (msg) {
C$.alert$O(msg);
}, 1);

Clazz.newMeth(C$, 'alert$O',  function (object) {
{
console.log("[JSUtil] " + object);
alert(object);
}
}, 1);

Clazz.newMeth(C$, 'confirm$S',  function (msg) {
{
return confirm(msg);
}
}, 1);

Clazz.newMeth(C$, 'prompt$S$S',  function (msg, defaultRet) {
{
return prompt(msg, defaultRet);
}
}, 1);

Clazz.newMeth(C$, 'setAjax$java_net_URL',  function (url) {
$I$(13).setAjax$java_net_URL(url);
}, 1);

Clazz.newMeth(C$, 'setAjax$OA',  function (params) {
return params.length == 1 ? $I$(13).setAjax$java_net_URL(params[0]) : $I$(13).setAjax$OA(params);
}, 1);

Clazz.newMeth(C$, 'parseJSON$O',  function (o) {
return $I$(13).parse$O(o);
}, 1);

Clazz.newMeth(C$, 'getJSONReader$O',  function (is) {
return $I$(13).getJSONReader$java_io_InputStream(is);
}, 1);

Clazz.newMeth(C$, 'getJ2SAlias$O$S',  function (c, name) {
return (c && c[name] ||null);
}, 1);

Clazz.newMeth(C$, 'isForClass$O$Class',  function (f, cl) {
return cl != null  && (!f || f.exClazz == (cl.$clazz$ || cl) ||false) ;
}, 1);

Clazz.newMeth(C$, 'isOverridden$O$S$Class',  function (c, name, cl) {
return cl == null  || c != null  && !C$.isForClass$O$Class(C$.getJ2SAlias$O$S(c, name), cl)  ;
}, 1);

Clazz.newMeth(C$, 'getColorFromName$S',  function (c) {
var rgb=null;

if (C$.ctxTemp == null) { var d = document.createElement("canvas");
d.height = d.width = 1;
C$.ctxTemp = d.getContext("2d");
} C$.ctxTemp.fillStyle = c;
C$.ctxTemp.fillRect(0, 0, 1, 1);
rgb = C$.ctxTemp.getImageData(0, 0, 1, 1).data;
return Clazz.new_($I$(14,1).c$$I$I$I,[rgb[0], rgb[1], rgb[2]]);
}, 1);

Clazz.newMeth(C$, 'getBytes$O',  function (f) {
return (Clazz.instanceOf(f, "java.net.URL") ? (f)._streamData : (f).秘bytes);
}, 1);

Clazz.newMeth(C$, 'getURLBytes$java_net_URL',  function (url) {
return url._streamData;
});

Clazz.newMeth(C$, 'getBytes$java_io_File',  function (f) {
return f.秘bytes;
});

Clazz.newMeth(C$, 'getAppletForComponent$java_awt_Component',  function (c) {
return C$.getHTML5Applet$java_awt_Component(c);
});

Clazz.newMeth(C$, 'getApplet$',  function () {
return C$.getHTML5Applet$java_awt_Component(null);
}, 1);

Clazz.newMeth(C$, 'getJSClassName$O',  function (o) {
return o && o.__CLASS_NAME__ ||"";
}, 1);

Clazz.newMeth(C$, 'getJSID$O',  function (o) {
{
var t = typeof o;
return (t == "string" ? o : (o.__CLASS_NAME__ == "java.lang.Class" ? o.getName$() : o.__CLASS_NAME__ || t)+ "_" + (o.__JSID__ || (o.hashCode$ ? o.hashCode$() : o.toString())));
}
}, 1);

Clazz.newMeth(C$, 'getHTML5Applet$java_awt_Component',  function (c) {
var g=(c == null  ? $I$(15).currentThread$().getThreadGroup$() : c.getAppContext$().getThreadGroup$());
return (g).getHtmlApplet$();
}, 1);

Clazz.newMeth(C$, 'getJSContext$O',  function (key) {
var map=$I$(16).getAppContext$().get$O(key);
if (map == null ) $I$(16).getAppContext$().put$O$O(key, map=Clazz.new_($I$(17,1)));
return map;
});

Clazz.newMeth(C$, 'addBinaryFileType$S',  function (ext) {
C$.J2S.addBinaryFileType(ext);
});

Clazz.newMeth(C$, 'readInfoProperties$S$java_util_Properties',  function (prefix, p) {
var info=$I$(18,"getAttr",[C$.getApplet$(), "__Info"]);
if (info == null ) return;
var key="";
var value="";

for (key in info) { if (prefix == null || key.indexOf(prefix) == 0) { value = "" + info[key];
System.out.println$S("Platform reading Info." + key + " = " + value );
p.put$O$O(key, value);

} }
});

Clazz.newMeth(C$, 'loadResourceIfClassUnknown$S$S',  function (resource, className) {
if (!C$.isClassLoaded$S(className)) C$.loadStaticResource$S(resource);
});

Clazz.newMeth(C$, 'setAppletAttribute$S$O',  function (key, val) {
var applet=C$.getApplet$();

applet[key] = val;
});

Clazz.newMeth(C$, 'getAppletAttribute$S',  function (key) {
var applet=C$.getApplet$();
{
return applet[key];
}
});

Clazz.newMeth(C$, 'getEmbeddedAttribute$java_awt_Component$S',  function (frame, type) {
var ui=(frame).getUI$();
return (Clazz.instanceOf(ui, "swingjs.plaf.JSFrameUI") ? (ui).getEmbedded$S(type) : null);
});

Clazz.newMeth(C$, 'streamToFile$java_io_InputStream$java_io_File',  function (is, outFile) {
try {
return C$.setFileBytesStatic$java_io_File$O(outFile, is.readAllBytes$());
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setAppClass$O',  function (app) {
C$.getApplet$()._setAppClass(app);
});

Clazz.newMeth(C$, 'setURLBytes$java_net_URL$O',  function (url, isOrBytes) {
return C$.setFileBytesStatic$java_io_File$O(url, isOrBytes);
});

Clazz.newMeth(C$, 'setFileBytes$java_io_File$O',  function (f, isOrBytes) {
return C$.setFileBytesStatic$java_io_File$O(f, isOrBytes);
});

Clazz.newMeth(C$, 'setFileBytesStatic$java_io_File$O',  function (f, isOrBytes) {
return C$.setFileBytesStatic$O$O(f, isOrBytes);
}, 1);

Clazz.newMeth(C$, 'setFileBytesStatic$O$O',  function (f, isOrBytes) {
var bytes;
if (Clazz.instanceOf(isOrBytes, "java.io.InputStream")) {
try {
bytes=(isOrBytes).readAllBytes$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
bytes=null;
} else {
throw e;
}
}
} else if (Clazz.instanceOf(isOrBytes, Clazz.array(Byte.TYPE, -1))) {
bytes=isOrBytes;
} else {
bytes=null;
}if (Clazz.instanceOf(f, "java.net.URL")) {
(f)._streamData=bytes;
} else {
var outFile=f;
outFile.秘bytes=bytes;
if (outFile.秘isTempFile) {
C$.cacheFileData$S$O(Clazz.instanceOf(outFile, "java.io.File") ? outFile.getAbsolutePath$() : outFile.toString(), bytes);
}}return (bytes != null );
}, 1);

Clazz.newMeth(C$, 'addDirectDatabaseCall$S',  function (domain) {
System.out.println$S("JSUtil adding known access-control-allow-origin * for domain " + domain);
C$.J2S.addDirectDatabaseCall(domain);
});

Clazz.newMeth(C$, 'cachePathData$S$O',  function (path, data) {
C$.cacheFileData$S$O(path, data);
});

Clazz.newMeth(C$, 'getFile$S$Z',  function (path, asString) {
return (asString ? C$.getFileAsString$S(path) : C$.getFileAsBytes$O(path));
});

Clazz.newMeth(C$, 'getAppletInfo$S',  function (infoKey) {
var applet=C$.getApplet$();
var info=this.getAppletAttribute$S("__Info");
if (infoKey != null ) {

info = info[infoKey];
if (info == null) info = null;
}return info;
});

Clazz.newMeth(C$, 'getAppletInfoAsMap$',  function () {
var applet=C$.getApplet$();
var app=this.getAppletAttribute$S("_appletPanel");
return app.params;
});

Clazz.newMeth(C$, 'setAppletInfo$S$O',  function (infoKey, val) {
var applet=C$.getApplet$();

applet.__Info[infoKey] = val;
});

Clazz.newMeth(C$, 'getDocumentBase$',  function () {
var ap=this.getAppletAttribute$S("_appletPanel");
try {
return (ap == null  ? Clazz.new_($I$(2,1).c$$S,["file://./"]) : Clazz.new_($I$(2,1).c$$S,[ap.appletDocumentBase]));
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getAppletCodePath$',  function () {
try {
var ap=$I$(18,"getAttr",[C$.getApplet$(), "_appletPanel"]);
return Clazz.new_($I$(2,1).c$$S,[ap.appletCodeBase]).toString();
} catch (t) {
return null;
}
}, 1);

Clazz.newMeth(C$, 'getAppletDocumentPath$',  function () {
try {
var ap=$I$(18,"getAttr",[C$.getApplet$(), "_appletPanel"]);
if (ap == null ) return null;
var path=ap.appletDocumentBase;
return Clazz.new_([Clazz.new_($I$(1,1).c$$S,[path]).getParent$().substring$I(2)],$I$(2,1).c$$S).toString();
} catch (t) {
return null;
}
}, 1);

Clazz.newMeth(C$, 'getCodeBase$',  function () {
var ap=this.getAppletAttribute$S("_appletPanel");
if (ap == null ) return null;
try {
return Clazz.new_($I$(2,1).c$$S,[ap.appletCodeBase]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setJavaScriptMapObjectEnabled$Z',  function (enabled) {

Clazz.loadClass("java.util.HashMap").USE_SIMPLE = enabled;
});

Clazz.newMeth(C$, 'setClipboardContents$S',  function (data) {
try {

navigator.clipboard.writeText(data);
} catch (t) {
C$.alert$O(data);
}
}, 1);

Clazz.newMeth(C$, 'getClipboardText$java_util_function_Consumer',  function (whenDone) {
C$.getClipboardContentsStatic$java_util_function_Consumer(whenDone);
});

Clazz.newMeth(C$, 'getClipboardContentsStatic$java_util_function_Consumer',  function (whenDone) {
var s=null;
try {
{
navigator.clipboard.readText().then(function(text) {whenDone.accept$O(text)});
return null;
}
} catch (t) {
}
if (whenDone != null ) whenDone.accept$O(s);
return s;
}, 1);

Clazz.newMeth(C$, 'getCachedBytes$S',  function (path) {
return C$.getCachedFileData$S$Z(path, true);
});

Clazz.newMeth(C$, 'addJSCachedBytes$O',  function (URLorURIorFile) {
var bytes=this.getCachedBytes$S(URLorURIorFile.toString());
if (Clazz.instanceOf(URLorURIorFile, "java.net.URL")) {
(URLorURIorFile)._streamData=bytes;
} else {
(URLorURIorFile).秘bytes=bytes;
}return bytes;
});

Clazz.newMeth(C$, 'getWebPathFor$S',  function (path) {
return path.startsWith$S("http") ? path : C$.J2S.getResourcePath(path, true);
}, 1);

Clazz.newMeth(C$, 'seekZipEntry$java_util_zip_ZipInputStream$java_util_zip_ZipEntry',  function (zis, ze) {
return zis.setEntry$java_util_zip_ZipEntry(ze);
});

Clazz.newMeth(C$, 'getZipBytes$java_util_zip_ZipEntry',  function (ze) {
return ze.getBytes$();
});

Clazz.newMeth(C$, 'readAllBytes$java_io_InputStream',  function (is) {
return is.readAllBytes$();
});

Clazz.newMeth(C$, 'getURLBytesAsync$java_net_URL$java_util_function_Function',  function (url, whenDone) {
url.getBytesAsync$java_util_function_Function(whenDone);
});

Clazz.newMeth(C$, 'transferTo$java_io_InputStream$java_io_OutputStream',  function (is, out) {
return is.transferTo$java_io_OutputStream(out);
});

Clazz.newMeth(C$, 'showStatus$S$Z',  function (msg, doFadeOut) {
C$.J2S.showStatus(msg, doFadeOut);
});

Clazz.newMeth(C$, 'setUIEnabled$javax_swing_JComponent$Z',  function (jc, enabled) {
(jc.getUI$()).setUIDisabled$Z(!enabled);
});

Clazz.newMeth(C$, 'playAudio$BA$O',  function (buffer, format) {
$I$(19).playAudio$BA$javax_sound_sampled_AudioFormat(buffer, format);
});

Clazz.newMeth(C$, 'importModule$S$java_util_function_Function$java_util_function_Function',  function (resource, resolve, reject) {
C$.loadStaticResource$S("/_ES6/jsutil.js");
if (resource.startsWith$S("$J2S$/")) resource=this.getJ2SPath$() + resource.substring$I(5);
System.out.println$S("JSUtil.importModule " + resource);
return J2S._ES6.jsutil.importModule(resource, resolve, reject) ||null;
});

Clazz.newMeth(C$, 'importModuleData$S$java_util_function_Function$java_util_function_Function',  function (resource, resolve, reject) {
C$.loadStaticResource$S("/_ES6/jsutil.js");
if (resource.startsWith$S("$J2S$/")) resource=this.getJ2SPath$() + resource.substring$I(5);
System.out.println$S("JSUtil.importModule " + resource);
return J2S._ES6.jsutil.importModule(resource, resolve, reject,1) ||null;
});

Clazz.newMeth(C$, 'setPasteListener$java_awt_Component$javax_swing_TransferHandler',  function (c, handler) {
var ui=(c).秘getUI$();
if (handler == null ) {
ui.setPasteHandler$swingjs_api_js_JSFunction(null);
return;
}var co=((P$.JSUtil$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JSUtil$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$O',  function (o) {
try {
this.$finals$.handler.importData$javax_swing_JComponent$java_awt_datatransfer_Transferable(this.$finals$.c, Clazz.new_($I$(20,1)).set$O(o));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return;
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.JSUtil$1.$init$,[this, {c:c,handler:handler}]));
var f=null;
ui.setPasteHandler$swingjs_api_js_JSFunction(f);
});

Clazz.newMeth(C$, 'getJ2SPath$',  function () {
return this.getAppletAttribute$S("_j2sFullPath");
});

C$.$static$=function(){C$.$static$=0;
{
var j2sdebug=false;
var j2sself=null;
{
j2sself = self.J2S;
j2sdebug = J2S._checkLoad || J2S._debugCode
}
C$.debugging=j2sdebug;
C$.J2S=j2sself;
System.out.println$S("swingjs.JSUtil initialized;debug=" + j2sdebug);
};
C$.useCache=true;
C$.jQuery=C$.getJQuery$();
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:01 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
