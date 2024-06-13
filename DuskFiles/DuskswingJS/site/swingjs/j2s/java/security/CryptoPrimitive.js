(function(){var P$=Clazz.newPackage("java.security"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "CryptoPrimitive", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "MESSAGE_DIGEST", 0, []);
Clazz.newEnumConst($vals, C$.c$, "SECURE_RANDOM", 1, []);
Clazz.newEnumConst($vals, C$.c$, "BLOCK_CIPHER", 2, []);
Clazz.newEnumConst($vals, C$.c$, "STREAM_CIPHER", 3, []);
Clazz.newEnumConst($vals, C$.c$, "MAC", 4, []);
Clazz.newEnumConst($vals, C$.c$, "KEY_WRAP", 5, []);
Clazz.newEnumConst($vals, C$.c$, "PUBLIC_KEY_ENCRYPTION", 6, []);
Clazz.newEnumConst($vals, C$.c$, "SIGNATURE", 7, []);
Clazz.newEnumConst($vals, C$.c$, "KEY_ENCAPSULATION", 8, []);
Clazz.newEnumConst($vals, C$.c$, "KEY_AGREEMENT", 9, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:24 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
