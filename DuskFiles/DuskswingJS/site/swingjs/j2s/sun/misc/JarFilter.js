(function(){var P$=Clazz.newPackage("sun.misc"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JarFilter", null, null, 'java.io.FilenameFilter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'accept$java_io_File$S',  function (dir, name) {
var lower=name.toLowerCase$();
return lower.endsWith$S(".jar") || lower.endsWith$S(".zip") ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:58:46 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
