(function(){var P$=Clazz.newPackage("com.sun.imageio.stream"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "StreamFinalizer");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['stream','javax.imageio.stream.ImageInputStream']]]

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageInputStream',  function (stream) {
;C$.$init$.apply(this);
this.stream=stream;
}, 1);

Clazz.newMeth(C$, 'finalize$',  function () {
try {
this.stream.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
} finally {
this.stream=null;
C$.superclazz.prototype.finalize$.apply(this, []);
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:56 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
