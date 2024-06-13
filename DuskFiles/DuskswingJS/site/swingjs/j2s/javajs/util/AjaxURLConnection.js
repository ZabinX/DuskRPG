(function(){var P$=Clazz.newPackage("javajs.util"),p$1={},I$=[[0,'java.util.Hashtable',['javajs.util.AjaxURLConnection','.AjaxHttpsURLConnection'],'java.util.HashMap','java.util.ArrayList','java.io.ByteArrayOutputStream','javajs.util.AjaxURLConnection','javajs.util.Rdr']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AjaxURLConnection", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.net.HttpURLConnection');
C$.$classes$=[['AjaxHttpsURLConnection',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.postOut="";
},1);

C$.$fields$=[['S',['postOut','statusText'],'O',['bytesOut','byte[]','streamOut','java.io.ByteArrayOutputStream','ajax','java.lang.Object','+info','+formData']]
,['O',['jsutil','swingjs.api.JSUtilI','urlCache','java.util.Map','NETWORK_ERROR','int[]']]]

Clazz.newMeth(C$, 'newConnection$java_net_URL',  function (url) {
return (url.getProtocol$() === "https"  ? Clazz.new_($I$(2,1).c$$java_net_URL,[url]) : Clazz.new_(C$.c$$java_net_URL,[url]));
}, 1);

Clazz.newMeth(C$, 'c$$java_net_URL',  function (url) {
;C$.superclazz.c$$java_net_URL.apply(this,[url]);C$.$init$.apply(this);
this.ajax=url.ajax ||null;
}, 1);

Clazz.newMeth(C$, 'getHeaderField$S',  function (name) {
try {
if (this.getResponseCode$() != -1) {
var info=this.info;
return info && info.xhr && info.xhr.getResponseHeader(name) ||null;
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return null;
});

Clazz.newMeth(C$, 'getHeaderFields$',  function () {
var map=Clazz.new_($I$(3,1));
try {
if (this.getResponseCode$() != -1) {
var data=null;
var info=this.info;

data = info && info.xhr && info.xhr.getAllResponseHeaders(); data && (data = data.trim().split("\n"));
if (data != null ) {
for (var i=0; i < data.length; i++) {
var parts=data[i].split$S(":");
var key=parts[0].trim$();
var list=map.get$O(key);
if (list == null ) map.put$O$O(key, list=Clazz.new_($I$(4,1)));
list.add$O(parts[1].trim$());
}
}}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return map;
});

Clazz.newMeth(C$, 'doAjax$Z$java_util_function_Function',  function (isBinary, whenDone) {
p$1.getBytesOut.apply(this, []);
var J2S=self.J2S ||null;
var info=this.ajax;

info = info || {}; if (!info.dataType) { info.isBinary = !!isBinary; } info.type = this.method;
whenDone && (info.fWhenDone = function(data){whenDone.apply$O(data)});
this.info=info;
var map=this.getRequestProperties$();
var isnocache=false;
var type=null;
if (map != null ) {
for (var e, $e = map.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var key=e.getKey$();
switch (key.toLowerCase$()) {
case "content-type":
type=e.getValue$().get$I(0);
break;
case "cache-control":
isnocache=e.getValue$().get$I(0).equalsIgnoreCase$S("no-cache");
break;
}
var s="";
var values=e.getValue$();
for (var i=0; i < values.size$(); i++) {
s+=(i == 0 ? "" : ", ") + values.get$I(i);
}
if (s.length$() > 0) {

info.headers || (info.headers = {}); //info.headers[key] = s;
}}
}if ("application/json".equals$O(type)) {

info.contentType = false;
}var result;
var myURL=this.url.toString();
if (myURL.startsWith$S("file:/TEMP/")) {
result=C$.jsutil.getCachedBytes$S(myURL);
var isEmpty=(result == null );
if (whenDone != null ) {
whenDone.apply$O(isEmpty ? null : result);
return null;
}this.responseCode=(isEmpty ? 404 : 202);
return result;
}if (myURL.startsWith$S("file:")) {
var j2s=Clazz._Loader.getJ2SLibBase() ||null;
if (myURL.startsWith$S("file:/./")) {
myURL=j2s + myURL.substring$I(7);
} else if (myURL.startsWith$S("file:/" + j2s)) {
myURL=myURL.substring$I(6);
} else {
var base=p$1.getFileDocumentDir.apply(this, []);
if (base != null  && myURL.indexOf$S(base) == 0 ) {
myURL=myURL.substring$I(base.length$());
} else {
var path=C$.jsutil.getCodeBase$();
if (path != null ) {
j2s=path.toString();
if (myURL.indexOf$S(j2s) >= 0) myURL=path + myURL.split$S(j2s)[1];
 else myURL=path + myURL.substring$I(5);
}}}}result=J2S.doAjax(myURL, this.postOut, this.bytesOut, info);
if (whenDone != null ) return null;
p$1.setJQueryResponseCodeFromJQuery$O.apply(this, [result]);
return result;
}, p$1);

Clazz.newMeth(C$, 'setJQueryResponseCodeFromJQuery$O',  function (result) {
var info=this.info;
var isEmpty=false;

isEmpty = (!result || result.length == 2 && result[0] == 13 && result[1] == 10); if (isEmpty) result = new Int8Array;
this.statusText=info.xhr.statusText ||"";
this.responseCode=(!isEmpty ? info.xhr.status ||0 : p$1.getAJAXStatusError.apply(this, []));
}, p$1);

Clazz.newMeth(C$, 'getAJAXStatusError',  function () {
var info=this.info;
return info.xhr.status > 0 ? info.xhr.status : !info.xhr.statusText || (info.xhr.statusText+"").indexOf("NetworkError:") == 0 ? 400 :404;
}, p$1);

Clazz.newMeth(C$, 'getFileDocumentDir',  function () {
var base=C$.jsutil.getDocumentBase$().getPath$();
var pt=base.lastIndexOf$S("/");
return "file:" + base.substring$I$I(0, pt + 1);
}, p$1);

Clazz.newMeth(C$, 'connect$',  function () {
});

Clazz.newMeth(C$, 'outputBytes$BA',  function (bytes) {
this.bytesOut=bytes;
});

Clazz.newMeth(C$, 'setFormData$java_util_Map',  function (map) {
this.formData=map;
});

Clazz.newMeth(C$, ['addFormData$S$O$S$S','addFormData'],  function (name, value, contentType, fileName) {
if (this.formData == null ) this.formData=Clazz.array(java.lang.Object, [0, null]);

this.formData.push([name, value, contentType, fileName]);
});

Clazz.newMeth(C$, 'getBytesOut',  function () {
if (this.streamOut != null ) {
if (this.formData == null ) this.formData=this.streamOut._form_data ||null;
if (this.formData == null ) {
this.bytesOut=this.streamOut.toByteArray$();
}this.streamOut=null;
}if (this.formData != null ) {
var method=("GET".equals$O(this.method) ? "POST" : this.method);
var map=this.ajax=(1 ? { data:new FormData(), processData:false, contentType:false, type:method, j2sNoProxy:true } :null);
if (Clazz.instanceOf(this.formData, "java.util.Map")) {
var data=this.formData;
for (var e, $e = data.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var key=e.getKey$();
var val=e.getValue$();
if (Clazz.instanceOf(val, Clazz.array(Byte.TYPE, -1))) {
val=C$.toBlob$BA$S(val, null);
}
map.data.append(key, val);
}
} else {
var adata=this.formData;
for (var i=0; i < adata.length; i++) {
var d=adata[i];
var name=d[0];
var value=d[1];
var contentType=d[2];
var filename=d[3];
if (Clazz.instanceOf(value, "java.lang.String") && (contentType != null  || filename != null  ) ) {
value=(value).getBytes$();
}if (Clazz.instanceOf(value, Clazz.array(Byte.TYPE, -1))) {
value=C$.toBlob$BA$S(value, contentType);
}
(filename ? map.data.append(name, value, filename) : map.data.append(name, value));
}
}this.formData=null;
this.bytesOut=null;
this.useCaches=false;
}return this.bytesOut;
}, p$1);

Clazz.newMeth(C$, 'toBlob$BA$S',  function (val, contentType) {
return (contentType == null ? new Blob([val]) : new Blob([val],{type: contentType})) ||null;
}, 1);

Clazz.newMeth(C$, 'outputString$S',  function (post) {
this.postOut=post;
});

Clazz.newMeth(C$, 'getOutputStream$',  function () {
return this.streamOut=Clazz.new_($I$(5,1));
});

Clazz.newMeth(C$, 'getInputStream$',  function () {
var is=this.is ||null;
if (is != null ) return is;
this.responseCode=-1;
is=p$1.getInputStreamAndResponse$Z.apply(this, [false]);
switch (this.responseCode) {
}
if (this.responseCode == 400) {
throw Clazz.new_(Clazz.load('java.net.UnknownHostException').c$$S,[this.url.toString()]);
} else if (this.responseCode > 400 && this.responseCode != 404 ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Server returned HTTP response code: " + this.responseCode + " for URL: " + this.url ]);
}if (is == null ) throw Clazz.new_(Clazz.load('java.io.FileNotFoundException').c$$S,["opening " + this.url]);
return is;
});

Clazz.newMeth(C$, 'getBytesAsync$java_util_function_Function',  function (whenDone) {
p$1.getInputStreamAsync$java_util_function_Function.apply(this, [((P$.AjaxURLConnection$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AjaxURLConnection$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['apply$java_io_InputStream','apply$O'],  function (is) {
try {
if (is != null ) {
this.$finals$.whenDone.apply$O(is.readAllBytes$() ||null);
return null;
}} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
this.$finals$.whenDone.apply$O(null);
return null;
});
})()
), Clazz.new_(P$.AjaxURLConnection$1.$init$,[this, {whenDone:whenDone}]))]);
});

Clazz.newMeth(C$, 'getInputStreamAsync$java_util_function_Function',  function (whenDone) {
var is=is = this.is ||null;
if (is != null ) {
p$1.isNetworkError$java_io_BufferedInputStream.apply(this, [is]);
whenDone.apply$O(is);
return;
}this.responseCode=-1;
p$1.getInputStreamAndResponseAsync$java_util_function_Function.apply(this, [whenDone]);
}, p$1);

Clazz.newMeth(C$, 'getInputStreamAndResponseAsync$java_util_function_Function',  function (whenDone) {
var is=C$.getAttachedStreamData$java_net_URL$Z(this.url, false);
if (is != null  || p$1.doCache.apply(this, []) && (is=p$1.getCachedStream$Z.apply(this, [false])) != null   ) {
whenDone.apply$O(is);
return;
}p$1.doAjax$Z$java_util_function_Function.apply(this, [true, ((P$.AjaxURLConnection$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AjaxURLConnection$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'apply$O',  function (response) {
if (Clazz.instanceOf(response, "java.lang.String")) {
this.$finals$.whenDone.apply$O(null);
return null;
}p$1.setJQueryResponseCodeFromJQuery$O.apply(this.b$['javajs.util.AjaxURLConnection'], [response]);
var is=$I$(6).attachStreamData$java_net_URL$O(this.b$['javajs.util.AjaxURLConnection'].url, response);
if (p$1.doCache.apply(this.b$['javajs.util.AjaxURLConnection'], []) && is != null  ) {
p$1.isNetworkError$java_io_BufferedInputStream.apply(this.b$['javajs.util.AjaxURLConnection'], [is]);
p$1.setCachedStream.apply(this.b$['javajs.util.AjaxURLConnection'], []);
} else if (p$1.isNetworkError$java_io_BufferedInputStream.apply(this.b$['javajs.util.AjaxURLConnection'], [is])) {
is=null;
}this.$finals$.whenDone.apply$O(is);
return null;
});
})()
), Clazz.new_(P$.AjaxURLConnection$2.$init$,[this, {whenDone:whenDone}]))]);
}, p$1);

Clazz.newMeth(C$, 'getInputStreamAndResponse$Z',  function (allowNWError) {
var is=C$.getAttachedStreamData$java_net_URL$Z(this.url, false);
if (is != null  || p$1.doCache.apply(this, []) && (is=p$1.getCachedStream$Z.apply(this, [allowNWError])) != null   ) {
return is;
}is=C$.attachStreamData$java_net_URL$O(this.url, p$1.doAjax$Z$java_util_function_Function.apply(this, [this.ajax == null , null]));
if (p$1.doCache.apply(this, []) && is != null  ) {
p$1.isNetworkError$java_io_BufferedInputStream.apply(this, [is]);
p$1.setCachedStream.apply(this, []);
return is;
}p$1.isNetworkError$java_io_BufferedInputStream.apply(this, [is]);
return is;
}, p$1);

Clazz.newMeth(C$, 'doCache',  function () {
if (!this.useCaches || !this.getRequestMethod$().equals$O("POST") ) {
return this.useCaches;
}var cc=this.getRequestProperty$S("Cache-Control");
return cc == null  || !cc.equals$O("no-cache") ;
}, p$1);

Clazz.newMeth(C$, 'getCachedStream$Z',  function (allowNWError) {
var data=C$.urlCache.get$O(p$1.getCacheKey.apply(this, []));
if (data == null ) return null;
var url=this.url;
if (Clazz.instanceOf(data, Clazz.array(Byte.TYPE, -1))) {

url._streamData = data
;}var isAjax=url.ajax ||false;
var bis=C$.getBIS$O$Z(data, isAjax);
return (!p$1.isNetworkError$java_io_BufferedInputStream.apply(this, [bis]) || allowNWError  ? bis : null);
}, p$1);

Clazz.newMeth(C$, 'getBIS$O$Z',  function (data, isJSON) {
if (data == null ) return null;
var jsonData=(isJSON ? data : null);
if (isJSON) {

data = JSON.stringify(data);
}var bis=$I$(7).toBIS$O(data);
if (isJSON) {

bis._jsonData = jsonData;
}return bis;
}, 1);

Clazz.newMeth(C$, 'setCachedStream',  function () {
var data=this.url._streamData ||null;
if (data != null ) {
var code=this.responseCode;

data._responseCode = code;
C$.urlCache.put$O$O(p$1.getCacheKey.apply(this, []), data);
}}, p$1);

Clazz.newMeth(C$, 'getCacheKey',  function () {
var key=this.url.toString();
if (this.getRequestMethod$().equals$O("POST")) {
key+=(this.postOut != null  ? this.postOut.hashCode$() : 0) | (p$1.getBytesOut.apply(this, []) != null  ? p$1.getBytesOut.apply(this, []).hashCode$() : 0);
}return key;
}, p$1);

Clazz.newMeth(C$, 'isNetworkError$java_io_BufferedInputStream',  function (is) {
if (this.responseCode > 0) {
return (this.responseCode >= 400);
}if (is == null ) {
if (this.ajax != null ) {
this.responseCode=p$1.getAJAXStatusError.apply(this, []);
}} else {
this.responseCode=200;
if (is._jsonData ||false) return false;
is.mark$I(15);
var bytes=Clazz.array(Byte.TYPE, [13]);
try {
is.read$BA(bytes);
is.reset$();
for (var i=C$.NETWORK_ERROR.length; --i >= 0; ) if (bytes[i] != C$.NETWORK_ERROR[i]) return false;

} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
}this.responseCode=404;
return true;
}, p$1);

Clazz.newMeth(C$, 'getAttachedStreamData$java_net_URL$Z',  function (url, andDelete) {
var data=null;
var isJSON=false;

data = url._streamData; if (andDelete) url._streamData = null;
isJSON = (data && url.ajax && url.ajax.dataType == "json")
return C$.getBIS$O$Z(data, isJSON);
}, 1);

Clazz.newMeth(C$, 'attachStreamData$java_net_URL$O',  function (url, o) {

url._streamData = o;
return C$.getBIS$O$Z(o, url.ajax ||false);
}, 1);

Clazz.newMeth(C$, 'getContents$',  function () {
return p$1.doAjax$Z$java_util_function_Function.apply(this, [false, null]);
});

Clazz.newMeth(C$, 'getResponseCode$',  function () {
if (this.responseCode == -1) {
try {
p$1.getInputStreamAndResponse$Z.apply(this, [true]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.responseCode=400;
} else {
throw e;
}
}
}if (this.responseCode == 400) {
throw Clazz.new_(Clazz.load('java.net.UnknownHostException').c$$S,[this.url.toString()]);
}return this.responseCode;
});

Clazz.newMeth(C$, 'disconnect$',  function () {
});

Clazz.newMeth(C$, 'usingProxy$',  function () {
return false;
});

Clazz.newMeth(C$, 'getContentLength$',  function () {
try {
var is=this.getInputStream$();
return is.available$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return -1;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'toString',  function () {
return (this.url == null  ? "[AjaxURLConnection]" : this.url.toString());
});

C$.$static$=function(){C$.$static$=0;
C$.jsutil=null;
{
try {
C$.jsutil=Clazz.forName("swingjs.JSUtil").newInstance$();
} catch (e) {
if (Clazz.exceptionOf(e,"InstantiationException") || Clazz.exceptionOf(e,"IllegalAccessException") || Clazz.exceptionOf(e,"ClassNotFoundException")){
e.printStackTrace$();
} else {
throw e;
}
}
};
C$.urlCache=Clazz.new_($I$(1,1));
C$.NETWORK_ERROR=Clazz.array(Integer.TYPE, -1, [78, 101, 116, 119, 111, 114, 107, 69, 114, 114, 111, 114]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.AjaxURLConnection, "AjaxHttpsURLConnection", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'javajs.util.AjaxURLConnection');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_net_URL',  function (url) {
;C$.superclazz.c$$java_net_URL.apply(this,[url]);C$.$init$.apply(this);
}, 1);

C$.$static$=function(){C$.$static$=0;
{

C$.implementz = [Clazz.load("javax.net.ssl.HttpsURLConnection")];
};
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
