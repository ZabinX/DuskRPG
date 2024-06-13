(function(){var P$=Clazz.newPackage("javax.sound.sampled");
/*c*/var C$=Clazz.newClass(P$, "AudioInputStream", null, 'java.io.InputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.pushBackBuffer=null;
this.pushBackLen=0;
this.markPushBackBuffer=null;
this.markPushBackLen=0;
},1);

C$.$fields$=[['I',['frameSize','pushBackLen','markPushBackLen'],'J',['frameLength','framePos','markpos'],'O',['stream','java.io.InputStream','format','javax.sound.sampled.AudioFormat','pushBackBuffer','byte[]','+markPushBackBuffer']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream$javax_sound_sampled_AudioFormat$J',  function (stream, format, length) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.format=format;
this.frameLength=length;
this.frameSize=format.getFrameSize$();
if (this.frameSize == -1 || this.frameSize <= 0 ) {
this.frameSize=1;
}this.stream=stream;
this.framePos=0;
this.markpos=0;
}, 1);

Clazz.newMeth(C$, 'getFormat$',  function () {
return this.format;
});

Clazz.newMeth(C$, 'getFrameLength$',  function () {
return this.frameLength;
});

Clazz.newMeth(C$, 'read$',  function () {
if (this.frameSize != 1) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["cannot read a single byte if frame size > 1"]);
}var data=Clazz.array(Byte.TYPE, [1]);
var temp=this.read$BA(data);
if (temp <= 0) {
return -1;
}return data[0] & 255;
});

Clazz.newMeth(C$, 'read$BA',  function (b) {
return this.read$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, off, len) {
if ((len % this.frameSize) != 0) {
len-=(len % this.frameSize);
if (len == 0) {
return 0;
}}if (Long.$ne(this.frameLength,-1 )) {
if (Long.$ge(this.framePos,this.frameLength )) {
return -1;
} else {
if (Long.$gt(((len/this.frameSize|0)),(Long.$sub(this.frameLength,this.framePos)) )) {
len=Long.$ival((Long.$sub(this.frameLength,this.framePos))) * this.frameSize;
}}}var bytesRead=0;
var thisOff=off;
if (this.pushBackLen > 0 && len >= this.pushBackLen ) {
System.arraycopy$O$I$O$I$I(this.pushBackBuffer, 0, b, off, this.pushBackLen);
thisOff+=this.pushBackLen;
len-=this.pushBackLen;
bytesRead+=this.pushBackLen;
this.pushBackLen=0;
}var thisBytesRead=this.stream.read$BA$I$I(b, thisOff, len);
if (thisBytesRead == -1) {
return -1;
}if (thisBytesRead > 0) {
bytesRead+=thisBytesRead;
}if (bytesRead > 0) {
this.pushBackLen=bytesRead % this.frameSize;
if (this.pushBackLen > 0) {
if (this.pushBackBuffer == null ) {
this.pushBackBuffer=Clazz.array(Byte.TYPE, [this.frameSize]);
}System.arraycopy$O$I$O$I$I(b, off + bytesRead - this.pushBackLen, this.pushBackBuffer, 0, this.pushBackLen);
bytesRead-=this.pushBackLen;
}(this.framePos=Long.$add(this.framePos,((bytesRead/this.frameSize|0))));
}return bytesRead;
});

Clazz.newMeth(C$, 'skip$J',  function (n) {
if (Long.$ne((Long.$mod(n,this.frameSize)),0 )) {
(n=Long.$sub(n,((Long.$mod(n,this.frameSize)))));
}if (Long.$ne(this.frameLength,-1 )) {
if (Long.$gt((Long.$div(n,this.frameSize)),(Long.$sub(this.frameLength,this.framePos)) )) {
n=Long.$mul((Long.$sub(this.frameLength,this.framePos)),this.frameSize);
}}var temp=this.stream.skip$J(n);
if (Long.$ne(Long.$mod(temp,this.frameSize),0 )) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Could not skip an integer number of frames."]);
}if (Long.$ge(temp,0 )) {
(this.framePos=Long.$add(this.framePos,(Long.$div(temp,this.frameSize))));
}return temp;
});

Clazz.newMeth(C$, 'available$',  function () {
var temp=this.stream.available$();
if ((Long.$ne(this.frameLength,-1 )) && (Long.$gt(((temp/this.frameSize|0)),(Long.$sub(this.frameLength,this.framePos)) )) ) {
return Long.$ival((Long.$sub(this.frameLength,this.framePos))) * this.frameSize;
} else {
return temp;
}});

Clazz.newMeth(C$, 'close$',  function () {
this.stream.close$();
});

Clazz.newMeth(C$, 'mark$I',  function (readlimit) {
this.stream.mark$I(readlimit);
if (this.markSupported$()) {
this.markpos=this.framePos;
this.markPushBackLen=this.pushBackLen;
if (this.markPushBackLen > 0) {
if (this.markPushBackBuffer == null ) {
this.markPushBackBuffer=Clazz.array(Byte.TYPE, [this.frameSize]);
}System.arraycopy$O$I$O$I$I(this.pushBackBuffer, 0, this.markPushBackBuffer, 0, this.markPushBackLen);
}}});

Clazz.newMeth(C$, 'reset$',  function () {
this.stream.reset$();
this.framePos=this.markpos;
this.pushBackLen=this.markPushBackLen;
if (this.pushBackLen > 0) {
if (this.pushBackBuffer == null ) {
this.pushBackBuffer=Clazz.array(Byte.TYPE, [this.frameSize - 1]);
}System.arraycopy$O$I$O$I$I(this.markPushBackBuffer, 0, this.pushBackBuffer, 0, this.pushBackLen);
}});

Clazz.newMeth(C$, 'markSupported$',  function () {
return this.stream.markSupported$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:50 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
