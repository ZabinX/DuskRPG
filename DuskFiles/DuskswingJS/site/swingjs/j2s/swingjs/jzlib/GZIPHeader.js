(function(){var P$=Clazz.newPackage("swingjs.jzlib"),I$=[[0,'swingjs.jzlib.ZStream','InternalError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GZIPHeader", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.text=false;
this.fhcrc=false;
this.os=255;
this.done=false;
this.mtime=0;
},1);

C$.$fields$=[['Z',['text','fhcrc','done'],'I',['xflags','os','hcrc'],'J',['time','crc','mtime'],'O',['extra','byte[]','+name','+comment']]]

Clazz.newMeth(C$, 'setModifiedTime$J',  function (mtime) {
this.mtime=mtime;
});

Clazz.newMeth(C$, 'getModifiedTime$',  function () {
return this.mtime;
});

Clazz.newMeth(C$, 'setOS$I',  function (os) {
if ((0 <= os && os <= 13 ) || os == 255 ) this.os=os;
 else throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["os: " + os]);
});

Clazz.newMeth(C$, 'getOS$',  function () {
return this.os;
});

Clazz.newMeth(C$, 'setName$S',  function (name) {
this.name=$I$(1).getBytes$S(name);
});

Clazz.newMeth(C$, 'getName$',  function () {
if (this.name == null ) return "";
try {
return  String.instantialize(this.name, "ISO-8859-1");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
throw Clazz.new_([e.toString()],$I$(2,1).c$$S);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setComment$S',  function (comment) {
this.comment=$I$(1).getBytes$S(comment);
});

Clazz.newMeth(C$, 'getComment$',  function () {
if (this.comment == null ) return "";
try {
return  String.instantialize(this.comment, "ISO-8859-1");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
throw Clazz.new_([e.toString()],$I$(2,1).c$$S);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setCRC$J',  function (crc) {
this.crc=crc;
});

Clazz.newMeth(C$, 'getCRC$',  function () {
return this.crc;
});

Clazz.newMeth(C$, 'put$swingjs_jzlib_Deflate',  function (d) {
var flag=0;
if (this.text) {
flag|=1;
}if (this.fhcrc) {
flag|=2;
}if (this.extra != null ) {
flag|=4;
}if (this.name != null ) {
flag|=8;
}if (this.comment != null ) {
flag|=16;
}var xfl=0;
if (d.level == 1) {
xfl|=4;
} else if (d.level == 9) {
xfl|=2;
}d.put_short$I(-29921);
d.put_byteB$B(8);
d.put_byteB$B(($b$[0] = flag, $b$[0]));
d.put_byteB$B(($b$[0] = this.mtime, $b$[0]));
d.put_byteB$B(($b$[0] = (Long.$sr(this.mtime,8)), $b$[0]));
d.put_byteB$B(($b$[0] = (Long.$sr(this.mtime,16)), $b$[0]));
d.put_byteB$B(($b$[0] = (Long.$sr(this.mtime,24)), $b$[0]));
d.put_byteB$B(($b$[0] = xfl, $b$[0]));
d.put_byteB$B(($b$[0] = this.os, $b$[0]));
if (this.extra != null ) {
d.put_byteB$B(($b$[0] = this.extra.length, $b$[0]));
d.put_byteB$B(($b$[0] = (this.extra.length >> 8), $b$[0]));
d.put_byte$BA$I$I(this.extra, 0, this.extra.length);
}if (this.name != null ) {
d.put_byte$BA$I$I(this.name, 0, this.name.length);
d.put_byteB$B(0);
}if (this.comment != null ) {
d.put_byte$BA$I$I(this.comment, 0, this.comment.length);
d.put_byteB$B(0);
}});

Clazz.newMeth(C$, 'clone$',  function () {
var gheader=Clazz.clone(this);
var tmp;
if (gheader.extra != null ) {
tmp=Clazz.array(Byte.TYPE, [gheader.extra.length]);
System.arraycopy$O$I$O$I$I(gheader.extra, 0, tmp, 0, tmp.length);
gheader.extra=tmp;
}if (gheader.name != null ) {
tmp=Clazz.array(Byte.TYPE, [gheader.name.length]);
System.arraycopy$O$I$O$I$I(gheader.name, 0, tmp, 0, tmp.length);
gheader.name=tmp;
}if (gheader.comment != null ) {
tmp=Clazz.array(Byte.TYPE, [gheader.comment.length]);
System.arraycopy$O$I$O$I$I(gheader.comment, 0, tmp, 0, tmp.length);
gheader.comment=tmp;
}return gheader;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:04 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
