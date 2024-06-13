(function(){var P$=Clazz.newPackage("javax.json.stream"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "JsonParser", function(){
}, null, 'java.io.Closeable');
C$.$classes$=[['Event',25]];

C$.$clinit$=2;
;
(function(){/*e*/var C$=Clazz.newClass(P$.JsonParser, "Event", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "START_ARRAY", 0, []);
Clazz.newEnumConst($vals, C$.c$, "START_OBJECT", 1, []);
Clazz.newEnumConst($vals, C$.c$, "KEY_NAME", 2, []);
Clazz.newEnumConst($vals, C$.c$, "VALUE_STRING", 3, []);
Clazz.newEnumConst($vals, C$.c$, "VALUE_NUMBER", 4, []);
Clazz.newEnumConst($vals, C$.c$, "VALUE_TRUE", 5, []);
Clazz.newEnumConst($vals, C$.c$, "VALUE_FALSE", 6, []);
Clazz.newEnumConst($vals, C$.c$, "VALUE_NULL", 7, []);
Clazz.newEnumConst($vals, C$.c$, "END_OBJECT", 8, []);
Clazz.newEnumConst($vals, C$.c$, "END_ARRAY", 9, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:49 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
