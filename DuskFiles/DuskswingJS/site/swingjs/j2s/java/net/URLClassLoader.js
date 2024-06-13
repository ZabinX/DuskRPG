(function(){var P$=Clazz.newPackage("java.net"),p$1={},I$=[[0,'java.util.WeakHashMap','sun.misc.URLClassPath','java.net.FactoryURLClassLoader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "URLClassLoader", null, 'java.security.SecureClassLoader', 'java.io.Closeable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.closeables=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['ucp','sun.misc.URLClassPath','closeables','java.util.WeakHashMap']]]

Clazz.newMeth(C$, 'c$$java_net_URLA$ClassLoader',  function (urls, parent) {
;C$.superclazz.c$$ClassLoader.apply(this,[parent]);C$.$init$.apply(this);
this.ucp=Clazz.new_($I$(2,1).c$$java_net_URLA,[urls]);
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URLA$ClassLoader$java_security_AccessControlContext',  function (urls, parent, acc) {
;C$.superclazz.c$$ClassLoader.apply(this,[parent]);C$.$init$.apply(this);
this.ucp=Clazz.new_($I$(2,1).c$$java_net_URLA,[urls]);
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URLA',  function (urls) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.ucp=Clazz.new_($I$(2,1).c$$java_net_URLA,[urls]);
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URLA$java_security_AccessControlContext',  function (urls, acc) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.ucp=Clazz.new_($I$(2,1).c$$java_net_URLA,[urls]);
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URLA$ClassLoader$java_net_URLStreamHandlerFactory',  function (urls, parent, factory) {
;C$.superclazz.c$$ClassLoader.apply(this,[parent]);C$.$init$.apply(this);
this.ucp=Clazz.new_($I$(2,1).c$$java_net_URLA$java_net_URLStreamHandlerFactory,[urls, factory]);
}, 1);

Clazz.newMeth(C$, 'getResourceAsStream$S',  function (name) {
var url=this.getResource$S(name);
try {
if (url == null ) {
return null;
}var urlc=url.openConnection$();
var is=urlc.getInputStream$();
if (Clazz.instanceOf(urlc, "java.net.JarURLConnection")) {
var juc=urlc;
var jar=juc.getJarFile$();
{
if (!this.closeables.containsKey$O(jar)) {
this.closeables.put$O$O(jar, null);
}}} else if (Clazz.instanceOf(urlc, "sun.net.www.protocol.file.FileURLConnection")) {
{
this.closeables.put$O$O(is, null);
}}return is;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return null;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'close$',  function () {
});

Clazz.newMeth(C$, 'addURL$java_net_URL',  function (url) {
this.ucp.addURL$java_net_URL(url);
});

Clazz.newMeth(C$, 'getURLs$',  function () {
return this.ucp.getURLs$();
});

Clazz.newMeth(C$, 'findResource$S',  function (name) {
var url=this.ucp.findResource$S$Z(name, true);
return url != null  ? this.ucp.checkURL$java_net_URL(url) : null;
});

Clazz.newMeth(C$, 'findResources$S',  function (name) {
var e=this.ucp.findResources$S$Z(name, true);
return ((P$.URLClassLoader$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "URLClassLoader$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Enumeration', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.url=null;
},1);

C$.$fields$=[['O',['url','java.net.URL']]]

Clazz.newMeth(C$, 'next',  function () {
if (this.url != null ) {
return true;
}do {
var u=null;
if (this.$finals$.e.hasMoreElements$()) u=this.$finals$.e.nextElement$();
if (u == null ) break;
this.url=this.b$['java.net.URLClassLoader'].ucp.checkURL$java_net_URL(u);
} while (this.url == null );
return this.url != null ;
}, p$1);

Clazz.newMeth(C$, 'nextElement$',  function () {
if (!p$1.next.apply(this, [])) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
}var u=this.url;
this.url=null;
return u;
});

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
return p$1.next.apply(this, []);
});
})()
), Clazz.new_(P$.URLClassLoader$1.$init$,[this, {e:e}]));
});

Clazz.newMeth(C$, 'newInstance$java_net_URLA$ClassLoader',  function (urls, parent) {
return Clazz.new_($I$(3,1).c$$java_net_URLA$ClassLoader,[urls, parent]);
}, 1);

Clazz.newMeth(C$, 'newInstance$java_net_URLA',  function (urls) {
return Clazz.new_($I$(3,1).c$$java_net_URLA,[urls]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:19 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
