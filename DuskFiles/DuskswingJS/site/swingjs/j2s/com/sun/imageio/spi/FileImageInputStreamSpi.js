(function(){var P$=Clazz.newPackage("com.sun.imageio.spi"),I$=[[0,'java.io.File','javax.imageio.stream.FileImageInputStream']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileImageInputStreamSpi", null, 'javax.imageio.spi.ImageInputStreamSpi');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['$inputClass','Class']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$S$S$Class.apply(this,["Oracle Corporation", "1.0", C$.$inputClass]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDescription$java_util_Locale',  function (locale) {
return "Service provider that instantiates a FileImageInputStream from a File";
});

Clazz.newMeth(C$, 'createInputStreamInstance$O$Z$java_io_File',  function (input, useCache, cacheDir) {
if (Clazz.instanceOf(input, "java.io.File")) {
try {
return Clazz.new_($I$(2,1).c$$java_io_File,[input]);
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
return null;
} else {
throw e;
}
}
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}});

C$.$static$=function(){C$.$static$=0;
C$.$inputClass=Clazz.getClass($I$(1));
};
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
