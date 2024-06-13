(function(){var P$=Clazz.newPackage("java.util.logging"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LoggingPermission", null, 'java.security.BasicPermission');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S$S',  function (name, actions) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
if (!name.equals$O("control")) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["name: " + name]);
}if (actions != null  && actions.length$() > 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["actions: " + actions]);
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:39 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
