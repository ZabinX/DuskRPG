(function(){var P$=Clazz.newPackage("sun.misc"),p$1={},I$=[[0,'java.util.HashMap','java.util.LinkedList','java.util.zip.ZipFile','java.io.File','java.io.BufferedWriter','java.io.OutputStreamWriter','java.io.BufferedReader','java.io.InputStreamReader','java.util.Vector']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JarIndex");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['indexMap','java.util.HashMap','+jarMap','jarFiles','String[]']]
,['Z',['metaInfFilenames']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.indexMap=Clazz.new_($I$(1,1));
this.jarMap=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function (is) {
C$.c$.apply(this, []);
this.read$java_io_InputStream(is);
}, 1);

Clazz.newMeth(C$, 'c$$SA',  function (files) {
C$.c$.apply(this, []);
this.jarFiles=files;
p$1.parseJars$SA.apply(this, [files]);
}, 1);

Clazz.newMeth(C$, 'getJarIndex$java_util_jar_JarFile',  function (jar) {
return C$.getJarIndex$java_util_jar_JarFile$sun_misc_MetaIndex(jar, null);
}, 1);

Clazz.newMeth(C$, 'getJarIndex$java_util_jar_JarFile$sun_misc_MetaIndex',  function (jar, metaIndex) {
var index=null;
if (metaIndex != null  && !metaIndex.mayContain$S("META-INF/INDEX.LIST") ) {
return null;
}var e=jar.getJarEntry$S("META-INF/INDEX.LIST");
if (e != null ) {
index=Clazz.new_(C$.c$$java_io_InputStream,[jar.getInputStream$java_util_zip_ZipEntry(e)]);
}return index;
}, 1);

Clazz.newMeth(C$, 'getJarFiles$',  function () {
return this.jarFiles;
});

Clazz.newMeth(C$, 'addToList$S$S$java_util_HashMap',  function (key, value, t) {
var list=t.get$O(key);
if (list == null ) {
list=Clazz.new_($I$(2,1));
list.add$O(value);
t.put$O$O(key, list);
} else if (!list.contains$O(value)) {
list.add$O(value);
}}, p$1);

Clazz.newMeth(C$, 'get$S',  function (fileName) {
var jarFiles=null;
if ((jarFiles=this.indexMap.get$O(fileName)) == null ) {
var pos;
if ((pos=fileName.lastIndexOf$S("/")) != -1) {
jarFiles=this.indexMap.get$O(fileName.substring$I$I(0, pos));
}}return jarFiles;
});

Clazz.newMeth(C$, 'add$S$S',  function (fileName, jarName) {
var packageName;
var pos;
if ((pos=fileName.lastIndexOf$S("/")) != -1) {
packageName=fileName.substring$I$I(0, pos);
} else {
packageName=fileName;
}p$1.addMapping$S$S.apply(this, [packageName, jarName]);
});

Clazz.newMeth(C$, 'addMapping$S$S',  function (jarItem, jarName) {
p$1.addToList$S$S$java_util_HashMap.apply(this, [jarItem, jarName, this.indexMap]);
p$1.addToList$S$S$java_util_HashMap.apply(this, [jarName, jarItem, this.jarMap]);
}, p$1);

Clazz.newMeth(C$, 'parseJars$SA',  function (files) {
if (files == null ) {
return;
}var currentJar=null;
for (var i=0; i < files.length; i++) {
currentJar=files[i];
var zrf=Clazz.new_([currentJar.replace$C$C("/", $I$(4).separatorChar)],$I$(3,1).c$$S);
var entries=zrf.entries$();
while (entries.hasMoreElements$()){
var entry=entries.nextElement$();
var fileName=entry.getName$();
if (fileName.equals$O("META-INF/") || fileName.equals$O("META-INF/INDEX.LIST") || fileName.equals$O("META-INF/MANIFEST.MF")  ) continue;
if (!C$.metaInfFilenames || !fileName.startsWith$S("META-INF/") ) {
this.add$S$S(fileName, currentJar);
} else if (!entry.isDirectory$()) {
p$1.addMapping$S$S.apply(this, [fileName, currentJar]);
}}
zrf.close$();
}
}, p$1);

Clazz.newMeth(C$, 'write$java_io_OutputStream',  function (out) {
var bw=Clazz.new_([Clazz.new_($I$(6,1).c$$java_io_OutputStream$S,[out, "UTF8"])],$I$(5,1).c$$java_io_Writer);
bw.write$S("JarIndex-Version: 1.0\n\n");
if (this.jarFiles != null ) {
for (var i=0; i < this.jarFiles.length; i++) {
var jar=this.jarFiles[i];
bw.write$S(jar + "\n");
var jarlist=this.jarMap.get$O(jar);
if (jarlist != null ) {
var listitr=jarlist.iterator$();
while (listitr.hasNext$()){
bw.write$S(listitr.next$() + "\n");
}
}bw.write$S("\n");
}
bw.flush$();
}});

Clazz.newMeth(C$, 'read$java_io_InputStream',  function (is) {
var br=Clazz.new_([Clazz.new_($I$(8,1).c$$java_io_InputStream$S,[is, "UTF8"])],$I$(7,1).c$$java_io_Reader);
var line=null;
var currentJar=null;
var jars=Clazz.new_($I$(9,1));
while ((line=br.readLine$()) != null  && !line.endsWith$S(".jar") );
for (; line != null ; line=br.readLine$()) {
if (line.length$() == 0) continue;
if (line.endsWith$S(".jar")) {
currentJar=line;
jars.add$O(currentJar);
} else {
var name=line;
p$1.addMapping$S$S.apply(this, [name, currentJar]);
}}
this.jarFiles=jars.toArray$OA(Clazz.array(String, [jars.size$()]));
});

Clazz.newMeth(C$, 'merge$sun_misc_JarIndex$S',  function (toIndex, path) {
var itr=this.indexMap.entrySet$().iterator$();
while (itr.hasNext$()){
var e=itr.next$();
var packageName=e.getKey$();
var from_list=e.getValue$();
var listItr=from_list.iterator$();
while (listItr.hasNext$()){
var jarName=listItr.next$();
if (path != null ) {
jarName=path.concat$S(jarName);
}p$1.addMapping$S$S.apply(toIndex, [packageName, jarName]);
}
}
});

C$.$static$=function(){C$.$static$=0;
C$.metaInfFilenames="true".equals$O(System.getProperty$S("sun.misc.JarIndex.metaInfFilenames"));
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
