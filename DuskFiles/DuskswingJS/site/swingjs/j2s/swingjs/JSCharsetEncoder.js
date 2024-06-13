(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'java.nio.charset.CoderResult']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSCharsetEncoder", null, 'java.nio.charset.CharsetEncoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$F$F',  function (cs, averageBytesPerChar, maxBytesPerChar) {
;C$.superclazz.c$$java_nio_charset_Charset$F$F.apply(this,[cs, averageBytesPerChar, maxBytesPerChar]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'encodeLoop$java_nio_CharBuffer$java_nio_ByteBuffer',  function ($in, out) {
try {
var b=$in.toString().getBytes$S("utf-8");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
e.printStackTrace$();
} else {
throw e;
}
}

out.a = b;
out.length = out.limit = b.length;
out.position = 0;
return $I$(1).UNDERFLOW;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:59 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
