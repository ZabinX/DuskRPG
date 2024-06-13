(function(){var P$=Clazz.newPackage("java.net"),p$1={},I$=[[0,'java.net.URL','sun.net.www.ParseUtil']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JarURLConnection", null, 'java.net.URLConnection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['entryName'],'O',['jarFileURL','java.net.URL','jarFileURLConnection','java.net.URLConnection']]]

Clazz.newMeth(C$, 'c$$java_net_URL',  function (url) {
;C$.superclazz.c$$java_net_URL.apply(this,[url]);C$.$init$.apply(this);
p$1.parseSpecs$java_net_URL.apply(this, [url]);
}, 1);

Clazz.newMeth(C$, 'parseSpecs$java_net_URL',  function (url) {
var spec=url.getFile$();
var separator=spec.indexOf$S("!/");
if (separator == -1) {
throw Clazz.new_(Clazz.load('java.net.MalformedURLException').c$$S,["no !/ found in url spec:" + spec]);
}this.jarFileURL=Clazz.new_([spec.substring$I$I(0, separator++)],$I$(1,1).c$$S);
this.jarFileURL._streamData=url._streamData;
this.entryName=null;
if (++separator != spec.length$()) {
this.entryName=spec.substring$I$I(separator, spec.length$());
this.entryName=$I$(2).decode$S(this.entryName);
}}, p$1);

Clazz.newMeth(C$, 'getJarFileURL$',  function () {
return this.jarFileURL;
});

Clazz.newMeth(C$, 'getEntryName$',  function () {
return this.entryName;
});

Clazz.newMeth(C$, 'getManifest$',  function () {
return this.getJarFile$().getManifest$();
});

Clazz.newMeth(C$, 'getJarEntry$',  function () {
return this.getJarFile$().getJarEntry$S(this.entryName);
});

Clazz.newMeth(C$, 'getAttributes$',  function () {
var e=this.getJarEntry$();
return e != null  ? e.getAttributes$() : null;
});

Clazz.newMeth(C$, 'getMainAttributes$',  function () {
var man=this.getManifest$();
return man != null  ? man.getMainAttributes$() : null;
});

Clazz.newMeth(C$, 'getCertificates$',  function () {
var e=this.getJarEntry$();
return e != null  ? e.getCertificates$() : null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:19 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
