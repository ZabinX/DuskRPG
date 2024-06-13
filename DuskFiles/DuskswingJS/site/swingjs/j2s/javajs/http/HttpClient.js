(function(){var P$=Clazz.newPackage("javajs.http"),I$=[[0,'java.io.ByteArrayInputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "HttpClient", function(){
});
C$.$classes$=[['HttpRequest',9],['HttpResponse',9]];
;
(function(){/*i*/var C$=Clazz.newInterface(P$.HttpClient, "HttpRequest", function(){
});
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'addFilePart$S$S$S$S',  function (name, data, contentType, fileName) {
var stream=Clazz.new_([data.getBytes$()],$I$(1,1).c$$BA);
return this.addFilePart$S$java_io_InputStream$S$S(name, stream, contentType, fileName);
});

Clazz.newMeth(C$, 'addFilePart$S$java_io_File',  function (name, file) {
return this.addFilePart$S$java_io_File$S$S(name, file, "application/octet-stream", file.getName$());
});

Clazz.newMeth(C$, 'addFilePart$S$java_io_InputStream',  function (name, stream) {
return this.addFilePart$S$java_io_InputStream$S$S(name, stream, "application/octet-stream", "file");
});
};})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.HttpClient, "HttpResponse", function(){
}, null, 'java.io.Closeable');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getReasonPhrase$',  function () {
switch (this.getStatusCode$()) {
case 100:
return "Continue";
case 101:
return "Switching Protocols";
case 200:
return "OK";
case 201:
return "Created";
case 202:
return "Accepted";
case 203:
return "Non-Authoritative Information";
case 204:
return "No Content";
case 205:
return "Reset Content";
case 206:
return "Partial Content";
case 207:
return "Multi-status";
case 300:
return "Multiple Choices";
case 301:
return "Moved Permanently";
case 302:
return "Found";
case 303:
return "See Other";
case 304:
return "Not Modified";
case 305:
return "Use Proxy";
case 307:
return "Temporary Redirect";
case 400:
return "Bad Request";
case 401:
return "Unauthorized";
case 402:
return "Payment Required";
case 403:
return "Forbidden";
case 404:
return "Not Found";
case 405:
return "Method Not Allowed";
case 406:
return "Not Acceptable";
case 407:
return "Proxy Authentication Required";
case 408:
return "Request Timeout";
case 409:
return "Conflict";
case 410:
return "Gone";
case 411:
return "Length Required";
case 412:
return "Precondition Failed";
case 413:
return "Request Entity Too Large";
case 414:
return "Request-URI Too Long";
case 415:
return "Unsupported Media Type";
case 416:
return "Requested Range Not Satisfiable";
case 417:
return "Expectation Failed";
case 422:
return "Unprocessable Entity";
case 423:
return "Locked";
case 424:
return "Failed Dependency";
case 500:
return "Internal Server Error";
case 501:
return "Not Implemented";
case 502:
return "Bad Gateway";
case 503:
return "Service Unavailable";
case 504:
return "Gateway Timeout";
case 505:
return "HTTP Version Not Supported";
case 507:
return "Insufficient Storage";
default:
return "";
}
});

Clazz.newMeth(C$, 'close$',  function () {
});
};})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
