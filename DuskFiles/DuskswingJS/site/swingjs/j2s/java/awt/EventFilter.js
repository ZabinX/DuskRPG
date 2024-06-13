(function(){var P$=Clazz.newPackage("java.awt"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "EventFilter", function(){
});
C$.$classes$=[['FilterAction',25]];
;
(function(){/*e*/var C$=Clazz.newClass(P$.EventFilter, "FilterAction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "ACCEPT", 0, []);
Clazz.newEnumConst($vals, C$.c$, "REJECT", 1, []);
Clazz.newEnumConst($vals, C$.c$, "ACCEPT_IMMEDIATELY", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('5.0.1-v2');//Created 2024-05-06 14:57:02 Java2ScriptVisitor version 5.0.1-v2 net.sf.j2s.core.jar version 5.0.1-v2
