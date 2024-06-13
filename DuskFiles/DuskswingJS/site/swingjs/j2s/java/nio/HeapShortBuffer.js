(function(){var P$=Clazz.newPackage("java.nio"),I$=[[0,'java.nio.HeapShortBufferR','java.nio.Buffer','java.nio.ByteOrder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "HeapShortBuffer", null, 'java.nio.ShortBuffer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I$I',  function (cap, lim) {
;C$.superclazz.c$$I$I$I$I$HA$I.apply(this,[-1, 0, lim, cap, Clazz.array(Short.TYPE, [cap]), 0]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$HA$I$I',  function (buf, off, len) {
;C$.superclazz.c$$I$I$I$I$HA$I.apply(this,[-1, off, off + len, buf.length, buf, 0]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$HA$I$I$I$I$I',  function (buf, mark, pos, lim, cap, off) {
;C$.superclazz.c$$I$I$I$I$HA$I.apply(this,[mark, pos, lim, cap, buf, off]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'slice$',  function () {
return Clazz.new_(C$.c$$HA$I$I$I$I$I,[this.hb, -1, 0, this.remaining$(), this.remaining$(), this.position$() + this.offset]);
});

Clazz.newMeth(C$, 'duplicate$',  function () {
return Clazz.new_(C$.c$$HA$I$I$I$I$I,[this.hb, this.markValue$(), this.position$(), this.limit$(), this.capacity$(), this.offset]);
});

Clazz.newMeth(C$, 'asReadOnlyBuffer$',  function () {
return Clazz.new_([this.hb, this.markValue$(), this.position$(), this.limit$(), this.capacity$(), this.offset],$I$(1,1).c$$HA$I$I$I$I$I);
});

Clazz.newMeth(C$, 'ix$I',  function (i) {
return i + this.offset;
});

Clazz.newMeth(C$, 'get$',  function () {
return this.hb[this.ix$I(this.nextGetIndex$())];
});

Clazz.newMeth(C$, 'get$I',  function (i) {
return this.hb[this.ix$I(this.checkIndex$I(i))];
});

Clazz.newMeth(C$, 'getUnchecked$I',  function (i) {
return this.hb[this.ix$I(i)];
});

Clazz.newMeth(C$, 'get$HA$I$I',  function (dst, offset, length) {
$I$(2).checkBounds$I$I$I(offset, length, dst.length);
if (length > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferUnderflowException'));
System.arraycopy$O$I$O$I$I(this.hb, this.ix$I(this.position$()), dst, offset, length);
this.position$I(this.position$() + length);
return this;
});

Clazz.newMeth(C$, 'isDirect$',  function () {
return false;
});

Clazz.newMeth(C$, 'isReadOnly$',  function () {
return false;
});

Clazz.newMeth(C$, 'put$H',  function (x) {
this.hb[this.ix$I(this.nextPutIndex$())]=x;
return this;
});

Clazz.newMeth(C$, 'put$I$H',  function (i, x) {
this.hb[this.ix$I(this.checkIndex$I(i))]=x;
return this;
});

Clazz.newMeth(C$, 'put$HA$I$I',  function (src, offset, length) {
$I$(2).checkBounds$I$I$I(offset, length, src.length);
if (length > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferOverflowException'));
System.arraycopy$O$I$O$I$I(src, offset, this.hb, this.ix$I(this.position$()), length);
this.position$I(this.position$() + length);
return this;
});

Clazz.newMeth(C$, 'put$java_nio_ShortBuffer',  function (src) {
if (Clazz.instanceOf(src, "java.nio.HeapShortBuffer")) {
if (src === this ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
var sb=src;
var n=sb.remaining$();
if (n > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferOverflowException'));
System.arraycopy$O$I$O$I$I(sb.hb, sb.ix$I(sb.position$()), this.hb, this.ix$I(this.position$()), n);
sb.position$I(sb.position$() + n);
this.position$I(this.position$() + n);
} else if (src.isDirect$()) {
var n=src.remaining$();
if (n > this.remaining$()) throw Clazz.new_(Clazz.load('java.nio.BufferOverflowException'));
src.get$HA$I$I(this.hb, this.ix$I(this.position$()), n);
this.position$I(this.position$() + n);
} else {
C$.superclazz.prototype.put$java_nio_ShortBuffer.apply(this, [src]);
}return this;
});

Clazz.newMeth(C$, 'compact$',  function () {
System.arraycopy$O$I$O$I$I(this.hb, this.ix$I(this.position$()), this.hb, this.ix$I(0), this.remaining$());
this.position$I(this.remaining$());
this.limit$I(this.capacity$());
this.discardMark$();
return this;
});

Clazz.newMeth(C$, 'order$',  function () {
return $I$(3).nativeOrder$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:20 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
