(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'java.nio.charset.CoderResult']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JSCharsetDecoder", null, 'java.nio.charset.CharsetDecoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset$F$F',  function (cs, averageCharsPerByte, maxCharsPerByte) {
;C$.superclazz.c$$java_nio_charset_Charset$F$F.apply(this,[cs, averageCharsPerByte, maxCharsPerByte]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'decodeLoop$java_nio_ByteBuffer$java_nio_CharBuffer',  function ($in, out) {
var b=$in.toString().toCharArray$();

out.a = b;
out.length = out.limit = b.length;
out.position = 0;
return $I$(1).UNDERFLOW;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:59 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
