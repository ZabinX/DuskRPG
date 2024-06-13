(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'java.io.InputStreamReader','java.io.BufferedInputStream','java.io.ByteArrayInputStream','javajs.util.Encoding',['javajs.util.Rdr','.StreamReader'],'java.io.BufferedReader','java.io.StringReader','javajs.util.AU','javajs.util.Base64','javajs.util.SB','javajs.api.Interface','java.io.OutputStream','java.io.BufferedWriter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Rdr", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'javajs.api.GenericLineReader');
C$.$classes$=[['StreamReader',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['reader','java.io.BufferedReader']]
,['O',['b264','byte[]']]]

Clazz.newMeth(C$, 'c$$java_io_BufferedReader',  function (reader) {
;C$.$init$.apply(this);
this.reader=reader;
}, 1);

Clazz.newMeth(C$, 'readNextLine$',  function () {
return this.reader.readLine$();
});

Clazz.newMeth(C$, 'streamToBytes$java_io_InputStream',  function (is) {
var bytes=C$.getLimitedStreamBytes$java_io_InputStream$J(is, -1);
is.close$();
return bytes;
}, 1);

Clazz.newMeth(C$, 'streamToString$java_io_InputStream',  function (is) {
return  String.instantialize(C$.streamToBytes$java_io_InputStream(is));
}, 1);

Clazz.newMeth(C$, 'readCifData$javajs_api_GenericCifDataParser$java_io_BufferedReader',  function (parser, br) {
return parser.set$javajs_api_GenericLineReader$java_io_BufferedReader$Z(null, br, false).getAllCifData$();
}, 1);

Clazz.newMeth(C$, 'bytesToUTF8String$BA',  function (bytes) {
return C$.streamToUTF8String$java_io_BufferedInputStream(Clazz.new_([Clazz.new_($I$(3,1).c$$BA,[bytes])],$I$(2,1).c$$java_io_InputStream));
}, 1);

Clazz.newMeth(C$, 'streamToUTF8String$java_io_BufferedInputStream',  function (bis) {
var data=Clazz.array(String, [1]);
try {
C$.readAllAsString$java_io_BufferedReader$I$Z$SA$I(C$.getBufferedReader$java_io_BufferedInputStream$S(bis, "UTF-8"), -1, true, data, 0);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return data[0];
}, 1);

Clazz.newMeth(C$, 'getBufferedReader$java_io_BufferedInputStream$S',  function (bis, charSet) {
if (C$.getUTFEncodingForStream$java_io_BufferedInputStream(bis) === $I$(4).NONE ) return Clazz.new_([bis, (charSet == null  ? "UTF-8" : charSet)],$I$(5,1).c$$java_io_BufferedInputStream$S);
var bytes=C$.getLimitedStreamBytes$java_io_InputStream$J(bis, -1);
bis.close$();
return C$.getBR$S(charSet == null  ? C$.fixUTF$BA(bytes) :  String.instantialize(bytes, charSet));
}, 1);

Clazz.newMeth(C$, 'fixUTF$BA',  function (bytes) {
var encoding=C$.getUTFEncoding$BA(bytes);
if (encoding !== $I$(4).NONE ) try {
var s= String.instantialize(bytes, encoding.name$().replace$C$C("_", "-"));
switch (encoding) {
case $I$(4).UTF8:
case $I$(4).UTF_16BE:
case $I$(4).UTF_16LE:
s=s.substring$I(1);
break;
default:
break;
}
return s;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
System.out.println$O(e);
} else {
throw e;
}
}
return  String.instantialize(bytes);
}, 1);

Clazz.newMeth(C$, 'getUTFEncoding$BA',  function (bytes) {
if (bytes.length >= 3 && (bytes[0] & 255) == 239  && (bytes[1] & 255) == 187  && (bytes[2] & 255) == 191 ) return $I$(4).UTF8;
if (bytes.length >= 4 && (bytes[0] & 255) == 0  && (bytes[1] & 255) == 0  && (bytes[2] & 255) == 254  && (bytes[3] & 255) == 255 ) return $I$(4).UTF_32BE;
if (bytes.length >= 4 && (bytes[0] & 255) == 255  && (bytes[1] & 255) == 254  && (bytes[2] & 255) == 0  && (bytes[3] & 255) == 0 ) return $I$(4).UTF_32LE;
if (bytes.length >= 2 && (bytes[0] & 255) == 255  && (bytes[1] & 255) == 254 ) return $I$(4).UTF_16LE;
if (bytes.length >= 2 && (bytes[0] & 255) == 254  && (bytes[1] & 255) == 255 ) return $I$(4).UTF_16BE;
return $I$(4).NONE;
}, 1);

Clazz.newMeth(C$, 'getUTFEncodingForStream$java_io_BufferedInputStream',  function (is) {
var abMagic=Clazz.array(Byte.TYPE, [4]);
abMagic[3]=(1|0);
try {
is.mark$I(5);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return $I$(4).NONE;
} else {
throw e;
}
}
is.read$BA$I$I(abMagic, 0, 4);
is.reset$();
return C$.getUTFEncoding$BA(abMagic);
}, 1);

Clazz.newMeth(C$, 'isBase64$javajs_util_SB',  function (sb) {
return (sb.indexOf$S(";base64,") == 0);
}, 1);

Clazz.newMeth(C$, 'isCompoundDocumentS$java_io_InputStream',  function (is) {
return C$.isCompoundDocumentB$BA(C$.getMagic$java_io_InputStream$I(is, 8));
}, 1);

Clazz.newMeth(C$, 'isCompoundDocumentB$BA',  function (bytes) {
return (bytes.length >= 8 && (bytes[0] & 255) == 208  && (bytes[1] & 255) == 207  && (bytes[2] & 255) == 17  && (bytes[3] & 255) == 224  && (bytes[4] & 255) == 161  && (bytes[5] & 255) == 177  && (bytes[6] & 255) == 26  && (bytes[7] & 255) == 225 );
}, 1);

Clazz.newMeth(C$, 'isBZip2S$java_io_InputStream',  function (is) {
return C$.isBZip2B$BA(C$.getMagic$java_io_InputStream$I(is, 3));
}, 1);

Clazz.newMeth(C$, 'isGzipS$java_io_InputStream',  function (is) {
return C$.isGzipB$BA(C$.getMagic$java_io_InputStream$I(is, 2));
}, 1);

Clazz.newMeth(C$, 'isBZip2B$BA',  function (bytes) {
return (bytes != null  && bytes.length >= 3  && (bytes[0] & 255) == 66  && (bytes[1] & 255) == 90  && (bytes[2] & 255) == 104 );
}, 1);

Clazz.newMeth(C$, 'isGzipB$BA',  function (bytes) {
return (bytes != null  && bytes.length >= 2  && (bytes[0] & 255) == 31  && (bytes[1] & 255) == 139 );
}, 1);

Clazz.newMeth(C$, 'isPickleS$java_io_InputStream',  function (is) {
return C$.isPickleB$BA(C$.getMagic$java_io_InputStream$I(is, 2));
}, 1);

Clazz.newMeth(C$, 'isPickleB$BA',  function (bytes) {
return (bytes != null  && bytes.length >= 2  && (bytes[0] & 255) == 125  && (bytes[1] & 255) == 113 );
}, 1);

Clazz.newMeth(C$, 'isMessagePackS$java_io_InputStream',  function (is) {
return C$.isMessagePackB$BA(C$.getMagic$java_io_InputStream$I(is, 2));
}, 1);

Clazz.newMeth(C$, 'isMessagePackB$BA',  function (bytes) {
var b;
return (bytes != null  && bytes.length >= 1  && (((b=bytes[0] & 255)) == 222 || (b & 224) == 128 && bytes[1] != 80  ) );
}, 1);

Clazz.newMeth(C$, 'isPngZipStream$java_io_InputStream',  function (is) {
return C$.isPngZipB$BA(C$.getMagic$java_io_InputStream$I(is, 55));
}, 1);

Clazz.newMeth(C$, 'isPngZipB$BA',  function (bytes) {
return (bytes[50] == 0 && bytes[51] == 80  && bytes[52] == 78  && bytes[53] == 71  && bytes[54] == 74 );
}, 1);

Clazz.newMeth(C$, 'isZipS$java_io_InputStream',  function (is) {
return C$.isZipB$BA(C$.getMagic$java_io_InputStream$I(is, 4));
}, 1);

Clazz.newMeth(C$, 'isZipB$BA',  function (bytes) {
return (bytes.length >= 4 && bytes[0] == 80  && bytes[1] == 75  && bytes[2] == 3  && bytes[3] == 4 );
}, 1);

Clazz.newMeth(C$, 'getMagic$java_io_InputStream$I',  function (is, n) {
var abMagic=(n > 264 ? Clazz.array(Byte.TYPE, [n]) : C$.b264 == null  ? (C$.b264=Clazz.array(Byte.TYPE, [265])) : C$.b264);
try {
abMagic[264]=(-1|0);
is.mark$I(n + 1);
var i=is.read$BA$I$I(abMagic, 0, n);
if (i < n) {
abMagic[0]=abMagic[264]=(0|0);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
try {
is.reset$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return abMagic;
}, 1);

Clazz.newMeth(C$, 'guessMimeTypeForBytes$BA',  function (bytes) {
switch (bytes.length < 2 ? ($b$[0] = -1, $b$[0]) : bytes[1]) {
case 0:
return "image/jpg";
case 73:
return "image/gif";
case 77:
return "image/BMP";
case 80:
return "image/png";
default:
return "image/unknown";
}
}, 1);

Clazz.newMeth(C$, 'getBIS$BA',  function (bytes) {
return Clazz.new_([Clazz.new_($I$(3,1).c$$BA,[bytes])],$I$(2,1).c$$java_io_InputStream);
}, 1);

Clazz.newMeth(C$, 'getBR$S',  function (string) {
return Clazz.new_([Clazz.new_($I$(7,1).c$$S,[string])],$I$(6,1).c$$java_io_Reader);
}, 1);

Clazz.newMeth(C$, 'toBIS$O',  function (o) {
return ($I$(8).isAB$O(o) ? C$.getBIS$BA(o) : Clazz.instanceOf(o, "javajs.util.SB") ? C$.getBIS$BA(C$.getBytesFromSB$javajs_util_SB(o)) : Clazz.instanceOf(o, "java.lang.String") ? C$.getBIS$BA((o).getBytes$()) : null);
}, 1);

Clazz.newMeth(C$, 'getBytesFromSB$javajs_util_SB',  function (sb) {
return (C$.isBase64$javajs_util_SB(sb) ? $I$(9,"decodeBase64$S",[sb.substring$I(8)]) : sb.toBytes$I$I(0, -1));
}, 1);

Clazz.newMeth(C$, 'getStreamAsBytes$java_io_BufferedInputStream$javajs_util_OC',  function (bis, out) {
var buf=Clazz.array(Byte.TYPE, [1024]);
var bytes=(out == null  ? Clazz.array(Byte.TYPE, [4096]) : null);
var len=0;
var totalLen=0;
while ((len=bis.read$BA$I$I(buf, 0, 1024)) > 0){
totalLen+=len;
if (out == null ) {
if (totalLen >= bytes.length) bytes=$I$(8).ensureLengthByte$BA$I(bytes, totalLen * 2);
System.arraycopy$O$I$O$I$I(buf, 0, bytes, totalLen - len, len);
} else {
out.write$BA$I$I(buf, 0, len);
}}
bis.close$();
if (out == null ) {
return $I$(8).arrayCopyByte$BA$I(bytes, totalLen);
}return totalLen + " bytes";
}, 1);

Clazz.newMeth(C$, 'getLimitedStreamBytes$java_io_InputStream$J',  function (is, n) {
var buflen=(Long.$gt(n,0 ) && Long.$lt(n,1024 )  ? Long.$ival(n) : 1024);
var buf=Clazz.array(Byte.TYPE, [buflen]);
var bytes=Clazz.array(Byte.TYPE, [Long.$lt(n,0 ) ? 4096 : Long.$ival(n)]);
var len=0;
var totalLen=0;
if (Long.$lt(n,0 )) n=2147483647;
while (Long.$lt(totalLen,n ) && (len=is.read$BA$I$I(buf, 0, buflen)) > 0 ){
totalLen+=len;
if (totalLen > bytes.length) bytes=$I$(8).ensureLengthByte$BA$I(bytes, totalLen * 2);
System.arraycopy$O$I$O$I$I(buf, 0, bytes, totalLen - len, len);
if (Long.$ne(n,2147483647 ) && totalLen + buflen > bytes.length ) buflen=bytes.length - totalLen;
}
if (totalLen == bytes.length) return bytes;
buf=Clazz.array(Byte.TYPE, [totalLen]);
System.arraycopy$O$I$O$I$I(bytes, 0, buf, 0, totalLen);
return buf;
}, 1);

Clazz.newMeth(C$, 'readAllAsString$java_io_BufferedReader$I$Z$SA$I',  function (br, nBytesMax, allowBinary, data, i) {
try {
var sb=$I$(10).newN$I(8192);
var line;
if (nBytesMax < 0) {
line=br.readLine$();
if (allowBinary || line != null  && line.indexOf$I("\u0000") < 0  && (line.length$() != 4 || (line.charCodeAt$I(0)) != 65533   || line.indexOf$S("PNG") != 1 )  ) {
sb.append$S(line).appendC$C("\n");
while ((line=br.readLine$()) != null )sb.append$S(line).appendC$C("\n");

}} else {
var n=0;
var len;
while (n < nBytesMax && (line=br.readLine$()) != null  ){
if (nBytesMax - n < (len=line.length$()) + 1) line=line.substring$I$I(0, nBytesMax - n - 1 );
sb.append$S(line).appendC$C("\n");
n+=len + 1;
}
}br.close$();
data[i]=sb.toString();
return true;
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"Exception")){
data[i]=ioe.toString();
return false;
} else {
throw ioe;
}
}
}, 1);

Clazz.newMeth(C$, 'getZipRoot$S',  function (fileName) {
var pt=fileName.indexOf$S("|");
return (pt < 0 ? fileName : fileName.substring$I$I(0, pt));
}, 1);

Clazz.newMeth(C$, 'getBufferedWriter$java_io_OutputStream$S',  function (os, charSetName) {
var osw=$I$(11,"getInstanceWithParams$S$ClassA$OA",["java.io.OutputStreamWriter", Clazz.array(Class, -1, [Clazz.getClass($I$(12)), Clazz.getClass(String)]), Clazz.array(java.lang.Object, -1, [os, charSetName == null  ? "UTF-8" : charSetName])]);
return Clazz.new_($I$(13,1).c$$java_io_Writer,[osw]);
}, 1);

Clazz.newMeth(C$, 'isTar$java_io_BufferedInputStream',  function (bis) {
var bytes=C$.getMagic$java_io_InputStream$I(bis, 264);
return (bytes[264] == -1 && (bytes[257] & 255) == 117  && (bytes[258] & 255) == 115  && (bytes[259] & 255) == 116  && (bytes[260] & 255) == 97  && (bytes[261] & 255) == 114 );
}, 1);

Clazz.newMeth(C$, 'isBinary$java_io_BufferedInputStream$I',  function (bis, n) {
var bytes=C$.getMagic$java_io_InputStream$I(bis, n);
if (C$.b264[264] == -1) for (var i=0; i < n; i++) if (bytes[i] < 9) return true;

return false;
}, 1);
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Rdr, "StreamReader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.io.BufferedReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['stream','java.io.BufferedInputStream']]]

Clazz.newMeth(C$, 'c$$java_io_BufferedInputStream$S',  function (bis, charSet) {
;C$.superclazz.c$$java_io_Reader.apply(this,[Clazz.new_([bis, (charSet == null  ? "UTF-8" : charSet)],$I$(1,1).c$$java_io_InputStream$S)]);C$.$init$.apply(this);
this.stream=bis;
}, 1);

Clazz.newMeth(C$, 'getStream$',  function () {
try {
this.stream.reset$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
return this.stream;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
