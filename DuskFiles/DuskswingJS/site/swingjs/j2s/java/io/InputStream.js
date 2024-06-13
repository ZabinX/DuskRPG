(function(){var P$=java.io,I$=[[0,'java.io.PushbackInputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InputStream", null, null, 'java.io.Closeable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['skipBuf','byte[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'available$',  function () {
return 0;
});

Clazz.newMeth(C$, 'close$',  function () {
});

Clazz.newMeth(C$, 'mark$I',  function (readlimit) {
});

Clazz.newMeth(C$, 'markSupported$',  function () {
return false;
});

Clazz.newMeth(C$, 'read$BA',  function (b) {
return this.read$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, offset, length) {
if (offset <= b.length && 0 <= offset  && 0 <= length  && length <= b.length - offset ) {
for (var i=0; i < length; i++) {
var c;
try {
if ((c=this.read$()) == -1) return i == 0 ? -1 : i;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
if (i != 0) return i;
throw e;
} else {
throw e;
}
}
b[offset + i]=(c|0);
}
return length;
}throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException'));
});

Clazz.newMeth(C$, 'reset$',  function () {
throw Clazz.new_(Clazz.load('java.io.IOException'));
});

Clazz.newMeth(C$, 'skip$J',  function (n) {
if (Long.$le(n,0 )) return 0;
var skipped=0;
var toRead=Long.$lt(n,4096 ) ? Long.$ival(n) : 4096;
if (C$.skipBuf == null  || C$.skipBuf.length < toRead ) C$.skipBuf=Clazz.array(Byte.TYPE, [toRead]);
while (Long.$lt(skipped,n )){
var read=this.read$BA$I$I(C$.skipBuf, 0, toRead);
if (read == -1) return skipped;
(skipped=Long.$add(skipped,(read)));
if (read < toRead) return skipped;
if (Long.$lt(Long.$sub(n,skipped),toRead )) toRead=Long.$ival((Long.$sub(n,skipped)));
}
return skipped;
});

Clazz.newMeth(C$, 'transferTo$java_io_OutputStream',  function (out) {
var n=this.available$();
out.write$BA(this.readAllBytes$());
return n;
});

Clazz.newMeth(C$, 'readAllBytes$',  function () {
var b=Clazz.array(Byte.TYPE, [this.available$()]);
this.read$BA$I$I(b, 0, b.length);
return b;
});

Clazz.newMeth(C$, '秘getByteStream$java_io_InputStream$I',  function (ins, pt) {
var newIn=ins;
var isRoot=(pt < 0);
var asPushback=(pt == -2);
if (isRoot) pt=0;
switch (ins.__CLASS_NAME__||"") {
case "java.io.ByteArrayInputStream":
var bis=ins;
bis.pos-=pt;
break;
case "java.io.FileInputStream":
newIn=(ins).秘is;
break;
case "java.io.BufferedInputStream":
pt+=(ins).count - (ins).pos;
newIn=(ins).$in;
break;
default:
newIn=null;
}
if (newIn != null  && newIn !== ins  ) newIn=C$.秘getByteStream$java_io_InputStream$I(newIn, pt);
ins=(newIn != null  ? newIn : isRoot ? ins : null);
return (!isRoot ? ins : newIn != null  ? newIn : asPushback ? Clazz.new_($I$(1,1).c$$java_io_InputStream$I,[ins, 1024]) : null);
}, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:15 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
