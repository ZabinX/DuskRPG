(function(){var P$=Clazz.newPackage("javajs.util"),I$=[[0,'java.util.zip.ZipInputStream','javajs.util.Rdr','javajs.util.SB','javajs.util.BArray','javajs.util.Lst','java.io.BufferedInputStream','java.util.zip.GZIPInputStream','javajs.util.CBZip2InputStream','java.util.zip.ZipEntry','java.util.zip.ZipOutputStream','java.util.zip.CRC32']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ZipTools");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['b512','byte[]']]]

Clazz.newMeth(C$, 'newZipInputStream$java_io_InputStream',  function (is) {
return C$.newZIS$java_io_InputStream(is);
}, 1);

Clazz.newMeth(C$, 'newZIS$java_io_InputStream',  function (is) {
return (Clazz.instanceOf(is, "java.util.zip.ZipInputStream") ? is : Clazz.new_($I$(1,1).c$$java_io_InputStream,[is]));
}, 1);

Clazz.newMeth(C$, 'getZipFileDirectory$java_io_BufferedInputStream$SA$I$Z',  function (bis, list, listPtr, asBufferedInputStream) {
var ret;
var justDir=(list == null  || listPtr >= list.length );
var fileName=(justDir ? "." : list[listPtr]);
var isTar=$I$(2).isTar$java_io_BufferedInputStream(bis);
if (isTar) return C$.getTarFileDirectory$java_io_BufferedInputStream$S$Z(bis, fileName, asBufferedInputStream);
if (justDir) return C$.getZipDirectoryAsStringAndClose$java_io_BufferedInputStream(bis);
bis=C$.getPngZipStream$java_io_BufferedInputStream$Z(bis, true);
var zis=C$.newZIS$java_io_InputStream(bis);
var ze;
try {
var isAll=(fileName.equals$O("."));
if (isAll || fileName.lastIndexOf$S("/") == fileName.length$() - 1 ) {
ret=Clazz.new_($I$(3,1));
while ((ze=zis.getNextEntry$()) != null ){
var name=ze.getName$();
if (isAll || name.startsWith$S(fileName) ) ret.append$S(name).appendC$C("\n");
}
var str=ret.toString();
return (asBufferedInputStream ? $I$(2,"getBIS$BA",[str.getBytes$()]) : str);
}var pt=fileName.indexOf$S(":asBinaryString");
var asBinaryString=(pt > 0);
if (asBinaryString) fileName=fileName.substring$I$I(0, pt);
fileName=fileName.replace$C$C("\\", "/");
while ((ze=zis.getNextEntry$()) != null  && !fileName.equals$O(ze.getName$()) ){
}
var bytes=(ze == null  ? null : $I$(2,"getLimitedStreamBytes$java_io_InputStream$J",[zis, ze.getSize$()]));
ze=null;
zis.close$();
if (bytes == null ) return "";
if ($I$(2).isZipB$BA(bytes) || $I$(2).isPngZipB$BA(bytes) ) return C$.getZipFileDirectory$java_io_BufferedInputStream$SA$I$Z($I$(2).getBIS$BA(bytes), list, ++listPtr, asBufferedInputStream);
if (asBufferedInputStream) return $I$(2).getBIS$BA(bytes);
if (asBinaryString) {
ret=Clazz.new_($I$(3,1));
for (var i=0; i < bytes.length; i++) ret.append$S(Integer.toHexString$I(bytes[i] & 255)).appendC$C(" ");

return ret.toString();
}if ($I$(2).isGzipB$BA(bytes)) bytes=$I$(2,"getLimitedStreamBytes$java_io_InputStream$J",[C$.getUnGzippedInputStream$BA(bytes), -1]);
return $I$(2).fixUTF$BA(bytes);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return "";
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getTarFileDirectory$java_io_BufferedInputStream$S$Z',  function (bis, fileName, asBufferedInputStream) {
var ret;
try {
var isAll=(fileName.equals$O("."));
if (isAll || fileName.lastIndexOf$S("/") == fileName.length$() - 1 ) {
ret=Clazz.new_($I$(3,1));
C$.getTarContents$java_io_BufferedInputStream$S$javajs_util_SB(bis, fileName, ret);
var str=ret.toString();
return (asBufferedInputStream ? $I$(2,"getBIS$BA",[str.getBytes$()]) : str);
}fileName=fileName.replace$C$C("\\", "/");
var bytes=C$.getTarContents$java_io_BufferedInputStream$S$javajs_util_SB(bis, fileName, null);
bis.close$();
return (bytes == null  ? "" : asBufferedInputStream ? $I$(2).getBIS$BA(bytes) : $I$(2).fixUTF$BA(bytes));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return "";
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getZipFileContentsAsBytes$java_io_BufferedInputStream$SA$I',  function (bis, list, listPtr) {
var ret=Clazz.array(Byte.TYPE, [0]);
var fileName=list[listPtr];
if (fileName.lastIndexOf$S("/") == fileName.length$() - 1) return ret;
try {
if ($I$(2).isTar$java_io_BufferedInputStream(bis)) return C$.getTarContents$java_io_BufferedInputStream$S$javajs_util_SB(bis, fileName, null);
bis=C$.getPngZipStream$java_io_BufferedInputStream$Z(bis, true);
var zis=C$.newZIS$java_io_InputStream(bis);
var ze;
while ((ze=zis.getNextEntry$()) != null ){
if (!fileName.equals$O(ze.getName$())) continue;
var bytes=$I$(2,"getLimitedStreamBytes$java_io_InputStream$J",[zis, ze.getSize$()]);
return (($I$(2).isZipB$BA(bytes) || $I$(2).isPngZipB$BA(bytes) ) && ++listPtr < list.length  ? C$.getZipFileContentsAsBytes$java_io_BufferedInputStream$SA$I($I$(2).getBIS$BA(bytes), list, listPtr) : bytes);
}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
return ret;
}, 1);

Clazz.newMeth(C$, 'getTarContents$java_io_BufferedInputStream$S$javajs_util_SB',  function (bis, fileName, sb) {
if (C$.b512 == null ) C$.b512=Clazz.array(Byte.TYPE, [512]);
var len=fileName.length$();
while (bis.read$BA$I$I(C$.b512, 0, 512) > 0){
var bytes=C$.getTarFile$java_io_BufferedInputStream$S$I$javajs_util_SB$java_util_Map$Z(bis, fileName, len, sb, null, false);
if (bytes != null ) return bytes;
}
return null;
}, 1);

Clazz.newMeth(C$, 'getTarFile$java_io_BufferedInputStream$S$I$javajs_util_SB$java_util_Map$Z',  function (bis, fileName, len, sb, cache, oneFile) {
var j=124;
while (C$.b512[j] == 48)++j;

var isAll=(sb != null  && fileName.equals$O(".") );
var nbytes=0;
while (j < 135)nbytes=(nbytes << 3) + (C$.b512[j++] - 48);

if (nbytes == 0) return null;
var fname= String.instantialize(C$.b512, 0, 100).trim$();
var prefix= String.instantialize(C$.b512, 345, 155).trim$();
var name=prefix + fname;
var found=false;
if (sb != null ) {
if (name.length$() == 0) return null;
if (isAll || (oneFile ? name.equalsIgnoreCase$S(fileName) : name.startsWith$S(fileName)) ) {
found=(cache != null );
sb.append$S(name).appendC$C("\n");
}len=-1;
}var nul=(512 - (nbytes % 512)) % 512;
if (!found && (len != name.length$() || !fileName.equals$O(name) ) ) {
var nBlocks=(nbytes + nul) >> 9;
for (var i=nBlocks; --i >= 0; ) bis.read$BA$I$I(C$.b512, 0, 512);

return null;
}var bytes=$I$(2).getLimitedStreamBytes$java_io_InputStream$J(bis, nbytes);
if (cache != null ) {
cache.put$O$O(name, Clazz.new_($I$(4,1).c$$BA,[bytes]));
bis.read$BA$I$I(C$.b512, 0, nul);
}return bytes;
}, 1);

Clazz.newMeth(C$, 'getZipDirectoryAsStringAndClose$java_io_BufferedInputStream',  function (bis) {
var sb=Clazz.new_($I$(3,1));
var s=Clazz.array(String, [0]);
try {
s=C$.getZipDirectoryOrErrorAndClose$java_io_BufferedInputStream$S(bis, null);
bis.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e.toString());
} else {
throw e;
}
}
for (var i=0; i < s.length; i++) sb.append$S(s[i]).appendC$C("\n");

return sb.toString();
}, 1);

Clazz.newMeth(C$, 'getZipDirectoryAndClose$java_io_BufferedInputStream$S',  function (bis, manifestID) {
var s=Clazz.array(String, [0]);
try {
s=C$.getZipDirectoryOrErrorAndClose$java_io_BufferedInputStream$S(bis, manifestID);
bis.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
System.out.println$S(e.toString());
} else {
throw e;
}
}
return s;
}, 1);

Clazz.newMeth(C$, 'getZipDirectoryOrErrorAndClose$java_io_BufferedInputStream$S',  function (bis, manifestID) {
bis=C$.getPngZipStream$java_io_BufferedInputStream$Z(bis, true);
var v=Clazz.new_($I$(5,1));
var zis=Clazz.new_($I$(1,1).c$$java_io_InputStream,[bis]);
var ze;
var manifest=null;
while ((ze=zis.getNextEntry$()) != null ){
var fileName=ze.getName$();
if (manifestID != null  && fileName.startsWith$S(manifestID) ) manifest=C$.getStreamAsString$java_io_InputStream(zis);
 else if (!fileName.startsWith$S("__MACOS")) v.addLast$O(fileName);
}
zis.close$();
if (manifestID != null ) v.add$I$O(0, manifest == null  ? "" : manifest + "\n############\n");
return v.toArray$OA(Clazz.array(String, [v.size$()]));
}, 1);

Clazz.newMeth(C$, 'getStreamAsString$java_io_InputStream',  function (is) {
return $I$(2,"fixUTF$BA",[$I$(2).getLimitedStreamBytes$java_io_InputStream$J(is, -1)]);
}, 1);

Clazz.newMeth(C$, 'newGZIPInputStream$java_io_InputStream',  function (is) {
return Clazz.new_([Clazz.new_($I$(7,1).c$$java_io_InputStream$I,[is, 512])],$I$(6,1).c$$java_io_InputStream);
}, 1);

Clazz.newMeth(C$, 'newBZip2InputStream$java_io_InputStream',  function (is) {
is.read$BA$I$I(Clazz.array(Byte.TYPE, [2]), 0, 2);
return Clazz.new_([Clazz.new_($I$(8,1).c$$java_io_InputStream,[is])],$I$(6,1).c$$java_io_InputStream);
}, 1);

Clazz.newMeth(C$, 'getUnGzippedInputStream$BA',  function (bytes) {
try {
return C$.getUnzippedInputStream$java_io_BufferedInputStream($I$(2).getBIS$BA(bytes));
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getGzippedBytesAsString$BA',  function (bytes) {
var s;
try {
var bis=C$.getUnGzippedInputStream$BA(bytes);
s=C$.getStreamAsString$java_io_InputStream(bis);
bis.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
s="";
} else {
throw e;
}
}
return s;
}, 1);

Clazz.newMeth(C$, 'getUnzippedInputStream$java_io_BufferedInputStream',  function (bis) {
while ($I$(2).isGzipS$java_io_InputStream(bis))bis=Clazz.new_([C$.newGZIPInputStream$java_io_InputStream(bis)],$I$(6,1).c$$java_io_InputStream);

return bis;
}, 1);

Clazz.newMeth(C$, 'getUnzippedInputStreamBZip2$java_io_BufferedInputStream',  function (bis) {
while ($I$(2).isBZip2S$java_io_InputStream(bis))bis=Clazz.new_([C$.newBZip2InputStream$java_io_InputStream(bis)],$I$(6,1).c$$java_io_InputStream);

return bis;
}, 1);

Clazz.newMeth(C$, 'getPngZipPointAndCount$java_io_BufferedInputStream$IA',  function (bis, pt_count) {
bis.mark$I(75);
try {
var data=$I$(2).getLimitedStreamBytes$java_io_InputStream$J(bis, 74);
bis.reset$();
var pt=0;
for (var i=64, f=1; --i > 54; f*=10) pt+=(data[i] - 48) * f;

var n=0;
for (var i=74, f=1; --i > 64; f*=10) n+=(data[i] - 48) * f;

pt_count[0]=pt;
pt_count[1]=n;
} catch (e) {
pt_count[1]=0;
}
}, 1);

Clazz.newMeth(C$, 'getPngZipStream$java_io_BufferedInputStream$Z',  function (bis, asNewStream) {
if (!$I$(2).isPngZipStream$java_io_InputStream(bis)) return bis;
var data=Clazz.array(Byte.TYPE, [0]);
bis.mark$I(75);
try {
var pt_count=Clazz.array(Integer.TYPE, [2]);
C$.getPngZipPointAndCount$java_io_BufferedInputStream$IA(bis, pt_count);
if (pt_count[1] != 0) {
var pt=pt_count[0];
while (pt > 0)pt=Long.$ival(Long.$sub(pt,(bis.skip$J(pt))));

if (!asNewStream) return bis;
data=$I$(2).getLimitedStreamBytes$java_io_InputStream$J(bis, pt_count[1]);
}} catch (e) {
} finally {
try {
if (asNewStream) bis.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
} else {
throw e;
}
}
}
return $I$(2).getBIS$BA(data);
}, 1);

Clazz.newMeth(C$, 'addZipEntry$O$S',  function (zos, fileName) {
(zos).putNextEntry$java_util_zip_ZipEntry(Clazz.new_($I$(9,1).c$$S,[fileName]));
}, 1);

Clazz.newMeth(C$, 'closeZipEntry$O',  function (zos) {
(zos).closeEntry$();
}, 1);

Clazz.newMeth(C$, 'getZipOutputStream$O',  function (bos) {
return Clazz.new_($I$(10,1).c$$java_io_OutputStream,[bos]);
}, 1);

Clazz.newMeth(C$, 'getCrcValue$BA',  function (bytes) {
var crc=Clazz.new_($I$(11,1));
crc.update$BA$I$I(bytes, 0, bytes.length);
return Long.$ival(crc.getValue$());
}, 1);

Clazz.newMeth(C$, 'readFileAsMap$java_io_BufferedInputStream$java_util_Map$S',  function (bis, bdata, name) {
C$.readFileAsMapStatic$java_io_BufferedInputStream$java_util_Map$S(bis, bdata, name);
}, 1);

Clazz.newMeth(C$, 'readFileAsMapStatic$java_io_BufferedInputStream$java_util_Map$S',  function (bis, bdata, name) {
var pt=(name == null  ? -1 : name.indexOf$S("|"));
name=(pt >= 0 ? name.substring$I(pt + 1) : null);
try {
var isZip=false;
if ($I$(2).isPngZipStream$java_io_InputStream(bis)) {
var isImage="_IMAGE_".equals$O(name);
if (name == null  || isImage ) bdata.put$O$O((isImage ? "_DATA_" : "_IMAGE_"), Clazz.new_([C$.getPngImageBytes$java_io_BufferedInputStream(bis)],$I$(4,1).c$$BA));
isZip=!isImage;
} else if ($I$(2).isZipS$java_io_InputStream(bis)) {
isZip=true;
} else if ($I$(2).isTar$java_io_BufferedInputStream(bis)) {
C$.cacheTarContentsStatic$java_io_BufferedInputStream$S$java_util_Map(bis, name, bdata);
} else if (name == null ) {
bdata.put$O$O("_DATA_", Clazz.new_([$I$(2).getLimitedStreamBytes$java_io_InputStream$J(bis, -1)],$I$(4,1).c$$BA));
} else {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["ZIP file " + name + " not found" ]);
}if (isZip) C$.cacheZipContentsStatic$java_io_BufferedInputStream$S$java_util_Map$Z(bis, name, bdata, true);
bdata.put$O$O("$_BINARY_$", Boolean.TRUE);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
bdata.clear$();
bdata.put$O$O("_ERROR_", e.getMessage$());
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'cacheZipContents$java_io_BufferedInputStream$S$java_util_Map$Z',  function (bis, fileName, cache, asByteArray) {
return C$.cacheZipContentsStatic$java_io_BufferedInputStream$S$java_util_Map$Z(bis, fileName, cache, asByteArray);
}, 1);

Clazz.newMeth(C$, 'cacheZipContentsStatic$java_io_BufferedInputStream$S$java_util_Map$Z',  function (bis, fileName, cache, asByteArray) {
var zis=C$.newZIS$java_io_InputStream(bis);
var ze;
var listing=Clazz.new_($I$(3,1));
var n=0;
if (fileName != null  && fileName.endsWith$S("/.") ) fileName=fileName.substring$I$I(0, fileName.length$() - 1);
var isPath=(fileName != null  && fileName.endsWith$S("/") );
var oneFile=(fileName != null  && !isPath  && asByteArray );
var pt=(oneFile ? fileName.indexOf$S("|") : -1);
var zipEntryRoot=(pt >= 0 ? fileName : null);
if (pt >= 0) fileName=fileName.substring$I$I(0, pt);
var prefix=(fileName == null  || isPath  ? "" : fileName + "|");
try {
while ((ze=zis.getNextEntry$()) != null ){
if (ze.isDirectory$()) continue;
var name=ze.getName$();
if (fileName != null ) {
if (oneFile) {
if (!name.equalsIgnoreCase$S(fileName)) continue;
} else {
if (isPath && !name.startsWith$S(fileName) ) continue;
listing.append$S(name).appendC$C("\n");
}}var nBytes=ze.getSize$();
var bytes=$I$(2).getLimitedStreamBytes$java_io_InputStream$J(zis, nBytes);
if (zipEntryRoot != null ) {
C$.readFileAsMapStatic$java_io_BufferedInputStream$java_util_Map$S($I$(2).getBIS$BA(bytes), cache, zipEntryRoot);
return null;
}(n=Long.$add(n,(bytes.length)));
var o=(asByteArray ? Clazz.new_($I$(4,1).c$$BA,[bytes]) : bytes);
cache.put$O$O((oneFile ? "_DATA_" : prefix + name), o);
if (oneFile) break;
}
zis.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
try {
zis.close$();
} catch (e1) {
if (Clazz.exceptionOf(e1,"java.io.IOException")){
} else {
throw e1;
}
}
return null;
} else {
throw e;
}
}
if (Long.$eq(n,0 ) || fileName == null  ) return null;
System.out.println$S("ZipTools cached " + Long.$s(n) + " bytes from " + fileName );
return listing.toString();
}, 1);

Clazz.newMeth(C$, 'cacheTarContentsStatic$java_io_BufferedInputStream$S$java_util_Map',  function (bis, fileName, cache) {
var listing=Clazz.new_($I$(3,1));
var n=0;
if (fileName != null  && fileName.endsWith$S("/.") ) fileName=fileName.substring$I$I(0, fileName.length$() - 1);
var isPath=(fileName != null  && fileName.endsWith$S("/") );
var oneFile=(fileName != null  && !isPath );
try {
if (C$.b512 == null ) C$.b512=Clazz.array(Byte.TYPE, [512]);
while (bis.read$BA$I$I(C$.b512, 0, 512) > 0){
var bytes=C$.getTarFile$java_io_BufferedInputStream$S$I$javajs_util_SB$java_util_Map$Z(bis, fileName == null  ? "." : fileName, -1, listing, cache, oneFile);
if (bytes != null ) {
(n=Long.$add(n,(bytes.length)));
if (oneFile) break;
}}
bis.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
try {
bis.close$();
} catch (e1) {
if (Clazz.exceptionOf(e1,"java.io.IOException")){
} else {
throw e1;
}
}
return null;
} else {
throw e;
}
}
if (Long.$eq(n,0 ) || fileName == null  ) return null;
System.out.println$S("ZipTools cached " + Long.$s(n) + " bytes from " + fileName );
return listing.toString();
}, 1);

Clazz.newMeth(C$, 'getPngImageBytes$java_io_BufferedInputStream',  function (bis) {
try {
if ($I$(2).isPngZipStream$java_io_InputStream(bis)) {
var pt_count=Clazz.array(Integer.TYPE, [2]);
C$.getPngZipPointAndCount$java_io_BufferedInputStream$IA(bis, pt_count);
if (pt_count[1] != 0) return C$.deActivatePngZipB$BA($I$(2).getLimitedStreamBytes$java_io_InputStream$J(bis, pt_count[0]));
}return $I$(2).getLimitedStreamBytes$java_io_InputStream$J(bis, -1);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'deActivatePngZipB$BA',  function (bytes) {
if ($I$(2).isPngZipB$BA(bytes)) bytes[51]=(32|0);
return bytes;
}, 1);

Clazz.newMeth(C$, 'isZipStream$O',  function (br) {
return Clazz.instanceOf(br, "java.util.zip.ZipInputStream");
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
