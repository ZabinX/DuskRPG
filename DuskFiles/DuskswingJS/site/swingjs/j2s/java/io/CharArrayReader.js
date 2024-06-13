(function(){var P$=java.io,p$1={};
/*c*/var C$=Clazz.newClass(P$, "CharArrayReader", null, 'java.io.Reader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.markedPos=0;
},1);

C$.$fields$=[['I',['pos','markedPos','count'],'O',['buf','char[]']]]

Clazz.newMeth(C$, 'c$$CA',  function (buf) {
Clazz.super_(C$, this);
this.buf=buf;
this.pos=0;
this.count=buf.length;
}, 1);

Clazz.newMeth(C$, 'c$$CA$I$I',  function (buf, offset, length) {
Clazz.super_(C$, this);
if ((offset < 0) || (offset > buf.length) || (length < 0) || ((offset + length) < 0)  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.buf=buf;
this.pos=offset;
this.count=Math.min(offset + length, buf.length);
this.markedPos=offset;
}, 1);

Clazz.newMeth(C$, 'ensureOpen',  function () {
if (this.buf == null ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Stream closed"]);
}, p$1);

Clazz.newMeth(C$, 'read$',  function () {
{
p$1.ensureOpen.apply(this, []);
if (this.pos >= this.count) return -1;
 else return this.buf[this.pos++].$c();
}});

Clazz.newMeth(C$, 'read$CA$I$I',  function (b, off, len) {
{
p$1.ensureOpen.apply(this, []);
if ((off < 0) || (off > b.length) || (len < 0) || ((off + len) > b.length) || ((off + len) < 0)  ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else if (len == 0) {
return 0;
}if (this.pos >= this.count) {
return -1;
}if (this.pos + len > this.count) {
len=this.count - this.pos;
}if (len <= 0) {
return 0;
}System.arraycopy$O$I$O$I$I(this.buf, this.pos, b, off, len);
this.pos+=len;
return len;
}});

Clazz.newMeth(C$, 'skip$J',  function (n) {
{
p$1.ensureOpen.apply(this, []);
if (Long.$gt(Long.$add(this.pos,n),this.count )) {
n=this.count - this.pos;
}if (Long.$lt(n,0 )) {
return 0;
}this.pos=Long.$ival(Long.$add(this.pos,(n)));
return n;
}});

Clazz.newMeth(C$, 'ready$',  function () {
{
p$1.ensureOpen.apply(this, []);
return (this.count - this.pos) > 0;
}});

Clazz.newMeth(C$, 'markSupported$',  function () {
return true;
});

Clazz.newMeth(C$, 'mark$I',  function (readAheadLimit) {
{
p$1.ensureOpen.apply(this, []);
this.markedPos=this.pos;
}});

Clazz.newMeth(C$, 'reset$',  function () {
{
p$1.ensureOpen.apply(this, []);
this.pos=this.markedPos;
}});

Clazz.newMeth(C$, 'close$',  function () {
this.buf=null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
