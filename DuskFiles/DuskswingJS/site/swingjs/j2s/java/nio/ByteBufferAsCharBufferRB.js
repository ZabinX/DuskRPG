(function(){var P$=Clazz.newPackage("java.nio"),I$=[[0,'java.nio.CharBuffer','java.nio.ByteOrder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ByteBufferAsCharBufferRB", null, 'java.nio.ByteBufferAsCharBufferB');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_nio_ByteBuffer',  function (paramByteBuffer) {
;C$.superclazz.c$$java_nio_ByteBuffer.apply(this,[paramByteBuffer]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_ByteBuffer$I$I$I$I$I',  function (paramByteBuffer, paramInt1, paramInt2, paramInt3, paramInt4, paramInt5) {
;C$.superclazz.c$$java_nio_ByteBuffer$I$I$I$I$I.apply(this,[paramByteBuffer, paramInt1, paramInt2, paramInt3, paramInt4, paramInt5]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'slice$',  function () {
var i=this.position$();
var j=this.limit$();
Clazz.assert(C$, this, function(){return (i <= j)});
var k=i <= j ? j - i : 0;
var m=(i << 1) + this.$offset;
Clazz.assert(C$, this, function(){return (m >= 0)});
return Clazz.new_(C$.c$$java_nio_ByteBuffer$I$I$I$I$I,[this.bb, -1, 0, k, k, m]);
});

Clazz.newMeth(C$, 'duplicate$',  function () {
return Clazz.new_(C$.c$$java_nio_ByteBuffer$I$I$I$I$I,[this.bb, this.markValue$(), this.position$(), this.limit$(), this.capacity$(), this.$offset]);
});

Clazz.newMeth(C$, 'asReadOnlyBuffer$',  function () {
return this.duplicate$();
});

Clazz.newMeth(C$, 'put$C',  function (paramChar) {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'put$I$C',  function (paramInt, paramChar) {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'compact$',  function () {
throw Clazz.new_(Clazz.load('java.nio.ReadOnlyBufferException'));
});

Clazz.newMeth(C$, 'isDirect$',  function () {
return this.bb.isDirect$();
});

Clazz.newMeth(C$, 'isReadOnly$',  function () {
return true;
});

Clazz.newMeth(C$, 'toString$I$I',  function (paramInt1, paramInt2) {
if ((paramInt2 > this.limit$()) || (paramInt1 > paramInt2) ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}try {
var i=paramInt2 - paramInt1;
var arrayOfChar=Clazz.array(Character.TYPE, [i]);
var localCharBuffer1=$I$(1).wrap$CA(arrayOfChar);
var localCharBuffer2=this.duplicate$();
localCharBuffer2.position$I(paramInt1);
localCharBuffer2.limit$I(paramInt2);
localCharBuffer1.put$java_nio_CharBuffer(localCharBuffer2);
return  String.instantialize(arrayOfChar);
} catch (localStringIndexOutOfBoundsException) {
if (Clazz.exceptionOf(localStringIndexOutOfBoundsException,"StringIndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
} else {
throw localStringIndexOutOfBoundsException;
}
}
});

Clazz.newMeth(C$, 'subSequence$I$I',  function (paramInt1, paramInt2) {
var i=this.position$();
var j=this.limit$();
Clazz.assert(C$, this, function(){return (i <= j)});
i=i <= j ? i : j;
var k=j - i;
if ((paramInt1 < 0) || (paramInt2 > k) || (paramInt1 > paramInt2)  ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
}return Clazz.new_(C$.c$$java_nio_ByteBuffer$I$I$I$I$I,[this.bb, -1, i + paramInt1, i + paramInt2, this.capacity$(), this.$offset]);
});

Clazz.newMeth(C$, 'order$',  function () {
return $I$(2).BIG_ENDIAN;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:19 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
