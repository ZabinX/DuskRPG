(function(){var P$=Clazz.newPackage("javajs.http"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "HttpResponseException", null, 'javajs.http.ClientProtocolException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['statusCode'],'S',['reasonPhrase']]]

Clazz.newMeth(C$, 'c$$I$S$S',  function (statusCode, reasonPhrase, message) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
this.statusCode=statusCode;
this.reasonPhrase=reasonPhrase;
}, 1);

Clazz.newMeth(C$, 'c$$I$S',  function (statusCode, reasonPhrase) {
C$.c$$I$S$S.apply(this, [statusCode, reasonPhrase, String.format$S$OA("%d %s", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(statusCode), reasonPhrase]))]);
}, 1);

Clazz.newMeth(C$, 'getStatusCode$',  function () {
return this.statusCode;
});

Clazz.newMeth(C$, 'getReasonPhrase$',  function () {
return this.reasonPhrase;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:45 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
