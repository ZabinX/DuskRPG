(function(){var P$=Clazz.newPackage("java.util.jar"),p$1={},I$=[[0,['java.util.jar.JarFile','.JarFileEntry'],'java.io.File','java.util.jar.Manifest','java.io.ByteArrayInputStream',['java.util.jar.JarFile','.JarEntryIterator'],'java.util.stream.StreamSupport','java.util.Spliterators','sun.misc.IOUtils','java.util.Locale','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JarFile", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.zip.ZipFile');
C$.$classes$=[['JarEntryIterator',2],['JarFileEntry',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['jvInitialized','verify','hasClassPathAttribute','hasCheckedSpecialAttributes'],'O',['manRef','java.util.jar.Manifest','manEntry','java.util.jar.JarEntry','jv','java.lang.Object']]
,['S',['javaHome'],'O',['CLASSPATH_CHARS','char[]','CLASSPATH_LASTOCC','int[]','+CLASSPATH_OPTOSFT','jarNames','String[]']]]

Clazz.newMeth(C$, 'c$$S',  function (name) {
C$.c$$java_io_File$Z$I.apply(this, [Clazz.new_($I$(2,1).c$$S,[name]), true, 1]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z',  function (name, verify) {
C$.c$$java_io_File$Z$I.apply(this, [Clazz.new_($I$(2,1).c$$S,[name]), verify, 1]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File',  function (file) {
C$.c$$java_io_File$Z$I.apply(this, [file, true, 1]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$Z',  function (file, verify) {
C$.c$$java_io_File$Z$I.apply(this, [file, verify, 1]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File$Z$I',  function (file, verify, mode) {
;C$.superclazz.c$$java_io_File$I.apply(this,[file, mode]);C$.$init$.apply(this);
this.verify=verify;
}, 1);

Clazz.newMeth(C$, 'getManifest$',  function () {
return p$1.getManifestFromReference.apply(this, []);
});

Clazz.newMeth(C$, 'getManifestFromReference',  function () {
var man=this.manRef;
if (man == null ) {
var manEntry=p$1.getManEntry.apply(this, []);
if (manEntry != null ) {
if (this.verify) {
var b=p$1.getBytes$java_util_zip_ZipEntry.apply(this, [manEntry]);
man=Clazz.new_([Clazz.new_($I$(4,1).c$$BA,[b])],$I$(3,1).c$$java_io_InputStream);
if (!this.jvInitialized) {
}} else {
man=Clazz.new_([C$.superclazz.prototype.getInputStream$java_util_zip_ZipEntry.apply(this, [manEntry])],$I$(3,1).c$$java_io_InputStream);
}this.manRef=man;
}}return man;
}, p$1);

Clazz.newMeth(C$, 'getMetaInfEntryNames',  function () {
alert('native method must be replaced! getMetaInfEntryNames');
}
, p$1);

Clazz.newMeth(C$, 'getJarEntry$S',  function (name) {
return this.getEntry$S(name);
});

Clazz.newMeth(C$, 'getEntry$S',  function (name) {
var ze=C$.superclazz.prototype.getEntry$S.apply(this, [name]);
if (ze != null ) {
return Clazz.new_($I$(1,1).c$$java_util_zip_ZipEntry,[this, null, ze]);
}return null;
});

Clazz.newMeth(C$, 'entries$',  function () {
return Clazz.new_($I$(5,1),[this, null]);
});

Clazz.newMeth(C$, 'superEntries$',  function () {
return C$.superclazz.prototype.entries$.apply(this, []);
});

Clazz.newMeth(C$, 'stream$',  function () {
return $I$(6,"stream$java_util_Spliterator$Z",[$I$(7,"spliterator$java_util_Iterator$J$I",[Clazz.new_($I$(5,1),[this, null]), this.size$(), 1297]), false]);
});

Clazz.newMeth(C$, 'maybeInstantiateVerifier',  function () {
this.verify=false;
}, p$1);

Clazz.newMeth(C$, 'getBytes$java_util_zip_ZipEntry',  function (ze) {
try {
var is=C$.superclazz.prototype.getInputStream$java_util_zip_ZipEntry.apply(this, [ze]);
try {
return $I$(8,"readFully$java_io_InputStream$I$Z",[is, Long.$ival(ze.getSize$()), true]);

}finally{/*res*/is&&is.close$&&is.close$();}
}finally{}
}, p$1);

Clazz.newMeth(C$, 'getInputStream$java_util_zip_ZipEntry',  function (ze) {
return C$.superclazz.prototype.getInputStream$java_util_zip_ZipEntry.apply(this, [ze]);
});

Clazz.newMeth(C$, 'getManEntry',  function () {
if (this.manEntry == null ) {
this.manEntry=this.getJarEntry$S("META-INF/MANIFEST.MF");
if (this.manEntry == null ) {
var names=p$1.getMetaInfEntryNames.apply(this, []);
if (names != null ) {
for (var i=0; i < names.length; i++) {
if ("META-INF/MANIFEST.MF".equals$O(names[i].toUpperCase$java_util_Locale($I$(9).ENGLISH))) {
this.manEntry=this.getJarEntry$S(names[i]);
break;
}}
}}}return this.manEntry;
}, p$1);

Clazz.newMeth(C$, 'hasClassPathAttribute$',  function () {
p$1.checkForSpecialAttributes.apply(this, []);
return this.hasClassPathAttribute;
});

Clazz.newMeth(C$, 'match$CA$BA$IA$IA',  function (src, b, lastOcc, optoSft) {
var len=src.length;
var last=b.length - len;
var i=0;
 next : while (i <= last){
for (var j=(len - 1); j >= 0; j--) {
var c=String.fromCharCode(b[i + j]);
c=(((c.$c() - 65) | (90 - c.$c())) >= 0) ? String.fromCharCode((c.$c() + 32)) : c;
if (c != src[j]) {
i+=Math.max(j + 1 - lastOcc[c.$c() & 127], optoSft[j]);
continue next;
}}
return true;
}
return false;
}, p$1);

Clazz.newMeth(C$, 'checkForSpecialAttributes',  function () {
if (this.hasCheckedSpecialAttributes) return;
if (!p$1.isKnownNotToHaveSpecialAttributes.apply(this, [])) {
var manEntry=p$1.getManEntry.apply(this, []);
if (manEntry != null ) {
var b=p$1.getBytes$java_util_zip_ZipEntry.apply(this, [manEntry]);
if (p$1.match$CA$BA$IA$IA.apply(this, [C$.CLASSPATH_CHARS, b, C$.CLASSPATH_LASTOCC, C$.CLASSPATH_OPTOSFT])) this.hasClassPathAttribute=true;
}}this.hasCheckedSpecialAttributes=true;
}, p$1);

Clazz.newMeth(C$, 'isKnownNotToHaveSpecialAttributes',  function () {
return false;
}, p$1);

Clazz.newMeth(C$, 'endsureInitialization',  function () {
try {
p$1.maybeInstantiateVerifier.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'newEntry$java_util_zip_ZipEntry',  function (ze) {
return Clazz.new_($I$(1,1).c$$java_util_zip_ZipEntry,[this, null, ze]);
});

Clazz.newMeth(C$, 'entries2$',  function () {
var enum_=C$.superclazz.prototype.entries$.apply(this, []);
return ((P$.JarFile$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JarFile$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Enumeration', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['entry','java.util.zip.ZipEntry']]]

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
if (this.entry != null ) {
return true;
}while (this.$finals$.enum_.hasMoreElements$()){
var ze=this.$finals$.enum_.nextElement$();
this.entry=ze;
return true;
}
return false;
});

Clazz.newMeth(C$, 'nextElement$',  function () {
if (this.hasMoreElements$()) {
var ze=this.entry;
this.entry=null;
return Clazz.new_($I$(1,1).c$$java_util_zip_ZipEntry,[this, null, ze]);
}throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});
})()
), Clazz.new_(P$.JarFile$1.$init$,[this, {enum_:enum_}]));
});

Clazz.newMeth(C$, 'getCodeSources$java_net_URL',  function (url) {
return null;
});

Clazz.newMeth(C$, 'unsignedEntryNames$',  function () {
var entries=this.entries$();
return ((P$.JarFile$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "JarFile$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Enumeration', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name']]]

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
if (this.name != null ) {
return true;
}while (this.$finals$.entries.hasMoreElements$()){
var value;
var e=this.$finals$.entries.nextElement$();
value=e.getName$();
if (e.isDirectory$()) {
continue;
}this.name=value;
return true;
}
return false;
});

Clazz.newMeth(C$, 'nextElement$',  function () {
if (this.hasMoreElements$()) {
var value=this.name;
this.name=null;
return value;
}throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
});
})()
), Clazz.new_(P$.JarFile$2.$init$,[this, {entries:entries}]));
});

Clazz.newMeth(C$, 'getCodeSource$java_net_URL$S',  function (url, name) {
return null;
});

Clazz.newMeth(C$, 'getManifestDigests$',  function () {
return Clazz.new_($I$(10,1));
});

C$.$static$=function(){C$.$static$=0;
{
};
C$.CLASSPATH_CHARS=Clazz.array(Character.TYPE, -1, ["c", "l", "a", "s", "s", "-", "p", "a", "t", "h"]);
{
C$.CLASSPATH_LASTOCC=Clazz.array(Integer.TYPE, [128]);
C$.CLASSPATH_OPTOSFT=Clazz.array(Integer.TYPE, [10]);
C$.CLASSPATH_LASTOCC["c".$c()]=1;
C$.CLASSPATH_LASTOCC["l".$c()]=2;
C$.CLASSPATH_LASTOCC["s".$c()]=5;
C$.CLASSPATH_LASTOCC["-".$c()]=6;
C$.CLASSPATH_LASTOCC["p".$c()]=7;
C$.CLASSPATH_LASTOCC["a".$c()]=8;
C$.CLASSPATH_LASTOCC["t".$c()]=9;
C$.CLASSPATH_LASTOCC["h".$c()]=10;
for (var i=0; i < 9; i++) C$.CLASSPATH_OPTOSFT[i]=10;

C$.CLASSPATH_OPTOSFT[9]=1;
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JarFile, "JarEntryIterator", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['java.util.Enumeration', 'java.util.Iterator']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.e=this.b$['java.util.jar.JarFile'].superEntries$.apply(this.b$['java.util.jar.JarFile'], []);
},1);

C$.$fields$=[['O',['e','java.util.Enumeration']]]

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.e.hasMoreElements$();
});

Clazz.newMeth(C$, 'next$',  function () {
var ze=this.e.nextElement$();
return Clazz.new_($I$(1,1).c$$java_util_zip_ZipEntry,[this, null, ze]);
});

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
return this.hasNext$();
});

Clazz.newMeth(C$, 'nextElement$',  function () {
return this.next$();
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JarFile, "JarFileEntry", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.jar.JarEntry');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_util_zip_ZipEntry',  function (ze) {
;C$.superclazz.c$$java_util_zip_ZipEntry.apply(this,[ze]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getAttributes$',  function () {
var man=this.b$['java.util.jar.JarFile'].getManifest$.apply(this.b$['java.util.jar.JarFile'], []);
if (man != null ) {
return man.getAttributes$S(this.getName$());
} else {
return null;
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
