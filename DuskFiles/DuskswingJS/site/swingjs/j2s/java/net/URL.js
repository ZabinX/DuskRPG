(function(){var P$=Clazz.newPackage("java.net"),p$1={},I$=[[0,'java.util.Hashtable','java.net.Parts','java.net.URI','javajs.util.AjaxURLConnection','Error','javajs.util.AjaxURLStreamHandlerFactory']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "URL");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.port=-1;
this.hashCode=-1;
},1);

C$.$fields$=[['I',['port','hashCode'],'S',['protocol','host','file','query','authority','path','userInfo','ref'],'O',['handler','java.net.URLStreamHandler','_streamData','java.lang.Object']]
,['O',['秘factory','java.net.URLStreamHandlerFactory','handlers','java.util.Hashtable','streamHandlerLock','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$S$S$I$S',  function (protocol, host, port, file) {
C$.c$$S$S$I$S$java_net_URLStreamHandler.apply(this, [protocol, host, port, file, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S',  function (protocol, host, file) {
C$.c$$S$S$I$S.apply(this, [protocol, host, -1, file]);
}, 1);

Clazz.newMeth(C$, 'c$$S$S$I$S$java_net_URLStreamHandler',  function (protocol, host, port, file, handler) {
;C$.$init$.apply(this);
protocol=protocol.toLowerCase$();
this.protocol=protocol;
if (host != null ) {
if (host.indexOf$I(":") >= 0 && !host.startsWith$S("[") ) {
host="[" + host + "]" ;
}this.host=host;
if (port < -1) {
throw Clazz.new_(Clazz.load('java.net.MalformedURLException').c$$S,["Invalid port number :" + port]);
}this.port=port;
this.authority=(port == -1) ? host : host + ":" + port ;
}var parts=Clazz.new_($I$(2,1).c$$S,[file]);
this.path=parts.getPath$();
this.query=parts.getQuery$();
if (this.query != null ) {
this.file=this.path + "?" + this.query ;
} else {
this.file=this.path;
}this.ref=parts.getRef$();
if (handler == null  && (handler=C$.getURLStreamHandler$S(protocol)) == null  ) {
throw Clazz.new_(Clazz.load('java.net.MalformedURLException').c$$S,["unknown protocol: " + protocol]);
}this.handler=handler;
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (spec) {
C$.c$$java_net_URL$S$java_net_URLStreamHandler.apply(this, [null, spec, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URL$S',  function (context, spec) {
C$.c$$java_net_URL$S$java_net_URLStreamHandler.apply(this, [context, spec, null]);
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URL$S$java_net_URLStreamHandler',  function (context, spec, handler) {
;C$.$init$.apply(this);
spec=spec.trim$();
var original=spec;
var i;
var limit;
var c;
var start=0;
var newProtocol=null;
var aRef=false;
var isRelative=false;
try {
limit=spec.length$();
if (spec.regionMatches$Z$I$S$I$I(true, start, "url:", 0, 4)) {
start+=4;
}if (start < spec.length$() && spec.charAt$I(start) == "#" ) {
aRef=true;
}for (i=start; !aRef && (i < limit) && ((c=spec.charAt$I(i).$c()) != 47 )  ; i++) {
if (c == 58 ) {
var s=spec.substring$I$I(start, i).toLowerCase$();
if (p$1.isValidProtocol$S.apply(this, [s])) {
newProtocol=s;
start=i + 1;
}break;
}}
this.protocol=newProtocol;
if ((context != null ) && ((newProtocol == null ) || newProtocol.equalsIgnoreCase$S(context.protocol) ) ) {
if (handler == null ) {
handler=context.handler;
}if (context.path != null  && context.path.startsWith$S("/") ) newProtocol=null;
if (newProtocol == null ) {
this.protocol=context.protocol;
this.authority=context.authority;
this.userInfo=context.userInfo;
this.host=context.host;
this.port=context.port;
this.file=context.file;
this.path=context.path;
isRelative=true;
}}if (this.protocol == null ) {
throw Clazz.new_(Clazz.load('java.net.MalformedURLException').c$$S,["no protocol: " + original]);
}if (handler == null  && (handler=C$.getURLStreamHandler$S(this.protocol)) == null  ) {
throw Clazz.new_(Clazz.load('java.net.MalformedURLException').c$$S,["unknown protocol: " + this.protocol]);
}this.handler=handler;
i=spec.indexOf$I$I("#", start);
if (i >= 0) {
this.ref=spec.substring$I$I(i + 1, limit);
limit=i;
}if (isRelative && start == limit ) {
this.query=context.query;
if (this.ref == null ) {
this.ref=context.ref;
}}handler.parseURL$java_net_URL$S$I$I(this, spec, start, limit);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.net.MalformedURLException")){
var e = e$$;
{
throw e;
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
var exception=Clazz.new_(Clazz.load('java.net.MalformedURLException').c$$S,[e.getMessage$()]);
exception.initCause$Throwable(e);
throw exception;
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'isValidProtocol$S',  function (protocol) {
var len=protocol.length$();
if (len < 1) return false;
var c=protocol.charAt$I(0);
if (!Character.isLetter$C(c)) return false;
for (var i=1; i < len; i++) {
c=protocol.charAt$I(i);
if (!Character.isLetterOrDigit$C(c) && c != "."  && c != "+"  && c != "-" ) {
return false;
}}
return true;
}, p$1);

Clazz.newMeth(C$, 'set5$S$S$I$S$S',  function (protocol, host, port, file, ref) {
{
this.protocol=protocol;
this.host=host;
this.authority=port == -1 ? host : host + ":" + port ;
this.port=port;
this.file=file;
this.ref=ref;
this.hashCode=-1;
var q=file.lastIndexOf$I("?");
if (q != -1) {
this.query=file.substring$I(q + 1);
this.path=file.substring$I$I(0, q);
} else this.path=file;
}});

Clazz.newMeth(C$, 'set$S$S$I$S$S$S$S$S',  function (protocol, host, port, authority, userInfo, path, query, ref) {
{
this.protocol=protocol;
this.host=host;
this.port=port;
this.file=query == null  ? path : path + "?" + query ;
this.userInfo=userInfo;
this.path=path;
this.ref=ref;
this.hashCode=-1;
this.query=query;
this.authority=authority;
}});

Clazz.newMeth(C$, 'getQuery$',  function () {
return this.query;
});

Clazz.newMeth(C$, 'getPath$',  function () {
return this.path;
});

Clazz.newMeth(C$, 'getUserInfo$',  function () {
return this.userInfo;
});

Clazz.newMeth(C$, 'getAuthority$',  function () {
return this.authority;
});

Clazz.newMeth(C$, 'getPort$',  function () {
return this.port;
});

Clazz.newMeth(C$, 'getDefaultPort$',  function () {
return this.handler.getDefaultPort$();
});

Clazz.newMeth(C$, 'getProtocol$',  function () {
return this.protocol;
});

Clazz.newMeth(C$, 'getHost$',  function () {
return this.host;
});

Clazz.newMeth(C$, 'getFile$',  function () {
return this.file;
});

Clazz.newMeth(C$, 'getRef$',  function () {
return this.ref;
});

Clazz.newMeth(C$, 'equals$O',  function (obj) {
if (!(Clazz.instanceOf(obj, "java.net.URL"))) return false;
var u2=obj;
return this.handler.equals2$java_net_URL$java_net_URL(this, u2);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
if (this.hashCode != -1) return this.hashCode;
this.hashCode=this.handler.hashCode$java_net_URL(this);
return this.hashCode;
});

Clazz.newMeth(C$, 'sameFile$java_net_URL',  function (other) {
return this.handler.sameFile$java_net_URL$java_net_URL(this, other);
});

Clazz.newMeth(C$, 'toString',  function () {
return this.handler.toExternalForm$java_net_URL(this);
});

Clazz.newMeth(C$, 'toExternalForm$',  function () {
return this.handler.toExternalForm$java_net_URL(this);
});

Clazz.newMeth(C$, 'toURI$',  function () {
var uri=Clazz.new_([this.toString()],$I$(3,1).c$$S);
uri.秘bytes=this._streamData;
return uri;
});

Clazz.newMeth(C$, 'openConnection$',  function () {
return this.handler.openConnection$java_net_URL(this);
});

Clazz.newMeth(C$, 'openStream$',  function () {
return this.openConnection$().getInputStream$();
});

Clazz.newMeth(C$, 'getBytesAsync$java_util_function_Function',  function (whenDone) {
try {
this.openConnection$().getBytesAsync$java_util_function_Function(whenDone);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
whenDone.apply$O(null);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getContent$',  function () {
var bis=$I$(4).getAttachedStreamData$java_net_URL$Z(this, false);
return (bis == null  ? this.openConnection$().getInputStream$() : bis);
});

Clazz.newMeth(C$, 'setURLStreamHandlerFactory$java_net_URLStreamHandlerFactory',  function (fac) {
{
if (C$.秘factory != null ) {
throw Clazz.new_($I$(5,1).c$$S,["factory already defined"]);
}var security=System.getSecurityManager$();
if (security != null ) {
security.checkSetFactory$();
}C$.handlers.clear$();
C$.秘factory=fac;
}}, 1);

Clazz.newMeth(C$, 'getURLStreamHandler$S',  function (protocol) {
var handler=C$.handlers.get$O(protocol);
if (handler == null ) {
if (C$.秘factory == null ) {
try {
C$.setURLStreamHandlerFactory$java_net_URLStreamHandlerFactory(Clazz.new_($I$(6,1)));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}if (C$.秘factory != null ) {
handler=C$.秘factory.createURLStreamHandler$S(protocol);
}}return handler;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.handlers=Clazz.new_($I$(1,1));
C$.streamHandlerLock= Clazz.new_();
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:19 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
