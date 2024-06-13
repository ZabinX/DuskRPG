(function(){var P$=java.io,p$1={};
/*c*/var C$=Clazz.newClass(P$, "BufferedOutputStream", null, 'java.io.FilterOutputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['count'],'O',['buf','byte[]']]]

Clazz.newMeth(C$, 'c$$java_io_OutputStream',  function (out) {
C$.c$$java_io_OutputStream$I.apply(this, [out, 8192]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream$I',  function (out, size) {
;C$.superclazz.c$$java_io_OutputStream.apply(this,[out]);C$.$init$.apply(this);
if (size <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Buffer size <= 0"]);
}this.buf=Clazz.array(Byte.TYPE, [size]);
}, 1);

Clazz.newMeth(C$, 'flushBuffer',  function () {
if (this.count > 0) {
this.out.write$BA$I$I(this.buf, 0, this.count);
this.count=0;
}}, p$1);

Clazz.newMeth(C$, 'write$I',  function (b) {
if (this.count >= this.buf.length) {
p$1.flushBuffer.apply(this, []);
}this.buf[this.count++]=(b|0);
});

Clazz.newMeth(C$, 'write$BA$I$I',  function (b, off, len) {
if (len >= this.buf.length) {
p$1.flushBuffer.apply(this, []);
this.out.write$BA$I$I(b, off, len);
return;
}if (len > this.buf.length - this.count) {
p$1.flushBuffer.apply(this, []);
}System.arraycopy$O$I$O$I$I(b, off, this.buf, this.count, len);
this.count+=len;
});

Clazz.newMeth(C$, 'flush$',  function () {
p$1.flushBuffer.apply(this, []);
this.out.flush$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
