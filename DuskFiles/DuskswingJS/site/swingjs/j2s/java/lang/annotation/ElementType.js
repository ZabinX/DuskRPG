(function(){var P$=Clazz.newPackage("java.lang.annotation"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "ElementType", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "TYPE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "FIELD", 1, []);
Clazz.newEnumConst($vals, C$.c$, "METHOD", 2, []);
Clazz.newEnumConst($vals, C$.c$, "PARAMETER", 3, []);
Clazz.newEnumConst($vals, C$.c$, "CONSTRUCTOR", 4, []);
Clazz.newEnumConst($vals, C$.c$, "LOCAL_VARIABLE", 5, []);
Clazz.newEnumConst($vals, C$.c$, "ANNOTATION_TYPE", 6, []);
Clazz.newEnumConst($vals, C$.c$, "PACKAGE", 7, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:18 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
