(function(){var P$=Clazz.newPackage("java.nio.file"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "StandardOpenOption", null, 'Enum', 'java.nio.file.OpenOption');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "READ", 0, []);
Clazz.newEnumConst($vals, C$.c$, "WRITE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "APPEND", 2, []);
Clazz.newEnumConst($vals, C$.c$, "TRUNCATE_EXISTING", 3, []);
Clazz.newEnumConst($vals, C$.c$, "CREATE", 4, []);
Clazz.newEnumConst($vals, C$.c$, "CREATE_NEW", 5, []);
Clazz.newEnumConst($vals, C$.c$, "DELETE_ON_CLOSE", 6, []);
Clazz.newEnumConst($vals, C$.c$, "SPARSE", 7, []);
Clazz.newEnumConst($vals, C$.c$, "SYNC", 8, []);
Clazz.newEnumConst($vals, C$.c$, "DSYNC", 9, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:23 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
