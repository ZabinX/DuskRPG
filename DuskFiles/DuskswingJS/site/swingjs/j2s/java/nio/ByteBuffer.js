(function(){var P$=Clazz.newPackage("java.nio"),I$=[[0,'java.nio.Bits','java.nio.ByteOrder','java.nio.DirectByteBuffer','java.nio.HeapByteBuffer','java.nio.Buffer','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ByteBuffer", null, 'java.nio.Buffer', 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bigEndian=true;
this.nativeByteOrder=($I$(1).byteOrder$() === $I$(2).BIG_ENDIAN );
},1);

C$.$fields$=[['Z',['isReadOnly','bigEndian','nativeByteOrder'],'I',['offset'],'O',['hb','byte[]']]]

Clazz.newMeth(C$, 'c$$I$I$I$I$BA$I',  function (mark, pos, lim, cap, hb, offset) {
;C$.superclazz.c$$I$I$I$I.apply(this,[mark, pos, lim, cap]);C$.$init$.apply(this);
this.hb=hb;
this.offset=offset;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I',  function (mark, pos, lim, cap) {
C$.c$$I$I$I$I$BA$I.apply(this, [mark, pos, lim, cap, null, 0]);
}, 1);

Clazz.newMeth(C$, 'allocateDirect$I',  function (capacity) {
return Clazz.new_($I$(3,1).c$$I,[capacity]);
}, 1);

Clazz.newMeth(C$, 'allocate$I',  function (capacity) {
if (capacity < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
return Clazz.new_($I$(4,1).c$$I$I,[capacity, capacity]);
}, 1);

Clazz.newMeth(C$, 'wrap$BA$I$I',  function (array, offset, length) {
try {
return Clazz.new_($I$(4,1).c$$BA$I$I,[array, offset, length]);
} catch (x) {
if (Clazz.exceptionOf(x,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else {
throw x;
}
}
}, 1);

Clazz.newMeth(C$, 'wrap$BA',  function (array) {
return C$.wrap$BA$I$I(array, 0, array.length);
}, 1);

Clazz.newMeth(C$, 'get$BA$I$I',  function (dst, offset, length) {
$I$(5).checkBounds$I$I$I(offset, length, dst.length);
if (length > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferUnderflowException'));
var end=offset + length;
for (var i=offset; i < end; i++) dst[i]=this.get$();

return this;
});

Clazz.newMeth(C$, 'get$BA',  function (dst) {
return this.get$BA$I$I(dst, 0, dst.length);
});

Clazz.newMeth(C$, 'put$java_nio_ByteBuffer',  function (src) {
if (src === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
if (this.isReadOnly$()) throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
var n=src.remaining$();
if (n > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferOverflowException'));
for (var i=0; i < n; i++) this.put$B(src.get$());

return this;
});

Clazz.newMeth(C$, 'put$BA$I$I',  function (src, offset, length) {
$I$(5).checkBounds$I$I$I(offset, length, src.length);
if (length > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferOverflowException'));
var end=offset + length;
for (var i=offset; i < end; i++) this.put$B(src[i]);

return this;
});

Clazz.newMeth(C$, 'put$BA',  function (src) {
return this.put$BA$I$I(src, 0, src.length);
});

Clazz.newMeth(C$, 'hasArray$',  function () {
return (this.hb != null ) && !this.isReadOnly ;
});

Clazz.newMeth(C$, 'array$',  function () {
if (this.hb == null ) throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
if (this.isReadOnly) throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
return this.hb;
});

Clazz.newMeth(C$, 'arrayOffset$',  function () {
if (this.hb == null ) throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
if (this.isReadOnly) throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
return this.offset;
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(6,1));
sb.append$S(this.getClass$().getName$());
sb.append$S("[pos=");
sb.append$I(this.position$());
sb.append$S(" lim=");
sb.append$I(this.limit$());
sb.append$S(" cap=");
sb.append$I(this.capacity$());
sb.append$S("]");
return sb.toString();
});

Clazz.newMeth(C$, 'hashCode$',  function () {
var h=1;
var p=this.position$();
for (var i=this.limit$() - 1; i >= p; i--) h=31 * h + (this.get$I(i)|0);

return h;
});

Clazz.newMeth(C$, 'equals$O',  function (ob) {
if (this === ob ) return true;
if (!(Clazz.instanceOf(ob, "java.nio.ByteBuffer"))) return false;
var that=ob;
if (this.remaining$() != that.remaining$()) return false;
var p=this.position$();
for (var i=this.limit$() - 1, j=that.limit$() - 1; i >= p; i--, j--) if (!C$.equals$B$B(this.get$I(i), that.get$I(j))) return false;

return true;
});

Clazz.newMeth(C$, 'equals$B$B',  function (x, y) {
return x == y;
}, 1);

Clazz.newMeth(C$, ['compareTo$java_nio_ByteBuffer','compareTo$O'],  function (that) {
var n=this.position$() + Math.min(this.remaining$(), that.remaining$());
for (var i=this.position$(), j=that.position$(); i < n; i++, j++) {
var cmp=C$.compare$B$B(this.get$I(i), that.get$I(j));
if (cmp != 0) return cmp;
}
return this.remaining$() - that.remaining$();
});

Clazz.newMeth(C$, 'compare$B$B',  function (x, y) {
return Byte.compare$B$B(x, y);
}, 1);

Clazz.newMeth(C$, 'order$',  function () {
return this.bigEndian ? $I$(2).BIG_ENDIAN : $I$(2).LITTLE_ENDIAN;
});

Clazz.newMeth(C$, 'order$java_nio_ByteOrder',  function (bo) {
this.bigEndian=(bo === $I$(2).BIG_ENDIAN );
this.nativeByteOrder=(this.bigEndian == ($I$(1).byteOrder$() === $I$(2).BIG_ENDIAN ) );
return this;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:19 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
