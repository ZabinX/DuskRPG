(function(){var P$=Clazz.newPackage("javax.xml.sax"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SAXException", null, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['exception','Exception']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.exception=null;
}, 1);

Clazz.newMeth(C$, 'c$$S',  function (message) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
this.exception=null;
}, 1);

Clazz.newMeth(C$, 'c$$Exception',  function (e) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.exception=e;
}, 1);

Clazz.newMeth(C$, 'c$$S$Exception',  function (message, e) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
this.exception=e;
}, 1);

Clazz.newMeth(C$, 'getMessage$',  function () {
var message=C$.superclazz.prototype.getMessage$.apply(this, []);
if (message == null  && this.exception != null  ) {
return this.exception.getMessage$();
} else {
return message;
}});

Clazz.newMeth(C$, 'getException$',  function () {
return this.exception;
});

Clazz.newMeth(C$, 'toString',  function () {
if (this.exception != null ) {
return this.exception.toString();
} else {
return C$.superclazz.prototype.toString.apply(this, []);
}});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:35 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
