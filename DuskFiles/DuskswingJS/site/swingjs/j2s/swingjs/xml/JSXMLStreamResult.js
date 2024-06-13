(function(){var P$=Clazz.newPackage("swingjs.xml"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JSXMLStreamResult");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['systemId'],'O',['outputStream','java.io.OutputStream','writer','java.io.Writer']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_OutputStream',  function (os) {
;C$.$init$.apply(this);
this.setOutputStream$java_io_OutputStream(os);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Writer',  function (writer) {
;C$.$init$.apply(this);
this.setWriter$java_io_Writer(writer);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (id) {
;C$.$init$.apply(this);
this.systemId=id;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File',  function (f) {
;C$.$init$.apply(this);
this.setSystemId$S(f.toURI$().toASCIIString$());
}, 1);

Clazz.newMeth(C$, 'setOutputStream$java_io_OutputStream',  function (outputStream) {
this.outputStream=outputStream;
});

Clazz.newMeth(C$, 'getOutputStream$',  function () {
return this.outputStream;
});

Clazz.newMeth(C$, 'setWriter$java_io_Writer',  function (writer) {
this.writer=writer;
});

Clazz.newMeth(C$, 'getWriter$',  function () {
return this.writer;
});

Clazz.newMeth(C$, 'setSystemId$S',  function (systemId) {
this.systemId=systemId;
});

Clazz.newMeth(C$, 'setSystemId$java_io_File',  function (f) {
this.systemId=f.toURI$().toASCIIString$();
});

Clazz.newMeth(C$, 'getSystemId$',  function () {
return this.systemId;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:59:13 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
