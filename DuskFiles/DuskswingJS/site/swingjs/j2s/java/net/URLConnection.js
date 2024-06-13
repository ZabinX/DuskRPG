(function(){var P$=Clazz.newPackage("java.net"),p$1={},I$=[[0,'sun.net.www.MessageHeader','java.util.Collections','java.util.Hashtable','swingjs.JSUtil','sun.net.www.MimeTable','java.net.URLConnection','sun.security.util.SecurityConstants']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "URLConnection", null, 'java.net.ContentHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.doInput=true;
this.doOutput=false;
this.connected=false;
this.allowUserInteraction=C$.defaultAllowUserInteraction;
this.useCaches=C$.defaultUseCaches;
this.ifModifiedSince=0;
},1);

C$.$fields$=[['Z',['doInput','doOutput','connected','allowUserInteraction','useCaches'],'I',['connectTimeout','readTimeout'],'J',['ifModifiedSince'],'O',['url','java.net.URL','requests','sun.net.www.MessageHeader','is','java.io.InputStream']]
,['Z',['defaultAllowUserInteraction','defaultUseCaches','fileNameMapLoaded'],'O',['factory','java.net.ContentHandlerFactory','handlers','java.util.Hashtable','fileNameMap','java.net.FileNameMap']]]

Clazz.newMeth(C$, 'setDoInput$Z',  function (doinput) {
if (this.connected) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Already connected"]);
this.doInput=doinput;
});

Clazz.newMeth(C$, 'getDoInput$',  function () {
return this.doInput;
});

Clazz.newMeth(C$, 'setDoOutput$Z',  function (dooutput) {
if (this.connected) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Already connected"]);
this.doOutput=dooutput;
});

Clazz.newMeth(C$, 'getDoOutput$',  function () {
return this.doOutput;
});

Clazz.newMeth(C$, 'c$$java_net_URL',  function (url) {
Clazz.super_(C$, this);
this.url=url;
}, 1);

Clazz.newMeth(C$, 'getURL$',  function () {
return this.url;
});

Clazz.newMeth(C$, 'getInputStream$',  function () {
throw Clazz.new_(Clazz.load('java.net.UnknownServiceException').c$$S,["protocol doesn\'t support input"]);
});

Clazz.newMeth(C$, 'getOutputStream$',  function () {
throw Clazz.new_(Clazz.load('java.net.UnknownServiceException').c$$S,["protocol doesn\'t support output"]);
});

Clazz.newMeth(C$, 'setRequestProperty$S$S',  function (key, value) {
if (this.connected) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Already connected"]);
if (key == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["key is null"]);
if (this.requests == null ) this.requests=Clazz.new_($I$(1,1));
this.requests.set$S$S(key, value);
});

Clazz.newMeth(C$, 'setAllowUserInteraction$Z',  function (allowuserinteraction) {
if (this.connected) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Already connected"]);
this.allowUserInteraction=allowuserinteraction;
});

Clazz.newMeth(C$, 'getAllowUserInteraction$',  function () {
return this.allowUserInteraction;
});

Clazz.newMeth(C$, 'setDefaultAllowUserInteraction$Z',  function (defaultallowuserinteraction) {
C$.defaultAllowUserInteraction=defaultallowuserinteraction;
}, 1);

Clazz.newMeth(C$, 'getDefaultAllowUserInteraction$',  function () {
return C$.defaultAllowUserInteraction;
}, 1);

Clazz.newMeth(C$, 'setUseCaches$Z',  function (usecaches) {
if (this.connected) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Already connected"]);
this.useCaches=usecaches;
});

Clazz.newMeth(C$, 'getUseCaches$',  function () {
return this.useCaches;
});

Clazz.newMeth(C$, 'setIfModifiedSince$J',  function (ifmodifiedsince) {
if (this.connected) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Already connected"]);
this.ifModifiedSince=ifmodifiedsince;
});

Clazz.newMeth(C$, 'getIfModifiedSince$',  function () {
return this.ifModifiedSince;
});

Clazz.newMeth(C$, 'getDefaultUseCaches$',  function () {
return C$.defaultUseCaches;
});

Clazz.newMeth(C$, 'setDefaultUseCaches$Z',  function (defaultusecaches) {
C$.defaultUseCaches=defaultusecaches;
});

Clazz.newMeth(C$, 'addRequestProperty$S$S',  function (key, value) {
if (this.connected) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Already connected"]);
if (key == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["key is null"]);
if (this.requests == null ) this.requests=Clazz.new_($I$(1,1));
this.requests.add$S$S(key, value);
});

Clazz.newMeth(C$, 'getRequestProperty$S',  function (key) {
if (this.connected) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Already connected"]);
if (this.requests == null ) return null;
return this.requests.findValue$S(key);
});

Clazz.newMeth(C$, 'getRequestProperties$',  function () {
if (this.connected) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Already connected"]);
if (this.requests == null ) return $I$(2).EMPTY_MAP;
return this.requests.getHeaders$SA(null);
});

Clazz.newMeth(C$, 'setDefaultRequestProperty$S$S',  function (key, value) {
}, 1);

Clazz.newMeth(C$, 'getDefaultRequestProperty$S',  function (key) {
return null;
}, 1);

Clazz.newMeth(C$, 'setContentHandlerFactory$java_net_ContentHandlerFactory',  function (fac) {
C$.factory=fac;
}, 1);

Clazz.newMeth(C$, 'getContentHandler$',  function () {
var contentType=p$1.stripOffParameters$S.apply(this, [this.getContentType$()]);
var handler=null;
if (contentType == null ) throw Clazz.new_(Clazz.load('java.net.UnknownServiceException').c$$S,["no content-type"]);
try {
if (C$.handlers != null ) handler=C$.handlers.get$O(contentType);
if (handler != null ) return handler;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
if (C$.factory != null ) handler=C$.factory.createContentHandler$S(contentType);
if (handler == null ) {
return this;
}if (C$.handlers == null ) C$.handlers=Clazz.new_($I$(3,1));
C$.handlers.put$O$O(contentType, handler);
return handler;
});

Clazz.newMeth(C$, 'stripOffParameters$S',  function (contentType) {
if (contentType == null ) return null;
var index=contentType.indexOf$I(";");
if (index > 0) return contentType.substring$I$I(0, index);
 else return contentType;
}, p$1);

Clazz.newMeth(C$, 'guessContentTypeFromName$S',  function (fname) {
$I$(4).notImplemented$S(null);
return null;
}, 1);

Clazz.newMeth(C$, 'guessContentTypeFromStream$java_io_InputStream',  function (is) {
if (!is.markSupported$()) return null;
is.mark$I(12);
var c1=is.read$();
var c2=is.read$();
var c3=is.read$();
var c4=is.read$();
var c5=is.read$();
var c6=is.read$();
var c7=is.read$();
var c8=is.read$();
var c9=is.read$();
var c10=is.read$();
var c11=is.read$();
is.reset$();
if (c1 == 202 && c2 == 254  && c3 == 186  && c4 == 190 ) {
return "application/java-vm";
}if (c1 == 172 && c2 == 237 ) {
return "application/x-java-serialized-object";
}if (c1 == 60 ) {
if (c2 == 33  || ((c2 == 104  && (c3 == 116  && c4 == 109   && c5 == 108   || c3 == 101  && c4 == 97   && c5 == 100   )  || (c2 == 98  && c3 == 111   && c4 == 100   && c5 == 121  ) ))  || ((c2 == 72  && (c3 == 84  && c4 == 77   && c5 == 76   || c3 == 69  && c4 == 65   && c5 == 68   )  || (c2 == 66  && c3 == 79   && c4 == 68   && c5 == 89  ) )) ) {
return "text/html";
}if (c2 == 63  && c3 == 120   && c4 == 109   && c5 == 108   && c6 == 32  ) {
return "application/xml";
}}if (c1 == 254 && c2 == 255 ) {
if (c3 == 0 && c4 == 60   && c5 == 0  && c6 == 63   && c7 == 0  && c8 == 120  ) {
return "application/xml";
}}if (c1 == 255 && c2 == 254 ) {
if (c3 == 60  && c4 == 0  && c5 == 63   && c6 == 0  && c7 == 120   && c8 == 0 ) {
return "application/xml";
}}if (c1 == 71  && c2 == 73   && c3 == 70   && c4 == 56  ) {
return "image/gif";
}if (c1 == 35  && c2 == 100   && c3 == 101   && c4 == 102  ) {
return "image/x-bitmap";
}if (c1 == 33  && c2 == 32   && c3 == 88   && c4 == 80   && c5 == 77   && c6 == 50  ) {
return "image/x-pixmap";
}if (c1 == 137 && c2 == 80  && c3 == 78  && c4 == 71  && c5 == 13  && c6 == 10  && c7 == 26  && c8 == 10 ) {
return "image/png";
}if (c1 == 255 && c2 == 216  && c3 == 255 ) {
if (c4 == 224) {
return "image/jpeg";
}if ((c4 == 225) && (c7 == 69  && c8 == 120   && c9 == 105   && c10 == 102   && c11 == 0 ) ) {
return "image/jpeg";
}if (c4 == 238) {
return "image/jpg";
}}if (c1 == 46 && c2 == 115  && c3 == 110  && c4 == 100 ) {
return "audio/basic";
}if (c1 == 100 && c2 == 110  && c3 == 115  && c4 == 46 ) {
return "audio/basic";
}if (c1 == 82  && c2 == 73   && c3 == 70   && c4 == 70  ) {
return "audio/x-wav";
}return null;
}, 1);

Clazz.newMeth(C$, 'getFileNameMap$',  function () {
if ((C$.fileNameMap == null ) && !C$.fileNameMapLoaded ) {
C$.fileNameMap=$I$(5).loadTable$();
C$.fileNameMapLoaded=true;
}return ((P$.URLConnection$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "URLConnection$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.net.FileNameMap', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.map=$I$(6).fileNameMap;
},1);

C$.$fields$=[['O',['map','java.net.FileNameMap']]]

Clazz.newMeth(C$, 'getContentTypeFor$S',  function (fileName) {
return this.map.getContentTypeFor$S(fileName);
});
})()
), Clazz.new_(P$.URLConnection$1.$init$,[this, null]));
}, 1);

Clazz.newMeth(C$, 'setFileNameMap$java_net_FileNameMap',  function (map) {
var sm=System.getSecurityManager$();
if (sm != null ) sm.checkSetFactory$();
C$.fileNameMap=map;
}, 1);

Clazz.newMeth(C$, 'setConnectTimeout$I',  function (timeout) {
if (timeout < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["timeout can not be negative"]);
}this.connectTimeout=timeout;
});

Clazz.newMeth(C$, 'getConnectTimeout$',  function () {
return this.connectTimeout;
});

Clazz.newMeth(C$, 'setReadTimeout$I',  function (timeout) {
if (timeout < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["timeout can not be negative"]);
}this.readTimeout=timeout;
});

Clazz.newMeth(C$, 'getReadTimeout$',  function () {
return this.readTimeout;
});

Clazz.newMeth(C$, 'getContentLength$',  function () {
return this.getHeaderFieldInt$S$I("content-length", -1);
});

Clazz.newMeth(C$, 'getContentType$',  function () {
var type=this.getHeaderField$S("content-type");
return (type == null  ? "application/octet-stream" : type);
});

Clazz.newMeth(C$, 'getContentEncoding$',  function () {
return this.getHeaderField$S("content-encoding");
});

Clazz.newMeth(C$, 'getExpiration$',  function () {
return this.getHeaderFieldDate$S$J("expires", 0);
});

Clazz.newMeth(C$, 'getDate$',  function () {
return this.getHeaderFieldDate$S$J("date", 0);
});

Clazz.newMeth(C$, 'getLastModified$',  function () {
return this.getHeaderFieldDate$S$J("last-modified", 0);
});

Clazz.newMeth(C$, 'getHeaderField$S',  function (name) {
return null;
});

Clazz.newMeth(C$, 'getHeaderFields$',  function () {
return $I$(2).EMPTY_MAP;
});

Clazz.newMeth(C$, 'getHeaderFieldInt$S$I',  function (name, Default) {
var value=this.getHeaderField$S(name);
try {
return Integer.parseInt$S(value);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return Default;
});

Clazz.newMeth(C$, 'getHeaderFieldDate$S$J',  function (name, Default) {
var value=this.getHeaderField$S(name);
try {
return java.util.Date.parse$S(value);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return Default;
});

Clazz.newMeth(C$, 'getHeaderFieldKey$I',  function (n) {
return null;
});

Clazz.newMeth(C$, 'getHeaderField$I',  function (n) {
return null;
});

Clazz.newMeth(C$, 'getContent$',  function () {
this.is=this.getInputStream$();
return this.getContentHandler$().getContent$java_net_URLConnection(this);
});

Clazz.newMeth(C$, 'getContent$java_net_URLConnection',  function (uc) {
return uc.getInputStream$();
});

Clazz.newMeth(C$, 'getContent$ClassA',  function (classes) {
this.getInputStream$();
return this.getContentHandler$().getContent$java_net_URLConnection$ClassA(this, classes);
});

Clazz.newMeth(C$, 'getPermission$',  function () {
return $I$(7).ALL_PERMISSION;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + ":" + this.url ;
});

C$.$static$=function(){C$.$static$=0;
C$.defaultAllowUserInteraction=false;
C$.defaultUseCaches=true;
C$.fileNameMapLoaded=false;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:19 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
