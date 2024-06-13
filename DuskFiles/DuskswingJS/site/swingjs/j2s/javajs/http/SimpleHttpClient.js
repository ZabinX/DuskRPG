(function(){var P$=Clazz.newPackage("javajs.http"),p$1={},p$2={},I$=[[0,'java.util.HashMap','java.util.ArrayList',['javajs.http.SimpleHttpClient','.Request','.FormData'],'java.io.FileInputStream','javajs.http.SimpleHttpClient',['javajs.http.SimpleHttpClient','.Response'],'Thread','java.net.URL','java.util.LinkedHashMap','java.net.URLEncoder',['javajs.http.SimpleHttpClient','.Request'],'java.io.ByteArrayOutputStream','java.net.URI']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SimpleHttpClient", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'javajs.http.HttpClient');
C$.$classes$=[['AjaxURLConnection',1024],['Request',0],['Response',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'wwwEncode$java_util_List',  function (queryData) {
var htGetParams=Clazz.new_($I$(9,1));
for (var i=0; i < queryData.size$(); i++) {
var fd=queryData.get$I(i);
htGetParams.put$O$O(fd.getName$(), fd.getData$().toString());
}
var data="";
for (var e, $e = htGetParams.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
data+="&" + e.getKey$() + "=" + C$.encodeURI$S(e.getValue$()) ;
}
return data.substring$I(1);
}, 1);

Clazz.newMeth(C$, 'encodeURI$S',  function (value) {
try {
return $I$(10,"encode$S$S",[value.replace$C$C(" ", "\u0000"), "UTF-8"]).replaceAll$S$S("%00", "%20");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'get$java_net_URI',  function (uri) {
return Clazz.new_($I$(11,1).c$$java_net_URI$S,[this, null, uri, "GET"]);
});

Clazz.newMeth(C$, 'head$java_net_URI',  function (uri) {
return Clazz.new_($I$(11,1).c$$java_net_URI$S,[this, null, uri, "HEAD"]);
});

Clazz.newMeth(C$, 'post$java_net_URI',  function (uri) {
return Clazz.new_($I$(11,1).c$$java_net_URI$S,[this, null, uri, "POST"]);
});

Clazz.newMeth(C$, 'put$java_net_URI',  function (uri) {
return Clazz.new_($I$(11,1).c$$java_net_URI$S,[this, null, uri, "PUT"]);
});

Clazz.newMeth(C$, 'delete$java_net_URI',  function (uri) {
return Clazz.new_($I$(11,1).c$$java_net_URI$S,[this, null, uri, "DELETE"]);
});

Clazz.newMeth(C$, 'getBytes$java_io_InputStream',  function (is) {
var bos=Clazz.new_($I$(12,1).c$$I,[16384]);
var buf=Clazz.array(Byte.TYPE, [16384]);
var n=0;
while ((n=is.read$BA(buf)) >= 0){
bos.write$BA$I$I(buf, 0, n);
}
is.close$();
return bos.toByteArray$();
}, 1);

Clazz.newMeth(C$, 'createRequest$javajs_http_HttpClient$S$S',  function (client, method, url) {
var uri=null;
try {
uri=Clazz.new_($I$(13,1).c$$S,[url]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.URISyntaxException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$Throwable,[e]);
} else {
throw e;
}
}
switch (method.toUpperCase$()) {
case "HEAD":
return client.head$java_net_URI(uri);
case "GET":
return client.get$java_net_URI(uri);
case "POST":
return client.post$java_net_URI(uri);
case "PUT":
return client.put$java_net_URI(uri);
case "DELETE":
return client.delete$java_net_URI(uri);
default:
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Unknown method:" + method]);
}
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.SimpleHttpClient, "AjaxURLConnection", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.net.HttpURLConnection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_net_URL',  function (u) {
;C$.superclazz.c$$java_net_URL.apply(this,[u]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SimpleHttpClient, "Request", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['javajs.http.HttpClient','javajs.http.HttpClient.HttpRequest']]);
C$.$classes$=[['FormData',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.htHeaders=Clazz.new_($I$(1,1));
this.hasFormBody=false;
},1);

C$.$fields$=[['Z',['hasFormBody','isWWWencoded'],'S',['method'],'O',['uri','java.net.URI','htHeaders','java.util.Map','queryData','java.util.List','+formData']]]

Clazz.newMeth(C$, 'c$$java_net_URI$S',  function (uri, method) {
;C$.$init$.apply(this);
this.uri=uri;
this.method=method.toUpperCase$();
switch (method) {
case "GET":
case "DELETE":
this.hasFormBody=false;
break;
case "HEAD":
this.hasFormBody=false;
break;
case "PUT":
case "POST":
this.hasFormBody=true;
break;
}
}, 1);

Clazz.newMeth(C$, 'getMethod$',  function () {
return this.method;
});

Clazz.newMeth(C$, 'getUri$',  function () {
return this.uri;
});

Clazz.newMeth(C$, 'addHeader$S$S',  function (name, value) {
this.htHeaders.put$O$O(name, value);
if (name.equals$O("Content-Type") && value.startsWith$S("application/x-www-form-urlencoded") ) {
this.isWWWencoded=true;
}return this;
});

Clazz.newMeth(C$, 'addQueryParameter$S$S',  function (name, value) {
if (name == null ) {
this.clearFormParts$S(name);
return this;
}if (this.queryData == null ) this.queryData=Clazz.new_($I$(2,1));
this.queryData.add$O(Clazz.new_($I$(3,1).c$$S$O$S$S,[this, null, name, value, null, null]));
return this;
});

Clazz.newMeth(C$, 'addFormPart$S$S',  function (name, value) {
return p$1.addFormField$S$O$S$S.apply(this, [name, value, null, null]);
});

Clazz.newMeth(C$, 'addFilePart$S$S$S$S',  function (name, fileData, contentType, fileName) {
return p$1.addFormField$S$O$S$S.apply(this, [name, fileData.getBytes$(), contentType, fileName]);
});

Clazz.newMeth(C$, 'addFilePart$S$java_io_File$S$S',  function (name, file, contentType, fileName) {
return p$1.addFormField$S$O$S$S.apply(this, [name, p$1.toBytes$O.apply(this, [file]), contentType, fileName]);
});

Clazz.newMeth(C$, 'addFilePart$S$java_io_InputStream$S$S',  function (name, stream, contentType, fileName) {
return p$1.addFormField$S$O$S$S.apply(this, [name, p$1.toBytes$O.apply(this, [stream]), contentType, fileName]);
});

Clazz.newMeth(C$, 'addFormField$S$O$S$S',  function (name, data, contentType, fileName) {
if (data == null ) {
this.clearFormParts$S(name);
return this;
}if (this.formData == null ) this.formData=Clazz.new_($I$(2,1));
this.formData.add$O(Clazz.new_([this, null, name, Clazz.instanceOf(data, "java.lang.String") ? data : p$1.toBytes$O.apply(this, [data]), contentType, fileName],$I$(3,1).c$$S$O$S$S));
return this;
}, p$1);

Clazz.newMeth(C$, 'clearQueryParameters$S',  function (name) {
if (this.queryData != null ) {
for (var i=0; i < this.queryData.size$(); i++) if (name == null  || this.queryData.get$I(i).getName$().equals$O(name) ) {
this.queryData.remove$I(i);
}
}return this;
});

Clazz.newMeth(C$, 'clearFormParts$S',  function (name) {
if (this.formData != null ) {
for (var i=0; i < this.formData.size$(); i++) if (name == null  || this.formData.get$I(i).getName$().equals$O(name) ) {
this.formData.remove$I(i);
}
}return this;
});

Clazz.newMeth(C$, 'toBytes$O',  function (data) {
if (data == null  || Clazz.instanceOf(data, Clazz.array(Byte.TYPE, -1)) ) {
return data;
}if (Clazz.instanceOf(data, "java.io.File")) {
try {
var fis=Clazz.new_($I$(4,1).c$$java_io_File,[data]);
try {
return $I$(5).getBytes$java_io_InputStream(fis);

}finally{/*res*/fis&&fis.close$&&fis.close$();}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
return null;
} else {
throw e;
}
}
}if (Clazz.instanceOf(data, "java.io.InputStream")) {
try {
var is=data;
try {
return $I$(5).getBytes$java_io_InputStream(is);

}finally{/*res*/is&&is.close$&&is.close$();}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
return null;
} else {
throw e;
}
}
}return data.toString().getBytes$();
}, p$1);

Clazz.newMeth(C$, 'execute$',  function () {
return p$1.executeImpl$javajs_http_SimpleHttpClient_Response.apply(this, [Clazz.new_($I$(6,1).c$$java_util_function_Consumer$java_util_function_BiConsumer$java_util_function_BiConsumer,[this, null, null, null, null])]);
});

Clazz.newMeth(C$, 'executeAsync$java_util_function_Consumer$java_util_function_BiConsumer$java_util_function_BiConsumer',  function (succeed, fail, always) {
p$1.executeImpl$javajs_http_SimpleHttpClient_Response.apply(this, [Clazz.new_($I$(6,1).c$$java_util_function_Consumer$java_util_function_BiConsumer$java_util_function_BiConsumer,[this, null, succeed, fail, always])]);
});

Clazz.newMeth(C$, 'executeImpl$javajs_http_SimpleHttpClient_Response',  function (r) {
var runner=((P$.SimpleHttpClient$Request$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SimpleHttpClient$Request$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'run$',  function () {
try {
if (this.b$['javajs.http.SimpleHttpClient.Request'].hasFormBody) this.b$['javajs.http.SimpleHttpClient.Request'].fulfillPost$javajs_http_SimpleHttpClient_Response.apply(this.b$['javajs.http.SimpleHttpClient.Request'], [this.$finals$.r]);
 else this.b$['javajs.http.SimpleHttpClient.Request'].fulfillGet$javajs_http_SimpleHttpClient_Response.apply(this.b$['javajs.http.SimpleHttpClient.Request'], [this.$finals$.r]);
} catch (e) {
this.$finals$.r.handleError$Throwable(e);
}
});
})()
), Clazz.new_(P$.SimpleHttpClient$Request$1.$init$,[this, {r:r}]));
if (r.isAsync) Clazz.new_($I$(7,1).c$$Runnable,[runner]).start$();
 else runner.run$();
return r;
}, p$1);

Clazz.newMeth(C$, 'fulfillGet$javajs_http_SimpleHttpClient_Response',  function (r) {
return r.getResponse$java_net_HttpURLConnection$javajs_http_SimpleHttpClient_Request(p$1.getConnection$java_net_URL.apply(this, [p$1.createURL.apply(this, [])]), this);
});

Clazz.newMeth(C$, 'createURL',  function () {
var data="";
if (this.queryData != null ) {
data=$I$(5).wwwEncode$java_util_List(this.queryData);
}return (data.length$() > 0 ? Clazz.new_([this.uri.toString() + "?" + data ],$I$(8,1).c$$S) : this.uri.toURL$());
}, p$1);

Clazz.newMeth(C$, 'fulfillPost$javajs_http_SimpleHttpClient_Response',  function (r) {
var conn=p$1.getConnection$java_net_URL.apply(this, [p$1.createURL.apply(this, [])]);
p$1.sendFormData$java_net_HttpURLConnection$java_util_List.apply(this, [conn, this.formData]);
return r.getResponse$java_net_HttpURLConnection$javajs_http_SimpleHttpClient_Request(conn, this);
});

Clazz.newMeth(C$, 'sendFormData$java_net_HttpURLConnection$java_util_List',  function (conn, formData) {
if (formData == null ) return;

{}
for (var i=0, n=formData.size$(); i < n; i++) {
var data=formData.get$I(i);
(conn).addFormData$S$O$S$S(data.name, data.data, data.contentType, data.fileName);
}
}, p$1);

Clazz.newMeth(C$, 'getConnection$java_net_URL',  function (url) {
try {
var conn=url.openConnection$();
conn.setUseCaches$Z(false);
if (!this.method.equals$O("HEAD")) conn.setDoInput$Z(true);
if (this.hasFormBody) conn.setDoOutput$Z(true);
conn.setRequestMethod$S(this.method);
for (var e, $e = this.htHeaders.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
conn.addRequestProperty$S$S(e.getKey$(), e.getValue$());
}
return conn;
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.MalformedURLException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,[e + ": " + this.uri ]);
} else {
throw e;
}
}
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.SimpleHttpClient.Request, "FormData", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['name','contentType','fileName'],'O',['data','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$S$O$S$S',  function (name, data, contentType, fileName) {
;C$.$init$.apply(this);
this.name=name;
this.data=data;
this.contentType=contentType;
this.fileName=fileName;
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'getData$',  function () {
return this.data;
});

Clazz.newMeth(C$, 'getContentType$',  function () {
return this.contentType;
});

Clazz.newMeth(C$, 'getFileName$',  function () {
return this.fileName;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.SimpleHttpClient, "Response", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['javajs.http.HttpClient','javajs.http.HttpClient.HttpResponse']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.state=0;
},1);

C$.$fields$=[['Z',['isAsync'],'I',['state'],'S',['method'],'O',['inputStream','java.io.InputStream','conn','java.net.HttpURLConnection','succeed','java.util.function.Consumer','fail','java.util.function.BiConsumer','+always','uri','java.net.URI']]]

Clazz.newMeth(C$, 'c$$java_util_function_Consumer$java_util_function_BiConsumer$java_util_function_BiConsumer',  function (succeed, fail, always) {
;C$.$init$.apply(this);
this.succeed=succeed;
this.fail=fail;
this.always=always;
this.isAsync=(succeed != null  || fail != null   || always != null  );
}, 1);

Clazz.newMeth(C$, 'getResponse$java_net_HttpURLConnection$javajs_http_SimpleHttpClient_Request',  function (conn, request) {
this.conn=conn;
this.method=request.method;
this.uri=request.uri;
this.state=0;
if (!this.isAsync) {
this.state=conn.getResponseCode$();
return this;
}Clazz.new_([((P$.SimpleHttpClient$Response$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "SimpleHttpClient$Response$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'run$',  function () {
var exception=null;
try {
if (this.b$['javajs.http.SimpleHttpClient.Response'].method.equals$O.apply(this.b$['javajs.http.SimpleHttpClient.Response'].method, ["HEAD"])) {
this.b$['javajs.http.SimpleHttpClient.Response'].state=this.$finals$.conn.getResponseCode$.apply(this.$finals$.conn, []);
} else {
var f=((P$.SimpleHttpClient$Response$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "SimpleHttpClient$Response$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['apply$BA','apply$O'],  function (t) {
this.b$['javajs.http.SimpleHttpClient.Response'].state=400;
try {
this.b$['javajs.http.SimpleHttpClient.Response'].state=this.b$['javajs.http.SimpleHttpClient.Response'].conn.getResponseCode$.apply(this.b$['javajs.http.SimpleHttpClient.Response'].conn, []);
this.b$['javajs.http.SimpleHttpClient.Response'].doCallback$java_io_IOException.apply(this.b$['javajs.http.SimpleHttpClient.Response'], [null]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.b$['javajs.http.SimpleHttpClient.Response'].doCallback$java_io_IOException.apply(this.b$['javajs.http.SimpleHttpClient.Response'], [e]);
} else {
throw e;
}
}
return null;
});
})()
), Clazz.new_(P$.SimpleHttpClient$Response$1.$init$,[this, null]));
{
return conn.getBytesAsync$java_util_function_Function(f);
}
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
exception=e;
} else {
throw e;
}
}
this.b$['javajs.http.SimpleHttpClient.Response'].doCallback$java_io_IOException.apply(this.b$['javajs.http.SimpleHttpClient.Response'], [exception]);
});
})()
), Clazz.new_(P$.SimpleHttpClient$Response$lambda1.$init$,[this, {conn:conn}]))],$I$(7,1).c$$Runnable).start$();
return this;
});

Clazz.newMeth(C$, 'doCallback$java_io_IOException',  function (e) {
var ok=(e == null  && this.state < 400 );
if (ok && this.succeed != null  ) this.succeed.accept$O(this);
 else if (!ok && this.fail != null  ) this.fail.accept$O$O(this, e);
if (this.always != null ) this.always.accept$O$O(this, e);
});

Clazz.newMeth(C$, 'handleError$Throwable',  function (e) {
if (!(Clazz.instanceOf(e, "java.io.IOException"))) {
e=Clazz.new_(Clazz.load('java.io.IOException').c$$Throwable,[e]);
}if (Clazz.instanceOf(e, "java.net.UnknownHostException")) this.state=400;
var exception=e;
if (this.isAsync) {
if (this.fail != null ) {
this.fail.accept$O$O(this, exception);
e=null;
}if (this.always != null ) {
this.always.accept$O$O(this, exception);
e=null;
}}return e == null ;
});

Clazz.newMeth(C$, 'getStatusCode$',  function () {
try {
return (this.state != 0 ? this.state : this.conn.getResponseCode$());
} catch (e) {
this.handleError$Throwable(e);
return this.state;
}
});

Clazz.newMeth(C$, 'getHeaders$',  function () {
var headers=Clazz.new_($I$(9,1));
var map=this.conn.getHeaderFields$();
for (var e, $e = map.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var name=e.getKey$();
var list=e.getValue$();
var val=null;
for (var i=0; i < list.size$(); i++) val=(val == null  ? "" : val + ",") + list.get$I(i);

if (val != null ) headers.put$O$O(name, val);
}
return headers;
});

Clazz.newMeth(C$, 'getText$',  function () {
return  String.instantialize($I$(5,"getBytes$java_io_InputStream",[this.getContent$()]));
});

Clazz.newMeth(C$, 'getContent$',  function () {
if (this.conn == null ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Connection could not be opened"]);
try {
return (this.inputStream == null  ? (this.inputStream=this.conn.getInputStream$()) : this.inputStream);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
if (this.state < 400) this.state=p$2.decodeServerException$S.apply(this, [e.toString()]);
throw Clazz.new_(Clazz.load('java.io.IOException').c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'decodeServerException$S',  function (msg) {
try {
return Integer.parseInt$S(msg.substring$I(msg.indexOf$S("code:") + 5));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return 404;
}, p$2);

Clazz.newMeth(C$, 'close$',  function () {
this.conn.disconnect$();
});

Clazz.newMeth(C$, 'toString',  function () {
return "SimpleHttpClient " + this.method + " state=" + this.state + " uri=" + this.uri ;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
