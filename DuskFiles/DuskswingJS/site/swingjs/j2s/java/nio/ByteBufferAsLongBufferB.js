(function(){var P$=Clazz.newPackage("java.nio"),I$=[[0,'java.nio.ByteBufferAsLongBufferRB','java.nio.Bits','java.nio.ByteOrder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ByteBufferAsLongBufferB", null, 'java.nio.LongBuffer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['$offset'],'O',['bb','java.nio.ByteBuffer']]]

Clazz.newMeth(C$, 'c$$java_nio_ByteBuffer',  function (paramByteBuffer) {
;C$.superclazz.c$$I$I$I$I.apply(this,[-1, 0, paramByteBuffer.remaining$() >> 3, paramByteBuffer.remaining$() >> 3]);C$.$init$.apply(this);
this.bb=paramByteBuffer;
var i=this.capacity$();
this.limit$I(i);
var j=this.position$();
Clazz.assert(C$, this, function(){return (j <= i)});
this.$offset=j;
}, 1);

Clazz.newMeth(C$, 'c$$java_nio_ByteBuffer$I$I$I$I$I',  function (paramByteBuffer, paramInt1, paramInt2, paramInt3, paramInt4, paramInt5) {
;C$.superclazz.c$$I$I$I$I.apply(this,[paramInt1, paramInt2, paramInt3, paramInt4]);C$.$init$.apply(this);
this.bb=paramByteBuffer;
this.$offset=paramInt5;
}, 1);

Clazz.newMeth(C$, 'slice$',  function () {
var i=this.position$();
var j=this.limit$();
Clazz.assert(C$, this, function(){return (i <= j)});
var k=i <= j ? j - i : 0;
var m=(i << 3) + this.$offset;
Clazz.assert(C$, this, function(){return (m >= 0)});
return Clazz.new_(C$.c$$java_nio_ByteBuffer$I$I$I$I$I,[this.bb, -1, 0, k, k, m]);
});

Clazz.newMeth(C$, 'duplicate$',  function () {
return Clazz.new_(C$.c$$java_nio_ByteBuffer$I$I$I$I$I,[this.bb, this.markValue$(), this.position$(), this.limit$(), this.capacity$(), this.$offset]);
});

Clazz.newMeth(C$, 'asReadOnlyBuffer$',  function () {
return Clazz.new_([this.bb, this.markValue$(), this.position$(), this.limit$(), this.capacity$(), this.$offset],$I$(1,1).c$$java_nio_ByteBuffer$I$I$I$I$I);
});

Clazz.newMeth(C$, 'ix$I',  function (paramInt) {
return (paramInt << 3) + this.$offset;
});

Clazz.newMeth(C$, 'get$',  function () {
return $I$(2,"getLongB$java_nio_ByteBuffer$I",[this.bb, this.ix$I(this.nextGetIndex$())]);
});

Clazz.newMeth(C$, 'get$I',  function (paramInt) {
return $I$(2,"getLongB$java_nio_ByteBuffer$I",[this.bb, this.ix$I(this.checkIndex$I(paramInt))]);
});

Clazz.newMeth(C$, 'put$J',  function (paramLong) {
$I$(2,"putLongB$java_nio_ByteBuffer$I$J",[this.bb, this.ix$I(this.nextPutIndex$()), paramLong]);
return this;
});

Clazz.newMeth(C$, 'put$I$J',  function (paramInt, paramLong) {
$I$(2,"putLongB$java_nio_ByteBuffer$I$J",[this.bb, this.ix$I(this.checkIndex$I(paramInt)), paramLong]);
return this;
});

Clazz.newMeth(C$, 'compact$',  function () {
var i=this.position$();
var j=this.limit$();
Clazz.assert(C$, this, function(){return (i <= j)});
var k=i <= j ? j - i : 0;
var localByteBuffer1=this.bb.duplicate$();
localByteBuffer1.limit$I(this.ix$I(j));
localByteBuffer1.position$I(this.ix$I(0));
var localByteBuffer2=localByteBuffer1.slice$();
localByteBuffer2.position$I(i << 3);
localByteBuffer2.compact$();
this.position$I(k);
this.limit$I(this.capacity$());
this.discardMark$();
return this;
});

Clazz.newMeth(C$, 'isDirect$',  function () {
return this.bb.isDirect$();
});

Clazz.newMeth(C$, 'isReadOnly$',  function () {
return false;
});

Clazz.newMeth(C$, 'order$',  function () {
return $I$(3).BIG_ENDIAN;
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:20 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
