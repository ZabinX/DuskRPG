(function(){var P$=Clazz.newPackage("sun.awt.image"),I$=[[0,'java.net.URL']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "URLImageSource", null, 'sun.awt.image.InputStreamImageSource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['actualPort'],'S',['actualHost'],'O',['url','java.net.URL','conn','java.net.URLConnection']]]

Clazz.newMeth(C$, 'c$$java_net_URL',  function (u) {
Clazz.super_(C$, this);
this.url=u;
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (href) {
C$.c$$java_net_URL.apply(this, [Clazz.new_($I$(1,1).c$$java_net_URL$S,[null, href])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URL$java_net_URLConnection',  function (u, uc) {
C$.c$$java_net_URL.apply(this, [u]);
this.conn=uc;
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URLConnection',  function (uc) {
C$.c$$java_net_URL$java_net_URLConnection.apply(this, [uc.getURL$(), uc]);
}, 1);

Clazz.newMeth(C$, 'checkSecurity$O$Z',  function (context, quiet) {
if (this.actualHost != null ) {
try {
var security=System.getSecurityManager$();
if (security != null ) {
security.checkConnect$S$I$O(this.actualHost, this.actualPort, context);
}} catch (e) {
if (Clazz.exceptionOf(e,"SecurityException")){
if (!quiet) {
throw e;
}return false;
} else {
throw e;
}
}
}return true;
});

Clazz.newMeth(C$, 'getDecoder$',  function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:44 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
