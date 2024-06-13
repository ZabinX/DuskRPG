(function(){var P$=java.io;
/*c*/var C$=Clazz.newClass(P$, "ByteArrayInputStream", null, 'java.io.InputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['pos','mark','count'],'O',['buf','byte[]']]]

Clazz.newMeth(C$, 'c$$BA',  function (buf) {
Clazz.super_(C$, this);
this.mark=0;
this.buf=buf;
this.count=buf.length;
}, 1);

Clazz.newMeth(C$, 'c$$BA$I$I',  function (buf, offset, length) {
Clazz.super_(C$, this);
this.buf=buf;
this.pos=offset >= buf.length ? buf.length : offset;
this.mark=this.pos;
this.count=length + this.pos > buf.length ? buf.length : length + this.pos;
}, 1);

Clazz.newMeth(C$, 'available$',  function () {
return this.count - this.pos;
});

Clazz.newMeth(C$, 'close$',  function () {
});

Clazz.newMeth(C$, 'mark$I',  function (readlimit) {
this.mark=this.pos;
});

Clazz.newMeth(C$, 'markSupported$',  function () {
return true;
});

Clazz.newMeth(C$, 'read$',  function () {
return this.pos < this.count ? this.buf[this.pos++] & 255 : -1;
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, offset, length) {
if (this.pos >= this.count) {
return -1;
}if (b != null ) {
if (0 <= offset && offset <= b.length  && 0 <= length  && length <= b.length - offset ) {
if (length == 0) {
return 0;
}var copylen=this.count - this.pos < length ? this.count - this.pos : length;
System.arraycopy$O$I$O$I$I(this.buf, this.pos, b, offset, copylen);
this.pos+=copylen;
return copylen;
}throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException'));
}throw Clazz.new_(Clazz.load('NullPointerException'));
});

Clazz.newMeth(C$, 'reset$',  function () {
this.pos=this.mark;
});

Clazz.newMeth(C$, 'skip$J',  function (n) {
if (Long.$le(n,0 )) {
return 0;
}var temp=this.pos;
this.pos=Long.$lt(this.count - this.pos,n ) ? this.count : Long.$ival((Long.$add(this.pos,n)));
return this.pos - temp;
});

Clazz.newMeth(C$, 'transferTo$java_io_OutputStream',  function (out) {
var b=(this.pos == 0 ? this.buf : this.readAllBytes$());
out.write$BA(b);
return b.length;
});

Clazz.newMeth(C$, 'readAllBytes$',  function () {
return (this.pos == 0 ? this.buf : C$.superclazz.prototype.readAllBytes$.apply(this, []));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
