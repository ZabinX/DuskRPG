(function(){var P$=java.io,I$=[[0,'java.util.Arrays']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CharArrayWriter", null, 'java.io.Writer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['count'],'O',['buf','char[]']]]

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I.apply(this, [32]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (initialSize) {
Clazz.super_(C$, this);
if (initialSize < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Negative initial size: " + initialSize]);
}this.buf=Clazz.array(Character.TYPE, [initialSize]);
}, 1);

Clazz.newMeth(C$, 'write$I',  function (c) {
{
var newcount=this.count + 1;
if (newcount > this.buf.length) {
this.buf=$I$(1,"copyOf$CA$I",[this.buf, Math.max(this.buf.length << 1, newcount)]);
}this.buf[this.count]=String.fromCharCode(c);
this.count=newcount;
}});

Clazz.newMeth(C$, 'write$CA$I$I',  function (c, off, len) {
if ((off < 0) || (off > c.length) || (len < 0) || ((off + len) > c.length) || ((off + len) < 0)  ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else if (len == 0) {
return;
}{
var newcount=this.count + len;
if (newcount > this.buf.length) {
this.buf=$I$(1,"copyOf$CA$I",[this.buf, Math.max(this.buf.length << 1, newcount)]);
}System.arraycopy$O$I$O$I$I(c, off, this.buf, this.count, len);
this.count=newcount;
}});

Clazz.newMeth(C$, 'write$S$I$I',  function (str, off, len) {
{
var newcount=this.count + len;
if (newcount > this.buf.length) {
this.buf=$I$(1,"copyOf$CA$I",[this.buf, Math.max(this.buf.length << 1, newcount)]);
}str.getChars$I$I$CA$I(off, off + len, this.buf, this.count);
this.count=newcount;
}});

Clazz.newMeth(C$, 'writeTo$java_io_Writer',  function (out) {
{
out.write$CA$I$I(this.buf, 0, this.count);
}});

Clazz.newMeth(C$, 'append$CharSequence',  function (csq) {
var s=(csq == null  ? "null" : csq.toString());
this.write$S$I$I(s, 0, s.length$());
return this;
});

Clazz.newMeth(C$, 'append$CharSequence$I$I',  function (csq, start, end) {
var s=(csq == null  ? "null" : csq).subSequence$I$I(start, end).toString();
this.write$S$I$I(s, 0, s.length$());
return this;
});

Clazz.newMeth(C$, 'append$C',  function (c) {
this.write$I(c.$c());
return this;
});

Clazz.newMeth(C$, 'reset$',  function () {
this.count=0;
});

Clazz.newMeth(C$, 'toCharArray$',  function () {
{
return $I$(1).copyOf$CA$I(this.buf, this.count);
}});

Clazz.newMeth(C$, 'size$',  function () {
return this.count;
});

Clazz.newMeth(C$, 'toString',  function () {
{
return  String.instantialize(this.buf, 0, this.count);
}});

Clazz.newMeth(C$, 'flush$',  function () {
});

Clazz.newMeth(C$, 'close$',  function () {
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
