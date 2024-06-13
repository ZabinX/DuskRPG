(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'javajs.util.JSJarURLConnection','javajs.util.AjaxURLConnection']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AjaxURLStreamHandler", null, 'java.net.URLStreamHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['protocol']]]

Clazz.newMeth(C$, 'c$$S',  function (protocol) {
Clazz.super_(C$, this);
this.protocol=protocol;
}, 1);

Clazz.newMeth(C$, 'openConnection$java_net_URL',  function (url) {
if (this.protocol.equals$O("jar")) return Clazz.new_($I$(1,1).c$$java_net_URL,[url]);
return $I$(2).newConnection$java_net_URL(url);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
