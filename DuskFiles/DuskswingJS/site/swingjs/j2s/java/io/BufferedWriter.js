(function(){var P$=java.io,p$1={};
/*c*/var C$=Clazz.newClass(P$, "BufferedWriter", null, 'java.io.Writer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['nChars','nextChar'],'S',['lineSeparator'],'O',['out','java.io.Writer','cb','char[]']]
,['I',['defaultCharBufferSize']]]

Clazz.newMeth(C$, 'c$$java_io_Writer',  function (out) {
C$.c$$java_io_Writer$I.apply(this, [out, C$.defaultCharBufferSize]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Writer$I',  function (out, sz) {
;C$.superclazz.c$$O.apply(this,[out]);C$.$init$.apply(this);
if (sz <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Buffer size <= 0"]);
this.out=out;
this.cb=Clazz.array(Character.TYPE, [sz]);
this.nChars=sz;
this.nextChar=0;
this.lineSeparator=System.lineSeparator$();
}, 1);

Clazz.newMeth(C$, 'ensureOpen',  function () {
if (this.out == null ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream closed"]);
}, p$1);

Clazz.newMeth(C$, 'flushBuffer$',  function () {
{
p$1.ensureOpen.apply(this, []);
if (this.nextChar == 0) return;
this.out.write$CA$I$I(this.cb, 0, this.nextChar);
this.nextChar=0;
}});

Clazz.newMeth(C$, 'write$I',  function (c) {
{
p$1.ensureOpen.apply(this, []);
if (this.nextChar >= this.nChars) this.flushBuffer$();
this.cb[this.nextChar++]=String.fromCharCode(c);
}});

Clazz.newMeth(C$, 'min$I$I',  function (a, b) {
if (a < b) return a;
return b;
}, p$1);

Clazz.newMeth(C$, 'write$CA$I$I',  function (cbuf, off, len) {
{
p$1.ensureOpen.apply(this, []);
if ((off < 0) || (off > cbuf.length) || (len < 0) || ((off + len) > cbuf.length) || ((off + len) < 0)  ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else if (len == 0) {
return;
}if (len >= this.nChars) {
this.flushBuffer$();
this.out.write$CA$I$I(cbuf, off, len);
return;
}var b=off;
var t=off + len;
while (b < t){
var d=p$1.min$I$I.apply(this, [this.nChars - this.nextChar, t - b]);
System.arraycopy$O$I$O$I$I(cbuf, b, this.cb, this.nextChar, d);
b+=d;
this.nextChar+=d;
if (this.nextChar >= this.nChars) this.flushBuffer$();
}
}});

Clazz.newMeth(C$, 'write$S$I$I',  function (s, off, len) {
{
p$1.ensureOpen.apply(this, []);
var b=off;
var t=off + len;
while (b < t){
var d=p$1.min$I$I.apply(this, [this.nChars - this.nextChar, t - b]);
s.getChars$I$I$CA$I(b, b + d, this.cb, this.nextChar);
b+=d;
this.nextChar+=d;
if (this.nextChar >= this.nChars) this.flushBuffer$();
}
}});

Clazz.newMeth(C$, 'newLine$',  function () {
this.write$S(this.lineSeparator);
});

Clazz.newMeth(C$, 'flush$',  function () {
{
this.flushBuffer$();
this.out.flush$();
}});

Clazz.newMeth(C$, 'close$',  function () {
{
if (this.out == null ) {
return;
}try {
this.flushBuffer$();
} finally {
this.out.close$();
this.out=null;
this.cb=null;
}
}});

C$.$static$=function(){C$.$static$=0;
C$.defaultCharBufferSize=8192;
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
