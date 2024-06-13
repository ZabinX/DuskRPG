(function(){var P$=Clazz.newPackage("java.util.jar"),p$1={},I$=[[0,'java.util.jar.Manifest','java.io.BufferedInputStream','java.io.ByteArrayInputStream','java.util.jar.JarVerifier','sun.security.util.ManifestEntryVerifier','java.io.ByteArrayOutputStream','java.util.jar.JarEntry']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JarInputStream", null, 'java.util.zip.ZipInputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['doVerify','tryManifest'],'O',['man','java.util.jar.Manifest','first','java.util.jar.JarEntry','jv','java.util.jar.JarVerifier','mev','sun.security.util.ManifestEntryVerifier']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function ($in) {
C$.c$$java_io_InputStream$Z.apply(this, [$in, true]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$Z',  function ($in, verify) {
;C$.superclazz.c$$java_io_InputStream.apply(this,[$in]);C$.$init$.apply(this);
this.doVerify=verify;
var e=C$.superclazz.prototype.getNextEntry$.apply(this, []);
if (e != null  && e.getName$().equalsIgnoreCase$S("META-INF/") ) e=C$.superclazz.prototype.getNextEntry$.apply(this, []);
this.first=p$1.checkManifest$java_util_jar_JarEntry.apply(this, [e]);
}, 1);

Clazz.newMeth(C$, 'checkManifest$java_util_jar_JarEntry',  function (e) {
if (e != null  && "META-INF/MANIFEST.MF".equalsIgnoreCase$S(e.getName$()) ) {
this.man=Clazz.new_($I$(1,1));
var bytes=p$1.getBytes$java_io_InputStream.apply(this, [Clazz.new_($I$(2,1).c$$java_io_InputStream,[this])]);
this.man.read$java_io_InputStream(Clazz.new_($I$(3,1).c$$BA,[bytes]));
this.closeEntry$();
if (this.doVerify) {
this.jv=Clazz.new_($I$(4,1).c$$BA,[bytes]);
this.mev=Clazz.new_($I$(5,1).c$$java_util_jar_Manifest$S,[this.man, null]);
}return C$.superclazz.prototype.getNextEntry$.apply(this, []);
}return e;
}, p$1);

Clazz.newMeth(C$, 'getBytes$java_io_InputStream',  function (is) {
var buffer=Clazz.array(Byte.TYPE, [8192]);
var baos=Clazz.new_($I$(6,1).c$$I,[2048]);
var n;
while ((n=is.read$BA$I$I(buffer, 0, buffer.length)) != -1){
baos.write$BA$I$I(buffer, 0, n);
}
return baos.toByteArray$();
}, p$1);

Clazz.newMeth(C$, 'getManifest$',  function () {
return this.man;
});

Clazz.newMeth(C$, 'getNextEntry$',  function () {
var e;
if (this.first == null ) {
e=C$.superclazz.prototype.getNextEntry$.apply(this, []);
if (this.tryManifest) {
e=p$1.checkManifest$java_util_jar_JarEntry.apply(this, [e]);
this.tryManifest=false;
}} else {
e=this.first;
if (this.first.getName$().equalsIgnoreCase$S("META-INF/INDEX.LIST")) this.tryManifest=true;
this.first=null;
}if (this.jv != null  && e != null  ) {
if (this.jv.nothingToVerify$() == true ) {
this.jv=null;
this.mev=null;
} else {
this.jv.beginEntry$java_util_jar_JarEntry$sun_security_util_ManifestEntryVerifier(e, this.mev);
}}return e;
});

Clazz.newMeth(C$, 'getNextJarEntry$',  function () {
return this.getNextEntry$();
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, off, len) {
var n;
if (this.first == null ) {
n=C$.superclazz.prototype.read$BA$I$I.apply(this, [b, off, len]);
} else {
n=-1;
}if (this.jv != null ) {
this.jv.update$I$BA$I$I$sun_security_util_ManifestEntryVerifier(n, b, off, len, this.mev);
}return n;
});

Clazz.newMeth(C$, 'createZipEntry$S',  function (name) {
var e=Clazz.new_($I$(7,1).c$$S,[name]);
if (this.man != null ) {
e.attr=this.man.getAttributes$S(name);
}return e;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
