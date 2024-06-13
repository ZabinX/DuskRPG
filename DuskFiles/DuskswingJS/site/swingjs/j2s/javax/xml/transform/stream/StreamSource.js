(function(){var P$=Clazz.newPackage("javax.xml.transform.stream"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "StreamSource", null, null, 'javax.xml.transform.Source');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['publicId','systemId'],'O',['inputStream','java.io.InputStream','reader','java.io.Reader']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream',  function (inputStream) {
;C$.$init$.apply(this);
this.setInputStream$java_io_InputStream(inputStream);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$S',  function (inputStream, systemId) {
;C$.$init$.apply(this);
this.setInputStream$java_io_InputStream(inputStream);
this.setSystemId$S(systemId);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Reader',  function (reader) {
;C$.$init$.apply(this);
this.setReader$java_io_Reader(reader);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Reader$S',  function (reader, systemId) {
;C$.$init$.apply(this);
this.setReader$java_io_Reader(reader);
this.setSystemId$S(systemId);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (systemId) {
;C$.$init$.apply(this);
this.systemId=systemId;
}, 1);

Clazz.newMeth(C$, 'c$$java_io_File',  function (f) {
;C$.$init$.apply(this);
this.setSystemId$S(f.toURI$().toASCIIString$());
}, 1);

Clazz.newMeth(C$, 'setInputStream$java_io_InputStream',  function (inputStream) {
this.inputStream=inputStream;
});

Clazz.newMeth(C$, 'getInputStream$',  function () {
return this.inputStream;
});

Clazz.newMeth(C$, 'setReader$java_io_Reader',  function (reader) {
this.reader=reader;
});

Clazz.newMeth(C$, 'getReader$',  function () {
return this.reader;
});

Clazz.newMeth(C$, 'setPublicId$S',  function (publicId) {
this.publicId=publicId;
});

Clazz.newMeth(C$, 'getPublicId$',  function () {
return this.publicId;
});

Clazz.newMeth(C$, 'setSystemId$S',  function (systemId) {
this.systemId=systemId;
});

Clazz.newMeth(C$, 'getSystemId$',  function () {
return this.systemId;
});

Clazz.newMeth(C$, 'setSystemId$java_io_File',  function (f) {
this.systemId=f.toURI$().toASCIIString$();
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:37 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
