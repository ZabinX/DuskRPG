(function(){var P$=Clazz.newPackage("javax.xml.stream"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "XMLStreamException", null, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['nested','Throwable','location','javax.xml.stream.Location']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (msg) {
;C$.superclazz.c$$S.apply(this,[msg]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Throwable',  function (th) {
;C$.superclazz.c$$Throwable.apply(this,[th]);C$.$init$.apply(this);
this.nested=th;
}, 1);

Clazz.newMeth(C$, 'c$$S$Throwable',  function (msg, th) {
;C$.superclazz.c$$S$Throwable.apply(this,[msg, th]);C$.$init$.apply(this);
this.nested=th;
}, 1);

Clazz.newMeth(C$, 'c$$S$javax_xml_stream_Location$Throwable',  function (msg, location, th) {
;C$.superclazz.c$$S.apply(this,["ParseError at [row,col]:[" + location.getLineNumber$() + "," + location.getColumnNumber$() + "]\n" + "Message: " + msg ]);C$.$init$.apply(this);
this.nested=th;
this.location=location;
}, 1);

Clazz.newMeth(C$, 'c$$S$javax_xml_stream_Location',  function (msg, location) {
;C$.superclazz.c$$S.apply(this,["ParseError at [row,col]:[" + location.getLineNumber$() + "," + location.getColumnNumber$() + "]\n" + "Message: " + msg ]);C$.$init$.apply(this);
this.location=location;
}, 1);

Clazz.newMeth(C$, 'getNestedException$',  function () {
return this.nested;
});

Clazz.newMeth(C$, 'getLocation$',  function () {
return this.location;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:36 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
