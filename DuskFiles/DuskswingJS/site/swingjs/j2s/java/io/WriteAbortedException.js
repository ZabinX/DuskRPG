(function(){var P$=java.io,I$=[];
/*c*/var C$=Clazz.newClass(P$, "WriteAbortedException", null, 'java.io.ObjectStreamException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['detail','Exception']]]

Clazz.newMeth(C$, 'c$$S$Exception',  function (detailMessage, rootCause) {
;C$.superclazz.c$$S.apply(this,[detailMessage]);C$.$init$.apply(this);
this.detail=rootCause;
this.initCause$Throwable(rootCause);
}, 1);

Clazz.newMeth(C$, 'getMessage$',  function () {
var msg=C$.superclazz.prototype.getMessage$.apply(this, []);
if (this.detail != null ) {
msg=msg + "; " + this.detail.toString() ;
}return msg;
});

Clazz.newMeth(C$, 'getCause$',  function () {
return this.detail;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:15 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
