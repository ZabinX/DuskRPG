(function(){var P$=Clazz.newPackage("java.nio.file"),I$=[[0,'java.nio.file.FileSystems','java.nio.file.spi.FileSystemProvider']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Paths");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'get$S$SA',  function (first, more) {
return $I$(1).getDefault$().getPath$S$SA(first, more);
}, 1);

Clazz.newMeth(C$, 'get$java_net_URI',  function (uri) {
var scheme=uri.getScheme$();
if (scheme == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Missing scheme"]);
if (scheme.equalsIgnoreCase$S("file")) return $I$(1).getDefault$().provider$().getPath$java_net_URI(uri);
for (var provider, $provider = $I$(2).installedProviders$().iterator$(); $provider.hasNext$()&&((provider=($provider.next$())),1);) {
if (provider.getScheme$().equalsIgnoreCase$S(scheme)) {
return provider.getPath$java_net_URI(uri);
}}
throw Clazz.new_(Clazz.load('java.nio.file.FileSystemNotFoundException').c$$S,["Provider \"" + scheme + "\" not installed" ]);
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:23 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
