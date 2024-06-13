(function(){var P$=java.io,I$=[];
/*c*/var C$=Clazz.newClass(P$, "InvalidClassException", null, 'java.io.ObjectStreamException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['classname']]]

Clazz.newMeth(C$, 'c$$S',  function (detailMessage) {
;C$.superclazz.c$$S.apply(this,[detailMessage]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$S',  function (className, detailMessage) {
;C$.superclazz.c$$S.apply(this,[detailMessage]);C$.$init$.apply(this);
this.classname=className;
}, 1);

Clazz.newMeth(C$, 'getMessage$',  function () {
var msg=C$.superclazz.prototype.getMessage$.apply(this, []);
if (this.classname != null ) {
msg=this.classname + ';' + ' ' + msg ;
}return msg;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:15 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
