(function(){var P$=Clazz.newPackage("javajs.http"),I$=[[0,'javajs.http.SimpleHttpClient']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JavaHttpPoster");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'post$java_net_HttpURLConnection$java_util_List$Z',  function (conn, formData, isWWWEncoded) {
conn.setRequestMethod$S("POST");
if (isWWWEncoded) {
var os=conn.getOutputStream$();
C$.append$java_io_OutputStream$O(os, $I$(1).wwwEncode$java_util_List(formData));
os.flush$();
} else {
var boundary="---" + Long.$s(System.nanoTime$()) + "---" ;
conn.setRequestProperty$S$S("Content-Type", "multipart/form-data; boundary=" + boundary);
var os=conn.getOutputStream$();
for (var i=0; i < formData.size$(); i++) {
var data=formData.get$I(i);
var name=data.getName$();
var value=data.getData$();
var contentType=data.getContentType$();
var fileName=data.getFileName$();
C$.append$java_io_OutputStream$O(os, "--" + boundary + "\r\n" );
C$.append$java_io_OutputStream$O(os, "Content-Disposition: form-data; name=\"" + name + (fileName == null  ? "" : "\"; filename=\"" + fileName) + "\"" );
if (contentType != null ) {
C$.append$java_io_OutputStream$O(os, "\r\nContent-Type: ");
C$.append$java_io_OutputStream$O(os, contentType == null  ? "application/octet-stream" : contentType);
}C$.append$java_io_OutputStream$O(os, "\r\n\r\n");
C$.append$java_io_OutputStream$O(os, value);
C$.append$java_io_OutputStream$O(os, "\r\n");
}
C$.append$java_io_OutputStream$O(os, "\r\n--" + boundary + "--\r\n" );
os.flush$();
}}, 1);

Clazz.newMeth(C$, 'append$java_io_OutputStream$O',  function (outputStream, val) {
if (Clazz.instanceOf(val, Clazz.array(Byte.TYPE, -1))) {
outputStream.write$BA(val);
} else {
outputStream.write$BA(val.toString().getBytes$());
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
