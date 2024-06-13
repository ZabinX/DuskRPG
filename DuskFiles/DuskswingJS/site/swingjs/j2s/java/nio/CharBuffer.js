(function(){var P$=Clazz.newPackage("java.nio"),I$=[[0,'java.nio.HeapCharBuffer','java.nio.StringCharBuffer','java.nio.Buffer','java.util.stream.StreamSupport','java.nio.CharBufferSpliterator']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CharBuffer", null, 'java.nio.Buffer', ['Comparable', 'Appendable', 'CharSequence', 'Readable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['isReadOnly'],'I',['offset'],'O',['hb','char[]']]]

Clazz.newMeth(C$, 'c$$I$I$I$I$CA$I',  function (mark, pos, lim, cap, hb, offset) {
;C$.superclazz.c$$I$I$I$I.apply(this,[mark, pos, lim, cap]);C$.$init$.apply(this);
this.hb=hb;
this.offset=offset;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I',  function (mark, pos, lim, cap) {
C$.c$$I$I$I$I$CA$I.apply(this, [mark, pos, lim, cap, null, 0]);
}, 1);

Clazz.newMeth(C$, 'allocate$I',  function (capacity) {
if (capacity < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
return Clazz.new_($I$(1,1).c$$I$I,[capacity, capacity]);
}, 1);

Clazz.newMeth(C$, 'wrap$CA$I$I',  function (array, offset, length) {
try {
return Clazz.new_($I$(1,1).c$$CA$I$I,[array, offset, length]);
} catch (x) {
if (Clazz.exceptionOf(x,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else {
throw x;
}
}
}, 1);

Clazz.newMeth(C$, 'wrap$CA',  function (array) {
return C$.wrap$CA$I$I(array, 0, array.length);
}, 1);

Clazz.newMeth(C$, 'read$java_nio_CharBuffer',  function (target) {
var targetRemaining=target.remaining$();
var remaining=this.remaining$();
if (remaining == 0) return -1;
var n=Math.min(remaining, targetRemaining);
var limit=this.limit$();
if (targetRemaining < remaining) this.limit$I(this.position$() + n);
try {
if (n > 0) target.put$java_nio_CharBuffer(this);
} finally {
this.limit$I(limit);
}
return n;
});

Clazz.newMeth(C$, 'wrap$CharSequence$I$I',  function (csq, start, end) {
try {
return Clazz.new_($I$(2,1).c$$CharSequence$I$I,[csq, start, end]);
} catch (x) {
if (Clazz.exceptionOf(x,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else {
throw x;
}
}
}, 1);

Clazz.newMeth(C$, 'wrap$CharSequence',  function (csq) {
return C$.wrap$CharSequence$I$I(csq, 0, csq.length$());
}, 1);

Clazz.newMeth(C$, 'get$CA$I$I',  function (dst, offset, length) {
$I$(3).checkBounds$I$I$I(offset, length, dst.length);
if (length > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferUnderflowException'));
var end=offset + length;
for (var i=offset; i < end; i++) dst[i]=this.get$();

return this;
});

Clazz.newMeth(C$, 'get$CA',  function (dst) {
return this.get$CA$I$I(dst, 0, dst.length);
});

Clazz.newMeth(C$, 'put$java_nio_CharBuffer',  function (src) {
if (src === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
if (this.isReadOnly$()) throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
var n=src.remaining$();
if (n > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferOverflowException'));
for (var i=0; i < n; i++) this.put$C(src.get$());

return this;
});

Clazz.newMeth(C$, 'put$CA$I$I',  function (src, offset, length) {
$I$(3).checkBounds$I$I$I(offset, length, src.length);
if (length > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferOverflowException'));
var end=offset + length;
for (var i=offset; i < end; i++) this.put$C(src[i]);

return this;
});

Clazz.newMeth(C$, 'put$CA',  function (src) {
return this.put$CA$I$I(src, 0, src.length);
});

Clazz.newMeth(C$, 'put$S$I$I',  function (src, start, end) {
$I$(3,"checkBounds$I$I$I",[start, end - start, src.length$()]);
if (this.isReadOnly$()) throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
if (end - start > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferOverflowException'));
for (var i=start; i < end; i++) this.put$C(src.charAt$I(i));

return this;
});

Clazz.newMeth(C$, 'put$S',  function (src) {
return this.put$S$I$I(src, 0, src.length$());
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

Clazz.newMeth(C$, 'hashCode$',  function () {
var h=1;
var p=this.position$();
for (var i=this.limit$() - 1; i >= p; i--) h=31 * h + this.get$I(i).$c();

return h;
});

Clazz.newMeth(C$, 'equals$O',  function (ob) {
if (this === ob ) return true;
if (!(Clazz.instanceOf(ob, "java.nio.CharBuffer"))) return false;
var that=ob;
if (this.remaining$() != that.remaining$()) return false;
var p=this.position$();
for (var i=this.limit$() - 1, j=that.limit$() - 1; i >= p; i--, j--) if (!C$.equals$C$C(this.get$I(i), that.get$I(j))) return false;

return true;
});

Clazz.newMeth(C$, 'equals$C$C',  function (x, y) {
return x == y;
}, 1);

Clazz.newMeth(C$, ['compareTo$java_nio_CharBuffer','compareTo$O'],  function (that) {
var n=this.position$() + Math.min(this.remaining$(), that.remaining$());
for (var i=this.position$(), j=that.position$(); i < n; i++, j++) {
var cmp=C$.compare$C$C(this.get$I(i), that.get$I(j));
if (cmp != 0) return cmp;
}
return this.remaining$() - that.remaining$();
});

Clazz.newMeth(C$, 'compare$C$C',  function (x, y) {
return Character.compare$C$C(x, y);
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return this.toString$I$I(this.position$(), this.limit$());
});

Clazz.newMeth(C$, 'length$',  function () {
return this.remaining$();
});

Clazz.newMeth(C$, 'charAt$I',  function (index) {
return this.get$I(this.position$() + this.checkIndex$I$I(index, 1));
});

Clazz.newMeth(C$, 'append$CharSequence',  function (csq) {
if (csq == null ) return this.put$S("null");
 else return this.put$S(csq.toString());
});

Clazz.newMeth(C$, 'append$CharSequence$I$I',  function (csq, start, end) {
var cs=(csq == null  ? "null" : csq);
return this.put$S(cs.subSequence$I$I(start, end).toString());
});

Clazz.newMeth(C$, 'append$C',  function ($x$) {
return this.put$C($x$);
});

Clazz.newMeth(C$, 'chars$',  function () {
return $I$(4,"intStream$java_util_function_Supplier$I$Z",[((P$.CharBuffer$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "CharBuffer$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Supplier', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'get$',  function () { return (Clazz.new_($I$(5,1).c$$java_nio_CharBuffer,[this.b$['java.nio.CharBuffer']]));});
})()
), Clazz.new_(P$.CharBuffer$lambda1.$init$,[this, null])), 16464, false]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:20 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
