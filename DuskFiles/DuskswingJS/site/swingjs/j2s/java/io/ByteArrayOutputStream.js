(function(){var P$=java.io,p$1={},I$=[[0,'java.util.Arrays','OutOfMemoryError']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ByteArrayOutputStream", null, 'java.io.OutputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['count'],'O',['buf','byte[]']]]

Clazz.newMeth(C$, '秘setBytes$BA',  function (b) {
this.buf=b;
this.count=b.length;
return true;
});

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$I.apply(this, [32]);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (size) {
Clazz.super_(C$, this);
if (size < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Negative initial size: " + size]);
}this.buf=Clazz.array(Byte.TYPE, [size]);
}, 1);

Clazz.newMeth(C$, 'ensureCapacity$I',  function (minCapacity) {
if (minCapacity - this.buf.length > 0) p$1.grow$I.apply(this, [minCapacity]);
}, p$1);

Clazz.newMeth(C$, 'grow$I',  function (minCapacity) {
var oldCapacity=this.buf.length;
var newCapacity=oldCapacity << 1;
if (newCapacity - minCapacity < 0) newCapacity=minCapacity;
if (newCapacity - 2147483639 > 0) newCapacity=C$.hugeCapacity$I(minCapacity);
this.buf=$I$(1).copyOf$BA$I(this.buf, newCapacity);
}, p$1);

Clazz.newMeth(C$, 'hugeCapacity$I',  function (minCapacity) {
if (minCapacity < 0) throw Clazz.new_($I$(2,1));
return (minCapacity > 2147483639) ? 2147483647 : 2147483639;
}, 1);

Clazz.newMeth(C$, 'write$I',  function (b) {
p$1.ensureCapacity$I.apply(this, [this.count + 1]);
this.buf[this.count]=(b|0);
this.count+=1;
});

Clazz.newMeth(C$, 'write$BA$I$I',  function (b, off, len) {
if ((off < 0) || (off > b.length) || (len < 0) || ((off + len) - b.length > 0)  ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}p$1.ensureCapacity$I.apply(this, [this.count + len]);
System.arraycopy$O$I$O$I$I(b, off, this.buf, this.count, len);
this.count+=len;
});

Clazz.newMeth(C$, 'writeTo$java_io_OutputStream',  function (out) {
out.write$BA$I$I(this.buf, 0, this.count);
});

Clazz.newMeth(C$, 'reset$',  function () {
this.count=0;
});

Clazz.newMeth(C$, 'toByteArray$',  function () {
return (this.count == this.buf.length ? this.buf : $I$(1).copyOf$BA$I(this.buf, this.count));
});

Clazz.newMeth(C$, 'size$',  function () {
return this.count;
});

Clazz.newMeth(C$, 'toString',  function () {
return  String.instantialize(this.buf, 0, this.count);
});

Clazz.newMeth(C$, 'toString$S',  function (charsetName) {
return  String.instantialize(this.buf, 0, this.count, charsetName);
});

Clazz.newMeth(C$, 'toString$java_nio_charset_Charset',  function (charset) {
return  String.instantialize(this.buf, 0, this.count, charset);
});

Clazz.newMeth(C$, 'toString$I',  function (hibyte) {
return  String.instantialize(this.buf, hibyte, 0, this.count);
});

Clazz.newMeth(C$, 'close$',  function () {
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.buf.hashCode$();
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:14 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
