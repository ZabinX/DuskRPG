(function(){var P$=Clazz.newPackage("javajs.util"),p$1={},I$=[[0,'java.io.FileInputStream','java.net.URL','java.io.DataInputStream','java.util.ArrayList','java.util.Hashtable']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VideoReader");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pt=0;
this.buf=Clazz.array(Byte.TYPE, [10]);
},1);

C$.$fields$=[['Z',['verbose'],'I',['pt','blockLen','timeScale'],'S',['blockType','codec','fileType'],'O',['buf','byte[]','is','java.io.DataInputStream','contents','java.util.List','thisTrackMap','java.util.Map']]]

Clazz.newMeth(C$, 'getCodec$',  function () {
return this.codec;
});

Clazz.newMeth(C$, 'getFileType$',  function () {
return this.fileType;
});

Clazz.newMeth(C$, 'c$$java_io_File',  function (f) {
C$.c$$java_io_InputStream.apply(this, [Clazz.new_($I$(1,1).c$$java_io_File,[f])]);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (path) {
;C$.$init$.apply(this);
p$1.getStream$java_io_InputStream.apply(this, [path.indexOf$S("://") > 0 ? Clazz.new_($I$(2,1).c$$S,[path]).openStream$() : Clazz.new_($I$(1,1).c$$S,[path])]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function (stream) {
;C$.$init$.apply(this);
p$1.getStream$java_io_InputStream.apply(this, [stream]);
}, 1);

Clazz.newMeth(C$, 'getStream$java_io_InputStream',  function (stream) {
if (Clazz.instanceOf(stream, "java.io.DataInputStream")) {
this.is=stream;
} else {
this.is=Clazz.new_($I$(3,1).c$$java_io_InputStream,[stream]);
}}, p$1);

Clazz.newMeth(C$, 'getContents$Z',  function (verbose) {
this.contents=Clazz.new_($I$(4,1));
this.verbose=verbose;
while (this.isAvail$()){
try {
this.readBlock$java_util_List(this.contents);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
break;
} else {
throw e;
}
}
}
try {
this.is.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
return this.contents;
});

Clazz.newMeth(C$, 'readBlock$java_util_List',  function (contents) {
var pt=this.pt;
this.blockLen=this.readInt$();
this.blockType=this.readString$I(4);
if (this.verbose) System.out.println$S(this.blockType + "\t" + pt + "\t0x" + Long.toHexString$J(pt) + "\t" + this.blockLen );
var map=Clazz.new_($I$(5,1));
map.put$O$O("_pt", Integer.valueOf$I(pt));
map.put$O$O("_type", this.blockType);
map.put$O$O("_len", Integer.valueOf$I(this.blockLen));
contents.add$O(map);
var remaining=this.readBlock$S$I$java_util_Map(this.blockType, this.blockLen - 8, map);
if (remaining < 0) {
pt=-1;
return;
}this.skip$I(remaining);
});

Clazz.newMeth(C$, 'readBlock$S$I$java_util_Map',  function (blockType, len, map) {
switch (blockType) {
case "ftyp":
len=this.readFTYP$I$java_util_Map(len, map);
break;
case "trak":
len=this.readInner$I$java_util_Map(len, map);
if (this.verbose) p$1.dumpMap$java_util_Map$S.apply(this, [this.thisTrackMap, "tkhd"]);
this.thisTrackMap=null;
break;
case "moov":
case "mdia":
case "minf":
case "stbl":
len=this.readInner$I$java_util_Map(len, map);
break;
case "mvhd":
len=this.readMVHD$I$java_util_Map(len, map);
break;
case "tkhd":
this.thisTrackMap=map;
len=this.readTKHD$I$java_util_Map(len, map);
break;
case "stsd":
len=this.readSTSD$I$java_util_Map(len, map);
break;
case "smhd":
case "vmhd":
this.thisTrackMap.put$O$O("_trackType", (blockType.equals$O("smhd") ? "sound" : "video"));
default:
this.skip$I(len);
len=0;
break;
}
return len;
});

Clazz.newMeth(C$, 'readInner$I$java_util_Map',  function (len, map) {
var list=Clazz.new_($I$(4,1));
map.put$O$O("blocks", list);
while (len > 0){
var p=this.pt;
this.readBlock$java_util_List(list);
len-=(this.pt - p);
}
return 0;
});

Clazz.newMeth(C$, 'readFTYP$I$java_util_Map',  function (len, map) {
var info="";
while (len > 0){
var s=this.readString$I(4);
len-=4;
if (s.charAt$I(0) != "\u0000") info+=s + " ";
}
info=info.trim$();
if (this.verbose) System.out.println$S("filetype=" + info);
this.fileType=info;
return len;
});

Clazz.newMeth(C$, 'readMVHD$I$java_util_Map',  function (len, map) {
map.put$O$O("version_flags", Integer.valueOf$I(this.readInt$()));
map.put$O$O("creationTime", Long.valueOf$J(this.readUIntLong$()));
map.put$O$O("modificationTime", Long.valueOf$J(this.readUIntLong$()));
this.timeScale=this.readInt$();
var dur=this.readInt$();
map.put$O$O("timeScale", Integer.valueOf$I(this.timeScale));
map.put$O$O("duration", Integer.valueOf$I(dur));
map.put$O$O("_duration(sec)", Double.valueOf$D(1.0 * dur / this.timeScale));
map.put$O$O("preferredRate", Integer.valueOf$I(this.readInt$()));
map.put$O$O("preferredVolume", Integer.valueOf$I(this.readShort$()));
if (this.verbose) p$1.dumpMap$java_util_Map$S.apply(this, [map, "mvhd"]);
this.skip$I(len - 26);
return 0;
});

Clazz.newMeth(C$, 'dumpMap$java_util_Map$S',  function (map, name) {
for (var e, $e = map.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
System.out.println$S(name + "." + e.getKey$() + ": " + e.getValue$() );
}
}, p$1);

Clazz.newMeth(C$, 'readTKHD$I$java_util_Map',  function (len, map) {
map.put$O$O("version_flags", Integer.valueOf$I(this.readInt$()));
map.put$O$O("creationTime", Long.valueOf$J(this.readUIntLong$()));
map.put$O$O("modificationTime", Long.valueOf$J(this.readUIntLong$()));
map.put$O$O("trackID", Integer.valueOf$I(this.readInt$()));
this.readInt$();
var dur=this.readInt$();
map.put$O$O("duration", Integer.valueOf$I(dur));
map.put$O$O("_duration(sec)", Double.valueOf$D(1.0 * dur / this.timeScale));
this.skip$I(len - 24);
return 0;
});

Clazz.newMeth(C$, 'readSTSD$I$java_util_Map',  function (len, map) {
map.put$O$O("version_flags", Integer.valueOf$I(this.readInt$()));
map.put$O$O("entryCount", Integer.valueOf$I(this.readInt$()));
map.put$O$O("size", Integer.valueOf$I(this.readInt$()));
if (this.codec == null ) this.codec="";
 else this.codec+=",";
this.codec+=this.readString$I(4);
if (this.verbose) System.out.println$S("codec=" + this.codec);
this.skip$I(len - 16);
return 0;
});

Clazz.newMeth(C$, 'skip$I',  function (n) {
if (n <= 0) return;
this.pt+=n;
this.is.skipBytes$I(n);
});

Clazz.newMeth(C$, 'readBytes$I',  function (n) {
this.pt+=n;
if (n > this.buf.length) this.buf=Clazz.array(Byte.TYPE, [n << 1]);
this.is.read$BA$I$I(this.buf, 0, n);
return this.buf;
});

Clazz.newMeth(C$, 'readUIntLong$',  function () {
this.pt+=4;
return Long.$and(this.is.readInt$(),4294967295);
});

Clazz.newMeth(C$, 'isAvail$',  function () {
try {
return (this.pt != -1 && this.is.available$() > 0 );
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'readInt$',  function () {
this.pt+=4;
return this.is.readInt$();
});

Clazz.newMeth(C$, 'readShort$',  function () {
this.pt+=2;
return this.is.readShort$();
});

Clazz.newMeth(C$, 'readString$I',  function (n) {
return  String.instantialize(this.readBytes$I(n), 0, n);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:47 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
