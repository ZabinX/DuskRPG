(function(){var P$=Clazz.newPackage("java.security.cert"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "PKIXReason", null, 'Enum', [['java.security.cert.CertPathValidatorException','java.security.cert.CertPathValidatorException.Reason']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "NAME_CHAINING", 0, []);
Clazz.newEnumConst($vals, C$.c$, "INVALID_KEY_USAGE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "INVALID_POLICY", 2, []);
Clazz.newEnumConst($vals, C$.c$, "NO_TRUST_ANCHOR", 3, []);
Clazz.newEnumConst($vals, C$.c$, "UNRECOGNIZED_CRIT_EXT", 4, []);
Clazz.newEnumConst($vals, C$.c$, "NOT_CA_CERT", 5, []);
Clazz.newEnumConst($vals, C$.c$, "PATH_TOO_LONG", 6, []);
Clazz.newEnumConst($vals, C$.c$, "INVALID_NAME", 7, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:27 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
