(function(){var P$=Clazz.newPackage("com.jcraft.jzlib"),p$1={},I$=[[0,'com.jcraft.jzlib.InfBlocks','com.jcraft.jzlib.CRC32','com.jcraft.jzlib.GZIPHeader','com.jcraft.jzlib.Adler32',['com.jcraft.jzlib.Inflate','.Return'],'java.io.ByteArrayOutputStream']],$I$=function(i){return I$[i]||(I$[i]=Clazz.load(I$[0][i]))};
var C$=Clazz.newClass(P$, "Inflate", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.mark=null;

C$.$clinit$ = function() {Clazz.load(C$, 1);
C$.mark=Clazz.array(Byte.TYPE, -1, [0, 0, -1, -1]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.mode=0;
this.method=0;
this.was=0;
this.need=0;
this.marker=0;
this.wrap=0;
this.wbits=0;
this.blocks=null;
this.z=null;
this.flags=0;
this.need_bytes=0;
this.crcbuf=null;
this.gheader=null;
this.tmp_string=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
this.was=-1;
this.need_bytes=-1;
this.crcbuf=Clazz.array(Byte.TYPE, [4]);
this.gheader=null;
this.tmp_string=null;
}, 1);

Clazz.newMeth(C$, 'reset$', function () {
this.inflateReset$();
});

Clazz.newMeth(C$, 'inflateReset$', function () {
if (this.z == null ) return -2;
this.z.total_in=this.z.total_out=0;
this.z.msg=null;
this.mode=14;
this.need_bytes=-1;
this.blocks.reset$();
return 0;
});

Clazz.newMeth(C$, 'inflateEnd$', function () {
if (this.blocks != null ) {
this.blocks.free$();
}return 0;
});

Clazz.newMeth(C$, 'c$$com_jcraft_jzlib_ZStream', function (z) {
C$.$init$.apply(this);
this.z=z;
}, 1);

Clazz.newMeth(C$, 'inflateInit$I', function (w) {
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
this.blocks=Clazz.new_(Clazz.load('com.jcraft.jzlib.InfBlocks').c$$com_jcraft_jzlib_ZStream$I,[this.z, 1 << w]);
this.inflateReset$();
return 0;
});

Clazz.newMeth(C$, 'inflate$I', function (f) {
var r;
var b;
if (this.z == null  || this.z.next_in == null  ) {
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
if (Clazz.exceptionOf(e,"com.jcraft.jzlib.Inflate.Return")){
return e.r;
} else {
throw e;
}
}
if ((this.wrap & 2) != 0 && this.need == 35615 ) {
this.z.checksum=Clazz.new_(Clazz.load('com.jcraft.jzlib.CRC32'));
p$1.checksum$I$J.apply(this, [2, this.need]);
if (this.gheader == null ) this.gheader=Clazz.new_(Clazz.load('com.jcraft.jzlib.GZIPHeader'));
this.mode=23;
break;
}this.flags=0;
this.method=((this.need|0)) & 255;
b=(((this.need >> 8)|0)) & 255;
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
}this.z.checksum=Clazz.new_(Clazz.load('com.jcraft.jzlib.Adler32'));
if ((b & 32) == 0) {
this.mode=7;
break;
}this.mode=2;
case 2:
if (this.z.avail_in == 0) return r;
r=f;
this.z.avail_in--;
this.z.total_in++;
this.need=((this.z.next_in[this.z.next_in_index++] & 255) << 24) & 4278190080;
this.mode=3;
case 3:
if (this.z.avail_in == 0) return r;
r=f;
this.z.avail_in--;
this.z.total_in++;
this.need+=((this.z.next_in[this.z.next_in_index++] & 255) << 16) & 16711680;
this.mode=4;
case 4:
if (this.z.avail_in == 0) return r;
r=f;
this.z.avail_in--;
this.z.total_in++;
this.need+=((this.z.next_in[this.z.next_in_index++] & 255) << 8) & 65280;
this.mode=5;
case 5:
if (this.z.avail_in == 0) return r;
r=f;
this.z.avail_in--;
this.z.total_in++;
this.need+=(this.z.next_in[this.z.next_in_index++] & 255);
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
this.z.avail_in--;
this.z.total_in++;
this.need=((this.z.next_in[this.z.next_in_index++] & 255) << 24) & 4278190080;
this.mode=9;
case 9:
if (this.z.avail_in == 0) return r;
r=f;
this.z.avail_in--;
this.z.total_in++;
this.need+=((this.z.next_in[this.z.next_in_index++] & 255) << 16) & 16711680;
this.mode=10;
case 10:
if (this.z.avail_in == 0) return r;
r=f;
this.z.avail_in--;
this.z.total_in++;
this.need+=((this.z.next_in[this.z.next_in_index++] & 255) << 8) & 65280;
this.mode=11;
case 11:
if (this.z.avail_in == 0) return r;
r=f;
this.z.avail_in--;
this.z.total_in++;
this.need+=(this.z.next_in[this.z.next_in_index++] & 255);
if (this.flags != 0) {
this.need=((this.need & -16777216) >> 24 | (this.need & 16711680) >> 8 | (this.need & 65280) << 8 | (this.need & 65535) << 24) & 4294967295;
}if ((((this.was)|0)) != (((this.need)|0))) {
this.z.msg="incorrect data check";
} else if (this.flags != 0 && this.gheader != null  ) {
this.gheader.crc=this.need;
}this.mode=15;
case 15:
if (this.wrap != 0 && this.flags != 0 ) {
try {
r=p$1.readBytes$I$I$I.apply(this, [4, r, f]);
} catch (e) {
if (Clazz.exceptionOf(e,"com.jcraft.jzlib.Inflate.Return")){
return e.r;
} else {
throw e;
}
}
if (this.z.msg != null  && this.z.msg.equals$O("incorrect data check") ) {
this.mode=13;
this.marker=5;
break;
}if (this.need != (this.z.total_out & 4294967295)) {
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
if (Clazz.exceptionOf(e,"com.jcraft.jzlib.Inflate.Return")){
return e.r;
} else {
throw e;
}
}
this.flags=((this.need|0)) & 65535;
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
if (Clazz.exceptionOf(e,"com.jcraft.jzlib.Inflate.Return")){
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
if (Clazz.exceptionOf(e,"com.jcraft.jzlib.Inflate.Return")){
return e.r;
} else {
throw e;
}
}
if (this.gheader != null ) {
this.gheader.xflags=((this.need|0)) & 255;
this.gheader.os=(((this.need|0)) >> 8) & 255;
}if ((this.flags & 512) != 0) {
p$1.checksum$I$J.apply(this, [2, this.need]);
}this.mode=18;
case 18:
if ((this.flags & 1024) != 0) {
try {
r=p$1.readBytes$I$I$I.apply(this, [2, r, f]);
} catch (e) {
if (Clazz.exceptionOf(e,"com.jcraft.jzlib.Inflate.Return")){
return e.r;
} else {
throw e;
}
}
if (this.gheader != null ) {
this.gheader.extra=Clazz.array(Byte.TYPE, [((this.need|0)) & 65535]);
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
if (Clazz.exceptionOf(e,"com.jcraft.jzlib.Inflate.Return")){
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
if (Clazz.exceptionOf(e,"com.jcraft.jzlib.Inflate.Return")){
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
if (Clazz.exceptionOf(e,"com.jcraft.jzlib.Inflate.Return")){
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
if (Clazz.exceptionOf(e,"com.jcraft.jzlib.Inflate.Return")){
return e.r;
} else {
throw e;
}
}
if (this.gheader != null ) {
this.gheader.hcrc=((this.need & 65535)|0);
}if (this.need != (this.z.checksum.getValue$() & 65535)) {
this.mode=13;
this.z.msg="header crc mismatch";
this.marker=5;
break;
}}this.z.checksum=Clazz.new_($I$(2));
this.mode=7;
break;
default:
return -2;
}
}
});

Clazz.newMeth(C$, 'inflateSetDictionary$BA$I', function (dictionary, dictLength) {
if (this.z == null  || (this.mode != 6 && this.wrap != 0 ) ) {
return -2;
}var index=0;
var length=dictLength;
if (this.mode == 6) {
var adler_need=this.z.checksum.getValue$();
this.z.checksum.reset$();
this.z.checksum.update$BA$I$I(dictionary, 0, dictLength);
if (this.z.checksum.getValue$() != adler_need) {
return -3;
}}this.z.checksum.reset$();
if (length >= (1 << this.wbits)) {
length=(1 << this.wbits) - 1;
index=dictLength - length;
}this.blocks.set_dictionary$BA$I$I(dictionary, index, length);
this.mode=7;
return 0;
});

Clazz.newMeth(C$, 'inflateSync$', function () {
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
p=this.z.next_in_index;
m=this.marker;
while (n != 0 && m < 4 ){
if (this.z.next_in[p] == C$.mark[m]) {
m++;
} else if (this.z.next_in[p] != 0) {
m=0;
} else {
m=4 - m;
}p++;
n--;
}
this.z.total_in+=p - this.z.next_in_index;
this.z.next_in_index=p;
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

Clazz.newMeth(C$, 'inflateSyncPoint$', function () {
if (this.z == null  || this.blocks == null  ) return -2;
return this.blocks.sync_point$();
});

Clazz.newMeth(C$, 'readBytes$I$I$I', function (n, r, f) {
if (this.need_bytes == -1) {
this.need_bytes=n;
this.need=0;
}while (this.need_bytes > 0){
if (this.z.avail_in == 0) {
throw Clazz.new_(Clazz.load(['com.jcraft.jzlib.Inflate','.Return']).c$$I, [this, null, r]);
}r=f;
this.z.avail_in--;
this.z.total_in++;
this.need=this.need | ((this.z.next_in[this.z.next_in_index++] & 255) << ((n - this.need_bytes) * 8));
this.need_bytes--;
}
if (n == 2) {
this.need&=65535;
} else if (n == 4) {
this.need&=4294967295;
}this.need_bytes=-1;
return r;
}, p$1);

Clazz.newMeth(C$, 'readString$I$I', function (r, f) {
if (this.tmp_string == null ) {
this.tmp_string=Clazz.new_(Clazz.load('java.io.ByteArrayOutputStream'));
}var b=0;
do {
if (this.z.avail_in == 0) {
throw Clazz.new_($I$(5).c$$I, [this, null, r]);
}r=f;
this.z.avail_in--;
this.z.total_in++;
b=this.z.next_in[this.z.next_in_index];
if (b != 0) this.tmp_string.write$BA$I$I(this.z.next_in, this.z.next_in_index, 1);
this.z.checksum.update$BA$I$I(this.z.next_in, this.z.next_in_index, 1);
this.z.next_in_index++;
} while (b != 0);
return r;
}, p$1);

Clazz.newMeth(C$, 'readBytes$I$I', function (r, f) {
if (this.tmp_string == null ) {
this.tmp_string=Clazz.new_($I$(6));
}while (this.need > 0){
if (this.z.avail_in == 0) {
throw Clazz.new_($I$(5).c$$I, [this, null, r]);
}r=f;
this.z.avail_in--;
this.z.total_in++;
this.tmp_string.write$BA$I$I(this.z.next_in, this.z.next_in_index, 1);
this.z.checksum.update$BA$I$I(this.z.next_in, this.z.next_in_index, 1);
this.z.next_in_index++;
this.need--;
}
return r;
}, p$1);

Clazz.newMeth(C$, 'checksum$I$J', function (n, v) {
for (var i=0; i < n; i++) {
this.crcbuf[i]=(((v & 255)|0)|0);
v>>=8;
}
this.z.checksum.update$BA$I$I(this.crcbuf, 0, n);
}, p$1);

Clazz.newMeth(C$, 'getGZIPHeader$', function () {
return this.gheader;
});

Clazz.newMeth(C$, 'inParsingHeader$', function () {
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
;
(function(){var C$=Clazz.newClass(P$.Inflate, "Return", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Exception');

C$.$clinit$ = function() {Clazz.load(C$, 1);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.r=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (r) {
Clazz.super_(C$, this,1);
this.r=r;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.3.00');//Created 2023-11-12 14:15:55 Java2ScriptVisitor version 3.2.3.00 net.sf.j2s.core.jar version 3.2.3.00
