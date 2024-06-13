(function(){var P$=Clazz.newPackage("javax.xml.stream.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "EventReaderDelegate", null, null, 'javax.xml.stream.XMLEventReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['reader','javax.xml.stream.XMLEventReader']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_xml_stream_XMLEventReader',  function (reader) {
;C$.$init$.apply(this);
this.reader=reader;
}, 1);

Clazz.newMeth(C$, 'setParent$javax_xml_stream_XMLEventReader',  function (reader) {
this.reader=reader;
});

Clazz.newMeth(C$, 'getParent$',  function () {
return this.reader;
});

Clazz.newMeth(C$, 'nextEvent$',  function () {
return this.reader.nextEvent$();
});

Clazz.newMeth(C$, 'next$',  function () {
return this.reader.next$();
});

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.reader.hasNext$();
});

Clazz.newMeth(C$, 'peek$',  function () {
return this.reader.peek$();
});

Clazz.newMeth(C$, 'close$',  function () {
this.reader.close$();
});

Clazz.newMeth(C$, 'getElementText$',  function () {
return this.reader.getElementText$();
});

Clazz.newMeth(C$, 'nextTag$',  function () {
return this.reader.nextTag$();
});

Clazz.newMeth(C$, 'getProperty$S',  function (name) {
return this.reader.getProperty$S(name);
});

Clazz.newMeth(C$, 'remove$',  function () {
this.reader.remove$();
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:36 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
