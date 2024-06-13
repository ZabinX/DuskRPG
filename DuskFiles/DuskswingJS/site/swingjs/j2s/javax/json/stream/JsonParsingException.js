(function(){var P$=Clazz.newPackage("javax.json.stream"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JsonParsingException", null, 'javax.json.JsonException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['location','javax.json.stream.JsonLocation']]]

Clazz.newMeth(C$, 'c$$S$javax_json_stream_JsonLocation',  function (message, location) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
this.location=location;
}, 1);

Clazz.newMeth(C$, 'c$$S$Throwable$javax_json_stream_JsonLocation',  function (message, cause, location) {
;C$.superclazz.c$$S$Throwable.apply(this,[message, cause]);C$.$init$.apply(this);
this.location=location;
}, 1);

Clazz.newMeth(C$, 'getLocation$',  function () {
return this.location;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
