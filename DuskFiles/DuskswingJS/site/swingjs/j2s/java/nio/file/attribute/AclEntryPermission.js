(function(){var P$=Clazz.newPackage("java.nio.file.attribute"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "AclEntryPermission", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['LIST_DIRECTORY','java.nio.file.attribute.AclEntryPermission','+ADD_FILE','+ADD_SUBDIRECTORY']]]

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "READ_DATA", 0, []);
Clazz.newEnumConst($vals, C$.c$, "WRITE_DATA", 1, []);
Clazz.newEnumConst($vals, C$.c$, "APPEND_DATA", 2, []);
Clazz.newEnumConst($vals, C$.c$, "READ_NAMED_ATTRS", 3, []);
Clazz.newEnumConst($vals, C$.c$, "WRITE_NAMED_ATTRS", 4, []);
Clazz.newEnumConst($vals, C$.c$, "EXECUTE", 5, []);
Clazz.newEnumConst($vals, C$.c$, "DELETE_CHILD", 6, []);
Clazz.newEnumConst($vals, C$.c$, "READ_ATTRIBUTES", 7, []);
Clazz.newEnumConst($vals, C$.c$, "WRITE_ATTRIBUTES", 8, []);
Clazz.newEnumConst($vals, C$.c$, "DELETE", 9, []);
Clazz.newEnumConst($vals, C$.c$, "READ_ACL", 10, []);
Clazz.newEnumConst($vals, C$.c$, "WRITE_ACL", 11, []);
Clazz.newEnumConst($vals, C$.c$, "WRITE_OWNER", 12, []);
Clazz.newEnumConst($vals, C$.c$, "SYNCHRONIZE", 13, []);
C$.LIST_DIRECTORY=C$.READ_DATA;
C$.ADD_FILE=C$.WRITE_DATA;
C$.ADD_SUBDIRECTORY=C$.APPEND_DATA;
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:23 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
