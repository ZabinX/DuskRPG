(function(){var P$=Clazz.newPackage("javajs.async"),p$1={},I$=[[0,'javajs.async.Assets','java.net.URL','java.util.HashSet','java.util.HashMap','java.io.File','java.net.URI','java.util.ArrayList',['javajs.async.Assets','.Asset'],'java.util.zip.ZipInputStream','java.util.Arrays']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Assets", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Asset',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.htZipContents=Clazz.new_($I$(4,1));
this.assetsByPath=Clazz.new_($I$(4,1));
this.sortedList=Clazz.array(String, [0]);
},1);

C$.$fields$=[['O',['htZipContents','java.util.Map','+assetsByPath','sortedList','String[]']]
,['Z',['isJS','doCacheZipContents','debugging'],'O',['jsutil','swingjs.api.JSUtilI','nullResources','java.util.HashSet','instance','javajs.async.Assets','loadedAssets','java.util.HashSet']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'addJSCachedBytes$O',  function (URLorURIorFile) {
return (C$.isJS ? C$.jsutil.addJSCachedBytes$O(URLorURIorFile) : null);
}, 1);

Clazz.newMeth(C$, 'getInstance$',  function () {
return C$.instance;
}, 1);

Clazz.newMeth(C$, 'getAbsoluteURL$S',  function (path) {
var url=null;
try {
url=(path.indexOf$S("file:") == 0 ? Clazz.new_($I$(2,1).c$$S,[path]) : Clazz.new_([Clazz.new_($I$(5,1).c$$S,[path]).getAbsolutePath$()],$I$(5,1).c$$S).toURI$().toURL$());
if (path.indexOf$S("!/") >= 0) url=Clazz.new_(["jar", null, url.toString()],$I$(2,1).c$$S$S$S);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
e.printStackTrace$();
} else {
throw e;
}
}
return url;
}, 1);

Clazz.newMeth(C$, 'getAbsoluteURI$S',  function (path) {
var uri=null;
try {
uri=(path.indexOf$S(":/") < 0 ? Clazz.new_([Clazz.new_($I$(5,1).c$$S,[path]).getAbsolutePath$()],$I$(5,1).c$$S).toURI$() : Clazz.new_($I$(6,1).c$$S,[path]));
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.URISyntaxException")){
e.printStackTrace$();
} else {
throw e;
}
}
return uri;
}, 1);

Clazz.newMeth(C$, 'add$O',  function (o) {
if (o == null ) return;
try {
if (Clazz.instanceOf(o, Clazz.array(java.lang.Object, -1))) {
var a=o;
for (var i=0; i < a.length; i++) C$.add$O(a[i]);

return;
}var a=o;
if (a.name == null  || a.zipPath == null   || a.classPath == null  && a.classPaths == null    || a.classPath != null  && a.classPaths != null   ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Assets could not parse " + o]);
}if (a.classPaths == null ) {
C$.add$S$S$S(a.name, a.zipPath, a.classPath);
} else {
C$.add$S$S$SA(a.name, a.zipPath, a.classPaths);
}} catch (t) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[t.getMessage$()]);
}
}, 1);

Clazz.newMeth(C$, 'add$S$S$S',  function (name, zipFile, path) {
C$.add$S$S$SA(name, zipFile, Clazz.array(String, -1, [path]));
}, 1);

Clazz.newMeth(C$, 'hasLoaded$S',  function (name) {
return C$.loadedAssets.contains$O(name);
}, 1);

Clazz.newMeth(C$, 'setDebugging$Z',  function (tf) {
C$.debugging=tf;
}, 1);

Clazz.newMeth(C$, 'reset$',  function () {
C$.nullResources=null;
C$.getInstance$().htZipContents.clear$();
C$.getInstance$().assetsByPath.clear$();
C$.getInstance$().sortedList=Clazz.array(String, [0]);
}, 1);

Clazz.newMeth(C$, 'add$S$S$SA',  function (name, zipFile, paths) {
p$1._add$S$S$SA.apply(C$.getInstance$(), [name, zipFile, paths]);
}, 1);

Clazz.newMeth(C$, '_add$S$S$SA',  function (name, zipFile, paths) {
if (C$.hasLoaded$S(name)) {
System.err.println$S("Assets warning: Asset " + name + " already exists" );
var toRemove=Clazz.new_($I$(7,1));
for (var key, $key = this.assetsByPath.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (this.assetsByPath.get$O(key).name.equals$O(name)) {
toRemove.add$O(key);
}}
for (var i=0; i < toRemove.size$(); i++) {
System.err.println$S("Assets warning: removing " + this.assetsByPath.get$O(toRemove.get$I(i)));
this.assetsByPath.remove$O(toRemove.get$I(i));
}
}C$.loadedAssets.add$O(name);
for (var i=paths.length; --i >= 0; ) {
this.assetsByPath.put$O$O(paths[i], Clazz.new_($I$(8,1).c$$S$S$S,[name, zipFile, paths[i]]));
System.out.println$S("Assets: adding " + this.assetsByPath.get$O(paths[i]));
}
p$1.resort.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'getAssetBytes$S',  function (assetPath) {
return C$.getAssetBytes$S$Z(assetPath, false);
}, 1);

Clazz.newMeth(C$, 'getAssetString$S',  function (assetPath) {
return C$.getAssetString$S$Z(assetPath, false);
}, 1);

Clazz.newMeth(C$, 'getAssetStream$S',  function (assetPath) {
return C$.getAssetStream$S$Z(assetPath, false);
}, 1);

Clazz.newMeth(C$, 'getAssetBytesFromZip$S',  function (assetPath) {
return C$.getAssetBytes$S$Z(assetPath, true);
}, 1);

Clazz.newMeth(C$, 'getAssetStringFromZip$S',  function (assetPath) {
return C$.getAssetString$S$Z(assetPath, true);
}, 1);

Clazz.newMeth(C$, 'getAssetStreamFromZip$S',  function (assetPath) {
return C$.getAssetStream$S$Z(assetPath, true);
}, 1);

Clazz.newMeth(C$, 'getAssetBytes$S$Z',  function (path, zipOnly) {
var bytes=null;
var url=null;
try {
url=p$1._getURLFromPath$S$Z.apply(C$.getInstance$(), [path, true]);
if (url == null  && !zipOnly ) {
url=C$.getAbsoluteURL$S(path);
}if (url != null ) {
if (C$.isJS) {
bytes=C$.jsutil.getURLBytes$java_net_URL(url);
if (bytes == null ) {
url.openStream$();
bytes=C$.jsutil.getURLBytes$java_net_URL(url);
}} else {
bytes=C$.getLimitedStreamBytes$java_io_InputStream$I$java_io_OutputStream(url.openStream$(), -1, null);
}}} catch (t) {
t.printStackTrace$();
}
if (C$.debugging) {
System.out.println$S("Assets.getAssetBytes " + path + " " + url + (bytes == null  ? " null" : " " + bytes.length + " bytes" ) );
}return bytes;
}, 1);

Clazz.newMeth(C$, 'getAssetString$S$Z',  function (path, zipOnly) {
var bytes=C$.getAssetBytes$S$Z(path, zipOnly);
return (bytes == null  ? null :  String.instantialize(bytes));
}, 1);

Clazz.newMeth(C$, 'getAssetStream$S$Z',  function (path, zipOnly) {
var url=null;
url=p$1._getURLFromPath$S$Z.apply(C$.getInstance$(), [path, true]);
if (url == null  && !zipOnly ) {
url=Clazz.getClass(C$).getClassLoader$().getResource$S(path);
}try {
return (url == null  ? null : url.openStream$());
} catch (t) {
}
return null;
}, 1);

Clazz.newMeth(C$, 'getURLFromPath$S',  function (fullPath) {
return p$1._getURLFromPath$S$Z.apply(C$.getInstance$(), [fullPath, false]);
}, 1);

Clazz.newMeth(C$, 'getURLFromPath$S$Z',  function (fullPath, zipOnly) {
return p$1._getURLFromPath$S$Z.apply(C$.getInstance$(), [fullPath, zipOnly]);
}, 1);

Clazz.newMeth(C$, '_getURLFromPath$S$Z',  function (fullPath, zipOnly) {
var url=null;
try {
if (!fullPath.startsWith$S("/TEMP/")) {
if (fullPath.startsWith$S("/")) fullPath=fullPath.substring$I(1);
for (var i=this.sortedList.length; --i >= 0; ) {
if (fullPath.startsWith$S(this.sortedList[i])) {
url=this.assetsByPath.get$O(this.sortedList[i]).getURL$S(fullPath);
var ze=C$.findZipEntry$java_net_URL(url);
if (ze == null ) {
url=null;
break;
}if (C$.isJS) {
C$.jsutil.setURLBytes$java_net_URL$O(url, C$.jsutil.getZipBytes$java_util_zip_ZipEntry(ze));
}break;
}}
}if (url == null  && !zipOnly ) url=C$.getAbsoluteURL$S((fullPath.startsWith$S("TEMP/") ? "/" + fullPath : fullPath));
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
} else {
throw e;
}
}
if (C$.debugging) {
System.out.println$S("Assets.getURLFromPath " + url);
}return url;
}, p$1);

Clazz.newMeth(C$, 'findZipEntry$java_net_URL',  function (url) {
if (url == null ) return null;
var parts=C$.getJarURLParts$S(url.toString());
if (parts == null  || parts[0] == null   || parts[1].length$() == 0 ) return null;
return C$.findZipEntry$S$S(parts[0], parts[1]);
}, 1);

Clazz.newMeth(C$, 'findZipEntry$S$S',  function (zipFile, fileName) {
var map=C$.getZipContents$S(zipFile);
return (map == null  ? null : map.get$O(fileName));
}, 1);

Clazz.newMeth(C$, 'getZipContents$S',  function (zipPath) {
return p$1._getZipContents$S.apply(C$.getInstance$(), [zipPath]);
}, 1);

Clazz.newMeth(C$, 'notFound$S',  function (zipPath) {
return (C$.nullResources != null  && C$.nullResources.contains$O(zipPath) );
}, 1);

Clazz.newMeth(C$, 'setNotFound$S',  function (zipPath) {
if (C$.nullResources == null ) {
C$.nullResources=Clazz.new_($I$(3,1));
}C$.nullResources.add$O(zipPath);
}, 1);

Clazz.newMeth(C$, '_getZipContents$S',  function (zipPath) {
if (C$.notFound$S(zipPath)) return null;
var url=C$.getURLWithCachedBytes$S(zipPath);
var fileNames=this.htZipContents.get$O(url.toString());
if (fileNames != null ) return fileNames;
try {
return p$1.readZipContents$java_io_InputStream$java_net_URL.apply(this, [url.openStream$(), url]);
} catch (ex) {
if (Clazz.exceptionOf(ex,"Exception")){
System.err.println$S("Assets: " + zipPath + " could not be opened" );
C$.setNotFound$S(zipPath);
return null;
} else {
throw ex;
}
}
}, p$1);

Clazz.newMeth(C$, 'getJarURLParts$S',  function (source) {
var n=source.indexOf$S("!/");
if (n < 0) return null;
var jarfile=source.substring$I$I(0, n).replace$CharSequence$CharSequence("jar:", "");
while (jarfile.startsWith$S("//"))jarfile=jarfile.substring$I(1);

return Clazz.array(String, -1, [jarfile, (n == source.length$() - 2 ? null : source.substring$I(n + 2))]);
}, 1);

Clazz.newMeth(C$, 'getURLContents$java_net_URL',  function (url) {
if (url == null ) return null;
try {
if (C$.isJS) {
return C$.jsutil.readAllBytes$java_io_InputStream(url.openStream$());
}return C$.getLimitedStreamBytes$java_io_InputStream$I$java_io_OutputStream(url.openStream$(), -1, null);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
return null;
}, 1);

Clazz.newMeth(C$, 'getURLWithCachedBytes$S',  function (path) {
var url=C$.getAbsoluteURL$S(path);
if (url != null ) C$.addJSCachedBytes$O(url);
return url;
}, 1);

Clazz.newMeth(C$, 'readZipContents$java_io_InputStream$java_net_URL',  function (is, url) {
var fileNames=Clazz.new_($I$(4,1));
if (C$.doCacheZipContents) this.htZipContents.put$O$O(url.toString(), fileNames);
var input=Clazz.new_($I$(9,1).c$$java_io_InputStream,[is]);
var zipEntry=null;
var n=0;
while ((zipEntry=input.getNextEntry$()) != null ){
if (zipEntry.isDirectory$() || Long.$eq(zipEntry.getSize$(),0 ) ) continue;
++n;
var fileName=zipEntry.getName$();
fileNames.put$O$O(fileName, zipEntry);
}
input.close$();
System.out.println$S("Assets: " + n + " zip entries found in " + url );
return fileNames;
}, p$1);

Clazz.newMeth(C$, 'resort',  function () {
this.sortedList=Clazz.array(String, [this.assetsByPath.size$()]);
var i=0;
for (var path, $path = this.assetsByPath.keySet$().iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
this.sortedList[i++]=path;
}
$I$(10).sort$OA(this.sortedList);
}, p$1);

Clazz.newMeth(C$, 'getLimitedStreamBytes$java_io_InputStream$I$java_io_OutputStream',  function (is, n, out) {
var toOut=(out != null );
var buflen=(n > 0 && n < 1024  ? n : 1024);
var buf=Clazz.array(Byte.TYPE, [buflen]);
var bytes=(out == null  ? Clazz.array(Byte.TYPE, [n < 0 ? 4096 : n]) : null);
var len=0;
var totalLen=0;
if (n < 0) n=2147483647;
while (totalLen < n && (len=is.read$BA$I$I(buf, 0, buflen)) > 0 ){
totalLen+=len;
if (toOut) {
out.write$BA$I$I(buf, 0, len);
} else {
if (totalLen > bytes.length) bytes=$I$(10).copyOf$BA$I(bytes, totalLen * 2);
System.arraycopy$O$I$O$I$I(buf, 0, bytes, totalLen - len, len);
if (n != 2147483647 && totalLen + buflen > bytes.length ) buflen=bytes.length - totalLen;
}}
if (toOut) return null;
if (totalLen == bytes.length) return bytes;
buf=Clazz.array(Byte.TYPE, [totalLen]);
System.arraycopy$O$I$O$I$I(bytes, 0, buf, 0, totalLen);
return buf;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
var s="[";
for (var i=0; i < this.sortedList.length; i++) {
var a=this.assetsByPath.get$O(this.sortedList[i]);
s+=(i == 0 ? "" : ",") + a;
}
return s + "]";
});

C$.$static$=function(){C$.$static$=0;
C$.isJS=true ||false;
{
try {
if (C$.isJS) {
C$.jsutil=(Clazz.forName("swingjs.JSUtil").newInstance$());
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.err.println$S("Assets could not create swinjs.JSUtil instance");
} else {
throw e;
}
}
};
C$.doCacheZipContents=true;
C$.instance=Clazz.new_(C$);
C$.loadedAssets=Clazz.new_($I$(3,1));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Assets, "Asset", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name','classPath','zipPath'],'O',['uri','java.net.URI','classPaths','String[]']]]

Clazz.newMeth(C$, 'c$$S$S$SA',  function (name, zipPath, classPaths) {
;C$.$init$.apply(this);
this.name=name;
this.zipPath=zipPath;
this.classPaths=classPaths;
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S',  function (name, zipPath, classPath) {
;C$.$init$.apply(this);
this.name=name;
this.zipPath=zipPath;
this.uri=$I$(1).getAbsoluteURI$S(zipPath);
this.classPath=classPath.endsWith$S("/") ? classPath : classPath + "/";
}, 1);

Clazz.newMeth(C$, 'getURL$S',  function (fullPath) {
return (fullPath.indexOf$S(this.classPath) < 0 ? null : Clazz.new_($I$(2,1).c$$S$S$S,["jar", null, this.uri + "!/" + fullPath ]));
});

Clazz.newMeth(C$, 'toString',  function () {
return "{\"name\":\"" + this.name + "\"," + "\"zipPath\":" + "\"" + this.zipPath + "\"," + "\"classPath\":" + "\"" + this.classPath + "\"" + "}" ;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
