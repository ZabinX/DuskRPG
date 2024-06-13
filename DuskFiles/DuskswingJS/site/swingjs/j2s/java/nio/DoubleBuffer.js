(function(){var P$=Clazz.newPackage("java.nio"),I$=[[0,'java.nio.HeapDoubleBuffer','java.nio.Buffer','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DoubleBuffer", null, 'java.nio.Buffer', 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isReadOnly'],'I',['offset'],'O',['hb','double[]']]]

Clazz.newMeth(C$, 'c$$I$I$I$I$DA$I',  function (mark, pos, lim, cap, hb, offset) {
;C$.superclazz.c$$I$I$I$I.apply(this,[mark, pos, lim, cap]);C$.$init$.apply(this);
this.hb=hb;
this.offset=offset;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I',  function (mark, pos, lim, cap) {
C$.c$$I$I$I$I$DA$I.apply(this, [mark, pos, lim, cap, null, 0]);
}, 1);

Clazz.newMeth(C$, 'allocate$I',  function (capacity) {
if (capacity < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
return Clazz.new_($I$(1,1).c$$I$I,[capacity, capacity]);
}, 1);

Clazz.newMeth(C$, 'wrap$DA$I$I',  function (array, offset, length) {
try {
return Clazz.new_($I$(1,1).c$$DA$I$I,[array, offset, length]);
} catch (x) {
if (Clazz.exceptionOf(x,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else {
throw x;
}
}
}, 1);

Clazz.newMeth(C$, 'wrap$DA',  function (array) {
return C$.wrap$DA$I$I(array, 0, array.length);
}, 1);

Clazz.newMeth(C$, 'get$DA$I$I',  function (dst, offset, length) {
$I$(2).checkBounds$I$I$I(offset, length, dst.length);
if (length > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferUnderflowException'));
var end=offset + length;
for (var i=offset; i < end; i++) dst[i]=this.get$();

return this;
});

Clazz.newMeth(C$, 'get$DA',  function (dst) {
return this.get$DA$I$I(dst, 0, dst.length);
});

Clazz.newMeth(C$, 'put$java_nio_DoubleBuffer',  function (src) {
if (src === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
if (this.isReadOnly$()) throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
var n=src.remaining$();
if (n > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferOverflowException'));
for (var i=0; i < n; i++) this.put$D(src.get$());

return this;
});

Clazz.newMeth(C$, 'put$DA$I$I',  function (src, offset, length) {
$I$(2).checkBounds$I$I$I(offset, length, src.length);
if (length > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferOverflowException'));
var end=offset + length;
for (var i=offset; i < end; i++) this.put$D(src[i]);

return this;
});

Clazz.newMeth(C$, 'put$DA',  function (src) {
return this.put$DA$I$I(src, 0, src.length);
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
var sb=Clazz.new_($I$(3,1));
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
if (!(Clazz.instanceOf(ob, "java.nio.DoubleBuffer"))) return false;
var that=ob;
if (this.remaining$() != that.remaining$()) return false;
var p=this.position$();
for (var i=this.limit$() - 1, j=that.limit$() - 1; i >= p; i--, j--) if (!C$.equals$D$D(this.get$I(i), that.get$I(j))) return false;

return true;
});

Clazz.newMeth(C$, 'equals$D$D',  function (x, y) {
return (x == y ) || (Double.isNaN$D(x) && Double.isNaN$D(y) ) ;
}, 1);

Clazz.newMeth(C$, ['compareTo$java_nio_DoubleBuffer','compareTo$O'],  function (that) {
var n=this.position$() + Math.min(this.remaining$(), that.remaining$());
for (var i=this.position$(), j=that.position$(); i < n; i++, j++) {
var cmp=C$.compare$D$D(this.get$I(i), that.get$I(j));
if (cmp != 0) return cmp;
}
return this.remaining$() - that.remaining$();
});

Clazz.newMeth(C$, 'compare$D$D',  function (x, y) {
return ((x < y ) ? -1 : (x > y ) ? 1 : (x == y ) ? 0 : Double.isNaN$D(x) ? (Double.isNaN$D(y) ? 0 : 1) : -1);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:20 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
