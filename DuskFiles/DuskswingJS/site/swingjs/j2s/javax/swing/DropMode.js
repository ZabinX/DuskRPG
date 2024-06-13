(function(){var P$=Clazz.newPackage("javax.swing"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "DropMode", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "USE_SELECTION", 0, []);
Clazz.newEnumConst($vals, C$.c$, "ON", 1, []);
Clazz.newEnumConst($vals, C$.c$, "INSERT", 2, []);
Clazz.newEnumConst($vals, C$.c$, "INSERT_ROWS", 3, []);
Clazz.newEnumConst($vals, C$.c$, "INSERT_COLS", 4, []);
Clazz.newEnumConst($vals, C$.c$, "ON_OR_INSERT", 5, []);
Clazz.newEnumConst($vals, C$.c$, "ON_OR_INSERT_ROWS", 6, []);
Clazz.newEnumConst($vals, C$.c$, "ON_OR_INSERT_COLS", 7, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:52 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
