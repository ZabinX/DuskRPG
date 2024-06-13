(function(){var P$=Clazz.newPackage("com.sun.imageio.plugins.common"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "InputStreamAdapter", null, 'java.io.InputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['stream','javax.imageio.stream.ImageInputStream']]]

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageInputStream',  function (stream) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.stream=stream;
}, 1);

Clazz.newMeth(C$, 'read$',  function () {
return this.stream.read$();
});

Clazz.newMeth(C$, 'read$BA$I$I',  function (b, off, len) {
return this.stream.read$BA$I$I(b, off, len);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:56:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
