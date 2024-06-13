(function(){var P$=java.util,p$1={},p$2={},p$3={},I$=[[0,'java.util.Arrays','java.nio.ByteBuffer','java.util.Objects',['java.util.Base64','.EncOutputStream'],['java.util.Base64','.Encoder'],'java.nio.charset.StandardCharsets',['java.util.Base64','.DecInputStream'],['java.util.Base64','.Decoder']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Base64", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Encoder',9],['Decoder',9],['EncOutputStream',10],['DecInputStream',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getEncoder$',  function () {
return $I$(5).RFC4648;
}, 1);

Clazz.newMeth(C$, 'getUrlEncoder$',  function () {
return $I$(5).RFC4648_URLSAFE;
}, 1);

Clazz.newMeth(C$, 'getMimeEncoder$',  function () {
return $I$(5).RFC2045;
}, 1);

Clazz.newMeth(C$, 'getMimeEncoder$I$BA',  function (lineLength, lineSeparator) {
$I$(3).requireNonNull$O(lineSeparator);
var base64=$I$(8).fromBase64;
for (var b, $b = 0, $$b = lineSeparator; $b<$$b.length&&((b=($$b[$b])),1);$b++) {
if (base64[b & 255] != -1) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal base64 line separator character 0x" + Integer.toString$I$I(b, 16)]);
}
if (lineLength <= 0) {
return $I$(5).RFC4648;
}return Clazz.new_($I$(5,1).c$$Z$BA$I$Z,[false, lineSeparator, lineLength >> 2 << 2, true]);
}, 1);

Clazz.newMeth(C$, 'getDecoder$',  function () {
return $I$(8).RFC4648;
}, 1);

Clazz.newMeth(C$, 'getUrlDecoder$',  function () {
return $I$(8).RFC4648_URLSAFE;
}, 1);

Clazz.newMeth(C$, 'getMimeDecoder$',  function () {
return $I$(8).RFC2045;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.Base64, "Encoder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isURL','doPadding'],'I',['linemax'],'O',['newline','byte[]']]
,['O',['toBase64','char[]','+toBase64URL','CRLF','byte[]','RFC4648','java.util.Base64.Encoder','+RFC4648_URLSAFE','+RFC2045']]]

Clazz.newMeth(C$, 'c$$Z$BA$I$Z',  function (isURL, newline, linemax, doPadding) {
;C$.$init$.apply(this);
this.isURL=isURL;
this.newline=newline;
this.linemax=linemax;
this.doPadding=doPadding;
}, 1);

Clazz.newMeth(C$, 'outLength$I',  function (srclen) {
var len=0;
if (this.doPadding) {
len=4 * (((srclen + 2)/3|0));
} else {
var n=srclen % 3;
len=4 * ((srclen/3|0)) + (n == 0 ? 0 : n + 1);
}if (this.linemax > 0) len+=((len - 1)/this.linemax|0) * this.newline.length;
return len;
}, p$1);

Clazz.newMeth(C$, 'encode$BA',  function (src) {
var len=p$1.outLength$I.apply(this, [src.length]);
var dst=Clazz.array(Byte.TYPE, [len]);
var ret=p$1.encode0$BA$I$I$BA.apply(this, [src, 0, src.length, dst]);
if (ret != dst.length) return $I$(1).copyOf$BA$I(dst, ret);
return dst;
});

Clazz.newMeth(C$, 'encode$BA$BA',  function (src, dst) {
var len=p$1.outLength$I.apply(this, [src.length]);
if (dst.length < len) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Output byte array is too small for encoding all input bytes"]);
return p$1.encode0$BA$I$I$BA.apply(this, [src, 0, src.length, dst]);
});

Clazz.newMeth(C$, 'encodeToString$BA',  function (src) {
var encoded=this.encode$BA(src);
return  String.instantialize(encoded, 0, 0, encoded.length);
});

Clazz.newMeth(C$, 'encode$java_nio_ByteBuffer',  function (buffer) {
var len=p$1.outLength$I.apply(this, [buffer.remaining$()]);
var dst=Clazz.array(Byte.TYPE, [len]);
var ret=0;
if (buffer.hasArray$()) {
ret=p$1.encode0$BA$I$I$BA.apply(this, [buffer.array$(), buffer.arrayOffset$() + buffer.position$(), buffer.arrayOffset$() + buffer.limit$(), dst]);
buffer.position$I(buffer.limit$());
} else {
var src=Clazz.array(Byte.TYPE, [buffer.remaining$()]);
buffer.get$BA(src);
ret=p$1.encode0$BA$I$I$BA.apply(this, [src, 0, src.length, dst]);
}if (ret != dst.length) dst=$I$(1).copyOf$BA$I(dst, ret);
return $I$(2).wrap$BA(dst);
});

Clazz.newMeth(C$, 'wrap$java_io_OutputStream',  function (os) {
$I$(3).requireNonNull$O(os);
return Clazz.new_($I$(4,1).c$$java_io_OutputStream$CA$BA$I$Z,[os, this.isURL ? C$.toBase64URL : C$.toBase64, this.newline, this.linemax, this.doPadding]);
});

Clazz.newMeth(C$, 'withoutPadding$',  function () {
if (!this.doPadding) return this;
return Clazz.new_(C$.c$$Z$BA$I$Z,[this.isURL, this.newline, this.linemax, false]);
});

Clazz.newMeth(C$, 'encode0$BA$I$I$BA',  function (src, off, end, dst) {
var base64=this.isURL ? C$.toBase64URL : C$.toBase64;
var sp=off;
var slen=((end - off)/3|0) * 3;
var sl=off + slen;
if (this.linemax > 0 && slen > (this.linemax/4|0) * 3 ) slen=(this.linemax/4|0) * 3;
var dp=0;
while (sp < sl){
var sl0=Math.min(sp + slen, sl);
for (var sp0=sp, dp0=dp; sp0 < sl0; ) {
var bits=(src[sp0++] & 255) << 16 | (src[sp0++] & 255) << 8 | (src[sp0++] & 255);
dst[dp0++]=(base64[(bits >>> 18) & 63].$c()|0);
dst[dp0++]=(base64[(bits >>> 12) & 63].$c()|0);
dst[dp0++]=(base64[(bits >>> 6) & 63].$c()|0);
dst[dp0++]=(base64[bits & 63].$c()|0);
}
var dlen=((sl0 - sp)/3|0) * 4;
dp+=dlen;
sp=sl0;
if (dlen == this.linemax && sp < end ) {
for (var b, $b = 0, $$b = this.newline; $b<$$b.length&&((b=($$b[$b])),1);$b++) {
dst[dp++]=b;
}
}}
if (sp < end) {
var b0=src[sp++] & 255;
dst[dp++]=(base64[b0 >> 2].$c()|0);
if (sp == end) {
dst[dp++]=(base64[(b0 << 4) & 63].$c()|0);
if (this.doPadding) {
dst[dp++]=("=".$c()|0);
dst[dp++]=("=".$c()|0);
}} else {
var b1=src[sp++] & 255;
dst[dp++]=(base64[(b0 << 4) & 63 | (b1 >> 4)].$c()|0);
dst[dp++]=(base64[(b1 << 2) & 63].$c()|0);
if (this.doPadding) {
dst[dp++]=("=".$c()|0);
}}}return dp;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.toBase64=Clazz.array(Character.TYPE, -1, ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/"]);
C$.toBase64URL=Clazz.array(Character.TYPE, -1, ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "_"]);
C$.CRLF=Clazz.array(Byte.TYPE, -1, ["\r", "\n"]);
C$.RFC4648=Clazz.new_(C$.c$$Z$BA$I$Z,[false, null, -1, true]);
C$.RFC4648_URLSAFE=Clazz.new_(C$.c$$Z$BA$I$Z,[true, null, -1, true]);
C$.RFC2045=Clazz.new_(C$.c$$Z$BA$I$Z,[false, C$.CRLF, 76, true]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Base64, "Decoder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isURL','isMIME']]
,['O',['fromBase64','int[]','+fromBase64URL','RFC4648','java.util.Base64.Decoder','+RFC4648_URLSAFE','+RFC2045']]]

Clazz.newMeth(C$, 'c$$Z$Z',  function (isURL, isMIME) {
;C$.$init$.apply(this);
this.isURL=isURL;
this.isMIME=isMIME;
}, 1);

Clazz.newMeth(C$, 'decode$BA',  function (src) {
var dst=Clazz.array(Byte.TYPE, [p$2.outLength$BA$I$I.apply(this, [src, 0, src.length])]);
var ret=p$2.decode0$BA$I$I$BA.apply(this, [src, 0, src.length, dst]);
if (ret != dst.length) {
dst=$I$(1).copyOf$BA$I(dst, ret);
}return dst;
});

Clazz.newMeth(C$, 'decode$S',  function (src) {
return this.decode$BA(src.getBytes$java_nio_charset_Charset($I$(6).ISO_8859_1));
});

Clazz.newMeth(C$, 'decode$BA$BA',  function (src, dst) {
var len=p$2.outLength$BA$I$I.apply(this, [src, 0, src.length]);
if (dst.length < len) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Output byte array is too small for decoding all input bytes"]);
return p$2.decode0$BA$I$I$BA.apply(this, [src, 0, src.length, dst]);
});

Clazz.newMeth(C$, 'decode$java_nio_ByteBuffer',  function (buffer) {
var pos0=buffer.position$();
try {
var src;
var sp;
var sl;
if (buffer.hasArray$()) {
src=buffer.array$();
sp=buffer.arrayOffset$() + buffer.position$();
sl=buffer.arrayOffset$() + buffer.limit$();
buffer.position$I(buffer.limit$());
} else {
src=Clazz.array(Byte.TYPE, [buffer.remaining$()]);
buffer.get$BA(src);
sp=0;
sl=src.length;
}var dst=Clazz.array(Byte.TYPE, [p$2.outLength$BA$I$I.apply(this, [src, sp, sl])]);
return $I$(2,"wrap$BA$I$I",[dst, 0, p$2.decode0$BA$I$I$BA.apply(this, [src, sp, sl, dst])]);
} catch (iae) {
if (Clazz.exceptionOf(iae,"IllegalArgumentException")){
buffer.position$I(pos0);
throw iae;
} else {
throw iae;
}
}
});

Clazz.newMeth(C$, 'wrap$java_io_InputStream',  function (is) {
$I$(3).requireNonNull$O(is);
return Clazz.new_($I$(7,1).c$$java_io_InputStream$IA$Z,[is, this.isURL ? C$.fromBase64URL : C$.fromBase64, this.isMIME]);
});

Clazz.newMeth(C$, 'outLength$BA$I$I',  function (src, sp, sl) {
var base64=this.isURL ? C$.fromBase64URL : C$.fromBase64;
var paddings=0;
var len=sl - sp;
if (len == 0) return 0;
if (len < 2) {
if (this.isMIME && base64[0] == -1 ) return 0;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Input byte[] should at least have 2 bytes for base64 bytes"]);
}if (this.isMIME) {
var n=0;
while (sp < sl){
var b=src[sp++] & 255;
if (b == 61 ) {
len-=(sl - sp + 1);
break;
}if ((b=base64[b]) == -1) ++n;
}
len-=n;
} else {
if (src[sl - 1] == 61 ) {
++paddings;
if (src[sl - 2] == 61 ) ++paddings;
}}if (paddings == 0 && (len & 3) != 0 ) paddings=4 - (len & 3);
return 3 * (((len + 3)/4|0)) - paddings;
}, p$2);

Clazz.newMeth(C$, 'decode0$BA$I$I$BA',  function (src, sp, sl, dst) {
var base64=this.isURL ? C$.fromBase64URL : C$.fromBase64;
var dp=0;
var bits=0;
var shiftto=18;
while (sp < sl){
var b=src[sp++] & 255;
if ((b=base64[b]) < 0) {
if (b == -2) {
if (shiftto == 6 && (sp == sl || src[sp++] != 61  )  || shiftto == 18 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Input byte array has wrong 4-byte ending unit"]);
}break;
}if (this.isMIME) continue;
 else throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Illegal base64 character " + Integer.toString$I$I(src[sp - 1], 16)]);
}bits|=(b << shiftto);
shiftto-=6;
if (shiftto < 0) {
dst[dp++]=((bits >> 16)|0);
dst[dp++]=((bits >> 8)|0);
dst[dp++]=((bits)|0);
shiftto=18;
bits=0;
}}
if (shiftto == 6) {
dst[dp++]=((bits >> 16)|0);
} else if (shiftto == 0) {
dst[dp++]=((bits >> 16)|0);
dst[dp++]=((bits >> 8)|0);
} else if (shiftto == 12) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Last unit does not have enough valid bits"]);
}while (sp < sl){
if (this.isMIME && base64[src[sp++]] < 0 ) continue;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Input byte array has incorrect ending byte at " + sp]);
}
return dp;
}, p$2);

C$.$static$=function(){C$.$static$=0;
C$.fromBase64=Clazz.array(Integer.TYPE, [256]);
{
$I$(1).fill$IA$I(C$.fromBase64, -1);
for (var i=0; i < $I$(5).toBase64.length; i++) C$.fromBase64[($I$(5).toBase64[i]).$c()]=i;

C$.fromBase64[61]=-2;
};
C$.fromBase64URL=Clazz.array(Integer.TYPE, [256]);
{
$I$(1).fill$IA$I(C$.fromBase64URL, -1);
for (var i=0; i < $I$(5).toBase64URL.length; i++) C$.fromBase64URL[($I$(5).toBase64URL[i]).$c()]=i;

C$.fromBase64URL[61]=-2;
};
C$.RFC4648=Clazz.new_(C$.c$$Z$Z,[false, false]);
C$.RFC4648_URLSAFE=Clazz.new_(C$.c$$Z$Z,[true, false]);
C$.RFC2045=Clazz.new_(C$.c$$Z$Z,[false, true]);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Base64, "EncOutputStream", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.io.FilterOutputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.leftover=0;
this.closed=false;
this.linepos=0;
},1);

C$.$fields$=[['Z',['closed','doPadding'],'I',['leftover','b0','b1','b2','linemax','linepos'],'O',['base64','char[]','newline','byte[]']]]

Clazz.newMeth(C$, 'c$$java_io_OutputStream$CA$BA$I$Z',  function (os, base64, newline, linemax, doPadding) {
;C$.superclazz.c$$java_io_OutputStream.apply(this,[os]);C$.$init$.apply(this);
this.base64=base64;
this.newline=newline;
this.linemax=linemax;
this.doPadding=doPadding;
}, 1);

Clazz.newMeth(C$, 'write$I',  function (b) {
var buf=Clazz.array(Byte.TYPE, [1]);
buf[0]=((b & 255)|0);
this.write$BA$I$I(buf, 0, 1);
});

Clazz.newMeth(C$, 'checkNewline',  function () {
if (this.linepos == this.linemax) {
this.out.write$BA(this.newline);
this.linepos=0;
}}, p$3);

Clazz.newMeth(C$, 'write$BA$I$I',  function (b, off, len) {
if (this.closed) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream is closed"]);
if (off < 0 || len < 0  || off + len > b.length ) throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException'));
if (len == 0) return;
if (this.leftover != 0) {
if (this.leftover == 1) {
this.b1=b[off++] & 255;
--len;
if (len == 0) {
++this.leftover;
return;
}}this.b2=b[off++] & 255;
--len;
p$3.checkNewline.apply(this, []);
this.out.write$I(this.base64[this.b0 >> 2].$c());
this.out.write$I(this.base64[(this.b0 << 4) & 63 | (this.b1 >> 4)].$c());
this.out.write$I(this.base64[(this.b1 << 2) & 63 | (this.b2 >> 6)].$c());
this.out.write$I(this.base64[this.b2 & 63].$c());
this.linepos+=4;
}var nBits24=(len/3|0);
this.leftover=len - (nBits24 * 3);
while (nBits24-- > 0){
p$3.checkNewline.apply(this, []);
var bits=(b[off++] & 255) << 16 | (b[off++] & 255) << 8 | (b[off++] & 255);
this.out.write$I(this.base64[(bits >>> 18) & 63].$c());
this.out.write$I(this.base64[(bits >>> 12) & 63].$c());
this.out.write$I(this.base64[(bits >>> 6) & 63].$c());
this.out.write$I(this.base64[bits & 63].$c());
this.linepos+=4;
}
if (this.leftover == 1) {
this.b0=b[off++] & 255;
} else if (this.leftover == 2) {
this.b0=b[off++] & 255;
this.b1=b[off++] & 255;
}});

Clazz.newMeth(C$, 'close$',  function () {
if (!this.closed) {
this.closed=true;
if (this.leftover == 1) {
p$3.checkNewline.apply(this, []);
this.out.write$I(this.base64[this.b0 >> 2].$c());
this.out.write$I(this.base64[(this.b0 << 4) & 63].$c());
if (this.doPadding) {
this.out.write$I("=".$c());
this.out.write$I("=".$c());
}} else if (this.leftover == 2) {
p$3.checkNewline.apply(this, []);
this.out.write$I(this.base64[this.b0 >> 2].$c());
this.out.write$I(this.base64[(this.b0 << 4) & 63 | (this.b1 >> 4)].$c());
this.out.write$I(this.base64[(this.b1 << 2) & 63].$c());
if (this.doPadding) {
this.out.write$I("=".$c());
}}this.leftover=0;
this.out.close$();
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Base64, "DecInputStream", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.io.InputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bits=0;
this.nextin=18;
this.nextout=-8;
this.eof=false;
this.closed=false;
this.sbBuf=Clazz.array(Byte.TYPE, [1]);
},1);

C$.$fields$=[['Z',['isMIME','eof','closed'],'I',['bits','nextin','nextout'],'O',['is','java.io.InputStream','base64','int[]','sbBuf','byte[]']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream$IA$Z',  function (is, base64, isMIME) {
Clazz.super_(C$, this);
this.is=is;
this.base64=base64;
this.isMIME=isMIME;
}, 1);

Clazz.newMeth(C$, 'read$',  function () {
return this.read$BA$I$I(this.sbBuf, 0, 1) == -1 ? -1 : this.sbBuf[0] & 255;
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, off, len) {
if (this.closed) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream is closed"]);
if (this.eof && this.nextout < 0 ) return -1;
if (off < 0 || len < 0  || len > b.length - off ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
var oldOff=off;
if (this.nextout >= 0) {
do {
if (len == 0) return off - oldOff;
b[off++]=((this.bits >> this.nextout)|0);
--len;
this.nextout-=8;
} while (this.nextout >= 0);
this.bits=0;
}while (len > 0){
var v=this.is.read$();
if (v == -1) {
this.eof=true;
if (this.nextin != 18) {
if (this.nextin == 12) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Base64 stream has one un-decoded dangling byte."]);
b[off++]=((this.bits >> (16))|0);
--len;
if (this.nextin == 0) {
if (len == 0) {
this.bits>>=8;
this.nextout=0;
} else {
b[off++]=((this.bits >> 8)|0);
}}}if (off == oldOff) return -1;
 else return off - oldOff;
}if (v == 61 ) {
if (this.nextin == 18 || this.nextin == 12  || this.nextin == 6 && this.is.read$() != 61   ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Illegal base64 ending sequence:" + this.nextin]);
}b[off++]=((this.bits >> (16))|0);
--len;
if (this.nextin == 0) {
if (len == 0) {
this.bits>>=8;
this.nextout=0;
} else {
b[off++]=((this.bits >> 8)|0);
}}this.eof=true;
break;
}if ((v=this.base64[v]) == -1) {
if (this.isMIME) continue;
 else throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Illegal base64 character " + Integer.toString$I$I(v, 16)]);
}this.bits|=(v << this.nextin);
if (this.nextin == 0) {
this.nextin=18;
this.nextout=16;
while (this.nextout >= 0){
b[off++]=((this.bits >> this.nextout)|0);
--len;
this.nextout-=8;
if (len == 0 && this.nextout >= 0 ) {
return off - oldOff;
}}
this.bits=0;
} else {
this.nextin-=6;
}}
return off - oldOff;
});

Clazz.newMeth(C$, 'available$',  function () {
if (this.closed) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream is closed"]);
return this.is.available$();
});

Clazz.newMeth(C$, 'close$',  function () {
if (!this.closed) {
this.closed=true;
this.is.close$();
}});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:31 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
