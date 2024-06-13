(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "EventObject", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['source','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$O',  function (source) {
;C$.$init$.apply(this);
if (source == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null source"]);
this.source=source;
}, 1);

Clazz.newMeth(C$, 'getSource$',  function () {
return this.source;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[source=" + this.source + "]" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:32 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
