(function(){var P$=Clazz.newPackage("sun.nio.cs"),I$=[[0,'sun.nio.cs.StandardCharsets',['sun.nio.cs.UTF_16BE','.Decoder'],['sun.nio.cs.UTF_16BE','.Encoder']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "UTF_16BE", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'sun.nio.cs.Unicode');
C$.$classes$=[['Decoder',10],['Encoder',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S$SA.apply(this,["UTF-16BE", $I$(1).aliases_UTF_16BE]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'historicalName$',  function () {
return "UnicodeBigUnmarked";
});

Clazz.newMeth(C$, 'newDecoder$',  function () {
return Clazz.new_($I$(2,1).c$$java_nio_charset_Charset,[this]);
});

Clazz.newMeth(C$, 'newEncoder$',  function () {
return Clazz.new_($I$(3,1).c$$java_nio_charset_Charset,[this]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.UTF_16BE, "Decoder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.nio.cs.UnicodeDecoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset',  function (cs) {
;C$.superclazz.c$$java_nio_charset_Charset$I.apply(this,[cs, 1]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.UTF_16BE, "Encoder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'sun.nio.cs.UnicodeEncoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$java_nio_charset_Charset',  function (cs) {
;C$.superclazz.c$$java_nio_charset_Charset$I$Z.apply(this,[cs, 0, false]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:48 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
