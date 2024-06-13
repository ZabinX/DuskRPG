(function(){var P$=Clazz.newPackage("java.net"),I$=[[0,'javajs.util.SB']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "URLStreamHandler");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'openConnection$java_net_URL$java_net_Proxy',  function (u, p) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Method not implemented."]);
});

Clazz.newMeth(C$, 'parseURL$java_net_URL$S$I$I',  function (u, spec, start, limit) {
var protocol=u.getProtocol$();
var authority=u.getAuthority$();
var userInfo=u.getUserInfo$();
var host=u.getHost$();
var port=u.getPort$();
var path=u.getPath$();
var query=u.getQuery$();
var ref=u.getRef$();
var isRelPath=false;
var queryOnly=false;
if (start < limit) {
var queryStart=spec.indexOf$I("?");
queryOnly=queryStart == start;
if ((queryStart != -1) && (queryStart < limit) ) {
query=spec.substring$I$I(queryStart + 1, limit);
if (limit > queryStart) limit=queryStart;
spec=spec.substring$I$I(0, queryStart);
}}var i=0;
var isUNCName=(start <= limit - 4) && (spec.charAt$I(start) == "/") && (spec.charAt$I(start + 1) == "/") && (spec.charAt$I(start + 2) == "/") && (spec.charAt$I(start + 3) == "/")  ;
if (!isUNCName && (start <= limit - 2) && (spec.charAt$I(start) == "/") && (spec.charAt$I(start + 1) == "/")  ) {
start+=2;
i=spec.indexOf$I$I("/", start);
if (i < 0) {
i=spec.indexOf$I$I("?", start);
if (i < 0) i=limit;
}host=authority=spec.substring$I$I(start, i);
var ind=authority.indexOf$I("@");
if (ind != -1) {
userInfo=authority.substring$I$I(0, ind);
host=authority.substring$I(ind + 1);
} else {
userInfo=null;
}if (host != null ) {
if (host.length$() > 0 && (host.charAt$I(0) == "[") ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid host: " + host]);
}ind=host.indexOf$I(":");
port=-1;
if (ind >= 0) {
if (host.length$() > (ind + 1)) {
port=Integer.parseInt$S(host.substring$I(ind + 1));
}host=host.substring$I$I(0, ind);
}} else {
host="";
}if (port < -1) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid port number :" + port]);
start=i;
if (authority.length$() > 0) path="";
}if (host == null ) {
host="";
}if (start < limit) {
if (spec.charAt$I(start) == "/") {
path=spec.substring$I$I(start, limit);
} else if (path != null  && path.length$() > 0 ) {
isRelPath=true;
var ind=path.lastIndexOf$I("/");
var seperator="";
if (ind == -1 && authority != null  ) seperator="/";
path=path.substring$I$I(0, ind + 1) + seperator + spec.substring$I$I(start, limit) ;
} else {
var seperator=(authority != null ) ? "/" : "";
path=seperator + spec.substring$I$I(start, limit);
}} else if (queryOnly && path != null  ) {
var ind=path.lastIndexOf$I("/");
if (ind < 0) ind=0;
path=path.substring$I$I(0, ind) + "/";
}if (path == null ) path="";
if (isRelPath) {
while ((i=path.indexOf$S("/./")) >= 0){
path=path.substring$I$I(0, i) + path.substring$I(i + 2);
}
i=0;
while ((i=path.indexOf$S$I("/../", i)) >= 0){
if (i > 0 && (limit=path.lastIndexOf$I$I("/", i - 1)) >= 0  && (path.indexOf$S$I("/../", limit) != 0) ) {
path=path.substring$I$I(0, limit) + path.substring$I(i + 3);
i=0;
} else {
i=i + 3;
}}
while (path.endsWith$S("/..")){
i=path.indexOf$S("/..");
if ((limit=path.lastIndexOf$I$I("/", i - 1)) >= 0) {
path=path.substring$I$I(0, limit + 1);
} else {
break;
}}
if (path.startsWith$S("./") && path.length$() > 2 ) path=path.substring$I(2);
if (path.endsWith$S("/.")) path=path.substring$I$I(0, path.length$() - 1);
}this.setURL$java_net_URL$S$S$I$S$S$S$S$S(u, protocol, host, port, authority, userInfo, path, query, ref);
});

Clazz.newMeth(C$, 'getDefaultPort$',  function () {
return -1;
});

Clazz.newMeth(C$, 'equals2$java_net_URL$java_net_URL',  function (u1, u2) {
var ref1=u1.getRef$();
var ref2=u2.getRef$();
return (ref1 == ref2 || (ref1 != null  && ref1.equals$O(ref2) ) ) && this.sameFile$java_net_URL$java_net_URL(u1, u2) ;
});

Clazz.newMeth(C$, 'hashCode$java_net_URL',  function (u) {
var h=0;
var protocol=u.getProtocol$();
if (protocol != null ) h+=protocol.hashCode$();
h+=u.toString().hashCode$();
var file=u.getFile$();
if (file != null ) h+=file.hashCode$();
if (u.getPort$() == -1) h+=this.getDefaultPort$();
 else h+=u.getPort$();
var ref=u.getRef$();
if (ref != null ) h+=ref.hashCode$();
return h;
});

Clazz.newMeth(C$, 'sameFile$java_net_URL$java_net_URL',  function (u1, u2) {
if (!((u1.getProtocol$() == u2.getProtocol$()) || (u1.getProtocol$() != null  && u1.getProtocol$().equalsIgnoreCase$S(u2.getProtocol$()) ) )) return false;
if (!(u1.getFile$() == u2.getFile$() || (u1.getFile$() != null  && u1.getFile$().equals$O(u2.getFile$()) ) )) return false;
var port1;
var port2;
port1=(u1.getPort$() != -1) ? u1.getPort$() : u1.handler.getDefaultPort$();
port2=(u2.getPort$() != -1) ? u2.getPort$() : u2.handler.getDefaultPort$();
if (port1 != port2) return false;
if (!this.hostsEqual$java_net_URL$java_net_URL(u1, u2)) return false;
return true;
});

Clazz.newMeth(C$, 'hostsEqual$java_net_URL$java_net_URL',  function (u1, u2) {
if (u1.getHost$() != null  && u2.getHost$() != null  ) return u1.getHost$().equalsIgnoreCase$S(u2.getHost$());
return u1.getHost$() == null  && u2.getHost$() == null  ;
});

Clazz.newMeth(C$, 'toExternalForm$java_net_URL',  function (u) {
var result=Clazz.new_($I$(1,1));
var p=u.getProtocol$();
result.append$S(p);
result.append$S(":");
if (u.getAuthority$() != null  && u.getAuthority$().length$() > 0 ) {
result.append$S("//");
result.append$S(u.getAuthority$());
}if (u.getPath$() != null ) {
result.append$S(u.getPath$());
}if (u.getQuery$() != null ) {
result.append$S("?");
result.append$S(u.getQuery$());
}if (u.getRef$() != null ) {
result.append$S("#");
result.append$S(u.getRef$());
}return result.toString();
});

Clazz.newMeth(C$, 'setURL$java_net_URL$S$S$I$S$S$S$S$S',  function (u, protocol, host, port, authority, userInfo, path, query, ref) {
if (this !== u.handler ) {
throw Clazz.new_(Clazz.load('SecurityException').c$$S,["handler for url different from this handler"]);
}u.set$S$S$I$S$S$S$S$S(u.getProtocol$(), host, port, authority, userInfo, path, query, ref);
});

Clazz.newMeth(C$, 'setURLDeprecated$java_net_URL$S$S$I$S$S',  function (u, protocol, host, port, file, ref) {
var authority=null;
var userInfo=null;
if (host != null  && host.length$() != 0 ) {
authority=(port == -1) ? host : host + ":" + port ;
var at=host.lastIndexOf$I("@");
if (at != -1) {
userInfo=host.substring$I$I(0, at);
host=host.substring$I(at + 1);
}}var path=null;
var query=null;
if (file != null ) {
var q=file.lastIndexOf$I("?");
if (q != -1) {
query=file.substring$I(q + 1);
path=file.substring$I$I(0, q);
} else path=file;
}this.setURL$java_net_URL$S$S$I$S$S$S$S$S(u, protocol, host, port, authority, userInfo, path, query, ref);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:19 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
