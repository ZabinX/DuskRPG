(function(){var P$=Clazz.newPackage("java.util.zip"),I$=[[0,'java.util.zip.ZipInputStream','InternalError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ZipEntry", null, null, ['java.util.zip.ZipConstants', 'Cloneable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.time=-1;
this.crc=-1;
this.size=-1;
this.csize=-1;
this.method=-1;
this.flag=0;
},1);

C$.$fields$=[['I',['method','flag','秘entryOffset'],'J',['offset','time','crc','size','csize'],'S',['name','comment'],'O',['extra','byte[]','秘source','java.io.InputStream']]]

Clazz.newMeth(C$, 'getBytes$',  function () {
var zis=Clazz.new_($I$(1,1).c$$java_io_InputStream,[this.秘source]);
zis.setEntry$java_util_zip_ZipEntry(this);
var b=Clazz.array(Byte.TYPE, [Long.$ival(this.size)]);
try {
zis.read$BA(b);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return null;
} else {
throw e;
}
}
return b;
});

Clazz.newMeth(C$, 'c$$S',  function (name) {
;C$.$init$.apply(this);
if (name == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (name.length$() > 65535) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["entry name too long"]);
}this.name=name;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_zip_ZipEntry',  function (e) {
;C$.$init$.apply(this);
this.name=e.name;
this.time=e.time;
this.crc=e.crc;
this.size=e.size;
this.csize=e.csize;
this.method=e.method;
this.flag=e.flag;
this.extra=e.extra;
this.comment=e.comment;
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getName$',  function () {
return this.name;
});

Clazz.newMeth(C$, 'setTime$J',  function (time) {
this.time=C$.javaToDosTime$J(time);
});

Clazz.newMeth(C$, 'getTime$',  function () {
return Long.$ne(this.time,-1 ) ? C$.dosToJavaTime$J(this.time) : -1;
});

Clazz.newMeth(C$, 'setSize$J',  function (size) {
if (Long.$lt(size,0 )) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid entry size"]);
}this.size=size;
});

Clazz.newMeth(C$, 'getSize$',  function () {
return this.size;
});

Clazz.newMeth(C$, 'getCompressedSize$',  function () {
return this.csize;
});

Clazz.newMeth(C$, 'setCompressedSize$J',  function (csize) {
this.csize=csize;
});

Clazz.newMeth(C$, 'setCrc$J',  function (crc) {
if (Long.$lt(crc,0 ) || Long.$gt(crc,4294967295 ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid entry crc-32"]);
}this.crc=crc;
});

Clazz.newMeth(C$, 'getCrc$',  function () {
return this.crc;
});

Clazz.newMeth(C$, 'setMethod$I',  function (method) {
if (method != 0 && method != 8 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid compression method"]);
}this.method=method;
});

Clazz.newMeth(C$, 'getMethod$',  function () {
return this.method;
});

Clazz.newMeth(C$, 'setExtra$BA',  function (extra) {
if (extra != null  && extra.length > 65535 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid extra field length"]);
}this.extra=extra;
});

Clazz.newMeth(C$, 'getExtra$',  function () {
return this.extra;
});

Clazz.newMeth(C$, 'setComment$S',  function (comment) {
this.comment=comment;
});

Clazz.newMeth(C$, 'getComment$',  function () {
return this.comment;
});

Clazz.newMeth(C$, 'isDirectory$',  function () {
return this.name.endsWith$S("/");
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getName$();
});

Clazz.newMeth(C$, 'dosToJavaTime$J',  function (dtime) {
var d=Clazz.new_(java.util.Date.c$$I$I$I$I$I$I,[Long.$ival((Long.$add((Long.$and((Long.$sr(dtime,25)),127)),80))), Long.$ival((Long.$sub((Long.$and((Long.$sr(dtime,21)),15)),1))), Long.$ival((Long.$and((Long.$sr(dtime,16)),31))), Long.$ival((Long.$and((Long.$sr(dtime,11)),31))), Long.$ival((Long.$and((Long.$sr(dtime,5)),63))), Long.$ival((Long.$and((Long.$sl(dtime,1)),62)))]);
return d.getTime$();
}, 1);

Clazz.newMeth(C$, 'javaToDosTime$J',  function (time) {
var d=Clazz.new_(java.util.Date.c$$J,[time]);
var year=d.getYear$() + 1900;
if (year < 1980) {
return 2162688;
}return (year - 1980) << 25 | (d.getMonth$() + 1) << 21 | d.getDate$() << 16 | d.getHours$() << 11 | d.getMinutes$() << 5 | d.getSeconds$() >> 1;
}, 1);

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.name.hashCode$();
});

Clazz.newMeth(C$, 'clone$',  function () {
try {
var e=Clazz.clone(this);
if (this.extra != null ) {
e.extra=Clazz.array(Byte.TYPE, [this.extra.length]);
System.arraycopy$O$I$O$I$I(this.extra, 0, e.extra, 0, this.extra.length);
}return e;
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(2,1));
} else {
throw e;
}
}
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
