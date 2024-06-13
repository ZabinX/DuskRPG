(function(){var P$=Clazz.newPackage("java.security.cert"),I$=[[0,'InternalError','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LDAPCertStoreParameters", null, null, 'java.security.cert.CertStoreParameters');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['port'],'S',['serverName']]]

Clazz.newMeth(C$, 'c$$S$I',  function (serverName, port) {
;C$.$init$.apply(this);
if (serverName == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.serverName=serverName;
this.port=port;
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (serverName) {
C$.c$$S$I.apply(this, [serverName, 389]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$S$I.apply(this, ["localhost", 389]);
}, 1);

Clazz.newMeth(C$, 'getServerName$',  function () {
return this.serverName;
});

Clazz.newMeth(C$, 'getPort$',  function () {
return this.port;
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
return Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_([e.toString(), e],$I$(1,1).c$$S$Throwable);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(2,1));
sb.append$S("LDAPCertStoreParameters: [\n");
sb.append$S("  serverName: " + this.serverName + "\n" );
sb.append$S("  port: " + this.port + "\n" );
sb.append$S("]");
return sb.toString();
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:27 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
