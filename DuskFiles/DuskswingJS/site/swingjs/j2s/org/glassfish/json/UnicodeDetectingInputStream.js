(function(){var P$=Clazz.newPackage("org.glassfish.json"),p$1={},I$=[[0,'java.nio.charset.Charset']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UnicodeDetectingInputStream", null, 'java.io.FilterInputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.buf=Clazz.array(Byte.TYPE, [4]);
},1);

C$.$fields$=[['I',['bufLen','curIndex'],'O',['buf','byte[]','charset','java.nio.charset.Charset']]
,['O',['UTF_8','java.nio.charset.Charset','+UTF_16BE','+UTF_16LE','+UTF_32LE','+UTF_32BE']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function (is) {
;C$.superclazz.c$$java_io_InputStream.apply(this,[is]);C$.$init$.apply(this);
this.charset=p$1.detectEncoding.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getCharset$',  function () {
return this.charset;
});

Clazz.newMeth(C$, 'fillBuf',  function () {
var b1;
var b2;
var b3;
var b4;
try {
b1=this.$in.read$();
if (b1 == -1) {
return;
}b2=this.$in.read$();
if (b2 == -1) {
this.bufLen=1;
this.buf[0]=(b1|0);
return;
}b3=this.$in.read$();
if (b3 == -1) {
this.bufLen=2;
this.buf[0]=(b1|0);
this.buf[1]=(b2|0);
return;
}b4=this.$in.read$();
if (b4 == -1) {
this.bufLen=3;
this.buf[0]=(b1|0);
this.buf[1]=(b2|0);
this.buf[2]=(b3|0);
return;
}this.bufLen=4;
this.buf[0]=(b1|0);
this.buf[1]=(b2|0);
this.buf[2]=(b3|0);
this.buf[3]=(b4|0);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S$Throwable,["I/O error while auto-detecting the encoding of stream", ioe]);
} else {
throw ioe;
}
}
}, p$1);

Clazz.newMeth(C$, 'detectEncoding',  function () {
p$1.fillBuf.apply(this, []);
if (this.bufLen < 2) {
throw Clazz.new_(Clazz.load('javax.json.JsonException').c$$S,["Cannot auto-detect encoding, not enough chars"]);
} else if (this.bufLen == 4) {
if (this.buf[0] == 0 && this.buf[1] == 0  && this.buf[2] == -2  && this.buf[3] == -1 ) {
this.curIndex=4;
return C$.UTF_32BE;
} else if (this.buf[0] == -1 && this.buf[1] == -2  && this.buf[2] == 0  && this.buf[3] == 0 ) {
this.curIndex=4;
return C$.UTF_32LE;
} else if (this.buf[0] == -2 && this.buf[1] == -1 ) {
this.curIndex=2;
return C$.UTF_16BE;
} else if (this.buf[0] == -1 && this.buf[1] == -2 ) {
this.curIndex=2;
return C$.UTF_16LE;
} else if (this.buf[0] == -17 && this.buf[1] == -69  && this.buf[2] == -65 ) {
this.curIndex=3;
return C$.UTF_8;
}if (this.buf[0] == 0 && this.buf[1] == 0  && this.buf[2] == 0 ) {
return C$.UTF_32BE;
} else if (this.buf[0] == 0 && this.buf[2] == 0 ) {
return C$.UTF_16BE;
} else if (this.buf[1] == 0 && this.buf[2] == 0  && this.buf[3] == 0 ) {
return C$.UTF_32LE;
} else if (this.buf[1] == 0 && this.buf[3] == 0 ) {
return C$.UTF_16LE;
}}return C$.UTF_8;
}, p$1);

Clazz.newMeth(C$, 'read$',  function () {
if (this.curIndex < this.bufLen) {
return this.buf[this.curIndex++];
}return this.$in.read$();
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, off, len) {
if (this.curIndex < this.bufLen) {
if (len == 0) {
return 0;
}if (off < 0 || len < 0  || len > b.length - off ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}var min=Math.min(this.bufLen - this.curIndex, len);
System.arraycopy$O$I$O$I$I(this.buf, this.curIndex, b, off, min);
this.curIndex+=min;
return min;
}return this.$in.read$BA$I$I(b, off, len);
});

C$.$static$=function(){C$.$static$=0;
C$.UTF_8=$I$(1).forName$S("UTF-8");
C$.UTF_16BE=$I$(1).forName$S("UTF-16BE");
C$.UTF_16LE=$I$(1).forName$S("UTF-16LE");
C$.UTF_32LE=$I$(1).forName$S("UTF-32LE");
C$.UTF_32BE=$I$(1).forName$S("UTF-32BE");
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
