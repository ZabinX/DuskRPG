(function(){var P$=Clazz.newPackage("swingjs.jzlib"),p$1={},I$=[[0,'swingjs.jzlib.InfBlocks','swingjs.jzlib.CRC32','swingjs.jzlib.GZIPHeader','swingjs.jzlib.Adler32',['swingjs.jzlib.Inflate','.Return'],'java.io.ByteArrayOutputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Inflate", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Return',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.was=-1;
this.need秘bytes=-1;
this.crcbuf=Clazz.array(Byte.TYPE, [4]);
this.gheader=null;
this.tmp_string=null;
},1);

C$.$fields$=[['I',['mode','method','marker','wrap','wbits','flags','need秘bytes'],'J',['was','need'],'O',['blocks','swingjs.jzlib.InfBlocks','z','swingjs.jzlib.ZStream','crcbuf','byte[]','gheader','swingjs.jzlib.GZIPHeader','tmp_string','java.io.ByteArrayOutputStream']]
,['O',['mark','byte[]']]]

Clazz.newMeth(C$, 'reset$',  function () {
this.inflateReset$();
});

Clazz.newMeth(C$, 'inflateReset$',  function () {
if (this.z == null ) return -2;
this.z.total_in=this.z.total_out=0;
this.z.msg=null;
this.mode=14;
this.need秘bytes=-1;
this.blocks.reset$();
return 0;
});

Clazz.newMeth(C$, 'inflateEnd$',  function () {
if (this.blocks != null ) {
this.blocks.free$();
}return 0;
});

Clazz.newMeth(C$, 'c$$swingjs_jzlib_ZStream',  function (z) {
;C$.$init$.apply(this);
this.z=z;
}, 1);

Clazz.newMeth(C$, 'inflateInit$I',  function (w) {
this.z.msg=null;
this.blocks=null;
this.wrap=0;
if (w < 0) {
w=-w;
} else {
this.wrap=(w >> 4) + 1;
if (w < 48) w&=15;
}if (w < 8 || w > 15 ) {
this.inflateEnd$();
return -2;
}if (this.blocks != null  && this.wbits != w ) {
this.blocks.free$();
this.blocks=null;
}this.wbits=w;
this.blocks=Clazz.new_($I$(1,1).c$$swingjs_jzlib_ZStream$I,[this.z, 1 << w]);
this.inflateReset$();
return 0;
});

Clazz.newMeth(C$, 'inflate$I',  function (f) {
var r;
var b;
if (this.z == null  || this.z.$in == null  ) {
if (f == 4 && this.mode == 14 ) return 0;
return -2;
}f=f == 4 ? -5 : 0;
r=-5;
while (true){
switch (this.mode) {
case 14:
if (this.wrap == 0) {
this.mode=7;
break;
}try {
r=p$1.readBytes$I$I$I.apply(this, [2, r, f]);
} catch (e) {
if (Clazz.exceptionOf(e,"swingjs.jzlib.Inflate.Return")){
return e.r;
} else {
throw e;
}
}
if ((this.wrap & 2) != 0 && Long.$eq(this.need,35615 ) ) {
this.z.checksum=Clazz.new_($I$(2,1));
p$1.checksum$I$J.apply(this, [2, this.need]);
if (this.gheader == null ) this.gheader=Clazz.new_($I$(3,1));
this.mode=23;
break;
}this.flags=0;
this.method=(Long.$ival(this.need)) & 255;
b=(Long.$ival((Long.$sr(this.need,8)))) & 255;
if ((this.wrap & 1) == 0 || (((this.method << 8) + b) % 31) != 0 ) {
this.mode=13;
this.z.msg="incorrect header check";
break;
}if ((this.method & 15) != 8) {
this.mode=13;
this.z.msg="unknown compression method";
break;
}if ((this.method >> 4) + 8 > this.wbits) {
this.mode=13;
this.z.msg="invalid window size";
break;
}this.z.checksum=Clazz.new_($I$(4,1));
if ((b & 32) == 0) {
this.mode=7;
break;
}this.mode=2;
case 2:
if (this.z.avail_in == 0) return r;
r=f;
--this.z.avail_in;
(this.z.total_in=Long.$inc(this.z.total_in,1));
this.need=Long.$and(((this.z.$in[this.z.in_index++] & 255) << 24),4278190080);
this.mode=3;
case 3:
if (this.z.avail_in == 0) return r;
r=f;
--this.z.avail_in;
(this.z.total_in=Long.$inc(this.z.total_in,1));
(this.need=Long.$add(this.need,(Long.$and(((this.z.$in[this.z.in_index++] & 255) << 16),16711680))));
this.mode=4;
case 4:
if (this.z.avail_in == 0) return r;
r=f;
--this.z.avail_in;
(this.z.total_in=Long.$inc(this.z.total_in,1));
(this.need=Long.$add(this.need,(Long.$and(((this.z.$in[this.z.in_index++] & 255) << 8),65280))));
this.mode=5;
case 5:
if (this.z.avail_in == 0) return r;
r=f;
--this.z.avail_in;
(this.z.total_in=Long.$inc(this.z.total_in,1));
(this.need=Long.$add(this.need,((Long.$and(this.z.$in[this.z.in_index++],255)))));
this.z.checksum.resetLong$J(this.need);
this.mode=6;
return 2;
case 6:
this.mode=13;
this.z.msg="need dictionary";
this.marker=0;
return -2;
case 7:
r=this.blocks.proc$I(r);
if (r == -3) {
this.mode=13;
this.marker=0;
break;
}if (r == 0) {
r=f;
}if (r != 1) {
return r;
}r=f;
this.was=this.z.checksum.getValue$();
this.blocks.reset$();
if (this.wrap == 0) {
this.mode=12;
break;
}this.mode=8;
case 8:
if (this.z.avail_in == 0) return r;
r=f;
--this.z.avail_in;
(this.z.total_in=Long.$inc(this.z.total_in,1));
this.need=Long.$and(((this.z.$in[this.z.in_index++] & 255) << 24),4278190080);
this.mode=9;
case 9:
if (this.z.avail_in == 0) return r;
r=f;
--this.z.avail_in;
(this.z.total_in=Long.$inc(this.z.total_in,1));
(this.need=Long.$add(this.need,(Long.$and(((this.z.$in[this.z.in_index++] & 255) << 16),16711680))));
this.mode=10;
case 10:
if (this.z.avail_in == 0) return r;
r=f;
--this.z.avail_in;
(this.z.total_in=Long.$inc(this.z.total_in,1));
(this.need=Long.$add(this.need,(Long.$and(((this.z.$in[this.z.in_index++] & 255) << 8),65280))));
this.mode=11;
case 11:
if (this.z.avail_in == 0) return r;
r=f;
--this.z.avail_in;
(this.z.total_in=Long.$inc(this.z.total_in,1));
(this.need=Long.$add(this.need,((Long.$and(this.z.$in[this.z.in_index++],255)))));
if (this.flags != 0) {
this.need=Long.$and((Long.$or(Long.$or(Long.$or(Long.$sr((Long.$and(this.need,-16777216)),24),Long.$sr((Long.$and(this.need,16711680)),8)),Long.$sl((Long.$and(this.need,65280)),8)),Long.$sl((Long.$and(this.need,65535)),24))),4294967295);
}if ((Long.$ival((this.was))) != (Long.$ival((this.need)))) {
this.z.msg="incorrect data check";
} else if (this.flags != 0 && this.gheader != null  ) {
this.gheader.crc=this.need;
}this.mode=15;
case 15:
if (this.wrap != 0 && this.flags != 0 ) {
try {
r=p$1.readBytes$I$I$I.apply(this, [4, r, f]);
} catch (e) {
if (Clazz.exceptionOf(e,"swingjs.jzlib.Inflate.Return")){
return e.r;
} else {
throw e;
}
}
if (this.z.msg != null  && this.z.msg.equals$O("incorrect data check") ) {
this.mode=13;
this.marker=5;
break;
}if (Long.$ne(this.need,(Long.$and(this.z.total_out,4294967295)) )) {
this.z.msg="incorrect length check";
this.mode=13;
break;
}this.z.msg=null;
} else {
if (this.z.msg != null  && this.z.msg.equals$O("incorrect data check") ) {
this.mode=13;
this.marker=5;
break;
}}this.mode=12;
case 12:
return 1;
case 13:
return -3;
case 23:
try {
r=p$1.readBytes$I$I$I.apply(this, [2, r, f]);
} catch (e) {
if (Clazz.exceptionOf(e,"swingjs.jzlib.Inflate.Return")){
return e.r;
} else {
throw e;
}
}
this.flags=(Long.$ival(this.need)) & 65535;
if ((this.flags & 255) != 8) {
this.z.msg="unknown compression method";
this.mode=13;
break;
}if ((this.flags & 57344) != 0) {
this.z.msg="unknown header flags set";
this.mode=13;
break;
}if ((this.flags & 512) != 0) {
p$1.checksum$I$J.apply(this, [2, this.need]);
}this.mode=16;
case 16:
try {
r=p$1.readBytes$I$I$I.apply(this, [4, r, f]);
} catch (e) {
if (Clazz.exceptionOf(e,"swingjs.jzlib.Inflate.Return")){
return e.r;
} else {
throw e;
}
}
if (this.gheader != null ) this.gheader.time=this.need;
if ((this.flags & 512) != 0) {
p$1.checksum$I$J.apply(this, [4, this.need]);
}this.mode=17;
case 17:
try {
r=p$1.readBytes$I$I$I.apply(this, [2, r, f]);
} catch (e) {
if (Clazz.exceptionOf(e,"swingjs.jzlib.Inflate.Return")){
return e.r;
} else {
throw e;
}
}
if (this.gheader != null ) {
this.gheader.xflags=(Long.$ival(this.need)) & 255;
this.gheader.os=((Long.$ival(this.need)) >> 8) & 255;
}if ((this.flags & 512) != 0) {
p$1.checksum$I$J.apply(this, [2, this.need]);
}this.mode=18;
case 18:
if ((this.flags & 1024) != 0) {
try {
r=p$1.readBytes$I$I$I.apply(this, [2, r, f]);
} catch (e) {
if (Clazz.exceptionOf(e,"swingjs.jzlib.Inflate.Return")){
return e.r;
} else {
throw e;
}
}
if (this.gheader != null ) {
this.gheader.extra=Clazz.array(Byte.TYPE, [(Long.$ival(this.need)) & 65535]);
}if ((this.flags & 512) != 0) {
p$1.checksum$I$J.apply(this, [2, this.need]);
}} else if (this.gheader != null ) {
this.gheader.extra=null;
}this.mode=19;
case 19:
if ((this.flags & 1024) != 0) {
try {
r=p$1.readBytes$I$I.apply(this, [r, f]);
if (this.gheader != null ) {
var foo=this.tmp_string.toByteArray$();
this.tmp_string=null;
if (foo.length == this.gheader.extra.length) {
System.arraycopy$O$I$O$I$I(foo, 0, this.gheader.extra, 0, foo.length);
} else {
this.z.msg="bad extra field length";
this.mode=13;
break;
}}} catch (e) {
if (Clazz.exceptionOf(e,"swingjs.jzlib.Inflate.Return")){
return e.r;
} else {
throw e;
}
}
} else if (this.gheader != null ) {
this.gheader.extra=null;
}this.mode=20;
case 20:
if ((this.flags & 2048) != 0) {
try {
r=p$1.readString$I$I.apply(this, [r, f]);
if (this.gheader != null ) {
this.gheader.name=this.tmp_string.toByteArray$();
}this.tmp_string=null;
} catch (e) {
if (Clazz.exceptionOf(e,"swingjs.jzlib.Inflate.Return")){
return e.r;
} else {
throw e;
}
}
} else if (this.gheader != null ) {
this.gheader.name=null;
}this.mode=21;
case 21:
if ((this.flags & 4096) != 0) {
try {
r=p$1.readString$I$I.apply(this, [r, f]);
if (this.gheader != null ) {
this.gheader.comment=this.tmp_string.toByteArray$();
}this.tmp_string=null;
} catch (e) {
if (Clazz.exceptionOf(e,"swingjs.jzlib.Inflate.Return")){
return e.r;
} else {
throw e;
}
}
} else if (this.gheader != null ) {
this.gheader.comment=null;
}this.mode=22;
case 22:
if ((this.flags & 512) != 0) {
try {
r=p$1.readBytes$I$I$I.apply(this, [2, r, f]);
} catch (e) {
if (Clazz.exceptionOf(e,"swingjs.jzlib.Inflate.Return")){
return e.r;
} else {
throw e;
}
}
if (this.gheader != null ) {
this.gheader.hcrc=Long.$ival((Long.$and(this.need,65535)));
}if (Long.$ne(this.need,(Long.$and(this.z.checksum.getValue$(),65535)) )) {
this.mode=13;
this.z.msg="header crc mismatch";
this.marker=5;
break;
}}this.z.checksum=Clazz.new_($I$(2,1));
this.mode=7;
break;
default:
return -2;
}
}
});

Clazz.newMeth(C$, 'inflateSetDictionary$BA$I',  function (dictionary, dictLength) {
if (this.z == null  || (this.mode != 6 && this.wrap != 0 ) ) {
return -2;
}var index=0;
var length=dictLength;
if (this.mode == 6) {
var adler_need=this.z.checksum.getValue$();
this.z.checksum.reset$();
this.z.checksum.update$BA$I$I(dictionary, 0, dictLength);
if (Long.$ne(this.z.checksum.getValue$(),adler_need )) {
return -3;
}}this.z.checksum.reset$();
if (length >= (1 << this.wbits)) {
length=(1 << this.wbits) - 1;
index=dictLength - length;
}this.blocks.set_dictionary$BA$I$I(dictionary, index, length);
this.mode=7;
return 0;
});

Clazz.newMeth(C$, 'inflateSync$',  function () {
var n;
var p;
var m;
var r;
var w;
if (this.z == null ) return -2;
if (this.mode != 13) {
this.mode=13;
this.marker=0;
}if ((n=this.z.avail_in) == 0) return -5;
p=this.z.in_index;
m=this.marker;
while (n != 0 && m < 4 ){
if (this.z.$in[p] == C$.mark[m]) {
++m;
} else if (this.z.$in[p] != 0) {
m=0;
} else {
m=4 - m;
}++p;
--n;
}
(this.z.total_in=Long.$add(this.z.total_in,(p - this.z.in_index)));
this.z.in_index=p;
this.z.avail_in=n;
this.marker=m;
if (m != 4) {
return -3;
}r=this.z.total_in;
w=this.z.total_out;
this.inflateReset$();
this.z.total_in=r;
this.z.total_out=w;
this.mode=7;
return 0;
});

Clazz.newMeth(C$, 'inflateSyncPoint$',  function () {
if (this.z == null  || this.blocks == null  ) return -2;
return this.blocks.sync_point$();
});

Clazz.newMeth(C$, 'readBytes$I$I$I',  function (n, r, f) {
if (this.need秘bytes == -1) {
this.need秘bytes=n;
this.need=0;
}while (this.need秘bytes > 0){
if (this.z.avail_in == 0) {
throw Clazz.new_($I$(5,1).c$$I,[this, null, r]);
}r=f;
--this.z.avail_in;
(this.z.total_in=Long.$inc(this.z.total_in,1));
this.need=Long.$or(this.need,((this.z.$in[this.z.in_index++] & 255) << ((n - this.need秘bytes) * 8)));
--this.need秘bytes;
}
if (n == 2) {
(this.need=Long.$and(this.need,(65535)));
} else if (n == 4) {
(this.need=Long.$and(this.need,(4294967295)));
}this.need秘bytes=-1;
return r;
}, p$1);

Clazz.newMeth(C$, 'readString$I$I',  function (r, f) {
if (this.tmp_string == null ) {
this.tmp_string=Clazz.new_($I$(6,1));
}var b=0;
do {
if (this.z.avail_in == 0) {
throw Clazz.new_($I$(5,1).c$$I,[this, null, r]);
}r=f;
--this.z.avail_in;
(this.z.total_in=Long.$inc(this.z.total_in,1));
b=this.z.$in[this.z.in_index];
if (b != 0) this.tmp_string.write$BA$I$I(this.z.$in, this.z.in_index, 1);
this.z.checksum.update$BA$I$I(this.z.$in, this.z.in_index, 1);
++this.z.in_index;
} while (b != 0);
return r;
}, p$1);

Clazz.newMeth(C$, 'readBytes$I$I',  function (r, f) {
if (this.tmp_string == null ) {
this.tmp_string=Clazz.new_($I$(6,1));
}while (Long.$gt(this.need,0 )){
if (this.z.avail_in == 0) {
throw Clazz.new_($I$(5,1).c$$I,[this, null, r]);
}r=f;
--this.z.avail_in;
(this.z.total_in=Long.$inc(this.z.total_in,1));
this.tmp_string.write$BA$I$I(this.z.$in, this.z.in_index, 1);
this.z.checksum.update$BA$I$I(this.z.$in, this.z.in_index, 1);
++this.z.in_index;
(this.need=Long.$inc(this.need,-1));
}
return r;
}, p$1);

Clazz.newMeth(C$, 'checksum$I$J',  function (n, v) {
for (var i=0; i < n; i++) {
this.crcbuf[i]=((Long.$and(v,255))|0);
(v=Long.$sr(v,(8)));
}
this.z.checksum.update$BA$I$I(this.crcbuf, 0, n);
}, p$1);

Clazz.newMeth(C$, 'getGZIPHeader$',  function () {
return this.gheader;
});

Clazz.newMeth(C$, 'inParsingHeader$',  function () {
switch (this.mode) {
case 14:
case 2:
case 3:
case 4:
case 5:
case 23:
case 16:
case 17:
case 18:
case 19:
case 20:
case 21:
case 22:
return true;
default:
return false;
}
});

C$.$static$=function(){C$.$static$=0;
C$.mark=Clazz.array(Byte.TYPE, -1, [0, 0, -1, -1]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.Inflate, "Return", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['r']]]

Clazz.newMeth(C$, 'c$$I',  function (r) {
Clazz.super_(C$, this);
this.r=r;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:04 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
