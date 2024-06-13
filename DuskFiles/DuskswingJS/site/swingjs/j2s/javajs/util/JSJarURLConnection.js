(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'javajs.util.ZipTools','java.io.ByteArrayInputStream']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSJarURLConnection", null, 'java.net.JarURLConnection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['$connected']]]

Clazz.newMeth(C$, 'c$$java_net_URL',  function (url) {
;C$.superclazz.c$$java_net_URL.apply(this,[url]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getJarFile$',  function () {
System.err.println$S("JSJarURLConnection does not (yet) implement getJarFile()");
return null;
});

Clazz.newMeth(C$, 'connect$',  function () {
var data=this.url._streamData ||null;
if (data != null ) return;
var bis=this.getJarFileURL$().openStream$();
var bytes=$I$(1,"getZipFileContentsAsBytes$java_io_BufferedInputStream$SA$I",[bis, Clazz.array(String, -1, [this.getEntryName$()]), 0]);
if (bytes == null ) throw Clazz.new_(Clazz.load('java.util.jar.JarException').c$$S,["Jar entry " + this.getEntryName$() + " was not found in " + this.getJarFileURL$() ]);

this.url._streamData = bytes
return;
});

Clazz.newMeth(C$, 'getInputStream$',  function () {
var data=this.url._streamData ||null;
if (!this.$connected && data == null  ) try {
this.connect$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return null;
} else {
throw e;
}
}
return Clazz.new_($I$(2,1).c$$BA,[this.url._streamData ||null]);
});

Clazz.newMeth(C$, 'getManifest$',  function () {
System.err.println$S("JSJarURLConnection.getManifest is not implemented");
return null;
});

Clazz.newMeth(C$, 'getJarEntry$',  function () {
System.err.println$S("JSJarURLConnection.getJarEntry is not implemented");
return null;
});

Clazz.newMeth(C$, 'getBytesAsync$java_util_function_Function',  function (whenDone) {
var bytes=null;
try {
var is=this.getInputStream$();
bytes=is.readAllBytes$() ||null;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
whenDone.apply$O(bytes);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
