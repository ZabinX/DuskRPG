(function(){var P$=Clazz.newPackage("javajs.export"),p$1={},I$=[[0,'java.util.Hashtable','java.util.zip.Deflater','java.io.ByteArrayOutputStream','java.util.zip.DeflaterOutputStream','javajs.util.SB']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PDFObject", null, 'javajs.util.SB');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['index','len','pt'],'S',['type'],'O',['dictionary','java.util.Map','stream','byte[]']]]

Clazz.newMeth(C$, 'c$$I',  function (index) {
Clazz.super_(C$, this);
this.index=index;
}, 1);

Clazz.newMeth(C$, 'getRef$',  function () {
return this.index + " 0 R";
});

Clazz.newMeth(C$, 'getID$',  function () {
return this.type.substring$I$I(0, 1) + this.index;
});

Clazz.newMeth(C$, 'isFont$',  function () {
return "Font".equals$O(this.type);
});

Clazz.newMeth(C$, 'setStream$BA',  function (stream) {
this.stream=stream;
});

Clazz.newMeth(C$, 'getDef$S',  function (key) {
return this.dictionary.get$O(key);
});

Clazz.newMeth(C$, 'addDef$S$O',  function (key, value) {
if (this.dictionary == null ) this.dictionary=Clazz.new_($I$(1,1));
this.dictionary.put$O$O(key, value);
if (key.equals$O("Type")) this.type=(value).substring$I(1);
});

Clazz.newMeth(C$, 'setAsStream$',  function () {
this.stream=this.toBytes$I$I(0, -1);
this.setLength$I(0);
});

Clazz.newMeth(C$, 'output$java_io_OutputStream',  function (os) {
if (this.index > 0) {
var s=this.index + " 0 obj\n";
p$1.write$java_io_OutputStream$BA$I.apply(this, [os, s.getBytes$(), 0]);
}var streamLen=0;
if (this.dictionary != null ) {
if (this.dictionary.containsKey$O("Length")) {
if (this.stream == null ) this.setAsStream$();
streamLen=this.stream.length;
var doDeflate=(streamLen > 1000);
if (doDeflate) {
var deflater=Clazz.new_($I$(2,1).c$$I,[9]);
var outBytes=Clazz.new_($I$(3,1).c$$I,[1024]);
var compBytes=Clazz.new_($I$(4,1).c$$java_io_ByteArrayOutputStream$java_util_zip_Deflater,[outBytes, deflater]);
compBytes.write$BA$I$I(this.stream, 0, streamLen);
compBytes.finish$();
this.stream=outBytes.toByteArray$();
this.dictionary.put$O$O("Filter", "/FlateDecode");
streamLen=this.stream.length;
}this.dictionary.put$O$O("Length", "" + streamLen);
}p$1.write$java_io_OutputStream$BA$I.apply(this, [os, p$1.getDictionaryText$java_util_Map$S.apply(this, [this.dictionary, "\n"]).getBytes$(), 0]);
}if (this.length$() > 0) p$1.write$java_io_OutputStream$BA$I.apply(this, [os, this.toString().getBytes$(), 0]);
if (this.stream != null ) {
p$1.write$java_io_OutputStream$BA$I.apply(this, [os, "stream\r\n".getBytes$(), 0]);
p$1.write$java_io_OutputStream$BA$I.apply(this, [os, this.stream, streamLen]);
p$1.write$java_io_OutputStream$BA$I.apply(this, [os, "\r\nendstream\r\n".getBytes$(), 0]);
}if (this.index > 0) p$1.write$java_io_OutputStream$BA$I.apply(this, [os, "endobj\n".getBytes$(), 0]);
return this.len;
});

Clazz.newMeth(C$, 'write$java_io_OutputStream$BA$I',  function (os, bytes, nBytes) {
if (nBytes == 0) nBytes=bytes.length;
this.len+=nBytes;
os.write$BA$I$I(bytes, 0, nBytes);
}, p$1);

Clazz.newMeth(C$, 'getDictionaryText$java_util_Map$S',  function (d, nl) {
var sb=Clazz.new_($I$(5,1));
sb.append$S("<<");
if (d.containsKey$O("Type")) sb.append$S("/Type").appendO$O(d.get$O("Type"));
for (var e, $e = d.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var s=e.getKey$();
if (s.equals$O("Type") || s.startsWith$S("!") ) continue;
sb.append$S("/" + s);
var o=e.getValue$();
if (Clazz.instanceOf(o, "java.util.Map")) {
sb.append$S((p$1.getDictionaryText$java_util_Map$S.apply(this, [o, ""])));
continue;
}s=e.getValue$();
if (!s.startsWith$S("/")) sb.append$S(" ");
sb.appendO$O(s);
}
return (sb.length$() > 3 ? sb.append$S(">>").append$S(nl).toString() : "");
}, p$1);

Clazz.newMeth(C$, 'createSubdict$java_util_Map$S',  function (d0, dict) {
var d=d0.get$O(dict);
if (d == null ) d0.put$O$O(dict, d=Clazz.new_($I$(1,1)));
return d;
}, p$1);

Clazz.newMeth(C$, 'addResource$S$S$S',  function (type, key, value) {
var r=p$1.createSubdict$java_util_Map$S.apply(this, [this.dictionary, "Resources"]);
if (type != null ) r=p$1.createSubdict$java_util_Map$S.apply(this, [r, type]);
r.put$O$O(key, value);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
