(function(){var P$=Clazz.newPackage("sun.misc"),p$1={},p$2={},p$3={},p$4={},I$=[[0,'java.net.URL','sun.net.www.ParseUtil','sun.misc.URLClassPath',['sun.misc.URLClassPath','.JarLoader'],'sun.misc.Resource','sun.misc.SharedSecrets','java.io.File','sun.misc.MetaIndex','java.security.AccessController','Thread','sun.misc.JarIndex','sun.net.util.URLUtil','sun.misc.FileURLMapper','java.util.jar.JarFile','InternalError','java.util.HashSet',['java.util.jar.Attributes','.Name'],'sun.misc.ExtensionDependency','java.util.StringTokenizer','java.io.FileInputStream','sun.misc.VM','java.util.ArrayList','java.util.Stack','java.util.HashMap','java.util.Collections','java.util.LinkedList',['sun.misc.URLClassPath','.FileLoader'],['sun.misc.URLClassPath','.Loader']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "URLClassPath", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Loader',10],['JarLoader',8],['FileLoader',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.path=Clazz.new_($I$(22,1));
this.urls=Clazz.new_($I$(23,1));
this.loaders=Clazz.new_($I$(22,1));
this.lmap=Clazz.new_($I$(24,1));
this.closed=false;
},1);

C$.$fields$=[['Z',['closed'],'O',['path','java.util.ArrayList','urls','java.util.Stack','loaders','java.util.ArrayList','lmap','java.util.HashMap','jarHandler','java.net.URLStreamHandler','lookupCacheURLs','java.net.URL[]','lookupCacheLoader','ClassLoader']]
,['Z',['DEBUG','DEBUG_LOOKUP_CACHE','DISABLE_JAR_CHECKING','lookupCacheEnabled'],'S',['JAVA_VERSION']]]

Clazz.newMeth(C$, 'c$$java_net_URLA$java_net_URLStreamHandlerFactory',  function (urls, factory) {
;C$.$init$.apply(this);
for (var i=0; i < urls.length; i++) {
this.path.add$O(urls[i]);
}
p$2.push$java_net_URLA.apply(this, [urls]);
if (factory != null ) {
this.jarHandler=factory.createURLStreamHandler$S("jar");
}}, 1);

Clazz.newMeth(C$, 'c$$java_net_URLA',  function (urls) {
C$.c$$java_net_URLA$java_net_URLStreamHandlerFactory.apply(this, [urls, null]);
}, 1);

Clazz.newMeth(C$, 'closeLoaders$',  function () {
if (this.closed) {
return $I$(25).emptyList$();
}var result=Clazz.new_($I$(26,1));
for (var loader, $loader = this.loaders.iterator$(); $loader.hasNext$()&&((loader=($loader.next$())),1);) {
try {
loader.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
result.add$O(e);
} else {
throw e;
}
}
}
this.closed=true;
return result;
});

Clazz.newMeth(C$, 'addURL$java_net_URL',  function (url) {
if (this.closed) return;
{
if (url == null  || this.path.contains$O(url) ) return;
this.urls.add$I$O(0, url);
this.path.add$O(url);
if (this.lookupCacheURLs != null ) {
C$.disableAllLookupCaches$();
}}});

Clazz.newMeth(C$, 'getURLs$',  function () {
{
return this.path.toArray$OA(Clazz.array($I$(1), [this.path.size$()]));
}});

Clazz.newMeth(C$, 'findResource$S$Z',  function (name, check) {
var loader;
var cache=p$2.getLookupCache$S.apply(this, [name]);
for (var i=0; (loader=p$2.getNextLoader$IA$I.apply(this, [cache, i])) != null ; i++) {
var url=loader.findResource$S$Z(name, check);
if (url != null ) {
return url;
}}
return null;
});

Clazz.newMeth(C$, 'getResource$S$Z',  function (name, check) {
if (C$.DEBUG) {
System.err.println$S("URLClassPath.getResource(\"" + name + "\")" );
}var loader;
var cache=p$2.getLookupCache$S.apply(this, [name]);
for (var i=0; (loader=p$2.getNextLoader$IA$I.apply(this, [cache, i])) != null ; i++) {
var res=loader.getResource$S$Z(name, check);
if (res != null ) {
return res;
}}
return null;
});

Clazz.newMeth(C$, 'findResources$S$Z',  function (name, check) {
return ((P$.URLClassPath$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "URLClassPath$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Enumeration', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.index=0;
this.cache=p$2.getLookupCache$S.apply(this.b$['sun.misc.URLClassPath'], [name]);
this.url=null;
},1);

C$.$fields$=[['I',['index'],'O',['cache','int[]','url','java.net.URL']]]

Clazz.newMeth(C$, 'next',  function () {
if (this.url != null ) {
return true;
} else {
var loader;
while ((loader=p$2.getNextLoader$IA$I.apply(this.b$['sun.misc.URLClassPath'], [this.cache, this.index++])) != null ){
this.url=loader.findResource$S$Z(this.$finals$.name, this.$finals$.check);
if (this.url != null ) {
return true;
}}
return false;
}}, p$3);

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
return p$3.next.apply(this, []);
});

Clazz.newMeth(C$, 'nextElement$',  function () {
if (!p$3.next.apply(this, [])) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}var u=this.url;
this.url=null;
return u;
});
})()
), Clazz.new_(P$.URLClassPath$1.$init$,[this, {check:check,name:name}]));
});

Clazz.newMeth(C$, 'getResource$S',  function (name) {
return this.getResource$S$Z(name, true);
});

Clazz.newMeth(C$, 'getResources$S$Z',  function (name, check) {
return ((P$.URLClassPath$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "URLClassPath$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Enumeration', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.index=0;
this.cache=p$2.getLookupCache$S.apply(this.b$['sun.misc.URLClassPath'], [name]);
this.res=null;
},1);

C$.$fields$=[['I',['index'],'O',['cache','int[]','res','sun.misc.Resource']]]

Clazz.newMeth(C$, 'next',  function () {
if (this.res != null ) {
return true;
} else {
var loader;
while ((loader=p$2.getNextLoader$IA$I.apply(this.b$['sun.misc.URLClassPath'], [this.cache, this.index++])) != null ){
this.res=loader.getResource$S$Z(this.$finals$.name, this.$finals$.check);
if (this.res != null ) {
return true;
}}
return false;
}}, p$4);

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
return p$4.next.apply(this, []);
});

Clazz.newMeth(C$, 'nextElement$',  function () {
if (!p$4.next.apply(this, [])) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}var r=this.res;
this.res=null;
return r;
});
})()
), Clazz.new_(P$.URLClassPath$2.$init$,[this, {check:check,name:name}]));
});

Clazz.newMeth(C$, 'getResources$S',  function (name) {
return this.getResources$S$Z(name, true);
});

Clazz.newMeth(C$, 'initLookupCache$ClassLoader',  function (loader) {
if ((this.lookupCacheURLs=C$.getLookupCacheURLs$ClassLoader(loader)) != null ) {
this.lookupCacheLoader=loader;
} else {
C$.disableAllLookupCaches$();
}});

Clazz.newMeth(C$, 'disableAllLookupCaches$',  function () {
C$.lookupCacheEnabled=false;
}, 1);

Clazz.newMeth(C$, 'getLookupCacheURLs$ClassLoader',  function (loader) {
alert('native method must be replaced! getLookupCacheURLs');
}
, 2);

Clazz.newMeth(C$, 'getLookupCacheForClassLoader$ClassLoader$S',  function (loader, name) {
alert('native method must be replaced! getLookupCacheForClassLoader');
}
, 2);

Clazz.newMeth(C$, 'knownToNotExist0$ClassLoader$S',  function (loader, className) {
alert('native method must be replaced! knownToNotExist0');
}
, 2);

Clazz.newMeth(C$, 'knownToNotExist$S',  function (className) {
if (this.lookupCacheURLs != null  && C$.lookupCacheEnabled ) {
return C$.knownToNotExist0$ClassLoader$S(this.lookupCacheLoader, className);
}return false;
});

Clazz.newMeth(C$, 'getLookupCache$S',  function (name) {
if (this.lookupCacheURLs == null  || !C$.lookupCacheEnabled ) {
return null;
}var cache=C$.getLookupCacheForClassLoader$ClassLoader$S(this.lookupCacheLoader, name);
if (cache != null  && cache.length > 0 ) {
var maxindex=cache[cache.length - 1];
if (!p$2.ensureLoaderOpened$I.apply(this, [maxindex])) {
if (C$.DEBUG_LOOKUP_CACHE) {
System.out.println$S("Expanded loaders FAILED " + this.loaders.size$() + " for maxindex=" + maxindex );
}return null;
}}return cache;
}, p$2);

Clazz.newMeth(C$, 'ensureLoaderOpened$I',  function (index) {
if (this.loaders.size$() <= index) {
if (p$2.getLoader$I.apply(this, [index]) == null ) {
return false;
}if (!C$.lookupCacheEnabled) {
return false;
}if (C$.DEBUG_LOOKUP_CACHE) {
System.out.println$S("Expanded loaders " + this.loaders.size$() + " to index=" + index );
}}return true;
}, p$2);

Clazz.newMeth(C$, 'validateLookupCache$I$S',  function (index, urlNoFragString) {
if (this.lookupCacheURLs != null  && C$.lookupCacheEnabled ) {
if (index < this.lookupCacheURLs.length && urlNoFragString.equals$O($I$(12).urlNoFragString$java_net_URL(this.lookupCacheURLs[index])) ) {
return;
}if (C$.DEBUG || C$.DEBUG_LOOKUP_CACHE ) {
System.out.println$S("WARNING: resource lookup cache invalidated " + "for lookupCacheLoader at " + index );
}C$.disableAllLookupCaches$();
}}, p$2);

Clazz.newMeth(C$, 'getNextLoader$IA$I',  function (cache, index) {
if (this.closed) {
return null;
}if (cache != null ) {
if (index < cache.length) {
var loader=this.loaders.get$I(cache[index]);
if (C$.DEBUG_LOOKUP_CACHE) {
System.out.println$S("HASCACHE: Loading from : " + cache[index] + " = " + loader.getBaseURL$() );
}return loader;
} else {
return null;
}} else {
return p$2.getLoader$I.apply(this, [index]);
}}, p$2);

Clazz.newMeth(C$, 'getLoader$I',  function (index) {
if (this.closed) {
return null;
}while (this.loaders.size$() < index + 1){
var url;
{
if (this.urls.empty$()) {
return null;
} else {
url=this.urls.pop$();
}}var urlNoFragString=$I$(12).urlNoFragString$java_net_URL(url);
if (this.lmap.containsKey$O(urlNoFragString)) {
continue;
}var loader;
try {
loader=p$2.getLoader$java_net_URL.apply(this, [url]);
var urls=loader.getClassPath$();
if (urls != null ) {
p$2.push$java_net_URLA.apply(this, [urls]);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
continue;
} else {
throw e;
}
}
p$2.validateLookupCache$I$S.apply(this, [this.loaders.size$(), urlNoFragString]);
this.loaders.add$O(loader);
this.lmap.put$O$O(urlNoFragString, loader);
}
if (C$.DEBUG_LOOKUP_CACHE) {
System.out.println$S("NOCACHE: Loading from : " + index);
}return this.loaders.get$I(index);
}, p$2);

Clazz.newMeth(C$, 'getLoader$java_net_URL',  function (url) {
try {
return $I$(9,"doPrivileged$java_security_PrivilegedExceptionAction",[((P$.URLClassPath$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "URLClassPath$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
var file=this.$finals$.url.getFile$();
if (file != null  && file.endsWith$S("/") ) {
if ("file".equals$O(this.$finals$.url.getProtocol$())) {
return Clazz.new_($I$(27,1).c$$java_net_URL,[this.$finals$.url]);
} else {
return Clazz.new_($I$(28,1).c$$java_net_URL,[this.$finals$.url]);
}} else {
return Clazz.new_($I$(4,1).c$$java_net_URL$java_net_URLStreamHandler$java_util_HashMap,[this.$finals$.url, this.b$['sun.misc.URLClassPath'].jarHandler, this.b$['sun.misc.URLClassPath'].lmap]);
}});
})()
), Clazz.new_(P$.URLClassPath$3.$init$,[this, {url:url}]))]);
} catch (pae) {
if (Clazz.exceptionOf(pae,"java.security.PrivilegedActionException")){
throw pae.getException$();
} else {
throw pae;
}
}
}, p$2);

Clazz.newMeth(C$, 'push$java_net_URLA',  function (us) {
{
for (var i=us.length - 1; i >= 0; --i) {
this.urls.push$O(us[i]);
}
}}, p$2);

Clazz.newMeth(C$, 'pathToURLs$S',  function (path) {
var st=Clazz.new_($I$(19,1).c$$S$S,[path, "/"]);
var urls=Clazz.array($I$(1), [st.countTokens$()]);
var count=0;
while (st.hasMoreTokens$()){
var f=Clazz.new_([st.nextToken$()],$I$(7,1).c$$S);
try {
f=Clazz.new_([f.getCanonicalPath$()],$I$(7,1).c$$S);
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
} else {
throw x;
}
}
try {
urls[count++]=$I$(2).fileToEncodedURL$java_io_File(f);
} catch (x) {
if (Clazz.exceptionOf(x,"java.io.IOException")){
} else {
throw x;
}
}
}
if (urls.length != count) {
var tmp=Clazz.array($I$(1), [count]);
System.arraycopy$O$I$O$I$I(urls, 0, tmp, 0, count);
urls=tmp;
}return urls;
}, 1);

Clazz.newMeth(C$, 'checkURL$java_net_URL',  function (url) {
try {
C$.check$java_net_URL(url);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
return url;
});

Clazz.newMeth(C$, 'check$java_net_URL',  function (url) {
return;
}, 1);

C$.$static$=function(){C$.$static$=0;
{
C$.JAVA_VERSION=(System.getProperty$S("java.version"));
C$.DEBUG=(System.getProperty$S("sun.misc.URLClassPath.debug") != null );
C$.DEBUG_LOOKUP_CACHE=(System.getProperty$S("sun.misc.URLClassPath.debugLookupCache") != null );
var p=(System.getProperty$S("sun.misc.URLClassPath.disableJarChecking"));
C$.DISABLE_JAR_CHECKING=p != null  ? p.equals$O("true") || p.equals$O("")  : false;
};
C$.lookupCacheEnabled="true".equals$O($I$(21).getSavedProperty$S("sun.cds.enableSharedLookupCache"));
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.URLClassPath, "Loader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.io.Closeable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['base','java.net.URL','jarfile','java.util.jar.JarFile']]]

Clazz.newMeth(C$, 'c$$java_net_URL',  function (url) {
;C$.$init$.apply(this);
this.base=url;
}, 1);

Clazz.newMeth(C$, 'getBaseURL$',  function () {
return this.base;
});

Clazz.newMeth(C$, 'findResource$S$Z',  function (name, check) {
var url;
try {
url=Clazz.new_([this.base, $I$(2).encodePath$S$Z(name, false)],$I$(1,1).c$$java_net_URL$S);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["name"]);
} else {
throw e;
}
}
try {
if (check) {
$I$(3).check$java_net_URL(url);
}var uc=url.openConnection$();
if (Clazz.instanceOf(uc, "java.net.HttpURLConnection")) {
var hconn=uc;
hconn.setRequestMethod$S("HEAD");
if (hconn.getResponseCode$() >= 400) {
return null;
}} else {
uc.setUseCaches$Z(false);
var is=uc.getInputStream$();
is.close$();
}return url;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getResource$S$Z',  function (name, check) {
var url;
try {
url=Clazz.new_([this.base, $I$(2).encodePath$S$Z(name, false)],$I$(1,1).c$$java_net_URL$S);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["name"]);
} else {
throw e;
}
}
var uc;
try {
if (check) {
$I$(3).check$java_net_URL(url);
}uc=url.openConnection$();
var $in=uc.getInputStream$();
if (Clazz.instanceOf(uc, "java.net.JarURLConnection")) {
var juc=uc;
this.jarfile=$I$(4,"checkJar$java_util_jar_JarFile",[juc.getJarFile$()]);
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
return ((P$.URLClassPath$Loader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "URLClassPath$Loader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('sun.misc.Resource'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.$finals$.name;
});

Clazz.newMeth(C$, 'getURL$',  function () {
return this.$finals$.url;
});

Clazz.newMeth(C$, 'getCodeSourceURL$',  function () {
return this.b$['sun.misc.URLClassPath.Loader'].base;
});

Clazz.newMeth(C$, 'getInputStream$',  function () {
return this.$finals$.uc.getInputStream$();
});

Clazz.newMeth(C$, 'getContentLength$',  function () {
return this.$finals$.uc.getContentLength$();
});
})()
), Clazz.new_($I$(5,1),[this, {name:name,url:url,uc:uc}],P$.URLClassPath$Loader$1));
});

Clazz.newMeth(C$, 'getResource$S',  function (name) {
return this.getResource$S$Z(name, true);
});

Clazz.newMeth(C$, 'close$',  function () {
if (this.jarfile != null ) {
this.jarfile.close$();
}});

Clazz.newMeth(C$, 'getClassPath$',  function () {
return null;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.URLClassPath, "JarLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.misc.URLClassPath','.Loader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.closed=false;
},1);

C$.$fields$=[['Z',['closed'],'O',['jar','java.util.jar.JarFile','csu','java.net.URL','index','sun.misc.JarIndex','metaIndex','sun.misc.MetaIndex','handler','java.net.URLStreamHandler','lmap','java.util.HashMap']]
,['O',['zipAccess','sun.misc.JavaUtilZipFileAccess']]]

Clazz.newMeth(C$, 'c$$java_net_URL$java_net_URLStreamHandler$java_util_HashMap',  function (url, jarHandler, loaderMap) {
;C$.superclazz.c$$java_net_URL.apply(this,[Clazz.new_($I$(1,1).c$$S$S$I$S$java_net_URLStreamHandler,["jar", "", -1, url + "!/", jarHandler])]);C$.$init$.apply(this);
this.csu=url;
this.handler=jarHandler;
this.lmap=loaderMap;
if (!p$1.isOptimizable$java_net_URL.apply(this, [url])) {
p$1.ensureOpen.apply(this, []);
} else {
var fileName=url.getFile$();
if (fileName != null ) {
fileName=$I$(2).decode$S(fileName);
var f=Clazz.new_($I$(7,1).c$$S,[fileName]);
this.metaIndex=$I$(8).forJar$java_io_File(f);
if (this.metaIndex != null  && !f.exists$() ) {
this.metaIndex=null;
}}if (this.metaIndex == null ) {
p$1.ensureOpen.apply(this, []);
}}}, 1);

Clazz.newMeth(C$, 'close$',  function () {
if (!this.closed) {
this.closed=true;
p$1.ensureOpen.apply(this, []);
this.jar.close$();
}});

Clazz.newMeth(C$, 'getJarFile$',  function () {
return this.jar;
});

Clazz.newMeth(C$, 'isOptimizable$java_net_URL',  function (url) {
return "file".equals$O(url.getProtocol$());
}, p$1);

Clazz.newMeth(C$, 'ensureOpen',  function () {
if (this.jar == null ) {
try {
$I$(9,"doPrivileged$java_security_PrivilegedExceptionAction",[((P$.URLClassPath$JarLoader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "URLClassPath$JarLoader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
if ($I$(3).DEBUG) {
System.err.println$S("Opening " + this.b$['sun.misc.URLClassPath.JarLoader'].csu);
$I$(10).dumpStack$();
}this.b$['sun.misc.URLClassPath.JarLoader'].jar=p$1.getJarFile$java_net_URL.apply(this.b$['sun.misc.URLClassPath.JarLoader'], [this.b$['sun.misc.URLClassPath.JarLoader'].csu]);
this.b$['sun.misc.URLClassPath.JarLoader'].index=$I$(11).getJarIndex$java_util_jar_JarFile$sun_misc_MetaIndex(this.b$['sun.misc.URLClassPath.JarLoader'].jar, this.b$['sun.misc.URLClassPath.JarLoader'].metaIndex);
if (this.b$['sun.misc.URLClassPath.JarLoader'].index != null ) {
var jarfiles=this.b$['sun.misc.URLClassPath.JarLoader'].index.getJarFiles$();
for (var i=0; i < jarfiles.length; i++) {
try {
var jarURL=Clazz.new_($I$(1,1).c$$java_net_URL$S,[this.b$['sun.misc.URLClassPath.JarLoader'].csu, jarfiles[i]]);
var urlNoFragString=$I$(12).urlNoFragString$java_net_URL(jarURL);
if (!this.b$['sun.misc.URLClassPath.JarLoader'].lmap.containsKey$O(urlNoFragString)) {
this.b$['sun.misc.URLClassPath.JarLoader'].lmap.put$O$O(urlNoFragString, null);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
continue;
} else {
throw e;
}
}
}
}return null;
});
})()
), Clazz.new_(P$.URLClassPath$JarLoader$1.$init$,[this, null]))]);
} catch (pae) {
if (Clazz.exceptionOf(pae,"java.security.PrivilegedActionException")){
throw pae.getException$();
} else {
throw pae;
}
}
}}, p$1);

Clazz.newMeth(C$, 'checkJar$java_util_jar_JarFile',  function (jar) {
if (System.getSecurityManager$() != null  && !$I$(3).DISABLE_JAR_CHECKING  && !C$.zipAccess.startsWithLocHeader$java_util_zip_ZipFile(jar) ) {
var x=Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Invalid Jar file"]);
try {
jar.close$();
} catch (ex) {
if (Clazz.exceptionOf(ex,"java.io.IOException")){
x.addSuppressed$Throwable(ex);
} else {
throw ex;
}
}
throw x;
}return jar;
}, 1);

Clazz.newMeth(C$, 'getJarFile$java_net_URL',  function (url) {
if (p$1.isOptimizable$java_net_URL.apply(this, [url])) {
var p=Clazz.new_($I$(13,1).c$$java_net_URL,[url]);
if (!p.exists$()) {
throw Clazz.new_(Clazz.load('java.io.FileNotFoundException').c$$S,[p.getPath$()]);
}return C$.checkJar$java_util_jar_JarFile(Clazz.new_([p.getPath$()],$I$(14,1).c$$S));
}var uc=this.getBaseURL$().openConnection$();
uc.setRequestProperty$S$S("UA-Java-Version", $I$(3).JAVA_VERSION);
var jarFile=(uc).getJarFile$();
return C$.checkJar$java_util_jar_JarFile(jarFile);
}, p$1);

Clazz.newMeth(C$, 'getIndex$',  function () {
try {
p$1.ensureOpen.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(15,1).c$$Throwable,[e]);
} else {
throw e;
}
}
return this.index;
});

Clazz.newMeth(C$, 'checkResource$S$Z$java_util_jar_JarEntry',  function (name, check, entry) {
var url;
try {
url=Clazz.new_([this.getBaseURL$(), $I$(2).encodePath$S$Z(name, false)],$I$(1,1).c$$java_net_URL$S);
if (check) {
$I$(3).check$java_net_URL(url);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.net.MalformedURLException")){
var e = e$$;
{
return null;
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
return null;
}
} else if (Clazz.exceptionOf(e$$,"java.security.AccessControlException")){
var e = e$$;
{
return null;
}
} else {
throw e$$;
}
}
return ((P$.URLClassPath$JarLoader$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "URLClassPath$JarLoader$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('sun.misc.Resource'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.$finals$.name;
});

Clazz.newMeth(C$, 'getURL$',  function () {
return this.$finals$.url;
});

Clazz.newMeth(C$, 'getCodeSourceURL$',  function () {
return this.b$['sun.misc.URLClassPath.JarLoader'].csu;
});

Clazz.newMeth(C$, 'getInputStream$',  function () {
return this.b$['sun.misc.URLClassPath.JarLoader'].jar.getInputStream$java_util_zip_ZipEntry(this.$finals$.entry);
});

Clazz.newMeth(C$, 'getContentLength$',  function () {
return Long.$ival(this.$finals$.entry.getSize$());
});

Clazz.newMeth(C$, 'getManifest$',  function () {
return this.b$['sun.misc.URLClassPath.JarLoader'].jar.getManifest$();
});

Clazz.newMeth(C$, 'getCertificates$',  function () {
return this.$finals$.entry.getCertificates$();
});

Clazz.newMeth(C$, 'getCodeSigners$',  function () {
return this.$finals$.entry.getCodeSigners$();
});
})()
), Clazz.new_($I$(5,1),[this, {name:name,url:url,entry:entry}],P$.URLClassPath$JarLoader$2));
});

Clazz.newMeth(C$, 'validIndex$S',  function (name) {
var packageName=name;
var pos;
if ((pos=name.lastIndexOf$S("/")) != -1) {
packageName=name.substring$I$I(0, pos);
}var entryName;
var entry;
var enum_=this.jar.entries$();
while (enum_.hasMoreElements$()){
entry=enum_.nextElement$();
entryName=entry.getName$();
if ((pos=entryName.lastIndexOf$S("/")) != -1) entryName=entryName.substring$I$I(0, pos);
if (entryName.equals$O(packageName)) {
return true;
}}
return false;
});

Clazz.newMeth(C$, 'findResource$S$Z',  function (name, check) {
var rsc=this.getResource$S$Z(name, check);
if (rsc != null ) {
return rsc.getURL$();
}return null;
});

Clazz.newMeth(C$, 'getResource$S$Z',  function (name, check) {
if (this.metaIndex != null ) {
if (!this.metaIndex.mayContain$S(name)) {
return null;
}}try {
p$1.ensureOpen.apply(this, []);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(15,1).c$$Throwable,[e]);
} else {
throw e;
}
}
var entry=this.jar.getJarEntry$S(name);
if (entry != null ) return this.checkResource$S$Z$java_util_jar_JarEntry(name, check, entry);
if (this.index == null ) return null;
var visited=Clazz.new_($I$(16,1));
return this.getResource$S$Z$java_util_Set(name, check, visited);
});

Clazz.newMeth(C$, 'getResource$S$Z$java_util_Set',  function (name, check, visited) {
var res;
var jarFiles;
var count=0;
var jarFilesList=null;
if ((jarFilesList=this.index.get$S(name)) == null ) return null;
do {
var size=jarFilesList.size$();
jarFiles=jarFilesList.toArray$OA(Clazz.array(String, [size]));
while (count < size){
var jarName=jarFiles[count++];
var newLoader;
var url;
try {
url=Clazz.new_($I$(1,1).c$$java_net_URL$S,[this.csu, jarName]);
var urlNoFragString=$I$(12).urlNoFragString$java_net_URL(url);
if ((newLoader=this.lmap.get$O(urlNoFragString)) == null ) {
newLoader=$I$(9,"doPrivileged$java_security_PrivilegedExceptionAction",[((P$.URLClassPath$JarLoader$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "URLClassPath$JarLoader$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.security.PrivilegedExceptionAction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
return Clazz.new_($I$(4,1).c$$java_net_URL$java_net_URLStreamHandler$java_util_HashMap,[this.$finals$.url, this.b$['sun.misc.URLClassPath.JarLoader'].handler, this.b$['sun.misc.URLClassPath.JarLoader'].lmap]);
});
})()
), Clazz.new_(P$.URLClassPath$JarLoader$3.$init$,[this, {url:url}]))]);
var newIndex=newLoader.getIndex$();
if (newIndex != null ) {
var pos=jarName.lastIndexOf$S("/");
newIndex.merge$sun_misc_JarIndex$S(this.index, (pos == -1 ? null : jarName.substring$I$I(0, pos + 1)));
}this.lmap.put$O$O(urlNoFragString, newLoader);
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.security.PrivilegedActionException")){
var pae = e$$;
{
continue;
}
} else if (Clazz.exceptionOf(e$$,"java.net.MalformedURLException")){
var e = e$$;
{
continue;
}
} else {
throw e$$;
}
}
var visitedURL=!visited.add$O($I$(12).urlNoFragString$java_net_URL(url));
if (!visitedURL) {
try {
p$1.ensureOpen.apply(newLoader, []);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_($I$(15,1).c$$Throwable,[e]);
} else {
throw e;
}
}
var entry=newLoader.jar.getJarEntry$S(name);
if (entry != null ) {
return newLoader.checkResource$S$Z$java_util_jar_JarEntry(name, check, entry);
}if (!newLoader.validIndex$S(name)) {
throw Clazz.new_(Clazz.load('sun.misc.InvalidJarIndexException').c$$S,["Invalid index"]);
}}if (visitedURL || newLoader === this   || newLoader.getIndex$() == null  ) {
continue;
}if ((res=newLoader.getResource$S$Z$java_util_Set(name, check, visited)) != null ) {
return res;
}}
jarFilesList=this.index.get$S(name);
} while (count < jarFilesList.size$());
return null;
});

Clazz.newMeth(C$, 'getClassPath$',  function () {
if (this.index != null ) {
return null;
}if (this.metaIndex != null ) {
return null;
}p$1.ensureOpen.apply(this, []);
p$1.parseExtensionsDependencies.apply(this, []);
if ($I$(6).javaUtilJarAccess$().jarFileHasClassPathAttribute$java_util_jar_JarFile(this.jar)) {
var man=this.jar.getManifest$();
if (man != null ) {
var attr=man.getMainAttributes$();
if (attr != null ) {
var value=attr.getValue$java_util_jar_Attributes_Name($I$(17).CLASS_PATH);
if (value != null ) {
return p$1.parseClassPath$java_net_URL$S.apply(this, [this.csu, value]);
}}}}return null;
});

Clazz.newMeth(C$, 'parseExtensionsDependencies',  function () {
$I$(18).checkExtensionsDependencies$java_util_jar_JarFile(this.jar);
}, p$1);

Clazz.newMeth(C$, 'parseClassPath$java_net_URL$S',  function (base, value) {
var st=Clazz.new_($I$(19,1).c$$S,[value]);
var urls=Clazz.array($I$(1), [st.countTokens$()]);
var i=0;
while (st.hasMoreTokens$()){
var path=st.nextToken$();
urls[i]=Clazz.new_($I$(1,1).c$$java_net_URL$S,[base, path]);
++i;
}
return urls;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.zipAccess=$I$(6).getJavaUtilZipFileAccess$();
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.URLClassPath, "FileLoader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['sun.misc.URLClassPath','.Loader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['dir','java.io.File']]]

Clazz.newMeth(C$, 'c$$java_net_URL',  function (url) {
;C$.superclazz.c$$java_net_URL.apply(this,[url]);C$.$init$.apply(this);
if (!"file".equals$O(url.getProtocol$())) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["url"]);
}var path=url.getFile$().replace$C$C("/", $I$(7).separatorChar);
path=$I$(2).decode$S(path);
this.dir=(Clazz.new_($I$(7,1).c$$S,[path])).getCanonicalFile$();
}, 1);

Clazz.newMeth(C$, 'findResource$S$Z',  function (name, check) {
var rsc=this.getResource$S$Z(name, check);
if (rsc != null ) {
return rsc.getURL$();
}return null;
});

Clazz.newMeth(C$, 'getResource$S$Z',  function (name, check) {
var url;
try {
var normalizedBase=Clazz.new_([this.getBaseURL$(), "."],$I$(1,1).c$$java_net_URL$S);
url=Clazz.new_([this.getBaseURL$(), $I$(2).encodePath$S$Z(name, false)],$I$(1,1).c$$java_net_URL$S);
if (url.getFile$().startsWith$S(normalizedBase.getFile$()) == false ) {
return null;
}if (check) $I$(3).check$java_net_URL(url);
var file;
if (name.indexOf$S("..") != -1) {
file=(Clazz.new_([this.dir, name.replace$C$C("/", $I$(7).separatorChar)],$I$(7,1).c$$java_io_File$S)).getCanonicalFile$();
if (!((file.getPath$()).startsWith$S(this.dir.getPath$()))) {
return null;
}} else {
file=Clazz.new_([this.dir, name.replace$C$C("/", $I$(7).separatorChar)],$I$(7,1).c$$java_io_File$S);
}if (file.exists$()) {
return ((P$.URLClassPath$FileLoader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "URLClassPath$FileLoader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('sun.misc.Resource'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.$finals$.name;
});

Clazz.newMeth(C$, 'getURL$',  function () {
return this.$finals$.url;
});

Clazz.newMeth(C$, 'getCodeSourceURL$',  function () {
return this.b$['sun.misc.URLClassPath.Loader'].getBaseURL$.apply(this.b$['sun.misc.URLClassPath.Loader'], []);
});

Clazz.newMeth(C$, 'getInputStream$',  function () {
return Clazz.new_($I$(20,1).c$$java_io_File,[this.$finals$.file]);
});

Clazz.newMeth(C$, 'getContentLength$',  function () {
return Long.$ival(this.$finals$.file.length$());
});
})()
), Clazz.new_($I$(5,1),[this, {file:file,name:name,url:url}],P$.URLClassPath$FileLoader$1));
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
return null;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
