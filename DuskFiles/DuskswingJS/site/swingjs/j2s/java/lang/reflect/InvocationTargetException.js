(function(){var P$=java.lang.reflect,I$=[];
/*c*/var C$=Clazz.newClass(P$, "InvocationTargetException", null, 'ReflectiveOperationException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['target','Throwable']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.superclazz.c$$Throwable.apply(this,[null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Throwable',  function (exception) {
;C$.superclazz.c$$S$Throwable.apply(this,[null, exception]);C$.$init$.apply(this);
this.target=exception;
}, 1);

Clazz.newMeth(C$, 'c$$Throwable$S',  function (exception, detailMessage) {
;C$.superclazz.c$$S$Throwable.apply(this,[detailMessage, exception]);C$.$init$.apply(this);
this.target=exception;
}, 1);

Clazz.newMeth(C$, 'getTargetException$',  function () {
return this.target;
});

Clazz.newMeth(C$, 'getCause$',  function () {
return this.target;
});
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:18 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
