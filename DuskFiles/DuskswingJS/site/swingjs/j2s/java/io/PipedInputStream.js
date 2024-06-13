(function(){var P$=java.io,p$1={},I$=[[0,'Thread']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PipedInputStream", null, 'java.io.InputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.closedByWriter=false;
this.closedByReader=false;
this.connected=false;
this.$in=-1;
this.out=0;
},1);

C$.$fields$=[['Z',['closedByWriter','closedByReader','connected'],'I',['$in','out'],'O',['readSide','Thread','+writeSide','buffer','byte[]']]]

Clazz.newMeth(C$, 'c$$java_io_PipedOutputStream',  function (src) {
C$.c$$java_io_PipedOutputStream$I.apply(this, [src, 1024]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_PipedOutputStream$I',  function (src, pipeSize) {
Clazz.super_(C$, this);
p$1.initPipe$I.apply(this, [pipeSize]);
this.connect$java_io_PipedOutputStream(src);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
p$1.initPipe$I.apply(this, [1024]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (pipeSize) {
Clazz.super_(C$, this);
p$1.initPipe$I.apply(this, [pipeSize]);
}, 1);

Clazz.newMeth(C$, 'initPipe$I',  function (pipeSize) {
if (pipeSize <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Pipe Size <= 0"]);
}this.buffer=Clazz.array(Byte.TYPE, [pipeSize]);
}, p$1);

Clazz.newMeth(C$, 'connect$java_io_PipedOutputStream',  function (src) {
src.connect$java_io_PipedInputStream(this);
});

Clazz.newMeth(C$, 'receive$I',  function (b) {
p$1.checkStateForReceive.apply(this, []);
this.writeSide=$I$(1).currentThread$();
if (this.$in < 0) {
this.$in=0;
this.out=0;
}this.buffer[this.$in++]=((b & 255)|0);
if (this.$in >= this.buffer.length) {
this.$in=0;
}});

Clazz.newMeth(C$, 'receive$BA$I$I',  function (b, off, len) {
p$1.checkStateForReceive.apply(this, []);
this.writeSide=$I$(1).currentThread$();
var bytesToTransfer=len;
while (bytesToTransfer > 0){
var nextTransferAmount=0;
if (this.out < this.$in) {
nextTransferAmount=this.buffer.length - this.$in;
} else if (this.$in < this.out) {
if (this.$in == -1) {
this.$in=this.out=0;
nextTransferAmount=this.buffer.length - this.$in;
} else {
nextTransferAmount=this.out - this.$in;
}}if (nextTransferAmount > bytesToTransfer) nextTransferAmount=bytesToTransfer;
Clazz.assert(C$, this, function(){return (nextTransferAmount > 0)});
System.arraycopy$O$I$O$I$I(b, off, this.buffer, this.$in, nextTransferAmount);
bytesToTransfer-=nextTransferAmount;
off+=nextTransferAmount;
this.$in+=nextTransferAmount;
if (this.$in >= this.buffer.length) {
this.$in=0;
}}
});

Clazz.newMeth(C$, 'checkStateForReceive',  function () {
if (!this.connected) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Pipe not connected"]);
} else if (this.closedByWriter || this.closedByReader ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Pipe closed"]);
} else if (this.readSide != null  && !this.readSide.isAlive$() ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Read end dead"]);
}}, p$1);

Clazz.newMeth(C$, 'receivedLast$',  function () {
this.closedByWriter=true;
this.notifyAll$();
});

Clazz.newMeth(C$, 'read$',  function () {
if (!this.connected) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Pipe not connected"]);
} else if (this.closedByReader) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Pipe closed"]);
} else if (this.writeSide != null  && !this.writeSide.isAlive$()  && !this.closedByWriter  && (this.$in < 0) ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Write end dead"]);
}this.readSide=$I$(1).currentThread$();
var trials=2;
if (this.$in < 0) return -1;
var ret=this.buffer[this.out++] & 255;
if (this.out >= this.buffer.length) {
this.out=0;
}if (this.$in == this.out) {
this.$in=-1;
}return ret;
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, off, len) {
if (b == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
} else if (off < 0 || len < 0  || len > b.length - off ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else if (len == 0) {
return 0;
}var c=this.read$();
if (c < 0) {
return -1;
}b[off]=(c|0);
var rlen=1;
while ((this.$in >= 0) && (len > 1) ){
var available;
if (this.$in > this.out) {
available=Math.min((this.buffer.length - this.out), (this.$in - this.out));
} else {
available=this.buffer.length - this.out;
}if (available > (len - 1)) {
available=len - 1;
}System.arraycopy$O$I$O$I$I(this.buffer, this.out, b, off + rlen, available);
this.out+=available;
rlen+=available;
len-=available;
if (this.out >= this.buffer.length) {
this.out=0;
}if (this.$in == this.out) {
this.$in=-1;
}}
return rlen;
});

Clazz.newMeth(C$, 'available$',  function () {
if (this.$in < 0) return 0;
 else if (this.$in == this.out) return this.buffer.length;
 else if (this.$in > this.out) return this.$in - this.out;
 else return this.$in + this.buffer.length - this.out;
});

Clazz.newMeth(C$, 'close$',  function () {
this.closedByReader=true;
{
this.$in=-1;
}});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:15 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
