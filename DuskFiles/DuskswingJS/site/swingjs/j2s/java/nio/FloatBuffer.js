(function(){var P$=Clazz.newPackage("java.nio"),I$=[[0,'java.nio.HeapFloatBuffer','java.nio.Buffer','StringBuffer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FloatBuffer", null, 'java.nio.Buffer', 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isReadOnly'],'I',['offset'],'O',['hb','float[]']]]

Clazz.newMeth(C$, 'c$$I$I$I$I$FA$I',  function (mark, pos, lim, cap, hb, offset) {
;C$.superclazz.c$$I$I$I$I.apply(this,[mark, pos, lim, cap]);C$.$init$.apply(this);
this.hb=hb;
this.offset=offset;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I',  function (mark, pos, lim, cap) {
C$.c$$I$I$I$I$FA$I.apply(this, [mark, pos, lim, cap, null, 0]);
}, 1);

Clazz.newMeth(C$, 'allocate$I',  function (capacity) {
if (capacity < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
return Clazz.new_($I$(1,1).c$$I$I,[capacity, capacity]);
}, 1);

Clazz.newMeth(C$, 'wrap$FA$I$I',  function (array, offset, length) {
try {
return Clazz.new_($I$(1,1).c$$FA$I$I,[array, offset, length]);
} catch (x) {
if (Clazz.exceptionOf(x,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else {
throw x;
}
}
}, 1);

Clazz.newMeth(C$, 'wrap$FA',  function (array) {
return C$.wrap$FA$I$I(array, 0, array.length);
}, 1);

Clazz.newMeth(C$, 'get$FA$I$I',  function (dst, offset, length) {
$I$(2).checkBounds$I$I$I(offset, length, dst.length);
if (length > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferUnderflowException'));
var end=offset + length;
for (var i=offset; i < end; i++) dst[i]=this.get$();

return this;
});

Clazz.newMeth(C$, 'get$FA',  function (dst) {
return this.get$FA$I$I(dst, 0, dst.length);
});

Clazz.newMeth(C$, 'put$java_nio_FloatBuffer',  function (src) {
if (src === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
if (this.isReadOnly$()) throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
var n=src.remaining$();
if (n > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferOverflowException'));
for (var i=0; i < n; i++) this.put$F(src.get$());

return this;
});

Clazz.newMeth(C$, 'put$FA$I$I',  function (src, offset, length) {
$I$(2).checkBounds$I$I$I(offset, length, src.length);
if (length > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferOverflowException'));
var end=offset + length;
for (var i=offset; i < end; i++) this.put$F(src[i]);

return this;
});

Clazz.newMeth(C$, 'put$FA',  function (src) {
return this.put$FA$I$I(src, 0, src.length);
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
if (!(Clazz.instanceOf(ob, "java.nio.FloatBuffer"))) return false;
var that=ob;
if (this.remaining$() != that.remaining$()) return false;
var p=this.position$();
for (var i=this.limit$() - 1, j=that.limit$() - 1; i >= p; i--, j--) if (!C$.equals$F$F(this.get$I(i), that.get$I(j))) return false;

return true;
});

Clazz.newMeth(C$, 'equals$F$F',  function (x, y) {
return (x == y ) || (Float.isNaN$F(x) && Float.isNaN$F(y) ) ;
}, 1);

Clazz.newMeth(C$, ['compareTo$java_nio_FloatBuffer','compareTo$O'],  function (that) {
var n=this.position$() + Math.min(this.remaining$(), that.remaining$());
for (var i=this.position$(), j=that.position$(); i < n; i++, j++) {
var cmp=C$.compare$F$F(this.get$I(i), that.get$I(j));
if (cmp != 0) return cmp;
}
return this.remaining$() - that.remaining$();
});

Clazz.newMeth(C$, 'compare$F$F',  function (x, y) {
return ((x < y ) ? -1 : (x > y ) ? 1 : (x == y ) ? 0 : Float.isNaN$F(x) ? (Float.isNaN$F(y) ? 0 : 1) : -1);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:20 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
