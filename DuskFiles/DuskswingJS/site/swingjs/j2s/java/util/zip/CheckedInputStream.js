(function(){var P$=Clazz.newPackage("java.util.zip");
/*c*/var C$=Clazz.newClass(P$, "CheckedInputStream", null, 'java.io.FilterInputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['cksum','swingjs.jzlib.Checksum']]]

Clazz.newMeth(C$, 'c$$java_io_InputStream$swingjs_jzlib_Checksum',  function ($in, cksum) {
;C$.superclazz.c$$java_io_InputStream.apply(this,[$in]);C$.$init$.apply(this);
this.cksum=cksum;
}, 1);

Clazz.newMeth(C$, 'read$',  function () {
var b=this.$in.read$();
if (b != -1) {
this.cksum.updateByteAsInt$I(b);
}return b;
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (buf, off, len) {
len=this.$in.read$BA$I$I(buf, off, len);
if (len != -1) {
this.cksum.update$BA$I$I(buf, off, len);
}return len;
});

Clazz.newMeth(C$, 'skip$J',  function (n) {
var buf=Clazz.array(Byte.TYPE, [512]);
var total=0;
while (Long.$lt(total,n )){
var len=Long.$sub(n,total);
len=this.read$BA$I$I(buf, 0, Long.$lt(len,buf.length ) ? Long.$ival(len) : buf.length);
if (Long.$eq(len,-1 )) {
return total;
}(total=Long.$add(total,(len)));
}
return total;
});

Clazz.newMeth(C$, 'getChecksum$',  function () {
return this.cksum;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:43 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
