(function(){var P$=Clazz.newPackage("java.nio.file"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "FileVisitResult", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "CONTINUE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "TERMINATE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "SKIP_SUBTREE", 2, []);
Clazz.newEnumConst($vals, C$.c$, "SKIP_SIBLINGS", 3, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:22 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
